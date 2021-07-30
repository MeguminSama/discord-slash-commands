import { ApplicationCommandInteractionDataOption } from "./ApplicationCommandInteractionDataOption";
import { Snowflake } from "./Snowflake";

export type ApplicationCommandInteractionData = {
	id: Snowflake;
	name: string;
	options?: ApplicationCommandInteractionDataOption[];
};

export type ApplicationButtonInteractionData = {
	custom_id: string;
	component_type: 2;
};
