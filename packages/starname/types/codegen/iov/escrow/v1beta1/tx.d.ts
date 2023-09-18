import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrow {
    seller: string;
    feePayer: string;
    object: (Any) | undefined;
    price: Coin[];
    deadline: bigint;
}
export interface MsgCreateEscrowProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow";
    value: Uint8Array;
}
export type MsgCreateEscrowEncoded = Omit<MsgCreateEscrow, "object"> & {
    object?: AnyProtoMsg | undefined;
};
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrowAmino {
    seller: string;
    fee_payer: string;
    object?: AnyAmino;
    price: CoinAmino[];
    deadline: string;
}
export interface MsgCreateEscrowAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow";
    value: MsgCreateEscrowAmino;
}
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrowSDKType {
    seller: string;
    fee_payer: string;
    object: AnySDKType | undefined;
    price: CoinSDKType[];
    deadline: bigint;
}
/** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
export interface MsgCreateEscrowResponse {
    /** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
    id: string;
}
export interface MsgCreateEscrowResponseProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrowResponse";
    value: Uint8Array;
}
/** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
export interface MsgCreateEscrowResponseAmino {
    /** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
    id: string;
}
export interface MsgCreateEscrowResponseAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgCreateEscrowResponse";
    value: MsgCreateEscrowResponseAmino;
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
    deadline: bigint;
}
export interface MsgUpdateEscrowProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow";
    value: Uint8Array;
}
/** MsgUpdateEscrow defines a message to update an escrow */
export interface MsgUpdateEscrowAmino {
    id: string;
    updater: string;
    fee_payer: string;
    seller: string;
    price: CoinAmino[];
    deadline: string;
}
export interface MsgUpdateEscrowAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow";
    value: MsgUpdateEscrowAmino;
}
/** MsgUpdateEscrow defines a message to update an escrow */
export interface MsgUpdateEscrowSDKType {
    id: string;
    updater: string;
    fee_payer: string;
    seller: string;
    price: CoinSDKType[];
    deadline: bigint;
}
/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponse {
}
export interface MsgUpdateEscrowResponseProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrowResponse";
    value: Uint8Array;
}
/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponseAmino {
}
export interface MsgUpdateEscrowResponseAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrowResponse";
    value: MsgUpdateEscrowResponseAmino;
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
export interface MsgTransferToEscrowProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow";
    value: Uint8Array;
}
/** MsgTransferToEscrow defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowAmino {
    id: string;
    sender: string;
    fee_payer: string;
    amount: CoinAmino[];
}
export interface MsgTransferToEscrowAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow";
    value: MsgTransferToEscrowAmino;
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
export interface MsgTransferToEscrowResponseProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrowResponse";
    value: Uint8Array;
}
/** MsgTransferToEscrowResponse defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowResponseAmino {
}
export interface MsgTransferToEscrowResponseAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrowResponse";
    value: MsgTransferToEscrowResponseAmino;
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
export interface MsgRefundEscrowProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow";
    value: Uint8Array;
}
/** MsgRefundEscrow defines the Msg/RefundEscrow response type ::TODO */
export interface MsgRefundEscrowAmino {
    id: string;
    sender: string;
    fee_payer: string;
}
export interface MsgRefundEscrowAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow";
    value: MsgRefundEscrowAmino;
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
export interface MsgRefundEscrowResponseProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrowResponse";
    value: Uint8Array;
}
/**
 * MsgRefundEscrowResponse defines the Msg/RefundEscrowResponse response type
 * ::TODO
 */
export interface MsgRefundEscrowResponseAmino {
}
export interface MsgRefundEscrowResponseAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgRefundEscrowResponse";
    value: MsgRefundEscrowResponseAmino;
}
/**
 * MsgRefundEscrowResponse defines the Msg/RefundEscrowResponse response type
 * ::TODO
 */
