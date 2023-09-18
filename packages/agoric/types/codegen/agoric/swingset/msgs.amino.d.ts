import { MsgInstallBundle, MsgDeliverInbound, MsgWalletAction, MsgWalletSpendAction, MsgProvision } from "./msgs";
export declare const AminoConverter: {
    "/agoric.swingset.MsgInstallBundle": {
        aminoType: string;
        toAmino: (message: MsgInstallBundle) => import("./msgs").MsgInstallBundleAmino;
        fromAmino: (object: import("./msgs").MsgInstallBundleAmino) => MsgInstallBundle;
    };
    "/agoric.swingset.MsgDeliverInbound": {
        aminoType: string;
        toAmino: (message: MsgDeliverInbound) => import("./msgs").MsgDeliverInboundAmino;
        fromAmino: (object: import("./msgs").MsgDeliverInboundAmino) => MsgDeliverInbound;
    };
    "/agoric.swingset.MsgWalletAction": {
        aminoType: string;
        toAmino: (message: MsgWalletAction) => import("./msgs").MsgWalletActionAmino;
        fromAmino: (object: import("./msgs").MsgWalletActionAmino) => MsgWalletAction;
    };
    "/agoric.swingset.MsgWalletSpendAction": {
        aminoType: string;
        toAmino: (message: MsgWalletSpendAction) => import("./msgs").MsgWalletSpendActionAmino;
        fromAmino: (object: import("./msgs").MsgWalletSpendActionAmino) => MsgWalletSpendAction;
    };
    "/agoric.swingset.MsgProvision": {
        aminoType: string;
        toAmino: (message: MsgProvision) => import("./msgs").MsgProvisionAmino;
        fromAmino: (object: import("./msgs").MsgProvisionAmino) => MsgProvision;
    };
};
