import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterRevenue, MsgRegisterRevenueResponse, MsgUpdateRevenue, MsgUpdateRevenueResponse, MsgCancelRevenue, MsgCancelRevenueResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
  /** RegisterRevenue registers a new contract for receiving transaction fees */
  registerRevenue(request: MsgRegisterRevenue): Promise<MsgRegisterRevenueResponse>;
  /** UpdateRevenue updates the withdrawer address of a revenue */
  updateRevenue(request: MsgUpdateRevenue): Promise<MsgUpdateRevenueResponse>;
  /**
   * CancelRevenue cancels a contract's fee registration and further receival
   * of transaction fees
   */
  cancelRevenue(request: MsgCancelRevenue): Promise<MsgCancelRevenueResponse>;
  /**
   * UpdateParams defined a governance operation for updating the x/revenue module parameters.
   * The authority is hard-coded to the Cosmos SDK x/gov module account
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerRevenue = this.registerRevenue.bind(this);
    this.updateRevenue = this.updateRevenue.bind(this);
    this.cancelRevenue = this.cancelRevenue.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  registerRevenue(request: MsgRegisterRevenue): Promise<MsgRegisterRevenueResponse> {
    const data = MsgRegisterRevenue.encode(request).finish();
    const promise = this.rpc.request("evmos.revenue.v1.Msg", "RegisterRevenue", data);
    return promise.then(data => MsgRegisterRevenueResponse.decode(new _m0.Reader(data)));
  }
  updateRevenue(request: MsgUpdateRevenue): Promise<MsgUpdateRevenueResponse> {
    const data = MsgUpdateRevenue.encode(request).finish();
    const promise = this.rpc.request("evmos.revenue.v1.Msg", "UpdateRevenue", data);
    return promise.then(data => MsgUpdateRevenueResponse.decode(new _m0.Reader(data)));
  }
  cancelRevenue(request: MsgCancelRevenue): Promise<MsgCancelRevenueResponse> {
    const data = MsgCancelRevenue.encode(request).finish();
    const promise = this.rpc.request("evmos.revenue.v1.Msg", "CancelRevenue", data);
    return promise.then(data => MsgCancelRevenueResponse.decode(new _m0.Reader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("evmos.revenue.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}