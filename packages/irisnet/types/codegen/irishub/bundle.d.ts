import * as _0 from "../guardian/genesis";
import * as _1 from "../guardian/guardian";
import * as _2 from "../guardian/query";
import * as _3 from "../guardian/tx";
import * as _4 from "../mint/genesis";
import * as _5 from "../mint/mint";
import * as _6 from "../mint/query";
import * as _137 from "../guardian/query.lcd";
import * as _138 from "../mint/query.lcd";
import * as _139 from "../guardian/query.rpc.Query";
import * as _140 from "../mint/query.rpc.Query";
import * as _141 from "../guardian/tx.rpc.msg";
export declare namespace irishub {
    const guardian: {
        MsgClientImpl: typeof _141.MsgClientImpl;
        QueryClientImpl: typeof _139.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            supers(request?: _2.QuerySupersRequest): Promise<_2.QuerySupersResponse>;
        };
        LCDQueryClient: typeof _137.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addSuper(value: _3.MsgAddSuper): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteSuper(value: _3.MsgDeleteSuper): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addSuper(value: _3.MsgAddSuper): {
                    typeUrl: string;
                    value: _3.MsgAddSuper;
                };
                deleteSuper(value: _3.MsgDeleteSuper): {
                    typeUrl: string;
                    value: _3.MsgDeleteSuper;
                };
            };
            fromJSON: {
                addSuper(value: any): {
                    typeUrl: string;
                    value: _3.MsgAddSuper;
                };
                deleteSuper(value: any): {
                    typeUrl: string;
                    value: _3.MsgDeleteSuper;
                };
            };
            fromPartial: {
                addSuper(value: _3.MsgAddSuper): {
                    typeUrl: string;
                    value: _3.MsgAddSuper;
                };
                deleteSuper(value: _3.MsgDeleteSuper): {
                    typeUrl: string;
                    value: _3.MsgDeleteSuper;
                };
            };
        };
        AminoConverter: {
            "/irishub.guardian.MsgAddSuper": {
                aminoType: string;
                toAmino: (message: _3.MsgAddSuper) => _3.MsgAddSuperAmino;
                fromAmino: (object: _3.MsgAddSuperAmino) => _3.MsgAddSuper;
            };
            "/irishub.guardian.MsgDeleteSuper": {
                aminoType: string;
                toAmino: (message: _3.MsgDeleteSuper) => _3.MsgDeleteSuperAmino;
                fromAmino: (object: _3.MsgDeleteSuperAmino) => _3.MsgDeleteSuper;
            };
        };
        MsgAddSuper: {
            typeUrl: string;
            encode(message: _3.MsgAddSuper, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.MsgAddSuper;
            fromPartial(object: Partial<_3.MsgAddSuper>): _3.MsgAddSuper;
            fromAmino(object: _3.MsgAddSuperAmino): _3.MsgAddSuper;
            toAmino(message: _3.MsgAddSuper): _3.MsgAddSuperAmino;
            fromAminoMsg(object: _3.MsgAddSuperAminoMsg): _3.MsgAddSuper;
            fromProtoMsg(message: _3.MsgAddSuperProtoMsg): _3.MsgAddSuper;
            toProto(message: _3.MsgAddSuper): Uint8Array;
            toProtoMsg(message: _3.MsgAddSuper): _3.MsgAddSuperProtoMsg;
        };
        MsgAddSuperResponse: {
            typeUrl: string;
            encode(_: _3.MsgAddSuperResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _3.MsgAddSuperResponse;
            fromPartial(_: Partial<_3.MsgAddSuperResponse>): _3.MsgAddSuperResponse;
            fromAmino(_: _3.MsgAddSuperResponseAmino): _3.MsgAddSuperResponse;
            toAmino(_: _3.MsgAddSuperResponse): _3.MsgAddSuperResponseAmino;
            fromAminoMsg(object: _3.MsgAddSuperResponseAminoMsg): _3.MsgAddSuperResponse;
            fromProtoMsg(message: _3.MsgAddSuperResponseProtoMsg): _3.MsgAddSuperResponse;
            toProto(message: _3.MsgAddSuperResponse): Uint8Array;
            toProtoMsg(message: _3.MsgAddSuperResponse): _3.MsgAddSuperResponseProtoMsg;
        };
        MsgDeleteSuper: {
            typeUrl: string;
            encode(message: _3.MsgDeleteSuper, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.MsgDeleteSuper;
            fromPartial(object: Partial<_3.MsgDeleteSuper>): _3.MsgDeleteSuper;
            fromAmino(object: _3.MsgDeleteSuperAmino): _3.MsgDeleteSuper;
            toAmino(message: _3.MsgDeleteSuper): _3.MsgDeleteSuperAmino;
            fromAminoMsg(object: _3.MsgDeleteSuperAminoMsg): _3.MsgDeleteSuper;
            fromProtoMsg(message: _3.MsgDeleteSuperProtoMsg): _3.MsgDeleteSuper;
            toProto(message: _3.MsgDeleteSuper): Uint8Array;
            toProtoMsg(message: _3.MsgDeleteSuper): _3.MsgDeleteSuperProtoMsg;
        };
        MsgDeleteSuperResponse: {
            typeUrl: string;
            encode(_: _3.MsgDeleteSuperResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _3.MsgDeleteSuperResponse;
            fromPartial(_: Partial<_3.MsgDeleteSuperResponse>): _3.MsgDeleteSuperResponse;
            fromAmino(_: _3.MsgDeleteSuperResponseAmino): _3.MsgDeleteSuperResponse;
            toAmino(_: _3.MsgDeleteSuperResponse): _3.MsgDeleteSuperResponseAmino;
            fromAminoMsg(object: _3.MsgDeleteSuperResponseAminoMsg): _3.MsgDeleteSuperResponse;
            fromProtoMsg(message: _3.MsgDeleteSuperResponseProtoMsg): _3.MsgDeleteSuperResponse;
            toProto(message: _3.MsgDeleteSuperResponse): Uint8Array;
            toProtoMsg(message: _3.MsgDeleteSuperResponse): _3.MsgDeleteSuperResponseProtoMsg;
        };
        QuerySupersRequest: {
            typeUrl: string;
            encode(message: _2.QuerySupersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.QuerySupersRequest;
            fromPartial(object: Partial<_2.QuerySupersRequest>): _2.QuerySupersRequest;
            fromAmino(object: _2.QuerySupersRequestAmino): _2.QuerySupersRequest;
            toAmino(message: _2.QuerySupersRequest): _2.QuerySupersRequestAmino;
            fromAminoMsg(object: _2.QuerySupersRequestAminoMsg): _2.QuerySupersRequest;
            fromProtoMsg(message: _2.QuerySupersRequestProtoMsg): _2.QuerySupersRequest;
            toProto(message: _2.QuerySupersRequest): Uint8Array;
            toProtoMsg(message: _2.QuerySupersRequest): _2.QuerySupersRequestProtoMsg;
        };
        QuerySupersResponse: {
            typeUrl: string;
            encode(message: _2.QuerySupersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.QuerySupersResponse;
            fromPartial(object: Partial<_2.QuerySupersResponse>): _2.QuerySupersResponse;
            fromAmino(object: _2.QuerySupersResponseAmino): _2.QuerySupersResponse;
            toAmino(message: _2.QuerySupersResponse): _2.QuerySupersResponseAmino;
            fromAminoMsg(object: _2.QuerySupersResponseAminoMsg): _2.QuerySupersResponse;
            fromProtoMsg(message: _2.QuerySupersResponseProtoMsg): _2.QuerySupersResponse;
            toProto(message: _2.QuerySupersResponse): Uint8Array;
            toProtoMsg(message: _2.QuerySupersResponse): _2.QuerySupersResponseProtoMsg;
        };
        accountTypeFromJSON(object: any): _1.AccountType;
        accountTypeToJSON(object: _1.AccountType): string;
        AccountType: typeof _1.AccountType;
        AccountTypeSDKType: typeof _1.AccountType;
        AccountTypeAmino: typeof _1.AccountType;
        Super: {
            typeUrl: string;
            encode(message: _1.Super, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.Super;
            fromPartial(object: Partial<_1.Super>): _1.Super;
            fromAmino(object: _1.SuperAmino): _1.Super;
            toAmino(message: _1.Super): _1.SuperAmino;
            fromAminoMsg(object: _1.SuperAminoMsg): _1.Super;
            fromProtoMsg(message: _1.SuperProtoMsg): _1.Super;
            toProto(message: _1.Super): Uint8Array;
            toProtoMsg(message: _1.Super): _1.SuperProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _0.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.GenesisState;
            fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
            fromAmino(object: _0.GenesisStateAmino): _0.GenesisState;
            toAmino(message: _0.GenesisState): _0.GenesisStateAmino;
            fromAminoMsg(object: _0.GenesisStateAminoMsg): _0.GenesisState;
            fromProtoMsg(message: _0.GenesisStateProtoMsg): _0.GenesisState;
            toProto(message: _0.GenesisState): Uint8Array;
            toProtoMsg(message: _0.GenesisState): _0.GenesisStateProtoMsg;
        };
    };
    const mint: {
        QueryClientImpl: typeof _140.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _138.LCDQueryClient;
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _6.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryParamsRequest;
            fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
            fromAmino(_: _6.QueryParamsRequestAmino): _6.QueryParamsRequest;
            toAmino(_: _6.QueryParamsRequest): _6.QueryParamsRequestAmino;
            fromAminoMsg(object: _6.QueryParamsRequestAminoMsg): _6.QueryParamsRequest;
            fromProtoMsg(message: _6.QueryParamsRequestProtoMsg): _6.QueryParamsRequest;
            toProto(message: _6.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryParamsRequest): _6.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _6.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryParamsResponse;
            fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
            fromAmino(object: _6.QueryParamsResponseAmino): _6.QueryParamsResponse;
            toAmino(message: _6.QueryParamsResponse): _6.QueryParamsResponseAmino;
            fromAminoMsg(object: _6.QueryParamsResponseAminoMsg): _6.QueryParamsResponse;
            fromProtoMsg(message: _6.QueryParamsResponseProtoMsg): _6.QueryParamsResponse;
            toProto(message: _6.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryParamsResponse): _6.QueryParamsResponseProtoMsg;
        };
        Minter: {
            typeUrl: string;
            encode(message: _5.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.Minter;
            fromPartial(object: Partial<_5.Minter>): _5.Minter;
            fromAmino(object: _5.MinterAmino): _5.Minter;
            toAmino(message: _5.Minter): _5.MinterAmino;
            fromAminoMsg(object: _5.MinterAminoMsg): _5.Minter;
            fromProtoMsg(message: _5.MinterProtoMsg): _5.Minter;
            toProto(message: _5.Minter): Uint8Array;
            toProtoMsg(message: _5.Minter): _5.MinterProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _5.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.Params;
            fromPartial(object: Partial<_5.Params>): _5.Params;
            fromAmino(object: _5.ParamsAmino): _5.Params;
            toAmino(message: _5.Params): _5.ParamsAmino;
            fromAminoMsg(object: _5.ParamsAminoMsg): _5.Params;
            fromProtoMsg(message: _5.ParamsProtoMsg): _5.Params;
            toProto(message: _5.Params): Uint8Array;
            toProtoMsg(message: _5.Params): _5.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.GenesisState;
            fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
            fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
            toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
            fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
            fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
            toProto(message: _4.GenesisState): Uint8Array;
            toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            irishub: {
                guardian: _141.MsgClientImpl;
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
            irishub: {
                guardian: {
                    supers(request?: _2.QuerySupersRequest): Promise<_2.QuerySupersResponse>;
                };
                mint: {
                    params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
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
            irishub: {
                guardian: _137.LCDQueryClient;
                mint: _138.LCDQueryClient;
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
