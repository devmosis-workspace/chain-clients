import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
/**
 * MsgStoreCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgStoreCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
}
export interface MsgStoreCodeProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgStoreCode";
  value: Uint8Array;
}
/**
 * MsgStoreCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgStoreCodeAmino {
  /** Sender is the that actor that signed the messages */
  sender?: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code?: string;
}
export interface MsgStoreCodeAminoMsg {
  type: "/terra.wasm.v1beta1.MsgStoreCode";
  value: MsgStoreCodeAmino;
}
/**
 * MsgStoreCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgStoreCodeSDKType {
  sender: string;
  wasm_byte_code: Uint8Array;
}
/** MsgStoreCodeResponse defines the Msg/StoreCode response type. */
export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
}
export interface MsgStoreCodeResponseProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgStoreCodeResponse";
  value: Uint8Array;
}
/** MsgStoreCodeResponse defines the Msg/StoreCode response type. */
export interface MsgStoreCodeResponseAmino {
  /** CodeID is the reference to the stored WASM code */
  code_id?: string;
}
export interface MsgStoreCodeResponseAminoMsg {
  type: "/terra.wasm.v1beta1.MsgStoreCodeResponse";
  value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse defines the Msg/StoreCode response type. */
export interface MsgStoreCodeResponseSDKType {
  code_id: bigint;
}
/**
 * MsgMigrateCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgMigrateCode {
  /** CodeID is the migration target code id */
  codeId: bigint;
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
}
export interface MsgMigrateCodeProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgMigrateCode";
  value: Uint8Array;
}
/**
 * MsgMigrateCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgMigrateCodeAmino {
  /** CodeID is the migration target code id */
  code_id?: string;
  /** Sender is the that actor that signed the messages */
  sender?: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code?: string;
}
export interface MsgMigrateCodeAminoMsg {
  type: "/terra.wasm.v1beta1.MsgMigrateCode";
  value: MsgMigrateCodeAmino;
}
/**
 * MsgMigrateCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgMigrateCodeSDKType {
  code_id: bigint;
  sender: string;
  wasm_byte_code: Uint8Array;
}
/** MsgMigrateCodeResponse defines the Msg/MigrateCode response type. */
export interface MsgMigrateCodeResponse {}
export interface MsgMigrateCodeResponseProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgMigrateCodeResponse";
  value: Uint8Array;
}
/** MsgMigrateCodeResponse defines the Msg/MigrateCode response type. */
export interface MsgMigrateCodeResponseAmino {}
export interface MsgMigrateCodeResponseAminoMsg {
  type: "/terra.wasm.v1beta1.MsgMigrateCodeResponse";
  value: MsgMigrateCodeResponseAmino;
}
/** MsgMigrateCodeResponse defines the Msg/MigrateCode response type. */
export interface MsgMigrateCodeResponseSDKType {}
/**
 * MsgInstantiateContract represents a message to create
 * a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
  /** Sender is an sender address */
  sender: string;
  /** Admin is an optional admin address who can migrate the contract */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** InitMsg json encoded message to be passed to the contract on instantiation */
  initMsg: Uint8Array;
  /** InitCoins that are transferred to the contract on execution */
  initCoins: Coin[];
}
export interface MsgInstantiateContractProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContract";
  value: Uint8Array;
}
/**
 * MsgInstantiateContract represents a message to create
 * a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractAmino {
  /** Sender is an sender address */
  sender?: string;
  /** Admin is an optional admin address who can migrate the contract */
  admin?: string;
  /** CodeID is the reference to the stored WASM code */
  code_id?: string;
  /** InitMsg json encoded message to be passed to the contract on instantiation */
  init_msg?: string;
  /** InitCoins that are transferred to the contract on execution */
  init_coins?: CoinAmino[];
}
export interface MsgInstantiateContractAminoMsg {
  type: "/terra.wasm.v1beta1.MsgInstantiateContract";
  value: MsgInstantiateContractAmino;
}
/**
 * MsgInstantiateContract represents a message to create
 * a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractSDKType {
  sender: string;
  admin: string;
  code_id: bigint;
  init_msg: Uint8Array;
  init_coins: CoinSDKType[];
}
/** MsgInstantiateContractResponse defines the Msg/InstantiateContract response type. */
export interface MsgInstantiateContractResponse {
  /** ContractAddress is the bech32 address of the new contract instance. */
  contractAddress: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgInstantiateContractResponseProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContractResponse";
  value: Uint8Array;
}
/** MsgInstantiateContractResponse defines the Msg/InstantiateContract response type. */
export interface MsgInstantiateContractResponseAmino {
  /** ContractAddress is the bech32 address of the new contract instance. */
  contract_address?: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data?: string;
}
export interface MsgInstantiateContractResponseAminoMsg {
  type: "/terra.wasm.v1beta1.MsgInstantiateContractResponse";
  value: MsgInstantiateContractResponseAmino;
}
/** MsgInstantiateContractResponse defines the Msg/InstantiateContract response type. */
export interface MsgInstantiateContractResponseSDKType {
  contract_address: string;
  data: Uint8Array;
}
/**
 * MsgExecuteContract represents a message to
 * submits the given message data to a smart contract.
 */
