import { Authority, AuthorityAmino, AuthoritySDKType, TeamVestingAccount, TeamVestingAccountAmino, TeamVestingAccountSDKType } from "./team";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the team module's genesis state. */
export interface GenesisState {
    /** authority ... */
    authority: Authority;
    /** account_list ... */
    accountList: TeamVestingAccount[];
    /** account_count ... */
    accountCount: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kyve.team.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the team module's genesis state. */
export interface GenesisStateAmino {
    /** authority ... */
    authority?: AuthorityAmino;
    /** account_list ... */
    account_list: TeamVestingAccountAmino[];
    /** account_count ... */
    account_count: string;
}
export interface GenesisStateAminoMsg {
    type: "/kyve.team.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the team module's genesis state. */
export interface GenesisStateSDKType {
    authority: AuthoritySDKType;
    account_list: TeamVestingAccountSDKType[];
    account_count: bigint;
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
