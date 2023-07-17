import { AminoMsg } from "@cosmjs/amino";
import { MsgSupply, MsgWithdraw, MsgMaxWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgMaxBorrow, MsgRepay, MsgLiquidate, MsgLeveragedLiquidate, MsgSupplyCollateral, MsgGovUpdateRegistry } from "./tx";
export interface MsgSupplyAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgSupply";
    value: {
        supplier: string;
        asset: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgWithdrawAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgWithdraw";
    value: {
        supplier: string;
        asset: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgMaxWithdrawAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgMaxWithdraw";
    value: {
        supplier: string;
        denom: string;
    };
}
export interface MsgCollateralizeAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgCollateralize";
    value: {
        borrower: string;
        asset: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgDecollateralizeAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgDecollateralize";
    value: {
        borrower: string;
        asset: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgBorrowAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgBorrow";
    value: {
        borrower: string;
        asset: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgMaxBorrowAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgMaxBorrow";
    value: {
        borrower: string;
        denom: string;
    };
}
export interface MsgRepayAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgRepay";
    value: {
        borrower: string;
        asset: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgLiquidateAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgLiquidate";
    value: {
        liquidator: string;
        borrower: string;
        repayment: {
            denom: string;
            amount: string;
        };
        reward_denom: string;
    };
}
export interface MsgLeveragedLiquidateAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgLeveragedLiquidate";
    value: {
        liquidator: string;
        borrower: string;
        repay_denom: string;
        reward_denom: string;
    };
}
export interface MsgSupplyCollateralAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgSupplyCollateral";
    value: {
        supplier: string;
        asset: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgGovUpdateRegistryAminoType extends AminoMsg {
    type: "/umee.leverage.v1.MsgGovUpdateRegistry";
    value: {
        authority: string;
        title: string;
        description: string;
        add_tokens: {
            base_denom: string;
            reserve_factor: string;
            collateral_weight: string;
            liquidation_threshold: string;
            base_borrow_rate: string;
            kink_borrow_rate: string;
            max_borrow_rate: string;
            kink_utilization: string;
            liquidation_incentive: string;
            symbol_denom: string;
            exponent: number;
            enable_msg_supply: boolean;
            enable_msg_borrow: boolean;
            blacklist: boolean;
            max_collateral_share: string;
            max_supply_utilization: string;
            min_collateral_liquidity: string;
            max_supply: string;
            historic_medians: number;
        }[];
        update_tokens: {
            base_denom: string;
            reserve_factor: string;
            collateral_weight: string;
            liquidation_threshold: string;
            base_borrow_rate: string;
            kink_borrow_rate: string;
            max_borrow_rate: string;
            kink_utilization: string;
            liquidation_incentive: string;
            symbol_denom: string;
            exponent: number;
            enable_msg_supply: boolean;
            enable_msg_borrow: boolean;
            blacklist: boolean;
            max_collateral_share: string;
            max_supply_utilization: string;
            min_collateral_liquidity: string;
            max_supply: string;
            historic_medians: number;
        }[];
    };
}
export declare const AminoConverter: {
    "/umee.leverage.v1.MsgSupply": {
        aminoType: string;
        toAmino: ({ supplier, asset }: MsgSupply) => MsgSupplyAminoType["value"];
        fromAmino: ({ supplier, asset }: MsgSupplyAminoType["value"]) => MsgSupply;
    };
    "/umee.leverage.v1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ supplier, asset }: MsgWithdraw) => MsgWithdrawAminoType["value"];
        fromAmino: ({ supplier, asset }: MsgWithdrawAminoType["value"]) => MsgWithdraw;
    };
    "/umee.leverage.v1.MsgMaxWithdraw": {
        aminoType: string;
        toAmino: ({ supplier, denom }: MsgMaxWithdraw) => MsgMaxWithdrawAminoType["value"];
        fromAmino: ({ supplier, denom }: MsgMaxWithdrawAminoType["value"]) => MsgMaxWithdraw;
    };
    "/umee.leverage.v1.MsgCollateralize": {
        aminoType: string;
        toAmino: ({ borrower, asset }: MsgCollateralize) => MsgCollateralizeAminoType["value"];
        fromAmino: ({ borrower, asset }: MsgCollateralizeAminoType["value"]) => MsgCollateralize;
    };
    "/umee.leverage.v1.MsgDecollateralize": {
        aminoType: string;
        toAmino: ({ borrower, asset }: MsgDecollateralize) => MsgDecollateralizeAminoType["value"];
        fromAmino: ({ borrower, asset }: MsgDecollateralizeAminoType["value"]) => MsgDecollateralize;
    };
    "/umee.leverage.v1.MsgBorrow": {
        aminoType: string;
        toAmino: ({ borrower, asset }: MsgBorrow) => MsgBorrowAminoType["value"];
        fromAmino: ({ borrower, asset }: MsgBorrowAminoType["value"]) => MsgBorrow;
    };
    "/umee.leverage.v1.MsgMaxBorrow": {
        aminoType: string;
        toAmino: ({ borrower, denom }: MsgMaxBorrow) => MsgMaxBorrowAminoType["value"];
        fromAmino: ({ borrower, denom }: MsgMaxBorrowAminoType["value"]) => MsgMaxBorrow;
    };
    "/umee.leverage.v1.MsgRepay": {
        aminoType: string;
        toAmino: ({ borrower, asset }: MsgRepay) => MsgRepayAminoType["value"];
        fromAmino: ({ borrower, asset }: MsgRepayAminoType["value"]) => MsgRepay;
    };
    "/umee.leverage.v1.MsgLiquidate": {
        aminoType: string;
        toAmino: ({ liquidator, borrower, repayment, rewardDenom }: MsgLiquidate) => MsgLiquidateAminoType["value"];
        fromAmino: ({ liquidator, borrower, repayment, reward_denom }: MsgLiquidateAminoType["value"]) => MsgLiquidate;
    };
    "/umee.leverage.v1.MsgLeveragedLiquidate": {
        aminoType: string;
        toAmino: ({ liquidator, borrower, repayDenom, rewardDenom }: MsgLeveragedLiquidate) => MsgLeveragedLiquidateAminoType["value"];
        fromAmino: ({ liquidator, borrower, repay_denom, reward_denom }: MsgLeveragedLiquidateAminoType["value"]) => MsgLeveragedLiquidate;
    };
    "/umee.leverage.v1.MsgSupplyCollateral": {
        aminoType: string;
        toAmino: ({ supplier, asset }: MsgSupplyCollateral) => MsgSupplyCollateralAminoType["value"];
        fromAmino: ({ supplier, asset }: MsgSupplyCollateralAminoType["value"]) => MsgSupplyCollateral;
    };
    "/umee.leverage.v1.MsgGovUpdateRegistry": {
        aminoType: string;
        toAmino: ({ authority, title, description, addTokens, updateTokens }: MsgGovUpdateRegistry) => MsgGovUpdateRegistryAminoType["value"];
        fromAmino: ({ authority, title, description, add_tokens, update_tokens }: MsgGovUpdateRegistryAminoType["value"]) => MsgGovUpdateRegistry;
    };
};
