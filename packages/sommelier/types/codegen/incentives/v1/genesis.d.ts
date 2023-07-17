import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
    params?: Params;
}
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
}
/** Params incentives parameters */
export interface Params {
    /** DistributionPerBlock defines the coin to be sent to the distribution module from the community pool every block */
    distributionPerBlock?: Coin;
    /**
     * IncentivesCutoffHeight defines the block height after which the incentives module will stop sending coins to the distribution module from
     * the community pool
     */
    incentivesCutoffHeight: Long;
}
/** Params incentives parameters */
export interface ParamsSDKType {
    distribution_per_block?: CoinSDKType;
    incentives_cutoff_height: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
