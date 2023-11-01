import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, isObject } from "../../../helpers";
export interface PendingIBCTransferCountRequest {}
export interface PendingIBCTransferCountRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest";
  value: Uint8Array;
}
export interface PendingIBCTransferCountRequestAmino {}
export interface PendingIBCTransferCountRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest";
  value: PendingIBCTransferCountRequestAmino;
}
export interface PendingIBCTransferCountRequestSDKType {}
export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
  key: string;
  value: number;
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntryAmino {
  key: string;
  value: number;
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntryAminoMsg {
  type: string;
  value: PendingIBCTransferCountResponse_TransfersByChainEntryAmino;
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntrySDKType {
  key: string;
  value: number;
}
export interface PendingIBCTransferCountResponse {
  transfersByChain: {
    [key: string]: number;
  };
}
export interface PendingIBCTransferCountResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse";
  value: Uint8Array;
}
export interface PendingIBCTransferCountResponseAmino {
  transfers_by_chain: {
    [key: string]: number;
  };
}
export interface PendingIBCTransferCountResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse";
  value: PendingIBCTransferCountResponseAmino;
}
export interface PendingIBCTransferCountResponseSDKType {
  transfers_by_chain: {
    [key: string]: number;
  };
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ParamsResponse";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBasePendingIBCTransferCountRequest(): PendingIBCTransferCountRequest {
  return {};
}
export const PendingIBCTransferCountRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest",
  encode(_: PendingIBCTransferCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): PendingIBCTransferCountRequest {
    return {};
  },
  fromPartial(_: Partial<PendingIBCTransferCountRequest>): PendingIBCTransferCountRequest {
    const message = createBasePendingIBCTransferCountRequest();
    return message;
  },
  fromAmino(_: PendingIBCTransferCountRequestAmino): PendingIBCTransferCountRequest {
    return {};
  },
  toAmino(_: PendingIBCTransferCountRequest): PendingIBCTransferCountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: PendingIBCTransferCountRequestAminoMsg): PendingIBCTransferCountRequest {
    return PendingIBCTransferCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingIBCTransferCountRequestProtoMsg): PendingIBCTransferCountRequest {
    return PendingIBCTransferCountRequest.decode(message.value);
  },
  toProto(message: PendingIBCTransferCountRequest): Uint8Array {
    return PendingIBCTransferCountRequest.encode(message).finish();
  },
  toProtoMsg(message: PendingIBCTransferCountRequest): PendingIBCTransferCountRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest",
      value: PendingIBCTransferCountRequest.encode(message).finish()
    };
  }
};
function createBasePendingIBCTransferCountResponse_TransfersByChainEntry(): PendingIBCTransferCountResponse_TransfersByChainEntry {
  return {
    key: "",
    value: 0
  };
}
export const PendingIBCTransferCountResponse_TransfersByChainEntry = {
  encode(message: PendingIBCTransferCountResponse_TransfersByChainEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },
  fromJSON(object: any): PendingIBCTransferCountResponse_TransfersByChainEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  fromPartial(object: Partial<PendingIBCTransferCountResponse_TransfersByChainEntry>): PendingIBCTransferCountResponse_TransfersByChainEntry {
    const message = createBasePendingIBCTransferCountResponse_TransfersByChainEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
  fromAmino(object: PendingIBCTransferCountResponse_TransfersByChainEntryAmino): PendingIBCTransferCountResponse_TransfersByChainEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: PendingIBCTransferCountResponse_TransfersByChainEntry): PendingIBCTransferCountResponse_TransfersByChainEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: PendingIBCTransferCountResponse_TransfersByChainEntryAminoMsg): PendingIBCTransferCountResponse_TransfersByChainEntry {
    return PendingIBCTransferCountResponse_TransfersByChainEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingIBCTransferCountResponse_TransfersByChainEntryProtoMsg): PendingIBCTransferCountResponse_TransfersByChainEntry {
    return PendingIBCTransferCountResponse_TransfersByChainEntry.decode(message.value);
  },
  toProto(message: PendingIBCTransferCountResponse_TransfersByChainEntry): Uint8Array {
    return PendingIBCTransferCountResponse_TransfersByChainEntry.encode(message).finish();
  }
};
function createBasePendingIBCTransferCountResponse(): PendingIBCTransferCountResponse {
  return {
    transfersByChain: {}
  };
}
export const PendingIBCTransferCountResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse",
  encode(message: PendingIBCTransferCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.transfersByChain).forEach(([key, value]) => {
      PendingIBCTransferCountResponse_TransfersByChainEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(8).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): PendingIBCTransferCountResponse {
    return {
      transfersByChain: isObject(object.transfersByChain) ? Object.entries(object.transfersByChain).reduce<{
        [key: string]: number;
      }>((acc, [key, value]) => {
        acc[key] = Number(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<PendingIBCTransferCountResponse>): PendingIBCTransferCountResponse {
    const message = createBasePendingIBCTransferCountResponse();
    message.transfersByChain = Object.entries(object.transfersByChain ?? {}).reduce<{
      [key: string]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: PendingIBCTransferCountResponseAmino): PendingIBCTransferCountResponse {
    return {
      transfersByChain: isObject(object.transfers_by_chain) ? Object.entries(object.transfers_by_chain).reduce<{
        [key: string]: number;
      }>((acc, [key, value]) => {
        acc[key] = Number(value);
        return acc;
      }, {}) : {}
    };
  },
  toAmino(message: PendingIBCTransferCountResponse): PendingIBCTransferCountResponseAmino {
    const obj: any = {};
    obj.transfers_by_chain = {};
    if (message.transfersByChain) {
      Object.entries(message.transfersByChain).forEach(([k, v]) => {
        obj.transfers_by_chain[k] = Math.round(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: PendingIBCTransferCountResponseAminoMsg): PendingIBCTransferCountResponse {
    return PendingIBCTransferCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingIBCTransferCountResponseProtoMsg): PendingIBCTransferCountResponse {
    return PendingIBCTransferCountResponse.decode(message.value);
  },
  toProto(message: PendingIBCTransferCountResponse): Uint8Array {
    return PendingIBCTransferCountResponse.encode(message).finish();
  },
  toProtoMsg(message: PendingIBCTransferCountResponse): PendingIBCTransferCountResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse",
      value: PendingIBCTransferCountResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    return {};
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};