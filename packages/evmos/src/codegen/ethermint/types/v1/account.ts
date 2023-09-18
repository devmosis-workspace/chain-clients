import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
  $typeUrl?: string;
  /** base_account is an authtypes.BaseAccount */
  baseAccount: BaseAccount;
  /** code_hash is the hash calculated from the code contents */
  codeHash: string;
}
export interface EthAccountProtoMsg {
  typeUrl: "/ethermint.types.v1.EthAccount";
  value: Uint8Array;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountAmino {
  /** base_account is an authtypes.BaseAccount */
  base_account?: BaseAccountAmino;
  /** code_hash is the hash calculated from the code contents */
  code_hash: string;
}
export interface EthAccountAminoMsg {
  type: "/ethermint.types.v1.EthAccount";
  value: EthAccountAmino;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountSDKType {
  $typeUrl?: string;
  base_account: BaseAccountSDKType;
  code_hash: string;
}
function createBaseEthAccount(): EthAccount {
  return {
    $typeUrl: "/ethermint.types.v1.EthAccount",
    baseAccount: BaseAccount.fromPartial({}),
    codeHash: ""
  };
}
export const EthAccount = {
  typeUrl: "/ethermint.types.v1.EthAccount",
  encode(message: EthAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.codeHash !== "") {
      writer.uint32(18).string(message.codeHash);
    }
    return writer;
  },
  fromJSON(object: any): EthAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      codeHash: isSet(object.codeHash) ? String(object.codeHash) : ""
    };
  },
  fromPartial(object: Partial<EthAccount>): EthAccount {
    const message = createBaseEthAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.codeHash = object.codeHash ?? "";
    return message;
  },
  fromAmino(object: EthAccountAmino): EthAccount {
    return {
      baseAccount: object?.base_account ? BaseAccount.fromAmino(object.base_account) : undefined,
      codeHash: object.code_hash
    };
  },
  toAmino(message: EthAccount): EthAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    obj.code_hash = message.codeHash;
    return obj;
  },
  fromAminoMsg(object: EthAccountAminoMsg): EthAccount {
    return EthAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: EthAccountProtoMsg): EthAccount {
    return EthAccount.decode(message.value);
  },
  toProto(message: EthAccount): Uint8Array {
    return EthAccount.encode(message).finish();
  },
  toProtoMsg(message: EthAccount): EthAccountProtoMsg {
    return {
      typeUrl: "/ethermint.types.v1.EthAccount",
      value: EthAccount.encode(message).finish()
    };
  }
};