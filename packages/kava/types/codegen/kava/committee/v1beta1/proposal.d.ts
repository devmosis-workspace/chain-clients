import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposal {
    title: string;
    description: string;
    newCommittee?: Any;
}
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposalSDKType {
    title: string;
    description: string;
    new_committee?: AnySDKType;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposal {
    title: string;
    description: string;
    committeeId: Long;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposalSDKType {
    title: string;
    description: string;
    committee_id: Long;
}
export declare const CommitteeChangeProposal: {
    encode(message: CommitteeChangeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommitteeChangeProposal;
    fromPartial(object: Partial<CommitteeChangeProposal>): CommitteeChangeProposal;
};
export declare const CommitteeDeleteProposal: {
    encode(message: CommitteeDeleteProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommitteeDeleteProposal;
    fromPartial(object: Partial<CommitteeDeleteProposal>): CommitteeDeleteProposal;
};
