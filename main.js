/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => Intellecta
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/ui/settings.ts
var import_obsidian = require("obsidian");
var IntellectaSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
  }
  display() {
    let { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h1", {
      text: "Intellecta Settings"
    });
    containerEl.createEl("h2", {
      text: "OpenAI"
    });
    new import_obsidian.Setting(containerEl).setName("API Key").setDesc("The API key obtained from OpenAI").addText(
      (text) => text.setPlaceholder("API Key").setValue(this.plugin.settings.apiKey).onChange(async (value) => {
        this.plugin.settings.apiKey = value;
        await this.plugin.saveSettings();
      })
    );
    let models = [
      "gpt-3.5-turbo-0613",
      "gpt-4-0613",
      "gpt-4-32k-0613"
    ];
    new import_obsidian.Setting(containerEl).setName("Language Model").setDesc("The language model to be used in text generation").addDropdown((dropdown) => {
      models.forEach((modelName) => {
        dropdown.addOption(modelName, modelName);
      });
      dropdown.setValue(this.plugin.settings.engine);
      dropdown.onChange(async (value) => {
        this.plugin.settings.engine = value;
        await this.plugin.saveSettings();
      });
    });
  }
};

// src/ui/literatureCardUI.ts
var import_obsidian2 = require("obsidian");
var VIEW_TYPE_LITERATURE = "literature-generation-view";
var LiteratureGenView = class extends import_obsidian2.ItemView {
  constructor(leaf) {
    super(leaf);
  }
  getViewType() {
    return VIEW_TYPE_LITERATURE;
  }
  getDisplayText() {
    return "Literature Note Generator";
  }
  async onOpen() {
    this.containerEl.empty();
    this.containerEl.createEl("h2", {
      text: "Literature Notes Suggestions"
    });
  }
  async onClose() {
  }
};

