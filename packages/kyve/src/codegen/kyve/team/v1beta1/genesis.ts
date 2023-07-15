import { Authority, AuthoritySDKType, TeamVestingAccount, TeamVestingAccountSDKType } from "./team";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the team module's genesis state. */
export interface GenesisState {
  /** authority ... */
  authority?: Authority;
  /** account_list ... */
  accountList: TeamVestingAccount[];
  /** account_count ... */
  accountCount: Long;
}
/** GenesisState defines the team module's genesis state. */
export interface GenesisStateSDKType {
  authority?: AuthoritySDKType;
  account_list: TeamVestingAccountSDKType[];
  account_count: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    authority: undefined,
    accountList: [],
    accountCount: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== undefined) {
      Authority.encode(message.authority, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.accountList) {
      TeamVestingAccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.accountCount.isZero()) {
      writer.uint32(32).uint64(message.accountCount);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      authority: isSet(object.authority) ? Authority.fromJSON(object.authority) : undefined,
      accountList: Array.isArray(object?.accountList) ? object.accountList.map((e: any) => TeamVestingAccount.fromJSON(e)) : [],
      accountCount: isSet(object.accountCount) ? Long.fromValue(object.accountCount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.authority = object.authority !== undefined && object.authority !== null ? Authority.fromPartial(object.authority) : undefined;
    message.accountList = object.accountList?.map(e => TeamVestingAccount.fromPartial(e)) || [];
    message.accountCount = object.accountCount !== undefined && object.accountCount !== null ? Long.fromValue(object.accountCount) : Long.UZERO;
    return message;
  }
};