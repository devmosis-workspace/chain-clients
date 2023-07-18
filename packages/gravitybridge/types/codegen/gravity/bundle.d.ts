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
                toAmino: ({ nonce, orchestrator, ethAddress, signature }: _4.MsgValsetConfirm) => {
                    nonce: string;
                    orchestrator: string;
                    eth_address: string;
                    signature: string;
                };
                fromAmino: ({ nonce, orchestrator, eth_address, signature }: {
                    nonce: string;
                    orchestrator: string;
                    eth_address: string;
                    signature: string;
                }) => _4.MsgValsetConfirm;
            };
            "/gravity.v1.MsgSendToEth": {
                aminoType: string;
                toAmino: ({ sender, ethDest, amount, bridgeFee, chainFee }: _4.MsgSendToEth) => {
                    sender: string;
                    eth_dest: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                    bridge_fee: {
                        denom: string;
                        amount: string;
                    };
                    chain_fee: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ sender, eth_dest, amount, bridge_fee, chain_fee }: {
                    sender: string;
                    eth_dest: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                    bridge_fee: {
                        denom: string;
                        amount: string;
                    };
                    chain_fee: {
                        denom: string;
                        amount: string;
                    };
                }) => _4.MsgSendToEth;
            };
            "/gravity.v1.MsgRequestBatch": {
                aminoType: string;
                toAmino: ({ sender, denom }: _4.MsgRequestBatch) => {
                    sender: string;
                    denom: string;
                };
                fromAmino: ({ sender, denom }: {
                    sender: string;
                    denom: string;
                }) => _4.MsgRequestBatch;
            };
            "/gravity.v1.MsgConfirmBatch": {
                aminoType: string;
                toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: _4.MsgConfirmBatch) => {
                    nonce: string;
                    token_contract: string;
                    eth_signer: string;
                    orchestrator: string;
                    signature: string;
                };
                fromAmino: ({ nonce, token_contract, eth_signer, orchestrator, signature }: {
                    nonce: string;
                    token_contract: string;
                    eth_signer: string;
                    orchestrator: string;
                    signature: string;
                }) => _4.MsgConfirmBatch;
            };
            "/gravity.v1.MsgConfirmLogicCall": {
                aminoType: string;
                toAmino: ({ invalidationId, invalidationNonce, ethSigner, orchestrator, signature }: _4.MsgConfirmLogicCall) => {
                    invalidation_id: string;
                    invalidation_nonce: string;
                    eth_signer: string;
                    orchestrator: string;
                    signature: string;
                };
                fromAmino: ({ invalidation_id, invalidation_nonce, eth_signer, orchestrator, signature }: {
                    invalidation_id: string;
                    invalidation_nonce: string;
                    eth_signer: string;
                    orchestrator: string;
                    signature: string;
                }) => _4.MsgConfirmLogicCall;
            };
            "/gravity.v1.MsgSendToCosmosClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, ethBlockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator }: _4.MsgSendToCosmosClaim) => {
                    event_nonce: string;
                    eth_block_height: string;
                    token_contract: string;
                    amount: string;
                    ethereum_sender: string;
                    cosmos_receiver: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, eth_block_height, token_contract, amount, ethereum_sender, cosmos_receiver, orchestrator }: {
                    event_nonce: string;
                    eth_block_height: string;
                    token_contract: string;
                    amount: string;
                    ethereum_sender: string;
                    cosmos_receiver: string;
                    orchestrator: string;
                }) => _4.MsgSendToCosmosClaim;
            };
            "/gravity.v1.MsgExecuteIbcAutoForwards": {
                aminoType: string;
                toAmino: ({ forwardsToClear, executor }: _4.MsgExecuteIbcAutoForwards) => {
                    forwards_to_clear: string;
                    executor: string;
                };
                fromAmino: ({ forwards_to_clear, executor }: {
                    forwards_to_clear: string;
                    executor: string;
                }) => _4.MsgExecuteIbcAutoForwards;
            };
            "/gravity.v1.MsgBatchSendToEthClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, ethBlockHeight, batchNonce, tokenContract, orchestrator }: _4.MsgBatchSendToEthClaim) => {
                    event_nonce: string;
                    eth_block_height: string;
                    batch_nonce: string;
                    token_contract: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, eth_block_height, batch_nonce, token_contract, orchestrator }: {
                    event_nonce: string;
                    eth_block_height: string;
                    batch_nonce: string;
                    token_contract: string;
                    orchestrator: string;
                }) => _4.MsgBatchSendToEthClaim;
            };
            "/gravity.v1.MsgValsetUpdatedClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, valsetNonce, ethBlockHeight, members, rewardAmount, rewardToken, orchestrator }: _4.MsgValsetUpdatedClaim) => {
                    event_nonce: string;
                    valset_nonce: string;
                    eth_block_height: string;
                    members: {
                        power: string;
                        ethereum_address: string;
                    }[];
                    reward_amount: string;
                    reward_token: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, valset_nonce, eth_block_height, members, reward_amount, reward_token, orchestrator }: {
                    event_nonce: string;
                    valset_nonce: string;
                    eth_block_height: string;
                    members: {
                        power: string;
                        ethereum_address: string;
                    }[];
                    reward_amount: string;
                    reward_token: string;
                    orchestrator: string;
                }) => _4.MsgValsetUpdatedClaim;
            };
            "/gravity.v1.MsgERC20DeployedClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, ethBlockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: _4.MsgERC20DeployedClaim) => {
                    event_nonce: string;
                    eth_block_height: string;
                    cosmos_denom: string;
                    token_contract: string;
                    name: string;
                    symbol: string;
                    decimals: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, eth_block_height, cosmos_denom, token_contract, name, symbol, decimals, orchestrator }: {
                    event_nonce: string;
                    eth_block_height: string;
                    cosmos_denom: string;
                    token_contract: string;
                    name: string;
                    symbol: string;
                    decimals: string;
                    orchestrator: string;
                }) => _4.MsgERC20DeployedClaim;
            };
            "/gravity.v1.MsgLogicCallExecutedClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, ethBlockHeight, invalidationId, invalidationNonce, orchestrator }: _4.MsgLogicCallExecutedClaim) => {
                    event_nonce: string;
                    eth_block_height: string;
                    invalidation_id: Uint8Array;
                    invalidation_nonce: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, eth_block_height, invalidation_id, invalidation_nonce, orchestrator }: {
                    event_nonce: string;
                    eth_block_height: string;
                    invalidation_id: Uint8Array;
                    invalidation_nonce: string;
                    orchestrator: string;
                }) => _4.MsgLogicCallExecutedClaim;
            };
            "/gravity.v1.MsgSetOrchestratorAddress": {
                aminoType: string;
                toAmino: ({ validator, orchestrator, ethAddress }: _4.MsgSetOrchestratorAddress) => {
                    validator: string;
                    orchestrator: string;
                    eth_address: string;
                };
                fromAmino: ({ validator, orchestrator, eth_address }: {
                    validator: string;
                    orchestrator: string;
                    eth_address: string;
                }) => _4.MsgSetOrchestratorAddress;
            };
            "/gravity.v1.MsgCancelSendToEth": {
                aminoType: string;
                toAmino: ({ transactionId, sender }: _4.MsgCancelSendToEth) => {
                    transaction_id: string;
                    sender: string;
                };
                fromAmino: ({ transaction_id, sender }: {
                    transaction_id: string;
                    sender: string;
                }) => _4.MsgCancelSendToEth;
            };
            "/gravity.v1.MsgSubmitBadSignatureEvidence": {
                aminoType: string;
                toAmino: ({ subject, signature, sender }: _4.MsgSubmitBadSignatureEvidence) => {
                    subject: {
                        type_url: string;
                        value: Uint8Array;
                    };
                    signature: string;
                    sender: string;
                };
                fromAmino: ({ subject, signature, sender }: {
                    subject: {
                        type_url: string;
                        value: Uint8Array;
                    };
                    signature: string;
                    sender: string;
                }) => _4.MsgSubmitBadSignatureEvidence;
            };
        };
        BridgeValidator: {
            encode(message: _7.BridgeValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.BridgeValidator;
            fromPartial(object: Partial<_7.BridgeValidator>): _7.BridgeValidator;
        };
        Valset: {
            encode(message: _7.Valset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.Valset;
            fromPartial(object: Partial<_7.Valset>): _7.Valset;
        };
        LastObservedEthereumBlockHeight: {
            encode(message: _7.LastObservedEthereumBlockHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.LastObservedEthereumBlockHeight;
            fromPartial(object: Partial<_7.LastObservedEthereumBlockHeight>): _7.LastObservedEthereumBlockHeight;
        };
        ERC20ToDenom: {
            encode(message: _7.ERC20ToDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.ERC20ToDenom;
            fromPartial(object: Partial<_7.ERC20ToDenom>): _7.ERC20ToDenom;
        };
        UnhaltBridgeProposal: {
            encode(message: _7.UnhaltBridgeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.UnhaltBridgeProposal;
            fromPartial(object: Partial<_7.UnhaltBridgeProposal>): _7.UnhaltBridgeProposal;
        };
        AirdropProposal: {
            encode(message: _7.AirdropProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.AirdropProposal;
            fromPartial(object: Partial<_7.AirdropProposal>): _7.AirdropProposal;
        };
        IBCMetadataProposal: {
            encode(message: _7.IBCMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.IBCMetadataProposal;
            fromPartial(object: Partial<_7.IBCMetadataProposal>): _7.IBCMetadataProposal;
        };
        PendingIbcAutoForward: {
            encode(message: _7.PendingIbcAutoForward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.PendingIbcAutoForward;
            fromPartial(object: Partial<_7.PendingIbcAutoForward>): _7.PendingIbcAutoForward;
        };
        QueryParamsRequest: {
            encode(_: _6.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryParamsRequest;
            fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _6.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryParamsResponse;
            fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
        };
        QueryCurrentValsetRequest: {
            encode(_: _6.QueryCurrentValsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryCurrentValsetRequest;
            fromPartial(_: Partial<_6.QueryCurrentValsetRequest>): _6.QueryCurrentValsetRequest;
        };
        QueryCurrentValsetResponse: {
            encode(message: _6.QueryCurrentValsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryCurrentValsetResponse;
            fromPartial(object: Partial<_6.QueryCurrentValsetResponse>): _6.QueryCurrentValsetResponse;
        };
        QueryValsetRequestRequest: {
            encode(message: _6.QueryValsetRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryValsetRequestRequest;
            fromPartial(object: Partial<_6.QueryValsetRequestRequest>): _6.QueryValsetRequestRequest;
        };
        QueryValsetRequestResponse: {
            encode(message: _6.QueryValsetRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryValsetRequestResponse;
            fromPartial(object: Partial<_6.QueryValsetRequestResponse>): _6.QueryValsetRequestResponse;
        };
        QueryValsetConfirmRequest: {
            encode(message: _6.QueryValsetConfirmRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryValsetConfirmRequest;
            fromPartial(object: Partial<_6.QueryValsetConfirmRequest>): _6.QueryValsetConfirmRequest;
        };
        QueryValsetConfirmResponse: {
            encode(message: _6.QueryValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryValsetConfirmResponse;
            fromPartial(object: Partial<_6.QueryValsetConfirmResponse>): _6.QueryValsetConfirmResponse;
        };
        QueryValsetConfirmsByNonceRequest: {
            encode(message: _6.QueryValsetConfirmsByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryValsetConfirmsByNonceRequest;
            fromPartial(object: Partial<_6.QueryValsetConfirmsByNonceRequest>): _6.QueryValsetConfirmsByNonceRequest;
        };
        QueryValsetConfirmsByNonceResponse: {
            encode(message: _6.QueryValsetConfirmsByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryValsetConfirmsByNonceResponse;
            fromPartial(object: Partial<_6.QueryValsetConfirmsByNonceResponse>): _6.QueryValsetConfirmsByNonceResponse;
        };
        QueryLastValsetRequestsRequest: {
            encode(_: _6.QueryLastValsetRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryLastValsetRequestsRequest;
            fromPartial(_: Partial<_6.QueryLastValsetRequestsRequest>): _6.QueryLastValsetRequestsRequest;
        };
        QueryLastValsetRequestsResponse: {
            encode(message: _6.QueryLastValsetRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastValsetRequestsResponse;
            fromPartial(object: Partial<_6.QueryLastValsetRequestsResponse>): _6.QueryLastValsetRequestsResponse;
        };
        QueryLastPendingValsetRequestByAddrRequest: {
            encode(message: _6.QueryLastPendingValsetRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastPendingValsetRequestByAddrRequest;
            fromPartial(object: Partial<_6.QueryLastPendingValsetRequestByAddrRequest>): _6.QueryLastPendingValsetRequestByAddrRequest;
        };
        QueryLastPendingValsetRequestByAddrResponse: {
            encode(message: _6.QueryLastPendingValsetRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastPendingValsetRequestByAddrResponse;
            fromPartial(object: Partial<_6.QueryLastPendingValsetRequestByAddrResponse>): _6.QueryLastPendingValsetRequestByAddrResponse;
        };
        QueryBatchFeeRequest: {
            encode(_: _6.QueryBatchFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryBatchFeeRequest;
            fromPartial(_: Partial<_6.QueryBatchFeeRequest>): _6.QueryBatchFeeRequest;
        };
        QueryBatchFeeResponse: {
            encode(message: _6.QueryBatchFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryBatchFeeResponse;
            fromPartial(object: Partial<_6.QueryBatchFeeResponse>): _6.QueryBatchFeeResponse;
        };
        QueryLastPendingBatchRequestByAddrRequest: {
            encode(message: _6.QueryLastPendingBatchRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastPendingBatchRequestByAddrRequest;
            fromPartial(object: Partial<_6.QueryLastPendingBatchRequestByAddrRequest>): _6.QueryLastPendingBatchRequestByAddrRequest;
        };
        QueryLastPendingBatchRequestByAddrResponse: {
            encode(message: _6.QueryLastPendingBatchRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastPendingBatchRequestByAddrResponse;
            fromPartial(object: Partial<_6.QueryLastPendingBatchRequestByAddrResponse>): _6.QueryLastPendingBatchRequestByAddrResponse;
        };
        QueryLastPendingLogicCallByAddrRequest: {
            encode(message: _6.QueryLastPendingLogicCallByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastPendingLogicCallByAddrRequest;
            fromPartial(object: Partial<_6.QueryLastPendingLogicCallByAddrRequest>): _6.QueryLastPendingLogicCallByAddrRequest;
        };
        QueryLastPendingLogicCallByAddrResponse: {
            encode(message: _6.QueryLastPendingLogicCallByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastPendingLogicCallByAddrResponse;
            fromPartial(object: Partial<_6.QueryLastPendingLogicCallByAddrResponse>): _6.QueryLastPendingLogicCallByAddrResponse;
        };
        QueryOutgoingTxBatchesRequest: {
            encode(_: _6.QueryOutgoingTxBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryOutgoingTxBatchesRequest;
            fromPartial(_: Partial<_6.QueryOutgoingTxBatchesRequest>): _6.QueryOutgoingTxBatchesRequest;
        };
        QueryOutgoingTxBatchesResponse: {
            encode(message: _6.QueryOutgoingTxBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryOutgoingTxBatchesResponse;
            fromPartial(object: Partial<_6.QueryOutgoingTxBatchesResponse>): _6.QueryOutgoingTxBatchesResponse;
        };
        QueryOutgoingLogicCallsRequest: {
            encode(_: _6.QueryOutgoingLogicCallsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryOutgoingLogicCallsRequest;
            fromPartial(_: Partial<_6.QueryOutgoingLogicCallsRequest>): _6.QueryOutgoingLogicCallsRequest;
        };
        QueryOutgoingLogicCallsResponse: {
            encode(message: _6.QueryOutgoingLogicCallsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryOutgoingLogicCallsResponse;
            fromPartial(object: Partial<_6.QueryOutgoingLogicCallsResponse>): _6.QueryOutgoingLogicCallsResponse;
        };
        QueryBatchRequestByNonceRequest: {
            encode(message: _6.QueryBatchRequestByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryBatchRequestByNonceRequest;
            fromPartial(object: Partial<_6.QueryBatchRequestByNonceRequest>): _6.QueryBatchRequestByNonceRequest;
        };
        QueryBatchRequestByNonceResponse: {
            encode(message: _6.QueryBatchRequestByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryBatchRequestByNonceResponse;
            fromPartial(object: Partial<_6.QueryBatchRequestByNonceResponse>): _6.QueryBatchRequestByNonceResponse;
        };
        QueryBatchConfirmsRequest: {
            encode(message: _6.QueryBatchConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryBatchConfirmsRequest;
            fromPartial(object: Partial<_6.QueryBatchConfirmsRequest>): _6.QueryBatchConfirmsRequest;
        };
        QueryBatchConfirmsResponse: {
            encode(message: _6.QueryBatchConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryBatchConfirmsResponse;
            fromPartial(object: Partial<_6.QueryBatchConfirmsResponse>): _6.QueryBatchConfirmsResponse;
        };
        QueryLogicConfirmsRequest: {
            encode(message: _6.QueryLogicConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLogicConfirmsRequest;
            fromPartial(object: Partial<_6.QueryLogicConfirmsRequest>): _6.QueryLogicConfirmsRequest;
        };
        QueryLogicConfirmsResponse: {
            encode(message: _6.QueryLogicConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLogicConfirmsResponse;
            fromPartial(object: Partial<_6.QueryLogicConfirmsResponse>): _6.QueryLogicConfirmsResponse;
        };
        QueryLastEventNonceByAddrRequest: {
            encode(message: _6.QueryLastEventNonceByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastEventNonceByAddrRequest;
            fromPartial(object: Partial<_6.QueryLastEventNonceByAddrRequest>): _6.QueryLastEventNonceByAddrRequest;
        };
        QueryLastEventNonceByAddrResponse: {
            encode(message: _6.QueryLastEventNonceByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastEventNonceByAddrResponse;
            fromPartial(object: Partial<_6.QueryLastEventNonceByAddrResponse>): _6.QueryLastEventNonceByAddrResponse;
        };
        QueryERC20ToDenomRequest: {
            encode(message: _6.QueryERC20ToDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryERC20ToDenomRequest;
            fromPartial(object: Partial<_6.QueryERC20ToDenomRequest>): _6.QueryERC20ToDenomRequest;
        };
        QueryERC20ToDenomResponse: {
            encode(message: _6.QueryERC20ToDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryERC20ToDenomResponse;
            fromPartial(object: Partial<_6.QueryERC20ToDenomResponse>): _6.QueryERC20ToDenomResponse;
        };
        QueryDenomToERC20Request: {
            encode(message: _6.QueryDenomToERC20Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDenomToERC20Request;
            fromPartial(object: Partial<_6.QueryDenomToERC20Request>): _6.QueryDenomToERC20Request;
        };
        QueryDenomToERC20Response: {
            encode(message: _6.QueryDenomToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDenomToERC20Response;
            fromPartial(object: Partial<_6.QueryDenomToERC20Response>): _6.QueryDenomToERC20Response;
        };
        QueryLastObservedEthBlockRequest: {
            encode(message: _6.QueryLastObservedEthBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastObservedEthBlockRequest;
            fromPartial(object: Partial<_6.QueryLastObservedEthBlockRequest>): _6.QueryLastObservedEthBlockRequest;
        };
        QueryLastObservedEthBlockResponse: {
            encode(message: _6.QueryLastObservedEthBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastObservedEthBlockResponse;
            fromPartial(object: Partial<_6.QueryLastObservedEthBlockResponse>): _6.QueryLastObservedEthBlockResponse;
        };
        QueryLastObservedEthNonceRequest: {
            encode(message: _6.QueryLastObservedEthNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastObservedEthNonceRequest;
            fromPartial(object: Partial<_6.QueryLastObservedEthNonceRequest>): _6.QueryLastObservedEthNonceRequest;
        };
        QueryLastObservedEthNonceResponse: {
            encode(message: _6.QueryLastObservedEthNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryLastObservedEthNonceResponse;
            fromPartial(object: Partial<_6.QueryLastObservedEthNonceResponse>): _6.QueryLastObservedEthNonceResponse;
        };
        QueryAttestationsRequest: {
            encode(message: _6.QueryAttestationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryAttestationsRequest;
            fromPartial(object: Partial<_6.QueryAttestationsRequest>): _6.QueryAttestationsRequest;
        };
        QueryAttestationsResponse: {
            encode(message: _6.QueryAttestationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryAttestationsResponse;
            fromPartial(object: Partial<_6.QueryAttestationsResponse>): _6.QueryAttestationsResponse;
        };
        QueryDelegateKeysByValidatorAddress: {
            encode(message: _6.QueryDelegateKeysByValidatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDelegateKeysByValidatorAddress;
            fromPartial(object: Partial<_6.QueryDelegateKeysByValidatorAddress>): _6.QueryDelegateKeysByValidatorAddress;
        };
        QueryDelegateKeysByValidatorAddressResponse: {
            encode(message: _6.QueryDelegateKeysByValidatorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDelegateKeysByValidatorAddressResponse;
            fromPartial(object: Partial<_6.QueryDelegateKeysByValidatorAddressResponse>): _6.QueryDelegateKeysByValidatorAddressResponse;
        };
        QueryDelegateKeysByEthAddress: {
            encode(message: _6.QueryDelegateKeysByEthAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDelegateKeysByEthAddress;
            fromPartial(object: Partial<_6.QueryDelegateKeysByEthAddress>): _6.QueryDelegateKeysByEthAddress;
        };
        QueryDelegateKeysByEthAddressResponse: {
            encode(message: _6.QueryDelegateKeysByEthAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDelegateKeysByEthAddressResponse;
            fromPartial(object: Partial<_6.QueryDelegateKeysByEthAddressResponse>): _6.QueryDelegateKeysByEthAddressResponse;
        };
        QueryDelegateKeysByOrchestratorAddress: {
            encode(message: _6.QueryDelegateKeysByOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDelegateKeysByOrchestratorAddress;
            fromPartial(object: Partial<_6.QueryDelegateKeysByOrchestratorAddress>): _6.QueryDelegateKeysByOrchestratorAddress;
        };
        QueryDelegateKeysByOrchestratorAddressResponse: {
            encode(message: _6.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDelegateKeysByOrchestratorAddressResponse;
            fromPartial(object: Partial<_6.QueryDelegateKeysByOrchestratorAddressResponse>): _6.QueryDelegateKeysByOrchestratorAddressResponse;
        };
        QueryPendingSendToEth: {
            encode(message: _6.QueryPendingSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryPendingSendToEth;
            fromPartial(object: Partial<_6.QueryPendingSendToEth>): _6.QueryPendingSendToEth;
        };
        QueryPendingSendToEthResponse: {
            encode(message: _6.QueryPendingSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryPendingSendToEthResponse;
            fromPartial(object: Partial<_6.QueryPendingSendToEthResponse>): _6.QueryPendingSendToEthResponse;
        };
        QueryPendingIbcAutoForwards: {
            encode(message: _6.QueryPendingIbcAutoForwards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryPendingIbcAutoForwards;
            fromPartial(object: Partial<_6.QueryPendingIbcAutoForwards>): _6.QueryPendingIbcAutoForwards;
        };
        QueryPendingIbcAutoForwardsResponse: {
            encode(message: _6.QueryPendingIbcAutoForwardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryPendingIbcAutoForwardsResponse;
            fromPartial(object: Partial<_6.QueryPendingIbcAutoForwardsResponse>): _6.QueryPendingIbcAutoForwardsResponse;
        };
        IDSet: {
            encode(message: _5.IDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.IDSet;
            fromPartial(object: Partial<_5.IDSet>): _5.IDSet;
        };
        BatchFees: {
            encode(message: _5.BatchFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.BatchFees;
            fromPartial(object: Partial<_5.BatchFees>): _5.BatchFees;
        };
        EventWithdrawalReceived: {
            encode(message: _5.EventWithdrawalReceived, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.EventWithdrawalReceived;
            fromPartial(object: Partial<_5.EventWithdrawalReceived>): _5.EventWithdrawalReceived;
        };
        EventWithdrawCanceled: {
            encode(message: _5.EventWithdrawCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.EventWithdrawCanceled;
            fromPartial(object: Partial<_5.EventWithdrawCanceled>): _5.EventWithdrawCanceled;
        };
        MsgSetOrchestratorAddress: {
            encode(message: _4.MsgSetOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgSetOrchestratorAddress;
            fromPartial(object: Partial<_4.MsgSetOrchestratorAddress>): _4.MsgSetOrchestratorAddress;
        };
        MsgSetOrchestratorAddressResponse: {
            encode(_: _4.MsgSetOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgSetOrchestratorAddressResponse;
            fromPartial(_: Partial<_4.MsgSetOrchestratorAddressResponse>): _4.MsgSetOrchestratorAddressResponse;
        };
        MsgValsetConfirm: {
            encode(message: _4.MsgValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgValsetConfirm;
            fromPartial(object: Partial<_4.MsgValsetConfirm>): _4.MsgValsetConfirm;
        };
        MsgValsetConfirmResponse: {
            encode(_: _4.MsgValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgValsetConfirmResponse;
            fromPartial(_: Partial<_4.MsgValsetConfirmResponse>): _4.MsgValsetConfirmResponse;
        };
        MsgSendToEth: {
            encode(message: _4.MsgSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgSendToEth;
            fromPartial(object: Partial<_4.MsgSendToEth>): _4.MsgSendToEth;
        };
        MsgSendToEthResponse: {
            encode(_: _4.MsgSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgSendToEthResponse;
            fromPartial(_: Partial<_4.MsgSendToEthResponse>): _4.MsgSendToEthResponse;
        };
        MsgRequestBatch: {
            encode(message: _4.MsgRequestBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgRequestBatch;
            fromPartial(object: Partial<_4.MsgRequestBatch>): _4.MsgRequestBatch;
        };
        MsgRequestBatchResponse: {
            encode(_: _4.MsgRequestBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgRequestBatchResponse;
            fromPartial(_: Partial<_4.MsgRequestBatchResponse>): _4.MsgRequestBatchResponse;
        };
        MsgConfirmBatch: {
            encode(message: _4.MsgConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgConfirmBatch;
            fromPartial(object: Partial<_4.MsgConfirmBatch>): _4.MsgConfirmBatch;
        };
        MsgConfirmBatchResponse: {
            encode(_: _4.MsgConfirmBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgConfirmBatchResponse;
            fromPartial(_: Partial<_4.MsgConfirmBatchResponse>): _4.MsgConfirmBatchResponse;
        };
        MsgConfirmLogicCall: {
            encode(message: _4.MsgConfirmLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgConfirmLogicCall;
            fromPartial(object: Partial<_4.MsgConfirmLogicCall>): _4.MsgConfirmLogicCall;
        };
        MsgConfirmLogicCallResponse: {
            encode(_: _4.MsgConfirmLogicCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgConfirmLogicCallResponse;
            fromPartial(_: Partial<_4.MsgConfirmLogicCallResponse>): _4.MsgConfirmLogicCallResponse;
        };
        MsgSendToCosmosClaim: {
            encode(message: _4.MsgSendToCosmosClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgSendToCosmosClaim;
            fromPartial(object: Partial<_4.MsgSendToCosmosClaim>): _4.MsgSendToCosmosClaim;
        };
        MsgSendToCosmosClaimResponse: {
            encode(_: _4.MsgSendToCosmosClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgSendToCosmosClaimResponse;
            fromPartial(_: Partial<_4.MsgSendToCosmosClaimResponse>): _4.MsgSendToCosmosClaimResponse;
        };
        MsgExecuteIbcAutoForwards: {
            encode(message: _4.MsgExecuteIbcAutoForwards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgExecuteIbcAutoForwards;
            fromPartial(object: Partial<_4.MsgExecuteIbcAutoForwards>): _4.MsgExecuteIbcAutoForwards;
        };
        MsgExecuteIbcAutoForwardsResponse: {
            encode(_: _4.MsgExecuteIbcAutoForwardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgExecuteIbcAutoForwardsResponse;
            fromPartial(_: Partial<_4.MsgExecuteIbcAutoForwardsResponse>): _4.MsgExecuteIbcAutoForwardsResponse;
        };
        MsgBatchSendToEthClaim: {
            encode(message: _4.MsgBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgBatchSendToEthClaim;
            fromPartial(object: Partial<_4.MsgBatchSendToEthClaim>): _4.MsgBatchSendToEthClaim;
        };
        MsgBatchSendToEthClaimResponse: {
            encode(_: _4.MsgBatchSendToEthClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgBatchSendToEthClaimResponse;
            fromPartial(_: Partial<_4.MsgBatchSendToEthClaimResponse>): _4.MsgBatchSendToEthClaimResponse;
        };
        MsgERC20DeployedClaim: {
            encode(message: _4.MsgERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgERC20DeployedClaim;
            fromPartial(object: Partial<_4.MsgERC20DeployedClaim>): _4.MsgERC20DeployedClaim;
        };
        MsgERC20DeployedClaimResponse: {
            encode(_: _4.MsgERC20DeployedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgERC20DeployedClaimResponse;
            fromPartial(_: Partial<_4.MsgERC20DeployedClaimResponse>): _4.MsgERC20DeployedClaimResponse;
        };
        MsgLogicCallExecutedClaim: {
            encode(message: _4.MsgLogicCallExecutedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgLogicCallExecutedClaim;
            fromPartial(object: Partial<_4.MsgLogicCallExecutedClaim>): _4.MsgLogicCallExecutedClaim;
        };
        MsgLogicCallExecutedClaimResponse: {
            encode(_: _4.MsgLogicCallExecutedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgLogicCallExecutedClaimResponse;
            fromPartial(_: Partial<_4.MsgLogicCallExecutedClaimResponse>): _4.MsgLogicCallExecutedClaimResponse;
        };
        MsgValsetUpdatedClaim: {
            encode(message: _4.MsgValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgValsetUpdatedClaim;
            fromPartial(object: Partial<_4.MsgValsetUpdatedClaim>): _4.MsgValsetUpdatedClaim;
        };
        MsgValsetUpdatedClaimResponse: {
            encode(_: _4.MsgValsetUpdatedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgValsetUpdatedClaimResponse;
            fromPartial(_: Partial<_4.MsgValsetUpdatedClaimResponse>): _4.MsgValsetUpdatedClaimResponse;
        };
        MsgCancelSendToEth: {
            encode(message: _4.MsgCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgCancelSendToEth;
            fromPartial(object: Partial<_4.MsgCancelSendToEth>): _4.MsgCancelSendToEth;
        };
        MsgCancelSendToEthResponse: {
            encode(_: _4.MsgCancelSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgCancelSendToEthResponse;
            fromPartial(_: Partial<_4.MsgCancelSendToEthResponse>): _4.MsgCancelSendToEthResponse;
        };
        MsgSubmitBadSignatureEvidence: {
            encode(message: _4.MsgSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.MsgSubmitBadSignatureEvidence;
            fromPartial(object: Partial<_4.MsgSubmitBadSignatureEvidence>): _4.MsgSubmitBadSignatureEvidence;
        };
        MsgSubmitBadSignatureEvidenceResponse: {
            encode(_: _4.MsgSubmitBadSignatureEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.MsgSubmitBadSignatureEvidenceResponse;
            fromPartial(_: Partial<_4.MsgSubmitBadSignatureEvidenceResponse>): _4.MsgSubmitBadSignatureEvidenceResponse;
        };
        EventSetOperatorAddress: {
            encode(message: _4.EventSetOperatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventSetOperatorAddress;
            fromPartial(object: Partial<_4.EventSetOperatorAddress>): _4.EventSetOperatorAddress;
        };
        EventValsetConfirmKey: {
            encode(message: _4.EventValsetConfirmKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventValsetConfirmKey;
            fromPartial(object: Partial<_4.EventValsetConfirmKey>): _4.EventValsetConfirmKey;
        };
        EventBatchCreated: {
            encode(message: _4.EventBatchCreated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventBatchCreated;
            fromPartial(object: Partial<_4.EventBatchCreated>): _4.EventBatchCreated;
        };
        EventBatchConfirmKey: {
            encode(message: _4.EventBatchConfirmKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventBatchConfirmKey;
            fromPartial(object: Partial<_4.EventBatchConfirmKey>): _4.EventBatchConfirmKey;
        };
        EventBatchSendToEthClaim: {
            encode(message: _4.EventBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventBatchSendToEthClaim;
            fromPartial(object: Partial<_4.EventBatchSendToEthClaim>): _4.EventBatchSendToEthClaim;
        };
        EventClaim: {
            encode(message: _4.EventClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventClaim;
            fromPartial(object: Partial<_4.EventClaim>): _4.EventClaim;
        };
        EventBadSignatureEvidence: {
            encode(message: _4.EventBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventBadSignatureEvidence;
            fromPartial(object: Partial<_4.EventBadSignatureEvidence>): _4.EventBadSignatureEvidence;
        };
        EventERC20DeployedClaim: {
            encode(message: _4.EventERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventERC20DeployedClaim;
            fromPartial(object: Partial<_4.EventERC20DeployedClaim>): _4.EventERC20DeployedClaim;
        };
        EventValsetUpdatedClaim: {
            encode(message: _4.EventValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventValsetUpdatedClaim;
            fromPartial(object: Partial<_4.EventValsetUpdatedClaim>): _4.EventValsetUpdatedClaim;
        };
        EventMultisigUpdateRequest: {
            encode(message: _4.EventMultisigUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventMultisigUpdateRequest;
            fromPartial(object: Partial<_4.EventMultisigUpdateRequest>): _4.EventMultisigUpdateRequest;
        };
        EventOutgoingLogicCallCanceled: {
            encode(message: _4.EventOutgoingLogicCallCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventOutgoingLogicCallCanceled;
            fromPartial(object: Partial<_4.EventOutgoingLogicCallCanceled>): _4.EventOutgoingLogicCallCanceled;
        };
        EventSignatureSlashing: {
            encode(message: _4.EventSignatureSlashing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventSignatureSlashing;
            fromPartial(object: Partial<_4.EventSignatureSlashing>): _4.EventSignatureSlashing;
        };
        EventOutgoingTxId: {
            encode(message: _4.EventOutgoingTxId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventOutgoingTxId;
            fromPartial(object: Partial<_4.EventOutgoingTxId>): _4.EventOutgoingTxId;
        };
        EventSendToEthFeeCollected: {
            encode(message: _4.EventSendToEthFeeCollected, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.EventSendToEthFeeCollected;
            fromPartial(object: Partial<_4.EventSendToEthFeeCollected>): _4.EventSendToEthFeeCollected;
        };
        Params: {
            encode(message: _3.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.Params;
            fromPartial(object: Partial<_3.Params>): _3.Params;
        };
        GenesisState: {
            encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.GenesisState;
            fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
        };
        GravityNonces: {
            encode(message: _3.GravityNonces, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.GravityNonces;
            fromPartial(object: Partial<_3.GravityNonces>): _3.GravityNonces;
        };
        signTypeFromJSON(object: any): _2.SignType;
        signTypeToJSON(object: _2.SignType): string;
        SignType: typeof _2.SignType;
        SignTypeSDKType: typeof _2.SignType;
        OutgoingTxBatch: {
            encode(message: _1.OutgoingTxBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.OutgoingTxBatch;
            fromPartial(object: Partial<_1.OutgoingTxBatch>): _1.OutgoingTxBatch;
        };
        OutgoingTransferTx: {
            encode(message: _1.OutgoingTransferTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.OutgoingTransferTx;
            fromPartial(object: Partial<_1.OutgoingTransferTx>): _1.OutgoingTransferTx;
        };
        OutgoingLogicCall: {
            encode(message: _1.OutgoingLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.OutgoingLogicCall;
            fromPartial(object: Partial<_1.OutgoingLogicCall>): _1.OutgoingLogicCall;
        };
        EventOutgoingBatchCanceled: {
            encode(message: _1.EventOutgoingBatchCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.EventOutgoingBatchCanceled;
            fromPartial(object: Partial<_1.EventOutgoingBatchCanceled>): _1.EventOutgoingBatchCanceled;
        };
        EventOutgoingBatch: {
            encode(message: _1.EventOutgoingBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.EventOutgoingBatch;
            fromPartial(object: Partial<_1.EventOutgoingBatch>): _1.EventOutgoingBatch;
        };
        claimTypeFromJSON(object: any): _0.ClaimType;
        claimTypeToJSON(object: _0.ClaimType): string;
        ClaimType: typeof _0.ClaimType;
        ClaimTypeSDKType: typeof _0.ClaimType;
        Attestation: {
            encode(message: _0.Attestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.Attestation;
            fromPartial(object: Partial<_0.Attestation>): _0.Attestation;
        };
        ERC20Token: {
            encode(message: _0.ERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.ERC20Token;
            fromPartial(object: Partial<_0.ERC20Token>): _0.ERC20Token;
        };
        EventObservation: {
            encode(message: _0.EventObservation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.EventObservation;
            fromPartial(object: Partial<_0.EventObservation>): _0.EventObservation;
        };
        EventInvalidSendToCosmosReceiver: {
            encode(message: _0.EventInvalidSendToCosmosReceiver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.EventInvalidSendToCosmosReceiver;
            fromPartial(object: Partial<_0.EventInvalidSendToCosmosReceiver>): _0.EventInvalidSendToCosmosReceiver;
        };
        EventSendToCosmos: {
            encode(message: _0.EventSendToCosmos, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.EventSendToCosmos;
            fromPartial(object: Partial<_0.EventSendToCosmos>): _0.EventSendToCosmos;
        };
        EventSendToCosmosLocal: {
            encode(message: _0.EventSendToCosmosLocal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.EventSendToCosmosLocal;
            fromPartial(object: Partial<_0.EventSendToCosmosLocal>): _0.EventSendToCosmosLocal;
        };
        EventSendToCosmosPendingIbcAutoForward: {
            encode(message: _0.EventSendToCosmosPendingIbcAutoForward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.EventSendToCosmosPendingIbcAutoForward;
            fromPartial(object: Partial<_0.EventSendToCosmosPendingIbcAutoForward>): _0.EventSendToCosmosPendingIbcAutoForward;
        };
        EventSendToCosmosExecutedIbcAutoForward: {
            encode(message: _0.EventSendToCosmosExecutedIbcAutoForward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.EventSendToCosmosExecutedIbcAutoForward;
            fromPartial(object: Partial<_0.EventSendToCosmosExecutedIbcAutoForward>): _0.EventSendToCosmosExecutedIbcAutoForward;
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
