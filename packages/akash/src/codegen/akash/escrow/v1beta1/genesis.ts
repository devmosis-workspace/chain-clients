import { Account, AccountAmino, AccountSDKType, Payment, PaymentAmino, PaymentSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
  accounts: Account[];
  payments: Payment[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateAmino {
  accounts?: AccountAmino[];
  payments?: PaymentAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/akash.escrow.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateSDKType {
  accounts: AccountSDKType[];
  payments: PaymentSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    payments: []
  };
}
export const GenesisState = {
  typeUrl: "/akash.escrow.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.payments) {
      Payment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => Payment.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.payments = object.payments?.map(e => Payment.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromAmino(e)) || [];
    message.payments = object.payments?.map(e => Payment.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? Payment.toAmino(e) : undefined);
    } else {
      obj.payments = [];
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
      typeUrl: "/akash.escrow.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};