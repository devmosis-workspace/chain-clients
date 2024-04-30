import { Params as Params1 } from "./params";
import { ParamsAmino as Params1Amino } from "./params";
import { ParamsSDKType as Params1SDKType } from "./params";
import { Params as Params2 } from "./osmosis/params";
import { ParamsAmino as Params2Amino } from "./osmosis/params";
import { ParamsSDKType as Params2SDKType } from "./osmosis/params";
import { BinaryWriter } from "../binary";
/** GenesisState defines the qoracle module's genesis state. */
export interface GenesisState {
    params: Params1;
    osmosisGenesisState: OsmosisGenesisState;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the qoracle module's genesis state. */
export interface GenesisStateAmino {
    params?: Params1Amino;
    osmosis_genesis_state?: OsmosisGenesisStateAmino;
}
export interface GenesisStateAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the qoracle module's genesis state. */
export interface GenesisStateSDKType {
    params: Params1SDKType;
    osmosis_genesis_state: OsmosisGenesisStateSDKType;
}
/** OsmosisGenesisState defines the qoracle osmosis submodule's genesis state. */
export interface OsmosisGenesisState {
    port: string;
    params: Params2;
}
export interface OsmosisGenesisStateProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.OsmosisGenesisState";
    value: Uint8Array;
}
/** OsmosisGenesisState defines the qoracle osmosis submodule's genesis state. */
export interface OsmosisGenesisStateAmino {
    port?: string;
    params?: Params2Amino;
}
export interface OsmosisGenesisStateAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.OsmosisGenesisState";
    value: OsmosisGenesisStateAmino;
}
/** OsmosisGenesisState defines the qoracle osmosis submodule's genesis state. */
export interface OsmosisGenesisStateSDKType {
    port: string;
    params: Params2SDKType;
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
export declare const OsmosisGenesisState: {
    typeUrl: string;
    encode(message: OsmosisGenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OsmosisGenesisState;
    fromPartial(object: Partial<OsmosisGenesisState>): OsmosisGenesisState;
    fromAmino(object: OsmosisGenesisStateAmino): OsmosisGenesisState;
    toAmino(message: OsmosisGenesisState): OsmosisGenesisStateAmino;
    fromAminoMsg(object: OsmosisGenesisStateAminoMsg): OsmosisGenesisState;
    fromProtoMsg(message: OsmosisGenesisStateProtoMsg): OsmosisGenesisState;
    toProto(message: OsmosisGenesisState): Uint8Array;
    toProtoMsg(message: OsmosisGenesisState): OsmosisGenesisStateProtoMsg;
};
