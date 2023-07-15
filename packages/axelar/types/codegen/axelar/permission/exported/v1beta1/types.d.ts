export declare enum Role {
    ROLE_UNSPECIFIED = 0,
    ROLE_UNRESTRICTED = 1,
    ROLE_CHAIN_MANAGEMENT = 2,
    ROLE_ACCESS_CONTROL = 3,
    UNRECOGNIZED = -1
}
export declare const RoleSDKType: typeof Role;
export declare function roleFromJSON(object: any): Role;
export declare function roleToJSON(object: Role): string;
