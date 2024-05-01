import { MsgCreateRoute, MsgEditRoute, MsgDeleteRoute, MsgEditRouteName } from "./tx";
export declare const AminoConverter: {
    "/cyber.grid.v1beta1.MsgCreateRoute": {
        aminoType: string;
        toAmino: (message: MsgCreateRoute) => import("./tx").MsgCreateRouteAmino;
        fromAmino: (object: import("./tx").MsgCreateRouteAmino) => MsgCreateRoute;
    };
    "/cyber.grid.v1beta1.MsgEditRoute": {
        aminoType: string;
        toAmino: (message: MsgEditRoute) => import("./tx").MsgEditRouteAmino;
        fromAmino: (object: import("./tx").MsgEditRouteAmino) => MsgEditRoute;
    };
    "/cyber.grid.v1beta1.MsgDeleteRoute": {
        aminoType: string;
        toAmino: (message: MsgDeleteRoute) => import("./tx").MsgDeleteRouteAmino;
        fromAmino: (object: import("./tx").MsgDeleteRouteAmino) => MsgDeleteRoute;
    };
    "/cyber.grid.v1beta1.MsgEditRouteName": {
        aminoType: string;
        toAmino: (message: MsgEditRouteName) => import("./tx").MsgEditRouteNameAmino;
        fromAmino: (object: import("./tx").MsgEditRouteNameAmino) => MsgEditRouteName;
    };
};
