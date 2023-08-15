import {Menu, Plugin} from "obsidian";

export default class Intellecta extends Plugin {
    async onload() {
        // Configure resources needed by the plugin
        // This runs when the plugin is started

        // Add ribbon action
        this.addRibbonIcon("brain-circuit","Card Generator",(event) => {
            //Has to create three options (literature, permenant, connection)
            const cardTypeMenu = new Menu();

            cardTypeMenu.addItem((item) =>
                item
                    .setTitle("Literature")
                    .setIcon("scroll-text")
                    .onClick(() => {
                        // Here comes the literature review card generation function
                    })
            )
        })
    }
    async onunload() {
        // Release any resources configured by the plugin
        // This runs when the plugin is disabled
    }
}