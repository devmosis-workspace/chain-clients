import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams } from "./msgs";
export declare const AminoConverter: {
    "/injective.peggy.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: (message: MsgValsetConfirm) => import("./msgs").MsgValsetConfirmAmino;
        fromAmino: (object: import("./msgs").MsgValsetConfirmAmino) => MsgValsetConfirm;
    };
    "/injective.peggy.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: (message: MsgSendToEth) => import("./msgs").MsgSendToEthAmino;
        fromAmino: (object: import("./msgs").MsgSendToEthAmino) => MsgSendToEth;
    };
    "/injective.peggy.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: (message: MsgRequestBatch) => import("./msgs").MsgRequestBatchAmino;
        fromAmino: (object: import("./msgs").MsgRequestBatchAmino) => MsgRequestBatch;
    };
    "/injective.peggy.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: (message: MsgConfirmBatch) => import("./msgs").MsgConfirmBatchAmino;
        fromAmino: (object: import("./msgs").MsgConfirmBatchAmino) => MsgConfirmBatch;
    };
    "/injective.peggy.v1.MsgDepositClaim": {
        aminoType: string;
        toAmino: (message: MsgDepositClaim) => import("./msgs").MsgDepositClaimAmino;
        fromAmino: (object: import("./msgs").MsgDepositClaimAmino) => MsgDepositClaim;
    };
    "/injective.peggy.v1.MsgWithdrawClaim": {
        aminoType: string;
        toAmino: (message: MsgWithdrawClaim) => import("./msgs").MsgWithdrawClaimAmino;
        fromAmino: (object: import("./msgs").MsgWithdrawClaimAmino) => MsgWithdrawClaim;
    };
    "/injective.peggy.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: (message: MsgValsetUpdatedClaim) => import("./msgs").MsgValsetUpdatedClaimAmino;
        fromAmino: (object: import("./msgs").MsgValsetUpdatedClaimAmino) => MsgValsetUpdatedClaim;
    };
    "/injective.peggy.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: (message: MsgERC20DeployedClaim) => import("./msgs").MsgERC20DeployedClaimAmino;
        fromAmino: (object: import("./msgs").MsgERC20DeployedClaimAmino) => MsgERC20DeployedClaim;
    };
    "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
        aminoType: string;
        toAmino: (message: MsgSetOrchestratorAddresses) => import("./msgs").MsgSetOrchestratorAddressesAmino;
        fromAmino: (object: import("./msgs").MsgSetOrchestratorAddressesAmino) => MsgSetOrchestratorAddresses;
    };
    "/injective.peggy.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: (message: MsgCancelSendToEth) => import("./msgs").MsgCancelSendToEthAmino;
        fromAmino: (object: import("./msgs").MsgCancelSendToEthAmino) => MsgCancelSendToEth;
    };
    "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: (message: MsgSubmitBadSignatureEvidence) => import("./msgs").MsgSubmitBadSignatureEvidenceAmino;
        fromAmino: (object: import("./msgs").MsgSubmitBadSignatureEvidenceAmino) => MsgSubmitBadSignatureEvidence;
    };
    "/injective.peggy.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./msgs").MsgUpdateParamsAmino;
        fromAmino: (object: import("./msgs").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
