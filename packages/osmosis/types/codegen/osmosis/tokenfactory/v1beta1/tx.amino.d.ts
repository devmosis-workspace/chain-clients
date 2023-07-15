import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgForceTransfer } from "./tx";
export interface MsgCreateDenomAminoType extends AminoMsg {
    type: "osmosis/tokenfactory/create-denom";
    value: {
        sender: string;
        subdenom: string;
    };
}
export interface MsgMintAminoType extends AminoMsg {
    type: "osmosis/tokenfactory/mint";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
        mintToAddress: string;
    };
}
export interface MsgBurnAminoType extends AminoMsg {
    type: "osmosis/tokenfactory/burn";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
        burnFromAddress: string;
    };
}
export interface MsgChangeAdminAminoType extends AminoMsg {
    type: "osmosis/tokenfactory/change-admin";
    value: {
        sender: string;
        denom: string;
        new_admin: string;
    };
}
export interface MsgSetDenomMetadataAminoType extends AminoMsg {
    type: "osmosis/tokenfactory/set-denom-metadata";
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
        };
    };
}
export interface MsgForceTransferAminoType extends AminoMsg {
    type: "osmosis/tokenfactory/force-transfer";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
        transferFromAddress: string;
        transferToAddress: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: MsgCreateDenom) => MsgCreateDenomAminoType["value"];
        fromAmino: ({ sender, subdenom }: MsgCreateDenomAminoType["value"]) => MsgCreateDenom;
    };
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount, mintToAddress }: MsgMint) => MsgMintAminoType["value"];
        fromAmino: ({ sender, amount, mintToAddress }: MsgMintAminoType["value"]) => MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount, burnFromAddress }: MsgBurn) => MsgBurnAminoType["value"];
        fromAmino: ({ sender, amount, burnFromAddress }: MsgBurnAminoType["value"]) => MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: MsgChangeAdmin) => MsgChangeAdminAminoType["value"];
        fromAmino: ({ sender, denom, new_admin }: MsgChangeAdminAminoType["value"]) => MsgChangeAdmin;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: ({ sender, metadata }: MsgSetDenomMetadata) => MsgSetDenomMetadataAminoType["value"];
        fromAmino: ({ sender, metadata }: MsgSetDenomMetadataAminoType["value"]) => MsgSetDenomMetadata;
    };
    "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
        aminoType: string;
        toAmino: ({ sender, amount, transferFromAddress, transferToAddress }: MsgForceTransfer) => MsgForceTransferAminoType["value"];
        fromAmino: ({ sender, amount, transferFromAddress, transferToAddress }: MsgForceTransferAminoType["value"]) => MsgForceTransfer;
    };
};
