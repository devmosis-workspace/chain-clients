import * as _m0 from "protobufjs/minimal";
/**
 * ClassTrace contains the base classID for ICS721 non-fungible tokens and the
 * source tracing information path.
 */
export interface ClassTrace {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the non-fungible token.
     */
    path: string;
    /** base classID of the relayed non-fungible token. */
    baseClassId: string;
}
/**
 * ClassTrace contains the base classID for ICS721 non-fungible tokens and the
 * source tracing information path.
 */
export interface ClassTraceSDKType {
    path: string;
    base_class_id: string;
}
export declare const ClassTrace: {
    encode(message: ClassTrace, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassTrace;
    fromPartial(object: Partial<ClassTrace>): ClassTrace;
};
