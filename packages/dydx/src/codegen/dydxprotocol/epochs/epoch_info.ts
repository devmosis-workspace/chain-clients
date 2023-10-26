import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** EpochInfo stores metadata of an epoch timer. */
export interface EpochInfo {
  /** name is the unique identifier. */
  name: string;
  /**
   * next_tick indicates when the next epoch starts (in Unix Epoch seconds),
   * if `EpochInfo` has been initialized.
   * If `EpochInfo` is not initialized yet, `next_tick` indicates the earliest
   * initialization time (see `is_initialized` below).
   */
  nextTick: number;
  /** duration of the epoch in seconds. */
  duration: number;
  /**
   * current epoch is the number of the current epoch.
   * 0 if `next_tick` has never been reached, positive otherwise.
   */
  currentEpoch: number;
  /**
   * current_epoch_start_block indicates the block height when the current
   * epoch started. 0 if `current_epoch` is 0.
   */
  currentEpochStartBlock: number;
  /**
   * is_initialized indicates whether the `EpochInfo` has been initialized
   * and started ticking.
   * An `EpochInfo` is initialized when all below conditions are true:
   * - Not yet initialized
   * - `BlockHeight` >= 2
   * - `BlockTime` >= `next_tick`
   */
  isInitialized: boolean;
  /**
   * fast_forward_next_tick specifies whether during initialization, `next_tick`
   * should be fast-forwarded to be greater than the current block time.
   * If `false`, the original `next_tick` value is
   * unchanged during initialization.
   * If `true`, `next_tick` will be set to the smallest value `x` greater than
   * the current block time such that `(x - next_tick) % duration = 0`.
   */
  fastForwardNextTick: boolean;
}
export interface EpochInfoProtoMsg {
  typeUrl: "/dydxprotocol.epochs.EpochInfo";
  value: Uint8Array;
}
/** EpochInfo stores metadata of an epoch timer. */
export interface EpochInfoAmino {
  /** name is the unique identifier. */
  name: string;
  /**
   * next_tick indicates when the next epoch starts (in Unix Epoch seconds),
   * if `EpochInfo` has been initialized.
   * If `EpochInfo` is not initialized yet, `next_tick` indicates the earliest
   * initialization time (see `is_initialized` below).
   */
  next_tick: number;
  /** duration of the epoch in seconds. */
  duration: number;
  /**
   * current epoch is the number of the current epoch.
   * 0 if `next_tick` has never been reached, positive otherwise.
   */
  current_epoch: number;
  /**
   * current_epoch_start_block indicates the block height when the current
   * epoch started. 0 if `current_epoch` is 0.
   */
  current_epoch_start_block: number;
  /**
   * is_initialized indicates whether the `EpochInfo` has been initialized
   * and started ticking.
   * An `EpochInfo` is initialized when all below conditions are true:
   * - Not yet initialized
   * - `BlockHeight` >= 2
   * - `BlockTime` >= `next_tick`
   */
  is_initialized: boolean;
  /**
   * fast_forward_next_tick specifies whether during initialization, `next_tick`
   * should be fast-forwarded to be greater than the current block time.
   * If `false`, the original `next_tick` value is
   * unchanged during initialization.
   * If `true`, `next_tick` will be set to the smallest value `x` greater than
   * the current block time such that `(x - next_tick) % duration = 0`.
   */
  fast_forward_next_tick: boolean;
}
export interface EpochInfoAminoMsg {
  type: "/dydxprotocol.epochs.EpochInfo";
  value: EpochInfoAmino;
}
/** EpochInfo stores metadata of an epoch timer. */
export interface EpochInfoSDKType {
  name: string;
  next_tick: number;
  duration: number;
  current_epoch: number;
  current_epoch_start_block: number;
  is_initialized: boolean;
  fast_forward_next_tick: boolean;
}
function createBaseEpochInfo(): EpochInfo {
  return {
    name: "",
    nextTick: 0,
    duration: 0,
    currentEpoch: 0,
    currentEpochStartBlock: 0,
    isInitialized: false,
    fastForwardNextTick: false
  };
}
export const EpochInfo = {
  typeUrl: "/dydxprotocol.epochs.EpochInfo",
  encode(message: EpochInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.nextTick !== 0) {
      writer.uint32(16).uint32(message.nextTick);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    if (message.currentEpoch !== 0) {
      writer.uint32(32).uint32(message.currentEpoch);
    }
    if (message.currentEpochStartBlock !== 0) {
      writer.uint32(40).uint32(message.currentEpochStartBlock);
    }
    if (message.isInitialized === true) {
      writer.uint32(48).bool(message.isInitialized);
    }
    if (message.fastForwardNextTick === true) {
      writer.uint32(56).bool(message.fastForwardNextTick);
    }
    return writer;
  },
  fromJSON(object: any): EpochInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      nextTick: isSet(object.nextTick) ? Number(object.nextTick) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      currentEpoch: isSet(object.currentEpoch) ? Number(object.currentEpoch) : 0,
      currentEpochStartBlock: isSet(object.currentEpochStartBlock) ? Number(object.currentEpochStartBlock) : 0,
      isInitialized: isSet(object.isInitialized) ? Boolean(object.isInitialized) : false,
      fastForwardNextTick: isSet(object.fastForwardNextTick) ? Boolean(object.fastForwardNextTick) : false
    };
  },
  fromPartial(object: Partial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.name = object.name ?? "";
    message.nextTick = object.nextTick ?? 0;
    message.duration = object.duration ?? 0;
    message.currentEpoch = object.currentEpoch ?? 0;
    message.currentEpochStartBlock = object.currentEpochStartBlock ?? 0;
    message.isInitialized = object.isInitialized ?? false;
    message.fastForwardNextTick = object.fastForwardNextTick ?? false;
    return message;
  },
  fromAmino(object: EpochInfoAmino): EpochInfo {
    return {
      name: object.name,
      nextTick: object.next_tick,
      duration: object.duration,
      currentEpoch: object.current_epoch,
      currentEpochStartBlock: object.current_epoch_start_block,
      isInitialized: object.is_initialized,
      fastForwardNextTick: object.fast_forward_next_tick
    };
  },
  toAmino(message: EpochInfo): EpochInfoAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.next_tick = message.nextTick;
    obj.duration = message.duration;
    obj.current_epoch = message.currentEpoch;
    obj.current_epoch_start_block = message.currentEpochStartBlock;
    obj.is_initialized = message.isInitialized;
    obj.fast_forward_next_tick = message.fastForwardNextTick;
    return obj;
  },
  fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo {
    return EpochInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo {
    return EpochInfo.decode(message.value);
  },
  toProto(message: EpochInfo): Uint8Array {
    return EpochInfo.encode(message).finish();
  },
  toProtoMsg(message: EpochInfo): EpochInfoProtoMsg {
    return {
      typeUrl: "/dydxprotocol.epochs.EpochInfo",
      value: EpochInfo.encode(message).finish()
    };
  }
};