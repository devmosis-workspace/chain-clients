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
import * as _19 from "./pool/v1beta1/pool";
import * as _20 from "./pool/v1beta1/tx";
import * as _21 from "./query/v1beta1/account";
import * as _22 from "./query/v1beta1/bundles";
import * as _23 from "./query/v1beta1/delegation";
import * as _24 from "./query/v1beta1/params";
import * as _25 from "./query/v1beta1/pools";
import * as _26 from "./query/v1beta1/query";
import * as _27 from "./query/v1beta1/stakers";
import * as _28 from "./stakers/v1beta1/events";
import * as _29 from "./stakers/v1beta1/genesis";
import * as _30 from "./stakers/v1beta1/params";
import * as _31 from "./stakers/v1beta1/query";
import * as _32 from "./stakers/v1beta1/stakers";
import * as _33 from "./stakers/v1beta1/tx";
import * as _34 from "./team/v1beta1/events";
import * as _35 from "./team/v1beta1/genesis";
import * as _36 from "./team/v1beta1/query";
import * as _37 from "./team/v1beta1/team";
import * as _38 from "./team/v1beta1/tx";
import * as _165 from "./bundles/v1beta1/query.rpc.Query";
import * as _166 from "./delegation/v1beta1/query.rpc.Query";
import * as _167 from "./global/v1beta1/query.rpc.Query";
import * as _168 from "./stakers/v1beta1/query.rpc.Query";
import * as _169 from "./team/v1beta1/query.rpc.Query";
import * as _170 from "./bundles/v1beta1/tx.rpc.msg";
import * as _171 from "./delegation/v1beta1/tx.rpc.msg";
import * as _172 from "./global/v1beta1/tx.rpc.msg";
import * as _173 from "./pool/v1beta1/tx.rpc.msg";
import * as _174 from "./stakers/v1beta1/tx.rpc.msg";
import * as _175 from "./team/v1beta1/tx.rpc.msg";
export declare namespace kyve {
    namespace bundles {
        const v1beta1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _165.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            };
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
                    toAmino: ({ creator, staker, poolId, storageId, dataSize, dataHash, fromIndex, bundleSize, fromKey, toKey, bundleSummary }: _5.MsgSubmitBundleProposal) => {
                        creator: string;
                        staker: string;
                        pool_id: string;
                        storage_id: string;
                        data_size: string;
                        data_hash: string;
                        from_index: string;
                        bundle_size: string;
                        from_key: string;
                        to_key: string;
                        bundle_summary: string;
                    };
                    fromAmino: ({ creator, staker, pool_id, storage_id, data_size, data_hash, from_index, bundle_size, from_key, to_key, bundle_summary }: {
                        creator: string;
                        staker: string;
                        pool_id: string;
                        storage_id: string;
                        data_size: string;
                        data_hash: string;
                        from_index: string;
                        bundle_size: string;
                        from_key: string;
                        to_key: string;
                        bundle_summary: string;
                    }) => _5.MsgSubmitBundleProposal;
                };
                "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
                    aminoType: string;
                    toAmino: ({ creator, staker, poolId, storageId, vote }: _5.MsgVoteBundleProposal) => {
                        creator: string;
                        staker: string;
                        pool_id: string;
                        storage_id: string;
                        vote: number;
                    };
                    fromAmino: ({ creator, staker, pool_id, storage_id, vote }: {
                        creator: string;
                        staker: string;
                        pool_id: string;
                        storage_id: string;
                        vote: number;
                    }) => _5.MsgVoteBundleProposal;
                };
                "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
                    aminoType: string;
                    toAmino: ({ creator, staker, poolId }: _5.MsgClaimUploaderRole) => {
                        creator: string;
                        staker: string;
                        pool_id: string;
                    };
                    fromAmino: ({ creator, staker, pool_id }: {
                        creator: string;
                        staker: string;
                        pool_id: string;
                    }) => _5.MsgClaimUploaderRole;
                };
                "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
                    aminoType: string;
                    toAmino: ({ creator, staker, poolId, fromIndex }: _5.MsgSkipUploaderRole) => {
                        creator: string;
                        staker: string;
                        pool_id: string;
                        from_index: string;
                    };
                    fromAmino: ({ creator, staker, pool_id, from_index }: {
                        creator: string;
                        staker: string;
                        pool_id: string;
                        from_index: string;
                    }) => _5.MsgSkipUploaderRole;
                };
                "/kyve.bundles.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, payload }: _5.MsgUpdateParams) => {
                        authority: string;
                        payload: string;
                    };
                    fromAmino: ({ authority, payload }: {
                        authority: string;
                        payload: string;
                    }) => _5.MsgUpdateParams;
                };
            };
            voteTypeFromJSON(object: any): _5.VoteType;
            voteTypeToJSON(object: _5.VoteType): string;
            VoteType: typeof _5.VoteType;
            VoteTypeSDKType: typeof _5.VoteType;
            MsgSubmitBundleProposal: {
                encode(message: _5.MsgSubmitBundleProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.MsgSubmitBundleProposal;
                fromPartial(object: Partial<_5.MsgSubmitBundleProposal>): _5.MsgSubmitBundleProposal;
            };
            MsgSubmitBundleProposalResponse: {
                encode(_: _5.MsgSubmitBundleProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.MsgSubmitBundleProposalResponse;
                fromPartial(_: Partial<_5.MsgSubmitBundleProposalResponse>): _5.MsgSubmitBundleProposalResponse;
            };
            MsgVoteBundleProposal: {
                encode(message: _5.MsgVoteBundleProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.MsgVoteBundleProposal;
                fromPartial(object: Partial<_5.MsgVoteBundleProposal>): _5.MsgVoteBundleProposal;
            };
            MsgVoteBundleProposalResponse: {
                encode(_: _5.MsgVoteBundleProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.MsgVoteBundleProposalResponse;
                fromPartial(_: Partial<_5.MsgVoteBundleProposalResponse>): _5.MsgVoteBundleProposalResponse;
            };
            MsgClaimUploaderRole: {
                encode(message: _5.MsgClaimUploaderRole, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.MsgClaimUploaderRole;
                fromPartial(object: Partial<_5.MsgClaimUploaderRole>): _5.MsgClaimUploaderRole;
            };
            MsgClaimUploaderRoleResponse: {
                encode(_: _5.MsgClaimUploaderRoleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.MsgClaimUploaderRoleResponse;
                fromPartial(_: Partial<_5.MsgClaimUploaderRoleResponse>): _5.MsgClaimUploaderRoleResponse;
            };
            MsgSkipUploaderRole: {
                encode(message: _5.MsgSkipUploaderRole, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.MsgSkipUploaderRole;
                fromPartial(object: Partial<_5.MsgSkipUploaderRole>): _5.MsgSkipUploaderRole;
            };
            MsgSkipUploaderRoleResponse: {
                encode(_: _5.MsgSkipUploaderRoleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.MsgSkipUploaderRoleResponse;
                fromPartial(_: Partial<_5.MsgSkipUploaderRoleResponse>): _5.MsgSkipUploaderRoleResponse;
            };
            MsgUpdateParams: {
                encode(message: _5.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.MsgUpdateParams;
                fromPartial(object: Partial<_5.MsgUpdateParams>): _5.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _5.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_5.MsgUpdateParamsResponse>): _5.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _4.QueryParamsRequest;
                fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.QueryParamsResponse;
                fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
            };
            Params: {
                encode(message: _3.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.Params;
                fromPartial(object: Partial<_3.Params>): _3.Params;
            };
            GenesisState: {
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
            };
            EventUpdateParams: {
                encode(message: _1.EventUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventUpdateParams;
                fromPartial(object: Partial<_1.EventUpdateParams>): _1.EventUpdateParams;
            };
            EventBundleVote: {
                encode(message: _1.EventBundleVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventBundleVote;
                fromPartial(object: Partial<_1.EventBundleVote>): _1.EventBundleVote;
            };
            EventBundleProposed: {
                encode(message: _1.EventBundleProposed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventBundleProposed;
                fromPartial(object: Partial<_1.EventBundleProposed>): _1.EventBundleProposed;
            };
            EventBundleFinalized: {
                encode(message: _1.EventBundleFinalized, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventBundleFinalized;
                fromPartial(object: Partial<_1.EventBundleFinalized>): _1.EventBundleFinalized;
            };
            EventClaimedUploaderRole: {
                encode(message: _1.EventClaimedUploaderRole, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventClaimedUploaderRole;
                fromPartial(object: Partial<_1.EventClaimedUploaderRole>): _1.EventClaimedUploaderRole;
            };
            EventSkippedUploaderRole: {
                encode(message: _1.EventSkippedUploaderRole, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventSkippedUploaderRole;
                fromPartial(object: Partial<_1.EventSkippedUploaderRole>): _1.EventSkippedUploaderRole;
            };
            EventPointIncreased: {
                encode(message: _1.EventPointIncreased, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventPointIncreased;
                fromPartial(object: Partial<_1.EventPointIncreased>): _1.EventPointIncreased;
            };
            EventPointsReset: {
                encode(message: _1.EventPointsReset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.EventPointsReset;
                fromPartial(object: Partial<_1.EventPointsReset>): _1.EventPointsReset;
            };
            bundleStatusFromJSON(object: any): _0.BundleStatus;
            bundleStatusToJSON(object: _0.BundleStatus): string;
            BundleStatus: typeof _0.BundleStatus;
            BundleStatusSDKType: typeof _0.BundleStatus;
            BundleProposal: {
                encode(message: _0.BundleProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.BundleProposal;
                fromPartial(object: Partial<_0.BundleProposal>): _0.BundleProposal;
            };
            FinalizedBundle: {
                encode(message: _0.FinalizedBundle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.FinalizedBundle;
                fromPartial(object: Partial<_0.FinalizedBundle>): _0.FinalizedBundle;
            };
            FinalizedAt: {
                encode(message: _0.FinalizedAt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.FinalizedAt;
                fromPartial(object: Partial<_0.FinalizedAt>): _0.FinalizedAt;
            };
            StakeSecurity: {
                encode(message: _0.StakeSecurity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.StakeSecurity;
                fromPartial(object: Partial<_0.StakeSecurity>): _0.StakeSecurity;
            };
            BundleVersionEntry: {
                encode(message: _0.BundleVersionEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.BundleVersionEntry;
                fromPartial(object: Partial<_0.BundleVersionEntry>): _0.BundleVersionEntry;
            };
            BundleVersionMap: {
                encode(message: _0.BundleVersionMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.BundleVersionMap;
                fromPartial(object: Partial<_0.BundleVersionMap>): _0.BundleVersionMap;
            };
        };
    }
    namespace delegation {
        const v1beta1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
            };
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
                    toAmino: ({ creator, staker, amount }: _11.MsgDelegate) => {
                        creator: string;
                        staker: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, staker, amount }: {
                        creator: string;
                        staker: string;
                        amount: string;
                    }) => _11.MsgDelegate;
                };
                "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
                    aminoType: string;
                    toAmino: ({ creator, staker }: _11.MsgWithdrawRewards) => {
                        creator: string;
                        staker: string;
                    };
                    fromAmino: ({ creator, staker }: {
                        creator: string;
                        staker: string;
                    }) => _11.MsgWithdrawRewards;
                };
                "/kyve.delegation.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ creator, staker, amount }: _11.MsgUndelegate) => {
                        creator: string;
                        staker: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, staker, amount }: {
                        creator: string;
                        staker: string;
                        amount: string;
                    }) => _11.MsgUndelegate;
                };
                "/kyve.delegation.v1beta1.MsgRedelegate": {
                    aminoType: string;
                    toAmino: ({ creator, fromStaker, toStaker, amount }: _11.MsgRedelegate) => {
                        creator: string;
                        from_staker: string;
                        to_staker: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, from_staker, to_staker, amount }: {
                        creator: string;
                        from_staker: string;
                        to_staker: string;
                        amount: string;
                    }) => _11.MsgRedelegate;
                };
                "/kyve.delegation.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, payload }: _11.MsgUpdateParams) => {
                        authority: string;
                        payload: string;
                    };
                    fromAmino: ({ authority, payload }: {
                        authority: string;
                        payload: string;
                    }) => _11.MsgUpdateParams;
                };
            };
            MsgDelegate: {
                encode(message: _11.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgDelegate;
                fromPartial(object: Partial<_11.MsgDelegate>): _11.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _11.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgDelegateResponse;
                fromPartial(_: Partial<_11.MsgDelegateResponse>): _11.MsgDelegateResponse;
            };
            MsgWithdrawRewards: {
                encode(message: _11.MsgWithdrawRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgWithdrawRewards;
                fromPartial(object: Partial<_11.MsgWithdrawRewards>): _11.MsgWithdrawRewards;
            };
            MsgWithdrawRewardsResponse: {
                encode(_: _11.MsgWithdrawRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgWithdrawRewardsResponse;
                fromPartial(_: Partial<_11.MsgWithdrawRewardsResponse>): _11.MsgWithdrawRewardsResponse;
            };
            MsgUndelegate: {
                encode(message: _11.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgUndelegate;
                fromPartial(object: Partial<_11.MsgUndelegate>): _11.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(_: _11.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgUndelegateResponse;
                fromPartial(_: Partial<_11.MsgUndelegateResponse>): _11.MsgUndelegateResponse;
            };
            MsgRedelegate: {
                encode(message: _11.MsgRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgRedelegate;
                fromPartial(object: Partial<_11.MsgRedelegate>): _11.MsgRedelegate;
            };
            MsgRedelegateResponse: {
                encode(_: _11.MsgRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgRedelegateResponse;
                fromPartial(_: Partial<_11.MsgRedelegateResponse>): _11.MsgRedelegateResponse;
            };
            MsgUpdateParams: {
                encode(message: _11.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgUpdateParams;
                fromPartial(object: Partial<_11.MsgUpdateParams>): _11.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _11.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_11.MsgUpdateParamsResponse>): _11.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _10.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.QueryParamsRequest;
                fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _10.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryParamsResponse;
                fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
            };
            Params: {
                encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
            };
            EventUpdateParams: {
                encode(message: _7.EventUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EventUpdateParams;
                fromPartial(object: Partial<_7.EventUpdateParams>): _7.EventUpdateParams;
            };
            EventDelegate: {
                encode(message: _7.EventDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EventDelegate;
                fromPartial(object: Partial<_7.EventDelegate>): _7.EventDelegate;
            };
            EventStartUndelegation: {
                encode(message: _7.EventStartUndelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EventStartUndelegation;
                fromPartial(object: Partial<_7.EventStartUndelegation>): _7.EventStartUndelegation;
            };
            EventUndelegate: {
                encode(message: _7.EventUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EventUndelegate;
                fromPartial(object: Partial<_7.EventUndelegate>): _7.EventUndelegate;
            };
            EventRedelegate: {
                encode(message: _7.EventRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EventRedelegate;
                fromPartial(object: Partial<_7.EventRedelegate>): _7.EventRedelegate;
            };
            EventWithdrawRewards: {
                encode(message: _7.EventWithdrawRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EventWithdrawRewards;
                fromPartial(object: Partial<_7.EventWithdrawRewards>): _7.EventWithdrawRewards;
            };
            EventSlash: {
                encode(message: _7.EventSlash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EventSlash;
                fromPartial(object: Partial<_7.EventSlash>): _7.EventSlash;
            };
            slashTypeFromJSON(object: any): _6.SlashType;
            slashTypeToJSON(object: _6.SlashType): string;
            SlashType: typeof _6.SlashType;
            SlashTypeSDKType: typeof _6.SlashType;
            Delegator: {
                encode(message: _6.Delegator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Delegator;
                fromPartial(object: Partial<_6.Delegator>): _6.Delegator;
            };
            DelegationEntry: {
                encode(message: _6.DelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.DelegationEntry;
                fromPartial(object: Partial<_6.DelegationEntry>): _6.DelegationEntry;
            };
            DelegationData: {
                encode(message: _6.DelegationData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.DelegationData;
                fromPartial(object: Partial<_6.DelegationData>): _6.DelegationData;
            };
            DelegationSlash: {
                encode(message: _6.DelegationSlash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.DelegationSlash;
                fromPartial(object: Partial<_6.DelegationSlash>): _6.DelegationSlash;
            };
            UndelegationQueueEntry: {
                encode(message: _6.UndelegationQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.UndelegationQueueEntry;
                fromPartial(object: Partial<_6.UndelegationQueueEntry>): _6.UndelegationQueueEntry;
            };
            QueueState: {
                encode(message: _6.QueueState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueueState;
                fromPartial(object: Partial<_6.QueueState>): _6.QueueState;
            };
            RedelegationCooldown: {
                encode(message: _6.RedelegationCooldown, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.RedelegationCooldown;
                fromPartial(object: Partial<_6.RedelegationCooldown>): _6.RedelegationCooldown;
            };
        };
    }
    namespace global {
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
            };
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
                    toAmino: ({ authority, payload }: _16.MsgUpdateParams) => {
                        authority: string;
                        payload: string;
                    };
                    fromAmino: ({ authority, payload }: {
                        authority: string;
                        payload: string;
                    }) => _16.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _16.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.MsgUpdateParams;
                fromPartial(object: Partial<_16.MsgUpdateParams>): _16.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _16.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_16.MsgUpdateParamsResponse>): _16.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _15.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _15.QueryParamsRequest;
                fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _15.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryParamsResponse;
                fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
            };
            Params: {
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.Params;
                fromPartial(object: Partial<_14.Params>): _14.Params;
            };
            GasAdjustment: {
                encode(message: _14.GasAdjustment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.GasAdjustment;
                fromPartial(object: Partial<_14.GasAdjustment>): _14.GasAdjustment;
            };
            GasRefund: {
                encode(message: _14.GasRefund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.GasRefund;
                fromPartial(object: Partial<_14.GasRefund>): _14.GasRefund;
            };
            GenesisState: {
                encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
            };
            EventUpdateParams: {
                encode(message: _12.EventUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.EventUpdateParams;
                fromPartial(object: Partial<_12.EventUpdateParams>): _12.EventUpdateParams;
            };
        };
    }
    namespace pool {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    fundPool(value: _20.MsgFundPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defundPool(value: _20.MsgDefundPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPool(value: _20.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePool(value: _20.MsgUpdatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    disablePool(value: _20.MsgDisablePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    enablePool(value: _20.MsgEnablePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    scheduleRuntimeUpgrade(value: _20.MsgScheduleRuntimeUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelRuntimeUpgrade(value: _20.MsgCancelRuntimeUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    fundPool(value: _20.MsgFundPool): {
                        typeUrl: string;
                        value: _20.MsgFundPool;
                    };
                    defundPool(value: _20.MsgDefundPool): {
                        typeUrl: string;
                        value: _20.MsgDefundPool;
                    };
                    createPool(value: _20.MsgCreatePool): {
                        typeUrl: string;
                        value: _20.MsgCreatePool;
                    };
                    updatePool(value: _20.MsgUpdatePool): {
                        typeUrl: string;
                        value: _20.MsgUpdatePool;
                    };
                    disablePool(value: _20.MsgDisablePool): {
                        typeUrl: string;
                        value: _20.MsgDisablePool;
                    };
                    enablePool(value: _20.MsgEnablePool): {
                        typeUrl: string;
                        value: _20.MsgEnablePool;
                    };
                    scheduleRuntimeUpgrade(value: _20.MsgScheduleRuntimeUpgrade): {
                        typeUrl: string;
                        value: _20.MsgScheduleRuntimeUpgrade;
                    };
                    cancelRuntimeUpgrade(value: _20.MsgCancelRuntimeUpgrade): {
                        typeUrl: string;
                        value: _20.MsgCancelRuntimeUpgrade;
                    };
                };
                fromJSON: {
                    fundPool(value: any): {
                        typeUrl: string;
                        value: _20.MsgFundPool;
                    };
                    defundPool(value: any): {
                        typeUrl: string;
                        value: _20.MsgDefundPool;
                    };
                    createPool(value: any): {
                        typeUrl: string;
                        value: _20.MsgCreatePool;
                    };
                    updatePool(value: any): {
                        typeUrl: string;
                        value: _20.MsgUpdatePool;
                    };
                    disablePool(value: any): {
                        typeUrl: string;
                        value: _20.MsgDisablePool;
                    };
                    enablePool(value: any): {
                        typeUrl: string;
                        value: _20.MsgEnablePool;
                    };
                    scheduleRuntimeUpgrade(value: any): {
                        typeUrl: string;
                        value: _20.MsgScheduleRuntimeUpgrade;
                    };
                    cancelRuntimeUpgrade(value: any): {
                        typeUrl: string;
                        value: _20.MsgCancelRuntimeUpgrade;
                    };
                };
                fromPartial: {
                    fundPool(value: _20.MsgFundPool): {
                        typeUrl: string;
                        value: _20.MsgFundPool;
                    };
                    defundPool(value: _20.MsgDefundPool): {
                        typeUrl: string;
                        value: _20.MsgDefundPool;
                    };
                    createPool(value: _20.MsgCreatePool): {
                        typeUrl: string;
                        value: _20.MsgCreatePool;
                    };
                    updatePool(value: _20.MsgUpdatePool): {
                        typeUrl: string;
                        value: _20.MsgUpdatePool;
                    };
                    disablePool(value: _20.MsgDisablePool): {
                        typeUrl: string;
                        value: _20.MsgDisablePool;
                    };
                    enablePool(value: _20.MsgEnablePool): {
                        typeUrl: string;
                        value: _20.MsgEnablePool;
                    };
                    scheduleRuntimeUpgrade(value: _20.MsgScheduleRuntimeUpgrade): {
                        typeUrl: string;
                        value: _20.MsgScheduleRuntimeUpgrade;
                    };
                    cancelRuntimeUpgrade(value: _20.MsgCancelRuntimeUpgrade): {
                        typeUrl: string;
                        value: _20.MsgCancelRuntimeUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/kyve.pool.v1beta1.MsgFundPool": {
                    aminoType: string;
                    toAmino: ({ creator, id, amount }: _20.MsgFundPool) => {
                        creator: string;
                        id: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, id, amount }: {
                        creator: string;
                        id: string;
                        amount: string;
                    }) => _20.MsgFundPool;
                };
                "/kyve.pool.v1beta1.MsgDefundPool": {
                    aminoType: string;
                    toAmino: ({ creator, id, amount }: _20.MsgDefundPool) => {
                        creator: string;
                        id: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, id, amount }: {
                        creator: string;
                        id: string;
                        amount: string;
                    }) => _20.MsgDefundPool;
                };
                "/kyve.pool.v1beta1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: ({ authority, name, runtime, logo, config, startKey, uploadInterval, operatingCost, minDelegation, maxBundleSize, version, binaries, storageProviderId, compressionId }: _20.MsgCreatePool) => {
                        authority: string;
                        name: string;
                        runtime: string;
                        logo: string;
                        config: string;
                        start_key: string;
                        upload_interval: string;
                        operating_cost: string;
                        min_delegation: string;
                        max_bundle_size: string;
                        version: string;
                        binaries: string;
                        storage_provider_id: number;
                        compression_id: number;
                    };
                    fromAmino: ({ authority, name, runtime, logo, config, start_key, upload_interval, operating_cost, min_delegation, max_bundle_size, version, binaries, storage_provider_id, compression_id }: {
                        authority: string;
                        name: string;
                        runtime: string;
                        logo: string;
                        config: string;
                        start_key: string;
                        upload_interval: string;
                        operating_cost: string;
                        min_delegation: string;
                        max_bundle_size: string;
                        version: string;
                        binaries: string;
                        storage_provider_id: number;
                        compression_id: number;
                    }) => _20.MsgCreatePool;
                };
                "/kyve.pool.v1beta1.MsgUpdatePool": {
                    aminoType: string;
                    toAmino: ({ authority, id, payload }: _20.MsgUpdatePool) => {
                        authority: string;
                        id: string;
                        payload: string;
                    };
                    fromAmino: ({ authority, id, payload }: {
                        authority: string;
                        id: string;
                        payload: string;
                    }) => _20.MsgUpdatePool;
                };
                "/kyve.pool.v1beta1.MsgDisablePool": {
                    aminoType: string;
                    toAmino: ({ authority, id }: _20.MsgDisablePool) => {
                        authority: string;
                        id: string;
                    };
                    fromAmino: ({ authority, id }: {
                        authority: string;
                        id: string;
                    }) => _20.MsgDisablePool;
                };
                "/kyve.pool.v1beta1.MsgEnablePool": {
                    aminoType: string;
                    toAmino: ({ authority, id }: _20.MsgEnablePool) => {
                        authority: string;
                        id: string;
                    };
                    fromAmino: ({ authority, id }: {
                        authority: string;
                        id: string;
                    }) => _20.MsgEnablePool;
                };
                "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, runtime, version, scheduledAt, duration, binaries }: _20.MsgScheduleRuntimeUpgrade) => {
                        authority: string;
                        runtime: string;
                        version: string;
                        scheduled_at: string;
                        duration: string;
                        binaries: string;
                    };
                    fromAmino: ({ authority, runtime, version, scheduled_at, duration, binaries }: {
                        authority: string;
                        runtime: string;
                        version: string;
                        scheduled_at: string;
                        duration: string;
                        binaries: string;
                    }) => _20.MsgScheduleRuntimeUpgrade;
                };
                "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, runtime }: _20.MsgCancelRuntimeUpgrade) => {
                        authority: string;
                        runtime: string;
                    };
                    fromAmino: ({ authority, runtime }: {
                        authority: string;
                        runtime: string;
                    }) => _20.MsgCancelRuntimeUpgrade;
                };
            };
            MsgFundPool: {
                encode(message: _20.MsgFundPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgFundPool;
                fromPartial(object: Partial<_20.MsgFundPool>): _20.MsgFundPool;
            };
            MsgFundPoolResponse: {
                encode(_: _20.MsgFundPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgFundPoolResponse;
                fromPartial(_: Partial<_20.MsgFundPoolResponse>): _20.MsgFundPoolResponse;
            };
            MsgDefundPool: {
                encode(message: _20.MsgDefundPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgDefundPool;
                fromPartial(object: Partial<_20.MsgDefundPool>): _20.MsgDefundPool;
            };
            MsgDefundPoolResponse: {
                encode(_: _20.MsgDefundPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgDefundPoolResponse;
                fromPartial(_: Partial<_20.MsgDefundPoolResponse>): _20.MsgDefundPoolResponse;
            };
            MsgCreatePool: {
                encode(message: _20.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgCreatePool;
                fromPartial(object: Partial<_20.MsgCreatePool>): _20.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(_: _20.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgCreatePoolResponse;
                fromPartial(_: Partial<_20.MsgCreatePoolResponse>): _20.MsgCreatePoolResponse;
            };
            MsgUpdatePool: {
                encode(message: _20.MsgUpdatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgUpdatePool;
                fromPartial(object: Partial<_20.MsgUpdatePool>): _20.MsgUpdatePool;
            };
            MsgUpdatePoolResponse: {
                encode(_: _20.MsgUpdatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgUpdatePoolResponse;
                fromPartial(_: Partial<_20.MsgUpdatePoolResponse>): _20.MsgUpdatePoolResponse;
            };
            MsgDisablePool: {
                encode(message: _20.MsgDisablePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgDisablePool;
                fromPartial(object: Partial<_20.MsgDisablePool>): _20.MsgDisablePool;
            };
            MsgDisablePoolResponse: {
                encode(_: _20.MsgDisablePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgDisablePoolResponse;
                fromPartial(_: Partial<_20.MsgDisablePoolResponse>): _20.MsgDisablePoolResponse;
            };
            MsgEnablePool: {
                encode(message: _20.MsgEnablePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgEnablePool;
                fromPartial(object: Partial<_20.MsgEnablePool>): _20.MsgEnablePool;
            };
            MsgEnablePoolResponse: {
                encode(_: _20.MsgEnablePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgEnablePoolResponse;
                fromPartial(_: Partial<_20.MsgEnablePoolResponse>): _20.MsgEnablePoolResponse;
            };
            MsgScheduleRuntimeUpgrade: {
                encode(message: _20.MsgScheduleRuntimeUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgScheduleRuntimeUpgrade;
                fromPartial(object: Partial<_20.MsgScheduleRuntimeUpgrade>): _20.MsgScheduleRuntimeUpgrade;
            };
            MsgScheduleRuntimeUpgradeResponse: {
                encode(_: _20.MsgScheduleRuntimeUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgScheduleRuntimeUpgradeResponse;
                fromPartial(_: Partial<_20.MsgScheduleRuntimeUpgradeResponse>): _20.MsgScheduleRuntimeUpgradeResponse;
            };
            MsgCancelRuntimeUpgrade: {
                encode(message: _20.MsgCancelRuntimeUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgCancelRuntimeUpgrade;
                fromPartial(object: Partial<_20.MsgCancelRuntimeUpgrade>): _20.MsgCancelRuntimeUpgrade;
            };
            MsgCancelRuntimeUpgradeResponse: {
                encode(_: _20.MsgCancelRuntimeUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgCancelRuntimeUpgradeResponse;
                fromPartial(_: Partial<_20.MsgCancelRuntimeUpgradeResponse>): _20.MsgCancelRuntimeUpgradeResponse;
            };
            poolStatusFromJSON(object: any): _19.PoolStatus;
            poolStatusToJSON(object: _19.PoolStatus): string;
            PoolStatus: typeof _19.PoolStatus;
            PoolStatusSDKType: typeof _19.PoolStatus;
            Protocol: {
                encode(message: _19.Protocol, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Protocol;
                fromPartial(object: Partial<_19.Protocol>): _19.Protocol;
            };
            UpgradePlan: {
                encode(message: _19.UpgradePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.UpgradePlan;
                fromPartial(object: Partial<_19.UpgradePlan>): _19.UpgradePlan;
            };
            Funder: {
                encode(message: _19.Funder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Funder;
                fromPartial(object: Partial<_19.Funder>): _19.Funder;
            };
            Pool: {
                encode(message: _19.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Pool;
                fromPartial(object: Partial<_19.Pool>): _19.Pool;
            };
            GenesisState: {
                encode(message: _18.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
            };
            EventCreatePool: {
                encode(message: _17.EventCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventCreatePool;
                fromPartial(object: Partial<_17.EventCreatePool>): _17.EventCreatePool;
            };
            EventPoolEnabled: {
                encode(message: _17.EventPoolEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventPoolEnabled;
                fromPartial(object: Partial<_17.EventPoolEnabled>): _17.EventPoolEnabled;
            };
            EventPoolDisabled: {
                encode(message: _17.EventPoolDisabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventPoolDisabled;
                fromPartial(object: Partial<_17.EventPoolDisabled>): _17.EventPoolDisabled;
            };
            EventRuntimeUpgradeScheduled: {
                encode(message: _17.EventRuntimeUpgradeScheduled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventRuntimeUpgradeScheduled;
                fromPartial(object: Partial<_17.EventRuntimeUpgradeScheduled>): _17.EventRuntimeUpgradeScheduled;
            };
            EventRuntimeUpgradeCancelled: {
                encode(message: _17.EventRuntimeUpgradeCancelled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventRuntimeUpgradeCancelled;
                fromPartial(object: Partial<_17.EventRuntimeUpgradeCancelled>): _17.EventRuntimeUpgradeCancelled;
            };
            EventPoolUpdated: {
                encode(message: _17.EventPoolUpdated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventPoolUpdated;
                fromPartial(object: Partial<_17.EventPoolUpdated>): _17.EventPoolUpdated;
            };
            EventFundPool: {
                encode(message: _17.EventFundPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventFundPool;
                fromPartial(object: Partial<_17.EventFundPool>): _17.EventFundPool;
            };
            EventDefundPool: {
                encode(message: _17.EventDefundPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventDefundPool;
                fromPartial(object: Partial<_17.EventDefundPool>): _17.EventDefundPool;
            };
            EventPoolFundsSlashed: {
                encode(message: _17.EventPoolFundsSlashed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventPoolFundsSlashed;
                fromPartial(object: Partial<_17.EventPoolFundsSlashed>): _17.EventPoolFundsSlashed;
            };
            EventPoolOutOfFunds: {
                encode(message: _17.EventPoolOutOfFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventPoolOutOfFunds;
                fromPartial(object: Partial<_17.EventPoolOutOfFunds>): _17.EventPoolOutOfFunds;
            };
        };
    }
    namespace query {
        const v1beta1: {
            stakerStatusFromJSON(object: any): _27.StakerStatus;
            stakerStatusToJSON(object: _27.StakerStatus): string;
            StakerStatus: typeof _27.StakerStatus;
            StakerStatusSDKType: typeof _27.StakerStatus;
            QueryStakersRequest: {
                encode(message: _27.QueryStakersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryStakersRequest;
                fromPartial(object: Partial<_27.QueryStakersRequest>): _27.QueryStakersRequest;
            };
            QueryStakersResponse: {
                encode(message: _27.QueryStakersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryStakersResponse;
                fromPartial(object: Partial<_27.QueryStakersResponse>): _27.QueryStakersResponse;
            };
            QueryStakerRequest: {
                encode(message: _27.QueryStakerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryStakerRequest;
                fromPartial(object: Partial<_27.QueryStakerRequest>): _27.QueryStakerRequest;
            };
            QueryStakerResponse: {
                encode(message: _27.QueryStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryStakerResponse;
                fromPartial(object: Partial<_27.QueryStakerResponse>): _27.QueryStakerResponse;
            };
            QueryStakersByPoolRequest: {
                encode(message: _27.QueryStakersByPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryStakersByPoolRequest;
                fromPartial(object: Partial<_27.QueryStakersByPoolRequest>): _27.QueryStakersByPoolRequest;
            };
            QueryStakersByPoolResponse: {
                encode(message: _27.QueryStakersByPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryStakersByPoolResponse;
                fromPartial(object: Partial<_27.QueryStakersByPoolResponse>): _27.QueryStakersByPoolResponse;
            };
            StakerPoolResponse: {
                encode(message: _27.StakerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.StakerPoolResponse;
                fromPartial(object: Partial<_27.StakerPoolResponse>): _27.StakerPoolResponse;
            };
            QueryStakersByPoolCountRequest: {
                encode(message: _27.QueryStakersByPoolCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryStakersByPoolCountRequest;
                fromPartial(object: Partial<_27.QueryStakersByPoolCountRequest>): _27.QueryStakersByPoolCountRequest;
            };
            QueryStakersByPoolCountResponse: {
                encode(message: _27.QueryStakersByPoolCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryStakersByPoolCountResponse;
                fromPartial(object: Partial<_27.QueryStakersByPoolCountResponse>): _27.QueryStakersByPoolCountResponse;
            };
            BasicPool: {
                encode(message: _26.BasicPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.BasicPool;
                fromPartial(object: Partial<_26.BasicPool>): _26.BasicPool;
            };
            FullStaker: {
                encode(message: _26.FullStaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.FullStaker;
                fromPartial(object: Partial<_26.FullStaker>): _26.FullStaker;
            };
            StakerMetadata: {
                encode(message: _26.StakerMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.StakerMetadata;
                fromPartial(object: Partial<_26.StakerMetadata>): _26.StakerMetadata;
            };
            CommissionChangeEntry: {
                encode(message: _26.CommissionChangeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.CommissionChangeEntry;
                fromPartial(object: Partial<_26.CommissionChangeEntry>): _26.CommissionChangeEntry;
            };
            PoolMembership: {
                encode(message: _26.PoolMembership, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.PoolMembership;
                fromPartial(object: Partial<_26.PoolMembership>): _26.PoolMembership;
            };
            QueryPoolsRequest: {
                encode(message: _25.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryPoolsRequest;
                fromPartial(object: Partial<_25.QueryPoolsRequest>): _25.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _25.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryPoolsResponse;
                fromPartial(object: Partial<_25.QueryPoolsResponse>): _25.QueryPoolsResponse;
            };
            PoolResponse: {
                encode(message: _25.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.PoolResponse;
                fromPartial(object: Partial<_25.PoolResponse>): _25.PoolResponse;
            };
            QueryPoolRequest: {
                encode(message: _25.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryPoolRequest;
                fromPartial(object: Partial<_25.QueryPoolRequest>): _25.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _25.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryPoolResponse;
                fromPartial(object: Partial<_25.QueryPoolResponse>): _25.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.QueryParamsRequest;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryParamsResponse;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
            };
            QueryDelegatorRequest: {
                encode(message: _23.QueryDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryDelegatorRequest;
                fromPartial(object: Partial<_23.QueryDelegatorRequest>): _23.QueryDelegatorRequest;
            };
            QueryDelegatorResponse: {
                encode(message: _23.QueryDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryDelegatorResponse;
                fromPartial(object: Partial<_23.QueryDelegatorResponse>): _23.QueryDelegatorResponse;
            };
            StakerDelegatorResponse: {
                encode(message: _23.StakerDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.StakerDelegatorResponse;
                fromPartial(object: Partial<_23.StakerDelegatorResponse>): _23.StakerDelegatorResponse;
            };
            QueryDelegatorsByStakerRequest: {
                encode(message: _23.QueryDelegatorsByStakerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryDelegatorsByStakerRequest;
                fromPartial(object: Partial<_23.QueryDelegatorsByStakerRequest>): _23.QueryDelegatorsByStakerRequest;
            };
            QueryDelegatorsByStakerResponse: {
                encode(message: _23.QueryDelegatorsByStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryDelegatorsByStakerResponse;
                fromPartial(object: Partial<_23.QueryDelegatorsByStakerResponse>): _23.QueryDelegatorsByStakerResponse;
            };
            QueryStakersByDelegatorRequest: {
                encode(message: _23.QueryStakersByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryStakersByDelegatorRequest;
                fromPartial(object: Partial<_23.QueryStakersByDelegatorRequest>): _23.QueryStakersByDelegatorRequest;
            };
            QueryStakersByDelegatorResponse: {
                encode(message: _23.QueryStakersByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryStakersByDelegatorResponse;
                fromPartial(object: Partial<_23.QueryStakersByDelegatorResponse>): _23.QueryStakersByDelegatorResponse;
            };
            DelegationForStakerResponse: {
                encode(message: _23.DelegationForStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.DelegationForStakerResponse;
                fromPartial(object: Partial<_23.DelegationForStakerResponse>): _23.DelegationForStakerResponse;
            };
            FinalizedBundle: {
                encode(message: _22.FinalizedBundle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.FinalizedBundle;
                fromPartial(object: Partial<_22.FinalizedBundle>): _22.FinalizedBundle;
            };
            FinalizedAt: {
                encode(message: _22.FinalizedAt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.FinalizedAt;
                fromPartial(object: Partial<_22.FinalizedAt>): _22.FinalizedAt;
            };
            StakeSecurity: {
                encode(message: _22.StakeSecurity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.StakeSecurity;
                fromPartial(object: Partial<_22.StakeSecurity>): _22.StakeSecurity;
            };
            QueryFinalizedBundlesRequest: {
                encode(message: _22.QueryFinalizedBundlesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryFinalizedBundlesRequest;
                fromPartial(object: Partial<_22.QueryFinalizedBundlesRequest>): _22.QueryFinalizedBundlesRequest;
            };
            QueryFinalizedBundlesResponse: {
                encode(message: _22.QueryFinalizedBundlesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryFinalizedBundlesResponse;
                fromPartial(object: Partial<_22.QueryFinalizedBundlesResponse>): _22.QueryFinalizedBundlesResponse;
            };
            QueryFinalizedBundleRequest: {
                encode(message: _22.QueryFinalizedBundleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryFinalizedBundleRequest;
                fromPartial(object: Partial<_22.QueryFinalizedBundleRequest>): _22.QueryFinalizedBundleRequest;
            };
            QueryFinalizedBundleResponse: {
                encode(message: _22.QueryFinalizedBundleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryFinalizedBundleResponse;
                fromPartial(object: Partial<_22.QueryFinalizedBundleResponse>): _22.QueryFinalizedBundleResponse;
            };
            QueryCurrentVoteStatusRequest: {
                encode(message: _22.QueryCurrentVoteStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryCurrentVoteStatusRequest;
                fromPartial(object: Partial<_22.QueryCurrentVoteStatusRequest>): _22.QueryCurrentVoteStatusRequest;
            };
            QueryCurrentVoteStatusResponse: {
                encode(message: _22.QueryCurrentVoteStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryCurrentVoteStatusResponse;
                fromPartial(object: Partial<_22.QueryCurrentVoteStatusResponse>): _22.QueryCurrentVoteStatusResponse;
            };
            QueryCanValidateRequest: {
                encode(message: _22.QueryCanValidateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryCanValidateRequest;
                fromPartial(object: Partial<_22.QueryCanValidateRequest>): _22.QueryCanValidateRequest;
            };
            QueryCanValidateResponse: {
                encode(message: _22.QueryCanValidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryCanValidateResponse;
                fromPartial(object: Partial<_22.QueryCanValidateResponse>): _22.QueryCanValidateResponse;
            };
            QueryCanProposeRequest: {
                encode(message: _22.QueryCanProposeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryCanProposeRequest;
                fromPartial(object: Partial<_22.QueryCanProposeRequest>): _22.QueryCanProposeRequest;
            };
            QueryCanProposeResponse: {
                encode(message: _22.QueryCanProposeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryCanProposeResponse;
                fromPartial(object: Partial<_22.QueryCanProposeResponse>): _22.QueryCanProposeResponse;
            };
            QueryCanVoteRequest: {
                encode(message: _22.QueryCanVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryCanVoteRequest;
                fromPartial(object: Partial<_22.QueryCanVoteRequest>): _22.QueryCanVoteRequest;
            };
            QueryCanVoteResponse: {
                encode(message: _22.QueryCanVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.QueryCanVoteResponse;
                fromPartial(object: Partial<_22.QueryCanVoteResponse>): _22.QueryCanVoteResponse;
            };
            QueryAccountAssetsRequest: {
                encode(message: _21.QueryAccountAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAccountAssetsRequest;
                fromPartial(object: Partial<_21.QueryAccountAssetsRequest>): _21.QueryAccountAssetsRequest;
            };
            QueryAccountAssetsResponse: {
                encode(message: _21.QueryAccountAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAccountAssetsResponse;
                fromPartial(object: Partial<_21.QueryAccountAssetsResponse>): _21.QueryAccountAssetsResponse;
            };
            QueryAccountDelegationUnbondingsRequest: {
                encode(message: _21.QueryAccountDelegationUnbondingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAccountDelegationUnbondingsRequest;
                fromPartial(object: Partial<_21.QueryAccountDelegationUnbondingsRequest>): _21.QueryAccountDelegationUnbondingsRequest;
            };
            QueryAccountDelegationUnbondingsResponse: {
                encode(message: _21.QueryAccountDelegationUnbondingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAccountDelegationUnbondingsResponse;
                fromPartial(object: Partial<_21.QueryAccountDelegationUnbondingsResponse>): _21.QueryAccountDelegationUnbondingsResponse;
            };
            DelegationUnbonding: {
                encode(message: _21.DelegationUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.DelegationUnbonding;
                fromPartial(object: Partial<_21.DelegationUnbonding>): _21.DelegationUnbonding;
            };
            QueryAccountFundedListRequest: {
                encode(message: _21.QueryAccountFundedListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAccountFundedListRequest;
                fromPartial(object: Partial<_21.QueryAccountFundedListRequest>): _21.QueryAccountFundedListRequest;
            };
            QueryAccountFundedListResponse: {
                encode(message: _21.QueryAccountFundedListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAccountFundedListResponse;
                fromPartial(object: Partial<_21.QueryAccountFundedListResponse>): _21.QueryAccountFundedListResponse;
            };
            Funded: {
                encode(message: _21.Funded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Funded;
                fromPartial(object: Partial<_21.Funded>): _21.Funded;
            };
            QueryAccountRedelegationRequest: {
                encode(message: _21.QueryAccountRedelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAccountRedelegationRequest;
                fromPartial(object: Partial<_21.QueryAccountRedelegationRequest>): _21.QueryAccountRedelegationRequest;
            };
            QueryAccountRedelegationResponse: {
                encode(message: _21.QueryAccountRedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryAccountRedelegationResponse;
                fromPartial(object: Partial<_21.QueryAccountRedelegationResponse>): _21.QueryAccountRedelegationResponse;
            };
            RedelegationEntry: {
                encode(message: _21.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.RedelegationEntry;
                fromPartial(object: Partial<_21.RedelegationEntry>): _21.RedelegationEntry;
            };
        };
    }
    namespace stakers {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createStaker(value: _33.MsgCreateStaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateMetadata(value: _33.MsgUpdateMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateCommission(value: _33.MsgUpdateCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinPool(value: _33.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leavePool(value: _33.MsgLeavePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createStaker(value: _33.MsgCreateStaker): {
                        typeUrl: string;
                        value: _33.MsgCreateStaker;
                    };
                    updateMetadata(value: _33.MsgUpdateMetadata): {
                        typeUrl: string;
                        value: _33.MsgUpdateMetadata;
                    };
                    updateCommission(value: _33.MsgUpdateCommission): {
                        typeUrl: string;
                        value: _33.MsgUpdateCommission;
                    };
                    joinPool(value: _33.MsgJoinPool): {
                        typeUrl: string;
                        value: _33.MsgJoinPool;
                    };
                    leavePool(value: _33.MsgLeavePool): {
                        typeUrl: string;
                        value: _33.MsgLeavePool;
                    };
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: _33.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createStaker(value: any): {
                        typeUrl: string;
                        value: _33.MsgCreateStaker;
                    };
                    updateMetadata(value: any): {
                        typeUrl: string;
                        value: _33.MsgUpdateMetadata;
                    };
                    updateCommission(value: any): {
                        typeUrl: string;
                        value: _33.MsgUpdateCommission;
                    };
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _33.MsgJoinPool;
                    };
                    leavePool(value: any): {
                        typeUrl: string;
                        value: _33.MsgLeavePool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _33.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createStaker(value: _33.MsgCreateStaker): {
                        typeUrl: string;
                        value: _33.MsgCreateStaker;
                    };
                    updateMetadata(value: _33.MsgUpdateMetadata): {
                        typeUrl: string;
                        value: _33.MsgUpdateMetadata;
                    };
                    updateCommission(value: _33.MsgUpdateCommission): {
                        typeUrl: string;
                        value: _33.MsgUpdateCommission;
                    };
                    joinPool(value: _33.MsgJoinPool): {
                        typeUrl: string;
                        value: _33.MsgJoinPool;
                    };
                    leavePool(value: _33.MsgLeavePool): {
                        typeUrl: string;
                        value: _33.MsgLeavePool;
                    };
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: _33.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kyve.stakers.v1beta1.MsgCreateStaker": {
                    aminoType: string;
                    toAmino: ({ creator, amount, commission }: _33.MsgCreateStaker) => {
                        creator: string;
                        amount: string;
                        commission: string;
                    };
                    fromAmino: ({ creator, amount, commission }: {
                        creator: string;
                        amount: string;
                        commission: string;
                    }) => _33.MsgCreateStaker;
                };
                "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
                    aminoType: string;
                    toAmino: ({ creator, moniker, website, identity, securityContact, details }: _33.MsgUpdateMetadata) => {
                        creator: string;
                        moniker: string;
                        website: string;
                        identity: string;
                        security_contact: string;
                        details: string;
                    };
                    fromAmino: ({ creator, moniker, website, identity, security_contact, details }: {
                        creator: string;
                        moniker: string;
                        website: string;
                        identity: string;
                        security_contact: string;
                        details: string;
                    }) => _33.MsgUpdateMetadata;
                };
                "/kyve.stakers.v1beta1.MsgUpdateCommission": {
                    aminoType: string;
                    toAmino: ({ creator, commission }: _33.MsgUpdateCommission) => {
                        creator: string;
                        commission: string;
                    };
                    fromAmino: ({ creator, commission }: {
                        creator: string;
                        commission: string;
                    }) => _33.MsgUpdateCommission;
                };
                "/kyve.stakers.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ creator, poolId, valaddress, amount }: _33.MsgJoinPool) => {
                        creator: string;
                        pool_id: string;
                        valaddress: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, pool_id, valaddress, amount }: {
                        creator: string;
                        pool_id: string;
                        valaddress: string;
                        amount: string;
                    }) => _33.MsgJoinPool;
                };
                "/kyve.stakers.v1beta1.MsgLeavePool": {
                    aminoType: string;
                    toAmino: ({ creator, poolId }: _33.MsgLeavePool) => {
                        creator: string;
                        pool_id: string;
                    };
                    fromAmino: ({ creator, pool_id }: {
                        creator: string;
                        pool_id: string;
                    }) => _33.MsgLeavePool;
                };
                "/kyve.stakers.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, payload }: _33.MsgUpdateParams) => {
                        authority: string;
                        payload: string;
                    };
                    fromAmino: ({ authority, payload }: {
                        authority: string;
                        payload: string;
                    }) => _33.MsgUpdateParams;
                };
            };
            MsgCreateStaker: {
                encode(message: _33.MsgCreateStaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgCreateStaker;
                fromPartial(object: Partial<_33.MsgCreateStaker>): _33.MsgCreateStaker;
            };
            MsgCreateStakerResponse: {
                encode(_: _33.MsgCreateStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgCreateStakerResponse;
                fromPartial(_: Partial<_33.MsgCreateStakerResponse>): _33.MsgCreateStakerResponse;
            };
            MsgUpdateMetadata: {
                encode(message: _33.MsgUpdateMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgUpdateMetadata;
                fromPartial(object: Partial<_33.MsgUpdateMetadata>): _33.MsgUpdateMetadata;
            };
            MsgUpdateMetadataResponse: {
                encode(_: _33.MsgUpdateMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgUpdateMetadataResponse;
                fromPartial(_: Partial<_33.MsgUpdateMetadataResponse>): _33.MsgUpdateMetadataResponse;
            };
            MsgUpdateCommission: {
                encode(message: _33.MsgUpdateCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgUpdateCommission;
                fromPartial(object: Partial<_33.MsgUpdateCommission>): _33.MsgUpdateCommission;
            };
            MsgUpdateCommissionResponse: {
                encode(_: _33.MsgUpdateCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgUpdateCommissionResponse;
                fromPartial(_: Partial<_33.MsgUpdateCommissionResponse>): _33.MsgUpdateCommissionResponse;
            };
            MsgJoinPool: {
                encode(message: _33.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgJoinPool;
                fromPartial(object: Partial<_33.MsgJoinPool>): _33.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _33.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgJoinPoolResponse;
                fromPartial(_: Partial<_33.MsgJoinPoolResponse>): _33.MsgJoinPoolResponse;
            };
            MsgLeavePool: {
                encode(message: _33.MsgLeavePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgLeavePool;
                fromPartial(object: Partial<_33.MsgLeavePool>): _33.MsgLeavePool;
            };
            MsgLeavePoolResponse: {
                encode(_: _33.MsgLeavePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgLeavePoolResponse;
                fromPartial(_: Partial<_33.MsgLeavePoolResponse>): _33.MsgLeavePoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _33.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgUpdateParams;
                fromPartial(object: Partial<_33.MsgUpdateParams>): _33.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _33.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_33.MsgUpdateParamsResponse>): _33.MsgUpdateParamsResponse;
            };
            Staker: {
                encode(message: _32.Staker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.Staker;
                fromPartial(object: Partial<_32.Staker>): _32.Staker;
            };
            Valaccount: {
                encode(message: _32.Valaccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.Valaccount;
                fromPartial(object: Partial<_32.Valaccount>): _32.Valaccount;
            };
            CommissionChangeEntry: {
                encode(message: _32.CommissionChangeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.CommissionChangeEntry;
                fromPartial(object: Partial<_32.CommissionChangeEntry>): _32.CommissionChangeEntry;
            };
            LeavePoolEntry: {
                encode(message: _32.LeavePoolEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.LeavePoolEntry;
                fromPartial(object: Partial<_32.LeavePoolEntry>): _32.LeavePoolEntry;
            };
            QueueState: {
                encode(message: _32.QueueState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueueState;
                fromPartial(object: Partial<_32.QueueState>): _32.QueueState;
            };
            QueryParamsRequest: {
                encode(_: _31.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _31.QueryParamsRequest;
                fromPartial(_: Partial<_31.QueryParamsRequest>): _31.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _31.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.QueryParamsResponse;
                fromPartial(object: Partial<_31.QueryParamsResponse>): _31.QueryParamsResponse;
            };
            Params: {
                encode(message: _30.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
            };
            EventUpdateParams: {
                encode(message: _28.EventUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventUpdateParams;
                fromPartial(object: Partial<_28.EventUpdateParams>): _28.EventUpdateParams;
            };
            EventCreateStaker: {
                encode(message: _28.EventCreateStaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventCreateStaker;
                fromPartial(object: Partial<_28.EventCreateStaker>): _28.EventCreateStaker;
            };
            EventUpdateMetadata: {
                encode(message: _28.EventUpdateMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventUpdateMetadata;
                fromPartial(object: Partial<_28.EventUpdateMetadata>): _28.EventUpdateMetadata;
            };
            EventUpdateCommission: {
                encode(message: _28.EventUpdateCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventUpdateCommission;
                fromPartial(object: Partial<_28.EventUpdateCommission>): _28.EventUpdateCommission;
            };
            EventJoinPool: {
                encode(message: _28.EventJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventJoinPool;
                fromPartial(object: Partial<_28.EventJoinPool>): _28.EventJoinPool;
            };
            EventLeavePool: {
                encode(message: _28.EventLeavePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.EventLeavePool;
                fromPartial(object: Partial<_28.EventLeavePool>): _28.EventLeavePool;
            };
        };
    }
    namespace team {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                teamInfo(request?: _36.QueryTeamInfoRequest): Promise<_36.QueryTeamInfoResponse>;
                teamVestingAccounts(request?: _36.QueryTeamVestingAccountsRequest): Promise<_36.QueryTeamVestingAccountsResponse>;
                teamVestingAccount(request: _36.QueryTeamVestingAccountRequest): Promise<_36.QueryTeamVestingAccountResponse>;
                teamVestingStatus(request: _36.QueryTeamVestingStatusRequest): Promise<_36.QueryTeamVestingStatusResponse>;
                teamVestingStatusByTime(request: _36.QueryTeamVestingStatusByTimeRequest): Promise<_36.QueryTeamVestingStatusByTimeResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimUnlocked(value: _38.MsgClaimUnlocked): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _38.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createTeamVestingAccount(value: _38.MsgCreateTeamVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAuthorityRewards(value: _38.MsgClaimAuthorityRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAccountRewards(value: _38.MsgClaimAccountRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimUnlocked(value: _38.MsgClaimUnlocked): {
                        typeUrl: string;
                        value: _38.MsgClaimUnlocked;
                    };
                    clawback(value: _38.MsgClawback): {
                        typeUrl: string;
                        value: _38.MsgClawback;
                    };
                    createTeamVestingAccount(value: _38.MsgCreateTeamVestingAccount): {
                        typeUrl: string;
                        value: _38.MsgCreateTeamVestingAccount;
                    };
                    claimAuthorityRewards(value: _38.MsgClaimAuthorityRewards): {
                        typeUrl: string;
                        value: _38.MsgClaimAuthorityRewards;
                    };
                    claimAccountRewards(value: _38.MsgClaimAccountRewards): {
                        typeUrl: string;
                        value: _38.MsgClaimAccountRewards;
                    };
                };
                fromJSON: {
                    claimUnlocked(value: any): {
                        typeUrl: string;
                        value: _38.MsgClaimUnlocked;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _38.MsgClawback;
                    };
                    createTeamVestingAccount(value: any): {
                        typeUrl: string;
                        value: _38.MsgCreateTeamVestingAccount;
                    };
                    claimAuthorityRewards(value: any): {
                        typeUrl: string;
                        value: _38.MsgClaimAuthorityRewards;
                    };
                    claimAccountRewards(value: any): {
                        typeUrl: string;
                        value: _38.MsgClaimAccountRewards;
                    };
                };
                fromPartial: {
                    claimUnlocked(value: _38.MsgClaimUnlocked): {
                        typeUrl: string;
                        value: _38.MsgClaimUnlocked;
                    };
                    clawback(value: _38.MsgClawback): {
                        typeUrl: string;
                        value: _38.MsgClawback;
                    };
                    createTeamVestingAccount(value: _38.MsgCreateTeamVestingAccount): {
                        typeUrl: string;
                        value: _38.MsgCreateTeamVestingAccount;
                    };
                    claimAuthorityRewards(value: _38.MsgClaimAuthorityRewards): {
                        typeUrl: string;
                        value: _38.MsgClaimAuthorityRewards;
                    };
                    claimAccountRewards(value: _38.MsgClaimAccountRewards): {
                        typeUrl: string;
                        value: _38.MsgClaimAccountRewards;
                    };
                };
            };
            AminoConverter: {
                "/kyve.team.v1beta1.MsgClaimUnlocked": {
                    aminoType: string;
                    toAmino: ({ authority, id, amount, recipient }: _38.MsgClaimUnlocked) => {
                        authority: string;
                        id: string;
                        amount: string;
                        recipient: string;
                    };
                    fromAmino: ({ authority, id, amount, recipient }: {
                        authority: string;
                        id: string;
                        amount: string;
                        recipient: string;
                    }) => _38.MsgClaimUnlocked;
                };
                "/kyve.team.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: ({ authority, id, clawback }: _38.MsgClawback) => {
                        authority: string;
                        id: string;
                        clawback: string;
                    };
                    fromAmino: ({ authority, id, clawback }: {
                        authority: string;
                        id: string;
                        clawback: string;
                    }) => _38.MsgClawback;
                };
                "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
                    aminoType: string;
                    toAmino: ({ authority, totalAllocation, commencement }: _38.MsgCreateTeamVestingAccount) => {
                        authority: string;
                        total_allocation: string;
                        commencement: string;
                    };
                    fromAmino: ({ authority, total_allocation, commencement }: {
                        authority: string;
                        total_allocation: string;
                        commencement: string;
                    }) => _38.MsgCreateTeamVestingAccount;
                };
                "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
                    aminoType: string;
                    toAmino: ({ authority, amount, recipient }: _38.MsgClaimAuthorityRewards) => {
                        authority: string;
                        amount: string;
                        recipient: string;
                    };
                    fromAmino: ({ authority, amount, recipient }: {
                        authority: string;
                        amount: string;
                        recipient: string;
                    }) => _38.MsgClaimAuthorityRewards;
                };
                "/kyve.team.v1beta1.MsgClaimAccountRewards": {
                    aminoType: string;
                    toAmino: ({ authority, id, amount, recipient }: _38.MsgClaimAccountRewards) => {
                        authority: string;
                        id: string;
                        amount: string;
                        recipient: string;
                    };
                    fromAmino: ({ authority, id, amount, recipient }: {
                        authority: string;
                        id: string;
                        amount: string;
                        recipient: string;
                    }) => _38.MsgClaimAccountRewards;
                };
            };
            MsgClaimUnlocked: {
                encode(message: _38.MsgClaimUnlocked, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.MsgClaimUnlocked;
                fromPartial(object: Partial<_38.MsgClaimUnlocked>): _38.MsgClaimUnlocked;
            };
            MsgClaimUnlockedResponse: {
                encode(_: _38.MsgClaimUnlockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _38.MsgClaimUnlockedResponse;
                fromPartial(_: Partial<_38.MsgClaimUnlockedResponse>): _38.MsgClaimUnlockedResponse;
            };
            MsgClaimAuthorityRewards: {
                encode(message: _38.MsgClaimAuthorityRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.MsgClaimAuthorityRewards;
                fromPartial(object: Partial<_38.MsgClaimAuthorityRewards>): _38.MsgClaimAuthorityRewards;
            };
            MsgClaimAuthorityRewardsResponse: {
                encode(_: _38.MsgClaimAuthorityRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _38.MsgClaimAuthorityRewardsResponse;
                fromPartial(_: Partial<_38.MsgClaimAuthorityRewardsResponse>): _38.MsgClaimAuthorityRewardsResponse;
            };
            MsgClaimAccountRewards: {
                encode(message: _38.MsgClaimAccountRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.MsgClaimAccountRewards;
                fromPartial(object: Partial<_38.MsgClaimAccountRewards>): _38.MsgClaimAccountRewards;
            };
            MsgClaimAccountRewardsResponse: {
                encode(_: _38.MsgClaimAccountRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _38.MsgClaimAccountRewardsResponse;
                fromPartial(_: Partial<_38.MsgClaimAccountRewardsResponse>): _38.MsgClaimAccountRewardsResponse;
            };
            MsgClawback: {
                encode(message: _38.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.MsgClawback;
                fromPartial(object: Partial<_38.MsgClawback>): _38.MsgClawback;
            };
            MsgClawbackResponse: {
                encode(_: _38.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _38.MsgClawbackResponse;
                fromPartial(_: Partial<_38.MsgClawbackResponse>): _38.MsgClawbackResponse;
            };
            MsgCreateTeamVestingAccount: {
                encode(message: _38.MsgCreateTeamVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.MsgCreateTeamVestingAccount;
                fromPartial(object: Partial<_38.MsgCreateTeamVestingAccount>): _38.MsgCreateTeamVestingAccount;
            };
            MsgCreateTeamVestingAccountResponse: {
                encode(_: _38.MsgCreateTeamVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _38.MsgCreateTeamVestingAccountResponse;
                fromPartial(_: Partial<_38.MsgCreateTeamVestingAccountResponse>): _38.MsgCreateTeamVestingAccountResponse;
            };
            Authority: {
                encode(message: _37.Authority, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.Authority;
                fromPartial(object: Partial<_37.Authority>): _37.Authority;
            };
            TeamVestingAccount: {
                encode(message: _37.TeamVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.TeamVestingAccount;
                fromPartial(object: Partial<_37.TeamVestingAccount>): _37.TeamVestingAccount;
            };
            QueryTeamInfoRequest: {
                encode(_: _36.QueryTeamInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _36.QueryTeamInfoRequest;
                fromPartial(_: Partial<_36.QueryTeamInfoRequest>): _36.QueryTeamInfoRequest;
            };
            QueryTeamInfoResponse: {
                encode(message: _36.QueryTeamInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryTeamInfoResponse;
                fromPartial(object: Partial<_36.QueryTeamInfoResponse>): _36.QueryTeamInfoResponse;
            };
            QueryTeamVestingAccountsRequest: {
                encode(_: _36.QueryTeamVestingAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _36.QueryTeamVestingAccountsRequest;
                fromPartial(_: Partial<_36.QueryTeamVestingAccountsRequest>): _36.QueryTeamVestingAccountsRequest;
            };
            QueryTeamVestingAccountsResponse: {
                encode(message: _36.QueryTeamVestingAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryTeamVestingAccountsResponse;
                fromPartial(object: Partial<_36.QueryTeamVestingAccountsResponse>): _36.QueryTeamVestingAccountsResponse;
            };
            QueryTeamVestingAccountRequest: {
                encode(message: _36.QueryTeamVestingAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryTeamVestingAccountRequest;
                fromPartial(object: Partial<_36.QueryTeamVestingAccountRequest>): _36.QueryTeamVestingAccountRequest;
            };
            QueryTeamVestingAccountResponse: {
                encode(message: _36.QueryTeamVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryTeamVestingAccountResponse;
                fromPartial(object: Partial<_36.QueryTeamVestingAccountResponse>): _36.QueryTeamVestingAccountResponse;
            };
            QueryTeamVestingStatusRequest: {
                encode(message: _36.QueryTeamVestingStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryTeamVestingStatusRequest;
                fromPartial(object: Partial<_36.QueryTeamVestingStatusRequest>): _36.QueryTeamVestingStatusRequest;
            };
            QueryTeamVestingStatusResponse: {
                encode(message: _36.QueryTeamVestingStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryTeamVestingStatusResponse;
                fromPartial(object: Partial<_36.QueryTeamVestingStatusResponse>): _36.QueryTeamVestingStatusResponse;
            };
            QueryTeamVestingStatusByTimeRequest: {
                encode(message: _36.QueryTeamVestingStatusByTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryTeamVestingStatusByTimeRequest;
                fromPartial(object: Partial<_36.QueryTeamVestingStatusByTimeRequest>): _36.QueryTeamVestingStatusByTimeRequest;
            };
            QueryTeamVestingStatusByTimeResponse: {
                encode(message: _36.QueryTeamVestingStatusByTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryTeamVestingStatusByTimeResponse;
                fromPartial(object: Partial<_36.QueryTeamVestingStatusByTimeResponse>): _36.QueryTeamVestingStatusByTimeResponse;
            };
            QueryVestingStatus: {
                encode(message: _36.QueryVestingStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryVestingStatus;
                fromPartial(object: Partial<_36.QueryVestingStatus>): _36.QueryVestingStatus;
            };
            QueryVestingPlan: {
                encode(message: _36.QueryVestingPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.QueryVestingPlan;
                fromPartial(object: Partial<_36.QueryVestingPlan>): _36.QueryVestingPlan;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
            };
            EventCreateTeamVestingAccount: {
                encode(message: _34.EventCreateTeamVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.EventCreateTeamVestingAccount;
                fromPartial(object: Partial<_34.EventCreateTeamVestingAccount>): _34.EventCreateTeamVestingAccount;
            };
            EventClawback: {
                encode(message: _34.EventClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.EventClawback;
                fromPartial(object: Partial<_34.EventClawback>): _34.EventClawback;
            };
            EventClaimedUnlocked: {
                encode(message: _34.EventClaimedUnlocked, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.EventClaimedUnlocked;
                fromPartial(object: Partial<_34.EventClaimedUnlocked>): _34.EventClaimedUnlocked;
            };
            EventClaimInflationRewards: {
                encode(message: _34.EventClaimInflationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.EventClaimInflationRewards;
                fromPartial(object: Partial<_34.EventClaimInflationRewards>): _34.EventClaimInflationRewards;
            };
            EventClaimAuthorityRewards: {
                encode(message: _34.EventClaimAuthorityRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.EventClaimAuthorityRewards;
                fromPartial(object: Partial<_34.EventClaimAuthorityRewards>): _34.EventClaimAuthorityRewards;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            kyve: {
                bundles: {
                    v1beta1: _170.MsgClientImpl;
                };
                delegation: {
                    v1beta1: _171.MsgClientImpl;
                };
                global: {
                    v1beta1: _172.MsgClientImpl;
                };
                pool: {
                    v1beta1: _173.MsgClientImpl;
                };
                stakers: {
                    v1beta1: _174.MsgClientImpl;
                };
                team: {
                    v1beta1: _175.MsgClientImpl;
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
                stakers: {
                    v1beta1: {
                        params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                    };
                };
                team: {
                    v1beta1: {
                        teamInfo(request?: _36.QueryTeamInfoRequest): Promise<_36.QueryTeamInfoResponse>;
                        teamVestingAccounts(request?: _36.QueryTeamVestingAccountsRequest): Promise<_36.QueryTeamVestingAccountsResponse>;
                        teamVestingAccount(request: _36.QueryTeamVestingAccountRequest): Promise<_36.QueryTeamVestingAccountResponse>;
                        teamVestingStatus(request: _36.QueryTeamVestingStatusRequest): Promise<_36.QueryTeamVestingStatusResponse>;
                        teamVestingStatusByTime(request: _36.QueryTeamVestingStatusByTimeRequest): Promise<_36.QueryTeamVestingStatusByTimeResponse>;
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
    };
}
