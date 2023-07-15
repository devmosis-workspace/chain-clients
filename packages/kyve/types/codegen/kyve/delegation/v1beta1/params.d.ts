import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the delegation module parameters. */
export interface Params {
    /** unbonding_delegation_time ... */
    unbondingDelegationTime: Long;
    /** unbonding_delegation_time ... */
    redelegationCooldown: Long;
    /** unbonding_delegation_time ... */
    redelegationMaxAmount: Long;
    /** vote_slash ... */
    voteSlash: string;
    /** upload_slash ... */
    uploadSlash: string;
    /** timeout_slash ... */
    timeoutSlash: string;
}
/** Params defines the delegation module parameters. */
export interface ParamsSDKType {
    unbonding_delegation_time: Long;
    redelegation_cooldown: Long;
    redelegation_max_amount: Long;
    vote_slash: string;
    upload_slash: string;
    timeout_slash: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
