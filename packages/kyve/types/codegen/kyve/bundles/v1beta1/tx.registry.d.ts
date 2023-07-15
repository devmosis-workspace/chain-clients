import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitBundleProposal, MsgVoteBundleProposal, MsgClaimUploaderRole, MsgSkipUploaderRole, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitBundleProposal(value: MsgSubmitBundleProposal): {
            typeUrl: string;
            value: Uint8Array;
        };
        voteBundleProposal(value: MsgVoteBundleProposal): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimUploaderRole(value: MsgClaimUploaderRole): {
            typeUrl: string;
            value: Uint8Array;
        };
        skipUploaderRole(value: MsgSkipUploaderRole): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        submitBundleProposal(value: MsgSubmitBundleProposal): {
            typeUrl: string;
            value: MsgSubmitBundleProposal;
        };
        voteBundleProposal(value: MsgVoteBundleProposal): {
            typeUrl: string;
            value: MsgVoteBundleProposal;
        };
        claimUploaderRole(value: MsgClaimUploaderRole): {
            typeUrl: string;
            value: MsgClaimUploaderRole;
        };
        skipUploaderRole(value: MsgSkipUploaderRole): {
            typeUrl: string;
            value: MsgSkipUploaderRole;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        submitBundleProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitBundleProposal;
        };
        voteBundleProposal(value: any): {
            typeUrl: string;
            value: MsgVoteBundleProposal;
        };
        claimUploaderRole(value: any): {
            typeUrl: string;
            value: MsgClaimUploaderRole;
        };
        skipUploaderRole(value: any): {
            typeUrl: string;
            value: MsgSkipUploaderRole;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        submitBundleProposal(value: MsgSubmitBundleProposal): {
            typeUrl: string;
            value: MsgSubmitBundleProposal;
        };
        voteBundleProposal(value: MsgVoteBundleProposal): {
            typeUrl: string;
            value: MsgVoteBundleProposal;
        };
        claimUploaderRole(value: MsgClaimUploaderRole): {
            typeUrl: string;
            value: MsgClaimUploaderRole;
        };
        skipUploaderRole(value: MsgSkipUploaderRole): {
            typeUrl: string;
            value: MsgSkipUploaderRole;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
