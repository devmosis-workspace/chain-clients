import * as _0 from "./v1/attestation";
import * as _1 from "./v1/batch";
import * as _2 from "./v1/ethereum_signer";
import * as _3 from "./v1/genesis";
import * as _4 from "./v1/msgs";
import * as _5 from "./v1/pool";
import * as _6 from "./v1/query";
import * as _7 from "./v1/types";
import * as _122 from "./v1/query.lcd";
import * as _123 from "./v1/query.rpc.Query";
import * as _124 from "./v1/msgs.rpc.msg";
export declare namespace gravity {
    const v1: {
        MsgClientImpl: typeof _124.MsgClientImpl;
        QueryClientImpl: typeof _123.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
            currentValset(request?: _6.QueryCurrentValsetRequest): Promise<_6.QueryCurrentValsetResponse>;
            valsetRequest(request: _6.QueryValsetRequestRequest): Promise<_6.QueryValsetRequestResponse>;
            valsetConfirm(request: _6.QueryValsetConfirmRequest): Promise<_6.QueryValsetConfirmResponse>;
            valsetConfirmsByNonce(request: _6.QueryValsetConfirmsByNonceRequest): Promise<_6.QueryValsetConfirmsByNonceResponse>;
            lastValsetRequests(request?: _6.QueryLastValsetRequestsRequest): Promise<_6.QueryLastValsetRequestsResponse>;
            lastPendingValsetRequestByAddr(request: _6.QueryLastPendingValsetRequestByAddrRequest): Promise<_6.QueryLastPendingValsetRequestByAddrResponse>;
            lastPendingBatchRequestByAddr(request: _6.QueryLastPendingBatchRequestByAddrRequest): Promise<_6.QueryLastPendingBatchRequestByAddrResponse>;
            lastPendingLogicCallByAddr(request: _6.QueryLastPendingLogicCallByAddrRequest): Promise<_6.QueryLastPendingLogicCallByAddrResponse>;
            lastEventNonceByAddr(request: _6.QueryLastEventNonceByAddrRequest): Promise<_6.QueryLastEventNonceByAddrResponse>;
            batchFees(request?: _6.QueryBatchFeeRequest): Promise<_6.QueryBatchFeeResponse>;
            outgoingTxBatches(request?: _6.QueryOutgoingTxBatchesRequest): Promise<_6.QueryOutgoingTxBatchesResponse>;
            outgoingLogicCalls(request?: _6.QueryOutgoingLogicCallsRequest): Promise<_6.QueryOutgoingLogicCallsResponse>;
            batchRequestByNonce(request: _6.QueryBatchRequestByNonceRequest): Promise<_6.QueryBatchRequestByNonceResponse>;
            batchConfirms(request: _6.QueryBatchConfirmsRequest): Promise<_6.QueryBatchConfirmsResponse>;
            logicConfirms(request: _6.QueryLogicConfirmsRequest): Promise<_6.QueryLogicConfirmsResponse>;
            eRC20ToDenom(request: _6.QueryERC20ToDenomRequest): Promise<_6.QueryERC20ToDenomResponse>;
            denomToERC20(request: _6.QueryDenomToERC20Request): Promise<_6.QueryDenomToERC20Response>;
            getLastObservedEthBlock(request: _6.QueryLastObservedEthBlockRequest): Promise<_6.QueryLastObservedEthBlockResponse>;
            getLastObservedEthNonce(request: _6.QueryLastObservedEthNonceRequest): Promise<_6.QueryLastObservedEthNonceResponse>;
            getAttestations(request: _6.QueryAttestationsRequest): Promise<_6.QueryAttestationsResponse>;
            getDelegateKeyByValidator(request: _6.QueryDelegateKeysByValidatorAddress): Promise<_6.QueryDelegateKeysByValidatorAddressResponse>;
            getDelegateKeyByEth(request: _6.QueryDelegateKeysByEthAddress): Promise<_6.QueryDelegateKeysByEthAddressResponse>;
            getDelegateKeyByOrchestrator(request: _6.QueryDelegateKeysByOrchestratorAddress): Promise<_6.QueryDelegateKeysByOrchestratorAddressResponse>;
            getPendingSendToEth(request: _6.QueryPendingSendToEth): Promise<_6.QueryPendingSendToEthResponse>;
            getPendingIbcAutoForwards(request: _6.QueryPendingIbcAutoForwards): Promise<_6.QueryPendingIbcAutoForwardsResponse>;
        };
        LCDQueryClient: typeof _122.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                valsetConfirm(value: _4.MsgValsetConfirm): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToEth(value: _4.MsgSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                requestBatch(value: _4.MsgRequestBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmBatch(value: _4.MsgConfirmBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmLogicCall(value: _4.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToCosmosClaim(value: _4.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                executeIbcAutoForwards(value: _4.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                batchSendToEthClaim(value: _4.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                valsetUpdateClaim(value: _4.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                eRC20DeployedClaim(value: _4.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                logicCallExecutedClaim(value: _4.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOrchestratorAddress(value: _4.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelSendToEth(value: _4.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitBadSignatureEvidence(value: _4.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                valsetConfirm(value: _4.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _4.MsgValsetConfirm;
                };
                sendToEth(value: _4.MsgSendToEth): {
                    typeUrl: string;
                    value: _4.MsgSendToEth;
                };
                requestBatch(value: _4.MsgRequestBatch): {
                    typeUrl: string;
                    value: _4.MsgRequestBatch;
                };
                confirmBatch(value: _4.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _4.MsgConfirmBatch;
                };
                confirmLogicCall(value: _4.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _4.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _4.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _4.MsgSendToCosmosClaim;
                };
                executeIbcAutoForwards(value: _4.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: _4.MsgExecuteIbcAutoForwards;
                };
                batchSendToEthClaim(value: _4.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _4.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _4.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _4.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _4.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _4.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _4.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _4.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _4.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _4.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _4.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _4.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _4.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _4.MsgSubmitBadSignatureEvidence;
                };
            };
            fromJSON: {
                valsetConfirm(value: any): {
                    typeUrl: string;
                    value: _4.MsgValsetConfirm;
                };
                sendToEth(value: any): {
                    typeUrl: string;
                    value: _4.MsgSendToEth;
                };
                requestBatch(value: any): {
                    typeUrl: string;
                    value: _4.MsgRequestBatch;
                };
                confirmBatch(value: any): {
                    typeUrl: string;
                    value: _4.MsgConfirmBatch;
                };
                confirmLogicCall(value: any): {
                    typeUrl: string;
                    value: _4.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: any): {
                    typeUrl: string;
                    value: _4.MsgSendToCosmosClaim;
                };
                executeIbcAutoForwards(value: any): {
                    typeUrl: string;
                    value: _4.MsgExecuteIbcAutoForwards;
                };
                batchSendToEthClaim(value: any): {
                    typeUrl: string;
                    value: _4.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: any): {
                    typeUrl: string;
                    value: _4.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: any): {
                    typeUrl: string;
                    value: _4.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: any): {
                    typeUrl: string;
                    value: _4.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: any): {
                    typeUrl: string;
                    value: _4.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: any): {
                    typeUrl: string;
                    value: _4.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: any): {
                    typeUrl: string;
                    value: _4.MsgSubmitBadSignatureEvidence;
                };
            };
            fromPartial: {
                valsetConfirm(value: _4.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _4.MsgValsetConfirm;
                };
                sendToEth(value: _4.MsgSendToEth): {
                    typeUrl: string;
                    value: _4.MsgSendToEth;
                };
                requestBatch(value: _4.MsgRequestBatch): {
                    typeUrl: string;
                    value: _4.MsgRequestBatch;
                };
                confirmBatch(value: _4.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _4.MsgConfirmBatch;
                };
                confirmLogicCall(value: _4.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _4.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _4.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _4.MsgSendToCosmosClaim;
                };
                executeIbcAutoForwards(value: _4.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: _4.MsgExecuteIbcAutoForwards;
                };
                batchSendToEthClaim(value: _4.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _4.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _4.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _4.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _4.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _4.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _4.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _4.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _4.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _4.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _4.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _4.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _4.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _4.MsgSubmitBadSignatureEvidence;
                };
            };
        };
        AminoConverter: {
            "/gravity.v1.MsgValsetConfirm": {
                aminoType: string;
                toAmino: (message: _4.MsgValsetConfirm) => _4.MsgValsetConfirmAmino;
                fromAmino: (object: _4.MsgValsetConfirmAmino) => _4.MsgValsetConfirm;
            };
            "/gravity.v1.MsgSendToEth": {
                aminoType: string;
                toAmino: (message: _4.MsgSendToEth) => _4.MsgSendToEthAmino;
                fromAmino: (object: _4.MsgSendToEthAmino) => _4.MsgSendToEth;
            };
            "/gravity.v1.MsgRequestBatch": {
                aminoType: string;
                toAmino: (message: _4.MsgRequestBatch) => _4.MsgRequestBatchAmino;
                fromAmino: (object: _4.MsgRequestBatchAmino) => _4.MsgRequestBatch;
            };
            "/gravity.v1.MsgConfirmBatch": {
                aminoType: string;
                toAmino: (message: _4.MsgConfirmBatch) => _4.MsgConfirmBatchAmino;
                fromAmino: (object: _4.MsgConfirmBatchAmino) => _4.MsgConfirmBatch;
            };
            "/gravity.v1.MsgConfirmLogicCall": {
                aminoType: string;
                toAmino: (message: _4.MsgConfirmLogicCall) => _4.MsgConfirmLogicCallAmino;
                fromAmino: (object: _4.MsgConfirmLogicCallAmino) => _4.MsgConfirmLogicCall;
            };
            "/gravity.v1.MsgSendToCosmosClaim": {
                aminoType: string;
                toAmino: (message: _4.MsgSendToCosmosClaim) => _4.MsgSendToCosmosClaimAmino;
                fromAmino: (object: _4.MsgSendToCosmosClaimAmino) => _4.MsgSendToCosmosClaim;
            };
            "/gravity.v1.MsgExecuteIbcAutoForwards": {
                aminoType: string;
                toAmino: (message: _4.MsgExecuteIbcAutoForwards) => _4.MsgExecuteIbcAutoForwardsAmino;
                fromAmino: (object: _4.MsgExecuteIbcAutoForwardsAmino) => _4.MsgExecuteIbcAutoForwards;
            };
            "/gravity.v1.MsgBatchSendToEthClaim": {
                aminoType: string;
                toAmino: (message: _4.MsgBatchSendToEthClaim) => _4.MsgBatchSendToEthClaimAmino;
                fromAmino: (object: _4.MsgBatchSendToEthClaimAmino) => _4.MsgBatchSendToEthClaim;
            };
            "/gravity.v1.MsgValsetUpdatedClaim": {
                aminoType: string;
                toAmino: (message: _4.MsgValsetUpdatedClaim) => _4.MsgValsetUpdatedClaimAmino;
                fromAmino: (object: _4.MsgValsetUpdatedClaimAmino) => _4.MsgValsetUpdatedClaim;
            };
            "/gravity.v1.MsgERC20DeployedClaim": {
                aminoType: string;
                toAmino: (message: _4.MsgERC20DeployedClaim) => _4.MsgERC20DeployedClaimAmino;
                fromAmino: (object: _4.MsgERC20DeployedClaimAmino) => _4.MsgERC20DeployedClaim;
            };
            "/gravity.v1.MsgLogicCallExecutedClaim": {
                aminoType: string;
                toAmino: (message: _4.MsgLogicCallExecutedClaim) => _4.MsgLogicCallExecutedClaimAmino;
                fromAmino: (object: _4.MsgLogicCallExecutedClaimAmino) => _4.MsgLogicCallExecutedClaim;
            };
            "/gravity.v1.MsgSetOrchestratorAddress": {
                aminoType: string;
                toAmino: (message: _4.MsgSetOrchestratorAddress) => _4.MsgSetOrchestratorAddressAmino;
                fromAmino: (object: _4.MsgSetOrchestratorAddressAmino) => _4.MsgSetOrchestratorAddress;
            };
            "/gravity.v1.MsgCancelSendToEth": {
                aminoType: string;
                toAmino: (message: _4.MsgCancelSendToEth) => _4.MsgCancelSendToEthAmino;
                fromAmino: (object: _4.MsgCancelSendToEthAmino) => _4.MsgCancelSendToEth;
            };
            "/gravity.v1.MsgSubmitBadSignatureEvidence": {
                aminoType: string;
                toAmino: (message: _4.MsgSubmitBadSignatureEvidence) => _4.MsgSubmitBadSignatureEvidenceAmino;
                fromAmino: (object: _4.MsgSubmitBadSignatureEvidenceAmino) => _4.MsgSubmitBadSignatureEvidence;
            };
        };
        BridgeValidator: {
            typeUrl: string;
            encode(message: _7.BridgeValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.BridgeValidator;
            fromPartial(object: Partial<_7.BridgeValidator>): _7.BridgeValidator;
            fromAmino(object: _7.BridgeValidatorAmino): _7.BridgeValidator;
            toAmino(message: _7.BridgeValidator): _7.BridgeValidatorAmino;
            fromAminoMsg(object: _7.BridgeValidatorAminoMsg): _7.BridgeValidator;
            fromProtoMsg(message: _7.BridgeValidatorProtoMsg): _7.BridgeValidator;
            toProto(message: _7.BridgeValidator): Uint8Array;
            toProtoMsg(message: _7.BridgeValidator): _7.BridgeValidatorProtoMsg;
        };
        Valset: {
            typeUrl: string;
            encode(message: _7.Valset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.Valset;
            fromPartial(object: Partial<_7.Valset>): _7.Valset;
            fromAmino(object: _7.ValsetAmino): _7.Valset;
            toAmino(message: _7.Valset): _7.ValsetAmino;
            fromAminoMsg(object: _7.ValsetAminoMsg): _7.Valset;
            fromProtoMsg(message: _7.ValsetProtoMsg): _7.Valset;
            toProto(message: _7.Valset): Uint8Array;
            toProtoMsg(message: _7.Valset): _7.ValsetProtoMsg;
        };
        LastObservedEthereumBlockHeight: {
            typeUrl: string;
            encode(message: _7.LastObservedEthereumBlockHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.LastObservedEthereumBlockHeight;
            fromPartial(object: Partial<_7.LastObservedEthereumBlockHeight>): _7.LastObservedEthereumBlockHeight;
            fromAmino(object: _7.LastObservedEthereumBlockHeightAmino): _7.LastObservedEthereumBlockHeight;
            toAmino(message: _7.LastObservedEthereumBlockHeight): _7.LastObservedEthereumBlockHeightAmino;
            fromAminoMsg(object: _7.LastObservedEthereumBlockHeightAminoMsg): _7.LastObservedEthereumBlockHeight;
            fromProtoMsg(message: _7.LastObservedEthereumBlockHeightProtoMsg): _7.LastObservedEthereumBlockHeight;
            toProto(message: _7.LastObservedEthereumBlockHeight): Uint8Array;
            toProtoMsg(message: _7.LastObservedEthereumBlockHeight): _7.LastObservedEthereumBlockHeightProtoMsg;
        };
        ERC20ToDenom: {
            typeUrl: string;
            encode(message: _7.ERC20ToDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.ERC20ToDenom;
            fromPartial(object: Partial<_7.ERC20ToDenom>): _7.ERC20ToDenom;
            fromAmino(object: _7.ERC20ToDenomAmino): _7.ERC20ToDenom;
            toAmino(message: _7.ERC20ToDenom): _7.ERC20ToDenomAmino;
            fromAminoMsg(object: _7.ERC20ToDenomAminoMsg): _7.ERC20ToDenom;
            fromProtoMsg(message: _7.ERC20ToDenomProtoMsg): _7.ERC20ToDenom;
            toProto(message: _7.ERC20ToDenom): Uint8Array;
            toProtoMsg(message: _7.ERC20ToDenom): _7.ERC20ToDenomProtoMsg;
        };
        UnhaltBridgeProposal: {
            typeUrl: string;
            encode(message: _7.UnhaltBridgeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.UnhaltBridgeProposal;
            fromPartial(object: Partial<_7.UnhaltBridgeProposal>): _7.UnhaltBridgeProposal;
            fromAmino(object: _7.UnhaltBridgeProposalAmino): _7.UnhaltBridgeProposal;
            toAmino(message: _7.UnhaltBridgeProposal): _7.UnhaltBridgeProposalAmino;
            fromAminoMsg(object: _7.UnhaltBridgeProposalAminoMsg): _7.UnhaltBridgeProposal;
            fromProtoMsg(message: _7.UnhaltBridgeProposalProtoMsg): _7.UnhaltBridgeProposal;
            toProto(message: _7.UnhaltBridgeProposal): Uint8Array;
            toProtoMsg(message: _7.UnhaltBridgeProposal): _7.UnhaltBridgeProposalProtoMsg;
        };
        AirdropProposal: {
            typeUrl: string;
            encode(message: _7.AirdropProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.AirdropProposal;
            fromPartial(object: Partial<_7.AirdropProposal>): _7.AirdropProposal;
            fromAmino(object: _7.AirdropProposalAmino): _7.AirdropProposal;
            toAmino(message: _7.AirdropProposal): _7.AirdropProposalAmino;
            fromAminoMsg(object: _7.AirdropProposalAminoMsg): _7.AirdropProposal;
            fromProtoMsg(message: _7.AirdropProposalProtoMsg): _7.AirdropProposal;
            toProto(message: _7.AirdropProposal): Uint8Array;
            toProtoMsg(message: _7.AirdropProposal): _7.AirdropProposalProtoMsg;
        };
        IBCMetadataProposal: {
            typeUrl: string;
            encode(message: _7.IBCMetadataProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.IBCMetadataProposal;
            fromPartial(object: Partial<_7.IBCMetadataProposal>): _7.IBCMetadataProposal;
            fromAmino(object: _7.IBCMetadataProposalAmino): _7.IBCMetadataProposal;
            toAmino(message: _7.IBCMetadataProposal): _7.IBCMetadataProposalAmino;
            fromAminoMsg(object: _7.IBCMetadataProposalAminoMsg): _7.IBCMetadataProposal;
            fromProtoMsg(message: _7.IBCMetadataProposalProtoMsg): _7.IBCMetadataProposal;
            toProto(message: _7.IBCMetadataProposal): Uint8Array;
            toProtoMsg(message: _7.IBCMetadataProposal): _7.IBCMetadataProposalProtoMsg;
        };
        PendingIbcAutoForward: {
            typeUrl: string;
            encode(message: _7.PendingIbcAutoForward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.PendingIbcAutoForward;
            fromPartial(object: Partial<_7.PendingIbcAutoForward>): _7.PendingIbcAutoForward;
            fromAmino(object: _7.PendingIbcAutoForwardAmino): _7.PendingIbcAutoForward;
            toAmino(message: _7.PendingIbcAutoForward): _7.PendingIbcAutoForwardAmino;
            fromAminoMsg(object: _7.PendingIbcAutoForwardAminoMsg): _7.PendingIbcAutoForward;
            fromProtoMsg(message: _7.PendingIbcAutoForwardProtoMsg): _7.PendingIbcAutoForward;
            toProto(message: _7.PendingIbcAutoForward): Uint8Array;
            toProtoMsg(message: _7.PendingIbcAutoForward): _7.PendingIbcAutoForwardProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _6.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryParamsRequest;
            fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
            fromAmino(_: _6.QueryParamsRequestAmino): _6.QueryParamsRequest;
            toAmino(_: _6.QueryParamsRequest): _6.QueryParamsRequestAmino;
            fromAminoMsg(object: _6.QueryParamsRequestAminoMsg): _6.QueryParamsRequest;
            fromProtoMsg(message: _6.QueryParamsRequestProtoMsg): _6.QueryParamsRequest;
            toProto(message: _6.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryParamsRequest): _6.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _6.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryParamsResponse;
            fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
            fromAmino(object: _6.QueryParamsResponseAmino): _6.QueryParamsResponse;
            toAmino(message: _6.QueryParamsResponse): _6.QueryParamsResponseAmino;
            fromAminoMsg(object: _6.QueryParamsResponseAminoMsg): _6.QueryParamsResponse;
            fromProtoMsg(message: _6.QueryParamsResponseProtoMsg): _6.QueryParamsResponse;
            toProto(message: _6.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryParamsResponse): _6.QueryParamsResponseProtoMsg;
        };
        QueryCurrentValsetRequest: {
            typeUrl: string;
            encode(_: _6.QueryCurrentValsetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryCurrentValsetRequest;
            fromPartial(_: Partial<_6.QueryCurrentValsetRequest>): _6.QueryCurrentValsetRequest;
            fromAmino(_: _6.QueryCurrentValsetRequestAmino): _6.QueryCurrentValsetRequest;
            toAmino(_: _6.QueryCurrentValsetRequest): _6.QueryCurrentValsetRequestAmino;
            fromAminoMsg(object: _6.QueryCurrentValsetRequestAminoMsg): _6.QueryCurrentValsetRequest;
            fromProtoMsg(message: _6.QueryCurrentValsetRequestProtoMsg): _6.QueryCurrentValsetRequest;
            toProto(message: _6.QueryCurrentValsetRequest): Uint8Array;
            toProtoMsg(message: _6.QueryCurrentValsetRequest): _6.QueryCurrentValsetRequestProtoMsg;
        };
        QueryCurrentValsetResponse: {
            typeUrl: string;
            encode(message: _6.QueryCurrentValsetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryCurrentValsetResponse;
            fromPartial(object: Partial<_6.QueryCurrentValsetResponse>): _6.QueryCurrentValsetResponse;
            fromAmino(object: _6.QueryCurrentValsetResponseAmino): _6.QueryCurrentValsetResponse;
            toAmino(message: _6.QueryCurrentValsetResponse): _6.QueryCurrentValsetResponseAmino;
            fromAminoMsg(object: _6.QueryCurrentValsetResponseAminoMsg): _6.QueryCurrentValsetResponse;
            fromProtoMsg(message: _6.QueryCurrentValsetResponseProtoMsg): _6.QueryCurrentValsetResponse;
            toProto(message: _6.QueryCurrentValsetResponse): Uint8Array;
            toProtoMsg(message: _6.QueryCurrentValsetResponse): _6.QueryCurrentValsetResponseProtoMsg;
        };
        QueryValsetRequestRequest: {
            typeUrl: string;
            encode(message: _6.QueryValsetRequestRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryValsetRequestRequest;
            fromPartial(object: Partial<_6.QueryValsetRequestRequest>): _6.QueryValsetRequestRequest;
            fromAmino(object: _6.QueryValsetRequestRequestAmino): _6.QueryValsetRequestRequest;
            toAmino(message: _6.QueryValsetRequestRequest): _6.QueryValsetRequestRequestAmino;
            fromAminoMsg(object: _6.QueryValsetRequestRequestAminoMsg): _6.QueryValsetRequestRequest;
            fromProtoMsg(message: _6.QueryValsetRequestRequestProtoMsg): _6.QueryValsetRequestRequest;
            toProto(message: _6.QueryValsetRequestRequest): Uint8Array;
            toProtoMsg(message: _6.QueryValsetRequestRequest): _6.QueryValsetRequestRequestProtoMsg;
        };
        QueryValsetRequestResponse: {
            typeUrl: string;
            encode(message: _6.QueryValsetRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryValsetRequestResponse;
            fromPartial(object: Partial<_6.QueryValsetRequestResponse>): _6.QueryValsetRequestResponse;
            fromAmino(object: _6.QueryValsetRequestResponseAmino): _6.QueryValsetRequestResponse;
            toAmino(message: _6.QueryValsetRequestResponse): _6.QueryValsetRequestResponseAmino;
            fromAminoMsg(object: _6.QueryValsetRequestResponseAminoMsg): _6.QueryValsetRequestResponse;
            fromProtoMsg(message: _6.QueryValsetRequestResponseProtoMsg): _6.QueryValsetRequestResponse;
            toProto(message: _6.QueryValsetRequestResponse): Uint8Array;
            toProtoMsg(message: _6.QueryValsetRequestResponse): _6.QueryValsetRequestResponseProtoMsg;
        };
        QueryValsetConfirmRequest: {
            typeUrl: string;
            encode(message: _6.QueryValsetConfirmRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryValsetConfirmRequest;
            fromPartial(object: Partial<_6.QueryValsetConfirmRequest>): _6.QueryValsetConfirmRequest;
            fromAmino(object: _6.QueryValsetConfirmRequestAmino): _6.QueryValsetConfirmRequest;
            toAmino(message: _6.QueryValsetConfirmRequest): _6.QueryValsetConfirmRequestAmino;
            fromAminoMsg(object: _6.QueryValsetConfirmRequestAminoMsg): _6.QueryValsetConfirmRequest;
            fromProtoMsg(message: _6.QueryValsetConfirmRequestProtoMsg): _6.QueryValsetConfirmRequest;
            toProto(message: _6.QueryValsetConfirmRequest): Uint8Array;
            toProtoMsg(message: _6.QueryValsetConfirmRequest): _6.QueryValsetConfirmRequestProtoMsg;
        };
        QueryValsetConfirmResponse: {
            typeUrl: string;
            encode(message: _6.QueryValsetConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryValsetConfirmResponse;
            fromPartial(object: Partial<_6.QueryValsetConfirmResponse>): _6.QueryValsetConfirmResponse;
            fromAmino(object: _6.QueryValsetConfirmResponseAmino): _6.QueryValsetConfirmResponse;
            toAmino(message: _6.QueryValsetConfirmResponse): _6.QueryValsetConfirmResponseAmino;
            fromAminoMsg(object: _6.QueryValsetConfirmResponseAminoMsg): _6.QueryValsetConfirmResponse;
            fromProtoMsg(message: _6.QueryValsetConfirmResponseProtoMsg): _6.QueryValsetConfirmResponse;
            toProto(message: _6.QueryValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _6.QueryValsetConfirmResponse): _6.QueryValsetConfirmResponseProtoMsg;
        };
        QueryValsetConfirmsByNonceRequest: {
            typeUrl: string;
            encode(message: _6.QueryValsetConfirmsByNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryValsetConfirmsByNonceRequest;
            fromPartial(object: Partial<_6.QueryValsetConfirmsByNonceRequest>): _6.QueryValsetConfirmsByNonceRequest;
            fromAmino(object: _6.QueryValsetConfirmsByNonceRequestAmino): _6.QueryValsetConfirmsByNonceRequest;
            toAmino(message: _6.QueryValsetConfirmsByNonceRequest): _6.QueryValsetConfirmsByNonceRequestAmino;
            fromAminoMsg(object: _6.QueryValsetConfirmsByNonceRequestAminoMsg): _6.QueryValsetConfirmsByNonceRequest;
            fromProtoMsg(message: _6.QueryValsetConfirmsByNonceRequestProtoMsg): _6.QueryValsetConfirmsByNonceRequest;
            toProto(message: _6.QueryValsetConfirmsByNonceRequest): Uint8Array;
            toProtoMsg(message: _6.QueryValsetConfirmsByNonceRequest): _6.QueryValsetConfirmsByNonceRequestProtoMsg;
        };
        QueryValsetConfirmsByNonceResponse: {
            typeUrl: string;
            encode(message: _6.QueryValsetConfirmsByNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryValsetConfirmsByNonceResponse;
            fromPartial(object: Partial<_6.QueryValsetConfirmsByNonceResponse>): _6.QueryValsetConfirmsByNonceResponse;
            fromAmino(object: _6.QueryValsetConfirmsByNonceResponseAmino): _6.QueryValsetConfirmsByNonceResponse;
            toAmino(message: _6.QueryValsetConfirmsByNonceResponse): _6.QueryValsetConfirmsByNonceResponseAmino;
            fromAminoMsg(object: _6.QueryValsetConfirmsByNonceResponseAminoMsg): _6.QueryValsetConfirmsByNonceResponse;
            fromProtoMsg(message: _6.QueryValsetConfirmsByNonceResponseProtoMsg): _6.QueryValsetConfirmsByNonceResponse;
            toProto(message: _6.QueryValsetConfirmsByNonceResponse): Uint8Array;
            toProtoMsg(message: _6.QueryValsetConfirmsByNonceResponse): _6.QueryValsetConfirmsByNonceResponseProtoMsg;
        };
        QueryLastValsetRequestsRequest: {
            typeUrl: string;
            encode(_: _6.QueryLastValsetRequestsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryLastValsetRequestsRequest;
            fromPartial(_: Partial<_6.QueryLastValsetRequestsRequest>): _6.QueryLastValsetRequestsRequest;
            fromAmino(_: _6.QueryLastValsetRequestsRequestAmino): _6.QueryLastValsetRequestsRequest;
            toAmino(_: _6.QueryLastValsetRequestsRequest): _6.QueryLastValsetRequestsRequestAmino;
            fromAminoMsg(object: _6.QueryLastValsetRequestsRequestAminoMsg): _6.QueryLastValsetRequestsRequest;
            fromProtoMsg(message: _6.QueryLastValsetRequestsRequestProtoMsg): _6.QueryLastValsetRequestsRequest;
            toProto(message: _6.QueryLastValsetRequestsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryLastValsetRequestsRequest): _6.QueryLastValsetRequestsRequestProtoMsg;
        };
        QueryLastValsetRequestsResponse: {
            typeUrl: string;
            encode(message: _6.QueryLastValsetRequestsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastValsetRequestsResponse;
            fromPartial(object: Partial<_6.QueryLastValsetRequestsResponse>): _6.QueryLastValsetRequestsResponse;
            fromAmino(object: _6.QueryLastValsetRequestsResponseAmino): _6.QueryLastValsetRequestsResponse;
            toAmino(message: _6.QueryLastValsetRequestsResponse): _6.QueryLastValsetRequestsResponseAmino;
            fromAminoMsg(object: _6.QueryLastValsetRequestsResponseAminoMsg): _6.QueryLastValsetRequestsResponse;
            fromProtoMsg(message: _6.QueryLastValsetRequestsResponseProtoMsg): _6.QueryLastValsetRequestsResponse;
            toProto(message: _6.QueryLastValsetRequestsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryLastValsetRequestsResponse): _6.QueryLastValsetRequestsResponseProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrRequest: {
            typeUrl: string;
            encode(message: _6.QueryLastPendingValsetRequestByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastPendingValsetRequestByAddrRequest;
            fromPartial(object: Partial<_6.QueryLastPendingValsetRequestByAddrRequest>): _6.QueryLastPendingValsetRequestByAddrRequest;
            fromAmino(object: _6.QueryLastPendingValsetRequestByAddrRequestAmino): _6.QueryLastPendingValsetRequestByAddrRequest;
            toAmino(message: _6.QueryLastPendingValsetRequestByAddrRequest): _6.QueryLastPendingValsetRequestByAddrRequestAmino;
            fromAminoMsg(object: _6.QueryLastPendingValsetRequestByAddrRequestAminoMsg): _6.QueryLastPendingValsetRequestByAddrRequest;
            fromProtoMsg(message: _6.QueryLastPendingValsetRequestByAddrRequestProtoMsg): _6.QueryLastPendingValsetRequestByAddrRequest;
            toProto(message: _6.QueryLastPendingValsetRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _6.QueryLastPendingValsetRequestByAddrRequest): _6.QueryLastPendingValsetRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrResponse: {
            typeUrl: string;
            encode(message: _6.QueryLastPendingValsetRequestByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastPendingValsetRequestByAddrResponse;
            fromPartial(object: Partial<_6.QueryLastPendingValsetRequestByAddrResponse>): _6.QueryLastPendingValsetRequestByAddrResponse;
            fromAmino(object: _6.QueryLastPendingValsetRequestByAddrResponseAmino): _6.QueryLastPendingValsetRequestByAddrResponse;
            toAmino(message: _6.QueryLastPendingValsetRequestByAddrResponse): _6.QueryLastPendingValsetRequestByAddrResponseAmino;
            fromAminoMsg(object: _6.QueryLastPendingValsetRequestByAddrResponseAminoMsg): _6.QueryLastPendingValsetRequestByAddrResponse;
            fromProtoMsg(message: _6.QueryLastPendingValsetRequestByAddrResponseProtoMsg): _6.QueryLastPendingValsetRequestByAddrResponse;
            toProto(message: _6.QueryLastPendingValsetRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _6.QueryLastPendingValsetRequestByAddrResponse): _6.QueryLastPendingValsetRequestByAddrResponseProtoMsg;
        };
        QueryBatchFeeRequest: {
            typeUrl: string;
            encode(_: _6.QueryBatchFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryBatchFeeRequest;
            fromPartial(_: Partial<_6.QueryBatchFeeRequest>): _6.QueryBatchFeeRequest;
            fromAmino(_: _6.QueryBatchFeeRequestAmino): _6.QueryBatchFeeRequest;
            toAmino(_: _6.QueryBatchFeeRequest): _6.QueryBatchFeeRequestAmino;
            fromAminoMsg(object: _6.QueryBatchFeeRequestAminoMsg): _6.QueryBatchFeeRequest;
            fromProtoMsg(message: _6.QueryBatchFeeRequestProtoMsg): _6.QueryBatchFeeRequest;
            toProto(message: _6.QueryBatchFeeRequest): Uint8Array;
            toProtoMsg(message: _6.QueryBatchFeeRequest): _6.QueryBatchFeeRequestProtoMsg;
        };
        QueryBatchFeeResponse: {
            typeUrl: string;
            encode(message: _6.QueryBatchFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryBatchFeeResponse;
            fromPartial(object: Partial<_6.QueryBatchFeeResponse>): _6.QueryBatchFeeResponse;
            fromAmino(object: _6.QueryBatchFeeResponseAmino): _6.QueryBatchFeeResponse;
            toAmino(message: _6.QueryBatchFeeResponse): _6.QueryBatchFeeResponseAmino;
            fromAminoMsg(object: _6.QueryBatchFeeResponseAminoMsg): _6.QueryBatchFeeResponse;
            fromProtoMsg(message: _6.QueryBatchFeeResponseProtoMsg): _6.QueryBatchFeeResponse;
            toProto(message: _6.QueryBatchFeeResponse): Uint8Array;
            toProtoMsg(message: _6.QueryBatchFeeResponse): _6.QueryBatchFeeResponseProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrRequest: {
            typeUrl: string;
            encode(message: _6.QueryLastPendingBatchRequestByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastPendingBatchRequestByAddrRequest;
            fromPartial(object: Partial<_6.QueryLastPendingBatchRequestByAddrRequest>): _6.QueryLastPendingBatchRequestByAddrRequest;
            fromAmino(object: _6.QueryLastPendingBatchRequestByAddrRequestAmino): _6.QueryLastPendingBatchRequestByAddrRequest;
            toAmino(message: _6.QueryLastPendingBatchRequestByAddrRequest): _6.QueryLastPendingBatchRequestByAddrRequestAmino;
            fromAminoMsg(object: _6.QueryLastPendingBatchRequestByAddrRequestAminoMsg): _6.QueryLastPendingBatchRequestByAddrRequest;
            fromProtoMsg(message: _6.QueryLastPendingBatchRequestByAddrRequestProtoMsg): _6.QueryLastPendingBatchRequestByAddrRequest;
            toProto(message: _6.QueryLastPendingBatchRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _6.QueryLastPendingBatchRequestByAddrRequest): _6.QueryLastPendingBatchRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrResponse: {
            typeUrl: string;
            encode(message: _6.QueryLastPendingBatchRequestByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastPendingBatchRequestByAddrResponse;
            fromPartial(object: Partial<_6.QueryLastPendingBatchRequestByAddrResponse>): _6.QueryLastPendingBatchRequestByAddrResponse;
            fromAmino(object: _6.QueryLastPendingBatchRequestByAddrResponseAmino): _6.QueryLastPendingBatchRequestByAddrResponse;
            toAmino(message: _6.QueryLastPendingBatchRequestByAddrResponse): _6.QueryLastPendingBatchRequestByAddrResponseAmino;
            fromAminoMsg(object: _6.QueryLastPendingBatchRequestByAddrResponseAminoMsg): _6.QueryLastPendingBatchRequestByAddrResponse;
            fromProtoMsg(message: _6.QueryLastPendingBatchRequestByAddrResponseProtoMsg): _6.QueryLastPendingBatchRequestByAddrResponse;
            toProto(message: _6.QueryLastPendingBatchRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _6.QueryLastPendingBatchRequestByAddrResponse): _6.QueryLastPendingBatchRequestByAddrResponseProtoMsg;
        };
        QueryLastPendingLogicCallByAddrRequest: {
            typeUrl: string;
            encode(message: _6.QueryLastPendingLogicCallByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastPendingLogicCallByAddrRequest;
            fromPartial(object: Partial<_6.QueryLastPendingLogicCallByAddrRequest>): _6.QueryLastPendingLogicCallByAddrRequest;
            fromAmino(object: _6.QueryLastPendingLogicCallByAddrRequestAmino): _6.QueryLastPendingLogicCallByAddrRequest;
            toAmino(message: _6.QueryLastPendingLogicCallByAddrRequest): _6.QueryLastPendingLogicCallByAddrRequestAmino;
            fromAminoMsg(object: _6.QueryLastPendingLogicCallByAddrRequestAminoMsg): _6.QueryLastPendingLogicCallByAddrRequest;
            fromProtoMsg(message: _6.QueryLastPendingLogicCallByAddrRequestProtoMsg): _6.QueryLastPendingLogicCallByAddrRequest;
            toProto(message: _6.QueryLastPendingLogicCallByAddrRequest): Uint8Array;
            toProtoMsg(message: _6.QueryLastPendingLogicCallByAddrRequest): _6.QueryLastPendingLogicCallByAddrRequestProtoMsg;
        };
        QueryLastPendingLogicCallByAddrResponse: {
            typeUrl: string;
            encode(message: _6.QueryLastPendingLogicCallByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastPendingLogicCallByAddrResponse;
            fromPartial(object: Partial<_6.QueryLastPendingLogicCallByAddrResponse>): _6.QueryLastPendingLogicCallByAddrResponse;
            fromAmino(object: _6.QueryLastPendingLogicCallByAddrResponseAmino): _6.QueryLastPendingLogicCallByAddrResponse;
            toAmino(message: _6.QueryLastPendingLogicCallByAddrResponse): _6.QueryLastPendingLogicCallByAddrResponseAmino;
            fromAminoMsg(object: _6.QueryLastPendingLogicCallByAddrResponseAminoMsg): _6.QueryLastPendingLogicCallByAddrResponse;
            fromProtoMsg(message: _6.QueryLastPendingLogicCallByAddrResponseProtoMsg): _6.QueryLastPendingLogicCallByAddrResponse;
            toProto(message: _6.QueryLastPendingLogicCallByAddrResponse): Uint8Array;
            toProtoMsg(message: _6.QueryLastPendingLogicCallByAddrResponse): _6.QueryLastPendingLogicCallByAddrResponseProtoMsg;
        };
        QueryOutgoingTxBatchesRequest: {
            typeUrl: string;
            encode(_: _6.QueryOutgoingTxBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryOutgoingTxBatchesRequest;
            fromPartial(_: Partial<_6.QueryOutgoingTxBatchesRequest>): _6.QueryOutgoingTxBatchesRequest;
            fromAmino(_: _6.QueryOutgoingTxBatchesRequestAmino): _6.QueryOutgoingTxBatchesRequest;
            toAmino(_: _6.QueryOutgoingTxBatchesRequest): _6.QueryOutgoingTxBatchesRequestAmino;
            fromAminoMsg(object: _6.QueryOutgoingTxBatchesRequestAminoMsg): _6.QueryOutgoingTxBatchesRequest;
            fromProtoMsg(message: _6.QueryOutgoingTxBatchesRequestProtoMsg): _6.QueryOutgoingTxBatchesRequest;
            toProto(message: _6.QueryOutgoingTxBatchesRequest): Uint8Array;
            toProtoMsg(message: _6.QueryOutgoingTxBatchesRequest): _6.QueryOutgoingTxBatchesRequestProtoMsg;
        };
        QueryOutgoingTxBatchesResponse: {
            typeUrl: string;
            encode(message: _6.QueryOutgoingTxBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryOutgoingTxBatchesResponse;
            fromPartial(object: Partial<_6.QueryOutgoingTxBatchesResponse>): _6.QueryOutgoingTxBatchesResponse;
            fromAmino(object: _6.QueryOutgoingTxBatchesResponseAmino): _6.QueryOutgoingTxBatchesResponse;
            toAmino(message: _6.QueryOutgoingTxBatchesResponse): _6.QueryOutgoingTxBatchesResponseAmino;
            fromAminoMsg(object: _6.QueryOutgoingTxBatchesResponseAminoMsg): _6.QueryOutgoingTxBatchesResponse;
            fromProtoMsg(message: _6.QueryOutgoingTxBatchesResponseProtoMsg): _6.QueryOutgoingTxBatchesResponse;
            toProto(message: _6.QueryOutgoingTxBatchesResponse): Uint8Array;
            toProtoMsg(message: _6.QueryOutgoingTxBatchesResponse): _6.QueryOutgoingTxBatchesResponseProtoMsg;
        };
        QueryOutgoingLogicCallsRequest: {
            typeUrl: string;
            encode(_: _6.QueryOutgoingLogicCallsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryOutgoingLogicCallsRequest;
            fromPartial(_: Partial<_6.QueryOutgoingLogicCallsRequest>): _6.QueryOutgoingLogicCallsRequest;
            fromAmino(_: _6.QueryOutgoingLogicCallsRequestAmino): _6.QueryOutgoingLogicCallsRequest;
            toAmino(_: _6.QueryOutgoingLogicCallsRequest): _6.QueryOutgoingLogicCallsRequestAmino;
            fromAminoMsg(object: _6.QueryOutgoingLogicCallsRequestAminoMsg): _6.QueryOutgoingLogicCallsRequest;
            fromProtoMsg(message: _6.QueryOutgoingLogicCallsRequestProtoMsg): _6.QueryOutgoingLogicCallsRequest;
            toProto(message: _6.QueryOutgoingLogicCallsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryOutgoingLogicCallsRequest): _6.QueryOutgoingLogicCallsRequestProtoMsg;
        };
        QueryOutgoingLogicCallsResponse: {
            typeUrl: string;
            encode(message: _6.QueryOutgoingLogicCallsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryOutgoingLogicCallsResponse;
            fromPartial(object: Partial<_6.QueryOutgoingLogicCallsResponse>): _6.QueryOutgoingLogicCallsResponse;
            fromAmino(object: _6.QueryOutgoingLogicCallsResponseAmino): _6.QueryOutgoingLogicCallsResponse;
            toAmino(message: _6.QueryOutgoingLogicCallsResponse): _6.QueryOutgoingLogicCallsResponseAmino;
            fromAminoMsg(object: _6.QueryOutgoingLogicCallsResponseAminoMsg): _6.QueryOutgoingLogicCallsResponse;
            fromProtoMsg(message: _6.QueryOutgoingLogicCallsResponseProtoMsg): _6.QueryOutgoingLogicCallsResponse;
            toProto(message: _6.QueryOutgoingLogicCallsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryOutgoingLogicCallsResponse): _6.QueryOutgoingLogicCallsResponseProtoMsg;
        };
        QueryBatchRequestByNonceRequest: {
            typeUrl: string;
            encode(message: _6.QueryBatchRequestByNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryBatchRequestByNonceRequest;
            fromPartial(object: Partial<_6.QueryBatchRequestByNonceRequest>): _6.QueryBatchRequestByNonceRequest;
            fromAmino(object: _6.QueryBatchRequestByNonceRequestAmino): _6.QueryBatchRequestByNonceRequest;
            toAmino(message: _6.QueryBatchRequestByNonceRequest): _6.QueryBatchRequestByNonceRequestAmino;
            fromAminoMsg(object: _6.QueryBatchRequestByNonceRequestAminoMsg): _6.QueryBatchRequestByNonceRequest;
            fromProtoMsg(message: _6.QueryBatchRequestByNonceRequestProtoMsg): _6.QueryBatchRequestByNonceRequest;
            toProto(message: _6.QueryBatchRequestByNonceRequest): Uint8Array;
            toProtoMsg(message: _6.QueryBatchRequestByNonceRequest): _6.QueryBatchRequestByNonceRequestProtoMsg;
        };
        QueryBatchRequestByNonceResponse: {
            typeUrl: string;
            encode(message: _6.QueryBatchRequestByNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryBatchRequestByNonceResponse;
            fromPartial(object: Partial<_6.QueryBatchRequestByNonceResponse>): _6.QueryBatchRequestByNonceResponse;
            fromAmino(object: _6.QueryBatchRequestByNonceResponseAmino): _6.QueryBatchRequestByNonceResponse;
            toAmino(message: _6.QueryBatchRequestByNonceResponse): _6.QueryBatchRequestByNonceResponseAmino;
            fromAminoMsg(object: _6.QueryBatchRequestByNonceResponseAminoMsg): _6.QueryBatchRequestByNonceResponse;
            fromProtoMsg(message: _6.QueryBatchRequestByNonceResponseProtoMsg): _6.QueryBatchRequestByNonceResponse;
            toProto(message: _6.QueryBatchRequestByNonceResponse): Uint8Array;
            toProtoMsg(message: _6.QueryBatchRequestByNonceResponse): _6.QueryBatchRequestByNonceResponseProtoMsg;
        };
        QueryBatchConfirmsRequest: {
            typeUrl: string;
            encode(message: _6.QueryBatchConfirmsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryBatchConfirmsRequest;
            fromPartial(object: Partial<_6.QueryBatchConfirmsRequest>): _6.QueryBatchConfirmsRequest;
            fromAmino(object: _6.QueryBatchConfirmsRequestAmino): _6.QueryBatchConfirmsRequest;
            toAmino(message: _6.QueryBatchConfirmsRequest): _6.QueryBatchConfirmsRequestAmino;
            fromAminoMsg(object: _6.QueryBatchConfirmsRequestAminoMsg): _6.QueryBatchConfirmsRequest;
            fromProtoMsg(message: _6.QueryBatchConfirmsRequestProtoMsg): _6.QueryBatchConfirmsRequest;
            toProto(message: _6.QueryBatchConfirmsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryBatchConfirmsRequest): _6.QueryBatchConfirmsRequestProtoMsg;
        };
        QueryBatchConfirmsResponse: {
            typeUrl: string;
            encode(message: _6.QueryBatchConfirmsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryBatchConfirmsResponse;
            fromPartial(object: Partial<_6.QueryBatchConfirmsResponse>): _6.QueryBatchConfirmsResponse;
            fromAmino(object: _6.QueryBatchConfirmsResponseAmino): _6.QueryBatchConfirmsResponse;
            toAmino(message: _6.QueryBatchConfirmsResponse): _6.QueryBatchConfirmsResponseAmino;
            fromAminoMsg(object: _6.QueryBatchConfirmsResponseAminoMsg): _6.QueryBatchConfirmsResponse;
            fromProtoMsg(message: _6.QueryBatchConfirmsResponseProtoMsg): _6.QueryBatchConfirmsResponse;
            toProto(message: _6.QueryBatchConfirmsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryBatchConfirmsResponse): _6.QueryBatchConfirmsResponseProtoMsg;
        };
        QueryLogicConfirmsRequest: {
            typeUrl: string;
            encode(message: _6.QueryLogicConfirmsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLogicConfirmsRequest;
            fromPartial(object: Partial<_6.QueryLogicConfirmsRequest>): _6.QueryLogicConfirmsRequest;
            fromAmino(object: _6.QueryLogicConfirmsRequestAmino): _6.QueryLogicConfirmsRequest;
            toAmino(message: _6.QueryLogicConfirmsRequest): _6.QueryLogicConfirmsRequestAmino;
            fromAminoMsg(object: _6.QueryLogicConfirmsRequestAminoMsg): _6.QueryLogicConfirmsRequest;
            fromProtoMsg(message: _6.QueryLogicConfirmsRequestProtoMsg): _6.QueryLogicConfirmsRequest;
            toProto(message: _6.QueryLogicConfirmsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryLogicConfirmsRequest): _6.QueryLogicConfirmsRequestProtoMsg;
        };
        QueryLogicConfirmsResponse: {
            typeUrl: string;
            encode(message: _6.QueryLogicConfirmsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLogicConfirmsResponse;
            fromPartial(object: Partial<_6.QueryLogicConfirmsResponse>): _6.QueryLogicConfirmsResponse;
            fromAmino(object: _6.QueryLogicConfirmsResponseAmino): _6.QueryLogicConfirmsResponse;
            toAmino(message: _6.QueryLogicConfirmsResponse): _6.QueryLogicConfirmsResponseAmino;
            fromAminoMsg(object: _6.QueryLogicConfirmsResponseAminoMsg): _6.QueryLogicConfirmsResponse;
            fromProtoMsg(message: _6.QueryLogicConfirmsResponseProtoMsg): _6.QueryLogicConfirmsResponse;
            toProto(message: _6.QueryLogicConfirmsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryLogicConfirmsResponse): _6.QueryLogicConfirmsResponseProtoMsg;
        };
        QueryLastEventNonceByAddrRequest: {
            typeUrl: string;
            encode(message: _6.QueryLastEventNonceByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastEventNonceByAddrRequest;
            fromPartial(object: Partial<_6.QueryLastEventNonceByAddrRequest>): _6.QueryLastEventNonceByAddrRequest;
            fromAmino(object: _6.QueryLastEventNonceByAddrRequestAmino): _6.QueryLastEventNonceByAddrRequest;
            toAmino(message: _6.QueryLastEventNonceByAddrRequest): _6.QueryLastEventNonceByAddrRequestAmino;
            fromAminoMsg(object: _6.QueryLastEventNonceByAddrRequestAminoMsg): _6.QueryLastEventNonceByAddrRequest;
            fromProtoMsg(message: _6.QueryLastEventNonceByAddrRequestProtoMsg): _6.QueryLastEventNonceByAddrRequest;
            toProto(message: _6.QueryLastEventNonceByAddrRequest): Uint8Array;
            toProtoMsg(message: _6.QueryLastEventNonceByAddrRequest): _6.QueryLastEventNonceByAddrRequestProtoMsg;
        };
        QueryLastEventNonceByAddrResponse: {
            typeUrl: string;
            encode(message: _6.QueryLastEventNonceByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastEventNonceByAddrResponse;
            fromPartial(object: Partial<_6.QueryLastEventNonceByAddrResponse>): _6.QueryLastEventNonceByAddrResponse;
            fromAmino(object: _6.QueryLastEventNonceByAddrResponseAmino): _6.QueryLastEventNonceByAddrResponse;
            toAmino(message: _6.QueryLastEventNonceByAddrResponse): _6.QueryLastEventNonceByAddrResponseAmino;
            fromAminoMsg(object: _6.QueryLastEventNonceByAddrResponseAminoMsg): _6.QueryLastEventNonceByAddrResponse;
            fromProtoMsg(message: _6.QueryLastEventNonceByAddrResponseProtoMsg): _6.QueryLastEventNonceByAddrResponse;
            toProto(message: _6.QueryLastEventNonceByAddrResponse): Uint8Array;
            toProtoMsg(message: _6.QueryLastEventNonceByAddrResponse): _6.QueryLastEventNonceByAddrResponseProtoMsg;
        };
        QueryERC20ToDenomRequest: {
            typeUrl: string;
            encode(message: _6.QueryERC20ToDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryERC20ToDenomRequest;
            fromPartial(object: Partial<_6.QueryERC20ToDenomRequest>): _6.QueryERC20ToDenomRequest;
            fromAmino(object: _6.QueryERC20ToDenomRequestAmino): _6.QueryERC20ToDenomRequest;
            toAmino(message: _6.QueryERC20ToDenomRequest): _6.QueryERC20ToDenomRequestAmino;
            fromAminoMsg(object: _6.QueryERC20ToDenomRequestAminoMsg): _6.QueryERC20ToDenomRequest;
            fromProtoMsg(message: _6.QueryERC20ToDenomRequestProtoMsg): _6.QueryERC20ToDenomRequest;
            toProto(message: _6.QueryERC20ToDenomRequest): Uint8Array;
            toProtoMsg(message: _6.QueryERC20ToDenomRequest): _6.QueryERC20ToDenomRequestProtoMsg;
        };
        QueryERC20ToDenomResponse: {
            typeUrl: string;
            encode(message: _6.QueryERC20ToDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryERC20ToDenomResponse;
            fromPartial(object: Partial<_6.QueryERC20ToDenomResponse>): _6.QueryERC20ToDenomResponse;
            fromAmino(object: _6.QueryERC20ToDenomResponseAmino): _6.QueryERC20ToDenomResponse;
            toAmino(message: _6.QueryERC20ToDenomResponse): _6.QueryERC20ToDenomResponseAmino;
            fromAminoMsg(object: _6.QueryERC20ToDenomResponseAminoMsg): _6.QueryERC20ToDenomResponse;
            fromProtoMsg(message: _6.QueryERC20ToDenomResponseProtoMsg): _6.QueryERC20ToDenomResponse;
            toProto(message: _6.QueryERC20ToDenomResponse): Uint8Array;
            toProtoMsg(message: _6.QueryERC20ToDenomResponse): _6.QueryERC20ToDenomResponseProtoMsg;
        };
        QueryDenomToERC20Request: {
            typeUrl: string;
            encode(message: _6.QueryDenomToERC20Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDenomToERC20Request;
            fromPartial(object: Partial<_6.QueryDenomToERC20Request>): _6.QueryDenomToERC20Request;
            fromAmino(object: _6.QueryDenomToERC20RequestAmino): _6.QueryDenomToERC20Request;
            toAmino(message: _6.QueryDenomToERC20Request): _6.QueryDenomToERC20RequestAmino;
            fromAminoMsg(object: _6.QueryDenomToERC20RequestAminoMsg): _6.QueryDenomToERC20Request;
            fromProtoMsg(message: _6.QueryDenomToERC20RequestProtoMsg): _6.QueryDenomToERC20Request;
            toProto(message: _6.QueryDenomToERC20Request): Uint8Array;
            toProtoMsg(message: _6.QueryDenomToERC20Request): _6.QueryDenomToERC20RequestProtoMsg;
        };
        QueryDenomToERC20Response: {
            typeUrl: string;
            encode(message: _6.QueryDenomToERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDenomToERC20Response;
            fromPartial(object: Partial<_6.QueryDenomToERC20Response>): _6.QueryDenomToERC20Response;
            fromAmino(object: _6.QueryDenomToERC20ResponseAmino): _6.QueryDenomToERC20Response;
            toAmino(message: _6.QueryDenomToERC20Response): _6.QueryDenomToERC20ResponseAmino;
            fromAminoMsg(object: _6.QueryDenomToERC20ResponseAminoMsg): _6.QueryDenomToERC20Response;
            fromProtoMsg(message: _6.QueryDenomToERC20ResponseProtoMsg): _6.QueryDenomToERC20Response;
            toProto(message: _6.QueryDenomToERC20Response): Uint8Array;
            toProtoMsg(message: _6.QueryDenomToERC20Response): _6.QueryDenomToERC20ResponseProtoMsg;
        };
        QueryLastObservedEthBlockRequest: {
            typeUrl: string;
            encode(message: _6.QueryLastObservedEthBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastObservedEthBlockRequest;
            fromPartial(object: Partial<_6.QueryLastObservedEthBlockRequest>): _6.QueryLastObservedEthBlockRequest;
            fromAmino(object: _6.QueryLastObservedEthBlockRequestAmino): _6.QueryLastObservedEthBlockRequest;
            toAmino(message: _6.QueryLastObservedEthBlockRequest): _6.QueryLastObservedEthBlockRequestAmino;
            fromAminoMsg(object: _6.QueryLastObservedEthBlockRequestAminoMsg): _6.QueryLastObservedEthBlockRequest;
            fromProtoMsg(message: _6.QueryLastObservedEthBlockRequestProtoMsg): _6.QueryLastObservedEthBlockRequest;
            toProto(message: _6.QueryLastObservedEthBlockRequest): Uint8Array;
            toProtoMsg(message: _6.QueryLastObservedEthBlockRequest): _6.QueryLastObservedEthBlockRequestProtoMsg;
        };
        QueryLastObservedEthBlockResponse: {
            typeUrl: string;
            encode(message: _6.QueryLastObservedEthBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastObservedEthBlockResponse;
            fromPartial(object: Partial<_6.QueryLastObservedEthBlockResponse>): _6.QueryLastObservedEthBlockResponse;
            fromAmino(object: _6.QueryLastObservedEthBlockResponseAmino): _6.QueryLastObservedEthBlockResponse;
            toAmino(message: _6.QueryLastObservedEthBlockResponse): _6.QueryLastObservedEthBlockResponseAmino;
            fromAminoMsg(object: _6.QueryLastObservedEthBlockResponseAminoMsg): _6.QueryLastObservedEthBlockResponse;
            fromProtoMsg(message: _6.QueryLastObservedEthBlockResponseProtoMsg): _6.QueryLastObservedEthBlockResponse;
            toProto(message: _6.QueryLastObservedEthBlockResponse): Uint8Array;
            toProtoMsg(message: _6.QueryLastObservedEthBlockResponse): _6.QueryLastObservedEthBlockResponseProtoMsg;
        };
        QueryLastObservedEthNonceRequest: {
            typeUrl: string;
            encode(message: _6.QueryLastObservedEthNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastObservedEthNonceRequest;
            fromPartial(object: Partial<_6.QueryLastObservedEthNonceRequest>): _6.QueryLastObservedEthNonceRequest;
            fromAmino(object: _6.QueryLastObservedEthNonceRequestAmino): _6.QueryLastObservedEthNonceRequest;
            toAmino(message: _6.QueryLastObservedEthNonceRequest): _6.QueryLastObservedEthNonceRequestAmino;
            fromAminoMsg(object: _6.QueryLastObservedEthNonceRequestAminoMsg): _6.QueryLastObservedEthNonceRequest;
            fromProtoMsg(message: _6.QueryLastObservedEthNonceRequestProtoMsg): _6.QueryLastObservedEthNonceRequest;
            toProto(message: _6.QueryLastObservedEthNonceRequest): Uint8Array;
            toProtoMsg(message: _6.QueryLastObservedEthNonceRequest): _6.QueryLastObservedEthNonceRequestProtoMsg;
        };
        QueryLastObservedEthNonceResponse: {
            typeUrl: string;
            encode(message: _6.QueryLastObservedEthNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryLastObservedEthNonceResponse;
            fromPartial(object: Partial<_6.QueryLastObservedEthNonceResponse>): _6.QueryLastObservedEthNonceResponse;
            fromAmino(object: _6.QueryLastObservedEthNonceResponseAmino): _6.QueryLastObservedEthNonceResponse;
            toAmino(message: _6.QueryLastObservedEthNonceResponse): _6.QueryLastObservedEthNonceResponseAmino;
            fromAminoMsg(object: _6.QueryLastObservedEthNonceResponseAminoMsg): _6.QueryLastObservedEthNonceResponse;
            fromProtoMsg(message: _6.QueryLastObservedEthNonceResponseProtoMsg): _6.QueryLastObservedEthNonceResponse;
            toProto(message: _6.QueryLastObservedEthNonceResponse): Uint8Array;
            toProtoMsg(message: _6.QueryLastObservedEthNonceResponse): _6.QueryLastObservedEthNonceResponseProtoMsg;
        };
        QueryAttestationsRequest: {
            typeUrl: string;
            encode(message: _6.QueryAttestationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryAttestationsRequest;
            fromPartial(object: Partial<_6.QueryAttestationsRequest>): _6.QueryAttestationsRequest;
            fromAmino(object: _6.QueryAttestationsRequestAmino): _6.QueryAttestationsRequest;
            toAmino(message: _6.QueryAttestationsRequest): _6.QueryAttestationsRequestAmino;
            fromAminoMsg(object: _6.QueryAttestationsRequestAminoMsg): _6.QueryAttestationsRequest;
            fromProtoMsg(message: _6.QueryAttestationsRequestProtoMsg): _6.QueryAttestationsRequest;
            toProto(message: _6.QueryAttestationsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryAttestationsRequest): _6.QueryAttestationsRequestProtoMsg;
        };
        QueryAttestationsResponse: {
            typeUrl: string;
            encode(message: _6.QueryAttestationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryAttestationsResponse;
            fromPartial(object: Partial<_6.QueryAttestationsResponse>): _6.QueryAttestationsResponse;
            fromAmino(object: _6.QueryAttestationsResponseAmino): _6.QueryAttestationsResponse;
            toAmino(message: _6.QueryAttestationsResponse): _6.QueryAttestationsResponseAmino;
            fromAminoMsg(object: _6.QueryAttestationsResponseAminoMsg): _6.QueryAttestationsResponse;
            fromProtoMsg(message: _6.QueryAttestationsResponseProtoMsg): _6.QueryAttestationsResponse;
            toProto(message: _6.QueryAttestationsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryAttestationsResponse): _6.QueryAttestationsResponseProtoMsg;
        };
        QueryDelegateKeysByValidatorAddress: {
            typeUrl: string;
            encode(message: _6.QueryDelegateKeysByValidatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDelegateKeysByValidatorAddress;
            fromPartial(object: Partial<_6.QueryDelegateKeysByValidatorAddress>): _6.QueryDelegateKeysByValidatorAddress;
            fromAmino(object: _6.QueryDelegateKeysByValidatorAddressAmino): _6.QueryDelegateKeysByValidatorAddress;
            toAmino(message: _6.QueryDelegateKeysByValidatorAddress): _6.QueryDelegateKeysByValidatorAddressAmino;
            fromAminoMsg(object: _6.QueryDelegateKeysByValidatorAddressAminoMsg): _6.QueryDelegateKeysByValidatorAddress;
            fromProtoMsg(message: _6.QueryDelegateKeysByValidatorAddressProtoMsg): _6.QueryDelegateKeysByValidatorAddress;
            toProto(message: _6.QueryDelegateKeysByValidatorAddress): Uint8Array;
            toProtoMsg(message: _6.QueryDelegateKeysByValidatorAddress): _6.QueryDelegateKeysByValidatorAddressProtoMsg;
        };
        QueryDelegateKeysByValidatorAddressResponse: {
            typeUrl: string;
            encode(message: _6.QueryDelegateKeysByValidatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDelegateKeysByValidatorAddressResponse;
            fromPartial(object: Partial<_6.QueryDelegateKeysByValidatorAddressResponse>): _6.QueryDelegateKeysByValidatorAddressResponse;
            fromAmino(object: _6.QueryDelegateKeysByValidatorAddressResponseAmino): _6.QueryDelegateKeysByValidatorAddressResponse;
            toAmino(message: _6.QueryDelegateKeysByValidatorAddressResponse): _6.QueryDelegateKeysByValidatorAddressResponseAmino;
            fromAminoMsg(object: _6.QueryDelegateKeysByValidatorAddressResponseAminoMsg): _6.QueryDelegateKeysByValidatorAddressResponse;
            fromProtoMsg(message: _6.QueryDelegateKeysByValidatorAddressResponseProtoMsg): _6.QueryDelegateKeysByValidatorAddressResponse;
            toProto(message: _6.QueryDelegateKeysByValidatorAddressResponse): Uint8Array;
            toProtoMsg(message: _6.QueryDelegateKeysByValidatorAddressResponse): _6.QueryDelegateKeysByValidatorAddressResponseProtoMsg;
        };
        QueryDelegateKeysByEthAddress: {
            typeUrl: string;
            encode(message: _6.QueryDelegateKeysByEthAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDelegateKeysByEthAddress;
            fromPartial(object: Partial<_6.QueryDelegateKeysByEthAddress>): _6.QueryDelegateKeysByEthAddress;
            fromAmino(object: _6.QueryDelegateKeysByEthAddressAmino): _6.QueryDelegateKeysByEthAddress;
            toAmino(message: _6.QueryDelegateKeysByEthAddress): _6.QueryDelegateKeysByEthAddressAmino;
            fromAminoMsg(object: _6.QueryDelegateKeysByEthAddressAminoMsg): _6.QueryDelegateKeysByEthAddress;
            fromProtoMsg(message: _6.QueryDelegateKeysByEthAddressProtoMsg): _6.QueryDelegateKeysByEthAddress;
            toProto(message: _6.QueryDelegateKeysByEthAddress): Uint8Array;
            toProtoMsg(message: _6.QueryDelegateKeysByEthAddress): _6.QueryDelegateKeysByEthAddressProtoMsg;
        };
        QueryDelegateKeysByEthAddressResponse: {
            typeUrl: string;
            encode(message: _6.QueryDelegateKeysByEthAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDelegateKeysByEthAddressResponse;
            fromPartial(object: Partial<_6.QueryDelegateKeysByEthAddressResponse>): _6.QueryDelegateKeysByEthAddressResponse;
            fromAmino(object: _6.QueryDelegateKeysByEthAddressResponseAmino): _6.QueryDelegateKeysByEthAddressResponse;
            toAmino(message: _6.QueryDelegateKeysByEthAddressResponse): _6.QueryDelegateKeysByEthAddressResponseAmino;
            fromAminoMsg(object: _6.QueryDelegateKeysByEthAddressResponseAminoMsg): _6.QueryDelegateKeysByEthAddressResponse;
            fromProtoMsg(message: _6.QueryDelegateKeysByEthAddressResponseProtoMsg): _6.QueryDelegateKeysByEthAddressResponse;
            toProto(message: _6.QueryDelegateKeysByEthAddressResponse): Uint8Array;
            toProtoMsg(message: _6.QueryDelegateKeysByEthAddressResponse): _6.QueryDelegateKeysByEthAddressResponseProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddress: {
            typeUrl: string;
            encode(message: _6.QueryDelegateKeysByOrchestratorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDelegateKeysByOrchestratorAddress;
            fromPartial(object: Partial<_6.QueryDelegateKeysByOrchestratorAddress>): _6.QueryDelegateKeysByOrchestratorAddress;
            fromAmino(object: _6.QueryDelegateKeysByOrchestratorAddressAmino): _6.QueryDelegateKeysByOrchestratorAddress;
            toAmino(message: _6.QueryDelegateKeysByOrchestratorAddress): _6.QueryDelegateKeysByOrchestratorAddressAmino;
            fromAminoMsg(object: _6.QueryDelegateKeysByOrchestratorAddressAminoMsg): _6.QueryDelegateKeysByOrchestratorAddress;
            fromProtoMsg(message: _6.QueryDelegateKeysByOrchestratorAddressProtoMsg): _6.QueryDelegateKeysByOrchestratorAddress;
            toProto(message: _6.QueryDelegateKeysByOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _6.QueryDelegateKeysByOrchestratorAddress): _6.QueryDelegateKeysByOrchestratorAddressProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddressResponse: {
            typeUrl: string;
            encode(message: _6.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDelegateKeysByOrchestratorAddressResponse;
            fromPartial(object: Partial<_6.QueryDelegateKeysByOrchestratorAddressResponse>): _6.QueryDelegateKeysByOrchestratorAddressResponse;
            fromAmino(object: _6.QueryDelegateKeysByOrchestratorAddressResponseAmino): _6.QueryDelegateKeysByOrchestratorAddressResponse;
            toAmino(message: _6.QueryDelegateKeysByOrchestratorAddressResponse): _6.QueryDelegateKeysByOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _6.QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): _6.QueryDelegateKeysByOrchestratorAddressResponse;
            fromProtoMsg(message: _6.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): _6.QueryDelegateKeysByOrchestratorAddressResponse;
            toProto(message: _6.QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _6.QueryDelegateKeysByOrchestratorAddressResponse): _6.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg;
        };
        QueryPendingSendToEth: {
            typeUrl: string;
            encode(message: _6.QueryPendingSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryPendingSendToEth;
            fromPartial(object: Partial<_6.QueryPendingSendToEth>): _6.QueryPendingSendToEth;
            fromAmino(object: _6.QueryPendingSendToEthAmino): _6.QueryPendingSendToEth;
            toAmino(message: _6.QueryPendingSendToEth): _6.QueryPendingSendToEthAmino;
            fromAminoMsg(object: _6.QueryPendingSendToEthAminoMsg): _6.QueryPendingSendToEth;
            fromProtoMsg(message: _6.QueryPendingSendToEthProtoMsg): _6.QueryPendingSendToEth;
            toProto(message: _6.QueryPendingSendToEth): Uint8Array;
            toProtoMsg(message: _6.QueryPendingSendToEth): _6.QueryPendingSendToEthProtoMsg;
        };
        QueryPendingSendToEthResponse: {
            typeUrl: string;
            encode(message: _6.QueryPendingSendToEthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryPendingSendToEthResponse;
            fromPartial(object: Partial<_6.QueryPendingSendToEthResponse>): _6.QueryPendingSendToEthResponse;
            fromAmino(object: _6.QueryPendingSendToEthResponseAmino): _6.QueryPendingSendToEthResponse;
            toAmino(message: _6.QueryPendingSendToEthResponse): _6.QueryPendingSendToEthResponseAmino;
            fromAminoMsg(object: _6.QueryPendingSendToEthResponseAminoMsg): _6.QueryPendingSendToEthResponse;
            fromProtoMsg(message: _6.QueryPendingSendToEthResponseProtoMsg): _6.QueryPendingSendToEthResponse;
            toProto(message: _6.QueryPendingSendToEthResponse): Uint8Array;
            toProtoMsg(message: _6.QueryPendingSendToEthResponse): _6.QueryPendingSendToEthResponseProtoMsg;
        };
        QueryPendingIbcAutoForwards: {
            typeUrl: string;
            encode(message: _6.QueryPendingIbcAutoForwards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryPendingIbcAutoForwards;
            fromPartial(object: Partial<_6.QueryPendingIbcAutoForwards>): _6.QueryPendingIbcAutoForwards;
            fromAmino(object: _6.QueryPendingIbcAutoForwardsAmino): _6.QueryPendingIbcAutoForwards;
            toAmino(message: _6.QueryPendingIbcAutoForwards): _6.QueryPendingIbcAutoForwardsAmino;
            fromAminoMsg(object: _6.QueryPendingIbcAutoForwardsAminoMsg): _6.QueryPendingIbcAutoForwards;
            fromProtoMsg(message: _6.QueryPendingIbcAutoForwardsProtoMsg): _6.QueryPendingIbcAutoForwards;
            toProto(message: _6.QueryPendingIbcAutoForwards): Uint8Array;
            toProtoMsg(message: _6.QueryPendingIbcAutoForwards): _6.QueryPendingIbcAutoForwardsProtoMsg;
        };
        QueryPendingIbcAutoForwardsResponse: {
            typeUrl: string;
            encode(message: _6.QueryPendingIbcAutoForwardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryPendingIbcAutoForwardsResponse;
            fromPartial(object: Partial<_6.QueryPendingIbcAutoForwardsResponse>): _6.QueryPendingIbcAutoForwardsResponse;
            fromAmino(object: _6.QueryPendingIbcAutoForwardsResponseAmino): _6.QueryPendingIbcAutoForwardsResponse;
            toAmino(message: _6.QueryPendingIbcAutoForwardsResponse): _6.QueryPendingIbcAutoForwardsResponseAmino;
            fromAminoMsg(object: _6.QueryPendingIbcAutoForwardsResponseAminoMsg): _6.QueryPendingIbcAutoForwardsResponse;
            fromProtoMsg(message: _6.QueryPendingIbcAutoForwardsResponseProtoMsg): _6.QueryPendingIbcAutoForwardsResponse;
            toProto(message: _6.QueryPendingIbcAutoForwardsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryPendingIbcAutoForwardsResponse): _6.QueryPendingIbcAutoForwardsResponseProtoMsg;
        };
        IDSet: {
            typeUrl: string;
            encode(message: _5.IDSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.IDSet;
            fromPartial(object: Partial<_5.IDSet>): _5.IDSet;
            fromAmino(object: _5.IDSetAmino): _5.IDSet;
            toAmino(message: _5.IDSet): _5.IDSetAmino;
            fromAminoMsg(object: _5.IDSetAminoMsg): _5.IDSet;
            fromProtoMsg(message: _5.IDSetProtoMsg): _5.IDSet;
            toProto(message: _5.IDSet): Uint8Array;
            toProtoMsg(message: _5.IDSet): _5.IDSetProtoMsg;
        };
        BatchFees: {
            typeUrl: string;
            encode(message: _5.BatchFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.BatchFees;
            fromPartial(object: Partial<_5.BatchFees>): _5.BatchFees;
            fromAmino(object: _5.BatchFeesAmino): _5.BatchFees;
            toAmino(message: _5.BatchFees): _5.BatchFeesAmino;
            fromAminoMsg(object: _5.BatchFeesAminoMsg): _5.BatchFees;
            fromProtoMsg(message: _5.BatchFeesProtoMsg): _5.BatchFees;
            toProto(message: _5.BatchFees): Uint8Array;
            toProtoMsg(message: _5.BatchFees): _5.BatchFeesProtoMsg;
        };
        EventWithdrawalReceived: {
            typeUrl: string;
            encode(message: _5.EventWithdrawalReceived, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.EventWithdrawalReceived;
            fromPartial(object: Partial<_5.EventWithdrawalReceived>): _5.EventWithdrawalReceived;
            fromAmino(object: _5.EventWithdrawalReceivedAmino): _5.EventWithdrawalReceived;
            toAmino(message: _5.EventWithdrawalReceived): _5.EventWithdrawalReceivedAmino;
            fromAminoMsg(object: _5.EventWithdrawalReceivedAminoMsg): _5.EventWithdrawalReceived;
            fromProtoMsg(message: _5.EventWithdrawalReceivedProtoMsg): _5.EventWithdrawalReceived;
            toProto(message: _5.EventWithdrawalReceived): Uint8Array;
            toProtoMsg(message: _5.EventWithdrawalReceived): _5.EventWithdrawalReceivedProtoMsg;
        };
        EventWithdrawCanceled: {
            typeUrl: string;
            encode(message: _5.EventWithdrawCanceled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.EventWithdrawCanceled;
            fromPartial(object: Partial<_5.EventWithdrawCanceled>): _5.EventWithdrawCanceled;
            fromAmino(object: _5.EventWithdrawCanceledAmino): _5.EventWithdrawCanceled;
            toAmino(message: _5.EventWithdrawCanceled): _5.EventWithdrawCanceledAmino;
            fromAminoMsg(object: _5.EventWithdrawCanceledAminoMsg): _5.EventWithdrawCanceled;
            fromProtoMsg(message: _5.EventWithdrawCanceledProtoMsg): _5.EventWithdrawCanceled;
            toProto(message: _5.EventWithdrawCanceled): Uint8Array;
            toProtoMsg(message: _5.EventWithdrawCanceled): _5.EventWithdrawCanceledProtoMsg;
        };
        MsgSetOrchestratorAddress: {
            typeUrl: string;
            encode(message: _4.MsgSetOrchestratorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgSetOrchestratorAddress;
            fromPartial(object: Partial<_4.MsgSetOrchestratorAddress>): _4.MsgSetOrchestratorAddress;
            fromAmino(object: _4.MsgSetOrchestratorAddressAmino): _4.MsgSetOrchestratorAddress;
            toAmino(message: _4.MsgSetOrchestratorAddress): _4.MsgSetOrchestratorAddressAmino;
            fromAminoMsg(object: _4.MsgSetOrchestratorAddressAminoMsg): _4.MsgSetOrchestratorAddress;
            fromProtoMsg(message: _4.MsgSetOrchestratorAddressProtoMsg): _4.MsgSetOrchestratorAddress;
            toProto(message: _4.MsgSetOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _4.MsgSetOrchestratorAddress): _4.MsgSetOrchestratorAddressProtoMsg;
        };
        MsgSetOrchestratorAddressResponse: {
            typeUrl: string;
            encode(_: _4.MsgSetOrchestratorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgSetOrchestratorAddressResponse;
            fromPartial(_: Partial<_4.MsgSetOrchestratorAddressResponse>): _4.MsgSetOrchestratorAddressResponse;
            fromAmino(_: _4.MsgSetOrchestratorAddressResponseAmino): _4.MsgSetOrchestratorAddressResponse;
            toAmino(_: _4.MsgSetOrchestratorAddressResponse): _4.MsgSetOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _4.MsgSetOrchestratorAddressResponseAminoMsg): _4.MsgSetOrchestratorAddressResponse;
            fromProtoMsg(message: _4.MsgSetOrchestratorAddressResponseProtoMsg): _4.MsgSetOrchestratorAddressResponse;
            toProto(message: _4.MsgSetOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _4.MsgSetOrchestratorAddressResponse): _4.MsgSetOrchestratorAddressResponseProtoMsg;
        };
        MsgValsetConfirm: {
            typeUrl: string;
            encode(message: _4.MsgValsetConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgValsetConfirm;
            fromPartial(object: Partial<_4.MsgValsetConfirm>): _4.MsgValsetConfirm;
            fromAmino(object: _4.MsgValsetConfirmAmino): _4.MsgValsetConfirm;
            toAmino(message: _4.MsgValsetConfirm): _4.MsgValsetConfirmAmino;
            fromAminoMsg(object: _4.MsgValsetConfirmAminoMsg): _4.MsgValsetConfirm;
            fromProtoMsg(message: _4.MsgValsetConfirmProtoMsg): _4.MsgValsetConfirm;
            toProto(message: _4.MsgValsetConfirm): Uint8Array;
            toProtoMsg(message: _4.MsgValsetConfirm): _4.MsgValsetConfirmProtoMsg;
        };
        MsgValsetConfirmResponse: {
            typeUrl: string;
            encode(_: _4.MsgValsetConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgValsetConfirmResponse;
            fromPartial(_: Partial<_4.MsgValsetConfirmResponse>): _4.MsgValsetConfirmResponse;
            fromAmino(_: _4.MsgValsetConfirmResponseAmino): _4.MsgValsetConfirmResponse;
            toAmino(_: _4.MsgValsetConfirmResponse): _4.MsgValsetConfirmResponseAmino;
            fromAminoMsg(object: _4.MsgValsetConfirmResponseAminoMsg): _4.MsgValsetConfirmResponse;
            fromProtoMsg(message: _4.MsgValsetConfirmResponseProtoMsg): _4.MsgValsetConfirmResponse;
            toProto(message: _4.MsgValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _4.MsgValsetConfirmResponse): _4.MsgValsetConfirmResponseProtoMsg;
        };
        MsgSendToEth: {
            typeUrl: string;
            encode(message: _4.MsgSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgSendToEth;
            fromPartial(object: Partial<_4.MsgSendToEth>): _4.MsgSendToEth;
            fromAmino(object: _4.MsgSendToEthAmino): _4.MsgSendToEth;
            toAmino(message: _4.MsgSendToEth): _4.MsgSendToEthAmino;
            fromAminoMsg(object: _4.MsgSendToEthAminoMsg): _4.MsgSendToEth;
            fromProtoMsg(message: _4.MsgSendToEthProtoMsg): _4.MsgSendToEth;
            toProto(message: _4.MsgSendToEth): Uint8Array;
            toProtoMsg(message: _4.MsgSendToEth): _4.MsgSendToEthProtoMsg;
        };
        MsgSendToEthResponse: {
            typeUrl: string;
            encode(_: _4.MsgSendToEthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgSendToEthResponse;
            fromPartial(_: Partial<_4.MsgSendToEthResponse>): _4.MsgSendToEthResponse;
            fromAmino(_: _4.MsgSendToEthResponseAmino): _4.MsgSendToEthResponse;
            toAmino(_: _4.MsgSendToEthResponse): _4.MsgSendToEthResponseAmino;
            fromAminoMsg(object: _4.MsgSendToEthResponseAminoMsg): _4.MsgSendToEthResponse;
            fromProtoMsg(message: _4.MsgSendToEthResponseProtoMsg): _4.MsgSendToEthResponse;
            toProto(message: _4.MsgSendToEthResponse): Uint8Array;
            toProtoMsg(message: _4.MsgSendToEthResponse): _4.MsgSendToEthResponseProtoMsg;
        };
        MsgRequestBatch: {
            typeUrl: string;
            encode(message: _4.MsgRequestBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgRequestBatch;
            fromPartial(object: Partial<_4.MsgRequestBatch>): _4.MsgRequestBatch;
            fromAmino(object: _4.MsgRequestBatchAmino): _4.MsgRequestBatch;
            toAmino(message: _4.MsgRequestBatch): _4.MsgRequestBatchAmino;
            fromAminoMsg(object: _4.MsgRequestBatchAminoMsg): _4.MsgRequestBatch;
            fromProtoMsg(message: _4.MsgRequestBatchProtoMsg): _4.MsgRequestBatch;
            toProto(message: _4.MsgRequestBatch): Uint8Array;
            toProtoMsg(message: _4.MsgRequestBatch): _4.MsgRequestBatchProtoMsg;
        };
        MsgRequestBatchResponse: {
            typeUrl: string;
            encode(_: _4.MsgRequestBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgRequestBatchResponse;
            fromPartial(_: Partial<_4.MsgRequestBatchResponse>): _4.MsgRequestBatchResponse;
            fromAmino(_: _4.MsgRequestBatchResponseAmino): _4.MsgRequestBatchResponse;
            toAmino(_: _4.MsgRequestBatchResponse): _4.MsgRequestBatchResponseAmino;
            fromAminoMsg(object: _4.MsgRequestBatchResponseAminoMsg): _4.MsgRequestBatchResponse;
            fromProtoMsg(message: _4.MsgRequestBatchResponseProtoMsg): _4.MsgRequestBatchResponse;
            toProto(message: _4.MsgRequestBatchResponse): Uint8Array;
            toProtoMsg(message: _4.MsgRequestBatchResponse): _4.MsgRequestBatchResponseProtoMsg;
        };
        MsgConfirmBatch: {
            typeUrl: string;
            encode(message: _4.MsgConfirmBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgConfirmBatch;
            fromPartial(object: Partial<_4.MsgConfirmBatch>): _4.MsgConfirmBatch;
            fromAmino(object: _4.MsgConfirmBatchAmino): _4.MsgConfirmBatch;
            toAmino(message: _4.MsgConfirmBatch): _4.MsgConfirmBatchAmino;
            fromAminoMsg(object: _4.MsgConfirmBatchAminoMsg): _4.MsgConfirmBatch;
            fromProtoMsg(message: _4.MsgConfirmBatchProtoMsg): _4.MsgConfirmBatch;
            toProto(message: _4.MsgConfirmBatch): Uint8Array;
            toProtoMsg(message: _4.MsgConfirmBatch): _4.MsgConfirmBatchProtoMsg;
        };
        MsgConfirmBatchResponse: {
            typeUrl: string;
            encode(_: _4.MsgConfirmBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgConfirmBatchResponse;
            fromPartial(_: Partial<_4.MsgConfirmBatchResponse>): _4.MsgConfirmBatchResponse;
            fromAmino(_: _4.MsgConfirmBatchResponseAmino): _4.MsgConfirmBatchResponse;
            toAmino(_: _4.MsgConfirmBatchResponse): _4.MsgConfirmBatchResponseAmino;
            fromAminoMsg(object: _4.MsgConfirmBatchResponseAminoMsg): _4.MsgConfirmBatchResponse;
            fromProtoMsg(message: _4.MsgConfirmBatchResponseProtoMsg): _4.MsgConfirmBatchResponse;
            toProto(message: _4.MsgConfirmBatchResponse): Uint8Array;
            toProtoMsg(message: _4.MsgConfirmBatchResponse): _4.MsgConfirmBatchResponseProtoMsg;
        };
        MsgConfirmLogicCall: {
            typeUrl: string;
            encode(message: _4.MsgConfirmLogicCall, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgConfirmLogicCall;
            fromPartial(object: Partial<_4.MsgConfirmLogicCall>): _4.MsgConfirmLogicCall;
            fromAmino(object: _4.MsgConfirmLogicCallAmino): _4.MsgConfirmLogicCall;
            toAmino(message: _4.MsgConfirmLogicCall): _4.MsgConfirmLogicCallAmino;
            fromAminoMsg(object: _4.MsgConfirmLogicCallAminoMsg): _4.MsgConfirmLogicCall;
            fromProtoMsg(message: _4.MsgConfirmLogicCallProtoMsg): _4.MsgConfirmLogicCall;
            toProto(message: _4.MsgConfirmLogicCall): Uint8Array;
            toProtoMsg(message: _4.MsgConfirmLogicCall): _4.MsgConfirmLogicCallProtoMsg;
        };
        MsgConfirmLogicCallResponse: {
            typeUrl: string;
            encode(_: _4.MsgConfirmLogicCallResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgConfirmLogicCallResponse;
            fromPartial(_: Partial<_4.MsgConfirmLogicCallResponse>): _4.MsgConfirmLogicCallResponse;
            fromAmino(_: _4.MsgConfirmLogicCallResponseAmino): _4.MsgConfirmLogicCallResponse;
            toAmino(_: _4.MsgConfirmLogicCallResponse): _4.MsgConfirmLogicCallResponseAmino;
            fromAminoMsg(object: _4.MsgConfirmLogicCallResponseAminoMsg): _4.MsgConfirmLogicCallResponse;
            fromProtoMsg(message: _4.MsgConfirmLogicCallResponseProtoMsg): _4.MsgConfirmLogicCallResponse;
            toProto(message: _4.MsgConfirmLogicCallResponse): Uint8Array;
            toProtoMsg(message: _4.MsgConfirmLogicCallResponse): _4.MsgConfirmLogicCallResponseProtoMsg;
        };
        MsgSendToCosmosClaim: {
            typeUrl: string;
            encode(message: _4.MsgSendToCosmosClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgSendToCosmosClaim;
            fromPartial(object: Partial<_4.MsgSendToCosmosClaim>): _4.MsgSendToCosmosClaim;
            fromAmino(object: _4.MsgSendToCosmosClaimAmino): _4.MsgSendToCosmosClaim;
            toAmino(message: _4.MsgSendToCosmosClaim): _4.MsgSendToCosmosClaimAmino;
            fromAminoMsg(object: _4.MsgSendToCosmosClaimAminoMsg): _4.MsgSendToCosmosClaim;
            fromProtoMsg(message: _4.MsgSendToCosmosClaimProtoMsg): _4.MsgSendToCosmosClaim;
            toProto(message: _4.MsgSendToCosmosClaim): Uint8Array;
            toProtoMsg(message: _4.MsgSendToCosmosClaim): _4.MsgSendToCosmosClaimProtoMsg;
        };
        MsgSendToCosmosClaimResponse: {
            typeUrl: string;
            encode(_: _4.MsgSendToCosmosClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgSendToCosmosClaimResponse;
            fromPartial(_: Partial<_4.MsgSendToCosmosClaimResponse>): _4.MsgSendToCosmosClaimResponse;
            fromAmino(_: _4.MsgSendToCosmosClaimResponseAmino): _4.MsgSendToCosmosClaimResponse;
            toAmino(_: _4.MsgSendToCosmosClaimResponse): _4.MsgSendToCosmosClaimResponseAmino;
            fromAminoMsg(object: _4.MsgSendToCosmosClaimResponseAminoMsg): _4.MsgSendToCosmosClaimResponse;
            fromProtoMsg(message: _4.MsgSendToCosmosClaimResponseProtoMsg): _4.MsgSendToCosmosClaimResponse;
            toProto(message: _4.MsgSendToCosmosClaimResponse): Uint8Array;
            toProtoMsg(message: _4.MsgSendToCosmosClaimResponse): _4.MsgSendToCosmosClaimResponseProtoMsg;
        };
        MsgExecuteIbcAutoForwards: {
            typeUrl: string;
            encode(message: _4.MsgExecuteIbcAutoForwards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgExecuteIbcAutoForwards;
            fromPartial(object: Partial<_4.MsgExecuteIbcAutoForwards>): _4.MsgExecuteIbcAutoForwards;
            fromAmino(object: _4.MsgExecuteIbcAutoForwardsAmino): _4.MsgExecuteIbcAutoForwards;
            toAmino(message: _4.MsgExecuteIbcAutoForwards): _4.MsgExecuteIbcAutoForwardsAmino;
            fromAminoMsg(object: _4.MsgExecuteIbcAutoForwardsAminoMsg): _4.MsgExecuteIbcAutoForwards;
            fromProtoMsg(message: _4.MsgExecuteIbcAutoForwardsProtoMsg): _4.MsgExecuteIbcAutoForwards;
            toProto(message: _4.MsgExecuteIbcAutoForwards): Uint8Array;
            toProtoMsg(message: _4.MsgExecuteIbcAutoForwards): _4.MsgExecuteIbcAutoForwardsProtoMsg;
        };
        MsgExecuteIbcAutoForwardsResponse: {
            typeUrl: string;
            encode(_: _4.MsgExecuteIbcAutoForwardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgExecuteIbcAutoForwardsResponse;
            fromPartial(_: Partial<_4.MsgExecuteIbcAutoForwardsResponse>): _4.MsgExecuteIbcAutoForwardsResponse;
            fromAmino(_: _4.MsgExecuteIbcAutoForwardsResponseAmino): _4.MsgExecuteIbcAutoForwardsResponse;
            toAmino(_: _4.MsgExecuteIbcAutoForwardsResponse): _4.MsgExecuteIbcAutoForwardsResponseAmino;
            fromAminoMsg(object: _4.MsgExecuteIbcAutoForwardsResponseAminoMsg): _4.MsgExecuteIbcAutoForwardsResponse;
            fromProtoMsg(message: _4.MsgExecuteIbcAutoForwardsResponseProtoMsg): _4.MsgExecuteIbcAutoForwardsResponse;
            toProto(message: _4.MsgExecuteIbcAutoForwardsResponse): Uint8Array;
            toProtoMsg(message: _4.MsgExecuteIbcAutoForwardsResponse): _4.MsgExecuteIbcAutoForwardsResponseProtoMsg;
        };
        MsgBatchSendToEthClaim: {
            typeUrl: string;
            encode(message: _4.MsgBatchSendToEthClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgBatchSendToEthClaim;
            fromPartial(object: Partial<_4.MsgBatchSendToEthClaim>): _4.MsgBatchSendToEthClaim;
            fromAmino(object: _4.MsgBatchSendToEthClaimAmino): _4.MsgBatchSendToEthClaim;
            toAmino(message: _4.MsgBatchSendToEthClaim): _4.MsgBatchSendToEthClaimAmino;
            fromAminoMsg(object: _4.MsgBatchSendToEthClaimAminoMsg): _4.MsgBatchSendToEthClaim;
            fromProtoMsg(message: _4.MsgBatchSendToEthClaimProtoMsg): _4.MsgBatchSendToEthClaim;
            toProto(message: _4.MsgBatchSendToEthClaim): Uint8Array;
            toProtoMsg(message: _4.MsgBatchSendToEthClaim): _4.MsgBatchSendToEthClaimProtoMsg;
        };
        MsgBatchSendToEthClaimResponse: {
            typeUrl: string;
            encode(_: _4.MsgBatchSendToEthClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgBatchSendToEthClaimResponse;
            fromPartial(_: Partial<_4.MsgBatchSendToEthClaimResponse>): _4.MsgBatchSendToEthClaimResponse;
            fromAmino(_: _4.MsgBatchSendToEthClaimResponseAmino): _4.MsgBatchSendToEthClaimResponse;
            toAmino(_: _4.MsgBatchSendToEthClaimResponse): _4.MsgBatchSendToEthClaimResponseAmino;
            fromAminoMsg(object: _4.MsgBatchSendToEthClaimResponseAminoMsg): _4.MsgBatchSendToEthClaimResponse;
            fromProtoMsg(message: _4.MsgBatchSendToEthClaimResponseProtoMsg): _4.MsgBatchSendToEthClaimResponse;
            toProto(message: _4.MsgBatchSendToEthClaimResponse): Uint8Array;
            toProtoMsg(message: _4.MsgBatchSendToEthClaimResponse): _4.MsgBatchSendToEthClaimResponseProtoMsg;
        };
        MsgERC20DeployedClaim: {
            typeUrl: string;
            encode(message: _4.MsgERC20DeployedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgERC20DeployedClaim;
            fromPartial(object: Partial<_4.MsgERC20DeployedClaim>): _4.MsgERC20DeployedClaim;
            fromAmino(object: _4.MsgERC20DeployedClaimAmino): _4.MsgERC20DeployedClaim;
            toAmino(message: _4.MsgERC20DeployedClaim): _4.MsgERC20DeployedClaimAmino;
            fromAminoMsg(object: _4.MsgERC20DeployedClaimAminoMsg): _4.MsgERC20DeployedClaim;
            fromProtoMsg(message: _4.MsgERC20DeployedClaimProtoMsg): _4.MsgERC20DeployedClaim;
            toProto(message: _4.MsgERC20DeployedClaim): Uint8Array;
            toProtoMsg(message: _4.MsgERC20DeployedClaim): _4.MsgERC20DeployedClaimProtoMsg;
        };
        MsgERC20DeployedClaimResponse: {
            typeUrl: string;
            encode(_: _4.MsgERC20DeployedClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgERC20DeployedClaimResponse;
            fromPartial(_: Partial<_4.MsgERC20DeployedClaimResponse>): _4.MsgERC20DeployedClaimResponse;
            fromAmino(_: _4.MsgERC20DeployedClaimResponseAmino): _4.MsgERC20DeployedClaimResponse;
            toAmino(_: _4.MsgERC20DeployedClaimResponse): _4.MsgERC20DeployedClaimResponseAmino;
            fromAminoMsg(object: _4.MsgERC20DeployedClaimResponseAminoMsg): _4.MsgERC20DeployedClaimResponse;
            fromProtoMsg(message: _4.MsgERC20DeployedClaimResponseProtoMsg): _4.MsgERC20DeployedClaimResponse;
            toProto(message: _4.MsgERC20DeployedClaimResponse): Uint8Array;
            toProtoMsg(message: _4.MsgERC20DeployedClaimResponse): _4.MsgERC20DeployedClaimResponseProtoMsg;
        };
        MsgLogicCallExecutedClaim: {
            typeUrl: string;
            encode(message: _4.MsgLogicCallExecutedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgLogicCallExecutedClaim;
            fromPartial(object: Partial<_4.MsgLogicCallExecutedClaim>): _4.MsgLogicCallExecutedClaim;
            fromAmino(object: _4.MsgLogicCallExecutedClaimAmino): _4.MsgLogicCallExecutedClaim;
            toAmino(message: _4.MsgLogicCallExecutedClaim): _4.MsgLogicCallExecutedClaimAmino;
            fromAminoMsg(object: _4.MsgLogicCallExecutedClaimAminoMsg): _4.MsgLogicCallExecutedClaim;
            fromProtoMsg(message: _4.MsgLogicCallExecutedClaimProtoMsg): _4.MsgLogicCallExecutedClaim;
            toProto(message: _4.MsgLogicCallExecutedClaim): Uint8Array;
            toProtoMsg(message: _4.MsgLogicCallExecutedClaim): _4.MsgLogicCallExecutedClaimProtoMsg;
        };
        MsgLogicCallExecutedClaimResponse: {
            typeUrl: string;
            encode(_: _4.MsgLogicCallExecutedClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgLogicCallExecutedClaimResponse;
            fromPartial(_: Partial<_4.MsgLogicCallExecutedClaimResponse>): _4.MsgLogicCallExecutedClaimResponse;
            fromAmino(_: _4.MsgLogicCallExecutedClaimResponseAmino): _4.MsgLogicCallExecutedClaimResponse;
            toAmino(_: _4.MsgLogicCallExecutedClaimResponse): _4.MsgLogicCallExecutedClaimResponseAmino;
            fromAminoMsg(object: _4.MsgLogicCallExecutedClaimResponseAminoMsg): _4.MsgLogicCallExecutedClaimResponse;
            fromProtoMsg(message: _4.MsgLogicCallExecutedClaimResponseProtoMsg): _4.MsgLogicCallExecutedClaimResponse;
            toProto(message: _4.MsgLogicCallExecutedClaimResponse): Uint8Array;
            toProtoMsg(message: _4.MsgLogicCallExecutedClaimResponse): _4.MsgLogicCallExecutedClaimResponseProtoMsg;
        };
        MsgValsetUpdatedClaim: {
            typeUrl: string;
            encode(message: _4.MsgValsetUpdatedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgValsetUpdatedClaim;
            fromPartial(object: Partial<_4.MsgValsetUpdatedClaim>): _4.MsgValsetUpdatedClaim;
            fromAmino(object: _4.MsgValsetUpdatedClaimAmino): _4.MsgValsetUpdatedClaim;
            toAmino(message: _4.MsgValsetUpdatedClaim): _4.MsgValsetUpdatedClaimAmino;
            fromAminoMsg(object: _4.MsgValsetUpdatedClaimAminoMsg): _4.MsgValsetUpdatedClaim;
            fromProtoMsg(message: _4.MsgValsetUpdatedClaimProtoMsg): _4.MsgValsetUpdatedClaim;
            toProto(message: _4.MsgValsetUpdatedClaim): Uint8Array;
            toProtoMsg(message: _4.MsgValsetUpdatedClaim): _4.MsgValsetUpdatedClaimProtoMsg;
        };
        MsgValsetUpdatedClaimResponse: {
            typeUrl: string;
            encode(_: _4.MsgValsetUpdatedClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgValsetUpdatedClaimResponse;
            fromPartial(_: Partial<_4.MsgValsetUpdatedClaimResponse>): _4.MsgValsetUpdatedClaimResponse;
            fromAmino(_: _4.MsgValsetUpdatedClaimResponseAmino): _4.MsgValsetUpdatedClaimResponse;
            toAmino(_: _4.MsgValsetUpdatedClaimResponse): _4.MsgValsetUpdatedClaimResponseAmino;
            fromAminoMsg(object: _4.MsgValsetUpdatedClaimResponseAminoMsg): _4.MsgValsetUpdatedClaimResponse;
            fromProtoMsg(message: _4.MsgValsetUpdatedClaimResponseProtoMsg): _4.MsgValsetUpdatedClaimResponse;
            toProto(message: _4.MsgValsetUpdatedClaimResponse): Uint8Array;
            toProtoMsg(message: _4.MsgValsetUpdatedClaimResponse): _4.MsgValsetUpdatedClaimResponseProtoMsg;
        };
        MsgCancelSendToEth: {
            typeUrl: string;
            encode(message: _4.MsgCancelSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgCancelSendToEth;
            fromPartial(object: Partial<_4.MsgCancelSendToEth>): _4.MsgCancelSendToEth;
            fromAmino(object: _4.MsgCancelSendToEthAmino): _4.MsgCancelSendToEth;
            toAmino(message: _4.MsgCancelSendToEth): _4.MsgCancelSendToEthAmino;
            fromAminoMsg(object: _4.MsgCancelSendToEthAminoMsg): _4.MsgCancelSendToEth;
            fromProtoMsg(message: _4.MsgCancelSendToEthProtoMsg): _4.MsgCancelSendToEth;
            toProto(message: _4.MsgCancelSendToEth): Uint8Array;
            toProtoMsg(message: _4.MsgCancelSendToEth): _4.MsgCancelSendToEthProtoMsg;
        };
        MsgCancelSendToEthResponse: {
            typeUrl: string;
            encode(_: _4.MsgCancelSendToEthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgCancelSendToEthResponse;
            fromPartial(_: Partial<_4.MsgCancelSendToEthResponse>): _4.MsgCancelSendToEthResponse;
            fromAmino(_: _4.MsgCancelSendToEthResponseAmino): _4.MsgCancelSendToEthResponse;
            toAmino(_: _4.MsgCancelSendToEthResponse): _4.MsgCancelSendToEthResponseAmino;
            fromAminoMsg(object: _4.MsgCancelSendToEthResponseAminoMsg): _4.MsgCancelSendToEthResponse;
            fromProtoMsg(message: _4.MsgCancelSendToEthResponseProtoMsg): _4.MsgCancelSendToEthResponse;
            toProto(message: _4.MsgCancelSendToEthResponse): Uint8Array;
            toProtoMsg(message: _4.MsgCancelSendToEthResponse): _4.MsgCancelSendToEthResponseProtoMsg;
        };
        MsgSubmitBadSignatureEvidence: {
            typeUrl: string;
            encode(message: _4.MsgSubmitBadSignatureEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgSubmitBadSignatureEvidence;
            fromPartial(object: Partial<_4.MsgSubmitBadSignatureEvidence>): _4.MsgSubmitBadSignatureEvidence;
            fromAmino(object: _4.MsgSubmitBadSignatureEvidenceAmino): _4.MsgSubmitBadSignatureEvidence;
            toAmino(message: _4.MsgSubmitBadSignatureEvidence): _4.MsgSubmitBadSignatureEvidenceAmino;
            fromAminoMsg(object: _4.MsgSubmitBadSignatureEvidenceAminoMsg): _4.MsgSubmitBadSignatureEvidence;
            fromProtoMsg(message: _4.MsgSubmitBadSignatureEvidenceProtoMsg): _4.MsgSubmitBadSignatureEvidence;
            toProto(message: _4.MsgSubmitBadSignatureEvidence): Uint8Array;
            toProtoMsg(message: _4.MsgSubmitBadSignatureEvidence): _4.MsgSubmitBadSignatureEvidenceProtoMsg;
        };
        MsgSubmitBadSignatureEvidenceResponse: {
            typeUrl: string;
            encode(_: _4.MsgSubmitBadSignatureEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgSubmitBadSignatureEvidenceResponse;
            fromPartial(_: Partial<_4.MsgSubmitBadSignatureEvidenceResponse>): _4.MsgSubmitBadSignatureEvidenceResponse;
            fromAmino(_: _4.MsgSubmitBadSignatureEvidenceResponseAmino): _4.MsgSubmitBadSignatureEvidenceResponse;
            toAmino(_: _4.MsgSubmitBadSignatureEvidenceResponse): _4.MsgSubmitBadSignatureEvidenceResponseAmino;
            fromAminoMsg(object: _4.MsgSubmitBadSignatureEvidenceResponseAminoMsg): _4.MsgSubmitBadSignatureEvidenceResponse;
            fromProtoMsg(message: _4.MsgSubmitBadSignatureEvidenceResponseProtoMsg): _4.MsgSubmitBadSignatureEvidenceResponse;
            toProto(message: _4.MsgSubmitBadSignatureEvidenceResponse): Uint8Array;
            toProtoMsg(message: _4.MsgSubmitBadSignatureEvidenceResponse): _4.MsgSubmitBadSignatureEvidenceResponseProtoMsg;
        };
        EventSetOperatorAddress: {
            typeUrl: string;
            encode(message: _4.EventSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventSetOperatorAddress;
            fromPartial(object: Partial<_4.EventSetOperatorAddress>): _4.EventSetOperatorAddress;
            fromAmino(object: _4.EventSetOperatorAddressAmino): _4.EventSetOperatorAddress;
            toAmino(message: _4.EventSetOperatorAddress): _4.EventSetOperatorAddressAmino;
            fromAminoMsg(object: _4.EventSetOperatorAddressAminoMsg): _4.EventSetOperatorAddress;
            fromProtoMsg(message: _4.EventSetOperatorAddressProtoMsg): _4.EventSetOperatorAddress;
            toProto(message: _4.EventSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _4.EventSetOperatorAddress): _4.EventSetOperatorAddressProtoMsg;
        };
        EventValsetConfirmKey: {
            typeUrl: string;
            encode(message: _4.EventValsetConfirmKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventValsetConfirmKey;
            fromPartial(object: Partial<_4.EventValsetConfirmKey>): _4.EventValsetConfirmKey;
            fromAmino(object: _4.EventValsetConfirmKeyAmino): _4.EventValsetConfirmKey;
            toAmino(message: _4.EventValsetConfirmKey): _4.EventValsetConfirmKeyAmino;
            fromAminoMsg(object: _4.EventValsetConfirmKeyAminoMsg): _4.EventValsetConfirmKey;
            fromProtoMsg(message: _4.EventValsetConfirmKeyProtoMsg): _4.EventValsetConfirmKey;
            toProto(message: _4.EventValsetConfirmKey): Uint8Array;
            toProtoMsg(message: _4.EventValsetConfirmKey): _4.EventValsetConfirmKeyProtoMsg;
        };
        EventBatchCreated: {
            typeUrl: string;
            encode(message: _4.EventBatchCreated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventBatchCreated;
            fromPartial(object: Partial<_4.EventBatchCreated>): _4.EventBatchCreated;
            fromAmino(object: _4.EventBatchCreatedAmino): _4.EventBatchCreated;
            toAmino(message: _4.EventBatchCreated): _4.EventBatchCreatedAmino;
            fromAminoMsg(object: _4.EventBatchCreatedAminoMsg): _4.EventBatchCreated;
            fromProtoMsg(message: _4.EventBatchCreatedProtoMsg): _4.EventBatchCreated;
            toProto(message: _4.EventBatchCreated): Uint8Array;
            toProtoMsg(message: _4.EventBatchCreated): _4.EventBatchCreatedProtoMsg;
        };
        EventBatchConfirmKey: {
            typeUrl: string;
            encode(message: _4.EventBatchConfirmKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventBatchConfirmKey;
            fromPartial(object: Partial<_4.EventBatchConfirmKey>): _4.EventBatchConfirmKey;
            fromAmino(object: _4.EventBatchConfirmKeyAmino): _4.EventBatchConfirmKey;
            toAmino(message: _4.EventBatchConfirmKey): _4.EventBatchConfirmKeyAmino;
            fromAminoMsg(object: _4.EventBatchConfirmKeyAminoMsg): _4.EventBatchConfirmKey;
            fromProtoMsg(message: _4.EventBatchConfirmKeyProtoMsg): _4.EventBatchConfirmKey;
            toProto(message: _4.EventBatchConfirmKey): Uint8Array;
            toProtoMsg(message: _4.EventBatchConfirmKey): _4.EventBatchConfirmKeyProtoMsg;
        };
        EventBatchSendToEthClaim: {
            typeUrl: string;
            encode(message: _4.EventBatchSendToEthClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventBatchSendToEthClaim;
            fromPartial(object: Partial<_4.EventBatchSendToEthClaim>): _4.EventBatchSendToEthClaim;
            fromAmino(object: _4.EventBatchSendToEthClaimAmino): _4.EventBatchSendToEthClaim;
            toAmino(message: _4.EventBatchSendToEthClaim): _4.EventBatchSendToEthClaimAmino;
            fromAminoMsg(object: _4.EventBatchSendToEthClaimAminoMsg): _4.EventBatchSendToEthClaim;
            fromProtoMsg(message: _4.EventBatchSendToEthClaimProtoMsg): _4.EventBatchSendToEthClaim;
            toProto(message: _4.EventBatchSendToEthClaim): Uint8Array;
            toProtoMsg(message: _4.EventBatchSendToEthClaim): _4.EventBatchSendToEthClaimProtoMsg;
        };
        EventClaim: {
            typeUrl: string;
            encode(message: _4.EventClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventClaim;
            fromPartial(object: Partial<_4.EventClaim>): _4.EventClaim;
            fromAmino(object: _4.EventClaimAmino): _4.EventClaim;
            toAmino(message: _4.EventClaim): _4.EventClaimAmino;
            fromAminoMsg(object: _4.EventClaimAminoMsg): _4.EventClaim;
            fromProtoMsg(message: _4.EventClaimProtoMsg): _4.EventClaim;
            toProto(message: _4.EventClaim): Uint8Array;
            toProtoMsg(message: _4.EventClaim): _4.EventClaimProtoMsg;
        };
        EventBadSignatureEvidence: {
            typeUrl: string;
            encode(message: _4.EventBadSignatureEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventBadSignatureEvidence;
            fromPartial(object: Partial<_4.EventBadSignatureEvidence>): _4.EventBadSignatureEvidence;
            fromAmino(object: _4.EventBadSignatureEvidenceAmino): _4.EventBadSignatureEvidence;
            toAmino(message: _4.EventBadSignatureEvidence): _4.EventBadSignatureEvidenceAmino;
            fromAminoMsg(object: _4.EventBadSignatureEvidenceAminoMsg): _4.EventBadSignatureEvidence;
            fromProtoMsg(message: _4.EventBadSignatureEvidenceProtoMsg): _4.EventBadSignatureEvidence;
            toProto(message: _4.EventBadSignatureEvidence): Uint8Array;
            toProtoMsg(message: _4.EventBadSignatureEvidence): _4.EventBadSignatureEvidenceProtoMsg;
        };
        EventERC20DeployedClaim: {
            typeUrl: string;
            encode(message: _4.EventERC20DeployedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventERC20DeployedClaim;
            fromPartial(object: Partial<_4.EventERC20DeployedClaim>): _4.EventERC20DeployedClaim;
            fromAmino(object: _4.EventERC20DeployedClaimAmino): _4.EventERC20DeployedClaim;
            toAmino(message: _4.EventERC20DeployedClaim): _4.EventERC20DeployedClaimAmino;
            fromAminoMsg(object: _4.EventERC20DeployedClaimAminoMsg): _4.EventERC20DeployedClaim;
            fromProtoMsg(message: _4.EventERC20DeployedClaimProtoMsg): _4.EventERC20DeployedClaim;
            toProto(message: _4.EventERC20DeployedClaim): Uint8Array;
            toProtoMsg(message: _4.EventERC20DeployedClaim): _4.EventERC20DeployedClaimProtoMsg;
        };
        EventValsetUpdatedClaim: {
            typeUrl: string;
            encode(message: _4.EventValsetUpdatedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventValsetUpdatedClaim;
            fromPartial(object: Partial<_4.EventValsetUpdatedClaim>): _4.EventValsetUpdatedClaim;
            fromAmino(object: _4.EventValsetUpdatedClaimAmino): _4.EventValsetUpdatedClaim;
            toAmino(message: _4.EventValsetUpdatedClaim): _4.EventValsetUpdatedClaimAmino;
            fromAminoMsg(object: _4.EventValsetUpdatedClaimAminoMsg): _4.EventValsetUpdatedClaim;
            fromProtoMsg(message: _4.EventValsetUpdatedClaimProtoMsg): _4.EventValsetUpdatedClaim;
            toProto(message: _4.EventValsetUpdatedClaim): Uint8Array;
            toProtoMsg(message: _4.EventValsetUpdatedClaim): _4.EventValsetUpdatedClaimProtoMsg;
        };
        EventMultisigUpdateRequest: {
            typeUrl: string;
            encode(message: _4.EventMultisigUpdateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventMultisigUpdateRequest;
            fromPartial(object: Partial<_4.EventMultisigUpdateRequest>): _4.EventMultisigUpdateRequest;
            fromAmino(object: _4.EventMultisigUpdateRequestAmino): _4.EventMultisigUpdateRequest;
            toAmino(message: _4.EventMultisigUpdateRequest): _4.EventMultisigUpdateRequestAmino;
            fromAminoMsg(object: _4.EventMultisigUpdateRequestAminoMsg): _4.EventMultisigUpdateRequest;
            fromProtoMsg(message: _4.EventMultisigUpdateRequestProtoMsg): _4.EventMultisigUpdateRequest;
            toProto(message: _4.EventMultisigUpdateRequest): Uint8Array;
            toProtoMsg(message: _4.EventMultisigUpdateRequest): _4.EventMultisigUpdateRequestProtoMsg;
        };
        EventOutgoingLogicCallCanceled: {
            typeUrl: string;
            encode(message: _4.EventOutgoingLogicCallCanceled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventOutgoingLogicCallCanceled;
            fromPartial(object: Partial<_4.EventOutgoingLogicCallCanceled>): _4.EventOutgoingLogicCallCanceled;
            fromAmino(object: _4.EventOutgoingLogicCallCanceledAmino): _4.EventOutgoingLogicCallCanceled;
            toAmino(message: _4.EventOutgoingLogicCallCanceled): _4.EventOutgoingLogicCallCanceledAmino;
            fromAminoMsg(object: _4.EventOutgoingLogicCallCanceledAminoMsg): _4.EventOutgoingLogicCallCanceled;
            fromProtoMsg(message: _4.EventOutgoingLogicCallCanceledProtoMsg): _4.EventOutgoingLogicCallCanceled;
            toProto(message: _4.EventOutgoingLogicCallCanceled): Uint8Array;
            toProtoMsg(message: _4.EventOutgoingLogicCallCanceled): _4.EventOutgoingLogicCallCanceledProtoMsg;
        };
        EventSignatureSlashing: {
            typeUrl: string;
            encode(message: _4.EventSignatureSlashing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventSignatureSlashing;
            fromPartial(object: Partial<_4.EventSignatureSlashing>): _4.EventSignatureSlashing;
            fromAmino(object: _4.EventSignatureSlashingAmino): _4.EventSignatureSlashing;
            toAmino(message: _4.EventSignatureSlashing): _4.EventSignatureSlashingAmino;
            fromAminoMsg(object: _4.EventSignatureSlashingAminoMsg): _4.EventSignatureSlashing;
            fromProtoMsg(message: _4.EventSignatureSlashingProtoMsg): _4.EventSignatureSlashing;
            toProto(message: _4.EventSignatureSlashing): Uint8Array;
            toProtoMsg(message: _4.EventSignatureSlashing): _4.EventSignatureSlashingProtoMsg;
        };
        EventOutgoingTxId: {
            typeUrl: string;
            encode(message: _4.EventOutgoingTxId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventOutgoingTxId;
            fromPartial(object: Partial<_4.EventOutgoingTxId>): _4.EventOutgoingTxId;
            fromAmino(object: _4.EventOutgoingTxIdAmino): _4.EventOutgoingTxId;
            toAmino(message: _4.EventOutgoingTxId): _4.EventOutgoingTxIdAmino;
            fromAminoMsg(object: _4.EventOutgoingTxIdAminoMsg): _4.EventOutgoingTxId;
            fromProtoMsg(message: _4.EventOutgoingTxIdProtoMsg): _4.EventOutgoingTxId;
            toProto(message: _4.EventOutgoingTxId): Uint8Array;
            toProtoMsg(message: _4.EventOutgoingTxId): _4.EventOutgoingTxIdProtoMsg;
        };
        EventSendToEthFeeCollected: {
            typeUrl: string;
            encode(message: _4.EventSendToEthFeeCollected, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.EventSendToEthFeeCollected;
            fromPartial(object: Partial<_4.EventSendToEthFeeCollected>): _4.EventSendToEthFeeCollected;
            fromAmino(object: _4.EventSendToEthFeeCollectedAmino): _4.EventSendToEthFeeCollected;
            toAmino(message: _4.EventSendToEthFeeCollected): _4.EventSendToEthFeeCollectedAmino;
            fromAminoMsg(object: _4.EventSendToEthFeeCollectedAminoMsg): _4.EventSendToEthFeeCollected;
            fromProtoMsg(message: _4.EventSendToEthFeeCollectedProtoMsg): _4.EventSendToEthFeeCollected;
            toProto(message: _4.EventSendToEthFeeCollected): Uint8Array;
            toProtoMsg(message: _4.EventSendToEthFeeCollected): _4.EventSendToEthFeeCollectedProtoMsg;
        };
        EthereumSigned_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
        EthereumSigned_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
        EthereumSigned_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        Params: {
            typeUrl: string;
            encode(message: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.Params;
            fromPartial(object: Partial<_3.Params>): _3.Params;
            fromAmino(object: _3.ParamsAmino): _3.Params;
            toAmino(message: _3.Params): _3.ParamsAmino;
            fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
            fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
            toProto(message: _3.Params): Uint8Array;
            toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _3.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.GenesisState;
            fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
            fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
            toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
            fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
            fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
            toProto(message: _3.GenesisState): Uint8Array;
            toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
        };
        GravityNonces: {
            typeUrl: string;
            encode(message: _3.GravityNonces, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.GravityNonces;
            fromPartial(object: Partial<_3.GravityNonces>): _3.GravityNonces;
            fromAmino(object: _3.GravityNoncesAmino): _3.GravityNonces;
            toAmino(message: _3.GravityNonces): _3.GravityNoncesAmino;
            fromAminoMsg(object: _3.GravityNoncesAminoMsg): _3.GravityNonces;
            fromProtoMsg(message: _3.GravityNoncesProtoMsg): _3.GravityNonces;
            toProto(message: _3.GravityNonces): Uint8Array;
            toProtoMsg(message: _3.GravityNonces): _3.GravityNoncesProtoMsg;
        };
        signTypeFromJSON(object: any): _2.SignType;
        signTypeToJSON(object: _2.SignType): string;
        SignType: typeof _2.SignType;
        SignTypeSDKType: typeof _2.SignType;
        SignTypeAmino: typeof _2.SignType;
        OutgoingTxBatch: {
            typeUrl: string;
            encode(message: _1.OutgoingTxBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.OutgoingTxBatch;
            fromPartial(object: Partial<_1.OutgoingTxBatch>): _1.OutgoingTxBatch;
            fromAmino(object: _1.OutgoingTxBatchAmino): _1.OutgoingTxBatch;
            toAmino(message: _1.OutgoingTxBatch): _1.OutgoingTxBatchAmino;
            fromAminoMsg(object: _1.OutgoingTxBatchAminoMsg): _1.OutgoingTxBatch;
            fromProtoMsg(message: _1.OutgoingTxBatchProtoMsg): _1.OutgoingTxBatch;
            toProto(message: _1.OutgoingTxBatch): Uint8Array;
            toProtoMsg(message: _1.OutgoingTxBatch): _1.OutgoingTxBatchProtoMsg;
        };
        OutgoingTransferTx: {
            typeUrl: string;
            encode(message: _1.OutgoingTransferTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.OutgoingTransferTx;
            fromPartial(object: Partial<_1.OutgoingTransferTx>): _1.OutgoingTransferTx;
            fromAmino(object: _1.OutgoingTransferTxAmino): _1.OutgoingTransferTx;
            toAmino(message: _1.OutgoingTransferTx): _1.OutgoingTransferTxAmino;
            fromAminoMsg(object: _1.OutgoingTransferTxAminoMsg): _1.OutgoingTransferTx;
            fromProtoMsg(message: _1.OutgoingTransferTxProtoMsg): _1.OutgoingTransferTx;
            toProto(message: _1.OutgoingTransferTx): Uint8Array;
            toProtoMsg(message: _1.OutgoingTransferTx): _1.OutgoingTransferTxProtoMsg;
        };
        OutgoingLogicCall: {
            typeUrl: string;
            encode(message: _1.OutgoingLogicCall, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.OutgoingLogicCall;
            fromPartial(object: Partial<_1.OutgoingLogicCall>): _1.OutgoingLogicCall;
            fromAmino(object: _1.OutgoingLogicCallAmino): _1.OutgoingLogicCall;
            toAmino(message: _1.OutgoingLogicCall): _1.OutgoingLogicCallAmino;
            fromAminoMsg(object: _1.OutgoingLogicCallAminoMsg): _1.OutgoingLogicCall;
            fromProtoMsg(message: _1.OutgoingLogicCallProtoMsg): _1.OutgoingLogicCall;
            toProto(message: _1.OutgoingLogicCall): Uint8Array;
            toProtoMsg(message: _1.OutgoingLogicCall): _1.OutgoingLogicCallProtoMsg;
        };
        EventOutgoingBatchCanceled: {
            typeUrl: string;
            encode(message: _1.EventOutgoingBatchCanceled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.EventOutgoingBatchCanceled;
            fromPartial(object: Partial<_1.EventOutgoingBatchCanceled>): _1.EventOutgoingBatchCanceled;
            fromAmino(object: _1.EventOutgoingBatchCanceledAmino): _1.EventOutgoingBatchCanceled;
            toAmino(message: _1.EventOutgoingBatchCanceled): _1.EventOutgoingBatchCanceledAmino;
            fromAminoMsg(object: _1.EventOutgoingBatchCanceledAminoMsg): _1.EventOutgoingBatchCanceled;
            fromProtoMsg(message: _1.EventOutgoingBatchCanceledProtoMsg): _1.EventOutgoingBatchCanceled;
            toProto(message: _1.EventOutgoingBatchCanceled): Uint8Array;
            toProtoMsg(message: _1.EventOutgoingBatchCanceled): _1.EventOutgoingBatchCanceledProtoMsg;
        };
        EventOutgoingBatch: {
            typeUrl: string;
            encode(message: _1.EventOutgoingBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.EventOutgoingBatch;
            fromPartial(object: Partial<_1.EventOutgoingBatch>): _1.EventOutgoingBatch;
            fromAmino(object: _1.EventOutgoingBatchAmino): _1.EventOutgoingBatch;
            toAmino(message: _1.EventOutgoingBatch): _1.EventOutgoingBatchAmino;
            fromAminoMsg(object: _1.EventOutgoingBatchAminoMsg): _1.EventOutgoingBatch;
            fromProtoMsg(message: _1.EventOutgoingBatchProtoMsg): _1.EventOutgoingBatch;
            toProto(message: _1.EventOutgoingBatch): Uint8Array;
            toProtoMsg(message: _1.EventOutgoingBatch): _1.EventOutgoingBatchProtoMsg;
        };
        claimTypeFromJSON(object: any): _0.ClaimType;
        claimTypeToJSON(object: _0.ClaimType): string;
        ClaimType: typeof _0.ClaimType;
        ClaimTypeSDKType: typeof _0.ClaimType;
        ClaimTypeAmino: typeof _0.ClaimType;
        Attestation: {
            typeUrl: string;
            encode(message: _0.Attestation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.Attestation;
            fromPartial(object: Partial<_0.Attestation>): _0.Attestation;
            fromAmino(object: _0.AttestationAmino): _0.Attestation;
            toAmino(message: _0.Attestation): _0.AttestationAmino;
            fromAminoMsg(object: _0.AttestationAminoMsg): _0.Attestation;
            fromProtoMsg(message: _0.AttestationProtoMsg): _0.Attestation;
            toProto(message: _0.Attestation): Uint8Array;
            toProtoMsg(message: _0.Attestation): _0.AttestationProtoMsg;
        };
        ERC20Token: {
            typeUrl: string;
            encode(message: _0.ERC20Token, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.ERC20Token;
            fromPartial(object: Partial<_0.ERC20Token>): _0.ERC20Token;
            fromAmino(object: _0.ERC20TokenAmino): _0.ERC20Token;
            toAmino(message: _0.ERC20Token): _0.ERC20TokenAmino;
            fromAminoMsg(object: _0.ERC20TokenAminoMsg): _0.ERC20Token;
            fromProtoMsg(message: _0.ERC20TokenProtoMsg): _0.ERC20Token;
            toProto(message: _0.ERC20Token): Uint8Array;
            toProtoMsg(message: _0.ERC20Token): _0.ERC20TokenProtoMsg;
        };
        EventObservation: {
            typeUrl: string;
            encode(message: _0.EventObservation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.EventObservation;
            fromPartial(object: Partial<_0.EventObservation>): _0.EventObservation;
            fromAmino(object: _0.EventObservationAmino): _0.EventObservation;
            toAmino(message: _0.EventObservation): _0.EventObservationAmino;
            fromAminoMsg(object: _0.EventObservationAminoMsg): _0.EventObservation;
            fromProtoMsg(message: _0.EventObservationProtoMsg): _0.EventObservation;
            toProto(message: _0.EventObservation): Uint8Array;
            toProtoMsg(message: _0.EventObservation): _0.EventObservationProtoMsg;
        };
        EventInvalidSendToCosmosReceiver: {
            typeUrl: string;
            encode(message: _0.EventInvalidSendToCosmosReceiver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.EventInvalidSendToCosmosReceiver;
            fromPartial(object: Partial<_0.EventInvalidSendToCosmosReceiver>): _0.EventInvalidSendToCosmosReceiver;
            fromAmino(object: _0.EventInvalidSendToCosmosReceiverAmino): _0.EventInvalidSendToCosmosReceiver;
            toAmino(message: _0.EventInvalidSendToCosmosReceiver): _0.EventInvalidSendToCosmosReceiverAmino;
            fromAminoMsg(object: _0.EventInvalidSendToCosmosReceiverAminoMsg): _0.EventInvalidSendToCosmosReceiver;
            fromProtoMsg(message: _0.EventInvalidSendToCosmosReceiverProtoMsg): _0.EventInvalidSendToCosmosReceiver;
            toProto(message: _0.EventInvalidSendToCosmosReceiver): Uint8Array;
            toProtoMsg(message: _0.EventInvalidSendToCosmosReceiver): _0.EventInvalidSendToCosmosReceiverProtoMsg;
        };
        EventSendToCosmos: {
            typeUrl: string;
            encode(message: _0.EventSendToCosmos, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.EventSendToCosmos;
            fromPartial(object: Partial<_0.EventSendToCosmos>): _0.EventSendToCosmos;
            fromAmino(object: _0.EventSendToCosmosAmino): _0.EventSendToCosmos;
            toAmino(message: _0.EventSendToCosmos): _0.EventSendToCosmosAmino;
            fromAminoMsg(object: _0.EventSendToCosmosAminoMsg): _0.EventSendToCosmos;
            fromProtoMsg(message: _0.EventSendToCosmosProtoMsg): _0.EventSendToCosmos;
            toProto(message: _0.EventSendToCosmos): Uint8Array;
            toProtoMsg(message: _0.EventSendToCosmos): _0.EventSendToCosmosProtoMsg;
        };
        EventSendToCosmosLocal: {
            typeUrl: string;
            encode(message: _0.EventSendToCosmosLocal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.EventSendToCosmosLocal;
            fromPartial(object: Partial<_0.EventSendToCosmosLocal>): _0.EventSendToCosmosLocal;
            fromAmino(object: _0.EventSendToCosmosLocalAmino): _0.EventSendToCosmosLocal;
            toAmino(message: _0.EventSendToCosmosLocal): _0.EventSendToCosmosLocalAmino;
            fromAminoMsg(object: _0.EventSendToCosmosLocalAminoMsg): _0.EventSendToCosmosLocal;
            fromProtoMsg(message: _0.EventSendToCosmosLocalProtoMsg): _0.EventSendToCosmosLocal;
            toProto(message: _0.EventSendToCosmosLocal): Uint8Array;
            toProtoMsg(message: _0.EventSendToCosmosLocal): _0.EventSendToCosmosLocalProtoMsg;
        };
        EventSendToCosmosPendingIbcAutoForward: {
            typeUrl: string;
            encode(message: _0.EventSendToCosmosPendingIbcAutoForward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.EventSendToCosmosPendingIbcAutoForward;
            fromPartial(object: Partial<_0.EventSendToCosmosPendingIbcAutoForward>): _0.EventSendToCosmosPendingIbcAutoForward;
            fromAmino(object: _0.EventSendToCosmosPendingIbcAutoForwardAmino): _0.EventSendToCosmosPendingIbcAutoForward;
            toAmino(message: _0.EventSendToCosmosPendingIbcAutoForward): _0.EventSendToCosmosPendingIbcAutoForwardAmino;
            fromAminoMsg(object: _0.EventSendToCosmosPendingIbcAutoForwardAminoMsg): _0.EventSendToCosmosPendingIbcAutoForward;
            fromProtoMsg(message: _0.EventSendToCosmosPendingIbcAutoForwardProtoMsg): _0.EventSendToCosmosPendingIbcAutoForward;
            toProto(message: _0.EventSendToCosmosPendingIbcAutoForward): Uint8Array;
            toProtoMsg(message: _0.EventSendToCosmosPendingIbcAutoForward): _0.EventSendToCosmosPendingIbcAutoForwardProtoMsg;
        };
        EventSendToCosmosExecutedIbcAutoForward: {
            typeUrl: string;
            encode(message: _0.EventSendToCosmosExecutedIbcAutoForward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.EventSendToCosmosExecutedIbcAutoForward;
            fromPartial(object: Partial<_0.EventSendToCosmosExecutedIbcAutoForward>): _0.EventSendToCosmosExecutedIbcAutoForward;
            fromAmino(object: _0.EventSendToCosmosExecutedIbcAutoForwardAmino): _0.EventSendToCosmosExecutedIbcAutoForward;
            toAmino(message: _0.EventSendToCosmosExecutedIbcAutoForward): _0.EventSendToCosmosExecutedIbcAutoForwardAmino;
            fromAminoMsg(object: _0.EventSendToCosmosExecutedIbcAutoForwardAminoMsg): _0.EventSendToCosmosExecutedIbcAutoForward;
            fromProtoMsg(message: _0.EventSendToCosmosExecutedIbcAutoForwardProtoMsg): _0.EventSendToCosmosExecutedIbcAutoForward;
            toProto(message: _0.EventSendToCosmosExecutedIbcAutoForward): Uint8Array;
            toProtoMsg(message: _0.EventSendToCosmosExecutedIbcAutoForward): _0.EventSendToCosmosExecutedIbcAutoForwardProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            gravity: {
                v1: _124.MsgClientImpl;
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            gravity: {
                v1: {
                    params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                    currentValset(request?: _6.QueryCurrentValsetRequest): Promise<_6.QueryCurrentValsetResponse>;
                    valsetRequest(request: _6.QueryValsetRequestRequest): Promise<_6.QueryValsetRequestResponse>;
                    valsetConfirm(request: _6.QueryValsetConfirmRequest): Promise<_6.QueryValsetConfirmResponse>;
                    valsetConfirmsByNonce(request: _6.QueryValsetConfirmsByNonceRequest): Promise<_6.QueryValsetConfirmsByNonceResponse>;
                    lastValsetRequests(request?: _6.QueryLastValsetRequestsRequest): Promise<_6.QueryLastValsetRequestsResponse>;
                    lastPendingValsetRequestByAddr(request: _6.QueryLastPendingValsetRequestByAddrRequest): Promise<_6.QueryLastPendingValsetRequestByAddrResponse>;
                    lastPendingBatchRequestByAddr(request: _6.QueryLastPendingBatchRequestByAddrRequest): Promise<_6.QueryLastPendingBatchRequestByAddrResponse>;
                    lastPendingLogicCallByAddr(request: _6.QueryLastPendingLogicCallByAddrRequest): Promise<_6.QueryLastPendingLogicCallByAddrResponse>;
                    lastEventNonceByAddr(request: _6.QueryLastEventNonceByAddrRequest): Promise<_6.QueryLastEventNonceByAddrResponse>;
                    batchFees(request?: _6.QueryBatchFeeRequest): Promise<_6.QueryBatchFeeResponse>;
                    outgoingTxBatches(request?: _6.QueryOutgoingTxBatchesRequest): Promise<_6.QueryOutgoingTxBatchesResponse>;
                    outgoingLogicCalls(request?: _6.QueryOutgoingLogicCallsRequest): Promise<_6.QueryOutgoingLogicCallsResponse>;
                    batchRequestByNonce(request: _6.QueryBatchRequestByNonceRequest): Promise<_6.QueryBatchRequestByNonceResponse>;
                    batchConfirms(request: _6.QueryBatchConfirmsRequest): Promise<_6.QueryBatchConfirmsResponse>;
                    logicConfirms(request: _6.QueryLogicConfirmsRequest): Promise<_6.QueryLogicConfirmsResponse>;
                    eRC20ToDenom(request: _6.QueryERC20ToDenomRequest): Promise<_6.QueryERC20ToDenomResponse>;
                    denomToERC20(request: _6.QueryDenomToERC20Request): Promise<_6.QueryDenomToERC20Response>;
                    getLastObservedEthBlock(request: _6.QueryLastObservedEthBlockRequest): Promise<_6.QueryLastObservedEthBlockResponse>;
                    getLastObservedEthNonce(request: _6.QueryLastObservedEthNonceRequest): Promise<_6.QueryLastObservedEthNonceResponse>;
                    getAttestations(request: _6.QueryAttestationsRequest): Promise<_6.QueryAttestationsResponse>;
                    getDelegateKeyByValidator(request: _6.QueryDelegateKeysByValidatorAddress): Promise<_6.QueryDelegateKeysByValidatorAddressResponse>;
                    getDelegateKeyByEth(request: _6.QueryDelegateKeysByEthAddress): Promise<_6.QueryDelegateKeysByEthAddressResponse>;
                    getDelegateKeyByOrchestrator(request: _6.QueryDelegateKeysByOrchestratorAddress): Promise<_6.QueryDelegateKeysByOrchestratorAddressResponse>;
                    getPendingSendToEth(request: _6.QueryPendingSendToEth): Promise<_6.QueryPendingSendToEthResponse>;
                    getPendingIbcAutoForwards(request: _6.QueryPendingIbcAutoForwards): Promise<_6.QueryPendingIbcAutoForwardsResponse>;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            gravity: {
                v1: _122.LCDQueryClient;
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
