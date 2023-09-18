import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Params {
    maxCampaignDuration: Duration;
    creationFee: Coin;
}
export interface ParamsProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    max_campaign_duration?: DurationAmino;
    creation_fee?: CoinAmino;
}
export interface ParamsAminoMsg {
    type: "/OmniFlix.itc.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    max_campaign_duration: DurationSDKType;
    creation_fee: CoinSDKType;
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
