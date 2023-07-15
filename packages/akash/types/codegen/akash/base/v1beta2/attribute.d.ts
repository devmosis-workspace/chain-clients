import * as _m0 from "protobufjs/minimal";
/** Attribute represents key value pair */
export interface Attribute {
    key: string;
    value: string;
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
    signedBy?: SignedBy;
    /** Attribute list of attributes tenant expects from the provider */
    attributes: Attribute[];
}
/** PlacementRequirements */
export interface PlacementRequirementsSDKType {
    signed_by?: SignedBySDKType;
    attributes: AttributeSDKType[];
}
export declare const Attribute: {
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Attribute;
    fromPartial(object: Partial<Attribute>): Attribute;
};
export declare const SignedBy: {
    encode(message: SignedBy, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignedBy;
    fromPartial(object: Partial<SignedBy>): SignedBy;
};
export declare const PlacementRequirements: {
    encode(message: PlacementRequirements, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PlacementRequirements;
    fromPartial(object: Partial<PlacementRequirements>): PlacementRequirements;
};
