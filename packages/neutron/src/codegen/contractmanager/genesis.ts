import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
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
  id: bigint;
  /** ACK id to restore */
  ackId: bigint;
  /** Acknowledgement type */
  ackType: string;
}
export interface FailureProtoMsg {
  typeUrl: "/neutron.contractmanager.Failure";
  value: Uint8Array;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 */
export interface FailureAmino {
  /** ChannelId */
  channel_id: string;
  /** Address of the failed contract */
  address: string;
  /** id of the failure under specific address */
  id: string;
  /** ACK id to restore */
  ack_id: string;
  /** Acknowledgement type */
  ack_type: string;
}
export interface FailureAminoMsg {
  type: "/neutron.contractmanager.Failure";
  value: FailureAmino;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 */
export interface FailureSDKType {
  channel_id: string;
  address: string;
  id: bigint;
  ack_id: bigint;
  ack_type: string;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisState {
  params: Params;
  /** List of the contract failures */
  failuresList: Failure[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/neutron.contractmanager.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /** List of the contract failures */
  failures_list: FailureAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/neutron.contractmanager.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  failures_list: FailureSDKType[];
}
function createBaseFailure(): Failure {
  return {
    channelId: "",
    address: "",
    id: BigInt(0),
    ackId: BigInt(0),
    ackType: ""
  };
}
export const Failure = {
  typeUrl: "/neutron.contractmanager.Failure",
  encode(message: Failure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.ackId !== BigInt(0)) {
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      ackId: isSet(object.ackId) ? BigInt(object.ackId.toString()) : BigInt(0),
      ackType: isSet(object.ackType) ? String(object.ackType) : ""
    };
  },
  fromPartial(object: Partial<Failure>): Failure {
    const message = createBaseFailure();
    message.channelId = object.channelId ?? "";
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.ackId = object.ackId !== undefined && object.ackId !== null ? BigInt(object.ackId.toString()) : BigInt(0);
    message.ackType = object.ackType ?? "";
    return message;
  },
  fromAmino(object: FailureAmino): Failure {
    return {
      channelId: object.channel_id,
      address: object.address,
      id: BigInt(object.id),
      ackId: BigInt(object.ack_id),
      ackType: object.ack_type
    };
  },
  toAmino(message: Failure): FailureAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.address = message.address;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.ack_id = message.ackId ? message.ackId.toString() : undefined;
    obj.ack_type = message.ackType;
    return obj;
  },
  fromAminoMsg(object: FailureAminoMsg): Failure {
    return Failure.fromAmino(object.value);
  },
  fromProtoMsg(message: FailureProtoMsg): Failure {
    return Failure.decode(message.value);
  },
  toProto(message: Failure): Uint8Array {
    return Failure.encode(message).finish();
  },
  toProtoMsg(message: Failure): FailureProtoMsg {
    return {
      typeUrl: "/neutron.contractmanager.Failure",
      value: Failure.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    failuresList: []
  };
}
export const GenesisState = {
  typeUrl: "/neutron.contractmanager.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      failuresList: Array.isArray(object?.failures_list) ? object.failures_list.map((e: any) => Failure.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.failuresList) {
      obj.failures_list = message.failuresList.map(e => e ? Failure.toAmino(e) : undefined);
    } else {
      obj.failures_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/neutron.contractmanager.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};