import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/** Lien contains the lien state of a particular account. */
export interface Lien {
  /** coins holds the amount liened */
  coins: Coin[];
  /**
   * delegated tracks the net amount delegated for non-vesting accounts,
   * or zero coins for vesting accounts.
   * (Vesting accounts have their own fields to track delegation.)
   */
  delegated: Coin[];
}
export interface LienProtoMsg {
  typeUrl: "/agoric.lien.Lien";
  value: Uint8Array;
}
/** Lien contains the lien state of a particular account. */
export interface LienAmino {
  /** coins holds the amount liened */
  coins: CoinAmino[];
  /**
   * delegated tracks the net amount delegated for non-vesting accounts,
   * or zero coins for vesting accounts.
   * (Vesting accounts have their own fields to track delegation.)
   */
  delegated: CoinAmino[];
}
export interface LienAminoMsg {
  type: "/agoric.lien.Lien";
  value: LienAmino;
}
/** Lien contains the lien state of a particular account. */
export interface LienSDKType {
  coins: CoinSDKType[];
  delegated: CoinSDKType[];
}
function createBaseLien(): Lien {
  return {
    coins: [],
    delegated: []
  };
}
export const Lien = {
  typeUrl: "/agoric.lien.Lien",
  encode(message: Lien, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.delegated) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Lien {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      delegated: Array.isArray(object?.delegated) ? object.delegated.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Lien>): Lien {
    const message = createBaseLien();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.delegated = object.delegated?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: LienAmino): Lien {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : [],
      delegated: Array.isArray(object?.delegated) ? object.delegated.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Lien): LienAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    if (message.delegated) {
      obj.delegated = message.delegated.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.delegated = [];
    }
    return obj;
  },
  fromAminoMsg(object: LienAminoMsg): Lien {
    return Lien.fromAmino(object.value);
  },
  fromProtoMsg(message: LienProtoMsg): Lien {
    return Lien.decode(message.value);
  },
  toProto(message: Lien): Uint8Array {
    return Lien.encode(message).finish();
  },
  toProtoMsg(message: Lien): LienProtoMsg {
    return {
      typeUrl: "/agoric.lien.Lien",
      value: Lien.encode(message).finish()
    };
  }
};