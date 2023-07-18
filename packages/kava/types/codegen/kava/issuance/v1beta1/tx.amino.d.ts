import { AminoMsg } from "@cosmjs/amino";
import { MsgIssueTokens, MsgRedeemTokens, MsgBlockAddress, MsgUnblockAddress, MsgSetPauseStatus } from "./tx";
export interface MsgIssueTokensAminoType extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgIssueTokens";
    value: {
        sender: string;
        tokens: {
            denom: string;
            amount: string;
        };
        receiver: string;
    };
}
export interface MsgRedeemTokensAminoType extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgRedeemTokens";
    value: {
        sender: string;
        tokens: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgBlockAddressAminoType extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgBlockAddress";
    value: {
        sender: string;
        denom: string;
        blocked_address: string;
    };
}
export interface MsgUnblockAddressAminoType extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgUnblockAddress";
    value: {
        sender: string;
        denom: string;
        blocked_address: string;
    };
}
export interface MsgSetPauseStatusAminoType extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgSetPauseStatus";
    value: {
        sender: string;
        denom: string;
        status: boolean;
    };
}
export declare const AminoConverter: {
    "/kava.issuance.v1beta1.MsgIssueTokens": {
        aminoType: string;
        toAmino: ({ sender, tokens, receiver }: MsgIssueTokens) => MsgIssueTokensAminoType["value"];
        fromAmino: ({ sender, tokens, receiver }: MsgIssueTokensAminoType["value"]) => MsgIssueTokens;
    };
    "/kava.issuance.v1beta1.MsgRedeemTokens": {
        aminoType: string;
        toAmino: ({ sender, tokens }: MsgRedeemTokens) => MsgRedeemTokensAminoType["value"];
        fromAmino: ({ sender, tokens }: MsgRedeemTokensAminoType["value"]) => MsgRedeemTokens;
    };
    "/kava.issuance.v1beta1.MsgBlockAddress": {
        aminoType: string;
        toAmino: ({ sender, denom, blockedAddress }: MsgBlockAddress) => MsgBlockAddressAminoType["value"];
        fromAmino: ({ sender, denom, blocked_address }: MsgBlockAddressAminoType["value"]) => MsgBlockAddress;
    };
    "/kava.issuance.v1beta1.MsgUnblockAddress": {
        aminoType: string;
        toAmino: ({ sender, denom, blockedAddress }: MsgUnblockAddress) => MsgUnblockAddressAminoType["value"];
        fromAmino: ({ sender, denom, blocked_address }: MsgUnblockAddressAminoType["value"]) => MsgUnblockAddress;
    };
    "/kava.issuance.v1beta1.MsgSetPauseStatus": {
        aminoType: string;
        toAmino: ({ sender, denom, status }: MsgSetPauseStatus) => MsgSetPauseStatusAminoType["value"];
        fromAmino: ({ sender, denom, status }: MsgSetPauseStatusAminoType["value"]) => MsgSetPauseStatus;
    };
};
