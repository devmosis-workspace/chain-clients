import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponse {
    /** incentives is a slice of all incentives */
    incentives: Incentive[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponseSDKType {
    incentives: IncentiveSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequest {
    /** contract is the hex contract address of a incentivized smart contract */
    contract: string;
}
/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequestSDKType {
    contract: string;
}
/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponse {
    /** incentive is the returned incentive for the queried contract */
    incentive?: Incentive;
}
/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponseSDKType {
    incentive?: IncentiveSDKType;
}
/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequest {
    /** contract is the hex contract address of a incentivized smart contract */
    contract: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequestSDKType {
    contract: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponse {
    /** gas_meters is a slice of the gas meters for an incentivized smart contract */
    gasMeters: GasMeter[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponseSDKType {
    gas_meters: GasMeterSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequest {
    /** contract is the hex contract address of a contract */
    contract: string;
    /** participant is the hex address of a user */
    participant: string;
}
/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequestSDKType {
    contract: string;
    participant: string;
}
/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponse {
    /** gas_meter is a gas meter for one participant on an incentivized smart contract */
    gasMeter: Long;
}
/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponseSDKType {
    gas_meter: Long;
}
/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponse {
    /** allocation_meters is a slice of all allocations */
    allocationMeters: DecCoin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponseSDKType {
    allocation_meters: DecCoinSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequest {
    /** denom is the coin denom to query an allocation meter for. */
    denom: string;
}
/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequestSDKType {
    denom: string;
}
/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponse {
    /** allocation_meter defines the allocation of the queried denom */
    allocationMeter?: DecCoin;
}
/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponseSDKType {
    allocation_meter?: DecCoinSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
    /** params are the incentives module parameters */
    params?: Params;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryIncentivesRequest: {
    encode(message: QueryIncentivesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentivesRequest;
    fromPartial(object: Partial<QueryIncentivesRequest>): QueryIncentivesRequest;
};
export declare const QueryIncentivesResponse: {
    encode(message: QueryIncentivesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentivesResponse;
    fromPartial(object: Partial<QueryIncentivesResponse>): QueryIncentivesResponse;
};
export declare const QueryIncentiveRequest: {
    encode(message: QueryIncentiveRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentiveRequest;
    fromPartial(object: Partial<QueryIncentiveRequest>): QueryIncentiveRequest;
};
export declare const QueryIncentiveResponse: {
    encode(message: QueryIncentiveResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentiveResponse;
    fromPartial(object: Partial<QueryIncentiveResponse>): QueryIncentiveResponse;
};
export declare const QueryGasMetersRequest: {
    encode(message: QueryGasMetersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGasMetersRequest;
    fromPartial(object: Partial<QueryGasMetersRequest>): QueryGasMetersRequest;
};
export declare const QueryGasMetersResponse: {
    encode(message: QueryGasMetersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGasMetersResponse;
    fromPartial(object: Partial<QueryGasMetersResponse>): QueryGasMetersResponse;
};
export declare const QueryGasMeterRequest: {
    encode(message: QueryGasMeterRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGasMeterRequest;
    fromPartial(object: Partial<QueryGasMeterRequest>): QueryGasMeterRequest;
};
export declare const QueryGasMeterResponse: {
    encode(message: QueryGasMeterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGasMeterResponse;
    fromPartial(object: Partial<QueryGasMeterResponse>): QueryGasMeterResponse;
};
export declare const QueryAllocationMetersRequest: {
    encode(message: QueryAllocationMetersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllocationMetersRequest;
    fromPartial(object: Partial<QueryAllocationMetersRequest>): QueryAllocationMetersRequest;
};
export declare const QueryAllocationMetersResponse: {
    encode(message: QueryAllocationMetersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllocationMetersResponse;
    fromPartial(object: Partial<QueryAllocationMetersResponse>): QueryAllocationMetersResponse;
};
export declare const QueryAllocationMeterRequest: {
    encode(message: QueryAllocationMeterRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllocationMeterRequest;
    fromPartial(object: Partial<QueryAllocationMeterRequest>): QueryAllocationMeterRequest;
};
export declare const QueryAllocationMeterResponse: {
    encode(message: QueryAllocationMeterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllocationMeterResponse;
    fromPartial(object: Partial<QueryAllocationMeterResponse>): QueryAllocationMeterResponse;
};
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
