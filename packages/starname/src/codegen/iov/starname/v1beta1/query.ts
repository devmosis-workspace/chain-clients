import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Domain, DomainSDKType, Account, AccountSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
export interface QueryYieldRequest {}
/** QueryYieldRequest is the request type for the Query/Yield RPC method. */
export interface QueryYieldRequestSDKType {}
/** QueryYieldResponse is the response type for the Query/Yield RPC method. */
export interface QueryYieldResponse {
  yield: string;
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
  encode(message: QueryDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryDomainResponse(): QueryDomainResponse {
  return {
    domain: undefined
  };
}
export const QueryDomainResponse = {
  encode(message: QueryDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryDomainAccountsRequest(): QueryDomainAccountsRequest {
  return {
    domain: "",
    pagination: undefined
  };
}
export const QueryDomainAccountsRequest = {
  encode(message: QueryDomainAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryDomainAccountsResponse(): QueryDomainAccountsResponse {
  return {
    accounts: [],
    page: undefined
  };
}
export const QueryDomainAccountsResponse = {
  encode(message: QueryDomainAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryStarnameRequest(): QueryStarnameRequest {
  return {
    starname: ""
  };
}
export const QueryStarnameRequest = {
  encode(message: QueryStarnameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryStarnameResponse(): QueryStarnameResponse {
  return {
    account: undefined
  };
}
export const QueryStarnameResponse = {
  encode(message: QueryStarnameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryOwnerAccountsRequest(): QueryOwnerAccountsRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryOwnerAccountsRequest = {
  encode(message: QueryOwnerAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryOwnerAccountsResponse(): QueryOwnerAccountsResponse {
  return {
    accounts: [],
    page: undefined
  };
}
export const QueryOwnerAccountsResponse = {
  encode(message: QueryOwnerAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryOwnerDomainsRequest(): QueryOwnerDomainsRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryOwnerDomainsRequest = {
  encode(message: QueryOwnerDomainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryOwnerDomainsResponse(): QueryOwnerDomainsResponse {
  return {
    domains: [],
    page: undefined
  };
}
export const QueryOwnerDomainsResponse = {
  encode(message: QueryOwnerDomainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryResourceAccountsRequest(): QueryResourceAccountsRequest {
  return {
    uri: "",
    resource: "",
    pagination: undefined
  };
}
export const QueryResourceAccountsRequest = {
  encode(message: QueryResourceAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryResourceAccountsResponse(): QueryResourceAccountsResponse {
  return {
    accounts: [],
    page: undefined
  };
}
export const QueryResourceAccountsResponse = {
  encode(message: QueryResourceAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryBrokerAccountsRequest(): QueryBrokerAccountsRequest {
  return {
    broker: "",
    pagination: undefined
  };
}
export const QueryBrokerAccountsRequest = {
  encode(message: QueryBrokerAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryBrokerAccountsResponse(): QueryBrokerAccountsResponse {
  return {
    accounts: [],
    page: undefined
  };
}
export const QueryBrokerAccountsResponse = {
  encode(message: QueryBrokerAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryBrokerDomainsRequest(): QueryBrokerDomainsRequest {
  return {
    broker: "",
    pagination: undefined
  };
}
export const QueryBrokerDomainsRequest = {
  encode(message: QueryBrokerDomainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryBrokerDomainsResponse(): QueryBrokerDomainsResponse {
  return {
    domains: [],
    page: undefined
  };
}
export const QueryBrokerDomainsResponse = {
  encode(message: QueryBrokerDomainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryYieldRequest(): QueryYieldRequest {
  return {};
}
export const QueryYieldRequest = {
  encode(_: QueryYieldRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryYieldRequest {
    return {};
  },
  fromPartial(_: Partial<QueryYieldRequest>): QueryYieldRequest {
    const message = createBaseQueryYieldRequest();
    return message;
  }
};
function createBaseQueryYieldResponse(): QueryYieldResponse {
  return {
    yield: ""
  };
}
export const QueryYieldResponse = {
  encode(message: QueryYieldResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yield !== "") {
      writer.uint32(10).string(message.yield);
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
  }
};