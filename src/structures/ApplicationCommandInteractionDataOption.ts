import { ApplicationCommandOptionType } from "./ApplicationCommandOptions";

export type ApplicationCommandInteractionDataOption = {
  name: string;
  value?: ApplicationCommandOptionType;
  options?: ApplicationCommandInteractionDataOption;
};
