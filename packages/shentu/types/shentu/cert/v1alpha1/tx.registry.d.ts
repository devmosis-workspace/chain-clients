import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgProposeCertifier, MsgIssueCertificate, MsgRevokeCertificate, MsgCertifyPlatform } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        proposeCertifier(value: MsgProposeCertifier): {
            typeUrl: string;
            value: Uint8Array;
        };
        issueCertificate(value: MsgIssueCertificate): {
            typeUrl: string;
            value: Uint8Array;
        };
        revokeCertificate(value: MsgRevokeCertificate): {
            typeUrl: string;
            value: Uint8Array;
        };
        certifyPlatform(value: MsgCertifyPlatform): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        proposeCertifier(value: MsgProposeCertifier): {
            typeUrl: string;
            value: MsgProposeCertifier;
        };
        issueCertificate(value: MsgIssueCertificate): {
            typeUrl: string;
            value: MsgIssueCertificate;
        };
        revokeCertificate(value: MsgRevokeCertificate): {
            typeUrl: string;
            value: MsgRevokeCertificate;
        };
        certifyPlatform(value: MsgCertifyPlatform): {
            typeUrl: string;
            value: MsgCertifyPlatform;
        };
    };
    fromJSON: {
        proposeCertifier(value: any): {
            typeUrl: string;
            value: MsgProposeCertifier;
        };
        issueCertificate(value: any): {
            typeUrl: string;
            value: MsgIssueCertificate;
        };
        revokeCertificate(value: any): {
            typeUrl: string;
            value: MsgRevokeCertificate;
        };
        certifyPlatform(value: any): {
            typeUrl: string;
            value: MsgCertifyPlatform;
        };
    };
    fromPartial: {
        proposeCertifier(value: MsgProposeCertifier): {
            typeUrl: string;
            value: MsgProposeCertifier;
        };
        issueCertificate(value: MsgIssueCertificate): {
            typeUrl: string;
            value: MsgIssueCertificate;
        };
        revokeCertificate(value: MsgRevokeCertificate): {
            typeUrl: string;
            value: MsgRevokeCertificate;
        };
        certifyPlatform(value: MsgCertifyPlatform): {
            typeUrl: string;
            value: MsgCertifyPlatform;
        };
    };
};
