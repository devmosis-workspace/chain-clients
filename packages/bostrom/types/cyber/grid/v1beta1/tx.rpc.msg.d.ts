import { Rpc } from "../../../helpers";
import { MsgCreateRoute, MsgCreateRouteResponse, MsgEditRoute, MsgEditRouteResponse, MsgDeleteRoute, MsgDeleteRouteResponse, MsgEditRouteName, MsgEditRouteNameResponse } from "./tx";
export interface Msg {
    createRoute(request: MsgCreateRoute): Promise<MsgCreateRouteResponse>;
    editRoute(request: MsgEditRoute): Promise<MsgEditRouteResponse>;
    deleteRoute(request: MsgDeleteRoute): Promise<MsgDeleteRouteResponse>;
    editRouteName(request: MsgEditRouteName): Promise<MsgEditRouteNameResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createRoute(request: MsgCreateRoute): Promise<MsgCreateRouteResponse>;
    editRoute(request: MsgEditRoute): Promise<MsgEditRouteResponse>;
    deleteRoute(request: MsgDeleteRoute): Promise<MsgDeleteRouteResponse>;
    editRouteName(request: MsgEditRouteName): Promise<MsgEditRouteNameResponse>;
}
