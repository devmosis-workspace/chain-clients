import { AminoMsg } from "@cosmjs/amino";
import { MsgUnjail, MsgUpdateParams } from "./tx";
export interface MsgUnjailAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUnjail";
    value: {
        validator_addr: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/x/slashing/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            signed_blocks_window: string;
            min_signed_per_window: Uint8Array;
            downtime_jail_duration: {
                seconds: string;
                nanos: number;
            };
            slash_fraction_double_sign: Uint8Array;
            slash_fraction_downtime: Uint8Array;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: string;
        toAmino: ({ validatorAddr }: MsgUnjail) => MsgUnjailAminoType["value"];
        fromAmino: ({ validator_addr }: MsgUnjailAminoType["value"]) => MsgUnjail;
    };
    "/cosmos.slashing.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
