import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const emAminoConverters: {
    "/em.market.v1.MsgAddLimitOrder": {
        aminoType: string;
        toAmino: ({ owner, clientOrderId, timeInForce, source, destination }: import("./market/v1/tx").MsgAddLimitOrder) => {
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
        }) => import("./market/v1/tx").MsgAddLimitOrder;
    };
    "/em.market.v1.MsgAddMarketOrder": {
        aminoType: string;
        toAmino: ({ owner, clientOrderId, timeInForce, source, destination, maximumSlippage }: import("./market/v1/tx").MsgAddMarketOrder) => {
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
        }) => import("./market/v1/tx").MsgAddMarketOrder;
    };
    "/em.market.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: ({ owner, clientOrderId }: import("./market/v1/tx").MsgCancelOrder) => {
            owner: string;
            client_order_id: string;
        };
        fromAmino: ({ owner, client_order_id }: {
            owner: string;
            client_order_id: string;
        }) => import("./market/v1/tx").MsgCancelOrder;
    };
    "/em.market.v1.MsgCancelReplaceLimitOrder": {
        aminoType: string;
        toAmino: ({ owner, originalClientOrderId, newClientOrderId, timeInForce, source, destination }: import("./market/v1/tx").MsgCancelReplaceLimitOrder) => {
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
        }) => import("./market/v1/tx").MsgCancelReplaceLimitOrder;
    };
    "/em.market.v1.MsgCancelReplaceMarketOrder": {
        aminoType: string;
        toAmino: ({ owner, originalClientOrderId, newClientOrderId, timeInForce, source, destination, maximumSlippage }: import("./market/v1/tx").MsgCancelReplaceMarketOrder) => {
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
        }) => import("./market/v1/tx").MsgCancelReplaceMarketOrder;
    };
    "/em.liquidityprovider.v1.MsgMintTokens": {
        aminoType: string;
        toAmino: ({ liquidityProvider, amount }: import("./liquidityprovider/v1/tx").MsgMintTokens) => {
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
        }) => import("./liquidityprovider/v1/tx").MsgMintTokens;
    };
    "/em.liquidityprovider.v1.MsgBurnTokens": {
        aminoType: string;
        toAmino: ({ liquidityProvider, amount }: import("./liquidityprovider/v1/tx").MsgBurnTokens) => {
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
        }) => import("./liquidityprovider/v1/tx").MsgBurnTokens;
    };
    "/em.issuer.v1.MsgIncreaseMintable": {
        aminoType: string;
        toAmino: ({ issuer, liquidityProvider, amount }: import("./issuer/v1/tx").MsgIncreaseMintable) => {
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
        }) => import("./issuer/v1/tx").MsgIncreaseMintable;
    };
    "/em.issuer.v1.MsgDecreaseMintable": {
        aminoType: string;
        toAmino: ({ issuer, liquidityProvider, amount }: import("./issuer/v1/tx").MsgDecreaseMintable) => {
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
        }) => import("./issuer/v1/tx").MsgDecreaseMintable;
    };
    "/em.issuer.v1.MsgRevokeLiquidityProvider": {
        aminoType: string;
        toAmino: ({ issuer, liquidityProvider }: import("./issuer/v1/tx").MsgRevokeLiquidityProvider) => {
            issuer: string;
            liquidity_provider: string;
        };
        fromAmino: ({ issuer, liquidity_provider }: {
            issuer: string;
            liquidity_provider: string;
        }) => import("./issuer/v1/tx").MsgRevokeLiquidityProvider;
    };
    "/em.issuer.v1.MsgSetInflation": {
        aminoType: string;
        toAmino: ({ issuer, denom, inflationRate }: import("./issuer/v1/tx").MsgSetInflation) => {
            issuer: string;
            denom: string;
            inflation_rate: string;
        };
        fromAmino: ({ issuer, denom, inflation_rate }: {
            issuer: string;
            denom: string;
            inflation_rate: string;
        }) => import("./issuer/v1/tx").MsgSetInflation;
    };
    "/em.authority.v1.MsgCreateIssuer": {
        aminoType: string;
        toAmino: ({ authority, issuer, denominations }: import("./authority/v1/tx").MsgCreateIssuer) => {
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
        }) => import("./authority/v1/tx").MsgCreateIssuer;
    };
    "/em.authority.v1.MsgDestroyIssuer": {
        aminoType: string;
        toAmino: ({ authority, issuer }: import("./authority/v1/tx").MsgDestroyIssuer) => {
            authority: string;
            issuer: string;
        };
        fromAmino: ({ authority, issuer }: {
            authority: string;
            issuer: string;
        }) => import("./authority/v1/tx").MsgDestroyIssuer;
    };
    "/em.authority.v1.MsgSetGasPrices": {
        aminoType: string;
        toAmino: ({ authority, gasPrices }: import("./authority/v1/tx").MsgSetGasPrices) => {
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
        }) => import("./authority/v1/tx").MsgSetGasPrices;
    };
    "/em.authority.v1.MsgReplaceAuthority": {
        aminoType: string;
        toAmino: ({ authority, newAuthority }: import("./authority/v1/tx").MsgReplaceAuthority) => {
            authority: string;
            new_authority: string;
        };
        fromAmino: ({ authority, new_authority }: {
            authority: string;
            new_authority: string;
        }) => import("./authority/v1/tx").MsgReplaceAuthority;
    };
    "/em.authority.v1.MsgScheduleUpgrade": {
        aminoType: string;
        toAmino: ({ authority, plan }: import("./authority/v1/tx").MsgScheduleUpgrade) => {
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
        }) => import("./authority/v1/tx").MsgScheduleUpgrade;
    };
    "/em.authority.v1.MsgSetParameters": {
        aminoType: string;
        toAmino: ({ authority, changes }: import("./authority/v1/tx").MsgSetParameters) => {
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
        }) => import("./authority/v1/tx").MsgSetParameters;
    };
};
export declare const emProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningEmClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningEmClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
