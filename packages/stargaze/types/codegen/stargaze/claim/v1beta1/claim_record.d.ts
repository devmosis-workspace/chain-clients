import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export declare enum Action {
    ActionInitialClaim = 0,
    ActionBidNFT = 1,
    ActionMintNFT = 2,
    ActionVote = 3,
    ActionDelegateStake = 4,
    UNRECOGNIZED = -1
}
export declare const ActionSDKType: typeof Action;
export declare const ActionAmino: typeof Action;
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
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
export declare const ClaimRecord: {
    typeUrl: string;
    encode(message: ClaimRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClaimRecord;
    fromPartial(object: Partial<ClaimRecord>): ClaimRecord;
    fromAmino(object: ClaimRecordAmino): ClaimRecord;
    toAmino(message: ClaimRecord): ClaimRecordAmino;
    fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord;
    fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord;
    toProto(message: ClaimRecord): Uint8Array;
    toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg;
};
