import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
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
export declare const AddManagedCellarIDsProposal: {
    typeUrl: string;
    encode(message: AddManagedCellarIDsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddManagedCellarIDsProposal;
    fromPartial(object: Partial<AddManagedCellarIDsProposal>): AddManagedCellarIDsProposal;
    fromAmino(object: AddManagedCellarIDsProposalAmino): AddManagedCellarIDsProposal;
    toAmino(message: AddManagedCellarIDsProposal): AddManagedCellarIDsProposalAmino;
    fromAminoMsg(object: AddManagedCellarIDsProposalAminoMsg): AddManagedCellarIDsProposal;
    fromProtoMsg(message: AddManagedCellarIDsProposalProtoMsg): AddManagedCellarIDsProposal;
    toProto(message: AddManagedCellarIDsProposal): Uint8Array;
    toProtoMsg(message: AddManagedCellarIDsProposal): AddManagedCellarIDsProposalProtoMsg;
};
export declare const AddManagedCellarIDsProposalWithDeposit: {
    typeUrl: string;
    encode(message: AddManagedCellarIDsProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddManagedCellarIDsProposalWithDeposit;
    fromPartial(object: Partial<AddManagedCellarIDsProposalWithDeposit>): AddManagedCellarIDsProposalWithDeposit;
    fromAmino(object: AddManagedCellarIDsProposalWithDepositAmino): AddManagedCellarIDsProposalWithDeposit;
    toAmino(message: AddManagedCellarIDsProposalWithDeposit): AddManagedCellarIDsProposalWithDepositAmino;
    fromAminoMsg(object: AddManagedCellarIDsProposalWithDepositAminoMsg): AddManagedCellarIDsProposalWithDeposit;
    fromProtoMsg(message: AddManagedCellarIDsProposalWithDepositProtoMsg): AddManagedCellarIDsProposalWithDeposit;
    toProto(message: AddManagedCellarIDsProposalWithDeposit): Uint8Array;
    toProtoMsg(message: AddManagedCellarIDsProposalWithDeposit): AddManagedCellarIDsProposalWithDepositProtoMsg;
};
export declare const RemoveManagedCellarIDsProposal: {
    typeUrl: string;
    encode(message: RemoveManagedCellarIDsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveManagedCellarIDsProposal;
    fromPartial(object: Partial<RemoveManagedCellarIDsProposal>): RemoveManagedCellarIDsProposal;
    fromAmino(object: RemoveManagedCellarIDsProposalAmino): RemoveManagedCellarIDsProposal;
    toAmino(message: RemoveManagedCellarIDsProposal): RemoveManagedCellarIDsProposalAmino;
    fromAminoMsg(object: RemoveManagedCellarIDsProposalAminoMsg): RemoveManagedCellarIDsProposal;
    fromProtoMsg(message: RemoveManagedCellarIDsProposalProtoMsg): RemoveManagedCellarIDsProposal;
    toProto(message: RemoveManagedCellarIDsProposal): Uint8Array;
    toProtoMsg(message: RemoveManagedCellarIDsProposal): RemoveManagedCellarIDsProposalProtoMsg;
};
export declare const RemoveManagedCellarIDsProposalWithDeposit: {
    typeUrl: string;
    encode(message: RemoveManagedCellarIDsProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveManagedCellarIDsProposalWithDeposit;
    fromPartial(object: Partial<RemoveManagedCellarIDsProposalWithDeposit>): RemoveManagedCellarIDsProposalWithDeposit;
    fromAmino(object: RemoveManagedCellarIDsProposalWithDepositAmino): RemoveManagedCellarIDsProposalWithDeposit;
    toAmino(message: RemoveManagedCellarIDsProposalWithDeposit): RemoveManagedCellarIDsProposalWithDepositAmino;
    fromAminoMsg(object: RemoveManagedCellarIDsProposalWithDepositAminoMsg): RemoveManagedCellarIDsProposalWithDeposit;
    fromProtoMsg(message: RemoveManagedCellarIDsProposalWithDepositProtoMsg): RemoveManagedCellarIDsProposalWithDeposit;
    toProto(message: RemoveManagedCellarIDsProposalWithDeposit): Uint8Array;
    toProtoMsg(message: RemoveManagedCellarIDsProposalWithDeposit): RemoveManagedCellarIDsProposalWithDepositProtoMsg;
};
export declare const ScheduledCorkProposal: {
    typeUrl: string;
    encode(message: ScheduledCorkProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ScheduledCorkProposal;
    fromPartial(object: Partial<ScheduledCorkProposal>): ScheduledCorkProposal;
    fromAmino(object: ScheduledCorkProposalAmino): ScheduledCorkProposal;
    toAmino(message: ScheduledCorkProposal): ScheduledCorkProposalAmino;
    fromAminoMsg(object: ScheduledCorkProposalAminoMsg): ScheduledCorkProposal;
    fromProtoMsg(message: ScheduledCorkProposalProtoMsg): ScheduledCorkProposal;
    toProto(message: ScheduledCorkProposal): Uint8Array;
    toProtoMsg(message: ScheduledCorkProposal): ScheduledCorkProposalProtoMsg;
};
export declare const ScheduledCorkProposalWithDeposit: {
    typeUrl: string;
    encode(message: ScheduledCorkProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ScheduledCorkProposalWithDeposit;
    fromPartial(object: Partial<ScheduledCorkProposalWithDeposit>): ScheduledCorkProposalWithDeposit;
    fromAmino(object: ScheduledCorkProposalWithDepositAmino): ScheduledCorkProposalWithDeposit;
    toAmino(message: ScheduledCorkProposalWithDeposit): ScheduledCorkProposalWithDepositAmino;
    fromAminoMsg(object: ScheduledCorkProposalWithDepositAminoMsg): ScheduledCorkProposalWithDeposit;
    fromProtoMsg(message: ScheduledCorkProposalWithDepositProtoMsg): ScheduledCorkProposalWithDeposit;
    toProto(message: ScheduledCorkProposalWithDeposit): Uint8Array;
    toProtoMsg(message: ScheduledCorkProposalWithDeposit): ScheduledCorkProposalWithDepositProtoMsg;
};
