import { StrategyType, strategyTypeFromJSON, strategyTypeToJSON } from "./strategy";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVault {
  /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
  denom: string;
  /** VaultStrategy is the strategy used for this vault. */
  strategies: StrategyType[];
  /**
   * IsPrivateVault is true if the vault only allows depositors contained in
   * AllowedDepositors.
   */
  isPrivateVault: boolean;
  /**
   * AllowedDepositors is a list of addresses that are allowed to deposit to
   * this vault if IsPrivateVault is true. Addresses not contained in this list
   * are not allowed to deposit into this vault. If IsPrivateVault is false,
   * this should be empty and ignored.
   */
  allowedDepositors: Uint8Array[];
}
export interface AllowedVaultProtoMsg {
  typeUrl: "/kava.earn.v1beta1.AllowedVault";
  value: Uint8Array;
}
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVaultAmino {
  /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
  denom: string;
  /** VaultStrategy is the strategy used for this vault. */
  strategies: StrategyType[];
  /**
   * IsPrivateVault is true if the vault only allows depositors contained in
   * AllowedDepositors.
   */
  is_private_vault: boolean;
  /**
   * AllowedDepositors is a list of addresses that are allowed to deposit to
   * this vault if IsPrivateVault is true. Addresses not contained in this list
   * are not allowed to deposit into this vault. If IsPrivateVault is false,
   * this should be empty and ignored.
   */
  allowed_depositors: Uint8Array[];
}
export interface AllowedVaultAminoMsg {
  type: "/kava.earn.v1beta1.AllowedVault";
  value: AllowedVaultAmino;
}
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVaultSDKType {
  denom: string;
  strategies: StrategyType[];
  is_private_vault: boolean;
  allowed_depositors: Uint8Array[];
}
/** VaultRecord is the state of a vault. */
export interface VaultRecord {
  /** TotalShares is the total distributed number of shares in the vault. */
  totalShares: VaultShare;
}
export interface VaultRecordProtoMsg {
  typeUrl: "/kava.earn.v1beta1.VaultRecord";
  value: Uint8Array;
}
/** VaultRecord is the state of a vault. */
export interface VaultRecordAmino {
  /** TotalShares is the total distributed number of shares in the vault. */
  total_shares?: VaultShareAmino;
}
export interface VaultRecordAminoMsg {
  type: "/kava.earn.v1beta1.VaultRecord";
  value: VaultRecordAmino;
}
/** VaultRecord is the state of a vault. */
export interface VaultRecordSDKType {
  total_shares: VaultShareSDKType;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecord {
  /** Depositor represents the owner of the shares */
  depositor: Uint8Array;
  /** Shares represent the vault shares owned by the depositor. */
  shares: VaultShare[];
}
export interface VaultShareRecordProtoMsg {
  typeUrl: "/kava.earn.v1beta1.VaultShareRecord";
  value: Uint8Array;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecordAmino {
  /** Depositor represents the owner of the shares */
  depositor: Uint8Array;
  /** Shares represent the vault shares owned by the depositor. */
  shares: VaultShareAmino[];
}
export interface VaultShareRecordAminoMsg {
  type: "/kava.earn.v1beta1.VaultShareRecord";
  value: VaultShareRecordAmino;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecordSDKType {
  depositor: Uint8Array;
  shares: VaultShareSDKType[];
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShare {
  denom: string;
  amount: string;
}
export interface VaultShareProtoMsg {
  typeUrl: "/kava.earn.v1beta1.VaultShare";
  value: Uint8Array;
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShareAmino {
  denom: string;
  amount: string;
}
export interface VaultShareAminoMsg {
  type: "/kava.earn.v1beta1.VaultShare";
  value: VaultShareAmino;
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShareSDKType {
  denom: string;
  amount: string;
}
function createBaseAllowedVault(): AllowedVault {
  return {
    denom: "",
    strategies: [],
    isPrivateVault: false,
    allowedDepositors: []
  };
}
export const AllowedVault = {
  typeUrl: "/kava.earn.v1beta1.AllowedVault",
  encode(message: AllowedVault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    writer.uint32(18).fork();
    for (const v of message.strategies) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.isPrivateVault === true) {
      writer.uint32(24).bool(message.isPrivateVault);
    }
    for (const v of message.allowedDepositors) {
      writer.uint32(34).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): AllowedVault {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      strategies: Array.isArray(object?.strategies) ? object.strategies.map((e: any) => strategyTypeFromJSON(e)) : [],
      isPrivateVault: isSet(object.isPrivateVault) ? Boolean(object.isPrivateVault) : false,
      allowedDepositors: Array.isArray(object?.allowedDepositors) ? object.allowedDepositors.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<AllowedVault>): AllowedVault {
    const message = createBaseAllowedVault();
    message.denom = object.denom ?? "";
    message.strategies = object.strategies?.map(e => e) || [];
    message.isPrivateVault = object.isPrivateVault ?? false;
    message.allowedDepositors = object.allowedDepositors?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AllowedVaultAmino): AllowedVault {
    return {
      denom: object.denom,
      strategies: Array.isArray(object?.strategies) ? object.strategies.map((e: any) => strategyTypeFromJSON(e)) : [],
      isPrivateVault: object.is_private_vault,
      allowedDepositors: Array.isArray(object?.allowed_depositors) ? object.allowed_depositors.map((e: any) => e) : []
    };
  },
  toAmino(message: AllowedVault): AllowedVaultAmino {
    const obj: any = {};
    obj.denom = message.denom;
    if (message.strategies) {
      obj.strategies = message.strategies.map(e => strategyTypeToJSON(e));
    } else {
      obj.strategies = [];
    }
    obj.is_private_vault = message.isPrivateVault;
    if (message.allowedDepositors) {
      obj.allowed_depositors = message.allowedDepositors.map(e => e);
    } else {
      obj.allowed_depositors = [];
    }
    return obj;
  },
  fromAminoMsg(object: AllowedVaultAminoMsg): AllowedVault {
    return AllowedVault.fromAmino(object.value);
  },
  fromProtoMsg(message: AllowedVaultProtoMsg): AllowedVault {
    return AllowedVault.decode(message.value);
  },
  toProto(message: AllowedVault): Uint8Array {
    return AllowedVault.encode(message).finish();
  },
  toProtoMsg(message: AllowedVault): AllowedVaultProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.AllowedVault",
      value: AllowedVault.encode(message).finish()
    };
  }
};
function createBaseVaultRecord(): VaultRecord {
  return {
    totalShares: VaultShare.fromPartial({})
  };
}
export const VaultRecord = {
  typeUrl: "/kava.earn.v1beta1.VaultRecord",
  encode(message: VaultRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalShares !== undefined) {
      VaultShare.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VaultRecord {
    return {
      totalShares: isSet(object.totalShares) ? VaultShare.fromJSON(object.totalShares) : undefined
    };
  },
  fromPartial(object: Partial<VaultRecord>): VaultRecord {
    const message = createBaseVaultRecord();
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? VaultShare.fromPartial(object.totalShares) : undefined;
    return message;
  },
  fromAmino(object: VaultRecordAmino): VaultRecord {
    return {
      totalShares: object?.total_shares ? VaultShare.fromAmino(object.total_shares) : undefined
    };
  },
  toAmino(message: VaultRecord): VaultRecordAmino {
    const obj: any = {};
    obj.total_shares = message.totalShares ? VaultShare.toAmino(message.totalShares) : undefined;
    return obj;
  },
  fromAminoMsg(object: VaultRecordAminoMsg): VaultRecord {
    return VaultRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultRecordProtoMsg): VaultRecord {
    return VaultRecord.decode(message.value);
  },
  toProto(message: VaultRecord): Uint8Array {
    return VaultRecord.encode(message).finish();
  },
  toProtoMsg(message: VaultRecord): VaultRecordProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.VaultRecord",
      value: VaultRecord.encode(message).finish()
    };
  }
};
function createBaseVaultShareRecord(): VaultShareRecord {
  return {
    depositor: new Uint8Array(),
    shares: []
  };
}
export const VaultShareRecord = {
  typeUrl: "/kava.earn.v1beta1.VaultShareRecord",
  encode(message: VaultShareRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor.length !== 0) {
      writer.uint32(10).bytes(message.depositor);
    }
    for (const v of message.shares) {
      VaultShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VaultShareRecord {
    return {
      depositor: isSet(object.depositor) ? bytesFromBase64(object.depositor) : new Uint8Array(),
      shares: Array.isArray(object?.shares) ? object.shares.map((e: any) => VaultShare.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<VaultShareRecord>): VaultShareRecord {
    const message = createBaseVaultShareRecord();
    message.depositor = object.depositor ?? new Uint8Array();
    message.shares = object.shares?.map(e => VaultShare.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VaultShareRecordAmino): VaultShareRecord {
    return {
      depositor: object.depositor,
      shares: Array.isArray(object?.shares) ? object.shares.map((e: any) => VaultShare.fromAmino(e)) : []
    };
  },
  toAmino(message: VaultShareRecord): VaultShareRecordAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    if (message.shares) {
      obj.shares = message.shares.map(e => e ? VaultShare.toAmino(e) : undefined);
    } else {
      obj.shares = [];
    }
    return obj;
  },
  fromAminoMsg(object: VaultShareRecordAminoMsg): VaultShareRecord {
    return VaultShareRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultShareRecordProtoMsg): VaultShareRecord {
    return VaultShareRecord.decode(message.value);
  },
  toProto(message: VaultShareRecord): Uint8Array {
    return VaultShareRecord.encode(message).finish();
  },
  toProtoMsg(message: VaultShareRecord): VaultShareRecordProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.VaultShareRecord",
      value: VaultShareRecord.encode(message).finish()
    };
  }
};
function createBaseVaultShare(): VaultShare {
  return {
    denom: "",
    amount: ""
  };
}
export const VaultShare = {
  typeUrl: "/kava.earn.v1beta1.VaultShare",
  encode(message: VaultShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): VaultShare {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<VaultShare>): VaultShare {
    const message = createBaseVaultShare();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: VaultShareAmino): VaultShare {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino(message: VaultShare): VaultShareAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: VaultShareAminoMsg): VaultShare {
    return VaultShare.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultShareProtoMsg): VaultShare {
    return VaultShare.decode(message.value);
  },
  toProto(message: VaultShare): Uint8Array {
    return VaultShare.encode(message).finish();
  },
  toProtoMsg(message: VaultShare): VaultShareProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.VaultShare",
      value: VaultShare.encode(message).finish()
    };
  }
};