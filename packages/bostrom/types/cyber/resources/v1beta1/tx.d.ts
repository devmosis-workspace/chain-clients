import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgInvestmint {
    neuron: string;
    amount: Coin;
    resource: string;
    length: bigint;
}
export interface MsgInvestmintProtoMsg {
    typeUrl: "/cyber.resources.v1beta1.MsgInvestmint";
    value: Uint8Array;
}
export interface MsgInvestmintAmino {
    neuron?: string;
    amount?: CoinAmino;
    resource?: string;
    length?: string;
}
export interface MsgInvestmintAminoMsg {
    type: "/cyber.resources.v1beta1.MsgInvestmint";
    value: MsgInvestmintAmino;
}
export interface MsgInvestmintSDKType {
    neuron: string;
    amount: CoinSDKType;
    resource: string;
    length: bigint;
}
export interface MsgInvestmintResponse {
}
export interface MsgInvestmintResponseProtoMsg {
    typeUrl: "/cyber.resources.v1beta1.MsgInvestmintResponse";
    value: Uint8Array;
}
export interface MsgInvestmintResponseAmino {
}
export interface MsgInvestmintResponseAminoMsg {
    type: "/cyber.resources.v1beta1.MsgInvestmintResponse";
    value: MsgInvestmintResponseAmino;
}
export interface MsgInvestmintResponseSDKType {
}
export declare const MsgInvestmint: {
    typeUrl: string;
    encode(message: MsgInvestmint, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInvestmint;
    fromPartial(object: Partial<MsgInvestmint>): MsgInvestmint;
    fromAmino(object: MsgInvestmintAmino): MsgInvestmint;
    toAmino(message: MsgInvestmint): MsgInvestmintAmino;
    fromAminoMsg(object: MsgInvestmintAminoMsg): MsgInvestmint;
    fromProtoMsg(message: MsgInvestmintProtoMsg): MsgInvestmint;
    toProto(message: MsgInvestmint): Uint8Array;
    toProtoMsg(message: MsgInvestmint): MsgInvestmintProtoMsg;
};
export declare const MsgInvestmintResponse: {
    typeUrl: string;
    encode(_: MsgInvestmintResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgInvestmintResponse;
    fromPartial(_: Partial<MsgInvestmintResponse>): MsgInvestmintResponse;
    fromAmino(_: MsgInvestmintResponseAmino): MsgInvestmintResponse;
    toAmino(_: MsgInvestmintResponse): MsgInvestmintResponseAmino;
    fromAminoMsg(object: MsgInvestmintResponseAminoMsg): MsgInvestmintResponse;
    fromProtoMsg(message: MsgInvestmintResponseProtoMsg): MsgInvestmintResponse;
    toProto(message: MsgInvestmintResponse): Uint8Array;
    toProtoMsg(message: MsgInvestmintResponse): MsgInvestmintResponseProtoMsg;
};
