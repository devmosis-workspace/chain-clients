import { MsgUpdateParams, MsgRegisterStaking, MsgUnregisterStaking, MsgRegisterGovernance, MsgUnregisterGovernance } from "./tx";
export declare const AminoConverter: {
    "/juno.cwhooks.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/juno.cwhooks.v1.MsgRegisterStaking": {
        aminoType: string;
        toAmino: (message: MsgRegisterStaking) => import("./tx").MsgRegisterStakingAmino;
        fromAmino: (object: import("./tx").MsgRegisterStakingAmino) => MsgRegisterStaking;
    };
    "/juno.cwhooks.v1.MsgUnregisterStaking": {
        aminoType: string;
        toAmino: (message: MsgUnregisterStaking) => import("./tx").MsgUnregisterStakingAmino;
        fromAmino: (object: import("./tx").MsgUnregisterStakingAmino) => MsgUnregisterStaking;
    };
    "/juno.cwhooks.v1.MsgRegisterGovernance": {
        aminoType: string;
        toAmino: (message: MsgRegisterGovernance) => import("./tx").MsgRegisterGovernanceAmino;
        fromAmino: (object: import("./tx").MsgRegisterGovernanceAmino) => MsgRegisterGovernance;
    };
    "/juno.cwhooks.v1.MsgUnregisterGovernance": {
        aminoType: string;
        toAmino: (message: MsgUnregisterGovernance) => import("./tx").MsgUnregisterGovernanceAmino;
        fromAmino: (object: import("./tx").MsgUnregisterGovernanceAmino) => MsgUnregisterGovernance;
    };
};
