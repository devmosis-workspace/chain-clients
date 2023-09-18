import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../../utils/v1beta1/threshold";
import { Snapshot, SnapshotAmino, SnapshotSDKType } from "../../../snapshot/exported/v1beta1/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare enum PollState {
    POLL_STATE_UNSPECIFIED = 0,
    POLL_STATE_PENDING = 1,
    POLL_STATE_COMPLETED = 2,
    POLL_STATE_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const PollStateSDKType: typeof PollState;
export declare const PollStateAmino: typeof PollState;
export declare function pollStateFromJSON(object: any): PollState;
export declare function pollStateToJSON(object: PollState): string;
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadata {
    expiresAt: bigint;
    result: (Any) | undefined;
    votingThreshold: Threshold;
    state: PollState;
    minVoterCount: bigint;
    rewardPoolName: string;
    gracePeriod: bigint;
    completedAt: bigint;
    id: bigint;
    snapshot: Snapshot;
    module: string;
    moduleMetadata: (Any) | undefined;
}
export interface PollMetadataProtoMsg {
    typeUrl: "/axelar.vote.exported.v1beta1.PollMetadata";
    value: Uint8Array;
}
export type PollMetadataEncoded = Omit<PollMetadata, "result" | "moduleMetadata"> & {
    result?: AnyProtoMsg | undefined;
    moduleMetadata?: AnyProtoMsg | undefined;
};
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadataAmino {
    expires_at: string;
    result?: AnyAmino;
    voting_threshold?: ThresholdAmino;
    state: PollState;
    min_voter_count: string;
    reward_pool_name: string;
    grace_period: string;
    completed_at: string;
    id: string;
    snapshot?: SnapshotAmino;
    module: string;
    module_metadata?: AnyAmino;
}
export interface PollMetadataAminoMsg {
    type: "/axelar.vote.exported.v1beta1.PollMetadata";
    value: PollMetadataAmino;
}
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadataSDKType {
    expires_at: bigint;
    result: AnySDKType | undefined;
    voting_threshold: ThresholdSDKType;
    state: PollState;
    min_voter_count: bigint;
    reward_pool_name: string;
    grace_period: bigint;
    completed_at: bigint;
    id: bigint;
    snapshot: SnapshotSDKType;
    module: string;
    module_metadata: AnySDKType | undefined;
}
/** PollKey represents the key data for a poll */
/** @deprecated */
export interface PollKey {
    module: string;
    id: string;
}
export interface PollKeyProtoMsg {
    typeUrl: "/axelar.vote.exported.v1beta1.PollKey";
    value: Uint8Array;
}
/** PollKey represents the key data for a poll */
/** @deprecated */
export interface PollKeyAmino {
    module: string;
    id: string;
}
export interface PollKeyAminoMsg {
    type: "/axelar.vote.exported.v1beta1.PollKey";
    value: PollKeyAmino;
}
/** PollKey represents the key data for a poll */
/** @deprecated */
export interface PollKeySDKType {
    module: string;
    id: string;
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipants {
    pollId: bigint;
    participants: Uint8Array[];
}
export interface PollParticipantsProtoMsg {
    typeUrl: "/axelar.vote.exported.v1beta1.PollParticipants";
    value: Uint8Array;
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipantsAmino {
    poll_id: string;
    participants: Uint8Array[];
}
export interface PollParticipantsAminoMsg {
    type: "/axelar.vote.exported.v1beta1.PollParticipants";
    value: PollParticipantsAmino;
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipantsSDKType {
    poll_id: bigint;
    participants: Uint8Array[];
}
export declare const PollMetadata: {
    typeUrl: string;
    encode(message: PollMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PollMetadata;
    fromPartial(object: Partial<PollMetadata>): PollMetadata;
    fromAmino(object: PollMetadataAmino): PollMetadata;
    toAmino(message: PollMetadata): PollMetadataAmino;
    fromAminoMsg(object: PollMetadataAminoMsg): PollMetadata;
    fromProtoMsg(message: PollMetadataProtoMsg): PollMetadata;
    toProto(message: PollMetadata): Uint8Array;
    toProtoMsg(message: PollMetadata): PollMetadataProtoMsg;
};
export declare const PollKey: {
    typeUrl: string;
    encode(message: PollKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PollKey;
    fromPartial(object: Partial<PollKey>): PollKey;
    fromAmino(object: PollKeyAmino): PollKey;
    toAmino(message: PollKey): PollKeyAmino;
    fromAminoMsg(object: PollKeyAminoMsg): PollKey;
    fromProtoMsg(message: PollKeyProtoMsg): PollKey;
    toProto(message: PollKey): Uint8Array;
    toProtoMsg(message: PollKey): PollKeyProtoMsg;
};
export declare const PollParticipants: {
    typeUrl: string;
    encode(message: PollParticipants, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PollParticipants;
    fromPartial(object: Partial<PollParticipants>): PollParticipants;
    fromAmino(object: PollParticipantsAmino): PollParticipants;
    toAmino(message: PollParticipants): PollParticipantsAmino;
    fromAminoMsg(object: PollParticipantsAminoMsg): PollParticipants;
    fromProtoMsg(message: PollParticipantsProtoMsg): PollParticipants;
    toProto(message: PollParticipants): Uint8Array;
    toProtoMsg(message: PollParticipants): PollParticipantsProtoMsg;
};
export declare const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: AnyAmino) => Any;
export declare const Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: Any) => AnyAmino;
