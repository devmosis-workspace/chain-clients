import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/**
 * Deprecated: Do not use. To promote a contract, a
 * MsgPromoteToPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface PromoteToPrivilegedContractProposal {
  $typeUrl?: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
export interface PromoteToPrivilegedContractProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
  value: Uint8Array;
}
/**
 * Deprecated: Do not use. To promote a contract, a
 * MsgPromoteToPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface PromoteToPrivilegedContractProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** Contract is the bech32 address of the smart contract */
  contract?: string;
}
export interface PromoteToPrivilegedContractProposalAminoMsg {
  type: "cron/PromoteToPrivilegedContractProposal";
  value: PromoteToPrivilegedContractProposalAmino;
}
/**
 * Deprecated: Do not use. To promote a contract, a
 * MsgPromoteToPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface PromoteToPrivilegedContractProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal";
  title: string;
  description: string;
  contract: string;
}
/**
 * Deprecated: Do not use. To demote a contract, a
 * MsgDemoteFromPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface DemotePrivilegedContractProposal {
  $typeUrl?: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
export interface DemotePrivilegedContractProposalProtoMsg {
  typeUrl: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
  value: Uint8Array;
}
/**
 * Deprecated: Do not use. To demote a contract, a
 * MsgDemoteFromPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface DemotePrivilegedContractProposalAmino {
  /** Title is a short summary */
  title?: string;
  /** Description is a human readable text */
  description?: string;
  /** Contract is the bech32 address of the smart contract */
  contract?: string;
}
export interface DemotePrivilegedContractProposalAminoMsg {
  type: "cron/DemotePrivilegedContractProposal";
  value: DemotePrivilegedContractProposalAmino;
}
/**
 * Deprecated: Do not use. To demote a contract, a
 * MsgDemoteFromPrivilegedContract can be invoked from the x/gov module via a v1
 * governance proposal
 */
/** @deprecated */
export interface DemotePrivilegedContractProposalSDKType {
  $typeUrl?: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal";
  title: string;
  description: string;
  contract: string;
}
function createBasePromoteToPrivilegedContractProposal(): PromoteToPrivilegedContractProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal",
    title: "",
    description: "",
    contract: ""
  };
}
export const PromoteToPrivilegedContractProposal = {
  typeUrl: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal",
  encode(message: PromoteToPrivilegedContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  fromJSON(object: any): PromoteToPrivilegedContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object: Partial<PromoteToPrivilegedContractProposal>): PromoteToPrivilegedContractProposal {
    const message = createBasePromoteToPrivilegedContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: PromoteToPrivilegedContractProposalAmino): PromoteToPrivilegedContractProposal {
    const message = createBasePromoteToPrivilegedContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: PromoteToPrivilegedContractProposal): PromoteToPrivilegedContractProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: PromoteToPrivilegedContractProposalAminoMsg): PromoteToPrivilegedContractProposal {
    return PromoteToPrivilegedContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message: PromoteToPrivilegedContractProposal): PromoteToPrivilegedContractProposalAminoMsg {
    return {
      type: "cron/PromoteToPrivilegedContractProposal",
      value: PromoteToPrivilegedContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: PromoteToPrivilegedContractProposalProtoMsg): PromoteToPrivilegedContractProposal {
    return PromoteToPrivilegedContractProposal.decode(message.value);
  },
  toProto(message: PromoteToPrivilegedContractProposal): Uint8Array {
    return PromoteToPrivilegedContractProposal.encode(message).finish();
  },
  toProtoMsg(message: PromoteToPrivilegedContractProposal): PromoteToPrivilegedContractProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.PromoteToPrivilegedContractProposal",
      value: PromoteToPrivilegedContractProposal.encode(message).finish()
    };
  }
};
function createBaseDemotePrivilegedContractProposal(): DemotePrivilegedContractProposal {
  return {
    $typeUrl: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal",
    title: "",
    description: "",
    contract: ""
  };
}
export const DemotePrivilegedContractProposal = {
  typeUrl: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal",
  encode(message: DemotePrivilegedContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  fromJSON(object: any): DemotePrivilegedContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object: Partial<DemotePrivilegedContractProposal>): DemotePrivilegedContractProposal {
    const message = createBaseDemotePrivilegedContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: DemotePrivilegedContractProposalAmino): DemotePrivilegedContractProposal {
    const message = createBaseDemotePrivilegedContractProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: DemotePrivilegedContractProposal): DemotePrivilegedContractProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: DemotePrivilegedContractProposalAminoMsg): DemotePrivilegedContractProposal {
    return DemotePrivilegedContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message: DemotePrivilegedContractProposal): DemotePrivilegedContractProposalAminoMsg {
    return {
      type: "cron/DemotePrivilegedContractProposal",
      value: DemotePrivilegedContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: DemotePrivilegedContractProposalProtoMsg): DemotePrivilegedContractProposal {
    return DemotePrivilegedContractProposal.decode(message.value);
  },
  toProto(message: DemotePrivilegedContractProposal): Uint8Array {
    return DemotePrivilegedContractProposal.encode(message).finish();
  },
  toProtoMsg(message: DemotePrivilegedContractProposal): DemotePrivilegedContractProposalProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.cron.v1.DemotePrivilegedContractProposal",
      value: DemotePrivilegedContractProposal.encode(message).finish()
    };
  }
};