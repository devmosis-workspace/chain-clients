import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
export declare enum BountyState {
    BOUNTY_STATE_SRCDEBITTED = 0,
    BOUNTY_STATE_DESTCREDITED = 1,
    BOUNTY_STATE_REVERTEDBACK = 2,
    UNRECOGNIZED = -1
}
export declare const BountyStateSDKType: typeof BountyState;
export declare const BountyStateAmino: typeof BountyState;
export declare function bountyStateFromJSON(object: any): BountyState;
export declare function bountyStateToJSON(object: BountyState): string;
export declare enum BountyParent {
    BOUNTY_PARENT_ISSUE = 0,
    UNRECOGNIZED = -1
}
export declare const BountyParentSDKType: typeof BountyParent;
export declare const BountyParentAmino: typeof BountyParent;
export declare function bountyParentFromJSON(object: any): BountyParent;
export declare function bountyParentToJSON(object: BountyParent): string;
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
export declare const Bounty: {
    typeUrl: string;
    encode(message: Bounty, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Bounty;
    fromPartial(object: Partial<Bounty>): Bounty;
    fromAmino(object: BountyAmino): Bounty;
    toAmino(message: Bounty): BountyAmino;
    fromAminoMsg(object: BountyAminoMsg): Bounty;
    fromProtoMsg(message: BountyProtoMsg): Bounty;
    toProto(message: Bounty): Uint8Array;
    toProtoMsg(message: Bounty): BountyProtoMsg;
};
