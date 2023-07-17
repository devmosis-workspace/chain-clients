import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgGovUpdateMinGasPrice, MsgGovUpdateMinGasPriceResponse } from "./tx";
/** Msg defines the x/ugov module's Msg service. */
export interface Msg {
  /** GovUpdateMinGasPrice sets protocol controlled tx min fees. */
  govUpdateMinGasPrice(request: MsgGovUpdateMinGasPrice): Promise<MsgGovUpdateMinGasPriceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.govUpdateMinGasPrice = this.govUpdateMinGasPrice.bind(this);
  }
  govUpdateMinGasPrice(request: MsgGovUpdateMinGasPrice): Promise<MsgGovUpdateMinGasPriceResponse> {
    const data = MsgGovUpdateMinGasPrice.encode(request).finish();
    const promise = this.rpc.request("umee.ugov.v1.Msg", "GovUpdateMinGasPrice", data);
    return promise.then(data => MsgGovUpdateMinGasPriceResponse.decode(new _m0.Reader(data)));
  }
}