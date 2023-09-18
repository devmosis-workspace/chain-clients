import { LCDClient } from "@cosmology/lcd";
import { QueryDomainRequest, QueryDomainResponseSDKType, QueryDomainAccountsRequest, QueryDomainAccountsResponseSDKType, QueryStarnameRequest, QueryStarnameResponseSDKType, QueryOwnerAccountsRequest, QueryOwnerAccountsResponseSDKType, QueryOwnerDomainsRequest, QueryOwnerDomainsResponseSDKType, QueryResourceAccountsRequest, QueryResourceAccountsResponseSDKType, QueryBrokerAccountsRequest, QueryBrokerAccountsResponseSDKType, QueryBrokerDomainsRequest, QueryBrokerDomainsResponseSDKType, QueryYieldRequest, QueryYieldResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    domain(params: QueryDomainRequest): Promise<QueryDomainResponseSDKType>;
    domainAccounts(params: QueryDomainAccountsRequest): Promise<QueryDomainAccountsResponseSDKType>;
    starname(params: QueryStarnameRequest): Promise<QueryStarnameResponseSDKType>;
    ownerAccounts(params: QueryOwnerAccountsRequest): Promise<QueryOwnerAccountsResponseSDKType>;
    ownerDomains(params: QueryOwnerDomainsRequest): Promise<QueryOwnerDomainsResponseSDKType>;
    resourceAccounts(params: QueryResourceAccountsRequest): Promise<QueryResourceAccountsResponseSDKType>;
    brokerAccounts(params: QueryBrokerAccountsRequest): Promise<QueryBrokerAccountsResponseSDKType>;
    brokerDomains(params: QueryBrokerDomainsRequest): Promise<QueryBrokerDomainsResponseSDKType>;
    yield(_params?: QueryYieldRequest): Promise<QueryYieldResponseSDKType>;
}
