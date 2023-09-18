import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
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
export interface MsgDeliverInboundResponse {}
export interface MsgDeliverInboundResponseProtoMsg {
  typeUrl: "/agoric.swingset.MsgDeliverInboundResponse";
  value: Uint8Array;
}
/** MsgDeliverInboundResponse is an empty reply. */
export interface MsgDeliverInboundResponseAmino {}
export interface MsgDeliverInboundResponseAminoMsg {
  type: "/agoric.swingset.MsgDeliverInboundResponse";
  value: MsgDeliverInboundResponseAmino;
}
/** MsgDeliverInboundResponse is an empty reply. */
export interface MsgDeliverInboundResponseSDKType {}
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
export interface MsgWalletActionResponse {}
export interface MsgWalletActionResponseProtoMsg {
  typeUrl: "/agoric.swingset.MsgWalletActionResponse";
  value: Uint8Array;
}
/** MsgWalletActionResponse is an empty reply. */
export interface MsgWalletActionResponseAmino {}
export interface MsgWalletActionResponseAminoMsg {
  type: "/agoric.swingset.MsgWalletActionResponse";
  value: MsgWalletActionResponseAmino;
}
/** MsgWalletActionResponse is an empty reply. */
export interface MsgWalletActionResponseSDKType {}
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
export interface MsgWalletSpendActionResponse {}
export interface MsgWalletSpendActionResponseProtoMsg {
  typeUrl: "/agoric.swingset.MsgWalletSpendActionResponse";
  value: Uint8Array;
}
/** MsgWalletSpendActionResponse is an empty reply. */
export interface MsgWalletSpendActionResponseAmino {}
export interface MsgWalletSpendActionResponseAminoMsg {
  type: "/agoric.swingset.MsgWalletSpendActionResponse";
  value: MsgWalletSpendActionResponseAmino;
}
/** MsgWalletSpendActionResponse is an empty reply. */
export interface MsgWalletSpendActionResponseSDKType {}
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
export interface MsgProvisionResponse {}
export interface MsgProvisionResponseProtoMsg {
  typeUrl: "/agoric.swingset.MsgProvisionResponse";
  value: Uint8Array;
}
/** MsgProvisionResponse is an empty reply. */
export interface MsgProvisionResponseAmino {}
export interface MsgProvisionResponseAminoMsg {
  type: "/agoric.swingset.MsgProvisionResponse";
  value: MsgProvisionResponseAmino;
}
/** MsgProvisionResponse is an empty reply. */
export interface MsgProvisionResponseSDKType {}
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
export interface MsgInstallBundleResponse {}
export interface MsgInstallBundleResponseProtoMsg {
  typeUrl: "/agoric.swingset.MsgInstallBundleResponse";
  value: Uint8Array;
}
/**
 * MsgInstallBundleResponse is an empty acknowledgement that an install bundle
 * message has been queued for the SwingSet kernel's consideration.
 */
export interface MsgInstallBundleResponseAmino {}
export interface MsgInstallBundleResponseAminoMsg {
  type: "/agoric.swingset.MsgInstallBundleResponse";
  value: MsgInstallBundleResponseAmino;
}
/**
 * MsgInstallBundleResponse is an empty acknowledgement that an install bundle
 * message has been queued for the SwingSet kernel's consideration.
 */
