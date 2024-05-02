import { Params, ParamsAmino, ParamsSDKType } from "./market";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** the gap between the TerraPool and the BasePool */
  terraPoolDelta: Uint8Array;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/terra.market.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the market module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  /** the gap between the TerraPool and the BasePool */
  terra_pool_delta?: string;
}
export interface GenesisStateAminoMsg {
  type: "/terra.market.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the market module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  terra_pool_delta: Uint8Array;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    terraPoolDelta: new Uint8Array()
  };
}
export const GenesisState = {
  typeUrl: "/terra.market.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.terraPoolDelta.length !== 0) {
      writer.uint32(18).bytes(message.terraPoolDelta);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      terraPoolDelta: isSet(object.terraPoolDelta) ? bytesFromBase64(object.terraPoolDelta) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.terraPoolDelta = object.terraPoolDelta ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.terra_pool_delta !== undefined && object.terra_pool_delta !== null) {
      message.terraPoolDelta = bytesFromBase64(object.terra_pool_delta);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.terra_pool_delta = message.terraPoolDelta ? base64FromBytes(message.terraPoolDelta) : undefined;
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
      typeUrl: "/terra.market.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};