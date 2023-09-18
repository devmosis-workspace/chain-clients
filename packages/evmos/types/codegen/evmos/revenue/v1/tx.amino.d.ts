import { MsgRegisterRevenue, MsgUpdateRevenue, MsgCancelRevenue, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/evmos.revenue.v1.MsgRegisterRevenue": {
        aminoType: string;
        toAmino: (message: MsgRegisterRevenue) => import("./tx").MsgRegisterRevenueAmino;
        fromAmino: (object: import("./tx").MsgRegisterRevenueAmino) => MsgRegisterRevenue;
    };
    "/evmos.revenue.v1.MsgUpdateRevenue": {
        aminoType: string;
        toAmino: (message: MsgUpdateRevenue) => import("./tx").MsgUpdateRevenueAmino;
        fromAmino: (object: import("./tx").MsgUpdateRevenueAmino) => MsgUpdateRevenue;
    };
    "/evmos.revenue.v1.MsgCancelRevenue": {
        aminoType: string;
        toAmino: (message: MsgCancelRevenue) => import("./tx").MsgCancelRevenueAmino;
        fromAmino: (object: import("./tx").MsgCancelRevenueAmino) => MsgCancelRevenue;
    };
    "/evmos.revenue.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
