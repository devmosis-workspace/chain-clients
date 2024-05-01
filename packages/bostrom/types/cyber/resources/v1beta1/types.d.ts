import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Params {
    maxSlots: number;
    halvingPeriodVoltBlocks: number;
    halvingPeriodAmpereBlocks: number;
    baseInvestmintPeriodVolt: number;
    baseInvestmintPeriodAmpere: number;
    minInvestmintPeriod: number;
    baseInvestmintAmountVolt: Coin;
    baseInvestmintAmountAmpere: Coin;
}
export interface ParamsProtoMsg {
    typeUrl: "/cyber.resources.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    max_slots?: number;
    halving_period_volt_blocks?: number;
    halving_period_ampere_blocks?: number;
    base_investmint_period_volt?: number;
    base_investmint_period_ampere?: number;
    min_investmint_period?: number;
    base_investmint_amount_volt?: CoinAmino;
    base_investmint_amount_ampere?: CoinAmino;
}
export interface ParamsAminoMsg {
    type: "/cyber.resources.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    max_slots: number;
    halving_period_volt_blocks: number;
    halving_period_ampere_blocks: number;
    base_investmint_period_volt: number;
    base_investmint_period_ampere: number;
    min_investmint_period: number;
    base_investmint_amount_volt: CoinSDKType;
    base_investmint_amount_ampere: CoinSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
