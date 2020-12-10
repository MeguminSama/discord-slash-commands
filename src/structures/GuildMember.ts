import { snowflake } from "./Snowflake";
import { User } from "./User";

export type GuildMember = {
  user?: User;
  nick?: string;
  roles: snowflake[];
  joinedAt: Date;
  premiumSince?: Date;
  dead?: boolean;
  mute?: boolean;
};
