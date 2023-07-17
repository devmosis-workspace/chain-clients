import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** GenesisState of the ugov module. */
export interface GenesisState {
    minGasPrice?: DecCoin;
}
/** GenesisState of the ugov module. */
export interface GenesisStateSDKType {
    min_gas_price?: DecCoinSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
