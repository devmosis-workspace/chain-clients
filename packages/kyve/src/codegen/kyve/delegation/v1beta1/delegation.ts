import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  kIndex: Long;
  /**
   * initial_amount of stake the user had when it delegated.
   * slashes can cause that the actual stake is lower.
   */
  initialAmount: Long;
}
/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface DelegatorSDKType {
  staker: string;
  delegator: string;
  k_index: Long;
  initial_amount: Long;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntry {
  /** staker on protocol level */
  staker: string;
  /** k_index is the of the period this entry ends */
  kIndex: Long;
  /** value is the quotient of collected rewards and total stake according to F1-distribution */
  value: string;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntrySDKType {
  staker: string;
  k_index: Long;
  value: string;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationData {
  /** Every staker has one DelegationData */
  staker: string;
  /** current_rewards ... */
  currentRewards: Long;
  /** total_delegation ... */
  totalDelegation: Long;
  /** latest_index_k ... */
  latestIndexK: Long;
  /** delegator_count the amount of different addresses delegating to the staker */
  delegatorCount: Long;
  /** latest_index_was_undelegation helps indicates when an entry can be deleted */
  latestIndexWasUndelegation: boolean;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationDataSDKType {
  staker: string;
  current_rewards: Long;
  total_delegation: Long;
  latest_index_k: Long;
  delegator_count: Long;
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
  kIndex: Long;
  /** fraction that got slashed */
  fraction: string;
}
/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlashSDKType {
  staker: string;
  k_index: Long;
  fraction: string;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntry {
  /** index ... */
  index: Long;
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
  /** amount ... */
  amount: Long;
  /** creation_time ... */
  creationTime: Long;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntrySDKType {
  index: Long;
  staker: string;
  delegator: string;
  amount: Long;
  creation_time: Long;
}
/** QueueState ... */
export interface QueueState {
  /** low_index ... */
  lowIndex: Long;
  /** high_index ... */
  highIndex: Long;
}
/** QueueState ... */
export interface QueueStateSDKType {
  low_index: Long;
  high_index: Long;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldown {
  /** low_index ... */
  address: string;
  /** high_index ... */
  creationDate: Long;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldownSDKType {
  address: string;
  creation_date: Long;
}
function createBaseDelegator(): Delegator {
  return {
    staker: "",
    delegator: "",
    kIndex: Long.UZERO,
    initialAmount: Long.UZERO
  };
}
export const Delegator = {
  encode(message: Delegator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    if (!message.kIndex.isZero()) {
      writer.uint32(24).uint64(message.kIndex);
    }
    if (!message.initialAmount.isZero()) {
      writer.uint32(32).uint64(message.initialAmount);
    }
    return writer;
  },
  fromJSON(object: any): Delegator {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      kIndex: isSet(object.kIndex) ? Long.fromValue(object.kIndex) : Long.UZERO,
      initialAmount: isSet(object.initialAmount) ? Long.fromValue(object.initialAmount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Delegator>): Delegator {
    const message = createBaseDelegator();
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    message.kIndex = object.kIndex !== undefined && object.kIndex !== null ? Long.fromValue(object.kIndex) : Long.UZERO;
    message.initialAmount = object.initialAmount !== undefined && object.initialAmount !== null ? Long.fromValue(object.initialAmount) : Long.UZERO;
    return message;
  }
};
function createBaseDelegationEntry(): DelegationEntry {
  return {
    staker: "",
    kIndex: Long.UZERO,
    value: ""
  };
}
export const DelegationEntry = {
  encode(message: DelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (!message.kIndex.isZero()) {
      writer.uint32(16).uint64(message.kIndex);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): DelegationEntry {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      kIndex: isSet(object.kIndex) ? Long.fromValue(object.kIndex) : Long.UZERO,
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<DelegationEntry>): DelegationEntry {
    const message = createBaseDelegationEntry();
    message.staker = object.staker ?? "";
    message.kIndex = object.kIndex !== undefined && object.kIndex !== null ? Long.fromValue(object.kIndex) : Long.UZERO;
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseDelegationData(): DelegationData {
  return {
    staker: "",
    currentRewards: Long.UZERO,
    totalDelegation: Long.UZERO,
    latestIndexK: Long.UZERO,
    delegatorCount: Long.UZERO,
    latestIndexWasUndelegation: false
  };
}
export const DelegationData = {
  encode(message: DelegationData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (!message.currentRewards.isZero()) {
      writer.uint32(16).uint64(message.currentRewards);
    }
    if (!message.totalDelegation.isZero()) {
      writer.uint32(24).uint64(message.totalDelegation);
    }
    if (!message.latestIndexK.isZero()) {
      writer.uint32(32).uint64(message.latestIndexK);
    }
    if (!message.delegatorCount.isZero()) {
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
      currentRewards: isSet(object.currentRewards) ? Long.fromValue(object.currentRewards) : Long.UZERO,
      totalDelegation: isSet(object.totalDelegation) ? Long.fromValue(object.totalDelegation) : Long.UZERO,
      latestIndexK: isSet(object.latestIndexK) ? Long.fromValue(object.latestIndexK) : Long.UZERO,
      delegatorCount: isSet(object.delegatorCount) ? Long.fromValue(object.delegatorCount) : Long.UZERO,
      latestIndexWasUndelegation: isSet(object.latestIndexWasUndelegation) ? Boolean(object.latestIndexWasUndelegation) : false
    };
  },
  fromPartial(object: Partial<DelegationData>): DelegationData {
    const message = createBaseDelegationData();
    message.staker = object.staker ?? "";
    message.currentRewards = object.currentRewards !== undefined && object.currentRewards !== null ? Long.fromValue(object.currentRewards) : Long.UZERO;
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? Long.fromValue(object.totalDelegation) : Long.UZERO;
    message.latestIndexK = object.latestIndexK !== undefined && object.latestIndexK !== null ? Long.fromValue(object.latestIndexK) : Long.UZERO;
    message.delegatorCount = object.delegatorCount !== undefined && object.delegatorCount !== null ? Long.fromValue(object.delegatorCount) : Long.UZERO;
    message.latestIndexWasUndelegation = object.latestIndexWasUndelegation ?? false;
    return message;
  }
};
function createBaseDelegationSlash(): DelegationSlash {
  return {
    staker: "",
    kIndex: Long.UZERO,
    fraction: ""
  };
}
export const DelegationSlash = {
  encode(message: DelegationSlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (!message.kIndex.isZero()) {
      writer.uint32(16).uint64(message.kIndex);
    }
    if (message.fraction !== "") {
      writer.uint32(26).string(message.fraction);
    }
    return writer;
  },
  fromJSON(object: any): DelegationSlash {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      kIndex: isSet(object.kIndex) ? Long.fromValue(object.kIndex) : Long.UZERO,
      fraction: isSet(object.fraction) ? String(object.fraction) : ""
    };
  },
  fromPartial(object: Partial<DelegationSlash>): DelegationSlash {
    const message = createBaseDelegationSlash();
    message.staker = object.staker ?? "";
    message.kIndex = object.kIndex !== undefined && object.kIndex !== null ? Long.fromValue(object.kIndex) : Long.UZERO;
    message.fraction = object.fraction ?? "";
    return message;
  }
};
function createBaseUndelegationQueueEntry(): UndelegationQueueEntry {
  return {
    index: Long.UZERO,
    staker: "",
    delegator: "",
    amount: Long.UZERO,
    creationTime: Long.UZERO
  };
}
export const UndelegationQueueEntry = {
  encode(message: UndelegationQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(26).string(message.delegator);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    if (!message.creationTime.isZero()) {
      writer.uint32(40).uint64(message.creationTime);
    }
    return writer;
  },
  fromJSON(object: any): UndelegationQueueEntry {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      creationTime: isSet(object.creationTime) ? Long.fromValue(object.creationTime) : Long.UZERO
    };
  },
  fromPartial(object: Partial<UndelegationQueueEntry>): UndelegationQueueEntry {
    const message = createBaseUndelegationQueueEntry();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? Long.fromValue(object.creationTime) : Long.UZERO;
    return message;
  }
};
function createBaseQueueState(): QueueState {
  return {
    lowIndex: Long.UZERO,
    highIndex: Long.UZERO
  };
}
export const QueueState = {
  encode(message: QueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lowIndex.isZero()) {
      writer.uint32(8).uint64(message.lowIndex);
    }
    if (!message.highIndex.isZero()) {
      writer.uint32(16).uint64(message.highIndex);
    }
    return writer;
  },
  fromJSON(object: any): QueueState {
    return {
      lowIndex: isSet(object.lowIndex) ? Long.fromValue(object.lowIndex) : Long.UZERO,
      highIndex: isSet(object.highIndex) ? Long.fromValue(object.highIndex) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueueState>): QueueState {
    const message = createBaseQueueState();
    message.lowIndex = object.lowIndex !== undefined && object.lowIndex !== null ? Long.fromValue(object.lowIndex) : Long.UZERO;
    message.highIndex = object.highIndex !== undefined && object.highIndex !== null ? Long.fromValue(object.highIndex) : Long.UZERO;
    return message;
  }
};
function createBaseRedelegationCooldown(): RedelegationCooldown {
  return {
    address: "",
    creationDate: Long.UZERO
  };
}
export const RedelegationCooldown = {
  encode(message: RedelegationCooldown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.creationDate.isZero()) {
      writer.uint32(16).uint64(message.creationDate);
    }
    return writer;
  },
  fromJSON(object: any): RedelegationCooldown {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creationDate: isSet(object.creationDate) ? Long.fromValue(object.creationDate) : Long.UZERO
    };
  },
  fromPartial(object: Partial<RedelegationCooldown>): RedelegationCooldown {
    const message = createBaseRedelegationCooldown();
    message.address = object.address ?? "";
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? Long.fromValue(object.creationDate) : Long.UZERO;
    return message;
  }
};