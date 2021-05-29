import {
	ActionRow,
	ActionRowChild,
	ButtonEmoji,
	ButtonStyle,
	InteractionButton,
	LinkButton,
} from "../structures/components";

type TopLevelComponent = ActionRow;

export class ComponentBuilder {
	private components: TopLevelComponent[];

	constructor() {
		this.components = [];
	}

	public addComponent(component: TopLevelComponent) {
		if (this.components.length === 5) {
			throw new Error("A message can only have 5 top level components");
		}
		this.components.push(component);
		return this;
	}

	public build(): TopLevelComponent[] {
		return this.components;
	}
}

export class ActionRowBuilder {
	private components: ActionRowChild[] = [];

	public addComponent(component: ActionRowChild) {
		if (this.components.length === 5) {
			throw new Error("A message can only have 5 top level components");
		}
		this.components.push(component);
		return this;
	}

	public build(): ActionRowChild[] {
		return this.components;
	}
}

export class ButtonBuilder {
	private type: 2 = 2;
	private style: ButtonStyle = ButtonStyle.SECONDARY;
	private label?: string;
	private emoji?: ButtonEmoji;
	private custom_id?: string;
	private disabled: boolean = false;

	public setDisabled(value: boolean) {
		this.disabled = value;
	}

	public setStyle(style: ButtonStyle) {
		if (style === ButtonStyle.LINK) {
			throw new Error(
				"The LINK ButtonStyle may only be used with link buttons, use the LinkButtonBuilder to create one"
			);
		}
		this.style = style;
		return this;
	}

	public setLabel(label: string) {
		if (label.length > 80) {
			throw new Error("Button labels must be 80 characters or less");
		}
		this.label = label;
		return this;
	}

	public setEmoji(emoji: ButtonEmoji) {
		this.emoji = emoji;
		return this;
	}

	public setCustomId(id: string) {
		this.custom_id = id;
		return this;
	}

	public build(): InteractionButton {
		if (!this.custom_id)
			throw new Error("Standard buttons must have a custom_id");
		return {
			type: this.type,
			style: this.style,
			label: this.label,
			emoji: this.emoji,
			custom_id: this.custom_id,
			disabled: this.disabled,
		};
	}
}

export class LinkButtonBuilder {
	private type: 2 = 2;
	private style: ButtonStyle.LINK = ButtonStyle.LINK;
	private label?: string;
	private emoji?: ButtonEmoji;
	private url?: string;
	private disabled: boolean = false;

	public setDisabled(value: boolean) {
		this.disabled = value;
	}

	public setLabel(label: string) {
		if (label.length > 80) {
			throw new Error("Button labels must be 80 characters or less");
		}
		this.label = label;
		return this;
	}

	public setEmoji(emoji: ButtonEmoji) {
		this.emoji = emoji;
		return this;
	}

	public setUrl(url: string) {
		this.url = url;
		return this;
	}

	public build(): LinkButton {
		if (!this.url) throw new Error("Link buttons must have a url");
		return {
			type: this.type,
			style: this.style,
			label: this.label,
			emoji: this.emoji,
			url: this.url,
			disabled: this.disabled,
		};
	}
}
