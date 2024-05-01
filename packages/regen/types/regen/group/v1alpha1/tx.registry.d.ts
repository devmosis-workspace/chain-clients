import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupAccount, MsgUpdateGroupAccountAdmin, MsgUpdateGroupAccountDecisionPolicy, MsgUpdateGroupAccountMetadata, MsgCreateProposal, MsgVote, MsgExec } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        createGroupAccount(value: MsgCreateGroupAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateGroupAccountAdmin(value: MsgUpdateGroupAccountAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateGroupAccountDecisionPolicy(value: MsgUpdateGroupAccountDecisionPolicy): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateGroupAccountMetadata(value: MsgUpdateGroupAccountMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        createProposal(value: MsgCreateProposal): {
            typeUrl: string;
            value: Uint8Array;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: Uint8Array;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupAccount(value: MsgCreateGroupAccount): {
            typeUrl: string;
            value: MsgCreateGroupAccount;
        };
        updateGroupAccountAdmin(value: MsgUpdateGroupAccountAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAccountAdmin;
        };
        updateGroupAccountDecisionPolicy(value: MsgUpdateGroupAccountDecisionPolicy): {
            typeUrl: string;
            value: MsgUpdateGroupAccountDecisionPolicy;
        };
        updateGroupAccountMetadata(value: MsgUpdateGroupAccountMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupAccountMetadata;
        };
        createProposal(value: MsgCreateProposal): {
            typeUrl: string;
            value: MsgCreateProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
    };
    fromJSON: {
        createGroup(value: any): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupAccount(value: any): {
            typeUrl: string;
            value: MsgCreateGroupAccount;
        };
        updateGroupAccountAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupAccountAdmin;
        };
        updateGroupAccountDecisionPolicy(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupAccountDecisionPolicy;
        };
        updateGroupAccountMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupAccountMetadata;
        };
        createProposal(value: any): {
            typeUrl: string;
            value: MsgCreateProposal;
        };
        vote(value: any): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: any): {
            typeUrl: string;
            value: MsgExec;
        };
    };
    fromPartial: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupAccount(value: MsgCreateGroupAccount): {
            typeUrl: string;
            value: MsgCreateGroupAccount;
        };
        updateGroupAccountAdmin(value: MsgUpdateGroupAccountAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAccountAdmin;
        };
        updateGroupAccountDecisionPolicy(value: MsgUpdateGroupAccountDecisionPolicy): {
            typeUrl: string;
            value: MsgUpdateGroupAccountDecisionPolicy;
        };
        updateGroupAccountMetadata(value: MsgUpdateGroupAccountMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupAccountMetadata;
        };
        createProposal(value: MsgCreateProposal): {
            typeUrl: string;
            value: MsgCreateProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
    };
};
