import { Menu, Plugin, Notice, TFolder } from "obsidian";
import { IntellectaSettingTab } from "./ui/settings";
import { LiteratureGenView, VIEW_TYPE_LITERATURE } from "./ui/literatureCardUI";

const DEFAULT_SETTINGS: IntellectaSettings = {
    // General OpenAI Settings
    apiKey: "",
    engine: "gpt-3.5-turbo-0613",
    // Card Generation Specific Settings
    CG_Temperature: 0.8,
    CG_MaxTokens: 256,
    CG_TopP: 1,
    CG_FrequencyPenalty: 0,
    CG_PresencePenalty: 0,
};

export default class Intellecta extends Plugin {
    settings: IntellectaSettings;

    async onload() {
        await this.loadSettings();

        // Checks if the "Zettelkasten" folder with required fodler content exists; if not, create
        const folderStructure = [
            "Zettelkasten",
            "Zettelkasten/Permanent",
            "Zettelkasten/Conceptual",
            "Zettelkasten/Literature",
            "Zettelkasten/Literature/Unprocessed"
          ];
          
        for (const folderPath of folderStructure) {
            const existingFolder = this.app.vault.getAbstractFileByPath(folderPath) as TFolder;
          
            if (!existingFolder) {
                const parts = folderPath.split("/");
                let currentPath = "";
                for (const part of parts) {
                currentPath = currentPath ? `${currentPath}/${part}` : part;
                this.app.vault.createFolder(currentPath);
                }
            }
        }
        
        // Listens if a new file is created in unprocessed notes to insert template
        // const chokidar = require("chokidar");
        // const unprocessedDirectory = this.app.vault.getAbstractFileByPath("Zettelkasten/Literature/Unprocessed")?.path;
        // const watcher = chokidar.watch(unprocessedDirectory);

        // watcher.on('add', (filePath) => {
            
        // })

        // This element allows user to interact with plugin through ribbon
        this.addRibbonIcon("brain-circuit","Card Generator",(event) => {
            // Shows a menu with three options corresponding different card types
            const cardTypeMenu = new Menu();
            const cardTypes = [
                {
                    title: "Literature",
                    clickHandler: () => {
                        this.registerView(
                            VIEW_TYPE_LITERATURE,
                            (leaf) =>
                                new LiteratureGenView(leaf)
                        )
                        this.activateView(VIEW_TYPE_LITERATURE);
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

        // This element allows user to change the settings
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

    async activateView(viewType: string) {
        // Activates the chosen view
        this.app.workspace.detachLeavesOfType(viewType);

        await this.app.workspace.getRightLeaf(false).setViewState({
            type: viewType,
            active: true,
        });

        this.app.workspace.revealLeaf(
            this.app.workspace.getLeavesOfType(viewType)[0]
        );
    }
}