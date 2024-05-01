import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Params {
    maxRoutes: number;
}
export interface ParamsProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    max_routes?: number;
}
export interface ParamsAminoMsg {
    type: "/cyber.grid.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    max_routes: number;
}
export interface Route {
    source: string;
    destination: string;
    name: string;
    value: Coin[];
}
export interface RouteProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.Route";
    value: Uint8Array;
}
export interface RouteAmino {
    source?: string;
    destination?: string;
    name?: string;
    value?: CoinAmino[];
}
export interface RouteAminoMsg {
    type: "/cyber.grid.v1beta1.Route";
    value: RouteAmino;
}
export interface RouteSDKType {
    source: string;
    destination: string;
    name: string;
    value: CoinSDKType[];
}
export interface Value {
    value: Coin[];
}
export interface ValueProtoMsg {
    typeUrl: "/cyber.grid.v1beta1.Value";
    value: Uint8Array;
}
export interface ValueAmino {
    value?: CoinAmino[];
}
export interface ValueAminoMsg {
    type: "/cyber.grid.v1beta1.Value";
    value: ValueAmino;
}
export interface ValueSDKType {
    value: CoinSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Route: {
    typeUrl: string;
    encode(message: Route, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Route;
    fromPartial(object: Partial<Route>): Route;
    fromAmino(object: RouteAmino): Route;
    toAmino(message: Route): RouteAmino;
    fromAminoMsg(object: RouteAminoMsg): Route;
    fromProtoMsg(message: RouteProtoMsg): Route;
    toProto(message: Route): Uint8Array;
    toProtoMsg(message: Route): RouteProtoMsg;
};
export declare const Value: {
    typeUrl: string;
    encode(message: Value, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Value;
    fromPartial(object: Partial<Value>): Value;
    fromAmino(object: ValueAmino): Value;
    toAmino(message: Value): ValueAmino;
    fromAminoMsg(object: ValueAminoMsg): Value;
    fromProtoMsg(message: ValueProtoMsg): Value;
    toProto(message: Value): Uint8Array;
    toProtoMsg(message: Value): ValueProtoMsg;
};
