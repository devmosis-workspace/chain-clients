import { AssetPosition, AssetPositionSDKType } from "./asset_position";
import { PerpetualPosition, PerpetualPositionSDKType } from "./perpetual_position";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** SubaccountId defines a unique identifier for a Subaccount. */
export interface SubaccountId {
  /** The address of the wallet that owns this subaccount. */
  owner: string;
  /**
   * < 128 Since 128 should be enough to start and it fits within
   * 1 Byte (1 Bit needed to indicate that the first byte is the last).
   */
  number: number;
}
export interface SubaccountIdProtoMsg {
  typeUrl: "/dydxprotocol.subaccounts.SubaccountId";
  value: Uint8Array;
}
/** SubaccountId defines a unique identifier for a Subaccount. */
export interface SubaccountIdSDKType {
  owner: string;
  number: number;
}
/**
 * Subaccount defines a single sub-account for a given address.
 * Subaccounts are uniquely indexed by a subaccountNumber/owner pair.
 */
export interface Subaccount {
  /** The Id of the Subaccount */
  id?: SubaccountId;
  /**
   * All `AssetPosition`s associated with this subaccount.
   * Always sorted ascending by `asset_id`.
   */
  assetPositions: AssetPosition[];
  /**
   * All `PerpetualPosition`s associated with this subaccount.
   * Always sorted ascending by `perpetual_id.
   */
  perpetualPositions: PerpetualPosition[];
  /**
   * Set by the owner. If true, then margin trades can be made in this
   * subaccount.
   */
  marginEnabled: boolean;
}
export interface SubaccountProtoMsg {
  typeUrl: "/dydxprotocol.subaccounts.Subaccount";
  value: Uint8Array;
}
/**
 * Subaccount defines a single sub-account for a given address.
 * Subaccounts are uniquely indexed by a subaccountNumber/owner pair.
 */
export interface SubaccountSDKType {
  id?: SubaccountIdSDKType;
  asset_positions: AssetPositionSDKType[];
  perpetual_positions: PerpetualPositionSDKType[];
  margin_enabled: boolean;
}
function createBaseSubaccountId(): SubaccountId {
  return {
    owner: "",
    number: 0
  };
}
export const SubaccountId = {
  typeUrl: "/dydxprotocol.subaccounts.SubaccountId",
  encode(message: SubaccountId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.number !== 0) {
      writer.uint32(16).uint32(message.number);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountId {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      number: isSet(object.number) ? Number(object.number) : 0
    };
  },
  fromPartial(object: Partial<SubaccountId>): SubaccountId {
    const message = createBaseSubaccountId();
    message.owner = object.owner ?? "";
    message.number = object.number ?? 0;
    return message;
  },
  fromAmino(object: SubaccountIdAmino): SubaccountId {
    const message = createBaseSubaccountId();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    return message;
  },
  toAmino(message: SubaccountId): SubaccountIdAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.number = message.number;
    return obj;
  },
  fromAminoMsg(object: SubaccountIdAminoMsg): SubaccountId {
    return SubaccountId.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountIdProtoMsg): SubaccountId {
    return SubaccountId.decode(message.value);
  },
  toProto(message: SubaccountId): Uint8Array {
    return SubaccountId.encode(message).finish();
  },
  toProtoMsg(message: SubaccountId): SubaccountIdProtoMsg {
    return {
      typeUrl: "/dydxprotocol.subaccounts.SubaccountId",
      value: SubaccountId.encode(message).finish()
    };
  }
};
function createBaseSubaccount(): Subaccount {
  return {
    id: undefined,
    assetPositions: [],
    perpetualPositions: [],
    marginEnabled: false
  };
}
export const Subaccount = {
  typeUrl: "/dydxprotocol.subaccounts.Subaccount",
  encode(message: Subaccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      SubaccountId.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.assetPositions) {
      AssetPosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.perpetualPositions) {
      PerpetualPosition.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.marginEnabled === true) {
      writer.uint32(32).bool(message.marginEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Subaccount {
    return {
      id: isSet(object.id) ? SubaccountId.fromJSON(object.id) : undefined,
      assetPositions: Array.isArray(object?.assetPositions) ? object.assetPositions.map((e: any) => AssetPosition.fromJSON(e)) : [],
      perpetualPositions: Array.isArray(object?.perpetualPositions) ? object.perpetualPositions.map((e: any) => PerpetualPosition.fromJSON(e)) : [],
      marginEnabled: isSet(object.marginEnabled) ? Boolean(object.marginEnabled) : false
    };
  },
  fromPartial(object: Partial<Subaccount>): Subaccount {
    const message = createBaseSubaccount();
    message.id = object.id !== undefined && object.id !== null ? SubaccountId.fromPartial(object.id) : undefined;
    message.assetPositions = object.assetPositions?.map(e => AssetPosition.fromPartial(e)) || [];
    message.perpetualPositions = object.perpetualPositions?.map(e => PerpetualPosition.fromPartial(e)) || [];
    message.marginEnabled = object.marginEnabled ?? false;
    return message;
  },
  fromAmino(object: SubaccountAmino): Subaccount {
    const message = createBaseSubaccount();
    if (object.id !== undefined && object.id !== null) {
      message.id = SubaccountId.fromAmino(object.id);
    }
    message.assetPositions = object.asset_positions?.map(e => AssetPosition.fromAmino(e)) || [];
    message.perpetualPositions = object.perpetual_positions?.map(e => PerpetualPosition.fromAmino(e)) || [];
    if (object.margin_enabled !== undefined && object.margin_enabled !== null) {
      message.marginEnabled = object.margin_enabled;
    }
    return message;
  },
  toAmino(message: Subaccount): SubaccountAmino {
    const obj: any = {};
    obj.id = message.id ? SubaccountId.toAmino(message.id) : undefined;
    if (message.assetPositions) {
      obj.asset_positions = message.assetPositions.map(e => e ? AssetPosition.toAmino(e) : undefined);
    } else {
      obj.asset_positions = [];
    }
    if (message.perpetualPositions) {
      obj.perpetual_positions = message.perpetualPositions.map(e => e ? PerpetualPosition.toAmino(e) : undefined);
    } else {
      obj.perpetual_positions = [];
    }
    obj.margin_enabled = message.marginEnabled;
    return obj;
  },
  fromAminoMsg(object: SubaccountAminoMsg): Subaccount {
    return Subaccount.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountProtoMsg): Subaccount {
    return Subaccount.decode(message.value);
  },
  toProto(message: Subaccount): Uint8Array {
    return Subaccount.encode(message).finish();
  },
  toProtoMsg(message: Subaccount): SubaccountProtoMsg {
    return {
      typeUrl: "/dydxprotocol.subaccounts.Subaccount",
      value: Subaccount.encode(message).finish()
    };
  }
};