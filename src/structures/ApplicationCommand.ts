import { ApplicationCommandOption } from "./ApplicationCommandOptions";
import { Snowflake } from "./Snowflake";

export enum ApplicationCommandTypes {
  CHAT_INPUT = 1,
  USER = 2,
  MESSAGE = 3
}

export type ApplicationCommand = {
  id: Snowflake;
  type: ApplicationCommandTypes;
  application_id: Snowflake;
  name: string;
  description: string;
  options: ApplicationCommandOption[];
};

export type PartialApplicationCommand = {
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
  type: ApplicationCommandTypes;
};
