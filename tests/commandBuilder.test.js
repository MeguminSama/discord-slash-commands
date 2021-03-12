require('dotenv').config()
const {
  CommandBuilder,
  ApplicationCommandOptionType,
  SubcommandBuilder,
  SubcommandGroupBuilder
} = require('..')

describe('Create Commands with CommandBuilders', () => {
  test('CommandBuilder returns Object', () => {
    let cmd = new CommandBuilder()
      .setName('test-name')
      .setDescription('test-description')
      .addOption({
        name: 'command-1',
        description: 'command-1',
        type: ApplicationCommandOptionType.STRING,
        choices: [
          {
            name: 'choice-1',
            value: 'choice-1'
          },
          {
            name: 'choice-2',
            value: 'choice-2'
          }
        ],
        default: true,
        required: true
      })
      .addOption({
        name: 'command-2',
        description: 'command-2',
        type: ApplicationCommandOptionType.STRING,
        choices: [
          {
            name: 'choice-1',
            value: 'choice-1'
          },
          {
            name: 'choice-2',
            value: 'choice-2'
          }
        ],
        default: false,
        required: false
      })
      .build()
    expect(cmd).toBeInstanceOf(Object)
  })

  test('SubcommandBuilder returns Object', () => {
    let cmd = new SubcommandBuilder()
      .setName('subcommand-1')
      .setDescription('subcommand-1')
      .addOption({
        name: 'command-2',
        description: 'command-2',
        type: ApplicationCommandOptionType.STRING,
        choices: [
          {
            name: 'choice-1',
            value: 'choice-1'
          },
          {
            name: 'choice-2',
            value: 'choice-2'
          }
        ],
        default: false,
        required: false
      })
      .setDefault(true)
      .setRequired(true)
    expect(cmd).toBeInstanceOf(Object)
  })
  test('SubcommandGroupBuilder returns an Object', () => {
    let cmd = new SubcommandGroupBuilder()
      .setName('subcommand-1')
      .setDescription('subcommand-1')
      .addOption({
        name: 'command-2',
        description: 'command-2',
        type: ApplicationCommandOptionType.SUB_COMMAND,
        choices: [
          {
            name: 'choice-1',
            value: 'choice-1'
          },
          {
            name: 'choice-2',
            value: 'choice-2'
          }
        ],
        default: false,
        required: false
      })
      .setDefault(true)
      .setRequired(true)
    expect(cmd).toBeInstanceOf(Object)
  })
})
