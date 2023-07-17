import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgAddAccountCertificate, MsgAddAccountCertificateResponse, MsgDeleteAccount, MsgDeleteAccountResponse, MsgDeleteAccountCertificate, MsgDeleteAccountCertificateResponse, MsgDeleteDomain, MsgDeleteDomainResponse, MsgRegisterAccount, MsgRegisterAccountResponse, MsgRegisterDomain, MsgRegisterDomainResponse, MsgRenewAccount, MsgRenewAccountResponse, MsgRenewDomain, MsgRenewDomainResponse, MsgReplaceAccountMetadata, MsgReplaceAccountMetadataResponse, MsgReplaceAccountResources, MsgReplaceAccountResourcesResponse, MsgTransferAccount, MsgTransferAccountResponse, MsgTransferDomain, MsgTransferDomainResponse } from "./tx";
/** Msg defines the starname Msg service. */
export interface Msg {
  /** AddAccountCertificate adds a certificate to an Account */
  addAccountCertificate(request: MsgAddAccountCertificate): Promise<MsgAddAccountCertificateResponse>;
  /** DeleteAccount registers a Domain */
  deleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse>;
  /** DeleteAccountCertificate deletes a certificate from an account */
  deleteAccountCertificate(request: MsgDeleteAccountCertificate): Promise<MsgDeleteAccountCertificateResponse>;
  /** DeleteDomain registers a Domain */
  deleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse>;
  /** RegisterAccount registers an Account */
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
  /** RegisterDomain registers a Domain */
  registerDomain(request: MsgRegisterDomain): Promise<MsgRegisterDomainResponse>;
  /** RenewAccount registers a Domain */
  renewAccount(request: MsgRenewAccount): Promise<MsgRenewAccountResponse>;
  /** RenewDomain registers a Domain */
  renewDomain(request: MsgRenewDomain): Promise<MsgRenewDomainResponse>;
  /** ReplaceAccountMetadata registers a Domain */
  replaceAccountMetadata(request: MsgReplaceAccountMetadata): Promise<MsgReplaceAccountMetadataResponse>;
  /** ReplaceAccountResources registers a Domain */
  replaceAccountResources(request: MsgReplaceAccountResources): Promise<MsgReplaceAccountResourcesResponse>;
  /** TransferAccount registers a Domain */
  transferAccount(request: MsgTransferAccount): Promise<MsgTransferAccountResponse>;
  /** TransferDomain registers a Domain */
  transferDomain(request: MsgTransferDomain): Promise<MsgTransferDomainResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addAccountCertificate = this.addAccountCertificate.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
    this.deleteAccountCertificate = this.deleteAccountCertificate.bind(this);
    this.deleteDomain = this.deleteDomain.bind(this);
    this.registerAccount = this.registerAccount.bind(this);
    this.registerDomain = this.registerDomain.bind(this);
    this.renewAccount = this.renewAccount.bind(this);
    this.renewDomain = this.renewDomain.bind(this);
    this.replaceAccountMetadata = this.replaceAccountMetadata.bind(this);
    this.replaceAccountResources = this.replaceAccountResources.bind(this);
    this.transferAccount = this.transferAccount.bind(this);
    this.transferDomain = this.transferDomain.bind(this);
  }
  addAccountCertificate(request: MsgAddAccountCertificate): Promise<MsgAddAccountCertificateResponse> {
    const data = MsgAddAccountCertificate.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "AddAccountCertificate", data);
    return promise.then(data => MsgAddAccountCertificateResponse.decode(new _m0.Reader(data)));
  }
  deleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse> {
    const data = MsgDeleteAccount.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "DeleteAccount", data);
    return promise.then(data => MsgDeleteAccountResponse.decode(new _m0.Reader(data)));
  }
  deleteAccountCertificate(request: MsgDeleteAccountCertificate): Promise<MsgDeleteAccountCertificateResponse> {
    const data = MsgDeleteAccountCertificate.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "DeleteAccountCertificate", data);
    return promise.then(data => MsgDeleteAccountCertificateResponse.decode(new _m0.Reader(data)));
  }
  deleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse> {
    const data = MsgDeleteDomain.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "DeleteDomain", data);
    return promise.then(data => MsgDeleteDomainResponse.decode(new _m0.Reader(data)));
  }
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse> {
    const data = MsgRegisterAccount.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "RegisterAccount", data);
    return promise.then(data => MsgRegisterAccountResponse.decode(new _m0.Reader(data)));
  }
  registerDomain(request: MsgRegisterDomain): Promise<MsgRegisterDomainResponse> {
    const data = MsgRegisterDomain.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "RegisterDomain", data);
    return promise.then(data => MsgRegisterDomainResponse.decode(new _m0.Reader(data)));
  }
  renewAccount(request: MsgRenewAccount): Promise<MsgRenewAccountResponse> {
    const data = MsgRenewAccount.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "RenewAccount", data);
    return promise.then(data => MsgRenewAccountResponse.decode(new _m0.Reader(data)));
  }
  renewDomain(request: MsgRenewDomain): Promise<MsgRenewDomainResponse> {
    const data = MsgRenewDomain.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "RenewDomain", data);
    return promise.then(data => MsgRenewDomainResponse.decode(new _m0.Reader(data)));
  }
  replaceAccountMetadata(request: MsgReplaceAccountMetadata): Promise<MsgReplaceAccountMetadataResponse> {
    const data = MsgReplaceAccountMetadata.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "ReplaceAccountMetadata", data);
    return promise.then(data => MsgReplaceAccountMetadataResponse.decode(new _m0.Reader(data)));
  }
  replaceAccountResources(request: MsgReplaceAccountResources): Promise<MsgReplaceAccountResourcesResponse> {
    const data = MsgReplaceAccountResources.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "ReplaceAccountResources", data);
    return promise.then(data => MsgReplaceAccountResourcesResponse.decode(new _m0.Reader(data)));
  }
  transferAccount(request: MsgTransferAccount): Promise<MsgTransferAccountResponse> {
    const data = MsgTransferAccount.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "TransferAccount", data);
    return promise.then(data => MsgTransferAccountResponse.decode(new _m0.Reader(data)));
  }
  transferDomain(request: MsgTransferDomain): Promise<MsgTransferDomainResponse> {
    const data = MsgTransferDomain.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.starname.v1beta1.Msg", "TransferDomain", data);
    return promise.then(data => MsgTransferDomainResponse.decode(new _m0.Reader(data)));
  }
}