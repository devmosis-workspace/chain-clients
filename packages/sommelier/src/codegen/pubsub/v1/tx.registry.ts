import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRemovePublisherRequest, MsgAddSubscriberRequest, MsgRemoveSubscriberRequest, MsgAddPublisherIntentRequest, MsgRemovePublisherIntentRequest, MsgAddSubscriberIntentRequest, MsgRemoveSubscriberIntentRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pubsub.v1.MsgRemovePublisherRequest", MsgRemovePublisherRequest], ["/pubsub.v1.MsgAddSubscriberRequest", MsgAddSubscriberRequest], ["/pubsub.v1.MsgRemoveSubscriberRequest", MsgRemoveSubscriberRequest], ["/pubsub.v1.MsgAddPublisherIntentRequest", MsgAddPublisherIntentRequest], ["/pubsub.v1.MsgRemovePublisherIntentRequest", MsgRemovePublisherIntentRequest], ["/pubsub.v1.MsgAddSubscriberIntentRequest", MsgAddSubscriberIntentRequest], ["/pubsub.v1.MsgRemoveSubscriberIntentRequest", MsgRemoveSubscriberIntentRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    removePublisher(value: MsgRemovePublisherRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemovePublisherRequest",
        value: MsgRemovePublisherRequest.encode(value).finish()
      };
    },
    addSubscriber(value: MsgAddSubscriberRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgAddSubscriberRequest",
        value: MsgAddSubscriberRequest.encode(value).finish()
      };
    },
    removeSubscriber(value: MsgRemoveSubscriberRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemoveSubscriberRequest",
        value: MsgRemoveSubscriberRequest.encode(value).finish()
      };
    },
    addPublisherIntent(value: MsgAddPublisherIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgAddPublisherIntentRequest",
        value: MsgAddPublisherIntentRequest.encode(value).finish()
      };
    },
    removePublisherIntent(value: MsgRemovePublisherIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemovePublisherIntentRequest",
        value: MsgRemovePublisherIntentRequest.encode(value).finish()
      };
    },
    addSubscriberIntent(value: MsgAddSubscriberIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgAddSubscriberIntentRequest",
        value: MsgAddSubscriberIntentRequest.encode(value).finish()
      };
    },
    removeSubscriberIntent(value: MsgRemoveSubscriberIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentRequest",
        value: MsgRemoveSubscriberIntentRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    removePublisher(value: MsgRemovePublisherRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemovePublisherRequest",
        value
      };
    },
    addSubscriber(value: MsgAddSubscriberRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgAddSubscriberRequest",
        value
      };
    },
    removeSubscriber(value: MsgRemoveSubscriberRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemoveSubscriberRequest",
        value
      };
    },
    addPublisherIntent(value: MsgAddPublisherIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgAddPublisherIntentRequest",
        value
      };
    },
    removePublisherIntent(value: MsgRemovePublisherIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemovePublisherIntentRequest",
        value
      };
    },
    addSubscriberIntent(value: MsgAddSubscriberIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgAddSubscriberIntentRequest",
        value
      };
    },
    removeSubscriberIntent(value: MsgRemoveSubscriberIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentRequest",
        value
      };
    }
  },
  fromJSON: {
    removePublisher(value: any) {
      return {
        typeUrl: "/pubsub.v1.MsgRemovePublisherRequest",
        value: MsgRemovePublisherRequest.fromJSON(value)
      };
    },
    addSubscriber(value: any) {
      return {
        typeUrl: "/pubsub.v1.MsgAddSubscriberRequest",
        value: MsgAddSubscriberRequest.fromJSON(value)
      };
    },
    removeSubscriber(value: any) {
      return {
        typeUrl: "/pubsub.v1.MsgRemoveSubscriberRequest",
        value: MsgRemoveSubscriberRequest.fromJSON(value)
      };
    },
    addPublisherIntent(value: any) {
      return {
        typeUrl: "/pubsub.v1.MsgAddPublisherIntentRequest",
        value: MsgAddPublisherIntentRequest.fromJSON(value)
      };
    },
    removePublisherIntent(value: any) {
      return {
        typeUrl: "/pubsub.v1.MsgRemovePublisherIntentRequest",
        value: MsgRemovePublisherIntentRequest.fromJSON(value)
      };
    },
    addSubscriberIntent(value: any) {
      return {
        typeUrl: "/pubsub.v1.MsgAddSubscriberIntentRequest",
        value: MsgAddSubscriberIntentRequest.fromJSON(value)
      };
    },
    removeSubscriberIntent(value: any) {
      return {
        typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentRequest",
        value: MsgRemoveSubscriberIntentRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    removePublisher(value: MsgRemovePublisherRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemovePublisherRequest",
        value: MsgRemovePublisherRequest.fromPartial(value)
      };
    },
    addSubscriber(value: MsgAddSubscriberRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgAddSubscriberRequest",
        value: MsgAddSubscriberRequest.fromPartial(value)
      };
    },
    removeSubscriber(value: MsgRemoveSubscriberRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemoveSubscriberRequest",
        value: MsgRemoveSubscriberRequest.fromPartial(value)
      };
    },
    addPublisherIntent(value: MsgAddPublisherIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgAddPublisherIntentRequest",
        value: MsgAddPublisherIntentRequest.fromPartial(value)
      };
    },
    removePublisherIntent(value: MsgRemovePublisherIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemovePublisherIntentRequest",
        value: MsgRemovePublisherIntentRequest.fromPartial(value)
      };
    },
    addSubscriberIntent(value: MsgAddSubscriberIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgAddSubscriberIntentRequest",
        value: MsgAddSubscriberIntentRequest.fromPartial(value)
      };
    },
    removeSubscriberIntent(value: MsgRemoveSubscriberIntentRequest) {
      return {
        typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentRequest",
        value: MsgRemoveSubscriberIntentRequest.fromPartial(value)
      };
    }
  }
};