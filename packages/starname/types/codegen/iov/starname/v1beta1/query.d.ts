import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Domain, DomainAmino, DomainSDKType, Account, AccountAmino, AccountSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** QueryDomainRequest is the request type for the Query/Domain RPC method. */
export interface QueryDomainRequest {
    /** Name is the name of the domain. */
    name: string;
}
export interface QueryDomainRequestProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainRequest";
    value: Uint8Array;
}
/** QueryDomainRequest is the request type for the Query/Domain RPC method. */
export interface QueryDomainRequestAmino {
    /** Name is the name of the domain. */
    name: string;
}
export interface QueryDomainRequestAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryDomainRequest";
    value: QueryDomainRequestAmino;
}
/** QueryDomainRequest is the request type for the Query/Domain RPC method. */
export interface QueryDomainRequestSDKType {
    name: string;
}
/** QueryDomainResponse is the response type for the Query/Domain RPC method. */
export interface QueryDomainResponse {
    /** Domain is the information associated with the domain. */
    domain: Domain;
}
export interface QueryDomainResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainResponse";
    value: Uint8Array;
}
/** QueryDomainResponse is the response type for the Query/Domain RPC method. */
export interface QueryDomainResponseAmino {
    /** Domain is the information associated with the domain. */
    domain?: DomainAmino;
}
export interface QueryDomainResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryDomainResponse";
    value: QueryDomainResponseAmino;
}
/** QueryDomainResponse is the response type for the Query/Domain RPC method. */
export interface QueryDomainResponseSDKType {
    domain: DomainSDKType;
}
/**
 * QueryDomainAccountsRequest is the request type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsRequest {
    /** Domain is the name of the domain. */
    domain: string;
    pagination: PageRequest;
}
export interface QueryDomainAccountsRequestProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryDomainAccountsRequest is the request type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsRequestAmino {
    /** Domain is the name of the domain. */
    domain: string;
    pagination?: PageRequestAmino;
}
export interface QueryDomainAccountsRequestAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryDomainAccountsRequest";
    value: QueryDomainAccountsRequestAmino;
}
/**
 * QueryDomainAccountsRequest is the request type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsRequestSDKType {
    domain: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryDomainAccountsResponse is the response type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsResponse {
    /** Accounts is the accounts associated with the domain. */
    accounts: Account[];
    page: PageResponse;
}
export interface QueryDomainAccountsResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainAccountsResponse";
    value: Uint8Array;
}
/**
 * QueryDomainAccountsResponse is the response type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsResponseAmino {
    /** Accounts is the accounts associated with the domain. */
    accounts: AccountAmino[];
    page?: PageResponseAmino;
}
export interface QueryDomainAccountsResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryDomainAccountsResponse";
    value: QueryDomainAccountsResponseAmino;
}
/**
 * QueryDomainAccountsResponse is the response type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsResponseSDKType {
    accounts: AccountSDKType[];
    page: PageResponseSDKType;
}
/** QueryStarnameRequest is the request type for the Query/Starname RPC method. */
export interface QueryStarnameRequest {
    /** Starname is the of the form account*domain. */
    starname: string;
}
export interface QueryStarnameRequestProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryStarnameRequest";
    value: Uint8Array;
}
/** QueryStarnameRequest is the request type for the Query/Starname RPC method. */
export interface QueryStarnameRequestAmino {
    /** Starname is the of the form account*domain. */
    starname: string;
}
export interface QueryStarnameRequestAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryStarnameRequest";
    value: QueryStarnameRequestAmino;
}
/** QueryStarnameRequest is the request type for the Query/Starname RPC method. */
export interface QueryStarnameRequestSDKType {
    starname: string;
}
/** QueryStarnameResponse is the response type for the Query/Starname RPC method. */
export interface QueryStarnameResponse {
    /** Account is the information associated with the starname. */
    account: Account;
}
export interface QueryStarnameResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryStarnameResponse";
    value: Uint8Array;
}
/** QueryStarnameResponse is the response type for the Query/Starname RPC method. */
export interface QueryStarnameResponseAmino {
    /** Account is the information associated with the starname. */
    account?: AccountAmino;
}
export interface QueryStarnameResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryStarnameResponse";
    value: QueryStarnameResponseAmino;
}
/** QueryStarnameResponse is the response type for the Query/Starname RPC method. */
export interface QueryStarnameResponseSDKType {
    account: AccountSDKType;
}
/**
 * QueryOwnerAccountsRequest is the request type for the Query/OwnerAccounts RPC
 * method.
 */
