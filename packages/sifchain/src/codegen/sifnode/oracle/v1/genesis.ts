import { DBProphecy, DBProphecyAmino, DBProphecySDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  addressWhitelist: string[];
  adminAddress: string;
  prophecies: DBProphecy[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sifnode.oracle.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  address_whitelist?: string[];
  admin_address?: string;
  prophecies?: DBProphecyAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sifnode.oracle.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  address_whitelist: string[];
  admin_address: string;
  prophecies: DBProphecySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    addressWhitelist: [],
    adminAddress: "",
    prophecies: []
  };
}
export const GenesisState = {
  typeUrl: "/sifnode.oracle.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addressWhitelist) {
      writer.uint32(10).string(v!);
    }
    if (message.adminAddress !== "") {
      writer.uint32(18).string(message.adminAddress);
    }
    for (const v of message.prophecies) {
      DBProphecy.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      addressWhitelist: Array.isArray(object?.addressWhitelist) ? object.addressWhitelist.map((e: any) => String(e)) : [],
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
      prophecies: Array.isArray(object?.prophecies) ? object.prophecies.map((e: any) => DBProphecy.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.addressWhitelist = object.addressWhitelist?.map(e => e) || [];
    message.adminAddress = object.adminAddress ?? "";
    message.prophecies = object.prophecies?.map(e => DBProphecy.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.addressWhitelist = object.address_whitelist?.map(e => e) || [];
    if (object.admin_address !== undefined && object.admin_address !== null) {
      message.adminAddress = object.admin_address;
    }
    message.prophecies = object.prophecies?.map(e => DBProphecy.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.addressWhitelist) {
      obj.address_whitelist = message.addressWhitelist.map(e => e);
    } else {
      obj.address_whitelist = message.addressWhitelist;
    }
    obj.admin_address = message.adminAddress === "" ? undefined : message.adminAddress;
    if (message.prophecies) {
      obj.prophecies = message.prophecies.map(e => e ? DBProphecy.toAmino(e) : undefined);
    } else {
      obj.prophecies = message.prophecies;
    }
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
      typeUrl: "/sifnode.oracle.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};