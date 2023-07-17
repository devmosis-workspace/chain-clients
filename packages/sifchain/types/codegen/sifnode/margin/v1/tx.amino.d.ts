import { AminoMsg } from "@cosmjs/amino";
import { MsgOpen, MsgClose, MsgForceClose, MsgUpdateParams, MsgUpdatePools, MsgUpdateRowanCollateral, MsgWhitelist, MsgDewhitelist, MsgAdminClose, MsgAdminCloseAll } from "./tx";
export interface MsgOpenAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgOpen";
    value: {
        signer: string;
        collateral_asset: string;
        collateral_amount: string;
        borrow_asset: string;
        position: number;
        leverage: string;
    };
}
export interface MsgCloseAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgClose";
    value: {
        signer: string;
        id: string;
    };
}
export interface MsgForceCloseAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgForceClose";
    value: {
        signer: string;
        mtp_address: string;
        id: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgUpdateParams";
    value: {
        signer: string;
        params: {
            leverage_max: string;
            interest_rate_max: string;
            interest_rate_min: string;
            interest_rate_increase: string;
            interest_rate_decrease: string;
            health_gain_factor: string;
            epoch_length: string;
            pools: string[];
            removal_queue_threshold: string;
            max_open_positions: string;
            pool_open_threshold: string;
            force_close_fund_percentage: string;
            force_close_fund_address: string;
            incremental_interest_payment_fund_percentage: string;
            incremental_interest_payment_fund_address: string;
            sq_modifier: string;
            safety_factor: string;
            closed_pools: string[];
            incremental_interest_payment_enabled: boolean;
            whitelisting_enabled: boolean;
            rowan_collateral_enabled: boolean;
        };
    };
}
export interface MsgUpdatePoolsAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgUpdatePools";
    value: {
        signer: string;
        pools: string[];
        closed_pools: string[];
    };
}
export interface MsgUpdateRowanCollateralAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgUpdateRowanCollateral";
    value: {
        signer: string;
        rowan_collateral_enabled: boolean;
    };
}
export interface MsgWhitelistAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgWhitelist";
    value: {
        signer: string;
        whitelisted_address: string;
    };
}
export interface MsgDewhitelistAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgDewhitelist";
    value: {
        signer: string;
        whitelisted_address: string;
    };
}
export interface MsgAdminCloseAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgAdminClose";
    value: {
        signer: string;
        mtp_address: string;
        id: string;
        take_margin_fund: boolean;
    };
}
export interface MsgAdminCloseAllAminoType extends AminoMsg {
    type: "/sifnode.margin.v1.MsgAdminCloseAll";
    value: {
        signer: string;
        take_margin_fund: boolean;
    };
}
export declare const AminoConverter: {
    "/sifnode.margin.v1.MsgOpen": {
        aminoType: string;
        toAmino: ({ signer, collateralAsset, collateralAmount, borrowAsset, position, leverage }: MsgOpen) => MsgOpenAminoType["value"];
        fromAmino: ({ signer, collateral_asset, collateral_amount, borrow_asset, position, leverage }: MsgOpenAminoType["value"]) => MsgOpen;
    };
    "/sifnode.margin.v1.MsgClose": {
        aminoType: string;
        toAmino: ({ signer, id }: MsgClose) => MsgCloseAminoType["value"];
        fromAmino: ({ signer, id }: MsgCloseAminoType["value"]) => MsgClose;
    };
    "/sifnode.margin.v1.MsgForceClose": {
        aminoType: string;
        toAmino: ({ signer, mtpAddress, id }: MsgForceClose) => MsgForceCloseAminoType["value"];
        fromAmino: ({ signer, mtp_address, id }: MsgForceCloseAminoType["value"]) => MsgForceClose;
    };
    "/sifnode.margin.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
    "/sifnode.margin.v1.MsgUpdatePools": {
        aminoType: string;
        toAmino: ({ signer, pools, closedPools }: MsgUpdatePools) => MsgUpdatePoolsAminoType["value"];
        fromAmino: ({ signer, pools, closed_pools }: MsgUpdatePoolsAminoType["value"]) => MsgUpdatePools;
    };
    "/sifnode.margin.v1.MsgUpdateRowanCollateral": {
        aminoType: string;
        toAmino: ({ signer, rowanCollateralEnabled }: MsgUpdateRowanCollateral) => MsgUpdateRowanCollateralAminoType["value"];
        fromAmino: ({ signer, rowan_collateral_enabled }: MsgUpdateRowanCollateralAminoType["value"]) => MsgUpdateRowanCollateral;
    };
    "/sifnode.margin.v1.MsgWhitelist": {
        aminoType: string;
        toAmino: ({ signer, whitelistedAddress }: MsgWhitelist) => MsgWhitelistAminoType["value"];
        fromAmino: ({ signer, whitelisted_address }: MsgWhitelistAminoType["value"]) => MsgWhitelist;
    };
    "/sifnode.margin.v1.MsgDewhitelist": {
        aminoType: string;
        toAmino: ({ signer, whitelistedAddress }: MsgDewhitelist) => MsgDewhitelistAminoType["value"];
        fromAmino: ({ signer, whitelisted_address }: MsgDewhitelistAminoType["value"]) => MsgDewhitelist;
    };
    "/sifnode.margin.v1.MsgAdminClose": {
        aminoType: string;
        toAmino: ({ signer, mtpAddress, id, takeMarginFund }: MsgAdminClose) => MsgAdminCloseAminoType["value"];
        fromAmino: ({ signer, mtp_address, id, take_margin_fund }: MsgAdminCloseAminoType["value"]) => MsgAdminClose;
    };
    "/sifnode.margin.v1.MsgAdminCloseAll": {
        aminoType: string;
        toAmino: ({ signer, takeMarginFund }: MsgAdminCloseAll) => MsgAdminCloseAllAminoType["value"];
        fromAmino: ({ signer, take_margin_fund }: MsgAdminCloseAllAminoType["value"]) => MsgAdminCloseAll;
    };
};
