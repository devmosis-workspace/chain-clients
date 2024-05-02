import { Status } from "../../types/v1/status";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Provider {
    address: string;
    name: string;
    identity: string;
    website: string;
    description: string;
    status: Status;
    statusAt: Timestamp;
}
export interface ProviderProtoMsg {
    typeUrl: "/sentinel.provider.v2.Provider";
    value: Uint8Array;
}
export interface ProviderAmino {
    address?: string;
    name?: string;
    identity?: string;
    website?: string;
    description?: string;
    status?: Status;
    status_at?: string;
}
export interface ProviderAminoMsg {
    type: "/sentinel.provider.v2.Provider";
    value: ProviderAmino;
}
export interface ProviderSDKType {
    address: string;
    name: string;
    identity: string;
    website: string;
    description: string;
    status: Status;
    status_at: TimestampSDKType;
}
export declare const Provider: {
    typeUrl: string;
    encode(message: Provider, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Provider;
    fromPartial(object: Partial<Provider>): Provider;
    fromAmino(object: ProviderAmino): Provider;
    toAmino(message: Provider): ProviderAmino;
    fromAminoMsg(object: ProviderAminoMsg): Provider;
    fromProtoMsg(message: ProviderProtoMsg): Provider;
    toProto(message: Provider): Uint8Array;
    toProtoMsg(message: Provider): ProviderProtoMsg;
};
