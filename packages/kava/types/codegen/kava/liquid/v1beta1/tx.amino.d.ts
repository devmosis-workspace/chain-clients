import { AminoMsg } from "@cosmjs/amino";
import { MsgMintDerivative, MsgBurnDerivative } from "./tx";
export interface MsgMintDerivativeAminoType extends AminoMsg {
    type: "/kava.liquid.v1beta1.MsgMintDerivative";
    value: {
        sender: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgBurnDerivativeAminoType extends AminoMsg {
    type: "/kava.liquid.v1beta1.MsgBurnDerivative";
    value: {
        sender: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/kava.liquid.v1beta1.MsgMintDerivative": {
        aminoType: string;
        toAmino: ({ sender, validator, amount }: MsgMintDerivative) => MsgMintDerivativeAminoType["value"];
        fromAmino: ({ sender, validator, amount }: MsgMintDerivativeAminoType["value"]) => MsgMintDerivative;
    };
    "/kava.liquid.v1beta1.MsgBurnDerivative": {
        aminoType: string;
        toAmino: ({ sender, validator, amount }: MsgBurnDerivative) => MsgBurnDerivativeAminoType["value"];
        fromAmino: ({ sender, validator, amount }: MsgBurnDerivativeAminoType["value"]) => MsgBurnDerivative;
    };
};
