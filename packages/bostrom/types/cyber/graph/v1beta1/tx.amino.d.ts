import { MsgCyberlink } from "./tx";
export declare const AminoConverter: {
    "/cyber.graph.v1beta1.MsgCyberlink": {
        aminoType: string;
        toAmino: (message: MsgCyberlink) => import("./tx").MsgCyberlinkAmino;
        fromAmino: (object: import("./tx").MsgCyberlinkAmino) => MsgCyberlink;
    };
};
