# discord-slash-commands

This package provides Slash command support for the new Discord Interactions API.

We've documented every type used by the interactions API, so you can make use of this library in your own projects, or make use of the utility functions we've provided to create, get, and delete slash commands.

## Importing

To import:

```ts
import { DiscordInteractions } from "slash-commands";
```

or

```js
const { DiscordInteractions } = require("slash-commands");
```

## Initialization

```js
const interaction = new DiscordInteractions({
  applicationId: "1234567890",
  authToken: "bot token",
  publicKey: "discord-provided public key",
});
```

## Usage

> The following examples use `496279654483886100` as a guild id and `545581357812678656` as a command id

### Getting Commands

```js
// Get Global Commands
await interaction
  .getApplicationCommands()
  .then(console.log)
  .catch(console.error);

// Get Guild Commands
await interaction
  .getApplicationCommands("496279654483886100")
  .then(console.log)
  .catch(console.error);
```

### Creating Commands

```js
const command = {
  name: "avatar",
  description: "get a users avatar",
  options: [
    {
      name: "big",
      description: "should the image be big",
      type: ApplicationCommandOptionType.BOOLEAN,
    },
  ],
};

// Create Global Command
await interaction
  .createApplicationCommand(command)
  .then(console.log)
  .catch(console.error);

// Create Guild Command
await interaction
  .createApplicationCommand(command, "496279654483886100")
  .then(console.log)
  .catch(console.error);
```

### Editing Commands

```js
const command = {
  name: "avatar",
  description: "get a users avatar",
  options: [
    {
      name: "small",
      description: "should the image be small",
      type: ApplicationCommandOptionType.BOOLEAN,
    },
  ],
};

// Edit Global Command
await interaction
  .createApplicationCommand(command, null, "545581357812678656")
  .then(console.log)
  .catch(console.error);

// Edit Guild Command
await interaction
  .createApplicationCommand(command, "496279654483886100", "545581357812678656")
  .then(console.log)
  .catch(console.error);
```

### Deleting Commands

```js
// Delete Global Command
await interaction
  .deleteApplicationCommand("545581357812678656")
  .then(console.log)
  .catch(console.error);

// Delete Guild Command
await interaction
  .deleteApplicationCommand("545581357812678656", "496279654483886100")
  .then(console.log)
  .catch(console.error);
```

## Contributing

Help is much-needed to improve the library and add all features. Please feel free to make a PR to [the repository](https://github.com/MeguminSama/discord-slash-commands).
