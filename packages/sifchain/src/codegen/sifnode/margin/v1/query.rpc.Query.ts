import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { MTPRequest, MTPResponse, PositionsRequest, PositionsResponse, PositionsForAddressRequest, PositionsForAddressResponse, PositionsByPoolRequest, PositionsByPoolResponse, ParamsRequest, ParamsResponse, StatusRequest, StatusResponse, GetSQParamsRequest, GetSQParamsResponse, WhitelistRequest, WhitelistResponse, IsWhitelistedRequest, IsWhitelistedResponse } from "./query";
export interface Query {
  getMTP(request: MTPRequest): Promise<MTPResponse>;
  getPositions(request?: PositionsRequest): Promise<PositionsResponse>;
  getPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse>;
  getPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse>;
  getParams(request?: ParamsRequest): Promise<ParamsResponse>;
  getStatus(request?: StatusRequest): Promise<StatusResponse>;
  getSQParams(request: GetSQParamsRequest): Promise<GetSQParamsResponse>;
  getWhitelist(request?: WhitelistRequest): Promise<WhitelistResponse>;
  isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getMTP = this.getMTP.bind(this);
    this.getPositions = this.getPositions.bind(this);
    this.getPositionsForAddress = this.getPositionsForAddress.bind(this);
    this.getPositionsByPool = this.getPositionsByPool.bind(this);
    this.getParams = this.getParams.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.getSQParams = this.getSQParams.bind(this);
    this.getWhitelist = this.getWhitelist.bind(this);
    this.isWhitelisted = this.isWhitelisted.bind(this);
  }
  getMTP(request: MTPRequest): Promise<MTPResponse> {
    const data = MTPRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Query", "GetMTP", data);
    return promise.then(data => MTPResponse.decode(new BinaryReader(data)));
  }
  getPositions(request: PositionsRequest = {
    pagination: undefined
  }): Promise<PositionsResponse> {
    const data = PositionsRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Query", "GetPositions", data);
    return promise.then(data => PositionsResponse.decode(new BinaryReader(data)));
  }
  getPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse> {
    const data = PositionsForAddressRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Query", "GetPositionsForAddress", data);
    return promise.then(data => PositionsForAddressResponse.decode(new BinaryReader(data)));
  }
  getPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse> {
    const data = PositionsByPoolRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Query", "GetPositionsByPool", data);
    return promise.then(data => PositionsByPoolResponse.decode(new BinaryReader(data)));
  }
  getParams(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Query", "GetParams", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
  getStatus(request: StatusRequest = {}): Promise<StatusResponse> {
    const data = StatusRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Query", "GetStatus", data);
    return promise.then(data => StatusResponse.decode(new BinaryReader(data)));
  }
  getSQParams(request: GetSQParamsRequest): Promise<GetSQParamsResponse> {
    const data = GetSQParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Query", "GetSQParams", data);
    return promise.then(data => GetSQParamsResponse.decode(new BinaryReader(data)));
  }
  getWhitelist(request: WhitelistRequest = {
    pagination: undefined
  }): Promise<WhitelistResponse> {
    const data = WhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Query", "GetWhitelist", data);
    return promise.then(data => WhitelistResponse.decode(new BinaryReader(data)));
  }
  isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse> {
    const data = IsWhitelistedRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Query", "IsWhitelisted", data);
    return promise.then(data => IsWhitelistedResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    getMTP(request: MTPRequest): Promise<MTPResponse> {
      return queryService.getMTP(request);
    },
    getPositions(request?: PositionsRequest): Promise<PositionsResponse> {
      return queryService.getPositions(request);
    },
    getPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse> {
      return queryService.getPositionsForAddress(request);
    },
    getPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse> {
      return queryService.getPositionsByPool(request);
    },
    getParams(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.getParams(request);
    },
    getStatus(request?: StatusRequest): Promise<StatusResponse> {
      return queryService.getStatus(request);
    },
    getSQParams(request: GetSQParamsRequest): Promise<GetSQParamsResponse> {
      return queryService.getSQParams(request);
    },
    getWhitelist(request?: WhitelistRequest): Promise<WhitelistResponse> {
      return queryService.getWhitelist(request);
    },
    isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse> {
      return queryService.isWhitelisted(request);
    }
  };
};