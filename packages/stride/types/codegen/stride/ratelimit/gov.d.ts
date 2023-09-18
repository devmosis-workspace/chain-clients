import { BinaryWriter } from "../../binary";
export interface AddRateLimitProposal {
    title: string;
    description: string;
    denom: string;
    channelId: string;
    maxPercentSend: string;
    maxPercentRecv: string;
    durationHours: bigint;
    deposit: string;
}
export interface AddRateLimitProposalProtoMsg {
    typeUrl: "/stride.ratelimit.AddRateLimitProposal";
    value: Uint8Array;
}
export interface AddRateLimitProposalAmino {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    max_percent_send: string;
    max_percent_recv: string;
    duration_hours: string;
    deposit: string;
}
export interface AddRateLimitProposalAminoMsg {
    type: "/stride.ratelimit.AddRateLimitProposal";
    value: AddRateLimitProposalAmino;
}
export interface AddRateLimitProposalSDKType {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    max_percent_send: string;
    max_percent_recv: string;
    duration_hours: bigint;
    deposit: string;
}
export interface UpdateRateLimitProposal {
    title: string;
    description: string;
    denom: string;
    channelId: string;
    maxPercentSend: string;
    maxPercentRecv: string;
    durationHours: bigint;
    deposit: string;
}
export interface UpdateRateLimitProposalProtoMsg {
    typeUrl: "/stride.ratelimit.UpdateRateLimitProposal";
    value: Uint8Array;
}
export interface UpdateRateLimitProposalAmino {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    max_percent_send: string;
    max_percent_recv: string;
    duration_hours: string;
    deposit: string;
}
export interface UpdateRateLimitProposalAminoMsg {
    type: "/stride.ratelimit.UpdateRateLimitProposal";
    value: UpdateRateLimitProposalAmino;
}
export interface UpdateRateLimitProposalSDKType {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    max_percent_send: string;
    max_percent_recv: string;
    duration_hours: bigint;
    deposit: string;
}
export interface RemoveRateLimitProposal {
    title: string;
    description: string;
    denom: string;
    channelId: string;
    deposit: string;
}
export interface RemoveRateLimitProposalProtoMsg {
    typeUrl: "/stride.ratelimit.RemoveRateLimitProposal";
    value: Uint8Array;
}
export interface RemoveRateLimitProposalAmino {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    deposit: string;
}
export interface RemoveRateLimitProposalAminoMsg {
    type: "/stride.ratelimit.RemoveRateLimitProposal";
    value: RemoveRateLimitProposalAmino;
}
export interface RemoveRateLimitProposalSDKType {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    deposit: string;
}
export interface ResetRateLimitProposal {
    title: string;
    description: string;
    denom: string;
    channelId: string;
    deposit: string;
}
export interface ResetRateLimitProposalProtoMsg {
    typeUrl: "/stride.ratelimit.ResetRateLimitProposal";
    value: Uint8Array;
}
export interface ResetRateLimitProposalAmino {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    deposit: string;
}
export interface ResetRateLimitProposalAminoMsg {
    type: "/stride.ratelimit.ResetRateLimitProposal";
    value: ResetRateLimitProposalAmino;
}
export interface ResetRateLimitProposalSDKType {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    deposit: string;
}
export declare const AddRateLimitProposal: {
    typeUrl: string;
    encode(message: AddRateLimitProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddRateLimitProposal;
    fromPartial(object: Partial<AddRateLimitProposal>): AddRateLimitProposal;
    fromAmino(object: AddRateLimitProposalAmino): AddRateLimitProposal;
    toAmino(message: AddRateLimitProposal): AddRateLimitProposalAmino;
    fromAminoMsg(object: AddRateLimitProposalAminoMsg): AddRateLimitProposal;
    fromProtoMsg(message: AddRateLimitProposalProtoMsg): AddRateLimitProposal;
    toProto(message: AddRateLimitProposal): Uint8Array;
    toProtoMsg(message: AddRateLimitProposal): AddRateLimitProposalProtoMsg;
};
export declare const UpdateRateLimitProposal: {
    typeUrl: string;
    encode(message: UpdateRateLimitProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateRateLimitProposal;
    fromPartial(object: Partial<UpdateRateLimitProposal>): UpdateRateLimitProposal;
    fromAmino(object: UpdateRateLimitProposalAmino): UpdateRateLimitProposal;
    toAmino(message: UpdateRateLimitProposal): UpdateRateLimitProposalAmino;
    fromAminoMsg(object: UpdateRateLimitProposalAminoMsg): UpdateRateLimitProposal;
    fromProtoMsg(message: UpdateRateLimitProposalProtoMsg): UpdateRateLimitProposal;
    toProto(message: UpdateRateLimitProposal): Uint8Array;
    toProtoMsg(message: UpdateRateLimitProposal): UpdateRateLimitProposalProtoMsg;
};
export declare const RemoveRateLimitProposal: {
    typeUrl: string;
    encode(message: RemoveRateLimitProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveRateLimitProposal;
    fromPartial(object: Partial<RemoveRateLimitProposal>): RemoveRateLimitProposal;
    fromAmino(object: RemoveRateLimitProposalAmino): RemoveRateLimitProposal;
    toAmino(message: RemoveRateLimitProposal): RemoveRateLimitProposalAmino;
    fromAminoMsg(object: RemoveRateLimitProposalAminoMsg): RemoveRateLimitProposal;
    fromProtoMsg(message: RemoveRateLimitProposalProtoMsg): RemoveRateLimitProposal;
    toProto(message: RemoveRateLimitProposal): Uint8Array;
    toProtoMsg(message: RemoveRateLimitProposal): RemoveRateLimitProposalProtoMsg;
};
export declare const ResetRateLimitProposal: {
    typeUrl: string;
    encode(message: ResetRateLimitProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ResetRateLimitProposal;
    fromPartial(object: Partial<ResetRateLimitProposal>): ResetRateLimitProposal;
    fromAmino(object: ResetRateLimitProposalAmino): ResetRateLimitProposal;
    toAmino(message: ResetRateLimitProposal): ResetRateLimitProposalAmino;
    fromAminoMsg(object: ResetRateLimitProposalAminoMsg): ResetRateLimitProposal;
    fromProtoMsg(message: ResetRateLimitProposalProtoMsg): ResetRateLimitProposal;
    toProto(message: ResetRateLimitProposal): Uint8Array;
    toProtoMsg(message: ResetRateLimitProposal): ResetRateLimitProposalProtoMsg;
};
