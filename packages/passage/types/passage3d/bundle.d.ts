import * as _0 from "./claim/v1beta1/claim_record";
import * as _1 from "./claim/v1beta1/genesis";
import * as _2 from "./claim/v1beta1/params";
import * as _3 from "./claim/v1beta1/query";
import * as _4 from "./claim/v1beta1/tx";
import * as _103 from "./claim/v1beta1/query.lcd";
import * as _104 from "./claim/v1beta1/query.rpc.Query";
import * as _105 from "./claim/v1beta1/tx.rpc.msg";
export declare namespace passage3d {
    namespace claim {
        const v1beta1: {
            MsgClientImpl: typeof _105.MsgClientImpl;
            QueryClientImpl: typeof _104.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _3.QueryModuleAccountBalanceRequest): Promise<_3.QueryModuleAccountBalanceResponse>;
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                claimRecord(request: _3.QueryClaimRecordRequest): Promise<_3.QueryClaimRecordResponse>;
                claimableForAction(request: _3.QueryClaimableForActionRequest): Promise<_3.QueryClaimableForActionResponse>;
                totalClaimable(request: _3.QueryTotalClaimableRequest): Promise<_3.QueryTotalClaimableResponse>;
            };
            LCDQueryClient: typeof _103.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _4.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _4.MsgClaim): {
                        typeUrl: string;
                        value: _4.MsgClaim;
                    };
                };
                fromJSON: {
                    claim(value: any): {
                        typeUrl: string;
                        value: _4.MsgClaim;
                    };
                };
                fromPartial: {
                    claim(value: _4.MsgClaim): {
                        typeUrl: string;
                        value: _4.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/passage3d.claim.v1beta1.MsgClaim": {
                    aminoType: string;
                    toAmino: (message: _4.MsgClaim) => _4.MsgClaimAmino;
                    fromAmino: (object: _4.MsgClaimAmino) => _4.MsgClaim;
                };
            };
            MsgClaim: {
                typeUrl: string;
                encode(message: _4.MsgClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgClaim;
                fromPartial(object: Partial<_4.MsgClaim>): _4.MsgClaim;
                fromAmino(object: _4.MsgClaimAmino): _4.MsgClaim;
                toAmino(message: _4.MsgClaim): _4.MsgClaimAmino;
                fromAminoMsg(object: _4.MsgClaimAminoMsg): _4.MsgClaim;
                fromProtoMsg(message: _4.MsgClaimProtoMsg): _4.MsgClaim;
                toProto(message: _4.MsgClaim): Uint8Array;
                toProtoMsg(message: _4.MsgClaim): _4.MsgClaimProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                encode(message: _4.MsgClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgClaimResponse;
                fromPartial(object: Partial<_4.MsgClaimResponse>): _4.MsgClaimResponse;
                fromAmino(object: _4.MsgClaimResponseAmino): _4.MsgClaimResponse;
                toAmino(message: _4.MsgClaimResponse): _4.MsgClaimResponseAmino;
                fromAminoMsg(object: _4.MsgClaimResponseAminoMsg): _4.MsgClaimResponse;
                fromProtoMsg(message: _4.MsgClaimResponseProtoMsg): _4.MsgClaimResponse;
                toProto(message: _4.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _4.MsgClaimResponse): _4.MsgClaimResponseProtoMsg;
            };
            QueryModuleAccountBalanceRequest: {
                typeUrl: string;
                encode(_: _3.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.QueryModuleAccountBalanceRequest;
                fromPartial(_: Partial<_3.QueryModuleAccountBalanceRequest>): _3.QueryModuleAccountBalanceRequest;
                fromAmino(_: _3.QueryModuleAccountBalanceRequestAmino): _3.QueryModuleAccountBalanceRequest;
                toAmino(_: _3.QueryModuleAccountBalanceRequest): _3.QueryModuleAccountBalanceRequestAmino;
                fromAminoMsg(object: _3.QueryModuleAccountBalanceRequestAminoMsg): _3.QueryModuleAccountBalanceRequest;
                fromProtoMsg(message: _3.QueryModuleAccountBalanceRequestProtoMsg): _3.QueryModuleAccountBalanceRequest;
                toProto(message: _3.QueryModuleAccountBalanceRequest): Uint8Array;
                toProtoMsg(message: _3.QueryModuleAccountBalanceRequest): _3.QueryModuleAccountBalanceRequestProtoMsg;
            };
            QueryModuleAccountBalanceResponse: {
                typeUrl: string;
                encode(message: _3.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryModuleAccountBalanceResponse;
                fromPartial(object: Partial<_3.QueryModuleAccountBalanceResponse>): _3.QueryModuleAccountBalanceResponse;
                fromAmino(object: _3.QueryModuleAccountBalanceResponseAmino): _3.QueryModuleAccountBalanceResponse;
                toAmino(message: _3.QueryModuleAccountBalanceResponse): _3.QueryModuleAccountBalanceResponseAmino;
                fromAminoMsg(object: _3.QueryModuleAccountBalanceResponseAminoMsg): _3.QueryModuleAccountBalanceResponse;
                fromProtoMsg(message: _3.QueryModuleAccountBalanceResponseProtoMsg): _3.QueryModuleAccountBalanceResponse;
                toProto(message: _3.QueryModuleAccountBalanceResponse): Uint8Array;
                toProtoMsg(message: _3.QueryModuleAccountBalanceResponse): _3.QueryModuleAccountBalanceResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _3.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.QueryParamsRequest;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
                fromAmino(_: _3.QueryParamsRequestAmino): _3.QueryParamsRequest;
                toAmino(_: _3.QueryParamsRequest): _3.QueryParamsRequestAmino;
                fromAminoMsg(object: _3.QueryParamsRequestAminoMsg): _3.QueryParamsRequest;
                fromProtoMsg(message: _3.QueryParamsRequestProtoMsg): _3.QueryParamsRequest;
                toProto(message: _3.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _3.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryParamsResponse;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
                fromAmino(object: _3.QueryParamsResponseAmino): _3.QueryParamsResponse;
                toAmino(message: _3.QueryParamsResponse): _3.QueryParamsResponseAmino;
                fromAminoMsg(object: _3.QueryParamsResponseAminoMsg): _3.QueryParamsResponse;
                fromProtoMsg(message: _3.QueryParamsResponseProtoMsg): _3.QueryParamsResponse;
                toProto(message: _3.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseProtoMsg;
            };
            QueryClaimRecordRequest: {
                typeUrl: string;
                encode(message: _3.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryClaimRecordRequest;
                fromPartial(object: Partial<_3.QueryClaimRecordRequest>): _3.QueryClaimRecordRequest;
                fromAmino(object: _3.QueryClaimRecordRequestAmino): _3.QueryClaimRecordRequest;
                toAmino(message: _3.QueryClaimRecordRequest): _3.QueryClaimRecordRequestAmino;
                fromAminoMsg(object: _3.QueryClaimRecordRequestAminoMsg): _3.QueryClaimRecordRequest;
                fromProtoMsg(message: _3.QueryClaimRecordRequestProtoMsg): _3.QueryClaimRecordRequest;
                toProto(message: _3.QueryClaimRecordRequest): Uint8Array;
                toProtoMsg(message: _3.QueryClaimRecordRequest): _3.QueryClaimRecordRequestProtoMsg;
            };
            QueryClaimRecordResponse: {
                typeUrl: string;
                encode(message: _3.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryClaimRecordResponse;
                fromPartial(object: Partial<_3.QueryClaimRecordResponse>): _3.QueryClaimRecordResponse;
                fromAmino(object: _3.QueryClaimRecordResponseAmino): _3.QueryClaimRecordResponse;
                toAmino(message: _3.QueryClaimRecordResponse): _3.QueryClaimRecordResponseAmino;
                fromAminoMsg(object: _3.QueryClaimRecordResponseAminoMsg): _3.QueryClaimRecordResponse;
                fromProtoMsg(message: _3.QueryClaimRecordResponseProtoMsg): _3.QueryClaimRecordResponse;
                toProto(message: _3.QueryClaimRecordResponse): Uint8Array;
                toProtoMsg(message: _3.QueryClaimRecordResponse): _3.QueryClaimRecordResponseProtoMsg;
            };
            QueryClaimableForActionRequest: {
                typeUrl: string;
                encode(message: _3.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryClaimableForActionRequest;
                fromPartial(object: Partial<_3.QueryClaimableForActionRequest>): _3.QueryClaimableForActionRequest;
                fromAmino(object: _3.QueryClaimableForActionRequestAmino): _3.QueryClaimableForActionRequest;
                toAmino(message: _3.QueryClaimableForActionRequest): _3.QueryClaimableForActionRequestAmino;
                fromAminoMsg(object: _3.QueryClaimableForActionRequestAminoMsg): _3.QueryClaimableForActionRequest;
                fromProtoMsg(message: _3.QueryClaimableForActionRequestProtoMsg): _3.QueryClaimableForActionRequest;
                toProto(message: _3.QueryClaimableForActionRequest): Uint8Array;
                toProtoMsg(message: _3.QueryClaimableForActionRequest): _3.QueryClaimableForActionRequestProtoMsg;
            };
            QueryClaimableForActionResponse: {
                typeUrl: string;
                encode(message: _3.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryClaimableForActionResponse;
                fromPartial(object: Partial<_3.QueryClaimableForActionResponse>): _3.QueryClaimableForActionResponse;
                fromAmino(object: _3.QueryClaimableForActionResponseAmino): _3.QueryClaimableForActionResponse;
                toAmino(message: _3.QueryClaimableForActionResponse): _3.QueryClaimableForActionResponseAmino;
                fromAminoMsg(object: _3.QueryClaimableForActionResponseAminoMsg): _3.QueryClaimableForActionResponse;
                fromProtoMsg(message: _3.QueryClaimableForActionResponseProtoMsg): _3.QueryClaimableForActionResponse;
                toProto(message: _3.QueryClaimableForActionResponse): Uint8Array;
                toProtoMsg(message: _3.QueryClaimableForActionResponse): _3.QueryClaimableForActionResponseProtoMsg;
            };
            QueryTotalClaimableRequest: {
                typeUrl: string;
                encode(message: _3.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryTotalClaimableRequest;
                fromPartial(object: Partial<_3.QueryTotalClaimableRequest>): _3.QueryTotalClaimableRequest;
                fromAmino(object: _3.QueryTotalClaimableRequestAmino): _3.QueryTotalClaimableRequest;
                toAmino(message: _3.QueryTotalClaimableRequest): _3.QueryTotalClaimableRequestAmino;
                fromAminoMsg(object: _3.QueryTotalClaimableRequestAminoMsg): _3.QueryTotalClaimableRequest;
                fromProtoMsg(message: _3.QueryTotalClaimableRequestProtoMsg): _3.QueryTotalClaimableRequest;
                toProto(message: _3.QueryTotalClaimableRequest): Uint8Array;
                toProtoMsg(message: _3.QueryTotalClaimableRequest): _3.QueryTotalClaimableRequestProtoMsg;
            };
            QueryTotalClaimableResponse: {
                typeUrl: string;
                encode(message: _3.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryTotalClaimableResponse;
                fromPartial(object: Partial<_3.QueryTotalClaimableResponse>): _3.QueryTotalClaimableResponse;
                fromAmino(object: _3.QueryTotalClaimableResponseAmino): _3.QueryTotalClaimableResponse;
                toAmino(message: _3.QueryTotalClaimableResponse): _3.QueryTotalClaimableResponseAmino;
                fromAminoMsg(object: _3.QueryTotalClaimableResponseAminoMsg): _3.QueryTotalClaimableResponse;
                fromProtoMsg(message: _3.QueryTotalClaimableResponseProtoMsg): _3.QueryTotalClaimableResponse;
                toProto(message: _3.QueryTotalClaimableResponse): Uint8Array;
                toProtoMsg(message: _3.QueryTotalClaimableResponse): _3.QueryTotalClaimableResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
                fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
                toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
                fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
                fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
                toProto(message: _1.GenesisState): Uint8Array;
                toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
            };
            ClaimRecord: {
                typeUrl: string;
                encode(message: _0.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.ClaimRecord;
                fromPartial(object: Partial<_0.ClaimRecord>): _0.ClaimRecord;
                fromAmino(object: _0.ClaimRecordAmino): _0.ClaimRecord;
                toAmino(message: _0.ClaimRecord): _0.ClaimRecordAmino;
                fromAminoMsg(object: _0.ClaimRecordAminoMsg): _0.ClaimRecord;
                fromProtoMsg(message: _0.ClaimRecordProtoMsg): _0.ClaimRecord;
                toProto(message: _0.ClaimRecord): Uint8Array;
                toProtoMsg(message: _0.ClaimRecord): _0.ClaimRecordProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            passage3d: {
                claim: {
                    v1beta1: _105.MsgClientImpl;
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
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            passage3d: {
                claim: {
                    v1beta1: {
                        moduleAccountBalance(request?: _3.QueryModuleAccountBalanceRequest): Promise<_3.QueryModuleAccountBalanceResponse>;
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                        claimRecord(request: _3.QueryClaimRecordRequest): Promise<_3.QueryClaimRecordResponse>;
                        claimableForAction(request: _3.QueryClaimableForActionRequest): Promise<_3.QueryClaimableForActionResponse>;
                        totalClaimable(request: _3.QueryTotalClaimableRequest): Promise<_3.QueryTotalClaimableResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
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
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
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
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            passage3d: {
                claim: {
                    v1beta1: _103.LCDQueryClient;
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
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
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
