import { ApplicationCommandOptionChoice } from "./ApplicationCommandOptionChoice";

export type ApplicationCommandOption = {
  type: ApplicationCommandOptionType;
  name: string;
  description: string;
  default?: boolean;
  required?: boolean;
  choices?: ApplicationCommandOptionChoice[];
  options?: ApplicationCommandOption[];
};

export type ApplicationCommandOptionValue = string | number | boolean;

export enum ApplicationCommandOptionType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
}
