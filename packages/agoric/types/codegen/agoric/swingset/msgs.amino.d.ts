import { AminoMsg } from "@cosmjs/amino";
import { MsgInstallBundle, MsgDeliverInbound, MsgWalletAction, MsgWalletSpendAction, MsgProvision } from "./msgs";
export interface MsgInstallBundleAminoType extends AminoMsg {
    type: "/agoric.swingset.MsgInstallBundle";
    value: {
        bundle: string;
        submitter: Uint8Array;
        compressed_bundle: Uint8Array;
        uncompressed_size: string;
    };
}
export interface MsgDeliverInboundAminoType extends AminoMsg {
    type: "/agoric.swingset.MsgDeliverInbound";
    value: {
        messages: string[];
        nums: string[];
        ack: string;
        submitter: Uint8Array;
    };
}
export interface MsgWalletActionAminoType extends AminoMsg {
    type: "/agoric.swingset.MsgWalletAction";
    value: {
        owner: Uint8Array;
        action: string;
    };
}
export interface MsgWalletSpendActionAminoType extends AminoMsg {
    type: "/agoric.swingset.MsgWalletSpendAction";
    value: {
        owner: Uint8Array;
        spend_action: string;
    };
}
export interface MsgProvisionAminoType extends AminoMsg {
    type: "/agoric.swingset.MsgProvision";
    value: {
        nickname: string;
        address: Uint8Array;
        power_flags: string[];
        submitter: Uint8Array;
    };
}
export declare const AminoConverter: {
    "/agoric.swingset.MsgInstallBundle": {
        aminoType: string;
        toAmino: ({ bundle, submitter, compressedBundle, uncompressedSize }: MsgInstallBundle) => MsgInstallBundleAminoType["value"];
        fromAmino: ({ bundle, submitter, compressed_bundle, uncompressed_size }: MsgInstallBundleAminoType["value"]) => MsgInstallBundle;
    };
    "/agoric.swingset.MsgDeliverInbound": {
        aminoType: string;
        toAmino: ({ messages, nums, ack, submitter }: MsgDeliverInbound) => MsgDeliverInboundAminoType["value"];
        fromAmino: ({ messages, nums, ack, submitter }: MsgDeliverInboundAminoType["value"]) => MsgDeliverInbound;
    };
    "/agoric.swingset.MsgWalletAction": {
        aminoType: string;
        toAmino: ({ owner, action }: MsgWalletAction) => MsgWalletActionAminoType["value"];
        fromAmino: ({ owner, action }: MsgWalletActionAminoType["value"]) => MsgWalletAction;
    };
    "/agoric.swingset.MsgWalletSpendAction": {
        aminoType: string;
        toAmino: ({ owner, spendAction }: MsgWalletSpendAction) => MsgWalletSpendActionAminoType["value"];
        fromAmino: ({ owner, spend_action }: MsgWalletSpendActionAminoType["value"]) => MsgWalletSpendAction;
    };
    "/agoric.swingset.MsgProvision": {
        aminoType: string;
        toAmino: ({ nickname, address, powerFlags, submitter }: MsgProvision) => MsgProvisionAminoType["value"];
        fromAmino: ({ nickname, address, power_flags, submitter }: MsgProvisionAminoType["value"]) => MsgProvision;
    };
};
