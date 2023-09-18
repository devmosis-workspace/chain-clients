import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrow {
    id: string;
    seller: string;
    feePayer: string;
    brokerAddress: string;
    brokerCommission: string;
    price: Coin[];
    object: (Any) | undefined;
    deadline: bigint;
    fees: Coin[];
}
export interface EventCreatedEscrowProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.EventCreatedEscrow";
    value: Uint8Array;
}
export type EventCreatedEscrowEncoded = Omit<EventCreatedEscrow, "object"> & {
    object?: AnyProtoMsg | undefined;
};
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrowAmino {
    id: string;
    seller: string;
    fee_payer: string;
    broker_address: string;
    broker_commission: string;
    price: CoinAmino[];
    object?: AnyAmino;
    deadline: string;
    fees: CoinAmino[];
}
export interface EventCreatedEscrowAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.EventCreatedEscrow";
    value: EventCreatedEscrowAmino;
}
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrowSDKType {
    id: string;
    seller: string;
    fee_payer: string;
    broker_address: string;
    broker_commission: string;
    price: CoinSDKType[];
    object: AnySDKType | undefined;
    deadline: bigint;
    fees: CoinSDKType[];
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrow {
    id: string;
    updater: string;
    feePayer: string;
    newSeller: string;
    newPrice: Coin[];
    newDeadline: bigint;
    fees: Coin[];
}
export interface EventUpdatedEscrowProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.EventUpdatedEscrow";
    value: Uint8Array;
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrowAmino {
    id: string;
    updater: string;
    fee_payer: string;
    new_seller: string;
    new_price: CoinAmino[];
    new_deadline: string;
    fees: CoinAmino[];
}
export interface EventUpdatedEscrowAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.EventUpdatedEscrow";
    value: EventUpdatedEscrowAmino;
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrowSDKType {
    id: string;
    updater: string;
    fee_payer: string;
    new_seller: string;
    new_price: CoinSDKType[];
    new_deadline: bigint;
    fees: CoinSDKType[];
}
/** EventCompletedEscrow is emitted when an escrow is completed */
export interface EventCompletedEscrow {
    id: string;
    feePayer: string;
    buyer: string;
    fees: Coin[];
}
export interface EventCompletedEscrowProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.EventCompletedEscrow";
    value: Uint8Array;
}
/** EventCompletedEscrow is emitted when an escrow is completed */
export interface EventCompletedEscrowAmino {
    id: string;
    fee_payer: string;
    buyer: string;
    fees: CoinAmino[];
}
export interface EventCompletedEscrowAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.EventCompletedEscrow";
    value: EventCompletedEscrowAmino;
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
export interface EventRefundedEscrowProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.EventRefundedEscrow";
    value: Uint8Array;
}
/** EventRefundedEscrow is emitted when an escrow is refunded */
export interface EventRefundedEscrowAmino {
    id: string;
    fee_payer: string;
    sender: string;
    fees: CoinAmino[];
}
export interface EventRefundedEscrowAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.EventRefundedEscrow";
    value: EventRefundedEscrowAmino;
}
/** EventRefundedEscrow is emitted when an escrow is refunded */
export interface EventRefundedEscrowSDKType {
    id: string;
    fee_payer: string;
    sender: string;
    fees: CoinSDKType[];
}
export declare const EventCreatedEscrow: {
    typeUrl: string;
    encode(message: EventCreatedEscrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreatedEscrow;
    fromPartial(object: Partial<EventCreatedEscrow>): EventCreatedEscrow;
    fromAmino(object: EventCreatedEscrowAmino): EventCreatedEscrow;
    toAmino(message: EventCreatedEscrow): EventCreatedEscrowAmino;
    fromAminoMsg(object: EventCreatedEscrowAminoMsg): EventCreatedEscrow;
    fromProtoMsg(message: EventCreatedEscrowProtoMsg): EventCreatedEscrow;
    toProto(message: EventCreatedEscrow): Uint8Array;
    toProtoMsg(message: EventCreatedEscrow): EventCreatedEscrowProtoMsg;
};
export declare const EventUpdatedEscrow: {
    typeUrl: string;
    encode(message: EventUpdatedEscrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdatedEscrow;
    fromPartial(object: Partial<EventUpdatedEscrow>): EventUpdatedEscrow;
    fromAmino(object: EventUpdatedEscrowAmino): EventUpdatedEscrow;
    toAmino(message: EventUpdatedEscrow): EventUpdatedEscrowAmino;
    fromAminoMsg(object: EventUpdatedEscrowAminoMsg): EventUpdatedEscrow;
    fromProtoMsg(message: EventUpdatedEscrowProtoMsg): EventUpdatedEscrow;
    toProto(message: EventUpdatedEscrow): Uint8Array;
    toProtoMsg(message: EventUpdatedEscrow): EventUpdatedEscrowProtoMsg;
};
export declare const EventCompletedEscrow: {
    typeUrl: string;
    encode(message: EventCompletedEscrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCompletedEscrow;
    fromPartial(object: Partial<EventCompletedEscrow>): EventCompletedEscrow;
    fromAmino(object: EventCompletedEscrowAmino): EventCompletedEscrow;
    toAmino(message: EventCompletedEscrow): EventCompletedEscrowAmino;
    fromAminoMsg(object: EventCompletedEscrowAminoMsg): EventCompletedEscrow;
    fromProtoMsg(message: EventCompletedEscrowProtoMsg): EventCompletedEscrow;
    toProto(message: EventCompletedEscrow): Uint8Array;
    toProtoMsg(message: EventCompletedEscrow): EventCompletedEscrowProtoMsg;
};
export declare const EventRefundedEscrow: {
    typeUrl: string;
    encode(message: EventRefundedEscrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRefundedEscrow;
    fromPartial(object: Partial<EventRefundedEscrow>): EventRefundedEscrow;
    fromAmino(object: EventRefundedEscrowAmino): EventRefundedEscrow;
    toAmino(message: EventRefundedEscrow): EventRefundedEscrowAmino;
    fromAminoMsg(object: EventRefundedEscrowAminoMsg): EventRefundedEscrow;
    fromProtoMsg(message: EventRefundedEscrowProtoMsg): EventRefundedEscrow;
    toProto(message: EventRefundedEscrow): Uint8Array;
    toProtoMsg(message: EventRefundedEscrow): EventRefundedEscrowProtoMsg;
};
export declare const TransferableObject_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const TransferableObject_FromAmino: (content: AnyAmino) => Any;
export declare const TransferableObject_ToAmino: (content: Any) => AnyAmino;
