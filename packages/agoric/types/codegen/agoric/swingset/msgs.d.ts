import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgDeliverInbound defines an SDK message for delivering an eventual send */
export interface MsgDeliverInbound {
    messages: string[];
    nums: Long[];
    ack: Long;
    submitter: Uint8Array;
}
/** MsgDeliverInbound defines an SDK message for delivering an eventual send */
export interface MsgDeliverInboundSDKType {
    messages: string[];
    nums: Long[];
    ack: Long;
    submitter: Uint8Array;
}
/** MsgDeliverInboundResponse is an empty reply. */
export interface MsgDeliverInboundResponse {
}
/** MsgDeliverInboundResponse is an empty reply. */
export interface MsgDeliverInboundResponseSDKType {
}
/**
 * MsgWalletAction defines an SDK message for the on-chain wallet to perform an
 * action that *does not* spend any assets (other than gas fees/stamps).  This
 * message type is typically protected by feegrant budgets.
 */
export interface MsgWalletAction {
    owner: Uint8Array;
    /** The action to perform, as JSON-stringified marshalled data. */
    action: string;
}
/**
 * MsgWalletAction defines an SDK message for the on-chain wallet to perform an
 * action that *does not* spend any assets (other than gas fees/stamps).  This
 * message type is typically protected by feegrant budgets.
 */
export interface MsgWalletActionSDKType {
    owner: Uint8Array;
    action: string;
}
/** MsgWalletActionResponse is an empty reply. */
export interface MsgWalletActionResponse {
}
/** MsgWalletActionResponse is an empty reply. */
export interface MsgWalletActionResponseSDKType {
}
/**
 * MsgWalletSpendAction defines an SDK message for the on-chain wallet to
 * perform an action that *does spend the owner's assets.*  This message type is
 * typically protected by explicit confirmation by the user.
 */
export interface MsgWalletSpendAction {
    owner: Uint8Array;
    /** The action to perform, as JSON-stringified marshalled data. */
    spendAction: string;
}
/**
 * MsgWalletSpendAction defines an SDK message for the on-chain wallet to
 * perform an action that *does spend the owner's assets.*  This message type is
 * typically protected by explicit confirmation by the user.
 */
export interface MsgWalletSpendActionSDKType {
    owner: Uint8Array;
    spend_action: string;
}
/** MsgWalletSpendActionResponse is an empty reply. */
export interface MsgWalletSpendActionResponse {
}
/** MsgWalletSpendActionResponse is an empty reply. */
export interface MsgWalletSpendActionResponseSDKType {
}
/** MsgProvision defines an SDK message for provisioning a client to the chain */
export interface MsgProvision {
    nickname: string;
    address: Uint8Array;
    powerFlags: string[];
    submitter: Uint8Array;
}
/** MsgProvision defines an SDK message for provisioning a client to the chain */
export interface MsgProvisionSDKType {
    nickname: string;
    address: Uint8Array;
    power_flags: string[];
    submitter: Uint8Array;
}
/** MsgProvisionResponse is an empty reply. */
export interface MsgProvisionResponse {
}
/** MsgProvisionResponse is an empty reply. */
export interface MsgProvisionResponseSDKType {
}
/** MsgInstallBundle carries a signed bundle to SwingSet. */
export interface MsgInstallBundle {
    bundle: string;
    submitter: Uint8Array;
    /**
     * Either bundle or compressed_bundle will be set.
     * Default compression algorithm is gzip.
     */
    compressedBundle: Uint8Array;
    /** Size in bytes of uncompression of compressed_bundle. */
    uncompressedSize: Long;
}
/** MsgInstallBundle carries a signed bundle to SwingSet. */
export interface MsgInstallBundleSDKType {
    bundle: string;
    submitter: Uint8Array;
    compressed_bundle: Uint8Array;
    uncompressed_size: Long;
}
/**
 * MsgInstallBundleResponse is an empty acknowledgement that an install bundle
 * message has been queued for the SwingSet kernel's consideration.
 */
export interface MsgInstallBundleResponse {
}
/**
 * MsgInstallBundleResponse is an empty acknowledgement that an install bundle
 * message has been queued for the SwingSet kernel's consideration.
 */
export interface MsgInstallBundleResponseSDKType {
}
export declare const MsgDeliverInbound: {
    encode(message: MsgDeliverInbound, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeliverInbound;
    fromPartial(object: Partial<MsgDeliverInbound>): MsgDeliverInbound;
};
export declare const MsgDeliverInboundResponse: {
    encode(_: MsgDeliverInboundResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeliverInboundResponse;
    fromPartial(_: Partial<MsgDeliverInboundResponse>): MsgDeliverInboundResponse;
};
export declare const MsgWalletAction: {
    encode(message: MsgWalletAction, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWalletAction;
    fromPartial(object: Partial<MsgWalletAction>): MsgWalletAction;
};
export declare const MsgWalletActionResponse: {
    encode(_: MsgWalletActionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWalletActionResponse;
    fromPartial(_: Partial<MsgWalletActionResponse>): MsgWalletActionResponse;
};
export declare const MsgWalletSpendAction: {
    encode(message: MsgWalletSpendAction, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWalletSpendAction;
    fromPartial(object: Partial<MsgWalletSpendAction>): MsgWalletSpendAction;
};
export declare const MsgWalletSpendActionResponse: {
    encode(_: MsgWalletSpendActionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWalletSpendActionResponse;
    fromPartial(_: Partial<MsgWalletSpendActionResponse>): MsgWalletSpendActionResponse;
};
export declare const MsgProvision: {
    encode(message: MsgProvision, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgProvision;
    fromPartial(object: Partial<MsgProvision>): MsgProvision;
};
export declare const MsgProvisionResponse: {
    encode(_: MsgProvisionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgProvisionResponse;
    fromPartial(_: Partial<MsgProvisionResponse>): MsgProvisionResponse;
};
export declare const MsgInstallBundle: {
    encode(message: MsgInstallBundle, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgInstallBundle;
    fromPartial(object: Partial<MsgInstallBundle>): MsgInstallBundle;
};
export declare const MsgInstallBundleResponse: {
    encode(_: MsgInstallBundleResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgInstallBundleResponse;
    fromPartial(_: Partial<MsgInstallBundleResponse>): MsgInstallBundleResponse;
};
