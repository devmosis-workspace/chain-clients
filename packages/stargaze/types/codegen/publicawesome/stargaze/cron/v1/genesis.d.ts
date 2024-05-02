import { Params, ParamsAmino, ParamsSDKType } from "./cron";
import { BinaryWriter } from "../../../../binary";
/** GenesisState defines the cron module's genesis state. */
export interface GenesisState {
    /**
     * List of all the contracts that have been given the privilege status via
     * governance. They can set up hooks to abci.EndBlocker
     */
    privilegedContractAddresses: string[];
    /** Module params */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateAmino {
    /**
     * List of all the contracts that have been given the privilege status via
     * governance. They can set up hooks to abci.EndBlocker
     */
    privileged_contract_addresses?: string[];
    /** Module params */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateSDKType {
    privileged_contract_addresses: string[];
    params: ParamsSDKType;
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
