import {Menu, Plugin} from "obsidian";
import { IntellectaSettingTab } from "./ui/settings";

const DEFAULT_SETTINGS: IntellectaSettings = {
    // OpenAI API key
    apiKey: "",
    engine: "gpt-3.5-turbo-0613"
};

export default class Intellecta extends Plugin {
    settings: IntellectaSettings;

    async onload() {
        await this.loadSettings();

        this.addRibbonIcon("brain-circuit","Card Generator",(event) => {
            // Shows a menu with three options corresponding different card types
            const cardTypeMenu = new Menu();
            const cardTypes = [
                {
                    title: "Literature",
                    clickHandler: () => {
                        // Literature review card generation function
                    }
                },
                {
                    title: "Permanent",
                    clickHandler: () => {
                        // Permanent review card generation function
                    }
                },
                {
                    title: "Conceptual",
                    clickHandler: () => {
                        // Conceptual review card generation function
                    }
                }
            ];

            for (const cardType of cardTypes) {
                cardTypeMenu.addItem((item) =>
                    item
                        .setTitle(cardType.title)
                        .onClick(cardType.clickHandler)
                )
            }

            cardTypeMenu.showAtMouseEvent(event);
        })

        this.addSettingTab(new IntellectaSettingTab(this.app, this));
    }

    async onunload() {
        // Release any resources configured by the plugin
        // This runs when the plugin is disabled
    }
    
    async loadSettings() {
        // Retrieves and loads the settings
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
    }

    async saveSettings() {
        // Saves the changes in settings
        await this.saveData(this.settings);
    }
}