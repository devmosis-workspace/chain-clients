import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgEmitIBCAck } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        emitIBCAck(value: MsgEmitIBCAck): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        emitIBCAck(value: MsgEmitIBCAck): {
            typeUrl: string;
            value: MsgEmitIBCAck;
        };
    };
    fromJSON: {
        emitIBCAck(value: any): {
            typeUrl: string;
            value: MsgEmitIBCAck;
        };
    };
    fromPartial: {
        emitIBCAck(value: MsgEmitIBCAck): {
            typeUrl: string;
            value: MsgEmitIBCAck;
        };
    };
};
