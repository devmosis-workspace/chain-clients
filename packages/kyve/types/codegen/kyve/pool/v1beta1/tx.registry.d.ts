import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundPool, MsgDefundPool, MsgCreatePool, MsgUpdatePool, MsgDisablePool, MsgEnablePool, MsgScheduleRuntimeUpgrade, MsgCancelRuntimeUpgrade, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        fundPool(value: MsgFundPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        defundPool(value: MsgDefundPool): {
            typeUrl: string;
            value: Uint8Array;
        };
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
        fundPool(value: MsgFundPool): {
            typeUrl: string;
            value: MsgFundPool;
        };
        defundPool(value: MsgDefundPool): {
            typeUrl: string;
            value: MsgDefundPool;
        };
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
        fundPool(value: any): {
            typeUrl: string;
            value: MsgFundPool;
        };
        defundPool(value: any): {
            typeUrl: string;
            value: MsgDefundPool;
        };
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
        fundPool(value: MsgFundPool): {
            typeUrl: string;
            value: MsgFundPool;
        };
        defundPool(value: MsgDefundPool): {
            typeUrl: string;
            value: MsgDefundPool;
        };
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
