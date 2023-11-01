import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/**
 * CallContractsProposal is a gov Content type for calling contracts on other
 * chains
 */
export interface CallContractsProposal {
  title: string;
  description: string;
  contractCalls: ContractCall[];
}
export interface CallContractsProposalProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.CallContractsProposal";
  value: Uint8Array;
}
/**
 * CallContractsProposal is a gov Content type for calling contracts on other
 * chains
 */
export interface CallContractsProposalAmino {
  title: string;
  description: string;
  contract_calls: ContractCallAmino[];
}
export interface CallContractsProposalAminoMsg {
  type: "/axelar.axelarnet.v1beta1.CallContractsProposal";
  value: CallContractsProposalAmino;
}
/**
 * CallContractsProposal is a gov Content type for calling contracts on other
 * chains
 */
export interface CallContractsProposalSDKType {
  title: string;
  description: string;
  contract_calls: ContractCallSDKType[];
}
export interface ContractCall {
  chain: string;
  contractAddress: string;
  payload: Uint8Array;
}
export interface ContractCallProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ContractCall";
  value: Uint8Array;
}
export interface ContractCallAmino {
  chain: string;
  contract_address: string;
  payload: Uint8Array;
}
export interface ContractCallAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ContractCall";
  value: ContractCallAmino;
}
export interface ContractCallSDKType {
  chain: string;
  contract_address: string;
  payload: Uint8Array;
}
function createBaseCallContractsProposal(): CallContractsProposal {
  return {
    title: "",
    description: "",
    contractCalls: []
  };
}
export const CallContractsProposal = {
  typeUrl: "/axelar.axelarnet.v1beta1.CallContractsProposal",
  encode(message: CallContractsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.contractCalls) {
      ContractCall.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CallContractsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contractCalls: Array.isArray(object?.contractCalls) ? object.contractCalls.map((e: any) => ContractCall.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CallContractsProposal>): CallContractsProposal {
    const message = createBaseCallContractsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractCalls = object.contractCalls?.map(e => ContractCall.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CallContractsProposalAmino): CallContractsProposal {
    return {
      title: object.title,
      description: object.description,
      contractCalls: Array.isArray(object?.contract_calls) ? object.contract_calls.map((e: any) => ContractCall.fromAmino(e)) : []
    };
  },
  toAmino(message: CallContractsProposal): CallContractsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.contractCalls) {
      obj.contract_calls = message.contractCalls.map(e => e ? ContractCall.toAmino(e) : undefined);
    } else {
      obj.contract_calls = [];
    }
    return obj;
  },
  fromAminoMsg(object: CallContractsProposalAminoMsg): CallContractsProposal {
    return CallContractsProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CallContractsProposalProtoMsg): CallContractsProposal {
    return CallContractsProposal.decode(message.value);
  },
  toProto(message: CallContractsProposal): Uint8Array {
    return CallContractsProposal.encode(message).finish();
  },
  toProtoMsg(message: CallContractsProposal): CallContractsProposalProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.CallContractsProposal",
      value: CallContractsProposal.encode(message).finish()
    };
  }
};
function createBaseContractCall(): ContractCall {
  return {
    chain: "",
    contractAddress: "",
    payload: new Uint8Array()
  };
}
export const ContractCall = {
  typeUrl: "/axelar.axelarnet.v1beta1.ContractCall",
  encode(message: ContractCall, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): ContractCall {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ContractCall>): ContractCall {
    const message = createBaseContractCall();
    message.chain = object.chain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ContractCallAmino): ContractCall {
    return {
      chain: object.chain,
      contractAddress: object.contract_address,
      payload: object.payload
    };
  },
  toAmino(message: ContractCall): ContractCallAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.contract_address = message.contractAddress;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: ContractCallAminoMsg): ContractCall {
    return ContractCall.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractCallProtoMsg): ContractCall {
    return ContractCall.decode(message.value);
  },
  toProto(message: ContractCall): Uint8Array {
    return ContractCall.encode(message).finish();
  },
  toProtoMsg(message: ContractCall): ContractCallProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ContractCall",
      value: ContractCall.encode(message).finish()
    };
  }
};