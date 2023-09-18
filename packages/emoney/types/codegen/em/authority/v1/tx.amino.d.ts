import { MsgCreateIssuer, MsgDestroyIssuer, MsgSetGasPrices, MsgReplaceAuthority, MsgScheduleUpgrade, MsgSetParameters } from "./tx";
export declare const AminoConverter: {
    "/em.authority.v1.MsgCreateIssuer": {
        aminoType: string;
        toAmino: (message: MsgCreateIssuer) => import("./tx").MsgCreateIssuerAmino;
        fromAmino: (object: import("./tx").MsgCreateIssuerAmino) => MsgCreateIssuer;
    };
    "/em.authority.v1.MsgDestroyIssuer": {
        aminoType: string;
        toAmino: (message: MsgDestroyIssuer) => import("./tx").MsgDestroyIssuerAmino;
        fromAmino: (object: import("./tx").MsgDestroyIssuerAmino) => MsgDestroyIssuer;
    };
    "/em.authority.v1.MsgSetGasPrices": {
        aminoType: string;
        toAmino: (message: MsgSetGasPrices) => import("./tx").MsgSetGasPricesAmino;
        fromAmino: (object: import("./tx").MsgSetGasPricesAmino) => MsgSetGasPrices;
    };
    "/em.authority.v1.MsgReplaceAuthority": {
        aminoType: string;
        toAmino: (message: MsgReplaceAuthority) => import("./tx").MsgReplaceAuthorityAmino;
        fromAmino: (object: import("./tx").MsgReplaceAuthorityAmino) => MsgReplaceAuthority;
    };
    "/em.authority.v1.MsgScheduleUpgrade": {
        aminoType: string;
        toAmino: (message: MsgScheduleUpgrade) => import("./tx").MsgScheduleUpgradeAmino;
        fromAmino: (object: import("./tx").MsgScheduleUpgradeAmino) => MsgScheduleUpgrade;
    };
    "/em.authority.v1.MsgSetParameters": {
        aminoType: string;
        toAmino: (message: MsgSetParameters) => import("./tx").MsgSetParametersAmino;
        fromAmino: (object: import("./tx").MsgSetParametersAmino) => MsgSetParameters;
    };
};
