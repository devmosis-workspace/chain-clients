import { Pause, PauseAmino, PauseSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState for ethbridge */
export interface GenesisState {
    cethReceiveAccount: string;
    peggyTokens: string[];
    blacklist: string[];
    pause?: Pause;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState for ethbridge */
export interface GenesisStateAmino {
    ceth_receive_account?: string;
    peggy_tokens?: string[];
    blacklist?: string[];
    pause?: PauseAmino;
}
export interface GenesisStateAminoMsg {
    type: "/sifnode.ethbridge.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState for ethbridge */
export interface GenesisStateSDKType {
    ceth_receive_account: string;
    peggy_tokens: string[];
    blacklist: string[];
    pause?: PauseSDKType;
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
