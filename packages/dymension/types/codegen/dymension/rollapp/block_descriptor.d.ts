import { BinaryWriter } from "../../binary";
/** BlockDescriptor defines a single rollapp chain block description. */
export interface BlockDescriptor {
    /** height is the height of the block */
    height: bigint;
    /** stateRoot is a 32 byte array of the hash of the block (state root of the block) */
    stateRoot: Uint8Array;
    /**
     * intermediateStatesRoot is a 32 byte array representing
     * the root of a Merkle tree built from the ISRs of the block (Intermediate State Roots)
     */
    intermediateStatesRoot: Uint8Array;
}
export interface BlockDescriptorProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptor";
    value: Uint8Array;
}
/** BlockDescriptor defines a single rollapp chain block description. */
export interface BlockDescriptorAmino {
    /** height is the height of the block */
    height?: string;
    /** stateRoot is a 32 byte array of the hash of the block (state root of the block) */
    stateRoot?: string;
    /**
     * intermediateStatesRoot is a 32 byte array representing
     * the root of a Merkle tree built from the ISRs of the block (Intermediate State Roots)
     */
    intermediateStatesRoot?: string;
}
export interface BlockDescriptorAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.BlockDescriptor";
    value: BlockDescriptorAmino;
}
/** BlockDescriptor defines a single rollapp chain block description. */
export interface BlockDescriptorSDKType {
    height: bigint;
    stateRoot: Uint8Array;
    intermediateStatesRoot: Uint8Array;
}
/** BlockDescriptors defines list of BlockDescriptor. */
export interface BlockDescriptors {
    BD: BlockDescriptor[];
}
export interface BlockDescriptorsProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptors";
    value: Uint8Array;
}
/** BlockDescriptors defines list of BlockDescriptor. */
export interface BlockDescriptorsAmino {
    BD?: BlockDescriptorAmino[];
}
export interface BlockDescriptorsAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.BlockDescriptors";
    value: BlockDescriptorsAmino;
}
/** BlockDescriptors defines list of BlockDescriptor. */
export interface BlockDescriptorsSDKType {
    BD: BlockDescriptorSDKType[];
}
export declare const BlockDescriptor: {
    typeUrl: string;
    encode(message: BlockDescriptor, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlockDescriptor;
    fromPartial(object: Partial<BlockDescriptor>): BlockDescriptor;
    fromAmino(object: BlockDescriptorAmino): BlockDescriptor;
    toAmino(message: BlockDescriptor): BlockDescriptorAmino;
    fromAminoMsg(object: BlockDescriptorAminoMsg): BlockDescriptor;
    fromProtoMsg(message: BlockDescriptorProtoMsg): BlockDescriptor;
    toProto(message: BlockDescriptor): Uint8Array;
    toProtoMsg(message: BlockDescriptor): BlockDescriptorProtoMsg;
};
export declare const BlockDescriptors: {
    typeUrl: string;
    encode(message: BlockDescriptors, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlockDescriptors;
    fromPartial(object: Partial<BlockDescriptors>): BlockDescriptors;
    fromAmino(object: BlockDescriptorsAmino): BlockDescriptors;
    toAmino(message: BlockDescriptors): BlockDescriptorsAmino;
    fromAminoMsg(object: BlockDescriptorsAminoMsg): BlockDescriptors;
    fromProtoMsg(message: BlockDescriptorsProtoMsg): BlockDescriptors;
    toProto(message: BlockDescriptors): Uint8Array;
    toProtoMsg(message: BlockDescriptors): BlockDescriptorsProtoMsg;
};
