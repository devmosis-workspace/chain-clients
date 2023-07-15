import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence, MsgUpdateParams } from "./msgs";
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
        depositClaim(value: MsgDepositClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawClaim(value: MsgWithdrawClaim): {
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
        setOrchestratorAddresses(value: MsgSetOrchestratorAddresses): {
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
        updateParams(value: MsgUpdateParams): {
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
        depositClaim(value: MsgDepositClaim): {
            typeUrl: string;
            value: MsgDepositClaim;
        };
        withdrawClaim(value: MsgWithdrawClaim): {
            typeUrl: string;
            value: MsgWithdrawClaim;
        };
        valsetUpdateClaim(value: MsgValsetUpdatedClaim): {
            typeUrl: string;
            value: MsgValsetUpdatedClaim;
        };
        eRC20DeployedClaim(value: MsgERC20DeployedClaim): {
            typeUrl: string;
            value: MsgERC20DeployedClaim;
        };
        setOrchestratorAddresses(value: MsgSetOrchestratorAddresses): {
            typeUrl: string;
            value: MsgSetOrchestratorAddresses;
        };
        cancelSendToEth(value: MsgCancelSendToEth): {
            typeUrl: string;
            value: MsgCancelSendToEth;
        };
        submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence): {
            typeUrl: string;
            value: MsgSubmitBadSignatureEvidence;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
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
        depositClaim(value: any): {
            typeUrl: string;
            value: MsgDepositClaim;
        };
        withdrawClaim(value: any): {
            typeUrl: string;
            value: MsgWithdrawClaim;
        };
        valsetUpdateClaim(value: any): {
            typeUrl: string;
            value: MsgValsetUpdatedClaim;
        };
        eRC20DeployedClaim(value: any): {
            typeUrl: string;
            value: MsgERC20DeployedClaim;
        };
        setOrchestratorAddresses(value: any): {
            typeUrl: string;
            value: MsgSetOrchestratorAddresses;
        };
        cancelSendToEth(value: any): {
            typeUrl: string;
            value: MsgCancelSendToEth;
        };
        submitBadSignatureEvidence(value: any): {
            typeUrl: string;
            value: MsgSubmitBadSignatureEvidence;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
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
        depositClaim(value: MsgDepositClaim): {
            typeUrl: string;
            value: MsgDepositClaim;
        };
        withdrawClaim(value: MsgWithdrawClaim): {
            typeUrl: string;
            value: MsgWithdrawClaim;
        };
        valsetUpdateClaim(value: MsgValsetUpdatedClaim): {
            typeUrl: string;
            value: MsgValsetUpdatedClaim;
        };
        eRC20DeployedClaim(value: MsgERC20DeployedClaim): {
            typeUrl: string;
            value: MsgERC20DeployedClaim;
        };
        setOrchestratorAddresses(value: MsgSetOrchestratorAddresses): {
            typeUrl: string;
            value: MsgSetOrchestratorAddresses;
        };
        cancelSendToEth(value: MsgCancelSendToEth): {
            typeUrl: string;
            value: MsgCancelSendToEth;
        };
        submitBadSignatureEvidence(value: MsgSubmitBadSignatureEvidence): {
            typeUrl: string;
            value: MsgSubmitBadSignatureEvidence;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
