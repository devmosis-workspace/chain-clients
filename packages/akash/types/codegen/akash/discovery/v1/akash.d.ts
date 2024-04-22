import { ClientInfo, ClientInfoAmino, ClientInfoSDKType } from "./client_info";
import { BinaryWriter } from "../../../binary";
/** Akash akash specific RPC parameters */
export interface Akash {
    clientInfo?: ClientInfo;
}
export interface AkashProtoMsg {
    typeUrl: "/akash.discovery.v1.Akash";
    value: Uint8Array;
}
/** Akash akash specific RPC parameters */
export interface AkashAmino {
    client_info?: ClientInfoAmino;
}
export interface AkashAminoMsg {
    type: "/akash.discovery.v1.Akash";
    value: AkashAmino;
}
/** Akash akash specific RPC parameters */
export interface AkashSDKType {
    client_info?: ClientInfoSDKType;
}
export declare const Akash: {
    typeUrl: string;
    encode(message: Akash, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Akash;
    fromPartial(object: Partial<Akash>): Akash;
    fromAmino(object: AkashAmino): Akash;
    toAmino(message: Akash): AkashAmino;
    fromAminoMsg(object: AkashAminoMsg): Akash;
    fromProtoMsg(message: AkashProtoMsg): Akash;
    toProto(message: Akash): Uint8Array;
    toProtoMsg(message: Akash): AkashProtoMsg;
};
