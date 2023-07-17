import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Domain, DomainSDKType, Account, AccountSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** QueryDomainRequest is the request type for the Query/Domain RPC method. */
export interface QueryDomainRequest {
    /** Name is the name of the domain. */
    name: string;
}
/** QueryDomainRequest is the request type for the Query/Domain RPC method. */
export interface QueryDomainRequestSDKType {
    name: string;
}
/** QueryDomainResponse is the response type for the Query/Domain RPC method. */
export interface QueryDomainResponse {
    /** Domain is the information associated with the domain. */
    domain?: Domain;
}
/** QueryDomainResponse is the response type for the Query/Domain RPC method. */
export interface QueryDomainResponseSDKType {
    domain?: DomainSDKType;
}
/**
 * QueryDomainAccountsRequest is the request type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsRequest {
    /** Domain is the name of the domain. */
    domain: string;
    pagination?: PageRequest;
}
/**
 * QueryDomainAccountsRequest is the request type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsRequestSDKType {
    domain: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDomainAccountsResponse is the response type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsResponse {
    /** Accounts is the accounts associated with the domain. */
    accounts: Account[];
    page?: PageResponse;
}
/**
 * QueryDomainAccountsResponse is the response type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsResponseSDKType {
    accounts: AccountSDKType[];
    page?: PageResponseSDKType;
}
/** QueryStarnameRequest is the request type for the Query/Starname RPC method. */
export interface QueryStarnameRequest {
    /** Starname is the of the form account*domain. */
    starname: string;
}
/** QueryStarnameRequest is the request type for the Query/Starname RPC method. */
export interface QueryStarnameRequestSDKType {
    starname: string;
}
/** QueryStarnameResponse is the response type for the Query/Starname RPC method. */
export interface QueryStarnameResponse {
    /** Account is the information associated with the starname. */
    account?: Account;
}
/** QueryStarnameResponse is the response type for the Query/Starname RPC method. */
export interface QueryStarnameResponseSDKType {
    account?: AccountSDKType;
}
/**
 * QueryOwnerAccountsRequest is the request type for the Query/OwnerAccounts RPC
 * method.
 */
export interface QueryOwnerAccountsRequest {
    /** Owner is the owner of accounts. */
    owner: string;
    pagination?: PageRequest;
}
/**
 * QueryOwnerAccountsRequest is the request type for the Query/OwnerAccounts RPC
 * method.
 */
export interface QueryOwnerAccountsRequestSDKType {
    owner: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryOwnerAccountsResponse is the response type for the Query/OwnerAccounts
 * RPC method.
 */
export interface QueryOwnerAccountsResponse {
    /** Accounts is the accounts associated with owner. */
    accounts: Account[];
    page?: PageResponse;
}
/**
 * QueryOwnerAccountsResponse is the response type for the Query/OwnerAccounts
 * RPC method.
 */
export interface QueryOwnerAccountsResponseSDKType {
    accounts: AccountSDKType[];
    page?: PageResponseSDKType;
}
/**
 * QueryOwnerDomainsRequest is the request type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsRequest {
    /** Owner is the owner of accounts. */
    owner: string;
    pagination?: PageRequest;
}
/**
 * QueryOwnerDomainsRequest is the request type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsRequestSDKType {
    owner: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryOwnerDomainsResponse is the response type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsResponse {
    /** Accounts is the accounts associated with owner. */
    domains: Domain[];
    page?: PageResponse;
}
/**
 * QueryOwnerDomainsResponse is the response type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsResponseSDKType {
    domains: DomainSDKType[];
    page?: PageResponseSDKType;
}
/**
 * QueryResourceAccountsRequest is the request type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsRequest {
    /**
     * Uri is the uri of the resource. query.pb.gw.to doesn't respect
     * gogoproto.customname, so we're stuck with Uri.
     */
    uri: string;
    /** Resource is the resource of interest. */
    resource: string;
    pagination?: PageRequest;
}
/**
 * QueryResourceAccountsRequest is the request type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsRequestSDKType {
    uri: string;
    resource: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryResourceAccountsResponse is the response type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsResponse {
    /** Accounts are the accounts associated with the resource. */
    accounts: Account[];
    page?: PageResponse;
}
/**
 * QueryResourceAccountsResponse is the response type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsResponseSDKType {
    accounts: AccountSDKType[];
    page?: PageResponseSDKType;
}
/**
 * QueryBrokerAccountsRequest is the request type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsRequest {
    /** Broker is the broker of accounts. */
    broker: string;
    pagination?: PageRequest;
}
/**
 * QueryBrokerAccountsRequest is the request type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsRequestSDKType {
    broker: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryBrokerAccountsResponse is the response type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsResponse {
    /** Accounts is the accounts associated with broker. */
    accounts: Account[];
    page?: PageResponse;
}
/**
 * QueryBrokerAccountsResponse is the response type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsResponseSDKType {
    accounts: AccountSDKType[];
    page?: PageResponseSDKType;
}
/**
 * QueryBrokerDomainsRequest is the request type for the Query/BrokerDomains RPC
 * method.
 */
export interface QueryBrokerDomainsRequest {
    /** Broker is the broker of accounts. */
    broker: string;
    pagination?: PageRequest;
}
/**
 * QueryBrokerDomainsRequest is the request type for the Query/BrokerDomains RPC
 * method.
 */
