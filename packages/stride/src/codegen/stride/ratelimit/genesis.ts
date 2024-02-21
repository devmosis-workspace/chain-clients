import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RateLimit, RateLimitAmino, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairAmino, WhitelistedAddressPairSDKType } from "./ratelimit";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisState {
  params: Params;
  rateLimits: RateLimit[];
  whitelistedAddressPairs: WhitelistedAddressPair[];
  blacklistedDenoms: string[];
  pendingSendPacketSequenceNumbers: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.ratelimit.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  rate_limits?: RateLimitAmino[];
  whitelisted_address_pairs?: WhitelistedAddressPairAmino[];
  blacklisted_denoms?: string[];
  pending_send_packet_sequence_numbers?: string[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.ratelimit.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  rate_limits: RateLimitSDKType[];
  whitelisted_address_pairs: WhitelistedAddressPairSDKType[];
  blacklisted_denoms: string[];
  pending_send_packet_sequence_numbers: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    rateLimits: [],
    whitelistedAddressPairs: [],
    blacklistedDenoms: [],
    pendingSendPacketSequenceNumbers: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.ratelimit.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.whitelistedAddressPairs) {
      WhitelistedAddressPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.blacklistedDenoms) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.pendingSendPacketSequenceNumbers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      rateLimits: Array.isArray(object?.rateLimits) ? object.rateLimits.map((e: any) => RateLimit.fromJSON(e)) : [],
      whitelistedAddressPairs: Array.isArray(object?.whitelistedAddressPairs) ? object.whitelistedAddressPairs.map((e: any) => WhitelistedAddressPair.fromJSON(e)) : [],
      blacklistedDenoms: Array.isArray(object?.blacklistedDenoms) ? object.blacklistedDenoms.map((e: any) => String(e)) : [],
      pendingSendPacketSequenceNumbers: Array.isArray(object?.pendingSendPacketSequenceNumbers) ? object.pendingSendPacketSequenceNumbers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    message.whitelistedAddressPairs = object.whitelistedAddressPairs?.map(e => WhitelistedAddressPair.fromPartial(e)) || [];
    message.blacklistedDenoms = object.blacklistedDenoms?.map(e => e) || [];
    message.pendingSendPacketSequenceNumbers = object.pendingSendPacketSequenceNumbers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
    message.whitelistedAddressPairs = object.whitelisted_address_pairs?.map(e => WhitelistedAddressPair.fromAmino(e)) || [];
    message.blacklistedDenoms = object.blacklisted_denoms?.map(e => e) || [];
    message.pendingSendPacketSequenceNumbers = object.pending_send_packet_sequence_numbers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = [];
    }
    if (message.whitelistedAddressPairs) {
      obj.whitelisted_address_pairs = message.whitelistedAddressPairs.map(e => e ? WhitelistedAddressPair.toAmino(e) : undefined);
    } else {
      obj.whitelisted_address_pairs = [];
    }
    if (message.blacklistedDenoms) {
      obj.blacklisted_denoms = message.blacklistedDenoms.map(e => e);
    } else {
      obj.blacklisted_denoms = [];
    }
    if (message.pendingSendPacketSequenceNumbers) {
      obj.pending_send_packet_sequence_numbers = message.pendingSendPacketSequenceNumbers.map(e => e);
    } else {
      obj.pending_send_packet_sequence_numbers = [];
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
      typeUrl: "/stride.ratelimit.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};