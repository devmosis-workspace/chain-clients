import { Attribute, AttributeAmino, AttributeSDKType } from "../../base/v1beta1/attribute";
import { BinaryWriter } from "../../../binary";
/** Provider stores owner auditor and attributes details */
export interface Provider {
    owner: string;
    auditor: string;
    attributes: Attribute[];
}
export interface ProviderProtoMsg {
    typeUrl: "/akash.audit.v1beta1.Provider";
    value: Uint8Array;
}
/** Provider stores owner auditor and attributes details */
export interface ProviderAmino {
    owner?: string;
    auditor?: string;
    attributes?: AttributeAmino[];
}
export interface ProviderAminoMsg {
    type: "/akash.audit.v1beta1.Provider";
    value: ProviderAmino;
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
export interface AuditedAttributesProtoMsg {
    typeUrl: "/akash.audit.v1beta1.AuditedAttributes";
    value: Uint8Array;
}
/** Attributes */
export interface AuditedAttributesAmino {
    owner?: string;
    auditor?: string;
    attributes?: AttributeAmino[];
}
export interface AuditedAttributesAminoMsg {
    type: "/akash.audit.v1beta1.AuditedAttributes";
    value: AuditedAttributesAmino;
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
export interface AttributesResponseProtoMsg {
    typeUrl: "/akash.audit.v1beta1.AttributesResponse";
    value: Uint8Array;
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponseAmino {
    attributes?: AuditedAttributesAmino[];
}
export interface AttributesResponseAminoMsg {
    type: "/akash.audit.v1beta1.AttributesResponse";
    value: AttributesResponseAmino;
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
export interface AttributesFiltersProtoMsg {
    typeUrl: "/akash.audit.v1beta1.AttributesFilters";
    value: Uint8Array;
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFiltersAmino {
    auditors?: string[];
    owners?: string[];
}
export interface AttributesFiltersAminoMsg {
    type: "/akash.audit.v1beta1.AttributesFilters";
    value: AttributesFiltersAmino;
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
export interface MsgSignProviderAttributesProtoMsg {
    typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes";
    value: Uint8Array;
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributesAmino {
    owner?: string;
    auditor?: string;
    attributes?: AttributeAmino[];
}
export interface MsgSignProviderAttributesAminoMsg {
    type: "/akash.audit.v1beta1.MsgSignProviderAttributes";
    value: MsgSignProviderAttributesAmino;
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
export interface MsgSignProviderAttributesResponseProtoMsg {
    typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse";
    value: Uint8Array;
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponseAmino {
}
export interface MsgSignProviderAttributesResponseAminoMsg {
    type: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse";
    value: MsgSignProviderAttributesResponseAmino;
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
export interface MsgDeleteProviderAttributesProtoMsg {
    typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes";
    value: Uint8Array;
}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributesAmino {
    owner?: string;
    auditor?: string;
    keys?: string[];
}
export interface MsgDeleteProviderAttributesAminoMsg {
    type: "/akash.audit.v1beta1.MsgDeleteProviderAttributes";
    value: MsgDeleteProviderAttributesAmino;
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
export interface MsgDeleteProviderAttributesResponseProtoMsg {
    typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse";
    value: Uint8Array;
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponseAmino {
}
export interface MsgDeleteProviderAttributesResponseAminoMsg {
    type: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse";
    value: MsgDeleteProviderAttributesResponseAmino;
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponseSDKType {
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
export declare const AuditedAttributes: {
    typeUrl: string;
    encode(message: AuditedAttributes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AuditedAttributes;
    fromPartial(object: Partial<AuditedAttributes>): AuditedAttributes;
    fromAmino(object: AuditedAttributesAmino): AuditedAttributes;
    toAmino(message: AuditedAttributes): AuditedAttributesAmino;
    fromAminoMsg(object: AuditedAttributesAminoMsg): AuditedAttributes;
    fromProtoMsg(message: AuditedAttributesProtoMsg): AuditedAttributes;
    toProto(message: AuditedAttributes): Uint8Array;
    toProtoMsg(message: AuditedAttributes): AuditedAttributesProtoMsg;
};
export declare const AttributesResponse: {
    typeUrl: string;
    encode(message: AttributesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AttributesResponse;
    fromPartial(object: Partial<AttributesResponse>): AttributesResponse;
    fromAmino(object: AttributesResponseAmino): AttributesResponse;
    toAmino(message: AttributesResponse): AttributesResponseAmino;
    fromAminoMsg(object: AttributesResponseAminoMsg): AttributesResponse;
    fromProtoMsg(message: AttributesResponseProtoMsg): AttributesResponse;
    toProto(message: AttributesResponse): Uint8Array;
    toProtoMsg(message: AttributesResponse): AttributesResponseProtoMsg;
};
export declare const AttributesFilters: {
    typeUrl: string;
    encode(message: AttributesFilters, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AttributesFilters;
    fromPartial(object: Partial<AttributesFilters>): AttributesFilters;
    fromAmino(object: AttributesFiltersAmino): AttributesFilters;
    toAmino(message: AttributesFilters): AttributesFiltersAmino;
    fromAminoMsg(object: AttributesFiltersAminoMsg): AttributesFilters;
    fromProtoMsg(message: AttributesFiltersProtoMsg): AttributesFilters;
    toProto(message: AttributesFilters): Uint8Array;
    toProtoMsg(message: AttributesFilters): AttributesFiltersProtoMsg;
};
export declare const MsgSignProviderAttributes: {
    typeUrl: string;
    encode(message: MsgSignProviderAttributes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSignProviderAttributes;
    fromPartial(object: Partial<MsgSignProviderAttributes>): MsgSignProviderAttributes;
    fromAmino(object: MsgSignProviderAttributesAmino): MsgSignProviderAttributes;
    toAmino(message: MsgSignProviderAttributes): MsgSignProviderAttributesAmino;
    fromAminoMsg(object: MsgSignProviderAttributesAminoMsg): MsgSignProviderAttributes;
    fromProtoMsg(message: MsgSignProviderAttributesProtoMsg): MsgSignProviderAttributes;
    toProto(message: MsgSignProviderAttributes): Uint8Array;
    toProtoMsg(message: MsgSignProviderAttributes): MsgSignProviderAttributesProtoMsg;
};
export declare const MsgSignProviderAttributesResponse: {
    typeUrl: string;
    encode(_: MsgSignProviderAttributesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSignProviderAttributesResponse;
    fromPartial(_: Partial<MsgSignProviderAttributesResponse>): MsgSignProviderAttributesResponse;
    fromAmino(_: MsgSignProviderAttributesResponseAmino): MsgSignProviderAttributesResponse;
    toAmino(_: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseAmino;
    fromAminoMsg(object: MsgSignProviderAttributesResponseAminoMsg): MsgSignProviderAttributesResponse;
    fromProtoMsg(message: MsgSignProviderAttributesResponseProtoMsg): MsgSignProviderAttributesResponse;
    toProto(message: MsgSignProviderAttributesResponse): Uint8Array;
    toProtoMsg(message: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseProtoMsg;
};
export declare const MsgDeleteProviderAttributes: {
    typeUrl: string;
    encode(message: MsgDeleteProviderAttributes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteProviderAttributes;
    fromPartial(object: Partial<MsgDeleteProviderAttributes>): MsgDeleteProviderAttributes;
    fromAmino(object: MsgDeleteProviderAttributesAmino): MsgDeleteProviderAttributes;
    toAmino(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesAmino;
    fromAminoMsg(object: MsgDeleteProviderAttributesAminoMsg): MsgDeleteProviderAttributes;
    fromProtoMsg(message: MsgDeleteProviderAttributesProtoMsg): MsgDeleteProviderAttributes;
    toProto(message: MsgDeleteProviderAttributes): Uint8Array;
    toProtoMsg(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesProtoMsg;
};
export declare const MsgDeleteProviderAttributesResponse: {
    typeUrl: string;
    encode(_: MsgDeleteProviderAttributesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteProviderAttributesResponse;
    fromPartial(_: Partial<MsgDeleteProviderAttributesResponse>): MsgDeleteProviderAttributesResponse;
    fromAmino(_: MsgDeleteProviderAttributesResponseAmino): MsgDeleteProviderAttributesResponse;
    toAmino(_: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseAmino;
    fromAminoMsg(object: MsgDeleteProviderAttributesResponseAminoMsg): MsgDeleteProviderAttributesResponse;
    fromProtoMsg(message: MsgDeleteProviderAttributesResponseProtoMsg): MsgDeleteProviderAttributesResponse;
    toProto(message: MsgDeleteProviderAttributesResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseProtoMsg;
};
