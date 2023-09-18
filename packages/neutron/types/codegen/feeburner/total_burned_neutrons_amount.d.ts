import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmount {
    coin: Coin;
}
export interface TotalBurnedNeutronsAmountProtoMsg {
    typeUrl: "/neutron.feeburner.TotalBurnedNeutronsAmount";
    value: Uint8Array;
}
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmountAmino {
    coin?: CoinAmino;
}
export interface TotalBurnedNeutronsAmountAminoMsg {
    type: "/neutron.feeburner.TotalBurnedNeutronsAmount";
    value: TotalBurnedNeutronsAmountAmino;
}
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmountSDKType {
    coin: CoinSDKType;
}
export declare const TotalBurnedNeutronsAmount: {
    typeUrl: string;
    encode(message: TotalBurnedNeutronsAmount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TotalBurnedNeutronsAmount;
    fromPartial(object: Partial<TotalBurnedNeutronsAmount>): TotalBurnedNeutronsAmount;
    fromAmino(object: TotalBurnedNeutronsAmountAmino): TotalBurnedNeutronsAmount;
    toAmino(message: TotalBurnedNeutronsAmount): TotalBurnedNeutronsAmountAmino;
    fromAminoMsg(object: TotalBurnedNeutronsAmountAminoMsg): TotalBurnedNeutronsAmount;
    fromProtoMsg(message: TotalBurnedNeutronsAmountProtoMsg): TotalBurnedNeutronsAmount;
    toProto(message: TotalBurnedNeutronsAmount): Uint8Array;
    toProtoMsg(message: TotalBurnedNeutronsAmount): TotalBurnedNeutronsAmountProtoMsg;
};
