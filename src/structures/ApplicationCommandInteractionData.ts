import { ApplicationCommandInteractionDataOption } from "./ApplicationCommandInteractionDataOption";
import { Snowflake } from "./Snowflake";

export type ApplicationCommandInteractionData = {
  id: Snowflake;
  name: string;
  options?: ApplicationCommandInteractionDataOption[];
};
