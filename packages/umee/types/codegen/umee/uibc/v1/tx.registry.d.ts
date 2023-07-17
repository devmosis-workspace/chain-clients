import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGovUpdateQuota, MsgGovSetIBCStatus } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        govUpdateQuota(value: MsgGovUpdateQuota): {
            typeUrl: string;
            value: Uint8Array;
        };
        govSetIBCStatus(value: MsgGovSetIBCStatus): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        govUpdateQuota(value: MsgGovUpdateQuota): {
            typeUrl: string;
            value: MsgGovUpdateQuota;
        };
        govSetIBCStatus(value: MsgGovSetIBCStatus): {
            typeUrl: string;
            value: MsgGovSetIBCStatus;
        };
    };
    fromJSON: {
        govUpdateQuota(value: any): {
            typeUrl: string;
            value: MsgGovUpdateQuota;
        };
        govSetIBCStatus(value: any): {
            typeUrl: string;
            value: MsgGovSetIBCStatus;
        };
    };
    fromPartial: {
        govUpdateQuota(value: MsgGovUpdateQuota): {
            typeUrl: string;
            value: MsgGovUpdateQuota;
        };
        govSetIBCStatus(value: MsgGovSetIBCStatus): {
            typeUrl: string;
            value: MsgGovSetIBCStatus;
        };
    };
};
