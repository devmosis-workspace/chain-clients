import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgLockedSend } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        lockedSend(value: MsgLockedSend): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        lockedSend(value: MsgLockedSend): {
            typeUrl: string;
            value: MsgLockedSend;
        };
    };
    fromJSON: {
        lockedSend(value: any): {
            typeUrl: string;
            value: MsgLockedSend;
        };
    };
    fromPartial: {
        lockedSend(value: MsgLockedSend): {
            typeUrl: string;
            value: MsgLockedSend;
        };
    };
};
