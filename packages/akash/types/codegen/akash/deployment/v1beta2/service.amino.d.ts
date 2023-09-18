import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
export declare const AminoConverter: {
    "/akash.deployment.v1beta2.MsgCreateDeployment": {
        aminoType: string;
        toAmino: (message: MsgCreateDeployment) => import("./deploymentmsg").MsgCreateDeploymentAmino;
        fromAmino: (object: import("./deploymentmsg").MsgCreateDeploymentAmino) => MsgCreateDeployment;
    };
    "/akash.deployment.v1beta2.MsgDepositDeployment": {
        aminoType: string;
        toAmino: (message: MsgDepositDeployment) => import("./deploymentmsg").MsgDepositDeploymentAmino;
        fromAmino: (object: import("./deploymentmsg").MsgDepositDeploymentAmino) => MsgDepositDeployment;
    };
    "/akash.deployment.v1beta2.MsgUpdateDeployment": {
        aminoType: string;
        toAmino: (message: MsgUpdateDeployment) => import("./deploymentmsg").MsgUpdateDeploymentAmino;
        fromAmino: (object: import("./deploymentmsg").MsgUpdateDeploymentAmino) => MsgUpdateDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseDeployment": {
        aminoType: string;
        toAmino: (message: MsgCloseDeployment) => import("./deploymentmsg").MsgCloseDeploymentAmino;
        fromAmino: (object: import("./deploymentmsg").MsgCloseDeploymentAmino) => MsgCloseDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseGroup": {
        aminoType: string;
        toAmino: (message: MsgCloseGroup) => import("./groupmsg").MsgCloseGroupAmino;
        fromAmino: (object: import("./groupmsg").MsgCloseGroupAmino) => MsgCloseGroup;
    };
    "/akash.deployment.v1beta2.MsgPauseGroup": {
        aminoType: string;
        toAmino: (message: MsgPauseGroup) => import("./groupmsg").MsgPauseGroupAmino;
        fromAmino: (object: import("./groupmsg").MsgPauseGroupAmino) => MsgPauseGroup;
    };
    "/akash.deployment.v1beta2.MsgStartGroup": {
        aminoType: string;
        toAmino: (message: MsgStartGroup) => import("./groupmsg").MsgStartGroupAmino;
        fromAmino: (object: import("./groupmsg").MsgStartGroupAmino) => MsgStartGroup;
    };
};
