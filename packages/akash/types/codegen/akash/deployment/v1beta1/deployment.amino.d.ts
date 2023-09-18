import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
export declare const AminoConverter: {
    "/akash.deployment.v1beta1.MsgCreateDeployment": {
        aminoType: string;
        toAmino: (message: MsgCreateDeployment) => import("./deployment").MsgCreateDeploymentAmino;
        fromAmino: (object: import("./deployment").MsgCreateDeploymentAmino) => MsgCreateDeployment;
    };
    "/akash.deployment.v1beta1.MsgDepositDeployment": {
        aminoType: string;
        toAmino: (message: MsgDepositDeployment) => import("./deployment").MsgDepositDeploymentAmino;
        fromAmino: (object: import("./deployment").MsgDepositDeploymentAmino) => MsgDepositDeployment;
    };
    "/akash.deployment.v1beta1.MsgUpdateDeployment": {
        aminoType: string;
        toAmino: (message: MsgUpdateDeployment) => import("./deployment").MsgUpdateDeploymentAmino;
        fromAmino: (object: import("./deployment").MsgUpdateDeploymentAmino) => MsgUpdateDeployment;
    };
    "/akash.deployment.v1beta1.MsgCloseDeployment": {
        aminoType: string;
        toAmino: (message: MsgCloseDeployment) => import("./deployment").MsgCloseDeploymentAmino;
        fromAmino: (object: import("./deployment").MsgCloseDeploymentAmino) => MsgCloseDeployment;
    };
    "/akash.deployment.v1beta1.MsgCloseGroup": {
        aminoType: string;
        toAmino: (message: MsgCloseGroup) => import("./group").MsgCloseGroupAmino;
        fromAmino: (object: import("./group").MsgCloseGroupAmino) => MsgCloseGroup;
    };
    "/akash.deployment.v1beta1.MsgPauseGroup": {
        aminoType: string;
        toAmino: (message: MsgPauseGroup) => import("./group").MsgPauseGroupAmino;
        fromAmino: (object: import("./group").MsgPauseGroupAmino) => MsgPauseGroup;
    };
    "/akash.deployment.v1beta1.MsgStartGroup": {
        aminoType: string;
        toAmino: (message: MsgStartGroup) => import("./group").MsgStartGroupAmino;
        fromAmino: (object: import("./group").MsgStartGroupAmino) => MsgStartGroup;
    };
};
