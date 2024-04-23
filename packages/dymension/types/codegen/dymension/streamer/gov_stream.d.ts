import { DistrRecord, DistrRecordAmino, DistrRecordSDKType } from "./distr_info";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
export interface CreateStreamProposal {
    title: string;
    description: string;
    distributeToRecords: DistrRecord[];
    /** coins are coin(s) to be distributed by the stream */
    coins: Coin[];
    /** start_time is the distribution start time */
    startTime: Timestamp;
    distrEpochIdentifier: string;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    numEpochsPaidOver: bigint;
}
export interface CreateStreamProposalProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.CreateStreamProposal";
    value: Uint8Array;
}
export interface CreateStreamProposalAmino {
    title?: string;
    description?: string;
    distribute_to_records?: DistrRecordAmino[];
    /** coins are coin(s) to be distributed by the stream */
    coins?: CoinAmino[];
    /** start_time is the distribution start time */
    start_time?: string;
    distr_epoch_identifier?: string;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    num_epochs_paid_over?: string;
}
export interface CreateStreamProposalAminoMsg {
    type: "/dymensionxyz.dymension.streamer.CreateStreamProposal";
    value: CreateStreamProposalAmino;
}
export interface CreateStreamProposalSDKType {
    title: string;
    description: string;
    distribute_to_records: DistrRecordSDKType[];
    coins: CoinSDKType[];
    start_time: TimestampSDKType;
    distr_epoch_identifier: string;
    num_epochs_paid_over: bigint;
}
export interface TerminateStreamProposal {
    title: string;
    description: string;
    streamId: bigint;
}
export interface TerminateStreamProposalProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.TerminateStreamProposal";
    value: Uint8Array;
}
export interface TerminateStreamProposalAmino {
    title?: string;
    description?: string;
    stream_id?: string;
}
export interface TerminateStreamProposalAminoMsg {
    type: "/dymensionxyz.dymension.streamer.TerminateStreamProposal";
    value: TerminateStreamProposalAmino;
}
export interface TerminateStreamProposalSDKType {
    title: string;
    description: string;
    stream_id: bigint;
}
export declare const CreateStreamProposal: {
    typeUrl: string;
    encode(message: CreateStreamProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateStreamProposal;
    fromPartial(object: Partial<CreateStreamProposal>): CreateStreamProposal;
    fromAmino(object: CreateStreamProposalAmino): CreateStreamProposal;
    toAmino(message: CreateStreamProposal): CreateStreamProposalAmino;
    fromAminoMsg(object: CreateStreamProposalAminoMsg): CreateStreamProposal;
    fromProtoMsg(message: CreateStreamProposalProtoMsg): CreateStreamProposal;
    toProto(message: CreateStreamProposal): Uint8Array;
    toProtoMsg(message: CreateStreamProposal): CreateStreamProposalProtoMsg;
};
export declare const TerminateStreamProposal: {
    typeUrl: string;
    encode(message: TerminateStreamProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TerminateStreamProposal;
    fromPartial(object: Partial<TerminateStreamProposal>): TerminateStreamProposal;
    fromAmino(object: TerminateStreamProposalAmino): TerminateStreamProposal;
    toAmino(message: TerminateStreamProposal): TerminateStreamProposalAmino;
    fromAminoMsg(object: TerminateStreamProposalAminoMsg): TerminateStreamProposal;
    fromProtoMsg(message: TerminateStreamProposalProtoMsg): TerminateStreamProposal;
    toProto(message: TerminateStreamProposal): Uint8Array;
    toProtoMsg(message: TerminateStreamProposal): TerminateStreamProposalProtoMsg;
};
