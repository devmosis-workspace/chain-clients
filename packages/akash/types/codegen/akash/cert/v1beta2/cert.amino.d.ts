import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export interface MsgCreateCertificateAminoType extends AminoMsg {
    type: "/akash.cert.v1beta2.MsgCreateCertificate";
    value: {
        owner: string;
        cert: Uint8Array;
        pubkey: Uint8Array;
    };
}
export interface MsgRevokeCertificateAminoType extends AminoMsg {
    type: "/akash.cert.v1beta2.MsgRevokeCertificate";
    value: {
        id: {
            owner: string;
            serial: string;
        };
    };
}
export declare const AminoConverter: {
    "/akash.cert.v1beta2.MsgCreateCertificate": {
        aminoType: string;
        toAmino: ({ owner, cert, pubkey }: MsgCreateCertificate) => MsgCreateCertificateAminoType["value"];
        fromAmino: ({ owner, cert, pubkey }: MsgCreateCertificateAminoType["value"]) => MsgCreateCertificate;
    };
    "/akash.cert.v1beta2.MsgRevokeCertificate": {
        aminoType: string;
        toAmino: ({ id }: MsgRevokeCertificate) => MsgRevokeCertificateAminoType["value"];
        fromAmino: ({ id }: MsgRevokeCertificateAminoType["value"]) => MsgRevokeCertificate;
    };
};
