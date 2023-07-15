import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createBid(value: MsgCreateBid): {
            typeUrl: string;
            value: Uint8Array;
        };
        closeBid(value: MsgCloseBid): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawLease(value: MsgWithdrawLease): {
            typeUrl: string;
            value: Uint8Array;
        };
        createLease(value: MsgCreateLease): {
            typeUrl: string;
            value: Uint8Array;
        };
        closeLease(value: MsgCloseLease): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createBid(value: MsgCreateBid): {
            typeUrl: string;
            value: MsgCreateBid;
        };
        closeBid(value: MsgCloseBid): {
            typeUrl: string;
            value: MsgCloseBid;
        };
        withdrawLease(value: MsgWithdrawLease): {
            typeUrl: string;
            value: MsgWithdrawLease;
        };
        createLease(value: MsgCreateLease): {
            typeUrl: string;
            value: MsgCreateLease;
        };
        closeLease(value: MsgCloseLease): {
            typeUrl: string;
            value: MsgCloseLease;
        };
    };
    fromJSON: {
        createBid(value: any): {
            typeUrl: string;
            value: MsgCreateBid;
        };
        closeBid(value: any): {
            typeUrl: string;
            value: MsgCloseBid;
        };
        withdrawLease(value: any): {
            typeUrl: string;
            value: MsgWithdrawLease;
        };
        createLease(value: any): {
            typeUrl: string;
            value: MsgCreateLease;
        };
        closeLease(value: any): {
            typeUrl: string;
            value: MsgCloseLease;
        };
    };
    fromPartial: {
        createBid(value: MsgCreateBid): {
            typeUrl: string;
            value: MsgCreateBid;
        };
        closeBid(value: MsgCloseBid): {
            typeUrl: string;
            value: MsgCloseBid;
        };
        withdrawLease(value: MsgWithdrawLease): {
            typeUrl: string;
            value: MsgWithdrawLease;
        };
        createLease(value: MsgCreateLease): {
            typeUrl: string;
            value: MsgCreateLease;
        };
        closeLease(value: MsgCloseLease): {
            typeUrl: string;
            value: MsgCloseLease;
        };
    };
};
