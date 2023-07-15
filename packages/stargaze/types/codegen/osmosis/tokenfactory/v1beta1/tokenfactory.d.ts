import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
    /** Can be empty for no admin, or a valid stargaze address */
    admin: string;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataSDKType {
    admin: string;
}
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
    /**
     * DenomCreationFee defines the fee to be charged on the creation of a new
     * denom. The fee is drawn from the MsgCreateDenom's sender account, and
     * transferred to the community pool.
     */
    denomCreationFee: Coin[];
    /**
     * DenomCreationGasConsume defines the gas cost for creating a new denom.
     * This is intended as a spam deterrence mechanism.
     *
     * See: https://github.com/CosmWasm/token-factory/issues/11
     */
    denomCreationGasConsume: Long;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
    denom_creation_fee: CoinSDKType[];
    denom_creation_gas_consume: Long;
}
export declare const DenomAuthorityMetadata: {
    encode(message: DenomAuthorityMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DenomAuthorityMetadata;
    fromPartial(object: Partial<DenomAuthorityMetadata>): DenomAuthorityMetadata;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
