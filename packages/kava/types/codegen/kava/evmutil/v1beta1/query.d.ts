import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/evmutil parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/evmutil parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
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
    pagination?: PageRequest;
}
/** QueryDeployedCosmosCoinContractsRequest defines the request type for Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsRequestSDKType {
    cosmos_denoms: string[];
    pagination?: PageRequestSDKType;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponse {
    /** deployed_cosmos_coin_contracts is a list of cosmos-sdk coin denom and its deployed contract address */
    deployedCosmosCoinContracts: DeployedCosmosCoinContract[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDeployedCosmosCoinContractsResponse defines the response type for the Query/DeployedCosmosCoinContracts method. */
export interface QueryDeployedCosmosCoinContractsResponseSDKType {
    deployed_cosmos_coin_contracts: DeployedCosmosCoinContractSDKType[];
    pagination?: PageResponseSDKType;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContract {
    cosmosDenom: string;
    address: string;
}
/** DeployedCosmosCoinContract defines a deployed token contract to the evm representing a native cosmos-sdk coin */
export interface DeployedCosmosCoinContractSDKType {
    cosmos_denom: string;
    address: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryDeployedCosmosCoinContractsRequest: {
    encode(message: QueryDeployedCosmosCoinContractsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDeployedCosmosCoinContractsRequest;
    fromPartial(object: Partial<QueryDeployedCosmosCoinContractsRequest>): QueryDeployedCosmosCoinContractsRequest;
};
export declare const QueryDeployedCosmosCoinContractsResponse: {
    encode(message: QueryDeployedCosmosCoinContractsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDeployedCosmosCoinContractsResponse;
    fromPartial(object: Partial<QueryDeployedCosmosCoinContractsResponse>): QueryDeployedCosmosCoinContractsResponse;
};
export declare const DeployedCosmosCoinContract: {
    encode(message: DeployedCosmosCoinContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeployedCosmosCoinContract;
    fromPartial(object: Partial<DeployedCosmosCoinContract>): DeployedCosmosCoinContract;
};
