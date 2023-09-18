import * as _0 from "./epochs/v1beta1/genesis";
import * as _1 from "./epochs/v1beta1/query";
import * as _2 from "./halving/v1beta1/genesis";
import * as _3 from "./halving/v1beta1/halving";
import * as _4 from "./halving/v1beta1/query";
import * as _5 from "./interchainquery/v1beta1/genesis";
import * as _6 from "./interchainquery/v1beta1/messages";
import * as _7 from "./interchainquery/v1beta1/query";
import * as _133 from "./epochs/v1beta1/query.lcd";
import * as _134 from "./halving/v1beta1/query.lcd";
import * as _135 from "./epochs/v1beta1/query.rpc.Query";
import * as _136 from "./halving/v1beta1/query.rpc.Query";
import * as _137 from "./interchainquery/v1beta1/messages.rpc.msg";
export declare namespace persistence {
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _135.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _1.QueryEpochsInfoRequest): Promise<_1.QueryEpochsInfoResponse>;
                currentEpoch(request: _1.QueryCurrentEpochRequest): Promise<_1.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _1.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_1.QueryEpochsInfoRequest>): _1.QueryEpochsInfoRequest;
                fromAmino(_: _1.QueryEpochsInfoRequestAmino): _1.QueryEpochsInfoRequest;
                toAmino(_: _1.QueryEpochsInfoRequest): _1.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _1.QueryEpochsInfoRequestAminoMsg): _1.QueryEpochsInfoRequest;
                fromProtoMsg(message: _1.QueryEpochsInfoRequestProtoMsg): _1.QueryEpochsInfoRequest;
                toProto(message: _1.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _1.QueryEpochsInfoRequest): _1.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _1.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_1.QueryEpochsInfoResponse>): _1.QueryEpochsInfoResponse;
                fromAmino(object: _1.QueryEpochsInfoResponseAmino): _1.QueryEpochsInfoResponse;
                toAmino(message: _1.QueryEpochsInfoResponse): _1.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _1.QueryEpochsInfoResponseAminoMsg): _1.QueryEpochsInfoResponse;
                fromProtoMsg(message: _1.QueryEpochsInfoResponseProtoMsg): _1.QueryEpochsInfoResponse;
                toProto(message: _1.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _1.QueryEpochsInfoResponse): _1.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _1.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_1.QueryCurrentEpochRequest>): _1.QueryCurrentEpochRequest;
                fromAmino(object: _1.QueryCurrentEpochRequestAmino): _1.QueryCurrentEpochRequest;
                toAmino(message: _1.QueryCurrentEpochRequest): _1.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _1.QueryCurrentEpochRequestAminoMsg): _1.QueryCurrentEpochRequest;
                fromProtoMsg(message: _1.QueryCurrentEpochRequestProtoMsg): _1.QueryCurrentEpochRequest;
                toProto(message: _1.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _1.QueryCurrentEpochRequest): _1.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _1.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_1.QueryCurrentEpochResponse>): _1.QueryCurrentEpochResponse;
                fromAmino(object: _1.QueryCurrentEpochResponseAmino): _1.QueryCurrentEpochResponse;
                toAmino(message: _1.QueryCurrentEpochResponse): _1.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _1.QueryCurrentEpochResponseAminoMsg): _1.QueryCurrentEpochResponse;
                fromProtoMsg(message: _1.QueryCurrentEpochResponseProtoMsg): _1.QueryCurrentEpochResponse;
                toProto(message: _1.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _1.QueryCurrentEpochResponse): _1.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _0.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EpochInfo;
                fromPartial(object: Partial<_0.EpochInfo>): _0.EpochInfo;
                fromAmino(object: _0.EpochInfoAmino): _0.EpochInfo;
                toAmino(message: _0.EpochInfo): _0.EpochInfoAmino;
                fromAminoMsg(object: _0.EpochInfoAminoMsg): _0.EpochInfo;
                fromProtoMsg(message: _0.EpochInfoProtoMsg): _0.EpochInfo;
                toProto(message: _0.EpochInfo): Uint8Array;
                toProtoMsg(message: _0.EpochInfo): _0.EpochInfoProtoMsg;
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
    }
    namespace halving {
        const v1beta1: {
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
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
        };
    }
    namespace interchainquery {
        const v1beta1: {
            MsgClientImpl: typeof _137.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _6.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _6.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _6.MsgSubmitQueryResponse;
                    };
                };
                fromJSON: {
                    submitQueryResponse(value: any): {
                        typeUrl: string;
                        value: _6.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _6.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _6.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _6.MsgSubmitQueryResponse) => _6.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _6.MsgSubmitQueryResponseAmino) => _6.MsgSubmitQueryResponse;
                };
            };
            QueryRequestsRequest: {
                typeUrl: string;
                encode(message: _7.QueryRequestsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryRequestsRequest;
                fromPartial(object: Partial<_7.QueryRequestsRequest>): _7.QueryRequestsRequest;
                fromAmino(object: _7.QueryRequestsRequestAmino): _7.QueryRequestsRequest;
                toAmino(message: _7.QueryRequestsRequest): _7.QueryRequestsRequestAmino;
                fromAminoMsg(object: _7.QueryRequestsRequestAminoMsg): _7.QueryRequestsRequest;
                fromProtoMsg(message: _7.QueryRequestsRequestProtoMsg): _7.QueryRequestsRequest;
                toProto(message: _7.QueryRequestsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryRequestsRequest): _7.QueryRequestsRequestProtoMsg;
            };
            QueryRequestsResponse: {
                typeUrl: string;
                encode(message: _7.QueryRequestsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryRequestsResponse;
                fromPartial(object: Partial<_7.QueryRequestsResponse>): _7.QueryRequestsResponse;
                fromAmino(object: _7.QueryRequestsResponseAmino): _7.QueryRequestsResponse;
                toAmino(message: _7.QueryRequestsResponse): _7.QueryRequestsResponseAmino;
                fromAminoMsg(object: _7.QueryRequestsResponseAminoMsg): _7.QueryRequestsResponse;
                fromProtoMsg(message: _7.QueryRequestsResponseProtoMsg): _7.QueryRequestsResponse;
                toProto(message: _7.QueryRequestsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryRequestsResponse): _7.QueryRequestsResponseProtoMsg;
            };
            GetTxWithProofResponse: {
                typeUrl: string;
                encode(message: _7.GetTxWithProofResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GetTxWithProofResponse;
                fromPartial(object: Partial<_7.GetTxWithProofResponse>): _7.GetTxWithProofResponse;
                fromAmino(object: _7.GetTxWithProofResponseAmino): _7.GetTxWithProofResponse;
                toAmino(message: _7.GetTxWithProofResponse): _7.GetTxWithProofResponseAmino;
                fromAminoMsg(object: _7.GetTxWithProofResponseAminoMsg): _7.GetTxWithProofResponse;
                fromProtoMsg(message: _7.GetTxWithProofResponseProtoMsg): _7.GetTxWithProofResponse;
                toProto(message: _7.GetTxWithProofResponse): Uint8Array;
                toProtoMsg(message: _7.GetTxWithProofResponse): _7.GetTxWithProofResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _6.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_6.MsgSubmitQueryResponse>): _6.MsgSubmitQueryResponse;
                fromAmino(object: _6.MsgSubmitQueryResponseAmino): _6.MsgSubmitQueryResponse;
                toAmino(message: _6.MsgSubmitQueryResponse): _6.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _6.MsgSubmitQueryResponseAminoMsg): _6.MsgSubmitQueryResponse;
                fromProtoMsg(message: _6.MsgSubmitQueryResponseProtoMsg): _6.MsgSubmitQueryResponse;
                toProto(message: _6.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _6.MsgSubmitQueryResponse): _6.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _6.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_6.MsgSubmitQueryResponseResponse>): _6.MsgSubmitQueryResponseResponse;
                fromAmino(_: _6.MsgSubmitQueryResponseResponseAmino): _6.MsgSubmitQueryResponseResponse;
                toAmino(_: _6.MsgSubmitQueryResponseResponse): _6.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _6.MsgSubmitQueryResponseResponseAminoMsg): _6.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _6.MsgSubmitQueryResponseResponseProtoMsg): _6.MsgSubmitQueryResponseResponse;
                toProto(message: _6.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _6.MsgSubmitQueryResponseResponse): _6.MsgSubmitQueryResponseResponseProtoMsg;
            };
            Query: {
                typeUrl: string;
                encode(message: _5.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Query;
                fromPartial(object: Partial<_5.Query>): _5.Query;
                fromAmino(object: _5.QueryAmino): _5.Query;
                toAmino(message: _5.Query): _5.QueryAmino;
                fromAminoMsg(object: _5.QueryAminoMsg): _5.Query;
                fromProtoMsg(message: _5.QueryProtoMsg): _5.Query;
                toProto(message: _5.Query): Uint8Array;
                toProtoMsg(message: _5.Query): _5.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _5.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.DataPoint;
                fromPartial(object: Partial<_5.DataPoint>): _5.DataPoint;
                fromAmino(object: _5.DataPointAmino): _5.DataPoint;
                toAmino(message: _5.DataPoint): _5.DataPointAmino;
                fromAminoMsg(object: _5.DataPointAminoMsg): _5.DataPoint;
                fromProtoMsg(message: _5.DataPointProtoMsg): _5.DataPoint;
                toProto(message: _5.DataPoint): Uint8Array;
                toProtoMsg(message: _5.DataPoint): _5.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
                fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
                toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
                fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
                fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
                toProto(message: _5.GenesisState): Uint8Array;
                toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            persistence: {
                interchainquery: {
                    v1beta1: _137.MsgClientImpl;
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
            persistence: {
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _1.QueryEpochsInfoRequest): Promise<_1.QueryEpochsInfoResponse>;
                        currentEpoch(request: _1.QueryCurrentEpochRequest): Promise<_1.QueryCurrentEpochResponse>;
                    };
                };
                halving: {
                    v1beta1: {
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
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
            persistence: {
                epochs: {
                    v1beta1: _133.LCDQueryClient;
                };
                halving: {
                    v1beta1: _134.LCDQueryClient;
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
