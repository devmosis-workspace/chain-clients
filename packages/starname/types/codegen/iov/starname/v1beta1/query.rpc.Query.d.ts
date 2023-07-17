import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    domain(request: QueryDomainRequest): Promise<QueryDomainResponse>;
    domainAccounts(request: QueryDomainAccountsRequest): Promise<QueryDomainAccountsResponse>;
    starname(request: QueryStarnameRequest): Promise<QueryStarnameResponse>;
    ownerAccounts(request: QueryOwnerAccountsRequest): Promise<QueryOwnerAccountsResponse>;
    ownerDomains(request: QueryOwnerDomainsRequest): Promise<QueryOwnerDomainsResponse>;
    resourceAccounts(request: QueryResourceAccountsRequest): Promise<QueryResourceAccountsResponse>;
    brokerAccounts(request: QueryBrokerAccountsRequest): Promise<QueryBrokerAccountsResponse>;
    brokerDomains(request: QueryBrokerDomainsRequest): Promise<QueryBrokerDomainsResponse>;
    yield(request?: QueryYieldRequest): Promise<QueryYieldResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    domain(request: QueryDomainRequest): Promise<QueryDomainResponse>;
    domainAccounts(request: QueryDomainAccountsRequest): Promise<QueryDomainAccountsResponse>;
    starname(request: QueryStarnameRequest): Promise<QueryStarnameResponse>;
    ownerAccounts(request: QueryOwnerAccountsRequest): Promise<QueryOwnerAccountsResponse>;
    ownerDomains(request: QueryOwnerDomainsRequest): Promise<QueryOwnerDomainsResponse>;
    resourceAccounts(request: QueryResourceAccountsRequest): Promise<QueryResourceAccountsResponse>;
    brokerAccounts(request: QueryBrokerAccountsRequest): Promise<QueryBrokerAccountsResponse>;
    brokerDomains(request: QueryBrokerDomainsRequest): Promise<QueryBrokerDomainsResponse>;
    yield(request?: QueryYieldRequest): Promise<QueryYieldResponse>;
};
