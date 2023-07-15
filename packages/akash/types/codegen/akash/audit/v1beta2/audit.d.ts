import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import * as _m0 from "protobufjs/minimal";
/** Provider stores owner auditor and attributes details */
export interface Provider {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
/** Provider stores owner auditor and attributes details */
export interface ProviderSDKType {
    owner: string;
    auditor: string;
    attributes: AttributeSDKType[];
}
/** Attributes */
export interface AuditedAttributes {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
/** Attributes */
export interface AuditedAttributesSDKType {
    owner: string;
    auditor: string;
    attributes: AttributeSDKType[];
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponse {
    attributes: AuditedAttributes[];
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponseSDKType {
    attributes: AuditedAttributesSDKType[];
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
    auditors: string[];
    owners: string[];
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFiltersSDKType {
    auditors: string[];
    owners: string[];
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributesSDKType {
    owner: string;
    auditor: string;
    attributes: AttributeSDKType[];
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponseSDKType {
}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
    owner: string;
    auditor: string;
    keys: string[];
}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributesSDKType {
    owner: string;
    auditor: string;
    keys: string[];
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponseSDKType {
}
export declare const Provider: {
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Provider;
    fromPartial(object: Partial<Provider>): Provider;
};
export declare const AuditedAttributes: {
    encode(message: AuditedAttributes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AuditedAttributes;
    fromPartial(object: Partial<AuditedAttributes>): AuditedAttributes;
};
export declare const AttributesResponse: {
    encode(message: AttributesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AttributesResponse;
    fromPartial(object: Partial<AttributesResponse>): AttributesResponse;
};
export declare const AttributesFilters: {
    encode(message: AttributesFilters, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AttributesFilters;
    fromPartial(object: Partial<AttributesFilters>): AttributesFilters;
};
export declare const MsgSignProviderAttributes: {
    encode(message: MsgSignProviderAttributes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSignProviderAttributes;
    fromPartial(object: Partial<MsgSignProviderAttributes>): MsgSignProviderAttributes;
};
export declare const MsgSignProviderAttributesResponse: {
    encode(_: MsgSignProviderAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSignProviderAttributesResponse;
    fromPartial(_: Partial<MsgSignProviderAttributesResponse>): MsgSignProviderAttributesResponse;
};
export declare const MsgDeleteProviderAttributes: {
    encode(message: MsgDeleteProviderAttributes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteProviderAttributes;
    fromPartial(object: Partial<MsgDeleteProviderAttributes>): MsgDeleteProviderAttributes;
};
export declare const MsgDeleteProviderAttributesResponse: {
    encode(_: MsgDeleteProviderAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteProviderAttributesResponse;
    fromPartial(_: Partial<MsgDeleteProviderAttributesResponse>): MsgDeleteProviderAttributesResponse;
};