export interface QueryOwnerAccountsRequest {
    /** Owner is the owner of accounts. */
    owner: string;
    pagination: PageRequest;
}
export interface QueryOwnerAccountsRequestProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryOwnerAccountsRequest is the request type for the Query/OwnerAccounts RPC
 * method.
 */
export interface QueryOwnerAccountsRequestAmino {
    /** Owner is the owner of accounts. */
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryOwnerAccountsRequestAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryOwnerAccountsRequest";
    value: QueryOwnerAccountsRequestAmino;
}
/**
 * QueryOwnerAccountsRequest is the request type for the Query/OwnerAccounts RPC
 * method.
 */
export interface QueryOwnerAccountsRequestSDKType {
    owner: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryOwnerAccountsResponse is the response type for the Query/OwnerAccounts
 * RPC method.
 */
export interface QueryOwnerAccountsResponse {
    /** Accounts is the accounts associated with owner. */
    accounts: Account[];
    page: PageResponse;
}
export interface QueryOwnerAccountsResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerAccountsResponse";
    value: Uint8Array;
}
/**
 * QueryOwnerAccountsResponse is the response type for the Query/OwnerAccounts
 * RPC method.
 */
export interface QueryOwnerAccountsResponseAmino {
    /** Accounts is the accounts associated with owner. */
    accounts: AccountAmino[];
    page?: PageResponseAmino;
}
export interface QueryOwnerAccountsResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryOwnerAccountsResponse";
    value: QueryOwnerAccountsResponseAmino;
}
/**
 * QueryOwnerAccountsResponse is the response type for the Query/OwnerAccounts
 * RPC method.
 */
