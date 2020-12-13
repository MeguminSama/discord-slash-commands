import { ApplicationCommandOptionType } from "./ApplicationCommandOptions";

type ValueData = {
  name: string;
  value: ApplicationCommandOptionType;
};

type NestedData = {
  name: string;
  options: ApplicationCommandInteractionDataOption[];
};

export type ApplicationCommandInteractionDataOption = ValueData | NestedData;
