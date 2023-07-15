import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
  /**
   * authorized_tick_spacing is an array of uint64s that represents the tick
   * spacing values concentrated-liquidity pools can be created with. For
   * example, an authorized_tick_spacing of [1, 10, 30] allows for pools
   * to be created with tick spacing of 1, 10, or 30.
   */
  authorizedTickSpacing: Long[];
  authorizedSpreadFactors: string[];
  /**
   * balancer_shares_reward_discount is the rate by which incentives flowing
   * from CL to Balancer pools will be discounted to encourage LPs to migrate.
   * e.g. a rate of 0.05 means Balancer LPs get 5% less incentives than full
   * range CL LPs.
   * This field can range from (0,1]. If set to 1, it indicates that all
   * incentives stay at cl pool.
   */
  balancerSharesRewardDiscount: string;
  /**
   * authorized_quote_denoms is a list of quote denoms that can be used as
   * token1 when creating a pool. We limit the quote assets to a small set for
   * the purposes of having convinient price increments stemming from tick to
   * price conversion. These increments are in a human readable magnitude only
   * for token1 as a quote. For limit orders in the future, this will be a
   * desirable property in terms of UX as to allow users to set limit orders at
   * prices in terms of token1 (quote asset) that are easy to reason about.
   */
  authorizedQuoteDenoms: string[];
  authorizedUptimes: Duration[];
  /**
   * is_permissionless_pool_creation_enabled is a boolean that determines if
   * concentrated liquidity pools can be created via message. At launch,
   * we consider allowing only governance to create pools, and then later
   * allowing permissionless pool creation by switching this flag to true
   * with a governance proposal.
   */
  isPermissionlessPoolCreationEnabled: boolean;
}
export interface ParamsSDKType {
  authorized_tick_spacing: Long[];
  authorized_spread_factors: string[];
  balancer_shares_reward_discount: string;
  authorized_quote_denoms: string[];
  authorized_uptimes: DurationSDKType[];
  is_permissionless_pool_creation_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    authorizedTickSpacing: [],
    authorizedSpreadFactors: [],
    balancerSharesRewardDiscount: "",
    authorizedQuoteDenoms: [],
    authorizedUptimes: [],
    isPermissionlessPoolCreationEnabled: false
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.authorizedTickSpacing) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.authorizedSpreadFactors) {
      writer.uint32(18).string(v!);
    }
    if (message.balancerSharesRewardDiscount !== "") {
      writer.uint32(26).string(message.balancerSharesRewardDiscount);
    }
    for (const v of message.authorizedQuoteDenoms) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.authorizedUptimes) {
      Duration.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.isPermissionlessPoolCreationEnabled === true) {
      writer.uint32(48).bool(message.isPermissionlessPoolCreationEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      authorizedTickSpacing: Array.isArray(object?.authorizedTickSpacing) ? object.authorizedTickSpacing.map((e: any) => Long.fromValue(e)) : [],
      authorizedSpreadFactors: Array.isArray(object?.authorizedSpreadFactors) ? object.authorizedSpreadFactors.map((e: any) => String(e)) : [],
      balancerSharesRewardDiscount: isSet(object.balancerSharesRewardDiscount) ? String(object.balancerSharesRewardDiscount) : "",
      authorizedQuoteDenoms: Array.isArray(object?.authorizedQuoteDenoms) ? object.authorizedQuoteDenoms.map((e: any) => String(e)) : [],
      authorizedUptimes: Array.isArray(object?.authorizedUptimes) ? object.authorizedUptimes.map((e: any) => Duration.fromJSON(e)) : [],
      isPermissionlessPoolCreationEnabled: isSet(object.isPermissionlessPoolCreationEnabled) ? Boolean(object.isPermissionlessPoolCreationEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.authorizedTickSpacing = object.authorizedTickSpacing?.map(e => Long.fromValue(e)) || [];
    message.authorizedSpreadFactors = object.authorizedSpreadFactors?.map(e => e) || [];
    message.balancerSharesRewardDiscount = object.balancerSharesRewardDiscount ?? "";
    message.authorizedQuoteDenoms = object.authorizedQuoteDenoms?.map(e => e) || [];
    message.authorizedUptimes = object.authorizedUptimes?.map(e => Duration.fromPartial(e)) || [];
    message.isPermissionlessPoolCreationEnabled = object.isPermissionlessPoolCreationEnabled ?? false;
    return message;
  }
};