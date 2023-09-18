import { MsgAddAccountCertificate, MsgDeleteAccount, MsgDeleteAccountCertificate, MsgDeleteDomain, MsgRegisterAccount, MsgRegisterDomain, MsgRenewAccount, MsgRenewDomain, MsgReplaceAccountMetadata, MsgReplaceAccountResources, MsgTransferAccount, MsgTransferDomain } from "./tx";
export const AminoConverter = {
  "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate",
    toAmino: MsgAddAccountCertificate.toAmino,
    fromAmino: MsgAddAccountCertificate.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgDeleteAccount": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgDeleteAccount",
    toAmino: MsgDeleteAccount.toAmino,
    fromAmino: MsgDeleteAccount.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate",
    toAmino: MsgDeleteAccountCertificate.toAmino,
    fromAmino: MsgDeleteAccountCertificate.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgDeleteDomain": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgDeleteDomain",
    toAmino: MsgDeleteDomain.toAmino,
    fromAmino: MsgDeleteDomain.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgRegisterAccount": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgRegisterAccount",
    toAmino: MsgRegisterAccount.toAmino,
    fromAmino: MsgRegisterAccount.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgRegisterDomain": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgRegisterDomain",
    toAmino: MsgRegisterDomain.toAmino,
    fromAmino: MsgRegisterDomain.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgRenewAccount": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgRenewAccount",
    toAmino: MsgRenewAccount.toAmino,
    fromAmino: MsgRenewAccount.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgRenewDomain": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgRenewDomain",
    toAmino: MsgRenewDomain.toAmino,
    fromAmino: MsgRenewDomain.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata",
    toAmino: MsgReplaceAccountMetadata.toAmino,
    fromAmino: MsgReplaceAccountMetadata.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources",
    toAmino: MsgReplaceAccountResources.toAmino,
    fromAmino: MsgReplaceAccountResources.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgTransferAccount": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgTransferAccount",
    toAmino: MsgTransferAccount.toAmino,
    fromAmino: MsgTransferAccount.fromAmino
  },
  "/starnamed.x.starname.v1beta1.MsgTransferDomain": {
    aminoType: "/starnamed.x.starname.v1beta1.MsgTransferDomain",
    toAmino: MsgTransferDomain.toAmino,
    fromAmino: MsgTransferDomain.fromAmino
  }
};