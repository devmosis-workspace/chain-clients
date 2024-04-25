import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ModuleAccount, ModuleAccountAmino, ModuleAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kava.hard.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
export interface QueryAccountsRequest {}
export interface QueryAccountsRequestProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryAccountsRequest";
  value: Uint8Array;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestAmino {}
export interface QueryAccountsRequestAminoMsg {
  type: "/kava.hard.v1beta1.QueryAccountsRequest";
  value: QueryAccountsRequestAmino;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestSDKType {}
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
  accounts?: ModuleAccountAmino[];
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
  pagination?: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryDepositsRequest";
  value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
  denom?: string;
  owner?: string;
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
  pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  deposits: DepositResponse[];
  pagination?: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryDepositsResponse";
  value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
  deposits?: DepositResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
  type: "/kava.hard.v1beta1.QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
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
export interface QueryUnsyncedDepositsRequestProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryUnsyncedDepositsRequest";
  value: Uint8Array;
}
/** QueryUnsyncedDepositsRequest is the request type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsRequestAmino {
  denom?: string;
  owner?: string;
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
  pagination?: PageRequestSDKType;
}
/** QueryUnsyncedDepositsResponse is the response type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsResponse {
  deposits: DepositResponse[];
  pagination?: PageResponse;
}
export interface QueryUnsyncedDepositsResponseProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryUnsyncedDepositsResponse";
  value: Uint8Array;
}
/** QueryUnsyncedDepositsResponse is the response type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsResponseAmino {
  deposits?: DepositResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUnsyncedDepositsResponseAminoMsg {
  type: "/kava.hard.v1beta1.QueryUnsyncedDepositsResponse";
  value: QueryUnsyncedDepositsResponseAmino;
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
export interface QueryTotalDepositedRequestProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryTotalDepositedRequest";
  value: Uint8Array;
}
/** QueryTotalDepositedRequest is the request type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedRequestAmino {
  denom?: string;
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
  supplied_coins?: CoinAmino[];
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
  pagination?: PageRequest;
}
export interface QueryBorrowsRequestProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryBorrowsRequest";
  value: Uint8Array;
}
/** QueryBorrowsRequest is the request type for the Query/Borrows RPC method. */
export interface QueryBorrowsRequestAmino {
  denom?: string;
  owner?: string;
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
  pagination?: PageRequestSDKType;
}
/** QueryBorrowsResponse is the response type for the Query/Borrows RPC method. */
export interface QueryBorrowsResponse {
  borrows: BorrowResponse[];
  pagination?: PageResponse;
}
export interface QueryBorrowsResponseProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryBorrowsResponse";
  value: Uint8Array;
}
/** QueryBorrowsResponse is the response type for the Query/Borrows RPC method. */
export interface QueryBorrowsResponseAmino {
  borrows?: BorrowResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBorrowsResponseAminoMsg {
  type: "/kava.hard.v1beta1.QueryBorrowsResponse";
  value: QueryBorrowsResponseAmino;
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
export interface QueryUnsyncedBorrowsRequestProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryUnsyncedBorrowsRequest";
  value: Uint8Array;
}
/** QueryUnsyncedBorrowsRequest is the request type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsRequestAmino {
  denom?: string;
  owner?: string;
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
  pagination?: PageRequestSDKType;
}
/** QueryUnsyncedBorrowsResponse is the response type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsResponse {
  borrows: BorrowResponse[];
  pagination?: PageResponse;
}
export interface QueryUnsyncedBorrowsResponseProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryUnsyncedBorrowsResponse";
  value: Uint8Array;
}
/** QueryUnsyncedBorrowsResponse is the response type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsResponseAmino {
  borrows?: BorrowResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUnsyncedBorrowsResponseAminoMsg {
  type: "/kava.hard.v1beta1.QueryUnsyncedBorrowsResponse";
  value: QueryUnsyncedBorrowsResponseAmino;
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
export interface QueryTotalBorrowedRequestProtoMsg {
  typeUrl: "/kava.hard.v1beta1.QueryTotalBorrowedRequest";
  value: Uint8Array;
}
/** QueryTotalBorrowedRequest is the request type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedRequestAmino {
  denom?: string;
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
  borrowed_coins?: CoinAmino[];
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
  denom?: string;
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
  interest_rates?: MoneyMarketInterestRateAmino[];
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
  denom?: string;
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
  amount?: CoinAmino[];
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
  denom?: string;
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
  interest_factors?: InterestFactorAmino[];
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
  depositor?: string;
  amount?: CoinAmino[];
  index?: SupplyInterestFactorResponseAmino[];
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
  denom?: string;
  /** sdk.Dec as string */
  value?: string;
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
  borrower?: string;
  amount?: CoinAmino[];
  index?: BorrowInterestFactorResponseAmino[];
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
  denom?: string;
  /** sdk.Dec as string */
  value?: string;
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
  denom?: string;
  /** sdk.Dec as String */
  supply_interest_rate?: string;
  /** sdk.Dec as String */
  borrow_interest_rate?: string;
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
  denom?: string;
  /** sdk.Dec as String */
  borrow_interest_factor?: string;
  /** sdk.Dec as String */
  supply_interest_factor?: string;
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {};
}
export const QueryAccountsRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryAccountsRequest",
  encode(_: QueryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    return message;
  },
  fromAmino(_: QueryAccountsRequestAmino): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    return message;
  },
  toAmino(_: QueryAccountsRequest): QueryAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto(message: QueryAccountsRequest): Uint8Array {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryAccountsResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryAccountsResponse",
  encode(message: QueryAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      ModuleAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => ModuleAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => ModuleAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => ModuleAccount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? ModuleAccount.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto(message: QueryAccountsResponse): Uint8Array {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    denom: "",
    owner: "",
    pagination: undefined
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryDepositsRequest",
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.denom = object.denom ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryDepositsResponse",
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      DepositResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => DepositResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? DepositResponse.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnsyncedDepositsRequest(): QueryUnsyncedDepositsRequest {
  return {
    denom: "",
    owner: "",
    pagination: undefined
  };
}
export const QueryUnsyncedDepositsRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryUnsyncedDepositsRequest",
  encode(message: QueryUnsyncedDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUnsyncedDepositsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryUnsyncedDepositsRequest>): QueryUnsyncedDepositsRequest {
    const message = createBaseQueryUnsyncedDepositsRequest();
    message.denom = object.denom ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnsyncedDepositsRequestAmino): QueryUnsyncedDepositsRequest {
    const message = createBaseQueryUnsyncedDepositsRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUnsyncedDepositsRequest): QueryUnsyncedDepositsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnsyncedDepositsRequestAminoMsg): QueryUnsyncedDepositsRequest {
    return QueryUnsyncedDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnsyncedDepositsRequestProtoMsg): QueryUnsyncedDepositsRequest {
    return QueryUnsyncedDepositsRequest.decode(message.value);
  },
  toProto(message: QueryUnsyncedDepositsRequest): Uint8Array {
    return QueryUnsyncedDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnsyncedDepositsRequest): QueryUnsyncedDepositsRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryUnsyncedDepositsRequest",
      value: QueryUnsyncedDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnsyncedDepositsResponse(): QueryUnsyncedDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryUnsyncedDepositsResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryUnsyncedDepositsResponse",
  encode(message: QueryUnsyncedDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      DepositResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUnsyncedDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => DepositResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryUnsyncedDepositsResponse>): QueryUnsyncedDepositsResponse {
    const message = createBaseQueryUnsyncedDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnsyncedDepositsResponseAmino): QueryUnsyncedDepositsResponse {
    const message = createBaseQueryUnsyncedDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUnsyncedDepositsResponse): QueryUnsyncedDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? DepositResponse.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnsyncedDepositsResponseAminoMsg): QueryUnsyncedDepositsResponse {
    return QueryUnsyncedDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnsyncedDepositsResponseProtoMsg): QueryUnsyncedDepositsResponse {
    return QueryUnsyncedDepositsResponse.decode(message.value);
  },
  toProto(message: QueryUnsyncedDepositsResponse): Uint8Array {
    return QueryUnsyncedDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnsyncedDepositsResponse): QueryUnsyncedDepositsResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryUnsyncedDepositsResponse",
      value: QueryUnsyncedDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalDepositedRequest(): QueryTotalDepositedRequest {
  return {
    denom: ""
  };
}
export const QueryTotalDepositedRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryTotalDepositedRequest",
  encode(message: QueryTotalDepositedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalDepositedRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryTotalDepositedRequest>): QueryTotalDepositedRequest {
    const message = createBaseQueryTotalDepositedRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTotalDepositedRequestAmino): QueryTotalDepositedRequest {
    const message = createBaseQueryTotalDepositedRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTotalDepositedRequest): QueryTotalDepositedRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTotalDepositedRequestAminoMsg): QueryTotalDepositedRequest {
    return QueryTotalDepositedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalDepositedRequestProtoMsg): QueryTotalDepositedRequest {
    return QueryTotalDepositedRequest.decode(message.value);
  },
  toProto(message: QueryTotalDepositedRequest): Uint8Array {
    return QueryTotalDepositedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalDepositedRequest): QueryTotalDepositedRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryTotalDepositedRequest",
      value: QueryTotalDepositedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalDepositedResponse(): QueryTotalDepositedResponse {
  return {
    suppliedCoins: []
  };
}
export const QueryTotalDepositedResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryTotalDepositedResponse",
  encode(message: QueryTotalDepositedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.suppliedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalDepositedResponse {
    return {
      suppliedCoins: Array.isArray(object?.suppliedCoins) ? object.suppliedCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalDepositedResponse>): QueryTotalDepositedResponse {
    const message = createBaseQueryTotalDepositedResponse();
    message.suppliedCoins = object.suppliedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalDepositedResponseAmino): QueryTotalDepositedResponse {
    const message = createBaseQueryTotalDepositedResponse();
    message.suppliedCoins = object.supplied_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalDepositedResponse): QueryTotalDepositedResponseAmino {
    const obj: any = {};
    if (message.suppliedCoins) {
      obj.supplied_coins = message.suppliedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.supplied_coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalDepositedResponseAminoMsg): QueryTotalDepositedResponse {
    return QueryTotalDepositedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalDepositedResponseProtoMsg): QueryTotalDepositedResponse {
    return QueryTotalDepositedResponse.decode(message.value);
  },
  toProto(message: QueryTotalDepositedResponse): Uint8Array {
    return QueryTotalDepositedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalDepositedResponse): QueryTotalDepositedResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryTotalDepositedResponse",
      value: QueryTotalDepositedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBorrowsRequest(): QueryBorrowsRequest {
  return {
    denom: "",
    owner: "",
    pagination: undefined
  };
}
export const QueryBorrowsRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryBorrowsRequest",
  encode(message: QueryBorrowsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBorrowsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBorrowsRequest>): QueryBorrowsRequest {
    const message = createBaseQueryBorrowsRequest();
    message.denom = object.denom ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBorrowsRequestAmino): QueryBorrowsRequest {
    const message = createBaseQueryBorrowsRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBorrowsRequest): QueryBorrowsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBorrowsRequestAminoMsg): QueryBorrowsRequest {
    return QueryBorrowsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBorrowsRequestProtoMsg): QueryBorrowsRequest {
    return QueryBorrowsRequest.decode(message.value);
  },
  toProto(message: QueryBorrowsRequest): Uint8Array {
    return QueryBorrowsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBorrowsRequest): QueryBorrowsRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryBorrowsRequest",
      value: QueryBorrowsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBorrowsResponse(): QueryBorrowsResponse {
  return {
    borrows: [],
    pagination: undefined
  };
}
export const QueryBorrowsResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryBorrowsResponse",
  encode(message: QueryBorrowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.borrows) {
      BorrowResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBorrowsResponse {
    return {
      borrows: Array.isArray(object?.borrows) ? object.borrows.map((e: any) => BorrowResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBorrowsResponse>): QueryBorrowsResponse {
    const message = createBaseQueryBorrowsResponse();
    message.borrows = object.borrows?.map(e => BorrowResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBorrowsResponseAmino): QueryBorrowsResponse {
    const message = createBaseQueryBorrowsResponse();
    message.borrows = object.borrows?.map(e => BorrowResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBorrowsResponse): QueryBorrowsResponseAmino {
    const obj: any = {};
    if (message.borrows) {
      obj.borrows = message.borrows.map(e => e ? BorrowResponse.toAmino(e) : undefined);
    } else {
      obj.borrows = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBorrowsResponseAminoMsg): QueryBorrowsResponse {
    return QueryBorrowsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBorrowsResponseProtoMsg): QueryBorrowsResponse {
    return QueryBorrowsResponse.decode(message.value);
  },
  toProto(message: QueryBorrowsResponse): Uint8Array {
    return QueryBorrowsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBorrowsResponse): QueryBorrowsResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryBorrowsResponse",
      value: QueryBorrowsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnsyncedBorrowsRequest(): QueryUnsyncedBorrowsRequest {
  return {
    denom: "",
    owner: "",
    pagination: undefined
  };
}
export const QueryUnsyncedBorrowsRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryUnsyncedBorrowsRequest",
  encode(message: QueryUnsyncedBorrowsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUnsyncedBorrowsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryUnsyncedBorrowsRequest>): QueryUnsyncedBorrowsRequest {
    const message = createBaseQueryUnsyncedBorrowsRequest();
    message.denom = object.denom ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnsyncedBorrowsRequestAmino): QueryUnsyncedBorrowsRequest {
    const message = createBaseQueryUnsyncedBorrowsRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUnsyncedBorrowsRequest): QueryUnsyncedBorrowsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnsyncedBorrowsRequestAminoMsg): QueryUnsyncedBorrowsRequest {
    return QueryUnsyncedBorrowsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnsyncedBorrowsRequestProtoMsg): QueryUnsyncedBorrowsRequest {
    return QueryUnsyncedBorrowsRequest.decode(message.value);
  },
  toProto(message: QueryUnsyncedBorrowsRequest): Uint8Array {
    return QueryUnsyncedBorrowsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnsyncedBorrowsRequest): QueryUnsyncedBorrowsRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryUnsyncedBorrowsRequest",
      value: QueryUnsyncedBorrowsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnsyncedBorrowsResponse(): QueryUnsyncedBorrowsResponse {
  return {
    borrows: [],
    pagination: undefined
  };
}
export const QueryUnsyncedBorrowsResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryUnsyncedBorrowsResponse",
  encode(message: QueryUnsyncedBorrowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.borrows) {
      BorrowResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUnsyncedBorrowsResponse {
    return {
      borrows: Array.isArray(object?.borrows) ? object.borrows.map((e: any) => BorrowResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryUnsyncedBorrowsResponse>): QueryUnsyncedBorrowsResponse {
    const message = createBaseQueryUnsyncedBorrowsResponse();
    message.borrows = object.borrows?.map(e => BorrowResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnsyncedBorrowsResponseAmino): QueryUnsyncedBorrowsResponse {
    const message = createBaseQueryUnsyncedBorrowsResponse();
    message.borrows = object.borrows?.map(e => BorrowResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUnsyncedBorrowsResponse): QueryUnsyncedBorrowsResponseAmino {
    const obj: any = {};
    if (message.borrows) {
      obj.borrows = message.borrows.map(e => e ? BorrowResponse.toAmino(e) : undefined);
    } else {
      obj.borrows = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnsyncedBorrowsResponseAminoMsg): QueryUnsyncedBorrowsResponse {
    return QueryUnsyncedBorrowsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnsyncedBorrowsResponseProtoMsg): QueryUnsyncedBorrowsResponse {
    return QueryUnsyncedBorrowsResponse.decode(message.value);
  },
  toProto(message: QueryUnsyncedBorrowsResponse): Uint8Array {
    return QueryUnsyncedBorrowsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnsyncedBorrowsResponse): QueryUnsyncedBorrowsResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryUnsyncedBorrowsResponse",
      value: QueryUnsyncedBorrowsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBorrowedRequest(): QueryTotalBorrowedRequest {
  return {
    denom: ""
  };
}
export const QueryTotalBorrowedRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryTotalBorrowedRequest",
  encode(message: QueryTotalBorrowedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalBorrowedRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryTotalBorrowedRequest>): QueryTotalBorrowedRequest {
    const message = createBaseQueryTotalBorrowedRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTotalBorrowedRequestAmino): QueryTotalBorrowedRequest {
    const message = createBaseQueryTotalBorrowedRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTotalBorrowedRequest): QueryTotalBorrowedRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTotalBorrowedRequestAminoMsg): QueryTotalBorrowedRequest {
    return QueryTotalBorrowedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBorrowedRequestProtoMsg): QueryTotalBorrowedRequest {
    return QueryTotalBorrowedRequest.decode(message.value);
  },
  toProto(message: QueryTotalBorrowedRequest): Uint8Array {
    return QueryTotalBorrowedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBorrowedRequest): QueryTotalBorrowedRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryTotalBorrowedRequest",
      value: QueryTotalBorrowedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBorrowedResponse(): QueryTotalBorrowedResponse {
  return {
    borrowedCoins: []
  };
}
export const QueryTotalBorrowedResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryTotalBorrowedResponse",
  encode(message: QueryTotalBorrowedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.borrowedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalBorrowedResponse {
    return {
      borrowedCoins: Array.isArray(object?.borrowedCoins) ? object.borrowedCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalBorrowedResponse>): QueryTotalBorrowedResponse {
    const message = createBaseQueryTotalBorrowedResponse();
    message.borrowedCoins = object.borrowedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalBorrowedResponseAmino): QueryTotalBorrowedResponse {
    const message = createBaseQueryTotalBorrowedResponse();
    message.borrowedCoins = object.borrowed_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalBorrowedResponse): QueryTotalBorrowedResponseAmino {
    const obj: any = {};
    if (message.borrowedCoins) {
      obj.borrowed_coins = message.borrowedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.borrowed_coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalBorrowedResponseAminoMsg): QueryTotalBorrowedResponse {
    return QueryTotalBorrowedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBorrowedResponseProtoMsg): QueryTotalBorrowedResponse {
    return QueryTotalBorrowedResponse.decode(message.value);
  },
  toProto(message: QueryTotalBorrowedResponse): Uint8Array {
    return QueryTotalBorrowedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBorrowedResponse): QueryTotalBorrowedResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryTotalBorrowedResponse",
      value: QueryTotalBorrowedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInterestRateRequest(): QueryInterestRateRequest {
  return {
    denom: ""
  };
}
export const QueryInterestRateRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryInterestRateRequest",
  encode(message: QueryInterestRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterestRateRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryInterestRateRequest>): QueryInterestRateRequest {
    const message = createBaseQueryInterestRateRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryInterestRateRequestAmino): QueryInterestRateRequest {
    const message = createBaseQueryInterestRateRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryInterestRateRequest): QueryInterestRateRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryInterestRateRequestAminoMsg): QueryInterestRateRequest {
    return QueryInterestRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterestRateRequestProtoMsg): QueryInterestRateRequest {
    return QueryInterestRateRequest.decode(message.value);
  },
  toProto(message: QueryInterestRateRequest): Uint8Array {
    return QueryInterestRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterestRateRequest): QueryInterestRateRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryInterestRateRequest",
      value: QueryInterestRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterestRateResponse(): QueryInterestRateResponse {
  return {
    interestRates: []
  };
}
export const QueryInterestRateResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryInterestRateResponse",
  encode(message: QueryInterestRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.interestRates) {
      MoneyMarketInterestRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInterestRateResponse {
    return {
      interestRates: Array.isArray(object?.interestRates) ? object.interestRates.map((e: any) => MoneyMarketInterestRate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryInterestRateResponse>): QueryInterestRateResponse {
    const message = createBaseQueryInterestRateResponse();
    message.interestRates = object.interestRates?.map(e => MoneyMarketInterestRate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryInterestRateResponseAmino): QueryInterestRateResponse {
    const message = createBaseQueryInterestRateResponse();
    message.interestRates = object.interest_rates?.map(e => MoneyMarketInterestRate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryInterestRateResponse): QueryInterestRateResponseAmino {
    const obj: any = {};
    if (message.interestRates) {
      obj.interest_rates = message.interestRates.map(e => e ? MoneyMarketInterestRate.toAmino(e) : undefined);
    } else {
      obj.interest_rates = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryInterestRateResponseAminoMsg): QueryInterestRateResponse {
    return QueryInterestRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterestRateResponseProtoMsg): QueryInterestRateResponse {
    return QueryInterestRateResponse.decode(message.value);
  },
  toProto(message: QueryInterestRateResponse): Uint8Array {
    return QueryInterestRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterestRateResponse): QueryInterestRateResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryInterestRateResponse",
      value: QueryInterestRateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReservesRequest(): QueryReservesRequest {
  return {
    denom: ""
  };
}
export const QueryReservesRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryReservesRequest",
  encode(message: QueryReservesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryReservesRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryReservesRequest>): QueryReservesRequest {
    const message = createBaseQueryReservesRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryReservesRequestAmino): QueryReservesRequest {
    const message = createBaseQueryReservesRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryReservesRequest): QueryReservesRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryReservesRequestAminoMsg): QueryReservesRequest {
    return QueryReservesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReservesRequestProtoMsg): QueryReservesRequest {
    return QueryReservesRequest.decode(message.value);
  },
  toProto(message: QueryReservesRequest): Uint8Array {
    return QueryReservesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReservesRequest): QueryReservesRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryReservesRequest",
      value: QueryReservesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReservesResponse(): QueryReservesResponse {
  return {
    amount: []
  };
}
export const QueryReservesResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryReservesResponse",
  encode(message: QueryReservesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryReservesResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryReservesResponse>): QueryReservesResponse {
    const message = createBaseQueryReservesResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryReservesResponseAmino): QueryReservesResponse {
    const message = createBaseQueryReservesResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryReservesResponse): QueryReservesResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryReservesResponseAminoMsg): QueryReservesResponse {
    return QueryReservesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReservesResponseProtoMsg): QueryReservesResponse {
    return QueryReservesResponse.decode(message.value);
  },
  toProto(message: QueryReservesResponse): Uint8Array {
    return QueryReservesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReservesResponse): QueryReservesResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryReservesResponse",
      value: QueryReservesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInterestFactorsRequest(): QueryInterestFactorsRequest {
  return {
    denom: ""
  };
}
export const QueryInterestFactorsRequest = {
  typeUrl: "/kava.hard.v1beta1.QueryInterestFactorsRequest",
  encode(message: QueryInterestFactorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterestFactorsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryInterestFactorsRequest>): QueryInterestFactorsRequest {
    const message = createBaseQueryInterestFactorsRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryInterestFactorsRequestAmino): QueryInterestFactorsRequest {
    const message = createBaseQueryInterestFactorsRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryInterestFactorsRequest): QueryInterestFactorsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryInterestFactorsRequestAminoMsg): QueryInterestFactorsRequest {
    return QueryInterestFactorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterestFactorsRequestProtoMsg): QueryInterestFactorsRequest {
    return QueryInterestFactorsRequest.decode(message.value);
  },
  toProto(message: QueryInterestFactorsRequest): Uint8Array {
    return QueryInterestFactorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterestFactorsRequest): QueryInterestFactorsRequestProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryInterestFactorsRequest",
      value: QueryInterestFactorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterestFactorsResponse(): QueryInterestFactorsResponse {
  return {
    interestFactors: []
  };
}
export const QueryInterestFactorsResponse = {
  typeUrl: "/kava.hard.v1beta1.QueryInterestFactorsResponse",
  encode(message: QueryInterestFactorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.interestFactors) {
      InterestFactor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInterestFactorsResponse {
    return {
      interestFactors: Array.isArray(object?.interestFactors) ? object.interestFactors.map((e: any) => InterestFactor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryInterestFactorsResponse>): QueryInterestFactorsResponse {
    const message = createBaseQueryInterestFactorsResponse();
    message.interestFactors = object.interestFactors?.map(e => InterestFactor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryInterestFactorsResponseAmino): QueryInterestFactorsResponse {
    const message = createBaseQueryInterestFactorsResponse();
    message.interestFactors = object.interest_factors?.map(e => InterestFactor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryInterestFactorsResponse): QueryInterestFactorsResponseAmino {
    const obj: any = {};
    if (message.interestFactors) {
      obj.interest_factors = message.interestFactors.map(e => e ? InterestFactor.toAmino(e) : undefined);
    } else {
      obj.interest_factors = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryInterestFactorsResponseAminoMsg): QueryInterestFactorsResponse {
    return QueryInterestFactorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterestFactorsResponseProtoMsg): QueryInterestFactorsResponse {
    return QueryInterestFactorsResponse.decode(message.value);
  },
  toProto(message: QueryInterestFactorsResponse): Uint8Array {
    return QueryInterestFactorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterestFactorsResponse): QueryInterestFactorsResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.QueryInterestFactorsResponse",
      value: QueryInterestFactorsResponse.encode(message).finish()
    };
  }
};
function createBaseDepositResponse(): DepositResponse {
  return {
    depositor: "",
    amount: [],
    index: []
  };
}
export const DepositResponse = {
  typeUrl: "/kava.hard.v1beta1.DepositResponse",
  encode(message: DepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.index) {
      SupplyInterestFactorResponse.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DepositResponse {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SupplyInterestFactorResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DepositResponse>): DepositResponse {
    const message = createBaseDepositResponse();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.index = object.index?.map(e => SupplyInterestFactorResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositResponseAmino): DepositResponse {
    const message = createBaseDepositResponse();
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    message.index = object.index?.map(e => SupplyInterestFactorResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DepositResponse): DepositResponseAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    if (message.index) {
      obj.index = message.index.map(e => e ? SupplyInterestFactorResponse.toAmino(e) : undefined);
    } else {
      obj.index = [];
    }
    return obj;
  },
  fromAminoMsg(object: DepositResponseAminoMsg): DepositResponse {
    return DepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositResponseProtoMsg): DepositResponse {
    return DepositResponse.decode(message.value);
  },
  toProto(message: DepositResponse): Uint8Array {
    return DepositResponse.encode(message).finish();
  },
  toProtoMsg(message: DepositResponse): DepositResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.DepositResponse",
      value: DepositResponse.encode(message).finish()
    };
  }
};
function createBaseSupplyInterestFactorResponse(): SupplyInterestFactorResponse {
  return {
    denom: "",
    value: ""
  };
}
export const SupplyInterestFactorResponse = {
  typeUrl: "/kava.hard.v1beta1.SupplyInterestFactorResponse",
  encode(message: SupplyInterestFactorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): SupplyInterestFactorResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<SupplyInterestFactorResponse>): SupplyInterestFactorResponse {
    const message = createBaseSupplyInterestFactorResponse();
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: SupplyInterestFactorResponseAmino): SupplyInterestFactorResponse {
    const message = createBaseSupplyInterestFactorResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: SupplyInterestFactorResponse): SupplyInterestFactorResponseAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: SupplyInterestFactorResponseAminoMsg): SupplyInterestFactorResponse {
    return SupplyInterestFactorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplyInterestFactorResponseProtoMsg): SupplyInterestFactorResponse {
    return SupplyInterestFactorResponse.decode(message.value);
  },
  toProto(message: SupplyInterestFactorResponse): Uint8Array {
    return SupplyInterestFactorResponse.encode(message).finish();
  },
  toProtoMsg(message: SupplyInterestFactorResponse): SupplyInterestFactorResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.SupplyInterestFactorResponse",
      value: SupplyInterestFactorResponse.encode(message).finish()
    };
  }
};
function createBaseBorrowResponse(): BorrowResponse {
  return {
    borrower: "",
    amount: [],
    index: []
  };
}
export const BorrowResponse = {
  typeUrl: "/kava.hard.v1beta1.BorrowResponse",
  encode(message: BorrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.index) {
      BorrowInterestFactorResponse.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BorrowResponse {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      index: Array.isArray(object?.index) ? object.index.map((e: any) => BorrowInterestFactorResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<BorrowResponse>): BorrowResponse {
    const message = createBaseBorrowResponse();
    message.borrower = object.borrower ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.index = object.index?.map(e => BorrowInterestFactorResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BorrowResponseAmino): BorrowResponse {
    const message = createBaseBorrowResponse();
    if (object.borrower !== undefined && object.borrower !== null) {
      message.borrower = object.borrower;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    message.index = object.index?.map(e => BorrowInterestFactorResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BorrowResponse): BorrowResponseAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    if (message.index) {
      obj.index = message.index.map(e => e ? BorrowInterestFactorResponse.toAmino(e) : undefined);
    } else {
      obj.index = [];
    }
    return obj;
  },
  fromAminoMsg(object: BorrowResponseAminoMsg): BorrowResponse {
    return BorrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BorrowResponseProtoMsg): BorrowResponse {
    return BorrowResponse.decode(message.value);
  },
  toProto(message: BorrowResponse): Uint8Array {
    return BorrowResponse.encode(message).finish();
  },
  toProtoMsg(message: BorrowResponse): BorrowResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.BorrowResponse",
      value: BorrowResponse.encode(message).finish()
    };
  }
};
function createBaseBorrowInterestFactorResponse(): BorrowInterestFactorResponse {
  return {
    denom: "",
    value: ""
  };
}
export const BorrowInterestFactorResponse = {
  typeUrl: "/kava.hard.v1beta1.BorrowInterestFactorResponse",
  encode(message: BorrowInterestFactorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): BorrowInterestFactorResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<BorrowInterestFactorResponse>): BorrowInterestFactorResponse {
    const message = createBaseBorrowInterestFactorResponse();
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: BorrowInterestFactorResponseAmino): BorrowInterestFactorResponse {
    const message = createBaseBorrowInterestFactorResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: BorrowInterestFactorResponse): BorrowInterestFactorResponseAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: BorrowInterestFactorResponseAminoMsg): BorrowInterestFactorResponse {
    return BorrowInterestFactorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BorrowInterestFactorResponseProtoMsg): BorrowInterestFactorResponse {
    return BorrowInterestFactorResponse.decode(message.value);
  },
  toProto(message: BorrowInterestFactorResponse): Uint8Array {
    return BorrowInterestFactorResponse.encode(message).finish();
  },
  toProtoMsg(message: BorrowInterestFactorResponse): BorrowInterestFactorResponseProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.BorrowInterestFactorResponse",
      value: BorrowInterestFactorResponse.encode(message).finish()
    };
  }
};
function createBaseMoneyMarketInterestRate(): MoneyMarketInterestRate {
  return {
    denom: "",
    supplyInterestRate: "",
    borrowInterestRate: ""
  };
}
export const MoneyMarketInterestRate = {
  typeUrl: "/kava.hard.v1beta1.MoneyMarketInterestRate",
  encode(message: MoneyMarketInterestRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.supplyInterestRate !== "") {
      writer.uint32(18).string(message.supplyInterestRate);
    }
    if (message.borrowInterestRate !== "") {
      writer.uint32(26).string(message.borrowInterestRate);
    }
    return writer;
  },
  fromJSON(object: any): MoneyMarketInterestRate {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      supplyInterestRate: isSet(object.supplyInterestRate) ? String(object.supplyInterestRate) : "",
      borrowInterestRate: isSet(object.borrowInterestRate) ? String(object.borrowInterestRate) : ""
    };
  },
  fromPartial(object: Partial<MoneyMarketInterestRate>): MoneyMarketInterestRate {
    const message = createBaseMoneyMarketInterestRate();
    message.denom = object.denom ?? "";
    message.supplyInterestRate = object.supplyInterestRate ?? "";
    message.borrowInterestRate = object.borrowInterestRate ?? "";
    return message;
  },
  fromAmino(object: MoneyMarketInterestRateAmino): MoneyMarketInterestRate {
    const message = createBaseMoneyMarketInterestRate();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.supply_interest_rate !== undefined && object.supply_interest_rate !== null) {
      message.supplyInterestRate = object.supply_interest_rate;
    }
    if (object.borrow_interest_rate !== undefined && object.borrow_interest_rate !== null) {
      message.borrowInterestRate = object.borrow_interest_rate;
    }
    return message;
  },
  toAmino(message: MoneyMarketInterestRate): MoneyMarketInterestRateAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.supply_interest_rate = message.supplyInterestRate;
    obj.borrow_interest_rate = message.borrowInterestRate;
    return obj;
  },
  fromAminoMsg(object: MoneyMarketInterestRateAminoMsg): MoneyMarketInterestRate {
    return MoneyMarketInterestRate.fromAmino(object.value);
  },
  fromProtoMsg(message: MoneyMarketInterestRateProtoMsg): MoneyMarketInterestRate {
    return MoneyMarketInterestRate.decode(message.value);
  },
  toProto(message: MoneyMarketInterestRate): Uint8Array {
    return MoneyMarketInterestRate.encode(message).finish();
  },
  toProtoMsg(message: MoneyMarketInterestRate): MoneyMarketInterestRateProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.MoneyMarketInterestRate",
      value: MoneyMarketInterestRate.encode(message).finish()
    };
  }
};
function createBaseInterestFactor(): InterestFactor {
  return {
    denom: "",
    borrowInterestFactor: "",
    supplyInterestFactor: ""
  };
}
export const InterestFactor = {
  typeUrl: "/kava.hard.v1beta1.InterestFactor",
  encode(message: InterestFactor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.borrowInterestFactor !== "") {
      writer.uint32(18).string(message.borrowInterestFactor);
    }
    if (message.supplyInterestFactor !== "") {
      writer.uint32(26).string(message.supplyInterestFactor);
    }
    return writer;
  },
  fromJSON(object: any): InterestFactor {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      borrowInterestFactor: isSet(object.borrowInterestFactor) ? String(object.borrowInterestFactor) : "",
      supplyInterestFactor: isSet(object.supplyInterestFactor) ? String(object.supplyInterestFactor) : ""
    };
  },
  fromPartial(object: Partial<InterestFactor>): InterestFactor {
    const message = createBaseInterestFactor();
    message.denom = object.denom ?? "";
    message.borrowInterestFactor = object.borrowInterestFactor ?? "";
    message.supplyInterestFactor = object.supplyInterestFactor ?? "";
    return message;
  },
  fromAmino(object: InterestFactorAmino): InterestFactor {
    const message = createBaseInterestFactor();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.borrow_interest_factor !== undefined && object.borrow_interest_factor !== null) {
      message.borrowInterestFactor = object.borrow_interest_factor;
    }
    if (object.supply_interest_factor !== undefined && object.supply_interest_factor !== null) {
      message.supplyInterestFactor = object.supply_interest_factor;
    }
    return message;
  },
  toAmino(message: InterestFactor): InterestFactorAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.borrow_interest_factor = message.borrowInterestFactor;
    obj.supply_interest_factor = message.supplyInterestFactor;
    return obj;
  },
  fromAminoMsg(object: InterestFactorAminoMsg): InterestFactor {
    return InterestFactor.fromAmino(object.value);
  },
  fromProtoMsg(message: InterestFactorProtoMsg): InterestFactor {
    return InterestFactor.decode(message.value);
  },
  toProto(message: InterestFactor): Uint8Array {
    return InterestFactor.encode(message).finish();
  },
  toProtoMsg(message: InterestFactor): InterestFactorProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.InterestFactor",
      value: InterestFactor.encode(message).finish()
    };
  }
};