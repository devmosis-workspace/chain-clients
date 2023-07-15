import { Params, ParamsSDKType } from "./params";
import { HostZone, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerSDKType } from "./epoch_tracker";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisState {
  params?: Params;
  portId: string;
  /** list of zones that are registered by the protocol */
  hostZoneList: HostZone[];
  epochTrackerList: EpochTracker[];
}
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  port_id: string;
  host_zone_list: HostZoneSDKType[];
  epoch_tracker_list: EpochTrackerSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    hostZoneList: [],
    epochTrackerList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};