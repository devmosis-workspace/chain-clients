import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterRevenue, MsgUpdateRevenue, MsgCancelRevenue, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerRevenue(value: MsgRegisterRevenue): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateRevenue(value: MsgUpdateRevenue): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelRevenue(value: MsgCancelRevenue): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerRevenue(value: MsgRegisterRevenue): {
            typeUrl: string;
            value: MsgRegisterRevenue;
        };
        updateRevenue(value: MsgUpdateRevenue): {
            typeUrl: string;
            value: MsgUpdateRevenue;
        };
        cancelRevenue(value: MsgCancelRevenue): {
            typeUrl: string;
            value: MsgCancelRevenue;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        registerRevenue(value: any): {
            typeUrl: string;
            value: MsgRegisterRevenue;
        };
        updateRevenue(value: any): {
            typeUrl: string;
            value: MsgUpdateRevenue;
        };
        cancelRevenue(value: any): {
            typeUrl: string;
            value: MsgCancelRevenue;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerRevenue(value: MsgRegisterRevenue): {
            typeUrl: string;
            value: MsgRegisterRevenue;
        };
        updateRevenue(value: MsgUpdateRevenue): {
            typeUrl: string;
            value: MsgUpdateRevenue;
        };
        cancelRevenue(value: MsgCancelRevenue): {
            typeUrl: string;
            value: MsgCancelRevenue;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
