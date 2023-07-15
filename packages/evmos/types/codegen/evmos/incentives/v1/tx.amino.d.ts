import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/evmos.incentives.v1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            enable_incentives: boolean;
            allocation_limit: string;
            incentives_epoch_identifier: string;
            reward_scaler: string;
        };
    };
}
export declare const AminoConverter: {
    "/evmos.incentives.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
