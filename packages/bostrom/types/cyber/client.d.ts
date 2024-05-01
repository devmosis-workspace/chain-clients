import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const cyberAminoConverters: {
    "/cyber.resources.v1beta1.MsgInvestmint": {
        aminoType: string;
        toAmino: (message: import("./resources/v1beta1/tx").MsgInvestmint) => import("./resources/v1beta1/tx").MsgInvestmintAmino;
        fromAmino: (object: import("./resources/v1beta1/tx").MsgInvestmintAmino) => import("./resources/v1beta1/tx").MsgInvestmint;
    };
    "/cyber.grid.v1beta1.MsgCreateRoute": {
        aminoType: string;
        toAmino: (message: import("./grid/v1beta1/tx").MsgCreateRoute) => import("./grid/v1beta1/tx").MsgCreateRouteAmino;
        fromAmino: (object: import("./grid/v1beta1/tx").MsgCreateRouteAmino) => import("./grid/v1beta1/tx").MsgCreateRoute;
    };
    "/cyber.grid.v1beta1.MsgEditRoute": {
        aminoType: string;
        toAmino: (message: import("./grid/v1beta1/tx").MsgEditRoute) => import("./grid/v1beta1/tx").MsgEditRouteAmino;
        fromAmino: (object: import("./grid/v1beta1/tx").MsgEditRouteAmino) => import("./grid/v1beta1/tx").MsgEditRoute;
    };
    "/cyber.grid.v1beta1.MsgDeleteRoute": {
        aminoType: string;
        toAmino: (message: import("./grid/v1beta1/tx").MsgDeleteRoute) => import("./grid/v1beta1/tx").MsgDeleteRouteAmino;
        fromAmino: (object: import("./grid/v1beta1/tx").MsgDeleteRouteAmino) => import("./grid/v1beta1/tx").MsgDeleteRoute;
    };
    "/cyber.grid.v1beta1.MsgEditRouteName": {
        aminoType: string;
        toAmino: (message: import("./grid/v1beta1/tx").MsgEditRouteName) => import("./grid/v1beta1/tx").MsgEditRouteNameAmino;
        fromAmino: (object: import("./grid/v1beta1/tx").MsgEditRouteNameAmino) => import("./grid/v1beta1/tx").MsgEditRouteName;
    };
    "/cyber.graph.v1beta1.MsgCyberlink": {
        aminoType: string;
        toAmino: (message: import("./graph/v1beta1/tx").MsgCyberlink) => import("./graph/v1beta1/tx").MsgCyberlinkAmino;
        fromAmino: (object: import("./graph/v1beta1/tx").MsgCyberlinkAmino) => import("./graph/v1beta1/tx").MsgCyberlink;
    };
    "/cyber.dmn.v1beta1.MsgCreateThought": {
        aminoType: string;
        toAmino: (message: import("./dmn/v1beta1/tx").MsgCreateThought) => import("./dmn/v1beta1/tx").MsgCreateThoughtAmino;
        fromAmino: (object: import("./dmn/v1beta1/tx").MsgCreateThoughtAmino) => import("./dmn/v1beta1/tx").MsgCreateThought;
    };
    "/cyber.dmn.v1beta1.MsgForgetThought": {
        aminoType: string;
        toAmino: (message: import("./dmn/v1beta1/tx").MsgForgetThought) => import("./dmn/v1beta1/tx").MsgForgetThoughtAmino;
        fromAmino: (object: import("./dmn/v1beta1/tx").MsgForgetThoughtAmino) => import("./dmn/v1beta1/tx").MsgForgetThought;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtParticle": {
        aminoType: string;
        toAmino: (message: import("./dmn/v1beta1/tx").MsgChangeThoughtParticle) => import("./dmn/v1beta1/tx").MsgChangeThoughtParticleAmino;
        fromAmino: (object: import("./dmn/v1beta1/tx").MsgChangeThoughtParticleAmino) => import("./dmn/v1beta1/tx").MsgChangeThoughtParticle;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtName": {
        aminoType: string;
        toAmino: (message: import("./dmn/v1beta1/tx").MsgChangeThoughtName) => import("./dmn/v1beta1/tx").MsgChangeThoughtNameAmino;
        fromAmino: (object: import("./dmn/v1beta1/tx").MsgChangeThoughtNameAmino) => import("./dmn/v1beta1/tx").MsgChangeThoughtName;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtInput": {
        aminoType: string;
        toAmino: (message: import("./dmn/v1beta1/tx").MsgChangeThoughtInput) => import("./dmn/v1beta1/tx").MsgChangeThoughtInputAmino;
        fromAmino: (object: import("./dmn/v1beta1/tx").MsgChangeThoughtInputAmino) => import("./dmn/v1beta1/tx").MsgChangeThoughtInput;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice": {
        aminoType: string;
        toAmino: (message: import("./dmn/v1beta1/tx").MsgChangeThoughtGasPrice) => import("./dmn/v1beta1/tx").MsgChangeThoughtGasPriceAmino;
        fromAmino: (object: import("./dmn/v1beta1/tx").MsgChangeThoughtGasPriceAmino) => import("./dmn/v1beta1/tx").MsgChangeThoughtGasPrice;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod": {
        aminoType: string;
        toAmino: (message: import("./dmn/v1beta1/tx").MsgChangeThoughtPeriod) => import("./dmn/v1beta1/tx").MsgChangeThoughtPeriodAmino;
        fromAmino: (object: import("./dmn/v1beta1/tx").MsgChangeThoughtPeriodAmino) => import("./dmn/v1beta1/tx").MsgChangeThoughtPeriod;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtBlock": {
        aminoType: string;
        toAmino: (message: import("./dmn/v1beta1/tx").MsgChangeThoughtBlock) => import("./dmn/v1beta1/tx").MsgChangeThoughtBlockAmino;
        fromAmino: (object: import("./dmn/v1beta1/tx").MsgChangeThoughtBlockAmino) => import("./dmn/v1beta1/tx").MsgChangeThoughtBlock;
    };
};
export declare const cyberProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCyberClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCyberClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<any>;