export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** ExecuteMsg json encoded message to be passed to the contract */
  executeMsg: Uint8Array;
  /** Coins that are transferred to the contract on execution */
  coins: Coin[];
}
export interface MsgExecuteContractProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgExecuteContract";
  value: Uint8Array;
}
/**
 * MsgExecuteContract represents a message to
 * submits the given message data to a smart contract.
 */
export interface MsgExecuteContractAmino {
  /** Sender is the that actor that signed the messages */
  sender?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
  /** ExecuteMsg json encoded message to be passed to the contract */
  execute_msg?: string;
  /** Coins that are transferred to the contract on execution */
  coins?: CoinAmino[];
}
export interface MsgExecuteContractAminoMsg {
  type: "/terra.wasm.v1beta1.MsgExecuteContract";
  value: MsgExecuteContractAmino;
}
/**
 * MsgExecuteContract represents a message to
 * submits the given message data to a smart contract.
 */
export interface MsgExecuteContractSDKType {
  sender: string;
  contract: string;
  execute_msg: Uint8Array;
  coins: CoinSDKType[];
}
/** MsgExecuteContractResponse defines the Msg/ExecuteContract response type. */
export interface MsgExecuteContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractResponseProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgExecuteContractResponse";
  value: Uint8Array;
}
/** MsgExecuteContractResponse defines the Msg/ExecuteContract response type. */
export interface MsgExecuteContractResponseAmino {
  /** Data contains base64-encoded bytes to returned from the contract */
  data?: string;
}
export interface MsgExecuteContractResponseAminoMsg {
  type: "/terra.wasm.v1beta1.MsgExecuteContractResponse";
  value: MsgExecuteContractResponseAmino;
}
/** MsgExecuteContractResponse defines the Msg/ExecuteContract response type. */
export interface MsgExecuteContractResponseSDKType {
  data: Uint8Array;
}
/**
 * MsgMigrateContract represents a message to
 * runs a code upgrade/ downgrade for a smart contract
 */
export interface MsgMigrateContract {
  /** Admin is the current contract admin */
  admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** NewCodeID references the new WASM code */
  newCodeId: bigint;
  /** MigrateMsg is json encoded message to be passed to the contract on migration */
  migrateMsg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgMigrateContract";
  value: Uint8Array;
}
/**
 * MsgMigrateContract represents a message to
 * runs a code upgrade/ downgrade for a smart contract
 */
export interface MsgMigrateContractAmino {
  /** Admin is the current contract admin */
  admin?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
  /** NewCodeID references the new WASM code */
  new_code_id?: string;
  /** MigrateMsg is json encoded message to be passed to the contract on migration */
  migrate_msg?: string;
}
export interface MsgMigrateContractAminoMsg {
  type: "/terra.wasm.v1beta1.MsgMigrateContract";
  value: MsgMigrateContractAmino;
}
/**
 * MsgMigrateContract represents a message to
 * runs a code upgrade/ downgrade for a smart contract
 */
