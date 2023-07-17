import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPrice {
    /** authority must be the address of the governance account. */
    authority: string;
    minGasPrice?: DecCoin;
}
/** MsgGovUpdateMinGasPrice is a request type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceSDKType {
    authority: string;
    min_gas_price?: DecCoinSDKType;
}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponse {
}
/** MsgGovUpdateMinGasPriceResponse is a response type for the Msg/GovUpdateMinGasPrice. */
export interface MsgGovUpdateMinGasPriceResponseSDKType {
}
export declare const MsgGovUpdateMinGasPrice: {
    encode(message: MsgGovUpdateMinGasPrice, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgGovUpdateMinGasPrice;
    fromPartial(object: Partial<MsgGovUpdateMinGasPrice>): MsgGovUpdateMinGasPrice;
};
export declare const MsgGovUpdateMinGasPriceResponse: {
    encode(_: MsgGovUpdateMinGasPriceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgGovUpdateMinGasPriceResponse;
    fromPartial(_: Partial<MsgGovUpdateMinGasPriceResponse>): MsgGovUpdateMinGasPriceResponse;
};
