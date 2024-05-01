import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgCreateRoute {
    source: string;
    destination: string;
    name: string;
}
export interface MsgCreateRouteProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.MsgCreateRoute";
    value: Uint8Array;
}
export interface MsgCreateRouteAmino {
    source?: string;
    destination?: string;
    name?: string;
}
export interface MsgCreateRouteAminoMsg {
    type: "/cyber.grid.v1beta1.MsgCreateRoute";
    value: MsgCreateRouteAmino;
}
export interface MsgCreateRouteSDKType {
    source: string;
    destination: string;
    name: string;
}
export interface MsgEditRoute {
    source: string;
    destination: string;
    value: Coin;
}
export interface MsgEditRouteProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.MsgEditRoute";
    value: Uint8Array;
}
export interface MsgEditRouteAmino {
    source?: string;
    destination?: string;
    value?: CoinAmino;
}
export interface MsgEditRouteAminoMsg {
    type: "/cyber.grid.v1beta1.MsgEditRoute";
    value: MsgEditRouteAmino;
}
export interface MsgEditRouteSDKType {
    source: string;
    destination: string;
    value: CoinSDKType;
}
export interface MsgDeleteRoute {
    source: string;
    destination: string;
}
export interface MsgDeleteRouteProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.MsgDeleteRoute";
    value: Uint8Array;
}
export interface MsgDeleteRouteAmino {
    source?: string;
    destination?: string;
}
export interface MsgDeleteRouteAminoMsg {
    type: "/cyber.grid.v1beta1.MsgDeleteRoute";
    value: MsgDeleteRouteAmino;
}
export interface MsgDeleteRouteSDKType {
    source: string;
    destination: string;
}
export interface MsgEditRouteName {
    source: string;
    destination: string;
    name: string;
}
export interface MsgEditRouteNameProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.MsgEditRouteName";
    value: Uint8Array;
}
export interface MsgEditRouteNameAmino {
    source?: string;
    destination?: string;
    name?: string;
}
export interface MsgEditRouteNameAminoMsg {
    type: "/cyber.grid.v1beta1.MsgEditRouteName";
    value: MsgEditRouteNameAmino;
}
export interface MsgEditRouteNameSDKType {
    source: string;
    destination: string;
    name: string;
}
export interface MsgCreateRouteResponse {
}
export interface MsgCreateRouteResponseProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.MsgCreateRouteResponse";
    value: Uint8Array;
}
export interface MsgCreateRouteResponseAmino {
}
export interface MsgCreateRouteResponseAminoMsg {
    type: "/cyber.grid.v1beta1.MsgCreateRouteResponse";
    value: MsgCreateRouteResponseAmino;
}
export interface MsgCreateRouteResponseSDKType {
}
export interface MsgEditRouteResponse {
}
export interface MsgEditRouteResponseProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.MsgEditRouteResponse";
    value: Uint8Array;
}
export interface MsgEditRouteResponseAmino {
}
export interface MsgEditRouteResponseAminoMsg {
    type: "/cyber.grid.v1beta1.MsgEditRouteResponse";
    value: MsgEditRouteResponseAmino;
}
export interface MsgEditRouteResponseSDKType {
}
export interface MsgDeleteRouteResponse {
}
export interface MsgDeleteRouteResponseProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.MsgDeleteRouteResponse";
    value: Uint8Array;
}
export interface MsgDeleteRouteResponseAmino {
}
export interface MsgDeleteRouteResponseAminoMsg {
    type: "/cyber.grid.v1beta1.MsgDeleteRouteResponse";
    value: MsgDeleteRouteResponseAmino;
}
export interface MsgDeleteRouteResponseSDKType {
}
export interface MsgEditRouteNameResponse {
}
export interface MsgEditRouteNameResponseProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.MsgEditRouteNameResponse";
    value: Uint8Array;
}
export interface MsgEditRouteNameResponseAmino {
}
export interface MsgEditRouteNameResponseAminoMsg {
    type: "/cyber.grid.v1beta1.MsgEditRouteNameResponse";
    value: MsgEditRouteNameResponseAmino;
}
export interface MsgEditRouteNameResponseSDKType {
}
export declare const MsgCreateRoute: {
    typeUrl: string;
    encode(message: MsgCreateRoute, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRoute;
    fromPartial(object: Partial<MsgCreateRoute>): MsgCreateRoute;
    fromAmino(object: MsgCreateRouteAmino): MsgCreateRoute;
    toAmino(message: MsgCreateRoute): MsgCreateRouteAmino;
    fromAminoMsg(object: MsgCreateRouteAminoMsg): MsgCreateRoute;
    fromProtoMsg(message: MsgCreateRouteProtoMsg): MsgCreateRoute;
    toProto(message: MsgCreateRoute): Uint8Array;
    toProtoMsg(message: MsgCreateRoute): MsgCreateRouteProtoMsg;
};
export declare const MsgEditRoute: {
    typeUrl: string;
    encode(message: MsgEditRoute, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEditRoute;
    fromPartial(object: Partial<MsgEditRoute>): MsgEditRoute;
    fromAmino(object: MsgEditRouteAmino): MsgEditRoute;
    toAmino(message: MsgEditRoute): MsgEditRouteAmino;
    fromAminoMsg(object: MsgEditRouteAminoMsg): MsgEditRoute;
    fromProtoMsg(message: MsgEditRouteProtoMsg): MsgEditRoute;
    toProto(message: MsgEditRoute): Uint8Array;
    toProtoMsg(message: MsgEditRoute): MsgEditRouteProtoMsg;
};
export declare const MsgDeleteRoute: {
    typeUrl: string;
    encode(message: MsgDeleteRoute, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteRoute;
    fromPartial(object: Partial<MsgDeleteRoute>): MsgDeleteRoute;
    fromAmino(object: MsgDeleteRouteAmino): MsgDeleteRoute;
    toAmino(message: MsgDeleteRoute): MsgDeleteRouteAmino;
    fromAminoMsg(object: MsgDeleteRouteAminoMsg): MsgDeleteRoute;
    fromProtoMsg(message: MsgDeleteRouteProtoMsg): MsgDeleteRoute;
    toProto(message: MsgDeleteRoute): Uint8Array;
    toProtoMsg(message: MsgDeleteRoute): MsgDeleteRouteProtoMsg;
};
export declare const MsgEditRouteName: {
    typeUrl: string;
    encode(message: MsgEditRouteName, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEditRouteName;
    fromPartial(object: Partial<MsgEditRouteName>): MsgEditRouteName;
    fromAmino(object: MsgEditRouteNameAmino): MsgEditRouteName;
    toAmino(message: MsgEditRouteName): MsgEditRouteNameAmino;
    fromAminoMsg(object: MsgEditRouteNameAminoMsg): MsgEditRouteName;
    fromProtoMsg(message: MsgEditRouteNameProtoMsg): MsgEditRouteName;
    toProto(message: MsgEditRouteName): Uint8Array;
    toProtoMsg(message: MsgEditRouteName): MsgEditRouteNameProtoMsg;
};
export declare const MsgCreateRouteResponse: {
    typeUrl: string;
    encode(_: MsgCreateRouteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateRouteResponse;
    fromPartial(_: Partial<MsgCreateRouteResponse>): MsgCreateRouteResponse;
    fromAmino(_: MsgCreateRouteResponseAmino): MsgCreateRouteResponse;
    toAmino(_: MsgCreateRouteResponse): MsgCreateRouteResponseAmino;
    fromAminoMsg(object: MsgCreateRouteResponseAminoMsg): MsgCreateRouteResponse;
    fromProtoMsg(message: MsgCreateRouteResponseProtoMsg): MsgCreateRouteResponse;
    toProto(message: MsgCreateRouteResponse): Uint8Array;
    toProtoMsg(message: MsgCreateRouteResponse): MsgCreateRouteResponseProtoMsg;
};
export declare const MsgEditRouteResponse: {
    typeUrl: string;
    encode(_: MsgEditRouteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgEditRouteResponse;
    fromPartial(_: Partial<MsgEditRouteResponse>): MsgEditRouteResponse;
    fromAmino(_: MsgEditRouteResponseAmino): MsgEditRouteResponse;
    toAmino(_: MsgEditRouteResponse): MsgEditRouteResponseAmino;
    fromAminoMsg(object: MsgEditRouteResponseAminoMsg): MsgEditRouteResponse;
    fromProtoMsg(message: MsgEditRouteResponseProtoMsg): MsgEditRouteResponse;
    toProto(message: MsgEditRouteResponse): Uint8Array;
    toProtoMsg(message: MsgEditRouteResponse): MsgEditRouteResponseProtoMsg;
};
export declare const MsgDeleteRouteResponse: {
    typeUrl: string;
    encode(_: MsgDeleteRouteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteRouteResponse;
    fromPartial(_: Partial<MsgDeleteRouteResponse>): MsgDeleteRouteResponse;
    fromAmino(_: MsgDeleteRouteResponseAmino): MsgDeleteRouteResponse;
    toAmino(_: MsgDeleteRouteResponse): MsgDeleteRouteResponseAmino;
    fromAminoMsg(object: MsgDeleteRouteResponseAminoMsg): MsgDeleteRouteResponse;
    fromProtoMsg(message: MsgDeleteRouteResponseProtoMsg): MsgDeleteRouteResponse;
    toProto(message: MsgDeleteRouteResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteRouteResponse): MsgDeleteRouteResponseProtoMsg;
};
export declare const MsgEditRouteNameResponse: {
    typeUrl: string;
    encode(_: MsgEditRouteNameResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgEditRouteNameResponse;
    fromPartial(_: Partial<MsgEditRouteNameResponse>): MsgEditRouteNameResponse;
    fromAmino(_: MsgEditRouteNameResponseAmino): MsgEditRouteNameResponse;
    toAmino(_: MsgEditRouteNameResponse): MsgEditRouteNameResponseAmino;
    fromAminoMsg(object: MsgEditRouteNameResponseAminoMsg): MsgEditRouteNameResponse;
    fromProtoMsg(message: MsgEditRouteNameResponseProtoMsg): MsgEditRouteNameResponse;
    toProto(message: MsgEditRouteNameResponse): Uint8Array;
    toProtoMsg(message: MsgEditRouteNameResponse): MsgEditRouteNameResponseProtoMsg;
};
