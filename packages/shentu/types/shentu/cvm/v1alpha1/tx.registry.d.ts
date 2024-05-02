import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCall, MsgDeploy } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        call(value: MsgCall): {
            typeUrl: string;
            value: Uint8Array;
        };
        deploy(value: MsgDeploy): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        call(value: MsgCall): {
            typeUrl: string;
            value: MsgCall;
        };
        deploy(value: MsgDeploy): {
            typeUrl: string;
            value: MsgDeploy;
        };
    };
    fromJSON: {
        call(value: any): {
            typeUrl: string;
            value: MsgCall;
        };
        deploy(value: any): {
            typeUrl: string;
            value: MsgDeploy;
        };
    };
    fromPartial: {
        call(value: MsgCall): {
            typeUrl: string;
            value: MsgCall;
        };
        deploy(value: MsgDeploy): {
            typeUrl: string;
            value: MsgDeploy;
        };
    };
};
