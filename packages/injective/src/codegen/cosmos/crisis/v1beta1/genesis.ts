import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisState {
  /**
   * constant_fee is the fee used to verify the invariant in the crisis
   * module.
   */
  constantFee?: Coin;
}
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisStateSDKType {
  constant_fee?: CoinSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    constantFee: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.constantFee !== undefined) {
      Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      constantFee: isSet(object.constantFee) ? Coin.fromJSON(object.constantFee) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.constantFee = object.constantFee !== undefined && object.constantFee !== null ? Coin.fromPartial(object.constantFee) : undefined;
    return message;
  }
};