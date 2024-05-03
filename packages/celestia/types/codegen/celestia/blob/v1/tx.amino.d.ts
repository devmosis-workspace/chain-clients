import { MsgPayForBlobs } from "./tx";
export declare const AminoConverter: {
    "/celestia.blob.v1.MsgPayForBlobs": {
        aminoType: string;
        toAmino: (message: MsgPayForBlobs) => import("./tx").MsgPayForBlobsAmino;
        fromAmino: (object: import("./tx").MsgPayForBlobsAmino) => MsgPayForBlobs;
    };
};
