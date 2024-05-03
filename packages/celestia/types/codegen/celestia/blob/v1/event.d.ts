import { BinaryWriter } from "../../../binary";
/**
 * EventPayForBlobs defines an event that is emitted after a pay for blob has
 * been processed.
 */
export interface EventPayForBlobs {
    signer: string;
    blobSizes: number[];
    /**
     * namespaces is a list of namespaces that the blobs in blob_sizes belong to.
     * A namespace has length of 29 bytes where the first byte is the
     * namespaceVersion and the subsequent 28 bytes are the namespaceID.
     */
    namespaces: Uint8Array[];
}
export interface EventPayForBlobsProtoMsg {
    typeUrl: "/celestia.blob.v1.EventPayForBlobs";
    value: Uint8Array;
}
/**
 * EventPayForBlobs defines an event that is emitted after a pay for blob has
 * been processed.
 */
export interface EventPayForBlobsAmino {
    signer?: string;
    blob_sizes?: number[];
    /**
     * namespaces is a list of namespaces that the blobs in blob_sizes belong to.
     * A namespace has length of 29 bytes where the first byte is the
     * namespaceVersion and the subsequent 28 bytes are the namespaceID.
     */
    namespaces?: string[];
}
export interface EventPayForBlobsAminoMsg {
    type: "/celestia.blob.v1.EventPayForBlobs";
    value: EventPayForBlobsAmino;
}
/**
 * EventPayForBlobs defines an event that is emitted after a pay for blob has
 * been processed.
 */
export interface EventPayForBlobsSDKType {
    signer: string;
    blob_sizes: number[];
    namespaces: Uint8Array[];
}
export declare const EventPayForBlobs: {
    typeUrl: string;
    encode(message: EventPayForBlobs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPayForBlobs;
    fromPartial(object: Partial<EventPayForBlobs>): EventPayForBlobs;
    fromAmino(object: EventPayForBlobsAmino): EventPayForBlobs;
    toAmino(message: EventPayForBlobs): EventPayForBlobsAmino;
    fromAminoMsg(object: EventPayForBlobsAminoMsg): EventPayForBlobs;
    fromProtoMsg(message: EventPayForBlobsProtoMsg): EventPayForBlobs;
    toProto(message: EventPayForBlobs): Uint8Array;
    toProtoMsg(message: EventPayForBlobs): EventPayForBlobsProtoMsg;
};
