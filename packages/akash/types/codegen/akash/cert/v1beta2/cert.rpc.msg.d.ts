import { Rpc } from "../../../helpers";
import { MsgCreateCertificate, MsgCreateCertificateResponse, MsgRevokeCertificate, MsgRevokeCertificateResponse } from "./cert";
/** Msg defines the provider Msg service */
export interface Msg {
    /** CreateCertificate defines a method to create new certificate given proper inputs. */
    createCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
    /** RevokeCertificate defines a method to revoke the certificate */
    revokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
    revokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
}
