import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export enum ProtocolDataType {
  /** ProtocolDataTypeUndefined - Undefined action (per protobuf spec) */
  ProtocolDataTypeUndefined = 0,
  ProtocolDataTypeConnection = 1,
  ProtocolDataTypeOsmosisParams = 2,
  ProtocolDataTypeLiquidToken = 3,
  ProtocolDataTypeOsmosisPool = 4,
  ProtocolDataTypeCrescentPool = 5,
  ProtocolDataTypeSifchainPool = 6,
  ProtocolDataTypeUmeeParams = 7,
  ProtocolDataTypeUmeeReserves = 8,
  ProtocolDataTypeUmeeInterestScalar = 9,
  ProtocolDataTypeUmeeTotalBorrows = 10,
  ProtocolDataTypeUmeeUTokenSupply = 11,
  ProtocolDataTypeUmeeLeverageModuleBalance = 12,
  ProtocolDataTypeCrescentParams = 13,
  ProtocolDataTypeCrescentReserveAddressBalance = 14,
  ProtocolDataTypeCrescentPoolCoinSupply = 15,
  UNRECOGNIZED = -1,
}
export const ProtocolDataTypeSDKType = ProtocolDataType;
export const ProtocolDataTypeAmino = ProtocolDataType;
export function protocolDataTypeFromJSON(object: any): ProtocolDataType {
  switch (object) {
    case 0:
    case "ProtocolDataTypeUndefined":
      return ProtocolDataType.ProtocolDataTypeUndefined;
    case 1:
    case "ProtocolDataTypeConnection":
      return ProtocolDataType.ProtocolDataTypeConnection;
    case 2:
    case "ProtocolDataTypeOsmosisParams":
      return ProtocolDataType.ProtocolDataTypeOsmosisParams;
    case 3:
    case "ProtocolDataTypeLiquidToken":
      return ProtocolDataType.ProtocolDataTypeLiquidToken;
    case 4:
    case "ProtocolDataTypeOsmosisPool":
      return ProtocolDataType.ProtocolDataTypeOsmosisPool;
    case 5:
    case "ProtocolDataTypeCrescentPool":
      return ProtocolDataType.ProtocolDataTypeCrescentPool;
    case 6:
    case "ProtocolDataTypeSifchainPool":
      return ProtocolDataType.ProtocolDataTypeSifchainPool;
    case 7:
    case "ProtocolDataTypeUmeeParams":
      return ProtocolDataType.ProtocolDataTypeUmeeParams;
    case 8:
    case "ProtocolDataTypeUmeeReserves":
      return ProtocolDataType.ProtocolDataTypeUmeeReserves;
    case 9:
    case "ProtocolDataTypeUmeeInterestScalar":
      return ProtocolDataType.ProtocolDataTypeUmeeInterestScalar;
    case 10:
    case "ProtocolDataTypeUmeeTotalBorrows":
      return ProtocolDataType.ProtocolDataTypeUmeeTotalBorrows;
    case 11:
    case "ProtocolDataTypeUmeeUTokenSupply":
      return ProtocolDataType.ProtocolDataTypeUmeeUTokenSupply;
    case 12:
    case "ProtocolDataTypeUmeeLeverageModuleBalance":
      return ProtocolDataType.ProtocolDataTypeUmeeLeverageModuleBalance;
    case 13:
    case "ProtocolDataTypeCrescentParams":
      return ProtocolDataType.ProtocolDataTypeCrescentParams;
    case 14:
    case "ProtocolDataTypeCrescentReserveAddressBalance":
      return ProtocolDataType.ProtocolDataTypeCrescentReserveAddressBalance;
    case 15:
    case "ProtocolDataTypeCrescentPoolCoinSupply":
      return ProtocolDataType.ProtocolDataTypeCrescentPoolCoinSupply;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProtocolDataType.UNRECOGNIZED;
  }
}
export function protocolDataTypeToJSON(object: ProtocolDataType): string {
  switch (object) {
    case ProtocolDataType.ProtocolDataTypeUndefined:
      return "ProtocolDataTypeUndefined";
    case ProtocolDataType.ProtocolDataTypeConnection:
      return "ProtocolDataTypeConnection";
    case ProtocolDataType.ProtocolDataTypeOsmosisParams:
      return "ProtocolDataTypeOsmosisParams";
    case ProtocolDataType.ProtocolDataTypeLiquidToken:
      return "ProtocolDataTypeLiquidToken";
    case ProtocolDataType.ProtocolDataTypeOsmosisPool:
      return "ProtocolDataTypeOsmosisPool";
    case ProtocolDataType.ProtocolDataTypeCrescentPool:
      return "ProtocolDataTypeCrescentPool";
    case ProtocolDataType.ProtocolDataTypeSifchainPool:
      return "ProtocolDataTypeSifchainPool";
    case ProtocolDataType.ProtocolDataTypeUmeeParams:
      return "ProtocolDataTypeUmeeParams";
    case ProtocolDataType.ProtocolDataTypeUmeeReserves:
      return "ProtocolDataTypeUmeeReserves";
    case ProtocolDataType.ProtocolDataTypeUmeeInterestScalar:
      return "ProtocolDataTypeUmeeInterestScalar";
    case ProtocolDataType.ProtocolDataTypeUmeeTotalBorrows:
      return "ProtocolDataTypeUmeeTotalBorrows";
    case ProtocolDataType.ProtocolDataTypeUmeeUTokenSupply:
      return "ProtocolDataTypeUmeeUTokenSupply";
    case ProtocolDataType.ProtocolDataTypeUmeeLeverageModuleBalance:
      return "ProtocolDataTypeUmeeLeverageModuleBalance";
    case ProtocolDataType.ProtocolDataTypeCrescentParams:
      return "ProtocolDataTypeCrescentParams";
    case ProtocolDataType.ProtocolDataTypeCrescentReserveAddressBalance:
      return "ProtocolDataTypeCrescentReserveAddressBalance";
    case ProtocolDataType.ProtocolDataTypeCrescentPoolCoinSupply:
      return "ProtocolDataTypeCrescentPoolCoinSupply";
    case ProtocolDataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * DistributionProportions defines the proportions of minted QCK that is to be
 * allocated as participation rewards.
 */
export interface DistributionProportions {
  validatorSelectionAllocation: string;
  holdingsAllocation: string;
  lockupAllocation: string;
}
export interface DistributionProportionsProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.DistributionProportions";
  value: Uint8Array;
}
/**
 * DistributionProportions defines the proportions of minted QCK that is to be
 * allocated as participation rewards.
 */
export interface DistributionProportionsAmino {
  validator_selection_allocation?: string;
  holdings_allocation?: string;
  lockup_allocation?: string;
}
export interface DistributionProportionsAminoMsg {
  type: "/quicksilver.participationrewards.v1.DistributionProportions";
  value: DistributionProportionsAmino;
}
/**
 * DistributionProportions defines the proportions of minted QCK that is to be
 * allocated as participation rewards.
 */
export interface DistributionProportionsSDKType {
  validator_selection_allocation: string;
  holdings_allocation: string;
  lockup_allocation: string;
}
/** Params holds parameters for the participationrewards module. */
export interface Params {
  /**
   * distribution_proportions defines the proportions of the minted
   * participation rewards;
   */
  distributionProportions: DistributionProportions;
  claimsEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the participationrewards module. */
export interface ParamsAmino {
  /**
   * distribution_proportions defines the proportions of the minted
   * participation rewards;
   */
  distribution_proportions?: DistributionProportionsAmino;
  claims_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/quicksilver.participationrewards.v1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the participationrewards module. */
export interface ParamsSDKType {
  distribution_proportions: DistributionProportionsSDKType;
  claims_enabled: boolean;
}
export interface KeyedProtocolData {
  key: string;
  protocolData?: ProtocolData;
}
export interface KeyedProtocolDataProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.KeyedProtocolData";
  value: Uint8Array;
}
export interface KeyedProtocolDataAmino {
  key?: string;
  protocol_data?: ProtocolDataAmino;
}
export interface KeyedProtocolDataAminoMsg {
  type: "/quicksilver.participationrewards.v1.KeyedProtocolData";
  value: KeyedProtocolDataAmino;
}
export interface KeyedProtocolDataSDKType {
  key: string;
  protocol_data?: ProtocolDataSDKType;
}
/**
 * Protocol Data is an arbitrary data type held against a given zone for the
 * determination of rewards.
 */
export interface ProtocolData {
  type: string;
  data: Uint8Array;
}
export interface ProtocolDataProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.ProtocolData";
  value: Uint8Array;
}
/**
 * Protocol Data is an arbitrary data type held against a given zone for the
 * determination of rewards.
 */
export interface ProtocolDataAmino {
  type?: string;
  data?: string;
}
export interface ProtocolDataAminoMsg {
  type: "/quicksilver.participationrewards.v1.ProtocolData";
  value: ProtocolDataAmino;
}
/**
 * Protocol Data is an arbitrary data type held against a given zone for the
 * determination of rewards.
 */
export interface ProtocolDataSDKType {
  type: string;
  data: Uint8Array;
}
function createBaseDistributionProportions(): DistributionProportions {
  return {
    validatorSelectionAllocation: "",
    holdingsAllocation: "",
    lockupAllocation: ""
  };
}
export const DistributionProportions = {
  typeUrl: "/quicksilver.participationrewards.v1.DistributionProportions",
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorSelectionAllocation !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.validatorSelectionAllocation, 18).atomics);
    }
    if (message.holdingsAllocation !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.holdingsAllocation, 18).atomics);
    }
    if (message.lockupAllocation !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.lockupAllocation, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): DistributionProportions {
    return {
      validatorSelectionAllocation: isSet(object.validatorSelectionAllocation) ? String(object.validatorSelectionAllocation) : "",
      holdingsAllocation: isSet(object.holdingsAllocation) ? String(object.holdingsAllocation) : "",
      lockupAllocation: isSet(object.lockupAllocation) ? String(object.lockupAllocation) : ""
    };
  },
  fromPartial(object: Partial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.validatorSelectionAllocation = object.validatorSelectionAllocation ?? "";
    message.holdingsAllocation = object.holdingsAllocation ?? "";
    message.lockupAllocation = object.lockupAllocation ?? "";
    return message;
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    const message = createBaseDistributionProportions();
    if (object.validator_selection_allocation !== undefined && object.validator_selection_allocation !== null) {
      message.validatorSelectionAllocation = object.validator_selection_allocation;
    }
    if (object.holdings_allocation !== undefined && object.holdings_allocation !== null) {
      message.holdingsAllocation = object.holdings_allocation;
    }
    if (object.lockup_allocation !== undefined && object.lockup_allocation !== null) {
      message.lockupAllocation = object.lockup_allocation;
    }
    return message;
  },
  toAmino(message: DistributionProportions): DistributionProportionsAmino {
    const obj: any = {};
    obj.validator_selection_allocation = message.validatorSelectionAllocation;
    obj.holdings_allocation = message.holdingsAllocation;
    obj.lockup_allocation = message.lockupAllocation;
    return obj;
  },
  fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions {
    return DistributionProportions.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions {
    return DistributionProportions.decode(message.value);
  },
  toProto(message: DistributionProportions): Uint8Array {
    return DistributionProportions.encode(message).finish();
  },
  toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    distributionProportions: DistributionProportions.fromPartial({}),
    claimsEnabled: false
  };
}
export const Params = {
  typeUrl: "/quicksilver.participationrewards.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
    }
    if (message.claimsEnabled === true) {
      writer.uint32(16).bool(message.claimsEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      distributionProportions: isSet(object.distributionProportions) ? DistributionProportions.fromJSON(object.distributionProportions) : undefined,
      claimsEnabled: isSet(object.claimsEnabled) ? Boolean(object.claimsEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.claimsEnabled = object.claimsEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
      message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
    }
    if (object.claims_enabled !== undefined && object.claims_enabled !== null) {
      message.claimsEnabled = object.claims_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : undefined;
    obj.claims_enabled = message.claimsEnabled;
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
      typeUrl: "/quicksilver.participationrewards.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseKeyedProtocolData(): KeyedProtocolData {
  return {
    key: "",
    protocolData: undefined
  };
}
export const KeyedProtocolData = {
  typeUrl: "/quicksilver.participationrewards.v1.KeyedProtocolData",
  encode(message: KeyedProtocolData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.protocolData !== undefined) {
      ProtocolData.encode(message.protocolData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): KeyedProtocolData {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      protocolData: isSet(object.protocolData) ? ProtocolData.fromJSON(object.protocolData) : undefined
    };
  },
  fromPartial(object: Partial<KeyedProtocolData>): KeyedProtocolData {
    const message = createBaseKeyedProtocolData();
    message.key = object.key ?? "";
    message.protocolData = object.protocolData !== undefined && object.protocolData !== null ? ProtocolData.fromPartial(object.protocolData) : undefined;
    return message;
  },
  fromAmino(object: KeyedProtocolDataAmino): KeyedProtocolData {
    const message = createBaseKeyedProtocolData();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.protocol_data !== undefined && object.protocol_data !== null) {
      message.protocolData = ProtocolData.fromAmino(object.protocol_data);
    }
    return message;
  },
  toAmino(message: KeyedProtocolData): KeyedProtocolDataAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.protocol_data = message.protocolData ? ProtocolData.toAmino(message.protocolData) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeyedProtocolDataAminoMsg): KeyedProtocolData {
    return KeyedProtocolData.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyedProtocolDataProtoMsg): KeyedProtocolData {
    return KeyedProtocolData.decode(message.value);
  },
  toProto(message: KeyedProtocolData): Uint8Array {
    return KeyedProtocolData.encode(message).finish();
  },
  toProtoMsg(message: KeyedProtocolData): KeyedProtocolDataProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.KeyedProtocolData",
      value: KeyedProtocolData.encode(message).finish()
    };
  }
};
function createBaseProtocolData(): ProtocolData {
  return {
    type: "",
    data: new Uint8Array()
  };
}
export const ProtocolData = {
  typeUrl: "/quicksilver.participationrewards.v1.ProtocolData",
  encode(message: ProtocolData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): ProtocolData {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ProtocolData>): ProtocolData {
    const message = createBaseProtocolData();
    message.type = object.type ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ProtocolDataAmino): ProtocolData {
    const message = createBaseProtocolData();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: ProtocolData): ProtocolDataAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProtocolDataAminoMsg): ProtocolData {
    return ProtocolData.fromAmino(object.value);
  },
  fromProtoMsg(message: ProtocolDataProtoMsg): ProtocolData {
    return ProtocolData.decode(message.value);
  },
  toProto(message: ProtocolData): Uint8Array {
    return ProtocolData.encode(message).finish();
  },
  toProtoMsg(message: ProtocolData): ProtocolDataProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.ProtocolData",
      value: ProtocolData.encode(message).finish()
    };
  }
};