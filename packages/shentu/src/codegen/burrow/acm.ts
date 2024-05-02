import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "./crypto";
import { AccountPermissions, AccountPermissionsAmino, AccountPermissionsSDKType } from "./permission";
import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../helpers";
export interface Account {
  Address: Uint8Array;
  PublicKey: PublicKey;
  /** Sequence counts the number of transactions that have been accepted from this account */
  Sequence: bigint;
  /** The account's current native token balance */
  Balance: bigint;
  /**
   * We expect exactly one of EVMCode, WASMCode, and NativeName to be non-empty
   * EVM bytecode
   */
  EVMCode: Uint8Array;
  Permissions: AccountPermissions;
  /** WASM bytecode */
  WASMCode: Uint8Array;
  /**
   * Fully qualified (`<contract name>.<function name>`) name of native contract this for which this account object
   * is a sentinel value. Which is to say this account object is a pointer to compiled code and does not contain
   * the contract logic in its entirety
   */
  NativeName: string;
  /** The sha3 hash of the code associated with the account */
  CodeHash: Uint8Array;
  /** Pointer to the Metadata associated with this account */
  ContractMeta: ContractMeta[];
  /**
   * The metadata is stored in the deployed account. When the deployed account creates new account
   * (from Solidity/EVM), they point to the original deployed account where the metadata is stored.
   * This original account is called the forebear.
   */
  Forebear: Uint8Array;
}
export interface AccountProtoMsg {
  typeUrl: "/acm.Account";
  value: Uint8Array;
}
export interface AccountAmino {
  Address?: string;
  PublicKey?: PublicKeyAmino;
  /** Sequence counts the number of transactions that have been accepted from this account */
  Sequence?: string;
  /** The account's current native token balance */
  Balance?: string;
  /**
   * We expect exactly one of EVMCode, WASMCode, and NativeName to be non-empty
   * EVM bytecode
   */
  EVMCode?: string;
  Permissions?: AccountPermissionsAmino;
  /** WASM bytecode */
  WASMCode?: string;
  /**
   * Fully qualified (`<contract name>.<function name>`) name of native contract this for which this account object
   * is a sentinel value. Which is to say this account object is a pointer to compiled code and does not contain
   * the contract logic in its entirety
   */
  NativeName?: string;
  /** The sha3 hash of the code associated with the account */
  CodeHash: string;
  /** Pointer to the Metadata associated with this account */
  ContractMeta?: ContractMetaAmino[];
  /**
   * The metadata is stored in the deployed account. When the deployed account creates new account
   * (from Solidity/EVM), they point to the original deployed account where the metadata is stored.
   * This original account is called the forebear.
   */
  Forebear?: string;
}
export interface AccountAminoMsg {
  type: "/acm.Account";
  value: AccountAmino;
}
export interface AccountSDKType {
  Address: Uint8Array;
  PublicKey: PublicKeySDKType;
  Sequence: bigint;
  Balance: bigint;
  EVMCode: Uint8Array;
  Permissions: AccountPermissionsSDKType;
  WASMCode: Uint8Array;
  NativeName: string;
  CodeHash: Uint8Array;
  ContractMeta: ContractMetaSDKType[];
  Forebear: Uint8Array;
}
export interface ContractMeta {
  CodeHash: Uint8Array;
  MetadataHash: Uint8Array;
  /** In the dump format we would like the ABI rather than its hash */
  Metadata: string;
}
export interface ContractMetaProtoMsg {
  typeUrl: "/acm.ContractMeta";
  value: Uint8Array;
}
export interface ContractMetaAmino {
  CodeHash?: string;
  MetadataHash?: string;
  /** In the dump format we would like the ABI rather than its hash */
  Metadata?: string;
}
export interface ContractMetaAminoMsg {
  type: "/acm.ContractMeta";
  value: ContractMetaAmino;
}
export interface ContractMetaSDKType {
  CodeHash: Uint8Array;
  MetadataHash: Uint8Array;
  Metadata: string;
}
function createBaseAccount(): Account {
  return {
    Address: new Uint8Array(),
    PublicKey: PublicKey.fromPartial({}),
    Sequence: BigInt(0),
    Balance: BigInt(0),
    EVMCode: new Uint8Array(),
    Permissions: AccountPermissions.fromPartial({}),
    WASMCode: new Uint8Array(),
    NativeName: "",
    CodeHash: new Uint8Array(),
    ContractMeta: [],
    Forebear: new Uint8Array()
  };
}
export const Account = {
  typeUrl: "/acm.Account",
  encode(message: Account, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Address.length !== 0) {
      writer.uint32(10).bytes(message.Address);
    }
    if (message.PublicKey !== undefined) {
      PublicKey.encode(message.PublicKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.Sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.Sequence);
    }
    if (message.Balance !== BigInt(0)) {
      writer.uint32(32).uint64(message.Balance);
    }
    if (message.EVMCode.length !== 0) {
      writer.uint32(42).bytes(message.EVMCode);
    }
    if (message.Permissions !== undefined) {
      AccountPermissions.encode(message.Permissions, writer.uint32(50).fork()).ldelim();
    }
    if (message.WASMCode.length !== 0) {
      writer.uint32(58).bytes(message.WASMCode);
    }
    if (message.NativeName !== "") {
      writer.uint32(90).string(message.NativeName);
    }
    if (message.CodeHash.length !== 0) {
      writer.uint32(66).bytes(message.CodeHash);
    }
    for (const v of message.ContractMeta) {
      ContractMeta.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.Forebear.length !== 0) {
      writer.uint32(82).bytes(message.Forebear);
    }
    return writer;
  },
  fromJSON(object: any): Account {
    return {
      Address: isSet(object.Address) ? bytesFromBase64(object.Address) : new Uint8Array(),
      PublicKey: isSet(object.PublicKey) ? PublicKey.fromJSON(object.PublicKey) : undefined,
      Sequence: isSet(object.Sequence) ? BigInt(object.Sequence.toString()) : BigInt(0),
      Balance: isSet(object.Balance) ? BigInt(object.Balance.toString()) : BigInt(0),
      EVMCode: isSet(object.EVMCode) ? bytesFromBase64(object.EVMCode) : new Uint8Array(),
      Permissions: isSet(object.Permissions) ? AccountPermissions.fromJSON(object.Permissions) : undefined,
      WASMCode: isSet(object.WASMCode) ? bytesFromBase64(object.WASMCode) : new Uint8Array(),
      NativeName: isSet(object.NativeName) ? String(object.NativeName) : "",
      CodeHash: isSet(object.CodeHash) ? bytesFromBase64(object.CodeHash) : new Uint8Array(),
      ContractMeta: Array.isArray(object?.ContractMeta) ? object.ContractMeta.map((e: any) => ContractMeta.fromJSON(e)) : [],
      Forebear: isSet(object.Forebear) ? bytesFromBase64(object.Forebear) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Account>): Account {
    const message = createBaseAccount();
    message.Address = object.Address ?? new Uint8Array();
    message.PublicKey = object.PublicKey !== undefined && object.PublicKey !== null ? PublicKey.fromPartial(object.PublicKey) : undefined;
    message.Sequence = object.Sequence !== undefined && object.Sequence !== null ? BigInt(object.Sequence.toString()) : BigInt(0);
    message.Balance = object.Balance !== undefined && object.Balance !== null ? BigInt(object.Balance.toString()) : BigInt(0);
    message.EVMCode = object.EVMCode ?? new Uint8Array();
    message.Permissions = object.Permissions !== undefined && object.Permissions !== null ? AccountPermissions.fromPartial(object.Permissions) : undefined;
    message.WASMCode = object.WASMCode ?? new Uint8Array();
    message.NativeName = object.NativeName ?? "";
    message.CodeHash = object.CodeHash ?? new Uint8Array();
    message.ContractMeta = object.ContractMeta?.map(e => ContractMeta.fromPartial(e)) || [];
    message.Forebear = object.Forebear ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AccountAmino): Account {
    const message = createBaseAccount();
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = bytesFromBase64(object.Address);
    }
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      message.PublicKey = PublicKey.fromAmino(object.PublicKey);
    }
    if (object.Sequence !== undefined && object.Sequence !== null) {
      message.Sequence = BigInt(object.Sequence);
    }
    if (object.Balance !== undefined && object.Balance !== null) {
      message.Balance = BigInt(object.Balance);
    }
    if (object.EVMCode !== undefined && object.EVMCode !== null) {
      message.EVMCode = bytesFromBase64(object.EVMCode);
    }
    if (object.Permissions !== undefined && object.Permissions !== null) {
      message.Permissions = AccountPermissions.fromAmino(object.Permissions);
    }
    if (object.WASMCode !== undefined && object.WASMCode !== null) {
      message.WASMCode = bytesFromBase64(object.WASMCode);
    }
    if (object.NativeName !== undefined && object.NativeName !== null) {
      message.NativeName = object.NativeName;
    }
    if (object.CodeHash !== undefined && object.CodeHash !== null) {
      message.CodeHash = bytesFromBase64(object.CodeHash);
    }
    message.ContractMeta = object.ContractMeta?.map(e => ContractMeta.fromAmino(e)) || [];
    if (object.Forebear !== undefined && object.Forebear !== null) {
      message.Forebear = bytesFromBase64(object.Forebear);
    }
    return message;
  },
  toAmino(message: Account): AccountAmino {
    const obj: any = {};
    obj.Address = message.Address ? base64FromBytes(message.Address) : undefined;
    obj.PublicKey = message.PublicKey ? PublicKey.toAmino(message.PublicKey) : undefined;
    obj.Sequence = message.Sequence !== BigInt(0) ? message.Sequence.toString() : undefined;
    obj.Balance = message.Balance !== BigInt(0) ? message.Balance.toString() : undefined;
    obj.EVMCode = message.EVMCode ? base64FromBytes(message.EVMCode) : undefined;
    obj.Permissions = message.Permissions ? AccountPermissions.toAmino(message.Permissions) : undefined;
    obj.WASMCode = message.WASMCode ? base64FromBytes(message.WASMCode) : undefined;
    obj.NativeName = message.NativeName === "" ? undefined : message.NativeName;
    obj.CodeHash = message.CodeHash ? base64FromBytes(message.CodeHash) : "";
    if (message.ContractMeta) {
      obj.ContractMeta = message.ContractMeta.map(e => e ? ContractMeta.toAmino(e) : undefined);
    } else {
      obj.ContractMeta = message.ContractMeta;
    }
    obj.Forebear = message.Forebear ? base64FromBytes(message.Forebear) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountAminoMsg): Account {
    return Account.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountProtoMsg): Account {
    return Account.decode(message.value);
  },
  toProto(message: Account): Uint8Array {
    return Account.encode(message).finish();
  },
  toProtoMsg(message: Account): AccountProtoMsg {
    return {
      typeUrl: "/acm.Account",
      value: Account.encode(message).finish()
    };
  }
};
function createBaseContractMeta(): ContractMeta {
  return {
    CodeHash: new Uint8Array(),
    MetadataHash: new Uint8Array(),
    Metadata: ""
  };
}
export const ContractMeta = {
  typeUrl: "/acm.ContractMeta",
  encode(message: ContractMeta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.CodeHash.length !== 0) {
      writer.uint32(10).bytes(message.CodeHash);
    }
    if (message.MetadataHash.length !== 0) {
      writer.uint32(18).bytes(message.MetadataHash);
    }
    if (message.Metadata !== "") {
      writer.uint32(26).string(message.Metadata);
    }
    return writer;
  },
  fromJSON(object: any): ContractMeta {
    return {
      CodeHash: isSet(object.CodeHash) ? bytesFromBase64(object.CodeHash) : new Uint8Array(),
      MetadataHash: isSet(object.MetadataHash) ? bytesFromBase64(object.MetadataHash) : new Uint8Array(),
      Metadata: isSet(object.Metadata) ? String(object.Metadata) : ""
    };
  },
  fromPartial(object: Partial<ContractMeta>): ContractMeta {
    const message = createBaseContractMeta();
    message.CodeHash = object.CodeHash ?? new Uint8Array();
    message.MetadataHash = object.MetadataHash ?? new Uint8Array();
    message.Metadata = object.Metadata ?? "";
    return message;
  },
  fromAmino(object: ContractMetaAmino): ContractMeta {
    const message = createBaseContractMeta();
    if (object.CodeHash !== undefined && object.CodeHash !== null) {
      message.CodeHash = bytesFromBase64(object.CodeHash);
    }
    if (object.MetadataHash !== undefined && object.MetadataHash !== null) {
      message.MetadataHash = bytesFromBase64(object.MetadataHash);
    }
    if (object.Metadata !== undefined && object.Metadata !== null) {
      message.Metadata = object.Metadata;
    }
    return message;
  },
  toAmino(message: ContractMeta): ContractMetaAmino {
    const obj: any = {};
    obj.CodeHash = message.CodeHash ? base64FromBytes(message.CodeHash) : undefined;
    obj.MetadataHash = message.MetadataHash ? base64FromBytes(message.MetadataHash) : undefined;
    obj.Metadata = message.Metadata === "" ? undefined : message.Metadata;
    return obj;
  },
  fromAminoMsg(object: ContractMetaAminoMsg): ContractMeta {
    return ContractMeta.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractMetaProtoMsg): ContractMeta {
    return ContractMeta.decode(message.value);
  },
  toProto(message: ContractMeta): Uint8Array {
    return ContractMeta.encode(message).finish();
  },
  toProtoMsg(message: ContractMeta): ContractMetaProtoMsg {
    return {
      typeUrl: "/acm.ContractMeta",
      value: ContractMeta.encode(message).finish()
    };
  }
};