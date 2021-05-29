import { Button } from "./Button";

export type ActionRowChild = Button;

export type ActionRow = {
	type: 1;
	components: ActionRowChild[];
};
