import { Downtime, downtimeFromJSON } from "./downtime_duration";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequest {
  downtime: Downtime;
  recovery: Duration;
}
export interface RecoveredSinceDowntimeOfLengthRequestProtoMsg {
  typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest";
  value: Uint8Array;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequestAmino {
  downtime?: Downtime;
  recovery?: DurationAmino;
}
export interface RecoveredSinceDowntimeOfLengthRequestAminoMsg {
  type: "osmosis/downtimedetector/recovered-since-downtime-of-length-request";
  value: RecoveredSinceDowntimeOfLengthRequestAmino;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequestSDKType {
  downtime: Downtime;
  recovery: DurationSDKType;
}
export interface RecoveredSinceDowntimeOfLengthResponse {
  succesfullyRecovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseProtoMsg {
  typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse";
  value: Uint8Array;
}
export interface RecoveredSinceDowntimeOfLengthResponseAmino {
  succesfully_recovered?: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseAminoMsg {
  type: "osmosis/downtimedetector/recovered-since-downtime-of-length-response";
  value: RecoveredSinceDowntimeOfLengthResponseAmino;
}
export interface RecoveredSinceDowntimeOfLengthResponseSDKType {
  succesfully_recovered: boolean;
}
function createBaseRecoveredSinceDowntimeOfLengthRequest(): RecoveredSinceDowntimeOfLengthRequest {
  return {
    downtime: 0,
    recovery: Duration.fromPartial({})
  };
}
export const RecoveredSinceDowntimeOfLengthRequest = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
  encode(message: RecoveredSinceDowntimeOfLengthRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.downtime !== 0) {
      writer.uint32(8).int32(message.downtime);
    }
    if (message.recovery !== undefined) {
      Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RecoveredSinceDowntimeOfLengthRequest {
    return {
      downtime: isSet(object.downtime) ? downtimeFromJSON(object.downtime) : -1,
      recovery: isSet(object.recovery) ? Duration.fromJSON(object.recovery) : undefined
    };
  },
  fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthRequest>): RecoveredSinceDowntimeOfLengthRequest {
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    message.downtime = object.downtime ?? 0;
    message.recovery = object.recovery !== undefined && object.recovery !== null ? Duration.fromPartial(object.recovery) : undefined;
    return message;
  },
  fromAmino(object: RecoveredSinceDowntimeOfLengthRequestAmino): RecoveredSinceDowntimeOfLengthRequest {
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    if (object.downtime !== undefined && object.downtime !== null) {
      message.downtime = downtimeFromJSON(object.downtime);
    }
    if (object.recovery !== undefined && object.recovery !== null) {
      message.recovery = Duration.fromAmino(object.recovery);
    }
    return message;
  },
  toAmino(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestAmino {
    const obj: any = {};
    obj.downtime = message.downtime;
    obj.recovery = message.recovery ? Duration.toAmino(message.recovery) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecoveredSinceDowntimeOfLengthRequestAminoMsg): RecoveredSinceDowntimeOfLengthRequest {
    return RecoveredSinceDowntimeOfLengthRequest.fromAmino(object.value);
  },
  toAminoMsg(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestAminoMsg {
    return {
      type: "osmosis/downtimedetector/recovered-since-downtime-of-length-request",
      value: RecoveredSinceDowntimeOfLengthRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: RecoveredSinceDowntimeOfLengthRequestProtoMsg): RecoveredSinceDowntimeOfLengthRequest {
    return RecoveredSinceDowntimeOfLengthRequest.decode(message.value);
  },
  toProto(message: RecoveredSinceDowntimeOfLengthRequest): Uint8Array {
    return RecoveredSinceDowntimeOfLengthRequest.encode(message).finish();
  },
  toProtoMsg(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestProtoMsg {
    return {
      typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
      value: RecoveredSinceDowntimeOfLengthRequest.encode(message).finish()
    };
  }
};
function createBaseRecoveredSinceDowntimeOfLengthResponse(): RecoveredSinceDowntimeOfLengthResponse {
  return {
    succesfullyRecovered: false
  };
}
export const RecoveredSinceDowntimeOfLengthResponse = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
  encode(message: RecoveredSinceDowntimeOfLengthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.succesfullyRecovered === true) {
      writer.uint32(8).bool(message.succesfullyRecovered);
    }
    return writer;
  },
  fromJSON(object: any): RecoveredSinceDowntimeOfLengthResponse {
    return {
      succesfullyRecovered: isSet(object.succesfullyRecovered) ? Boolean(object.succesfullyRecovered) : false
    };
  },
  fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthResponse>): RecoveredSinceDowntimeOfLengthResponse {
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    message.succesfullyRecovered = object.succesfullyRecovered ?? false;
    return message;
  },
  fromAmino(object: RecoveredSinceDowntimeOfLengthResponseAmino): RecoveredSinceDowntimeOfLengthResponse {
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    if (object.succesfully_recovered !== undefined && object.succesfully_recovered !== null) {
      message.succesfullyRecovered = object.succesfully_recovered;
    }
    return message;
  },
  toAmino(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseAmino {
    const obj: any = {};
    obj.succesfully_recovered = message.succesfullyRecovered;
    return obj;
  },
  fromAminoMsg(object: RecoveredSinceDowntimeOfLengthResponseAminoMsg): RecoveredSinceDowntimeOfLengthResponse {
    return RecoveredSinceDowntimeOfLengthResponse.fromAmino(object.value);
  },
  toAminoMsg(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseAminoMsg {
    return {
      type: "osmosis/downtimedetector/recovered-since-downtime-of-length-response",
      value: RecoveredSinceDowntimeOfLengthResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: RecoveredSinceDowntimeOfLengthResponseProtoMsg): RecoveredSinceDowntimeOfLengthResponse {
    return RecoveredSinceDowntimeOfLengthResponse.decode(message.value);
  },
  toProto(message: RecoveredSinceDowntimeOfLengthResponse): Uint8Array {
    return RecoveredSinceDowntimeOfLengthResponse.encode(message).finish();
  },
  toProtoMsg(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseProtoMsg {
    return {
      typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
      value: RecoveredSinceDowntimeOfLengthResponse.encode(message).finish()
    };
  }
};