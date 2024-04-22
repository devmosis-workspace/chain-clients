import { BinaryWriter } from "../../../binary";
/** Attribute represents key value pair */
export interface Attribute {
    key: string;
    value: string;
}
export interface AttributeProtoMsg {
    typeUrl: "/akash.base.v1beta3.Attribute";
    value: Uint8Array;
}
/** Attribute represents key value pair */
export interface AttributeAmino {
    key?: string;
    value?: string;
}
export interface AttributeAminoMsg {
    type: "/akash.base.v1beta3.Attribute";
    value: AttributeAmino;
}
/** Attribute represents key value pair */
export interface AttributeSDKType {
    key: string;
    value: string;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBy {
    /** all_of all keys in this list must have signed attributes */
    allOf: string[];
    /** any_of at least of of the keys from the list must have signed attributes */
    anyOf: string[];
}
export interface SignedByProtoMsg {
    typeUrl: "/akash.base.v1beta3.SignedBy";
    value: Uint8Array;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedByAmino {
    /** all_of all keys in this list must have signed attributes */
    all_of?: string[];
    /** any_of at least of of the keys from the list must have signed attributes */
    any_of?: string[];
}
export interface SignedByAminoMsg {
    type: "/akash.base.v1beta3.SignedBy";
    value: SignedByAmino;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBySDKType {
    all_of: string[];
    any_of: string[];
}
/** PlacementRequirements */
export interface PlacementRequirements {
    /** SignedBy list of keys that tenants expect to have signatures from */
    signedBy: SignedBy;
    /** Attribute list of attributes tenant expects from the provider */
    attributes: Attribute[];
}
export interface PlacementRequirementsProtoMsg {
    typeUrl: "/akash.base.v1beta3.PlacementRequirements";
    value: Uint8Array;
}
/** PlacementRequirements */
export interface PlacementRequirementsAmino {
    /** SignedBy list of keys that tenants expect to have signatures from */
    signed_by?: SignedByAmino;
    /** Attribute list of attributes tenant expects from the provider */
    attributes?: AttributeAmino[];
}
export interface PlacementRequirementsAminoMsg {
    type: "/akash.base.v1beta3.PlacementRequirements";
    value: PlacementRequirementsAmino;
}
/** PlacementRequirements */
export interface PlacementRequirementsSDKType {
    signed_by: SignedBySDKType;
    attributes: AttributeSDKType[];
}
export declare const Attribute: {
    typeUrl: string;
    encode(message: Attribute, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Attribute;
    fromPartial(object: Partial<Attribute>): Attribute;
    fromAmino(object: AttributeAmino): Attribute;
    toAmino(message: Attribute): AttributeAmino;
    fromAminoMsg(object: AttributeAminoMsg): Attribute;
    fromProtoMsg(message: AttributeProtoMsg): Attribute;
    toProto(message: Attribute): Uint8Array;
    toProtoMsg(message: Attribute): AttributeProtoMsg;
};
export declare const SignedBy: {
    typeUrl: string;
    encode(message: SignedBy, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignedBy;
    fromPartial(object: Partial<SignedBy>): SignedBy;
    fromAmino(object: SignedByAmino): SignedBy;
    toAmino(message: SignedBy): SignedByAmino;
    fromAminoMsg(object: SignedByAminoMsg): SignedBy;
    fromProtoMsg(message: SignedByProtoMsg): SignedBy;
    toProto(message: SignedBy): Uint8Array;
    toProtoMsg(message: SignedBy): SignedByProtoMsg;
};
export declare const PlacementRequirements: {
    typeUrl: string;
    encode(message: PlacementRequirements, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PlacementRequirements;
    fromPartial(object: Partial<PlacementRequirements>): PlacementRequirements;
    fromAmino(object: PlacementRequirementsAmino): PlacementRequirements;
    toAmino(message: PlacementRequirements): PlacementRequirementsAmino;
    fromAminoMsg(object: PlacementRequirementsAminoMsg): PlacementRequirements;
    fromProtoMsg(message: PlacementRequirementsProtoMsg): PlacementRequirements;
    toProto(message: PlacementRequirements): Uint8Array;
    toProtoMsg(message: PlacementRequirements): PlacementRequirementsProtoMsg;
};
