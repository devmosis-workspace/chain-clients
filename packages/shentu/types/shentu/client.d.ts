import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const shentuAminoConverters: {
    "/shentu.shield.v1alpha1.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgCreatePool) => import("./shield/v1alpha1/tx").MsgCreatePoolAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgCreatePoolAmino) => import("./shield/v1alpha1/tx").MsgCreatePool;
    };
    "/shentu.shield.v1alpha1.MsgUpdatePool": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgUpdatePool) => import("./shield/v1alpha1/tx").MsgUpdatePoolAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgUpdatePoolAmino) => import("./shield/v1alpha1/tx").MsgUpdatePool;
    };
    "/shentu.shield.v1alpha1.MsgPausePool": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgPausePool) => import("./shield/v1alpha1/tx").MsgPausePoolAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgPausePoolAmino) => import("./shield/v1alpha1/tx").MsgPausePool;
    };
    "/shentu.shield.v1alpha1.MsgResumePool": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgResumePool) => import("./shield/v1alpha1/tx").MsgResumePoolAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgResumePoolAmino) => import("./shield/v1alpha1/tx").MsgResumePool;
    };
    "/shentu.shield.v1alpha1.MsgDepositCollateral": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgDepositCollateral) => import("./shield/v1alpha1/tx").MsgDepositCollateralAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgDepositCollateralAmino) => import("./shield/v1alpha1/tx").MsgDepositCollateral;
    };
    "/shentu.shield.v1alpha1.MsgWithdrawCollateral": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgWithdrawCollateral) => import("./shield/v1alpha1/tx").MsgWithdrawCollateralAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgWithdrawCollateralAmino) => import("./shield/v1alpha1/tx").MsgWithdrawCollateral;
    };
    "/shentu.shield.v1alpha1.MsgWithdrawRewards": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgWithdrawRewards) => import("./shield/v1alpha1/tx").MsgWithdrawRewardsAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgWithdrawRewardsAmino) => import("./shield/v1alpha1/tx").MsgWithdrawRewards;
    };
    "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgWithdrawForeignRewards) => import("./shield/v1alpha1/tx").MsgWithdrawForeignRewardsAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgWithdrawForeignRewardsAmino) => import("./shield/v1alpha1/tx").MsgWithdrawForeignRewards;
    };
    "/shentu.shield.v1alpha1.MsgPurchaseShield": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgPurchaseShield) => import("./shield/v1alpha1/tx").MsgPurchaseShieldAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgPurchaseShieldAmino) => import("./shield/v1alpha1/tx").MsgPurchaseShield;
    };
    "/shentu.shield.v1alpha1.MsgWithdrawReimbursement": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgWithdrawReimbursement) => import("./shield/v1alpha1/tx").MsgWithdrawReimbursementAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgWithdrawReimbursementAmino) => import("./shield/v1alpha1/tx").MsgWithdrawReimbursement;
    };
    "/shentu.shield.v1alpha1.MsgUpdateSponsor": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgUpdateSponsor) => import("./shield/v1alpha1/tx").MsgUpdateSponsorAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgUpdateSponsorAmino) => import("./shield/v1alpha1/tx").MsgUpdateSponsor;
    };
    "/shentu.shield.v1alpha1.MsgStakeForShield": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgStakeForShield) => import("./shield/v1alpha1/tx").MsgStakeForShieldAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgStakeForShieldAmino) => import("./shield/v1alpha1/tx").MsgStakeForShield;
    };
    "/shentu.shield.v1alpha1.MsgUnstakeFromShield": {
        aminoType: string;
        toAmino: (message: import("./shield/v1alpha1/tx").MsgUnstakeFromShield) => import("./shield/v1alpha1/tx").MsgUnstakeFromShieldAmino;
        fromAmino: (object: import("./shield/v1alpha1/tx").MsgUnstakeFromShieldAmino) => import("./shield/v1alpha1/tx").MsgUnstakeFromShield;
    };
    "/shentu.oracle.v1alpha1.MsgCreateOperator": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgCreateOperator) => import("./oracle/v1alpha1/tx").MsgCreateOperatorAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgCreateOperatorAmino) => import("./oracle/v1alpha1/tx").MsgCreateOperator;
    };
    "/shentu.oracle.v1alpha1.MsgRemoveOperator": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgRemoveOperator) => import("./oracle/v1alpha1/tx").MsgRemoveOperatorAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgRemoveOperatorAmino) => import("./oracle/v1alpha1/tx").MsgRemoveOperator;
    };
    "/shentu.oracle.v1alpha1.MsgAddCollateral": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgAddCollateral) => import("./oracle/v1alpha1/tx").MsgAddCollateralAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgAddCollateralAmino) => import("./oracle/v1alpha1/tx").MsgAddCollateral;
    };
    "/shentu.oracle.v1alpha1.MsgReduceCollateral": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgReduceCollateral) => import("./oracle/v1alpha1/tx").MsgReduceCollateralAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgReduceCollateralAmino) => import("./oracle/v1alpha1/tx").MsgReduceCollateral;
    };
    "/shentu.oracle.v1alpha1.MsgWithdrawReward": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgWithdrawReward) => import("./oracle/v1alpha1/tx").MsgWithdrawRewardAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgWithdrawRewardAmino) => import("./oracle/v1alpha1/tx").MsgWithdrawReward;
    };
    "/shentu.oracle.v1alpha1.MsgCreateTask": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgCreateTask) => import("./oracle/v1alpha1/tx").MsgCreateTaskAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgCreateTaskAmino) => import("./oracle/v1alpha1/tx").MsgCreateTask;
    };
    "/shentu.oracle.v1alpha1.MsgTaskResponse": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgTaskResponse) => import("./oracle/v1alpha1/tx").MsgTaskResponseAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgTaskResponseAmino) => import("./oracle/v1alpha1/tx").MsgTaskResponse;
    };
    "/shentu.oracle.v1alpha1.MsgDeleteTask": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgDeleteTask) => import("./oracle/v1alpha1/tx").MsgDeleteTaskAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgDeleteTaskAmino) => import("./oracle/v1alpha1/tx").MsgDeleteTask;
    };
    "/shentu.oracle.v1alpha1.MsgCreateTxTask": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgCreateTxTask) => import("./oracle/v1alpha1/tx").MsgCreateTxTaskAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgCreateTxTaskAmino) => import("./oracle/v1alpha1/tx").MsgCreateTxTask;
    };
    "/shentu.oracle.v1alpha1.MsgTxTaskResponse": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgTxTaskResponse) => import("./oracle/v1alpha1/tx").MsgTxTaskResponseAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgTxTaskResponseAmino) => import("./oracle/v1alpha1/tx").MsgTxTaskResponse;
    };
    "/shentu.oracle.v1alpha1.MsgDeleteTxTask": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1alpha1/tx").MsgDeleteTxTask) => import("./oracle/v1alpha1/tx").MsgDeleteTxTaskAmino;
        fromAmino: (object: import("./oracle/v1alpha1/tx").MsgDeleteTxTaskAmino) => import("./oracle/v1alpha1/tx").MsgDeleteTxTask;
    };
    "/shentu.cvm.v1alpha1.MsgCall": {
        aminoType: string;
        toAmino: (message: import("./cvm/v1alpha1/tx").MsgCall) => import("./cvm/v1alpha1/tx").MsgCallAmino;
        fromAmino: (object: import("./cvm/v1alpha1/tx").MsgCallAmino) => import("./cvm/v1alpha1/tx").MsgCall;
    };
    "/shentu.cvm.v1alpha1.MsgDeploy": {
        aminoType: string;
        toAmino: (message: import("./cvm/v1alpha1/tx").MsgDeploy) => import("./cvm/v1alpha1/tx").MsgDeployAmino;
        fromAmino: (object: import("./cvm/v1alpha1/tx").MsgDeployAmino) => import("./cvm/v1alpha1/tx").MsgDeploy;
    };
    "/shentu.cert.v1alpha1.MsgProposeCertifier": {
        aminoType: string;
        toAmino: (message: import("./cert/v1alpha1/tx").MsgProposeCertifier) => import("./cert/v1alpha1/tx").MsgProposeCertifierAmino;
        fromAmino: (object: import("./cert/v1alpha1/tx").MsgProposeCertifierAmino) => import("./cert/v1alpha1/tx").MsgProposeCertifier;
    };
    "/shentu.cert.v1alpha1.MsgIssueCertificate": {
        aminoType: string;
        toAmino: (message: import("./cert/v1alpha1/tx").MsgIssueCertificate) => import("./cert/v1alpha1/tx").MsgIssueCertificateAmino;
        fromAmino: (object: import("./cert/v1alpha1/tx").MsgIssueCertificateAmino) => import("./cert/v1alpha1/tx").MsgIssueCertificate;
    };
    "/shentu.cert.v1alpha1.MsgRevokeCertificate": {
        aminoType: string;
        toAmino: (message: import("./cert/v1alpha1/tx").MsgRevokeCertificate) => import("./cert/v1alpha1/tx").MsgRevokeCertificateAmino;
        fromAmino: (object: import("./cert/v1alpha1/tx").MsgRevokeCertificateAmino) => import("./cert/v1alpha1/tx").MsgRevokeCertificate;
    };
    "/shentu.cert.v1alpha1.MsgCertifyPlatform": {
        aminoType: string;
        toAmino: (message: import("./cert/v1alpha1/tx").MsgCertifyPlatform) => import("./cert/v1alpha1/tx").MsgCertifyPlatformAmino;
        fromAmino: (object: import("./cert/v1alpha1/tx").MsgCertifyPlatformAmino) => import("./cert/v1alpha1/tx").MsgCertifyPlatform;
    };
    "/shentu.bounty.v1.MsgCreateProgram": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgCreateProgram) => import("./bounty/v1/tx").MsgCreateProgramAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgCreateProgramAmino) => import("./bounty/v1/tx").MsgCreateProgram;
    };
    "/shentu.bounty.v1.MsgEditProgram": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgEditProgram) => import("./bounty/v1/tx").MsgEditProgramAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgEditProgramAmino) => import("./bounty/v1/tx").MsgEditProgram;
    };
    "/shentu.bounty.v1.MsgActivateProgram": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgActivateProgram) => import("./bounty/v1/tx").MsgActivateProgramAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgActivateProgramAmino) => import("./bounty/v1/tx").MsgActivateProgram;
    };
    "/shentu.bounty.v1.MsgCloseProgram": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgCloseProgram) => import("./bounty/v1/tx").MsgCloseProgramAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgCloseProgramAmino) => import("./bounty/v1/tx").MsgCloseProgram;
    };
    "/shentu.bounty.v1.MsgSubmitFinding": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgSubmitFinding) => import("./bounty/v1/tx").MsgSubmitFindingAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgSubmitFindingAmino) => import("./bounty/v1/tx").MsgSubmitFinding;
    };
    "/shentu.bounty.v1.MsgEditFinding": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgEditFinding) => import("./bounty/v1/tx").MsgEditFindingAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgEditFindingAmino) => import("./bounty/v1/tx").MsgEditFinding;
    };
    "/shentu.bounty.v1.MsgActivateFinding": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgActivateFinding) => import("./bounty/v1/tx").MsgActivateFindingAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgActivateFindingAmino) => import("./bounty/v1/tx").MsgActivateFinding;
    };
    "/shentu.bounty.v1.MsgConfirmFinding": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgConfirmFinding) => import("./bounty/v1/tx").MsgConfirmFindingAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgConfirmFindingAmino) => import("./bounty/v1/tx").MsgConfirmFinding;
    };
    "/shentu.bounty.v1.MsgConfirmFindingPaid": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgConfirmFindingPaid) => import("./bounty/v1/tx").MsgConfirmFindingPaidAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgConfirmFindingPaidAmino) => import("./bounty/v1/tx").MsgConfirmFindingPaid;
    };
    "/shentu.bounty.v1.MsgCloseFinding": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgCloseFinding) => import("./bounty/v1/tx").MsgCloseFindingAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgCloseFindingAmino) => import("./bounty/v1/tx").MsgCloseFinding;
    };
    "/shentu.bounty.v1.MsgPublishFinding": {
        aminoType: string;
        toAmino: (message: import("./bounty/v1/tx").MsgPublishFinding) => import("./bounty/v1/tx").MsgPublishFindingAmino;
        fromAmino: (object: import("./bounty/v1/tx").MsgPublishFindingAmino) => import("./bounty/v1/tx").MsgPublishFinding;
    };
    "/shentu.bank.v1alpha1.MsgLockedSend": {
        aminoType: string;
        toAmino: (message: import("./bank/v1alpha1/tx").MsgLockedSend) => import("./bank/v1alpha1/tx").MsgLockedSendAmino;
        fromAmino: (object: import("./bank/v1alpha1/tx").MsgLockedSendAmino) => import("./bank/v1alpha1/tx").MsgLockedSend;
    };
    "/shentu.auth.v1alpha1.MsgUnlock": {
        aminoType: string;
        toAmino: (message: import("./auth/v1alpha1/tx").MsgUnlock) => import("./auth/v1alpha1/tx").MsgUnlockAmino;
        fromAmino: (object: import("./auth/v1alpha1/tx").MsgUnlockAmino) => import("./auth/v1alpha1/tx").MsgUnlock;
    };
};
export declare const shentuProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningShentuClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningShentuClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<any>;
