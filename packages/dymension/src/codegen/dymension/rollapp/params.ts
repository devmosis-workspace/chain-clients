import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface DeployerParams {
  /**
   * address is a bech32-encoded address of the
   * accounts that are allowed to create a rollapp.
   */
  address: string;
  /** max_rollapps is the maximum number of rollapps that address allowed to deploy */
  maxRollapps: bigint;
}
export interface DeployerParamsProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.DeployerParams";
  value: Uint8Array;
}
export interface DeployerParamsAmino {
  /**
   * address is a bech32-encoded address of the
   * accounts that are allowed to create a rollapp.
   */
  address?: string;
  /** max_rollapps is the maximum number of rollapps that address allowed to deploy */
  max_rollapps?: string;
}
export interface DeployerParamsAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.DeployerParams";
  value: DeployerParamsAmino;
}
export interface DeployerParamsSDKType {
  address: string;
  max_rollapps: bigint;
}
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * dispute_period_in_blocks the number of blocks it takes
   * to change a status of a state from received to finalized.
   * during that period, any user could submit fraud proof
   */
  disputePeriodInBlocks: bigint;
  /**
   * deployer_whitelist is a list of the
   * accounts that are allowed to create a rollapp and maximum number of rollapps.
   * In the case of an empty list, there are no restrictions
   */
  deployerWhitelist: DeployerParams[];
  rollappsEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * dispute_period_in_blocks the number of blocks it takes
   * to change a status of a state from received to finalized.
   * during that period, any user could submit fraud proof
   */
  dispute_period_in_blocks?: string;
  /**
   * deployer_whitelist is a list of the
   * accounts that are allowed to create a rollapp and maximum number of rollapps.
   * In the case of an empty list, there are no restrictions
   */
  deployer_whitelist?: DeployerParamsAmino[];
  rollapps_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  dispute_period_in_blocks: bigint;
  deployer_whitelist: DeployerParamsSDKType[];
  rollapps_enabled: boolean;
}
function createBaseDeployerParams(): DeployerParams {
  return {
    address: "",
    maxRollapps: BigInt(0)
  };
}
export const DeployerParams = {
  typeUrl: "/dymensionxyz.dymension.rollapp.DeployerParams",
  encode(message: DeployerParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.maxRollapps !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxRollapps);
    }
    return writer;
  },
  fromJSON(object: any): DeployerParams {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      maxRollapps: isSet(object.maxRollapps) ? BigInt(object.maxRollapps.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<DeployerParams>): DeployerParams {
    const message = createBaseDeployerParams();
    message.address = object.address ?? "";
    message.maxRollapps = object.maxRollapps !== undefined && object.maxRollapps !== null ? BigInt(object.maxRollapps.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DeployerParamsAmino): DeployerParams {
    const message = createBaseDeployerParams();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.max_rollapps !== undefined && object.max_rollapps !== null) {
      message.maxRollapps = BigInt(object.max_rollapps);
    }
    return message;
  },
  toAmino(message: DeployerParams): DeployerParamsAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.max_rollapps = message.maxRollapps ? message.maxRollapps.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DeployerParamsAminoMsg): DeployerParams {
    return DeployerParams.fromAmino(object.value);
  },
  fromProtoMsg(message: DeployerParamsProtoMsg): DeployerParams {
    return DeployerParams.decode(message.value);
  },
  toProto(message: DeployerParams): Uint8Array {
    return DeployerParams.encode(message).finish();
  },
  toProtoMsg(message: DeployerParams): DeployerParamsProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.DeployerParams",
      value: DeployerParams.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    disputePeriodInBlocks: BigInt(0),
    deployerWhitelist: [],
    rollappsEnabled: false
  };
}
export const Params = {
  typeUrl: "/dymensionxyz.dymension.rollapp.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.disputePeriodInBlocks !== BigInt(0)) {
      writer.uint32(8).uint64(message.disputePeriodInBlocks);
    }
    for (const v of message.deployerWhitelist) {
      DeployerParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.rollappsEnabled === true) {
      writer.uint32(24).bool(message.rollappsEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      disputePeriodInBlocks: isSet(object.disputePeriodInBlocks) ? BigInt(object.disputePeriodInBlocks.toString()) : BigInt(0),
      deployerWhitelist: Array.isArray(object?.deployerWhitelist) ? object.deployerWhitelist.map((e: any) => DeployerParams.fromJSON(e)) : [],
      rollappsEnabled: isSet(object.rollappsEnabled) ? Boolean(object.rollappsEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.disputePeriodInBlocks = object.disputePeriodInBlocks !== undefined && object.disputePeriodInBlocks !== null ? BigInt(object.disputePeriodInBlocks.toString()) : BigInt(0);
    message.deployerWhitelist = object.deployerWhitelist?.map(e => DeployerParams.fromPartial(e)) || [];
    message.rollappsEnabled = object.rollappsEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.dispute_period_in_blocks !== undefined && object.dispute_period_in_blocks !== null) {
      message.disputePeriodInBlocks = BigInt(object.dispute_period_in_blocks);
    }
    message.deployerWhitelist = object.deployer_whitelist?.map(e => DeployerParams.fromAmino(e)) || [];
    if (object.rollapps_enabled !== undefined && object.rollapps_enabled !== null) {
      message.rollappsEnabled = object.rollapps_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.dispute_period_in_blocks = message.disputePeriodInBlocks ? message.disputePeriodInBlocks.toString() : undefined;
    if (message.deployerWhitelist) {
      obj.deployer_whitelist = message.deployerWhitelist.map(e => e ? DeployerParams.toAmino(e) : undefined);
    } else {
      obj.deployer_whitelist = [];
    }
    obj.rollapps_enabled = message.rollappsEnabled;
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
      typeUrl: "/dymensionxyz.dymension.rollapp.Params",
      value: Params.encode(message).finish()
    };
  }
};