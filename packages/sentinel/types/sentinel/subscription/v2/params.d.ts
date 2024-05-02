import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
export interface Params {
    statusChangeDelay: Duration;
}
export interface ParamsProtoMsg {
    typeUrl: "/sentinel.subscription.v2.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    status_change_delay?: DurationAmino;
}
export interface ParamsAminoMsg {
    type: "/sentinel.subscription.v2.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    status_change_delay: DurationSDKType;
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
