import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const gravityAminoConverters: {
    "/gravity.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgValsetConfirm) => import("./v1/msgs").MsgValsetConfirmAmino;
        fromAmino: (object: import("./v1/msgs").MsgValsetConfirmAmino) => import("./v1/msgs").MsgValsetConfirm;
    };
    "/gravity.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgSendToEth) => import("./v1/msgs").MsgSendToEthAmino;
        fromAmino: (object: import("./v1/msgs").MsgSendToEthAmino) => import("./v1/msgs").MsgSendToEth;
    };
    "/gravity.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgRequestBatch) => import("./v1/msgs").MsgRequestBatchAmino;
        fromAmino: (object: import("./v1/msgs").MsgRequestBatchAmino) => import("./v1/msgs").MsgRequestBatch;
    };
    "/gravity.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgConfirmBatch) => import("./v1/msgs").MsgConfirmBatchAmino;
        fromAmino: (object: import("./v1/msgs").MsgConfirmBatchAmino) => import("./v1/msgs").MsgConfirmBatch;
    };
    "/gravity.v1.MsgConfirmLogicCall": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgConfirmLogicCall) => import("./v1/msgs").MsgConfirmLogicCallAmino;
        fromAmino: (object: import("./v1/msgs").MsgConfirmLogicCallAmino) => import("./v1/msgs").MsgConfirmLogicCall;
    };
    "/gravity.v1.MsgSendToCosmosClaim": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgSendToCosmosClaim) => import("./v1/msgs").MsgSendToCosmosClaimAmino;
        fromAmino: (object: import("./v1/msgs").MsgSendToCosmosClaimAmino) => import("./v1/msgs").MsgSendToCosmosClaim;
    };
    "/gravity.v1.MsgExecuteIbcAutoForwards": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgExecuteIbcAutoForwards) => import("./v1/msgs").MsgExecuteIbcAutoForwardsAmino;
        fromAmino: (object: import("./v1/msgs").MsgExecuteIbcAutoForwardsAmino) => import("./v1/msgs").MsgExecuteIbcAutoForwards;
    };
    "/gravity.v1.MsgBatchSendToEthClaim": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgBatchSendToEthClaim) => import("./v1/msgs").MsgBatchSendToEthClaimAmino;
        fromAmino: (object: import("./v1/msgs").MsgBatchSendToEthClaimAmino) => import("./v1/msgs").MsgBatchSendToEthClaim;
    };
    "/gravity.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgValsetUpdatedClaim) => import("./v1/msgs").MsgValsetUpdatedClaimAmino;
        fromAmino: (object: import("./v1/msgs").MsgValsetUpdatedClaimAmino) => import("./v1/msgs").MsgValsetUpdatedClaim;
    };
    "/gravity.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgERC20DeployedClaim) => import("./v1/msgs").MsgERC20DeployedClaimAmino;
        fromAmino: (object: import("./v1/msgs").MsgERC20DeployedClaimAmino) => import("./v1/msgs").MsgERC20DeployedClaim;
    };
    "/gravity.v1.MsgLogicCallExecutedClaim": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgLogicCallExecutedClaim) => import("./v1/msgs").MsgLogicCallExecutedClaimAmino;
        fromAmino: (object: import("./v1/msgs").MsgLogicCallExecutedClaimAmino) => import("./v1/msgs").MsgLogicCallExecutedClaim;
    };
    "/gravity.v1.MsgSetOrchestratorAddress": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgSetOrchestratorAddress) => import("./v1/msgs").MsgSetOrchestratorAddressAmino;
        fromAmino: (object: import("./v1/msgs").MsgSetOrchestratorAddressAmino) => import("./v1/msgs").MsgSetOrchestratorAddress;
    };
    "/gravity.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgCancelSendToEth) => import("./v1/msgs").MsgCancelSendToEthAmino;
        fromAmino: (object: import("./v1/msgs").MsgCancelSendToEthAmino) => import("./v1/msgs").MsgCancelSendToEth;
    };
    "/gravity.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: (message: import("./v1/msgs").MsgSubmitBadSignatureEvidence) => import("./v1/msgs").MsgSubmitBadSignatureEvidenceAmino;
        fromAmino: (object: import("./v1/msgs").MsgSubmitBadSignatureEvidenceAmino) => import("./v1/msgs").MsgSubmitBadSignatureEvidence;
    };
};
export declare const gravityProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningGravityClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningGravityClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
