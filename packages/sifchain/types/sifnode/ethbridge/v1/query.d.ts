import { Status, StatusAmino, StatusSDKType } from "../../oracle/v1/types";
import { EthBridgeClaim, EthBridgeClaimAmino, EthBridgeClaimSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequest {
    ethereumChainId: bigint;
    /** bridge_contract_address is an EthereumAddress */
    bridgeContractAddress: string;
    nonce: bigint;
    symbol: string;
    /** token_contract_address is an EthereumAddress */
    tokenContractAddress: string;
    /** ethereum_sender is an EthereumAddress */
    ethereumSender: string;
}
export interface QueryEthProphecyRequestProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.QueryEthProphecyRequest";
    value: Uint8Array;
}
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequestAmino {
    ethereum_chain_id?: string;
    /** bridge_contract_address is an EthereumAddress */
    bridge_contract_address?: string;
    nonce?: string;
    symbol?: string;
    /** token_contract_address is an EthereumAddress */
    token_contract_address?: string;
    /** ethereum_sender is an EthereumAddress */
    ethereum_sender?: string;
}
export interface QueryEthProphecyRequestAminoMsg {
    type: "/sifnode.ethbridge.v1.QueryEthProphecyRequest";
    value: QueryEthProphecyRequestAmino;
}
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequestSDKType {
    ethereum_chain_id: bigint;
    bridge_contract_address: string;
    nonce: bigint;
    symbol: string;
    token_contract_address: string;
    ethereum_sender: string;
}
/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponse {
    id: string;
    status?: Status;
    claims: EthBridgeClaim[];
}
export interface QueryEthProphecyResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.QueryEthProphecyResponse";
    value: Uint8Array;
}
/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponseAmino {
    id?: string;
    status?: StatusAmino;
    claims?: EthBridgeClaimAmino[];
}
export interface QueryEthProphecyResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.QueryEthProphecyResponse";
    value: QueryEthProphecyResponseAmino;
}
/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponseSDKType {
    id: string;
    status?: StatusSDKType;
    claims: EthBridgeClaimSDKType[];
}
export interface QueryBlacklistRequest {
}
export interface QueryBlacklistRequestProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.QueryBlacklistRequest";
    value: Uint8Array;
}
export interface QueryBlacklistRequestAmino {
}
export interface QueryBlacklistRequestAminoMsg {
    type: "/sifnode.ethbridge.v1.QueryBlacklistRequest";
    value: QueryBlacklistRequestAmino;
}
export interface QueryBlacklistRequestSDKType {
}
export interface QueryBlacklistResponse {
    addresses: string[];
}
export interface QueryBlacklistResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.QueryBlacklistResponse";
    value: Uint8Array;
}
export interface QueryBlacklistResponseAmino {
    addresses?: string[];
}
export interface QueryBlacklistResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.QueryBlacklistResponse";
    value: QueryBlacklistResponseAmino;
}
export interface QueryBlacklistResponseSDKType {
    addresses: string[];
}
export interface QueryPauseRequest {
}
export interface QueryPauseRequestProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.QueryPauseRequest";
    value: Uint8Array;
}
export interface QueryPauseRequestAmino {
}
export interface QueryPauseRequestAminoMsg {
    type: "/sifnode.ethbridge.v1.QueryPauseRequest";
    value: QueryPauseRequestAmino;
}
export interface QueryPauseRequestSDKType {
}
export interface QueryPauseResponse {
    isPaused: boolean;
}
export interface QueryPauseResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.QueryPauseResponse";
    value: Uint8Array;
}
export interface QueryPauseResponseAmino {
    is_paused?: boolean;
}
export interface QueryPauseResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.QueryPauseResponse";
    value: QueryPauseResponseAmino;
}
export interface QueryPauseResponseSDKType {
    is_paused: boolean;
}
export declare const QueryEthProphecyRequest: {
    typeUrl: string;
    encode(message: QueryEthProphecyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEthProphecyRequest;
    fromPartial(object: Partial<QueryEthProphecyRequest>): QueryEthProphecyRequest;
    fromAmino(object: QueryEthProphecyRequestAmino): QueryEthProphecyRequest;
    toAmino(message: QueryEthProphecyRequest): QueryEthProphecyRequestAmino;
    fromAminoMsg(object: QueryEthProphecyRequestAminoMsg): QueryEthProphecyRequest;
    fromProtoMsg(message: QueryEthProphecyRequestProtoMsg): QueryEthProphecyRequest;
    toProto(message: QueryEthProphecyRequest): Uint8Array;
    toProtoMsg(message: QueryEthProphecyRequest): QueryEthProphecyRequestProtoMsg;
};
export declare const QueryEthProphecyResponse: {
    typeUrl: string;
    encode(message: QueryEthProphecyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEthProphecyResponse;
    fromPartial(object: Partial<QueryEthProphecyResponse>): QueryEthProphecyResponse;
    fromAmino(object: QueryEthProphecyResponseAmino): QueryEthProphecyResponse;
    toAmino(message: QueryEthProphecyResponse): QueryEthProphecyResponseAmino;
    fromAminoMsg(object: QueryEthProphecyResponseAminoMsg): QueryEthProphecyResponse;
    fromProtoMsg(message: QueryEthProphecyResponseProtoMsg): QueryEthProphecyResponse;
    toProto(message: QueryEthProphecyResponse): Uint8Array;
    toProtoMsg(message: QueryEthProphecyResponse): QueryEthProphecyResponseProtoMsg;
};
export declare const QueryBlacklistRequest: {
    typeUrl: string;
    encode(_: QueryBlacklistRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBlacklistRequest;
    fromPartial(_: Partial<QueryBlacklistRequest>): QueryBlacklistRequest;
    fromAmino(_: QueryBlacklistRequestAmino): QueryBlacklistRequest;
    toAmino(_: QueryBlacklistRequest): QueryBlacklistRequestAmino;
    fromAminoMsg(object: QueryBlacklistRequestAminoMsg): QueryBlacklistRequest;
    fromProtoMsg(message: QueryBlacklistRequestProtoMsg): QueryBlacklistRequest;
    toProto(message: QueryBlacklistRequest): Uint8Array;
    toProtoMsg(message: QueryBlacklistRequest): QueryBlacklistRequestProtoMsg;
};
export declare const QueryBlacklistResponse: {
    typeUrl: string;
    encode(message: QueryBlacklistResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBlacklistResponse;
    fromPartial(object: Partial<QueryBlacklistResponse>): QueryBlacklistResponse;
    fromAmino(object: QueryBlacklistResponseAmino): QueryBlacklistResponse;
    toAmino(message: QueryBlacklistResponse): QueryBlacklistResponseAmino;
    fromAminoMsg(object: QueryBlacklistResponseAminoMsg): QueryBlacklistResponse;
    fromProtoMsg(message: QueryBlacklistResponseProtoMsg): QueryBlacklistResponse;
    toProto(message: QueryBlacklistResponse): Uint8Array;
    toProtoMsg(message: QueryBlacklistResponse): QueryBlacklistResponseProtoMsg;
};
export declare const QueryPauseRequest: {
    typeUrl: string;
    encode(_: QueryPauseRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPauseRequest;
    fromPartial(_: Partial<QueryPauseRequest>): QueryPauseRequest;
    fromAmino(_: QueryPauseRequestAmino): QueryPauseRequest;
    toAmino(_: QueryPauseRequest): QueryPauseRequestAmino;
    fromAminoMsg(object: QueryPauseRequestAminoMsg): QueryPauseRequest;
    fromProtoMsg(message: QueryPauseRequestProtoMsg): QueryPauseRequest;
    toProto(message: QueryPauseRequest): Uint8Array;
    toProtoMsg(message: QueryPauseRequest): QueryPauseRequestProtoMsg;
};
export declare const QueryPauseResponse: {
    typeUrl: string;
    encode(message: QueryPauseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPauseResponse;
    fromPartial(object: Partial<QueryPauseResponse>): QueryPauseResponse;
    fromAmino(object: QueryPauseResponseAmino): QueryPauseResponse;
    toAmino(message: QueryPauseResponse): QueryPauseResponseAmino;
    fromAminoMsg(object: QueryPauseResponseAminoMsg): QueryPauseResponse;
    fromProtoMsg(message: QueryPauseResponseProtoMsg): QueryPauseResponse;
    toProto(message: QueryPauseResponse): Uint8Array;
    toProtoMsg(message: QueryPauseResponse): QueryPauseResponseProtoMsg;
};
