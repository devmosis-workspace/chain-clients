import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
/**
 * Defines the set of equity tiers to limit how many open orders
 * a subaccount is allowed to have.
 */
export interface EquityTierLimitConfiguration {
  /**
   * How many short term stateful orders are allowed per equity tier.
   * Specifying 0 values disables this limit.
   */
  shortTermOrderEquityTiers: EquityTierLimit[];
  /**
   * How many open stateful orders are allowed per equity tier.
   * Specifying 0 values disables this limit.
   */
  statefulOrderEquityTiers: EquityTierLimit[];
}
export interface EquityTierLimitConfigurationProtoMsg {
  typeUrl: "/dydxprotocol.clob.EquityTierLimitConfiguration";
  value: Uint8Array;
}
/**
 * Defines the set of equity tiers to limit how many open orders
 * a subaccount is allowed to have.
 */
export interface EquityTierLimitConfigurationAmino {
  /**
   * How many short term stateful orders are allowed per equity tier.
   * Specifying 0 values disables this limit.
   */
  short_term_order_equity_tiers: EquityTierLimitAmino[];
  /**
   * How many open stateful orders are allowed per equity tier.
   * Specifying 0 values disables this limit.
   */
  stateful_order_equity_tiers: EquityTierLimitAmino[];
}
export interface EquityTierLimitConfigurationAminoMsg {
  type: "/dydxprotocol.clob.EquityTierLimitConfiguration";
  value: EquityTierLimitConfigurationAmino;
}
/**
 * Defines the set of equity tiers to limit how many open orders
 * a subaccount is allowed to have.
 */
