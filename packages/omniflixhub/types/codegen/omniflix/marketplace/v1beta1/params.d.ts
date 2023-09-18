import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
export interface Params {
    saleCommission: string;
    distribution: Distribution;
    bidCloseDuration: Duration;
    maxAuctionDuration: Duration;
}
export interface ParamsProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    sale_commission: string;
    distribution?: DistributionAmino;
    bid_close_duration?: DurationAmino;
    max_auction_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    sale_commission: string;
    distribution: DistributionSDKType;
    bid_close_duration: DurationSDKType;
    max_auction_duration: DurationSDKType;
}
export interface Distribution {
    staking: string;
    communityPool: string;
}
export interface DistributionProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution";
    value: Uint8Array;
}
export interface DistributionAmino {
    staking: string;
    community_pool: string;
}
export interface DistributionAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.Distribution";
    value: DistributionAmino;
}
export interface DistributionSDKType {
    staking: string;
    community_pool: string;
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
export declare const Distribution: {
    typeUrl: string;
    encode(message: Distribution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Distribution;
    fromPartial(object: Partial<Distribution>): Distribution;
    fromAmino(object: DistributionAmino): Distribution;
    toAmino(message: Distribution): DistributionAmino;
    fromAminoMsg(object: DistributionAminoMsg): Distribution;
    fromProtoMsg(message: DistributionProtoMsg): Distribution;
    toProto(message: Distribution): Uint8Array;
    toProtoMsg(message: Distribution): DistributionProtoMsg;
};
