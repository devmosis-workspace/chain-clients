import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.evmutil.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/kava.evmutil.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryDeployedCosmosCoinContractsRequest defines the request type for Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsRequest {
    /**
     * optional query param to only return specific denoms in the list
     * denoms that do not have deployed contracts will be omitted from the result
     * must request fewer than 100 denoms at a time.
     */
    cosmosDenoms: string[];
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryDeployedCosmosCoinContractsRequestProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsRequest";
    value: Uint8Array;
}
/** QueryDeployedCosmosCoinContractsRequest defines the request type for Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsRequestAmino {
    /**
     * optional query param to only return specific denoms in the list
     * denoms that do not have deployed contracts will be omitted from the result
     * must request fewer than 100 denoms at a time.
     */
    cosmos_denoms: string[];
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDeployedCosmosCoinContractsRequestAminoMsg {
    type: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsRequest";
    value: QueryDeployedCosmosCoinContractsRequestAmino;
}
/** QueryDeployedCosmosCoinContractsRequest defines the request type for Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsRequestSDKType {
    cosmos_denoms: string[];
    pagination: PageRequestSDKType;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponse {
    /** deployed_cosmos_coin_contracts is a list of cosmos-sdk coin denom and its deployed contract address */
    deployedCosmosCoinContracts: DeployedCosmosCoinContract[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryDeployedCosmosCoinContractsResponseProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsResponse";
    value: Uint8Array;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponseAmino {
    /** deployed_cosmos_coin_contracts is a list of cosmos-sdk coin denom and its deployed contract address */
    deployed_cosmos_coin_contracts: DeployedCosmosCoinContractAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDeployedCosmosCoinContractsResponseAminoMsg {
    type: "/kava.evmutil.v1beta1.QueryDeployedCosmosCoinContractsResponse";
    value: QueryDeployedCosmosCoinContractsResponseAmino;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponseSDKType {
    deployed_cosmos_coin_contracts: DeployedCosmosCoinContractSDKType[];
    pagination: PageResponseSDKType;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContract {
    cosmosDenom: string;
    address: string;
}
export interface DeployedCosmosCoinContractProtoMsg {
    typeUrl: "/kava.evmutil.v1beta1.DeployedCosmosCoinContract";
    value: Uint8Array;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContractAmino {
    cosmos_denom: string;
    address: string;
}
export interface DeployedCosmosCoinContractAminoMsg {
    type: "/kava.evmutil.v1beta1.DeployedCosmosCoinContract";
    value: DeployedCosmosCoinContractAmino;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContractSDKType {
    cosmos_denom: string;
    address: string;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryDeployedCosmosCoinContractsRequest: {
    typeUrl: string;
    encode(message: QueryDeployedCosmosCoinContractsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeployedCosmosCoinContractsRequest;
    fromPartial(object: Partial<QueryDeployedCosmosCoinContractsRequest>): QueryDeployedCosmosCoinContractsRequest;
    fromAmino(object: QueryDeployedCosmosCoinContractsRequestAmino): QueryDeployedCosmosCoinContractsRequest;
    toAmino(message: QueryDeployedCosmosCoinContractsRequest): QueryDeployedCosmosCoinContractsRequestAmino;
    fromAminoMsg(object: QueryDeployedCosmosCoinContractsRequestAminoMsg): QueryDeployedCosmosCoinContractsRequest;
    fromProtoMsg(message: QueryDeployedCosmosCoinContractsRequestProtoMsg): QueryDeployedCosmosCoinContractsRequest;
    toProto(message: QueryDeployedCosmosCoinContractsRequest): Uint8Array;
    toProtoMsg(message: QueryDeployedCosmosCoinContractsRequest): QueryDeployedCosmosCoinContractsRequestProtoMsg;
};
export declare const QueryDeployedCosmosCoinContractsResponse: {
    typeUrl: string;
    encode(message: QueryDeployedCosmosCoinContractsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDeployedCosmosCoinContractsResponse;
    fromPartial(object: Partial<QueryDeployedCosmosCoinContractsResponse>): QueryDeployedCosmosCoinContractsResponse;
    fromAmino(object: QueryDeployedCosmosCoinContractsResponseAmino): QueryDeployedCosmosCoinContractsResponse;
    toAmino(message: QueryDeployedCosmosCoinContractsResponse): QueryDeployedCosmosCoinContractsResponseAmino;
    fromAminoMsg(object: QueryDeployedCosmosCoinContractsResponseAminoMsg): QueryDeployedCosmosCoinContractsResponse;
    fromProtoMsg(message: QueryDeployedCosmosCoinContractsResponseProtoMsg): QueryDeployedCosmosCoinContractsResponse;
    toProto(message: QueryDeployedCosmosCoinContractsResponse): Uint8Array;
    toProtoMsg(message: QueryDeployedCosmosCoinContractsResponse): QueryDeployedCosmosCoinContractsResponseProtoMsg;
};
export declare const DeployedCosmosCoinContract: {
    typeUrl: string;
    encode(message: DeployedCosmosCoinContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DeployedCosmosCoinContract;
    fromPartial(object: Partial<DeployedCosmosCoinContract>): DeployedCosmosCoinContract;
    fromAmino(object: DeployedCosmosCoinContractAmino): DeployedCosmosCoinContract;
    toAmino(message: DeployedCosmosCoinContract): DeployedCosmosCoinContractAmino;
    fromAminoMsg(object: DeployedCosmosCoinContractAminoMsg): DeployedCosmosCoinContract;
    fromProtoMsg(message: DeployedCosmosCoinContractProtoMsg): DeployedCosmosCoinContract;
    toProto(message: DeployedCosmosCoinContract): Uint8Array;
    toProtoMsg(message: DeployedCosmosCoinContract): DeployedCosmosCoinContractProtoMsg;
};
