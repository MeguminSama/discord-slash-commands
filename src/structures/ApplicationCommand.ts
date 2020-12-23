import { ApplicationCommandOption } from "./ApplicationCommandOptions";
import { snowflake } from "./Snowflake";

export type ApplicationCommand = {
  id: snowflake;
  application_id: snowflake;
  name: string;
  description: string;
  options: ApplicationCommandOption[];
};

export type PartialApplicationCommand = {
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
};
