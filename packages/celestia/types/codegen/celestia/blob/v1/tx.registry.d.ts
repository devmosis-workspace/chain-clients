import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgPayForBlobs } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        payForBlobs(value: MsgPayForBlobs): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        payForBlobs(value: MsgPayForBlobs): {
            typeUrl: string;
            value: MsgPayForBlobs;
        };
    };
    fromJSON: {
        payForBlobs(value: any): {
            typeUrl: string;
            value: MsgPayForBlobs;
        };
    };
    fromPartial: {
        payForBlobs(value: MsgPayForBlobs): {
            typeUrl: string;
            value: MsgPayForBlobs;
        };
    };
};
