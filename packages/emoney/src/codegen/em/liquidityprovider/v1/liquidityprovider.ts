import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface LiquidityProviderAccount {
  /**
   * Any string address representation with the accompanying supporting encoding
   * and validation functions starting with bech32. However, in the
   * interest of cultivating wider acceptance for this module other arbitrary
   * address encodings outside the supported cosmos sdk formats perhaps would
   * fit nicely with this loosely defined provider identity specifier.
   */
  address: string;
  mintable: Coin[];
}
export interface LiquidityProviderAccountSDKType {
  address: string;
  mintable: CoinSDKType[];
}
function createBaseLiquidityProviderAccount(): LiquidityProviderAccount {
  return {
    address: "",
    mintable: []
  };
}
export const LiquidityProviderAccount = {
  encode(message: LiquidityProviderAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.mintable) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProviderAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      mintable: Array.isArray(object?.mintable) ? object.mintable.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LiquidityProviderAccount>): LiquidityProviderAccount {
    const message = createBaseLiquidityProviderAccount();
    message.address = object.address ?? "";
    message.mintable = object.mintable?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};