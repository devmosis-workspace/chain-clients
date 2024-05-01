import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ZoneDrop, ZoneDropAmino, ZoneDropSDKType, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./airdrop";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisState {
  params: Params;
  zoneDrops: ZoneDrop[];
  claimRecords: ClaimRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  zone_drops?: ZoneDropAmino[];
  claim_records?: ClaimRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/quicksilver.airdrop.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  zone_drops: ZoneDropSDKType[];
  claim_records: ClaimRecordSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    zoneDrops: [],
    claimRecords: []
  };
}
export const GenesisState = {
  typeUrl: "/quicksilver.airdrop.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.zoneDrops) {
      ZoneDrop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.claimRecords) {
      ClaimRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      zoneDrops: Array.isArray(object?.zoneDrops) ? object.zoneDrops.map((e: any) => ZoneDrop.fromJSON(e)) : [],
      claimRecords: Array.isArray(object?.claimRecords) ? object.claimRecords.map((e: any) => ClaimRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.zoneDrops = object.zoneDrops?.map(e => ZoneDrop.fromPartial(e)) || [];
    message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.zoneDrops = object.zone_drops?.map(e => ZoneDrop.fromAmino(e)) || [];
    message.claimRecords = object.claim_records?.map(e => ClaimRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.zoneDrops) {
      obj.zone_drops = message.zoneDrops.map(e => e ? ZoneDrop.toAmino(e) : undefined);
    } else {
      obj.zone_drops = [];
    }
    if (message.claimRecords) {
      obj.claim_records = message.claimRecords.map(e => e ? ClaimRecord.toAmino(e) : undefined);
    } else {
      obj.claim_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};