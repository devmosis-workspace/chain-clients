import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Blacklisted, BlacklistedSDKType } from "./blacklisted";
import { Paused, PausedSDKType } from "./paused";
import { MasterMinter, MasterMinterSDKType } from "./master_minter";
import { Minters, MintersSDKType } from "./minters";
import { Pauser, PauserSDKType } from "./pauser";
import { Blacklister, BlacklisterSDKType } from "./blacklister";
import { Owner, OwnerSDKType } from "./owner";
import { MinterController, MinterControllerSDKType } from "./minter_controller";
import { MintingDenom, MintingDenomSDKType } from "./minting_denom";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
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
export interface QueryGetBlacklistedRequest {
  address: string;
}
export interface QueryGetBlacklistedRequestSDKType {
  address: string;
}
export interface QueryGetBlacklistedResponse {
  blacklisted?: Blacklisted;
}
export interface QueryGetBlacklistedResponseSDKType {
  blacklisted?: BlacklistedSDKType;
}
export interface QueryAllBlacklistedRequest {
  pagination?: PageRequest;
}
export interface QueryAllBlacklistedRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllBlacklistedResponse {
  blacklisted: Blacklisted[];
  pagination?: PageResponse;
}
export interface QueryAllBlacklistedResponseSDKType {
  blacklisted: BlacklistedSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPausedRequest {}
export interface QueryGetPausedRequestSDKType {}
export interface QueryGetPausedResponse {
  paused?: Paused;
}
export interface QueryGetPausedResponseSDKType {
  paused?: PausedSDKType;
}
export interface QueryGetMasterMinterRequest {}
export interface QueryGetMasterMinterRequestSDKType {}
export interface QueryGetMasterMinterResponse {
  masterMinter?: MasterMinter;
}
export interface QueryGetMasterMinterResponseSDKType {
  masterMinter?: MasterMinterSDKType;
}
export interface QueryGetMintersRequest {
  address: string;
}
export interface QueryGetMintersRequestSDKType {
  address: string;
}
export interface QueryGetMintersResponse {
  minters?: Minters;
}
export interface QueryGetMintersResponseSDKType {
  minters?: MintersSDKType;
}
export interface QueryAllMintersRequest {
  pagination?: PageRequest;
}
export interface QueryAllMintersRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMintersResponse {
  minters: Minters[];
  pagination?: PageResponse;
}
export interface QueryAllMintersResponseSDKType {
  minters: MintersSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPauserRequest {}
export interface QueryGetPauserRequestSDKType {}
export interface QueryGetPauserResponse {
  pauser?: Pauser;
}
export interface QueryGetPauserResponseSDKType {
  pauser?: PauserSDKType;
}
export interface QueryGetBlacklisterRequest {}
export interface QueryGetBlacklisterRequestSDKType {}
export interface QueryGetBlacklisterResponse {
  blacklister?: Blacklister;
}
export interface QueryGetBlacklisterResponseSDKType {
  blacklister?: BlacklisterSDKType;
}
export interface QueryGetOwnerRequest {}
export interface QueryGetOwnerRequestSDKType {}
export interface QueryGetOwnerResponse {
  owner?: Owner;
}
export interface QueryGetOwnerResponseSDKType {
  owner?: OwnerSDKType;
}
export interface QueryGetMinterControllerRequest {
  controllerAddress: string;
}
export interface QueryGetMinterControllerRequestSDKType {
  controllerAddress: string;
}
export interface QueryGetMinterControllerResponse {
  minterController?: MinterController;
}
export interface QueryGetMinterControllerResponseSDKType {
  minterController?: MinterControllerSDKType;
}
export interface QueryAllMinterControllerRequest {
  pagination?: PageRequest;
}
export interface QueryAllMinterControllerRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMinterControllerResponse {
  minterController: MinterController[];
  pagination?: PageResponse;
}
export interface QueryAllMinterControllerResponseSDKType {
  minterController: MinterControllerSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetMintingDenomRequest {}
export interface QueryGetMintingDenomRequestSDKType {}
export interface QueryGetMintingDenomResponse {
  mintingDenom?: MintingDenom;
}
export interface QueryGetMintingDenomResponseSDKType {
  mintingDenom?: MintingDenomSDKType;
}
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
function createBaseQueryGetBlacklistedRequest(): QueryGetBlacklistedRequest {
  return {
    address: ""
  };
}
export const QueryGetBlacklistedRequest = {
  encode(message: QueryGetBlacklistedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetBlacklistedRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryGetBlacklistedRequest>): QueryGetBlacklistedRequest {
    const message = createBaseQueryGetBlacklistedRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryGetBlacklistedResponse(): QueryGetBlacklistedResponse {
  return {
    blacklisted: undefined
  };
}
export const QueryGetBlacklistedResponse = {
  encode(message: QueryGetBlacklistedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blacklisted !== undefined) {
      Blacklisted.encode(message.blacklisted, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetBlacklistedResponse {
    return {
      blacklisted: isSet(object.blacklisted) ? Blacklisted.fromJSON(object.blacklisted) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetBlacklistedResponse>): QueryGetBlacklistedResponse {
    const message = createBaseQueryGetBlacklistedResponse();
    message.blacklisted = object.blacklisted !== undefined && object.blacklisted !== null ? Blacklisted.fromPartial(object.blacklisted) : undefined;
    return message;
  }
};
function createBaseQueryAllBlacklistedRequest(): QueryAllBlacklistedRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllBlacklistedRequest = {
  encode(message: QueryAllBlacklistedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllBlacklistedRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllBlacklistedRequest>): QueryAllBlacklistedRequest {
    const message = createBaseQueryAllBlacklistedRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllBlacklistedResponse(): QueryAllBlacklistedResponse {
  return {
    blacklisted: [],
    pagination: undefined
  };
}
export const QueryAllBlacklistedResponse = {
  encode(message: QueryAllBlacklistedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blacklisted) {
      Blacklisted.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllBlacklistedResponse {
    return {
      blacklisted: Array.isArray(object?.blacklisted) ? object.blacklisted.map((e: any) => Blacklisted.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllBlacklistedResponse>): QueryAllBlacklistedResponse {
    const message = createBaseQueryAllBlacklistedResponse();
    message.blacklisted = object.blacklisted?.map(e => Blacklisted.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetPausedRequest(): QueryGetPausedRequest {
  return {};
}
export const QueryGetPausedRequest = {
  encode(_: QueryGetPausedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryGetPausedRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetPausedRequest>): QueryGetPausedRequest {
    const message = createBaseQueryGetPausedRequest();
    return message;
  }
};
function createBaseQueryGetPausedResponse(): QueryGetPausedResponse {
  return {
    paused: undefined
  };
}
export const QueryGetPausedResponse = {
  encode(message: QueryGetPausedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paused !== undefined) {
      Paused.encode(message.paused, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPausedResponse {
    return {
      paused: isSet(object.paused) ? Paused.fromJSON(object.paused) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetPausedResponse>): QueryGetPausedResponse {
    const message = createBaseQueryGetPausedResponse();
    message.paused = object.paused !== undefined && object.paused !== null ? Paused.fromPartial(object.paused) : undefined;
    return message;
  }
};
function createBaseQueryGetMasterMinterRequest(): QueryGetMasterMinterRequest {
  return {};
}
export const QueryGetMasterMinterRequest = {
  encode(_: QueryGetMasterMinterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryGetMasterMinterRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetMasterMinterRequest>): QueryGetMasterMinterRequest {
    const message = createBaseQueryGetMasterMinterRequest();
    return message;
  }
};
function createBaseQueryGetMasterMinterResponse(): QueryGetMasterMinterResponse {
  return {
    masterMinter: undefined
  };
}
export const QueryGetMasterMinterResponse = {
  encode(message: QueryGetMasterMinterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.masterMinter !== undefined) {
      MasterMinter.encode(message.masterMinter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMasterMinterResponse {
    return {
      masterMinter: isSet(object.masterMinter) ? MasterMinter.fromJSON(object.masterMinter) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetMasterMinterResponse>): QueryGetMasterMinterResponse {
    const message = createBaseQueryGetMasterMinterResponse();
    message.masterMinter = object.masterMinter !== undefined && object.masterMinter !== null ? MasterMinter.fromPartial(object.masterMinter) : undefined;
    return message;
  }
};
function createBaseQueryGetMintersRequest(): QueryGetMintersRequest {
  return {
    address: ""
  };
}
export const QueryGetMintersRequest = {
  encode(message: QueryGetMintersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMintersRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryGetMintersRequest>): QueryGetMintersRequest {
    const message = createBaseQueryGetMintersRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryGetMintersResponse(): QueryGetMintersResponse {
  return {
    minters: undefined
  };
}
export const QueryGetMintersResponse = {
  encode(message: QueryGetMintersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minters !== undefined) {
      Minters.encode(message.minters, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMintersResponse {
    return {
      minters: isSet(object.minters) ? Minters.fromJSON(object.minters) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetMintersResponse>): QueryGetMintersResponse {
    const message = createBaseQueryGetMintersResponse();
    message.minters = object.minters !== undefined && object.minters !== null ? Minters.fromPartial(object.minters) : undefined;
    return message;
  }
};
function createBaseQueryAllMintersRequest(): QueryAllMintersRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMintersRequest = {
  encode(message: QueryAllMintersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMintersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMintersRequest>): QueryAllMintersRequest {
    const message = createBaseQueryAllMintersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllMintersResponse(): QueryAllMintersResponse {
  return {
    minters: [],
    pagination: undefined
  };
}
export const QueryAllMintersResponse = {
  encode(message: QueryAllMintersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minters) {
      Minters.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMintersResponse {
    return {
      minters: Array.isArray(object?.minters) ? object.minters.map((e: any) => Minters.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMintersResponse>): QueryAllMintersResponse {
    const message = createBaseQueryAllMintersResponse();
    message.minters = object.minters?.map(e => Minters.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetPauserRequest(): QueryGetPauserRequest {
  return {};
}
export const QueryGetPauserRequest = {
  encode(_: QueryGetPauserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryGetPauserRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetPauserRequest>): QueryGetPauserRequest {
    const message = createBaseQueryGetPauserRequest();
    return message;
  }
};
function createBaseQueryGetPauserResponse(): QueryGetPauserResponse {
  return {
    pauser: undefined
  };
}
export const QueryGetPauserResponse = {
  encode(message: QueryGetPauserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pauser !== undefined) {
      Pauser.encode(message.pauser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPauserResponse {
    return {
      pauser: isSet(object.pauser) ? Pauser.fromJSON(object.pauser) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetPauserResponse>): QueryGetPauserResponse {
    const message = createBaseQueryGetPauserResponse();
    message.pauser = object.pauser !== undefined && object.pauser !== null ? Pauser.fromPartial(object.pauser) : undefined;
    return message;
  }
};
function createBaseQueryGetBlacklisterRequest(): QueryGetBlacklisterRequest {
  return {};
}
export const QueryGetBlacklisterRequest = {
  encode(_: QueryGetBlacklisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryGetBlacklisterRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetBlacklisterRequest>): QueryGetBlacklisterRequest {
    const message = createBaseQueryGetBlacklisterRequest();
    return message;
  }
};
function createBaseQueryGetBlacklisterResponse(): QueryGetBlacklisterResponse {
  return {
    blacklister: undefined
  };
}
export const QueryGetBlacklisterResponse = {
  encode(message: QueryGetBlacklisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blacklister !== undefined) {
      Blacklister.encode(message.blacklister, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetBlacklisterResponse {
    return {
      blacklister: isSet(object.blacklister) ? Blacklister.fromJSON(object.blacklister) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetBlacklisterResponse>): QueryGetBlacklisterResponse {
    const message = createBaseQueryGetBlacklisterResponse();
    message.blacklister = object.blacklister !== undefined && object.blacklister !== null ? Blacklister.fromPartial(object.blacklister) : undefined;
    return message;
  }
};
function createBaseQueryGetOwnerRequest(): QueryGetOwnerRequest {
  return {};
}
export const QueryGetOwnerRequest = {
  encode(_: QueryGetOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryGetOwnerRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetOwnerRequest>): QueryGetOwnerRequest {
    const message = createBaseQueryGetOwnerRequest();
    return message;
  }
};
function createBaseQueryGetOwnerResponse(): QueryGetOwnerResponse {
  return {
    owner: undefined
  };
}
export const QueryGetOwnerResponse = {
  encode(message: QueryGetOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetOwnerResponse {
    return {
      owner: isSet(object.owner) ? Owner.fromJSON(object.owner) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetOwnerResponse>): QueryGetOwnerResponse {
    const message = createBaseQueryGetOwnerResponse();
    message.owner = object.owner !== undefined && object.owner !== null ? Owner.fromPartial(object.owner) : undefined;
    return message;
  }
};
function createBaseQueryGetMinterControllerRequest(): QueryGetMinterControllerRequest {
  return {
    controllerAddress: ""
  };
}
export const QueryGetMinterControllerRequest = {
  encode(message: QueryGetMinterControllerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controllerAddress !== "") {
      writer.uint32(10).string(message.controllerAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMinterControllerRequest {
    return {
      controllerAddress: isSet(object.controllerAddress) ? String(object.controllerAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryGetMinterControllerRequest>): QueryGetMinterControllerRequest {
    const message = createBaseQueryGetMinterControllerRequest();
    message.controllerAddress = object.controllerAddress ?? "";
    return message;
  }
};
function createBaseQueryGetMinterControllerResponse(): QueryGetMinterControllerResponse {
  return {
    minterController: undefined
  };
}
export const QueryGetMinterControllerResponse = {
  encode(message: QueryGetMinterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minterController !== undefined) {
      MinterController.encode(message.minterController, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMinterControllerResponse {
    return {
      minterController: isSet(object.minterController) ? MinterController.fromJSON(object.minterController) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetMinterControllerResponse>): QueryGetMinterControllerResponse {
    const message = createBaseQueryGetMinterControllerResponse();
    message.minterController = object.minterController !== undefined && object.minterController !== null ? MinterController.fromPartial(object.minterController) : undefined;
    return message;
  }
};
function createBaseQueryAllMinterControllerRequest(): QueryAllMinterControllerRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMinterControllerRequest = {
  encode(message: QueryAllMinterControllerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMinterControllerRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMinterControllerRequest>): QueryAllMinterControllerRequest {
    const message = createBaseQueryAllMinterControllerRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllMinterControllerResponse(): QueryAllMinterControllerResponse {
  return {
    minterController: [],
    pagination: undefined
  };
}
export const QueryAllMinterControllerResponse = {
  encode(message: QueryAllMinterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minterController) {
      MinterController.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMinterControllerResponse {
    return {
      minterController: Array.isArray(object?.minterController) ? object.minterController.map((e: any) => MinterController.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMinterControllerResponse>): QueryAllMinterControllerResponse {
    const message = createBaseQueryAllMinterControllerResponse();
    message.minterController = object.minterController?.map(e => MinterController.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetMintingDenomRequest(): QueryGetMintingDenomRequest {
  return {};
}
export const QueryGetMintingDenomRequest = {
  encode(_: QueryGetMintingDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryGetMintingDenomRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetMintingDenomRequest>): QueryGetMintingDenomRequest {
    const message = createBaseQueryGetMintingDenomRequest();
    return message;
  }
};
function createBaseQueryGetMintingDenomResponse(): QueryGetMintingDenomResponse {
  return {
    mintingDenom: undefined
  };
}
export const QueryGetMintingDenomResponse = {
  encode(message: QueryGetMintingDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintingDenom !== undefined) {
      MintingDenom.encode(message.mintingDenom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMintingDenomResponse {
    return {
      mintingDenom: isSet(object.mintingDenom) ? MintingDenom.fromJSON(object.mintingDenom) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetMintingDenomResponse>): QueryGetMintingDenomResponse {
    const message = createBaseQueryGetMintingDenomResponse();
    message.mintingDenom = object.mintingDenom !== undefined && object.mintingDenom !== null ? MintingDenom.fromPartial(object.mintingDenom) : undefined;
    return message;
  }
};