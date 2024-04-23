import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateRollapp, MsgUpdateState } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createRollapp(value: MsgCreateRollapp): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateState(value: MsgUpdateState): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createRollapp(value: MsgCreateRollapp): {
            typeUrl: string;
            value: MsgCreateRollapp;
        };
        updateState(value: MsgUpdateState): {
            typeUrl: string;
            value: MsgUpdateState;
        };
    };
    fromJSON: {
        createRollapp(value: any): {
            typeUrl: string;
            value: MsgCreateRollapp;
        };
        updateState(value: any): {
            typeUrl: string;
            value: MsgUpdateState;
        };
    };
    fromPartial: {
        createRollapp(value: MsgCreateRollapp): {
            typeUrl: string;
            value: MsgCreateRollapp;
        };
        updateState(value: MsgUpdateState): {
            typeUrl: string;
            value: MsgUpdateState;
        };
    };
};
