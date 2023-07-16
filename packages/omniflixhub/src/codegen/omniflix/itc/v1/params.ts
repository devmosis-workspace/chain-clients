import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Params {
  maxCampaignDuration?: Duration;
  creationFee?: Coin;
}
export interface ParamsSDKType {
  max_campaign_duration?: DurationSDKType;
  creation_fee?: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    maxCampaignDuration: undefined,
    creationFee: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};