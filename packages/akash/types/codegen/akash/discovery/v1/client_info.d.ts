import { BinaryWriter } from "../../../binary";
/** ClientInfo akash specific client info */
export interface ClientInfo {
    apiVersion: string;
}
export interface ClientInfoProtoMsg {
    typeUrl: "/akash.discovery.v1.ClientInfo";
    value: Uint8Array;
}
/** ClientInfo akash specific client info */
export interface ClientInfoAmino {
    api_version?: string;
}
export interface ClientInfoAminoMsg {
    type: "/akash.discovery.v1.ClientInfo";
    value: ClientInfoAmino;
}
/** ClientInfo akash specific client info */
export interface ClientInfoSDKType {
    api_version: string;
}
export declare const ClientInfo: {
    typeUrl: string;
    encode(message: ClientInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClientInfo;
    fromPartial(object: Partial<ClientInfo>): ClientInfo;
    fromAmino(object: ClientInfoAmino): ClientInfo;
    toAmino(message: ClientInfo): ClientInfoAmino;
    fromAminoMsg(object: ClientInfoAminoMsg): ClientInfo;
    fromProtoMsg(message: ClientInfoProtoMsg): ClientInfo;
    toProto(message: ClientInfo): Uint8Array;
    toProtoMsg(message: ClientInfo): ClientInfoProtoMsg;
};