export interface MsgInstallBundleResponseSDKType {}
function createBaseMsgDeliverInbound(): MsgDeliverInbound {
  return {
    messages: [],
    nums: [],
    ack: BigInt(0),
    submitter: new Uint8Array()
  };
}
export const MsgDeliverInbound = {
  typeUrl: "/agoric.swingset.MsgDeliverInbound",
  encode(message: MsgDeliverInbound, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).fork();
    for (const v of message.nums) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.ack !== BigInt(0)) {
      writer.uint32(24).uint64(message.ack);
    }
    if (message.submitter.length !== 0) {
      writer.uint32(34).bytes(message.submitter);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeliverInbound {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => String(e)) : [],
      nums: Array.isArray(object?.nums) ? object.nums.map((e: any) => BigInt(e.toString())) : [],
      ack: isSet(object.ack) ? BigInt(object.ack.toString()) : BigInt(0),
      submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgDeliverInbound>): MsgDeliverInbound {
    const message = createBaseMsgDeliverInbound();
    message.messages = object.messages?.map(e => e) || [];
    message.nums = object.nums?.map(e => BigInt(e.toString())) || [];
    message.ack = object.ack !== undefined && object.ack !== null ? BigInt(object.ack.toString()) : BigInt(0);
    message.submitter = object.submitter ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgDeliverInboundAmino): MsgDeliverInbound {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => e) : [],
      nums: Array.isArray(object?.nums) ? object.nums.map((e: any) => BigInt(e)) : [],
      ack: BigInt(object.ack),
      submitter: object.submitter
    };
  },
  toAmino(message: MsgDeliverInbound): MsgDeliverInboundAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e);
    } else {
      obj.messages = [];
    }
    if (message.nums) {
      obj.nums = message.nums.map(e => e.toString());
    } else {
      obj.nums = [];
    }
    obj.ack = message.ack ? message.ack.toString() : undefined;
    obj.submitter = message.submitter;
    return obj;
  },
  fromAminoMsg(object: MsgDeliverInboundAminoMsg): MsgDeliverInbound {
    return MsgDeliverInbound.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeliverInboundProtoMsg): MsgDeliverInbound {
    return MsgDeliverInbound.decode(message.value);
  },
  toProto(message: MsgDeliverInbound): Uint8Array {
    return MsgDeliverInbound.encode(message).finish();
  },
  toProtoMsg(message: MsgDeliverInbound): MsgDeliverInboundProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgDeliverInbound",
      value: MsgDeliverInbound.encode(message).finish()
    };
  }
};
function createBaseMsgDeliverInboundResponse(): MsgDeliverInboundResponse {
  return {};
}
export const MsgDeliverInboundResponse = {
  typeUrl: "/agoric.swingset.MsgDeliverInboundResponse",
  encode(_: MsgDeliverInboundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeliverInboundResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeliverInboundResponse>): MsgDeliverInboundResponse {
    const message = createBaseMsgDeliverInboundResponse();
    return message;
  },
  fromAmino(_: MsgDeliverInboundResponseAmino): MsgDeliverInboundResponse {
    return {};
  },
  toAmino(_: MsgDeliverInboundResponse): MsgDeliverInboundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeliverInboundResponseAminoMsg): MsgDeliverInboundResponse {
    return MsgDeliverInboundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeliverInboundResponseProtoMsg): MsgDeliverInboundResponse {
    return MsgDeliverInboundResponse.decode(message.value);
  },
  toProto(message: MsgDeliverInboundResponse): Uint8Array {
    return MsgDeliverInboundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeliverInboundResponse): MsgDeliverInboundResponseProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgDeliverInboundResponse",
      value: MsgDeliverInboundResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWalletAction(): MsgWalletAction {
  return {
    owner: new Uint8Array(),
    action: ""
  };
}
export const MsgWalletAction = {
  typeUrl: "/agoric.swingset.MsgWalletAction",
  encode(message: MsgWalletAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner.length !== 0) {
      writer.uint32(10).bytes(message.owner);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    return writer;
  },
  fromJSON(object: any): MsgWalletAction {
    return {
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      action: isSet(object.action) ? String(object.action) : ""
    };
  },
  fromPartial(object: Partial<MsgWalletAction>): MsgWalletAction {
    const message = createBaseMsgWalletAction();
    message.owner = object.owner ?? new Uint8Array();
    message.action = object.action ?? "";
    return message;
  },
  fromAmino(object: MsgWalletActionAmino): MsgWalletAction {
    return {
      owner: object.owner,
      action: object.action
    };
  },
  toAmino(message: MsgWalletAction): MsgWalletActionAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.action = message.action;
    return obj;
  },
  fromAminoMsg(object: MsgWalletActionAminoMsg): MsgWalletAction {
    return MsgWalletAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWalletActionProtoMsg): MsgWalletAction {
    return MsgWalletAction.decode(message.value);
  },
  toProto(message: MsgWalletAction): Uint8Array {
    return MsgWalletAction.encode(message).finish();
  },
  toProtoMsg(message: MsgWalletAction): MsgWalletActionProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgWalletAction",
      value: MsgWalletAction.encode(message).finish()
    };
  }
};
function createBaseMsgWalletActionResponse(): MsgWalletActionResponse {
  return {};
}
export const MsgWalletActionResponse = {
  typeUrl: "/agoric.swingset.MsgWalletActionResponse",
  encode(_: MsgWalletActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWalletActionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWalletActionResponse>): MsgWalletActionResponse {
    const message = createBaseMsgWalletActionResponse();
    return message;
  },
  fromAmino(_: MsgWalletActionResponseAmino): MsgWalletActionResponse {
    return {};
  },
  toAmino(_: MsgWalletActionResponse): MsgWalletActionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWalletActionResponseAminoMsg): MsgWalletActionResponse {
    return MsgWalletActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWalletActionResponseProtoMsg): MsgWalletActionResponse {
    return MsgWalletActionResponse.decode(message.value);
  },
  toProto(message: MsgWalletActionResponse): Uint8Array {
    return MsgWalletActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWalletActionResponse): MsgWalletActionResponseProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgWalletActionResponse",
      value: MsgWalletActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWalletSpendAction(): MsgWalletSpendAction {
  return {
    owner: new Uint8Array(),
    spendAction: ""
  };
}
export const MsgWalletSpendAction = {
  typeUrl: "/agoric.swingset.MsgWalletSpendAction",
  encode(message: MsgWalletSpendAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner.length !== 0) {
      writer.uint32(10).bytes(message.owner);
    }
    if (message.spendAction !== "") {
      writer.uint32(18).string(message.spendAction);
    }
    return writer;
  },
  fromJSON(object: any): MsgWalletSpendAction {
    return {
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      spendAction: isSet(object.spendAction) ? String(object.spendAction) : ""
    };
  },
  fromPartial(object: Partial<MsgWalletSpendAction>): MsgWalletSpendAction {
    const message = createBaseMsgWalletSpendAction();
    message.owner = object.owner ?? new Uint8Array();
    message.spendAction = object.spendAction ?? "";
    return message;
  },
  fromAmino(object: MsgWalletSpendActionAmino): MsgWalletSpendAction {
    return {
      owner: object.owner,
      spendAction: object.spend_action
    };
  },
  toAmino(message: MsgWalletSpendAction): MsgWalletSpendActionAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.spend_action = message.spendAction;
    return obj;
  },
  fromAminoMsg(object: MsgWalletSpendActionAminoMsg): MsgWalletSpendAction {
    return MsgWalletSpendAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWalletSpendActionProtoMsg): MsgWalletSpendAction {
    return MsgWalletSpendAction.decode(message.value);
  },
  toProto(message: MsgWalletSpendAction): Uint8Array {
    return MsgWalletSpendAction.encode(message).finish();
  },
  toProtoMsg(message: MsgWalletSpendAction): MsgWalletSpendActionProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgWalletSpendAction",
      value: MsgWalletSpendAction.encode(message).finish()
    };
  }
};
function createBaseMsgWalletSpendActionResponse(): MsgWalletSpendActionResponse {
  return {};
}
export const MsgWalletSpendActionResponse = {
  typeUrl: "/agoric.swingset.MsgWalletSpendActionResponse",
  encode(_: MsgWalletSpendActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWalletSpendActionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWalletSpendActionResponse>): MsgWalletSpendActionResponse {
    const message = createBaseMsgWalletSpendActionResponse();
    return message;
  },
  fromAmino(_: MsgWalletSpendActionResponseAmino): MsgWalletSpendActionResponse {
    return {};
  },
  toAmino(_: MsgWalletSpendActionResponse): MsgWalletSpendActionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWalletSpendActionResponseAminoMsg): MsgWalletSpendActionResponse {
    return MsgWalletSpendActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWalletSpendActionResponseProtoMsg): MsgWalletSpendActionResponse {
    return MsgWalletSpendActionResponse.decode(message.value);
  },
  toProto(message: MsgWalletSpendActionResponse): Uint8Array {
    return MsgWalletSpendActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWalletSpendActionResponse): MsgWalletSpendActionResponseProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgWalletSpendActionResponse",
      value: MsgWalletSpendActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProvision(): MsgProvision {
  return {
    nickname: "",
    address: new Uint8Array(),
    powerFlags: [],
    submitter: new Uint8Array()
  };
}
export const MsgProvision = {
  typeUrl: "/agoric.swingset.MsgProvision",
  encode(message: MsgProvision, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nickname !== "") {
      writer.uint32(10).string(message.nickname);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    for (const v of message.powerFlags) {
      writer.uint32(26).string(v!);
    }
    if (message.submitter.length !== 0) {
      writer.uint32(34).bytes(message.submitter);
    }
    return writer;
  },
  fromJSON(object: any): MsgProvision {
    return {
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      powerFlags: Array.isArray(object?.powerFlags) ? object.powerFlags.map((e: any) => String(e)) : [],
      submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgProvision>): MsgProvision {
    const message = createBaseMsgProvision();
    message.nickname = object.nickname ?? "";
    message.address = object.address ?? new Uint8Array();
    message.powerFlags = object.powerFlags?.map(e => e) || [];
    message.submitter = object.submitter ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgProvisionAmino): MsgProvision {
    return {
      nickname: object.nickname,
      address: object.address,
      powerFlags: Array.isArray(object?.power_flags) ? object.power_flags.map((e: any) => e) : [],
      submitter: object.submitter
    };
  },
  toAmino(message: MsgProvision): MsgProvisionAmino {
    const obj: any = {};
    obj.nickname = message.nickname;
    obj.address = message.address;
    if (message.powerFlags) {
      obj.power_flags = message.powerFlags.map(e => e);
    } else {
      obj.power_flags = [];
    }
    obj.submitter = message.submitter;
    return obj;
  },
  fromAminoMsg(object: MsgProvisionAminoMsg): MsgProvision {
    return MsgProvision.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProvisionProtoMsg): MsgProvision {
    return MsgProvision.decode(message.value);
  },
  toProto(message: MsgProvision): Uint8Array {
    return MsgProvision.encode(message).finish();
  },
  toProtoMsg(message: MsgProvision): MsgProvisionProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgProvision",
      value: MsgProvision.encode(message).finish()
    };
  }
};
function createBaseMsgProvisionResponse(): MsgProvisionResponse {
  return {};
}
export const MsgProvisionResponse = {
  typeUrl: "/agoric.swingset.MsgProvisionResponse",
  encode(_: MsgProvisionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgProvisionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgProvisionResponse>): MsgProvisionResponse {
    const message = createBaseMsgProvisionResponse();
    return message;
  },
  fromAmino(_: MsgProvisionResponseAmino): MsgProvisionResponse {
    return {};
  },
  toAmino(_: MsgProvisionResponse): MsgProvisionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProvisionResponseAminoMsg): MsgProvisionResponse {
    return MsgProvisionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProvisionResponseProtoMsg): MsgProvisionResponse {
    return MsgProvisionResponse.decode(message.value);
  },
  toProto(message: MsgProvisionResponse): Uint8Array {
    return MsgProvisionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProvisionResponse): MsgProvisionResponseProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgProvisionResponse",
      value: MsgProvisionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstallBundle(): MsgInstallBundle {
  return {
    bundle: "",
    submitter: new Uint8Array(),
    compressedBundle: new Uint8Array(),
    uncompressedSize: BigInt(0)
  };
}
export const MsgInstallBundle = {
  typeUrl: "/agoric.swingset.MsgInstallBundle",
  encode(message: MsgInstallBundle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bundle !== "") {
      writer.uint32(10).string(message.bundle);
    }
    if (message.submitter.length !== 0) {
      writer.uint32(18).bytes(message.submitter);
    }
    if (message.compressedBundle.length !== 0) {
      writer.uint32(26).bytes(message.compressedBundle);
    }
    if (message.uncompressedSize !== BigInt(0)) {
      writer.uint32(32).int64(message.uncompressedSize);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstallBundle {
    return {
      bundle: isSet(object.bundle) ? String(object.bundle) : "",
      submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array(),
      compressedBundle: isSet(object.compressedBundle) ? bytesFromBase64(object.compressedBundle) : new Uint8Array(),
      uncompressedSize: isSet(object.uncompressedSize) ? BigInt(object.uncompressedSize.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgInstallBundle>): MsgInstallBundle {
    const message = createBaseMsgInstallBundle();
    message.bundle = object.bundle ?? "";
    message.submitter = object.submitter ?? new Uint8Array();
    message.compressedBundle = object.compressedBundle ?? new Uint8Array();
    message.uncompressedSize = object.uncompressedSize !== undefined && object.uncompressedSize !== null ? BigInt(object.uncompressedSize.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgInstallBundleAmino): MsgInstallBundle {
    return {
      bundle: object.bundle,
      submitter: object.submitter,
      compressedBundle: object.compressed_bundle,
      uncompressedSize: BigInt(object.uncompressed_size)
    };
  },
  toAmino(message: MsgInstallBundle): MsgInstallBundleAmino {
    const obj: any = {};
    obj.bundle = message.bundle;
    obj.submitter = message.submitter;
    obj.compressed_bundle = message.compressedBundle;
    obj.uncompressed_size = message.uncompressedSize ? message.uncompressedSize.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgInstallBundleAminoMsg): MsgInstallBundle {
    return MsgInstallBundle.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstallBundleProtoMsg): MsgInstallBundle {
    return MsgInstallBundle.decode(message.value);
  },
  toProto(message: MsgInstallBundle): Uint8Array {
    return MsgInstallBundle.encode(message).finish();
  },
  toProtoMsg(message: MsgInstallBundle): MsgInstallBundleProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgInstallBundle",
      value: MsgInstallBundle.encode(message).finish()
    };
  }
};
function createBaseMsgInstallBundleResponse(): MsgInstallBundleResponse {
  return {};
}
export const MsgInstallBundleResponse = {
  typeUrl: "/agoric.swingset.MsgInstallBundleResponse",
  encode(_: MsgInstallBundleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgInstallBundleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstallBundleResponse>): MsgInstallBundleResponse {
    const message = createBaseMsgInstallBundleResponse();
    return message;
  },
  fromAmino(_: MsgInstallBundleResponseAmino): MsgInstallBundleResponse {
    return {};
  },
  toAmino(_: MsgInstallBundleResponse): MsgInstallBundleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInstallBundleResponseAminoMsg): MsgInstallBundleResponse {
    return MsgInstallBundleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstallBundleResponseProtoMsg): MsgInstallBundleResponse {
    return MsgInstallBundleResponse.decode(message.value);
  },
  toProto(message: MsgInstallBundleResponse): Uint8Array {
    return MsgInstallBundleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstallBundleResponse): MsgInstallBundleResponseProtoMsg {
    return {
      typeUrl: "/agoric.swingset.MsgInstallBundleResponse",
      value: MsgInstallBundleResponse.encode(message).finish()
    };
  }
};