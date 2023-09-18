import { MsgAddAccountCertificate, MsgDeleteAccount, MsgDeleteAccountCertificate, MsgDeleteDomain, MsgRegisterAccount, MsgRegisterDomain, MsgRenewAccount, MsgRenewDomain, MsgReplaceAccountMetadata, MsgReplaceAccountResources, MsgTransferAccount, MsgTransferDomain } from "./tx";
export declare const AminoConverter: {
    "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate": {
        aminoType: string;
        toAmino: (message: MsgAddAccountCertificate) => import("./tx").MsgAddAccountCertificateAmino;
        fromAmino: (object: import("./tx").MsgAddAccountCertificateAmino) => MsgAddAccountCertificate;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteAccount": {
        aminoType: string;
        toAmino: (message: MsgDeleteAccount) => import("./tx").MsgDeleteAccountAmino;
        fromAmino: (object: import("./tx").MsgDeleteAccountAmino) => MsgDeleteAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate": {
        aminoType: string;
        toAmino: (message: MsgDeleteAccountCertificate) => import("./tx").MsgDeleteAccountCertificateAmino;
        fromAmino: (object: import("./tx").MsgDeleteAccountCertificateAmino) => MsgDeleteAccountCertificate;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteDomain": {
        aminoType: string;
        toAmino: (message: MsgDeleteDomain) => import("./tx").MsgDeleteDomainAmino;
        fromAmino: (object: import("./tx").MsgDeleteDomainAmino) => MsgDeleteDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: MsgRegisterAccount) => import("./tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("./tx").MsgRegisterAccountAmino) => MsgRegisterAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgRegisterDomain": {
        aminoType: string;
        toAmino: (message: MsgRegisterDomain) => import("./tx").MsgRegisterDomainAmino;
        fromAmino: (object: import("./tx").MsgRegisterDomainAmino) => MsgRegisterDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgRenewAccount": {
        aminoType: string;
        toAmino: (message: MsgRenewAccount) => import("./tx").MsgRenewAccountAmino;
        fromAmino: (object: import("./tx").MsgRenewAccountAmino) => MsgRenewAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgRenewDomain": {
        aminoType: string;
        toAmino: (message: MsgRenewDomain) => import("./tx").MsgRenewDomainAmino;
        fromAmino: (object: import("./tx").MsgRenewDomainAmino) => MsgRenewDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata": {
        aminoType: string;
        toAmino: (message: MsgReplaceAccountMetadata) => import("./tx").MsgReplaceAccountMetadataAmino;
        fromAmino: (object: import("./tx").MsgReplaceAccountMetadataAmino) => MsgReplaceAccountMetadata;
    };
    "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources": {
        aminoType: string;
        toAmino: (message: MsgReplaceAccountResources) => import("./tx").MsgReplaceAccountResourcesAmino;
        fromAmino: (object: import("./tx").MsgReplaceAccountResourcesAmino) => MsgReplaceAccountResources;
    };
    "/starnamed.x.starname.v1beta1.MsgTransferAccount": {
        aminoType: string;
        toAmino: (message: MsgTransferAccount) => import("./tx").MsgTransferAccountAmino;
        fromAmino: (object: import("./tx").MsgTransferAccountAmino) => MsgTransferAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgTransferDomain": {
        aminoType: string;
        toAmino: (message: MsgTransferDomain) => import("./tx").MsgTransferDomainAmino;
        fromAmino: (object: import("./tx").MsgTransferDomainAmino) => MsgTransferDomain;
    };
};
