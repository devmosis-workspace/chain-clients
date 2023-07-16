import * as _m0 from "protobufjs/minimal";
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
  encode(message: DenomAuthorityMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};