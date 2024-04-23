import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateSequencer } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createSequencer(value: MsgCreateSequencer): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createSequencer(value: MsgCreateSequencer): {
            typeUrl: string;
            value: MsgCreateSequencer;
        };
    };
    fromJSON: {
        createSequencer(value: any): {
            typeUrl: string;
            value: MsgCreateSequencer;
        };
    };
    fromPartial: {
        createSequencer(value: MsgCreateSequencer): {
            typeUrl: string;
            value: MsgCreateSequencer;
        };
    };
};
