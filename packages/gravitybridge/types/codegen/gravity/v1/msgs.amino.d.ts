import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgConfirmLogicCall, MsgSendToCosmosClaim, MsgExecuteIbcAutoForwards, MsgBatchSendToEthClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgLogicCallExecutedClaim, MsgSetOrchestratorAddress, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export declare const AminoConverter: {
    "/gravity.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: (message: MsgValsetConfirm) => import("./msgs").MsgValsetConfirmAmino;
        fromAmino: (object: import("./msgs").MsgValsetConfirmAmino) => MsgValsetConfirm;
    };
    "/gravity.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: (message: MsgSendToEth) => import("./msgs").MsgSendToEthAmino;
        fromAmino: (object: import("./msgs").MsgSendToEthAmino) => MsgSendToEth;
    };
    "/gravity.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: (message: MsgRequestBatch) => import("./msgs").MsgRequestBatchAmino;
        fromAmino: (object: import("./msgs").MsgRequestBatchAmino) => MsgRequestBatch;
    };
    "/gravity.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: (message: MsgConfirmBatch) => import("./msgs").MsgConfirmBatchAmino;
        fromAmino: (object: import("./msgs").MsgConfirmBatchAmino) => MsgConfirmBatch;
    };
    "/gravity.v1.MsgConfirmLogicCall": {
        aminoType: string;
        toAmino: (message: MsgConfirmLogicCall) => import("./msgs").MsgConfirmLogicCallAmino;
        fromAmino: (object: import("./msgs").MsgConfirmLogicCallAmino) => MsgConfirmLogicCall;
    };
    "/gravity.v1.MsgSendToCosmosClaim": {
        aminoType: string;
        toAmino: (message: MsgSendToCosmosClaim) => import("./msgs").MsgSendToCosmosClaimAmino;
        fromAmino: (object: import("./msgs").MsgSendToCosmosClaimAmino) => MsgSendToCosmosClaim;
    };
    "/gravity.v1.MsgExecuteIbcAutoForwards": {
        aminoType: string;
        toAmino: (message: MsgExecuteIbcAutoForwards) => import("./msgs").MsgExecuteIbcAutoForwardsAmino;
        fromAmino: (object: import("./msgs").MsgExecuteIbcAutoForwardsAmino) => MsgExecuteIbcAutoForwards;
    };
    "/gravity.v1.MsgBatchSendToEthClaim": {
        aminoType: string;
        toAmino: (message: MsgBatchSendToEthClaim) => import("./msgs").MsgBatchSendToEthClaimAmino;
        fromAmino: (object: import("./msgs").MsgBatchSendToEthClaimAmino) => MsgBatchSendToEthClaim;
    };
    "/gravity.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: (message: MsgValsetUpdatedClaim) => import("./msgs").MsgValsetUpdatedClaimAmino;
        fromAmino: (object: import("./msgs").MsgValsetUpdatedClaimAmino) => MsgValsetUpdatedClaim;
    };
    "/gravity.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: (message: MsgERC20DeployedClaim) => import("./msgs").MsgERC20DeployedClaimAmino;
        fromAmino: (object: import("./msgs").MsgERC20DeployedClaimAmino) => MsgERC20DeployedClaim;
    };
    "/gravity.v1.MsgLogicCallExecutedClaim": {
        aminoType: string;
        toAmino: (message: MsgLogicCallExecutedClaim) => import("./msgs").MsgLogicCallExecutedClaimAmino;
        fromAmino: (object: import("./msgs").MsgLogicCallExecutedClaimAmino) => MsgLogicCallExecutedClaim;
    };
    "/gravity.v1.MsgSetOrchestratorAddress": {
        aminoType: string;
        toAmino: (message: MsgSetOrchestratorAddress) => import("./msgs").MsgSetOrchestratorAddressAmino;
        fromAmino: (object: import("./msgs").MsgSetOrchestratorAddressAmino) => MsgSetOrchestratorAddress;
    };
    "/gravity.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: (message: MsgCancelSendToEth) => import("./msgs").MsgCancelSendToEthAmino;
        fromAmino: (object: import("./msgs").MsgCancelSendToEthAmino) => MsgCancelSendToEth;
    };
    "/gravity.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: (message: MsgSubmitBadSignatureEvidence) => import("./msgs").MsgSubmitBadSignatureEvidenceAmino;
        fromAmino: (object: import("./msgs").MsgSubmitBadSignatureEvidenceAmino) => MsgSubmitBadSignatureEvidence;
    };
};
