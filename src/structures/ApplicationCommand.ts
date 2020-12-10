import { ApplicationCommandOption } from "./ApplicationCommandOptions";
import { snowflake } from "./Snowflake";

export type ApplicationCommand = {
  id: snowflake;
  applicationId: snowflake;
  name: string;
  description: string;
  options: ApplicationCommandOption[];
};

export type PartialApplicationCommand = {
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
};
