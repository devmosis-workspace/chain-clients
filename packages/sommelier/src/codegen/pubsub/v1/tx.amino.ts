import { MsgRemovePublisherRequest, MsgAddSubscriberRequest, MsgRemoveSubscriberRequest, MsgAddPublisherIntentRequest, MsgRemovePublisherIntentRequest, MsgAddSubscriberIntentRequest, MsgRemoveSubscriberIntentRequest } from "./tx";
export const AminoConverter = {
  "/pubsub.v1.MsgRemovePublisherRequest": {
    aminoType: "/pubsub.v1.MsgRemovePublisherRequest",
    toAmino: MsgRemovePublisherRequest.toAmino,
    fromAmino: MsgRemovePublisherRequest.fromAmino
  },
  "/pubsub.v1.MsgAddSubscriberRequest": {
    aminoType: "/pubsub.v1.MsgAddSubscriberRequest",
    toAmino: MsgAddSubscriberRequest.toAmino,
    fromAmino: MsgAddSubscriberRequest.fromAmino
  },
  "/pubsub.v1.MsgRemoveSubscriberRequest": {
    aminoType: "/pubsub.v1.MsgRemoveSubscriberRequest",
    toAmino: MsgRemoveSubscriberRequest.toAmino,
    fromAmino: MsgRemoveSubscriberRequest.fromAmino
  },
  "/pubsub.v1.MsgAddPublisherIntentRequest": {
    aminoType: "/pubsub.v1.MsgAddPublisherIntentRequest",
    toAmino: MsgAddPublisherIntentRequest.toAmino,
    fromAmino: MsgAddPublisherIntentRequest.fromAmino
  },
  "/pubsub.v1.MsgRemovePublisherIntentRequest": {
    aminoType: "/pubsub.v1.MsgRemovePublisherIntentRequest",
    toAmino: MsgRemovePublisherIntentRequest.toAmino,
    fromAmino: MsgRemovePublisherIntentRequest.fromAmino
  },
  "/pubsub.v1.MsgAddSubscriberIntentRequest": {
    aminoType: "/pubsub.v1.MsgAddSubscriberIntentRequest",
    toAmino: MsgAddSubscriberIntentRequest.toAmino,
    fromAmino: MsgAddSubscriberIntentRequest.fromAmino
  },
  "/pubsub.v1.MsgRemoveSubscriberIntentRequest": {
    aminoType: "/pubsub.v1.MsgRemoveSubscriberIntentRequest",
    toAmino: MsgRemoveSubscriberIntentRequest.toAmino,
    fromAmino: MsgRemoveSubscriberIntentRequest.fromAmino
  }
};