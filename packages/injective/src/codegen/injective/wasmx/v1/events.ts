import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface EventContractExecution {
  contractAddress: string;
  response: Uint8Array;
  error: string;
}
export interface EventContractExecutionProtoMsg {
  typeUrl: "/injective.wasmx.v1.EventContractExecution";
  value: Uint8Array;
}
export interface EventContractExecutionAmino {
  contract_address: string;
  response: Uint8Array;
  error: string;
}
export interface EventContractExecutionAminoMsg {
  type: "/injective.wasmx.v1.EventContractExecution";
  value: EventContractExecutionAmino;
}
export interface EventContractExecutionSDKType {
  contract_address: string;
  response: Uint8Array;
  error: string;
}
function createBaseEventContractExecution(): EventContractExecution {
  return {
    contractAddress: "",
    response: new Uint8Array(),
    error: ""
  };
}
export const EventContractExecution = {
  typeUrl: "/injective.wasmx.v1.EventContractExecution",
  encode(message: EventContractExecution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.response.length !== 0) {
      writer.uint32(18).bytes(message.response);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },
  fromJSON(object: any): EventContractExecution {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      response: isSet(object.response) ? bytesFromBase64(object.response) : new Uint8Array(),
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  fromPartial(object: Partial<EventContractExecution>): EventContractExecution {
    const message = createBaseEventContractExecution();
    message.contractAddress = object.contractAddress ?? "";
    message.response = object.response ?? new Uint8Array();
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventContractExecutionAmino): EventContractExecution {
    return {
      contractAddress: object.contract_address,
      response: object.response,
      error: object.error
    };
  },
  toAmino(message: EventContractExecution): EventContractExecutionAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.response = message.response;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: EventContractExecutionAminoMsg): EventContractExecution {
    return EventContractExecution.fromAmino(object.value);
  },
  fromProtoMsg(message: EventContractExecutionProtoMsg): EventContractExecution {
    return EventContractExecution.decode(message.value);
  },
  toProto(message: EventContractExecution): Uint8Array {
    return EventContractExecution.encode(message).finish();
  },
  toProtoMsg(message: EventContractExecution): EventContractExecutionProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.EventContractExecution",
      value: EventContractExecution.encode(message).finish()
    };
  }
};