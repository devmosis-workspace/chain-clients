import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
  /** Can be empty for no admin, or a valid injective address */
  admin: string;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataSDKType {
  admin: string;
}
function createBaseDenomAuthorityMetadata(): DenomAuthorityMetadata {
  return {
    admin: ""
  };
}
export const DenomAuthorityMetadata = {
  encode(message: DenomAuthorityMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    return writer;
  },
  fromJSON(object: any): DenomAuthorityMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  fromPartial(object: Partial<DenomAuthorityMetadata>): DenomAuthorityMetadata {
    const message = createBaseDenomAuthorityMetadata();
    message.admin = object.admin ?? "";
    return message;
  }
};