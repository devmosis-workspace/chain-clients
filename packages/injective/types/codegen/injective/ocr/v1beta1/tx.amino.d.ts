import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/injective.ocr.v1beta1.MsgCreateFeed": {
        aminoType: string;
        toAmino: (message: MsgCreateFeed) => import("./tx").MsgCreateFeedAmino;
        fromAmino: (object: import("./tx").MsgCreateFeedAmino) => MsgCreateFeed;
    };
    "/injective.ocr.v1beta1.MsgUpdateFeed": {
        aminoType: string;
        toAmino: (message: MsgUpdateFeed) => import("./tx").MsgUpdateFeedAmino;
        fromAmino: (object: import("./tx").MsgUpdateFeedAmino) => MsgUpdateFeed;
    };
    "/injective.ocr.v1beta1.MsgTransmit": {
        aminoType: string;
        toAmino: (message: MsgTransmit) => import("./tx").MsgTransmitAmino;
        fromAmino: (object: import("./tx").MsgTransmitAmino) => MsgTransmit;
    };
    "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
        aminoType: string;
        toAmino: (message: MsgFundFeedRewardPool) => import("./tx").MsgFundFeedRewardPoolAmino;
        fromAmino: (object: import("./tx").MsgFundFeedRewardPoolAmino) => MsgFundFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
        aminoType: string;
        toAmino: (message: MsgWithdrawFeedRewardPool) => import("./tx").MsgWithdrawFeedRewardPoolAmino;
        fromAmino: (object: import("./tx").MsgWithdrawFeedRewardPoolAmino) => MsgWithdrawFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgSetPayees": {
        aminoType: string;
        toAmino: (message: MsgSetPayees) => import("./tx").MsgSetPayeesAmino;
        fromAmino: (object: import("./tx").MsgSetPayeesAmino) => MsgSetPayees;
    };
    "/injective.ocr.v1beta1.MsgTransferPayeeship": {
        aminoType: string;
        toAmino: (message: MsgTransferPayeeship) => import("./tx").MsgTransferPayeeshipAmino;
        fromAmino: (object: import("./tx").MsgTransferPayeeshipAmino) => MsgTransferPayeeship;
    };
    "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
        aminoType: string;
        toAmino: (message: MsgAcceptPayeeship) => import("./tx").MsgAcceptPayeeshipAmino;
        fromAmino: (object: import("./tx").MsgAcceptPayeeshipAmino) => MsgAcceptPayeeship;
    };
    "/injective.ocr.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
