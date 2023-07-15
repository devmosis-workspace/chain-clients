import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDelegate, MsgWithdrawRewards, MsgUndelegate, MsgRedelegate, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawRewards(value: MsgWithdrawRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        redelegate(value: MsgRedelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        withdrawRewards(value: MsgWithdrawRewards): {
            typeUrl: string;
            value: MsgWithdrawRewards;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        redelegate(value: MsgRedelegate): {
            typeUrl: string;
            value: MsgRedelegate;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        delegate(value: any): {
            typeUrl: string;
            value: MsgDelegate;
        };
        withdrawRewards(value: any): {
            typeUrl: string;
            value: MsgWithdrawRewards;
        };
        undelegate(value: any): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        redelegate(value: any): {
            typeUrl: string;
            value: MsgRedelegate;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        withdrawRewards(value: MsgWithdrawRewards): {
            typeUrl: string;
            value: MsgWithdrawRewards;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        redelegate(value: MsgRedelegate): {
            typeUrl: string;
            value: MsgRedelegate;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
