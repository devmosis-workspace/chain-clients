import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
export const SwapStatusAmino = SwapStatus;
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
export const SwapDirectionAmino = SwapDirection;
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
export interface ParamsProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the bep3 module. */
export interface ParamsAmino {
  /** asset_params define the parameters for each bep3 asset */
  asset_params?: AssetParamAmino[];
}
export interface ParamsAminoMsg {
  type: "/kava.bep3.v1beta1.Params";
  value: ParamsAmino;
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
  coinId: bigint;
  /** supply_limit defines the maximum supply allowed for the asset - a total or time based rate limit */
  supplyLimit: SupplyLimit;
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
  minBlockLock: bigint;
  /** min_block_lock defined the maximum blocks to lock */
  maxBlockLock: bigint;
}
export interface AssetParamProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.AssetParam";
  value: Uint8Array;
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParamAmino {
  /** denom represents the denominatin for this asset */
  denom?: string;
  /** coin_id represents the registered coin type to use (https://github.com/satoshilabs/slips/blob/master/slip-0044.md) */
  coin_id?: string;
  /** supply_limit defines the maximum supply allowed for the asset - a total or time based rate limit */
  supply_limit?: SupplyLimitAmino;
  /** active specifies if the asset is live or paused */
  active?: boolean;
  /** deputy_address the kava address of the deputy */
  deputy_address?: string;
  /** fixed_fee defines the fee for incoming swaps */
  fixed_fee?: string;
  /** min_swap_amount defines the minimum amount able to be swapped in a single message */
  min_swap_amount?: string;
  /** max_swap_amount defines the maximum amount able to be swapped in a single message */
  max_swap_amount?: string;
  /** min_block_lock defined the minimum blocks to lock */
  min_block_lock?: string;
  /** min_block_lock defined the maximum blocks to lock */
  max_block_lock?: string;
}
export interface AssetParamAminoMsg {
  type: "/kava.bep3.v1beta1.AssetParam";
  value: AssetParamAmino;
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParamSDKType {
  denom: string;
  coin_id: bigint;
  supply_limit: SupplyLimitSDKType;
  active: boolean;
  deputy_address: Uint8Array;
  fixed_fee: string;
  min_swap_amount: string;
  max_swap_amount: string;
  min_block_lock: bigint;
  max_block_lock: bigint;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimit {
  /** limit defines the total supply allowed */
  limit: string;
  /** time_limited enables or disables time based supply limiting */
  timeLimited: boolean;
  /** time_period specifies the duration that time_based_limit is evalulated */
  timePeriod: Duration;
  /** time_based_limit defines the maximum supply that can be swapped within time_period */
  timeBasedLimit: string;
}
export interface SupplyLimitProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.SupplyLimit";
  value: Uint8Array;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimitAmino {
  /** limit defines the total supply allowed */
  limit?: string;
  /** time_limited enables or disables time based supply limiting */
  time_limited?: boolean;
  /** time_period specifies the duration that time_based_limit is evalulated */
  time_period?: DurationAmino;
  /** time_based_limit defines the maximum supply that can be swapped within time_period */
  time_based_limit?: string;
}
export interface SupplyLimitAminoMsg {
  type: "/kava.bep3.v1beta1.SupplyLimit";
  value: SupplyLimitAmino;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimitSDKType {
  limit: string;
  time_limited: boolean;
  time_period: DurationSDKType;
  time_based_limit: string;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwap {
  /** amount represents the amount being swapped */
  amount: Coin[];
  /** random_number_hash represents the hash of the random number */
  randomNumberHash: Uint8Array;
  /** expire_height represents the height when the swap expires */
  expireHeight: bigint;
  /** timestamp represents the timestamp of the swap */
  timestamp: bigint;
  /** sender is the kava chain sender of the swap */
  sender: Uint8Array;
  /** recipient is the kava chain recipient of the swap */
  recipient: Uint8Array;
  /** sender_other_chain is the sender on the other chain */
  senderOtherChain: string;
  /** recipient_other_chain is the recipient on the other chain */
  recipientOtherChain: string;
  /** closed_block is the block when the swap is closed */
  closedBlock: bigint;
  /** status represents the current status of the swap */
  status: SwapStatus;
  /** cross_chain identifies whether the atomic swap is cross chain */
  crossChain: boolean;
  /** direction identifies if the swap is incoming or outgoing */
  direction: SwapDirection;
}
export interface AtomicSwapProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.AtomicSwap";
  value: Uint8Array;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwapAmino {
  /** amount represents the amount being swapped */
  amount?: CoinAmino[];
  /** random_number_hash represents the hash of the random number */
  random_number_hash?: string;
  /** expire_height represents the height when the swap expires */
  expire_height?: string;
  /** timestamp represents the timestamp of the swap */
  timestamp?: string;
  /** sender is the kava chain sender of the swap */
  sender?: string;
  /** recipient is the kava chain recipient of the swap */
  recipient?: string;
  /** sender_other_chain is the sender on the other chain */
  sender_other_chain?: string;
  /** recipient_other_chain is the recipient on the other chain */
  recipient_other_chain?: string;
  /** closed_block is the block when the swap is closed */
  closed_block?: string;
  /** status represents the current status of the swap */
  status?: SwapStatus;
  /** cross_chain identifies whether the atomic swap is cross chain */
  cross_chain?: boolean;
  /** direction identifies if the swap is incoming or outgoing */
  direction?: SwapDirection;
}
export interface AtomicSwapAminoMsg {
  type: "/kava.bep3.v1beta1.AtomicSwap";
  value: AtomicSwapAmino;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwapSDKType {
  amount: CoinSDKType[];
  random_number_hash: Uint8Array;
  expire_height: bigint;
  timestamp: bigint;
  sender: Uint8Array;
  recipient: Uint8Array;
  sender_other_chain: string;
  recipient_other_chain: string;
  closed_block: bigint;
  status: SwapStatus;
  cross_chain: boolean;
  direction: SwapDirection;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupply {
  /** incoming_supply represents the incoming supply of an asset */
  incomingSupply: Coin;
  /** outgoing_supply represents the outgoing supply of an asset */
  outgoingSupply: Coin;
  /** current_supply represents the current on-chain supply of an asset */
  currentSupply: Coin;
  /** time_limited_current_supply represents the time limited current supply of an asset */
  timeLimitedCurrentSupply: Coin;
  /** time_elapsed represents the time elapsed */
  timeElapsed: Duration;
}
export interface AssetSupplyProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.AssetSupply";
  value: Uint8Array;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupplyAmino {
  /** incoming_supply represents the incoming supply of an asset */
  incoming_supply?: CoinAmino;
  /** outgoing_supply represents the outgoing supply of an asset */
  outgoing_supply?: CoinAmino;
  /** current_supply represents the current on-chain supply of an asset */
  current_supply?: CoinAmino;
  /** time_limited_current_supply represents the time limited current supply of an asset */
  time_limited_current_supply?: CoinAmino;
  /** time_elapsed represents the time elapsed */
  time_elapsed?: DurationAmino;
}
export interface AssetSupplyAminoMsg {
  type: "/kava.bep3.v1beta1.AssetSupply";
  value: AssetSupplyAmino;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupplySDKType {
  incoming_supply: CoinSDKType;
  outgoing_supply: CoinSDKType;
  current_supply: CoinSDKType;
  time_limited_current_supply: CoinSDKType;
  time_elapsed: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    assetParams: []
  };
}
export const Params = {
  typeUrl: "/kava.bep3.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.assetParams = object.asset_params?.map(e => AssetParam.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.assetParams) {
      obj.asset_params = message.assetParams.map(e => e ? AssetParam.toAmino(e) : undefined);
    } else {
      obj.asset_params = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseAssetParam(): AssetParam {
  return {
    denom: "",
    coinId: BigInt(0),
    supplyLimit: SupplyLimit.fromPartial({}),
    active: false,
    deputyAddress: new Uint8Array(),
    fixedFee: "",
    minSwapAmount: "",
    maxSwapAmount: "",
    minBlockLock: BigInt(0),
    maxBlockLock: BigInt(0)
  };
}
export const AssetParam = {
  typeUrl: "/kava.bep3.v1beta1.AssetParam",
  encode(message: AssetParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.coinId !== BigInt(0)) {
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
    if (message.minBlockLock !== BigInt(0)) {
      writer.uint32(72).uint64(message.minBlockLock);
    }
    if (message.maxBlockLock !== BigInt(0)) {
      writer.uint32(80).uint64(message.maxBlockLock);
    }
    return writer;
  },
  fromJSON(object: any): AssetParam {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      coinId: isSet(object.coinId) ? BigInt(object.coinId.toString()) : BigInt(0),
      supplyLimit: isSet(object.supplyLimit) ? SupplyLimit.fromJSON(object.supplyLimit) : undefined,
      active: isSet(object.active) ? Boolean(object.active) : false,
      deputyAddress: isSet(object.deputyAddress) ? bytesFromBase64(object.deputyAddress) : new Uint8Array(),
      fixedFee: isSet(object.fixedFee) ? String(object.fixedFee) : "",
      minSwapAmount: isSet(object.minSwapAmount) ? String(object.minSwapAmount) : "",
      maxSwapAmount: isSet(object.maxSwapAmount) ? String(object.maxSwapAmount) : "",
      minBlockLock: isSet(object.minBlockLock) ? BigInt(object.minBlockLock.toString()) : BigInt(0),
      maxBlockLock: isSet(object.maxBlockLock) ? BigInt(object.maxBlockLock.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<AssetParam>): AssetParam {
    const message = createBaseAssetParam();
    message.denom = object.denom ?? "";
    message.coinId = object.coinId !== undefined && object.coinId !== null ? BigInt(object.coinId.toString()) : BigInt(0);
    message.supplyLimit = object.supplyLimit !== undefined && object.supplyLimit !== null ? SupplyLimit.fromPartial(object.supplyLimit) : undefined;
    message.active = object.active ?? false;
    message.deputyAddress = object.deputyAddress ?? new Uint8Array();
    message.fixedFee = object.fixedFee ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    message.minBlockLock = object.minBlockLock !== undefined && object.minBlockLock !== null ? BigInt(object.minBlockLock.toString()) : BigInt(0);
    message.maxBlockLock = object.maxBlockLock !== undefined && object.maxBlockLock !== null ? BigInt(object.maxBlockLock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AssetParamAmino): AssetParam {
    const message = createBaseAssetParam();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.coin_id !== undefined && object.coin_id !== null) {
      message.coinId = BigInt(object.coin_id);
    }
    if (object.supply_limit !== undefined && object.supply_limit !== null) {
      message.supplyLimit = SupplyLimit.fromAmino(object.supply_limit);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.deputy_address !== undefined && object.deputy_address !== null) {
      message.deputyAddress = bytesFromBase64(object.deputy_address);
    }
    if (object.fixed_fee !== undefined && object.fixed_fee !== null) {
      message.fixedFee = object.fixed_fee;
    }
    if (object.min_swap_amount !== undefined && object.min_swap_amount !== null) {
      message.minSwapAmount = object.min_swap_amount;
    }
    if (object.max_swap_amount !== undefined && object.max_swap_amount !== null) {
      message.maxSwapAmount = object.max_swap_amount;
    }
    if (object.min_block_lock !== undefined && object.min_block_lock !== null) {
      message.minBlockLock = BigInt(object.min_block_lock);
    }
    if (object.max_block_lock !== undefined && object.max_block_lock !== null) {
      message.maxBlockLock = BigInt(object.max_block_lock);
    }
    return message;
  },
  toAmino(message: AssetParam): AssetParamAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.coin_id = message.coinId ? message.coinId.toString() : undefined;
    obj.supply_limit = message.supplyLimit ? SupplyLimit.toAmino(message.supplyLimit) : undefined;
    obj.active = message.active;
    obj.deputy_address = message.deputyAddress ? base64FromBytes(message.deputyAddress) : undefined;
    obj.fixed_fee = message.fixedFee;
    obj.min_swap_amount = message.minSwapAmount;
    obj.max_swap_amount = message.maxSwapAmount;
    obj.min_block_lock = message.minBlockLock ? message.minBlockLock.toString() : undefined;
    obj.max_block_lock = message.maxBlockLock ? message.maxBlockLock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetParamAminoMsg): AssetParam {
    return AssetParam.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetParamProtoMsg): AssetParam {
    return AssetParam.decode(message.value);
  },
  toProto(message: AssetParam): Uint8Array {
    return AssetParam.encode(message).finish();
  },
  toProtoMsg(message: AssetParam): AssetParamProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.AssetParam",
      value: AssetParam.encode(message).finish()
    };
  }
};
function createBaseSupplyLimit(): SupplyLimit {
  return {
    limit: "",
    timeLimited: false,
    timePeriod: Duration.fromPartial({}),
    timeBasedLimit: ""
  };
}
export const SupplyLimit = {
  typeUrl: "/kava.bep3.v1beta1.SupplyLimit",
  encode(message: SupplyLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SupplyLimitAmino): SupplyLimit {
    const message = createBaseSupplyLimit();
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    }
    if (object.time_limited !== undefined && object.time_limited !== null) {
      message.timeLimited = object.time_limited;
    }
    if (object.time_period !== undefined && object.time_period !== null) {
      message.timePeriod = Duration.fromAmino(object.time_period);
    }
    if (object.time_based_limit !== undefined && object.time_based_limit !== null) {
      message.timeBasedLimit = object.time_based_limit;
    }
    return message;
  },
  toAmino(message: SupplyLimit): SupplyLimitAmino {
    const obj: any = {};
    obj.limit = message.limit;
    obj.time_limited = message.timeLimited;
    obj.time_period = message.timePeriod ? Duration.toAmino(message.timePeriod) : undefined;
    obj.time_based_limit = message.timeBasedLimit;
    return obj;
  },
  fromAminoMsg(object: SupplyLimitAminoMsg): SupplyLimit {
    return SupplyLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplyLimitProtoMsg): SupplyLimit {
    return SupplyLimit.decode(message.value);
  },
  toProto(message: SupplyLimit): Uint8Array {
    return SupplyLimit.encode(message).finish();
  },
  toProtoMsg(message: SupplyLimit): SupplyLimitProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.SupplyLimit",
      value: SupplyLimit.encode(message).finish()
    };
  }
};
function createBaseAtomicSwap(): AtomicSwap {
  return {
    amount: [],
    randomNumberHash: new Uint8Array(),
    expireHeight: BigInt(0),
    timestamp: BigInt(0),
    sender: new Uint8Array(),
    recipient: new Uint8Array(),
    senderOtherChain: "",
    recipientOtherChain: "",
    closedBlock: BigInt(0),
    status: 0,
    crossChain: false,
    direction: 0
  };
}
export const AtomicSwap = {
  typeUrl: "/kava.bep3.v1beta1.AtomicSwap",
  encode(message: AtomicSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.randomNumberHash.length !== 0) {
      writer.uint32(18).bytes(message.randomNumberHash);
    }
    if (message.expireHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.expireHeight);
    }
    if (message.timestamp !== BigInt(0)) {
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
    if (message.closedBlock !== BigInt(0)) {
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
      expireHeight: isSet(object.expireHeight) ? BigInt(object.expireHeight.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
      senderOtherChain: isSet(object.senderOtherChain) ? String(object.senderOtherChain) : "",
      recipientOtherChain: isSet(object.recipientOtherChain) ? String(object.recipientOtherChain) : "",
      closedBlock: isSet(object.closedBlock) ? BigInt(object.closedBlock.toString()) : BigInt(0),
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : -1,
      crossChain: isSet(object.crossChain) ? Boolean(object.crossChain) : false,
      direction: isSet(object.direction) ? swapDirectionFromJSON(object.direction) : -1
    };
  },
  fromPartial(object: Partial<AtomicSwap>): AtomicSwap {
    const message = createBaseAtomicSwap();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.randomNumberHash = object.randomNumberHash ?? new Uint8Array();
    message.expireHeight = object.expireHeight !== undefined && object.expireHeight !== null ? BigInt(object.expireHeight.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.sender = object.sender ?? new Uint8Array();
    message.recipient = object.recipient ?? new Uint8Array();
    message.senderOtherChain = object.senderOtherChain ?? "";
    message.recipientOtherChain = object.recipientOtherChain ?? "";
    message.closedBlock = object.closedBlock !== undefined && object.closedBlock !== null ? BigInt(object.closedBlock.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.crossChain = object.crossChain ?? false;
    message.direction = object.direction ?? 0;
    return message;
  },
  fromAmino(object: AtomicSwapAmino): AtomicSwap {
    const message = createBaseAtomicSwap();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.random_number_hash !== undefined && object.random_number_hash !== null) {
      message.randomNumberHash = bytesFromBase64(object.random_number_hash);
    }
    if (object.expire_height !== undefined && object.expire_height !== null) {
      message.expireHeight = BigInt(object.expire_height);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = bytesFromBase64(object.recipient);
    }
    if (object.sender_other_chain !== undefined && object.sender_other_chain !== null) {
      message.senderOtherChain = object.sender_other_chain;
    }
    if (object.recipient_other_chain !== undefined && object.recipient_other_chain !== null) {
      message.recipientOtherChain = object.recipient_other_chain;
    }
    if (object.closed_block !== undefined && object.closed_block !== null) {
      message.closedBlock = BigInt(object.closed_block);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = swapStatusFromJSON(object.status);
    }
    if (object.cross_chain !== undefined && object.cross_chain !== null) {
      message.crossChain = object.cross_chain;
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = swapDirectionFromJSON(object.direction);
    }
    return message;
  },
  toAmino(message: AtomicSwap): AtomicSwapAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.random_number_hash = message.randomNumberHash ? base64FromBytes(message.randomNumberHash) : undefined;
    obj.expire_height = message.expireHeight ? message.expireHeight.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.recipient = message.recipient ? base64FromBytes(message.recipient) : undefined;
    obj.sender_other_chain = message.senderOtherChain;
    obj.recipient_other_chain = message.recipientOtherChain;
    obj.closed_block = message.closedBlock ? message.closedBlock.toString() : undefined;
    obj.status = message.status;
    obj.cross_chain = message.crossChain;
    obj.direction = message.direction;
    return obj;
  },
  fromAminoMsg(object: AtomicSwapAminoMsg): AtomicSwap {
    return AtomicSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: AtomicSwapProtoMsg): AtomicSwap {
    return AtomicSwap.decode(message.value);
  },
  toProto(message: AtomicSwap): Uint8Array {
    return AtomicSwap.encode(message).finish();
  },
  toProtoMsg(message: AtomicSwap): AtomicSwapProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.AtomicSwap",
      value: AtomicSwap.encode(message).finish()
    };
  }
};
function createBaseAssetSupply(): AssetSupply {
  return {
    incomingSupply: Coin.fromPartial({}),
    outgoingSupply: Coin.fromPartial({}),
    currentSupply: Coin.fromPartial({}),
    timeLimitedCurrentSupply: Coin.fromPartial({}),
    timeElapsed: Duration.fromPartial({})
  };
}
export const AssetSupply = {
  typeUrl: "/kava.bep3.v1beta1.AssetSupply",
  encode(message: AssetSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AssetSupplyAmino): AssetSupply {
    const message = createBaseAssetSupply();
    if (object.incoming_supply !== undefined && object.incoming_supply !== null) {
      message.incomingSupply = Coin.fromAmino(object.incoming_supply);
    }
    if (object.outgoing_supply !== undefined && object.outgoing_supply !== null) {
      message.outgoingSupply = Coin.fromAmino(object.outgoing_supply);
    }
    if (object.current_supply !== undefined && object.current_supply !== null) {
      message.currentSupply = Coin.fromAmino(object.current_supply);
    }
    if (object.time_limited_current_supply !== undefined && object.time_limited_current_supply !== null) {
      message.timeLimitedCurrentSupply = Coin.fromAmino(object.time_limited_current_supply);
    }
    if (object.time_elapsed !== undefined && object.time_elapsed !== null) {
      message.timeElapsed = Duration.fromAmino(object.time_elapsed);
    }
    return message;
  },
  toAmino(message: AssetSupply): AssetSupplyAmino {
    const obj: any = {};
    obj.incoming_supply = message.incomingSupply ? Coin.toAmino(message.incomingSupply) : undefined;
    obj.outgoing_supply = message.outgoingSupply ? Coin.toAmino(message.outgoingSupply) : undefined;
    obj.current_supply = message.currentSupply ? Coin.toAmino(message.currentSupply) : undefined;
    obj.time_limited_current_supply = message.timeLimitedCurrentSupply ? Coin.toAmino(message.timeLimitedCurrentSupply) : undefined;
    obj.time_elapsed = message.timeElapsed ? Duration.toAmino(message.timeElapsed) : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetSupplyAminoMsg): AssetSupply {
    return AssetSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetSupplyProtoMsg): AssetSupply {
    return AssetSupply.decode(message.value);
  },
  toProto(message: AssetSupply): Uint8Array {
    return AssetSupply.encode(message).finish();
  },
  toProtoMsg(message: AssetSupply): AssetSupplyProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.AssetSupply",
      value: AssetSupply.encode(message).finish()
    };
  }
};