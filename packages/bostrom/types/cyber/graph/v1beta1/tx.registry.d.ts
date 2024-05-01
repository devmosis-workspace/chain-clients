import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCyberlink } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        cyberlink(value: MsgCyberlink): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        cyberlink(value: MsgCyberlink): {
            typeUrl: string;
            value: MsgCyberlink;
        };
    };
    fromJSON: {
        cyberlink(value: any): {
            typeUrl: string;
            value: MsgCyberlink;
        };
    };
    fromPartial: {
        cyberlink(value: MsgCyberlink): {
            typeUrl: string;
            value: MsgCyberlink;
        };
    };
};
