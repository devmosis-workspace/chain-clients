import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 * Note that Failure means that sudo handler to cosmwasm contract failed for some reason
 */
export interface Failure {
  /** Address of the failed contract */
  address: string;
  /** Id of the failure under specific address */
  id: bigint;
  /** Serialized MessageSudoCallback with Packet and Ack(if exists) */
  sudoPayload: Uint8Array;
  /** Redacted error response of the sudo call. Full error is emitted as an event */
  error: string;
}
export interface FailureProtoMsg {
  typeUrl: "/neutron.contractmanager.Failure";
  value: Uint8Array;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 * Note that Failure means that sudo handler to cosmwasm contract failed for some reason
 */
export interface FailureAmino {
  /** Address of the failed contract */
  address?: string;
  /** Id of the failure under specific address */
  id?: string;
  /** Serialized MessageSudoCallback with Packet and Ack(if exists) */
  sudo_payload?: string;
  /** Redacted error response of the sudo call. Full error is emitted as an event */
  error?: string;
}
export interface FailureAminoMsg {
  type: "/neutron.contractmanager.Failure";
  value: FailureAmino;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 * Note that Failure means that sudo handler to cosmwasm contract failed for some reason
 */
export interface FailureSDKType {
  address: string;
  id: bigint;
  sudo_payload: Uint8Array;
  error: string;
}
function createBaseFailure(): Failure {
  return {
    address: "",
    id: BigInt(0),
    sudoPayload: new Uint8Array(),
    error: ""
  };
}
export const Failure = {
  typeUrl: "/neutron.contractmanager.Failure",
  encode(message: Failure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.sudoPayload.length !== 0) {
      writer.uint32(26).bytes(message.sudoPayload);
    }
    if (message.error !== "") {
      writer.uint32(34).string(message.error);
    }
    return writer;
  },
  fromJSON(object: any): Failure {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      sudoPayload: isSet(object.sudoPayload) ? bytesFromBase64(object.sudoPayload) : new Uint8Array(),
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  fromPartial(object: Partial<Failure>): Failure {
    const message = createBaseFailure();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.sudoPayload = object.sudoPayload ?? new Uint8Array();
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: FailureAmino): Failure {
    const message = createBaseFailure();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.sudo_payload !== undefined && object.sudo_payload !== null) {
      message.sudoPayload = bytesFromBase64(object.sudo_payload);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: Failure): FailureAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.sudo_payload = message.sudoPayload ? base64FromBytes(message.sudoPayload) : undefined;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: FailureAminoMsg): Failure {
    return Failure.fromAmino(object.value);
  },
  fromProtoMsg(message: FailureProtoMsg): Failure {
    return Failure.decode(message.value);
  },
  toProto(message: Failure): Uint8Array {
    return Failure.encode(message).finish();
  },
  toProtoMsg(message: Failure): FailureProtoMsg {
    return {
      typeUrl: "/neutron.contractmanager.Failure",
      value: Failure.encode(message).finish()
    };
  }
};