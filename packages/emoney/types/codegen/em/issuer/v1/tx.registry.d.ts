import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIncreaseMintable, MsgDecreaseMintable, MsgRevokeLiquidityProvider, MsgSetInflation } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        increaseMintable(value: MsgIncreaseMintable): {
            typeUrl: string;
            value: Uint8Array;
        };
        decreaseMintable(value: MsgDecreaseMintable): {
            typeUrl: string;
            value: Uint8Array;
        };
        revokeLiquidityProvider(value: MsgRevokeLiquidityProvider): {
            typeUrl: string;
            value: Uint8Array;
        };
        setInflation(value: MsgSetInflation): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        increaseMintable(value: MsgIncreaseMintable): {
            typeUrl: string;
            value: MsgIncreaseMintable;
        };
        decreaseMintable(value: MsgDecreaseMintable): {
            typeUrl: string;
            value: MsgDecreaseMintable;
        };
        revokeLiquidityProvider(value: MsgRevokeLiquidityProvider): {
            typeUrl: string;
            value: MsgRevokeLiquidityProvider;
        };
        setInflation(value: MsgSetInflation): {
            typeUrl: string;
            value: MsgSetInflation;
        };
    };
    fromJSON: {
        increaseMintable(value: any): {
            typeUrl: string;
            value: MsgIncreaseMintable;
        };
        decreaseMintable(value: any): {
            typeUrl: string;
            value: MsgDecreaseMintable;
        };
        revokeLiquidityProvider(value: any): {
            typeUrl: string;
            value: MsgRevokeLiquidityProvider;
        };
        setInflation(value: any): {
            typeUrl: string;
            value: MsgSetInflation;
        };
    };
    fromPartial: {
        increaseMintable(value: MsgIncreaseMintable): {
            typeUrl: string;
            value: MsgIncreaseMintable;
        };
        decreaseMintable(value: MsgDecreaseMintable): {
            typeUrl: string;
            value: MsgDecreaseMintable;
        };
        revokeLiquidityProvider(value: MsgRevokeLiquidityProvider): {
            typeUrl: string;
            value: MsgRevokeLiquidityProvider;
        };
        setInflation(value: MsgSetInflation): {
            typeUrl: string;
            value: MsgSetInflation;
        };
    };
};
