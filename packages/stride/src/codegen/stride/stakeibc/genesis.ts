import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { HostZone, HostZoneAmino, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerAmino, EpochTrackerSDKType } from "./epoch_tracker";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisState {
  params: Params;
  portId: string;
  /** list of zones that are registered by the protocol */
  hostZoneList: HostZone[];
  epochTrackerList: EpochTracker[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.stakeibc.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  port_id: string;
  /** list of zones that are registered by the protocol */
  host_zone_list: HostZoneAmino[];
  epoch_tracker_list: EpochTrackerAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.stakeibc.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  port_id: string;
  host_zone_list: HostZoneSDKType[];
  epoch_tracker_list: EpochTrackerSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portId: "",
    hostZoneList: [],
    epochTrackerList: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.stakeibc.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.hostZoneList) {
      HostZone.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.epochTrackerList) {
      EpochTracker.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      hostZoneList: Array.isArray(object?.hostZoneList) ? object.hostZoneList.map((e: any) => HostZone.fromJSON(e)) : [],
      epochTrackerList: Array.isArray(object?.epochTrackerList) ? object.epochTrackerList.map((e: any) => EpochTracker.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? "";
    message.hostZoneList = object.hostZoneList?.map(e => HostZone.fromPartial(e)) || [];
    message.epochTrackerList = object.epochTrackerList?.map(e => EpochTracker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      portId: object.port_id,
      hostZoneList: Array.isArray(object?.host_zone_list) ? object.host_zone_list.map((e: any) => HostZone.fromAmino(e)) : [],
      epochTrackerList: Array.isArray(object?.epoch_tracker_list) ? object.epoch_tracker_list.map((e: any) => EpochTracker.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.port_id = message.portId;
    if (message.hostZoneList) {
      obj.host_zone_list = message.hostZoneList.map(e => e ? HostZone.toAmino(e) : undefined);
    } else {
      obj.host_zone_list = [];
    }
    if (message.epochTrackerList) {
      obj.epoch_tracker_list = message.epochTrackerList.map(e => e ? EpochTracker.toAmino(e) : undefined);
    } else {
      obj.epoch_tracker_list = [];
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
      typeUrl: "/stride.stakeibc.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};