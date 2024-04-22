export var Role;
(function (Role) {
    Role[Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    Role[Role["ROLE_UNRESTRICTED"] = 1] = "ROLE_UNRESTRICTED";
    Role[Role["ROLE_CHAIN_MANAGEMENT"] = 2] = "ROLE_CHAIN_MANAGEMENT";
    Role[Role["ROLE_ACCESS_CONTROL"] = 3] = "ROLE_ACCESS_CONTROL";
    Role[Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Role || (Role = {}));
export const RoleSDKType = Role;
export const RoleAmino = Role;
export function roleFromJSON(object) {
    switch (object) {
        case 0:
        case "ROLE_UNSPECIFIED":
            return Role.ROLE_UNSPECIFIED;
        case 1:
        case "ROLE_UNRESTRICTED":
            return Role.ROLE_UNRESTRICTED;
        case 2:
        case "ROLE_CHAIN_MANAGEMENT":
            return Role.ROLE_CHAIN_MANAGEMENT;
        case 3:
        case "ROLE_ACCESS_CONTROL":
            return Role.ROLE_ACCESS_CONTROL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Role.UNRECOGNIZED;
    }
}
export function roleToJSON(object) {
    switch (object) {
        case Role.ROLE_UNSPECIFIED:
            return "ROLE_UNSPECIFIED";
        case Role.ROLE_UNRESTRICTED:
            return "ROLE_UNRESTRICTED";
        case Role.ROLE_CHAIN_MANAGEMENT:
            return "ROLE_CHAIN_MANAGEMENT";
        case Role.ROLE_ACCESS_CONTROL:
            return "ROLE_ACCESS_CONTROL";
        case Role.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
//# sourceMappingURL=types.js.map