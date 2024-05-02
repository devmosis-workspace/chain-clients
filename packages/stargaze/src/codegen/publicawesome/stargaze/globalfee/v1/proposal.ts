import { CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType } from "./globalfee";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** SetCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetCodeAuthorizationProposal {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
  title: string;
  description: string;
  codeAuthorization?: CodeAuthorization;
}
export interface SetCodeAuthorizationProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
  value: Uint8Array;
}
/** SetCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetCodeAuthorizationProposalAmino {
  title?: string;
  description?: string;
  code_authorization?: CodeAuthorizationAmino;
}
export interface SetCodeAuthorizationProposalAminoMsg {
  type: "globalfee/SetCodeAuthorizationProposal";
  value: SetCodeAuthorizationProposalAmino;
}
/** SetCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetCodeAuthorizationProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal";
  title: string;
  description: string;
  code_authorization?: CodeAuthorizationSDKType;
}
/** RemoveCodeAuthorizationProposal */
/** @deprecated */
export interface RemoveCodeAuthorizationProposal {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
  title: string;
  description: string;
  codeId: bigint;
}
export interface RemoveCodeAuthorizationProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
  value: Uint8Array;
}
/** RemoveCodeAuthorizationProposal */
/** @deprecated */
export interface RemoveCodeAuthorizationProposalAmino {
  title?: string;
  description?: string;
  code_id?: string;
}
export interface RemoveCodeAuthorizationProposalAminoMsg {
  type: "globalfee/RemoveCodeAuthorizationProposal";
  value: RemoveCodeAuthorizationProposalAmino;
}
/** RemoveCodeAuthorizationProposal */
/** @deprecated */
export interface RemoveCodeAuthorizationProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal";
  title: string;
  description: string;
  code_id: bigint;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetContractAuthorizationProposal {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
  title: string;
  description: string;
  contractAuthorization?: ContractAuthorization;
}
export interface SetContractAuthorizationProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
  value: Uint8Array;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetContractAuthorizationProposalAmino {
  title?: string;
  description?: string;
  contract_authorization?: ContractAuthorizationAmino;
}
export interface SetContractAuthorizationProposalAminoMsg {
  type: "globalfee/SetContractAuthorizationProposal";
  value: SetContractAuthorizationProposalAmino;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetContractAuthorizationProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal";
  title: string;
  description: string;
  contract_authorization?: ContractAuthorizationSDKType;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface RemoveContractAuthorizationProposal {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
  title: string;
  description: string;
  contractAddress: string;
}
export interface RemoveContractAuthorizationProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
  value: Uint8Array;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface RemoveContractAuthorizationProposalAmino {
  title?: string;
  description?: string;
  contract_address?: string;
}
export interface RemoveContractAuthorizationProposalAminoMsg {
  type: "globalfee/RemoveContractAuthorizationProposal";
  value: RemoveContractAuthorizationProposalAmino;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface RemoveContractAuthorizationProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal";
  title: string;
  description: string;
  contract_address: string;
}
function createBaseSetCodeAuthorizationProposal(): SetCodeAuthorizationProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal",
    title: "",
    description: "",
    codeAuthorization: undefined
  };
}
export const SetCodeAuthorizationProposal = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal",
  encode(message: SetCodeAuthorizationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SetCodeAuthorizationProposalAmino): SetCodeAuthorizationProposal {
    const message = createBaseSetCodeAuthorizationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.code_authorization !== undefined && object.code_authorization !== null) {
      message.codeAuthorization = CodeAuthorization.fromAmino(object.code_authorization);
    }
    return message;
  },
  toAmino(message: SetCodeAuthorizationProposal): SetCodeAuthorizationProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.code_authorization = message.codeAuthorization ? CodeAuthorization.toAmino(message.codeAuthorization) : undefined;
    return obj;
  },
  fromAminoMsg(object: SetCodeAuthorizationProposalAminoMsg): SetCodeAuthorizationProposal {
    return SetCodeAuthorizationProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SetCodeAuthorizationProposal): SetCodeAuthorizationProposalAminoMsg {
    return {
      type: "globalfee/SetCodeAuthorizationProposal",
      value: SetCodeAuthorizationProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SetCodeAuthorizationProposalProtoMsg): SetCodeAuthorizationProposal {
    return SetCodeAuthorizationProposal.decode(message.value);
  },
  toProto(message: SetCodeAuthorizationProposal): Uint8Array {
    return SetCodeAuthorizationProposal.encode(message).finish();
  },
  toProtoMsg(message: SetCodeAuthorizationProposal): SetCodeAuthorizationProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.SetCodeAuthorizationProposal",
      value: SetCodeAuthorizationProposal.encode(message).finish()
    };
  }
};
function createBaseRemoveCodeAuthorizationProposal(): RemoveCodeAuthorizationProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal",
    title: "",
    description: "",
    codeId: BigInt(0)
  };
}
export const RemoveCodeAuthorizationProposal = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal",
  encode(message: RemoveCodeAuthorizationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    return writer;
  },
  fromJSON(object: any): RemoveCodeAuthorizationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RemoveCodeAuthorizationProposal>): RemoveCodeAuthorizationProposal {
    const message = createBaseRemoveCodeAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RemoveCodeAuthorizationProposalAmino): RemoveCodeAuthorizationProposal {
    const message = createBaseRemoveCodeAuthorizationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: RemoveCodeAuthorizationProposal): RemoveCodeAuthorizationProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RemoveCodeAuthorizationProposalAminoMsg): RemoveCodeAuthorizationProposal {
    return RemoveCodeAuthorizationProposal.fromAmino(object.value);
  },
  toAminoMsg(message: RemoveCodeAuthorizationProposal): RemoveCodeAuthorizationProposalAminoMsg {
    return {
      type: "globalfee/RemoveCodeAuthorizationProposal",
      value: RemoveCodeAuthorizationProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: RemoveCodeAuthorizationProposalProtoMsg): RemoveCodeAuthorizationProposal {
    return RemoveCodeAuthorizationProposal.decode(message.value);
  },
  toProto(message: RemoveCodeAuthorizationProposal): Uint8Array {
    return RemoveCodeAuthorizationProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveCodeAuthorizationProposal): RemoveCodeAuthorizationProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveCodeAuthorizationProposal",
      value: RemoveCodeAuthorizationProposal.encode(message).finish()
    };
  }
};
function createBaseSetContractAuthorizationProposal(): SetContractAuthorizationProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal",
    title: "",
    description: "",
    contractAuthorization: undefined
  };
}
export const SetContractAuthorizationProposal = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal",
  encode(message: SetContractAuthorizationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SetContractAuthorizationProposalAmino): SetContractAuthorizationProposal {
    const message = createBaseSetContractAuthorizationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract_authorization !== undefined && object.contract_authorization !== null) {
      message.contractAuthorization = ContractAuthorization.fromAmino(object.contract_authorization);
    }
    return message;
  },
  toAmino(message: SetContractAuthorizationProposal): SetContractAuthorizationProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract_authorization = message.contractAuthorization ? ContractAuthorization.toAmino(message.contractAuthorization) : undefined;
    return obj;
  },
  fromAminoMsg(object: SetContractAuthorizationProposalAminoMsg): SetContractAuthorizationProposal {
    return SetContractAuthorizationProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SetContractAuthorizationProposal): SetContractAuthorizationProposalAminoMsg {
    return {
      type: "globalfee/SetContractAuthorizationProposal",
      value: SetContractAuthorizationProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SetContractAuthorizationProposalProtoMsg): SetContractAuthorizationProposal {
    return SetContractAuthorizationProposal.decode(message.value);
  },
  toProto(message: SetContractAuthorizationProposal): Uint8Array {
    return SetContractAuthorizationProposal.encode(message).finish();
  },
  toProtoMsg(message: SetContractAuthorizationProposal): SetContractAuthorizationProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.SetContractAuthorizationProposal",
      value: SetContractAuthorizationProposal.encode(message).finish()
    };
  }
};
function createBaseRemoveContractAuthorizationProposal(): RemoveContractAuthorizationProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal",
    title: "",
    description: "",
    contractAddress: ""
  };
}
export const RemoveContractAuthorizationProposal = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal",
  encode(message: RemoveContractAuthorizationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RemoveContractAuthorizationProposalAmino): RemoveContractAuthorizationProposal {
    const message = createBaseRemoveContractAuthorizationProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: RemoveContractAuthorizationProposal): RemoveContractAuthorizationProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: RemoveContractAuthorizationProposalAminoMsg): RemoveContractAuthorizationProposal {
    return RemoveContractAuthorizationProposal.fromAmino(object.value);
  },
  toAminoMsg(message: RemoveContractAuthorizationProposal): RemoveContractAuthorizationProposalAminoMsg {
    return {
      type: "globalfee/RemoveContractAuthorizationProposal",
      value: RemoveContractAuthorizationProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: RemoveContractAuthorizationProposalProtoMsg): RemoveContractAuthorizationProposal {
    return RemoveContractAuthorizationProposal.decode(message.value);
  },
  toProto(message: RemoveContractAuthorizationProposal): Uint8Array {
    return RemoveContractAuthorizationProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveContractAuthorizationProposal): RemoveContractAuthorizationProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.RemoveContractAuthorizationProposal",
      value: RemoveContractAuthorizationProposal.encode(message).finish()
    };
  }
};