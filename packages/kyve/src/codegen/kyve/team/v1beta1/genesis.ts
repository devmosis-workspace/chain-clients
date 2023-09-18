import { Authority, AuthorityAmino, AuthoritySDKType, TeamVestingAccount, TeamVestingAccountAmino, TeamVestingAccountSDKType } from "./team";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the team module's genesis state. */
export interface GenesisState {
  /** authority ... */
  authority: Authority;
  /** account_list ... */
  accountList: TeamVestingAccount[];
  /** account_count ... */
  accountCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kyve.team.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the team module's genesis state. */
export interface GenesisStateAmino {
  /** authority ... */
  authority?: AuthorityAmino;
  /** account_list ... */
  account_list: TeamVestingAccountAmino[];
  /** account_count ... */
  account_count: string;
}
export interface GenesisStateAminoMsg {
  type: "/kyve.team.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the team module's genesis state. */
export interface GenesisStateSDKType {
  authority: AuthoritySDKType;
  account_list: TeamVestingAccountSDKType[];
  account_count: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    authority: Authority.fromPartial({}),
    accountList: [],
    accountCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/kyve.team.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== undefined) {
      Authority.encode(message.authority, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.accountList) {
      TeamVestingAccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.accountCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.accountCount);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      authority: isSet(object.authority) ? Authority.fromJSON(object.authority) : undefined,
      accountList: Array.isArray(object?.accountList) ? object.accountList.map((e: any) => TeamVestingAccount.fromJSON(e)) : [],
      accountCount: isSet(object.accountCount) ? BigInt(object.accountCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.authority = object.authority !== undefined && object.authority !== null ? Authority.fromPartial(object.authority) : undefined;
    message.accountList = object.accountList?.map(e => TeamVestingAccount.fromPartial(e)) || [];
    message.accountCount = object.accountCount !== undefined && object.accountCount !== null ? BigInt(object.accountCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      authority: object?.authority ? Authority.fromAmino(object.authority) : undefined,
      accountList: Array.isArray(object?.account_list) ? object.account_list.map((e: any) => TeamVestingAccount.fromAmino(e)) : [],
      accountCount: BigInt(object.account_count)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.authority = message.authority ? Authority.toAmino(message.authority) : undefined;
    if (message.accountList) {
      obj.account_list = message.accountList.map(e => e ? TeamVestingAccount.toAmino(e) : undefined);
    } else {
      obj.account_list = [];
    }
    obj.account_count = message.accountCount ? message.accountCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};