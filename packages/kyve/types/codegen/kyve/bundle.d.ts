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
import * as _167 from "./bundles/v1beta1/query.lcd";
import * as _168 from "./delegation/v1beta1/query.lcd";
import * as _169 from "./global/v1beta1/query.lcd";
import * as _170 from "./pool/v1beta1/query.lcd";
import * as _171 from "./stakers/v1beta1/query.lcd";
import * as _172 from "./team/v1beta1/query.lcd";
import * as _173 from "./bundles/v1beta1/query.rpc.Query";
import * as _174 from "./delegation/v1beta1/query.rpc.Query";
import * as _175 from "./global/v1beta1/query.rpc.Query";
import * as _176 from "./pool/v1beta1/query.rpc.Query";
import * as _177 from "./stakers/v1beta1/query.rpc.Query";
import * as _178 from "./team/v1beta1/query.rpc.Query";
import * as _179 from "./bundles/v1beta1/tx.rpc.msg";
import * as _180 from "./delegation/v1beta1/tx.rpc.msg";
import * as _181 from "./global/v1beta1/tx.rpc.msg";
import * as _182 from "./pool/v1beta1/tx.rpc.msg";
import * as _183 from "./stakers/v1beta1/tx.rpc.msg";
import * as _184 from "./team/v1beta1/tx.rpc.msg";
export declare namespace kyve {
    namespace bundles {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
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
            RoundRobinSingleValidatorProgress: {
                encode(message: _0.RoundRobinSingleValidatorProgress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.RoundRobinSingleValidatorProgress;
                fromPartial(object: Partial<_0.RoundRobinSingleValidatorProgress>): _0.RoundRobinSingleValidatorProgress;
            };
            RoundRobinProgress: {
                encode(message: _0.RoundRobinProgress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.RoundRobinProgress;
                fromPartial(object: Partial<_0.RoundRobinProgress>): _0.RoundRobinProgress;
            };
        };
    }
    namespace delegation {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
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
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
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
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
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
                    toAmino: ({ creator, id, amount }: _22.MsgFundPool) => {
                        creator: string;
                        id: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, id, amount }: {
                        creator: string;
                        id: string;
                        amount: string;
                    }) => _22.MsgFundPool;
                };
                "/kyve.pool.v1beta1.MsgDefundPool": {
                    aminoType: string;
                    toAmino: ({ creator, id, amount }: _22.MsgDefundPool) => {
                        creator: string;
                        id: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, id, amount }: {
                        creator: string;
                        id: string;
                        amount: string;
                    }) => _22.MsgDefundPool;
                };
                "/kyve.pool.v1beta1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: ({ authority, name, runtime, logo, config, startKey, uploadInterval, operatingCost, minDelegation, maxBundleSize, version, binaries, storageProviderId, compressionId }: _22.MsgCreatePool) => {
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
                    }) => _22.MsgCreatePool;
                };
                "/kyve.pool.v1beta1.MsgUpdatePool": {
                    aminoType: string;
                    toAmino: ({ authority, id, payload }: _22.MsgUpdatePool) => {
                        authority: string;
                        id: string;
                        payload: string;
                    };
                    fromAmino: ({ authority, id, payload }: {
                        authority: string;
                        id: string;
                        payload: string;
                    }) => _22.MsgUpdatePool;
                };
                "/kyve.pool.v1beta1.MsgDisablePool": {
                    aminoType: string;
                    toAmino: ({ authority, id }: _22.MsgDisablePool) => {
                        authority: string;
                        id: string;
                    };
                    fromAmino: ({ authority, id }: {
                        authority: string;
                        id: string;
                    }) => _22.MsgDisablePool;
                };
                "/kyve.pool.v1beta1.MsgEnablePool": {
                    aminoType: string;
                    toAmino: ({ authority, id }: _22.MsgEnablePool) => {
                        authority: string;
                        id: string;
                    };
                    fromAmino: ({ authority, id }: {
                        authority: string;
                        id: string;
                    }) => _22.MsgEnablePool;
                };
                "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, runtime, version, scheduledAt, duration, binaries }: _22.MsgScheduleRuntimeUpgrade) => {
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
                    }) => _22.MsgScheduleRuntimeUpgrade;
                };
                "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, runtime }: _22.MsgCancelRuntimeUpgrade) => {
                        authority: string;
                        runtime: string;
                    };
                    fromAmino: ({ authority, runtime }: {
                        authority: string;
                        runtime: string;
                    }) => _22.MsgCancelRuntimeUpgrade;
                };
                "/kyve.pool.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, payload }: _22.MsgUpdateParams) => {
                        authority: string;
                        payload: string;
                    };
                    fromAmino: ({ authority, payload }: {
                        authority: string;
                        payload: string;
                    }) => _22.MsgUpdateParams;
                };
            };
            MsgFundPool: {
                encode(message: _22.MsgFundPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgFundPool;
                fromPartial(object: Partial<_22.MsgFundPool>): _22.MsgFundPool;
            };
            MsgFundPoolResponse: {
                encode(_: _22.MsgFundPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgFundPoolResponse;
                fromPartial(_: Partial<_22.MsgFundPoolResponse>): _22.MsgFundPoolResponse;
            };
            MsgDefundPool: {
                encode(message: _22.MsgDefundPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgDefundPool;
                fromPartial(object: Partial<_22.MsgDefundPool>): _22.MsgDefundPool;
            };
            MsgDefundPoolResponse: {
                encode(_: _22.MsgDefundPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgDefundPoolResponse;
                fromPartial(_: Partial<_22.MsgDefundPoolResponse>): _22.MsgDefundPoolResponse;
            };
            MsgCreatePool: {
                encode(message: _22.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgCreatePool;
                fromPartial(object: Partial<_22.MsgCreatePool>): _22.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(_: _22.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgCreatePoolResponse;
                fromPartial(_: Partial<_22.MsgCreatePoolResponse>): _22.MsgCreatePoolResponse;
            };
            MsgUpdatePool: {
                encode(message: _22.MsgUpdatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgUpdatePool;
                fromPartial(object: Partial<_22.MsgUpdatePool>): _22.MsgUpdatePool;
            };
            MsgUpdatePoolResponse: {
                encode(_: _22.MsgUpdatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgUpdatePoolResponse;
                fromPartial(_: Partial<_22.MsgUpdatePoolResponse>): _22.MsgUpdatePoolResponse;
            };
            MsgDisablePool: {
                encode(message: _22.MsgDisablePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgDisablePool;
                fromPartial(object: Partial<_22.MsgDisablePool>): _22.MsgDisablePool;
            };
            MsgDisablePoolResponse: {
                encode(_: _22.MsgDisablePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgDisablePoolResponse;
                fromPartial(_: Partial<_22.MsgDisablePoolResponse>): _22.MsgDisablePoolResponse;
            };
            MsgEnablePool: {
                encode(message: _22.MsgEnablePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgEnablePool;
                fromPartial(object: Partial<_22.MsgEnablePool>): _22.MsgEnablePool;
            };
            MsgEnablePoolResponse: {
                encode(_: _22.MsgEnablePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgEnablePoolResponse;
                fromPartial(_: Partial<_22.MsgEnablePoolResponse>): _22.MsgEnablePoolResponse;
            };
            MsgScheduleRuntimeUpgrade: {
                encode(message: _22.MsgScheduleRuntimeUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgScheduleRuntimeUpgrade;
                fromPartial(object: Partial<_22.MsgScheduleRuntimeUpgrade>): _22.MsgScheduleRuntimeUpgrade;
            };
            MsgScheduleRuntimeUpgradeResponse: {
                encode(_: _22.MsgScheduleRuntimeUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgScheduleRuntimeUpgradeResponse;
                fromPartial(_: Partial<_22.MsgScheduleRuntimeUpgradeResponse>): _22.MsgScheduleRuntimeUpgradeResponse;
            };
            MsgCancelRuntimeUpgrade: {
                encode(message: _22.MsgCancelRuntimeUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgCancelRuntimeUpgrade;
                fromPartial(object: Partial<_22.MsgCancelRuntimeUpgrade>): _22.MsgCancelRuntimeUpgrade;
            };
            MsgCancelRuntimeUpgradeResponse: {
                encode(_: _22.MsgCancelRuntimeUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgCancelRuntimeUpgradeResponse;
                fromPartial(_: Partial<_22.MsgCancelRuntimeUpgradeResponse>): _22.MsgCancelRuntimeUpgradeResponse;
            };
            MsgUpdateParams: {
                encode(message: _22.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgUpdateParams;
                fromPartial(object: Partial<_22.MsgUpdateParams>): _22.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _22.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_22.MsgUpdateParamsResponse>): _22.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _21.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _21.QueryParamsRequest;
                fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _21.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryParamsResponse;
                fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
            };
            poolStatusFromJSON(object: any): _20.PoolStatus;
            poolStatusToJSON(object: _20.PoolStatus): string;
            PoolStatus: typeof _20.PoolStatus;
            PoolStatusSDKType: typeof _20.PoolStatus;
            Protocol: {
                encode(message: _20.Protocol, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Protocol;
                fromPartial(object: Partial<_20.Protocol>): _20.Protocol;
            };
            UpgradePlan: {
                encode(message: _20.UpgradePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.UpgradePlan;
                fromPartial(object: Partial<_20.UpgradePlan>): _20.UpgradePlan;
            };
            Funder: {
                encode(message: _20.Funder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Funder;
                fromPartial(object: Partial<_20.Funder>): _20.Funder;
            };
            Pool: {
                encode(message: _20.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Pool;
                fromPartial(object: Partial<_20.Pool>): _20.Pool;
            };
            Params: {
                encode(message: _19.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Params;
                fromPartial(object: Partial<_19.Params>): _19.Params;
            };
            GenesisState: {
                encode(message: _18.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
            };
            EventUpdateParams: {
                encode(message: _17.EventUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.EventUpdateParams;
                fromPartial(object: Partial<_17.EventUpdateParams>): _17.EventUpdateParams;
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
            stakerStatusFromJSON(object: any): _29.StakerStatus;
            stakerStatusToJSON(object: _29.StakerStatus): string;
            StakerStatus: typeof _29.StakerStatus;
            StakerStatusSDKType: typeof _29.StakerStatus;
            QueryStakersRequest: {
                encode(message: _29.QueryStakersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryStakersRequest;
                fromPartial(object: Partial<_29.QueryStakersRequest>): _29.QueryStakersRequest;
            };
            QueryStakersResponse: {
                encode(message: _29.QueryStakersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryStakersResponse;
                fromPartial(object: Partial<_29.QueryStakersResponse>): _29.QueryStakersResponse;
            };
            QueryStakerRequest: {
                encode(message: _29.QueryStakerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryStakerRequest;
                fromPartial(object: Partial<_29.QueryStakerRequest>): _29.QueryStakerRequest;
            };
            QueryStakerResponse: {
                encode(message: _29.QueryStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryStakerResponse;
                fromPartial(object: Partial<_29.QueryStakerResponse>): _29.QueryStakerResponse;
            };
            QueryStakersByPoolRequest: {
                encode(message: _29.QueryStakersByPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryStakersByPoolRequest;
                fromPartial(object: Partial<_29.QueryStakersByPoolRequest>): _29.QueryStakersByPoolRequest;
            };
            QueryStakersByPoolResponse: {
                encode(message: _29.QueryStakersByPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryStakersByPoolResponse;
                fromPartial(object: Partial<_29.QueryStakersByPoolResponse>): _29.QueryStakersByPoolResponse;
            };
            StakerPoolResponse: {
                encode(message: _29.StakerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.StakerPoolResponse;
                fromPartial(object: Partial<_29.StakerPoolResponse>): _29.StakerPoolResponse;
            };
            QueryStakersByPoolCountRequest: {
                encode(message: _29.QueryStakersByPoolCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryStakersByPoolCountRequest;
                fromPartial(object: Partial<_29.QueryStakersByPoolCountRequest>): _29.QueryStakersByPoolCountRequest;
            };
            QueryStakersByPoolCountResponse: {
                encode(message: _29.QueryStakersByPoolCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.QueryStakersByPoolCountResponse;
                fromPartial(object: Partial<_29.QueryStakersByPoolCountResponse>): _29.QueryStakersByPoolCountResponse;
            };
            BasicPool: {
                encode(message: _28.BasicPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.BasicPool;
                fromPartial(object: Partial<_28.BasicPool>): _28.BasicPool;
            };
            FullStaker: {
                encode(message: _28.FullStaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.FullStaker;
                fromPartial(object: Partial<_28.FullStaker>): _28.FullStaker;
            };
            StakerMetadata: {
                encode(message: _28.StakerMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.StakerMetadata;
                fromPartial(object: Partial<_28.StakerMetadata>): _28.StakerMetadata;
            };
            CommissionChangeEntry: {
                encode(message: _28.CommissionChangeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.CommissionChangeEntry;
                fromPartial(object: Partial<_28.CommissionChangeEntry>): _28.CommissionChangeEntry;
            };
            PoolMembership: {
                encode(message: _28.PoolMembership, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.PoolMembership;
                fromPartial(object: Partial<_28.PoolMembership>): _28.PoolMembership;
            };
            QueryPoolsRequest: {
                encode(message: _27.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryPoolsRequest;
                fromPartial(object: Partial<_27.QueryPoolsRequest>): _27.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _27.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryPoolsResponse;
                fromPartial(object: Partial<_27.QueryPoolsResponse>): _27.QueryPoolsResponse;
            };
            PoolResponse: {
                encode(message: _27.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.PoolResponse;
                fromPartial(object: Partial<_27.PoolResponse>): _27.PoolResponse;
            };
            QueryPoolRequest: {
                encode(message: _27.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryPoolRequest;
                fromPartial(object: Partial<_27.QueryPoolRequest>): _27.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _27.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryPoolResponse;
                fromPartial(object: Partial<_27.QueryPoolResponse>): _27.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _26.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _26.QueryParamsRequest;
                fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _26.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.QueryParamsResponse;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
            };
            QueryDelegatorRequest: {
                encode(message: _25.QueryDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryDelegatorRequest;
                fromPartial(object: Partial<_25.QueryDelegatorRequest>): _25.QueryDelegatorRequest;
            };
            QueryDelegatorResponse: {
                encode(message: _25.QueryDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryDelegatorResponse;
                fromPartial(object: Partial<_25.QueryDelegatorResponse>): _25.QueryDelegatorResponse;
            };
            StakerDelegatorResponse: {
                encode(message: _25.StakerDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.StakerDelegatorResponse;
                fromPartial(object: Partial<_25.StakerDelegatorResponse>): _25.StakerDelegatorResponse;
            };
            QueryDelegatorsByStakerRequest: {
                encode(message: _25.QueryDelegatorsByStakerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryDelegatorsByStakerRequest;
                fromPartial(object: Partial<_25.QueryDelegatorsByStakerRequest>): _25.QueryDelegatorsByStakerRequest;
            };
            QueryDelegatorsByStakerResponse: {
                encode(message: _25.QueryDelegatorsByStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryDelegatorsByStakerResponse;
                fromPartial(object: Partial<_25.QueryDelegatorsByStakerResponse>): _25.QueryDelegatorsByStakerResponse;
            };
            QueryStakersByDelegatorRequest: {
                encode(message: _25.QueryStakersByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryStakersByDelegatorRequest;
                fromPartial(object: Partial<_25.QueryStakersByDelegatorRequest>): _25.QueryStakersByDelegatorRequest;
            };
            QueryStakersByDelegatorResponse: {
                encode(message: _25.QueryStakersByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.QueryStakersByDelegatorResponse;
                fromPartial(object: Partial<_25.QueryStakersByDelegatorResponse>): _25.QueryStakersByDelegatorResponse;
            };
            DelegationForStakerResponse: {
                encode(message: _25.DelegationForStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.DelegationForStakerResponse;
                fromPartial(object: Partial<_25.DelegationForStakerResponse>): _25.DelegationForStakerResponse;
            };
            FinalizedBundle: {
                encode(message: _24.FinalizedBundle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.FinalizedBundle;
                fromPartial(object: Partial<_24.FinalizedBundle>): _24.FinalizedBundle;
            };
            FinalizedAt: {
                encode(message: _24.FinalizedAt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.FinalizedAt;
                fromPartial(object: Partial<_24.FinalizedAt>): _24.FinalizedAt;
            };
            StakeSecurity: {
                encode(message: _24.StakeSecurity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.StakeSecurity;
                fromPartial(object: Partial<_24.StakeSecurity>): _24.StakeSecurity;
            };
            QueryFinalizedBundlesRequest: {
                encode(message: _24.QueryFinalizedBundlesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryFinalizedBundlesRequest;
                fromPartial(object: Partial<_24.QueryFinalizedBundlesRequest>): _24.QueryFinalizedBundlesRequest;
            };
            QueryFinalizedBundlesResponse: {
                encode(message: _24.QueryFinalizedBundlesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryFinalizedBundlesResponse;
                fromPartial(object: Partial<_24.QueryFinalizedBundlesResponse>): _24.QueryFinalizedBundlesResponse;
            };
            QueryFinalizedBundleRequest: {
                encode(message: _24.QueryFinalizedBundleRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryFinalizedBundleRequest;
                fromPartial(object: Partial<_24.QueryFinalizedBundleRequest>): _24.QueryFinalizedBundleRequest;
            };
            QueryFinalizedBundleResponse: {
                encode(message: _24.QueryFinalizedBundleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryFinalizedBundleResponse;
                fromPartial(object: Partial<_24.QueryFinalizedBundleResponse>): _24.QueryFinalizedBundleResponse;
            };
            QueryCurrentVoteStatusRequest: {
                encode(message: _24.QueryCurrentVoteStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryCurrentVoteStatusRequest;
                fromPartial(object: Partial<_24.QueryCurrentVoteStatusRequest>): _24.QueryCurrentVoteStatusRequest;
            };
            QueryCurrentVoteStatusResponse: {
                encode(message: _24.QueryCurrentVoteStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryCurrentVoteStatusResponse;
                fromPartial(object: Partial<_24.QueryCurrentVoteStatusResponse>): _24.QueryCurrentVoteStatusResponse;
            };
            QueryCanValidateRequest: {
                encode(message: _24.QueryCanValidateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryCanValidateRequest;
                fromPartial(object: Partial<_24.QueryCanValidateRequest>): _24.QueryCanValidateRequest;
            };
            QueryCanValidateResponse: {
                encode(message: _24.QueryCanValidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryCanValidateResponse;
                fromPartial(object: Partial<_24.QueryCanValidateResponse>): _24.QueryCanValidateResponse;
            };
            QueryCanProposeRequest: {
                encode(message: _24.QueryCanProposeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryCanProposeRequest;
                fromPartial(object: Partial<_24.QueryCanProposeRequest>): _24.QueryCanProposeRequest;
            };
            QueryCanProposeResponse: {
                encode(message: _24.QueryCanProposeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryCanProposeResponse;
                fromPartial(object: Partial<_24.QueryCanProposeResponse>): _24.QueryCanProposeResponse;
            };
            QueryCanVoteRequest: {
                encode(message: _24.QueryCanVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryCanVoteRequest;
                fromPartial(object: Partial<_24.QueryCanVoteRequest>): _24.QueryCanVoteRequest;
            };
            QueryCanVoteResponse: {
                encode(message: _24.QueryCanVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryCanVoteResponse;
                fromPartial(object: Partial<_24.QueryCanVoteResponse>): _24.QueryCanVoteResponse;
            };
            QueryAccountAssetsRequest: {
                encode(message: _23.QueryAccountAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountAssetsRequest;
                fromPartial(object: Partial<_23.QueryAccountAssetsRequest>): _23.QueryAccountAssetsRequest;
            };
            QueryAccountAssetsResponse: {
                encode(message: _23.QueryAccountAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountAssetsResponse;
                fromPartial(object: Partial<_23.QueryAccountAssetsResponse>): _23.QueryAccountAssetsResponse;
            };
            QueryAccountDelegationUnbondingsRequest: {
                encode(message: _23.QueryAccountDelegationUnbondingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountDelegationUnbondingsRequest;
                fromPartial(object: Partial<_23.QueryAccountDelegationUnbondingsRequest>): _23.QueryAccountDelegationUnbondingsRequest;
            };
            QueryAccountDelegationUnbondingsResponse: {
                encode(message: _23.QueryAccountDelegationUnbondingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountDelegationUnbondingsResponse;
                fromPartial(object: Partial<_23.QueryAccountDelegationUnbondingsResponse>): _23.QueryAccountDelegationUnbondingsResponse;
            };
            DelegationUnbonding: {
                encode(message: _23.DelegationUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.DelegationUnbonding;
                fromPartial(object: Partial<_23.DelegationUnbonding>): _23.DelegationUnbonding;
            };
            QueryAccountFundedListRequest: {
                encode(message: _23.QueryAccountFundedListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountFundedListRequest;
                fromPartial(object: Partial<_23.QueryAccountFundedListRequest>): _23.QueryAccountFundedListRequest;
            };
            QueryAccountFundedListResponse: {
                encode(message: _23.QueryAccountFundedListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountFundedListResponse;
                fromPartial(object: Partial<_23.QueryAccountFundedListResponse>): _23.QueryAccountFundedListResponse;
            };
            Funded: {
                encode(message: _23.Funded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Funded;
                fromPartial(object: Partial<_23.Funded>): _23.Funded;
            };
            QueryAccountRedelegationRequest: {
                encode(message: _23.QueryAccountRedelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountRedelegationRequest;
                fromPartial(object: Partial<_23.QueryAccountRedelegationRequest>): _23.QueryAccountRedelegationRequest;
            };
            QueryAccountRedelegationResponse: {
                encode(message: _23.QueryAccountRedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountRedelegationResponse;
                fromPartial(object: Partial<_23.QueryAccountRedelegationResponse>): _23.QueryAccountRedelegationResponse;
            };
            RedelegationEntry: {
                encode(message: _23.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.RedelegationEntry;
                fromPartial(object: Partial<_23.RedelegationEntry>): _23.RedelegationEntry;
            };
        };
    }
    namespace stakers {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
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
                    toAmino: ({ creator, amount, commission }: _35.MsgCreateStaker) => {
                        creator: string;
                        amount: string;
                        commission: string;
                    };
                    fromAmino: ({ creator, amount, commission }: {
                        creator: string;
                        amount: string;
                        commission: string;
                    }) => _35.MsgCreateStaker;
                };
                "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
                    aminoType: string;
                    toAmino: ({ creator, moniker, website, identity, securityContact, details }: _35.MsgUpdateMetadata) => {
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
                    }) => _35.MsgUpdateMetadata;
                };
                "/kyve.stakers.v1beta1.MsgUpdateCommission": {
                    aminoType: string;
                    toAmino: ({ creator, commission }: _35.MsgUpdateCommission) => {
                        creator: string;
                        commission: string;
                    };
                    fromAmino: ({ creator, commission }: {
                        creator: string;
                        commission: string;
                    }) => _35.MsgUpdateCommission;
                };
                "/kyve.stakers.v1beta1.MsgClaimCommissionRewards": {
                    aminoType: string;
                    toAmino: ({ creator, amount }: _35.MsgClaimCommissionRewards) => {
                        creator: string;
                        amount: string;
                    };
                    fromAmino: ({ creator, amount }: {
                        creator: string;
                        amount: string;
                    }) => _35.MsgClaimCommissionRewards;
                };
                "/kyve.stakers.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ creator, poolId, valaddress, amount }: _35.MsgJoinPool) => {
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
                    }) => _35.MsgJoinPool;
                };
                "/kyve.stakers.v1beta1.MsgLeavePool": {
                    aminoType: string;
                    toAmino: ({ creator, poolId }: _35.MsgLeavePool) => {
                        creator: string;
                        pool_id: string;
                    };
                    fromAmino: ({ creator, pool_id }: {
                        creator: string;
                        pool_id: string;
                    }) => _35.MsgLeavePool;
                };
                "/kyve.stakers.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, payload }: _35.MsgUpdateParams) => {
                        authority: string;
                        payload: string;
                    };
                    fromAmino: ({ authority, payload }: {
                        authority: string;
                        payload: string;
                    }) => _35.MsgUpdateParams;
                };
            };
            MsgCreateStaker: {
                encode(message: _35.MsgCreateStaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgCreateStaker;
                fromPartial(object: Partial<_35.MsgCreateStaker>): _35.MsgCreateStaker;
            };
            MsgCreateStakerResponse: {
                encode(_: _35.MsgCreateStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgCreateStakerResponse;
                fromPartial(_: Partial<_35.MsgCreateStakerResponse>): _35.MsgCreateStakerResponse;
            };
            MsgUpdateMetadata: {
                encode(message: _35.MsgUpdateMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgUpdateMetadata;
                fromPartial(object: Partial<_35.MsgUpdateMetadata>): _35.MsgUpdateMetadata;
            };
            MsgUpdateMetadataResponse: {
                encode(_: _35.MsgUpdateMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgUpdateMetadataResponse;
                fromPartial(_: Partial<_35.MsgUpdateMetadataResponse>): _35.MsgUpdateMetadataResponse;
            };
            MsgUpdateCommission: {
                encode(message: _35.MsgUpdateCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgUpdateCommission;
                fromPartial(object: Partial<_35.MsgUpdateCommission>): _35.MsgUpdateCommission;
            };
            MsgUpdateCommissionResponse: {
                encode(_: _35.MsgUpdateCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgUpdateCommissionResponse;
                fromPartial(_: Partial<_35.MsgUpdateCommissionResponse>): _35.MsgUpdateCommissionResponse;
            };
            MsgClaimCommissionRewards: {
                encode(message: _35.MsgClaimCommissionRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgClaimCommissionRewards;
                fromPartial(object: Partial<_35.MsgClaimCommissionRewards>): _35.MsgClaimCommissionRewards;
            };
            MsgClaimCommissionRewardsResponse: {
                encode(_: _35.MsgClaimCommissionRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgClaimCommissionRewardsResponse;
                fromPartial(_: Partial<_35.MsgClaimCommissionRewardsResponse>): _35.MsgClaimCommissionRewardsResponse;
            };
            MsgJoinPool: {
                encode(message: _35.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgJoinPool;
                fromPartial(object: Partial<_35.MsgJoinPool>): _35.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _35.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgJoinPoolResponse;
                fromPartial(_: Partial<_35.MsgJoinPoolResponse>): _35.MsgJoinPoolResponse;
            };
            MsgLeavePool: {
                encode(message: _35.MsgLeavePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgLeavePool;
                fromPartial(object: Partial<_35.MsgLeavePool>): _35.MsgLeavePool;
            };
            MsgLeavePoolResponse: {
                encode(_: _35.MsgLeavePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgLeavePoolResponse;
                fromPartial(_: Partial<_35.MsgLeavePoolResponse>): _35.MsgLeavePoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _35.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgUpdateParams;
                fromPartial(object: Partial<_35.MsgUpdateParams>): _35.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _35.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_35.MsgUpdateParamsResponse>): _35.MsgUpdateParamsResponse;
            };
            Staker: {
                encode(message: _34.Staker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.Staker;
                fromPartial(object: Partial<_34.Staker>): _34.Staker;
            };
            Valaccount: {
                encode(message: _34.Valaccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.Valaccount;
                fromPartial(object: Partial<_34.Valaccount>): _34.Valaccount;
            };
            CommissionChangeEntry: {
                encode(message: _34.CommissionChangeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.CommissionChangeEntry;
                fromPartial(object: Partial<_34.CommissionChangeEntry>): _34.CommissionChangeEntry;
            };
            LeavePoolEntry: {
                encode(message: _34.LeavePoolEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.LeavePoolEntry;
                fromPartial(object: Partial<_34.LeavePoolEntry>): _34.LeavePoolEntry;
            };
            QueueState: {
                encode(message: _34.QueueState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueueState;
                fromPartial(object: Partial<_34.QueueState>): _34.QueueState;
            };
            QueryParamsRequest: {
                encode(_: _33.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.QueryParamsRequest;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _33.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
            };
            Params: {
                encode(message: _32.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.Params;
                fromPartial(object: Partial<_32.Params>): _32.Params;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
            EventUpdateParams: {
                encode(message: _30.EventUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.EventUpdateParams;
                fromPartial(object: Partial<_30.EventUpdateParams>): _30.EventUpdateParams;
            };
            EventCreateStaker: {
                encode(message: _30.EventCreateStaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.EventCreateStaker;
                fromPartial(object: Partial<_30.EventCreateStaker>): _30.EventCreateStaker;
            };
            EventUpdateMetadata: {
                encode(message: _30.EventUpdateMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.EventUpdateMetadata;
                fromPartial(object: Partial<_30.EventUpdateMetadata>): _30.EventUpdateMetadata;
            };
            EventUpdateCommission: {
                encode(message: _30.EventUpdateCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.EventUpdateCommission;
                fromPartial(object: Partial<_30.EventUpdateCommission>): _30.EventUpdateCommission;
            };
            EventClaimCommissionRewards: {
                encode(message: _30.EventClaimCommissionRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.EventClaimCommissionRewards;
                fromPartial(object: Partial<_30.EventClaimCommissionRewards>): _30.EventClaimCommissionRewards;
            };
            EventJoinPool: {
                encode(message: _30.EventJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.EventJoinPool;
                fromPartial(object: Partial<_30.EventJoinPool>): _30.EventJoinPool;
            };
            EventLeavePool: {
                encode(message: _30.EventLeavePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.EventLeavePool;
                fromPartial(object: Partial<_30.EventLeavePool>): _30.EventLeavePool;
            };
        };
    }
    namespace team {
        const v1beta1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                teamInfo(request?: _38.QueryTeamInfoRequest): Promise<_38.QueryTeamInfoResponse>;
                teamVestingAccounts(request?: _38.QueryTeamVestingAccountsRequest): Promise<_38.QueryTeamVestingAccountsResponse>;
                teamVestingAccount(request: _38.QueryTeamVestingAccountRequest): Promise<_38.QueryTeamVestingAccountResponse>;
                teamVestingStatus(request: _38.QueryTeamVestingStatusRequest): Promise<_38.QueryTeamVestingStatusResponse>;
                teamVestingStatusByTime(request: _38.QueryTeamVestingStatusByTimeRequest): Promise<_38.QueryTeamVestingStatusByTimeResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
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
                    toAmino: ({ authority, id, amount, recipient }: _40.MsgClaimUnlocked) => {
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
                    }) => _40.MsgClaimUnlocked;
                };
                "/kyve.team.v1beta1.MsgClawback": {
                    aminoType: string;
                    toAmino: ({ authority, id, clawback }: _40.MsgClawback) => {
                        authority: string;
                        id: string;
                        clawback: string;
                    };
                    fromAmino: ({ authority, id, clawback }: {
                        authority: string;
                        id: string;
                        clawback: string;
                    }) => _40.MsgClawback;
                };
                "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
                    aminoType: string;
                    toAmino: ({ authority, totalAllocation, commencement }: _40.MsgCreateTeamVestingAccount) => {
                        authority: string;
                        total_allocation: string;
                        commencement: string;
                    };
                    fromAmino: ({ authority, total_allocation, commencement }: {
                        authority: string;
                        total_allocation: string;
                        commencement: string;
                    }) => _40.MsgCreateTeamVestingAccount;
                };
                "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
                    aminoType: string;
                    toAmino: ({ authority, amount, recipient }: _40.MsgClaimAuthorityRewards) => {
                        authority: string;
                        amount: string;
                        recipient: string;
                    };
                    fromAmino: ({ authority, amount, recipient }: {
                        authority: string;
                        amount: string;
                        recipient: string;
                    }) => _40.MsgClaimAuthorityRewards;
                };
                "/kyve.team.v1beta1.MsgClaimAccountRewards": {
                    aminoType: string;
                    toAmino: ({ authority, id, amount, recipient }: _40.MsgClaimAccountRewards) => {
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
                    }) => _40.MsgClaimAccountRewards;
                };
            };
            MsgClaimUnlocked: {
                encode(message: _40.MsgClaimUnlocked, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.MsgClaimUnlocked;
                fromPartial(object: Partial<_40.MsgClaimUnlocked>): _40.MsgClaimUnlocked;
            };
            MsgClaimUnlockedResponse: {
                encode(_: _40.MsgClaimUnlockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.MsgClaimUnlockedResponse;
                fromPartial(_: Partial<_40.MsgClaimUnlockedResponse>): _40.MsgClaimUnlockedResponse;
            };
            MsgClaimAuthorityRewards: {
                encode(message: _40.MsgClaimAuthorityRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.MsgClaimAuthorityRewards;
                fromPartial(object: Partial<_40.MsgClaimAuthorityRewards>): _40.MsgClaimAuthorityRewards;
            };
            MsgClaimAuthorityRewardsResponse: {
                encode(_: _40.MsgClaimAuthorityRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.MsgClaimAuthorityRewardsResponse;
                fromPartial(_: Partial<_40.MsgClaimAuthorityRewardsResponse>): _40.MsgClaimAuthorityRewardsResponse;
            };
            MsgClaimAccountRewards: {
                encode(message: _40.MsgClaimAccountRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.MsgClaimAccountRewards;
                fromPartial(object: Partial<_40.MsgClaimAccountRewards>): _40.MsgClaimAccountRewards;
            };
            MsgClaimAccountRewardsResponse: {
                encode(_: _40.MsgClaimAccountRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.MsgClaimAccountRewardsResponse;
                fromPartial(_: Partial<_40.MsgClaimAccountRewardsResponse>): _40.MsgClaimAccountRewardsResponse;
            };
            MsgClawback: {
                encode(message: _40.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.MsgClawback;
                fromPartial(object: Partial<_40.MsgClawback>): _40.MsgClawback;
            };
            MsgClawbackResponse: {
                encode(_: _40.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.MsgClawbackResponse;
                fromPartial(_: Partial<_40.MsgClawbackResponse>): _40.MsgClawbackResponse;
            };
            MsgCreateTeamVestingAccount: {
                encode(message: _40.MsgCreateTeamVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.MsgCreateTeamVestingAccount;
                fromPartial(object: Partial<_40.MsgCreateTeamVestingAccount>): _40.MsgCreateTeamVestingAccount;
            };
            MsgCreateTeamVestingAccountResponse: {
                encode(_: _40.MsgCreateTeamVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.MsgCreateTeamVestingAccountResponse;
                fromPartial(_: Partial<_40.MsgCreateTeamVestingAccountResponse>): _40.MsgCreateTeamVestingAccountResponse;
            };
            Authority: {
                encode(message: _39.Authority, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Authority;
                fromPartial(object: Partial<_39.Authority>): _39.Authority;
            };
            TeamVestingAccount: {
                encode(message: _39.TeamVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.TeamVestingAccount;
                fromPartial(object: Partial<_39.TeamVestingAccount>): _39.TeamVestingAccount;
            };
            QueryTeamInfoRequest: {
                encode(_: _38.QueryTeamInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _38.QueryTeamInfoRequest;
                fromPartial(_: Partial<_38.QueryTeamInfoRequest>): _38.QueryTeamInfoRequest;
            };
            QueryTeamInfoResponse: {
                encode(message: _38.QueryTeamInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTeamInfoResponse;
                fromPartial(object: Partial<_38.QueryTeamInfoResponse>): _38.QueryTeamInfoResponse;
            };
            QueryTeamVestingAccountsRequest: {
                encode(_: _38.QueryTeamVestingAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _38.QueryTeamVestingAccountsRequest;
                fromPartial(_: Partial<_38.QueryTeamVestingAccountsRequest>): _38.QueryTeamVestingAccountsRequest;
            };
            QueryTeamVestingAccountsResponse: {
                encode(message: _38.QueryTeamVestingAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTeamVestingAccountsResponse;
                fromPartial(object: Partial<_38.QueryTeamVestingAccountsResponse>): _38.QueryTeamVestingAccountsResponse;
            };
            QueryTeamVestingAccountRequest: {
                encode(message: _38.QueryTeamVestingAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTeamVestingAccountRequest;
                fromPartial(object: Partial<_38.QueryTeamVestingAccountRequest>): _38.QueryTeamVestingAccountRequest;
            };
            QueryTeamVestingAccountResponse: {
                encode(message: _38.QueryTeamVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTeamVestingAccountResponse;
                fromPartial(object: Partial<_38.QueryTeamVestingAccountResponse>): _38.QueryTeamVestingAccountResponse;
            };
            QueryTeamVestingStatusRequest: {
                encode(message: _38.QueryTeamVestingStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTeamVestingStatusRequest;
                fromPartial(object: Partial<_38.QueryTeamVestingStatusRequest>): _38.QueryTeamVestingStatusRequest;
            };
            QueryTeamVestingStatusResponse: {
                encode(message: _38.QueryTeamVestingStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTeamVestingStatusResponse;
                fromPartial(object: Partial<_38.QueryTeamVestingStatusResponse>): _38.QueryTeamVestingStatusResponse;
            };
            QueryTeamVestingStatusByTimeRequest: {
                encode(message: _38.QueryTeamVestingStatusByTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTeamVestingStatusByTimeRequest;
                fromPartial(object: Partial<_38.QueryTeamVestingStatusByTimeRequest>): _38.QueryTeamVestingStatusByTimeRequest;
            };
            QueryTeamVestingStatusByTimeResponse: {
                encode(message: _38.QueryTeamVestingStatusByTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryTeamVestingStatusByTimeResponse;
                fromPartial(object: Partial<_38.QueryTeamVestingStatusByTimeResponse>): _38.QueryTeamVestingStatusByTimeResponse;
            };
            QueryVestingStatus: {
                encode(message: _38.QueryVestingStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryVestingStatus;
                fromPartial(object: Partial<_38.QueryVestingStatus>): _38.QueryVestingStatus;
            };
            QueryVestingPlan: {
                encode(message: _38.QueryVestingPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryVestingPlan;
                fromPartial(object: Partial<_38.QueryVestingPlan>): _38.QueryVestingPlan;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
            };
            EventCreateTeamVestingAccount: {
                encode(message: _36.EventCreateTeamVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.EventCreateTeamVestingAccount;
                fromPartial(object: Partial<_36.EventCreateTeamVestingAccount>): _36.EventCreateTeamVestingAccount;
            };
            EventClawback: {
                encode(message: _36.EventClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.EventClawback;
                fromPartial(object: Partial<_36.EventClawback>): _36.EventClawback;
            };
            EventClaimedUnlocked: {
                encode(message: _36.EventClaimedUnlocked, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.EventClaimedUnlocked;
                fromPartial(object: Partial<_36.EventClaimedUnlocked>): _36.EventClaimedUnlocked;
            };
            EventClaimInflationRewards: {
                encode(message: _36.EventClaimInflationRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.EventClaimInflationRewards;
                fromPartial(object: Partial<_36.EventClaimInflationRewards>): _36.EventClaimInflationRewards;
            };
            EventClaimAuthorityRewards: {
                encode(message: _36.EventClaimAuthorityRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.EventClaimAuthorityRewards;
                fromPartial(object: Partial<_36.EventClaimAuthorityRewards>): _36.EventClaimAuthorityRewards;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            kyve: {
                bundles: {
                    v1beta1: _179.MsgClientImpl;
                };
                delegation: {
                    v1beta1: _180.MsgClientImpl;
                };
                global: {
                    v1beta1: _181.MsgClientImpl;
                };
                pool: {
                    v1beta1: _182.MsgClientImpl;
                };
                stakers: {
                    v1beta1: _183.MsgClientImpl;
                };
                team: {
                    v1beta1: _184.MsgClientImpl;
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
                    v1beta1: _167.LCDQueryClient;
                };
                delegation: {
                    v1beta1: _168.LCDQueryClient;
                };
                global: {
                    v1beta1: _169.LCDQueryClient;
                };
                pool: {
                    v1beta1: _170.LCDQueryClient;
                };
                stakers: {
                    v1beta1: _171.LCDQueryClient;
                };
                team: {
                    v1beta1: _172.LCDQueryClient;
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
