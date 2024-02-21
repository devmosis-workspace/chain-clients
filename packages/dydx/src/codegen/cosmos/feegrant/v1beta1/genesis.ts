import { Grant, GrantSDKType } from "./feegrant";
import { BinaryWriter } from "../../../binary";
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisState {
  allowances: Grant[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisStateSDKType {
  allowances: GrantSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    allowances: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.allowances = object.allowances?.map(e => Grant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.allowances = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};