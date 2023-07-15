import { Params, ParamsSDKType } from "./params";
import { RateLimit, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairSDKType } from "./ratelimit";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisState {
  params?: Params;
  rateLimits: RateLimit[];
  whitelistedAddressPairs: WhitelistedAddressPair[];
  blacklistedDenoms: string[];
  pendingSendPacketSequenceNumbers: string[];
}
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  rate_limits: RateLimitSDKType[];
  whitelisted_address_pairs: WhitelistedAddressPairSDKType[];
  blacklisted_denoms: string[];
  pending_send_packet_sequence_numbers: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    rateLimits: [],
    whitelistedAddressPairs: [],
    blacklistedDenoms: [],
    pendingSendPacketSequenceNumbers: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};