// src/main.ts
var DEFAULT_SETTINGS = {
  // General OpenAI Settings
  apiKey: "",
  engine: "gpt-3.5-turbo-0613",
  // Card Generation Specific Settings
  CG_Temperature: 0.8,
  CG_MaxTokens: 256,
  CG_TopP: 1,
  CG_FrequencyPenalty: 0,
  CG_PresencePenalty: 0
};
var Intellecta = class extends import_obsidian3.Plugin {
  async onload() {
    await this.loadSettings();
    const folderStructure = [
      "Zettelkasten",
      "Zettelkasten/Permanent",
      "Zettelkasten/Conceptual",
      "Zettelkasten/Literature",
      "Zettelkasten/Literature/Unprocessed"
    ];
    for (const folderPath of folderStructure) {
      const existingFolder = this.app.vault.getAbstractFileByPath(folderPath);
      if (!existingFolder) {
        const parts = folderPath.split("/");
        let currentPath = "";
        for (const part of parts) {
          currentPath = currentPath ? `${currentPath}/${part}` : part;
          this.app.vault.createFolder(currentPath);
        }
      }
    }
    this.addRibbonIcon("brain-circuit", "Card Generator", (event) => {
      const cardTypeMenu = new import_obsidian3.Menu();
      const cardTypes = [
        {
          title: "Literature",
          clickHandler: () => {
            this.registerView(
              VIEW_TYPE_LITERATURE,
              (leaf) => new LiteratureGenView(leaf)
            );
            this.activateView(VIEW_TYPE_LITERATURE);
          }
        },
        {
          title: "Permanent",
          clickHandler: () => {
          }
        },
        {
          title: "Conceptual",
          clickHandler: () => {
          }
        }
      ];
      for (const cardType of cardTypes) {
        cardTypeMenu.addItem(
          (item) => item.setTitle(cardType.title).onClick(cardType.clickHandler)
        );
      }
      cardTypeMenu.showAtMouseEvent(event);
    });
    this.addSettingTab(new IntellectaSettingTab(this.app, this));
  }
  async onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async activateView(viewType) {
    this.app.workspace.detachLeavesOfType(viewType);
    await this.app.workspace.getRightLeaf(false).setViewState({
      type: viewType,
      active: true
    });
    this.app.workspace.revealLeaf(
      this.app.workspace.getLeavesOfType(viewType)[0]
    );
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL3VpL3NldHRpbmdzLnRzIiwgInNyYy91aS9saXRlcmF0dXJlQ2FyZFVJLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBNZW51LCBQbHVnaW4sIE5vdGljZSwgVEZvbGRlciB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgeyBJbnRlbGxlY3RhU2V0dGluZ1RhYiB9IGZyb20gXCIuL3VpL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IExpdGVyYXR1cmVHZW5WaWV3LCBWSUVXX1RZUEVfTElURVJBVFVSRSB9IGZyb20gXCIuL3VpL2xpdGVyYXR1cmVDYXJkVUlcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEludGVsbGVjdGFTZXR0aW5ncyA9IHtcclxuICAgIC8vIEdlbmVyYWwgT3BlbkFJIFNldHRpbmdzXHJcbiAgICBhcGlLZXk6IFwiXCIsXHJcbiAgICBlbmdpbmU6IFwiZ3B0LTMuNS10dXJiby0wNjEzXCIsXHJcbiAgICAvLyBDYXJkIEdlbmVyYXRpb24gU3BlY2lmaWMgU2V0dGluZ3NcclxuICAgIENHX1RlbXBlcmF0dXJlOiAwLjgsXHJcbiAgICBDR19NYXhUb2tlbnM6IDI1NixcclxuICAgIENHX1RvcFA6IDEsXHJcbiAgICBDR19GcmVxdWVuY3lQZW5hbHR5OiAwLFxyXG4gICAgQ0dfUHJlc2VuY2VQZW5hbHR5OiAwLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZWxsZWN0YSBleHRlbmRzIFBsdWdpbiB7XHJcbiAgICBzZXR0aW5nczogSW50ZWxsZWN0YVNldHRpbmdzO1xyXG5cclxuICAgIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cclxuICAgICAgICAvLyBDaGVja3MgaWYgdGhlIFwiWmV0dGVsa2FzdGVuXCIgZm9sZGVyIHdpdGggcmVxdWlyZWQgZm9kbGVyIGNvbnRlbnQgZXhpc3RzOyBpZiBub3QsIGNyZWF0ZVxyXG4gICAgICAgIGNvbnN0IGZvbGRlclN0cnVjdHVyZSA9IFtcclxuICAgICAgICAgICAgXCJaZXR0ZWxrYXN0ZW5cIixcclxuICAgICAgICAgICAgXCJaZXR0ZWxrYXN0ZW4vUGVybWFuZW50XCIsXHJcbiAgICAgICAgICAgIFwiWmV0dGVsa2FzdGVuL0NvbmNlcHR1YWxcIixcclxuICAgICAgICAgICAgXCJaZXR0ZWxrYXN0ZW4vTGl0ZXJhdHVyZVwiLFxyXG4gICAgICAgICAgICBcIlpldHRlbGthc3Rlbi9MaXRlcmF0dXJlL1VucHJvY2Vzc2VkXCJcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGZvbGRlclBhdGggb2YgZm9sZGVyU3RydWN0dXJlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nRm9sZGVyID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZvbGRlclBhdGgpIGFzIFRGb2xkZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFleGlzdGluZ0ZvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBmb2xkZXJQYXRoLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGF0aCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0vJHtwYXJ0fWAgOiBwYXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGN1cnJlbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBMaXN0ZW5zIGlmIGEgbmV3IGZpbGUgaXMgY3JlYXRlZCBpbiB1bnByb2Nlc3NlZCBub3RlcyB0byBpbnNlcnQgdGVtcGxhdGVcclxuICAgICAgICAvLyBjb25zdCBjaG9raWRhciA9IHJlcXVpcmUoXCJjaG9raWRhclwiKTtcclxuICAgICAgICAvLyBjb25zdCB1bnByb2Nlc3NlZERpcmVjdG9yeSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChcIlpldHRlbGthc3Rlbi9MaXRlcmF0dXJlL1VucHJvY2Vzc2VkXCIpPy5wYXRoO1xyXG4gICAgICAgIC8vIGNvbnN0IHdhdGNoZXIgPSBjaG9raWRhci53YXRjaCh1bnByb2Nlc3NlZERpcmVjdG9yeSk7XHJcblxyXG4gICAgICAgIC8vIHdhdGNoZXIub24oJ2FkZCcsIChmaWxlUGF0aCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAvLyBUaGlzIGVsZW1lbnQgYWxsb3dzIHVzZXIgdG8gaW50ZXJhY3Qgd2l0aCBwbHVnaW4gdGhyb3VnaCByaWJib25cclxuICAgICAgICB0aGlzLmFkZFJpYmJvbkljb24oXCJicmFpbi1jaXJjdWl0XCIsXCJDYXJkIEdlbmVyYXRvclwiLChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTaG93cyBhIG1lbnUgd2l0aCB0aHJlZSBvcHRpb25zIGNvcnJlc3BvbmRpbmcgZGlmZmVyZW50IGNhcmQgdHlwZXNcclxuICAgICAgICAgICAgY29uc3QgY2FyZFR5cGVNZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZFR5cGVzID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxpdGVyYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWSUVXX1RZUEVfTElURVJBVFVSRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsZWFmKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMaXRlcmF0dXJlR2VuVmlldyhsZWFmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVWaWV3KFZJRVdfVFlQRV9MSVRFUkFUVVJFKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlBlcm1hbmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQZXJtYW5lbnQgcmV2aWV3IGNhcmQgZ2VuZXJhdGlvbiBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uY2VwdHVhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb25jZXB0dWFsIHJldmlldyBjYXJkIGdlbmVyYXRpb24gZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhcmRUeXBlIG9mIGNhcmRUeXBlcykge1xyXG4gICAgICAgICAgICAgICAgY2FyZFR5cGVNZW51LmFkZEl0ZW0oKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoY2FyZFR5cGUudGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKGNhcmRUeXBlLmNsaWNrSGFuZGxlcilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FyZFR5cGVNZW51LnNob3dBdE1vdXNlRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIFRoaXMgZWxlbWVudCBhbGxvd3MgdXNlciB0byBjaGFuZ2UgdGhlIHNldHRpbmdzXHJcbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBJbnRlbGxlY3RhU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9udW5sb2FkKCkge1xyXG4gICAgICAgIC8vIFJlbGVhc2UgYW55IHJlc291cmNlcyBjb25maWd1cmVkIGJ5IHRoZSBwbHVnaW5cclxuICAgICAgICAvLyBUaGlzIHJ1bnMgd2hlbiB0aGUgcGx1Z2luIGlzIGRpc2FibGVkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuICAgICAgICAvLyBSZXRyaWV2ZXMgYW5kIGxvYWRzIHRoZSBzZXR0aW5nc1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG4gICAgICAgIC8vIFNhdmVzIHRoZSBjaGFuZ2VzIGluIHNldHRpbmdzXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZVZpZXcodmlld1R5cGU6IHN0cmluZykge1xyXG4gICAgICAgIC8vIEFjdGl2YXRlcyB0aGUgY2hvc2VuIHZpZXdcclxuICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZGV0YWNoTGVhdmVzT2ZUeXBlKHZpZXdUeXBlKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAud29ya3NwYWNlLmdldFJpZ2h0TGVhZihmYWxzZSkuc2V0Vmlld1N0YXRlKHtcclxuICAgICAgICAgICAgdHlwZTogdmlld1R5cGUsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLnJldmVhbExlYWYoXHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUodmlld1R5cGUpWzBdXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsICJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IEludGVsbGVjdGEgZnJvbSBcInNyYy9tYWluXCI7XHJcblxyXG4vLyBDbGFzcyB0byBtYW5hZ2UgU2V0dGluZ3MgVUlcclxuZXhwb3J0IGNsYXNzIEludGVsbGVjdGFTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYntcclxuICAgIHBsdWdpbjogSW50ZWxsZWN0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBJbnRlbGxlY3RhKXtcclxuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheSgpOiB2b2lke1xyXG4gICAgICAgIGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcbiAgICAgICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoMVwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiSW50ZWxsZWN0YSBTZXR0aW5nc1wiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgyXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogXCJPcGVuQUlcIlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIFNldHRpbmcgaXRlbSB0byBlbnRlciBPcGVuQUkgQVBJIGtleVxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZShcIkFQSSBLZXlcIilcclxuICAgICAgICAgICAgLnNldERlc2MoXCJUaGUgQVBJIGtleSBvYnRhaW5lZCBmcm9tIE9wZW5BSVwiKVxyXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT4gXHJcbiAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiQVBJIEtleVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hcGlLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hcGlLZXkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldHRpbmcgaXRlbSB0byBjaG9vc2UgbGFuZ3VhZ2UgbW9kZWxcclxuICAgICAgICBsZXQgbW9kZWxzID0gW1xyXG4gICAgICAgICAgICBcImdwdC0zLjUtdHVyYm8tMDYxM1wiLFxyXG4gICAgICAgICAgICBcImdwdC00LTA2MTNcIixcclxuICAgICAgICAgICAgXCJncHQtNC0zMmstMDYxM1wiXHJcbiAgICAgICAgXTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUoXCJMYW5ndWFnZSBNb2RlbFwiKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyhcIlRoZSBsYW5ndWFnZSBtb2RlbCB0byBiZSB1c2VkIGluIHRleHQgZ2VuZXJhdGlvblwiKVxyXG4gICAgICAgICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbHMuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24uYWRkT3B0aW9uKG1vZGVsTmFtZSwgbW9kZWxOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd24uc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5naW5lKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVuZ2luZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkgXHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfTElURVJBVFVSRSA9IFwibGl0ZXJhdHVyZS1nZW5lcmF0aW9uLXZpZXdcIjtcclxuXHJcbi8vIENsYXNzIHRvIG1hbmFnZSBMaXRlcmF0dXJlIE5vdGUgR2VuZXJhdGlvbiBVSVxyXG5leHBvcnQgY2xhc3MgTGl0ZXJhdHVyZUdlblZpZXcgZXh0ZW5kcyBJdGVtVmlld3tcclxuICAgIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYpe1xyXG4gICAgICAgIHN1cGVyKGxlYWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXdUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBWSUVXX1RZUEVfTElURVJBVFVSRTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXNwbGF5VGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gXCJMaXRlcmF0dXJlIE5vdGUgR2VuZXJhdG9yXCJcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbk9wZW4oKSB7XHJcbiAgICAgICAgLy8gV3JpdGUgd2hhdCB3aWxsIGhhcHBlbiBvbiBvcGVuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJFbC5lbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoMlwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiTGl0ZXJhdHVyZSBOb3RlcyBTdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBzdWdnZXN0aW9ucyA9IGEgbWV0aG9kIHRoYXQgY2FsbHMgT3BlbkFJIEFQSSwgZ2VuZXJhdGVzIHN1Z2dlc3Rpb25zLCBhbmQgcmV0dXJucyBhIGxpc3Qgb2YgY29udGVudFxyXG4gICAgICAgIC8vIGEgbG9vcCB0byBjcmVhdGUgYXMgbWFueSBkaXYgZWxlbWVudHMgYXMgdGhlIGxlbmd0aCBvZiBzdWdnZXN0aW9uc1xyXG4gICAgICAgIC8vIGEgYnV0dG9uIGF0IHRoZSBlbmQgb2YgZWFjaCBkaXYgdG8gYWRkIHRoZSB0ZXh0IGluIGRpdiB0byBhIG5ldyBsaXRhcmF0dXJlIG5vdGVcclxuICAgICAgICAvLyBhbHNvIGFkZCBhIHJlYWwgdGltZSBlZGl0aW5nIG9wdGlvbiBmb3Igd2hhdCBHUFQgZ2VuZXJhdGVzIGZvciB0aGUgdXNlciBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNsb3NlKCkge1xyXG4gICAgICAgIC8vIFdyaXRlIHdoYXQgd2lsbCBoYXBwZW4gb24gY2xvc2VcclxuICAgIH1cclxufSJdLAogICJt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QUNKO0FBQUEsSUFDSjtBQVlBLFNBQUssY0FBYyxpQkFBZ0Isa0JBQWlCLENBQUMsVUFBVTtBQUUzRCxZQUFNLGVBQWUsSUFBSSxzQkFBSztBQUM5QixZQUFNLFlBQVk7QUFBQSxRQUNkO0FBQUEsVUFDSSxPQUFPO0FBQUEsVUFDUCxjQUFjLE1BQU07QUFDaEIsaUJBQUs7QUFBQSxjQUNEO0FBQUEsY0FDQSxDQUFDLFNBQ0csSUFBSSxrQkFBa0IsSUFBSTtBQUFBLFlBQ2xDO0FBQ0EsaUJBQUssYUFBYSxvQkFBb0I7QUFBQSxVQUMxQztBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsVUFDSSxPQUFPO0FBQUEsVUFDUCxjQUFjLE1BQU07QUFBQSxVQUVwQjtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsVUFDSSxPQUFPO0FBQUEsVUFDUCxjQUFjLE1BQU07QUFBQSxVQUVwQjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBRUEsaUJBQVcsWUFBWSxXQUFXO0FBQzlCLHFCQUFhO0FBQUEsVUFBUSxDQUFDLFNBQ2xCLEtBQ0ssU0FBUyxTQUFTLEtBQUssRUFDdkIsUUFBUSxTQUFTLFlBQVk7QUFBQSxRQUN0QztBQUFBLE1BQ0o7QUFFQSxtQkFBYSxpQkFBaUIsS0FBSztBQUFBLElBQ3ZDLENBQUM7QUFHRCxTQUFLLGNBQWMsSUFBSSxxQkFBcUIsS0FBSyxLQUFLLElBQUksQ0FBQztBQUFBLEVBQy9EO0FBQUEsRUFFQSxNQUFNLFdBQVc7QUFBQSxFQUdqQjtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBRWpCLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixNQUFNLEtBQUssU0FBUyxDQUFDO0FBQUEsRUFDN0U7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUVqQixVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFBQSxFQUNyQztBQUFBLEVBRUEsTUFBTSxhQUFhLFVBQWtCO0FBRWpDLFNBQUssSUFBSSxVQUFVLG1CQUFtQixRQUFRO0FBRTlDLFVBQU0sS0FBSyxJQUFJLFVBQVUsYUFBYSxLQUFLLEVBQUUsYUFBYTtBQUFBLE1BQ3RELE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNaLENBQUM7QUFFRCxTQUFLLElBQUksVUFBVTtBQUFBLE1BQ2YsS0FBSyxJQUFJLFVBQVUsZ0JBQWdCLFFBQVEsRUFBRSxDQUFDO0FBQUEsSUFDbEQ7QUFBQSxFQUNKO0FBQ0o7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iXQp9Cg==
