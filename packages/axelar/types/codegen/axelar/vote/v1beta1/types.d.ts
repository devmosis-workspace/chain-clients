import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface TalliedVote_IsVoterLateEntry {
    key: string;
    value: boolean;
}
export interface TalliedVote_IsVoterLateEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface TalliedVote_IsVoterLateEntryAmino {
    key?: string;
    value?: boolean;
}
export interface TalliedVote_IsVoterLateEntryAminoMsg {
    type: string;
    value: TalliedVote_IsVoterLateEntryAmino;
}
export interface TalliedVote_IsVoterLateEntrySDKType {
    key: string;
    value: boolean;
}
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVote {
    tally: Uint8Array;
    data?: (Any) | undefined;
    pollId: bigint;
    isVoterLate: {
        [key: string]: boolean;
    };
}
export interface TalliedVoteProtoMsg {
    typeUrl: "/axelar.vote.v1beta1.TalliedVote";
    value: Uint8Array;
}
export type TalliedVoteEncoded = Omit<TalliedVote, "data"> & {
    data?: AnyProtoMsg | undefined;
};
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVoteAmino {
    tally?: string;
    data?: AnyAmino;
    poll_id?: string;
    is_voter_late?: {
        [key: string]: boolean;
    };
}
export interface TalliedVoteAminoMsg {
    type: "/axelar.vote.v1beta1.TalliedVote";
    value: TalliedVoteAmino;
}
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVoteSDKType {
    tally: Uint8Array;
    data?: AnySDKType | undefined;
    poll_id: bigint;
    is_voter_late: {
        [key: string]: boolean;
    };
}
export declare const TalliedVote_IsVoterLateEntry: {
    encode(message: TalliedVote_IsVoterLateEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TalliedVote_IsVoterLateEntry;
    fromPartial(object: Partial<TalliedVote_IsVoterLateEntry>): TalliedVote_IsVoterLateEntry;
    fromAmino(object: TalliedVote_IsVoterLateEntryAmino): TalliedVote_IsVoterLateEntry;
    toAmino(message: TalliedVote_IsVoterLateEntry): TalliedVote_IsVoterLateEntryAmino;
    fromAminoMsg(object: TalliedVote_IsVoterLateEntryAminoMsg): TalliedVote_IsVoterLateEntry;
    fromProtoMsg(message: TalliedVote_IsVoterLateEntryProtoMsg): TalliedVote_IsVoterLateEntry;
    toProto(message: TalliedVote_IsVoterLateEntry): Uint8Array;
};
export declare const TalliedVote: {
    typeUrl: string;
    encode(message: TalliedVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TalliedVote;
    fromPartial(object: Partial<TalliedVote>): TalliedVote;
    fromAmino(object: TalliedVoteAmino): TalliedVote;
    toAmino(message: TalliedVote): TalliedVoteAmino;
    fromAminoMsg(object: TalliedVoteAminoMsg): TalliedVote;
    fromProtoMsg(message: TalliedVoteProtoMsg): TalliedVote;
    toProto(message: TalliedVote): Uint8Array;
    toProtoMsg(message: TalliedVote): TalliedVoteProtoMsg;
};
export declare const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: AnyAmino) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: Any) => AnyAmino;
