import { MsgInvestmint } from "./tx";
export declare const AminoConverter: {
    "/cyber.resources.v1beta1.MsgInvestmint": {
        aminoType: string;
        toAmino: (message: MsgInvestmint) => import("./tx").MsgInvestmintAmino;
        fromAmino: (object: import("./tx").MsgInvestmintAmino) => MsgInvestmint;
    };
};
