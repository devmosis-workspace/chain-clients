import { MsgProposeCertifier, MsgIssueCertificate, MsgRevokeCertificate, MsgCertifyPlatform } from "./tx";
export const AminoConverter = {
  "/shentu.cert.v1alpha1.MsgProposeCertifier": {
    aminoType: "/shentu.cert.v1alpha1.MsgProposeCertifier",
    toAmino: MsgProposeCertifier.toAmino,
    fromAmino: MsgProposeCertifier.fromAmino
  },
  "/shentu.cert.v1alpha1.MsgIssueCertificate": {
    aminoType: "/shentu.cert.v1alpha1.MsgIssueCertificate",
    toAmino: MsgIssueCertificate.toAmino,
    fromAmino: MsgIssueCertificate.fromAmino
  },
  "/shentu.cert.v1alpha1.MsgRevokeCertificate": {
    aminoType: "/shentu.cert.v1alpha1.MsgRevokeCertificate",
    toAmino: MsgRevokeCertificate.toAmino,
    fromAmino: MsgRevokeCertificate.fromAmino
  },
  "/shentu.cert.v1alpha1.MsgCertifyPlatform": {
    aminoType: "/shentu.cert.v1alpha1.MsgCertifyPlatform",
    toAmino: MsgCertifyPlatform.toAmino,
    fromAmino: MsgCertifyPlatform.fromAmino
  }
};