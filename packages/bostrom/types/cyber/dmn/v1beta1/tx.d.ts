import { Trigger, TriggerAmino, TriggerSDKType, Load, LoadAmino, LoadSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgCreateThought {
    program: string;
    trigger: Trigger;
    load: Load;
    name: string;
    particle: string;
}
export interface MsgCreateThoughtProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgCreateThought";
    value: Uint8Array;
}
export interface MsgCreateThoughtAmino {
    program?: string;
    trigger?: TriggerAmino;
    load?: LoadAmino;
    name?: string;
    particle?: string;
}
export interface MsgCreateThoughtAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgCreateThought";
    value: MsgCreateThoughtAmino;
}
export interface MsgCreateThoughtSDKType {
    program: string;
    trigger: TriggerSDKType;
    load: LoadSDKType;
    name: string;
    particle: string;
}
export interface MsgForgetThought {
    program: string;
    name: string;
}
export interface MsgForgetThoughtProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgForgetThought";
    value: Uint8Array;
}
export interface MsgForgetThoughtAmino {
    program?: string;
    name?: string;
}
export interface MsgForgetThoughtAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgForgetThought";
    value: MsgForgetThoughtAmino;
}
export interface MsgForgetThoughtSDKType {
    program: string;
    name: string;
}
export interface MsgChangeThoughtParticle {
    program: string;
    name: string;
    particle: string;
}
export interface MsgChangeThoughtParticleProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtParticle";
    value: Uint8Array;
}
export interface MsgChangeThoughtParticleAmino {
    program?: string;
    name?: string;
    particle?: string;
}
export interface MsgChangeThoughtParticleAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtParticle";
    value: MsgChangeThoughtParticleAmino;
}
export interface MsgChangeThoughtParticleSDKType {
    program: string;
    name: string;
    particle: string;
}
export interface MsgChangeThoughtName {
    program: string;
    name: string;
    newName: string;
}
export interface MsgChangeThoughtNameProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtName";
    value: Uint8Array;
}
export interface MsgChangeThoughtNameAmino {
    program?: string;
    name?: string;
    new_name?: string;
}
export interface MsgChangeThoughtNameAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtName";
    value: MsgChangeThoughtNameAmino;
}
export interface MsgChangeThoughtNameSDKType {
    program: string;
    name: string;
    new_name: string;
}
export interface MsgChangeThoughtInput {
    program: string;
    name: string;
    input: string;
}
export interface MsgChangeThoughtInputProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtInput";
    value: Uint8Array;
}
export interface MsgChangeThoughtInputAmino {
    program?: string;
    name?: string;
    input?: string;
}
export interface MsgChangeThoughtInputAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtInput";
    value: MsgChangeThoughtInputAmino;
}
export interface MsgChangeThoughtInputSDKType {
    program: string;
    name: string;
    input: string;
}
export interface MsgChangeThoughtGasPrice {
    program: string;
    name: string;
    gasPrice: Coin;
}
export interface MsgChangeThoughtGasPriceProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice";
    value: Uint8Array;
}
export interface MsgChangeThoughtGasPriceAmino {
    program?: string;
    name?: string;
    gas_price?: CoinAmino;
}
export interface MsgChangeThoughtGasPriceAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice";
    value: MsgChangeThoughtGasPriceAmino;
}
export interface MsgChangeThoughtGasPriceSDKType {
    program: string;
    name: string;
    gas_price: CoinSDKType;
}
export interface MsgChangeThoughtPeriod {
    program: string;
    name: string;
    period: bigint;
}
export interface MsgChangeThoughtPeriodProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod";
    value: Uint8Array;
}
export interface MsgChangeThoughtPeriodAmino {
    program?: string;
    name?: string;
    period?: string;
}
export interface MsgChangeThoughtPeriodAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod";
    value: MsgChangeThoughtPeriodAmino;
}
export interface MsgChangeThoughtPeriodSDKType {
    program: string;
    name: string;
    period: bigint;
}
export interface MsgChangeThoughtBlock {
    program: string;
    name: string;
    block: bigint;
}
export interface MsgChangeThoughtBlockProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtBlock";
    value: Uint8Array;
}
export interface MsgChangeThoughtBlockAmino {
    program?: string;
    name?: string;
    block?: string;
}
export interface MsgChangeThoughtBlockAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtBlock";
    value: MsgChangeThoughtBlockAmino;
}
export interface MsgChangeThoughtBlockSDKType {
    program: string;
    name: string;
    block: bigint;
}
export interface MsgCreateThoughtResponse {
}
export interface MsgCreateThoughtResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgCreateThoughtResponse";
    value: Uint8Array;
}
export interface MsgCreateThoughtResponseAmino {
}
export interface MsgCreateThoughtResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgCreateThoughtResponse";
    value: MsgCreateThoughtResponseAmino;
}
export interface MsgCreateThoughtResponseSDKType {
}
export interface MsgForgetThoughtResponse {
}
export interface MsgForgetThoughtResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgForgetThoughtResponse";
    value: Uint8Array;
}
export interface MsgForgetThoughtResponseAmino {
}
export interface MsgForgetThoughtResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgForgetThoughtResponse";
    value: MsgForgetThoughtResponseAmino;
}
export interface MsgForgetThoughtResponseSDKType {
}
export interface MsgChangeThoughtParticleResponse {
}
export interface MsgChangeThoughtParticleResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtParticleResponse";
    value: Uint8Array;
}
export interface MsgChangeThoughtParticleResponseAmino {
}
export interface MsgChangeThoughtParticleResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtParticleResponse";
    value: MsgChangeThoughtParticleResponseAmino;
}
export interface MsgChangeThoughtParticleResponseSDKType {
}
export interface MsgChangeThoughtNameResponse {
}
export interface MsgChangeThoughtNameResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtNameResponse";
    value: Uint8Array;
}
export interface MsgChangeThoughtNameResponseAmino {
}
export interface MsgChangeThoughtNameResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtNameResponse";
    value: MsgChangeThoughtNameResponseAmino;
}
export interface MsgChangeThoughtNameResponseSDKType {
}
export interface MsgChangeThoughtInputResponse {
}
export interface MsgChangeThoughtInputResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtInputResponse";
    value: Uint8Array;
}
export interface MsgChangeThoughtInputResponseAmino {
}
export interface MsgChangeThoughtInputResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtInputResponse";
    value: MsgChangeThoughtInputResponseAmino;
}
export interface MsgChangeThoughtInputResponseSDKType {
}
export interface MsgChangeThoughtGasPriceResponse {
}
export interface MsgChangeThoughtGasPriceResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPriceResponse";
    value: Uint8Array;
}
export interface MsgChangeThoughtGasPriceResponseAmino {
}
export interface MsgChangeThoughtGasPriceResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPriceResponse";
    value: MsgChangeThoughtGasPriceResponseAmino;
}
export interface MsgChangeThoughtGasPriceResponseSDKType {
}
export interface MsgChangeThoughtPeriodResponse {
}
export interface MsgChangeThoughtPeriodResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriodResponse";
    value: Uint8Array;
}
export interface MsgChangeThoughtPeriodResponseAmino {
}
export interface MsgChangeThoughtPeriodResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriodResponse";
    value: MsgChangeThoughtPeriodResponseAmino;
}
export interface MsgChangeThoughtPeriodResponseSDKType {
}
export interface MsgChangeThoughtBlockResponse {
}
export interface MsgChangeThoughtBlockResponseProtoMsg {
    typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtBlockResponse";
    value: Uint8Array;
}
export interface MsgChangeThoughtBlockResponseAmino {
}
export interface MsgChangeThoughtBlockResponseAminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtBlockResponse";
    value: MsgChangeThoughtBlockResponseAmino;
}
export interface MsgChangeThoughtBlockResponseSDKType {
}
export declare const MsgCreateThought: {
    typeUrl: string;
    encode(message: MsgCreateThought, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateThought;
    fromPartial(object: Partial<MsgCreateThought>): MsgCreateThought;
    fromAmino(object: MsgCreateThoughtAmino): MsgCreateThought;
    toAmino(message: MsgCreateThought): MsgCreateThoughtAmino;
    fromAminoMsg(object: MsgCreateThoughtAminoMsg): MsgCreateThought;
    fromProtoMsg(message: MsgCreateThoughtProtoMsg): MsgCreateThought;
    toProto(message: MsgCreateThought): Uint8Array;
    toProtoMsg(message: MsgCreateThought): MsgCreateThoughtProtoMsg;
};
export declare const MsgForgetThought: {
    typeUrl: string;
    encode(message: MsgForgetThought, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgForgetThought;
    fromPartial(object: Partial<MsgForgetThought>): MsgForgetThought;
    fromAmino(object: MsgForgetThoughtAmino): MsgForgetThought;
    toAmino(message: MsgForgetThought): MsgForgetThoughtAmino;
    fromAminoMsg(object: MsgForgetThoughtAminoMsg): MsgForgetThought;
    fromProtoMsg(message: MsgForgetThoughtProtoMsg): MsgForgetThought;
    toProto(message: MsgForgetThought): Uint8Array;
    toProtoMsg(message: MsgForgetThought): MsgForgetThoughtProtoMsg;
};
export declare const MsgChangeThoughtParticle: {
    typeUrl: string;
    encode(message: MsgChangeThoughtParticle, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeThoughtParticle;
    fromPartial(object: Partial<MsgChangeThoughtParticle>): MsgChangeThoughtParticle;
    fromAmino(object: MsgChangeThoughtParticleAmino): MsgChangeThoughtParticle;
    toAmino(message: MsgChangeThoughtParticle): MsgChangeThoughtParticleAmino;
    fromAminoMsg(object: MsgChangeThoughtParticleAminoMsg): MsgChangeThoughtParticle;
    fromProtoMsg(message: MsgChangeThoughtParticleProtoMsg): MsgChangeThoughtParticle;
    toProto(message: MsgChangeThoughtParticle): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtParticle): MsgChangeThoughtParticleProtoMsg;
};
export declare const MsgChangeThoughtName: {
    typeUrl: string;
    encode(message: MsgChangeThoughtName, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeThoughtName;
    fromPartial(object: Partial<MsgChangeThoughtName>): MsgChangeThoughtName;
    fromAmino(object: MsgChangeThoughtNameAmino): MsgChangeThoughtName;
    toAmino(message: MsgChangeThoughtName): MsgChangeThoughtNameAmino;
    fromAminoMsg(object: MsgChangeThoughtNameAminoMsg): MsgChangeThoughtName;
    fromProtoMsg(message: MsgChangeThoughtNameProtoMsg): MsgChangeThoughtName;
    toProto(message: MsgChangeThoughtName): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtName): MsgChangeThoughtNameProtoMsg;
};
export declare const MsgChangeThoughtInput: {
    typeUrl: string;
    encode(message: MsgChangeThoughtInput, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeThoughtInput;
    fromPartial(object: Partial<MsgChangeThoughtInput>): MsgChangeThoughtInput;
    fromAmino(object: MsgChangeThoughtInputAmino): MsgChangeThoughtInput;
    toAmino(message: MsgChangeThoughtInput): MsgChangeThoughtInputAmino;
    fromAminoMsg(object: MsgChangeThoughtInputAminoMsg): MsgChangeThoughtInput;
    fromProtoMsg(message: MsgChangeThoughtInputProtoMsg): MsgChangeThoughtInput;
    toProto(message: MsgChangeThoughtInput): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtInput): MsgChangeThoughtInputProtoMsg;
};
export declare const MsgChangeThoughtGasPrice: {
    typeUrl: string;
    encode(message: MsgChangeThoughtGasPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeThoughtGasPrice;
    fromPartial(object: Partial<MsgChangeThoughtGasPrice>): MsgChangeThoughtGasPrice;
    fromAmino(object: MsgChangeThoughtGasPriceAmino): MsgChangeThoughtGasPrice;
    toAmino(message: MsgChangeThoughtGasPrice): MsgChangeThoughtGasPriceAmino;
    fromAminoMsg(object: MsgChangeThoughtGasPriceAminoMsg): MsgChangeThoughtGasPrice;
    fromProtoMsg(message: MsgChangeThoughtGasPriceProtoMsg): MsgChangeThoughtGasPrice;
    toProto(message: MsgChangeThoughtGasPrice): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtGasPrice): MsgChangeThoughtGasPriceProtoMsg;
};
export declare const MsgChangeThoughtPeriod: {
    typeUrl: string;
    encode(message: MsgChangeThoughtPeriod, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeThoughtPeriod;
    fromPartial(object: Partial<MsgChangeThoughtPeriod>): MsgChangeThoughtPeriod;
    fromAmino(object: MsgChangeThoughtPeriodAmino): MsgChangeThoughtPeriod;
    toAmino(message: MsgChangeThoughtPeriod): MsgChangeThoughtPeriodAmino;
    fromAminoMsg(object: MsgChangeThoughtPeriodAminoMsg): MsgChangeThoughtPeriod;
    fromProtoMsg(message: MsgChangeThoughtPeriodProtoMsg): MsgChangeThoughtPeriod;
    toProto(message: MsgChangeThoughtPeriod): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtPeriod): MsgChangeThoughtPeriodProtoMsg;
};
export declare const MsgChangeThoughtBlock: {
    typeUrl: string;
    encode(message: MsgChangeThoughtBlock, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeThoughtBlock;
    fromPartial(object: Partial<MsgChangeThoughtBlock>): MsgChangeThoughtBlock;
    fromAmino(object: MsgChangeThoughtBlockAmino): MsgChangeThoughtBlock;
    toAmino(message: MsgChangeThoughtBlock): MsgChangeThoughtBlockAmino;
    fromAminoMsg(object: MsgChangeThoughtBlockAminoMsg): MsgChangeThoughtBlock;
    fromProtoMsg(message: MsgChangeThoughtBlockProtoMsg): MsgChangeThoughtBlock;
    toProto(message: MsgChangeThoughtBlock): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtBlock): MsgChangeThoughtBlockProtoMsg;
};
export declare const MsgCreateThoughtResponse: {
    typeUrl: string;
    encode(_: MsgCreateThoughtResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateThoughtResponse;
    fromPartial(_: Partial<MsgCreateThoughtResponse>): MsgCreateThoughtResponse;
    fromAmino(_: MsgCreateThoughtResponseAmino): MsgCreateThoughtResponse;
    toAmino(_: MsgCreateThoughtResponse): MsgCreateThoughtResponseAmino;
    fromAminoMsg(object: MsgCreateThoughtResponseAminoMsg): MsgCreateThoughtResponse;
    fromProtoMsg(message: MsgCreateThoughtResponseProtoMsg): MsgCreateThoughtResponse;
    toProto(message: MsgCreateThoughtResponse): Uint8Array;
    toProtoMsg(message: MsgCreateThoughtResponse): MsgCreateThoughtResponseProtoMsg;
};
export declare const MsgForgetThoughtResponse: {
    typeUrl: string;
    encode(_: MsgForgetThoughtResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgForgetThoughtResponse;
    fromPartial(_: Partial<MsgForgetThoughtResponse>): MsgForgetThoughtResponse;
    fromAmino(_: MsgForgetThoughtResponseAmino): MsgForgetThoughtResponse;
    toAmino(_: MsgForgetThoughtResponse): MsgForgetThoughtResponseAmino;
    fromAminoMsg(object: MsgForgetThoughtResponseAminoMsg): MsgForgetThoughtResponse;
    fromProtoMsg(message: MsgForgetThoughtResponseProtoMsg): MsgForgetThoughtResponse;
    toProto(message: MsgForgetThoughtResponse): Uint8Array;
    toProtoMsg(message: MsgForgetThoughtResponse): MsgForgetThoughtResponseProtoMsg;
};
export declare const MsgChangeThoughtParticleResponse: {
    typeUrl: string;
    encode(_: MsgChangeThoughtParticleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeThoughtParticleResponse;
    fromPartial(_: Partial<MsgChangeThoughtParticleResponse>): MsgChangeThoughtParticleResponse;
    fromAmino(_: MsgChangeThoughtParticleResponseAmino): MsgChangeThoughtParticleResponse;
    toAmino(_: MsgChangeThoughtParticleResponse): MsgChangeThoughtParticleResponseAmino;
    fromAminoMsg(object: MsgChangeThoughtParticleResponseAminoMsg): MsgChangeThoughtParticleResponse;
    fromProtoMsg(message: MsgChangeThoughtParticleResponseProtoMsg): MsgChangeThoughtParticleResponse;
    toProto(message: MsgChangeThoughtParticleResponse): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtParticleResponse): MsgChangeThoughtParticleResponseProtoMsg;
};
export declare const MsgChangeThoughtNameResponse: {
    typeUrl: string;
    encode(_: MsgChangeThoughtNameResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeThoughtNameResponse;
    fromPartial(_: Partial<MsgChangeThoughtNameResponse>): MsgChangeThoughtNameResponse;
    fromAmino(_: MsgChangeThoughtNameResponseAmino): MsgChangeThoughtNameResponse;
    toAmino(_: MsgChangeThoughtNameResponse): MsgChangeThoughtNameResponseAmino;
    fromAminoMsg(object: MsgChangeThoughtNameResponseAminoMsg): MsgChangeThoughtNameResponse;
    fromProtoMsg(message: MsgChangeThoughtNameResponseProtoMsg): MsgChangeThoughtNameResponse;
    toProto(message: MsgChangeThoughtNameResponse): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtNameResponse): MsgChangeThoughtNameResponseProtoMsg;
};
export declare const MsgChangeThoughtInputResponse: {
    typeUrl: string;
    encode(_: MsgChangeThoughtInputResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeThoughtInputResponse;
    fromPartial(_: Partial<MsgChangeThoughtInputResponse>): MsgChangeThoughtInputResponse;
    fromAmino(_: MsgChangeThoughtInputResponseAmino): MsgChangeThoughtInputResponse;
    toAmino(_: MsgChangeThoughtInputResponse): MsgChangeThoughtInputResponseAmino;
    fromAminoMsg(object: MsgChangeThoughtInputResponseAminoMsg): MsgChangeThoughtInputResponse;
    fromProtoMsg(message: MsgChangeThoughtInputResponseProtoMsg): MsgChangeThoughtInputResponse;
    toProto(message: MsgChangeThoughtInputResponse): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtInputResponse): MsgChangeThoughtInputResponseProtoMsg;
};
export declare const MsgChangeThoughtGasPriceResponse: {
    typeUrl: string;
    encode(_: MsgChangeThoughtGasPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeThoughtGasPriceResponse;
    fromPartial(_: Partial<MsgChangeThoughtGasPriceResponse>): MsgChangeThoughtGasPriceResponse;
    fromAmino(_: MsgChangeThoughtGasPriceResponseAmino): MsgChangeThoughtGasPriceResponse;
    toAmino(_: MsgChangeThoughtGasPriceResponse): MsgChangeThoughtGasPriceResponseAmino;
    fromAminoMsg(object: MsgChangeThoughtGasPriceResponseAminoMsg): MsgChangeThoughtGasPriceResponse;
    fromProtoMsg(message: MsgChangeThoughtGasPriceResponseProtoMsg): MsgChangeThoughtGasPriceResponse;
    toProto(message: MsgChangeThoughtGasPriceResponse): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtGasPriceResponse): MsgChangeThoughtGasPriceResponseProtoMsg;
};
export declare const MsgChangeThoughtPeriodResponse: {
    typeUrl: string;
    encode(_: MsgChangeThoughtPeriodResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeThoughtPeriodResponse;
    fromPartial(_: Partial<MsgChangeThoughtPeriodResponse>): MsgChangeThoughtPeriodResponse;
    fromAmino(_: MsgChangeThoughtPeriodResponseAmino): MsgChangeThoughtPeriodResponse;
    toAmino(_: MsgChangeThoughtPeriodResponse): MsgChangeThoughtPeriodResponseAmino;
    fromAminoMsg(object: MsgChangeThoughtPeriodResponseAminoMsg): MsgChangeThoughtPeriodResponse;
    fromProtoMsg(message: MsgChangeThoughtPeriodResponseProtoMsg): MsgChangeThoughtPeriodResponse;
    toProto(message: MsgChangeThoughtPeriodResponse): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtPeriodResponse): MsgChangeThoughtPeriodResponseProtoMsg;
};
export declare const MsgChangeThoughtBlockResponse: {
    typeUrl: string;
    encode(_: MsgChangeThoughtBlockResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeThoughtBlockResponse;
    fromPartial(_: Partial<MsgChangeThoughtBlockResponse>): MsgChangeThoughtBlockResponse;
    fromAmino(_: MsgChangeThoughtBlockResponseAmino): MsgChangeThoughtBlockResponse;
    toAmino(_: MsgChangeThoughtBlockResponse): MsgChangeThoughtBlockResponseAmino;
    fromAminoMsg(object: MsgChangeThoughtBlockResponseAminoMsg): MsgChangeThoughtBlockResponse;
    fromProtoMsg(message: MsgChangeThoughtBlockResponseProtoMsg): MsgChangeThoughtBlockResponse;
    toProto(message: MsgChangeThoughtBlockResponse): Uint8Array;
    toProtoMsg(message: MsgChangeThoughtBlockResponse): MsgChangeThoughtBlockResponseProtoMsg;
};
