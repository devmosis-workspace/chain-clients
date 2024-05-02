import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUnlock } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        unlock(value: MsgUnlock): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        unlock(value: MsgUnlock): {
            typeUrl: string;
            value: MsgUnlock;
        };
    };
    fromJSON: {
        unlock(value: any): {
            typeUrl: string;
            value: MsgUnlock;
        };
    };
    fromPartial: {
        unlock(value: MsgUnlock): {
            typeUrl: string;
            value: MsgUnlock;
        };
    };
};
