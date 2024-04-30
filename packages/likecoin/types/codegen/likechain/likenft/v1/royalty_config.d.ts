import { BinaryWriter } from "../../../binary";
export interface RoyaltyConfigByClass {
    classId: string;
    royaltyConfig: RoyaltyConfig;
}
export interface RoyaltyConfigByClassProtoMsg {
    typeUrl: "/likechain.likenft.v1.RoyaltyConfigByClass";
    value: Uint8Array;
}
export interface RoyaltyConfigByClassAmino {
    class_id?: string;
    royalty_config?: RoyaltyConfigAmino;
}
export interface RoyaltyConfigByClassAminoMsg {
    type: "/likechain.likenft.v1.RoyaltyConfigByClass";
    value: RoyaltyConfigByClassAmino;
}
export interface RoyaltyConfigByClassSDKType {
    class_id: string;
    royalty_config: RoyaltyConfigSDKType;
}
export interface RoyaltyConfig {
    rateBasisPoints: bigint;
    stakeholders: RoyaltyStakeholder[];
}
export interface RoyaltyConfigProtoMsg {
    typeUrl: "/likechain.likenft.v1.RoyaltyConfig";
    value: Uint8Array;
}
export interface RoyaltyConfigAmino {
    rate_basis_points?: string;
    stakeholders?: RoyaltyStakeholderAmino[];
}
export interface RoyaltyConfigAminoMsg {
    type: "/likechain.likenft.v1.RoyaltyConfig";
    value: RoyaltyConfigAmino;
}
export interface RoyaltyConfigSDKType {
    rate_basis_points: bigint;
    stakeholders: RoyaltyStakeholderSDKType[];
}
export interface RoyaltyStakeholder {
    account: Uint8Array;
    weight: bigint;
}
export interface RoyaltyStakeholderProtoMsg {
    typeUrl: "/likechain.likenft.v1.RoyaltyStakeholder";
    value: Uint8Array;
}
export interface RoyaltyStakeholderAmino {
    account?: string;
    weight?: string;
}
export interface RoyaltyStakeholderAminoMsg {
    type: "/likechain.likenft.v1.RoyaltyStakeholder";
    value: RoyaltyStakeholderAmino;
}
export interface RoyaltyStakeholderSDKType {
    account: Uint8Array;
    weight: bigint;
}
export interface RoyaltyConfigInput {
    rateBasisPoints: bigint;
    stakeholders: RoyaltyStakeholderInput[];
}
export interface RoyaltyConfigInputProtoMsg {
    typeUrl: "/likechain.likenft.v1.RoyaltyConfigInput";
    value: Uint8Array;
}
export interface RoyaltyConfigInputAmino {
    rate_basis_points?: string;
    stakeholders?: RoyaltyStakeholderInputAmino[];
}
export interface RoyaltyConfigInputAminoMsg {
    type: "/likechain.likenft.v1.RoyaltyConfigInput";
    value: RoyaltyConfigInputAmino;
}
export interface RoyaltyConfigInputSDKType {
    rate_basis_points: bigint;
    stakeholders: RoyaltyStakeholderInputSDKType[];
}
export interface RoyaltyStakeholderInput {
    account: string;
    weight: bigint;
}
export interface RoyaltyStakeholderInputProtoMsg {
    typeUrl: "/likechain.likenft.v1.RoyaltyStakeholderInput";
    value: Uint8Array;
}
export interface RoyaltyStakeholderInputAmino {
    account?: string;
    weight?: string;
}
export interface RoyaltyStakeholderInputAminoMsg {
    type: "/likechain.likenft.v1.RoyaltyStakeholderInput";
    value: RoyaltyStakeholderInputAmino;
}
export interface RoyaltyStakeholderInputSDKType {
    account: string;
    weight: bigint;
}
export declare const RoyaltyConfigByClass: {
    typeUrl: string;
    encode(message: RoyaltyConfigByClass, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RoyaltyConfigByClass;
    fromPartial(object: Partial<RoyaltyConfigByClass>): RoyaltyConfigByClass;
    fromAmino(object: RoyaltyConfigByClassAmino): RoyaltyConfigByClass;
    toAmino(message: RoyaltyConfigByClass): RoyaltyConfigByClassAmino;
    fromAminoMsg(object: RoyaltyConfigByClassAminoMsg): RoyaltyConfigByClass;
    fromProtoMsg(message: RoyaltyConfigByClassProtoMsg): RoyaltyConfigByClass;
    toProto(message: RoyaltyConfigByClass): Uint8Array;
    toProtoMsg(message: RoyaltyConfigByClass): RoyaltyConfigByClassProtoMsg;
};
export declare const RoyaltyConfig: {
    typeUrl: string;
    encode(message: RoyaltyConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RoyaltyConfig;
    fromPartial(object: Partial<RoyaltyConfig>): RoyaltyConfig;
    fromAmino(object: RoyaltyConfigAmino): RoyaltyConfig;
    toAmino(message: RoyaltyConfig): RoyaltyConfigAmino;
    fromAminoMsg(object: RoyaltyConfigAminoMsg): RoyaltyConfig;
    fromProtoMsg(message: RoyaltyConfigProtoMsg): RoyaltyConfig;
    toProto(message: RoyaltyConfig): Uint8Array;
    toProtoMsg(message: RoyaltyConfig): RoyaltyConfigProtoMsg;
};
export declare const RoyaltyStakeholder: {
    typeUrl: string;
    encode(message: RoyaltyStakeholder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RoyaltyStakeholder;
    fromPartial(object: Partial<RoyaltyStakeholder>): RoyaltyStakeholder;
    fromAmino(object: RoyaltyStakeholderAmino): RoyaltyStakeholder;
    toAmino(message: RoyaltyStakeholder): RoyaltyStakeholderAmino;
    fromAminoMsg(object: RoyaltyStakeholderAminoMsg): RoyaltyStakeholder;
    fromProtoMsg(message: RoyaltyStakeholderProtoMsg): RoyaltyStakeholder;
    toProto(message: RoyaltyStakeholder): Uint8Array;
    toProtoMsg(message: RoyaltyStakeholder): RoyaltyStakeholderProtoMsg;
};
export declare const RoyaltyConfigInput: {
    typeUrl: string;
    encode(message: RoyaltyConfigInput, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RoyaltyConfigInput;
    fromPartial(object: Partial<RoyaltyConfigInput>): RoyaltyConfigInput;
    fromAmino(object: RoyaltyConfigInputAmino): RoyaltyConfigInput;
    toAmino(message: RoyaltyConfigInput): RoyaltyConfigInputAmino;
    fromAminoMsg(object: RoyaltyConfigInputAminoMsg): RoyaltyConfigInput;
    fromProtoMsg(message: RoyaltyConfigInputProtoMsg): RoyaltyConfigInput;
    toProto(message: RoyaltyConfigInput): Uint8Array;
    toProtoMsg(message: RoyaltyConfigInput): RoyaltyConfigInputProtoMsg;
};
export declare const RoyaltyStakeholderInput: {
    typeUrl: string;
    encode(message: RoyaltyStakeholderInput, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RoyaltyStakeholderInput;
    fromPartial(object: Partial<RoyaltyStakeholderInput>): RoyaltyStakeholderInput;
    fromAmino(object: RoyaltyStakeholderInputAmino): RoyaltyStakeholderInput;
    toAmino(message: RoyaltyStakeholderInput): RoyaltyStakeholderInputAmino;
    fromAminoMsg(object: RoyaltyStakeholderInputAminoMsg): RoyaltyStakeholderInput;
    fromProtoMsg(message: RoyaltyStakeholderInputProtoMsg): RoyaltyStakeholderInput;
    toProto(message: RoyaltyStakeholderInput): Uint8Array;
    toProtoMsg(message: RoyaltyStakeholderInput): RoyaltyStakeholderInputProtoMsg;
};
