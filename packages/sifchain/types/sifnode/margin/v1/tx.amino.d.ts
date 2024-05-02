import { MsgOpen, MsgClose, MsgForceClose, MsgUpdateParams, MsgUpdatePools, MsgUpdateRowanCollateral, MsgWhitelist, MsgDewhitelist, MsgAdminClose, MsgAdminCloseAll } from "./tx";
export declare const AminoConverter: {
    "/sifnode.margin.v1.MsgOpen": {
        aminoType: string;
        toAmino: (message: MsgOpen) => import("./tx").MsgOpenAmino;
        fromAmino: (object: import("./tx").MsgOpenAmino) => MsgOpen;
    };
    "/sifnode.margin.v1.MsgClose": {
        aminoType: string;
        toAmino: (message: MsgClose) => import("./tx").MsgCloseAmino;
        fromAmino: (object: import("./tx").MsgCloseAmino) => MsgClose;
    };
    "/sifnode.margin.v1.MsgForceClose": {
        aminoType: string;
        toAmino: (message: MsgForceClose) => import("./tx").MsgForceCloseAmino;
        fromAmino: (object: import("./tx").MsgForceCloseAmino) => MsgForceClose;
    };
    "/sifnode.margin.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/sifnode.margin.v1.MsgUpdatePools": {
        aminoType: string;
        toAmino: (message: MsgUpdatePools) => import("./tx").MsgUpdatePoolsAmino;
        fromAmino: (object: import("./tx").MsgUpdatePoolsAmino) => MsgUpdatePools;
    };
    "/sifnode.margin.v1.MsgUpdateRowanCollateral": {
        aminoType: string;
        toAmino: (message: MsgUpdateRowanCollateral) => import("./tx").MsgUpdateRowanCollateralAmino;
        fromAmino: (object: import("./tx").MsgUpdateRowanCollateralAmino) => MsgUpdateRowanCollateral;
    };
    "/sifnode.margin.v1.MsgWhitelist": {
        aminoType: string;
        toAmino: (message: MsgWhitelist) => import("./tx").MsgWhitelistAmino;
        fromAmino: (object: import("./tx").MsgWhitelistAmino) => MsgWhitelist;
    };
    "/sifnode.margin.v1.MsgDewhitelist": {
        aminoType: string;
        toAmino: (message: MsgDewhitelist) => import("./tx").MsgDewhitelistAmino;
        fromAmino: (object: import("./tx").MsgDewhitelistAmino) => MsgDewhitelist;
    };
    "/sifnode.margin.v1.MsgAdminClose": {
        aminoType: string;
        toAmino: (message: MsgAdminClose) => import("./tx").MsgAdminCloseAmino;
        fromAmino: (object: import("./tx").MsgAdminCloseAmino) => MsgAdminClose;
    };
    "/sifnode.margin.v1.MsgAdminCloseAll": {
        aminoType: string;
        toAmino: (message: MsgAdminCloseAll) => import("./tx").MsgAdminCloseAllAmino;
        fromAmino: (object: import("./tx").MsgAdminCloseAllAmino) => MsgAdminCloseAll;
    };
};
