import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgAddLimitOrder, MsgAddLimitOrderResponse, MsgAddMarketOrder, MsgAddMarketOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgCancelReplaceLimitOrder, MsgCancelReplaceLimitOrderResponse, MsgCancelReplaceMarketOrder, MsgCancelReplaceMarketOrderResponse } from "./tx";
export interface Msg {
  addLimitOrder(request: MsgAddLimitOrder): Promise<MsgAddLimitOrderResponse>;
  addMarketOrder(request: MsgAddMarketOrder): Promise<MsgAddMarketOrderResponse>;
  cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
  cancelReplaceLimitOrder(request: MsgCancelReplaceLimitOrder): Promise<MsgCancelReplaceLimitOrderResponse>;
  cancelReplaceMarketOrder(request: MsgCancelReplaceMarketOrder): Promise<MsgCancelReplaceMarketOrderResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addLimitOrder = this.addLimitOrder.bind(this);
    this.addMarketOrder = this.addMarketOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.cancelReplaceLimitOrder = this.cancelReplaceLimitOrder.bind(this);
    this.cancelReplaceMarketOrder = this.cancelReplaceMarketOrder.bind(this);
  }
  addLimitOrder(request: MsgAddLimitOrder): Promise<MsgAddLimitOrderResponse> {
    const data = MsgAddLimitOrder.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Msg", "AddLimitOrder", data);
    return promise.then(data => MsgAddLimitOrderResponse.decode(new BinaryReader(data)));
  }
  addMarketOrder(request: MsgAddMarketOrder): Promise<MsgAddMarketOrderResponse> {
    const data = MsgAddMarketOrder.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Msg", "AddMarketOrder", data);
    return promise.then(data => MsgAddMarketOrderResponse.decode(new BinaryReader(data)));
  }
  cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Msg", "CancelOrder", data);
    return promise.then(data => MsgCancelOrderResponse.decode(new BinaryReader(data)));
  }
  cancelReplaceLimitOrder(request: MsgCancelReplaceLimitOrder): Promise<MsgCancelReplaceLimitOrderResponse> {
    const data = MsgCancelReplaceLimitOrder.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Msg", "CancelReplaceLimitOrder", data);
    return promise.then(data => MsgCancelReplaceLimitOrderResponse.decode(new BinaryReader(data)));
  }
  cancelReplaceMarketOrder(request: MsgCancelReplaceMarketOrder): Promise<MsgCancelReplaceMarketOrderResponse> {
    const data = MsgCancelReplaceMarketOrder.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Msg", "CancelReplaceMarketOrder", data);
    return promise.then(data => MsgCancelReplaceMarketOrderResponse.decode(new BinaryReader(data)));
  }
}