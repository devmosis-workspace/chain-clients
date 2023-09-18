import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDomainRequest, QueryDomainResponse, QueryDomainAccountsRequest, QueryDomainAccountsResponse, QueryStarnameRequest, QueryStarnameResponse, QueryOwnerAccountsRequest, QueryOwnerAccountsResponse, QueryOwnerDomainsRequest, QueryOwnerDomainsResponse, QueryResourceAccountsRequest, QueryResourceAccountsResponse, QueryBrokerAccountsRequest, QueryBrokerAccountsResponse, QueryBrokerDomainsRequest, QueryBrokerDomainsResponse, QueryYieldRequest, QueryYieldResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Domain gets a starname's domain info. */
  domain(request: QueryDomainRequest): Promise<QueryDomainResponse>;
  /** DomainAccounts gets accounts associated with a given domain. */
  domainAccounts(request: QueryDomainAccountsRequest): Promise<QueryDomainAccountsResponse>;
  /** Starname gets all the information associated with a starname. */
  starname(request: QueryStarnameRequest): Promise<QueryStarnameResponse>;
  /** OwnerAccounts gets accounts associated with a given owner. */
  ownerAccounts(request: QueryOwnerAccountsRequest): Promise<QueryOwnerAccountsResponse>;
  /** OwnerDomains gets domains associated with a given owner. */
  ownerDomains(request: QueryOwnerDomainsRequest): Promise<QueryOwnerDomainsResponse>;
  /** ResourceAccounts gets accounts associated with a given resource. */
  resourceAccounts(request: QueryResourceAccountsRequest): Promise<QueryResourceAccountsResponse>;
  /** BrokerAccounts gets accounts associated with a given broker. */
  brokerAccounts(request: QueryBrokerAccountsRequest): Promise<QueryBrokerAccountsResponse>;
  /** BrokerDomains gets domains associated with a given broker. */
  brokerDomains(request: QueryBrokerDomainsRequest): Promise<QueryBrokerDomainsResponse>;
  /** Yield estimates and retrieves the annualized yield for delegators */
  yield(request?: QueryYieldRequest): Promise<QueryYieldResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.domain = this.domain.bind(this);
    this.domainAccounts = this.domainAccounts.bind(this);
    this.starname = this.starname.bind(this);
    this.ownerAccounts = this.ownerAccounts.bind(this);
    this.ownerDomains = this.ownerDomains.bind(this);
    this.resourceAccounts = this.resourceAccounts.bind(this);
    this.brokerAccounts = this.brokerAccounts.bind(this);
    this.brokerDomains = this.brokerDomains.bind(this);
    this.yield = this.yield.bind(this);
  }
  domain(request: QueryDomainRequest): Promise<QueryDomainResponse> {
    const data = QueryDomainRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Query", "Domain", data);
    return promise.then(data => QueryDomainResponse.decode(new BinaryReader(data)));
  }
  domainAccounts(request: QueryDomainAccountsRequest): Promise<QueryDomainAccountsResponse> {
    const data = QueryDomainAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Query", "DomainAccounts", data);
    return promise.then(data => QueryDomainAccountsResponse.decode(new BinaryReader(data)));
  }
  starname(request: QueryStarnameRequest): Promise<QueryStarnameResponse> {
    const data = QueryStarnameRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Query", "Starname", data);
    return promise.then(data => QueryStarnameResponse.decode(new BinaryReader(data)));
  }
  ownerAccounts(request: QueryOwnerAccountsRequest): Promise<QueryOwnerAccountsResponse> {
    const data = QueryOwnerAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Query", "OwnerAccounts", data);
    return promise.then(data => QueryOwnerAccountsResponse.decode(new BinaryReader(data)));
  }
  ownerDomains(request: QueryOwnerDomainsRequest): Promise<QueryOwnerDomainsResponse> {
    const data = QueryOwnerDomainsRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Query", "OwnerDomains", data);
    return promise.then(data => QueryOwnerDomainsResponse.decode(new BinaryReader(data)));
  }
  resourceAccounts(request: QueryResourceAccountsRequest): Promise<QueryResourceAccountsResponse> {
    const data = QueryResourceAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Query", "ResourceAccounts", data);
    return promise.then(data => QueryResourceAccountsResponse.decode(new BinaryReader(data)));
  }
  brokerAccounts(request: QueryBrokerAccountsRequest): Promise<QueryBrokerAccountsResponse> {
    const data = QueryBrokerAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Query", "BrokerAccounts", data);
    return promise.then(data => QueryBrokerAccountsResponse.decode(new BinaryReader(data)));
  }
  brokerDomains(request: QueryBrokerDomainsRequest): Promise<QueryBrokerDomainsResponse> {
    const data = QueryBrokerDomainsRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Query", "BrokerDomains", data);
    return promise.then(data => QueryBrokerDomainsResponse.decode(new BinaryReader(data)));
  }
  yield(request: QueryYieldRequest = {}): Promise<QueryYieldResponse> {
    const data = QueryYieldRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Query", "Yield", data);
    return promise.then(data => QueryYieldResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    domain(request: QueryDomainRequest): Promise<QueryDomainResponse> {
      return queryService.domain(request);
    },
    domainAccounts(request: QueryDomainAccountsRequest): Promise<QueryDomainAccountsResponse> {
      return queryService.domainAccounts(request);
    },
    starname(request: QueryStarnameRequest): Promise<QueryStarnameResponse> {
      return queryService.starname(request);
    },
    ownerAccounts(request: QueryOwnerAccountsRequest): Promise<QueryOwnerAccountsResponse> {
      return queryService.ownerAccounts(request);
    },
    ownerDomains(request: QueryOwnerDomainsRequest): Promise<QueryOwnerDomainsResponse> {
      return queryService.ownerDomains(request);
    },
    resourceAccounts(request: QueryResourceAccountsRequest): Promise<QueryResourceAccountsResponse> {
      return queryService.resourceAccounts(request);
    },
    brokerAccounts(request: QueryBrokerAccountsRequest): Promise<QueryBrokerAccountsResponse> {
      return queryService.brokerAccounts(request);
    },
    brokerDomains(request: QueryBrokerDomainsRequest): Promise<QueryBrokerDomainsResponse> {
      return queryService.brokerDomains(request);
    },
    yield(request?: QueryYieldRequest): Promise<QueryYieldResponse> {
      return queryService.yield(request);
    }
  };
};