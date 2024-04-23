import { AxelarCork, AxelarCorkAmino, AxelarCorkSDKType } from "./axelarcork";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleAxelarCorkRequest {
    /** the scheduled cork */
    cork?: AxelarCork;
    /** the chain id */
    chainId: bigint;
    /** the block height that must be reached */
    blockHeight: bigint;
    /** signer account address */
    signer: string;
}
export interface MsgScheduleAxelarCorkRequestProtoMsg {
    typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkRequest";
    value: Uint8Array;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleAxelarCorkRequestAmino {
    /** the scheduled cork */
    cork?: AxelarCorkAmino;
    /** the chain id */
    chain_id?: string;
    /** the block height that must be reached */
    block_height?: string;
    /** signer account address */
    signer?: string;
}
export interface MsgScheduleAxelarCorkRequestAminoMsg {
    type: "/axelarcork.v1.MsgScheduleAxelarCorkRequest";
    value: MsgScheduleAxelarCorkRequestAmino;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleAxelarCorkRequestSDKType {
    cork?: AxelarCorkSDKType;
    chain_id: bigint;
    block_height: bigint;
    signer: string;
}
export interface MsgScheduleAxelarCorkResponse {
    /** cork ID */
    id: string;
}
export interface MsgScheduleAxelarCorkResponseProtoMsg {
    typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkResponse";
    value: Uint8Array;
}
export interface MsgScheduleAxelarCorkResponseAmino {
    /** cork ID */
    id?: string;
}
export interface MsgScheduleAxelarCorkResponseAminoMsg {
    type: "/axelarcork.v1.MsgScheduleAxelarCorkResponse";
    value: MsgScheduleAxelarCorkResponseAmino;
}
export interface MsgScheduleAxelarCorkResponseSDKType {
    id: string;
}
export interface MsgRelayAxelarCorkRequest {
    signer: string;
    token: Coin;
    fee: bigint;
    chainId: bigint;
    targetContractAddress: string;
}
export interface MsgRelayAxelarCorkRequestProtoMsg {
    typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkRequest";
    value: Uint8Array;
}
export interface MsgRelayAxelarCorkRequestAmino {
    signer?: string;
    token?: CoinAmino;
    fee?: string;
    chain_id?: string;
    target_contract_address?: string;
}
export interface MsgRelayAxelarCorkRequestAminoMsg {
    type: "/axelarcork.v1.MsgRelayAxelarCorkRequest";
    value: MsgRelayAxelarCorkRequestAmino;
}
export interface MsgRelayAxelarCorkRequestSDKType {
    signer: string;
    token: CoinSDKType;
    fee: bigint;
    chain_id: bigint;
    target_contract_address: string;
}
export interface MsgRelayAxelarCorkResponse {
}
export interface MsgRelayAxelarCorkResponseProtoMsg {
    typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkResponse";
    value: Uint8Array;
}
export interface MsgRelayAxelarCorkResponseAmino {
}
export interface MsgRelayAxelarCorkResponseAminoMsg {
    type: "/axelarcork.v1.MsgRelayAxelarCorkResponse";
    value: MsgRelayAxelarCorkResponseAmino;
}
export interface MsgRelayAxelarCorkResponseSDKType {
}
export interface MsgRelayAxelarProxyUpgradeRequest {
    signer: string;
    token: Coin;
    fee: bigint;
    chainId: bigint;
}
export interface MsgRelayAxelarProxyUpgradeRequestProtoMsg {
    typeUrl: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeRequest";
    value: Uint8Array;
}
export interface MsgRelayAxelarProxyUpgradeRequestAmino {
    signer?: string;
    token?: CoinAmino;
    fee?: string;
    chain_id?: string;
}
export interface MsgRelayAxelarProxyUpgradeRequestAminoMsg {
    type: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeRequest";
    value: MsgRelayAxelarProxyUpgradeRequestAmino;
}
export interface MsgRelayAxelarProxyUpgradeRequestSDKType {
    signer: string;
    token: CoinSDKType;
    fee: bigint;
    chain_id: bigint;
}
export interface MsgRelayAxelarProxyUpgradeResponse {
}
export interface MsgRelayAxelarProxyUpgradeResponseProtoMsg {
    typeUrl: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeResponse";
    value: Uint8Array;
}
export interface MsgRelayAxelarProxyUpgradeResponseAmino {
}
export interface MsgRelayAxelarProxyUpgradeResponseAminoMsg {
    type: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeResponse";
    value: MsgRelayAxelarProxyUpgradeResponseAmino;
}
export interface MsgRelayAxelarProxyUpgradeResponseSDKType {
}
export interface MsgBumpAxelarCorkGasRequest {
    signer: string;
    token: Coin;
    messageId: string;
}
export interface MsgBumpAxelarCorkGasRequestProtoMsg {
    typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest";
    value: Uint8Array;
}
export interface MsgBumpAxelarCorkGasRequestAmino {
    signer?: string;
    token?: CoinAmino;
    message_id?: string;
}
export interface MsgBumpAxelarCorkGasRequestAminoMsg {
    type: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest";
    value: MsgBumpAxelarCorkGasRequestAmino;
}
export interface MsgBumpAxelarCorkGasRequestSDKType {
    signer: string;
    token: CoinSDKType;
    message_id: string;
}
export interface MsgBumpAxelarCorkGasResponse {
}
export interface MsgBumpAxelarCorkGasResponseProtoMsg {
    typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasResponse";
    value: Uint8Array;
}
export interface MsgBumpAxelarCorkGasResponseAmino {
}
export interface MsgBumpAxelarCorkGasResponseAminoMsg {
    type: "/axelarcork.v1.MsgBumpAxelarCorkGasResponse";
    value: MsgBumpAxelarCorkGasResponseAmino;
}
export interface MsgBumpAxelarCorkGasResponseSDKType {
}
export interface MsgCancelAxelarCorkRequest {
    signer: string;
    chainId: bigint;
    targetContractAddress: string;
}
export interface MsgCancelAxelarCorkRequestProtoMsg {
    typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkRequest";
    value: Uint8Array;
}
export interface MsgCancelAxelarCorkRequestAmino {
    signer?: string;
    chain_id?: string;
    target_contract_address?: string;
}
export interface MsgCancelAxelarCorkRequestAminoMsg {
    type: "/axelarcork.v1.MsgCancelAxelarCorkRequest";
    value: MsgCancelAxelarCorkRequestAmino;
}
export interface MsgCancelAxelarCorkRequestSDKType {
    signer: string;
    chain_id: bigint;
    target_contract_address: string;
}
export interface MsgCancelAxelarCorkResponse {
}
export interface MsgCancelAxelarCorkResponseProtoMsg {
    typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkResponse";
    value: Uint8Array;
}
export interface MsgCancelAxelarCorkResponseAmino {
}
export interface MsgCancelAxelarCorkResponseAminoMsg {
    type: "/axelarcork.v1.MsgCancelAxelarCorkResponse";
    value: MsgCancelAxelarCorkResponseAmino;
}
export interface MsgCancelAxelarCorkResponseSDKType {
}
export declare const MsgScheduleAxelarCorkRequest: {
    typeUrl: string;
    encode(message: MsgScheduleAxelarCorkRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgScheduleAxelarCorkRequest;
    fromPartial(object: Partial<MsgScheduleAxelarCorkRequest>): MsgScheduleAxelarCorkRequest;
    fromAmino(object: MsgScheduleAxelarCorkRequestAmino): MsgScheduleAxelarCorkRequest;
    toAmino(message: MsgScheduleAxelarCorkRequest): MsgScheduleAxelarCorkRequestAmino;
    fromAminoMsg(object: MsgScheduleAxelarCorkRequestAminoMsg): MsgScheduleAxelarCorkRequest;
    fromProtoMsg(message: MsgScheduleAxelarCorkRequestProtoMsg): MsgScheduleAxelarCorkRequest;
    toProto(message: MsgScheduleAxelarCorkRequest): Uint8Array;
    toProtoMsg(message: MsgScheduleAxelarCorkRequest): MsgScheduleAxelarCorkRequestProtoMsg;
};
export declare const MsgScheduleAxelarCorkResponse: {
    typeUrl: string;
    encode(message: MsgScheduleAxelarCorkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgScheduleAxelarCorkResponse;
    fromPartial(object: Partial<MsgScheduleAxelarCorkResponse>): MsgScheduleAxelarCorkResponse;
    fromAmino(object: MsgScheduleAxelarCorkResponseAmino): MsgScheduleAxelarCorkResponse;
    toAmino(message: MsgScheduleAxelarCorkResponse): MsgScheduleAxelarCorkResponseAmino;
    fromAminoMsg(object: MsgScheduleAxelarCorkResponseAminoMsg): MsgScheduleAxelarCorkResponse;
    fromProtoMsg(message: MsgScheduleAxelarCorkResponseProtoMsg): MsgScheduleAxelarCorkResponse;
    toProto(message: MsgScheduleAxelarCorkResponse): Uint8Array;
    toProtoMsg(message: MsgScheduleAxelarCorkResponse): MsgScheduleAxelarCorkResponseProtoMsg;
};
export declare const MsgRelayAxelarCorkRequest: {
    typeUrl: string;
    encode(message: MsgRelayAxelarCorkRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRelayAxelarCorkRequest;
    fromPartial(object: Partial<MsgRelayAxelarCorkRequest>): MsgRelayAxelarCorkRequest;
    fromAmino(object: MsgRelayAxelarCorkRequestAmino): MsgRelayAxelarCorkRequest;
    toAmino(message: MsgRelayAxelarCorkRequest): MsgRelayAxelarCorkRequestAmino;
    fromAminoMsg(object: MsgRelayAxelarCorkRequestAminoMsg): MsgRelayAxelarCorkRequest;
    fromProtoMsg(message: MsgRelayAxelarCorkRequestProtoMsg): MsgRelayAxelarCorkRequest;
    toProto(message: MsgRelayAxelarCorkRequest): Uint8Array;
    toProtoMsg(message: MsgRelayAxelarCorkRequest): MsgRelayAxelarCorkRequestProtoMsg;
};
export declare const MsgRelayAxelarCorkResponse: {
    typeUrl: string;
    encode(_: MsgRelayAxelarCorkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRelayAxelarCorkResponse;
    fromPartial(_: Partial<MsgRelayAxelarCorkResponse>): MsgRelayAxelarCorkResponse;
    fromAmino(_: MsgRelayAxelarCorkResponseAmino): MsgRelayAxelarCorkResponse;
    toAmino(_: MsgRelayAxelarCorkResponse): MsgRelayAxelarCorkResponseAmino;
    fromAminoMsg(object: MsgRelayAxelarCorkResponseAminoMsg): MsgRelayAxelarCorkResponse;
    fromProtoMsg(message: MsgRelayAxelarCorkResponseProtoMsg): MsgRelayAxelarCorkResponse;
    toProto(message: MsgRelayAxelarCorkResponse): Uint8Array;
    toProtoMsg(message: MsgRelayAxelarCorkResponse): MsgRelayAxelarCorkResponseProtoMsg;
};
export declare const MsgRelayAxelarProxyUpgradeRequest: {
    typeUrl: string;
    encode(message: MsgRelayAxelarProxyUpgradeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRelayAxelarProxyUpgradeRequest;
    fromPartial(object: Partial<MsgRelayAxelarProxyUpgradeRequest>): MsgRelayAxelarProxyUpgradeRequest;
    fromAmino(object: MsgRelayAxelarProxyUpgradeRequestAmino): MsgRelayAxelarProxyUpgradeRequest;
    toAmino(message: MsgRelayAxelarProxyUpgradeRequest): MsgRelayAxelarProxyUpgradeRequestAmino;
    fromAminoMsg(object: MsgRelayAxelarProxyUpgradeRequestAminoMsg): MsgRelayAxelarProxyUpgradeRequest;
    fromProtoMsg(message: MsgRelayAxelarProxyUpgradeRequestProtoMsg): MsgRelayAxelarProxyUpgradeRequest;
    toProto(message: MsgRelayAxelarProxyUpgradeRequest): Uint8Array;
    toProtoMsg(message: MsgRelayAxelarProxyUpgradeRequest): MsgRelayAxelarProxyUpgradeRequestProtoMsg;
};
export declare const MsgRelayAxelarProxyUpgradeResponse: {
    typeUrl: string;
    encode(_: MsgRelayAxelarProxyUpgradeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRelayAxelarProxyUpgradeResponse;
    fromPartial(_: Partial<MsgRelayAxelarProxyUpgradeResponse>): MsgRelayAxelarProxyUpgradeResponse;
    fromAmino(_: MsgRelayAxelarProxyUpgradeResponseAmino): MsgRelayAxelarProxyUpgradeResponse;
    toAmino(_: MsgRelayAxelarProxyUpgradeResponse): MsgRelayAxelarProxyUpgradeResponseAmino;
    fromAminoMsg(object: MsgRelayAxelarProxyUpgradeResponseAminoMsg): MsgRelayAxelarProxyUpgradeResponse;
    fromProtoMsg(message: MsgRelayAxelarProxyUpgradeResponseProtoMsg): MsgRelayAxelarProxyUpgradeResponse;
    toProto(message: MsgRelayAxelarProxyUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgRelayAxelarProxyUpgradeResponse): MsgRelayAxelarProxyUpgradeResponseProtoMsg;
};
export declare const MsgBumpAxelarCorkGasRequest: {
    typeUrl: string;
    encode(message: MsgBumpAxelarCorkGasRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBumpAxelarCorkGasRequest;
    fromPartial(object: Partial<MsgBumpAxelarCorkGasRequest>): MsgBumpAxelarCorkGasRequest;
    fromAmino(object: MsgBumpAxelarCorkGasRequestAmino): MsgBumpAxelarCorkGasRequest;
    toAmino(message: MsgBumpAxelarCorkGasRequest): MsgBumpAxelarCorkGasRequestAmino;
    fromAminoMsg(object: MsgBumpAxelarCorkGasRequestAminoMsg): MsgBumpAxelarCorkGasRequest;
    fromProtoMsg(message: MsgBumpAxelarCorkGasRequestProtoMsg): MsgBumpAxelarCorkGasRequest;
    toProto(message: MsgBumpAxelarCorkGasRequest): Uint8Array;
    toProtoMsg(message: MsgBumpAxelarCorkGasRequest): MsgBumpAxelarCorkGasRequestProtoMsg;
};
export declare const MsgBumpAxelarCorkGasResponse: {
    typeUrl: string;
    encode(_: MsgBumpAxelarCorkGasResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBumpAxelarCorkGasResponse;
    fromPartial(_: Partial<MsgBumpAxelarCorkGasResponse>): MsgBumpAxelarCorkGasResponse;
    fromAmino(_: MsgBumpAxelarCorkGasResponseAmino): MsgBumpAxelarCorkGasResponse;
    toAmino(_: MsgBumpAxelarCorkGasResponse): MsgBumpAxelarCorkGasResponseAmino;
    fromAminoMsg(object: MsgBumpAxelarCorkGasResponseAminoMsg): MsgBumpAxelarCorkGasResponse;
    fromProtoMsg(message: MsgBumpAxelarCorkGasResponseProtoMsg): MsgBumpAxelarCorkGasResponse;
    toProto(message: MsgBumpAxelarCorkGasResponse): Uint8Array;
    toProtoMsg(message: MsgBumpAxelarCorkGasResponse): MsgBumpAxelarCorkGasResponseProtoMsg;
};
export declare const MsgCancelAxelarCorkRequest: {
    typeUrl: string;
    encode(message: MsgCancelAxelarCorkRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelAxelarCorkRequest;
    fromPartial(object: Partial<MsgCancelAxelarCorkRequest>): MsgCancelAxelarCorkRequest;
    fromAmino(object: MsgCancelAxelarCorkRequestAmino): MsgCancelAxelarCorkRequest;
    toAmino(message: MsgCancelAxelarCorkRequest): MsgCancelAxelarCorkRequestAmino;
    fromAminoMsg(object: MsgCancelAxelarCorkRequestAminoMsg): MsgCancelAxelarCorkRequest;
    fromProtoMsg(message: MsgCancelAxelarCorkRequestProtoMsg): MsgCancelAxelarCorkRequest;
    toProto(message: MsgCancelAxelarCorkRequest): Uint8Array;
    toProtoMsg(message: MsgCancelAxelarCorkRequest): MsgCancelAxelarCorkRequestProtoMsg;
};
export declare const MsgCancelAxelarCorkResponse: {
    typeUrl: string;
    encode(_: MsgCancelAxelarCorkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelAxelarCorkResponse;
    fromPartial(_: Partial<MsgCancelAxelarCorkResponse>): MsgCancelAxelarCorkResponse;
    fromAmino(_: MsgCancelAxelarCorkResponseAmino): MsgCancelAxelarCorkResponse;
    toAmino(_: MsgCancelAxelarCorkResponse): MsgCancelAxelarCorkResponseAmino;
    fromAminoMsg(object: MsgCancelAxelarCorkResponseAminoMsg): MsgCancelAxelarCorkResponse;
    fromProtoMsg(message: MsgCancelAxelarCorkResponseProtoMsg): MsgCancelAxelarCorkResponse;
    toProto(message: MsgCancelAxelarCorkResponse): Uint8Array;
    toProtoMsg(message: MsgCancelAxelarCorkResponse): MsgCancelAxelarCorkResponseProtoMsg;
};
