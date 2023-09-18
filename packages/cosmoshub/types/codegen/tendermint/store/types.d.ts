import { BinaryWriter } from "../../binary";
export interface BlockStoreState {
    base: bigint;
    height: bigint;
}
export interface BlockStoreStateProtoMsg {
    typeUrl: "/tendermint.store.BlockStoreState";
    value: Uint8Array;
}
export interface BlockStoreStateAmino {
    base: string;
    height: string;
}
export interface BlockStoreStateAminoMsg {
    type: "/tendermint.store.BlockStoreState";
    value: BlockStoreStateAmino;
}
export interface BlockStoreStateSDKType {
    base: bigint;
    height: bigint;
}
export declare const BlockStoreState: {
    typeUrl: string;
    encode(message: BlockStoreState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlockStoreState;
    fromPartial(object: Partial<BlockStoreState>): BlockStoreState;
    fromAmino(object: BlockStoreStateAmino): BlockStoreState;
    toAmino(message: BlockStoreState): BlockStoreStateAmino;
    fromAminoMsg(object: BlockStoreStateAminoMsg): BlockStoreState;
    fromProtoMsg(message: BlockStoreStateProtoMsg): BlockStoreState;
    toProto(message: BlockStoreState): Uint8Array;
    toProtoMsg(message: BlockStoreState): BlockStoreStateProtoMsg;
};
