import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ModuleAccount, ModuleAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestSDKType {
}
/** QueryAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponse {
    accounts: ModuleAccount[];
}
/** QueryAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponseSDKType {
    accounts: ModuleAccountSDKType[];
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    denom: string;
    owner: string;
    pagination?: PageRequest;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    denom: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    deposits: DepositResponse[];
    pagination?: PageResponse;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    deposits: DepositResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryUnsyncedDepositsRequest is the request type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsRequest {
    denom: string;
    owner: string;
    pagination?: PageRequest;
}
/** QueryUnsyncedDepositsRequest is the request type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsRequestSDKType {
    denom: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryUnsyncedDepositsResponse is the response type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsResponse {
    deposits: DepositResponse[];
    pagination?: PageResponse;
}
/** QueryUnsyncedDepositsResponse is the response type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsResponseSDKType {
    deposits: DepositResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryTotalDepositedRequest is the request type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedRequest {
    denom: string;
}
/** QueryTotalDepositedRequest is the request type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedRequestSDKType {
    denom: string;
}
/** QueryTotalDepositedResponse is the response type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedResponse {
    suppliedCoins: Coin[];
}
/** QueryTotalDepositedResponse is the response type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedResponseSDKType {
    supplied_coins: CoinSDKType[];
}
/** QueryBorrowsRequest is the request type for the Query/Borrows RPC method. */
export interface QueryBorrowsRequest {
    denom: string;
    owner: string;
    pagination?: PageRequest;
}
/** QueryBorrowsRequest is the request type for the Query/Borrows RPC method. */
export interface QueryBorrowsRequestSDKType {
    denom: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryBorrowsResponse is the response type for the Query/Borrows RPC method. */
export interface QueryBorrowsResponse {
    borrows: BorrowResponse[];
    pagination?: PageResponse;
}
/** QueryBorrowsResponse is the response type for the Query/Borrows RPC method. */
export interface QueryBorrowsResponseSDKType {
    borrows: BorrowResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryUnsyncedBorrowsRequest is the request type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsRequest {
    denom: string;
    owner: string;
    pagination?: PageRequest;
}
/** QueryUnsyncedBorrowsRequest is the request type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsRequestSDKType {
    denom: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryUnsyncedBorrowsResponse is the response type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsResponse {
    borrows: BorrowResponse[];
    pagination?: PageResponse;
}
/** QueryUnsyncedBorrowsResponse is the response type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsResponseSDKType {
    borrows: BorrowResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryTotalBorrowedRequest is the request type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedRequest {
    denom: string;
}
/** QueryTotalBorrowedRequest is the request type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedRequestSDKType {
    denom: string;
}
/** QueryTotalBorrowedResponse is the response type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedResponse {
    borrowedCoins: Coin[];
}
/** QueryTotalBorrowedResponse is the response type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedResponseSDKType {
    borrowed_coins: CoinSDKType[];
}
/** QueryInterestRateRequest is the request type for the Query/InterestRate RPC method. */
export interface QueryInterestRateRequest {
    denom: string;
}
/** QueryInterestRateRequest is the request type for the Query/InterestRate RPC method. */
export interface QueryInterestRateRequestSDKType {
    denom: string;
}
/** QueryInterestRateResponse is the response type for the Query/InterestRate RPC method. */
export interface QueryInterestRateResponse {
    interestRates: MoneyMarketInterestRate[];
}
/** QueryInterestRateResponse is the response type for the Query/InterestRate RPC method. */
export interface QueryInterestRateResponseSDKType {
    interest_rates: MoneyMarketInterestRateSDKType[];
}
/** QueryReservesRequest is the request type for the Query/Reserves RPC method. */
export interface QueryReservesRequest {
    denom: string;
}
/** QueryReservesRequest is the request type for the Query/Reserves RPC method. */
export interface QueryReservesRequestSDKType {
    denom: string;
}
/** QueryReservesResponse is the response type for the Query/Reserves RPC method. */
export interface QueryReservesResponse {
    amount: Coin[];
}
/** QueryReservesResponse is the response type for the Query/Reserves RPC method. */
export interface QueryReservesResponseSDKType {
    amount: CoinSDKType[];
}
/** QueryInterestFactorsRequest is the request type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsRequest {
    denom: string;
}
/** QueryInterestFactorsRequest is the request type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsRequestSDKType {
    denom: string;
}
/** QueryInterestFactorsResponse is the response type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsResponse {
    interestFactors: InterestFactor[];
}
/** QueryInterestFactorsResponse is the response type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsResponseSDKType {
    interest_factors: InterestFactorSDKType[];
}
/** DepositResponse defines an amount of coins deposited into a hard module account. */
export interface DepositResponse {
    depositor: string;
    amount: Coin[];
    index: SupplyInterestFactorResponse[];
}
/** DepositResponse defines an amount of coins deposited into a hard module account. */
export interface DepositResponseSDKType {
    depositor: string;
    amount: CoinSDKType[];
    index: SupplyInterestFactorResponseSDKType[];
}
/** SupplyInterestFactorResponse defines an individual borrow interest factor. */
export interface SupplyInterestFactorResponse {
    denom: string;
    /** sdk.Dec as string */
    value: string;
}
/** SupplyInterestFactorResponse defines an individual borrow interest factor. */
export interface SupplyInterestFactorResponseSDKType {
    denom: string;
    value: string;
}
/** BorrowResponse defines an amount of coins borrowed from a hard module account. */
export interface BorrowResponse {
    borrower: string;
    amount: Coin[];
    index: BorrowInterestFactorResponse[];
}
/** BorrowResponse defines an amount of coins borrowed from a hard module account. */
export interface BorrowResponseSDKType {
    borrower: string;
    amount: CoinSDKType[];
    index: BorrowInterestFactorResponseSDKType[];
}
/** BorrowInterestFactorResponse defines an individual borrow interest factor. */
export interface BorrowInterestFactorResponse {
    denom: string;
    /** sdk.Dec as string */
    value: string;
}
/** BorrowInterestFactorResponse defines an individual borrow interest factor. */
export interface BorrowInterestFactorResponseSDKType {
    denom: string;
    value: string;
}
/** MoneyMarketInterestRate is a unique type returned by interest rate queries */
export interface MoneyMarketInterestRate {
    denom: string;
    /** sdk.Dec as String */
    supplyInterestRate: string;
    /** sdk.Dec as String */
    borrowInterestRate: string;
}
/** MoneyMarketInterestRate is a unique type returned by interest rate queries */
export interface MoneyMarketInterestRateSDKType {
    denom: string;
    supply_interest_rate: string;
    borrow_interest_rate: string;
}
/** InterestFactor is a unique type returned by interest factor queries */
export interface InterestFactor {
    denom: string;
    /** sdk.Dec as String */
    borrowInterestFactor: string;
    /** sdk.Dec as String */
    supplyInterestFactor: string;
}
/** InterestFactor is a unique type returned by interest factor queries */
export interface InterestFactorSDKType {
    denom: string;
    borrow_interest_factor: string;
    supply_interest_factor: string;
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
export declare const QueryAccountsRequest: {
    encode(_: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryAccountsRequest;
    fromPartial(_: Partial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountsResponse;
    fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse;
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
export declare const QueryUnsyncedDepositsRequest: {
    encode(message: QueryUnsyncedDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryUnsyncedDepositsRequest;
    fromPartial(object: Partial<QueryUnsyncedDepositsRequest>): QueryUnsyncedDepositsRequest;
};
export declare const QueryUnsyncedDepositsResponse: {
    encode(message: QueryUnsyncedDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryUnsyncedDepositsResponse;
    fromPartial(object: Partial<QueryUnsyncedDepositsResponse>): QueryUnsyncedDepositsResponse;
};
export declare const QueryTotalDepositedRequest: {
    encode(message: QueryTotalDepositedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalDepositedRequest;
    fromPartial(object: Partial<QueryTotalDepositedRequest>): QueryTotalDepositedRequest;
};
export declare const QueryTotalDepositedResponse: {
    encode(message: QueryTotalDepositedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalDepositedResponse;
    fromPartial(object: Partial<QueryTotalDepositedResponse>): QueryTotalDepositedResponse;
};
export declare const QueryBorrowsRequest: {
    encode(message: QueryBorrowsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBorrowsRequest;
    fromPartial(object: Partial<QueryBorrowsRequest>): QueryBorrowsRequest;
};
export declare const QueryBorrowsResponse: {
    encode(message: QueryBorrowsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBorrowsResponse;
    fromPartial(object: Partial<QueryBorrowsResponse>): QueryBorrowsResponse;
};
export declare const QueryUnsyncedBorrowsRequest: {
    encode(message: QueryUnsyncedBorrowsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryUnsyncedBorrowsRequest;
    fromPartial(object: Partial<QueryUnsyncedBorrowsRequest>): QueryUnsyncedBorrowsRequest;
};
export declare const QueryUnsyncedBorrowsResponse: {
    encode(message: QueryUnsyncedBorrowsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryUnsyncedBorrowsResponse;
    fromPartial(object: Partial<QueryUnsyncedBorrowsResponse>): QueryUnsyncedBorrowsResponse;
};
export declare const QueryTotalBorrowedRequest: {
    encode(message: QueryTotalBorrowedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalBorrowedRequest;
    fromPartial(object: Partial<QueryTotalBorrowedRequest>): QueryTotalBorrowedRequest;
};
export declare const QueryTotalBorrowedResponse: {
    encode(message: QueryTotalBorrowedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalBorrowedResponse;
    fromPartial(object: Partial<QueryTotalBorrowedResponse>): QueryTotalBorrowedResponse;
};
export declare const QueryInterestRateRequest: {
    encode(message: QueryInterestRateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterestRateRequest;
    fromPartial(object: Partial<QueryInterestRateRequest>): QueryInterestRateRequest;
};
export declare const QueryInterestRateResponse: {
    encode(message: QueryInterestRateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterestRateResponse;
    fromPartial(object: Partial<QueryInterestRateResponse>): QueryInterestRateResponse;
};
export declare const QueryReservesRequest: {
    encode(message: QueryReservesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryReservesRequest;
    fromPartial(object: Partial<QueryReservesRequest>): QueryReservesRequest;
};
export declare const QueryReservesResponse: {
    encode(message: QueryReservesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryReservesResponse;
    fromPartial(object: Partial<QueryReservesResponse>): QueryReservesResponse;
};
export declare const QueryInterestFactorsRequest: {
    encode(message: QueryInterestFactorsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterestFactorsRequest;
    fromPartial(object: Partial<QueryInterestFactorsRequest>): QueryInterestFactorsRequest;
};
export declare const QueryInterestFactorsResponse: {
    encode(message: QueryInterestFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterestFactorsResponse;
    fromPartial(object: Partial<QueryInterestFactorsResponse>): QueryInterestFactorsResponse;
};
export declare const DepositResponse: {
    encode(message: DepositResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DepositResponse;
    fromPartial(object: Partial<DepositResponse>): DepositResponse;
};
export declare const SupplyInterestFactorResponse: {
    encode(message: SupplyInterestFactorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SupplyInterestFactorResponse;
    fromPartial(object: Partial<SupplyInterestFactorResponse>): SupplyInterestFactorResponse;
};
export declare const BorrowResponse: {
    encode(message: BorrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BorrowResponse;
    fromPartial(object: Partial<BorrowResponse>): BorrowResponse;
};
export declare const BorrowInterestFactorResponse: {
    encode(message: BorrowInterestFactorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BorrowInterestFactorResponse;
    fromPartial(object: Partial<BorrowInterestFactorResponse>): BorrowInterestFactorResponse;
};
export declare const MoneyMarketInterestRate: {
    encode(message: MoneyMarketInterestRate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MoneyMarketInterestRate;
    fromPartial(object: Partial<MoneyMarketInterestRate>): MoneyMarketInterestRate;
};
export declare const InterestFactor: {
    encode(message: InterestFactor, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InterestFactor;
    fromPartial(object: Partial<InterestFactor>): InterestFactor;
};
