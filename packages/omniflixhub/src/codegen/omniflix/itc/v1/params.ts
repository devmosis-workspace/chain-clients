import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Params {
  maxCampaignDuration: Duration;
  creationFee: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  max_campaign_duration?: DurationAmino;
  creation_fee?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.itc.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  max_campaign_duration: DurationSDKType;
  creation_fee: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    maxCampaignDuration: Duration.fromPartial({}),
    creationFee: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/OmniFlix.itc.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxCampaignDuration !== undefined) {
      Duration.encode(message.maxCampaignDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      maxCampaignDuration: isSet(object.maxCampaignDuration) ? Duration.fromJSON(object.maxCampaignDuration) : undefined,
      creationFee: isSet(object.creationFee) ? Coin.fromJSON(object.creationFee) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxCampaignDuration = object.maxCampaignDuration !== undefined && object.maxCampaignDuration !== null ? Duration.fromPartial(object.maxCampaignDuration) : undefined;
    message.creationFee = object.creationFee !== undefined && object.creationFee !== null ? Coin.fromPartial(object.creationFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      maxCampaignDuration: object?.max_campaign_duration ? Duration.fromAmino(object.max_campaign_duration) : undefined,
      creationFee: object?.creation_fee ? Coin.fromAmino(object.creation_fee) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_campaign_duration = message.maxCampaignDuration ? Duration.toAmino(message.maxCampaignDuration) : undefined;
    obj.creation_fee = message.creationFee ? Coin.toAmino(message.creationFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};