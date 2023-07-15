import { LegacyAminoPubKey, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface UpdateGovernanceKeyRequest {
  sender: Uint8Array;
  governanceKey?: LegacyAminoPubKey;
}
export interface UpdateGovernanceKeyRequestSDKType {
  sender: Uint8Array;
  governance_key?: LegacyAminoPubKeySDKType;
}
export interface UpdateGovernanceKeyResponse {}
export interface UpdateGovernanceKeyResponseSDKType {}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
  sender: Uint8Array;
  controller: Uint8Array;
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequestSDKType {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface RegisterControllerResponse {}
export interface RegisterControllerResponseSDKType {}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
  sender: Uint8Array;
  controller: Uint8Array;
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequestSDKType {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface DeregisterControllerResponse {}
export interface DeregisterControllerResponseSDKType {}
function createBaseUpdateGovernanceKeyRequest(): UpdateGovernanceKeyRequest {
  return {
    sender: new Uint8Array(),
    governanceKey: undefined
  };
}
export const UpdateGovernanceKeyRequest = {
  encode(message: UpdateGovernanceKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.governanceKey !== undefined) {
      LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpdateGovernanceKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      governanceKey: isSet(object.governanceKey) ? LegacyAminoPubKey.fromJSON(object.governanceKey) : undefined
    };
  },
  fromPartial(object: Partial<UpdateGovernanceKeyRequest>): UpdateGovernanceKeyRequest {
    const message = createBaseUpdateGovernanceKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.governanceKey = object.governanceKey !== undefined && object.governanceKey !== null ? LegacyAminoPubKey.fromPartial(object.governanceKey) : undefined;
    return message;
  }
};
function createBaseUpdateGovernanceKeyResponse(): UpdateGovernanceKeyResponse {
  return {};
}
export const UpdateGovernanceKeyResponse = {
  encode(_: UpdateGovernanceKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): UpdateGovernanceKeyResponse {
    return {};
  },
  fromPartial(_: Partial<UpdateGovernanceKeyResponse>): UpdateGovernanceKeyResponse {
    const message = createBaseUpdateGovernanceKeyResponse();
    return message;
  }
};
function createBaseRegisterControllerRequest(): RegisterControllerRequest {
  return {
    sender: new Uint8Array(),
    controller: new Uint8Array()
  };
}
export const RegisterControllerRequest = {
  encode(message: RegisterControllerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.controller.length !== 0) {
      writer.uint32(18).bytes(message.controller);
    }
    return writer;
  },
  fromJSON(object: any): RegisterControllerRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RegisterControllerRequest>): RegisterControllerRequest {
    const message = createBaseRegisterControllerRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.controller = object.controller ?? new Uint8Array();
    return message;
  }
};
function createBaseRegisterControllerResponse(): RegisterControllerResponse {
  return {};
}
export const RegisterControllerResponse = {
  encode(_: RegisterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RegisterControllerResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterControllerResponse>): RegisterControllerResponse {
    const message = createBaseRegisterControllerResponse();
    return message;
  }
};
function createBaseDeregisterControllerRequest(): DeregisterControllerRequest {
  return {
    sender: new Uint8Array(),
    controller: new Uint8Array()
  };
}
export const DeregisterControllerRequest = {
  encode(message: DeregisterControllerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.controller.length !== 0) {
      writer.uint32(18).bytes(message.controller);
    }
    return writer;
  },
  fromJSON(object: any): DeregisterControllerRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<DeregisterControllerRequest>): DeregisterControllerRequest {
    const message = createBaseDeregisterControllerRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.controller = object.controller ?? new Uint8Array();
    return message;
  }
};
function createBaseDeregisterControllerResponse(): DeregisterControllerResponse {
  return {};
}
export const DeregisterControllerResponse = {
  encode(_: DeregisterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): DeregisterControllerResponse {
    return {};
  },
  fromPartial(_: Partial<DeregisterControllerResponse>): DeregisterControllerResponse {
    const message = createBaseDeregisterControllerResponse();
    return message;
  }
};