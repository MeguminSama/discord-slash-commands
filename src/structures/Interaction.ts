import { ApplicationCommandInteractionData } from "./ApplicationCommandInteractionData";
import { GuildMember } from "./GuildMember";
import { InteractionType } from "./InteractionType";
import { snowflake } from "./Snowflake";

type ApplicationCommand = {
  id: snowflake;
  type: InteractionType.APPLICATION_COMMAND;
  data: ApplicationCommandInteractionData;
  guildId: snowflake;
  channelId: snowflake;
  member: GuildMember;
  token: string;
};

export type Interaction = ApplicationCommand | {
  id: snowflake;
  type: InteractionType;
  data?: ApplicationCommandInteractionData;
  guildId: snowflake;
  channelId: snowflake;
  member: GuildMember;
  token: string;
};
