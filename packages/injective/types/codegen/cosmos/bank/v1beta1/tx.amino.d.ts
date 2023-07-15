import { AminoMsg } from "@cosmjs/amino";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
export interface MsgSendAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgSend";
    value: {
        from_address: string;
        to_address: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgMultiSendAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgMultiSend";
    value: {
        inputs: {
            address: string;
            coins: {
                denom: string;
                amount: string;
            }[];
        }[];
        outputs: {
            address: string;
            coins: {
                denom: string;
                amount: string;
            }[];
        }[];
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/x/bank/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            send_enabled: {
                denom: string;
                enabled: boolean;
            }[];
            default_send_enabled: boolean;
        };
    };
}
export interface MsgSetSendEnabledAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgSetSendEnabled";
    value: {
        authority: string;
        send_enabled: {
            denom: string;
            enabled: boolean;
        }[];
        use_default_for: string[];
    };
}
export declare const AminoConverter: {
    "/cosmos.bank.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount }: MsgSend) => MsgSendAminoType["value"];
        fromAmino: ({ from_address, to_address, amount }: MsgSendAminoType["value"]) => MsgSend;
    };
    "/cosmos.bank.v1beta1.MsgMultiSend": {
        aminoType: string;
        toAmino: ({ inputs, outputs }: MsgMultiSend) => MsgMultiSendAminoType["value"];
        fromAmino: ({ inputs, outputs }: MsgMultiSendAminoType["value"]) => MsgMultiSend;
    };
    "/cosmos.bank.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
    "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
        aminoType: string;
        toAmino: ({ authority, sendEnabled, useDefaultFor }: MsgSetSendEnabled) => MsgSetSendEnabledAminoType["value"];
        fromAmino: ({ authority, send_enabled, use_default_for }: MsgSetSendEnabledAminoType["value"]) => MsgSetSendEnabled;
    };
};
