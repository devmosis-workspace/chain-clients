import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorization {
  $typeUrl?: string;
  /** message_type represents the type of the message that is authorized by this DistributionAuthorization. */
  messageType: string;
  /** allowed_list specifies list of addresses that are allowed to execute the distribution messages. */
  allowedList: string[];
}
export interface DistributionAuthorizationProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DistributionAuthorization";
  value: Uint8Array;
}
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorizationAmino {
  /** message_type represents the type of the message that is authorized by this DistributionAuthorization. */
  message_type: string;
  /** allowed_list specifies list of addresses that are allowed to execute the distribution messages. */
  allowed_list: string[];
}
export interface DistributionAuthorizationAminoMsg {
  type: "cosmos-sdk/DistributionAuthorization";
  value: DistributionAuthorizationAmino;
}
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorizationSDKType {
  $typeUrl?: string;
  message_type: string;
  allowed_list: string[];
}
function createBaseDistributionAuthorization(): DistributionAuthorization {
  return {
    $typeUrl: "/cosmos.distribution.v1beta1.DistributionAuthorization",
    messageType: "",
    allowedList: []
  };
}
export const DistributionAuthorization = {
  typeUrl: "/cosmos.distribution.v1beta1.DistributionAuthorization",
  encode(message: DistributionAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DistributionAuthorizationAmino): DistributionAuthorization {
    return {
      messageType: object.message_type,
      allowedList: Array.isArray(object?.allowed_list) ? object.allowed_list.map((e: any) => e) : []
    };
  },
  toAmino(message: DistributionAuthorization): DistributionAuthorizationAmino {
    const obj: any = {};
    obj.message_type = message.messageType;
    if (message.allowedList) {
      obj.allowed_list = message.allowedList.map(e => e);
    } else {
      obj.allowed_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: DistributionAuthorizationAminoMsg): DistributionAuthorization {
    return DistributionAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: DistributionAuthorization): DistributionAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/DistributionAuthorization",
      value: DistributionAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: DistributionAuthorizationProtoMsg): DistributionAuthorization {
    return DistributionAuthorization.decode(message.value);
  },
  toProto(message: DistributionAuthorization): Uint8Array {
    return DistributionAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DistributionAuthorization): DistributionAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DistributionAuthorization",
      value: DistributionAuthorization.encode(message).finish()
    };
  }
};