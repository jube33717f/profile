"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InsertTextAtPosition_1 = require("./util/InsertTextAtPosition");
var TextAreaTextApi = /** @class */ (function () {
    function TextAreaTextApi(textArea) {
        this.textArea = textArea;
    }
    TextAreaTextApi.prototype.replaceSelection = function (text) {
        InsertTextAtPosition_1.insertText(this.textArea, text);
        return getStateFromTextArea(this.textArea);
    };
    TextAreaTextApi.prototype.setSelectionRange = function (selection) {
        this.textArea.focus();
        this.textArea.selectionStart = selection.start;
        this.textArea.selectionEnd = selection.end;
        return getStateFromTextArea(this.textArea);
    };
    return TextAreaTextApi;
}());
exports.TextAreaTextApi = TextAreaTextApi;
function getStateFromTextArea(textArea) {
    return {
        selection: {
            start: textArea.selectionStart,
            end: textArea.selectionEnd
        },
        text: textArea.value,
        selectedText: textArea.value.slice(textArea.selectionStart, textArea.selectionEnd)
    };
}
exports.getStateFromTextArea = getStateFromTextArea;
var TextAreaCommandOrchestrator = /** @class */ (function () {
    function TextAreaCommandOrchestrator(textArea) {
        this.textArea = textArea;
        this.textApi = new TextAreaTextApi(textArea);
    }
    TextAreaCommandOrchestrator.prototype.executeCommand = function (command) {
        command.execute(getStateFromTextArea(this.textArea), this.textApi);
    };
    return TextAreaCommandOrchestrator;
}());
exports.TextAreaCommandOrchestrator = TextAreaCommandOrchestrator;
