import { Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType } from "./store";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the savings module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  deposits: Deposit[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.savings.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the savings module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  deposits?: DepositAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.savings.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the savings module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  deposits: DepositSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    deposits: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.savings.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
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
      typeUrl: "/kava.savings.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};