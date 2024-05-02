import { MsgCreateProgram, MsgEditProgram, MsgActivateProgram, MsgCloseProgram, MsgSubmitFinding, MsgEditFinding, MsgActivateFinding, MsgConfirmFinding, MsgConfirmFindingPaid, MsgCloseFinding, MsgPublishFinding } from "./tx";
export declare const AminoConverter: {
    "/shentu.bounty.v1.MsgCreateProgram": {
        aminoType: string;
        toAmino: (message: MsgCreateProgram) => import("./tx").MsgCreateProgramAmino;
        fromAmino: (object: import("./tx").MsgCreateProgramAmino) => MsgCreateProgram;
    };
    "/shentu.bounty.v1.MsgEditProgram": {
        aminoType: string;
        toAmino: (message: MsgEditProgram) => import("./tx").MsgEditProgramAmino;
        fromAmino: (object: import("./tx").MsgEditProgramAmino) => MsgEditProgram;
    };
    "/shentu.bounty.v1.MsgActivateProgram": {
        aminoType: string;
        toAmino: (message: MsgActivateProgram) => import("./tx").MsgActivateProgramAmino;
        fromAmino: (object: import("./tx").MsgActivateProgramAmino) => MsgActivateProgram;
    };
    "/shentu.bounty.v1.MsgCloseProgram": {
        aminoType: string;
        toAmino: (message: MsgCloseProgram) => import("./tx").MsgCloseProgramAmino;
        fromAmino: (object: import("./tx").MsgCloseProgramAmino) => MsgCloseProgram;
    };
    "/shentu.bounty.v1.MsgSubmitFinding": {
        aminoType: string;
        toAmino: (message: MsgSubmitFinding) => import("./tx").MsgSubmitFindingAmino;
        fromAmino: (object: import("./tx").MsgSubmitFindingAmino) => MsgSubmitFinding;
    };
    "/shentu.bounty.v1.MsgEditFinding": {
        aminoType: string;
        toAmino: (message: MsgEditFinding) => import("./tx").MsgEditFindingAmino;
        fromAmino: (object: import("./tx").MsgEditFindingAmino) => MsgEditFinding;
    };
    "/shentu.bounty.v1.MsgActivateFinding": {
        aminoType: string;
        toAmino: (message: MsgActivateFinding) => import("./tx").MsgActivateFindingAmino;
        fromAmino: (object: import("./tx").MsgActivateFindingAmino) => MsgActivateFinding;
    };
    "/shentu.bounty.v1.MsgConfirmFinding": {
        aminoType: string;
        toAmino: (message: MsgConfirmFinding) => import("./tx").MsgConfirmFindingAmino;
        fromAmino: (object: import("./tx").MsgConfirmFindingAmino) => MsgConfirmFinding;
    };
    "/shentu.bounty.v1.MsgConfirmFindingPaid": {
        aminoType: string;
        toAmino: (message: MsgConfirmFindingPaid) => import("./tx").MsgConfirmFindingPaidAmino;
        fromAmino: (object: import("./tx").MsgConfirmFindingPaidAmino) => MsgConfirmFindingPaid;
    };
    "/shentu.bounty.v1.MsgCloseFinding": {
        aminoType: string;
        toAmino: (message: MsgCloseFinding) => import("./tx").MsgCloseFindingAmino;
        fromAmino: (object: import("./tx").MsgCloseFindingAmino) => MsgCloseFinding;
    };
    "/shentu.bounty.v1.MsgPublishFinding": {
        aminoType: string;
        toAmino: (message: MsgPublishFinding) => import("./tx").MsgPublishFindingAmino;
        fromAmino: (object: import("./tx").MsgPublishFindingAmino) => MsgPublishFinding;
    };
};
