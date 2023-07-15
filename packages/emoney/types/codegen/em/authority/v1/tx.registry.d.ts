import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateIssuer, MsgDestroyIssuer, MsgSetGasPrices, MsgReplaceAuthority, MsgScheduleUpgrade, MsgSetParameters } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createIssuer(value: MsgCreateIssuer): {
            typeUrl: string;
            value: Uint8Array;
        };
        destroyIssuer(value: MsgDestroyIssuer): {
            typeUrl: string;
            value: Uint8Array;
        };
        setGasPrices(value: MsgSetGasPrices): {
            typeUrl: string;
            value: Uint8Array;
        };
        replaceAuthority(value: MsgReplaceAuthority): {
            typeUrl: string;
            value: Uint8Array;
        };
        scheduleUpgrade(value: MsgScheduleUpgrade): {
            typeUrl: string;
            value: Uint8Array;
        };
        setParameters(value: MsgSetParameters): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createIssuer(value: MsgCreateIssuer): {
            typeUrl: string;
            value: MsgCreateIssuer;
        };
        destroyIssuer(value: MsgDestroyIssuer): {
            typeUrl: string;
            value: MsgDestroyIssuer;
        };
        setGasPrices(value: MsgSetGasPrices): {
            typeUrl: string;
            value: MsgSetGasPrices;
        };
        replaceAuthority(value: MsgReplaceAuthority): {
            typeUrl: string;
            value: MsgReplaceAuthority;
        };
        scheduleUpgrade(value: MsgScheduleUpgrade): {
            typeUrl: string;
            value: MsgScheduleUpgrade;
        };
        setParameters(value: MsgSetParameters): {
            typeUrl: string;
            value: MsgSetParameters;
        };
    };
    fromJSON: {
        createIssuer(value: any): {
            typeUrl: string;
            value: MsgCreateIssuer;
        };
        destroyIssuer(value: any): {
            typeUrl: string;
            value: MsgDestroyIssuer;
        };
        setGasPrices(value: any): {
            typeUrl: string;
            value: MsgSetGasPrices;
        };
        replaceAuthority(value: any): {
            typeUrl: string;
            value: MsgReplaceAuthority;
        };
        scheduleUpgrade(value: any): {
            typeUrl: string;
            value: MsgScheduleUpgrade;
        };
        setParameters(value: any): {
            typeUrl: string;
            value: MsgSetParameters;
        };
    };
    fromPartial: {
        createIssuer(value: MsgCreateIssuer): {
            typeUrl: string;
            value: MsgCreateIssuer;
        };
        destroyIssuer(value: MsgDestroyIssuer): {
            typeUrl: string;
            value: MsgDestroyIssuer;
        };
        setGasPrices(value: MsgSetGasPrices): {
            typeUrl: string;
            value: MsgSetGasPrices;
        };
        replaceAuthority(value: MsgReplaceAuthority): {
            typeUrl: string;
            value: MsgReplaceAuthority;
        };
        scheduleUpgrade(value: MsgScheduleUpgrade): {
            typeUrl: string;
            value: MsgScheduleUpgrade;
        };
        setParameters(value: MsgSetParameters): {
            typeUrl: string;
            value: MsgSetParameters;
        };
    };
};
