import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/x/auth/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            max_memo_characters: string;
            tx_sig_limit: string;
            tx_size_cost_per_byte: string;
            sig_verify_cost_ed25519: string;
            sig_verify_cost_secp256k1: string;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.auth.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
