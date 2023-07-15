import { Rpc } from "../../helpers";
import { MsgValsetConfirm, MsgValsetConfirmResponse, MsgSendToEth, MsgSendToEthResponse, MsgRequestBatch, MsgRequestBatchResponse, MsgConfirmBatch, MsgConfirmBatchResponse, MsgConfirmLogicCall, MsgConfirmLogicCallResponse, MsgSendToCosmosClaim, MsgSendToCosmosClaimResponse, MsgExecuteIbcAutoForwards, MsgExecuteIbcAutoForwardsResponse, MsgBatchSendToEthClaim, MsgBatchSendToEthClaimResponse, MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse, MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse, MsgLogicCallExecutedClaim, MsgLogicCallExecutedClaimResponse, MsgSetOrchestratorAddress, MsgSetOrchestratorAddressResponse, MsgCancelSendToEth, MsgCancelSendToEthResponse, MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse } from "./msgs";
/** Msg defines the state transitions possible within gravity */
export interface Msg {
    valsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
    sendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
    requestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
    confirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
    confirmLogicCall(request: MsgConfirmLogicCall): Promise<MsgConfirmLogicCallResponse>;
    sendToCosmosClaim(request: MsgSendToCosmosClaim): Promise<MsgSendToCosmosClaimResponse>;
    executeIbcAutoForwards(request: MsgExecuteIbcAutoForwards): Promise<MsgExecuteIbcAutoForwardsResponse>;
    batchSendToEthClaim(request: MsgBatchSendToEthClaim): Promise<MsgBatchSendToEthClaimResponse>;
    valsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
    eRC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
    logicCallExecutedClaim(request: MsgLogicCallExecutedClaim): Promise<MsgLogicCallExecutedClaimResponse>;
    setOrchestratorAddress(request: MsgSetOrchestratorAddress): Promise<MsgSetOrchestratorAddressResponse>;
    cancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
    submitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    valsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
    sendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
    requestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
    confirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
    confirmLogicCall(request: MsgConfirmLogicCall): Promise<MsgConfirmLogicCallResponse>;
    sendToCosmosClaim(request: MsgSendToCosmosClaim): Promise<MsgSendToCosmosClaimResponse>;
    executeIbcAutoForwards(request: MsgExecuteIbcAutoForwards): Promise<MsgExecuteIbcAutoForwardsResponse>;
    batchSendToEthClaim(request: MsgBatchSendToEthClaim): Promise<MsgBatchSendToEthClaimResponse>;
    valsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
    eRC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
    logicCallExecutedClaim(request: MsgLogicCallExecutedClaim): Promise<MsgLogicCallExecutedClaimResponse>;
    setOrchestratorAddress(request: MsgSetOrchestratorAddress): Promise<MsgSetOrchestratorAddressResponse>;
    cancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
    submitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
}
