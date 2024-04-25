import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgUpdatePool, MsgDisablePool, MsgEnablePool, MsgScheduleRuntimeUpgrade, MsgCancelRuntimeUpgrade, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        updatePool(value: MsgUpdatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        disablePool(value: MsgDisablePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        enablePool(value: MsgEnablePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        scheduleRuntimeUpgrade(value: MsgScheduleRuntimeUpgrade): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelRuntimeUpgrade(value: MsgCancelRuntimeUpgrade): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        updatePool(value: MsgUpdatePool): {
            typeUrl: string;
            value: MsgUpdatePool;
        };
        disablePool(value: MsgDisablePool): {
            typeUrl: string;
            value: MsgDisablePool;
        };
        enablePool(value: MsgEnablePool): {
            typeUrl: string;
            value: MsgEnablePool;
        };
        scheduleRuntimeUpgrade(value: MsgScheduleRuntimeUpgrade): {
            typeUrl: string;
            value: MsgScheduleRuntimeUpgrade;
        };
        cancelRuntimeUpgrade(value: MsgCancelRuntimeUpgrade): {
            typeUrl: string;
            value: MsgCancelRuntimeUpgrade;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        createPool(value: any): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        updatePool(value: any): {
            typeUrl: string;
            value: MsgUpdatePool;
        };
        disablePool(value: any): {
            typeUrl: string;
            value: MsgDisablePool;
        };
        enablePool(value: any): {
            typeUrl: string;
            value: MsgEnablePool;
        };
        scheduleRuntimeUpgrade(value: any): {
            typeUrl: string;
            value: MsgScheduleRuntimeUpgrade;
        };
        cancelRuntimeUpgrade(value: any): {
            typeUrl: string;
            value: MsgCancelRuntimeUpgrade;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        updatePool(value: MsgUpdatePool): {
            typeUrl: string;
            value: MsgUpdatePool;
        };
        disablePool(value: MsgDisablePool): {
            typeUrl: string;
            value: MsgDisablePool;
        };
        enablePool(value: MsgEnablePool): {
            typeUrl: string;
            value: MsgEnablePool;
        };
        scheduleRuntimeUpgrade(value: MsgScheduleRuntimeUpgrade): {
            typeUrl: string;
            value: MsgScheduleRuntimeUpgrade;
        };
        cancelRuntimeUpgrade(value: MsgCancelRuntimeUpgrade): {
            typeUrl: string;
            value: MsgCancelRuntimeUpgrade;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
