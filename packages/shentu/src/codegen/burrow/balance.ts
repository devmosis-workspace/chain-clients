import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Balance {
  Type: number;
  Amount: bigint;
}
export interface BalanceProtoMsg {
  typeUrl: "/balance.Balance";
  value: Uint8Array;
}
export interface BalanceAmino {
  Type?: number;
  Amount?: string;
}
export interface BalanceAminoMsg {
  type: "/balance.Balance";
  value: BalanceAmino;
}
export interface BalanceSDKType {
  Type: number;
  Amount: bigint;
}
function createBaseBalance(): Balance {
  return {
    Type: 0,
    Amount: BigInt(0)
  };
}
export const Balance = {
  typeUrl: "/balance.Balance",
  encode(message: Balance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Type !== 0) {
      writer.uint32(8).uint32(message.Type);
    }
    if (message.Amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.Amount);
    }
    return writer;
  },
  fromJSON(object: any): Balance {
    return {
      Type: isSet(object.Type) ? Number(object.Type) : 0,
      Amount: isSet(object.Amount) ? BigInt(object.Amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Balance>): Balance {
    const message = createBaseBalance();
    message.Type = object.Type ?? 0;
    message.Amount = object.Amount !== undefined && object.Amount !== null ? BigInt(object.Amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BalanceAmino): Balance {
    const message = createBaseBalance();
    if (object.Type !== undefined && object.Type !== null) {
      message.Type = object.Type;
    }
    if (object.Amount !== undefined && object.Amount !== null) {
      message.Amount = BigInt(object.Amount);
    }
    return message;
  },
  toAmino(message: Balance): BalanceAmino {
    const obj: any = {};
    obj.Type = message.Type === 0 ? undefined : message.Type;
    obj.Amount = message.Amount !== BigInt(0) ? message.Amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BalanceAminoMsg): Balance {
    return Balance.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceProtoMsg): Balance {
    return Balance.decode(message.value);
  },
  toProto(message: Balance): Uint8Array {
    return Balance.encode(message).finish();
  },
  toProtoMsg(message: Balance): BalanceProtoMsg {
    return {
      typeUrl: "/balance.Balance",
      value: Balance.encode(message).finish()
    };
  }
};