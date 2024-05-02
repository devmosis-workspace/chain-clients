import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
export interface Node {
    address: string;
    gigabytePrices: Coin[];
    hourlyPrices: Coin[];
    remoteUrl: string;
    inactiveAt: Timestamp;
    status: Status;
    statusAt: Timestamp;
}
export interface NodeProtoMsg {
    typeUrl: "/sentinel.node.v2.Node";
    value: Uint8Array;
}
export interface NodeAmino {
    address?: string;
    gigabyte_prices?: CoinAmino[];
    hourly_prices?: CoinAmino[];
    remote_url?: string;
    inactive_at?: string;
    status?: Status;
    status_at?: string;
}
export interface NodeAminoMsg {
    type: "/sentinel.node.v2.Node";
    value: NodeAmino;
}
export interface NodeSDKType {
    address: string;
    gigabyte_prices: CoinSDKType[];
    hourly_prices: CoinSDKType[];
    remote_url: string;
    inactive_at: TimestampSDKType;
    status: Status;
    status_at: TimestampSDKType;
}
export declare const Node: {
    typeUrl: string;
    encode(message: Node, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Node;
    fromPartial(object: Partial<Node>): Node;
    fromAmino(object: NodeAmino): Node;
    toAmino(message: Node): NodeAmino;
    fromAminoMsg(object: NodeAminoMsg): Node;
    fromProtoMsg(message: NodeProtoMsg): Node;
    toProto(message: Node): Uint8Array;
    toProtoMsg(message: Node): NodeProtoMsg;
};
