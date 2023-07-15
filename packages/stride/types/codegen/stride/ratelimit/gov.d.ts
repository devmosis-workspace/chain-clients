import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface AddRateLimitProposal {
    title: string;
    description: string;
    denom: string;
    channelId: string;
    maxPercentSend: string;
    maxPercentRecv: string;
    durationHours: Long;
    deposit: string;
}
export interface AddRateLimitProposalSDKType {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    max_percent_send: string;
    max_percent_recv: string;
    duration_hours: Long;
    deposit: string;
}
export interface UpdateRateLimitProposal {
    title: string;
    description: string;
    denom: string;
    channelId: string;
    maxPercentSend: string;
    maxPercentRecv: string;
    durationHours: Long;
    deposit: string;
}
export interface UpdateRateLimitProposalSDKType {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    max_percent_send: string;
    max_percent_recv: string;
    duration_hours: Long;
    deposit: string;
}
export interface RemoveRateLimitProposal {
    title: string;
    description: string;
    denom: string;
    channelId: string;
    deposit: string;
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
export interface ResetRateLimitProposalSDKType {
    title: string;
    description: string;
    denom: string;
    channel_id: string;
    deposit: string;
}
export declare const AddRateLimitProposal: {
    encode(message: AddRateLimitProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AddRateLimitProposal;
    fromPartial(object: Partial<AddRateLimitProposal>): AddRateLimitProposal;
};
export declare const UpdateRateLimitProposal: {
    encode(message: UpdateRateLimitProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateRateLimitProposal;
    fromPartial(object: Partial<UpdateRateLimitProposal>): UpdateRateLimitProposal;
};
export declare const RemoveRateLimitProposal: {
    encode(message: RemoveRateLimitProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RemoveRateLimitProposal;
    fromPartial(object: Partial<RemoveRateLimitProposal>): RemoveRateLimitProposal;
};
export declare const ResetRateLimitProposal: {
    encode(message: ResetRateLimitProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResetRateLimitProposal;
    fromPartial(object: Partial<ResetRateLimitProposal>): ResetRateLimitProposal;
};
