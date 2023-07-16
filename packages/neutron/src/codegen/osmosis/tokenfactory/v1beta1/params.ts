import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params holds parameters for the tokenfactory module */
export interface Params {
  /** DenomCreationFee is the fee required to create a new denom using the tokenfactory module */
  denomCreationFee: Coin[];
  /** FeeCollectorAddress is the address where fees collected from denom creation are sent to */
  feeCollectorAddress: string;
}
/** Params holds parameters for the tokenfactory module */
export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType[];
  fee_collector_address: string;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    feeCollectorAddress: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeCollectorAddress !== "") {
      writer.uint32(18).string(message.feeCollectorAddress);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      denomCreationFee: Array.isArray(object?.denomCreationFee) ? object.denomCreationFee.map((e: any) => Coin.fromJSON(e)) : [],
      feeCollectorAddress: isSet(object.feeCollectorAddress) ? String(object.feeCollectorAddress) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.feeCollectorAddress = object.feeCollectorAddress ?? "";
    return message;
  }
};