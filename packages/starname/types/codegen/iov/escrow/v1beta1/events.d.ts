import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrow {
    id: string;
    seller: string;
    feePayer: string;
    brokerAddress: string;
    brokerCommission: string;
    price: Coin[];
    object?: Any;
    deadline: Long;
    fees: Coin[];
}
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrowSDKType {
    id: string;
    seller: string;
    fee_payer: string;
    broker_address: string;
    broker_commission: string;
    price: CoinSDKType[];
    object?: AnySDKType;
    deadline: Long;
    fees: CoinSDKType[];
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrow {
    id: string;
    updater: string;
    feePayer: string;
    newSeller: string;
    newPrice: Coin[];
    newDeadline: Long;
    fees: Coin[];
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrowSDKType {
    id: string;
    updater: string;
    fee_payer: string;
    new_seller: string;
    new_price: CoinSDKType[];
    new_deadline: Long;
    fees: CoinSDKType[];
}
/** EventCompletedEscrow is emitted when an escrow is completed */
export interface EventCompletedEscrow {
    id: string;
    feePayer: string;
    buyer: string;
    fees: Coin[];
}
/** EventCompletedEscrow is emitted when an escrow is completed */
export interface EventCompletedEscrowSDKType {
    id: string;
    fee_payer: string;
    buyer: string;
    fees: CoinSDKType[];
}
/** EventRefundedEscrow is emitted when an escrow is refunded */
export interface EventRefundedEscrow {
    id: string;
    feePayer: string;
    sender: string;
    fees: Coin[];
}
/** EventRefundedEscrow is emitted when an escrow is refunded */
export interface EventRefundedEscrowSDKType {
    id: string;
    fee_payer: string;
    sender: string;
    fees: CoinSDKType[];
}
export declare const EventCreatedEscrow: {
    encode(message: EventCreatedEscrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreatedEscrow;
    fromPartial(object: Partial<EventCreatedEscrow>): EventCreatedEscrow;
};
export declare const EventUpdatedEscrow: {
    encode(message: EventUpdatedEscrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdatedEscrow;
    fromPartial(object: Partial<EventUpdatedEscrow>): EventUpdatedEscrow;
};
export declare const EventCompletedEscrow: {
    encode(message: EventCompletedEscrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCompletedEscrow;
    fromPartial(object: Partial<EventCompletedEscrow>): EventCompletedEscrow;
};
export declare const EventRefundedEscrow: {
    encode(message: EventRefundedEscrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRefundedEscrow;
    fromPartial(object: Partial<EventRefundedEscrow>): EventRefundedEscrow;
};
