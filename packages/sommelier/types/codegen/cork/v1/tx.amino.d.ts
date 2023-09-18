import { MsgSubmitCorkRequest, MsgScheduleCorkRequest } from "./tx";
export declare const AminoConverter: {
    "/cork.v1.MsgSubmitCorkRequest": {
        aminoType: string;
        toAmino: (message: MsgSubmitCorkRequest) => import("./tx").MsgSubmitCorkRequestAmino;
        fromAmino: (object: import("./tx").MsgSubmitCorkRequestAmino) => MsgSubmitCorkRequest;
    };
    "/cork.v1.MsgScheduleCorkRequest": {
        aminoType: string;
        toAmino: (message: MsgScheduleCorkRequest) => import("./tx").MsgScheduleCorkRequestAmino;
        fromAmino: (object: import("./tx").MsgScheduleCorkRequestAmino) => MsgScheduleCorkRequest;
    };
};
