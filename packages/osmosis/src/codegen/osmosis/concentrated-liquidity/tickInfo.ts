import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface TickInfo {
  liquidityGross: string;
  liquidityNet: string;
  spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
  /**
   * uptime_trackers is a container encapsulating the uptime trackers.
   * We use a container instead of a "repeated UptimeTracker" directly
   * because we need the ability to serialize and deserialize the
   * container easily for events when crossing a tick.
   */
  uptimeTrackers?: UptimeTrackers;
}
export interface TickInfoSDKType {
  liquidity_gross: string;
  liquidity_net: string;
  spread_reward_growth_opposite_direction_of_last_traversal: DecCoinSDKType[];
  uptime_trackers?: UptimeTrackersSDKType;
}
export interface UptimeTrackers {
  list: UptimeTracker[];
}
export interface UptimeTrackersSDKType {
  list: UptimeTrackerSDKType[];
}
export interface UptimeTracker {
  uptimeGrowthOutside: DecCoin[];
}
export interface UptimeTrackerSDKType {
  uptime_growth_outside: DecCoinSDKType[];
}
function createBaseTickInfo(): TickInfo {
  return {
    liquidityGross: "",
    liquidityNet: "",
    spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
    uptimeTrackers: undefined
  };
}
export const TickInfo = {
  encode(message: TickInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidityGross !== "") {
      writer.uint32(10).string(message.liquidityGross);
    }
    if (message.liquidityNet !== "") {
      writer.uint32(18).string(message.liquidityNet);
    }
    for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.uptimeTrackers !== undefined) {
      UptimeTrackers.encode(message.uptimeTrackers, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TickInfo {
    return {
      liquidityGross: isSet(object.liquidityGross) ? String(object.liquidityGross) : "",
      liquidityNet: isSet(object.liquidityNet) ? String(object.liquidityNet) : "",
      spreadRewardGrowthOppositeDirectionOfLastTraversal: Array.isArray(object?.spreadRewardGrowthOppositeDirectionOfLastTraversal) ? object.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e: any) => DecCoin.fromJSON(e)) : [],
      uptimeTrackers: isSet(object.uptimeTrackers) ? UptimeTrackers.fromJSON(object.uptimeTrackers) : undefined
    };
  },
  fromPartial(object: Partial<TickInfo>): TickInfo {
    const message = createBaseTickInfo();
    message.liquidityGross = object.liquidityGross ?? "";
    message.liquidityNet = object.liquidityNet ?? "";
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal = object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map(e => DecCoin.fromPartial(e)) || [];
    message.uptimeTrackers = object.uptimeTrackers !== undefined && object.uptimeTrackers !== null ? UptimeTrackers.fromPartial(object.uptimeTrackers) : undefined;
    return message;
  }
};
function createBaseUptimeTrackers(): UptimeTrackers {
  return {
    list: []
  };
}
export const UptimeTrackers = {
  encode(message: UptimeTrackers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      UptimeTracker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UptimeTrackers {
    return {
      list: Array.isArray(object?.list) ? object.list.map((e: any) => UptimeTracker.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UptimeTrackers>): UptimeTrackers {
    const message = createBaseUptimeTrackers();
    message.list = object.list?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  }
};
function createBaseUptimeTracker(): UptimeTracker {
  return {
    uptimeGrowthOutside: []
  };
}
export const UptimeTracker = {
  encode(message: UptimeTracker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uptimeGrowthOutside) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UptimeTracker {
    return {
      uptimeGrowthOutside: Array.isArray(object?.uptimeGrowthOutside) ? object.uptimeGrowthOutside.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UptimeTracker>): UptimeTracker {
    const message = createBaseUptimeTracker();
    message.uptimeGrowthOutside = object.uptimeGrowthOutside?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};