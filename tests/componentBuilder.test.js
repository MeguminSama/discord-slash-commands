require("dotenv").config();
const {
	ComponentBuilder,
	LinkButtonBuilder,
	ActionRowBuilder,
	ButtonBuilder,
} = require("..");

describe("Create Components with ComponentBuilders", () => {
	test("ComponentBuilder returns Object", () => {
		let button = new LinkButtonBuilder().setUrl("https://example.com").build();
		let row = new ActionRowBuilder().addComponent(button).build();
		let components = new ComponentBuilder().addComponent(row);
		expect(components).toBeInstanceOf(Object);
	});

	test("ActionRowBuilder returns an Object", () => {
		let linkButton = new LinkButtonBuilder()
			.setUrl("https://example.com")
			.build();
		let row = new ActionRowBuilder().addComponent(linkButton).build();
		expect(row).toBeInstanceOf(Object);
	});

	test("ButtonBuilder returns Object", () => {
		let button = new ButtonBuilder()
			.setCustomId("test")
			.setLabel("This is my label")
			.build();
		expect(button).toBeInstanceOf(Object);
	});

	test("LinkButtonBuilder returns an Object", () => {
		let linkButton = new LinkButtonBuilder()
			.setUrl("https://example.com")
			.build();
		expect(linkButton).toBeInstanceOf(Object);
	});
});
