import { Rpc } from "../../../helpers";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUnbondValidator, MsgUnbondValidatorResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse, MsgValidatorBond, MsgValidatorBondResponse } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
    /** CreateValidator defines a method for creating a new validator. */
    createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    /** EditValidator defines a method for editing an existing validator. */
    editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     * This allows a validator to stop their services and jail themselves without
     * experiencing a slash.
     */
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    /**
     * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
     * and delegate back to previous validator.
     *
     * This is a desirable safety feature for LSM.
     * If a liquid staking provider is exploited and the exploiter initiates an undelegation,
     * having access to CancelUnbondingDelegation allows the liquid staking provider to cancel
     * the undelegation with a software upgrade and thus avoid loss of user funds.
     *
     * Since: cosmos-sdk 0.46
     */
    cancelUnbondingDelegation(request: MsgCancelUnbondingDelegation): Promise<MsgCancelUnbondingDelegationResponse>;
    /**
     * UpdateParams defines an operation for updating the x/staking module
     * parameters.
     *
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /**
     * UnbondValidator defines a method for performing the status transition for a validator
     * from bonded to unbonding.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    unbondValidator(request: MsgUnbondValidator): Promise<MsgUnbondValidatorResponse>;
    /**
     * TokenizeShares defines a method for tokenizing shares from a validator.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
    /**
     * RedeemTokensForShares defines a method for redeeming tokens from a validator for
     * shares.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
    /**
     * TransferTokenizeShareRecord defines a method to transfer ownership of
     * TokenizeShareRecord.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse>;
    /**
     * DisableTokenizeShares defines a method to prevent the tokenization of an addresses stake.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
    /**
     * EnableTokenizeShares defines a method to re-enable the tokenization of an addresseses stake
     * after it has been disabled.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
    /**
     * ValidatorBond defines a method for performing a validator self-bond.
     *
     * Since: cosmos-sdk 0.47-lsm
     */
    validatorBond(request: MsgValidatorBond): Promise<MsgValidatorBondResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    cancelUnbondingDelegation(request: MsgCancelUnbondingDelegation): Promise<MsgCancelUnbondingDelegationResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    unbondValidator(request: MsgUnbondValidator): Promise<MsgUnbondValidatorResponse>;
    tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
    redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
    transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse>;
    disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
    enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
    validatorBond(request: MsgValidatorBond): Promise<MsgValidatorBondResponse>;
}
