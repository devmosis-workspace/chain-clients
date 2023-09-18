import { Account, AccountAmino, AccountSDKType, Payment, PaymentAmino, PaymentSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
    accounts: Account[];
    payments: Payment[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.escrow.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateAmino {
    accounts: AccountAmino[];
    payments: PaymentAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/akash.escrow.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateSDKType {
    accounts: AccountSDKType[];
    payments: PaymentSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
