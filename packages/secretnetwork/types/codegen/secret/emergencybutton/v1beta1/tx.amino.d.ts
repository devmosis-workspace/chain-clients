import { AminoMsg } from "@cosmjs/amino";
import { MsgToggleIbcSwitch } from "./tx";
export interface MsgToggleIbcSwitchAminoType extends AminoMsg {
    type: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch";
    value: {
        sender: string;
    };
}
export declare const AminoConverter: {
    "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch": {
        aminoType: string;
        toAmino: ({ sender }: MsgToggleIbcSwitch) => MsgToggleIbcSwitchAminoType["value"];
        fromAmino: ({ sender }: MsgToggleIbcSwitchAminoType["value"]) => MsgToggleIbcSwitch;
    };
};
