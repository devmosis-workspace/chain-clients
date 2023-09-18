import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum Action {
  ActionInitialClaim = 0,
  ActionBidNFT = 1,
  ActionMintNFT = 2,
  ActionVote = 3,
  ActionDelegateStake = 4,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionInitialClaim":
      return Action.ActionInitialClaim;
    case 1:
    case "ActionBidNFT":
      return Action.ActionBidNFT;
    case 2:
    case "ActionMintNFT":
      return Action.ActionMintNFT;
    case 3:
    case "ActionVote":
      return Action.ActionVote;
    case 4:
    case "ActionDelegateStake":
      return Action.ActionDelegateStake;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionInitialClaim:
      return "ActionInitialClaim";
    case Action.ActionBidNFT:
      return "ActionBidNFT";
    case Action.ActionMintNFT:
      return "ActionMintNFT";
    case Action.ActionVote:
      return "ActionVote";
    case Action.ActionDelegateStake:
      return "ActionDelegateStake";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ClaimRecord {
  /** address of claim user */
  address: string;
  /** total initial claimable amount for the user */
  initialClaimableAmount: Coin[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  actionCompleted: boolean[];
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord";
  value: Uint8Array;
}
export interface ClaimRecordAmino {
  /** address of claim user */
  address: string;
  /** total initial claimable amount for the user */
  initial_claimable_amount: CoinAmino[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  action_completed: boolean[];
}
export interface ClaimRecordAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord";
  value: ClaimRecordAmino;
}
export interface ClaimRecordSDKType {
  address: string;
  initial_claimable_amount: CoinSDKType[];
  action_completed: boolean[];
}
function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    initialClaimableAmount: [],
    actionCompleted: []
  };
}
export const ClaimRecord = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord",
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.initialClaimableAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
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
      address: isSet(object.address) ? String(object.address) : "",
      initialClaimableAmount: Array.isArray(object?.initialClaimableAmount) ? object.initialClaimableAmount.map((e: any) => Coin.fromJSON(e)) : [],
      actionCompleted: Array.isArray(object?.actionCompleted) ? object.actionCompleted.map((e: any) => Boolean(e)) : []
    };
  },
  fromPartial(object: Partial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.initialClaimableAmount = object.initialClaimableAmount?.map(e => Coin.fromPartial(e)) || [];
    message.actionCompleted = object.actionCompleted?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    return {
      address: object.address,
      initialClaimableAmount: Array.isArray(object?.initial_claimable_amount) ? object.initial_claimable_amount.map((e: any) => Coin.fromAmino(e)) : [],
      actionCompleted: Array.isArray(object?.action_completed) ? object.action_completed.map((e: any) => e) : []
    };
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.initialClaimableAmount) {
      obj.initial_claimable_amount = message.initialClaimableAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_claimable_amount = [];
    }
    if (message.actionCompleted) {
      obj.action_completed = message.actionCompleted.map(e => e);
    } else {
      obj.action_completed = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord {
    return ClaimRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord {
    return ClaimRecord.decode(message.value);
  },
  toProto(message: ClaimRecord): Uint8Array {
    return ClaimRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};