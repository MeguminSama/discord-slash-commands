import { AllowedMentions } from "./AllowedMentions";
import { Embed } from "./Embed";
import { MessageFlags } from "./MessageFlags";

type ContentMessage = {
  tts?: boolean;
  content: string;
  // note that embeds do not work with ephemeral messages
  embeds?: Embed[];
  allowedMentions?: AllowedMentions;
  flags?: MessageFlags;
};

type EmbedMessage = {
  tts?: boolean;
  content?: string;
  // note that embeds do not work with ephemeral messages
  embeds: Embed[];
  allowedMentions?: AllowedMentions;
  flags?: MessageFlags;
};

export type InteractionApplicationCommandCallbackData = ContentMessage | EmbedMessage;
