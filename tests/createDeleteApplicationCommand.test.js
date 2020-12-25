require('dotenv').config()
const { DiscordInteractions, ApplicationCommandOptionType } = require('../dist')

const discord = new DiscordInteractions({
  applicationId: process.env.TESTS_APPID,
  authToken: process.env.TESTS_TOKEN,
  publicKey: process.env.TESTS_PUBKEY
})

describe('Create, Get, and Delete an Application Command', () => {
  let newApplication
  test('Create an Application Command', async () => {
    newApplication = await discord.createApplicationCommand({
      name: 'test-command',
      description: 'test-description',
      options: [
        {
          type: ApplicationCommandOptionType.BOOLEAN,
          name: 'is-a-test',
          description: 'is-it-a-test'
        }
      ]
    })
    expect(newApplication).toHaveProperty('id')
  })

  test('Get an Application Command', async () => {
    expect(await discord.getApplicationCommands()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: newApplication.id
        })
      ])
    )
  })
  test('Delete an Application Command', async () => {
    expect(await discord.deleteApplicationCommand(newApplication.id)).toBe(true)
  })
})
