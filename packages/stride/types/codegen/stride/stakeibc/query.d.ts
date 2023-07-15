import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Validator, ValidatorSDKType } from "./validator";
import { HostZone, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerSDKType } from "./epoch_tracker";
import { AddressUnbonding, AddressUnbondingSDKType } from "./address_unbonding";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequest {
    owner: string;
    connectionId: string;
}
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequestSDKType {
    owner: string;
    connection_id: string;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponse {
    interchainAccountAddress: string;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponseSDKType {
    interchain_account_address: string;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryGetValidatorsRequest {
    chainId: string;
}
export interface QueryGetValidatorsRequestSDKType {
    chain_id: string;
}
export interface QueryGetValidatorsResponse {
    validators: Validator[];
}
export interface QueryGetValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
}
export interface QueryGetHostZoneRequest {
    chainId: string;
}
export interface QueryGetHostZoneRequestSDKType {
    chain_id: string;
}
export interface QueryGetHostZoneResponse {
    hostZone?: HostZone;
}
export interface QueryGetHostZoneResponseSDKType {
    host_zone?: HostZoneSDKType;
}
export interface QueryAllHostZoneRequest {
    pagination?: PageRequest;
}
export interface QueryAllHostZoneRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllHostZoneResponse {
    hostZone: HostZone[];
    pagination?: PageResponse;
}
export interface QueryAllHostZoneResponseSDKType {
    host_zone: HostZoneSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryModuleAddressRequest {
    name: string;
}
export interface QueryModuleAddressRequestSDKType {
    name: string;
}
export interface QueryModuleAddressResponse {
    addr: string;
}
export interface QueryModuleAddressResponseSDKType {
    addr: string;
}
export interface QueryGetEpochTrackerRequest {
    epochIdentifier: string;
}
export interface QueryGetEpochTrackerRequestSDKType {
    epoch_identifier: string;
}
export interface QueryGetEpochTrackerResponse {
    epochTracker?: EpochTracker;
}
export interface QueryGetEpochTrackerResponseSDKType {
    epoch_tracker?: EpochTrackerSDKType;
}
export interface QueryAllEpochTrackerRequest {
}
export interface QueryAllEpochTrackerRequestSDKType {
}
export interface QueryAllEpochTrackerResponse {
    epochTracker: EpochTracker[];
}
export interface QueryAllEpochTrackerResponseSDKType {
    epoch_tracker: EpochTrackerSDKType[];
}
export interface QueryGetNextPacketSequenceRequest {
    channelId: string;
    portId: string;
}
export interface QueryGetNextPacketSequenceRequestSDKType {
    channel_id: string;
    port_id: string;
}
export interface QueryGetNextPacketSequenceResponse {
    sequence: Long;
}
export interface QueryGetNextPacketSequenceResponseSDKType {
    sequence: Long;
}
export interface QueryAddressUnbondings {
    address: string;
}
export interface QueryAddressUnbondingsSDKType {
    address: string;
}
export interface QueryAddressUnbondingsResponse {
    addressUnbondings: AddressUnbonding[];
}
export interface QueryAddressUnbondingsResponseSDKType {
    address_unbondings: AddressUnbondingSDKType[];
}
export declare const QueryInterchainAccountFromAddressRequest: {
    encode(message: QueryInterchainAccountFromAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountFromAddressRequest;
    fromPartial(object: Partial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest;
};
export declare const QueryInterchainAccountFromAddressResponse: {
    encode(message: QueryInterchainAccountFromAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountFromAddressResponse;
    fromPartial(object: Partial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse;
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
export declare const QueryGetValidatorsRequest: {
    encode(message: QueryGetValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetValidatorsRequest;
    fromPartial(object: Partial<QueryGetValidatorsRequest>): QueryGetValidatorsRequest;
};
export declare const QueryGetValidatorsResponse: {
    encode(message: QueryGetValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetValidatorsResponse;
    fromPartial(object: Partial<QueryGetValidatorsResponse>): QueryGetValidatorsResponse;
};
export declare const QueryGetHostZoneRequest: {
    encode(message: QueryGetHostZoneRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetHostZoneRequest;
    fromPartial(object: Partial<QueryGetHostZoneRequest>): QueryGetHostZoneRequest;
};
export declare const QueryGetHostZoneResponse: {
    encode(message: QueryGetHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetHostZoneResponse;
    fromPartial(object: Partial<QueryGetHostZoneResponse>): QueryGetHostZoneResponse;
};
export declare const QueryAllHostZoneRequest: {
    encode(message: QueryAllHostZoneRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllHostZoneRequest;
    fromPartial(object: Partial<QueryAllHostZoneRequest>): QueryAllHostZoneRequest;
};
export declare const QueryAllHostZoneResponse: {
    encode(message: QueryAllHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllHostZoneResponse;
    fromPartial(object: Partial<QueryAllHostZoneResponse>): QueryAllHostZoneResponse;
};
export declare const QueryModuleAddressRequest: {
    encode(message: QueryModuleAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryModuleAddressRequest;
    fromPartial(object: Partial<QueryModuleAddressRequest>): QueryModuleAddressRequest;
};
export declare const QueryModuleAddressResponse: {
    encode(message: QueryModuleAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryModuleAddressResponse;
    fromPartial(object: Partial<QueryModuleAddressResponse>): QueryModuleAddressResponse;
};
export declare const QueryGetEpochTrackerRequest: {
    encode(message: QueryGetEpochTrackerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetEpochTrackerRequest;
    fromPartial(object: Partial<QueryGetEpochTrackerRequest>): QueryGetEpochTrackerRequest;
};
export declare const QueryGetEpochTrackerResponse: {
    encode(message: QueryGetEpochTrackerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetEpochTrackerResponse;
    fromPartial(object: Partial<QueryGetEpochTrackerResponse>): QueryGetEpochTrackerResponse;
};
export declare const QueryAllEpochTrackerRequest: {
    encode(_: QueryAllEpochTrackerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAllEpochTrackerRequest;
    fromPartial(_: Partial<QueryAllEpochTrackerRequest>): QueryAllEpochTrackerRequest;
};
export declare const QueryAllEpochTrackerResponse: {
    encode(message: QueryAllEpochTrackerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllEpochTrackerResponse;
    fromPartial(object: Partial<QueryAllEpochTrackerResponse>): QueryAllEpochTrackerResponse;
};
export declare const QueryGetNextPacketSequenceRequest: {
    encode(message: QueryGetNextPacketSequenceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetNextPacketSequenceRequest;
    fromPartial(object: Partial<QueryGetNextPacketSequenceRequest>): QueryGetNextPacketSequenceRequest;
};
export declare const QueryGetNextPacketSequenceResponse: {
    encode(message: QueryGetNextPacketSequenceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetNextPacketSequenceResponse;
    fromPartial(object: Partial<QueryGetNextPacketSequenceResponse>): QueryGetNextPacketSequenceResponse;
};
export declare const QueryAddressUnbondings: {
    encode(message: QueryAddressUnbondings, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAddressUnbondings;
    fromPartial(object: Partial<QueryAddressUnbondings>): QueryAddressUnbondings;
};
export declare const QueryAddressUnbondingsResponse: {
    encode(message: QueryAddressUnbondingsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAddressUnbondingsResponse;
    fromPartial(object: Partial<QueryAddressUnbondingsResponse>): QueryAddressUnbondingsResponse;
};
