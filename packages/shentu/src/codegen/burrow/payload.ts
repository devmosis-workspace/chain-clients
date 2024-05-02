import { PermArgs, PermArgsAmino, PermArgsSDKType } from "./permission";
import { TemplateAccount, TemplateAccountAmino, TemplateAccountSDKType } from "./spec";
import { NodeIdentity, NodeIdentityAmino, NodeIdentitySDKType } from "./registry";
import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../helpers";
export enum Ballot_ProposalState {
  /** PROPOSED - PROPOSED might be expired, if sequence number of any of the input accounts are out of date */
  PROPOSED = 0,
  EXECUTED = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}
export const Ballot_ProposalStateSDKType = Ballot_ProposalState;
export const Ballot_ProposalStateAmino = Ballot_ProposalState;
export function ballot_ProposalStateFromJSON(object: any): Ballot_ProposalState {
  switch (object) {
    case 0:
    case "PROPOSED":
      return Ballot_ProposalState.PROPOSED;
    case 1:
    case "EXECUTED":
      return Ballot_ProposalState.EXECUTED;
    case 2:
    case "FAILED":
      return Ballot_ProposalState.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Ballot_ProposalState.UNRECOGNIZED;
  }
}
export function ballot_ProposalStateToJSON(object: Ballot_ProposalState): string {
  switch (object) {
    case Ballot_ProposalState.PROPOSED:
      return "PROPOSED";
    case Ballot_ProposalState.EXECUTED:
      return "EXECUTED";
    case Ballot_ProposalState.FAILED:
      return "FAILED";
    case Ballot_ProposalState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Any encodes a sum type for which only one should be set */
export interface Any {
  CallTx?: CallTx;
  SendTx?: SendTx;
  NameTx?: NameTx;
  PermsTx?: PermsTx;
  GovTx?: GovTx;
  BondTx?: BondTx;
  UnbondTx?: UnbondTx;
  BatchTx?: BatchTx;
  ProposalTx?: ProposalTx;
  IdentifyTx?: IdentifyTx;
}
export interface AnyProtoMsg {
  typeUrl: "/payload.Any";
  value: Uint8Array;
}
/** Any encodes a sum type for which only one should be set */
export interface AnyAmino {
  CallTx?: CallTxAmino;
  SendTx?: SendTxAmino;
  NameTx?: NameTxAmino;
  PermsTx?: PermsTxAmino;
  GovTx?: GovTxAmino;
  BondTx?: BondTxAmino;
  UnbondTx?: UnbondTxAmino;
  BatchTx?: BatchTxAmino;
  ProposalTx?: ProposalTxAmino;
  IdentifyTx?: IdentifyTxAmino;
}
export interface AnyAminoMsg {
  type: "/payload.Any";
  value: AnyAmino;
}
/** Any encodes a sum type for which only one should be set */
export interface AnySDKType {
  CallTx?: CallTxSDKType;
  SendTx?: SendTxSDKType;
  NameTx?: NameTxSDKType;
  PermsTx?: PermsTxSDKType;
  GovTx?: GovTxSDKType;
  BondTx?: BondTxSDKType;
  UnbondTx?: UnbondTxSDKType;
  BatchTx?: BatchTxSDKType;
  ProposalTx?: ProposalTxSDKType;
  IdentifyTx?: IdentifyTxSDKType;
}
/**
 * An input to a transaction that may carry an Amount as a charge and whose sequence number must be one greater than
 * that associated with the account at Address at the time of being received
 */
export interface TxInput {
  /** The address from which this input flows */
  Address: Uint8Array;
  /** The amount of native token to transfer from the input address */
  Amount: bigint;
  /** The sequence number that this transaction will induce (i.e. one greater than the input account's current sequence) */
  Sequence: bigint;
}
export interface TxInputProtoMsg {
  typeUrl: "/payload.TxInput";
  value: Uint8Array;
}
/**
 * An input to a transaction that may carry an Amount as a charge and whose sequence number must be one greater than
 * that associated with the account at Address at the time of being received
 */
export interface TxInputAmino {
  /** The address from which this input flows */
  Address?: string;
  /** The amount of native token to transfer from the input address */
  Amount?: string;
  /** The sequence number that this transaction will induce (i.e. one greater than the input account's current sequence) */
  Sequence?: string;
}
export interface TxInputAminoMsg {
  type: "/payload.TxInput";
  value: TxInputAmino;
}
/**
 * An input to a transaction that may carry an Amount as a charge and whose sequence number must be one greater than
 * that associated with the account at Address at the time of being received
 */
export interface TxInputSDKType {
  Address: Uint8Array;
  Amount: bigint;
  Sequence: bigint;
}
/** An output from a transaction that may carry an amount as a charge */
export interface TxOutput {
  /** The address to which this output flows */
  Address: Uint8Array;
  /** The amount of native token to transfer to the output address */
  Amount: bigint;
}
export interface TxOutputProtoMsg {
  typeUrl: "/payload.TxOutput";
  value: Uint8Array;
}
/** An output from a transaction that may carry an amount as a charge */
export interface TxOutputAmino {
  /** The address to which this output flows */
  Address?: string;
  /** The amount of native token to transfer to the output address */
  Amount?: string;
}
export interface TxOutputAminoMsg {
  type: "/payload.TxOutput";
  value: TxOutputAmino;
}
/** An output from a transaction that may carry an amount as a charge */
export interface TxOutputSDKType {
  Address: Uint8Array;
  Amount: bigint;
}
/** A instruction to run smart contract code in the EVM */
export interface CallTx {
  /** The caller's input */
  Input?: TxInput;
  /** The contract address to call or nil if we are creating a contract */
  Address: Uint8Array;
  /** The upper bound on the amount of gas (and therefore EVM execution steps) this CallTx may generate */
  GasLimit: bigint;
  /** Fee to offer validators for processing transaction */
  Fee: bigint;
  /** EVM bytecode */
  Data: Uint8Array;
  /** WASM bytecode */
  WASM: Uint8Array;
  /** Set of contracts this code will deploy */
  ContractMeta: ContractMeta[];
  /** The upper bound on the price per unit of gas */
  GasPrice: bigint;
}
export interface CallTxProtoMsg {
  typeUrl: "/payload.CallTx";
  value: Uint8Array;
}
/** A instruction to run smart contract code in the EVM */
export interface CallTxAmino {
  /** The caller's input */
  Input?: TxInputAmino;
  /** The contract address to call or nil if we are creating a contract */
  Address?: string;
  /** The upper bound on the amount of gas (and therefore EVM execution steps) this CallTx may generate */
  GasLimit?: string;
  /** Fee to offer validators for processing transaction */
  Fee?: string;
  /** EVM bytecode */
  Data?: string;
  /** WASM bytecode */
  WASM?: string;
  /** Set of contracts this code will deploy */
  ContractMeta?: ContractMetaAmino[];
  /** The upper bound on the price per unit of gas */
  GasPrice?: string;
}
export interface CallTxAminoMsg {
  type: "/payload.CallTx";
  value: CallTxAmino;
}
/** A instruction to run smart contract code in the EVM */
export interface CallTxSDKType {
  Input?: TxInputSDKType;
  Address: Uint8Array;
  GasLimit: bigint;
  Fee: bigint;
  Data: Uint8Array;
  WASM: Uint8Array;
  ContractMeta: ContractMetaSDKType[];
  GasPrice: bigint;
}
export interface ContractMeta {
  CodeHash: Uint8Array;
  Meta: string;
}
export interface ContractMetaProtoMsg {
  typeUrl: "/payload.ContractMeta";
  value: Uint8Array;
}
export interface ContractMetaAmino {
  CodeHash?: string;
  Meta?: string;
}
export interface ContractMetaAminoMsg {
  type: "/payload.ContractMeta";
  value: ContractMetaAmino;
}
export interface ContractMetaSDKType {
  CodeHash: Uint8Array;
  Meta: string;
}
/** A payment between two sets of parties */
export interface SendTx {
  /** The payers */
  Inputs: TxInput[];
  /** The payees */
  Outputs: TxOutput[];
}
export interface SendTxProtoMsg {
  typeUrl: "/payload.SendTx";
  value: Uint8Array;
}
/** A payment between two sets of parties */
export interface SendTxAmino {
  /** The payers */
  Inputs?: TxInputAmino[];
  /** The payees */
  Outputs?: TxOutputAmino[];
}
export interface SendTxAminoMsg {
  type: "/payload.SendTx";
  value: SendTxAmino;
}
/** A payment between two sets of parties */
export interface SendTxSDKType {
  Inputs: TxInputSDKType[];
  Outputs: TxOutputSDKType[];
}
/** An update to the on-chain permissions */
export interface PermsTx {
  /** The permission moderator */
  Input?: TxInput;
  /** The modified permissions */
  PermArgs: PermArgs;
}
export interface PermsTxProtoMsg {
  typeUrl: "/payload.PermsTx";
  value: Uint8Array;
}
/** An update to the on-chain permissions */
export interface PermsTxAmino {
  /** The permission moderator */
  Input?: TxInputAmino;
  /** The modified permissions */
  PermArgs?: PermArgsAmino;
}
export interface PermsTxAminoMsg {
  type: "/payload.PermsTx";
  value: PermsTxAmino;
}
/** An update to the on-chain permissions */
export interface PermsTxSDKType {
  Input?: TxInputSDKType;
  PermArgs: PermArgsSDKType;
}
/** A request to claim a globally unique name across the entire chain with some optional data storage leased for a fee */
export interface NameTx {
  /** The name updater */
  Input?: TxInput;
  /** The name to update or create */
  Name: string;
  /** The data to store against the name */
  Data: string;
  /** The fee to provide that will determine the length of the name lease */
  Fee: bigint;
}
export interface NameTxProtoMsg {
  typeUrl: "/payload.NameTx";
  value: Uint8Array;
}
/** A request to claim a globally unique name across the entire chain with some optional data storage leased for a fee */
export interface NameTxAmino {
  /** The name updater */
  Input?: TxInputAmino;
  /** The name to update or create */
  Name?: string;
  /** The data to store against the name */
  Data?: string;
  /** The fee to provide that will determine the length of the name lease */
  Fee?: string;
}
export interface NameTxAminoMsg {
  type: "/payload.NameTx";
  value: NameTxAmino;
}
/** A request to claim a globally unique name across the entire chain with some optional data storage leased for a fee */
export interface NameTxSDKType {
  Input?: TxInputSDKType;
  Name: string;
  Data: string;
  Fee: bigint;
}
export interface BondTx {
  /** Input must be the validator that desires to bond */
  Input?: TxInput;
}
export interface BondTxProtoMsg {
  typeUrl: "/payload.BondTx";
  value: Uint8Array;
}
export interface BondTxAmino {
  /** Input must be the validator that desires to bond */
  Input?: TxInputAmino;
}
export interface BondTxAminoMsg {
  type: "/payload.BondTx";
  value: BondTxAmino;
}
export interface BondTxSDKType {
  Input?: TxInputSDKType;
}
export interface UnbondTx {
  Input?: TxInput;
  /** Account to unbond */
  Output?: TxOutput;
}
export interface UnbondTxProtoMsg {
  typeUrl: "/payload.UnbondTx";
  value: Uint8Array;
}
export interface UnbondTxAmino {
  Input?: TxInputAmino;
  /** Account to unbond */
  Output?: TxOutputAmino;
}
export interface UnbondTxAminoMsg {
  type: "/payload.UnbondTx";
  value: UnbondTxAmino;
}
export interface UnbondTxSDKType {
  Input?: TxInputSDKType;
  Output?: TxOutputSDKType;
}
export interface GovTx {
  Inputs: TxInput[];
  AccountUpdates?: TemplateAccount[];
}
export interface GovTxProtoMsg {
  typeUrl: "/payload.GovTx";
  value: Uint8Array;
}
export interface GovTxAmino {
  Inputs?: TxInputAmino[];
  AccountUpdates?: TemplateAccountAmino[];
}
export interface GovTxAminoMsg {
  type: "/payload.GovTx";
  value: GovTxAmino;
}
export interface GovTxSDKType {
  Inputs: TxInputSDKType[];
  AccountUpdates?: TemplateAccountSDKType[];
}
export interface ProposalTx {
  Input?: TxInput;
  VotingWeight: bigint;
  ProposalHash: Uint8Array;
  Proposal?: Proposal;
}
export interface ProposalTxProtoMsg {
  typeUrl: "/payload.ProposalTx";
  value: Uint8Array;
}
export interface ProposalTxAmino {
  Input?: TxInputAmino;
  VotingWeight?: string;
  ProposalHash?: string;
  Proposal?: ProposalAmino;
}
export interface ProposalTxAminoMsg {
  type: "/payload.ProposalTx";
  value: ProposalTxAmino;
}
export interface ProposalTxSDKType {
  Input?: TxInputSDKType;
  VotingWeight: bigint;
  ProposalHash: Uint8Array;
  Proposal?: ProposalSDKType;
}
export interface IdentifyTx {
  /** Senders */
  Inputs: TxInput[];
  /** Node to register */
  Node?: NodeIdentity;
}
export interface IdentifyTxProtoMsg {
  typeUrl: "/payload.IdentifyTx";
  value: Uint8Array;
}
export interface IdentifyTxAmino {
  /** Senders */
  Inputs?: TxInputAmino[];
  /** Node to register */
  Node?: NodeIdentityAmino;
}
export interface IdentifyTxAminoMsg {
  type: "/payload.IdentifyTx";
  value: IdentifyTxAmino;
}
export interface IdentifyTxSDKType {
  Inputs: TxInputSDKType[];
  Node?: NodeIdentitySDKType;
}
export interface BatchTx {
  Inputs: TxInput[];
  Txs: Any[];
}
export interface BatchTxProtoMsg {
  typeUrl: "/payload.BatchTx";
  value: Uint8Array;
}
export interface BatchTxAmino {
  Inputs?: TxInputAmino[];
  Txs?: AnyAmino[];
}
export interface BatchTxAminoMsg {
  type: "/payload.BatchTx";
  value: BatchTxAmino;
}
export interface BatchTxSDKType {
  Inputs: TxInputSDKType[];
  Txs: AnySDKType[];
}
export interface Vote {
  Address: Uint8Array;
  VotingWeight: bigint;
}
export interface VoteProtoMsg {
  typeUrl: "/payload.Vote";
  value: Uint8Array;
}
export interface VoteAmino {
  Address?: string;
  VotingWeight?: string;
}
export interface VoteAminoMsg {
  type: "/payload.Vote";
  value: VoteAmino;
}
export interface VoteSDKType {
  Address: Uint8Array;
  VotingWeight: bigint;
}
export interface Proposal {
  Name: string;
  Description: string;
  BatchTx?: BatchTx;
}
export interface ProposalProtoMsg {
  typeUrl: "/payload.Proposal";
  value: Uint8Array;
}
export interface ProposalAmino {
  Name?: string;
  Description?: string;
  BatchTx?: BatchTxAmino;
}
export interface ProposalAminoMsg {
  type: "/payload.Proposal";
  value: ProposalAmino;
}
export interface ProposalSDKType {
  Name: string;
  Description: string;
  BatchTx?: BatchTxSDKType;
}
export interface Ballot {
  Proposal?: Proposal;
  FinalizingTx: Uint8Array;
  proposalState: Ballot_ProposalState;
  Votes: Vote[];
}
export interface BallotProtoMsg {
  typeUrl: "/payload.Ballot";
  value: Uint8Array;
}
export interface BallotAmino {
  Proposal?: ProposalAmino;
  FinalizingTx?: string;
  proposalState?: Ballot_ProposalState;
  Votes?: VoteAmino[];
}
export interface BallotAminoMsg {
  type: "/payload.Ballot";
  value: BallotAmino;
}
export interface BallotSDKType {
  Proposal?: ProposalSDKType;
  FinalizingTx: Uint8Array;
  proposalState: Ballot_ProposalState;
  Votes: VoteSDKType[];
}
function createBaseAny(): Any {
  return {
    CallTx: undefined,
    SendTx: undefined,
    NameTx: undefined,
    PermsTx: undefined,
    GovTx: undefined,
    BondTx: undefined,
    UnbondTx: undefined,
    BatchTx: undefined,
    ProposalTx: undefined,
    IdentifyTx: undefined
  };
}
export const Any = {
  typeUrl: "/payload.Any",
  encode(message: Any, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.CallTx !== undefined) {
      CallTx.encode(message.CallTx, writer.uint32(10).fork()).ldelim();
    }
    if (message.SendTx !== undefined) {
      SendTx.encode(message.SendTx, writer.uint32(18).fork()).ldelim();
    }
    if (message.NameTx !== undefined) {
      NameTx.encode(message.NameTx, writer.uint32(26).fork()).ldelim();
    }
    if (message.PermsTx !== undefined) {
      PermsTx.encode(message.PermsTx, writer.uint32(34).fork()).ldelim();
    }
    if (message.GovTx !== undefined) {
      GovTx.encode(message.GovTx, writer.uint32(42).fork()).ldelim();
    }
    if (message.BondTx !== undefined) {
      BondTx.encode(message.BondTx, writer.uint32(50).fork()).ldelim();
    }
    if (message.UnbondTx !== undefined) {
      UnbondTx.encode(message.UnbondTx, writer.uint32(58).fork()).ldelim();
    }
    if (message.BatchTx !== undefined) {
      BatchTx.encode(message.BatchTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.ProposalTx !== undefined) {
      ProposalTx.encode(message.ProposalTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.IdentifyTx !== undefined) {
      IdentifyTx.encode(message.IdentifyTx, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Any {
    return {
      CallTx: isSet(object.CallTx) ? CallTx.fromJSON(object.CallTx) : undefined,
      SendTx: isSet(object.SendTx) ? SendTx.fromJSON(object.SendTx) : undefined,
      NameTx: isSet(object.NameTx) ? NameTx.fromJSON(object.NameTx) : undefined,
      PermsTx: isSet(object.PermsTx) ? PermsTx.fromJSON(object.PermsTx) : undefined,
      GovTx: isSet(object.GovTx) ? GovTx.fromJSON(object.GovTx) : undefined,
      BondTx: isSet(object.BondTx) ? BondTx.fromJSON(object.BondTx) : undefined,
      UnbondTx: isSet(object.UnbondTx) ? UnbondTx.fromJSON(object.UnbondTx) : undefined,
      BatchTx: isSet(object.BatchTx) ? BatchTx.fromJSON(object.BatchTx) : undefined,
      ProposalTx: isSet(object.ProposalTx) ? ProposalTx.fromJSON(object.ProposalTx) : undefined,
      IdentifyTx: isSet(object.IdentifyTx) ? IdentifyTx.fromJSON(object.IdentifyTx) : undefined
    };
  },
  fromPartial(object: Partial<Any>): Any {
    const message = createBaseAny();
    message.CallTx = object.CallTx !== undefined && object.CallTx !== null ? CallTx.fromPartial(object.CallTx) : undefined;
    message.SendTx = object.SendTx !== undefined && object.SendTx !== null ? SendTx.fromPartial(object.SendTx) : undefined;
    message.NameTx = object.NameTx !== undefined && object.NameTx !== null ? NameTx.fromPartial(object.NameTx) : undefined;
    message.PermsTx = object.PermsTx !== undefined && object.PermsTx !== null ? PermsTx.fromPartial(object.PermsTx) : undefined;
    message.GovTx = object.GovTx !== undefined && object.GovTx !== null ? GovTx.fromPartial(object.GovTx) : undefined;
    message.BondTx = object.BondTx !== undefined && object.BondTx !== null ? BondTx.fromPartial(object.BondTx) : undefined;
    message.UnbondTx = object.UnbondTx !== undefined && object.UnbondTx !== null ? UnbondTx.fromPartial(object.UnbondTx) : undefined;
    message.BatchTx = object.BatchTx !== undefined && object.BatchTx !== null ? BatchTx.fromPartial(object.BatchTx) : undefined;
    message.ProposalTx = object.ProposalTx !== undefined && object.ProposalTx !== null ? ProposalTx.fromPartial(object.ProposalTx) : undefined;
    message.IdentifyTx = object.IdentifyTx !== undefined && object.IdentifyTx !== null ? IdentifyTx.fromPartial(object.IdentifyTx) : undefined;
    return message;
  },
  fromAmino(object: AnyAmino): Any {
    return {
      typeUrl: object.type,
      value: object.value
    };
  },
  toAmino(message: Any): AnyAmino {
    const obj: any = {};
    obj.type = message.typeUrl;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AnyAminoMsg): Any {
    return Any.fromAmino(object.value);
  },
  fromProtoMsg(message: AnyProtoMsg): Any {
    return Any.decode(message.value);
  },
  toProto(message: Any): Uint8Array {
    return Any.encode(message).finish();
  },
  toProtoMsg(message: Any): AnyProtoMsg {
    return {
      typeUrl: "/payload.Any",
      value: Any.encode(message).finish()
    };
  }
};
function createBaseTxInput(): TxInput {
  return {
    Address: new Uint8Array(),
    Amount: BigInt(0),
    Sequence: BigInt(0)
  };
}
export const TxInput = {
  typeUrl: "/payload.TxInput",
  encode(message: TxInput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Address.length !== 0) {
      writer.uint32(10).bytes(message.Address);
    }
    if (message.Amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.Amount);
    }
    if (message.Sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.Sequence);
    }
    return writer;
  },
  fromJSON(object: any): TxInput {
    return {
      Address: isSet(object.Address) ? bytesFromBase64(object.Address) : new Uint8Array(),
      Amount: isSet(object.Amount) ? BigInt(object.Amount.toString()) : BigInt(0),
      Sequence: isSet(object.Sequence) ? BigInt(object.Sequence.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TxInput>): TxInput {
    const message = createBaseTxInput();
    message.Address = object.Address ?? new Uint8Array();
    message.Amount = object.Amount !== undefined && object.Amount !== null ? BigInt(object.Amount.toString()) : BigInt(0);
    message.Sequence = object.Sequence !== undefined && object.Sequence !== null ? BigInt(object.Sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxInputAmino): TxInput {
    const message = createBaseTxInput();
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = bytesFromBase64(object.Address);
    }
    if (object.Amount !== undefined && object.Amount !== null) {
      message.Amount = BigInt(object.Amount);
    }
    if (object.Sequence !== undefined && object.Sequence !== null) {
      message.Sequence = BigInt(object.Sequence);
    }
    return message;
  },
  toAmino(message: TxInput): TxInputAmino {
    const obj: any = {};
    obj.Address = message.Address ? base64FromBytes(message.Address) : undefined;
    obj.Amount = message.Amount !== BigInt(0) ? message.Amount.toString() : undefined;
    obj.Sequence = message.Sequence !== BigInt(0) ? message.Sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TxInputAminoMsg): TxInput {
    return TxInput.fromAmino(object.value);
  },
  fromProtoMsg(message: TxInputProtoMsg): TxInput {
    return TxInput.decode(message.value);
  },
  toProto(message: TxInput): Uint8Array {
    return TxInput.encode(message).finish();
  },
  toProtoMsg(message: TxInput): TxInputProtoMsg {
    return {
      typeUrl: "/payload.TxInput",
      value: TxInput.encode(message).finish()
    };
  }
};
function createBaseTxOutput(): TxOutput {
  return {
    Address: new Uint8Array(),
    Amount: BigInt(0)
  };
}
export const TxOutput = {
  typeUrl: "/payload.TxOutput",
  encode(message: TxOutput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Address.length !== 0) {
      writer.uint32(10).bytes(message.Address);
    }
    if (message.Amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.Amount);
    }
    return writer;
  },
  fromJSON(object: any): TxOutput {
    return {
      Address: isSet(object.Address) ? bytesFromBase64(object.Address) : new Uint8Array(),
      Amount: isSet(object.Amount) ? BigInt(object.Amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TxOutput>): TxOutput {
    const message = createBaseTxOutput();
    message.Address = object.Address ?? new Uint8Array();
    message.Amount = object.Amount !== undefined && object.Amount !== null ? BigInt(object.Amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxOutputAmino): TxOutput {
    const message = createBaseTxOutput();
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = bytesFromBase64(object.Address);
    }
    if (object.Amount !== undefined && object.Amount !== null) {
      message.Amount = BigInt(object.Amount);
    }
    return message;
  },
  toAmino(message: TxOutput): TxOutputAmino {
    const obj: any = {};
    obj.Address = message.Address ? base64FromBytes(message.Address) : undefined;
    obj.Amount = message.Amount !== BigInt(0) ? message.Amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TxOutputAminoMsg): TxOutput {
    return TxOutput.fromAmino(object.value);
  },
  fromProtoMsg(message: TxOutputProtoMsg): TxOutput {
    return TxOutput.decode(message.value);
  },
  toProto(message: TxOutput): Uint8Array {
    return TxOutput.encode(message).finish();
  },
  toProtoMsg(message: TxOutput): TxOutputProtoMsg {
    return {
      typeUrl: "/payload.TxOutput",
      value: TxOutput.encode(message).finish()
    };
  }
};
function createBaseCallTx(): CallTx {
  return {
    Input: undefined,
    Address: new Uint8Array(),
    GasLimit: BigInt(0),
    Fee: BigInt(0),
    Data: new Uint8Array(),
    WASM: new Uint8Array(),
    ContractMeta: [],
    GasPrice: BigInt(0)
  };
}
export const CallTx = {
  typeUrl: "/payload.CallTx",
  encode(message: CallTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Input !== undefined) {
      TxInput.encode(message.Input, writer.uint32(10).fork()).ldelim();
    }
    if (message.Address.length !== 0) {
      writer.uint32(18).bytes(message.Address);
    }
    if (message.GasLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.GasLimit);
    }
    if (message.Fee !== BigInt(0)) {
      writer.uint32(32).uint64(message.Fee);
    }
    if (message.Data.length !== 0) {
      writer.uint32(42).bytes(message.Data);
    }
    if (message.WASM.length !== 0) {
      writer.uint32(50).bytes(message.WASM);
    }
    for (const v of message.ContractMeta) {
      ContractMeta.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.GasPrice !== BigInt(0)) {
      writer.uint32(64).uint64(message.GasPrice);
    }
    return writer;
  },
  fromJSON(object: any): CallTx {
    return {
      Input: isSet(object.Input) ? TxInput.fromJSON(object.Input) : undefined,
      Address: isSet(object.Address) ? bytesFromBase64(object.Address) : new Uint8Array(),
      GasLimit: isSet(object.GasLimit) ? BigInt(object.GasLimit.toString()) : BigInt(0),
      Fee: isSet(object.Fee) ? BigInt(object.Fee.toString()) : BigInt(0),
      Data: isSet(object.Data) ? bytesFromBase64(object.Data) : new Uint8Array(),
      WASM: isSet(object.WASM) ? bytesFromBase64(object.WASM) : new Uint8Array(),
      ContractMeta: Array.isArray(object?.ContractMeta) ? object.ContractMeta.map((e: any) => ContractMeta.fromJSON(e)) : [],
      GasPrice: isSet(object.GasPrice) ? BigInt(object.GasPrice.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<CallTx>): CallTx {
    const message = createBaseCallTx();
    message.Input = object.Input !== undefined && object.Input !== null ? TxInput.fromPartial(object.Input) : undefined;
    message.Address = object.Address ?? new Uint8Array();
    message.GasLimit = object.GasLimit !== undefined && object.GasLimit !== null ? BigInt(object.GasLimit.toString()) : BigInt(0);
    message.Fee = object.Fee !== undefined && object.Fee !== null ? BigInt(object.Fee.toString()) : BigInt(0);
    message.Data = object.Data ?? new Uint8Array();
    message.WASM = object.WASM ?? new Uint8Array();
    message.ContractMeta = object.ContractMeta?.map(e => ContractMeta.fromPartial(e)) || [];
    message.GasPrice = object.GasPrice !== undefined && object.GasPrice !== null ? BigInt(object.GasPrice.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CallTxAmino): CallTx {
    const message = createBaseCallTx();
    if (object.Input !== undefined && object.Input !== null) {
      message.Input = TxInput.fromAmino(object.Input);
    }
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = bytesFromBase64(object.Address);
    }
    if (object.GasLimit !== undefined && object.GasLimit !== null) {
      message.GasLimit = BigInt(object.GasLimit);
    }
    if (object.Fee !== undefined && object.Fee !== null) {
      message.Fee = BigInt(object.Fee);
    }
    if (object.Data !== undefined && object.Data !== null) {
      message.Data = bytesFromBase64(object.Data);
    }
    if (object.WASM !== undefined && object.WASM !== null) {
      message.WASM = bytesFromBase64(object.WASM);
    }
    message.ContractMeta = object.ContractMeta?.map(e => ContractMeta.fromAmino(e)) || [];
    if (object.GasPrice !== undefined && object.GasPrice !== null) {
      message.GasPrice = BigInt(object.GasPrice);
    }
    return message;
  },
  toAmino(message: CallTx): CallTxAmino {
    const obj: any = {};
    obj.Input = message.Input ? TxInput.toAmino(message.Input) : undefined;
    obj.Address = message.Address ? base64FromBytes(message.Address) : undefined;
    obj.GasLimit = message.GasLimit !== BigInt(0) ? message.GasLimit.toString() : undefined;
    obj.Fee = message.Fee !== BigInt(0) ? message.Fee.toString() : undefined;
    obj.Data = message.Data ? base64FromBytes(message.Data) : undefined;
    obj.WASM = message.WASM ? base64FromBytes(message.WASM) : undefined;
    if (message.ContractMeta) {
      obj.ContractMeta = message.ContractMeta.map(e => e ? ContractMeta.toAmino(e) : undefined);
    } else {
      obj.ContractMeta = message.ContractMeta;
    }
    obj.GasPrice = message.GasPrice !== BigInt(0) ? message.GasPrice.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CallTxAminoMsg): CallTx {
    return CallTx.fromAmino(object.value);
  },
  fromProtoMsg(message: CallTxProtoMsg): CallTx {
    return CallTx.decode(message.value);
  },
  toProto(message: CallTx): Uint8Array {
    return CallTx.encode(message).finish();
  },
  toProtoMsg(message: CallTx): CallTxProtoMsg {
    return {
      typeUrl: "/payload.CallTx",
      value: CallTx.encode(message).finish()
    };
  }
};
function createBaseContractMeta(): ContractMeta {
  return {
    CodeHash: new Uint8Array(),
    Meta: ""
  };
}
export const ContractMeta = {
  typeUrl: "/payload.ContractMeta",
  encode(message: ContractMeta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.CodeHash.length !== 0) {
      writer.uint32(10).bytes(message.CodeHash);
    }
    if (message.Meta !== "") {
      writer.uint32(18).string(message.Meta);
    }
    return writer;
  },
  fromJSON(object: any): ContractMeta {
    return {
      CodeHash: isSet(object.CodeHash) ? bytesFromBase64(object.CodeHash) : new Uint8Array(),
      Meta: isSet(object.Meta) ? String(object.Meta) : ""
    };
  },
  fromPartial(object: Partial<ContractMeta>): ContractMeta {
    const message = createBaseContractMeta();
    message.CodeHash = object.CodeHash ?? new Uint8Array();
    message.Meta = object.Meta ?? "";
    return message;
  },
  fromAmino(object: ContractMetaAmino): ContractMeta {
    const message = createBaseContractMeta();
    if (object.CodeHash !== undefined && object.CodeHash !== null) {
      message.CodeHash = bytesFromBase64(object.CodeHash);
    }
    if (object.Meta !== undefined && object.Meta !== null) {
      message.Meta = object.Meta;
    }
    return message;
  },
  toAmino(message: ContractMeta): ContractMetaAmino {
    const obj: any = {};
    obj.CodeHash = message.CodeHash ? base64FromBytes(message.CodeHash) : undefined;
    obj.Meta = message.Meta === "" ? undefined : message.Meta;
    return obj;
  },
  fromAminoMsg(object: ContractMetaAminoMsg): ContractMeta {
    return ContractMeta.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractMetaProtoMsg): ContractMeta {
    return ContractMeta.decode(message.value);
  },
  toProto(message: ContractMeta): Uint8Array {
    return ContractMeta.encode(message).finish();
  },
  toProtoMsg(message: ContractMeta): ContractMetaProtoMsg {
    return {
      typeUrl: "/payload.ContractMeta",
      value: ContractMeta.encode(message).finish()
    };
  }
};
function createBaseSendTx(): SendTx {
  return {
    Inputs: [],
    Outputs: []
  };
}
export const SendTx = {
  typeUrl: "/payload.SendTx",
  encode(message: SendTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Inputs) {
      TxInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Outputs) {
      TxOutput.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SendTx {
    return {
      Inputs: Array.isArray(object?.Inputs) ? object.Inputs.map((e: any) => TxInput.fromJSON(e)) : [],
      Outputs: Array.isArray(object?.Outputs) ? object.Outputs.map((e: any) => TxOutput.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SendTx>): SendTx {
    const message = createBaseSendTx();
    message.Inputs = object.Inputs?.map(e => TxInput.fromPartial(e)) || [];
    message.Outputs = object.Outputs?.map(e => TxOutput.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SendTxAmino): SendTx {
    const message = createBaseSendTx();
    message.Inputs = object.Inputs?.map(e => TxInput.fromAmino(e)) || [];
    message.Outputs = object.Outputs?.map(e => TxOutput.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SendTx): SendTxAmino {
    const obj: any = {};
    if (message.Inputs) {
      obj.Inputs = message.Inputs.map(e => e ? TxInput.toAmino(e) : undefined);
    } else {
      obj.Inputs = message.Inputs;
    }
    if (message.Outputs) {
      obj.Outputs = message.Outputs.map(e => e ? TxOutput.toAmino(e) : undefined);
    } else {
      obj.Outputs = message.Outputs;
    }
    return obj;
  },
  fromAminoMsg(object: SendTxAminoMsg): SendTx {
    return SendTx.fromAmino(object.value);
  },
  fromProtoMsg(message: SendTxProtoMsg): SendTx {
    return SendTx.decode(message.value);
  },
  toProto(message: SendTx): Uint8Array {
    return SendTx.encode(message).finish();
  },
  toProtoMsg(message: SendTx): SendTxProtoMsg {
    return {
      typeUrl: "/payload.SendTx",
      value: SendTx.encode(message).finish()
    };
  }
};
function createBasePermsTx(): PermsTx {
  return {
    Input: undefined,
    PermArgs: PermArgs.fromPartial({})
  };
}
export const PermsTx = {
  typeUrl: "/payload.PermsTx",
  encode(message: PermsTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Input !== undefined) {
      TxInput.encode(message.Input, writer.uint32(10).fork()).ldelim();
    }
    if (message.PermArgs !== undefined) {
      PermArgs.encode(message.PermArgs, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PermsTx {
    return {
      Input: isSet(object.Input) ? TxInput.fromJSON(object.Input) : undefined,
      PermArgs: isSet(object.PermArgs) ? PermArgs.fromJSON(object.PermArgs) : undefined
    };
  },
  fromPartial(object: Partial<PermsTx>): PermsTx {
    const message = createBasePermsTx();
    message.Input = object.Input !== undefined && object.Input !== null ? TxInput.fromPartial(object.Input) : undefined;
    message.PermArgs = object.PermArgs !== undefined && object.PermArgs !== null ? PermArgs.fromPartial(object.PermArgs) : undefined;
    return message;
  },
  fromAmino(object: PermsTxAmino): PermsTx {
    const message = createBasePermsTx();
    if (object.Input !== undefined && object.Input !== null) {
      message.Input = TxInput.fromAmino(object.Input);
    }
    if (object.PermArgs !== undefined && object.PermArgs !== null) {
      message.PermArgs = PermArgs.fromAmino(object.PermArgs);
    }
    return message;
  },
  toAmino(message: PermsTx): PermsTxAmino {
    const obj: any = {};
    obj.Input = message.Input ? TxInput.toAmino(message.Input) : undefined;
    obj.PermArgs = message.PermArgs ? PermArgs.toAmino(message.PermArgs) : undefined;
    return obj;
  },
  fromAminoMsg(object: PermsTxAminoMsg): PermsTx {
    return PermsTx.fromAmino(object.value);
  },
  fromProtoMsg(message: PermsTxProtoMsg): PermsTx {
    return PermsTx.decode(message.value);
  },
  toProto(message: PermsTx): Uint8Array {
    return PermsTx.encode(message).finish();
  },
  toProtoMsg(message: PermsTx): PermsTxProtoMsg {
    return {
      typeUrl: "/payload.PermsTx",
      value: PermsTx.encode(message).finish()
    };
  }
};
function createBaseNameTx(): NameTx {
  return {
    Input: undefined,
    Name: "",
    Data: "",
    Fee: BigInt(0)
  };
}
export const NameTx = {
  typeUrl: "/payload.NameTx",
  encode(message: NameTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Input !== undefined) {
      TxInput.encode(message.Input, writer.uint32(10).fork()).ldelim();
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Data !== "") {
      writer.uint32(26).string(message.Data);
    }
    if (message.Fee !== BigInt(0)) {
      writer.uint32(32).uint64(message.Fee);
    }
    return writer;
  },
  fromJSON(object: any): NameTx {
    return {
      Input: isSet(object.Input) ? TxInput.fromJSON(object.Input) : undefined,
      Name: isSet(object.Name) ? String(object.Name) : "",
      Data: isSet(object.Data) ? String(object.Data) : "",
      Fee: isSet(object.Fee) ? BigInt(object.Fee.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<NameTx>): NameTx {
    const message = createBaseNameTx();
    message.Input = object.Input !== undefined && object.Input !== null ? TxInput.fromPartial(object.Input) : undefined;
    message.Name = object.Name ?? "";
    message.Data = object.Data ?? "";
    message.Fee = object.Fee !== undefined && object.Fee !== null ? BigInt(object.Fee.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NameTxAmino): NameTx {
    const message = createBaseNameTx();
    if (object.Input !== undefined && object.Input !== null) {
      message.Input = TxInput.fromAmino(object.Input);
    }
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = object.Name;
    }
    if (object.Data !== undefined && object.Data !== null) {
      message.Data = object.Data;
    }
    if (object.Fee !== undefined && object.Fee !== null) {
      message.Fee = BigInt(object.Fee);
    }
    return message;
  },
  toAmino(message: NameTx): NameTxAmino {
    const obj: any = {};
    obj.Input = message.Input ? TxInput.toAmino(message.Input) : undefined;
    obj.Name = message.Name === "" ? undefined : message.Name;
    obj.Data = message.Data === "" ? undefined : message.Data;
    obj.Fee = message.Fee !== BigInt(0) ? message.Fee.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NameTxAminoMsg): NameTx {
    return NameTx.fromAmino(object.value);
  },
  fromProtoMsg(message: NameTxProtoMsg): NameTx {
    return NameTx.decode(message.value);
  },
  toProto(message: NameTx): Uint8Array {
    return NameTx.encode(message).finish();
  },
  toProtoMsg(message: NameTx): NameTxProtoMsg {
    return {
      typeUrl: "/payload.NameTx",
      value: NameTx.encode(message).finish()
    };
  }
};
function createBaseBondTx(): BondTx {
  return {
    Input: undefined
  };
}
export const BondTx = {
  typeUrl: "/payload.BondTx",
  encode(message: BondTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Input !== undefined) {
      TxInput.encode(message.Input, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BondTx {
    return {
      Input: isSet(object.Input) ? TxInput.fromJSON(object.Input) : undefined
    };
  },
  fromPartial(object: Partial<BondTx>): BondTx {
    const message = createBaseBondTx();
    message.Input = object.Input !== undefined && object.Input !== null ? TxInput.fromPartial(object.Input) : undefined;
    return message;
  },
  fromAmino(object: BondTxAmino): BondTx {
    const message = createBaseBondTx();
    if (object.Input !== undefined && object.Input !== null) {
      message.Input = TxInput.fromAmino(object.Input);
    }
    return message;
  },
  toAmino(message: BondTx): BondTxAmino {
    const obj: any = {};
    obj.Input = message.Input ? TxInput.toAmino(message.Input) : undefined;
    return obj;
  },
  fromAminoMsg(object: BondTxAminoMsg): BondTx {
    return BondTx.fromAmino(object.value);
  },
  fromProtoMsg(message: BondTxProtoMsg): BondTx {
    return BondTx.decode(message.value);
  },
  toProto(message: BondTx): Uint8Array {
    return BondTx.encode(message).finish();
  },
  toProtoMsg(message: BondTx): BondTxProtoMsg {
    return {
      typeUrl: "/payload.BondTx",
      value: BondTx.encode(message).finish()
    };
  }
};
function createBaseUnbondTx(): UnbondTx {
  return {
    Input: undefined,
    Output: undefined
  };
}
export const UnbondTx = {
  typeUrl: "/payload.UnbondTx",
  encode(message: UnbondTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Input !== undefined) {
      TxInput.encode(message.Input, writer.uint32(10).fork()).ldelim();
    }
    if (message.Output !== undefined) {
      TxOutput.encode(message.Output, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UnbondTx {
    return {
      Input: isSet(object.Input) ? TxInput.fromJSON(object.Input) : undefined,
      Output: isSet(object.Output) ? TxOutput.fromJSON(object.Output) : undefined
    };
  },
  fromPartial(object: Partial<UnbondTx>): UnbondTx {
    const message = createBaseUnbondTx();
    message.Input = object.Input !== undefined && object.Input !== null ? TxInput.fromPartial(object.Input) : undefined;
    message.Output = object.Output !== undefined && object.Output !== null ? TxOutput.fromPartial(object.Output) : undefined;
    return message;
  },
  fromAmino(object: UnbondTxAmino): UnbondTx {
    const message = createBaseUnbondTx();
    if (object.Input !== undefined && object.Input !== null) {
      message.Input = TxInput.fromAmino(object.Input);
    }
    if (object.Output !== undefined && object.Output !== null) {
      message.Output = TxOutput.fromAmino(object.Output);
    }
    return message;
  },
  toAmino(message: UnbondTx): UnbondTxAmino {
    const obj: any = {};
    obj.Input = message.Input ? TxInput.toAmino(message.Input) : undefined;
    obj.Output = message.Output ? TxOutput.toAmino(message.Output) : undefined;
    return obj;
  },
  fromAminoMsg(object: UnbondTxAminoMsg): UnbondTx {
    return UnbondTx.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondTxProtoMsg): UnbondTx {
    return UnbondTx.decode(message.value);
  },
  toProto(message: UnbondTx): Uint8Array {
    return UnbondTx.encode(message).finish();
  },
  toProtoMsg(message: UnbondTx): UnbondTxProtoMsg {
    return {
      typeUrl: "/payload.UnbondTx",
      value: UnbondTx.encode(message).finish()
    };
  }
};
function createBaseGovTx(): GovTx {
  return {
    Inputs: [],
    AccountUpdates: []
  };
}
export const GovTx = {
  typeUrl: "/payload.GovTx",
  encode(message: GovTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Inputs) {
      TxInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.AccountUpdates) {
      TemplateAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GovTx {
    return {
      Inputs: Array.isArray(object?.Inputs) ? object.Inputs.map((e: any) => TxInput.fromJSON(e)) : [],
      AccountUpdates: Array.isArray(object?.AccountUpdates) ? object.AccountUpdates.map((e: any) => TemplateAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GovTx>): GovTx {
    const message = createBaseGovTx();
    message.Inputs = object.Inputs?.map(e => TxInput.fromPartial(e)) || [];
    message.AccountUpdates = object.AccountUpdates?.map(e => TemplateAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GovTxAmino): GovTx {
    const message = createBaseGovTx();
    message.Inputs = object.Inputs?.map(e => TxInput.fromAmino(e)) || [];
    message.AccountUpdates = object.AccountUpdates?.map(e => TemplateAccount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GovTx): GovTxAmino {
    const obj: any = {};
    if (message.Inputs) {
      obj.Inputs = message.Inputs.map(e => e ? TxInput.toAmino(e) : undefined);
    } else {
      obj.Inputs = message.Inputs;
    }
    if (message.AccountUpdates) {
      obj.AccountUpdates = message.AccountUpdates.map(e => e ? TemplateAccount.toAmino(e) : undefined);
    } else {
      obj.AccountUpdates = message.AccountUpdates;
    }
    return obj;
  },
  fromAminoMsg(object: GovTxAminoMsg): GovTx {
    return GovTx.fromAmino(object.value);
  },
  fromProtoMsg(message: GovTxProtoMsg): GovTx {
    return GovTx.decode(message.value);
  },
  toProto(message: GovTx): Uint8Array {
    return GovTx.encode(message).finish();
  },
  toProtoMsg(message: GovTx): GovTxProtoMsg {
    return {
      typeUrl: "/payload.GovTx",
      value: GovTx.encode(message).finish()
    };
  }
};
function createBaseProposalTx(): ProposalTx {
  return {
    Input: undefined,
    VotingWeight: BigInt(0),
    ProposalHash: new Uint8Array(),
    Proposal: undefined
  };
}
export const ProposalTx = {
  typeUrl: "/payload.ProposalTx",
  encode(message: ProposalTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Input !== undefined) {
      TxInput.encode(message.Input, writer.uint32(10).fork()).ldelim();
    }
    if (message.VotingWeight !== BigInt(0)) {
      writer.uint32(16).int64(message.VotingWeight);
    }
    if (message.ProposalHash.length !== 0) {
      writer.uint32(26).bytes(message.ProposalHash);
    }
    if (message.Proposal !== undefined) {
      Proposal.encode(message.Proposal, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProposalTx {
    return {
      Input: isSet(object.Input) ? TxInput.fromJSON(object.Input) : undefined,
      VotingWeight: isSet(object.VotingWeight) ? BigInt(object.VotingWeight.toString()) : BigInt(0),
      ProposalHash: isSet(object.ProposalHash) ? bytesFromBase64(object.ProposalHash) : new Uint8Array(),
      Proposal: isSet(object.Proposal) ? Proposal.fromJSON(object.Proposal) : undefined
    };
  },
  fromPartial(object: Partial<ProposalTx>): ProposalTx {
    const message = createBaseProposalTx();
    message.Input = object.Input !== undefined && object.Input !== null ? TxInput.fromPartial(object.Input) : undefined;
    message.VotingWeight = object.VotingWeight !== undefined && object.VotingWeight !== null ? BigInt(object.VotingWeight.toString()) : BigInt(0);
    message.ProposalHash = object.ProposalHash ?? new Uint8Array();
    message.Proposal = object.Proposal !== undefined && object.Proposal !== null ? Proposal.fromPartial(object.Proposal) : undefined;
    return message;
  },
  fromAmino(object: ProposalTxAmino): ProposalTx {
    const message = createBaseProposalTx();
    if (object.Input !== undefined && object.Input !== null) {
      message.Input = TxInput.fromAmino(object.Input);
    }
    if (object.VotingWeight !== undefined && object.VotingWeight !== null) {
      message.VotingWeight = BigInt(object.VotingWeight);
    }
    if (object.ProposalHash !== undefined && object.ProposalHash !== null) {
      message.ProposalHash = bytesFromBase64(object.ProposalHash);
    }
    if (object.Proposal !== undefined && object.Proposal !== null) {
      message.Proposal = Proposal.fromAmino(object.Proposal);
    }
    return message;
  },
  toAmino(message: ProposalTx): ProposalTxAmino {
    const obj: any = {};
    obj.Input = message.Input ? TxInput.toAmino(message.Input) : undefined;
    obj.VotingWeight = message.VotingWeight !== BigInt(0) ? message.VotingWeight.toString() : undefined;
    obj.ProposalHash = message.ProposalHash ? base64FromBytes(message.ProposalHash) : undefined;
    obj.Proposal = message.Proposal ? Proposal.toAmino(message.Proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalTxAminoMsg): ProposalTx {
    return ProposalTx.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalTxProtoMsg): ProposalTx {
    return ProposalTx.decode(message.value);
  },
  toProto(message: ProposalTx): Uint8Array {
    return ProposalTx.encode(message).finish();
  },
  toProtoMsg(message: ProposalTx): ProposalTxProtoMsg {
    return {
      typeUrl: "/payload.ProposalTx",
      value: ProposalTx.encode(message).finish()
    };
  }
};
function createBaseIdentifyTx(): IdentifyTx {
  return {
    Inputs: [],
    Node: undefined
  };
}
export const IdentifyTx = {
  typeUrl: "/payload.IdentifyTx",
  encode(message: IdentifyTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Inputs) {
      TxInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.Node !== undefined) {
      NodeIdentity.encode(message.Node, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IdentifyTx {
    return {
      Inputs: Array.isArray(object?.Inputs) ? object.Inputs.map((e: any) => TxInput.fromJSON(e)) : [],
      Node: isSet(object.Node) ? NodeIdentity.fromJSON(object.Node) : undefined
    };
  },
  fromPartial(object: Partial<IdentifyTx>): IdentifyTx {
    const message = createBaseIdentifyTx();
    message.Inputs = object.Inputs?.map(e => TxInput.fromPartial(e)) || [];
    message.Node = object.Node !== undefined && object.Node !== null ? NodeIdentity.fromPartial(object.Node) : undefined;
    return message;
  },
  fromAmino(object: IdentifyTxAmino): IdentifyTx {
    const message = createBaseIdentifyTx();
    message.Inputs = object.Inputs?.map(e => TxInput.fromAmino(e)) || [];
    if (object.Node !== undefined && object.Node !== null) {
      message.Node = NodeIdentity.fromAmino(object.Node);
    }
    return message;
  },
  toAmino(message: IdentifyTx): IdentifyTxAmino {
    const obj: any = {};
    if (message.Inputs) {
      obj.Inputs = message.Inputs.map(e => e ? TxInput.toAmino(e) : undefined);
    } else {
      obj.Inputs = message.Inputs;
    }
    obj.Node = message.Node ? NodeIdentity.toAmino(message.Node) : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentifyTxAminoMsg): IdentifyTx {
    return IdentifyTx.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentifyTxProtoMsg): IdentifyTx {
    return IdentifyTx.decode(message.value);
  },
  toProto(message: IdentifyTx): Uint8Array {
    return IdentifyTx.encode(message).finish();
  },
  toProtoMsg(message: IdentifyTx): IdentifyTxProtoMsg {
    return {
      typeUrl: "/payload.IdentifyTx",
      value: IdentifyTx.encode(message).finish()
    };
  }
};
function createBaseBatchTx(): BatchTx {
  return {
    Inputs: [],
    Txs: []
  };
}
export const BatchTx = {
  typeUrl: "/payload.BatchTx",
  encode(message: BatchTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Inputs) {
      TxInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Txs) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BatchTx {
    return {
      Inputs: Array.isArray(object?.Inputs) ? object.Inputs.map((e: any) => TxInput.fromJSON(e)) : [],
      Txs: Array.isArray(object?.Txs) ? object.Txs.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<BatchTx>): BatchTx {
    const message = createBaseBatchTx();
    message.Inputs = object.Inputs?.map(e => TxInput.fromPartial(e)) || [];
    message.Txs = object.Txs?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BatchTxAmino): BatchTx {
    const message = createBaseBatchTx();
    message.Inputs = object.Inputs?.map(e => TxInput.fromAmino(e)) || [];
    message.Txs = object.Txs?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BatchTx): BatchTxAmino {
    const obj: any = {};
    if (message.Inputs) {
      obj.Inputs = message.Inputs.map(e => e ? TxInput.toAmino(e) : undefined);
    } else {
      obj.Inputs = message.Inputs;
    }
    if (message.Txs) {
      obj.Txs = message.Txs.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.Txs = message.Txs;
    }
    return obj;
  },
  fromAminoMsg(object: BatchTxAminoMsg): BatchTx {
    return BatchTx.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchTxProtoMsg): BatchTx {
    return BatchTx.decode(message.value);
  },
  toProto(message: BatchTx): Uint8Array {
    return BatchTx.encode(message).finish();
  },
  toProtoMsg(message: BatchTx): BatchTxProtoMsg {
    return {
      typeUrl: "/payload.BatchTx",
      value: BatchTx.encode(message).finish()
    };
  }
};
function createBaseVote(): Vote {
  return {
    Address: new Uint8Array(),
    VotingWeight: BigInt(0)
  };
}
export const Vote = {
  typeUrl: "/payload.Vote",
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Address.length !== 0) {
      writer.uint32(10).bytes(message.Address);
    }
    if (message.VotingWeight !== BigInt(0)) {
      writer.uint32(16).int64(message.VotingWeight);
    }
    return writer;
  },
  fromJSON(object: any): Vote {
    return {
      Address: isSet(object.Address) ? bytesFromBase64(object.Address) : new Uint8Array(),
      VotingWeight: isSet(object.VotingWeight) ? BigInt(object.VotingWeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.Address = object.Address ?? new Uint8Array();
    message.VotingWeight = object.VotingWeight !== undefined && object.VotingWeight !== null ? BigInt(object.VotingWeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.Address !== undefined && object.Address !== null) {
      message.Address = bytesFromBase64(object.Address);
    }
    if (object.VotingWeight !== undefined && object.VotingWeight !== null) {
      message.VotingWeight = BigInt(object.VotingWeight);
    }
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.Address = message.Address ? base64FromBytes(message.Address) : undefined;
    obj.VotingWeight = message.VotingWeight !== BigInt(0) ? message.VotingWeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/payload.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseProposal(): Proposal {
  return {
    Name: "",
    Description: "",
    BatchTx: undefined
  };
}
export const Proposal = {
  typeUrl: "/payload.Proposal",
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(18).string(message.Description);
    }
    if (message.BatchTx !== undefined) {
      BatchTx.encode(message.BatchTx, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Proposal {
    return {
      Name: isSet(object.Name) ? String(object.Name) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      BatchTx: isSet(object.BatchTx) ? BatchTx.fromJSON(object.BatchTx) : undefined
    };
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.Name = object.Name ?? "";
    message.Description = object.Description ?? "";
    message.BatchTx = object.BatchTx !== undefined && object.BatchTx !== null ? BatchTx.fromPartial(object.BatchTx) : undefined;
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = object.Name;
    }
    if (object.Description !== undefined && object.Description !== null) {
      message.Description = object.Description;
    }
    if (object.BatchTx !== undefined && object.BatchTx !== null) {
      message.BatchTx = BatchTx.fromAmino(object.BatchTx);
    }
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.Name = message.Name === "" ? undefined : message.Name;
    obj.Description = message.Description === "" ? undefined : message.Description;
    obj.BatchTx = message.BatchTx ? BatchTx.toAmino(message.BatchTx) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/payload.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseBallot(): Ballot {
  return {
    Proposal: undefined,
    FinalizingTx: new Uint8Array(),
    proposalState: 0,
    Votes: []
  };
}
export const Ballot = {
  typeUrl: "/payload.Ballot",
  encode(message: Ballot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Proposal !== undefined) {
      Proposal.encode(message.Proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.FinalizingTx.length !== 0) {
      writer.uint32(18).bytes(message.FinalizingTx);
    }
    if (message.proposalState !== 0) {
      writer.uint32(32).int32(message.proposalState);
    }
    for (const v of message.Votes) {
      Vote.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Ballot {
    return {
      Proposal: isSet(object.Proposal) ? Proposal.fromJSON(object.Proposal) : undefined,
      FinalizingTx: isSet(object.FinalizingTx) ? bytesFromBase64(object.FinalizingTx) : new Uint8Array(),
      proposalState: isSet(object.proposalState) ? ballot_ProposalStateFromJSON(object.proposalState) : -1,
      Votes: Array.isArray(object?.Votes) ? object.Votes.map((e: any) => Vote.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Ballot>): Ballot {
    const message = createBaseBallot();
    message.Proposal = object.Proposal !== undefined && object.Proposal !== null ? Proposal.fromPartial(object.Proposal) : undefined;
    message.FinalizingTx = object.FinalizingTx ?? new Uint8Array();
    message.proposalState = object.proposalState ?? 0;
    message.Votes = object.Votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BallotAmino): Ballot {
    const message = createBaseBallot();
    if (object.Proposal !== undefined && object.Proposal !== null) {
      message.Proposal = Proposal.fromAmino(object.Proposal);
    }
    if (object.FinalizingTx !== undefined && object.FinalizingTx !== null) {
      message.FinalizingTx = bytesFromBase64(object.FinalizingTx);
    }
    if (object.proposalState !== undefined && object.proposalState !== null) {
      message.proposalState = object.proposalState;
    }
    message.Votes = object.Votes?.map(e => Vote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Ballot): BallotAmino {
    const obj: any = {};
    obj.Proposal = message.Proposal ? Proposal.toAmino(message.Proposal) : undefined;
    obj.FinalizingTx = message.FinalizingTx ? base64FromBytes(message.FinalizingTx) : undefined;
    obj.proposalState = message.proposalState === 0 ? undefined : message.proposalState;
    if (message.Votes) {
      obj.Votes = message.Votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.Votes = message.Votes;
    }
    return obj;
  },
  fromAminoMsg(object: BallotAminoMsg): Ballot {
    return Ballot.fromAmino(object.value);
  },
  fromProtoMsg(message: BallotProtoMsg): Ballot {
    return Ballot.decode(message.value);
  },
  toProto(message: Ballot): Uint8Array {
    return Ballot.encode(message).finish();
  },
  toProtoMsg(message: Ballot): BallotProtoMsg {
    return {
      typeUrl: "/payload.Ballot",
      value: Ballot.encode(message).finish()
    };
  }
};