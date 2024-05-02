import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgUpdatePool, MsgPausePool, MsgResumePool, MsgDepositCollateral, MsgWithdrawCollateral, MsgWithdrawRewards, MsgWithdrawForeignRewards, MsgPurchaseShield, MsgWithdrawReimbursement, MsgUpdateSponsor, MsgStakeForShield, MsgUnstakeFromShield } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        updatePool(value: MsgUpdatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        pausePool(value: MsgPausePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        resumePool(value: MsgResumePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        depositCollateral(value: MsgDepositCollateral): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawCollateral(value: MsgWithdrawCollateral): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawRewards(value: MsgWithdrawRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawForeignRewards(value: MsgWithdrawForeignRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
        purchaseShield(value: MsgPurchaseShield): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawReimbursement(value: MsgWithdrawReimbursement): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateSponsor(value: MsgUpdateSponsor): {
            typeUrl: string;
            value: Uint8Array;
        };
        stakeForShield(value: MsgStakeForShield): {
            typeUrl: string;
            value: Uint8Array;
        };
        unstakeFromShield(value: MsgUnstakeFromShield): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        updatePool(value: MsgUpdatePool): {
            typeUrl: string;
            value: MsgUpdatePool;
        };
        pausePool(value: MsgPausePool): {
            typeUrl: string;
            value: MsgPausePool;
        };
        resumePool(value: MsgResumePool): {
            typeUrl: string;
            value: MsgResumePool;
        };
        depositCollateral(value: MsgDepositCollateral): {
            typeUrl: string;
            value: MsgDepositCollateral;
        };
        withdrawCollateral(value: MsgWithdrawCollateral): {
            typeUrl: string;
            value: MsgWithdrawCollateral;
        };
        withdrawRewards(value: MsgWithdrawRewards): {
            typeUrl: string;
            value: MsgWithdrawRewards;
        };
        withdrawForeignRewards(value: MsgWithdrawForeignRewards): {
            typeUrl: string;
            value: MsgWithdrawForeignRewards;
        };
        purchaseShield(value: MsgPurchaseShield): {
            typeUrl: string;
            value: MsgPurchaseShield;
        };
        withdrawReimbursement(value: MsgWithdrawReimbursement): {
            typeUrl: string;
            value: MsgWithdrawReimbursement;
        };
        updateSponsor(value: MsgUpdateSponsor): {
            typeUrl: string;
            value: MsgUpdateSponsor;
        };
        stakeForShield(value: MsgStakeForShield): {
            typeUrl: string;
            value: MsgStakeForShield;
        };
        unstakeFromShield(value: MsgUnstakeFromShield): {
            typeUrl: string;
            value: MsgUnstakeFromShield;
        };
    };
    fromJSON: {
        createPool(value: any): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        updatePool(value: any): {
            typeUrl: string;
            value: MsgUpdatePool;
        };
        pausePool(value: any): {
            typeUrl: string;
            value: MsgPausePool;
        };
        resumePool(value: any): {
            typeUrl: string;
            value: MsgResumePool;
        };
        depositCollateral(value: any): {
            typeUrl: string;
            value: MsgDepositCollateral;
        };
        withdrawCollateral(value: any): {
            typeUrl: string;
            value: MsgWithdrawCollateral;
        };
        withdrawRewards(value: any): {
            typeUrl: string;
            value: MsgWithdrawRewards;
        };
        withdrawForeignRewards(value: any): {
            typeUrl: string;
            value: MsgWithdrawForeignRewards;
        };
        purchaseShield(value: any): {
            typeUrl: string;
            value: MsgPurchaseShield;
        };
        withdrawReimbursement(value: any): {
            typeUrl: string;
            value: MsgWithdrawReimbursement;
        };
        updateSponsor(value: any): {
            typeUrl: string;
            value: MsgUpdateSponsor;
        };
        stakeForShield(value: any): {
            typeUrl: string;
            value: MsgStakeForShield;
        };
        unstakeFromShield(value: any): {
            typeUrl: string;
            value: MsgUnstakeFromShield;
        };
    };
    fromPartial: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        updatePool(value: MsgUpdatePool): {
            typeUrl: string;
            value: MsgUpdatePool;
        };
        pausePool(value: MsgPausePool): {
            typeUrl: string;
            value: MsgPausePool;
        };
        resumePool(value: MsgResumePool): {
            typeUrl: string;
            value: MsgResumePool;
        };
        depositCollateral(value: MsgDepositCollateral): {
            typeUrl: string;
            value: MsgDepositCollateral;
        };
        withdrawCollateral(value: MsgWithdrawCollateral): {
            typeUrl: string;
            value: MsgWithdrawCollateral;
        };
        withdrawRewards(value: MsgWithdrawRewards): {
            typeUrl: string;
            value: MsgWithdrawRewards;
        };
        withdrawForeignRewards(value: MsgWithdrawForeignRewards): {
            typeUrl: string;
            value: MsgWithdrawForeignRewards;
        };
        purchaseShield(value: MsgPurchaseShield): {
            typeUrl: string;
            value: MsgPurchaseShield;
        };
        withdrawReimbursement(value: MsgWithdrawReimbursement): {
            typeUrl: string;
            value: MsgWithdrawReimbursement;
        };
        updateSponsor(value: MsgUpdateSponsor): {
            typeUrl: string;
            value: MsgUpdateSponsor;
        };
        stakeForShield(value: MsgStakeForShield): {
            typeUrl: string;
            value: MsgStakeForShield;
        };
        unstakeFromShield(value: MsgUnstakeFromShield): {
            typeUrl: string;
            value: MsgUnstakeFromShield;
        };
    };
};
