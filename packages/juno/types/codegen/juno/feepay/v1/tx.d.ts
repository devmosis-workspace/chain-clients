import { FeePayContract, FeePayContractAmino, FeePayContractSDKType } from "./feepay";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** The message to register a fee pay contract. */
export interface MsgRegisterFeePayContract {
    /** The wallet address of the sender. */
    senderAddress: string;
    /** The fee pay contract to register. */
    feePayContract?: FeePayContract;
}
export interface MsgRegisterFeePayContractProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContract";
    value: Uint8Array;
}
/** The message to register a fee pay contract. */
export interface MsgRegisterFeePayContractAmino {
    /** The wallet address of the sender. */
    sender_address?: string;
    /** The fee pay contract to register. */
    fee_pay_contract?: FeePayContractAmino;
}
export interface MsgRegisterFeePayContractAminoMsg {
    type: "/juno.feepay.v1.MsgRegisterFeePayContract";
    value: MsgRegisterFeePayContractAmino;
}
/** The message to register a fee pay contract. */
export interface MsgRegisterFeePayContractSDKType {
    sender_address: string;
    fee_pay_contract?: FeePayContractSDKType;
}
/** The response message for registering a fee pay contract. */
export interface MsgRegisterFeePayContractResponse {
}
export interface MsgRegisterFeePayContractResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgRegisterFeePayContractResponse";
    value: Uint8Array;
}
/** The response message for registering a fee pay contract. */
export interface MsgRegisterFeePayContractResponseAmino {
}
export interface MsgRegisterFeePayContractResponseAminoMsg {
    type: "/juno.feepay.v1.MsgRegisterFeePayContractResponse";
    value: MsgRegisterFeePayContractResponseAmino;
}
/** The response message for registering a fee pay contract. */
export interface MsgRegisterFeePayContractResponseSDKType {
}
/** The message to unregister a fee pay contract. */
export interface MsgUnregisterFeePayContract {
    /** The wallet address of the sender. */
    senderAddress: string;
    /** The fee pay contract address. */
    contractAddress: string;
}
export interface MsgUnregisterFeePayContractProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContract";
    value: Uint8Array;
}
/** The message to unregister a fee pay contract. */
export interface MsgUnregisterFeePayContractAmino {
    /** The wallet address of the sender. */
    sender_address?: string;
    /** The fee pay contract address. */
    contract_address?: string;
}
export interface MsgUnregisterFeePayContractAminoMsg {
    type: "/juno.feepay.v1.MsgUnregisterFeePayContract";
    value: MsgUnregisterFeePayContractAmino;
}
/** The message to unregister a fee pay contract. */
export interface MsgUnregisterFeePayContractSDKType {
    sender_address: string;
    contract_address: string;
}
/** The response message for unregistering a fee pay contract. */
export interface MsgUnregisterFeePayContractResponse {
}
export interface MsgUnregisterFeePayContractResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgUnregisterFeePayContractResponse";
    value: Uint8Array;
}
/** The response message for unregistering a fee pay contract. */
export interface MsgUnregisterFeePayContractResponseAmino {
}
export interface MsgUnregisterFeePayContractResponseAminoMsg {
    type: "/juno.feepay.v1.MsgUnregisterFeePayContractResponse";
    value: MsgUnregisterFeePayContractResponseAmino;
}
/** The response message for unregistering a fee pay contract. */
export interface MsgUnregisterFeePayContractResponseSDKType {
}
/** The message to fund a fee pay contract */
export interface MsgFundFeePayContract {
    /** The wallet address of the sender. */
    senderAddress: string;
    /** The fee pay contract to fund. */
    contractAddress: string;
    /** The coins to fund the contract with. */
    amount: Coin[];
}
export interface MsgFundFeePayContractProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgFundFeePayContract";
    value: Uint8Array;
}
/** The message to fund a fee pay contract */
export interface MsgFundFeePayContractAmino {
    /** The wallet address of the sender. */
    sender_address?: string;
    /** The fee pay contract to fund. */
    contract_address?: string;
    /** The coins to fund the contract with. */
    amount: CoinAmino[];
}
export interface MsgFundFeePayContractAminoMsg {
    type: "/juno.feepay.v1.MsgFundFeePayContract";
    value: MsgFundFeePayContractAmino;
}
/** The message to fund a fee pay contract */
export interface MsgFundFeePayContractSDKType {
    sender_address: string;
    contract_address: string;
    amount: CoinSDKType[];
}
/** The response message for funding a fee pay contract. */
export interface MsgFundFeePayContractResponse {
}
export interface MsgFundFeePayContractResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgFundFeePayContractResponse";
    value: Uint8Array;
}
/** The response message for funding a fee pay contract. */
export interface MsgFundFeePayContractResponseAmino {
}
export interface MsgFundFeePayContractResponseAminoMsg {
    type: "/juno.feepay.v1.MsgFundFeePayContractResponse";
    value: MsgFundFeePayContractResponseAmino;
}
/** The response message for funding a fee pay contract. */
export interface MsgFundFeePayContractResponseSDKType {
}
/** The message to update a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimit {
    /** The wallet address of the sender. */
    senderAddress: string;
    /** The fee pay contract to fund. */
    contractAddress: string;
    /** The new wallet limit. */
    walletLimit: bigint;
}
export interface MsgUpdateFeePayContractWalletLimitProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit";
    value: Uint8Array;
}
/** The message to update a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitAmino {
    /** The wallet address of the sender. */
    sender_address?: string;
    /** The fee pay contract to fund. */
    contract_address?: string;
    /** The new wallet limit. */
    wallet_limit?: string;
}
export interface MsgUpdateFeePayContractWalletLimitAminoMsg {
    type: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit";
    value: MsgUpdateFeePayContractWalletLimitAmino;
}
/** The message to update a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitSDKType {
    sender_address: string;
    contract_address: string;
    wallet_limit: bigint;
}
/** The response message for updating a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitResponse {
}
export interface MsgUpdateFeePayContractWalletLimitResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimitResponse";
    value: Uint8Array;
}
/** The response message for updating a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitResponseAmino {
}
export interface MsgUpdateFeePayContractWalletLimitResponseAminoMsg {
    type: "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimitResponse";
    value: MsgUpdateFeePayContractWalletLimitResponseAmino;
}
/** The response message for updating a fee pay contract wallet limit. */
export interface MsgUpdateFeePayContractWalletLimitResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/feepay parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority?: string;
    /**
     * params defines the x/feepay parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/juno.feepay.v1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/juno.feepay.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/juno.feepay.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterFeePayContract: {
    typeUrl: string;
    encode(message: MsgRegisterFeePayContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterFeePayContract;
    fromPartial(object: Partial<MsgRegisterFeePayContract>): MsgRegisterFeePayContract;
    fromAmino(object: MsgRegisterFeePayContractAmino): MsgRegisterFeePayContract;
    toAmino(message: MsgRegisterFeePayContract): MsgRegisterFeePayContractAmino;
    fromAminoMsg(object: MsgRegisterFeePayContractAminoMsg): MsgRegisterFeePayContract;
    fromProtoMsg(message: MsgRegisterFeePayContractProtoMsg): MsgRegisterFeePayContract;
    toProto(message: MsgRegisterFeePayContract): Uint8Array;
    toProtoMsg(message: MsgRegisterFeePayContract): MsgRegisterFeePayContractProtoMsg;
};
export declare const MsgRegisterFeePayContractResponse: {
    typeUrl: string;
    encode(_: MsgRegisterFeePayContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterFeePayContractResponse;
    fromPartial(_: Partial<MsgRegisterFeePayContractResponse>): MsgRegisterFeePayContractResponse;
    fromAmino(_: MsgRegisterFeePayContractResponseAmino): MsgRegisterFeePayContractResponse;
    toAmino(_: MsgRegisterFeePayContractResponse): MsgRegisterFeePayContractResponseAmino;
    fromAminoMsg(object: MsgRegisterFeePayContractResponseAminoMsg): MsgRegisterFeePayContractResponse;
    fromProtoMsg(message: MsgRegisterFeePayContractResponseProtoMsg): MsgRegisterFeePayContractResponse;
    toProto(message: MsgRegisterFeePayContractResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterFeePayContractResponse): MsgRegisterFeePayContractResponseProtoMsg;
};
export declare const MsgUnregisterFeePayContract: {
    typeUrl: string;
    encode(message: MsgUnregisterFeePayContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnregisterFeePayContract;
    fromPartial(object: Partial<MsgUnregisterFeePayContract>): MsgUnregisterFeePayContract;
    fromAmino(object: MsgUnregisterFeePayContractAmino): MsgUnregisterFeePayContract;
    toAmino(message: MsgUnregisterFeePayContract): MsgUnregisterFeePayContractAmino;
    fromAminoMsg(object: MsgUnregisterFeePayContractAminoMsg): MsgUnregisterFeePayContract;
    fromProtoMsg(message: MsgUnregisterFeePayContractProtoMsg): MsgUnregisterFeePayContract;
    toProto(message: MsgUnregisterFeePayContract): Uint8Array;
    toProtoMsg(message: MsgUnregisterFeePayContract): MsgUnregisterFeePayContractProtoMsg;
};
export declare const MsgUnregisterFeePayContractResponse: {
    typeUrl: string;
    encode(_: MsgUnregisterFeePayContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnregisterFeePayContractResponse;
    fromPartial(_: Partial<MsgUnregisterFeePayContractResponse>): MsgUnregisterFeePayContractResponse;
    fromAmino(_: MsgUnregisterFeePayContractResponseAmino): MsgUnregisterFeePayContractResponse;
    toAmino(_: MsgUnregisterFeePayContractResponse): MsgUnregisterFeePayContractResponseAmino;
    fromAminoMsg(object: MsgUnregisterFeePayContractResponseAminoMsg): MsgUnregisterFeePayContractResponse;
    fromProtoMsg(message: MsgUnregisterFeePayContractResponseProtoMsg): MsgUnregisterFeePayContractResponse;
    toProto(message: MsgUnregisterFeePayContractResponse): Uint8Array;
    toProtoMsg(message: MsgUnregisterFeePayContractResponse): MsgUnregisterFeePayContractResponseProtoMsg;
};
export declare const MsgFundFeePayContract: {
    typeUrl: string;
    encode(message: MsgFundFeePayContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgFundFeePayContract;
    fromPartial(object: Partial<MsgFundFeePayContract>): MsgFundFeePayContract;
    fromAmino(object: MsgFundFeePayContractAmino): MsgFundFeePayContract;
    toAmino(message: MsgFundFeePayContract): MsgFundFeePayContractAmino;
    fromAminoMsg(object: MsgFundFeePayContractAminoMsg): MsgFundFeePayContract;
    fromProtoMsg(message: MsgFundFeePayContractProtoMsg): MsgFundFeePayContract;
    toProto(message: MsgFundFeePayContract): Uint8Array;
    toProtoMsg(message: MsgFundFeePayContract): MsgFundFeePayContractProtoMsg;
};
export declare const MsgFundFeePayContractResponse: {
    typeUrl: string;
    encode(_: MsgFundFeePayContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgFundFeePayContractResponse;
    fromPartial(_: Partial<MsgFundFeePayContractResponse>): MsgFundFeePayContractResponse;
    fromAmino(_: MsgFundFeePayContractResponseAmino): MsgFundFeePayContractResponse;
    toAmino(_: MsgFundFeePayContractResponse): MsgFundFeePayContractResponseAmino;
    fromAminoMsg(object: MsgFundFeePayContractResponseAminoMsg): MsgFundFeePayContractResponse;
    fromProtoMsg(message: MsgFundFeePayContractResponseProtoMsg): MsgFundFeePayContractResponse;
    toProto(message: MsgFundFeePayContractResponse): Uint8Array;
    toProtoMsg(message: MsgFundFeePayContractResponse): MsgFundFeePayContractResponseProtoMsg;
};
export declare const MsgUpdateFeePayContractWalletLimit: {
    typeUrl: string;
    encode(message: MsgUpdateFeePayContractWalletLimit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateFeePayContractWalletLimit;
    fromPartial(object: Partial<MsgUpdateFeePayContractWalletLimit>): MsgUpdateFeePayContractWalletLimit;
    fromAmino(object: MsgUpdateFeePayContractWalletLimitAmino): MsgUpdateFeePayContractWalletLimit;
    toAmino(message: MsgUpdateFeePayContractWalletLimit): MsgUpdateFeePayContractWalletLimitAmino;
    fromAminoMsg(object: MsgUpdateFeePayContractWalletLimitAminoMsg): MsgUpdateFeePayContractWalletLimit;
    fromProtoMsg(message: MsgUpdateFeePayContractWalletLimitProtoMsg): MsgUpdateFeePayContractWalletLimit;
    toProto(message: MsgUpdateFeePayContractWalletLimit): Uint8Array;
    toProtoMsg(message: MsgUpdateFeePayContractWalletLimit): MsgUpdateFeePayContractWalletLimitProtoMsg;
};
export declare const MsgUpdateFeePayContractWalletLimitResponse: {
    typeUrl: string;
    encode(_: MsgUpdateFeePayContractWalletLimitResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateFeePayContractWalletLimitResponse;
    fromPartial(_: Partial<MsgUpdateFeePayContractWalletLimitResponse>): MsgUpdateFeePayContractWalletLimitResponse;
    fromAmino(_: MsgUpdateFeePayContractWalletLimitResponseAmino): MsgUpdateFeePayContractWalletLimitResponse;
    toAmino(_: MsgUpdateFeePayContractWalletLimitResponse): MsgUpdateFeePayContractWalletLimitResponseAmino;
    fromAminoMsg(object: MsgUpdateFeePayContractWalletLimitResponseAminoMsg): MsgUpdateFeePayContractWalletLimitResponse;
    fromProtoMsg(message: MsgUpdateFeePayContractWalletLimitResponseProtoMsg): MsgUpdateFeePayContractWalletLimitResponse;
    toProto(message: MsgUpdateFeePayContractWalletLimitResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateFeePayContractWalletLimitResponse): MsgUpdateFeePayContractWalletLimitResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
