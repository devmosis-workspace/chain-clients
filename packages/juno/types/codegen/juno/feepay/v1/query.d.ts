import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FeePayContract, FeePayContractAmino, FeePayContractSDKType } from "./feepay";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** QueryFeePayContract retrieves a single fee pay contract */
export interface QueryFeePayContract {
    /** contract_address defines the address of the fee pay contract */
    contractAddress: string;
}
export interface QueryFeePayContractProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryFeePayContract";
    value: Uint8Array;
}
/** QueryFeePayContract retrieves a single fee pay contract */
export interface QueryFeePayContractAmino {
    /** contract_address defines the address of the fee pay contract */
    contract_address?: string;
}
export interface QueryFeePayContractAminoMsg {
    type: "/juno.feepay.v1.QueryFeePayContract";
    value: QueryFeePayContractAmino;
}
/** QueryFeePayContract retrieves a single fee pay contract */
export interface QueryFeePayContractSDKType {
    contract_address: string;
}
/** QueryFeePayContractResponse defines the response for retrieving a single fee pay contract */
export interface QueryFeePayContractResponse {
    /** contract defines the fee pay contract */
    feePayContract?: FeePayContract;
}
export interface QueryFeePayContractResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryFeePayContractResponse";
    value: Uint8Array;
}
/** QueryFeePayContractResponse defines the response for retrieving a single fee pay contract */
export interface QueryFeePayContractResponseAmino {
    /** contract defines the fee pay contract */
    fee_pay_contract?: FeePayContractAmino;
}
export interface QueryFeePayContractResponseAminoMsg {
    type: "/juno.feepay.v1.QueryFeePayContractResponse";
    value: QueryFeePayContractResponseAmino;
}
/** QueryFeePayContractResponse defines the response for retrieving a single fee pay contract */
export interface QueryFeePayContractResponseSDKType {
    fee_pay_contract?: FeePayContractSDKType;
}
/** Message for querying a list of fee pay contracts */
export interface QueryFeePayContracts {
    /** Pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryFeePayContractsProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryFeePayContracts";
    value: Uint8Array;
}
/** Message for querying a list of fee pay contracts */
export interface QueryFeePayContractsAmino {
    /** Pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryFeePayContractsAminoMsg {
    type: "/juno.feepay.v1.QueryFeePayContracts";
    value: QueryFeePayContractsAmino;
}
/** Message for querying a list of fee pay contracts */
export interface QueryFeePayContractsSDKType {
    pagination?: PageRequestSDKType;
}
/** The response for querying all fee pay contracts */
export interface QueryFeePayContractsResponse {
    /** A slice of all the stored fee pay contracts */
    feePayContracts: FeePayContract[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryFeePayContractsResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryFeePayContractsResponse";
    value: Uint8Array;
}
/** The response for querying all fee pay contracts */
export interface QueryFeePayContractsResponseAmino {
    /** A slice of all the stored fee pay contracts */
    fee_pay_contracts?: FeePayContractAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryFeePayContractsResponseAminoMsg {
    type: "/juno.feepay.v1.QueryFeePayContractsResponse";
    value: QueryFeePayContractsResponseAmino;
}
/** The response for querying all fee pay contracts */
export interface QueryFeePayContractsResponseSDKType {
    fee_pay_contracts: FeePayContractSDKType[];
    pagination?: PageResponseSDKType;
}
/** Message for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUses {
    /** The contract address. */
    contractAddress: string;
    /** The wallet address. */
    walletAddress: string;
}
export interface QueryFeePayContractUsesProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryFeePayContractUses";
    value: Uint8Array;
}
/** Message for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesAmino {
    /** The contract address. */
    contract_address?: string;
    /** The wallet address. */
    wallet_address?: string;
}
export interface QueryFeePayContractUsesAminoMsg {
    type: "/juno.feepay.v1.QueryFeePayContractUses";
    value: QueryFeePayContractUsesAmino;
}
/** Message for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesSDKType {
    contract_address: string;
    wallet_address: string;
}
/** The response for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesResponse {
    /** The number of uses on the fee pay contract by wallet */
    uses: bigint;
}
export interface QueryFeePayContractUsesResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesResponse";
    value: Uint8Array;
}
/** The response for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesResponseAmino {
    /** The number of uses on the fee pay contract by wallet */
    uses?: string;
}
export interface QueryFeePayContractUsesResponseAminoMsg {
    type: "/juno.feepay.v1.QueryFeePayContractUsesResponse";
    value: QueryFeePayContractUsesResponseAmino;
}
/** The response for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesResponseSDKType {
    uses: bigint;
}
/** Message for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligible {
    /** The contract address. */
    contractAddress: string;
    /** The wallet address. */
    walletAddress: string;
}
export interface QueryFeePayWalletIsEligibleProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligible";
    value: Uint8Array;
}
/** Message for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleAmino {
    /** The contract address. */
    contract_address?: string;
    /** The wallet address. */
    wallet_address?: string;
}
export interface QueryFeePayWalletIsEligibleAminoMsg {
    type: "/juno.feepay.v1.QueryFeePayWalletIsEligible";
    value: QueryFeePayWalletIsEligibleAmino;
}
/** Message for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleSDKType {
    contract_address: string;
    wallet_address: string;
}
/** The response for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleResponse {
    /** The eligibility of the wallet for fee pay contract interactions */
    eligible: boolean;
}
export interface QueryFeePayWalletIsEligibleResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse";
    value: Uint8Array;
}
/** The response for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleResponseAmino {
    /** The eligibility of the wallet for fee pay contract interactions */
    eligible?: boolean;
}
export interface QueryFeePayWalletIsEligibleResponseAminoMsg {
    type: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse";
    value: QueryFeePayWalletIsEligibleResponseAmino;
}
/** The response for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleResponseSDKType {
    eligible: boolean;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/juno.feepay.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params is the returned Feepay parameter */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params is the returned Feepay parameter */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/juno.feepay.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryFeePayContract: {
    typeUrl: string;
    encode(message: QueryFeePayContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeePayContract;
    fromPartial(object: Partial<QueryFeePayContract>): QueryFeePayContract;
    fromAmino(object: QueryFeePayContractAmino): QueryFeePayContract;
    toAmino(message: QueryFeePayContract): QueryFeePayContractAmino;
    fromAminoMsg(object: QueryFeePayContractAminoMsg): QueryFeePayContract;
    fromProtoMsg(message: QueryFeePayContractProtoMsg): QueryFeePayContract;
    toProto(message: QueryFeePayContract): Uint8Array;
    toProtoMsg(message: QueryFeePayContract): QueryFeePayContractProtoMsg;
};
export declare const QueryFeePayContractResponse: {
    typeUrl: string;
    encode(message: QueryFeePayContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeePayContractResponse;
    fromPartial(object: Partial<QueryFeePayContractResponse>): QueryFeePayContractResponse;
    fromAmino(object: QueryFeePayContractResponseAmino): QueryFeePayContractResponse;
    toAmino(message: QueryFeePayContractResponse): QueryFeePayContractResponseAmino;
    fromAminoMsg(object: QueryFeePayContractResponseAminoMsg): QueryFeePayContractResponse;
    fromProtoMsg(message: QueryFeePayContractResponseProtoMsg): QueryFeePayContractResponse;
    toProto(message: QueryFeePayContractResponse): Uint8Array;
    toProtoMsg(message: QueryFeePayContractResponse): QueryFeePayContractResponseProtoMsg;
};
export declare const QueryFeePayContracts: {
    typeUrl: string;
    encode(message: QueryFeePayContracts, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeePayContracts;
    fromPartial(object: Partial<QueryFeePayContracts>): QueryFeePayContracts;
    fromAmino(object: QueryFeePayContractsAmino): QueryFeePayContracts;
    toAmino(message: QueryFeePayContracts): QueryFeePayContractsAmino;
    fromAminoMsg(object: QueryFeePayContractsAminoMsg): QueryFeePayContracts;
    fromProtoMsg(message: QueryFeePayContractsProtoMsg): QueryFeePayContracts;
    toProto(message: QueryFeePayContracts): Uint8Array;
    toProtoMsg(message: QueryFeePayContracts): QueryFeePayContractsProtoMsg;
};
export declare const QueryFeePayContractsResponse: {
    typeUrl: string;
    encode(message: QueryFeePayContractsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeePayContractsResponse;
    fromPartial(object: Partial<QueryFeePayContractsResponse>): QueryFeePayContractsResponse;
    fromAmino(object: QueryFeePayContractsResponseAmino): QueryFeePayContractsResponse;
    toAmino(message: QueryFeePayContractsResponse): QueryFeePayContractsResponseAmino;
    fromAminoMsg(object: QueryFeePayContractsResponseAminoMsg): QueryFeePayContractsResponse;
    fromProtoMsg(message: QueryFeePayContractsResponseProtoMsg): QueryFeePayContractsResponse;
    toProto(message: QueryFeePayContractsResponse): Uint8Array;
    toProtoMsg(message: QueryFeePayContractsResponse): QueryFeePayContractsResponseProtoMsg;
};
export declare const QueryFeePayContractUses: {
    typeUrl: string;
    encode(message: QueryFeePayContractUses, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeePayContractUses;
    fromPartial(object: Partial<QueryFeePayContractUses>): QueryFeePayContractUses;
    fromAmino(object: QueryFeePayContractUsesAmino): QueryFeePayContractUses;
    toAmino(message: QueryFeePayContractUses): QueryFeePayContractUsesAmino;
    fromAminoMsg(object: QueryFeePayContractUsesAminoMsg): QueryFeePayContractUses;
    fromProtoMsg(message: QueryFeePayContractUsesProtoMsg): QueryFeePayContractUses;
    toProto(message: QueryFeePayContractUses): Uint8Array;
    toProtoMsg(message: QueryFeePayContractUses): QueryFeePayContractUsesProtoMsg;
};
export declare const QueryFeePayContractUsesResponse: {
    typeUrl: string;
    encode(message: QueryFeePayContractUsesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeePayContractUsesResponse;
    fromPartial(object: Partial<QueryFeePayContractUsesResponse>): QueryFeePayContractUsesResponse;
    fromAmino(object: QueryFeePayContractUsesResponseAmino): QueryFeePayContractUsesResponse;
    toAmino(message: QueryFeePayContractUsesResponse): QueryFeePayContractUsesResponseAmino;
    fromAminoMsg(object: QueryFeePayContractUsesResponseAminoMsg): QueryFeePayContractUsesResponse;
    fromProtoMsg(message: QueryFeePayContractUsesResponseProtoMsg): QueryFeePayContractUsesResponse;
    toProto(message: QueryFeePayContractUsesResponse): Uint8Array;
    toProtoMsg(message: QueryFeePayContractUsesResponse): QueryFeePayContractUsesResponseProtoMsg;
};
export declare const QueryFeePayWalletIsEligible: {
    typeUrl: string;
    encode(message: QueryFeePayWalletIsEligible, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeePayWalletIsEligible;
    fromPartial(object: Partial<QueryFeePayWalletIsEligible>): QueryFeePayWalletIsEligible;
    fromAmino(object: QueryFeePayWalletIsEligibleAmino): QueryFeePayWalletIsEligible;
    toAmino(message: QueryFeePayWalletIsEligible): QueryFeePayWalletIsEligibleAmino;
    fromAminoMsg(object: QueryFeePayWalletIsEligibleAminoMsg): QueryFeePayWalletIsEligible;
    fromProtoMsg(message: QueryFeePayWalletIsEligibleProtoMsg): QueryFeePayWalletIsEligible;
    toProto(message: QueryFeePayWalletIsEligible): Uint8Array;
    toProtoMsg(message: QueryFeePayWalletIsEligible): QueryFeePayWalletIsEligibleProtoMsg;
};
export declare const QueryFeePayWalletIsEligibleResponse: {
    typeUrl: string;
    encode(message: QueryFeePayWalletIsEligibleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeePayWalletIsEligibleResponse;
    fromPartial(object: Partial<QueryFeePayWalletIsEligibleResponse>): QueryFeePayWalletIsEligibleResponse;
    fromAmino(object: QueryFeePayWalletIsEligibleResponseAmino): QueryFeePayWalletIsEligibleResponse;
    toAmino(message: QueryFeePayWalletIsEligibleResponse): QueryFeePayWalletIsEligibleResponseAmino;
    fromAminoMsg(object: QueryFeePayWalletIsEligibleResponseAminoMsg): QueryFeePayWalletIsEligibleResponse;
    fromProtoMsg(message: QueryFeePayWalletIsEligibleResponseProtoMsg): QueryFeePayWalletIsEligibleResponse;
    toProto(message: QueryFeePayWalletIsEligibleResponse): Uint8Array;
    toProtoMsg(message: QueryFeePayWalletIsEligibleResponse): QueryFeePayWalletIsEligibleResponseProtoMsg;
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
