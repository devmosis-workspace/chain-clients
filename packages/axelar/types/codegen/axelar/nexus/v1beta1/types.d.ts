import { Bitmap, BitmapAmino, BitmapSDKType } from "../../utils/v1beta1/bitmap";
import { Chain, ChainAmino, ChainSDKType, Asset, AssetAmino, AssetSDKType, CrossChainAddress, CrossChainAddressAmino, CrossChainAddressSDKType, TransferDirection } from "../exported/v1beta1/types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
export interface MaintainerState {
    address: Uint8Array;
    missingVotes: Bitmap;
    incorrectVotes: Bitmap;
    chain: string;
}
export interface MaintainerStateProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.MaintainerState";
    value: Uint8Array;
}
export interface MaintainerStateAmino {
    address: Uint8Array;
    missing_votes?: BitmapAmino;
    incorrect_votes?: BitmapAmino;
    chain: string;
}
export interface MaintainerStateAminoMsg {
    type: "/axelar.nexus.v1beta1.MaintainerState";
    value: MaintainerStateAmino;
}
export interface MaintainerStateSDKType {
    address: Uint8Array;
    missing_votes: BitmapSDKType;
    incorrect_votes: BitmapSDKType;
    chain: string;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainState {
    chain: Chain;
    activated: boolean;
    assets: Asset[];
    /** @deprecated */
    maintainerStates: MaintainerState[];
}
export interface ChainStateProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ChainState";
    value: Uint8Array;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainStateAmino {
    chain?: ChainAmino;
    activated: boolean;
    assets: AssetAmino[];
    /** @deprecated */
    maintainer_states: MaintainerStateAmino[];
}
export interface ChainStateAminoMsg {
    type: "/axelar.nexus.v1beta1.ChainState";
    value: ChainStateAmino;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainStateSDKType {
    chain: ChainSDKType;
    activated: boolean;
    assets: AssetSDKType[];
    /** @deprecated */
    maintainer_states: MaintainerStateSDKType[];
}
export interface LinkedAddresses {
    depositAddress: CrossChainAddress;
    recipientAddress: CrossChainAddress;
}
export interface LinkedAddressesProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.LinkedAddresses";
    value: Uint8Array;
}
export interface LinkedAddressesAmino {
    deposit_address?: CrossChainAddressAmino;
    recipient_address?: CrossChainAddressAmino;
}
export interface LinkedAddressesAminoMsg {
    type: "/axelar.nexus.v1beta1.LinkedAddresses";
    value: LinkedAddressesAmino;
}
export interface LinkedAddressesSDKType {
    deposit_address: CrossChainAddressSDKType;
    recipient_address: CrossChainAddressSDKType;
}
export interface RateLimit {
    chain: string;
    limit: Coin;
    window: Duration;
}
export interface RateLimitProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.RateLimit";
    value: Uint8Array;
}
export interface RateLimitAmino {
    chain: string;
    limit?: CoinAmino;
    window?: DurationAmino;
}
export interface RateLimitAminoMsg {
    type: "/axelar.nexus.v1beta1.RateLimit";
    value: RateLimitAmino;
}
export interface RateLimitSDKType {
    chain: string;
    limit: CoinSDKType;
    window: DurationSDKType;
}
export interface TransferEpoch {
    chain: string;
    amount: Coin;
    epoch: bigint;
    /**
     * indicates whether the tracking is for transfers outgoing
     * to that chain or incoming from it
     */
    direction: TransferDirection;
}
export interface TransferEpochProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.TransferEpoch";
    value: Uint8Array;
}
export interface TransferEpochAmino {
    chain: string;
    amount?: CoinAmino;
    epoch: string;
    /**
     * indicates whether the tracking is for transfers outgoing
     * to that chain or incoming from it
     */
    direction: TransferDirection;
}
export interface TransferEpochAminoMsg {
    type: "/axelar.nexus.v1beta1.TransferEpoch";
    value: TransferEpochAmino;
}
export interface TransferEpochSDKType {
    chain: string;
    amount: CoinSDKType;
    epoch: bigint;
    direction: TransferDirection;
}
export declare const MaintainerState: {
    typeUrl: string;
    encode(message: MaintainerState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MaintainerState;
    fromPartial(object: Partial<MaintainerState>): MaintainerState;
    fromAmino(object: MaintainerStateAmino): MaintainerState;
    toAmino(message: MaintainerState): MaintainerStateAmino;
    fromAminoMsg(object: MaintainerStateAminoMsg): MaintainerState;
    fromProtoMsg(message: MaintainerStateProtoMsg): MaintainerState;
    toProto(message: MaintainerState): Uint8Array;
    toProtoMsg(message: MaintainerState): MaintainerStateProtoMsg;
};
export declare const ChainState: {
    typeUrl: string;
    encode(message: ChainState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainState;
    fromPartial(object: Partial<ChainState>): ChainState;
    fromAmino(object: ChainStateAmino): ChainState;
    toAmino(message: ChainState): ChainStateAmino;
    fromAminoMsg(object: ChainStateAminoMsg): ChainState;
    fromProtoMsg(message: ChainStateProtoMsg): ChainState;
    toProto(message: ChainState): Uint8Array;
    toProtoMsg(message: ChainState): ChainStateProtoMsg;
};
export declare const LinkedAddresses: {
    typeUrl: string;
    encode(message: LinkedAddresses, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LinkedAddresses;
    fromPartial(object: Partial<LinkedAddresses>): LinkedAddresses;
    fromAmino(object: LinkedAddressesAmino): LinkedAddresses;
    toAmino(message: LinkedAddresses): LinkedAddressesAmino;
    fromAminoMsg(object: LinkedAddressesAminoMsg): LinkedAddresses;
    fromProtoMsg(message: LinkedAddressesProtoMsg): LinkedAddresses;
    toProto(message: LinkedAddresses): Uint8Array;
    toProtoMsg(message: LinkedAddresses): LinkedAddressesProtoMsg;
};
export declare const RateLimit: {
    typeUrl: string;
    encode(message: RateLimit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RateLimit;
    fromPartial(object: Partial<RateLimit>): RateLimit;
    fromAmino(object: RateLimitAmino): RateLimit;
    toAmino(message: RateLimit): RateLimitAmino;
    fromAminoMsg(object: RateLimitAminoMsg): RateLimit;
    fromProtoMsg(message: RateLimitProtoMsg): RateLimit;
    toProto(message: RateLimit): Uint8Array;
    toProtoMsg(message: RateLimit): RateLimitProtoMsg;
};
export declare const TransferEpoch: {
    typeUrl: string;
    encode(message: TransferEpoch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransferEpoch;
    fromPartial(object: Partial<TransferEpoch>): TransferEpoch;
    fromAmino(object: TransferEpochAmino): TransferEpoch;
    toAmino(message: TransferEpoch): TransferEpochAmino;
    fromAminoMsg(object: TransferEpochAminoMsg): TransferEpoch;
    fromProtoMsg(message: TransferEpochProtoMsg): TransferEpoch;
    toProto(message: TransferEpoch): Uint8Array;
    toProtoMsg(message: TransferEpoch): TransferEpochProtoMsg;
};
