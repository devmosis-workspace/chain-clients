import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const junoAminoConverters: {
    "/juno.mint.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./mint/tx").MsgUpdateParams) => import("./mint/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./mint/tx").MsgUpdateParamsAmino) => import("./mint/tx").MsgUpdateParams;
    };
    "/juno.feeshare.v1.MsgRegisterFeeShare": {
        aminoType: string;
        toAmino: (message: import("./feeshare/v1/tx").MsgRegisterFeeShare) => import("./feeshare/v1/tx").MsgRegisterFeeShareAmino;
        fromAmino: (object: import("./feeshare/v1/tx").MsgRegisterFeeShareAmino) => import("./feeshare/v1/tx").MsgRegisterFeeShare;
    };
    "/juno.feeshare.v1.MsgUpdateFeeShare": {
        aminoType: string;
        toAmino: (message: import("./feeshare/v1/tx").MsgUpdateFeeShare) => import("./feeshare/v1/tx").MsgUpdateFeeShareAmino;
        fromAmino: (object: import("./feeshare/v1/tx").MsgUpdateFeeShareAmino) => import("./feeshare/v1/tx").MsgUpdateFeeShare;
    };
    "/juno.feeshare.v1.MsgCancelFeeShare": {
        aminoType: string;
        toAmino: (message: import("./feeshare/v1/tx").MsgCancelFeeShare) => import("./feeshare/v1/tx").MsgCancelFeeShareAmino;
        fromAmino: (object: import("./feeshare/v1/tx").MsgCancelFeeShareAmino) => import("./feeshare/v1/tx").MsgCancelFeeShare;
    };
    "/juno.feeshare.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./feeshare/v1/tx").MsgUpdateParams) => import("./feeshare/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./feeshare/v1/tx").MsgUpdateParamsAmino) => import("./feeshare/v1/tx").MsgUpdateParams;
    };
    "/juno.feepay.v1.MsgRegisterFeePayContract": {
        aminoType: string;
        toAmino: (message: import("./feepay/v1/tx").MsgRegisterFeePayContract) => import("./feepay/v1/tx").MsgRegisterFeePayContractAmino;
        fromAmino: (object: import("./feepay/v1/tx").MsgRegisterFeePayContractAmino) => import("./feepay/v1/tx").MsgRegisterFeePayContract;
    };
    "/juno.feepay.v1.MsgUnregisterFeePayContract": {
        aminoType: string;
        toAmino: (message: import("./feepay/v1/tx").MsgUnregisterFeePayContract) => import("./feepay/v1/tx").MsgUnregisterFeePayContractAmino;
        fromAmino: (object: import("./feepay/v1/tx").MsgUnregisterFeePayContractAmino) => import("./feepay/v1/tx").MsgUnregisterFeePayContract;
    };
    "/juno.feepay.v1.MsgFundFeePayContract": {
        aminoType: string;
        toAmino: (message: import("./feepay/v1/tx").MsgFundFeePayContract) => import("./feepay/v1/tx").MsgFundFeePayContractAmino;
        fromAmino: (object: import("./feepay/v1/tx").MsgFundFeePayContractAmino) => import("./feepay/v1/tx").MsgFundFeePayContract;
    };
    "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit": {
        aminoType: string;
        toAmino: (message: import("./feepay/v1/tx").MsgUpdateFeePayContractWalletLimit) => import("./feepay/v1/tx").MsgUpdateFeePayContractWalletLimitAmino;
        fromAmino: (object: import("./feepay/v1/tx").MsgUpdateFeePayContractWalletLimitAmino) => import("./feepay/v1/tx").MsgUpdateFeePayContractWalletLimit;
    };
    "/juno.feepay.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./feepay/v1/tx").MsgUpdateParams) => import("./feepay/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./feepay/v1/tx").MsgUpdateParamsAmino) => import("./feepay/v1/tx").MsgUpdateParams;
    };
    "/juno.drip.v1.MsgDistributeTokens": {
        aminoType: string;
        toAmino: (message: import("./drip/v1/tx").MsgDistributeTokens) => import("./drip/v1/tx").MsgDistributeTokensAmino;
        fromAmino: (object: import("./drip/v1/tx").MsgDistributeTokensAmino) => import("./drip/v1/tx").MsgDistributeTokens;
    };
    "/juno.drip.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./drip/v1/tx").MsgUpdateParams) => import("./drip/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./drip/v1/tx").MsgUpdateParamsAmino) => import("./drip/v1/tx").MsgUpdateParams;
    };
    "/juno.cwhooks.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./cwhooks/v1/tx").MsgUpdateParams) => import("./cwhooks/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./cwhooks/v1/tx").MsgUpdateParamsAmino) => import("./cwhooks/v1/tx").MsgUpdateParams;
    };
    "/juno.cwhooks.v1.MsgRegisterStaking": {
        aminoType: string;
        toAmino: (message: import("./cwhooks/v1/tx").MsgRegisterStaking) => import("./cwhooks/v1/tx").MsgRegisterStakingAmino;
        fromAmino: (object: import("./cwhooks/v1/tx").MsgRegisterStakingAmino) => import("./cwhooks/v1/tx").MsgRegisterStaking;
    };
    "/juno.cwhooks.v1.MsgUnregisterStaking": {
        aminoType: string;
        toAmino: (message: import("./cwhooks/v1/tx").MsgUnregisterStaking) => import("./cwhooks/v1/tx").MsgUnregisterStakingAmino;
        fromAmino: (object: import("./cwhooks/v1/tx").MsgUnregisterStakingAmino) => import("./cwhooks/v1/tx").MsgUnregisterStaking;
    };
    "/juno.cwhooks.v1.MsgRegisterGovernance": {
        aminoType: string;
        toAmino: (message: import("./cwhooks/v1/tx").MsgRegisterGovernance) => import("./cwhooks/v1/tx").MsgRegisterGovernanceAmino;
        fromAmino: (object: import("./cwhooks/v1/tx").MsgRegisterGovernanceAmino) => import("./cwhooks/v1/tx").MsgRegisterGovernance;
    };
    "/juno.cwhooks.v1.MsgUnregisterGovernance": {
        aminoType: string;
        toAmino: (message: import("./cwhooks/v1/tx").MsgUnregisterGovernance) => import("./cwhooks/v1/tx").MsgUnregisterGovernanceAmino;
        fromAmino: (object: import("./cwhooks/v1/tx").MsgUnregisterGovernanceAmino) => import("./cwhooks/v1/tx").MsgUnregisterGovernance;
    };
    "/juno.clock.v1.MsgRegisterClockContract": {
        aminoType: string;
        toAmino: (message: import("./clock/v1/tx").MsgRegisterClockContract) => import("./clock/v1/tx").MsgRegisterClockContractAmino;
        fromAmino: (object: import("./clock/v1/tx").MsgRegisterClockContractAmino) => import("./clock/v1/tx").MsgRegisterClockContract;
    };
    "/juno.clock.v1.MsgUnregisterClockContract": {
        aminoType: string;
        toAmino: (message: import("./clock/v1/tx").MsgUnregisterClockContract) => import("./clock/v1/tx").MsgUnregisterClockContractAmino;
        fromAmino: (object: import("./clock/v1/tx").MsgUnregisterClockContractAmino) => import("./clock/v1/tx").MsgUnregisterClockContract;
    };
    "/juno.clock.v1.MsgUnjailClockContract": {
        aminoType: string;
        toAmino: (message: import("./clock/v1/tx").MsgUnjailClockContract) => import("./clock/v1/tx").MsgUnjailClockContractAmino;
        fromAmino: (object: import("./clock/v1/tx").MsgUnjailClockContractAmino) => import("./clock/v1/tx").MsgUnjailClockContract;
    };
    "/juno.clock.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./clock/v1/tx").MsgUpdateParams) => import("./clock/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./clock/v1/tx").MsgUpdateParamsAmino) => import("./clock/v1/tx").MsgUpdateParams;
    };
};
export declare const junoProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningJunoClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningJunoClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
