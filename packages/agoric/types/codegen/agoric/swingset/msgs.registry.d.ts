import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgInstallBundle, MsgDeliverInbound, MsgWalletAction, MsgWalletSpendAction, MsgProvision } from "./msgs";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        installBundle(value: MsgInstallBundle): {
            typeUrl: string;
            value: Uint8Array;
        };
        deliverInbound(value: MsgDeliverInbound): {
            typeUrl: string;
            value: Uint8Array;
        };
        walletAction(value: MsgWalletAction): {
            typeUrl: string;
            value: Uint8Array;
        };
        walletSpendAction(value: MsgWalletSpendAction): {
            typeUrl: string;
            value: Uint8Array;
        };
        provision(value: MsgProvision): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        installBundle(value: MsgInstallBundle): {
            typeUrl: string;
            value: MsgInstallBundle;
        };
        deliverInbound(value: MsgDeliverInbound): {
            typeUrl: string;
            value: MsgDeliverInbound;
        };
        walletAction(value: MsgWalletAction): {
            typeUrl: string;
            value: MsgWalletAction;
        };
        walletSpendAction(value: MsgWalletSpendAction): {
            typeUrl: string;
            value: MsgWalletSpendAction;
        };
        provision(value: MsgProvision): {
            typeUrl: string;
            value: MsgProvision;
        };
    };
    fromJSON: {
        installBundle(value: any): {
            typeUrl: string;
            value: MsgInstallBundle;
        };
        deliverInbound(value: any): {
            typeUrl: string;
            value: MsgDeliverInbound;
        };
        walletAction(value: any): {
            typeUrl: string;
            value: MsgWalletAction;
        };
        walletSpendAction(value: any): {
            typeUrl: string;
            value: MsgWalletSpendAction;
        };
        provision(value: any): {
            typeUrl: string;
            value: MsgProvision;
        };
    };
    fromPartial: {
        installBundle(value: MsgInstallBundle): {
            typeUrl: string;
            value: MsgInstallBundle;
        };
        deliverInbound(value: MsgDeliverInbound): {
            typeUrl: string;
            value: MsgDeliverInbound;
        };
        walletAction(value: MsgWalletAction): {
            typeUrl: string;
            value: MsgWalletAction;
        };
        walletSpendAction(value: MsgWalletSpendAction): {
            typeUrl: string;
            value: MsgWalletSpendAction;
        };
        provision(value: MsgProvision): {
            typeUrl: string;
            value: MsgProvision;
        };
    };
};
