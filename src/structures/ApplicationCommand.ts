import { ApplicationCommandOption } from "./ApplicationCommandOptions";
import { Snowflake } from "./Snowflake";

export type ApplicationCommand = {
  id: Snowflake;
  application_id: Snowflake;
  name: string;
  description: string;
  options: ApplicationCommandOption[];
};

export type PartialApplicationCommand = {
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
};
