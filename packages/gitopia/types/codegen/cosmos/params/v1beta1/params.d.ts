import * as _m0 from "protobufjs/minimal";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
    title: string;
    description: string;
    changes: ParamChange[];
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalSDKType {
    title: string;
    description: string;
    changes: ParamChangeSDKType[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
    subspace: string;
    key: string;
    value: string;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeSDKType {
    subspace: string;
    key: string;
    value: string;
}
export declare const ParameterChangeProposal: {
    encode(message: ParameterChangeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ParameterChangeProposal;
    fromPartial(object: Partial<ParameterChangeProposal>): ParameterChangeProposal;
};
export declare const ParamChange: {
    encode(message: ParamChange, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ParamChange;
    fromPartial(object: Partial<ParamChange>): ParamChange;
};
