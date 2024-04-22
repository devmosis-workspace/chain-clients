import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createCertificate(value: MsgCreateCertificate): {
            typeUrl: string;
            value: Uint8Array;
        };
        revokeCertificate(value: MsgRevokeCertificate): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createCertificate(value: MsgCreateCertificate): {
            typeUrl: string;
            value: MsgCreateCertificate;
        };
        revokeCertificate(value: MsgRevokeCertificate): {
            typeUrl: string;
            value: MsgRevokeCertificate;
        };
    };
    fromJSON: {
        createCertificate(value: any): {
            typeUrl: string;
            value: MsgCreateCertificate;
        };
        revokeCertificate(value: any): {
            typeUrl: string;
            value: MsgRevokeCertificate;
        };
    };
    fromPartial: {
        createCertificate(value: MsgCreateCertificate): {
            typeUrl: string;
            value: MsgCreateCertificate;
        };
        revokeCertificate(value: MsgRevokeCertificate): {
            typeUrl: string;
            value: MsgRevokeCertificate;
        };
    };
};
