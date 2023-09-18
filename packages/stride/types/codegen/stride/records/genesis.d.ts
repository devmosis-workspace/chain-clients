import { BinaryWriter } from "../../binary";
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
export declare const DepositRecord_StatusAmino: typeof DepositRecord_Status;
export declare function depositRecord_StatusFromJSON(object: any): DepositRecord_Status;
export declare function depositRecord_StatusToJSON(object: DepositRecord_Status): string;
export declare enum DepositRecord_Source {
    STRIDE = 0,
    WITHDRAWAL_ICA = 1,
    UNRECOGNIZED = -1
}
export declare const DepositRecord_SourceSDKType: typeof DepositRecord_Source;
export declare const DepositRecord_SourceAmino: typeof DepositRecord_Source;
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
export declare const HostZoneUnbonding_StatusAmino: typeof HostZoneUnbonding_Status;
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
    epochNumber: bigint;
    claimIsPending: boolean;
}
export interface UserRedemptionRecordProtoMsg {
    typeUrl: "/stride.records.UserRedemptionRecord";
    value: Uint8Array;
}
export interface UserRedemptionRecordAmino {
    /** {chain_id}.{epoch}.{sender} */
    id: string;
    sender: string;
    receiver: string;
    amount: string;
    denom: string;
    host_zone_id: string;
    epoch_number: string;
    claim_is_pending: boolean;
}
export interface UserRedemptionRecordAminoMsg {
    type: "/stride.records.UserRedemptionRecord";
    value: UserRedemptionRecordAmino;
}
export interface UserRedemptionRecordSDKType {
    id: string;
    sender: string;
    receiver: string;
    amount: string;
    denom: string;
    host_zone_id: string;
    epoch_number: bigint;
    claim_is_pending: boolean;
}
/** Params defines the parameters for the module. */
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/stride.records.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "/stride.records.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
}
export interface RecordsPacketData {
    noData?: NoData;
}
export interface RecordsPacketDataProtoMsg {
    typeUrl: "/stride.records.RecordsPacketData";
    value: Uint8Array;
}
export interface RecordsPacketDataAmino {
    no_data?: NoDataAmino;
}
export interface RecordsPacketDataAminoMsg {
    type: "/stride.records.RecordsPacketData";
    value: RecordsPacketDataAmino;
}
export interface RecordsPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataProtoMsg {
    typeUrl: "/stride.records.NoData";
    value: Uint8Array;
}
export interface NoDataAmino {
}
export interface NoDataAminoMsg {
    type: "/stride.records.NoData";
    value: NoDataAmino;
}
export interface NoDataSDKType {
}
export interface DepositRecord {
    id: bigint;
    amount: string;
    denom: string;
    hostZoneId: string;
    status: DepositRecord_Status;
    depositEpochNumber: bigint;
    source: DepositRecord_Source;
}
export interface DepositRecordProtoMsg {
    typeUrl: "/stride.records.DepositRecord";
    value: Uint8Array;
}
export interface DepositRecordAmino {
    id: string;
    amount: string;
    denom: string;
    host_zone_id: string;
    status: DepositRecord_Status;
    deposit_epoch_number: string;
    source: DepositRecord_Source;
}
export interface DepositRecordAminoMsg {
    type: "/stride.records.DepositRecord";
    value: DepositRecordAmino;
}
export interface DepositRecordSDKType {
    id: bigint;
    amount: string;
    denom: string;
    host_zone_id: string;
    status: DepositRecord_Status;
    deposit_epoch_number: bigint;
    source: DepositRecord_Source;
}
export interface HostZoneUnbonding {
    stTokenAmount: string;
    nativeTokenAmount: string;
    denom: string;
    hostZoneId: string;
    unbondingTime: bigint;
    status: HostZoneUnbonding_Status;
    userRedemptionRecords: string[];
}
export interface HostZoneUnbondingProtoMsg {
    typeUrl: "/stride.records.HostZoneUnbonding";
    value: Uint8Array;
}
export interface HostZoneUnbondingAmino {
    st_token_amount: string;
    native_token_amount: string;
    denom: string;
    host_zone_id: string;
    unbonding_time: string;
    status: HostZoneUnbonding_Status;
    user_redemption_records: string[];
}
export interface HostZoneUnbondingAminoMsg {
    type: "/stride.records.HostZoneUnbonding";
    value: HostZoneUnbondingAmino;
}
export interface HostZoneUnbondingSDKType {
    st_token_amount: string;
    native_token_amount: string;
    denom: string;
    host_zone_id: string;
    unbonding_time: bigint;
    status: HostZoneUnbonding_Status;
    user_redemption_records: string[];
}
export interface EpochUnbondingRecord {
    epochNumber: bigint;
    hostZoneUnbondings: HostZoneUnbonding[];
}
export interface EpochUnbondingRecordProtoMsg {
    typeUrl: "/stride.records.EpochUnbondingRecord";
    value: Uint8Array;
}
export interface EpochUnbondingRecordAmino {
    epoch_number: string;
    host_zone_unbondings: HostZoneUnbondingAmino[];
}
export interface EpochUnbondingRecordAminoMsg {
    type: "/stride.records.EpochUnbondingRecord";
    value: EpochUnbondingRecordAmino;
}
export interface EpochUnbondingRecordSDKType {
    epoch_number: bigint;
    host_zone_unbondings: HostZoneUnbondingSDKType[];
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisState {
    params: Params;
    portId: string;
    userRedemptionRecordList: UserRedemptionRecord[];
    userRedemptionRecordCount: bigint;
    epochUnbondingRecordList: EpochUnbondingRecord[];
    depositRecordList: DepositRecord[];
    depositRecordCount: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.records.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    port_id: string;
    user_redemption_record_list: UserRedemptionRecordAmino[];
    user_redemption_record_count: string;
    epoch_unbonding_record_list: EpochUnbondingRecordAmino[];
    deposit_record_list: DepositRecordAmino[];
    deposit_record_count: string;
}
export interface GenesisStateAminoMsg {
    type: "/stride.records.GenesisState";
    value: GenesisStateAmino;
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    port_id: string;
    user_redemption_record_list: UserRedemptionRecordSDKType[];
    user_redemption_record_count: bigint;
    epoch_unbonding_record_list: EpochUnbondingRecordSDKType[];
    deposit_record_list: DepositRecordSDKType[];
    deposit_record_count: bigint;
}
export declare const UserRedemptionRecord: {
    typeUrl: string;
    encode(message: UserRedemptionRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UserRedemptionRecord;
    fromPartial(object: Partial<UserRedemptionRecord>): UserRedemptionRecord;
    fromAmino(object: UserRedemptionRecordAmino): UserRedemptionRecord;
    toAmino(message: UserRedemptionRecord): UserRedemptionRecordAmino;
    fromAminoMsg(object: UserRedemptionRecordAminoMsg): UserRedemptionRecord;
    fromProtoMsg(message: UserRedemptionRecordProtoMsg): UserRedemptionRecord;
    toProto(message: UserRedemptionRecord): Uint8Array;
    toProtoMsg(message: UserRedemptionRecord): UserRedemptionRecordProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): Params;
    fromPartial(_: Partial<Params>): Params;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const RecordsPacketData: {
    typeUrl: string;
    encode(message: RecordsPacketData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RecordsPacketData;
    fromPartial(object: Partial<RecordsPacketData>): RecordsPacketData;
    fromAmino(object: RecordsPacketDataAmino): RecordsPacketData;
    toAmino(message: RecordsPacketData): RecordsPacketDataAmino;
    fromAminoMsg(object: RecordsPacketDataAminoMsg): RecordsPacketData;
    fromProtoMsg(message: RecordsPacketDataProtoMsg): RecordsPacketData;
    toProto(message: RecordsPacketData): Uint8Array;
    toProtoMsg(message: RecordsPacketData): RecordsPacketDataProtoMsg;
};
export declare const NoData: {
    typeUrl: string;
    encode(_: NoData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): NoData;
    fromPartial(_: Partial<NoData>): NoData;
    fromAmino(_: NoDataAmino): NoData;
    toAmino(_: NoData): NoDataAmino;
    fromAminoMsg(object: NoDataAminoMsg): NoData;
    fromProtoMsg(message: NoDataProtoMsg): NoData;
    toProto(message: NoData): Uint8Array;
    toProtoMsg(message: NoData): NoDataProtoMsg;
};
export declare const DepositRecord: {
    typeUrl: string;
    encode(message: DepositRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositRecord;
    fromPartial(object: Partial<DepositRecord>): DepositRecord;
    fromAmino(object: DepositRecordAmino): DepositRecord;
    toAmino(message: DepositRecord): DepositRecordAmino;
    fromAminoMsg(object: DepositRecordAminoMsg): DepositRecord;
    fromProtoMsg(message: DepositRecordProtoMsg): DepositRecord;
    toProto(message: DepositRecord): Uint8Array;
    toProtoMsg(message: DepositRecord): DepositRecordProtoMsg;
};
export declare const HostZoneUnbonding: {
    typeUrl: string;
    encode(message: HostZoneUnbonding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): HostZoneUnbonding;
    fromPartial(object: Partial<HostZoneUnbonding>): HostZoneUnbonding;
    fromAmino(object: HostZoneUnbondingAmino): HostZoneUnbonding;
    toAmino(message: HostZoneUnbonding): HostZoneUnbondingAmino;
    fromAminoMsg(object: HostZoneUnbondingAminoMsg): HostZoneUnbonding;
    fromProtoMsg(message: HostZoneUnbondingProtoMsg): HostZoneUnbonding;
    toProto(message: HostZoneUnbonding): Uint8Array;
    toProtoMsg(message: HostZoneUnbonding): HostZoneUnbondingProtoMsg;
};
export declare const EpochUnbondingRecord: {
    typeUrl: string;
    encode(message: EpochUnbondingRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EpochUnbondingRecord;
    fromPartial(object: Partial<EpochUnbondingRecord>): EpochUnbondingRecord;
    fromAmino(object: EpochUnbondingRecordAmino): EpochUnbondingRecord;
    toAmino(message: EpochUnbondingRecord): EpochUnbondingRecordAmino;
    fromAminoMsg(object: EpochUnbondingRecordAminoMsg): EpochUnbondingRecord;
    fromProtoMsg(message: EpochUnbondingRecordProtoMsg): EpochUnbondingRecord;
    toProto(message: EpochUnbondingRecord): Uint8Array;
    toProtoMsg(message: EpochUnbondingRecord): EpochUnbondingRecordProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
