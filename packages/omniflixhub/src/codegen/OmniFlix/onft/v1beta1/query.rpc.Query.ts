import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCollectionRequest, QueryCollectionResponse, QueryIBCCollectionRequest, QueryDenomRequest, QueryDenomResponse, QueryIBCDenomRequest, QueryDenomsRequest, QueryDenomsResponse, QueryONFTRequest, QueryONFTResponse, QueryIBCDenomONFTRequest, QueryOwnerONFTsRequest, QueryOwnerONFTsResponse, QueryOwnerIBCDenomONFTsRequest, QuerySupplyRequest, QuerySupplyResponse, QueryIBCDenomSupplyRequest, QueryParamsRequest, QueryParamsResponse } from "./query";
export interface Query {
  collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  iBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse>;
  denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
  iBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse>;
  denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  oNFT(request: QueryONFTRequest): Promise<QueryONFTResponse>;
  iBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse>;
  ownerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse>;
  ownerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse>;
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  iBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse>;
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.collection = this.collection.bind(this);
    this.iBCCollection = this.iBCCollection.bind(this);
    this.denom = this.denom.bind(this);
    this.iBCDenom = this.iBCDenom.bind(this);
    this.denoms = this.denoms.bind(this);
    this.oNFT = this.oNFT.bind(this);
    this.iBCDenomONFT = this.iBCDenomONFT.bind(this);
    this.ownerONFTs = this.ownerONFTs.bind(this);
    this.ownerIBCDenomONFTs = this.ownerIBCDenomONFTs.bind(this);
    this.supply = this.supply.bind(this);
    this.iBCDenomSupply = this.iBCDenomSupply.bind(this);
    this.params = this.params.bind(this);
  }
  collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Collection", data);
    return promise.then(data => QueryCollectionResponse.decode(new BinaryReader(data)));
  }
  iBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryIBCCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCCollection", data);
    return promise.then(data => QueryCollectionResponse.decode(new BinaryReader(data)));
  }
  denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Denom", data);
    return promise.then(data => QueryDenomResponse.decode(new BinaryReader(data)));
  }
  iBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryIBCDenomRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenom", data);
    return promise.then(data => QueryDenomResponse.decode(new BinaryReader(data)));
  }
  denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Denoms", data);
    return promise.then(data => QueryDenomsResponse.decode(new BinaryReader(data)));
  }
  oNFT(request: QueryONFTRequest): Promise<QueryONFTResponse> {
    const data = QueryONFTRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "ONFT", data);
    return promise.then(data => QueryONFTResponse.decode(new BinaryReader(data)));
  }
  iBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse> {
    const data = QueryIBCDenomONFTRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenomONFT", data);
    return promise.then(data => QueryONFTResponse.decode(new BinaryReader(data)));
  }
  ownerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse> {
    const data = QueryOwnerONFTsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "OwnerONFTs", data);
    return promise.then(data => QueryOwnerONFTsResponse.decode(new BinaryReader(data)));
  }
  ownerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse> {
    const data = QueryOwnerIBCDenomONFTsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "OwnerIBCDenomONFTs", data);
    return promise.then(data => QueryOwnerONFTsResponse.decode(new BinaryReader(data)));
  }
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  iBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse> {
    const data = QueryIBCDenomSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenomSupply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
      return queryService.collection(request);
    },
    iBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse> {
      return queryService.iBCCollection(request);
    },
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
      return queryService.denom(request);
    },
    iBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse> {
      return queryService.iBCDenom(request);
    },
    denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
      return queryService.denoms(request);
    },
    oNFT(request: QueryONFTRequest): Promise<QueryONFTResponse> {
      return queryService.oNFT(request);
    },
    iBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse> {
      return queryService.iBCDenomONFT(request);
    },
    ownerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse> {
      return queryService.ownerONFTs(request);
    },
    ownerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse> {
      return queryService.ownerIBCDenomONFTs(request);
    },
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
      return queryService.supply(request);
    },
    iBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse> {
      return queryService.iBCDenomSupply(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};