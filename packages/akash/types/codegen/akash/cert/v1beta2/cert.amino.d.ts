import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export declare const AminoConverter: {
    "/akash.cert.v1beta2.MsgCreateCertificate": {
        aminoType: string;
        toAmino: (message: MsgCreateCertificate) => import("./cert").MsgCreateCertificateAmino;
        fromAmino: (object: import("./cert").MsgCreateCertificateAmino) => MsgCreateCertificate;
    };
    "/akash.cert.v1beta2.MsgRevokeCertificate": {
        aminoType: string;
        toAmino: (message: MsgRevokeCertificate) => import("./cert").MsgRevokeCertificateAmino;
        fromAmino: (object: import("./cert").MsgRevokeCertificateAmino) => MsgRevokeCertificate;
    };
};
