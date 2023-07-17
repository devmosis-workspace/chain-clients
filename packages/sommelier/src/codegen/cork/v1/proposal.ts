import { CellarIDSet, CellarIDSetSDKType } from "./cork";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AddManagedCellarIDsProposal {
  title: string;
  description: string;
  cellarIds?: CellarIDSet;
}
export interface AddManagedCellarIDsProposalSDKType {
  title: string;
  description: string;
  cellar_ids?: CellarIDSetSDKType;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDeposit {
  title: string;
  description: string;
  cellarIds: string[];
  deposit: string;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDepositSDKType {
  title: string;
  description: string;
  cellar_ids: string[];
  deposit: string;
}
export interface RemoveManagedCellarIDsProposal {
  title: string;
  description: string;
  cellarIds?: CellarIDSet;
}
export interface RemoveManagedCellarIDsProposalSDKType {
  title: string;
  description: string;
  cellar_ids?: CellarIDSetSDKType;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDeposit {
  title: string;
  description: string;
  cellarIds: string[];
  deposit: string;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDepositSDKType {
  title: string;
  description: string;
  cellar_ids: string[];
  deposit: string;
}
function createBaseAddManagedCellarIDsProposal(): AddManagedCellarIDsProposal {
  return {
    title: "",
    description: "",
    cellarIds: undefined
  };
}
export const AddManagedCellarIDsProposal = {
  encode(message: AddManagedCellarIDsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.cellarIds !== undefined) {
      CellarIDSet.encode(message.cellarIds, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AddManagedCellarIDsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined
    };
  },
  fromPartial(object: Partial<AddManagedCellarIDsProposal>): AddManagedCellarIDsProposal {
    const message = createBaseAddManagedCellarIDsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    return message;
  }
};
function createBaseAddManagedCellarIDsProposalWithDeposit(): AddManagedCellarIDsProposalWithDeposit {
  return {
    title: "",
    description: "",
    cellarIds: [],
    deposit: ""
  };
}
export const AddManagedCellarIDsProposalWithDeposit = {
  encode(message: AddManagedCellarIDsProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.cellarIds) {
      writer.uint32(26).string(v!);
    }
    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AddManagedCellarIDsProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : [],
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AddManagedCellarIDsProposalWithDeposit>): AddManagedCellarIDsProposalWithDeposit {
    const message = createBaseAddManagedCellarIDsProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    message.deposit = object.deposit ?? "";
    return message;
  }
};
function createBaseRemoveManagedCellarIDsProposal(): RemoveManagedCellarIDsProposal {
  return {
    title: "",
    description: "",
    cellarIds: undefined
  };
}
export const RemoveManagedCellarIDsProposal = {
  encode(message: RemoveManagedCellarIDsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.cellarIds !== undefined) {
      CellarIDSet.encode(message.cellarIds, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RemoveManagedCellarIDsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined
    };
  },
  fromPartial(object: Partial<RemoveManagedCellarIDsProposal>): RemoveManagedCellarIDsProposal {
    const message = createBaseRemoveManagedCellarIDsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    return message;
  }
};
function createBaseRemoveManagedCellarIDsProposalWithDeposit(): RemoveManagedCellarIDsProposalWithDeposit {
  return {
    title: "",
    description: "",
    cellarIds: [],
    deposit: ""
  };
}
export const RemoveManagedCellarIDsProposalWithDeposit = {
  encode(message: RemoveManagedCellarIDsProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.cellarIds) {
      writer.uint32(26).string(v!);
    }
    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): RemoveManagedCellarIDsProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : [],
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<RemoveManagedCellarIDsProposalWithDeposit>): RemoveManagedCellarIDsProposalWithDeposit {
    const message = createBaseRemoveManagedCellarIDsProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    message.deposit = object.deposit ?? "";
    return message;
  }
};