export interface MsgMigrateContractSDKType {
  admin: string;
  contract: string;
  new_code_id: bigint;
  migrate_msg: Uint8Array;
}
/** MsgMigrateContractResponse defines the Msg/MigrateContract response type. */
export interface MsgMigrateContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgMigrateContractResponseProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgMigrateContractResponse";
  value: Uint8Array;
}
/** MsgMigrateContractResponse defines the Msg/MigrateContract response type. */
export interface MsgMigrateContractResponseAmino {
  /** Data contains base64-encoded bytes to returned from the contract */
  data?: string;
}
export interface MsgMigrateContractResponseAminoMsg {
  type: "/terra.wasm.v1beta1.MsgMigrateContractResponse";
  value: MsgMigrateContractResponseAmino;
}
/** MsgMigrateContractResponse defines the Msg/MigrateContract response type. */
export interface MsgMigrateContractResponseSDKType {
  data: Uint8Array;
}
/**
 * MsgUpdateContractAdmin represents a message to
 * sets a new admin for a smart contract
 */
export interface MsgUpdateContractAdmin {
  /** Admin is the current contract admin */
  admin: string;
  /** NewAdmin is the new contract admin */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgUpdateContractAdminProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdmin";
  value: Uint8Array;
}
/**
 * MsgUpdateContractAdmin represents a message to
 * sets a new admin for a smart contract
 */
export interface MsgUpdateContractAdminAmino {
  /** Admin is the current contract admin */
  admin?: string;
  /** NewAdmin is the new contract admin */
  new_admin?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
}
export interface MsgUpdateContractAdminAminoMsg {
  type: "/terra.wasm.v1beta1.MsgUpdateContractAdmin";
  value: MsgUpdateContractAdminAmino;
}
/**
 * MsgUpdateContractAdmin represents a message to
 * sets a new admin for a smart contract
 */
export interface MsgUpdateContractAdminSDKType {
  admin: string;
  new_admin: string;
  contract: string;
}
/** MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type. */
export interface MsgUpdateContractAdminResponse {}
export interface MsgUpdateContractAdminResponseProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type. */
export interface MsgUpdateContractAdminResponseAmino {}
export interface MsgUpdateContractAdminResponseAminoMsg {
  type: "/terra.wasm.v1beta1.MsgUpdateContractAdminResponse";
  value: MsgUpdateContractAdminResponseAmino;
}
/** MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type. */
export interface MsgUpdateContractAdminResponseSDKType {}
/**
 * MsgClearContractAdmin represents a message to
 * clear admin address from a smart contract
 */
export interface MsgClearContractAdmin {
  /** Admin is the current contract admin */
  admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface MsgClearContractAdminProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdmin";
  value: Uint8Array;
}
/**
 * MsgClearContractAdmin represents a message to
 * clear admin address from a smart contract
 */
export interface MsgClearContractAdminAmino {
  /** Admin is the current contract admin */
  admin?: string;
  /** Contract is the address of the smart contract */
  contract?: string;
}
export interface MsgClearContractAdminAminoMsg {
  type: "/terra.wasm.v1beta1.MsgClearContractAdmin";
  value: MsgClearContractAdminAmino;
}
/**
 * MsgClearContractAdmin represents a message to
 * clear admin address from a smart contract
 */
