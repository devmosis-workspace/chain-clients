import { MsgToggleIbcSwitch } from "./tx";
export declare const AminoConverter: {
    "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch": {
        aminoType: string;
        toAmino: (message: MsgToggleIbcSwitch) => import("./tx").MsgToggleIbcSwitchAmino;
        fromAmino: (object: import("./tx").MsgToggleIbcSwitchAmino) => MsgToggleIbcSwitch;
    };
};
