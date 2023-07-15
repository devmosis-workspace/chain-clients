import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** =============================== ContractInfoByPoolId */
export interface ParamsRequest {
}
/** =============================== ContractInfoByPoolId */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** =============================== Pools */
export interface PoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** =============================== Pools */
export interface PoolsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface PoolsResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface PoolsResponseSDKType {
    pools: AnySDKType[];
    pagination?: PageResponseSDKType;
}
/** =============================== ContractInfoByPoolId */
export interface ContractInfoByPoolIdRequest {
    /** pool_id is the pool id of the requested pool. */
    poolId: Long;
}
/** =============================== ContractInfoByPoolId */
export interface ContractInfoByPoolIdRequestSDKType {
    pool_id: Long;
}
export interface ContractInfoByPoolIdResponse {
    /**
     * contract_address is the pool address and contract address
     * of the requested pool id.
     */
    contractAddress: string;
    /** code_id is the code id of the requested pool id. */
    codeId: Long;
}
export interface ContractInfoByPoolIdResponseSDKType {
    contract_address: string;
    code_id: Long;
}
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
};
export declare const PoolsRequest: {
    encode(message: PoolsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolsRequest;
    fromPartial(object: Partial<PoolsRequest>): PoolsRequest;
};
export declare const PoolsResponse: {
    encode(message: PoolsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolsResponse;
    fromPartial(object: Partial<PoolsResponse>): PoolsResponse;
};
export declare const ContractInfoByPoolIdRequest: {
    encode(message: ContractInfoByPoolIdRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractInfoByPoolIdRequest;
    fromPartial(object: Partial<ContractInfoByPoolIdRequest>): ContractInfoByPoolIdRequest;
};
export declare const ContractInfoByPoolIdResponse: {
    encode(message: ContractInfoByPoolIdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractInfoByPoolIdResponse;
    fromPartial(object: Partial<ContractInfoByPoolIdResponse>): ContractInfoByPoolIdResponse;
};