export interface MsgClearContractAdminSDKType {
  admin: string;
  contract: string;
}
/** MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type. */
export interface MsgClearContractAdminResponse {}
export interface MsgClearContractAdminResponseProtoMsg {
  typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdminResponse";
  value: Uint8Array;
}
/** MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type. */
export interface MsgClearContractAdminResponseAmino {}
export interface MsgClearContractAdminResponseAminoMsg {
  type: "/terra.wasm.v1beta1.MsgClearContractAdminResponse";
  value: MsgClearContractAdminResponseAmino;
}
/** MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type. */
export interface MsgClearContractAdminResponseSDKType {}
function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: "",
    wasmByteCode: new Uint8Array()
  };
}
export const MsgStoreCode = {
  typeUrl: "/terra.wasm.v1beta1.MsgStoreCode",
  encode(message: MsgStoreCode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    return writer;
  },
  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgStoreCodeAmino): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
      message.wasmByteCode = fromBase64(object.wasm_byte_code);
    }
    return message;
  },
  toAmino(message: MsgStoreCode): MsgStoreCodeAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode {
    return MsgStoreCode.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode {
    return MsgStoreCode.decode(message.value);
  },
  toProto(message: MsgStoreCode): Uint8Array {
    return MsgStoreCode.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgStoreCode",
      value: MsgStoreCode.encode(message).finish()
    };
  }
};
function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: BigInt(0)
  };
}
export const MsgStoreCodeResponse = {
  typeUrl: "/terra.wasm.v1beta1.MsgStoreCodeResponse",
  encode(message: MsgStoreCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  fromJSON(object: any): MsgStoreCodeResponse {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.decode(message.value);
  },
  toProto(message: MsgStoreCodeResponse): Uint8Array {
    return MsgStoreCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateCode(): MsgMigrateCode {
  return {
    codeId: BigInt(0),
    sender: "",
    wasmByteCode: new Uint8Array()
  };
}
export const MsgMigrateCode = {
  typeUrl: "/terra.wasm.v1beta1.MsgMigrateCode",
  encode(message: MsgMigrateCode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(26).bytes(message.wasmByteCode);
    }
    return writer;
  },
  fromJSON(object: any): MsgMigrateCode {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgMigrateCode>): MsgMigrateCode {
    const message = createBaseMsgMigrateCode();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgMigrateCodeAmino): MsgMigrateCode {
    const message = createBaseMsgMigrateCode();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
      message.wasmByteCode = fromBase64(object.wasm_byte_code);
    }
    return message;
  },
  toAmino(message: MsgMigrateCode): MsgMigrateCodeAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateCodeAminoMsg): MsgMigrateCode {
    return MsgMigrateCode.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMigrateCodeProtoMsg): MsgMigrateCode {
    return MsgMigrateCode.decode(message.value);
  },
  toProto(message: MsgMigrateCode): Uint8Array {
    return MsgMigrateCode.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateCode): MsgMigrateCodeProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgMigrateCode",
      value: MsgMigrateCode.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateCodeResponse(): MsgMigrateCodeResponse {
  return {};
}
export const MsgMigrateCodeResponse = {
  typeUrl: "/terra.wasm.v1beta1.MsgMigrateCodeResponse",
  encode(_: MsgMigrateCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMigrateCodeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMigrateCodeResponse>): MsgMigrateCodeResponse {
    const message = createBaseMsgMigrateCodeResponse();
    return message;
  },
  fromAmino(_: MsgMigrateCodeResponseAmino): MsgMigrateCodeResponse {
    const message = createBaseMsgMigrateCodeResponse();
    return message;
  },
  toAmino(_: MsgMigrateCodeResponse): MsgMigrateCodeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMigrateCodeResponseAminoMsg): MsgMigrateCodeResponse {
    return MsgMigrateCodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMigrateCodeResponseProtoMsg): MsgMigrateCodeResponse {
    return MsgMigrateCodeResponse.decode(message.value);
  },
  toProto(message: MsgMigrateCodeResponse): Uint8Array {
    return MsgMigrateCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateCodeResponse): MsgMigrateCodeResponseProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgMigrateCodeResponse",
      value: MsgMigrateCodeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    admin: "",
    codeId: BigInt(0),
    initMsg: new Uint8Array(),
    initCoins: []
  };
}
export const MsgInstantiateContract = {
  typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContract",
  encode(message: MsgInstantiateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(34).bytes(message.initMsg);
    }
    for (const v of message.initCoins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(),
      initCoins: Array.isArray(object?.initCoins) ? object.initCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgInstantiateContract>): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.initMsg = object.initMsg ?? new Uint8Array();
    message.initCoins = object.initCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgInstantiateContractAmino): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
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
    message.initCoins = object.init_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgInstantiateContract): MsgInstantiateContractAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    obj.init_msg = message.initMsg ? base64FromBytes(message.initMsg) : undefined;
    if (message.initCoins) {
      obj.init_coins = message.initCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.init_coins = message.initCoins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateContractAminoMsg): MsgInstantiateContract {
    return MsgInstantiateContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantiateContractProtoMsg): MsgInstantiateContract {
    return MsgInstantiateContract.decode(message.value);
  },
  toProto(message: MsgInstantiateContract): Uint8Array {
    return MsgInstantiateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContract): MsgInstantiateContractProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContract",
      value: MsgInstantiateContract.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    contractAddress: "",
    data: new Uint8Array()
  };
}
export const MsgInstantiateContractResponse = {
  typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContractResponse",
  encode(message: MsgInstantiateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantiateContractResponse {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.contractAddress = object.contractAddress ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgInstantiateContractResponseAmino): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateContractResponseAminoMsg): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantiateContractResponseProtoMsg): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.decode(message.value);
  },
  toProto(message: MsgInstantiateContractResponse): Uint8Array {
    return MsgInstantiateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContractResponse",
      value: MsgInstantiateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: "",
    contract: "",
    executeMsg: new Uint8Array(),
    coins: []
  };
}
export const MsgExecuteContract = {
  typeUrl: "/terra.wasm.v1beta1.MsgExecuteContract",
  encode(message: MsgExecuteContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.executeMsg.length !== 0) {
      writer.uint32(26).bytes(message.executeMsg);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      executeMsg: isSet(object.executeMsg) ? bytesFromBase64(object.executeMsg) : new Uint8Array(),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.executeMsg = object.executeMsg ?? new Uint8Array();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExecuteContractAmino): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.execute_msg !== undefined && object.execute_msg !== null) {
      message.executeMsg = bytesFromBase64(object.execute_msg);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExecuteContract): MsgExecuteContractAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.execute_msg = message.executeMsg ? base64FromBytes(message.executeMsg) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractAminoMsg): MsgExecuteContract {
    return MsgExecuteContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract {
    return MsgExecuteContract.decode(message.value);
  },
  toProto(message: MsgExecuteContract): Uint8Array {
    return MsgExecuteContract.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgExecuteContract",
      value: MsgExecuteContract.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgExecuteContractResponse = {
  typeUrl: "/terra.wasm.v1beta1.MsgExecuteContractResponse",
  encode(message: MsgExecuteContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgExecuteContractResponseAmino): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgExecuteContractResponse): MsgExecuteContractResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractResponseAminoMsg): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteContractResponseProtoMsg): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.decode(message.value);
  },
  toProto(message: MsgExecuteContractResponse): Uint8Array {
    return MsgExecuteContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgExecuteContractResponse",
      value: MsgExecuteContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    admin: "",
    contract: "",
    newCodeId: BigInt(0),
    migrateMsg: new Uint8Array()
  };
}
export const MsgMigrateContract = {
  typeUrl: "/terra.wasm.v1beta1.MsgMigrateContract",
  encode(message: MsgMigrateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.newCodeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.newCodeId);
    }
    if (message.migrateMsg.length !== 0) {
      writer.uint32(34).bytes(message.migrateMsg);
    }
    return writer;
  },
  fromJSON(object: any): MsgMigrateContract {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      newCodeId: isSet(object.newCodeId) ? BigInt(object.newCodeId.toString()) : BigInt(0),
      migrateMsg: isSet(object.migrateMsg) ? bytesFromBase64(object.migrateMsg) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgMigrateContract>): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.admin = object.admin ?? "";
    message.contract = object.contract ?? "";
    message.newCodeId = object.newCodeId !== undefined && object.newCodeId !== null ? BigInt(object.newCodeId.toString()) : BigInt(0);
    message.migrateMsg = object.migrateMsg ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgMigrateContractAmino): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.new_code_id !== undefined && object.new_code_id !== null) {
      message.newCodeId = BigInt(object.new_code_id);
    }
    if (object.migrate_msg !== undefined && object.migrate_msg !== null) {
      message.migrateMsg = bytesFromBase64(object.migrate_msg);
    }
    return message;
  },
  toAmino(message: MsgMigrateContract): MsgMigrateContractAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.new_code_id = message.newCodeId !== BigInt(0) ? message.newCodeId.toString() : undefined;
    obj.migrate_msg = message.migrateMsg ? base64FromBytes(message.migrateMsg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractAminoMsg): MsgMigrateContract {
    return MsgMigrateContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract {
    return MsgMigrateContract.decode(message.value);
  },
  toProto(message: MsgMigrateContract): Uint8Array {
    return MsgMigrateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgMigrateContract",
      value: MsgMigrateContract.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgMigrateContractResponse = {
  typeUrl: "/terra.wasm.v1beta1.MsgMigrateContractResponse",
  encode(message: MsgMigrateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): MsgMigrateContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgMigrateContractResponse>): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgMigrateContractResponseAmino): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgMigrateContractResponse): MsgMigrateContractResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractResponseAminoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.decode(message.value);
  },
  toProto(message: MsgMigrateContractResponse): Uint8Array {
    return MsgMigrateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateContractAdmin(): MsgUpdateContractAdmin {
  return {
    admin: "",
    newAdmin: "",
    contract: ""
  };
}
export const MsgUpdateContractAdmin = {
  typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdmin",
  encode(message: MsgUpdateContractAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateContractAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateContractAdmin>): MsgUpdateContractAdmin {
    const message = createBaseMsgUpdateContractAdmin();
    message.admin = object.admin ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateContractAdminAmino): MsgUpdateContractAdmin {
    const message = createBaseMsgUpdateContractAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: MsgUpdateContractAdmin): MsgUpdateContractAdminAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateContractAdminAminoMsg): MsgUpdateContractAdmin {
    return MsgUpdateContractAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateContractAdminProtoMsg): MsgUpdateContractAdmin {
    return MsgUpdateContractAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateContractAdmin): Uint8Array {
    return MsgUpdateContractAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateContractAdmin): MsgUpdateContractAdminProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdmin",
      value: MsgUpdateContractAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateContractAdminResponse(): MsgUpdateContractAdminResponse {
  return {};
}
export const MsgUpdateContractAdminResponse = {
  typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdminResponse",
  encode(_: MsgUpdateContractAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateContractAdminResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateContractAdminResponse>): MsgUpdateContractAdminResponse {
    const message = createBaseMsgUpdateContractAdminResponse();
    return message;
  },
  fromAmino(_: MsgUpdateContractAdminResponseAmino): MsgUpdateContractAdminResponse {
    const message = createBaseMsgUpdateContractAdminResponse();
    return message;
  },
  toAmino(_: MsgUpdateContractAdminResponse): MsgUpdateContractAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateContractAdminResponseAminoMsg): MsgUpdateContractAdminResponse {
    return MsgUpdateContractAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateContractAdminResponseProtoMsg): MsgUpdateContractAdminResponse {
    return MsgUpdateContractAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateContractAdminResponse): Uint8Array {
    return MsgUpdateContractAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateContractAdminResponse): MsgUpdateContractAdminResponseProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdminResponse",
      value: MsgUpdateContractAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClearContractAdmin(): MsgClearContractAdmin {
  return {
    admin: "",
    contract: ""
  };
}
export const MsgClearContractAdmin = {
  typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdmin",
  encode(message: MsgClearContractAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },
  fromJSON(object: any): MsgClearContractAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object: Partial<MsgClearContractAdmin>): MsgClearContractAdmin {
    const message = createBaseMsgClearContractAdmin();
    message.admin = object.admin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: MsgClearContractAdminAmino): MsgClearContractAdmin {
    const message = createBaseMsgClearContractAdmin();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: MsgClearContractAdmin): MsgClearContractAdminAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: MsgClearContractAdminAminoMsg): MsgClearContractAdmin {
    return MsgClearContractAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearContractAdminProtoMsg): MsgClearContractAdmin {
    return MsgClearContractAdmin.decode(message.value);
  },
  toProto(message: MsgClearContractAdmin): Uint8Array {
    return MsgClearContractAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgClearContractAdmin): MsgClearContractAdminProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdmin",
      value: MsgClearContractAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgClearContractAdminResponse(): MsgClearContractAdminResponse {
  return {};
}
export const MsgClearContractAdminResponse = {
  typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdminResponse",
  encode(_: MsgClearContractAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClearContractAdminResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClearContractAdminResponse>): MsgClearContractAdminResponse {
    const message = createBaseMsgClearContractAdminResponse();
    return message;
  },
  fromAmino(_: MsgClearContractAdminResponseAmino): MsgClearContractAdminResponse {
    const message = createBaseMsgClearContractAdminResponse();
    return message;
  },
  toAmino(_: MsgClearContractAdminResponse): MsgClearContractAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClearContractAdminResponseAminoMsg): MsgClearContractAdminResponse {
    return MsgClearContractAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearContractAdminResponseProtoMsg): MsgClearContractAdminResponse {
    return MsgClearContractAdminResponse.decode(message.value);
  },
  toProto(message: MsgClearContractAdminResponse): Uint8Array {
    return MsgClearContractAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClearContractAdminResponse): MsgClearContractAdminResponseProtoMsg {
    return {
      typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdminResponse",
      value: MsgClearContractAdminResponse.encode(message).finish()
    };
  }
};