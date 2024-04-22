import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface AddManagedCellarIDsProposal {
  title: string;
  description: string;
  cellarIds?: CellarIDSet;
  publisherDomain: string;
}
export interface AddManagedCellarIDsProposalProtoMsg {
  typeUrl: "/cork.v2.AddManagedCellarIDsProposal";
  value: Uint8Array;
}
export interface AddManagedCellarIDsProposalAmino {
  title?: string;
  description?: string;
  cellar_ids?: CellarIDSetAmino;
  publisher_domain?: string;
}
export interface AddManagedCellarIDsProposalAminoMsg {
  type: "/cork.v2.AddManagedCellarIDsProposal";
  value: AddManagedCellarIDsProposalAmino;
}
export interface AddManagedCellarIDsProposalSDKType {
  title: string;
  description: string;
  cellar_ids?: CellarIDSetSDKType;
  publisher_domain: string;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDeposit {
  title: string;
  description: string;
  cellarIds: string[];
  publisherDomain: string;
  deposit: string;
}
export interface AddManagedCellarIDsProposalWithDepositProtoMsg {
  typeUrl: "/cork.v2.AddManagedCellarIDsProposalWithDeposit";
  value: Uint8Array;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDepositAmino {
  title?: string;
  description?: string;
  cellar_ids?: string[];
  publisher_domain?: string;
  deposit?: string;
}
export interface AddManagedCellarIDsProposalWithDepositAminoMsg {
  type: "/cork.v2.AddManagedCellarIDsProposalWithDeposit";
  value: AddManagedCellarIDsProposalWithDepositAmino;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDepositSDKType {
  title: string;
  description: string;
  cellar_ids: string[];
  publisher_domain: string;
  deposit: string;
}
export interface RemoveManagedCellarIDsProposal {
  title: string;
  description: string;
  cellarIds?: CellarIDSet;
}
export interface RemoveManagedCellarIDsProposalProtoMsg {
  typeUrl: "/cork.v2.RemoveManagedCellarIDsProposal";
  value: Uint8Array;
}
export interface RemoveManagedCellarIDsProposalAmino {
  title?: string;
  description?: string;
  cellar_ids?: CellarIDSetAmino;
}
export interface RemoveManagedCellarIDsProposalAminoMsg {
  type: "/cork.v2.RemoveManagedCellarIDsProposal";
  value: RemoveManagedCellarIDsProposalAmino;
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
export interface RemoveManagedCellarIDsProposalWithDepositProtoMsg {
  typeUrl: "/cork.v2.RemoveManagedCellarIDsProposalWithDeposit";
  value: Uint8Array;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDepositAmino {
  title?: string;
  description?: string;
  cellar_ids?: string[];
  deposit?: string;
}
export interface RemoveManagedCellarIDsProposalWithDepositAminoMsg {
  type: "/cork.v2.RemoveManagedCellarIDsProposalWithDeposit";
  value: RemoveManagedCellarIDsProposalWithDepositAmino;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDepositSDKType {
  title: string;
  description: string;
  cellar_ids: string[];
  deposit: string;
}
export interface ScheduledCorkProposal {
  title: string;
  description: string;
  blockHeight: bigint;
  targetContractAddress: string;
  /**
   * The JSON representation of a ScheduleRequest defined in the Steward protos
   * 
   * Example: The following is the JSON form of a ScheduleRequest containing a steward.v2.cellar_v1.TrustPosition
   * message, which maps to the `trustPosition(address)` function of the the V1 Cellar contract.
   * 
   * {
   *   "cellar_id": "0x1234567890000000000000000000000000000000",
   *   "cellar_v1": {
   *     "trust_position": {
   *       "erc20_address": "0x1234567890000000000000000000000000000000"
   *     }
   *   },
   *   "block_height": 1000000
   * }
   * 
   * You can use the Steward CLI to generate the required JSON rather than constructing it by hand https://github.com/peggyjv/steward
   */
  contractCallProtoJson: string;
}
export interface ScheduledCorkProposalProtoMsg {
  typeUrl: "/cork.v2.ScheduledCorkProposal";
  value: Uint8Array;
}
export interface ScheduledCorkProposalAmino {
  title?: string;
  description?: string;
  block_height?: string;
  target_contract_address?: string;
  /**
   * The JSON representation of a ScheduleRequest defined in the Steward protos
   * 
   * Example: The following is the JSON form of a ScheduleRequest containing a steward.v2.cellar_v1.TrustPosition
   * message, which maps to the `trustPosition(address)` function of the the V1 Cellar contract.
   * 
   * {
   *   "cellar_id": "0x1234567890000000000000000000000000000000",
   *   "cellar_v1": {
   *     "trust_position": {
   *       "erc20_address": "0x1234567890000000000000000000000000000000"
   *     }
   *   },
   *   "block_height": 1000000
   * }
   * 
   * You can use the Steward CLI to generate the required JSON rather than constructing it by hand https://github.com/peggyjv/steward
   */
  contract_call_proto_json?: string;
}
export interface ScheduledCorkProposalAminoMsg {
  type: "/cork.v2.ScheduledCorkProposal";
  value: ScheduledCorkProposalAmino;
}
export interface ScheduledCorkProposalSDKType {
  title: string;
  description: string;
  block_height: bigint;
  target_contract_address: string;
  contract_call_proto_json: string;
}
/** ScheduledCorkProposalWithDeposit is a specific definition for CLI commands */
export interface ScheduledCorkProposalWithDeposit {
  title: string;
  description: string;
  blockHeight: bigint;
  targetContractAddress: string;
  contractCallProtoJson: string;
  deposit: string;
}
export interface ScheduledCorkProposalWithDepositProtoMsg {
  typeUrl: "/cork.v2.ScheduledCorkProposalWithDeposit";
  value: Uint8Array;
}
/** ScheduledCorkProposalWithDeposit is a specific definition for CLI commands */
export interface ScheduledCorkProposalWithDepositAmino {
  title?: string;
  description?: string;
  block_height?: string;
  target_contract_address?: string;
  contract_call_proto_json?: string;
  deposit?: string;
}
export interface ScheduledCorkProposalWithDepositAminoMsg {
  type: "/cork.v2.ScheduledCorkProposalWithDeposit";
  value: ScheduledCorkProposalWithDepositAmino;
}
/** ScheduledCorkProposalWithDeposit is a specific definition for CLI commands */
export interface ScheduledCorkProposalWithDepositSDKType {
  title: string;
  description: string;
  block_height: bigint;
  target_contract_address: string;
  contract_call_proto_json: string;
  deposit: string;
}
function createBaseAddManagedCellarIDsProposal(): AddManagedCellarIDsProposal {
  return {
    title: "",
    description: "",
    cellarIds: undefined,
    publisherDomain: ""
  };
}
export const AddManagedCellarIDsProposal = {
  typeUrl: "/cork.v2.AddManagedCellarIDsProposal",
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
    if (message.publisherDomain !== "") {
      writer.uint32(34).string(message.publisherDomain);
    }
    return writer;
  },
  fromJSON(object: any): AddManagedCellarIDsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined,
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : ""
    };
  },
  fromPartial(object: Partial<AddManagedCellarIDsProposal>): AddManagedCellarIDsProposal {
    const message = createBaseAddManagedCellarIDsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    message.publisherDomain = object.publisherDomain ?? "";
    return message;
  },
  fromAmino(object: AddManagedCellarIDsProposalAmino): AddManagedCellarIDsProposal {
    const message = createBaseAddManagedCellarIDsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.cellar_ids !== undefined && object.cellar_ids !== null) {
      message.cellarIds = CellarIDSet.fromAmino(object.cellar_ids);
    }
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    return message;
  },
  toAmino(message: AddManagedCellarIDsProposal): AddManagedCellarIDsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.cellar_ids = message.cellarIds ? CellarIDSet.toAmino(message.cellarIds) : undefined;
    obj.publisher_domain = message.publisherDomain;
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
      typeUrl: "/cork.v2.AddManagedCellarIDsProposal",
      value: AddManagedCellarIDsProposal.encode(message).finish()
    };
  }
};
function createBaseAddManagedCellarIDsProposalWithDeposit(): AddManagedCellarIDsProposalWithDeposit {
  return {
    title: "",
    description: "",
    cellarIds: [],
    publisherDomain: "",
    deposit: ""
  };
}
export const AddManagedCellarIDsProposalWithDeposit = {
  typeUrl: "/cork.v2.AddManagedCellarIDsProposalWithDeposit",
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
    if (message.publisherDomain !== "") {
      writer.uint32(34).string(message.publisherDomain);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AddManagedCellarIDsProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : [],
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AddManagedCellarIDsProposalWithDeposit>): AddManagedCellarIDsProposalWithDeposit {
    const message = createBaseAddManagedCellarIDsProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    message.publisherDomain = object.publisherDomain ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AddManagedCellarIDsProposalWithDepositAmino): AddManagedCellarIDsProposalWithDeposit {
    const message = createBaseAddManagedCellarIDsProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.cellarIds = object.cellar_ids?.map(e => e) || [];
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
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
    obj.publisher_domain = message.publisherDomain;
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
      typeUrl: "/cork.v2.AddManagedCellarIDsProposalWithDeposit",
      value: AddManagedCellarIDsProposalWithDeposit.encode(message).finish()
    };
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
  typeUrl: "/cork.v2.RemoveManagedCellarIDsProposal",
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
    const message = createBaseRemoveManagedCellarIDsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.cellar_ids !== undefined && object.cellar_ids !== null) {
      message.cellarIds = CellarIDSet.fromAmino(object.cellar_ids);
    }
    return message;
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
      typeUrl: "/cork.v2.RemoveManagedCellarIDsProposal",
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
  typeUrl: "/cork.v2.RemoveManagedCellarIDsProposalWithDeposit",
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
    const message = createBaseRemoveManagedCellarIDsProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.cellarIds = object.cellar_ids?.map(e => e) || [];
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
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
      typeUrl: "/cork.v2.RemoveManagedCellarIDsProposalWithDeposit",
      value: RemoveManagedCellarIDsProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseScheduledCorkProposal(): ScheduledCorkProposal {
  return {
    title: "",
    description: "",
    blockHeight: BigInt(0),
    targetContractAddress: "",
    contractCallProtoJson: ""
  };
}
export const ScheduledCorkProposal = {
  typeUrl: "/cork.v2.ScheduledCorkProposal",
  encode(message: ScheduledCorkProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    if (message.targetContractAddress !== "") {
      writer.uint32(34).string(message.targetContractAddress);
    }
    if (message.contractCallProtoJson !== "") {
      writer.uint32(42).string(message.contractCallProtoJson);
    }
    return writer;
  },
  fromJSON(object: any): ScheduledCorkProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : "",
      contractCallProtoJson: isSet(object.contractCallProtoJson) ? String(object.contractCallProtoJson) : ""
    };
  },
  fromPartial(object: Partial<ScheduledCorkProposal>): ScheduledCorkProposal {
    const message = createBaseScheduledCorkProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.targetContractAddress = object.targetContractAddress ?? "";
    message.contractCallProtoJson = object.contractCallProtoJson ?? "";
    return message;
  },
  fromAmino(object: ScheduledCorkProposalAmino): ScheduledCorkProposal {
    const message = createBaseScheduledCorkProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.target_contract_address !== undefined && object.target_contract_address !== null) {
      message.targetContractAddress = object.target_contract_address;
    }
    if (object.contract_call_proto_json !== undefined && object.contract_call_proto_json !== null) {
      message.contractCallProtoJson = object.contract_call_proto_json;
    }
    return message;
  },
  toAmino(message: ScheduledCorkProposal): ScheduledCorkProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.target_contract_address = message.targetContractAddress;
    obj.contract_call_proto_json = message.contractCallProtoJson;
    return obj;
  },
  fromAminoMsg(object: ScheduledCorkProposalAminoMsg): ScheduledCorkProposal {
    return ScheduledCorkProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduledCorkProposalProtoMsg): ScheduledCorkProposal {
    return ScheduledCorkProposal.decode(message.value);
  },
  toProto(message: ScheduledCorkProposal): Uint8Array {
    return ScheduledCorkProposal.encode(message).finish();
  },
  toProtoMsg(message: ScheduledCorkProposal): ScheduledCorkProposalProtoMsg {
    return {
      typeUrl: "/cork.v2.ScheduledCorkProposal",
      value: ScheduledCorkProposal.encode(message).finish()
    };
  }
};
function createBaseScheduledCorkProposalWithDeposit(): ScheduledCorkProposalWithDeposit {
  return {
    title: "",
    description: "",
    blockHeight: BigInt(0),
    targetContractAddress: "",
    contractCallProtoJson: "",
    deposit: ""
  };
}
export const ScheduledCorkProposalWithDeposit = {
  typeUrl: "/cork.v2.ScheduledCorkProposalWithDeposit",
  encode(message: ScheduledCorkProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    if (message.targetContractAddress !== "") {
      writer.uint32(34).string(message.targetContractAddress);
    }
    if (message.contractCallProtoJson !== "") {
      writer.uint32(42).string(message.contractCallProtoJson);
    }
    if (message.deposit !== "") {
      writer.uint32(50).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): ScheduledCorkProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : "",
      contractCallProtoJson: isSet(object.contractCallProtoJson) ? String(object.contractCallProtoJson) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<ScheduledCorkProposalWithDeposit>): ScheduledCorkProposalWithDeposit {
    const message = createBaseScheduledCorkProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.targetContractAddress = object.targetContractAddress ?? "";
    message.contractCallProtoJson = object.contractCallProtoJson ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: ScheduledCorkProposalWithDepositAmino): ScheduledCorkProposalWithDeposit {
    const message = createBaseScheduledCorkProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.target_contract_address !== undefined && object.target_contract_address !== null) {
      message.targetContractAddress = object.target_contract_address;
    }
    if (object.contract_call_proto_json !== undefined && object.contract_call_proto_json !== null) {
      message.contractCallProtoJson = object.contract_call_proto_json;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: ScheduledCorkProposalWithDeposit): ScheduledCorkProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.target_contract_address = message.targetContractAddress;
    obj.contract_call_proto_json = message.contractCallProtoJson;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: ScheduledCorkProposalWithDepositAminoMsg): ScheduledCorkProposalWithDeposit {
    return ScheduledCorkProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduledCorkProposalWithDepositProtoMsg): ScheduledCorkProposalWithDeposit {
    return ScheduledCorkProposalWithDeposit.decode(message.value);
  },
  toProto(message: ScheduledCorkProposalWithDeposit): Uint8Array {
    return ScheduledCorkProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: ScheduledCorkProposalWithDeposit): ScheduledCorkProposalWithDepositProtoMsg {
    return {
      typeUrl: "/cork.v2.ScheduledCorkProposalWithDeposit",
      value: ScheduledCorkProposalWithDeposit.encode(message).finish()
    };
  }
};