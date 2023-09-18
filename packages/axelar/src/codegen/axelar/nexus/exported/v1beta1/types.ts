import { KeyType, keyTypeFromJSON } from "../../../tss/exported/v1beta1/types";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64 } from "../../../../helpers";
export enum TransferState {
  TRANSFER_STATE_UNSPECIFIED = 0,
  TRANSFER_STATE_PENDING = 1,
  TRANSFER_STATE_ARCHIVED = 2,
  TRANSFER_STATE_INSUFFICIENT_AMOUNT = 3,
  UNRECOGNIZED = -1,
}
export const TransferStateSDKType = TransferState;
export const TransferStateAmino = TransferState;
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
export const TransferDirectionAmino = TransferDirection;
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
export const GeneralMessage_StatusAmino = GeneralMessage_Status;
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
export interface ChainProtoMsg {
  typeUrl: "/axelar.nexus.exported.v1beta1.Chain";
  value: Uint8Array;
}
/** Chain represents the properties of a registered blockchain */
export interface ChainAmino {
  name: string;
  supports_foreign_assets: boolean;
  key_type: KeyType;
  module: string;
}
export interface ChainAminoMsg {
  type: "/axelar.nexus.exported.v1beta1.Chain";
  value: ChainAmino;
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
  chain: Chain;
  address: string;
}
export interface CrossChainAddressProtoMsg {
  typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainAddress";
  value: Uint8Array;
}
/** CrossChainAddress represents a generalized address on any registered chain */
export interface CrossChainAddressAmino {
  chain?: ChainAmino;
  address: string;
}
export interface CrossChainAddressAminoMsg {
  type: "/axelar.nexus.exported.v1beta1.CrossChainAddress";
  value: CrossChainAddressAmino;
}
/** CrossChainAddress represents a generalized address on any registered chain */
export interface CrossChainAddressSDKType {
  chain: ChainSDKType;
  address: string;
}
/**
 * CrossChainTransfer represents a generalized transfer of some asset to a
 * registered blockchain
 */
export interface CrossChainTransfer {
  recipient: CrossChainAddress;
  asset: Coin;
  id: bigint;
  state: TransferState;
}
export interface CrossChainTransferProtoMsg {
  typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainTransfer";
  value: Uint8Array;
}
/**
 * CrossChainTransfer represents a generalized transfer of some asset to a
 * registered blockchain
 */
export interface CrossChainTransferAmino {
  recipient?: CrossChainAddressAmino;
  asset?: CoinAmino;
  id: string;
  state: TransferState;
}
export interface CrossChainTransferAminoMsg {
  type: "/axelar.nexus.exported.v1beta1.CrossChainTransfer";
  value: CrossChainTransferAmino;
}
/**
 * CrossChainTransfer represents a generalized transfer of some asset to a
 * registered blockchain
 */
