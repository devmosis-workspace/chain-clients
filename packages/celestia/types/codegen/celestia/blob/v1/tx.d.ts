import { BinaryWriter } from "../../../binary";
/** MsgPayForBlobs pays for the inclusion of a blob in the block. */
export interface MsgPayForBlobs {
    signer: string;
    /**
     * namespaces is a list of namespaces that the blobs are associated with. A
     * namespace is a byte slice of length 29 where the first byte is the
     * namespaceVersion and the subsequent 28 bytes are the namespaceId.
     */
    namespaces: Uint8Array[];
    blobSizes: number[];
    /** share_commitments is a list of share commitments (one per blob). */
    shareCommitments: Uint8Array[];
    /**
     * share_versions are the versions of the share format that the blobs
     * associated with this message should use when included in a block. The
     * share_versions specified must match the share_versions used to generate the
     * share_commitment in this message.
     */
    shareVersions: number[];
}
export interface MsgPayForBlobsProtoMsg {
    typeUrl: "/celestia.blob.v1.MsgPayForBlobs";
    value: Uint8Array;
}
/** MsgPayForBlobs pays for the inclusion of a blob in the block. */
export interface MsgPayForBlobsAmino {
    signer?: string;
    /**
     * namespaces is a list of namespaces that the blobs are associated with. A
     * namespace is a byte slice of length 29 where the first byte is the
     * namespaceVersion and the subsequent 28 bytes are the namespaceId.
     */
    namespaces?: string[];
    blob_sizes?: number[];
    /** share_commitments is a list of share commitments (one per blob). */
    share_commitments?: string[];
    /**
     * share_versions are the versions of the share format that the blobs
     * associated with this message should use when included in a block. The
     * share_versions specified must match the share_versions used to generate the
     * share_commitment in this message.
     */
    share_versions?: number[];
}
export interface MsgPayForBlobsAminoMsg {
    type: "/celestia.blob.v1.MsgPayForBlobs";
    value: MsgPayForBlobsAmino;
}
/** MsgPayForBlobs pays for the inclusion of a blob in the block. */
export interface MsgPayForBlobsSDKType {
    signer: string;
    namespaces: Uint8Array[];
    blob_sizes: number[];
    share_commitments: Uint8Array[];
    share_versions: number[];
}
/**
 * MsgPayForBlobsResponse describes the response returned after the submission
 * of a PayForBlobs
 */
export interface MsgPayForBlobsResponse {
}
export interface MsgPayForBlobsResponseProtoMsg {
    typeUrl: "/celestia.blob.v1.MsgPayForBlobsResponse";
    value: Uint8Array;
}
/**
 * MsgPayForBlobsResponse describes the response returned after the submission
 * of a PayForBlobs
 */
export interface MsgPayForBlobsResponseAmino {
}
export interface MsgPayForBlobsResponseAminoMsg {
    type: "/celestia.blob.v1.MsgPayForBlobsResponse";
    value: MsgPayForBlobsResponseAmino;
}
/**
 * MsgPayForBlobsResponse describes the response returned after the submission
 * of a PayForBlobs
 */
export interface MsgPayForBlobsResponseSDKType {
}
export declare const MsgPayForBlobs: {
    typeUrl: string;
    encode(message: MsgPayForBlobs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPayForBlobs;
    fromPartial(object: Partial<MsgPayForBlobs>): MsgPayForBlobs;
    fromAmino(object: MsgPayForBlobsAmino): MsgPayForBlobs;
    toAmino(message: MsgPayForBlobs): MsgPayForBlobsAmino;
    fromAminoMsg(object: MsgPayForBlobsAminoMsg): MsgPayForBlobs;
    fromProtoMsg(message: MsgPayForBlobsProtoMsg): MsgPayForBlobs;
    toProto(message: MsgPayForBlobs): Uint8Array;
    toProtoMsg(message: MsgPayForBlobs): MsgPayForBlobsProtoMsg;
};
export declare const MsgPayForBlobsResponse: {
    typeUrl: string;
    encode(_: MsgPayForBlobsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPayForBlobsResponse;
    fromPartial(_: Partial<MsgPayForBlobsResponse>): MsgPayForBlobsResponse;
    fromAmino(_: MsgPayForBlobsResponseAmino): MsgPayForBlobsResponse;
    toAmino(_: MsgPayForBlobsResponse): MsgPayForBlobsResponseAmino;
    fromAminoMsg(object: MsgPayForBlobsResponseAminoMsg): MsgPayForBlobsResponse;
    fromProtoMsg(message: MsgPayForBlobsResponseProtoMsg): MsgPayForBlobsResponse;
    toProto(message: MsgPayForBlobsResponse): Uint8Array;
    toProtoMsg(message: MsgPayForBlobsResponse): MsgPayForBlobsResponseProtoMsg;
};
