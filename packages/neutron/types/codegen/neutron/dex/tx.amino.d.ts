import { MsgDeposit, MsgWithdrawal, MsgPlaceLimitOrder, MsgWithdrawFilledLimitOrder, MsgCancelLimitOrder, MsgMultiHopSwap, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/neutron.dex.MsgDeposit": {
        aminoType: string;
        toAmino: (message: MsgDeposit) => import("./tx").MsgDepositAmino;
        fromAmino: (object: import("./tx").MsgDepositAmino) => MsgDeposit;
    };
    "/neutron.dex.MsgWithdrawal": {
        aminoType: string;
        toAmino: (message: MsgWithdrawal) => import("./tx").MsgWithdrawalAmino;
        fromAmino: (object: import("./tx").MsgWithdrawalAmino) => MsgWithdrawal;
    };
    "/neutron.dex.MsgPlaceLimitOrder": {
        aminoType: string;
        toAmino: (message: MsgPlaceLimitOrder) => import("./tx").MsgPlaceLimitOrderAmino;
        fromAmino: (object: import("./tx").MsgPlaceLimitOrderAmino) => MsgPlaceLimitOrder;
    };
    "/neutron.dex.MsgWithdrawFilledLimitOrder": {
        aminoType: string;
        toAmino: (message: MsgWithdrawFilledLimitOrder) => import("./tx").MsgWithdrawFilledLimitOrderAmino;
        fromAmino: (object: import("./tx").MsgWithdrawFilledLimitOrderAmino) => MsgWithdrawFilledLimitOrder;
    };
    "/neutron.dex.MsgCancelLimitOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelLimitOrder) => import("./tx").MsgCancelLimitOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelLimitOrderAmino) => MsgCancelLimitOrder;
    };
    "/neutron.dex.MsgMultiHopSwap": {
        aminoType: string;
        toAmino: (message: MsgMultiHopSwap) => import("./tx").MsgMultiHopSwapAmino;
        fromAmino: (object: import("./tx").MsgMultiHopSwapAmino) => MsgMultiHopSwap;
    };
    "/neutron.dex.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
