import { CodeAuthorization, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationSDKType } from "./globalfee";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgSetCodeAuthorization {
  sender: string;
  codeAuthorization?: CodeAuthorization;
}
export interface MsgSetCodeAuthorizationSDKType {
  sender: string;
  code_authorization?: CodeAuthorizationSDKType;
}
export interface MsgSetCodeAuthorizationResponse {}
export interface MsgSetCodeAuthorizationResponseSDKType {}
export interface MsgRemoveCodeAuthorization {
  sender: string;
  codeId: Long;
}
export interface MsgRemoveCodeAuthorizationSDKType {
  sender: string;
  code_id: Long;
}
export interface MsgRemoveCodeAuthorizationResponse {}
export interface MsgRemoveCodeAuthorizationResponseSDKType {}
export interface MsgSetContractAuthorization {
  sender: string;
  contractAuthorization?: ContractAuthorization;
}
export interface MsgSetContractAuthorizationSDKType {
  sender: string;
  contract_authorization?: ContractAuthorizationSDKType;
}
export interface MsgSetContractAuthorizationResponse {}
export interface MsgSetContractAuthorizationResponseSDKType {}
export interface MsgRemoveContractAuthorization {
  sender: string;
  contractAddress: string;
}
export interface MsgRemoveContractAuthorizationSDKType {
  sender: string;
  contract_address: string;
}
export interface MsgRemoveContractAuthorizationResponse {}
export interface MsgRemoveContractAuthorizationResponseSDKType {}
function createBaseMsgSetCodeAuthorization(): MsgSetCodeAuthorization {
  return {
    sender: "",
    codeAuthorization: undefined
  };
}
export const MsgSetCodeAuthorization = {
  encode(message: MsgSetCodeAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.codeAuthorization !== undefined) {
      CodeAuthorization.encode(message.codeAuthorization, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetCodeAuthorization {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      codeAuthorization: isSet(object.codeAuthorization) ? CodeAuthorization.fromJSON(object.codeAuthorization) : undefined
    };
  },
  fromPartial(object: Partial<MsgSetCodeAuthorization>): MsgSetCodeAuthorization {
    const message = createBaseMsgSetCodeAuthorization();
    message.sender = object.sender ?? "";
    message.codeAuthorization = object.codeAuthorization !== undefined && object.codeAuthorization !== null ? CodeAuthorization.fromPartial(object.codeAuthorization) : undefined;
    return message;
  }
};
function createBaseMsgSetCodeAuthorizationResponse(): MsgSetCodeAuthorizationResponse {
  return {};
}
export const MsgSetCodeAuthorizationResponse = {
  encode(_: MsgSetCodeAuthorizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetCodeAuthorizationResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetCodeAuthorizationResponse>): MsgSetCodeAuthorizationResponse {
    const message = createBaseMsgSetCodeAuthorizationResponse();
    return message;
  }
};
function createBaseMsgRemoveCodeAuthorization(): MsgRemoveCodeAuthorization {
  return {
    sender: "",
    codeId: Long.UZERO
  };
}
export const MsgRemoveCodeAuthorization = {
  encode(message: MsgRemoveCodeAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(16).uint64(message.codeId);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveCodeAuthorization {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgRemoveCodeAuthorization>): MsgRemoveCodeAuthorization {
    const message = createBaseMsgRemoveCodeAuthorization();
    message.sender = object.sender ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgRemoveCodeAuthorizationResponse(): MsgRemoveCodeAuthorizationResponse {
  return {};
}
export const MsgRemoveCodeAuthorizationResponse = {
  encode(_: MsgRemoveCodeAuthorizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRemoveCodeAuthorizationResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveCodeAuthorizationResponse>): MsgRemoveCodeAuthorizationResponse {
    const message = createBaseMsgRemoveCodeAuthorizationResponse();
    return message;
  }
};
function createBaseMsgSetContractAuthorization(): MsgSetContractAuthorization {
  return {
    sender: "",
    contractAuthorization: undefined
  };
}
export const MsgSetContractAuthorization = {
  encode(message: MsgSetContractAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAuthorization !== undefined) {
      ContractAuthorization.encode(message.contractAuthorization, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetContractAuthorization {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAuthorization: isSet(object.contractAuthorization) ? ContractAuthorization.fromJSON(object.contractAuthorization) : undefined
    };
  },
  fromPartial(object: Partial<MsgSetContractAuthorization>): MsgSetContractAuthorization {
    const message = createBaseMsgSetContractAuthorization();
    message.sender = object.sender ?? "";
    message.contractAuthorization = object.contractAuthorization !== undefined && object.contractAuthorization !== null ? ContractAuthorization.fromPartial(object.contractAuthorization) : undefined;
    return message;
  }
};
function createBaseMsgSetContractAuthorizationResponse(): MsgSetContractAuthorizationResponse {
  return {};
}
export const MsgSetContractAuthorizationResponse = {
  encode(_: MsgSetContractAuthorizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetContractAuthorizationResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetContractAuthorizationResponse>): MsgSetContractAuthorizationResponse {
    const message = createBaseMsgSetContractAuthorizationResponse();
    return message;
  }
};
function createBaseMsgRemoveContractAuthorization(): MsgRemoveContractAuthorization {
  return {
    sender: "",
    contractAddress: ""
  };
}
export const MsgRemoveContractAuthorization = {
  encode(message: MsgRemoveContractAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveContractAuthorization {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveContractAuthorization>): MsgRemoveContractAuthorization {
    const message = createBaseMsgRemoveContractAuthorization();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseMsgRemoveContractAuthorizationResponse(): MsgRemoveContractAuthorizationResponse {
  return {};
}
export const MsgRemoveContractAuthorizationResponse = {
  encode(_: MsgRemoveContractAuthorizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRemoveContractAuthorizationResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveContractAuthorizationResponse>): MsgRemoveContractAuthorizationResponse {
    const message = createBaseMsgRemoveContractAuthorizationResponse();
    return message;
  }
};