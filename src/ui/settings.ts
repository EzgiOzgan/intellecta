import { App, PluginSettingTab, Setting } from "obsidian";
import Intellecta from "src/main";

export class IntellectaSettingTab extends PluginSettingTab{
    plugin: Intellecta;

    constructor(app: App, plugin: Intellecta){
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void{
        let { containerEl } = this;
        
        containerEl.empty();
        containerEl.createEl("h1", {
            text: "Intellecta Settings"
        })
        containerEl.createEl("h2", {
            text: "OpenAI"
        })

        // Setting item to enter OpenAI API key
        new Setting(containerEl)
            .setName("API Key")
            .setDesc("The API key obtained from OpenAI")
            .addText((text) => 
                text
                    .setPlaceholder("API Key")
                    .setValue(this.plugin.settings.apiKey)
                    .onChange(async (value) => {
                        this.plugin.settings.apiKey = value;
                        await this.plugin.saveSettings();
                    })
            )
        
        // Setting item to choose language model
        let models = [
            "gpt-3.5-turbo-0613",
            "gpt-4-0613",
            "gpt-4-32k-0613"
        ];
        new Setting(containerEl)
            .setName("Language Model")
            .setDesc("The language model to be used in text generation")
            .addDropdown((dropdown) => {
                models.forEach((modelName) => {
                    dropdown.addOption(modelName, modelName);
                });
                dropdown.setValue(this.plugin.settings.engine);
                dropdown.onChange(async (value) => {
                    this.plugin.settings.engine = value;
                    await this.plugin.saveSettings();
                })
            }) 
    }
}