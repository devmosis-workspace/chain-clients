import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** EventSetBalance is an event that tracks the latest bank balance. */
export interface EventSetBalances {
  balanceUpdates: BalanceUpdate[];
}
/** EventSetBalance is an event that tracks the latest bank balance. */
export interface EventSetBalancesSDKType {
  balance_updates: BalanceUpdateSDKType[];
}
/** BalanceUpdate contains a given address's latest balance */
export interface BalanceUpdate {
  addr: Uint8Array;
  denom: Uint8Array;
  /** the latest amount */
  amt: string;
}
/** BalanceUpdate contains a given address's latest balance */
export interface BalanceUpdateSDKType {
  addr: Uint8Array;
  denom: Uint8Array;
  amt: string;
}
function createBaseEventSetBalances(): EventSetBalances {
  return {
    balanceUpdates: []
  };
}
export const EventSetBalances = {
  encode(message: EventSetBalances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balanceUpdates) {
      BalanceUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventSetBalances {
    return {
      balanceUpdates: Array.isArray(object?.balanceUpdates) ? object.balanceUpdates.map((e: any) => BalanceUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventSetBalances>): EventSetBalances {
    const message = createBaseEventSetBalances();
    message.balanceUpdates = object.balanceUpdates?.map(e => BalanceUpdate.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBalanceUpdate(): BalanceUpdate {
  return {
    addr: new Uint8Array(),
    denom: new Uint8Array(),
    amt: ""
  };
}
export const BalanceUpdate = {
  encode(message: BalanceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr.length !== 0) {
      writer.uint32(10).bytes(message.addr);
    }
    if (message.denom.length !== 0) {
      writer.uint32(18).bytes(message.denom);
    }
    if (message.amt !== "") {
      writer.uint32(26).string(message.amt);
    }
    return writer;
  },
  fromJSON(object: any): BalanceUpdate {
    return {
      addr: isSet(object.addr) ? bytesFromBase64(object.addr) : new Uint8Array(),
      denom: isSet(object.denom) ? bytesFromBase64(object.denom) : new Uint8Array(),
      amt: isSet(object.amt) ? String(object.amt) : ""
    };
  },
  fromPartial(object: Partial<BalanceUpdate>): BalanceUpdate {
    const message = createBaseBalanceUpdate();
    message.addr = object.addr ?? new Uint8Array();
    message.denom = object.denom ?? new Uint8Array();
    message.amt = object.amt ?? "";
    return message;
  }
};