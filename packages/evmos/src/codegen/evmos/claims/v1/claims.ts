import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Action defines the list of available actions to claim the airdrop tokens. */
export enum Action {
  /** ACTION_UNSPECIFIED - ACTION_UNSPECIFIED defines an invalid action. */
  ACTION_UNSPECIFIED = 0,
  /** ACTION_VOTE - ACTION_VOTE defines a proposal vote. */
  ACTION_VOTE = 1,
  /** ACTION_DELEGATE - ACTION_DELEGATE defines an staking delegation. */
  ACTION_DELEGATE = 2,
  /** ACTION_EVM - ACTION_EVM defines an EVM transaction. */
  ACTION_EVM = 3,
  /** ACTION_IBC_TRANSFER - ACTION_IBC_TRANSFER defines a fungible token transfer transaction via IBC. */
  ACTION_IBC_TRANSFER = 4,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return Action.ACTION_UNSPECIFIED;
    case 1:
    case "ACTION_VOTE":
      return Action.ACTION_VOTE;
    case 2:
    case "ACTION_DELEGATE":
      return Action.ACTION_DELEGATE;
    case 3:
    case "ACTION_EVM":
      return Action.ACTION_EVM;
    case 4:
    case "ACTION_IBC_TRANSFER":
      return Action.ACTION_IBC_TRANSFER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case Action.ACTION_VOTE:
      return "ACTION_VOTE";
    case Action.ACTION_DELEGATE:
      return "ACTION_DELEGATE";
    case Action.ACTION_EVM:
      return "ACTION_EVM";
    case Action.ACTION_IBC_TRANSFER:
      return "ACTION_IBC_TRANSFER";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 */
export interface Claim {
  /** action enum */
  action: Action;
  /** completed is true if the action has been completed */
  completed: boolean;
  /** claimable_amount of tokens for the action. Zero if completed */
  claimableAmount: string;
}
export interface ClaimProtoMsg {
  typeUrl: "/evmos.claims.v1.Claim";
  value: Uint8Array;
}
/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 */
export interface ClaimAmino {
  /** action enum */
  action: Action;
  /** completed is true if the action has been completed */
  completed: boolean;
  /** claimable_amount of tokens for the action. Zero if completed */
  claimable_amount: string;
}
export interface ClaimAminoMsg {
  type: "/evmos.claims.v1.Claim";
  value: ClaimAmino;
}
/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 */
export interface ClaimSDKType {
  action: Action;
  completed: boolean;
  claimable_amount: string;
}
/**
 * ClaimsRecordAddress is the claims metadata per address that is used at
 * Genesis.
 */
export interface ClaimsRecordAddress {
  /** address of claiming user in either bech32 or hex format */
  address: string;
  /** initial_claimable_amount for the user */
  initialClaimableAmount: string;
  /** actions_completed is a slice that describes which actions were completed */
  actionsCompleted: boolean[];
}
export interface ClaimsRecordAddressProtoMsg {
  typeUrl: "/evmos.claims.v1.ClaimsRecordAddress";
  value: Uint8Array;
}
/**
 * ClaimsRecordAddress is the claims metadata per address that is used at
 * Genesis.
 */
export interface ClaimsRecordAddressAmino {
  /** address of claiming user in either bech32 or hex format */
  address: string;
  /** initial_claimable_amount for the user */
  initial_claimable_amount: string;
  /** actions_completed is a slice that describes which actions were completed */
  actions_completed: boolean[];
}
export interface ClaimsRecordAddressAminoMsg {
  type: "/evmos.claims.v1.ClaimsRecordAddress";
  value: ClaimsRecordAddressAmino;
}
/**
 * ClaimsRecordAddress is the claims metadata per address that is used at
 * Genesis.
 */
export interface ClaimsRecordAddressSDKType {
  address: string;
  initial_claimable_amount: string;
  actions_completed: boolean[];
}
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecord {
  /** initial_claimable_amount for the user */
  initialClaimableAmount: string;
  /** actions_completed is a slice that describes which actions were completed */
  actionsCompleted: boolean[];
}
export interface ClaimsRecordProtoMsg {
  typeUrl: "/evmos.claims.v1.ClaimsRecord";
  value: Uint8Array;
}
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecordAmino {
  /** initial_claimable_amount for the user */
  initial_claimable_amount: string;
  /** actions_completed is a slice that describes which actions were completed */
  actions_completed: boolean[];
}
export interface ClaimsRecordAminoMsg {
  type: "/evmos.claims.v1.ClaimsRecord";
  value: ClaimsRecordAmino;
}
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecordSDKType {
  initial_claimable_amount: string;
  actions_completed: boolean[];
}
function createBaseClaim(): Claim {
  return {
    action: 0,
    completed: false,
    claimableAmount: ""
  };
}
export const Claim = {
  typeUrl: "/evmos.claims.v1.Claim",
  encode(message: Claim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.completed === true) {
      writer.uint32(16).bool(message.completed);
    }
    if (message.claimableAmount !== "") {
      writer.uint32(26).string(message.claimableAmount);
    }
    return writer;
  },
  fromJSON(object: any): Claim {
    return {
      action: isSet(object.action) ? actionFromJSON(object.action) : -1,
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
      claimableAmount: isSet(object.claimableAmount) ? String(object.claimableAmount) : ""
    };
  },
  fromPartial(object: Partial<Claim>): Claim {
    const message = createBaseClaim();
    message.action = object.action ?? 0;
    message.completed = object.completed ?? false;
    message.claimableAmount = object.claimableAmount ?? "";
    return message;
  },
  fromAmino(object: ClaimAmino): Claim {
    return {
      action: isSet(object.action) ? actionFromJSON(object.action) : -1,
      completed: object.completed,
      claimableAmount: object.claimable_amount
    };
  },
  toAmino(message: Claim): ClaimAmino {
    const obj: any = {};
    obj.action = message.action;
    obj.completed = message.completed;
    obj.claimable_amount = message.claimableAmount;
    return obj;
  },
  fromAminoMsg(object: ClaimAminoMsg): Claim {
    return Claim.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimProtoMsg): Claim {
    return Claim.decode(message.value);
  },
  toProto(message: Claim): Uint8Array {
    return Claim.encode(message).finish();
  },
  toProtoMsg(message: Claim): ClaimProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.Claim",
      value: Claim.encode(message).finish()
    };
  }
};
function createBaseClaimsRecordAddress(): ClaimsRecordAddress {
  return {
    address: "",
    initialClaimableAmount: "",
    actionsCompleted: []
  };
}
export const ClaimsRecordAddress = {
  typeUrl: "/evmos.claims.v1.ClaimsRecordAddress",
  encode(message: ClaimsRecordAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.initialClaimableAmount !== "") {
      writer.uint32(18).string(message.initialClaimableAmount);
    }
    writer.uint32(26).fork();
    for (const v of message.actionsCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): ClaimsRecordAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      initialClaimableAmount: isSet(object.initialClaimableAmount) ? String(object.initialClaimableAmount) : "",
      actionsCompleted: Array.isArray(object?.actionsCompleted) ? object.actionsCompleted.map((e: any) => Boolean(e)) : []
    };
  },
  fromPartial(object: Partial<ClaimsRecordAddress>): ClaimsRecordAddress {
    const message = createBaseClaimsRecordAddress();
    message.address = object.address ?? "";
    message.initialClaimableAmount = object.initialClaimableAmount ?? "";
    message.actionsCompleted = object.actionsCompleted?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClaimsRecordAddressAmino): ClaimsRecordAddress {
    return {
      address: object.address,
      initialClaimableAmount: object.initial_claimable_amount,
      actionsCompleted: Array.isArray(object?.actions_completed) ? object.actions_completed.map((e: any) => e) : []
    };
  },
  toAmino(message: ClaimsRecordAddress): ClaimsRecordAddressAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.initial_claimable_amount = message.initialClaimableAmount;
    if (message.actionsCompleted) {
      obj.actions_completed = message.actionsCompleted.map(e => e);
    } else {
      obj.actions_completed = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClaimsRecordAddressAminoMsg): ClaimsRecordAddress {
    return ClaimsRecordAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimsRecordAddressProtoMsg): ClaimsRecordAddress {
    return ClaimsRecordAddress.decode(message.value);
  },
  toProto(message: ClaimsRecordAddress): Uint8Array {
    return ClaimsRecordAddress.encode(message).finish();
  },
  toProtoMsg(message: ClaimsRecordAddress): ClaimsRecordAddressProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.ClaimsRecordAddress",
      value: ClaimsRecordAddress.encode(message).finish()
    };
  }
};
function createBaseClaimsRecord(): ClaimsRecord {
  return {
    initialClaimableAmount: "",
    actionsCompleted: []
  };
}
export const ClaimsRecord = {
  typeUrl: "/evmos.claims.v1.ClaimsRecord",
  encode(message: ClaimsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initialClaimableAmount !== "") {
      writer.uint32(10).string(message.initialClaimableAmount);
    }
    writer.uint32(18).fork();
    for (const v of message.actionsCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): ClaimsRecord {
    return {
      initialClaimableAmount: isSet(object.initialClaimableAmount) ? String(object.initialClaimableAmount) : "",
      actionsCompleted: Array.isArray(object?.actionsCompleted) ? object.actionsCompleted.map((e: any) => Boolean(e)) : []
    };
  },
  fromPartial(object: Partial<ClaimsRecord>): ClaimsRecord {
    const message = createBaseClaimsRecord();
    message.initialClaimableAmount = object.initialClaimableAmount ?? "";
    message.actionsCompleted = object.actionsCompleted?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClaimsRecordAmino): ClaimsRecord {
    return {
      initialClaimableAmount: object.initial_claimable_amount,
      actionsCompleted: Array.isArray(object?.actions_completed) ? object.actions_completed.map((e: any) => e) : []
    };
  },
  toAmino(message: ClaimsRecord): ClaimsRecordAmino {
    const obj: any = {};
    obj.initial_claimable_amount = message.initialClaimableAmount;
    if (message.actionsCompleted) {
      obj.actions_completed = message.actionsCompleted.map(e => e);
    } else {
      obj.actions_completed = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClaimsRecordAminoMsg): ClaimsRecord {
    return ClaimsRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimsRecordProtoMsg): ClaimsRecord {
    return ClaimsRecord.decode(message.value);
  },
  toProto(message: ClaimsRecord): Uint8Array {
    return ClaimsRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimsRecord): ClaimsRecordProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.ClaimsRecord",
      value: ClaimsRecord.encode(message).finish()
    };
  }
};