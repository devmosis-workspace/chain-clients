import { Params, ParamsSDKType } from "./wasmx";
import { ContractRegistrationRequest, ContractRegistrationRequestSDKType } from "./proposal";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponseSDKType {
  data: Uint8Array;
}
export interface MsgUpdateContract {
  sender: string;
  /** Unique Identifier for contract instance to be registered. */
  contractAddress: string;
  /** Maximum gas to be used for the smart contract execution. */
  gasLimit: Long;
  /** gas price to be used for the smart contract execution. */
  gasPrice: Long;
  /** optional - admin account that will be allowed to perform any changes */
  adminAddress: string;
}
export interface MsgUpdateContractSDKType {
  sender: string;
  contract_address: string;
  gas_limit: Long;
  gas_price: Long;
  admin_address: string;
}
export interface MsgUpdateContractResponse {}
export interface MsgUpdateContractResponseSDKType {}
export interface MsgActivateContract {
  sender: string;
  /** Unique Identifier for contract instance to be activated. */
  contractAddress: string;
}
export interface MsgActivateContractSDKType {
  sender: string;
  contract_address: string;
}
export interface MsgActivateContractResponse {}
export interface MsgActivateContractResponseSDKType {}
export interface MsgDeactivateContract {
  sender: string;
  /** Unique Identifier for contract instance to be deactivated. */
  contractAddress: string;
}
export interface MsgDeactivateContractSDKType {
  sender: string;
  contract_address: string;
}
export interface MsgDeactivateContractResponse {}
export interface MsgDeactivateContractResponseSDKType {}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the wasmx parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgRegisterContract {
  sender: string;
  contractRegistrationRequest?: ContractRegistrationRequest;
}
export interface MsgRegisterContractSDKType {
  sender: string;
  contract_registration_request?: ContractRegistrationRequestSDKType;
}
export interface MsgRegisterContractResponse {}
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
  encode(message: MsgExecuteContractCompat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgExecuteContractCompatResponse(): MsgExecuteContractCompatResponse {
  return {
    data: new Uint8Array()
  };
}
export const MsgExecuteContractCompatResponse = {
  encode(message: MsgExecuteContractCompatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateContract(): MsgUpdateContract {
  return {
    sender: "",
    contractAddress: "",
    gasLimit: Long.UZERO,
    gasPrice: Long.UZERO,
    adminAddress: undefined
  };
}
export const MsgUpdateContract = {
  encode(message: MsgUpdateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (!message.gasLimit.isZero()) {
      writer.uint32(24).uint64(message.gasLimit);
    }
    if (!message.gasPrice.isZero()) {
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
      gasLimit: isSet(object.gasLimit) ? Long.fromValue(object.gasLimit) : Long.UZERO,
      gasPrice: isSet(object.gasPrice) ? Long.fromValue(object.gasPrice) : Long.UZERO,
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateContract>): MsgUpdateContract {
    const message = createBaseMsgUpdateContract();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? Long.fromValue(object.gasLimit) : Long.UZERO;
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? Long.fromValue(object.gasPrice) : Long.UZERO;
    message.adminAddress = object.adminAddress ?? undefined;
    return message;
  }
};
function createBaseMsgUpdateContractResponse(): MsgUpdateContractResponse {
  return {};
}
export const MsgUpdateContractResponse = {
  encode(_: MsgUpdateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateContractResponse>): MsgUpdateContractResponse {
    const message = createBaseMsgUpdateContractResponse();
    return message;
  }
};
function createBaseMsgActivateContract(): MsgActivateContract {
  return {
    sender: "",
    contractAddress: ""
  };
}
export const MsgActivateContract = {
  encode(message: MsgActivateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgActivateContractResponse(): MsgActivateContractResponse {
  return {};
}
export const MsgActivateContractResponse = {
  encode(_: MsgActivateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgActivateContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgActivateContractResponse>): MsgActivateContractResponse {
    const message = createBaseMsgActivateContractResponse();
    return message;
  }
};
function createBaseMsgDeactivateContract(): MsgDeactivateContract {
  return {
    sender: "",
    contractAddress: ""
  };
}
export const MsgDeactivateContract = {
  encode(message: MsgDeactivateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeactivateContractResponse(): MsgDeactivateContractResponse {
  return {};
}
export const MsgDeactivateContractResponse = {
  encode(_: MsgDeactivateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeactivateContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeactivateContractResponse>): MsgDeactivateContractResponse {
    const message = createBaseMsgDeactivateContractResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgRegisterContract(): MsgRegisterContract {
  return {
    sender: "",
    contractRegistrationRequest: undefined
  };
}
export const MsgRegisterContract = {
  encode(message: MsgRegisterContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRegisterContractResponse(): MsgRegisterContractResponse {
  return {};
}
export const MsgRegisterContractResponse = {
  encode(_: MsgRegisterContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRegisterContractResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterContractResponse>): MsgRegisterContractResponse {
    const message = createBaseMsgRegisterContractResponse();
    return message;
  }
};