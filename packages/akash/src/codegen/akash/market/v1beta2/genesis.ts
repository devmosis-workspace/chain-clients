import { Order, OrderSDKType } from "./order";
import { Lease, LeaseSDKType } from "./lease";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    orders: [],
    leases: [],
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.leases = object.leases?.map(e => Lease.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};