export enum ButtonStyle {
	PRIMARY = 1,
	SECONDARY = 2,
	SUCCESS = 3,
	DANGER = 4,
	LINK = 5,
}

export type ButtonEmoji = {
	name: string;
	id: string;
	animated: boolean;
};

export type LinkButton = {
	type: 2;
	label?: string;
	emoji?: ButtonEmoji;
	url?: string;
	disabled: boolean;
	style: ButtonStyle.LINK;
};

export type InteractionButton = {
	type: 2;
	style: ButtonStyle;
	label?: string;
	emoji?: ButtonEmoji;
	custom_id: string;
	disabled: boolean;
};

export type Button = LinkButton | InteractionButton;
