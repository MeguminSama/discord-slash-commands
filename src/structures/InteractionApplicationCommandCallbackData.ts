import { AllowedMentions } from "./AllowedMentions";
import { Embed } from "./Embed";
import { MessageFlags } from "./MessageFlags";

export type InteractionApplicationCommandCallbackData = {
  tts?: boolean;
  content: string;
  embeds?: Embed;
  allowedMentions?: AllowedMentions;
  flags: MessageFlags[];
};
