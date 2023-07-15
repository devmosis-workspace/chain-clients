import * as _m0 from "protobufjs/minimal";
/** VestingAccounts stored in keeper */
export interface VestingAccounts {
  /** addresses defines addresses of all the vesting accounts at genesis */
  addresses: string[];
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
  encode(message: VestingAccounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};