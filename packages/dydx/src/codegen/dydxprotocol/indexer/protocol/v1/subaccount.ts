import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64 } from "../../../../helpers";
/** IndexerSubaccountId defines a unique identifier for a Subaccount. */
export interface IndexerSubaccountId {
  /** The address of the wallet that owns this subaccount. */
  owner: string;
  /**
   * < 128 Since 128 should be enough to start and it fits within
   * 1 Byte (1 Bit needed to indicate that the first byte is the last).
   */
  number: number;
}
export interface IndexerSubaccountIdProtoMsg {
  typeUrl: "/dydxprotocol.indexer.protocol.v1.IndexerSubaccountId";
  value: Uint8Array;
}
/** IndexerSubaccountId defines a unique identifier for a Subaccount. */
export interface IndexerSubaccountIdAmino {
  /** The address of the wallet that owns this subaccount. */
  owner: string;
  /**
   * < 128 Since 128 should be enough to start and it fits within
   * 1 Byte (1 Bit needed to indicate that the first byte is the last).
   */
  number: number;
}
export interface IndexerSubaccountIdAminoMsg {
  type: "/dydxprotocol.indexer.protocol.v1.IndexerSubaccountId";
  value: IndexerSubaccountIdAmino;
}
/** IndexerSubaccountId defines a unique identifier for a Subaccount. */
export interface IndexerSubaccountIdSDKType {
  owner: string;
  number: number;
}
/**
 * IndexerPerpetualPosition are an account’s positions of a `Perpetual`.
 * Therefore they hold any information needed to trade perpetuals.
 */
export interface IndexerPerpetualPosition {
  /** The `Id` of the `Perpetual`. */
  perpetualId: number;
  /** The size of the position in base quantums. */
  quantums: Uint8Array;
  /**
   * The funding_index of the `Perpetual` the last time this position was
   * settled.
   */
  fundingIndex: Uint8Array;
  /**
   * Amount of funding payment (in quote quantums).
   * Note: 1. this field is not cumulative.
   * 2. a positive value means funding payment was paid out and
   * a negative value means funding payment was received.
   */
  fundingPayment: Uint8Array;
}
export interface IndexerPerpetualPositionProtoMsg {
  typeUrl: "/dydxprotocol.indexer.protocol.v1.IndexerPerpetualPosition";
  value: Uint8Array;
}
/**
 * IndexerPerpetualPosition are an account’s positions of a `Perpetual`.
 * Therefore they hold any information needed to trade perpetuals.
 */
export interface IndexerPerpetualPositionAmino {
  /** The `Id` of the `Perpetual`. */
  perpetual_id: number;
  /** The size of the position in base quantums. */
  quantums: Uint8Array;
  /**
   * The funding_index of the `Perpetual` the last time this position was
   * settled.
   */
  funding_index: Uint8Array;
  /**
   * Amount of funding payment (in quote quantums).
   * Note: 1. this field is not cumulative.
   * 2. a positive value means funding payment was paid out and
   * a negative value means funding payment was received.
   */
  funding_payment: Uint8Array;
}
export interface IndexerPerpetualPositionAminoMsg {
  type: "/dydxprotocol.indexer.protocol.v1.IndexerPerpetualPosition";
  value: IndexerPerpetualPositionAmino;
}
/**
 * IndexerPerpetualPosition are an account’s positions of a `Perpetual`.
 * Therefore they hold any information needed to trade perpetuals.
 */
export interface IndexerPerpetualPositionSDKType {
  perpetual_id: number;
  quantums: Uint8Array;
  funding_index: Uint8Array;
  funding_payment: Uint8Array;
}
/**
 * IndexerAssetPosition define an account’s positions of an `Asset`.
 * Therefore they hold any information needed to trade on Spot and Margin.
 */
