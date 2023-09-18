import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ModuleAccount, ModuleAccountAmino, ModuleAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
}
export interface QueryAccountsRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryAccountsRequest";
    value: Uint8Array;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestAmino {
}
export interface QueryAccountsRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryAccountsRequest";
    value: QueryAccountsRequestAmino;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestSDKType {
}
/** QueryAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponse {
    accounts: ModuleAccount[];
}
export interface QueryAccountsResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryAccountsResponse";
    value: Uint8Array;
}
/** QueryAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponseAmino {
    accounts: ModuleAccountAmino[];
}
export interface QueryAccountsResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryAccountsResponse";
    value: QueryAccountsResponseAmino;
}
/** QueryAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponseSDKType {
    accounts: ModuleAccountSDKType[];
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    denom: string;
    owner: string;
    pagination: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryDepositsRequest";
    value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
    denom: string;
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryDepositsRequest";
    value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    denom: string;
    owner: string;
    pagination: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    deposits: DepositResponse[];
    pagination: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryDepositsResponse";
    value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
    deposits: DepositResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryDepositsResponse";
    value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    deposits: DepositResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryUnsyncedDepositsRequest is the request type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsRequest {
    denom: string;
    owner: string;
    pagination: PageRequest;
}
export interface QueryUnsyncedDepositsRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryUnsyncedDepositsRequest";
    value: Uint8Array;
}
/** QueryUnsyncedDepositsRequest is the request type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsRequestAmino {
    denom: string;
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryUnsyncedDepositsRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryUnsyncedDepositsRequest";
    value: QueryUnsyncedDepositsRequestAmino;
}
/** QueryUnsyncedDepositsRequest is the request type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsRequestSDKType {
    denom: string;
    owner: string;
    pagination: PageRequestSDKType;
}
/** QueryUnsyncedDepositsResponse is the response type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsResponse {
    deposits: DepositResponse[];
    pagination: PageResponse;
}
export interface QueryUnsyncedDepositsResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryUnsyncedDepositsResponse";
    value: Uint8Array;
}
/** QueryUnsyncedDepositsResponse is the response type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsResponseAmino {
    deposits: DepositResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryUnsyncedDepositsResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryUnsyncedDepositsResponse";
    value: QueryUnsyncedDepositsResponseAmino;
}
/** QueryUnsyncedDepositsResponse is the response type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsResponseSDKType {
    deposits: DepositResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryTotalDepositedRequest is the request type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedRequest {
    denom: string;
}
export interface QueryTotalDepositedRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryTotalDepositedRequest";
    value: Uint8Array;
}
/** QueryTotalDepositedRequest is the request type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedRequestAmino {
    denom: string;
}
export interface QueryTotalDepositedRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryTotalDepositedRequest";
    value: QueryTotalDepositedRequestAmino;
}
/** QueryTotalDepositedRequest is the request type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedRequestSDKType {
    denom: string;
}
/** QueryTotalDepositedResponse is the response type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedResponse {
    suppliedCoins: Coin[];
}
export interface QueryTotalDepositedResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryTotalDepositedResponse";
    value: Uint8Array;
}
/** QueryTotalDepositedResponse is the response type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedResponseAmino {
    supplied_coins: CoinAmino[];
}
export interface QueryTotalDepositedResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryTotalDepositedResponse";
    value: QueryTotalDepositedResponseAmino;
}
/** QueryTotalDepositedResponse is the response type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedResponseSDKType {
    supplied_coins: CoinSDKType[];
}
/** QueryBorrowsRequest is the request type for the Query/Borrows RPC method. */
export interface QueryBorrowsRequest {
    denom: string;
    owner: string;
    pagination: PageRequest;
}
export interface QueryBorrowsRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryBorrowsRequest";
    value: Uint8Array;
}
/** QueryBorrowsRequest is the request type for the Query/Borrows RPC method. */
export interface QueryBorrowsRequestAmino {
    denom: string;
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryBorrowsRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryBorrowsRequest";
    value: QueryBorrowsRequestAmino;
}
/** QueryBorrowsRequest is the request type for the Query/Borrows RPC method. */
export interface QueryBorrowsRequestSDKType {
    denom: string;
    owner: string;
    pagination: PageRequestSDKType;
}
/** QueryBorrowsResponse is the response type for the Query/Borrows RPC method. */
export interface QueryBorrowsResponse {
    borrows: BorrowResponse[];
    pagination: PageResponse;
}
export interface QueryBorrowsResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryBorrowsResponse";
    value: Uint8Array;
}
/** QueryBorrowsResponse is the response type for the Query/Borrows RPC method. */
export interface QueryBorrowsResponseAmino {
    borrows: BorrowResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryBorrowsResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryBorrowsResponse";
    value: QueryBorrowsResponseAmino;
}
/** QueryBorrowsResponse is the response type for the Query/Borrows RPC method. */
export interface QueryBorrowsResponseSDKType {
    borrows: BorrowResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryUnsyncedBorrowsRequest is the request type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsRequest {
    denom: string;
    owner: string;
    pagination: PageRequest;
}
export interface QueryUnsyncedBorrowsRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryUnsyncedBorrowsRequest";
    value: Uint8Array;
}
/** QueryUnsyncedBorrowsRequest is the request type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsRequestAmino {
    denom: string;
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryUnsyncedBorrowsRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryUnsyncedBorrowsRequest";
    value: QueryUnsyncedBorrowsRequestAmino;
}
/** QueryUnsyncedBorrowsRequest is the request type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsRequestSDKType {
    denom: string;
    owner: string;
    pagination: PageRequestSDKType;
}
/** QueryUnsyncedBorrowsResponse is the response type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsResponse {
    borrows: BorrowResponse[];
    pagination: PageResponse;
}
export interface QueryUnsyncedBorrowsResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryUnsyncedBorrowsResponse";
    value: Uint8Array;
}
/** QueryUnsyncedBorrowsResponse is the response type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsResponseAmino {
    borrows: BorrowResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryUnsyncedBorrowsResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryUnsyncedBorrowsResponse";
    value: QueryUnsyncedBorrowsResponseAmino;
}
/** QueryUnsyncedBorrowsResponse is the response type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsResponseSDKType {
    borrows: BorrowResponseSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryTotalBorrowedRequest is the request type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedRequest {
    denom: string;
}
export interface QueryTotalBorrowedRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryTotalBorrowedRequest";
    value: Uint8Array;
}
/** QueryTotalBorrowedRequest is the request type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedRequestAmino {
    denom: string;
}
export interface QueryTotalBorrowedRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryTotalBorrowedRequest";
    value: QueryTotalBorrowedRequestAmino;
}
/** QueryTotalBorrowedRequest is the request type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedRequestSDKType {
    denom: string;
}
/** QueryTotalBorrowedResponse is the response type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedResponse {
    borrowedCoins: Coin[];
}
export interface QueryTotalBorrowedResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryTotalBorrowedResponse";
    value: Uint8Array;
}
/** QueryTotalBorrowedResponse is the response type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedResponseAmino {
    borrowed_coins: CoinAmino[];
}
export interface QueryTotalBorrowedResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryTotalBorrowedResponse";
    value: QueryTotalBorrowedResponseAmino;
}
/** QueryTotalBorrowedResponse is the response type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedResponseSDKType {
    borrowed_coins: CoinSDKType[];
}
/** QueryInterestRateRequest is the request type for the Query/InterestRate RPC method. */
export interface QueryInterestRateRequest {
    denom: string;
}
export interface QueryInterestRateRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryInterestRateRequest";
    value: Uint8Array;
}
/** QueryInterestRateRequest is the request type for the Query/InterestRate RPC method. */
export interface QueryInterestRateRequestAmino {
    denom: string;
}
export interface QueryInterestRateRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryInterestRateRequest";
    value: QueryInterestRateRequestAmino;
}
/** QueryInterestRateRequest is the request type for the Query/InterestRate RPC method. */
export interface QueryInterestRateRequestSDKType {
    denom: string;
}
/** QueryInterestRateResponse is the response type for the Query/InterestRate RPC method. */
export interface QueryInterestRateResponse {
    interestRates: MoneyMarketInterestRate[];
}
export interface QueryInterestRateResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryInterestRateResponse";
    value: Uint8Array;
}
/** QueryInterestRateResponse is the response type for the Query/InterestRate RPC method. */
export interface QueryInterestRateResponseAmino {
    interest_rates: MoneyMarketInterestRateAmino[];
}
export interface QueryInterestRateResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryInterestRateResponse";
    value: QueryInterestRateResponseAmino;
}
/** QueryInterestRateResponse is the response type for the Query/InterestRate RPC method. */
export interface QueryInterestRateResponseSDKType {
    interest_rates: MoneyMarketInterestRateSDKType[];
}
/** QueryReservesRequest is the request type for the Query/Reserves RPC method. */
export interface QueryReservesRequest {
    denom: string;
}
export interface QueryReservesRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryReservesRequest";
    value: Uint8Array;
}
/** QueryReservesRequest is the request type for the Query/Reserves RPC method. */
export interface QueryReservesRequestAmino {
    denom: string;
}
export interface QueryReservesRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryReservesRequest";
    value: QueryReservesRequestAmino;
}
/** QueryReservesRequest is the request type for the Query/Reserves RPC method. */
export interface QueryReservesRequestSDKType {
    denom: string;
}
/** QueryReservesResponse is the response type for the Query/Reserves RPC method. */
export interface QueryReservesResponse {
    amount: Coin[];
}
export interface QueryReservesResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryReservesResponse";
    value: Uint8Array;
}
/** QueryReservesResponse is the response type for the Query/Reserves RPC method. */
export interface QueryReservesResponseAmino {
    amount: CoinAmino[];
}
export interface QueryReservesResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryReservesResponse";
    value: QueryReservesResponseAmino;
}
/** QueryReservesResponse is the response type for the Query/Reserves RPC method. */
export interface QueryReservesResponseSDKType {
    amount: CoinSDKType[];
}
/** QueryInterestFactorsRequest is the request type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsRequest {
    denom: string;
}
export interface QueryInterestFactorsRequestProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryInterestFactorsRequest";
    value: Uint8Array;
}
/** QueryInterestFactorsRequest is the request type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsRequestAmino {
    denom: string;
}
export interface QueryInterestFactorsRequestAminoMsg {
    type: "/kava.hard.v1beta1.QueryInterestFactorsRequest";
    value: QueryInterestFactorsRequestAmino;
}
/** QueryInterestFactorsRequest is the request type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsRequestSDKType {
    denom: string;
}
/** QueryInterestFactorsResponse is the response type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsResponse {
    interestFactors: InterestFactor[];
}
export interface QueryInterestFactorsResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.QueryInterestFactorsResponse";
    value: Uint8Array;
}
/** QueryInterestFactorsResponse is the response type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsResponseAmino {
    interest_factors: InterestFactorAmino[];
}
export interface QueryInterestFactorsResponseAminoMsg {
    type: "/kava.hard.v1beta1.QueryInterestFactorsResponse";
    value: QueryInterestFactorsResponseAmino;
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
export interface DepositResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.DepositResponse";
    value: Uint8Array;
}
/** DepositResponse defines an amount of coins deposited into a hard module account. */
export interface DepositResponseAmino {
    depositor: string;
    amount: CoinAmino[];
    index: SupplyInterestFactorResponseAmino[];
}
export interface DepositResponseAminoMsg {
    type: "/kava.hard.v1beta1.DepositResponse";
    value: DepositResponseAmino;
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
export interface SupplyInterestFactorResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.SupplyInterestFactorResponse";
    value: Uint8Array;
}
/** SupplyInterestFactorResponse defines an individual borrow interest factor. */
export interface SupplyInterestFactorResponseAmino {
    denom: string;
    /** sdk.Dec as string */
    value: string;
}
export interface SupplyInterestFactorResponseAminoMsg {
    type: "/kava.hard.v1beta1.SupplyInterestFactorResponse";
    value: SupplyInterestFactorResponseAmino;
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
export interface BorrowResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.BorrowResponse";
    value: Uint8Array;
}
/** BorrowResponse defines an amount of coins borrowed from a hard module account. */
export interface BorrowResponseAmino {
    borrower: string;
    amount: CoinAmino[];
    index: BorrowInterestFactorResponseAmino[];
}
export interface BorrowResponseAminoMsg {
    type: "/kava.hard.v1beta1.BorrowResponse";
    value: BorrowResponseAmino;
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
export interface BorrowInterestFactorResponseProtoMsg {
    typeUrl: "/kava.hard.v1beta1.BorrowInterestFactorResponse";
    value: Uint8Array;
}
/** BorrowInterestFactorResponse defines an individual borrow interest factor. */
export interface BorrowInterestFactorResponseAmino {
    denom: string;
    /** sdk.Dec as string */
    value: string;
}
export interface BorrowInterestFactorResponseAminoMsg {
    type: "/kava.hard.v1beta1.BorrowInterestFactorResponse";
    value: BorrowInterestFactorResponseAmino;
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
export interface MoneyMarketInterestRateProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MoneyMarketInterestRate";
    value: Uint8Array;
}
/** MoneyMarketInterestRate is a unique type returned by interest rate queries */
export interface MoneyMarketInterestRateAmino {
    denom: string;
    /** sdk.Dec as String */
    supply_interest_rate: string;
    /** sdk.Dec as String */
    borrow_interest_rate: string;
}
export interface MoneyMarketInterestRateAminoMsg {
    type: "/kava.hard.v1beta1.MoneyMarketInterestRate";
    value: MoneyMarketInterestRateAmino;
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
export interface InterestFactorProtoMsg {
    typeUrl: "/kava.hard.v1beta1.InterestFactor";
    value: Uint8Array;
}
/** InterestFactor is a unique type returned by interest factor queries */
export interface InterestFactorAmino {
    denom: string;
    /** sdk.Dec as String */
    borrow_interest_factor: string;
    /** sdk.Dec as String */
    supply_interest_factor: string;
}
export interface InterestFactorAminoMsg {
    type: "/kava.hard.v1beta1.InterestFactor";
    value: InterestFactorAmino;
}
/** InterestFactor is a unique type returned by interest factor queries */
export interface InterestFactorSDKType {
    denom: string;
    borrow_interest_factor: string;
    supply_interest_factor: string;
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
export declare const QueryAccountsRequest: {
    typeUrl: string;
    encode(_: QueryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAccountsRequest;
    fromPartial(_: Partial<QueryAccountsRequest>): QueryAccountsRequest;
    fromAmino(_: QueryAccountsRequestAmino): QueryAccountsRequest;
    toAmino(_: QueryAccountsRequest): QueryAccountsRequestAmino;
    fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest;
    fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest;
    toProto(message: QueryAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg;
};
export declare const QueryAccountsResponse: {
    typeUrl: string;
    encode(message: QueryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountsResponse;
    fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse;
    fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse;
    toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino;
    fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse;
    fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse;
    toProto(message: QueryAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg;
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
export declare const QueryUnsyncedDepositsRequest: {
    typeUrl: string;
    encode(message: QueryUnsyncedDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUnsyncedDepositsRequest;
    fromPartial(object: Partial<QueryUnsyncedDepositsRequest>): QueryUnsyncedDepositsRequest;
    fromAmino(object: QueryUnsyncedDepositsRequestAmino): QueryUnsyncedDepositsRequest;
    toAmino(message: QueryUnsyncedDepositsRequest): QueryUnsyncedDepositsRequestAmino;
    fromAminoMsg(object: QueryUnsyncedDepositsRequestAminoMsg): QueryUnsyncedDepositsRequest;
    fromProtoMsg(message: QueryUnsyncedDepositsRequestProtoMsg): QueryUnsyncedDepositsRequest;
    toProto(message: QueryUnsyncedDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryUnsyncedDepositsRequest): QueryUnsyncedDepositsRequestProtoMsg;
};
export declare const QueryUnsyncedDepositsResponse: {
    typeUrl: string;
    encode(message: QueryUnsyncedDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUnsyncedDepositsResponse;
    fromPartial(object: Partial<QueryUnsyncedDepositsResponse>): QueryUnsyncedDepositsResponse;
    fromAmino(object: QueryUnsyncedDepositsResponseAmino): QueryUnsyncedDepositsResponse;
    toAmino(message: QueryUnsyncedDepositsResponse): QueryUnsyncedDepositsResponseAmino;
    fromAminoMsg(object: QueryUnsyncedDepositsResponseAminoMsg): QueryUnsyncedDepositsResponse;
    fromProtoMsg(message: QueryUnsyncedDepositsResponseProtoMsg): QueryUnsyncedDepositsResponse;
    toProto(message: QueryUnsyncedDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryUnsyncedDepositsResponse): QueryUnsyncedDepositsResponseProtoMsg;
};
export declare const QueryTotalDepositedRequest: {
    typeUrl: string;
    encode(message: QueryTotalDepositedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalDepositedRequest;
    fromPartial(object: Partial<QueryTotalDepositedRequest>): QueryTotalDepositedRequest;
    fromAmino(object: QueryTotalDepositedRequestAmino): QueryTotalDepositedRequest;
    toAmino(message: QueryTotalDepositedRequest): QueryTotalDepositedRequestAmino;
    fromAminoMsg(object: QueryTotalDepositedRequestAminoMsg): QueryTotalDepositedRequest;
    fromProtoMsg(message: QueryTotalDepositedRequestProtoMsg): QueryTotalDepositedRequest;
    toProto(message: QueryTotalDepositedRequest): Uint8Array;
    toProtoMsg(message: QueryTotalDepositedRequest): QueryTotalDepositedRequestProtoMsg;
};
export declare const QueryTotalDepositedResponse: {
    typeUrl: string;
    encode(message: QueryTotalDepositedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalDepositedResponse;
    fromPartial(object: Partial<QueryTotalDepositedResponse>): QueryTotalDepositedResponse;
    fromAmino(object: QueryTotalDepositedResponseAmino): QueryTotalDepositedResponse;
    toAmino(message: QueryTotalDepositedResponse): QueryTotalDepositedResponseAmino;
    fromAminoMsg(object: QueryTotalDepositedResponseAminoMsg): QueryTotalDepositedResponse;
    fromProtoMsg(message: QueryTotalDepositedResponseProtoMsg): QueryTotalDepositedResponse;
    toProto(message: QueryTotalDepositedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalDepositedResponse): QueryTotalDepositedResponseProtoMsg;
};
export declare const QueryBorrowsRequest: {
    typeUrl: string;
    encode(message: QueryBorrowsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBorrowsRequest;
    fromPartial(object: Partial<QueryBorrowsRequest>): QueryBorrowsRequest;
    fromAmino(object: QueryBorrowsRequestAmino): QueryBorrowsRequest;
    toAmino(message: QueryBorrowsRequest): QueryBorrowsRequestAmino;
    fromAminoMsg(object: QueryBorrowsRequestAminoMsg): QueryBorrowsRequest;
    fromProtoMsg(message: QueryBorrowsRequestProtoMsg): QueryBorrowsRequest;
    toProto(message: QueryBorrowsRequest): Uint8Array;
    toProtoMsg(message: QueryBorrowsRequest): QueryBorrowsRequestProtoMsg;
};
export declare const QueryBorrowsResponse: {
    typeUrl: string;
    encode(message: QueryBorrowsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBorrowsResponse;
    fromPartial(object: Partial<QueryBorrowsResponse>): QueryBorrowsResponse;
    fromAmino(object: QueryBorrowsResponseAmino): QueryBorrowsResponse;
    toAmino(message: QueryBorrowsResponse): QueryBorrowsResponseAmino;
    fromAminoMsg(object: QueryBorrowsResponseAminoMsg): QueryBorrowsResponse;
    fromProtoMsg(message: QueryBorrowsResponseProtoMsg): QueryBorrowsResponse;
    toProto(message: QueryBorrowsResponse): Uint8Array;
    toProtoMsg(message: QueryBorrowsResponse): QueryBorrowsResponseProtoMsg;
};
export declare const QueryUnsyncedBorrowsRequest: {
    typeUrl: string;
    encode(message: QueryUnsyncedBorrowsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUnsyncedBorrowsRequest;
    fromPartial(object: Partial<QueryUnsyncedBorrowsRequest>): QueryUnsyncedBorrowsRequest;
    fromAmino(object: QueryUnsyncedBorrowsRequestAmino): QueryUnsyncedBorrowsRequest;
    toAmino(message: QueryUnsyncedBorrowsRequest): QueryUnsyncedBorrowsRequestAmino;
    fromAminoMsg(object: QueryUnsyncedBorrowsRequestAminoMsg): QueryUnsyncedBorrowsRequest;
    fromProtoMsg(message: QueryUnsyncedBorrowsRequestProtoMsg): QueryUnsyncedBorrowsRequest;
    toProto(message: QueryUnsyncedBorrowsRequest): Uint8Array;
    toProtoMsg(message: QueryUnsyncedBorrowsRequest): QueryUnsyncedBorrowsRequestProtoMsg;
};
export declare const QueryUnsyncedBorrowsResponse: {
    typeUrl: string;
    encode(message: QueryUnsyncedBorrowsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUnsyncedBorrowsResponse;
    fromPartial(object: Partial<QueryUnsyncedBorrowsResponse>): QueryUnsyncedBorrowsResponse;
    fromAmino(object: QueryUnsyncedBorrowsResponseAmino): QueryUnsyncedBorrowsResponse;
    toAmino(message: QueryUnsyncedBorrowsResponse): QueryUnsyncedBorrowsResponseAmino;
    fromAminoMsg(object: QueryUnsyncedBorrowsResponseAminoMsg): QueryUnsyncedBorrowsResponse;
    fromProtoMsg(message: QueryUnsyncedBorrowsResponseProtoMsg): QueryUnsyncedBorrowsResponse;
    toProto(message: QueryUnsyncedBorrowsResponse): Uint8Array;
    toProtoMsg(message: QueryUnsyncedBorrowsResponse): QueryUnsyncedBorrowsResponseProtoMsg;
};
export declare const QueryTotalBorrowedRequest: {
    typeUrl: string;
    encode(message: QueryTotalBorrowedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalBorrowedRequest;
    fromPartial(object: Partial<QueryTotalBorrowedRequest>): QueryTotalBorrowedRequest;
    fromAmino(object: QueryTotalBorrowedRequestAmino): QueryTotalBorrowedRequest;
    toAmino(message: QueryTotalBorrowedRequest): QueryTotalBorrowedRequestAmino;
    fromAminoMsg(object: QueryTotalBorrowedRequestAminoMsg): QueryTotalBorrowedRequest;
    fromProtoMsg(message: QueryTotalBorrowedRequestProtoMsg): QueryTotalBorrowedRequest;
    toProto(message: QueryTotalBorrowedRequest): Uint8Array;
    toProtoMsg(message: QueryTotalBorrowedRequest): QueryTotalBorrowedRequestProtoMsg;
};
export declare const QueryTotalBorrowedResponse: {
    typeUrl: string;
    encode(message: QueryTotalBorrowedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalBorrowedResponse;
    fromPartial(object: Partial<QueryTotalBorrowedResponse>): QueryTotalBorrowedResponse;
    fromAmino(object: QueryTotalBorrowedResponseAmino): QueryTotalBorrowedResponse;
    toAmino(message: QueryTotalBorrowedResponse): QueryTotalBorrowedResponseAmino;
    fromAminoMsg(object: QueryTotalBorrowedResponseAminoMsg): QueryTotalBorrowedResponse;
    fromProtoMsg(message: QueryTotalBorrowedResponseProtoMsg): QueryTotalBorrowedResponse;
    toProto(message: QueryTotalBorrowedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalBorrowedResponse): QueryTotalBorrowedResponseProtoMsg;
};
export declare const QueryInterestRateRequest: {
    typeUrl: string;
    encode(message: QueryInterestRateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterestRateRequest;
    fromPartial(object: Partial<QueryInterestRateRequest>): QueryInterestRateRequest;
    fromAmino(object: QueryInterestRateRequestAmino): QueryInterestRateRequest;
    toAmino(message: QueryInterestRateRequest): QueryInterestRateRequestAmino;
    fromAminoMsg(object: QueryInterestRateRequestAminoMsg): QueryInterestRateRequest;
    fromProtoMsg(message: QueryInterestRateRequestProtoMsg): QueryInterestRateRequest;
    toProto(message: QueryInterestRateRequest): Uint8Array;
    toProtoMsg(message: QueryInterestRateRequest): QueryInterestRateRequestProtoMsg;
};
export declare const QueryInterestRateResponse: {
    typeUrl: string;
    encode(message: QueryInterestRateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterestRateResponse;
    fromPartial(object: Partial<QueryInterestRateResponse>): QueryInterestRateResponse;
    fromAmino(object: QueryInterestRateResponseAmino): QueryInterestRateResponse;
    toAmino(message: QueryInterestRateResponse): QueryInterestRateResponseAmino;
    fromAminoMsg(object: QueryInterestRateResponseAminoMsg): QueryInterestRateResponse;
    fromProtoMsg(message: QueryInterestRateResponseProtoMsg): QueryInterestRateResponse;
    toProto(message: QueryInterestRateResponse): Uint8Array;
    toProtoMsg(message: QueryInterestRateResponse): QueryInterestRateResponseProtoMsg;
};
export declare const QueryReservesRequest: {
    typeUrl: string;
    encode(message: QueryReservesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryReservesRequest;
    fromPartial(object: Partial<QueryReservesRequest>): QueryReservesRequest;
    fromAmino(object: QueryReservesRequestAmino): QueryReservesRequest;
    toAmino(message: QueryReservesRequest): QueryReservesRequestAmino;
    fromAminoMsg(object: QueryReservesRequestAminoMsg): QueryReservesRequest;
    fromProtoMsg(message: QueryReservesRequestProtoMsg): QueryReservesRequest;
    toProto(message: QueryReservesRequest): Uint8Array;
    toProtoMsg(message: QueryReservesRequest): QueryReservesRequestProtoMsg;
};
export declare const QueryReservesResponse: {
    typeUrl: string;
    encode(message: QueryReservesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryReservesResponse;
    fromPartial(object: Partial<QueryReservesResponse>): QueryReservesResponse;
    fromAmino(object: QueryReservesResponseAmino): QueryReservesResponse;
    toAmino(message: QueryReservesResponse): QueryReservesResponseAmino;
    fromAminoMsg(object: QueryReservesResponseAminoMsg): QueryReservesResponse;
    fromProtoMsg(message: QueryReservesResponseProtoMsg): QueryReservesResponse;
    toProto(message: QueryReservesResponse): Uint8Array;
    toProtoMsg(message: QueryReservesResponse): QueryReservesResponseProtoMsg;
};
export declare const QueryInterestFactorsRequest: {
    typeUrl: string;
    encode(message: QueryInterestFactorsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterestFactorsRequest;
    fromPartial(object: Partial<QueryInterestFactorsRequest>): QueryInterestFactorsRequest;
    fromAmino(object: QueryInterestFactorsRequestAmino): QueryInterestFactorsRequest;
    toAmino(message: QueryInterestFactorsRequest): QueryInterestFactorsRequestAmino;
    fromAminoMsg(object: QueryInterestFactorsRequestAminoMsg): QueryInterestFactorsRequest;
    fromProtoMsg(message: QueryInterestFactorsRequestProtoMsg): QueryInterestFactorsRequest;
    toProto(message: QueryInterestFactorsRequest): Uint8Array;
    toProtoMsg(message: QueryInterestFactorsRequest): QueryInterestFactorsRequestProtoMsg;
};
export declare const QueryInterestFactorsResponse: {
    typeUrl: string;
    encode(message: QueryInterestFactorsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterestFactorsResponse;
    fromPartial(object: Partial<QueryInterestFactorsResponse>): QueryInterestFactorsResponse;
    fromAmino(object: QueryInterestFactorsResponseAmino): QueryInterestFactorsResponse;
    toAmino(message: QueryInterestFactorsResponse): QueryInterestFactorsResponseAmino;
    fromAminoMsg(object: QueryInterestFactorsResponseAminoMsg): QueryInterestFactorsResponse;
    fromProtoMsg(message: QueryInterestFactorsResponseProtoMsg): QueryInterestFactorsResponse;
    toProto(message: QueryInterestFactorsResponse): Uint8Array;
    toProtoMsg(message: QueryInterestFactorsResponse): QueryInterestFactorsResponseProtoMsg;
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
export declare const SupplyInterestFactorResponse: {
    typeUrl: string;
    encode(message: SupplyInterestFactorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SupplyInterestFactorResponse;
    fromPartial(object: Partial<SupplyInterestFactorResponse>): SupplyInterestFactorResponse;
    fromAmino(object: SupplyInterestFactorResponseAmino): SupplyInterestFactorResponse;
    toAmino(message: SupplyInterestFactorResponse): SupplyInterestFactorResponseAmino;
    fromAminoMsg(object: SupplyInterestFactorResponseAminoMsg): SupplyInterestFactorResponse;
    fromProtoMsg(message: SupplyInterestFactorResponseProtoMsg): SupplyInterestFactorResponse;
    toProto(message: SupplyInterestFactorResponse): Uint8Array;
    toProtoMsg(message: SupplyInterestFactorResponse): SupplyInterestFactorResponseProtoMsg;
};
export declare const BorrowResponse: {
    typeUrl: string;
    encode(message: BorrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BorrowResponse;
    fromPartial(object: Partial<BorrowResponse>): BorrowResponse;
    fromAmino(object: BorrowResponseAmino): BorrowResponse;
    toAmino(message: BorrowResponse): BorrowResponseAmino;
    fromAminoMsg(object: BorrowResponseAminoMsg): BorrowResponse;
    fromProtoMsg(message: BorrowResponseProtoMsg): BorrowResponse;
    toProto(message: BorrowResponse): Uint8Array;
    toProtoMsg(message: BorrowResponse): BorrowResponseProtoMsg;
};
export declare const BorrowInterestFactorResponse: {
    typeUrl: string;
    encode(message: BorrowInterestFactorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BorrowInterestFactorResponse;
    fromPartial(object: Partial<BorrowInterestFactorResponse>): BorrowInterestFactorResponse;
    fromAmino(object: BorrowInterestFactorResponseAmino): BorrowInterestFactorResponse;
    toAmino(message: BorrowInterestFactorResponse): BorrowInterestFactorResponseAmino;
    fromAminoMsg(object: BorrowInterestFactorResponseAminoMsg): BorrowInterestFactorResponse;
    fromProtoMsg(message: BorrowInterestFactorResponseProtoMsg): BorrowInterestFactorResponse;
    toProto(message: BorrowInterestFactorResponse): Uint8Array;
    toProtoMsg(message: BorrowInterestFactorResponse): BorrowInterestFactorResponseProtoMsg;
};
export declare const MoneyMarketInterestRate: {
    typeUrl: string;
    encode(message: MoneyMarketInterestRate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MoneyMarketInterestRate;
    fromPartial(object: Partial<MoneyMarketInterestRate>): MoneyMarketInterestRate;
    fromAmino(object: MoneyMarketInterestRateAmino): MoneyMarketInterestRate;
    toAmino(message: MoneyMarketInterestRate): MoneyMarketInterestRateAmino;
    fromAminoMsg(object: MoneyMarketInterestRateAminoMsg): MoneyMarketInterestRate;
    fromProtoMsg(message: MoneyMarketInterestRateProtoMsg): MoneyMarketInterestRate;
    toProto(message: MoneyMarketInterestRate): Uint8Array;
    toProtoMsg(message: MoneyMarketInterestRate): MoneyMarketInterestRateProtoMsg;
};
export declare const InterestFactor: {
    typeUrl: string;
    encode(message: InterestFactor, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InterestFactor;
    fromPartial(object: Partial<InterestFactor>): InterestFactor;
    fromAmino(object: InterestFactorAmino): InterestFactor;
    toAmino(message: InterestFactor): InterestFactorAmino;
    fromAminoMsg(object: InterestFactorAminoMsg): InterestFactor;
    fromProtoMsg(message: InterestFactorProtoMsg): InterestFactor;
    toProto(message: InterestFactor): Uint8Array;
    toProtoMsg(message: InterestFactor): InterestFactorProtoMsg;
};
