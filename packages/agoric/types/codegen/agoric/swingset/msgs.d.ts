import { BinaryWriter } from "../../binary";
/** MsgDeliverInbound defines an SDK message for delivering an eventual send */
export interface MsgDeliverInbound {
    messages: string[];
    nums: bigint[];
    ack: bigint;
    submitter: Uint8Array;
}
export interface MsgDeliverInboundProtoMsg {
    typeUrl: "/agoric.swingset.MsgDeliverInbound";
    value: Uint8Array;
}
/** MsgDeliverInbound defines an SDK message for delivering an eventual send */
export interface MsgDeliverInboundAmino {
    messages: string[];
    nums: string[];
    ack: string;
    submitter: Uint8Array;
}
export interface MsgDeliverInboundAminoMsg {
    type: "/agoric.swingset.MsgDeliverInbound";
    value: MsgDeliverInboundAmino;
}
/** MsgDeliverInbound defines an SDK message for delivering an eventual send */
export interface MsgDeliverInboundSDKType {
    messages: string[];
    nums: bigint[];
    ack: bigint;
    submitter: Uint8Array;
}
/** MsgDeliverInboundResponse is an empty reply. */
export interface MsgDeliverInboundResponse {
}
export interface MsgDeliverInboundResponseProtoMsg {
    typeUrl: "/agoric.swingset.MsgDeliverInboundResponse";
    value: Uint8Array;
}
/** MsgDeliverInboundResponse is an empty reply. */
export interface MsgDeliverInboundResponseAmino {
}
export interface MsgDeliverInboundResponseAminoMsg {
    type: "/agoric.swingset.MsgDeliverInboundResponse";
    value: MsgDeliverInboundResponseAmino;
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
export interface MsgWalletActionProtoMsg {
    typeUrl: "/agoric.swingset.MsgWalletAction";
    value: Uint8Array;
}
/**
 * MsgWalletAction defines an SDK message for the on-chain wallet to perform an
 * action that *does not* spend any assets (other than gas fees/stamps).  This
 * message type is typically protected by feegrant budgets.
 */
export interface MsgWalletActionAmino {
    owner: Uint8Array;
    /** The action to perform, as JSON-stringified marshalled data. */
    action: string;
}
export interface MsgWalletActionAminoMsg {
    type: "/agoric.swingset.MsgWalletAction";
    value: MsgWalletActionAmino;
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
export interface MsgWalletActionResponseProtoMsg {
    typeUrl: "/agoric.swingset.MsgWalletActionResponse";
    value: Uint8Array;
}
/** MsgWalletActionResponse is an empty reply. */
export interface MsgWalletActionResponseAmino {
}
export interface MsgWalletActionResponseAminoMsg {
    type: "/agoric.swingset.MsgWalletActionResponse";
    value: MsgWalletActionResponseAmino;
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
export interface MsgWalletSpendActionProtoMsg {
    typeUrl: "/agoric.swingset.MsgWalletSpendAction";
    value: Uint8Array;
}
/**
 * MsgWalletSpendAction defines an SDK message for the on-chain wallet to
 * perform an action that *does spend the owner's assets.*  This message type is
 * typically protected by explicit confirmation by the user.
 */
export interface MsgWalletSpendActionAmino {
    owner: Uint8Array;
    /** The action to perform, as JSON-stringified marshalled data. */
    spend_action: string;
}
export interface MsgWalletSpendActionAminoMsg {
    type: "/agoric.swingset.MsgWalletSpendAction";
    value: MsgWalletSpendActionAmino;
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
export interface MsgWalletSpendActionResponseProtoMsg {
    typeUrl: "/agoric.swingset.MsgWalletSpendActionResponse";
    value: Uint8Array;
}
/** MsgWalletSpendActionResponse is an empty reply. */
export interface MsgWalletSpendActionResponseAmino {
}
export interface MsgWalletSpendActionResponseAminoMsg {
    type: "/agoric.swingset.MsgWalletSpendActionResponse";
    value: MsgWalletSpendActionResponseAmino;
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
export interface MsgProvisionProtoMsg {
    typeUrl: "/agoric.swingset.MsgProvision";
    value: Uint8Array;
}
/** MsgProvision defines an SDK message for provisioning a client to the chain */
export interface MsgProvisionAmino {
    nickname: string;
    address: Uint8Array;
    power_flags: string[];
    submitter: Uint8Array;
}
export interface MsgProvisionAminoMsg {
    type: "/agoric.swingset.MsgProvision";
    value: MsgProvisionAmino;
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
export interface MsgProvisionResponseProtoMsg {
    typeUrl: "/agoric.swingset.MsgProvisionResponse";
    value: Uint8Array;
}
/** MsgProvisionResponse is an empty reply. */
export interface MsgProvisionResponseAmino {
}
export interface MsgProvisionResponseAminoMsg {
    type: "/agoric.swingset.MsgProvisionResponse";
    value: MsgProvisionResponseAmino;
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
    uncompressedSize: bigint;
}
export interface MsgInstallBundleProtoMsg {
    typeUrl: "/agoric.swingset.MsgInstallBundle";
    value: Uint8Array;
}
/** MsgInstallBundle carries a signed bundle to SwingSet. */
export interface MsgInstallBundleAmino {
    bundle: string;
    submitter: Uint8Array;
    /**
     * Either bundle or compressed_bundle will be set.
     * Default compression algorithm is gzip.
     */
    compressed_bundle: Uint8Array;
    /** Size in bytes of uncompression of compressed_bundle. */
    uncompressed_size: string;
}
export interface MsgInstallBundleAminoMsg {
    type: "/agoric.swingset.MsgInstallBundle";
    value: MsgInstallBundleAmino;
}
/** MsgInstallBundle carries a signed bundle to SwingSet. */
export interface MsgInstallBundleSDKType {
    bundle: string;
    submitter: Uint8Array;
    compressed_bundle: Uint8Array;
    uncompressed_size: bigint;
}
/**
 * MsgInstallBundleResponse is an empty acknowledgement that an install bundle
 * message has been queued for the SwingSet kernel's consideration.
 */
export interface MsgInstallBundleResponse {
}
export interface MsgInstallBundleResponseProtoMsg {
    typeUrl: "/agoric.swingset.MsgInstallBundleResponse";
    value: Uint8Array;
}
/**
 * MsgInstallBundleResponse is an empty acknowledgement that an install bundle
 * message has been queued for the SwingSet kernel's consideration.
 */
export interface MsgInstallBundleResponseAmino {
}
export interface MsgInstallBundleResponseAminoMsg {
    type: "/agoric.swingset.MsgInstallBundleResponse";
    value: MsgInstallBundleResponseAmino;
}
/**
 * MsgInstallBundleResponse is an empty acknowledgement that an install bundle
 * message has been queued for the SwingSet kernel's consideration.
 */
export interface MsgInstallBundleResponseSDKType {
}
export declare const MsgDeliverInbound: {
    typeUrl: string;
    encode(message: MsgDeliverInbound, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeliverInbound;
    fromPartial(object: Partial<MsgDeliverInbound>): MsgDeliverInbound;
    fromAmino(object: MsgDeliverInboundAmino): MsgDeliverInbound;
    toAmino(message: MsgDeliverInbound): MsgDeliverInboundAmino;
    fromAminoMsg(object: MsgDeliverInboundAminoMsg): MsgDeliverInbound;
    fromProtoMsg(message: MsgDeliverInboundProtoMsg): MsgDeliverInbound;
    toProto(message: MsgDeliverInbound): Uint8Array;
    toProtoMsg(message: MsgDeliverInbound): MsgDeliverInboundProtoMsg;
};
export declare const MsgDeliverInboundResponse: {
    typeUrl: string;
    encode(_: MsgDeliverInboundResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeliverInboundResponse;
    fromPartial(_: Partial<MsgDeliverInboundResponse>): MsgDeliverInboundResponse;
    fromAmino(_: MsgDeliverInboundResponseAmino): MsgDeliverInboundResponse;
    toAmino(_: MsgDeliverInboundResponse): MsgDeliverInboundResponseAmino;
    fromAminoMsg(object: MsgDeliverInboundResponseAminoMsg): MsgDeliverInboundResponse;
    fromProtoMsg(message: MsgDeliverInboundResponseProtoMsg): MsgDeliverInboundResponse;
    toProto(message: MsgDeliverInboundResponse): Uint8Array;
    toProtoMsg(message: MsgDeliverInboundResponse): MsgDeliverInboundResponseProtoMsg;
};
export declare const MsgWalletAction: {
    typeUrl: string;
    encode(message: MsgWalletAction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWalletAction;
    fromPartial(object: Partial<MsgWalletAction>): MsgWalletAction;
    fromAmino(object: MsgWalletActionAmino): MsgWalletAction;
    toAmino(message: MsgWalletAction): MsgWalletActionAmino;
    fromAminoMsg(object: MsgWalletActionAminoMsg): MsgWalletAction;
    fromProtoMsg(message: MsgWalletActionProtoMsg): MsgWalletAction;
    toProto(message: MsgWalletAction): Uint8Array;
    toProtoMsg(message: MsgWalletAction): MsgWalletActionProtoMsg;
};
export declare const MsgWalletActionResponse: {
    typeUrl: string;
    encode(_: MsgWalletActionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWalletActionResponse;
    fromPartial(_: Partial<MsgWalletActionResponse>): MsgWalletActionResponse;
    fromAmino(_: MsgWalletActionResponseAmino): MsgWalletActionResponse;
    toAmino(_: MsgWalletActionResponse): MsgWalletActionResponseAmino;
    fromAminoMsg(object: MsgWalletActionResponseAminoMsg): MsgWalletActionResponse;
    fromProtoMsg(message: MsgWalletActionResponseProtoMsg): MsgWalletActionResponse;
    toProto(message: MsgWalletActionResponse): Uint8Array;
    toProtoMsg(message: MsgWalletActionResponse): MsgWalletActionResponseProtoMsg;
};
export declare const MsgWalletSpendAction: {
    typeUrl: string;
    encode(message: MsgWalletSpendAction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWalletSpendAction;
    fromPartial(object: Partial<MsgWalletSpendAction>): MsgWalletSpendAction;
    fromAmino(object: MsgWalletSpendActionAmino): MsgWalletSpendAction;
    toAmino(message: MsgWalletSpendAction): MsgWalletSpendActionAmino;
    fromAminoMsg(object: MsgWalletSpendActionAminoMsg): MsgWalletSpendAction;
    fromProtoMsg(message: MsgWalletSpendActionProtoMsg): MsgWalletSpendAction;
    toProto(message: MsgWalletSpendAction): Uint8Array;
    toProtoMsg(message: MsgWalletSpendAction): MsgWalletSpendActionProtoMsg;
};
export declare const MsgWalletSpendActionResponse: {
    typeUrl: string;
    encode(_: MsgWalletSpendActionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWalletSpendActionResponse;
    fromPartial(_: Partial<MsgWalletSpendActionResponse>): MsgWalletSpendActionResponse;
    fromAmino(_: MsgWalletSpendActionResponseAmino): MsgWalletSpendActionResponse;
    toAmino(_: MsgWalletSpendActionResponse): MsgWalletSpendActionResponseAmino;
    fromAminoMsg(object: MsgWalletSpendActionResponseAminoMsg): MsgWalletSpendActionResponse;
    fromProtoMsg(message: MsgWalletSpendActionResponseProtoMsg): MsgWalletSpendActionResponse;
    toProto(message: MsgWalletSpendActionResponse): Uint8Array;
    toProtoMsg(message: MsgWalletSpendActionResponse): MsgWalletSpendActionResponseProtoMsg;
};
export declare const MsgProvision: {
    typeUrl: string;
    encode(message: MsgProvision, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgProvision;
    fromPartial(object: Partial<MsgProvision>): MsgProvision;
    fromAmino(object: MsgProvisionAmino): MsgProvision;
    toAmino(message: MsgProvision): MsgProvisionAmino;
    fromAminoMsg(object: MsgProvisionAminoMsg): MsgProvision;
    fromProtoMsg(message: MsgProvisionProtoMsg): MsgProvision;
    toProto(message: MsgProvision): Uint8Array;
    toProtoMsg(message: MsgProvision): MsgProvisionProtoMsg;
};
export declare const MsgProvisionResponse: {
    typeUrl: string;
    encode(_: MsgProvisionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgProvisionResponse;
    fromPartial(_: Partial<MsgProvisionResponse>): MsgProvisionResponse;
    fromAmino(_: MsgProvisionResponseAmino): MsgProvisionResponse;
    toAmino(_: MsgProvisionResponse): MsgProvisionResponseAmino;
    fromAminoMsg(object: MsgProvisionResponseAminoMsg): MsgProvisionResponse;
    fromProtoMsg(message: MsgProvisionResponseProtoMsg): MsgProvisionResponse;
    toProto(message: MsgProvisionResponse): Uint8Array;
    toProtoMsg(message: MsgProvisionResponse): MsgProvisionResponseProtoMsg;
};
export declare const MsgInstallBundle: {
    typeUrl: string;
    encode(message: MsgInstallBundle, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInstallBundle;
    fromPartial(object: Partial<MsgInstallBundle>): MsgInstallBundle;
    fromAmino(object: MsgInstallBundleAmino): MsgInstallBundle;
    toAmino(message: MsgInstallBundle): MsgInstallBundleAmino;
    fromAminoMsg(object: MsgInstallBundleAminoMsg): MsgInstallBundle;
    fromProtoMsg(message: MsgInstallBundleProtoMsg): MsgInstallBundle;
    toProto(message: MsgInstallBundle): Uint8Array;
    toProtoMsg(message: MsgInstallBundle): MsgInstallBundleProtoMsg;
};
export declare const MsgInstallBundleResponse: {
    typeUrl: string;
    encode(_: MsgInstallBundleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgInstallBundleResponse;
    fromPartial(_: Partial<MsgInstallBundleResponse>): MsgInstallBundleResponse;
    fromAmino(_: MsgInstallBundleResponseAmino): MsgInstallBundleResponse;
    toAmino(_: MsgInstallBundleResponse): MsgInstallBundleResponseAmino;
    fromAminoMsg(object: MsgInstallBundleResponseAminoMsg): MsgInstallBundleResponse;
    fromProtoMsg(message: MsgInstallBundleResponseProtoMsg): MsgInstallBundleResponse;
    toProto(message: MsgInstallBundleResponse): Uint8Array;
    toProtoMsg(message: MsgInstallBundleResponse): MsgInstallBundleResponseProtoMsg;
};
