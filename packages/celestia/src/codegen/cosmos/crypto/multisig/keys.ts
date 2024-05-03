import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKey {
  threshold: number;
  publicKeys: Any[];
}
export interface LegacyAminoPubKeyProtoMsg {
  typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey";
  value: Uint8Array;
}
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKeyAmino {
  threshold?: number;
  public_keys?: AnyAmino[];
}
export interface LegacyAminoPubKeyAminoMsg {
  type: "cosmos-sdk/LegacyAminoPubKey";
  value: LegacyAminoPubKeyAmino;
}
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKeySDKType {
  threshold: number;
  public_keys: AnySDKType[];
}
function createBaseLegacyAminoPubKey(): LegacyAminoPubKey {
  return {
    threshold: 0,
    publicKeys: []
  };
}
export const LegacyAminoPubKey = {
  typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
  encode(message: LegacyAminoPubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threshold !== 0) {
      writer.uint32(8).uint32(message.threshold);
    }
    for (const v of message.publicKeys) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LegacyAminoPubKey {
    return {
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
      publicKeys: Array.isArray(object?.publicKeys) ? object.publicKeys.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LegacyAminoPubKey>): LegacyAminoPubKey {
    const message = createBaseLegacyAminoPubKey();
    message.threshold = object.threshold ?? 0;
    message.publicKeys = object.publicKeys?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: LegacyAminoPubKeyAmino): LegacyAminoPubKey {
    const message = createBaseLegacyAminoPubKey();
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    message.publicKeys = object.public_keys?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LegacyAminoPubKey): LegacyAminoPubKeyAmino {
    const obj: any = {};
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    if (message.publicKeys) {
      obj.public_keys = message.publicKeys.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.public_keys = message.publicKeys;
    }
    return obj;
  },
  fromAminoMsg(object: LegacyAminoPubKeyAminoMsg): LegacyAminoPubKey {
    return LegacyAminoPubKey.fromAmino(object.value);
  },
  toAminoMsg(message: LegacyAminoPubKey): LegacyAminoPubKeyAminoMsg {
    return {
      type: "cosmos-sdk/LegacyAminoPubKey",
      value: LegacyAminoPubKey.toAmino(message)
    };
  },
  fromProtoMsg(message: LegacyAminoPubKeyProtoMsg): LegacyAminoPubKey {
    return LegacyAminoPubKey.decode(message.value);
  },
  toProto(message: LegacyAminoPubKey): Uint8Array {
    return LegacyAminoPubKey.encode(message).finish();
  },
  toProtoMsg(message: LegacyAminoPubKey): LegacyAminoPubKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
      value: LegacyAminoPubKey.encode(message).finish()
    };
  }
};