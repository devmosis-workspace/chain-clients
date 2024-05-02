import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** Fees proto wrapper for pool.go methods */
export interface Fees {
  fees: DecCoin[];
}
export interface FeesProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.Fees";
  value: Uint8Array;
}
/** Fees proto wrapper for pool.go methods */
export interface FeesAmino {
  fees?: DecCoinAmino[];
}
export interface FeesAminoMsg {
  type: "/shentu.shield.v1alpha1.Fees";
  value: FeesAmino;
}
/** Fees proto wrapper for pool.go methods */
export interface FeesSDKType {
  fees: DecCoinSDKType[];
}
/** Pool contains a shield project pool's data. */
export interface Pool {
  id: bigint;
  description: string;
  sponsor: string;
  sponsorAddr: string;
  shieldLimit: string;
  active: boolean;
  shield: string;
}
export interface PoolProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.Pool";
  value: Uint8Array;
}
/** Pool contains a shield project pool's data. */
export interface PoolAmino {
  id?: string;
  description?: string;
  sponsor?: string;
  sponsor_addr?: string;
  shield_limit?: string;
  active?: boolean;
  shield?: string;
}
export interface PoolAminoMsg {
  type: "/shentu.shield.v1alpha1.Pool";
  value: PoolAmino;
}
/** Pool contains a shield project pool's data. */
export interface PoolSDKType {
  id: bigint;
  description: string;
  sponsor: string;
  sponsor_addr: string;
  shield_limit: string;
  active: boolean;
  shield: string;
}
/** Purchase record an individual purchase. */
export interface Purchase {
  /** PurchaseID is the purchase_id. */
  purchaseId: bigint;
  /** ProtectionEndTime is the time when the protection of the shield ends. */
  protectionEndTime: Timestamp;
  /** DeletionTime is the time when the purchase should be deleted. */
  deletionTime: Timestamp;
  /** Description is the information about the protected asset. */
  description: string;
  /** Shield is the unused amount of shield purchased. */
  shield: string;
  /** ServiceFees is the native service fee paid by this purchase */
  serviceFees: DecCoin[];
}
export interface PurchaseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.Purchase";
  value: Uint8Array;
}
/** Purchase record an individual purchase. */
export interface PurchaseAmino {
  /** PurchaseID is the purchase_id. */
  purchase_id?: string;
  /** ProtectionEndTime is the time when the protection of the shield ends. */
  protection_end_time?: string;
  /** DeletionTime is the time when the purchase should be deleted. */
  deletion_time?: string;
  /** Description is the information about the protected asset. */
  description?: string;
  /** Shield is the unused amount of shield purchased. */
  shield?: string;
  /** ServiceFees is the native service fee paid by this purchase */
  service_fees?: DecCoinAmino[];
}
export interface PurchaseAminoMsg {
  type: "/shentu.shield.v1alpha1.Purchase";
  value: PurchaseAmino;
}
/** Purchase record an individual purchase. */
export interface PurchaseSDKType {
  purchase_id: bigint;
  protection_end_time: TimestampSDKType;
  deletion_time: TimestampSDKType;
  description: string;
  shield: string;
  service_fees: DecCoinSDKType[];
}
/** PurchaseList is a collection of purchase. */
export interface PurchaseList {
  /** PoolID is the id of the shield of the purchase. */
  poolId: bigint;
  /** Purchaser is the address making the purchase. */
  purchaser: string;
  /** Entries stores all purchases by the purchaser in the pool. */
  entries: Purchase[];
}
export interface PurchaseListProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.PurchaseList";
  value: Uint8Array;
}
/** PurchaseList is a collection of purchase. */
export interface PurchaseListAmino {
  /** PoolID is the id of the shield of the purchase. */
  pool_id?: string;
  /** Purchaser is the address making the purchase. */
  purchaser?: string;
  /** Entries stores all purchases by the purchaser in the pool. */
  entries?: PurchaseAmino[];
}
export interface PurchaseListAminoMsg {
  type: "/shentu.shield.v1alpha1.PurchaseList";
  value: PurchaseListAmino;
}
/** PurchaseList is a collection of purchase. */
export interface PurchaseListSDKType {
  pool_id: bigint;
  purchaser: string;
  entries: PurchaseSDKType[];
}
/** Provider tracks total delegation, total collateral, and rewards of a provider. */
export interface Provider {
  /** Address is the address of the provider. */
  address: string;
  /** DelegationBonded is the amount of bonded delegation. */
  delegationBonded: string;
  /**
   * Collateral is amount of all collaterals for the provider, including
   * those in withdraw queue but excluding those currently locked, in all
   * pools.
   */
  collateral: string;
  /** TotalLocked is the amount locked for pending claims. */
  totalLocked: string;
  /** Withdrawing is the amount of collateral in withdraw queues. */
  withdrawing: string;
  /** Rewards is the pooling rewards to be collected. */
  rewards: DecCoin[];
}
export interface ProviderProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.Provider";
  value: Uint8Array;
}
/** Provider tracks total delegation, total collateral, and rewards of a provider. */
export interface ProviderAmino {
  /** Address is the address of the provider. */
  address?: string;
  /** DelegationBonded is the amount of bonded delegation. */
  delegation_bonded?: string;
  /**
   * Collateral is amount of all collaterals for the provider, including
   * those in withdraw queue but excluding those currently locked, in all
   * pools.
   */
  collateral?: string;
  /** TotalLocked is the amount locked for pending claims. */
  total_locked?: string;
  /** Withdrawing is the amount of collateral in withdraw queues. */
  withdrawing?: string;
  /** Rewards is the pooling rewards to be collected. */
  rewards?: DecCoinAmino[];
}
export interface ProviderAminoMsg {
  type: "/shentu.shield.v1alpha1.Provider";
  value: ProviderAmino;
}
/** Provider tracks total delegation, total collateral, and rewards of a provider. */
export interface ProviderSDKType {
  address: string;
  delegation_bonded: string;
  collateral: string;
  total_locked: string;
  withdrawing: string;
  rewards: DecCoinSDKType[];
}
/** PoolPurchase is a pair of pool id and purchaser. */
export interface PoolPurchaser {
  /** PoolID is the id of the shield pool. */
  poolId: bigint;
  /** Purchaser is the chain address of the purchaser. */
  purchaser: string;
}
export interface PoolPurchaserProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.PoolPurchaser";
  value: Uint8Array;
}
/** PoolPurchase is a pair of pool id and purchaser. */
export interface PoolPurchaserAmino {
  /** PoolID is the id of the shield pool. */
  pool_id?: string;
  /** Purchaser is the chain address of the purchaser. */
  purchaser?: string;
}
export interface PoolPurchaserAminoMsg {
  type: "/shentu.shield.v1alpha1.PoolPurchaser";
  value: PoolPurchaserAmino;
}
/** PoolPurchase is a pair of pool id and purchaser. */
export interface PoolPurchaserSDKType {
  pool_id: bigint;
  purchaser: string;
}
/** PoolPurchaserPairs defines an array of PoolPurchaser objects. */
export interface PoolPurchaserPairs {
  pairs: PoolPurchaser[];
}
export interface PoolPurchaserPairsProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.PoolPurchaserPairs";
  value: Uint8Array;
}
/** PoolPurchaserPairs defines an array of PoolPurchaser objects. */
export interface PoolPurchaserPairsAmino {
  pairs?: PoolPurchaserAmino[];
}
export interface PoolPurchaserPairsAminoMsg {
  type: "/shentu.shield.v1alpha1.PoolPurchaserPairs";
  value: PoolPurchaserPairsAmino;
}
/** PoolPurchaserPairs defines an array of PoolPurchaser objects. */
export interface PoolPurchaserPairsSDKType {
  pairs: PoolPurchaserSDKType[];
}
/** Withdraw stores an ongoing withdraw of pool collateral. */
export interface Withdraw {
  /** Address is the chain address of the provider withdrawing. */
  address: string;
  /** Amount is the amount of withdraw. */
  amount: string;
  /** CompletionTime is the scheduled withdraw completion time. */
  completionTime: Timestamp;
}
export interface WithdrawProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.Withdraw";
  value: Uint8Array;
}
/** Withdraw stores an ongoing withdraw of pool collateral. */
export interface WithdrawAmino {
  /** Address is the chain address of the provider withdrawing. */
  address?: string;
  /** Amount is the amount of withdraw. */
  amount?: string;
  /** CompletionTime is the scheduled withdraw completion time. */
  completion_time?: string;
}
export interface WithdrawAminoMsg {
  type: "/shentu.shield.v1alpha1.Withdraw";
  value: WithdrawAmino;
}
/** Withdraw stores an ongoing withdraw of pool collateral. */
export interface WithdrawSDKType {
  address: string;
  amount: string;
  completion_time: TimestampSDKType;
}
/** Withdraws defines an array of Withdraw objects. */
export interface Withdraws {
  withdraws: Withdraw[];
}
export interface WithdrawsProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.Withdraws";
  value: Uint8Array;
}
/** Withdraws defines an array of Withdraw objects. */
export interface WithdrawsAmino {
  withdraws?: WithdrawAmino[];
}
export interface WithdrawsAminoMsg {
  type: "/shentu.shield.v1alpha1.Withdraws";
  value: WithdrawsAmino;
}
/** Withdraws defines an array of Withdraw objects. */
export interface WithdrawsSDKType {
  withdraws: WithdrawSDKType[];
}
export interface ShieldStaking {
  poolId: bigint;
  purchaser: string;
  amount: string;
  withdrawRequested: string;
}
export interface ShieldStakingProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.ShieldStaking";
  value: Uint8Array;
}
export interface ShieldStakingAmino {
  pool_id?: string;
  purchaser?: string;
  amount?: string;
  withdraw_requested?: string;
}
export interface ShieldStakingAminoMsg {
  type: "/shentu.shield.v1alpha1.ShieldStaking";
  value: ShieldStakingAmino;
}
export interface ShieldStakingSDKType {
  pool_id: bigint;
  purchaser: string;
  amount: string;
  withdraw_requested: string;
}
export interface LastUpdateTime {
  time?: Timestamp;
}
export interface LastUpdateTimeProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.LastUpdateTime";
  value: Uint8Array;
}
export interface LastUpdateTimeAmino {
  time?: string;
}
export interface LastUpdateTimeAminoMsg {
  type: "/shentu.shield.v1alpha1.LastUpdateTime";
  value: LastUpdateTimeAmino;
}
export interface LastUpdateTimeSDKType {
  time?: TimestampSDKType;
}
export interface ShieldClaimProposal {
  $typeUrl?: "/shentu.shield.v1alpha1.ShieldClaimProposal";
  proposalId: bigint;
  poolId: bigint;
  purchaseId: bigint;
  loss: Coin[];
  evidence: string;
  description: string;
  proposer: string;
}
export interface ShieldClaimProposalProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.ShieldClaimProposal";
  value: Uint8Array;
}
export interface ShieldClaimProposalAmino {
  proposal_id?: string;
  pool_id?: string;
  purchase_id?: string;
  loss?: CoinAmino[];
  evidence?: string;
  description?: string;
  proposer?: string;
}
export interface ShieldClaimProposalAminoMsg {
  type: "/shentu.shield.v1alpha1.ShieldClaimProposal";
  value: ShieldClaimProposalAmino;
}
export interface ShieldClaimProposalSDKType {
  $typeUrl?: "/shentu.shield.v1alpha1.ShieldClaimProposal";
  proposal_id: bigint;
  pool_id: bigint;
  purchase_id: bigint;
  loss: CoinSDKType[];
  evidence: string;
  description: string;
  proposer: string;
}
function createBaseFees(): Fees {
  return {
    fees: []
  };
}
export const Fees = {
  typeUrl: "/shentu.shield.v1alpha1.Fees",
  encode(message: Fees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fees) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Fees {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Fees>): Fees {
    const message = createBaseFees();
    message.fees = object.fees?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeesAmino): Fees {
    const message = createBaseFees();
    message.fees = object.fees?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Fees): FeesAmino {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.fees = message.fees;
    }
    return obj;
  },
  fromAminoMsg(object: FeesAminoMsg): Fees {
    return Fees.fromAmino(object.value);
  },
  fromProtoMsg(message: FeesProtoMsg): Fees {
    return Fees.decode(message.value);
  },
  toProto(message: Fees): Uint8Array {
    return Fees.encode(message).finish();
  },
  toProtoMsg(message: Fees): FeesProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.Fees",
      value: Fees.encode(message).finish()
    };
  }
};
function createBasePool(): Pool {
  return {
    id: BigInt(0),
    description: "",
    sponsor: "",
    sponsorAddr: "",
    shieldLimit: "",
    active: false,
    shield: ""
  };
}
export const Pool = {
  typeUrl: "/shentu.shield.v1alpha1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.sponsor !== "") {
      writer.uint32(26).string(message.sponsor);
    }
    if (message.sponsorAddr !== "") {
      writer.uint32(34).string(message.sponsorAddr);
    }
    if (message.shieldLimit !== "") {
      writer.uint32(42).string(message.shieldLimit);
    }
    if (message.active === true) {
      writer.uint32(48).bool(message.active);
    }
    if (message.shield !== "") {
      writer.uint32(58).string(message.shield);
    }
    return writer;
  },
  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      description: isSet(object.description) ? String(object.description) : "",
      sponsor: isSet(object.sponsor) ? String(object.sponsor) : "",
      sponsorAddr: isSet(object.sponsorAddr) ? String(object.sponsorAddr) : "",
      shieldLimit: isSet(object.shieldLimit) ? String(object.shieldLimit) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      shield: isSet(object.shield) ? String(object.shield) : ""
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.sponsor = object.sponsor ?? "";
    message.sponsorAddr = object.sponsorAddr ?? "";
    message.shieldLimit = object.shieldLimit ?? "";
    message.active = object.active ?? false;
    message.shield = object.shield ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.sponsor !== undefined && object.sponsor !== null) {
      message.sponsor = object.sponsor;
    }
    if (object.sponsor_addr !== undefined && object.sponsor_addr !== null) {
      message.sponsorAddr = object.sponsor_addr;
    }
    if (object.shield_limit !== undefined && object.shield_limit !== null) {
      message.shieldLimit = object.shield_limit;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.shield !== undefined && object.shield !== null) {
      message.shield = object.shield;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    obj.sponsor = message.sponsor === "" ? undefined : message.sponsor;
    obj.sponsor_addr = message.sponsorAddr === "" ? undefined : message.sponsorAddr;
    obj.shield_limit = message.shieldLimit === "" ? undefined : message.shieldLimit;
    obj.active = message.active === false ? undefined : message.active;
    obj.shield = message.shield === "" ? undefined : message.shield;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBasePurchase(): Purchase {
  return {
    purchaseId: BigInt(0),
    protectionEndTime: Timestamp.fromPartial({}),
    deletionTime: Timestamp.fromPartial({}),
    description: "",
    shield: "",
    serviceFees: []
  };
}
export const Purchase = {
  typeUrl: "/shentu.shield.v1alpha1.Purchase",
  encode(message: Purchase, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseId !== BigInt(0)) {
      writer.uint32(8).uint64(message.purchaseId);
    }
    if (message.protectionEndTime !== undefined) {
      Timestamp.encode(message.protectionEndTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.deletionTime !== undefined) {
      Timestamp.encode(message.deletionTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.shield !== "") {
      writer.uint32(42).string(message.shield);
    }
    for (const v of message.serviceFees) {
      DecCoin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Purchase {
    return {
      purchaseId: isSet(object.purchaseId) ? BigInt(object.purchaseId.toString()) : BigInt(0),
      protectionEndTime: isSet(object.protectionEndTime) ? fromJsonTimestamp(object.protectionEndTime) : undefined,
      deletionTime: isSet(object.deletionTime) ? fromJsonTimestamp(object.deletionTime) : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      shield: isSet(object.shield) ? String(object.shield) : "",
      serviceFees: Array.isArray(object?.serviceFees) ? object.serviceFees.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Purchase>): Purchase {
    const message = createBasePurchase();
    message.purchaseId = object.purchaseId !== undefined && object.purchaseId !== null ? BigInt(object.purchaseId.toString()) : BigInt(0);
    message.protectionEndTime = object.protectionEndTime !== undefined && object.protectionEndTime !== null ? Timestamp.fromPartial(object.protectionEndTime) : undefined;
    message.deletionTime = object.deletionTime !== undefined && object.deletionTime !== null ? Timestamp.fromPartial(object.deletionTime) : undefined;
    message.description = object.description ?? "";
    message.shield = object.shield ?? "";
    message.serviceFees = object.serviceFees?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PurchaseAmino): Purchase {
    const message = createBasePurchase();
    if (object.purchase_id !== undefined && object.purchase_id !== null) {
      message.purchaseId = BigInt(object.purchase_id);
    }
    if (object.protection_end_time !== undefined && object.protection_end_time !== null) {
      message.protectionEndTime = Timestamp.fromAmino(object.protection_end_time);
    }
    if (object.deletion_time !== undefined && object.deletion_time !== null) {
      message.deletionTime = Timestamp.fromAmino(object.deletion_time);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.shield !== undefined && object.shield !== null) {
      message.shield = object.shield;
    }
    message.serviceFees = object.service_fees?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Purchase): PurchaseAmino {
    const obj: any = {};
    obj.purchase_id = message.purchaseId !== BigInt(0) ? message.purchaseId.toString() : undefined;
    obj.protection_end_time = message.protectionEndTime ? Timestamp.toAmino(message.protectionEndTime) : undefined;
    obj.deletion_time = message.deletionTime ? Timestamp.toAmino(message.deletionTime) : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    obj.shield = message.shield === "" ? undefined : message.shield;
    if (message.serviceFees) {
      obj.service_fees = message.serviceFees.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.service_fees = message.serviceFees;
    }
    return obj;
  },
  fromAminoMsg(object: PurchaseAminoMsg): Purchase {
    return Purchase.fromAmino(object.value);
  },
  fromProtoMsg(message: PurchaseProtoMsg): Purchase {
    return Purchase.decode(message.value);
  },
  toProto(message: Purchase): Uint8Array {
    return Purchase.encode(message).finish();
  },
  toProtoMsg(message: Purchase): PurchaseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.Purchase",
      value: Purchase.encode(message).finish()
    };
  }
};
function createBasePurchaseList(): PurchaseList {
  return {
    poolId: BigInt(0),
    purchaser: "",
    entries: []
  };
}
export const PurchaseList = {
  typeUrl: "/shentu.shield.v1alpha1.PurchaseList",
  encode(message: PurchaseList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.purchaser !== "") {
      writer.uint32(18).string(message.purchaser);
    }
    for (const v of message.entries) {
      Purchase.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PurchaseList {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      purchaser: isSet(object.purchaser) ? String(object.purchaser) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Purchase.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PurchaseList>): PurchaseList {
    const message = createBasePurchaseList();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.purchaser = object.purchaser ?? "";
    message.entries = object.entries?.map(e => Purchase.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PurchaseListAmino): PurchaseList {
    const message = createBasePurchaseList();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    }
    message.entries = object.entries?.map(e => Purchase.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PurchaseList): PurchaseListAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Purchase.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: PurchaseListAminoMsg): PurchaseList {
    return PurchaseList.fromAmino(object.value);
  },
  fromProtoMsg(message: PurchaseListProtoMsg): PurchaseList {
    return PurchaseList.decode(message.value);
  },
  toProto(message: PurchaseList): Uint8Array {
    return PurchaseList.encode(message).finish();
  },
  toProtoMsg(message: PurchaseList): PurchaseListProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.PurchaseList",
      value: PurchaseList.encode(message).finish()
    };
  }
};
function createBaseProvider(): Provider {
  return {
    address: "",
    delegationBonded: "",
    collateral: "",
    totalLocked: "",
    withdrawing: "",
    rewards: []
  };
}
export const Provider = {
  typeUrl: "/shentu.shield.v1alpha1.Provider",
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.delegationBonded !== "") {
      writer.uint32(18).string(message.delegationBonded);
    }
    if (message.collateral !== "") {
      writer.uint32(26).string(message.collateral);
    }
    if (message.totalLocked !== "") {
      writer.uint32(34).string(message.totalLocked);
    }
    if (message.withdrawing !== "") {
      writer.uint32(42).string(message.withdrawing);
    }
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Provider {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      delegationBonded: isSet(object.delegationBonded) ? String(object.delegationBonded) : "",
      collateral: isSet(object.collateral) ? String(object.collateral) : "",
      totalLocked: isSet(object.totalLocked) ? String(object.totalLocked) : "",
      withdrawing: isSet(object.withdrawing) ? String(object.withdrawing) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Provider>): Provider {
    const message = createBaseProvider();
    message.address = object.address ?? "";
    message.delegationBonded = object.delegationBonded ?? "";
    message.collateral = object.collateral ?? "";
    message.totalLocked = object.totalLocked ?? "";
    message.withdrawing = object.withdrawing ?? "";
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProviderAmino): Provider {
    const message = createBaseProvider();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.delegation_bonded !== undefined && object.delegation_bonded !== null) {
      message.delegationBonded = object.delegation_bonded;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    }
    if (object.total_locked !== undefined && object.total_locked !== null) {
      message.totalLocked = object.total_locked;
    }
    if (object.withdrawing !== undefined && object.withdrawing !== null) {
      message.withdrawing = object.withdrawing;
    }
    message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Provider): ProviderAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.delegation_bonded = message.delegationBonded === "" ? undefined : message.delegationBonded;
    obj.collateral = message.collateral === "" ? undefined : message.collateral;
    obj.total_locked = message.totalLocked === "" ? undefined : message.totalLocked;
    obj.withdrawing = message.withdrawing === "" ? undefined : message.withdrawing;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderProtoMsg): Provider {
    return Provider.decode(message.value);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.Provider",
      value: Provider.encode(message).finish()
    };
  }
};
function createBasePoolPurchaser(): PoolPurchaser {
  return {
    poolId: BigInt(0),
    purchaser: ""
  };
}
export const PoolPurchaser = {
  typeUrl: "/shentu.shield.v1alpha1.PoolPurchaser",
  encode(message: PoolPurchaser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.purchaser !== "") {
      writer.uint32(18).string(message.purchaser);
    }
    return writer;
  },
  fromJSON(object: any): PoolPurchaser {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      purchaser: isSet(object.purchaser) ? String(object.purchaser) : ""
    };
  },
  fromPartial(object: Partial<PoolPurchaser>): PoolPurchaser {
    const message = createBasePoolPurchaser();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.purchaser = object.purchaser ?? "";
    return message;
  },
  fromAmino(object: PoolPurchaserAmino): PoolPurchaser {
    const message = createBasePoolPurchaser();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    }
    return message;
  },
  toAmino(message: PoolPurchaser): PoolPurchaserAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
    return obj;
  },
  fromAminoMsg(object: PoolPurchaserAminoMsg): PoolPurchaser {
    return PoolPurchaser.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolPurchaserProtoMsg): PoolPurchaser {
    return PoolPurchaser.decode(message.value);
  },
  toProto(message: PoolPurchaser): Uint8Array {
    return PoolPurchaser.encode(message).finish();
  },
  toProtoMsg(message: PoolPurchaser): PoolPurchaserProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.PoolPurchaser",
      value: PoolPurchaser.encode(message).finish()
    };
  }
};
function createBasePoolPurchaserPairs(): PoolPurchaserPairs {
  return {
    pairs: []
  };
}
export const PoolPurchaserPairs = {
  typeUrl: "/shentu.shield.v1alpha1.PoolPurchaserPairs",
  encode(message: PoolPurchaserPairs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      PoolPurchaser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolPurchaserPairs {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => PoolPurchaser.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PoolPurchaserPairs>): PoolPurchaserPairs {
    const message = createBasePoolPurchaserPairs();
    message.pairs = object.pairs?.map(e => PoolPurchaser.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolPurchaserPairsAmino): PoolPurchaserPairs {
    const message = createBasePoolPurchaserPairs();
    message.pairs = object.pairs?.map(e => PoolPurchaser.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PoolPurchaserPairs): PoolPurchaserPairsAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PoolPurchaser.toAmino(e) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    return obj;
  },
  fromAminoMsg(object: PoolPurchaserPairsAminoMsg): PoolPurchaserPairs {
    return PoolPurchaserPairs.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolPurchaserPairsProtoMsg): PoolPurchaserPairs {
    return PoolPurchaserPairs.decode(message.value);
  },
  toProto(message: PoolPurchaserPairs): Uint8Array {
    return PoolPurchaserPairs.encode(message).finish();
  },
  toProtoMsg(message: PoolPurchaserPairs): PoolPurchaserPairsProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.PoolPurchaserPairs",
      value: PoolPurchaserPairs.encode(message).finish()
    };
  }
};
function createBaseWithdraw(): Withdraw {
  return {
    address: "",
    amount: "",
    completionTime: Timestamp.fromPartial({})
  };
}
export const Withdraw = {
  typeUrl: "/shentu.shield.v1alpha1.Withdraw",
  encode(message: Withdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Withdraw {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  fromPartial(object: Partial<Withdraw>): Withdraw {
    const message = createBaseWithdraw();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },
  fromAmino(object: WithdrawAmino): Withdraw {
    const message = createBaseWithdraw();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    return message;
  },
  toAmino(message: Withdraw): WithdrawAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: WithdrawAminoMsg): Withdraw {
    return Withdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawProtoMsg): Withdraw {
    return Withdraw.decode(message.value);
  },
  toProto(message: Withdraw): Uint8Array {
    return Withdraw.encode(message).finish();
  },
  toProtoMsg(message: Withdraw): WithdrawProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.Withdraw",
      value: Withdraw.encode(message).finish()
    };
  }
};
function createBaseWithdraws(): Withdraws {
  return {
    withdraws: []
  };
}
export const Withdraws = {
  typeUrl: "/shentu.shield.v1alpha1.Withdraws",
  encode(message: Withdraws, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.withdraws) {
      Withdraw.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Withdraws {
    return {
      withdraws: Array.isArray(object?.withdraws) ? object.withdraws.map((e: any) => Withdraw.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Withdraws>): Withdraws {
    const message = createBaseWithdraws();
    message.withdraws = object.withdraws?.map(e => Withdraw.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: WithdrawsAmino): Withdraws {
    const message = createBaseWithdraws();
    message.withdraws = object.withdraws?.map(e => Withdraw.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Withdraws): WithdrawsAmino {
    const obj: any = {};
    if (message.withdraws) {
      obj.withdraws = message.withdraws.map(e => e ? Withdraw.toAmino(e) : undefined);
    } else {
      obj.withdraws = message.withdraws;
    }
    return obj;
  },
  fromAminoMsg(object: WithdrawsAminoMsg): Withdraws {
    return Withdraws.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawsProtoMsg): Withdraws {
    return Withdraws.decode(message.value);
  },
  toProto(message: Withdraws): Uint8Array {
    return Withdraws.encode(message).finish();
  },
  toProtoMsg(message: Withdraws): WithdrawsProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.Withdraws",
      value: Withdraws.encode(message).finish()
    };
  }
};
function createBaseShieldStaking(): ShieldStaking {
  return {
    poolId: BigInt(0),
    purchaser: "",
    amount: "",
    withdrawRequested: ""
  };
}
export const ShieldStaking = {
  typeUrl: "/shentu.shield.v1alpha1.ShieldStaking",
  encode(message: ShieldStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.purchaser !== "") {
      writer.uint32(18).string(message.purchaser);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.withdrawRequested !== "") {
      writer.uint32(34).string(message.withdrawRequested);
    }
    return writer;
  },
  fromJSON(object: any): ShieldStaking {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      purchaser: isSet(object.purchaser) ? String(object.purchaser) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      withdrawRequested: isSet(object.withdrawRequested) ? String(object.withdrawRequested) : ""
    };
  },
  fromPartial(object: Partial<ShieldStaking>): ShieldStaking {
    const message = createBaseShieldStaking();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.purchaser = object.purchaser ?? "";
    message.amount = object.amount ?? "";
    message.withdrawRequested = object.withdrawRequested ?? "";
    return message;
  },
  fromAmino(object: ShieldStakingAmino): ShieldStaking {
    const message = createBaseShieldStaking();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.withdraw_requested !== undefined && object.withdraw_requested !== null) {
      message.withdrawRequested = object.withdraw_requested;
    }
    return message;
  },
  toAmino(message: ShieldStaking): ShieldStakingAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.purchaser = message.purchaser === "" ? undefined : message.purchaser;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.withdraw_requested = message.withdrawRequested === "" ? undefined : message.withdrawRequested;
    return obj;
  },
  fromAminoMsg(object: ShieldStakingAminoMsg): ShieldStaking {
    return ShieldStaking.fromAmino(object.value);
  },
  fromProtoMsg(message: ShieldStakingProtoMsg): ShieldStaking {
    return ShieldStaking.decode(message.value);
  },
  toProto(message: ShieldStaking): Uint8Array {
    return ShieldStaking.encode(message).finish();
  },
  toProtoMsg(message: ShieldStaking): ShieldStakingProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.ShieldStaking",
      value: ShieldStaking.encode(message).finish()
    };
  }
};
function createBaseLastUpdateTime(): LastUpdateTime {
  return {
    time: undefined
  };
}
export const LastUpdateTime = {
  typeUrl: "/shentu.shield.v1alpha1.LastUpdateTime",
  encode(message: LastUpdateTime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LastUpdateTime {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined
    };
  },
  fromPartial(object: Partial<LastUpdateTime>): LastUpdateTime {
    const message = createBaseLastUpdateTime();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    return message;
  },
  fromAmino(object: LastUpdateTimeAmino): LastUpdateTime {
    const message = createBaseLastUpdateTime();
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    return message;
  },
  toAmino(message: LastUpdateTime): LastUpdateTimeAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    return obj;
  },
  fromAminoMsg(object: LastUpdateTimeAminoMsg): LastUpdateTime {
    return LastUpdateTime.fromAmino(object.value);
  },
  fromProtoMsg(message: LastUpdateTimeProtoMsg): LastUpdateTime {
    return LastUpdateTime.decode(message.value);
  },
  toProto(message: LastUpdateTime): Uint8Array {
    return LastUpdateTime.encode(message).finish();
  },
  toProtoMsg(message: LastUpdateTime): LastUpdateTimeProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.LastUpdateTime",
      value: LastUpdateTime.encode(message).finish()
    };
  }
};
function createBaseShieldClaimProposal(): ShieldClaimProposal {
  return {
    $typeUrl: "/shentu.shield.v1alpha1.ShieldClaimProposal",
    proposalId: BigInt(0),
    poolId: BigInt(0),
    purchaseId: BigInt(0),
    loss: [],
    evidence: "",
    description: "",
    proposer: ""
  };
}
export const ShieldClaimProposal = {
  typeUrl: "/shentu.shield.v1alpha1.ShieldClaimProposal",
  encode(message: ShieldClaimProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.purchaseId !== BigInt(0)) {
      writer.uint32(24).uint64(message.purchaseId);
    }
    for (const v of message.loss) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.evidence !== "") {
      writer.uint32(42).string(message.evidence);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.proposer !== "") {
      writer.uint32(58).string(message.proposer);
    }
    return writer;
  },
  fromJSON(object: any): ShieldClaimProposal {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      purchaseId: isSet(object.purchaseId) ? BigInt(object.purchaseId.toString()) : BigInt(0),
      loss: Array.isArray(object?.loss) ? object.loss.map((e: any) => Coin.fromJSON(e)) : [],
      evidence: isSet(object.evidence) ? String(object.evidence) : "",
      description: isSet(object.description) ? String(object.description) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : ""
    };
  },
  fromPartial(object: Partial<ShieldClaimProposal>): ShieldClaimProposal {
    const message = createBaseShieldClaimProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.purchaseId = object.purchaseId !== undefined && object.purchaseId !== null ? BigInt(object.purchaseId.toString()) : BigInt(0);
    message.loss = object.loss?.map(e => Coin.fromPartial(e)) || [];
    message.evidence = object.evidence ?? "";
    message.description = object.description ?? "";
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object: ShieldClaimProposalAmino): ShieldClaimProposal {
    const message = createBaseShieldClaimProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.purchase_id !== undefined && object.purchase_id !== null) {
      message.purchaseId = BigInt(object.purchase_id);
    }
    message.loss = object.loss?.map(e => Coin.fromAmino(e)) || [];
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    return message;
  },
  toAmino(message: ShieldClaimProposal): ShieldClaimProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.purchase_id = message.purchaseId !== BigInt(0) ? message.purchaseId.toString() : undefined;
    if (message.loss) {
      obj.loss = message.loss.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.loss = message.loss;
    }
    obj.evidence = message.evidence === "" ? undefined : message.evidence;
    obj.description = message.description === "" ? undefined : message.description;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    return obj;
  },
  fromAminoMsg(object: ShieldClaimProposalAminoMsg): ShieldClaimProposal {
    return ShieldClaimProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ShieldClaimProposalProtoMsg): ShieldClaimProposal {
    return ShieldClaimProposal.decode(message.value);
  },
  toProto(message: ShieldClaimProposal): Uint8Array {
    return ShieldClaimProposal.encode(message).finish();
  },
  toProtoMsg(message: ShieldClaimProposal): ShieldClaimProposalProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.ShieldClaimProposal",
      value: ShieldClaimProposal.encode(message).finish()
    };
  }
};