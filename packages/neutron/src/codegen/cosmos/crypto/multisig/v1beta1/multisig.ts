import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, isSet } from "../../../../helpers";
/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 */
export interface MultiSignature {
  signatures: Uint8Array[];
}
/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 */
export interface MultiSignatureSDKType {
  signatures: Uint8Array[];
}
/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 */
export interface CompactBitArray {
  extraBitsStored: number;
  elems: Uint8Array;
}
/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 */
export interface CompactBitArraySDKType {
  extra_bits_stored: number;
  elems: Uint8Array;
}
function createBaseMultiSignature(): MultiSignature {
  return {
    signatures: []
  };
}
export const MultiSignature = {
  encode(message: MultiSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signatures) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): MultiSignature {
    return {
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<MultiSignature>): MultiSignature {
    const message = createBaseMultiSignature();
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  }
};
function createBaseCompactBitArray(): CompactBitArray {
  return {
    extraBitsStored: 0,
    elems: new Uint8Array()
  };
}
export const CompactBitArray = {
  encode(message: CompactBitArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extraBitsStored !== 0) {
      writer.uint32(8).uint32(message.extraBitsStored);
    }
    if (message.elems.length !== 0) {
      writer.uint32(18).bytes(message.elems);
    }
    return writer;
  },
  fromJSON(object: any): CompactBitArray {
    return {
      extraBitsStored: isSet(object.extraBitsStored) ? Number(object.extraBitsStored) : 0,
      elems: isSet(object.elems) ? bytesFromBase64(object.elems) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CompactBitArray>): CompactBitArray {
    const message = createBaseCompactBitArray();
    message.extraBitsStored = object.extraBitsStored ?? 0;
    message.elems = object.elems ?? new Uint8Array();
    return message;
  }
};