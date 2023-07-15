import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    accounts: GenesisAcc[];
}
export interface GenesisStateSDKType {
    accounts: GenesisAccSDKType[];
}
export interface GenesisAcc {
    address: string;
    mintable: Coin[];
}
export interface GenesisAccSDKType {
    address: string;
    mintable: CoinSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const GenesisAcc: {
    encode(message: GenesisAcc, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisAcc;
    fromPartial(object: Partial<GenesisAcc>): GenesisAcc;
};
