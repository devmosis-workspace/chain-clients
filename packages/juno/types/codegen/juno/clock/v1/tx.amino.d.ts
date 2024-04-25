import { MsgRegisterClockContract, MsgUnregisterClockContract, MsgUnjailClockContract, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/juno.clock.v1.MsgRegisterClockContract": {
        aminoType: string;
        toAmino: (message: MsgRegisterClockContract) => import("./tx").MsgRegisterClockContractAmino;
        fromAmino: (object: import("./tx").MsgRegisterClockContractAmino) => MsgRegisterClockContract;
    };
    "/juno.clock.v1.MsgUnregisterClockContract": {
        aminoType: string;
        toAmino: (message: MsgUnregisterClockContract) => import("./tx").MsgUnregisterClockContractAmino;
        fromAmino: (object: import("./tx").MsgUnregisterClockContractAmino) => MsgUnregisterClockContract;
    };
    "/juno.clock.v1.MsgUnjailClockContract": {
        aminoType: string;
        toAmino: (message: MsgUnjailClockContract) => import("./tx").MsgUnjailClockContractAmino;
        fromAmino: (object: import("./tx").MsgUnjailClockContractAmino) => MsgUnjailClockContract;
    };
    "/juno.clock.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
