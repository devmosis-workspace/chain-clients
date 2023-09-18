import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** EscrowState defines the state of an escrow */
export declare enum EscrowState {
    /**
     * ESCROW_STATE_OPEN_UNSPECIFIED - ESCROW_STATE_OPEN_UNSPECIFIED defines an open state. TODO:: review the
     * _UNSPECIFIED sufix
     */
    ESCROW_STATE_OPEN_UNSPECIFIED = 0,
    /** ESCROW_STATE_COMPLETED - ESCROW_STATE_COMPLETED defines a completed state. */
    ESCROW_STATE_COMPLETED = 1,
    /** ESCROW_STATE_REFUNDED - ESCROW_STATE_REFUNDED defines a refunded state. */
    ESCROW_STATE_REFUNDED = 2,
    /** ESCROW_STATE_EXPIRED - ESCROW_STATE_REFUNDED defines an expired state. */
    ESCROW_STATE_EXPIRED = 3,
    UNRECOGNIZED = -1
}
export declare const EscrowStateSDKType: typeof EscrowState;
export declare const EscrowStateAmino: typeof EscrowState;
export declare function escrowStateFromJSON(object: any): EscrowState;
export declare function escrowStateToJSON(object: EscrowState): string;
/** Escrow defines the struct of an escrow */
export interface Escrow {
    id: string;
    seller: string;
    object: (Any) | undefined;
    /**
     * TODO: refactor this to use sdk.Coin instead of sdk.Coins
     * Although the price contains multiple coins, for now we enforce a specific
     * denomination, so there will be only one coin type in a valid escrow
     */
    price: Coin[];
    state: EscrowState;
    deadline: bigint;
    brokerAddress: string;
    brokerCommission: string;
}
export interface EscrowProtoMsg {
    typeUrl: "/starnamed.x.escrow.v1beta1.Escrow";
    value: Uint8Array;
}
export type EscrowEncoded = Omit<Escrow, "object"> & {
    object?: AnyProtoMsg | undefined;
};
/** Escrow defines the struct of an escrow */
export interface EscrowAmino {
    id: string;
    seller: string;
    object?: AnyAmino;
    /**
     * TODO: refactor this to use sdk.Coin instead of sdk.Coins
     * Although the price contains multiple coins, for now we enforce a specific
     * denomination, so there will be only one coin type in a valid escrow
     */
    price: CoinAmino[];
    state: EscrowState;
    deadline: string;
    broker_address: string;
    broker_commission: string;
}
export interface EscrowAminoMsg {
    type: "/starnamed.x.escrow.v1beta1.Escrow";
    value: EscrowAmino;
}
/** Escrow defines the struct of an escrow */
export interface EscrowSDKType {
    id: string;
    seller: string;
    object: AnySDKType | undefined;
    price: CoinSDKType[];
    state: EscrowState;
    deadline: bigint;
    broker_address: string;
    broker_commission: string;
}
export declare const Escrow: {
    typeUrl: string;
    encode(message: Escrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Escrow;
    fromPartial(object: Partial<Escrow>): Escrow;
    fromAmino(object: EscrowAmino): Escrow;
    toAmino(message: Escrow): EscrowAmino;
    fromAminoMsg(object: EscrowAminoMsg): Escrow;
    fromProtoMsg(message: EscrowProtoMsg): Escrow;
    toProto(message: Escrow): Uint8Array;
    toProtoMsg(message: Escrow): EscrowProtoMsg;
};
export declare const TransferableObject_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const TransferableObject_FromAmino: (content: AnyAmino) => Any;
export declare const TransferableObject_ToAmino: (content: Any) => AnyAmino;
