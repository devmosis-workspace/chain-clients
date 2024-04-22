import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDAmino, BidIDSDKType } from "./bid";
import { BinaryWriter } from "../../../binary";
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
export declare const Lease_StateAmino: typeof Lease_State;
export declare function lease_StateFromJSON(object: any): Lease_State;
export declare function lease_StateToJSON(object: Lease_State): string;
/** LeaseID stores bid details of lease */
export interface LeaseID {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
    provider: string;
}
export interface LeaseIDProtoMsg {
    typeUrl: "/akash.market.v1beta3.LeaseID";
    value: Uint8Array;
}
/** LeaseID stores bid details of lease */
export interface LeaseIDAmino {
    owner?: string;
    dseq?: string;
    gseq?: number;
    oseq?: number;
    provider?: string;
}
export interface LeaseIDAminoMsg {
    type: "/akash.market.v1beta3.LeaseID";
    value: LeaseIDAmino;
}
/** LeaseID stores bid details of lease */
export interface LeaseIDSDKType {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
    provider: string;
}
/** Lease stores LeaseID, state of lease and price */
export interface Lease {
    leaseId: LeaseID;
    state: Lease_State;
    price: DecCoin;
    createdAt: bigint;
    closedOn: bigint;
}
export interface LeaseProtoMsg {
    typeUrl: "/akash.market.v1beta3.Lease";
    value: Uint8Array;
}
/** Lease stores LeaseID, state of lease and price */
export interface LeaseAmino {
    lease_id?: LeaseIDAmino;
    state?: Lease_State;
    price?: DecCoinAmino;
    created_at?: string;
    closed_on?: string;
}
export interface LeaseAminoMsg {
    type: "/akash.market.v1beta3.Lease";
    value: LeaseAmino;
}
/** Lease stores LeaseID, state of lease and price */
export interface LeaseSDKType {
    lease_id: LeaseIDSDKType;
    state: Lease_State;
    price: DecCoinSDKType;
    created_at: bigint;
    closed_on: bigint;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFilters {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
export interface LeaseFiltersProtoMsg {
    typeUrl: "/akash.market.v1beta3.LeaseFilters";
    value: Uint8Array;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFiltersAmino {
    owner?: string;
    dseq?: string;
    gseq?: number;
    oseq?: number;
    provider?: string;
    state?: string;
}
export interface LeaseFiltersAminoMsg {
    type: "/akash.market.v1beta3.LeaseFilters";
    value: LeaseFiltersAmino;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFiltersSDKType {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
    bidId: BidID;
}
export interface MsgCreateLeaseProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgCreateLease";
    value: Uint8Array;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLeaseAmino {
    bid_id?: BidIDAmino;
}
export interface MsgCreateLeaseAminoMsg {
    type: "/akash.market.v1beta3.MsgCreateLease";
    value: MsgCreateLeaseAmino;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLeaseSDKType {
    bid_id: BidIDSDKType;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {
}
export interface MsgCreateLeaseResponseProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgCreateLeaseResponse";
    value: Uint8Array;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponseAmino {
}
export interface MsgCreateLeaseResponseAminoMsg {
    type: "/akash.market.v1beta3.MsgCreateLeaseResponse";
    value: MsgCreateLeaseResponseAmino;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponseSDKType {
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLease {
    bidId: LeaseID;
}
export interface MsgWithdrawLeaseProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgWithdrawLease";
    value: Uint8Array;
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLeaseAmino {
    bid_id?: LeaseIDAmino;
}
export interface MsgWithdrawLeaseAminoMsg {
    type: "/akash.market.v1beta3.MsgWithdrawLease";
    value: MsgWithdrawLeaseAmino;
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLeaseSDKType {
    bid_id: LeaseIDSDKType;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {
}
export interface MsgWithdrawLeaseResponseProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgWithdrawLeaseResponse";
    value: Uint8Array;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponseAmino {
}
export interface MsgWithdrawLeaseResponseAminoMsg {
    type: "/akash.market.v1beta3.MsgWithdrawLeaseResponse";
    value: MsgWithdrawLeaseResponseAmino;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponseSDKType {
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
    leaseId: LeaseID;
}
export interface MsgCloseLeaseProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgCloseLease";
    value: Uint8Array;
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLeaseAmino {
    lease_id?: LeaseIDAmino;
}
export interface MsgCloseLeaseAminoMsg {
    type: "/akash.market.v1beta3.MsgCloseLease";
    value: MsgCloseLeaseAmino;
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLeaseSDKType {
    lease_id: LeaseIDSDKType;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {
}
export interface MsgCloseLeaseResponseProtoMsg {
    typeUrl: "/akash.market.v1beta3.MsgCloseLeaseResponse";
    value: Uint8Array;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponseAmino {
}
export interface MsgCloseLeaseResponseAminoMsg {
    type: "/akash.market.v1beta3.MsgCloseLeaseResponse";
    value: MsgCloseLeaseResponseAmino;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponseSDKType {
}
export declare const LeaseID: {
    typeUrl: string;
    encode(message: LeaseID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LeaseID;
    fromPartial(object: Partial<LeaseID>): LeaseID;
    fromAmino(object: LeaseIDAmino): LeaseID;
    toAmino(message: LeaseID): LeaseIDAmino;
    fromAminoMsg(object: LeaseIDAminoMsg): LeaseID;
    fromProtoMsg(message: LeaseIDProtoMsg): LeaseID;
    toProto(message: LeaseID): Uint8Array;
    toProtoMsg(message: LeaseID): LeaseIDProtoMsg;
};
export declare const Lease: {
    typeUrl: string;
    encode(message: Lease, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Lease;
    fromPartial(object: Partial<Lease>): Lease;
    fromAmino(object: LeaseAmino): Lease;
    toAmino(message: Lease): LeaseAmino;
    fromAminoMsg(object: LeaseAminoMsg): Lease;
    fromProtoMsg(message: LeaseProtoMsg): Lease;
    toProto(message: Lease): Uint8Array;
    toProtoMsg(message: Lease): LeaseProtoMsg;
};
export declare const LeaseFilters: {
    typeUrl: string;
    encode(message: LeaseFilters, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LeaseFilters;
    fromPartial(object: Partial<LeaseFilters>): LeaseFilters;
    fromAmino(object: LeaseFiltersAmino): LeaseFilters;
    toAmino(message: LeaseFilters): LeaseFiltersAmino;
    fromAminoMsg(object: LeaseFiltersAminoMsg): LeaseFilters;
    fromProtoMsg(message: LeaseFiltersProtoMsg): LeaseFilters;
    toProto(message: LeaseFilters): Uint8Array;
    toProtoMsg(message: LeaseFilters): LeaseFiltersProtoMsg;
};
export declare const MsgCreateLease: {
    typeUrl: string;
    encode(message: MsgCreateLease, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateLease;
    fromPartial(object: Partial<MsgCreateLease>): MsgCreateLease;
    fromAmino(object: MsgCreateLeaseAmino): MsgCreateLease;
    toAmino(message: MsgCreateLease): MsgCreateLeaseAmino;
    fromAminoMsg(object: MsgCreateLeaseAminoMsg): MsgCreateLease;
    fromProtoMsg(message: MsgCreateLeaseProtoMsg): MsgCreateLease;
    toProto(message: MsgCreateLease): Uint8Array;
    toProtoMsg(message: MsgCreateLease): MsgCreateLeaseProtoMsg;
};
export declare const MsgCreateLeaseResponse: {
    typeUrl: string;
    encode(_: MsgCreateLeaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateLeaseResponse;
    fromPartial(_: Partial<MsgCreateLeaseResponse>): MsgCreateLeaseResponse;
    fromAmino(_: MsgCreateLeaseResponseAmino): MsgCreateLeaseResponse;
    toAmino(_: MsgCreateLeaseResponse): MsgCreateLeaseResponseAmino;
    fromAminoMsg(object: MsgCreateLeaseResponseAminoMsg): MsgCreateLeaseResponse;
    fromProtoMsg(message: MsgCreateLeaseResponseProtoMsg): MsgCreateLeaseResponse;
    toProto(message: MsgCreateLeaseResponse): Uint8Array;
    toProtoMsg(message: MsgCreateLeaseResponse): MsgCreateLeaseResponseProtoMsg;
};
export declare const MsgWithdrawLease: {
    typeUrl: string;
    encode(message: MsgWithdrawLease, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawLease;
    fromPartial(object: Partial<MsgWithdrawLease>): MsgWithdrawLease;
    fromAmino(object: MsgWithdrawLeaseAmino): MsgWithdrawLease;
    toAmino(message: MsgWithdrawLease): MsgWithdrawLeaseAmino;
    fromAminoMsg(object: MsgWithdrawLeaseAminoMsg): MsgWithdrawLease;
    fromProtoMsg(message: MsgWithdrawLeaseProtoMsg): MsgWithdrawLease;
    toProto(message: MsgWithdrawLease): Uint8Array;
    toProtoMsg(message: MsgWithdrawLease): MsgWithdrawLeaseProtoMsg;
};
export declare const MsgWithdrawLeaseResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawLeaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawLeaseResponse;
    fromPartial(_: Partial<MsgWithdrawLeaseResponse>): MsgWithdrawLeaseResponse;
    fromAmino(_: MsgWithdrawLeaseResponseAmino): MsgWithdrawLeaseResponse;
    toAmino(_: MsgWithdrawLeaseResponse): MsgWithdrawLeaseResponseAmino;
    fromAminoMsg(object: MsgWithdrawLeaseResponseAminoMsg): MsgWithdrawLeaseResponse;
    fromProtoMsg(message: MsgWithdrawLeaseResponseProtoMsg): MsgWithdrawLeaseResponse;
    toProto(message: MsgWithdrawLeaseResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawLeaseResponse): MsgWithdrawLeaseResponseProtoMsg;
};
export declare const MsgCloseLease: {
    typeUrl: string;
    encode(message: MsgCloseLease, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCloseLease;
    fromPartial(object: Partial<MsgCloseLease>): MsgCloseLease;
    fromAmino(object: MsgCloseLeaseAmino): MsgCloseLease;
    toAmino(message: MsgCloseLease): MsgCloseLeaseAmino;
    fromAminoMsg(object: MsgCloseLeaseAminoMsg): MsgCloseLease;
    fromProtoMsg(message: MsgCloseLeaseProtoMsg): MsgCloseLease;
    toProto(message: MsgCloseLease): Uint8Array;
    toProtoMsg(message: MsgCloseLease): MsgCloseLeaseProtoMsg;
};
export declare const MsgCloseLeaseResponse: {
    typeUrl: string;
    encode(_: MsgCloseLeaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCloseLeaseResponse;
    fromPartial(_: Partial<MsgCloseLeaseResponse>): MsgCloseLeaseResponse;
    fromAmino(_: MsgCloseLeaseResponseAmino): MsgCloseLeaseResponse;
    toAmino(_: MsgCloseLeaseResponse): MsgCloseLeaseResponseAmino;
    fromAminoMsg(object: MsgCloseLeaseResponseAminoMsg): MsgCloseLeaseResponse;
    fromProtoMsg(message: MsgCloseLeaseResponseProtoMsg): MsgCloseLeaseResponse;
    toProto(message: MsgCloseLeaseResponse): Uint8Array;
    toProtoMsg(message: MsgCloseLeaseResponse): MsgCloseLeaseResponseProtoMsg;
};
