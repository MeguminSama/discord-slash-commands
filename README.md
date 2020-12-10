# discord-slash-commands

Slash command support for the new Discord Interactions API.

## Importing

To import:

```ts
import { DiscordInteractions } from 'slash-commands'
```

or

```js
const Interactions = require('slash-commands').default
```

## Initialization

```js
const interaction = new DiscordInteractions({
  applicationId: '1234567890',
  authToken: 'bot token',
  publicKey: 'discord-provided public key'
})
```

## Usage

```js
await interaction
  .getApplicationCommands()
  .then(console.log)
  .catch(console.error)

await interaction
  .createApplicationCommand({
    name: 'avatar',
    description: 'get a users avatar',
    options: [
      {
        name: 'big',
        description: 'should the image be big',
        type: ApplicationCommandOptionType.BOOLEAN
      }
    ]
  })
  .then(console.log)
  .catch(console.error)
```

## Contributing

Help is much-needed to improve the library and add all features. Please feel free to make a PR to [the repository](https://github.com/MeguminSama/discord-slash-commands).