export interface QueryBrokerDomainsRequestSDKType {
    broker: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryBrokerDomainsResponse is the response type for the Query/BrokerDomains
 * RPC method.
 */
export interface QueryBrokerDomainsResponse {
    /** Accounts is the accounts associated with broker. */
    domains: Domain[];
    page?: PageResponse;
}
/**
 * QueryBrokerDomainsResponse is the response type for the Query/BrokerDomains
 * RPC method.
 */
export interface QueryBrokerDomainsResponseSDKType {
    domains: DomainSDKType[];
    page?: PageResponseSDKType;
}
/** QueryYieldRequest is the request type for the Query/Yield RPC method. */
export interface QueryYieldRequest {
}
/** QueryYieldRequest is the request type for the Query/Yield RPC method. */
export interface QueryYieldRequestSDKType {
}
/** QueryYieldResponse is the response type for the Query/Yield RPC method. */
export interface QueryYieldResponse {
    yield: string;
}
/** QueryYieldResponse is the response type for the Query/Yield RPC method. */
export interface QueryYieldResponseSDKType {
    yield: string;
}
export declare const QueryDomainRequest: {
    encode(message: QueryDomainRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDomainRequest;
    fromPartial(object: Partial<QueryDomainRequest>): QueryDomainRequest;
};
export declare const QueryDomainResponse: {
    encode(message: QueryDomainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDomainResponse;
    fromPartial(object: Partial<QueryDomainResponse>): QueryDomainResponse;
};
export declare const QueryDomainAccountsRequest: {
    encode(message: QueryDomainAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDomainAccountsRequest;
    fromPartial(object: Partial<QueryDomainAccountsRequest>): QueryDomainAccountsRequest;
};
export declare const QueryDomainAccountsResponse: {
    encode(message: QueryDomainAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDomainAccountsResponse;
    fromPartial(object: Partial<QueryDomainAccountsResponse>): QueryDomainAccountsResponse;
};
export declare const QueryStarnameRequest: {
    encode(message: QueryStarnameRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStarnameRequest;
    fromPartial(object: Partial<QueryStarnameRequest>): QueryStarnameRequest;
};
export declare const QueryStarnameResponse: {
    encode(message: QueryStarnameResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryStarnameResponse;
    fromPartial(object: Partial<QueryStarnameResponse>): QueryStarnameResponse;
};
export declare const QueryOwnerAccountsRequest: {
    encode(message: QueryOwnerAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOwnerAccountsRequest;
    fromPartial(object: Partial<QueryOwnerAccountsRequest>): QueryOwnerAccountsRequest;
};
export declare const QueryOwnerAccountsResponse: {
    encode(message: QueryOwnerAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOwnerAccountsResponse;
    fromPartial(object: Partial<QueryOwnerAccountsResponse>): QueryOwnerAccountsResponse;
};
export declare const QueryOwnerDomainsRequest: {
    encode(message: QueryOwnerDomainsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOwnerDomainsRequest;
    fromPartial(object: Partial<QueryOwnerDomainsRequest>): QueryOwnerDomainsRequest;
};
export declare const QueryOwnerDomainsResponse: {
    encode(message: QueryOwnerDomainsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOwnerDomainsResponse;
    fromPartial(object: Partial<QueryOwnerDomainsResponse>): QueryOwnerDomainsResponse;
};
export declare const QueryResourceAccountsRequest: {
    encode(message: QueryResourceAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryResourceAccountsRequest;
    fromPartial(object: Partial<QueryResourceAccountsRequest>): QueryResourceAccountsRequest;
};
export declare const QueryResourceAccountsResponse: {
    encode(message: QueryResourceAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryResourceAccountsResponse;
    fromPartial(object: Partial<QueryResourceAccountsResponse>): QueryResourceAccountsResponse;
};
export declare const QueryBrokerAccountsRequest: {
    encode(message: QueryBrokerAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBrokerAccountsRequest;
    fromPartial(object: Partial<QueryBrokerAccountsRequest>): QueryBrokerAccountsRequest;
};
export declare const QueryBrokerAccountsResponse: {
    encode(message: QueryBrokerAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBrokerAccountsResponse;
    fromPartial(object: Partial<QueryBrokerAccountsResponse>): QueryBrokerAccountsResponse;
};
export declare const QueryBrokerDomainsRequest: {
    encode(message: QueryBrokerDomainsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBrokerDomainsRequest;
    fromPartial(object: Partial<QueryBrokerDomainsRequest>): QueryBrokerDomainsRequest;
};
export declare const QueryBrokerDomainsResponse: {
    encode(message: QueryBrokerDomainsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBrokerDomainsResponse;
    fromPartial(object: Partial<QueryBrokerDomainsResponse>): QueryBrokerDomainsResponse;
};
export declare const QueryYieldRequest: {
    encode(_: QueryYieldRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryYieldRequest;
    fromPartial(_: Partial<QueryYieldRequest>): QueryYieldRequest;
};
export declare const QueryYieldResponse: {
    encode(message: QueryYieldResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryYieldResponse;
    fromPartial(object: Partial<QueryYieldResponse>): QueryYieldResponse;
};
