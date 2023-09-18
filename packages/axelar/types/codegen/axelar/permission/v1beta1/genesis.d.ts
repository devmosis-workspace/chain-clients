import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { LegacyAminoPubKey, LegacyAminoPubKeyAmino, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import { GovAccount, GovAccountAmino, GovAccountSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params: Params;
    governanceKey: LegacyAminoPubKey;
    govAccounts: GovAccount[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    governance_key?: LegacyAminoPubKeyAmino;
    gov_accounts: GovAccountAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/axelar.permission.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    governance_key: LegacyAminoPubKeySDKType;
    gov_accounts: GovAccountSDKType[];
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
