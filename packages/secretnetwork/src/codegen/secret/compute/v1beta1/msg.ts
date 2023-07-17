import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgStoreCode {
  /** sender is the canonical address of the sender */
  sender: Uint8Array;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** Source is a valid absolute HTTPS URI to the contract's source code, optional */
  source: string;
  /** Builder is a valid docker image name with tag, optional */
  builder: string;
}
export interface MsgStoreCodeSDKType {
  sender: Uint8Array;
  wasm_byte_code: Uint8Array;
  source: string;
  builder: string;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
  code_id: Long;
}
export interface MsgInstantiateContract {
  /** sender is the canonical address of the sender */
  sender: Uint8Array;
  callbackCodeHash: string;
  codeId: Long;
  label: string;
  initMsg: Uint8Array;
  initFunds: Coin[];
  /** used internally for encryption, should always be empty in a signed transaction */
  callbackSig: Uint8Array;
}
export interface MsgInstantiateContractSDKType {
  sender: Uint8Array;
  callback_code_hash: string;
  code_id: Long;
  label: string;
  init_msg: Uint8Array;
  init_funds: CoinSDKType[];
  callback_sig: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseSDKType {
  address: string;
  data: Uint8Array;
}
export interface MsgExecuteContract {
  /** sender is the canonical address of the sender */
  sender: Uint8Array;
  /** contract is the canonical address of the contract */
  contract: Uint8Array;
  msg: Uint8Array;
  callbackCodeHash: string;
  sentFunds: Coin[];
  /** used internally for encryption, should always be empty in a signed transaction */
  callbackSig: Uint8Array;
}
export interface MsgExecuteContractSDKType {
  sender: Uint8Array;
  contract: Uint8Array;
  msg: Uint8Array;
  callback_code_hash: string;
  sent_funds: CoinSDKType[];
  callback_sig: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
  data: Uint8Array;
}
function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: new Uint8Array(),
    wasmByteCode: new Uint8Array(),
    source: "",
    builder: ""
  };
}
export const MsgStoreCode = {
  encode(message: MsgStoreCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(34).string(message.builder);
    }
    return writer;
  },
  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : ""
    };
  },
  fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? new Uint8Array();
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    return message;
  }
};
function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: Long.UZERO
  };
}
export const MsgStoreCodeResponse = {
  encode(message: MsgStoreCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  fromJSON(object: any): MsgStoreCodeResponse {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: new Uint8Array(),
    callbackCodeHash: "",
    codeId: Long.UZERO,
    label: "",
    initMsg: new Uint8Array(),
    initFunds: [],
    callbackSig: new Uint8Array()
  };
}
export const MsgInstantiateContract = {
  encode(message: MsgInstantiateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.callbackCodeHash !== "") {
      writer.uint32(18).string(message.callbackCodeHash);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(42).bytes(message.initMsg);
    }
    for (const v of message.initFunds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.callbackSig.length !== 0) {
      writer.uint32(58).bytes(message.callbackSig);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      callbackCodeHash: isSet(object.callbackCodeHash) ? String(object.callbackCodeHash) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(),
      initFunds: Array.isArray(object?.initFunds) ? object.initFunds.map((e: any) => Coin.fromJSON(e)) : [],
      callbackSig: isSet(object.callbackSig) ? bytesFromBase64(object.callbackSig) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgInstantiateContract>): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? new Uint8Array();
    message.callbackCodeHash = object.callbackCodeHash ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.initMsg = object.initMsg ?? new Uint8Array();
    message.initFunds = object.initFunds?.map(e => Coin.fromPartial(e)) || [];
    message.callbackSig = object.callbackSig ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContractResponse = {
  encode(message: MsgInstantiateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantiateContractResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: new Uint8Array(),
    contract: new Uint8Array(),
    msg: new Uint8Array(),
    callbackCodeHash: "",
    sentFunds: [],
    callbackSig: new Uint8Array()
  };
}
export const MsgExecuteContract = {
  encode(message: MsgExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.contract.length !== 0) {
      writer.uint32(18).bytes(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    if (message.callbackCodeHash !== "") {
      writer.uint32(34).string(message.callbackCodeHash);
    }
    for (const v of message.sentFunds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.callbackSig.length !== 0) {
      writer.uint32(50).bytes(message.callbackSig);
    }
    return writer;
  },
  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      contract: isSet(object.contract) ? bytesFromBase64(object.contract) : new Uint8Array(),
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      callbackCodeHash: isSet(object.callbackCodeHash) ? String(object.callbackCodeHash) : "",
      sentFunds: Array.isArray(object?.sentFunds) ? object.sentFunds.map((e: any) => Coin.fromJSON(e)) : [],
      callbackSig: isSet(object.callbackSig) ? bytesFromBase64(object.callbackSig) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? new Uint8Array();
    message.contract = object.contract ?? new Uint8Array();
    message.msg = object.msg ?? new Uint8Array();
    message.callbackCodeHash = object.callbackCodeHash ?? "";
    message.sentFunds = object.sentFunds?.map(e => Coin.fromPartial(e)) || [];
    message.callbackSig = object.callbackSig ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgExecuteContractResponse = {
  encode(message: MsgExecuteContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): MsgExecuteContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgExecuteContractResponse>): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};