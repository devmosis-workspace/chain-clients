import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/kyve.global.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        payload: string;
    };
}
export declare const AminoConverter: {
    "/kyve.global.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, payload }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, payload }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
