import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../../cosmos/auth/v1beta1/auth";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
  $typeUrl?: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
  baseAccount?: BaseAccount;
  accountOwner: string;
}
export interface InterchainAccountProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
  value: Uint8Array;
}
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccountAmino {
  base_account?: BaseAccountAmino;
  account_owner?: string;
}
export interface InterchainAccountAminoMsg {
  type: "cosmos-sdk/InterchainAccount";
  value: InterchainAccountAmino;
}
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccountSDKType {
  $typeUrl?: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
  base_account?: BaseAccountSDKType;
  account_owner: string;
}
function createBaseInterchainAccount(): InterchainAccount {
  return {
    $typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
    baseAccount: undefined,
    accountOwner: ""
  };
}
export const InterchainAccount = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
  encode(message: InterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountOwner !== "") {
      writer.uint32(18).string(message.accountOwner);
    }
    return writer;
  },
  fromJSON(object: any): InterchainAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      accountOwner: isSet(object.accountOwner) ? String(object.accountOwner) : ""
    };
  },
  fromPartial(object: Partial<InterchainAccount>): InterchainAccount {
    const message = createBaseInterchainAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.accountOwner = object.accountOwner ?? "";
    return message;
  },
  fromAmino(object: InterchainAccountAmino): InterchainAccount {
    const message = createBaseInterchainAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.baseAccount = BaseAccount.fromAmino(object.base_account);
    }
    if (object.account_owner !== undefined && object.account_owner !== null) {
      message.accountOwner = object.account_owner;
    }
    return message;
  },
  toAmino(message: InterchainAccount): InterchainAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    obj.account_owner = message.accountOwner === "" ? undefined : message.accountOwner;
    return obj;
  },
  fromAminoMsg(object: InterchainAccountAminoMsg): InterchainAccount {
    return InterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message: InterchainAccount): InterchainAccountAminoMsg {
    return {
      type: "cosmos-sdk/InterchainAccount",
      value: InterchainAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: InterchainAccountProtoMsg): InterchainAccount {
    return InterchainAccount.decode(message.value);
  },
  toProto(message: InterchainAccount): Uint8Array {
    return InterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: InterchainAccount): InterchainAccountProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
      value: InterchainAccount.encode(message).finish()
    };
  }
};