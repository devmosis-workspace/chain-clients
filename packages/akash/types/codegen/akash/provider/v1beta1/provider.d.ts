import { Attribute, AttributeAmino, AttributeSDKType } from "../../base/v1beta1/attribute";
import { BinaryWriter } from "../../../binary";
/** ProviderInfo */
export interface ProviderInfo {
    email: string;
    website: string;
}
export interface ProviderInfoProtoMsg {
    typeUrl: "/akash.provider.v1beta1.ProviderInfo";
    value: Uint8Array;
}
/** ProviderInfo */
export interface ProviderInfoAmino {
    email: string;
    website: string;
}
export interface ProviderInfoAminoMsg {
    type: "/akash.provider.v1beta1.ProviderInfo";
    value: ProviderInfoAmino;
}
/** ProviderInfo */
export interface ProviderInfoSDKType {
    email: string;
    website: string;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: ProviderInfo;
}
export interface MsgCreateProviderProtoMsg {
    typeUrl: "/akash.provider.v1beta1.MsgCreateProvider";
    value: Uint8Array;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProviderAmino {
    owner: string;
    host_uri: string;
    attributes: AttributeAmino[];
    info?: ProviderInfoAmino;
}
export interface MsgCreateProviderAminoMsg {
    type: "/akash.provider.v1beta1.MsgCreateProvider";
    value: MsgCreateProviderAmino;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProviderSDKType {
    owner: string;
    host_uri: string;
    attributes: AttributeSDKType[];
    info: ProviderInfoSDKType;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {
}
export interface MsgCreateProviderResponseProtoMsg {
    typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse";
    value: Uint8Array;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponseAmino {
}
export interface MsgCreateProviderResponseAminoMsg {
    type: "/akash.provider.v1beta1.MsgCreateProviderResponse";
    value: MsgCreateProviderResponseAmino;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponseSDKType {
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: ProviderInfo;
}
export interface MsgUpdateProviderProtoMsg {
    typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider";
    value: Uint8Array;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProviderAmino {
    owner: string;
    host_uri: string;
    attributes: AttributeAmino[];
    info?: ProviderInfoAmino;
}
export interface MsgUpdateProviderAminoMsg {
    type: "/akash.provider.v1beta1.MsgUpdateProvider";
    value: MsgUpdateProviderAmino;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProviderSDKType {
    owner: string;
    host_uri: string;
    attributes: AttributeSDKType[];
    info: ProviderInfoSDKType;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {
}
export interface MsgUpdateProviderResponseProtoMsg {
    typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse";
    value: Uint8Array;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponseAmino {
}
export interface MsgUpdateProviderResponseAminoMsg {
    type: "/akash.provider.v1beta1.MsgUpdateProviderResponse";
    value: MsgUpdateProviderResponseAmino;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponseSDKType {
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
    owner: string;
}
export interface MsgDeleteProviderProtoMsg {
    typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider";
    value: Uint8Array;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProviderAmino {
    owner: string;
}
export interface MsgDeleteProviderAminoMsg {
    type: "/akash.provider.v1beta1.MsgDeleteProvider";
    value: MsgDeleteProviderAmino;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProviderSDKType {
    owner: string;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {
}
export interface MsgDeleteProviderResponseProtoMsg {
    typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse";
    value: Uint8Array;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponseAmino {
}
export interface MsgDeleteProviderResponseAminoMsg {
    type: "/akash.provider.v1beta1.MsgDeleteProviderResponse";
    value: MsgDeleteProviderResponseAmino;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponseSDKType {
}
/** Provider stores owner and host details */
export interface Provider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info: ProviderInfo;
}
export interface ProviderProtoMsg {
    typeUrl: "/akash.provider.v1beta1.Provider";
    value: Uint8Array;
}
/** Provider stores owner and host details */
export interface ProviderAmino {
    owner: string;
    host_uri: string;
    attributes: AttributeAmino[];
    info?: ProviderInfoAmino;
}
export interface ProviderAminoMsg {
    type: "/akash.provider.v1beta1.Provider";
    value: ProviderAmino;
}
/** Provider stores owner and host details */
export interface ProviderSDKType {
    owner: string;
    host_uri: string;
    attributes: AttributeSDKType[];
    info: ProviderInfoSDKType;
}
export declare const ProviderInfo: {
    typeUrl: string;
    encode(message: ProviderInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProviderInfo;
    fromPartial(object: Partial<ProviderInfo>): ProviderInfo;
    fromAmino(object: ProviderInfoAmino): ProviderInfo;
    toAmino(message: ProviderInfo): ProviderInfoAmino;
    fromAminoMsg(object: ProviderInfoAminoMsg): ProviderInfo;
    fromProtoMsg(message: ProviderInfoProtoMsg): ProviderInfo;
    toProto(message: ProviderInfo): Uint8Array;
    toProtoMsg(message: ProviderInfo): ProviderInfoProtoMsg;
};
export declare const MsgCreateProvider: {
    typeUrl: string;
    encode(message: MsgCreateProvider, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateProvider;
    fromPartial(object: Partial<MsgCreateProvider>): MsgCreateProvider;
    fromAmino(object: MsgCreateProviderAmino): MsgCreateProvider;
    toAmino(message: MsgCreateProvider): MsgCreateProviderAmino;
    fromAminoMsg(object: MsgCreateProviderAminoMsg): MsgCreateProvider;
    fromProtoMsg(message: MsgCreateProviderProtoMsg): MsgCreateProvider;
    toProto(message: MsgCreateProvider): Uint8Array;
    toProtoMsg(message: MsgCreateProvider): MsgCreateProviderProtoMsg;
};
export declare const MsgCreateProviderResponse: {
    typeUrl: string;
    encode(_: MsgCreateProviderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateProviderResponse;
    fromPartial(_: Partial<MsgCreateProviderResponse>): MsgCreateProviderResponse;
    fromAmino(_: MsgCreateProviderResponseAmino): MsgCreateProviderResponse;
    toAmino(_: MsgCreateProviderResponse): MsgCreateProviderResponseAmino;
    fromAminoMsg(object: MsgCreateProviderResponseAminoMsg): MsgCreateProviderResponse;
    fromProtoMsg(message: MsgCreateProviderResponseProtoMsg): MsgCreateProviderResponse;
    toProto(message: MsgCreateProviderResponse): Uint8Array;
    toProtoMsg(message: MsgCreateProviderResponse): MsgCreateProviderResponseProtoMsg;
};
export declare const MsgUpdateProvider: {
    typeUrl: string;
    encode(message: MsgUpdateProvider, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateProvider;
    fromPartial(object: Partial<MsgUpdateProvider>): MsgUpdateProvider;
    fromAmino(object: MsgUpdateProviderAmino): MsgUpdateProvider;
    toAmino(message: MsgUpdateProvider): MsgUpdateProviderAmino;
    fromAminoMsg(object: MsgUpdateProviderAminoMsg): MsgUpdateProvider;
    fromProtoMsg(message: MsgUpdateProviderProtoMsg): MsgUpdateProvider;
    toProto(message: MsgUpdateProvider): Uint8Array;
    toProtoMsg(message: MsgUpdateProvider): MsgUpdateProviderProtoMsg;
};
export declare const MsgUpdateProviderResponse: {
    typeUrl: string;
    encode(_: MsgUpdateProviderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateProviderResponse;
    fromPartial(_: Partial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse;
    fromAmino(_: MsgUpdateProviderResponseAmino): MsgUpdateProviderResponse;
    toAmino(_: MsgUpdateProviderResponse): MsgUpdateProviderResponseAmino;
    fromAminoMsg(object: MsgUpdateProviderResponseAminoMsg): MsgUpdateProviderResponse;
    fromProtoMsg(message: MsgUpdateProviderResponseProtoMsg): MsgUpdateProviderResponse;
    toProto(message: MsgUpdateProviderResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateProviderResponse): MsgUpdateProviderResponseProtoMsg;
};
export declare const MsgDeleteProvider: {
    typeUrl: string;
    encode(message: MsgDeleteProvider, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteProvider;
    fromPartial(object: Partial<MsgDeleteProvider>): MsgDeleteProvider;
    fromAmino(object: MsgDeleteProviderAmino): MsgDeleteProvider;
    toAmino(message: MsgDeleteProvider): MsgDeleteProviderAmino;
    fromAminoMsg(object: MsgDeleteProviderAminoMsg): MsgDeleteProvider;
    fromProtoMsg(message: MsgDeleteProviderProtoMsg): MsgDeleteProvider;
    toProto(message: MsgDeleteProvider): Uint8Array;
    toProtoMsg(message: MsgDeleteProvider): MsgDeleteProviderProtoMsg;
};
export declare const MsgDeleteProviderResponse: {
    typeUrl: string;
    encode(_: MsgDeleteProviderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteProviderResponse;
    fromPartial(_: Partial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse;
    fromAmino(_: MsgDeleteProviderResponseAmino): MsgDeleteProviderResponse;
    toAmino(_: MsgDeleteProviderResponse): MsgDeleteProviderResponseAmino;
    fromAminoMsg(object: MsgDeleteProviderResponseAminoMsg): MsgDeleteProviderResponse;
    fromProtoMsg(message: MsgDeleteProviderResponseProtoMsg): MsgDeleteProviderResponse;
    toProto(message: MsgDeleteProviderResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteProviderResponse): MsgDeleteProviderResponseProtoMsg;
};
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
