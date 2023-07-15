import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../helpers";
/** Params defines the claim module's parameters. */
export interface Params {
  /** Params defines the claim module's parameters. */
  airdrops: Airdrop[];
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrops: AirdropSDKType[];
}
export interface Airdrop {
  airdropIdentifier: string;
  chainId: string;
  /** seconds */
  airdropStartTime?: Timestamp;
  /** seconds */
  airdropDuration?: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  /** airdrop distribution account */
  distributorAddress: string;
  /** ustrd tokens claimed so far in the current period */
  claimedSoFar: string;
  /** indicates the airdrop should be claimed via autopilot */
  autopilotEnabled: boolean;
}
export interface AirdropSDKType {
  airdrop_identifier: string;
  chain_id: string;
  airdrop_start_time?: TimestampSDKType;
  airdrop_duration?: DurationSDKType;
  claim_denom: string;
  distributor_address: string;
  claimed_so_far: string;
  autopilot_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    airdrops: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      airdrops: Array.isArray(object?.airdrops) ? object.airdrops.map((e: any) => Airdrop.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAirdrop(): Airdrop {
  return {
    airdropIdentifier: "",
    chainId: "",
    airdropStartTime: undefined,
    airdropDuration: undefined,
    claimDenom: "",
    distributorAddress: "",
    claimedSoFar: "",
    autopilotEnabled: false
  };
}
export const Airdrop = {
  encode(message: Airdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.chainId !== "") {
      writer.uint32(58).string(message.chainId);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(message.airdropStartTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.airdropDuration !== undefined) {
      Duration.encode(message.airdropDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(34).string(message.claimDenom);
    }
    if (message.distributorAddress !== "") {
      writer.uint32(42).string(message.distributorAddress);
    }
    if (message.claimedSoFar !== "") {
      writer.uint32(50).string(message.claimedSoFar);
    }
    if (message.autopilotEnabled === true) {
      writer.uint32(64).bool(message.autopilotEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Airdrop {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      airdropStartTime: isSet(object.airdropStartTime) ? fromJsonTimestamp(object.airdropStartTime) : undefined,
      airdropDuration: isSet(object.airdropDuration) ? Duration.fromJSON(object.airdropDuration) : undefined,
      claimDenom: isSet(object.claimDenom) ? String(object.claimDenom) : "",
      distributorAddress: isSet(object.distributorAddress) ? String(object.distributorAddress) : "",
      claimedSoFar: isSet(object.claimedSoFar) ? String(object.claimedSoFar) : "",
      autopilotEnabled: isSet(object.autopilotEnabled) ? Boolean(object.autopilotEnabled) : false
    };
  },
  fromPartial(object: Partial<Airdrop>): Airdrop {
    const message = createBaseAirdrop();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.chainId = object.chainId ?? "";
    message.airdropStartTime = object.airdropStartTime !== undefined && object.airdropStartTime !== null ? Timestamp.fromPartial(object.airdropStartTime) : undefined;
    message.airdropDuration = object.airdropDuration !== undefined && object.airdropDuration !== null ? Duration.fromPartial(object.airdropDuration) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    message.distributorAddress = object.distributorAddress ?? "";
    message.claimedSoFar = object.claimedSoFar ?? "";
    message.autopilotEnabled = object.autopilotEnabled ?? false;
    return message;
  }
};