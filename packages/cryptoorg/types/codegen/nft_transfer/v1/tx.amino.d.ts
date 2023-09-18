import { MsgTransfer } from "./tx";
export declare const AminoConverter: {
    "/chainmain.nft_transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: (message: MsgTransfer) => import("./tx").MsgTransferAmino;
        fromAmino: (object: import("./tx").MsgTransferAmino) => MsgTransfer;
    };
};
