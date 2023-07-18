import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAccountsRequest, QueryAccountsResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryUnsyncedDepositsRequest, QueryUnsyncedDepositsResponseSDKType, QueryTotalDepositedRequest, QueryTotalDepositedResponseSDKType, QueryBorrowsRequest, QueryBorrowsResponseSDKType, QueryUnsyncedBorrowsRequest, QueryUnsyncedBorrowsResponseSDKType, QueryTotalBorrowedRequest, QueryTotalBorrowedResponseSDKType, QueryInterestRateRequest, QueryInterestRateResponseSDKType, QueryReservesRequest, QueryReservesResponseSDKType, QueryInterestFactorsRequest, QueryInterestFactorsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    accounts(_params?: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
    deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
    unsyncedDeposits(params: QueryUnsyncedDepositsRequest): Promise<QueryUnsyncedDepositsResponseSDKType>;
    totalDeposited(params: QueryTotalDepositedRequest): Promise<QueryTotalDepositedResponseSDKType>;
    borrows(params: QueryBorrowsRequest): Promise<QueryBorrowsResponseSDKType>;
    unsyncedBorrows(params: QueryUnsyncedBorrowsRequest): Promise<QueryUnsyncedBorrowsResponseSDKType>;
    totalBorrowed(params: QueryTotalBorrowedRequest): Promise<QueryTotalBorrowedResponseSDKType>;
    interestRate(params: QueryInterestRateRequest): Promise<QueryInterestRateResponseSDKType>;
    reserves(params: QueryReservesRequest): Promise<QueryReservesResponseSDKType>;
    interestFactors(params: QueryInterestFactorsRequest): Promise<QueryInterestFactorsResponseSDKType>;
}
