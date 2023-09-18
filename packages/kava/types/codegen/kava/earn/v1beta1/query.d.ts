import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StrategyType } from "./strategy";
import { VaultShare, VaultShareAmino, VaultShareSDKType } from "./vault";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.earn.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponse {
    /** params represents the earn module parameters */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponseAmino {
    /** params represents the earn module parameters */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/kava.earn.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequest {
}
export interface QueryVaultsRequestProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryVaultsRequest";
    value: Uint8Array;
}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequestAmino {
}
export interface QueryVaultsRequestAminoMsg {
    type: "/kava.earn.v1beta1.QueryVaultsRequest";
    value: QueryVaultsRequestAmino;
}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequestSDKType {
}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponse {
    /** vaults represents the earn module vaults */
    vaults: VaultResponse[];
}
export interface QueryVaultsResponseProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryVaultsResponse";
    value: Uint8Array;
}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponseAmino {
    /** vaults represents the earn module vaults */
    vaults: VaultResponseAmino[];
}
export interface QueryVaultsResponseAminoMsg {
    type: "/kava.earn.v1beta1.QueryVaultsResponse";
    value: QueryVaultsResponseAmino;
}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponseSDKType {
    vaults: VaultResponseSDKType[];
}
/** QueryVaultRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultRequest {
    /** vault filters vault by denom */
    denom: string;
}
export interface QueryVaultRequestProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryVaultRequest";
    value: Uint8Array;
}
/** QueryVaultRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultRequestAmino {
    /** vault filters vault by denom */
    denom: string;
}
export interface QueryVaultRequestAminoMsg {
    type: "/kava.earn.v1beta1.QueryVaultRequest";
    value: QueryVaultRequestAmino;
}
/** QueryVaultRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultRequestSDKType {
    denom: string;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponse {
    /** vault represents the queried earn module vault */
    vault: VaultResponse;
}
export interface QueryVaultResponseProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryVaultResponse";
    value: Uint8Array;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponseAmino {
    /** vault represents the queried earn module vault */
    vault?: VaultResponseAmino;
}
export interface QueryVaultResponseAminoMsg {
    type: "/kava.earn.v1beta1.QueryVaultResponse";
    value: QueryVaultResponseAmino;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponseSDKType {
    vault: VaultResponseSDKType;
}
/** VaultResponse is the response type for a vault. */
export interface VaultResponse {
    /** denom represents the denom of the vault */
    denom: string;
    /** VaultStrategy is the strategy used for this vault. */
    strategies: StrategyType[];
    /**
     * IsPrivateVault is true if the vault only allows depositors contained in
     * AllowedDepositors.
     */
    isPrivateVault: boolean;
    /**
     * AllowedDepositors is a list of addresses that are allowed to deposit to
     * this vault if IsPrivateVault is true. Addresses not contained in this list
     * are not allowed to deposit into this vault. If IsPrivateVault is false,
     * this should be empty and ignored.
     */
    allowedDepositors: string[];
    /** TotalShares is the total amount of shares issued to depositors. */
    totalShares: string;
    /**
     * TotalValue is the total value of denom coins supplied to the vault if the
     * vault were to be liquidated.
     */
    totalValue: string;
}
export interface VaultResponseProtoMsg {
    typeUrl: "/kava.earn.v1beta1.VaultResponse";
    value: Uint8Array;
}
/** VaultResponse is the response type for a vault. */
export interface VaultResponseAmino {
    /** denom represents the denom of the vault */
    denom: string;
    /** VaultStrategy is the strategy used for this vault. */
    strategies: StrategyType[];
    /**
     * IsPrivateVault is true if the vault only allows depositors contained in
     * AllowedDepositors.
     */
    is_private_vault: boolean;
    /**
     * AllowedDepositors is a list of addresses that are allowed to deposit to
     * this vault if IsPrivateVault is true. Addresses not contained in this list
     * are not allowed to deposit into this vault. If IsPrivateVault is false,
     * this should be empty and ignored.
     */
    allowed_depositors: string[];
    /** TotalShares is the total amount of shares issued to depositors. */
    total_shares: string;
    /**
     * TotalValue is the total value of denom coins supplied to the vault if the
     * vault were to be liquidated.
     */
    total_value: string;
}
export interface VaultResponseAminoMsg {
    type: "/kava.earn.v1beta1.VaultResponse";
    value: VaultResponseAmino;
}
/** VaultResponse is the response type for a vault. */
export interface VaultResponseSDKType {
    denom: string;
    strategies: StrategyType[];
    is_private_vault: boolean;
    allowed_depositors: string[];
    total_shares: string;
    total_value: string;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** depositor optionally filters deposits by depositor */
    depositor: string;
    /** denom optionally filters deposits by vault denom */
    denom: string;
    /** respond with vault value in ukava for bkava vaults */
    valueInStakedTokens: boolean;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryDepositsRequest";
    value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
    /** depositor optionally filters deposits by depositor */
    depositor: string;
    /** denom optionally filters deposits by vault denom */
    denom: string;
    /** respond with vault value in ukava for bkava vaults */
    value_in_staked_tokens: boolean;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
    type: "/kava.earn.v1beta1.QueryDepositsRequest";
    value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    depositor: string;
    denom: string;
    value_in_staked_tokens: boolean;
    pagination: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits returns the deposits matching the requested parameters */
    deposits: DepositResponse[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryDepositsResponse";
    value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
    /** deposits returns the deposits matching the requested parameters */
    deposits: DepositResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
    type: "/kava.earn.v1beta1.QueryDepositsResponse";
    value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    deposits: DepositResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** DepositResponse defines a deposit query response type. */
export interface DepositResponse {
    /** depositor represents the owner of the deposit. */
    depositor: string;
    /** Shares represent the issued shares from their corresponding vaults. */
    shares: VaultShare[];
    /**
     * Value represents the total accumulated value of denom coins supplied to
     * vaults. This may be greater than or equal to amount_supplied depending on
     * the strategy.
     */
    value: Coin[];
}
export interface DepositResponseProtoMsg {
    typeUrl: "/kava.earn.v1beta1.DepositResponse";
    value: Uint8Array;
}
/** DepositResponse defines a deposit query response type. */
export interface DepositResponseAmino {
    /** depositor represents the owner of the deposit. */
    depositor: string;
    /** Shares represent the issued shares from their corresponding vaults. */
    shares: VaultShareAmino[];
    /**
     * Value represents the total accumulated value of denom coins supplied to
     * vaults. This may be greater than or equal to amount_supplied depending on
     * the strategy.
     */
    value: CoinAmino[];
}
export interface DepositResponseAminoMsg {
    type: "/kava.earn.v1beta1.DepositResponse";
    value: DepositResponseAmino;
}
/** DepositResponse defines a deposit query response type. */
export interface DepositResponseSDKType {
    depositor: string;
    shares: VaultShareSDKType[];
    value: CoinSDKType[];
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequest {
}
export interface QueryTotalSupplyRequestProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryTotalSupplyRequest";
    value: Uint8Array;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestAmino {
}
export interface QueryTotalSupplyRequestAminoMsg {
    type: "/kava.earn.v1beta1.QueryTotalSupplyRequest";
    value: QueryTotalSupplyRequestAmino;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestSDKType {
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponse {
    /** Height is the block height at which these totals apply */
    height: bigint;
    /** Result is a list of coins supplied to earn */
    result: Coin[];
}
export interface QueryTotalSupplyResponseProtoMsg {
    typeUrl: "/kava.earn.v1beta1.QueryTotalSupplyResponse";
    value: Uint8Array;
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseAmino {
    /** Height is the block height at which these totals apply */
    height: string;
    /** Result is a list of coins supplied to earn */
    result: CoinAmino[];
}
export interface QueryTotalSupplyResponseAminoMsg {
    type: "/kava.earn.v1beta1.QueryTotalSupplyResponse";
    value: QueryTotalSupplyResponseAmino;
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseSDKType {
    height: bigint;
    result: CoinSDKType[];
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
export declare const QueryVaultsRequest: {
    typeUrl: string;
    encode(_: QueryVaultsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryVaultsRequest;
    fromPartial(_: Partial<QueryVaultsRequest>): QueryVaultsRequest;
    fromAmino(_: QueryVaultsRequestAmino): QueryVaultsRequest;
    toAmino(_: QueryVaultsRequest): QueryVaultsRequestAmino;
    fromAminoMsg(object: QueryVaultsRequestAminoMsg): QueryVaultsRequest;
    fromProtoMsg(message: QueryVaultsRequestProtoMsg): QueryVaultsRequest;
    toProto(message: QueryVaultsRequest): Uint8Array;
    toProtoMsg(message: QueryVaultsRequest): QueryVaultsRequestProtoMsg;
};
export declare const QueryVaultsResponse: {
    typeUrl: string;
    encode(message: QueryVaultsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVaultsResponse;
    fromPartial(object: Partial<QueryVaultsResponse>): QueryVaultsResponse;
    fromAmino(object: QueryVaultsResponseAmino): QueryVaultsResponse;
    toAmino(message: QueryVaultsResponse): QueryVaultsResponseAmino;
    fromAminoMsg(object: QueryVaultsResponseAminoMsg): QueryVaultsResponse;
    fromProtoMsg(message: QueryVaultsResponseProtoMsg): QueryVaultsResponse;
    toProto(message: QueryVaultsResponse): Uint8Array;
    toProtoMsg(message: QueryVaultsResponse): QueryVaultsResponseProtoMsg;
};
export declare const QueryVaultRequest: {
    typeUrl: string;
    encode(message: QueryVaultRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVaultRequest;
    fromPartial(object: Partial<QueryVaultRequest>): QueryVaultRequest;
    fromAmino(object: QueryVaultRequestAmino): QueryVaultRequest;
    toAmino(message: QueryVaultRequest): QueryVaultRequestAmino;
    fromAminoMsg(object: QueryVaultRequestAminoMsg): QueryVaultRequest;
    fromProtoMsg(message: QueryVaultRequestProtoMsg): QueryVaultRequest;
    toProto(message: QueryVaultRequest): Uint8Array;
    toProtoMsg(message: QueryVaultRequest): QueryVaultRequestProtoMsg;
};
export declare const QueryVaultResponse: {
    typeUrl: string;
    encode(message: QueryVaultResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVaultResponse;
    fromPartial(object: Partial<QueryVaultResponse>): QueryVaultResponse;
    fromAmino(object: QueryVaultResponseAmino): QueryVaultResponse;
    toAmino(message: QueryVaultResponse): QueryVaultResponseAmino;
    fromAminoMsg(object: QueryVaultResponseAminoMsg): QueryVaultResponse;
    fromProtoMsg(message: QueryVaultResponseProtoMsg): QueryVaultResponse;
    toProto(message: QueryVaultResponse): Uint8Array;
    toProtoMsg(message: QueryVaultResponse): QueryVaultResponseProtoMsg;
};
export declare const VaultResponse: {
    typeUrl: string;
    encode(message: VaultResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VaultResponse;
    fromPartial(object: Partial<VaultResponse>): VaultResponse;
    fromAmino(object: VaultResponseAmino): VaultResponse;
    toAmino(message: VaultResponse): VaultResponseAmino;
    fromAminoMsg(object: VaultResponseAminoMsg): VaultResponse;
    fromProtoMsg(message: VaultResponseProtoMsg): VaultResponse;
    toProto(message: VaultResponse): Uint8Array;
    toProtoMsg(message: VaultResponse): VaultResponseProtoMsg;
};
export declare const QueryDepositsRequest: {
    typeUrl: string;
    encode(message: QueryDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositsRequest;
    fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest;
    fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest;
    toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino;
    fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest;
    fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest;
    toProto(message: QueryDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg;
};
export declare const QueryDepositsResponse: {
    typeUrl: string;
    encode(message: QueryDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositsResponse;
    fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse;
    fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse;
    toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino;
    fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse;
    fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse;
    toProto(message: QueryDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg;
};
export declare const DepositResponse: {
    typeUrl: string;
    encode(message: DepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositResponse;
    fromPartial(object: Partial<DepositResponse>): DepositResponse;
    fromAmino(object: DepositResponseAmino): DepositResponse;
    toAmino(message: DepositResponse): DepositResponseAmino;
    fromAminoMsg(object: DepositResponseAminoMsg): DepositResponse;
    fromProtoMsg(message: DepositResponseProtoMsg): DepositResponse;
    toProto(message: DepositResponse): Uint8Array;
    toProtoMsg(message: DepositResponse): DepositResponseProtoMsg;
};
export declare const QueryTotalSupplyRequest: {
    typeUrl: string;
    encode(_: QueryTotalSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTotalSupplyRequest;
    fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
    fromAmino(_: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest;
    toAmino(_: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino;
    fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest;
    fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest;
    toProto(message: QueryTotalSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg;
};
export declare const QueryTotalSupplyResponse: {
    typeUrl: string;
    encode(message: QueryTotalSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalSupplyResponse;
    fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
    fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse;
    toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino;
    fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse;
    fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse;
    toProto(message: QueryTotalSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg;
};
