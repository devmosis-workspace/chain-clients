import { Params, ParamsSDKType, InsuranceFund, InsuranceFundSDKType, RedemptionSchedule, RedemptionScheduleSDKType } from "./insurance";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the insurance module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to insurance. */
    params?: Params;
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
    nextShareDenomId: Long;
    /**
     * next_redemption_schedule_id describes next redemption schedule id to be
     * used for next schedule incremented by 1 per redemption request
     */
    nextRedemptionScheduleId: Long;
}
/** GenesisState defines the insurance module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    insurance_funds: InsuranceFundSDKType[];
    redemption_schedule: RedemptionScheduleSDKType[];
    next_share_denom_id: Long;
    next_redemption_schedule_id: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
