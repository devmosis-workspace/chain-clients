import { BinaryWriter } from "../../../binary";
/** EventSetBalance is an event that tracks the latest bank balance. */
export interface EventSetBalances {
    balanceUpdates: BalanceUpdate[];
}
export interface EventSetBalancesProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.EventSetBalances";
    value: Uint8Array;
}
/** EventSetBalance is an event that tracks the latest bank balance. */
export interface EventSetBalancesAmino {
    balance_updates: BalanceUpdateAmino[];
}
export interface EventSetBalancesAminoMsg {
    type: "cosmos-sdk/EventSetBalances";
    value: EventSetBalancesAmino;
}
/** EventSetBalance is an event that tracks the latest bank balance. */
export interface EventSetBalancesSDKType {
    balance_updates: BalanceUpdateSDKType[];
}
/** BalanceUpdate contains a given address's latest balance */
export interface BalanceUpdate {
    addr: Uint8Array;
    denom: Uint8Array;
    /** the latest amount */
    amt: string;
}
export interface BalanceUpdateProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.BalanceUpdate";
    value: Uint8Array;
}
/** BalanceUpdate contains a given address's latest balance */
export interface BalanceUpdateAmino {
    addr: Uint8Array;
    denom: Uint8Array;
    /** the latest amount */
    amt: string;
}
export interface BalanceUpdateAminoMsg {
    type: "cosmos-sdk/BalanceUpdate";
    value: BalanceUpdateAmino;
}
/** BalanceUpdate contains a given address's latest balance */
export interface BalanceUpdateSDKType {
    addr: Uint8Array;
    denom: Uint8Array;
    amt: string;
}
export declare const EventSetBalances: {
    typeUrl: string;
    encode(message: EventSetBalances, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSetBalances;
    fromPartial(object: Partial<EventSetBalances>): EventSetBalances;
    fromAmino(object: EventSetBalancesAmino): EventSetBalances;
    toAmino(message: EventSetBalances): EventSetBalancesAmino;
    fromAminoMsg(object: EventSetBalancesAminoMsg): EventSetBalances;
    toAminoMsg(message: EventSetBalances): EventSetBalancesAminoMsg;
    fromProtoMsg(message: EventSetBalancesProtoMsg): EventSetBalances;
    toProto(message: EventSetBalances): Uint8Array;
    toProtoMsg(message: EventSetBalances): EventSetBalancesProtoMsg;
};
export declare const BalanceUpdate: {
    typeUrl: string;
    encode(message: BalanceUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BalanceUpdate;
    fromPartial(object: Partial<BalanceUpdate>): BalanceUpdate;
    fromAmino(object: BalanceUpdateAmino): BalanceUpdate;
    toAmino(message: BalanceUpdate): BalanceUpdateAmino;
    fromAminoMsg(object: BalanceUpdateAminoMsg): BalanceUpdate;
    toAminoMsg(message: BalanceUpdate): BalanceUpdateAminoMsg;
    fromProtoMsg(message: BalanceUpdateProtoMsg): BalanceUpdate;
    toProto(message: BalanceUpdate): Uint8Array;
    toProtoMsg(message: BalanceUpdate): BalanceUpdateProtoMsg;
};
