import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllDistributionsRequest, QueryAllDistributionsResponse, QueryRecordsByDistributionNameRequest, QueryRecordsByDistributionNameResponse, QueryRecordsByRecipientAddrRequest, QueryRecordsByRecipientAddrResponse, QueryClaimsByTypeRequest, QueryClaimsResponse } from "./query";
export interface Query {
  allDistributions(request?: QueryAllDistributionsRequest): Promise<QueryAllDistributionsResponse>;
  recordsByDistributionName(request: QueryRecordsByDistributionNameRequest): Promise<QueryRecordsByDistributionNameResponse>;
  recordsByRecipient(request: QueryRecordsByRecipientAddrRequest): Promise<QueryRecordsByRecipientAddrResponse>;
  claimsByType(request: QueryClaimsByTypeRequest): Promise<QueryClaimsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allDistributions = this.allDistributions.bind(this);
    this.recordsByDistributionName = this.recordsByDistributionName.bind(this);
    this.recordsByRecipient = this.recordsByRecipient.bind(this);
    this.claimsByType = this.claimsByType.bind(this);
  }
  allDistributions(request: QueryAllDistributionsRequest = {}): Promise<QueryAllDistributionsResponse> {
    const data = QueryAllDistributionsRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.dispensation.v1.Query", "AllDistributions", data);
    return promise.then(data => QueryAllDistributionsResponse.decode(new BinaryReader(data)));
  }
  recordsByDistributionName(request: QueryRecordsByDistributionNameRequest): Promise<QueryRecordsByDistributionNameResponse> {
    const data = QueryRecordsByDistributionNameRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.dispensation.v1.Query", "RecordsByDistributionName", data);
    return promise.then(data => QueryRecordsByDistributionNameResponse.decode(new BinaryReader(data)));
  }
  recordsByRecipient(request: QueryRecordsByRecipientAddrRequest): Promise<QueryRecordsByRecipientAddrResponse> {
    const data = QueryRecordsByRecipientAddrRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.dispensation.v1.Query", "RecordsByRecipient", data);
    return promise.then(data => QueryRecordsByRecipientAddrResponse.decode(new BinaryReader(data)));
  }
  claimsByType(request: QueryClaimsByTypeRequest): Promise<QueryClaimsResponse> {
    const data = QueryClaimsByTypeRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.dispensation.v1.Query", "ClaimsByType", data);
    return promise.then(data => QueryClaimsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allDistributions(request?: QueryAllDistributionsRequest): Promise<QueryAllDistributionsResponse> {
      return queryService.allDistributions(request);
    },
    recordsByDistributionName(request: QueryRecordsByDistributionNameRequest): Promise<QueryRecordsByDistributionNameResponse> {
      return queryService.recordsByDistributionName(request);
    },
    recordsByRecipient(request: QueryRecordsByRecipientAddrRequest): Promise<QueryRecordsByRecipientAddrResponse> {
      return queryService.recordsByRecipient(request);
    },
    claimsByType(request: QueryClaimsByTypeRequest): Promise<QueryClaimsResponse> {
      return queryService.claimsByType(request);
    }
  };
};