export interface QueryOwnerAccountsResponseSDKType {
    accounts: AccountSDKType[];
    page: PageResponseSDKType;
}
/**
 * QueryOwnerDomainsRequest is the request type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsRequest {
    /** Owner is the owner of accounts. */
    owner: string;
    pagination: PageRequest;
}
export interface QueryOwnerDomainsRequestProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerDomainsRequest";
    value: Uint8Array;
}
/**
 * QueryOwnerDomainsRequest is the request type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsRequestAmino {
    /** Owner is the owner of accounts. */
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryOwnerDomainsRequestAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryOwnerDomainsRequest";
    value: QueryOwnerDomainsRequestAmino;
}
/**
 * QueryOwnerDomainsRequest is the request type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsRequestSDKType {
    owner: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryOwnerDomainsResponse is the response type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsResponse {
    /** Accounts is the accounts associated with owner. */
    domains: Domain[];
    page: PageResponse;
}
export interface QueryOwnerDomainsResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerDomainsResponse";
    value: Uint8Array;
}
/**
 * QueryOwnerDomainsResponse is the response type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsResponseAmino {
    /** Accounts is the accounts associated with owner. */
    domains: DomainAmino[];
    page?: PageResponseAmino;
}
export interface QueryOwnerDomainsResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryOwnerDomainsResponse";
    value: QueryOwnerDomainsResponseAmino;
}
/**
 * QueryOwnerDomainsResponse is the response type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsResponseSDKType {
    domains: DomainSDKType[];
    page: PageResponseSDKType;
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
    pagination: PageRequest;
}
export interface QueryResourceAccountsRequestProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryResourceAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryResourceAccountsRequest is the request type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsRequestAmino {
    /**
     * Uri is the uri of the resource. query.pb.gw.to doesn't respect
     * gogoproto.customname, so we're stuck with Uri.
     */
    uri: string;
    /** Resource is the resource of interest. */
    resource: string;
    pagination?: PageRequestAmino;
}
export interface QueryResourceAccountsRequestAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryResourceAccountsRequest";
    value: QueryResourceAccountsRequestAmino;
}
/**
 * QueryResourceAccountsRequest is the request type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsRequestSDKType {
    uri: string;
    resource: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryResourceAccountsResponse is the response type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsResponse {
    /** Accounts are the accounts associated with the resource. */
    accounts: Account[];
    page: PageResponse;
}
export interface QueryResourceAccountsResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryResourceAccountsResponse";
    value: Uint8Array;
}
/**
 * QueryResourceAccountsResponse is the response type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsResponseAmino {
    /** Accounts are the accounts associated with the resource. */
    accounts: AccountAmino[];
    page?: PageResponseAmino;
}
export interface QueryResourceAccountsResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryResourceAccountsResponse";
    value: QueryResourceAccountsResponseAmino;
}
/**
 * QueryResourceAccountsResponse is the response type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsResponseSDKType {
    accounts: AccountSDKType[];
    page: PageResponseSDKType;
}
/**
 * QueryBrokerAccountsRequest is the request type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsRequest {
    /** Broker is the broker of accounts. */
    broker: string;
    pagination: PageRequest;
}
export interface QueryBrokerAccountsRequestProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryBrokerAccountsRequest is the request type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsRequestAmino {
    /** Broker is the broker of accounts. */
    broker: string;
    pagination?: PageRequestAmino;
}
export interface QueryBrokerAccountsRequestAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryBrokerAccountsRequest";
    value: QueryBrokerAccountsRequestAmino;
}
/**
 * QueryBrokerAccountsRequest is the request type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsRequestSDKType {
    broker: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryBrokerAccountsResponse is the response type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsResponse {
    /** Accounts is the accounts associated with broker. */
    accounts: Account[];
    page: PageResponse;
}
export interface QueryBrokerAccountsResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerAccountsResponse";
    value: Uint8Array;
}
/**
 * QueryBrokerAccountsResponse is the response type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsResponseAmino {
    /** Accounts is the accounts associated with broker. */
    accounts: AccountAmino[];
    page?: PageResponseAmino;
}
export interface QueryBrokerAccountsResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryBrokerAccountsResponse";
    value: QueryBrokerAccountsResponseAmino;
}
/**
 * QueryBrokerAccountsResponse is the response type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsResponseSDKType {
    accounts: AccountSDKType[];
    page: PageResponseSDKType;
}
/**
 * QueryBrokerDomainsRequest is the request type for the Query/BrokerDomains RPC
 * method.
 */
export interface QueryBrokerDomainsRequest {
    /** Broker is the broker of accounts. */
    broker: string;
    pagination: PageRequest;
}
export interface QueryBrokerDomainsRequestProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerDomainsRequest";
    value: Uint8Array;
}
/**
 * QueryBrokerDomainsRequest is the request type for the Query/BrokerDomains RPC
 * method.
 */
export interface QueryBrokerDomainsRequestAmino {
    /** Broker is the broker of accounts. */
    broker: string;
    pagination?: PageRequestAmino;
}
export interface QueryBrokerDomainsRequestAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryBrokerDomainsRequest";
    value: QueryBrokerDomainsRequestAmino;
}
/**
 * QueryBrokerDomainsRequest is the request type for the Query/BrokerDomains RPC
 * method.
 */
export interface QueryBrokerDomainsRequestSDKType {
    broker: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryBrokerDomainsResponse is the response type for the Query/BrokerDomains
 * RPC method.
 */
export interface QueryBrokerDomainsResponse {
    /** Accounts is the accounts associated with broker. */
    domains: Domain[];
    page: PageResponse;
}
export interface QueryBrokerDomainsResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerDomainsResponse";
    value: Uint8Array;
}
/**
 * QueryBrokerDomainsResponse is the response type for the Query/BrokerDomains
 * RPC method.
 */
