/** OperatingStatus defines the operating status of a sequencer */
export declare enum OperatingStatus {
    /** OPERATING_STATUS_UNSPECIFIED - OPERATING_STATUS_UNSPECIFIED defines zero-value for status ordering */
    OPERATING_STATUS_UNSPECIFIED = 0,
    /** OPERATING_STATUS_PROPOSER - OPERATING_STATUS_PROPOSER defines a sequencer that is active and can propose state updates */
    OPERATING_STATUS_PROPOSER = 1,
    /** OPERATING_STATUS_INACTIVE - OPERATING_STATUS_INACTIVE defines a sequencer that is not active and won't be scheduled */
    OPERATING_STATUS_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare const OperatingStatusSDKType: typeof OperatingStatus;
export declare const OperatingStatusAmino: typeof OperatingStatus;
export declare function operatingStatusFromJSON(object: any): OperatingStatus;
export declare function operatingStatusToJSON(object: OperatingStatus): string;
