import * as React from "react";
import { TextApi, TextState } from "./CommandOptions";
export declare type GetIcon = (iconName: string) => React.ReactNode;
export interface Command {
    name: string;
    buttonComponentClass?: React.ComponentClass | string;
    icon?: (getIconFromProvider: GetIcon) => React.ReactNode;
    buttonProps?: any;
    children?: Command[];
    execute?: (state: TextState, api: TextApi) => void;
    keyCommand?: string;
}
