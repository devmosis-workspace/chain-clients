import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** Params defines the claim module's parameters. */
export interface Params {
    airdropEnabled: boolean;
    /** airdrop starting time */
    airdropStartTime: Timestamp;
    durationUntilDecay: Duration;
    durationOfDecay: Duration;
    /** denom of claimable asset */
    claimDenom: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/passage3d.claim.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
    airdrop_enabled?: boolean;
    /** airdrop starting time */
    airdrop_start_time?: string;
    duration_until_decay?: DurationAmino;
    duration_of_decay?: DurationAmino;
    /** denom of claimable asset */
    claim_denom?: string;
}
export interface ParamsAminoMsg {
    type: "/passage3d.claim.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
    airdrop_enabled: boolean;
    airdrop_start_time: TimestampSDKType;
    duration_until_decay: DurationSDKType;
    duration_of_decay: DurationSDKType;
    claim_denom: string;
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
