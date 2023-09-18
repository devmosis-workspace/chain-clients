import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveAmino, IncentiveSDKType, GasMeter, GasMeterAmino, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryIncentivesRequestProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryIncentivesRequest";
    value: Uint8Array;
}
/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryIncentivesRequestAminoMsg {
    type: "/evmos.incentives.v1.QueryIncentivesRequest";
    value: QueryIncentivesRequestAmino;
}
/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponse {
    /** incentives is a slice of all incentives */
    incentives: Incentive[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryIncentivesResponseProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryIncentivesResponse";
    value: Uint8Array;
}
/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponseAmino {
    /** incentives is a slice of all incentives */
    incentives: IncentiveAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryIncentivesResponseAminoMsg {
    type: "/evmos.incentives.v1.QueryIncentivesResponse";
    value: QueryIncentivesResponseAmino;
}
/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponseSDKType {
    incentives: IncentiveSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequest {
    /** contract is the hex contract address of a incentivized smart contract */
    contract: string;
}
export interface QueryIncentiveRequestProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryIncentiveRequest";
    value: Uint8Array;
}
/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequestAmino {
    /** contract is the hex contract address of a incentivized smart contract */
    contract: string;
}
export interface QueryIncentiveRequestAminoMsg {
    type: "/evmos.incentives.v1.QueryIncentiveRequest";
    value: QueryIncentiveRequestAmino;
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
    incentive: Incentive;
}
export interface QueryIncentiveResponseProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryIncentiveResponse";
    value: Uint8Array;
}
/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponseAmino {
    /** incentive is the returned incentive for the queried contract */
    incentive?: IncentiveAmino;
}
export interface QueryIncentiveResponseAminoMsg {
    type: "/evmos.incentives.v1.QueryIncentiveResponse";
    value: QueryIncentiveResponseAmino;
}
/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponseSDKType {
    incentive: IncentiveSDKType;
}
/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequest {
    /** contract is the hex contract address of a incentivized smart contract */
    contract: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryGasMetersRequestProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryGasMetersRequest";
    value: Uint8Array;
}
/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequestAmino {
    /** contract is the hex contract address of a incentivized smart contract */
    contract: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGasMetersRequestAminoMsg {
    type: "/evmos.incentives.v1.QueryGasMetersRequest";
    value: QueryGasMetersRequestAmino;
}
/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequestSDKType {
    contract: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponse {
    /** gas_meters is a slice of the gas meters for an incentivized smart contract */
    gasMeters: GasMeter[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryGasMetersResponseProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryGasMetersResponse";
    value: Uint8Array;
}
/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponseAmino {
    /** gas_meters is a slice of the gas meters for an incentivized smart contract */
    gas_meters: GasMeterAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGasMetersResponseAminoMsg {
    type: "/evmos.incentives.v1.QueryGasMetersResponse";
    value: QueryGasMetersResponseAmino;
}
/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponseSDKType {
    gas_meters: GasMeterSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequest {
    /** contract is the hex contract address of a contract */
    contract: string;
    /** participant is the hex address of a user */
    participant: string;
}
export interface QueryGasMeterRequestProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryGasMeterRequest";
    value: Uint8Array;
}
/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequestAmino {
    /** contract is the hex contract address of a contract */
    contract: string;
    /** participant is the hex address of a user */
    participant: string;
}
export interface QueryGasMeterRequestAminoMsg {
    type: "/evmos.incentives.v1.QueryGasMeterRequest";
    value: QueryGasMeterRequestAmino;
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
    gasMeter: bigint;
}
export interface QueryGasMeterResponseProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryGasMeterResponse";
    value: Uint8Array;
}
/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponseAmino {
    /** gas_meter is a gas meter for one participant on an incentivized smart contract */
    gas_meter: string;
}
export interface QueryGasMeterResponseAminoMsg {
    type: "/evmos.incentives.v1.QueryGasMeterResponse";
    value: QueryGasMeterResponseAmino;
}
/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponseSDKType {
    gas_meter: bigint;
}
/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryAllocationMetersRequestProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryAllocationMetersRequest";
    value: Uint8Array;
}
/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAllocationMetersRequestAminoMsg {
    type: "/evmos.incentives.v1.QueryAllocationMetersRequest";
    value: QueryAllocationMetersRequestAmino;
}
/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponse {
    /** allocation_meters is a slice of all allocations */
    allocationMeters: DecCoin[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryAllocationMetersResponseProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryAllocationMetersResponse";
    value: Uint8Array;
}
/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponseAmino {
    /** allocation_meters is a slice of all allocations */
    allocation_meters: DecCoinAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllocationMetersResponseAminoMsg {
    type: "/evmos.incentives.v1.QueryAllocationMetersResponse";
    value: QueryAllocationMetersResponseAmino;
}
/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponseSDKType {
    allocation_meters: DecCoinSDKType[];
    pagination: PageResponseSDKType;
}
/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequest {
    /** denom is the coin denom to query an allocation meter for. */
    denom: string;
}
export interface QueryAllocationMeterRequestProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryAllocationMeterRequest";
    value: Uint8Array;
}
/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequestAmino {
    /** denom is the coin denom to query an allocation meter for. */
    denom: string;
}
export interface QueryAllocationMeterRequestAminoMsg {
    type: "/evmos.incentives.v1.QueryAllocationMeterRequest";
    value: QueryAllocationMeterRequestAmino;
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
    allocationMeter: DecCoin;
}
export interface QueryAllocationMeterResponseProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryAllocationMeterResponse";
    value: Uint8Array;
}
/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponseAmino {
    /** allocation_meter defines the allocation of the queried denom */
    allocation_meter?: DecCoinAmino;
}
export interface QueryAllocationMeterResponseAminoMsg {
    type: "/evmos.incentives.v1.QueryAllocationMeterResponse";
    value: QueryAllocationMeterResponseAmino;
}
/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponseSDKType {
    allocation_meter: DecCoinSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/evmos.incentives.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
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
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/evmos.incentives.v1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseAmino {
    /** params are the incentives module parameters */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/evmos.incentives.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryIncentivesRequest: {
    typeUrl: string;
    encode(message: QueryIncentivesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIncentivesRequest;
    fromPartial(object: Partial<QueryIncentivesRequest>): QueryIncentivesRequest;
    fromAmino(object: QueryIncentivesRequestAmino): QueryIncentivesRequest;
    toAmino(message: QueryIncentivesRequest): QueryIncentivesRequestAmino;
    fromAminoMsg(object: QueryIncentivesRequestAminoMsg): QueryIncentivesRequest;
    fromProtoMsg(message: QueryIncentivesRequestProtoMsg): QueryIncentivesRequest;
    toProto(message: QueryIncentivesRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivesRequest): QueryIncentivesRequestProtoMsg;
};
export declare const QueryIncentivesResponse: {
    typeUrl: string;
    encode(message: QueryIncentivesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIncentivesResponse;
    fromPartial(object: Partial<QueryIncentivesResponse>): QueryIncentivesResponse;
    fromAmino(object: QueryIncentivesResponseAmino): QueryIncentivesResponse;
    toAmino(message: QueryIncentivesResponse): QueryIncentivesResponseAmino;
    fromAminoMsg(object: QueryIncentivesResponseAminoMsg): QueryIncentivesResponse;
    fromProtoMsg(message: QueryIncentivesResponseProtoMsg): QueryIncentivesResponse;
    toProto(message: QueryIncentivesResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivesResponse): QueryIncentivesResponseProtoMsg;
};
export declare const QueryIncentiveRequest: {
    typeUrl: string;
    encode(message: QueryIncentiveRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIncentiveRequest;
    fromPartial(object: Partial<QueryIncentiveRequest>): QueryIncentiveRequest;
    fromAmino(object: QueryIncentiveRequestAmino): QueryIncentiveRequest;
    toAmino(message: QueryIncentiveRequest): QueryIncentiveRequestAmino;
    fromAminoMsg(object: QueryIncentiveRequestAminoMsg): QueryIncentiveRequest;
    fromProtoMsg(message: QueryIncentiveRequestProtoMsg): QueryIncentiveRequest;
    toProto(message: QueryIncentiveRequest): Uint8Array;
    toProtoMsg(message: QueryIncentiveRequest): QueryIncentiveRequestProtoMsg;
};
export declare const QueryIncentiveResponse: {
    typeUrl: string;
    encode(message: QueryIncentiveResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIncentiveResponse;
    fromPartial(object: Partial<QueryIncentiveResponse>): QueryIncentiveResponse;
    fromAmino(object: QueryIncentiveResponseAmino): QueryIncentiveResponse;
    toAmino(message: QueryIncentiveResponse): QueryIncentiveResponseAmino;
    fromAminoMsg(object: QueryIncentiveResponseAminoMsg): QueryIncentiveResponse;
    fromProtoMsg(message: QueryIncentiveResponseProtoMsg): QueryIncentiveResponse;
    toProto(message: QueryIncentiveResponse): Uint8Array;
    toProtoMsg(message: QueryIncentiveResponse): QueryIncentiveResponseProtoMsg;
};
export declare const QueryGasMetersRequest: {
    typeUrl: string;
    encode(message: QueryGasMetersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGasMetersRequest;
    fromPartial(object: Partial<QueryGasMetersRequest>): QueryGasMetersRequest;
    fromAmino(object: QueryGasMetersRequestAmino): QueryGasMetersRequest;
    toAmino(message: QueryGasMetersRequest): QueryGasMetersRequestAmino;
    fromAminoMsg(object: QueryGasMetersRequestAminoMsg): QueryGasMetersRequest;
    fromProtoMsg(message: QueryGasMetersRequestProtoMsg): QueryGasMetersRequest;
    toProto(message: QueryGasMetersRequest): Uint8Array;
    toProtoMsg(message: QueryGasMetersRequest): QueryGasMetersRequestProtoMsg;
};
export declare const QueryGasMetersResponse: {
    typeUrl: string;
    encode(message: QueryGasMetersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGasMetersResponse;
    fromPartial(object: Partial<QueryGasMetersResponse>): QueryGasMetersResponse;
    fromAmino(object: QueryGasMetersResponseAmino): QueryGasMetersResponse;
    toAmino(message: QueryGasMetersResponse): QueryGasMetersResponseAmino;
    fromAminoMsg(object: QueryGasMetersResponseAminoMsg): QueryGasMetersResponse;
    fromProtoMsg(message: QueryGasMetersResponseProtoMsg): QueryGasMetersResponse;
    toProto(message: QueryGasMetersResponse): Uint8Array;
    toProtoMsg(message: QueryGasMetersResponse): QueryGasMetersResponseProtoMsg;
};
export declare const QueryGasMeterRequest: {
    typeUrl: string;
    encode(message: QueryGasMeterRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGasMeterRequest;
    fromPartial(object: Partial<QueryGasMeterRequest>): QueryGasMeterRequest;
    fromAmino(object: QueryGasMeterRequestAmino): QueryGasMeterRequest;
    toAmino(message: QueryGasMeterRequest): QueryGasMeterRequestAmino;
    fromAminoMsg(object: QueryGasMeterRequestAminoMsg): QueryGasMeterRequest;
    fromProtoMsg(message: QueryGasMeterRequestProtoMsg): QueryGasMeterRequest;
    toProto(message: QueryGasMeterRequest): Uint8Array;
    toProtoMsg(message: QueryGasMeterRequest): QueryGasMeterRequestProtoMsg;
};
export declare const QueryGasMeterResponse: {
    typeUrl: string;
    encode(message: QueryGasMeterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGasMeterResponse;
    fromPartial(object: Partial<QueryGasMeterResponse>): QueryGasMeterResponse;
    fromAmino(object: QueryGasMeterResponseAmino): QueryGasMeterResponse;
    toAmino(message: QueryGasMeterResponse): QueryGasMeterResponseAmino;
    fromAminoMsg(object: QueryGasMeterResponseAminoMsg): QueryGasMeterResponse;
    fromProtoMsg(message: QueryGasMeterResponseProtoMsg): QueryGasMeterResponse;
    toProto(message: QueryGasMeterResponse): Uint8Array;
    toProtoMsg(message: QueryGasMeterResponse): QueryGasMeterResponseProtoMsg;
};
export declare const QueryAllocationMetersRequest: {
    typeUrl: string;
    encode(message: QueryAllocationMetersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllocationMetersRequest;
    fromPartial(object: Partial<QueryAllocationMetersRequest>): QueryAllocationMetersRequest;
    fromAmino(object: QueryAllocationMetersRequestAmino): QueryAllocationMetersRequest;
    toAmino(message: QueryAllocationMetersRequest): QueryAllocationMetersRequestAmino;
    fromAminoMsg(object: QueryAllocationMetersRequestAminoMsg): QueryAllocationMetersRequest;
    fromProtoMsg(message: QueryAllocationMetersRequestProtoMsg): QueryAllocationMetersRequest;
    toProto(message: QueryAllocationMetersRequest): Uint8Array;
    toProtoMsg(message: QueryAllocationMetersRequest): QueryAllocationMetersRequestProtoMsg;
};
export declare const QueryAllocationMetersResponse: {
    typeUrl: string;
    encode(message: QueryAllocationMetersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllocationMetersResponse;
    fromPartial(object: Partial<QueryAllocationMetersResponse>): QueryAllocationMetersResponse;
    fromAmino(object: QueryAllocationMetersResponseAmino): QueryAllocationMetersResponse;
    toAmino(message: QueryAllocationMetersResponse): QueryAllocationMetersResponseAmino;
    fromAminoMsg(object: QueryAllocationMetersResponseAminoMsg): QueryAllocationMetersResponse;
    fromProtoMsg(message: QueryAllocationMetersResponseProtoMsg): QueryAllocationMetersResponse;
    toProto(message: QueryAllocationMetersResponse): Uint8Array;
    toProtoMsg(message: QueryAllocationMetersResponse): QueryAllocationMetersResponseProtoMsg;
};
export declare const QueryAllocationMeterRequest: {
    typeUrl: string;
    encode(message: QueryAllocationMeterRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllocationMeterRequest;
    fromPartial(object: Partial<QueryAllocationMeterRequest>): QueryAllocationMeterRequest;
    fromAmino(object: QueryAllocationMeterRequestAmino): QueryAllocationMeterRequest;
    toAmino(message: QueryAllocationMeterRequest): QueryAllocationMeterRequestAmino;
    fromAminoMsg(object: QueryAllocationMeterRequestAminoMsg): QueryAllocationMeterRequest;
    fromProtoMsg(message: QueryAllocationMeterRequestProtoMsg): QueryAllocationMeterRequest;
    toProto(message: QueryAllocationMeterRequest): Uint8Array;
    toProtoMsg(message: QueryAllocationMeterRequest): QueryAllocationMeterRequestProtoMsg;
};
export declare const QueryAllocationMeterResponse: {
    typeUrl: string;
    encode(message: QueryAllocationMeterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllocationMeterResponse;
    fromPartial(object: Partial<QueryAllocationMeterResponse>): QueryAllocationMeterResponse;
    fromAmino(object: QueryAllocationMeterResponseAmino): QueryAllocationMeterResponse;
    toAmino(message: QueryAllocationMeterResponse): QueryAllocationMeterResponseAmino;
    fromAminoMsg(object: QueryAllocationMeterResponseAminoMsg): QueryAllocationMeterResponse;
    fromProtoMsg(message: QueryAllocationMeterResponseProtoMsg): QueryAllocationMeterResponse;
    toProto(message: QueryAllocationMeterResponse): Uint8Array;
    toProtoMsg(message: QueryAllocationMeterResponse): QueryAllocationMeterResponseProtoMsg;
};
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
