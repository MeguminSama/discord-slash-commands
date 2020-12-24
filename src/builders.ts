import {
  ApplicationCommandOption,
  ApplicationCommandOptionChoice,
  ApplicationCommandOptionType,
  PartialApplicationCommand,
} from "./structures";

export class CommandBuilder {
  private name: string;
  private description: string;
  private options: ApplicationCommandOption[];

  public setName(name: string): CommandBuilder {
    if (name.length < 3 || name.length > 32) {
      throw new Error("Command names must be between 3 and 32 characters");
    }
    this.name = name;
    return this;
  }

  public setDescription(description: string): CommandBuilder {
    if (description.length < 1 || description.length > 100) {
      throw new Error(
        "Command descriptions must be between 1 and 100 characters"
      );
    }
    this.description = description;
    return this;
  }

  public addOption(option: ApplicationCommandOption): CommandBuilder {
    this.options.push(option);
    return this;
  }

  public build(): PartialApplicationCommand {
    return {
      name: this.name,
      description: this.description,
      options: this.options,
    };
  }
}

export class SubcommandBuilder {
  type: ApplicationCommandOptionType = ApplicationCommandOptionType.SUB_COMMAND;
  name: string;
  description: string;
  default?: boolean;
  required?: boolean;
  options: ApplicationCommandOption[];

  public setName(name: string): SubcommandBuilder {
    if (name.length < 3 || name.length > 32) {
      throw new Error("Subcommand names must be between 3 and 32 characters");
    }
    this.name = name;
    return this;
  }

  public setDescription(description: string): SubcommandBuilder {
    if (description.length < 1 || description.length > 100) {
      throw new Error(
        "Subcommand descriptions must be between 1 and 100 characters"
      );
    }
    this.description = description;
    return this;
  }

  public setDefault(def: boolean): SubcommandBuilder {
    this.default = def;
    return this;
  }

  public setRequired(required: boolean): SubcommandBuilder {
    this.required = required;
    return this;
  }

  public addOption(option: ApplicationCommandOption): SubcommandBuilder {
    if (
      option.type === ApplicationCommandOptionType.SUB_COMMAND ||
      option.type === ApplicationCommandOptionType.SUB_COMMAND_GROUP
    ) {
      throw new Error(
        "Subcommands can not have subcommands or subcommand groups as options"
      );
    }
    this.options.push(option);
    return this;
  }

  public build(): ApplicationCommandOption {
    return {
      ...this,
    };
  }
}

export class SubcommandGroupBuilder {
  type: ApplicationCommandOptionType =
    ApplicationCommandOptionType.SUB_COMMAND_GROUP;
  name: string;
  description: string;
  default?: boolean;
  required?: boolean;
  options: ApplicationCommandOption[];

  public setName(name: string): SubcommandGroupBuilder {
    if (name.length < 3 || name.length > 32) {
      throw new Error("Group names must be between 3 and 32 characters");
    }
    this.name = name;
    return this;
  }

  public setDescription(description: string): SubcommandGroupBuilder {
    if (description.length < 1 || description.length > 100) {
      throw new Error(
        "Group descriptions must be between 1 and 100 characters"
      );
    }
    this.description = description;
    return this;
  }

  public setDefault(def: boolean): SubcommandGroupBuilder {
    this.default = def;
    return this;
  }

  public setRequired(required: boolean): SubcommandGroupBuilder {
    this.required = required;
    return this;
  }

  public addOption(option: ApplicationCommandOption): SubcommandGroupBuilder {
    if (option.type !== ApplicationCommandOptionType.SUB_COMMAND) {
      throw new Error("Children of subcommand groups must be subcommands");
    }
    this.options.push(option);
    return this;
  }

  public build(): ApplicationCommandOption {
    return {
      ...this,
    };
  }
}

export class ApplicationCommandOptionBuilder {
  type: ApplicationCommandOptionType =
    ApplicationCommandOptionType.SUB_COMMAND_GROUP;
  name: string;
  description: string;
  default?: boolean;
  required?: boolean;
  choices?: ApplicationCommandOptionChoice[];

  public setName(name: string): ApplicationCommandOptionBuilder {
    if (name.length < 3 || name.length > 32) {
      throw new Error("Option names must be between 3 and 32 characters");
    }
    this.name = name;
    return this;
  }

  public setDescription(description: string): ApplicationCommandOptionBuilder {
    if (description.length < 1 || description.length > 100) {
      throw new Error(
        "Option descriptions must be between 1 and 100 characters"
      );
    }
    this.description = description;
    return this;
  }

  public setDefault(def: boolean): ApplicationCommandOptionBuilder {
    this.default = def;
    return this;
  }

  public setRequired(required: boolean): ApplicationCommandOptionBuilder {
    this.required = required;
    return this;
  }

  public addChoice(choice: ApplicationCommandOptionChoice) {
    this.choices.push(choice);
    return this;
  }

  public build(): ApplicationCommandOption {
    return {
      ...this,
    };
  }
}
