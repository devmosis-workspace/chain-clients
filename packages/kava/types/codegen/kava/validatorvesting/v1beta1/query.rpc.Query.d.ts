import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QueryCirculatingSupplyHARDRequest, QueryCirculatingSupplyHARDResponse, QueryCirculatingSupplyUSDXRequest, QueryCirculatingSupplyUSDXResponse, QueryCirculatingSupplySWPRequest, QueryCirculatingSupplySWPResponse, QueryTotalSupplyHARDRequest, QueryTotalSupplyHARDResponse, QueryTotalSupplyUSDXRequest, QueryTotalSupplyUSDXResponse } from "./query";
/** Query defines the gRPC querier service for validator-vesting module */
export interface Query {
    /** CirculatingSupply returns the total amount of kava tokens in circulation */
    circulatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
    /** TotalSupply returns the total amount of kava tokens */
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /** CirculatingSupplyHARD returns the total amount of hard tokens in circulation */
    circulatingSupplyHARD(request?: QueryCirculatingSupplyHARDRequest): Promise<QueryCirculatingSupplyHARDResponse>;
    /** CirculatingSupplyUSDX returns the total amount of usdx tokens in circulation */
    circulatingSupplyUSDX(request?: QueryCirculatingSupplyUSDXRequest): Promise<QueryCirculatingSupplyUSDXResponse>;
    /** CirculatingSupplySWP returns the total amount of swp tokens in circulation */
    circulatingSupplySWP(request?: QueryCirculatingSupplySWPRequest): Promise<QueryCirculatingSupplySWPResponse>;
    /** TotalSupplyHARD returns the total amount of hard tokens */
    totalSupplyHARD(request?: QueryTotalSupplyHARDRequest): Promise<QueryTotalSupplyHARDResponse>;
    /** TotalSupplyUSDX returns the total amount of usdx tokens */
    totalSupplyUSDX(request?: QueryTotalSupplyUSDXRequest): Promise<QueryTotalSupplyUSDXResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    circulatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    circulatingSupplyHARD(request?: QueryCirculatingSupplyHARDRequest): Promise<QueryCirculatingSupplyHARDResponse>;
    circulatingSupplyUSDX(request?: QueryCirculatingSupplyUSDXRequest): Promise<QueryCirculatingSupplyUSDXResponse>;
    circulatingSupplySWP(request?: QueryCirculatingSupplySWPRequest): Promise<QueryCirculatingSupplySWPResponse>;
    totalSupplyHARD(request?: QueryTotalSupplyHARDRequest): Promise<QueryTotalSupplyHARDResponse>;
    totalSupplyUSDX(request?: QueryTotalSupplyUSDXRequest): Promise<QueryTotalSupplyUSDXResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    circulatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    circulatingSupplyHARD(request?: QueryCirculatingSupplyHARDRequest): Promise<QueryCirculatingSupplyHARDResponse>;
    circulatingSupplyUSDX(request?: QueryCirculatingSupplyUSDXRequest): Promise<QueryCirculatingSupplyUSDXResponse>;
    circulatingSupplySWP(request?: QueryCirculatingSupplySWPRequest): Promise<QueryCirculatingSupplySWPResponse>;
    totalSupplyHARD(request?: QueryTotalSupplyHARDRequest): Promise<QueryTotalSupplyHARDResponse>;
    totalSupplyUSDX(request?: QueryTotalSupplyUSDXRequest): Promise<QueryTotalSupplyUSDXResponse>;
};
