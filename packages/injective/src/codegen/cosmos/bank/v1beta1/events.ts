import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** EventSetBalance is an event that tracks the latest bank balance. */
export interface EventSetBalances {
  balanceUpdates: BalanceUpdate[];
}
export interface EventSetBalancesProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.EventSetBalances";
  value: Uint8Array;
}
/** EventSetBalance is an event that tracks the latest bank balance. */
export interface EventSetBalancesAmino {
  balance_updates: BalanceUpdateAmino[];
}
export interface EventSetBalancesAminoMsg {
  type: "cosmos-sdk/EventSetBalances";
  value: EventSetBalancesAmino;
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
export interface BalanceUpdateProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.BalanceUpdate";
  value: Uint8Array;
}
/** BalanceUpdate contains a given address's latest balance */
export interface BalanceUpdateAmino {
  addr: Uint8Array;
  denom: Uint8Array;
  /** the latest amount */
  amt: string;
}
export interface BalanceUpdateAminoMsg {
  type: "cosmos-sdk/BalanceUpdate";
  value: BalanceUpdateAmino;
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
  typeUrl: "/cosmos.bank.v1beta1.EventSetBalances",
  encode(message: EventSetBalances, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventSetBalancesAmino): EventSetBalances {
    return {
      balanceUpdates: Array.isArray(object?.balance_updates) ? object.balance_updates.map((e: any) => BalanceUpdate.fromAmino(e)) : []
    };
  },
  toAmino(message: EventSetBalances): EventSetBalancesAmino {
    const obj: any = {};
    if (message.balanceUpdates) {
      obj.balance_updates = message.balanceUpdates.map(e => e ? BalanceUpdate.toAmino(e) : undefined);
    } else {
      obj.balance_updates = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventSetBalancesAminoMsg): EventSetBalances {
    return EventSetBalances.fromAmino(object.value);
  },
  toAminoMsg(message: EventSetBalances): EventSetBalancesAminoMsg {
    return {
      type: "cosmos-sdk/EventSetBalances",
      value: EventSetBalances.toAmino(message)
    };
  },
  fromProtoMsg(message: EventSetBalancesProtoMsg): EventSetBalances {
    return EventSetBalances.decode(message.value);
  },
  toProto(message: EventSetBalances): Uint8Array {
    return EventSetBalances.encode(message).finish();
  },
  toProtoMsg(message: EventSetBalances): EventSetBalancesProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.EventSetBalances",
      value: EventSetBalances.encode(message).finish()
    };
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
  typeUrl: "/cosmos.bank.v1beta1.BalanceUpdate",
  encode(message: BalanceUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BalanceUpdateAmino): BalanceUpdate {
    return {
      addr: object.addr,
      denom: object.denom,
      amt: object.amt
    };
  },
  toAmino(message: BalanceUpdate): BalanceUpdateAmino {
    const obj: any = {};
    obj.addr = message.addr;
    obj.denom = message.denom;
    obj.amt = message.amt;
    return obj;
  },
  fromAminoMsg(object: BalanceUpdateAminoMsg): BalanceUpdate {
    return BalanceUpdate.fromAmino(object.value);
  },
  toAminoMsg(message: BalanceUpdate): BalanceUpdateAminoMsg {
    return {
      type: "cosmos-sdk/BalanceUpdate",
      value: BalanceUpdate.toAmino(message)
    };
  },
  fromProtoMsg(message: BalanceUpdateProtoMsg): BalanceUpdate {
    return BalanceUpdate.decode(message.value);
  },
  toProto(message: BalanceUpdate): Uint8Array {
    return BalanceUpdate.encode(message).finish();
  },
  toProtoMsg(message: BalanceUpdate): BalanceUpdateProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.BalanceUpdate",
      value: BalanceUpdate.encode(message).finish()
    };
  }
};