import { Params, ParamsSDKType, InsuranceFund, InsuranceFundSDKType, RedemptionSchedule, RedemptionScheduleSDKType } from "./insurance";
import { Long, isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    insuranceFunds: [],
    redemptionSchedule: [],
    nextShareDenomId: Long.UZERO,
    nextRedemptionScheduleId: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.insuranceFunds) {
      InsuranceFund.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.redemptionSchedule) {
      RedemptionSchedule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.nextShareDenomId.isZero()) {
      writer.uint32(32).uint64(message.nextShareDenomId);
    }
    if (!message.nextRedemptionScheduleId.isZero()) {
      writer.uint32(40).uint64(message.nextRedemptionScheduleId);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      insuranceFunds: Array.isArray(object?.insuranceFunds) ? object.insuranceFunds.map((e: any) => InsuranceFund.fromJSON(e)) : [],
      redemptionSchedule: Array.isArray(object?.redemptionSchedule) ? object.redemptionSchedule.map((e: any) => RedemptionSchedule.fromJSON(e)) : [],
      nextShareDenomId: isSet(object.nextShareDenomId) ? Long.fromValue(object.nextShareDenomId) : Long.UZERO,
      nextRedemptionScheduleId: isSet(object.nextRedemptionScheduleId) ? Long.fromValue(object.nextRedemptionScheduleId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.insuranceFunds = object.insuranceFunds?.map(e => InsuranceFund.fromPartial(e)) || [];
    message.redemptionSchedule = object.redemptionSchedule?.map(e => RedemptionSchedule.fromPartial(e)) || [];
    message.nextShareDenomId = object.nextShareDenomId !== undefined && object.nextShareDenomId !== null ? Long.fromValue(object.nextShareDenomId) : Long.UZERO;
    message.nextRedemptionScheduleId = object.nextRedemptionScheduleId !== undefined && object.nextRedemptionScheduleId !== null ? Long.fromValue(object.nextRedemptionScheduleId) : Long.UZERO;
    return message;
  }
};