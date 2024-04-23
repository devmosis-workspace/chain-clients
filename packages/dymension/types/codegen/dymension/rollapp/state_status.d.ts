export declare enum StateStatus {
    /** STATE_STATUS_UNSPECIFIED - zero-value for status ordering */
    STATE_STATUS_UNSPECIFIED = 0,
    /** STATE_STATUS_RECEIVED - STATE_STATUS_RECEIVED defines a rollapp state where the state update transaction was published on dYmension chain */
    STATE_STATUS_RECEIVED = 1,
    /** STATE_STATUS_FINALIZED - STATE_STATUS_FINALIZED defines a rollapp state where the the "Dispute Period" has ended and this state is considered final */
    STATE_STATUS_FINALIZED = 2,
    UNRECOGNIZED = -1
}
export declare const StateStatusSDKType: typeof StateStatus;
export declare const StateStatusAmino: typeof StateStatus;
export declare function stateStatusFromJSON(object: any): StateStatus;
export declare function stateStatusToJSON(object: StateStatus): string;
