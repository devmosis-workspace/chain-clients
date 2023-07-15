import { Order, OrderSDKType } from "./order";
import { Lease, LeaseSDKType } from "./lease";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisState {
    orders: Order[];
    leases: Lease[];
    params?: Params;
}
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisStateSDKType {
    orders: OrderSDKType[];
    leases: LeaseSDKType[];
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
