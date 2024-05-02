import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgProposeCertifier, MsgProposeCertifierResponse, MsgIssueCertificate, MsgIssueCertificateResponse, MsgRevokeCertificate, MsgRevokeCertificateResponse, MsgCertifyPlatform, MsgCertifyPlatformResponse } from "./tx";
/** Msg defines the shield Msg service. */
export interface Msg {
  proposeCertifier(request: MsgProposeCertifier): Promise<MsgProposeCertifierResponse>;
  issueCertificate(request: MsgIssueCertificate): Promise<MsgIssueCertificateResponse>;
  revokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
  certifyPlatform(request: MsgCertifyPlatform): Promise<MsgCertifyPlatformResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.proposeCertifier = this.proposeCertifier.bind(this);
    this.issueCertificate = this.issueCertificate.bind(this);
    this.revokeCertificate = this.revokeCertificate.bind(this);
    this.certifyPlatform = this.certifyPlatform.bind(this);
  }
  proposeCertifier(request: MsgProposeCertifier): Promise<MsgProposeCertifierResponse> {
    const data = MsgProposeCertifier.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Msg", "ProposeCertifier", data);
    return promise.then(data => MsgProposeCertifierResponse.decode(new BinaryReader(data)));
  }
  issueCertificate(request: MsgIssueCertificate): Promise<MsgIssueCertificateResponse> {
    const data = MsgIssueCertificate.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Msg", "IssueCertificate", data);
    return promise.then(data => MsgIssueCertificateResponse.decode(new BinaryReader(data)));
  }
  revokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse> {
    const data = MsgRevokeCertificate.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Msg", "RevokeCertificate", data);
    return promise.then(data => MsgRevokeCertificateResponse.decode(new BinaryReader(data)));
  }
  certifyPlatform(request: MsgCertifyPlatform): Promise<MsgCertifyPlatformResponse> {
    const data = MsgCertifyPlatform.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Msg", "CertifyPlatform", data);
    return promise.then(data => MsgCertifyPlatformResponse.decode(new BinaryReader(data)));
  }
}