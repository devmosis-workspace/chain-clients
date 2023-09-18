import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: bigint;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
}
export interface FungibleTokenPacketDataProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.FungibleTokenPacketData";
  value: Uint8Array;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataAmino {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: string;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
}
export interface FungibleTokenPacketDataAminoMsg {
  type: "cosmos-sdk/FungibleTokenPacketData";
  value: FungibleTokenPacketDataAmino;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataSDKType {
  denom: string;
  amount: bigint;
  sender: string;
  receiver: string;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path: string;
  /** base denomination of the relayed fungible token. */
  baseDenom: string;
}
export interface DenomTraceProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.DenomTrace";
  value: Uint8Array;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceAmino {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path: string;
  /** base denomination of the relayed fungible token. */
  base_denom: string;
}
export interface DenomTraceAminoMsg {
  type: "cosmos-sdk/DenomTrace";
  value: DenomTraceAmino;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceSDKType {
  path: string;
  base_denom: string;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  sendEnabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receiveEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsAmino {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  send_enabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receive_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsSDKType {
  send_enabled: boolean;
  receive_enabled: boolean;
}
function createBaseFungibleTokenPacketData(): FungibleTokenPacketData {
  return {
    denom: "",
    amount: BigInt(0),
    sender: "",
    receiver: ""
  };
}
export const FungibleTokenPacketData = {
  typeUrl: "/ibc.applications.transfer.v1.FungibleTokenPacketData",
  encode(message: FungibleTokenPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): FungibleTokenPacketData {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<FungibleTokenPacketData>): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: FungibleTokenPacketDataAmino): FungibleTokenPacketData {
    return {
      denom: object.denom,
      amount: BigInt(object.amount),
      sender: object.sender,
      receiver: object.receiver
    };
  },
  toAmino(message: FungibleTokenPacketData): FungibleTokenPacketDataAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(object: FungibleTokenPacketDataAminoMsg): FungibleTokenPacketData {
    return FungibleTokenPacketData.fromAmino(object.value);
  },
  toAminoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataAminoMsg {
    return {
      type: "cosmos-sdk/FungibleTokenPacketData",
      value: FungibleTokenPacketData.toAmino(message)
    };
  },
  fromProtoMsg(message: FungibleTokenPacketDataProtoMsg): FungibleTokenPacketData {
    return FungibleTokenPacketData.decode(message.value);
  },
  toProto(message: FungibleTokenPacketData): Uint8Array {
    return FungibleTokenPacketData.encode(message).finish();
  },
  toProtoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.FungibleTokenPacketData",
      value: FungibleTokenPacketData.encode(message).finish()
    };
  }
};
function createBaseDenomTrace(): DenomTrace {
  return {
    path: "",
    baseDenom: ""
  };
}
export const DenomTrace = {
  typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
  encode(message: DenomTrace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },
  fromJSON(object: any): DenomTrace {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },
  fromPartial(object: Partial<DenomTrace>): DenomTrace {
    const message = createBaseDenomTrace();
    message.path = object.path ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
  fromAmino(object: DenomTraceAmino): DenomTrace {
    return {
      path: object.path,
      baseDenom: object.base_denom
    };
  },
  toAmino(message: DenomTrace): DenomTraceAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.base_denom = message.baseDenom;
    return obj;
  },
  fromAminoMsg(object: DenomTraceAminoMsg): DenomTrace {
    return DenomTrace.fromAmino(object.value);
  },
  toAminoMsg(message: DenomTrace): DenomTraceAminoMsg {
    return {
      type: "cosmos-sdk/DenomTrace",
      value: DenomTrace.toAmino(message)
    };
  },
  fromProtoMsg(message: DenomTraceProtoMsg): DenomTrace {
    return DenomTrace.decode(message.value);
  },
  toProto(message: DenomTrace): Uint8Array {
    return DenomTrace.encode(message).finish();
  },
  toProtoMsg(message: DenomTrace): DenomTraceProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
      value: DenomTrace.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    sendEnabled: false,
    receiveEnabled: false
  };
}
export const Params = {
  typeUrl: "/ibc.applications.transfer.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sendEnabled === true) {
      writer.uint32(8).bool(message.sendEnabled);
    }
    if (message.receiveEnabled === true) {
      writer.uint32(16).bool(message.receiveEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      sendEnabled: isSet(object.sendEnabled) ? Boolean(object.sendEnabled) : false,
      receiveEnabled: isSet(object.receiveEnabled) ? Boolean(object.receiveEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.sendEnabled = object.sendEnabled ?? false;
    message.receiveEnabled = object.receiveEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      sendEnabled: object.send_enabled,
      receiveEnabled: object.receive_enabled
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.send_enabled = message.sendEnabled;
    obj.receive_enabled = message.receiveEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};