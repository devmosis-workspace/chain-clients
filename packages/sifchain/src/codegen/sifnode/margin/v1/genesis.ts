import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { MTP, MTPAmino, MTPSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  params?: Params;
  mtpList: MTP[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sifnode.margin.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino;
  mtp_list?: MTPAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sifnode.margin.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  mtp_list: MTPSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    mtpList: []
  };
}
export const GenesisState = {
  typeUrl: "/sifnode.margin.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mtpList) {
      MTP.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      mtpList: Array.isArray(object?.mtpList) ? object.mtpList.map((e: any) => MTP.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.mtpList = object.mtpList?.map(e => MTP.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.mtpList = object.mtp_list?.map(e => MTP.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.mtpList) {
      obj.mtp_list = message.mtpList.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtp_list = message.mtpList;
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
      typeUrl: "/sifnode.margin.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};