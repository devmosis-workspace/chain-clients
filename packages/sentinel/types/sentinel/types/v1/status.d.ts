export declare enum Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_ACTIVE = 1,
    STATUS_INACTIVE_PENDING = 2,
    STATUS_INACTIVE = 3,
    UNRECOGNIZED = -1
}
export declare const StatusSDKType: typeof Status;
export declare const StatusAmino: typeof Status;
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
