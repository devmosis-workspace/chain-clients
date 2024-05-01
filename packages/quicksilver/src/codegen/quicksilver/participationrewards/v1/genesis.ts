import { Params, ParamsAmino, ParamsSDKType, KeyedProtocolData, KeyedProtocolDataAmino, KeyedProtocolDataSDKType } from "./participationrewards";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisState {
  params: Params;
  protocolData: KeyedProtocolData[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  protocol_data?: KeyedProtocolDataAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/quicksilver.participationrewards.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  protocol_data: KeyedProtocolDataSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    protocolData: []
  };
}
export const GenesisState = {
  typeUrl: "/quicksilver.participationrewards.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.protocolData) {
      KeyedProtocolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      protocolData: Array.isArray(object?.protocolData) ? object.protocolData.map((e: any) => KeyedProtocolData.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.protocolData = object.protocolData?.map(e => KeyedProtocolData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.protocolData = object.protocol_data?.map(e => KeyedProtocolData.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.protocolData) {
      obj.protocol_data = message.protocolData.map(e => e ? KeyedProtocolData.toAmino(e) : undefined);
    } else {
      obj.protocol_data = [];
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
      typeUrl: "/quicksilver.participationrewards.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};