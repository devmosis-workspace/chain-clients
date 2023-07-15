import * as _m0 from "protobufjs/minimal";
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
  encode(message: Claim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      action: isSet(object.action) ? actionFromJSON(object.action) : 0,
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
  encode(message: ClaimsRecordAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseClaimsRecord(): ClaimsRecord {
  return {
    initialClaimableAmount: "",
    actionsCompleted: []
  };
}
export const ClaimsRecord = {
  encode(message: ClaimsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};