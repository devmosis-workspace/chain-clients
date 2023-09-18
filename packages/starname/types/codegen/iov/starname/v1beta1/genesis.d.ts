import { Domain, DomainAmino, DomainSDKType, Account, AccountAmino, AccountSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState - genesis state of x/starname */
export interface GenesisState {
    domains: Domain[];
    accounts: Account[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - genesis state of x/starname */
export interface GenesisStateAmino {
    domains: DomainAmino[];
    accounts: AccountAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/starnamed.x.starname.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/starname */
export interface GenesisStateSDKType {
    domains: DomainSDKType[];
    accounts: AccountSDKType[];
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
