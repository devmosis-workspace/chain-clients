import { ClassTrace, ClassTraceAmino, ClassTraceSDKType } from "./trace";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisState {
  portId: string;
  traces: ClassTrace[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisStateAmino {
  port_id: string;
  traces: ClassTraceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/chainmain.nft_transfer.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc-nft-transfer genesis state */
export interface GenesisStateSDKType {
  port_id: string;
  traces: ClassTraceSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    portId: "",
    traces: []
  };
}
export const GenesisState = {
  typeUrl: "/chainmain.nft_transfer.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    for (const v of message.traces) {
      ClassTrace.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      traces: Array.isArray(object?.traces) ? object.traces.map((e: any) => ClassTrace.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.portId = object.portId ?? "";
    message.traces = object.traces?.map(e => ClassTrace.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      portId: object.port_id,
      traces: Array.isArray(object?.traces) ? object.traces.map((e: any) => ClassTrace.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    if (message.traces) {
      obj.traces = message.traces.map(e => e ? ClassTrace.toAmino(e) : undefined);
    } else {
      obj.traces = [];
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
      typeUrl: "/chainmain.nft_transfer.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};