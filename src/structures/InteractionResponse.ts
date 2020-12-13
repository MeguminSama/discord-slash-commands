import { InteractionApplicationCommandCallbackData } from "./InteractionApplicationCommandCallbackData";
import { InteractionResponseType } from "./InteractionResponseType";

export type InteractionResponse = {
  type: InteractionResponseType;
  data?: InteractionApplicationCommandCallbackData;
};
