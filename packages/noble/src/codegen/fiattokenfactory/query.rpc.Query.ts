import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBlacklistedRequest, QueryGetBlacklistedResponse, QueryAllBlacklistedRequest, QueryAllBlacklistedResponse, QueryGetPausedRequest, QueryGetPausedResponse, QueryGetMasterMinterRequest, QueryGetMasterMinterResponse, QueryGetMintersRequest, QueryGetMintersResponse, QueryAllMintersRequest, QueryAllMintersResponse, QueryGetPauserRequest, QueryGetPauserResponse, QueryGetBlacklisterRequest, QueryGetBlacklisterResponse, QueryGetOwnerRequest, QueryGetOwnerResponse, QueryGetMinterControllerRequest, QueryGetMinterControllerResponse, QueryAllMinterControllerRequest, QueryAllMinterControllerResponse, QueryGetMintingDenomRequest, QueryGetMintingDenomResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Blacklisted by index. */
  blacklisted(request: QueryGetBlacklistedRequest): Promise<QueryGetBlacklistedResponse>;
  /** Queries a list of Blacklisted items. */
  blacklistedAll(request?: QueryAllBlacklistedRequest): Promise<QueryAllBlacklistedResponse>;
  /** Queries a Paused by index. */
  paused(request?: QueryGetPausedRequest): Promise<QueryGetPausedResponse>;
  /** Queries a MasterMinter by index. */
  masterMinter(request?: QueryGetMasterMinterRequest): Promise<QueryGetMasterMinterResponse>;
  /** Queries a Minters by index. */
  minters(request: QueryGetMintersRequest): Promise<QueryGetMintersResponse>;
  /** Queries a list of Minters items. */
  mintersAll(request?: QueryAllMintersRequest): Promise<QueryAllMintersResponse>;
  /** Queries a Pauser by index. */
  pauser(request?: QueryGetPauserRequest): Promise<QueryGetPauserResponse>;
  /** Queries a Blacklister by index. */
  blacklister(request?: QueryGetBlacklisterRequest): Promise<QueryGetBlacklisterResponse>;
  /** Queries a Owner by index. */
  owner(request?: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse>;
  /** Queries a MinterController by index. */
  minterController(request: QueryGetMinterControllerRequest): Promise<QueryGetMinterControllerResponse>;
  /** Queries a list of MinterController items. */
  minterControllerAll(request?: QueryAllMinterControllerRequest): Promise<QueryAllMinterControllerResponse>;
  /** Queries a MintingDenom by index. */
  mintingDenom(request?: QueryGetMintingDenomRequest): Promise<QueryGetMintingDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.blacklisted = this.blacklisted.bind(this);
    this.blacklistedAll = this.blacklistedAll.bind(this);
    this.paused = this.paused.bind(this);
    this.masterMinter = this.masterMinter.bind(this);
    this.minters = this.minters.bind(this);
    this.mintersAll = this.mintersAll.bind(this);
    this.pauser = this.pauser.bind(this);
    this.blacklister = this.blacklister.bind(this);
    this.owner = this.owner.bind(this);
    this.minterController = this.minterController.bind(this);
    this.minterControllerAll = this.minterControllerAll.bind(this);
    this.mintingDenom = this.mintingDenom.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  blacklisted(request: QueryGetBlacklistedRequest): Promise<QueryGetBlacklistedResponse> {
    const data = QueryGetBlacklistedRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "Blacklisted", data);
    return promise.then(data => QueryGetBlacklistedResponse.decode(new _m0.Reader(data)));
  }
  blacklistedAll(request: QueryAllBlacklistedRequest = {
    pagination: undefined
  }): Promise<QueryAllBlacklistedResponse> {
    const data = QueryAllBlacklistedRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "BlacklistedAll", data);
    return promise.then(data => QueryAllBlacklistedResponse.decode(new _m0.Reader(data)));
  }
  paused(request: QueryGetPausedRequest = {}): Promise<QueryGetPausedResponse> {
    const data = QueryGetPausedRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "Paused", data);
    return promise.then(data => QueryGetPausedResponse.decode(new _m0.Reader(data)));
  }
  masterMinter(request: QueryGetMasterMinterRequest = {}): Promise<QueryGetMasterMinterResponse> {
    const data = QueryGetMasterMinterRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "MasterMinter", data);
    return promise.then(data => QueryGetMasterMinterResponse.decode(new _m0.Reader(data)));
  }
  minters(request: QueryGetMintersRequest): Promise<QueryGetMintersResponse> {
    const data = QueryGetMintersRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "Minters", data);
    return promise.then(data => QueryGetMintersResponse.decode(new _m0.Reader(data)));
  }
  mintersAll(request: QueryAllMintersRequest = {
    pagination: undefined
  }): Promise<QueryAllMintersResponse> {
    const data = QueryAllMintersRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "MintersAll", data);
    return promise.then(data => QueryAllMintersResponse.decode(new _m0.Reader(data)));
  }
  pauser(request: QueryGetPauserRequest = {}): Promise<QueryGetPauserResponse> {
    const data = QueryGetPauserRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "Pauser", data);
    return promise.then(data => QueryGetPauserResponse.decode(new _m0.Reader(data)));
  }
  blacklister(request: QueryGetBlacklisterRequest = {}): Promise<QueryGetBlacklisterResponse> {
    const data = QueryGetBlacklisterRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "Blacklister", data);
    return promise.then(data => QueryGetBlacklisterResponse.decode(new _m0.Reader(data)));
  }
  owner(request: QueryGetOwnerRequest = {}): Promise<QueryGetOwnerResponse> {
    const data = QueryGetOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "Owner", data);
    return promise.then(data => QueryGetOwnerResponse.decode(new _m0.Reader(data)));
  }
  minterController(request: QueryGetMinterControllerRequest): Promise<QueryGetMinterControllerResponse> {
    const data = QueryGetMinterControllerRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "MinterController", data);
    return promise.then(data => QueryGetMinterControllerResponse.decode(new _m0.Reader(data)));
  }
  minterControllerAll(request: QueryAllMinterControllerRequest = {
    pagination: undefined
  }): Promise<QueryAllMinterControllerResponse> {
    const data = QueryAllMinterControllerRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "MinterControllerAll", data);
    return promise.then(data => QueryAllMinterControllerResponse.decode(new _m0.Reader(data)));
  }
  mintingDenom(request: QueryGetMintingDenomRequest = {}): Promise<QueryGetMintingDenomResponse> {
    const data = QueryGetMintingDenomRequest.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Query", "MintingDenom", data);
    return promise.then(data => QueryGetMintingDenomResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    blacklisted(request: QueryGetBlacklistedRequest): Promise<QueryGetBlacklistedResponse> {
      return queryService.blacklisted(request);
    },
    blacklistedAll(request?: QueryAllBlacklistedRequest): Promise<QueryAllBlacklistedResponse> {
      return queryService.blacklistedAll(request);
    },
    paused(request?: QueryGetPausedRequest): Promise<QueryGetPausedResponse> {
      return queryService.paused(request);
    },
    masterMinter(request?: QueryGetMasterMinterRequest): Promise<QueryGetMasterMinterResponse> {
      return queryService.masterMinter(request);
    },
    minters(request: QueryGetMintersRequest): Promise<QueryGetMintersResponse> {
      return queryService.minters(request);
    },
    mintersAll(request?: QueryAllMintersRequest): Promise<QueryAllMintersResponse> {
      return queryService.mintersAll(request);
    },
    pauser(request?: QueryGetPauserRequest): Promise<QueryGetPauserResponse> {
      return queryService.pauser(request);
    },
    blacklister(request?: QueryGetBlacklisterRequest): Promise<QueryGetBlacklisterResponse> {
      return queryService.blacklister(request);
    },
    owner(request?: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse> {
      return queryService.owner(request);
    },
    minterController(request: QueryGetMinterControllerRequest): Promise<QueryGetMinterControllerResponse> {
      return queryService.minterController(request);
    },
    minterControllerAll(request?: QueryAllMinterControllerRequest): Promise<QueryAllMinterControllerResponse> {
      return queryService.minterControllerAll(request);
    },
    mintingDenom(request?: QueryGetMintingDenomRequest): Promise<QueryGetMintingDenomResponse> {
      return queryService.mintingDenom(request);
    }
  };
};