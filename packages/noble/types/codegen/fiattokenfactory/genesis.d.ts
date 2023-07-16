import { Params, ParamsSDKType } from "./params";
import { Blacklisted, BlacklistedSDKType } from "./blacklisted";
import { Paused, PausedSDKType } from "./paused";
import { MasterMinter, MasterMinterSDKType } from "./master_minter";
import { Minters, MintersSDKType } from "./minters";
import { Pauser, PauserSDKType } from "./pauser";
import { Blacklister, BlacklisterSDKType } from "./blacklister";
import { Owner, OwnerSDKType } from "./owner";
import { MinterController, MinterControllerSDKType } from "./minter_controller";
import { MintingDenom, MintingDenomSDKType } from "./minting_denom";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the fiattokenfactory module's genesis state. */
export interface GenesisState {
    params?: Params;
    blacklistedList: Blacklisted[];
    paused?: Paused;
    masterMinter?: MasterMinter;
    mintersList: Minters[];
    pauser?: Pauser;
    blacklister?: Blacklister;
    owner?: Owner;
    minterControllerList: MinterController[];
    mintingDenom?: MintingDenom;
}
/** GenesisState defines the fiattokenfactory module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    blacklistedList: BlacklistedSDKType[];
    paused?: PausedSDKType;
    masterMinter?: MasterMinterSDKType;
    mintersList: MintersSDKType[];
    pauser?: PauserSDKType;
    blacklister?: BlacklisterSDKType;
    owner?: OwnerSDKType;
    minterControllerList: MinterControllerSDKType[];
    mintingDenom?: MintingDenomSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
