import { BinaryWriter } from "../binary";
/** Params defines the set of params for the distribution module. */
export interface Params {
    /** share is % of tx fees or rewards allocated to distribution_entities */
    share: string;
    /**
     * % of tx fees or rewards allocated to a set of global distribution entities
     * these shares must add up to 1
     */
    distributionEntities: DistributionEntity[];
    transferFeeBps: string;
    transferFeeMax: string;
    transferFeeDenom: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/noble.tariff.Params";
    value: Uint8Array;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsAmino {
    /** share is % of tx fees or rewards allocated to distribution_entities */
    share?: string;
    /**
     * % of tx fees or rewards allocated to a set of global distribution entities
     * these shares must add up to 1
     */
    distribution_entities?: DistributionEntityAmino[];
    transfer_fee_bps?: string;
    transfer_fee_max?: string;
    transfer_fee_denom?: string;
}
export interface ParamsAminoMsg {
    type: "/noble.tariff.Params";
    value: ParamsAmino;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsSDKType {
    share: string;
    distribution_entities: DistributionEntitySDKType[];
    transfer_fee_bps: string;
    transfer_fee_max: string;
    transfer_fee_denom: string;
}
/** DistributionEntity defines a distribution entity */
export interface DistributionEntity {
    address: string;
    share: string;
}
export interface DistributionEntityProtoMsg {
    typeUrl: "/noble.tariff.DistributionEntity";
    value: Uint8Array;
}
/** DistributionEntity defines a distribution entity */
export interface DistributionEntityAmino {
    address?: string;
    share?: string;
}
export interface DistributionEntityAminoMsg {
    type: "/noble.tariff.DistributionEntity";
    value: DistributionEntityAmino;
}
/** DistributionEntity defines a distribution entity */
export interface DistributionEntitySDKType {
    address: string;
    share: string;
}
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
export declare const DistributionEntity: {
    typeUrl: string;
    encode(message: DistributionEntity, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistributionEntity;
    fromPartial(object: Partial<DistributionEntity>): DistributionEntity;
    fromAmino(object: DistributionEntityAmino): DistributionEntity;
    toAmino(message: DistributionEntity): DistributionEntityAmino;
    fromAminoMsg(object: DistributionEntityAminoMsg): DistributionEntity;
    fromProtoMsg(message: DistributionEntityProtoMsg): DistributionEntity;
    toProto(message: DistributionEntity): Uint8Array;
    toProtoMsg(message: DistributionEntity): DistributionEntityProtoMsg;
};
