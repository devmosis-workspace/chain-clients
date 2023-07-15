import * as _m0 from "protobufjs/minimal";
import { isSet, isObject } from "../../../helpers";
export interface PendingIBCTransferCountRequest {}
export interface PendingIBCTransferCountRequestSDKType {}
export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
  key: string;
  value: number;
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntrySDKType {
  key: string;
  value: number;
}
export interface PendingIBCTransferCountResponse {
  transfersByChain: {
    [key: string]: number;
  };
}
export interface PendingIBCTransferCountResponseSDKType {
  transfers_by_chain: {
    [key: string]: number;
  };
}
function createBasePendingIBCTransferCountRequest(): PendingIBCTransferCountRequest {
  return {};
}
export const PendingIBCTransferCountRequest = {
  encode(_: PendingIBCTransferCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): PendingIBCTransferCountRequest {
    return {};
  },
  fromPartial(_: Partial<PendingIBCTransferCountRequest>): PendingIBCTransferCountRequest {
    const message = createBasePendingIBCTransferCountRequest();
    return message;
  }
};
function createBasePendingIBCTransferCountResponse_TransfersByChainEntry(): PendingIBCTransferCountResponse_TransfersByChainEntry {
  return {
    key: "",
    value: 0
  };
}
export const PendingIBCTransferCountResponse_TransfersByChainEntry = {
  encode(message: PendingIBCTransferCountResponse_TransfersByChainEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },
  fromJSON(object: any): PendingIBCTransferCountResponse_TransfersByChainEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  fromPartial(object: Partial<PendingIBCTransferCountResponse_TransfersByChainEntry>): PendingIBCTransferCountResponse_TransfersByChainEntry {
    const message = createBasePendingIBCTransferCountResponse_TransfersByChainEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  }
};
function createBasePendingIBCTransferCountResponse(): PendingIBCTransferCountResponse {
  return {
    transfersByChain: {}
  };
}
export const PendingIBCTransferCountResponse = {
  encode(message: PendingIBCTransferCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.transfersByChain).forEach(([key, value]) => {
      PendingIBCTransferCountResponse_TransfersByChainEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(8).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): PendingIBCTransferCountResponse {
    return {
      transfersByChain: isObject(object.transfersByChain) ? Object.entries(object.transfersByChain).reduce<{
        [key: string]: number;
      }>((acc, [key, value]) => {
        acc[key] = Number(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<PendingIBCTransferCountResponse>): PendingIBCTransferCountResponse {
    const message = createBasePendingIBCTransferCountResponse();
    message.transfersByChain = Object.entries(object.transfersByChain ?? {}).reduce<{
      [key: string]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    return message;
  }
};