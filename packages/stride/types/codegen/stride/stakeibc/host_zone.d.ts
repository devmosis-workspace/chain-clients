import { Validator, ValidatorSDKType } from "./validator";
import { ICAAccount, ICAAccountSDKType } from "./ica_account";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** next id: 22 */
export interface HostZone {
    chainId: string;
    connectionId: string;
    bech32prefix: string;
    transferChannelId: string;
    validators: Validator[];
    blacklistedValidators: Validator[];
    withdrawalAccount?: ICAAccount;
    feeAccount?: ICAAccount;
    delegationAccount?: ICAAccount;
    redemptionAccount?: ICAAccount;
    /** ibc denom on stride */
    ibcDenom: string;
    /** native denom on host zone */
    hostDenom: string;
    /**
     * TODO(TEST-68): Should we make this an array and store the last n redemption
     * rates then calculate a TWARR?
     */
    lastRedemptionRate: string;
    redemptionRate: string;
    /** stores how many days we should wait before issuing unbondings */
    unbondingFrequency: Long;
    /** TODO(TEST-101) int to dec */
    stakedBal: string;
    address: string;
    halted: boolean;
    minRedemptionRate: string;
    maxRedemptionRate: string;
}
/** next id: 22 */
export interface HostZoneSDKType {
    chain_id: string;
    connection_id: string;
    bech32prefix: string;
    transfer_channel_id: string;
    validators: ValidatorSDKType[];
    blacklisted_validators: ValidatorSDKType[];
    withdrawal_account?: ICAAccountSDKType;
    fee_account?: ICAAccountSDKType;
    delegation_account?: ICAAccountSDKType;
    redemption_account?: ICAAccountSDKType;
    ibc_denom: string;
    host_denom: string;
    last_redemption_rate: string;
    redemption_rate: string;
    unbonding_frequency: Long;
    staked_bal: string;
    address: string;
    halted: boolean;
    min_redemption_rate: string;
    max_redemption_rate: string;
}
export declare const HostZone: {
    encode(message: HostZone, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): HostZone;
    fromPartial(object: Partial<HostZone>): HostZone;
};
