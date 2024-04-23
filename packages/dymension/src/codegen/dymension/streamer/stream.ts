import { DistrInfo, DistrInfoAmino, DistrInfoSDKType } from "./distr_info";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp } from "../../helpers";
/**
 * Stream is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently streams support conditions around the
 * duration for which a given denom is locked.
 */
export interface Stream {
  /** id is the unique ID of a Stream */
  id: bigint;
  /** distribute_to is the distr_info. */
  distributeTo?: DistrInfo;
  /**
   * coins is the total amount of coins that have been in the stream
   * Can distribute multiple coin denoms
   */
  coins: Coin[];
  /** start_time is the distribution start time */
  startTime: Timestamp;
  /**
   * distr_epoch_identifier is what epoch type di-stribution will be triggered by
   * (day, week, etc.)
   */
  distrEpochIdentifier: string;
  /**
   * num_epochs_paid_over is the number of total epochs distribution will be
   * completed over
   */
  numEpochsPaidOver: bigint;
  /**
   * filled_epochs is the number of epochs distribution has been completed on
   * already
   */
  filledEpochs: bigint;
  /** distributed_coins are coins that have been distributed already */
  distributedCoins: Coin[];
}
export interface StreamProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.Stream";
  value: Uint8Array;
}
/**
 * Stream is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently streams support conditions around the
 * duration for which a given denom is locked.
 */
export interface StreamAmino {
  /** id is the unique ID of a Stream */
  id?: string;
  /** distribute_to is the distr_info. */
  distribute_to?: DistrInfoAmino;
  /**
   * coins is the total amount of coins that have been in the stream
   * Can distribute multiple coin denoms
   */
  coins?: CoinAmino[];
  /** start_time is the distribution start time */
  start_time?: string;
  /**
   * distr_epoch_identifier is what epoch type di-stribution will be triggered by
   * (day, week, etc.)
   */
  distr_epoch_identifier?: string;
  /**
   * num_epochs_paid_over is the number of total epochs distribution will be
   * completed over
   */
  num_epochs_paid_over?: string;
  /**
   * filled_epochs is the number of epochs distribution has been completed on
   * already
   */
  filled_epochs?: string;
  /** distributed_coins are coins that have been distributed already */
  distributed_coins?: CoinAmino[];
}
export interface StreamAminoMsg {
  type: "/dymensionxyz.dymension.streamer.Stream";
  value: StreamAmino;
}
/**
 * Stream is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently streams support conditions around the
 * duration for which a given denom is locked.
 */
export interface StreamSDKType {
  id: bigint;
  distribute_to?: DistrInfoSDKType;
  coins: CoinSDKType[];
  start_time: TimestampSDKType;
  distr_epoch_identifier: string;
  num_epochs_paid_over: bigint;
  filled_epochs: bigint;
  distributed_coins: CoinSDKType[];
}
function createBaseStream(): Stream {
  return {
    id: BigInt(0),
    distributeTo: undefined,
    coins: [],
    startTime: Timestamp.fromPartial({}),
    distrEpochIdentifier: "",
    numEpochsPaidOver: BigInt(0),
    filledEpochs: BigInt(0),
    distributedCoins: []
  };
}
export const Stream = {
  typeUrl: "/dymensionxyz.dymension.streamer.Stream",
  encode(message: Stream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.distributeTo !== undefined) {
      DistrInfo.encode(message.distributeTo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.distrEpochIdentifier !== "") {
      writer.uint32(42).string(message.distrEpochIdentifier);
    }
    if (message.numEpochsPaidOver !== BigInt(0)) {
      writer.uint32(48).uint64(message.numEpochsPaidOver);
    }
    if (message.filledEpochs !== BigInt(0)) {
      writer.uint32(56).uint64(message.filledEpochs);
    }
    for (const v of message.distributedCoins) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Stream {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      distributeTo: isSet(object.distributeTo) ? DistrInfo.fromJSON(object.distributeTo) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      distrEpochIdentifier: isSet(object.distrEpochIdentifier) ? String(object.distrEpochIdentifier) : "",
      numEpochsPaidOver: isSet(object.numEpochsPaidOver) ? BigInt(object.numEpochsPaidOver.toString()) : BigInt(0),
      filledEpochs: isSet(object.filledEpochs) ? BigInt(object.filledEpochs.toString()) : BigInt(0),
      distributedCoins: Array.isArray(object?.distributedCoins) ? object.distributedCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Stream>): Stream {
    const message = createBaseStream();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.distributeTo = object.distributeTo !== undefined && object.distributeTo !== null ? DistrInfo.fromPartial(object.distributeTo) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
    message.numEpochsPaidOver = object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null ? BigInt(object.numEpochsPaidOver.toString()) : BigInt(0);
    message.filledEpochs = object.filledEpochs !== undefined && object.filledEpochs !== null ? BigInt(object.filledEpochs.toString()) : BigInt(0);
    message.distributedCoins = object.distributedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StreamAmino): Stream {
    const message = createBaseStream();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.distribute_to !== undefined && object.distribute_to !== null) {
      message.distributeTo = DistrInfo.fromAmino(object.distribute_to);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.distr_epoch_identifier !== undefined && object.distr_epoch_identifier !== null) {
      message.distrEpochIdentifier = object.distr_epoch_identifier;
    }
    if (object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null) {
      message.numEpochsPaidOver = BigInt(object.num_epochs_paid_over);
    }
    if (object.filled_epochs !== undefined && object.filled_epochs !== null) {
      message.filledEpochs = BigInt(object.filled_epochs);
    }
    message.distributedCoins = object.distributed_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Stream): StreamAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.distribute_to = message.distributeTo ? DistrInfo.toAmino(message.distributeTo) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.distr_epoch_identifier = message.distrEpochIdentifier;
    obj.num_epochs_paid_over = message.numEpochsPaidOver ? message.numEpochsPaidOver.toString() : undefined;
    obj.filled_epochs = message.filledEpochs ? message.filledEpochs.toString() : undefined;
    if (message.distributedCoins) {
      obj.distributed_coins = message.distributedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.distributed_coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: StreamAminoMsg): Stream {
    return Stream.fromAmino(object.value);
  },
  fromProtoMsg(message: StreamProtoMsg): Stream {
    return Stream.decode(message.value);
  },
  toProto(message: Stream): Uint8Array {
    return Stream.encode(message).finish();
  },
  toProtoMsg(message: Stream): StreamProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.Stream",
      value: Stream.encode(message).finish()
    };
  }
};