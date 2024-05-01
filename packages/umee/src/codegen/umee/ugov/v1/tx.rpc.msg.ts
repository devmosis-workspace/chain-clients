import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgGovUpdateMinGasPrice, MsgGovUpdateMinGasPriceResponse, MsgGovSetEmergencyGroup, MsgGovSetEmergencyGroupResponse, MsgGovUpdateInflationParams, GovUpdateInflationParamsResponse } from "./tx";
/** Msg defines the x/ugov module's Msg service. */
export interface Msg {
  /** GovUpdateMinGasPrice sets protocol controlled tx min fees. */
  govUpdateMinGasPrice(request: MsgGovUpdateMinGasPrice): Promise<MsgGovUpdateMinGasPriceResponse>;
  /** GovSetEmergencyGroup sets emergency group address. */
  govSetEmergencyGroup(request: MsgGovSetEmergencyGroup): Promise<MsgGovSetEmergencyGroupResponse>;
  /** GovUpdateInflationParams sets new params for inflation rate change. */
  govUpdateInflationParams(request: MsgGovUpdateInflationParams): Promise<GovUpdateInflationParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.govUpdateMinGasPrice = this.govUpdateMinGasPrice.bind(this);
    this.govSetEmergencyGroup = this.govSetEmergencyGroup.bind(this);
    this.govUpdateInflationParams = this.govUpdateInflationParams.bind(this);
  }
  govUpdateMinGasPrice(request: MsgGovUpdateMinGasPrice): Promise<MsgGovUpdateMinGasPriceResponse> {
    const data = MsgGovUpdateMinGasPrice.encode(request).finish();
    const promise = this.rpc.request("umee.ugov.v1.Msg", "GovUpdateMinGasPrice", data);
    return promise.then(data => MsgGovUpdateMinGasPriceResponse.decode(new BinaryReader(data)));
  }
  govSetEmergencyGroup(request: MsgGovSetEmergencyGroup): Promise<MsgGovSetEmergencyGroupResponse> {
    const data = MsgGovSetEmergencyGroup.encode(request).finish();
    const promise = this.rpc.request("umee.ugov.v1.Msg", "GovSetEmergencyGroup", data);
    return promise.then(data => MsgGovSetEmergencyGroupResponse.decode(new BinaryReader(data)));
  }
  govUpdateInflationParams(request: MsgGovUpdateInflationParams): Promise<GovUpdateInflationParamsResponse> {
    const data = MsgGovUpdateInflationParams.encode(request).finish();
    const promise = this.rpc.request("umee.ugov.v1.Msg", "GovUpdateInflationParams", data);
    return promise.then(data => GovUpdateInflationParamsResponse.decode(new BinaryReader(data)));
  }
}