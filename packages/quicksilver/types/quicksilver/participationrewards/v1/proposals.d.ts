import { BinaryWriter } from "../../../binary";
export interface AddProtocolDataProposal {
    title: string;
    description: string;
    type: string;
    data: string;
    key: string;
}
export interface AddProtocolDataProposalProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposal";
    value: Uint8Array;
}
export interface AddProtocolDataProposalAmino {
    title?: string;
    description?: string;
    type?: string;
    data?: string;
    key?: string;
}
export interface AddProtocolDataProposalAminoMsg {
    type: "/quicksilver.participationrewards.v1.AddProtocolDataProposal";
    value: AddProtocolDataProposalAmino;
}
export interface AddProtocolDataProposalSDKType {
    title: string;
    description: string;
    type: string;
    data: string;
    key: string;
}
export interface AddProtocolDataProposalWithDeposit {
    title: string;
    description: string;
    protocol: string;
    type: string;
    key: string;
    data: Uint8Array;
    deposit: string;
}
export interface AddProtocolDataProposalWithDepositProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposalWithDeposit";
    value: Uint8Array;
}
export interface AddProtocolDataProposalWithDepositAmino {
    title?: string;
    description?: string;
    protocol?: string;
    type?: string;
    key?: string;
    data?: string;
    deposit?: string;
}
export interface AddProtocolDataProposalWithDepositAminoMsg {
    type: "/quicksilver.participationrewards.v1.AddProtocolDataProposalWithDeposit";
    value: AddProtocolDataProposalWithDepositAmino;
}
export interface AddProtocolDataProposalWithDepositSDKType {
    title: string;
    description: string;
    protocol: string;
    type: string;
    key: string;
    data: Uint8Array;
    deposit: string;
}
export interface MsgGovRemoveProtocolData {
    title: string;
    description: string;
    key: string;
    authority: string;
}
export interface MsgGovRemoveProtocolDataProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData";
    value: Uint8Array;
}
export interface MsgGovRemoveProtocolDataAmino {
    title?: string;
    description?: string;
    key?: string;
    authority?: string;
}
export interface MsgGovRemoveProtocolDataAminoMsg {
    type: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData";
    value: MsgGovRemoveProtocolDataAmino;
}
export interface MsgGovRemoveProtocolDataSDKType {
    title: string;
    description: string;
    key: string;
    authority: string;
}
/**
 * MsgGovRemoveProtocolDataResponse defines the MsgGovRemoveProtocolData
 * response type.
 */
export interface MsgGovRemoveProtocolDataResponse {
}
export interface MsgGovRemoveProtocolDataResponseProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolDataResponse";
    value: Uint8Array;
}
/**
 * MsgGovRemoveProtocolDataResponse defines the MsgGovRemoveProtocolData
 * response type.
 */
export interface MsgGovRemoveProtocolDataResponseAmino {
}
export interface MsgGovRemoveProtocolDataResponseAminoMsg {
    type: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolDataResponse";
    value: MsgGovRemoveProtocolDataResponseAmino;
}
/**
 * MsgGovRemoveProtocolDataResponse defines the MsgGovRemoveProtocolData
 * response type.
 */
export interface MsgGovRemoveProtocolDataResponseSDKType {
}
export declare const AddProtocolDataProposal: {
    typeUrl: string;
    encode(message: AddProtocolDataProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddProtocolDataProposal;
    fromPartial(object: Partial<AddProtocolDataProposal>): AddProtocolDataProposal;
    fromAmino(object: AddProtocolDataProposalAmino): AddProtocolDataProposal;
    toAmino(message: AddProtocolDataProposal): AddProtocolDataProposalAmino;
    fromAminoMsg(object: AddProtocolDataProposalAminoMsg): AddProtocolDataProposal;
    fromProtoMsg(message: AddProtocolDataProposalProtoMsg): AddProtocolDataProposal;
    toProto(message: AddProtocolDataProposal): Uint8Array;
    toProtoMsg(message: AddProtocolDataProposal): AddProtocolDataProposalProtoMsg;
};
export declare const AddProtocolDataProposalWithDeposit: {
    typeUrl: string;
    encode(message: AddProtocolDataProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddProtocolDataProposalWithDeposit;
    fromPartial(object: Partial<AddProtocolDataProposalWithDeposit>): AddProtocolDataProposalWithDeposit;
    fromAmino(object: AddProtocolDataProposalWithDepositAmino): AddProtocolDataProposalWithDeposit;
    toAmino(message: AddProtocolDataProposalWithDeposit): AddProtocolDataProposalWithDepositAmino;
    fromAminoMsg(object: AddProtocolDataProposalWithDepositAminoMsg): AddProtocolDataProposalWithDeposit;
    fromProtoMsg(message: AddProtocolDataProposalWithDepositProtoMsg): AddProtocolDataProposalWithDeposit;
    toProto(message: AddProtocolDataProposalWithDeposit): Uint8Array;
    toProtoMsg(message: AddProtocolDataProposalWithDeposit): AddProtocolDataProposalWithDepositProtoMsg;
};
export declare const MsgGovRemoveProtocolData: {
    typeUrl: string;
    encode(message: MsgGovRemoveProtocolData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovRemoveProtocolData;
    fromPartial(object: Partial<MsgGovRemoveProtocolData>): MsgGovRemoveProtocolData;
    fromAmino(object: MsgGovRemoveProtocolDataAmino): MsgGovRemoveProtocolData;
    toAmino(message: MsgGovRemoveProtocolData): MsgGovRemoveProtocolDataAmino;
    fromAminoMsg(object: MsgGovRemoveProtocolDataAminoMsg): MsgGovRemoveProtocolData;
    fromProtoMsg(message: MsgGovRemoveProtocolDataProtoMsg): MsgGovRemoveProtocolData;
    toProto(message: MsgGovRemoveProtocolData): Uint8Array;
    toProtoMsg(message: MsgGovRemoveProtocolData): MsgGovRemoveProtocolDataProtoMsg;
};
export declare const MsgGovRemoveProtocolDataResponse: {
    typeUrl: string;
    encode(_: MsgGovRemoveProtocolDataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovRemoveProtocolDataResponse;
    fromPartial(_: Partial<MsgGovRemoveProtocolDataResponse>): MsgGovRemoveProtocolDataResponse;
    fromAmino(_: MsgGovRemoveProtocolDataResponseAmino): MsgGovRemoveProtocolDataResponse;
    toAmino(_: MsgGovRemoveProtocolDataResponse): MsgGovRemoveProtocolDataResponseAmino;
    fromAminoMsg(object: MsgGovRemoveProtocolDataResponseAminoMsg): MsgGovRemoveProtocolDataResponse;
    fromProtoMsg(message: MsgGovRemoveProtocolDataResponseProtoMsg): MsgGovRemoveProtocolDataResponse;
    toProto(message: MsgGovRemoveProtocolDataResponse): Uint8Array;
    toProtoMsg(message: MsgGovRemoveProtocolDataResponse): MsgGovRemoveProtocolDataResponseProtoMsg;
};
