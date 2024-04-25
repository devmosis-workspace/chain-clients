import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateFunder, MsgCreateFunderResponse, MsgUpdateFunder, MsgUpdateFunderResponse, MsgFundPool, MsgFundPoolResponse, MsgDefundPool, MsgDefundPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateFunder ... */
  createFunder(request: MsgCreateFunder): Promise<MsgCreateFunderResponse>;
  /** UpdateFunder ... */
  updateFunder(request: MsgUpdateFunder): Promise<MsgUpdateFunderResponse>;
  /** FundPool ... */
  fundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
  /** DefundPool ... */
  defundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/delegation module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createFunder = this.createFunder.bind(this);
    this.updateFunder = this.updateFunder.bind(this);
    this.fundPool = this.fundPool.bind(this);
    this.defundPool = this.defundPool.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createFunder(request: MsgCreateFunder): Promise<MsgCreateFunderResponse> {
    const data = MsgCreateFunder.encode(request).finish();
    const promise = this.rpc.request("kyve.funders.v1beta1.Msg", "CreateFunder", data);
    return promise.then(data => MsgCreateFunderResponse.decode(new BinaryReader(data)));
  }
  updateFunder(request: MsgUpdateFunder): Promise<MsgUpdateFunderResponse> {
    const data = MsgUpdateFunder.encode(request).finish();
    const promise = this.rpc.request("kyve.funders.v1beta1.Msg", "UpdateFunder", data);
    return promise.then(data => MsgUpdateFunderResponse.decode(new BinaryReader(data)));
  }
  fundPool(request: MsgFundPool): Promise<MsgFundPoolResponse> {
    const data = MsgFundPool.encode(request).finish();
    const promise = this.rpc.request("kyve.funders.v1beta1.Msg", "FundPool", data);
    return promise.then(data => MsgFundPoolResponse.decode(new BinaryReader(data)));
  }
  defundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse> {
    const data = MsgDefundPool.encode(request).finish();
    const promise = this.rpc.request("kyve.funders.v1beta1.Msg", "DefundPool", data);
    return promise.then(data => MsgDefundPoolResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("kyve.funders.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}