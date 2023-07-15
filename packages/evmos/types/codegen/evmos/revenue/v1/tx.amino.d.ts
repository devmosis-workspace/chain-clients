import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterRevenue, MsgUpdateRevenue, MsgCancelRevenue, MsgUpdateParams } from "./tx";
export interface MsgRegisterRevenueAminoType extends AminoMsg {
    type: "/evmos.revenue.v1.MsgRegisterRevenue";
    value: {
        contract_address: string;
        deployer_address: string;
        withdrawer_address: string;
        nonces: string[];
    };
}
export interface MsgUpdateRevenueAminoType extends AminoMsg {
    type: "/evmos.revenue.v1.MsgUpdateRevenue";
    value: {
        contract_address: string;
        deployer_address: string;
        withdrawer_address: string;
    };
}
export interface MsgCancelRevenueAminoType extends AminoMsg {
    type: "/evmos.revenue.v1.MsgCancelRevenue";
    value: {
        contract_address: string;
        deployer_address: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/evmos.revenue.v1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            enable_revenue: boolean;
            developer_shares: string;
            addr_derivation_cost_create: string;
        };
    };
}
export declare const AminoConverter: {
    "/evmos.revenue.v1.MsgRegisterRevenue": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress, nonces }: MsgRegisterRevenue) => MsgRegisterRevenueAminoType["value"];
        fromAmino: ({ contract_address, deployer_address, withdrawer_address, nonces }: MsgRegisterRevenueAminoType["value"]) => MsgRegisterRevenue;
    };
    "/evmos.revenue.v1.MsgUpdateRevenue": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: MsgUpdateRevenue) => MsgUpdateRevenueAminoType["value"];
        fromAmino: ({ contract_address, deployer_address, withdrawer_address }: MsgUpdateRevenueAminoType["value"]) => MsgUpdateRevenue;
    };
    "/evmos.revenue.v1.MsgCancelRevenue": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress }: MsgCancelRevenue) => MsgCancelRevenueAminoType["value"];
        fromAmino: ({ contract_address, deployer_address }: MsgCancelRevenueAminoType["value"]) => MsgCancelRevenue;
    };
    "/evmos.revenue.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
