import * as _0 from "./bundles/v1beta1/bundles";
import * as _1 from "./bundles/v1beta1/events";
import * as _2 from "./bundles/v1beta1/genesis";
import * as _3 from "./bundles/v1beta1/params";
import * as _4 from "./bundles/v1beta1/query";
import * as _5 from "./bundles/v1beta1/tx";
import * as _6 from "./delegation/v1beta1/delegation";
import * as _7 from "./delegation/v1beta1/events";
import * as _8 from "./delegation/v1beta1/genesis";
import * as _9 from "./delegation/v1beta1/params";
import * as _10 from "./delegation/v1beta1/query";
import * as _11 from "./delegation/v1beta1/tx";
import * as _12 from "./global/v1beta1/events";
import * as _13 from "./global/v1beta1/genesis";
import * as _14 from "./global/v1beta1/global";
import * as _15 from "./global/v1beta1/query";
import * as _16 from "./global/v1beta1/tx";
import * as _17 from "./pool/v1beta1/events";
import * as _18 from "./pool/v1beta1/genesis";
import * as _19 from "./pool/v1beta1/params";
import * as _20 from "./pool/v1beta1/pool";
import * as _21 from "./pool/v1beta1/query";
import * as _22 from "./pool/v1beta1/tx";
import * as _23 from "./query/v1beta1/account";
import * as _24 from "./query/v1beta1/bundles";
import * as _25 from "./query/v1beta1/delegation";
import * as _26 from "./query/v1beta1/params";
import * as _27 from "./query/v1beta1/pools";
import * as _28 from "./query/v1beta1/query";
import * as _29 from "./query/v1beta1/stakers";
import * as _30 from "./stakers/v1beta1/events";
import * as _31 from "./stakers/v1beta1/genesis";
import * as _32 from "./stakers/v1beta1/params";
import * as _33 from "./stakers/v1beta1/query";
import * as _34 from "./stakers/v1beta1/stakers";
import * as _35 from "./stakers/v1beta1/tx";
import * as _36 from "./team/v1beta1/events";
import * as _37 from "./team/v1beta1/genesis";
import * as _38 from "./team/v1beta1/query";
import * as _39 from "./team/v1beta1/team";
import * as _40 from "./team/v1beta1/tx";
import * as _168 from "./bundles/v1beta1/query.lcd";
import * as _169 from "./delegation/v1beta1/query.lcd";
import * as _170 from "./global/v1beta1/query.lcd";
import * as _171 from "./pool/v1beta1/query.lcd";
import * as _172 from "./stakers/v1beta1/query.lcd";
import * as _173 from "./team/v1beta1/query.lcd";
import * as _174 from "./bundles/v1beta1/query.rpc.Query";
import * as _175 from "./delegation/v1beta1/query.rpc.Query";
import * as _176 from "./global/v1beta1/query.rpc.Query";
import * as _177 from "./pool/v1beta1/query.rpc.Query";
import * as _178 from "./stakers/v1beta1/query.rpc.Query";
import * as _179 from "./team/v1beta1/query.rpc.Query";
import * as _180 from "./bundles/v1beta1/tx.rpc.msg";
import * as _181 from "./delegation/v1beta1/tx.rpc.msg";
import * as _182 from "./global/v1beta1/tx.rpc.msg";
import * as _183 from "./pool/v1beta1/tx.rpc.msg";
import * as _184 from "./stakers/v1beta1/tx.rpc.msg";
import * as _185 from "./team/v1beta1/tx.rpc.msg";
export declare namespace kyve {
    namespace bundles {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitBundleProposal(value: _5.MsgSubmitBundleProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteBundleProposal(value: _5.MsgVoteBundleProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimUploaderRole(value: _5.MsgClaimUploaderRole): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    skipUploaderRole(value: _5.MsgSkipUploaderRole): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitBundleProposal(value: _5.MsgSubmitBundleProposal): {
                        typeUrl: string;
                        value: _5.MsgSubmitBundleProposal;
                    };
                    voteBundleProposal(value: _5.MsgVoteBundleProposal): {
                        typeUrl: string;
                        value: _5.MsgVoteBundleProposal;
                    };
                    claimUploaderRole(value: _5.MsgClaimUploaderRole): {
                        typeUrl: string;
                        value: _5.MsgClaimUploaderRole;
                    };
                    skipUploaderRole(value: _5.MsgSkipUploaderRole): {
                        typeUrl: string;
                        value: _5.MsgSkipUploaderRole;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitBundleProposal(value: any): {
                        typeUrl: string;
                        value: _5.MsgSubmitBundleProposal;
                    };
                    voteBundleProposal(value: any): {
                        typeUrl: string;
                        value: _5.MsgVoteBundleProposal;
                    };
                    claimUploaderRole(value: any): {
                        typeUrl: string;
                        value: _5.MsgClaimUploaderRole;
                    };
                    skipUploaderRole(value: any): {
                        typeUrl: string;
                        value: _5.MsgSkipUploaderRole;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitBundleProposal(value: _5.MsgSubmitBundleProposal): {
                        typeUrl: string;
                        value: _5.MsgSubmitBundleProposal;
                    };
                    voteBundleProposal(value: _5.MsgVoteBundleProposal): {
                        typeUrl: string;
                        value: _5.MsgVoteBundleProposal;
                    };
                    claimUploaderRole(value: _5.MsgClaimUploaderRole): {
                        typeUrl: string;
                        value: _5.MsgClaimUploaderRole;
                    };
                    skipUploaderRole(value: _5.MsgSkipUploaderRole): {
                        typeUrl: string;
                        value: _5.MsgSkipUploaderRole;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
                    aminoType: string;
                    toAmino: (message: _5.MsgSubmitBundleProposal) => _5.MsgSubmitBundleProposalAmino;
                    fromAmino: (object: _5.MsgSubmitBundleProposalAmino) => _5.MsgSubmitBundleProposal;
                };
                "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
                    aminoType: string;
                    toAmino: (message: _5.MsgVoteBundleProposal) => _5.MsgVoteBundleProposalAmino;
                    fromAmino: (object: _5.MsgVoteBundleProposalAmino) => _5.MsgVoteBundleProposal;
                };
                "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
                    aminoType: string;
                    toAmino: (message: _5.MsgClaimUploaderRole) => _5.MsgClaimUploaderRoleAmino;
                    fromAmino: (object: _5.MsgClaimUploaderRoleAmino) => _5.MsgClaimUploaderRole;
                };
                "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
                    aminoType: string;
                    toAmino: (message: _5.MsgSkipUploaderRole) => _5.MsgSkipUploaderRoleAmino;
                    fromAmino: (object: _5.MsgSkipUploaderRoleAmino) => _5.MsgSkipUploaderRole;
                };
                "/kyve.bundles.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _5.MsgUpdateParams) => _5.MsgUpdateParamsAmino;
                    fromAmino: (object: _5.MsgUpdateParamsAmino) => _5.MsgUpdateParams;
                };
            };
            voteTypeFromJSON(object: any): _5.VoteType;
            voteTypeToJSON(object: _5.VoteType): string;
            VoteType: typeof _5.VoteType;
            VoteTypeSDKType: typeof _5.VoteType;
            VoteTypeAmino: typeof _5.VoteType;
            MsgSubmitBundleProposal: {
                typeUrl: string;
                encode(message: _5.MsgSubmitBundleProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgSubmitBundleProposal;
                fromPartial(object: Partial<_5.MsgSubmitBundleProposal>): _5.MsgSubmitBundleProposal;
                fromAmino(object: _5.MsgSubmitBundleProposalAmino): _5.MsgSubmitBundleProposal;
                toAmino(message: _5.MsgSubmitBundleProposal): _5.MsgSubmitBundleProposalAmino;
                fromAminoMsg(object: _5.MsgSubmitBundleProposalAminoMsg): _5.MsgSubmitBundleProposal;
                fromProtoMsg(message: _5.MsgSubmitBundleProposalProtoMsg): _5.MsgSubmitBundleProposal;
                toProto(message: _5.MsgSubmitBundleProposal): Uint8Array;
                toProtoMsg(message: _5.MsgSubmitBundleProposal): _5.MsgSubmitBundleProposalProtoMsg;
            };
            MsgSubmitBundleProposalResponse: {
                typeUrl: string;
                encode(_: _5.MsgSubmitBundleProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgSubmitBundleProposalResponse;
                fromPartial(_: Partial<_5.MsgSubmitBundleProposalResponse>): _5.MsgSubmitBundleProposalResponse;
                fromAmino(_: _5.MsgSubmitBundleProposalResponseAmino): _5.MsgSubmitBundleProposalResponse;
                toAmino(_: _5.MsgSubmitBundleProposalResponse): _5.MsgSubmitBundleProposalResponseAmino;
                fromAminoMsg(object: _5.MsgSubmitBundleProposalResponseAminoMsg): _5.MsgSubmitBundleProposalResponse;
                fromProtoMsg(message: _5.MsgSubmitBundleProposalResponseProtoMsg): _5.MsgSubmitBundleProposalResponse;
                toProto(message: _5.MsgSubmitBundleProposalResponse): Uint8Array;
                toProtoMsg(message: _5.MsgSubmitBundleProposalResponse): _5.MsgSubmitBundleProposalResponseProtoMsg;
            };
            MsgVoteBundleProposal: {
                typeUrl: string;
                encode(message: _5.MsgVoteBundleProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgVoteBundleProposal;
                fromPartial(object: Partial<_5.MsgVoteBundleProposal>): _5.MsgVoteBundleProposal;
                fromAmino(object: _5.MsgVoteBundleProposalAmino): _5.MsgVoteBundleProposal;
                toAmino(message: _5.MsgVoteBundleProposal): _5.MsgVoteBundleProposalAmino;
                fromAminoMsg(object: _5.MsgVoteBundleProposalAminoMsg): _5.MsgVoteBundleProposal;
                fromProtoMsg(message: _5.MsgVoteBundleProposalProtoMsg): _5.MsgVoteBundleProposal;
                toProto(message: _5.MsgVoteBundleProposal): Uint8Array;
                toProtoMsg(message: _5.MsgVoteBundleProposal): _5.MsgVoteBundleProposalProtoMsg;
            };
            MsgVoteBundleProposalResponse: {
                typeUrl: string;
                encode(_: _5.MsgVoteBundleProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgVoteBundleProposalResponse;
                fromPartial(_: Partial<_5.MsgVoteBundleProposalResponse>): _5.MsgVoteBundleProposalResponse;
                fromAmino(_: _5.MsgVoteBundleProposalResponseAmino): _5.MsgVoteBundleProposalResponse;
                toAmino(_: _5.MsgVoteBundleProposalResponse): _5.MsgVoteBundleProposalResponseAmino;
                fromAminoMsg(object: _5.MsgVoteBundleProposalResponseAminoMsg): _5.MsgVoteBundleProposalResponse;
                fromProtoMsg(message: _5.MsgVoteBundleProposalResponseProtoMsg): _5.MsgVoteBundleProposalResponse;
                toProto(message: _5.MsgVoteBundleProposalResponse): Uint8Array;
                toProtoMsg(message: _5.MsgVoteBundleProposalResponse): _5.MsgVoteBundleProposalResponseProtoMsg;
            };
            MsgClaimUploaderRole: {
                typeUrl: string;
                encode(message: _5.MsgClaimUploaderRole, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgClaimUploaderRole;
                fromPartial(object: Partial<_5.MsgClaimUploaderRole>): _5.MsgClaimUploaderRole;
                fromAmino(object: _5.MsgClaimUploaderRoleAmino): _5.MsgClaimUploaderRole;
                toAmino(message: _5.MsgClaimUploaderRole): _5.MsgClaimUploaderRoleAmino;
                fromAminoMsg(object: _5.MsgClaimUploaderRoleAminoMsg): _5.MsgClaimUploaderRole;
                fromProtoMsg(message: _5.MsgClaimUploaderRoleProtoMsg): _5.MsgClaimUploaderRole;
                toProto(message: _5.MsgClaimUploaderRole): Uint8Array;
                toProtoMsg(message: _5.MsgClaimUploaderRole): _5.MsgClaimUploaderRoleProtoMsg;
            };
            MsgClaimUploaderRoleResponse: {
                typeUrl: string;
                encode(_: _5.MsgClaimUploaderRoleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgClaimUploaderRoleResponse;
                fromPartial(_: Partial<_5.MsgClaimUploaderRoleResponse>): _5.MsgClaimUploaderRoleResponse;
                fromAmino(_: _5.MsgClaimUploaderRoleResponseAmino): _5.MsgClaimUploaderRoleResponse;
                toAmino(_: _5.MsgClaimUploaderRoleResponse): _5.MsgClaimUploaderRoleResponseAmino;
                fromAminoMsg(object: _5.MsgClaimUploaderRoleResponseAminoMsg): _5.MsgClaimUploaderRoleResponse;
                fromProtoMsg(message: _5.MsgClaimUploaderRoleResponseProtoMsg): _5.MsgClaimUploaderRoleResponse;
                toProto(message: _5.MsgClaimUploaderRoleResponse): Uint8Array;
                toProtoMsg(message: _5.MsgClaimUploaderRoleResponse): _5.MsgClaimUploaderRoleResponseProtoMsg;
            };
            MsgSkipUploaderRole: {
                typeUrl: string;
                encode(message: _5.MsgSkipUploaderRole, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgSkipUploaderRole;
                fromPartial(object: Partial<_5.MsgSkipUploaderRole>): _5.MsgSkipUploaderRole;
                fromAmino(object: _5.MsgSkipUploaderRoleAmino): _5.MsgSkipUploaderRole;
                toAmino(message: _5.MsgSkipUploaderRole): _5.MsgSkipUploaderRoleAmino;
                fromAminoMsg(object: _5.MsgSkipUploaderRoleAminoMsg): _5.MsgSkipUploaderRole;
                fromProtoMsg(message: _5.MsgSkipUploaderRoleProtoMsg): _5.MsgSkipUploaderRole;
                toProto(message: _5.MsgSkipUploaderRole): Uint8Array;
                toProtoMsg(message: _5.MsgSkipUploaderRole): _5.MsgSkipUploaderRoleProtoMsg;
            };
            MsgSkipUploaderRoleResponse: {
                typeUrl: string;
                encode(_: _5.MsgSkipUploaderRoleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgSkipUploaderRoleResponse;
                fromPartial(_: Partial<_5.MsgSkipUploaderRoleResponse>): _5.MsgSkipUploaderRoleResponse;
                fromAmino(_: _5.MsgSkipUploaderRoleResponseAmino): _5.MsgSkipUploaderRoleResponse;
                toAmino(_: _5.MsgSkipUploaderRoleResponse): _5.MsgSkipUploaderRoleResponseAmino;
                fromAminoMsg(object: _5.MsgSkipUploaderRoleResponseAminoMsg): _5.MsgSkipUploaderRoleResponse;
                fromProtoMsg(message: _5.MsgSkipUploaderRoleResponseProtoMsg): _5.MsgSkipUploaderRoleResponse;
                toProto(message: _5.MsgSkipUploaderRoleResponse): Uint8Array;
                toProtoMsg(message: _5.MsgSkipUploaderRoleResponse): _5.MsgSkipUploaderRoleResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _5.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgUpdateParams;
                fromPartial(object: Partial<_5.MsgUpdateParams>): _5.MsgUpdateParams;
                fromAmino(object: _5.MsgUpdateParamsAmino): _5.MsgUpdateParams;
                toAmino(message: _5.MsgUpdateParams): _5.MsgUpdateParamsAmino;
                fromAminoMsg(object: _5.MsgUpdateParamsAminoMsg): _5.MsgUpdateParams;
                fromProtoMsg(message: _5.MsgUpdateParamsProtoMsg): _5.MsgUpdateParams;
                toProto(message: _5.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateParams): _5.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _5.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_5.MsgUpdateParamsResponse>): _5.MsgUpdateParamsResponse;
                fromAmino(_: _5.MsgUpdateParamsResponseAmino): _5.MsgUpdateParamsResponse;
                toAmino(_: _5.MsgUpdateParamsResponse): _5.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _5.MsgUpdateParamsResponseAminoMsg): _5.MsgUpdateParamsResponse;
                fromProtoMsg(message: _5.MsgUpdateParamsResponseProtoMsg): _5.MsgUpdateParamsResponse;
                toProto(message: _5.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateParamsResponse): _5.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _4.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.QueryParamsRequest;
                fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
                fromAmino(_: _4.QueryParamsRequestAmino): _4.QueryParamsRequest;
                toAmino(_: _4.QueryParamsRequest): _4.QueryParamsRequestAmino;
                fromAminoMsg(object: _4.QueryParamsRequestAminoMsg): _4.QueryParamsRequest;
                fromProtoMsg(message: _4.QueryParamsRequestProtoMsg): _4.QueryParamsRequest;
                toProto(message: _4.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _4.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.QueryParamsResponse;
                fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
                fromAmino(object: _4.QueryParamsResponseAmino): _4.QueryParamsResponse;
                toAmino(message: _4.QueryParamsResponse): _4.QueryParamsResponseAmino;
                fromAminoMsg(object: _4.QueryParamsResponseAminoMsg): _4.QueryParamsResponse;
                fromProtoMsg(message: _4.QueryParamsResponseProtoMsg): _4.QueryParamsResponse;
                toProto(message: _4.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.Params;
                fromPartial(object: Partial<_3.Params>): _3.Params;
                fromAmino(object: _3.ParamsAmino): _3.Params;
                toAmino(message: _3.Params): _3.ParamsAmino;
                fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
                fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
                toProto(message: _3.Params): Uint8Array;
                toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
                fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
                toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
                fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
                fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
                toProto(message: _2.GenesisState): Uint8Array;
                toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
            };
            EventUpdateParams: {
                typeUrl: string;
                encode(message: _1.EventUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.EventUpdateParams;
                fromPartial(object: Partial<_1.EventUpdateParams>): _1.EventUpdateParams;
                fromAmino(object: _1.EventUpdateParamsAmino): _1.EventUpdateParams;
                toAmino(message: _1.EventUpdateParams): _1.EventUpdateParamsAmino;
                fromAminoMsg(object: _1.EventUpdateParamsAminoMsg): _1.EventUpdateParams;
                fromProtoMsg(message: _1.EventUpdateParamsProtoMsg): _1.EventUpdateParams;
                toProto(message: _1.EventUpdateParams): Uint8Array;
                toProtoMsg(message: _1.EventUpdateParams): _1.EventUpdateParamsProtoMsg;
            };
            EventBundleVote: {
                typeUrl: string;
                encode(message: _1.EventBundleVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.EventBundleVote;
                fromPartial(object: Partial<_1.EventBundleVote>): _1.EventBundleVote;
                fromAmino(object: _1.EventBundleVoteAmino): _1.EventBundleVote;
                toAmino(message: _1.EventBundleVote): _1.EventBundleVoteAmino;
                fromAminoMsg(object: _1.EventBundleVoteAminoMsg): _1.EventBundleVote;
                fromProtoMsg(message: _1.EventBundleVoteProtoMsg): _1.EventBundleVote;
                toProto(message: _1.EventBundleVote): Uint8Array;
                toProtoMsg(message: _1.EventBundleVote): _1.EventBundleVoteProtoMsg;
            };
            EventBundleProposed: {
                typeUrl: string;
                encode(message: _1.EventBundleProposed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.EventBundleProposed;
                fromPartial(object: Partial<_1.EventBundleProposed>): _1.EventBundleProposed;
                fromAmino(object: _1.EventBundleProposedAmino): _1.EventBundleProposed;
                toAmino(message: _1.EventBundleProposed): _1.EventBundleProposedAmino;
                fromAminoMsg(object: _1.EventBundleProposedAminoMsg): _1.EventBundleProposed;
                fromProtoMsg(message: _1.EventBundleProposedProtoMsg): _1.EventBundleProposed;
                toProto(message: _1.EventBundleProposed): Uint8Array;
                toProtoMsg(message: _1.EventBundleProposed): _1.EventBundleProposedProtoMsg;
            };
            EventBundleFinalized: {
                typeUrl: string;
                encode(message: _1.EventBundleFinalized, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.EventBundleFinalized;
                fromPartial(object: Partial<_1.EventBundleFinalized>): _1.EventBundleFinalized;
                fromAmino(object: _1.EventBundleFinalizedAmino): _1.EventBundleFinalized;
                toAmino(message: _1.EventBundleFinalized): _1.EventBundleFinalizedAmino;
                fromAminoMsg(object: _1.EventBundleFinalizedAminoMsg): _1.EventBundleFinalized;
                fromProtoMsg(message: _1.EventBundleFinalizedProtoMsg): _1.EventBundleFinalized;
                toProto(message: _1.EventBundleFinalized): Uint8Array;
                toProtoMsg(message: _1.EventBundleFinalized): _1.EventBundleFinalizedProtoMsg;
            };
            EventClaimedUploaderRole: {
                typeUrl: string;
                encode(message: _1.EventClaimedUploaderRole, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.EventClaimedUploaderRole;
                fromPartial(object: Partial<_1.EventClaimedUploaderRole>): _1.EventClaimedUploaderRole;
                fromAmino(object: _1.EventClaimedUploaderRoleAmino): _1.EventClaimedUploaderRole;
                toAmino(message: _1.EventClaimedUploaderRole): _1.EventClaimedUploaderRoleAmino;
                fromAminoMsg(object: _1.EventClaimedUploaderRoleAminoMsg): _1.EventClaimedUploaderRole;
                fromProtoMsg(message: _1.EventClaimedUploaderRoleProtoMsg): _1.EventClaimedUploaderRole;
                toProto(message: _1.EventClaimedUploaderRole): Uint8Array;
                toProtoMsg(message: _1.EventClaimedUploaderRole): _1.EventClaimedUploaderRoleProtoMsg;
            };
            EventSkippedUploaderRole: {
                typeUrl: string;
                encode(message: _1.EventSkippedUploaderRole, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.EventSkippedUploaderRole;
                fromPartial(object: Partial<_1.EventSkippedUploaderRole>): _1.EventSkippedUploaderRole;
                fromAmino(object: _1.EventSkippedUploaderRoleAmino): _1.EventSkippedUploaderRole;
                toAmino(message: _1.EventSkippedUploaderRole): _1.EventSkippedUploaderRoleAmino;
                fromAminoMsg(object: _1.EventSkippedUploaderRoleAminoMsg): _1.EventSkippedUploaderRole;
                fromProtoMsg(message: _1.EventSkippedUploaderRoleProtoMsg): _1.EventSkippedUploaderRole;
                toProto(message: _1.EventSkippedUploaderRole): Uint8Array;
                toProtoMsg(message: _1.EventSkippedUploaderRole): _1.EventSkippedUploaderRoleProtoMsg;
            };
            EventPointIncreased: {
                typeUrl: string;
                encode(message: _1.EventPointIncreased, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.EventPointIncreased;
                fromPartial(object: Partial<_1.EventPointIncreased>): _1.EventPointIncreased;
                fromAmino(object: _1.EventPointIncreasedAmino): _1.EventPointIncreased;
                toAmino(message: _1.EventPointIncreased): _1.EventPointIncreasedAmino;
                fromAminoMsg(object: _1.EventPointIncreasedAminoMsg): _1.EventPointIncreased;
                fromProtoMsg(message: _1.EventPointIncreasedProtoMsg): _1.EventPointIncreased;
                toProto(message: _1.EventPointIncreased): Uint8Array;
                toProtoMsg(message: _1.EventPointIncreased): _1.EventPointIncreasedProtoMsg;
            };
            EventPointsReset: {
                typeUrl: string;
                encode(message: _1.EventPointsReset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.EventPointsReset;
                fromPartial(object: Partial<_1.EventPointsReset>): _1.EventPointsReset;
                fromAmino(object: _1.EventPointsResetAmino): _1.EventPointsReset;
                toAmino(message: _1.EventPointsReset): _1.EventPointsResetAmino;
                fromAminoMsg(object: _1.EventPointsResetAminoMsg): _1.EventPointsReset;
                fromProtoMsg(message: _1.EventPointsResetProtoMsg): _1.EventPointsReset;
                toProto(message: _1.EventPointsReset): Uint8Array;
                toProtoMsg(message: _1.EventPointsReset): _1.EventPointsResetProtoMsg;
            };
            bundleStatusFromJSON(object: any): _0.BundleStatus;
            bundleStatusToJSON(object: _0.BundleStatus): string;
            BundleStatus: typeof _0.BundleStatus;
            BundleStatusSDKType: typeof _0.BundleStatus;
            BundleStatusAmino: typeof _0.BundleStatus;
            BundleProposal: {
                typeUrl: string;
                encode(message: _0.BundleProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.BundleProposal;
                fromPartial(object: Partial<_0.BundleProposal>): _0.BundleProposal;
                fromAmino(object: _0.BundleProposalAmino): _0.BundleProposal;
                toAmino(message: _0.BundleProposal): _0.BundleProposalAmino;
                fromAminoMsg(object: _0.BundleProposalAminoMsg): _0.BundleProposal;
                fromProtoMsg(message: _0.BundleProposalProtoMsg): _0.BundleProposal;
                toProto(message: _0.BundleProposal): Uint8Array;
                toProtoMsg(message: _0.BundleProposal): _0.BundleProposalProtoMsg;
            };
            FinalizedBundle: {
                typeUrl: string;
                encode(message: _0.FinalizedBundle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.FinalizedBundle;
                fromPartial(object: Partial<_0.FinalizedBundle>): _0.FinalizedBundle;
                fromAmino(object: _0.FinalizedBundleAmino): _0.FinalizedBundle;
                toAmino(message: _0.FinalizedBundle): _0.FinalizedBundleAmino;
                fromAminoMsg(object: _0.FinalizedBundleAminoMsg): _0.FinalizedBundle;
                fromProtoMsg(message: _0.FinalizedBundleProtoMsg): _0.FinalizedBundle;
                toProto(message: _0.FinalizedBundle): Uint8Array;
                toProtoMsg(message: _0.FinalizedBundle): _0.FinalizedBundleProtoMsg;
            };
            FinalizedAt: {
                typeUrl: string;
                encode(message: _0.FinalizedAt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.FinalizedAt;
                fromPartial(object: Partial<_0.FinalizedAt>): _0.FinalizedAt;
                fromAmino(object: _0.FinalizedAtAmino): _0.FinalizedAt;
                toAmino(message: _0.FinalizedAt): _0.FinalizedAtAmino;
                fromAminoMsg(object: _0.FinalizedAtAminoMsg): _0.FinalizedAt;
                fromProtoMsg(message: _0.FinalizedAtProtoMsg): _0.FinalizedAt;
                toProto(message: _0.FinalizedAt): Uint8Array;
                toProtoMsg(message: _0.FinalizedAt): _0.FinalizedAtProtoMsg;
            };
            StakeSecurity: {
                typeUrl: string;
                encode(message: _0.StakeSecurity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.StakeSecurity;
                fromPartial(object: Partial<_0.StakeSecurity>): _0.StakeSecurity;
                fromAmino(object: _0.StakeSecurityAmino): _0.StakeSecurity;
                toAmino(message: _0.StakeSecurity): _0.StakeSecurityAmino;
                fromAminoMsg(object: _0.StakeSecurityAminoMsg): _0.StakeSecurity;
                fromProtoMsg(message: _0.StakeSecurityProtoMsg): _0.StakeSecurity;
                toProto(message: _0.StakeSecurity): Uint8Array;
                toProtoMsg(message: _0.StakeSecurity): _0.StakeSecurityProtoMsg;
            };
            BundleVersionEntry: {
                typeUrl: string;
                encode(message: _0.BundleVersionEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.BundleVersionEntry;
                fromPartial(object: Partial<_0.BundleVersionEntry>): _0.BundleVersionEntry;
                fromAmino(object: _0.BundleVersionEntryAmino): _0.BundleVersionEntry;
                toAmino(message: _0.BundleVersionEntry): _0.BundleVersionEntryAmino;
                fromAminoMsg(object: _0.BundleVersionEntryAminoMsg): _0.BundleVersionEntry;
                fromProtoMsg(message: _0.BundleVersionEntryProtoMsg): _0.BundleVersionEntry;
                toProto(message: _0.BundleVersionEntry): Uint8Array;
                toProtoMsg(message: _0.BundleVersionEntry): _0.BundleVersionEntryProtoMsg;
            };
            BundleVersionMap: {
                typeUrl: string;
                encode(message: _0.BundleVersionMap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.BundleVersionMap;
                fromPartial(object: Partial<_0.BundleVersionMap>): _0.BundleVersionMap;
                fromAmino(object: _0.BundleVersionMapAmino): _0.BundleVersionMap;
                toAmino(message: _0.BundleVersionMap): _0.BundleVersionMapAmino;
                fromAminoMsg(object: _0.BundleVersionMapAminoMsg): _0.BundleVersionMap;
                fromProtoMsg(message: _0.BundleVersionMapProtoMsg): _0.BundleVersionMap;
                toProto(message: _0.BundleVersionMap): Uint8Array;
                toProtoMsg(message: _0.BundleVersionMap): _0.BundleVersionMapProtoMsg;
            };
            RoundRobinSingleValidatorProgress: {
                typeUrl: string;
                encode(message: _0.RoundRobinSingleValidatorProgress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.RoundRobinSingleValidatorProgress;
                fromPartial(object: Partial<_0.RoundRobinSingleValidatorProgress>): _0.RoundRobinSingleValidatorProgress;
                fromAmino(object: _0.RoundRobinSingleValidatorProgressAmino): _0.RoundRobinSingleValidatorProgress;
                toAmino(message: _0.RoundRobinSingleValidatorProgress): _0.RoundRobinSingleValidatorProgressAmino;
                fromAminoMsg(object: _0.RoundRobinSingleValidatorProgressAminoMsg): _0.RoundRobinSingleValidatorProgress;
                fromProtoMsg(message: _0.RoundRobinSingleValidatorProgressProtoMsg): _0.RoundRobinSingleValidatorProgress;
                toProto(message: _0.RoundRobinSingleValidatorProgress): Uint8Array;
                toProtoMsg(message: _0.RoundRobinSingleValidatorProgress): _0.RoundRobinSingleValidatorProgressProtoMsg;
            };
            RoundRobinProgress: {
                typeUrl: string;
                encode(message: _0.RoundRobinProgress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.RoundRobinProgress;
                fromPartial(object: Partial<_0.RoundRobinProgress>): _0.RoundRobinProgress;
                fromAmino(object: _0.RoundRobinProgressAmino): _0.RoundRobinProgress;
                toAmino(message: _0.RoundRobinProgress): _0.RoundRobinProgressAmino;
                fromAminoMsg(object: _0.RoundRobinProgressAminoMsg): _0.RoundRobinProgress;
                fromProtoMsg(message: _0.RoundRobinProgressProtoMsg): _0.RoundRobinProgress;
                toProto(message: _0.RoundRobinProgress): Uint8Array;
                toProtoMsg(message: _0.RoundRobinProgress): _0.RoundRobinProgressProtoMsg;
            };
        };
    }
    namespace delegation {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    delegate(value: _11.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawRewards(value: _11.MsgWithdrawRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _11.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegate(value: _11.MsgRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _11.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    delegate(value: _11.MsgDelegate): {
                        typeUrl: string;
                        value: _11.MsgDelegate;
                    };
                    withdrawRewards(value: _11.MsgWithdrawRewards): {
                        typeUrl: string;
                        value: _11.MsgWithdrawRewards;
                    };
                    undelegate(value: _11.MsgUndelegate): {
                        typeUrl: string;
                        value: _11.MsgUndelegate;
                    };
                    redelegate(value: _11.MsgRedelegate): {
                        typeUrl: string;
                        value: _11.MsgRedelegate;
                    };
                    updateParams(value: _11.MsgUpdateParams): {
                        typeUrl: string;
                        value: _11.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    delegate(value: any): {
                        typeUrl: string;
                        value: _11.MsgDelegate;
                    };
                    withdrawRewards(value: any): {
                        typeUrl: string;
                        value: _11.MsgWithdrawRewards;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _11.MsgUndelegate;
                    };
                    redelegate(value: any): {
                        typeUrl: string;
                        value: _11.MsgRedelegate;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _11.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    delegate(value: _11.MsgDelegate): {
                        typeUrl: string;
                        value: _11.MsgDelegate;
                    };
                    withdrawRewards(value: _11.MsgWithdrawRewards): {
                        typeUrl: string;
                        value: _11.MsgWithdrawRewards;
                    };
                    undelegate(value: _11.MsgUndelegate): {
                        typeUrl: string;
                        value: _11.MsgUndelegate;
                    };
                    redelegate(value: _11.MsgRedelegate): {
                        typeUrl: string;
                        value: _11.MsgRedelegate;
                    };
                    updateParams(value: _11.MsgUpdateParams): {
                        typeUrl: string;
                        value: _11.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.delegation.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _11.MsgDelegate) => _11.MsgDelegateAmino;
                    fromAmino: (object: _11.MsgDelegateAmino) => _11.MsgDelegate;
                };
                "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
                    aminoType: string;
                    toAmino: (message: _11.MsgWithdrawRewards) => _11.MsgWithdrawRewardsAmino;
                    fromAmino: (object: _11.MsgWithdrawRewardsAmino) => _11.MsgWithdrawRewards;
                };
                "/kyve.delegation.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _11.MsgUndelegate) => _11.MsgUndelegateAmino;
                    fromAmino: (object: _11.MsgUndelegateAmino) => _11.MsgUndelegate;
                };
                "/kyve.delegation.v1beta1.MsgRedelegate": {
                    aminoType: string;
                    toAmino: (message: _11.MsgRedelegate) => _11.MsgRedelegateAmino;
                    fromAmino: (object: _11.MsgRedelegateAmino) => _11.MsgRedelegate;
                };
                "/kyve.delegation.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _11.MsgUpdateParams) => _11.MsgUpdateParamsAmino;
                    fromAmino: (object: _11.MsgUpdateParamsAmino) => _11.MsgUpdateParams;
                };
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _11.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgDelegate;
                fromPartial(object: Partial<_11.MsgDelegate>): _11.MsgDelegate;
                fromAmino(object: _11.MsgDelegateAmino): _11.MsgDelegate;
                toAmino(message: _11.MsgDelegate): _11.MsgDelegateAmino;
                fromAminoMsg(object: _11.MsgDelegateAminoMsg): _11.MsgDelegate;
                fromProtoMsg(message: _11.MsgDelegateProtoMsg): _11.MsgDelegate;
                toProto(message: _11.MsgDelegate): Uint8Array;
                toProtoMsg(message: _11.MsgDelegate): _11.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _11.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgDelegateResponse;
                fromPartial(_: Partial<_11.MsgDelegateResponse>): _11.MsgDelegateResponse;
                fromAmino(_: _11.MsgDelegateResponseAmino): _11.MsgDelegateResponse;
                toAmino(_: _11.MsgDelegateResponse): _11.MsgDelegateResponseAmino;
                fromAminoMsg(object: _11.MsgDelegateResponseAminoMsg): _11.MsgDelegateResponse;
                fromProtoMsg(message: _11.MsgDelegateResponseProtoMsg): _11.MsgDelegateResponse;
                toProto(message: _11.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _11.MsgDelegateResponse): _11.MsgDelegateResponseProtoMsg;
            };
            MsgWithdrawRewards: {
                typeUrl: string;
                encode(message: _11.MsgWithdrawRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgWithdrawRewards;
                fromPartial(object: Partial<_11.MsgWithdrawRewards>): _11.MsgWithdrawRewards;
                fromAmino(object: _11.MsgWithdrawRewardsAmino): _11.MsgWithdrawRewards;
                toAmino(message: _11.MsgWithdrawRewards): _11.MsgWithdrawRewardsAmino;
                fromAminoMsg(object: _11.MsgWithdrawRewardsAminoMsg): _11.MsgWithdrawRewards;
                fromProtoMsg(message: _11.MsgWithdrawRewardsProtoMsg): _11.MsgWithdrawRewards;
                toProto(message: _11.MsgWithdrawRewards): Uint8Array;
                toProtoMsg(message: _11.MsgWithdrawRewards): _11.MsgWithdrawRewardsProtoMsg;
            };
            MsgWithdrawRewardsResponse: {
                typeUrl: string;
                encode(_: _11.MsgWithdrawRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgWithdrawRewardsResponse;
                fromPartial(_: Partial<_11.MsgWithdrawRewardsResponse>): _11.MsgWithdrawRewardsResponse;
                fromAmino(_: _11.MsgWithdrawRewardsResponseAmino): _11.MsgWithdrawRewardsResponse;
                toAmino(_: _11.MsgWithdrawRewardsResponse): _11.MsgWithdrawRewardsResponseAmino;
                fromAminoMsg(object: _11.MsgWithdrawRewardsResponseAminoMsg): _11.MsgWithdrawRewardsResponse;
                fromProtoMsg(message: _11.MsgWithdrawRewardsResponseProtoMsg): _11.MsgWithdrawRewardsResponse;
                toProto(message: _11.MsgWithdrawRewardsResponse): Uint8Array;
                toProtoMsg(message: _11.MsgWithdrawRewardsResponse): _11.MsgWithdrawRewardsResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _11.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgUndelegate;
                fromPartial(object: Partial<_11.MsgUndelegate>): _11.MsgUndelegate;
                fromAmino(object: _11.MsgUndelegateAmino): _11.MsgUndelegate;
                toAmino(message: _11.MsgUndelegate): _11.MsgUndelegateAmino;
                fromAminoMsg(object: _11.MsgUndelegateAminoMsg): _11.MsgUndelegate;
                fromProtoMsg(message: _11.MsgUndelegateProtoMsg): _11.MsgUndelegate;
                toProto(message: _11.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _11.MsgUndelegate): _11.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(_: _11.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgUndelegateResponse;
                fromPartial(_: Partial<_11.MsgUndelegateResponse>): _11.MsgUndelegateResponse;
                fromAmino(_: _11.MsgUndelegateResponseAmino): _11.MsgUndelegateResponse;
                toAmino(_: _11.MsgUndelegateResponse): _11.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _11.MsgUndelegateResponseAminoMsg): _11.MsgUndelegateResponse;
                fromProtoMsg(message: _11.MsgUndelegateResponseProtoMsg): _11.MsgUndelegateResponse;
                toProto(message: _11.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _11.MsgUndelegateResponse): _11.MsgUndelegateResponseProtoMsg;
            };
            MsgRedelegate: {
                typeUrl: string;
                encode(message: _11.MsgRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgRedelegate;
                fromPartial(object: Partial<_11.MsgRedelegate>): _11.MsgRedelegate;
                fromAmino(object: _11.MsgRedelegateAmino): _11.MsgRedelegate;
                toAmino(message: _11.MsgRedelegate): _11.MsgRedelegateAmino;
                fromAminoMsg(object: _11.MsgRedelegateAminoMsg): _11.MsgRedelegate;
                fromProtoMsg(message: _11.MsgRedelegateProtoMsg): _11.MsgRedelegate;
                toProto(message: _11.MsgRedelegate): Uint8Array;
                toProtoMsg(message: _11.MsgRedelegate): _11.MsgRedelegateProtoMsg;
            };
            MsgRedelegateResponse: {
                typeUrl: string;
                encode(_: _11.MsgRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgRedelegateResponse;
                fromPartial(_: Partial<_11.MsgRedelegateResponse>): _11.MsgRedelegateResponse;
                fromAmino(_: _11.MsgRedelegateResponseAmino): _11.MsgRedelegateResponse;
                toAmino(_: _11.MsgRedelegateResponse): _11.MsgRedelegateResponseAmino;
                fromAminoMsg(object: _11.MsgRedelegateResponseAminoMsg): _11.MsgRedelegateResponse;
                fromProtoMsg(message: _11.MsgRedelegateResponseProtoMsg): _11.MsgRedelegateResponse;
                toProto(message: _11.MsgRedelegateResponse): Uint8Array;
                toProtoMsg(message: _11.MsgRedelegateResponse): _11.MsgRedelegateResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _11.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgUpdateParams;
                fromPartial(object: Partial<_11.MsgUpdateParams>): _11.MsgUpdateParams;
                fromAmino(object: _11.MsgUpdateParamsAmino): _11.MsgUpdateParams;
                toAmino(message: _11.MsgUpdateParams): _11.MsgUpdateParamsAmino;
                fromAminoMsg(object: _11.MsgUpdateParamsAminoMsg): _11.MsgUpdateParams;
                fromProtoMsg(message: _11.MsgUpdateParamsProtoMsg): _11.MsgUpdateParams;
                toProto(message: _11.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _11.MsgUpdateParams): _11.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _11.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_11.MsgUpdateParamsResponse>): _11.MsgUpdateParamsResponse;
                fromAmino(_: _11.MsgUpdateParamsResponseAmino): _11.MsgUpdateParamsResponse;
                toAmino(_: _11.MsgUpdateParamsResponse): _11.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _11.MsgUpdateParamsResponseAminoMsg): _11.MsgUpdateParamsResponse;
                fromProtoMsg(message: _11.MsgUpdateParamsResponseProtoMsg): _11.MsgUpdateParamsResponse;
                toProto(message: _11.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _11.MsgUpdateParamsResponse): _11.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _10.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryParamsRequest;
                fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
                fromAmino(_: _10.QueryParamsRequestAmino): _10.QueryParamsRequest;
                toAmino(_: _10.QueryParamsRequest): _10.QueryParamsRequestAmino;
                fromAminoMsg(object: _10.QueryParamsRequestAminoMsg): _10.QueryParamsRequest;
                fromProtoMsg(message: _10.QueryParamsRequestProtoMsg): _10.QueryParamsRequest;
                toProto(message: _10.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryParamsRequest): _10.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _10.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryParamsResponse;
                fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
                fromAmino(object: _10.QueryParamsResponseAmino): _10.QueryParamsResponse;
                toAmino(message: _10.QueryParamsResponse): _10.QueryParamsResponseAmino;
                fromAminoMsg(object: _10.QueryParamsResponseAminoMsg): _10.QueryParamsResponse;
                fromProtoMsg(message: _10.QueryParamsResponseProtoMsg): _10.QueryParamsResponse;
                toProto(message: _10.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryParamsResponse): _10.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            EventUpdateParams: {
                typeUrl: string;
                encode(message: _7.EventUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EventUpdateParams;
                fromPartial(object: Partial<_7.EventUpdateParams>): _7.EventUpdateParams;
                fromAmino(object: _7.EventUpdateParamsAmino): _7.EventUpdateParams;
                toAmino(message: _7.EventUpdateParams): _7.EventUpdateParamsAmino;
                fromAminoMsg(object: _7.EventUpdateParamsAminoMsg): _7.EventUpdateParams;
                fromProtoMsg(message: _7.EventUpdateParamsProtoMsg): _7.EventUpdateParams;
                toProto(message: _7.EventUpdateParams): Uint8Array;
                toProtoMsg(message: _7.EventUpdateParams): _7.EventUpdateParamsProtoMsg;
            };
            EventDelegate: {
                typeUrl: string;
                encode(message: _7.EventDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EventDelegate;
                fromPartial(object: Partial<_7.EventDelegate>): _7.EventDelegate;
                fromAmino(object: _7.EventDelegateAmino): _7.EventDelegate;
                toAmino(message: _7.EventDelegate): _7.EventDelegateAmino;
                fromAminoMsg(object: _7.EventDelegateAminoMsg): _7.EventDelegate;
                fromProtoMsg(message: _7.EventDelegateProtoMsg): _7.EventDelegate;
                toProto(message: _7.EventDelegate): Uint8Array;
                toProtoMsg(message: _7.EventDelegate): _7.EventDelegateProtoMsg;
            };
            EventStartUndelegation: {
                typeUrl: string;
                encode(message: _7.EventStartUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EventStartUndelegation;
                fromPartial(object: Partial<_7.EventStartUndelegation>): _7.EventStartUndelegation;
                fromAmino(object: _7.EventStartUndelegationAmino): _7.EventStartUndelegation;
                toAmino(message: _7.EventStartUndelegation): _7.EventStartUndelegationAmino;
                fromAminoMsg(object: _7.EventStartUndelegationAminoMsg): _7.EventStartUndelegation;
                fromProtoMsg(message: _7.EventStartUndelegationProtoMsg): _7.EventStartUndelegation;
                toProto(message: _7.EventStartUndelegation): Uint8Array;
                toProtoMsg(message: _7.EventStartUndelegation): _7.EventStartUndelegationProtoMsg;
            };
            EventUndelegate: {
                typeUrl: string;
                encode(message: _7.EventUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EventUndelegate;
                fromPartial(object: Partial<_7.EventUndelegate>): _7.EventUndelegate;
                fromAmino(object: _7.EventUndelegateAmino): _7.EventUndelegate;
                toAmino(message: _7.EventUndelegate): _7.EventUndelegateAmino;
                fromAminoMsg(object: _7.EventUndelegateAminoMsg): _7.EventUndelegate;
                fromProtoMsg(message: _7.EventUndelegateProtoMsg): _7.EventUndelegate;
                toProto(message: _7.EventUndelegate): Uint8Array;
                toProtoMsg(message: _7.EventUndelegate): _7.EventUndelegateProtoMsg;
            };
            EventRedelegate: {
                typeUrl: string;
                encode(message: _7.EventRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EventRedelegate;
                fromPartial(object: Partial<_7.EventRedelegate>): _7.EventRedelegate;
                fromAmino(object: _7.EventRedelegateAmino): _7.EventRedelegate;
                toAmino(message: _7.EventRedelegate): _7.EventRedelegateAmino;
                fromAminoMsg(object: _7.EventRedelegateAminoMsg): _7.EventRedelegate;
                fromProtoMsg(message: _7.EventRedelegateProtoMsg): _7.EventRedelegate;
                toProto(message: _7.EventRedelegate): Uint8Array;
                toProtoMsg(message: _7.EventRedelegate): _7.EventRedelegateProtoMsg;
            };
            EventWithdrawRewards: {
                typeUrl: string;
                encode(message: _7.EventWithdrawRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EventWithdrawRewards;
                fromPartial(object: Partial<_7.EventWithdrawRewards>): _7.EventWithdrawRewards;
                fromAmino(object: _7.EventWithdrawRewardsAmino): _7.EventWithdrawRewards;
                toAmino(message: _7.EventWithdrawRewards): _7.EventWithdrawRewardsAmino;
                fromAminoMsg(object: _7.EventWithdrawRewardsAminoMsg): _7.EventWithdrawRewards;
                fromProtoMsg(message: _7.EventWithdrawRewardsProtoMsg): _7.EventWithdrawRewards;
                toProto(message: _7.EventWithdrawRewards): Uint8Array;
                toProtoMsg(message: _7.EventWithdrawRewards): _7.EventWithdrawRewardsProtoMsg;
            };
            EventSlash: {
                typeUrl: string;
                encode(message: _7.EventSlash, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EventSlash;
                fromPartial(object: Partial<_7.EventSlash>): _7.EventSlash;
                fromAmino(object: _7.EventSlashAmino): _7.EventSlash;
                toAmino(message: _7.EventSlash): _7.EventSlashAmino;
                fromAminoMsg(object: _7.EventSlashAminoMsg): _7.EventSlash;
                fromProtoMsg(message: _7.EventSlashProtoMsg): _7.EventSlash;
                toProto(message: _7.EventSlash): Uint8Array;
                toProtoMsg(message: _7.EventSlash): _7.EventSlashProtoMsg;
            };
            slashTypeFromJSON(object: any): _6.SlashType;
            slashTypeToJSON(object: _6.SlashType): string;
            SlashType: typeof _6.SlashType;
            SlashTypeSDKType: typeof _6.SlashType;
            SlashTypeAmino: typeof _6.SlashType;
            Delegator: {
                typeUrl: string;
                encode(message: _6.Delegator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Delegator;
                fromPartial(object: Partial<_6.Delegator>): _6.Delegator;
                fromAmino(object: _6.DelegatorAmino): _6.Delegator;
                toAmino(message: _6.Delegator): _6.DelegatorAmino;
                fromAminoMsg(object: _6.DelegatorAminoMsg): _6.Delegator;
                fromProtoMsg(message: _6.DelegatorProtoMsg): _6.Delegator;
                toProto(message: _6.Delegator): Uint8Array;
                toProtoMsg(message: _6.Delegator): _6.DelegatorProtoMsg;
            };
            DelegationEntry: {
                typeUrl: string;
                encode(message: _6.DelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.DelegationEntry;
                fromPartial(object: Partial<_6.DelegationEntry>): _6.DelegationEntry;
                fromAmino(object: _6.DelegationEntryAmino): _6.DelegationEntry;
                toAmino(message: _6.DelegationEntry): _6.DelegationEntryAmino;
                fromAminoMsg(object: _6.DelegationEntryAminoMsg): _6.DelegationEntry;
                fromProtoMsg(message: _6.DelegationEntryProtoMsg): _6.DelegationEntry;
                toProto(message: _6.DelegationEntry): Uint8Array;
                toProtoMsg(message: _6.DelegationEntry): _6.DelegationEntryProtoMsg;
            };
            DelegationData: {
                typeUrl: string;
                encode(message: _6.DelegationData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.DelegationData;
                fromPartial(object: Partial<_6.DelegationData>): _6.DelegationData;
                fromAmino(object: _6.DelegationDataAmino): _6.DelegationData;
                toAmino(message: _6.DelegationData): _6.DelegationDataAmino;
                fromAminoMsg(object: _6.DelegationDataAminoMsg): _6.DelegationData;
                fromProtoMsg(message: _6.DelegationDataProtoMsg): _6.DelegationData;
                toProto(message: _6.DelegationData): Uint8Array;
                toProtoMsg(message: _6.DelegationData): _6.DelegationDataProtoMsg;
            };
            DelegationSlash: {
                typeUrl: string;
                encode(message: _6.DelegationSlash, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.DelegationSlash;
                fromPartial(object: Partial<_6.DelegationSlash>): _6.DelegationSlash;
                fromAmino(object: _6.DelegationSlashAmino): _6.DelegationSlash;
                toAmino(message: _6.DelegationSlash): _6.DelegationSlashAmino;
                fromAminoMsg(object: _6.DelegationSlashAminoMsg): _6.DelegationSlash;
                fromProtoMsg(message: _6.DelegationSlashProtoMsg): _6.DelegationSlash;
                toProto(message: _6.DelegationSlash): Uint8Array;
                toProtoMsg(message: _6.DelegationSlash): _6.DelegationSlashProtoMsg;
            };
            UndelegationQueueEntry: {
                typeUrl: string;
                encode(message: _6.UndelegationQueueEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.UndelegationQueueEntry;
                fromPartial(object: Partial<_6.UndelegationQueueEntry>): _6.UndelegationQueueEntry;
                fromAmino(object: _6.UndelegationQueueEntryAmino): _6.UndelegationQueueEntry;
                toAmino(message: _6.UndelegationQueueEntry): _6.UndelegationQueueEntryAmino;
                fromAminoMsg(object: _6.UndelegationQueueEntryAminoMsg): _6.UndelegationQueueEntry;
                fromProtoMsg(message: _6.UndelegationQueueEntryProtoMsg): _6.UndelegationQueueEntry;
                toProto(message: _6.UndelegationQueueEntry): Uint8Array;
                toProtoMsg(message: _6.UndelegationQueueEntry): _6.UndelegationQueueEntryProtoMsg;
            };
            QueueState: {
                typeUrl: string;
                encode(message: _6.QueueState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueueState;
                fromPartial(object: Partial<_6.QueueState>): _6.QueueState;
                fromAmino(object: _6.QueueStateAmino): _6.QueueState;
                toAmino(message: _6.QueueState): _6.QueueStateAmino;
                fromAminoMsg(object: _6.QueueStateAminoMsg): _6.QueueState;
                fromProtoMsg(message: _6.QueueStateProtoMsg): _6.QueueState;
                toProto(message: _6.QueueState): Uint8Array;
                toProtoMsg(message: _6.QueueState): _6.QueueStateProtoMsg;
            };
            RedelegationCooldown: {
                typeUrl: string;
                encode(message: _6.RedelegationCooldown, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.RedelegationCooldown;
                fromPartial(object: Partial<_6.RedelegationCooldown>): _6.RedelegationCooldown;
                fromAmino(object: _6.RedelegationCooldownAmino): _6.RedelegationCooldown;
                toAmino(message: _6.RedelegationCooldown): _6.RedelegationCooldownAmino;
                fromAminoMsg(object: _6.RedelegationCooldownAminoMsg): _6.RedelegationCooldown;
                fromProtoMsg(message: _6.RedelegationCooldownProtoMsg): _6.RedelegationCooldown;
                toProto(message: _6.RedelegationCooldown): Uint8Array;
                toProtoMsg(message: _6.RedelegationCooldown): _6.RedelegationCooldownProtoMsg;
            };
        };
    }
    namespace global {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _16.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _16.MsgUpdateParams): {
                        typeUrl: string;
                        value: _16.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _16.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _16.MsgUpdateParams): {
                        typeUrl: string;
                        value: _16.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.global.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _16.MsgUpdateParams) => _16.MsgUpdateParamsAmino;
                    fromAmino: (object: _16.MsgUpdateParamsAmino) => _16.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _16.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgUpdateParams;
                fromPartial(object: Partial<_16.MsgUpdateParams>): _16.MsgUpdateParams;
                fromAmino(object: _16.MsgUpdateParamsAmino): _16.MsgUpdateParams;
                toAmino(message: _16.MsgUpdateParams): _16.MsgUpdateParamsAmino;
                fromAminoMsg(object: _16.MsgUpdateParamsAminoMsg): _16.MsgUpdateParams;
                fromProtoMsg(message: _16.MsgUpdateParamsProtoMsg): _16.MsgUpdateParams;
                toProto(message: _16.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateParams): _16.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _16.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_16.MsgUpdateParamsResponse>): _16.MsgUpdateParamsResponse;
                fromAmino(_: _16.MsgUpdateParamsResponseAmino): _16.MsgUpdateParamsResponse;
                toAmino(_: _16.MsgUpdateParamsResponse): _16.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _16.MsgUpdateParamsResponseAminoMsg): _16.MsgUpdateParamsResponse;
                fromProtoMsg(message: _16.MsgUpdateParamsResponseProtoMsg): _16.MsgUpdateParamsResponse;
                toProto(message: _16.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateParamsResponse): _16.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _15.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.QueryParamsRequest;
                fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
                fromAmino(_: _15.QueryParamsRequestAmino): _15.QueryParamsRequest;
                toAmino(_: _15.QueryParamsRequest): _15.QueryParamsRequestAmino;
                fromAminoMsg(object: _15.QueryParamsRequestAminoMsg): _15.QueryParamsRequest;
                fromProtoMsg(message: _15.QueryParamsRequestProtoMsg): _15.QueryParamsRequest;
                toProto(message: _15.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _15.QueryParamsRequest): _15.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _15.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryParamsResponse;
                fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
                fromAmino(object: _15.QueryParamsResponseAmino): _15.QueryParamsResponse;
                toAmino(message: _15.QueryParamsResponse): _15.QueryParamsResponseAmino;
                fromAminoMsg(object: _15.QueryParamsResponseAminoMsg): _15.QueryParamsResponse;
                fromProtoMsg(message: _15.QueryParamsResponseProtoMsg): _15.QueryParamsResponse;
                toProto(message: _15.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _15.QueryParamsResponse): _15.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _14.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Params;
                fromPartial(object: Partial<_14.Params>): _14.Params;
                fromAmino(object: _14.ParamsAmino): _14.Params;
                toAmino(message: _14.Params): _14.ParamsAmino;
                fromAminoMsg(object: _14.ParamsAminoMsg): _14.Params;
                fromProtoMsg(message: _14.ParamsProtoMsg): _14.Params;
                toProto(message: _14.Params): Uint8Array;
                toProtoMsg(message: _14.Params): _14.ParamsProtoMsg;
            };
            GasAdjustment: {
                typeUrl: string;
                encode(message: _14.GasAdjustment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GasAdjustment;
                fromPartial(object: Partial<_14.GasAdjustment>): _14.GasAdjustment;
                fromAmino(object: _14.GasAdjustmentAmino): _14.GasAdjustment;
                toAmino(message: _14.GasAdjustment): _14.GasAdjustmentAmino;
                fromAminoMsg(object: _14.GasAdjustmentAminoMsg): _14.GasAdjustment;
                fromProtoMsg(message: _14.GasAdjustmentProtoMsg): _14.GasAdjustment;
                toProto(message: _14.GasAdjustment): Uint8Array;
                toProtoMsg(message: _14.GasAdjustment): _14.GasAdjustmentProtoMsg;
            };
            GasRefund: {
                typeUrl: string;
                encode(message: _14.GasRefund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GasRefund;
                fromPartial(object: Partial<_14.GasRefund>): _14.GasRefund;
                fromAmino(object: _14.GasRefundAmino): _14.GasRefund;
                toAmino(message: _14.GasRefund): _14.GasRefundAmino;
                fromAminoMsg(object: _14.GasRefundAminoMsg): _14.GasRefund;
                fromProtoMsg(message: _14.GasRefundProtoMsg): _14.GasRefund;
                toProto(message: _14.GasRefund): Uint8Array;
                toProtoMsg(message: _14.GasRefund): _14.GasRefundProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            EventUpdateParams: {
                typeUrl: string;
                encode(message: _12.EventUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventUpdateParams;
                fromPartial(object: Partial<_12.EventUpdateParams>): _12.EventUpdateParams;
                fromAmino(object: _12.EventUpdateParamsAmino): _12.EventUpdateParams;
                toAmino(message: _12.EventUpdateParams): _12.EventUpdateParamsAmino;
                fromAminoMsg(object: _12.EventUpdateParamsAminoMsg): _12.EventUpdateParams;
                fromProtoMsg(message: _12.EventUpdateParamsProtoMsg): _12.EventUpdateParams;
                toProto(message: _12.EventUpdateParams): Uint8Array;
                toProtoMsg(message: _12.EventUpdateParams): _12.EventUpdateParamsProtoMsg;
            };
        };
    }
    namespace pool {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    fundPool(value: _22.MsgFundPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defundPool(value: _22.MsgDefundPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPool(value: _22.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePool(value: _22.MsgUpdatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    disablePool(value: _22.MsgDisablePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    enablePool(value: _22.MsgEnablePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    scheduleRuntimeUpgrade(value: _22.MsgScheduleRuntimeUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelRuntimeUpgrade(value: _22.MsgCancelRuntimeUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    fundPool(value: _22.MsgFundPool): {
                        typeUrl: string;
                        value: _22.MsgFundPool;
                    };
                    defundPool(value: _22.MsgDefundPool): {
                        typeUrl: string;
                        value: _22.MsgDefundPool;
                    };
                    createPool(value: _22.MsgCreatePool): {
                        typeUrl: string;
                        value: _22.MsgCreatePool;
                    };
                    updatePool(value: _22.MsgUpdatePool): {
                        typeUrl: string;
                        value: _22.MsgUpdatePool;
                    };
                    disablePool(value: _22.MsgDisablePool): {
                        typeUrl: string;
                        value: _22.MsgDisablePool;
                    };
                    enablePool(value: _22.MsgEnablePool): {
                        typeUrl: string;
                        value: _22.MsgEnablePool;
                    };
                    scheduleRuntimeUpgrade(value: _22.MsgScheduleRuntimeUpgrade): {
                        typeUrl: string;
                        value: _22.MsgScheduleRuntimeUpgrade;
                    };
                    cancelRuntimeUpgrade(value: _22.MsgCancelRuntimeUpgrade): {
                        typeUrl: string;
                        value: _22.MsgCancelRuntimeUpgrade;
                    };
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    fundPool(value: any): {
                        typeUrl: string;
                        value: _22.MsgFundPool;
                    };
                    defundPool(value: any): {
                        typeUrl: string;
                        value: _22.MsgDefundPool;
                    };
                    createPool(value: any): {
                        typeUrl: string;
                        value: _22.MsgCreatePool;
                    };
                    updatePool(value: any): {
                        typeUrl: string;
                        value: _22.MsgUpdatePool;
                    };
                    disablePool(value: any): {
                        typeUrl: string;
                        value: _22.MsgDisablePool;
                    };
                    enablePool(value: any): {
                        typeUrl: string;
                        value: _22.MsgEnablePool;
                    };
                    scheduleRuntimeUpgrade(value: any): {
                        typeUrl: string;
                        value: _22.MsgScheduleRuntimeUpgrade;
                    };
                    cancelRuntimeUpgrade(value: any): {
                        typeUrl: string;
                        value: _22.MsgCancelRuntimeUpgrade;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    fundPool(value: _22.MsgFundPool): {
                        typeUrl: string;
                        value: _22.MsgFundPool;
                    };
                    defundPool(value: _22.MsgDefundPool): {
                        typeUrl: string;
                        value: _22.MsgDefundPool;
                    };
                    createPool(value: _22.MsgCreatePool): {
                        typeUrl: string;
                        value: _22.MsgCreatePool;
                    };
                    updatePool(value: _22.MsgUpdatePool): {
                        typeUrl: string;
                        value: _22.MsgUpdatePool;
                    };
                    disablePool(value: _22.MsgDisablePool): {
                        typeUrl: string;
                        value: _22.MsgDisablePool;
                    };
                    enablePool(value: _22.MsgEnablePool): {
                        typeUrl: string;
                        value: _22.MsgEnablePool;
                    };
                    scheduleRuntimeUpgrade(value: _22.MsgScheduleRuntimeUpgrade): {
                        typeUrl: string;
                        value: _22.MsgScheduleRuntimeUpgrade;
                    };
                    cancelRuntimeUpgrade(value: _22.MsgCancelRuntimeUpgrade): {
                        typeUrl: string;
                        value: _22.MsgCancelRuntimeUpgrade;
                    };
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.pool.v1beta1.MsgFundPool": {
                    aminoType: string;
                    toAmino: (message: _22.MsgFundPool) => _22.MsgFundPoolAmino;
                    fromAmino: (object: _22.MsgFundPoolAmino) => _22.MsgFundPool;
                };
                "/kyve.pool.v1beta1.MsgDefundPool": {
                    aminoType: string;
                    toAmino: (message: _22.MsgDefundPool) => _22.MsgDefundPoolAmino;
                    fromAmino: (object: _22.MsgDefundPoolAmino) => _22.MsgDefundPool;
                };
                "/kyve.pool.v1beta1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: (message: _22.MsgCreatePool) => _22.MsgCreatePoolAmino;
                    fromAmino: (object: _22.MsgCreatePoolAmino) => _22.MsgCreatePool;
                };
                "/kyve.pool.v1beta1.MsgUpdatePool": {
                    aminoType: string;
                    toAmino: (message: _22.MsgUpdatePool) => _22.MsgUpdatePoolAmino;
                    fromAmino: (object: _22.MsgUpdatePoolAmino) => _22.MsgUpdatePool;
                };
                "/kyve.pool.v1beta1.MsgDisablePool": {
                    aminoType: string;
                    toAmino: (message: _22.MsgDisablePool) => _22.MsgDisablePoolAmino;
                    fromAmino: (object: _22.MsgDisablePoolAmino) => _22.MsgDisablePool;
                };
                "/kyve.pool.v1beta1.MsgEnablePool": {
                    aminoType: string;
                    toAmino: (message: _22.MsgEnablePool) => _22.MsgEnablePoolAmino;
                    fromAmino: (object: _22.MsgEnablePoolAmino) => _22.MsgEnablePool;
                };
                "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
                    aminoType: string;
                    toAmino: (message: _22.MsgScheduleRuntimeUpgrade) => _22.MsgScheduleRuntimeUpgradeAmino;
                    fromAmino: (object: _22.MsgScheduleRuntimeUpgradeAmino) => _22.MsgScheduleRuntimeUpgrade;
                };
                "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
                    aminoType: string;
                    toAmino: (message: _22.MsgCancelRuntimeUpgrade) => _22.MsgCancelRuntimeUpgradeAmino;
                    fromAmino: (object: _22.MsgCancelRuntimeUpgradeAmino) => _22.MsgCancelRuntimeUpgrade;
                };
                "/kyve.pool.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _22.MsgUpdateParams) => _22.MsgUpdateParamsAmino;
                    fromAmino: (object: _22.MsgUpdateParamsAmino) => _22.MsgUpdateParams;
                };
            };
            MsgFundPool: {
                typeUrl: string;
                encode(message: _22.MsgFundPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgFundPool;
                fromPartial(object: Partial<_22.MsgFundPool>): _22.MsgFundPool;
                fromAmino(object: _22.MsgFundPoolAmino): _22.MsgFundPool;
                toAmino(message: _22.MsgFundPool): _22.MsgFundPoolAmino;
                fromAminoMsg(object: _22.MsgFundPoolAminoMsg): _22.MsgFundPool;
                fromProtoMsg(message: _22.MsgFundPoolProtoMsg): _22.MsgFundPool;
                toProto(message: _22.MsgFundPool): Uint8Array;
                toProtoMsg(message: _22.MsgFundPool): _22.MsgFundPoolProtoMsg;
            };
            MsgFundPoolResponse: {
                typeUrl: string;
                encode(_: _22.MsgFundPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgFundPoolResponse;
                fromPartial(_: Partial<_22.MsgFundPoolResponse>): _22.MsgFundPoolResponse;
                fromAmino(_: _22.MsgFundPoolResponseAmino): _22.MsgFundPoolResponse;
                toAmino(_: _22.MsgFundPoolResponse): _22.MsgFundPoolResponseAmino;
                fromAminoMsg(object: _22.MsgFundPoolResponseAminoMsg): _22.MsgFundPoolResponse;
                fromProtoMsg(message: _22.MsgFundPoolResponseProtoMsg): _22.MsgFundPoolResponse;
                toProto(message: _22.MsgFundPoolResponse): Uint8Array;
                toProtoMsg(message: _22.MsgFundPoolResponse): _22.MsgFundPoolResponseProtoMsg;
            };
            MsgDefundPool: {
                typeUrl: string;
                encode(message: _22.MsgDefundPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgDefundPool;
                fromPartial(object: Partial<_22.MsgDefundPool>): _22.MsgDefundPool;
                fromAmino(object: _22.MsgDefundPoolAmino): _22.MsgDefundPool;
                toAmino(message: _22.MsgDefundPool): _22.MsgDefundPoolAmino;
                fromAminoMsg(object: _22.MsgDefundPoolAminoMsg): _22.MsgDefundPool;
                fromProtoMsg(message: _22.MsgDefundPoolProtoMsg): _22.MsgDefundPool;
                toProto(message: _22.MsgDefundPool): Uint8Array;
                toProtoMsg(message: _22.MsgDefundPool): _22.MsgDefundPoolProtoMsg;
            };
            MsgDefundPoolResponse: {
                typeUrl: string;
                encode(_: _22.MsgDefundPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgDefundPoolResponse;
                fromPartial(_: Partial<_22.MsgDefundPoolResponse>): _22.MsgDefundPoolResponse;
                fromAmino(_: _22.MsgDefundPoolResponseAmino): _22.MsgDefundPoolResponse;
                toAmino(_: _22.MsgDefundPoolResponse): _22.MsgDefundPoolResponseAmino;
                fromAminoMsg(object: _22.MsgDefundPoolResponseAminoMsg): _22.MsgDefundPoolResponse;
                fromProtoMsg(message: _22.MsgDefundPoolResponseProtoMsg): _22.MsgDefundPoolResponse;
                toProto(message: _22.MsgDefundPoolResponse): Uint8Array;
                toProtoMsg(message: _22.MsgDefundPoolResponse): _22.MsgDefundPoolResponseProtoMsg;
            };
            MsgCreatePool: {
                typeUrl: string;
                encode(message: _22.MsgCreatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgCreatePool;
                fromPartial(object: Partial<_22.MsgCreatePool>): _22.MsgCreatePool;
                fromAmino(object: _22.MsgCreatePoolAmino): _22.MsgCreatePool;
                toAmino(message: _22.MsgCreatePool): _22.MsgCreatePoolAmino;
                fromAminoMsg(object: _22.MsgCreatePoolAminoMsg): _22.MsgCreatePool;
                fromProtoMsg(message: _22.MsgCreatePoolProtoMsg): _22.MsgCreatePool;
                toProto(message: _22.MsgCreatePool): Uint8Array;
                toProtoMsg(message: _22.MsgCreatePool): _22.MsgCreatePoolProtoMsg;
            };
            MsgCreatePoolResponse: {
                typeUrl: string;
                encode(_: _22.MsgCreatePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgCreatePoolResponse;
                fromPartial(_: Partial<_22.MsgCreatePoolResponse>): _22.MsgCreatePoolResponse;
                fromAmino(_: _22.MsgCreatePoolResponseAmino): _22.MsgCreatePoolResponse;
                toAmino(_: _22.MsgCreatePoolResponse): _22.MsgCreatePoolResponseAmino;
                fromAminoMsg(object: _22.MsgCreatePoolResponseAminoMsg): _22.MsgCreatePoolResponse;
                fromProtoMsg(message: _22.MsgCreatePoolResponseProtoMsg): _22.MsgCreatePoolResponse;
                toProto(message: _22.MsgCreatePoolResponse): Uint8Array;
                toProtoMsg(message: _22.MsgCreatePoolResponse): _22.MsgCreatePoolResponseProtoMsg;
            };
            MsgUpdatePool: {
                typeUrl: string;
                encode(message: _22.MsgUpdatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgUpdatePool;
                fromPartial(object: Partial<_22.MsgUpdatePool>): _22.MsgUpdatePool;
                fromAmino(object: _22.MsgUpdatePoolAmino): _22.MsgUpdatePool;
                toAmino(message: _22.MsgUpdatePool): _22.MsgUpdatePoolAmino;
                fromAminoMsg(object: _22.MsgUpdatePoolAminoMsg): _22.MsgUpdatePool;
                fromProtoMsg(message: _22.MsgUpdatePoolProtoMsg): _22.MsgUpdatePool;
                toProto(message: _22.MsgUpdatePool): Uint8Array;
                toProtoMsg(message: _22.MsgUpdatePool): _22.MsgUpdatePoolProtoMsg;
            };
            MsgUpdatePoolResponse: {
                typeUrl: string;
                encode(_: _22.MsgUpdatePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgUpdatePoolResponse;
                fromPartial(_: Partial<_22.MsgUpdatePoolResponse>): _22.MsgUpdatePoolResponse;
                fromAmino(_: _22.MsgUpdatePoolResponseAmino): _22.MsgUpdatePoolResponse;
                toAmino(_: _22.MsgUpdatePoolResponse): _22.MsgUpdatePoolResponseAmino;
                fromAminoMsg(object: _22.MsgUpdatePoolResponseAminoMsg): _22.MsgUpdatePoolResponse;
                fromProtoMsg(message: _22.MsgUpdatePoolResponseProtoMsg): _22.MsgUpdatePoolResponse;
                toProto(message: _22.MsgUpdatePoolResponse): Uint8Array;
                toProtoMsg(message: _22.MsgUpdatePoolResponse): _22.MsgUpdatePoolResponseProtoMsg;
            };
            MsgDisablePool: {
                typeUrl: string;
                encode(message: _22.MsgDisablePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgDisablePool;
                fromPartial(object: Partial<_22.MsgDisablePool>): _22.MsgDisablePool;
                fromAmino(object: _22.MsgDisablePoolAmino): _22.MsgDisablePool;
                toAmino(message: _22.MsgDisablePool): _22.MsgDisablePoolAmino;
                fromAminoMsg(object: _22.MsgDisablePoolAminoMsg): _22.MsgDisablePool;
                fromProtoMsg(message: _22.MsgDisablePoolProtoMsg): _22.MsgDisablePool;
                toProto(message: _22.MsgDisablePool): Uint8Array;
                toProtoMsg(message: _22.MsgDisablePool): _22.MsgDisablePoolProtoMsg;
            };
            MsgDisablePoolResponse: {
                typeUrl: string;
                encode(_: _22.MsgDisablePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgDisablePoolResponse;
                fromPartial(_: Partial<_22.MsgDisablePoolResponse>): _22.MsgDisablePoolResponse;
                fromAmino(_: _22.MsgDisablePoolResponseAmino): _22.MsgDisablePoolResponse;
                toAmino(_: _22.MsgDisablePoolResponse): _22.MsgDisablePoolResponseAmino;
                fromAminoMsg(object: _22.MsgDisablePoolResponseAminoMsg): _22.MsgDisablePoolResponse;
                fromProtoMsg(message: _22.MsgDisablePoolResponseProtoMsg): _22.MsgDisablePoolResponse;
                toProto(message: _22.MsgDisablePoolResponse): Uint8Array;
                toProtoMsg(message: _22.MsgDisablePoolResponse): _22.MsgDisablePoolResponseProtoMsg;
            };
            MsgEnablePool: {
                typeUrl: string;
                encode(message: _22.MsgEnablePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgEnablePool;
                fromPartial(object: Partial<_22.MsgEnablePool>): _22.MsgEnablePool;
                fromAmino(object: _22.MsgEnablePoolAmino): _22.MsgEnablePool;
                toAmino(message: _22.MsgEnablePool): _22.MsgEnablePoolAmino;
                fromAminoMsg(object: _22.MsgEnablePoolAminoMsg): _22.MsgEnablePool;
                fromProtoMsg(message: _22.MsgEnablePoolProtoMsg): _22.MsgEnablePool;
                toProto(message: _22.MsgEnablePool): Uint8Array;
                toProtoMsg(message: _22.MsgEnablePool): _22.MsgEnablePoolProtoMsg;
            };
            MsgEnablePoolResponse: {
                typeUrl: string;
                encode(_: _22.MsgEnablePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgEnablePoolResponse;
                fromPartial(_: Partial<_22.MsgEnablePoolResponse>): _22.MsgEnablePoolResponse;
                fromAmino(_: _22.MsgEnablePoolResponseAmino): _22.MsgEnablePoolResponse;
                toAmino(_: _22.MsgEnablePoolResponse): _22.MsgEnablePoolResponseAmino;
                fromAminoMsg(object: _22.MsgEnablePoolResponseAminoMsg): _22.MsgEnablePoolResponse;
                fromProtoMsg(message: _22.MsgEnablePoolResponseProtoMsg): _22.MsgEnablePoolResponse;
                toProto(message: _22.MsgEnablePoolResponse): Uint8Array;
                toProtoMsg(message: _22.MsgEnablePoolResponse): _22.MsgEnablePoolResponseProtoMsg;
            };
            MsgScheduleRuntimeUpgrade: {
                typeUrl: string;
                encode(message: _22.MsgScheduleRuntimeUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgScheduleRuntimeUpgrade;
                fromPartial(object: Partial<_22.MsgScheduleRuntimeUpgrade>): _22.MsgScheduleRuntimeUpgrade;
                fromAmino(object: _22.MsgScheduleRuntimeUpgradeAmino): _22.MsgScheduleRuntimeUpgrade;
                toAmino(message: _22.MsgScheduleRuntimeUpgrade): _22.MsgScheduleRuntimeUpgradeAmino;
                fromAminoMsg(object: _22.MsgScheduleRuntimeUpgradeAminoMsg): _22.MsgScheduleRuntimeUpgrade;
                fromProtoMsg(message: _22.MsgScheduleRuntimeUpgradeProtoMsg): _22.MsgScheduleRuntimeUpgrade;
                toProto(message: _22.MsgScheduleRuntimeUpgrade): Uint8Array;
                toProtoMsg(message: _22.MsgScheduleRuntimeUpgrade): _22.MsgScheduleRuntimeUpgradeProtoMsg;
            };
            MsgScheduleRuntimeUpgradeResponse: {
                typeUrl: string;
                encode(_: _22.MsgScheduleRuntimeUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgScheduleRuntimeUpgradeResponse;
                fromPartial(_: Partial<_22.MsgScheduleRuntimeUpgradeResponse>): _22.MsgScheduleRuntimeUpgradeResponse;
                fromAmino(_: _22.MsgScheduleRuntimeUpgradeResponseAmino): _22.MsgScheduleRuntimeUpgradeResponse;
                toAmino(_: _22.MsgScheduleRuntimeUpgradeResponse): _22.MsgScheduleRuntimeUpgradeResponseAmino;
                fromAminoMsg(object: _22.MsgScheduleRuntimeUpgradeResponseAminoMsg): _22.MsgScheduleRuntimeUpgradeResponse;
                fromProtoMsg(message: _22.MsgScheduleRuntimeUpgradeResponseProtoMsg): _22.MsgScheduleRuntimeUpgradeResponse;
                toProto(message: _22.MsgScheduleRuntimeUpgradeResponse): Uint8Array;
                toProtoMsg(message: _22.MsgScheduleRuntimeUpgradeResponse): _22.MsgScheduleRuntimeUpgradeResponseProtoMsg;
            };
            MsgCancelRuntimeUpgrade: {
                typeUrl: string;
                encode(message: _22.MsgCancelRuntimeUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgCancelRuntimeUpgrade;
                fromPartial(object: Partial<_22.MsgCancelRuntimeUpgrade>): _22.MsgCancelRuntimeUpgrade;
                fromAmino(object: _22.MsgCancelRuntimeUpgradeAmino): _22.MsgCancelRuntimeUpgrade;
                toAmino(message: _22.MsgCancelRuntimeUpgrade): _22.MsgCancelRuntimeUpgradeAmino;
                fromAminoMsg(object: _22.MsgCancelRuntimeUpgradeAminoMsg): _22.MsgCancelRuntimeUpgrade;
                fromProtoMsg(message: _22.MsgCancelRuntimeUpgradeProtoMsg): _22.MsgCancelRuntimeUpgrade;
                toProto(message: _22.MsgCancelRuntimeUpgrade): Uint8Array;
                toProtoMsg(message: _22.MsgCancelRuntimeUpgrade): _22.MsgCancelRuntimeUpgradeProtoMsg;
            };
            MsgCancelRuntimeUpgradeResponse: {
                typeUrl: string;
                encode(_: _22.MsgCancelRuntimeUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgCancelRuntimeUpgradeResponse;
                fromPartial(_: Partial<_22.MsgCancelRuntimeUpgradeResponse>): _22.MsgCancelRuntimeUpgradeResponse;
                fromAmino(_: _22.MsgCancelRuntimeUpgradeResponseAmino): _22.MsgCancelRuntimeUpgradeResponse;
                toAmino(_: _22.MsgCancelRuntimeUpgradeResponse): _22.MsgCancelRuntimeUpgradeResponseAmino;
                fromAminoMsg(object: _22.MsgCancelRuntimeUpgradeResponseAminoMsg): _22.MsgCancelRuntimeUpgradeResponse;
                fromProtoMsg(message: _22.MsgCancelRuntimeUpgradeResponseProtoMsg): _22.MsgCancelRuntimeUpgradeResponse;
                toProto(message: _22.MsgCancelRuntimeUpgradeResponse): Uint8Array;
                toProtoMsg(message: _22.MsgCancelRuntimeUpgradeResponse): _22.MsgCancelRuntimeUpgradeResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _22.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgUpdateParams;
                fromPartial(object: Partial<_22.MsgUpdateParams>): _22.MsgUpdateParams;
                fromAmino(object: _22.MsgUpdateParamsAmino): _22.MsgUpdateParams;
                toAmino(message: _22.MsgUpdateParams): _22.MsgUpdateParamsAmino;
                fromAminoMsg(object: _22.MsgUpdateParamsAminoMsg): _22.MsgUpdateParams;
                fromProtoMsg(message: _22.MsgUpdateParamsProtoMsg): _22.MsgUpdateParams;
                toProto(message: _22.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _22.MsgUpdateParams): _22.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _22.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_22.MsgUpdateParamsResponse>): _22.MsgUpdateParamsResponse;
                fromAmino(_: _22.MsgUpdateParamsResponseAmino): _22.MsgUpdateParamsResponse;
                toAmino(_: _22.MsgUpdateParamsResponse): _22.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _22.MsgUpdateParamsResponseAminoMsg): _22.MsgUpdateParamsResponse;
                fromProtoMsg(message: _22.MsgUpdateParamsResponseProtoMsg): _22.MsgUpdateParamsResponse;
                toProto(message: _22.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _22.MsgUpdateParamsResponse): _22.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _21.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryParamsRequest;
                fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
                fromAmino(_: _21.QueryParamsRequestAmino): _21.QueryParamsRequest;
                toAmino(_: _21.QueryParamsRequest): _21.QueryParamsRequestAmino;
                fromAminoMsg(object: _21.QueryParamsRequestAminoMsg): _21.QueryParamsRequest;
                fromProtoMsg(message: _21.QueryParamsRequestProtoMsg): _21.QueryParamsRequest;
                toProto(message: _21.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryParamsRequest): _21.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _21.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryParamsResponse;
                fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
                fromAmino(object: _21.QueryParamsResponseAmino): _21.QueryParamsResponse;
                toAmino(message: _21.QueryParamsResponse): _21.QueryParamsResponseAmino;
                fromAminoMsg(object: _21.QueryParamsResponseAminoMsg): _21.QueryParamsResponse;
                fromProtoMsg(message: _21.QueryParamsResponseProtoMsg): _21.QueryParamsResponse;
                toProto(message: _21.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryParamsResponse): _21.QueryParamsResponseProtoMsg;
            };
            poolStatusFromJSON(object: any): _20.PoolStatus;
            poolStatusToJSON(object: _20.PoolStatus): string;
            PoolStatus: typeof _20.PoolStatus;
            PoolStatusSDKType: typeof _20.PoolStatus;
            PoolStatusAmino: typeof _20.PoolStatus;
            Protocol: {
                typeUrl: string;
                encode(message: _20.Protocol, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Protocol;
                fromPartial(object: Partial<_20.Protocol>): _20.Protocol;
                fromAmino(object: _20.ProtocolAmino): _20.Protocol;
                toAmino(message: _20.Protocol): _20.ProtocolAmino;
                fromAminoMsg(object: _20.ProtocolAminoMsg): _20.Protocol;
                fromProtoMsg(message: _20.ProtocolProtoMsg): _20.Protocol;
                toProto(message: _20.Protocol): Uint8Array;
                toProtoMsg(message: _20.Protocol): _20.ProtocolProtoMsg;
            };
            UpgradePlan: {
                typeUrl: string;
                encode(message: _20.UpgradePlan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.UpgradePlan;
                fromPartial(object: Partial<_20.UpgradePlan>): _20.UpgradePlan;
                fromAmino(object: _20.UpgradePlanAmino): _20.UpgradePlan;
                toAmino(message: _20.UpgradePlan): _20.UpgradePlanAmino;
                fromAminoMsg(object: _20.UpgradePlanAminoMsg): _20.UpgradePlan;
                fromProtoMsg(message: _20.UpgradePlanProtoMsg): _20.UpgradePlan;
                toProto(message: _20.UpgradePlan): Uint8Array;
                toProtoMsg(message: _20.UpgradePlan): _20.UpgradePlanProtoMsg;
            };
            Funder: {
                typeUrl: string;
                encode(message: _20.Funder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Funder;
                fromPartial(object: Partial<_20.Funder>): _20.Funder;
                fromAmino(object: _20.FunderAmino): _20.Funder;
                toAmino(message: _20.Funder): _20.FunderAmino;
                fromAminoMsg(object: _20.FunderAminoMsg): _20.Funder;
                fromProtoMsg(message: _20.FunderProtoMsg): _20.Funder;
                toProto(message: _20.Funder): Uint8Array;
                toProtoMsg(message: _20.Funder): _20.FunderProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _20.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Pool;
                fromPartial(object: Partial<_20.Pool>): _20.Pool;
                fromAmino(object: _20.PoolAmino): _20.Pool;
                toAmino(message: _20.Pool): _20.PoolAmino;
                fromAminoMsg(object: _20.PoolAminoMsg): _20.Pool;
                fromProtoMsg(message: _20.PoolProtoMsg): _20.Pool;
                toProto(message: _20.Pool): Uint8Array;
                toProtoMsg(message: _20.Pool): _20.PoolProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _19.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Params;
                fromPartial(object: Partial<_19.Params>): _19.Params;
                fromAmino(object: _19.ParamsAmino): _19.Params;
                toAmino(message: _19.Params): _19.ParamsAmino;
                fromAminoMsg(object: _19.ParamsAminoMsg): _19.Params;
                fromProtoMsg(message: _19.ParamsProtoMsg): _19.Params;
                toProto(message: _19.Params): Uint8Array;
                toProtoMsg(message: _19.Params): _19.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _18.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
                fromAmino(object: _18.GenesisStateAmino): _18.GenesisState;
                toAmino(message: _18.GenesisState): _18.GenesisStateAmino;
                fromAminoMsg(object: _18.GenesisStateAminoMsg): _18.GenesisState;
                fromProtoMsg(message: _18.GenesisStateProtoMsg): _18.GenesisState;
                toProto(message: _18.GenesisState): Uint8Array;
                toProtoMsg(message: _18.GenesisState): _18.GenesisStateProtoMsg;
            };
            EventUpdateParams: {
                typeUrl: string;
                encode(message: _17.EventUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventUpdateParams;
                fromPartial(object: Partial<_17.EventUpdateParams>): _17.EventUpdateParams;
                fromAmino(object: _17.EventUpdateParamsAmino): _17.EventUpdateParams;
                toAmino(message: _17.EventUpdateParams): _17.EventUpdateParamsAmino;
                fromAminoMsg(object: _17.EventUpdateParamsAminoMsg): _17.EventUpdateParams;
                fromProtoMsg(message: _17.EventUpdateParamsProtoMsg): _17.EventUpdateParams;
                toProto(message: _17.EventUpdateParams): Uint8Array;
                toProtoMsg(message: _17.EventUpdateParams): _17.EventUpdateParamsProtoMsg;
            };
            EventCreatePool: {
                typeUrl: string;
                encode(message: _17.EventCreatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventCreatePool;
                fromPartial(object: Partial<_17.EventCreatePool>): _17.EventCreatePool;
                fromAmino(object: _17.EventCreatePoolAmino): _17.EventCreatePool;
                toAmino(message: _17.EventCreatePool): _17.EventCreatePoolAmino;
                fromAminoMsg(object: _17.EventCreatePoolAminoMsg): _17.EventCreatePool;
                fromProtoMsg(message: _17.EventCreatePoolProtoMsg): _17.EventCreatePool;
                toProto(message: _17.EventCreatePool): Uint8Array;
                toProtoMsg(message: _17.EventCreatePool): _17.EventCreatePoolProtoMsg;
            };
            EventPoolEnabled: {
                typeUrl: string;
                encode(message: _17.EventPoolEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventPoolEnabled;
                fromPartial(object: Partial<_17.EventPoolEnabled>): _17.EventPoolEnabled;
                fromAmino(object: _17.EventPoolEnabledAmino): _17.EventPoolEnabled;
                toAmino(message: _17.EventPoolEnabled): _17.EventPoolEnabledAmino;
                fromAminoMsg(object: _17.EventPoolEnabledAminoMsg): _17.EventPoolEnabled;
                fromProtoMsg(message: _17.EventPoolEnabledProtoMsg): _17.EventPoolEnabled;
                toProto(message: _17.EventPoolEnabled): Uint8Array;
                toProtoMsg(message: _17.EventPoolEnabled): _17.EventPoolEnabledProtoMsg;
            };
            EventPoolDisabled: {
                typeUrl: string;
                encode(message: _17.EventPoolDisabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventPoolDisabled;
                fromPartial(object: Partial<_17.EventPoolDisabled>): _17.EventPoolDisabled;
                fromAmino(object: _17.EventPoolDisabledAmino): _17.EventPoolDisabled;
                toAmino(message: _17.EventPoolDisabled): _17.EventPoolDisabledAmino;
                fromAminoMsg(object: _17.EventPoolDisabledAminoMsg): _17.EventPoolDisabled;
                fromProtoMsg(message: _17.EventPoolDisabledProtoMsg): _17.EventPoolDisabled;
                toProto(message: _17.EventPoolDisabled): Uint8Array;
                toProtoMsg(message: _17.EventPoolDisabled): _17.EventPoolDisabledProtoMsg;
            };
            EventRuntimeUpgradeScheduled: {
                typeUrl: string;
                encode(message: _17.EventRuntimeUpgradeScheduled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventRuntimeUpgradeScheduled;
                fromPartial(object: Partial<_17.EventRuntimeUpgradeScheduled>): _17.EventRuntimeUpgradeScheduled;
                fromAmino(object: _17.EventRuntimeUpgradeScheduledAmino): _17.EventRuntimeUpgradeScheduled;
                toAmino(message: _17.EventRuntimeUpgradeScheduled): _17.EventRuntimeUpgradeScheduledAmino;
                fromAminoMsg(object: _17.EventRuntimeUpgradeScheduledAminoMsg): _17.EventRuntimeUpgradeScheduled;
                fromProtoMsg(message: _17.EventRuntimeUpgradeScheduledProtoMsg): _17.EventRuntimeUpgradeScheduled;
                toProto(message: _17.EventRuntimeUpgradeScheduled): Uint8Array;
                toProtoMsg(message: _17.EventRuntimeUpgradeScheduled): _17.EventRuntimeUpgradeScheduledProtoMsg;
            };
            EventRuntimeUpgradeCancelled: {
                typeUrl: string;
                encode(message: _17.EventRuntimeUpgradeCancelled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventRuntimeUpgradeCancelled;
                fromPartial(object: Partial<_17.EventRuntimeUpgradeCancelled>): _17.EventRuntimeUpgradeCancelled;
                fromAmino(object: _17.EventRuntimeUpgradeCancelledAmino): _17.EventRuntimeUpgradeCancelled;
                toAmino(message: _17.EventRuntimeUpgradeCancelled): _17.EventRuntimeUpgradeCancelledAmino;
                fromAminoMsg(object: _17.EventRuntimeUpgradeCancelledAminoMsg): _17.EventRuntimeUpgradeCancelled;
                fromProtoMsg(message: _17.EventRuntimeUpgradeCancelledProtoMsg): _17.EventRuntimeUpgradeCancelled;
                toProto(message: _17.EventRuntimeUpgradeCancelled): Uint8Array;
                toProtoMsg(message: _17.EventRuntimeUpgradeCancelled): _17.EventRuntimeUpgradeCancelledProtoMsg;
            };
            EventPoolUpdated: {
                typeUrl: string;
                encode(message: _17.EventPoolUpdated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventPoolUpdated;
                fromPartial(object: Partial<_17.EventPoolUpdated>): _17.EventPoolUpdated;
                fromAmino(object: _17.EventPoolUpdatedAmino): _17.EventPoolUpdated;
                toAmino(message: _17.EventPoolUpdated): _17.EventPoolUpdatedAmino;
                fromAminoMsg(object: _17.EventPoolUpdatedAminoMsg): _17.EventPoolUpdated;
                fromProtoMsg(message: _17.EventPoolUpdatedProtoMsg): _17.EventPoolUpdated;
                toProto(message: _17.EventPoolUpdated): Uint8Array;
                toProtoMsg(message: _17.EventPoolUpdated): _17.EventPoolUpdatedProtoMsg;
            };
            EventFundPool: {
                typeUrl: string;
                encode(message: _17.EventFundPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventFundPool;
                fromPartial(object: Partial<_17.EventFundPool>): _17.EventFundPool;
                fromAmino(object: _17.EventFundPoolAmino): _17.EventFundPool;
                toAmino(message: _17.EventFundPool): _17.EventFundPoolAmino;
                fromAminoMsg(object: _17.EventFundPoolAminoMsg): _17.EventFundPool;
                fromProtoMsg(message: _17.EventFundPoolProtoMsg): _17.EventFundPool;
                toProto(message: _17.EventFundPool): Uint8Array;
                toProtoMsg(message: _17.EventFundPool): _17.EventFundPoolProtoMsg;
            };
            EventDefundPool: {
                typeUrl: string;
                encode(message: _17.EventDefundPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventDefundPool;
                fromPartial(object: Partial<_17.EventDefundPool>): _17.EventDefundPool;
                fromAmino(object: _17.EventDefundPoolAmino): _17.EventDefundPool;
                toAmino(message: _17.EventDefundPool): _17.EventDefundPoolAmino;
                fromAminoMsg(object: _17.EventDefundPoolAminoMsg): _17.EventDefundPool;
                fromProtoMsg(message: _17.EventDefundPoolProtoMsg): _17.EventDefundPool;
                toProto(message: _17.EventDefundPool): Uint8Array;
                toProtoMsg(message: _17.EventDefundPool): _17.EventDefundPoolProtoMsg;
            };
            EventPoolFundsSlashed: {
                typeUrl: string;
                encode(message: _17.EventPoolFundsSlashed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventPoolFundsSlashed;
                fromPartial(object: Partial<_17.EventPoolFundsSlashed>): _17.EventPoolFundsSlashed;
                fromAmino(object: _17.EventPoolFundsSlashedAmino): _17.EventPoolFundsSlashed;
                toAmino(message: _17.EventPoolFundsSlashed): _17.EventPoolFundsSlashedAmino;
                fromAminoMsg(object: _17.EventPoolFundsSlashedAminoMsg): _17.EventPoolFundsSlashed;
                fromProtoMsg(message: _17.EventPoolFundsSlashedProtoMsg): _17.EventPoolFundsSlashed;
                toProto(message: _17.EventPoolFundsSlashed): Uint8Array;
                toProtoMsg(message: _17.EventPoolFundsSlashed): _17.EventPoolFundsSlashedProtoMsg;
            };
            EventPoolOutOfFunds: {
                typeUrl: string;
                encode(message: _17.EventPoolOutOfFunds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.EventPoolOutOfFunds;
                fromPartial(object: Partial<_17.EventPoolOutOfFunds>): _17.EventPoolOutOfFunds;
                fromAmino(object: _17.EventPoolOutOfFundsAmino): _17.EventPoolOutOfFunds;
                toAmino(message: _17.EventPoolOutOfFunds): _17.EventPoolOutOfFundsAmino;
                fromAminoMsg(object: _17.EventPoolOutOfFundsAminoMsg): _17.EventPoolOutOfFunds;
                fromProtoMsg(message: _17.EventPoolOutOfFundsProtoMsg): _17.EventPoolOutOfFunds;
                toProto(message: _17.EventPoolOutOfFunds): Uint8Array;
                toProtoMsg(message: _17.EventPoolOutOfFunds): _17.EventPoolOutOfFundsProtoMsg;
            };
        };
    }
    namespace query {
        const v1beta1: {
            stakerStatusFromJSON(object: any): _29.StakerStatus;
            stakerStatusToJSON(object: _29.StakerStatus): string;
            StakerStatus: typeof _29.StakerStatus;
            StakerStatusSDKType: typeof _29.StakerStatus;
            StakerStatusAmino: typeof _29.StakerStatus;
            QueryStakersRequest: {
                typeUrl: string;
                encode(message: _29.QueryStakersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryStakersRequest;
                fromPartial(object: Partial<_29.QueryStakersRequest>): _29.QueryStakersRequest;
                fromAmino(object: _29.QueryStakersRequestAmino): _29.QueryStakersRequest;
                toAmino(message: _29.QueryStakersRequest): _29.QueryStakersRequestAmino;
                fromAminoMsg(object: _29.QueryStakersRequestAminoMsg): _29.QueryStakersRequest;
                fromProtoMsg(message: _29.QueryStakersRequestProtoMsg): _29.QueryStakersRequest;
                toProto(message: _29.QueryStakersRequest): Uint8Array;
                toProtoMsg(message: _29.QueryStakersRequest): _29.QueryStakersRequestProtoMsg;
            };
            QueryStakersResponse: {
                typeUrl: string;
                encode(message: _29.QueryStakersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryStakersResponse;
                fromPartial(object: Partial<_29.QueryStakersResponse>): _29.QueryStakersResponse;
                fromAmino(object: _29.QueryStakersResponseAmino): _29.QueryStakersResponse;
                toAmino(message: _29.QueryStakersResponse): _29.QueryStakersResponseAmino;
                fromAminoMsg(object: _29.QueryStakersResponseAminoMsg): _29.QueryStakersResponse;
                fromProtoMsg(message: _29.QueryStakersResponseProtoMsg): _29.QueryStakersResponse;
                toProto(message: _29.QueryStakersResponse): Uint8Array;
                toProtoMsg(message: _29.QueryStakersResponse): _29.QueryStakersResponseProtoMsg;
            };
            QueryStakerRequest: {
                typeUrl: string;
                encode(message: _29.QueryStakerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryStakerRequest;
                fromPartial(object: Partial<_29.QueryStakerRequest>): _29.QueryStakerRequest;
                fromAmino(object: _29.QueryStakerRequestAmino): _29.QueryStakerRequest;
                toAmino(message: _29.QueryStakerRequest): _29.QueryStakerRequestAmino;
                fromAminoMsg(object: _29.QueryStakerRequestAminoMsg): _29.QueryStakerRequest;
                fromProtoMsg(message: _29.QueryStakerRequestProtoMsg): _29.QueryStakerRequest;
                toProto(message: _29.QueryStakerRequest): Uint8Array;
                toProtoMsg(message: _29.QueryStakerRequest): _29.QueryStakerRequestProtoMsg;
            };
            QueryStakerResponse: {
                typeUrl: string;
                encode(message: _29.QueryStakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryStakerResponse;
                fromPartial(object: Partial<_29.QueryStakerResponse>): _29.QueryStakerResponse;
                fromAmino(object: _29.QueryStakerResponseAmino): _29.QueryStakerResponse;
                toAmino(message: _29.QueryStakerResponse): _29.QueryStakerResponseAmino;
                fromAminoMsg(object: _29.QueryStakerResponseAminoMsg): _29.QueryStakerResponse;
                fromProtoMsg(message: _29.QueryStakerResponseProtoMsg): _29.QueryStakerResponse;
                toProto(message: _29.QueryStakerResponse): Uint8Array;
                toProtoMsg(message: _29.QueryStakerResponse): _29.QueryStakerResponseProtoMsg;
            };
            QueryStakersByPoolRequest: {
                typeUrl: string;
                encode(message: _29.QueryStakersByPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryStakersByPoolRequest;
                fromPartial(object: Partial<_29.QueryStakersByPoolRequest>): _29.QueryStakersByPoolRequest;
                fromAmino(object: _29.QueryStakersByPoolRequestAmino): _29.QueryStakersByPoolRequest;
                toAmino(message: _29.QueryStakersByPoolRequest): _29.QueryStakersByPoolRequestAmino;
                fromAminoMsg(object: _29.QueryStakersByPoolRequestAminoMsg): _29.QueryStakersByPoolRequest;
                fromProtoMsg(message: _29.QueryStakersByPoolRequestProtoMsg): _29.QueryStakersByPoolRequest;
                toProto(message: _29.QueryStakersByPoolRequest): Uint8Array;
                toProtoMsg(message: _29.QueryStakersByPoolRequest): _29.QueryStakersByPoolRequestProtoMsg;
            };
            QueryStakersByPoolResponse: {
                typeUrl: string;
                encode(message: _29.QueryStakersByPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryStakersByPoolResponse;
                fromPartial(object: Partial<_29.QueryStakersByPoolResponse>): _29.QueryStakersByPoolResponse;
                fromAmino(object: _29.QueryStakersByPoolResponseAmino): _29.QueryStakersByPoolResponse;
                toAmino(message: _29.QueryStakersByPoolResponse): _29.QueryStakersByPoolResponseAmino;
                fromAminoMsg(object: _29.QueryStakersByPoolResponseAminoMsg): _29.QueryStakersByPoolResponse;
                fromProtoMsg(message: _29.QueryStakersByPoolResponseProtoMsg): _29.QueryStakersByPoolResponse;
                toProto(message: _29.QueryStakersByPoolResponse): Uint8Array;
                toProtoMsg(message: _29.QueryStakersByPoolResponse): _29.QueryStakersByPoolResponseProtoMsg;
            };
            StakerPoolResponse: {
                typeUrl: string;
                encode(message: _29.StakerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.StakerPoolResponse;
                fromPartial(object: Partial<_29.StakerPoolResponse>): _29.StakerPoolResponse;
                fromAmino(object: _29.StakerPoolResponseAmino): _29.StakerPoolResponse;
                toAmino(message: _29.StakerPoolResponse): _29.StakerPoolResponseAmino;
                fromAminoMsg(object: _29.StakerPoolResponseAminoMsg): _29.StakerPoolResponse;
                fromProtoMsg(message: _29.StakerPoolResponseProtoMsg): _29.StakerPoolResponse;
                toProto(message: _29.StakerPoolResponse): Uint8Array;
                toProtoMsg(message: _29.StakerPoolResponse): _29.StakerPoolResponseProtoMsg;
            };
            QueryStakersByPoolCountRequest: {
                typeUrl: string;
                encode(message: _29.QueryStakersByPoolCountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryStakersByPoolCountRequest;
                fromPartial(object: Partial<_29.QueryStakersByPoolCountRequest>): _29.QueryStakersByPoolCountRequest;
                fromAmino(object: _29.QueryStakersByPoolCountRequestAmino): _29.QueryStakersByPoolCountRequest;
                toAmino(message: _29.QueryStakersByPoolCountRequest): _29.QueryStakersByPoolCountRequestAmino;
                fromAminoMsg(object: _29.QueryStakersByPoolCountRequestAminoMsg): _29.QueryStakersByPoolCountRequest;
                fromProtoMsg(message: _29.QueryStakersByPoolCountRequestProtoMsg): _29.QueryStakersByPoolCountRequest;
                toProto(message: _29.QueryStakersByPoolCountRequest): Uint8Array;
                toProtoMsg(message: _29.QueryStakersByPoolCountRequest): _29.QueryStakersByPoolCountRequestProtoMsg;
            };
            QueryStakersByPoolCountResponse: {
                typeUrl: string;
                encode(message: _29.QueryStakersByPoolCountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryStakersByPoolCountResponse;
                fromPartial(object: Partial<_29.QueryStakersByPoolCountResponse>): _29.QueryStakersByPoolCountResponse;
                fromAmino(object: _29.QueryStakersByPoolCountResponseAmino): _29.QueryStakersByPoolCountResponse;
                toAmino(message: _29.QueryStakersByPoolCountResponse): _29.QueryStakersByPoolCountResponseAmino;
                fromAminoMsg(object: _29.QueryStakersByPoolCountResponseAminoMsg): _29.QueryStakersByPoolCountResponse;
                fromProtoMsg(message: _29.QueryStakersByPoolCountResponseProtoMsg): _29.QueryStakersByPoolCountResponse;
                toProto(message: _29.QueryStakersByPoolCountResponse): Uint8Array;
                toProtoMsg(message: _29.QueryStakersByPoolCountResponse): _29.QueryStakersByPoolCountResponseProtoMsg;
            };
            BasicPool: {
                typeUrl: string;
                encode(message: _28.BasicPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.BasicPool;
                fromPartial(object: Partial<_28.BasicPool>): _28.BasicPool;
                fromAmino(object: _28.BasicPoolAmino): _28.BasicPool;
                toAmino(message: _28.BasicPool): _28.BasicPoolAmino;
                fromAminoMsg(object: _28.BasicPoolAminoMsg): _28.BasicPool;
                fromProtoMsg(message: _28.BasicPoolProtoMsg): _28.BasicPool;
                toProto(message: _28.BasicPool): Uint8Array;
                toProtoMsg(message: _28.BasicPool): _28.BasicPoolProtoMsg;
            };
            FullStaker: {
                typeUrl: string;
                encode(message: _28.FullStaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.FullStaker;
                fromPartial(object: Partial<_28.FullStaker>): _28.FullStaker;
                fromAmino(object: _28.FullStakerAmino): _28.FullStaker;
                toAmino(message: _28.FullStaker): _28.FullStakerAmino;
                fromAminoMsg(object: _28.FullStakerAminoMsg): _28.FullStaker;
                fromProtoMsg(message: _28.FullStakerProtoMsg): _28.FullStaker;
                toProto(message: _28.FullStaker): Uint8Array;
                toProtoMsg(message: _28.FullStaker): _28.FullStakerProtoMsg;
            };
            StakerMetadata: {
                typeUrl: string;
                encode(message: _28.StakerMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.StakerMetadata;
                fromPartial(object: Partial<_28.StakerMetadata>): _28.StakerMetadata;
                fromAmino(object: _28.StakerMetadataAmino): _28.StakerMetadata;
                toAmino(message: _28.StakerMetadata): _28.StakerMetadataAmino;
                fromAminoMsg(object: _28.StakerMetadataAminoMsg): _28.StakerMetadata;
                fromProtoMsg(message: _28.StakerMetadataProtoMsg): _28.StakerMetadata;
                toProto(message: _28.StakerMetadata): Uint8Array;
                toProtoMsg(message: _28.StakerMetadata): _28.StakerMetadataProtoMsg;
            };
            CommissionChangeEntry: {
                typeUrl: string;
                encode(message: _28.CommissionChangeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.CommissionChangeEntry;
                fromPartial(object: Partial<_28.CommissionChangeEntry>): _28.CommissionChangeEntry;
                fromAmino(object: _28.CommissionChangeEntryAmino): _28.CommissionChangeEntry;
                toAmino(message: _28.CommissionChangeEntry): _28.CommissionChangeEntryAmino;
                fromAminoMsg(object: _28.CommissionChangeEntryAminoMsg): _28.CommissionChangeEntry;
                fromProtoMsg(message: _28.CommissionChangeEntryProtoMsg): _28.CommissionChangeEntry;
                toProto(message: _28.CommissionChangeEntry): Uint8Array;
                toProtoMsg(message: _28.CommissionChangeEntry): _28.CommissionChangeEntryProtoMsg;
            };
            PoolMembership: {
                typeUrl: string;
                encode(message: _28.PoolMembership, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.PoolMembership;
                fromPartial(object: Partial<_28.PoolMembership>): _28.PoolMembership;
                fromAmino(object: _28.PoolMembershipAmino): _28.PoolMembership;
                toAmino(message: _28.PoolMembership): _28.PoolMembershipAmino;
                fromAminoMsg(object: _28.PoolMembershipAminoMsg): _28.PoolMembership;
                fromProtoMsg(message: _28.PoolMembershipProtoMsg): _28.PoolMembership;
                toProto(message: _28.PoolMembership): Uint8Array;
                toProtoMsg(message: _28.PoolMembership): _28.PoolMembershipProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _27.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryPoolsRequest;
                fromPartial(object: Partial<_27.QueryPoolsRequest>): _27.QueryPoolsRequest;
                fromAmino(object: _27.QueryPoolsRequestAmino): _27.QueryPoolsRequest;
                toAmino(message: _27.QueryPoolsRequest): _27.QueryPoolsRequestAmino;
                fromAminoMsg(object: _27.QueryPoolsRequestAminoMsg): _27.QueryPoolsRequest;
                fromProtoMsg(message: _27.QueryPoolsRequestProtoMsg): _27.QueryPoolsRequest;
                toProto(message: _27.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryPoolsRequest): _27.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _27.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryPoolsResponse;
                fromPartial(object: Partial<_27.QueryPoolsResponse>): _27.QueryPoolsResponse;
                fromAmino(object: _27.QueryPoolsResponseAmino): _27.QueryPoolsResponse;
                toAmino(message: _27.QueryPoolsResponse): _27.QueryPoolsResponseAmino;
                fromAminoMsg(object: _27.QueryPoolsResponseAminoMsg): _27.QueryPoolsResponse;
                fromProtoMsg(message: _27.QueryPoolsResponseProtoMsg): _27.QueryPoolsResponse;
                toProto(message: _27.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryPoolsResponse): _27.QueryPoolsResponseProtoMsg;
            };
            PoolResponse: {
                typeUrl: string;
                encode(message: _27.PoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.PoolResponse;
                fromPartial(object: Partial<_27.PoolResponse>): _27.PoolResponse;
                fromAmino(object: _27.PoolResponseAmino): _27.PoolResponse;
                toAmino(message: _27.PoolResponse): _27.PoolResponseAmino;
                fromAminoMsg(object: _27.PoolResponseAminoMsg): _27.PoolResponse;
                fromProtoMsg(message: _27.PoolResponseProtoMsg): _27.PoolResponse;
                toProto(message: _27.PoolResponse): Uint8Array;
                toProtoMsg(message: _27.PoolResponse): _27.PoolResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _27.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryPoolRequest;
                fromPartial(object: Partial<_27.QueryPoolRequest>): _27.QueryPoolRequest;
                fromAmino(object: _27.QueryPoolRequestAmino): _27.QueryPoolRequest;
                toAmino(message: _27.QueryPoolRequest): _27.QueryPoolRequestAmino;
                fromAminoMsg(object: _27.QueryPoolRequestAminoMsg): _27.QueryPoolRequest;
                fromProtoMsg(message: _27.QueryPoolRequestProtoMsg): _27.QueryPoolRequest;
                toProto(message: _27.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _27.QueryPoolRequest): _27.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _27.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryPoolResponse;
                fromPartial(object: Partial<_27.QueryPoolResponse>): _27.QueryPoolResponse;
                fromAmino(object: _27.QueryPoolResponseAmino): _27.QueryPoolResponse;
                toAmino(message: _27.QueryPoolResponse): _27.QueryPoolResponseAmino;
                fromAminoMsg(object: _27.QueryPoolResponseAminoMsg): _27.QueryPoolResponse;
                fromProtoMsg(message: _27.QueryPoolResponseProtoMsg): _27.QueryPoolResponse;
                toProto(message: _27.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _27.QueryPoolResponse): _27.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _26.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryParamsRequest;
                fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
                fromAmino(_: _26.QueryParamsRequestAmino): _26.QueryParamsRequest;
                toAmino(_: _26.QueryParamsRequest): _26.QueryParamsRequestAmino;
                fromAminoMsg(object: _26.QueryParamsRequestAminoMsg): _26.QueryParamsRequest;
                fromProtoMsg(message: _26.QueryParamsRequestProtoMsg): _26.QueryParamsRequest;
                toProto(message: _26.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _26.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryParamsResponse;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
                fromAmino(object: _26.QueryParamsResponseAmino): _26.QueryParamsResponse;
                toAmino(message: _26.QueryParamsResponse): _26.QueryParamsResponseAmino;
                fromAminoMsg(object: _26.QueryParamsResponseAminoMsg): _26.QueryParamsResponse;
                fromProtoMsg(message: _26.QueryParamsResponseProtoMsg): _26.QueryParamsResponse;
                toProto(message: _26.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseProtoMsg;
            };
            QueryDelegatorRequest: {
                typeUrl: string;
                encode(message: _25.QueryDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryDelegatorRequest;
                fromPartial(object: Partial<_25.QueryDelegatorRequest>): _25.QueryDelegatorRequest;
                fromAmino(object: _25.QueryDelegatorRequestAmino): _25.QueryDelegatorRequest;
                toAmino(message: _25.QueryDelegatorRequest): _25.QueryDelegatorRequestAmino;
                fromAminoMsg(object: _25.QueryDelegatorRequestAminoMsg): _25.QueryDelegatorRequest;
                fromProtoMsg(message: _25.QueryDelegatorRequestProtoMsg): _25.QueryDelegatorRequest;
                toProto(message: _25.QueryDelegatorRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorRequest): _25.QueryDelegatorRequestProtoMsg;
            };
            QueryDelegatorResponse: {
                typeUrl: string;
                encode(message: _25.QueryDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryDelegatorResponse;
                fromPartial(object: Partial<_25.QueryDelegatorResponse>): _25.QueryDelegatorResponse;
                fromAmino(object: _25.QueryDelegatorResponseAmino): _25.QueryDelegatorResponse;
                toAmino(message: _25.QueryDelegatorResponse): _25.QueryDelegatorResponseAmino;
                fromAminoMsg(object: _25.QueryDelegatorResponseAminoMsg): _25.QueryDelegatorResponse;
                fromProtoMsg(message: _25.QueryDelegatorResponseProtoMsg): _25.QueryDelegatorResponse;
                toProto(message: _25.QueryDelegatorResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorResponse): _25.QueryDelegatorResponseProtoMsg;
            };
            StakerDelegatorResponse: {
                typeUrl: string;
                encode(message: _25.StakerDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.StakerDelegatorResponse;
                fromPartial(object: Partial<_25.StakerDelegatorResponse>): _25.StakerDelegatorResponse;
                fromAmino(object: _25.StakerDelegatorResponseAmino): _25.StakerDelegatorResponse;
                toAmino(message: _25.StakerDelegatorResponse): _25.StakerDelegatorResponseAmino;
                fromAminoMsg(object: _25.StakerDelegatorResponseAminoMsg): _25.StakerDelegatorResponse;
                fromProtoMsg(message: _25.StakerDelegatorResponseProtoMsg): _25.StakerDelegatorResponse;
                toProto(message: _25.StakerDelegatorResponse): Uint8Array;
                toProtoMsg(message: _25.StakerDelegatorResponse): _25.StakerDelegatorResponseProtoMsg;
            };
            QueryDelegatorsByStakerRequest: {
                typeUrl: string;
                encode(message: _25.QueryDelegatorsByStakerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryDelegatorsByStakerRequest;
                fromPartial(object: Partial<_25.QueryDelegatorsByStakerRequest>): _25.QueryDelegatorsByStakerRequest;
                fromAmino(object: _25.QueryDelegatorsByStakerRequestAmino): _25.QueryDelegatorsByStakerRequest;
                toAmino(message: _25.QueryDelegatorsByStakerRequest): _25.QueryDelegatorsByStakerRequestAmino;
                fromAminoMsg(object: _25.QueryDelegatorsByStakerRequestAminoMsg): _25.QueryDelegatorsByStakerRequest;
                fromProtoMsg(message: _25.QueryDelegatorsByStakerRequestProtoMsg): _25.QueryDelegatorsByStakerRequest;
                toProto(message: _25.QueryDelegatorsByStakerRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorsByStakerRequest): _25.QueryDelegatorsByStakerRequestProtoMsg;
            };
            QueryDelegatorsByStakerResponse: {
                typeUrl: string;
                encode(message: _25.QueryDelegatorsByStakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryDelegatorsByStakerResponse;
                fromPartial(object: Partial<_25.QueryDelegatorsByStakerResponse>): _25.QueryDelegatorsByStakerResponse;
                fromAmino(object: _25.QueryDelegatorsByStakerResponseAmino): _25.QueryDelegatorsByStakerResponse;
                toAmino(message: _25.QueryDelegatorsByStakerResponse): _25.QueryDelegatorsByStakerResponseAmino;
                fromAminoMsg(object: _25.QueryDelegatorsByStakerResponseAminoMsg): _25.QueryDelegatorsByStakerResponse;
                fromProtoMsg(message: _25.QueryDelegatorsByStakerResponseProtoMsg): _25.QueryDelegatorsByStakerResponse;
                toProto(message: _25.QueryDelegatorsByStakerResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDelegatorsByStakerResponse): _25.QueryDelegatorsByStakerResponseProtoMsg;
            };
            QueryStakersByDelegatorRequest: {
                typeUrl: string;
                encode(message: _25.QueryStakersByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryStakersByDelegatorRequest;
                fromPartial(object: Partial<_25.QueryStakersByDelegatorRequest>): _25.QueryStakersByDelegatorRequest;
                fromAmino(object: _25.QueryStakersByDelegatorRequestAmino): _25.QueryStakersByDelegatorRequest;
                toAmino(message: _25.QueryStakersByDelegatorRequest): _25.QueryStakersByDelegatorRequestAmino;
                fromAminoMsg(object: _25.QueryStakersByDelegatorRequestAminoMsg): _25.QueryStakersByDelegatorRequest;
                fromProtoMsg(message: _25.QueryStakersByDelegatorRequestProtoMsg): _25.QueryStakersByDelegatorRequest;
                toProto(message: _25.QueryStakersByDelegatorRequest): Uint8Array;
                toProtoMsg(message: _25.QueryStakersByDelegatorRequest): _25.QueryStakersByDelegatorRequestProtoMsg;
            };
            QueryStakersByDelegatorResponse: {
                typeUrl: string;
                encode(message: _25.QueryStakersByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.QueryStakersByDelegatorResponse;
                fromPartial(object: Partial<_25.QueryStakersByDelegatorResponse>): _25.QueryStakersByDelegatorResponse;
                fromAmino(object: _25.QueryStakersByDelegatorResponseAmino): _25.QueryStakersByDelegatorResponse;
                toAmino(message: _25.QueryStakersByDelegatorResponse): _25.QueryStakersByDelegatorResponseAmino;
                fromAminoMsg(object: _25.QueryStakersByDelegatorResponseAminoMsg): _25.QueryStakersByDelegatorResponse;
                fromProtoMsg(message: _25.QueryStakersByDelegatorResponseProtoMsg): _25.QueryStakersByDelegatorResponse;
                toProto(message: _25.QueryStakersByDelegatorResponse): Uint8Array;
                toProtoMsg(message: _25.QueryStakersByDelegatorResponse): _25.QueryStakersByDelegatorResponseProtoMsg;
            };
            DelegationForStakerResponse: {
                typeUrl: string;
                encode(message: _25.DelegationForStakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.DelegationForStakerResponse;
                fromPartial(object: Partial<_25.DelegationForStakerResponse>): _25.DelegationForStakerResponse;
                fromAmino(object: _25.DelegationForStakerResponseAmino): _25.DelegationForStakerResponse;
                toAmino(message: _25.DelegationForStakerResponse): _25.DelegationForStakerResponseAmino;
                fromAminoMsg(object: _25.DelegationForStakerResponseAminoMsg): _25.DelegationForStakerResponse;
                fromProtoMsg(message: _25.DelegationForStakerResponseProtoMsg): _25.DelegationForStakerResponse;
                toProto(message: _25.DelegationForStakerResponse): Uint8Array;
                toProtoMsg(message: _25.DelegationForStakerResponse): _25.DelegationForStakerResponseProtoMsg;
            };
            FinalizedBundle: {
                typeUrl: string;
                encode(message: _24.FinalizedBundle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.FinalizedBundle;
                fromPartial(object: Partial<_24.FinalizedBundle>): _24.FinalizedBundle;
                fromAmino(object: _24.FinalizedBundleAmino): _24.FinalizedBundle;
                toAmino(message: _24.FinalizedBundle): _24.FinalizedBundleAmino;
                fromAminoMsg(object: _24.FinalizedBundleAminoMsg): _24.FinalizedBundle;
                fromProtoMsg(message: _24.FinalizedBundleProtoMsg): _24.FinalizedBundle;
                toProto(message: _24.FinalizedBundle): Uint8Array;
                toProtoMsg(message: _24.FinalizedBundle): _24.FinalizedBundleProtoMsg;
            };
            FinalizedAt: {
                typeUrl: string;
                encode(message: _24.FinalizedAt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.FinalizedAt;
                fromPartial(object: Partial<_24.FinalizedAt>): _24.FinalizedAt;
                fromAmino(object: _24.FinalizedAtAmino): _24.FinalizedAt;
                toAmino(message: _24.FinalizedAt): _24.FinalizedAtAmino;
                fromAminoMsg(object: _24.FinalizedAtAminoMsg): _24.FinalizedAt;
                fromProtoMsg(message: _24.FinalizedAtProtoMsg): _24.FinalizedAt;
                toProto(message: _24.FinalizedAt): Uint8Array;
                toProtoMsg(message: _24.FinalizedAt): _24.FinalizedAtProtoMsg;
            };
            StakeSecurity: {
                typeUrl: string;
                encode(message: _24.StakeSecurity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.StakeSecurity;
                fromPartial(object: Partial<_24.StakeSecurity>): _24.StakeSecurity;
                fromAmino(object: _24.StakeSecurityAmino): _24.StakeSecurity;
                toAmino(message: _24.StakeSecurity): _24.StakeSecurityAmino;
                fromAminoMsg(object: _24.StakeSecurityAminoMsg): _24.StakeSecurity;
                fromProtoMsg(message: _24.StakeSecurityProtoMsg): _24.StakeSecurity;
                toProto(message: _24.StakeSecurity): Uint8Array;
                toProtoMsg(message: _24.StakeSecurity): _24.StakeSecurityProtoMsg;
            };
            QueryFinalizedBundlesRequest: {
                typeUrl: string;
                encode(message: _24.QueryFinalizedBundlesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryFinalizedBundlesRequest;
                fromPartial(object: Partial<_24.QueryFinalizedBundlesRequest>): _24.QueryFinalizedBundlesRequest;
                fromAmino(object: _24.QueryFinalizedBundlesRequestAmino): _24.QueryFinalizedBundlesRequest;
                toAmino(message: _24.QueryFinalizedBundlesRequest): _24.QueryFinalizedBundlesRequestAmino;
                fromAminoMsg(object: _24.QueryFinalizedBundlesRequestAminoMsg): _24.QueryFinalizedBundlesRequest;
                fromProtoMsg(message: _24.QueryFinalizedBundlesRequestProtoMsg): _24.QueryFinalizedBundlesRequest;
                toProto(message: _24.QueryFinalizedBundlesRequest): Uint8Array;
                toProtoMsg(message: _24.QueryFinalizedBundlesRequest): _24.QueryFinalizedBundlesRequestProtoMsg;
            };
            QueryFinalizedBundlesResponse: {
                typeUrl: string;
                encode(message: _24.QueryFinalizedBundlesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryFinalizedBundlesResponse;
                fromPartial(object: Partial<_24.QueryFinalizedBundlesResponse>): _24.QueryFinalizedBundlesResponse;
                fromAmino(object: _24.QueryFinalizedBundlesResponseAmino): _24.QueryFinalizedBundlesResponse;
                toAmino(message: _24.QueryFinalizedBundlesResponse): _24.QueryFinalizedBundlesResponseAmino;
                fromAminoMsg(object: _24.QueryFinalizedBundlesResponseAminoMsg): _24.QueryFinalizedBundlesResponse;
                fromProtoMsg(message: _24.QueryFinalizedBundlesResponseProtoMsg): _24.QueryFinalizedBundlesResponse;
                toProto(message: _24.QueryFinalizedBundlesResponse): Uint8Array;
                toProtoMsg(message: _24.QueryFinalizedBundlesResponse): _24.QueryFinalizedBundlesResponseProtoMsg;
            };
            QueryFinalizedBundleRequest: {
                typeUrl: string;
                encode(message: _24.QueryFinalizedBundleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryFinalizedBundleRequest;
                fromPartial(object: Partial<_24.QueryFinalizedBundleRequest>): _24.QueryFinalizedBundleRequest;
                fromAmino(object: _24.QueryFinalizedBundleRequestAmino): _24.QueryFinalizedBundleRequest;
                toAmino(message: _24.QueryFinalizedBundleRequest): _24.QueryFinalizedBundleRequestAmino;
                fromAminoMsg(object: _24.QueryFinalizedBundleRequestAminoMsg): _24.QueryFinalizedBundleRequest;
                fromProtoMsg(message: _24.QueryFinalizedBundleRequestProtoMsg): _24.QueryFinalizedBundleRequest;
                toProto(message: _24.QueryFinalizedBundleRequest): Uint8Array;
                toProtoMsg(message: _24.QueryFinalizedBundleRequest): _24.QueryFinalizedBundleRequestProtoMsg;
            };
            QueryFinalizedBundleResponse: {
                typeUrl: string;
                encode(message: _24.QueryFinalizedBundleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryFinalizedBundleResponse;
                fromPartial(object: Partial<_24.QueryFinalizedBundleResponse>): _24.QueryFinalizedBundleResponse;
                fromAmino(object: _24.QueryFinalizedBundleResponseAmino): _24.QueryFinalizedBundleResponse;
                toAmino(message: _24.QueryFinalizedBundleResponse): _24.QueryFinalizedBundleResponseAmino;
                fromAminoMsg(object: _24.QueryFinalizedBundleResponseAminoMsg): _24.QueryFinalizedBundleResponse;
                fromProtoMsg(message: _24.QueryFinalizedBundleResponseProtoMsg): _24.QueryFinalizedBundleResponse;
                toProto(message: _24.QueryFinalizedBundleResponse): Uint8Array;
                toProtoMsg(message: _24.QueryFinalizedBundleResponse): _24.QueryFinalizedBundleResponseProtoMsg;
            };
            QueryCurrentVoteStatusRequest: {
                typeUrl: string;
                encode(message: _24.QueryCurrentVoteStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryCurrentVoteStatusRequest;
                fromPartial(object: Partial<_24.QueryCurrentVoteStatusRequest>): _24.QueryCurrentVoteStatusRequest;
                fromAmino(object: _24.QueryCurrentVoteStatusRequestAmino): _24.QueryCurrentVoteStatusRequest;
                toAmino(message: _24.QueryCurrentVoteStatusRequest): _24.QueryCurrentVoteStatusRequestAmino;
                fromAminoMsg(object: _24.QueryCurrentVoteStatusRequestAminoMsg): _24.QueryCurrentVoteStatusRequest;
                fromProtoMsg(message: _24.QueryCurrentVoteStatusRequestProtoMsg): _24.QueryCurrentVoteStatusRequest;
                toProto(message: _24.QueryCurrentVoteStatusRequest): Uint8Array;
                toProtoMsg(message: _24.QueryCurrentVoteStatusRequest): _24.QueryCurrentVoteStatusRequestProtoMsg;
            };
            QueryCurrentVoteStatusResponse: {
                typeUrl: string;
                encode(message: _24.QueryCurrentVoteStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryCurrentVoteStatusResponse;
                fromPartial(object: Partial<_24.QueryCurrentVoteStatusResponse>): _24.QueryCurrentVoteStatusResponse;
                fromAmino(object: _24.QueryCurrentVoteStatusResponseAmino): _24.QueryCurrentVoteStatusResponse;
                toAmino(message: _24.QueryCurrentVoteStatusResponse): _24.QueryCurrentVoteStatusResponseAmino;
                fromAminoMsg(object: _24.QueryCurrentVoteStatusResponseAminoMsg): _24.QueryCurrentVoteStatusResponse;
                fromProtoMsg(message: _24.QueryCurrentVoteStatusResponseProtoMsg): _24.QueryCurrentVoteStatusResponse;
                toProto(message: _24.QueryCurrentVoteStatusResponse): Uint8Array;
                toProtoMsg(message: _24.QueryCurrentVoteStatusResponse): _24.QueryCurrentVoteStatusResponseProtoMsg;
            };
            QueryCanValidateRequest: {
                typeUrl: string;
                encode(message: _24.QueryCanValidateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryCanValidateRequest;
                fromPartial(object: Partial<_24.QueryCanValidateRequest>): _24.QueryCanValidateRequest;
                fromAmino(object: _24.QueryCanValidateRequestAmino): _24.QueryCanValidateRequest;
                toAmino(message: _24.QueryCanValidateRequest): _24.QueryCanValidateRequestAmino;
                fromAminoMsg(object: _24.QueryCanValidateRequestAminoMsg): _24.QueryCanValidateRequest;
                fromProtoMsg(message: _24.QueryCanValidateRequestProtoMsg): _24.QueryCanValidateRequest;
                toProto(message: _24.QueryCanValidateRequest): Uint8Array;
                toProtoMsg(message: _24.QueryCanValidateRequest): _24.QueryCanValidateRequestProtoMsg;
            };
            QueryCanValidateResponse: {
                typeUrl: string;
                encode(message: _24.QueryCanValidateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryCanValidateResponse;
                fromPartial(object: Partial<_24.QueryCanValidateResponse>): _24.QueryCanValidateResponse;
                fromAmino(object: _24.QueryCanValidateResponseAmino): _24.QueryCanValidateResponse;
                toAmino(message: _24.QueryCanValidateResponse): _24.QueryCanValidateResponseAmino;
                fromAminoMsg(object: _24.QueryCanValidateResponseAminoMsg): _24.QueryCanValidateResponse;
                fromProtoMsg(message: _24.QueryCanValidateResponseProtoMsg): _24.QueryCanValidateResponse;
                toProto(message: _24.QueryCanValidateResponse): Uint8Array;
                toProtoMsg(message: _24.QueryCanValidateResponse): _24.QueryCanValidateResponseProtoMsg;
            };
            QueryCanProposeRequest: {
                typeUrl: string;
                encode(message: _24.QueryCanProposeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryCanProposeRequest;
                fromPartial(object: Partial<_24.QueryCanProposeRequest>): _24.QueryCanProposeRequest;
                fromAmino(object: _24.QueryCanProposeRequestAmino): _24.QueryCanProposeRequest;
                toAmino(message: _24.QueryCanProposeRequest): _24.QueryCanProposeRequestAmino;
                fromAminoMsg(object: _24.QueryCanProposeRequestAminoMsg): _24.QueryCanProposeRequest;
                fromProtoMsg(message: _24.QueryCanProposeRequestProtoMsg): _24.QueryCanProposeRequest;
                toProto(message: _24.QueryCanProposeRequest): Uint8Array;
                toProtoMsg(message: _24.QueryCanProposeRequest): _24.QueryCanProposeRequestProtoMsg;
            };
            QueryCanProposeResponse: {
                typeUrl: string;
                encode(message: _24.QueryCanProposeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryCanProposeResponse;
                fromPartial(object: Partial<_24.QueryCanProposeResponse>): _24.QueryCanProposeResponse;
                fromAmino(object: _24.QueryCanProposeResponseAmino): _24.QueryCanProposeResponse;
                toAmino(message: _24.QueryCanProposeResponse): _24.QueryCanProposeResponseAmino;
                fromAminoMsg(object: _24.QueryCanProposeResponseAminoMsg): _24.QueryCanProposeResponse;
                fromProtoMsg(message: _24.QueryCanProposeResponseProtoMsg): _24.QueryCanProposeResponse;
                toProto(message: _24.QueryCanProposeResponse): Uint8Array;
                toProtoMsg(message: _24.QueryCanProposeResponse): _24.QueryCanProposeResponseProtoMsg;
            };
            QueryCanVoteRequest: {
                typeUrl: string;
                encode(message: _24.QueryCanVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryCanVoteRequest;
                fromPartial(object: Partial<_24.QueryCanVoteRequest>): _24.QueryCanVoteRequest;
                fromAmino(object: _24.QueryCanVoteRequestAmino): _24.QueryCanVoteRequest;
                toAmino(message: _24.QueryCanVoteRequest): _24.QueryCanVoteRequestAmino;
                fromAminoMsg(object: _24.QueryCanVoteRequestAminoMsg): _24.QueryCanVoteRequest;
                fromProtoMsg(message: _24.QueryCanVoteRequestProtoMsg): _24.QueryCanVoteRequest;
                toProto(message: _24.QueryCanVoteRequest): Uint8Array;
                toProtoMsg(message: _24.QueryCanVoteRequest): _24.QueryCanVoteRequestProtoMsg;
            };
            QueryCanVoteResponse: {
                typeUrl: string;
                encode(message: _24.QueryCanVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryCanVoteResponse;
                fromPartial(object: Partial<_24.QueryCanVoteResponse>): _24.QueryCanVoteResponse;
                fromAmino(object: _24.QueryCanVoteResponseAmino): _24.QueryCanVoteResponse;
                toAmino(message: _24.QueryCanVoteResponse): _24.QueryCanVoteResponseAmino;
                fromAminoMsg(object: _24.QueryCanVoteResponseAminoMsg): _24.QueryCanVoteResponse;
                fromProtoMsg(message: _24.QueryCanVoteResponseProtoMsg): _24.QueryCanVoteResponse;
                toProto(message: _24.QueryCanVoteResponse): Uint8Array;
                toProtoMsg(message: _24.QueryCanVoteResponse): _24.QueryCanVoteResponseProtoMsg;
            };
            QueryAccountAssetsRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountAssetsRequest;
                fromPartial(object: Partial<_23.QueryAccountAssetsRequest>): _23.QueryAccountAssetsRequest;
                fromAmino(object: _23.QueryAccountAssetsRequestAmino): _23.QueryAccountAssetsRequest;
                toAmino(message: _23.QueryAccountAssetsRequest): _23.QueryAccountAssetsRequestAmino;
                fromAminoMsg(object: _23.QueryAccountAssetsRequestAminoMsg): _23.QueryAccountAssetsRequest;
                fromProtoMsg(message: _23.QueryAccountAssetsRequestProtoMsg): _23.QueryAccountAssetsRequest;
                toProto(message: _23.QueryAccountAssetsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountAssetsRequest): _23.QueryAccountAssetsRequestProtoMsg;
            };
            QueryAccountAssetsResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountAssetsResponse;
                fromPartial(object: Partial<_23.QueryAccountAssetsResponse>): _23.QueryAccountAssetsResponse;
                fromAmino(object: _23.QueryAccountAssetsResponseAmino): _23.QueryAccountAssetsResponse;
                toAmino(message: _23.QueryAccountAssetsResponse): _23.QueryAccountAssetsResponseAmino;
                fromAminoMsg(object: _23.QueryAccountAssetsResponseAminoMsg): _23.QueryAccountAssetsResponse;
                fromProtoMsg(message: _23.QueryAccountAssetsResponseProtoMsg): _23.QueryAccountAssetsResponse;
                toProto(message: _23.QueryAccountAssetsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountAssetsResponse): _23.QueryAccountAssetsResponseProtoMsg;
            };
            QueryAccountDelegationUnbondingsRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountDelegationUnbondingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountDelegationUnbondingsRequest;
                fromPartial(object: Partial<_23.QueryAccountDelegationUnbondingsRequest>): _23.QueryAccountDelegationUnbondingsRequest;
                fromAmino(object: _23.QueryAccountDelegationUnbondingsRequestAmino): _23.QueryAccountDelegationUnbondingsRequest;
                toAmino(message: _23.QueryAccountDelegationUnbondingsRequest): _23.QueryAccountDelegationUnbondingsRequestAmino;
                fromAminoMsg(object: _23.QueryAccountDelegationUnbondingsRequestAminoMsg): _23.QueryAccountDelegationUnbondingsRequest;
                fromProtoMsg(message: _23.QueryAccountDelegationUnbondingsRequestProtoMsg): _23.QueryAccountDelegationUnbondingsRequest;
                toProto(message: _23.QueryAccountDelegationUnbondingsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountDelegationUnbondingsRequest): _23.QueryAccountDelegationUnbondingsRequestProtoMsg;
            };
            QueryAccountDelegationUnbondingsResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountDelegationUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountDelegationUnbondingsResponse;
                fromPartial(object: Partial<_23.QueryAccountDelegationUnbondingsResponse>): _23.QueryAccountDelegationUnbondingsResponse;
                fromAmino(object: _23.QueryAccountDelegationUnbondingsResponseAmino): _23.QueryAccountDelegationUnbondingsResponse;
                toAmino(message: _23.QueryAccountDelegationUnbondingsResponse): _23.QueryAccountDelegationUnbondingsResponseAmino;
                fromAminoMsg(object: _23.QueryAccountDelegationUnbondingsResponseAminoMsg): _23.QueryAccountDelegationUnbondingsResponse;
                fromProtoMsg(message: _23.QueryAccountDelegationUnbondingsResponseProtoMsg): _23.QueryAccountDelegationUnbondingsResponse;
                toProto(message: _23.QueryAccountDelegationUnbondingsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountDelegationUnbondingsResponse): _23.QueryAccountDelegationUnbondingsResponseProtoMsg;
            };
            DelegationUnbonding: {
                typeUrl: string;
                encode(message: _23.DelegationUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.DelegationUnbonding;
                fromPartial(object: Partial<_23.DelegationUnbonding>): _23.DelegationUnbonding;
                fromAmino(object: _23.DelegationUnbondingAmino): _23.DelegationUnbonding;
                toAmino(message: _23.DelegationUnbonding): _23.DelegationUnbondingAmino;
                fromAminoMsg(object: _23.DelegationUnbondingAminoMsg): _23.DelegationUnbonding;
                fromProtoMsg(message: _23.DelegationUnbondingProtoMsg): _23.DelegationUnbonding;
                toProto(message: _23.DelegationUnbonding): Uint8Array;
                toProtoMsg(message: _23.DelegationUnbonding): _23.DelegationUnbondingProtoMsg;
            };
            QueryAccountFundedListRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountFundedListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountFundedListRequest;
                fromPartial(object: Partial<_23.QueryAccountFundedListRequest>): _23.QueryAccountFundedListRequest;
                fromAmino(object: _23.QueryAccountFundedListRequestAmino): _23.QueryAccountFundedListRequest;
                toAmino(message: _23.QueryAccountFundedListRequest): _23.QueryAccountFundedListRequestAmino;
                fromAminoMsg(object: _23.QueryAccountFundedListRequestAminoMsg): _23.QueryAccountFundedListRequest;
                fromProtoMsg(message: _23.QueryAccountFundedListRequestProtoMsg): _23.QueryAccountFundedListRequest;
                toProto(message: _23.QueryAccountFundedListRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountFundedListRequest): _23.QueryAccountFundedListRequestProtoMsg;
            };
            QueryAccountFundedListResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountFundedListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountFundedListResponse;
                fromPartial(object: Partial<_23.QueryAccountFundedListResponse>): _23.QueryAccountFundedListResponse;
                fromAmino(object: _23.QueryAccountFundedListResponseAmino): _23.QueryAccountFundedListResponse;
                toAmino(message: _23.QueryAccountFundedListResponse): _23.QueryAccountFundedListResponseAmino;
                fromAminoMsg(object: _23.QueryAccountFundedListResponseAminoMsg): _23.QueryAccountFundedListResponse;
                fromProtoMsg(message: _23.QueryAccountFundedListResponseProtoMsg): _23.QueryAccountFundedListResponse;
                toProto(message: _23.QueryAccountFundedListResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountFundedListResponse): _23.QueryAccountFundedListResponseProtoMsg;
            };
            Funded: {
                typeUrl: string;
                encode(message: _23.Funded, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Funded;
                fromPartial(object: Partial<_23.Funded>): _23.Funded;
                fromAmino(object: _23.FundedAmino): _23.Funded;
                toAmino(message: _23.Funded): _23.FundedAmino;
                fromAminoMsg(object: _23.FundedAminoMsg): _23.Funded;
                fromProtoMsg(message: _23.FundedProtoMsg): _23.Funded;
                toProto(message: _23.Funded): Uint8Array;
                toProtoMsg(message: _23.Funded): _23.FundedProtoMsg;
            };
            QueryAccountRedelegationRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountRedelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountRedelegationRequest;
                fromPartial(object: Partial<_23.QueryAccountRedelegationRequest>): _23.QueryAccountRedelegationRequest;
                fromAmino(object: _23.QueryAccountRedelegationRequestAmino): _23.QueryAccountRedelegationRequest;
                toAmino(message: _23.QueryAccountRedelegationRequest): _23.QueryAccountRedelegationRequestAmino;
                fromAminoMsg(object: _23.QueryAccountRedelegationRequestAminoMsg): _23.QueryAccountRedelegationRequest;
                fromProtoMsg(message: _23.QueryAccountRedelegationRequestProtoMsg): _23.QueryAccountRedelegationRequest;
                toProto(message: _23.QueryAccountRedelegationRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountRedelegationRequest): _23.QueryAccountRedelegationRequestProtoMsg;
            };
            QueryAccountRedelegationResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountRedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountRedelegationResponse;
                fromPartial(object: Partial<_23.QueryAccountRedelegationResponse>): _23.QueryAccountRedelegationResponse;
                fromAmino(object: _23.QueryAccountRedelegationResponseAmino): _23.QueryAccountRedelegationResponse;
                toAmino(message: _23.QueryAccountRedelegationResponse): _23.QueryAccountRedelegationResponseAmino;
                fromAminoMsg(object: _23.QueryAccountRedelegationResponseAminoMsg): _23.QueryAccountRedelegationResponse;
                fromProtoMsg(message: _23.QueryAccountRedelegationResponseProtoMsg): _23.QueryAccountRedelegationResponse;
                toProto(message: _23.QueryAccountRedelegationResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountRedelegationResponse): _23.QueryAccountRedelegationResponseProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _23.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.RedelegationEntry;
                fromPartial(object: Partial<_23.RedelegationEntry>): _23.RedelegationEntry;
                fromAmino(object: _23.RedelegationEntryAmino): _23.RedelegationEntry;
                toAmino(message: _23.RedelegationEntry): _23.RedelegationEntryAmino;
                fromAminoMsg(object: _23.RedelegationEntryAminoMsg): _23.RedelegationEntry;
                fromProtoMsg(message: _23.RedelegationEntryProtoMsg): _23.RedelegationEntry;
                toProto(message: _23.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _23.RedelegationEntry): _23.RedelegationEntryProtoMsg;
            };
        };
    }
    namespace stakers {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createStaker(value: _35.MsgCreateStaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateMetadata(value: _35.MsgUpdateMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateCommission(value: _35.MsgUpdateCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimCommissionRewards(value: _35.MsgClaimCommissionRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinPool(value: _35.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leavePool(value: _35.MsgLeavePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _35.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createStaker(value: _35.MsgCreateStaker): {
                        typeUrl: string;
                        value: _35.MsgCreateStaker;
                    };
                    updateMetadata(value: _35.MsgUpdateMetadata): {
                        typeUrl: string;
                        value: _35.MsgUpdateMetadata;
                    };
                    updateCommission(value: _35.MsgUpdateCommission): {
                        typeUrl: string;
                        value: _35.MsgUpdateCommission;
                    };
                    claimCommissionRewards(value: _35.MsgClaimCommissionRewards): {
                        typeUrl: string;
                        value: _35.MsgClaimCommissionRewards;
                    };
                    joinPool(value: _35.MsgJoinPool): {
                        typeUrl: string;
                        value: _35.MsgJoinPool;
                    };
                    leavePool(value: _35.MsgLeavePool): {
                        typeUrl: string;
                        value: _35.MsgLeavePool;
                    };
                    updateParams(value: _35.MsgUpdateParams): {
                        typeUrl: string;
                        value: _35.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createStaker(value: any): {
                        typeUrl: string;
                        value: _35.MsgCreateStaker;
                    };
                    updateMetadata(value: any): {
                        typeUrl: string;
                        value: _35.MsgUpdateMetadata;
                    };
                    updateCommission(value: any): {
                        typeUrl: string;
                        value: _35.MsgUpdateCommission;
                    };
                    claimCommissionRewards(value: any): {
                        typeUrl: string;
                        value: _35.MsgClaimCommissionRewards;
                    };
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _35.MsgJoinPool;
                    };
                    leavePool(value: any): {
                        typeUrl: string;
                        value: _35.MsgLeavePool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _35.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createStaker(value: _35.MsgCreateStaker): {
                        typeUrl: string;
                        value: _35.MsgCreateStaker;
                    };
                    updateMetadata(value: _35.MsgUpdateMetadata): {
                        typeUrl: string;
                        value: _35.MsgUpdateMetadata;
                    };
                    updateCommission(value: _35.MsgUpdateCommission): {
                        typeUrl: string;
                        value: _35.MsgUpdateCommission;
                    };
                    claimCommissionRewards(value: _35.MsgClaimCommissionRewards): {
                        typeUrl: string;
                        value: _35.MsgClaimCommissionRewards;
                    };
                    joinPool(value: _35.MsgJoinPool): {
                        typeUrl: string;
                        value: _35.MsgJoinPool;
                    };
                    leavePool(value: _35.MsgLeavePool): {
                        typeUrl: string;
                        value: _35.MsgLeavePool;
                    };
                    updateParams(value: _35.MsgUpdateParams): {
                        typeUrl: string;
                        value: _35.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.stakers.v1beta1.MsgCreateStaker": {
                    aminoType: string;
                    toAmino: (message: _35.MsgCreateStaker) => _35.MsgCreateStakerAmino;
                    fromAmino: (object: _35.MsgCreateStakerAmino) => _35.MsgCreateStaker;
                };
                "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
                    aminoType: string;
                    toAmino: (message: _35.MsgUpdateMetadata) => _35.MsgUpdateMetadataAmino;
                    fromAmino: (object: _35.MsgUpdateMetadataAmino) => _35.MsgUpdateMetadata;
                };
                "/kyve.stakers.v1beta1.MsgUpdateCommission": {
                    aminoType: string;
                    toAmino: (message: _35.MsgUpdateCommission) => _35.MsgUpdateCommissionAmino;
                    fromAmino: (object: _35.MsgUpdateCommissionAmino) => _35.MsgUpdateCommission;
                };
                "/kyve.stakers.v1beta1.MsgClaimCommissionRewards": {
                    aminoType: string;
                    toAmino: (message: _35.MsgClaimCommissionRewards) => _35.MsgClaimCommissionRewardsAmino;
                    fromAmino: (object: _35.MsgClaimCommissionRewardsAmino) => _35.MsgClaimCommissionRewards;
                };
                "/kyve.stakers.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _35.MsgJoinPool) => _35.MsgJoinPoolAmino;
                    fromAmino: (object: _35.MsgJoinPoolAmino) => _35.MsgJoinPool;
                };
                "/kyve.stakers.v1beta1.MsgLeavePool": {
                    aminoType: string;
                    toAmino: (message: _35.MsgLeavePool) => _35.MsgLeavePoolAmino;
                    fromAmino: (object: _35.MsgLeavePoolAmino) => _35.MsgLeavePool;
                };
                "/kyve.stakers.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _35.MsgUpdateParams) => _35.MsgUpdateParamsAmino;
                    fromAmino: (object: _35.MsgUpdateParamsAmino) => _35.MsgUpdateParams;
                };
            };
            MsgCreateStaker: {
                typeUrl: string;
                encode(message: _35.MsgCreateStaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgCreateStaker;
                fromPartial(object: Partial<_35.MsgCreateStaker>): _35.MsgCreateStaker;
                fromAmino(object: _35.MsgCreateStakerAmino): _35.MsgCreateStaker;
                toAmino(message: _35.MsgCreateStaker): _35.MsgCreateStakerAmino;
                fromAminoMsg(object: _35.MsgCreateStakerAminoMsg): _35.MsgCreateStaker;
                fromProtoMsg(message: _35.MsgCreateStakerProtoMsg): _35.MsgCreateStaker;
                toProto(message: _35.MsgCreateStaker): Uint8Array;
                toProtoMsg(message: _35.MsgCreateStaker): _35.MsgCreateStakerProtoMsg;
            };
            MsgCreateStakerResponse: {
                typeUrl: string;
                encode(_: _35.MsgCreateStakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgCreateStakerResponse;
                fromPartial(_: Partial<_35.MsgCreateStakerResponse>): _35.MsgCreateStakerResponse;
                fromAmino(_: _35.MsgCreateStakerResponseAmino): _35.MsgCreateStakerResponse;
                toAmino(_: _35.MsgCreateStakerResponse): _35.MsgCreateStakerResponseAmino;
                fromAminoMsg(object: _35.MsgCreateStakerResponseAminoMsg): _35.MsgCreateStakerResponse;
                fromProtoMsg(message: _35.MsgCreateStakerResponseProtoMsg): _35.MsgCreateStakerResponse;
                toProto(message: _35.MsgCreateStakerResponse): Uint8Array;
                toProtoMsg(message: _35.MsgCreateStakerResponse): _35.MsgCreateStakerResponseProtoMsg;
            };
            MsgUpdateMetadata: {
                typeUrl: string;
                encode(message: _35.MsgUpdateMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgUpdateMetadata;
                fromPartial(object: Partial<_35.MsgUpdateMetadata>): _35.MsgUpdateMetadata;
                fromAmino(object: _35.MsgUpdateMetadataAmino): _35.MsgUpdateMetadata;
                toAmino(message: _35.MsgUpdateMetadata): _35.MsgUpdateMetadataAmino;
                fromAminoMsg(object: _35.MsgUpdateMetadataAminoMsg): _35.MsgUpdateMetadata;
                fromProtoMsg(message: _35.MsgUpdateMetadataProtoMsg): _35.MsgUpdateMetadata;
                toProto(message: _35.MsgUpdateMetadata): Uint8Array;
                toProtoMsg(message: _35.MsgUpdateMetadata): _35.MsgUpdateMetadataProtoMsg;
            };
            MsgUpdateMetadataResponse: {
                typeUrl: string;
                encode(_: _35.MsgUpdateMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgUpdateMetadataResponse;
                fromPartial(_: Partial<_35.MsgUpdateMetadataResponse>): _35.MsgUpdateMetadataResponse;
                fromAmino(_: _35.MsgUpdateMetadataResponseAmino): _35.MsgUpdateMetadataResponse;
                toAmino(_: _35.MsgUpdateMetadataResponse): _35.MsgUpdateMetadataResponseAmino;
                fromAminoMsg(object: _35.MsgUpdateMetadataResponseAminoMsg): _35.MsgUpdateMetadataResponse;
                fromProtoMsg(message: _35.MsgUpdateMetadataResponseProtoMsg): _35.MsgUpdateMetadataResponse;
                toProto(message: _35.MsgUpdateMetadataResponse): Uint8Array;
                toProtoMsg(message: _35.MsgUpdateMetadataResponse): _35.MsgUpdateMetadataResponseProtoMsg;
            };
            MsgUpdateCommission: {
                typeUrl: string;
                encode(message: _35.MsgUpdateCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgUpdateCommission;
                fromPartial(object: Partial<_35.MsgUpdateCommission>): _35.MsgUpdateCommission;
                fromAmino(object: _35.MsgUpdateCommissionAmino): _35.MsgUpdateCommission;
                toAmino(message: _35.MsgUpdateCommission): _35.MsgUpdateCommissionAmino;
                fromAminoMsg(object: _35.MsgUpdateCommissionAminoMsg): _35.MsgUpdateCommission;
                fromProtoMsg(message: _35.MsgUpdateCommissionProtoMsg): _35.MsgUpdateCommission;
                toProto(message: _35.MsgUpdateCommission): Uint8Array;
                toProtoMsg(message: _35.MsgUpdateCommission): _35.MsgUpdateCommissionProtoMsg;
            };
            MsgUpdateCommissionResponse: {
                typeUrl: string;
                encode(_: _35.MsgUpdateCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgUpdateCommissionResponse;
                fromPartial(_: Partial<_35.MsgUpdateCommissionResponse>): _35.MsgUpdateCommissionResponse;
                fromAmino(_: _35.MsgUpdateCommissionResponseAmino): _35.MsgUpdateCommissionResponse;
                toAmino(_: _35.MsgUpdateCommissionResponse): _35.MsgUpdateCommissionResponseAmino;
                fromAminoMsg(object: _35.MsgUpdateCommissionResponseAminoMsg): _35.MsgUpdateCommissionResponse;
                fromProtoMsg(message: _35.MsgUpdateCommissionResponseProtoMsg): _35.MsgUpdateCommissionResponse;
                toProto(message: _35.MsgUpdateCommissionResponse): Uint8Array;
                toProtoMsg(message: _35.MsgUpdateCommissionResponse): _35.MsgUpdateCommissionResponseProtoMsg;
            };
            MsgClaimCommissionRewards: {
                typeUrl: string;
                encode(message: _35.MsgClaimCommissionRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgClaimCommissionRewards;
                fromPartial(object: Partial<_35.MsgClaimCommissionRewards>): _35.MsgClaimCommissionRewards;
                fromAmino(object: _35.MsgClaimCommissionRewardsAmino): _35.MsgClaimCommissionRewards;
                toAmino(message: _35.MsgClaimCommissionRewards): _35.MsgClaimCommissionRewardsAmino;
                fromAminoMsg(object: _35.MsgClaimCommissionRewardsAminoMsg): _35.MsgClaimCommissionRewards;
                fromProtoMsg(message: _35.MsgClaimCommissionRewardsProtoMsg): _35.MsgClaimCommissionRewards;
                toProto(message: _35.MsgClaimCommissionRewards): Uint8Array;
                toProtoMsg(message: _35.MsgClaimCommissionRewards): _35.MsgClaimCommissionRewardsProtoMsg;
            };
            MsgClaimCommissionRewardsResponse: {
                typeUrl: string;
                encode(_: _35.MsgClaimCommissionRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgClaimCommissionRewardsResponse;
                fromPartial(_: Partial<_35.MsgClaimCommissionRewardsResponse>): _35.MsgClaimCommissionRewardsResponse;
                fromAmino(_: _35.MsgClaimCommissionRewardsResponseAmino): _35.MsgClaimCommissionRewardsResponse;
                toAmino(_: _35.MsgClaimCommissionRewardsResponse): _35.MsgClaimCommissionRewardsResponseAmino;
                fromAminoMsg(object: _35.MsgClaimCommissionRewardsResponseAminoMsg): _35.MsgClaimCommissionRewardsResponse;
                fromProtoMsg(message: _35.MsgClaimCommissionRewardsResponseProtoMsg): _35.MsgClaimCommissionRewardsResponse;
                toProto(message: _35.MsgClaimCommissionRewardsResponse): Uint8Array;
                toProtoMsg(message: _35.MsgClaimCommissionRewardsResponse): _35.MsgClaimCommissionRewardsResponseProtoMsg;
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _35.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgJoinPool;
                fromPartial(object: Partial<_35.MsgJoinPool>): _35.MsgJoinPool;
                fromAmino(object: _35.MsgJoinPoolAmino): _35.MsgJoinPool;
                toAmino(message: _35.MsgJoinPool): _35.MsgJoinPoolAmino;
                fromAminoMsg(object: _35.MsgJoinPoolAminoMsg): _35.MsgJoinPool;
                fromProtoMsg(message: _35.MsgJoinPoolProtoMsg): _35.MsgJoinPool;
                toProto(message: _35.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _35.MsgJoinPool): _35.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(_: _35.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgJoinPoolResponse;
                fromPartial(_: Partial<_35.MsgJoinPoolResponse>): _35.MsgJoinPoolResponse;
                fromAmino(_: _35.MsgJoinPoolResponseAmino): _35.MsgJoinPoolResponse;
                toAmino(_: _35.MsgJoinPoolResponse): _35.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _35.MsgJoinPoolResponseAminoMsg): _35.MsgJoinPoolResponse;
                fromProtoMsg(message: _35.MsgJoinPoolResponseProtoMsg): _35.MsgJoinPoolResponse;
                toProto(message: _35.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _35.MsgJoinPoolResponse): _35.MsgJoinPoolResponseProtoMsg;
            };
            MsgLeavePool: {
                typeUrl: string;
                encode(message: _35.MsgLeavePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgLeavePool;
                fromPartial(object: Partial<_35.MsgLeavePool>): _35.MsgLeavePool;
                fromAmino(object: _35.MsgLeavePoolAmino): _35.MsgLeavePool;
                toAmino(message: _35.MsgLeavePool): _35.MsgLeavePoolAmino;
                fromAminoMsg(object: _35.MsgLeavePoolAminoMsg): _35.MsgLeavePool;
                fromProtoMsg(message: _35.MsgLeavePoolProtoMsg): _35.MsgLeavePool;
                toProto(message: _35.MsgLeavePool): Uint8Array;
                toProtoMsg(message: _35.MsgLeavePool): _35.MsgLeavePoolProtoMsg;
            };
            MsgLeavePoolResponse: {
                typeUrl: string;
                encode(_: _35.MsgLeavePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgLeavePoolResponse;
                fromPartial(_: Partial<_35.MsgLeavePoolResponse>): _35.MsgLeavePoolResponse;
                fromAmino(_: _35.MsgLeavePoolResponseAmino): _35.MsgLeavePoolResponse;
                toAmino(_: _35.MsgLeavePoolResponse): _35.MsgLeavePoolResponseAmino;
                fromAminoMsg(object: _35.MsgLeavePoolResponseAminoMsg): _35.MsgLeavePoolResponse;
                fromProtoMsg(message: _35.MsgLeavePoolResponseProtoMsg): _35.MsgLeavePoolResponse;
                toProto(message: _35.MsgLeavePoolResponse): Uint8Array;
                toProtoMsg(message: _35.MsgLeavePoolResponse): _35.MsgLeavePoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _35.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgUpdateParams;
                fromPartial(object: Partial<_35.MsgUpdateParams>): _35.MsgUpdateParams;
                fromAmino(object: _35.MsgUpdateParamsAmino): _35.MsgUpdateParams;
                toAmino(message: _35.MsgUpdateParams): _35.MsgUpdateParamsAmino;
                fromAminoMsg(object: _35.MsgUpdateParamsAminoMsg): _35.MsgUpdateParams;
                fromProtoMsg(message: _35.MsgUpdateParamsProtoMsg): _35.MsgUpdateParams;
                toProto(message: _35.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _35.MsgUpdateParams): _35.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _35.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_35.MsgUpdateParamsResponse>): _35.MsgUpdateParamsResponse;
                fromAmino(_: _35.MsgUpdateParamsResponseAmino): _35.MsgUpdateParamsResponse;
                toAmino(_: _35.MsgUpdateParamsResponse): _35.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _35.MsgUpdateParamsResponseAminoMsg): _35.MsgUpdateParamsResponse;
                fromProtoMsg(message: _35.MsgUpdateParamsResponseProtoMsg): _35.MsgUpdateParamsResponse;
                toProto(message: _35.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _35.MsgUpdateParamsResponse): _35.MsgUpdateParamsResponseProtoMsg;
            };
            Staker: {
                typeUrl: string;
                encode(message: _34.Staker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Staker;
                fromPartial(object: Partial<_34.Staker>): _34.Staker;
                fromAmino(object: _34.StakerAmino): _34.Staker;
                toAmino(message: _34.Staker): _34.StakerAmino;
                fromAminoMsg(object: _34.StakerAminoMsg): _34.Staker;
                fromProtoMsg(message: _34.StakerProtoMsg): _34.Staker;
                toProto(message: _34.Staker): Uint8Array;
                toProtoMsg(message: _34.Staker): _34.StakerProtoMsg;
            };
            Valaccount: {
                typeUrl: string;
                encode(message: _34.Valaccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Valaccount;
                fromPartial(object: Partial<_34.Valaccount>): _34.Valaccount;
                fromAmino(object: _34.ValaccountAmino): _34.Valaccount;
                toAmino(message: _34.Valaccount): _34.ValaccountAmino;
                fromAminoMsg(object: _34.ValaccountAminoMsg): _34.Valaccount;
                fromProtoMsg(message: _34.ValaccountProtoMsg): _34.Valaccount;
                toProto(message: _34.Valaccount): Uint8Array;
                toProtoMsg(message: _34.Valaccount): _34.ValaccountProtoMsg;
            };
            CommissionChangeEntry: {
                typeUrl: string;
                encode(message: _34.CommissionChangeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.CommissionChangeEntry;
                fromPartial(object: Partial<_34.CommissionChangeEntry>): _34.CommissionChangeEntry;
                fromAmino(object: _34.CommissionChangeEntryAmino): _34.CommissionChangeEntry;
                toAmino(message: _34.CommissionChangeEntry): _34.CommissionChangeEntryAmino;
                fromAminoMsg(object: _34.CommissionChangeEntryAminoMsg): _34.CommissionChangeEntry;
                fromProtoMsg(message: _34.CommissionChangeEntryProtoMsg): _34.CommissionChangeEntry;
                toProto(message: _34.CommissionChangeEntry): Uint8Array;
                toProtoMsg(message: _34.CommissionChangeEntry): _34.CommissionChangeEntryProtoMsg;
            };
            LeavePoolEntry: {
                typeUrl: string;
                encode(message: _34.LeavePoolEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.LeavePoolEntry;
                fromPartial(object: Partial<_34.LeavePoolEntry>): _34.LeavePoolEntry;
                fromAmino(object: _34.LeavePoolEntryAmino): _34.LeavePoolEntry;
                toAmino(message: _34.LeavePoolEntry): _34.LeavePoolEntryAmino;
                fromAminoMsg(object: _34.LeavePoolEntryAminoMsg): _34.LeavePoolEntry;
                fromProtoMsg(message: _34.LeavePoolEntryProtoMsg): _34.LeavePoolEntry;
                toProto(message: _34.LeavePoolEntry): Uint8Array;
                toProtoMsg(message: _34.LeavePoolEntry): _34.LeavePoolEntryProtoMsg;
            };
            QueueState: {
                typeUrl: string;
                encode(message: _34.QueueState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueueState;
                fromPartial(object: Partial<_34.QueueState>): _34.QueueState;
                fromAmino(object: _34.QueueStateAmino): _34.QueueState;
                toAmino(message: _34.QueueState): _34.QueueStateAmino;
                fromAminoMsg(object: _34.QueueStateAminoMsg): _34.QueueState;
                fromProtoMsg(message: _34.QueueStateProtoMsg): _34.QueueState;
                toProto(message: _34.QueueState): Uint8Array;
                toProtoMsg(message: _34.QueueState): _34.QueueStateProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _33.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.QueryParamsRequest;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
                fromAmino(_: _33.QueryParamsRequestAmino): _33.QueryParamsRequest;
                toAmino(_: _33.QueryParamsRequest): _33.QueryParamsRequestAmino;
                fromAminoMsg(object: _33.QueryParamsRequestAminoMsg): _33.QueryParamsRequest;
                fromProtoMsg(message: _33.QueryParamsRequestProtoMsg): _33.QueryParamsRequest;
                toProto(message: _33.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _33.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
                fromAmino(object: _33.QueryParamsResponseAmino): _33.QueryParamsResponse;
                toAmino(message: _33.QueryParamsResponse): _33.QueryParamsResponseAmino;
                fromAminoMsg(object: _33.QueryParamsResponseAminoMsg): _33.QueryParamsResponse;
                fromProtoMsg(message: _33.QueryParamsResponseProtoMsg): _33.QueryParamsResponse;
                toProto(message: _33.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _32.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Params;
                fromPartial(object: Partial<_32.Params>): _32.Params;
                fromAmino(object: _32.ParamsAmino): _32.Params;
                toAmino(message: _32.Params): _32.ParamsAmino;
                fromAminoMsg(object: _32.ParamsAminoMsg): _32.Params;
                fromProtoMsg(message: _32.ParamsProtoMsg): _32.Params;
                toProto(message: _32.Params): Uint8Array;
                toProtoMsg(message: _32.Params): _32.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _31.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
                fromAmino(object: _31.GenesisStateAmino): _31.GenesisState;
                toAmino(message: _31.GenesisState): _31.GenesisStateAmino;
                fromAminoMsg(object: _31.GenesisStateAminoMsg): _31.GenesisState;
                fromProtoMsg(message: _31.GenesisStateProtoMsg): _31.GenesisState;
                toProto(message: _31.GenesisState): Uint8Array;
                toProtoMsg(message: _31.GenesisState): _31.GenesisStateProtoMsg;
            };
            EventUpdateParams: {
                typeUrl: string;
                encode(message: _30.EventUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.EventUpdateParams;
                fromPartial(object: Partial<_30.EventUpdateParams>): _30.EventUpdateParams;
                fromAmino(object: _30.EventUpdateParamsAmino): _30.EventUpdateParams;
                toAmino(message: _30.EventUpdateParams): _30.EventUpdateParamsAmino;
                fromAminoMsg(object: _30.EventUpdateParamsAminoMsg): _30.EventUpdateParams;
                fromProtoMsg(message: _30.EventUpdateParamsProtoMsg): _30.EventUpdateParams;
                toProto(message: _30.EventUpdateParams): Uint8Array;
                toProtoMsg(message: _30.EventUpdateParams): _30.EventUpdateParamsProtoMsg;
            };
            EventCreateStaker: {
                typeUrl: string;
                encode(message: _30.EventCreateStaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.EventCreateStaker;
                fromPartial(object: Partial<_30.EventCreateStaker>): _30.EventCreateStaker;
                fromAmino(object: _30.EventCreateStakerAmino): _30.EventCreateStaker;
                toAmino(message: _30.EventCreateStaker): _30.EventCreateStakerAmino;
                fromAminoMsg(object: _30.EventCreateStakerAminoMsg): _30.EventCreateStaker;
                fromProtoMsg(message: _30.EventCreateStakerProtoMsg): _30.EventCreateStaker;
                toProto(message: _30.EventCreateStaker): Uint8Array;
                toProtoMsg(message: _30.EventCreateStaker): _30.EventCreateStakerProtoMsg;
            };
            EventUpdateMetadata: {
                typeUrl: string;
                encode(message: _30.EventUpdateMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.EventUpdateMetadata;
                fromPartial(object: Partial<_30.EventUpdateMetadata>): _30.EventUpdateMetadata;
                fromAmino(object: _30.EventUpdateMetadataAmino): _30.EventUpdateMetadata;
                toAmino(message: _30.EventUpdateMetadata): _30.EventUpdateMetadataAmino;
                fromAminoMsg(object: _30.EventUpdateMetadataAminoMsg): _30.EventUpdateMetadata;
                fromProtoMsg(message: _30.EventUpdateMetadataProtoMsg): _30.EventUpdateMetadata;
                toProto(message: _30.EventUpdateMetadata): Uint8Array;
                toProtoMsg(message: _30.EventUpdateMetadata): _30.EventUpdateMetadataProtoMsg;
            };
            EventUpdateCommission: {
                typeUrl: string;
                encode(message: _30.EventUpdateCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.EventUpdateCommission;
                fromPartial(object: Partial<_30.EventUpdateCommission>): _30.EventUpdateCommission;
                fromAmino(object: _30.EventUpdateCommissionAmino): _30.EventUpdateCommission;
                toAmino(message: _30.EventUpdateCommission): _30.EventUpdateCommissionAmino;
                fromAminoMsg(object: _30.EventUpdateCommissionAminoMsg): _30.EventUpdateCommission;
                fromProtoMsg(message: _30.EventUpdateCommissionProtoMsg): _30.EventUpdateCommission;
                toProto(message: _30.EventUpdateCommission): Uint8Array;
                toProtoMsg(message: _30.EventUpdateCommission): _30.EventUpdateCommissionProtoMsg;
            };
            EventClaimCommissionRewards: {
                typeUrl: string;
                encode(message: _30.EventClaimCommissionRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.EventClaimCommissionRewards;
                fromPartial(object: Partial<_30.EventClaimCommissionRewards>): _30.EventClaimCommissionRewards;
                fromAmino(object: _30.EventClaimCommissionRewardsAmino): _30.EventClaimCommissionRewards;
                toAmino(message: _30.EventClaimCommissionRewards): _30.EventClaimCommissionRewardsAmino;
                fromAminoMsg(object: _30.EventClaimCommissionRewardsAminoMsg): _30.EventClaimCommissionRewards;
                fromProtoMsg(message: _30.EventClaimCommissionRewardsProtoMsg): _30.EventClaimCommissionRewards;
                toProto(message: _30.EventClaimCommissionRewards): Uint8Array;
                toProtoMsg(message: _30.EventClaimCommissionRewards): _30.EventClaimCommissionRewardsProtoMsg;
            };
            EventJoinPool: {
                typeUrl: string;
                encode(message: _30.EventJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.EventJoinPool;
                fromPartial(object: Partial<_30.EventJoinPool>): _30.EventJoinPool;
                fromAmino(object: _30.EventJoinPoolAmino): _30.EventJoinPool;
                toAmino(message: _30.EventJoinPool): _30.EventJoinPoolAmino;
                fromAminoMsg(object: _30.EventJoinPoolAminoMsg): _30.EventJoinPool;
                fromProtoMsg(message: _30.EventJoinPoolProtoMsg): _30.EventJoinPool;
                toProto(message: _30.EventJoinPool): Uint8Array;
                toProtoMsg(message: _30.EventJoinPool): _30.EventJoinPoolProtoMsg;
            };
            EventLeavePool: {
                typeUrl: string;
                encode(message: _30.EventLeavePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.EventLeavePool;
                fromPartial(object: Partial<_30.EventLeavePool>): _30.EventLeavePool;
                fromAmino(object: _30.EventLeavePoolAmino): _30.EventLeavePool;
                toAmino(message: _30.EventLeavePool): _30.EventLeavePoolAmino;
                fromAminoMsg(object: _30.EventLeavePoolAminoMsg): _30.EventLeavePool;
                fromProtoMsg(message: _30.EventLeavePoolProtoMsg): _30.EventLeavePool;
                toProto(message: _30.EventLeavePool): Uint8Array;
                toProtoMsg(message: _30.EventLeavePool): _30.EventLeavePoolProtoMsg;
            };
        };
    }
    namespace team {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                teamInfo(request?: _38.QueryTeamInfoRequest): Promise<_38.QueryTeamInfoResponse>;
                teamVestingAccounts(request?: _38.QueryTeamVestingAccountsRequest): Promise<_38.QueryTeamVestingAccountsResponse>;
                teamVestingAccount(request: _38.QueryTeamVestingAccountRequest): Promise<_38.QueryTeamVestingAccountResponse>;
                teamVestingStatus(request: _38.QueryTeamVestingStatusRequest): Promise<_38.QueryTeamVestingStatusResponse>;
                teamVestingStatusByTime(request: _38.QueryTeamVestingStatusByTimeRequest): Promise<_38.QueryTeamVestingStatusByTimeResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimUnlocked(value: _40.MsgClaimUnlocked): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _40.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createTeamVestingAccount(value: _40.MsgCreateTeamVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAuthorityRewards(value: _40.MsgClaimAuthorityRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAccountRewards(value: _40.MsgClaimAccountRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimUnlocked(value: _40.MsgClaimUnlocked): {
                        typeUrl: string;
                        value: _40.MsgClaimUnlocked;
                    };
                    clawback(value: _40.MsgClawback): {
                        typeUrl: string;
                        value: _40.MsgClawback;
                    };
                    createTeamVestingAccount(value: _40.MsgCreateTeamVestingAccount): {
                        typeUrl: string;
                        value: _40.MsgCreateTeamVestingAccount;
                    };
                    claimAuthorityRewards(value: _40.MsgClaimAuthorityRewards): {
                        typeUrl: string;
                        value: _40.MsgClaimAuthorityRewards;
                    };
                    claimAccountRewards(value: _40.MsgClaimAccountRewards): {
                        typeUrl: string;
                        value: _40.MsgClaimAccountRewards;
                    };
                };
                fromJSON: {
                    claimUnlocked(value: any): {
                        typeUrl: string;
                        value: _40.MsgClaimUnlocked;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _40.MsgClawback;
                    };
                    createTeamVestingAccount(value: any): {
                        typeUrl: string;
                        value: _40.MsgCreateTeamVestingAccount;
                    };
                    claimAuthorityRewards(value: any): {
                        typeUrl: string;
                        value: _40.MsgClaimAuthorityRewards;
                    };
                    claimAccountRewards(value: any): {
                        typeUrl: string;
                        value: _40.MsgClaimAccountRewards;
                    };
                };
                fromPartial: {
                    claimUnlocked(value: _40.MsgClaimUnlocked): {
                        typeUrl: string;
                        value: _40.MsgClaimUnlocked;
                    };
                    clawback(value: _40.MsgClawback): {
                        typeUrl: string;
                        value: _40.MsgClawback;
                    };
                    createTeamVestingAccount(value: _40.MsgCreateTeamVestingAccount): {
                        typeUrl: string;
                        value: _40.MsgCreateTeamVestingAccount;
                    };
                    claimAuthorityRewards(value: _40.MsgClaimAuthorityRewards): {
                        typeUrl: string;
                        value: _40.MsgClaimAuthorityRewards;
                    };
                    claimAccountRewards(value: _40.MsgClaimAccountRewards): {
                        typeUrl: string;
                        value: _40.MsgClaimAccountRewards;
                    };
                };
            };
            AminoConverter: {
                "/kyve.team.v1beta1.MsgClaimUnlocked": {
                    aminoType: string;
                    toAmino: (message: _40.MsgClaimUnlocked) => _40.MsgClaimUnlockedAmino;
                    fromAmino: (object: _40.MsgClaimUnlockedAmino) => _40.MsgClaimUnlocked;
                };
                "/kyve.team.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _40.MsgClawback) => _40.MsgClawbackAmino;
                    fromAmino: (object: _40.MsgClawbackAmino) => _40.MsgClawback;
                };
                "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _40.MsgCreateTeamVestingAccount) => _40.MsgCreateTeamVestingAccountAmino;
                    fromAmino: (object: _40.MsgCreateTeamVestingAccountAmino) => _40.MsgCreateTeamVestingAccount;
                };
                "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
                    aminoType: string;
                    toAmino: (message: _40.MsgClaimAuthorityRewards) => _40.MsgClaimAuthorityRewardsAmino;
                    fromAmino: (object: _40.MsgClaimAuthorityRewardsAmino) => _40.MsgClaimAuthorityRewards;
                };
                "/kyve.team.v1beta1.MsgClaimAccountRewards": {
                    aminoType: string;
                    toAmino: (message: _40.MsgClaimAccountRewards) => _40.MsgClaimAccountRewardsAmino;
                    fromAmino: (object: _40.MsgClaimAccountRewardsAmino) => _40.MsgClaimAccountRewards;
                };
            };
            MsgClaimUnlocked: {
                typeUrl: string;
                encode(message: _40.MsgClaimUnlocked, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgClaimUnlocked;
                fromPartial(object: Partial<_40.MsgClaimUnlocked>): _40.MsgClaimUnlocked;
                fromAmino(object: _40.MsgClaimUnlockedAmino): _40.MsgClaimUnlocked;
                toAmino(message: _40.MsgClaimUnlocked): _40.MsgClaimUnlockedAmino;
                fromAminoMsg(object: _40.MsgClaimUnlockedAminoMsg): _40.MsgClaimUnlocked;
                fromProtoMsg(message: _40.MsgClaimUnlockedProtoMsg): _40.MsgClaimUnlocked;
                toProto(message: _40.MsgClaimUnlocked): Uint8Array;
                toProtoMsg(message: _40.MsgClaimUnlocked): _40.MsgClaimUnlockedProtoMsg;
            };
            MsgClaimUnlockedResponse: {
                typeUrl: string;
                encode(_: _40.MsgClaimUnlockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgClaimUnlockedResponse;
                fromPartial(_: Partial<_40.MsgClaimUnlockedResponse>): _40.MsgClaimUnlockedResponse;
                fromAmino(_: _40.MsgClaimUnlockedResponseAmino): _40.MsgClaimUnlockedResponse;
                toAmino(_: _40.MsgClaimUnlockedResponse): _40.MsgClaimUnlockedResponseAmino;
                fromAminoMsg(object: _40.MsgClaimUnlockedResponseAminoMsg): _40.MsgClaimUnlockedResponse;
                fromProtoMsg(message: _40.MsgClaimUnlockedResponseProtoMsg): _40.MsgClaimUnlockedResponse;
                toProto(message: _40.MsgClaimUnlockedResponse): Uint8Array;
                toProtoMsg(message: _40.MsgClaimUnlockedResponse): _40.MsgClaimUnlockedResponseProtoMsg;
            };
            MsgClaimAuthorityRewards: {
                typeUrl: string;
                encode(message: _40.MsgClaimAuthorityRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgClaimAuthorityRewards;
                fromPartial(object: Partial<_40.MsgClaimAuthorityRewards>): _40.MsgClaimAuthorityRewards;
                fromAmino(object: _40.MsgClaimAuthorityRewardsAmino): _40.MsgClaimAuthorityRewards;
                toAmino(message: _40.MsgClaimAuthorityRewards): _40.MsgClaimAuthorityRewardsAmino;
                fromAminoMsg(object: _40.MsgClaimAuthorityRewardsAminoMsg): _40.MsgClaimAuthorityRewards;
                fromProtoMsg(message: _40.MsgClaimAuthorityRewardsProtoMsg): _40.MsgClaimAuthorityRewards;
                toProto(message: _40.MsgClaimAuthorityRewards): Uint8Array;
                toProtoMsg(message: _40.MsgClaimAuthorityRewards): _40.MsgClaimAuthorityRewardsProtoMsg;
            };
            MsgClaimAuthorityRewardsResponse: {
                typeUrl: string;
                encode(_: _40.MsgClaimAuthorityRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgClaimAuthorityRewardsResponse;
                fromPartial(_: Partial<_40.MsgClaimAuthorityRewardsResponse>): _40.MsgClaimAuthorityRewardsResponse;
                fromAmino(_: _40.MsgClaimAuthorityRewardsResponseAmino): _40.MsgClaimAuthorityRewardsResponse;
                toAmino(_: _40.MsgClaimAuthorityRewardsResponse): _40.MsgClaimAuthorityRewardsResponseAmino;
                fromAminoMsg(object: _40.MsgClaimAuthorityRewardsResponseAminoMsg): _40.MsgClaimAuthorityRewardsResponse;
                fromProtoMsg(message: _40.MsgClaimAuthorityRewardsResponseProtoMsg): _40.MsgClaimAuthorityRewardsResponse;
                toProto(message: _40.MsgClaimAuthorityRewardsResponse): Uint8Array;
                toProtoMsg(message: _40.MsgClaimAuthorityRewardsResponse): _40.MsgClaimAuthorityRewardsResponseProtoMsg;
            };
            MsgClaimAccountRewards: {
                typeUrl: string;
                encode(message: _40.MsgClaimAccountRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgClaimAccountRewards;
                fromPartial(object: Partial<_40.MsgClaimAccountRewards>): _40.MsgClaimAccountRewards;
                fromAmino(object: _40.MsgClaimAccountRewardsAmino): _40.MsgClaimAccountRewards;
                toAmino(message: _40.MsgClaimAccountRewards): _40.MsgClaimAccountRewardsAmino;
                fromAminoMsg(object: _40.MsgClaimAccountRewardsAminoMsg): _40.MsgClaimAccountRewards;
                fromProtoMsg(message: _40.MsgClaimAccountRewardsProtoMsg): _40.MsgClaimAccountRewards;
                toProto(message: _40.MsgClaimAccountRewards): Uint8Array;
                toProtoMsg(message: _40.MsgClaimAccountRewards): _40.MsgClaimAccountRewardsProtoMsg;
            };
            MsgClaimAccountRewardsResponse: {
                typeUrl: string;
                encode(_: _40.MsgClaimAccountRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgClaimAccountRewardsResponse;
                fromPartial(_: Partial<_40.MsgClaimAccountRewardsResponse>): _40.MsgClaimAccountRewardsResponse;
                fromAmino(_: _40.MsgClaimAccountRewardsResponseAmino): _40.MsgClaimAccountRewardsResponse;
                toAmino(_: _40.MsgClaimAccountRewardsResponse): _40.MsgClaimAccountRewardsResponseAmino;
                fromAminoMsg(object: _40.MsgClaimAccountRewardsResponseAminoMsg): _40.MsgClaimAccountRewardsResponse;
                fromProtoMsg(message: _40.MsgClaimAccountRewardsResponseProtoMsg): _40.MsgClaimAccountRewardsResponse;
                toProto(message: _40.MsgClaimAccountRewardsResponse): Uint8Array;
                toProtoMsg(message: _40.MsgClaimAccountRewardsResponse): _40.MsgClaimAccountRewardsResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _40.MsgClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgClawback;
                fromPartial(object: Partial<_40.MsgClawback>): _40.MsgClawback;
                fromAmino(object: _40.MsgClawbackAmino): _40.MsgClawback;
                toAmino(message: _40.MsgClawback): _40.MsgClawbackAmino;
                fromAminoMsg(object: _40.MsgClawbackAminoMsg): _40.MsgClawback;
                fromProtoMsg(message: _40.MsgClawbackProtoMsg): _40.MsgClawback;
                toProto(message: _40.MsgClawback): Uint8Array;
                toProtoMsg(message: _40.MsgClawback): _40.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(_: _40.MsgClawbackResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgClawbackResponse;
                fromPartial(_: Partial<_40.MsgClawbackResponse>): _40.MsgClawbackResponse;
                fromAmino(_: _40.MsgClawbackResponseAmino): _40.MsgClawbackResponse;
                toAmino(_: _40.MsgClawbackResponse): _40.MsgClawbackResponseAmino;
                fromAminoMsg(object: _40.MsgClawbackResponseAminoMsg): _40.MsgClawbackResponse;
                fromProtoMsg(message: _40.MsgClawbackResponseProtoMsg): _40.MsgClawbackResponse;
                toProto(message: _40.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _40.MsgClawbackResponse): _40.MsgClawbackResponseProtoMsg;
            };
            MsgCreateTeamVestingAccount: {
                typeUrl: string;
                encode(message: _40.MsgCreateTeamVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgCreateTeamVestingAccount;
                fromPartial(object: Partial<_40.MsgCreateTeamVestingAccount>): _40.MsgCreateTeamVestingAccount;
                fromAmino(object: _40.MsgCreateTeamVestingAccountAmino): _40.MsgCreateTeamVestingAccount;
                toAmino(message: _40.MsgCreateTeamVestingAccount): _40.MsgCreateTeamVestingAccountAmino;
                fromAminoMsg(object: _40.MsgCreateTeamVestingAccountAminoMsg): _40.MsgCreateTeamVestingAccount;
                fromProtoMsg(message: _40.MsgCreateTeamVestingAccountProtoMsg): _40.MsgCreateTeamVestingAccount;
                toProto(message: _40.MsgCreateTeamVestingAccount): Uint8Array;
                toProtoMsg(message: _40.MsgCreateTeamVestingAccount): _40.MsgCreateTeamVestingAccountProtoMsg;
            };
            MsgCreateTeamVestingAccountResponse: {
                typeUrl: string;
                encode(_: _40.MsgCreateTeamVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgCreateTeamVestingAccountResponse;
                fromPartial(_: Partial<_40.MsgCreateTeamVestingAccountResponse>): _40.MsgCreateTeamVestingAccountResponse;
                fromAmino(_: _40.MsgCreateTeamVestingAccountResponseAmino): _40.MsgCreateTeamVestingAccountResponse;
                toAmino(_: _40.MsgCreateTeamVestingAccountResponse): _40.MsgCreateTeamVestingAccountResponseAmino;
                fromAminoMsg(object: _40.MsgCreateTeamVestingAccountResponseAminoMsg): _40.MsgCreateTeamVestingAccountResponse;
                fromProtoMsg(message: _40.MsgCreateTeamVestingAccountResponseProtoMsg): _40.MsgCreateTeamVestingAccountResponse;
                toProto(message: _40.MsgCreateTeamVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _40.MsgCreateTeamVestingAccountResponse): _40.MsgCreateTeamVestingAccountResponseProtoMsg;
            };
            Authority: {
                typeUrl: string;
                encode(message: _39.Authority, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Authority;
                fromPartial(object: Partial<_39.Authority>): _39.Authority;
                fromAmino(object: _39.AuthorityAmino): _39.Authority;
                toAmino(message: _39.Authority): _39.AuthorityAmino;
                fromAminoMsg(object: _39.AuthorityAminoMsg): _39.Authority;
                fromProtoMsg(message: _39.AuthorityProtoMsg): _39.Authority;
                toProto(message: _39.Authority): Uint8Array;
                toProtoMsg(message: _39.Authority): _39.AuthorityProtoMsg;
            };
            TeamVestingAccount: {
                typeUrl: string;
                encode(message: _39.TeamVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.TeamVestingAccount;
                fromPartial(object: Partial<_39.TeamVestingAccount>): _39.TeamVestingAccount;
                fromAmino(object: _39.TeamVestingAccountAmino): _39.TeamVestingAccount;
                toAmino(message: _39.TeamVestingAccount): _39.TeamVestingAccountAmino;
                fromAminoMsg(object: _39.TeamVestingAccountAminoMsg): _39.TeamVestingAccount;
                fromProtoMsg(message: _39.TeamVestingAccountProtoMsg): _39.TeamVestingAccount;
                toProto(message: _39.TeamVestingAccount): Uint8Array;
                toProtoMsg(message: _39.TeamVestingAccount): _39.TeamVestingAccountProtoMsg;
            };
            QueryTeamInfoRequest: {
                typeUrl: string;
                encode(_: _38.QueryTeamInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.QueryTeamInfoRequest;
                fromPartial(_: Partial<_38.QueryTeamInfoRequest>): _38.QueryTeamInfoRequest;
                fromAmino(_: _38.QueryTeamInfoRequestAmino): _38.QueryTeamInfoRequest;
                toAmino(_: _38.QueryTeamInfoRequest): _38.QueryTeamInfoRequestAmino;
                fromAminoMsg(object: _38.QueryTeamInfoRequestAminoMsg): _38.QueryTeamInfoRequest;
                fromProtoMsg(message: _38.QueryTeamInfoRequestProtoMsg): _38.QueryTeamInfoRequest;
                toProto(message: _38.QueryTeamInfoRequest): Uint8Array;
                toProtoMsg(message: _38.QueryTeamInfoRequest): _38.QueryTeamInfoRequestProtoMsg;
            };
            QueryTeamInfoResponse: {
                typeUrl: string;
                encode(message: _38.QueryTeamInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTeamInfoResponse;
                fromPartial(object: Partial<_38.QueryTeamInfoResponse>): _38.QueryTeamInfoResponse;
                fromAmino(object: _38.QueryTeamInfoResponseAmino): _38.QueryTeamInfoResponse;
                toAmino(message: _38.QueryTeamInfoResponse): _38.QueryTeamInfoResponseAmino;
                fromAminoMsg(object: _38.QueryTeamInfoResponseAminoMsg): _38.QueryTeamInfoResponse;
                fromProtoMsg(message: _38.QueryTeamInfoResponseProtoMsg): _38.QueryTeamInfoResponse;
                toProto(message: _38.QueryTeamInfoResponse): Uint8Array;
                toProtoMsg(message: _38.QueryTeamInfoResponse): _38.QueryTeamInfoResponseProtoMsg;
            };
            QueryTeamVestingAccountsRequest: {
                typeUrl: string;
                encode(_: _38.QueryTeamVestingAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.QueryTeamVestingAccountsRequest;
                fromPartial(_: Partial<_38.QueryTeamVestingAccountsRequest>): _38.QueryTeamVestingAccountsRequest;
                fromAmino(_: _38.QueryTeamVestingAccountsRequestAmino): _38.QueryTeamVestingAccountsRequest;
                toAmino(_: _38.QueryTeamVestingAccountsRequest): _38.QueryTeamVestingAccountsRequestAmino;
                fromAminoMsg(object: _38.QueryTeamVestingAccountsRequestAminoMsg): _38.QueryTeamVestingAccountsRequest;
                fromProtoMsg(message: _38.QueryTeamVestingAccountsRequestProtoMsg): _38.QueryTeamVestingAccountsRequest;
                toProto(message: _38.QueryTeamVestingAccountsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryTeamVestingAccountsRequest): _38.QueryTeamVestingAccountsRequestProtoMsg;
            };
            QueryTeamVestingAccountsResponse: {
                typeUrl: string;
                encode(message: _38.QueryTeamVestingAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTeamVestingAccountsResponse;
                fromPartial(object: Partial<_38.QueryTeamVestingAccountsResponse>): _38.QueryTeamVestingAccountsResponse;
                fromAmino(object: _38.QueryTeamVestingAccountsResponseAmino): _38.QueryTeamVestingAccountsResponse;
                toAmino(message: _38.QueryTeamVestingAccountsResponse): _38.QueryTeamVestingAccountsResponseAmino;
                fromAminoMsg(object: _38.QueryTeamVestingAccountsResponseAminoMsg): _38.QueryTeamVestingAccountsResponse;
                fromProtoMsg(message: _38.QueryTeamVestingAccountsResponseProtoMsg): _38.QueryTeamVestingAccountsResponse;
                toProto(message: _38.QueryTeamVestingAccountsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryTeamVestingAccountsResponse): _38.QueryTeamVestingAccountsResponseProtoMsg;
            };
            QueryTeamVestingAccountRequest: {
                typeUrl: string;
                encode(message: _38.QueryTeamVestingAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTeamVestingAccountRequest;
                fromPartial(object: Partial<_38.QueryTeamVestingAccountRequest>): _38.QueryTeamVestingAccountRequest;
                fromAmino(object: _38.QueryTeamVestingAccountRequestAmino): _38.QueryTeamVestingAccountRequest;
                toAmino(message: _38.QueryTeamVestingAccountRequest): _38.QueryTeamVestingAccountRequestAmino;
                fromAminoMsg(object: _38.QueryTeamVestingAccountRequestAminoMsg): _38.QueryTeamVestingAccountRequest;
                fromProtoMsg(message: _38.QueryTeamVestingAccountRequestProtoMsg): _38.QueryTeamVestingAccountRequest;
                toProto(message: _38.QueryTeamVestingAccountRequest): Uint8Array;
                toProtoMsg(message: _38.QueryTeamVestingAccountRequest): _38.QueryTeamVestingAccountRequestProtoMsg;
            };
            QueryTeamVestingAccountResponse: {
                typeUrl: string;
                encode(message: _38.QueryTeamVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTeamVestingAccountResponse;
                fromPartial(object: Partial<_38.QueryTeamVestingAccountResponse>): _38.QueryTeamVestingAccountResponse;
                fromAmino(object: _38.QueryTeamVestingAccountResponseAmino): _38.QueryTeamVestingAccountResponse;
                toAmino(message: _38.QueryTeamVestingAccountResponse): _38.QueryTeamVestingAccountResponseAmino;
                fromAminoMsg(object: _38.QueryTeamVestingAccountResponseAminoMsg): _38.QueryTeamVestingAccountResponse;
                fromProtoMsg(message: _38.QueryTeamVestingAccountResponseProtoMsg): _38.QueryTeamVestingAccountResponse;
                toProto(message: _38.QueryTeamVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _38.QueryTeamVestingAccountResponse): _38.QueryTeamVestingAccountResponseProtoMsg;
            };
            QueryTeamVestingStatusRequest: {
                typeUrl: string;
                encode(message: _38.QueryTeamVestingStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTeamVestingStatusRequest;
                fromPartial(object: Partial<_38.QueryTeamVestingStatusRequest>): _38.QueryTeamVestingStatusRequest;
                fromAmino(object: _38.QueryTeamVestingStatusRequestAmino): _38.QueryTeamVestingStatusRequest;
                toAmino(message: _38.QueryTeamVestingStatusRequest): _38.QueryTeamVestingStatusRequestAmino;
                fromAminoMsg(object: _38.QueryTeamVestingStatusRequestAminoMsg): _38.QueryTeamVestingStatusRequest;
                fromProtoMsg(message: _38.QueryTeamVestingStatusRequestProtoMsg): _38.QueryTeamVestingStatusRequest;
                toProto(message: _38.QueryTeamVestingStatusRequest): Uint8Array;
                toProtoMsg(message: _38.QueryTeamVestingStatusRequest): _38.QueryTeamVestingStatusRequestProtoMsg;
            };
            QueryTeamVestingStatusResponse: {
                typeUrl: string;
                encode(message: _38.QueryTeamVestingStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTeamVestingStatusResponse;
                fromPartial(object: Partial<_38.QueryTeamVestingStatusResponse>): _38.QueryTeamVestingStatusResponse;
                fromAmino(object: _38.QueryTeamVestingStatusResponseAmino): _38.QueryTeamVestingStatusResponse;
                toAmino(message: _38.QueryTeamVestingStatusResponse): _38.QueryTeamVestingStatusResponseAmino;
                fromAminoMsg(object: _38.QueryTeamVestingStatusResponseAminoMsg): _38.QueryTeamVestingStatusResponse;
                fromProtoMsg(message: _38.QueryTeamVestingStatusResponseProtoMsg): _38.QueryTeamVestingStatusResponse;
                toProto(message: _38.QueryTeamVestingStatusResponse): Uint8Array;
                toProtoMsg(message: _38.QueryTeamVestingStatusResponse): _38.QueryTeamVestingStatusResponseProtoMsg;
            };
            QueryTeamVestingStatusByTimeRequest: {
                typeUrl: string;
                encode(message: _38.QueryTeamVestingStatusByTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTeamVestingStatusByTimeRequest;
                fromPartial(object: Partial<_38.QueryTeamVestingStatusByTimeRequest>): _38.QueryTeamVestingStatusByTimeRequest;
                fromAmino(object: _38.QueryTeamVestingStatusByTimeRequestAmino): _38.QueryTeamVestingStatusByTimeRequest;
                toAmino(message: _38.QueryTeamVestingStatusByTimeRequest): _38.QueryTeamVestingStatusByTimeRequestAmino;
                fromAminoMsg(object: _38.QueryTeamVestingStatusByTimeRequestAminoMsg): _38.QueryTeamVestingStatusByTimeRequest;
                fromProtoMsg(message: _38.QueryTeamVestingStatusByTimeRequestProtoMsg): _38.QueryTeamVestingStatusByTimeRequest;
                toProto(message: _38.QueryTeamVestingStatusByTimeRequest): Uint8Array;
                toProtoMsg(message: _38.QueryTeamVestingStatusByTimeRequest): _38.QueryTeamVestingStatusByTimeRequestProtoMsg;
            };
            QueryTeamVestingStatusByTimeResponse: {
                typeUrl: string;
                encode(message: _38.QueryTeamVestingStatusByTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryTeamVestingStatusByTimeResponse;
                fromPartial(object: Partial<_38.QueryTeamVestingStatusByTimeResponse>): _38.QueryTeamVestingStatusByTimeResponse;
                fromAmino(object: _38.QueryTeamVestingStatusByTimeResponseAmino): _38.QueryTeamVestingStatusByTimeResponse;
                toAmino(message: _38.QueryTeamVestingStatusByTimeResponse): _38.QueryTeamVestingStatusByTimeResponseAmino;
                fromAminoMsg(object: _38.QueryTeamVestingStatusByTimeResponseAminoMsg): _38.QueryTeamVestingStatusByTimeResponse;
                fromProtoMsg(message: _38.QueryTeamVestingStatusByTimeResponseProtoMsg): _38.QueryTeamVestingStatusByTimeResponse;
                toProto(message: _38.QueryTeamVestingStatusByTimeResponse): Uint8Array;
                toProtoMsg(message: _38.QueryTeamVestingStatusByTimeResponse): _38.QueryTeamVestingStatusByTimeResponseProtoMsg;
            };
            QueryVestingStatus: {
                typeUrl: string;
                encode(message: _38.QueryVestingStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryVestingStatus;
                fromPartial(object: Partial<_38.QueryVestingStatus>): _38.QueryVestingStatus;
                fromAmino(object: _38.QueryVestingStatusAmino): _38.QueryVestingStatus;
                toAmino(message: _38.QueryVestingStatus): _38.QueryVestingStatusAmino;
                fromAminoMsg(object: _38.QueryVestingStatusAminoMsg): _38.QueryVestingStatus;
                fromProtoMsg(message: _38.QueryVestingStatusProtoMsg): _38.QueryVestingStatus;
                toProto(message: _38.QueryVestingStatus): Uint8Array;
                toProtoMsg(message: _38.QueryVestingStatus): _38.QueryVestingStatusProtoMsg;
            };
            QueryVestingPlan: {
                typeUrl: string;
                encode(message: _38.QueryVestingPlan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryVestingPlan;
                fromPartial(object: Partial<_38.QueryVestingPlan>): _38.QueryVestingPlan;
                fromAmino(object: _38.QueryVestingPlanAmino): _38.QueryVestingPlan;
                toAmino(message: _38.QueryVestingPlan): _38.QueryVestingPlanAmino;
                fromAminoMsg(object: _38.QueryVestingPlanAminoMsg): _38.QueryVestingPlan;
                fromProtoMsg(message: _38.QueryVestingPlanProtoMsg): _38.QueryVestingPlan;
                toProto(message: _38.QueryVestingPlan): Uint8Array;
                toProtoMsg(message: _38.QueryVestingPlan): _38.QueryVestingPlanProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _37.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
            EventCreateTeamVestingAccount: {
                typeUrl: string;
                encode(message: _36.EventCreateTeamVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.EventCreateTeamVestingAccount;
                fromPartial(object: Partial<_36.EventCreateTeamVestingAccount>): _36.EventCreateTeamVestingAccount;
                fromAmino(object: _36.EventCreateTeamVestingAccountAmino): _36.EventCreateTeamVestingAccount;
                toAmino(message: _36.EventCreateTeamVestingAccount): _36.EventCreateTeamVestingAccountAmino;
                fromAminoMsg(object: _36.EventCreateTeamVestingAccountAminoMsg): _36.EventCreateTeamVestingAccount;
                fromProtoMsg(message: _36.EventCreateTeamVestingAccountProtoMsg): _36.EventCreateTeamVestingAccount;
                toProto(message: _36.EventCreateTeamVestingAccount): Uint8Array;
                toProtoMsg(message: _36.EventCreateTeamVestingAccount): _36.EventCreateTeamVestingAccountProtoMsg;
            };
            EventClawback: {
                typeUrl: string;
                encode(message: _36.EventClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.EventClawback;
                fromPartial(object: Partial<_36.EventClawback>): _36.EventClawback;
                fromAmino(object: _36.EventClawbackAmino): _36.EventClawback;
                toAmino(message: _36.EventClawback): _36.EventClawbackAmino;
                fromAminoMsg(object: _36.EventClawbackAminoMsg): _36.EventClawback;
                fromProtoMsg(message: _36.EventClawbackProtoMsg): _36.EventClawback;
                toProto(message: _36.EventClawback): Uint8Array;
                toProtoMsg(message: _36.EventClawback): _36.EventClawbackProtoMsg;
            };
            EventClaimedUnlocked: {
                typeUrl: string;
                encode(message: _36.EventClaimedUnlocked, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.EventClaimedUnlocked;
                fromPartial(object: Partial<_36.EventClaimedUnlocked>): _36.EventClaimedUnlocked;
                fromAmino(object: _36.EventClaimedUnlockedAmino): _36.EventClaimedUnlocked;
                toAmino(message: _36.EventClaimedUnlocked): _36.EventClaimedUnlockedAmino;
                fromAminoMsg(object: _36.EventClaimedUnlockedAminoMsg): _36.EventClaimedUnlocked;
                fromProtoMsg(message: _36.EventClaimedUnlockedProtoMsg): _36.EventClaimedUnlocked;
                toProto(message: _36.EventClaimedUnlocked): Uint8Array;
                toProtoMsg(message: _36.EventClaimedUnlocked): _36.EventClaimedUnlockedProtoMsg;
            };
            EventClaimInflationRewards: {
                typeUrl: string;
                encode(message: _36.EventClaimInflationRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.EventClaimInflationRewards;
                fromPartial(object: Partial<_36.EventClaimInflationRewards>): _36.EventClaimInflationRewards;
                fromAmino(object: _36.EventClaimInflationRewardsAmino): _36.EventClaimInflationRewards;
                toAmino(message: _36.EventClaimInflationRewards): _36.EventClaimInflationRewardsAmino;
                fromAminoMsg(object: _36.EventClaimInflationRewardsAminoMsg): _36.EventClaimInflationRewards;
                fromProtoMsg(message: _36.EventClaimInflationRewardsProtoMsg): _36.EventClaimInflationRewards;
                toProto(message: _36.EventClaimInflationRewards): Uint8Array;
                toProtoMsg(message: _36.EventClaimInflationRewards): _36.EventClaimInflationRewardsProtoMsg;
            };
            EventClaimAuthorityRewards: {
                typeUrl: string;
                encode(message: _36.EventClaimAuthorityRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.EventClaimAuthorityRewards;
                fromPartial(object: Partial<_36.EventClaimAuthorityRewards>): _36.EventClaimAuthorityRewards;
                fromAmino(object: _36.EventClaimAuthorityRewardsAmino): _36.EventClaimAuthorityRewards;
                toAmino(message: _36.EventClaimAuthorityRewards): _36.EventClaimAuthorityRewardsAmino;
                fromAminoMsg(object: _36.EventClaimAuthorityRewardsAminoMsg): _36.EventClaimAuthorityRewards;
                fromProtoMsg(message: _36.EventClaimAuthorityRewardsProtoMsg): _36.EventClaimAuthorityRewards;
                toProto(message: _36.EventClaimAuthorityRewards): Uint8Array;
                toProtoMsg(message: _36.EventClaimAuthorityRewards): _36.EventClaimAuthorityRewardsProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            kyve: {
                bundles: {
                    v1beta1: _180.MsgClientImpl;
                };
                delegation: {
                    v1beta1: _181.MsgClientImpl;
                };
                global: {
                    v1beta1: _182.MsgClientImpl;
                };
                pool: {
                    v1beta1: _183.MsgClientImpl;
                };
                stakers: {
                    v1beta1: _184.MsgClientImpl;
                };
                team: {
                    v1beta1: _185.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            kyve: {
                bundles: {
                    v1beta1: {
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                    };
                };
                delegation: {
                    v1beta1: {
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                    };
                };
                global: {
                    v1beta1: {
                        params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                    };
                };
                pool: {
                    v1beta1: {
                        params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                    };
                };
                stakers: {
                    v1beta1: {
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                    };
                };
                team: {
                    v1beta1: {
                        teamInfo(request?: _38.QueryTeamInfoRequest): Promise<_38.QueryTeamInfoResponse>;
                        teamVestingAccounts(request?: _38.QueryTeamVestingAccountsRequest): Promise<_38.QueryTeamVestingAccountsResponse>;
                        teamVestingAccount(request: _38.QueryTeamVestingAccountRequest): Promise<_38.QueryTeamVestingAccountResponse>;
                        teamVestingStatus(request: _38.QueryTeamVestingStatusRequest): Promise<_38.QueryTeamVestingStatusResponse>;
                        teamVestingStatusByTime(request: _38.QueryTeamVestingStatusByTimeRequest): Promise<_38.QueryTeamVestingStatusByTimeResponse>;
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            kyve: {
                bundles: {
                    v1beta1: _168.LCDQueryClient;
                };
                delegation: {
                    v1beta1: _169.LCDQueryClient;
                };
                global: {
                    v1beta1: _170.LCDQueryClient;
                };
                pool: {
                    v1beta1: _171.LCDQueryClient;
                };
                stakers: {
                    v1beta1: _172.LCDQueryClient;
                };
                team: {
                    v1beta1: _173.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
