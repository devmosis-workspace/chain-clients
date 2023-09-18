import { BinaryWriter } from "../../../binary";
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarket {
    /** base_fee for EIP-1559 blocks */
    baseFee: string;
}
export interface EventFeeMarketProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.EventFeeMarket";
    value: Uint8Array;
}
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarketAmino {
    /** base_fee for EIP-1559 blocks */
    base_fee: string;
}
export interface EventFeeMarketAminoMsg {
    type: "/ethermint.feemarket.v1.EventFeeMarket";
    value: EventFeeMarketAmino;
}
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarketSDKType {
    base_fee: string;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGas {
    /** height of the block */
    height: string;
    /** amount of gas wanted by the block */
    amount: string;
}
export interface EventBlockGasProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.EventBlockGas";
    value: Uint8Array;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGasAmino {
    /** height of the block */
    height: string;
    /** amount of gas wanted by the block */
    amount: string;
}
export interface EventBlockGasAminoMsg {
    type: "/ethermint.feemarket.v1.EventBlockGas";
    value: EventBlockGasAmino;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGasSDKType {
    height: string;
    amount: string;
}
export declare const EventFeeMarket: {
    typeUrl: string;
    encode(message: EventFeeMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventFeeMarket;
    fromPartial(object: Partial<EventFeeMarket>): EventFeeMarket;
    fromAmino(object: EventFeeMarketAmino): EventFeeMarket;
    toAmino(message: EventFeeMarket): EventFeeMarketAmino;
    fromAminoMsg(object: EventFeeMarketAminoMsg): EventFeeMarket;
    fromProtoMsg(message: EventFeeMarketProtoMsg): EventFeeMarket;
    toProto(message: EventFeeMarket): Uint8Array;
    toProtoMsg(message: EventFeeMarket): EventFeeMarketProtoMsg;
};
export declare const EventBlockGas: {
    typeUrl: string;
    encode(message: EventBlockGas, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBlockGas;
    fromPartial(object: Partial<EventBlockGas>): EventBlockGas;
    fromAmino(object: EventBlockGasAmino): EventBlockGas;
    toAmino(message: EventBlockGas): EventBlockGasAmino;
    fromAminoMsg(object: EventBlockGasAminoMsg): EventBlockGas;
    fromProtoMsg(message: EventBlockGasProtoMsg): EventBlockGas;
    toProto(message: EventBlockGas): Uint8Array;
    toProtoMsg(message: EventBlockGas): EventBlockGasProtoMsg;
};
