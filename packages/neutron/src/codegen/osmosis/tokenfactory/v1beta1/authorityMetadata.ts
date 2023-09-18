import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
  /** Can be empty for no admin, or a valid osmosis address */
  Admin: string;
}
export interface DenomAuthorityMetadataProtoMsg {
  typeUrl: "/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata";
  value: Uint8Array;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataAmino {
  /** Can be empty for no admin, or a valid osmosis address */
  Admin: string;
}
export interface DenomAuthorityMetadataAminoMsg {
  type: "osmosis/tokenfactory/denom-authority-metadata";
  value: DenomAuthorityMetadataAmino;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataSDKType {
  Admin: string;
}
function createBaseDenomAuthorityMetadata(): DenomAuthorityMetadata {
  return {
    Admin: ""
  };
}
export const DenomAuthorityMetadata = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata",
  encode(message: DenomAuthorityMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Admin !== "") {
      writer.uint32(10).string(message.Admin);
    }
    return writer;
  },
  fromJSON(object: any): DenomAuthorityMetadata {
    return {
      Admin: isSet(object.Admin) ? String(object.Admin) : ""
    };
  },
  fromPartial(object: Partial<DenomAuthorityMetadata>): DenomAuthorityMetadata {
    const message = createBaseDenomAuthorityMetadata();
    message.Admin = object.Admin ?? "";
    return message;
  },
  fromAmino(object: DenomAuthorityMetadataAmino): DenomAuthorityMetadata {
    return {
      Admin: object.Admin
    };
  },
  toAmino(message: DenomAuthorityMetadata): DenomAuthorityMetadataAmino {
    const obj: any = {};
    obj.Admin = message.Admin;
    return obj;
  },
  fromAminoMsg(object: DenomAuthorityMetadataAminoMsg): DenomAuthorityMetadata {
    return DenomAuthorityMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: DenomAuthorityMetadata): DenomAuthorityMetadataAminoMsg {
    return {
      type: "osmosis/tokenfactory/denom-authority-metadata",
      value: DenomAuthorityMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: DenomAuthorityMetadataProtoMsg): DenomAuthorityMetadata {
    return DenomAuthorityMetadata.decode(message.value);
  },
  toProto(message: DenomAuthorityMetadata): Uint8Array {
    return DenomAuthorityMetadata.encode(message).finish();
  },
  toProtoMsg(message: DenomAuthorityMetadata): DenomAuthorityMetadataProtoMsg {
    return {
      typeUrl: "/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata",
      value: DenomAuthorityMetadata.encode(message).finish()
    };
  }
};