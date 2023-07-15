import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgConfirmLogicCall, MsgSendToCosmosClaim, MsgExecuteIbcAutoForwards, MsgBatchSendToEthClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgLogicCallExecutedClaim, MsgSetOrchestratorAddress, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        valsetConfirm(value: MsgValsetConfirm): {
            typeUrl: string;
            value: Uint8Array;
        };
        sendToEth(value: MsgSendToEth): {
            typeUrl: string;
            value: Uint8Array;
        };
        requestBatch(value: MsgRequestBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        confirmBatch(value: MsgConfirmBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        confirmLogicCall(value: MsgConfirmLogicCall): {
            typeUrl: string;
            value: Uint8Array;
        };
        sendToCosmosClaim(value: MsgSendToCosmosClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeIbcAutoForwards(value: MsgExecuteIbcAutoForwards): {
            typeUrl: string;
            value: Uint8Array;
        };
        batchSendToEthClaim(value: MsgBatchSendToEthClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        valsetUpdateClaim(value: MsgValsetUpdatedClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        eRC20DeployedClaim(value: MsgERC20DeployedClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        logicCallExecutedClaim(value: MsgLogicCallExecutedClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        setOrchestratorAddress(value: MsgSetOrchestratorAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelSendToEth(value: MsgCancelSendToEth): {
            typeUrl: string;
            value: Uint8Array;
        };
        submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        valsetConfirm(value: MsgValsetConfirm): {
            typeUrl: string;
            value: MsgValsetConfirm;
        };
        sendToEth(value: MsgSendToEth): {
            typeUrl: string;
            value: MsgSendToEth;
        };
        requestBatch(value: MsgRequestBatch): {
            typeUrl: string;
            value: MsgRequestBatch;
        };
        confirmBatch(value: MsgConfirmBatch): {
            typeUrl: string;
            value: MsgConfirmBatch;
        };
        confirmLogicCall(value: MsgConfirmLogicCall): {
            typeUrl: string;
            value: MsgConfirmLogicCall;
        };
        sendToCosmosClaim(value: MsgSendToCosmosClaim): {
            typeUrl: string;
            value: MsgSendToCosmosClaim;
        };
        executeIbcAutoForwards(value: MsgExecuteIbcAutoForwards): {
            typeUrl: string;
            value: MsgExecuteIbcAutoForwards;
        };
        batchSendToEthClaim(value: MsgBatchSendToEthClaim): {
            typeUrl: string;
            value: MsgBatchSendToEthClaim;
        };
        valsetUpdateClaim(value: MsgValsetUpdatedClaim): {
            typeUrl: string;
            value: MsgValsetUpdatedClaim;
        };
        eRC20DeployedClaim(value: MsgERC20DeployedClaim): {
            typeUrl: string;
            value: MsgERC20DeployedClaim;
        };
        logicCallExecutedClaim(value: MsgLogicCallExecutedClaim): {
            typeUrl: string;
            value: MsgLogicCallExecutedClaim;
        };
        setOrchestratorAddress(value: MsgSetOrchestratorAddress): {
            typeUrl: string;
            value: MsgSetOrchestratorAddress;
        };
        cancelSendToEth(value: MsgCancelSendToEth): {
            typeUrl: string;
            value: MsgCancelSendToEth;
        };
        submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence): {
            typeUrl: string;
            value: MsgSubmitBadSignatureEvidence;
        };
    };
    fromJSON: {
        valsetConfirm(value: any): {
            typeUrl: string;
            value: MsgValsetConfirm;
        };
        sendToEth(value: any): {
            typeUrl: string;
            value: MsgSendToEth;
        };
        requestBatch(value: any): {
            typeUrl: string;
            value: MsgRequestBatch;
        };
        confirmBatch(value: any): {
            typeUrl: string;
            value: MsgConfirmBatch;
        };
        confirmLogicCall(value: any): {
            typeUrl: string;
            value: MsgConfirmLogicCall;
        };
        sendToCosmosClaim(value: any): {
            typeUrl: string;
            value: MsgSendToCosmosClaim;
        };
        executeIbcAutoForwards(value: any): {
            typeUrl: string;
            value: MsgExecuteIbcAutoForwards;
        };
        batchSendToEthClaim(value: any): {
            typeUrl: string;
            value: MsgBatchSendToEthClaim;
        };
        valsetUpdateClaim(value: any): {
            typeUrl: string;
            value: MsgValsetUpdatedClaim;
        };
        eRC20DeployedClaim(value: any): {
            typeUrl: string;
            value: MsgERC20DeployedClaim;
        };
        logicCallExecutedClaim(value: any): {
            typeUrl: string;
            value: MsgLogicCallExecutedClaim;
        };
        setOrchestratorAddress(value: any): {
            typeUrl: string;
            value: MsgSetOrchestratorAddress;
        };
        cancelSendToEth(value: any): {
            typeUrl: string;
            value: MsgCancelSendToEth;
        };
        submitBadSignatureEvidence(value: any): {
            typeUrl: string;
            value: MsgSubmitBadSignatureEvidence;
        };
    };
    fromPartial: {
        valsetConfirm(value: MsgValsetConfirm): {
            typeUrl: string;
            value: MsgValsetConfirm;
        };
        sendToEth(value: MsgSendToEth): {
            typeUrl: string;
            value: MsgSendToEth;
        };
        requestBatch(value: MsgRequestBatch): {
            typeUrl: string;
            value: MsgRequestBatch;
        };
        confirmBatch(value: MsgConfirmBatch): {
            typeUrl: string;
            value: MsgConfirmBatch;
        };
        confirmLogicCall(value: MsgConfirmLogicCall): {
            typeUrl: string;
            value: MsgConfirmLogicCall;
        };
        sendToCosmosClaim(value: MsgSendToCosmosClaim): {
            typeUrl: string;
            value: MsgSendToCosmosClaim;
        };
        executeIbcAutoForwards(value: MsgExecuteIbcAutoForwards): {
            typeUrl: string;
            value: MsgExecuteIbcAutoForwards;
        };
        batchSendToEthClaim(value: MsgBatchSendToEthClaim): {
            typeUrl: string;
            value: MsgBatchSendToEthClaim;
        };
        valsetUpdateClaim(value: MsgValsetUpdatedClaim): {
            typeUrl: string;
            value: MsgValsetUpdatedClaim;
        };
        eRC20DeployedClaim(value: MsgERC20DeployedClaim): {
            typeUrl: string;
            value: MsgERC20DeployedClaim;
        };
        logicCallExecutedClaim(value: MsgLogicCallExecutedClaim): {
            typeUrl: string;
            value: MsgLogicCallExecutedClaim;
        };
        setOrchestratorAddress(value: MsgSetOrchestratorAddress): {
            typeUrl: string;
            value: MsgSetOrchestratorAddress;
        };
        cancelSendToEth(value: MsgCancelSendToEth): {
            typeUrl: string;
            value: MsgCancelSendToEth;
        };
        submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence): {
            typeUrl: string;
            value: MsgSubmitBadSignatureEvidence;
        };
    };
};
