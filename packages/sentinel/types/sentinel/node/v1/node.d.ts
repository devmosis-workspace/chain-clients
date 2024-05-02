import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Status } from "../../types/v1/status";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Node {
    address: string;
    provider: string;
    price: Coin[];
    remoteUrl: string;
    status: Status;
    statusAt: Timestamp;
}
export interface NodeProtoMsg {
    typeUrl: "/sentinel.node.v1.Node";
    value: Uint8Array;
}
export interface NodeAmino {
    address?: string;
    provider?: string;
    price?: CoinAmino[];
    remote_url?: string;
    status?: Status;
    status_at?: string;
}
export interface NodeAminoMsg {
    type: "/sentinel.node.v1.Node";
    value: NodeAmino;
}
export interface NodeSDKType {
    address: string;
    provider: string;
    price: CoinSDKType[];
    remote_url: string;
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
