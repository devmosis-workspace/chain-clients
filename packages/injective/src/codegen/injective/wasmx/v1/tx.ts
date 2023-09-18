import { Params, ParamsAmino, ParamsSDKType } from "./wasmx";
import { ContractRegistrationRequest, ContractRegistrationRequestAmino, ContractRegistrationRequestSDKType } from "./proposal";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 */
export interface MsgExecuteContractCompat {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract */
  msg: string;
  /** Funds coins that are transferred to the contract on execution */
  funds: string;
}
export interface MsgExecuteContractCompatProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat";
  value: Uint8Array;
}
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 */
export interface MsgExecuteContractCompatAmino {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract */
  msg: string;
  /** Funds coins that are transferred to the contract on execution */
  funds: string;
}
export interface MsgExecuteContractCompatAminoMsg {
  type: "/injective.wasmx.v1.MsgExecuteContractCompat";
  value: MsgExecuteContractCompatAmino;
}
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 */
export interface MsgExecuteContractCompatSDKType {
  sender: string;
  contract: string;
  msg: string;
  funds: string;
}
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponse {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractCompatResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompatResponse";
  value: Uint8Array;
}
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponseAmino {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractCompatResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgExecuteContractCompatResponse";
  value: MsgExecuteContractCompatResponseAmino;
}
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponseSDKType {
  data: Uint8Array;
}
export interface MsgUpdateContract {
  sender: string;
  /** Unique Identifier for contract instance to be registered. */
  contractAddress: string;
  /** Maximum gas to be used for the smart contract execution. */
  gasLimit: bigint;
  /** gas price to be used for the smart contract execution. */
  gasPrice: bigint;
  /** optional - admin account that will be allowed to perform any changes */
  adminAddress?: string;
}
export interface MsgUpdateContractProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgUpdateContract";
  value: Uint8Array;
}
export interface MsgUpdateContractAmino {
  sender: string;
  /** Unique Identifier for contract instance to be registered. */
  contract_address: string;
  /** Maximum gas to be used for the smart contract execution. */
  gas_limit: string;
  /** gas price to be used for the smart contract execution. */
  gas_price: string;
  /** optional - admin account that will be allowed to perform any changes */
  admin_address: string;
}
export interface MsgUpdateContractAminoMsg {
  type: "/injective.wasmx.v1.MsgUpdateContract";
  value: MsgUpdateContractAmino;
}
export interface MsgUpdateContractSDKType {
  sender: string;
  contract_address: string;
  gas_limit: bigint;
  gas_price: bigint;
  admin_address?: string;
}
export interface MsgUpdateContractResponse {}
export interface MsgUpdateContractResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgUpdateContractResponse";
  value: Uint8Array;
}
export interface MsgUpdateContractResponseAmino {}
export interface MsgUpdateContractResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgUpdateContractResponse";
  value: MsgUpdateContractResponseAmino;
}
export interface MsgUpdateContractResponseSDKType {}
export interface MsgActivateContract {
  sender: string;
  /** Unique Identifier for contract instance to be activated. */
  contractAddress: string;
}
export interface MsgActivateContractProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgActivateContract";
  value: Uint8Array;
}
export interface MsgActivateContractAmino {
  sender: string;
  /** Unique Identifier for contract instance to be activated. */
  contract_address: string;
}
export interface MsgActivateContractAminoMsg {
  type: "/injective.wasmx.v1.MsgActivateContract";
  value: MsgActivateContractAmino;
}
export interface MsgActivateContractSDKType {
  sender: string;
  contract_address: string;
}
export interface MsgActivateContractResponse {}
export interface MsgActivateContractResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgActivateContractResponse";
  value: Uint8Array;
}
export interface MsgActivateContractResponseAmino {}
export interface MsgActivateContractResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgActivateContractResponse";
  value: MsgActivateContractResponseAmino;
}
export interface MsgActivateContractResponseSDKType {}
export interface MsgDeactivateContract {
  sender: string;
  /** Unique Identifier for contract instance to be deactivated. */
  contractAddress: string;
}
export interface MsgDeactivateContractProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgDeactivateContract";
  value: Uint8Array;
}
export interface MsgDeactivateContractAmino {
  sender: string;
  /** Unique Identifier for contract instance to be deactivated. */
  contract_address: string;
}
export interface MsgDeactivateContractAminoMsg {
  type: "/injective.wasmx.v1.MsgDeactivateContract";
  value: MsgDeactivateContractAmino;
}
export interface MsgDeactivateContractSDKType {
  sender: string;
  contract_address: string;
}
export interface MsgDeactivateContractResponse {}
export interface MsgDeactivateContractResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgDeactivateContractResponse";
  value: Uint8Array;
}
export interface MsgDeactivateContractResponseAmino {}
export interface MsgDeactivateContractResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgDeactivateContractResponse";
  value: MsgDeactivateContractResponseAmino;
}
export interface MsgDeactivateContractResponseSDKType {}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the wasmx parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the wasmx parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/injective.wasmx.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgRegisterContract {
  sender: string;
  contractRegistrationRequest: ContractRegistrationRequest;
}
export interface MsgRegisterContractProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgRegisterContract";
  value: Uint8Array;
}
export interface MsgRegisterContractAmino {
  sender: string;
  contract_registration_request?: ContractRegistrationRequestAmino;
}
export interface MsgRegisterContractAminoMsg {
  type: "/injective.wasmx.v1.MsgRegisterContract";
  value: MsgRegisterContractAmino;
}
export interface MsgRegisterContractSDKType {
  sender: string;
  contract_registration_request: ContractRegistrationRequestSDKType;
}
export interface MsgRegisterContractResponse {}
export interface MsgRegisterContractResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgRegisterContractResponse";
  value: Uint8Array;
}
export interface MsgRegisterContractResponseAmino {}
export interface MsgRegisterContractResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgRegisterContractResponse";
  value: MsgRegisterContractResponseAmino;
}
export interface MsgRegisterContractResponseSDKType {}
function createBaseMsgExecuteContractCompat(): MsgExecuteContractCompat {
  return {
    sender: "",
    contract: "",
    msg: "",
    funds: ""
  };
}
export const MsgExecuteContractCompat = {
  typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat",
  encode(message: MsgExecuteContractCompat, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg !== "") {
      writer.uint32(26).string(message.msg);
    }
    if (message.funds !== "") {
      writer.uint32(34).string(message.funds);
    }
    return writer;
  },
  fromJSON(object: any): MsgExecuteContractCompat {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
      funds: isSet(object.funds) ? String(object.funds) : ""
    };
  },
  fromPartial(object: Partial<MsgExecuteContractCompat>): MsgExecuteContractCompat {
    const message = createBaseMsgExecuteContractCompat();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? "";
    message.funds = object.funds ?? "";
    return message;
  },
  fromAmino(object: MsgExecuteContractCompatAmino): MsgExecuteContractCompat {
    return {
      sender: object.sender,
      contract: object.contract,
      msg: object.msg,
      funds: object.funds
    };
  },
  toAmino(message: MsgExecuteContractCompat): MsgExecuteContractCompatAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.msg = message.msg;
    obj.funds = message.funds;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractCompatAminoMsg): MsgExecuteContractCompat {
    return MsgExecuteContractCompat.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteContractCompatProtoMsg): MsgExecuteContractCompat {
    return MsgExecuteContractCompat.decode(message.value);
  },
  toProto(message: MsgExecuteContractCompat): Uint8Array {
    return MsgExecuteContractCompat.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContractCompat): MsgExecuteContractCompatProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat",
      value: MsgExecuteContractCompat.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContractCompatResponse(): MsgExecuteContractCompatResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgExecuteContractCompatResponse = {
  typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompatResponse",
  encode(message: MsgExecuteContractCompatResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): MsgExecuteContractCompatResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgExecuteContractCompatResponse>): MsgExecuteContractCompatResponse {
    const message = createBaseMsgExecuteContractCompatResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgExecuteContractCompatResponseAmino): MsgExecuteContractCompatResponse {
    return {
      data: object.data
    };
  },
  toAmino(message: MsgExecuteContractCompatResponse): MsgExecuteContractCompatResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractCompatResponseAminoMsg): MsgExecuteContractCompatResponse {
    return MsgExecuteContractCompatResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteContractCompatResponseProtoMsg): MsgExecuteContractCompatResponse {
    return MsgExecuteContractCompatResponse.decode(message.value);
  },
  toProto(message: MsgExecuteContractCompatResponse): Uint8Array {
    return MsgExecuteContractCompatResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContractCompatResponse): MsgExecuteContractCompatResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompatResponse",
      value: MsgExecuteContractCompatResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateContract(): MsgUpdateContract {
  return {
    sender: "",
    contractAddress: "",
    gasLimit: BigInt(0),
    gasPrice: BigInt(0),
    adminAddress: undefined
  };
}
export const MsgUpdateContract = {
  typeUrl: "/injective.wasmx.v1.MsgUpdateContract",
  encode(message: MsgUpdateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.gasLimit);
    }
    if (message.gasPrice !== BigInt(0)) {
      writer.uint32(32).uint64(message.gasPrice);
    }
    if (message.adminAddress !== undefined) {
      writer.uint32(42).string(message.adminAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      gasLimit: isSet(object.gasLimit) ? BigInt(object.gasLimit.toString()) : BigInt(0),
      gasPrice: isSet(object.gasPrice) ? BigInt(object.gasPrice.toString()) : BigInt(0),
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateContract>): MsgUpdateContract {
    const message = createBaseMsgUpdateContract();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? BigInt(object.gasPrice.toString()) : BigInt(0);
    message.adminAddress = object.adminAddress ?? undefined;
    return message;
  },
  fromAmino(object: MsgUpdateContractAmino): MsgUpdateContract {
    return {
      sender: object.sender,
      contractAddress: object.contract_address,
      gasLimit: BigInt(object.gas_limit),
      gasPrice: BigInt(object.gas_price),
      adminAddress: object?.admin_address
    };
  },
  toAmino(message: MsgUpdateContract): MsgUpdateContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract_address = message.contractAddress;
    obj.gas_limit = message.gasLimit ? message.gasLimit.toString() : undefined;
    obj.gas_price = message.gasPrice ? message.gasPrice.toString() : undefined;
    obj.admin_address = message.adminAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateContractAminoMsg): MsgUpdateContract {
    return MsgUpdateContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateContractProtoMsg): MsgUpdateContract {
    return MsgUpdateContract.decode(message.value);
  },
  toProto(message: MsgUpdateContract): Uint8Array {
    return MsgUpdateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateContract): MsgUpdateContractProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgUpdateContract",
      value: MsgUpdateContract.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateContractResponse(): MsgUpdateContractResponse {
  return {};
}
export const MsgUpdateContractResponse = {
  typeUrl: "/injective.wasmx.v1.MsgUpdateContractResponse",
  encode(_: MsgUpdateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateContractResponse>): MsgUpdateContractResponse {
    const message = createBaseMsgUpdateContractResponse();
    return message;
  },
  fromAmino(_: MsgUpdateContractResponseAmino): MsgUpdateContractResponse {
    return {};
  },
  toAmino(_: MsgUpdateContractResponse): MsgUpdateContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateContractResponseAminoMsg): MsgUpdateContractResponse {
    return MsgUpdateContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateContractResponseProtoMsg): MsgUpdateContractResponse {
    return MsgUpdateContractResponse.decode(message.value);
  },
  toProto(message: MsgUpdateContractResponse): Uint8Array {
    return MsgUpdateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateContractResponse): MsgUpdateContractResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgUpdateContractResponse",
      value: MsgUpdateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivateContract(): MsgActivateContract {
  return {
    sender: "",
    contractAddress: ""
  };
}
export const MsgActivateContract = {
  typeUrl: "/injective.wasmx.v1.MsgActivateContract",
  encode(message: MsgActivateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgActivateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgActivateContract>): MsgActivateContract {
    const message = createBaseMsgActivateContract();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgActivateContractAmino): MsgActivateContract {
    return {
      sender: object.sender,
      contractAddress: object.contract_address
    };
  },
  toAmino(message: MsgActivateContract): MsgActivateContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgActivateContractAminoMsg): MsgActivateContract {
    return MsgActivateContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateContractProtoMsg): MsgActivateContract {
    return MsgActivateContract.decode(message.value);
  },
  toProto(message: MsgActivateContract): Uint8Array {
    return MsgActivateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateContract): MsgActivateContractProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgActivateContract",
      value: MsgActivateContract.encode(message).finish()
    };
  }
};
function createBaseMsgActivateContractResponse(): MsgActivateContractResponse {
  return {};
}
export const MsgActivateContractResponse = {
  typeUrl: "/injective.wasmx.v1.MsgActivateContractResponse",
  encode(_: MsgActivateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgActivateContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgActivateContractResponse>): MsgActivateContractResponse {
    const message = createBaseMsgActivateContractResponse();
    return message;
  },
  fromAmino(_: MsgActivateContractResponseAmino): MsgActivateContractResponse {
    return {};
  },
  toAmino(_: MsgActivateContractResponse): MsgActivateContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateContractResponseAminoMsg): MsgActivateContractResponse {
    return MsgActivateContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateContractResponseProtoMsg): MsgActivateContractResponse {
    return MsgActivateContractResponse.decode(message.value);
  },
  toProto(message: MsgActivateContractResponse): Uint8Array {
    return MsgActivateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateContractResponse): MsgActivateContractResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgActivateContractResponse",
      value: MsgActivateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateContract(): MsgDeactivateContract {
  return {
    sender: "",
    contractAddress: ""
  };
}
export const MsgDeactivateContract = {
  typeUrl: "/injective.wasmx.v1.MsgDeactivateContract",
  encode(message: MsgDeactivateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeactivateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgDeactivateContract>): MsgDeactivateContract {
    const message = createBaseMsgDeactivateContract();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDeactivateContractAmino): MsgDeactivateContract {
    return {
      sender: object.sender,
      contractAddress: object.contract_address
    };
  },
  toAmino(message: MsgDeactivateContract): MsgDeactivateContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateContractAminoMsg): MsgDeactivateContract {
    return MsgDeactivateContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeactivateContractProtoMsg): MsgDeactivateContract {
    return MsgDeactivateContract.decode(message.value);
  },
  toProto(message: MsgDeactivateContract): Uint8Array {
    return MsgDeactivateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateContract): MsgDeactivateContractProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgDeactivateContract",
      value: MsgDeactivateContract.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateContractResponse(): MsgDeactivateContractResponse {
  return {};
}
export const MsgDeactivateContractResponse = {
  typeUrl: "/injective.wasmx.v1.MsgDeactivateContractResponse",
  encode(_: MsgDeactivateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeactivateContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeactivateContractResponse>): MsgDeactivateContractResponse {
    const message = createBaseMsgDeactivateContractResponse();
    return message;
  },
  fromAmino(_: MsgDeactivateContractResponseAmino): MsgDeactivateContractResponse {
    return {};
  },
  toAmino(_: MsgDeactivateContractResponse): MsgDeactivateContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateContractResponseAminoMsg): MsgDeactivateContractResponse {
    return MsgDeactivateContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeactivateContractResponseProtoMsg): MsgDeactivateContractResponse {
    return MsgDeactivateContractResponse.decode(message.value);
  },
  toProto(message: MsgDeactivateContractResponse): Uint8Array {
    return MsgDeactivateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateContractResponse): MsgDeactivateContractResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgDeactivateContractResponse",
      value: MsgDeactivateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/injective.wasmx.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.wasmx.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterContract(): MsgRegisterContract {
  return {
    sender: "",
    contractRegistrationRequest: ContractRegistrationRequest.fromPartial({})
  };
}
export const MsgRegisterContract = {
  typeUrl: "/injective.wasmx.v1.MsgRegisterContract",
  encode(message: MsgRegisterContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractRegistrationRequest !== undefined) {
      ContractRegistrationRequest.encode(message.contractRegistrationRequest, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractRegistrationRequest: isSet(object.contractRegistrationRequest) ? ContractRegistrationRequest.fromJSON(object.contractRegistrationRequest) : undefined
    };
  },
  fromPartial(object: Partial<MsgRegisterContract>): MsgRegisterContract {
    const message = createBaseMsgRegisterContract();
    message.sender = object.sender ?? "";
    message.contractRegistrationRequest = object.contractRegistrationRequest !== undefined && object.contractRegistrationRequest !== null ? ContractRegistrationRequest.fromPartial(object.contractRegistrationRequest) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterContractAmino): MsgRegisterContract {
    return {
      sender: object.sender,
      contractRegistrationRequest: object?.contract_registration_request ? ContractRegistrationRequest.fromAmino(object.contract_registration_request) : undefined
    };
  },
  toAmino(message: MsgRegisterContract): MsgRegisterContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract_registration_request = message.contractRegistrationRequest ? ContractRegistrationRequest.toAmino(message.contractRegistrationRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterContractAminoMsg): MsgRegisterContract {
    return MsgRegisterContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterContractProtoMsg): MsgRegisterContract {
    return MsgRegisterContract.decode(message.value);
  },
  toProto(message: MsgRegisterContract): Uint8Array {
    return MsgRegisterContract.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterContract): MsgRegisterContractProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgRegisterContract",
      value: MsgRegisterContract.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterContractResponse(): MsgRegisterContractResponse {
  return {};
}
export const MsgRegisterContractResponse = {
  typeUrl: "/injective.wasmx.v1.MsgRegisterContractResponse",
  encode(_: MsgRegisterContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterContractResponse>): MsgRegisterContractResponse {
    const message = createBaseMsgRegisterContractResponse();
    return message;
  },
  fromAmino(_: MsgRegisterContractResponseAmino): MsgRegisterContractResponse {
    return {};
  },
  toAmino(_: MsgRegisterContractResponse): MsgRegisterContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterContractResponseAminoMsg): MsgRegisterContractResponse {
    return MsgRegisterContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterContractResponseProtoMsg): MsgRegisterContractResponse {
    return MsgRegisterContractResponse.decode(message.value);
  },
  toProto(message: MsgRegisterContractResponse): Uint8Array {
    return MsgRegisterContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterContractResponse): MsgRegisterContractResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgRegisterContractResponse",
      value: MsgRegisterContractResponse.encode(message).finish()
    };
  }
};