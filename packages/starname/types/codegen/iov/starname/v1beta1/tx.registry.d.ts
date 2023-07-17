import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddAccountCertificate, MsgDeleteAccount, MsgDeleteAccountCertificate, MsgDeleteDomain, MsgRegisterAccount, MsgRegisterDomain, MsgRenewAccount, MsgRenewDomain, MsgReplaceAccountMetadata, MsgReplaceAccountResources, MsgTransferAccount, MsgTransferDomain } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addAccountCertificate(value: MsgAddAccountCertificate): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteAccount(value: MsgDeleteAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteAccountCertificate(value: MsgDeleteAccountCertificate): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteDomain(value: MsgDeleteDomain): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerAccount(value: MsgRegisterAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerDomain(value: MsgRegisterDomain): {
            typeUrl: string;
            value: Uint8Array;
        };
        renewAccount(value: MsgRenewAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        renewDomain(value: MsgRenewDomain): {
            typeUrl: string;
            value: Uint8Array;
        };
        replaceAccountMetadata(value: MsgReplaceAccountMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        replaceAccountResources(value: MsgReplaceAccountResources): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferAccount(value: MsgTransferAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferDomain(value: MsgTransferDomain): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addAccountCertificate(value: MsgAddAccountCertificate): {
            typeUrl: string;
            value: MsgAddAccountCertificate;
        };
        deleteAccount(value: MsgDeleteAccount): {
            typeUrl: string;
            value: MsgDeleteAccount;
        };
        deleteAccountCertificate(value: MsgDeleteAccountCertificate): {
            typeUrl: string;
            value: MsgDeleteAccountCertificate;
        };
        deleteDomain(value: MsgDeleteDomain): {
            typeUrl: string;
            value: MsgDeleteDomain;
        };
        registerAccount(value: MsgRegisterAccount): {
            typeUrl: string;
            value: MsgRegisterAccount;
        };
        registerDomain(value: MsgRegisterDomain): {
            typeUrl: string;
            value: MsgRegisterDomain;
        };
        renewAccount(value: MsgRenewAccount): {
            typeUrl: string;
            value: MsgRenewAccount;
        };
        renewDomain(value: MsgRenewDomain): {
            typeUrl: string;
            value: MsgRenewDomain;
        };
        replaceAccountMetadata(value: MsgReplaceAccountMetadata): {
            typeUrl: string;
            value: MsgReplaceAccountMetadata;
        };
        replaceAccountResources(value: MsgReplaceAccountResources): {
            typeUrl: string;
            value: MsgReplaceAccountResources;
        };
        transferAccount(value: MsgTransferAccount): {
            typeUrl: string;
            value: MsgTransferAccount;
        };
        transferDomain(value: MsgTransferDomain): {
            typeUrl: string;
            value: MsgTransferDomain;
        };
    };
    fromJSON: {
        addAccountCertificate(value: any): {
            typeUrl: string;
            value: MsgAddAccountCertificate;
        };
        deleteAccount(value: any): {
            typeUrl: string;
            value: MsgDeleteAccount;
        };
        deleteAccountCertificate(value: any): {
            typeUrl: string;
            value: MsgDeleteAccountCertificate;
        };
        deleteDomain(value: any): {
            typeUrl: string;
            value: MsgDeleteDomain;
        };
        registerAccount(value: any): {
            typeUrl: string;
            value: MsgRegisterAccount;
        };
        registerDomain(value: any): {
            typeUrl: string;
            value: MsgRegisterDomain;
        };
        renewAccount(value: any): {
            typeUrl: string;
            value: MsgRenewAccount;
        };
        renewDomain(value: any): {
            typeUrl: string;
            value: MsgRenewDomain;
        };
        replaceAccountMetadata(value: any): {
            typeUrl: string;
            value: MsgReplaceAccountMetadata;
        };
        replaceAccountResources(value: any): {
            typeUrl: string;
            value: MsgReplaceAccountResources;
        };
        transferAccount(value: any): {
            typeUrl: string;
            value: MsgTransferAccount;
        };
        transferDomain(value: any): {
            typeUrl: string;
            value: MsgTransferDomain;
        };
    };
    fromPartial: {
        addAccountCertificate(value: MsgAddAccountCertificate): {
            typeUrl: string;
            value: MsgAddAccountCertificate;
        };
        deleteAccount(value: MsgDeleteAccount): {
            typeUrl: string;
            value: MsgDeleteAccount;
        };
        deleteAccountCertificate(value: MsgDeleteAccountCertificate): {
            typeUrl: string;
            value: MsgDeleteAccountCertificate;
        };
        deleteDomain(value: MsgDeleteDomain): {
            typeUrl: string;
            value: MsgDeleteDomain;
        };
        registerAccount(value: MsgRegisterAccount): {
            typeUrl: string;
            value: MsgRegisterAccount;
        };
        registerDomain(value: MsgRegisterDomain): {
            typeUrl: string;
            value: MsgRegisterDomain;
        };
        renewAccount(value: MsgRenewAccount): {
            typeUrl: string;
            value: MsgRenewAccount;
        };
        renewDomain(value: MsgRenewDomain): {
            typeUrl: string;
            value: MsgRenewDomain;
        };
        replaceAccountMetadata(value: MsgReplaceAccountMetadata): {
            typeUrl: string;
            value: MsgReplaceAccountMetadata;
        };
        replaceAccountResources(value: MsgReplaceAccountResources): {
            typeUrl: string;
            value: MsgReplaceAccountResources;
        };
        transferAccount(value: MsgTransferAccount): {
            typeUrl: string;
            value: MsgTransferAccount;
        };
        transferDomain(value: MsgTransferDomain): {
            typeUrl: string;
            value: MsgTransferDomain;
        };
    };
};
