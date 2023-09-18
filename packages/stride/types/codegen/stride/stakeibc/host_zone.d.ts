import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { ICAAccount, ICAAccountAmino, ICAAccountSDKType } from "./ica_account";
import { BinaryWriter } from "../../binary";
/** next id: 22 */
export interface HostZone {
    chainId: string;
    connectionId: string;
    bech32prefix: string;
    transferChannelId: string;
    validators: Validator[];
    blacklistedValidators: Validator[];
    withdrawalAccount: ICAAccount;
    feeAccount: ICAAccount;
    delegationAccount: ICAAccount;
    redemptionAccount: ICAAccount;
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
    unbondingFrequency: bigint;
    /** TODO(TEST-101) int to dec */
    stakedBal: string;
    address: string;
    halted: boolean;
    minRedemptionRate: string;
    maxRedemptionRate: string;
}
export interface HostZoneProtoMsg {
    typeUrl: "/stride.stakeibc.HostZone";
    value: Uint8Array;
}
/** next id: 22 */
export interface HostZoneAmino {
    chain_id: string;
    connection_id: string;
    bech32prefix: string;
    transfer_channel_id: string;
    validators: ValidatorAmino[];
    blacklisted_validators: ValidatorAmino[];
    withdrawal_account?: ICAAccountAmino;
    fee_account?: ICAAccountAmino;
    delegation_account?: ICAAccountAmino;
    redemption_account?: ICAAccountAmino;
    /** ibc denom on stride */
    ibc_denom: string;
    /** native denom on host zone */
    host_denom: string;
    /**
     * TODO(TEST-68): Should we make this an array and store the last n redemption
     * rates then calculate a TWARR?
     */
    last_redemption_rate: string;
    redemption_rate: string;
    /** stores how many days we should wait before issuing unbondings */
    unbonding_frequency: string;
    /** TODO(TEST-101) int to dec */
    staked_bal: string;
    address: string;
    halted: boolean;
    min_redemption_rate: string;
    max_redemption_rate: string;
}
export interface HostZoneAminoMsg {
    type: "/stride.stakeibc.HostZone";
    value: HostZoneAmino;
}
/** next id: 22 */
export interface HostZoneSDKType {
    chain_id: string;
    connection_id: string;
    bech32prefix: string;
    transfer_channel_id: string;
    validators: ValidatorSDKType[];
    blacklisted_validators: ValidatorSDKType[];
    withdrawal_account: ICAAccountSDKType;
    fee_account: ICAAccountSDKType;
    delegation_account: ICAAccountSDKType;
    redemption_account: ICAAccountSDKType;
    ibc_denom: string;
    host_denom: string;
    last_redemption_rate: string;
    redemption_rate: string;
    unbonding_frequency: bigint;
    staked_bal: string;
    address: string;
    halted: boolean;
    min_redemption_rate: string;
    max_redemption_rate: string;
}
export declare const HostZone: {
    typeUrl: string;
    encode(message: HostZone, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): HostZone;
    fromPartial(object: Partial<HostZone>): HostZone;
    fromAmino(object: HostZoneAmino): HostZone;
    toAmino(message: HostZone): HostZoneAmino;
    fromAminoMsg(object: HostZoneAminoMsg): HostZone;
    fromProtoMsg(message: HostZoneProtoMsg): HostZone;
    toProto(message: HostZone): Uint8Array;
    toProtoMsg(message: HostZone): HostZoneProtoMsg;
};
