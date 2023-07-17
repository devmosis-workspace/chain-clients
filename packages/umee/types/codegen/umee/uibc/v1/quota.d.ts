import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** IBCTransferStatus status of ibc-transfer quota check for inflow and outflow */
export declare enum IBCTransferStatus {
    /** IBC_TRANSFER_STATUS_UNSPECIFIED - UNSPECIFIED  defines a no-op status. */
    IBC_TRANSFER_STATUS_UNSPECIFIED = 0,
    /** IBC_TRANSFER_STATUS_QUOTA_DISABLED - DISABLED: all inflow and outflow quota checks are disabled. */
    IBC_TRANSFER_STATUS_QUOTA_DISABLED = 1,
    /** IBC_TRANSFER_STATUS_QUOTA_ENABLED - ENABLED: all inflow and outflow quota checks are enabled. */
    IBC_TRANSFER_STATUS_QUOTA_ENABLED = 2,
    /** IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED - DISABLED OUT: outflow quota check is disabled, while the inflow quota check is enabled. */
    IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED = 3,
    /** IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED - DISABLED IN: inflow quota check is disabled, while the outflow quota check is enabled. */
    IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED = 4,
    /** IBC_TRANSFER_STATUS_TRANSFERS_PAUSED - PAUSED: all IBC transfers are paused. */
    IBC_TRANSFER_STATUS_TRANSFERS_PAUSED = 5,
    UNRECOGNIZED = -1
}
export declare const IBCTransferStatusSDKType: typeof IBCTransferStatus;
export declare function iBCTransferStatusFromJSON(object: any): IBCTransferStatus;
export declare function iBCTransferStatusToJSON(object: IBCTransferStatus): string;
/** Params of x/uibc module */
export interface Params {
    /** ibc_status defines the IBC ICS20 status (transfer quota or transfers disabled). */
    ibcStatus: IBCTransferStatus;
    /** total_quota defines the total outflow limit of ibc-transfer in USD */
    totalQuota: string;
    /** token_quota defines the outflow limit per token in USD */
    tokenQuota: string;
    /** quota_duration defines quota expires for each ibc-transfer denom in seconds */
    quotaDuration?: Duration;
}
/** Params of x/uibc module */
export interface ParamsSDKType {
    ibc_status: IBCTransferStatus;
    total_quota: string;
    token_quota: string;
    quota_duration?: DurationSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
