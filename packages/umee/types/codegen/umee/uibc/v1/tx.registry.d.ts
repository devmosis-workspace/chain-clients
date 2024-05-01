import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgGovUpdateQuota, MsgGovSetIBCStatus, MsgGovToggleICS20Hooks } from "./tx";
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
        govToggleICS20Hooks(value: MsgGovToggleICS20Hooks): {
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
        govToggleICS20Hooks(value: MsgGovToggleICS20Hooks): {
            typeUrl: string;
            value: MsgGovToggleICS20Hooks;
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
        govToggleICS20Hooks(value: any): {
            typeUrl: string;
            value: MsgGovToggleICS20Hooks;
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
        govToggleICS20Hooks(value: MsgGovToggleICS20Hooks): {
            typeUrl: string;
            value: MsgGovToggleICS20Hooks;
        };
    };
};
