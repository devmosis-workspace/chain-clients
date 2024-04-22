import { BinaryWriter } from "../../../binary";
/** Params extends the parameters for the x/staking module */
export interface Params {
    /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
    minCommissionRate: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/akash.staking.v1beta3.Params";
    value: Uint8Array;
}
/** Params extends the parameters for the x/staking module */
export interface ParamsAmino {
    /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
    min_commission_rate?: string;
}
export interface ParamsAminoMsg {
    type: "/akash.staking.v1beta3.Params";
    value: ParamsAmino;
}
/** Params extends the parameters for the x/staking module */
export interface ParamsSDKType {
    min_commission_rate: string;
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
