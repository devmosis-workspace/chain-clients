import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface AddManagedCellarIDsProposal {
  title: string;
  description: string;
  cellarIds: CellarIDSet;
}
export interface AddManagedCellarIDsProposalProtoMsg {
  typeUrl: "/cork.v1.AddManagedCellarIDsProposal";
  value: Uint8Array;
}
export interface AddManagedCellarIDsProposalAmino {
  title: string;
  description: string;
  cellar_ids?: CellarIDSetAmino;
}
export interface AddManagedCellarIDsProposalAminoMsg {
  type: "/cork.v1.AddManagedCellarIDsProposal";
  value: AddManagedCellarIDsProposalAmino;
}
export interface AddManagedCellarIDsProposalSDKType {
  title: string;
  description: string;
  cellar_ids: CellarIDSetSDKType;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDeposit {
  title: string;
  description: string;
  cellarIds: string[];
  deposit: string;
}
export interface AddManagedCellarIDsProposalWithDepositProtoMsg {
  typeUrl: "/cork.v1.AddManagedCellarIDsProposalWithDeposit";
  value: Uint8Array;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDepositAmino {
  title: string;
  description: string;
  cellar_ids: string[];
  deposit: string;
}
export interface AddManagedCellarIDsProposalWithDepositAminoMsg {
  type: "/cork.v1.AddManagedCellarIDsProposalWithDeposit";
  value: AddManagedCellarIDsProposalWithDepositAmino;
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
  cellarIds: CellarIDSet;
}
export interface RemoveManagedCellarIDsProposalProtoMsg {
  typeUrl: "/cork.v1.RemoveManagedCellarIDsProposal";
  value: Uint8Array;
}
export interface RemoveManagedCellarIDsProposalAmino {
  title: string;
  description: string;
  cellar_ids?: CellarIDSetAmino;
}
export interface RemoveManagedCellarIDsProposalAminoMsg {
  type: "/cork.v1.RemoveManagedCellarIDsProposal";
  value: RemoveManagedCellarIDsProposalAmino;
}
export interface RemoveManagedCellarIDsProposalSDKType {
  title: string;
  description: string;
  cellar_ids: CellarIDSetSDKType;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDeposit {
  title: string;
  description: string;
  cellarIds: string[];
  deposit: string;
}
export interface RemoveManagedCellarIDsProposalWithDepositProtoMsg {
  typeUrl: "/cork.v1.RemoveManagedCellarIDsProposalWithDeposit";
  value: Uint8Array;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDepositAmino {
  title: string;
  description: string;
  cellar_ids: string[];
  deposit: string;
}
export interface RemoveManagedCellarIDsProposalWithDepositAminoMsg {
  type: "/cork.v1.RemoveManagedCellarIDsProposalWithDeposit";
  value: RemoveManagedCellarIDsProposalWithDepositAmino;
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
    cellarIds: CellarIDSet.fromPartial({})
  };
}
export const AddManagedCellarIDsProposal = {
  typeUrl: "/cork.v1.AddManagedCellarIDsProposal",
  encode(message: AddManagedCellarIDsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AddManagedCellarIDsProposalAmino): AddManagedCellarIDsProposal {
    return {
      title: object.title,
      description: object.description,
      cellarIds: object?.cellar_ids ? CellarIDSet.fromAmino(object.cellar_ids) : undefined
    };
  },
  toAmino(message: AddManagedCellarIDsProposal): AddManagedCellarIDsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.cellar_ids = message.cellarIds ? CellarIDSet.toAmino(message.cellarIds) : undefined;
    return obj;
  },
  fromAminoMsg(object: AddManagedCellarIDsProposalAminoMsg): AddManagedCellarIDsProposal {
    return AddManagedCellarIDsProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddManagedCellarIDsProposalProtoMsg): AddManagedCellarIDsProposal {
    return AddManagedCellarIDsProposal.decode(message.value);
  },
  toProto(message: AddManagedCellarIDsProposal): Uint8Array {
    return AddManagedCellarIDsProposal.encode(message).finish();
  },
  toProtoMsg(message: AddManagedCellarIDsProposal): AddManagedCellarIDsProposalProtoMsg {
    return {
      typeUrl: "/cork.v1.AddManagedCellarIDsProposal",
      value: AddManagedCellarIDsProposal.encode(message).finish()
    };
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
  typeUrl: "/cork.v1.AddManagedCellarIDsProposalWithDeposit",
  encode(message: AddManagedCellarIDsProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AddManagedCellarIDsProposalWithDepositAmino): AddManagedCellarIDsProposalWithDeposit {
    return {
      title: object.title,
      description: object.description,
      cellarIds: Array.isArray(object?.cellar_ids) ? object.cellar_ids.map((e: any) => e) : [],
      deposit: object.deposit
    };
  },
  toAmino(message: AddManagedCellarIDsProposalWithDeposit): AddManagedCellarIDsProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.cellarIds) {
      obj.cellar_ids = message.cellarIds.map(e => e);
    } else {
      obj.cellar_ids = [];
    }
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AddManagedCellarIDsProposalWithDepositAminoMsg): AddManagedCellarIDsProposalWithDeposit {
    return AddManagedCellarIDsProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: AddManagedCellarIDsProposalWithDepositProtoMsg): AddManagedCellarIDsProposalWithDeposit {
    return AddManagedCellarIDsProposalWithDeposit.decode(message.value);
  },
  toProto(message: AddManagedCellarIDsProposalWithDeposit): Uint8Array {
    return AddManagedCellarIDsProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: AddManagedCellarIDsProposalWithDeposit): AddManagedCellarIDsProposalWithDepositProtoMsg {
    return {
      typeUrl: "/cork.v1.AddManagedCellarIDsProposalWithDeposit",
      value: AddManagedCellarIDsProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseRemoveManagedCellarIDsProposal(): RemoveManagedCellarIDsProposal {
  return {
    title: "",
    description: "",
    cellarIds: CellarIDSet.fromPartial({})
  };
}
export const RemoveManagedCellarIDsProposal = {
  typeUrl: "/cork.v1.RemoveManagedCellarIDsProposal",
  encode(message: RemoveManagedCellarIDsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RemoveManagedCellarIDsProposalAmino): RemoveManagedCellarIDsProposal {
    return {
      title: object.title,
      description: object.description,
      cellarIds: object?.cellar_ids ? CellarIDSet.fromAmino(object.cellar_ids) : undefined
    };
  },
  toAmino(message: RemoveManagedCellarIDsProposal): RemoveManagedCellarIDsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.cellar_ids = message.cellarIds ? CellarIDSet.toAmino(message.cellarIds) : undefined;
    return obj;
  },
  fromAminoMsg(object: RemoveManagedCellarIDsProposalAminoMsg): RemoveManagedCellarIDsProposal {
    return RemoveManagedCellarIDsProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveManagedCellarIDsProposalProtoMsg): RemoveManagedCellarIDsProposal {
    return RemoveManagedCellarIDsProposal.decode(message.value);
  },
  toProto(message: RemoveManagedCellarIDsProposal): Uint8Array {
    return RemoveManagedCellarIDsProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveManagedCellarIDsProposal): RemoveManagedCellarIDsProposalProtoMsg {
    return {
      typeUrl: "/cork.v1.RemoveManagedCellarIDsProposal",
      value: RemoveManagedCellarIDsProposal.encode(message).finish()
    };
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
  typeUrl: "/cork.v1.RemoveManagedCellarIDsProposalWithDeposit",
  encode(message: RemoveManagedCellarIDsProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RemoveManagedCellarIDsProposalWithDepositAmino): RemoveManagedCellarIDsProposalWithDeposit {
    return {
      title: object.title,
      description: object.description,
      cellarIds: Array.isArray(object?.cellar_ids) ? object.cellar_ids.map((e: any) => e) : [],
      deposit: object.deposit
    };
  },
  toAmino(message: RemoveManagedCellarIDsProposalWithDeposit): RemoveManagedCellarIDsProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.cellarIds) {
      obj.cellar_ids = message.cellarIds.map(e => e);
    } else {
      obj.cellar_ids = [];
    }
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: RemoveManagedCellarIDsProposalWithDepositAminoMsg): RemoveManagedCellarIDsProposalWithDeposit {
    return RemoveManagedCellarIDsProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveManagedCellarIDsProposalWithDepositProtoMsg): RemoveManagedCellarIDsProposalWithDeposit {
    return RemoveManagedCellarIDsProposalWithDeposit.decode(message.value);
  },
  toProto(message: RemoveManagedCellarIDsProposalWithDeposit): Uint8Array {
    return RemoveManagedCellarIDsProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: RemoveManagedCellarIDsProposalWithDeposit): RemoveManagedCellarIDsProposalWithDepositProtoMsg {
    return {
      typeUrl: "/cork.v1.RemoveManagedCellarIDsProposalWithDeposit",
      value: RemoveManagedCellarIDsProposalWithDeposit.encode(message).finish()
    };
  }
};