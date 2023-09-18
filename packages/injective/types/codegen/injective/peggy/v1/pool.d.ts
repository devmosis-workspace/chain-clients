import { BinaryWriter } from "../../../binary";
/** IDSet represents a set of IDs */
export interface IDSet {
    /** IDSet represents a set of IDs */
    ids: bigint[];
}
export interface IDSetProtoMsg {
    typeUrl: "/injective.peggy.v1.IDSet";
    value: Uint8Array;
}
/** IDSet represents a set of IDs */
export interface IDSetAmino {
    /** IDSet represents a set of IDs */
    ids: string[];
}
export interface IDSetAminoMsg {
    type: "/injective.peggy.v1.IDSet";
    value: IDSetAmino;
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
    ids: bigint[];
}
export interface BatchFees {
    token: string;
    totalFees: string;
}
export interface BatchFeesProtoMsg {
    typeUrl: "/injective.peggy.v1.BatchFees";
    value: Uint8Array;
}
export interface BatchFeesAmino {
    token: string;
    total_fees: string;
}
export interface BatchFeesAminoMsg {
    type: "/injective.peggy.v1.BatchFees";
    value: BatchFeesAmino;
}
export interface BatchFeesSDKType {
    token: string;
    total_fees: string;
}
export declare const IDSet: {
    typeUrl: string;
    encode(message: IDSet, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IDSet;
    fromPartial(object: Partial<IDSet>): IDSet;
    fromAmino(object: IDSetAmino): IDSet;
    toAmino(message: IDSet): IDSetAmino;
    fromAminoMsg(object: IDSetAminoMsg): IDSet;
    fromProtoMsg(message: IDSetProtoMsg): IDSet;
    toProto(message: IDSet): Uint8Array;
    toProtoMsg(message: IDSet): IDSetProtoMsg;
};
export declare const BatchFees: {
    typeUrl: string;
    encode(message: BatchFees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchFees;
    fromPartial(object: Partial<BatchFees>): BatchFees;
    fromAmino(object: BatchFeesAmino): BatchFees;
    toAmino(message: BatchFees): BatchFeesAmino;
    fromAminoMsg(object: BatchFeesAminoMsg): BatchFees;
    fromProtoMsg(message: BatchFeesProtoMsg): BatchFees;
    toProto(message: BatchFees): Uint8Array;
    toProtoMsg(message: BatchFees): BatchFeesProtoMsg;
};
