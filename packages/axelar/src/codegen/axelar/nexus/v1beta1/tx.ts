import { FeeInfo, FeeInfoAmino, FeeInfoSDKType } from "../exported/v1beta1/types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface RegisterChainMaintainerRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface RegisterChainMaintainerRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerRequest";
  value: Uint8Array;
}
export interface RegisterChainMaintainerRequestAmino {
  sender: Uint8Array;
  chains: string[];
}
export interface RegisterChainMaintainerRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.RegisterChainMaintainerRequest";
  value: RegisterChainMaintainerRequestAmino;
}
export interface RegisterChainMaintainerRequestSDKType {
  sender: Uint8Array;
  chains: string[];
}
export interface RegisterChainMaintainerResponse {}
export interface RegisterChainMaintainerResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerResponse";
  value: Uint8Array;
}
export interface RegisterChainMaintainerResponseAmino {}
export interface RegisterChainMaintainerResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.RegisterChainMaintainerResponse";
  value: RegisterChainMaintainerResponseAmino;
}
export interface RegisterChainMaintainerResponseSDKType {}
export interface DeregisterChainMaintainerRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface DeregisterChainMaintainerRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerRequest";
  value: Uint8Array;
}
export interface DeregisterChainMaintainerRequestAmino {
  sender: Uint8Array;
  chains: string[];
}
export interface DeregisterChainMaintainerRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.DeregisterChainMaintainerRequest";
  value: DeregisterChainMaintainerRequestAmino;
}
export interface DeregisterChainMaintainerRequestSDKType {
  sender: Uint8Array;
  chains: string[];
}
export interface DeregisterChainMaintainerResponse {}
export interface DeregisterChainMaintainerResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerResponse";
  value: Uint8Array;
}
export interface DeregisterChainMaintainerResponseAmino {}
export interface DeregisterChainMaintainerResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.DeregisterChainMaintainerResponse";
  value: DeregisterChainMaintainerResponseAmino;
}
export interface DeregisterChainMaintainerResponseSDKType {}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface ActivateChainRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ActivateChainRequest";
  value: Uint8Array;
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequestAmino {
  sender: Uint8Array;
  chains: string[];
}
export interface ActivateChainRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.ActivateChainRequest";
  value: ActivateChainRequestAmino;
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequestSDKType {
  sender: Uint8Array;
  chains: string[];
}
export interface ActivateChainResponse {}
export interface ActivateChainResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ActivateChainResponse";
  value: Uint8Array;
}
export interface ActivateChainResponseAmino {}
export interface ActivateChainResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.ActivateChainResponse";
  value: ActivateChainResponseAmino;
}
export interface ActivateChainResponseSDKType {}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface DeactivateChainRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.DeactivateChainRequest";
  value: Uint8Array;
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequestAmino {
  sender: Uint8Array;
  chains: string[];
}
export interface DeactivateChainRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.DeactivateChainRequest";
  value: DeactivateChainRequestAmino;
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequestSDKType {
  sender: Uint8Array;
  chains: string[];
}
export interface DeactivateChainResponse {}
export interface DeactivateChainResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.DeactivateChainResponse";
  value: Uint8Array;
}
export interface DeactivateChainResponseAmino {}
export interface DeactivateChainResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.DeactivateChainResponse";
  value: DeactivateChainResponseAmino;
}
export interface DeactivateChainResponseSDKType {}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
  sender: Uint8Array;
  feeInfo: FeeInfo;
}
export interface RegisterAssetFeeRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeRequest";
  value: Uint8Array;
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequestAmino {
  sender: Uint8Array;
  fee_info?: FeeInfoAmino;
}
export interface RegisterAssetFeeRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.RegisterAssetFeeRequest";
  value: RegisterAssetFeeRequestAmino;
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequestSDKType {
  sender: Uint8Array;
  fee_info: FeeInfoSDKType;
}
export interface RegisterAssetFeeResponse {}
export interface RegisterAssetFeeResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeResponse";
  value: Uint8Array;
}
export interface RegisterAssetFeeResponseAmino {}
export interface RegisterAssetFeeResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.RegisterAssetFeeResponse";
  value: RegisterAssetFeeResponseAmino;
}
export interface RegisterAssetFeeResponseSDKType {}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequest {
  sender: Uint8Array;
  chain: string;
  limit: Coin;
  window: Duration;
}
export interface SetTransferRateLimitRequestProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitRequest";
  value: Uint8Array;
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequestAmino {
  sender: Uint8Array;
  chain: string;
  limit?: CoinAmino;
  window?: DurationAmino;
}
export interface SetTransferRateLimitRequestAminoMsg {
  type: "/axelar.nexus.v1beta1.SetTransferRateLimitRequest";
  value: SetTransferRateLimitRequestAmino;
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequestSDKType {
  sender: Uint8Array;
  chain: string;
  limit: CoinSDKType;
  window: DurationSDKType;
}
export interface SetTransferRateLimitResponse {}
export interface SetTransferRateLimitResponseProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitResponse";
  value: Uint8Array;
}
export interface SetTransferRateLimitResponseAmino {}
export interface SetTransferRateLimitResponseAminoMsg {
  type: "/axelar.nexus.v1beta1.SetTransferRateLimitResponse";
  value: SetTransferRateLimitResponseAmino;
}
export interface SetTransferRateLimitResponseSDKType {}
function createBaseRegisterChainMaintainerRequest(): RegisterChainMaintainerRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}
export const RegisterChainMaintainerRequest = {
  typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerRequest",
  encode(message: RegisterChainMaintainerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    for (const v of message.chains) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): RegisterChainMaintainerRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<RegisterChainMaintainerRequest>): RegisterChainMaintainerRequest {
    const message = createBaseRegisterChainMaintainerRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RegisterChainMaintainerRequestAmino): RegisterChainMaintainerRequest {
    return {
      sender: object.sender,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => e) : []
    };
  },
  toAmino(message: RegisterChainMaintainerRequest): RegisterChainMaintainerRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }
    return obj;
  },
  fromAminoMsg(object: RegisterChainMaintainerRequestAminoMsg): RegisterChainMaintainerRequest {
    return RegisterChainMaintainerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterChainMaintainerRequestProtoMsg): RegisterChainMaintainerRequest {
    return RegisterChainMaintainerRequest.decode(message.value);
  },
  toProto(message: RegisterChainMaintainerRequest): Uint8Array {
    return RegisterChainMaintainerRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisterChainMaintainerRequest): RegisterChainMaintainerRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerRequest",
      value: RegisterChainMaintainerRequest.encode(message).finish()
    };
  }
};
function createBaseRegisterChainMaintainerResponse(): RegisterChainMaintainerResponse {
  return {};
}
export const RegisterChainMaintainerResponse = {
  typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerResponse",
  encode(_: RegisterChainMaintainerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RegisterChainMaintainerResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterChainMaintainerResponse>): RegisterChainMaintainerResponse {
    const message = createBaseRegisterChainMaintainerResponse();
    return message;
  },
  fromAmino(_: RegisterChainMaintainerResponseAmino): RegisterChainMaintainerResponse {
    return {};
  },
  toAmino(_: RegisterChainMaintainerResponse): RegisterChainMaintainerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RegisterChainMaintainerResponseAminoMsg): RegisterChainMaintainerResponse {
    return RegisterChainMaintainerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterChainMaintainerResponseProtoMsg): RegisterChainMaintainerResponse {
    return RegisterChainMaintainerResponse.decode(message.value);
  },
  toProto(message: RegisterChainMaintainerResponse): Uint8Array {
    return RegisterChainMaintainerResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisterChainMaintainerResponse): RegisterChainMaintainerResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerResponse",
      value: RegisterChainMaintainerResponse.encode(message).finish()
    };
  }
};
function createBaseDeregisterChainMaintainerRequest(): DeregisterChainMaintainerRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}
export const DeregisterChainMaintainerRequest = {
  typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerRequest",
  encode(message: DeregisterChainMaintainerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    for (const v of message.chains) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): DeregisterChainMaintainerRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<DeregisterChainMaintainerRequest>): DeregisterChainMaintainerRequest {
    const message = createBaseDeregisterChainMaintainerRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DeregisterChainMaintainerRequestAmino): DeregisterChainMaintainerRequest {
    return {
      sender: object.sender,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => e) : []
    };
  },
  toAmino(message: DeregisterChainMaintainerRequest): DeregisterChainMaintainerRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }
    return obj;
  },
  fromAminoMsg(object: DeregisterChainMaintainerRequestAminoMsg): DeregisterChainMaintainerRequest {
    return DeregisterChainMaintainerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeregisterChainMaintainerRequestProtoMsg): DeregisterChainMaintainerRequest {
    return DeregisterChainMaintainerRequest.decode(message.value);
  },
  toProto(message: DeregisterChainMaintainerRequest): Uint8Array {
    return DeregisterChainMaintainerRequest.encode(message).finish();
  },
  toProtoMsg(message: DeregisterChainMaintainerRequest): DeregisterChainMaintainerRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerRequest",
      value: DeregisterChainMaintainerRequest.encode(message).finish()
    };
  }
};
function createBaseDeregisterChainMaintainerResponse(): DeregisterChainMaintainerResponse {
  return {};
}
export const DeregisterChainMaintainerResponse = {
  typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerResponse",
  encode(_: DeregisterChainMaintainerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): DeregisterChainMaintainerResponse {
    return {};
  },
  fromPartial(_: Partial<DeregisterChainMaintainerResponse>): DeregisterChainMaintainerResponse {
    const message = createBaseDeregisterChainMaintainerResponse();
    return message;
  },
  fromAmino(_: DeregisterChainMaintainerResponseAmino): DeregisterChainMaintainerResponse {
    return {};
  },
  toAmino(_: DeregisterChainMaintainerResponse): DeregisterChainMaintainerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: DeregisterChainMaintainerResponseAminoMsg): DeregisterChainMaintainerResponse {
    return DeregisterChainMaintainerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DeregisterChainMaintainerResponseProtoMsg): DeregisterChainMaintainerResponse {
    return DeregisterChainMaintainerResponse.decode(message.value);
  },
  toProto(message: DeregisterChainMaintainerResponse): Uint8Array {
    return DeregisterChainMaintainerResponse.encode(message).finish();
  },
  toProtoMsg(message: DeregisterChainMaintainerResponse): DeregisterChainMaintainerResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerResponse",
      value: DeregisterChainMaintainerResponse.encode(message).finish()
    };
  }
};
function createBaseActivateChainRequest(): ActivateChainRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}
export const ActivateChainRequest = {
  typeUrl: "/axelar.nexus.v1beta1.ActivateChainRequest",
  encode(message: ActivateChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    for (const v of message.chains) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ActivateChainRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ActivateChainRequest>): ActivateChainRequest {
    const message = createBaseActivateChainRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ActivateChainRequestAmino): ActivateChainRequest {
    return {
      sender: object.sender,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => e) : []
    };
  },
  toAmino(message: ActivateChainRequest): ActivateChainRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }
    return obj;
  },
  fromAminoMsg(object: ActivateChainRequestAminoMsg): ActivateChainRequest {
    return ActivateChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ActivateChainRequestProtoMsg): ActivateChainRequest {
    return ActivateChainRequest.decode(message.value);
  },
  toProto(message: ActivateChainRequest): Uint8Array {
    return ActivateChainRequest.encode(message).finish();
  },
  toProtoMsg(message: ActivateChainRequest): ActivateChainRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.ActivateChainRequest",
      value: ActivateChainRequest.encode(message).finish()
    };
  }
};
function createBaseActivateChainResponse(): ActivateChainResponse {
  return {};
}
export const ActivateChainResponse = {
  typeUrl: "/axelar.nexus.v1beta1.ActivateChainResponse",
  encode(_: ActivateChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ActivateChainResponse {
    return {};
  },
  fromPartial(_: Partial<ActivateChainResponse>): ActivateChainResponse {
    const message = createBaseActivateChainResponse();
    return message;
  },
  fromAmino(_: ActivateChainResponseAmino): ActivateChainResponse {
    return {};
  },
  toAmino(_: ActivateChainResponse): ActivateChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ActivateChainResponseAminoMsg): ActivateChainResponse {
    return ActivateChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ActivateChainResponseProtoMsg): ActivateChainResponse {
    return ActivateChainResponse.decode(message.value);
  },
  toProto(message: ActivateChainResponse): Uint8Array {
    return ActivateChainResponse.encode(message).finish();
  },
  toProtoMsg(message: ActivateChainResponse): ActivateChainResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.ActivateChainResponse",
      value: ActivateChainResponse.encode(message).finish()
    };
  }
};
function createBaseDeactivateChainRequest(): DeactivateChainRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}
export const DeactivateChainRequest = {
  typeUrl: "/axelar.nexus.v1beta1.DeactivateChainRequest",
  encode(message: DeactivateChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    for (const v of message.chains) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): DeactivateChainRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<DeactivateChainRequest>): DeactivateChainRequest {
    const message = createBaseDeactivateChainRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DeactivateChainRequestAmino): DeactivateChainRequest {
    return {
      sender: object.sender,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => e) : []
    };
  },
  toAmino(message: DeactivateChainRequest): DeactivateChainRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }
    return obj;
  },
  fromAminoMsg(object: DeactivateChainRequestAminoMsg): DeactivateChainRequest {
    return DeactivateChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeactivateChainRequestProtoMsg): DeactivateChainRequest {
    return DeactivateChainRequest.decode(message.value);
  },
  toProto(message: DeactivateChainRequest): Uint8Array {
    return DeactivateChainRequest.encode(message).finish();
  },
  toProtoMsg(message: DeactivateChainRequest): DeactivateChainRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.DeactivateChainRequest",
      value: DeactivateChainRequest.encode(message).finish()
    };
  }
};
function createBaseDeactivateChainResponse(): DeactivateChainResponse {
  return {};
}
export const DeactivateChainResponse = {
  typeUrl: "/axelar.nexus.v1beta1.DeactivateChainResponse",
  encode(_: DeactivateChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): DeactivateChainResponse {
    return {};
  },
  fromPartial(_: Partial<DeactivateChainResponse>): DeactivateChainResponse {
    const message = createBaseDeactivateChainResponse();
    return message;
  },
  fromAmino(_: DeactivateChainResponseAmino): DeactivateChainResponse {
    return {};
  },
  toAmino(_: DeactivateChainResponse): DeactivateChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: DeactivateChainResponseAminoMsg): DeactivateChainResponse {
    return DeactivateChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DeactivateChainResponseProtoMsg): DeactivateChainResponse {
    return DeactivateChainResponse.decode(message.value);
  },
  toProto(message: DeactivateChainResponse): Uint8Array {
    return DeactivateChainResponse.encode(message).finish();
  },
  toProtoMsg(message: DeactivateChainResponse): DeactivateChainResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.DeactivateChainResponse",
      value: DeactivateChainResponse.encode(message).finish()
    };
  }
};
function createBaseRegisterAssetFeeRequest(): RegisterAssetFeeRequest {
  return {
    sender: new Uint8Array(),
    feeInfo: FeeInfo.fromPartial({})
  };
}
export const RegisterAssetFeeRequest = {
  typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeRequest",
  encode(message: RegisterAssetFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.feeInfo !== undefined) {
      FeeInfo.encode(message.feeInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RegisterAssetFeeRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      feeInfo: isSet(object.feeInfo) ? FeeInfo.fromJSON(object.feeInfo) : undefined
    };
  },
  fromPartial(object: Partial<RegisterAssetFeeRequest>): RegisterAssetFeeRequest {
    const message = createBaseRegisterAssetFeeRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.feeInfo = object.feeInfo !== undefined && object.feeInfo !== null ? FeeInfo.fromPartial(object.feeInfo) : undefined;
    return message;
  },
  fromAmino(object: RegisterAssetFeeRequestAmino): RegisterAssetFeeRequest {
    return {
      sender: object.sender,
      feeInfo: object?.fee_info ? FeeInfo.fromAmino(object.fee_info) : undefined
    };
  },
  toAmino(message: RegisterAssetFeeRequest): RegisterAssetFeeRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.fee_info = message.feeInfo ? FeeInfo.toAmino(message.feeInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterAssetFeeRequestAminoMsg): RegisterAssetFeeRequest {
    return RegisterAssetFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterAssetFeeRequestProtoMsg): RegisterAssetFeeRequest {
    return RegisterAssetFeeRequest.decode(message.value);
  },
  toProto(message: RegisterAssetFeeRequest): Uint8Array {
    return RegisterAssetFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisterAssetFeeRequest): RegisterAssetFeeRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeRequest",
      value: RegisterAssetFeeRequest.encode(message).finish()
    };
  }
};
function createBaseRegisterAssetFeeResponse(): RegisterAssetFeeResponse {
  return {};
}
export const RegisterAssetFeeResponse = {
  typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeResponse",
  encode(_: RegisterAssetFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RegisterAssetFeeResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterAssetFeeResponse>): RegisterAssetFeeResponse {
    const message = createBaseRegisterAssetFeeResponse();
    return message;
  },
  fromAmino(_: RegisterAssetFeeResponseAmino): RegisterAssetFeeResponse {
    return {};
  },
  toAmino(_: RegisterAssetFeeResponse): RegisterAssetFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RegisterAssetFeeResponseAminoMsg): RegisterAssetFeeResponse {
    return RegisterAssetFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterAssetFeeResponseProtoMsg): RegisterAssetFeeResponse {
    return RegisterAssetFeeResponse.decode(message.value);
  },
  toProto(message: RegisterAssetFeeResponse): Uint8Array {
    return RegisterAssetFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisterAssetFeeResponse): RegisterAssetFeeResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeResponse",
      value: RegisterAssetFeeResponse.encode(message).finish()
    };
  }
};
function createBaseSetTransferRateLimitRequest(): SetTransferRateLimitRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    limit: Coin.fromPartial({}),
    window: Duration.fromPartial({})
  };
}
export const SetTransferRateLimitRequest = {
  typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitRequest",
  encode(message: SetTransferRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.limit !== undefined) {
      Coin.encode(message.limit, writer.uint32(26).fork()).ldelim();
    }
    if (message.window !== undefined) {
      Duration.encode(message.window, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SetTransferRateLimitRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      limit: isSet(object.limit) ? Coin.fromJSON(object.limit) : undefined,
      window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined
    };
  },
  fromPartial(object: Partial<SetTransferRateLimitRequest>): SetTransferRateLimitRequest {
    const message = createBaseSetTransferRateLimitRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Coin.fromPartial(object.limit) : undefined;
    message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
    return message;
  },
  fromAmino(object: SetTransferRateLimitRequestAmino): SetTransferRateLimitRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      limit: object?.limit ? Coin.fromAmino(object.limit) : undefined,
      window: object?.window ? Duration.fromAmino(object.window) : undefined
    };
  },
  toAmino(message: SetTransferRateLimitRequest): SetTransferRateLimitRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.limit = message.limit ? Coin.toAmino(message.limit) : undefined;
    obj.window = message.window ? Duration.toAmino(message.window) : undefined;
    return obj;
  },
  fromAminoMsg(object: SetTransferRateLimitRequestAminoMsg): SetTransferRateLimitRequest {
    return SetTransferRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SetTransferRateLimitRequestProtoMsg): SetTransferRateLimitRequest {
    return SetTransferRateLimitRequest.decode(message.value);
  },
  toProto(message: SetTransferRateLimitRequest): Uint8Array {
    return SetTransferRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: SetTransferRateLimitRequest): SetTransferRateLimitRequestProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitRequest",
      value: SetTransferRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseSetTransferRateLimitResponse(): SetTransferRateLimitResponse {
  return {};
}
export const SetTransferRateLimitResponse = {
  typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitResponse",
  encode(_: SetTransferRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SetTransferRateLimitResponse {
    return {};
  },
  fromPartial(_: Partial<SetTransferRateLimitResponse>): SetTransferRateLimitResponse {
    const message = createBaseSetTransferRateLimitResponse();
    return message;
  },
  fromAmino(_: SetTransferRateLimitResponseAmino): SetTransferRateLimitResponse {
    return {};
  },
  toAmino(_: SetTransferRateLimitResponse): SetTransferRateLimitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SetTransferRateLimitResponseAminoMsg): SetTransferRateLimitResponse {
    return SetTransferRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SetTransferRateLimitResponseProtoMsg): SetTransferRateLimitResponse {
    return SetTransferRateLimitResponse.decode(message.value);
  },
  toProto(message: SetTransferRateLimitResponse): Uint8Array {
    return SetTransferRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: SetTransferRateLimitResponse): SetTransferRateLimitResponseProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitResponse",
      value: SetTransferRateLimitResponse.encode(message).finish()
    };
  }
};