import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const publicawesomeAminoConverters: {
    "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization": {
        aminoType: string;
        toAmino: (message: import("./stargaze/globalfee/v1/tx").MsgSetCodeAuthorization) => import("./stargaze/globalfee/v1/tx").MsgSetCodeAuthorizationAmino;
        fromAmino: (object: import("./stargaze/globalfee/v1/tx").MsgSetCodeAuthorizationAmino) => import("./stargaze/globalfee/v1/tx").MsgSetCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization": {
        aminoType: string;
        toAmino: (message: import("./stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorization) => import("./stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorizationAmino;
        fromAmino: (object: import("./stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorizationAmino) => import("./stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization": {
        aminoType: string;
        toAmino: (message: import("./stargaze/globalfee/v1/tx").MsgSetContractAuthorization) => import("./stargaze/globalfee/v1/tx").MsgSetContractAuthorizationAmino;
        fromAmino: (object: import("./stargaze/globalfee/v1/tx").MsgSetContractAuthorizationAmino) => import("./stargaze/globalfee/v1/tx").MsgSetContractAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization": {
        aminoType: string;
        toAmino: (message: import("./stargaze/globalfee/v1/tx").MsgRemoveContractAuthorization) => import("./stargaze/globalfee/v1/tx").MsgRemoveContractAuthorizationAmino;
        fromAmino: (object: import("./stargaze/globalfee/v1/tx").MsgRemoveContractAuthorizationAmino) => import("./stargaze/globalfee/v1/tx").MsgRemoveContractAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./stargaze/globalfee/v1/tx").MsgUpdateParams) => import("./stargaze/globalfee/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./stargaze/globalfee/v1/tx").MsgUpdateParamsAmino) => import("./stargaze/globalfee/v1/tx").MsgUpdateParams;
    };
    "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract": {
        aminoType: string;
        toAmino: (message: import("./stargaze/cron/v1/tx").MsgPromoteToPrivilegedContract) => import("./stargaze/cron/v1/tx").MsgPromoteToPrivilegedContractAmino;
        fromAmino: (object: import("./stargaze/cron/v1/tx").MsgPromoteToPrivilegedContractAmino) => import("./stargaze/cron/v1/tx").MsgPromoteToPrivilegedContract;
    };
    "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract": {
        aminoType: string;
        toAmino: (message: import("./stargaze/cron/v1/tx").MsgDemoteFromPrivilegedContract) => import("./stargaze/cron/v1/tx").MsgDemoteFromPrivilegedContractAmino;
        fromAmino: (object: import("./stargaze/cron/v1/tx").MsgDemoteFromPrivilegedContractAmino) => import("./stargaze/cron/v1/tx").MsgDemoteFromPrivilegedContract;
    };
    "/publicawesome.stargaze.cron.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./stargaze/cron/v1/tx").MsgUpdateParams) => import("./stargaze/cron/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./stargaze/cron/v1/tx").MsgUpdateParamsAmino) => import("./stargaze/cron/v1/tx").MsgUpdateParams;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: import("./stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount) => import("./stargaze/alloc/v1beta1/tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("./stargaze/alloc/v1beta1/tx").MsgCreateVestingAccountAmino) => import("./stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool": {
        aminoType: string;
        toAmino: (message: import("./stargaze/alloc/v1beta1/tx").MsgFundFairburnPool) => import("./stargaze/alloc/v1beta1/tx").MsgFundFairburnPoolAmino;
        fromAmino: (object: import("./stargaze/alloc/v1beta1/tx").MsgFundFairburnPoolAmino) => import("./stargaze/alloc/v1beta1/tx").MsgFundFairburnPool;
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
}) => Promise<any>;
