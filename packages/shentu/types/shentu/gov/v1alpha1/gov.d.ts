import { TallyParams, TallyParamsAmino, TallyParamsSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { BinaryWriter } from "../../../binary";
export interface CustomParams {
    certifierUpdateSecurityVoteTally?: TallyParams;
    certifierUpdateStakeVoteTally?: TallyParams;
}
export interface CustomParamsProtoMsg {
    typeUrl: "/shentu.gov.v1alpha1.CustomParams";
    value: Uint8Array;
}
export interface CustomParamsAmino {
    certifier_update_security_vote_tally?: TallyParamsAmino;
    certifier_update_stake_vote_tally?: TallyParamsAmino;
}
export interface CustomParamsAminoMsg {
    type: "/shentu.gov.v1alpha1.CustomParams";
    value: CustomParamsAmino;
}
export interface CustomParamsSDKType {
    certifier_update_security_vote_tally?: TallyParamsSDKType;
    certifier_update_stake_vote_tally?: TallyParamsSDKType;
}
export declare const CustomParams: {
    typeUrl: string;
    encode(message: CustomParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CustomParams;
    fromPartial(object: Partial<CustomParams>): CustomParams;
    fromAmino(object: CustomParamsAmino): CustomParams;
    toAmino(message: CustomParams): CustomParamsAmino;
    fromAminoMsg(object: CustomParamsAminoMsg): CustomParams;
    fromProtoMsg(message: CustomParamsProtoMsg): CustomParams;
    toProto(message: CustomParams): Uint8Array;
    toProtoMsg(message: CustomParams): CustomParamsProtoMsg;
};
