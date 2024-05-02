import { BinaryWriter } from "../../../binary";
export interface RewardsBucket {
    denom: string;
    amount: string;
}
export interface RewardsBucketProtoMsg {
    typeUrl: "/sifnode.clp.v1.RewardsBucket";
    value: Uint8Array;
}
export interface RewardsBucketAmino {
    denom?: string;
    amount?: string;
}
export interface RewardsBucketAminoMsg {
    type: "/sifnode.clp.v1.RewardsBucket";
    value: RewardsBucketAmino;
}
export interface RewardsBucketSDKType {
    denom: string;
    amount: string;
}
export declare const RewardsBucket: {
    typeUrl: string;
    encode(message: RewardsBucket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardsBucket;
    fromPartial(object: Partial<RewardsBucket>): RewardsBucket;
    fromAmino(object: RewardsBucketAmino): RewardsBucket;
    toAmino(message: RewardsBucket): RewardsBucketAmino;
    fromAminoMsg(object: RewardsBucketAminoMsg): RewardsBucket;
    fromProtoMsg(message: RewardsBucketProtoMsg): RewardsBucket;
    toProto(message: RewardsBucket): Uint8Array;
    toProtoMsg(message: RewardsBucket): RewardsBucketProtoMsg;
};
