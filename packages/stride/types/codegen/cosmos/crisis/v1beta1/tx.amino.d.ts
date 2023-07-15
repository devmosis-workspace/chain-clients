import { AminoMsg } from "@cosmjs/amino";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
export interface MsgVerifyInvariantAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgVerifyInvariant";
    value: {
        sender: string;
        invariant_module_name: string;
        invariant_route: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/x/crisis/MsgUpdateParams";
    value: {
        authority: string;
        constant_fee: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: string;
        toAmino: ({ sender, invariantModuleName, invariantRoute }: MsgVerifyInvariant) => MsgVerifyInvariantAminoType["value"];
        fromAmino: ({ sender, invariant_module_name, invariant_route }: MsgVerifyInvariantAminoType["value"]) => MsgVerifyInvariant;
    };
    "/cosmos.crisis.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, constantFee }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, constant_fee }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
