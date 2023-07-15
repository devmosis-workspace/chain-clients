import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Validator, ValidatorSDKType } from "./validator";
import { HostZone, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerSDKType } from "./epoch_tracker";
import { AddressUnbonding, AddressUnbondingSDKType } from "./address_unbonding";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequest {
  owner: string;
  connectionId: string;
}
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequestSDKType {
  owner: string;
  connection_id: string;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponse {
  interchainAccountAddress: string;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponseSDKType {
  interchain_account_address: string;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryGetValidatorsRequest {
  chainId: string;
}
export interface QueryGetValidatorsRequestSDKType {
  chain_id: string;
}
export interface QueryGetValidatorsResponse {
  validators: Validator[];
}
export interface QueryGetValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
}
export interface QueryGetHostZoneRequest {
  chainId: string;
}
export interface QueryGetHostZoneRequestSDKType {
  chain_id: string;
}
export interface QueryGetHostZoneResponse {
  hostZone?: HostZone;
}
export interface QueryGetHostZoneResponseSDKType {
  host_zone?: HostZoneSDKType;
}
export interface QueryAllHostZoneRequest {
  pagination?: PageRequest;
}
export interface QueryAllHostZoneRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllHostZoneResponse {
  hostZone: HostZone[];
  pagination?: PageResponse;
}
export interface QueryAllHostZoneResponseSDKType {
  host_zone: HostZoneSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryModuleAddressRequest {
  name: string;
}
export interface QueryModuleAddressRequestSDKType {
  name: string;
}
export interface QueryModuleAddressResponse {
  addr: string;
}
export interface QueryModuleAddressResponseSDKType {
  addr: string;
}
export interface QueryGetEpochTrackerRequest {
  epochIdentifier: string;
}
export interface QueryGetEpochTrackerRequestSDKType {
  epoch_identifier: string;
}
export interface QueryGetEpochTrackerResponse {
  epochTracker?: EpochTracker;
}
export interface QueryGetEpochTrackerResponseSDKType {
  epoch_tracker?: EpochTrackerSDKType;
}
export interface QueryAllEpochTrackerRequest {}
export interface QueryAllEpochTrackerRequestSDKType {}
export interface QueryAllEpochTrackerResponse {
  epochTracker: EpochTracker[];
}
export interface QueryAllEpochTrackerResponseSDKType {
  epoch_tracker: EpochTrackerSDKType[];
}
export interface QueryGetNextPacketSequenceRequest {
  channelId: string;
  portId: string;
}
export interface QueryGetNextPacketSequenceRequestSDKType {
  channel_id: string;
  port_id: string;
}
export interface QueryGetNextPacketSequenceResponse {
  sequence: Long;
}
export interface QueryGetNextPacketSequenceResponseSDKType {
  sequence: Long;
}
export interface QueryAddressUnbondings {
  address: string;
}
export interface QueryAddressUnbondingsSDKType {
  address: string;
}
export interface QueryAddressUnbondingsResponse {
  addressUnbondings: AddressUnbonding[];
}
export interface QueryAddressUnbondingsResponseSDKType {
  address_unbondings: AddressUnbondingSDKType[];
}
function createBaseQueryInterchainAccountFromAddressRequest(): QueryInterchainAccountFromAddressRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountFromAddressRequest = {
  encode(message: QueryInterchainAccountFromAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterchainAccountFromAddressRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  fromPartial(object: Partial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest {
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  }
};
function createBaseQueryInterchainAccountFromAddressResponse(): QueryInterchainAccountFromAddressResponse {
  return {
    interchainAccountAddress: ""
  };
}
export const QueryInterchainAccountFromAddressResponse = {
  encode(message: QueryInterchainAccountFromAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryInterchainAccountFromAddressResponse {
    return {
      interchainAccountAddress: isSet(object.interchainAccountAddress) ? String(object.interchainAccountAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
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
function createBaseQueryGetValidatorsRequest(): QueryGetValidatorsRequest {
  return {
    chainId: ""
  };
}
export const QueryGetValidatorsRequest = {
  encode(message: QueryGetValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetValidatorsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<QueryGetValidatorsRequest>): QueryGetValidatorsRequest {
    const message = createBaseQueryGetValidatorsRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }
};
function createBaseQueryGetValidatorsResponse(): QueryGetValidatorsResponse {
  return {
    validators: []
  };
}
export const QueryGetValidatorsResponse = {
  encode(message: QueryGetValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryGetValidatorsResponse>): QueryGetValidatorsResponse {
    const message = createBaseQueryGetValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryGetHostZoneRequest(): QueryGetHostZoneRequest {
  return {
    chainId: ""
  };
}
export const QueryGetHostZoneRequest = {
  encode(message: QueryGetHostZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetHostZoneRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<QueryGetHostZoneRequest>): QueryGetHostZoneRequest {
    const message = createBaseQueryGetHostZoneRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }
};
function createBaseQueryGetHostZoneResponse(): QueryGetHostZoneResponse {
  return {
    hostZone: undefined
  };
}
export const QueryGetHostZoneResponse = {
  encode(message: QueryGetHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZone !== undefined) {
      HostZone.encode(message.hostZone, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetHostZoneResponse {
    return {
      hostZone: isSet(object.hostZone) ? HostZone.fromJSON(object.hostZone) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetHostZoneResponse>): QueryGetHostZoneResponse {
    const message = createBaseQueryGetHostZoneResponse();
    message.hostZone = object.hostZone !== undefined && object.hostZone !== null ? HostZone.fromPartial(object.hostZone) : undefined;
    return message;
  }
};
function createBaseQueryAllHostZoneRequest(): QueryAllHostZoneRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllHostZoneRequest = {
  encode(message: QueryAllHostZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllHostZoneRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllHostZoneRequest>): QueryAllHostZoneRequest {
    const message = createBaseQueryAllHostZoneRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllHostZoneResponse(): QueryAllHostZoneResponse {
  return {
    hostZone: [],
    pagination: undefined
  };
}
export const QueryAllHostZoneResponse = {
  encode(message: QueryAllHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hostZone) {
      HostZone.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllHostZoneResponse {
    return {
      hostZone: Array.isArray(object?.hostZone) ? object.hostZone.map((e: any) => HostZone.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllHostZoneResponse>): QueryAllHostZoneResponse {
    const message = createBaseQueryAllHostZoneResponse();
    message.hostZone = object.hostZone?.map(e => HostZone.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryModuleAddressRequest(): QueryModuleAddressRequest {
  return {
    name: ""
  };
}
export const QueryModuleAddressRequest = {
  encode(message: QueryModuleAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): QueryModuleAddressRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<QueryModuleAddressRequest>): QueryModuleAddressRequest {
    const message = createBaseQueryModuleAddressRequest();
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseQueryModuleAddressResponse(): QueryModuleAddressResponse {
  return {
    addr: ""
  };
}
export const QueryModuleAddressResponse = {
  encode(message: QueryModuleAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    return writer;
  },
  fromJSON(object: any): QueryModuleAddressResponse {
    return {
      addr: isSet(object.addr) ? String(object.addr) : ""
    };
  },
  fromPartial(object: Partial<QueryModuleAddressResponse>): QueryModuleAddressResponse {
    const message = createBaseQueryModuleAddressResponse();
    message.addr = object.addr ?? "";
    return message;
  }
};
function createBaseQueryGetEpochTrackerRequest(): QueryGetEpochTrackerRequest {
  return {
    epochIdentifier: ""
  };
}
export const QueryGetEpochTrackerRequest = {
  encode(message: QueryGetEpochTrackerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetEpochTrackerRequest {
    return {
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : ""
    };
  },
  fromPartial(object: Partial<QueryGetEpochTrackerRequest>): QueryGetEpochTrackerRequest {
    const message = createBaseQueryGetEpochTrackerRequest();
    message.epochIdentifier = object.epochIdentifier ?? "";
    return message;
  }
};
function createBaseQueryGetEpochTrackerResponse(): QueryGetEpochTrackerResponse {
  return {
    epochTracker: undefined
  };
}
export const QueryGetEpochTrackerResponse = {
  encode(message: QueryGetEpochTrackerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochTracker !== undefined) {
      EpochTracker.encode(message.epochTracker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetEpochTrackerResponse {
    return {
      epochTracker: isSet(object.epochTracker) ? EpochTracker.fromJSON(object.epochTracker) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetEpochTrackerResponse>): QueryGetEpochTrackerResponse {
    const message = createBaseQueryGetEpochTrackerResponse();
    message.epochTracker = object.epochTracker !== undefined && object.epochTracker !== null ? EpochTracker.fromPartial(object.epochTracker) : undefined;
    return message;
  }
};
function createBaseQueryAllEpochTrackerRequest(): QueryAllEpochTrackerRequest {
  return {};
}
export const QueryAllEpochTrackerRequest = {
  encode(_: QueryAllEpochTrackerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAllEpochTrackerRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllEpochTrackerRequest>): QueryAllEpochTrackerRequest {
    const message = createBaseQueryAllEpochTrackerRequest();
    return message;
  }
};
function createBaseQueryAllEpochTrackerResponse(): QueryAllEpochTrackerResponse {
  return {
    epochTracker: []
  };
}
export const QueryAllEpochTrackerResponse = {
  encode(message: QueryAllEpochTrackerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochTracker) {
      EpochTracker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllEpochTrackerResponse {
    return {
      epochTracker: Array.isArray(object?.epochTracker) ? object.epochTracker.map((e: any) => EpochTracker.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAllEpochTrackerResponse>): QueryAllEpochTrackerResponse {
    const message = createBaseQueryAllEpochTrackerResponse();
    message.epochTracker = object.epochTracker?.map(e => EpochTracker.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryGetNextPacketSequenceRequest(): QueryGetNextPacketSequenceRequest {
  return {
    channelId: "",
    portId: ""
  };
}
export const QueryGetNextPacketSequenceRequest = {
  encode(message: QueryGetNextPacketSequenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetNextPacketSequenceRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      portId: isSet(object.portId) ? String(object.portId) : ""
    };
  },
  fromPartial(object: Partial<QueryGetNextPacketSequenceRequest>): QueryGetNextPacketSequenceRequest {
    const message = createBaseQueryGetNextPacketSequenceRequest();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    return message;
  }
};
function createBaseQueryGetNextPacketSequenceResponse(): QueryGetNextPacketSequenceResponse {
  return {
    sequence: Long.UZERO
  };
}
export const QueryGetNextPacketSequenceResponse = {
  encode(message: QueryGetNextPacketSequenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetNextPacketSequenceResponse {
    return {
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryGetNextPacketSequenceResponse>): QueryGetNextPacketSequenceResponse {
    const message = createBaseQueryGetNextPacketSequenceResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAddressUnbondings(): QueryAddressUnbondings {
  return {
    address: ""
  };
}
export const QueryAddressUnbondings = {
  encode(message: QueryAddressUnbondings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAddressUnbondings {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAddressUnbondings>): QueryAddressUnbondings {
    const message = createBaseQueryAddressUnbondings();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAddressUnbondingsResponse(): QueryAddressUnbondingsResponse {
  return {
    addressUnbondings: []
  };
}
export const QueryAddressUnbondingsResponse = {
  encode(message: QueryAddressUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addressUnbondings) {
      AddressUnbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAddressUnbondingsResponse {
    return {
      addressUnbondings: Array.isArray(object?.addressUnbondings) ? object.addressUnbondings.map((e: any) => AddressUnbonding.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAddressUnbondingsResponse>): QueryAddressUnbondingsResponse {
    const message = createBaseQueryAddressUnbondingsResponse();
    message.addressUnbondings = object.addressUnbondings?.map(e => AddressUnbonding.fromPartial(e)) || [];
    return message;
  }
};