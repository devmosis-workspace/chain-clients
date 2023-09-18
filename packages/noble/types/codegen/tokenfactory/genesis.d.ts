import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Blacklisted, BlacklistedAmino, BlacklistedSDKType } from "./blacklisted";
import { Paused, PausedAmino, PausedSDKType } from "./paused";
import { MasterMinter, MasterMinterAmino, MasterMinterSDKType } from "./master_minter";
import { Minters, MintersAmino, MintersSDKType } from "./minters";
import { Pauser, PauserAmino, PauserSDKType } from "./pauser";
import { Blacklister, BlacklisterAmino, BlacklisterSDKType } from "./blacklister";
import { Owner, OwnerAmino, OwnerSDKType } from "./owner";
import { MinterController, MinterControllerAmino, MinterControllerSDKType } from "./minter_controller";
import { MintingDenom, MintingDenomAmino, MintingDenomSDKType } from "./minting_denom";
import { BinaryWriter } from "../binary";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    params: Params;
    blacklistedList: Blacklisted[];
    paused: Paused;
    masterMinter: MasterMinter;
    mintersList: Minters[];
    pauser: Pauser;
    blacklister: Blacklister;
    owner: Owner;
    minterControllerList: MinterController[];
    mintingDenom: MintingDenom;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/noble.tokenfactory.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    blacklistedList: BlacklistedAmino[];
    paused?: PausedAmino;
    masterMinter?: MasterMinterAmino;
    mintersList: MintersAmino[];
    pauser?: PauserAmino;
    blacklister?: BlacklisterAmino;
    owner?: OwnerAmino;
    minterControllerList: MinterControllerAmino[];
    mintingDenom?: MintingDenomAmino;
}
export interface GenesisStateAminoMsg {
    type: "/noble.tokenfactory.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    blacklistedList: BlacklistedSDKType[];
    paused: PausedSDKType;
    masterMinter: MasterMinterSDKType;
    mintersList: MintersSDKType[];
    pauser: PauserSDKType;
    blacklister: BlacklisterSDKType;
    owner: OwnerSDKType;
    minterControllerList: MinterControllerSDKType[];
    mintingDenom: MintingDenomSDKType;
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
