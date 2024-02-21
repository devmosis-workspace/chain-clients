import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Fee, FeeAmino, FeeSDKType } from "../../feerefunder/fee";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccount {
    fromAddress: string;
    connectionId: string;
    interchainAccountId: string;
    registerFee: Coin[];
}
export interface MsgRegisterInterchainAccountProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount";
    value: Uint8Array;
}
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccountAmino {
    from_address?: string;
    connection_id?: string;
    interchain_account_id?: string;
    register_fee?: CoinAmino[];
}
export interface MsgRegisterInterchainAccountAminoMsg {
    type: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount";
    value: MsgRegisterInterchainAccountAmino;
}
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccountSDKType {
    from_address: string;
    connection_id: string;
    interchain_account_id: string;
    register_fee: CoinSDKType[];
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponse {
}
export interface MsgRegisterInterchainAccountResponseProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccountResponse";
    value: Uint8Array;
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponseAmino {
}
export interface MsgRegisterInterchainAccountResponseAminoMsg {
    type: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccountResponse";
    value: MsgRegisterInterchainAccountResponseAmino;
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponseSDKType {
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
    fromAddress: string;
    /**
     * interchain_account_id is supposed to be the unique identifier, e.g.,
     * lido/kava. This allows contracts to have more than one interchain accounts
     * on remote zone This identifier will be a part of the portID that we'll
     * claim our capability for.
     */
    interchainAccountId: string;
    connectionId: string;
    msgs: Any[];
    memo: string;
    /** timeout in seconds after which the packet times out */
    timeout: bigint;
    fee: Fee;
}
export interface MsgSubmitTxProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx";
    value: Uint8Array;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTxAmino {
    from_address?: string;
    /**
     * interchain_account_id is supposed to be the unique identifier, e.g.,
     * lido/kava. This allows contracts to have more than one interchain accounts
     * on remote zone This identifier will be a part of the portID that we'll
     * claim our capability for.
     */
    interchain_account_id?: string;
    connection_id?: string;
    msgs?: AnyAmino[];
    memo?: string;
    /** timeout in seconds after which the packet times out */
    timeout?: string;
    fee?: FeeAmino;
}
export interface MsgSubmitTxAminoMsg {
    type: "/neutron.interchaintxs.v1.MsgSubmitTx";
    value: MsgSubmitTxAmino;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTxSDKType {
    from_address: string;
    interchain_account_id: string;
    connection_id: string;
    msgs: AnySDKType[];
    memo: string;
    timeout: bigint;
    fee: FeeSDKType;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
    /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
    sequenceId: bigint;
    /** channel src channel on neutron side transaction was submitted from */
    channel: string;
}
export interface MsgSubmitTxResponseProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTxResponse";
    value: Uint8Array;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponseAmino {
    /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
    sequence_id?: string;
    /** channel src channel on neutron side transaction was submitted from */
    channel?: string;
}
export interface MsgSubmitTxResponseAminoMsg {
    type: "/neutron.interchaintxs.v1.MsgSubmitTxResponse";
    value: MsgSubmitTxResponseAmino;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponseSDKType {
    sequence_id: bigint;
    channel: string;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/interchaintxs parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsAmino {
    /** Authority is the address of the governance account. */
    authority?: string;
    /**
     * params defines the x/interchaintxs parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "interchaintxs/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/neutron.interchaintxs.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterInterchainAccount: {
    typeUrl: string;
    encode(message: MsgRegisterInterchainAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterInterchainAccount;
    fromPartial(object: Partial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount;
    fromAmino(object: MsgRegisterInterchainAccountAmino): MsgRegisterInterchainAccount;
    toAmino(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAmino;
    fromAminoMsg(object: MsgRegisterInterchainAccountAminoMsg): MsgRegisterInterchainAccount;
    fromProtoMsg(message: MsgRegisterInterchainAccountProtoMsg): MsgRegisterInterchainAccount;
    toProto(message: MsgRegisterInterchainAccount): Uint8Array;
    toProtoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountProtoMsg;
};
export declare const MsgRegisterInterchainAccountResponse: {
    typeUrl: string;
    encode(_: MsgRegisterInterchainAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterInterchainAccountResponse;
    fromPartial(_: Partial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse;
    fromAmino(_: MsgRegisterInterchainAccountResponseAmino): MsgRegisterInterchainAccountResponse;
    toAmino(_: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseAmino;
    fromAminoMsg(object: MsgRegisterInterchainAccountResponseAminoMsg): MsgRegisterInterchainAccountResponse;
    fromProtoMsg(message: MsgRegisterInterchainAccountResponseProtoMsg): MsgRegisterInterchainAccountResponse;
    toProto(message: MsgRegisterInterchainAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseProtoMsg;
};
export declare const MsgSubmitTx: {
    typeUrl: string;
    encode(message: MsgSubmitTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitTx;
    fromPartial(object: Partial<MsgSubmitTx>): MsgSubmitTx;
    fromAmino(object: MsgSubmitTxAmino): MsgSubmitTx;
    toAmino(message: MsgSubmitTx): MsgSubmitTxAmino;
    fromAminoMsg(object: MsgSubmitTxAminoMsg): MsgSubmitTx;
    fromProtoMsg(message: MsgSubmitTxProtoMsg): MsgSubmitTx;
    toProto(message: MsgSubmitTx): Uint8Array;
    toProtoMsg(message: MsgSubmitTx): MsgSubmitTxProtoMsg;
};
export declare const MsgSubmitTxResponse: {
    typeUrl: string;
    encode(message: MsgSubmitTxResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitTxResponse;
    fromPartial(object: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse;
    fromAmino(object: MsgSubmitTxResponseAmino): MsgSubmitTxResponse;
    toAmino(message: MsgSubmitTxResponse): MsgSubmitTxResponseAmino;
    fromAminoMsg(object: MsgSubmitTxResponseAminoMsg): MsgSubmitTxResponse;
    fromProtoMsg(message: MsgSubmitTxResponseProtoMsg): MsgSubmitTxResponse;
    toProto(message: MsgSubmitTxResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitTxResponse): MsgSubmitTxResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
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
