import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryByContractAddressRequest, QueryContractInfoResponse, QueryByCodeIdRequest, QueryContractsByCodeIdResponse, QuerySecretContractRequest, QuerySecretContractResponse, QueryCodeResponse, QueryCodesResponse, QueryCodeHashResponse, QueryContractLabelResponse, QueryByLabelRequest, QueryContractAddressResponse } from "./query";
import { Empty } from "../../../google/protobuf/empty";
/** Query defines the gRPC querier service */
export interface Query {
  /** Query contract info by address */
  contractInfo(request: QueryByContractAddressRequest): Promise<QueryContractInfoResponse>;
  /** Query code info by id */
  contractsByCodeId(request: QueryByCodeIdRequest): Promise<QueryContractsByCodeIdResponse>;
  /** Query secret contract */
  querySecretContract(request: QuerySecretContractRequest): Promise<QuerySecretContractResponse>;
  /** Query a specific contract code by id */
  code(request: QueryByCodeIdRequest): Promise<QueryCodeResponse>;
  /** Query all contract codes on-chain */
  codes(request?: google.protobuf.Empty): Promise<QueryCodesResponse>;
  /** Query code hash by contract address */
  codeHashByContractAddress(request: QueryByContractAddressRequest): Promise<QueryCodeHashResponse>;
  /** Query code hash by code id */
  codeHashByCodeId(request: QueryByCodeIdRequest): Promise<QueryCodeHashResponse>;
  /** Query contract label by address */
  labelByAddress(request: QueryByContractAddressRequest): Promise<QueryContractLabelResponse>;
  /** Query contract address by label */
  addressByLabel(request: QueryByLabelRequest): Promise<QueryContractAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractsByCodeId = this.contractsByCodeId.bind(this);
    this.querySecretContract = this.querySecretContract.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.codeHashByContractAddress = this.codeHashByContractAddress.bind(this);
    this.codeHashByCodeId = this.codeHashByCodeId.bind(this);
    this.labelByAddress = this.labelByAddress.bind(this);
    this.addressByLabel = this.addressByLabel.bind(this);
  }
  contractInfo(request: QueryByContractAddressRequest): Promise<QueryContractInfoResponse> {
    const data = QueryByContractAddressRequest.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Query", "ContractInfo", data);
    return promise.then(data => QueryContractInfoResponse.decode(new _m0.Reader(data)));
  }
  contractsByCodeId(request: QueryByCodeIdRequest): Promise<QueryContractsByCodeIdResponse> {
    const data = QueryByCodeIdRequest.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Query", "ContractsByCodeId", data);
    return promise.then(data => QueryContractsByCodeIdResponse.decode(new _m0.Reader(data)));
  }
  querySecretContract(request: QuerySecretContractRequest): Promise<QuerySecretContractResponse> {
    const data = QuerySecretContractRequest.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Query", "QuerySecretContract", data);
    return promise.then(data => QuerySecretContractResponse.decode(new _m0.Reader(data)));
  }
  code(request: QueryByCodeIdRequest): Promise<QueryCodeResponse> {
    const data = QueryByCodeIdRequest.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new _m0.Reader(data)));
  }
  codes(request: google.protobuf.Empty = {}): Promise<QueryCodesResponse> {
    const data = google.protobuf.Empty.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Query", "Codes", data);
    return promise.then(data => QueryCodesResponse.decode(new _m0.Reader(data)));
  }
  codeHashByContractAddress(request: QueryByContractAddressRequest): Promise<QueryCodeHashResponse> {
    const data = QueryByContractAddressRequest.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Query", "CodeHashByContractAddress", data);
    return promise.then(data => QueryCodeHashResponse.decode(new _m0.Reader(data)));
  }
  codeHashByCodeId(request: QueryByCodeIdRequest): Promise<QueryCodeHashResponse> {
    const data = QueryByCodeIdRequest.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Query", "CodeHashByCodeId", data);
    return promise.then(data => QueryCodeHashResponse.decode(new _m0.Reader(data)));
  }
  labelByAddress(request: QueryByContractAddressRequest): Promise<QueryContractLabelResponse> {
    const data = QueryByContractAddressRequest.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Query", "LabelByAddress", data);
    return promise.then(data => QueryContractLabelResponse.decode(new _m0.Reader(data)));
  }
  addressByLabel(request: QueryByLabelRequest): Promise<QueryContractAddressResponse> {
    const data = QueryByLabelRequest.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Query", "AddressByLabel", data);
    return promise.then(data => QueryContractAddressResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(request: QueryByContractAddressRequest): Promise<QueryContractInfoResponse> {
      return queryService.contractInfo(request);
    },
    contractsByCodeId(request: QueryByCodeIdRequest): Promise<QueryContractsByCodeIdResponse> {
      return queryService.contractsByCodeId(request);
    },
    querySecretContract(request: QuerySecretContractRequest): Promise<QuerySecretContractResponse> {
      return queryService.querySecretContract(request);
    },
    code(request: QueryByCodeIdRequest): Promise<QueryCodeResponse> {
      return queryService.code(request);
    },
    codes(request?: google.protobuf.Empty): Promise<QueryCodesResponse> {
      return queryService.codes(request);
    },
    codeHashByContractAddress(request: QueryByContractAddressRequest): Promise<QueryCodeHashResponse> {
      return queryService.codeHashByContractAddress(request);
    },
    codeHashByCodeId(request: QueryByCodeIdRequest): Promise<QueryCodeHashResponse> {
      return queryService.codeHashByCodeId(request);
    },
    labelByAddress(request: QueryByContractAddressRequest): Promise<QueryContractLabelResponse> {
      return queryService.labelByAddress(request);
    },
    addressByLabel(request: QueryByLabelRequest): Promise<QueryContractAddressResponse> {
      return queryService.addressByLabel(request);
    }
  };
};