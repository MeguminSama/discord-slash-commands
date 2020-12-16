import { ApplicationCommandOptionValue } from "./ApplicationCommandOptions";

type ValueData = {
  name: string;
  value: ApplicationCommandOptionValue;
};

type NestedData = {
  name: string;
  options: ApplicationCommandInteractionDataOption[];
};

export type ApplicationCommandInteractionDataOption = ValueData | NestedData;
