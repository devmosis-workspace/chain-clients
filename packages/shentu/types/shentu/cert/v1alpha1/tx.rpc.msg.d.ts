import { Rpc } from "../../../helpers";
import { MsgProposeCertifier, MsgProposeCertifierResponse, MsgIssueCertificate, MsgIssueCertificateResponse, MsgRevokeCertificate, MsgRevokeCertificateResponse, MsgCertifyPlatform, MsgCertifyPlatformResponse } from "./tx";
/** Msg defines the shield Msg service. */
export interface Msg {
    proposeCertifier(request: MsgProposeCertifier): Promise<MsgProposeCertifierResponse>;
    issueCertificate(request: MsgIssueCertificate): Promise<MsgIssueCertificateResponse>;
    revokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
    certifyPlatform(request: MsgCertifyPlatform): Promise<MsgCertifyPlatformResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    proposeCertifier(request: MsgProposeCertifier): Promise<MsgProposeCertifierResponse>;
    issueCertificate(request: MsgIssueCertificate): Promise<MsgIssueCertificateResponse>;
    revokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
    certifyPlatform(request: MsgCertifyPlatform): Promise<MsgCertifyPlatformResponse>;
}
