import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Deposit {
  address: string;
  coins: Coin[];
}
export interface DepositProtoMsg {
  typeUrl: "/sentinel.deposit.v1.Deposit";
  value: Uint8Array;
}
export interface DepositAmino {
  address?: string;
  coins?: CoinAmino[];
}
export interface DepositAminoMsg {
  type: "/sentinel.deposit.v1.Deposit";
  value: DepositAmino;
}
export interface DepositSDKType {
  address: string;
  coins: CoinSDKType[];
}
function createBaseDeposit(): Deposit {
  return {
    address: "",
    coins: []
  };
}
export const Deposit = {
  typeUrl: "/sentinel.deposit.v1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Deposit {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.address = object.address ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
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
      typeUrl: "/sentinel.deposit.v1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};