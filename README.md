# discord-slash-commands

This package provides Slash command support for the new Discord Interactions API.

We've documented every type used by the interactions API, so you can make use of this library in your own projects, or make use of the utility functions we've provided to create, get, and delete slash commands.
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
