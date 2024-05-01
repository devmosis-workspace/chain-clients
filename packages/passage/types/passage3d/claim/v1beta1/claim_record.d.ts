import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
