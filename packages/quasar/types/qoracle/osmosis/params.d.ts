import { Height, HeightAmino, HeightSDKType } from "../../ibc/core/client/v1/client";
import { BinaryWriter } from "../../binary";
export interface Params {
    enabled: boolean;
    /** Identifier of the epoch that we trigger the icq request */
    epochIdentifier: string;
    /** Identifier of authorized channel that we are allowed to send/receive packets */
    authorizedChannel: string;
    packetTimeoutHeight: Height;
    /** Timeout timestamp relative to counterparty chain current time. The timeout is disabled when set to 0. */
    packetTimeoutTimestamp: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    enabled?: boolean;
    /** Identifier of the epoch that we trigger the icq request */
    epoch_identifier?: string;
    /** Identifier of authorized channel that we are allowed to send/receive packets */
    authorized_channel?: string;
    packet_timeout_height?: HeightAmino;
    /** Timeout timestamp relative to counterparty chain current time. The timeout is disabled when set to 0. */
    packet_timeout_timestamp?: string;
}
export interface ParamsAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    enabled: boolean;
    epoch_identifier: string;
    authorized_channel: string;
    packet_timeout_height: HeightSDKType;
    packet_timeout_timestamp: bigint;
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
