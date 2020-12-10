import { ApplicationCommandInteractionData } from "./ApplicationCommandInteractionData";
import { GuildMember } from "./GuildMember";
import { InteractionType } from "./InteractionType";
import { snowflake } from "./Snowflake";

export type Interaction = {
  id: snowflake;
  type: InteractionType;
  data?: ApplicationCommandInteractionData;
  guildId: snowflake;
  channelId: snowflake;
  member: GuildMember;
  token: string;
};
