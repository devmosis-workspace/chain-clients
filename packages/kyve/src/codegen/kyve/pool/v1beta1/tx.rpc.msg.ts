import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreatePool, MsgCreatePoolResponse, MsgUpdatePool, MsgUpdatePoolResponse, MsgDisablePool, MsgDisablePoolResponse, MsgEnablePool, MsgEnablePoolResponse, MsgScheduleRuntimeUpgrade, MsgScheduleRuntimeUpgradeResponse, MsgCancelRuntimeUpgrade, MsgCancelRuntimeUpgradeResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * CreatePool defines a governance operation for creating a new pool.
   * The authority is hard-coded to the x/gov module account.
   */
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  /**
   * UpdatePool defines a governance operation for updating an existing pool.
   * The authority is hard-coded to the x/gov module account.
   */
  updatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  /**
   * DisablePool defines a governance operation for disabling an existing pool.
   * The authority is hard-coded to the x/gov module account.
   */
  disablePool(request: MsgDisablePool): Promise<MsgDisablePoolResponse>;
  /**
   * EnablePool defines a governance operation for enabling an existing pool.
   * The authority is hard-coded to the x/gov module account.
   */
  enablePool(request: MsgEnablePool): Promise<MsgEnablePoolResponse>;
  /**
   * ScheduleRuntimeUpgrade defines a governance operation for scheduling a runtime upgrade.
   * The authority is hard-coded to the x/gov module account.
   */
  scheduleRuntimeUpgrade(request: MsgScheduleRuntimeUpgrade): Promise<MsgScheduleRuntimeUpgradeResponse>;
  /**
   * CancelRuntimeUpgrade defines a governance operation for cancelling a runtime upgrade.
   * The authority is hard-coded to the x/gov module account.
   */
  cancelRuntimeUpgrade(request: MsgCancelRuntimeUpgrade): Promise<MsgCancelRuntimeUpgradeResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/pool module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createPool = this.createPool.bind(this);
    this.updatePool = this.updatePool.bind(this);
    this.disablePool = this.disablePool.bind(this);
    this.enablePool = this.enablePool.bind(this);
    this.scheduleRuntimeUpgrade = this.scheduleRuntimeUpgrade.bind(this);
    this.cancelRuntimeUpgrade = this.cancelRuntimeUpgrade.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("kyve.pool.v1beta1.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new BinaryReader(data)));
  }
  updatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request("kyve.pool.v1beta1.Msg", "UpdatePool", data);
    return promise.then(data => MsgUpdatePoolResponse.decode(new BinaryReader(data)));
  }
  disablePool(request: MsgDisablePool): Promise<MsgDisablePoolResponse> {
    const data = MsgDisablePool.encode(request).finish();
    const promise = this.rpc.request("kyve.pool.v1beta1.Msg", "DisablePool", data);
    return promise.then(data => MsgDisablePoolResponse.decode(new BinaryReader(data)));
  }
  enablePool(request: MsgEnablePool): Promise<MsgEnablePoolResponse> {
    const data = MsgEnablePool.encode(request).finish();
    const promise = this.rpc.request("kyve.pool.v1beta1.Msg", "EnablePool", data);
    return promise.then(data => MsgEnablePoolResponse.decode(new BinaryReader(data)));
  }
  scheduleRuntimeUpgrade(request: MsgScheduleRuntimeUpgrade): Promise<MsgScheduleRuntimeUpgradeResponse> {
    const data = MsgScheduleRuntimeUpgrade.encode(request).finish();
    const promise = this.rpc.request("kyve.pool.v1beta1.Msg", "ScheduleRuntimeUpgrade", data);
    return promise.then(data => MsgScheduleRuntimeUpgradeResponse.decode(new BinaryReader(data)));
  }
  cancelRuntimeUpgrade(request: MsgCancelRuntimeUpgrade): Promise<MsgCancelRuntimeUpgradeResponse> {
    const data = MsgCancelRuntimeUpgrade.encode(request).finish();
    const promise = this.rpc.request("kyve.pool.v1beta1.Msg", "CancelRuntimeUpgrade", data);
    return promise.then(data => MsgCancelRuntimeUpgradeResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("kyve.pool.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}