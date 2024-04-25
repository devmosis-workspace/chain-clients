import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDeposit {
    /** depositor represents the owner of the delegation to convert */
    depositor: string;
    /** validator is the validator for the depositor's delegation */
    validator: string;
    /** amount is the delegation balance to convert */
    amount: Coin;
}
export interface MsgMintDepositProtoMsg {
    typeUrl: "/kava.router.v1beta1.MsgMintDeposit";
    value: Uint8Array;
}
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDepositAmino {
    /** depositor represents the owner of the delegation to convert */
    depositor?: string;
    /** validator is the validator for the depositor's delegation */
    validator?: string;
    /** amount is the delegation balance to convert */
    amount?: CoinAmino;
}
export interface MsgMintDepositAminoMsg {
    type: "/kava.router.v1beta1.MsgMintDeposit";
    value: MsgMintDepositAmino;
}
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDepositSDKType {
    depositor: string;
    validator: string;
    amount: CoinSDKType;
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponse {
}
export interface MsgMintDepositResponseProtoMsg {
    typeUrl: "/kava.router.v1beta1.MsgMintDepositResponse";
    value: Uint8Array;
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponseAmino {
}
export interface MsgMintDepositResponseAminoMsg {
    type: "/kava.router.v1beta1.MsgMintDepositResponse";
    value: MsgMintDepositResponseAmino;
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
    amount: Coin;
}
export interface MsgDelegateMintDepositProtoMsg {
    typeUrl: "/kava.router.v1beta1.MsgDelegateMintDeposit";
    value: Uint8Array;
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDepositAmino {
    /** depositor represents the owner of the tokens to delegate */
    depositor?: string;
    /** validator is the address of the validator to delegate to */
    validator?: string;
    /** amount is the tokens to delegate */
    amount?: CoinAmino;
}
export interface MsgDelegateMintDepositAminoMsg {
    type: "/kava.router.v1beta1.MsgDelegateMintDeposit";
    value: MsgDelegateMintDepositAmino;
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDepositSDKType {
    depositor: string;
    validator: string;
    amount: CoinSDKType;
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponse {
}
export interface MsgDelegateMintDepositResponseProtoMsg {
    typeUrl: "/kava.router.v1beta1.MsgDelegateMintDepositResponse";
    value: Uint8Array;
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponseAmino {
}
export interface MsgDelegateMintDepositResponseAminoMsg {
    type: "/kava.router.v1beta1.MsgDelegateMintDepositResponse";
    value: MsgDelegateMintDepositResponseAmino;
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
    amount: Coin;
}
export interface MsgWithdrawBurnProtoMsg {
    typeUrl: "/kava.router.v1beta1.MsgWithdrawBurn";
    value: Uint8Array;
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurnAmino {
    /** from is the owner of the earn vault to withdraw from */
    from?: string;
    /** validator is the address to select the derivative denom to withdraw */
    validator?: string;
    /** amount is the staked token equivalent to withdraw */
    amount?: CoinAmino;
}
export interface MsgWithdrawBurnAminoMsg {
    type: "/kava.router.v1beta1.MsgWithdrawBurn";
    value: MsgWithdrawBurnAmino;
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurnSDKType {
    from: string;
    validator: string;
    amount: CoinSDKType;
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponse {
}
export interface MsgWithdrawBurnResponseProtoMsg {
    typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnResponse";
    value: Uint8Array;
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponseAmino {
}
export interface MsgWithdrawBurnResponseAminoMsg {
    type: "/kava.router.v1beta1.MsgWithdrawBurnResponse";
    value: MsgWithdrawBurnResponseAmino;
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
    amount: Coin;
}
export interface MsgWithdrawBurnUndelegateProtoMsg {
    typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate";
    value: Uint8Array;
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegateAmino {
    /** from is the owner of the earn vault to withdraw from */
    from?: string;
    /** validator is the address to select the derivative denom to withdraw */
    validator?: string;
    /** amount is the staked token equivalent to withdraw */
    amount?: CoinAmino;
}
export interface MsgWithdrawBurnUndelegateAminoMsg {
    type: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate";
    value: MsgWithdrawBurnUndelegateAmino;
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegateSDKType {
    from: string;
    validator: string;
    amount: CoinSDKType;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponse {
}
export interface MsgWithdrawBurnUndelegateResponseProtoMsg {
    typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegateResponse";
    value: Uint8Array;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponseAmino {
}
export interface MsgWithdrawBurnUndelegateResponseAminoMsg {
    type: "/kava.router.v1beta1.MsgWithdrawBurnUndelegateResponse";
    value: MsgWithdrawBurnUndelegateResponseAmino;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponseSDKType {
}
export declare const MsgMintDeposit: {
    typeUrl: string;
    encode(message: MsgMintDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMintDeposit;
    fromPartial(object: Partial<MsgMintDeposit>): MsgMintDeposit;
    fromAmino(object: MsgMintDepositAmino): MsgMintDeposit;
    toAmino(message: MsgMintDeposit): MsgMintDepositAmino;
    fromAminoMsg(object: MsgMintDepositAminoMsg): MsgMintDeposit;
    fromProtoMsg(message: MsgMintDepositProtoMsg): MsgMintDeposit;
    toProto(message: MsgMintDeposit): Uint8Array;
    toProtoMsg(message: MsgMintDeposit): MsgMintDepositProtoMsg;
};
export declare const MsgMintDepositResponse: {
    typeUrl: string;
    encode(_: MsgMintDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMintDepositResponse;
    fromPartial(_: Partial<MsgMintDepositResponse>): MsgMintDepositResponse;
    fromAmino(_: MsgMintDepositResponseAmino): MsgMintDepositResponse;
    toAmino(_: MsgMintDepositResponse): MsgMintDepositResponseAmino;
    fromAminoMsg(object: MsgMintDepositResponseAminoMsg): MsgMintDepositResponse;
    fromProtoMsg(message: MsgMintDepositResponseProtoMsg): MsgMintDepositResponse;
    toProto(message: MsgMintDepositResponse): Uint8Array;
    toProtoMsg(message: MsgMintDepositResponse): MsgMintDepositResponseProtoMsg;
};
export declare const MsgDelegateMintDeposit: {
    typeUrl: string;
    encode(message: MsgDelegateMintDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDelegateMintDeposit;
    fromPartial(object: Partial<MsgDelegateMintDeposit>): MsgDelegateMintDeposit;
    fromAmino(object: MsgDelegateMintDepositAmino): MsgDelegateMintDeposit;
    toAmino(message: MsgDelegateMintDeposit): MsgDelegateMintDepositAmino;
    fromAminoMsg(object: MsgDelegateMintDepositAminoMsg): MsgDelegateMintDeposit;
    fromProtoMsg(message: MsgDelegateMintDepositProtoMsg): MsgDelegateMintDeposit;
    toProto(message: MsgDelegateMintDeposit): Uint8Array;
    toProtoMsg(message: MsgDelegateMintDeposit): MsgDelegateMintDepositProtoMsg;
};
export declare const MsgDelegateMintDepositResponse: {
    typeUrl: string;
    encode(_: MsgDelegateMintDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDelegateMintDepositResponse;
    fromPartial(_: Partial<MsgDelegateMintDepositResponse>): MsgDelegateMintDepositResponse;
    fromAmino(_: MsgDelegateMintDepositResponseAmino): MsgDelegateMintDepositResponse;
    toAmino(_: MsgDelegateMintDepositResponse): MsgDelegateMintDepositResponseAmino;
    fromAminoMsg(object: MsgDelegateMintDepositResponseAminoMsg): MsgDelegateMintDepositResponse;
    fromProtoMsg(message: MsgDelegateMintDepositResponseProtoMsg): MsgDelegateMintDepositResponse;
    toProto(message: MsgDelegateMintDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateMintDepositResponse): MsgDelegateMintDepositResponseProtoMsg;
};
export declare const MsgWithdrawBurn: {
    typeUrl: string;
    encode(message: MsgWithdrawBurn, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawBurn;
    fromPartial(object: Partial<MsgWithdrawBurn>): MsgWithdrawBurn;
    fromAmino(object: MsgWithdrawBurnAmino): MsgWithdrawBurn;
    toAmino(message: MsgWithdrawBurn): MsgWithdrawBurnAmino;
    fromAminoMsg(object: MsgWithdrawBurnAminoMsg): MsgWithdrawBurn;
    fromProtoMsg(message: MsgWithdrawBurnProtoMsg): MsgWithdrawBurn;
    toProto(message: MsgWithdrawBurn): Uint8Array;
    toProtoMsg(message: MsgWithdrawBurn): MsgWithdrawBurnProtoMsg;
};
export declare const MsgWithdrawBurnResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawBurnResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawBurnResponse;
    fromPartial(_: Partial<MsgWithdrawBurnResponse>): MsgWithdrawBurnResponse;
    fromAmino(_: MsgWithdrawBurnResponseAmino): MsgWithdrawBurnResponse;
    toAmino(_: MsgWithdrawBurnResponse): MsgWithdrawBurnResponseAmino;
    fromAminoMsg(object: MsgWithdrawBurnResponseAminoMsg): MsgWithdrawBurnResponse;
    fromProtoMsg(message: MsgWithdrawBurnResponseProtoMsg): MsgWithdrawBurnResponse;
    toProto(message: MsgWithdrawBurnResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawBurnResponse): MsgWithdrawBurnResponseProtoMsg;
};
export declare const MsgWithdrawBurnUndelegate: {
    typeUrl: string;
    encode(message: MsgWithdrawBurnUndelegate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawBurnUndelegate;
    fromPartial(object: Partial<MsgWithdrawBurnUndelegate>): MsgWithdrawBurnUndelegate;
    fromAmino(object: MsgWithdrawBurnUndelegateAmino): MsgWithdrawBurnUndelegate;
    toAmino(message: MsgWithdrawBurnUndelegate): MsgWithdrawBurnUndelegateAmino;
    fromAminoMsg(object: MsgWithdrawBurnUndelegateAminoMsg): MsgWithdrawBurnUndelegate;
    fromProtoMsg(message: MsgWithdrawBurnUndelegateProtoMsg): MsgWithdrawBurnUndelegate;
    toProto(message: MsgWithdrawBurnUndelegate): Uint8Array;
    toProtoMsg(message: MsgWithdrawBurnUndelegate): MsgWithdrawBurnUndelegateProtoMsg;
};
export declare const MsgWithdrawBurnUndelegateResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawBurnUndelegateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawBurnUndelegateResponse;
    fromPartial(_: Partial<MsgWithdrawBurnUndelegateResponse>): MsgWithdrawBurnUndelegateResponse;
    fromAmino(_: MsgWithdrawBurnUndelegateResponseAmino): MsgWithdrawBurnUndelegateResponse;
    toAmino(_: MsgWithdrawBurnUndelegateResponse): MsgWithdrawBurnUndelegateResponseAmino;
    fromAminoMsg(object: MsgWithdrawBurnUndelegateResponseAminoMsg): MsgWithdrawBurnUndelegateResponse;
    fromProtoMsg(message: MsgWithdrawBurnUndelegateResponseProtoMsg): MsgWithdrawBurnUndelegateResponse;
    toProto(message: MsgWithdrawBurnUndelegateResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawBurnUndelegateResponse): MsgWithdrawBurnUndelegateResponseProtoMsg;
};
