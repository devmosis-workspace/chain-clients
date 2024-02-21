import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Failure, FailureAmino, FailureSDKType } from "./failure";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisState {
  params: Params;
  /** List of the contract failures */
  failuresList: Failure[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/neutron.contractmanager.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /** List of the contract failures */
  failures_list?: FailureAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/neutron.contractmanager.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  failures_list: FailureSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    failuresList: []
  };
}
export const GenesisState = {
  typeUrl: "/neutron.contractmanager.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.failuresList) {
      Failure.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      failuresList: Array.isArray(object?.failuresList) ? object.failuresList.map((e: any) => Failure.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.failuresList = object.failuresList?.map(e => Failure.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.failuresList = object.failures_list?.map(e => Failure.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.failuresList) {
      obj.failures_list = message.failuresList.map(e => e ? Failure.toAmino(e) : undefined);
    } else {
      obj.failures_list = [];
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
      typeUrl: "/neutron.contractmanager.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};