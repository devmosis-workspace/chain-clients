import { SignedMsgType } from "./types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CanonicalBlockID {
    hash: Uint8Array;
    partSetHeader?: CanonicalPartSetHeader;
}
export interface CanonicalBlockIDSDKType {
    hash: Uint8Array;
    part_set_header?: CanonicalPartSetHeaderSDKType;
}
export interface CanonicalPartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface CanonicalPartSetHeaderSDKType {
    total: number;
    hash: Uint8Array;
}
export interface CanonicalProposal {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    polRound: Long;
    blockId?: CanonicalBlockID;
    timestamp?: Timestamp;
    chainId: string;
}
export interface CanonicalProposalSDKType {
    type: SignedMsgType;
    height: Long;
    round: Long;
    pol_round: Long;
    block_id?: CanonicalBlockIDSDKType;
    timestamp?: TimestampSDKType;
    chain_id: string;
}
export interface CanonicalVote {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    blockId?: CanonicalBlockID;
    timestamp?: Timestamp;
    chainId: string;
}
export interface CanonicalVoteSDKType {
    type: SignedMsgType;
    height: Long;
    round: Long;
    block_id?: CanonicalBlockIDSDKType;
    timestamp?: TimestampSDKType;
    chain_id: string;
}
export declare const CanonicalBlockID: {
    encode(message: CanonicalBlockID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CanonicalBlockID;
    fromPartial(object: Partial<CanonicalBlockID>): CanonicalBlockID;
};
export declare const CanonicalPartSetHeader: {
    encode(message: CanonicalPartSetHeader, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CanonicalPartSetHeader;
    fromPartial(object: Partial<CanonicalPartSetHeader>): CanonicalPartSetHeader;
};
export declare const CanonicalProposal: {
    encode(message: CanonicalProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CanonicalProposal;
    fromPartial(object: Partial<CanonicalProposal>): CanonicalProposal;
};
export declare const CanonicalVote: {
    encode(message: CanonicalVote, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CanonicalVote;
    fromPartial(object: Partial<CanonicalVote>): CanonicalVote;
};
