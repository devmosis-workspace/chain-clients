import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** IDSet represents a set of IDs */
export interface IDSet {
  /** IDSet represents a set of IDs */
  ids: bigint[];
}
export interface IDSetProtoMsg {
  typeUrl: "/gravity.v1.IDSet";
  value: Uint8Array;
}
/** IDSet represents a set of IDs */
export interface IDSetAmino {
  /** IDSet represents a set of IDs */
  ids: string[];
}
export interface IDSetAminoMsg {
  type: "/gravity.v1.IDSet";
  value: IDSetAmino;
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
  ids: bigint[];
}
export interface BatchFees {
  token: string;
  totalFees: string;
  txCount: bigint;
}
export interface BatchFeesProtoMsg {
  typeUrl: "/gravity.v1.BatchFees";
  value: Uint8Array;
}
export interface BatchFeesAmino {
  token: string;
  total_fees: string;
  tx_count: string;
}
export interface BatchFeesAminoMsg {
  type: "/gravity.v1.BatchFees";
  value: BatchFeesAmino;
}
export interface BatchFeesSDKType {
  token: string;
  total_fees: string;
  tx_count: bigint;
}
export interface EventWithdrawalReceived {
  bridgeContract: string;
  bridgeChainId: string;
  outgoingTxId: string;
  nonce: string;
}
export interface EventWithdrawalReceivedProtoMsg {
  typeUrl: "/gravity.v1.EventWithdrawalReceived";
  value: Uint8Array;
}
export interface EventWithdrawalReceivedAmino {
  bridge_contract: string;
  bridge_chain_id: string;
  outgoing_tx_id: string;
  nonce: string;
}
export interface EventWithdrawalReceivedAminoMsg {
  type: "/gravity.v1.EventWithdrawalReceived";
  value: EventWithdrawalReceivedAmino;
}
export interface EventWithdrawalReceivedSDKType {
  bridge_contract: string;
  bridge_chain_id: string;
  outgoing_tx_id: string;
  nonce: string;
}
export interface EventWithdrawCanceled {
  sender: string;
  txId: string;
  bridgeContract: string;
  bridgeChainId: string;
}
export interface EventWithdrawCanceledProtoMsg {
  typeUrl: "/gravity.v1.EventWithdrawCanceled";
  value: Uint8Array;
}
export interface EventWithdrawCanceledAmino {
  sender: string;
  tx_id: string;
  bridge_contract: string;
  bridge_chain_id: string;
}
export interface EventWithdrawCanceledAminoMsg {
  type: "/gravity.v1.EventWithdrawCanceled";
  value: EventWithdrawCanceledAmino;
}
export interface EventWithdrawCanceledSDKType {
  sender: string;
  tx_id: string;
  bridge_contract: string;
  bridge_chain_id: string;
}
function createBaseIDSet(): IDSet {
  return {
    ids: []
  };
}
export const IDSet = {
  typeUrl: "/gravity.v1.IDSet",
  encode(message: IDSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): IDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<IDSet>): IDSet {
    const message = createBaseIDSet();
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: IDSetAmino): IDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: IDSet): IDSetAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: IDSetAminoMsg): IDSet {
    return IDSet.fromAmino(object.value);
  },
  fromProtoMsg(message: IDSetProtoMsg): IDSet {
    return IDSet.decode(message.value);
  },
  toProto(message: IDSet): Uint8Array {
    return IDSet.encode(message).finish();
  },
  toProtoMsg(message: IDSet): IDSetProtoMsg {
    return {
      typeUrl: "/gravity.v1.IDSet",
      value: IDSet.encode(message).finish()
    };
  }
};
function createBaseBatchFees(): BatchFees {
  return {
    token: "",
    totalFees: "",
    txCount: BigInt(0)
  };
}
export const BatchFees = {
  typeUrl: "/gravity.v1.BatchFees",
  encode(message: BatchFees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.totalFees !== "") {
      writer.uint32(18).string(message.totalFees);
    }
    if (message.txCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.txCount);
    }
    return writer;
  },
  fromJSON(object: any): BatchFees {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      totalFees: isSet(object.totalFees) ? String(object.totalFees) : "",
      txCount: isSet(object.txCount) ? BigInt(object.txCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<BatchFees>): BatchFees {
    const message = createBaseBatchFees();
    message.token = object.token ?? "";
    message.totalFees = object.totalFees ?? "";
    message.txCount = object.txCount !== undefined && object.txCount !== null ? BigInt(object.txCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BatchFeesAmino): BatchFees {
    return {
      token: object.token,
      totalFees: object.total_fees,
      txCount: BigInt(object.tx_count)
    };
  },
  toAmino(message: BatchFees): BatchFeesAmino {
    const obj: any = {};
    obj.token = message.token;
    obj.total_fees = message.totalFees;
    obj.tx_count = message.txCount ? message.txCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BatchFeesAminoMsg): BatchFees {
    return BatchFees.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchFeesProtoMsg): BatchFees {
    return BatchFees.decode(message.value);
  },
  toProto(message: BatchFees): Uint8Array {
    return BatchFees.encode(message).finish();
  },
  toProtoMsg(message: BatchFees): BatchFeesProtoMsg {
    return {
      typeUrl: "/gravity.v1.BatchFees",
      value: BatchFees.encode(message).finish()
    };
  }
};
function createBaseEventWithdrawalReceived(): EventWithdrawalReceived {
  return {
    bridgeContract: "",
    bridgeChainId: "",
    outgoingTxId: "",
    nonce: ""
  };
}
export const EventWithdrawalReceived = {
  typeUrl: "/gravity.v1.EventWithdrawalReceived",
  encode(message: EventWithdrawalReceived, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== "") {
      writer.uint32(18).string(message.bridgeChainId);
    }
    if (message.outgoingTxId !== "") {
      writer.uint32(26).string(message.outgoingTxId);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): EventWithdrawalReceived {
    return {
      bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "",
      outgoingTxId: isSet(object.outgoingTxId) ? String(object.outgoingTxId) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : ""
    };
  },
  fromPartial(object: Partial<EventWithdrawalReceived>): EventWithdrawalReceived {
    const message = createBaseEventWithdrawalReceived();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.outgoingTxId = object.outgoingTxId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
  fromAmino(object: EventWithdrawalReceivedAmino): EventWithdrawalReceived {
    return {
      bridgeContract: object.bridge_contract,
      bridgeChainId: object.bridge_chain_id,
      outgoingTxId: object.outgoing_tx_id,
      nonce: object.nonce
    };
  },
  toAmino(message: EventWithdrawalReceived): EventWithdrawalReceivedAmino {
    const obj: any = {};
    obj.bridge_contract = message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId;
    obj.outgoing_tx_id = message.outgoingTxId;
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawalReceivedAminoMsg): EventWithdrawalReceived {
    return EventWithdrawalReceived.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawalReceivedProtoMsg): EventWithdrawalReceived {
    return EventWithdrawalReceived.decode(message.value);
  },
  toProto(message: EventWithdrawalReceived): Uint8Array {
    return EventWithdrawalReceived.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawalReceived): EventWithdrawalReceivedProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventWithdrawalReceived",
      value: EventWithdrawalReceived.encode(message).finish()
    };
  }
};
function createBaseEventWithdrawCanceled(): EventWithdrawCanceled {
  return {
    sender: "",
    txId: "",
    bridgeContract: "",
    bridgeChainId: ""
  };
}
export const EventWithdrawCanceled = {
  typeUrl: "/gravity.v1.EventWithdrawCanceled",
  encode(message: EventWithdrawCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.bridgeContract !== "") {
      writer.uint32(26).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== "") {
      writer.uint32(34).string(message.bridgeChainId);
    }
    return writer;
  },
  fromJSON(object: any): EventWithdrawCanceled {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      txId: isSet(object.txId) ? String(object.txId) : "",
      bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : ""
    };
  },
  fromPartial(object: Partial<EventWithdrawCanceled>): EventWithdrawCanceled {
    const message = createBaseEventWithdrawCanceled();
    message.sender = object.sender ?? "";
    message.txId = object.txId ?? "";
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    return message;
  },
  fromAmino(object: EventWithdrawCanceledAmino): EventWithdrawCanceled {
    return {
      sender: object.sender,
      txId: object.tx_id,
      bridgeContract: object.bridge_contract,
      bridgeChainId: object.bridge_chain_id
    };
  },
  toAmino(message: EventWithdrawCanceled): EventWithdrawCanceledAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.tx_id = message.txId;
    obj.bridge_contract = message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawCanceledAminoMsg): EventWithdrawCanceled {
    return EventWithdrawCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawCanceledProtoMsg): EventWithdrawCanceled {
    return EventWithdrawCanceled.decode(message.value);
  },
  toProto(message: EventWithdrawCanceled): Uint8Array {
    return EventWithdrawCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawCanceled): EventWithdrawCanceledProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventWithdrawCanceled",
      value: EventWithdrawCanceled.encode(message).finish()
    };
  }
};