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
import { isSet } from "../helpers";
/** GenesisState defines the fiattokenfactory module's genesis state. */
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
  typeUrl: "/noble.fiattokenfactory.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the fiattokenfactory module's genesis state. */
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
  type: "/noble.fiattokenfactory.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the fiattokenfactory module's genesis state. */
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    blacklistedList: [],
    paused: Paused.fromPartial({}),
    masterMinter: MasterMinter.fromPartial({}),
    mintersList: [],
    pauser: Pauser.fromPartial({}),
    blacklister: Blacklister.fromPartial({}),
    owner: Owner.fromPartial({}),
    minterControllerList: [],
    mintingDenom: MintingDenom.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/noble.fiattokenfactory.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      blacklistedList: Array.isArray(object?.blacklistedList) ? object.blacklistedList.map((e: any) => Blacklisted.fromAmino(e)) : [],
      paused: object?.paused ? Paused.fromAmino(object.paused) : undefined,
      masterMinter: object?.masterMinter ? MasterMinter.fromAmino(object.masterMinter) : undefined,
      mintersList: Array.isArray(object?.mintersList) ? object.mintersList.map((e: any) => Minters.fromAmino(e)) : [],
      pauser: object?.pauser ? Pauser.fromAmino(object.pauser) : undefined,
      blacklister: object?.blacklister ? Blacklister.fromAmino(object.blacklister) : undefined,
      owner: object?.owner ? Owner.fromAmino(object.owner) : undefined,
      minterControllerList: Array.isArray(object?.minterControllerList) ? object.minterControllerList.map((e: any) => MinterController.fromAmino(e)) : [],
      mintingDenom: object?.mintingDenom ? MintingDenom.fromAmino(object.mintingDenom) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.blacklistedList) {
      obj.blacklistedList = message.blacklistedList.map(e => e ? Blacklisted.toAmino(e) : undefined);
    } else {
      obj.blacklistedList = [];
    }
    obj.paused = message.paused ? Paused.toAmino(message.paused) : undefined;
    obj.masterMinter = message.masterMinter ? MasterMinter.toAmino(message.masterMinter) : undefined;
    if (message.mintersList) {
      obj.mintersList = message.mintersList.map(e => e ? Minters.toAmino(e) : undefined);
    } else {
      obj.mintersList = [];
    }
    obj.pauser = message.pauser ? Pauser.toAmino(message.pauser) : undefined;
    obj.blacklister = message.blacklister ? Blacklister.toAmino(message.blacklister) : undefined;
    obj.owner = message.owner ? Owner.toAmino(message.owner) : undefined;
    if (message.minterControllerList) {
      obj.minterControllerList = message.minterControllerList.map(e => e ? MinterController.toAmino(e) : undefined);
    } else {
      obj.minterControllerList = [];
    }
    obj.mintingDenom = message.mintingDenom ? MintingDenom.toAmino(message.mintingDenom) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/noble.fiattokenfactory.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};