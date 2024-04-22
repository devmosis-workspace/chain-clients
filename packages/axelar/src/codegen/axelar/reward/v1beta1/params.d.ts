import { BinaryWriter } from "../../../binary";
/** Params represent the genesis parameters for the module */
export interface Params {
    externalChainVotingInflationRate: Uint8Array;
    keyMgmtRelativeInflationRate: Uint8Array;
}
export interface ParamsProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.Params";
    value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
    external_chain_voting_inflation_rate?: string;
    key_mgmt_relative_inflation_rate?: string;
}
export interface ParamsAminoMsg {
    type: "/axelar.reward.v1beta1.Params";
    value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    external_chain_voting_inflation_rate: Uint8Array;
    key_mgmt_relative_inflation_rate: Uint8Array;
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
