import { AminoMsg } from "@cosmjs/amino";
import { MsgSafetyFundSpend } from "./tx";
export interface MsgSafetyFundSpendAminoType extends AminoMsg {
    type: "/mars.safety.v1beta1.MsgSafetyFundSpend";
    value: {
        authority: string;
        recipient: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/mars.safety.v1beta1.MsgSafetyFundSpend": {
        aminoType: string;
        toAmino: ({ authority, recipient, amount }: MsgSafetyFundSpend) => MsgSafetyFundSpendAminoType["value"];
        fromAmino: ({ authority, recipient, amount }: MsgSafetyFundSpendAminoType["value"]) => MsgSafetyFundSpend;
    };
};
