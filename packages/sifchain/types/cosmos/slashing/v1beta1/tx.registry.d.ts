import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUnjail } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: MsgUnjail;
        };
    };
    fromJSON: {
        unjail(value: any): {
            typeUrl: string;
            value: MsgUnjail;
        };
    };
    fromPartial: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: MsgUnjail;
        };
    };
};
