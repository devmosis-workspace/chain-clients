import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
    /** submitter is the signer account address of evidence. */
    submitter: string;
    /** evidence defines the evidence of misbehavior. */
    evidence?: Any;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceSDKType {
    submitter: string;
    evidence?: AnySDKType;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseSDKType {
    hash: Uint8Array;
}
export declare const MsgSubmitEvidence: {
    encode(message: MsgSubmitEvidence, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitEvidence;
    fromPartial(object: Partial<MsgSubmitEvidence>): MsgSubmitEvidence;
};
export declare const MsgSubmitEvidenceResponse: {
    encode(message: MsgSubmitEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitEvidenceResponse;
    fromPartial(object: Partial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse;
};
