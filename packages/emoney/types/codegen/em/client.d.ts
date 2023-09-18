import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const emAminoConverters: {
    "/em.market.v1.MsgAddLimitOrder": {
        aminoType: string;
        toAmino: (message: import("./market/v1/tx").MsgAddLimitOrder) => import("./market/v1/tx").MsgAddLimitOrderAmino;
        fromAmino: (object: import("./market/v1/tx").MsgAddLimitOrderAmino) => import("./market/v1/tx").MsgAddLimitOrder;
    };
    "/em.market.v1.MsgAddMarketOrder": {
        aminoType: string;
        toAmino: (message: import("./market/v1/tx").MsgAddMarketOrder) => import("./market/v1/tx").MsgAddMarketOrderAmino;
        fromAmino: (object: import("./market/v1/tx").MsgAddMarketOrderAmino) => import("./market/v1/tx").MsgAddMarketOrder;
    };
    "/em.market.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: (message: import("./market/v1/tx").MsgCancelOrder) => import("./market/v1/tx").MsgCancelOrderAmino;
        fromAmino: (object: import("./market/v1/tx").MsgCancelOrderAmino) => import("./market/v1/tx").MsgCancelOrder;
    };
    "/em.market.v1.MsgCancelReplaceLimitOrder": {
        aminoType: string;
        toAmino: (message: import("./market/v1/tx").MsgCancelReplaceLimitOrder) => import("./market/v1/tx").MsgCancelReplaceLimitOrderAmino;
        fromAmino: (object: import("./market/v1/tx").MsgCancelReplaceLimitOrderAmino) => import("./market/v1/tx").MsgCancelReplaceLimitOrder;
    };
    "/em.market.v1.MsgCancelReplaceMarketOrder": {
        aminoType: string;
        toAmino: (message: import("./market/v1/tx").MsgCancelReplaceMarketOrder) => import("./market/v1/tx").MsgCancelReplaceMarketOrderAmino;
        fromAmino: (object: import("./market/v1/tx").MsgCancelReplaceMarketOrderAmino) => import("./market/v1/tx").MsgCancelReplaceMarketOrder;
    };
    "/em.liquidityprovider.v1.MsgMintTokens": {
        aminoType: string;
        toAmino: (message: import("./liquidityprovider/v1/tx").MsgMintTokens) => import("./liquidityprovider/v1/tx").MsgMintTokensAmino;
        fromAmino: (object: import("./liquidityprovider/v1/tx").MsgMintTokensAmino) => import("./liquidityprovider/v1/tx").MsgMintTokens;
    };
    "/em.liquidityprovider.v1.MsgBurnTokens": {
        aminoType: string;
        toAmino: (message: import("./liquidityprovider/v1/tx").MsgBurnTokens) => import("./liquidityprovider/v1/tx").MsgBurnTokensAmino;
        fromAmino: (object: import("./liquidityprovider/v1/tx").MsgBurnTokensAmino) => import("./liquidityprovider/v1/tx").MsgBurnTokens;
    };
    "/em.issuer.v1.MsgIncreaseMintable": {
        aminoType: string;
        toAmino: (message: import("./issuer/v1/tx").MsgIncreaseMintable) => import("./issuer/v1/tx").MsgIncreaseMintableAmino;
        fromAmino: (object: import("./issuer/v1/tx").MsgIncreaseMintableAmino) => import("./issuer/v1/tx").MsgIncreaseMintable;
    };
    "/em.issuer.v1.MsgDecreaseMintable": {
        aminoType: string;
        toAmino: (message: import("./issuer/v1/tx").MsgDecreaseMintable) => import("./issuer/v1/tx").MsgDecreaseMintableAmino;
        fromAmino: (object: import("./issuer/v1/tx").MsgDecreaseMintableAmino) => import("./issuer/v1/tx").MsgDecreaseMintable;
    };
    "/em.issuer.v1.MsgRevokeLiquidityProvider": {
        aminoType: string;
        toAmino: (message: import("./issuer/v1/tx").MsgRevokeLiquidityProvider) => import("./issuer/v1/tx").MsgRevokeLiquidityProviderAmino;
        fromAmino: (object: import("./issuer/v1/tx").MsgRevokeLiquidityProviderAmino) => import("./issuer/v1/tx").MsgRevokeLiquidityProvider;
    };
    "/em.issuer.v1.MsgSetInflation": {
        aminoType: string;
        toAmino: (message: import("./issuer/v1/tx").MsgSetInflation) => import("./issuer/v1/tx").MsgSetInflationAmino;
        fromAmino: (object: import("./issuer/v1/tx").MsgSetInflationAmino) => import("./issuer/v1/tx").MsgSetInflation;
    };
    "/em.authority.v1.MsgCreateIssuer": {
        aminoType: string;
        toAmino: (message: import("./authority/v1/tx").MsgCreateIssuer) => import("./authority/v1/tx").MsgCreateIssuerAmino;
        fromAmino: (object: import("./authority/v1/tx").MsgCreateIssuerAmino) => import("./authority/v1/tx").MsgCreateIssuer;
    };
    "/em.authority.v1.MsgDestroyIssuer": {
        aminoType: string;
        toAmino: (message: import("./authority/v1/tx").MsgDestroyIssuer) => import("./authority/v1/tx").MsgDestroyIssuerAmino;
        fromAmino: (object: import("./authority/v1/tx").MsgDestroyIssuerAmino) => import("./authority/v1/tx").MsgDestroyIssuer;
    };
    "/em.authority.v1.MsgSetGasPrices": {
        aminoType: string;
        toAmino: (message: import("./authority/v1/tx").MsgSetGasPrices) => import("./authority/v1/tx").MsgSetGasPricesAmino;
        fromAmino: (object: import("./authority/v1/tx").MsgSetGasPricesAmino) => import("./authority/v1/tx").MsgSetGasPrices;
    };
    "/em.authority.v1.MsgReplaceAuthority": {
        aminoType: string;
        toAmino: (message: import("./authority/v1/tx").MsgReplaceAuthority) => import("./authority/v1/tx").MsgReplaceAuthorityAmino;
        fromAmino: (object: import("./authority/v1/tx").MsgReplaceAuthorityAmino) => import("./authority/v1/tx").MsgReplaceAuthority;
    };
    "/em.authority.v1.MsgScheduleUpgrade": {
        aminoType: string;
        toAmino: (message: import("./authority/v1/tx").MsgScheduleUpgrade) => import("./authority/v1/tx").MsgScheduleUpgradeAmino;
        fromAmino: (object: import("./authority/v1/tx").MsgScheduleUpgradeAmino) => import("./authority/v1/tx").MsgScheduleUpgrade;
    };
    "/em.authority.v1.MsgSetParameters": {
        aminoType: string;
        toAmino: (message: import("./authority/v1/tx").MsgSetParameters) => import("./authority/v1/tx").MsgSetParametersAmino;
        fromAmino: (object: import("./authority/v1/tx").MsgSetParametersAmino) => import("./authority/v1/tx").MsgSetParameters;
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
