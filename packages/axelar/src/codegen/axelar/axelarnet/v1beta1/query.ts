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
  key?: string;
  value?: number;
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
  transfers_by_chain?: {
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
/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 */
export interface IBCPathRequest {
  /**
   * IBCPathRequest represents a message that queries the IBC path registered for
   * a given chain
   */
  chain: string;
}
export interface IBCPathRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCPathRequest";
  value: Uint8Array;
}
/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 */
export interface IBCPathRequestAmino {
  /**
   * IBCPathRequest represents a message that queries the IBC path registered for
   * a given chain
   */
  chain?: string;
}
export interface IBCPathRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.IBCPathRequest";
  value: IBCPathRequestAmino;
}
/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 */
export interface IBCPathRequestSDKType {
  chain: string;
}
export interface IBCPathResponse {
  ibcPath: string;
}
export interface IBCPathResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCPathResponse";
  value: Uint8Array;
}
export interface IBCPathResponseAmino {
  ibc_path?: string;
}
export interface IBCPathResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.IBCPathResponse";
  value: IBCPathResponseAmino;
}
export interface IBCPathResponseSDKType {
  ibc_path: string;
}
/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 */
export interface ChainByIBCPathRequest {
  /**
   * ChainByIBCPathRequest represents a message that queries the chain that an IBC
   * path is registered to
   */
  ibcPath: string;
}
export interface ChainByIBCPathRequestProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathRequest";
  value: Uint8Array;
}
/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 */
export interface ChainByIBCPathRequestAmino {
  /**
   * ChainByIBCPathRequest represents a message that queries the chain that an IBC
   * path is registered to
   */
  ibc_path?: string;
}
export interface ChainByIBCPathRequestAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ChainByIBCPathRequest";
  value: ChainByIBCPathRequestAmino;
}
/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 */
export interface ChainByIBCPathRequestSDKType {
  ibc_path: string;
}
export interface ChainByIBCPathResponse {
  chain: string;
}
export interface ChainByIBCPathResponseProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathResponse";
  value: Uint8Array;
}
export interface ChainByIBCPathResponseAmino {
  chain?: string;
}
export interface ChainByIBCPathResponseAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ChainByIBCPathResponse";
  value: ChainByIBCPathResponseAmino;
}
export interface ChainByIBCPathResponseSDKType {
  chain: string;
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
    const message = createBasePendingIBCTransferCountRequest();
    return message;
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
    const message = createBasePendingIBCTransferCountResponse_TransfersByChainEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
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
    const message = createBasePendingIBCTransferCountResponse();
    message.transfersByChain = Object.entries(object.transfers_by_chain ?? {}).reduce<{
      [key: string]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    return message;
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
    const message = createBaseParamsRequest();
    return message;
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
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
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
function createBaseIBCPathRequest(): IBCPathRequest {
  return {
    chain: ""
  };
}
export const IBCPathRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCPathRequest",
  encode(message: IBCPathRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): IBCPathRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<IBCPathRequest>): IBCPathRequest {
    const message = createBaseIBCPathRequest();
    message.chain = object.chain ?? "";
    return message;
  },
  fromAmino(object: IBCPathRequestAmino): IBCPathRequest {
    const message = createBaseIBCPathRequest();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    return message;
  },
  toAmino(message: IBCPathRequest): IBCPathRequestAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: IBCPathRequestAminoMsg): IBCPathRequest {
    return IBCPathRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCPathRequestProtoMsg): IBCPathRequest {
    return IBCPathRequest.decode(message.value);
  },
  toProto(message: IBCPathRequest): Uint8Array {
    return IBCPathRequest.encode(message).finish();
  },
  toProtoMsg(message: IBCPathRequest): IBCPathRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.IBCPathRequest",
      value: IBCPathRequest.encode(message).finish()
    };
  }
};
function createBaseIBCPathResponse(): IBCPathResponse {
  return {
    ibcPath: ""
  };
}
export const IBCPathResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCPathResponse",
  encode(message: IBCPathResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ibcPath !== "") {
      writer.uint32(10).string(message.ibcPath);
    }
    return writer;
  },
  fromJSON(object: any): IBCPathResponse {
    return {
      ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : ""
    };
  },
  fromPartial(object: Partial<IBCPathResponse>): IBCPathResponse {
    const message = createBaseIBCPathResponse();
    message.ibcPath = object.ibcPath ?? "";
    return message;
  },
  fromAmino(object: IBCPathResponseAmino): IBCPathResponse {
    const message = createBaseIBCPathResponse();
    if (object.ibc_path !== undefined && object.ibc_path !== null) {
      message.ibcPath = object.ibc_path;
    }
    return message;
  },
  toAmino(message: IBCPathResponse): IBCPathResponseAmino {
    const obj: any = {};
    obj.ibc_path = message.ibcPath;
    return obj;
  },
  fromAminoMsg(object: IBCPathResponseAminoMsg): IBCPathResponse {
    return IBCPathResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCPathResponseProtoMsg): IBCPathResponse {
    return IBCPathResponse.decode(message.value);
  },
  toProto(message: IBCPathResponse): Uint8Array {
    return IBCPathResponse.encode(message).finish();
  },
  toProtoMsg(message: IBCPathResponse): IBCPathResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.IBCPathResponse",
      value: IBCPathResponse.encode(message).finish()
    };
  }
};
function createBaseChainByIBCPathRequest(): ChainByIBCPathRequest {
  return {
    ibcPath: ""
  };
}
export const ChainByIBCPathRequest = {
  typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathRequest",
  encode(message: ChainByIBCPathRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ibcPath !== "") {
      writer.uint32(10).string(message.ibcPath);
    }
    return writer;
  },
  fromJSON(object: any): ChainByIBCPathRequest {
    return {
      ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : ""
    };
  },
  fromPartial(object: Partial<ChainByIBCPathRequest>): ChainByIBCPathRequest {
    const message = createBaseChainByIBCPathRequest();
    message.ibcPath = object.ibcPath ?? "";
    return message;
  },
  fromAmino(object: ChainByIBCPathRequestAmino): ChainByIBCPathRequest {
    const message = createBaseChainByIBCPathRequest();
    if (object.ibc_path !== undefined && object.ibc_path !== null) {
      message.ibcPath = object.ibc_path;
    }
    return message;
  },
  toAmino(message: ChainByIBCPathRequest): ChainByIBCPathRequestAmino {
    const obj: any = {};
    obj.ibc_path = message.ibcPath;
    return obj;
  },
  fromAminoMsg(object: ChainByIBCPathRequestAminoMsg): ChainByIBCPathRequest {
    return ChainByIBCPathRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainByIBCPathRequestProtoMsg): ChainByIBCPathRequest {
    return ChainByIBCPathRequest.decode(message.value);
  },
  toProto(message: ChainByIBCPathRequest): Uint8Array {
    return ChainByIBCPathRequest.encode(message).finish();
  },
  toProtoMsg(message: ChainByIBCPathRequest): ChainByIBCPathRequestProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathRequest",
      value: ChainByIBCPathRequest.encode(message).finish()
    };
  }
};
function createBaseChainByIBCPathResponse(): ChainByIBCPathResponse {
  return {
    chain: ""
  };
}
export const ChainByIBCPathResponse = {
  typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathResponse",
  encode(message: ChainByIBCPathResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): ChainByIBCPathResponse {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<ChainByIBCPathResponse>): ChainByIBCPathResponse {
    const message = createBaseChainByIBCPathResponse();
    message.chain = object.chain ?? "";
    return message;
  },
  fromAmino(object: ChainByIBCPathResponseAmino): ChainByIBCPathResponse {
    const message = createBaseChainByIBCPathResponse();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    return message;
  },
  toAmino(message: ChainByIBCPathResponse): ChainByIBCPathResponseAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: ChainByIBCPathResponseAminoMsg): ChainByIBCPathResponse {
    return ChainByIBCPathResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainByIBCPathResponseProtoMsg): ChainByIBCPathResponse {
    return ChainByIBCPathResponse.decode(message.value);
  },
  toProto(message: ChainByIBCPathResponse): Uint8Array {
    return ChainByIBCPathResponse.encode(message).finish();
  },
  toProtoMsg(message: ChainByIBCPathResponse): ChainByIBCPathResponseProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathResponse",
      value: ChainByIBCPathResponse.encode(message).finish()
    };
  }
};