import { BaseVestingAccount, BaseVestingAccountAmino, BaseVestingAccountSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** ManualVestingAccount implements the VestingAccount interface. */
export interface ManualVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  vestedCoins: Coin[];
  unlocker: string;
}
export interface ManualVestingAccountProtoMsg {
  typeUrl: "/cosmos.auth.v1alpha1.ManualVestingAccount";
  value: Uint8Array;
}
/** ManualVestingAccount implements the VestingAccount interface. */
export interface ManualVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  vested_coins?: CoinAmino[];
  unlocker?: string;
}
export interface ManualVestingAccountAminoMsg {
  type: "cosmos-sdk/ManualVestingAccount";
  value: ManualVestingAccountAmino;
}
/** ManualVestingAccount implements the VestingAccount interface. */
export interface ManualVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  vested_coins: CoinSDKType[];
  unlocker: string;
}
function createBaseManualVestingAccount(): ManualVestingAccount {
  return {
    baseVestingAccount: undefined,
    vestedCoins: [],
    unlocker: ""
  };
}
export const ManualVestingAccount = {
  typeUrl: "/cosmos.auth.v1alpha1.ManualVestingAccount",
  encode(message: ManualVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vestedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.unlocker !== "") {
      writer.uint32(26).string(message.unlocker);
    }
    return writer;
  },
  fromJSON(object: any): ManualVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      vestedCoins: Array.isArray(object?.vestedCoins) ? object.vestedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      unlocker: isSet(object.unlocker) ? String(object.unlocker) : ""
    };
  },
  fromPartial(object: Partial<ManualVestingAccount>): ManualVestingAccount {
    const message = createBaseManualVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.vestedCoins = object.vestedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.unlocker = object.unlocker ?? "";
    return message;
  },
  fromAmino(object: ManualVestingAccountAmino): ManualVestingAccount {
    const message = createBaseManualVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    message.vestedCoins = object.vested_coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.unlocker !== undefined && object.unlocker !== null) {
      message.unlocker = object.unlocker;
    }
    return message;
  },
  toAmino(message: ManualVestingAccount): ManualVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
    if (message.vestedCoins) {
      obj.vested_coins = message.vestedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.vested_coins = message.vestedCoins;
    }
    obj.unlocker = message.unlocker === "" ? undefined : message.unlocker;
    return obj;
  },
  fromAminoMsg(object: ManualVestingAccountAminoMsg): ManualVestingAccount {
    return ManualVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: ManualVestingAccount): ManualVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/ManualVestingAccount",
      value: ManualVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: ManualVestingAccountProtoMsg): ManualVestingAccount {
    return ManualVestingAccount.decode(message.value);
  },
  toProto(message: ManualVestingAccount): Uint8Array {
    return ManualVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: ManualVestingAccount): ManualVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1alpha1.ManualVestingAccount",
      value: ManualVestingAccount.encode(message).finish()
    };
  }
};