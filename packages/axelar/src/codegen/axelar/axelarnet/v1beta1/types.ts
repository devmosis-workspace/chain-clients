import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export enum IBCTransfer_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_PENDING = 1,
  STATUS_COMPLETED = 2,
  STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}
export const IBCTransfer_StatusSDKType = IBCTransfer_Status;
export const IBCTransfer_StatusAmino = IBCTransfer_Status;
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
  token: Coin;
  portId: string;
  channelId: string;
  /** @deprecated */
  sequence: bigint;
  id: bigint;
  status: IBCTransfer_Status;
}
export interface IBCTransferProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransfer";
  value: Uint8Array;
}
export interface IBCTransferAmino {
  sender: Uint8Array;
  receiver: string;
  token?: CoinAmino;
  port_id: string;
  channel_id: string;
  /** @deprecated */
  sequence: string;
  id: string;
  status: IBCTransfer_Status;
}
export interface IBCTransferAminoMsg {
  type: "/axelar.axelarnet.v1beta1.IBCTransfer";
  value: IBCTransferAmino;
}
export interface IBCTransferSDKType {
  sender: Uint8Array;
  receiver: string;
  token: CoinSDKType;
  port_id: string;
  channel_id: string;
  /** @deprecated */
  sequence: bigint;
  id: bigint;
  status: IBCTransfer_Status;
}
export interface CosmosChain {
  name: string;
  ibcPath: string;
  /** @deprecated */
  assets: Asset[];
  addrPrefix: string;
}
export interface CosmosChainProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.CosmosChain";
  value: Uint8Array;
}
export interface CosmosChainAmino {
  name: string;
  ibc_path: string;
  /** @deprecated */
  assets: AssetAmino[];
  addr_prefix: string;
}
export interface CosmosChainAminoMsg {
  type: "/axelar.axelarnet.v1beta1.CosmosChain";
  value: CosmosChainAmino;
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
export interface AssetProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.Asset";
  value: Uint8Array;
}
/** @deprecated */
export interface AssetAmino {
  denom: string;
  min_amount: Uint8Array;
}
export interface AssetAminoMsg {
  type: "/axelar.axelarnet.v1beta1.Asset";
  value: AssetAmino;
}
/** @deprecated */
export interface AssetSDKType {
  denom: string;
  min_amount: Uint8Array;
}
export interface Fee {
  amount: Coin;
  recipient: Uint8Array;
  refundRecipient: Uint8Array;
}
export interface FeeProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.Fee";
  value: Uint8Array;
}
export interface FeeAmino {
  amount?: CoinAmino;
  recipient: Uint8Array;
  refund_recipient: Uint8Array;
}
export interface FeeAminoMsg {
  type: "/axelar.axelarnet.v1beta1.Fee";
  value: FeeAmino;
}
export interface FeeSDKType {
  amount: CoinSDKType;
  recipient: Uint8Array;
  refund_recipient: Uint8Array;
}
function createBaseIBCTransfer(): IBCTransfer {
  return {
    sender: new Uint8Array(),
    receiver: "",
    token: Coin.fromPartial({}),
    portId: "",
    channelId: "",
    sequence: BigInt(0),
    id: BigInt(0),
    status: 0
  };
}
export const IBCTransfer = {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransfer",
  encode(message: IBCTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.sequence !== BigInt(0)) {
      writer.uint32(48).uint64(message.sequence);
    }
    if (message.id !== BigInt(0)) {
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
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      status: isSet(object.status) ? iBCTransfer_StatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<IBCTransfer>): IBCTransfer {
    const message = createBaseIBCTransfer();
    message.sender = object.sender ?? new Uint8Array();
    message.receiver = object.receiver ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: IBCTransferAmino): IBCTransfer {
    return {
      sender: object.sender,
      receiver: object.receiver,
      token: object?.token ? Coin.fromAmino(object.token) : undefined,
      portId: object.port_id,
      channelId: object.channel_id,
      sequence: BigInt(object.sequence),
      id: BigInt(object.id),
      status: isSet(object.status) ? iBCTransfer_StatusFromJSON(object.status) : -1
    };
  },
  toAmino(message: IBCTransfer): IBCTransferAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: IBCTransferAminoMsg): IBCTransfer {
    return IBCTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCTransferProtoMsg): IBCTransfer {
    return IBCTransfer.decode(message.value);
  },
  toProto(message: IBCTransfer): Uint8Array {
    return IBCTransfer.encode(message).finish();
  },
  toProtoMsg(message: IBCTransfer): IBCTransferProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.IBCTransfer",
      value: IBCTransfer.encode(message).finish()
    };
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
  typeUrl: "/axelar.axelarnet.v1beta1.CosmosChain",
  encode(message: CosmosChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CosmosChainAmino): CosmosChain {
    return {
      name: object.name,
      ibcPath: object.ibc_path,
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromAmino(e)) : [],
      addrPrefix: object.addr_prefix
    };
  },
  toAmino(message: CosmosChain): CosmosChainAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.ibc_path = message.ibcPath;
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }
    obj.addr_prefix = message.addrPrefix;
    return obj;
  },
  fromAminoMsg(object: CosmosChainAminoMsg): CosmosChain {
    return CosmosChain.fromAmino(object.value);
  },
  fromProtoMsg(message: CosmosChainProtoMsg): CosmosChain {
    return CosmosChain.decode(message.value);
  },
  toProto(message: CosmosChain): Uint8Array {
    return CosmosChain.encode(message).finish();
  },
  toProtoMsg(message: CosmosChain): CosmosChainProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.CosmosChain",
      value: CosmosChain.encode(message).finish()
    };
  }
};
function createBaseAsset(): Asset {
  return {
    denom: "",
    minAmount: new Uint8Array()
  };
}
export const Asset = {
  typeUrl: "/axelar.axelarnet.v1beta1.Asset",
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AssetAmino): Asset {
    return {
      denom: object.denom,
      minAmount: object.min_amount
    };
  },
  toAmino(message: Asset): AssetAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.min_amount = message.minAmount;
    return obj;
  },
  fromAminoMsg(object: AssetAminoMsg): Asset {
    return Asset.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetProtoMsg): Asset {
    return Asset.decode(message.value);
  },
  toProto(message: Asset): Uint8Array {
    return Asset.encode(message).finish();
  },
  toProtoMsg(message: Asset): AssetProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.Asset",
      value: Asset.encode(message).finish()
    };
  }
};
function createBaseFee(): Fee {
  return {
    amount: Coin.fromPartial({}),
    recipient: new Uint8Array(),
    refundRecipient: new Uint8Array()
  };
}
export const Fee = {
  typeUrl: "/axelar.axelarnet.v1beta1.Fee",
  encode(message: Fee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.recipient.length !== 0) {
      writer.uint32(18).bytes(message.recipient);
    }
    if (message.refundRecipient.length !== 0) {
      writer.uint32(26).bytes(message.refundRecipient);
    }
    return writer;
  },
  fromJSON(object: any): Fee {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
      refundRecipient: isSet(object.refundRecipient) ? bytesFromBase64(object.refundRecipient) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Fee>): Fee {
    const message = createBaseFee();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.recipient = object.recipient ?? new Uint8Array();
    message.refundRecipient = object.refundRecipient ?? new Uint8Array();
    return message;
  },
  fromAmino(object: FeeAmino): Fee {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      recipient: object.recipient,
      refundRecipient: object.refund_recipient
    };
  },
  toAmino(message: Fee): FeeAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.recipient = message.recipient;
    obj.refund_recipient = message.refundRecipient;
    return obj;
  },
  fromAminoMsg(object: FeeAminoMsg): Fee {
    return Fee.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeProtoMsg): Fee {
    return Fee.decode(message.value);
  },
  toProto(message: Fee): Uint8Array {
    return Fee.encode(message).finish();
  },
  toProtoMsg(message: Fee): FeeProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.Fee",
      value: Fee.encode(message).finish()
    };
  }
};