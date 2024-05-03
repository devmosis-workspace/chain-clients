import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
    /** Voting power of the validator. */
    power: bigint;
    /** EVM address that will be used by the validator to sign messages. */
    evmAddress: string;
}
export interface BridgeValidatorProtoMsg {
    typeUrl: "/celestia.qgb.v1.BridgeValidator";
    value: Uint8Array;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorAmino {
    /** Voting power of the validator. */
    power?: string;
    /** EVM address that will be used by the validator to sign messages. */
    evm_address?: string;
}
export interface BridgeValidatorAminoMsg {
    type: "/celestia.qgb.v1.BridgeValidator";
    value: BridgeValidatorAmino;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
    power: bigint;
    evm_address: string;
}
/**
 * Valset is the EVM Bridge Multsig Set, each qgb validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
    $typeUrl?: "/celestia.qgb.v1.Valset";
    /**
     * Universal nonce defined under:
     * https://github.com/celestiaorg/celestia-app/pull/464
     */
    nonce: bigint;
    /** List of BridgeValidator containing the current validator set. */
    members: BridgeValidator[];
    /** Current chain height */
    height: bigint;
    /** Block time where this valset was created */
    time: Timestamp;
}
export interface ValsetProtoMsg {
    typeUrl: "/celestia.qgb.v1.Valset";
    value: Uint8Array;
}
/**
 * Valset is the EVM Bridge Multsig Set, each qgb validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetAmino {
    /**
     * Universal nonce defined under:
     * https://github.com/celestiaorg/celestia-app/pull/464
     */
    nonce?: string;
    /** List of BridgeValidator containing the current validator set. */
    members?: BridgeValidatorAmino[];
    /** Current chain height */
    height?: string;
    /** Block time where this valset was created */
    time?: string;
}
export interface ValsetAminoMsg {
    type: "/celestia.qgb.v1.Valset";
    value: ValsetAmino;
}
/**
 * Valset is the EVM Bridge Multsig Set, each qgb validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetSDKType {
    $typeUrl?: "/celestia.qgb.v1.Valset";
    nonce: bigint;
    members: BridgeValidatorSDKType[];
    height: bigint;
    time: TimestampSDKType;
}
/**
 * DataCommitment is the data commitment request message that will be signed
 * using orchestrators.
 * It does not contain a `commitment` field as this message will be created
 * inside the state machine and it doesn't make sense to ask tendermint for the
 * commitment there.
 * The range defined by begin_block and end_block is end exclusive.
 */
export interface DataCommitment {
    $typeUrl?: "/celestia.qgb.v1.DataCommitment";
    /**
     * Universal nonce defined under:
     * https://github.com/celestiaorg/celestia-app/pull/464
     */
    nonce: bigint;
    /**
     * First block defining the ordered set of blocks used to create the
     * commitment.
     */
    beginBlock: bigint;
    /**
     * End exclusive last block defining the ordered set of blocks used to create
     * the commitment.
     */
    endBlock: bigint;
    /** Block time where this data commitment was created */
    time: Timestamp;
}
export interface DataCommitmentProtoMsg {
    typeUrl: "/celestia.qgb.v1.DataCommitment";
    value: Uint8Array;
}
/**
 * DataCommitment is the data commitment request message that will be signed
 * using orchestrators.
 * It does not contain a `commitment` field as this message will be created
 * inside the state machine and it doesn't make sense to ask tendermint for the
 * commitment there.
 * The range defined by begin_block and end_block is end exclusive.
 */
export interface DataCommitmentAmino {
    /**
     * Universal nonce defined under:
     * https://github.com/celestiaorg/celestia-app/pull/464
     */
    nonce?: string;
    /**
     * First block defining the ordered set of blocks used to create the
     * commitment.
     */
    begin_block?: string;
    /**
     * End exclusive last block defining the ordered set of blocks used to create
     * the commitment.
     */
    end_block?: string;
    /** Block time where this data commitment was created */
    time?: string;
}
export interface DataCommitmentAminoMsg {
    type: "/celestia.qgb.v1.DataCommitment";
    value: DataCommitmentAmino;
}
/**
 * DataCommitment is the data commitment request message that will be signed
 * using orchestrators.
 * It does not contain a `commitment` field as this message will be created
 * inside the state machine and it doesn't make sense to ask tendermint for the
 * commitment there.
 * The range defined by begin_block and end_block is end exclusive.
 */
export interface DataCommitmentSDKType {
    $typeUrl?: "/celestia.qgb.v1.DataCommitment";
    nonce: bigint;
    begin_block: bigint;
    end_block: bigint;
    time: TimestampSDKType;
}
export declare const BridgeValidator: {
    typeUrl: string;
    encode(message: BridgeValidator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BridgeValidator;
    fromPartial(object: Partial<BridgeValidator>): BridgeValidator;
    fromAmino(object: BridgeValidatorAmino): BridgeValidator;
    toAmino(message: BridgeValidator): BridgeValidatorAmino;
    fromAminoMsg(object: BridgeValidatorAminoMsg): BridgeValidator;
    fromProtoMsg(message: BridgeValidatorProtoMsg): BridgeValidator;
    toProto(message: BridgeValidator): Uint8Array;
    toProtoMsg(message: BridgeValidator): BridgeValidatorProtoMsg;
};
export declare const Valset: {
    typeUrl: string;
    encode(message: Valset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Valset;
    fromPartial(object: Partial<Valset>): Valset;
    fromAmino(object: ValsetAmino): Valset;
    toAmino(message: Valset): ValsetAmino;
    fromAminoMsg(object: ValsetAminoMsg): Valset;
    fromProtoMsg(message: ValsetProtoMsg): Valset;
    toProto(message: Valset): Uint8Array;
    toProtoMsg(message: Valset): ValsetProtoMsg;
};
export declare const DataCommitment: {
    typeUrl: string;
    encode(message: DataCommitment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DataCommitment;
    fromPartial(object: Partial<DataCommitment>): DataCommitment;
    fromAmino(object: DataCommitmentAmino): DataCommitment;
    toAmino(message: DataCommitment): DataCommitmentAmino;
    fromAminoMsg(object: DataCommitmentAminoMsg): DataCommitment;
    fromProtoMsg(message: DataCommitmentProtoMsg): DataCommitment;
    toProto(message: DataCommitment): Uint8Array;
    toProtoMsg(message: DataCommitment): DataCommitmentProtoMsg;
};
