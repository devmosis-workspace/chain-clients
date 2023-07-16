import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface UpdateAuthorization {
  iscnIdPrefix: string;
}
export interface UpdateAuthorizationSDKType {
  iscn_id_prefix: string;
}
function createBaseUpdateAuthorization(): UpdateAuthorization {
  return {
    iscnIdPrefix: ""
  };
}
export const UpdateAuthorization = {
  encode(message: UpdateAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};