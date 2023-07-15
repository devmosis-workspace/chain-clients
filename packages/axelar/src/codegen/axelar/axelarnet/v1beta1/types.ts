import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum IBCTransfer_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_PENDING = 1,
  STATUS_COMPLETED = 2,
  STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}
export const IBCTransfer_StatusSDKType = IBCTransfer_Status;
export function iBCTransfer_StatusFromJSON(object: any): IBCTransfer_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return IBCTransfer_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_PENDING":
      return IBCTransfer_Status.STATUS_PENDING;
    case 2:
    case "STATUS_COMPLETED":
      return IBCTransfer_Status.STATUS_COMPLETED;
    case 3:
    case "STATUS_FAILED":
      return IBCTransfer_Status.STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IBCTransfer_Status.UNRECOGNIZED;
  }
}
export function iBCTransfer_StatusToJSON(object: IBCTransfer_Status): string {
  switch (object) {
    case IBCTransfer_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case IBCTransfer_Status.STATUS_PENDING:
      return "STATUS_PENDING";
    case IBCTransfer_Status.STATUS_COMPLETED:
      return "STATUS_COMPLETED";
    case IBCTransfer_Status.STATUS_FAILED:
      return "STATUS_FAILED";
    case IBCTransfer_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface IBCTransfer {
  sender: Uint8Array;
  receiver: string;
  token?: Coin;
  portId: string;
  channelId: string;
  /** @deprecated */
  sequence: Long;
  id: Long;
  status: IBCTransfer_Status;
}
export interface IBCTransferSDKType {
  sender: Uint8Array;
  receiver: string;
  token?: CoinSDKType;
  port_id: string;
  channel_id: string;
  /** @deprecated */
  sequence: Long;
  id: Long;
  status: IBCTransfer_Status;
}
export interface CosmosChain {
  name: string;
  ibcPath: string;
  /** @deprecated */
  assets: Asset[];
  addrPrefix: string;
}
export interface CosmosChainSDKType {
  name: string;
  ibc_path: string;
  /** @deprecated */
  assets: AssetSDKType[];
  addr_prefix: string;
}
/** @deprecated */
export interface Asset {
  denom: string;
  minAmount: Uint8Array;
}
/** @deprecated */
export interface AssetSDKType {
  denom: string;
  min_amount: Uint8Array;
}
export interface Fee {
  amount?: Coin;
  recipient: Uint8Array;
}
export interface FeeSDKType {
  amount?: CoinSDKType;
  recipient: Uint8Array;
}
function createBaseIBCTransfer(): IBCTransfer {
  return {
    sender: new Uint8Array(),
    receiver: "",
    token: undefined,
    portId: "",
    channelId: "",
    sequence: Long.UZERO,
    id: Long.UZERO,
    status: 0
  };
}
export const IBCTransfer = {
  encode(message: IBCTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(34).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(42).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(48).uint64(message.sequence);
    }
    if (!message.id.isZero()) {
      writer.uint32(56).uint64(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): IBCTransfer {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      status: isSet(object.status) ? iBCTransfer_StatusFromJSON(object.status) : 0
    };
  },
  fromPartial(object: Partial<IBCTransfer>): IBCTransfer {
    const message = createBaseIBCTransfer();
    message.sender = object.sender ?? new Uint8Array();
    message.receiver = object.receiver ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseCosmosChain(): CosmosChain {
  return {
    name: "",
    ibcPath: "",
    assets: [],
    addrPrefix: ""
  };
}
export const CosmosChain = {
  encode(message: CosmosChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.ibcPath !== "") {
      writer.uint32(18).string(message.ibcPath);
    }
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.addrPrefix !== "") {
      writer.uint32(34).string(message.addrPrefix);
    }
    return writer;
  },
  fromJSON(object: any): CosmosChain {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : "",
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      addrPrefix: isSet(object.addrPrefix) ? String(object.addrPrefix) : ""
    };
  },
  fromPartial(object: Partial<CosmosChain>): CosmosChain {
    const message = createBaseCosmosChain();
    message.name = object.name ?? "";
    message.ibcPath = object.ibcPath ?? "";
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.addrPrefix = object.addrPrefix ?? "";
    return message;
  }
};
function createBaseAsset(): Asset {
  return {
    denom: "",
    minAmount: new Uint8Array()
  };
}
export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.minAmount.length !== 0) {
      writer.uint32(18).bytes(message.minAmount);
    }
    return writer;
  },
  fromJSON(object: any): Asset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      minAmount: isSet(object.minAmount) ? bytesFromBase64(object.minAmount) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.denom = object.denom ?? "";
    message.minAmount = object.minAmount ?? new Uint8Array();
    return message;
  }
};
function createBaseFee(): Fee {
  return {
    amount: undefined,
    recipient: new Uint8Array()
  };
}
export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.recipient.length !== 0) {
      writer.uint32(18).bytes(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): Fee {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Fee>): Fee {
    const message = createBaseFee();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.recipient = object.recipient ?? new Uint8Array();
    return message;
  }
};