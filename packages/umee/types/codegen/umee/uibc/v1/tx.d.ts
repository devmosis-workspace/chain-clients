import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { IBCTransferStatus } from "./quota";
import { BinaryWriter } from "../../../binary";
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuota {
    /** authority is the address of the governance account or the Emergency Group. */
    authority: string;
    /**
     * description motivating the change. Should be used only when executing by the
     * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
     */
    description: string;
    /** total quota defines the total outflow of ibc-transfer in USD */
    total: string;
    /** per_denom quota for outflows per denom. All denoms have the same quota size. */
    perDenom: string;
    /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
    quotaDuration: Duration;
    /** Params.inflow_outflow_quota_base */
    inflowOutflowQuotaBase: string;
    /** Params.inflow_outflow_quota_rate */
    inflowOutflowQuotaRate: string;
    /** Params.inflow_outflow_token_quota_base */
    inflowOutflowTokenQuotaBase: string;
}
export interface MsgGovUpdateQuotaProtoMsg {
    typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota";
    value: Uint8Array;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaAmino {
    /** authority is the address of the governance account or the Emergency Group. */
    authority?: string;
    /**
     * description motivating the change. Should be used only when executing by the
     * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
     */
    description?: string;
    /** total quota defines the total outflow of ibc-transfer in USD */
    total?: string;
    /** per_denom quota for outflows per denom. All denoms have the same quota size. */
    per_denom?: string;
    /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
    quota_duration?: DurationAmino;
    /** Params.inflow_outflow_quota_base */
    inflow_outflow_quota_base?: string;
    /** Params.inflow_outflow_quota_rate */
    inflow_outflow_quota_rate?: string;
    /** Params.inflow_outflow_token_quota_base */
    inflow_outflow_token_quota_base?: string;
}
export interface MsgGovUpdateQuotaAminoMsg {
    type: "/umee.uibc.v1.MsgGovUpdateQuota";
    value: MsgGovUpdateQuotaAmino;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaSDKType {
    authority: string;
    description: string;
    total: string;
    per_denom: string;
    quota_duration: DurationSDKType;
    inflow_outflow_quota_base: string;
    inflow_outflow_quota_rate: string;
    inflow_outflow_token_quota_base: string;
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
    /** authority is the address of the governance account or the Emergency Group. */
    authority: string;
    /**
     * description motivating the change. Should be used only when executing by the
     * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
     */
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
    /** authority is the address of the governance account or the Emergency Group. */
    authority?: string;
    /**
     * description motivating the change. Should be used only when executing by the
     * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
     */
    description?: string;
    /** ibc_status defines status for ibc transfers */
    ibc_status?: IBCTransferStatus;
}
export interface MsgGovSetIBCStatusAminoMsg {
    type: "/umee.uibc.v1.MsgGovSetIBCStatus";
    value: MsgGovSetIBCStatusAmino;
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusSDKType {
    authority: string;
    description: string;
    ibc_status: IBCTransferStatus;
}
/** MsgGovSetIBCStatusResponse is a response type for Msg/GovSetIBCStatus. */
export interface MsgGovSetIBCStatusResponse {
}
export interface MsgGovSetIBCStatusResponseProtoMsg {
    typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
    value: Uint8Array;
}
/** MsgGovSetIBCStatusResponse is a response type for Msg/GovSetIBCStatus. */
export interface MsgGovSetIBCStatusResponseAmino {
}
export interface MsgGovSetIBCStatusResponseAminoMsg {
    type: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
    value: MsgGovSetIBCStatusResponseAmino;
}
/** MsgGovSetIBCStatusResponse is a response type for Msg/GovSetIBCStatus. */
export interface MsgGovSetIBCStatusResponseSDKType {
}
/** MsgGovToggleICS20Hooks is a request type for GovToggleICS20Hooks handler. */
export interface MsgGovToggleICS20Hooks {
    /** authority is the address of the governance account or the Emergency Group. */
    authority: string;
    /**
     * description motivating the change. Should be used only when executing by the
     * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
     */
    description: string;
    /** enabled defines if the IBC transfer hooks should be enabled or disabled. */
    enabled: boolean;
}
export interface MsgGovToggleICS20HooksProtoMsg {
    typeUrl: "/umee.uibc.v1.MsgGovToggleICS20Hooks";
    value: Uint8Array;
}
/** MsgGovToggleICS20Hooks is a request type for GovToggleICS20Hooks handler. */
export interface MsgGovToggleICS20HooksAmino {
    /** authority is the address of the governance account or the Emergency Group. */
    authority?: string;
    /**
     * description motivating the change. Should be used only when executing by the
     * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
     */
    description?: string;
    /** enabled defines if the IBC transfer hooks should be enabled or disabled. */
    enabled?: boolean;
}
export interface MsgGovToggleICS20HooksAminoMsg {
    type: "/umee.uibc.v1.MsgGovToggleICS20Hooks";
    value: MsgGovToggleICS20HooksAmino;
}
/** MsgGovToggleICS20Hooks is a request type for GovToggleICS20Hooks handler. */
export interface MsgGovToggleICS20HooksSDKType {
    authority: string;
    description: string;
    enabled: boolean;
}
/** MsgGovToggleICS20HooksResponse is a response type for Msg/GovToggleICS20Hooks. */
export interface MsgGovToggleICS20HooksResponse {
}
export interface MsgGovToggleICS20HooksResponseProtoMsg {
    typeUrl: "/umee.uibc.v1.MsgGovToggleICS20HooksResponse";
    value: Uint8Array;
}
/** MsgGovToggleICS20HooksResponse is a response type for Msg/GovToggleICS20Hooks. */
export interface MsgGovToggleICS20HooksResponseAmino {
}
export interface MsgGovToggleICS20HooksResponseAminoMsg {
    type: "/umee.uibc.v1.MsgGovToggleICS20HooksResponse";
    value: MsgGovToggleICS20HooksResponseAmino;
}
/** MsgGovToggleICS20HooksResponse is a response type for Msg/GovToggleICS20Hooks. */
export interface MsgGovToggleICS20HooksResponseSDKType {
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
export declare const MsgGovToggleICS20Hooks: {
    typeUrl: string;
    encode(message: MsgGovToggleICS20Hooks, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovToggleICS20Hooks;
    fromPartial(object: Partial<MsgGovToggleICS20Hooks>): MsgGovToggleICS20Hooks;
    fromAmino(object: MsgGovToggleICS20HooksAmino): MsgGovToggleICS20Hooks;
    toAmino(message: MsgGovToggleICS20Hooks): MsgGovToggleICS20HooksAmino;
    fromAminoMsg(object: MsgGovToggleICS20HooksAminoMsg): MsgGovToggleICS20Hooks;
    fromProtoMsg(message: MsgGovToggleICS20HooksProtoMsg): MsgGovToggleICS20Hooks;
    toProto(message: MsgGovToggleICS20Hooks): Uint8Array;
    toProtoMsg(message: MsgGovToggleICS20Hooks): MsgGovToggleICS20HooksProtoMsg;
};
export declare const MsgGovToggleICS20HooksResponse: {
    typeUrl: string;
    encode(_: MsgGovToggleICS20HooksResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovToggleICS20HooksResponse;
    fromPartial(_: Partial<MsgGovToggleICS20HooksResponse>): MsgGovToggleICS20HooksResponse;
    fromAmino(_: MsgGovToggleICS20HooksResponseAmino): MsgGovToggleICS20HooksResponse;
    toAmino(_: MsgGovToggleICS20HooksResponse): MsgGovToggleICS20HooksResponseAmino;
    fromAminoMsg(object: MsgGovToggleICS20HooksResponseAminoMsg): MsgGovToggleICS20HooksResponse;
    fromProtoMsg(message: MsgGovToggleICS20HooksResponseProtoMsg): MsgGovToggleICS20HooksResponse;
    toProto(message: MsgGovToggleICS20HooksResponse): Uint8Array;
    toProtoMsg(message: MsgGovToggleICS20HooksResponse): MsgGovToggleICS20HooksResponseProtoMsg;
};
