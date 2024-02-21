import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Failure, FailureAmino, FailureSDKType } from "./failure";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisState {
    params: Params;
    /** List of the contract failures */
    failuresList: Failure[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/neutron.contractmanager.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    /** List of the contract failures */
    failures_list?: FailureAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/neutron.contractmanager.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    failures_list: FailureSDKType[];
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
