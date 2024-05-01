import { BinaryWriter } from "../../../binary";
export declare enum ProtocolDataType {
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
    UNRECOGNIZED = -1
}
export declare const ProtocolDataTypeSDKType: typeof ProtocolDataType;
export declare const ProtocolDataTypeAmino: typeof ProtocolDataType;
export declare function protocolDataTypeFromJSON(object: any): ProtocolDataType;
export declare function protocolDataTypeToJSON(object: ProtocolDataType): string;
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
export declare const DistributionProportions: {
    typeUrl: string;
    encode(message: DistributionProportions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistributionProportions;
    fromPartial(object: Partial<DistributionProportions>): DistributionProportions;
    fromAmino(object: DistributionProportionsAmino): DistributionProportions;
    toAmino(message: DistributionProportions): DistributionProportionsAmino;
    fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions;
    fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions;
    toProto(message: DistributionProportions): Uint8Array;
    toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const KeyedProtocolData: {
    typeUrl: string;
    encode(message: KeyedProtocolData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyedProtocolData;
    fromPartial(object: Partial<KeyedProtocolData>): KeyedProtocolData;
    fromAmino(object: KeyedProtocolDataAmino): KeyedProtocolData;
    toAmino(message: KeyedProtocolData): KeyedProtocolDataAmino;
    fromAminoMsg(object: KeyedProtocolDataAminoMsg): KeyedProtocolData;
    fromProtoMsg(message: KeyedProtocolDataProtoMsg): KeyedProtocolData;
    toProto(message: KeyedProtocolData): Uint8Array;
    toProtoMsg(message: KeyedProtocolData): KeyedProtocolDataProtoMsg;
};
export declare const ProtocolData: {
    typeUrl: string;
    encode(message: ProtocolData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProtocolData;
    fromPartial(object: Partial<ProtocolData>): ProtocolData;
    fromAmino(object: ProtocolDataAmino): ProtocolData;
    toAmino(message: ProtocolData): ProtocolDataAmino;
    fromAminoMsg(object: ProtocolDataAminoMsg): ProtocolData;
    fromProtoMsg(message: ProtocolDataProtoMsg): ProtocolData;
    toProto(message: ProtocolData): Uint8Array;
    toProtoMsg(message: ProtocolData): ProtocolDataProtoMsg;
};
