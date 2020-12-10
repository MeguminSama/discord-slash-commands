export type Embed = {
  title?: string;
  // type?: string; // deprecated
  description?: string;
  url?: string;
  timestamp?: Date;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
};

export type EmbedThumbnail = {
  url?: string;
  proxyUrl?: string;
  height?: number;
  width?: number;
};

export type EmbedVideo = {
  url?: string;
  height?: number;
  width?: number;
};

export type EmbedImage = {
  url?: string;
  proxyUrl?: string;
  height?: number;
  width?: number;
};

export type EmbedProvider = {
  name?: string;
  url?: string;
};

export type EmbedAuthor = {
  name?: string;
  url?: string;
  iconUrl?: string;
  proxyIconUrl?: string;
};

export type EmbedFooter = {
  text?: string;
  iconUrl?: string;
  proxyIconUrl?: string;
};

export type EmbedField = {
  name: string;
  value: string;
  inline?: boolean;
};
