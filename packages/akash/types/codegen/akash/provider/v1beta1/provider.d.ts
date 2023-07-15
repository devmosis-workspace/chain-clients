import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import * as _m0 from "protobufjs/minimal";
/** ProviderInfo */
export interface ProviderInfo {
    email: string;
    website: string;
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
    info?: ProviderInfo;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProviderSDKType {
    owner: string;
    host_uri: string;
    attributes: AttributeSDKType[];
    info?: ProviderInfoSDKType;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponseSDKType {
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info?: ProviderInfo;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProviderSDKType {
    owner: string;
    host_uri: string;
    attributes: AttributeSDKType[];
    info?: ProviderInfoSDKType;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponseSDKType {
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
    owner: string;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProviderSDKType {
    owner: string;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponseSDKType {
}
/** Provider stores owner and host details */
export interface Provider {
    owner: string;
    hostUri: string;
    attributes: Attribute[];
    info?: ProviderInfo;
}
/** Provider stores owner and host details */
export interface ProviderSDKType {
    owner: string;
    host_uri: string;
    attributes: AttributeSDKType[];
    info?: ProviderInfoSDKType;
}
export declare const ProviderInfo: {
    encode(message: ProviderInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProviderInfo;
    fromPartial(object: Partial<ProviderInfo>): ProviderInfo;
};
export declare const MsgCreateProvider: {
    encode(message: MsgCreateProvider, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateProvider;
    fromPartial(object: Partial<MsgCreateProvider>): MsgCreateProvider;
};
export declare const MsgCreateProviderResponse: {
    encode(_: MsgCreateProviderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateProviderResponse;
    fromPartial(_: Partial<MsgCreateProviderResponse>): MsgCreateProviderResponse;
};
export declare const MsgUpdateProvider: {
    encode(message: MsgUpdateProvider, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateProvider;
    fromPartial(object: Partial<MsgUpdateProvider>): MsgUpdateProvider;
};
export declare const MsgUpdateProviderResponse: {
    encode(_: MsgUpdateProviderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateProviderResponse;
    fromPartial(_: Partial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse;
};
export declare const MsgDeleteProvider: {
    encode(message: MsgDeleteProvider, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteProvider;
    fromPartial(object: Partial<MsgDeleteProvider>): MsgDeleteProvider;
};
export declare const MsgDeleteProviderResponse: {
    encode(_: MsgDeleteProviderResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteProviderResponse;
    fromPartial(_: Partial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse;
};
export declare const Provider: {
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Provider;
    fromPartial(object: Partial<Provider>): Provider;
};
