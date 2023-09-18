import { MsgSafetyFundSpend } from "./tx";
export declare const AminoConverter: {
    "/mars.safety.v1beta1.MsgSafetyFundSpend": {
        aminoType: string;
        toAmino: (message: MsgSafetyFundSpend) => import("./tx").MsgSafetyFundSpendAmino;
        fromAmino: (object: import("./tx").MsgSafetyFundSpendAmino) => MsgSafetyFundSpend;
    };
};
