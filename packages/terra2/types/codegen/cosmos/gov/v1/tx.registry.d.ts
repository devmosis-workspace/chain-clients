import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: Uint8Array;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: Uint8Array;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: Uint8Array;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: Uint8Array;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: MsgExecLegacyContent;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        submitProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        execLegacyContent(value: any): {
            typeUrl: string;
            value: MsgExecLegacyContent;
        };
        vote(value: any): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: any): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        execLegacyContent(value: MsgExecLegacyContent): {
            typeUrl: string;
            value: MsgExecLegacyContent;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
