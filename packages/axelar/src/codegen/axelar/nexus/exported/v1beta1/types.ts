import { KeyType, keyTypeFromJSON } from "../../../tss/exported/v1beta1/types";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum TransferState {
  TRANSFER_STATE_UNSPECIFIED = 0,
  TRANSFER_STATE_PENDING = 1,
  TRANSFER_STATE_ARCHIVED = 2,
  TRANSFER_STATE_INSUFFICIENT_AMOUNT = 3,
  UNRECOGNIZED = -1,
}
export const TransferStateSDKType = TransferState;
export function transferStateFromJSON(object: any): TransferState {
  switch (object) {
    case 0:
    case "TRANSFER_STATE_UNSPECIFIED":
      return TransferState.TRANSFER_STATE_UNSPECIFIED;
    case 1:
    case "TRANSFER_STATE_PENDING":
      return TransferState.TRANSFER_STATE_PENDING;
    case 2:
    case "TRANSFER_STATE_ARCHIVED":
      return TransferState.TRANSFER_STATE_ARCHIVED;
    case 3:
    case "TRANSFER_STATE_INSUFFICIENT_AMOUNT":
      return TransferState.TRANSFER_STATE_INSUFFICIENT_AMOUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferState.UNRECOGNIZED;
  }
}
export function transferStateToJSON(object: TransferState): string {
  switch (object) {
    case TransferState.TRANSFER_STATE_UNSPECIFIED:
      return "TRANSFER_STATE_UNSPECIFIED";
    case TransferState.TRANSFER_STATE_PENDING:
      return "TRANSFER_STATE_PENDING";
    case TransferState.TRANSFER_STATE_ARCHIVED:
      return "TRANSFER_STATE_ARCHIVED";
    case TransferState.TRANSFER_STATE_INSUFFICIENT_AMOUNT:
      return "TRANSFER_STATE_INSUFFICIENT_AMOUNT";
    case TransferState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum TransferDirection {
  TRANSFER_DIRECTION_UNSPECIFIED = 0,
  TRANSFER_DIRECTION_INCOMING = 1,
  TRANSFER_DIRECTION_OUTGOING = 2,
  UNRECOGNIZED = -1,
}
export const TransferDirectionSDKType = TransferDirection;
export function transferDirectionFromJSON(object: any): TransferDirection {
  switch (object) {
    case 0:
    case "TRANSFER_DIRECTION_UNSPECIFIED":
      return TransferDirection.TRANSFER_DIRECTION_UNSPECIFIED;
    case 1:
    case "TRANSFER_DIRECTION_INCOMING":
      return TransferDirection.TRANSFER_DIRECTION_INCOMING;
    case 2:
    case "TRANSFER_DIRECTION_OUTGOING":
      return TransferDirection.TRANSFER_DIRECTION_OUTGOING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferDirection.UNRECOGNIZED;
  }
}
export function transferDirectionToJSON(object: TransferDirection): string {
  switch (object) {
    case TransferDirection.TRANSFER_DIRECTION_UNSPECIFIED:
      return "TRANSFER_DIRECTION_UNSPECIFIED";
    case TransferDirection.TRANSFER_DIRECTION_INCOMING:
      return "TRANSFER_DIRECTION_INCOMING";
    case TransferDirection.TRANSFER_DIRECTION_OUTGOING:
      return "TRANSFER_DIRECTION_OUTGOING";
    case TransferDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum GeneralMessage_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_APPROVED = 1,
  STATUS_PROCESSING = 2,
  STATUS_EXECUTED = 3,
  STATUS_FAILED = 4,
  UNRECOGNIZED = -1,
}
export const GeneralMessage_StatusSDKType = GeneralMessage_Status;
export function generalMessage_StatusFromJSON(object: any): GeneralMessage_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return GeneralMessage_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_APPROVED":
      return GeneralMessage_Status.STATUS_APPROVED;
    case 2:
    case "STATUS_PROCESSING":
      return GeneralMessage_Status.STATUS_PROCESSING;
    case 3:
    case "STATUS_EXECUTED":
      return GeneralMessage_Status.STATUS_EXECUTED;
    case 4:
    case "STATUS_FAILED":
      return GeneralMessage_Status.STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneralMessage_Status.UNRECOGNIZED;
  }
}
export function generalMessage_StatusToJSON(object: GeneralMessage_Status): string {
  switch (object) {
    case GeneralMessage_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case GeneralMessage_Status.STATUS_APPROVED:
      return "STATUS_APPROVED";
    case GeneralMessage_Status.STATUS_PROCESSING:
      return "STATUS_PROCESSING";
    case GeneralMessage_Status.STATUS_EXECUTED:
      return "STATUS_EXECUTED";
    case GeneralMessage_Status.STATUS_FAILED:
      return "STATUS_FAILED";
    case GeneralMessage_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Chain represents the properties of a registered blockchain */
export interface Chain {
  name: string;
  supportsForeignAssets: boolean;
  keyType: KeyType;
  module: string;
}
/** Chain represents the properties of a registered blockchain */
export interface ChainSDKType {
  name: string;
  supports_foreign_assets: boolean;
  key_type: KeyType;
  module: string;
}
/** CrossChainAddress represents a generalized address on any registered chain */
export interface CrossChainAddress {
  chain?: Chain;
  address: string;
}
/** CrossChainAddress represents a generalized address on any registered chain */
export interface CrossChainAddressSDKType {
  chain?: ChainSDKType;
  address: string;
}
/**
 * CrossChainTransfer represents a generalized transfer of some asset to a
 * registered blockchain
 */
export interface CrossChainTransfer {
  recipient?: CrossChainAddress;
  asset?: Coin;
  id: Long;
  state: TransferState;
}
/**
 * CrossChainTransfer represents a generalized transfer of some asset to a
 * registered blockchain
 */
export interface CrossChainTransferSDKType {
  recipient?: CrossChainAddressSDKType;
  asset?: CoinSDKType;
  id: Long;
  state: TransferState;
}
/** TransferFee represents accumulated fees generated by the network */
export interface TransferFee {
  coins: Coin[];
}
/** TransferFee represents accumulated fees generated by the network */
export interface TransferFeeSDKType {
  coins: CoinSDKType[];
}
export interface FeeInfo {
  chain: string;
  asset: string;
  feeRate: Uint8Array;
  minFee: Uint8Array;
  maxFee: Uint8Array;
}
export interface FeeInfoSDKType {
  chain: string;
  asset: string;
  fee_rate: Uint8Array;
  min_fee: Uint8Array;
  max_fee: Uint8Array;
}
export interface Asset {
  denom: string;
  isNativeAsset: boolean;
}
export interface AssetSDKType {
  denom: string;
  is_native_asset: boolean;
}
export interface GeneralMessage {
  id: string;
  sender?: CrossChainAddress;
  recipient?: CrossChainAddress;
  payloadHash: Uint8Array;
  status: GeneralMessage_Status;
  asset?: Coin;
  sourceTxId: Uint8Array;
  sourceTxIndex: Long;
}
export interface GeneralMessageSDKType {
  id: string;
  sender?: CrossChainAddressSDKType;
  recipient?: CrossChainAddressSDKType;
  payload_hash: Uint8Array;
  status: GeneralMessage_Status;
  asset?: CoinSDKType;
  source_tx_id: Uint8Array;
  source_tx_index: Long;
}
function createBaseChain(): Chain {
  return {
    name: "",
    supportsForeignAssets: false,
    keyType: 0,
    module: ""
  };
}
export const Chain = {
  encode(message: Chain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.supportsForeignAssets === true) {
      writer.uint32(24).bool(message.supportsForeignAssets);
    }
    if (message.keyType !== 0) {
      writer.uint32(32).int32(message.keyType);
    }
    if (message.module !== "") {
      writer.uint32(42).string(message.module);
    }
    return writer;
  },
  fromJSON(object: any): Chain {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      supportsForeignAssets: isSet(object.supportsForeignAssets) ? Boolean(object.supportsForeignAssets) : false,
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
      module: isSet(object.module) ? String(object.module) : ""
    };
  },
  fromPartial(object: Partial<Chain>): Chain {
    const message = createBaseChain();
    message.name = object.name ?? "";
    message.supportsForeignAssets = object.supportsForeignAssets ?? false;
    message.keyType = object.keyType ?? 0;
    message.module = object.module ?? "";
    return message;
  }
};
function createBaseCrossChainAddress(): CrossChainAddress {
  return {
    chain: undefined,
    address: ""
  };
}
export const CrossChainAddress = {
  encode(message: CrossChainAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): CrossChainAddress {
    return {
      chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<CrossChainAddress>): CrossChainAddress {
    const message = createBaseCrossChainAddress();
    message.chain = object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseCrossChainTransfer(): CrossChainTransfer {
  return {
    recipient: undefined,
    asset: undefined,
    id: Long.UZERO,
    state: 0
  };
}
export const CrossChainTransfer = {
  encode(message: CrossChainTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipient !== undefined) {
      CrossChainAddress.encode(message.recipient, writer.uint32(10).fork()).ldelim();
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    return writer;
  },
  fromJSON(object: any): CrossChainTransfer {
    return {
      recipient: isSet(object.recipient) ? CrossChainAddress.fromJSON(object.recipient) : undefined,
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      state: isSet(object.state) ? transferStateFromJSON(object.state) : 0
    };
  },
  fromPartial(object: Partial<CrossChainTransfer>): CrossChainTransfer {
    const message = createBaseCrossChainTransfer();
    message.recipient = object.recipient !== undefined && object.recipient !== null ? CrossChainAddress.fromPartial(object.recipient) : undefined;
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.state = object.state ?? 0;
    return message;
  }
};
function createBaseTransferFee(): TransferFee {
  return {
    coins: []
  };
}
export const TransferFee = {
  encode(message: TransferFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TransferFee {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TransferFee>): TransferFee {
    const message = createBaseTransferFee();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFeeInfo(): FeeInfo {
  return {
    chain: "",
    asset: "",
    feeRate: new Uint8Array(),
    minFee: new Uint8Array(),
    maxFee: new Uint8Array()
  };
}
export const FeeInfo = {
  encode(message: FeeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.feeRate.length !== 0) {
      writer.uint32(26).bytes(message.feeRate);
    }
    if (message.minFee.length !== 0) {
      writer.uint32(34).bytes(message.minFee);
    }
    if (message.maxFee.length !== 0) {
      writer.uint32(42).bytes(message.maxFee);
    }
    return writer;
  },
  fromJSON(object: any): FeeInfo {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      feeRate: isSet(object.feeRate) ? bytesFromBase64(object.feeRate) : new Uint8Array(),
      minFee: isSet(object.minFee) ? bytesFromBase64(object.minFee) : new Uint8Array(),
      maxFee: isSet(object.maxFee) ? bytesFromBase64(object.maxFee) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<FeeInfo>): FeeInfo {
    const message = createBaseFeeInfo();
    message.chain = object.chain ?? "";
    message.asset = object.asset ?? "";
    message.feeRate = object.feeRate ?? new Uint8Array();
    message.minFee = object.minFee ?? new Uint8Array();
    message.maxFee = object.maxFee ?? new Uint8Array();
    return message;
  }
};
function createBaseAsset(): Asset {
  return {
    denom: "",
    isNativeAsset: false
  };
}
export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.isNativeAsset === true) {
      writer.uint32(24).bool(message.isNativeAsset);
    }
    return writer;
  },
  fromJSON(object: any): Asset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      isNativeAsset: isSet(object.isNativeAsset) ? Boolean(object.isNativeAsset) : false
    };
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.denom = object.denom ?? "";
    message.isNativeAsset = object.isNativeAsset ?? false;
    return message;
  }
};
function createBaseGeneralMessage(): GeneralMessage {
  return {
    id: "",
    sender: undefined,
    recipient: undefined,
    payloadHash: new Uint8Array(),
    status: 0,
    asset: undefined,
    sourceTxId: new Uint8Array(),
    sourceTxIndex: Long.UZERO
  };
}
export const GeneralMessage = {
  encode(message: GeneralMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== undefined) {
      CrossChainAddress.encode(message.sender, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipient !== undefined) {
      CrossChainAddress.encode(message.recipient, writer.uint32(26).fork()).ldelim();
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(34).bytes(message.payloadHash);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(50).fork()).ldelim();
    }
    if (message.sourceTxId.length !== 0) {
      writer.uint32(58).bytes(message.sourceTxId);
    }
    if (!message.sourceTxIndex.isZero()) {
      writer.uint32(64).uint64(message.sourceTxIndex);
    }
    return writer;
  },
  fromJSON(object: any): GeneralMessage {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? CrossChainAddress.fromJSON(object.sender) : undefined,
      recipient: isSet(object.recipient) ? CrossChainAddress.fromJSON(object.recipient) : undefined,
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      status: isSet(object.status) ? generalMessage_StatusFromJSON(object.status) : 0,
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sourceTxId: isSet(object.sourceTxId) ? bytesFromBase64(object.sourceTxId) : new Uint8Array(),
      sourceTxIndex: isSet(object.sourceTxIndex) ? Long.fromValue(object.sourceTxIndex) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GeneralMessage>): GeneralMessage {
    const message = createBaseGeneralMessage();
    message.id = object.id ?? "";
    message.sender = object.sender !== undefined && object.sender !== null ? CrossChainAddress.fromPartial(object.sender) : undefined;
    message.recipient = object.recipient !== undefined && object.recipient !== null ? CrossChainAddress.fromPartial(object.recipient) : undefined;
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.status = object.status ?? 0;
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.sourceTxId = object.sourceTxId ?? new Uint8Array();
    message.sourceTxIndex = object.sourceTxIndex !== undefined && object.sourceTxIndex !== null ? Long.fromValue(object.sourceTxIndex) : Long.UZERO;
    return message;
  }
};