import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface TrackedVolume {
  amount: Coin[];
}
export interface TrackedVolumeProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TrackedVolume";
  value: Uint8Array;
}
export interface TrackedVolumeAmino {
  amount?: CoinAmino[];
}
export interface TrackedVolumeAminoMsg {
  type: "osmosis/poolmanager/tracked-volume";
  value: TrackedVolumeAmino;
}
export interface TrackedVolumeSDKType {
  amount: CoinSDKType[];
}
function createBaseTrackedVolume(): TrackedVolume {
  return {
    amount: []
  };
}
export const TrackedVolume = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TrackedVolume",
  encode(message: TrackedVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TrackedVolume {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TrackedVolume>): TrackedVolume {
    const message = createBaseTrackedVolume();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TrackedVolumeAmino): TrackedVolume {
    const message = createBaseTrackedVolume();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TrackedVolume): TrackedVolumeAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: TrackedVolumeAminoMsg): TrackedVolume {
    return TrackedVolume.fromAmino(object.value);
  },
  toAminoMsg(message: TrackedVolume): TrackedVolumeAminoMsg {
    return {
      type: "osmosis/poolmanager/tracked-volume",
      value: TrackedVolume.toAmino(message)
    };
  },
  fromProtoMsg(message: TrackedVolumeProtoMsg): TrackedVolume {
    return TrackedVolume.decode(message.value);
  },
  toProto(message: TrackedVolume): Uint8Array {
    return TrackedVolume.encode(message).finish();
  },
  toProtoMsg(message: TrackedVolume): TrackedVolumeProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TrackedVolume",
      value: TrackedVolume.encode(message).finish()
    };
  }
};