import { Rpc } from "../../helpers";
import { MsgRemovePublisherRequest, MsgRemovePublisherResponse, MsgAddSubscriberRequest, MsgAddSubscriberResponse, MsgRemoveSubscriberRequest, MsgRemoveSubscriberResponse, MsgAddPublisherIntentRequest, MsgAddPublisherIntentResponse, MsgRemovePublisherIntentRequest, MsgRemovePublisherIntentResponse, MsgAddSubscriberIntentRequest, MsgAddSubscriberIntentResponse, MsgRemoveSubscriberIntentRequest, MsgRemoveSubscriberIntentResponse } from "./tx";
export interface Msg {
    removePublisher(request: MsgRemovePublisherRequest): Promise<MsgRemovePublisherResponse>;
    addSubscriber(request: MsgAddSubscriberRequest): Promise<MsgAddSubscriberResponse>;
    removeSubscriber(request: MsgRemoveSubscriberRequest): Promise<MsgRemoveSubscriberResponse>;
    addPublisherIntent(request: MsgAddPublisherIntentRequest): Promise<MsgAddPublisherIntentResponse>;
    removePublisherIntent(request: MsgRemovePublisherIntentRequest): Promise<MsgRemovePublisherIntentResponse>;
    addSubscriberIntent(request: MsgAddSubscriberIntentRequest): Promise<MsgAddSubscriberIntentResponse>;
    removeSubscriberIntent(request: MsgRemoveSubscriberIntentRequest): Promise<MsgRemoveSubscriberIntentResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    removePublisher(request: MsgRemovePublisherRequest): Promise<MsgRemovePublisherResponse>;
    addSubscriber(request: MsgAddSubscriberRequest): Promise<MsgAddSubscriberResponse>;
    removeSubscriber(request: MsgRemoveSubscriberRequest): Promise<MsgRemoveSubscriberResponse>;
    addPublisherIntent(request: MsgAddPublisherIntentRequest): Promise<MsgAddPublisherIntentResponse>;
    removePublisherIntent(request: MsgRemovePublisherIntentRequest): Promise<MsgRemovePublisherIntentResponse>;
    addSubscriberIntent(request: MsgAddSubscriberIntentRequest): Promise<MsgAddSubscriberIntentResponse>;
    removeSubscriberIntent(request: MsgRemoveSubscriberIntentRequest): Promise<MsgRemoveSubscriberIntentResponse>;
}
