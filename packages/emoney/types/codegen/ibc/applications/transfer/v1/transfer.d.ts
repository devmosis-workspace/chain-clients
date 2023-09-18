import { BinaryWriter } from "../../../../binary";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
    /** the token denomination to be transferred */
    denom: string;
    /** the token amount to be transferred */
    amount: bigint;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
}
export interface FungibleTokenPacketDataProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.FungibleTokenPacketData";
    value: Uint8Array;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataAmino {
    /** the token denomination to be transferred */
    denom: string;
    /** the token amount to be transferred */
    amount: string;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
}
export interface FungibleTokenPacketDataAminoMsg {
    type: "cosmos-sdk/FungibleTokenPacketData";
    value: FungibleTokenPacketDataAmino;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataSDKType {
    denom: string;
    amount: bigint;
    sender: string;
    receiver: string;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTrace {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path: string;
    /** base denomination of the relayed fungible token. */
    baseDenom: string;
}
export interface DenomTraceProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.DenomTrace";
    value: Uint8Array;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceAmino {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path: string;
    /** base denomination of the relayed fungible token. */
    base_denom: string;
}
export interface DenomTraceAminoMsg {
    type: "cosmos-sdk/DenomTrace";
    value: DenomTraceAmino;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceSDKType {
    path: string;
    base_denom: string;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     */
    sendEnabled: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     */
    receiveEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.Params";
    value: Uint8Array;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsAmino {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     */
    send_enabled: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     */
    receive_enabled: boolean;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsSDKType {
    send_enabled: boolean;
    receive_enabled: boolean;
}
export declare const FungibleTokenPacketData: {
    typeUrl: string;
    encode(message: FungibleTokenPacketData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FungibleTokenPacketData;
    fromPartial(object: Partial<FungibleTokenPacketData>): FungibleTokenPacketData;
    fromAmino(object: FungibleTokenPacketDataAmino): FungibleTokenPacketData;
    toAmino(message: FungibleTokenPacketData): FungibleTokenPacketDataAmino;
    fromAminoMsg(object: FungibleTokenPacketDataAminoMsg): FungibleTokenPacketData;
    toAminoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataAminoMsg;
    fromProtoMsg(message: FungibleTokenPacketDataProtoMsg): FungibleTokenPacketData;
    toProto(message: FungibleTokenPacketData): Uint8Array;
    toProtoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataProtoMsg;
};
export declare const DenomTrace: {
    typeUrl: string;
    encode(message: DenomTrace, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DenomTrace;
    fromPartial(object: Partial<DenomTrace>): DenomTrace;
    fromAmino(object: DenomTraceAmino): DenomTrace;
    toAmino(message: DenomTrace): DenomTraceAmino;
    fromAminoMsg(object: DenomTraceAminoMsg): DenomTrace;
    toAminoMsg(message: DenomTrace): DenomTraceAminoMsg;
    fromProtoMsg(message: DenomTraceProtoMsg): DenomTrace;
    toProto(message: DenomTrace): Uint8Array;
    toProtoMsg(message: DenomTrace): DenomTraceProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
