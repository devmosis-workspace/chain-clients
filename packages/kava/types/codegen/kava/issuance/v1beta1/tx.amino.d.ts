import { MsgIssueTokens, MsgRedeemTokens, MsgBlockAddress, MsgUnblockAddress, MsgSetPauseStatus } from "./tx";
export declare const AminoConverter: {
    "/kava.issuance.v1beta1.MsgIssueTokens": {
        aminoType: string;
        toAmino: (message: MsgIssueTokens) => import("./tx").MsgIssueTokensAmino;
        fromAmino: (object: import("./tx").MsgIssueTokensAmino) => MsgIssueTokens;
    };
    "/kava.issuance.v1beta1.MsgRedeemTokens": {
        aminoType: string;
        toAmino: (message: MsgRedeemTokens) => import("./tx").MsgRedeemTokensAmino;
        fromAmino: (object: import("./tx").MsgRedeemTokensAmino) => MsgRedeemTokens;
    };
    "/kava.issuance.v1beta1.MsgBlockAddress": {
        aminoType: string;
        toAmino: (message: MsgBlockAddress) => import("./tx").MsgBlockAddressAmino;
        fromAmino: (object: import("./tx").MsgBlockAddressAmino) => MsgBlockAddress;
    };
    "/kava.issuance.v1beta1.MsgUnblockAddress": {
        aminoType: string;
        toAmino: (message: MsgUnblockAddress) => import("./tx").MsgUnblockAddressAmino;
        fromAmino: (object: import("./tx").MsgUnblockAddressAmino) => MsgUnblockAddress;
    };
    "/kava.issuance.v1beta1.MsgSetPauseStatus": {
        aminoType: string;
        toAmino: (message: MsgSetPauseStatus) => import("./tx").MsgSetPauseStatusAmino;
        fromAmino: (object: import("./tx").MsgSetPauseStatusAmino) => MsgSetPauseStatus;
    };
};