export interface QueryBrokerDomainsResponseAmino {
    /** Accounts is the accounts associated with broker. */
    domains: DomainAmino[];
    page?: PageResponseAmino;
}
export interface QueryBrokerDomainsResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryBrokerDomainsResponse";
    value: QueryBrokerDomainsResponseAmino;
}
/**
 * QueryBrokerDomainsResponse is the response type for the Query/BrokerDomains
 * RPC method.
 */
export interface QueryBrokerDomainsResponseSDKType {
    domains: DomainSDKType[];
    page: PageResponseSDKType;
}
/** QueryYieldRequest is the request type for the Query/Yield RPC method. */
export interface QueryYieldRequest {
}
export interface QueryYieldRequestProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryYieldRequest";
    value: Uint8Array;
}
/** QueryYieldRequest is the request type for the Query/Yield RPC method. */
export interface QueryYieldRequestAmino {
}
export interface QueryYieldRequestAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryYieldRequest";
    value: QueryYieldRequestAmino;
}
/** QueryYieldRequest is the request type for the Query/Yield RPC method. */
export interface QueryYieldRequestSDKType {
}
/** QueryYieldResponse is the response type for the Query/Yield RPC method. */
export interface QueryYieldResponse {
    yield: string;
}
export interface QueryYieldResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.QueryYieldResponse";
    value: Uint8Array;
}
/** QueryYieldResponse is the response type for the Query/Yield RPC method. */
export interface QueryYieldResponseAmino {
    yield: string;
}
export interface QueryYieldResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.QueryYieldResponse";
    value: QueryYieldResponseAmino;
}
/** QueryYieldResponse is the response type for the Query/Yield RPC method. */
export interface QueryYieldResponseSDKType {
    yield: string;
}
export declare const QueryDomainRequest: {
    typeUrl: string;
    encode(message: QueryDomainRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDomainRequest;
    fromPartial(object: Partial<QueryDomainRequest>): QueryDomainRequest;
    fromAmino(object: QueryDomainRequestAmino): QueryDomainRequest;
    toAmino(message: QueryDomainRequest): QueryDomainRequestAmino;
    fromAminoMsg(object: QueryDomainRequestAminoMsg): QueryDomainRequest;
    fromProtoMsg(message: QueryDomainRequestProtoMsg): QueryDomainRequest;
    toProto(message: QueryDomainRequest): Uint8Array;
    toProtoMsg(message: QueryDomainRequest): QueryDomainRequestProtoMsg;
};
export declare const QueryDomainResponse: {
    typeUrl: string;
    encode(message: QueryDomainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDomainResponse;
    fromPartial(object: Partial<QueryDomainResponse>): QueryDomainResponse;
    fromAmino(object: QueryDomainResponseAmino): QueryDomainResponse;
    toAmino(message: QueryDomainResponse): QueryDomainResponseAmino;
    fromAminoMsg(object: QueryDomainResponseAminoMsg): QueryDomainResponse;
    fromProtoMsg(message: QueryDomainResponseProtoMsg): QueryDomainResponse;
    toProto(message: QueryDomainResponse): Uint8Array;
    toProtoMsg(message: QueryDomainResponse): QueryDomainResponseProtoMsg;
};
export declare const QueryDomainAccountsRequest: {
    typeUrl: string;
    encode(message: QueryDomainAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDomainAccountsRequest;
    fromPartial(object: Partial<QueryDomainAccountsRequest>): QueryDomainAccountsRequest;
    fromAmino(object: QueryDomainAccountsRequestAmino): QueryDomainAccountsRequest;
    toAmino(message: QueryDomainAccountsRequest): QueryDomainAccountsRequestAmino;
    fromAminoMsg(object: QueryDomainAccountsRequestAminoMsg): QueryDomainAccountsRequest;
    fromProtoMsg(message: QueryDomainAccountsRequestProtoMsg): QueryDomainAccountsRequest;
    toProto(message: QueryDomainAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryDomainAccountsRequest): QueryDomainAccountsRequestProtoMsg;
};
export declare const QueryDomainAccountsResponse: {
    typeUrl: string;
    encode(message: QueryDomainAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDomainAccountsResponse;
    fromPartial(object: Partial<QueryDomainAccountsResponse>): QueryDomainAccountsResponse;
    fromAmino(object: QueryDomainAccountsResponseAmino): QueryDomainAccountsResponse;
    toAmino(message: QueryDomainAccountsResponse): QueryDomainAccountsResponseAmino;
    fromAminoMsg(object: QueryDomainAccountsResponseAminoMsg): QueryDomainAccountsResponse;
    fromProtoMsg(message: QueryDomainAccountsResponseProtoMsg): QueryDomainAccountsResponse;
    toProto(message: QueryDomainAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryDomainAccountsResponse): QueryDomainAccountsResponseProtoMsg;
};
export declare const QueryStarnameRequest: {
    typeUrl: string;
    encode(message: QueryStarnameRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStarnameRequest;
    fromPartial(object: Partial<QueryStarnameRequest>): QueryStarnameRequest;
    fromAmino(object: QueryStarnameRequestAmino): QueryStarnameRequest;
    toAmino(message: QueryStarnameRequest): QueryStarnameRequestAmino;
    fromAminoMsg(object: QueryStarnameRequestAminoMsg): QueryStarnameRequest;
    fromProtoMsg(message: QueryStarnameRequestProtoMsg): QueryStarnameRequest;
    toProto(message: QueryStarnameRequest): Uint8Array;
    toProtoMsg(message: QueryStarnameRequest): QueryStarnameRequestProtoMsg;
};
export declare const QueryStarnameResponse: {
    typeUrl: string;
    encode(message: QueryStarnameResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStarnameResponse;
    fromPartial(object: Partial<QueryStarnameResponse>): QueryStarnameResponse;
    fromAmino(object: QueryStarnameResponseAmino): QueryStarnameResponse;
    toAmino(message: QueryStarnameResponse): QueryStarnameResponseAmino;
    fromAminoMsg(object: QueryStarnameResponseAminoMsg): QueryStarnameResponse;
    fromProtoMsg(message: QueryStarnameResponseProtoMsg): QueryStarnameResponse;
    toProto(message: QueryStarnameResponse): Uint8Array;
    toProtoMsg(message: QueryStarnameResponse): QueryStarnameResponseProtoMsg;
};
export declare const QueryOwnerAccountsRequest: {
    typeUrl: string;
    encode(message: QueryOwnerAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwnerAccountsRequest;
    fromPartial(object: Partial<QueryOwnerAccountsRequest>): QueryOwnerAccountsRequest;
    fromAmino(object: QueryOwnerAccountsRequestAmino): QueryOwnerAccountsRequest;
    toAmino(message: QueryOwnerAccountsRequest): QueryOwnerAccountsRequestAmino;
    fromAminoMsg(object: QueryOwnerAccountsRequestAminoMsg): QueryOwnerAccountsRequest;
    fromProtoMsg(message: QueryOwnerAccountsRequestProtoMsg): QueryOwnerAccountsRequest;
    toProto(message: QueryOwnerAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryOwnerAccountsRequest): QueryOwnerAccountsRequestProtoMsg;
};
export declare const QueryOwnerAccountsResponse: {
    typeUrl: string;
    encode(message: QueryOwnerAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwnerAccountsResponse;
    fromPartial(object: Partial<QueryOwnerAccountsResponse>): QueryOwnerAccountsResponse;
    fromAmino(object: QueryOwnerAccountsResponseAmino): QueryOwnerAccountsResponse;
    toAmino(message: QueryOwnerAccountsResponse): QueryOwnerAccountsResponseAmino;
    fromAminoMsg(object: QueryOwnerAccountsResponseAminoMsg): QueryOwnerAccountsResponse;
    fromProtoMsg(message: QueryOwnerAccountsResponseProtoMsg): QueryOwnerAccountsResponse;
    toProto(message: QueryOwnerAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryOwnerAccountsResponse): QueryOwnerAccountsResponseProtoMsg;
};
export declare const QueryOwnerDomainsRequest: {
    typeUrl: string;
    encode(message: QueryOwnerDomainsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwnerDomainsRequest;
    fromPartial(object: Partial<QueryOwnerDomainsRequest>): QueryOwnerDomainsRequest;
    fromAmino(object: QueryOwnerDomainsRequestAmino): QueryOwnerDomainsRequest;
    toAmino(message: QueryOwnerDomainsRequest): QueryOwnerDomainsRequestAmino;
    fromAminoMsg(object: QueryOwnerDomainsRequestAminoMsg): QueryOwnerDomainsRequest;
    fromProtoMsg(message: QueryOwnerDomainsRequestProtoMsg): QueryOwnerDomainsRequest;
    toProto(message: QueryOwnerDomainsRequest): Uint8Array;
    toProtoMsg(message: QueryOwnerDomainsRequest): QueryOwnerDomainsRequestProtoMsg;
};
export declare const QueryOwnerDomainsResponse: {
    typeUrl: string;
    encode(message: QueryOwnerDomainsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwnerDomainsResponse;
    fromPartial(object: Partial<QueryOwnerDomainsResponse>): QueryOwnerDomainsResponse;
    fromAmino(object: QueryOwnerDomainsResponseAmino): QueryOwnerDomainsResponse;
    toAmino(message: QueryOwnerDomainsResponse): QueryOwnerDomainsResponseAmino;
    fromAminoMsg(object: QueryOwnerDomainsResponseAminoMsg): QueryOwnerDomainsResponse;
    fromProtoMsg(message: QueryOwnerDomainsResponseProtoMsg): QueryOwnerDomainsResponse;
    toProto(message: QueryOwnerDomainsResponse): Uint8Array;
    toProtoMsg(message: QueryOwnerDomainsResponse): QueryOwnerDomainsResponseProtoMsg;
};
export declare const QueryResourceAccountsRequest: {
    typeUrl: string;
    encode(message: QueryResourceAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResourceAccountsRequest;
    fromPartial(object: Partial<QueryResourceAccountsRequest>): QueryResourceAccountsRequest;
    fromAmino(object: QueryResourceAccountsRequestAmino): QueryResourceAccountsRequest;
    toAmino(message: QueryResourceAccountsRequest): QueryResourceAccountsRequestAmino;
    fromAminoMsg(object: QueryResourceAccountsRequestAminoMsg): QueryResourceAccountsRequest;
    fromProtoMsg(message: QueryResourceAccountsRequestProtoMsg): QueryResourceAccountsRequest;
    toProto(message: QueryResourceAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryResourceAccountsRequest): QueryResourceAccountsRequestProtoMsg;
};
export declare const QueryResourceAccountsResponse: {
    typeUrl: string;
    encode(message: QueryResourceAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResourceAccountsResponse;
    fromPartial(object: Partial<QueryResourceAccountsResponse>): QueryResourceAccountsResponse;
    fromAmino(object: QueryResourceAccountsResponseAmino): QueryResourceAccountsResponse;
    toAmino(message: QueryResourceAccountsResponse): QueryResourceAccountsResponseAmino;
    fromAminoMsg(object: QueryResourceAccountsResponseAminoMsg): QueryResourceAccountsResponse;
    fromProtoMsg(message: QueryResourceAccountsResponseProtoMsg): QueryResourceAccountsResponse;
    toProto(message: QueryResourceAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryResourceAccountsResponse): QueryResourceAccountsResponseProtoMsg;
};
export declare const QueryBrokerAccountsRequest: {
    typeUrl: string;
    encode(message: QueryBrokerAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBrokerAccountsRequest;
    fromPartial(object: Partial<QueryBrokerAccountsRequest>): QueryBrokerAccountsRequest;
    fromAmino(object: QueryBrokerAccountsRequestAmino): QueryBrokerAccountsRequest;
    toAmino(message: QueryBrokerAccountsRequest): QueryBrokerAccountsRequestAmino;
    fromAminoMsg(object: QueryBrokerAccountsRequestAminoMsg): QueryBrokerAccountsRequest;
    fromProtoMsg(message: QueryBrokerAccountsRequestProtoMsg): QueryBrokerAccountsRequest;
    toProto(message: QueryBrokerAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryBrokerAccountsRequest): QueryBrokerAccountsRequestProtoMsg;
};
export declare const QueryBrokerAccountsResponse: {
    typeUrl: string;
    encode(message: QueryBrokerAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBrokerAccountsResponse;
    fromPartial(object: Partial<QueryBrokerAccountsResponse>): QueryBrokerAccountsResponse;
    fromAmino(object: QueryBrokerAccountsResponseAmino): QueryBrokerAccountsResponse;
    toAmino(message: QueryBrokerAccountsResponse): QueryBrokerAccountsResponseAmino;
    fromAminoMsg(object: QueryBrokerAccountsResponseAminoMsg): QueryBrokerAccountsResponse;
    fromProtoMsg(message: QueryBrokerAccountsResponseProtoMsg): QueryBrokerAccountsResponse;
    toProto(message: QueryBrokerAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryBrokerAccountsResponse): QueryBrokerAccountsResponseProtoMsg;
};
export declare const QueryBrokerDomainsRequest: {
    typeUrl: string;
    encode(message: QueryBrokerDomainsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBrokerDomainsRequest;
    fromPartial(object: Partial<QueryBrokerDomainsRequest>): QueryBrokerDomainsRequest;
    fromAmino(object: QueryBrokerDomainsRequestAmino): QueryBrokerDomainsRequest;
    toAmino(message: QueryBrokerDomainsRequest): QueryBrokerDomainsRequestAmino;
    fromAminoMsg(object: QueryBrokerDomainsRequestAminoMsg): QueryBrokerDomainsRequest;
    fromProtoMsg(message: QueryBrokerDomainsRequestProtoMsg): QueryBrokerDomainsRequest;
    toProto(message: QueryBrokerDomainsRequest): Uint8Array;
    toProtoMsg(message: QueryBrokerDomainsRequest): QueryBrokerDomainsRequestProtoMsg;
};
export declare const QueryBrokerDomainsResponse: {
    typeUrl: string;
    encode(message: QueryBrokerDomainsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBrokerDomainsResponse;
    fromPartial(object: Partial<QueryBrokerDomainsResponse>): QueryBrokerDomainsResponse;
    fromAmino(object: QueryBrokerDomainsResponseAmino): QueryBrokerDomainsResponse;
    toAmino(message: QueryBrokerDomainsResponse): QueryBrokerDomainsResponseAmino;
    fromAminoMsg(object: QueryBrokerDomainsResponseAminoMsg): QueryBrokerDomainsResponse;
    fromProtoMsg(message: QueryBrokerDomainsResponseProtoMsg): QueryBrokerDomainsResponse;
    toProto(message: QueryBrokerDomainsResponse): Uint8Array;
    toProtoMsg(message: QueryBrokerDomainsResponse): QueryBrokerDomainsResponseProtoMsg;
};
export declare const QueryYieldRequest: {
    typeUrl: string;
    encode(_: QueryYieldRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryYieldRequest;
    fromPartial(_: Partial<QueryYieldRequest>): QueryYieldRequest;
    fromAmino(_: QueryYieldRequestAmino): QueryYieldRequest;
    toAmino(_: QueryYieldRequest): QueryYieldRequestAmino;
    fromAminoMsg(object: QueryYieldRequestAminoMsg): QueryYieldRequest;
    fromProtoMsg(message: QueryYieldRequestProtoMsg): QueryYieldRequest;
    toProto(message: QueryYieldRequest): Uint8Array;
    toProtoMsg(message: QueryYieldRequest): QueryYieldRequestProtoMsg;
};
export declare const QueryYieldResponse: {
    typeUrl: string;
    encode(message: QueryYieldResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryYieldResponse;
    fromPartial(object: Partial<QueryYieldResponse>): QueryYieldResponse;
    fromAmino(object: QueryYieldResponseAmino): QueryYieldResponse;
    toAmino(message: QueryYieldResponse): QueryYieldResponseAmino;
    fromAminoMsg(object: QueryYieldResponseAminoMsg): QueryYieldResponse;
    fromProtoMsg(message: QueryYieldResponseProtoMsg): QueryYieldResponse;
    toProto(message: QueryYieldResponse): Uint8Array;
    toProtoMsg(message: QueryYieldResponse): QueryYieldResponseProtoMsg;
};
