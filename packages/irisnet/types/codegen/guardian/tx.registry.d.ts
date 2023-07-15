import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddSuper, MsgDeleteSuper } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addSuper(value: MsgAddSuper): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteSuper(value: MsgDeleteSuper): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addSuper(value: MsgAddSuper): {
            typeUrl: string;
            value: MsgAddSuper;
        };
        deleteSuper(value: MsgDeleteSuper): {
            typeUrl: string;
            value: MsgDeleteSuper;
        };
    };
    fromJSON: {
        addSuper(value: any): {
            typeUrl: string;
            value: MsgAddSuper;
        };
        deleteSuper(value: any): {
            typeUrl: string;
            value: MsgDeleteSuper;
        };
    };
    fromPartial: {
        addSuper(value: MsgAddSuper): {
            typeUrl: string;
            value: MsgAddSuper;
        };
        deleteSuper(value: MsgDeleteSuper): {
            typeUrl: string;
            value: MsgDeleteSuper;
        };
    };
};
