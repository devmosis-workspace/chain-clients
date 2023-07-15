import { Params, ParamsSDKType, CodeAuthorization, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationSDKType } from "./globalfee";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryCodeAuthorizationRequest {
  codeId: Long;
}
export interface QueryCodeAuthorizationRequestSDKType {
  code_id: Long;
}
export interface QueryCodeAuthorizationResponse {
  methods: string[];
}
export interface QueryCodeAuthorizationResponseSDKType {
  methods: string[];
}
export interface QueryContractAuthorizationRequest {
  contractAddress: string;
}
export interface QueryContractAuthorizationRequestSDKType {
  contract_address: string;
}
export interface QueryContractAuthorizationResponse {
  methods: string[];
}
export interface QueryContractAuthorizationResponseSDKType {
  methods: string[];
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryAuthorizationsRequest {}
export interface QueryAuthorizationsRequestSDKType {}
export interface QueryAuthorizationsResponse {
  codeAuthorizations: CodeAuthorization[];
  contractAuthorizations: ContractAuthorization[];
}
export interface QueryAuthorizationsResponseSDKType {
  code_authorizations: CodeAuthorizationSDKType[];
  contract_authorizations: ContractAuthorizationSDKType[];
}
function createBaseQueryCodeAuthorizationRequest(): QueryCodeAuthorizationRequest {
  return {
    codeId: Long.UZERO
  };
}
export const QueryCodeAuthorizationRequest = {
  encode(message: QueryCodeAuthorizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeAuthorizationRequest {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryCodeAuthorizationRequest>): QueryCodeAuthorizationRequest {
    const message = createBaseQueryCodeAuthorizationRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryCodeAuthorizationResponse(): QueryCodeAuthorizationResponse {
  return {
    methods: []
  };
}
export const QueryCodeAuthorizationResponse = {
  encode(message: QueryCodeAuthorizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.methods) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeAuthorizationResponse {
    return {
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCodeAuthorizationResponse>): QueryCodeAuthorizationResponse {
    const message = createBaseQueryCodeAuthorizationResponse();
    message.methods = object.methods?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryContractAuthorizationRequest(): QueryContractAuthorizationRequest {
  return {
    contractAddress: ""
  };
}
export const QueryContractAuthorizationRequest = {
  encode(message: QueryContractAuthorizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryContractAuthorizationRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryContractAuthorizationRequest>): QueryContractAuthorizationRequest {
    const message = createBaseQueryContractAuthorizationRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryContractAuthorizationResponse(): QueryContractAuthorizationResponse {
  return {
    methods: []
  };
}
export const QueryContractAuthorizationResponse = {
  encode(message: QueryContractAuthorizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.methods) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryContractAuthorizationResponse {
    return {
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryContractAuthorizationResponse>): QueryContractAuthorizationResponse {
    const message = createBaseQueryContractAuthorizationResponse();
    message.methods = object.methods?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryAuthorizationsRequest(): QueryAuthorizationsRequest {
  return {};
}
export const QueryAuthorizationsRequest = {
  encode(_: QueryAuthorizationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAuthorizationsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAuthorizationsRequest>): QueryAuthorizationsRequest {
    const message = createBaseQueryAuthorizationsRequest();
    return message;
  }
};
function createBaseQueryAuthorizationsResponse(): QueryAuthorizationsResponse {
  return {
    codeAuthorizations: [],
    contractAuthorizations: []
  };
}
export const QueryAuthorizationsResponse = {
  encode(message: QueryAuthorizationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codeAuthorizations) {
      CodeAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractAuthorizations) {
      ContractAuthorization.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAuthorizationsResponse {
    return {
      codeAuthorizations: Array.isArray(object?.codeAuthorizations) ? object.codeAuthorizations.map((e: any) => CodeAuthorization.fromJSON(e)) : [],
      contractAuthorizations: Array.isArray(object?.contractAuthorizations) ? object.contractAuthorizations.map((e: any) => ContractAuthorization.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAuthorizationsResponse>): QueryAuthorizationsResponse {
    const message = createBaseQueryAuthorizationsResponse();
    message.codeAuthorizations = object.codeAuthorizations?.map(e => CodeAuthorization.fromPartial(e)) || [];
    message.contractAuthorizations = object.contractAuthorizations?.map(e => ContractAuthorization.fromPartial(e)) || [];
    return message;
  }
};