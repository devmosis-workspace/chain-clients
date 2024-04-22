import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
export const AminoConverter = {
  "/akash.deployment.v1beta3.MsgCreateDeployment": {
    aminoType: "/akash.deployment.v1beta3.MsgCreateDeployment",
    toAmino: MsgCreateDeployment.toAmino,
    fromAmino: MsgCreateDeployment.fromAmino
  },
  "/akash.deployment.v1beta3.MsgDepositDeployment": {
    aminoType: "/akash.deployment.v1beta3.MsgDepositDeployment",
    toAmino: MsgDepositDeployment.toAmino,
    fromAmino: MsgDepositDeployment.fromAmino
  },
  "/akash.deployment.v1beta3.MsgUpdateDeployment": {
    aminoType: "/akash.deployment.v1beta3.MsgUpdateDeployment",
    toAmino: MsgUpdateDeployment.toAmino,
    fromAmino: MsgUpdateDeployment.fromAmino
  },
  "/akash.deployment.v1beta3.MsgCloseDeployment": {
    aminoType: "/akash.deployment.v1beta3.MsgCloseDeployment",
    toAmino: MsgCloseDeployment.toAmino,
    fromAmino: MsgCloseDeployment.fromAmino
  },
  "/akash.deployment.v1beta3.MsgCloseGroup": {
    aminoType: "/akash.deployment.v1beta3.MsgCloseGroup",
    toAmino: MsgCloseGroup.toAmino,
    fromAmino: MsgCloseGroup.fromAmino
  },
  "/akash.deployment.v1beta3.MsgPauseGroup": {
    aminoType: "/akash.deployment.v1beta3.MsgPauseGroup",
    toAmino: MsgPauseGroup.toAmino,
    fromAmino: MsgPauseGroup.fromAmino
  },
  "/akash.deployment.v1beta3.MsgStartGroup": {
    aminoType: "/akash.deployment.v1beta3.MsgStartGroup",
    toAmino: MsgStartGroup.toAmino,
    fromAmino: MsgStartGroup.fromAmino
  }
};