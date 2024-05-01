import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum BountyState {
  BOUNTY_STATE_SRCDEBITTED = 0,
  BOUNTY_STATE_DESTCREDITED = 1,
  BOUNTY_STATE_REVERTEDBACK = 2,
  UNRECOGNIZED = -1,
}
export const BountyStateSDKType = BountyState;
export const BountyStateAmino = BountyState;
export function bountyStateFromJSON(object: any): BountyState {
  switch (object) {
    case 0:
    case "BOUNTY_STATE_SRCDEBITTED":
      return BountyState.BOUNTY_STATE_SRCDEBITTED;
    case 1:
    case "BOUNTY_STATE_DESTCREDITED":
      return BountyState.BOUNTY_STATE_DESTCREDITED;
    case 2:
    case "BOUNTY_STATE_REVERTEDBACK":
      return BountyState.BOUNTY_STATE_REVERTEDBACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BountyState.UNRECOGNIZED;
  }
}
export function bountyStateToJSON(object: BountyState): string {
  switch (object) {
    case BountyState.BOUNTY_STATE_SRCDEBITTED:
      return "BOUNTY_STATE_SRCDEBITTED";
    case BountyState.BOUNTY_STATE_DESTCREDITED:
      return "BOUNTY_STATE_DESTCREDITED";
    case BountyState.BOUNTY_STATE_REVERTEDBACK:
      return "BOUNTY_STATE_REVERTEDBACK";
    case BountyState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum BountyParent {
  BOUNTY_PARENT_ISSUE = 0,
  UNRECOGNIZED = -1,
}
export const BountyParentSDKType = BountyParent;
export const BountyParentAmino = BountyParent;
export function bountyParentFromJSON(object: any): BountyParent {
  switch (object) {
    case 0:
    case "BOUNTY_PARENT_ISSUE":
      return BountyParent.BOUNTY_PARENT_ISSUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BountyParent.UNRECOGNIZED;
  }
}
export function bountyParentToJSON(object: BountyParent): string {
  switch (object) {
    case BountyParent.BOUNTY_PARENT_ISSUE:
      return "BOUNTY_PARENT_ISSUE";
    case BountyParent.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Bounty {
  id: bigint;
  amount: Coin[];
  state: BountyState;
  repositoryId: bigint;
  parentIid: bigint;
  parent: BountyParent;
  expireAt: bigint;
  rewardedTo: string;
  createdAt: bigint;
  updatedAt: bigint;
  creator: string;
}
export interface BountyProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Bounty";
  value: Uint8Array;
}
export interface BountyAmino {
  id?: string;
  amount?: CoinAmino[];
  state?: BountyState;
  repositoryId?: string;
  parentIid?: string;
  parent?: BountyParent;
  expireAt?: string;
  rewardedTo?: string;
  createdAt?: string;
  updatedAt?: string;
  creator?: string;
}
export interface BountyAminoMsg {
  type: "/gitopia.gitopia.gitopia.Bounty";
  value: BountyAmino;
}
export interface BountySDKType {
  id: bigint;
  amount: CoinSDKType[];
  state: BountyState;
  repositoryId: bigint;
  parentIid: bigint;
  parent: BountyParent;
  expireAt: bigint;
  rewardedTo: string;
  createdAt: bigint;
  updatedAt: bigint;
  creator: string;
}
function createBaseBounty(): Bounty {
  return {
    id: BigInt(0),
    amount: [],
    state: 0,
    repositoryId: BigInt(0),
    parentIid: BigInt(0),
    parent: 0,
    expireAt: BigInt(0),
    rewardedTo: "",
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    creator: ""
  };
}
export const Bounty = {
  typeUrl: "/gitopia.gitopia.gitopia.Bounty",
  encode(message: Bounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(32).uint64(message.repositoryId);
    }
    if (message.parentIid !== BigInt(0)) {
      writer.uint32(40).uint64(message.parentIid);
    }
    if (message.parent !== 0) {
      writer.uint32(48).int32(message.parent);
    }
    if (message.expireAt !== BigInt(0)) {
      writer.uint32(56).int64(message.expireAt);
    }
    if (message.rewardedTo !== "") {
      writer.uint32(66).string(message.rewardedTo);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(72).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(80).int64(message.updatedAt);
    }
    if (message.creator !== "") {
      writer.uint32(90).string(message.creator);
    }
    return writer;
  },
  fromJSON(object: any): Bounty {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      state: isSet(object.state) ? bountyStateFromJSON(object.state) : -1,
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      parentIid: isSet(object.parentIid) ? BigInt(object.parentIid.toString()) : BigInt(0),
      parent: isSet(object.parent) ? bountyParentFromJSON(object.parent) : -1,
      expireAt: isSet(object.expireAt) ? BigInt(object.expireAt.toString()) : BigInt(0),
      rewardedTo: isSet(object.rewardedTo) ? String(object.rewardedTo) : "",
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  fromPartial(object: Partial<Bounty>): Bounty {
    const message = createBaseBounty();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.parentIid = object.parentIid !== undefined && object.parentIid !== null ? BigInt(object.parentIid.toString()) : BigInt(0);
    message.parent = object.parent ?? 0;
    message.expireAt = object.expireAt !== undefined && object.expireAt !== null ? BigInt(object.expireAt.toString()) : BigInt(0);
    message.rewardedTo = object.rewardedTo ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: BountyAmino): Bounty {
    const message = createBaseBounty();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.parentIid !== undefined && object.parentIid !== null) {
      message.parentIid = BigInt(object.parentIid);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = BigInt(object.expireAt);
    }
    if (object.rewardedTo !== undefined && object.rewardedTo !== null) {
      message.rewardedTo = object.rewardedTo;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = BigInt(object.updatedAt);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Bounty): BountyAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.state = message.state === 0 ? undefined : message.state;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.parentIid = message.parentIid !== BigInt(0) ? message.parentIid.toString() : undefined;
    obj.parent = message.parent === 0 ? undefined : message.parent;
    obj.expireAt = message.expireAt !== BigInt(0) ? message.expireAt.toString() : undefined;
    obj.rewardedTo = message.rewardedTo === "" ? undefined : message.rewardedTo;
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: BountyAminoMsg): Bounty {
    return Bounty.fromAmino(object.value);
  },
  fromProtoMsg(message: BountyProtoMsg): Bounty {
    return Bounty.decode(message.value);
  },
  toProto(message: Bounty): Uint8Array {
    return Bounty.encode(message).finish();
  },
  toProtoMsg(message: Bounty): BountyProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Bounty",
      value: Bounty.encode(message).finish()
    };
  }
};