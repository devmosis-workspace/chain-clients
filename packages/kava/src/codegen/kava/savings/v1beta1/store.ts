import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the savings module. */
export interface Params {
  supportedDenoms: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/kava.savings.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the savings module. */
export interface ParamsAmino {
  supported_denoms: string[];
}
export interface ParamsAminoMsg {
  type: "/kava.savings.v1beta1.Params";
  value: ParamsAmino;
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
export interface DepositProtoMsg {
  typeUrl: "/kava.savings.v1beta1.Deposit";
  value: Uint8Array;
}
/** Deposit defines an amount of coins deposited into a savings module account. */
export interface DepositAmino {
  depositor: string;
  amount: CoinAmino[];
}
export interface DepositAminoMsg {
  type: "/kava.savings.v1beta1.Deposit";
  value: DepositAmino;
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
  typeUrl: "/kava.savings.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      supportedDenoms: Array.isArray(object?.supported_denoms) ? object.supported_denoms.map((e: any) => e) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.supportedDenoms) {
      obj.supported_denoms = message.supportedDenoms.map(e => e);
    } else {
      obj.supported_denoms = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kava.savings.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDeposit(): Deposit {
  return {
    depositor: "",
    amount: []
  };
}
export const Deposit = {
  typeUrl: "/kava.savings.v1beta1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DepositAmino): Deposit {
    return {
      depositor: object.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/kava.savings.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};