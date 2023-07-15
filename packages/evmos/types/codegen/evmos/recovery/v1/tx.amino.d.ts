import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/evmos.recovery.v1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            enable_recovery: boolean;
            packet_timeout_duration: {
                seconds: string;
                nanos: number;
            };
        };
    };
}
export declare const AminoConverter: {
    "/evmos.recovery.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
