import { Params, ParamsAmino, ParamsSDKType, InsuranceFund, InsuranceFundAmino, InsuranceFundSDKType, RedemptionSchedule, RedemptionScheduleAmino, RedemptionScheduleSDKType } from "./insurance";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the insurance module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to insurance. */
    params: Params;
    /**
     * insurance_funds describes the insurance funds available for derivative
     * markets
     */
    insuranceFunds: InsuranceFund[];
    /** redemption_schedule describes the redemption requests pending */
    redemptionSchedule: RedemptionSchedule[];
    /**
     * next_share_denom_id describes the next share denom id to be used for newly
     * creating insurance fund incremented by 1 per insurance fund creation
     */
    nextShareDenomId: bigint;
    /**
     * next_redemption_schedule_id describes next redemption schedule id to be
     * used for next schedule incremented by 1 per redemption request
     */
    nextRedemptionScheduleId: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the insurance module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of related to insurance. */
    params?: ParamsAmino;
    /**
     * insurance_funds describes the insurance funds available for derivative
     * markets
     */
    insurance_funds: InsuranceFundAmino[];
    /** redemption_schedule describes the redemption requests pending */
    redemption_schedule: RedemptionScheduleAmino[];
    /**
     * next_share_denom_id describes the next share denom id to be used for newly
     * creating insurance fund incremented by 1 per insurance fund creation
     */
    next_share_denom_id: string;
    /**
     * next_redemption_schedule_id describes next redemption schedule id to be
     * used for next schedule incremented by 1 per redemption request
     */
    next_redemption_schedule_id: string;
}
export interface GenesisStateAminoMsg {
    type: "/injective.insurance.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the insurance module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    insurance_funds: InsuranceFundSDKType[];
    redemption_schedule: RedemptionScheduleSDKType[];
    next_share_denom_id: bigint;
    next_redemption_schedule_id: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
