import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgToggleIbcSwitch } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        toggleIbcSwitch(value: MsgToggleIbcSwitch): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        toggleIbcSwitch(value: MsgToggleIbcSwitch): {
            typeUrl: string;
            value: MsgToggleIbcSwitch;
        };
    };
    fromJSON: {
        toggleIbcSwitch(value: any): {
            typeUrl: string;
            value: MsgToggleIbcSwitch;
        };
    };
    fromPartial: {
        toggleIbcSwitch(value: MsgToggleIbcSwitch): {
            typeUrl: string;
            value: MsgToggleIbcSwitch;
        };
    };
};
