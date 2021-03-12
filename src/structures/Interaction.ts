import { ApplicationCommandInteractionData } from "./ApplicationCommandInteractionData";
import { GuildMember } from "./GuildMember";
import { InteractionType } from "./InteractionType";
import { Snowflake } from "./Snowflake";

export type ApplicationCommandInteraction = {
  id: Snowflake;
  type: InteractionType.APPLICATION_COMMAND;
  data: ApplicationCommandInteractionData;
  guildId: Snowflake;
  channelId: Snowflake;
  member: GuildMember;
  token: string;
};

export type Interaction = ApplicationCommandInteraction | {
  id: Snowflake;
  type: Exclude<InteractionType, InteractionType.APPLICATION_COMMAND>;
  data?: ApplicationCommandInteractionData;
  guild_id: Snowflake;
  channel_id: Snowflake;
  member: GuildMember;
  token: string;
};
