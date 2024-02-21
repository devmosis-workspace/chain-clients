import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
export interface LimitOrderExpiration {
    /** see limitOrderTranche.proto for details on goodTilDate */
    expirationTime: Timestamp;
    trancheRef: Uint8Array;
}
export interface LimitOrderExpirationProtoMsg {
    typeUrl: "/neutron.dex.LimitOrderExpiration";
    value: Uint8Array;
}
export interface LimitOrderExpirationAmino {
    /** see limitOrderTranche.proto for details on goodTilDate */
    expiration_time?: string;
    tranche_ref?: string;
}
export interface LimitOrderExpirationAminoMsg {
    type: "/neutron.dex.LimitOrderExpiration";
    value: LimitOrderExpirationAmino;
}
export interface LimitOrderExpirationSDKType {
    expiration_time: TimestampSDKType;
    tranche_ref: Uint8Array;
}
export declare const LimitOrderExpiration: {
    typeUrl: string;
    encode(message: LimitOrderExpiration, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LimitOrderExpiration;
    fromPartial(object: Partial<LimitOrderExpiration>): LimitOrderExpiration;
    fromAmino(object: LimitOrderExpirationAmino): LimitOrderExpiration;
    toAmino(message: LimitOrderExpiration): LimitOrderExpirationAmino;
    fromAminoMsg(object: LimitOrderExpirationAminoMsg): LimitOrderExpiration;
    fromProtoMsg(message: LimitOrderExpirationProtoMsg): LimitOrderExpiration;
    toProto(message: LimitOrderExpiration): Uint8Array;
    toProtoMsg(message: LimitOrderExpiration): LimitOrderExpirationProtoMsg;
};
