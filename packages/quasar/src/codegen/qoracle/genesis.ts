import { Params as Params1 } from "./params";
import { ParamsAmino as Params1Amino } from "./params";
import { ParamsSDKType as Params1SDKType } from "./params";
import { Params as Params2 } from "./osmosis/params";
import { ParamsAmino as Params2Amino } from "./osmosis/params";
import { ParamsSDKType as Params2SDKType } from "./osmosis/params";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** GenesisState defines the qoracle module's genesis state. */
export interface GenesisState {
  params: Params1;
  osmosisGenesisState: OsmosisGenesisState;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the qoracle module's genesis state. */
export interface GenesisStateAmino {
  params?: Params1Amino;
  osmosis_genesis_state?: OsmosisGenesisStateAmino;
}
export interface GenesisStateAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the qoracle module's genesis state. */
export interface GenesisStateSDKType {
  params: Params1SDKType;
  osmosis_genesis_state: OsmosisGenesisStateSDKType;
}
/** OsmosisGenesisState defines the qoracle osmosis submodule's genesis state. */
export interface OsmosisGenesisState {
  port: string;
  params: Params2;
}
export interface OsmosisGenesisStateProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.OsmosisGenesisState";
  value: Uint8Array;
}
/** OsmosisGenesisState defines the qoracle osmosis submodule's genesis state. */
export interface OsmosisGenesisStateAmino {
  port?: string;
  params?: Params2Amino;
}
export interface OsmosisGenesisStateAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.OsmosisGenesisState";
  value: OsmosisGenesisStateAmino;
}
/** OsmosisGenesisState defines the qoracle osmosis submodule's genesis state. */
export interface OsmosisGenesisStateSDKType {
  port: string;
  params: Params2SDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params1.fromPartial({}),
    osmosisGenesisState: OsmosisGenesisState.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params1.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.osmosisGenesisState !== undefined) {
      OsmosisGenesisState.encode(message.osmosisGenesisState, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params1.fromJSON(object.params) : undefined,
      osmosisGenesisState: isSet(object.osmosisGenesisState) ? OsmosisGenesisState.fromJSON(object.osmosisGenesisState) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params1.fromPartial(object.params) : undefined;
    message.osmosisGenesisState = object.osmosisGenesisState !== undefined && object.osmosisGenesisState !== null ? OsmosisGenesisState.fromPartial(object.osmosisGenesisState) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params1.fromAmino(object.params);
    }
    if (object.osmosis_genesis_state !== undefined && object.osmosis_genesis_state !== null) {
      message.osmosisGenesisState = OsmosisGenesisState.fromAmino(object.osmosis_genesis_state);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params1.toAmino(message.params) : undefined;
    obj.osmosis_genesis_state = message.osmosisGenesisState ? OsmosisGenesisState.toAmino(message.osmosisGenesisState) : undefined;
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
      typeUrl: "/quasarlabs.quasarnode.qoracle.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseOsmosisGenesisState(): OsmosisGenesisState {
  return {
    port: "",
    params: Params2.fromPartial({})
  };
}
export const OsmosisGenesisState = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.OsmosisGenesisState",
  encode(message: OsmosisGenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port !== "") {
      writer.uint32(10).string(message.port);
    }
    if (message.params !== undefined) {
      Params2.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): OsmosisGenesisState {
    return {
      port: isSet(object.port) ? String(object.port) : "",
      params: isSet(object.params) ? Params2.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<OsmosisGenesisState>): OsmosisGenesisState {
    const message = createBaseOsmosisGenesisState();
    message.port = object.port ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params2.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: OsmosisGenesisStateAmino): OsmosisGenesisState {
    const message = createBaseOsmosisGenesisState();
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params2.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: OsmosisGenesisState): OsmosisGenesisStateAmino {
    const obj: any = {};
    obj.port = message.port;
    obj.params = message.params ? Params2.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: OsmosisGenesisStateAminoMsg): OsmosisGenesisState {
    return OsmosisGenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: OsmosisGenesisStateProtoMsg): OsmosisGenesisState {
    return OsmosisGenesisState.decode(message.value);
  },
  toProto(message: OsmosisGenesisState): Uint8Array {
    return OsmosisGenesisState.encode(message).finish();
  },
  toProtoMsg(message: OsmosisGenesisState): OsmosisGenesisStateProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.OsmosisGenesisState",
      value: OsmosisGenesisState.encode(message).finish()
    };
  }
};