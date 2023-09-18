import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Domain, DomainAmino, DomainSDKType, Account, AccountAmino, AccountSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
export interface QueryYieldRequest {}
export interface QueryYieldRequestProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryYieldRequest";
  value: Uint8Array;
}
/** QueryYieldRequest is the request type for the Query/Yield RPC method. */
export interface QueryYieldRequestAmino {}
export interface QueryYieldRequestAminoMsg {
  type: "/starnamed.x.starname.v1beta1.QueryYieldRequest";
  value: QueryYieldRequestAmino;
}
/** QueryYieldRequest is the request type for the Query/Yield RPC method. */
export interface QueryYieldRequestSDKType {}
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
function createBaseQueryDomainRequest(): QueryDomainRequest {
  return {
    name: ""
  };
}
export const QueryDomainRequest = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainRequest",
  encode(message: QueryDomainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): QueryDomainRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<QueryDomainRequest>): QueryDomainRequest {
    const message = createBaseQueryDomainRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryDomainRequestAmino): QueryDomainRequest {
    return {
      name: object.name
    };
  },
  toAmino(message: QueryDomainRequest): QueryDomainRequestAmino {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: QueryDomainRequestAminoMsg): QueryDomainRequest {
    return QueryDomainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDomainRequestProtoMsg): QueryDomainRequest {
    return QueryDomainRequest.decode(message.value);
  },
  toProto(message: QueryDomainRequest): Uint8Array {
    return QueryDomainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDomainRequest): QueryDomainRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainRequest",
      value: QueryDomainRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDomainResponse(): QueryDomainResponse {
  return {
    domain: Domain.fromPartial({})
  };
}
export const QueryDomainResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainResponse",
  encode(message: QueryDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== undefined) {
      Domain.encode(message.domain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDomainResponse {
    return {
      domain: isSet(object.domain) ? Domain.fromJSON(object.domain) : undefined
    };
  },
  fromPartial(object: Partial<QueryDomainResponse>): QueryDomainResponse {
    const message = createBaseQueryDomainResponse();
    message.domain = object.domain !== undefined && object.domain !== null ? Domain.fromPartial(object.domain) : undefined;
    return message;
  },
  fromAmino(object: QueryDomainResponseAmino): QueryDomainResponse {
    return {
      domain: object?.domain ? Domain.fromAmino(object.domain) : undefined
    };
  },
  toAmino(message: QueryDomainResponse): QueryDomainResponseAmino {
    const obj: any = {};
    obj.domain = message.domain ? Domain.toAmino(message.domain) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDomainResponseAminoMsg): QueryDomainResponse {
    return QueryDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDomainResponseProtoMsg): QueryDomainResponse {
    return QueryDomainResponse.decode(message.value);
  },
  toProto(message: QueryDomainResponse): Uint8Array {
    return QueryDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDomainResponse): QueryDomainResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainResponse",
      value: QueryDomainResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDomainAccountsRequest(): QueryDomainAccountsRequest {
  return {
    domain: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDomainAccountsRequest = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainAccountsRequest",
  encode(message: QueryDomainAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDomainAccountsRequest {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDomainAccountsRequest>): QueryDomainAccountsRequest {
    const message = createBaseQueryDomainAccountsRequest();
    message.domain = object.domain ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDomainAccountsRequestAmino): QueryDomainAccountsRequest {
    return {
      domain: object.domain,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDomainAccountsRequest): QueryDomainAccountsRequestAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDomainAccountsRequestAminoMsg): QueryDomainAccountsRequest {
    return QueryDomainAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDomainAccountsRequestProtoMsg): QueryDomainAccountsRequest {
    return QueryDomainAccountsRequest.decode(message.value);
  },
  toProto(message: QueryDomainAccountsRequest): Uint8Array {
    return QueryDomainAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDomainAccountsRequest): QueryDomainAccountsRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainAccountsRequest",
      value: QueryDomainAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDomainAccountsResponse(): QueryDomainAccountsResponse {
  return {
    accounts: [],
    page: PageResponse.fromPartial({})
  };
}
export const QueryDomainAccountsResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainAccountsResponse",
  encode(message: QueryDomainAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDomainAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined
    };
  },
  fromPartial(object: Partial<QueryDomainAccountsResponse>): QueryDomainAccountsResponse {
    const message = createBaseQueryDomainAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.page = object.page !== undefined && object.page !== null ? PageResponse.fromPartial(object.page) : undefined;
    return message;
  },
  fromAmino(object: QueryDomainAccountsResponseAmino): QueryDomainAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromAmino(e)) : [],
      page: object?.page ? PageResponse.fromAmino(object.page) : undefined
    };
  },
  toAmino(message: QueryDomainAccountsResponse): QueryDomainAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    obj.page = message.page ? PageResponse.toAmino(message.page) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDomainAccountsResponseAminoMsg): QueryDomainAccountsResponse {
    return QueryDomainAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDomainAccountsResponseProtoMsg): QueryDomainAccountsResponse {
    return QueryDomainAccountsResponse.decode(message.value);
  },
  toProto(message: QueryDomainAccountsResponse): Uint8Array {
    return QueryDomainAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDomainAccountsResponse): QueryDomainAccountsResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryDomainAccountsResponse",
      value: QueryDomainAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStarnameRequest(): QueryStarnameRequest {
  return {
    starname: ""
  };
}
export const QueryStarnameRequest = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryStarnameRequest",
  encode(message: QueryStarnameRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.starname !== "") {
      writer.uint32(10).string(message.starname);
    }
    return writer;
  },
  fromJSON(object: any): QueryStarnameRequest {
    return {
      starname: isSet(object.starname) ? String(object.starname) : ""
    };
  },
  fromPartial(object: Partial<QueryStarnameRequest>): QueryStarnameRequest {
    const message = createBaseQueryStarnameRequest();
    message.starname = object.starname ?? "";
    return message;
  },
  fromAmino(object: QueryStarnameRequestAmino): QueryStarnameRequest {
    return {
      starname: object.starname
    };
  },
  toAmino(message: QueryStarnameRequest): QueryStarnameRequestAmino {
    const obj: any = {};
    obj.starname = message.starname;
    return obj;
  },
  fromAminoMsg(object: QueryStarnameRequestAminoMsg): QueryStarnameRequest {
    return QueryStarnameRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStarnameRequestProtoMsg): QueryStarnameRequest {
    return QueryStarnameRequest.decode(message.value);
  },
  toProto(message: QueryStarnameRequest): Uint8Array {
    return QueryStarnameRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStarnameRequest): QueryStarnameRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryStarnameRequest",
      value: QueryStarnameRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStarnameResponse(): QueryStarnameResponse {
  return {
    account: Account.fromPartial({})
  };
}
export const QueryStarnameResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryStarnameResponse",
  encode(message: QueryStarnameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStarnameResponse {
    return {
      account: isSet(object.account) ? Account.fromJSON(object.account) : undefined
    };
  },
  fromPartial(object: Partial<QueryStarnameResponse>): QueryStarnameResponse {
    const message = createBaseQueryStarnameResponse();
    message.account = object.account !== undefined && object.account !== null ? Account.fromPartial(object.account) : undefined;
    return message;
  },
  fromAmino(object: QueryStarnameResponseAmino): QueryStarnameResponse {
    return {
      account: object?.account ? Account.fromAmino(object.account) : undefined
    };
  },
  toAmino(message: QueryStarnameResponse): QueryStarnameResponseAmino {
    const obj: any = {};
    obj.account = message.account ? Account.toAmino(message.account) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStarnameResponseAminoMsg): QueryStarnameResponse {
    return QueryStarnameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStarnameResponseProtoMsg): QueryStarnameResponse {
    return QueryStarnameResponse.decode(message.value);
  },
  toProto(message: QueryStarnameResponse): Uint8Array {
    return QueryStarnameResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStarnameResponse): QueryStarnameResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryStarnameResponse",
      value: QueryStarnameResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerAccountsRequest(): QueryOwnerAccountsRequest {
  return {
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryOwnerAccountsRequest = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerAccountsRequest",
  encode(message: QueryOwnerAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOwnerAccountsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOwnerAccountsRequest>): QueryOwnerAccountsRequest {
    const message = createBaseQueryOwnerAccountsRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOwnerAccountsRequestAmino): QueryOwnerAccountsRequest {
    return {
      owner: object.owner,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOwnerAccountsRequest): QueryOwnerAccountsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerAccountsRequestAminoMsg): QueryOwnerAccountsRequest {
    return QueryOwnerAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerAccountsRequestProtoMsg): QueryOwnerAccountsRequest {
    return QueryOwnerAccountsRequest.decode(message.value);
  },
  toProto(message: QueryOwnerAccountsRequest): Uint8Array {
    return QueryOwnerAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerAccountsRequest): QueryOwnerAccountsRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerAccountsRequest",
      value: QueryOwnerAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerAccountsResponse(): QueryOwnerAccountsResponse {
  return {
    accounts: [],
    page: PageResponse.fromPartial({})
  };
}
export const QueryOwnerAccountsResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerAccountsResponse",
  encode(message: QueryOwnerAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOwnerAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined
    };
  },
  fromPartial(object: Partial<QueryOwnerAccountsResponse>): QueryOwnerAccountsResponse {
    const message = createBaseQueryOwnerAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.page = object.page !== undefined && object.page !== null ? PageResponse.fromPartial(object.page) : undefined;
    return message;
  },
  fromAmino(object: QueryOwnerAccountsResponseAmino): QueryOwnerAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromAmino(e)) : [],
      page: object?.page ? PageResponse.fromAmino(object.page) : undefined
    };
  },
  toAmino(message: QueryOwnerAccountsResponse): QueryOwnerAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    obj.page = message.page ? PageResponse.toAmino(message.page) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerAccountsResponseAminoMsg): QueryOwnerAccountsResponse {
    return QueryOwnerAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerAccountsResponseProtoMsg): QueryOwnerAccountsResponse {
    return QueryOwnerAccountsResponse.decode(message.value);
  },
  toProto(message: QueryOwnerAccountsResponse): Uint8Array {
    return QueryOwnerAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerAccountsResponse): QueryOwnerAccountsResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerAccountsResponse",
      value: QueryOwnerAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerDomainsRequest(): QueryOwnerDomainsRequest {
  return {
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryOwnerDomainsRequest = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerDomainsRequest",
  encode(message: QueryOwnerDomainsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOwnerDomainsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOwnerDomainsRequest>): QueryOwnerDomainsRequest {
    const message = createBaseQueryOwnerDomainsRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOwnerDomainsRequestAmino): QueryOwnerDomainsRequest {
    return {
      owner: object.owner,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOwnerDomainsRequest): QueryOwnerDomainsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerDomainsRequestAminoMsg): QueryOwnerDomainsRequest {
    return QueryOwnerDomainsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerDomainsRequestProtoMsg): QueryOwnerDomainsRequest {
    return QueryOwnerDomainsRequest.decode(message.value);
  },
  toProto(message: QueryOwnerDomainsRequest): Uint8Array {
    return QueryOwnerDomainsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerDomainsRequest): QueryOwnerDomainsRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerDomainsRequest",
      value: QueryOwnerDomainsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerDomainsResponse(): QueryOwnerDomainsResponse {
  return {
    domains: [],
    page: PageResponse.fromPartial({})
  };
}
export const QueryOwnerDomainsResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerDomainsResponse",
  encode(message: QueryOwnerDomainsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.domains) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOwnerDomainsResponse {
    return {
      domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => Domain.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined
    };
  },
  fromPartial(object: Partial<QueryOwnerDomainsResponse>): QueryOwnerDomainsResponse {
    const message = createBaseQueryOwnerDomainsResponse();
    message.domains = object.domains?.map(e => Domain.fromPartial(e)) || [];
    message.page = object.page !== undefined && object.page !== null ? PageResponse.fromPartial(object.page) : undefined;
    return message;
  },
  fromAmino(object: QueryOwnerDomainsResponseAmino): QueryOwnerDomainsResponse {
    return {
      domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => Domain.fromAmino(e)) : [],
      page: object?.page ? PageResponse.fromAmino(object.page) : undefined
    };
  },
  toAmino(message: QueryOwnerDomainsResponse): QueryOwnerDomainsResponseAmino {
    const obj: any = {};
    if (message.domains) {
      obj.domains = message.domains.map(e => e ? Domain.toAmino(e) : undefined);
    } else {
      obj.domains = [];
    }
    obj.page = message.page ? PageResponse.toAmino(message.page) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerDomainsResponseAminoMsg): QueryOwnerDomainsResponse {
    return QueryOwnerDomainsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerDomainsResponseProtoMsg): QueryOwnerDomainsResponse {
    return QueryOwnerDomainsResponse.decode(message.value);
  },
  toProto(message: QueryOwnerDomainsResponse): Uint8Array {
    return QueryOwnerDomainsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerDomainsResponse): QueryOwnerDomainsResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryOwnerDomainsResponse",
      value: QueryOwnerDomainsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryResourceAccountsRequest(): QueryResourceAccountsRequest {
  return {
    uri: "",
    resource: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryResourceAccountsRequest = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryResourceAccountsRequest",
  encode(message: QueryResourceAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.resource !== "") {
      writer.uint32(18).string(message.resource);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryResourceAccountsRequest {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      resource: isSet(object.resource) ? String(object.resource) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryResourceAccountsRequest>): QueryResourceAccountsRequest {
    const message = createBaseQueryResourceAccountsRequest();
    message.uri = object.uri ?? "";
    message.resource = object.resource ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryResourceAccountsRequestAmino): QueryResourceAccountsRequest {
    return {
      uri: object.uri,
      resource: object.resource,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryResourceAccountsRequest): QueryResourceAccountsRequestAmino {
    const obj: any = {};
    obj.uri = message.uri;
    obj.resource = message.resource;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryResourceAccountsRequestAminoMsg): QueryResourceAccountsRequest {
    return QueryResourceAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResourceAccountsRequestProtoMsg): QueryResourceAccountsRequest {
    return QueryResourceAccountsRequest.decode(message.value);
  },
  toProto(message: QueryResourceAccountsRequest): Uint8Array {
    return QueryResourceAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryResourceAccountsRequest): QueryResourceAccountsRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryResourceAccountsRequest",
      value: QueryResourceAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryResourceAccountsResponse(): QueryResourceAccountsResponse {
  return {
    accounts: [],
    page: PageResponse.fromPartial({})
  };
}
export const QueryResourceAccountsResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryResourceAccountsResponse",
  encode(message: QueryResourceAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryResourceAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined
    };
  },
  fromPartial(object: Partial<QueryResourceAccountsResponse>): QueryResourceAccountsResponse {
    const message = createBaseQueryResourceAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.page = object.page !== undefined && object.page !== null ? PageResponse.fromPartial(object.page) : undefined;
    return message;
  },
  fromAmino(object: QueryResourceAccountsResponseAmino): QueryResourceAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromAmino(e)) : [],
      page: object?.page ? PageResponse.fromAmino(object.page) : undefined
    };
  },
  toAmino(message: QueryResourceAccountsResponse): QueryResourceAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    obj.page = message.page ? PageResponse.toAmino(message.page) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryResourceAccountsResponseAminoMsg): QueryResourceAccountsResponse {
    return QueryResourceAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResourceAccountsResponseProtoMsg): QueryResourceAccountsResponse {
    return QueryResourceAccountsResponse.decode(message.value);
  },
  toProto(message: QueryResourceAccountsResponse): Uint8Array {
    return QueryResourceAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryResourceAccountsResponse): QueryResourceAccountsResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryResourceAccountsResponse",
      value: QueryResourceAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBrokerAccountsRequest(): QueryBrokerAccountsRequest {
  return {
    broker: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryBrokerAccountsRequest = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerAccountsRequest",
  encode(message: QueryBrokerAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.broker !== "") {
      writer.uint32(10).string(message.broker);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBrokerAccountsRequest {
    return {
      broker: isSet(object.broker) ? String(object.broker) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBrokerAccountsRequest>): QueryBrokerAccountsRequest {
    const message = createBaseQueryBrokerAccountsRequest();
    message.broker = object.broker ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBrokerAccountsRequestAmino): QueryBrokerAccountsRequest {
    return {
      broker: object.broker,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryBrokerAccountsRequest): QueryBrokerAccountsRequestAmino {
    const obj: any = {};
    obj.broker = message.broker;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBrokerAccountsRequestAminoMsg): QueryBrokerAccountsRequest {
    return QueryBrokerAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBrokerAccountsRequestProtoMsg): QueryBrokerAccountsRequest {
    return QueryBrokerAccountsRequest.decode(message.value);
  },
  toProto(message: QueryBrokerAccountsRequest): Uint8Array {
    return QueryBrokerAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBrokerAccountsRequest): QueryBrokerAccountsRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerAccountsRequest",
      value: QueryBrokerAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBrokerAccountsResponse(): QueryBrokerAccountsResponse {
  return {
    accounts: [],
    page: PageResponse.fromPartial({})
  };
}
export const QueryBrokerAccountsResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerAccountsResponse",
  encode(message: QueryBrokerAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBrokerAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined
    };
  },
  fromPartial(object: Partial<QueryBrokerAccountsResponse>): QueryBrokerAccountsResponse {
    const message = createBaseQueryBrokerAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.page = object.page !== undefined && object.page !== null ? PageResponse.fromPartial(object.page) : undefined;
    return message;
  },
  fromAmino(object: QueryBrokerAccountsResponseAmino): QueryBrokerAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromAmino(e)) : [],
      page: object?.page ? PageResponse.fromAmino(object.page) : undefined
    };
  },
  toAmino(message: QueryBrokerAccountsResponse): QueryBrokerAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    obj.page = message.page ? PageResponse.toAmino(message.page) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBrokerAccountsResponseAminoMsg): QueryBrokerAccountsResponse {
    return QueryBrokerAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBrokerAccountsResponseProtoMsg): QueryBrokerAccountsResponse {
    return QueryBrokerAccountsResponse.decode(message.value);
  },
  toProto(message: QueryBrokerAccountsResponse): Uint8Array {
    return QueryBrokerAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBrokerAccountsResponse): QueryBrokerAccountsResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerAccountsResponse",
      value: QueryBrokerAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBrokerDomainsRequest(): QueryBrokerDomainsRequest {
  return {
    broker: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryBrokerDomainsRequest = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerDomainsRequest",
  encode(message: QueryBrokerDomainsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.broker !== "") {
      writer.uint32(10).string(message.broker);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBrokerDomainsRequest {
    return {
      broker: isSet(object.broker) ? String(object.broker) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBrokerDomainsRequest>): QueryBrokerDomainsRequest {
    const message = createBaseQueryBrokerDomainsRequest();
    message.broker = object.broker ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBrokerDomainsRequestAmino): QueryBrokerDomainsRequest {
    return {
      broker: object.broker,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryBrokerDomainsRequest): QueryBrokerDomainsRequestAmino {
    const obj: any = {};
    obj.broker = message.broker;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBrokerDomainsRequestAminoMsg): QueryBrokerDomainsRequest {
    return QueryBrokerDomainsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBrokerDomainsRequestProtoMsg): QueryBrokerDomainsRequest {
    return QueryBrokerDomainsRequest.decode(message.value);
  },
  toProto(message: QueryBrokerDomainsRequest): Uint8Array {
    return QueryBrokerDomainsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBrokerDomainsRequest): QueryBrokerDomainsRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerDomainsRequest",
      value: QueryBrokerDomainsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBrokerDomainsResponse(): QueryBrokerDomainsResponse {
  return {
    domains: [],
    page: PageResponse.fromPartial({})
  };
}
export const QueryBrokerDomainsResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerDomainsResponse",
  encode(message: QueryBrokerDomainsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.domains) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBrokerDomainsResponse {
    return {
      domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => Domain.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined
    };
  },
  fromPartial(object: Partial<QueryBrokerDomainsResponse>): QueryBrokerDomainsResponse {
    const message = createBaseQueryBrokerDomainsResponse();
    message.domains = object.domains?.map(e => Domain.fromPartial(e)) || [];
    message.page = object.page !== undefined && object.page !== null ? PageResponse.fromPartial(object.page) : undefined;
    return message;
  },
  fromAmino(object: QueryBrokerDomainsResponseAmino): QueryBrokerDomainsResponse {
    return {
      domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => Domain.fromAmino(e)) : [],
      page: object?.page ? PageResponse.fromAmino(object.page) : undefined
    };
  },
  toAmino(message: QueryBrokerDomainsResponse): QueryBrokerDomainsResponseAmino {
    const obj: any = {};
    if (message.domains) {
      obj.domains = message.domains.map(e => e ? Domain.toAmino(e) : undefined);
    } else {
      obj.domains = [];
    }
    obj.page = message.page ? PageResponse.toAmino(message.page) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBrokerDomainsResponseAminoMsg): QueryBrokerDomainsResponse {
    return QueryBrokerDomainsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBrokerDomainsResponseProtoMsg): QueryBrokerDomainsResponse {
    return QueryBrokerDomainsResponse.decode(message.value);
  },
  toProto(message: QueryBrokerDomainsResponse): Uint8Array {
    return QueryBrokerDomainsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBrokerDomainsResponse): QueryBrokerDomainsResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryBrokerDomainsResponse",
      value: QueryBrokerDomainsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryYieldRequest(): QueryYieldRequest {
  return {};
}
export const QueryYieldRequest = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryYieldRequest",
  encode(_: QueryYieldRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryYieldRequest {
    return {};
  },
  fromPartial(_: Partial<QueryYieldRequest>): QueryYieldRequest {
    const message = createBaseQueryYieldRequest();
    return message;
  },
  fromAmino(_: QueryYieldRequestAmino): QueryYieldRequest {
    return {};
  },
  toAmino(_: QueryYieldRequest): QueryYieldRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryYieldRequestAminoMsg): QueryYieldRequest {
    return QueryYieldRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryYieldRequestProtoMsg): QueryYieldRequest {
    return QueryYieldRequest.decode(message.value);
  },
  toProto(message: QueryYieldRequest): Uint8Array {
    return QueryYieldRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryYieldRequest): QueryYieldRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryYieldRequest",
      value: QueryYieldRequest.encode(message).finish()
    };
  }
};
function createBaseQueryYieldResponse(): QueryYieldResponse {
  return {
    yield: ""
  };
}
export const QueryYieldResponse = {
  typeUrl: "/starnamed.x.starname.v1beta1.QueryYieldResponse",
  encode(message: QueryYieldResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yield !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.yield, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryYieldResponse {
    return {
      yield: isSet(object.yield) ? String(object.yield) : ""
    };
  },
  fromPartial(object: Partial<QueryYieldResponse>): QueryYieldResponse {
    const message = createBaseQueryYieldResponse();
    message.yield = object.yield ?? "";
    return message;
  },
  fromAmino(object: QueryYieldResponseAmino): QueryYieldResponse {
    return {
      yield: object.yield
    };
  },
  toAmino(message: QueryYieldResponse): QueryYieldResponseAmino {
    const obj: any = {};
    obj.yield = message.yield;
    return obj;
  },
  fromAminoMsg(object: QueryYieldResponseAminoMsg): QueryYieldResponse {
    return QueryYieldResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryYieldResponseProtoMsg): QueryYieldResponse {
    return QueryYieldResponse.decode(message.value);
  },
  toProto(message: QueryYieldResponse): Uint8Array {
    return QueryYieldResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryYieldResponse): QueryYieldResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.QueryYieldResponse",
      value: QueryYieldResponse.encode(message).finish()
    };
  }
};