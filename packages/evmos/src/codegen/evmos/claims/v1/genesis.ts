import { ClaimsRecordAddress, ClaimsRecordAddressSDKType } from "./claims";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState define the claims module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  /** claims_records is a list of claim records with the corresponding airdrop recipient */
  claimsRecords: ClaimsRecordAddress[];
}
/** GenesisState define the claims module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  claims_records: ClaimsRecordAddressSDKType[];
}
/** Params defines the claims module's parameters. */
export interface Params {
  /** enable_claims is the parameter to enable the claiming process */
  enableClaims: boolean;
  /** airdrop_start_time defines the timestamp of the airdrop start */
  airdropStartTime?: Timestamp;
  /** duration_until_decay of claimable tokens begin */
  durationUntilDecay?: Duration;
  /** duration_of_decay for token claim decay period */
  durationOfDecay?: Duration;
  /** claims_denom is the denomination of the claimable coin */
  claimsDenom: string;
  /**
   * authorized_channels is the list of authorized channel identifiers that can perform address
   * attestations via IBC.
   */
  authorizedChannels: string[];
  /** evm_channels is the list of channel identifiers from EVM compatible chains */
  evmChannels: string[];
}
/** Params defines the claims module's parameters. */
export interface ParamsSDKType {
  enable_claims: boolean;
  airdrop_start_time?: TimestampSDKType;
  duration_until_decay?: DurationSDKType;
  duration_of_decay?: DurationSDKType;
  claims_denom: string;
  authorized_channels: string[];
  evm_channels: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    claimsRecords: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.claimsRecords) {
      ClaimsRecordAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      claimsRecords: Array.isArray(object?.claimsRecords) ? object.claimsRecords.map((e: any) => ClaimsRecordAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.claimsRecords = object.claimsRecords?.map(e => ClaimsRecordAddress.fromPartial(e)) || [];
    return message;
  }
};
function createBaseParams(): Params {
  return {
    enableClaims: false,
    airdropStartTime: undefined,
    durationUntilDecay: undefined,
    durationOfDecay: undefined,
    claimsDenom: "",
    authorizedChannels: [],
    evmChannels: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableClaims === true) {
      writer.uint32(8).bool(message.enableClaims);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(message.airdropStartTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimsDenom !== "") {
      writer.uint32(42).string(message.claimsDenom);
    }
    for (const v of message.authorizedChannels) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.evmChannels) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enableClaims: isSet(object.enableClaims) ? Boolean(object.enableClaims) : false,
      airdropStartTime: isSet(object.airdropStartTime) ? fromJsonTimestamp(object.airdropStartTime) : undefined,
      durationUntilDecay: isSet(object.durationUntilDecay) ? Duration.fromJSON(object.durationUntilDecay) : undefined,
      durationOfDecay: isSet(object.durationOfDecay) ? Duration.fromJSON(object.durationOfDecay) : undefined,
      claimsDenom: isSet(object.claimsDenom) ? String(object.claimsDenom) : "",
      authorizedChannels: Array.isArray(object?.authorizedChannels) ? object.authorizedChannels.map((e: any) => String(e)) : [],
      evmChannels: Array.isArray(object?.evmChannels) ? object.evmChannels.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enableClaims = object.enableClaims ?? false;
    message.airdropStartTime = object.airdropStartTime !== undefined && object.airdropStartTime !== null ? Timestamp.fromPartial(object.airdropStartTime) : undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimsDenom = object.claimsDenom ?? "";
    message.authorizedChannels = object.authorizedChannels?.map(e => e) || [];
    message.evmChannels = object.evmChannels?.map(e => e) || [];
    return message;
  }
};