import * as _0 from "./authority/v1/authority";
import * as _1 from "./authority/v1/genesis";
import * as _2 from "./authority/v1/query";
import * as _3 from "./authority/v1/tx";
import * as _4 from "./buyback/v1/genesis";
import * as _5 from "./buyback/v1/query";
import * as _6 from "./inflation/v1/genesis";
import * as _7 from "./inflation/v1/inflation";
import * as _8 from "./inflation/v1/query";
import * as _9 from "./issuer/v1/genesis";
import * as _10 from "./issuer/v1/issuer";
import * as _11 from "./issuer/v1/query";
import * as _12 from "./issuer/v1/tx";
import * as _13 from "./liquidityprovider/v1/genesis";
import * as _14 from "./liquidityprovider/v1/liquidityprovider";
import * as _15 from "./liquidityprovider/v1/query";
import * as _16 from "./liquidityprovider/v1/tx";
import * as _17 from "./market/v1/market";
import * as _18 from "./market/v1/query";
import * as _19 from "./market/v1/tx";
import * as _20 from "./queries/v1/query";
import * as _127 from "./authority/v1/query.lcd";
import * as _128 from "./buyback/v1/query.lcd";
import * as _129 from "./inflation/v1/query.lcd";
import * as _130 from "./issuer/v1/query.lcd";
import * as _131 from "./liquidityprovider/v1/query.lcd";
import * as _132 from "./market/v1/query.lcd";
import * as _133 from "./queries/v1/query.lcd";
import * as _134 from "./authority/v1/query.rpc.Query";
import * as _135 from "./buyback/v1/query.rpc.Query";
import * as _136 from "./inflation/v1/query.rpc.Query";
import * as _137 from "./issuer/v1/query.rpc.Query";
import * as _138 from "./liquidityprovider/v1/query.rpc.Query";
import * as _139 from "./market/v1/query.rpc.Query";
import * as _140 from "./queries/v1/query.rpc.Query";
import * as _141 from "./authority/v1/tx.rpc.msg";
import * as _142 from "./issuer/v1/tx.rpc.msg";
import * as _143 from "./liquidityprovider/v1/tx.rpc.msg";
import * as _144 from "./market/v1/tx.rpc.msg";
export declare namespace em {
    namespace authority {
        const v1: {
            MsgClientImpl: typeof _141.MsgClientImpl;
            QueryClientImpl: typeof _134.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gasPrices(request?: _2.QueryGasPricesRequest): Promise<_2.QueryGasPricesResponse>;
                upgradePlan(request?: _2.QueryUpgradePlanRequest): Promise<_2.QueryUpgradePlanResponse>;
            };
            LCDQueryClient: typeof _127.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createIssuer(value: _3.MsgCreateIssuer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    destroyIssuer(value: _3.MsgDestroyIssuer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setGasPrices(value: _3.MsgSetGasPrices): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    replaceAuthority(value: _3.MsgReplaceAuthority): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    scheduleUpgrade(value: _3.MsgScheduleUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setParameters(value: _3.MsgSetParameters): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createIssuer(value: _3.MsgCreateIssuer): {
                        typeUrl: string;
                        value: _3.MsgCreateIssuer;
                    };
                    destroyIssuer(value: _3.MsgDestroyIssuer): {
                        typeUrl: string;
                        value: _3.MsgDestroyIssuer;
                    };
                    setGasPrices(value: _3.MsgSetGasPrices): {
                        typeUrl: string;
                        value: _3.MsgSetGasPrices;
                    };
                    replaceAuthority(value: _3.MsgReplaceAuthority): {
                        typeUrl: string;
                        value: _3.MsgReplaceAuthority;
                    };
                    scheduleUpgrade(value: _3.MsgScheduleUpgrade): {
                        typeUrl: string;
                        value: _3.MsgScheduleUpgrade;
                    };
                    setParameters(value: _3.MsgSetParameters): {
                        typeUrl: string;
                        value: _3.MsgSetParameters;
                    };
                };
                fromJSON: {
                    createIssuer(value: any): {
                        typeUrl: string;
                        value: _3.MsgCreateIssuer;
                    };
                    destroyIssuer(value: any): {
                        typeUrl: string;
                        value: _3.MsgDestroyIssuer;
                    };
                    setGasPrices(value: any): {
                        typeUrl: string;
                        value: _3.MsgSetGasPrices;
                    };
                    replaceAuthority(value: any): {
                        typeUrl: string;
                        value: _3.MsgReplaceAuthority;
                    };
                    scheduleUpgrade(value: any): {
                        typeUrl: string;
                        value: _3.MsgScheduleUpgrade;
                    };
                    setParameters(value: any): {
                        typeUrl: string;
                        value: _3.MsgSetParameters;
                    };
                };
                fromPartial: {
                    createIssuer(value: _3.MsgCreateIssuer): {
                        typeUrl: string;
                        value: _3.MsgCreateIssuer;
                    };
                    destroyIssuer(value: _3.MsgDestroyIssuer): {
                        typeUrl: string;
                        value: _3.MsgDestroyIssuer;
                    };
                    setGasPrices(value: _3.MsgSetGasPrices): {
                        typeUrl: string;
                        value: _3.MsgSetGasPrices;
                    };
                    replaceAuthority(value: _3.MsgReplaceAuthority): {
                        typeUrl: string;
                        value: _3.MsgReplaceAuthority;
                    };
                    scheduleUpgrade(value: _3.MsgScheduleUpgrade): {
                        typeUrl: string;
                        value: _3.MsgScheduleUpgrade;
                    };
                    setParameters(value: _3.MsgSetParameters): {
                        typeUrl: string;
                        value: _3.MsgSetParameters;
                    };
                };
            };
            AminoConverter: {
                "/em.authority.v1.MsgCreateIssuer": {
                    aminoType: string;
                    toAmino: ({ authority, issuer, denominations }: _3.MsgCreateIssuer) => {
                        authority: string;
                        issuer: string;
                        denominations: {
                            base: string;
                            display: string;
                            description: string;
                        }[];
                    };
                    fromAmino: ({ authority, issuer, denominations }: {
                        authority: string;
                        issuer: string;
                        denominations: {
                            base: string;
                            display: string;
                            description: string;
                        }[];
                    }) => _3.MsgCreateIssuer;
                };
                "/em.authority.v1.MsgDestroyIssuer": {
                    aminoType: string;
                    toAmino: ({ authority, issuer }: _3.MsgDestroyIssuer) => {
                        authority: string;
                        issuer: string;
                    };
                    fromAmino: ({ authority, issuer }: {
                        authority: string;
                        issuer: string;
                    }) => _3.MsgDestroyIssuer;
                };
                "/em.authority.v1.MsgSetGasPrices": {
                    aminoType: string;
                    toAmino: ({ authority, gasPrices }: _3.MsgSetGasPrices) => {
                        authority: string;
                        gas_prices: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ authority, gas_prices }: {
                        authority: string;
                        gas_prices: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _3.MsgSetGasPrices;
                };
                "/em.authority.v1.MsgReplaceAuthority": {
                    aminoType: string;
                    toAmino: ({ authority, newAuthority }: _3.MsgReplaceAuthority) => {
                        authority: string;
                        new_authority: string;
                    };
                    fromAmino: ({ authority, new_authority }: {
                        authority: string;
                        new_authority: string;
                    }) => _3.MsgReplaceAuthority;
                };
                "/em.authority.v1.MsgScheduleUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _3.MsgScheduleUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _3.MsgScheduleUpgrade;
                };
                "/em.authority.v1.MsgSetParameters": {
                    aminoType: string;
                    toAmino: ({ authority, changes }: _3.MsgSetParameters) => {
                        authority: string;
                        changes: {
                            subspace: string;
                            key: string;
                            value: string;
                        }[];
                    };
                    fromAmino: ({ authority, changes }: {
                        authority: string;
                        changes: {
                            subspace: string;
                            key: string;
                            value: string;
                        }[];
                    }) => _3.MsgSetParameters;
                };
            };
            MsgCreateIssuer: {
                encode(message: _3.MsgCreateIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgCreateIssuer;
                fromPartial(object: Partial<_3.MsgCreateIssuer>): _3.MsgCreateIssuer;
            };
            Denomination: {
                encode(message: _3.Denomination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.Denomination;
                fromPartial(object: Partial<_3.Denomination>): _3.Denomination;
            };
            MsgCreateIssuerResponse: {
                encode(_: _3.MsgCreateIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgCreateIssuerResponse;
                fromPartial(_: Partial<_3.MsgCreateIssuerResponse>): _3.MsgCreateIssuerResponse;
            };
            MsgDestroyIssuer: {
                encode(message: _3.MsgDestroyIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgDestroyIssuer;
                fromPartial(object: Partial<_3.MsgDestroyIssuer>): _3.MsgDestroyIssuer;
            };
            MsgDestroyIssuerResponse: {
                encode(_: _3.MsgDestroyIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgDestroyIssuerResponse;
                fromPartial(_: Partial<_3.MsgDestroyIssuerResponse>): _3.MsgDestroyIssuerResponse;
            };
            MsgSetGasPrices: {
                encode(message: _3.MsgSetGasPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgSetGasPrices;
                fromPartial(object: Partial<_3.MsgSetGasPrices>): _3.MsgSetGasPrices;
            };
            MsgSetGasPricesResponse: {
                encode(_: _3.MsgSetGasPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgSetGasPricesResponse;
                fromPartial(_: Partial<_3.MsgSetGasPricesResponse>): _3.MsgSetGasPricesResponse;
            };
            MsgReplaceAuthority: {
                encode(message: _3.MsgReplaceAuthority, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgReplaceAuthority;
                fromPartial(object: Partial<_3.MsgReplaceAuthority>): _3.MsgReplaceAuthority;
            };
            MsgReplaceAuthorityResponse: {
                encode(message: _3.MsgReplaceAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgReplaceAuthorityResponse;
                fromPartial(object: Partial<_3.MsgReplaceAuthorityResponse>): _3.MsgReplaceAuthorityResponse;
            };
            MsgScheduleUpgrade: {
                encode(message: _3.MsgScheduleUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgScheduleUpgrade;
                fromPartial(object: Partial<_3.MsgScheduleUpgrade>): _3.MsgScheduleUpgrade;
            };
            MsgScheduleUpgradeResponse: {
                encode(_: _3.MsgScheduleUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgScheduleUpgradeResponse;
                fromPartial(_: Partial<_3.MsgScheduleUpgradeResponse>): _3.MsgScheduleUpgradeResponse;
            };
            MsgSetParameters: {
                encode(message: _3.MsgSetParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgSetParameters;
                fromPartial(object: Partial<_3.MsgSetParameters>): _3.MsgSetParameters;
            };
            MsgSetParametersResponse: {
                encode(_: _3.MsgSetParametersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgSetParametersResponse;
                fromPartial(_: Partial<_3.MsgSetParametersResponse>): _3.MsgSetParametersResponse;
            };
            QueryGasPricesRequest: {
                encode(_: _2.QueryGasPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryGasPricesRequest;
                fromPartial(_: Partial<_2.QueryGasPricesRequest>): _2.QueryGasPricesRequest;
            };
            QueryGasPricesResponse: {
                encode(message: _2.QueryGasPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryGasPricesResponse;
                fromPartial(object: Partial<_2.QueryGasPricesResponse>): _2.QueryGasPricesResponse;
            };
            QueryUpgradePlanRequest: {
                encode(_: _2.QueryUpgradePlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryUpgradePlanRequest;
                fromPartial(_: Partial<_2.QueryUpgradePlanRequest>): _2.QueryUpgradePlanRequest;
            };
            QueryUpgradePlanResponse: {
                encode(message: _2.QueryUpgradePlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryUpgradePlanResponse;
                fromPartial(object: Partial<_2.QueryUpgradePlanResponse>): _2.QueryUpgradePlanResponse;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            };
            Authority: {
                encode(message: _0.Authority, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Authority;
                fromPartial(object: Partial<_0.Authority>): _0.Authority;
            };
            GasPrices: {
                encode(message: _0.GasPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.GasPrices;
                fromPartial(object: Partial<_0.GasPrices>): _0.GasPrices;
            };
        };
    }
    namespace buyback {
        const v1: {
            QueryClientImpl: typeof _135.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request?: _5.QueryBalanceRequest): Promise<_5.QueryBalanceResponse>;
                buybackTime(request?: _5.QueryBuybackTimeRequest): Promise<_5.QueryBuybackTimeResponse>;
            };
            LCDQueryClient: typeof _128.LCDQueryClient;
            QueryBalanceRequest: {
                encode(_: _5.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.QueryBalanceRequest;
                fromPartial(_: Partial<_5.QueryBalanceRequest>): _5.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _5.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.QueryBalanceResponse;
                fromPartial(object: Partial<_5.QueryBalanceResponse>): _5.QueryBalanceResponse;
            };
            QueryBuybackTimeRequest: {
                encode(_: _5.QueryBuybackTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.QueryBuybackTimeRequest;
                fromPartial(_: Partial<_5.QueryBuybackTimeRequest>): _5.QueryBuybackTimeRequest;
            };
            QueryBuybackTimeResponse: {
                encode(message: _5.QueryBuybackTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.QueryBuybackTimeResponse;
                fromPartial(object: Partial<_5.QueryBuybackTimeResponse>): _5.QueryBuybackTimeResponse;
            };
            GenesisState: {
                encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
            };
        };
    }
    namespace inflation {
        const v1: {
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                inflation(request?: _8.QueryInflationRequest): Promise<_8.QueryInflationResponse>;
            };
            LCDQueryClient: typeof _129.LCDQueryClient;
            QueryInflationRequest: {
                encode(_: _8.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.QueryInflationRequest;
                fromPartial(_: Partial<_8.QueryInflationRequest>): _8.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _8.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.QueryInflationResponse;
                fromPartial(object: Partial<_8.QueryInflationResponse>): _8.QueryInflationResponse;
            };
            InflationAsset: {
                encode(message: _7.InflationAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.InflationAsset;
                fromPartial(object: Partial<_7.InflationAsset>): _7.InflationAsset;
            };
            InflationState: {
                encode(message: _7.InflationState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.InflationState;
                fromPartial(object: Partial<_7.InflationState>): _7.InflationState;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.GenesisState;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
            };
        };
    }
    namespace issuer {
        const v1: {
            MsgClientImpl: typeof _142.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                issuers(request?: _11.QueryIssuersRequest): Promise<_11.QueryIssuersResponse>;
            };
            LCDQueryClient: typeof _130.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    increaseMintable(value: _12.MsgIncreaseMintable): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    decreaseMintable(value: _12.MsgDecreaseMintable): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeLiquidityProvider(value: _12.MsgRevokeLiquidityProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setInflation(value: _12.MsgSetInflation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    increaseMintable(value: _12.MsgIncreaseMintable): {
                        typeUrl: string;
                        value: _12.MsgIncreaseMintable;
                    };
                    decreaseMintable(value: _12.MsgDecreaseMintable): {
                        typeUrl: string;
                        value: _12.MsgDecreaseMintable;
                    };
                    revokeLiquidityProvider(value: _12.MsgRevokeLiquidityProvider): {
                        typeUrl: string;
                        value: _12.MsgRevokeLiquidityProvider;
                    };
                    setInflation(value: _12.MsgSetInflation): {
                        typeUrl: string;
                        value: _12.MsgSetInflation;
                    };
                };
                fromJSON: {
                    increaseMintable(value: any): {
                        typeUrl: string;
                        value: _12.MsgIncreaseMintable;
                    };
                    decreaseMintable(value: any): {
                        typeUrl: string;
                        value: _12.MsgDecreaseMintable;
                    };
                    revokeLiquidityProvider(value: any): {
                        typeUrl: string;
                        value: _12.MsgRevokeLiquidityProvider;
                    };
                    setInflation(value: any): {
                        typeUrl: string;
                        value: _12.MsgSetInflation;
                    };
                };
                fromPartial: {
                    increaseMintable(value: _12.MsgIncreaseMintable): {
                        typeUrl: string;
                        value: _12.MsgIncreaseMintable;
                    };
                    decreaseMintable(value: _12.MsgDecreaseMintable): {
                        typeUrl: string;
                        value: _12.MsgDecreaseMintable;
                    };
                    revokeLiquidityProvider(value: _12.MsgRevokeLiquidityProvider): {
                        typeUrl: string;
                        value: _12.MsgRevokeLiquidityProvider;
                    };
                    setInflation(value: _12.MsgSetInflation): {
                        typeUrl: string;
                        value: _12.MsgSetInflation;
                    };
                };
            };
            AminoConverter: {
                "/em.issuer.v1.MsgIncreaseMintable": {
                    aminoType: string;
                    toAmino: ({ issuer, liquidityProvider, amount }: _12.MsgIncreaseMintable) => {
                        issuer: string;
                        liquidity_provider: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ issuer, liquidity_provider, amount }: {
                        issuer: string;
                        liquidity_provider: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _12.MsgIncreaseMintable;
                };
                "/em.issuer.v1.MsgDecreaseMintable": {
                    aminoType: string;
                    toAmino: ({ issuer, liquidityProvider, amount }: _12.MsgDecreaseMintable) => {
                        issuer: string;
                        liquidity_provider: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ issuer, liquidity_provider, amount }: {
                        issuer: string;
                        liquidity_provider: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _12.MsgDecreaseMintable;
                };
                "/em.issuer.v1.MsgRevokeLiquidityProvider": {
                    aminoType: string;
                    toAmino: ({ issuer, liquidityProvider }: _12.MsgRevokeLiquidityProvider) => {
                        issuer: string;
                        liquidity_provider: string;
                    };
                    fromAmino: ({ issuer, liquidity_provider }: {
                        issuer: string;
                        liquidity_provider: string;
                    }) => _12.MsgRevokeLiquidityProvider;
                };
                "/em.issuer.v1.MsgSetInflation": {
                    aminoType: string;
                    toAmino: ({ issuer, denom, inflationRate }: _12.MsgSetInflation) => {
                        issuer: string;
                        denom: string;
                        inflation_rate: string;
                    };
                    fromAmino: ({ issuer, denom, inflation_rate }: {
                        issuer: string;
                        denom: string;
                        inflation_rate: string;
                    }) => _12.MsgSetInflation;
                };
            };
            MsgIncreaseMintable: {
                encode(message: _12.MsgIncreaseMintable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.MsgIncreaseMintable;
                fromPartial(object: Partial<_12.MsgIncreaseMintable>): _12.MsgIncreaseMintable;
            };
            MsgIncreaseMintableResponse: {
                encode(_: _12.MsgIncreaseMintableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.MsgIncreaseMintableResponse;
                fromPartial(_: Partial<_12.MsgIncreaseMintableResponse>): _12.MsgIncreaseMintableResponse;
            };
            MsgDecreaseMintable: {
                encode(message: _12.MsgDecreaseMintable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.MsgDecreaseMintable;
                fromPartial(object: Partial<_12.MsgDecreaseMintable>): _12.MsgDecreaseMintable;
            };
            MsgDecreaseMintableResponse: {
                encode(_: _12.MsgDecreaseMintableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.MsgDecreaseMintableResponse;
                fromPartial(_: Partial<_12.MsgDecreaseMintableResponse>): _12.MsgDecreaseMintableResponse;
            };
            MsgRevokeLiquidityProvider: {
                encode(message: _12.MsgRevokeLiquidityProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.MsgRevokeLiquidityProvider;
                fromPartial(object: Partial<_12.MsgRevokeLiquidityProvider>): _12.MsgRevokeLiquidityProvider;
            };
            MsgRevokeLiquidityProviderResponse: {
                encode(_: _12.MsgRevokeLiquidityProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.MsgRevokeLiquidityProviderResponse;
                fromPartial(_: Partial<_12.MsgRevokeLiquidityProviderResponse>): _12.MsgRevokeLiquidityProviderResponse;
            };
            MsgSetInflation: {
                encode(message: _12.MsgSetInflation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.MsgSetInflation;
                fromPartial(object: Partial<_12.MsgSetInflation>): _12.MsgSetInflation;
            };
            MsgSetInflationResponse: {
                encode(_: _12.MsgSetInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.MsgSetInflationResponse;
                fromPartial(_: Partial<_12.MsgSetInflationResponse>): _12.MsgSetInflationResponse;
            };
            QueryIssuersRequest: {
                encode(_: _11.QueryIssuersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.QueryIssuersRequest;
                fromPartial(_: Partial<_11.QueryIssuersRequest>): _11.QueryIssuersRequest;
            };
            QueryIssuersResponse: {
                encode(message: _11.QueryIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.QueryIssuersResponse;
                fromPartial(object: Partial<_11.QueryIssuersResponse>): _11.QueryIssuersResponse;
            };
            Issuer: {
                encode(message: _10.Issuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.Issuer;
                fromPartial(object: Partial<_10.Issuer>): _10.Issuer;
            };
            Issuers: {
                encode(message: _10.Issuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.Issuers;
                fromPartial(object: Partial<_10.Issuers>): _10.Issuers;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.GenesisState;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
            };
        };
    }
    namespace liquidityprovider {
        const v1: {
            MsgClientImpl: typeof _143.MsgClientImpl;
            QueryClientImpl: typeof _138.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                list(request?: _15.QueryListRequest): Promise<_15.QueryListResponse>;
                mintable(request: _15.QueryMintableRequest): Promise<_15.QueryMintableResponse>;
            };
            LCDQueryClient: typeof _131.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    mintTokens(value: _16.MsgMintTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnTokens(value: _16.MsgBurnTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    mintTokens(value: _16.MsgMintTokens): {
                        typeUrl: string;
                        value: _16.MsgMintTokens;
                    };
                    burnTokens(value: _16.MsgBurnTokens): {
                        typeUrl: string;
                        value: _16.MsgBurnTokens;
                    };
                };
                fromJSON: {
                    mintTokens(value: any): {
                        typeUrl: string;
                        value: _16.MsgMintTokens;
                    };
                    burnTokens(value: any): {
                        typeUrl: string;
                        value: _16.MsgBurnTokens;
                    };
                };
                fromPartial: {
                    mintTokens(value: _16.MsgMintTokens): {
                        typeUrl: string;
                        value: _16.MsgMintTokens;
                    };
                    burnTokens(value: _16.MsgBurnTokens): {
                        typeUrl: string;
                        value: _16.MsgBurnTokens;
                    };
                };
            };
            AminoConverter: {
                "/em.liquidityprovider.v1.MsgMintTokens": {
                    aminoType: string;
                    toAmino: ({ liquidityProvider, amount }: _16.MsgMintTokens) => {
                        liquidity_provider: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ liquidity_provider, amount }: {
                        liquidity_provider: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _16.MsgMintTokens;
                };
                "/em.liquidityprovider.v1.MsgBurnTokens": {
                    aminoType: string;
                    toAmino: ({ liquidityProvider, amount }: _16.MsgBurnTokens) => {
                        liquidity_provider: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ liquidity_provider, amount }: {
                        liquidity_provider: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _16.MsgBurnTokens;
                };
            };
            MsgMintTokens: {
                encode(message: _16.MsgMintTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.MsgMintTokens;
                fromPartial(object: Partial<_16.MsgMintTokens>): _16.MsgMintTokens;
            };
            MsgMintTokensResponse: {
                encode(_: _16.MsgMintTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.MsgMintTokensResponse;
                fromPartial(_: Partial<_16.MsgMintTokensResponse>): _16.MsgMintTokensResponse;
            };
            MsgBurnTokens: {
                encode(message: _16.MsgBurnTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.MsgBurnTokens;
                fromPartial(object: Partial<_16.MsgBurnTokens>): _16.MsgBurnTokens;
            };
            MsgBurnTokensResponse: {
                encode(_: _16.MsgBurnTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.MsgBurnTokensResponse;
                fromPartial(_: Partial<_16.MsgBurnTokensResponse>): _16.MsgBurnTokensResponse;
            };
            QueryListRequest: {
                encode(_: _15.QueryListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _15.QueryListRequest;
                fromPartial(_: Partial<_15.QueryListRequest>): _15.QueryListRequest;
            };
            QueryListResponse: {
                encode(message: _15.QueryListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryListResponse;
                fromPartial(object: Partial<_15.QueryListResponse>): _15.QueryListResponse;
            };
            QueryMintableRequest: {
                encode(message: _15.QueryMintableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryMintableRequest;
                fromPartial(object: Partial<_15.QueryMintableRequest>): _15.QueryMintableRequest;
            };
            QueryMintableResponse: {
                encode(message: _15.QueryMintableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryMintableResponse;
                fromPartial(object: Partial<_15.QueryMintableResponse>): _15.QueryMintableResponse;
            };
            LiquidityProviderAccount: {
                encode(message: _14.LiquidityProviderAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.LiquidityProviderAccount;
                fromPartial(object: Partial<_14.LiquidityProviderAccount>): _14.LiquidityProviderAccount;
            };
            GenesisState: {
                encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
            };
            GenesisAcc: {
                encode(message: _13.GenesisAcc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.GenesisAcc;
                fromPartial(object: Partial<_13.GenesisAcc>): _13.GenesisAcc;
            };
        };
    }
    namespace market {
        const v1: {
            MsgClientImpl: typeof _144.MsgClientImpl;
            QueryClientImpl: typeof _139.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                byAccount(request: _18.QueryByAccountRequest): Promise<_18.QueryByAccountResponse>;
                instruments(request?: _18.QueryInstrumentsRequest): Promise<_18.QueryInstrumentsResponse>;
                instrument(request: _18.QueryInstrumentRequest): Promise<_18.QueryInstrumentResponse>;
            };
            LCDQueryClient: typeof _132.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addLimitOrder(value: _19.MsgAddLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addMarketOrder(value: _19.MsgAddMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _19.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelReplaceLimitOrder(value: _19.MsgCancelReplaceLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelReplaceMarketOrder(value: _19.MsgCancelReplaceMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addLimitOrder(value: _19.MsgAddLimitOrder): {
                        typeUrl: string;
                        value: _19.MsgAddLimitOrder;
                    };
                    addMarketOrder(value: _19.MsgAddMarketOrder): {
                        typeUrl: string;
                        value: _19.MsgAddMarketOrder;
                    };
                    cancelOrder(value: _19.MsgCancelOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelOrder;
                    };
                    cancelReplaceLimitOrder(value: _19.MsgCancelReplaceLimitOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceLimitOrder;
                    };
                    cancelReplaceMarketOrder(value: _19.MsgCancelReplaceMarketOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceMarketOrder;
                    };
                };
                fromJSON: {
                    addLimitOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgAddLimitOrder;
                    };
                    addMarketOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgAddMarketOrder;
                    };
                    cancelOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgCancelOrder;
                    };
                    cancelReplaceLimitOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceLimitOrder;
                    };
                    cancelReplaceMarketOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceMarketOrder;
                    };
                };
                fromPartial: {
                    addLimitOrder(value: _19.MsgAddLimitOrder): {
                        typeUrl: string;
                        value: _19.MsgAddLimitOrder;
                    };
                    addMarketOrder(value: _19.MsgAddMarketOrder): {
                        typeUrl: string;
                        value: _19.MsgAddMarketOrder;
                    };
                    cancelOrder(value: _19.MsgCancelOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelOrder;
                    };
                    cancelReplaceLimitOrder(value: _19.MsgCancelReplaceLimitOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceLimitOrder;
                    };
                    cancelReplaceMarketOrder(value: _19.MsgCancelReplaceMarketOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceMarketOrder;
                    };
                };
            };
            AminoConverter: {
                "/em.market.v1.MsgAddLimitOrder": {
                    aminoType: string;
                    toAmino: ({ owner, clientOrderId, timeInForce, source, destination }: _19.MsgAddLimitOrder) => {
                        owner: string;
                        client_order_id: string;
                        time_in_force: number;
                        source: {
                            denom: string;
                            amount: string;
                        };
                        destination: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ owner, client_order_id, time_in_force, source, destination }: {
                        owner: string;
                        client_order_id: string;
                        time_in_force: number;
                        source: {
                            denom: string;
                            amount: string;
                        };
                        destination: {
                            denom: string;
                            amount: string;
                        };
                    }) => _19.MsgAddLimitOrder;
                };
                "/em.market.v1.MsgAddMarketOrder": {
                    aminoType: string;
                    toAmino: ({ owner, clientOrderId, timeInForce, source, destination, maximumSlippage }: _19.MsgAddMarketOrder) => {
                        owner: string;
                        client_order_id: string;
                        time_in_force: number;
                        source: string;
                        destination: {
                            denom: string;
                            amount: string;
                        };
                        maximum_slippage: string;
                    };
                    fromAmino: ({ owner, client_order_id, time_in_force, source, destination, maximum_slippage }: {
                        owner: string;
                        client_order_id: string;
                        time_in_force: number;
                        source: string;
                        destination: {
                            denom: string;
                            amount: string;
                        };
                        maximum_slippage: string;
                    }) => _19.MsgAddMarketOrder;
                };
                "/em.market.v1.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: ({ owner, clientOrderId }: _19.MsgCancelOrder) => {
                        owner: string;
                        client_order_id: string;
                    };
                    fromAmino: ({ owner, client_order_id }: {
                        owner: string;
                        client_order_id: string;
                    }) => _19.MsgCancelOrder;
                };
                "/em.market.v1.MsgCancelReplaceLimitOrder": {
                    aminoType: string;
                    toAmino: ({ owner, originalClientOrderId, newClientOrderId, timeInForce, source, destination }: _19.MsgCancelReplaceLimitOrder) => {
                        owner: string;
                        original_client_order_id: string;
                        new_client_order_id: string;
                        time_in_force: number;
                        source: {
                            denom: string;
                            amount: string;
                        };
                        destination: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ owner, original_client_order_id, new_client_order_id, time_in_force, source, destination }: {
                        owner: string;
                        original_client_order_id: string;
                        new_client_order_id: string;
                        time_in_force: number;
                        source: {
                            denom: string;
                            amount: string;
                        };
                        destination: {
                            denom: string;
                            amount: string;
                        };
                    }) => _19.MsgCancelReplaceLimitOrder;
                };
                "/em.market.v1.MsgCancelReplaceMarketOrder": {
                    aminoType: string;
                    toAmino: ({ owner, originalClientOrderId, newClientOrderId, timeInForce, source, destination, maximumSlippage }: _19.MsgCancelReplaceMarketOrder) => {
                        owner: string;
                        original_client_order_id: string;
                        new_client_order_id: string;
                        time_in_force: number;
                        source: string;
                        destination: {
                            denom: string;
                            amount: string;
                        };
                        maximum_slippage: string;
                    };
                    fromAmino: ({ owner, original_client_order_id, new_client_order_id, time_in_force, source, destination, maximum_slippage }: {
                        owner: string;
                        original_client_order_id: string;
                        new_client_order_id: string;
                        time_in_force: number;
                        source: string;
                        destination: {
                            denom: string;
                            amount: string;
                        };
                        maximum_slippage: string;
                    }) => _19.MsgCancelReplaceMarketOrder;
                };
            };
            MsgAddLimitOrder: {
                encode(message: _19.MsgAddLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgAddLimitOrder;
                fromPartial(object: Partial<_19.MsgAddLimitOrder>): _19.MsgAddLimitOrder;
            };
            MsgAddLimitOrderResponse: {
                encode(_: _19.MsgAddLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgAddLimitOrderResponse;
                fromPartial(_: Partial<_19.MsgAddLimitOrderResponse>): _19.MsgAddLimitOrderResponse;
            };
            MsgAddMarketOrder: {
                encode(message: _19.MsgAddMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgAddMarketOrder;
                fromPartial(object: Partial<_19.MsgAddMarketOrder>): _19.MsgAddMarketOrder;
            };
            MsgAddMarketOrderResponse: {
                encode(_: _19.MsgAddMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgAddMarketOrderResponse;
                fromPartial(_: Partial<_19.MsgAddMarketOrderResponse>): _19.MsgAddMarketOrderResponse;
            };
            MsgCancelOrder: {
                encode(message: _19.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgCancelOrder;
                fromPartial(object: Partial<_19.MsgCancelOrder>): _19.MsgCancelOrder;
            };
            MsgCancelOrderResponse: {
                encode(_: _19.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgCancelOrderResponse;
                fromPartial(_: Partial<_19.MsgCancelOrderResponse>): _19.MsgCancelOrderResponse;
            };
            MsgCancelReplaceLimitOrder: {
                encode(message: _19.MsgCancelReplaceLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgCancelReplaceLimitOrder;
                fromPartial(object: Partial<_19.MsgCancelReplaceLimitOrder>): _19.MsgCancelReplaceLimitOrder;
            };
            MsgCancelReplaceLimitOrderResponse: {
                encode(_: _19.MsgCancelReplaceLimitOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgCancelReplaceLimitOrderResponse;
                fromPartial(_: Partial<_19.MsgCancelReplaceLimitOrderResponse>): _19.MsgCancelReplaceLimitOrderResponse;
            };
            MsgCancelReplaceMarketOrder: {
                encode(message: _19.MsgCancelReplaceMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgCancelReplaceMarketOrder;
                fromPartial(object: Partial<_19.MsgCancelReplaceMarketOrder>): _19.MsgCancelReplaceMarketOrder;
            };
            MsgCancelReplaceMarketOrderResponse: {
                encode(_: _19.MsgCancelReplaceMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgCancelReplaceMarketOrderResponse;
                fromPartial(_: Partial<_19.MsgCancelReplaceMarketOrderResponse>): _19.MsgCancelReplaceMarketOrderResponse;
            };
            QueryByAccountRequest: {
                encode(message: _18.QueryByAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryByAccountRequest;
                fromPartial(object: Partial<_18.QueryByAccountRequest>): _18.QueryByAccountRequest;
            };
            QueryByAccountResponse: {
                encode(message: _18.QueryByAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryByAccountResponse;
                fromPartial(object: Partial<_18.QueryByAccountResponse>): _18.QueryByAccountResponse;
            };
            QueryInstrumentsRequest: {
                encode(_: _18.QueryInstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.QueryInstrumentsRequest;
                fromPartial(_: Partial<_18.QueryInstrumentsRequest>): _18.QueryInstrumentsRequest;
            };
            QueryInstrumentsResponse: {
                encode(message: _18.QueryInstrumentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryInstrumentsResponse;
                fromPartial(object: Partial<_18.QueryInstrumentsResponse>): _18.QueryInstrumentsResponse;
            };
            QueryInstrumentsResponse_Element: {
                encode(message: _18.QueryInstrumentsResponse_Element, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryInstrumentsResponse_Element;
                fromPartial(object: Partial<_18.QueryInstrumentsResponse_Element>): _18.QueryInstrumentsResponse_Element;
            };
            QueryInstrumentRequest: {
                encode(message: _18.QueryInstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryInstrumentRequest;
                fromPartial(object: Partial<_18.QueryInstrumentRequest>): _18.QueryInstrumentRequest;
            };
            QueryInstrumentResponse: {
                encode(message: _18.QueryInstrumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryInstrumentResponse;
                fromPartial(object: Partial<_18.QueryInstrumentResponse>): _18.QueryInstrumentResponse;
            };
            QueryOrderResponse: {
                encode(message: _18.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryOrderResponse;
                fromPartial(object: Partial<_18.QueryOrderResponse>): _18.QueryOrderResponse;
            };
            timeInForceFromJSON(object: any): _17.TimeInForce;
            timeInForceToJSON(object: _17.TimeInForce): string;
            TimeInForce: typeof _17.TimeInForce;
            TimeInForceSDKType: typeof _17.TimeInForce;
            Instrument: {
                encode(message: _17.Instrument, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Instrument;
                fromPartial(object: Partial<_17.Instrument>): _17.Instrument;
            };
            Order: {
                encode(message: _17.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Order;
                fromPartial(object: Partial<_17.Order>): _17.Order;
            };
            ExecutionPlan: {
                encode(message: _17.ExecutionPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.ExecutionPlan;
                fromPartial(object: Partial<_17.ExecutionPlan>): _17.ExecutionPlan;
            };
            MarketData: {
                encode(message: _17.MarketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MarketData;
                fromPartial(object: Partial<_17.MarketData>): _17.MarketData;
            };
        };
    }
    namespace queries {
        const v1: {
            QueryClientImpl: typeof _140.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                circulating(request?: _20.QueryCirculatingRequest): Promise<_20.QueryCirculatingResponse>;
                missedBlocks(request: _20.QueryMissedBlocksRequest): Promise<_20.QueryMissedBlocksResponse>;
                spendable(request: _20.QuerySpendableRequest): Promise<_20.QuerySpendableResponse>;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            QueryCirculatingRequest: {
                encode(_: _20.QueryCirculatingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.QueryCirculatingRequest;
                fromPartial(_: Partial<_20.QueryCirculatingRequest>): _20.QueryCirculatingRequest;
            };
            QueryCirculatingResponse: {
                encode(message: _20.QueryCirculatingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryCirculatingResponse;
                fromPartial(object: Partial<_20.QueryCirculatingResponse>): _20.QueryCirculatingResponse;
            };
            QuerySpendableRequest: {
                encode(message: _20.QuerySpendableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QuerySpendableRequest;
                fromPartial(object: Partial<_20.QuerySpendableRequest>): _20.QuerySpendableRequest;
            };
            QuerySpendableResponse: {
                encode(message: _20.QuerySpendableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QuerySpendableResponse;
                fromPartial(object: Partial<_20.QuerySpendableResponse>): _20.QuerySpendableResponse;
            };
            QueryMissedBlocksRequest: {
                encode(message: _20.QueryMissedBlocksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryMissedBlocksRequest;
                fromPartial(object: Partial<_20.QueryMissedBlocksRequest>): _20.QueryMissedBlocksRequest;
            };
            QueryMissedBlocksResponse: {
                encode(message: _20.QueryMissedBlocksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryMissedBlocksResponse;
                fromPartial(object: Partial<_20.QueryMissedBlocksResponse>): _20.QueryMissedBlocksResponse;
            };
            MissedBlocksInfo: {
                encode(message: _20.MissedBlocksInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MissedBlocksInfo;
                fromPartial(object: Partial<_20.MissedBlocksInfo>): _20.MissedBlocksInfo;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            em: {
                authority: {
                    v1: _141.MsgClientImpl;
                };
                issuer: {
                    v1: _142.MsgClientImpl;
                };
                liquidityprovider: {
                    v1: _143.MsgClientImpl;
                };
                market: {
                    v1: _144.MsgClientImpl;
                };
            };
            cosmos: {
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
            em: {
                authority: {
                    v1: {
                        gasPrices(request?: _2.QueryGasPricesRequest): Promise<_2.QueryGasPricesResponse>;
                        upgradePlan(request?: _2.QueryUpgradePlanRequest): Promise<_2.QueryUpgradePlanResponse>;
                    };
                };
                buyback: {
                    v1: {
                        balance(request?: _5.QueryBalanceRequest): Promise<_5.QueryBalanceResponse>;
                        buybackTime(request?: _5.QueryBuybackTimeRequest): Promise<_5.QueryBuybackTimeResponse>;
                    };
                };
                inflation: {
                    v1: {
                        inflation(request?: _8.QueryInflationRequest): Promise<_8.QueryInflationResponse>;
                    };
                };
                issuer: {
                    v1: {
                        issuers(request?: _11.QueryIssuersRequest): Promise<_11.QueryIssuersResponse>;
                    };
                };
                liquidityprovider: {
                    v1: {
                        list(request?: _15.QueryListRequest): Promise<_15.QueryListResponse>;
                        mintable(request: _15.QueryMintableRequest): Promise<_15.QueryMintableResponse>;
                    };
                };
                market: {
                    v1: {
                        byAccount(request: _18.QueryByAccountRequest): Promise<_18.QueryByAccountResponse>;
                        instruments(request?: _18.QueryInstrumentsRequest): Promise<_18.QueryInstrumentsResponse>;
                        instrument(request: _18.QueryInstrumentRequest): Promise<_18.QueryInstrumentResponse>;
                    };
                };
                queries: {
                    v1: {
                        circulating(request?: _20.QueryCirculatingRequest): Promise<_20.QueryCirculatingResponse>;
                        missedBlocks(request: _20.QueryMissedBlocksRequest): Promise<_20.QueryMissedBlocksResponse>;
                        spendable(request: _20.QuerySpendableRequest): Promise<_20.QuerySpendableResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
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
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            em: {
                authority: {
                    v1: _127.LCDQueryClient;
                };
                buyback: {
                    v1: _128.LCDQueryClient;
                };
                inflation: {
                    v1: _129.LCDQueryClient;
                };
                issuer: {
                    v1: _130.LCDQueryClient;
                };
                liquidityprovider: {
                    v1: _131.LCDQueryClient;
                };
                market: {
                    v1: _132.LCDQueryClient;
                };
                queries: {
                    v1: _133.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
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
