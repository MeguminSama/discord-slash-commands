import { InteractionApplicationCommandCallbackData } from "./InteractionApplicationCommandCallbackData";

export type InteractionResponse = {
  type: InteractionResponseType;
  data?: InteractionApplicationCommandCallbackData;
};
export enum InteractionResponseType {
  PONG = 1,
  ACKNOWLEDGE = 2,
  CHANNEL_MESSAGE = 3,
  CHANNEL_MESSAGE_WITH_SOURCE = 4,
  ACK_WITH_SOURCE = 5,
}