export interface IndexerAssetPosition {
  /** The `Id` of the `Asset`. */
  assetId: number;
  /** The absolute size of the position in base quantums. */
  quantums: Uint8Array;
  /**
   * The `Index` (either `LongIndex` or `ShortIndex`) of the `Asset` the last
   * time this position was settled
   * TODO(DEC-582): pending margin trading being added.
   */
  index: bigint;
}
export interface IndexerAssetPositionProtoMsg {
  typeUrl: "/dydxprotocol.indexer.protocol.v1.IndexerAssetPosition";
  value: Uint8Array;
}
/**
 * IndexerAssetPosition define an account’s positions of an `Asset`.
 * Therefore they hold any information needed to trade on Spot and Margin.
 */
export interface IndexerAssetPositionAmino {
  /** The `Id` of the `Asset`. */
  asset_id: number;
  /** The absolute size of the position in base quantums. */
  quantums: Uint8Array;
  /**
   * The `Index` (either `LongIndex` or `ShortIndex`) of the `Asset` the last
   * time this position was settled
   * TODO(DEC-582): pending margin trading being added.
   */
  index: string;
}
export interface IndexerAssetPositionAminoMsg {
  type: "/dydxprotocol.indexer.protocol.v1.IndexerAssetPosition";
  value: IndexerAssetPositionAmino;
}
/**
 * IndexerAssetPosition define an account’s positions of an `Asset`.
 * Therefore they hold any information needed to trade on Spot and Margin.
 */
