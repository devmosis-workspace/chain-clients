import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/evmos.revenue.v1.MsgRegisterRevenue": {
    aminoType: "/evmos.revenue.v1.MsgRegisterRevenue",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawerAddress,
      nonces
    }: MsgRegisterRevenue): MsgRegisterRevenueAminoType["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdrawer_address: withdrawerAddress,
        nonces: nonces.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdrawer_address,
      nonces
    }: MsgRegisterRevenueAminoType["value"]): MsgRegisterRevenue => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawerAddress: withdrawer_address,
        nonces: nonces.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/evmos.revenue.v1.MsgUpdateRevenue": {
    aminoType: "/evmos.revenue.v1.MsgUpdateRevenue",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawerAddress
    }: MsgUpdateRevenue): MsgUpdateRevenueAminoType["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdrawer_address: withdrawerAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdrawer_address
    }: MsgUpdateRevenueAminoType["value"]): MsgUpdateRevenue => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawerAddress: withdrawer_address
      };
    }
  },
  "/evmos.revenue.v1.MsgCancelRevenue": {
    aminoType: "/evmos.revenue.v1.MsgCancelRevenue",
    toAmino: ({
      contractAddress,
      deployerAddress
    }: MsgCancelRevenue): MsgCancelRevenueAminoType["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address
    }: MsgCancelRevenueAminoType["value"]): MsgCancelRevenue => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address
      };
    }
  },
  "/evmos.revenue.v1.MsgUpdateParams": {
    aminoType: "/evmos.revenue.v1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          enable_revenue: params.enableRevenue,
          developer_shares: params.developerShares,
          addr_derivation_cost_create: params.addrDerivationCostCreate.toString()
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          enableRevenue: params.enable_revenue,
          developerShares: params.developer_shares,
          addrDerivationCostCreate: Long.fromString(params.addr_derivation_cost_create)
        }
      };
    }
  }
};