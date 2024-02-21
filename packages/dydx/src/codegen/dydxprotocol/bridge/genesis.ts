import { EventParams, EventParamsSDKType, ProposeParams, ProposeParamsSDKType, SafetyParams, SafetyParamsSDKType } from "./params";
import { BridgeEventInfo, BridgeEventInfoSDKType } from "./bridge_event_info";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the bridge module's genesis state. */
export interface GenesisState {
  /** The parameters of the module. */
  eventParams: EventParams;
  proposeParams: ProposeParams;
  safetyParams: SafetyParams;
  /**
   * Acknowledged event info that stores:
   * - the next event ID to be added to consensus.
   * - Ethereum block height of the most recently acknowledged bridge event.
   */
  acknowledgedEventInfo: BridgeEventInfo;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dydxprotocol.bridge.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the bridge module's genesis state. */
export interface GenesisStateSDKType {
  event_params: EventParamsSDKType;
  propose_params: ProposeParamsSDKType;
  safety_params: SafetyParamsSDKType;
  acknowledged_event_info: BridgeEventInfoSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    eventParams: EventParams.fromPartial({}),
    proposeParams: ProposeParams.fromPartial({}),
    safetyParams: SafetyParams.fromPartial({}),
    acknowledgedEventInfo: BridgeEventInfo.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/dydxprotocol.bridge.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventParams !== undefined) {
      EventParams.encode(message.eventParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposeParams !== undefined) {
      ProposeParams.encode(message.proposeParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.safetyParams !== undefined) {
      SafetyParams.encode(message.safetyParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.acknowledgedEventInfo !== undefined) {
      BridgeEventInfo.encode(message.acknowledgedEventInfo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      eventParams: isSet(object.eventParams) ? EventParams.fromJSON(object.eventParams) : undefined,
      proposeParams: isSet(object.proposeParams) ? ProposeParams.fromJSON(object.proposeParams) : undefined,
      safetyParams: isSet(object.safetyParams) ? SafetyParams.fromJSON(object.safetyParams) : undefined,
      acknowledgedEventInfo: isSet(object.acknowledgedEventInfo) ? BridgeEventInfo.fromJSON(object.acknowledgedEventInfo) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.eventParams = object.eventParams !== undefined && object.eventParams !== null ? EventParams.fromPartial(object.eventParams) : undefined;
    message.proposeParams = object.proposeParams !== undefined && object.proposeParams !== null ? ProposeParams.fromPartial(object.proposeParams) : undefined;
    message.safetyParams = object.safetyParams !== undefined && object.safetyParams !== null ? SafetyParams.fromPartial(object.safetyParams) : undefined;
    message.acknowledgedEventInfo = object.acknowledgedEventInfo !== undefined && object.acknowledgedEventInfo !== null ? BridgeEventInfo.fromPartial(object.acknowledgedEventInfo) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.event_params !== undefined && object.event_params !== null) {
      message.eventParams = EventParams.fromAmino(object.event_params);
    }
    if (object.propose_params !== undefined && object.propose_params !== null) {
      message.proposeParams = ProposeParams.fromAmino(object.propose_params);
    }
    if (object.safety_params !== undefined && object.safety_params !== null) {
      message.safetyParams = SafetyParams.fromAmino(object.safety_params);
    }
    if (object.acknowledged_event_info !== undefined && object.acknowledged_event_info !== null) {
      message.acknowledgedEventInfo = BridgeEventInfo.fromAmino(object.acknowledged_event_info);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.event_params = message.eventParams ? EventParams.toAmino(message.eventParams) : undefined;
    obj.propose_params = message.proposeParams ? ProposeParams.toAmino(message.proposeParams) : undefined;
    obj.safety_params = message.safetyParams ? SafetyParams.toAmino(message.safetyParams) : undefined;
    obj.acknowledged_event_info = message.acknowledgedEventInfo ? BridgeEventInfo.toAmino(message.acknowledgedEventInfo) : undefined;
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
      typeUrl: "/dydxprotocol.bridge.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};