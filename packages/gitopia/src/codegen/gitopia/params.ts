import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryWriter } from "../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../helpers";
export interface DistributionProportion {
  proportion: string;
  address: string;
}
export interface DistributionProportionProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.DistributionProportion";
  value: Uint8Array;
}
export interface DistributionProportionAmino {
  proportion?: string;
  address?: string;
}
export interface DistributionProportionAminoMsg {
  type: "/gitopia.gitopia.gitopia.DistributionProportion";
  value: DistributionProportionAmino;
}
export interface DistributionProportionSDKType {
  proportion: string;
  address: string;
}
export interface PoolProportions {
  ecosystem?: DistributionProportion;
  team?: DistributionProportion;
  platform?: DistributionProportion;
}
export interface PoolProportionsProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.PoolProportions";
  value: Uint8Array;
}
export interface PoolProportionsAmino {
  ecosystem?: DistributionProportionAmino;
  team?: DistributionProportionAmino;
  platform?: DistributionProportionAmino;
}
export interface PoolProportionsAminoMsg {
  type: "/gitopia.gitopia.gitopia.PoolProportions";
  value: PoolProportionsAmino;
}
export interface PoolProportionsSDKType {
  ecosystem?: DistributionProportionSDKType;
  team?: DistributionProportionSDKType;
  platform?: DistributionProportionSDKType;
}
/** Params defines the parameters for the module. */
export interface Params {
  nextInflationTime: Timestamp;
  poolProportions: PoolProportions;
  teamProportions: DistributionProportion[];
  genesisTime: Timestamp;
  gitServer: string;
  storageProvider: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  next_inflation_time?: string;
  pool_proportions?: PoolProportionsAmino;
  team_proportions?: DistributionProportionAmino[];
  genesis_time?: string;
  git_server?: string;
  storage_provider?: string;
}
export interface ParamsAminoMsg {
  type: "/gitopia.gitopia.gitopia.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  next_inflation_time: TimestampSDKType;
  pool_proportions: PoolProportionsSDKType;
  team_proportions: DistributionProportionSDKType[];
  genesis_time: TimestampSDKType;
  git_server: string;
  storage_provider: string;
}
function createBaseDistributionProportion(): DistributionProportion {
  return {
    proportion: "",
    address: ""
  };
}
export const DistributionProportion = {
  typeUrl: "/gitopia.gitopia.gitopia.DistributionProportion",
  encode(message: DistributionProportion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proportion !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.proportion, 18).atomics);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): DistributionProportion {
    return {
      proportion: isSet(object.proportion) ? String(object.proportion) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<DistributionProportion>): DistributionProportion {
    const message = createBaseDistributionProportion();
    message.proportion = object.proportion ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: DistributionProportionAmino): DistributionProportion {
    const message = createBaseDistributionProportion();
    if (object.proportion !== undefined && object.proportion !== null) {
      message.proportion = object.proportion;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: DistributionProportion): DistributionProportionAmino {
    const obj: any = {};
    obj.proportion = message.proportion === "" ? undefined : message.proportion;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: DistributionProportionAminoMsg): DistributionProportion {
    return DistributionProportion.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProportionProtoMsg): DistributionProportion {
    return DistributionProportion.decode(message.value);
  },
  toProto(message: DistributionProportion): Uint8Array {
    return DistributionProportion.encode(message).finish();
  },
  toProtoMsg(message: DistributionProportion): DistributionProportionProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.DistributionProportion",
      value: DistributionProportion.encode(message).finish()
    };
  }
};
function createBasePoolProportions(): PoolProportions {
  return {
    ecosystem: undefined,
    team: undefined,
    platform: undefined
  };
}
export const PoolProportions = {
  typeUrl: "/gitopia.gitopia.gitopia.PoolProportions",
  encode(message: PoolProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ecosystem !== undefined) {
      DistributionProportion.encode(message.ecosystem, writer.uint32(10).fork()).ldelim();
    }
    if (message.team !== undefined) {
      DistributionProportion.encode(message.team, writer.uint32(18).fork()).ldelim();
    }
    if (message.platform !== undefined) {
      DistributionProportion.encode(message.platform, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolProportions {
    return {
      ecosystem: isSet(object.ecosystem) ? DistributionProportion.fromJSON(object.ecosystem) : undefined,
      team: isSet(object.team) ? DistributionProportion.fromJSON(object.team) : undefined,
      platform: isSet(object.platform) ? DistributionProportion.fromJSON(object.platform) : undefined
    };
  },
  fromPartial(object: Partial<PoolProportions>): PoolProportions {
    const message = createBasePoolProportions();
    message.ecosystem = object.ecosystem !== undefined && object.ecosystem !== null ? DistributionProportion.fromPartial(object.ecosystem) : undefined;
    message.team = object.team !== undefined && object.team !== null ? DistributionProportion.fromPartial(object.team) : undefined;
    message.platform = object.platform !== undefined && object.platform !== null ? DistributionProportion.fromPartial(object.platform) : undefined;
    return message;
  },
  fromAmino(object: PoolProportionsAmino): PoolProportions {
    const message = createBasePoolProportions();
    if (object.ecosystem !== undefined && object.ecosystem !== null) {
      message.ecosystem = DistributionProportion.fromAmino(object.ecosystem);
    }
    if (object.team !== undefined && object.team !== null) {
      message.team = DistributionProportion.fromAmino(object.team);
    }
    if (object.platform !== undefined && object.platform !== null) {
      message.platform = DistributionProportion.fromAmino(object.platform);
    }
    return message;
  },
  toAmino(message: PoolProportions): PoolProportionsAmino {
    const obj: any = {};
    obj.ecosystem = message.ecosystem ? DistributionProportion.toAmino(message.ecosystem) : undefined;
    obj.team = message.team ? DistributionProportion.toAmino(message.team) : undefined;
    obj.platform = message.platform ? DistributionProportion.toAmino(message.platform) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolProportionsAminoMsg): PoolProportions {
    return PoolProportions.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProportionsProtoMsg): PoolProportions {
    return PoolProportions.decode(message.value);
  },
  toProto(message: PoolProportions): Uint8Array {
    return PoolProportions.encode(message).finish();
  },
  toProtoMsg(message: PoolProportions): PoolProportionsProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.PoolProportions",
      value: PoolProportions.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    nextInflationTime: Timestamp.fromPartial({}),
    poolProportions: PoolProportions.fromPartial({}),
    teamProportions: [],
    genesisTime: Timestamp.fromPartial({}),
    gitServer: "",
    storageProvider: ""
  };
}
export const Params = {
  typeUrl: "/gitopia.gitopia.gitopia.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextInflationTime !== undefined) {
      Timestamp.encode(message.nextInflationTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolProportions !== undefined) {
      PoolProportions.encode(message.poolProportions, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.teamProportions) {
      DistributionProportion.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.genesisTime !== undefined) {
      Timestamp.encode(message.genesisTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.gitServer !== "") {
      writer.uint32(42).string(message.gitServer);
    }
    if (message.storageProvider !== "") {
      writer.uint32(50).string(message.storageProvider);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      nextInflationTime: isSet(object.nextInflationTime) ? fromJsonTimestamp(object.nextInflationTime) : undefined,
      poolProportions: isSet(object.poolProportions) ? PoolProportions.fromJSON(object.poolProportions) : undefined,
      teamProportions: Array.isArray(object?.teamProportions) ? object.teamProportions.map((e: any) => DistributionProportion.fromJSON(e)) : [],
      genesisTime: isSet(object.genesisTime) ? fromJsonTimestamp(object.genesisTime) : undefined,
      gitServer: isSet(object.gitServer) ? String(object.gitServer) : "",
      storageProvider: isSet(object.storageProvider) ? String(object.storageProvider) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.nextInflationTime = object.nextInflationTime !== undefined && object.nextInflationTime !== null ? Timestamp.fromPartial(object.nextInflationTime) : undefined;
    message.poolProportions = object.poolProportions !== undefined && object.poolProportions !== null ? PoolProportions.fromPartial(object.poolProportions) : undefined;
    message.teamProportions = object.teamProportions?.map(e => DistributionProportion.fromPartial(e)) || [];
    message.genesisTime = object.genesisTime !== undefined && object.genesisTime !== null ? Timestamp.fromPartial(object.genesisTime) : undefined;
    message.gitServer = object.gitServer ?? "";
    message.storageProvider = object.storageProvider ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.next_inflation_time !== undefined && object.next_inflation_time !== null) {
      message.nextInflationTime = Timestamp.fromAmino(object.next_inflation_time);
    }
    if (object.pool_proportions !== undefined && object.pool_proportions !== null) {
      message.poolProportions = PoolProportions.fromAmino(object.pool_proportions);
    }
    message.teamProportions = object.team_proportions?.map(e => DistributionProportion.fromAmino(e)) || [];
    if (object.genesis_time !== undefined && object.genesis_time !== null) {
      message.genesisTime = Timestamp.fromAmino(object.genesis_time);
    }
    if (object.git_server !== undefined && object.git_server !== null) {
      message.gitServer = object.git_server;
    }
    if (object.storage_provider !== undefined && object.storage_provider !== null) {
      message.storageProvider = object.storage_provider;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.next_inflation_time = message.nextInflationTime ? Timestamp.toAmino(message.nextInflationTime) : undefined;
    obj.pool_proportions = message.poolProportions ? PoolProportions.toAmino(message.poolProportions) : undefined;
    if (message.teamProportions) {
      obj.team_proportions = message.teamProportions.map(e => e ? DistributionProportion.toAmino(e) : undefined);
    } else {
      obj.team_proportions = message.teamProportions;
    }
    obj.genesis_time = message.genesisTime ? Timestamp.toAmino(message.genesisTime) : undefined;
    obj.git_server = message.gitServer === "" ? undefined : message.gitServer;
    obj.storage_provider = message.storageProvider === "" ? undefined : message.storageProvider;
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
      typeUrl: "/gitopia.gitopia.gitopia.Params",
      value: Params.encode(message).finish()
    };
  }
};