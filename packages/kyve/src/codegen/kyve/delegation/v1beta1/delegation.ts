import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** SlashType ... */
export enum SlashType {
  /** SLASH_TYPE_UNSPECIFIED - SLASH_TYPE_UNSPECIFIED ... */
  SLASH_TYPE_UNSPECIFIED = 0,
  /** SLASH_TYPE_TIMEOUT - SLASH_TYPE_TIMEOUT ... */
  SLASH_TYPE_TIMEOUT = 1,
  /** SLASH_TYPE_VOTE - SLASH_TYPE_VOTE ... */
  SLASH_TYPE_VOTE = 2,
  /** SLASH_TYPE_UPLOAD - SLASH_TYPE_UPLOAD ... */
  SLASH_TYPE_UPLOAD = 3,
  UNRECOGNIZED = -1,
}
export const SlashTypeSDKType = SlashType;
export const SlashTypeAmino = SlashType;
export function slashTypeFromJSON(object: any): SlashType {
  switch (object) {
    case 0:
    case "SLASH_TYPE_UNSPECIFIED":
      return SlashType.SLASH_TYPE_UNSPECIFIED;
    case 1:
    case "SLASH_TYPE_TIMEOUT":
      return SlashType.SLASH_TYPE_TIMEOUT;
    case 2:
    case "SLASH_TYPE_VOTE":
      return SlashType.SLASH_TYPE_VOTE;
    case 3:
    case "SLASH_TYPE_UPLOAD":
      return SlashType.SLASH_TYPE_UPLOAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SlashType.UNRECOGNIZED;
  }
}
export function slashTypeToJSON(object: SlashType): string {
  switch (object) {
    case SlashType.SLASH_TYPE_UNSPECIFIED:
      return "SLASH_TYPE_UNSPECIFIED";
    case SlashType.SLASH_TYPE_TIMEOUT:
      return "SLASH_TYPE_TIMEOUT";
    case SlashType.SLASH_TYPE_VOTE:
      return "SLASH_TYPE_VOTE";
    case SlashType.SLASH_TYPE_UPLOAD:
      return "SLASH_TYPE_UPLOAD";
    case SlashType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface Delegator {
  /** staker corresponds to a KYVE-staker on the protocol-side */
  staker: string;
  /**
   * delegator the user who delegate to the staker.
   * If staker and delegator are the same we call it: self-delegation
   */
  delegator: string;
  /** k_index is an internal index for the f1-distribution algorithm */
  kIndex: bigint;
  /**
   * initial_amount of stake the user had when it delegated.
   * slashes can cause that the actual stake is lower.
   */
  initialAmount: bigint;
}
export interface DelegatorProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.Delegator";
  value: Uint8Array;
}
/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface DelegatorAmino {
  /** staker corresponds to a KYVE-staker on the protocol-side */
  staker: string;
  /**
   * delegator the user who delegate to the staker.
   * If staker and delegator are the same we call it: self-delegation
   */
  delegator: string;
  /** k_index is an internal index for the f1-distribution algorithm */
  k_index: string;
  /**
   * initial_amount of stake the user had when it delegated.
   * slashes can cause that the actual stake is lower.
   */
  initial_amount: string;
}
export interface DelegatorAminoMsg {
  type: "/kyve.delegation.v1beta1.Delegator";
  value: DelegatorAmino;
}
/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface DelegatorSDKType {
  staker: string;
  delegator: string;
  k_index: bigint;
  initial_amount: bigint;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntry {
  /** staker on protocol level */
  staker: string;
  /** k_index is the of the period this entry ends */
  kIndex: bigint;
  /** value is the quotient of collected rewards and total stake according to F1-distribution */
  value: string;
}
export interface DelegationEntryProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.DelegationEntry";
  value: Uint8Array;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntryAmino {
  /** staker on protocol level */
  staker: string;
  /** k_index is the of the period this entry ends */
  k_index: string;
  /** value is the quotient of collected rewards and total stake according to F1-distribution */
  value: string;
}
export interface DelegationEntryAminoMsg {
  type: "/kyve.delegation.v1beta1.DelegationEntry";
  value: DelegationEntryAmino;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntrySDKType {
  staker: string;
  k_index: bigint;
  value: string;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationData {
  /** Every staker has one DelegationData */
  staker: string;
  /** current_rewards ... */
  currentRewards: bigint;
  /** total_delegation ... */
  totalDelegation: bigint;
  /** latest_index_k ... */
  latestIndexK: bigint;
  /** delegator_count the amount of different addresses delegating to the staker */
  delegatorCount: bigint;
  /** latest_index_was_undelegation helps indicates when an entry can be deleted */
  latestIndexWasUndelegation: boolean;
}
export interface DelegationDataProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.DelegationData";
  value: Uint8Array;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationDataAmino {
  /** Every staker has one DelegationData */
  staker: string;
  /** current_rewards ... */
  current_rewards: string;
  /** total_delegation ... */
  total_delegation: string;
  /** latest_index_k ... */
  latest_index_k: string;
  /** delegator_count the amount of different addresses delegating to the staker */
  delegator_count: string;
  /** latest_index_was_undelegation helps indicates when an entry can be deleted */
  latest_index_was_undelegation: boolean;
}
export interface DelegationDataAminoMsg {
  type: "/kyve.delegation.v1beta1.DelegationData";
  value: DelegationDataAmino;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationDataSDKType {
  staker: string;
  current_rewards: bigint;
  total_delegation: bigint;
  latest_index_k: bigint;
  delegator_count: bigint;
  latest_index_was_undelegation: boolean;
}
/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlash {
  /** staker who got slashed */
  staker: string;
  /** k_index for f1-algorithm */
  kIndex: bigint;
  /** fraction that got slashed */
  fraction: string;
}
export interface DelegationSlashProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.DelegationSlash";
  value: Uint8Array;
}
/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlashAmino {
  /** staker who got slashed */
  staker: string;
  /** k_index for f1-algorithm */
  k_index: string;
  /** fraction that got slashed */
  fraction: string;
}
export interface DelegationSlashAminoMsg {
  type: "/kyve.delegation.v1beta1.DelegationSlash";
  value: DelegationSlashAmino;
}
/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlashSDKType {
  staker: string;
  k_index: bigint;
  fraction: string;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntry {
  /** index ... */
  index: bigint;
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
  /** amount ... */
  amount: bigint;
  /** creation_time ... */
  creationTime: bigint;
}
export interface UndelegationQueueEntryProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.UndelegationQueueEntry";
  value: Uint8Array;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntryAmino {
  /** index ... */
  index: string;
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
  /** amount ... */
  amount: string;
  /** creation_time ... */
  creation_time: string;
}
export interface UndelegationQueueEntryAminoMsg {
  type: "/kyve.delegation.v1beta1.UndelegationQueueEntry";
  value: UndelegationQueueEntryAmino;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntrySDKType {
  index: bigint;
  staker: string;
  delegator: string;
  amount: bigint;
  creation_time: bigint;
}
/** QueueState ... */
export interface QueueState {
  /** low_index ... */
  lowIndex: bigint;
  /** high_index ... */
  highIndex: bigint;
}
export interface QueueStateProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.QueueState";
  value: Uint8Array;
}
/** QueueState ... */
export interface QueueStateAmino {
  /** low_index ... */
  low_index: string;
  /** high_index ... */
  high_index: string;
}
export interface QueueStateAminoMsg {
  type: "/kyve.delegation.v1beta1.QueueState";
  value: QueueStateAmino;
}
/** QueueState ... */
export interface QueueStateSDKType {
  low_index: bigint;
  high_index: bigint;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldown {
  /** low_index ... */
  address: string;
  /** high_index ... */
  creationDate: bigint;
}
export interface RedelegationCooldownProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.RedelegationCooldown";
  value: Uint8Array;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldownAmino {
  /** low_index ... */
  address: string;
  /** high_index ... */
  creation_date: string;
}
export interface RedelegationCooldownAminoMsg {
  type: "/kyve.delegation.v1beta1.RedelegationCooldown";
  value: RedelegationCooldownAmino;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldownSDKType {
  address: string;
  creation_date: bigint;
}
function createBaseDelegator(): Delegator {
  return {
    staker: "",
    delegator: "",
    kIndex: BigInt(0),
    initialAmount: BigInt(0)
  };
}
export const Delegator = {
  typeUrl: "/kyve.delegation.v1beta1.Delegator",
  encode(message: Delegator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    if (message.kIndex !== BigInt(0)) {
      writer.uint32(24).uint64(message.kIndex);
    }
    if (message.initialAmount !== BigInt(0)) {
      writer.uint32(32).uint64(message.initialAmount);
    }
    return writer;
  },
  fromJSON(object: any): Delegator {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      kIndex: isSet(object.kIndex) ? BigInt(object.kIndex.toString()) : BigInt(0),
      initialAmount: isSet(object.initialAmount) ? BigInt(object.initialAmount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Delegator>): Delegator {
    const message = createBaseDelegator();
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    message.kIndex = object.kIndex !== undefined && object.kIndex !== null ? BigInt(object.kIndex.toString()) : BigInt(0);
    message.initialAmount = object.initialAmount !== undefined && object.initialAmount !== null ? BigInt(object.initialAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DelegatorAmino): Delegator {
    return {
      staker: object.staker,
      delegator: object.delegator,
      kIndex: BigInt(object.k_index),
      initialAmount: BigInt(object.initial_amount)
    };
  },
  toAmino(message: Delegator): DelegatorAmino {
    const obj: any = {};
    obj.staker = message.staker;
    obj.delegator = message.delegator;
    obj.k_index = message.kIndex ? message.kIndex.toString() : undefined;
    obj.initial_amount = message.initialAmount ? message.initialAmount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorAminoMsg): Delegator {
    return Delegator.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorProtoMsg): Delegator {
    return Delegator.decode(message.value);
  },
  toProto(message: Delegator): Uint8Array {
    return Delegator.encode(message).finish();
  },
  toProtoMsg(message: Delegator): DelegatorProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.Delegator",
      value: Delegator.encode(message).finish()
    };
  }
};
function createBaseDelegationEntry(): DelegationEntry {
  return {
    staker: "",
    kIndex: BigInt(0),
    value: ""
  };
}
export const DelegationEntry = {
  typeUrl: "/kyve.delegation.v1beta1.DelegationEntry",
  encode(message: DelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.kIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.kIndex);
    }
    if (message.value !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.value, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): DelegationEntry {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      kIndex: isSet(object.kIndex) ? BigInt(object.kIndex.toString()) : BigInt(0),
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<DelegationEntry>): DelegationEntry {
    const message = createBaseDelegationEntry();
    message.staker = object.staker ?? "";
    message.kIndex = object.kIndex !== undefined && object.kIndex !== null ? BigInt(object.kIndex.toString()) : BigInt(0);
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: DelegationEntryAmino): DelegationEntry {
    return {
      staker: object.staker,
      kIndex: BigInt(object.k_index),
      value: object.value
    };
  },
  toAmino(message: DelegationEntry): DelegationEntryAmino {
    const obj: any = {};
    obj.staker = message.staker;
    obj.k_index = message.kIndex ? message.kIndex.toString() : undefined;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: DelegationEntryAminoMsg): DelegationEntry {
    return DelegationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationEntryProtoMsg): DelegationEntry {
    return DelegationEntry.decode(message.value);
  },
  toProto(message: DelegationEntry): Uint8Array {
    return DelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: DelegationEntry): DelegationEntryProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.DelegationEntry",
      value: DelegationEntry.encode(message).finish()
    };
  }
};
function createBaseDelegationData(): DelegationData {
  return {
    staker: "",
    currentRewards: BigInt(0),
    totalDelegation: BigInt(0),
    latestIndexK: BigInt(0),
    delegatorCount: BigInt(0),
    latestIndexWasUndelegation: false
  };
}
export const DelegationData = {
  typeUrl: "/kyve.delegation.v1beta1.DelegationData",
  encode(message: DelegationData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.currentRewards !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentRewards);
    }
    if (message.totalDelegation !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalDelegation);
    }
    if (message.latestIndexK !== BigInt(0)) {
      writer.uint32(32).uint64(message.latestIndexK);
    }
    if (message.delegatorCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.delegatorCount);
    }
    if (message.latestIndexWasUndelegation === true) {
      writer.uint32(48).bool(message.latestIndexWasUndelegation);
    }
    return writer;
  },
  fromJSON(object: any): DelegationData {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      currentRewards: isSet(object.currentRewards) ? BigInt(object.currentRewards.toString()) : BigInt(0),
      totalDelegation: isSet(object.totalDelegation) ? BigInt(object.totalDelegation.toString()) : BigInt(0),
      latestIndexK: isSet(object.latestIndexK) ? BigInt(object.latestIndexK.toString()) : BigInt(0),
      delegatorCount: isSet(object.delegatorCount) ? BigInt(object.delegatorCount.toString()) : BigInt(0),
      latestIndexWasUndelegation: isSet(object.latestIndexWasUndelegation) ? Boolean(object.latestIndexWasUndelegation) : false
    };
  },
  fromPartial(object: Partial<DelegationData>): DelegationData {
    const message = createBaseDelegationData();
    message.staker = object.staker ?? "";
    message.currentRewards = object.currentRewards !== undefined && object.currentRewards !== null ? BigInt(object.currentRewards.toString()) : BigInt(0);
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? BigInt(object.totalDelegation.toString()) : BigInt(0);
    message.latestIndexK = object.latestIndexK !== undefined && object.latestIndexK !== null ? BigInt(object.latestIndexK.toString()) : BigInt(0);
    message.delegatorCount = object.delegatorCount !== undefined && object.delegatorCount !== null ? BigInt(object.delegatorCount.toString()) : BigInt(0);
    message.latestIndexWasUndelegation = object.latestIndexWasUndelegation ?? false;
    return message;
  },
  fromAmino(object: DelegationDataAmino): DelegationData {
    return {
      staker: object.staker,
      currentRewards: BigInt(object.current_rewards),
      totalDelegation: BigInt(object.total_delegation),
      latestIndexK: BigInt(object.latest_index_k),
      delegatorCount: BigInt(object.delegator_count),
      latestIndexWasUndelegation: object.latest_index_was_undelegation
    };
  },
  toAmino(message: DelegationData): DelegationDataAmino {
    const obj: any = {};
    obj.staker = message.staker;
    obj.current_rewards = message.currentRewards ? message.currentRewards.toString() : undefined;
    obj.total_delegation = message.totalDelegation ? message.totalDelegation.toString() : undefined;
    obj.latest_index_k = message.latestIndexK ? message.latestIndexK.toString() : undefined;
    obj.delegator_count = message.delegatorCount ? message.delegatorCount.toString() : undefined;
    obj.latest_index_was_undelegation = message.latestIndexWasUndelegation;
    return obj;
  },
  fromAminoMsg(object: DelegationDataAminoMsg): DelegationData {
    return DelegationData.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationDataProtoMsg): DelegationData {
    return DelegationData.decode(message.value);
  },
  toProto(message: DelegationData): Uint8Array {
    return DelegationData.encode(message).finish();
  },
  toProtoMsg(message: DelegationData): DelegationDataProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.DelegationData",
      value: DelegationData.encode(message).finish()
    };
  }
};
function createBaseDelegationSlash(): DelegationSlash {
  return {
    staker: "",
    kIndex: BigInt(0),
    fraction: ""
  };
}
export const DelegationSlash = {
  typeUrl: "/kyve.delegation.v1beta1.DelegationSlash",
  encode(message: DelegationSlash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.kIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.kIndex);
    }
    if (message.fraction !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.fraction, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): DelegationSlash {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      kIndex: isSet(object.kIndex) ? BigInt(object.kIndex.toString()) : BigInt(0),
      fraction: isSet(object.fraction) ? String(object.fraction) : ""
    };
  },
  fromPartial(object: Partial<DelegationSlash>): DelegationSlash {
    const message = createBaseDelegationSlash();
    message.staker = object.staker ?? "";
    message.kIndex = object.kIndex !== undefined && object.kIndex !== null ? BigInt(object.kIndex.toString()) : BigInt(0);
    message.fraction = object.fraction ?? "";
    return message;
  },
  fromAmino(object: DelegationSlashAmino): DelegationSlash {
    return {
      staker: object.staker,
      kIndex: BigInt(object.k_index),
      fraction: object.fraction
    };
  },
  toAmino(message: DelegationSlash): DelegationSlashAmino {
    const obj: any = {};
    obj.staker = message.staker;
    obj.k_index = message.kIndex ? message.kIndex.toString() : undefined;
    obj.fraction = message.fraction;
    return obj;
  },
  fromAminoMsg(object: DelegationSlashAminoMsg): DelegationSlash {
    return DelegationSlash.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationSlashProtoMsg): DelegationSlash {
    return DelegationSlash.decode(message.value);
  },
  toProto(message: DelegationSlash): Uint8Array {
    return DelegationSlash.encode(message).finish();
  },
  toProtoMsg(message: DelegationSlash): DelegationSlashProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.DelegationSlash",
      value: DelegationSlash.encode(message).finish()
    };
  }
};
function createBaseUndelegationQueueEntry(): UndelegationQueueEntry {
  return {
    index: BigInt(0),
    staker: "",
    delegator: "",
    amount: BigInt(0),
    creationTime: BigInt(0)
  };
}
export const UndelegationQueueEntry = {
  typeUrl: "/kyve.delegation.v1beta1.UndelegationQueueEntry",
  encode(message: UndelegationQueueEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(26).string(message.delegator);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.creationTime !== BigInt(0)) {
      writer.uint32(40).uint64(message.creationTime);
    }
    return writer;
  },
  fromJSON(object: any): UndelegationQueueEntry {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      creationTime: isSet(object.creationTime) ? BigInt(object.creationTime.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<UndelegationQueueEntry>): UndelegationQueueEntry {
    const message = createBaseUndelegationQueueEntry();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? BigInt(object.creationTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UndelegationQueueEntryAmino): UndelegationQueueEntry {
    return {
      index: BigInt(object.index),
      staker: object.staker,
      delegator: object.delegator,
      amount: BigInt(object.amount),
      creationTime: BigInt(object.creation_time)
    };
  },
  toAmino(message: UndelegationQueueEntry): UndelegationQueueEntryAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    obj.staker = message.staker;
    obj.delegator = message.delegator;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.creation_time = message.creationTime ? message.creationTime.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UndelegationQueueEntryAminoMsg): UndelegationQueueEntry {
    return UndelegationQueueEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegationQueueEntryProtoMsg): UndelegationQueueEntry {
    return UndelegationQueueEntry.decode(message.value);
  },
  toProto(message: UndelegationQueueEntry): Uint8Array {
    return UndelegationQueueEntry.encode(message).finish();
  },
  toProtoMsg(message: UndelegationQueueEntry): UndelegationQueueEntryProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.UndelegationQueueEntry",
      value: UndelegationQueueEntry.encode(message).finish()
    };
  }
};
function createBaseQueueState(): QueueState {
  return {
    lowIndex: BigInt(0),
    highIndex: BigInt(0)
  };
}
export const QueueState = {
  typeUrl: "/kyve.delegation.v1beta1.QueueState",
  encode(message: QueueState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lowIndex !== BigInt(0)) {
      writer.uint32(8).uint64(message.lowIndex);
    }
    if (message.highIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.highIndex);
    }
    return writer;
  },
  fromJSON(object: any): QueueState {
    return {
      lowIndex: isSet(object.lowIndex) ? BigInt(object.lowIndex.toString()) : BigInt(0),
      highIndex: isSet(object.highIndex) ? BigInt(object.highIndex.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueueState>): QueueState {
    const message = createBaseQueueState();
    message.lowIndex = object.lowIndex !== undefined && object.lowIndex !== null ? BigInt(object.lowIndex.toString()) : BigInt(0);
    message.highIndex = object.highIndex !== undefined && object.highIndex !== null ? BigInt(object.highIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueueStateAmino): QueueState {
    return {
      lowIndex: BigInt(object.low_index),
      highIndex: BigInt(object.high_index)
    };
  },
  toAmino(message: QueueState): QueueStateAmino {
    const obj: any = {};
    obj.low_index = message.lowIndex ? message.lowIndex.toString() : undefined;
    obj.high_index = message.highIndex ? message.highIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueueStateAminoMsg): QueueState {
    return QueueState.fromAmino(object.value);
  },
  fromProtoMsg(message: QueueStateProtoMsg): QueueState {
    return QueueState.decode(message.value);
  },
  toProto(message: QueueState): Uint8Array {
    return QueueState.encode(message).finish();
  },
  toProtoMsg(message: QueueState): QueueStateProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.QueueState",
      value: QueueState.encode(message).finish()
    };
  }
};
function createBaseRedelegationCooldown(): RedelegationCooldown {
  return {
    address: "",
    creationDate: BigInt(0)
  };
}
export const RedelegationCooldown = {
  typeUrl: "/kyve.delegation.v1beta1.RedelegationCooldown",
  encode(message: RedelegationCooldown, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creationDate !== BigInt(0)) {
      writer.uint32(16).uint64(message.creationDate);
    }
    return writer;
  },
  fromJSON(object: any): RedelegationCooldown {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creationDate: isSet(object.creationDate) ? BigInt(object.creationDate.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RedelegationCooldown>): RedelegationCooldown {
    const message = createBaseRedelegationCooldown();
    message.address = object.address ?? "";
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? BigInt(object.creationDate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RedelegationCooldownAmino): RedelegationCooldown {
    return {
      address: object.address,
      creationDate: BigInt(object.creation_date)
    };
  },
  toAmino(message: RedelegationCooldown): RedelegationCooldownAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.creation_date = message.creationDate ? message.creationDate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RedelegationCooldownAminoMsg): RedelegationCooldown {
    return RedelegationCooldown.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegationCooldownProtoMsg): RedelegationCooldown {
    return RedelegationCooldown.decode(message.value);
  },
  toProto(message: RedelegationCooldown): Uint8Array {
    return RedelegationCooldown.encode(message).finish();
  },
  toProtoMsg(message: RedelegationCooldown): RedelegationCooldownProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.RedelegationCooldown",
      value: RedelegationCooldown.encode(message).finish()
    };
  }
};