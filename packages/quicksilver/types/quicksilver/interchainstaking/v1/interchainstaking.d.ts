import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Zone {
    connectionId: string;
    chainId: string;
    depositAddress?: ICAAccount;
    withdrawalAddress?: ICAAccount;
    performanceAddress?: ICAAccount;
    delegationAddress?: ICAAccount;
    accountPrefix: string;
    localDenom: string;
    baseDenom: string;
    redemptionRate: string;
    lastRedemptionRate: string;
    validators: Validator[];
    aggregateIntent: ValidatorIntent[];
    /** deprecated */
    multiSend: boolean;
    liquidityModule: boolean;
    withdrawalWaitgroup: number;
    ibcNextValidatorsHash: Uint8Array;
    validatorSelectionAllocation: bigint;
    holdingsAllocation: bigint;
    /** deprecated */
    lastEpochHeight: bigint;
    tvl: string;
    unbondingPeriod: bigint;
    messagesPerTx: bigint;
    decimals: bigint;
    unbondingEnabled: boolean;
    depositsEnabled: boolean;
    returnToSender: boolean;
    is118: boolean;
    subzoneInfo?: SubzoneInfo;
    dustThreshold: string;
}
export interface ZoneProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Zone";
    value: Uint8Array;
}
export interface ZoneAmino {
    connection_id?: string;
    chain_id?: string;
    deposit_address?: ICAAccountAmino;
    withdrawal_address?: ICAAccountAmino;
    performance_address?: ICAAccountAmino;
    delegation_address?: ICAAccountAmino;
    account_prefix?: string;
    local_denom?: string;
    base_denom?: string;
    redemption_rate?: string;
    last_redemption_rate?: string;
    validators?: ValidatorAmino[];
    aggregate_intent?: ValidatorIntentAmino[];
    /** deprecated */
    multi_send?: boolean;
    liquidity_module?: boolean;
    withdrawal_waitgroup?: number;
    ibc_next_validators_hash?: string;
    validator_selection_allocation?: string;
    holdings_allocation?: string;
    /** deprecated */
    last_epoch_height?: string;
    tvl?: string;
    unbonding_period?: string;
    messages_per_tx?: string;
    decimals?: string;
    unbonding_enabled?: boolean;
    deposits_enabled?: boolean;
    return_to_sender?: boolean;
    is_118?: boolean;
    subzoneInfo?: SubzoneInfoAmino;
    dust_threshold?: string;
}
export interface ZoneAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Zone";
    value: ZoneAmino;
}
export interface ZoneSDKType {
    connection_id: string;
    chain_id: string;
    deposit_address?: ICAAccountSDKType;
    withdrawal_address?: ICAAccountSDKType;
    performance_address?: ICAAccountSDKType;
    delegation_address?: ICAAccountSDKType;
    account_prefix: string;
    local_denom: string;
    base_denom: string;
    redemption_rate: string;
    last_redemption_rate: string;
    validators: ValidatorSDKType[];
    aggregate_intent: ValidatorIntentSDKType[];
    multi_send: boolean;
    liquidity_module: boolean;
    withdrawal_waitgroup: number;
    ibc_next_validators_hash: Uint8Array;
    validator_selection_allocation: bigint;
    holdings_allocation: bigint;
    last_epoch_height: bigint;
    tvl: string;
    unbonding_period: bigint;
    messages_per_tx: bigint;
    decimals: bigint;
    unbonding_enabled: boolean;
    deposits_enabled: boolean;
    return_to_sender: boolean;
    is_118: boolean;
    subzoneInfo?: SubzoneInfoSDKType;
    dust_threshold: string;
}
export interface SubzoneInfo {
    authority: string;
    baseChainID: string;
}
export interface SubzoneInfoProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo";
    value: Uint8Array;
}
export interface SubzoneInfoAmino {
    authority?: string;
    base_chainID?: string;
}
export interface SubzoneInfoAminoMsg {
    type: "/quicksilver.interchainstaking.v1.SubzoneInfo";
    value: SubzoneInfoAmino;
}
export interface SubzoneInfoSDKType {
    authority: string;
    base_chainID: string;
}
export interface LsmCaps {
    validatorCap: string;
    validatorBondCap: string;
    globalCap: string;
}
export interface LsmCapsProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps";
    value: Uint8Array;
}
export interface LsmCapsAmino {
    validator_cap?: string;
    validator_bond_cap?: string;
    global_cap?: string;
}
export interface LsmCapsAminoMsg {
    type: "/quicksilver.interchainstaking.v1.LsmCaps";
    value: LsmCapsAmino;
}
export interface LsmCapsSDKType {
    validator_cap: string;
    validator_bond_cap: string;
    global_cap: string;
}
export interface ICAAccount {
    address: string;
    /** balance defines the different coins this balance holds. */
    balance: Coin[];
    portName: string;
    withdrawalAddress: string;
    balanceWaitgroup: number;
}
export interface ICAAccountProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount";
    value: Uint8Array;
}
export interface ICAAccountAmino {
    address?: string;
    /** balance defines the different coins this balance holds. */
    balance?: CoinAmino[];
    port_name?: string;
    withdrawal_address?: string;
    balance_waitgroup?: number;
}
export interface ICAAccountAminoMsg {
    type: "/quicksilver.interchainstaking.v1.ICAAccount";
    value: ICAAccountAmino;
}
export interface ICAAccountSDKType {
    address: string;
    balance: CoinSDKType[];
    port_name: string;
    withdrawal_address: string;
    balance_waitgroup: number;
}
export interface Distribution {
    valoper: string;
    /** @deprecated */
    _amount: bigint;
    amount: string;
}
export interface DistributionProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Distribution";
    value: Uint8Array;
}
export interface DistributionAmino {
    valoper?: string;
    /** @deprecated */
    _amount?: string;
    amount?: string;
}
export interface DistributionAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Distribution";
    value: DistributionAmino;
}
export interface DistributionSDKType {
    valoper: string;
    /** @deprecated */
    _amount: bigint;
    amount: string;
}
export interface WithdrawalRecord {
    chainId: string;
    delegator: string;
    distribution: Distribution[];
    recipient: string;
    amount: Coin[];
    burnAmount: Coin;
    txhash: string;
    status: number;
    completionTime: Timestamp;
    requeued: boolean;
    acknowledged: boolean;
    epochNumber: bigint;
}
export interface WithdrawalRecordProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord";
    value: Uint8Array;
}
export interface WithdrawalRecordAmino {
    chain_id?: string;
    delegator?: string;
    distribution?: DistributionAmino[];
    recipient?: string;
    amount?: CoinAmino[];
    burn_amount?: CoinAmino;
    txhash?: string;
    status?: number;
    completion_time?: string;
    requeued?: boolean;
    acknowledged?: boolean;
    epoch_number?: string;
}
export interface WithdrawalRecordAminoMsg {
    type: "/quicksilver.interchainstaking.v1.WithdrawalRecord";
    value: WithdrawalRecordAmino;
}
export interface WithdrawalRecordSDKType {
    chain_id: string;
    delegator: string;
    distribution: DistributionSDKType[];
    recipient: string;
    amount: CoinSDKType[];
    burn_amount: CoinSDKType;
    txhash: string;
    status: number;
    completion_time: TimestampSDKType;
    requeued: boolean;
    acknowledged: boolean;
    epoch_number: bigint;
}
export interface UnbondingRecord {
    chainId: string;
    epochNumber: bigint;
    validator: string;
    relatedTxhash: string[];
    amount: Coin;
}
export interface UnbondingRecordProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord";
    value: Uint8Array;
}
export interface UnbondingRecordAmino {
    chain_id?: string;
    epoch_number?: string;
    validator?: string;
    related_txhash?: string[];
    amount?: CoinAmino;
}
export interface UnbondingRecordAminoMsg {
    type: "/quicksilver.interchainstaking.v1.UnbondingRecord";
    value: UnbondingRecordAmino;
}
export interface UnbondingRecordSDKType {
    chain_id: string;
    epoch_number: bigint;
    validator: string;
    related_txhash: string[];
    amount: CoinSDKType;
}
export interface RedelegationRecord {
    chainId: string;
    epochNumber: bigint;
    source: string;
    destination: string;
    /** @deprecated */
    _amount: bigint;
    completionTime: Timestamp;
    amount: string;
}
export interface RedelegationRecordProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord";
    value: Uint8Array;
}
export interface RedelegationRecordAmino {
    chain_id?: string;
    epoch_number?: string;
    source?: string;
    destination?: string;
    /** @deprecated */
    _amount?: string;
    completion_time?: string;
    amount?: string;
}
export interface RedelegationRecordAminoMsg {
    type: "/quicksilver.interchainstaking.v1.RedelegationRecord";
    value: RedelegationRecordAmino;
}
export interface RedelegationRecordSDKType {
    chain_id: string;
    epoch_number: bigint;
    source: string;
    destination: string;
    /** @deprecated */
    _amount: bigint;
    completion_time: TimestampSDKType;
    amount: string;
}
export interface Validator {
    valoperAddress: string;
    commissionRate: string;
    delegatorShares: string;
    votingPower: string;
    score: string;
    status: string;
    jailed: boolean;
    tombstoned: boolean;
    jailedSince: Timestamp;
    /** Number of shares self bonded from the validator */
    validatorBondShares: string;
    /** Number of shares either tokenized or owned by a liquid staking provider */
    liquidShares: string;
}
export interface ValidatorProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Validator";
    value: Uint8Array;
}
export interface ValidatorAmino {
    valoper_address?: string;
    commission_rate?: string;
    delegator_shares?: string;
    voting_power?: string;
    score?: string;
    status?: string;
    jailed?: boolean;
    tombstoned?: boolean;
    jailed_since?: string;
    /** Number of shares self bonded from the validator */
    validator_bond_shares?: string;
    /** Number of shares either tokenized or owned by a liquid staking provider */
    liquid_shares?: string;
}
export interface ValidatorAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Validator";
    value: ValidatorAmino;
}
export interface ValidatorSDKType {
    valoper_address: string;
    commission_rate: string;
    delegator_shares: string;
    voting_power: string;
    score: string;
    status: string;
    jailed: boolean;
    tombstoned: boolean;
    jailed_since: TimestampSDKType;
    validator_bond_shares: string;
    liquid_shares: string;
}
export interface DelegatorIntent {
    delegator: string;
    intents: ValidatorIntent[];
}
export interface DelegatorIntentProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent";
    value: Uint8Array;
}
export interface DelegatorIntentAmino {
    delegator?: string;
    intents?: ValidatorIntentAmino[];
}
export interface DelegatorIntentAminoMsg {
    type: "/quicksilver.interchainstaking.v1.DelegatorIntent";
    value: DelegatorIntentAmino;
}
export interface DelegatorIntentSDKType {
    delegator: string;
    intents: ValidatorIntentSDKType[];
}
export interface ValidatorIntent {
    valoperAddress: string;
    weight: string;
}
export interface ValidatorIntentProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent";
    value: Uint8Array;
}
export interface ValidatorIntentAmino {
    valoper_address?: string;
    weight?: string;
}
export interface ValidatorIntentAminoMsg {
    type: "/quicksilver.interchainstaking.v1.ValidatorIntent";
    value: ValidatorIntentAmino;
}
export interface ValidatorIntentSDKType {
    valoper_address: string;
    weight: string;
}
export interface Delegation {
    delegationAddress: string;
    validatorAddress: string;
    amount: Coin;
    height: bigint;
    redelegationEnd: bigint;
}
export interface DelegationProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Delegation";
    value: Uint8Array;
}
export interface DelegationAmino {
    delegation_address?: string;
    validator_address?: string;
    amount?: CoinAmino;
    height?: string;
    redelegation_end?: string;
}
export interface DelegationAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Delegation";
    value: DelegationAmino;
}
export interface DelegationSDKType {
    delegation_address: string;
    validator_address: string;
    amount: CoinSDKType;
    height: bigint;
    redelegation_end: bigint;
}
export interface PortConnectionTuple {
    connectionId: string;
    portId: string;
}
export interface PortConnectionTupleProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple";
    value: Uint8Array;
}
export interface PortConnectionTupleAmino {
    connection_id?: string;
    port_id?: string;
}
export interface PortConnectionTupleAminoMsg {
    type: "/quicksilver.interchainstaking.v1.PortConnectionTuple";
    value: PortConnectionTupleAmino;
}
export interface PortConnectionTupleSDKType {
    connection_id: string;
    port_id: string;
}
export interface Receipt {
    chainId: string;
    sender: string;
    txhash: string;
    amount: Coin[];
    firstSeen?: Timestamp;
    completed?: Timestamp;
}
export interface ReceiptProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Receipt";
    value: Uint8Array;
}
export interface ReceiptAmino {
    chain_id?: string;
    sender?: string;
    txhash?: string;
    amount?: CoinAmino[];
    first_seen?: string;
    completed?: string;
}
export interface ReceiptAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Receipt";
    value: ReceiptAmino;
}
export interface ReceiptSDKType {
    chain_id: string;
    sender: string;
    txhash: string;
    amount: CoinSDKType[];
    first_seen?: TimestampSDKType;
    completed?: TimestampSDKType;
}
export declare const Zone: {
    typeUrl: string;
    encode(message: Zone, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Zone;
    fromPartial(object: Partial<Zone>): Zone;
    fromAmino(object: ZoneAmino): Zone;
    toAmino(message: Zone): ZoneAmino;
    fromAminoMsg(object: ZoneAminoMsg): Zone;
    fromProtoMsg(message: ZoneProtoMsg): Zone;
    toProto(message: Zone): Uint8Array;
    toProtoMsg(message: Zone): ZoneProtoMsg;
};
export declare const SubzoneInfo: {
    typeUrl: string;
    encode(message: SubzoneInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubzoneInfo;
    fromPartial(object: Partial<SubzoneInfo>): SubzoneInfo;
    fromAmino(object: SubzoneInfoAmino): SubzoneInfo;
    toAmino(message: SubzoneInfo): SubzoneInfoAmino;
    fromAminoMsg(object: SubzoneInfoAminoMsg): SubzoneInfo;
    fromProtoMsg(message: SubzoneInfoProtoMsg): SubzoneInfo;
    toProto(message: SubzoneInfo): Uint8Array;
    toProtoMsg(message: SubzoneInfo): SubzoneInfoProtoMsg;
};
export declare const LsmCaps: {
    typeUrl: string;
    encode(message: LsmCaps, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LsmCaps;
    fromPartial(object: Partial<LsmCaps>): LsmCaps;
    fromAmino(object: LsmCapsAmino): LsmCaps;
    toAmino(message: LsmCaps): LsmCapsAmino;
    fromAminoMsg(object: LsmCapsAminoMsg): LsmCaps;
    fromProtoMsg(message: LsmCapsProtoMsg): LsmCaps;
    toProto(message: LsmCaps): Uint8Array;
    toProtoMsg(message: LsmCaps): LsmCapsProtoMsg;
};
export declare const ICAAccount: {
    typeUrl: string;
    encode(message: ICAAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ICAAccount;
    fromPartial(object: Partial<ICAAccount>): ICAAccount;
    fromAmino(object: ICAAccountAmino): ICAAccount;
    toAmino(message: ICAAccount): ICAAccountAmino;
    fromAminoMsg(object: ICAAccountAminoMsg): ICAAccount;
    fromProtoMsg(message: ICAAccountProtoMsg): ICAAccount;
    toProto(message: ICAAccount): Uint8Array;
    toProtoMsg(message: ICAAccount): ICAAccountProtoMsg;
};
export declare const Distribution: {
    typeUrl: string;
    encode(message: Distribution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Distribution;
    fromPartial(object: Partial<Distribution>): Distribution;
    fromAmino(object: DistributionAmino): Distribution;
    toAmino(message: Distribution): DistributionAmino;
    fromAminoMsg(object: DistributionAminoMsg): Distribution;
    fromProtoMsg(message: DistributionProtoMsg): Distribution;
    toProto(message: Distribution): Uint8Array;
    toProtoMsg(message: Distribution): DistributionProtoMsg;
};
export declare const WithdrawalRecord: {
    typeUrl: string;
    encode(message: WithdrawalRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WithdrawalRecord;
    fromPartial(object: Partial<WithdrawalRecord>): WithdrawalRecord;
    fromAmino(object: WithdrawalRecordAmino): WithdrawalRecord;
    toAmino(message: WithdrawalRecord): WithdrawalRecordAmino;
    fromAminoMsg(object: WithdrawalRecordAminoMsg): WithdrawalRecord;
    fromProtoMsg(message: WithdrawalRecordProtoMsg): WithdrawalRecord;
    toProto(message: WithdrawalRecord): Uint8Array;
    toProtoMsg(message: WithdrawalRecord): WithdrawalRecordProtoMsg;
};
export declare const UnbondingRecord: {
    typeUrl: string;
    encode(message: UnbondingRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UnbondingRecord;
    fromPartial(object: Partial<UnbondingRecord>): UnbondingRecord;
    fromAmino(object: UnbondingRecordAmino): UnbondingRecord;
    toAmino(message: UnbondingRecord): UnbondingRecordAmino;
    fromAminoMsg(object: UnbondingRecordAminoMsg): UnbondingRecord;
    fromProtoMsg(message: UnbondingRecordProtoMsg): UnbondingRecord;
    toProto(message: UnbondingRecord): Uint8Array;
    toProtoMsg(message: UnbondingRecord): UnbondingRecordProtoMsg;
};
export declare const RedelegationRecord: {
    typeUrl: string;
    encode(message: RedelegationRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RedelegationRecord;
    fromPartial(object: Partial<RedelegationRecord>): RedelegationRecord;
    fromAmino(object: RedelegationRecordAmino): RedelegationRecord;
    toAmino(message: RedelegationRecord): RedelegationRecordAmino;
    fromAminoMsg(object: RedelegationRecordAminoMsg): RedelegationRecord;
    fromProtoMsg(message: RedelegationRecordProtoMsg): RedelegationRecord;
    toProto(message: RedelegationRecord): Uint8Array;
    toProtoMsg(message: RedelegationRecord): RedelegationRecordProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Validator;
    fromPartial(object: Partial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const DelegatorIntent: {
    typeUrl: string;
    encode(message: DelegatorIntent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DelegatorIntent;
    fromPartial(object: Partial<DelegatorIntent>): DelegatorIntent;
    fromAmino(object: DelegatorIntentAmino): DelegatorIntent;
    toAmino(message: DelegatorIntent): DelegatorIntentAmino;
    fromAminoMsg(object: DelegatorIntentAminoMsg): DelegatorIntent;
    fromProtoMsg(message: DelegatorIntentProtoMsg): DelegatorIntent;
    toProto(message: DelegatorIntent): Uint8Array;
    toProtoMsg(message: DelegatorIntent): DelegatorIntentProtoMsg;
};
export declare const ValidatorIntent: {
    typeUrl: string;
    encode(message: ValidatorIntent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ValidatorIntent;
    fromPartial(object: Partial<ValidatorIntent>): ValidatorIntent;
    fromAmino(object: ValidatorIntentAmino): ValidatorIntent;
    toAmino(message: ValidatorIntent): ValidatorIntentAmino;
    fromAminoMsg(object: ValidatorIntentAminoMsg): ValidatorIntent;
    fromProtoMsg(message: ValidatorIntentProtoMsg): ValidatorIntent;
    toProto(message: ValidatorIntent): Uint8Array;
    toProtoMsg(message: ValidatorIntent): ValidatorIntentProtoMsg;
};
export declare const Delegation: {
    typeUrl: string;
    encode(message: Delegation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Delegation;
    fromPartial(object: Partial<Delegation>): Delegation;
    fromAmino(object: DelegationAmino): Delegation;
    toAmino(message: Delegation): DelegationAmino;
    fromAminoMsg(object: DelegationAminoMsg): Delegation;
    fromProtoMsg(message: DelegationProtoMsg): Delegation;
    toProto(message: Delegation): Uint8Array;
    toProtoMsg(message: Delegation): DelegationProtoMsg;
};
export declare const PortConnectionTuple: {
    typeUrl: string;
    encode(message: PortConnectionTuple, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PortConnectionTuple;
    fromPartial(object: Partial<PortConnectionTuple>): PortConnectionTuple;
    fromAmino(object: PortConnectionTupleAmino): PortConnectionTuple;
    toAmino(message: PortConnectionTuple): PortConnectionTupleAmino;
    fromAminoMsg(object: PortConnectionTupleAminoMsg): PortConnectionTuple;
    fromProtoMsg(message: PortConnectionTupleProtoMsg): PortConnectionTuple;
    toProto(message: PortConnectionTuple): Uint8Array;
    toProtoMsg(message: PortConnectionTuple): PortConnectionTupleProtoMsg;
};
export declare const Receipt: {
    typeUrl: string;
    encode(message: Receipt, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Receipt;
    fromPartial(object: Partial<Receipt>): Receipt;
    fromAmino(object: ReceiptAmino): Receipt;
    toAmino(message: Receipt): ReceiptAmino;
    fromAminoMsg(object: ReceiptAminoMsg): Receipt;
    fromProtoMsg(message: ReceiptProtoMsg): Receipt;
    toProto(message: Receipt): Uint8Array;
    toProtoMsg(message: Receipt): ReceiptProtoMsg;
};
