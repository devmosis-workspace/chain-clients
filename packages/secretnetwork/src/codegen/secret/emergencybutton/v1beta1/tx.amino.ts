import { AminoMsg } from "@cosmjs/amino";
import { MsgToggleIbcSwitch } from "./tx";
export interface MsgToggleIbcSwitchAminoType extends AminoMsg {
  type: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch";
  value: {
    sender: string;
  };
}
export const AminoConverter = {
  "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch": {
    aminoType: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch",
    toAmino: ({
      sender
    }: MsgToggleIbcSwitch): MsgToggleIbcSwitchAminoType["value"] => {
      return {
        sender
      };
    },
    fromAmino: ({
      sender
    }: MsgToggleIbcSwitchAminoType["value"]): MsgToggleIbcSwitch => {
      return {
        sender
      };
    }
  }
};