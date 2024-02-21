import { MsgTransfer } from "./tx";
export declare const AminoConverter: {
    "/neutron.transfer.MsgTransfer": {
        aminoType: string;
        toAmino: (message: MsgTransfer) => import("./tx").MsgTransferAmino;
        fromAmino: (object: import("./tx").MsgTransferAmino) => MsgTransfer;
    };
};
