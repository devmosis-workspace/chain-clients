import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/kyve.global.v1beta1.MsgUpdateParams";
  value: {
    authority: string;
    payload: string;
  };
}
export const AminoConverter = {
  "/kyve.global.v1beta1.MsgUpdateParams": {
    aminoType: "/kyve.global.v1beta1.MsgUpdateParams",
    toAmino: ({
      authority,
      payload
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        payload
      };
    },
    fromAmino: ({
      authority,
      payload
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        payload
      };
    }
  }
};