import { Long, isSet, bytesFromBase64 } from "../../helpers";
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
export interface MsgDeliverInboundResponse {}
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
/** MsgWalletSpendActionResponse is an empty reply. */
export interface MsgWalletSpendActionResponseSDKType {}
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
export interface MsgProvisionResponse {}
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
export interface MsgInstallBundleResponse {}
/**
 * MsgInstallBundleResponse is an empty acknowledgement that an install bundle
 * message has been queued for the SwingSet kernel's consideration.
 */
export interface MsgInstallBundleResponseSDKType {}
function createBaseMsgDeliverInbound(): MsgDeliverInbound {
  return {
    messages: [],
    nums: [],
    ack: Long.UZERO,
    submitter: new Uint8Array()
  };
}
export const MsgDeliverInbound = {
  encode(message: MsgDeliverInbound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).fork();
    for (const v of message.nums) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.ack.isZero()) {
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
      nums: Array.isArray(object?.nums) ? object.nums.map((e: any) => Long.fromValue(e)) : [],
      ack: isSet(object.ack) ? Long.fromValue(object.ack) : Long.UZERO,
      submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgDeliverInbound>): MsgDeliverInbound {
    const message = createBaseMsgDeliverInbound();
    message.messages = object.messages?.map(e => e) || [];
    message.nums = object.nums?.map(e => Long.fromValue(e)) || [];
    message.ack = object.ack !== undefined && object.ack !== null ? Long.fromValue(object.ack) : Long.UZERO;
    message.submitter = object.submitter ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgDeliverInboundResponse(): MsgDeliverInboundResponse {
  return {};
}
export const MsgDeliverInboundResponse = {
  encode(_: MsgDeliverInboundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeliverInboundResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeliverInboundResponse>): MsgDeliverInboundResponse {
    const message = createBaseMsgDeliverInboundResponse();
    return message;
  }
};
function createBaseMsgWalletAction(): MsgWalletAction {
  return {
    owner: new Uint8Array(),
    action: ""
  };
}
export const MsgWalletAction = {
  encode(message: MsgWalletAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgWalletActionResponse(): MsgWalletActionResponse {
  return {};
}
export const MsgWalletActionResponse = {
  encode(_: MsgWalletActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgWalletActionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWalletActionResponse>): MsgWalletActionResponse {
    const message = createBaseMsgWalletActionResponse();
    return message;
  }
};
function createBaseMsgWalletSpendAction(): MsgWalletSpendAction {
  return {
    owner: new Uint8Array(),
    spendAction: ""
  };
}
export const MsgWalletSpendAction = {
  encode(message: MsgWalletSpendAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgWalletSpendActionResponse(): MsgWalletSpendActionResponse {
  return {};
}
export const MsgWalletSpendActionResponse = {
  encode(_: MsgWalletSpendActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgWalletSpendActionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWalletSpendActionResponse>): MsgWalletSpendActionResponse {
    const message = createBaseMsgWalletSpendActionResponse();
    return message;
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
  encode(message: MsgProvision, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgProvisionResponse(): MsgProvisionResponse {
  return {};
}
export const MsgProvisionResponse = {
  encode(_: MsgProvisionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgProvisionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgProvisionResponse>): MsgProvisionResponse {
    const message = createBaseMsgProvisionResponse();
    return message;
  }
};
function createBaseMsgInstallBundle(): MsgInstallBundle {
  return {
    bundle: "",
    submitter: new Uint8Array(),
    compressedBundle: new Uint8Array(),
    uncompressedSize: Long.ZERO
  };
}
export const MsgInstallBundle = {
  encode(message: MsgInstallBundle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bundle !== "") {
      writer.uint32(10).string(message.bundle);
    }
    if (message.submitter.length !== 0) {
      writer.uint32(18).bytes(message.submitter);
    }
    if (message.compressedBundle.length !== 0) {
      writer.uint32(26).bytes(message.compressedBundle);
    }
    if (!message.uncompressedSize.isZero()) {
      writer.uint32(32).int64(message.uncompressedSize);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstallBundle {
    return {
      bundle: isSet(object.bundle) ? String(object.bundle) : "",
      submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array(),
      compressedBundle: isSet(object.compressedBundle) ? bytesFromBase64(object.compressedBundle) : new Uint8Array(),
      uncompressedSize: isSet(object.uncompressedSize) ? Long.fromValue(object.uncompressedSize) : Long.ZERO
    };
  },
  fromPartial(object: Partial<MsgInstallBundle>): MsgInstallBundle {
    const message = createBaseMsgInstallBundle();
    message.bundle = object.bundle ?? "";
    message.submitter = object.submitter ?? new Uint8Array();
    message.compressedBundle = object.compressedBundle ?? new Uint8Array();
    message.uncompressedSize = object.uncompressedSize !== undefined && object.uncompressedSize !== null ? Long.fromValue(object.uncompressedSize) : Long.ZERO;
    return message;
  }
};
function createBaseMsgInstallBundleResponse(): MsgInstallBundleResponse {
  return {};
}
export const MsgInstallBundleResponse = {
  encode(_: MsgInstallBundleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgInstallBundleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInstallBundleResponse>): MsgInstallBundleResponse {
    const message = createBaseMsgInstallBundleResponse();
    return message;
  }
};