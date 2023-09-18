import { MsgIncreaseMintable, MsgDecreaseMintable, MsgRevokeLiquidityProvider, MsgSetInflation } from "./tx";
export declare const AminoConverter: {
    "/em.issuer.v1.MsgIncreaseMintable": {
        aminoType: string;
        toAmino: (message: MsgIncreaseMintable) => import("./tx").MsgIncreaseMintableAmino;
        fromAmino: (object: import("./tx").MsgIncreaseMintableAmino) => MsgIncreaseMintable;
    };
    "/em.issuer.v1.MsgDecreaseMintable": {
        aminoType: string;
        toAmino: (message: MsgDecreaseMintable) => import("./tx").MsgDecreaseMintableAmino;
        fromAmino: (object: import("./tx").MsgDecreaseMintableAmino) => MsgDecreaseMintable;
    };
    "/em.issuer.v1.MsgRevokeLiquidityProvider": {
        aminoType: string;
        toAmino: (message: MsgRevokeLiquidityProvider) => import("./tx").MsgRevokeLiquidityProviderAmino;
        fromAmino: (object: import("./tx").MsgRevokeLiquidityProviderAmino) => MsgRevokeLiquidityProvider;
    };
    "/em.issuer.v1.MsgSetInflation": {
        aminoType: string;
        toAmino: (message: MsgSetInflation) => import("./tx").MsgSetInflationAmino;
        fromAmino: (object: import("./tx").MsgSetInflationAmino) => MsgSetInflation;
    };
};
