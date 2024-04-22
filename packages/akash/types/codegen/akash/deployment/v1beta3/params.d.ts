import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the x/deployment package */
export interface Params {
    minDeposits: Coin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/akash.deployment.v1beta3.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsAmino {
    min_deposits?: CoinAmino[];
}
export interface ParamsAminoMsg {
    type: "/akash.deployment.v1beta3.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
    min_deposits: CoinSDKType[];
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
