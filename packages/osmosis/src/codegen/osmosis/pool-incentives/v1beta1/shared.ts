import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface MigrationRecords {
  balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
}
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface MigrationRecordsSDKType {
  balancer_to_concentrated_pool_links: BalancerToConcentratedPoolLinkSDKType[];
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface BalancerToConcentratedPoolLink {
  balancerPoolId: Long;
  clPoolId: Long;
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 * 
 * This is copied over from the gamm proto file in order to circumnavigate
 * the circular dependency between the two modules.
 */
export interface BalancerToConcentratedPoolLinkSDKType {
  balancer_pool_id: Long;
  cl_pool_id: Long;
}
function createBaseMigrationRecords(): MigrationRecords {
  return {
    balancerToConcentratedPoolLinks: []
  };
}
export const MigrationRecords = {
  encode(message: MigrationRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balancerToConcentratedPoolLinks) {
      BalancerToConcentratedPoolLink.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MigrationRecords {
    return {
      balancerToConcentratedPoolLinks: Array.isArray(object?.balancerToConcentratedPoolLinks) ? object.balancerToConcentratedPoolLinks.map((e: any) => BalancerToConcentratedPoolLink.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MigrationRecords>): MigrationRecords {
    const message = createBaseMigrationRecords();
    message.balancerToConcentratedPoolLinks = object.balancerToConcentratedPoolLinks?.map(e => BalancerToConcentratedPoolLink.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBalancerToConcentratedPoolLink(): BalancerToConcentratedPoolLink {
  return {
    balancerPoolId: Long.UZERO,
    clPoolId: Long.UZERO
  };
}
export const BalancerToConcentratedPoolLink = {
  encode(message: BalancerToConcentratedPoolLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.balancerPoolId.isZero()) {
      writer.uint32(8).uint64(message.balancerPoolId);
    }
    if (!message.clPoolId.isZero()) {
      writer.uint32(16).uint64(message.clPoolId);
    }
    return writer;
  },
  fromJSON(object: any): BalancerToConcentratedPoolLink {
    return {
      balancerPoolId: isSet(object.balancerPoolId) ? Long.fromValue(object.balancerPoolId) : Long.UZERO,
      clPoolId: isSet(object.clPoolId) ? Long.fromValue(object.clPoolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<BalancerToConcentratedPoolLink>): BalancerToConcentratedPoolLink {
    const message = createBaseBalancerToConcentratedPoolLink();
    message.balancerPoolId = object.balancerPoolId !== undefined && object.balancerPoolId !== null ? Long.fromValue(object.balancerPoolId) : Long.UZERO;
    message.clPoolId = object.clPoolId !== undefined && object.clPoolId !== null ? Long.fromValue(object.clPoolId) : Long.UZERO;
    return message;
  }
};