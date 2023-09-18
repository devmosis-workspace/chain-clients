import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const akashAminoConverters: {
    "/akash.provider.v1beta2.MsgCreateProvider": {
        aminoType: string;
        toAmino: (message: import("./provider/v1beta2/provider").MsgCreateProvider) => import("./provider/v1beta2/provider").MsgCreateProviderAmino;
        fromAmino: (object: import("./provider/v1beta2/provider").MsgCreateProviderAmino) => import("./provider/v1beta2/provider").MsgCreateProvider;
    };
    "/akash.provider.v1beta2.MsgUpdateProvider": {
        aminoType: string;
        toAmino: (message: import("./provider/v1beta2/provider").MsgUpdateProvider) => import("./provider/v1beta2/provider").MsgUpdateProviderAmino;
        fromAmino: (object: import("./provider/v1beta2/provider").MsgUpdateProviderAmino) => import("./provider/v1beta2/provider").MsgUpdateProvider;
    };
    "/akash.provider.v1beta2.MsgDeleteProvider": {
        aminoType: string;
        toAmino: (message: import("./provider/v1beta2/provider").MsgDeleteProvider) => import("./provider/v1beta2/provider").MsgDeleteProviderAmino;
        fromAmino: (object: import("./provider/v1beta2/provider").MsgDeleteProviderAmino) => import("./provider/v1beta2/provider").MsgDeleteProvider;
    };
    "/akash.provider.v1beta1.MsgCreateProvider": {
        aminoType: string;
        toAmino: (message: import("./provider/v1beta1/provider").MsgCreateProvider) => import("./provider/v1beta1/provider").MsgCreateProviderAmino;
        fromAmino: (object: import("./provider/v1beta1/provider").MsgCreateProviderAmino) => import("./provider/v1beta1/provider").MsgCreateProvider;
    };
    "/akash.provider.v1beta1.MsgUpdateProvider": {
        aminoType: string;
        toAmino: (message: import("./provider/v1beta1/provider").MsgUpdateProvider) => import("./provider/v1beta1/provider").MsgUpdateProviderAmino;
        fromAmino: (object: import("./provider/v1beta1/provider").MsgUpdateProviderAmino) => import("./provider/v1beta1/provider").MsgUpdateProvider;
    };
    "/akash.provider.v1beta1.MsgDeleteProvider": {
        aminoType: string;
        toAmino: (message: import("./provider/v1beta1/provider").MsgDeleteProvider) => import("./provider/v1beta1/provider").MsgDeleteProviderAmino;
        fromAmino: (object: import("./provider/v1beta1/provider").MsgDeleteProviderAmino) => import("./provider/v1beta1/provider").MsgDeleteProvider;
    };
    "/akash.market.v1beta2.MsgCreateBid": {
        aminoType: string;
        toAmino: (message: import("./market/v1beta2/bid").MsgCreateBid) => import("./market/v1beta2/bid").MsgCreateBidAmino;
        fromAmino: (object: import("./market/v1beta2/bid").MsgCreateBidAmino) => import("./market/v1beta2/bid").MsgCreateBid;
    };
    "/akash.market.v1beta2.MsgCloseBid": {
        aminoType: string;
        toAmino: (message: import("./market/v1beta2/bid").MsgCloseBid) => import("./market/v1beta2/bid").MsgCloseBidAmino;
        fromAmino: (object: import("./market/v1beta2/bid").MsgCloseBidAmino) => import("./market/v1beta2/bid").MsgCloseBid;
    };
    "/akash.market.v1beta2.MsgWithdrawLease": {
        aminoType: string;
        toAmino: (message: import("./market/v1beta2/lease").MsgWithdrawLease) => import("./market/v1beta2/lease").MsgWithdrawLeaseAmino;
        fromAmino: (object: import("./market/v1beta2/lease").MsgWithdrawLeaseAmino) => import("./market/v1beta2/lease").MsgWithdrawLease;
    };
    "/akash.market.v1beta2.MsgCreateLease": {
        aminoType: string;
        toAmino: (message: import("./market/v1beta2/lease").MsgCreateLease) => import("./market/v1beta2/lease").MsgCreateLeaseAmino;
        fromAmino: (object: import("./market/v1beta2/lease").MsgCreateLeaseAmino) => import("./market/v1beta2/lease").MsgCreateLease;
    };
    "/akash.market.v1beta2.MsgCloseLease": {
        aminoType: string;
        toAmino: (message: import("./market/v1beta2/lease").MsgCloseLease) => import("./market/v1beta2/lease").MsgCloseLeaseAmino;
        fromAmino: (object: import("./market/v1beta2/lease").MsgCloseLeaseAmino) => import("./market/v1beta2/lease").MsgCloseLease;
    };
    "/akash.deployment.v1beta2.MsgCreateDeployment": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta2/deploymentmsg").MsgCreateDeployment) => import("./deployment/v1beta2/deploymentmsg").MsgCreateDeploymentAmino;
        fromAmino: (object: import("./deployment/v1beta2/deploymentmsg").MsgCreateDeploymentAmino) => import("./deployment/v1beta2/deploymentmsg").MsgCreateDeployment;
    };
    "/akash.deployment.v1beta2.MsgDepositDeployment": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta2/deploymentmsg").MsgDepositDeployment) => import("./deployment/v1beta2/deploymentmsg").MsgDepositDeploymentAmino;
        fromAmino: (object: import("./deployment/v1beta2/deploymentmsg").MsgDepositDeploymentAmino) => import("./deployment/v1beta2/deploymentmsg").MsgDepositDeployment;
    };
    "/akash.deployment.v1beta2.MsgUpdateDeployment": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta2/deploymentmsg").MsgUpdateDeployment) => import("./deployment/v1beta2/deploymentmsg").MsgUpdateDeploymentAmino;
        fromAmino: (object: import("./deployment/v1beta2/deploymentmsg").MsgUpdateDeploymentAmino) => import("./deployment/v1beta2/deploymentmsg").MsgUpdateDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseDeployment": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta2/deploymentmsg").MsgCloseDeployment) => import("./deployment/v1beta2/deploymentmsg").MsgCloseDeploymentAmino;
        fromAmino: (object: import("./deployment/v1beta2/deploymentmsg").MsgCloseDeploymentAmino) => import("./deployment/v1beta2/deploymentmsg").MsgCloseDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseGroup": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta2/groupmsg").MsgCloseGroup) => import("./deployment/v1beta2/groupmsg").MsgCloseGroupAmino;
        fromAmino: (object: import("./deployment/v1beta2/groupmsg").MsgCloseGroupAmino) => import("./deployment/v1beta2/groupmsg").MsgCloseGroup;
    };
    "/akash.deployment.v1beta2.MsgPauseGroup": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta2/groupmsg").MsgPauseGroup) => import("./deployment/v1beta2/groupmsg").MsgPauseGroupAmino;
        fromAmino: (object: import("./deployment/v1beta2/groupmsg").MsgPauseGroupAmino) => import("./deployment/v1beta2/groupmsg").MsgPauseGroup;
    };
    "/akash.deployment.v1beta2.MsgStartGroup": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta2/groupmsg").MsgStartGroup) => import("./deployment/v1beta2/groupmsg").MsgStartGroupAmino;
        fromAmino: (object: import("./deployment/v1beta2/groupmsg").MsgStartGroupAmino) => import("./deployment/v1beta2/groupmsg").MsgStartGroup;
    };
    "/akash.deployment.v1beta1.MsgCreateDeployment": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta1/deployment").MsgCreateDeployment) => import("./deployment/v1beta1/deployment").MsgCreateDeploymentAmino;
        fromAmino: (object: import("./deployment/v1beta1/deployment").MsgCreateDeploymentAmino) => import("./deployment/v1beta1/deployment").MsgCreateDeployment;
    };
    "/akash.deployment.v1beta1.MsgDepositDeployment": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta1/deployment").MsgDepositDeployment) => import("./deployment/v1beta1/deployment").MsgDepositDeploymentAmino;
        fromAmino: (object: import("./deployment/v1beta1/deployment").MsgDepositDeploymentAmino) => import("./deployment/v1beta1/deployment").MsgDepositDeployment;
    };
    "/akash.deployment.v1beta1.MsgUpdateDeployment": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta1/deployment").MsgUpdateDeployment) => import("./deployment/v1beta1/deployment").MsgUpdateDeploymentAmino;
        fromAmino: (object: import("./deployment/v1beta1/deployment").MsgUpdateDeploymentAmino) => import("./deployment/v1beta1/deployment").MsgUpdateDeployment;
    };
    "/akash.deployment.v1beta1.MsgCloseDeployment": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta1/deployment").MsgCloseDeployment) => import("./deployment/v1beta1/deployment").MsgCloseDeploymentAmino;
        fromAmino: (object: import("./deployment/v1beta1/deployment").MsgCloseDeploymentAmino) => import("./deployment/v1beta1/deployment").MsgCloseDeployment;
    };
    "/akash.deployment.v1beta1.MsgCloseGroup": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta1/group").MsgCloseGroup) => import("./deployment/v1beta1/group").MsgCloseGroupAmino;
        fromAmino: (object: import("./deployment/v1beta1/group").MsgCloseGroupAmino) => import("./deployment/v1beta1/group").MsgCloseGroup;
    };
    "/akash.deployment.v1beta1.MsgPauseGroup": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta1/group").MsgPauseGroup) => import("./deployment/v1beta1/group").MsgPauseGroupAmino;
        fromAmino: (object: import("./deployment/v1beta1/group").MsgPauseGroupAmino) => import("./deployment/v1beta1/group").MsgPauseGroup;
    };
    "/akash.deployment.v1beta1.MsgStartGroup": {
        aminoType: string;
        toAmino: (message: import("./deployment/v1beta1/group").MsgStartGroup) => import("./deployment/v1beta1/group").MsgStartGroupAmino;
        fromAmino: (object: import("./deployment/v1beta1/group").MsgStartGroupAmino) => import("./deployment/v1beta1/group").MsgStartGroup;
    };
    "/akash.cert.v1beta2.MsgCreateCertificate": {
        aminoType: string;
        toAmino: (message: import("./cert/v1beta2/cert").MsgCreateCertificate) => import("./cert/v1beta2/cert").MsgCreateCertificateAmino;
        fromAmino: (object: import("./cert/v1beta2/cert").MsgCreateCertificateAmino) => import("./cert/v1beta2/cert").MsgCreateCertificate;
    };
    "/akash.cert.v1beta2.MsgRevokeCertificate": {
        aminoType: string;
        toAmino: (message: import("./cert/v1beta2/cert").MsgRevokeCertificate) => import("./cert/v1beta2/cert").MsgRevokeCertificateAmino;
        fromAmino: (object: import("./cert/v1beta2/cert").MsgRevokeCertificateAmino) => import("./cert/v1beta2/cert").MsgRevokeCertificate;
    };
    "/akash.audit.v1beta2.MsgSignProviderAttributes": {
        aminoType: string;
        toAmino: (message: import("./audit/v1beta2/audit").MsgSignProviderAttributes) => import("./audit/v1beta2/audit").MsgSignProviderAttributesAmino;
        fromAmino: (object: import("./audit/v1beta2/audit").MsgSignProviderAttributesAmino) => import("./audit/v1beta2/audit").MsgSignProviderAttributes;
    };
    "/akash.audit.v1beta2.MsgDeleteProviderAttributes": {
        aminoType: string;
        toAmino: (message: import("./audit/v1beta2/audit").MsgDeleteProviderAttributes) => import("./audit/v1beta2/audit").MsgDeleteProviderAttributesAmino;
        fromAmino: (object: import("./audit/v1beta2/audit").MsgDeleteProviderAttributesAmino) => import("./audit/v1beta2/audit").MsgDeleteProviderAttributes;
    };
    "/akash.audit.v1beta1.MsgSignProviderAttributes": {
        aminoType: string;
        toAmino: (message: import("./audit/v1beta1/audit").MsgSignProviderAttributes) => import("./audit/v1beta1/audit").MsgSignProviderAttributesAmino;
        fromAmino: (object: import("./audit/v1beta1/audit").MsgSignProviderAttributesAmino) => import("./audit/v1beta1/audit").MsgSignProviderAttributes;
    };
    "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
        aminoType: string;
        toAmino: (message: import("./audit/v1beta1/audit").MsgDeleteProviderAttributes) => import("./audit/v1beta1/audit").MsgDeleteProviderAttributesAmino;
        fromAmino: (object: import("./audit/v1beta1/audit").MsgDeleteProviderAttributesAmino) => import("./audit/v1beta1/audit").MsgDeleteProviderAttributes;
    };
};
export declare const akashProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningAkashClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningAkashClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
