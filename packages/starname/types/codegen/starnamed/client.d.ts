import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const starnamedAminoConverters: {
    "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgAddAccountCertificate) => import("../iov/starname/v1beta1/tx").MsgAddAccountCertificateAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgAddAccountCertificateAmino) => import("../iov/starname/v1beta1/tx").MsgAddAccountCertificate;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteAccount": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgDeleteAccount) => import("../iov/starname/v1beta1/tx").MsgDeleteAccountAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgDeleteAccountAmino) => import("../iov/starname/v1beta1/tx").MsgDeleteAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgDeleteAccountCertificate) => import("../iov/starname/v1beta1/tx").MsgDeleteAccountCertificateAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgDeleteAccountCertificateAmino) => import("../iov/starname/v1beta1/tx").MsgDeleteAccountCertificate;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteDomain": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgDeleteDomain) => import("../iov/starname/v1beta1/tx").MsgDeleteDomainAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgDeleteDomainAmino) => import("../iov/starname/v1beta1/tx").MsgDeleteDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgRegisterAccount) => import("../iov/starname/v1beta1/tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgRegisterAccountAmino) => import("../iov/starname/v1beta1/tx").MsgRegisterAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgRegisterDomain": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgRegisterDomain) => import("../iov/starname/v1beta1/tx").MsgRegisterDomainAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgRegisterDomainAmino) => import("../iov/starname/v1beta1/tx").MsgRegisterDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgRenewAccount": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgRenewAccount) => import("../iov/starname/v1beta1/tx").MsgRenewAccountAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgRenewAccountAmino) => import("../iov/starname/v1beta1/tx").MsgRenewAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgRenewDomain": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgRenewDomain) => import("../iov/starname/v1beta1/tx").MsgRenewDomainAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgRenewDomainAmino) => import("../iov/starname/v1beta1/tx").MsgRenewDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgReplaceAccountMetadata) => import("../iov/starname/v1beta1/tx").MsgReplaceAccountMetadataAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgReplaceAccountMetadataAmino) => import("../iov/starname/v1beta1/tx").MsgReplaceAccountMetadata;
    };
    "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgReplaceAccountResources) => import("../iov/starname/v1beta1/tx").MsgReplaceAccountResourcesAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgReplaceAccountResourcesAmino) => import("../iov/starname/v1beta1/tx").MsgReplaceAccountResources;
    };
    "/starnamed.x.starname.v1beta1.MsgTransferAccount": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgTransferAccount) => import("../iov/starname/v1beta1/tx").MsgTransferAccountAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgTransferAccountAmino) => import("../iov/starname/v1beta1/tx").MsgTransferAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgTransferDomain": {
        aminoType: string;
        toAmino: (message: import("../iov/starname/v1beta1/tx").MsgTransferDomain) => import("../iov/starname/v1beta1/tx").MsgTransferDomainAmino;
        fromAmino: (object: import("../iov/starname/v1beta1/tx").MsgTransferDomainAmino) => import("../iov/starname/v1beta1/tx").MsgTransferDomain;
    };
    "/starnamed.x.escrow.v1beta1.MsgCreateEscrow": {
        aminoType: string;
        toAmino: (message: import("../iov/escrow/v1beta1/tx").MsgCreateEscrow) => import("../iov/escrow/v1beta1/tx").MsgCreateEscrowAmino;
        fromAmino: (object: import("../iov/escrow/v1beta1/tx").MsgCreateEscrowAmino) => import("../iov/escrow/v1beta1/tx").MsgCreateEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow": {
        aminoType: string;
        toAmino: (message: import("../iov/escrow/v1beta1/tx").MsgUpdateEscrow) => import("../iov/escrow/v1beta1/tx").MsgUpdateEscrowAmino;
        fromAmino: (object: import("../iov/escrow/v1beta1/tx").MsgUpdateEscrowAmino) => import("../iov/escrow/v1beta1/tx").MsgUpdateEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow": {
        aminoType: string;
        toAmino: (message: import("../iov/escrow/v1beta1/tx").MsgTransferToEscrow) => import("../iov/escrow/v1beta1/tx").MsgTransferToEscrowAmino;
        fromAmino: (object: import("../iov/escrow/v1beta1/tx").MsgTransferToEscrowAmino) => import("../iov/escrow/v1beta1/tx").MsgTransferToEscrow;
    };
    "/starnamed.x.escrow.v1beta1.MsgRefundEscrow": {
        aminoType: string;
        toAmino: (message: import("../iov/escrow/v1beta1/tx").MsgRefundEscrow) => import("../iov/escrow/v1beta1/tx").MsgRefundEscrowAmino;
        fromAmino: (object: import("../iov/escrow/v1beta1/tx").MsgRefundEscrowAmino) => import("../iov/escrow/v1beta1/tx").MsgRefundEscrow;
    };
};
export declare const starnamedProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningStarnamedClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningStarnamedClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
