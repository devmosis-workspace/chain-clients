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
import * as _12 from "./funders/v1beta1/events";
import * as _13 from "./funders/v1beta1/funders";
import * as _14 from "./funders/v1beta1/genesis";
import * as _15 from "./funders/v1beta1/params";
import * as _16 from "./funders/v1beta1/query";
import * as _17 from "./funders/v1beta1/tx";
import * as _18 from "./global/v1beta1/events";
import * as _19 from "./global/v1beta1/genesis";
import * as _20 from "./global/v1beta1/global";
import * as _21 from "./global/v1beta1/query";
import * as _22 from "./global/v1beta1/tx";
import * as _23 from "./pool/v1beta1/events";
import * as _24 from "./pool/v1beta1/genesis";
import * as _25 from "./pool/v1beta1/params";
import * as _26 from "./pool/v1beta1/pool";
import * as _27 from "./pool/v1beta1/query";
import * as _28 from "./pool/v1beta1/tx";
import * as _29 from "./query/v1beta1/account";
import * as _30 from "./query/v1beta1/bundles";
import * as _31 from "./query/v1beta1/delegation";
import * as _32 from "./query/v1beta1/funders";
import * as _33 from "./query/v1beta1/params";
import * as _34 from "./query/v1beta1/pools";
import * as _35 from "./query/v1beta1/query";
import * as _36 from "./query/v1beta1/stakers";
import * as _37 from "./stakers/v1beta1/events";
import * as _38 from "./stakers/v1beta1/genesis";
import * as _39 from "./stakers/v1beta1/params";
import * as _40 from "./stakers/v1beta1/query";
import * as _41 from "./stakers/v1beta1/stakers";
import * as _42 from "./stakers/v1beta1/tx";
import * as _43 from "./team/v1beta1/events";
import * as _44 from "./team/v1beta1/genesis";
import * as _45 from "./team/v1beta1/query";
import * as _46 from "./team/v1beta1/team";
import * as _47 from "./team/v1beta1/tx";
import * as _207 from "./bundles/v1beta1/query.lcd";
import * as _208 from "./delegation/v1beta1/query.lcd";
import * as _209 from "./funders/v1beta1/query.lcd";
import * as _210 from "./global/v1beta1/query.lcd";
import * as _211 from "./pool/v1beta1/query.lcd";
import * as _212 from "./stakers/v1beta1/query.lcd";
import * as _213 from "./team/v1beta1/query.lcd";
import * as _214 from "./bundles/v1beta1/query.rpc.Query";
import * as _215 from "./delegation/v1beta1/query.rpc.Query";
import * as _216 from "./funders/v1beta1/query.rpc.Query";
import * as _217 from "./global/v1beta1/query.rpc.Query";
import * as _218 from "./pool/v1beta1/query.rpc.Query";
import * as _219 from "./stakers/v1beta1/query.rpc.Query";
import * as _220 from "./team/v1beta1/query.rpc.Query";
import * as _221 from "./bundles/v1beta1/tx.rpc.msg";
import * as _222 from "./delegation/v1beta1/tx.rpc.msg";
import * as _223 from "./funders/v1beta1/tx.rpc.msg";
import * as _224 from "./global/v1beta1/tx.rpc.msg";
import * as _225 from "./pool/v1beta1/tx.rpc.msg";
import * as _226 from "./stakers/v1beta1/tx.rpc.msg";
import * as _227 from "./team/v1beta1/tx.rpc.msg";
export declare namespace kyve {
    namespace bundles {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
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
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
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
    namespace funders {
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFunder(value: _17.MsgCreateFunder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFunder(value: _17.MsgUpdateFunder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundPool(value: _17.MsgFundPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defundPool(value: _17.MsgDefundPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _17.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFunder(value: _17.MsgCreateFunder): {
                        typeUrl: string;
                        value: _17.MsgCreateFunder;
                    };
                    updateFunder(value: _17.MsgUpdateFunder): {
                        typeUrl: string;
                        value: _17.MsgUpdateFunder;
                    };
                    fundPool(value: _17.MsgFundPool): {
                        typeUrl: string;
                        value: _17.MsgFundPool;
                    };
                    defundPool(value: _17.MsgDefundPool): {
                        typeUrl: string;
                        value: _17.MsgDefundPool;
                    };
                    updateParams(value: _17.MsgUpdateParams): {
                        typeUrl: string;
                        value: _17.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createFunder(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateFunder;
                    };
                    updateFunder(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateFunder;
                    };
                    fundPool(value: any): {
                        typeUrl: string;
                        value: _17.MsgFundPool;
                    };
                    defundPool(value: any): {
                        typeUrl: string;
                        value: _17.MsgDefundPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createFunder(value: _17.MsgCreateFunder): {
                        typeUrl: string;
                        value: _17.MsgCreateFunder;
                    };
                    updateFunder(value: _17.MsgUpdateFunder): {
                        typeUrl: string;
                        value: _17.MsgUpdateFunder;
                    };
                    fundPool(value: _17.MsgFundPool): {
                        typeUrl: string;
                        value: _17.MsgFundPool;
                    };
                    defundPool(value: _17.MsgDefundPool): {
                        typeUrl: string;
                        value: _17.MsgDefundPool;
                    };
                    updateParams(value: _17.MsgUpdateParams): {
                        typeUrl: string;
                        value: _17.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.funders.v1beta1.MsgCreateFunder": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateFunder) => _17.MsgCreateFunderAmino;
                    fromAmino: (object: _17.MsgCreateFunderAmino) => _17.MsgCreateFunder;
                };
                "/kyve.funders.v1beta1.MsgUpdateFunder": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateFunder) => _17.MsgUpdateFunderAmino;
                    fromAmino: (object: _17.MsgUpdateFunderAmino) => _17.MsgUpdateFunder;
                };
                "/kyve.funders.v1beta1.MsgFundPool": {
                    aminoType: string;
                    toAmino: (message: _17.MsgFundPool) => _17.MsgFundPoolAmino;
                    fromAmino: (object: _17.MsgFundPoolAmino) => _17.MsgFundPool;
                };
                "/kyve.funders.v1beta1.MsgDefundPool": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDefundPool) => _17.MsgDefundPoolAmino;
                    fromAmino: (object: _17.MsgDefundPoolAmino) => _17.MsgDefundPool;
                };
                "/kyve.funders.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateParams) => _17.MsgUpdateParamsAmino;
                    fromAmino: (object: _17.MsgUpdateParamsAmino) => _17.MsgUpdateParams;
                };
            };
            MsgCreateFunder: {
                typeUrl: string;
                encode(message: _17.MsgCreateFunder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateFunder;
                fromPartial(object: Partial<_17.MsgCreateFunder>): _17.MsgCreateFunder;
                fromAmino(object: _17.MsgCreateFunderAmino): _17.MsgCreateFunder;
                toAmino(message: _17.MsgCreateFunder): _17.MsgCreateFunderAmino;
                fromAminoMsg(object: _17.MsgCreateFunderAminoMsg): _17.MsgCreateFunder;
                fromProtoMsg(message: _17.MsgCreateFunderProtoMsg): _17.MsgCreateFunder;
                toProto(message: _17.MsgCreateFunder): Uint8Array;
                toProtoMsg(message: _17.MsgCreateFunder): _17.MsgCreateFunderProtoMsg;
            };
            MsgCreateFunderResponse: {
                typeUrl: string;
                encode(_: _17.MsgCreateFunderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgCreateFunderResponse;
                fromPartial(_: Partial<_17.MsgCreateFunderResponse>): _17.MsgCreateFunderResponse;
                fromAmino(_: _17.MsgCreateFunderResponseAmino): _17.MsgCreateFunderResponse;
                toAmino(_: _17.MsgCreateFunderResponse): _17.MsgCreateFunderResponseAmino;
                fromAminoMsg(object: _17.MsgCreateFunderResponseAminoMsg): _17.MsgCreateFunderResponse;
                fromProtoMsg(message: _17.MsgCreateFunderResponseProtoMsg): _17.MsgCreateFunderResponse;
                toProto(message: _17.MsgCreateFunderResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateFunderResponse): _17.MsgCreateFunderResponseProtoMsg;
            };
            MsgUpdateFunder: {
                typeUrl: string;
                encode(message: _17.MsgUpdateFunder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateFunder;
                fromPartial(object: Partial<_17.MsgUpdateFunder>): _17.MsgUpdateFunder;
                fromAmino(object: _17.MsgUpdateFunderAmino): _17.MsgUpdateFunder;
                toAmino(message: _17.MsgUpdateFunder): _17.MsgUpdateFunderAmino;
                fromAminoMsg(object: _17.MsgUpdateFunderAminoMsg): _17.MsgUpdateFunder;
                fromProtoMsg(message: _17.MsgUpdateFunderProtoMsg): _17.MsgUpdateFunder;
                toProto(message: _17.MsgUpdateFunder): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateFunder): _17.MsgUpdateFunderProtoMsg;
            };
            MsgUpdateFunderResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateFunderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateFunderResponse;
                fromPartial(_: Partial<_17.MsgUpdateFunderResponse>): _17.MsgUpdateFunderResponse;
                fromAmino(_: _17.MsgUpdateFunderResponseAmino): _17.MsgUpdateFunderResponse;
                toAmino(_: _17.MsgUpdateFunderResponse): _17.MsgUpdateFunderResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateFunderResponseAminoMsg): _17.MsgUpdateFunderResponse;
                fromProtoMsg(message: _17.MsgUpdateFunderResponseProtoMsg): _17.MsgUpdateFunderResponse;
                toProto(message: _17.MsgUpdateFunderResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateFunderResponse): _17.MsgUpdateFunderResponseProtoMsg;
            };
            MsgFundPool: {
                typeUrl: string;
                encode(message: _17.MsgFundPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgFundPool;
                fromPartial(object: Partial<_17.MsgFundPool>): _17.MsgFundPool;
                fromAmino(object: _17.MsgFundPoolAmino): _17.MsgFundPool;
                toAmino(message: _17.MsgFundPool): _17.MsgFundPoolAmino;
                fromAminoMsg(object: _17.MsgFundPoolAminoMsg): _17.MsgFundPool;
                fromProtoMsg(message: _17.MsgFundPoolProtoMsg): _17.MsgFundPool;
                toProto(message: _17.MsgFundPool): Uint8Array;
                toProtoMsg(message: _17.MsgFundPool): _17.MsgFundPoolProtoMsg;
            };
            MsgFundPoolResponse: {
                typeUrl: string;
                encode(_: _17.MsgFundPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgFundPoolResponse;
                fromPartial(_: Partial<_17.MsgFundPoolResponse>): _17.MsgFundPoolResponse;
                fromAmino(_: _17.MsgFundPoolResponseAmino): _17.MsgFundPoolResponse;
                toAmino(_: _17.MsgFundPoolResponse): _17.MsgFundPoolResponseAmino;
                fromAminoMsg(object: _17.MsgFundPoolResponseAminoMsg): _17.MsgFundPoolResponse;
                fromProtoMsg(message: _17.MsgFundPoolResponseProtoMsg): _17.MsgFundPoolResponse;
                toProto(message: _17.MsgFundPoolResponse): Uint8Array;
                toProtoMsg(message: _17.MsgFundPoolResponse): _17.MsgFundPoolResponseProtoMsg;
            };
            MsgDefundPool: {
                typeUrl: string;
                encode(message: _17.MsgDefundPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDefundPool;
                fromPartial(object: Partial<_17.MsgDefundPool>): _17.MsgDefundPool;
                fromAmino(object: _17.MsgDefundPoolAmino): _17.MsgDefundPool;
                toAmino(message: _17.MsgDefundPool): _17.MsgDefundPoolAmino;
                fromAminoMsg(object: _17.MsgDefundPoolAminoMsg): _17.MsgDefundPool;
                fromProtoMsg(message: _17.MsgDefundPoolProtoMsg): _17.MsgDefundPool;
                toProto(message: _17.MsgDefundPool): Uint8Array;
                toProtoMsg(message: _17.MsgDefundPool): _17.MsgDefundPoolProtoMsg;
            };
            MsgDefundPoolResponse: {
                typeUrl: string;
                encode(_: _17.MsgDefundPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDefundPoolResponse;
                fromPartial(_: Partial<_17.MsgDefundPoolResponse>): _17.MsgDefundPoolResponse;
                fromAmino(_: _17.MsgDefundPoolResponseAmino): _17.MsgDefundPoolResponse;
                toAmino(_: _17.MsgDefundPoolResponse): _17.MsgDefundPoolResponseAmino;
                fromAminoMsg(object: _17.MsgDefundPoolResponseAminoMsg): _17.MsgDefundPoolResponse;
                fromProtoMsg(message: _17.MsgDefundPoolResponseProtoMsg): _17.MsgDefundPoolResponse;
                toProto(message: _17.MsgDefundPoolResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDefundPoolResponse): _17.MsgDefundPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _17.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateParams;
                fromPartial(object: Partial<_17.MsgUpdateParams>): _17.MsgUpdateParams;
                fromAmino(object: _17.MsgUpdateParamsAmino): _17.MsgUpdateParams;
                toAmino(message: _17.MsgUpdateParams): _17.MsgUpdateParamsAmino;
                fromAminoMsg(object: _17.MsgUpdateParamsAminoMsg): _17.MsgUpdateParams;
                fromProtoMsg(message: _17.MsgUpdateParamsProtoMsg): _17.MsgUpdateParams;
                toProto(message: _17.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateParams): _17.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_17.MsgUpdateParamsResponse>): _17.MsgUpdateParamsResponse;
                fromAmino(_: _17.MsgUpdateParamsResponseAmino): _17.MsgUpdateParamsResponse;
                toAmino(_: _17.MsgUpdateParamsResponse): _17.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateParamsResponseAminoMsg): _17.MsgUpdateParamsResponse;
                fromProtoMsg(message: _17.MsgUpdateParamsResponseProtoMsg): _17.MsgUpdateParamsResponse;
                toProto(message: _17.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateParamsResponse): _17.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _16.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.QueryParamsRequest;
                fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
                fromAmino(_: _16.QueryParamsRequestAmino): _16.QueryParamsRequest;
                toAmino(_: _16.QueryParamsRequest): _16.QueryParamsRequestAmino;
                fromAminoMsg(object: _16.QueryParamsRequestAminoMsg): _16.QueryParamsRequest;
                fromProtoMsg(message: _16.QueryParamsRequestProtoMsg): _16.QueryParamsRequest;
                toProto(message: _16.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryParamsRequest): _16.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _16.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryParamsResponse;
                fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
                fromAmino(object: _16.QueryParamsResponseAmino): _16.QueryParamsResponse;
                toAmino(message: _16.QueryParamsResponse): _16.QueryParamsResponseAmino;
                fromAminoMsg(object: _16.QueryParamsResponseAminoMsg): _16.QueryParamsResponse;
                fromProtoMsg(message: _16.QueryParamsResponseProtoMsg): _16.QueryParamsResponse;
                toProto(message: _16.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryParamsResponse): _16.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _15.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Params;
                fromPartial(object: Partial<_15.Params>): _15.Params;
                fromAmino(object: _15.ParamsAmino): _15.Params;
                toAmino(message: _15.Params): _15.ParamsAmino;
                fromAminoMsg(object: _15.ParamsAminoMsg): _15.Params;
                fromProtoMsg(message: _15.ParamsProtoMsg): _15.Params;
                toProto(message: _15.Params): Uint8Array;
                toProtoMsg(message: _15.Params): _15.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _14.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
                fromAmino(object: _14.GenesisStateAmino): _14.GenesisState;
                toAmino(message: _14.GenesisState): _14.GenesisStateAmino;
                fromAminoMsg(object: _14.GenesisStateAminoMsg): _14.GenesisState;
                fromProtoMsg(message: _14.GenesisStateProtoMsg): _14.GenesisState;
                toProto(message: _14.GenesisState): Uint8Array;
                toProtoMsg(message: _14.GenesisState): _14.GenesisStateProtoMsg;
            };
            Funder: {
                typeUrl: string;
                encode(message: _13.Funder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Funder;
                fromPartial(object: Partial<_13.Funder>): _13.Funder;
                fromAmino(object: _13.FunderAmino): _13.Funder;
                toAmino(message: _13.Funder): _13.FunderAmino;
                fromAminoMsg(object: _13.FunderAminoMsg): _13.Funder;
                fromProtoMsg(message: _13.FunderProtoMsg): _13.Funder;
                toProto(message: _13.Funder): Uint8Array;
                toProtoMsg(message: _13.Funder): _13.FunderProtoMsg;
            };
            Funding: {
                typeUrl: string;
                encode(message: _13.Funding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Funding;
                fromPartial(object: Partial<_13.Funding>): _13.Funding;
                fromAmino(object: _13.FundingAmino): _13.Funding;
                toAmino(message: _13.Funding): _13.FundingAmino;
                fromAminoMsg(object: _13.FundingAminoMsg): _13.Funding;
                fromProtoMsg(message: _13.FundingProtoMsg): _13.Funding;
                toProto(message: _13.Funding): Uint8Array;
                toProtoMsg(message: _13.Funding): _13.FundingProtoMsg;
            };
            FundingState: {
                typeUrl: string;
                encode(message: _13.FundingState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.FundingState;
                fromPartial(object: Partial<_13.FundingState>): _13.FundingState;
                fromAmino(object: _13.FundingStateAmino): _13.FundingState;
                toAmino(message: _13.FundingState): _13.FundingStateAmino;
                fromAminoMsg(object: _13.FundingStateAminoMsg): _13.FundingState;
                fromProtoMsg(message: _13.FundingStateProtoMsg): _13.FundingState;
                toProto(message: _13.FundingState): Uint8Array;
                toProtoMsg(message: _13.FundingState): _13.FundingStateProtoMsg;
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
            EventCreateFunder: {
                typeUrl: string;
                encode(message: _12.EventCreateFunder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventCreateFunder;
                fromPartial(object: Partial<_12.EventCreateFunder>): _12.EventCreateFunder;
                fromAmino(object: _12.EventCreateFunderAmino): _12.EventCreateFunder;
                toAmino(message: _12.EventCreateFunder): _12.EventCreateFunderAmino;
                fromAminoMsg(object: _12.EventCreateFunderAminoMsg): _12.EventCreateFunder;
                fromProtoMsg(message: _12.EventCreateFunderProtoMsg): _12.EventCreateFunder;
                toProto(message: _12.EventCreateFunder): Uint8Array;
                toProtoMsg(message: _12.EventCreateFunder): _12.EventCreateFunderProtoMsg;
            };
            EventUpdateFunder: {
                typeUrl: string;
                encode(message: _12.EventUpdateFunder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventUpdateFunder;
                fromPartial(object: Partial<_12.EventUpdateFunder>): _12.EventUpdateFunder;
                fromAmino(object: _12.EventUpdateFunderAmino): _12.EventUpdateFunder;
                toAmino(message: _12.EventUpdateFunder): _12.EventUpdateFunderAmino;
                fromAminoMsg(object: _12.EventUpdateFunderAminoMsg): _12.EventUpdateFunder;
                fromProtoMsg(message: _12.EventUpdateFunderProtoMsg): _12.EventUpdateFunder;
                toProto(message: _12.EventUpdateFunder): Uint8Array;
                toProtoMsg(message: _12.EventUpdateFunder): _12.EventUpdateFunderProtoMsg;
            };
            EventFundPool: {
                typeUrl: string;
                encode(message: _12.EventFundPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventFundPool;
                fromPartial(object: Partial<_12.EventFundPool>): _12.EventFundPool;
                fromAmino(object: _12.EventFundPoolAmino): _12.EventFundPool;
                toAmino(message: _12.EventFundPool): _12.EventFundPoolAmino;
                fromAminoMsg(object: _12.EventFundPoolAminoMsg): _12.EventFundPool;
                fromProtoMsg(message: _12.EventFundPoolProtoMsg): _12.EventFundPool;
                toProto(message: _12.EventFundPool): Uint8Array;
                toProtoMsg(message: _12.EventFundPool): _12.EventFundPoolProtoMsg;
            };
            EventDefundPool: {
                typeUrl: string;
                encode(message: _12.EventDefundPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventDefundPool;
                fromPartial(object: Partial<_12.EventDefundPool>): _12.EventDefundPool;
                fromAmino(object: _12.EventDefundPoolAmino): _12.EventDefundPool;
                toAmino(message: _12.EventDefundPool): _12.EventDefundPoolAmino;
                fromAminoMsg(object: _12.EventDefundPoolAminoMsg): _12.EventDefundPool;
                fromProtoMsg(message: _12.EventDefundPoolProtoMsg): _12.EventDefundPool;
                toProto(message: _12.EventDefundPool): Uint8Array;
                toProtoMsg(message: _12.EventDefundPool): _12.EventDefundPoolProtoMsg;
            };
            EventPoolOutOfFunds: {
                typeUrl: string;
                encode(message: _12.EventPoolOutOfFunds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventPoolOutOfFunds;
                fromPartial(object: Partial<_12.EventPoolOutOfFunds>): _12.EventPoolOutOfFunds;
                fromAmino(object: _12.EventPoolOutOfFundsAmino): _12.EventPoolOutOfFunds;
                toAmino(message: _12.EventPoolOutOfFunds): _12.EventPoolOutOfFundsAmino;
                fromAminoMsg(object: _12.EventPoolOutOfFundsAminoMsg): _12.EventPoolOutOfFunds;
                fromProtoMsg(message: _12.EventPoolOutOfFundsProtoMsg): _12.EventPoolOutOfFunds;
                toProto(message: _12.EventPoolOutOfFunds): Uint8Array;
                toProtoMsg(message: _12.EventPoolOutOfFunds): _12.EventPoolOutOfFundsProtoMsg;
            };
        };
    }
    namespace global {
        const v1beta1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.global.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _22.MsgUpdateParams) => _22.MsgUpdateParamsAmino;
                    fromAmino: (object: _22.MsgUpdateParamsAmino) => _22.MsgUpdateParams;
                };
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
            Params: {
                typeUrl: string;
                encode(message: _20.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Params;
                fromPartial(object: Partial<_20.Params>): _20.Params;
                fromAmino(object: _20.ParamsAmino): _20.Params;
                toAmino(message: _20.Params): _20.ParamsAmino;
                fromAminoMsg(object: _20.ParamsAminoMsg): _20.Params;
                fromProtoMsg(message: _20.ParamsProtoMsg): _20.Params;
                toProto(message: _20.Params): Uint8Array;
                toProtoMsg(message: _20.Params): _20.ParamsProtoMsg;
            };
            GasAdjustment: {
                typeUrl: string;
                encode(message: _20.GasAdjustment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GasAdjustment;
                fromPartial(object: Partial<_20.GasAdjustment>): _20.GasAdjustment;
                fromAmino(object: _20.GasAdjustmentAmino): _20.GasAdjustment;
                toAmino(message: _20.GasAdjustment): _20.GasAdjustmentAmino;
                fromAminoMsg(object: _20.GasAdjustmentAminoMsg): _20.GasAdjustment;
                fromProtoMsg(message: _20.GasAdjustmentProtoMsg): _20.GasAdjustment;
                toProto(message: _20.GasAdjustment): Uint8Array;
                toProtoMsg(message: _20.GasAdjustment): _20.GasAdjustmentProtoMsg;
            };
            GasRefund: {
                typeUrl: string;
                encode(message: _20.GasRefund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GasRefund;
                fromPartial(object: Partial<_20.GasRefund>): _20.GasRefund;
                fromAmino(object: _20.GasRefundAmino): _20.GasRefund;
                toAmino(message: _20.GasRefund): _20.GasRefundAmino;
                fromAminoMsg(object: _20.GasRefundAminoMsg): _20.GasRefund;
                fromProtoMsg(message: _20.GasRefundProtoMsg): _20.GasRefund;
                toProto(message: _20.GasRefund): Uint8Array;
                toProtoMsg(message: _20.GasRefund): _20.GasRefundProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
                fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
                toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
                fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
                fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
                toProto(message: _19.GenesisState): Uint8Array;
                toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
            };
            EventUpdateParams: {
                typeUrl: string;
                encode(message: _18.EventUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.EventUpdateParams;
                fromPartial(object: Partial<_18.EventUpdateParams>): _18.EventUpdateParams;
                fromAmino(object: _18.EventUpdateParamsAmino): _18.EventUpdateParams;
                toAmino(message: _18.EventUpdateParams): _18.EventUpdateParamsAmino;
                fromAminoMsg(object: _18.EventUpdateParamsAminoMsg): _18.EventUpdateParams;
                fromProtoMsg(message: _18.EventUpdateParamsProtoMsg): _18.EventUpdateParams;
                toProto(message: _18.EventUpdateParams): Uint8Array;
                toProtoMsg(message: _18.EventUpdateParams): _18.EventUpdateParamsProtoMsg;
            };
        };
    }
    namespace pool {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _211.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPool(value: _28.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePool(value: _28.MsgUpdatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    disablePool(value: _28.MsgDisablePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    enablePool(value: _28.MsgEnablePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    scheduleRuntimeUpgrade(value: _28.MsgScheduleRuntimeUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelRuntimeUpgrade(value: _28.MsgCancelRuntimeUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPool(value: _28.MsgCreatePool): {
                        typeUrl: string;
                        value: _28.MsgCreatePool;
                    };
                    updatePool(value: _28.MsgUpdatePool): {
                        typeUrl: string;
                        value: _28.MsgUpdatePool;
                    };
                    disablePool(value: _28.MsgDisablePool): {
                        typeUrl: string;
                        value: _28.MsgDisablePool;
                    };
                    enablePool(value: _28.MsgEnablePool): {
                        typeUrl: string;
                        value: _28.MsgEnablePool;
                    };
                    scheduleRuntimeUpgrade(value: _28.MsgScheduleRuntimeUpgrade): {
                        typeUrl: string;
                        value: _28.MsgScheduleRuntimeUpgrade;
                    };
                    cancelRuntimeUpgrade(value: _28.MsgCancelRuntimeUpgrade): {
                        typeUrl: string;
                        value: _28.MsgCancelRuntimeUpgrade;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: _28.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createPool(value: any): {
                        typeUrl: string;
                        value: _28.MsgCreatePool;
                    };
                    updatePool(value: any): {
                        typeUrl: string;
                        value: _28.MsgUpdatePool;
                    };
                    disablePool(value: any): {
                        typeUrl: string;
                        value: _28.MsgDisablePool;
                    };
                    enablePool(value: any): {
                        typeUrl: string;
                        value: _28.MsgEnablePool;
                    };
                    scheduleRuntimeUpgrade(value: any): {
                        typeUrl: string;
                        value: _28.MsgScheduleRuntimeUpgrade;
                    };
                    cancelRuntimeUpgrade(value: any): {
                        typeUrl: string;
                        value: _28.MsgCancelRuntimeUpgrade;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _28.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createPool(value: _28.MsgCreatePool): {
                        typeUrl: string;
                        value: _28.MsgCreatePool;
                    };
                    updatePool(value: _28.MsgUpdatePool): {
                        typeUrl: string;
                        value: _28.MsgUpdatePool;
                    };
                    disablePool(value: _28.MsgDisablePool): {
                        typeUrl: string;
                        value: _28.MsgDisablePool;
                    };
                    enablePool(value: _28.MsgEnablePool): {
                        typeUrl: string;
                        value: _28.MsgEnablePool;
                    };
                    scheduleRuntimeUpgrade(value: _28.MsgScheduleRuntimeUpgrade): {
                        typeUrl: string;
                        value: _28.MsgScheduleRuntimeUpgrade;
                    };
                    cancelRuntimeUpgrade(value: _28.MsgCancelRuntimeUpgrade): {
                        typeUrl: string;
                        value: _28.MsgCancelRuntimeUpgrade;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: _28.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.pool.v1beta1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: (message: _28.MsgCreatePool) => _28.MsgCreatePoolAmino;
                    fromAmino: (object: _28.MsgCreatePoolAmino) => _28.MsgCreatePool;
                };
                "/kyve.pool.v1beta1.MsgUpdatePool": {
                    aminoType: string;
                    toAmino: (message: _28.MsgUpdatePool) => _28.MsgUpdatePoolAmino;
                    fromAmino: (object: _28.MsgUpdatePoolAmino) => _28.MsgUpdatePool;
                };
                "/kyve.pool.v1beta1.MsgDisablePool": {
                    aminoType: string;
                    toAmino: (message: _28.MsgDisablePool) => _28.MsgDisablePoolAmino;
                    fromAmino: (object: _28.MsgDisablePoolAmino) => _28.MsgDisablePool;
                };
                "/kyve.pool.v1beta1.MsgEnablePool": {
                    aminoType: string;
                    toAmino: (message: _28.MsgEnablePool) => _28.MsgEnablePoolAmino;
                    fromAmino: (object: _28.MsgEnablePoolAmino) => _28.MsgEnablePool;
                };
                "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
                    aminoType: string;
                    toAmino: (message: _28.MsgScheduleRuntimeUpgrade) => _28.MsgScheduleRuntimeUpgradeAmino;
                    fromAmino: (object: _28.MsgScheduleRuntimeUpgradeAmino) => _28.MsgScheduleRuntimeUpgrade;
                };
                "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
                    aminoType: string;
                    toAmino: (message: _28.MsgCancelRuntimeUpgrade) => _28.MsgCancelRuntimeUpgradeAmino;
                    fromAmino: (object: _28.MsgCancelRuntimeUpgradeAmino) => _28.MsgCancelRuntimeUpgrade;
                };
                "/kyve.pool.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _28.MsgUpdateParams) => _28.MsgUpdateParamsAmino;
                    fromAmino: (object: _28.MsgUpdateParamsAmino) => _28.MsgUpdateParams;
                };
            };
            MsgCreatePool: {
                typeUrl: string;
                encode(message: _28.MsgCreatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgCreatePool;
                fromPartial(object: Partial<_28.MsgCreatePool>): _28.MsgCreatePool;
                fromAmino(object: _28.MsgCreatePoolAmino): _28.MsgCreatePool;
                toAmino(message: _28.MsgCreatePool): _28.MsgCreatePoolAmino;
                fromAminoMsg(object: _28.MsgCreatePoolAminoMsg): _28.MsgCreatePool;
                fromProtoMsg(message: _28.MsgCreatePoolProtoMsg): _28.MsgCreatePool;
                toProto(message: _28.MsgCreatePool): Uint8Array;
                toProtoMsg(message: _28.MsgCreatePool): _28.MsgCreatePoolProtoMsg;
            };
            MsgCreatePoolResponse: {
                typeUrl: string;
                encode(_: _28.MsgCreatePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgCreatePoolResponse;
                fromPartial(_: Partial<_28.MsgCreatePoolResponse>): _28.MsgCreatePoolResponse;
                fromAmino(_: _28.MsgCreatePoolResponseAmino): _28.MsgCreatePoolResponse;
                toAmino(_: _28.MsgCreatePoolResponse): _28.MsgCreatePoolResponseAmino;
                fromAminoMsg(object: _28.MsgCreatePoolResponseAminoMsg): _28.MsgCreatePoolResponse;
                fromProtoMsg(message: _28.MsgCreatePoolResponseProtoMsg): _28.MsgCreatePoolResponse;
                toProto(message: _28.MsgCreatePoolResponse): Uint8Array;
                toProtoMsg(message: _28.MsgCreatePoolResponse): _28.MsgCreatePoolResponseProtoMsg;
            };
            MsgUpdatePool: {
                typeUrl: string;
                encode(message: _28.MsgUpdatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgUpdatePool;
                fromPartial(object: Partial<_28.MsgUpdatePool>): _28.MsgUpdatePool;
                fromAmino(object: _28.MsgUpdatePoolAmino): _28.MsgUpdatePool;
                toAmino(message: _28.MsgUpdatePool): _28.MsgUpdatePoolAmino;
                fromAminoMsg(object: _28.MsgUpdatePoolAminoMsg): _28.MsgUpdatePool;
                fromProtoMsg(message: _28.MsgUpdatePoolProtoMsg): _28.MsgUpdatePool;
                toProto(message: _28.MsgUpdatePool): Uint8Array;
                toProtoMsg(message: _28.MsgUpdatePool): _28.MsgUpdatePoolProtoMsg;
            };
            MsgUpdatePoolResponse: {
                typeUrl: string;
                encode(_: _28.MsgUpdatePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgUpdatePoolResponse;
                fromPartial(_: Partial<_28.MsgUpdatePoolResponse>): _28.MsgUpdatePoolResponse;
                fromAmino(_: _28.MsgUpdatePoolResponseAmino): _28.MsgUpdatePoolResponse;
                toAmino(_: _28.MsgUpdatePoolResponse): _28.MsgUpdatePoolResponseAmino;
                fromAminoMsg(object: _28.MsgUpdatePoolResponseAminoMsg): _28.MsgUpdatePoolResponse;
                fromProtoMsg(message: _28.MsgUpdatePoolResponseProtoMsg): _28.MsgUpdatePoolResponse;
                toProto(message: _28.MsgUpdatePoolResponse): Uint8Array;
                toProtoMsg(message: _28.MsgUpdatePoolResponse): _28.MsgUpdatePoolResponseProtoMsg;
            };
            MsgDisablePool: {
                typeUrl: string;
                encode(message: _28.MsgDisablePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgDisablePool;
                fromPartial(object: Partial<_28.MsgDisablePool>): _28.MsgDisablePool;
                fromAmino(object: _28.MsgDisablePoolAmino): _28.MsgDisablePool;
                toAmino(message: _28.MsgDisablePool): _28.MsgDisablePoolAmino;
                fromAminoMsg(object: _28.MsgDisablePoolAminoMsg): _28.MsgDisablePool;
                fromProtoMsg(message: _28.MsgDisablePoolProtoMsg): _28.MsgDisablePool;
                toProto(message: _28.MsgDisablePool): Uint8Array;
                toProtoMsg(message: _28.MsgDisablePool): _28.MsgDisablePoolProtoMsg;
            };
            MsgDisablePoolResponse: {
                typeUrl: string;
                encode(_: _28.MsgDisablePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgDisablePoolResponse;
                fromPartial(_: Partial<_28.MsgDisablePoolResponse>): _28.MsgDisablePoolResponse;
                fromAmino(_: _28.MsgDisablePoolResponseAmino): _28.MsgDisablePoolResponse;
                toAmino(_: _28.MsgDisablePoolResponse): _28.MsgDisablePoolResponseAmino;
                fromAminoMsg(object: _28.MsgDisablePoolResponseAminoMsg): _28.MsgDisablePoolResponse;
                fromProtoMsg(message: _28.MsgDisablePoolResponseProtoMsg): _28.MsgDisablePoolResponse;
                toProto(message: _28.MsgDisablePoolResponse): Uint8Array;
                toProtoMsg(message: _28.MsgDisablePoolResponse): _28.MsgDisablePoolResponseProtoMsg;
            };
            MsgEnablePool: {
                typeUrl: string;
                encode(message: _28.MsgEnablePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgEnablePool;
                fromPartial(object: Partial<_28.MsgEnablePool>): _28.MsgEnablePool;
                fromAmino(object: _28.MsgEnablePoolAmino): _28.MsgEnablePool;
                toAmino(message: _28.MsgEnablePool): _28.MsgEnablePoolAmino;
                fromAminoMsg(object: _28.MsgEnablePoolAminoMsg): _28.MsgEnablePool;
                fromProtoMsg(message: _28.MsgEnablePoolProtoMsg): _28.MsgEnablePool;
                toProto(message: _28.MsgEnablePool): Uint8Array;
                toProtoMsg(message: _28.MsgEnablePool): _28.MsgEnablePoolProtoMsg;
            };
            MsgEnablePoolResponse: {
                typeUrl: string;
                encode(_: _28.MsgEnablePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgEnablePoolResponse;
                fromPartial(_: Partial<_28.MsgEnablePoolResponse>): _28.MsgEnablePoolResponse;
                fromAmino(_: _28.MsgEnablePoolResponseAmino): _28.MsgEnablePoolResponse;
                toAmino(_: _28.MsgEnablePoolResponse): _28.MsgEnablePoolResponseAmino;
                fromAminoMsg(object: _28.MsgEnablePoolResponseAminoMsg): _28.MsgEnablePoolResponse;
                fromProtoMsg(message: _28.MsgEnablePoolResponseProtoMsg): _28.MsgEnablePoolResponse;
                toProto(message: _28.MsgEnablePoolResponse): Uint8Array;
                toProtoMsg(message: _28.MsgEnablePoolResponse): _28.MsgEnablePoolResponseProtoMsg;
            };
            MsgScheduleRuntimeUpgrade: {
                typeUrl: string;
                encode(message: _28.MsgScheduleRuntimeUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgScheduleRuntimeUpgrade;
                fromPartial(object: Partial<_28.MsgScheduleRuntimeUpgrade>): _28.MsgScheduleRuntimeUpgrade;
                fromAmino(object: _28.MsgScheduleRuntimeUpgradeAmino): _28.MsgScheduleRuntimeUpgrade;
                toAmino(message: _28.MsgScheduleRuntimeUpgrade): _28.MsgScheduleRuntimeUpgradeAmino;
                fromAminoMsg(object: _28.MsgScheduleRuntimeUpgradeAminoMsg): _28.MsgScheduleRuntimeUpgrade;
                fromProtoMsg(message: _28.MsgScheduleRuntimeUpgradeProtoMsg): _28.MsgScheduleRuntimeUpgrade;
                toProto(message: _28.MsgScheduleRuntimeUpgrade): Uint8Array;
                toProtoMsg(message: _28.MsgScheduleRuntimeUpgrade): _28.MsgScheduleRuntimeUpgradeProtoMsg;
            };
            MsgScheduleRuntimeUpgradeResponse: {
                typeUrl: string;
                encode(_: _28.MsgScheduleRuntimeUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgScheduleRuntimeUpgradeResponse;
                fromPartial(_: Partial<_28.MsgScheduleRuntimeUpgradeResponse>): _28.MsgScheduleRuntimeUpgradeResponse;
                fromAmino(_: _28.MsgScheduleRuntimeUpgradeResponseAmino): _28.MsgScheduleRuntimeUpgradeResponse;
                toAmino(_: _28.MsgScheduleRuntimeUpgradeResponse): _28.MsgScheduleRuntimeUpgradeResponseAmino;
                fromAminoMsg(object: _28.MsgScheduleRuntimeUpgradeResponseAminoMsg): _28.MsgScheduleRuntimeUpgradeResponse;
                fromProtoMsg(message: _28.MsgScheduleRuntimeUpgradeResponseProtoMsg): _28.MsgScheduleRuntimeUpgradeResponse;
                toProto(message: _28.MsgScheduleRuntimeUpgradeResponse): Uint8Array;
                toProtoMsg(message: _28.MsgScheduleRuntimeUpgradeResponse): _28.MsgScheduleRuntimeUpgradeResponseProtoMsg;
            };
            MsgCancelRuntimeUpgrade: {
                typeUrl: string;
                encode(message: _28.MsgCancelRuntimeUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgCancelRuntimeUpgrade;
                fromPartial(object: Partial<_28.MsgCancelRuntimeUpgrade>): _28.MsgCancelRuntimeUpgrade;
                fromAmino(object: _28.MsgCancelRuntimeUpgradeAmino): _28.MsgCancelRuntimeUpgrade;
                toAmino(message: _28.MsgCancelRuntimeUpgrade): _28.MsgCancelRuntimeUpgradeAmino;
                fromAminoMsg(object: _28.MsgCancelRuntimeUpgradeAminoMsg): _28.MsgCancelRuntimeUpgrade;
                fromProtoMsg(message: _28.MsgCancelRuntimeUpgradeProtoMsg): _28.MsgCancelRuntimeUpgrade;
                toProto(message: _28.MsgCancelRuntimeUpgrade): Uint8Array;
                toProtoMsg(message: _28.MsgCancelRuntimeUpgrade): _28.MsgCancelRuntimeUpgradeProtoMsg;
            };
            MsgCancelRuntimeUpgradeResponse: {
                typeUrl: string;
                encode(_: _28.MsgCancelRuntimeUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgCancelRuntimeUpgradeResponse;
                fromPartial(_: Partial<_28.MsgCancelRuntimeUpgradeResponse>): _28.MsgCancelRuntimeUpgradeResponse;
                fromAmino(_: _28.MsgCancelRuntimeUpgradeResponseAmino): _28.MsgCancelRuntimeUpgradeResponse;
                toAmino(_: _28.MsgCancelRuntimeUpgradeResponse): _28.MsgCancelRuntimeUpgradeResponseAmino;
                fromAminoMsg(object: _28.MsgCancelRuntimeUpgradeResponseAminoMsg): _28.MsgCancelRuntimeUpgradeResponse;
                fromProtoMsg(message: _28.MsgCancelRuntimeUpgradeResponseProtoMsg): _28.MsgCancelRuntimeUpgradeResponse;
                toProto(message: _28.MsgCancelRuntimeUpgradeResponse): Uint8Array;
                toProtoMsg(message: _28.MsgCancelRuntimeUpgradeResponse): _28.MsgCancelRuntimeUpgradeResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _28.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgUpdateParams;
                fromPartial(object: Partial<_28.MsgUpdateParams>): _28.MsgUpdateParams;
                fromAmino(object: _28.MsgUpdateParamsAmino): _28.MsgUpdateParams;
                toAmino(message: _28.MsgUpdateParams): _28.MsgUpdateParamsAmino;
                fromAminoMsg(object: _28.MsgUpdateParamsAminoMsg): _28.MsgUpdateParams;
                fromProtoMsg(message: _28.MsgUpdateParamsProtoMsg): _28.MsgUpdateParams;
                toProto(message: _28.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _28.MsgUpdateParams): _28.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _28.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_28.MsgUpdateParamsResponse>): _28.MsgUpdateParamsResponse;
                fromAmino(_: _28.MsgUpdateParamsResponseAmino): _28.MsgUpdateParamsResponse;
                toAmino(_: _28.MsgUpdateParamsResponse): _28.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _28.MsgUpdateParamsResponseAminoMsg): _28.MsgUpdateParamsResponse;
                fromProtoMsg(message: _28.MsgUpdateParamsResponseProtoMsg): _28.MsgUpdateParamsResponse;
                toProto(message: _28.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _28.MsgUpdateParamsResponse): _28.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _27.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.QueryParamsRequest;
                fromPartial(_: Partial<_27.QueryParamsRequest>): _27.QueryParamsRequest;
                fromAmino(_: _27.QueryParamsRequestAmino): _27.QueryParamsRequest;
                toAmino(_: _27.QueryParamsRequest): _27.QueryParamsRequestAmino;
                fromAminoMsg(object: _27.QueryParamsRequestAminoMsg): _27.QueryParamsRequest;
                fromProtoMsg(message: _27.QueryParamsRequestProtoMsg): _27.QueryParamsRequest;
                toProto(message: _27.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _27.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryParamsResponse;
                fromPartial(object: Partial<_27.QueryParamsResponse>): _27.QueryParamsResponse;
                fromAmino(object: _27.QueryParamsResponseAmino): _27.QueryParamsResponse;
                toAmino(message: _27.QueryParamsResponse): _27.QueryParamsResponseAmino;
                fromAminoMsg(object: _27.QueryParamsResponseAminoMsg): _27.QueryParamsResponse;
                fromProtoMsg(message: _27.QueryParamsResponseProtoMsg): _27.QueryParamsResponse;
                toProto(message: _27.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseProtoMsg;
            };
            poolStatusFromJSON(object: any): _26.PoolStatus;
            poolStatusToJSON(object: _26.PoolStatus): string;
            PoolStatus: typeof _26.PoolStatus;
            PoolStatusSDKType: typeof _26.PoolStatus;
            PoolStatusAmino: typeof _26.PoolStatus;
            Protocol: {
                typeUrl: string;
                encode(message: _26.Protocol, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Protocol;
                fromPartial(object: Partial<_26.Protocol>): _26.Protocol;
                fromAmino(object: _26.ProtocolAmino): _26.Protocol;
                toAmino(message: _26.Protocol): _26.ProtocolAmino;
                fromAminoMsg(object: _26.ProtocolAminoMsg): _26.Protocol;
                fromProtoMsg(message: _26.ProtocolProtoMsg): _26.Protocol;
                toProto(message: _26.Protocol): Uint8Array;
                toProtoMsg(message: _26.Protocol): _26.ProtocolProtoMsg;
            };
            UpgradePlan: {
                typeUrl: string;
                encode(message: _26.UpgradePlan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.UpgradePlan;
                fromPartial(object: Partial<_26.UpgradePlan>): _26.UpgradePlan;
                fromAmino(object: _26.UpgradePlanAmino): _26.UpgradePlan;
                toAmino(message: _26.UpgradePlan): _26.UpgradePlanAmino;
                fromAminoMsg(object: _26.UpgradePlanAminoMsg): _26.UpgradePlan;
                fromProtoMsg(message: _26.UpgradePlanProtoMsg): _26.UpgradePlan;
                toProto(message: _26.UpgradePlan): Uint8Array;
                toProtoMsg(message: _26.UpgradePlan): _26.UpgradePlanProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _26.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Pool;
                fromPartial(object: Partial<_26.Pool>): _26.Pool;
                fromAmino(object: _26.PoolAmino): _26.Pool;
                toAmino(message: _26.Pool): _26.PoolAmino;
                fromAminoMsg(object: _26.PoolAminoMsg): _26.Pool;
                fromProtoMsg(message: _26.PoolProtoMsg): _26.Pool;
                toProto(message: _26.Pool): Uint8Array;
                toProtoMsg(message: _26.Pool): _26.PoolProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _25.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Params;
                fromPartial(object: Partial<_25.Params>): _25.Params;
                fromAmino(object: _25.ParamsAmino): _25.Params;
                toAmino(message: _25.Params): _25.ParamsAmino;
                fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
                fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
                toProto(message: _25.Params): Uint8Array;
                toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _24.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
                fromAmino(object: _24.GenesisStateAmino): _24.GenesisState;
                toAmino(message: _24.GenesisState): _24.GenesisStateAmino;
                fromAminoMsg(object: _24.GenesisStateAminoMsg): _24.GenesisState;
                fromProtoMsg(message: _24.GenesisStateProtoMsg): _24.GenesisState;
                toProto(message: _24.GenesisState): Uint8Array;
                toProtoMsg(message: _24.GenesisState): _24.GenesisStateProtoMsg;
            };
            EventUpdateParams: {
                typeUrl: string;
                encode(message: _23.EventUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.EventUpdateParams;
                fromPartial(object: Partial<_23.EventUpdateParams>): _23.EventUpdateParams;
                fromAmino(object: _23.EventUpdateParamsAmino): _23.EventUpdateParams;
                toAmino(message: _23.EventUpdateParams): _23.EventUpdateParamsAmino;
                fromAminoMsg(object: _23.EventUpdateParamsAminoMsg): _23.EventUpdateParams;
                fromProtoMsg(message: _23.EventUpdateParamsProtoMsg): _23.EventUpdateParams;
                toProto(message: _23.EventUpdateParams): Uint8Array;
                toProtoMsg(message: _23.EventUpdateParams): _23.EventUpdateParamsProtoMsg;
            };
            EventCreatePool: {
                typeUrl: string;
                encode(message: _23.EventCreatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.EventCreatePool;
                fromPartial(object: Partial<_23.EventCreatePool>): _23.EventCreatePool;
                fromAmino(object: _23.EventCreatePoolAmino): _23.EventCreatePool;
                toAmino(message: _23.EventCreatePool): _23.EventCreatePoolAmino;
                fromAminoMsg(object: _23.EventCreatePoolAminoMsg): _23.EventCreatePool;
                fromProtoMsg(message: _23.EventCreatePoolProtoMsg): _23.EventCreatePool;
                toProto(message: _23.EventCreatePool): Uint8Array;
                toProtoMsg(message: _23.EventCreatePool): _23.EventCreatePoolProtoMsg;
            };
            EventPoolEnabled: {
                typeUrl: string;
                encode(message: _23.EventPoolEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.EventPoolEnabled;
                fromPartial(object: Partial<_23.EventPoolEnabled>): _23.EventPoolEnabled;
                fromAmino(object: _23.EventPoolEnabledAmino): _23.EventPoolEnabled;
                toAmino(message: _23.EventPoolEnabled): _23.EventPoolEnabledAmino;
                fromAminoMsg(object: _23.EventPoolEnabledAminoMsg): _23.EventPoolEnabled;
                fromProtoMsg(message: _23.EventPoolEnabledProtoMsg): _23.EventPoolEnabled;
                toProto(message: _23.EventPoolEnabled): Uint8Array;
                toProtoMsg(message: _23.EventPoolEnabled): _23.EventPoolEnabledProtoMsg;
            };
            EventPoolDisabled: {
                typeUrl: string;
                encode(message: _23.EventPoolDisabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.EventPoolDisabled;
                fromPartial(object: Partial<_23.EventPoolDisabled>): _23.EventPoolDisabled;
                fromAmino(object: _23.EventPoolDisabledAmino): _23.EventPoolDisabled;
                toAmino(message: _23.EventPoolDisabled): _23.EventPoolDisabledAmino;
                fromAminoMsg(object: _23.EventPoolDisabledAminoMsg): _23.EventPoolDisabled;
                fromProtoMsg(message: _23.EventPoolDisabledProtoMsg): _23.EventPoolDisabled;
                toProto(message: _23.EventPoolDisabled): Uint8Array;
                toProtoMsg(message: _23.EventPoolDisabled): _23.EventPoolDisabledProtoMsg;
            };
            EventRuntimeUpgradeScheduled: {
                typeUrl: string;
                encode(message: _23.EventRuntimeUpgradeScheduled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.EventRuntimeUpgradeScheduled;
                fromPartial(object: Partial<_23.EventRuntimeUpgradeScheduled>): _23.EventRuntimeUpgradeScheduled;
                fromAmino(object: _23.EventRuntimeUpgradeScheduledAmino): _23.EventRuntimeUpgradeScheduled;
                toAmino(message: _23.EventRuntimeUpgradeScheduled): _23.EventRuntimeUpgradeScheduledAmino;
                fromAminoMsg(object: _23.EventRuntimeUpgradeScheduledAminoMsg): _23.EventRuntimeUpgradeScheduled;
                fromProtoMsg(message: _23.EventRuntimeUpgradeScheduledProtoMsg): _23.EventRuntimeUpgradeScheduled;
                toProto(message: _23.EventRuntimeUpgradeScheduled): Uint8Array;
                toProtoMsg(message: _23.EventRuntimeUpgradeScheduled): _23.EventRuntimeUpgradeScheduledProtoMsg;
            };
            EventRuntimeUpgradeCancelled: {
                typeUrl: string;
                encode(message: _23.EventRuntimeUpgradeCancelled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.EventRuntimeUpgradeCancelled;
                fromPartial(object: Partial<_23.EventRuntimeUpgradeCancelled>): _23.EventRuntimeUpgradeCancelled;
                fromAmino(object: _23.EventRuntimeUpgradeCancelledAmino): _23.EventRuntimeUpgradeCancelled;
                toAmino(message: _23.EventRuntimeUpgradeCancelled): _23.EventRuntimeUpgradeCancelledAmino;
                fromAminoMsg(object: _23.EventRuntimeUpgradeCancelledAminoMsg): _23.EventRuntimeUpgradeCancelled;
                fromProtoMsg(message: _23.EventRuntimeUpgradeCancelledProtoMsg): _23.EventRuntimeUpgradeCancelled;
                toProto(message: _23.EventRuntimeUpgradeCancelled): Uint8Array;
                toProtoMsg(message: _23.EventRuntimeUpgradeCancelled): _23.EventRuntimeUpgradeCancelledProtoMsg;
            };
            EventPoolUpdated: {
                typeUrl: string;
                encode(message: _23.EventPoolUpdated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.EventPoolUpdated;
                fromPartial(object: Partial<_23.EventPoolUpdated>): _23.EventPoolUpdated;
                fromAmino(object: _23.EventPoolUpdatedAmino): _23.EventPoolUpdated;
                toAmino(message: _23.EventPoolUpdated): _23.EventPoolUpdatedAmino;
                fromAminoMsg(object: _23.EventPoolUpdatedAminoMsg): _23.EventPoolUpdated;
                fromProtoMsg(message: _23.EventPoolUpdatedProtoMsg): _23.EventPoolUpdated;
                toProto(message: _23.EventPoolUpdated): Uint8Array;
                toProtoMsg(message: _23.EventPoolUpdated): _23.EventPoolUpdatedProtoMsg;
            };
            EventPoolFundsSlashed: {
                typeUrl: string;
                encode(message: _23.EventPoolFundsSlashed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.EventPoolFundsSlashed;
                fromPartial(object: Partial<_23.EventPoolFundsSlashed>): _23.EventPoolFundsSlashed;
                fromAmino(object: _23.EventPoolFundsSlashedAmino): _23.EventPoolFundsSlashed;
                toAmino(message: _23.EventPoolFundsSlashed): _23.EventPoolFundsSlashedAmino;
                fromAminoMsg(object: _23.EventPoolFundsSlashedAminoMsg): _23.EventPoolFundsSlashed;
                fromProtoMsg(message: _23.EventPoolFundsSlashedProtoMsg): _23.EventPoolFundsSlashed;
                toProto(message: _23.EventPoolFundsSlashed): Uint8Array;
                toProtoMsg(message: _23.EventPoolFundsSlashed): _23.EventPoolFundsSlashedProtoMsg;
            };
        };
    }
    namespace query {
        const v1beta1: {
            stakerStatusFromJSON(object: any): _36.StakerStatus;
            stakerStatusToJSON(object: _36.StakerStatus): string;
            StakerStatus: typeof _36.StakerStatus;
            StakerStatusSDKType: typeof _36.StakerStatus;
            StakerStatusAmino: typeof _36.StakerStatus;
            QueryStakersRequest: {
                typeUrl: string;
                encode(message: _36.QueryStakersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryStakersRequest;
                fromPartial(object: Partial<_36.QueryStakersRequest>): _36.QueryStakersRequest;
                fromAmino(object: _36.QueryStakersRequestAmino): _36.QueryStakersRequest;
                toAmino(message: _36.QueryStakersRequest): _36.QueryStakersRequestAmino;
                fromAminoMsg(object: _36.QueryStakersRequestAminoMsg): _36.QueryStakersRequest;
                fromProtoMsg(message: _36.QueryStakersRequestProtoMsg): _36.QueryStakersRequest;
                toProto(message: _36.QueryStakersRequest): Uint8Array;
                toProtoMsg(message: _36.QueryStakersRequest): _36.QueryStakersRequestProtoMsg;
            };
            QueryStakersResponse: {
                typeUrl: string;
                encode(message: _36.QueryStakersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryStakersResponse;
                fromPartial(object: Partial<_36.QueryStakersResponse>): _36.QueryStakersResponse;
                fromAmino(object: _36.QueryStakersResponseAmino): _36.QueryStakersResponse;
                toAmino(message: _36.QueryStakersResponse): _36.QueryStakersResponseAmino;
                fromAminoMsg(object: _36.QueryStakersResponseAminoMsg): _36.QueryStakersResponse;
                fromProtoMsg(message: _36.QueryStakersResponseProtoMsg): _36.QueryStakersResponse;
                toProto(message: _36.QueryStakersResponse): Uint8Array;
                toProtoMsg(message: _36.QueryStakersResponse): _36.QueryStakersResponseProtoMsg;
            };
            QueryStakerRequest: {
                typeUrl: string;
                encode(message: _36.QueryStakerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryStakerRequest;
                fromPartial(object: Partial<_36.QueryStakerRequest>): _36.QueryStakerRequest;
                fromAmino(object: _36.QueryStakerRequestAmino): _36.QueryStakerRequest;
                toAmino(message: _36.QueryStakerRequest): _36.QueryStakerRequestAmino;
                fromAminoMsg(object: _36.QueryStakerRequestAminoMsg): _36.QueryStakerRequest;
                fromProtoMsg(message: _36.QueryStakerRequestProtoMsg): _36.QueryStakerRequest;
                toProto(message: _36.QueryStakerRequest): Uint8Array;
                toProtoMsg(message: _36.QueryStakerRequest): _36.QueryStakerRequestProtoMsg;
            };
            QueryStakerResponse: {
                typeUrl: string;
                encode(message: _36.QueryStakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryStakerResponse;
                fromPartial(object: Partial<_36.QueryStakerResponse>): _36.QueryStakerResponse;
                fromAmino(object: _36.QueryStakerResponseAmino): _36.QueryStakerResponse;
                toAmino(message: _36.QueryStakerResponse): _36.QueryStakerResponseAmino;
                fromAminoMsg(object: _36.QueryStakerResponseAminoMsg): _36.QueryStakerResponse;
                fromProtoMsg(message: _36.QueryStakerResponseProtoMsg): _36.QueryStakerResponse;
                toProto(message: _36.QueryStakerResponse): Uint8Array;
                toProtoMsg(message: _36.QueryStakerResponse): _36.QueryStakerResponseProtoMsg;
            };
            QueryStakersByPoolRequest: {
                typeUrl: string;
                encode(message: _36.QueryStakersByPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryStakersByPoolRequest;
                fromPartial(object: Partial<_36.QueryStakersByPoolRequest>): _36.QueryStakersByPoolRequest;
                fromAmino(object: _36.QueryStakersByPoolRequestAmino): _36.QueryStakersByPoolRequest;
                toAmino(message: _36.QueryStakersByPoolRequest): _36.QueryStakersByPoolRequestAmino;
                fromAminoMsg(object: _36.QueryStakersByPoolRequestAminoMsg): _36.QueryStakersByPoolRequest;
                fromProtoMsg(message: _36.QueryStakersByPoolRequestProtoMsg): _36.QueryStakersByPoolRequest;
                toProto(message: _36.QueryStakersByPoolRequest): Uint8Array;
                toProtoMsg(message: _36.QueryStakersByPoolRequest): _36.QueryStakersByPoolRequestProtoMsg;
            };
            QueryStakersByPoolResponse: {
                typeUrl: string;
                encode(message: _36.QueryStakersByPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryStakersByPoolResponse;
                fromPartial(object: Partial<_36.QueryStakersByPoolResponse>): _36.QueryStakersByPoolResponse;
                fromAmino(object: _36.QueryStakersByPoolResponseAmino): _36.QueryStakersByPoolResponse;
                toAmino(message: _36.QueryStakersByPoolResponse): _36.QueryStakersByPoolResponseAmino;
                fromAminoMsg(object: _36.QueryStakersByPoolResponseAminoMsg): _36.QueryStakersByPoolResponse;
                fromProtoMsg(message: _36.QueryStakersByPoolResponseProtoMsg): _36.QueryStakersByPoolResponse;
                toProto(message: _36.QueryStakersByPoolResponse): Uint8Array;
                toProtoMsg(message: _36.QueryStakersByPoolResponse): _36.QueryStakersByPoolResponseProtoMsg;
            };
            StakerPoolResponse: {
                typeUrl: string;
                encode(message: _36.StakerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.StakerPoolResponse;
                fromPartial(object: Partial<_36.StakerPoolResponse>): _36.StakerPoolResponse;
                fromAmino(object: _36.StakerPoolResponseAmino): _36.StakerPoolResponse;
                toAmino(message: _36.StakerPoolResponse): _36.StakerPoolResponseAmino;
                fromAminoMsg(object: _36.StakerPoolResponseAminoMsg): _36.StakerPoolResponse;
                fromProtoMsg(message: _36.StakerPoolResponseProtoMsg): _36.StakerPoolResponse;
                toProto(message: _36.StakerPoolResponse): Uint8Array;
                toProtoMsg(message: _36.StakerPoolResponse): _36.StakerPoolResponseProtoMsg;
            };
            QueryStakersByPoolCountRequest: {
                typeUrl: string;
                encode(message: _36.QueryStakersByPoolCountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryStakersByPoolCountRequest;
                fromPartial(object: Partial<_36.QueryStakersByPoolCountRequest>): _36.QueryStakersByPoolCountRequest;
                fromAmino(object: _36.QueryStakersByPoolCountRequestAmino): _36.QueryStakersByPoolCountRequest;
                toAmino(message: _36.QueryStakersByPoolCountRequest): _36.QueryStakersByPoolCountRequestAmino;
                fromAminoMsg(object: _36.QueryStakersByPoolCountRequestAminoMsg): _36.QueryStakersByPoolCountRequest;
                fromProtoMsg(message: _36.QueryStakersByPoolCountRequestProtoMsg): _36.QueryStakersByPoolCountRequest;
                toProto(message: _36.QueryStakersByPoolCountRequest): Uint8Array;
                toProtoMsg(message: _36.QueryStakersByPoolCountRequest): _36.QueryStakersByPoolCountRequestProtoMsg;
            };
            QueryStakersByPoolCountResponse: {
                typeUrl: string;
                encode(message: _36.QueryStakersByPoolCountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.QueryStakersByPoolCountResponse;
                fromPartial(object: Partial<_36.QueryStakersByPoolCountResponse>): _36.QueryStakersByPoolCountResponse;
                fromAmino(object: _36.QueryStakersByPoolCountResponseAmino): _36.QueryStakersByPoolCountResponse;
                toAmino(message: _36.QueryStakersByPoolCountResponse): _36.QueryStakersByPoolCountResponseAmino;
                fromAminoMsg(object: _36.QueryStakersByPoolCountResponseAminoMsg): _36.QueryStakersByPoolCountResponse;
                fromProtoMsg(message: _36.QueryStakersByPoolCountResponseProtoMsg): _36.QueryStakersByPoolCountResponse;
                toProto(message: _36.QueryStakersByPoolCountResponse): Uint8Array;
                toProtoMsg(message: _36.QueryStakersByPoolCountResponse): _36.QueryStakersByPoolCountResponseProtoMsg;
            };
            BasicPool: {
                typeUrl: string;
                encode(message: _35.BasicPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.BasicPool;
                fromPartial(object: Partial<_35.BasicPool>): _35.BasicPool;
                fromAmino(object: _35.BasicPoolAmino): _35.BasicPool;
                toAmino(message: _35.BasicPool): _35.BasicPoolAmino;
                fromAminoMsg(object: _35.BasicPoolAminoMsg): _35.BasicPool;
                fromProtoMsg(message: _35.BasicPoolProtoMsg): _35.BasicPool;
                toProto(message: _35.BasicPool): Uint8Array;
                toProtoMsg(message: _35.BasicPool): _35.BasicPoolProtoMsg;
            };
            FullStaker: {
                typeUrl: string;
                encode(message: _35.FullStaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.FullStaker;
                fromPartial(object: Partial<_35.FullStaker>): _35.FullStaker;
                fromAmino(object: _35.FullStakerAmino): _35.FullStaker;
                toAmino(message: _35.FullStaker): _35.FullStakerAmino;
                fromAminoMsg(object: _35.FullStakerAminoMsg): _35.FullStaker;
                fromProtoMsg(message: _35.FullStakerProtoMsg): _35.FullStaker;
                toProto(message: _35.FullStaker): Uint8Array;
                toProtoMsg(message: _35.FullStaker): _35.FullStakerProtoMsg;
            };
            StakerMetadata: {
                typeUrl: string;
                encode(message: _35.StakerMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.StakerMetadata;
                fromPartial(object: Partial<_35.StakerMetadata>): _35.StakerMetadata;
                fromAmino(object: _35.StakerMetadataAmino): _35.StakerMetadata;
                toAmino(message: _35.StakerMetadata): _35.StakerMetadataAmino;
                fromAminoMsg(object: _35.StakerMetadataAminoMsg): _35.StakerMetadata;
                fromProtoMsg(message: _35.StakerMetadataProtoMsg): _35.StakerMetadata;
                toProto(message: _35.StakerMetadata): Uint8Array;
                toProtoMsg(message: _35.StakerMetadata): _35.StakerMetadataProtoMsg;
            };
            CommissionChangeEntry: {
                typeUrl: string;
                encode(message: _35.CommissionChangeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.CommissionChangeEntry;
                fromPartial(object: Partial<_35.CommissionChangeEntry>): _35.CommissionChangeEntry;
                fromAmino(object: _35.CommissionChangeEntryAmino): _35.CommissionChangeEntry;
                toAmino(message: _35.CommissionChangeEntry): _35.CommissionChangeEntryAmino;
                fromAminoMsg(object: _35.CommissionChangeEntryAminoMsg): _35.CommissionChangeEntry;
                fromProtoMsg(message: _35.CommissionChangeEntryProtoMsg): _35.CommissionChangeEntry;
                toProto(message: _35.CommissionChangeEntry): Uint8Array;
                toProtoMsg(message: _35.CommissionChangeEntry): _35.CommissionChangeEntryProtoMsg;
            };
            PoolMembership: {
                typeUrl: string;
                encode(message: _35.PoolMembership, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.PoolMembership;
                fromPartial(object: Partial<_35.PoolMembership>): _35.PoolMembership;
                fromAmino(object: _35.PoolMembershipAmino): _35.PoolMembership;
                toAmino(message: _35.PoolMembership): _35.PoolMembershipAmino;
                fromAminoMsg(object: _35.PoolMembershipAminoMsg): _35.PoolMembership;
                fromProtoMsg(message: _35.PoolMembershipProtoMsg): _35.PoolMembership;
                toProto(message: _35.PoolMembership): Uint8Array;
                toProtoMsg(message: _35.PoolMembership): _35.PoolMembershipProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _34.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryPoolsRequest;
                fromPartial(object: Partial<_34.QueryPoolsRequest>): _34.QueryPoolsRequest;
                fromAmino(object: _34.QueryPoolsRequestAmino): _34.QueryPoolsRequest;
                toAmino(message: _34.QueryPoolsRequest): _34.QueryPoolsRequestAmino;
                fromAminoMsg(object: _34.QueryPoolsRequestAminoMsg): _34.QueryPoolsRequest;
                fromProtoMsg(message: _34.QueryPoolsRequestProtoMsg): _34.QueryPoolsRequest;
                toProto(message: _34.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryPoolsRequest): _34.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _34.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryPoolsResponse;
                fromPartial(object: Partial<_34.QueryPoolsResponse>): _34.QueryPoolsResponse;
                fromAmino(object: _34.QueryPoolsResponseAmino): _34.QueryPoolsResponse;
                toAmino(message: _34.QueryPoolsResponse): _34.QueryPoolsResponseAmino;
                fromAminoMsg(object: _34.QueryPoolsResponseAminoMsg): _34.QueryPoolsResponse;
                fromProtoMsg(message: _34.QueryPoolsResponseProtoMsg): _34.QueryPoolsResponse;
                toProto(message: _34.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryPoolsResponse): _34.QueryPoolsResponseProtoMsg;
            };
            PoolResponse: {
                typeUrl: string;
                encode(message: _34.PoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.PoolResponse;
                fromPartial(object: Partial<_34.PoolResponse>): _34.PoolResponse;
                fromAmino(object: _34.PoolResponseAmino): _34.PoolResponse;
                toAmino(message: _34.PoolResponse): _34.PoolResponseAmino;
                fromAminoMsg(object: _34.PoolResponseAminoMsg): _34.PoolResponse;
                fromProtoMsg(message: _34.PoolResponseProtoMsg): _34.PoolResponse;
                toProto(message: _34.PoolResponse): Uint8Array;
                toProtoMsg(message: _34.PoolResponse): _34.PoolResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _34.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryPoolRequest;
                fromPartial(object: Partial<_34.QueryPoolRequest>): _34.QueryPoolRequest;
                fromAmino(object: _34.QueryPoolRequestAmino): _34.QueryPoolRequest;
                toAmino(message: _34.QueryPoolRequest): _34.QueryPoolRequestAmino;
                fromAminoMsg(object: _34.QueryPoolRequestAminoMsg): _34.QueryPoolRequest;
                fromProtoMsg(message: _34.QueryPoolRequestProtoMsg): _34.QueryPoolRequest;
                toProto(message: _34.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _34.QueryPoolRequest): _34.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _34.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryPoolResponse;
                fromPartial(object: Partial<_34.QueryPoolResponse>): _34.QueryPoolResponse;
                fromAmino(object: _34.QueryPoolResponseAmino): _34.QueryPoolResponse;
                toAmino(message: _34.QueryPoolResponse): _34.QueryPoolResponseAmino;
                fromAminoMsg(object: _34.QueryPoolResponseAminoMsg): _34.QueryPoolResponse;
                fromProtoMsg(message: _34.QueryPoolResponseProtoMsg): _34.QueryPoolResponse;
                toProto(message: _34.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _34.QueryPoolResponse): _34.QueryPoolResponseProtoMsg;
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
            fundingStatusFromJSON(object: any): _32.FundingStatus;
            fundingStatusToJSON(object: _32.FundingStatus): string;
            FundingStatus: typeof _32.FundingStatus;
            FundingStatusSDKType: typeof _32.FundingStatus;
            FundingStatusAmino: typeof _32.FundingStatus;
            Funder: {
                typeUrl: string;
                encode(message: _32.Funder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Funder;
                fromPartial(object: Partial<_32.Funder>): _32.Funder;
                fromAmino(object: _32.FunderAmino): _32.Funder;
                toAmino(message: _32.Funder): _32.FunderAmino;
                fromAminoMsg(object: _32.FunderAminoMsg): _32.Funder;
                fromProtoMsg(message: _32.FunderProtoMsg): _32.Funder;
                toProto(message: _32.Funder): Uint8Array;
                toProtoMsg(message: _32.Funder): _32.FunderProtoMsg;
            };
            FundingStats: {
                typeUrl: string;
                encode(message: _32.FundingStats, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.FundingStats;
                fromPartial(object: Partial<_32.FundingStats>): _32.FundingStats;
                fromAmino(object: _32.FundingStatsAmino): _32.FundingStats;
                toAmino(message: _32.FundingStats): _32.FundingStatsAmino;
                fromAminoMsg(object: _32.FundingStatsAminoMsg): _32.FundingStats;
                fromProtoMsg(message: _32.FundingStatsProtoMsg): _32.FundingStats;
                toProto(message: _32.FundingStats): Uint8Array;
                toProtoMsg(message: _32.FundingStats): _32.FundingStatsProtoMsg;
            };
            Funding: {
                typeUrl: string;
                encode(message: _32.Funding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Funding;
                fromPartial(object: Partial<_32.Funding>): _32.Funding;
                fromAmino(object: _32.FundingAmino): _32.Funding;
                toAmino(message: _32.Funding): _32.FundingAmino;
                fromAminoMsg(object: _32.FundingAminoMsg): _32.Funding;
                fromProtoMsg(message: _32.FundingProtoMsg): _32.Funding;
                toProto(message: _32.Funding): Uint8Array;
                toProtoMsg(message: _32.Funding): _32.FundingProtoMsg;
            };
            QueryFundersRequest: {
                typeUrl: string;
                encode(message: _32.QueryFundersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryFundersRequest;
                fromPartial(object: Partial<_32.QueryFundersRequest>): _32.QueryFundersRequest;
                fromAmino(object: _32.QueryFundersRequestAmino): _32.QueryFundersRequest;
                toAmino(message: _32.QueryFundersRequest): _32.QueryFundersRequestAmino;
                fromAminoMsg(object: _32.QueryFundersRequestAminoMsg): _32.QueryFundersRequest;
                fromProtoMsg(message: _32.QueryFundersRequestProtoMsg): _32.QueryFundersRequest;
                toProto(message: _32.QueryFundersRequest): Uint8Array;
                toProtoMsg(message: _32.QueryFundersRequest): _32.QueryFundersRequestProtoMsg;
            };
            QueryFundersResponse: {
                typeUrl: string;
                encode(message: _32.QueryFundersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryFundersResponse;
                fromPartial(object: Partial<_32.QueryFundersResponse>): _32.QueryFundersResponse;
                fromAmino(object: _32.QueryFundersResponseAmino): _32.QueryFundersResponse;
                toAmino(message: _32.QueryFundersResponse): _32.QueryFundersResponseAmino;
                fromAminoMsg(object: _32.QueryFundersResponseAminoMsg): _32.QueryFundersResponse;
                fromProtoMsg(message: _32.QueryFundersResponseProtoMsg): _32.QueryFundersResponse;
                toProto(message: _32.QueryFundersResponse): Uint8Array;
                toProtoMsg(message: _32.QueryFundersResponse): _32.QueryFundersResponseProtoMsg;
            };
            QueryFunderRequest: {
                typeUrl: string;
                encode(message: _32.QueryFunderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryFunderRequest;
                fromPartial(object: Partial<_32.QueryFunderRequest>): _32.QueryFunderRequest;
                fromAmino(object: _32.QueryFunderRequestAmino): _32.QueryFunderRequest;
                toAmino(message: _32.QueryFunderRequest): _32.QueryFunderRequestAmino;
                fromAminoMsg(object: _32.QueryFunderRequestAminoMsg): _32.QueryFunderRequest;
                fromProtoMsg(message: _32.QueryFunderRequestProtoMsg): _32.QueryFunderRequest;
                toProto(message: _32.QueryFunderRequest): Uint8Array;
                toProtoMsg(message: _32.QueryFunderRequest): _32.QueryFunderRequestProtoMsg;
            };
            QueryFunderResponse: {
                typeUrl: string;
                encode(message: _32.QueryFunderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryFunderResponse;
                fromPartial(object: Partial<_32.QueryFunderResponse>): _32.QueryFunderResponse;
                fromAmino(object: _32.QueryFunderResponseAmino): _32.QueryFunderResponse;
                toAmino(message: _32.QueryFunderResponse): _32.QueryFunderResponseAmino;
                fromAminoMsg(object: _32.QueryFunderResponseAminoMsg): _32.QueryFunderResponse;
                fromProtoMsg(message: _32.QueryFunderResponseProtoMsg): _32.QueryFunderResponse;
                toProto(message: _32.QueryFunderResponse): Uint8Array;
                toProtoMsg(message: _32.QueryFunderResponse): _32.QueryFunderResponseProtoMsg;
            };
            QueryFundingsByFunderRequest: {
                typeUrl: string;
                encode(message: _32.QueryFundingsByFunderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryFundingsByFunderRequest;
                fromPartial(object: Partial<_32.QueryFundingsByFunderRequest>): _32.QueryFundingsByFunderRequest;
                fromAmino(object: _32.QueryFundingsByFunderRequestAmino): _32.QueryFundingsByFunderRequest;
                toAmino(message: _32.QueryFundingsByFunderRequest): _32.QueryFundingsByFunderRequestAmino;
                fromAminoMsg(object: _32.QueryFundingsByFunderRequestAminoMsg): _32.QueryFundingsByFunderRequest;
                fromProtoMsg(message: _32.QueryFundingsByFunderRequestProtoMsg): _32.QueryFundingsByFunderRequest;
                toProto(message: _32.QueryFundingsByFunderRequest): Uint8Array;
                toProtoMsg(message: _32.QueryFundingsByFunderRequest): _32.QueryFundingsByFunderRequestProtoMsg;
            };
            QueryFundingsByFunderResponse: {
                typeUrl: string;
                encode(message: _32.QueryFundingsByFunderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryFundingsByFunderResponse;
                fromPartial(object: Partial<_32.QueryFundingsByFunderResponse>): _32.QueryFundingsByFunderResponse;
                fromAmino(object: _32.QueryFundingsByFunderResponseAmino): _32.QueryFundingsByFunderResponse;
                toAmino(message: _32.QueryFundingsByFunderResponse): _32.QueryFundingsByFunderResponseAmino;
                fromAminoMsg(object: _32.QueryFundingsByFunderResponseAminoMsg): _32.QueryFundingsByFunderResponse;
                fromProtoMsg(message: _32.QueryFundingsByFunderResponseProtoMsg): _32.QueryFundingsByFunderResponse;
                toProto(message: _32.QueryFundingsByFunderResponse): Uint8Array;
                toProtoMsg(message: _32.QueryFundingsByFunderResponse): _32.QueryFundingsByFunderResponseProtoMsg;
            };
            QueryFundingsByPoolRequest: {
                typeUrl: string;
                encode(message: _32.QueryFundingsByPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryFundingsByPoolRequest;
                fromPartial(object: Partial<_32.QueryFundingsByPoolRequest>): _32.QueryFundingsByPoolRequest;
                fromAmino(object: _32.QueryFundingsByPoolRequestAmino): _32.QueryFundingsByPoolRequest;
                toAmino(message: _32.QueryFundingsByPoolRequest): _32.QueryFundingsByPoolRequestAmino;
                fromAminoMsg(object: _32.QueryFundingsByPoolRequestAminoMsg): _32.QueryFundingsByPoolRequest;
                fromProtoMsg(message: _32.QueryFundingsByPoolRequestProtoMsg): _32.QueryFundingsByPoolRequest;
                toProto(message: _32.QueryFundingsByPoolRequest): Uint8Array;
                toProtoMsg(message: _32.QueryFundingsByPoolRequest): _32.QueryFundingsByPoolRequestProtoMsg;
            };
            QueryFundingsByPoolResponse: {
                typeUrl: string;
                encode(message: _32.QueryFundingsByPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryFundingsByPoolResponse;
                fromPartial(object: Partial<_32.QueryFundingsByPoolResponse>): _32.QueryFundingsByPoolResponse;
                fromAmino(object: _32.QueryFundingsByPoolResponseAmino): _32.QueryFundingsByPoolResponse;
                toAmino(message: _32.QueryFundingsByPoolResponse): _32.QueryFundingsByPoolResponseAmino;
                fromAminoMsg(object: _32.QueryFundingsByPoolResponseAminoMsg): _32.QueryFundingsByPoolResponse;
                fromProtoMsg(message: _32.QueryFundingsByPoolResponseProtoMsg): _32.QueryFundingsByPoolResponse;
                toProto(message: _32.QueryFundingsByPoolResponse): Uint8Array;
                toProtoMsg(message: _32.QueryFundingsByPoolResponse): _32.QueryFundingsByPoolResponseProtoMsg;
            };
            QueryDelegatorRequest: {
                typeUrl: string;
                encode(message: _31.QueryDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDelegatorRequest;
                fromPartial(object: Partial<_31.QueryDelegatorRequest>): _31.QueryDelegatorRequest;
                fromAmino(object: _31.QueryDelegatorRequestAmino): _31.QueryDelegatorRequest;
                toAmino(message: _31.QueryDelegatorRequest): _31.QueryDelegatorRequestAmino;
                fromAminoMsg(object: _31.QueryDelegatorRequestAminoMsg): _31.QueryDelegatorRequest;
                fromProtoMsg(message: _31.QueryDelegatorRequestProtoMsg): _31.QueryDelegatorRequest;
                toProto(message: _31.QueryDelegatorRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDelegatorRequest): _31.QueryDelegatorRequestProtoMsg;
            };
            QueryDelegatorResponse: {
                typeUrl: string;
                encode(message: _31.QueryDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDelegatorResponse;
                fromPartial(object: Partial<_31.QueryDelegatorResponse>): _31.QueryDelegatorResponse;
                fromAmino(object: _31.QueryDelegatorResponseAmino): _31.QueryDelegatorResponse;
                toAmino(message: _31.QueryDelegatorResponse): _31.QueryDelegatorResponseAmino;
                fromAminoMsg(object: _31.QueryDelegatorResponseAminoMsg): _31.QueryDelegatorResponse;
                fromProtoMsg(message: _31.QueryDelegatorResponseProtoMsg): _31.QueryDelegatorResponse;
                toProto(message: _31.QueryDelegatorResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDelegatorResponse): _31.QueryDelegatorResponseProtoMsg;
            };
            StakerDelegatorResponse: {
                typeUrl: string;
                encode(message: _31.StakerDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.StakerDelegatorResponse;
                fromPartial(object: Partial<_31.StakerDelegatorResponse>): _31.StakerDelegatorResponse;
                fromAmino(object: _31.StakerDelegatorResponseAmino): _31.StakerDelegatorResponse;
                toAmino(message: _31.StakerDelegatorResponse): _31.StakerDelegatorResponseAmino;
                fromAminoMsg(object: _31.StakerDelegatorResponseAminoMsg): _31.StakerDelegatorResponse;
                fromProtoMsg(message: _31.StakerDelegatorResponseProtoMsg): _31.StakerDelegatorResponse;
                toProto(message: _31.StakerDelegatorResponse): Uint8Array;
                toProtoMsg(message: _31.StakerDelegatorResponse): _31.StakerDelegatorResponseProtoMsg;
            };
            QueryDelegatorsByStakerRequest: {
                typeUrl: string;
                encode(message: _31.QueryDelegatorsByStakerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDelegatorsByStakerRequest;
                fromPartial(object: Partial<_31.QueryDelegatorsByStakerRequest>): _31.QueryDelegatorsByStakerRequest;
                fromAmino(object: _31.QueryDelegatorsByStakerRequestAmino): _31.QueryDelegatorsByStakerRequest;
                toAmino(message: _31.QueryDelegatorsByStakerRequest): _31.QueryDelegatorsByStakerRequestAmino;
                fromAminoMsg(object: _31.QueryDelegatorsByStakerRequestAminoMsg): _31.QueryDelegatorsByStakerRequest;
                fromProtoMsg(message: _31.QueryDelegatorsByStakerRequestProtoMsg): _31.QueryDelegatorsByStakerRequest;
                toProto(message: _31.QueryDelegatorsByStakerRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDelegatorsByStakerRequest): _31.QueryDelegatorsByStakerRequestProtoMsg;
            };
            QueryDelegatorsByStakerResponse: {
                typeUrl: string;
                encode(message: _31.QueryDelegatorsByStakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDelegatorsByStakerResponse;
                fromPartial(object: Partial<_31.QueryDelegatorsByStakerResponse>): _31.QueryDelegatorsByStakerResponse;
                fromAmino(object: _31.QueryDelegatorsByStakerResponseAmino): _31.QueryDelegatorsByStakerResponse;
                toAmino(message: _31.QueryDelegatorsByStakerResponse): _31.QueryDelegatorsByStakerResponseAmino;
                fromAminoMsg(object: _31.QueryDelegatorsByStakerResponseAminoMsg): _31.QueryDelegatorsByStakerResponse;
                fromProtoMsg(message: _31.QueryDelegatorsByStakerResponseProtoMsg): _31.QueryDelegatorsByStakerResponse;
                toProto(message: _31.QueryDelegatorsByStakerResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDelegatorsByStakerResponse): _31.QueryDelegatorsByStakerResponseProtoMsg;
            };
            QueryStakersByDelegatorRequest: {
                typeUrl: string;
                encode(message: _31.QueryStakersByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryStakersByDelegatorRequest;
                fromPartial(object: Partial<_31.QueryStakersByDelegatorRequest>): _31.QueryStakersByDelegatorRequest;
                fromAmino(object: _31.QueryStakersByDelegatorRequestAmino): _31.QueryStakersByDelegatorRequest;
                toAmino(message: _31.QueryStakersByDelegatorRequest): _31.QueryStakersByDelegatorRequestAmino;
                fromAminoMsg(object: _31.QueryStakersByDelegatorRequestAminoMsg): _31.QueryStakersByDelegatorRequest;
                fromProtoMsg(message: _31.QueryStakersByDelegatorRequestProtoMsg): _31.QueryStakersByDelegatorRequest;
                toProto(message: _31.QueryStakersByDelegatorRequest): Uint8Array;
                toProtoMsg(message: _31.QueryStakersByDelegatorRequest): _31.QueryStakersByDelegatorRequestProtoMsg;
            };
            QueryStakersByDelegatorResponse: {
                typeUrl: string;
                encode(message: _31.QueryStakersByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryStakersByDelegatorResponse;
                fromPartial(object: Partial<_31.QueryStakersByDelegatorResponse>): _31.QueryStakersByDelegatorResponse;
                fromAmino(object: _31.QueryStakersByDelegatorResponseAmino): _31.QueryStakersByDelegatorResponse;
                toAmino(message: _31.QueryStakersByDelegatorResponse): _31.QueryStakersByDelegatorResponseAmino;
                fromAminoMsg(object: _31.QueryStakersByDelegatorResponseAminoMsg): _31.QueryStakersByDelegatorResponse;
                fromProtoMsg(message: _31.QueryStakersByDelegatorResponseProtoMsg): _31.QueryStakersByDelegatorResponse;
                toProto(message: _31.QueryStakersByDelegatorResponse): Uint8Array;
                toProtoMsg(message: _31.QueryStakersByDelegatorResponse): _31.QueryStakersByDelegatorResponseProtoMsg;
            };
            DelegationForStakerResponse: {
                typeUrl: string;
                encode(message: _31.DelegationForStakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.DelegationForStakerResponse;
                fromPartial(object: Partial<_31.DelegationForStakerResponse>): _31.DelegationForStakerResponse;
                fromAmino(object: _31.DelegationForStakerResponseAmino): _31.DelegationForStakerResponse;
                toAmino(message: _31.DelegationForStakerResponse): _31.DelegationForStakerResponseAmino;
                fromAminoMsg(object: _31.DelegationForStakerResponseAminoMsg): _31.DelegationForStakerResponse;
                fromProtoMsg(message: _31.DelegationForStakerResponseProtoMsg): _31.DelegationForStakerResponse;
                toProto(message: _31.DelegationForStakerResponse): Uint8Array;
                toProtoMsg(message: _31.DelegationForStakerResponse): _31.DelegationForStakerResponseProtoMsg;
            };
            FinalizedBundle: {
                typeUrl: string;
                encode(message: _30.FinalizedBundle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.FinalizedBundle;
                fromPartial(object: Partial<_30.FinalizedBundle>): _30.FinalizedBundle;
                fromAmino(object: _30.FinalizedBundleAmino): _30.FinalizedBundle;
                toAmino(message: _30.FinalizedBundle): _30.FinalizedBundleAmino;
                fromAminoMsg(object: _30.FinalizedBundleAminoMsg): _30.FinalizedBundle;
                fromProtoMsg(message: _30.FinalizedBundleProtoMsg): _30.FinalizedBundle;
                toProto(message: _30.FinalizedBundle): Uint8Array;
                toProtoMsg(message: _30.FinalizedBundle): _30.FinalizedBundleProtoMsg;
            };
            FinalizedAt: {
                typeUrl: string;
                encode(message: _30.FinalizedAt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.FinalizedAt;
                fromPartial(object: Partial<_30.FinalizedAt>): _30.FinalizedAt;
                fromAmino(object: _30.FinalizedAtAmino): _30.FinalizedAt;
                toAmino(message: _30.FinalizedAt): _30.FinalizedAtAmino;
                fromAminoMsg(object: _30.FinalizedAtAminoMsg): _30.FinalizedAt;
                fromProtoMsg(message: _30.FinalizedAtProtoMsg): _30.FinalizedAt;
                toProto(message: _30.FinalizedAt): Uint8Array;
                toProtoMsg(message: _30.FinalizedAt): _30.FinalizedAtProtoMsg;
            };
            StakeSecurity: {
                typeUrl: string;
                encode(message: _30.StakeSecurity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.StakeSecurity;
                fromPartial(object: Partial<_30.StakeSecurity>): _30.StakeSecurity;
                fromAmino(object: _30.StakeSecurityAmino): _30.StakeSecurity;
                toAmino(message: _30.StakeSecurity): _30.StakeSecurityAmino;
                fromAminoMsg(object: _30.StakeSecurityAminoMsg): _30.StakeSecurity;
                fromProtoMsg(message: _30.StakeSecurityProtoMsg): _30.StakeSecurity;
                toProto(message: _30.StakeSecurity): Uint8Array;
                toProtoMsg(message: _30.StakeSecurity): _30.StakeSecurityProtoMsg;
            };
            QueryFinalizedBundlesRequest: {
                typeUrl: string;
                encode(message: _30.QueryFinalizedBundlesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryFinalizedBundlesRequest;
                fromPartial(object: Partial<_30.QueryFinalizedBundlesRequest>): _30.QueryFinalizedBundlesRequest;
                fromAmino(object: _30.QueryFinalizedBundlesRequestAmino): _30.QueryFinalizedBundlesRequest;
                toAmino(message: _30.QueryFinalizedBundlesRequest): _30.QueryFinalizedBundlesRequestAmino;
                fromAminoMsg(object: _30.QueryFinalizedBundlesRequestAminoMsg): _30.QueryFinalizedBundlesRequest;
                fromProtoMsg(message: _30.QueryFinalizedBundlesRequestProtoMsg): _30.QueryFinalizedBundlesRequest;
                toProto(message: _30.QueryFinalizedBundlesRequest): Uint8Array;
                toProtoMsg(message: _30.QueryFinalizedBundlesRequest): _30.QueryFinalizedBundlesRequestProtoMsg;
            };
            QueryFinalizedBundlesResponse: {
                typeUrl: string;
                encode(message: _30.QueryFinalizedBundlesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryFinalizedBundlesResponse;
                fromPartial(object: Partial<_30.QueryFinalizedBundlesResponse>): _30.QueryFinalizedBundlesResponse;
                fromAmino(object: _30.QueryFinalizedBundlesResponseAmino): _30.QueryFinalizedBundlesResponse;
                toAmino(message: _30.QueryFinalizedBundlesResponse): _30.QueryFinalizedBundlesResponseAmino;
                fromAminoMsg(object: _30.QueryFinalizedBundlesResponseAminoMsg): _30.QueryFinalizedBundlesResponse;
                fromProtoMsg(message: _30.QueryFinalizedBundlesResponseProtoMsg): _30.QueryFinalizedBundlesResponse;
                toProto(message: _30.QueryFinalizedBundlesResponse): Uint8Array;
                toProtoMsg(message: _30.QueryFinalizedBundlesResponse): _30.QueryFinalizedBundlesResponseProtoMsg;
            };
            QueryFinalizedBundleRequest: {
                typeUrl: string;
                encode(message: _30.QueryFinalizedBundleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryFinalizedBundleRequest;
                fromPartial(object: Partial<_30.QueryFinalizedBundleRequest>): _30.QueryFinalizedBundleRequest;
                fromAmino(object: _30.QueryFinalizedBundleRequestAmino): _30.QueryFinalizedBundleRequest;
                toAmino(message: _30.QueryFinalizedBundleRequest): _30.QueryFinalizedBundleRequestAmino;
                fromAminoMsg(object: _30.QueryFinalizedBundleRequestAminoMsg): _30.QueryFinalizedBundleRequest;
                fromProtoMsg(message: _30.QueryFinalizedBundleRequestProtoMsg): _30.QueryFinalizedBundleRequest;
                toProto(message: _30.QueryFinalizedBundleRequest): Uint8Array;
                toProtoMsg(message: _30.QueryFinalizedBundleRequest): _30.QueryFinalizedBundleRequestProtoMsg;
            };
            QueryFinalizedBundleResponse: {
                typeUrl: string;
                encode(message: _30.QueryFinalizedBundleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryFinalizedBundleResponse;
                fromPartial(object: Partial<_30.QueryFinalizedBundleResponse>): _30.QueryFinalizedBundleResponse;
                fromAmino(object: _30.QueryFinalizedBundleResponseAmino): _30.QueryFinalizedBundleResponse;
                toAmino(message: _30.QueryFinalizedBundleResponse): _30.QueryFinalizedBundleResponseAmino;
                fromAminoMsg(object: _30.QueryFinalizedBundleResponseAminoMsg): _30.QueryFinalizedBundleResponse;
                fromProtoMsg(message: _30.QueryFinalizedBundleResponseProtoMsg): _30.QueryFinalizedBundleResponse;
                toProto(message: _30.QueryFinalizedBundleResponse): Uint8Array;
                toProtoMsg(message: _30.QueryFinalizedBundleResponse): _30.QueryFinalizedBundleResponseProtoMsg;
            };
            QueryCurrentVoteStatusRequest: {
                typeUrl: string;
                encode(message: _30.QueryCurrentVoteStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryCurrentVoteStatusRequest;
                fromPartial(object: Partial<_30.QueryCurrentVoteStatusRequest>): _30.QueryCurrentVoteStatusRequest;
                fromAmino(object: _30.QueryCurrentVoteStatusRequestAmino): _30.QueryCurrentVoteStatusRequest;
                toAmino(message: _30.QueryCurrentVoteStatusRequest): _30.QueryCurrentVoteStatusRequestAmino;
                fromAminoMsg(object: _30.QueryCurrentVoteStatusRequestAminoMsg): _30.QueryCurrentVoteStatusRequest;
                fromProtoMsg(message: _30.QueryCurrentVoteStatusRequestProtoMsg): _30.QueryCurrentVoteStatusRequest;
                toProto(message: _30.QueryCurrentVoteStatusRequest): Uint8Array;
                toProtoMsg(message: _30.QueryCurrentVoteStatusRequest): _30.QueryCurrentVoteStatusRequestProtoMsg;
            };
            QueryCurrentVoteStatusResponse: {
                typeUrl: string;
                encode(message: _30.QueryCurrentVoteStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryCurrentVoteStatusResponse;
                fromPartial(object: Partial<_30.QueryCurrentVoteStatusResponse>): _30.QueryCurrentVoteStatusResponse;
                fromAmino(object: _30.QueryCurrentVoteStatusResponseAmino): _30.QueryCurrentVoteStatusResponse;
                toAmino(message: _30.QueryCurrentVoteStatusResponse): _30.QueryCurrentVoteStatusResponseAmino;
                fromAminoMsg(object: _30.QueryCurrentVoteStatusResponseAminoMsg): _30.QueryCurrentVoteStatusResponse;
                fromProtoMsg(message: _30.QueryCurrentVoteStatusResponseProtoMsg): _30.QueryCurrentVoteStatusResponse;
                toProto(message: _30.QueryCurrentVoteStatusResponse): Uint8Array;
                toProtoMsg(message: _30.QueryCurrentVoteStatusResponse): _30.QueryCurrentVoteStatusResponseProtoMsg;
            };
            QueryCanValidateRequest: {
                typeUrl: string;
                encode(message: _30.QueryCanValidateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryCanValidateRequest;
                fromPartial(object: Partial<_30.QueryCanValidateRequest>): _30.QueryCanValidateRequest;
                fromAmino(object: _30.QueryCanValidateRequestAmino): _30.QueryCanValidateRequest;
                toAmino(message: _30.QueryCanValidateRequest): _30.QueryCanValidateRequestAmino;
                fromAminoMsg(object: _30.QueryCanValidateRequestAminoMsg): _30.QueryCanValidateRequest;
                fromProtoMsg(message: _30.QueryCanValidateRequestProtoMsg): _30.QueryCanValidateRequest;
                toProto(message: _30.QueryCanValidateRequest): Uint8Array;
                toProtoMsg(message: _30.QueryCanValidateRequest): _30.QueryCanValidateRequestProtoMsg;
            };
            QueryCanValidateResponse: {
                typeUrl: string;
                encode(message: _30.QueryCanValidateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryCanValidateResponse;
                fromPartial(object: Partial<_30.QueryCanValidateResponse>): _30.QueryCanValidateResponse;
                fromAmino(object: _30.QueryCanValidateResponseAmino): _30.QueryCanValidateResponse;
                toAmino(message: _30.QueryCanValidateResponse): _30.QueryCanValidateResponseAmino;
                fromAminoMsg(object: _30.QueryCanValidateResponseAminoMsg): _30.QueryCanValidateResponse;
                fromProtoMsg(message: _30.QueryCanValidateResponseProtoMsg): _30.QueryCanValidateResponse;
                toProto(message: _30.QueryCanValidateResponse): Uint8Array;
                toProtoMsg(message: _30.QueryCanValidateResponse): _30.QueryCanValidateResponseProtoMsg;
            };
            QueryCanProposeRequest: {
                typeUrl: string;
                encode(message: _30.QueryCanProposeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryCanProposeRequest;
                fromPartial(object: Partial<_30.QueryCanProposeRequest>): _30.QueryCanProposeRequest;
                fromAmino(object: _30.QueryCanProposeRequestAmino): _30.QueryCanProposeRequest;
                toAmino(message: _30.QueryCanProposeRequest): _30.QueryCanProposeRequestAmino;
                fromAminoMsg(object: _30.QueryCanProposeRequestAminoMsg): _30.QueryCanProposeRequest;
                fromProtoMsg(message: _30.QueryCanProposeRequestProtoMsg): _30.QueryCanProposeRequest;
                toProto(message: _30.QueryCanProposeRequest): Uint8Array;
                toProtoMsg(message: _30.QueryCanProposeRequest): _30.QueryCanProposeRequestProtoMsg;
            };
            QueryCanProposeResponse: {
                typeUrl: string;
                encode(message: _30.QueryCanProposeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryCanProposeResponse;
                fromPartial(object: Partial<_30.QueryCanProposeResponse>): _30.QueryCanProposeResponse;
                fromAmino(object: _30.QueryCanProposeResponseAmino): _30.QueryCanProposeResponse;
                toAmino(message: _30.QueryCanProposeResponse): _30.QueryCanProposeResponseAmino;
                fromAminoMsg(object: _30.QueryCanProposeResponseAminoMsg): _30.QueryCanProposeResponse;
                fromProtoMsg(message: _30.QueryCanProposeResponseProtoMsg): _30.QueryCanProposeResponse;
                toProto(message: _30.QueryCanProposeResponse): Uint8Array;
                toProtoMsg(message: _30.QueryCanProposeResponse): _30.QueryCanProposeResponseProtoMsg;
            };
            QueryCanVoteRequest: {
                typeUrl: string;
                encode(message: _30.QueryCanVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryCanVoteRequest;
                fromPartial(object: Partial<_30.QueryCanVoteRequest>): _30.QueryCanVoteRequest;
                fromAmino(object: _30.QueryCanVoteRequestAmino): _30.QueryCanVoteRequest;
                toAmino(message: _30.QueryCanVoteRequest): _30.QueryCanVoteRequestAmino;
                fromAminoMsg(object: _30.QueryCanVoteRequestAminoMsg): _30.QueryCanVoteRequest;
                fromProtoMsg(message: _30.QueryCanVoteRequestProtoMsg): _30.QueryCanVoteRequest;
                toProto(message: _30.QueryCanVoteRequest): Uint8Array;
                toProtoMsg(message: _30.QueryCanVoteRequest): _30.QueryCanVoteRequestProtoMsg;
            };
            QueryCanVoteResponse: {
                typeUrl: string;
                encode(message: _30.QueryCanVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryCanVoteResponse;
                fromPartial(object: Partial<_30.QueryCanVoteResponse>): _30.QueryCanVoteResponse;
                fromAmino(object: _30.QueryCanVoteResponseAmino): _30.QueryCanVoteResponse;
                toAmino(message: _30.QueryCanVoteResponse): _30.QueryCanVoteResponseAmino;
                fromAminoMsg(object: _30.QueryCanVoteResponseAminoMsg): _30.QueryCanVoteResponse;
                fromProtoMsg(message: _30.QueryCanVoteResponseProtoMsg): _30.QueryCanVoteResponse;
                toProto(message: _30.QueryCanVoteResponse): Uint8Array;
                toProtoMsg(message: _30.QueryCanVoteResponse): _30.QueryCanVoteResponseProtoMsg;
            };
            QueryAccountAssetsRequest: {
                typeUrl: string;
                encode(message: _29.QueryAccountAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountAssetsRequest;
                fromPartial(object: Partial<_29.QueryAccountAssetsRequest>): _29.QueryAccountAssetsRequest;
                fromAmino(object: _29.QueryAccountAssetsRequestAmino): _29.QueryAccountAssetsRequest;
                toAmino(message: _29.QueryAccountAssetsRequest): _29.QueryAccountAssetsRequestAmino;
                fromAminoMsg(object: _29.QueryAccountAssetsRequestAminoMsg): _29.QueryAccountAssetsRequest;
                fromProtoMsg(message: _29.QueryAccountAssetsRequestProtoMsg): _29.QueryAccountAssetsRequest;
                toProto(message: _29.QueryAccountAssetsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAccountAssetsRequest): _29.QueryAccountAssetsRequestProtoMsg;
            };
            QueryAccountAssetsResponse: {
                typeUrl: string;
                encode(message: _29.QueryAccountAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountAssetsResponse;
                fromPartial(object: Partial<_29.QueryAccountAssetsResponse>): _29.QueryAccountAssetsResponse;
                fromAmino(object: _29.QueryAccountAssetsResponseAmino): _29.QueryAccountAssetsResponse;
                toAmino(message: _29.QueryAccountAssetsResponse): _29.QueryAccountAssetsResponseAmino;
                fromAminoMsg(object: _29.QueryAccountAssetsResponseAminoMsg): _29.QueryAccountAssetsResponse;
                fromProtoMsg(message: _29.QueryAccountAssetsResponseProtoMsg): _29.QueryAccountAssetsResponse;
                toProto(message: _29.QueryAccountAssetsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAccountAssetsResponse): _29.QueryAccountAssetsResponseProtoMsg;
            };
            QueryAccountDelegationUnbondingsRequest: {
                typeUrl: string;
                encode(message: _29.QueryAccountDelegationUnbondingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountDelegationUnbondingsRequest;
                fromPartial(object: Partial<_29.QueryAccountDelegationUnbondingsRequest>): _29.QueryAccountDelegationUnbondingsRequest;
                fromAmino(object: _29.QueryAccountDelegationUnbondingsRequestAmino): _29.QueryAccountDelegationUnbondingsRequest;
                toAmino(message: _29.QueryAccountDelegationUnbondingsRequest): _29.QueryAccountDelegationUnbondingsRequestAmino;
                fromAminoMsg(object: _29.QueryAccountDelegationUnbondingsRequestAminoMsg): _29.QueryAccountDelegationUnbondingsRequest;
                fromProtoMsg(message: _29.QueryAccountDelegationUnbondingsRequestProtoMsg): _29.QueryAccountDelegationUnbondingsRequest;
                toProto(message: _29.QueryAccountDelegationUnbondingsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAccountDelegationUnbondingsRequest): _29.QueryAccountDelegationUnbondingsRequestProtoMsg;
            };
            QueryAccountDelegationUnbondingsResponse: {
                typeUrl: string;
                encode(message: _29.QueryAccountDelegationUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountDelegationUnbondingsResponse;
                fromPartial(object: Partial<_29.QueryAccountDelegationUnbondingsResponse>): _29.QueryAccountDelegationUnbondingsResponse;
                fromAmino(object: _29.QueryAccountDelegationUnbondingsResponseAmino): _29.QueryAccountDelegationUnbondingsResponse;
                toAmino(message: _29.QueryAccountDelegationUnbondingsResponse): _29.QueryAccountDelegationUnbondingsResponseAmino;
                fromAminoMsg(object: _29.QueryAccountDelegationUnbondingsResponseAminoMsg): _29.QueryAccountDelegationUnbondingsResponse;
                fromProtoMsg(message: _29.QueryAccountDelegationUnbondingsResponseProtoMsg): _29.QueryAccountDelegationUnbondingsResponse;
                toProto(message: _29.QueryAccountDelegationUnbondingsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAccountDelegationUnbondingsResponse): _29.QueryAccountDelegationUnbondingsResponseProtoMsg;
            };
            DelegationUnbonding: {
                typeUrl: string;
                encode(message: _29.DelegationUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.DelegationUnbonding;
                fromPartial(object: Partial<_29.DelegationUnbonding>): _29.DelegationUnbonding;
                fromAmino(object: _29.DelegationUnbondingAmino): _29.DelegationUnbonding;
                toAmino(message: _29.DelegationUnbonding): _29.DelegationUnbondingAmino;
                fromAminoMsg(object: _29.DelegationUnbondingAminoMsg): _29.DelegationUnbonding;
                fromProtoMsg(message: _29.DelegationUnbondingProtoMsg): _29.DelegationUnbonding;
                toProto(message: _29.DelegationUnbonding): Uint8Array;
                toProtoMsg(message: _29.DelegationUnbonding): _29.DelegationUnbondingProtoMsg;
            };
            QueryAccountFundedListRequest: {
                typeUrl: string;
                encode(message: _29.QueryAccountFundedListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountFundedListRequest;
                fromPartial(object: Partial<_29.QueryAccountFundedListRequest>): _29.QueryAccountFundedListRequest;
                fromAmino(object: _29.QueryAccountFundedListRequestAmino): _29.QueryAccountFundedListRequest;
                toAmino(message: _29.QueryAccountFundedListRequest): _29.QueryAccountFundedListRequestAmino;
                fromAminoMsg(object: _29.QueryAccountFundedListRequestAminoMsg): _29.QueryAccountFundedListRequest;
                fromProtoMsg(message: _29.QueryAccountFundedListRequestProtoMsg): _29.QueryAccountFundedListRequest;
                toProto(message: _29.QueryAccountFundedListRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAccountFundedListRequest): _29.QueryAccountFundedListRequestProtoMsg;
            };
            QueryAccountFundedListResponse: {
                typeUrl: string;
                encode(message: _29.QueryAccountFundedListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountFundedListResponse;
                fromPartial(object: Partial<_29.QueryAccountFundedListResponse>): _29.QueryAccountFundedListResponse;
                fromAmino(object: _29.QueryAccountFundedListResponseAmino): _29.QueryAccountFundedListResponse;
                toAmino(message: _29.QueryAccountFundedListResponse): _29.QueryAccountFundedListResponseAmino;
                fromAminoMsg(object: _29.QueryAccountFundedListResponseAminoMsg): _29.QueryAccountFundedListResponse;
                fromProtoMsg(message: _29.QueryAccountFundedListResponseProtoMsg): _29.QueryAccountFundedListResponse;
                toProto(message: _29.QueryAccountFundedListResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAccountFundedListResponse): _29.QueryAccountFundedListResponseProtoMsg;
            };
            Funded: {
                typeUrl: string;
                encode(message: _29.Funded, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Funded;
                fromPartial(object: Partial<_29.Funded>): _29.Funded;
                fromAmino(object: _29.FundedAmino): _29.Funded;
                toAmino(message: _29.Funded): _29.FundedAmino;
                fromAminoMsg(object: _29.FundedAminoMsg): _29.Funded;
                fromProtoMsg(message: _29.FundedProtoMsg): _29.Funded;
                toProto(message: _29.Funded): Uint8Array;
                toProtoMsg(message: _29.Funded): _29.FundedProtoMsg;
            };
            QueryAccountRedelegationRequest: {
                typeUrl: string;
                encode(message: _29.QueryAccountRedelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountRedelegationRequest;
                fromPartial(object: Partial<_29.QueryAccountRedelegationRequest>): _29.QueryAccountRedelegationRequest;
                fromAmino(object: _29.QueryAccountRedelegationRequestAmino): _29.QueryAccountRedelegationRequest;
                toAmino(message: _29.QueryAccountRedelegationRequest): _29.QueryAccountRedelegationRequestAmino;
                fromAminoMsg(object: _29.QueryAccountRedelegationRequestAminoMsg): _29.QueryAccountRedelegationRequest;
                fromProtoMsg(message: _29.QueryAccountRedelegationRequestProtoMsg): _29.QueryAccountRedelegationRequest;
                toProto(message: _29.QueryAccountRedelegationRequest): Uint8Array;
                toProtoMsg(message: _29.QueryAccountRedelegationRequest): _29.QueryAccountRedelegationRequestProtoMsg;
            };
            QueryAccountRedelegationResponse: {
                typeUrl: string;
                encode(message: _29.QueryAccountRedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryAccountRedelegationResponse;
                fromPartial(object: Partial<_29.QueryAccountRedelegationResponse>): _29.QueryAccountRedelegationResponse;
                fromAmino(object: _29.QueryAccountRedelegationResponseAmino): _29.QueryAccountRedelegationResponse;
                toAmino(message: _29.QueryAccountRedelegationResponse): _29.QueryAccountRedelegationResponseAmino;
                fromAminoMsg(object: _29.QueryAccountRedelegationResponseAminoMsg): _29.QueryAccountRedelegationResponse;
                fromProtoMsg(message: _29.QueryAccountRedelegationResponseProtoMsg): _29.QueryAccountRedelegationResponse;
                toProto(message: _29.QueryAccountRedelegationResponse): Uint8Array;
                toProtoMsg(message: _29.QueryAccountRedelegationResponse): _29.QueryAccountRedelegationResponseProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _29.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.RedelegationEntry;
                fromPartial(object: Partial<_29.RedelegationEntry>): _29.RedelegationEntry;
                fromAmino(object: _29.RedelegationEntryAmino): _29.RedelegationEntry;
                toAmino(message: _29.RedelegationEntry): _29.RedelegationEntryAmino;
                fromAminoMsg(object: _29.RedelegationEntryAminoMsg): _29.RedelegationEntry;
                fromProtoMsg(message: _29.RedelegationEntryProtoMsg): _29.RedelegationEntry;
                toProto(message: _29.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _29.RedelegationEntry): _29.RedelegationEntryProtoMsg;
            };
        };
    }
    namespace stakers {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _212.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createStaker(value: _42.MsgCreateStaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateMetadata(value: _42.MsgUpdateMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateCommission(value: _42.MsgUpdateCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimCommissionRewards(value: _42.MsgClaimCommissionRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinPool(value: _42.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leavePool(value: _42.MsgLeavePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createStaker(value: _42.MsgCreateStaker): {
                        typeUrl: string;
                        value: _42.MsgCreateStaker;
                    };
                    updateMetadata(value: _42.MsgUpdateMetadata): {
                        typeUrl: string;
                        value: _42.MsgUpdateMetadata;
                    };
                    updateCommission(value: _42.MsgUpdateCommission): {
                        typeUrl: string;
                        value: _42.MsgUpdateCommission;
                    };
                    claimCommissionRewards(value: _42.MsgClaimCommissionRewards): {
                        typeUrl: string;
                        value: _42.MsgClaimCommissionRewards;
                    };
                    joinPool(value: _42.MsgJoinPool): {
                        typeUrl: string;
                        value: _42.MsgJoinPool;
                    };
                    leavePool(value: _42.MsgLeavePool): {
                        typeUrl: string;
                        value: _42.MsgLeavePool;
                    };
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createStaker(value: any): {
                        typeUrl: string;
                        value: _42.MsgCreateStaker;
                    };
                    updateMetadata(value: any): {
                        typeUrl: string;
                        value: _42.MsgUpdateMetadata;
                    };
                    updateCommission(value: any): {
                        typeUrl: string;
                        value: _42.MsgUpdateCommission;
                    };
                    claimCommissionRewards(value: any): {
                        typeUrl: string;
                        value: _42.MsgClaimCommissionRewards;
                    };
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _42.MsgJoinPool;
                    };
                    leavePool(value: any): {
                        typeUrl: string;
                        value: _42.MsgLeavePool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createStaker(value: _42.MsgCreateStaker): {
                        typeUrl: string;
                        value: _42.MsgCreateStaker;
                    };
                    updateMetadata(value: _42.MsgUpdateMetadata): {
                        typeUrl: string;
                        value: _42.MsgUpdateMetadata;
                    };
                    updateCommission(value: _42.MsgUpdateCommission): {
                        typeUrl: string;
                        value: _42.MsgUpdateCommission;
                    };
                    claimCommissionRewards(value: _42.MsgClaimCommissionRewards): {
                        typeUrl: string;
                        value: _42.MsgClaimCommissionRewards;
                    };
                    joinPool(value: _42.MsgJoinPool): {
                        typeUrl: string;
                        value: _42.MsgJoinPool;
                    };
                    leavePool(value: _42.MsgLeavePool): {
                        typeUrl: string;
                        value: _42.MsgLeavePool;
                    };
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.stakers.v1beta1.MsgCreateStaker": {
                    aminoType: string;
                    toAmino: (message: _42.MsgCreateStaker) => _42.MsgCreateStakerAmino;
                    fromAmino: (object: _42.MsgCreateStakerAmino) => _42.MsgCreateStaker;
                };
                "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
                    aminoType: string;
                    toAmino: (message: _42.MsgUpdateMetadata) => _42.MsgUpdateMetadataAmino;
                    fromAmino: (object: _42.MsgUpdateMetadataAmino) => _42.MsgUpdateMetadata;
                };
                "/kyve.stakers.v1beta1.MsgUpdateCommission": {
                    aminoType: string;
                    toAmino: (message: _42.MsgUpdateCommission) => _42.MsgUpdateCommissionAmino;
                    fromAmino: (object: _42.MsgUpdateCommissionAmino) => _42.MsgUpdateCommission;
                };
                "/kyve.stakers.v1beta1.MsgClaimCommissionRewards": {
                    aminoType: string;
                    toAmino: (message: _42.MsgClaimCommissionRewards) => _42.MsgClaimCommissionRewardsAmino;
                    fromAmino: (object: _42.MsgClaimCommissionRewardsAmino) => _42.MsgClaimCommissionRewards;
                };
                "/kyve.stakers.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _42.MsgJoinPool) => _42.MsgJoinPoolAmino;
                    fromAmino: (object: _42.MsgJoinPoolAmino) => _42.MsgJoinPool;
                };
                "/kyve.stakers.v1beta1.MsgLeavePool": {
                    aminoType: string;
                    toAmino: (message: _42.MsgLeavePool) => _42.MsgLeavePoolAmino;
                    fromAmino: (object: _42.MsgLeavePoolAmino) => _42.MsgLeavePool;
                };
                "/kyve.stakers.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _42.MsgUpdateParams) => _42.MsgUpdateParamsAmino;
                    fromAmino: (object: _42.MsgUpdateParamsAmino) => _42.MsgUpdateParams;
                };
            };
            MsgCreateStaker: {
                typeUrl: string;
                encode(message: _42.MsgCreateStaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgCreateStaker;
                fromPartial(object: Partial<_42.MsgCreateStaker>): _42.MsgCreateStaker;
                fromAmino(object: _42.MsgCreateStakerAmino): _42.MsgCreateStaker;
                toAmino(message: _42.MsgCreateStaker): _42.MsgCreateStakerAmino;
                fromAminoMsg(object: _42.MsgCreateStakerAminoMsg): _42.MsgCreateStaker;
                fromProtoMsg(message: _42.MsgCreateStakerProtoMsg): _42.MsgCreateStaker;
                toProto(message: _42.MsgCreateStaker): Uint8Array;
                toProtoMsg(message: _42.MsgCreateStaker): _42.MsgCreateStakerProtoMsg;
            };
            MsgCreateStakerResponse: {
                typeUrl: string;
                encode(_: _42.MsgCreateStakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgCreateStakerResponse;
                fromPartial(_: Partial<_42.MsgCreateStakerResponse>): _42.MsgCreateStakerResponse;
                fromAmino(_: _42.MsgCreateStakerResponseAmino): _42.MsgCreateStakerResponse;
                toAmino(_: _42.MsgCreateStakerResponse): _42.MsgCreateStakerResponseAmino;
                fromAminoMsg(object: _42.MsgCreateStakerResponseAminoMsg): _42.MsgCreateStakerResponse;
                fromProtoMsg(message: _42.MsgCreateStakerResponseProtoMsg): _42.MsgCreateStakerResponse;
                toProto(message: _42.MsgCreateStakerResponse): Uint8Array;
                toProtoMsg(message: _42.MsgCreateStakerResponse): _42.MsgCreateStakerResponseProtoMsg;
            };
            MsgUpdateMetadata: {
                typeUrl: string;
                encode(message: _42.MsgUpdateMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgUpdateMetadata;
                fromPartial(object: Partial<_42.MsgUpdateMetadata>): _42.MsgUpdateMetadata;
                fromAmino(object: _42.MsgUpdateMetadataAmino): _42.MsgUpdateMetadata;
                toAmino(message: _42.MsgUpdateMetadata): _42.MsgUpdateMetadataAmino;
                fromAminoMsg(object: _42.MsgUpdateMetadataAminoMsg): _42.MsgUpdateMetadata;
                fromProtoMsg(message: _42.MsgUpdateMetadataProtoMsg): _42.MsgUpdateMetadata;
                toProto(message: _42.MsgUpdateMetadata): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateMetadata): _42.MsgUpdateMetadataProtoMsg;
            };
            MsgUpdateMetadataResponse: {
                typeUrl: string;
                encode(_: _42.MsgUpdateMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgUpdateMetadataResponse;
                fromPartial(_: Partial<_42.MsgUpdateMetadataResponse>): _42.MsgUpdateMetadataResponse;
                fromAmino(_: _42.MsgUpdateMetadataResponseAmino): _42.MsgUpdateMetadataResponse;
                toAmino(_: _42.MsgUpdateMetadataResponse): _42.MsgUpdateMetadataResponseAmino;
                fromAminoMsg(object: _42.MsgUpdateMetadataResponseAminoMsg): _42.MsgUpdateMetadataResponse;
                fromProtoMsg(message: _42.MsgUpdateMetadataResponseProtoMsg): _42.MsgUpdateMetadataResponse;
                toProto(message: _42.MsgUpdateMetadataResponse): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateMetadataResponse): _42.MsgUpdateMetadataResponseProtoMsg;
            };
            MsgUpdateCommission: {
                typeUrl: string;
                encode(message: _42.MsgUpdateCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgUpdateCommission;
                fromPartial(object: Partial<_42.MsgUpdateCommission>): _42.MsgUpdateCommission;
                fromAmino(object: _42.MsgUpdateCommissionAmino): _42.MsgUpdateCommission;
                toAmino(message: _42.MsgUpdateCommission): _42.MsgUpdateCommissionAmino;
                fromAminoMsg(object: _42.MsgUpdateCommissionAminoMsg): _42.MsgUpdateCommission;
                fromProtoMsg(message: _42.MsgUpdateCommissionProtoMsg): _42.MsgUpdateCommission;
                toProto(message: _42.MsgUpdateCommission): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateCommission): _42.MsgUpdateCommissionProtoMsg;
            };
            MsgUpdateCommissionResponse: {
                typeUrl: string;
                encode(_: _42.MsgUpdateCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgUpdateCommissionResponse;
                fromPartial(_: Partial<_42.MsgUpdateCommissionResponse>): _42.MsgUpdateCommissionResponse;
                fromAmino(_: _42.MsgUpdateCommissionResponseAmino): _42.MsgUpdateCommissionResponse;
                toAmino(_: _42.MsgUpdateCommissionResponse): _42.MsgUpdateCommissionResponseAmino;
                fromAminoMsg(object: _42.MsgUpdateCommissionResponseAminoMsg): _42.MsgUpdateCommissionResponse;
                fromProtoMsg(message: _42.MsgUpdateCommissionResponseProtoMsg): _42.MsgUpdateCommissionResponse;
                toProto(message: _42.MsgUpdateCommissionResponse): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateCommissionResponse): _42.MsgUpdateCommissionResponseProtoMsg;
            };
            MsgClaimCommissionRewards: {
                typeUrl: string;
                encode(message: _42.MsgClaimCommissionRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgClaimCommissionRewards;
                fromPartial(object: Partial<_42.MsgClaimCommissionRewards>): _42.MsgClaimCommissionRewards;
                fromAmino(object: _42.MsgClaimCommissionRewardsAmino): _42.MsgClaimCommissionRewards;
                toAmino(message: _42.MsgClaimCommissionRewards): _42.MsgClaimCommissionRewardsAmino;
                fromAminoMsg(object: _42.MsgClaimCommissionRewardsAminoMsg): _42.MsgClaimCommissionRewards;
                fromProtoMsg(message: _42.MsgClaimCommissionRewardsProtoMsg): _42.MsgClaimCommissionRewards;
                toProto(message: _42.MsgClaimCommissionRewards): Uint8Array;
                toProtoMsg(message: _42.MsgClaimCommissionRewards): _42.MsgClaimCommissionRewardsProtoMsg;
            };
            MsgClaimCommissionRewardsResponse: {
                typeUrl: string;
                encode(_: _42.MsgClaimCommissionRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgClaimCommissionRewardsResponse;
                fromPartial(_: Partial<_42.MsgClaimCommissionRewardsResponse>): _42.MsgClaimCommissionRewardsResponse;
                fromAmino(_: _42.MsgClaimCommissionRewardsResponseAmino): _42.MsgClaimCommissionRewardsResponse;
                toAmino(_: _42.MsgClaimCommissionRewardsResponse): _42.MsgClaimCommissionRewardsResponseAmino;
                fromAminoMsg(object: _42.MsgClaimCommissionRewardsResponseAminoMsg): _42.MsgClaimCommissionRewardsResponse;
                fromProtoMsg(message: _42.MsgClaimCommissionRewardsResponseProtoMsg): _42.MsgClaimCommissionRewardsResponse;
                toProto(message: _42.MsgClaimCommissionRewardsResponse): Uint8Array;
                toProtoMsg(message: _42.MsgClaimCommissionRewardsResponse): _42.MsgClaimCommissionRewardsResponseProtoMsg;
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _42.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgJoinPool;
                fromPartial(object: Partial<_42.MsgJoinPool>): _42.MsgJoinPool;
                fromAmino(object: _42.MsgJoinPoolAmino): _42.MsgJoinPool;
                toAmino(message: _42.MsgJoinPool): _42.MsgJoinPoolAmino;
                fromAminoMsg(object: _42.MsgJoinPoolAminoMsg): _42.MsgJoinPool;
                fromProtoMsg(message: _42.MsgJoinPoolProtoMsg): _42.MsgJoinPool;
                toProto(message: _42.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _42.MsgJoinPool): _42.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(_: _42.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgJoinPoolResponse;
                fromPartial(_: Partial<_42.MsgJoinPoolResponse>): _42.MsgJoinPoolResponse;
                fromAmino(_: _42.MsgJoinPoolResponseAmino): _42.MsgJoinPoolResponse;
                toAmino(_: _42.MsgJoinPoolResponse): _42.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _42.MsgJoinPoolResponseAminoMsg): _42.MsgJoinPoolResponse;
                fromProtoMsg(message: _42.MsgJoinPoolResponseProtoMsg): _42.MsgJoinPoolResponse;
                toProto(message: _42.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _42.MsgJoinPoolResponse): _42.MsgJoinPoolResponseProtoMsg;
            };
            MsgLeavePool: {
                typeUrl: string;
                encode(message: _42.MsgLeavePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgLeavePool;
                fromPartial(object: Partial<_42.MsgLeavePool>): _42.MsgLeavePool;
                fromAmino(object: _42.MsgLeavePoolAmino): _42.MsgLeavePool;
                toAmino(message: _42.MsgLeavePool): _42.MsgLeavePoolAmino;
                fromAminoMsg(object: _42.MsgLeavePoolAminoMsg): _42.MsgLeavePool;
                fromProtoMsg(message: _42.MsgLeavePoolProtoMsg): _42.MsgLeavePool;
                toProto(message: _42.MsgLeavePool): Uint8Array;
                toProtoMsg(message: _42.MsgLeavePool): _42.MsgLeavePoolProtoMsg;
            };
            MsgLeavePoolResponse: {
                typeUrl: string;
                encode(_: _42.MsgLeavePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgLeavePoolResponse;
                fromPartial(_: Partial<_42.MsgLeavePoolResponse>): _42.MsgLeavePoolResponse;
                fromAmino(_: _42.MsgLeavePoolResponseAmino): _42.MsgLeavePoolResponse;
                toAmino(_: _42.MsgLeavePoolResponse): _42.MsgLeavePoolResponseAmino;
                fromAminoMsg(object: _42.MsgLeavePoolResponseAminoMsg): _42.MsgLeavePoolResponse;
                fromProtoMsg(message: _42.MsgLeavePoolResponseProtoMsg): _42.MsgLeavePoolResponse;
                toProto(message: _42.MsgLeavePoolResponse): Uint8Array;
                toProtoMsg(message: _42.MsgLeavePoolResponse): _42.MsgLeavePoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _42.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgUpdateParams;
                fromPartial(object: Partial<_42.MsgUpdateParams>): _42.MsgUpdateParams;
                fromAmino(object: _42.MsgUpdateParamsAmino): _42.MsgUpdateParams;
                toAmino(message: _42.MsgUpdateParams): _42.MsgUpdateParamsAmino;
                fromAminoMsg(object: _42.MsgUpdateParamsAminoMsg): _42.MsgUpdateParams;
                fromProtoMsg(message: _42.MsgUpdateParamsProtoMsg): _42.MsgUpdateParams;
                toProto(message: _42.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateParams): _42.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _42.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_42.MsgUpdateParamsResponse>): _42.MsgUpdateParamsResponse;
                fromAmino(_: _42.MsgUpdateParamsResponseAmino): _42.MsgUpdateParamsResponse;
                toAmino(_: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _42.MsgUpdateParamsResponseAminoMsg): _42.MsgUpdateParamsResponse;
                fromProtoMsg(message: _42.MsgUpdateParamsResponseProtoMsg): _42.MsgUpdateParamsResponse;
                toProto(message: _42.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseProtoMsg;
            };
            Staker: {
                typeUrl: string;
                encode(message: _41.Staker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Staker;
                fromPartial(object: Partial<_41.Staker>): _41.Staker;
                fromAmino(object: _41.StakerAmino): _41.Staker;
                toAmino(message: _41.Staker): _41.StakerAmino;
                fromAminoMsg(object: _41.StakerAminoMsg): _41.Staker;
                fromProtoMsg(message: _41.StakerProtoMsg): _41.Staker;
                toProto(message: _41.Staker): Uint8Array;
                toProtoMsg(message: _41.Staker): _41.StakerProtoMsg;
            };
            Valaccount: {
                typeUrl: string;
                encode(message: _41.Valaccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Valaccount;
                fromPartial(object: Partial<_41.Valaccount>): _41.Valaccount;
                fromAmino(object: _41.ValaccountAmino): _41.Valaccount;
                toAmino(message: _41.Valaccount): _41.ValaccountAmino;
                fromAminoMsg(object: _41.ValaccountAminoMsg): _41.Valaccount;
                fromProtoMsg(message: _41.ValaccountProtoMsg): _41.Valaccount;
                toProto(message: _41.Valaccount): Uint8Array;
                toProtoMsg(message: _41.Valaccount): _41.ValaccountProtoMsg;
            };
            CommissionChangeEntry: {
                typeUrl: string;
                encode(message: _41.CommissionChangeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.CommissionChangeEntry;
                fromPartial(object: Partial<_41.CommissionChangeEntry>): _41.CommissionChangeEntry;
                fromAmino(object: _41.CommissionChangeEntryAmino): _41.CommissionChangeEntry;
                toAmino(message: _41.CommissionChangeEntry): _41.CommissionChangeEntryAmino;
                fromAminoMsg(object: _41.CommissionChangeEntryAminoMsg): _41.CommissionChangeEntry;
                fromProtoMsg(message: _41.CommissionChangeEntryProtoMsg): _41.CommissionChangeEntry;
                toProto(message: _41.CommissionChangeEntry): Uint8Array;
                toProtoMsg(message: _41.CommissionChangeEntry): _41.CommissionChangeEntryProtoMsg;
            };
            LeavePoolEntry: {
                typeUrl: string;
                encode(message: _41.LeavePoolEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.LeavePoolEntry;
                fromPartial(object: Partial<_41.LeavePoolEntry>): _41.LeavePoolEntry;
                fromAmino(object: _41.LeavePoolEntryAmino): _41.LeavePoolEntry;
                toAmino(message: _41.LeavePoolEntry): _41.LeavePoolEntryAmino;
                fromAminoMsg(object: _41.LeavePoolEntryAminoMsg): _41.LeavePoolEntry;
                fromProtoMsg(message: _41.LeavePoolEntryProtoMsg): _41.LeavePoolEntry;
                toProto(message: _41.LeavePoolEntry): Uint8Array;
                toProtoMsg(message: _41.LeavePoolEntry): _41.LeavePoolEntryProtoMsg;
            };
            QueueState: {
                typeUrl: string;
                encode(message: _41.QueueState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueueState;
                fromPartial(object: Partial<_41.QueueState>): _41.QueueState;
                fromAmino(object: _41.QueueStateAmino): _41.QueueState;
                toAmino(message: _41.QueueState): _41.QueueStateAmino;
                fromAminoMsg(object: _41.QueueStateAminoMsg): _41.QueueState;
                fromProtoMsg(message: _41.QueueStateProtoMsg): _41.QueueState;
                toProto(message: _41.QueueState): Uint8Array;
                toProtoMsg(message: _41.QueueState): _41.QueueStateProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _40.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
                fromAmino(_: _40.QueryParamsRequestAmino): _40.QueryParamsRequest;
                toAmino(_: _40.QueryParamsRequest): _40.QueryParamsRequestAmino;
                fromAminoMsg(object: _40.QueryParamsRequestAminoMsg): _40.QueryParamsRequest;
                fromProtoMsg(message: _40.QueryParamsRequestProtoMsg): _40.QueryParamsRequest;
                toProto(message: _40.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _40.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryParamsResponse;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
                fromAmino(object: _40.QueryParamsResponseAmino): _40.QueryParamsResponse;
                toAmino(message: _40.QueryParamsResponse): _40.QueryParamsResponseAmino;
                fromAminoMsg(object: _40.QueryParamsResponseAminoMsg): _40.QueryParamsResponse;
                fromProtoMsg(message: _40.QueryParamsResponseProtoMsg): _40.QueryParamsResponse;
                toProto(message: _40.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _39.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _38.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
                fromAmino(object: _38.GenesisStateAmino): _38.GenesisState;
                toAmino(message: _38.GenesisState): _38.GenesisStateAmino;
                fromAminoMsg(object: _38.GenesisStateAminoMsg): _38.GenesisState;
                fromProtoMsg(message: _38.GenesisStateProtoMsg): _38.GenesisState;
                toProto(message: _38.GenesisState): Uint8Array;
                toProtoMsg(message: _38.GenesisState): _38.GenesisStateProtoMsg;
            };
            EventUpdateParams: {
                typeUrl: string;
                encode(message: _37.EventUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventUpdateParams;
                fromPartial(object: Partial<_37.EventUpdateParams>): _37.EventUpdateParams;
                fromAmino(object: _37.EventUpdateParamsAmino): _37.EventUpdateParams;
                toAmino(message: _37.EventUpdateParams): _37.EventUpdateParamsAmino;
                fromAminoMsg(object: _37.EventUpdateParamsAminoMsg): _37.EventUpdateParams;
                fromProtoMsg(message: _37.EventUpdateParamsProtoMsg): _37.EventUpdateParams;
                toProto(message: _37.EventUpdateParams): Uint8Array;
                toProtoMsg(message: _37.EventUpdateParams): _37.EventUpdateParamsProtoMsg;
            };
            EventCreateStaker: {
                typeUrl: string;
                encode(message: _37.EventCreateStaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventCreateStaker;
                fromPartial(object: Partial<_37.EventCreateStaker>): _37.EventCreateStaker;
                fromAmino(object: _37.EventCreateStakerAmino): _37.EventCreateStaker;
                toAmino(message: _37.EventCreateStaker): _37.EventCreateStakerAmino;
                fromAminoMsg(object: _37.EventCreateStakerAminoMsg): _37.EventCreateStaker;
                fromProtoMsg(message: _37.EventCreateStakerProtoMsg): _37.EventCreateStaker;
                toProto(message: _37.EventCreateStaker): Uint8Array;
                toProtoMsg(message: _37.EventCreateStaker): _37.EventCreateStakerProtoMsg;
            };
            EventUpdateMetadata: {
                typeUrl: string;
                encode(message: _37.EventUpdateMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventUpdateMetadata;
                fromPartial(object: Partial<_37.EventUpdateMetadata>): _37.EventUpdateMetadata;
                fromAmino(object: _37.EventUpdateMetadataAmino): _37.EventUpdateMetadata;
                toAmino(message: _37.EventUpdateMetadata): _37.EventUpdateMetadataAmino;
                fromAminoMsg(object: _37.EventUpdateMetadataAminoMsg): _37.EventUpdateMetadata;
                fromProtoMsg(message: _37.EventUpdateMetadataProtoMsg): _37.EventUpdateMetadata;
                toProto(message: _37.EventUpdateMetadata): Uint8Array;
                toProtoMsg(message: _37.EventUpdateMetadata): _37.EventUpdateMetadataProtoMsg;
            };
            EventUpdateCommission: {
                typeUrl: string;
                encode(message: _37.EventUpdateCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventUpdateCommission;
                fromPartial(object: Partial<_37.EventUpdateCommission>): _37.EventUpdateCommission;
                fromAmino(object: _37.EventUpdateCommissionAmino): _37.EventUpdateCommission;
                toAmino(message: _37.EventUpdateCommission): _37.EventUpdateCommissionAmino;
                fromAminoMsg(object: _37.EventUpdateCommissionAminoMsg): _37.EventUpdateCommission;
                fromProtoMsg(message: _37.EventUpdateCommissionProtoMsg): _37.EventUpdateCommission;
                toProto(message: _37.EventUpdateCommission): Uint8Array;
                toProtoMsg(message: _37.EventUpdateCommission): _37.EventUpdateCommissionProtoMsg;
            };
            EventClaimCommissionRewards: {
                typeUrl: string;
                encode(message: _37.EventClaimCommissionRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventClaimCommissionRewards;
                fromPartial(object: Partial<_37.EventClaimCommissionRewards>): _37.EventClaimCommissionRewards;
                fromAmino(object: _37.EventClaimCommissionRewardsAmino): _37.EventClaimCommissionRewards;
                toAmino(message: _37.EventClaimCommissionRewards): _37.EventClaimCommissionRewardsAmino;
                fromAminoMsg(object: _37.EventClaimCommissionRewardsAminoMsg): _37.EventClaimCommissionRewards;
                fromProtoMsg(message: _37.EventClaimCommissionRewardsProtoMsg): _37.EventClaimCommissionRewards;
                toProto(message: _37.EventClaimCommissionRewards): Uint8Array;
                toProtoMsg(message: _37.EventClaimCommissionRewards): _37.EventClaimCommissionRewardsProtoMsg;
            };
            EventJoinPool: {
                typeUrl: string;
                encode(message: _37.EventJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventJoinPool;
                fromPartial(object: Partial<_37.EventJoinPool>): _37.EventJoinPool;
                fromAmino(object: _37.EventJoinPoolAmino): _37.EventJoinPool;
                toAmino(message: _37.EventJoinPool): _37.EventJoinPoolAmino;
                fromAminoMsg(object: _37.EventJoinPoolAminoMsg): _37.EventJoinPool;
                fromProtoMsg(message: _37.EventJoinPoolProtoMsg): _37.EventJoinPool;
                toProto(message: _37.EventJoinPool): Uint8Array;
                toProtoMsg(message: _37.EventJoinPool): _37.EventJoinPoolProtoMsg;
            };
            EventLeavePool: {
                typeUrl: string;
                encode(message: _37.EventLeavePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventLeavePool;
                fromPartial(object: Partial<_37.EventLeavePool>): _37.EventLeavePool;
                fromAmino(object: _37.EventLeavePoolAmino): _37.EventLeavePool;
                toAmino(message: _37.EventLeavePool): _37.EventLeavePoolAmino;
                fromAminoMsg(object: _37.EventLeavePoolAminoMsg): _37.EventLeavePool;
                fromProtoMsg(message: _37.EventLeavePoolProtoMsg): _37.EventLeavePool;
                toProto(message: _37.EventLeavePool): Uint8Array;
                toProtoMsg(message: _37.EventLeavePool): _37.EventLeavePoolProtoMsg;
            };
        };
    }
    namespace team {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                teamInfo(request?: _45.QueryTeamInfoRequest): Promise<_45.QueryTeamInfoResponse>;
                teamVestingAccounts(request?: _45.QueryTeamVestingAccountsRequest): Promise<_45.QueryTeamVestingAccountsResponse>;
                teamVestingAccount(request: _45.QueryTeamVestingAccountRequest): Promise<_45.QueryTeamVestingAccountResponse>;
                teamVestingStatus(request: _45.QueryTeamVestingStatusRequest): Promise<_45.QueryTeamVestingStatusResponse>;
                teamVestingStatusByTime(request: _45.QueryTeamVestingStatusByTimeRequest): Promise<_45.QueryTeamVestingStatusByTimeResponse>;
            };
            LCDQueryClient: typeof _213.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimUnlocked(value: _47.MsgClaimUnlocked): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _47.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createTeamVestingAccount(value: _47.MsgCreateTeamVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAuthorityRewards(value: _47.MsgClaimAuthorityRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAccountRewards(value: _47.MsgClaimAccountRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimUnlocked(value: _47.MsgClaimUnlocked): {
                        typeUrl: string;
                        value: _47.MsgClaimUnlocked;
                    };
                    clawback(value: _47.MsgClawback): {
                        typeUrl: string;
                        value: _47.MsgClawback;
                    };
                    createTeamVestingAccount(value: _47.MsgCreateTeamVestingAccount): {
                        typeUrl: string;
                        value: _47.MsgCreateTeamVestingAccount;
                    };
                    claimAuthorityRewards(value: _47.MsgClaimAuthorityRewards): {
                        typeUrl: string;
                        value: _47.MsgClaimAuthorityRewards;
                    };
                    claimAccountRewards(value: _47.MsgClaimAccountRewards): {
                        typeUrl: string;
                        value: _47.MsgClaimAccountRewards;
                    };
                };
                fromJSON: {
                    claimUnlocked(value: any): {
                        typeUrl: string;
                        value: _47.MsgClaimUnlocked;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _47.MsgClawback;
                    };
                    createTeamVestingAccount(value: any): {
                        typeUrl: string;
                        value: _47.MsgCreateTeamVestingAccount;
                    };
                    claimAuthorityRewards(value: any): {
                        typeUrl: string;
                        value: _47.MsgClaimAuthorityRewards;
                    };
                    claimAccountRewards(value: any): {
                        typeUrl: string;
                        value: _47.MsgClaimAccountRewards;
                    };
                };
                fromPartial: {
                    claimUnlocked(value: _47.MsgClaimUnlocked): {
                        typeUrl: string;
                        value: _47.MsgClaimUnlocked;
                    };
                    clawback(value: _47.MsgClawback): {
                        typeUrl: string;
                        value: _47.MsgClawback;
                    };
                    createTeamVestingAccount(value: _47.MsgCreateTeamVestingAccount): {
                        typeUrl: string;
                        value: _47.MsgCreateTeamVestingAccount;
                    };
                    claimAuthorityRewards(value: _47.MsgClaimAuthorityRewards): {
                        typeUrl: string;
                        value: _47.MsgClaimAuthorityRewards;
                    };
                    claimAccountRewards(value: _47.MsgClaimAccountRewards): {
                        typeUrl: string;
                        value: _47.MsgClaimAccountRewards;
                    };
                };
            };
            AminoConverter: {
                "/kyve.team.v1beta1.MsgClaimUnlocked": {
                    aminoType: string;
                    toAmino: (message: _47.MsgClaimUnlocked) => _47.MsgClaimUnlockedAmino;
                    fromAmino: (object: _47.MsgClaimUnlockedAmino) => _47.MsgClaimUnlocked;
                };
                "/kyve.team.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _47.MsgClawback) => _47.MsgClawbackAmino;
                    fromAmino: (object: _47.MsgClawbackAmino) => _47.MsgClawback;
                };
                "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _47.MsgCreateTeamVestingAccount) => _47.MsgCreateTeamVestingAccountAmino;
                    fromAmino: (object: _47.MsgCreateTeamVestingAccountAmino) => _47.MsgCreateTeamVestingAccount;
                };
                "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
                    aminoType: string;
                    toAmino: (message: _47.MsgClaimAuthorityRewards) => _47.MsgClaimAuthorityRewardsAmino;
                    fromAmino: (object: _47.MsgClaimAuthorityRewardsAmino) => _47.MsgClaimAuthorityRewards;
                };
                "/kyve.team.v1beta1.MsgClaimAccountRewards": {
                    aminoType: string;
                    toAmino: (message: _47.MsgClaimAccountRewards) => _47.MsgClaimAccountRewardsAmino;
                    fromAmino: (object: _47.MsgClaimAccountRewardsAmino) => _47.MsgClaimAccountRewards;
                };
            };
            MsgClaimUnlocked: {
                typeUrl: string;
                encode(message: _47.MsgClaimUnlocked, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgClaimUnlocked;
                fromPartial(object: Partial<_47.MsgClaimUnlocked>): _47.MsgClaimUnlocked;
                fromAmino(object: _47.MsgClaimUnlockedAmino): _47.MsgClaimUnlocked;
                toAmino(message: _47.MsgClaimUnlocked): _47.MsgClaimUnlockedAmino;
                fromAminoMsg(object: _47.MsgClaimUnlockedAminoMsg): _47.MsgClaimUnlocked;
                fromProtoMsg(message: _47.MsgClaimUnlockedProtoMsg): _47.MsgClaimUnlocked;
                toProto(message: _47.MsgClaimUnlocked): Uint8Array;
                toProtoMsg(message: _47.MsgClaimUnlocked): _47.MsgClaimUnlockedProtoMsg;
            };
            MsgClaimUnlockedResponse: {
                typeUrl: string;
                encode(_: _47.MsgClaimUnlockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgClaimUnlockedResponse;
                fromPartial(_: Partial<_47.MsgClaimUnlockedResponse>): _47.MsgClaimUnlockedResponse;
                fromAmino(_: _47.MsgClaimUnlockedResponseAmino): _47.MsgClaimUnlockedResponse;
                toAmino(_: _47.MsgClaimUnlockedResponse): _47.MsgClaimUnlockedResponseAmino;
                fromAminoMsg(object: _47.MsgClaimUnlockedResponseAminoMsg): _47.MsgClaimUnlockedResponse;
                fromProtoMsg(message: _47.MsgClaimUnlockedResponseProtoMsg): _47.MsgClaimUnlockedResponse;
                toProto(message: _47.MsgClaimUnlockedResponse): Uint8Array;
                toProtoMsg(message: _47.MsgClaimUnlockedResponse): _47.MsgClaimUnlockedResponseProtoMsg;
            };
            MsgClaimAuthorityRewards: {
                typeUrl: string;
                encode(message: _47.MsgClaimAuthorityRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgClaimAuthorityRewards;
                fromPartial(object: Partial<_47.MsgClaimAuthorityRewards>): _47.MsgClaimAuthorityRewards;
                fromAmino(object: _47.MsgClaimAuthorityRewardsAmino): _47.MsgClaimAuthorityRewards;
                toAmino(message: _47.MsgClaimAuthorityRewards): _47.MsgClaimAuthorityRewardsAmino;
                fromAminoMsg(object: _47.MsgClaimAuthorityRewardsAminoMsg): _47.MsgClaimAuthorityRewards;
                fromProtoMsg(message: _47.MsgClaimAuthorityRewardsProtoMsg): _47.MsgClaimAuthorityRewards;
                toProto(message: _47.MsgClaimAuthorityRewards): Uint8Array;
                toProtoMsg(message: _47.MsgClaimAuthorityRewards): _47.MsgClaimAuthorityRewardsProtoMsg;
            };
            MsgClaimAuthorityRewardsResponse: {
                typeUrl: string;
                encode(_: _47.MsgClaimAuthorityRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgClaimAuthorityRewardsResponse;
                fromPartial(_: Partial<_47.MsgClaimAuthorityRewardsResponse>): _47.MsgClaimAuthorityRewardsResponse;
                fromAmino(_: _47.MsgClaimAuthorityRewardsResponseAmino): _47.MsgClaimAuthorityRewardsResponse;
                toAmino(_: _47.MsgClaimAuthorityRewardsResponse): _47.MsgClaimAuthorityRewardsResponseAmino;
                fromAminoMsg(object: _47.MsgClaimAuthorityRewardsResponseAminoMsg): _47.MsgClaimAuthorityRewardsResponse;
                fromProtoMsg(message: _47.MsgClaimAuthorityRewardsResponseProtoMsg): _47.MsgClaimAuthorityRewardsResponse;
                toProto(message: _47.MsgClaimAuthorityRewardsResponse): Uint8Array;
                toProtoMsg(message: _47.MsgClaimAuthorityRewardsResponse): _47.MsgClaimAuthorityRewardsResponseProtoMsg;
            };
            MsgClaimAccountRewards: {
                typeUrl: string;
                encode(message: _47.MsgClaimAccountRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgClaimAccountRewards;
                fromPartial(object: Partial<_47.MsgClaimAccountRewards>): _47.MsgClaimAccountRewards;
                fromAmino(object: _47.MsgClaimAccountRewardsAmino): _47.MsgClaimAccountRewards;
                toAmino(message: _47.MsgClaimAccountRewards): _47.MsgClaimAccountRewardsAmino;
                fromAminoMsg(object: _47.MsgClaimAccountRewardsAminoMsg): _47.MsgClaimAccountRewards;
                fromProtoMsg(message: _47.MsgClaimAccountRewardsProtoMsg): _47.MsgClaimAccountRewards;
                toProto(message: _47.MsgClaimAccountRewards): Uint8Array;
                toProtoMsg(message: _47.MsgClaimAccountRewards): _47.MsgClaimAccountRewardsProtoMsg;
            };
            MsgClaimAccountRewardsResponse: {
                typeUrl: string;
                encode(_: _47.MsgClaimAccountRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgClaimAccountRewardsResponse;
                fromPartial(_: Partial<_47.MsgClaimAccountRewardsResponse>): _47.MsgClaimAccountRewardsResponse;
                fromAmino(_: _47.MsgClaimAccountRewardsResponseAmino): _47.MsgClaimAccountRewardsResponse;
                toAmino(_: _47.MsgClaimAccountRewardsResponse): _47.MsgClaimAccountRewardsResponseAmino;
                fromAminoMsg(object: _47.MsgClaimAccountRewardsResponseAminoMsg): _47.MsgClaimAccountRewardsResponse;
                fromProtoMsg(message: _47.MsgClaimAccountRewardsResponseProtoMsg): _47.MsgClaimAccountRewardsResponse;
                toProto(message: _47.MsgClaimAccountRewardsResponse): Uint8Array;
                toProtoMsg(message: _47.MsgClaimAccountRewardsResponse): _47.MsgClaimAccountRewardsResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _47.MsgClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgClawback;
                fromPartial(object: Partial<_47.MsgClawback>): _47.MsgClawback;
                fromAmino(object: _47.MsgClawbackAmino): _47.MsgClawback;
                toAmino(message: _47.MsgClawback): _47.MsgClawbackAmino;
                fromAminoMsg(object: _47.MsgClawbackAminoMsg): _47.MsgClawback;
                fromProtoMsg(message: _47.MsgClawbackProtoMsg): _47.MsgClawback;
                toProto(message: _47.MsgClawback): Uint8Array;
                toProtoMsg(message: _47.MsgClawback): _47.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(_: _47.MsgClawbackResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgClawbackResponse;
                fromPartial(_: Partial<_47.MsgClawbackResponse>): _47.MsgClawbackResponse;
                fromAmino(_: _47.MsgClawbackResponseAmino): _47.MsgClawbackResponse;
                toAmino(_: _47.MsgClawbackResponse): _47.MsgClawbackResponseAmino;
                fromAminoMsg(object: _47.MsgClawbackResponseAminoMsg): _47.MsgClawbackResponse;
                fromProtoMsg(message: _47.MsgClawbackResponseProtoMsg): _47.MsgClawbackResponse;
                toProto(message: _47.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _47.MsgClawbackResponse): _47.MsgClawbackResponseProtoMsg;
            };
            MsgCreateTeamVestingAccount: {
                typeUrl: string;
                encode(message: _47.MsgCreateTeamVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgCreateTeamVestingAccount;
                fromPartial(object: Partial<_47.MsgCreateTeamVestingAccount>): _47.MsgCreateTeamVestingAccount;
                fromAmino(object: _47.MsgCreateTeamVestingAccountAmino): _47.MsgCreateTeamVestingAccount;
                toAmino(message: _47.MsgCreateTeamVestingAccount): _47.MsgCreateTeamVestingAccountAmino;
                fromAminoMsg(object: _47.MsgCreateTeamVestingAccountAminoMsg): _47.MsgCreateTeamVestingAccount;
                fromProtoMsg(message: _47.MsgCreateTeamVestingAccountProtoMsg): _47.MsgCreateTeamVestingAccount;
                toProto(message: _47.MsgCreateTeamVestingAccount): Uint8Array;
                toProtoMsg(message: _47.MsgCreateTeamVestingAccount): _47.MsgCreateTeamVestingAccountProtoMsg;
            };
            MsgCreateTeamVestingAccountResponse: {
                typeUrl: string;
                encode(_: _47.MsgCreateTeamVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgCreateTeamVestingAccountResponse;
                fromPartial(_: Partial<_47.MsgCreateTeamVestingAccountResponse>): _47.MsgCreateTeamVestingAccountResponse;
                fromAmino(_: _47.MsgCreateTeamVestingAccountResponseAmino): _47.MsgCreateTeamVestingAccountResponse;
                toAmino(_: _47.MsgCreateTeamVestingAccountResponse): _47.MsgCreateTeamVestingAccountResponseAmino;
                fromAminoMsg(object: _47.MsgCreateTeamVestingAccountResponseAminoMsg): _47.MsgCreateTeamVestingAccountResponse;
                fromProtoMsg(message: _47.MsgCreateTeamVestingAccountResponseProtoMsg): _47.MsgCreateTeamVestingAccountResponse;
                toProto(message: _47.MsgCreateTeamVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _47.MsgCreateTeamVestingAccountResponse): _47.MsgCreateTeamVestingAccountResponseProtoMsg;
            };
            Authority: {
                typeUrl: string;
                encode(message: _46.Authority, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Authority;
                fromPartial(object: Partial<_46.Authority>): _46.Authority;
                fromAmino(object: _46.AuthorityAmino): _46.Authority;
                toAmino(message: _46.Authority): _46.AuthorityAmino;
                fromAminoMsg(object: _46.AuthorityAminoMsg): _46.Authority;
                fromProtoMsg(message: _46.AuthorityProtoMsg): _46.Authority;
                toProto(message: _46.Authority): Uint8Array;
                toProtoMsg(message: _46.Authority): _46.AuthorityProtoMsg;
            };
            TeamVestingAccount: {
                typeUrl: string;
                encode(message: _46.TeamVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.TeamVestingAccount;
                fromPartial(object: Partial<_46.TeamVestingAccount>): _46.TeamVestingAccount;
                fromAmino(object: _46.TeamVestingAccountAmino): _46.TeamVestingAccount;
                toAmino(message: _46.TeamVestingAccount): _46.TeamVestingAccountAmino;
                fromAminoMsg(object: _46.TeamVestingAccountAminoMsg): _46.TeamVestingAccount;
                fromProtoMsg(message: _46.TeamVestingAccountProtoMsg): _46.TeamVestingAccount;
                toProto(message: _46.TeamVestingAccount): Uint8Array;
                toProtoMsg(message: _46.TeamVestingAccount): _46.TeamVestingAccountProtoMsg;
            };
            QueryTeamInfoRequest: {
                typeUrl: string;
                encode(_: _45.QueryTeamInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.QueryTeamInfoRequest;
                fromPartial(_: Partial<_45.QueryTeamInfoRequest>): _45.QueryTeamInfoRequest;
                fromAmino(_: _45.QueryTeamInfoRequestAmino): _45.QueryTeamInfoRequest;
                toAmino(_: _45.QueryTeamInfoRequest): _45.QueryTeamInfoRequestAmino;
                fromAminoMsg(object: _45.QueryTeamInfoRequestAminoMsg): _45.QueryTeamInfoRequest;
                fromProtoMsg(message: _45.QueryTeamInfoRequestProtoMsg): _45.QueryTeamInfoRequest;
                toProto(message: _45.QueryTeamInfoRequest): Uint8Array;
                toProtoMsg(message: _45.QueryTeamInfoRequest): _45.QueryTeamInfoRequestProtoMsg;
            };
            QueryTeamInfoResponse: {
                typeUrl: string;
                encode(message: _45.QueryTeamInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryTeamInfoResponse;
                fromPartial(object: Partial<_45.QueryTeamInfoResponse>): _45.QueryTeamInfoResponse;
                fromAmino(object: _45.QueryTeamInfoResponseAmino): _45.QueryTeamInfoResponse;
                toAmino(message: _45.QueryTeamInfoResponse): _45.QueryTeamInfoResponseAmino;
                fromAminoMsg(object: _45.QueryTeamInfoResponseAminoMsg): _45.QueryTeamInfoResponse;
                fromProtoMsg(message: _45.QueryTeamInfoResponseProtoMsg): _45.QueryTeamInfoResponse;
                toProto(message: _45.QueryTeamInfoResponse): Uint8Array;
                toProtoMsg(message: _45.QueryTeamInfoResponse): _45.QueryTeamInfoResponseProtoMsg;
            };
            QueryTeamVestingAccountsRequest: {
                typeUrl: string;
                encode(_: _45.QueryTeamVestingAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.QueryTeamVestingAccountsRequest;
                fromPartial(_: Partial<_45.QueryTeamVestingAccountsRequest>): _45.QueryTeamVestingAccountsRequest;
                fromAmino(_: _45.QueryTeamVestingAccountsRequestAmino): _45.QueryTeamVestingAccountsRequest;
                toAmino(_: _45.QueryTeamVestingAccountsRequest): _45.QueryTeamVestingAccountsRequestAmino;
                fromAminoMsg(object: _45.QueryTeamVestingAccountsRequestAminoMsg): _45.QueryTeamVestingAccountsRequest;
                fromProtoMsg(message: _45.QueryTeamVestingAccountsRequestProtoMsg): _45.QueryTeamVestingAccountsRequest;
                toProto(message: _45.QueryTeamVestingAccountsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryTeamVestingAccountsRequest): _45.QueryTeamVestingAccountsRequestProtoMsg;
            };
            QueryTeamVestingAccountsResponse: {
                typeUrl: string;
                encode(message: _45.QueryTeamVestingAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryTeamVestingAccountsResponse;
                fromPartial(object: Partial<_45.QueryTeamVestingAccountsResponse>): _45.QueryTeamVestingAccountsResponse;
                fromAmino(object: _45.QueryTeamVestingAccountsResponseAmino): _45.QueryTeamVestingAccountsResponse;
                toAmino(message: _45.QueryTeamVestingAccountsResponse): _45.QueryTeamVestingAccountsResponseAmino;
                fromAminoMsg(object: _45.QueryTeamVestingAccountsResponseAminoMsg): _45.QueryTeamVestingAccountsResponse;
                fromProtoMsg(message: _45.QueryTeamVestingAccountsResponseProtoMsg): _45.QueryTeamVestingAccountsResponse;
                toProto(message: _45.QueryTeamVestingAccountsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryTeamVestingAccountsResponse): _45.QueryTeamVestingAccountsResponseProtoMsg;
            };
            QueryTeamVestingAccountRequest: {
                typeUrl: string;
                encode(message: _45.QueryTeamVestingAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryTeamVestingAccountRequest;
                fromPartial(object: Partial<_45.QueryTeamVestingAccountRequest>): _45.QueryTeamVestingAccountRequest;
                fromAmino(object: _45.QueryTeamVestingAccountRequestAmino): _45.QueryTeamVestingAccountRequest;
                toAmino(message: _45.QueryTeamVestingAccountRequest): _45.QueryTeamVestingAccountRequestAmino;
                fromAminoMsg(object: _45.QueryTeamVestingAccountRequestAminoMsg): _45.QueryTeamVestingAccountRequest;
                fromProtoMsg(message: _45.QueryTeamVestingAccountRequestProtoMsg): _45.QueryTeamVestingAccountRequest;
                toProto(message: _45.QueryTeamVestingAccountRequest): Uint8Array;
                toProtoMsg(message: _45.QueryTeamVestingAccountRequest): _45.QueryTeamVestingAccountRequestProtoMsg;
            };
            QueryTeamVestingAccountResponse: {
                typeUrl: string;
                encode(message: _45.QueryTeamVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryTeamVestingAccountResponse;
                fromPartial(object: Partial<_45.QueryTeamVestingAccountResponse>): _45.QueryTeamVestingAccountResponse;
                fromAmino(object: _45.QueryTeamVestingAccountResponseAmino): _45.QueryTeamVestingAccountResponse;
                toAmino(message: _45.QueryTeamVestingAccountResponse): _45.QueryTeamVestingAccountResponseAmino;
                fromAminoMsg(object: _45.QueryTeamVestingAccountResponseAminoMsg): _45.QueryTeamVestingAccountResponse;
                fromProtoMsg(message: _45.QueryTeamVestingAccountResponseProtoMsg): _45.QueryTeamVestingAccountResponse;
                toProto(message: _45.QueryTeamVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _45.QueryTeamVestingAccountResponse): _45.QueryTeamVestingAccountResponseProtoMsg;
            };
            QueryTeamVestingStatusRequest: {
                typeUrl: string;
                encode(message: _45.QueryTeamVestingStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryTeamVestingStatusRequest;
                fromPartial(object: Partial<_45.QueryTeamVestingStatusRequest>): _45.QueryTeamVestingStatusRequest;
                fromAmino(object: _45.QueryTeamVestingStatusRequestAmino): _45.QueryTeamVestingStatusRequest;
                toAmino(message: _45.QueryTeamVestingStatusRequest): _45.QueryTeamVestingStatusRequestAmino;
                fromAminoMsg(object: _45.QueryTeamVestingStatusRequestAminoMsg): _45.QueryTeamVestingStatusRequest;
                fromProtoMsg(message: _45.QueryTeamVestingStatusRequestProtoMsg): _45.QueryTeamVestingStatusRequest;
                toProto(message: _45.QueryTeamVestingStatusRequest): Uint8Array;
                toProtoMsg(message: _45.QueryTeamVestingStatusRequest): _45.QueryTeamVestingStatusRequestProtoMsg;
            };
            QueryTeamVestingStatusResponse: {
                typeUrl: string;
                encode(message: _45.QueryTeamVestingStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryTeamVestingStatusResponse;
                fromPartial(object: Partial<_45.QueryTeamVestingStatusResponse>): _45.QueryTeamVestingStatusResponse;
                fromAmino(object: _45.QueryTeamVestingStatusResponseAmino): _45.QueryTeamVestingStatusResponse;
                toAmino(message: _45.QueryTeamVestingStatusResponse): _45.QueryTeamVestingStatusResponseAmino;
                fromAminoMsg(object: _45.QueryTeamVestingStatusResponseAminoMsg): _45.QueryTeamVestingStatusResponse;
                fromProtoMsg(message: _45.QueryTeamVestingStatusResponseProtoMsg): _45.QueryTeamVestingStatusResponse;
                toProto(message: _45.QueryTeamVestingStatusResponse): Uint8Array;
                toProtoMsg(message: _45.QueryTeamVestingStatusResponse): _45.QueryTeamVestingStatusResponseProtoMsg;
            };
            QueryTeamVestingStatusByTimeRequest: {
                typeUrl: string;
                encode(message: _45.QueryTeamVestingStatusByTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryTeamVestingStatusByTimeRequest;
                fromPartial(object: Partial<_45.QueryTeamVestingStatusByTimeRequest>): _45.QueryTeamVestingStatusByTimeRequest;
                fromAmino(object: _45.QueryTeamVestingStatusByTimeRequestAmino): _45.QueryTeamVestingStatusByTimeRequest;
                toAmino(message: _45.QueryTeamVestingStatusByTimeRequest): _45.QueryTeamVestingStatusByTimeRequestAmino;
                fromAminoMsg(object: _45.QueryTeamVestingStatusByTimeRequestAminoMsg): _45.QueryTeamVestingStatusByTimeRequest;
                fromProtoMsg(message: _45.QueryTeamVestingStatusByTimeRequestProtoMsg): _45.QueryTeamVestingStatusByTimeRequest;
                toProto(message: _45.QueryTeamVestingStatusByTimeRequest): Uint8Array;
                toProtoMsg(message: _45.QueryTeamVestingStatusByTimeRequest): _45.QueryTeamVestingStatusByTimeRequestProtoMsg;
            };
            QueryTeamVestingStatusByTimeResponse: {
                typeUrl: string;
                encode(message: _45.QueryTeamVestingStatusByTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryTeamVestingStatusByTimeResponse;
                fromPartial(object: Partial<_45.QueryTeamVestingStatusByTimeResponse>): _45.QueryTeamVestingStatusByTimeResponse;
                fromAmino(object: _45.QueryTeamVestingStatusByTimeResponseAmino): _45.QueryTeamVestingStatusByTimeResponse;
                toAmino(message: _45.QueryTeamVestingStatusByTimeResponse): _45.QueryTeamVestingStatusByTimeResponseAmino;
                fromAminoMsg(object: _45.QueryTeamVestingStatusByTimeResponseAminoMsg): _45.QueryTeamVestingStatusByTimeResponse;
                fromProtoMsg(message: _45.QueryTeamVestingStatusByTimeResponseProtoMsg): _45.QueryTeamVestingStatusByTimeResponse;
                toProto(message: _45.QueryTeamVestingStatusByTimeResponse): Uint8Array;
                toProtoMsg(message: _45.QueryTeamVestingStatusByTimeResponse): _45.QueryTeamVestingStatusByTimeResponseProtoMsg;
            };
            QueryVestingStatus: {
                typeUrl: string;
                encode(message: _45.QueryVestingStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryVestingStatus;
                fromPartial(object: Partial<_45.QueryVestingStatus>): _45.QueryVestingStatus;
                fromAmino(object: _45.QueryVestingStatusAmino): _45.QueryVestingStatus;
                toAmino(message: _45.QueryVestingStatus): _45.QueryVestingStatusAmino;
                fromAminoMsg(object: _45.QueryVestingStatusAminoMsg): _45.QueryVestingStatus;
                fromProtoMsg(message: _45.QueryVestingStatusProtoMsg): _45.QueryVestingStatus;
                toProto(message: _45.QueryVestingStatus): Uint8Array;
                toProtoMsg(message: _45.QueryVestingStatus): _45.QueryVestingStatusProtoMsg;
            };
            QueryVestingPlan: {
                typeUrl: string;
                encode(message: _45.QueryVestingPlan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryVestingPlan;
                fromPartial(object: Partial<_45.QueryVestingPlan>): _45.QueryVestingPlan;
                fromAmino(object: _45.QueryVestingPlanAmino): _45.QueryVestingPlan;
                toAmino(message: _45.QueryVestingPlan): _45.QueryVestingPlanAmino;
                fromAminoMsg(object: _45.QueryVestingPlanAminoMsg): _45.QueryVestingPlan;
                fromProtoMsg(message: _45.QueryVestingPlanProtoMsg): _45.QueryVestingPlan;
                toProto(message: _45.QueryVestingPlan): Uint8Array;
                toProtoMsg(message: _45.QueryVestingPlan): _45.QueryVestingPlanProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _44.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
            EventCreateTeamVestingAccount: {
                typeUrl: string;
                encode(message: _43.EventCreateTeamVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.EventCreateTeamVestingAccount;
                fromPartial(object: Partial<_43.EventCreateTeamVestingAccount>): _43.EventCreateTeamVestingAccount;
                fromAmino(object: _43.EventCreateTeamVestingAccountAmino): _43.EventCreateTeamVestingAccount;
                toAmino(message: _43.EventCreateTeamVestingAccount): _43.EventCreateTeamVestingAccountAmino;
                fromAminoMsg(object: _43.EventCreateTeamVestingAccountAminoMsg): _43.EventCreateTeamVestingAccount;
                fromProtoMsg(message: _43.EventCreateTeamVestingAccountProtoMsg): _43.EventCreateTeamVestingAccount;
                toProto(message: _43.EventCreateTeamVestingAccount): Uint8Array;
                toProtoMsg(message: _43.EventCreateTeamVestingAccount): _43.EventCreateTeamVestingAccountProtoMsg;
            };
            EventClawback: {
                typeUrl: string;
                encode(message: _43.EventClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.EventClawback;
                fromPartial(object: Partial<_43.EventClawback>): _43.EventClawback;
                fromAmino(object: _43.EventClawbackAmino): _43.EventClawback;
                toAmino(message: _43.EventClawback): _43.EventClawbackAmino;
                fromAminoMsg(object: _43.EventClawbackAminoMsg): _43.EventClawback;
                fromProtoMsg(message: _43.EventClawbackProtoMsg): _43.EventClawback;
                toProto(message: _43.EventClawback): Uint8Array;
                toProtoMsg(message: _43.EventClawback): _43.EventClawbackProtoMsg;
            };
            EventClaimedUnlocked: {
                typeUrl: string;
                encode(message: _43.EventClaimedUnlocked, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.EventClaimedUnlocked;
                fromPartial(object: Partial<_43.EventClaimedUnlocked>): _43.EventClaimedUnlocked;
                fromAmino(object: _43.EventClaimedUnlockedAmino): _43.EventClaimedUnlocked;
                toAmino(message: _43.EventClaimedUnlocked): _43.EventClaimedUnlockedAmino;
                fromAminoMsg(object: _43.EventClaimedUnlockedAminoMsg): _43.EventClaimedUnlocked;
                fromProtoMsg(message: _43.EventClaimedUnlockedProtoMsg): _43.EventClaimedUnlocked;
                toProto(message: _43.EventClaimedUnlocked): Uint8Array;
                toProtoMsg(message: _43.EventClaimedUnlocked): _43.EventClaimedUnlockedProtoMsg;
            };
            EventClaimInflationRewards: {
                typeUrl: string;
                encode(message: _43.EventClaimInflationRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.EventClaimInflationRewards;
                fromPartial(object: Partial<_43.EventClaimInflationRewards>): _43.EventClaimInflationRewards;
                fromAmino(object: _43.EventClaimInflationRewardsAmino): _43.EventClaimInflationRewards;
                toAmino(message: _43.EventClaimInflationRewards): _43.EventClaimInflationRewardsAmino;
                fromAminoMsg(object: _43.EventClaimInflationRewardsAminoMsg): _43.EventClaimInflationRewards;
                fromProtoMsg(message: _43.EventClaimInflationRewardsProtoMsg): _43.EventClaimInflationRewards;
                toProto(message: _43.EventClaimInflationRewards): Uint8Array;
                toProtoMsg(message: _43.EventClaimInflationRewards): _43.EventClaimInflationRewardsProtoMsg;
            };
            EventClaimAuthorityRewards: {
                typeUrl: string;
                encode(message: _43.EventClaimAuthorityRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.EventClaimAuthorityRewards;
                fromPartial(object: Partial<_43.EventClaimAuthorityRewards>): _43.EventClaimAuthorityRewards;
                fromAmino(object: _43.EventClaimAuthorityRewardsAmino): _43.EventClaimAuthorityRewards;
                toAmino(message: _43.EventClaimAuthorityRewards): _43.EventClaimAuthorityRewardsAmino;
                fromAminoMsg(object: _43.EventClaimAuthorityRewardsAminoMsg): _43.EventClaimAuthorityRewards;
                fromProtoMsg(message: _43.EventClaimAuthorityRewardsProtoMsg): _43.EventClaimAuthorityRewards;
                toProto(message: _43.EventClaimAuthorityRewards): Uint8Array;
                toProtoMsg(message: _43.EventClaimAuthorityRewards): _43.EventClaimAuthorityRewardsProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            kyve: {
                bundles: {
                    v1beta1: _221.MsgClientImpl;
                };
                delegation: {
                    v1beta1: _222.MsgClientImpl;
                };
                funders: {
                    v1beta1: _223.MsgClientImpl;
                };
                global: {
                    v1beta1: _224.MsgClientImpl;
                };
                pool: {
                    v1beta1: _225.MsgClientImpl;
                };
                stakers: {
                    v1beta1: _226.MsgClientImpl;
                };
                team: {
                    v1beta1: _227.MsgClientImpl;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
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
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                funders: {
                    v1beta1: {
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                    };
                };
                global: {
                    v1beta1: {
                        params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                    };
                };
                pool: {
                    v1beta1: {
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                    };
                };
                stakers: {
                    v1beta1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                    };
                };
                team: {
                    v1beta1: {
                        teamInfo(request?: _45.QueryTeamInfoRequest): Promise<_45.QueryTeamInfoResponse>;
                        teamVestingAccounts(request?: _45.QueryTeamVestingAccountsRequest): Promise<_45.QueryTeamVestingAccountsResponse>;
                        teamVestingAccount(request: _45.QueryTeamVestingAccountRequest): Promise<_45.QueryTeamVestingAccountResponse>;
                        teamVestingStatus(request: _45.QueryTeamVestingStatusRequest): Promise<_45.QueryTeamVestingStatusResponse>;
                        teamVestingStatusByTime(request: _45.QueryTeamVestingStatusByTimeRequest): Promise<_45.QueryTeamVestingStatusByTimeResponse>;
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
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
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
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
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
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
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
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
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
                    v1beta1: _207.LCDQueryClient;
                };
                delegation: {
                    v1beta1: _208.LCDQueryClient;
                };
                funders: {
                    v1beta1: _209.LCDQueryClient;
                };
                global: {
                    v1beta1: _210.LCDQueryClient;
                };
                pool: {
                    v1beta1: _211.LCDQueryClient;
                };
                stakers: {
                    v1beta1: _212.LCDQueryClient;
                };
                team: {
                    v1beta1: _213.LCDQueryClient;
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
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
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
