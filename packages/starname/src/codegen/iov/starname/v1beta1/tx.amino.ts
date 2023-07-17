import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate",
    toAmino: ({
      domain,
      name,
      owner,
      payer,
      newCertificate
    }: MsgAddAccountCertificate): MsgAddAccountCertificateAminoType["value"] => {
      return {
        domain,
        name,
        owner,
        payer,
        new_certificate: newCertificate
      };
    },
    fromAmino: ({
      domain,
      name,
      owner,
      payer,
      new_certificate
    }: MsgAddAccountCertificateAminoType["value"]): MsgAddAccountCertificate => {
      return {
        domain,
        name,
        owner,
        payer,
        newCertificate: new_certificate
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgDeleteAccount": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgDeleteAccount",
    toAmino: ({
      domain,
      name,
      owner,
      payer
    }: MsgDeleteAccount): MsgDeleteAccountAminoType["value"] => {
      return {
        domain,
        name,
        owner,
        payer
      };
    },
    fromAmino: ({
      domain,
      name,
      owner,
      payer
    }: MsgDeleteAccountAminoType["value"]): MsgDeleteAccount => {
      return {
        domain,
        name,
        owner,
        payer
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate",
    toAmino: ({
      domain,
      name,
      owner,
      payer,
      deleteCertificate
    }: MsgDeleteAccountCertificate): MsgDeleteAccountCertificateAminoType["value"] => {
      return {
        domain,
        name,
        owner,
        payer,
        delete_certificate: deleteCertificate
      };
    },
    fromAmino: ({
      domain,
      name,
      owner,
      payer,
      delete_certificate
    }: MsgDeleteAccountCertificateAminoType["value"]): MsgDeleteAccountCertificate => {
      return {
        domain,
        name,
        owner,
        payer,
        deleteCertificate: delete_certificate
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgDeleteDomain": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgDeleteDomain",
    toAmino: ({
      domain,
      owner,
      payer
    }: MsgDeleteDomain): MsgDeleteDomainAminoType["value"] => {
      return {
        domain,
        owner,
        payer
      };
    },
    fromAmino: ({
      domain,
      owner,
      payer
    }: MsgDeleteDomainAminoType["value"]): MsgDeleteDomain => {
      return {
        domain,
        owner,
        payer
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgRegisterAccount": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgRegisterAccount",
    toAmino: ({
      domain,
      name,
      owner,
      payer,
      broker,
      registerer,
      resources
    }: MsgRegisterAccount): MsgRegisterAccountAminoType["value"] => {
      return {
        domain,
        name,
        owner,
        payer,
        broker,
        registerer,
        resources: resources.map(el0 => ({
          uri: el0.uri,
          resource: el0.resource
        }))
      };
    },
    fromAmino: ({
      domain,
      name,
      owner,
      payer,
      broker,
      registerer,
      resources
    }: MsgRegisterAccountAminoType["value"]): MsgRegisterAccount => {
      return {
        domain,
        name,
        owner,
        payer,
        broker,
        registerer,
        resources: resources.map(el0 => ({
          uri: el0.uri,
          resource: el0.resource
        }))
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgRegisterDomain": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgRegisterDomain",
    toAmino: ({
      name,
      admin,
      payer,
      broker,
      domainType
    }: MsgRegisterDomain): MsgRegisterDomainAminoType["value"] => {
      return {
        name,
        admin,
        payer,
        broker,
        domain_type: domainType
      };
    },
    fromAmino: ({
      name,
      admin,
      payer,
      broker,
      domain_type
    }: MsgRegisterDomainAminoType["value"]): MsgRegisterDomain => {
      return {
        name,
        admin,
        payer,
        broker,
        domainType: domain_type
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgRenewAccount": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgRenewAccount",
    toAmino: ({
      domain,
      name,
      signer,
      payer
    }: MsgRenewAccount): MsgRenewAccountAminoType["value"] => {
      return {
        domain,
        name,
        signer,
        payer
      };
    },
    fromAmino: ({
      domain,
      name,
      signer,
      payer
    }: MsgRenewAccountAminoType["value"]): MsgRenewAccount => {
      return {
        domain,
        name,
        signer,
        payer
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgRenewDomain": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgRenewDomain",
    toAmino: ({
      domain,
      signer,
      payer
    }: MsgRenewDomain): MsgRenewDomainAminoType["value"] => {
      return {
        domain,
        signer,
        payer
      };
    },
    fromAmino: ({
      domain,
      signer,
      payer
    }: MsgRenewDomainAminoType["value"]): MsgRenewDomain => {
      return {
        domain,
        signer,
        payer
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata",
    toAmino: ({
      domain,
      name,
      owner,
      payer,
      newMetadataUri
    }: MsgReplaceAccountMetadata): MsgReplaceAccountMetadataAminoType["value"] => {
      return {
        domain,
        name,
        owner,
        payer,
        new_metadata_uri: newMetadataUri
      };
    },
    fromAmino: ({
      domain,
      name,
      owner,
      payer,
      new_metadata_uri
    }: MsgReplaceAccountMetadataAminoType["value"]): MsgReplaceAccountMetadata => {
      return {
        domain,
        name,
        owner,
        payer,
        newMetadataUri: new_metadata_uri
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources",
    toAmino: ({
      domain,
      name,
      owner,
      payer,
      newResources
    }: MsgReplaceAccountResources): MsgReplaceAccountResourcesAminoType["value"] => {
      return {
        domain,
        name,
        owner,
        payer,
        new_resources: newResources.map(el0 => ({
          uri: el0.uri,
          resource: el0.resource
        }))
      };
    },
    fromAmino: ({
      domain,
      name,
      owner,
      payer,
      new_resources
    }: MsgReplaceAccountResourcesAminoType["value"]): MsgReplaceAccountResources => {
      return {
        domain,
        name,
        owner,
        payer,
        newResources: new_resources.map(el0 => ({
          uri: el0.uri,
          resource: el0.resource
        }))
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgTransferAccount": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgTransferAccount",
    toAmino: ({
      domain,
      name,
      owner,
      payer,
      newOwner,
      reset
    }: MsgTransferAccount): MsgTransferAccountAminoType["value"] => {
      return {
        domain,
        name,
        owner,
        payer,
        new_owner: newOwner,
        reset
      };
    },
    fromAmino: ({
      domain,
      name,
      owner,
      payer,
      new_owner,
      reset
    }: MsgTransferAccountAminoType["value"]): MsgTransferAccount => {
      return {
        domain,
        name,
        owner,
        payer,
        newOwner: new_owner,
        reset
      };
    }
  },
  "/starnamed.x.starname.v1beta1.MsgTransferDomain": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgTransferDomain",
    toAmino: ({
      domain,
      owner,
      payer,
      newAdmin,
      transferFlag
    }: MsgTransferDomain): MsgTransferDomainAminoType["value"] => {
      return {
        domain,
        owner,
        payer,
        new_admin: newAdmin,
        transfer_flag: transferFlag.toString()
      };
    },
    fromAmino: ({
      domain,
      owner,
      payer,
      new_admin,
      transfer_flag
    }: MsgTransferDomainAminoType["value"]): MsgTransferDomain => {
      return {
        domain,
        owner,
        payer,
        newAdmin: new_admin,
        transferFlag: Long.fromString(transfer_flag)
      };
    }
  }
};