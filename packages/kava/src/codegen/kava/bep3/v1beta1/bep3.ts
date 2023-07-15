import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** SwapStatus is the status of an AtomicSwap */
export enum SwapStatus {
  /** SWAP_STATUS_UNSPECIFIED - SWAP_STATUS_UNSPECIFIED represents an unspecified status */
  SWAP_STATUS_UNSPECIFIED = 0,
  /** SWAP_STATUS_OPEN - SWAP_STATUS_OPEN represents an open swap */
  SWAP_STATUS_OPEN = 1,
  /** SWAP_STATUS_COMPLETED - SWAP_STATUS_COMPLETED represents a completed swap */
  SWAP_STATUS_COMPLETED = 2,
  /** SWAP_STATUS_EXPIRED - SWAP_STATUS_EXPIRED represents an expired swap */
  SWAP_STATUS_EXPIRED = 3,
  UNRECOGNIZED = -1,
}
export const SwapStatusSDKType = SwapStatus;
export function swapStatusFromJSON(object: any): SwapStatus {
  switch (object) {
    case 0:
    case "SWAP_STATUS_UNSPECIFIED":
      return SwapStatus.SWAP_STATUS_UNSPECIFIED;
    case 1:
    case "SWAP_STATUS_OPEN":
      return SwapStatus.SWAP_STATUS_OPEN;
    case 2:
    case "SWAP_STATUS_COMPLETED":
      return SwapStatus.SWAP_STATUS_COMPLETED;
    case 3:
    case "SWAP_STATUS_EXPIRED":
      return SwapStatus.SWAP_STATUS_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SwapStatus.UNRECOGNIZED;
  }
}
export function swapStatusToJSON(object: SwapStatus): string {
  switch (object) {
    case SwapStatus.SWAP_STATUS_UNSPECIFIED:
      return "SWAP_STATUS_UNSPECIFIED";
    case SwapStatus.SWAP_STATUS_OPEN:
      return "SWAP_STATUS_OPEN";
    case SwapStatus.SWAP_STATUS_COMPLETED:
      return "SWAP_STATUS_COMPLETED";
    case SwapStatus.SWAP_STATUS_EXPIRED:
      return "SWAP_STATUS_EXPIRED";
    case SwapStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SwapDirection is the direction of an AtomicSwap */
export enum SwapDirection {
  /** SWAP_DIRECTION_UNSPECIFIED - SWAP_DIRECTION_UNSPECIFIED represents unspecified or invalid swap direcation */
  SWAP_DIRECTION_UNSPECIFIED = 0,
  /** SWAP_DIRECTION_INCOMING - SWAP_DIRECTION_INCOMING represents is incoming swap (to the kava chain) */
  SWAP_DIRECTION_INCOMING = 1,
  /** SWAP_DIRECTION_OUTGOING - SWAP_DIRECTION_OUTGOING represents an outgoing swap (from the kava chain) */
  SWAP_DIRECTION_OUTGOING = 2,
  UNRECOGNIZED = -1,
}
export const SwapDirectionSDKType = SwapDirection;
export function swapDirectionFromJSON(object: any): SwapDirection {
  switch (object) {
    case 0:
    case "SWAP_DIRECTION_UNSPECIFIED":
      return SwapDirection.SWAP_DIRECTION_UNSPECIFIED;
    case 1:
    case "SWAP_DIRECTION_INCOMING":
      return SwapDirection.SWAP_DIRECTION_INCOMING;
    case 2:
    case "SWAP_DIRECTION_OUTGOING":
      return SwapDirection.SWAP_DIRECTION_OUTGOING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SwapDirection.UNRECOGNIZED;
  }
}
export function swapDirectionToJSON(object: SwapDirection): string {
  switch (object) {
    case SwapDirection.SWAP_DIRECTION_UNSPECIFIED:
      return "SWAP_DIRECTION_UNSPECIFIED";
    case SwapDirection.SWAP_DIRECTION_INCOMING:
      return "SWAP_DIRECTION_INCOMING";
    case SwapDirection.SWAP_DIRECTION_OUTGOING:
      return "SWAP_DIRECTION_OUTGOING";
    case SwapDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the parameters for the bep3 module. */
export interface Params {
  /** asset_params define the parameters for each bep3 asset */
  assetParams: AssetParam[];
}
/** Params defines the parameters for the bep3 module. */
export interface ParamsSDKType {
  asset_params: AssetParamSDKType[];
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParam {
  /** denom represents the denominatin for this asset */
  denom: string;
  /** coin_id represents the registered coin type to use (https://github.com/satoshilabs/slips/blob/master/slip-0044.md) */
  coinId: Long;
  /** supply_limit defines the maximum supply allowed for the asset - a total or time based rate limit */
  supplyLimit?: SupplyLimit;
  /** active specifies if the asset is live or paused */
  active: boolean;
  /** deputy_address the kava address of the deputy */
  deputyAddress: Uint8Array;
  /** fixed_fee defines the fee for incoming swaps */
  fixedFee: string;
  /** min_swap_amount defines the minimum amount able to be swapped in a single message */
  minSwapAmount: string;
  /** max_swap_amount defines the maximum amount able to be swapped in a single message */
  maxSwapAmount: string;
  /** min_block_lock defined the minimum blocks to lock */
  minBlockLock: Long;
  /** min_block_lock defined the maximum blocks to lock */
  maxBlockLock: Long;
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParamSDKType {
  denom: string;
  coin_id: Long;
  supply_limit?: SupplyLimitSDKType;
  active: boolean;
  deputy_address: Uint8Array;
  fixed_fee: string;
  min_swap_amount: string;
  max_swap_amount: string;
  min_block_lock: Long;
  max_block_lock: Long;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimit {
  /** limit defines the total supply allowed */
  limit: string;
  /** time_limited enables or disables time based supply limiting */
  timeLimited: boolean;
  /** time_period specifies the duration that time_based_limit is evalulated */
  timePeriod?: Duration;
  /** time_based_limit defines the maximum supply that can be swapped within time_period */
  timeBasedLimit: string;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimitSDKType {
  limit: string;
  time_limited: boolean;
  time_period?: DurationSDKType;
  time_based_limit: string;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwap {
  /** amount represents the amount being swapped */
  amount: Coin[];
  /** random_number_hash represents the hash of the random number */
  randomNumberHash: Uint8Array;
  /** expire_height represents the height when the swap expires */
  expireHeight: Long;
  /** timestamp represents the timestamp of the swap */
  timestamp: Long;
  /** sender is the kava chain sender of the swap */
  sender: Uint8Array;
  /** recipient is the kava chain recipient of the swap */
  recipient: Uint8Array;
  /** sender_other_chain is the sender on the other chain */
  senderOtherChain: string;
  /** recipient_other_chain is the recipient on the other chain */
  recipientOtherChain: string;
  /** closed_block is the block when the swap is closed */
  closedBlock: Long;
  /** status represents the current status of the swap */
  status: SwapStatus;
  /** cross_chain identifies whether the atomic swap is cross chain */
  crossChain: boolean;
  /** direction identifies if the swap is incoming or outgoing */
  direction: SwapDirection;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwapSDKType {
  amount: CoinSDKType[];
  random_number_hash: Uint8Array;
  expire_height: Long;
  timestamp: Long;
  sender: Uint8Array;
  recipient: Uint8Array;
  sender_other_chain: string;
  recipient_other_chain: string;
  closed_block: Long;
  status: SwapStatus;
  cross_chain: boolean;
  direction: SwapDirection;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupply {
  /** incoming_supply represents the incoming supply of an asset */
  incomingSupply?: Coin;
  /** outgoing_supply represents the outgoing supply of an asset */
  outgoingSupply?: Coin;
  /** current_supply represents the current on-chain supply of an asset */
  currentSupply?: Coin;
  /** time_limited_current_supply represents the time limited current supply of an asset */
  timeLimitedCurrentSupply?: Coin;
  /** time_elapsed represents the time elapsed */
  timeElapsed?: Duration;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupplySDKType {
  incoming_supply?: CoinSDKType;
  outgoing_supply?: CoinSDKType;
  current_supply?: CoinSDKType;
  time_limited_current_supply?: CoinSDKType;
  time_elapsed?: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    assetParams: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assetParams) {
      AssetParam.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      assetParams: Array.isArray(object?.assetParams) ? object.assetParams.map((e: any) => AssetParam.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.assetParams = object.assetParams?.map(e => AssetParam.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAssetParam(): AssetParam {
  return {
    denom: "",
    coinId: Long.ZERO,
    supplyLimit: undefined,
    active: false,
    deputyAddress: new Uint8Array(),
    fixedFee: "",
    minSwapAmount: "",
    maxSwapAmount: "",
    minBlockLock: Long.UZERO,
    maxBlockLock: Long.UZERO
  };
}
export const AssetParam = {
  encode(message: AssetParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.coinId.isZero()) {
      writer.uint32(16).int64(message.coinId);
    }
    if (message.supplyLimit !== undefined) {
      SupplyLimit.encode(message.supplyLimit, writer.uint32(26).fork()).ldelim();
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    if (message.deputyAddress.length !== 0) {
      writer.uint32(42).bytes(message.deputyAddress);
    }
    if (message.fixedFee !== "") {
      writer.uint32(50).string(message.fixedFee);
    }
    if (message.minSwapAmount !== "") {
      writer.uint32(58).string(message.minSwapAmount);
    }
    if (message.maxSwapAmount !== "") {
      writer.uint32(66).string(message.maxSwapAmount);
    }
    if (!message.minBlockLock.isZero()) {
      writer.uint32(72).uint64(message.minBlockLock);
    }
    if (!message.maxBlockLock.isZero()) {
      writer.uint32(80).uint64(message.maxBlockLock);
    }
    return writer;
  },
  fromJSON(object: any): AssetParam {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      coinId: isSet(object.coinId) ? Long.fromValue(object.coinId) : Long.ZERO,
      supplyLimit: isSet(object.supplyLimit) ? SupplyLimit.fromJSON(object.supplyLimit) : undefined,
      active: isSet(object.active) ? Boolean(object.active) : false,
      deputyAddress: isSet(object.deputyAddress) ? bytesFromBase64(object.deputyAddress) : new Uint8Array(),
      fixedFee: isSet(object.fixedFee) ? String(object.fixedFee) : "",
      minSwapAmount: isSet(object.minSwapAmount) ? String(object.minSwapAmount) : "",
      maxSwapAmount: isSet(object.maxSwapAmount) ? String(object.maxSwapAmount) : "",
      minBlockLock: isSet(object.minBlockLock) ? Long.fromValue(object.minBlockLock) : Long.UZERO,
      maxBlockLock: isSet(object.maxBlockLock) ? Long.fromValue(object.maxBlockLock) : Long.UZERO
    };
  },
  fromPartial(object: Partial<AssetParam>): AssetParam {
    const message = createBaseAssetParam();
    message.denom = object.denom ?? "";
    message.coinId = object.coinId !== undefined && object.coinId !== null ? Long.fromValue(object.coinId) : Long.ZERO;
    message.supplyLimit = object.supplyLimit !== undefined && object.supplyLimit !== null ? SupplyLimit.fromPartial(object.supplyLimit) : undefined;
    message.active = object.active ?? false;
    message.deputyAddress = object.deputyAddress ?? new Uint8Array();
    message.fixedFee = object.fixedFee ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    message.minBlockLock = object.minBlockLock !== undefined && object.minBlockLock !== null ? Long.fromValue(object.minBlockLock) : Long.UZERO;
    message.maxBlockLock = object.maxBlockLock !== undefined && object.maxBlockLock !== null ? Long.fromValue(object.maxBlockLock) : Long.UZERO;
    return message;
  }
};
function createBaseSupplyLimit(): SupplyLimit {
  return {
    limit: "",
    timeLimited: false,
    timePeriod: undefined,
    timeBasedLimit: ""
  };
}
export const SupplyLimit = {
  encode(message: SupplyLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== "") {
      writer.uint32(10).string(message.limit);
    }
    if (message.timeLimited === true) {
      writer.uint32(16).bool(message.timeLimited);
    }
    if (message.timePeriod !== undefined) {
      Duration.encode(message.timePeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeBasedLimit !== "") {
      writer.uint32(34).string(message.timeBasedLimit);
    }
    return writer;
  },
  fromJSON(object: any): SupplyLimit {
    return {
      limit: isSet(object.limit) ? String(object.limit) : "",
      timeLimited: isSet(object.timeLimited) ? Boolean(object.timeLimited) : false,
      timePeriod: isSet(object.timePeriod) ? Duration.fromJSON(object.timePeriod) : undefined,
      timeBasedLimit: isSet(object.timeBasedLimit) ? String(object.timeBasedLimit) : ""
    };
  },
  fromPartial(object: Partial<SupplyLimit>): SupplyLimit {
    const message = createBaseSupplyLimit();
    message.limit = object.limit ?? "";
    message.timeLimited = object.timeLimited ?? false;
    message.timePeriod = object.timePeriod !== undefined && object.timePeriod !== null ? Duration.fromPartial(object.timePeriod) : undefined;
    message.timeBasedLimit = object.timeBasedLimit ?? "";
    return message;
  }
};
function createBaseAtomicSwap(): AtomicSwap {
  return {
    amount: [],
    randomNumberHash: new Uint8Array(),
    expireHeight: Long.UZERO,
    timestamp: Long.ZERO,
    sender: new Uint8Array(),
    recipient: new Uint8Array(),
    senderOtherChain: "",
    recipientOtherChain: "",
    closedBlock: Long.ZERO,
    status: 0,
    crossChain: false,
    direction: 0
  };
}
export const AtomicSwap = {
  encode(message: AtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.randomNumberHash.length !== 0) {
      writer.uint32(18).bytes(message.randomNumberHash);
    }
    if (!message.expireHeight.isZero()) {
      writer.uint32(24).uint64(message.expireHeight);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(32).int64(message.timestamp);
    }
    if (message.sender.length !== 0) {
      writer.uint32(42).bytes(message.sender);
    }
    if (message.recipient.length !== 0) {
      writer.uint32(50).bytes(message.recipient);
    }
    if (message.senderOtherChain !== "") {
      writer.uint32(58).string(message.senderOtherChain);
    }
    if (message.recipientOtherChain !== "") {
      writer.uint32(66).string(message.recipientOtherChain);
    }
    if (!message.closedBlock.isZero()) {
      writer.uint32(72).int64(message.closedBlock);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.crossChain === true) {
      writer.uint32(88).bool(message.crossChain);
    }
    if (message.direction !== 0) {
      writer.uint32(96).int32(message.direction);
    }
    return writer;
  },
  fromJSON(object: any): AtomicSwap {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      randomNumberHash: isSet(object.randomNumberHash) ? bytesFromBase64(object.randomNumberHash) : new Uint8Array(),
      expireHeight: isSet(object.expireHeight) ? Long.fromValue(object.expireHeight) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
      senderOtherChain: isSet(object.senderOtherChain) ? String(object.senderOtherChain) : "",
      recipientOtherChain: isSet(object.recipientOtherChain) ? String(object.recipientOtherChain) : "",
      closedBlock: isSet(object.closedBlock) ? Long.fromValue(object.closedBlock) : Long.ZERO,
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : 0,
      crossChain: isSet(object.crossChain) ? Boolean(object.crossChain) : false,
      direction: isSet(object.direction) ? swapDirectionFromJSON(object.direction) : 0
    };
  },
  fromPartial(object: Partial<AtomicSwap>): AtomicSwap {
    const message = createBaseAtomicSwap();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.randomNumberHash = object.randomNumberHash ?? new Uint8Array();
    message.expireHeight = object.expireHeight !== undefined && object.expireHeight !== null ? Long.fromValue(object.expireHeight) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.sender = object.sender ?? new Uint8Array();
    message.recipient = object.recipient ?? new Uint8Array();
    message.senderOtherChain = object.senderOtherChain ?? "";
    message.recipientOtherChain = object.recipientOtherChain ?? "";
    message.closedBlock = object.closedBlock !== undefined && object.closedBlock !== null ? Long.fromValue(object.closedBlock) : Long.ZERO;
    message.status = object.status ?? 0;
    message.crossChain = object.crossChain ?? false;
    message.direction = object.direction ?? 0;
    return message;
  }
};
function createBaseAssetSupply(): AssetSupply {
  return {
    incomingSupply: undefined,
    outgoingSupply: undefined,
    currentSupply: undefined,
    timeLimitedCurrentSupply: undefined,
    timeElapsed: undefined
  };
}
export const AssetSupply = {
  encode(message: AssetSupply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incomingSupply !== undefined) {
      Coin.encode(message.incomingSupply, writer.uint32(10).fork()).ldelim();
    }
    if (message.outgoingSupply !== undefined) {
      Coin.encode(message.outgoingSupply, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentSupply !== undefined) {
      Coin.encode(message.currentSupply, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeLimitedCurrentSupply !== undefined) {
      Coin.encode(message.timeLimitedCurrentSupply, writer.uint32(34).fork()).ldelim();
    }
    if (message.timeElapsed !== undefined) {
      Duration.encode(message.timeElapsed, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AssetSupply {
    return {
      incomingSupply: isSet(object.incomingSupply) ? Coin.fromJSON(object.incomingSupply) : undefined,
      outgoingSupply: isSet(object.outgoingSupply) ? Coin.fromJSON(object.outgoingSupply) : undefined,
      currentSupply: isSet(object.currentSupply) ? Coin.fromJSON(object.currentSupply) : undefined,
      timeLimitedCurrentSupply: isSet(object.timeLimitedCurrentSupply) ? Coin.fromJSON(object.timeLimitedCurrentSupply) : undefined,
      timeElapsed: isSet(object.timeElapsed) ? Duration.fromJSON(object.timeElapsed) : undefined
    };
  },
  fromPartial(object: Partial<AssetSupply>): AssetSupply {
    const message = createBaseAssetSupply();
    message.incomingSupply = object.incomingSupply !== undefined && object.incomingSupply !== null ? Coin.fromPartial(object.incomingSupply) : undefined;
    message.outgoingSupply = object.outgoingSupply !== undefined && object.outgoingSupply !== null ? Coin.fromPartial(object.outgoingSupply) : undefined;
    message.currentSupply = object.currentSupply !== undefined && object.currentSupply !== null ? Coin.fromPartial(object.currentSupply) : undefined;
    message.timeLimitedCurrentSupply = object.timeLimitedCurrentSupply !== undefined && object.timeLimitedCurrentSupply !== null ? Coin.fromPartial(object.timeLimitedCurrentSupply) : undefined;
    message.timeElapsed = object.timeElapsed !== undefined && object.timeElapsed !== null ? Duration.fromPartial(object.timeElapsed) : undefined;
    return message;
  }
};