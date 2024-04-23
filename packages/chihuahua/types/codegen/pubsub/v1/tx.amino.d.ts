import { MsgRemovePublisherRequest, MsgAddSubscriberRequest, MsgRemoveSubscriberRequest, MsgAddPublisherIntentRequest, MsgRemovePublisherIntentRequest, MsgAddSubscriberIntentRequest, MsgRemoveSubscriberIntentRequest } from "./tx";
export declare const AminoConverter: {
    "/pubsub.v1.MsgRemovePublisherRequest": {
        aminoType: string;
        toAmino: (message: MsgRemovePublisherRequest) => import("./tx").MsgRemovePublisherRequestAmino;
        fromAmino: (object: import("./tx").MsgRemovePublisherRequestAmino) => MsgRemovePublisherRequest;
    };
    "/pubsub.v1.MsgAddSubscriberRequest": {
        aminoType: string;
        toAmino: (message: MsgAddSubscriberRequest) => import("./tx").MsgAddSubscriberRequestAmino;
        fromAmino: (object: import("./tx").MsgAddSubscriberRequestAmino) => MsgAddSubscriberRequest;
    };
    "/pubsub.v1.MsgRemoveSubscriberRequest": {
        aminoType: string;
        toAmino: (message: MsgRemoveSubscriberRequest) => import("./tx").MsgRemoveSubscriberRequestAmino;
        fromAmino: (object: import("./tx").MsgRemoveSubscriberRequestAmino) => MsgRemoveSubscriberRequest;
    };
    "/pubsub.v1.MsgAddPublisherIntentRequest": {
        aminoType: string;
        toAmino: (message: MsgAddPublisherIntentRequest) => import("./tx").MsgAddPublisherIntentRequestAmino;
        fromAmino: (object: import("./tx").MsgAddPublisherIntentRequestAmino) => MsgAddPublisherIntentRequest;
    };
    "/pubsub.v1.MsgRemovePublisherIntentRequest": {
        aminoType: string;
        toAmino: (message: MsgRemovePublisherIntentRequest) => import("./tx").MsgRemovePublisherIntentRequestAmino;
        fromAmino: (object: import("./tx").MsgRemovePublisherIntentRequestAmino) => MsgRemovePublisherIntentRequest;
    };
    "/pubsub.v1.MsgAddSubscriberIntentRequest": {
        aminoType: string;
        toAmino: (message: MsgAddSubscriberIntentRequest) => import("./tx").MsgAddSubscriberIntentRequestAmino;
        fromAmino: (object: import("./tx").MsgAddSubscriberIntentRequestAmino) => MsgAddSubscriberIntentRequest;
    };
    "/pubsub.v1.MsgRemoveSubscriberIntentRequest": {
        aminoType: string;
        toAmino: (message: MsgRemoveSubscriberIntentRequest) => import("./tx").MsgRemoveSubscriberIntentRequestAmino;
        fromAmino: (object: import("./tx").MsgRemoveSubscriberIntentRequestAmino) => MsgRemoveSubscriberIntentRequest;
    };
};
