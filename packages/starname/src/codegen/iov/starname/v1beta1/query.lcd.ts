import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDomainRequest, QueryDomainResponseSDKType, QueryDomainAccountsRequest, QueryDomainAccountsResponseSDKType, QueryStarnameRequest, QueryStarnameResponseSDKType, QueryOwnerAccountsRequest, QueryOwnerAccountsResponseSDKType, QueryOwnerDomainsRequest, QueryOwnerDomainsResponseSDKType, QueryResourceAccountsRequest, QueryResourceAccountsResponseSDKType, QueryBrokerAccountsRequest, QueryBrokerAccountsResponseSDKType, QueryBrokerDomainsRequest, QueryBrokerDomainsResponseSDKType, QueryYieldRequest, QueryYieldResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Domain gets a starname's domain info. */
  async domain(params: QueryDomainRequest): Promise<QueryDomainResponseSDKType> {
    const endpoint = `starname/v1beta1/domain/${params.name}`;
    return await this.req.get<QueryDomainResponseSDKType>(endpoint);
  }
  /* DomainAccounts gets accounts associated with a given domain. */
  async domainAccounts(params: QueryDomainAccountsRequest): Promise<QueryDomainAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `starname/v1beta1/accounts/domain/${params.domain}`;
    return await this.req.get<QueryDomainAccountsResponseSDKType>(endpoint, options);
  }
  /* Starname gets all the information associated with a starname. */
  async starname(params: QueryStarnameRequest): Promise<QueryStarnameResponseSDKType> {
    const endpoint = `starname/v1beta1/account/${params.starname}`;
    return await this.req.get<QueryStarnameResponseSDKType>(endpoint);
  }
  /* OwnerAccounts gets accounts associated with a given owner. */
  async ownerAccounts(params: QueryOwnerAccountsRequest): Promise<QueryOwnerAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `starname/v1beta1/accounts/owner/${params.owner}`;
    return await this.req.get<QueryOwnerAccountsResponseSDKType>(endpoint, options);
  }
  /* OwnerDomains gets domains associated with a given owner. */
  async ownerDomains(params: QueryOwnerDomainsRequest): Promise<QueryOwnerDomainsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `starname/v1beta1/domains/owner/${params.owner}`;
    return await this.req.get<QueryOwnerDomainsResponseSDKType>(endpoint, options);
  }
  /* ResourceAccounts gets accounts associated with a given resource. */
  async resourceAccounts(params: QueryResourceAccountsRequest): Promise<QueryResourceAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `starname/v1beta1/accounts/resource/${params.uri}/${params.resource}`;
    return await this.req.get<QueryResourceAccountsResponseSDKType>(endpoint, options);
  }
  /* BrokerAccounts gets accounts associated with a given broker. */
  async brokerAccounts(params: QueryBrokerAccountsRequest): Promise<QueryBrokerAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `starname/v1beta1/accounts/broker/${params.broker}`;
    return await this.req.get<QueryBrokerAccountsResponseSDKType>(endpoint, options);
  }
  /* BrokerDomains gets domains associated with a given broker. */
  async brokerDomains(params: QueryBrokerDomainsRequest): Promise<QueryBrokerDomainsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `starname/v1beta1/domains/broker/${params.broker}`;
    return await this.req.get<QueryBrokerDomainsResponseSDKType>(endpoint, options);
  }
  /* Yield estimates and retrieves the annualized yield for delegators */
  async yield(_params: QueryYieldRequest = {}): Promise<QueryYieldResponseSDKType> {
    const endpoint = `starname/v1beta1/yield`;
    return await this.req.get<QueryYieldResponseSDKType>(endpoint);
  }
}