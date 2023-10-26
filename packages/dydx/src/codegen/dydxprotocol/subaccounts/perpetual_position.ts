import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
/**
 * PerpetualPositions are an account’s positions of a `Perpetual`.
 * Therefore they hold any information needed to trade perpetuals.
 */
export interface PerpetualPosition {
  /** The `Id` of the `Perpetual`. */
  perpetualId: number;
  /** The size of the position in base quantums. */
  quantums: Uint8Array;
  /**
   * The funding_index of the `Perpetual` the last time this position was
   * settled.
   */
  fundingIndex: Uint8Array;
}
export interface PerpetualPositionProtoMsg {
  typeUrl: "/dydxprotocol.subaccounts.PerpetualPosition";
  value: Uint8Array;
}
/**
 * PerpetualPositions are an account’s positions of a `Perpetual`.
 * Therefore they hold any information needed to trade perpetuals.
 */
export interface PerpetualPositionAmino {
  /** The `Id` of the `Perpetual`. */
  perpetual_id: number;
  /** The size of the position in base quantums. */
  quantums: Uint8Array;
  /**
   * The funding_index of the `Perpetual` the last time this position was
   * settled.
   */
  funding_index: Uint8Array;
}
export interface PerpetualPositionAminoMsg {
  type: "/dydxprotocol.subaccounts.PerpetualPosition";
  value: PerpetualPositionAmino;
}
/**
 * PerpetualPositions are an account’s positions of a `Perpetual`.
 * Therefore they hold any information needed to trade perpetuals.
 */
export interface PerpetualPositionSDKType {
  perpetual_id: number;
  quantums: Uint8Array;
  funding_index: Uint8Array;
}
function createBasePerpetualPosition(): PerpetualPosition {
  return {
    perpetualId: 0,
    quantums: new Uint8Array(),
    fundingIndex: new Uint8Array()
  };
}
export const PerpetualPosition = {
  typeUrl: "/dydxprotocol.subaccounts.PerpetualPosition",
  encode(message: PerpetualPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.perpetualId !== 0) {
      writer.uint32(8).uint32(message.perpetualId);
    }
    if (message.quantums.length !== 0) {
      writer.uint32(18).bytes(message.quantums);
    }
    if (message.fundingIndex.length !== 0) {
      writer.uint32(26).bytes(message.fundingIndex);
    }
    return writer;
  },
  fromJSON(object: any): PerpetualPosition {
    return {
      perpetualId: isSet(object.perpetualId) ? Number(object.perpetualId) : 0,
      quantums: isSet(object.quantums) ? bytesFromBase64(object.quantums) : new Uint8Array(),
      fundingIndex: isSet(object.fundingIndex) ? bytesFromBase64(object.fundingIndex) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<PerpetualPosition>): PerpetualPosition {
    const message = createBasePerpetualPosition();
    message.perpetualId = object.perpetualId ?? 0;
    message.quantums = object.quantums ?? new Uint8Array();
    message.fundingIndex = object.fundingIndex ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PerpetualPositionAmino): PerpetualPosition {
    return {
      perpetualId: object.perpetual_id,
      quantums: object.quantums,
      fundingIndex: object.funding_index
    };
  },
  toAmino(message: PerpetualPosition): PerpetualPositionAmino {
    const obj: any = {};
    obj.perpetual_id = message.perpetualId;
    obj.quantums = message.quantums;
    obj.funding_index = message.fundingIndex;
    return obj;
  },
  fromAminoMsg(object: PerpetualPositionAminoMsg): PerpetualPosition {
    return PerpetualPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualPositionProtoMsg): PerpetualPosition {
    return PerpetualPosition.decode(message.value);
  },
  toProto(message: PerpetualPosition): Uint8Array {
    return PerpetualPosition.encode(message).finish();
  },
  toProtoMsg(message: PerpetualPosition): PerpetualPositionProtoMsg {
    return {
      typeUrl: "/dydxprotocol.subaccounts.PerpetualPosition",
      value: PerpetualPosition.encode(message).finish()
    };
  }
};