import { PermArgs, PermArgsAmino, PermArgsSDKType } from "./permission";
import { TemplateAccount, TemplateAccountAmino, TemplateAccountSDKType } from "./spec";
import { NodeIdentity, NodeIdentityAmino, NodeIdentitySDKType } from "./registry";
import { BinaryWriter } from "../binary";
export declare enum Ballot_ProposalState {
    /** PROPOSED - PROPOSED might be expired, if sequence number of any of the input accounts are out of date */
    PROPOSED = 0,
    EXECUTED = 1,
    FAILED = 2,
    UNRECOGNIZED = -1
}
export declare const Ballot_ProposalStateSDKType: typeof Ballot_ProposalState;
export declare const Ballot_ProposalStateAmino: typeof Ballot_ProposalState;
export declare function ballot_ProposalStateFromJSON(object: any): Ballot_ProposalState;
export declare function ballot_ProposalStateToJSON(object: Ballot_ProposalState): string;
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
export declare const Any: {
    typeUrl: string;
    encode(message: Any, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Any;
    fromPartial(object: Partial<Any>): Any;
    fromAmino(object: AnyAmino): Any;
    toAmino(message: Any): AnyAmino;
    fromAminoMsg(object: AnyAminoMsg): Any;
    fromProtoMsg(message: AnyProtoMsg): Any;
    toProto(message: Any): Uint8Array;
    toProtoMsg(message: Any): AnyProtoMsg;
};
export declare const TxInput: {
    typeUrl: string;
    encode(message: TxInput, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TxInput;
    fromPartial(object: Partial<TxInput>): TxInput;
    fromAmino(object: TxInputAmino): TxInput;
    toAmino(message: TxInput): TxInputAmino;
    fromAminoMsg(object: TxInputAminoMsg): TxInput;
    fromProtoMsg(message: TxInputProtoMsg): TxInput;
    toProto(message: TxInput): Uint8Array;
    toProtoMsg(message: TxInput): TxInputProtoMsg;
};
export declare const TxOutput: {
    typeUrl: string;
    encode(message: TxOutput, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TxOutput;
    fromPartial(object: Partial<TxOutput>): TxOutput;
    fromAmino(object: TxOutputAmino): TxOutput;
    toAmino(message: TxOutput): TxOutputAmino;
    fromAminoMsg(object: TxOutputAminoMsg): TxOutput;
    fromProtoMsg(message: TxOutputProtoMsg): TxOutput;
    toProto(message: TxOutput): Uint8Array;
    toProtoMsg(message: TxOutput): TxOutputProtoMsg;
};
export declare const CallTx: {
    typeUrl: string;
    encode(message: CallTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CallTx;
    fromPartial(object: Partial<CallTx>): CallTx;
    fromAmino(object: CallTxAmino): CallTx;
    toAmino(message: CallTx): CallTxAmino;
    fromAminoMsg(object: CallTxAminoMsg): CallTx;
    fromProtoMsg(message: CallTxProtoMsg): CallTx;
    toProto(message: CallTx): Uint8Array;
    toProtoMsg(message: CallTx): CallTxProtoMsg;
};
export declare const ContractMeta: {
    typeUrl: string;
    encode(message: ContractMeta, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractMeta;
    fromPartial(object: Partial<ContractMeta>): ContractMeta;
    fromAmino(object: ContractMetaAmino): ContractMeta;
    toAmino(message: ContractMeta): ContractMetaAmino;
    fromAminoMsg(object: ContractMetaAminoMsg): ContractMeta;
    fromProtoMsg(message: ContractMetaProtoMsg): ContractMeta;
    toProto(message: ContractMeta): Uint8Array;
    toProtoMsg(message: ContractMeta): ContractMetaProtoMsg;
};
export declare const SendTx: {
    typeUrl: string;
    encode(message: SendTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SendTx;
    fromPartial(object: Partial<SendTx>): SendTx;
    fromAmino(object: SendTxAmino): SendTx;
    toAmino(message: SendTx): SendTxAmino;
    fromAminoMsg(object: SendTxAminoMsg): SendTx;
    fromProtoMsg(message: SendTxProtoMsg): SendTx;
    toProto(message: SendTx): Uint8Array;
    toProtoMsg(message: SendTx): SendTxProtoMsg;
};
export declare const PermsTx: {
    typeUrl: string;
    encode(message: PermsTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PermsTx;
    fromPartial(object: Partial<PermsTx>): PermsTx;
    fromAmino(object: PermsTxAmino): PermsTx;
    toAmino(message: PermsTx): PermsTxAmino;
    fromAminoMsg(object: PermsTxAminoMsg): PermsTx;
    fromProtoMsg(message: PermsTxProtoMsg): PermsTx;
    toProto(message: PermsTx): Uint8Array;
    toProtoMsg(message: PermsTx): PermsTxProtoMsg;
};
export declare const NameTx: {
    typeUrl: string;
    encode(message: NameTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NameTx;
    fromPartial(object: Partial<NameTx>): NameTx;
    fromAmino(object: NameTxAmino): NameTx;
    toAmino(message: NameTx): NameTxAmino;
    fromAminoMsg(object: NameTxAminoMsg): NameTx;
    fromProtoMsg(message: NameTxProtoMsg): NameTx;
    toProto(message: NameTx): Uint8Array;
    toProtoMsg(message: NameTx): NameTxProtoMsg;
};
export declare const BondTx: {
    typeUrl: string;
    encode(message: BondTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BondTx;
    fromPartial(object: Partial<BondTx>): BondTx;
    fromAmino(object: BondTxAmino): BondTx;
    toAmino(message: BondTx): BondTxAmino;
    fromAminoMsg(object: BondTxAminoMsg): BondTx;
    fromProtoMsg(message: BondTxProtoMsg): BondTx;
    toProto(message: BondTx): Uint8Array;
    toProtoMsg(message: BondTx): BondTxProtoMsg;
};
export declare const UnbondTx: {
    typeUrl: string;
    encode(message: UnbondTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UnbondTx;
    fromPartial(object: Partial<UnbondTx>): UnbondTx;
    fromAmino(object: UnbondTxAmino): UnbondTx;
    toAmino(message: UnbondTx): UnbondTxAmino;
    fromAminoMsg(object: UnbondTxAminoMsg): UnbondTx;
    fromProtoMsg(message: UnbondTxProtoMsg): UnbondTx;
    toProto(message: UnbondTx): Uint8Array;
    toProtoMsg(message: UnbondTx): UnbondTxProtoMsg;
};
export declare const GovTx: {
    typeUrl: string;
    encode(message: GovTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GovTx;
    fromPartial(object: Partial<GovTx>): GovTx;
    fromAmino(object: GovTxAmino): GovTx;
    toAmino(message: GovTx): GovTxAmino;
    fromAminoMsg(object: GovTxAminoMsg): GovTx;
    fromProtoMsg(message: GovTxProtoMsg): GovTx;
    toProto(message: GovTx): Uint8Array;
    toProtoMsg(message: GovTx): GovTxProtoMsg;
};
export declare const ProposalTx: {
    typeUrl: string;
    encode(message: ProposalTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProposalTx;
    fromPartial(object: Partial<ProposalTx>): ProposalTx;
    fromAmino(object: ProposalTxAmino): ProposalTx;
    toAmino(message: ProposalTx): ProposalTxAmino;
    fromAminoMsg(object: ProposalTxAminoMsg): ProposalTx;
    fromProtoMsg(message: ProposalTxProtoMsg): ProposalTx;
    toProto(message: ProposalTx): Uint8Array;
    toProtoMsg(message: ProposalTx): ProposalTxProtoMsg;
};
export declare const IdentifyTx: {
    typeUrl: string;
    encode(message: IdentifyTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IdentifyTx;
    fromPartial(object: Partial<IdentifyTx>): IdentifyTx;
    fromAmino(object: IdentifyTxAmino): IdentifyTx;
    toAmino(message: IdentifyTx): IdentifyTxAmino;
    fromAminoMsg(object: IdentifyTxAminoMsg): IdentifyTx;
    fromProtoMsg(message: IdentifyTxProtoMsg): IdentifyTx;
    toProto(message: IdentifyTx): Uint8Array;
    toProtoMsg(message: IdentifyTx): IdentifyTxProtoMsg;
};
export declare const BatchTx: {
    typeUrl: string;
    encode(message: BatchTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchTx;
    fromPartial(object: Partial<BatchTx>): BatchTx;
    fromAmino(object: BatchTxAmino): BatchTx;
    toAmino(message: BatchTx): BatchTxAmino;
    fromAminoMsg(object: BatchTxAminoMsg): BatchTx;
    fromProtoMsg(message: BatchTxProtoMsg): BatchTx;
    toProto(message: BatchTx): Uint8Array;
    toProtoMsg(message: BatchTx): BatchTxProtoMsg;
};
export declare const Vote: {
    typeUrl: string;
    encode(message: Vote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Vote;
    fromPartial(object: Partial<Vote>): Vote;
    fromAmino(object: VoteAmino): Vote;
    toAmino(message: Vote): VoteAmino;
    fromAminoMsg(object: VoteAminoMsg): Vote;
    fromProtoMsg(message: VoteProtoMsg): Vote;
    toProto(message: Vote): Uint8Array;
    toProtoMsg(message: Vote): VoteProtoMsg;
};
export declare const Proposal: {
    typeUrl: string;
    encode(message: Proposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Proposal;
    fromPartial(object: Partial<Proposal>): Proposal;
    fromAmino(object: ProposalAmino): Proposal;
    toAmino(message: Proposal): ProposalAmino;
    fromAminoMsg(object: ProposalAminoMsg): Proposal;
    fromProtoMsg(message: ProposalProtoMsg): Proposal;
    toProto(message: Proposal): Uint8Array;
    toProtoMsg(message: Proposal): ProposalProtoMsg;
};
export declare const Ballot: {
    typeUrl: string;
    encode(message: Ballot, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Ballot;
    fromPartial(object: Partial<Ballot>): Ballot;
    fromAmino(object: BallotAmino): Ballot;
    toAmino(message: Ballot): BallotAmino;
    fromAminoMsg(object: BallotAminoMsg): Ballot;
    fromProtoMsg(message: BallotProtoMsg): Ballot;
    toProto(message: Ballot): Uint8Array;
    toProtoMsg(message: Ballot): BallotProtoMsg;
};
