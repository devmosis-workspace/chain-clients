import { Config, ConfigAmino, ConfigSDKType, Fees, FeesAmino, FeesSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfig {
    /** Signer is the address of the entity who is doing the transaction */
    signer: string;
    /** NewConfiguration contains the new configuration data */
    newConfiguration?: Config;
}
export interface MsgUpdateConfigProtoMsg {
    typeUrl: "/starnamed.x.configuration.v1beta1.MsgUpdateConfig";
    value: Uint8Array;
}
/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfigAmino {
    /** Signer is the address of the entity who is doing the transaction */
    signer: string;
    /** NewConfiguration contains the new configuration data */
    new_configuration?: ConfigAmino;
}
export interface MsgUpdateConfigAminoMsg {
    type: "/starnamed.x.configuration.v1beta1.MsgUpdateConfig";
    value: MsgUpdateConfigAmino;
}
/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfigSDKType {
    signer: string;
    new_configuration?: ConfigSDKType;
}
/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFees {
    fees: Fees;
    configurer: string;
}
export interface MsgUpdateFeesProtoMsg {
    typeUrl: "/starnamed.x.configuration.v1beta1.MsgUpdateFees";
    value: Uint8Array;
}
/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFeesAmino {
    fees?: FeesAmino;
    configurer: string;
}
export interface MsgUpdateFeesAminoMsg {
    type: "/starnamed.x.configuration.v1beta1.MsgUpdateFees";
    value: MsgUpdateFeesAmino;
}
/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFeesSDKType {
    fees: FeesSDKType;
    configurer: string;
}
export declare const MsgUpdateConfig: {
    typeUrl: string;
    encode(message: MsgUpdateConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateConfig;
    fromPartial(object: Partial<MsgUpdateConfig>): MsgUpdateConfig;
    fromAmino(object: MsgUpdateConfigAmino): MsgUpdateConfig;
    toAmino(message: MsgUpdateConfig): MsgUpdateConfigAmino;
    fromAminoMsg(object: MsgUpdateConfigAminoMsg): MsgUpdateConfig;
    fromProtoMsg(message: MsgUpdateConfigProtoMsg): MsgUpdateConfig;
    toProto(message: MsgUpdateConfig): Uint8Array;
    toProtoMsg(message: MsgUpdateConfig): MsgUpdateConfigProtoMsg;
};
export declare const MsgUpdateFees: {
    typeUrl: string;
    encode(message: MsgUpdateFees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateFees;
    fromPartial(object: Partial<MsgUpdateFees>): MsgUpdateFees;
    fromAmino(object: MsgUpdateFeesAmino): MsgUpdateFees;
    toAmino(message: MsgUpdateFees): MsgUpdateFeesAmino;
    fromAminoMsg(object: MsgUpdateFeesAminoMsg): MsgUpdateFees;
    fromProtoMsg(message: MsgUpdateFeesProtoMsg): MsgUpdateFees;
    toProto(message: MsgUpdateFees): Uint8Array;
    toProtoMsg(message: MsgUpdateFees): MsgUpdateFeesProtoMsg;
};
