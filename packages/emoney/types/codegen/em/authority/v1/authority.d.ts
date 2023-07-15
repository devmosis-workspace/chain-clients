import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface Authority {
    address: string;
    formerAddress: string;
    lastModified?: Timestamp;
}
export interface AuthoritySDKType {
    address: string;
    former_address: string;
    last_modified?: TimestampSDKType;
}
export interface GasPrices {
    minimum: DecCoin[];
}
export interface GasPricesSDKType {
    minimum: DecCoinSDKType[];
}
export declare const Authority: {
    encode(message: Authority, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Authority;
    fromPartial(object: Partial<Authority>): Authority;
};
export declare const GasPrices: {
    encode(message: GasPrices, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GasPrices;
    fromPartial(object: Partial<GasPrices>): GasPrices;
};
