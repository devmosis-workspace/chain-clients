import { Height, HeightAmino, HeightSDKType } from "../../ibc/core/client/v1/client";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface Params {
  enabled: boolean;
  /** Identifier of the epoch that we trigger the icq request */
  epochIdentifier: string;
  /** Identifier of authorized channel that we are allowed to send/receive packets */
  authorizedChannel: string;
  packetTimeoutHeight: Height;
  /** Timeout timestamp relative to counterparty chain current time. The timeout is disabled when set to 0. */
  packetTimeoutTimestamp: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  enabled?: boolean;
  /** Identifier of the epoch that we trigger the icq request */
  epoch_identifier?: string;
  /** Identifier of authorized channel that we are allowed to send/receive packets */
  authorized_channel?: string;
  packet_timeout_height?: HeightAmino;
  /** Timeout timestamp relative to counterparty chain current time. The timeout is disabled when set to 0. */
  packet_timeout_timestamp?: string;
}
export interface ParamsAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.osmosis.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  enabled: boolean;
  epoch_identifier: string;
  authorized_channel: string;
  packet_timeout_height: HeightSDKType;
  packet_timeout_timestamp: bigint;
}
function createBaseParams(): Params {
  return {
    enabled: false,
    epochIdentifier: "",
    authorizedChannel: "",
    packetTimeoutHeight: Height.fromPartial({}),
    packetTimeoutTimestamp: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(18).string(message.epochIdentifier);
    }
    if (message.authorizedChannel !== "") {
      writer.uint32(26).string(message.authorizedChannel);
    }
    if (message.packetTimeoutHeight !== undefined) {
      Height.encode(message.packetTimeoutHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.packetTimeoutTimestamp !== BigInt(0)) {
      writer.uint32(40).uint64(message.packetTimeoutTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      authorizedChannel: isSet(object.authorizedChannel) ? String(object.authorizedChannel) : "",
      packetTimeoutHeight: isSet(object.packetTimeoutHeight) ? Height.fromJSON(object.packetTimeoutHeight) : undefined,
      packetTimeoutTimestamp: isSet(object.packetTimeoutTimestamp) ? BigInt(object.packetTimeoutTimestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.authorizedChannel = object.authorizedChannel ?? "";
    message.packetTimeoutHeight = object.packetTimeoutHeight !== undefined && object.packetTimeoutHeight !== null ? Height.fromPartial(object.packetTimeoutHeight) : undefined;
    message.packetTimeoutTimestamp = object.packetTimeoutTimestamp !== undefined && object.packetTimeoutTimestamp !== null ? BigInt(object.packetTimeoutTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    if (object.authorized_channel !== undefined && object.authorized_channel !== null) {
      message.authorizedChannel = object.authorized_channel;
    }
    if (object.packet_timeout_height !== undefined && object.packet_timeout_height !== null) {
      message.packetTimeoutHeight = Height.fromAmino(object.packet_timeout_height);
    }
    if (object.packet_timeout_timestamp !== undefined && object.packet_timeout_timestamp !== null) {
      message.packetTimeoutTimestamp = BigInt(object.packet_timeout_timestamp);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    obj.epoch_identifier = message.epochIdentifier;
    obj.authorized_channel = message.authorizedChannel;
    obj.packet_timeout_height = message.packetTimeoutHeight ? Height.toAmino(message.packetTimeoutHeight) : {};
    obj.packet_timeout_timestamp = message.packetTimeoutTimestamp ? message.packetTimeoutTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.Params",
      value: Params.encode(message).finish()
    };
  }
};