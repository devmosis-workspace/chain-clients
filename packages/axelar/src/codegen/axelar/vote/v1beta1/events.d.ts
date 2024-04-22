import { BinaryWriter } from "../../../binary";
export interface Voted {
    module: string;
    action: string;
    poll: string;
    voter: string;
    state: string;
}
export interface VotedProtoMsg {
    typeUrl: "/axelar.vote.v1beta1.Voted";
    value: Uint8Array;
}
export interface VotedAmino {
    module?: string;
    action?: string;
    poll?: string;
    voter?: string;
    state?: string;
}
export interface VotedAminoMsg {
    type: "/axelar.vote.v1beta1.Voted";
    value: VotedAmino;
}
export interface VotedSDKType {
    module: string;
    action: string;
    poll: string;
    voter: string;
    state: string;
}
export declare const Voted: {
    typeUrl: string;
    encode(message: Voted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Voted;
    fromPartial(object: Partial<Voted>): Voted;
    fromAmino(object: VotedAmino): Voted;
    toAmino(message: Voted): VotedAmino;
    fromAminoMsg(object: VotedAminoMsg): Voted;
    fromProtoMsg(message: VotedProtoMsg): Voted;
    toProto(message: Voted): Uint8Array;
    toProtoMsg(message: Voted): VotedProtoMsg;
};
