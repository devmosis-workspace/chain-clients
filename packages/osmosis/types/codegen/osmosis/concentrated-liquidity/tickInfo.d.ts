import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
export declare const TickInfo: {
    encode(message: TickInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TickInfo;
    fromPartial(object: Partial<TickInfo>): TickInfo;
};
export declare const UptimeTrackers: {
    encode(message: UptimeTrackers, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UptimeTrackers;
    fromPartial(object: Partial<UptimeTrackers>): UptimeTrackers;
};
export declare const UptimeTracker: {
    encode(message: UptimeTracker, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UptimeTracker;
    fromPartial(object: Partial<UptimeTracker>): UptimeTracker;
};
