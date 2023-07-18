import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StrategyType } from "./strategy";
import { VaultShare, VaultShareSDKType } from "./vault";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponse {
    /** params represents the earn module parameters */
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequest {
}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequestSDKType {
}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponse {
    /** vaults represents the earn module vaults */
    vaults: VaultResponse[];
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
/** QueryVaultRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultRequestSDKType {
    denom: string;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponse {
    /** vault represents the queried earn module vault */
    vault?: VaultResponse;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponseSDKType {
    vault?: VaultResponseSDKType;
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
    pagination?: PageRequest;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    depositor: string;
    denom: string;
    value_in_staked_tokens: boolean;
    pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits returns the deposits matching the requested parameters */
    deposits: DepositResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    deposits: DepositResponseSDKType[];
    pagination?: PageResponseSDKType;
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
/** DepositResponse defines a deposit query response type. */
export interface DepositResponseSDKType {
    depositor: string;
    shares: VaultShareSDKType[];
    value: CoinSDKType[];
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequest {
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestSDKType {
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponse {
    /** Height is the block height at which these totals apply */
    height: Long;
    /** Result is a list of coins supplied to earn */
    result: Coin[];
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseSDKType {
    height: Long;
    result: CoinSDKType[];
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
export declare const QueryVaultsRequest: {
    encode(_: QueryVaultsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryVaultsRequest;
    fromPartial(_: Partial<QueryVaultsRequest>): QueryVaultsRequest;
};
export declare const QueryVaultsResponse: {
    encode(message: QueryVaultsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryVaultsResponse;
    fromPartial(object: Partial<QueryVaultsResponse>): QueryVaultsResponse;
};
export declare const QueryVaultRequest: {
    encode(message: QueryVaultRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryVaultRequest;
    fromPartial(object: Partial<QueryVaultRequest>): QueryVaultRequest;
};
export declare const QueryVaultResponse: {
    encode(message: QueryVaultResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryVaultResponse;
    fromPartial(object: Partial<QueryVaultResponse>): QueryVaultResponse;
};
export declare const VaultResponse: {
    encode(message: VaultResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VaultResponse;
    fromPartial(object: Partial<VaultResponse>): VaultResponse;
};
export declare const QueryDepositsRequest: {
    encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDepositsRequest;
    fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDepositsResponse;
    fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse;
};
export declare const DepositResponse: {
    encode(message: DepositResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DepositResponse;
    fromPartial(object: Partial<DepositResponse>): DepositResponse;
};
export declare const QueryTotalSupplyRequest: {
    encode(_: QueryTotalSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTotalSupplyRequest;
    fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
};
export declare const QueryTotalSupplyResponse: {
    encode(message: QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalSupplyResponse;
    fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
};
