import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateCDP, MsgDeposit, MsgWithdraw, MsgDrawDebt, MsgRepayDebt, MsgLiquidate } from "./tx";
export interface MsgCreateCDPAminoType extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgCreateCDP";
    value: {
        sender: string;
        collateral: {
            denom: string;
            amount: string;
        };
        principal: {
            denom: string;
            amount: string;
        };
        collateral_type: string;
    };
}
export interface MsgDepositAminoType extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        owner: string;
        collateral: {
            denom: string;
            amount: string;
        };
        collateral_type: string;
    };
}
export interface MsgWithdrawAminoType extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgWithdraw";
    value: {
        depositor: string;
        owner: string;
        collateral: {
            denom: string;
            amount: string;
        };
        collateral_type: string;
    };
}
export interface MsgDrawDebtAminoType extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgDrawDebt";
    value: {
        sender: string;
        collateral_type: string;
        principal: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgRepayDebtAminoType extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgRepayDebt";
    value: {
        sender: string;
        collateral_type: string;
        payment: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgLiquidateAminoType extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgLiquidate";
    value: {
        keeper: string;
        borrower: string;
        collateral_type: string;
    };
}
export declare const AminoConverter: {
    "/kava.cdp.v1beta1.MsgCreateCDP": {
        aminoType: string;
        toAmino: ({ sender, collateral, principal, collateralType }: MsgCreateCDP) => MsgCreateCDPAminoType["value"];
        fromAmino: ({ sender, collateral, principal, collateral_type }: MsgCreateCDPAminoType["value"]) => MsgCreateCDP;
    };
    "/kava.cdp.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, owner, collateral, collateralType }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ depositor, owner, collateral, collateral_type }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
    "/kava.cdp.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ depositor, owner, collateral, collateralType }: MsgWithdraw) => MsgWithdrawAminoType["value"];
        fromAmino: ({ depositor, owner, collateral, collateral_type }: MsgWithdrawAminoType["value"]) => MsgWithdraw;
    };
    "/kava.cdp.v1beta1.MsgDrawDebt": {
        aminoType: string;
        toAmino: ({ sender, collateralType, principal }: MsgDrawDebt) => MsgDrawDebtAminoType["value"];
        fromAmino: ({ sender, collateral_type, principal }: MsgDrawDebtAminoType["value"]) => MsgDrawDebt;
    };
    "/kava.cdp.v1beta1.MsgRepayDebt": {
        aminoType: string;
        toAmino: ({ sender, collateralType, payment }: MsgRepayDebt) => MsgRepayDebtAminoType["value"];
        fromAmino: ({ sender, collateral_type, payment }: MsgRepayDebtAminoType["value"]) => MsgRepayDebt;
    };
    "/kava.cdp.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: ({ keeper, borrower, collateralType }: MsgLiquidate) => MsgLiquidateAminoType["value"];
        fromAmino: ({ keeper, borrower, collateral_type }: MsgLiquidateAminoType["value"]) => MsgLiquidate;
    };
};
