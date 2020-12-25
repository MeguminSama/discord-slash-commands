require('dotenv').config()
const { DiscordInteractions, ApplicationCommandOptionType } = require('../dist')

const discord = new DiscordInteractions({
  applicationId: process.env.TESTS_APPID,
  authToken: process.env.TESTS_TOKEN,
  publicKey: process.env.TESTS_PUBKEY
})

describe('Create, Get, and Delete a Guild Command', () => {
  let newApplication
  let GUILD_ID = process.env.TESTS_GUILDID
  test('Create a Guild Command', async () => {
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
    }, GUILD_ID)
    expect(newApplication).toHaveProperty('id')
  })

  test('Get a Guild Command', async () => {
    expect(await discord.getApplicationCommands(GUILD_ID)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: newApplication.id
        })
      ])
    )
  })
  test('Delete a Guild Command', async () => {
    expect(await discord.deleteApplicationCommand(newApplication.id, GUILD_ID)).toBe(true)
  })
})
