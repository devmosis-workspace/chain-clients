import { MsgCreateEscrow, MsgUpdateEscrow, MsgTransferToEscrow, MsgRefundEscrow } from "./tx";
export declare const AminoConverter: {
    "/starnamed.x.escrow.v1beta1.MsgCreateEscrow": {
        aminoType: string;
        toAmino: (message: MsgCreateEscrow) => import("./tx").MsgCreateEscrowAmino;
        fromAmino: (object: import("./tx").MsgCreateEscrowAmino) => MsgCreateEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow": {
        aminoType: string;
        toAmino: (message: MsgUpdateEscrow) => import("./tx").MsgUpdateEscrowAmino;
        fromAmino: (object: import("./tx").MsgUpdateEscrowAmino) => MsgUpdateEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow": {
        aminoType: string;
        toAmino: (message: MsgTransferToEscrow) => import("./tx").MsgTransferToEscrowAmino;
        fromAmino: (object: import("./tx").MsgTransferToEscrowAmino) => MsgTransferToEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgRefundEscrow": {
        aminoType: string;
        toAmino: (message: MsgRefundEscrow) => import("./tx").MsgRefundEscrowAmino;
        fromAmino: (object: import("./tx").MsgRefundEscrowAmino) => MsgRefundEscrow;
    };
};
