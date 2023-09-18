import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export declare enum IBCTransfer_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_PENDING = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const IBCTransfer_StatusSDKType: typeof IBCTransfer_Status;
export declare const IBCTransfer_StatusAmino: typeof IBCTransfer_Status;
export declare function iBCTransfer_StatusFromJSON(object: any): IBCTransfer_Status;
export declare function iBCTransfer_StatusToJSON(object: IBCTransfer_Status): string;
export interface IBCTransfer {
    sender: Uint8Array;
    receiver: string;
    token: Coin;
    portId: string;
    channelId: string;
    /** @deprecated */
    sequence: bigint;
    id: bigint;
    status: IBCTransfer_Status;
}
export interface IBCTransferProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransfer";
    value: Uint8Array;
}
export interface IBCTransferAmino {
    sender: Uint8Array;
    receiver: string;
    token?: CoinAmino;
    port_id: string;
    channel_id: string;
    /** @deprecated */
    sequence: string;
    id: string;
    status: IBCTransfer_Status;
}
export interface IBCTransferAminoMsg {
    type: "/axelar.axelarnet.v1beta1.IBCTransfer";
    value: IBCTransferAmino;
}
export interface IBCTransferSDKType {
    sender: Uint8Array;
    receiver: string;
    token: CoinSDKType;
    port_id: string;
    channel_id: string;
    /** @deprecated */
    sequence: bigint;
    id: bigint;
    status: IBCTransfer_Status;
}
export interface CosmosChain {
    name: string;
    ibcPath: string;
    /** @deprecated */
    assets: Asset[];
    addrPrefix: string;
}
export interface CosmosChainProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.CosmosChain";
    value: Uint8Array;
}
export interface CosmosChainAmino {
    name: string;
    ibc_path: string;
    /** @deprecated */
    assets: AssetAmino[];
    addr_prefix: string;
}
export interface CosmosChainAminoMsg {
    type: "/axelar.axelarnet.v1beta1.CosmosChain";
    value: CosmosChainAmino;
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
export interface AssetProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.Asset";
    value: Uint8Array;
}
/** @deprecated */
export interface AssetAmino {
    denom: string;
    min_amount: Uint8Array;
}
export interface AssetAminoMsg {
    type: "/axelar.axelarnet.v1beta1.Asset";
    value: AssetAmino;
}
/** @deprecated */
export interface AssetSDKType {
    denom: string;
    min_amount: Uint8Array;
}
export interface Fee {
    amount: Coin;
    recipient: Uint8Array;
}
export interface FeeProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.Fee";
    value: Uint8Array;
}
export interface FeeAmino {
    amount?: CoinAmino;
    recipient: Uint8Array;
}
export interface FeeAminoMsg {
    type: "/axelar.axelarnet.v1beta1.Fee";
    value: FeeAmino;
}
export interface FeeSDKType {
    amount: CoinSDKType;
    recipient: Uint8Array;
}
export declare const IBCTransfer: {
    typeUrl: string;
    encode(message: IBCTransfer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IBCTransfer;
    fromPartial(object: Partial<IBCTransfer>): IBCTransfer;
    fromAmino(object: IBCTransferAmino): IBCTransfer;
    toAmino(message: IBCTransfer): IBCTransferAmino;
    fromAminoMsg(object: IBCTransferAminoMsg): IBCTransfer;
    fromProtoMsg(message: IBCTransferProtoMsg): IBCTransfer;
    toProto(message: IBCTransfer): Uint8Array;
    toProtoMsg(message: IBCTransfer): IBCTransferProtoMsg;
};
export declare const CosmosChain: {
    typeUrl: string;
    encode(message: CosmosChain, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CosmosChain;
    fromPartial(object: Partial<CosmosChain>): CosmosChain;
    fromAmino(object: CosmosChainAmino): CosmosChain;
    toAmino(message: CosmosChain): CosmosChainAmino;
    fromAminoMsg(object: CosmosChainAminoMsg): CosmosChain;
    fromProtoMsg(message: CosmosChainProtoMsg): CosmosChain;
    toProto(message: CosmosChain): Uint8Array;
    toProtoMsg(message: CosmosChain): CosmosChainProtoMsg;
};
export declare const Asset: {
    typeUrl: string;
    encode(message: Asset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Asset;
    fromPartial(object: Partial<Asset>): Asset;
    fromAmino(object: AssetAmino): Asset;
    toAmino(message: Asset): AssetAmino;
    fromAminoMsg(object: AssetAminoMsg): Asset;
    fromProtoMsg(message: AssetProtoMsg): Asset;
    toProto(message: Asset): Uint8Array;
    toProtoMsg(message: Asset): AssetProtoMsg;
};
export declare const Fee: {
    typeUrl: string;
    encode(message: Fee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Fee;
    fromPartial(object: Partial<Fee>): Fee;
    fromAmino(object: FeeAmino): Fee;
    toAmino(message: Fee): FeeAmino;
    fromAminoMsg(object: FeeAminoMsg): Fee;
    fromProtoMsg(message: FeeProtoMsg): Fee;
    toProto(message: Fee): Uint8Array;
    toProtoMsg(message: Fee): FeeProtoMsg;
};
