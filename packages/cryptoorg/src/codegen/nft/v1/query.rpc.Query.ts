import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySupplyRequest, QuerySupplyResponse, QueryOwnerRequest, QueryOwnerResponse, QueryCollectionRequest, QueryCollectionResponse, QueryDenomRequest, QueryDenomResponse, QueryDenomByNameRequest, QueryDenomByNameResponse, QueryDenomsRequest, QueryDenomsResponse, QueryNFTRequest, QueryNFTResponse } from "./query";
/** Query defines the gRPC querier service for NFT module */
export interface Query {
  /** Supply queries the total supply of a given denom or owner */
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /** Owner queries the NFTs of the specified owner */
  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
  /** Collection queries the NFTs of the specified denom */
  collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  /** Denom queries the definition of a given denom */
  denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
  /** DenomByName queries the definition of a given denom by name */
  denomByName(request: QueryDenomByNameRequest): Promise<QueryDenomByNameResponse>;
  /** Denoms queries all the denoms */
  denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  /** NFT queries the NFT for the given denom and token ID */
  nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.supply = this.supply.bind(this);
    this.owner = this.owner.bind(this);
    this.collection = this.collection.bind(this);
    this.denom = this.denom.bind(this);
    this.denomByName = this.denomByName.bind(this);
    this.denoms = this.denoms.bind(this);
    this.nFT = this.nFT.bind(this);
  }
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Query", "Owner", data);
    return promise.then(data => QueryOwnerResponse.decode(new BinaryReader(data)));
  }
  collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Query", "Collection", data);
    return promise.then(data => QueryCollectionResponse.decode(new BinaryReader(data)));
  }
  denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Query", "Denom", data);
    return promise.then(data => QueryDenomResponse.decode(new BinaryReader(data)));
  }
  denomByName(request: QueryDenomByNameRequest): Promise<QueryDenomByNameResponse> {
    const data = QueryDenomByNameRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Query", "DenomByName", data);
    return promise.then(data => QueryDenomByNameResponse.decode(new BinaryReader(data)));
  }
  denoms(request: QueryDenomsRequest = {
    pagination: undefined
  }): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Query", "Denoms", data);
    return promise.then(data => QueryDenomsResponse.decode(new BinaryReader(data)));
  }
  nFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Query", "NFT", data);
    return promise.then(data => QueryNFTResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
      return queryService.supply(request);
    },
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
      return queryService.owner(request);
    },
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
      return queryService.collection(request);
    },
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
      return queryService.denom(request);
    },
    denomByName(request: QueryDenomByNameRequest): Promise<QueryDenomByNameResponse> {
      return queryService.denomByName(request);
    },
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse> {
      return queryService.denoms(request);
    },
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
      return queryService.nFT(request);
    }
  };
};