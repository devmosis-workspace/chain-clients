import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorization {
  /** message_type represents the type of the message that is authorized by this DistributionAuthorization. */
  messageType: string;
  /** allowed_list specifies list of addresses that are allowed to execute the distribution messages. */
  allowedList: string[];
}
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorizationSDKType {
  message_type: string;
  allowed_list: string[];
}
function createBaseDistributionAuthorization(): DistributionAuthorization {
  return {
    messageType: "",
    allowedList: []
  };
}
export const DistributionAuthorization = {
  encode(message: DistributionAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageType !== "") {
      writer.uint32(10).string(message.messageType);
    }
    for (const v of message.allowedList) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): DistributionAuthorization {
    return {
      messageType: isSet(object.messageType) ? String(object.messageType) : "",
      allowedList: Array.isArray(object?.allowedList) ? object.allowedList.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<DistributionAuthorization>): DistributionAuthorization {
    const message = createBaseDistributionAuthorization();
    message.messageType = object.messageType ?? "";
    message.allowedList = object.allowedList?.map(e => e) || [];
    return message;
  }
};