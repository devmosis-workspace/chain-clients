import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType } from "./bid";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** State is an enum which refers to state of lease */
export declare enum Lease_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** active - LeaseActive denotes state for lease active */
    active = 1,
    /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds */
    insufficient_funds = 2,
    /** closed - LeaseClosed denotes state for lease closed */
    closed = 3,
    UNRECOGNIZED = -1
}
export declare const Lease_StateSDKType: typeof Lease_State;
export declare function lease_StateFromJSON(object: any): Lease_State;
export declare function lease_StateToJSON(object: Lease_State): string;
/** LeaseID stores bid details of lease */
export interface LeaseID {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
}
/** LeaseID stores bid details of lease */
export interface LeaseIDSDKType {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
}
/** Lease stores LeaseID, state of lease and price */
export interface Lease {
    leaseId?: LeaseID;
    state: Lease_State;
    price?: DecCoin;
    createdAt: Long;
    closedOn: Long;
}
/** Lease stores LeaseID, state of lease and price */
export interface LeaseSDKType {
    lease_id?: LeaseIDSDKType;
    state: Lease_State;
    price?: DecCoinSDKType;
    created_at: Long;
    closed_on: Long;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFilters {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFiltersSDKType {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
    bidId?: BidID;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLeaseSDKType {
    bid_id?: BidIDSDKType;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponseSDKType {
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLease {
    bidId?: LeaseID;
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLeaseSDKType {
    bid_id?: LeaseIDSDKType;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponseSDKType {
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
    leaseId?: LeaseID;
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLeaseSDKType {
    lease_id?: LeaseIDSDKType;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponseSDKType {
}
export declare const LeaseID: {
    encode(message: LeaseID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LeaseID;
    fromPartial(object: Partial<LeaseID>): LeaseID;
};
export declare const Lease: {
    encode(message: Lease, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Lease;
    fromPartial(object: Partial<Lease>): Lease;
};
export declare const LeaseFilters: {
    encode(message: LeaseFilters, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LeaseFilters;
    fromPartial(object: Partial<LeaseFilters>): LeaseFilters;
};
export declare const MsgCreateLease: {
    encode(message: MsgCreateLease, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateLease;
    fromPartial(object: Partial<MsgCreateLease>): MsgCreateLease;
};
export declare const MsgCreateLeaseResponse: {
    encode(_: MsgCreateLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateLeaseResponse;
    fromPartial(_: Partial<MsgCreateLeaseResponse>): MsgCreateLeaseResponse;
};
export declare const MsgWithdrawLease: {
    encode(message: MsgWithdrawLease, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawLease;
    fromPartial(object: Partial<MsgWithdrawLease>): MsgWithdrawLease;
};
export declare const MsgWithdrawLeaseResponse: {
    encode(_: MsgWithdrawLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWithdrawLeaseResponse;
    fromPartial(_: Partial<MsgWithdrawLeaseResponse>): MsgWithdrawLeaseResponse;
};
export declare const MsgCloseLease: {
    encode(message: MsgCloseLease, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCloseLease;
    fromPartial(object: Partial<MsgCloseLease>): MsgCloseLease;
};
export declare const MsgCloseLeaseResponse: {
    encode(_: MsgCloseLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCloseLeaseResponse;
    fromPartial(_: Partial<MsgCloseLeaseResponse>): MsgCloseLeaseResponse;
};
