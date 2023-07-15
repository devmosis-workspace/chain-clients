import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface EventContractExecution {
  contractAddress: string;
  response: Uint8Array;
  error: string;
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
  encode(message: EventContractExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};