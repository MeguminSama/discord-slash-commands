import { Snowflake } from "./Snowflake";

export type User = {
  id: Snowflake;
  username: string;
  discriminator: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfaEnabled?: boolean;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  premiumType?: number;
  publicFlags?: number;
};
