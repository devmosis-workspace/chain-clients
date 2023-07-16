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
import { isSet } from "../helpers";
/** GenesisState defines the tokenfactory module's genesis state. */
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
/** GenesisState defines the tokenfactory module's genesis state. */
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
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    blacklistedList: [],
    paused: undefined,
    masterMinter: undefined,
    mintersList: [],
    pauser: undefined,
    blacklister: undefined,
    owner: undefined,
    minterControllerList: [],
    mintingDenom: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.blacklistedList) {
      Blacklisted.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.paused !== undefined) {
      Paused.encode(message.paused, writer.uint32(26).fork()).ldelim();
    }
    if (message.masterMinter !== undefined) {
      MasterMinter.encode(message.masterMinter, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.mintersList) {
      Minters.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.pauser !== undefined) {
      Pauser.encode(message.pauser, writer.uint32(50).fork()).ldelim();
    }
    if (message.blacklister !== undefined) {
      Blacklister.encode(message.blacklister, writer.uint32(58).fork()).ldelim();
    }
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.minterControllerList) {
      MinterController.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.mintingDenom !== undefined) {
      MintingDenom.encode(message.mintingDenom, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      blacklistedList: Array.isArray(object?.blacklistedList) ? object.blacklistedList.map((e: any) => Blacklisted.fromJSON(e)) : [],
      paused: isSet(object.paused) ? Paused.fromJSON(object.paused) : undefined,
      masterMinter: isSet(object.masterMinter) ? MasterMinter.fromJSON(object.masterMinter) : undefined,
      mintersList: Array.isArray(object?.mintersList) ? object.mintersList.map((e: any) => Minters.fromJSON(e)) : [],
      pauser: isSet(object.pauser) ? Pauser.fromJSON(object.pauser) : undefined,
      blacklister: isSet(object.blacklister) ? Blacklister.fromJSON(object.blacklister) : undefined,
      owner: isSet(object.owner) ? Owner.fromJSON(object.owner) : undefined,
      minterControllerList: Array.isArray(object?.minterControllerList) ? object.minterControllerList.map((e: any) => MinterController.fromJSON(e)) : [],
      mintingDenom: isSet(object.mintingDenom) ? MintingDenom.fromJSON(object.mintingDenom) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.blacklistedList = object.blacklistedList?.map(e => Blacklisted.fromPartial(e)) || [];
    message.paused = object.paused !== undefined && object.paused !== null ? Paused.fromPartial(object.paused) : undefined;
    message.masterMinter = object.masterMinter !== undefined && object.masterMinter !== null ? MasterMinter.fromPartial(object.masterMinter) : undefined;
    message.mintersList = object.mintersList?.map(e => Minters.fromPartial(e)) || [];
    message.pauser = object.pauser !== undefined && object.pauser !== null ? Pauser.fromPartial(object.pauser) : undefined;
    message.blacklister = object.blacklister !== undefined && object.blacklister !== null ? Blacklister.fromPartial(object.blacklister) : undefined;
    message.owner = object.owner !== undefined && object.owner !== null ? Owner.fromPartial(object.owner) : undefined;
    message.minterControllerList = object.minterControllerList?.map(e => MinterController.fromPartial(e)) || [];
    message.mintingDenom = object.mintingDenom !== undefined && object.mintingDenom !== null ? MintingDenom.fromPartial(object.mintingDenom) : undefined;
    return message;
  }
};