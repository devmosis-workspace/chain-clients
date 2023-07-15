import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the savings module. */
export interface Params {
  supportedDenoms: string[];
}
/** Params defines the parameters for the savings module. */
export interface ParamsSDKType {
  supported_denoms: string[];
}
/** Deposit defines an amount of coins deposited into a savings module account. */
export interface Deposit {
  depositor: string;
  amount: Coin[];
}
/** Deposit defines an amount of coins deposited into a savings module account. */
export interface DepositSDKType {
  depositor: string;
  amount: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    supportedDenoms: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supportedDenoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      supportedDenoms: Array.isArray(object?.supportedDenoms) ? object.supportedDenoms.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.supportedDenoms = object.supportedDenoms?.map(e => e) || [];
    return message;
  }
};
function createBaseDeposit(): Deposit {
  return {
    depositor: "",
    amount: []
  };
}
export const Deposit = {
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Deposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};