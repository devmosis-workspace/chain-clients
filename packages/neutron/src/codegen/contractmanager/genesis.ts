import { Params, ParamsSDKType } from "./params";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 */
export interface Failure {
  /** ChannelId */
  channelId: string;
  /** Address of the failed contract */
  address: string;
  /** id of the failure under specific address */
  id: Long;
  /** ACK id to restore */
  ackId: Long;
  /** Acknowledgement type */
  ackType: string;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 */
export interface FailureSDKType {
  channel_id: string;
  address: string;
  id: Long;
  ack_id: Long;
  ack_type: string;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisState {
  params?: Params;
  /** List of the contract failures */
  failuresList: Failure[];
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  failures_list: FailureSDKType[];
}
function createBaseFailure(): Failure {
  return {
    channelId: "",
    address: "",
    id: Long.UZERO,
    ackId: Long.UZERO,
    ackType: ""
  };
}
export const Failure = {
  encode(message: Failure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    if (!message.ackId.isZero()) {
      writer.uint32(32).uint64(message.ackId);
    }
    if (message.ackType !== "") {
      writer.uint32(42).string(message.ackType);
    }
    return writer;
  },
  fromJSON(object: any): Failure {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      ackId: isSet(object.ackId) ? Long.fromValue(object.ackId) : Long.UZERO,
      ackType: isSet(object.ackType) ? String(object.ackType) : ""
    };
  },
  fromPartial(object: Partial<Failure>): Failure {
    const message = createBaseFailure();
    message.channelId = object.channelId ?? "";
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.ackId = object.ackId !== undefined && object.ackId !== null ? Long.fromValue(object.ackId) : Long.UZERO;
    message.ackType = object.ackType ?? "";
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    failuresList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.failuresList) {
      Failure.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      failuresList: Array.isArray(object?.failuresList) ? object.failuresList.map((e: any) => Failure.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.failuresList = object.failuresList?.map(e => Failure.fromPartial(e)) || [];
    return message;
  }
};