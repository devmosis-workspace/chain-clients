import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdrawal, MsgPlaceLimitOrder, MsgWithdrawFilledLimitOrder, MsgCancelLimitOrder, MsgMultiHopSwap, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawal(value: MsgWithdrawal): {
            typeUrl: string;
            value: Uint8Array;
        };
        placeLimitOrder(value: MsgPlaceLimitOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelLimitOrder(value: MsgCancelLimitOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        multiHopSwap(value: MsgMultiHopSwap): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdrawal(value: MsgWithdrawal): {
            typeUrl: string;
            value: MsgWithdrawal;
        };
        placeLimitOrder(value: MsgPlaceLimitOrder): {
            typeUrl: string;
            value: MsgPlaceLimitOrder;
        };
        withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder): {
            typeUrl: string;
            value: MsgWithdrawFilledLimitOrder;
        };
        cancelLimitOrder(value: MsgCancelLimitOrder): {
            typeUrl: string;
            value: MsgCancelLimitOrder;
        };
        multiHopSwap(value: MsgMultiHopSwap): {
            typeUrl: string;
            value: MsgMultiHopSwap;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdrawal(value: any): {
            typeUrl: string;
            value: MsgWithdrawal;
        };
        placeLimitOrder(value: any): {
            typeUrl: string;
            value: MsgPlaceLimitOrder;
        };
        withdrawFilledLimitOrder(value: any): {
            typeUrl: string;
            value: MsgWithdrawFilledLimitOrder;
        };
        cancelLimitOrder(value: any): {
            typeUrl: string;
            value: MsgCancelLimitOrder;
        };
        multiHopSwap(value: any): {
            typeUrl: string;
            value: MsgMultiHopSwap;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdrawal(value: MsgWithdrawal): {
            typeUrl: string;
            value: MsgWithdrawal;
        };
        placeLimitOrder(value: MsgPlaceLimitOrder): {
            typeUrl: string;
            value: MsgPlaceLimitOrder;
        };
        withdrawFilledLimitOrder(value: MsgWithdrawFilledLimitOrder): {
            typeUrl: string;
            value: MsgWithdrawFilledLimitOrder;
        };
        cancelLimitOrder(value: MsgCancelLimitOrder): {
            typeUrl: string;
            value: MsgCancelLimitOrder;
        };
        multiHopSwap(value: MsgMultiHopSwap): {
            typeUrl: string;
            value: MsgMultiHopSwap;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
