import { Command, CommandGroup } from "../types";
export declare function extractCommandMap(groups: CommandGroup[]): {
    [key: string]: Command;
};
