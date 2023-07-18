import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDeposit {
    /** depositor represents the owner of the delegation to convert */
    depositor: string;
    /** validator is the validator for the depositor's delegation */
    validator: string;
    /** amount is the delegation balance to convert */
    amount?: Coin;
}
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDepositSDKType {
    depositor: string;
    validator: string;
    amount?: CoinSDKType;
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponse {
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponseSDKType {
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDeposit {
    /** depositor represents the owner of the tokens to delegate */
    depositor: string;
    /** validator is the address of the validator to delegate to */
    validator: string;
    /** amount is the tokens to delegate */
    amount?: Coin;
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDepositSDKType {
    depositor: string;
    validator: string;
    amount?: CoinSDKType;
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponse {
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponseSDKType {
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurn {
    /** from is the owner of the earn vault to withdraw from */
    from: string;
    /** validator is the address to select the derivative denom to withdraw */
    validator: string;
    /** amount is the staked token equivalent to withdraw */
    amount?: Coin;
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurnSDKType {
    from: string;
    validator: string;
    amount?: CoinSDKType;
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponse {
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponseSDKType {
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegate {
    /** from is the owner of the earn vault to withdraw from */
    from: string;
    /** validator is the address to select the derivative denom to withdraw */
    validator: string;
    /** amount is the staked token equivalent to withdraw */
    amount?: Coin;
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegateSDKType {
    from: string;
    validator: string;
    amount?: CoinSDKType;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponse {
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponseSDKType {
}
export declare const MsgMintDeposit: {
    encode(message: MsgMintDeposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMintDeposit;
    fromPartial(object: Partial<MsgMintDeposit>): MsgMintDeposit;
};
export declare const MsgMintDepositResponse: {
    encode(_: MsgMintDepositResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgMintDepositResponse;
    fromPartial(_: Partial<MsgMintDepositResponse>): MsgMintDepositResponse;
};
export declare const MsgDelegateMintDeposit: {
    encode(message: MsgDelegateMintDeposit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDelegateMintDeposit;
    fromPartial(object: Partial<MsgDelegateMintDeposit>): MsgDelegateMintDeposit;
};
export declare const MsgDelegateMintDepositResponse: {
    encode(_: MsgDelegateMintDepositResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDelegateMintDepositResponse;
    fromPartial(_: Partial<MsgDelegateMintDepositResponse>): MsgDelegateMintDepositResponse;
};
export declare const MsgWithdrawBurn: {
    encode(message: MsgWithdrawBurn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawBurn;
    fromPartial(object: Partial<MsgWithdrawBurn>): MsgWithdrawBurn;
};
export declare const MsgWithdrawBurnResponse: {
    encode(_: MsgWithdrawBurnResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWithdrawBurnResponse;
    fromPartial(_: Partial<MsgWithdrawBurnResponse>): MsgWithdrawBurnResponse;
};
export declare const MsgWithdrawBurnUndelegate: {
    encode(message: MsgWithdrawBurnUndelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawBurnUndelegate;
    fromPartial(object: Partial<MsgWithdrawBurnUndelegate>): MsgWithdrawBurnUndelegate;
};
export declare const MsgWithdrawBurnUndelegateResponse: {
    encode(_: MsgWithdrawBurnUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWithdrawBurnUndelegateResponse;
    fromPartial(_: Partial<MsgWithdrawBurnUndelegateResponse>): MsgWithdrawBurnUndelegateResponse;
};
