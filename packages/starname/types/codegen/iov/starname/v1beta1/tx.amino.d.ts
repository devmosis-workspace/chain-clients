import { AminoMsg } from "@cosmjs/amino";
import { MsgAddAccountCertificate, MsgDeleteAccount, MsgDeleteAccountCertificate, MsgDeleteDomain, MsgRegisterAccount, MsgRegisterDomain, MsgRenewAccount, MsgRenewDomain, MsgReplaceAccountMetadata, MsgReplaceAccountResources, MsgTransferAccount, MsgTransferDomain } from "./tx";
export interface MsgAddAccountCertificateAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate";
    value: {
        domain: string;
        name: string;
        owner: string;
        payer: string;
        new_certificate: Uint8Array;
    };
}
export interface MsgDeleteAccountAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgDeleteAccount";
    value: {
        domain: string;
        name: string;
        owner: string;
        payer: string;
    };
}
export interface MsgDeleteAccountCertificateAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate";
    value: {
        domain: string;
        name: string;
        owner: string;
        payer: string;
        delete_certificate: Uint8Array;
    };
}
export interface MsgDeleteDomainAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgDeleteDomain";
    value: {
        domain: string;
        owner: string;
        payer: string;
    };
}
export interface MsgRegisterAccountAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRegisterAccount";
    value: {
        domain: string;
        name: string;
        owner: string;
        payer: string;
        broker: string;
        registerer: string;
        resources: {
            uri: string;
            resource: string;
        }[];
    };
}
export interface MsgRegisterDomainAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRegisterDomain";
    value: {
        name: string;
        admin: string;
        payer: string;
        broker: string;
        domain_type: string;
    };
}
export interface MsgRenewAccountAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRenewAccount";
    value: {
        domain: string;
        name: string;
        signer: string;
        payer: string;
    };
}
export interface MsgRenewDomainAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRenewDomain";
    value: {
        domain: string;
        signer: string;
        payer: string;
    };
}
export interface MsgReplaceAccountMetadataAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata";
    value: {
        domain: string;
        name: string;
        owner: string;
        payer: string;
        new_metadata_uri: string;
    };
}
export interface MsgReplaceAccountResourcesAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources";
    value: {
        domain: string;
        name: string;
        owner: string;
        payer: string;
        new_resources: {
            uri: string;
            resource: string;
        }[];
    };
}
export interface MsgTransferAccountAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgTransferAccount";
    value: {
        domain: string;
        name: string;
        owner: string;
        payer: string;
        new_owner: string;
        reset: boolean;
    };
}
export interface MsgTransferDomainAminoType extends AminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgTransferDomain";
    value: {
        domain: string;
        owner: string;
        payer: string;
        new_admin: string;
        transfer_flag: string;
    };
}
export declare const AminoConverter: {
    "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, newCertificate }: MsgAddAccountCertificate) => MsgAddAccountCertificateAminoType["value"];
        fromAmino: ({ domain, name, owner, payer, new_certificate }: MsgAddAccountCertificateAminoType["value"]) => MsgAddAccountCertificate;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteAccount": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer }: MsgDeleteAccount) => MsgDeleteAccountAminoType["value"];
        fromAmino: ({ domain, name, owner, payer }: MsgDeleteAccountAminoType["value"]) => MsgDeleteAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, deleteCertificate }: MsgDeleteAccountCertificate) => MsgDeleteAccountCertificateAminoType["value"];
        fromAmino: ({ domain, name, owner, payer, delete_certificate }: MsgDeleteAccountCertificateAminoType["value"]) => MsgDeleteAccountCertificate;
    };
    "/starnamed.x.starname.v1beta1.MsgDeleteDomain": {
        aminoType: string;
        toAmino: ({ domain, owner, payer }: MsgDeleteDomain) => MsgDeleteDomainAminoType["value"];
        fromAmino: ({ domain, owner, payer }: MsgDeleteDomainAminoType["value"]) => MsgDeleteDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, broker, registerer, resources }: MsgRegisterAccount) => MsgRegisterAccountAminoType["value"];
        fromAmino: ({ domain, name, owner, payer, broker, registerer, resources }: MsgRegisterAccountAminoType["value"]) => MsgRegisterAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgRegisterDomain": {
        aminoType: string;
        toAmino: ({ name, admin, payer, broker, domainType }: MsgRegisterDomain) => MsgRegisterDomainAminoType["value"];
        fromAmino: ({ name, admin, payer, broker, domain_type }: MsgRegisterDomainAminoType["value"]) => MsgRegisterDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgRenewAccount": {
        aminoType: string;
        toAmino: ({ domain, name, signer, payer }: MsgRenewAccount) => MsgRenewAccountAminoType["value"];
        fromAmino: ({ domain, name, signer, payer }: MsgRenewAccountAminoType["value"]) => MsgRenewAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgRenewDomain": {
        aminoType: string;
        toAmino: ({ domain, signer, payer }: MsgRenewDomain) => MsgRenewDomainAminoType["value"];
        fromAmino: ({ domain, signer, payer }: MsgRenewDomainAminoType["value"]) => MsgRenewDomain;
    };
    "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, newMetadataUri }: MsgReplaceAccountMetadata) => MsgReplaceAccountMetadataAminoType["value"];
        fromAmino: ({ domain, name, owner, payer, new_metadata_uri }: MsgReplaceAccountMetadataAminoType["value"]) => MsgReplaceAccountMetadata;
    };
    "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, newResources }: MsgReplaceAccountResources) => MsgReplaceAccountResourcesAminoType["value"];
        fromAmino: ({ domain, name, owner, payer, new_resources }: MsgReplaceAccountResourcesAminoType["value"]) => MsgReplaceAccountResources;
    };
    "/starnamed.x.starname.v1beta1.MsgTransferAccount": {
        aminoType: string;
        toAmino: ({ domain, name, owner, payer, newOwner, reset }: MsgTransferAccount) => MsgTransferAccountAminoType["value"];
        fromAmino: ({ domain, name, owner, payer, new_owner, reset }: MsgTransferAccountAminoType["value"]) => MsgTransferAccount;
    };
    "/starnamed.x.starname.v1beta1.MsgTransferDomain": {
        aminoType: string;
        toAmino: ({ domain, owner, payer, newAdmin, transferFlag }: MsgTransferDomain) => MsgTransferDomainAminoType["value"];
        fromAmino: ({ domain, owner, payer, new_admin, transfer_flag }: MsgTransferDomainAminoType["value"]) => MsgTransferDomain;
    };
};
