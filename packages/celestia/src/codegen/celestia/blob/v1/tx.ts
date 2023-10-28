import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
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
  signer: string;
  /**
   * namespaces is a list of namespaces that the blobs are associated with. A
   * namespace is a byte slice of length 29 where the first byte is the
   * namespaceVersion and the subsequent 28 bytes are the namespaceId.
   */
  namespaces: Uint8Array[];
  blob_sizes: number[];
  /** share_commitments is a list of share commitments (one per blob). */
  share_commitments: Uint8Array[];
  /**
   * share_versions are the versions of the share format that the blobs
   * associated with this message should use when included in a block. The
   * share_versions specified must match the share_versions used to generate the
   * share_commitment in this message.
   */
  share_versions: number[];
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
export interface MsgPayForBlobsResponse {}
export interface MsgPayForBlobsResponseProtoMsg {
  typeUrl: "/celestia.blob.v1.MsgPayForBlobsResponse";
  value: Uint8Array;
}
/**
 * MsgPayForBlobsResponse describes the response returned after the submission
 * of a PayForBlobs
 */
export interface MsgPayForBlobsResponseAmino {}
export interface MsgPayForBlobsResponseAminoMsg {
  type: "/celestia.blob.v1.MsgPayForBlobsResponse";
  value: MsgPayForBlobsResponseAmino;
}
/**
 * MsgPayForBlobsResponse describes the response returned after the submission
 * of a PayForBlobs
 */
export interface MsgPayForBlobsResponseSDKType {}
function createBaseMsgPayForBlobs(): MsgPayForBlobs {
  return {
    signer: "",
    namespaces: [],
    blobSizes: [],
    shareCommitments: [],
    shareVersions: []
  };
}
export const MsgPayForBlobs = {
  typeUrl: "/celestia.blob.v1.MsgPayForBlobs",
  encode(message: MsgPayForBlobs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.namespaces) {
      writer.uint32(18).bytes(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.blobSizes) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.shareCommitments) {
      writer.uint32(34).bytes(v!);
    }
    writer.uint32(66).fork();
    for (const v of message.shareVersions) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgPayForBlobs {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      namespaces: Array.isArray(object?.namespaces) ? object.namespaces.map((e: any) => bytesFromBase64(e)) : [],
      blobSizes: Array.isArray(object?.blobSizes) ? object.blobSizes.map((e: any) => Number(e)) : [],
      shareCommitments: Array.isArray(object?.shareCommitments) ? object.shareCommitments.map((e: any) => bytesFromBase64(e)) : [],
      shareVersions: Array.isArray(object?.shareVersions) ? object.shareVersions.map((e: any) => Number(e)) : []
    };
  },
  fromPartial(object: Partial<MsgPayForBlobs>): MsgPayForBlobs {
    const message = createBaseMsgPayForBlobs();
    message.signer = object.signer ?? "";
    message.namespaces = object.namespaces?.map(e => e) || [];
    message.blobSizes = object.blobSizes?.map(e => e) || [];
    message.shareCommitments = object.shareCommitments?.map(e => e) || [];
    message.shareVersions = object.shareVersions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgPayForBlobsAmino): MsgPayForBlobs {
    return {
      signer: object.signer,
      namespaces: Array.isArray(object?.namespaces) ? object.namespaces.map((e: any) => e) : [],
      blobSizes: Array.isArray(object?.blob_sizes) ? object.blob_sizes.map((e: any) => e) : [],
      shareCommitments: Array.isArray(object?.share_commitments) ? object.share_commitments.map((e: any) => e) : [],
      shareVersions: Array.isArray(object?.share_versions) ? object.share_versions.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgPayForBlobs): MsgPayForBlobsAmino {
    const obj: any = {};
    obj.signer = message.signer;
    if (message.namespaces) {
      obj.namespaces = message.namespaces.map(e => e);
    } else {
      obj.namespaces = [];
    }
    if (message.blobSizes) {
      obj.blob_sizes = message.blobSizes.map(e => e);
    } else {
      obj.blob_sizes = [];
    }
    if (message.shareCommitments) {
      obj.share_commitments = message.shareCommitments.map(e => e);
    } else {
      obj.share_commitments = [];
    }
    if (message.shareVersions) {
      obj.share_versions = message.shareVersions.map(e => e);
    } else {
      obj.share_versions = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgPayForBlobsAminoMsg): MsgPayForBlobs {
    return MsgPayForBlobs.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPayForBlobsProtoMsg): MsgPayForBlobs {
    return MsgPayForBlobs.decode(message.value);
  },
  toProto(message: MsgPayForBlobs): Uint8Array {
    return MsgPayForBlobs.encode(message).finish();
  },
  toProtoMsg(message: MsgPayForBlobs): MsgPayForBlobsProtoMsg {
    return {
      typeUrl: "/celestia.blob.v1.MsgPayForBlobs",
      value: MsgPayForBlobs.encode(message).finish()
    };
  }
};
function createBaseMsgPayForBlobsResponse(): MsgPayForBlobsResponse {
  return {};
}
export const MsgPayForBlobsResponse = {
  typeUrl: "/celestia.blob.v1.MsgPayForBlobsResponse",
  encode(_: MsgPayForBlobsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPayForBlobsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPayForBlobsResponse>): MsgPayForBlobsResponse {
    const message = createBaseMsgPayForBlobsResponse();
    return message;
  },
  fromAmino(_: MsgPayForBlobsResponseAmino): MsgPayForBlobsResponse {
    return {};
  },
  toAmino(_: MsgPayForBlobsResponse): MsgPayForBlobsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayForBlobsResponseAminoMsg): MsgPayForBlobsResponse {
    return MsgPayForBlobsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPayForBlobsResponseProtoMsg): MsgPayForBlobsResponse {
    return MsgPayForBlobsResponse.decode(message.value);
  },
  toProto(message: MsgPayForBlobsResponse): Uint8Array {
    return MsgPayForBlobsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPayForBlobsResponse): MsgPayForBlobsResponseProtoMsg {
    return {
      typeUrl: "/celestia.blob.v1.MsgPayForBlobsResponse",
      value: MsgPayForBlobsResponse.encode(message).finish()
    };
  }
};