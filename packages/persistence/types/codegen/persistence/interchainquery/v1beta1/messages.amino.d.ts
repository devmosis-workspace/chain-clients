import { MsgSubmitQueryResponse } from "./messages";
export declare const AminoConverter: {
    "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: (message: MsgSubmitQueryResponse) => import("./messages").MsgSubmitQueryResponseAmino;
        fromAmino: (object: import("./messages").MsgSubmitQueryResponseAmino) => MsgSubmitQueryResponse;
    };
};
