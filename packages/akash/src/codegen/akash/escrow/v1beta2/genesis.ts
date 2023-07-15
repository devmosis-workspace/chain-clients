import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
  accounts: Account[];
  payments: FractionalPayment[];
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateSDKType {
  accounts: AccountSDKType[];
  payments: FractionalPaymentSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    payments: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.payments) {
      FractionalPayment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => FractionalPayment.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.payments = object.payments?.map(e => FractionalPayment.fromPartial(e)) || [];
    return message;
  }
};