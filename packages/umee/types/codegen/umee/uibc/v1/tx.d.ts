import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { IBCTransferStatus } from "./quota";
import { BinaryWriter } from "../../../binary";
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
    quotaDuration: Duration;
}
export interface MsgGovUpdateQuotaProtoMsg {
    typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota";
    value: Uint8Array;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaAmino {
    /** authority is the address of the governance account. */
    authority: string;
    title: string;
    description: string;
    /** total quota defines the total outflow of ibc-transfer in USD */
    total: string;
    /** per_denom quota for outflows per denom. All denoms have the same quota size. */
    per_denom: string;
    /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
    quota_duration?: DurationAmino;
}
export interface MsgGovUpdateQuotaAminoMsg {
    type: "/umee.uibc.v1.MsgGovUpdateQuota";
    value: MsgGovUpdateQuotaAmino;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaSDKType {
    authority: string;
    title: string;
    description: string;
    total: string;
    per_denom: string;
    quota_duration: DurationSDKType;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponse {
}
export interface MsgGovUpdateQuotaResponseProtoMsg {
    typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse";
    value: Uint8Array;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponseAmino {
}
export interface MsgGovUpdateQuotaResponseAminoMsg {
    type: "/umee.uibc.v1.MsgGovUpdateQuotaResponse";
    value: MsgGovUpdateQuotaResponseAmino;
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
export interface MsgGovSetIBCStatusProtoMsg {
    typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus";
    value: Uint8Array;
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusAmino {
    /** authority is the address of the governance account. */
    authority: string;
    title: string;
    description: string;
    /** ibc_status defines status for ibc transfers */
    ibc_status: IBCTransferStatus;
}
export interface MsgGovSetIBCStatusAminoMsg {
    type: "/umee.uibc.v1.MsgGovSetIBCStatus";
    value: MsgGovSetIBCStatusAmino;
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
export interface MsgGovSetIBCStatusResponseProtoMsg {
    typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
    value: Uint8Array;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponseAmino {
}
export interface MsgGovSetIBCStatusResponseAminoMsg {
    type: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
    value: MsgGovSetIBCStatusResponseAmino;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponseSDKType {
}
export declare const MsgGovUpdateQuota: {
    typeUrl: string;
    encode(message: MsgGovUpdateQuota, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovUpdateQuota;
    fromPartial(object: Partial<MsgGovUpdateQuota>): MsgGovUpdateQuota;
    fromAmino(object: MsgGovUpdateQuotaAmino): MsgGovUpdateQuota;
    toAmino(message: MsgGovUpdateQuota): MsgGovUpdateQuotaAmino;
    fromAminoMsg(object: MsgGovUpdateQuotaAminoMsg): MsgGovUpdateQuota;
    fromProtoMsg(message: MsgGovUpdateQuotaProtoMsg): MsgGovUpdateQuota;
    toProto(message: MsgGovUpdateQuota): Uint8Array;
    toProtoMsg(message: MsgGovUpdateQuota): MsgGovUpdateQuotaProtoMsg;
};
export declare const MsgGovUpdateQuotaResponse: {
    typeUrl: string;
    encode(_: MsgGovUpdateQuotaResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovUpdateQuotaResponse;
    fromPartial(_: Partial<MsgGovUpdateQuotaResponse>): MsgGovUpdateQuotaResponse;
    fromAmino(_: MsgGovUpdateQuotaResponseAmino): MsgGovUpdateQuotaResponse;
    toAmino(_: MsgGovUpdateQuotaResponse): MsgGovUpdateQuotaResponseAmino;
    fromAminoMsg(object: MsgGovUpdateQuotaResponseAminoMsg): MsgGovUpdateQuotaResponse;
    fromProtoMsg(message: MsgGovUpdateQuotaResponseProtoMsg): MsgGovUpdateQuotaResponse;
    toProto(message: MsgGovUpdateQuotaResponse): Uint8Array;
    toProtoMsg(message: MsgGovUpdateQuotaResponse): MsgGovUpdateQuotaResponseProtoMsg;
};
export declare const MsgGovSetIBCStatus: {
    typeUrl: string;
    encode(message: MsgGovSetIBCStatus, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovSetIBCStatus;
    fromPartial(object: Partial<MsgGovSetIBCStatus>): MsgGovSetIBCStatus;
    fromAmino(object: MsgGovSetIBCStatusAmino): MsgGovSetIBCStatus;
    toAmino(message: MsgGovSetIBCStatus): MsgGovSetIBCStatusAmino;
    fromAminoMsg(object: MsgGovSetIBCStatusAminoMsg): MsgGovSetIBCStatus;
    fromProtoMsg(message: MsgGovSetIBCStatusProtoMsg): MsgGovSetIBCStatus;
    toProto(message: MsgGovSetIBCStatus): Uint8Array;
    toProtoMsg(message: MsgGovSetIBCStatus): MsgGovSetIBCStatusProtoMsg;
};
export declare const MsgGovSetIBCStatusResponse: {
    typeUrl: string;
    encode(_: MsgGovSetIBCStatusResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovSetIBCStatusResponse;
    fromPartial(_: Partial<MsgGovSetIBCStatusResponse>): MsgGovSetIBCStatusResponse;
    fromAmino(_: MsgGovSetIBCStatusResponseAmino): MsgGovSetIBCStatusResponse;
    toAmino(_: MsgGovSetIBCStatusResponse): MsgGovSetIBCStatusResponseAmino;
    fromAminoMsg(object: MsgGovSetIBCStatusResponseAminoMsg): MsgGovSetIBCStatusResponse;
    fromProtoMsg(message: MsgGovSetIBCStatusResponseProtoMsg): MsgGovSetIBCStatusResponse;
    toProto(message: MsgGovSetIBCStatusResponse): Uint8Array;
    toProtoMsg(message: MsgGovSetIBCStatusResponse): MsgGovSetIBCStatusResponseProtoMsg;
};
