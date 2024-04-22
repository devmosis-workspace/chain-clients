import { MsgScheduleAxelarCorkRequest, MsgRelayAxelarCorkRequest, MsgBumpAxelarCorkGasRequest, MsgCancelAxelarCorkRequest } from "./tx";
export declare const AminoConverter: {
    "/axelarcork.v1.MsgScheduleAxelarCorkRequest": {
        aminoType: string;
        toAmino: (message: MsgScheduleAxelarCorkRequest) => import("./tx").MsgScheduleAxelarCorkRequestAmino;
        fromAmino: (object: import("./tx").MsgScheduleAxelarCorkRequestAmino) => MsgScheduleAxelarCorkRequest;
    };
    "/axelarcork.v1.MsgRelayAxelarCorkRequest": {
        aminoType: string;
        toAmino: (message: MsgRelayAxelarCorkRequest) => import("./tx").MsgRelayAxelarCorkRequestAmino;
        fromAmino: (object: import("./tx").MsgRelayAxelarCorkRequestAmino) => MsgRelayAxelarCorkRequest;
    };
    "/axelarcork.v1.MsgBumpAxelarCorkGasRequest": {
        aminoType: string;
        toAmino: (message: MsgBumpAxelarCorkGasRequest) => import("./tx").MsgBumpAxelarCorkGasRequestAmino;
        fromAmino: (object: import("./tx").MsgBumpAxelarCorkGasRequestAmino) => MsgBumpAxelarCorkGasRequest;
    };
    "/axelarcork.v1.MsgCancelAxelarCorkRequest": {
        aminoType: string;
        toAmino: (message: MsgCancelAxelarCorkRequest) => import("./tx").MsgCancelAxelarCorkRequestAmino;
        fromAmino: (object: import("./tx").MsgCancelAxelarCorkRequestAmino) => MsgCancelAxelarCorkRequest;
    };
};
