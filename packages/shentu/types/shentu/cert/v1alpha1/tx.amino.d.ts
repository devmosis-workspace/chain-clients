import { MsgProposeCertifier, MsgIssueCertificate, MsgRevokeCertificate, MsgCertifyPlatform } from "./tx";
export declare const AminoConverter: {
    "/shentu.cert.v1alpha1.MsgProposeCertifier": {
        aminoType: string;
        toAmino: (message: MsgProposeCertifier) => import("./tx").MsgProposeCertifierAmino;
        fromAmino: (object: import("./tx").MsgProposeCertifierAmino) => MsgProposeCertifier;
    };
    "/shentu.cert.v1alpha1.MsgIssueCertificate": {
        aminoType: string;
        toAmino: (message: MsgIssueCertificate) => import("./tx").MsgIssueCertificateAmino;
        fromAmino: (object: import("./tx").MsgIssueCertificateAmino) => MsgIssueCertificate;
    };
    "/shentu.cert.v1alpha1.MsgRevokeCertificate": {
        aminoType: string;
        toAmino: (message: MsgRevokeCertificate) => import("./tx").MsgRevokeCertificateAmino;
        fromAmino: (object: import("./tx").MsgRevokeCertificateAmino) => MsgRevokeCertificate;
    };
    "/shentu.cert.v1alpha1.MsgCertifyPlatform": {
        aminoType: string;
        toAmino: (message: MsgCertifyPlatform) => import("./tx").MsgCertifyPlatformAmino;
        fromAmino: (object: import("./tx").MsgCertifyPlatformAmino) => MsgCertifyPlatform;
    };
};
