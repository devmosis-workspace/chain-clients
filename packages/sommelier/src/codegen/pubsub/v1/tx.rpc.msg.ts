import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.removePublisher = this.removePublisher.bind(this);
    this.addSubscriber = this.addSubscriber.bind(this);
    this.removeSubscriber = this.removeSubscriber.bind(this);
    this.addPublisherIntent = this.addPublisherIntent.bind(this);
    this.removePublisherIntent = this.removePublisherIntent.bind(this);
    this.addSubscriberIntent = this.addSubscriberIntent.bind(this);
    this.removeSubscriberIntent = this.removeSubscriberIntent.bind(this);
  }
  removePublisher(request: MsgRemovePublisherRequest): Promise<MsgRemovePublisherResponse> {
    const data = MsgRemovePublisherRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Msg", "RemovePublisher", data);
    return promise.then(data => MsgRemovePublisherResponse.decode(new BinaryReader(data)));
  }
  addSubscriber(request: MsgAddSubscriberRequest): Promise<MsgAddSubscriberResponse> {
    const data = MsgAddSubscriberRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Msg", "AddSubscriber", data);
    return promise.then(data => MsgAddSubscriberResponse.decode(new BinaryReader(data)));
  }
  removeSubscriber(request: MsgRemoveSubscriberRequest): Promise<MsgRemoveSubscriberResponse> {
    const data = MsgRemoveSubscriberRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Msg", "RemoveSubscriber", data);
    return promise.then(data => MsgRemoveSubscriberResponse.decode(new BinaryReader(data)));
  }
  addPublisherIntent(request: MsgAddPublisherIntentRequest): Promise<MsgAddPublisherIntentResponse> {
    const data = MsgAddPublisherIntentRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Msg", "AddPublisherIntent", data);
    return promise.then(data => MsgAddPublisherIntentResponse.decode(new BinaryReader(data)));
  }
  removePublisherIntent(request: MsgRemovePublisherIntentRequest): Promise<MsgRemovePublisherIntentResponse> {
    const data = MsgRemovePublisherIntentRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Msg", "RemovePublisherIntent", data);
    return promise.then(data => MsgRemovePublisherIntentResponse.decode(new BinaryReader(data)));
  }
  addSubscriberIntent(request: MsgAddSubscriberIntentRequest): Promise<MsgAddSubscriberIntentResponse> {
    const data = MsgAddSubscriberIntentRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Msg", "AddSubscriberIntent", data);
    return promise.then(data => MsgAddSubscriberIntentResponse.decode(new BinaryReader(data)));
  }
  removeSubscriberIntent(request: MsgRemoveSubscriberIntentRequest): Promise<MsgRemoveSubscriberIntentResponse> {
    const data = MsgRemoveSubscriberIntentRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Msg", "RemoveSubscriberIntent", data);
    return promise.then(data => MsgRemoveSubscriberIntentResponse.decode(new BinaryReader(data)));
  }
}