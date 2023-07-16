import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines the paramaters of the module. */
    params?: Params;
    factoryDenoms: GenesisDenom[];
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    factory_denoms: GenesisDenomSDKType[];
}
export interface GenesisDenom {
    denom: string;
    authorityMetadata?: DenomAuthorityMetadata;
}
export interface GenesisDenomSDKType {
    denom: string;
    authority_metadata?: DenomAuthorityMetadataSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const GenesisDenom: {
    encode(message: GenesisDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisDenom;
    fromPartial(object: Partial<GenesisDenom>): GenesisDenom;
};
