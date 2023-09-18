import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const publicawesomeAminoConverters: {
    "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization": {
        aminoType: string;
        toAmino: (message: import("../stargaze/globalfee/v1/tx").MsgSetCodeAuthorization) => import("../stargaze/globalfee/v1/tx").MsgSetCodeAuthorizationAmino;
        fromAmino: (object: import("../stargaze/globalfee/v1/tx").MsgSetCodeAuthorizationAmino) => import("../stargaze/globalfee/v1/tx").MsgSetCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization": {
        aminoType: string;
        toAmino: (message: import("../stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorization) => import("../stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorizationAmino;
        fromAmino: (object: import("../stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorizationAmino) => import("../stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization": {
        aminoType: string;
        toAmino: (message: import("../stargaze/globalfee/v1/tx").MsgSetContractAuthorization) => import("../stargaze/globalfee/v1/tx").MsgSetContractAuthorizationAmino;
        fromAmino: (object: import("../stargaze/globalfee/v1/tx").MsgSetContractAuthorizationAmino) => import("../stargaze/globalfee/v1/tx").MsgSetContractAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization": {
        aminoType: string;
        toAmino: (message: import("../stargaze/globalfee/v1/tx").MsgRemoveContractAuthorization) => import("../stargaze/globalfee/v1/tx").MsgRemoveContractAuthorizationAmino;
        fromAmino: (object: import("../stargaze/globalfee/v1/tx").MsgRemoveContractAuthorizationAmino) => import("../stargaze/globalfee/v1/tx").MsgRemoveContractAuthorization;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
        aminoType: string;
        toAmino: (message: import("../stargaze/claim/v1beta1/tx").MsgInitialClaim) => import("../stargaze/claim/v1beta1/tx").MsgInitialClaimAmino;
        fromAmino: (object: import("../stargaze/claim/v1beta1/tx").MsgInitialClaimAmino) => import("../stargaze/claim/v1beta1/tx").MsgInitialClaim;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: (message: import("../stargaze/claim/v1beta1/tx").MsgClaimFor) => import("../stargaze/claim/v1beta1/tx").MsgClaimForAmino;
        fromAmino: (object: import("../stargaze/claim/v1beta1/tx").MsgClaimForAmino) => import("../stargaze/claim/v1beta1/tx").MsgClaimFor;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount) => import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccountAmino) => import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool": {
        aminoType: string;
        toAmino: (message: import("../stargaze/alloc/v1beta1/tx").MsgFundFairburnPool) => import("../stargaze/alloc/v1beta1/tx").MsgFundFairburnPoolAmino;
        fromAmino: (object: import("../stargaze/alloc/v1beta1/tx").MsgFundFairburnPoolAmino) => import("../stargaze/alloc/v1beta1/tx").MsgFundFairburnPool;
    };
};
export declare const publicawesomeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPublicawesomeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPublicawesomeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
