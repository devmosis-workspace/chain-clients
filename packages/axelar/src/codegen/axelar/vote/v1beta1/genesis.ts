import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { PollMetadata, PollMetadataAmino, PollMetadataSDKType } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  params: Params;
  pollMetadatas: PollMetadata[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/axelar.vote.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino;
  poll_metadatas?: PollMetadataAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/axelar.vote.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  poll_metadatas: PollMetadataSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    pollMetadatas: []
  };
}
export const GenesisState = {
  typeUrl: "/axelar.vote.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pollMetadatas) {
      PollMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      pollMetadatas: Array.isArray(object?.pollMetadatas) ? object.pollMetadatas.map((e: any) => PollMetadata.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.pollMetadatas = object.pollMetadatas?.map(e => PollMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.pollMetadatas = object.poll_metadatas?.map(e => PollMetadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.pollMetadatas) {
      obj.poll_metadatas = message.pollMetadatas.map(e => e ? PollMetadata.toAmino(e) : undefined);
    } else {
      obj.poll_metadatas = [];
    }
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
      typeUrl: "/axelar.vote.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};