import { BinaryWriter } from "../../../binary";
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
    title?: string;
    description?: string;
    contract_calls?: ContractCallAmino[];
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
    chain?: string;
    contract_address?: string;
    payload?: string;
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
export declare const CallContractsProposal: {
    typeUrl: string;
    encode(message: CallContractsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CallContractsProposal;
    fromPartial(object: Partial<CallContractsProposal>): CallContractsProposal;
    fromAmino(object: CallContractsProposalAmino): CallContractsProposal;
    toAmino(message: CallContractsProposal): CallContractsProposalAmino;
    fromAminoMsg(object: CallContractsProposalAminoMsg): CallContractsProposal;
    fromProtoMsg(message: CallContractsProposalProtoMsg): CallContractsProposal;
    toProto(message: CallContractsProposal): Uint8Array;
    toProtoMsg(message: CallContractsProposal): CallContractsProposalProtoMsg;
};
export declare const ContractCall: {
    typeUrl: string;
    encode(message: ContractCall, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractCall;
    fromPartial(object: Partial<ContractCall>): ContractCall;
    fromAmino(object: ContractCallAmino): ContractCall;
    toAmino(message: ContractCall): ContractCallAmino;
    fromAminoMsg(object: ContractCallAminoMsg): ContractCall;
    fromProtoMsg(message: ContractCallProtoMsg): ContractCall;
    toProto(message: ContractCall): Uint8Array;
    toProtoMsg(message: ContractCall): ContractCallProtoMsg;
};