export interface CrossChainTransferSDKType {
  recipient: CrossChainAddressSDKType;
  asset: CoinSDKType;
  id: bigint;
  state: TransferState;
}
/** TransferFee represents accumulated fees generated by the network */
export interface TransferFee {
  coins: Coin[];
}
export interface TransferFeeProtoMsg {
  typeUrl: "/axelar.nexus.exported.v1beta1.TransferFee";
  value: Uint8Array;
}
/** TransferFee represents accumulated fees generated by the network */
export interface TransferFeeAmino {
  coins: CoinAmino[];
}
export interface TransferFeeAminoMsg {
  type: "/axelar.nexus.exported.v1beta1.TransferFee";
  value: TransferFeeAmino;
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
export interface FeeInfoProtoMsg {
  typeUrl: "/axelar.nexus.exported.v1beta1.FeeInfo";
  value: Uint8Array;
}
export interface FeeInfoAmino {
  chain: string;
  asset: string;
  fee_rate: Uint8Array;
  min_fee: Uint8Array;
  max_fee: Uint8Array;
}
export interface FeeInfoAminoMsg {
  type: "/axelar.nexus.exported.v1beta1.FeeInfo";
  value: FeeInfoAmino;
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
export interface AssetProtoMsg {
  typeUrl: "/axelar.nexus.exported.v1beta1.Asset";
  value: Uint8Array;
}
export interface AssetAmino {
  denom: string;
  is_native_asset: boolean;
}
export interface AssetAminoMsg {
  type: "/axelar.nexus.exported.v1beta1.Asset";
  value: AssetAmino;
}
export interface AssetSDKType {
  denom: string;
  is_native_asset: boolean;
}
export interface GeneralMessage {
  id: string;
  sender: CrossChainAddress;
  recipient: CrossChainAddress;
  payloadHash: Uint8Array;
  status: GeneralMessage_Status;
  asset: Coin;
  sourceTxId: Uint8Array;
  sourceTxIndex: bigint;
}
export interface GeneralMessageProtoMsg {
  typeUrl: "/axelar.nexus.exported.v1beta1.GeneralMessage";
  value: Uint8Array;
}
export interface GeneralMessageAmino {
  id: string;
  sender?: CrossChainAddressAmino;
  recipient?: CrossChainAddressAmino;
  payload_hash: Uint8Array;
  status: GeneralMessage_Status;
  asset?: CoinAmino;
  source_tx_id: Uint8Array;
  source_tx_index: string;
}
export interface GeneralMessageAminoMsg {
  type: "/axelar.nexus.exported.v1beta1.GeneralMessage";
  value: GeneralMessageAmino;
}
export interface GeneralMessageSDKType {
  id: string;
  sender: CrossChainAddressSDKType;
  recipient: CrossChainAddressSDKType;
  payload_hash: Uint8Array;
  status: GeneralMessage_Status;
  asset: CoinSDKType;
  source_tx_id: Uint8Array;
  source_tx_index: bigint;
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
  typeUrl: "/axelar.nexus.exported.v1beta1.Chain",
  encode(message: Chain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : -1,
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
  },
  fromAmino(object: ChainAmino): Chain {
    return {
      name: object.name,
      supportsForeignAssets: object.supports_foreign_assets,
      keyType: isSet(object.key_type) ? keyTypeFromJSON(object.key_type) : -1,
      module: object.module
    };
  },
  toAmino(message: Chain): ChainAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.supports_foreign_assets = message.supportsForeignAssets;
    obj.key_type = message.keyType;
    obj.module = message.module;
    return obj;
  },
  fromAminoMsg(object: ChainAminoMsg): Chain {
    return Chain.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainProtoMsg): Chain {
    return Chain.decode(message.value);
  },
  toProto(message: Chain): Uint8Array {
    return Chain.encode(message).finish();
  },
  toProtoMsg(message: Chain): ChainProtoMsg {
    return {
      typeUrl: "/axelar.nexus.exported.v1beta1.Chain",
      value: Chain.encode(message).finish()
    };
  }
};
function createBaseCrossChainAddress(): CrossChainAddress {
  return {
    chain: Chain.fromPartial({}),
    address: ""
  };
}
export const CrossChainAddress = {
  typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainAddress",
  encode(message: CrossChainAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CrossChainAddressAmino): CrossChainAddress {
    return {
      chain: object?.chain ? Chain.fromAmino(object.chain) : undefined,
      address: object.address
    };
  },
  toAmino(message: CrossChainAddress): CrossChainAddressAmino {
    const obj: any = {};
    obj.chain = message.chain ? Chain.toAmino(message.chain) : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: CrossChainAddressAminoMsg): CrossChainAddress {
    return CrossChainAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: CrossChainAddressProtoMsg): CrossChainAddress {
    return CrossChainAddress.decode(message.value);
  },
  toProto(message: CrossChainAddress): Uint8Array {
    return CrossChainAddress.encode(message).finish();
  },
  toProtoMsg(message: CrossChainAddress): CrossChainAddressProtoMsg {
    return {
      typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainAddress",
      value: CrossChainAddress.encode(message).finish()
    };
  }
};
function createBaseCrossChainTransfer(): CrossChainTransfer {
  return {
    recipient: CrossChainAddress.fromPartial({}),
    asset: Coin.fromPartial({}),
    id: BigInt(0),
    state: 0
  };
}
export const CrossChainTransfer = {
  typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainTransfer",
  encode(message: CrossChainTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== undefined) {
      CrossChainAddress.encode(message.recipient, writer.uint32(10).fork()).ldelim();
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== BigInt(0)) {
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      state: isSet(object.state) ? transferStateFromJSON(object.state) : -1
    };
  },
  fromPartial(object: Partial<CrossChainTransfer>): CrossChainTransfer {
    const message = createBaseCrossChainTransfer();
    message.recipient = object.recipient !== undefined && object.recipient !== null ? CrossChainAddress.fromPartial(object.recipient) : undefined;
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.state = object.state ?? 0;
    return message;
  },
  fromAmino(object: CrossChainTransferAmino): CrossChainTransfer {
    return {
      recipient: object?.recipient ? CrossChainAddress.fromAmino(object.recipient) : undefined,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined,
      id: BigInt(object.id),
      state: isSet(object.state) ? transferStateFromJSON(object.state) : -1
    };
  },
  toAmino(message: CrossChainTransfer): CrossChainTransferAmino {
    const obj: any = {};
    obj.recipient = message.recipient ? CrossChainAddress.toAmino(message.recipient) : undefined;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: CrossChainTransferAminoMsg): CrossChainTransfer {
    return CrossChainTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: CrossChainTransferProtoMsg): CrossChainTransfer {
    return CrossChainTransfer.decode(message.value);
  },
  toProto(message: CrossChainTransfer): Uint8Array {
    return CrossChainTransfer.encode(message).finish();
  },
  toProtoMsg(message: CrossChainTransfer): CrossChainTransferProtoMsg {
    return {
      typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainTransfer",
      value: CrossChainTransfer.encode(message).finish()
    };
  }
};
function createBaseTransferFee(): TransferFee {
  return {
    coins: []
  };
}
export const TransferFee = {
  typeUrl: "/axelar.nexus.exported.v1beta1.TransferFee",
  encode(message: TransferFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TransferFeeAmino): TransferFee {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: TransferFee): TransferFeeAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: TransferFeeAminoMsg): TransferFee {
    return TransferFee.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferFeeProtoMsg): TransferFee {
    return TransferFee.decode(message.value);
  },
  toProto(message: TransferFee): Uint8Array {
    return TransferFee.encode(message).finish();
  },
  toProtoMsg(message: TransferFee): TransferFeeProtoMsg {
    return {
      typeUrl: "/axelar.nexus.exported.v1beta1.TransferFee",
      value: TransferFee.encode(message).finish()
    };
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
  typeUrl: "/axelar.nexus.exported.v1beta1.FeeInfo",
  encode(message: FeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: FeeInfoAmino): FeeInfo {
    return {
      chain: object.chain,
      asset: object.asset,
      feeRate: object.fee_rate,
      minFee: object.min_fee,
      maxFee: object.max_fee
    };
  },
  toAmino(message: FeeInfo): FeeInfoAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.asset = message.asset;
    obj.fee_rate = message.feeRate;
    obj.min_fee = message.minFee;
    obj.max_fee = message.maxFee;
    return obj;
  },
  fromAminoMsg(object: FeeInfoAminoMsg): FeeInfo {
    return FeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeInfoProtoMsg): FeeInfo {
    return FeeInfo.decode(message.value);
  },
  toProto(message: FeeInfo): Uint8Array {
    return FeeInfo.encode(message).finish();
  },
  toProtoMsg(message: FeeInfo): FeeInfoProtoMsg {
    return {
      typeUrl: "/axelar.nexus.exported.v1beta1.FeeInfo",
      value: FeeInfo.encode(message).finish()
    };
  }
};
function createBaseAsset(): Asset {
  return {
    denom: "",
    isNativeAsset: false
  };
}
export const Asset = {
  typeUrl: "/axelar.nexus.exported.v1beta1.Asset",
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AssetAmino): Asset {
    return {
      denom: object.denom,
      isNativeAsset: object.is_native_asset
    };
  },
  toAmino(message: Asset): AssetAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.is_native_asset = message.isNativeAsset;
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
      typeUrl: "/axelar.nexus.exported.v1beta1.Asset",
      value: Asset.encode(message).finish()
    };
  }
};
function createBaseGeneralMessage(): GeneralMessage {
  return {
    id: "",
    sender: CrossChainAddress.fromPartial({}),
    recipient: CrossChainAddress.fromPartial({}),
    payloadHash: new Uint8Array(),
    status: 0,
    asset: Coin.fromPartial({}),
    sourceTxId: new Uint8Array(),
    sourceTxIndex: BigInt(0)
  };
}
export const GeneralMessage = {
  typeUrl: "/axelar.nexus.exported.v1beta1.GeneralMessage",
  encode(message: GeneralMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.sourceTxIndex !== BigInt(0)) {
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
      status: isSet(object.status) ? generalMessage_StatusFromJSON(object.status) : -1,
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sourceTxId: isSet(object.sourceTxId) ? bytesFromBase64(object.sourceTxId) : new Uint8Array(),
      sourceTxIndex: isSet(object.sourceTxIndex) ? BigInt(object.sourceTxIndex.toString()) : BigInt(0)
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
    message.sourceTxIndex = object.sourceTxIndex !== undefined && object.sourceTxIndex !== null ? BigInt(object.sourceTxIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GeneralMessageAmino): GeneralMessage {
    return {
      id: object.id,
      sender: object?.sender ? CrossChainAddress.fromAmino(object.sender) : undefined,
      recipient: object?.recipient ? CrossChainAddress.fromAmino(object.recipient) : undefined,
      payloadHash: object.payload_hash,
      status: isSet(object.status) ? generalMessage_StatusFromJSON(object.status) : -1,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined,
      sourceTxId: object.source_tx_id,
      sourceTxIndex: BigInt(object.source_tx_index)
    };
  },
  toAmino(message: GeneralMessage): GeneralMessageAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.sender = message.sender ? CrossChainAddress.toAmino(message.sender) : undefined;
    obj.recipient = message.recipient ? CrossChainAddress.toAmino(message.recipient) : undefined;
    obj.payload_hash = message.payloadHash;
    obj.status = message.status;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    obj.source_tx_id = message.sourceTxId;
    obj.source_tx_index = message.sourceTxIndex ? message.sourceTxIndex.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GeneralMessageAminoMsg): GeneralMessage {
    return GeneralMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: GeneralMessageProtoMsg): GeneralMessage {
    return GeneralMessage.decode(message.value);
  },
  toProto(message: GeneralMessage): Uint8Array {
    return GeneralMessage.encode(message).finish();
  },
  toProtoMsg(message: GeneralMessage): GeneralMessageProtoMsg {
    return {
      typeUrl: "/axelar.nexus.exported.v1beta1.GeneralMessage",
      value: GeneralMessage.encode(message).finish()
    };
  }
};