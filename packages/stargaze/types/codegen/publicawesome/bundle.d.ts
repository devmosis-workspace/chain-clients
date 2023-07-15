import * as _4 from "../stargaze/alloc/v1beta1/genesis";
import * as _5 from "../stargaze/alloc/v1beta1/params";
import * as _6 from "../stargaze/alloc/v1beta1/query";
import * as _7 from "../stargaze/alloc/v1beta1/tx";
import * as _8 from "../stargaze/claim/v1beta1/claim_record";
import * as _9 from "../stargaze/claim/v1beta1/genesis";
import * as _10 from "../stargaze/claim/v1beta1/params";
import * as _11 from "../stargaze/claim/v1beta1/query";
import * as _12 from "../stargaze/claim/v1beta1/tx";
import * as _13 from "../stargaze/cron/v1/genesis";
import * as _14 from "../stargaze/cron/v1/proposal";
import * as _15 from "../stargaze/cron/v1/query";
import * as _16 from "../stargaze/globalfee/v1/genesis";
import * as _17 from "../stargaze/globalfee/v1/globalfee";
import * as _18 from "../stargaze/globalfee/v1/proposal";
import * as _19 from "../stargaze/globalfee/v1/query";
import * as _20 from "../stargaze/globalfee/v1/tx";
import * as _135 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _136 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _137 from "../stargaze/cron/v1/query.rpc.Query";
import * as _138 from "../stargaze/globalfee/v1/query.rpc.Query";
import * as _139 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _140 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _141 from "../stargaze/globalfee/v1/tx.rpc.msg";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                MsgClientImpl: typeof _139.MsgClientImpl;
                QueryClientImpl: typeof _135.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _7.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        fundFairburnPool(value: _7.MsgFundFairburnPool): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _7.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _7.MsgCreateVestingAccount;
                        };
                        fundFairburnPool(value: _7.MsgFundFairburnPool): {
                            typeUrl: string;
                            value: _7.MsgFundFairburnPool;
                        };
                    };
                    fromJSON: {
                        createVestingAccount(value: any): {
                            typeUrl: string;
                            value: _7.MsgCreateVestingAccount;
                        };
                        fundFairburnPool(value: any): {
                            typeUrl: string;
                            value: _7.MsgFundFairburnPool;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _7.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _7.MsgCreateVestingAccount;
                        };
                        fundFairburnPool(value: _7.MsgFundFairburnPool): {
                            typeUrl: string;
                            value: _7.MsgFundFairburnPool;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _7.MsgCreateVestingAccount) => {
                            from_address: string;
                            to_address: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            start_time: string;
                            end_time: string;
                            delayed: boolean;
                        };
                        fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: {
                            from_address: string;
                            to_address: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            start_time: string;
                            end_time: string;
                            delayed: boolean;
                        }) => _7.MsgCreateVestingAccount;
                    };
                    "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool": {
                        aminoType: string;
                        toAmino: ({ sender, amount }: _7.MsgFundFairburnPool) => {
                            sender: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        };
                        fromAmino: ({ sender, amount }: {
                            sender: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }) => _7.MsgFundFairburnPool;
                    };
                };
                MsgCreateVestingAccount: {
                    encode(message: _7.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _7.MsgCreateVestingAccount;
                    fromPartial(object: Partial<_7.MsgCreateVestingAccount>): _7.MsgCreateVestingAccount;
                };
                MsgCreateVestingAccountResponse: {
                    encode(_: _7.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _7.MsgCreateVestingAccountResponse;
                    fromPartial(_: Partial<_7.MsgCreateVestingAccountResponse>): _7.MsgCreateVestingAccountResponse;
                };
                MsgFundFairburnPool: {
                    encode(message: _7.MsgFundFairburnPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _7.MsgFundFairburnPool;
                    fromPartial(object: Partial<_7.MsgFundFairburnPool>): _7.MsgFundFairburnPool;
                };
                MsgFundFairburnPoolResponse: {
                    encode(_: _7.MsgFundFairburnPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _7.MsgFundFairburnPoolResponse;
                    fromPartial(_: Partial<_7.MsgFundFairburnPoolResponse>): _7.MsgFundFairburnPoolResponse;
                };
                QueryParamsRequest: {
                    encode(_: _6.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _6.QueryParamsRequest;
                    fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _6.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _6.QueryParamsResponse;
                    fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
                };
                WeightedAddress: {
                    encode(message: _5.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _5.WeightedAddress;
                    fromPartial(object: Partial<_5.WeightedAddress>): _5.WeightedAddress;
                };
                DistributionProportions: {
                    encode(message: _5.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _5.DistributionProportions;
                    fromPartial(object: Partial<_5.DistributionProportions>): _5.DistributionProportions;
                };
                Params: {
                    encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _5.Params;
                    fromPartial(object: Partial<_5.Params>): _5.Params;
                };
                GenesisState: {
                    encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _4.GenesisState;
                    fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                MsgClientImpl: typeof _140.MsgClientImpl;
                QueryClientImpl: typeof _136.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    moduleAccountBalance(request?: _11.QueryModuleAccountBalanceRequest): Promise<_11.QueryModuleAccountBalanceResponse>;
                    params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                    claimRecord(request: _11.QueryClaimRecordRequest): Promise<_11.QueryClaimRecordResponse>;
                    claimableForAction(request: _11.QueryClaimableForActionRequest): Promise<_11.QueryClaimableForActionResponse>;
                    totalClaimable(request: _11.QueryTotalClaimableRequest): Promise<_11.QueryTotalClaimableResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _12.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _12.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _12.MsgInitialClaim): {
                            typeUrl: string;
                            value: _12.MsgInitialClaim;
                        };
                        claimFor(value: _12.MsgClaimFor): {
                            typeUrl: string;
                            value: _12.MsgClaimFor;
                        };
                    };
                    fromJSON: {
                        initialClaim(value: any): {
                            typeUrl: string;
                            value: _12.MsgInitialClaim;
                        };
                        claimFor(value: any): {
                            typeUrl: string;
                            value: _12.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _12.MsgInitialClaim): {
                            typeUrl: string;
                            value: _12.MsgInitialClaim;
                        };
                        claimFor(value: _12.MsgClaimFor): {
                            typeUrl: string;
                            value: _12.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: ({ sender }: _12.MsgInitialClaim) => {
                            sender: string;
                        };
                        fromAmino: ({ sender }: {
                            sender: string;
                        }) => _12.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: ({ sender, address, action }: _12.MsgClaimFor) => {
                            sender: string;
                            address: string;
                            action: number;
                        };
                        fromAmino: ({ sender, address, action }: {
                            sender: string;
                            address: string;
                            action: number;
                        }) => _12.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    encode(message: _12.MsgInitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _12.MsgInitialClaim;
                    fromPartial(object: Partial<_12.MsgInitialClaim>): _12.MsgInitialClaim;
                };
                MsgInitialClaimResponse: {
                    encode(message: _12.MsgInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _12.MsgInitialClaimResponse;
                    fromPartial(object: Partial<_12.MsgInitialClaimResponse>): _12.MsgInitialClaimResponse;
                };
                MsgClaimFor: {
                    encode(message: _12.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _12.MsgClaimFor;
                    fromPartial(object: Partial<_12.MsgClaimFor>): _12.MsgClaimFor;
                };
                MsgClaimForResponse: {
                    encode(message: _12.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _12.MsgClaimForResponse;
                    fromPartial(object: Partial<_12.MsgClaimForResponse>): _12.MsgClaimForResponse;
                };
                QueryModuleAccountBalanceRequest: {
                    encode(_: _11.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _11.QueryModuleAccountBalanceRequest;
                    fromPartial(_: Partial<_11.QueryModuleAccountBalanceRequest>): _11.QueryModuleAccountBalanceRequest;
                };
                QueryModuleAccountBalanceResponse: {
                    encode(message: _11.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _11.QueryModuleAccountBalanceResponse;
                    fromPartial(object: Partial<_11.QueryModuleAccountBalanceResponse>): _11.QueryModuleAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _11.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _11.QueryParamsRequest;
                    fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _11.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _11.QueryParamsResponse;
                    fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _11.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _11.QueryClaimRecordRequest;
                    fromPartial(object: Partial<_11.QueryClaimRecordRequest>): _11.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _11.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _11.QueryClaimRecordResponse;
                    fromPartial(object: Partial<_11.QueryClaimRecordResponse>): _11.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _11.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _11.QueryClaimableForActionRequest;
                    fromPartial(object: Partial<_11.QueryClaimableForActionRequest>): _11.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _11.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _11.QueryClaimableForActionResponse;
                    fromPartial(object: Partial<_11.QueryClaimableForActionResponse>): _11.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _11.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _11.QueryTotalClaimableRequest;
                    fromPartial(object: Partial<_11.QueryTotalClaimableRequest>): _11.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _11.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _11.QueryTotalClaimableResponse;
                    fromPartial(object: Partial<_11.QueryTotalClaimableResponse>): _11.QueryTotalClaimableResponse;
                };
                ClaimAuthorization: {
                    encode(message: _10.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _10.ClaimAuthorization;
                    fromPartial(object: Partial<_10.ClaimAuthorization>): _10.ClaimAuthorization;
                };
                Params: {
                    encode(message: _10.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _10.Params;
                    fromPartial(object: Partial<_10.Params>): _10.Params;
                };
                GenesisState: {
                    encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _9.GenesisState;
                    fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
                };
                actionFromJSON(object: any): _8.Action;
                actionToJSON(object: _8.Action): string;
                Action: typeof _8.Action;
                ActionSDKType: typeof _8.Action;
                ClaimRecord: {
                    encode(message: _8.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _8.ClaimRecord;
                    fromPartial(object: Partial<_8.ClaimRecord>): _8.ClaimRecord;
                };
            };
        }
        namespace cron {
            const v1: {
                QueryClientImpl: typeof _137.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    listPrivileged(request?: _15.QueryListPrivilegedRequest): Promise<_15.QueryListPrivilegedResponse>;
                };
                QueryListPrivilegedRequest: {
                    encode(_: _15.QueryListPrivilegedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _15.QueryListPrivilegedRequest;
                    fromPartial(_: Partial<_15.QueryListPrivilegedRequest>): _15.QueryListPrivilegedRequest;
                };
                QueryListPrivilegedResponse: {
                    encode(message: _15.QueryListPrivilegedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _15.QueryListPrivilegedResponse;
                    fromPartial(object: Partial<_15.QueryListPrivilegedResponse>): _15.QueryListPrivilegedResponse;
                };
                PromoteToPrivilegedContractProposal: {
                    encode(message: _14.PromoteToPrivilegedContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.PromoteToPrivilegedContractProposal;
                    fromPartial(object: Partial<_14.PromoteToPrivilegedContractProposal>): _14.PromoteToPrivilegedContractProposal;
                };
                DemotePrivilegedContractProposal: {
                    encode(message: _14.DemotePrivilegedContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.DemotePrivilegedContractProposal;
                    fromPartial(object: Partial<_14.DemotePrivilegedContractProposal>): _14.DemotePrivilegedContractProposal;
                };
                GenesisState: {
                    encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _13.GenesisState;
                    fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                };
            };
        }
        namespace globalfee {
            const v1: {
                MsgClientImpl: typeof _141.MsgClientImpl;
                QueryClientImpl: typeof _138.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    codeAuthorization(request: _19.QueryCodeAuthorizationRequest): Promise<_19.QueryCodeAuthorizationResponse>;
                    contractAuthorization(request: _19.QueryContractAuthorizationRequest): Promise<_19.QueryContractAuthorizationResponse>;
                    params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                    authorizations(request?: _19.QueryAuthorizationsRequest): Promise<_19.QueryAuthorizationsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        setCodeAuthorization(value: _20.MsgSetCodeAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeCodeAuthorization(value: _20.MsgRemoveCodeAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        setContractAuthorization(value: _20.MsgSetContractAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeContractAuthorization(value: _20.MsgRemoveContractAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        setCodeAuthorization(value: _20.MsgSetCodeAuthorization): {
                            typeUrl: string;
                            value: _20.MsgSetCodeAuthorization;
                        };
                        removeCodeAuthorization(value: _20.MsgRemoveCodeAuthorization): {
                            typeUrl: string;
                            value: _20.MsgRemoveCodeAuthorization;
                        };
                        setContractAuthorization(value: _20.MsgSetContractAuthorization): {
                            typeUrl: string;
                            value: _20.MsgSetContractAuthorization;
                        };
                        removeContractAuthorization(value: _20.MsgRemoveContractAuthorization): {
                            typeUrl: string;
                            value: _20.MsgRemoveContractAuthorization;
                        };
                    };
                    fromJSON: {
                        setCodeAuthorization(value: any): {
                            typeUrl: string;
                            value: _20.MsgSetCodeAuthorization;
                        };
                        removeCodeAuthorization(value: any): {
                            typeUrl: string;
                            value: _20.MsgRemoveCodeAuthorization;
                        };
                        setContractAuthorization(value: any): {
                            typeUrl: string;
                            value: _20.MsgSetContractAuthorization;
                        };
                        removeContractAuthorization(value: any): {
                            typeUrl: string;
                            value: _20.MsgRemoveContractAuthorization;
                        };
                    };
                    fromPartial: {
                        setCodeAuthorization(value: _20.MsgSetCodeAuthorization): {
                            typeUrl: string;
                            value: _20.MsgSetCodeAuthorization;
                        };
                        removeCodeAuthorization(value: _20.MsgRemoveCodeAuthorization): {
                            typeUrl: string;
                            value: _20.MsgRemoveCodeAuthorization;
                        };
                        setContractAuthorization(value: _20.MsgSetContractAuthorization): {
                            typeUrl: string;
                            value: _20.MsgSetContractAuthorization;
                        };
                        removeContractAuthorization(value: _20.MsgRemoveContractAuthorization): {
                            typeUrl: string;
                            value: _20.MsgRemoveContractAuthorization;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization": {
                        aminoType: string;
                        toAmino: ({ sender, codeAuthorization }: _20.MsgSetCodeAuthorization) => {
                            sender: string;
                            code_authorization: {
                                code_id: string;
                                methods: string[];
                            };
                        };
                        fromAmino: ({ sender, code_authorization }: {
                            sender: string;
                            code_authorization: {
                                code_id: string;
                                methods: string[];
                            };
                        }) => _20.MsgSetCodeAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization": {
                        aminoType: string;
                        toAmino: ({ sender, codeId }: _20.MsgRemoveCodeAuthorization) => {
                            sender: string;
                            code_id: string;
                        };
                        fromAmino: ({ sender, code_id }: {
                            sender: string;
                            code_id: string;
                        }) => _20.MsgRemoveCodeAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization": {
                        aminoType: string;
                        toAmino: ({ sender, contractAuthorization }: _20.MsgSetContractAuthorization) => {
                            sender: string;
                            contract_authorization: {
                                contract_address: string;
                                methods: string[];
                            };
                        };
                        fromAmino: ({ sender, contract_authorization }: {
                            sender: string;
                            contract_authorization: {
                                contract_address: string;
                                methods: string[];
                            };
                        }) => _20.MsgSetContractAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization": {
                        aminoType: string;
                        toAmino: ({ sender, contractAddress }: _20.MsgRemoveContractAuthorization) => {
                            sender: string;
                            contract_address: string;
                        };
                        fromAmino: ({ sender, contract_address }: {
                            sender: string;
                            contract_address: string;
                        }) => _20.MsgRemoveContractAuthorization;
                    };
                };
                MsgSetCodeAuthorization: {
                    encode(message: _20.MsgSetCodeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.MsgSetCodeAuthorization;
                    fromPartial(object: Partial<_20.MsgSetCodeAuthorization>): _20.MsgSetCodeAuthorization;
                };
                MsgSetCodeAuthorizationResponse: {
                    encode(_: _20.MsgSetCodeAuthorizationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.MsgSetCodeAuthorizationResponse;
                    fromPartial(_: Partial<_20.MsgSetCodeAuthorizationResponse>): _20.MsgSetCodeAuthorizationResponse;
                };
                MsgRemoveCodeAuthorization: {
                    encode(message: _20.MsgRemoveCodeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.MsgRemoveCodeAuthorization;
                    fromPartial(object: Partial<_20.MsgRemoveCodeAuthorization>): _20.MsgRemoveCodeAuthorization;
                };
                MsgRemoveCodeAuthorizationResponse: {
                    encode(_: _20.MsgRemoveCodeAuthorizationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.MsgRemoveCodeAuthorizationResponse;
                    fromPartial(_: Partial<_20.MsgRemoveCodeAuthorizationResponse>): _20.MsgRemoveCodeAuthorizationResponse;
                };
                MsgSetContractAuthorization: {
                    encode(message: _20.MsgSetContractAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.MsgSetContractAuthorization;
                    fromPartial(object: Partial<_20.MsgSetContractAuthorization>): _20.MsgSetContractAuthorization;
                };
                MsgSetContractAuthorizationResponse: {
                    encode(_: _20.MsgSetContractAuthorizationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.MsgSetContractAuthorizationResponse;
                    fromPartial(_: Partial<_20.MsgSetContractAuthorizationResponse>): _20.MsgSetContractAuthorizationResponse;
                };
                MsgRemoveContractAuthorization: {
                    encode(message: _20.MsgRemoveContractAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _20.MsgRemoveContractAuthorization;
                    fromPartial(object: Partial<_20.MsgRemoveContractAuthorization>): _20.MsgRemoveContractAuthorization;
                };
                MsgRemoveContractAuthorizationResponse: {
                    encode(_: _20.MsgRemoveContractAuthorizationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _20.MsgRemoveContractAuthorizationResponse;
                    fromPartial(_: Partial<_20.MsgRemoveContractAuthorizationResponse>): _20.MsgRemoveContractAuthorizationResponse;
                };
                QueryCodeAuthorizationRequest: {
                    encode(message: _19.QueryCodeAuthorizationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.QueryCodeAuthorizationRequest;
                    fromPartial(object: Partial<_19.QueryCodeAuthorizationRequest>): _19.QueryCodeAuthorizationRequest;
                };
                QueryCodeAuthorizationResponse: {
                    encode(message: _19.QueryCodeAuthorizationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.QueryCodeAuthorizationResponse;
                    fromPartial(object: Partial<_19.QueryCodeAuthorizationResponse>): _19.QueryCodeAuthorizationResponse;
                };
                QueryContractAuthorizationRequest: {
                    encode(message: _19.QueryContractAuthorizationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.QueryContractAuthorizationRequest;
                    fromPartial(object: Partial<_19.QueryContractAuthorizationRequest>): _19.QueryContractAuthorizationRequest;
                };
                QueryContractAuthorizationResponse: {
                    encode(message: _19.QueryContractAuthorizationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.QueryContractAuthorizationResponse;
                    fromPartial(object: Partial<_19.QueryContractAuthorizationResponse>): _19.QueryContractAuthorizationResponse;
                };
                QueryParamsRequest: {
                    encode(_: _19.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _19.QueryParamsRequest;
                    fromPartial(_: Partial<_19.QueryParamsRequest>): _19.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _19.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.QueryParamsResponse;
                    fromPartial(object: Partial<_19.QueryParamsResponse>): _19.QueryParamsResponse;
                };
                QueryAuthorizationsRequest: {
                    encode(_: _19.QueryAuthorizationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _19.QueryAuthorizationsRequest;
                    fromPartial(_: Partial<_19.QueryAuthorizationsRequest>): _19.QueryAuthorizationsRequest;
                };
                QueryAuthorizationsResponse: {
                    encode(message: _19.QueryAuthorizationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _19.QueryAuthorizationsResponse;
                    fromPartial(object: Partial<_19.QueryAuthorizationsResponse>): _19.QueryAuthorizationsResponse;
                };
                SetCodeAuthorizationProposal: {
                    encode(message: _18.SetCodeAuthorizationProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.SetCodeAuthorizationProposal;
                    fromPartial(object: Partial<_18.SetCodeAuthorizationProposal>): _18.SetCodeAuthorizationProposal;
                };
                RemoveCodeAuthorizationProposal: {
                    encode(message: _18.RemoveCodeAuthorizationProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.RemoveCodeAuthorizationProposal;
                    fromPartial(object: Partial<_18.RemoveCodeAuthorizationProposal>): _18.RemoveCodeAuthorizationProposal;
                };
                SetContractAuthorizationProposal: {
                    encode(message: _18.SetContractAuthorizationProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.SetContractAuthorizationProposal;
                    fromPartial(object: Partial<_18.SetContractAuthorizationProposal>): _18.SetContractAuthorizationProposal;
                };
                RemoveContractAuthorizationProposal: {
                    encode(message: _18.RemoveContractAuthorizationProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _18.RemoveContractAuthorizationProposal;
                    fromPartial(object: Partial<_18.RemoveContractAuthorizationProposal>): _18.RemoveContractAuthorizationProposal;
                };
                Params: {
                    encode(message: _17.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.Params;
                    fromPartial(object: Partial<_17.Params>): _17.Params;
                };
                CodeAuthorization: {
                    encode(message: _17.CodeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.CodeAuthorization;
                    fromPartial(object: Partial<_17.CodeAuthorization>): _17.CodeAuthorization;
                };
                ContractAuthorization: {
                    encode(message: _17.ContractAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _17.ContractAuthorization;
                    fromPartial(object: Partial<_17.ContractAuthorization>): _17.ContractAuthorization;
                };
                GenesisState: {
                    encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _16.GenesisState;
                    fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _139.MsgClientImpl;
                    };
                    claim: {
                        v1beta1: _140.MsgClientImpl;
                    };
                    globalfee: {
                        v1: _141.MsgClientImpl;
                    };
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
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: {
                            params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        };
                    };
                    claim: {
                        v1beta1: {
                            moduleAccountBalance(request?: _11.QueryModuleAccountBalanceRequest): Promise<_11.QueryModuleAccountBalanceResponse>;
                            params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                            claimRecord(request: _11.QueryClaimRecordRequest): Promise<_11.QueryClaimRecordResponse>;
                            claimableForAction(request: _11.QueryClaimableForActionRequest): Promise<_11.QueryClaimableForActionResponse>;
                            totalClaimable(request: _11.QueryTotalClaimableRequest): Promise<_11.QueryTotalClaimableResponse>;
                        };
                    };
                    cron: {
                        v1: {
                            listPrivileged(request?: _15.QueryListPrivilegedRequest): Promise<_15.QueryListPrivilegedResponse>;
                        };
                    };
                    globalfee: {
                        v1: {
                            codeAuthorization(request: _19.QueryCodeAuthorizationRequest): Promise<_19.QueryCodeAuthorizationResponse>;
                            contractAuthorization(request: _19.QueryContractAuthorizationRequest): Promise<_19.QueryContractAuthorizationResponse>;
                            params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                            authorizations(request?: _19.QueryAuthorizationsRequest): Promise<_19.QueryAuthorizationsResponse>;
                        };
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
    };
}
