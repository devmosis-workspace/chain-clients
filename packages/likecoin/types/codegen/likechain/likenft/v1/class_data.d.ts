import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export declare enum ClassParentType {
    UNKNOWN = 0,
    ISCN = 1,
    ACCOUNT = 2,
    UNRECOGNIZED = -1
}
export declare const ClassParentTypeSDKType: typeof ClassParentType;
export declare const ClassParentTypeAmino: typeof ClassParentType;
export declare function classParentTypeFromJSON(object: any): ClassParentType;
export declare function classParentTypeToJSON(object: ClassParentType): string;
export interface ClassData {
    metadata: Uint8Array;
    parent: ClassParent;
    config: ClassConfig;
    blindBoxState: BlindBoxState;
}
export interface ClassDataProtoMsg {
    typeUrl: "/likechain.likenft.v1.ClassData";
    value: Uint8Array;
}
export interface ClassDataAmino {
    metadata?: string;
    parent?: ClassParentAmino;
    config?: ClassConfigAmino;
    blind_box_state?: BlindBoxStateAmino;
}
export interface ClassDataAminoMsg {
    type: "/likechain.likenft.v1.ClassData";
    value: ClassDataAmino;
}
export interface ClassDataSDKType {
    metadata: Uint8Array;
    parent: ClassParentSDKType;
    config: ClassConfigSDKType;
    blind_box_state: BlindBoxStateSDKType;
}
export interface ClassParent {
    type: ClassParentType;
    iscnIdPrefix?: string;
    iscnVersionAtMint?: bigint;
    account?: string;
}
export interface ClassParentProtoMsg {
    typeUrl: "/likechain.likenft.v1.ClassParent";
    value: Uint8Array;
}
export interface ClassParentAmino {
    type?: ClassParentType;
    iscn_id_prefix?: string;
    iscn_version_at_mint?: string;
    account?: string;
}
export interface ClassParentAminoMsg {
    type: "/likechain.likenft.v1.ClassParent";
    value: ClassParentAmino;
}
export interface ClassParentSDKType {
    type: ClassParentType;
    iscn_id_prefix?: string;
    iscn_version_at_mint?: bigint;
    account?: string;
}
export interface MintPeriod {
    startTime: Timestamp;
    allowedAddresses: string[];
    mintPrice: bigint;
}
export interface MintPeriodProtoMsg {
    typeUrl: "/likechain.likenft.v1.MintPeriod";
    value: Uint8Array;
}
export interface MintPeriodAmino {
    start_time?: string;
    allowed_addresses?: string[];
    mint_price?: string;
}
export interface MintPeriodAminoMsg {
    type: "/likechain.likenft.v1.MintPeriod";
    value: MintPeriodAmino;
}
export interface MintPeriodSDKType {
    start_time: TimestampSDKType;
    allowed_addresses: string[];
    mint_price: bigint;
}
export interface ClassConfig {
    burnable: boolean;
    maxSupply: bigint;
    blindBoxConfig?: BlindBoxConfig;
}
export interface ClassConfigProtoMsg {
    typeUrl: "/likechain.likenft.v1.ClassConfig";
    value: Uint8Array;
}
export interface ClassConfigAmino {
    burnable?: boolean;
    max_supply?: string;
    blind_box_config?: BlindBoxConfigAmino;
}
export interface ClassConfigAminoMsg {
    type: "/likechain.likenft.v1.ClassConfig";
    value: ClassConfigAmino;
}
export interface ClassConfigSDKType {
    burnable: boolean;
    max_supply: bigint;
    blind_box_config?: BlindBoxConfigSDKType;
}
export interface BlindBoxConfig {
    mintPeriods: MintPeriod[];
    revealTime: Timestamp;
}
export interface BlindBoxConfigProtoMsg {
    typeUrl: "/likechain.likenft.v1.BlindBoxConfig";
    value: Uint8Array;
}
export interface BlindBoxConfigAmino {
    mint_periods?: MintPeriodAmino[];
    reveal_time?: string;
}
export interface BlindBoxConfigAminoMsg {
    type: "/likechain.likenft.v1.BlindBoxConfig";
    value: BlindBoxConfigAmino;
}
export interface BlindBoxConfigSDKType {
    mint_periods: MintPeriodSDKType[];
    reveal_time: TimestampSDKType;
}
export interface BlindBoxState {
    contentCount: bigint;
    toBeRevealed: boolean;
}
export interface BlindBoxStateProtoMsg {
    typeUrl: "/likechain.likenft.v1.BlindBoxState";
    value: Uint8Array;
}
export interface BlindBoxStateAmino {
    content_count?: string;
    to_be_revealed?: boolean;
}
export interface BlindBoxStateAminoMsg {
    type: "/likechain.likenft.v1.BlindBoxState";
    value: BlindBoxStateAmino;
}
export interface BlindBoxStateSDKType {
    content_count: bigint;
    to_be_revealed: boolean;
}
export declare const ClassData: {
    typeUrl: string;
    encode(message: ClassData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassData;
    fromPartial(object: Partial<ClassData>): ClassData;
    fromAmino(object: ClassDataAmino): ClassData;
    toAmino(message: ClassData): ClassDataAmino;
    fromAminoMsg(object: ClassDataAminoMsg): ClassData;
    fromProtoMsg(message: ClassDataProtoMsg): ClassData;
    toProto(message: ClassData): Uint8Array;
    toProtoMsg(message: ClassData): ClassDataProtoMsg;
};
export declare const ClassParent: {
    typeUrl: string;
    encode(message: ClassParent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassParent;
    fromPartial(object: Partial<ClassParent>): ClassParent;
    fromAmino(object: ClassParentAmino): ClassParent;
    toAmino(message: ClassParent): ClassParentAmino;
    fromAminoMsg(object: ClassParentAminoMsg): ClassParent;
    fromProtoMsg(message: ClassParentProtoMsg): ClassParent;
    toProto(message: ClassParent): Uint8Array;
    toProtoMsg(message: ClassParent): ClassParentProtoMsg;
};
export declare const MintPeriod: {
    typeUrl: string;
    encode(message: MintPeriod, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MintPeriod;
    fromPartial(object: Partial<MintPeriod>): MintPeriod;
    fromAmino(object: MintPeriodAmino): MintPeriod;
    toAmino(message: MintPeriod): MintPeriodAmino;
    fromAminoMsg(object: MintPeriodAminoMsg): MintPeriod;
    fromProtoMsg(message: MintPeriodProtoMsg): MintPeriod;
    toProto(message: MintPeriod): Uint8Array;
    toProtoMsg(message: MintPeriod): MintPeriodProtoMsg;
};
export declare const ClassConfig: {
    typeUrl: string;
    encode(message: ClassConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassConfig;
    fromPartial(object: Partial<ClassConfig>): ClassConfig;
    fromAmino(object: ClassConfigAmino): ClassConfig;
    toAmino(message: ClassConfig): ClassConfigAmino;
    fromAminoMsg(object: ClassConfigAminoMsg): ClassConfig;
    fromProtoMsg(message: ClassConfigProtoMsg): ClassConfig;
    toProto(message: ClassConfig): Uint8Array;
    toProtoMsg(message: ClassConfig): ClassConfigProtoMsg;
};
export declare const BlindBoxConfig: {
    typeUrl: string;
    encode(message: BlindBoxConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlindBoxConfig;
    fromPartial(object: Partial<BlindBoxConfig>): BlindBoxConfig;
    fromAmino(object: BlindBoxConfigAmino): BlindBoxConfig;
    toAmino(message: BlindBoxConfig): BlindBoxConfigAmino;
    fromAminoMsg(object: BlindBoxConfigAminoMsg): BlindBoxConfig;
    fromProtoMsg(message: BlindBoxConfigProtoMsg): BlindBoxConfig;
    toProto(message: BlindBoxConfig): Uint8Array;
    toProtoMsg(message: BlindBoxConfig): BlindBoxConfigProtoMsg;
};
export declare const BlindBoxState: {
    typeUrl: string;
    encode(message: BlindBoxState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlindBoxState;
    fromPartial(object: Partial<BlindBoxState>): BlindBoxState;
    fromAmino(object: BlindBoxStateAmino): BlindBoxState;
    toAmino(message: BlindBoxState): BlindBoxStateAmino;
    fromAminoMsg(object: BlindBoxStateAminoMsg): BlindBoxState;
    fromProtoMsg(message: BlindBoxStateProtoMsg): BlindBoxState;
    toProto(message: BlindBoxState): Uint8Array;
    toProtoMsg(message: BlindBoxState): BlindBoxStateProtoMsg;
};
