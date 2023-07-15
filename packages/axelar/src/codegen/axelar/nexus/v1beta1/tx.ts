import { FeeInfo, FeeInfoSDKType } from "../exported/v1beta1/types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface RegisterChainMaintainerRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface RegisterChainMaintainerRequestSDKType {
  sender: Uint8Array;
  chains: string[];
}
export interface RegisterChainMaintainerResponse {}
export interface RegisterChainMaintainerResponseSDKType {}
export interface DeregisterChainMaintainerRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface DeregisterChainMaintainerRequestSDKType {
  sender: Uint8Array;
  chains: string[];
}
export interface DeregisterChainMaintainerResponse {}
export interface DeregisterChainMaintainerResponseSDKType {}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
  sender: Uint8Array;
  chains: string[];
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequestSDKType {
  sender: Uint8Array;
  chains: string[];
}
export interface ActivateChainResponse {}
export interface ActivateChainResponseSDKType {}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
  sender: Uint8Array;
  chains: string[];
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequestSDKType {
  sender: Uint8Array;
  chains: string[];
}
export interface DeactivateChainResponse {}
export interface DeactivateChainResponseSDKType {}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
  sender: Uint8Array;
  feeInfo?: FeeInfo;
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequestSDKType {
  sender: Uint8Array;
  fee_info?: FeeInfoSDKType;
}
export interface RegisterAssetFeeResponse {}
export interface RegisterAssetFeeResponseSDKType {}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequest {
  sender: Uint8Array;
  chain: string;
  limit?: Coin;
  window?: Duration;
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequestSDKType {
  sender: Uint8Array;
  chain: string;
  limit?: CoinSDKType;
  window?: DurationSDKType;
}
export interface SetTransferRateLimitResponse {}
export interface SetTransferRateLimitResponseSDKType {}
function createBaseRegisterChainMaintainerRequest(): RegisterChainMaintainerRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}
export const RegisterChainMaintainerRequest = {
  encode(message: RegisterChainMaintainerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRegisterChainMaintainerResponse(): RegisterChainMaintainerResponse {
  return {};
}
export const RegisterChainMaintainerResponse = {
  encode(_: RegisterChainMaintainerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RegisterChainMaintainerResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterChainMaintainerResponse>): RegisterChainMaintainerResponse {
    const message = createBaseRegisterChainMaintainerResponse();
    return message;
  }
};
function createBaseDeregisterChainMaintainerRequest(): DeregisterChainMaintainerRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}
export const DeregisterChainMaintainerRequest = {
  encode(message: DeregisterChainMaintainerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDeregisterChainMaintainerResponse(): DeregisterChainMaintainerResponse {
  return {};
}
export const DeregisterChainMaintainerResponse = {
  encode(_: DeregisterChainMaintainerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): DeregisterChainMaintainerResponse {
    return {};
  },
  fromPartial(_: Partial<DeregisterChainMaintainerResponse>): DeregisterChainMaintainerResponse {
    const message = createBaseDeregisterChainMaintainerResponse();
    return message;
  }
};
function createBaseActivateChainRequest(): ActivateChainRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}
export const ActivateChainRequest = {
  encode(message: ActivateChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseActivateChainResponse(): ActivateChainResponse {
  return {};
}
export const ActivateChainResponse = {
  encode(_: ActivateChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ActivateChainResponse {
    return {};
  },
  fromPartial(_: Partial<ActivateChainResponse>): ActivateChainResponse {
    const message = createBaseActivateChainResponse();
    return message;
  }
};
function createBaseDeactivateChainRequest(): DeactivateChainRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}
export const DeactivateChainRequest = {
  encode(message: DeactivateChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDeactivateChainResponse(): DeactivateChainResponse {
  return {};
}
export const DeactivateChainResponse = {
  encode(_: DeactivateChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): DeactivateChainResponse {
    return {};
  },
  fromPartial(_: Partial<DeactivateChainResponse>): DeactivateChainResponse {
    const message = createBaseDeactivateChainResponse();
    return message;
  }
};
function createBaseRegisterAssetFeeRequest(): RegisterAssetFeeRequest {
  return {
    sender: new Uint8Array(),
    feeInfo: undefined
  };
}
export const RegisterAssetFeeRequest = {
  encode(message: RegisterAssetFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRegisterAssetFeeResponse(): RegisterAssetFeeResponse {
  return {};
}
export const RegisterAssetFeeResponse = {
  encode(_: RegisterAssetFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RegisterAssetFeeResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterAssetFeeResponse>): RegisterAssetFeeResponse {
    const message = createBaseRegisterAssetFeeResponse();
    return message;
  }
};
function createBaseSetTransferRateLimitRequest(): SetTransferRateLimitRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    limit: undefined,
    window: undefined
  };
}
export const SetTransferRateLimitRequest = {
  encode(message: SetTransferRateLimitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseSetTransferRateLimitResponse(): SetTransferRateLimitResponse {
  return {};
}
export const SetTransferRateLimitResponse = {
  encode(_: SetTransferRateLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): SetTransferRateLimitResponse {
    return {};
  },
  fromPartial(_: Partial<SetTransferRateLimitResponse>): SetTransferRateLimitResponse {
    const message = createBaseSetTransferRateLimitResponse();
    return message;
  }
};