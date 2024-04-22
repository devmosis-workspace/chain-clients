import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** This describes how the endpoint is implemented when the lease is deployed */
export enum Endpoint_Kind {
  /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
  SHARED_HTTP = 0,
  /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
  RANDOM_PORT = 1,
  /** LEASED_IP - Describes an endpoint that becomes a leased IP */
  LEASED_IP = 2,
  UNRECOGNIZED = -1,
}
export const Endpoint_KindSDKType = Endpoint_Kind;
export const Endpoint_KindAmino = Endpoint_Kind;
export function endpoint_KindFromJSON(object: any): Endpoint_Kind {
  switch (object) {
    case 0:
    case "SHARED_HTTP":
      return Endpoint_Kind.SHARED_HTTP;
    case 1:
    case "RANDOM_PORT":
      return Endpoint_Kind.RANDOM_PORT;
    case 2:
    case "LEASED_IP":
      return Endpoint_Kind.LEASED_IP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Endpoint_Kind.UNRECOGNIZED;
  }
}
export function endpoint_KindToJSON(object: Endpoint_Kind): string {
  switch (object) {
    case Endpoint_Kind.SHARED_HTTP:
      return "SHARED_HTTP";
    case Endpoint_Kind.RANDOM_PORT:
      return "RANDOM_PORT";
    case Endpoint_Kind.LEASED_IP:
      return "LEASED_IP";
    case Endpoint_Kind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Endpoint describes a publicly accessible IP service */
export interface Endpoint {
  kind: Endpoint_Kind;
  sequenceNumber: number;
}
export interface EndpointProtoMsg {
  typeUrl: "/akash.base.v1beta3.Endpoint";
  value: Uint8Array;
}
/** Endpoint describes a publicly accessible IP service */
export interface EndpointAmino {
  kind?: Endpoint_Kind;
  sequence_number?: number;
}
export interface EndpointAminoMsg {
  type: "/akash.base.v1beta3.Endpoint";
  value: EndpointAmino;
}
/** Endpoint describes a publicly accessible IP service */
export interface EndpointSDKType {
  kind: Endpoint_Kind;
  sequence_number: number;
}
function createBaseEndpoint(): Endpoint {
  return {
    kind: 0,
    sequenceNumber: 0
  };
}
export const Endpoint = {
  typeUrl: "/akash.base.v1beta3.Endpoint",
  encode(message: Endpoint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(16).uint32(message.sequenceNumber);
    }
    return writer;
  },
  fromJSON(object: any): Endpoint {
    return {
      kind: isSet(object.kind) ? endpoint_KindFromJSON(object.kind) : -1,
      sequenceNumber: isSet(object.sequenceNumber) ? Number(object.sequenceNumber) : 0
    };
  },
  fromPartial(object: Partial<Endpoint>): Endpoint {
    const message = createBaseEndpoint();
    message.kind = object.kind ?? 0;
    message.sequenceNumber = object.sequenceNumber ?? 0;
    return message;
  },
  fromAmino(object: EndpointAmino): Endpoint {
    const message = createBaseEndpoint();
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = endpoint_KindFromJSON(object.kind);
    }
    if (object.sequence_number !== undefined && object.sequence_number !== null) {
      message.sequenceNumber = object.sequence_number;
    }
    return message;
  },
  toAmino(message: Endpoint): EndpointAmino {
    const obj: any = {};
    obj.kind = message.kind;
    obj.sequence_number = message.sequenceNumber;
    return obj;
  },
  fromAminoMsg(object: EndpointAminoMsg): Endpoint {
    return Endpoint.fromAmino(object.value);
  },
  fromProtoMsg(message: EndpointProtoMsg): Endpoint {
    return Endpoint.decode(message.value);
  },
  toProto(message: Endpoint): Uint8Array {
    return Endpoint.encode(message).finish();
  },
  toProtoMsg(message: Endpoint): EndpointProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta3.Endpoint",
      value: Endpoint.encode(message).finish()
    };
  }
};