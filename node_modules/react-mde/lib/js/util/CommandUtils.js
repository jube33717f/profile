"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Extracts a map that associate "key commands" (strings) with react-mde Commands.
// This is important because, when pressing tab, for example, Draft.js issues
// a "tab" command. We need to associate the key bindings with react-mde commands.
function extractCommandMap(groups) {
    var result = {};
    if (!groups || !groups.length) {
        return result;
    }
    for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
        var group = groups_1[_i];
        if (group.commands && group.commands.length) {
            for (var _a = 0, _b = group.commands; _a < _b.length; _a++) {
                var command = _b[_a];
                if (command.keyCommand) {
                    result[command.keyCommand] = command;
                }
            }
        }
    }
    return result;
}
exports.extractCommandMap = extractCommandMap;
