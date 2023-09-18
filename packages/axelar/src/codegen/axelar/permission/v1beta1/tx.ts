import { LegacyAminoPubKey, LegacyAminoPubKeyAmino, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface UpdateGovernanceKeyRequest {
  sender: Uint8Array;
  governanceKey: LegacyAminoPubKey;
}
export interface UpdateGovernanceKeyRequestProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
  value: Uint8Array;
}
export interface UpdateGovernanceKeyRequestAmino {
  sender: Uint8Array;
  governance_key?: LegacyAminoPubKeyAmino;
}
export interface UpdateGovernanceKeyRequestAminoMsg {
  type: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
  value: UpdateGovernanceKeyRequestAmino;
}
export interface UpdateGovernanceKeyRequestSDKType {
  sender: Uint8Array;
  governance_key: LegacyAminoPubKeySDKType;
}
export interface UpdateGovernanceKeyResponse {}
export interface UpdateGovernanceKeyResponseProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyResponse";
  value: Uint8Array;
}
export interface UpdateGovernanceKeyResponseAmino {}
export interface UpdateGovernanceKeyResponseAminoMsg {
  type: "/axelar.permission.v1beta1.UpdateGovernanceKeyResponse";
  value: UpdateGovernanceKeyResponseAmino;
}
export interface UpdateGovernanceKeyResponseSDKType {}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface RegisterControllerRequestProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest";
  value: Uint8Array;
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequestAmino {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface RegisterControllerRequestAminoMsg {
  type: "/axelar.permission.v1beta1.RegisterControllerRequest";
  value: RegisterControllerRequestAmino;
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequestSDKType {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface RegisterControllerResponse {}
export interface RegisterControllerResponseProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.RegisterControllerResponse";
  value: Uint8Array;
}
export interface RegisterControllerResponseAmino {}
export interface RegisterControllerResponseAminoMsg {
  type: "/axelar.permission.v1beta1.RegisterControllerResponse";
  value: RegisterControllerResponseAmino;
}
export interface RegisterControllerResponseSDKType {}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface DeregisterControllerRequestProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest";
  value: Uint8Array;
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequestAmino {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface DeregisterControllerRequestAminoMsg {
  type: "/axelar.permission.v1beta1.DeregisterControllerRequest";
  value: DeregisterControllerRequestAmino;
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequestSDKType {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface DeregisterControllerResponse {}
export interface DeregisterControllerResponseProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.DeregisterControllerResponse";
  value: Uint8Array;
}
export interface DeregisterControllerResponseAmino {}
export interface DeregisterControllerResponseAminoMsg {
  type: "/axelar.permission.v1beta1.DeregisterControllerResponse";
  value: DeregisterControllerResponseAmino;
}
export interface DeregisterControllerResponseSDKType {}
function createBaseUpdateGovernanceKeyRequest(): UpdateGovernanceKeyRequest {
  return {
    sender: new Uint8Array(),
    governanceKey: LegacyAminoPubKey.fromPartial({})
  };
}
export const UpdateGovernanceKeyRequest = {
  typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
  encode(message: UpdateGovernanceKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: UpdateGovernanceKeyRequestAmino): UpdateGovernanceKeyRequest {
    return {
      sender: object.sender,
      governanceKey: object?.governance_key ? LegacyAminoPubKey.fromAmino(object.governance_key) : undefined
    };
  },
  toAmino(message: UpdateGovernanceKeyRequest): UpdateGovernanceKeyRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.governance_key = message.governanceKey ? LegacyAminoPubKey.toAmino(message.governanceKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateGovernanceKeyRequestAminoMsg): UpdateGovernanceKeyRequest {
    return UpdateGovernanceKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateGovernanceKeyRequestProtoMsg): UpdateGovernanceKeyRequest {
    return UpdateGovernanceKeyRequest.decode(message.value);
  },
  toProto(message: UpdateGovernanceKeyRequest): Uint8Array {
    return UpdateGovernanceKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateGovernanceKeyRequest): UpdateGovernanceKeyRequestProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
      value: UpdateGovernanceKeyRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateGovernanceKeyResponse(): UpdateGovernanceKeyResponse {
  return {};
}
export const UpdateGovernanceKeyResponse = {
  typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyResponse",
  encode(_: UpdateGovernanceKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): UpdateGovernanceKeyResponse {
    return {};
  },
  fromPartial(_: Partial<UpdateGovernanceKeyResponse>): UpdateGovernanceKeyResponse {
    const message = createBaseUpdateGovernanceKeyResponse();
    return message;
  },
  fromAmino(_: UpdateGovernanceKeyResponseAmino): UpdateGovernanceKeyResponse {
    return {};
  },
  toAmino(_: UpdateGovernanceKeyResponse): UpdateGovernanceKeyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: UpdateGovernanceKeyResponseAminoMsg): UpdateGovernanceKeyResponse {
    return UpdateGovernanceKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateGovernanceKeyResponseProtoMsg): UpdateGovernanceKeyResponse {
    return UpdateGovernanceKeyResponse.decode(message.value);
  },
  toProto(message: UpdateGovernanceKeyResponse): Uint8Array {
    return UpdateGovernanceKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: UpdateGovernanceKeyResponse): UpdateGovernanceKeyResponseProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyResponse",
      value: UpdateGovernanceKeyResponse.encode(message).finish()
    };
  }
};
function createBaseRegisterControllerRequest(): RegisterControllerRequest {
  return {
    sender: new Uint8Array(),
    controller: new Uint8Array()
  };
}
export const RegisterControllerRequest = {
  typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest",
  encode(message: RegisterControllerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RegisterControllerRequestAmino): RegisterControllerRequest {
    return {
      sender: object.sender,
      controller: object.controller
    };
  },
  toAmino(message: RegisterControllerRequest): RegisterControllerRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.controller = message.controller;
    return obj;
  },
  fromAminoMsg(object: RegisterControllerRequestAminoMsg): RegisterControllerRequest {
    return RegisterControllerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterControllerRequestProtoMsg): RegisterControllerRequest {
    return RegisterControllerRequest.decode(message.value);
  },
  toProto(message: RegisterControllerRequest): Uint8Array {
    return RegisterControllerRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisterControllerRequest): RegisterControllerRequestProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest",
      value: RegisterControllerRequest.encode(message).finish()
    };
  }
};
function createBaseRegisterControllerResponse(): RegisterControllerResponse {
  return {};
}
export const RegisterControllerResponse = {
  typeUrl: "/axelar.permission.v1beta1.RegisterControllerResponse",
  encode(_: RegisterControllerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RegisterControllerResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterControllerResponse>): RegisterControllerResponse {
    const message = createBaseRegisterControllerResponse();
    return message;
  },
  fromAmino(_: RegisterControllerResponseAmino): RegisterControllerResponse {
    return {};
  },
  toAmino(_: RegisterControllerResponse): RegisterControllerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RegisterControllerResponseAminoMsg): RegisterControllerResponse {
    return RegisterControllerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterControllerResponseProtoMsg): RegisterControllerResponse {
    return RegisterControllerResponse.decode(message.value);
  },
  toProto(message: RegisterControllerResponse): Uint8Array {
    return RegisterControllerResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisterControllerResponse): RegisterControllerResponseProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.RegisterControllerResponse",
      value: RegisterControllerResponse.encode(message).finish()
    };
  }
};
function createBaseDeregisterControllerRequest(): DeregisterControllerRequest {
  return {
    sender: new Uint8Array(),
    controller: new Uint8Array()
  };
}
export const DeregisterControllerRequest = {
  typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest",
  encode(message: DeregisterControllerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DeregisterControllerRequestAmino): DeregisterControllerRequest {
    return {
      sender: object.sender,
      controller: object.controller
    };
  },
  toAmino(message: DeregisterControllerRequest): DeregisterControllerRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.controller = message.controller;
    return obj;
  },
  fromAminoMsg(object: DeregisterControllerRequestAminoMsg): DeregisterControllerRequest {
    return DeregisterControllerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeregisterControllerRequestProtoMsg): DeregisterControllerRequest {
    return DeregisterControllerRequest.decode(message.value);
  },
  toProto(message: DeregisterControllerRequest): Uint8Array {
    return DeregisterControllerRequest.encode(message).finish();
  },
  toProtoMsg(message: DeregisterControllerRequest): DeregisterControllerRequestProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest",
      value: DeregisterControllerRequest.encode(message).finish()
    };
  }
};
function createBaseDeregisterControllerResponse(): DeregisterControllerResponse {
  return {};
}
export const DeregisterControllerResponse = {
  typeUrl: "/axelar.permission.v1beta1.DeregisterControllerResponse",
  encode(_: DeregisterControllerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): DeregisterControllerResponse {
    return {};
  },
  fromPartial(_: Partial<DeregisterControllerResponse>): DeregisterControllerResponse {
    const message = createBaseDeregisterControllerResponse();
    return message;
  },
  fromAmino(_: DeregisterControllerResponseAmino): DeregisterControllerResponse {
    return {};
  },
  toAmino(_: DeregisterControllerResponse): DeregisterControllerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: DeregisterControllerResponseAminoMsg): DeregisterControllerResponse {
    return DeregisterControllerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DeregisterControllerResponseProtoMsg): DeregisterControllerResponse {
    return DeregisterControllerResponse.decode(message.value);
  },
  toProto(message: DeregisterControllerResponse): Uint8Array {
    return DeregisterControllerResponse.encode(message).finish();
  },
  toProtoMsg(message: DeregisterControllerResponse): DeregisterControllerResponseProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.DeregisterControllerResponse",
      value: DeregisterControllerResponse.encode(message).finish()
    };
  }
};