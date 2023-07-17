import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddAccountCertificate, MsgDeleteAccount, MsgDeleteAccountCertificate, MsgDeleteDomain, MsgRegisterAccount, MsgRegisterDomain, MsgRenewAccount, MsgRenewDomain, MsgReplaceAccountMetadata, MsgReplaceAccountResources, MsgTransferAccount, MsgTransferDomain } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/starnamed.x.starname.v1beta1.MsgAddAccountCertificate", MsgAddAccountCertificate], ["/starnamed.x.starname.v1beta1.MsgDeleteAccount", MsgDeleteAccount], ["/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate", MsgDeleteAccountCertificate], ["/starnamed.x.starname.v1beta1.MsgDeleteDomain", MsgDeleteDomain], ["/starnamed.x.starname.v1beta1.MsgRegisterAccount", MsgRegisterAccount], ["/starnamed.x.starname.v1beta1.MsgRegisterDomain", MsgRegisterDomain], ["/starnamed.x.starname.v1beta1.MsgRenewAccount", MsgRenewAccount], ["/starnamed.x.starname.v1beta1.MsgRenewDomain", MsgRenewDomain], ["/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata", MsgReplaceAccountMetadata], ["/starnamed.x.starname.v1beta1.MsgReplaceAccountResources", MsgReplaceAccountResources], ["/starnamed.x.starname.v1beta1.MsgTransferAccount", MsgTransferAccount], ["/starnamed.x.starname.v1beta1.MsgTransferDomain", MsgTransferDomain]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addAccountCertificate(value: MsgAddAccountCertificate) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate",
        value: MsgAddAccountCertificate.encode(value).finish()
      };
    },
    deleteAccount(value: MsgDeleteAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccount",
        value: MsgDeleteAccount.encode(value).finish()
      };
    },
    deleteAccountCertificate(value: MsgDeleteAccountCertificate) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate",
        value: MsgDeleteAccountCertificate.encode(value).finish()
      };
    },
    deleteDomain(value: MsgDeleteDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomain",
        value: MsgDeleteDomain.encode(value).finish()
      };
    },
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccount",
        value: MsgRegisterAccount.encode(value).finish()
      };
    },
    registerDomain(value: MsgRegisterDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomain",
        value: MsgRegisterDomain.encode(value).finish()
      };
    },
    renewAccount(value: MsgRenewAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccount",
        value: MsgRenewAccount.encode(value).finish()
      };
    },
    renewDomain(value: MsgRenewDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomain",
        value: MsgRenewDomain.encode(value).finish()
      };
    },
    replaceAccountMetadata(value: MsgReplaceAccountMetadata) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata",
        value: MsgReplaceAccountMetadata.encode(value).finish()
      };
    },
    replaceAccountResources(value: MsgReplaceAccountResources) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources",
        value: MsgReplaceAccountResources.encode(value).finish()
      };
    },
    transferAccount(value: MsgTransferAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccount",
        value: MsgTransferAccount.encode(value).finish()
      };
    },
    transferDomain(value: MsgTransferDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomain",
        value: MsgTransferDomain.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addAccountCertificate(value: MsgAddAccountCertificate) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate",
        value
      };
    },
    deleteAccount(value: MsgDeleteAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccount",
        value
      };
    },
    deleteAccountCertificate(value: MsgDeleteAccountCertificate) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate",
        value
      };
    },
    deleteDomain(value: MsgDeleteDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomain",
        value
      };
    },
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccount",
        value
      };
    },
    registerDomain(value: MsgRegisterDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomain",
        value
      };
    },
    renewAccount(value: MsgRenewAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccount",
        value
      };
    },
    renewDomain(value: MsgRenewDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomain",
        value
      };
    },
    replaceAccountMetadata(value: MsgReplaceAccountMetadata) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata",
        value
      };
    },
    replaceAccountResources(value: MsgReplaceAccountResources) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources",
        value
      };
    },
    transferAccount(value: MsgTransferAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccount",
        value
      };
    },
    transferDomain(value: MsgTransferDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomain",
        value
      };
    }
  },
  fromJSON: {
    addAccountCertificate(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate",
        value: MsgAddAccountCertificate.fromJSON(value)
      };
    },
    deleteAccount(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccount",
        value: MsgDeleteAccount.fromJSON(value)
      };
    },
    deleteAccountCertificate(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate",
        value: MsgDeleteAccountCertificate.fromJSON(value)
      };
    },
    deleteDomain(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomain",
        value: MsgDeleteDomain.fromJSON(value)
      };
    },
    registerAccount(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccount",
        value: MsgRegisterAccount.fromJSON(value)
      };
    },
    registerDomain(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomain",
        value: MsgRegisterDomain.fromJSON(value)
      };
    },
    renewAccount(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccount",
        value: MsgRenewAccount.fromJSON(value)
      };
    },
    renewDomain(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomain",
        value: MsgRenewDomain.fromJSON(value)
      };
    },
    replaceAccountMetadata(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata",
        value: MsgReplaceAccountMetadata.fromJSON(value)
      };
    },
    replaceAccountResources(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources",
        value: MsgReplaceAccountResources.fromJSON(value)
      };
    },
    transferAccount(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccount",
        value: MsgTransferAccount.fromJSON(value)
      };
    },
    transferDomain(value: any) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomain",
        value: MsgTransferDomain.fromJSON(value)
      };
    }
  },
  fromPartial: {
    addAccountCertificate(value: MsgAddAccountCertificate) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate",
        value: MsgAddAccountCertificate.fromPartial(value)
      };
    },
    deleteAccount(value: MsgDeleteAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccount",
        value: MsgDeleteAccount.fromPartial(value)
      };
    },
    deleteAccountCertificate(value: MsgDeleteAccountCertificate) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate",
        value: MsgDeleteAccountCertificate.fromPartial(value)
      };
    },
    deleteDomain(value: MsgDeleteDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomain",
        value: MsgDeleteDomain.fromPartial(value)
      };
    },
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccount",
        value: MsgRegisterAccount.fromPartial(value)
      };
    },
    registerDomain(value: MsgRegisterDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomain",
        value: MsgRegisterDomain.fromPartial(value)
      };
    },
    renewAccount(value: MsgRenewAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccount",
        value: MsgRenewAccount.fromPartial(value)
      };
    },
    renewDomain(value: MsgRenewDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomain",
        value: MsgRenewDomain.fromPartial(value)
      };
    },
    replaceAccountMetadata(value: MsgReplaceAccountMetadata) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata",
        value: MsgReplaceAccountMetadata.fromPartial(value)
      };
    },
    replaceAccountResources(value: MsgReplaceAccountResources) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources",
        value: MsgReplaceAccountResources.fromPartial(value)
      };
    },
    transferAccount(value: MsgTransferAccount) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccount",
        value: MsgTransferAccount.fromPartial(value)
      };
    },
    transferDomain(value: MsgTransferDomain) {
      return {
        typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomain",
        value: MsgTransferDomain.fromPartial(value)
      };
    }
  }
};