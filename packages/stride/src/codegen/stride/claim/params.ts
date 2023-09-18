import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp } from "../../helpers";
/** Params defines the claim module's parameters. */
export interface Params {
  /** Params defines the claim module's parameters. */
  airdrops: Airdrop[];
}
export interface ParamsProtoMsg {
  typeUrl: "/stride.claim.Params";
  value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
  /** Params defines the claim module's parameters. */
  airdrops: AirdropAmino[];
}
export interface ParamsAminoMsg {
  type: "/stride.claim.Params";
  value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrops: AirdropSDKType[];
}
export interface Airdrop {
  airdropIdentifier: string;
  chainId: string;
  /** seconds */
  airdropStartTime: Timestamp;
  /** seconds */
  airdropDuration: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  /** airdrop distribution account */
  distributorAddress: string;
  /** ustrd tokens claimed so far in the current period */
  claimedSoFar: string;
  /** indicates the airdrop should be claimed via autopilot */
  autopilotEnabled: boolean;
}
export interface AirdropProtoMsg {
  typeUrl: "/stride.claim.Airdrop";
  value: Uint8Array;
}
export interface AirdropAmino {
  airdrop_identifier: string;
  chain_id: string;
  /** seconds */
  airdrop_start_time?: TimestampAmino;
  /** seconds */
  airdrop_duration?: DurationAmino;
  /** denom of claimable asset */
  claim_denom: string;
  /** airdrop distribution account */
  distributor_address: string;
  /** ustrd tokens claimed so far in the current period */
  claimed_so_far: string;
  /** indicates the airdrop should be claimed via autopilot */
  autopilot_enabled: boolean;
}
export interface AirdropAminoMsg {
  type: "/stride.claim.Airdrop";
  value: AirdropAmino;
}
export interface AirdropSDKType {
  airdrop_identifier: string;
  chain_id: string;
  airdrop_start_time: TimestampSDKType;
  airdrop_duration: DurationSDKType;
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
  typeUrl: "/stride.claim.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      airdrops: Array.isArray(object?.airdrops) ? object.airdrops.map((e: any) => Airdrop.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map(e => e ? Airdrop.toAmino(e) : undefined);
    } else {
      obj.airdrops = [];
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
      typeUrl: "/stride.claim.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseAirdrop(): Airdrop {
  return {
    airdropIdentifier: "",
    chainId: "",
    airdropStartTime: Timestamp.fromPartial({}),
    airdropDuration: Duration.fromPartial({}),
    claimDenom: "",
    distributorAddress: "",
    claimedSoFar: "",
    autopilotEnabled: false
  };
}
export const Airdrop = {
  typeUrl: "/stride.claim.Airdrop",
  encode(message: Airdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AirdropAmino): Airdrop {
    return {
      airdropIdentifier: object.airdrop_identifier,
      chainId: object.chain_id,
      airdropStartTime: object.airdrop_start_time,
      airdropDuration: object?.airdrop_duration ? Duration.fromAmino(object.airdrop_duration) : undefined,
      claimDenom: object.claim_denom,
      distributorAddress: object.distributor_address,
      claimedSoFar: object.claimed_so_far,
      autopilotEnabled: object.autopilot_enabled
    };
  },
  toAmino(message: Airdrop): AirdropAmino {
    const obj: any = {};
    obj.airdrop_identifier = message.airdropIdentifier;
    obj.chain_id = message.chainId;
    obj.airdrop_start_time = message.airdropStartTime;
    obj.airdrop_duration = message.airdropDuration ? Duration.toAmino(message.airdropDuration) : undefined;
    obj.claim_denom = message.claimDenom;
    obj.distributor_address = message.distributorAddress;
    obj.claimed_so_far = message.claimedSoFar;
    obj.autopilot_enabled = message.autopilotEnabled;
    return obj;
  },
  fromAminoMsg(object: AirdropAminoMsg): Airdrop {
    return Airdrop.fromAmino(object.value);
  },
  fromProtoMsg(message: AirdropProtoMsg): Airdrop {
    return Airdrop.decode(message.value);
  },
  toProto(message: Airdrop): Uint8Array {
    return Airdrop.encode(message).finish();
  },
  toProtoMsg(message: Airdrop): AirdropProtoMsg {
    return {
      typeUrl: "/stride.claim.Airdrop",
      value: Airdrop.encode(message).finish()
    };
  }
};