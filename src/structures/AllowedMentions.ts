import { snowflake } from "./Snowflake";

export type AllowedMentions = {
  parse: AllowedMentions[];
  roles: snowflake[];
  users: snowflake[];
  repliedUser: boolean;
};

export enum AllowedMentionTypes {
  ROLE = "roles",
  USER = "users",
  EVERYONE = "everyone",
}
