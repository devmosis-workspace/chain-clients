import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrow {
    seller: string;
    feePayer: string;
    object?: Any;
    price: Coin[];
    deadline: Long;
}
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrowSDKType {
    seller: string;
    fee_payer: string;
    object?: AnySDKType;
    price: CoinSDKType[];
    deadline: Long;
}
/** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
export interface MsgCreateEscrowResponse {
    /** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
    id: string;
}
/** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
export interface MsgCreateEscrowResponseSDKType {
    id: string;
}
/** MsgUpdateEscrow defines a message to update an escrow */
export interface MsgUpdateEscrow {
    id: string;
    updater: string;
    feePayer: string;
    seller: string;
    price: Coin[];
    deadline: Long;
}
/** MsgUpdateEscrow defines a message to update an escrow */
export interface MsgUpdateEscrowSDKType {
    id: string;
    updater: string;
    fee_payer: string;
    seller: string;
    price: CoinSDKType[];
    deadline: Long;
}
/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponse {
}
/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponseSDKType {
}
/** MsgTransferToEscrow defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrow {
    id: string;
    sender: string;
    feePayer: string;
    amount: Coin[];
}
/** MsgTransferToEscrow defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowSDKType {
    id: string;
    sender: string;
    fee_payer: string;
    amount: CoinSDKType[];
}
/** MsgTransferToEscrowResponse defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowResponse {
}
/** MsgTransferToEscrowResponse defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowResponseSDKType {
}
/** MsgRefundEscrow defines the Msg/RefundEscrow response type ::TODO */
export interface MsgRefundEscrow {
    id: string;
    sender: string;
    feePayer: string;
}
/** MsgRefundEscrow defines the Msg/RefundEscrow response type ::TODO */
export interface MsgRefundEscrowSDKType {
    id: string;
    sender: string;
    fee_payer: string;
}
/**
 * MsgRefundEscrowResponse defines the Msg/RefundEscrowResponse response type
 * ::TODO
 */
export interface MsgRefundEscrowResponse {
}
/**
 * MsgRefundEscrowResponse defines the Msg/RefundEscrowResponse response type
 * ::TODO
 */
export interface MsgRefundEscrowResponseSDKType {
}
export declare const MsgCreateEscrow: {
    encode(message: MsgCreateEscrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateEscrow;
    fromPartial(object: Partial<MsgCreateEscrow>): MsgCreateEscrow;
};
export declare const MsgCreateEscrowResponse: {
    encode(message: MsgCreateEscrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateEscrowResponse;
    fromPartial(object: Partial<MsgCreateEscrowResponse>): MsgCreateEscrowResponse;
};
export declare const MsgUpdateEscrow: {
    encode(message: MsgUpdateEscrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateEscrow;
    fromPartial(object: Partial<MsgUpdateEscrow>): MsgUpdateEscrow;
};
export declare const MsgUpdateEscrowResponse: {
    encode(_: MsgUpdateEscrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateEscrowResponse;
    fromPartial(_: Partial<MsgUpdateEscrowResponse>): MsgUpdateEscrowResponse;
};
export declare const MsgTransferToEscrow: {
    encode(message: MsgTransferToEscrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTransferToEscrow;
    fromPartial(object: Partial<MsgTransferToEscrow>): MsgTransferToEscrow;
};
export declare const MsgTransferToEscrowResponse: {
    encode(_: MsgTransferToEscrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgTransferToEscrowResponse;
    fromPartial(_: Partial<MsgTransferToEscrowResponse>): MsgTransferToEscrowResponse;
};
export declare const MsgRefundEscrow: {
    encode(message: MsgRefundEscrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRefundEscrow;
    fromPartial(object: Partial<MsgRefundEscrow>): MsgRefundEscrow;
};
export declare const MsgRefundEscrowResponse: {
    encode(_: MsgRefundEscrowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRefundEscrowResponse;
    fromPartial(_: Partial<MsgRefundEscrowResponse>): MsgRefundEscrowResponse;
};
