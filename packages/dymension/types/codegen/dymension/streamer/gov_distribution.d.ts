import { DistrRecord, DistrRecordAmino, DistrRecordSDKType } from "./distr_info";
import { BinaryWriter } from "../../binary";
/**
 * ReplaceStreamDistributionProposal is a gov Content type for updating a stream
 * If a ReplaceStreamDistributionProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight.
 */
export interface ReplaceStreamDistributionProposal {
    title: string;
    description: string;
    streamId: bigint;
    records: DistrRecord[];
}
export interface ReplaceStreamDistributionProposalProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.ReplaceStreamDistributionProposal";
    value: Uint8Array;
}
/**
 * ReplaceStreamDistributionProposal is a gov Content type for updating a stream
 * If a ReplaceStreamDistributionProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight.
 */
export interface ReplaceStreamDistributionProposalAmino {
    title?: string;
    description?: string;
    stream_id?: string;
    records?: DistrRecordAmino[];
}
export interface ReplaceStreamDistributionProposalAminoMsg {
    type: "/dymensionxyz.dymension.streamer.ReplaceStreamDistributionProposal";
    value: ReplaceStreamDistributionProposalAmino;
}
/**
 * ReplaceStreamDistributionProposal is a gov Content type for updating a stream
 * If a ReplaceStreamDistributionProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight.
 */
export interface ReplaceStreamDistributionProposalSDKType {
    title: string;
    description: string;
    stream_id: bigint;
    records: DistrRecordSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdateStreamDistributionProposal {
    title: string;
    description: string;
    streamId: bigint;
    records: DistrRecord[];
}
export interface UpdateStreamDistributionProposalProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.UpdateStreamDistributionProposal";
    value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdateStreamDistributionProposalAmino {
    title?: string;
    description?: string;
    stream_id?: string;
    records?: DistrRecordAmino[];
}
export interface UpdateStreamDistributionProposalAminoMsg {
    type: "/dymensionxyz.dymension.streamer.UpdateStreamDistributionProposal";
    value: UpdateStreamDistributionProposalAmino;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdateStreamDistributionProposalSDKType {
    title: string;
    description: string;
    stream_id: bigint;
    records: DistrRecordSDKType[];
}
export declare const ReplaceStreamDistributionProposal: {
    typeUrl: string;
    encode(message: ReplaceStreamDistributionProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ReplaceStreamDistributionProposal;
    fromPartial(object: Partial<ReplaceStreamDistributionProposal>): ReplaceStreamDistributionProposal;
    fromAmino(object: ReplaceStreamDistributionProposalAmino): ReplaceStreamDistributionProposal;
    toAmino(message: ReplaceStreamDistributionProposal): ReplaceStreamDistributionProposalAmino;
    fromAminoMsg(object: ReplaceStreamDistributionProposalAminoMsg): ReplaceStreamDistributionProposal;
    fromProtoMsg(message: ReplaceStreamDistributionProposalProtoMsg): ReplaceStreamDistributionProposal;
    toProto(message: ReplaceStreamDistributionProposal): Uint8Array;
    toProtoMsg(message: ReplaceStreamDistributionProposal): ReplaceStreamDistributionProposalProtoMsg;
};
export declare const UpdateStreamDistributionProposal: {
    typeUrl: string;
    encode(message: UpdateStreamDistributionProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateStreamDistributionProposal;
    fromPartial(object: Partial<UpdateStreamDistributionProposal>): UpdateStreamDistributionProposal;
    fromAmino(object: UpdateStreamDistributionProposalAmino): UpdateStreamDistributionProposal;
    toAmino(message: UpdateStreamDistributionProposal): UpdateStreamDistributionProposalAmino;
    fromAminoMsg(object: UpdateStreamDistributionProposalAminoMsg): UpdateStreamDistributionProposal;
    fromProtoMsg(message: UpdateStreamDistributionProposalProtoMsg): UpdateStreamDistributionProposal;
    toProto(message: UpdateStreamDistributionProposal): Uint8Array;
    toProtoMsg(message: UpdateStreamDistributionProposal): UpdateStreamDistributionProposalProtoMsg;
};
