export var MultisigState;
(function (MultisigState) {
    MultisigState[MultisigState["MULTISIG_STATE_UNSPECIFIED"] = 0] = "MULTISIG_STATE_UNSPECIFIED";
    MultisigState[MultisigState["MULTISIG_STATE_PENDING"] = 1] = "MULTISIG_STATE_PENDING";
    MultisigState[MultisigState["MULTISIG_STATE_COMPLETED"] = 2] = "MULTISIG_STATE_COMPLETED";
    MultisigState[MultisigState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MultisigState || (MultisigState = {}));
export const MultisigStateSDKType = MultisigState;
export const MultisigStateAmino = MultisigState;
export function multisigStateFromJSON(object) {
    switch (object) {
        case 0:
        case "MULTISIG_STATE_UNSPECIFIED":
            return MultisigState.MULTISIG_STATE_UNSPECIFIED;
        case 1:
        case "MULTISIG_STATE_PENDING":
            return MultisigState.MULTISIG_STATE_PENDING;
        case 2:
        case "MULTISIG_STATE_COMPLETED":
            return MultisigState.MULTISIG_STATE_COMPLETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MultisigState.UNRECOGNIZED;
    }
}
export function multisigStateToJSON(object) {
    switch (object) {
        case MultisigState.MULTISIG_STATE_UNSPECIFIED:
            return "MULTISIG_STATE_UNSPECIFIED";
        case MultisigState.MULTISIG_STATE_PENDING:
            return "MULTISIG_STATE_PENDING";
        case MultisigState.MULTISIG_STATE_COMPLETED:
            return "MULTISIG_STATE_COMPLETED";
        case MultisigState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var KeyState;
(function (KeyState) {
    KeyState[KeyState["KEY_STATE_UNSPECIFIED"] = 0] = "KEY_STATE_UNSPECIFIED";
    KeyState[KeyState["KEY_STATE_ASSIGNED"] = 1] = "KEY_STATE_ASSIGNED";
    KeyState[KeyState["KEY_STATE_ACTIVE"] = 2] = "KEY_STATE_ACTIVE";
    KeyState[KeyState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyState || (KeyState = {}));
export const KeyStateSDKType = KeyState;
export const KeyStateAmino = KeyState;
export function keyStateFromJSON(object) {
    switch (object) {
        case 0:
        case "KEY_STATE_UNSPECIFIED":
            return KeyState.KEY_STATE_UNSPECIFIED;
        case 1:
        case "KEY_STATE_ASSIGNED":
            return KeyState.KEY_STATE_ASSIGNED;
        case 2:
        case "KEY_STATE_ACTIVE":
            return KeyState.KEY_STATE_ACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KeyState.UNRECOGNIZED;
    }
}
export function keyStateToJSON(object) {
    switch (object) {
        case KeyState.KEY_STATE_UNSPECIFIED:
            return "KEY_STATE_UNSPECIFIED";
        case KeyState.KEY_STATE_ASSIGNED:
            return "KEY_STATE_ASSIGNED";
        case KeyState.KEY_STATE_ACTIVE:
            return "KEY_STATE_ACTIVE";
        case KeyState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
//# sourceMappingURL=types.js.map