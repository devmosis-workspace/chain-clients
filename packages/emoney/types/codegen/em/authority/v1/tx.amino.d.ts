import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/em.authority.v1.MsgCreateIssuer": {
        aminoType: string;
        toAmino: ({ authority, issuer, denominations }: MsgCreateIssuer) => MsgCreateIssuerAminoType["value"];
        fromAmino: ({ authority, issuer, denominations }: MsgCreateIssuerAminoType["value"]) => MsgCreateIssuer;
    };
    "/em.authority.v1.MsgDestroyIssuer": {
        aminoType: string;
        toAmino: ({ authority, issuer }: MsgDestroyIssuer) => MsgDestroyIssuerAminoType["value"];
        fromAmino: ({ authority, issuer }: MsgDestroyIssuerAminoType["value"]) => MsgDestroyIssuer;
    };
    "/em.authority.v1.MsgSetGasPrices": {
        aminoType: string;
        toAmino: ({ authority, gasPrices }: MsgSetGasPrices) => MsgSetGasPricesAminoType["value"];
        fromAmino: ({ authority, gas_prices }: MsgSetGasPricesAminoType["value"]) => MsgSetGasPrices;
    };
    "/em.authority.v1.MsgReplaceAuthority": {
        aminoType: string;
        toAmino: ({ authority, newAuthority }: MsgReplaceAuthority) => MsgReplaceAuthorityAminoType["value"];
        fromAmino: ({ authority, new_authority }: MsgReplaceAuthorityAminoType["value"]) => MsgReplaceAuthority;
    };
    "/em.authority.v1.MsgScheduleUpgrade": {
        aminoType: string;
        toAmino: ({ authority, plan }: MsgScheduleUpgrade) => MsgScheduleUpgradeAminoType["value"];
        fromAmino: ({ authority, plan }: MsgScheduleUpgradeAminoType["value"]) => MsgScheduleUpgrade;
    };
    "/em.authority.v1.MsgSetParameters": {
        aminoType: string;
        toAmino: ({ authority, changes }: MsgSetParameters) => MsgSetParametersAminoType["value"];
        fromAmino: ({ authority, changes }: MsgSetParametersAminoType["value"]) => MsgSetParameters;
    };
};
