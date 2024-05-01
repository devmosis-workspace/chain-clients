import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSupply, MsgWithdraw, MsgMaxWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgMaxBorrow, MsgRepay, MsgLiquidate, MsgLeveragedLiquidate, MsgSupplyCollateral, MsgGovUpdateRegistry, MsgGovUpdateSpecialAssets, MsgGovSetParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        supply(value: MsgSupply): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
        maxWithdraw(value: MsgMaxWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
        collateralize(value: MsgCollateralize): {
            typeUrl: string;
            value: Uint8Array;
        };
        decollateralize(value: MsgDecollateralize): {
            typeUrl: string;
            value: Uint8Array;
        };
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: Uint8Array;
        };
        maxBorrow(value: MsgMaxBorrow): {
            typeUrl: string;
            value: Uint8Array;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: Uint8Array;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: Uint8Array;
        };
        leveragedLiquidate(value: MsgLeveragedLiquidate): {
            typeUrl: string;
            value: Uint8Array;
        };
        supplyCollateral(value: MsgSupplyCollateral): {
            typeUrl: string;
            value: Uint8Array;
        };
        govUpdateRegistry(value: MsgGovUpdateRegistry): {
            typeUrl: string;
            value: Uint8Array;
        };
        govUpdateSpecialAssets(value: MsgGovUpdateSpecialAssets): {
            typeUrl: string;
            value: Uint8Array;
        };
        govSetParams(value: MsgGovSetParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        supply(value: MsgSupply): {
            typeUrl: string;
            value: MsgSupply;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        maxWithdraw(value: MsgMaxWithdraw): {
            typeUrl: string;
            value: MsgMaxWithdraw;
        };
        collateralize(value: MsgCollateralize): {
            typeUrl: string;
            value: MsgCollateralize;
        };
        decollateralize(value: MsgDecollateralize): {
            typeUrl: string;
            value: MsgDecollateralize;
        };
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: MsgBorrow;
        };
        maxBorrow(value: MsgMaxBorrow): {
            typeUrl: string;
            value: MsgMaxBorrow;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: MsgRepay;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: MsgLiquidate;
        };
        leveragedLiquidate(value: MsgLeveragedLiquidate): {
            typeUrl: string;
            value: MsgLeveragedLiquidate;
        };
        supplyCollateral(value: MsgSupplyCollateral): {
            typeUrl: string;
            value: MsgSupplyCollateral;
        };
        govUpdateRegistry(value: MsgGovUpdateRegistry): {
            typeUrl: string;
            value: MsgGovUpdateRegistry;
        };
        govUpdateSpecialAssets(value: MsgGovUpdateSpecialAssets): {
            typeUrl: string;
            value: MsgGovUpdateSpecialAssets;
        };
        govSetParams(value: MsgGovSetParams): {
            typeUrl: string;
            value: MsgGovSetParams;
        };
    };
    fromJSON: {
        supply(value: any): {
            typeUrl: string;
            value: MsgSupply;
        };
        withdraw(value: any): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        maxWithdraw(value: any): {
            typeUrl: string;
            value: MsgMaxWithdraw;
        };
        collateralize(value: any): {
            typeUrl: string;
            value: MsgCollateralize;
        };
        decollateralize(value: any): {
            typeUrl: string;
            value: MsgDecollateralize;
        };
        borrow(value: any): {
            typeUrl: string;
            value: MsgBorrow;
        };
        maxBorrow(value: any): {
            typeUrl: string;
            value: MsgMaxBorrow;
        };
        repay(value: any): {
            typeUrl: string;
            value: MsgRepay;
        };
        liquidate(value: any): {
            typeUrl: string;
            value: MsgLiquidate;
        };
        leveragedLiquidate(value: any): {
            typeUrl: string;
            value: MsgLeveragedLiquidate;
        };
        supplyCollateral(value: any): {
            typeUrl: string;
            value: MsgSupplyCollateral;
        };
        govUpdateRegistry(value: any): {
            typeUrl: string;
            value: MsgGovUpdateRegistry;
        };
        govUpdateSpecialAssets(value: any): {
            typeUrl: string;
            value: MsgGovUpdateSpecialAssets;
        };
        govSetParams(value: any): {
            typeUrl: string;
            value: MsgGovSetParams;
        };
    };
    fromPartial: {
        supply(value: MsgSupply): {
            typeUrl: string;
            value: MsgSupply;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        maxWithdraw(value: MsgMaxWithdraw): {
            typeUrl: string;
            value: MsgMaxWithdraw;
        };
        collateralize(value: MsgCollateralize): {
            typeUrl: string;
            value: MsgCollateralize;
        };
        decollateralize(value: MsgDecollateralize): {
            typeUrl: string;
            value: MsgDecollateralize;
        };
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: MsgBorrow;
        };
        maxBorrow(value: MsgMaxBorrow): {
            typeUrl: string;
            value: MsgMaxBorrow;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: MsgRepay;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: MsgLiquidate;
        };
        leveragedLiquidate(value: MsgLeveragedLiquidate): {
            typeUrl: string;
            value: MsgLeveragedLiquidate;
        };
        supplyCollateral(value: MsgSupplyCollateral): {
            typeUrl: string;
            value: MsgSupplyCollateral;
        };
        govUpdateRegistry(value: MsgGovUpdateRegistry): {
            typeUrl: string;
            value: MsgGovUpdateRegistry;
        };
        govUpdateSpecialAssets(value: MsgGovUpdateSpecialAssets): {
            typeUrl: string;
            value: MsgGovUpdateSpecialAssets;
        };
        govSetParams(value: MsgGovSetParams): {
            typeUrl: string;
            value: MsgGovSetParams;
        };
    };
};
