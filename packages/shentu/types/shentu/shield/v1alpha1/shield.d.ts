import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** Fees proto wrapper for pool.go methods */
export interface Fees {
    fees: DecCoin[];
}
export interface FeesProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.Fees";
    value: Uint8Array;
}
/** Fees proto wrapper for pool.go methods */
export interface FeesAmino {
    fees?: DecCoinAmino[];
}
export interface FeesAminoMsg {
    type: "/shentu.shield.v1alpha1.Fees";
    value: FeesAmino;
}
/** Fees proto wrapper for pool.go methods */
export interface FeesSDKType {
    fees: DecCoinSDKType[];
}
/** Pool contains a shield project pool's data. */
export interface Pool {
    id: bigint;
    description: string;
    sponsor: string;
    sponsorAddr: string;
    shieldLimit: string;
    active: boolean;
    shield: string;
}
export interface PoolProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.Pool";
    value: Uint8Array;
}
/** Pool contains a shield project pool's data. */
export interface PoolAmino {
    id?: string;
    description?: string;
    sponsor?: string;
    sponsor_addr?: string;
    shield_limit?: string;
    active?: boolean;
    shield?: string;
}
export interface PoolAminoMsg {
    type: "/shentu.shield.v1alpha1.Pool";
    value: PoolAmino;
}
/** Pool contains a shield project pool's data. */
export interface PoolSDKType {
    id: bigint;
    description: string;
    sponsor: string;
    sponsor_addr: string;
    shield_limit: string;
    active: boolean;
    shield: string;
}
/** Purchase record an individual purchase. */
export interface Purchase {
    /** PurchaseID is the purchase_id. */
    purchaseId: bigint;
    /** ProtectionEndTime is the time when the protection of the shield ends. */
    protectionEndTime: Timestamp;
    /** DeletionTime is the time when the purchase should be deleted. */
    deletionTime: Timestamp;
    /** Description is the information about the protected asset. */
    description: string;
    /** Shield is the unused amount of shield purchased. */
    shield: string;
    /** ServiceFees is the native service fee paid by this purchase */
    serviceFees: DecCoin[];
}
export interface PurchaseProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.Purchase";
    value: Uint8Array;
}
/** Purchase record an individual purchase. */
export interface PurchaseAmino {
    /** PurchaseID is the purchase_id. */
    purchase_id?: string;
    /** ProtectionEndTime is the time when the protection of the shield ends. */
    protection_end_time?: string;
    /** DeletionTime is the time when the purchase should be deleted. */
    deletion_time?: string;
    /** Description is the information about the protected asset. */
    description?: string;
    /** Shield is the unused amount of shield purchased. */
    shield?: string;
    /** ServiceFees is the native service fee paid by this purchase */
    service_fees?: DecCoinAmino[];
}
export interface PurchaseAminoMsg {
    type: "/shentu.shield.v1alpha1.Purchase";
    value: PurchaseAmino;
}
/** Purchase record an individual purchase. */
export interface PurchaseSDKType {
    purchase_id: bigint;
    protection_end_time: TimestampSDKType;
    deletion_time: TimestampSDKType;
    description: string;
    shield: string;
    service_fees: DecCoinSDKType[];
}
/** PurchaseList is a collection of purchase. */
export interface PurchaseList {
    /** PoolID is the id of the shield of the purchase. */
    poolId: bigint;
    /** Purchaser is the address making the purchase. */
    purchaser: string;
    /** Entries stores all purchases by the purchaser in the pool. */
    entries: Purchase[];
}
export interface PurchaseListProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.PurchaseList";
    value: Uint8Array;
}
/** PurchaseList is a collection of purchase. */
export interface PurchaseListAmino {
    /** PoolID is the id of the shield of the purchase. */
    pool_id?: string;
    /** Purchaser is the address making the purchase. */
    purchaser?: string;
    /** Entries stores all purchases by the purchaser in the pool. */
    entries?: PurchaseAmino[];
}
export interface PurchaseListAminoMsg {
    type: "/shentu.shield.v1alpha1.PurchaseList";
    value: PurchaseListAmino;
}
/** PurchaseList is a collection of purchase. */
export interface PurchaseListSDKType {
    pool_id: bigint;
    purchaser: string;
    entries: PurchaseSDKType[];
}
/** Provider tracks total delegation, total collateral, and rewards of a provider. */
export interface Provider {
    /** Address is the address of the provider. */
    address: string;
    /** DelegationBonded is the amount of bonded delegation. */
    delegationBonded: string;
    /**
     * Collateral is amount of all collaterals for the provider, including
     * those in withdraw queue but excluding those currently locked, in all
     * pools.
     */
    collateral: string;
    /** TotalLocked is the amount locked for pending claims. */
    totalLocked: string;
    /** Withdrawing is the amount of collateral in withdraw queues. */
    withdrawing: string;
    /** Rewards is the pooling rewards to be collected. */
    rewards: DecCoin[];
}
export interface ProviderProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.Provider";
    value: Uint8Array;
}
/** Provider tracks total delegation, total collateral, and rewards of a provider. */
export interface ProviderAmino {
    /** Address is the address of the provider. */
    address?: string;
    /** DelegationBonded is the amount of bonded delegation. */
    delegation_bonded?: string;
    /**
     * Collateral is amount of all collaterals for the provider, including
     * those in withdraw queue but excluding those currently locked, in all
     * pools.
     */
    collateral?: string;
    /** TotalLocked is the amount locked for pending claims. */
    total_locked?: string;
    /** Withdrawing is the amount of collateral in withdraw queues. */
    withdrawing?: string;
    /** Rewards is the pooling rewards to be collected. */
    rewards?: DecCoinAmino[];
}
export interface ProviderAminoMsg {
    type: "/shentu.shield.v1alpha1.Provider";
    value: ProviderAmino;
}
/** Provider tracks total delegation, total collateral, and rewards of a provider. */
export interface ProviderSDKType {
    address: string;
    delegation_bonded: string;
    collateral: string;
    total_locked: string;
    withdrawing: string;
    rewards: DecCoinSDKType[];
}
/** PoolPurchase is a pair of pool id and purchaser. */
export interface PoolPurchaser {
    /** PoolID is the id of the shield pool. */
    poolId: bigint;
    /** Purchaser is the chain address of the purchaser. */
    purchaser: string;
}
export interface PoolPurchaserProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.PoolPurchaser";
    value: Uint8Array;
}
/** PoolPurchase is a pair of pool id and purchaser. */
export interface PoolPurchaserAmino {
    /** PoolID is the id of the shield pool. */
    pool_id?: string;
    /** Purchaser is the chain address of the purchaser. */
    purchaser?: string;
}
export interface PoolPurchaserAminoMsg {
    type: "/shentu.shield.v1alpha1.PoolPurchaser";
    value: PoolPurchaserAmino;
}
/** PoolPurchase is a pair of pool id and purchaser. */
export interface PoolPurchaserSDKType {
    pool_id: bigint;
    purchaser: string;
}
/** PoolPurchaserPairs defines an array of PoolPurchaser objects. */
export interface PoolPurchaserPairs {
    pairs: PoolPurchaser[];
}
export interface PoolPurchaserPairsProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.PoolPurchaserPairs";
    value: Uint8Array;
}
/** PoolPurchaserPairs defines an array of PoolPurchaser objects. */
export interface PoolPurchaserPairsAmino {
    pairs?: PoolPurchaserAmino[];
}
export interface PoolPurchaserPairsAminoMsg {
    type: "/shentu.shield.v1alpha1.PoolPurchaserPairs";
    value: PoolPurchaserPairsAmino;
}
/** PoolPurchaserPairs defines an array of PoolPurchaser objects. */
export interface PoolPurchaserPairsSDKType {
    pairs: PoolPurchaserSDKType[];
}
/** Withdraw stores an ongoing withdraw of pool collateral. */
export interface Withdraw {
    /** Address is the chain address of the provider withdrawing. */
    address: string;
    /** Amount is the amount of withdraw. */
    amount: string;
    /** CompletionTime is the scheduled withdraw completion time. */
    completionTime: Timestamp;
}
export interface WithdrawProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.Withdraw";
    value: Uint8Array;
}
/** Withdraw stores an ongoing withdraw of pool collateral. */
export interface WithdrawAmino {
    /** Address is the chain address of the provider withdrawing. */
    address?: string;
    /** Amount is the amount of withdraw. */
    amount?: string;
    /** CompletionTime is the scheduled withdraw completion time. */
    completion_time?: string;
}
export interface WithdrawAminoMsg {
    type: "/shentu.shield.v1alpha1.Withdraw";
    value: WithdrawAmino;
}
/** Withdraw stores an ongoing withdraw of pool collateral. */
export interface WithdrawSDKType {
    address: string;
    amount: string;
    completion_time: TimestampSDKType;
}
/** Withdraws defines an array of Withdraw objects. */
export interface Withdraws {
    withdraws: Withdraw[];
}
export interface WithdrawsProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.Withdraws";
    value: Uint8Array;
}
/** Withdraws defines an array of Withdraw objects. */
export interface WithdrawsAmino {
    withdraws?: WithdrawAmino[];
}
export interface WithdrawsAminoMsg {
    type: "/shentu.shield.v1alpha1.Withdraws";
    value: WithdrawsAmino;
}
/** Withdraws defines an array of Withdraw objects. */
export interface WithdrawsSDKType {
    withdraws: WithdrawSDKType[];
}
export interface ShieldStaking {
    poolId: bigint;
    purchaser: string;
    amount: string;
    withdrawRequested: string;
}
export interface ShieldStakingProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.ShieldStaking";
    value: Uint8Array;
}
export interface ShieldStakingAmino {
    pool_id?: string;
    purchaser?: string;
    amount?: string;
    withdraw_requested?: string;
}
export interface ShieldStakingAminoMsg {
    type: "/shentu.shield.v1alpha1.ShieldStaking";
    value: ShieldStakingAmino;
}
export interface ShieldStakingSDKType {
    pool_id: bigint;
    purchaser: string;
    amount: string;
    withdraw_requested: string;
}
export interface LastUpdateTime {
    time?: Timestamp;
}
export interface LastUpdateTimeProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.LastUpdateTime";
    value: Uint8Array;
}
export interface LastUpdateTimeAmino {
    time?: string;
}
export interface LastUpdateTimeAminoMsg {
    type: "/shentu.shield.v1alpha1.LastUpdateTime";
    value: LastUpdateTimeAmino;
}
export interface LastUpdateTimeSDKType {
    time?: TimestampSDKType;
}
export interface ShieldClaimProposal {
    $typeUrl?: "/shentu.shield.v1alpha1.ShieldClaimProposal";
    proposalId: bigint;
    poolId: bigint;
    purchaseId: bigint;
    loss: Coin[];
    evidence: string;
    description: string;
    proposer: string;
}
export interface ShieldClaimProposalProtoMsg {
    typeUrl: "/shentu.shield.v1alpha1.ShieldClaimProposal";
    value: Uint8Array;
}
export interface ShieldClaimProposalAmino {
    proposal_id?: string;
    pool_id?: string;
    purchase_id?: string;
    loss?: CoinAmino[];
    evidence?: string;
    description?: string;
    proposer?: string;
}
export interface ShieldClaimProposalAminoMsg {
    type: "/shentu.shield.v1alpha1.ShieldClaimProposal";
    value: ShieldClaimProposalAmino;
}
export interface ShieldClaimProposalSDKType {
    $typeUrl?: "/shentu.shield.v1alpha1.ShieldClaimProposal";
    proposal_id: bigint;
    pool_id: bigint;
    purchase_id: bigint;
    loss: CoinSDKType[];
    evidence: string;
    description: string;
    proposer: string;
}
export declare const Fees: {
    typeUrl: string;
    encode(message: Fees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Fees;
    fromPartial(object: Partial<Fees>): Fees;
    fromAmino(object: FeesAmino): Fees;
    toAmino(message: Fees): FeesAmino;
    fromAminoMsg(object: FeesAminoMsg): Fees;
    fromProtoMsg(message: FeesProtoMsg): Fees;
    toProto(message: Fees): Uint8Array;
    toProtoMsg(message: Fees): FeesProtoMsg;
};
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
export declare const Purchase: {
    typeUrl: string;
    encode(message: Purchase, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Purchase;
    fromPartial(object: Partial<Purchase>): Purchase;
    fromAmino(object: PurchaseAmino): Purchase;
    toAmino(message: Purchase): PurchaseAmino;
    fromAminoMsg(object: PurchaseAminoMsg): Purchase;
    fromProtoMsg(message: PurchaseProtoMsg): Purchase;
    toProto(message: Purchase): Uint8Array;
    toProtoMsg(message: Purchase): PurchaseProtoMsg;
};
export declare const PurchaseList: {
    typeUrl: string;
    encode(message: PurchaseList, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PurchaseList;
    fromPartial(object: Partial<PurchaseList>): PurchaseList;
    fromAmino(object: PurchaseListAmino): PurchaseList;
    toAmino(message: PurchaseList): PurchaseListAmino;
    fromAminoMsg(object: PurchaseListAminoMsg): PurchaseList;
    fromProtoMsg(message: PurchaseListProtoMsg): PurchaseList;
    toProto(message: PurchaseList): Uint8Array;
    toProtoMsg(message: PurchaseList): PurchaseListProtoMsg;
};
export declare const Provider: {
    typeUrl: string;
    encode(message: Provider, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Provider;
    fromPartial(object: Partial<Provider>): Provider;
    fromAmino(object: ProviderAmino): Provider;
    toAmino(message: Provider): ProviderAmino;
    fromAminoMsg(object: ProviderAminoMsg): Provider;
    fromProtoMsg(message: ProviderProtoMsg): Provider;
    toProto(message: Provider): Uint8Array;
    toProtoMsg(message: Provider): ProviderProtoMsg;
};
export declare const PoolPurchaser: {
    typeUrl: string;
    encode(message: PoolPurchaser, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolPurchaser;
    fromPartial(object: Partial<PoolPurchaser>): PoolPurchaser;
    fromAmino(object: PoolPurchaserAmino): PoolPurchaser;
    toAmino(message: PoolPurchaser): PoolPurchaserAmino;
    fromAminoMsg(object: PoolPurchaserAminoMsg): PoolPurchaser;
    fromProtoMsg(message: PoolPurchaserProtoMsg): PoolPurchaser;
    toProto(message: PoolPurchaser): Uint8Array;
    toProtoMsg(message: PoolPurchaser): PoolPurchaserProtoMsg;
};
export declare const PoolPurchaserPairs: {
    typeUrl: string;
    encode(message: PoolPurchaserPairs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolPurchaserPairs;
    fromPartial(object: Partial<PoolPurchaserPairs>): PoolPurchaserPairs;
    fromAmino(object: PoolPurchaserPairsAmino): PoolPurchaserPairs;
    toAmino(message: PoolPurchaserPairs): PoolPurchaserPairsAmino;
    fromAminoMsg(object: PoolPurchaserPairsAminoMsg): PoolPurchaserPairs;
    fromProtoMsg(message: PoolPurchaserPairsProtoMsg): PoolPurchaserPairs;
    toProto(message: PoolPurchaserPairs): Uint8Array;
    toProtoMsg(message: PoolPurchaserPairs): PoolPurchaserPairsProtoMsg;
};
export declare const Withdraw: {
    typeUrl: string;
    encode(message: Withdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Withdraw;
    fromPartial(object: Partial<Withdraw>): Withdraw;
    fromAmino(object: WithdrawAmino): Withdraw;
    toAmino(message: Withdraw): WithdrawAmino;
    fromAminoMsg(object: WithdrawAminoMsg): Withdraw;
    fromProtoMsg(message: WithdrawProtoMsg): Withdraw;
    toProto(message: Withdraw): Uint8Array;
    toProtoMsg(message: Withdraw): WithdrawProtoMsg;
};
export declare const Withdraws: {
    typeUrl: string;
    encode(message: Withdraws, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Withdraws;
    fromPartial(object: Partial<Withdraws>): Withdraws;
    fromAmino(object: WithdrawsAmino): Withdraws;
    toAmino(message: Withdraws): WithdrawsAmino;
    fromAminoMsg(object: WithdrawsAminoMsg): Withdraws;
    fromProtoMsg(message: WithdrawsProtoMsg): Withdraws;
    toProto(message: Withdraws): Uint8Array;
    toProtoMsg(message: Withdraws): WithdrawsProtoMsg;
};
export declare const ShieldStaking: {
    typeUrl: string;
    encode(message: ShieldStaking, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ShieldStaking;
    fromPartial(object: Partial<ShieldStaking>): ShieldStaking;
    fromAmino(object: ShieldStakingAmino): ShieldStaking;
    toAmino(message: ShieldStaking): ShieldStakingAmino;
    fromAminoMsg(object: ShieldStakingAminoMsg): ShieldStaking;
    fromProtoMsg(message: ShieldStakingProtoMsg): ShieldStaking;
    toProto(message: ShieldStaking): Uint8Array;
    toProtoMsg(message: ShieldStaking): ShieldStakingProtoMsg;
};
export declare const LastUpdateTime: {
    typeUrl: string;
    encode(message: LastUpdateTime, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LastUpdateTime;
    fromPartial(object: Partial<LastUpdateTime>): LastUpdateTime;
    fromAmino(object: LastUpdateTimeAmino): LastUpdateTime;
    toAmino(message: LastUpdateTime): LastUpdateTimeAmino;
    fromAminoMsg(object: LastUpdateTimeAminoMsg): LastUpdateTime;
    fromProtoMsg(message: LastUpdateTimeProtoMsg): LastUpdateTime;
    toProto(message: LastUpdateTime): Uint8Array;
    toProtoMsg(message: LastUpdateTime): LastUpdateTimeProtoMsg;
};
export declare const ShieldClaimProposal: {
    typeUrl: string;
    encode(message: ShieldClaimProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ShieldClaimProposal;
    fromPartial(object: Partial<ShieldClaimProposal>): ShieldClaimProposal;
    fromAmino(object: ShieldClaimProposalAmino): ShieldClaimProposal;
    toAmino(message: ShieldClaimProposal): ShieldClaimProposalAmino;
    fromAminoMsg(object: ShieldClaimProposalAminoMsg): ShieldClaimProposal;
    fromProtoMsg(message: ShieldClaimProposalProtoMsg): ShieldClaimProposal;
    toProto(message: ShieldClaimProposal): Uint8Array;
    toProtoMsg(message: ShieldClaimProposal): ShieldClaimProposalProtoMsg;
};
