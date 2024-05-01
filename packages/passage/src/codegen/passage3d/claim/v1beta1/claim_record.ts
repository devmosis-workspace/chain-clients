import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
  /** address of claim user */
  address: string;
  /** claimable amount for claim actions */
  claimableAmount: Coin[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  actionCompleted: boolean[];
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/passage3d.claim.v1beta1.ClaimRecord";
  value: Uint8Array;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordAmino {
  /** address of claim user */
  address?: string;
  /** claimable amount for claim actions */
  claimable_amount?: CoinAmino[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  action_completed?: boolean[];
}
export interface ClaimRecordAminoMsg {
  type: "/passage3d.claim.v1beta1.ClaimRecord";
  value: ClaimRecordAmino;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
  address: string;
  claimable_amount: CoinSDKType[];
  action_completed: boolean[];
}
function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    claimableAmount: [],
    actionCompleted: []
  };
}
export const ClaimRecord = {
  typeUrl: "/passage3d.claim.v1beta1.ClaimRecord",
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.claimableAmount) {
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
      claimableAmount: Array.isArray(object?.claimableAmount) ? object.claimableAmount.map((e: any) => Coin.fromJSON(e)) : [],
      actionCompleted: Array.isArray(object?.actionCompleted) ? object.actionCompleted.map((e: any) => Boolean(e)) : []
    };
  },
  fromPartial(object: Partial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.claimableAmount = object.claimableAmount?.map(e => Coin.fromPartial(e)) || [];
    message.actionCompleted = object.actionCompleted?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    const message = createBaseClaimRecord();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.claimableAmount = object.claimable_amount?.map(e => Coin.fromAmino(e)) || [];
    message.actionCompleted = object.action_completed?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.claimableAmount) {
      obj.claimable_amount = message.claimableAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimable_amount = [];
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
      typeUrl: "/passage3d.claim.v1beta1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};