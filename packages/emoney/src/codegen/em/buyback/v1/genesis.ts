import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  interval: string;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/em.buyback.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  interval: string;
}
export interface GenesisStateAminoMsg {
  type: "/em.buyback.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  interval: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    interval: ""
  };
}
export const GenesisState = {
  typeUrl: "/em.buyback.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interval !== "") {
      writer.uint32(10).string(message.interval);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      interval: isSet(object.interval) ? String(object.interval) : ""
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.interval = object.interval ?? "";
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      interval: object.interval
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.interval = message.interval;
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
      typeUrl: "/em.buyback.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};