export interface IndexerAssetPositionSDKType {
  asset_id: number;
  quantums: Uint8Array;
  index: bigint;
}
function createBaseIndexerSubaccountId(): IndexerSubaccountId {
  return {
    owner: "",
    number: 0
  };
}
export const IndexerSubaccountId = {
  typeUrl: "/dydxprotocol.indexer.protocol.v1.IndexerSubaccountId",
  encode(message: IndexerSubaccountId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.number !== 0) {
      writer.uint32(16).uint32(message.number);
    }
    return writer;
  },
  fromJSON(object: any): IndexerSubaccountId {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      number: isSet(object.number) ? Number(object.number) : 0
    };
  },
  fromPartial(object: Partial<IndexerSubaccountId>): IndexerSubaccountId {
    const message = createBaseIndexerSubaccountId();
    message.owner = object.owner ?? "";
    message.number = object.number ?? 0;
    return message;
  },
  fromAmino(object: IndexerSubaccountIdAmino): IndexerSubaccountId {
    return {
      owner: object.owner,
      number: object.number
    };
  },
  toAmino(message: IndexerSubaccountId): IndexerSubaccountIdAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.number = message.number;
    return obj;
  },
  fromAminoMsg(object: IndexerSubaccountIdAminoMsg): IndexerSubaccountId {
    return IndexerSubaccountId.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexerSubaccountIdProtoMsg): IndexerSubaccountId {
    return IndexerSubaccountId.decode(message.value);
  },
  toProto(message: IndexerSubaccountId): Uint8Array {
    return IndexerSubaccountId.encode(message).finish();
  },
  toProtoMsg(message: IndexerSubaccountId): IndexerSubaccountIdProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.protocol.v1.IndexerSubaccountId",
      value: IndexerSubaccountId.encode(message).finish()
    };
  }
};
function createBaseIndexerPerpetualPosition(): IndexerPerpetualPosition {
  return {
    perpetualId: 0,
    quantums: new Uint8Array(),
    fundingIndex: new Uint8Array(),
    fundingPayment: new Uint8Array()
  };
}
export const IndexerPerpetualPosition = {
  typeUrl: "/dydxprotocol.indexer.protocol.v1.IndexerPerpetualPosition",
  encode(message: IndexerPerpetualPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.perpetualId !== 0) {
      writer.uint32(8).uint32(message.perpetualId);
    }
    if (message.quantums.length !== 0) {
      writer.uint32(18).bytes(message.quantums);
    }
    if (message.fundingIndex.length !== 0) {
      writer.uint32(26).bytes(message.fundingIndex);
    }
    if (message.fundingPayment.length !== 0) {
      writer.uint32(34).bytes(message.fundingPayment);
    }
    return writer;
  },
  fromJSON(object: any): IndexerPerpetualPosition {
    return {
      perpetualId: isSet(object.perpetualId) ? Number(object.perpetualId) : 0,
      quantums: isSet(object.quantums) ? bytesFromBase64(object.quantums) : new Uint8Array(),
      fundingIndex: isSet(object.fundingIndex) ? bytesFromBase64(object.fundingIndex) : new Uint8Array(),
      fundingPayment: isSet(object.fundingPayment) ? bytesFromBase64(object.fundingPayment) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<IndexerPerpetualPosition>): IndexerPerpetualPosition {
    const message = createBaseIndexerPerpetualPosition();
    message.perpetualId = object.perpetualId ?? 0;
    message.quantums = object.quantums ?? new Uint8Array();
    message.fundingIndex = object.fundingIndex ?? new Uint8Array();
    message.fundingPayment = object.fundingPayment ?? new Uint8Array();
    return message;
  },
  fromAmino(object: IndexerPerpetualPositionAmino): IndexerPerpetualPosition {
    return {
      perpetualId: object.perpetual_id,
      quantums: object.quantums,
      fundingIndex: object.funding_index,
      fundingPayment: object.funding_payment
    };
  },
  toAmino(message: IndexerPerpetualPosition): IndexerPerpetualPositionAmino {
    const obj: any = {};
    obj.perpetual_id = message.perpetualId;
    obj.quantums = message.quantums;
    obj.funding_index = message.fundingIndex;
    obj.funding_payment = message.fundingPayment;
    return obj;
  },
  fromAminoMsg(object: IndexerPerpetualPositionAminoMsg): IndexerPerpetualPosition {
    return IndexerPerpetualPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexerPerpetualPositionProtoMsg): IndexerPerpetualPosition {
    return IndexerPerpetualPosition.decode(message.value);
  },
  toProto(message: IndexerPerpetualPosition): Uint8Array {
    return IndexerPerpetualPosition.encode(message).finish();
  },
  toProtoMsg(message: IndexerPerpetualPosition): IndexerPerpetualPositionProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.protocol.v1.IndexerPerpetualPosition",
      value: IndexerPerpetualPosition.encode(message).finish()
    };
  }
};
function createBaseIndexerAssetPosition(): IndexerAssetPosition {
  return {
    assetId: 0,
    quantums: new Uint8Array(),
    index: BigInt(0)
  };
}
export const IndexerAssetPosition = {
  typeUrl: "/dydxprotocol.indexer.protocol.v1.IndexerAssetPosition",
  encode(message: IndexerAssetPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== 0) {
      writer.uint32(8).uint32(message.assetId);
    }
    if (message.quantums.length !== 0) {
      writer.uint32(18).bytes(message.quantums);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(24).uint64(message.index);
    }
    return writer;
  },
  fromJSON(object: any): IndexerAssetPosition {
    return {
      assetId: isSet(object.assetId) ? Number(object.assetId) : 0,
      quantums: isSet(object.quantums) ? bytesFromBase64(object.quantums) : new Uint8Array(),
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<IndexerAssetPosition>): IndexerAssetPosition {
    const message = createBaseIndexerAssetPosition();
    message.assetId = object.assetId ?? 0;
    message.quantums = object.quantums ?? new Uint8Array();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IndexerAssetPositionAmino): IndexerAssetPosition {
    return {
      assetId: object.asset_id,
      quantums: object.quantums,
      index: BigInt(object.index)
    };
  },
  toAmino(message: IndexerAssetPosition): IndexerAssetPositionAmino {
    const obj: any = {};
    obj.asset_id = message.assetId;
    obj.quantums = message.quantums;
    obj.index = message.index ? message.index.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IndexerAssetPositionAminoMsg): IndexerAssetPosition {
    return IndexerAssetPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexerAssetPositionProtoMsg): IndexerAssetPosition {
    return IndexerAssetPosition.decode(message.value);
  },
  toProto(message: IndexerAssetPosition): Uint8Array {
    return IndexerAssetPosition.encode(message).finish();
  },
  toProtoMsg(message: IndexerAssetPosition): IndexerAssetPositionProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.protocol.v1.IndexerAssetPosition",
      value: IndexerAssetPosition.encode(message).finish()
    };
  }
};