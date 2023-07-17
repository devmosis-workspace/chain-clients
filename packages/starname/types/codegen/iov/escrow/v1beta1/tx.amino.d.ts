import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateEscrow, MsgUpdateEscrow, MsgTransferToEscrow, MsgRefundEscrow } from "./tx";
export interface MsgCreateEscrowAminoType extends AminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow";
    value: {
        seller: string;
        fee_payer: string;
        object: {
            type_url: string;
            value: Uint8Array;
        };
        price: {
            denom: string;
            amount: string;
        }[];
        deadline: string;
    };
}
export interface MsgUpdateEscrowAminoType extends AminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow";
    value: {
        id: string;
        updater: string;
        fee_payer: string;
        seller: string;
        price: {
            denom: string;
            amount: string;
        }[];
        deadline: string;
    };
}
export interface MsgTransferToEscrowAminoType extends AminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow";
    value: {
        id: string;
        sender: string;
        fee_payer: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgRefundEscrowAminoType extends AminoMsg {
    type: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow";
    value: {
        id: string;
        sender: string;
        fee_payer: string;
    };
}
export declare const AminoConverter: {
    "/starnamed.x.escrow.v1beta1.MsgCreateEscrow": {
        aminoType: string;
        toAmino: ({ seller, feePayer, object, price, deadline }: MsgCreateEscrow) => MsgCreateEscrowAminoType["value"];
        fromAmino: ({ seller, fee_payer, object, price, deadline }: MsgCreateEscrowAminoType["value"]) => MsgCreateEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow": {
        aminoType: string;
        toAmino: ({ id, updater, feePayer, seller, price, deadline }: MsgUpdateEscrow) => MsgUpdateEscrowAminoType["value"];
        fromAmino: ({ id, updater, fee_payer, seller, price, deadline }: MsgUpdateEscrowAminoType["value"]) => MsgUpdateEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow": {
        aminoType: string;
        toAmino: ({ id, sender, feePayer, amount }: MsgTransferToEscrow) => MsgTransferToEscrowAminoType["value"];
        fromAmino: ({ id, sender, fee_payer, amount }: MsgTransferToEscrowAminoType["value"]) => MsgTransferToEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgRefundEscrow": {
        aminoType: string;
        toAmino: ({ id, sender, feePayer }: MsgRefundEscrow) => MsgRefundEscrowAminoType["value"];
        fromAmino: ({ id, sender, fee_payer }: MsgRefundEscrowAminoType["value"]) => MsgRefundEscrow;
    };
};
