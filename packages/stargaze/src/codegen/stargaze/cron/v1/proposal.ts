import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposalSDKType {
  title: string;
  description: string;
  contract: string;
}
/**
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
/**
 * DemotePrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposalSDKType {
  title: string;
  description: string;
  contract: string;
}
function createBasePromoteToPrivilegedContractProposal(): PromoteToPrivilegedContractProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}
export const PromoteToPrivilegedContractProposal = {
  encode(message: PromoteToPrivilegedContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDemotePrivilegedContractProposal(): DemotePrivilegedContractProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}
export const DemotePrivilegedContractProposal = {
  encode(message: DemotePrivilegedContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};