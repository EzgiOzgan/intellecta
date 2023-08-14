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

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => Intellecta
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var Intellecta = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    const ribbonIconEl = this.addRibbonIcon("dice", "Sample Plugin", (evt) => {
      new import_obsidian.Notice("This is a notice!");
    });
    ribbonIconEl.addClass("my-plugin-ribbon-class");
    const statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.setText("Status Bar Text");
    this.addCommand({
      id: "open-sample-modal-simple",
      name: "Open sample modal (simple)",
      callback: () => {
        new SampleModal(this.app).open();
      }
    });
    this.addCommand({
      id: "sample-editor-command",
      name: "Sample editor command",
      editorCallback: (editor, view) => {
        console.log(editor.getSelection());
        editor.replaceSelection("Sample Editor Command");
      }
    });
    this.addCommand({
      id: "open-sample-modal-complex",
      name: "Open sample modal (complex)",
      checkCallback: (checking) => {
        const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (markdownView) {
          if (!checking) {
            new SampleModal(this.app).open();
          }
          return true;
        }
      }
    });
    this.addSettingTab(new SampleSettingTab(this.app, this));
    this.registerDomEvent(document, "click", (evt) => {
      console.log("click", evt);
    });
    this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Setting #1").setDesc("It's a secret").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.mySetting).onChange(async (value) => {
      this.plugin.settings.mySetting = value;
      await this.plugin.saveSettings();
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5cclxuaW50ZXJmYWNlIEludGVsbGVjdGFTZXR0aW5ncyB7XHJcblx0bXlTZXR0aW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEludGVsbGVjdGFTZXR0aW5ncyA9IHtcclxuXHRteVNldHRpbmc6ICdkZWZhdWx0J1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlbGxlY3RhIGV4dGVuZHMgUGx1Z2luIHtcclxuXHRzZXR0aW5nczogSW50ZWxsZWN0YVNldHRpbmdzO1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cdFx0XHJcblx0XHQvLyBUaGlzIGNyZWF0ZXMgYW4gaWNvbiBpbiB0aGUgbGVmdCByaWJib24uXHJcblx0XHRjb25zdCByaWJib25JY29uRWwgPSB0aGlzLmFkZFJpYmJvbkljb24oJ2RpY2UnLCAnU2FtcGxlIFBsdWdpbicsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuXHRcdFx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBpY29uLlxyXG5cdFx0XHRuZXcgTm90aWNlKCdUaGlzIGlzIGEgbm90aWNlIScpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyBQZXJmb3JtIGFkZGl0aW9uYWwgdGhpbmdzIHdpdGggdGhlIHJpYmJvblxyXG5cdFx0cmliYm9uSWNvbkVsLmFkZENsYXNzKCdteS1wbHVnaW4tcmliYm9uLWNsYXNzJyk7XHJcblxyXG5cdFx0Ly8gVGhpcyBhZGRzIGEgc3RhdHVzIGJhciBpdGVtIHRvIHRoZSBib3R0b20gb2YgdGhlIGFwcC4gRG9lcyBub3Qgd29yayBvbiBtb2JpbGUgYXBwcy5cclxuXHRcdGNvbnN0IHN0YXR1c0Jhckl0ZW1FbCA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xyXG5cdFx0c3RhdHVzQmFySXRlbUVsLnNldFRleHQoJ1N0YXR1cyBCYXIgVGV4dCcpO1xyXG5cclxuXHRcdC8vIFRoaXMgYWRkcyBhIHNpbXBsZSBjb21tYW5kIHRoYXQgY2FuIGJlIHRyaWdnZXJlZCBhbnl3aGVyZVxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6ICdvcGVuLXNhbXBsZS1tb2RhbC1zaW1wbGUnLFxyXG5cdFx0XHRuYW1lOiAnT3BlbiBzYW1wbGUgbW9kYWwgKHNpbXBsZSknLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdG5ldyBTYW1wbGVNb2RhbCh0aGlzLmFwcCkub3BlbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vIFRoaXMgYWRkcyBhbiBlZGl0b3IgY29tbWFuZCB0aGF0IGNhbiBwZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG9uIHRoZSBjdXJyZW50IGVkaXRvciBpbnN0YW5jZVxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6ICdzYW1wbGUtZWRpdG9yLWNvbW1hbmQnLFxyXG5cdFx0XHRuYW1lOiAnU2FtcGxlIGVkaXRvciBjb21tYW5kJyxcclxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgdmlldzogTWFya2Rvd25WaWV3KSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZWRpdG9yLmdldFNlbGVjdGlvbigpKTtcclxuXHRcdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbignU2FtcGxlIEVkaXRvciBDb21tYW5kJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly8gVGhpcyBhZGRzIGEgY29tcGxleCBjb21tYW5kIHRoYXQgY2FuIGNoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGFwcCBhbGxvd3MgZXhlY3V0aW9uIG9mIHRoZSBjb21tYW5kXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ29wZW4tc2FtcGxlLW1vZGFsLWNvbXBsZXgnLFxyXG5cdFx0XHRuYW1lOiAnT3BlbiBzYW1wbGUgbW9kYWwgKGNvbXBsZXgpJyxcclxuXHRcdFx0Y2hlY2tDYWxsYmFjazogKGNoZWNraW5nOiBib29sZWFuKSA9PiB7XHJcblx0XHRcdFx0Ly8gQ29uZGl0aW9ucyB0byBjaGVja1xyXG5cdFx0XHRcdGNvbnN0IG1hcmtkb3duVmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcblx0XHRcdFx0aWYgKG1hcmtkb3duVmlldykge1xyXG5cdFx0XHRcdFx0Ly8gSWYgY2hlY2tpbmcgaXMgdHJ1ZSwgd2UncmUgc2ltcGx5IFwiY2hlY2tpbmdcIiBpZiB0aGUgY29tbWFuZCBjYW4gYmUgcnVuLlxyXG5cdFx0XHRcdFx0Ly8gSWYgY2hlY2tpbmcgaXMgZmFsc2UsIHRoZW4gd2Ugd2FudCB0byBhY3R1YWxseSBwZXJmb3JtIHRoZSBvcGVyYXRpb24uXHJcblx0XHRcdFx0XHRpZiAoIWNoZWNraW5nKSB7XHJcblx0XHRcdFx0XHRcdG5ldyBTYW1wbGVNb2RhbCh0aGlzLmFwcCkub3BlbigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIFRoaXMgY29tbWFuZCB3aWxsIG9ubHkgc2hvdyB1cCBpbiBDb21tYW5kIFBhbGV0dGUgd2hlbiB0aGUgY2hlY2sgZnVuY3Rpb24gcmV0dXJucyB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFRoaXMgYWRkcyBhIHNldHRpbmdzIHRhYiBzbyB0aGUgdXNlciBjYW4gY29uZmlndXJlIHZhcmlvdXMgYXNwZWN0cyBvZiB0aGUgcGx1Z2luXHJcblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IFNhbXBsZVNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuXHJcblx0XHQvLyBJZiB0aGUgcGx1Z2luIGhvb2tzIHVwIGFueSBnbG9iYWwgRE9NIGV2ZW50cyAob24gcGFydHMgb2YgdGhlIGFwcCB0aGF0IGRvZXNuJ3QgYmVsb25nIHRvIHRoaXMgcGx1Z2luKVxyXG5cdFx0Ly8gVXNpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoaXMgcGx1Z2luIGlzIGRpc2FibGVkLlxyXG5cdFx0dGhpcy5yZWdpc3RlckRvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdjbGljaycsIGV2dCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBXaGVuIHJlZ2lzdGVyaW5nIGludGVydmFscywgdGhpcyBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgY2xlYXIgdGhlIGludGVydmFsIHdoZW4gdGhlIHBsdWdpbiBpcyBkaXNhYmxlZC5cclxuXHRcdHRoaXMucmVnaXN0ZXJJbnRlcnZhbCh3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4gY29uc29sZS5sb2coJ3NldEludGVydmFsJyksIDUgKiA2MCAqIDEwMDApKTtcclxuXHR9XHJcblxyXG5cdG9udW5sb2FkKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFNhbXBsZU1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XHJcblx0XHRzdXBlcihhcHApO1xyXG5cdH1cclxuXHJcblx0b25PcGVuKCkge1xyXG5cdFx0Y29uc3Qge2NvbnRlbnRFbH0gPSB0aGlzO1xyXG5cdFx0Y29udGVudEVsLnNldFRleHQoJ1dvYWghJyk7XHJcblx0fVxyXG5cclxuXHRvbkNsb3NlKCkge1xyXG5cdFx0Y29uc3Qge2NvbnRlbnRFbH0gPSB0aGlzO1xyXG5cdFx0Y29udGVudEVsLmVtcHR5KCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTYW1wbGVTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblx0cGx1Z2luOiBJbnRlbGxlY3RhO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBJbnRlbGxlY3RhKSB7XHJcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XHJcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuXHR9XHJcblxyXG5cdGRpc3BsYXkoKTogdm9pZCB7XHJcblx0XHRjb25zdCB7Y29udGFpbmVyRWx9ID0gdGhpcztcclxuXHJcblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnU2V0dGluZyAjMScpXHJcblx0XHRcdC5zZXREZXNjKCdJdFxcJ3MgYSBzZWNyZXQnKVxyXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcclxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ0VudGVyIHlvdXIgc2VjcmV0JylcclxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubXlTZXR0aW5nKVxyXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLm15U2V0dGluZyA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSkpO1xyXG5cdH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQTRGO0FBTTVGLElBQU0sbUJBQXVDO0FBQUEsRUFDNUMsV0FBVztBQUNaO0FBRUEsSUFBcUIsYUFBckIsY0FBd0MsdUJBQU87QUFBQSxFQUc5QyxNQUFNLFNBQVM7QUFDZCxVQUFNLEtBQUssYUFBYTtBQUd4QixVQUFNLGVBQWUsS0FBSyxjQUFjLFFBQVEsaUJBQWlCLENBQUMsUUFBb0I7QUFFckYsVUFBSSx1QkFBTyxtQkFBbUI7QUFBQSxJQUMvQixDQUFDO0FBRUQsaUJBQWEsU0FBUyx3QkFBd0I7QUFHOUMsVUFBTSxrQkFBa0IsS0FBSyxpQkFBaUI7QUFDOUMsb0JBQWdCLFFBQVEsaUJBQWlCO0FBR3pDLFNBQUssV0FBVztBQUFBLE1BQ2YsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sVUFBVSxNQUFNO0FBQ2YsWUFBSSxZQUFZLEtBQUssR0FBRyxFQUFFLEtBQUs7QUFBQSxNQUNoQztBQUFBLElBQ0QsQ0FBQztBQUVELFNBQUssV0FBVztBQUFBLE1BQ2YsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sZ0JBQWdCLENBQUMsUUFBZ0IsU0FBdUI7QUFDdkQsZ0JBQVEsSUFBSSxPQUFPLGFBQWEsQ0FBQztBQUNqQyxlQUFPLGlCQUFpQix1QkFBdUI7QUFBQSxNQUNoRDtBQUFBLElBQ0QsQ0FBQztBQUVELFNBQUssV0FBVztBQUFBLE1BQ2YsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sZUFBZSxDQUFDLGFBQXNCO0FBRXJDLGNBQU0sZUFBZSxLQUFLLElBQUksVUFBVSxvQkFBb0IsNEJBQVk7QUFDeEUsWUFBSSxjQUFjO0FBR2pCLGNBQUksQ0FBQyxVQUFVO0FBQ2QsZ0JBQUksWUFBWSxLQUFLLEdBQUcsRUFBRSxLQUFLO0FBQUEsVUFDaEM7QUFHQSxpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNEO0FBQUEsSUFDRCxDQUFDO0FBR0QsU0FBSyxjQUFjLElBQUksaUJBQWlCLEtBQUssS0FBSyxJQUFJLENBQUM7QUFJdkQsU0FBSyxpQkFBaUIsVUFBVSxTQUFTLENBQUMsUUFBb0I7QUFDN0QsY0FBUSxJQUFJLFNBQVMsR0FBRztBQUFBLElBQ3pCLENBQUM7QUFHRCxTQUFLLGlCQUFpQixPQUFPLFlBQVksTUFBTSxRQUFRLElBQUksYUFBYSxHQUFHLElBQUksS0FBSyxHQUFJLENBQUM7QUFBQSxFQUMxRjtBQUFBLEVBRUEsV0FBVztBQUFBLEVBRVg7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNwQixTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUFBLEVBQzFFO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDcEIsVUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQUEsRUFDbEM7QUFDRDtBQUVBLElBQU0sY0FBTixjQUEwQixzQkFBTTtBQUFBLEVBQy9CLFlBQVksS0FBVTtBQUNyQixVQUFNLEdBQUc7QUFBQSxFQUNWO0FBQUEsRUFFQSxTQUFTO0FBQ1IsVUFBTSxFQUFDLFVBQVMsSUFBSTtBQUNwQixjQUFVLFFBQVEsT0FBTztBQUFBLEVBQzFCO0FBQUEsRUFFQSxVQUFVO0FBQ1QsVUFBTSxFQUFDLFVBQVMsSUFBSTtBQUNwQixjQUFVLE1BQU07QUFBQSxFQUNqQjtBQUNEO0FBRUEsSUFBTSxtQkFBTixjQUErQixpQ0FBaUI7QUFBQSxFQUcvQyxZQUFZLEtBQVUsUUFBb0I7QUFDekMsVUFBTSxLQUFLLE1BQU07QUFDakIsU0FBSyxTQUFTO0FBQUEsRUFDZjtBQUFBLEVBRUEsVUFBZ0I7QUFDZixVQUFNLEVBQUMsWUFBVyxJQUFJO0FBRXRCLGdCQUFZLE1BQU07QUFFbEIsUUFBSSx3QkFBUSxXQUFXLEVBQ3JCLFFBQVEsWUFBWSxFQUNwQixRQUFRLGVBQWdCLEVBQ3hCLFFBQVEsVUFBUSxLQUNmLGVBQWUsbUJBQW1CLEVBQ2xDLFNBQVMsS0FBSyxPQUFPLFNBQVMsU0FBUyxFQUN2QyxTQUFTLE9BQU8sVUFBVTtBQUMxQixXQUFLLE9BQU8sU0FBUyxZQUFZO0FBQ2pDLFlBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxJQUNoQyxDQUFDLENBQUM7QUFBQSxFQUNMO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
