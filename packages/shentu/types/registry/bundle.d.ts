import * as _101 from "../burrow/registry";
export declare const registry: {
    NodeIdentity: {
        typeUrl: string;
        encode(message: _101.NodeIdentity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _101.NodeIdentity;
        fromPartial(object: Partial<_101.NodeIdentity>): _101.NodeIdentity;
        fromAmino(object: _101.NodeIdentityAmino): _101.NodeIdentity;
        toAmino(message: _101.NodeIdentity): _101.NodeIdentityAmino;
        fromAminoMsg(object: _101.NodeIdentityAminoMsg): _101.NodeIdentity;
        fromProtoMsg(message: _101.NodeIdentityProtoMsg): _101.NodeIdentity;
        toProto(message: _101.NodeIdentity): Uint8Array;
        toProtoMsg(message: _101.NodeIdentity): _101.NodeIdentityProtoMsg;
    };
};
