import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/evmos.claims.v1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            enable_claims: boolean;
            airdrop_start_time: {
                seconds: string;
                nanos: number;
            };
            duration_until_decay: {
                seconds: string;
                nanos: number;
            };
            duration_of_decay: {
                seconds: string;
                nanos: number;
            };
            claims_denom: string;
            authorized_channels: string[];
            evm_channels: string[];
        };
    };
}
export declare const AminoConverter: {
    "/evmos.claims.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
