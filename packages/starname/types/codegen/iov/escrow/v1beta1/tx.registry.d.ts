import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateEscrow, MsgUpdateEscrow, MsgTransferToEscrow, MsgRefundEscrow } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createEscrow(value: MsgCreateEscrow): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateEscrow(value: MsgUpdateEscrow): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferToEscrow(value: MsgTransferToEscrow): {
            typeUrl: string;
            value: Uint8Array;
        };
        refundEscrow(value: MsgRefundEscrow): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createEscrow(value: MsgCreateEscrow): {
            typeUrl: string;
            value: MsgCreateEscrow;
        };
        updateEscrow(value: MsgUpdateEscrow): {
            typeUrl: string;
            value: MsgUpdateEscrow;
        };
        transferToEscrow(value: MsgTransferToEscrow): {
            typeUrl: string;
            value: MsgTransferToEscrow;
        };
        refundEscrow(value: MsgRefundEscrow): {
            typeUrl: string;
            value: MsgRefundEscrow;
        };
    };
    fromJSON: {
        createEscrow(value: any): {
            typeUrl: string;
            value: MsgCreateEscrow;
        };
        updateEscrow(value: any): {
            typeUrl: string;
            value: MsgUpdateEscrow;
        };
        transferToEscrow(value: any): {
            typeUrl: string;
            value: MsgTransferToEscrow;
        };
        refundEscrow(value: any): {
            typeUrl: string;
            value: MsgRefundEscrow;
        };
    };
    fromPartial: {
        createEscrow(value: MsgCreateEscrow): {
            typeUrl: string;
            value: MsgCreateEscrow;
        };
        updateEscrow(value: MsgUpdateEscrow): {
            typeUrl: string;
            value: MsgUpdateEscrow;
        };
        transferToEscrow(value: MsgTransferToEscrow): {
            typeUrl: string;
            value: MsgTransferToEscrow;
        };
        refundEscrow(value: MsgRefundEscrow): {
            typeUrl: string;
            value: MsgRefundEscrow;
        };
    };
};
