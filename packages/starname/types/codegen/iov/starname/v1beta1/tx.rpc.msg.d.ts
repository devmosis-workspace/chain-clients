import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addAccountCertificate(request: MsgAddAccountCertificate): Promise<MsgAddAccountCertificateResponse>;
    deleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse>;
    deleteAccountCertificate(request: MsgDeleteAccountCertificate): Promise<MsgDeleteAccountCertificateResponse>;
    deleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse>;
    registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
    registerDomain(request: MsgRegisterDomain): Promise<MsgRegisterDomainResponse>;
    renewAccount(request: MsgRenewAccount): Promise<MsgRenewAccountResponse>;
    renewDomain(request: MsgRenewDomain): Promise<MsgRenewDomainResponse>;
    replaceAccountMetadata(request: MsgReplaceAccountMetadata): Promise<MsgReplaceAccountMetadataResponse>;
    replaceAccountResources(request: MsgReplaceAccountResources): Promise<MsgReplaceAccountResourcesResponse>;
    transferAccount(request: MsgTransferAccount): Promise<MsgTransferAccountResponse>;
    transferDomain(request: MsgTransferDomain): Promise<MsgTransferDomainResponse>;
}
