import { MsgSendPacket } from "./msgs";
export declare const AminoConverter: {
    "/agoric.vibc.MsgSendPacket": {
        aminoType: string;
        toAmino: (message: MsgSendPacket) => import("./msgs").MsgSendPacketAmino;
        fromAmino: (object: import("./msgs").MsgSendPacketAmino) => MsgSendPacket;
    };
};
