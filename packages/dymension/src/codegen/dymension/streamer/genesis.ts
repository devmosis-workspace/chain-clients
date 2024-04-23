import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Stream, StreamAmino, StreamSDKType } from "./stream";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * GenesisState defines the streamer module's various parameters when first
 * initialized
 */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /** streams are all streams that should exist at genesis */
  streams: Stream[];
  /**
   * last_stream_id is what the stream number will increment from when creating
   * the next stream after genesis
   */
  lastStreamId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the streamer module's various parameters when first
 * initialized
 */
export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
  /** streams are all streams that should exist at genesis */
  streams?: StreamAmino[];
  /**
   * last_stream_id is what the stream number will increment from when creating
   * the next stream after genesis
   */
  last_stream_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "/dymensionxyz.dymension.streamer.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the streamer module's various parameters when first
 * initialized
 */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  streams: StreamSDKType[];
  last_stream_id: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    streams: [],
    lastStreamId: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/dymensionxyz.dymension.streamer.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.streams) {
      Stream.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastStreamId !== BigInt(0)) {
      writer.uint32(24).uint64(message.lastStreamId);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      streams: Array.isArray(object?.streams) ? object.streams.map((e: any) => Stream.fromJSON(e)) : [],
      lastStreamId: isSet(object.lastStreamId) ? BigInt(object.lastStreamId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.streams = object.streams?.map(e => Stream.fromPartial(e)) || [];
    message.lastStreamId = object.lastStreamId !== undefined && object.lastStreamId !== null ? BigInt(object.lastStreamId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.streams = object.streams?.map(e => Stream.fromAmino(e)) || [];
    if (object.last_stream_id !== undefined && object.last_stream_id !== null) {
      message.lastStreamId = BigInt(object.last_stream_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.streams) {
      obj.streams = message.streams.map(e => e ? Stream.toAmino(e) : undefined);
    } else {
      obj.streams = [];
    }
    obj.last_stream_id = message.lastStreamId ? message.lastStreamId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};