import { MsgCreatePool, MsgUpdatePool, MsgDisablePool, MsgEnablePool, MsgScheduleRuntimeUpgrade, MsgCancelRuntimeUpgrade, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/kyve.pool.v1beta1.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: MsgCreatePool) => import("./tx").MsgCreatePoolAmino;
        fromAmino: (object: import("./tx").MsgCreatePoolAmino) => MsgCreatePool;
    };
    "/kyve.pool.v1beta1.MsgUpdatePool": {
        aminoType: string;
        toAmino: (message: MsgUpdatePool) => import("./tx").MsgUpdatePoolAmino;
        fromAmino: (object: import("./tx").MsgUpdatePoolAmino) => MsgUpdatePool;
    };
    "/kyve.pool.v1beta1.MsgDisablePool": {
        aminoType: string;
        toAmino: (message: MsgDisablePool) => import("./tx").MsgDisablePoolAmino;
        fromAmino: (object: import("./tx").MsgDisablePoolAmino) => MsgDisablePool;
    };
    "/kyve.pool.v1beta1.MsgEnablePool": {
        aminoType: string;
        toAmino: (message: MsgEnablePool) => import("./tx").MsgEnablePoolAmino;
        fromAmino: (object: import("./tx").MsgEnablePoolAmino) => MsgEnablePool;
    };
    "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
        aminoType: string;
        toAmino: (message: MsgScheduleRuntimeUpgrade) => import("./tx").MsgScheduleRuntimeUpgradeAmino;
        fromAmino: (object: import("./tx").MsgScheduleRuntimeUpgradeAmino) => MsgScheduleRuntimeUpgrade;
    };
    "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
        aminoType: string;
        toAmino: (message: MsgCancelRuntimeUpgrade) => import("./tx").MsgCancelRuntimeUpgradeAmino;
        fromAmino: (object: import("./tx").MsgCancelRuntimeUpgradeAmino) => MsgCancelRuntimeUpgrade;
    };
    "/kyve.pool.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
