import { Rpc } from "../../../helpers";
import { MsgAddLimitOrder, MsgAddLimitOrderResponse, MsgAddMarketOrder, MsgAddMarketOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgCancelReplaceLimitOrder, MsgCancelReplaceLimitOrderResponse, MsgCancelReplaceMarketOrder, MsgCancelReplaceMarketOrderResponse } from "./tx";
export interface Msg {
    addLimitOrder(request: MsgAddLimitOrder): Promise<MsgAddLimitOrderResponse>;
    addMarketOrder(request: MsgAddMarketOrder): Promise<MsgAddMarketOrderResponse>;
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    cancelReplaceLimitOrder(request: MsgCancelReplaceLimitOrder): Promise<MsgCancelReplaceLimitOrderResponse>;
    cancelReplaceMarketOrder(request: MsgCancelReplaceMarketOrder): Promise<MsgCancelReplaceMarketOrderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addLimitOrder(request: MsgAddLimitOrder): Promise<MsgAddLimitOrderResponse>;
    addMarketOrder(request: MsgAddMarketOrder): Promise<MsgAddMarketOrderResponse>;
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    cancelReplaceLimitOrder(request: MsgCancelReplaceLimitOrder): Promise<MsgCancelReplaceLimitOrderResponse>;
    cancelReplaceMarketOrder(request: MsgCancelReplaceMarketOrder): Promise<MsgCancelReplaceMarketOrderResponse>;
}
