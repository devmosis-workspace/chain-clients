import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryRecordsByIdRequest, QueryRecordsByIdResponse, QueryRecordsByFingerprintRequest, QueryRecordsByFingerprintResponse, QueryRecordsByOwnerRequest, QueryRecordsByOwnerResponse, QueryParamsRequest, QueryParamsResponse, QueryGetCidRequest, QueryGetCidResponse, QueryHasCidRequest, QueryHasCidResponse, QueryGetCidSizeRequest, QueryGetCidSizeResponse } from "./query";
export interface Query {
  recordsById(request: QueryRecordsByIdRequest): Promise<QueryRecordsByIdResponse>;
  recordsByFingerprint(request: QueryRecordsByFingerprintRequest): Promise<QueryRecordsByFingerprintResponse>;
  recordsByOwner(request: QueryRecordsByOwnerRequest): Promise<QueryRecordsByOwnerResponse>;
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  getCid(request: QueryGetCidRequest): Promise<QueryGetCidResponse>;
  hasCid(request: QueryHasCidRequest): Promise<QueryHasCidResponse>;
  getCidSize(request: QueryGetCidSizeRequest): Promise<QueryGetCidSizeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.recordsById = this.recordsById.bind(this);
    this.recordsByFingerprint = this.recordsByFingerprint.bind(this);
    this.recordsByOwner = this.recordsByOwner.bind(this);
    this.params = this.params.bind(this);
    this.getCid = this.getCid.bind(this);
    this.hasCid = this.hasCid.bind(this);
    this.getCidSize = this.getCidSize.bind(this);
  }
  recordsById(request: QueryRecordsByIdRequest): Promise<QueryRecordsByIdResponse> {
    const data = QueryRecordsByIdRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Query", "RecordsById", data);
    return promise.then(data => QueryRecordsByIdResponse.decode(new BinaryReader(data)));
  }
  recordsByFingerprint(request: QueryRecordsByFingerprintRequest): Promise<QueryRecordsByFingerprintResponse> {
    const data = QueryRecordsByFingerprintRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Query", "RecordsByFingerprint", data);
    return promise.then(data => QueryRecordsByFingerprintResponse.decode(new BinaryReader(data)));
  }
  recordsByOwner(request: QueryRecordsByOwnerRequest): Promise<QueryRecordsByOwnerResponse> {
    const data = QueryRecordsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Query", "RecordsByOwner", data);
    return promise.then(data => QueryRecordsByOwnerResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  getCid(request: QueryGetCidRequest): Promise<QueryGetCidResponse> {
    const data = QueryGetCidRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Query", "GetCid", data);
    return promise.then(data => QueryGetCidResponse.decode(new BinaryReader(data)));
  }
  hasCid(request: QueryHasCidRequest): Promise<QueryHasCidResponse> {
    const data = QueryHasCidRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Query", "HasCid", data);
    return promise.then(data => QueryHasCidResponse.decode(new BinaryReader(data)));
  }
  getCidSize(request: QueryGetCidSizeRequest): Promise<QueryGetCidSizeResponse> {
    const data = QueryGetCidSizeRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Query", "GetCidSize", data);
    return promise.then(data => QueryGetCidSizeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    recordsById(request: QueryRecordsByIdRequest): Promise<QueryRecordsByIdResponse> {
      return queryService.recordsById(request);
    },
    recordsByFingerprint(request: QueryRecordsByFingerprintRequest): Promise<QueryRecordsByFingerprintResponse> {
      return queryService.recordsByFingerprint(request);
    },
    recordsByOwner(request: QueryRecordsByOwnerRequest): Promise<QueryRecordsByOwnerResponse> {
      return queryService.recordsByOwner(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getCid(request: QueryGetCidRequest): Promise<QueryGetCidResponse> {
      return queryService.getCid(request);
    },
    hasCid(request: QueryHasCidRequest): Promise<QueryHasCidResponse> {
      return queryService.hasCid(request);
    },
    getCidSize(request: QueryGetCidSizeRequest): Promise<QueryGetCidSizeResponse> {
      return queryService.getCidSize(request);
    }
  };
};