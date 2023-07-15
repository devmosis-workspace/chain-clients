import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
export interface MsgCreateDenomAminoType extends AminoMsg {
    type: "/injective.tokenfactory.v1beta1.MsgCreateDenom";
    value: {
        sender: string;
        subdenom: string;
    };
}
export interface MsgMintAminoType extends AminoMsg {
    type: "/injective.tokenfactory.v1beta1.MsgMint";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgBurnAminoType extends AminoMsg {
    type: "/injective.tokenfactory.v1beta1.MsgBurn";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgChangeAdminAminoType extends AminoMsg {
    type: "/injective.tokenfactory.v1beta1.MsgChangeAdmin";
    value: {
        sender: string;
        denom: string;
        new_admin: string;
    };
}
export interface MsgSetDenomMetadataAminoType extends AminoMsg {
    type: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata";
    value: {
        sender: string;
        metadata: {
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
            }[];
            base: string;
            display: string;
            name: string;
            symbol: string;
            uri: string;
            uri_hash: string;
        };
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/injective.tokenfactory.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            send_enabled: {
                denom: string;
                enabled: boolean;
            }[];
            default_send_enabled: boolean;
        };
    };
}
export declare const AminoConverter: {
    "/injective.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: MsgCreateDenom) => MsgCreateDenomAminoType["value"];
        fromAmino: ({ sender, subdenom }: MsgCreateDenomAminoType["value"]) => MsgCreateDenom;
    };
    "/injective.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgMint) => MsgMintAminoType["value"];
        fromAmino: ({ sender, amount }: MsgMintAminoType["value"]) => MsgMint;
    };
    "/injective.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgBurn) => MsgBurnAminoType["value"];
        fromAmino: ({ sender, amount }: MsgBurnAminoType["value"]) => MsgBurn;
    };
    "/injective.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: MsgChangeAdmin) => MsgChangeAdminAminoType["value"];
        fromAmino: ({ sender, denom, new_admin }: MsgChangeAdminAminoType["value"]) => MsgChangeAdmin;
    };
    "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ sender, metadata }: MsgSetDenomMetadata) => MsgSetDenomMetadataAminoType["value"];
        fromAmino: ({ sender, metadata }: MsgSetDenomMetadataAminoType["value"]) => MsgSetDenomMetadata;
    };
    "/injective.tokenfactory.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
