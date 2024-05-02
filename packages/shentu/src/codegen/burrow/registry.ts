import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../helpers";
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
function createBaseNodeIdentity(): NodeIdentity {
  return {
    Moniker: "",
    NetworkAddress: "",
    TendermintNodeID: new Uint8Array(),
    ValidatorPublicKey: new Uint8Array()
  };
}
export const NodeIdentity = {
  typeUrl: "/registry.NodeIdentity",
  encode(message: NodeIdentity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Moniker !== "") {
      writer.uint32(10).string(message.Moniker);
    }
    if (message.NetworkAddress !== "") {
      writer.uint32(18).string(message.NetworkAddress);
    }
    if (message.TendermintNodeID.length !== 0) {
      writer.uint32(26).bytes(message.TendermintNodeID);
    }
    if (message.ValidatorPublicKey.length !== 0) {
      writer.uint32(34).bytes(message.ValidatorPublicKey);
    }
    return writer;
  },
  fromJSON(object: any): NodeIdentity {
    return {
      Moniker: isSet(object.Moniker) ? String(object.Moniker) : "",
      NetworkAddress: isSet(object.NetworkAddress) ? String(object.NetworkAddress) : "",
      TendermintNodeID: isSet(object.TendermintNodeID) ? bytesFromBase64(object.TendermintNodeID) : new Uint8Array(),
      ValidatorPublicKey: isSet(object.ValidatorPublicKey) ? bytesFromBase64(object.ValidatorPublicKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<NodeIdentity>): NodeIdentity {
    const message = createBaseNodeIdentity();
    message.Moniker = object.Moniker ?? "";
    message.NetworkAddress = object.NetworkAddress ?? "";
    message.TendermintNodeID = object.TendermintNodeID ?? new Uint8Array();
    message.ValidatorPublicKey = object.ValidatorPublicKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: NodeIdentityAmino): NodeIdentity {
    const message = createBaseNodeIdentity();
    if (object.Moniker !== undefined && object.Moniker !== null) {
      message.Moniker = object.Moniker;
    }
    if (object.NetworkAddress !== undefined && object.NetworkAddress !== null) {
      message.NetworkAddress = object.NetworkAddress;
    }
    if (object.TendermintNodeID !== undefined && object.TendermintNodeID !== null) {
      message.TendermintNodeID = bytesFromBase64(object.TendermintNodeID);
    }
    if (object.ValidatorPublicKey !== undefined && object.ValidatorPublicKey !== null) {
      message.ValidatorPublicKey = bytesFromBase64(object.ValidatorPublicKey);
    }
    return message;
  },
  toAmino(message: NodeIdentity): NodeIdentityAmino {
    const obj: any = {};
    obj.Moniker = message.Moniker === "" ? undefined : message.Moniker;
    obj.NetworkAddress = message.NetworkAddress === "" ? undefined : message.NetworkAddress;
    obj.TendermintNodeID = message.TendermintNodeID ? base64FromBytes(message.TendermintNodeID) : undefined;
    obj.ValidatorPublicKey = message.ValidatorPublicKey ? base64FromBytes(message.ValidatorPublicKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: NodeIdentityAminoMsg): NodeIdentity {
    return NodeIdentity.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeIdentityProtoMsg): NodeIdentity {
    return NodeIdentity.decode(message.value);
  },
  toProto(message: NodeIdentity): Uint8Array {
    return NodeIdentity.encode(message).finish();
  },
  toProtoMsg(message: NodeIdentity): NodeIdentityProtoMsg {
    return {
      typeUrl: "/registry.NodeIdentity",
      value: NodeIdentity.encode(message).finish()
    };
  }
};