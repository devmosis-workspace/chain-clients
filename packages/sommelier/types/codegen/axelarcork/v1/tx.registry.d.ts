import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgScheduleAxelarCorkRequest, MsgRelayAxelarCorkRequest, MsgBumpAxelarCorkGasRequest, MsgCancelAxelarCorkRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        scheduleCork(value: MsgScheduleAxelarCorkRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        relayCork(value: MsgRelayAxelarCorkRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        bumpCorkGas(value: MsgBumpAxelarCorkGasRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelScheduledCork(value: MsgCancelAxelarCorkRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        scheduleCork(value: MsgScheduleAxelarCorkRequest): {
            typeUrl: string;
            value: MsgScheduleAxelarCorkRequest;
        };
        relayCork(value: MsgRelayAxelarCorkRequest): {
            typeUrl: string;
            value: MsgRelayAxelarCorkRequest;
        };
        bumpCorkGas(value: MsgBumpAxelarCorkGasRequest): {
            typeUrl: string;
            value: MsgBumpAxelarCorkGasRequest;
        };
        cancelScheduledCork(value: MsgCancelAxelarCorkRequest): {
            typeUrl: string;
            value: MsgCancelAxelarCorkRequest;
        };
    };
    fromJSON: {
        scheduleCork(value: any): {
            typeUrl: string;
            value: MsgScheduleAxelarCorkRequest;
        };
        relayCork(value: any): {
            typeUrl: string;
            value: MsgRelayAxelarCorkRequest;
        };
        bumpCorkGas(value: any): {
            typeUrl: string;
            value: MsgBumpAxelarCorkGasRequest;
        };
        cancelScheduledCork(value: any): {
            typeUrl: string;
            value: MsgCancelAxelarCorkRequest;
        };
    };
    fromPartial: {
        scheduleCork(value: MsgScheduleAxelarCorkRequest): {
            typeUrl: string;
            value: MsgScheduleAxelarCorkRequest;
        };
        relayCork(value: MsgRelayAxelarCorkRequest): {
            typeUrl: string;
            value: MsgRelayAxelarCorkRequest;
        };
        bumpCorkGas(value: MsgBumpAxelarCorkGasRequest): {
            typeUrl: string;
            value: MsgBumpAxelarCorkGasRequest;
        };
        cancelScheduledCork(value: MsgCancelAxelarCorkRequest): {
            typeUrl: string;
            value: MsgCancelAxelarCorkRequest;
        };
    };
};
