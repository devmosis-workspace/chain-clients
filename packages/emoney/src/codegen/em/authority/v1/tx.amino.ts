import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateIssuer, MsgDestroyIssuer, MsgSetGasPrices, MsgReplaceAuthority, MsgScheduleUpgrade, MsgSetParameters } from "./tx";
export interface MsgCreateIssuerAminoType extends AminoMsg {
  type: "/em.authority.v1.MsgCreateIssuer";
  value: {
    authority: string;
    issuer: string;
    denominations: {
      base: string;
      display: string;
      description: string;
    }[];
  };
}
export interface MsgDestroyIssuerAminoType extends AminoMsg {
  type: "/em.authority.v1.MsgDestroyIssuer";
  value: {
    authority: string;
    issuer: string;
  };
}
export interface MsgSetGasPricesAminoType extends AminoMsg {
  type: "/em.authority.v1.MsgSetGasPrices";
  value: {
    authority: string;
    gas_prices: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgReplaceAuthorityAminoType extends AminoMsg {
  type: "/em.authority.v1.MsgReplaceAuthority";
  value: {
    authority: string;
    new_authority: string;
  };
}
export interface MsgScheduleUpgradeAminoType extends AminoMsg {
  type: "/em.authority.v1.MsgScheduleUpgrade";
  value: {
    authority: string;
    plan: {
      name: string;
      time: {
        seconds: string;
        nanos: number;
      };
      height: string;
      info: string;
      upgraded_client_state: {
        type_url: string;
        value: Uint8Array;
      };
    };
  };
}
export interface MsgSetParametersAminoType extends AminoMsg {
  type: "/em.authority.v1.MsgSetParameters";
  value: {
    authority: string;
    changes: {
      subspace: string;
      key: string;
      value: string;
    }[];
  };
}
export const AminoConverter = {
  "/em.authority.v1.MsgCreateIssuer": {
    aminoType: "/em.authority.v1.MsgCreateIssuer",
    toAmino: ({
      authority,
      issuer,
      denominations
    }: MsgCreateIssuer): MsgCreateIssuerAminoType["value"] => {
      return {
        authority,
        issuer,
        denominations: denominations.map(el0 => ({
          base: el0.base,
          display: el0.display,
          description: el0.description
        }))
      };
    },
    fromAmino: ({
      authority,
      issuer,
      denominations
    }: MsgCreateIssuerAminoType["value"]): MsgCreateIssuer => {
      return {
        authority,
        issuer,
        denominations: denominations.map(el0 => ({
          base: el0.base,
          display: el0.display,
          description: el0.description
        }))
      };
    }
  },
  "/em.authority.v1.MsgDestroyIssuer": {
    aminoType: "/em.authority.v1.MsgDestroyIssuer",
    toAmino: ({
      authority,
      issuer
    }: MsgDestroyIssuer): MsgDestroyIssuerAminoType["value"] => {
      return {
        authority,
        issuer
      };
    },
    fromAmino: ({
      authority,
      issuer
    }: MsgDestroyIssuerAminoType["value"]): MsgDestroyIssuer => {
      return {
        authority,
        issuer
      };
    }
  },
  "/em.authority.v1.MsgSetGasPrices": {
    aminoType: "/em.authority.v1.MsgSetGasPrices",
    toAmino: ({
      authority,
      gasPrices
    }: MsgSetGasPrices): MsgSetGasPricesAminoType["value"] => {
      return {
        authority,
        gas_prices: gasPrices.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      authority,
      gas_prices
    }: MsgSetGasPricesAminoType["value"]): MsgSetGasPrices => {
      return {
        authority,
        gasPrices: gas_prices.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/em.authority.v1.MsgReplaceAuthority": {
    aminoType: "/em.authority.v1.MsgReplaceAuthority",
    toAmino: ({
      authority,
      newAuthority
    }: MsgReplaceAuthority): MsgReplaceAuthorityAminoType["value"] => {
      return {
        authority,
        new_authority: newAuthority
      };
    },
    fromAmino: ({
      authority,
      new_authority
    }: MsgReplaceAuthorityAminoType["value"]): MsgReplaceAuthority => {
      return {
        authority,
        newAuthority: new_authority
      };
    }
  },
  "/em.authority.v1.MsgScheduleUpgrade": {
    aminoType: "/em.authority.v1.MsgScheduleUpgrade",
    toAmino: ({
      authority,
      plan
    }: MsgScheduleUpgrade): MsgScheduleUpgradeAminoType["value"] => {
      return {
        authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: plan.height.toString(),
          info: plan.info,
          upgraded_client_state: {
            type_url: plan.upgradedClientState.typeUrl,
            value: plan.upgradedClientState.value
          }
        }
      };
    },
    fromAmino: ({
      authority,
      plan
    }: MsgScheduleUpgradeAminoType["value"]): MsgScheduleUpgrade => {
      return {
        authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: Long.fromString(plan.height),
          info: plan.info,
          upgradedClientState: {
            typeUrl: plan.upgraded_client_state.type_url,
            value: plan.upgraded_client_state.value
          }
        }
      };
    }
  },
  "/em.authority.v1.MsgSetParameters": {
    aminoType: "/em.authority.v1.MsgSetParameters",
    toAmino: ({
      authority,
      changes
    }: MsgSetParameters): MsgSetParametersAminoType["value"] => {
      return {
        authority,
        changes: changes.map(el0 => ({
          subspace: el0.subspace,
          key: el0.key,
          value: el0.value
        }))
      };
    },
    fromAmino: ({
      authority,
      changes
    }: MsgSetParametersAminoType["value"]): MsgSetParameters => {
      return {
        authority,
        changes: changes.map(el0 => ({
          subspace: el0.subspace,
          key: el0.key,
          value: el0.value
        }))
      };
    }
  }
};