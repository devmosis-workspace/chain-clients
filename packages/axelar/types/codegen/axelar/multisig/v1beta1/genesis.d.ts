import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { KeygenSession, KeygenSessionAmino, KeygenSessionSDKType, SigningSession, SigningSessionAmino, SigningSessionSDKType, Key, KeyAmino, KeySDKType, KeyEpoch, KeyEpochAmino, KeyEpochSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params: Params;
    keygenSessions: KeygenSession[];
    signingSessions: SigningSession[];
    keys: Key[];
    keyEpochs: KeyEpoch[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    keygen_sessions?: KeygenSessionAmino[];
    signing_sessions?: SigningSessionAmino[];
    keys?: KeyAmino[];
    key_epochs?: KeyEpochAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/axelar.multisig.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    keygen_sessions: KeygenSessionSDKType[];
    signing_sessions: SigningSessionSDKType[];
    keys: KeySDKType[];
    key_epochs: KeyEpochSDKType[];
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
