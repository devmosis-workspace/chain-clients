import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * Defines amount of blocks required before query becomes available for
   * removal by anybody
   */
  querySubmitTimeout: bigint;
  /** Amount of coins deposited for the query. */
  queryDeposit: Coin[];
  /**
   * Amount of tx hashes to be removed during a single EndBlock. Can vary to
   * balance between network cleaning speed and EndBlock duration. A zero value
   * means no limit.
   */
  txQueryRemovalLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/neutron.interchainqueries.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * Defines amount of blocks required before query becomes available for
   * removal by anybody
   */
  query_submit_timeout: string;
  /** Amount of coins deposited for the query. */
  query_deposit: CoinAmino[];
  /**
   * Amount of tx hashes to be removed during a single EndBlock. Can vary to
   * balance between network cleaning speed and EndBlock duration. A zero value
   * means no limit.
   */
  tx_query_removal_limit: string;
}
export interface ParamsAminoMsg {
  type: "/neutron.interchainqueries.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  query_submit_timeout: bigint;
  query_deposit: CoinSDKType[];
  tx_query_removal_limit: bigint;
}
function createBaseParams(): Params {
  return {
    querySubmitTimeout: BigInt(0),
    queryDeposit: [],
    txQueryRemovalLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/neutron.interchainqueries.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.querySubmitTimeout !== BigInt(0)) {
      writer.uint32(8).uint64(message.querySubmitTimeout);
    }
    for (const v of message.queryDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.txQueryRemovalLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.txQueryRemovalLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      querySubmitTimeout: isSet(object.querySubmitTimeout) ? BigInt(object.querySubmitTimeout.toString()) : BigInt(0),
      queryDeposit: Array.isArray(object?.queryDeposit) ? object.queryDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      txQueryRemovalLimit: isSet(object.txQueryRemovalLimit) ? BigInt(object.txQueryRemovalLimit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.querySubmitTimeout = object.querySubmitTimeout !== undefined && object.querySubmitTimeout !== null ? BigInt(object.querySubmitTimeout.toString()) : BigInt(0);
    message.queryDeposit = object.queryDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.txQueryRemovalLimit = object.txQueryRemovalLimit !== undefined && object.txQueryRemovalLimit !== null ? BigInt(object.txQueryRemovalLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      querySubmitTimeout: BigInt(object.query_submit_timeout),
      queryDeposit: Array.isArray(object?.query_deposit) ? object.query_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      txQueryRemovalLimit: BigInt(object.tx_query_removal_limit)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.query_submit_timeout = message.querySubmitTimeout ? message.querySubmitTimeout.toString() : undefined;
    if (message.queryDeposit) {
      obj.query_deposit = message.queryDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.query_deposit = [];
    }
    obj.tx_query_removal_limit = message.txQueryRemovalLimit ? message.txQueryRemovalLimit.toString() : undefined;
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
      typeUrl: "/neutron.interchainqueries.Params",
      value: Params.encode(message).finish()
    };
  }
};