import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { IBCTransferStatus } from "./quota";
import * as _m0 from "protobufjs/minimal";
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuota {
    /** authority is the address of the governance account. */
    authority: string;
    title: string;
    description: string;
    /** total quota defines the total outflow of ibc-transfer in USD */
    total: string;
    /** per_denom quota for outflows per denom. All denoms have the same quota size. */
    perDenom: string;
    /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
    quotaDuration?: Duration;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaSDKType {
    authority: string;
    title: string;
    description: string;
    total: string;
    per_denom: string;
    quota_duration?: DurationSDKType;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponse {
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponseSDKType {
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatus {
    /** authority is the address of the governance account. */
    authority: string;
    title: string;
    description: string;
    /** ibc_status defines status for ibc transfers */
    ibcStatus: IBCTransferStatus;
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusSDKType {
    authority: string;
    title: string;
    description: string;
    ibc_status: IBCTransferStatus;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponse {
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponseSDKType {
}
export declare const MsgGovUpdateQuota: {
    encode(message: MsgGovUpdateQuota, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgGovUpdateQuota;
    fromPartial(object: Partial<MsgGovUpdateQuota>): MsgGovUpdateQuota;
};
export declare const MsgGovUpdateQuotaResponse: {
    encode(_: MsgGovUpdateQuotaResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgGovUpdateQuotaResponse;
    fromPartial(_: Partial<MsgGovUpdateQuotaResponse>): MsgGovUpdateQuotaResponse;
};
export declare const MsgGovSetIBCStatus: {
    encode(message: MsgGovSetIBCStatus, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgGovSetIBCStatus;
    fromPartial(object: Partial<MsgGovSetIBCStatus>): MsgGovSetIBCStatus;
};
export declare const MsgGovSetIBCStatusResponse: {
    encode(_: MsgGovSetIBCStatusResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgGovSetIBCStatusResponse;
    fromPartial(_: Partial<MsgGovSetIBCStatusResponse>): MsgGovSetIBCStatusResponse;
};
