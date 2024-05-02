import { BinaryWriter } from "../../../binary";
export interface Provider {
    address: string;
    name: string;
    identity: string;
    website: string;
    description: string;
}
export interface ProviderProtoMsg {
    typeUrl: "/sentinel.provider.v1.Provider";
    value: Uint8Array;
}
export interface ProviderAmino {
    address?: string;
    name?: string;
    identity?: string;
    website?: string;
    description?: string;
}
export interface ProviderAminoMsg {
    type: "/sentinel.provider.v1.Provider";
    value: ProviderAmino;
}
export interface ProviderSDKType {
    address: string;
    name: string;
    identity: string;
    website: string;
    description: string;
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
