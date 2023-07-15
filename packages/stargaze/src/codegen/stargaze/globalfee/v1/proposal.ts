import { CodeAuthorization, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationSDKType } from "./globalfee";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SetCodeAuthorizationProposal {
  title: string;
  description: string;
  codeAuthorization?: CodeAuthorization;
}
export interface SetCodeAuthorizationProposalSDKType {
  title: string;
  description: string;
  code_authorization?: CodeAuthorizationSDKType;
}
export interface RemoveCodeAuthorizationProposal {
  title: string;
  description: string;
  codeId: Long;
}
export interface RemoveCodeAuthorizationProposalSDKType {
  title: string;
  description: string;
  code_id: Long;
}
export interface SetContractAuthorizationProposal {
  title: string;
  description: string;
  contractAuthorization?: ContractAuthorization;
}
export interface SetContractAuthorizationProposalSDKType {
  title: string;
  description: string;
  contract_authorization?: ContractAuthorizationSDKType;
}
export interface RemoveContractAuthorizationProposal {
  title: string;
  description: string;
  contractAddress: string;
}
export interface RemoveContractAuthorizationProposalSDKType {
  title: string;
  description: string;
  contract_address: string;
}
function createBaseSetCodeAuthorizationProposal(): SetCodeAuthorizationProposal {
  return {
    title: "",
    description: "",
    codeAuthorization: undefined
  };
}
export const SetCodeAuthorizationProposal = {
  encode(message: SetCodeAuthorizationProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeAuthorization !== undefined) {
      CodeAuthorization.encode(message.codeAuthorization, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SetCodeAuthorizationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeAuthorization: isSet(object.codeAuthorization) ? CodeAuthorization.fromJSON(object.codeAuthorization) : undefined
    };
  },
  fromPartial(object: Partial<SetCodeAuthorizationProposal>): SetCodeAuthorizationProposal {
    const message = createBaseSetCodeAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeAuthorization = object.codeAuthorization !== undefined && object.codeAuthorization !== null ? CodeAuthorization.fromPartial(object.codeAuthorization) : undefined;
    return message;
  }
};
function createBaseRemoveCodeAuthorizationProposal(): RemoveCodeAuthorizationProposal {
  return {
    title: "",
    description: "",
    codeId: Long.UZERO
  };
}
export const RemoveCodeAuthorizationProposal = {
  encode(message: RemoveCodeAuthorizationProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }
    return writer;
  },
  fromJSON(object: any): RemoveCodeAuthorizationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<RemoveCodeAuthorizationProposal>): RemoveCodeAuthorizationProposal {
    const message = createBaseRemoveCodeAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }
};
function createBaseSetContractAuthorizationProposal(): SetContractAuthorizationProposal {
  return {
    title: "",
    description: "",
    contractAuthorization: undefined
  };
}
export const SetContractAuthorizationProposal = {
  encode(message: SetContractAuthorizationProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contractAuthorization !== undefined) {
      ContractAuthorization.encode(message.contractAuthorization, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SetContractAuthorizationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contractAuthorization: isSet(object.contractAuthorization) ? ContractAuthorization.fromJSON(object.contractAuthorization) : undefined
    };
  },
  fromPartial(object: Partial<SetContractAuthorizationProposal>): SetContractAuthorizationProposal {
    const message = createBaseSetContractAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractAuthorization = object.contractAuthorization !== undefined && object.contractAuthorization !== null ? ContractAuthorization.fromPartial(object.contractAuthorization) : undefined;
    return message;
  }
};
function createBaseRemoveContractAuthorizationProposal(): RemoveContractAuthorizationProposal {
  return {
    title: "",
    description: "",
    contractAddress: ""
  };
}
export const RemoveContractAuthorizationProposal = {
  encode(message: RemoveContractAuthorizationProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): RemoveContractAuthorizationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<RemoveContractAuthorizationProposal>): RemoveContractAuthorizationProposal {
    const message = createBaseRemoveContractAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};