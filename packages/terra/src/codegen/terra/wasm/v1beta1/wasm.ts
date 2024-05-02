import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** CodeInfo is data for the uploaded contract WASM code */
export interface LegacyCodeInfo {
  /** CodeID is the sequentially increasing unique identifier */
  codeId: bigint;
  /** CodeHash is the unique identifier created by wasmvm */
  codeHash: Uint8Array;
  /** Creator address who initially stored the code */
  creator: string;
}
export interface LegacyCodeInfoProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.LegacyCodeInfo";
  value: Uint8Array;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface LegacyCodeInfoAmino {
  /** CodeID is the sequentially increasing unique identifier */
  code_id?: string;
  /** CodeHash is the unique identifier created by wasmvm */
  code_hash?: string;
  /** Creator address who initially stored the code */
  creator?: string;
}
export interface LegacyCodeInfoAminoMsg {
  type: "/terra.wasm.v1beta1.LegacyCodeInfo";
  value: LegacyCodeInfoAmino;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface LegacyCodeInfoSDKType {
  code_id: bigint;
  code_hash: Uint8Array;
  creator: string;
}
/** ContractInfo stores a WASM contract instance */
export interface LegacyContractInfo {
  /** Address is the address of the contract */
  address: string;
  /** Creator is the contract creator address */
  creator: string;
  /** Admin is who can execute the contract migration */
  admin: string;
  /** CodeID is the reference to the stored Wasm code */
  codeId: bigint;
  /** InitMsg is the raw message used when instantiating a contract */
  initMsg: Uint8Array;
}
export interface LegacyContractInfoProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.LegacyContractInfo";
  value: Uint8Array;
}
/** ContractInfo stores a WASM contract instance */
export interface LegacyContractInfoAmino {
  /** Address is the address of the contract */
  address?: string;
  /** Creator is the contract creator address */
  creator?: string;
  /** Admin is who can execute the contract migration */
  admin?: string;
  /** CodeID is the reference to the stored Wasm code */
  code_id?: string;
  /** InitMsg is the raw message used when instantiating a contract */
  init_msg?: string;
}
export interface LegacyContractInfoAminoMsg {
  type: "/terra.wasm.v1beta1.LegacyContractInfo";
  value: LegacyContractInfoAmino;
}
/** ContractInfo stores a WASM contract instance */
export interface LegacyContractInfoSDKType {
  address: string;
  creator: string;
  admin: string;
  code_id: bigint;
  init_msg: Uint8Array;
}
function createBaseLegacyCodeInfo(): LegacyCodeInfo {
  return {
    codeId: BigInt(0),
    codeHash: new Uint8Array(),
    creator: ""
  };
}
export const LegacyCodeInfo = {
  typeUrl: "/terra.wasm.v1beta1.LegacyCodeInfo",
  encode(message: LegacyCodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(18).bytes(message.codeHash);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },
  fromJSON(object: any): LegacyCodeInfo {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  fromPartial(object: Partial<LegacyCodeInfo>): LegacyCodeInfo {
    const message = createBaseLegacyCodeInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: LegacyCodeInfoAmino): LegacyCodeInfo {
    const message = createBaseLegacyCodeInfo();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.codeHash = bytesFromBase64(object.code_hash);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: LegacyCodeInfo): LegacyCodeInfoAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: LegacyCodeInfoAminoMsg): LegacyCodeInfo {
    return LegacyCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyCodeInfoProtoMsg): LegacyCodeInfo {
    return LegacyCodeInfo.decode(message.value);
  },
  toProto(message: LegacyCodeInfo): Uint8Array {
    return LegacyCodeInfo.encode(message).finish();
  },
  toProtoMsg(message: LegacyCodeInfo): LegacyCodeInfoProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.LegacyCodeInfo",
      value: LegacyCodeInfo.encode(message).finish()
    };
  }
};
function createBaseLegacyContractInfo(): LegacyContractInfo {
  return {
    address: "",
    creator: "",
    admin: "",
    codeId: BigInt(0),
    initMsg: new Uint8Array()
  };
}
export const LegacyContractInfo = {
  typeUrl: "/terra.wasm.v1beta1.LegacyContractInfo",
  encode(message: LegacyContractInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(32).uint64(message.codeId);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(42).bytes(message.initMsg);
    }
    return writer;
  },
  fromJSON(object: any): LegacyContractInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<LegacyContractInfo>): LegacyContractInfo {
    const message = createBaseLegacyContractInfo();
    message.address = object.address ?? "";
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.initMsg = object.initMsg ?? new Uint8Array();
    return message;
  },
  fromAmino(object: LegacyContractInfoAmino): LegacyContractInfo {
    const message = createBaseLegacyContractInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.init_msg !== undefined && object.init_msg !== null) {
      message.initMsg = bytesFromBase64(object.init_msg);
    }
    return message;
  },
  toAmino(message: LegacyContractInfo): LegacyContractInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    obj.init_msg = message.initMsg ? base64FromBytes(message.initMsg) : undefined;
    return obj;
  },
  fromAminoMsg(object: LegacyContractInfoAminoMsg): LegacyContractInfo {
    return LegacyContractInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyContractInfoProtoMsg): LegacyContractInfo {
    return LegacyContractInfo.decode(message.value);
  },
  toProto(message: LegacyContractInfo): Uint8Array {
    return LegacyContractInfo.encode(message).finish();
  },
  toProtoMsg(message: LegacyContractInfo): LegacyContractInfoProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.LegacyContractInfo",
      value: LegacyContractInfo.encode(message).finish()
    };
  }
};