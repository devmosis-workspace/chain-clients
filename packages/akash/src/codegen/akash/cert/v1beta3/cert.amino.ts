import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export const AminoConverter = {
  "/akash.cert.v1beta3.MsgCreateCertificate": {
    aminoType: "/akash.cert.v1beta3.MsgCreateCertificate",
    toAmino: MsgCreateCertificate.toAmino,
    fromAmino: MsgCreateCertificate.fromAmino
  },
  "/akash.cert.v1beta3.MsgRevokeCertificate": {
    aminoType: "/akash.cert.v1beta3.MsgRevokeCertificate",
    toAmino: MsgRevokeCertificate.toAmino,
    fromAmino: MsgRevokeCertificate.fromAmino
  }
};