import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgScheduleCorkRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        scheduleCork(value: MsgScheduleCorkRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        scheduleCork(value: MsgScheduleCorkRequest): {
            typeUrl: string;
            value: MsgScheduleCorkRequest;
        };
    };
    fromJSON: {
        scheduleCork(value: any): {
            typeUrl: string;
            value: MsgScheduleCorkRequest;
        };
    };
    fromPartial: {
        scheduleCork(value: MsgScheduleCorkRequest): {
            typeUrl: string;
            value: MsgScheduleCorkRequest;
        };
    };
};
