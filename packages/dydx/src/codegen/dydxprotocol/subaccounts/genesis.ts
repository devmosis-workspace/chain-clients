import { Subaccount, SubaccountSDKType } from "./subaccount";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the subaccounts module's genesis state. */
export interface GenesisState {
  subaccounts: Subaccount[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dydxprotocol.subaccounts.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the subaccounts module's genesis state. */
export interface GenesisStateSDKType {
  subaccounts: SubaccountSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    subaccounts: []
  };
}
export const GenesisState = {
  typeUrl: "/dydxprotocol.subaccounts.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccounts) {
      Subaccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      subaccounts: Array.isArray(object?.subaccounts) ? object.subaccounts.map((e: any) => Subaccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.subaccounts = object.subaccounts?.map(e => Subaccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.subaccounts = object.subaccounts?.map(e => Subaccount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.subaccounts) {
      obj.subaccounts = message.subaccounts.map(e => e ? Subaccount.toAmino(e) : undefined);
    } else {
      obj.subaccounts = [];
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
      typeUrl: "/dydxprotocol.subaccounts.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};