import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin } from "./tx";
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
    };
}
export interface MsgChangeAdminAminoType extends AminoMsg {
    type: "osmosis/tokenfactory/change-admin";
    value: {
        sender: string;
        denom: string;
        newAdmin: string;
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
        toAmino: ({ sender, amount }: MsgMint) => MsgMintAminoType["value"];
        fromAmino: ({ sender, amount }: MsgMintAminoType["value"]) => MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgBurn) => MsgBurnAminoType["value"];
        fromAmino: ({ sender, amount }: MsgBurnAminoType["value"]) => MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: MsgChangeAdmin) => MsgChangeAdminAminoType["value"];
        fromAmino: ({ sender, denom, newAdmin }: MsgChangeAdminAminoType["value"]) => MsgChangeAdmin;
    };
};
