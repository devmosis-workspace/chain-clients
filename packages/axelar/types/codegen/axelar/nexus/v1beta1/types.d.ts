import { Bitmap, BitmapSDKType } from "../../utils/v1beta1/bitmap";
import { Chain, ChainSDKType, Asset, AssetSDKType, CrossChainAddress, CrossChainAddressSDKType, TransferDirection } from "../exported/v1beta1/types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MaintainerState {
    address: Uint8Array;
    missingVotes?: Bitmap;
    incorrectVotes?: Bitmap;
    chain: string;
}
export interface MaintainerStateSDKType {
    address: Uint8Array;
    missing_votes?: BitmapSDKType;
    incorrect_votes?: BitmapSDKType;
    chain: string;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainState {
    chain?: Chain;
    activated: boolean;
    assets: Asset[];
    /** @deprecated */
    maintainerStates: MaintainerState[];
}
/** ChainState represents the state of a registered blockchain */
export interface ChainStateSDKType {
    chain?: ChainSDKType;
    activated: boolean;
    assets: AssetSDKType[];
    /** @deprecated */
    maintainer_states: MaintainerStateSDKType[];
}
export interface LinkedAddresses {
    depositAddress?: CrossChainAddress;
    recipientAddress?: CrossChainAddress;
}
export interface LinkedAddressesSDKType {
    deposit_address?: CrossChainAddressSDKType;
    recipient_address?: CrossChainAddressSDKType;
}
export interface RateLimit {
    chain: string;
    limit?: Coin;
    window?: Duration;
}
export interface RateLimitSDKType {
    chain: string;
    limit?: CoinSDKType;
    window?: DurationSDKType;
}
export interface TransferEpoch {
    chain: string;
    amount?: Coin;
    epoch: Long;
    /**
     * indicates whether the tracking is for transfers outgoing
     * to that chain or incoming from it
     */
    direction: TransferDirection;
}
export interface TransferEpochSDKType {
    chain: string;
    amount?: CoinSDKType;
    epoch: Long;
    direction: TransferDirection;
}
export declare const MaintainerState: {
    encode(message: MaintainerState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MaintainerState;
    fromPartial(object: Partial<MaintainerState>): MaintainerState;
};
export declare const ChainState: {
    encode(message: ChainState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainState;
    fromPartial(object: Partial<ChainState>): ChainState;
};
export declare const LinkedAddresses: {
    encode(message: LinkedAddresses, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LinkedAddresses;
    fromPartial(object: Partial<LinkedAddresses>): LinkedAddresses;
};
export declare const RateLimit: {
    encode(message: RateLimit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RateLimit;
    fromPartial(object: Partial<RateLimit>): RateLimit;
};
export declare const TransferEpoch: {
    encode(message: TransferEpoch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransferEpoch;
    fromPartial(object: Partial<TransferEpoch>): TransferEpoch;
};
