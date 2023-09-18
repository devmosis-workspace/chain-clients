import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
export interface LiquidityProviderAccountProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.LiquidityProviderAccount";
  value: Uint8Array;
}
export interface LiquidityProviderAccountAmino {
  /**
   * Any string address representation with the accompanying supporting encoding
   * and validation functions starting with bech32. However, in the
   * interest of cultivating wider acceptance for this module other arbitrary
   * address encodings outside the supported cosmos sdk formats perhaps would
   * fit nicely with this loosely defined provider identity specifier.
   */
  address: string;
  mintable: CoinAmino[];
}
export interface LiquidityProviderAccountAminoMsg {
  type: "/em.liquidityprovider.v1.LiquidityProviderAccount";
  value: LiquidityProviderAccountAmino;
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
  typeUrl: "/em.liquidityprovider.v1.LiquidityProviderAccount",
  encode(message: LiquidityProviderAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LiquidityProviderAccountAmino): LiquidityProviderAccount {
    return {
      address: object.address,
      mintable: Array.isArray(object?.mintable) ? object.mintable.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: LiquidityProviderAccount): LiquidityProviderAccountAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.mintable) {
      obj.mintable = message.mintable.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.mintable = [];
    }
    return obj;
  },
  fromAminoMsg(object: LiquidityProviderAccountAminoMsg): LiquidityProviderAccount {
    return LiquidityProviderAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProviderAccountProtoMsg): LiquidityProviderAccount {
    return LiquidityProviderAccount.decode(message.value);
  },
  toProto(message: LiquidityProviderAccount): Uint8Array {
    return LiquidityProviderAccount.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProviderAccount): LiquidityProviderAccountProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.LiquidityProviderAccount",
      value: LiquidityProviderAccount.encode(message).finish()
    };
  }
};