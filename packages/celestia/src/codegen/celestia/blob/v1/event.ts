import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
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
  signer: string;
  blob_sizes: number[];
  /**
   * namespaces is a list of namespaces that the blobs in blob_sizes belong to.
   * A namespace has length of 29 bytes where the first byte is the
   * namespaceVersion and the subsequent 28 bytes are the namespaceID.
   */
  namespaces: Uint8Array[];
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
function createBaseEventPayForBlobs(): EventPayForBlobs {
  return {
    signer: "",
    blobSizes: [],
    namespaces: []
  };
}
export const EventPayForBlobs = {
  typeUrl: "/celestia.blob.v1.EventPayForBlobs",
  encode(message: EventPayForBlobs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    writer.uint32(18).fork();
    for (const v of message.blobSizes) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.namespaces) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): EventPayForBlobs {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      blobSizes: Array.isArray(object?.blobSizes) ? object.blobSizes.map((e: any) => Number(e)) : [],
      namespaces: Array.isArray(object?.namespaces) ? object.namespaces.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<EventPayForBlobs>): EventPayForBlobs {
    const message = createBaseEventPayForBlobs();
    message.signer = object.signer ?? "";
    message.blobSizes = object.blobSizes?.map(e => e) || [];
    message.namespaces = object.namespaces?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EventPayForBlobsAmino): EventPayForBlobs {
    return {
      signer: object.signer,
      blobSizes: Array.isArray(object?.blob_sizes) ? object.blob_sizes.map((e: any) => e) : [],
      namespaces: Array.isArray(object?.namespaces) ? object.namespaces.map((e: any) => e) : []
    };
  },
  toAmino(message: EventPayForBlobs): EventPayForBlobsAmino {
    const obj: any = {};
    obj.signer = message.signer;
    if (message.blobSizes) {
      obj.blob_sizes = message.blobSizes.map(e => e);
    } else {
      obj.blob_sizes = [];
    }
    if (message.namespaces) {
      obj.namespaces = message.namespaces.map(e => e);
    } else {
      obj.namespaces = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventPayForBlobsAminoMsg): EventPayForBlobs {
    return EventPayForBlobs.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPayForBlobsProtoMsg): EventPayForBlobs {
    return EventPayForBlobs.decode(message.value);
  },
  toProto(message: EventPayForBlobs): Uint8Array {
    return EventPayForBlobs.encode(message).finish();
  },
  toProtoMsg(message: EventPayForBlobs): EventPayForBlobsProtoMsg {
    return {
      typeUrl: "/celestia.blob.v1.EventPayForBlobs",
      value: EventPayForBlobs.encode(message).finish()
    };
  }
};