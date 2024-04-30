import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines the paramaters of the module. */
    params: Params;
    factoryDenoms: GenesisDenom[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.tokenfactory.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateAmino {
    /** params defines the paramaters of the module. */
    params?: ParamsAmino;
    factory_denoms?: GenesisDenomAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quasarlabs.quasarnode.tokenfactory.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    factory_denoms: GenesisDenomSDKType[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
    denom: string;
    authorityMetadata: DenomAuthorityMetadata;
}
export interface GenesisDenomProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.tokenfactory.v1beta1.GenesisDenom";
    value: Uint8Array;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomAmino {
    denom?: string;
    authority_metadata?: DenomAuthorityMetadataAmino;
}
export interface GenesisDenomAminoMsg {
    type: "/quasarlabs.quasarnode.tokenfactory.v1beta1.GenesisDenom";
    value: GenesisDenomAmino;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomSDKType {
    denom: string;
    authority_metadata: DenomAuthorityMetadataSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GenesisDenom: {
    typeUrl: string;
    encode(message: GenesisDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisDenom;
    fromPartial(object: Partial<GenesisDenom>): GenesisDenom;
    fromAmino(object: GenesisDenomAmino): GenesisDenom;
    toAmino(message: GenesisDenom): GenesisDenomAmino;
    fromAminoMsg(object: GenesisDenomAminoMsg): GenesisDenom;
    fromProtoMsg(message: GenesisDenomProtoMsg): GenesisDenom;
    toProto(message: GenesisDenom): Uint8Array;
    toProtoMsg(message: GenesisDenom): GenesisDenomProtoMsg;
};
