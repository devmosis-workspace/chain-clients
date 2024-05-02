import { BinaryWriter } from "../binary";
/**
 * NodeIdentity stores and establishes a binding between 4 different types of identifiers, a human readable name,
 * a advertised network address, a p2p station-to-station key, and a validator key. Updates must be signed
 * by the node key and the validator key to prove the update is consensual.
 */
export interface NodeIdentity {
    /** Peer moniker name */
    Moniker: string;
    /** Peer network address */
    NetworkAddress: string;
    /** The Tendermint p2p node ID */
    TendermintNodeID: Uint8Array;
    /**
     * The public key that this node will validate with if it becomes a validator
     * (use this to create a binding between p2p node ID and validator)
     */
    ValidatorPublicKey: Uint8Array;
}
export interface NodeIdentityProtoMsg {
    typeUrl: "/registry.NodeIdentity";
    value: Uint8Array;
}
/**
 * NodeIdentity stores and establishes a binding between 4 different types of identifiers, a human readable name,
 * a advertised network address, a p2p station-to-station key, and a validator key. Updates must be signed
 * by the node key and the validator key to prove the update is consensual.
 */
export interface NodeIdentityAmino {
    /** Peer moniker name */
    Moniker?: string;
    /** Peer network address */
    NetworkAddress?: string;
    /** The Tendermint p2p node ID */
    TendermintNodeID?: string;
    /**
     * The public key that this node will validate with if it becomes a validator
     * (use this to create a binding between p2p node ID and validator)
     */
    ValidatorPublicKey?: string;
}
export interface NodeIdentityAminoMsg {
    type: "/registry.NodeIdentity";
    value: NodeIdentityAmino;
}
/**
 * NodeIdentity stores and establishes a binding between 4 different types of identifiers, a human readable name,
 * a advertised network address, a p2p station-to-station key, and a validator key. Updates must be signed
 * by the node key and the validator key to prove the update is consensual.
 */
export interface NodeIdentitySDKType {
    Moniker: string;
    NetworkAddress: string;
    TendermintNodeID: Uint8Array;
    ValidatorPublicKey: Uint8Array;
}
export declare const NodeIdentity: {
    typeUrl: string;
    encode(message: NodeIdentity, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NodeIdentity;
    fromPartial(object: Partial<NodeIdentity>): NodeIdentity;
    fromAmino(object: NodeIdentityAmino): NodeIdentity;
    toAmino(message: NodeIdentity): NodeIdentityAmino;
    fromAminoMsg(object: NodeIdentityAminoMsg): NodeIdentity;
    fromProtoMsg(message: NodeIdentityProtoMsg): NodeIdentity;
    toProto(message: NodeIdentity): Uint8Array;
    toProtoMsg(message: NodeIdentity): NodeIdentityProtoMsg;
};