export interface MsgRefundEscrowResponseSDKType {
}
export declare const MsgCreateEscrow: {
    typeUrl: string;
    encode(message: MsgCreateEscrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateEscrow;
    fromPartial(object: Partial<MsgCreateEscrow>): MsgCreateEscrow;
    fromAmino(object: MsgCreateEscrowAmino): MsgCreateEscrow;
    toAmino(message: MsgCreateEscrow): MsgCreateEscrowAmino;
    fromAminoMsg(object: MsgCreateEscrowAminoMsg): MsgCreateEscrow;
    fromProtoMsg(message: MsgCreateEscrowProtoMsg): MsgCreateEscrow;
    toProto(message: MsgCreateEscrow): Uint8Array;
    toProtoMsg(message: MsgCreateEscrow): MsgCreateEscrowProtoMsg;
};
export declare const MsgCreateEscrowResponse: {
    typeUrl: string;
    encode(message: MsgCreateEscrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateEscrowResponse;
    fromPartial(object: Partial<MsgCreateEscrowResponse>): MsgCreateEscrowResponse;
    fromAmino(object: MsgCreateEscrowResponseAmino): MsgCreateEscrowResponse;
    toAmino(message: MsgCreateEscrowResponse): MsgCreateEscrowResponseAmino;
    fromAminoMsg(object: MsgCreateEscrowResponseAminoMsg): MsgCreateEscrowResponse;
    fromProtoMsg(message: MsgCreateEscrowResponseProtoMsg): MsgCreateEscrowResponse;
    toProto(message: MsgCreateEscrowResponse): Uint8Array;
    toProtoMsg(message: MsgCreateEscrowResponse): MsgCreateEscrowResponseProtoMsg;
};
export declare const MsgUpdateEscrow: {
    typeUrl: string;
    encode(message: MsgUpdateEscrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateEscrow;
    fromPartial(object: Partial<MsgUpdateEscrow>): MsgUpdateEscrow;
    fromAmino(object: MsgUpdateEscrowAmino): MsgUpdateEscrow;
    toAmino(message: MsgUpdateEscrow): MsgUpdateEscrowAmino;
    fromAminoMsg(object: MsgUpdateEscrowAminoMsg): MsgUpdateEscrow;
    fromProtoMsg(message: MsgUpdateEscrowProtoMsg): MsgUpdateEscrow;
    toProto(message: MsgUpdateEscrow): Uint8Array;
    toProtoMsg(message: MsgUpdateEscrow): MsgUpdateEscrowProtoMsg;
};
export declare const MsgUpdateEscrowResponse: {
    typeUrl: string;
    encode(_: MsgUpdateEscrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateEscrowResponse;
    fromPartial(_: Partial<MsgUpdateEscrowResponse>): MsgUpdateEscrowResponse;
    fromAmino(_: MsgUpdateEscrowResponseAmino): MsgUpdateEscrowResponse;
    toAmino(_: MsgUpdateEscrowResponse): MsgUpdateEscrowResponseAmino;
    fromAminoMsg(object: MsgUpdateEscrowResponseAminoMsg): MsgUpdateEscrowResponse;
    fromProtoMsg(message: MsgUpdateEscrowResponseProtoMsg): MsgUpdateEscrowResponse;
    toProto(message: MsgUpdateEscrowResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateEscrowResponse): MsgUpdateEscrowResponseProtoMsg;
};
export declare const MsgTransferToEscrow: {
    typeUrl: string;
    encode(message: MsgTransferToEscrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransferToEscrow;
    fromPartial(object: Partial<MsgTransferToEscrow>): MsgTransferToEscrow;
    fromAmino(object: MsgTransferToEscrowAmino): MsgTransferToEscrow;
    toAmino(message: MsgTransferToEscrow): MsgTransferToEscrowAmino;
    fromAminoMsg(object: MsgTransferToEscrowAminoMsg): MsgTransferToEscrow;
    fromProtoMsg(message: MsgTransferToEscrowProtoMsg): MsgTransferToEscrow;
    toProto(message: MsgTransferToEscrow): Uint8Array;
    toProtoMsg(message: MsgTransferToEscrow): MsgTransferToEscrowProtoMsg;
};
export declare const MsgTransferToEscrowResponse: {
    typeUrl: string;
    encode(_: MsgTransferToEscrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferToEscrowResponse;
    fromPartial(_: Partial<MsgTransferToEscrowResponse>): MsgTransferToEscrowResponse;
    fromAmino(_: MsgTransferToEscrowResponseAmino): MsgTransferToEscrowResponse;
    toAmino(_: MsgTransferToEscrowResponse): MsgTransferToEscrowResponseAmino;
    fromAminoMsg(object: MsgTransferToEscrowResponseAminoMsg): MsgTransferToEscrowResponse;
    fromProtoMsg(message: MsgTransferToEscrowResponseProtoMsg): MsgTransferToEscrowResponse;
    toProto(message: MsgTransferToEscrowResponse): Uint8Array;
    toProtoMsg(message: MsgTransferToEscrowResponse): MsgTransferToEscrowResponseProtoMsg;
};
export declare const MsgRefundEscrow: {
    typeUrl: string;
    encode(message: MsgRefundEscrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRefundEscrow;
    fromPartial(object: Partial<MsgRefundEscrow>): MsgRefundEscrow;
    fromAmino(object: MsgRefundEscrowAmino): MsgRefundEscrow;
    toAmino(message: MsgRefundEscrow): MsgRefundEscrowAmino;
    fromAminoMsg(object: MsgRefundEscrowAminoMsg): MsgRefundEscrow;
    fromProtoMsg(message: MsgRefundEscrowProtoMsg): MsgRefundEscrow;
    toProto(message: MsgRefundEscrow): Uint8Array;
    toProtoMsg(message: MsgRefundEscrow): MsgRefundEscrowProtoMsg;
};
export declare const MsgRefundEscrowResponse: {
    typeUrl: string;
    encode(_: MsgRefundEscrowResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRefundEscrowResponse;
    fromPartial(_: Partial<MsgRefundEscrowResponse>): MsgRefundEscrowResponse;
    fromAmino(_: MsgRefundEscrowResponseAmino): MsgRefundEscrowResponse;
    toAmino(_: MsgRefundEscrowResponse): MsgRefundEscrowResponseAmino;
    fromAminoMsg(object: MsgRefundEscrowResponseAminoMsg): MsgRefundEscrowResponse;
    fromProtoMsg(message: MsgRefundEscrowResponseProtoMsg): MsgRefundEscrowResponse;
    toProto(message: MsgRefundEscrowResponse): Uint8Array;
    toProtoMsg(message: MsgRefundEscrowResponse): MsgRefundEscrowResponseProtoMsg;
};
export declare const TransferableObject_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const TransferableObject_FromAmino: (content: AnyAmino) => Any;
export declare const TransferableObject_ToAmino: (content: Any) => AnyAmino;
