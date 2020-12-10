import { ApplicationCommandInteractionDataOption } from "./ApplicationCommandInteractionDataOption";
import { snowflake } from "./Snowflake";

export type ApplicationCommandInteractionData = {
  id: snowflake;
  name: string;
  options: ApplicationCommandInteractionDataOption[];
};
