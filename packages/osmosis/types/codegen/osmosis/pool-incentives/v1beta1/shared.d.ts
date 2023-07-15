import { Long } from "../../../helpers";
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
export declare const MigrationRecords: {
    encode(message: MigrationRecords, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MigrationRecords;
    fromPartial(object: Partial<MigrationRecords>): MigrationRecords;
};
export declare const BalancerToConcentratedPoolLink: {
    encode(message: BalancerToConcentratedPoolLink, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BalancerToConcentratedPoolLink;
    fromPartial(object: Partial<BalancerToConcentratedPoolLink>): BalancerToConcentratedPoolLink;
};
