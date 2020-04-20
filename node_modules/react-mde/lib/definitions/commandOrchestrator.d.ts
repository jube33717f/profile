import { Command, TextRange } from "./types";
import { TextApi, TextState } from "./types/CommandOptions";
export interface CommandOrchestrator {
    executeCommand(command: Command): void;
}
export declare class TextAreaTextApi implements TextApi {
    textArea: HTMLTextAreaElement;
    constructor(textArea: HTMLTextAreaElement);
    replaceSelection(text: string): TextState;
    setSelectionRange(selection: TextRange): TextState;
}
export declare function getStateFromTextArea(textArea: HTMLTextAreaElement): TextState;
export declare class TextAreaCommandOrchestrator implements CommandOrchestrator {
    textArea: HTMLTextAreaElement;
    textApi: TextApi;
    constructor(textArea: HTMLTextAreaElement);
    executeCommand(command: Command): void;
}
