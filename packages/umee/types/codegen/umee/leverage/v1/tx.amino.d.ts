import { MsgSupply, MsgWithdraw, MsgMaxWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgMaxBorrow, MsgRepay, MsgLiquidate, MsgLeveragedLiquidate, MsgSupplyCollateral, MsgGovUpdateRegistry, MsgGovUpdateSpecialAssets, MsgGovSetParams } from "./tx";
export declare const AminoConverter: {
    "/umee.leverage.v1.MsgSupply": {
        aminoType: string;
        toAmino: (message: MsgSupply) => import("./tx").MsgSupplyAmino;
        fromAmino: (object: import("./tx").MsgSupplyAmino) => MsgSupply;
    };
    "/umee.leverage.v1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: MsgWithdraw) => import("./tx").MsgWithdrawAmino;
        fromAmino: (object: import("./tx").MsgWithdrawAmino) => MsgWithdraw;
    };
    "/umee.leverage.v1.MsgMaxWithdraw": {
        aminoType: string;
        toAmino: (message: MsgMaxWithdraw) => import("./tx").MsgMaxWithdrawAmino;
        fromAmino: (object: import("./tx").MsgMaxWithdrawAmino) => MsgMaxWithdraw;
    };
    "/umee.leverage.v1.MsgCollateralize": {
        aminoType: string;
        toAmino: (message: MsgCollateralize) => import("./tx").MsgCollateralizeAmino;
        fromAmino: (object: import("./tx").MsgCollateralizeAmino) => MsgCollateralize;
    };
    "/umee.leverage.v1.MsgDecollateralize": {
        aminoType: string;
        toAmino: (message: MsgDecollateralize) => import("./tx").MsgDecollateralizeAmino;
        fromAmino: (object: import("./tx").MsgDecollateralizeAmino) => MsgDecollateralize;
    };
    "/umee.leverage.v1.MsgBorrow": {
        aminoType: string;
        toAmino: (message: MsgBorrow) => import("./tx").MsgBorrowAmino;
        fromAmino: (object: import("./tx").MsgBorrowAmino) => MsgBorrow;
    };
    "/umee.leverage.v1.MsgMaxBorrow": {
        aminoType: string;
        toAmino: (message: MsgMaxBorrow) => import("./tx").MsgMaxBorrowAmino;
        fromAmino: (object: import("./tx").MsgMaxBorrowAmino) => MsgMaxBorrow;
    };
    "/umee.leverage.v1.MsgRepay": {
        aminoType: string;
        toAmino: (message: MsgRepay) => import("./tx").MsgRepayAmino;
        fromAmino: (object: import("./tx").MsgRepayAmino) => MsgRepay;
    };
    "/umee.leverage.v1.MsgLiquidate": {
        aminoType: string;
        toAmino: (message: MsgLiquidate) => import("./tx").MsgLiquidateAmino;
        fromAmino: (object: import("./tx").MsgLiquidateAmino) => MsgLiquidate;
    };
    "/umee.leverage.v1.MsgLeveragedLiquidate": {
        aminoType: string;
        toAmino: (message: MsgLeveragedLiquidate) => import("./tx").MsgLeveragedLiquidateAmino;
        fromAmino: (object: import("./tx").MsgLeveragedLiquidateAmino) => MsgLeveragedLiquidate;
    };
    "/umee.leverage.v1.MsgSupplyCollateral": {
        aminoType: string;
        toAmino: (message: MsgSupplyCollateral) => import("./tx").MsgSupplyCollateralAmino;
        fromAmino: (object: import("./tx").MsgSupplyCollateralAmino) => MsgSupplyCollateral;
    };
    "/umee.leverage.v1.MsgGovUpdateRegistry": {
        aminoType: string;
        toAmino: (message: MsgGovUpdateRegistry) => import("./tx").MsgGovUpdateRegistryAmino;
        fromAmino: (object: import("./tx").MsgGovUpdateRegistryAmino) => MsgGovUpdateRegistry;
    };
    "/umee.leverage.v1.MsgGovUpdateSpecialAssets": {
        aminoType: string;
        toAmino: (message: MsgGovUpdateSpecialAssets) => import("./tx").MsgGovUpdateSpecialAssetsAmino;
        fromAmino: (object: import("./tx").MsgGovUpdateSpecialAssetsAmino) => MsgGovUpdateSpecialAssets;
    };
    "/umee.leverage.v1.MsgGovSetParams": {
        aminoType: string;
        toAmino: (message: MsgGovSetParams) => import("./tx").MsgGovSetParamsAmino;
        fromAmino: (object: import("./tx").MsgGovSetParamsAmino) => MsgGovSetParams;
    };
};
