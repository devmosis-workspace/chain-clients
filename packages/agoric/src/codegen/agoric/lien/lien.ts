import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
  encode(message: Lien, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};