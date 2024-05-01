import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface ExercisedAmount {
  address: string;
  amount: Coin;
}
export interface ExercisedAmountProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.ExercisedAmount";
  value: Uint8Array;
}
export interface ExercisedAmountAmino {
  address?: string;
  amount?: CoinAmino;
}
export interface ExercisedAmountAminoMsg {
  type: "/gitopia.gitopia.gitopia.ExercisedAmount";
  value: ExercisedAmountAmino;
}
export interface ExercisedAmountSDKType {
  address: string;
  amount: CoinSDKType;
}
function createBaseExercisedAmount(): ExercisedAmount {
  return {
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const ExercisedAmount = {
  typeUrl: "/gitopia.gitopia.gitopia.ExercisedAmount",
  encode(message: ExercisedAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ExercisedAmount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<ExercisedAmount>): ExercisedAmount {
    const message = createBaseExercisedAmount();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: ExercisedAmountAmino): ExercisedAmount {
    const message = createBaseExercisedAmount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: ExercisedAmount): ExercisedAmountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExercisedAmountAminoMsg): ExercisedAmount {
    return ExercisedAmount.fromAmino(object.value);
  },
  fromProtoMsg(message: ExercisedAmountProtoMsg): ExercisedAmount {
    return ExercisedAmount.decode(message.value);
  },
  toProto(message: ExercisedAmount): Uint8Array {
    return ExercisedAmount.encode(message).finish();
  },
  toProtoMsg(message: ExercisedAmount): ExercisedAmountProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.ExercisedAmount",
      value: ExercisedAmount.encode(message).finish()
    };
  }
};