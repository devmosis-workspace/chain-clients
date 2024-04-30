import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface UpdateAuthorization {
  $typeUrl?: "/likechain.iscn.UpdateAuthorization";
  iscnIdPrefix: string;
}
export interface UpdateAuthorizationProtoMsg {
  typeUrl: "/likechain.iscn.UpdateAuthorization";
  value: Uint8Array;
}
export interface UpdateAuthorizationAmino {
  iscn_id_prefix?: string;
}
export interface UpdateAuthorizationAminoMsg {
  type: "/likechain.iscn.UpdateAuthorization";
  value: UpdateAuthorizationAmino;
}
export interface UpdateAuthorizationSDKType {
  $typeUrl?: "/likechain.iscn.UpdateAuthorization";
  iscn_id_prefix: string;
}
function createBaseUpdateAuthorization(): UpdateAuthorization {
  return {
    $typeUrl: "/likechain.iscn.UpdateAuthorization",
    iscnIdPrefix: ""
  };
}
export const UpdateAuthorization = {
  typeUrl: "/likechain.iscn.UpdateAuthorization",
  encode(message: UpdateAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    return writer;
  },
  fromJSON(object: any): UpdateAuthorization {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : ""
    };
  },
  fromPartial(object: Partial<UpdateAuthorization>): UpdateAuthorization {
    const message = createBaseUpdateAuthorization();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    return message;
  },
  fromAmino(object: UpdateAuthorizationAmino): UpdateAuthorization {
    const message = createBaseUpdateAuthorization();
    if (object.iscn_id_prefix !== undefined && object.iscn_id_prefix !== null) {
      message.iscnIdPrefix = object.iscn_id_prefix;
    }
    return message;
  },
  toAmino(message: UpdateAuthorization): UpdateAuthorizationAmino {
    const obj: any = {};
    obj.iscn_id_prefix = message.iscnIdPrefix;
    return obj;
  },
  fromAminoMsg(object: UpdateAuthorizationAminoMsg): UpdateAuthorization {
    return UpdateAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateAuthorizationProtoMsg): UpdateAuthorization {
    return UpdateAuthorization.decode(message.value);
  },
  toProto(message: UpdateAuthorization): Uint8Array {
    return UpdateAuthorization.encode(message).finish();
  },
  toProtoMsg(message: UpdateAuthorization): UpdateAuthorizationProtoMsg {
    return {
      typeUrl: "/likechain.iscn.UpdateAuthorization",
      value: UpdateAuthorization.encode(message).finish()
    };
  }
};