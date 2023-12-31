import { ClaimsRecordAddress, ClaimsRecordAddressAmino, ClaimsRecordAddressSDKType } from "./claims";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState define the claims module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  /** claims_records is a list of claim records with the corresponding airdrop recipient */
  claimsRecords: ClaimsRecordAddress[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.claims.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState define the claims module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  /** claims_records is a list of claim records with the corresponding airdrop recipient */
  claims_records: ClaimsRecordAddressAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/evmos.claims.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState define the claims module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  claims_records: ClaimsRecordAddressSDKType[];
}
/** Params defines the claims module's parameters. */
export interface Params {
  /** enable_claims is the parameter to enable the claiming process */
  enableClaims: boolean;
  /** airdrop_start_time defines the timestamp of the airdrop start */
  airdropStartTime: Timestamp;
  /** duration_until_decay of claimable tokens begin */
  durationUntilDecay: Duration;
  /** duration_of_decay for token claim decay period */
  durationOfDecay: Duration;
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
export interface ParamsProtoMsg {
  typeUrl: "/evmos.claims.v1.Params";
  value: Uint8Array;
}
/** Params defines the claims module's parameters. */
export interface ParamsAmino {
  /** enable_claims is the parameter to enable the claiming process */
  enable_claims: boolean;
  /** airdrop_start_time defines the timestamp of the airdrop start */
  airdrop_start_time?: TimestampAmino;
  /** duration_until_decay of claimable tokens begin */
  duration_until_decay?: DurationAmino;
  /** duration_of_decay for token claim decay period */
  duration_of_decay?: DurationAmino;
  /** claims_denom is the denomination of the claimable coin */
  claims_denom: string;
  /**
   * authorized_channels is the list of authorized channel identifiers that can perform address
   * attestations via IBC.
   */
  authorized_channels: string[];
  /** evm_channels is the list of channel identifiers from EVM compatible chains */
  evm_channels: string[];
}
export interface ParamsAminoMsg {
  type: "/evmos.claims.v1.Params";
  value: ParamsAmino;
}
/** Params defines the claims module's parameters. */
export interface ParamsSDKType {
  enable_claims: boolean;
  airdrop_start_time: TimestampSDKType;
  duration_until_decay: DurationSDKType;
  duration_of_decay: DurationSDKType;
  claims_denom: string;
  authorized_channels: string[];
  evm_channels: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    claimsRecords: []
  };
}
export const GenesisState = {
  typeUrl: "/evmos.claims.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      claimsRecords: Array.isArray(object?.claims_records) ? object.claims_records.map((e: any) => ClaimsRecordAddress.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.claimsRecords) {
      obj.claims_records = message.claimsRecords.map(e => e ? ClaimsRecordAddress.toAmino(e) : undefined);
    } else {
      obj.claims_records = [];
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
      typeUrl: "/evmos.claims.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableClaims: false,
    airdropStartTime: Timestamp.fromPartial({}),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimsDenom: "",
    authorizedChannels: [],
    evmChannels: []
  };
}
export const Params = {
  typeUrl: "/evmos.claims.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      enableClaims: object.enable_claims,
      airdropStartTime: object.airdrop_start_time,
      durationUntilDecay: object?.duration_until_decay ? Duration.fromAmino(object.duration_until_decay) : undefined,
      durationOfDecay: object?.duration_of_decay ? Duration.fromAmino(object.duration_of_decay) : undefined,
      claimsDenom: object.claims_denom,
      authorizedChannels: Array.isArray(object?.authorized_channels) ? object.authorized_channels.map((e: any) => e) : [],
      evmChannels: Array.isArray(object?.evm_channels) ? object.evm_channels.map((e: any) => e) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_claims = message.enableClaims;
    obj.airdrop_start_time = message.airdropStartTime;
    obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
    obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
    obj.claims_denom = message.claimsDenom;
    if (message.authorizedChannels) {
      obj.authorized_channels = message.authorizedChannels.map(e => e);
    } else {
      obj.authorized_channels = [];
    }
    if (message.evmChannels) {
      obj.evm_channels = message.evmChannels.map(e => e);
    } else {
      obj.evm_channels = [];
    }
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
      typeUrl: "/evmos.claims.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};