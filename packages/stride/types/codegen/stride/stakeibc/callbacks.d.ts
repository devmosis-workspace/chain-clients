import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegation {
    validator: string;
    amount: string;
}
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegationSDKType {
    validator: string;
    amount: string;
}
export interface DelegateCallback {
    hostZoneId: string;
    depositRecordId: Long;
    splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackSDKType {
    host_zone_id: string;
    deposit_record_id: Long;
    split_delegations: SplitDelegationSDKType[];
}
export interface ClaimCallback {
    userRedemptionRecordId: string;
    chainId: string;
    epochNumber: Long;
}
export interface ClaimCallbackSDKType {
    user_redemption_record_id: string;
    chain_id: string;
    epoch_number: Long;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallback {
    reinvestAmount?: Coin;
    hostZoneId: string;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallbackSDKType {
    reinvest_amount?: CoinSDKType;
    host_zone_id: string;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallback {
    hostZoneId: string;
    splitDelegations: SplitDelegation[];
    epochUnbondingRecordIds: Long[];
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallbackSDKType {
    host_zone_id: string;
    split_delegations: SplitDelegationSDKType[];
    epoch_unbonding_record_ids: Long[];
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallback {
    hostZoneId: string;
    epochUnbondingRecordIds: Long[];
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallbackSDKType {
    host_zone_id: string;
    epoch_unbonding_record_ids: Long[];
}
export interface Rebalancing {
    srcValidator: string;
    dstValidator: string;
    amt: string;
}
export interface RebalancingSDKType {
    src_validator: string;
    dst_validator: string;
    amt: string;
}
export interface RebalanceCallback {
    hostZoneId: string;
    rebalancings: Rebalancing[];
}
export interface RebalanceCallbackSDKType {
    host_zone_id: string;
    rebalancings: RebalancingSDKType[];
}
export declare const SplitDelegation: {
    encode(message: SplitDelegation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SplitDelegation;
    fromPartial(object: Partial<SplitDelegation>): SplitDelegation;
};
export declare const DelegateCallback: {
    encode(message: DelegateCallback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DelegateCallback;
    fromPartial(object: Partial<DelegateCallback>): DelegateCallback;
};
export declare const ClaimCallback: {
    encode(message: ClaimCallback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimCallback;
    fromPartial(object: Partial<ClaimCallback>): ClaimCallback;
};
export declare const ReinvestCallback: {
    encode(message: ReinvestCallback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ReinvestCallback;
    fromPartial(object: Partial<ReinvestCallback>): ReinvestCallback;
};
export declare const UndelegateCallback: {
    encode(message: UndelegateCallback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UndelegateCallback;
    fromPartial(object: Partial<UndelegateCallback>): UndelegateCallback;
};
export declare const RedemptionCallback: {
    encode(message: RedemptionCallback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RedemptionCallback;
    fromPartial(object: Partial<RedemptionCallback>): RedemptionCallback;
};
export declare const Rebalancing: {
    encode(message: Rebalancing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Rebalancing;
    fromPartial(object: Partial<Rebalancing>): Rebalancing;
};
export declare const RebalanceCallback: {
    encode(message: RebalanceCallback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RebalanceCallback;
    fromPartial(object: Partial<RebalanceCallback>): RebalanceCallback;
};
