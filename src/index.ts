import * as centra from "centra";
import {
  ApplicationCommand,
  PartialApplicationCommand,
  snowflake,
} from "./structures";

import { verifySignature as _verifySignature } from "./utils";

const DISCORD_ENDPOINT = "https://discord.com/api/v8/";

const makeEndpoint = (endpoint) => `${DISCORD_ENDPOINT}${endpoint}`;

export * from "./structures";

export class DiscordInteractions {
  private publicKey: snowflake;
  private applicationid: snowflake;
  private authToken: string;
  private tokenPrefix: string;

  constructor(opts: {
    applicationId: snowflake;
    publicKey: snowflake;
    authToken: string;
    tokenPrefix?: string;
  }) {
    this.publicKey = opts.publicKey;
    this.applicationid = opts.applicationId;
    this.authToken = opts.authToken;
    this.tokenPrefix = (opts.tokenPrefix || "Bot") + " ";
  }

  verifySignature = (signature: string, timestamp: string, rawBody: string) => {
    return _verifySignature(this.publicKey, signature, timestamp, rawBody);
  };

  getApplicationCommands = async (guildId?: string) => {
    const request = await centra(
      makeEndpoint(
        guildId
          ? `applications/${this.applicationid}/guilds/${guildId}/commands`
          : `applications/${this.applicationid}/commands`
      )
    )
      .header("Authorization", `${this.tokenPrefix}${this.authToken}`)
      .send();
    return (await request.json()) as ApplicationCommand[];
  };

  createApplicationCommand = async (
    command: PartialApplicationCommand,
    guildId?: string,
    commandId?: string
  ) => {
    const suffix = commandId ? `/${commandId}` : "";
    const request = await centra(
      makeEndpoint(
        guildId
          ? `applications/${this.applicationid}/guilds/${guildId}/commands${suffix}`
          : `applications/${this.applicationid}/commands${suffix}`
      ),
      "POST"
    )
      .body(command, "json")
      .header("Authorization", `${this.tokenPrefix}${this.authToken}`)
      .send();
    return (await request.json()) as ApplicationCommand;
  };

  editApplicationCommand = async (
    commandId: string,
    command: PartialApplicationCommand,
    guildId?: string
  ) => {
    return await this.createApplicationCommand(command, guildId, commandId);
  };

  deleteApplicationCommand = async (commandId: string, guildId?: string) => {
    const request = await centra(
      makeEndpoint(
        guildId
          ? `applications/${this.applicationid}/guilds/${guildId}/commands/${commandId}`
          : `applications/${this.applicationid}/commands/${commandId}`
      ),
      "DELETE"
    )
      .header("Authorization", `${this.tokenPrefix}${this.authToken}`)
      .send();
    return request.statusCode == 204;
  };
}
export default DiscordInteractions;
