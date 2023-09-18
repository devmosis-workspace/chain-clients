import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgConfirmLogicCall, MsgSendToCosmosClaim, MsgExecuteIbcAutoForwards, MsgBatchSendToEthClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgLogicCallExecutedClaim, MsgSetOrchestratorAddress, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export const AminoConverter = {
  "/gravity.v1.MsgValsetConfirm": {
    aminoType: "/gravity.v1.MsgValsetConfirm",
    toAmino: MsgValsetConfirm.toAmino,
    fromAmino: MsgValsetConfirm.fromAmino
  },
  "/gravity.v1.MsgSendToEth": {
    aminoType: "/gravity.v1.MsgSendToEth",
    toAmino: MsgSendToEth.toAmino,
    fromAmino: MsgSendToEth.fromAmino
  },
  "/gravity.v1.MsgRequestBatch": {
    aminoType: "/gravity.v1.MsgRequestBatch",
    toAmino: MsgRequestBatch.toAmino,
    fromAmino: MsgRequestBatch.fromAmino
  },
  "/gravity.v1.MsgConfirmBatch": {
    aminoType: "/gravity.v1.MsgConfirmBatch",
    toAmino: MsgConfirmBatch.toAmino,
    fromAmino: MsgConfirmBatch.fromAmino
  },
  "/gravity.v1.MsgConfirmLogicCall": {
    aminoType: "/gravity.v1.MsgConfirmLogicCall",
    toAmino: MsgConfirmLogicCall.toAmino,
    fromAmino: MsgConfirmLogicCall.fromAmino
  },
  "/gravity.v1.MsgSendToCosmosClaim": {
    aminoType: "/gravity.v1.MsgSendToCosmosClaim",
    toAmino: MsgSendToCosmosClaim.toAmino,
    fromAmino: MsgSendToCosmosClaim.fromAmino
  },
  "/gravity.v1.MsgExecuteIbcAutoForwards": {
    aminoType: "/gravity.v1.MsgExecuteIbcAutoForwards",
    toAmino: MsgExecuteIbcAutoForwards.toAmino,
    fromAmino: MsgExecuteIbcAutoForwards.fromAmino
  },
  "/gravity.v1.MsgBatchSendToEthClaim": {
    aminoType: "/gravity.v1.MsgBatchSendToEthClaim",
    toAmino: MsgBatchSendToEthClaim.toAmino,
    fromAmino: MsgBatchSendToEthClaim.fromAmino
  },
  "/gravity.v1.MsgValsetUpdatedClaim": {
    aminoType: "/gravity.v1.MsgValsetUpdatedClaim",
    toAmino: MsgValsetUpdatedClaim.toAmino,
    fromAmino: MsgValsetUpdatedClaim.fromAmino
  },
  "/gravity.v1.MsgERC20DeployedClaim": {
    aminoType: "/gravity.v1.MsgERC20DeployedClaim",
    toAmino: MsgERC20DeployedClaim.toAmino,
    fromAmino: MsgERC20DeployedClaim.fromAmino
  },
  "/gravity.v1.MsgLogicCallExecutedClaim": {
    aminoType: "/gravity.v1.MsgLogicCallExecutedClaim",
    toAmino: MsgLogicCallExecutedClaim.toAmino,
    fromAmino: MsgLogicCallExecutedClaim.fromAmino
  },
  "/gravity.v1.MsgSetOrchestratorAddress": {
    aminoType: "/gravity.v1.MsgSetOrchestratorAddress",
    toAmino: MsgSetOrchestratorAddress.toAmino,
    fromAmino: MsgSetOrchestratorAddress.fromAmino
  },
  "/gravity.v1.MsgCancelSendToEth": {
    aminoType: "/gravity.v1.MsgCancelSendToEth",
    toAmino: MsgCancelSendToEth.toAmino,
    fromAmino: MsgCancelSendToEth.fromAmino
  },
  "/gravity.v1.MsgSubmitBadSignatureEvidence": {
    aminoType: "/gravity.v1.MsgSubmitBadSignatureEvidence",
    toAmino: MsgSubmitBadSignatureEvidence.toAmino,
    fromAmino: MsgSubmitBadSignatureEvidence.fromAmino
  }
};