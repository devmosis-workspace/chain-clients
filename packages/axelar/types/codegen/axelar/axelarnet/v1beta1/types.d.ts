import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum IBCTransfer_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_PENDING = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const IBCTransfer_StatusSDKType: typeof IBCTransfer_Status;
export declare function iBCTransfer_StatusFromJSON(object: any): IBCTransfer_Status;
export declare function iBCTransfer_StatusToJSON(object: IBCTransfer_Status): string;
export interface IBCTransfer {
    sender: Uint8Array;
    receiver: string;
    token?: Coin;
    portId: string;
    channelId: string;
    /** @deprecated */
    sequence: Long;
    id: Long;
    status: IBCTransfer_Status;
}
export interface IBCTransferSDKType {
    sender: Uint8Array;
    receiver: string;
    token?: CoinSDKType;
    port_id: string;
    channel_id: string;
    /** @deprecated */
    sequence: Long;
    id: Long;
    status: IBCTransfer_Status;
}
export interface CosmosChain {
    name: string;
    ibcPath: string;
    /** @deprecated */
    assets: Asset[];
    addrPrefix: string;
}
export interface CosmosChainSDKType {
    name: string;
    ibc_path: string;
    /** @deprecated */
    assets: AssetSDKType[];
    addr_prefix: string;
}
/** @deprecated */
export interface Asset {
    denom: string;
    minAmount: Uint8Array;
}
/** @deprecated */
export interface AssetSDKType {
    denom: string;
    min_amount: Uint8Array;
}
export interface Fee {
    amount?: Coin;
    recipient: Uint8Array;
}
export interface FeeSDKType {
    amount?: CoinSDKType;
    recipient: Uint8Array;
}
export declare const IBCTransfer: {
    encode(message: IBCTransfer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IBCTransfer;
    fromPartial(object: Partial<IBCTransfer>): IBCTransfer;
};
export declare const CosmosChain: {
    encode(message: CosmosChain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CosmosChain;
    fromPartial(object: Partial<CosmosChain>): CosmosChain;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Asset;
    fromPartial(object: Partial<Asset>): Asset;
};
export declare const Fee: {
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Fee;
    fromPartial(object: Partial<Fee>): Fee;
};
