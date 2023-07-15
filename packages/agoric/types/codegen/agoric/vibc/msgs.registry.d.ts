import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSendPacket } from "./msgs";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        sendPacket(value: MsgSendPacket): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        sendPacket(value: MsgSendPacket): {
            typeUrl: string;
            value: MsgSendPacket;
        };
    };
    fromJSON: {
        sendPacket(value: any): {
            typeUrl: string;
            value: MsgSendPacket;
        };
    };
    fromPartial: {
        sendPacket(value: MsgSendPacket): {
            typeUrl: string;
            value: MsgSendPacket;
        };
    };
};
