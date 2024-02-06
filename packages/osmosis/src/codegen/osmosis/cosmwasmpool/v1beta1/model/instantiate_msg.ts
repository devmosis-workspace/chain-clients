import { BinaryWriter } from "../../../../binary";
/** ===================== InstantiateMsg */
export interface InstantiateMsg {
  /**
   * pool_asset_denoms is the list of asset denoms that are initialized
   * at pool creation time.
   */
  poolAssetDenoms: string[];
}
export interface InstantiateMsgProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.InstantiateMsg";
  value: Uint8Array;
}
/** ===================== InstantiateMsg */
export interface InstantiateMsgAmino {
  /**
   * pool_asset_denoms is the list of asset denoms that are initialized
   * at pool creation time.
   */
  pool_asset_denoms?: string[];
}
export interface InstantiateMsgAminoMsg {
  type: "osmosis/cosmwasmpool/instantiate-msg";
  value: InstantiateMsgAmino;
}
/** ===================== InstantiateMsg */
export interface InstantiateMsgSDKType {
  pool_asset_denoms: string[];
}
function createBaseInstantiateMsg(): InstantiateMsg {
  return {
    poolAssetDenoms: []
  };
}
export const InstantiateMsg = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.InstantiateMsg",
  encode(message: InstantiateMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolAssetDenoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): InstantiateMsg {
    return {
      poolAssetDenoms: Array.isArray(object?.poolAssetDenoms) ? object.poolAssetDenoms.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<InstantiateMsg>): InstantiateMsg {
    const message = createBaseInstantiateMsg();
    message.poolAssetDenoms = object.poolAssetDenoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: InstantiateMsgAmino): InstantiateMsg {
    const message = createBaseInstantiateMsg();
    message.poolAssetDenoms = object.pool_asset_denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: InstantiateMsg): InstantiateMsgAmino {
    const obj: any = {};
    if (message.poolAssetDenoms) {
      obj.pool_asset_denoms = message.poolAssetDenoms.map(e => e);
    } else {
      obj.pool_asset_denoms = [];
    }
    return obj;
  },
  fromAminoMsg(object: InstantiateMsgAminoMsg): InstantiateMsg {
    return InstantiateMsg.fromAmino(object.value);
  },
  toAminoMsg(message: InstantiateMsg): InstantiateMsgAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/instantiate-msg",
      value: InstantiateMsg.toAmino(message)
    };
  },
  fromProtoMsg(message: InstantiateMsgProtoMsg): InstantiateMsg {
    return InstantiateMsg.decode(message.value);
  },
  toProto(message: InstantiateMsg): Uint8Array {
    return InstantiateMsg.encode(message).finish();
  },
  toProtoMsg(message: InstantiateMsg): InstantiateMsgProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.InstantiateMsg",
      value: InstantiateMsg.encode(message).finish()
    };
  }
};