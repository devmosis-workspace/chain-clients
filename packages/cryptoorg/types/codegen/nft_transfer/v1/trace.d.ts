import { BinaryWriter } from "../../binary";
/**
 * ClassTrace contains the base classID for ICS721 non-fungible tokens and the
 * source tracing information path.
 */
export interface ClassTrace {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the non-fungible token.
     */
    path: string;
    /** base classID of the relayed non-fungible token. */
    baseClassId: string;
}
export interface ClassTraceProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.ClassTrace";
    value: Uint8Array;
}
/**
 * ClassTrace contains the base classID for ICS721 non-fungible tokens and the
 * source tracing information path.
 */
export interface ClassTraceAmino {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the non-fungible token.
     */
    path: string;
    /** base classID of the relayed non-fungible token. */
    base_class_id: string;
}
export interface ClassTraceAminoMsg {
    type: "/chainmain.nft_transfer.v1.ClassTrace";
    value: ClassTraceAmino;
}
/**
 * ClassTrace contains the base classID for ICS721 non-fungible tokens and the
 * source tracing information path.
 */
export interface ClassTraceSDKType {
    path: string;
    base_class_id: string;
}
export declare const ClassTrace: {
    typeUrl: string;
    encode(message: ClassTrace, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassTrace;
    fromPartial(object: Partial<ClassTrace>): ClassTrace;
    fromAmino(object: ClassTraceAmino): ClassTrace;
    toAmino(message: ClassTrace): ClassTraceAmino;
    fromAminoMsg(object: ClassTraceAminoMsg): ClassTrace;
    fromProtoMsg(message: ClassTraceProtoMsg): ClassTrace;
    toProto(message: ClassTrace): Uint8Array;
    toProtoMsg(message: ClassTrace): ClassTraceProtoMsg;
};
