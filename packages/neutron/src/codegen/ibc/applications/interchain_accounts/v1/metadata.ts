import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface Metadata {
  /** version defines the ICS27 protocol version */
  version: string;
  /** controller_connection_id is the connection identifier associated with the controller chain */
  controllerConnectionId: string;
  /** host_connection_id is the connection identifier associated with the host chain */
  hostConnectionId: string;
  /**
   * address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step
   * NOTE: the address field is empty on the OnChanOpenInit handshake step
   */
  address: string;
  /** encoding defines the supported codec format */
  encoding: string;
  /** tx_type defines the type of transactions the interchain account can execute */
  txType: string;
}
export interface MetadataProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.v1.Metadata";
  value: Uint8Array;
}
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface MetadataAmino {
  /** version defines the ICS27 protocol version */
  version: string;
  /** controller_connection_id is the connection identifier associated with the controller chain */
  controller_connection_id: string;
  /** host_connection_id is the connection identifier associated with the host chain */
  host_connection_id: string;
  /**
   * address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step
   * NOTE: the address field is empty on the OnChanOpenInit handshake step
   */
  address: string;
  /** encoding defines the supported codec format */
  encoding: string;
  /** tx_type defines the type of transactions the interchain account can execute */
  tx_type: string;
}
export interface MetadataAminoMsg {
  type: "cosmos-sdk/Metadata";
  value: MetadataAmino;
}
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface MetadataSDKType {
  version: string;
  controller_connection_id: string;
  host_connection_id: string;
  address: string;
  encoding: string;
  tx_type: string;
}
function createBaseMetadata(): Metadata {
  return {
    version: "",
    controllerConnectionId: "",
    hostConnectionId: "",
    address: "",
    encoding: "",
    txType: ""
  };
}
export const Metadata = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.controllerConnectionId !== "") {
      writer.uint32(18).string(message.controllerConnectionId);
    }
    if (message.hostConnectionId !== "") {
      writer.uint32(26).string(message.hostConnectionId);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.encoding !== "") {
      writer.uint32(42).string(message.encoding);
    }
    if (message.txType !== "") {
      writer.uint32(50).string(message.txType);
    }
    return writer;
  },
  fromJSON(object: any): Metadata {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      controllerConnectionId: isSet(object.controllerConnectionId) ? String(object.controllerConnectionId) : "",
      hostConnectionId: isSet(object.hostConnectionId) ? String(object.hostConnectionId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : "",
      txType: isSet(object.txType) ? String(object.txType) : ""
    };
  },
  fromPartial(object: Partial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.version = object.version ?? "";
    message.controllerConnectionId = object.controllerConnectionId ?? "";
    message.hostConnectionId = object.hostConnectionId ?? "";
    message.address = object.address ?? "";
    message.encoding = object.encoding ?? "";
    message.txType = object.txType ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    return {
      version: object.version,
      controllerConnectionId: object.controller_connection_id,
      hostConnectionId: object.host_connection_id,
      address: object.address,
      encoding: object.encoding,
      txType: object.tx_type
    };
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.version = message.version;
    obj.controller_connection_id = message.controllerConnectionId;
    obj.host_connection_id = message.hostConnectionId;
    obj.address = message.address;
    obj.encoding = message.encoding;
    obj.tx_type = message.txType;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message: Metadata): MetadataAminoMsg {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};