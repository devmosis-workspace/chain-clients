import { ContractMeta, ContractMetaAmino, ContractMetaSDKType } from "../../../burrow/payload";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface MsgCall {
  caller: string;
  callee: string;
  value: bigint;
  data: Uint8Array;
}
export interface MsgCallProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.MsgCall";
  value: Uint8Array;
}
export interface MsgCallAmino {
  caller?: string;
  callee?: string;
  value?: string;
  data?: string;
}
export interface MsgCallAminoMsg {
  type: "/shentu.cvm.v1alpha1.MsgCall";
  value: MsgCallAmino;
}
export interface MsgCallSDKType {
  caller: string;
  callee: string;
  value: bigint;
  data: Uint8Array;
}
export interface MsgCallResponse {
  result: Uint8Array;
}
export interface MsgCallResponseProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.MsgCallResponse";
  value: Uint8Array;
}
export interface MsgCallResponseAmino {
  result?: string;
}
export interface MsgCallResponseAminoMsg {
  type: "/shentu.cvm.v1alpha1.MsgCallResponse";
  value: MsgCallResponseAmino;
}
export interface MsgCallResponseSDKType {
  result: Uint8Array;
}
export interface MsgDeploy {
  /** Caller is the sender of the CVM-message. */
  caller: string;
  /** Value is the amount of CTK transferred with the call. */
  value: bigint;
  /** Code is the contract byte code. */
  code: Uint8Array;
  /** Abi is the Solidity ABI bytes for the contract code. */
  abi: string;
  /** Meta is the metadata for the contract. */
  meta: ContractMeta[];
  /** is_eWASM is true if the code is EWASM code. */
  isEWASM: boolean;
  /** is_runtime is true if the code is runtime code. */
  isRuntime: boolean;
}
export interface MsgDeployProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.MsgDeploy";
  value: Uint8Array;
}
export interface MsgDeployAmino {
  /** Caller is the sender of the CVM-message. */
  caller?: string;
  /** Value is the amount of CTK transferred with the call. */
  value?: string;
  /** Code is the contract byte code. */
  code?: string;
  /** Abi is the Solidity ABI bytes for the contract code. */
  abi?: string;
  /** Meta is the metadata for the contract. */
  meta?: ContractMetaAmino[];
  /** is_eWASM is true if the code is EWASM code. */
  is_eWASM?: boolean;
  /** is_runtime is true if the code is runtime code. */
  is_runtime?: boolean;
}
export interface MsgDeployAminoMsg {
  type: "/shentu.cvm.v1alpha1.MsgDeploy";
  value: MsgDeployAmino;
}
export interface MsgDeploySDKType {
  caller: string;
  value: bigint;
  code: Uint8Array;
  abi: string;
  meta: ContractMetaSDKType[];
  is_eWASM: boolean;
  is_runtime: boolean;
}
export interface MsgDeployResponse {
  result: Uint8Array;
}
export interface MsgDeployResponseProtoMsg {
  typeUrl: "/shentu.cvm.v1alpha1.MsgDeployResponse";
  value: Uint8Array;
}
export interface MsgDeployResponseAmino {
  result?: string;
}
export interface MsgDeployResponseAminoMsg {
  type: "/shentu.cvm.v1alpha1.MsgDeployResponse";
  value: MsgDeployResponseAmino;
}
export interface MsgDeployResponseSDKType {
  result: Uint8Array;
}
function createBaseMsgCall(): MsgCall {
  return {
    caller: "",
    callee: "",
    value: BigInt(0),
    data: new Uint8Array()
  };
}
export const MsgCall = {
  typeUrl: "/shentu.cvm.v1alpha1.MsgCall",
  encode(message: MsgCall, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller);
    }
    if (message.callee !== "") {
      writer.uint32(18).string(message.callee);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(24).uint64(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): MsgCall {
    return {
      caller: isSet(object.caller) ? String(object.caller) : "",
      callee: isSet(object.callee) ? String(object.callee) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgCall>): MsgCall {
    const message = createBaseMsgCall();
    message.caller = object.caller ?? "";
    message.callee = object.callee ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCallAmino): MsgCall {
    const message = createBaseMsgCall();
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    }
    if (object.callee !== undefined && object.callee !== null) {
      message.callee = object.callee;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgCall): MsgCallAmino {
    const obj: any = {};
    obj.caller = message.caller === "" ? undefined : message.caller;
    obj.callee = message.callee === "" ? undefined : message.callee;
    obj.value = message.value !== BigInt(0) ? message.value.toString() : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCallAminoMsg): MsgCall {
    return MsgCall.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCallProtoMsg): MsgCall {
    return MsgCall.decode(message.value);
  },
  toProto(message: MsgCall): Uint8Array {
    return MsgCall.encode(message).finish();
  },
  toProtoMsg(message: MsgCall): MsgCallProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.MsgCall",
      value: MsgCall.encode(message).finish()
    };
  }
};
function createBaseMsgCallResponse(): MsgCallResponse {
  return {
    result: new Uint8Array()
  };
}
export const MsgCallResponse = {
  typeUrl: "/shentu.cvm.v1alpha1.MsgCallResponse",
  encode(message: MsgCallResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result.length !== 0) {
      writer.uint32(10).bytes(message.result);
    }
    return writer;
  },
  fromJSON(object: any): MsgCallResponse {
    return {
      result: isSet(object.result) ? bytesFromBase64(object.result) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgCallResponse>): MsgCallResponse {
    const message = createBaseMsgCallResponse();
    message.result = object.result ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCallResponseAmino): MsgCallResponse {
    const message = createBaseMsgCallResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    return message;
  },
  toAmino(message: MsgCallResponse): MsgCallResponseAmino {
    const obj: any = {};
    obj.result = message.result ? base64FromBytes(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCallResponseAminoMsg): MsgCallResponse {
    return MsgCallResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCallResponseProtoMsg): MsgCallResponse {
    return MsgCallResponse.decode(message.value);
  },
  toProto(message: MsgCallResponse): Uint8Array {
    return MsgCallResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCallResponse): MsgCallResponseProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.MsgCallResponse",
      value: MsgCallResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeploy(): MsgDeploy {
  return {
    caller: "",
    value: BigInt(0),
    code: new Uint8Array(),
    abi: "",
    meta: [],
    isEWASM: false,
    isRuntime: false
  };
}
export const MsgDeploy = {
  typeUrl: "/shentu.cvm.v1alpha1.MsgDeploy",
  encode(message: MsgDeploy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    if (message.code.length !== 0) {
      writer.uint32(26).bytes(message.code);
    }
    if (message.abi !== "") {
      writer.uint32(34).string(message.abi);
    }
    for (const v of message.meta) {
      ContractMeta.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.isEWASM === true) {
      writer.uint32(48).bool(message.isEWASM);
    }
    if (message.isRuntime === true) {
      writer.uint32(56).bool(message.isRuntime);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeploy {
    return {
      caller: isSet(object.caller) ? String(object.caller) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0),
      code: isSet(object.code) ? bytesFromBase64(object.code) : new Uint8Array(),
      abi: isSet(object.abi) ? String(object.abi) : "",
      meta: Array.isArray(object?.meta) ? object.meta.map((e: any) => ContractMeta.fromJSON(e)) : [],
      isEWASM: isSet(object.isEWASM) ? Boolean(object.isEWASM) : false,
      isRuntime: isSet(object.isRuntime) ? Boolean(object.isRuntime) : false
    };
  },
  fromPartial(object: Partial<MsgDeploy>): MsgDeploy {
    const message = createBaseMsgDeploy();
    message.caller = object.caller ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    message.code = object.code ?? new Uint8Array();
    message.abi = object.abi ?? "";
    message.meta = object.meta?.map(e => ContractMeta.fromPartial(e)) || [];
    message.isEWASM = object.isEWASM ?? false;
    message.isRuntime = object.isRuntime ?? false;
    return message;
  },
  fromAmino(object: MsgDeployAmino): MsgDeploy {
    const message = createBaseMsgDeploy();
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    if (object.abi !== undefined && object.abi !== null) {
      message.abi = object.abi;
    }
    message.meta = object.meta?.map(e => ContractMeta.fromAmino(e)) || [];
    if (object.is_eWASM !== undefined && object.is_eWASM !== null) {
      message.isEWASM = object.is_eWASM;
    }
    if (object.is_runtime !== undefined && object.is_runtime !== null) {
      message.isRuntime = object.is_runtime;
    }
    return message;
  },
  toAmino(message: MsgDeploy): MsgDeployAmino {
    const obj: any = {};
    obj.caller = message.caller === "" ? undefined : message.caller;
    obj.value = message.value !== BigInt(0) ? message.value.toString() : undefined;
    obj.code = message.code ? base64FromBytes(message.code) : undefined;
    obj.abi = message.abi === "" ? undefined : message.abi;
    if (message.meta) {
      obj.meta = message.meta.map(e => e ? ContractMeta.toAmino(e) : undefined);
    } else {
      obj.meta = message.meta;
    }
    obj.is_eWASM = message.isEWASM === false ? undefined : message.isEWASM;
    obj.is_runtime = message.isRuntime === false ? undefined : message.isRuntime;
    return obj;
  },
  fromAminoMsg(object: MsgDeployAminoMsg): MsgDeploy {
    return MsgDeploy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeployProtoMsg): MsgDeploy {
    return MsgDeploy.decode(message.value);
  },
  toProto(message: MsgDeploy): Uint8Array {
    return MsgDeploy.encode(message).finish();
  },
  toProtoMsg(message: MsgDeploy): MsgDeployProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.MsgDeploy",
      value: MsgDeploy.encode(message).finish()
    };
  }
};
function createBaseMsgDeployResponse(): MsgDeployResponse {
  return {
    result: new Uint8Array()
  };
}
export const MsgDeployResponse = {
  typeUrl: "/shentu.cvm.v1alpha1.MsgDeployResponse",
  encode(message: MsgDeployResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result.length !== 0) {
      writer.uint32(10).bytes(message.result);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeployResponse {
    return {
      result: isSet(object.result) ? bytesFromBase64(object.result) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgDeployResponse>): MsgDeployResponse {
    const message = createBaseMsgDeployResponse();
    message.result = object.result ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgDeployResponseAmino): MsgDeployResponse {
    const message = createBaseMsgDeployResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    return message;
  },
  toAmino(message: MsgDeployResponse): MsgDeployResponseAmino {
    const obj: any = {};
    obj.result = message.result ? base64FromBytes(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeployResponseAminoMsg): MsgDeployResponse {
    return MsgDeployResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeployResponseProtoMsg): MsgDeployResponse {
    return MsgDeployResponse.decode(message.value);
  },
  toProto(message: MsgDeployResponse): Uint8Array {
    return MsgDeployResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeployResponse): MsgDeployResponseProtoMsg {
    return {
      typeUrl: "/shentu.cvm.v1alpha1.MsgDeployResponse",
      value: MsgDeployResponse.encode(message).finish()
    };
  }
};