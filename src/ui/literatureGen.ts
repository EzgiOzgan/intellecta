import { ItemView, WorkspaceLeaf } from "obsidian";

export const VIEW_TYPE_LITERATURE = "literature-generation-view";

// Class to manage Literature Note Generation UI
export class LiteratureGenView extends ItemView{
    constructor(leaf: WorkspaceLeaf){
        super(leaf);
    }

    getViewType() {
        return VIEW_TYPE_LITERATURE;
    }

    getDisplayText() {
        return "Literature Note Generator"
    }

    async onOpen() {
        // Write what will happen on open
        this.containerEl.empty();
        this.containerEl.createEl("h2", {
            text: "Literature Notes Suggestions"
        })
        // suggestions = a method that calls OpenAI API, generates suggestions, and returns a list of content
        // a loop to create as many div elements as the length of suggestions
        // a button at the end of each div to add the text in div to a new litarature note
        // also add a real time editing option for what GPT generates for the user 
    }

    async onClose() {
        // Write what will happen on close
    }
}