export interface EquityTierLimitConfigurationSDKType {
  short_term_order_equity_tiers: EquityTierLimitSDKType[];
  stateful_order_equity_tiers: EquityTierLimitSDKType[];
}
/** Defines an equity tier limit. */
export interface EquityTierLimit {
  /** The total net collateral in USDC quote quantums of equity required. */
  usdTncRequired: Uint8Array;
  /** What the limit is for `usd_tnc_required`. */
  limit: number;
}
export interface EquityTierLimitProtoMsg {
  typeUrl: "/dydxprotocol.clob.EquityTierLimit";
  value: Uint8Array;
}
/** Defines an equity tier limit. */
export interface EquityTierLimitAmino {
  /** The total net collateral in USDC quote quantums of equity required. */
  usd_tnc_required: Uint8Array;
  /** What the limit is for `usd_tnc_required`. */
  limit: number;
}
export interface EquityTierLimitAminoMsg {
  type: "/dydxprotocol.clob.EquityTierLimit";
  value: EquityTierLimitAmino;
}
/** Defines an equity tier limit. */
export interface EquityTierLimitSDKType {
  usd_tnc_required: Uint8Array;
  limit: number;
}
function createBaseEquityTierLimitConfiguration(): EquityTierLimitConfiguration {
  return {
    shortTermOrderEquityTiers: [],
    statefulOrderEquityTiers: []
  };
}
export const EquityTierLimitConfiguration = {
  typeUrl: "/dydxprotocol.clob.EquityTierLimitConfiguration",
  encode(message: EquityTierLimitConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.shortTermOrderEquityTiers) {
      EquityTierLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.statefulOrderEquityTiers) {
      EquityTierLimit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EquityTierLimitConfiguration {
    return {
      shortTermOrderEquityTiers: Array.isArray(object?.shortTermOrderEquityTiers) ? object.shortTermOrderEquityTiers.map((e: any) => EquityTierLimit.fromJSON(e)) : [],
      statefulOrderEquityTiers: Array.isArray(object?.statefulOrderEquityTiers) ? object.statefulOrderEquityTiers.map((e: any) => EquityTierLimit.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EquityTierLimitConfiguration>): EquityTierLimitConfiguration {
    const message = createBaseEquityTierLimitConfiguration();
    message.shortTermOrderEquityTiers = object.shortTermOrderEquityTiers?.map(e => EquityTierLimit.fromPartial(e)) || [];
    message.statefulOrderEquityTiers = object.statefulOrderEquityTiers?.map(e => EquityTierLimit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EquityTierLimitConfigurationAmino): EquityTierLimitConfiguration {
    return {
      shortTermOrderEquityTiers: Array.isArray(object?.short_term_order_equity_tiers) ? object.short_term_order_equity_tiers.map((e: any) => EquityTierLimit.fromAmino(e)) : [],
      statefulOrderEquityTiers: Array.isArray(object?.stateful_order_equity_tiers) ? object.stateful_order_equity_tiers.map((e: any) => EquityTierLimit.fromAmino(e)) : []
    };
  },
  toAmino(message: EquityTierLimitConfiguration): EquityTierLimitConfigurationAmino {
    const obj: any = {};
    if (message.shortTermOrderEquityTiers) {
      obj.short_term_order_equity_tiers = message.shortTermOrderEquityTiers.map(e => e ? EquityTierLimit.toAmino(e) : undefined);
    } else {
      obj.short_term_order_equity_tiers = [];
    }
    if (message.statefulOrderEquityTiers) {
      obj.stateful_order_equity_tiers = message.statefulOrderEquityTiers.map(e => e ? EquityTierLimit.toAmino(e) : undefined);
    } else {
      obj.stateful_order_equity_tiers = [];
    }
    return obj;
  },
  fromAminoMsg(object: EquityTierLimitConfigurationAminoMsg): EquityTierLimitConfiguration {
    return EquityTierLimitConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: EquityTierLimitConfigurationProtoMsg): EquityTierLimitConfiguration {
    return EquityTierLimitConfiguration.decode(message.value);
  },
  toProto(message: EquityTierLimitConfiguration): Uint8Array {
    return EquityTierLimitConfiguration.encode(message).finish();
  },
  toProtoMsg(message: EquityTierLimitConfiguration): EquityTierLimitConfigurationProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.EquityTierLimitConfiguration",
      value: EquityTierLimitConfiguration.encode(message).finish()
    };
  }
};
function createBaseEquityTierLimit(): EquityTierLimit {
  return {
    usdTncRequired: new Uint8Array(),
    limit: 0
  };
}
export const EquityTierLimit = {
  typeUrl: "/dydxprotocol.clob.EquityTierLimit",
  encode(message: EquityTierLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.usdTncRequired.length !== 0) {
      writer.uint32(10).bytes(message.usdTncRequired);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    return writer;
  },
  fromJSON(object: any): EquityTierLimit {
    return {
      usdTncRequired: isSet(object.usdTncRequired) ? bytesFromBase64(object.usdTncRequired) : new Uint8Array(),
      limit: isSet(object.limit) ? Number(object.limit) : 0
    };
  },
  fromPartial(object: Partial<EquityTierLimit>): EquityTierLimit {
    const message = createBaseEquityTierLimit();
    message.usdTncRequired = object.usdTncRequired ?? new Uint8Array();
    message.limit = object.limit ?? 0;
    return message;
  },
  fromAmino(object: EquityTierLimitAmino): EquityTierLimit {
    return {
      usdTncRequired: object.usd_tnc_required,
      limit: object.limit
    };
  },
  toAmino(message: EquityTierLimit): EquityTierLimitAmino {
    const obj: any = {};
    obj.usd_tnc_required = message.usdTncRequired;
    obj.limit = message.limit;
    return obj;
  },
  fromAminoMsg(object: EquityTierLimitAminoMsg): EquityTierLimit {
    return EquityTierLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: EquityTierLimitProtoMsg): EquityTierLimit {
    return EquityTierLimit.decode(message.value);
  },
  toProto(message: EquityTierLimit): Uint8Array {
    return EquityTierLimit.encode(message).finish();
  },
  toProtoMsg(message: EquityTierLimit): EquityTierLimitProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.EquityTierLimit",
      value: EquityTierLimit.encode(message).finish()
    };
  }
};