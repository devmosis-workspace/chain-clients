import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export enum Action {
  ACTION_FREE = 0,
  ACTION_LIQUID_STAKE = 1,
  ACTION_DELEGATE_STAKE = 2,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ACTION_FREE":
      return Action.ACTION_FREE;
    case 1:
    case "ACTION_LIQUID_STAKE":
      return Action.ACTION_LIQUID_STAKE;
    case 2:
    case "ACTION_DELEGATE_STAKE":
      return Action.ACTION_DELEGATE_STAKE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ACTION_FREE:
      return "ACTION_FREE";
    case Action.ACTION_LIQUID_STAKE:
      return "ACTION_LIQUID_STAKE";
    case Action.ACTION_DELEGATE_STAKE:
      return "ACTION_DELEGATE_STAKE";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
  /** airdrop identifier */
  airdropIdentifier: string;
  /** address of claim user */
  address: string;
  /** weight that represent the portion from total allocation */
  weight: string;
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  actionCompleted: boolean[];
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
  airdrop_identifier: string;
  address: string;
  weight: string;
  action_completed: boolean[];
}
function createBaseClaimRecord(): ClaimRecord {
  return {
    airdropIdentifier: "",
    address: "",
    weight: "",
    actionCompleted: []
  };
}
export const ClaimRecord = {
  encode(message: ClaimRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(26).string(message.weight);
    }
    writer.uint32(34).fork();
    for (const v of message.actionCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): ClaimRecord {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      actionCompleted: Array.isArray(object?.actionCompleted) ? object.actionCompleted.map((e: any) => Boolean(e)) : []
    };
  },
  fromPartial(object: Partial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.actionCompleted = object.actionCompleted?.map(e => e) || [];
    return message;
  }
};