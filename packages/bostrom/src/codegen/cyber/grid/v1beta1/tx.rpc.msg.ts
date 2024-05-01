import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateRoute, MsgCreateRouteResponse, MsgEditRoute, MsgEditRouteResponse, MsgDeleteRoute, MsgDeleteRouteResponse, MsgEditRouteName, MsgEditRouteNameResponse } from "./tx";
export interface Msg {
  createRoute(request: MsgCreateRoute): Promise<MsgCreateRouteResponse>;
  editRoute(request: MsgEditRoute): Promise<MsgEditRouteResponse>;
  deleteRoute(request: MsgDeleteRoute): Promise<MsgDeleteRouteResponse>;
  editRouteName(request: MsgEditRouteName): Promise<MsgEditRouteNameResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createRoute = this.createRoute.bind(this);
    this.editRoute = this.editRoute.bind(this);
    this.deleteRoute = this.deleteRoute.bind(this);
    this.editRouteName = this.editRouteName.bind(this);
  }
  createRoute(request: MsgCreateRoute): Promise<MsgCreateRouteResponse> {
    const data = MsgCreateRoute.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Msg", "CreateRoute", data);
    return promise.then(data => MsgCreateRouteResponse.decode(new BinaryReader(data)));
  }
  editRoute(request: MsgEditRoute): Promise<MsgEditRouteResponse> {
    const data = MsgEditRoute.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Msg", "EditRoute", data);
    return promise.then(data => MsgEditRouteResponse.decode(new BinaryReader(data)));
  }
  deleteRoute(request: MsgDeleteRoute): Promise<MsgDeleteRouteResponse> {
    const data = MsgDeleteRoute.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Msg", "DeleteRoute", data);
    return promise.then(data => MsgDeleteRouteResponse.decode(new BinaryReader(data)));
  }
  editRouteName(request: MsgEditRouteName): Promise<MsgEditRouteNameResponse> {
    const data = MsgEditRouteName.encode(request).finish();
    const promise = this.rpc.request("cyber.grid.v1beta1.Msg", "EditRouteName", data);
    return promise.then(data => MsgEditRouteNameResponse.decode(new BinaryReader(data)));
  }
}