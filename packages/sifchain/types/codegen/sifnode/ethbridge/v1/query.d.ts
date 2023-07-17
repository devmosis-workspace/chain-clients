import { Status, StatusSDKType } from "../../oracle/v1/types";
import { EthBridgeClaim, EthBridgeClaimSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequest {
    ethereumChainId: Long;
    /** bridge_contract_address is an EthereumAddress */
    bridgeContractAddress: string;
    nonce: Long;
    symbol: string;
    /** token_contract_address is an EthereumAddress */
    tokenContractAddress: string;
    /** ethereum_sender is an EthereumAddress */
    ethereumSender: string;
}
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequestSDKType {
    ethereum_chain_id: Long;
    bridge_contract_address: string;
    nonce: Long;
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
/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponseSDKType {
    id: string;
    status?: StatusSDKType;
    claims: EthBridgeClaimSDKType[];
}
export interface QueryBlacklistRequest {
}
export interface QueryBlacklistRequestSDKType {
}
export interface QueryBlacklistResponse {
    addresses: string[];
}
export interface QueryBlacklistResponseSDKType {
    addresses: string[];
}
export interface QueryPauseRequest {
}
export interface QueryPauseRequestSDKType {
}
export interface QueryPauseResponse {
    isPaused: boolean;
}
export interface QueryPauseResponseSDKType {
    is_paused: boolean;
}
export declare const QueryEthProphecyRequest: {
    encode(message: QueryEthProphecyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEthProphecyRequest;
    fromPartial(object: Partial<QueryEthProphecyRequest>): QueryEthProphecyRequest;
};
export declare const QueryEthProphecyResponse: {
    encode(message: QueryEthProphecyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEthProphecyResponse;
    fromPartial(object: Partial<QueryEthProphecyResponse>): QueryEthProphecyResponse;
};
export declare const QueryBlacklistRequest: {
    encode(_: QueryBlacklistRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBlacklistRequest;
    fromPartial(_: Partial<QueryBlacklistRequest>): QueryBlacklistRequest;
};
export declare const QueryBlacklistResponse: {
    encode(message: QueryBlacklistResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBlacklistResponse;
    fromPartial(object: Partial<QueryBlacklistResponse>): QueryBlacklistResponse;
};
export declare const QueryPauseRequest: {
    encode(_: QueryPauseRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryPauseRequest;
    fromPartial(_: Partial<QueryPauseRequest>): QueryPauseRequest;
};
export declare const QueryPauseResponse: {
    encode(message: QueryPauseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPauseResponse;
    fromPartial(object: Partial<QueryPauseResponse>): QueryPauseResponse;
};
