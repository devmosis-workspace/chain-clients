import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum DepositRecord_Status {
    /** TRANSFER_QUEUE - in transfer queue to be sent to the delegation ICA */
    TRANSFER_QUEUE = 0,
    /** TRANSFER_IN_PROGRESS - transfer in progress (IBC packet sent, ack not received) */
    TRANSFER_IN_PROGRESS = 2,
    /** DELEGATION_QUEUE - in staking queue on delegation ICA */
    DELEGATION_QUEUE = 1,
    /** DELEGATION_IN_PROGRESS - staking in progress (ICA packet sent, ack not received) */
    DELEGATION_IN_PROGRESS = 3,
    UNRECOGNIZED = -1
}
export declare const DepositRecord_StatusSDKType: typeof DepositRecord_Status;
export declare function depositRecord_StatusFromJSON(object: any): DepositRecord_Status;
export declare function depositRecord_StatusToJSON(object: DepositRecord_Status): string;
export declare enum DepositRecord_Source {
    STRIDE = 0,
    WITHDRAWAL_ICA = 1,
    UNRECOGNIZED = -1
}
export declare const DepositRecord_SourceSDKType: typeof DepositRecord_Source;
export declare function depositRecord_SourceFromJSON(object: any): DepositRecord_Source;
export declare function depositRecord_SourceToJSON(object: DepositRecord_Source): string;
export declare enum HostZoneUnbonding_Status {
    /** UNBONDING_QUEUE - tokens bonded on delegate account */
    UNBONDING_QUEUE = 0,
    UNBONDING_IN_PROGRESS = 3,
    /** EXIT_TRANSFER_QUEUE - unbonding completed on delegate account */
    EXIT_TRANSFER_QUEUE = 1,
    EXIT_TRANSFER_IN_PROGRESS = 4,
    /** CLAIMABLE - transfer success */
    CLAIMABLE = 2,
    UNRECOGNIZED = -1
}
export declare const HostZoneUnbonding_StatusSDKType: typeof HostZoneUnbonding_Status;
export declare function hostZoneUnbonding_StatusFromJSON(object: any): HostZoneUnbonding_Status;
export declare function hostZoneUnbonding_StatusToJSON(object: HostZoneUnbonding_Status): string;
export interface UserRedemptionRecord {
    /** {chain_id}.{epoch}.{sender} */
    id: string;
    sender: string;
    receiver: string;
    amount: string;
    denom: string;
    hostZoneId: string;
    epochNumber: Long;
    claimIsPending: boolean;
}
export interface UserRedemptionRecordSDKType {
    id: string;
    sender: string;
    receiver: string;
    amount: string;
    denom: string;
    host_zone_id: string;
    epoch_number: Long;
    claim_is_pending: boolean;
}
/** Params defines the parameters for the module. */
export interface Params {
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
}
export interface RecordsPacketData {
    noData?: NoData;
}
export interface RecordsPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export interface DepositRecord {
    id: Long;
    amount: string;
    denom: string;
    hostZoneId: string;
    status: DepositRecord_Status;
    depositEpochNumber: Long;
    source: DepositRecord_Source;
}
export interface DepositRecordSDKType {
    id: Long;
    amount: string;
    denom: string;
    host_zone_id: string;
    status: DepositRecord_Status;
    deposit_epoch_number: Long;
    source: DepositRecord_Source;
}
export interface HostZoneUnbonding {
    stTokenAmount: string;
    nativeTokenAmount: string;
    denom: string;
    hostZoneId: string;
    unbondingTime: Long;
    status: HostZoneUnbonding_Status;
    userRedemptionRecords: string[];
}
export interface HostZoneUnbondingSDKType {
    st_token_amount: string;
    native_token_amount: string;
    denom: string;
    host_zone_id: string;
    unbonding_time: Long;
    status: HostZoneUnbonding_Status;
    user_redemption_records: string[];
}
export interface EpochUnbondingRecord {
    epochNumber: Long;
    hostZoneUnbondings: HostZoneUnbonding[];
}
export interface EpochUnbondingRecordSDKType {
    epoch_number: Long;
    host_zone_unbondings: HostZoneUnbondingSDKType[];
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisState {
    params?: Params;
    portId: string;
    userRedemptionRecordList: UserRedemptionRecord[];
    userRedemptionRecordCount: Long;
    epochUnbondingRecordList: EpochUnbondingRecord[];
    depositRecordList: DepositRecord[];
    depositRecordCount: Long;
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    port_id: string;
    user_redemption_record_list: UserRedemptionRecordSDKType[];
    user_redemption_record_count: Long;
    epoch_unbonding_record_list: EpochUnbondingRecordSDKType[];
    deposit_record_list: DepositRecordSDKType[];
    deposit_record_count: Long;
}
export declare const UserRedemptionRecord: {
    encode(message: UserRedemptionRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UserRedemptionRecord;
    fromPartial(object: Partial<UserRedemptionRecord>): UserRedemptionRecord;
};
export declare const Params: {
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): Params;
    fromPartial(_: Partial<Params>): Params;
};
export declare const RecordsPacketData: {
    encode(message: RecordsPacketData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RecordsPacketData;
    fromPartial(object: Partial<RecordsPacketData>): RecordsPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): NoData;
    fromPartial(_: Partial<NoData>): NoData;
};
export declare const DepositRecord: {
    encode(message: DepositRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DepositRecord;
    fromPartial(object: Partial<DepositRecord>): DepositRecord;
};
export declare const HostZoneUnbonding: {
    encode(message: HostZoneUnbonding, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): HostZoneUnbonding;
    fromPartial(object: Partial<HostZoneUnbonding>): HostZoneUnbonding;
};
export declare const EpochUnbondingRecord: {
    encode(message: EpochUnbondingRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EpochUnbondingRecord;
    fromPartial(object: Partial<EpochUnbondingRecord>): EpochUnbondingRecord;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
