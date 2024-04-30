import { IncentivizedPool, IncentivizedPoolAmino, IncentivizedPoolSDKType } from "../../osmosis/pool-incentives/v1beta1/query";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "../../osmosis/epochs/genesis";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface OsmosisRequestState {
  packetSequence: bigint;
  acknowledged: boolean;
  failed: boolean;
  updatedAtHeight: bigint;
}
export interface OsmosisRequestStateProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.OsmosisRequestState";
  value: Uint8Array;
}
export interface OsmosisRequestStateAmino {
  packet_sequence?: string;
  acknowledged?: boolean;
  failed?: boolean;
  updated_at_height?: string;
}
export interface OsmosisRequestStateAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.osmosis.OsmosisRequestState";
  value: OsmosisRequestStateAmino;
}
export interface OsmosisRequestStateSDKType {
  packet_sequence: bigint;
  acknowledged: boolean;
  failed: boolean;
  updated_at_height: bigint;
}
export interface IncentivizedPools {
  incentivizedPools: IncentivizedPool[];
}
export interface IncentivizedPoolsProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.IncentivizedPools";
  value: Uint8Array;
}
export interface IncentivizedPoolsAmino {
  incentivized_pools?: IncentivizedPoolAmino[];
}
export interface IncentivizedPoolsAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.osmosis.IncentivizedPools";
  value: IncentivizedPoolsAmino;
}
export interface IncentivizedPoolsSDKType {
  incentivized_pools: IncentivizedPoolSDKType[];
}
export interface EpochsInfo {
  epochsInfo: EpochInfo[];
}
export interface EpochsInfoProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.EpochsInfo";
  value: Uint8Array;
}
export interface EpochsInfoAmino {
  epochs_info?: EpochInfoAmino[];
}
export interface EpochsInfoAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.osmosis.EpochsInfo";
  value: EpochsInfoAmino;
}
export interface EpochsInfoSDKType {
  epochs_info: EpochInfoSDKType[];
}
function createBaseOsmosisRequestState(): OsmosisRequestState {
  return {
    packetSequence: BigInt(0),
    acknowledged: false,
    failed: false,
    updatedAtHeight: BigInt(0)
  };
}
export const OsmosisRequestState = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.OsmosisRequestState",
  encode(message: OsmosisRequestState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetSequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.packetSequence);
    }
    if (message.acknowledged === true) {
      writer.uint32(16).bool(message.acknowledged);
    }
    if (message.failed === true) {
      writer.uint32(24).bool(message.failed);
    }
    if (message.updatedAtHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.updatedAtHeight);
    }
    return writer;
  },
  fromJSON(object: any): OsmosisRequestState {
    return {
      packetSequence: isSet(object.packetSequence) ? BigInt(object.packetSequence.toString()) : BigInt(0),
      acknowledged: isSet(object.acknowledged) ? Boolean(object.acknowledged) : false,
      failed: isSet(object.failed) ? Boolean(object.failed) : false,
      updatedAtHeight: isSet(object.updatedAtHeight) ? BigInt(object.updatedAtHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<OsmosisRequestState>): OsmosisRequestState {
    const message = createBaseOsmosisRequestState();
    message.packetSequence = object.packetSequence !== undefined && object.packetSequence !== null ? BigInt(object.packetSequence.toString()) : BigInt(0);
    message.acknowledged = object.acknowledged ?? false;
    message.failed = object.failed ?? false;
    message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? BigInt(object.updatedAtHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OsmosisRequestStateAmino): OsmosisRequestState {
    const message = createBaseOsmosisRequestState();
    if (object.packet_sequence !== undefined && object.packet_sequence !== null) {
      message.packetSequence = BigInt(object.packet_sequence);
    }
    if (object.acknowledged !== undefined && object.acknowledged !== null) {
      message.acknowledged = object.acknowledged;
    }
    if (object.failed !== undefined && object.failed !== null) {
      message.failed = object.failed;
    }
    if (object.updated_at_height !== undefined && object.updated_at_height !== null) {
      message.updatedAtHeight = BigInt(object.updated_at_height);
    }
    return message;
  },
  toAmino(message: OsmosisRequestState): OsmosisRequestStateAmino {
    const obj: any = {};
    obj.packet_sequence = message.packetSequence ? message.packetSequence.toString() : undefined;
    obj.acknowledged = message.acknowledged;
    obj.failed = message.failed;
    obj.updated_at_height = message.updatedAtHeight ? message.updatedAtHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OsmosisRequestStateAminoMsg): OsmosisRequestState {
    return OsmosisRequestState.fromAmino(object.value);
  },
  fromProtoMsg(message: OsmosisRequestStateProtoMsg): OsmosisRequestState {
    return OsmosisRequestState.decode(message.value);
  },
  toProto(message: OsmosisRequestState): Uint8Array {
    return OsmosisRequestState.encode(message).finish();
  },
  toProtoMsg(message: OsmosisRequestState): OsmosisRequestStateProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.OsmosisRequestState",
      value: OsmosisRequestState.encode(message).finish()
    };
  }
};
function createBaseIncentivizedPools(): IncentivizedPools {
  return {
    incentivizedPools: []
  };
}
export const IncentivizedPools = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.IncentivizedPools",
  encode(message: IncentivizedPools, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPools) {
      IncentivizedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IncentivizedPools {
    return {
      incentivizedPools: Array.isArray(object?.incentivizedPools) ? object.incentivizedPools.map((e: any) => IncentivizedPool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<IncentivizedPools>): IncentivizedPools {
    const message = createBaseIncentivizedPools();
    message.incentivizedPools = object.incentivizedPools?.map(e => IncentivizedPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IncentivizedPoolsAmino): IncentivizedPools {
    const message = createBaseIncentivizedPools();
    message.incentivizedPools = object.incentivized_pools?.map(e => IncentivizedPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: IncentivizedPools): IncentivizedPoolsAmino {
    const obj: any = {};
    if (message.incentivizedPools) {
      obj.incentivized_pools = message.incentivizedPools.map(e => e ? IncentivizedPool.toAmino(e) : undefined);
    } else {
      obj.incentivized_pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: IncentivizedPoolsAminoMsg): IncentivizedPools {
    return IncentivizedPools.fromAmino(object.value);
  },
  fromProtoMsg(message: IncentivizedPoolsProtoMsg): IncentivizedPools {
    return IncentivizedPools.decode(message.value);
  },
  toProto(message: IncentivizedPools): Uint8Array {
    return IncentivizedPools.encode(message).finish();
  },
  toProtoMsg(message: IncentivizedPools): IncentivizedPoolsProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.IncentivizedPools",
      value: IncentivizedPools.encode(message).finish()
    };
  }
};
function createBaseEpochsInfo(): EpochsInfo {
  return {
    epochsInfo: []
  };
}
export const EpochsInfo = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.EpochsInfo",
  encode(message: EpochsInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochsInfo) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EpochsInfo {
    return {
      epochsInfo: Array.isArray(object?.epochsInfo) ? object.epochsInfo.map((e: any) => EpochInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EpochsInfo>): EpochsInfo {
    const message = createBaseEpochsInfo();
    message.epochsInfo = object.epochsInfo?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EpochsInfoAmino): EpochsInfo {
    const message = createBaseEpochsInfo();
    message.epochsInfo = object.epochs_info?.map(e => EpochInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EpochsInfo): EpochsInfoAmino {
    const obj: any = {};
    if (message.epochsInfo) {
      obj.epochs_info = message.epochsInfo.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs_info = [];
    }
    return obj;
  },
  fromAminoMsg(object: EpochsInfoAminoMsg): EpochsInfo {
    return EpochsInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochsInfoProtoMsg): EpochsInfo {
    return EpochsInfo.decode(message.value);
  },
  toProto(message: EpochsInfo): Uint8Array {
    return EpochsInfo.encode(message).finish();
  },
  toProtoMsg(message: EpochsInfo): EpochsInfoProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.EpochsInfo",
      value: EpochsInfo.encode(message).finish()
    };
  }
};