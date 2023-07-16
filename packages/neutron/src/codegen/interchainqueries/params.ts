import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * Defines amount of blocks required before query becomes available for
   * removal by anybody
   */
  querySubmitTimeout: Long;
  /** Amount of coins deposited for the query. */
  queryDeposit: Coin[];
  /**
   * Amount of tx hashes to be removed during a single EndBlock. Can vary to
   * balance between network cleaning speed and EndBlock duration. A zero value
   * means no limit.
   */
  txQueryRemovalLimit: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  query_submit_timeout: Long;
  query_deposit: CoinSDKType[];
  tx_query_removal_limit: Long;
}
function createBaseParams(): Params {
  return {
    querySubmitTimeout: Long.UZERO,
    queryDeposit: [],
    txQueryRemovalLimit: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.querySubmitTimeout.isZero()) {
      writer.uint32(8).uint64(message.querySubmitTimeout);
    }
    for (const v of message.queryDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.txQueryRemovalLimit.isZero()) {
      writer.uint32(24).uint64(message.txQueryRemovalLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      querySubmitTimeout: isSet(object.querySubmitTimeout) ? Long.fromValue(object.querySubmitTimeout) : Long.UZERO,
      queryDeposit: Array.isArray(object?.queryDeposit) ? object.queryDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      txQueryRemovalLimit: isSet(object.txQueryRemovalLimit) ? Long.fromValue(object.txQueryRemovalLimit) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.querySubmitTimeout = object.querySubmitTimeout !== undefined && object.querySubmitTimeout !== null ? Long.fromValue(object.querySubmitTimeout) : Long.UZERO;
    message.queryDeposit = object.queryDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.txQueryRemovalLimit = object.txQueryRemovalLimit !== undefined && object.txQueryRemovalLimit !== null ? Long.fromValue(object.txQueryRemovalLimit) : Long.UZERO;
    return message;
  }
};