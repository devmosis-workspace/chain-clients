import * as _20 from "../iov/offchain/v1alpha1/offchain";
import * as _21 from "./auth/v1beta1/auth";
import * as _22 from "./auth/v1beta1/genesis";
import * as _23 from "./auth/v1beta1/query";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/v1beta1/authz";
import * as _30 from "./bank/v1beta1/bank";
import * as _31 from "./bank/v1beta1/genesis";
import * as _32 from "./bank/v1beta1/query";
import * as _33 from "./bank/v1beta1/tx";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/kv/v1beta1/kv";
import * as _36 from "./base/query/v1beta1/pagination";
import * as _37 from "./base/reflection/v1beta1/reflection";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/store/v1beta1/snapshot";
import * as _43 from "./base/tendermint/v1beta1/query";
import * as _44 from "./base/v1beta1/coin";
import * as _45 from "./capability/v1beta1/capability";
import * as _46 from "./capability/v1beta1/genesis";
import * as _47 from "./crisis/v1beta1/genesis";
import * as _48 from "./crisis/v1beta1/tx";
import * as _49 from "./crypto/ed25519/keys";
import * as _50 from "./crypto/multisig/keys";
import * as _51 from "./crypto/secp256k1/keys";
import * as _52 from "./crypto/secp256r1/keys";
import * as _53 from "./distribution/v1beta1/distribution";
import * as _54 from "./distribution/v1beta1/genesis";
import * as _55 from "./distribution/v1beta1/query";
import * as _56 from "./distribution/v1beta1/tx";
import * as _57 from "./evidence/v1beta1/evidence";
import * as _58 from "./evidence/v1beta1/genesis";
import * as _59 from "./evidence/v1beta1/query";
import * as _60 from "./evidence/v1beta1/tx";
import * as _61 from "./feegrant/v1beta1/feegrant";
import * as _62 from "./feegrant/v1beta1/genesis";
import * as _63 from "./feegrant/v1beta1/query";
import * as _64 from "./feegrant/v1beta1/tx";
import * as _65 from "./genutil/v1beta1/genesis";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./mint/v1beta1/genesis";
import * as _71 from "./mint/v1beta1/mint";
import * as _72 from "./mint/v1beta1/query";
import * as _73 from "./params/v1beta1/params";
import * as _74 from "./params/v1beta1/query";
import * as _75 from "./slashing/v1beta1/genesis";
import * as _76 from "./slashing/v1beta1/query";
import * as _77 from "./slashing/v1beta1/slashing";
import * as _78 from "./slashing/v1beta1/tx";
import * as _79 from "./staking/v1beta1/authz";
import * as _80 from "./staking/v1beta1/genesis";
import * as _81 from "./staking/v1beta1/query";
import * as _82 from "./staking/v1beta1/staking";
import * as _83 from "./staking/v1beta1/tx";
import * as _84 from "./tx/signing/v1beta1/signing";
import * as _85 from "./tx/v1beta1/service";
import * as _86 from "./tx/v1beta1/tx";
import * as _87 from "./upgrade/v1beta1/query";
import * as _88 from "./upgrade/v1beta1/upgrade";
import * as _89 from "./vesting/v1beta1/tx";
import * as _90 from "./vesting/v1beta1/vesting";
import * as _171 from "./auth/v1beta1/query.lcd";
import * as _172 from "./authz/v1beta1/query.lcd";
import * as _173 from "./bank/v1beta1/query.lcd";
import * as _174 from "./base/tendermint/v1beta1/query.lcd";
import * as _175 from "./distribution/v1beta1/query.lcd";
import * as _176 from "./evidence/v1beta1/query.lcd";
import * as _177 from "./feegrant/v1beta1/query.lcd";
import * as _178 from "./gov/v1beta1/query.lcd";
import * as _179 from "./mint/v1beta1/query.lcd";
import * as _180 from "./params/v1beta1/query.lcd";
import * as _181 from "./slashing/v1beta1/query.lcd";
import * as _182 from "./staking/v1beta1/query.lcd";
import * as _183 from "./tx/v1beta1/service.lcd";
import * as _184 from "./upgrade/v1beta1/query.lcd";
import * as _185 from "./auth/v1beta1/query.rpc.Query";
import * as _186 from "./authz/v1beta1/query.rpc.Query";
import * as _187 from "./bank/v1beta1/query.rpc.Query";
import * as _188 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _189 from "./distribution/v1beta1/query.rpc.Query";
import * as _190 from "./evidence/v1beta1/query.rpc.Query";
import * as _191 from "./feegrant/v1beta1/query.rpc.Query";
import * as _192 from "./gov/v1beta1/query.rpc.Query";
import * as _193 from "./mint/v1beta1/query.rpc.Query";
import * as _194 from "./params/v1beta1/query.rpc.Query";
import * as _195 from "./slashing/v1beta1/query.rpc.Query";
import * as _196 from "./staking/v1beta1/query.rpc.Query";
import * as _197 from "./tx/v1beta1/service.rpc.Service";
import * as _198 from "./upgrade/v1beta1/query.rpc.Query";
import * as _199 from "./authz/v1beta1/tx.rpc.msg";
import * as _200 from "./bank/v1beta1/tx.rpc.msg";
import * as _201 from "./crisis/v1beta1/tx.rpc.msg";
import * as _202 from "./distribution/v1beta1/tx.rpc.msg";
import * as _203 from "./evidence/v1beta1/tx.rpc.msg";
import * as _204 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _205 from "./gov/v1beta1/tx.rpc.msg";
import * as _206 from "./slashing/v1beta1/tx.rpc.msg";
import * as _207 from "./staking/v1beta1/tx.rpc.msg";
import * as _208 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace offchain {
        const v1alpha1: {
            MsgSignData: {
                encode(message: _20.MsgSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgSignData;
                fromPartial(object: Partial<_20.MsgSignData>): _20.MsgSignData;
            };
            ListOfMsgSignData: {
                encode(message: _20.ListOfMsgSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.ListOfMsgSignData;
                fromPartial(object: Partial<_20.ListOfMsgSignData>): _20.ListOfMsgSignData;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _23.QueryAccountsRequest): Promise<_23.QueryAccountsResponse>;
                account(request: _23.QueryAccountRequest): Promise<_23.QueryAccountResponse>;
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _23.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountsRequest;
                fromPartial(object: Partial<_23.QueryAccountsRequest>): _23.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _23.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountsResponse;
                fromPartial(object: Partial<_23.QueryAccountsResponse>): _23.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _23.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountRequest;
                fromPartial(object: Partial<_23.QueryAccountRequest>): _23.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _23.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountResponse;
                fromPartial(object: Partial<_23.QueryAccountResponse>): _23.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _23.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryParamsRequest;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _23.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryParamsResponse;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _22.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.GenesisState;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
            };
            BaseAccount: {
                encode(message: _21.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.BaseAccount;
                fromPartial(object: Partial<_21.BaseAccount>): _21.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _21.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.ModuleAccount;
                fromPartial(object: Partial<_21.ModuleAccount>): _21.ModuleAccount;
            };
            Params: {
                encode(message: _21.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _27.QueryGrantsRequest): Promise<_27.QueryGrantsResponse>;
                granterGrants(request: _27.QueryGranterGrantsRequest): Promise<_27.QueryGranterGrantsResponse>;
                granteeGrants(request: _27.QueryGranteeGrantsRequest): Promise<_27.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _28.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _28.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _28.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _28.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _28.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _28.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _28.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgGrant;
                fromPartial(object: Partial<_28.MsgGrant>): _28.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _28.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgExecResponse;
                fromPartial(object: Partial<_28.MsgExecResponse>): _28.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _28.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgExec;
                fromPartial(object: Partial<_28.MsgExec>): _28.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _28.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.MsgGrantResponse;
                fromPartial(_: Partial<_28.MsgGrantResponse>): _28.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _28.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgRevoke;
                fromPartial(object: Partial<_28.MsgRevoke>): _28.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _28.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.MsgRevokeResponse;
                fromPartial(_: Partial<_28.MsgRevokeResponse>): _28.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _27.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGrantsRequest;
                fromPartial(object: Partial<_27.QueryGrantsRequest>): _27.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _27.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGrantsResponse;
                fromPartial(object: Partial<_27.QueryGrantsResponse>): _27.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _27.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_27.QueryGranterGrantsRequest>): _27.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _27.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_27.QueryGranterGrantsResponse>): _27.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _27.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_27.QueryGranteeGrantsRequest>): _27.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _27.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_27.QueryGranteeGrantsResponse>): _27.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
            };
            EventGrant: {
                encode(message: _25.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.EventGrant;
                fromPartial(object: Partial<_25.EventGrant>): _25.EventGrant;
            };
            EventRevoke: {
                encode(message: _25.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.EventRevoke;
                fromPartial(object: Partial<_25.EventRevoke>): _25.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _24.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.GenericAuthorization;
                fromPartial(object: Partial<_24.GenericAuthorization>): _24.GenericAuthorization;
            };
            Grant: {
                encode(message: _24.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.Grant;
                fromPartial(object: Partial<_24.Grant>): _24.Grant;
            };
            GrantAuthorization: {
                encode(message: _24.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.GrantAuthorization;
                fromPartial(object: Partial<_24.GrantAuthorization>): _24.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _33.MsgSend): {
                        typeUrl: string;
                        value: _33.MsgSend;
                    };
                    multiSend(value: _33.MsgMultiSend): {
                        typeUrl: string;
                        value: _33.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _33.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _33.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _33.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _33.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _33.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgSend;
                fromPartial(object: Partial<_33.MsgSend>): _33.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _33.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgSendResponse;
                fromPartial(_: Partial<_33.MsgSendResponse>): _33.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _33.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgMultiSend;
                fromPartial(object: Partial<_33.MsgMultiSend>): _33.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _33.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgMultiSendResponse;
                fromPartial(_: Partial<_33.MsgMultiSendResponse>): _33.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _32.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryBalanceRequest;
                fromPartial(object: Partial<_32.QueryBalanceRequest>): _32.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _32.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryBalanceResponse;
                fromPartial(object: Partial<_32.QueryBalanceResponse>): _32.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _32.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAllBalancesRequest;
                fromPartial(object: Partial<_32.QueryAllBalancesRequest>): _32.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _32.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryAllBalancesResponse;
                fromPartial(object: Partial<_32.QueryAllBalancesResponse>): _32.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _32.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_32.QuerySpendableBalancesRequest>): _32.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _32.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_32.QuerySpendableBalancesResponse>): _32.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _32.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_32.QueryTotalSupplyRequest>): _32.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _32.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_32.QueryTotalSupplyResponse>): _32.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _32.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QuerySupplyOfRequest;
                fromPartial(object: Partial<_32.QuerySupplyOfRequest>): _32.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _32.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QuerySupplyOfResponse;
                fromPartial(object: Partial<_32.QuerySupplyOfResponse>): _32.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QueryParamsRequest;
                fromPartial(_: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryParamsResponse;
                fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _32.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_32.QueryDenomsMetadataRequest>): _32.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _32.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_32.QueryDenomsMetadataResponse>): _32.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _32.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_32.QueryDenomMetadataRequest>): _32.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _32.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_32.QueryDenomMetadataResponse>): _32.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
            Balance: {
                encode(message: _31.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.Balance;
                fromPartial(object: Partial<_31.Balance>): _31.Balance;
            };
            Params: {
                encode(message: _30.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
            };
            SendEnabled: {
                encode(message: _30.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.SendEnabled;
                fromPartial(object: Partial<_30.SendEnabled>): _30.SendEnabled;
            };
            Input: {
                encode(message: _30.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Input;
                fromPartial(object: Partial<_30.Input>): _30.Input;
            };
            Output: {
                encode(message: _30.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Output;
                fromPartial(object: Partial<_30.Output>): _30.Output;
            };
            Supply: {
                encode(message: _30.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Supply;
                fromPartial(object: Partial<_30.Supply>): _30.Supply;
            };
            DenomUnit: {
                encode(message: _30.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.DenomUnit;
                fromPartial(object: Partial<_30.DenomUnit>): _30.DenomUnit;
            };
            Metadata: {
                encode(message: _30.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Metadata;
                fromPartial(object: Partial<_30.Metadata>): _30.Metadata;
            };
            SendAuthorization: {
                encode(message: _29.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.SendAuthorization;
                fromPartial(object: Partial<_29.SendAuthorization>): _29.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _34.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.TxResponse;
                    fromPartial(object: Partial<_34.TxResponse>): _34.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _34.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.ABCIMessageLog;
                    fromPartial(object: Partial<_34.ABCIMessageLog>): _34.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _34.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.StringEvent;
                    fromPartial(object: Partial<_34.StringEvent>): _34.StringEvent;
                };
                Attribute: {
                    encode(message: _34.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Attribute;
                    fromPartial(object: Partial<_34.Attribute>): _34.Attribute;
                };
                GasInfo: {
                    encode(message: _34.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.GasInfo;
                    fromPartial(object: Partial<_34.GasInfo>): _34.GasInfo;
                };
                Result: {
                    encode(message: _34.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Result;
                    fromPartial(object: Partial<_34.Result>): _34.Result;
                };
                SimulationResponse: {
                    encode(message: _34.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SimulationResponse;
                    fromPartial(object: Partial<_34.SimulationResponse>): _34.SimulationResponse;
                };
                MsgData: {
                    encode(message: _34.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.MsgData;
                    fromPartial(object: Partial<_34.MsgData>): _34.MsgData;
                };
                TxMsgData: {
                    encode(message: _34.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.TxMsgData;
                    fromPartial(object: Partial<_34.TxMsgData>): _34.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _34.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SearchTxsResult;
                    fromPartial(object: Partial<_34.SearchTxsResult>): _34.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _35.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.Pairs;
                    fromPartial(object: Partial<_35.Pairs>): _35.Pairs;
                };
                Pair: {
                    encode(message: _35.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.Pair;
                    fromPartial(object: Partial<_35.Pair>): _35.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _36.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.PageRequest;
                    fromPartial(object: Partial<_36.PageRequest>): _36.PageRequest;
                };
                PageResponse: {
                    encode(message: _36.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.PageResponse;
                    fromPartial(object: Partial<_36.PageResponse>): _36.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _37.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _37.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_37.ListAllInterfacesRequest>): _37.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _37.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_37.ListAllInterfacesResponse>): _37.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _37.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.ListImplementationsRequest;
                    fromPartial(object: Partial<_37.ListImplementationsRequest>): _37.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _37.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.ListImplementationsResponse;
                    fromPartial(object: Partial<_37.ListImplementationsResponse>): _37.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _38.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.AppDescriptor;
                    fromPartial(object: Partial<_38.AppDescriptor>): _38.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _38.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.TxDescriptor;
                    fromPartial(object: Partial<_38.TxDescriptor>): _38.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _38.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.AuthnDescriptor;
                    fromPartial(object: Partial<_38.AuthnDescriptor>): _38.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _38.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.SigningModeDescriptor;
                    fromPartial(object: Partial<_38.SigningModeDescriptor>): _38.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _38.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.ChainDescriptor;
                    fromPartial(object: Partial<_38.ChainDescriptor>): _38.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _38.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.CodecDescriptor;
                    fromPartial(object: Partial<_38.CodecDescriptor>): _38.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _38.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.InterfaceDescriptor;
                    fromPartial(object: Partial<_38.InterfaceDescriptor>): _38.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _38.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_38.InterfaceImplementerDescriptor>): _38.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _38.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_38.InterfaceAcceptingMessageDescriptor>): _38.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _38.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.ConfigurationDescriptor;
                    fromPartial(object: Partial<_38.ConfigurationDescriptor>): _38.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _38.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.MsgDescriptor;
                    fromPartial(object: Partial<_38.MsgDescriptor>): _38.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _38.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_38.GetAuthnDescriptorRequest>): _38.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _38.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_38.GetAuthnDescriptorResponse>): _38.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _38.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_38.GetChainDescriptorRequest>): _38.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _38.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_38.GetChainDescriptorResponse>): _38.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _38.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_38.GetCodecDescriptorRequest>): _38.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _38.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_38.GetCodecDescriptorResponse>): _38.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _38.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_38.GetConfigurationDescriptorRequest>): _38.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _38.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_38.GetConfigurationDescriptorResponse>): _38.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _38.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_38.GetQueryServicesDescriptorRequest>): _38.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _38.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_38.GetQueryServicesDescriptorResponse>): _38.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _38.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_38.GetTxDescriptorRequest>): _38.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _38.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_38.GetTxDescriptorResponse>): _38.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _38.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.QueryServicesDescriptor;
                    fromPartial(object: Partial<_38.QueryServicesDescriptor>): _38.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _38.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.QueryServiceDescriptor;
                    fromPartial(object: Partial<_38.QueryServiceDescriptor>): _38.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _38.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.QueryMethodDescriptor;
                    fromPartial(object: Partial<_38.QueryMethodDescriptor>): _38.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _39.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.Snapshot;
                    fromPartial(object: Partial<_39.Snapshot>): _39.Snapshot;
                };
                Metadata: {
                    encode(message: _39.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.Metadata;
                    fromPartial(object: Partial<_39.Metadata>): _39.Metadata;
                };
                SnapshotItem: {
                    encode(message: _39.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotItem;
                    fromPartial(object: Partial<_39.SnapshotItem>): _39.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _39.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotStoreItem;
                    fromPartial(object: Partial<_39.SnapshotStoreItem>): _39.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _39.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotIAVLItem;
                    fromPartial(object: Partial<_39.SnapshotIAVLItem>): _39.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _39.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_39.SnapshotExtensionMeta>): _39.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _39.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_39.SnapshotExtensionPayload>): _39.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    encode(message: _42.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.SnapshotItem;
                    fromPartial(object: Partial<_42.SnapshotItem>): _42.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _42.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.SnapshotStoreItem;
                    fromPartial(object: Partial<_42.SnapshotStoreItem>): _42.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _42.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.SnapshotIAVLItem;
                    fromPartial(object: Partial<_42.SnapshotIAVLItem>): _42.SnapshotIAVLItem;
                };
                StoreKVPair: {
                    encode(message: _41.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.StoreKVPair;
                    fromPartial(object: Partial<_41.StoreKVPair>): _41.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _40.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.CommitInfo;
                    fromPartial(object: Partial<_40.CommitInfo>): _40.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _40.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.StoreInfo;
                    fromPartial(object: Partial<_40.StoreInfo>): _40.StoreInfo;
                };
                CommitID: {
                    encode(message: _40.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.CommitID;
                    fromPartial(object: Partial<_40.CommitID>): _40.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _188.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                    getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                    getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                    getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _174.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _43.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightRequest>): _43.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _43.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_43.GetValidatorSetByHeightResponse>): _43.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _43.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetRequest>): _43.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _43.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_43.GetLatestValidatorSetResponse>): _43.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _43.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Validator;
                    fromPartial(object: Partial<_43.Validator>): _43.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _43.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_43.GetBlockByHeightRequest>): _43.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _43.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_43.GetBlockByHeightResponse>): _43.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _43.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _43.GetLatestBlockRequest;
                    fromPartial(_: Partial<_43.GetLatestBlockRequest>): _43.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _43.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetLatestBlockResponse;
                    fromPartial(object: Partial<_43.GetLatestBlockResponse>): _43.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _43.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _43.GetSyncingRequest;
                    fromPartial(_: Partial<_43.GetSyncingRequest>): _43.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _43.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetSyncingResponse;
                    fromPartial(object: Partial<_43.GetSyncingResponse>): _43.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _43.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _43.GetNodeInfoRequest;
                    fromPartial(_: Partial<_43.GetNodeInfoRequest>): _43.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _43.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.GetNodeInfoResponse;
                    fromPartial(object: Partial<_43.GetNodeInfoResponse>): _43.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _43.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.VersionInfo;
                    fromPartial(object: Partial<_43.VersionInfo>): _43.VersionInfo;
                };
                Module: {
                    encode(message: _43.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Module;
                    fromPartial(object: Partial<_43.Module>): _43.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _44.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.Coin;
                fromPartial(object: Partial<_44.Coin>): _44.Coin;
            };
            DecCoin: {
                encode(message: _44.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.DecCoin;
                fromPartial(object: Partial<_44.DecCoin>): _44.DecCoin;
            };
            IntProto: {
                encode(message: _44.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.IntProto;
                fromPartial(object: Partial<_44.IntProto>): _44.IntProto;
            };
            DecProto: {
                encode(message: _44.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.DecProto;
                fromPartial(object: Partial<_44.DecProto>): _44.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _46.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GenesisOwners;
                fromPartial(object: Partial<_46.GenesisOwners>): _46.GenesisOwners;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
            Capability: {
                encode(message: _45.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.Capability;
                fromPartial(object: Partial<_45.Capability>): _45.Capability;
            };
            Owner: {
                encode(message: _45.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.Owner;
                fromPartial(object: Partial<_45.Owner>): _45.Owner;
            };
            CapabilityOwners: {
                encode(message: _45.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.CapabilityOwners;
                fromPartial(object: Partial<_45.CapabilityOwners>): _45.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _48.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _48.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _48.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _48.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _48.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _48.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _48.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _48.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _48.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.MsgVerifyInvariant;
                fromPartial(object: Partial<_48.MsgVerifyInvariant>): _48.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _48.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_48.MsgVerifyInvariantResponse>): _48.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _49.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.PubKey;
                fromPartial(object: Partial<_49.PubKey>): _49.PubKey;
            };
            PrivKey: {
                encode(message: _49.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.PrivKey;
                fromPartial(object: Partial<_49.PrivKey>): _49.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _50.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.LegacyAminoPubKey;
                fromPartial(object: Partial<_50.LegacyAminoPubKey>): _50.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _51.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.PubKey;
                fromPartial(object: Partial<_51.PubKey>): _51.PubKey;
            };
            PrivKey: {
                encode(message: _51.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.PrivKey;
                fromPartial(object: Partial<_51.PrivKey>): _51.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _52.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.PubKey;
                fromPartial(object: Partial<_52.PubKey>): _52.PubKey;
            };
            PrivKey: {
                encode(message: _52.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.PrivKey;
                fromPartial(object: Partial<_52.PrivKey>): _52.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                validatorOutstandingRewards(request: _55.QueryValidatorOutstandingRewardsRequest): Promise<_55.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _55.QueryValidatorCommissionRequest): Promise<_55.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _55.QueryValidatorSlashesRequest): Promise<_55.QueryValidatorSlashesResponse>;
                delegationRewards(request: _55.QueryDelegationRewardsRequest): Promise<_55.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _55.QueryDelegationTotalRewardsRequest): Promise<_55.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _55.QueryDelegatorValidatorsRequest): Promise<_55.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _55.QueryDelegatorWithdrawAddressRequest): Promise<_55.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _55.QueryCommunityPoolRequest): Promise<_55.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _56.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _56.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _56.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _56.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _56.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _56.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _56.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _56.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _56.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _56.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _56.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _56.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _56.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _56.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _56.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _56.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _56.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_56.MsgSetWithdrawAddress>): _56.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _56.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _56.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_56.MsgSetWithdrawAddressResponse>): _56.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _56.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_56.MsgWithdrawDelegatorReward>): _56.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _56.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _56.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_56.MsgWithdrawDelegatorRewardResponse>): _56.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _56.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_56.MsgWithdrawValidatorCommission>): _56.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _56.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _56.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_56.MsgWithdrawValidatorCommissionResponse>): _56.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _56.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.MsgFundCommunityPool;
                fromPartial(object: Partial<_56.MsgFundCommunityPool>): _56.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _56.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _56.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_56.MsgFundCommunityPoolResponse>): _56.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _55.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.QueryParamsRequest;
                fromPartial(_: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _55.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryParamsResponse;
                fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _55.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_55.QueryValidatorOutstandingRewardsRequest>): _55.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _55.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_55.QueryValidatorOutstandingRewardsResponse>): _55.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _55.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_55.QueryValidatorCommissionRequest>): _55.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _55.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_55.QueryValidatorCommissionResponse>): _55.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _55.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_55.QueryValidatorSlashesRequest>): _55.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _55.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_55.QueryValidatorSlashesResponse>): _55.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _55.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_55.QueryDelegationRewardsRequest>): _55.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _55.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_55.QueryDelegationRewardsResponse>): _55.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _55.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_55.QueryDelegationTotalRewardsRequest>): _55.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _55.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_55.QueryDelegationTotalRewardsResponse>): _55.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _55.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_55.QueryDelegatorValidatorsRequest>): _55.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _55.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_55.QueryDelegatorValidatorsResponse>): _55.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _55.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_55.QueryDelegatorWithdrawAddressRequest>): _55.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _55.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_55.QueryDelegatorWithdrawAddressResponse>): _55.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _55.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_55.QueryCommunityPoolRequest>): _55.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _55.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_55.QueryCommunityPoolResponse>): _55.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _54.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_54.DelegatorWithdrawInfo>): _54.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _54.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorOutstandingRewardsRecord>): _54.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _54.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_54.ValidatorAccumulatedCommissionRecord>): _54.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _54.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorHistoricalRewardsRecord>): _54.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _54.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_54.ValidatorCurrentRewardsRecord>): _54.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _54.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_54.DelegatorStartingInfoRecord>): _54.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _54.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_54.ValidatorSlashEventRecord>): _54.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
            Params: {
                encode(message: _53.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _53.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_53.ValidatorHistoricalRewards>): _53.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _53.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.ValidatorCurrentRewards;
                fromPartial(object: Partial<_53.ValidatorCurrentRewards>): _53.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _53.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_53.ValidatorAccumulatedCommission>): _53.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _53.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_53.ValidatorOutstandingRewards>): _53.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _53.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.ValidatorSlashEvent;
                fromPartial(object: Partial<_53.ValidatorSlashEvent>): _53.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _53.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.ValidatorSlashEvents;
                fromPartial(object: Partial<_53.ValidatorSlashEvents>): _53.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _53.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.FeePool;
                fromPartial(object: Partial<_53.FeePool>): _53.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _53.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_53.CommunityPoolSpendProposal>): _53.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _53.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.DelegatorStartingInfo;
                fromPartial(object: Partial<_53.DelegatorStartingInfo>): _53.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _53.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.DelegationDelegatorReward;
                fromPartial(object: Partial<_53.DelegationDelegatorReward>): _53.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _53.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_53.CommunityPoolSpendProposalWithDeposit>): _53.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _60.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _60.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _60.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.MsgSubmitEvidence;
                fromPartial(object: Partial<_60.MsgSubmitEvidence>): _60.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _60.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_60.MsgSubmitEvidenceResponse>): _60.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _59.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryEvidenceRequest;
                fromPartial(object: Partial<_59.QueryEvidenceRequest>): _59.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _59.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryEvidenceResponse;
                fromPartial(object: Partial<_59.QueryEvidenceResponse>): _59.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _59.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_59.QueryAllEvidenceRequest>): _59.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _59.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_59.QueryAllEvidenceResponse>): _59.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            };
            Equivocation: {
                encode(message: _57.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.Equivocation;
                fromPartial(object: Partial<_57.Equivocation>): _57.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _63.QueryAllowanceRequest): Promise<_63.QueryAllowanceResponse>;
                allowances(request: _63.QueryAllowancesRequest): Promise<_63.QueryAllowancesResponse>;
                allowancesByGranter(request: _63.QueryAllowancesByGranterRequest): Promise<_63.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _64.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _64.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _64.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _64.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _64.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _64.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _64.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _64.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _64.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _64.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _64.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _64.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _64.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _64.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _64.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _64.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _64.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgGrantAllowance;
                fromPartial(object: Partial<_64.MsgGrantAllowance>): _64.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _64.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _64.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_64.MsgGrantAllowanceResponse>): _64.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _64.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.MsgRevokeAllowance;
                fromPartial(object: Partial<_64.MsgRevokeAllowance>): _64.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _64.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _64.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_64.MsgRevokeAllowanceResponse>): _64.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _63.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.QueryAllowanceRequest;
                fromPartial(object: Partial<_63.QueryAllowanceRequest>): _63.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _63.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.QueryAllowanceResponse;
                fromPartial(object: Partial<_63.QueryAllowanceResponse>): _63.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _63.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.QueryAllowancesRequest;
                fromPartial(object: Partial<_63.QueryAllowancesRequest>): _63.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _63.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.QueryAllowancesResponse;
                fromPartial(object: Partial<_63.QueryAllowancesResponse>): _63.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _63.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_63.QueryAllowancesByGranterRequest>): _63.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _63.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_63.QueryAllowancesByGranterResponse>): _63.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.GenesisState;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
            };
            BasicAllowance: {
                encode(message: _61.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.BasicAllowance;
                fromPartial(object: Partial<_61.BasicAllowance>): _61.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _61.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.PeriodicAllowance;
                fromPartial(object: Partial<_61.PeriodicAllowance>): _61.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _61.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.AllowedMsgAllowance;
                fromPartial(object: Partial<_61.AllowedMsgAllowance>): _61.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _61.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.Grant;
                fromPartial(object: Partial<_61.Grant>): _61.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _69.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _69.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _69.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _69.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _69.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _69.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _69.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _69.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _69.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgSubmitProposal;
                fromPartial(object: Partial<_69.MsgSubmitProposal>): _69.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _69.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_69.MsgSubmitProposalResponse>): _69.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _69.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgVote;
                fromPartial(object: Partial<_69.MsgVote>): _69.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _69.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _69.MsgVoteResponse;
                fromPartial(_: Partial<_69.MsgVoteResponse>): _69.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _69.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgVoteWeighted;
                fromPartial(object: Partial<_69.MsgVoteWeighted>): _69.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _69.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _69.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_69.MsgVoteWeightedResponse>): _69.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _69.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.MsgDeposit;
                fromPartial(object: Partial<_69.MsgDeposit>): _69.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _69.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _69.MsgDepositResponse;
                fromPartial(_: Partial<_69.MsgDepositResponse>): _69.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _68.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryProposalRequest;
                fromPartial(object: Partial<_68.QueryProposalRequest>): _68.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _68.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryProposalResponse;
                fromPartial(object: Partial<_68.QueryProposalResponse>): _68.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _68.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryProposalsRequest;
                fromPartial(object: Partial<_68.QueryProposalsRequest>): _68.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _68.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryProposalsResponse;
                fromPartial(object: Partial<_68.QueryProposalsResponse>): _68.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _68.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryVoteRequest;
                fromPartial(object: Partial<_68.QueryVoteRequest>): _68.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _68.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryVoteResponse;
                fromPartial(object: Partial<_68.QueryVoteResponse>): _68.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _68.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryVotesRequest;
                fromPartial(object: Partial<_68.QueryVotesRequest>): _68.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _68.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryVotesResponse;
                fromPartial(object: Partial<_68.QueryVotesResponse>): _68.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _68.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryParamsRequest;
                fromPartial(object: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _68.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryParamsResponse;
                fromPartial(object: Partial<_68.QueryParamsResponse>): _68.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _68.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryDepositRequest;
                fromPartial(object: Partial<_68.QueryDepositRequest>): _68.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _68.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryDepositResponse;
                fromPartial(object: Partial<_68.QueryDepositResponse>): _68.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _68.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryDepositsRequest;
                fromPartial(object: Partial<_68.QueryDepositsRequest>): _68.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _68.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryDepositsResponse;
                fromPartial(object: Partial<_68.QueryDepositsResponse>): _68.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _68.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryTallyResultRequest;
                fromPartial(object: Partial<_68.QueryTallyResultRequest>): _68.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _68.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.QueryTallyResultResponse;
                fromPartial(object: Partial<_68.QueryTallyResultResponse>): _68.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _67.VoteOption;
            voteOptionToJSON(object: _67.VoteOption): string;
            proposalStatusFromJSON(object: any): _67.ProposalStatus;
            proposalStatusToJSON(object: _67.ProposalStatus): string;
            VoteOption: typeof _67.VoteOption;
            VoteOptionSDKType: typeof _67.VoteOption;
            ProposalStatus: typeof _67.ProposalStatus;
            ProposalStatusSDKType: typeof _67.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _67.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.WeightedVoteOption;
                fromPartial(object: Partial<_67.WeightedVoteOption>): _67.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _67.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.TextProposal;
                fromPartial(object: Partial<_67.TextProposal>): _67.TextProposal;
            };
            Deposit: {
                encode(message: _67.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.Deposit;
                fromPartial(object: Partial<_67.Deposit>): _67.Deposit;
            };
            Proposal: {
                encode(message: _67.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.Proposal;
                fromPartial(object: Partial<_67.Proposal>): _67.Proposal;
            };
            TallyResult: {
                encode(message: _67.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.TallyResult;
                fromPartial(object: Partial<_67.TallyResult>): _67.TallyResult;
            };
            Vote: {
                encode(message: _67.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.Vote;
                fromPartial(object: Partial<_67.Vote>): _67.Vote;
            };
            DepositParams: {
                encode(message: _67.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.DepositParams;
                fromPartial(object: Partial<_67.DepositParams>): _67.DepositParams;
            };
            VotingParams: {
                encode(message: _67.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.VotingParams;
                fromPartial(object: Partial<_67.VotingParams>): _67.VotingParams;
            };
            TallyParams: {
                encode(message: _67.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.TallyParams;
                fromPartial(object: Partial<_67.TallyParams>): _67.TallyParams;
            };
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.GenesisState;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                inflation(request?: _72.QueryInflationRequest): Promise<_72.QueryInflationResponse>;
                annualProvisions(request?: _72.QueryAnnualProvisionsRequest): Promise<_72.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _72.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.QueryParamsRequest;
                fromPartial(_: Partial<_72.QueryParamsRequest>): _72.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _72.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryParamsResponse;
                fromPartial(object: Partial<_72.QueryParamsResponse>): _72.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _72.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.QueryInflationRequest;
                fromPartial(_: Partial<_72.QueryInflationRequest>): _72.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _72.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryInflationResponse;
                fromPartial(object: Partial<_72.QueryInflationResponse>): _72.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _72.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _72.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_72.QueryAnnualProvisionsRequest>): _72.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _72.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_72.QueryAnnualProvisionsResponse>): _72.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _71.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Minter;
                fromPartial(object: Partial<_71.Minter>): _71.Minter;
            };
            Params: {
                encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.Params;
                fromPartial(object: Partial<_71.Params>): _71.Params;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _74.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryParamsRequest;
                fromPartial(object: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _74.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryParamsResponse;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _73.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.ParameterChangeProposal;
                fromPartial(object: Partial<_73.ParameterChangeProposal>): _73.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _73.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.ParamChange;
                fromPartial(object: Partial<_73.ParamChange>): _73.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                signingInfo(request: _76.QuerySigningInfoRequest): Promise<_76.QuerySigningInfoResponse>;
                signingInfos(request?: _76.QuerySigningInfosRequest): Promise<_76.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _78.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _78.MsgUnjail): {
                        typeUrl: string;
                        value: _78.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _78.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _78.MsgUnjail): {
                        typeUrl: string;
                        value: _78.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _78.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _78.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _78.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.MsgUnjail;
                fromPartial(object: Partial<_78.MsgUnjail>): _78.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _78.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _78.MsgUnjailResponse;
                fromPartial(_: Partial<_78.MsgUnjailResponse>): _78.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _77.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.ValidatorSigningInfo;
                fromPartial(object: Partial<_77.ValidatorSigningInfo>): _77.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _77.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.Params;
                fromPartial(object: Partial<_77.Params>): _77.Params;
            };
            QueryParamsRequest: {
                encode(_: _76.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _76.QueryParamsRequest;
                fromPartial(_: Partial<_76.QueryParamsRequest>): _76.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _76.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QueryParamsResponse;
                fromPartial(object: Partial<_76.QueryParamsResponse>): _76.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _76.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QuerySigningInfoRequest;
                fromPartial(object: Partial<_76.QuerySigningInfoRequest>): _76.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _76.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QuerySigningInfoResponse;
                fromPartial(object: Partial<_76.QuerySigningInfoResponse>): _76.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _76.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QuerySigningInfosRequest;
                fromPartial(object: Partial<_76.QuerySigningInfosRequest>): _76.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _76.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.QuerySigningInfosResponse;
                fromPartial(object: Partial<_76.QuerySigningInfosResponse>): _76.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.GenesisState;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
            };
            SigningInfo: {
                encode(message: _75.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.SigningInfo;
                fromPartial(object: Partial<_75.SigningInfo>): _75.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _75.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.ValidatorMissedBlocks;
                fromPartial(object: Partial<_75.ValidatorMissedBlocks>): _75.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _75.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MissedBlock;
                fromPartial(object: Partial<_75.MissedBlock>): _75.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _81.QueryValidatorsRequest): Promise<_81.QueryValidatorsResponse>;
                validator(request: _81.QueryValidatorRequest): Promise<_81.QueryValidatorResponse>;
                validatorDelegations(request: _81.QueryValidatorDelegationsRequest): Promise<_81.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _81.QueryValidatorUnbondingDelegationsRequest): Promise<_81.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _81.QueryDelegationRequest): Promise<_81.QueryDelegationResponse>;
                unbondingDelegation(request: _81.QueryUnbondingDelegationRequest): Promise<_81.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _81.QueryDelegatorDelegationsRequest): Promise<_81.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _81.QueryDelegatorUnbondingDelegationsRequest): Promise<_81.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _81.QueryRedelegationsRequest): Promise<_81.QueryRedelegationsResponse>;
                delegatorValidators(request: _81.QueryDelegatorValidatorsRequest): Promise<_81.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _81.QueryDelegatorValidatorRequest): Promise<_81.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _81.QueryHistoricalInfoRequest): Promise<_81.QueryHistoricalInfoResponse>;
                pool(request?: _81.QueryPoolRequest): Promise<_81.QueryPoolResponse>;
                params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _83.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _83.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _83.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _83.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _83.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _83.MsgCreateValidator): {
                        typeUrl: string;
                        value: _83.MsgCreateValidator;
                    };
                    editValidator(value: _83.MsgEditValidator): {
                        typeUrl: string;
                        value: _83.MsgEditValidator;
                    };
                    delegate(value: _83.MsgDelegate): {
                        typeUrl: string;
                        value: _83.MsgDelegate;
                    };
                    beginRedelegate(value: _83.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _83.MsgBeginRedelegate;
                    };
                    undelegate(value: _83.MsgUndelegate): {
                        typeUrl: string;
                        value: _83.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _83.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _83.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _83.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _83.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _83.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _83.MsgCreateValidator): {
                        typeUrl: string;
                        value: _83.MsgCreateValidator;
                    };
                    editValidator(value: _83.MsgEditValidator): {
                        typeUrl: string;
                        value: _83.MsgEditValidator;
                    };
                    delegate(value: _83.MsgDelegate): {
                        typeUrl: string;
                        value: _83.MsgDelegate;
                    };
                    beginRedelegate(value: _83.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _83.MsgBeginRedelegate;
                    };
                    undelegate(value: _83.MsgUndelegate): {
                        typeUrl: string;
                        value: _83.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _83.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _83.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _83.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _83.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _83.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _83.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _83.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _83.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _83.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _83.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _83.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgCreateValidator;
                fromPartial(object: Partial<_83.MsgCreateValidator>): _83.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _83.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _83.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_83.MsgCreateValidatorResponse>): _83.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _83.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgEditValidator;
                fromPartial(object: Partial<_83.MsgEditValidator>): _83.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _83.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _83.MsgEditValidatorResponse;
                fromPartial(_: Partial<_83.MsgEditValidatorResponse>): _83.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _83.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgDelegate;
                fromPartial(object: Partial<_83.MsgDelegate>): _83.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _83.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _83.MsgDelegateResponse;
                fromPartial(_: Partial<_83.MsgDelegateResponse>): _83.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _83.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgBeginRedelegate;
                fromPartial(object: Partial<_83.MsgBeginRedelegate>): _83.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _83.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_83.MsgBeginRedelegateResponse>): _83.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _83.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgUndelegate;
                fromPartial(object: Partial<_83.MsgUndelegate>): _83.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _83.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.MsgUndelegateResponse;
                fromPartial(object: Partial<_83.MsgUndelegateResponse>): _83.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _82.BondStatus;
            bondStatusToJSON(object: _82.BondStatus): string;
            BondStatus: typeof _82.BondStatus;
            BondStatusSDKType: typeof _82.BondStatus;
            HistoricalInfo: {
                encode(message: _82.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.HistoricalInfo;
                fromPartial(object: Partial<_82.HistoricalInfo>): _82.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _82.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.CommissionRates;
                fromPartial(object: Partial<_82.CommissionRates>): _82.CommissionRates;
            };
            Commission: {
                encode(message: _82.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Commission;
                fromPartial(object: Partial<_82.Commission>): _82.Commission;
            };
            Description: {
                encode(message: _82.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Description;
                fromPartial(object: Partial<_82.Description>): _82.Description;
            };
            Validator: {
                encode(message: _82.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Validator;
                fromPartial(object: Partial<_82.Validator>): _82.Validator;
            };
            ValAddresses: {
                encode(message: _82.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.ValAddresses;
                fromPartial(object: Partial<_82.ValAddresses>): _82.ValAddresses;
            };
            DVPair: {
                encode(message: _82.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.DVPair;
                fromPartial(object: Partial<_82.DVPair>): _82.DVPair;
            };
            DVPairs: {
                encode(message: _82.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.DVPairs;
                fromPartial(object: Partial<_82.DVPairs>): _82.DVPairs;
            };
            DVVTriplet: {
                encode(message: _82.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.DVVTriplet;
                fromPartial(object: Partial<_82.DVVTriplet>): _82.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _82.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.DVVTriplets;
                fromPartial(object: Partial<_82.DVVTriplets>): _82.DVVTriplets;
            };
            Delegation: {
                encode(message: _82.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Delegation;
                fromPartial(object: Partial<_82.Delegation>): _82.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _82.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.UnbondingDelegation;
                fromPartial(object: Partial<_82.UnbondingDelegation>): _82.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _82.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.UnbondingDelegationEntry;
                fromPartial(object: Partial<_82.UnbondingDelegationEntry>): _82.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _82.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.RedelegationEntry;
                fromPartial(object: Partial<_82.RedelegationEntry>): _82.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _82.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Redelegation;
                fromPartial(object: Partial<_82.Redelegation>): _82.Redelegation;
            };
            Params: {
                encode(message: _82.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Params;
                fromPartial(object: Partial<_82.Params>): _82.Params;
            };
            DelegationResponse: {
                encode(message: _82.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.DelegationResponse;
                fromPartial(object: Partial<_82.DelegationResponse>): _82.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _82.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.RedelegationEntryResponse;
                fromPartial(object: Partial<_82.RedelegationEntryResponse>): _82.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _82.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.RedelegationResponse;
                fromPartial(object: Partial<_82.RedelegationResponse>): _82.RedelegationResponse;
            };
            Pool: {
                encode(message: _82.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Pool;
                fromPartial(object: Partial<_82.Pool>): _82.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _81.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryValidatorsRequest;
                fromPartial(object: Partial<_81.QueryValidatorsRequest>): _81.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _81.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryValidatorsResponse;
                fromPartial(object: Partial<_81.QueryValidatorsResponse>): _81.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _81.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryValidatorRequest;
                fromPartial(object: Partial<_81.QueryValidatorRequest>): _81.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _81.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryValidatorResponse;
                fromPartial(object: Partial<_81.QueryValidatorResponse>): _81.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _81.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_81.QueryValidatorDelegationsRequest>): _81.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _81.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_81.QueryValidatorDelegationsResponse>): _81.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _81.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_81.QueryValidatorUnbondingDelegationsRequest>): _81.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _81.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_81.QueryValidatorUnbondingDelegationsResponse>): _81.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _81.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegationRequest;
                fromPartial(object: Partial<_81.QueryDelegationRequest>): _81.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _81.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegationResponse;
                fromPartial(object: Partial<_81.QueryDelegationResponse>): _81.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _81.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_81.QueryUnbondingDelegationRequest>): _81.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _81.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_81.QueryUnbondingDelegationResponse>): _81.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _81.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_81.QueryDelegatorDelegationsRequest>): _81.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _81.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_81.QueryDelegatorDelegationsResponse>): _81.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _81.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_81.QueryDelegatorUnbondingDelegationsRequest>): _81.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _81.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_81.QueryDelegatorUnbondingDelegationsResponse>): _81.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _81.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryRedelegationsRequest;
                fromPartial(object: Partial<_81.QueryRedelegationsRequest>): _81.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _81.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryRedelegationsResponse;
                fromPartial(object: Partial<_81.QueryRedelegationsResponse>): _81.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _81.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorsRequest>): _81.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _81.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorsResponse>): _81.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _81.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorRequest>): _81.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _81.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_81.QueryDelegatorValidatorResponse>): _81.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _81.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_81.QueryHistoricalInfoRequest>): _81.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _81.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_81.QueryHistoricalInfoResponse>): _81.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _81.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.QueryPoolRequest;
                fromPartial(_: Partial<_81.QueryPoolRequest>): _81.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _81.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryPoolResponse;
                fromPartial(object: Partial<_81.QueryPoolResponse>): _81.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _81.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _81.QueryParamsRequest;
                fromPartial(_: Partial<_81.QueryParamsRequest>): _81.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _81.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.QueryParamsResponse;
                fromPartial(object: Partial<_81.QueryParamsResponse>): _81.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _80.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.GenesisState;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _80.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.LastValidatorPower;
                fromPartial(object: Partial<_80.LastValidatorPower>): _80.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _79.AuthorizationType;
            authorizationTypeToJSON(object: _79.AuthorizationType): string;
            AuthorizationType: typeof _79.AuthorizationType;
            AuthorizationTypeSDKType: typeof _79.AuthorizationType;
            StakeAuthorization: {
                encode(message: _79.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.StakeAuthorization;
                fromPartial(object: Partial<_79.StakeAuthorization>): _79.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _79.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.StakeAuthorization_Validators;
                fromPartial(object: Partial<_79.StakeAuthorization_Validators>): _79.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _84.SignMode;
                signModeToJSON(object: _84.SignMode): string;
                SignMode: typeof _84.SignMode;
                SignModeSDKType: typeof _84.SignMode;
                SignatureDescriptors: {
                    encode(message: _84.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.SignatureDescriptors;
                    fromPartial(object: Partial<_84.SignatureDescriptors>): _84.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _84.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.SignatureDescriptor;
                    fromPartial(object: Partial<_84.SignatureDescriptor>): _84.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _84.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_84.SignatureDescriptor_Data>): _84.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _84.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_84.SignatureDescriptor_Data_Single>): _84.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _84.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _84.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_84.SignatureDescriptor_Data_Multi>): _84.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _197.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _85.SimulateRequest): Promise<_85.SimulateResponse>;
                getTx(request: _85.GetTxRequest): Promise<_85.GetTxResponse>;
                broadcastTx(request: _85.BroadcastTxRequest): Promise<_85.BroadcastTxResponse>;
                getTxsEvent(request: _85.GetTxsEventRequest): Promise<_85.GetTxsEventResponse>;
                getBlockWithTxs(request: _85.GetBlockWithTxsRequest): Promise<_85.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            Tx: {
                encode(message: _86.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Tx;
                fromPartial(object: Partial<_86.Tx>): _86.Tx;
            };
            TxRaw: {
                encode(message: _86.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.TxRaw;
                fromPartial(object: Partial<_86.TxRaw>): _86.TxRaw;
            };
            SignDoc: {
                encode(message: _86.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.SignDoc;
                fromPartial(object: Partial<_86.SignDoc>): _86.SignDoc;
            };
            TxBody: {
                encode(message: _86.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.TxBody;
                fromPartial(object: Partial<_86.TxBody>): _86.TxBody;
            };
            AuthInfo: {
                encode(message: _86.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.AuthInfo;
                fromPartial(object: Partial<_86.AuthInfo>): _86.AuthInfo;
            };
            SignerInfo: {
                encode(message: _86.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.SignerInfo;
                fromPartial(object: Partial<_86.SignerInfo>): _86.SignerInfo;
            };
            ModeInfo: {
                encode(message: _86.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ModeInfo;
                fromPartial(object: Partial<_86.ModeInfo>): _86.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _86.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ModeInfo_Single;
                fromPartial(object: Partial<_86.ModeInfo_Single>): _86.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _86.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ModeInfo_Multi;
                fromPartial(object: Partial<_86.ModeInfo_Multi>): _86.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _86.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.Fee;
                fromPartial(object: Partial<_86.Fee>): _86.Fee;
            };
            orderByFromJSON(object: any): _85.OrderBy;
            orderByToJSON(object: _85.OrderBy): string;
            broadcastModeFromJSON(object: any): _85.BroadcastMode;
            broadcastModeToJSON(object: _85.BroadcastMode): string;
            OrderBy: typeof _85.OrderBy;
            OrderBySDKType: typeof _85.OrderBy;
            BroadcastMode: typeof _85.BroadcastMode;
            BroadcastModeSDKType: typeof _85.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _85.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.GetTxsEventRequest;
                fromPartial(object: Partial<_85.GetTxsEventRequest>): _85.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _85.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.GetTxsEventResponse;
                fromPartial(object: Partial<_85.GetTxsEventResponse>): _85.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _85.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.BroadcastTxRequest;
                fromPartial(object: Partial<_85.BroadcastTxRequest>): _85.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _85.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.BroadcastTxResponse;
                fromPartial(object: Partial<_85.BroadcastTxResponse>): _85.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _85.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.SimulateRequest;
                fromPartial(object: Partial<_85.SimulateRequest>): _85.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _85.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.SimulateResponse;
                fromPartial(object: Partial<_85.SimulateResponse>): _85.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _85.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.GetTxRequest;
                fromPartial(object: Partial<_85.GetTxRequest>): _85.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _85.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.GetTxResponse;
                fromPartial(object: Partial<_85.GetTxResponse>): _85.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _85.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_85.GetBlockWithTxsRequest>): _85.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _85.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_85.GetBlockWithTxsResponse>): _85.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _87.QueryCurrentPlanRequest): Promise<_87.QueryCurrentPlanResponse>;
                appliedPlan(request: _87.QueryAppliedPlanRequest): Promise<_87.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _87.QueryUpgradedConsensusStateRequest): Promise<_87.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _87.QueryModuleVersionsRequest): Promise<_87.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            Plan: {
                encode(message: _88.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.Plan;
                fromPartial(object: Partial<_88.Plan>): _88.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _88.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_88.SoftwareUpgradeProposal>): _88.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _88.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_88.CancelSoftwareUpgradeProposal>): _88.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _88.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.ModuleVersion;
                fromPartial(object: Partial<_88.ModuleVersion>): _88.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _87.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_87.QueryCurrentPlanRequest>): _87.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _87.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_87.QueryCurrentPlanResponse>): _87.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _87.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_87.QueryAppliedPlanRequest>): _87.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _87.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_87.QueryAppliedPlanResponse>): _87.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _87.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_87.QueryUpgradedConsensusStateRequest>): _87.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _87.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_87.QueryUpgradedConsensusStateResponse>): _87.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _87.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_87.QueryModuleVersionsRequest>): _87.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _87.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_87.QueryModuleVersionsResponse>): _87.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _89.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _89.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _89.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _89.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _89.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _89.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _89.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _90.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.BaseVestingAccount;
                fromPartial(object: Partial<_90.BaseVestingAccount>): _90.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _90.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.ContinuousVestingAccount;
                fromPartial(object: Partial<_90.ContinuousVestingAccount>): _90.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _90.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.DelayedVestingAccount;
                fromPartial(object: Partial<_90.DelayedVestingAccount>): _90.DelayedVestingAccount;
            };
            Period: {
                encode(message: _90.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.Period;
                fromPartial(object: Partial<_90.Period>): _90.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _90.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.PeriodicVestingAccount;
                fromPartial(object: Partial<_90.PeriodicVestingAccount>): _90.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _90.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.PermanentLockedAccount;
                fromPartial(object: Partial<_90.PermanentLockedAccount>): _90.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _89.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgCreateVestingAccount;
                fromPartial(object: Partial<_89.MsgCreateVestingAccount>): _89.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _89.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_89.MsgCreateVestingAccountResponse>): _89.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _199.MsgClientImpl;
                };
                bank: {
                    v1beta1: _200.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _201.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _202.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _203.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _204.MsgClientImpl;
                };
                gov: {
                    v1beta1: _205.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _206.MsgClientImpl;
                };
                staking: {
                    v1beta1: _207.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _208.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _23.QueryAccountsRequest): Promise<_23.QueryAccountsResponse>;
                        account(request: _23.QueryAccountRequest): Promise<_23.QueryAccountResponse>;
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _27.QueryGrantsRequest): Promise<_27.QueryGrantsResponse>;
                        granterGrants(request: _27.QueryGranterGrantsRequest): Promise<_27.QueryGranterGrantsResponse>;
                        granteeGrants(request: _27.QueryGranteeGrantsRequest): Promise<_27.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _32.QueryBalanceRequest): Promise<_32.QueryBalanceResponse>;
                        allBalances(request: _32.QueryAllBalancesRequest): Promise<_32.QueryAllBalancesResponse>;
                        spendableBalances(request: _32.QuerySpendableBalancesRequest): Promise<_32.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _32.QueryTotalSupplyRequest): Promise<_32.QueryTotalSupplyResponse>;
                        supplyOf(request: _32.QuerySupplyOfRequest): Promise<_32.QuerySupplyOfResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        denomMetadata(request: _32.QueryDenomMetadataRequest): Promise<_32.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _32.QueryDenomsMetadataRequest): Promise<_32.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _43.GetNodeInfoRequest): Promise<_43.GetNodeInfoResponse>;
                            getSyncing(request?: _43.GetSyncingRequest): Promise<_43.GetSyncingResponse>;
                            getLatestBlock(request?: _43.GetLatestBlockRequest): Promise<_43.GetLatestBlockResponse>;
                            getBlockByHeight(request: _43.GetBlockByHeightRequest): Promise<_43.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _43.GetLatestValidatorSetRequest): Promise<_43.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _43.GetValidatorSetByHeightRequest): Promise<_43.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _55.QueryValidatorOutstandingRewardsRequest): Promise<_55.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _55.QueryValidatorCommissionRequest): Promise<_55.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _55.QueryValidatorSlashesRequest): Promise<_55.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _55.QueryDelegationRewardsRequest): Promise<_55.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _55.QueryDelegationTotalRewardsRequest): Promise<_55.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _55.QueryDelegatorValidatorsRequest): Promise<_55.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _55.QueryDelegatorWithdrawAddressRequest): Promise<_55.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _55.QueryCommunityPoolRequest): Promise<_55.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                        allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _63.QueryAllowanceRequest): Promise<_63.QueryAllowanceResponse>;
                        allowances(request: _63.QueryAllowancesRequest): Promise<_63.QueryAllowancesResponse>;
                        allowancesByGranter(request: _63.QueryAllowancesByGranterRequest): Promise<_63.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                        proposals(request: _68.QueryProposalsRequest): Promise<_68.QueryProposalsResponse>;
                        vote(request: _68.QueryVoteRequest): Promise<_68.QueryVoteResponse>;
                        votes(request: _68.QueryVotesRequest): Promise<_68.QueryVotesResponse>;
                        params(request: _68.QueryParamsRequest): Promise<_68.QueryParamsResponse>;
                        deposit(request: _68.QueryDepositRequest): Promise<_68.QueryDepositResponse>;
                        deposits(request: _68.QueryDepositsRequest): Promise<_68.QueryDepositsResponse>;
                        tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                        inflation(request?: _72.QueryInflationRequest): Promise<_72.QueryInflationResponse>;
                        annualProvisions(request?: _72.QueryAnnualProvisionsRequest): Promise<_72.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                        signingInfo(request: _76.QuerySigningInfoRequest): Promise<_76.QuerySigningInfoResponse>;
                        signingInfos(request?: _76.QuerySigningInfosRequest): Promise<_76.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _81.QueryValidatorsRequest): Promise<_81.QueryValidatorsResponse>;
                        validator(request: _81.QueryValidatorRequest): Promise<_81.QueryValidatorResponse>;
                        validatorDelegations(request: _81.QueryValidatorDelegationsRequest): Promise<_81.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _81.QueryValidatorUnbondingDelegationsRequest): Promise<_81.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _81.QueryDelegationRequest): Promise<_81.QueryDelegationResponse>;
                        unbondingDelegation(request: _81.QueryUnbondingDelegationRequest): Promise<_81.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _81.QueryDelegatorDelegationsRequest): Promise<_81.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _81.QueryDelegatorUnbondingDelegationsRequest): Promise<_81.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _81.QueryRedelegationsRequest): Promise<_81.QueryRedelegationsResponse>;
                        delegatorValidators(request: _81.QueryDelegatorValidatorsRequest): Promise<_81.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _81.QueryDelegatorValidatorRequest): Promise<_81.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _81.QueryHistoricalInfoRequest): Promise<_81.QueryHistoricalInfoResponse>;
                        pool(request?: _81.QueryPoolRequest): Promise<_81.QueryPoolResponse>;
                        params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _85.SimulateRequest): Promise<_85.SimulateResponse>;
                        getTx(request: _85.GetTxRequest): Promise<_85.GetTxResponse>;
                        broadcastTx(request: _85.BroadcastTxRequest): Promise<_85.BroadcastTxResponse>;
                        getTxsEvent(request: _85.GetTxsEventRequest): Promise<_85.GetTxsEventResponse>;
                        getBlockWithTxs(request: _85.GetBlockWithTxsRequest): Promise<_85.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _87.QueryCurrentPlanRequest): Promise<_87.QueryCurrentPlanResponse>;
                        appliedPlan(request: _87.QueryAppliedPlanRequest): Promise<_87.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _87.QueryUpgradedConsensusStateRequest): Promise<_87.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _87.QueryModuleVersionsRequest): Promise<_87.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _171.LCDQueryClient;
                };
                authz: {
                    v1beta1: _172.LCDQueryClient;
                };
                bank: {
                    v1beta1: _173.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _174.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _175.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _176.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _177.LCDQueryClient;
                };
                gov: {
                    v1beta1: _178.LCDQueryClient;
                };
                mint: {
                    v1beta1: _179.LCDQueryClient;
                };
                params: {
                    v1beta1: _180.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _181.LCDQueryClient;
                };
                staking: {
                    v1beta1: _182.LCDQueryClient;
                };
                tx: {
                    v1beta1: _183.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _184.LCDQueryClient;
                };
            };
        }>;
    };
}
