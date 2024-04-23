import { MsgScheduleCorkRequest } from "./tx";
export declare const AminoConverter: {
    "/cork.v2.MsgScheduleCorkRequest": {
        aminoType: string;
        toAmino: (message: MsgScheduleCorkRequest) => import("./tx").MsgScheduleCorkRequestAmino;
        fromAmino: (object: import("./tx").MsgScheduleCorkRequestAmino) => MsgScheduleCorkRequest;
    };
};
