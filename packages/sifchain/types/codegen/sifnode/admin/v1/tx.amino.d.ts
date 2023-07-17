import { AminoMsg } from "@cosmjs/amino";
import { MsgAddAccount, MsgRemoveAccount, MsgSetParams } from "./tx";
export interface MsgAddAccountAminoType extends AminoMsg {
    type: "/sifnode.admin.v1.MsgAddAccount";
    value: {
        signer: string;
        account: {
            admin_type: number;
            admin_address: string;
        };
    };
}
export interface MsgRemoveAccountAminoType extends AminoMsg {
    type: "/sifnode.admin.v1.MsgRemoveAccount";
    value: {
        signer: string;
        account: {
            admin_type: number;
            admin_address: string;
        };
    };
}
export interface MsgSetParamsAminoType extends AminoMsg {
    type: "/sifnode.admin.v1.MsgSetParams";
    value: {
        signer: string;
        params: {
            submit_proposal_fee: string;
        };
    };
}
export declare const AminoConverter: {
    "/sifnode.admin.v1.MsgAddAccount": {
        aminoType: string;
        toAmino: ({ signer, account }: MsgAddAccount) => MsgAddAccountAminoType["value"];
        fromAmino: ({ signer, account }: MsgAddAccountAminoType["value"]) => MsgAddAccount;
    };
    "/sifnode.admin.v1.MsgRemoveAccount": {
        aminoType: string;
        toAmino: ({ signer, account }: MsgRemoveAccount) => MsgRemoveAccountAminoType["value"];
        fromAmino: ({ signer, account }: MsgRemoveAccountAminoType["value"]) => MsgRemoveAccount;
    };
    "/sifnode.admin.v1.MsgSetParams": {
        aminoType: string;
        toAmino: ({ signer, params }: MsgSetParams) => MsgSetParamsAminoType["value"];
        fromAmino: ({ signer, params }: MsgSetParamsAminoType["value"]) => MsgSetParams;
    };
};
