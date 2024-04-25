import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.circulatingSupply = this.circulatingSupply.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.circulatingSupplyHARD = this.circulatingSupplyHARD.bind(this);
    this.circulatingSupplyUSDX = this.circulatingSupplyUSDX.bind(this);
    this.circulatingSupplySWP = this.circulatingSupplySWP.bind(this);
    this.totalSupplyHARD = this.totalSupplyHARD.bind(this);
    this.totalSupplyUSDX = this.totalSupplyUSDX.bind(this);
  }
  circulatingSupply(request: QueryCirculatingSupplyRequest = {}): Promise<QueryCirculatingSupplyResponse> {
    const data = QueryCirculatingSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("kava.validatorvesting.v1beta1.Query", "CirculatingSupply", data);
    return promise.then(data => QueryCirculatingSupplyResponse.decode(new BinaryReader(data)));
  }
  totalSupply(request: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("kava.validatorvesting.v1beta1.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
  circulatingSupplyHARD(request: QueryCirculatingSupplyHARDRequest = {}): Promise<QueryCirculatingSupplyHARDResponse> {
    const data = QueryCirculatingSupplyHARDRequest.encode(request).finish();
    const promise = this.rpc.request("kava.validatorvesting.v1beta1.Query", "CirculatingSupplyHARD", data);
    return promise.then(data => QueryCirculatingSupplyHARDResponse.decode(new BinaryReader(data)));
  }
  circulatingSupplyUSDX(request: QueryCirculatingSupplyUSDXRequest = {}): Promise<QueryCirculatingSupplyUSDXResponse> {
    const data = QueryCirculatingSupplyUSDXRequest.encode(request).finish();
    const promise = this.rpc.request("kava.validatorvesting.v1beta1.Query", "CirculatingSupplyUSDX", data);
    return promise.then(data => QueryCirculatingSupplyUSDXResponse.decode(new BinaryReader(data)));
  }
  circulatingSupplySWP(request: QueryCirculatingSupplySWPRequest = {}): Promise<QueryCirculatingSupplySWPResponse> {
    const data = QueryCirculatingSupplySWPRequest.encode(request).finish();
    const promise = this.rpc.request("kava.validatorvesting.v1beta1.Query", "CirculatingSupplySWP", data);
    return promise.then(data => QueryCirculatingSupplySWPResponse.decode(new BinaryReader(data)));
  }
  totalSupplyHARD(request: QueryTotalSupplyHARDRequest = {}): Promise<QueryTotalSupplyHARDResponse> {
    const data = QueryTotalSupplyHARDRequest.encode(request).finish();
    const promise = this.rpc.request("kava.validatorvesting.v1beta1.Query", "TotalSupplyHARD", data);
    return promise.then(data => QueryTotalSupplyHARDResponse.decode(new BinaryReader(data)));
  }
  totalSupplyUSDX(request: QueryTotalSupplyUSDXRequest = {}): Promise<QueryTotalSupplyUSDXResponse> {
    const data = QueryTotalSupplyUSDXRequest.encode(request).finish();
    const promise = this.rpc.request("kava.validatorvesting.v1beta1.Query", "TotalSupplyUSDX", data);
    return promise.then(data => QueryTotalSupplyUSDXResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    circulatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse> {
      return queryService.circulatingSupply(request);
    },
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupply(request);
    },
    circulatingSupplyHARD(request?: QueryCirculatingSupplyHARDRequest): Promise<QueryCirculatingSupplyHARDResponse> {
      return queryService.circulatingSupplyHARD(request);
    },
    circulatingSupplyUSDX(request?: QueryCirculatingSupplyUSDXRequest): Promise<QueryCirculatingSupplyUSDXResponse> {
      return queryService.circulatingSupplyUSDX(request);
    },
    circulatingSupplySWP(request?: QueryCirculatingSupplySWPRequest): Promise<QueryCirculatingSupplySWPResponse> {
      return queryService.circulatingSupplySWP(request);
    },
    totalSupplyHARD(request?: QueryTotalSupplyHARDRequest): Promise<QueryTotalSupplyHARDResponse> {
      return queryService.totalSupplyHARD(request);
    },
    totalSupplyUSDX(request?: QueryTotalSupplyUSDXRequest): Promise<QueryTotalSupplyUSDXResponse> {
      return queryService.totalSupplyUSDX(request);
    }
  };
};