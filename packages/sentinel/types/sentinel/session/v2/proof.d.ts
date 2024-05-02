import { Bandwidth, BandwidthAmino, BandwidthSDKType } from "../../types/v1/bandwidth";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
export interface Proof {
    id: bigint;
    bandwidth: Bandwidth;
    duration: Duration;
}
export interface ProofProtoMsg {
    typeUrl: "/sentinel.session.v2.Proof";
    value: Uint8Array;
}
export interface ProofAmino {
    id?: string;
    bandwidth?: BandwidthAmino;
    duration?: DurationAmino;
}
export interface ProofAminoMsg {
    type: "/sentinel.session.v2.Proof";
    value: ProofAmino;
}
export interface ProofSDKType {
    id: bigint;
    bandwidth: BandwidthSDKType;
    duration: DurationSDKType;
}
export declare const Proof: {
    typeUrl: string;
    encode(message: Proof, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Proof;
    fromPartial(object: Partial<Proof>): Proof;
    fromAmino(object: ProofAmino): Proof;
    toAmino(message: Proof): ProofAmino;
    fromAminoMsg(object: ProofAminoMsg): Proof;
    fromProtoMsg(message: ProofProtoMsg): Proof;
    toProto(message: Proof): Uint8Array;
    toProtoMsg(message: Proof): ProofProtoMsg;
};
