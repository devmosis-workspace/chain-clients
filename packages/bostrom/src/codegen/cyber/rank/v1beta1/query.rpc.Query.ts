import { PageRequest } from "../../base/query/v1beta1/pagination";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRankRequest, QueryRankResponse, QuerySearchRequest, QuerySearchResponse, QueryIsLinkExistRequest, QueryLinkExistResponse, QueryIsAnyLinkExistRequest, QueryNegentropyPartilceRequest, QueryNegentropyParticleResponse, QueryNegentropyRequest, QueryNegentropyResponse, QueryKarmaRequest, QueryKarmaResponse } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  rank(request: QueryRankRequest): Promise<QueryRankResponse>;
  search(request: QuerySearchRequest): Promise<QuerySearchResponse>;
  backlinks(request: QuerySearchRequest): Promise<QuerySearchResponse>;
  top(request: PageRequest): Promise<QuerySearchResponse>;
  isLinkExist(request: QueryIsLinkExistRequest): Promise<QueryLinkExistResponse>;
  isAnyLinkExist(request: QueryIsAnyLinkExistRequest): Promise<QueryLinkExistResponse>;
  particleNegentropy(request: QueryNegentropyPartilceRequest): Promise<QueryNegentropyParticleResponse>;
  negentropy(request?: QueryNegentropyRequest): Promise<QueryNegentropyResponse>;
  karma(request: QueryKarmaRequest): Promise<QueryKarmaResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.rank = this.rank.bind(this);
    this.search = this.search.bind(this);
    this.backlinks = this.backlinks.bind(this);
    this.top = this.top.bind(this);
    this.isLinkExist = this.isLinkExist.bind(this);
    this.isAnyLinkExist = this.isAnyLinkExist.bind(this);
    this.particleNegentropy = this.particleNegentropy.bind(this);
    this.negentropy = this.negentropy.bind(this);
    this.karma = this.karma.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  rank(request: QueryRankRequest): Promise<QueryRankResponse> {
    const data = QueryRankRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "Rank", data);
    return promise.then(data => QueryRankResponse.decode(new BinaryReader(data)));
  }
  search(request: QuerySearchRequest): Promise<QuerySearchResponse> {
    const data = QuerySearchRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "Search", data);
    return promise.then(data => QuerySearchResponse.decode(new BinaryReader(data)));
  }
  backlinks(request: QuerySearchRequest): Promise<QuerySearchResponse> {
    const data = QuerySearchRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "Backlinks", data);
    return promise.then(data => QuerySearchResponse.decode(new BinaryReader(data)));
  }
  top(request: PageRequest): Promise<QuerySearchResponse> {
    const data = PageRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "Top", data);
    return promise.then(data => QuerySearchResponse.decode(new BinaryReader(data)));
  }
  isLinkExist(request: QueryIsLinkExistRequest): Promise<QueryLinkExistResponse> {
    const data = QueryIsLinkExistRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "IsLinkExist", data);
    return promise.then(data => QueryLinkExistResponse.decode(new BinaryReader(data)));
  }
  isAnyLinkExist(request: QueryIsAnyLinkExistRequest): Promise<QueryLinkExistResponse> {
    const data = QueryIsAnyLinkExistRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "IsAnyLinkExist", data);
    return promise.then(data => QueryLinkExistResponse.decode(new BinaryReader(data)));
  }
  particleNegentropy(request: QueryNegentropyPartilceRequest): Promise<QueryNegentropyParticleResponse> {
    const data = QueryNegentropyPartilceRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "ParticleNegentropy", data);
    return promise.then(data => QueryNegentropyParticleResponse.decode(new BinaryReader(data)));
  }
  negentropy(request: QueryNegentropyRequest = {}): Promise<QueryNegentropyResponse> {
    const data = QueryNegentropyRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "Negentropy", data);
    return promise.then(data => QueryNegentropyResponse.decode(new BinaryReader(data)));
  }
  karma(request: QueryKarmaRequest): Promise<QueryKarmaResponse> {
    const data = QueryKarmaRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.rank.v1beta1.Query", "Karma", data);
    return promise.then(data => QueryKarmaResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    rank(request: QueryRankRequest): Promise<QueryRankResponse> {
      return queryService.rank(request);
    },
    search(request: QuerySearchRequest): Promise<QuerySearchResponse> {
      return queryService.search(request);
    },
    backlinks(request: QuerySearchRequest): Promise<QuerySearchResponse> {
      return queryService.backlinks(request);
    },
    top(request: PageRequest): Promise<QuerySearchResponse> {
      return queryService.top(request);
    },
    isLinkExist(request: QueryIsLinkExistRequest): Promise<QueryLinkExistResponse> {
      return queryService.isLinkExist(request);
    },
    isAnyLinkExist(request: QueryIsAnyLinkExistRequest): Promise<QueryLinkExistResponse> {
      return queryService.isAnyLinkExist(request);
    },
    particleNegentropy(request: QueryNegentropyPartilceRequest): Promise<QueryNegentropyParticleResponse> {
      return queryService.particleNegentropy(request);
    },
    negentropy(request?: QueryNegentropyRequest): Promise<QueryNegentropyResponse> {
      return queryService.negentropy(request);
    },
    karma(request: QueryKarmaRequest): Promise<QueryKarmaResponse> {
      return queryService.karma(request);
    }
  };
};