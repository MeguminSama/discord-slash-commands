import fetch from "node-fetch";
import {
  ApplicationCommand,
  PartialApplicationCommand,
} from "./structures/ApplicationCommand";
import { snowflake } from "./structures/Snowflake";
import { verifySignature as _verifySignature } from "./utils";

const DISCORD_ENDPOINT = "https://discord.com/api/v8/";

const makeEndpoint = (endpoint) => `${DISCORD_ENDPOINT}${endpoint}`;

export class DiscordInteractions {
  private publicKey: snowflake;
  private applicationid: snowflake;
  private authToken: string;
  private tokenPrefix: string;

  constructor(
    opts: {
      applicationId: snowflake;
      publicKey: snowflake;
      authToken: string;
      tokenPrefix?: string;
    },
  ) {
    this.publicKey = opts.publicKey;
    this.applicationid = opts.applicationId;
    this.authToken = opts.authToken;
    this.tokenPrefix = (opts.tokenPrefix || "Bot") + " ";
  }

  verifySignature = (signature: string, timestamp: string, rawBody: string) => {
    return _verifySignature(this.publicKey, signature, timestamp, rawBody);
  };

  getApplicationCommands = () => {
    return fetch(makeEndpoint(`applications/${this.applicationid}/commands`), {
      headers: {
        "Authorization": `${this.tokenPrefix}${this.authToken}`,
      },
    })
      .then((d) => d.json())
      .then((d) => d as ApplicationCommand);
  };

  createApplicationCommand = (command: PartialApplicationCommand) => {
    return fetch(makeEndpoint(`applications/${this.applicationid}/commands`), {
      method: "POST",
      body: JSON.stringify(command),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${this.tokenPrefix}${this.authToken}`,
      },
    })
      .then((d) => d.json())
      .then((d) => d as ApplicationCommand);
  };

  editApplicationCommand = (
    commandId: number,
    command: PartialApplicationCommand,
  ) => {
    return fetch(
      makeEndpoint(`applications/${this.applicationid}/commands/${commandId}`),
      {
        method: "POST",
        body: JSON.stringify(command),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${this.tokenPrefix}${this.authToken}`,
        },
      },
    )
      .then((d) => d.json())
      .then((d) => d as ApplicationCommand);
  };

  deleteApplicationCommand = (commandId: string) => {
    return fetch(
      makeEndpoint(`applications/${this.applicationid}/commands/${commandId}`),
      {
        method: "DELETE",
        headers: {
          "Authorization": `${this.tokenPrefix}${this.authToken}`,
        },
      },
    );
  };

  getGuildCommands = (guildId: snowflake) => {
    return fetch(
      makeEndpoint(
        `applications/${this.applicationid}/guilds/${guildId}/commands`,
      ),
      {
        headers: {
          "Authorization": `${this.tokenPrefix}${this.authToken}`,
        },
      },
    )
      .then((d) => d.json())
      .then((d) => d as ApplicationCommand);
  };

  createGuildCommand = (
    guildId: snowflake,
    command: PartialApplicationCommand,
  ) => {
    return fetch(
      makeEndpoint(
        `applications/${this.applicationid}/guilds/${guildId}/commands`,
      ),
      {
        method: "POST",
        body: JSON.stringify(command),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${this.tokenPrefix}${this.authToken}`,
        },
      },
    )
      .then((d) => d.json())
      .then((d) => d as ApplicationCommand);
  };

  editGuildCommand = (
    guildId: snowflake,
    commandId: number,
    command: PartialApplicationCommand,
  ) => {
    return fetch(
      makeEndpoint(
        `applications/${this.applicationid}/guilds/${guildId}/commands/${commandId}`,
      ),
      {
        method: "POST",
        body: JSON.stringify(command),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${this.tokenPrefix}${this.authToken}`,
        },
      },
    )
      .then((d) => d.json())
      .then((d) => d as ApplicationCommand);
  };

  deleteGuildCommand = (guildId: snowflake, commandId: string) => {
    return fetch(
      makeEndpoint(
        `applications/${this.applicationid}/guilds/${guildId}/commands/${commandId}`,
      ),
      {
        method: "DELETE",
        headers: {
          "Authorization": `${this.tokenPrefix}${this.authToken}`,
        },
      },
    );
  };
}

export default DiscordInteractions;
