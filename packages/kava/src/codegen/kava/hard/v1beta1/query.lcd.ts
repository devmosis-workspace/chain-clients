import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAccountsRequest, QueryAccountsResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryUnsyncedDepositsRequest, QueryUnsyncedDepositsResponseSDKType, QueryTotalDepositedRequest, QueryTotalDepositedResponseSDKType, QueryBorrowsRequest, QueryBorrowsResponseSDKType, QueryUnsyncedBorrowsRequest, QueryUnsyncedBorrowsResponseSDKType, QueryTotalBorrowedRequest, QueryTotalBorrowedResponseSDKType, QueryInterestRateRequest, QueryInterestRateResponseSDKType, QueryReservesRequest, QueryReservesResponseSDKType, QueryInterestFactorsRequest, QueryInterestFactorsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.accounts = this.accounts.bind(this);
    this.deposits = this.deposits.bind(this);
    this.unsyncedDeposits = this.unsyncedDeposits.bind(this);
    this.totalDeposited = this.totalDeposited.bind(this);
    this.borrows = this.borrows.bind(this);
    this.unsyncedBorrows = this.unsyncedBorrows.bind(this);
    this.totalBorrowed = this.totalBorrowed.bind(this);
    this.interestRate = this.interestRate.bind(this);
    this.reserves = this.reserves.bind(this);
    this.interestFactors = this.interestFactors.bind(this);
  }
  /* Params queries module params. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/hard/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Accounts queries module accounts. */
  async accounts(_params: QueryAccountsRequest = {}): Promise<QueryAccountsResponseSDKType> {
    const endpoint = `kava/hard/v1beta1/accounts`;
    return await this.req.get<QueryAccountsResponseSDKType>(endpoint);
  }
  /* Deposits queries hard deposits. */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/hard/v1beta1/deposits`;
    return await this.req.get<QueryDepositsResponseSDKType>(endpoint, options);
  }
  /* UnsyncedDeposits queries unsynced deposits. */
  async unsyncedDeposits(params: QueryUnsyncedDepositsRequest): Promise<QueryUnsyncedDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/hard/v1beta1/unsynced-deposits`;
    return await this.req.get<QueryUnsyncedDepositsResponseSDKType>(endpoint, options);
  }
  /* TotalDeposited queries total coins deposited to hard liquidity pools. */
  async totalDeposited(params: QueryTotalDepositedRequest): Promise<QueryTotalDepositedResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `kava/hard/v1beta1/total-deposited`;
    return await this.req.get<QueryTotalDepositedResponseSDKType>(endpoint, options);
  }
  /* Borrows queries hard borrows. */
  async borrows(params: QueryBorrowsRequest): Promise<QueryBorrowsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/hard/v1beta1/borrows`;
    return await this.req.get<QueryBorrowsResponseSDKType>(endpoint, options);
  }
  /* UnsyncedBorrows queries unsynced borrows. */
  async unsyncedBorrows(params: QueryUnsyncedBorrowsRequest): Promise<QueryUnsyncedBorrowsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/hard/v1beta1/unsynced-borrows`;
    return await this.req.get<QueryUnsyncedBorrowsResponseSDKType>(endpoint, options);
  }
  /* TotalBorrowed queries total coins borrowed from hard liquidity pools. */
  async totalBorrowed(params: QueryTotalBorrowedRequest): Promise<QueryTotalBorrowedResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `kava/hard/v1beta1/total-borrowed`;
    return await this.req.get<QueryTotalBorrowedResponseSDKType>(endpoint, options);
  }
  /* InterestRate queries the hard module interest rates. */
  async interestRate(params: QueryInterestRateRequest): Promise<QueryInterestRateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `kava/hard/v1beta1/interest-rate`;
    return await this.req.get<QueryInterestRateResponseSDKType>(endpoint, options);
  }
  /* Reserves queries total hard reserve coins. */
  async reserves(params: QueryReservesRequest): Promise<QueryReservesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `kava/hard/v1beta1/reserves`;
    return await this.req.get<QueryReservesResponseSDKType>(endpoint, options);
  }
  /* InterestFactors queries hard module interest factors. */
  async interestFactors(params: QueryInterestFactorsRequest): Promise<QueryInterestFactorsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `kava/hard/v1beta1/interest-factors`;
    return await this.req.get<QueryInterestFactorsResponseSDKType>(endpoint, options);
  }
}