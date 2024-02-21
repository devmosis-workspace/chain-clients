import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateGauge, MsgAddToGauge, MsgCreateGroup } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: Uint8Array;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: Uint8Array;
        };
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: MsgCreateGauge;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: MsgAddToGauge;
        };
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
    };
    fromJSON: {
        createGauge(value: any): {
            typeUrl: string;
            value: MsgCreateGauge;
        };
        addToGauge(value: any): {
            typeUrl: string;
            value: MsgAddToGauge;
        };
        createGroup(value: any): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
    };
    fromPartial: {
        createGauge(value: MsgCreateGauge): {
            typeUrl: string;
            value: MsgCreateGauge;
        };
        addToGauge(value: MsgAddToGauge): {
            typeUrl: string;
            value: MsgAddToGauge;
        };
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
    };
};
