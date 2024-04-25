import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateFunder, MsgUpdateFunder, MsgFundPool, MsgDefundPool, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createFunder(value: MsgCreateFunder): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateFunder(value: MsgUpdateFunder): {
            typeUrl: string;
            value: Uint8Array;
        };
        fundPool(value: MsgFundPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        defundPool(value: MsgDefundPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createFunder(value: MsgCreateFunder): {
            typeUrl: string;
            value: MsgCreateFunder;
        };
        updateFunder(value: MsgUpdateFunder): {
            typeUrl: string;
            value: MsgUpdateFunder;
        };
        fundPool(value: MsgFundPool): {
            typeUrl: string;
            value: MsgFundPool;
        };
        defundPool(value: MsgDefundPool): {
            typeUrl: string;
            value: MsgDefundPool;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        createFunder(value: any): {
            typeUrl: string;
            value: MsgCreateFunder;
        };
        updateFunder(value: any): {
            typeUrl: string;
            value: MsgUpdateFunder;
        };
        fundPool(value: any): {
            typeUrl: string;
            value: MsgFundPool;
        };
        defundPool(value: any): {
            typeUrl: string;
            value: MsgDefundPool;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createFunder(value: MsgCreateFunder): {
            typeUrl: string;
            value: MsgCreateFunder;
        };
        updateFunder(value: MsgUpdateFunder): {
            typeUrl: string;
            value: MsgUpdateFunder;
        };
        fundPool(value: MsgFundPool): {
            typeUrl: string;
            value: MsgFundPool;
        };
        defundPool(value: MsgDefundPool): {
            typeUrl: string;
            value: MsgDefundPool;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
