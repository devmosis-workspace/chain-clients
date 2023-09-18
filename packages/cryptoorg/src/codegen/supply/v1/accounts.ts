import { BinaryWriter } from "../../binary";
/** VestingAccounts stored in keeper */
export interface VestingAccounts {
  /** addresses defines addresses of all the vesting accounts at genesis */
  addresses: string[];
}
export interface VestingAccountsProtoMsg {
  typeUrl: "/chainmain.supply.v1.VestingAccounts";
  value: Uint8Array;
}
/** VestingAccounts stored in keeper */
export interface VestingAccountsAmino {
  /** addresses defines addresses of all the vesting accounts at genesis */
  addresses: string[];
}
export interface VestingAccountsAminoMsg {
  type: "/chainmain.supply.v1.VestingAccounts";
  value: VestingAccountsAmino;
}
/** VestingAccounts stored in keeper */
export interface VestingAccountsSDKType {
  addresses: string[];
}
function createBaseVestingAccounts(): VestingAccounts {
  return {
    addresses: []
  };
}
export const VestingAccounts = {
  typeUrl: "/chainmain.supply.v1.VestingAccounts",
  encode(message: VestingAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): VestingAccounts {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<VestingAccounts>): VestingAccounts {
    const message = createBaseVestingAccounts();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: VestingAccountsAmino): VestingAccounts {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => e) : []
    };
  },
  toAmino(message: VestingAccounts): VestingAccountsAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: VestingAccountsAminoMsg): VestingAccounts {
    return VestingAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: VestingAccountsProtoMsg): VestingAccounts {
    return VestingAccounts.decode(message.value);
  },
  toProto(message: VestingAccounts): Uint8Array {
    return VestingAccounts.encode(message).finish();
  },
  toProtoMsg(message: VestingAccounts): VestingAccountsProtoMsg {
    return {
      typeUrl: "/chainmain.supply.v1.VestingAccounts",
      value: VestingAccounts.encode(message).finish()
    };
  }
};