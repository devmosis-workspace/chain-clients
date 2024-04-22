import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRemovePublisherRequest, MsgAddSubscriberRequest, MsgRemoveSubscriberRequest, MsgAddPublisherIntentRequest, MsgRemovePublisherIntentRequest, MsgAddSubscriberIntentRequest, MsgRemoveSubscriberIntentRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        removePublisher(value: MsgRemovePublisherRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        addSubscriber(value: MsgAddSubscriberRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeSubscriber(value: MsgRemoveSubscriberRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        addPublisherIntent(value: MsgAddPublisherIntentRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        removePublisherIntent(value: MsgRemovePublisherIntentRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        addSubscriberIntent(value: MsgAddSubscriberIntentRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeSubscriberIntent(value: MsgRemoveSubscriberIntentRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        removePublisher(value: MsgRemovePublisherRequest): {
            typeUrl: string;
            value: MsgRemovePublisherRequest;
        };
        addSubscriber(value: MsgAddSubscriberRequest): {
            typeUrl: string;
            value: MsgAddSubscriberRequest;
        };
        removeSubscriber(value: MsgRemoveSubscriberRequest): {
            typeUrl: string;
            value: MsgRemoveSubscriberRequest;
        };
        addPublisherIntent(value: MsgAddPublisherIntentRequest): {
            typeUrl: string;
            value: MsgAddPublisherIntentRequest;
        };
        removePublisherIntent(value: MsgRemovePublisherIntentRequest): {
            typeUrl: string;
            value: MsgRemovePublisherIntentRequest;
        };
        addSubscriberIntent(value: MsgAddSubscriberIntentRequest): {
            typeUrl: string;
            value: MsgAddSubscriberIntentRequest;
        };
        removeSubscriberIntent(value: MsgRemoveSubscriberIntentRequest): {
            typeUrl: string;
            value: MsgRemoveSubscriberIntentRequest;
        };
    };
    fromJSON: {
        removePublisher(value: any): {
            typeUrl: string;
            value: MsgRemovePublisherRequest;
        };
        addSubscriber(value: any): {
            typeUrl: string;
            value: MsgAddSubscriberRequest;
        };
        removeSubscriber(value: any): {
            typeUrl: string;
            value: MsgRemoveSubscriberRequest;
        };
        addPublisherIntent(value: any): {
            typeUrl: string;
            value: MsgAddPublisherIntentRequest;
        };
        removePublisherIntent(value: any): {
            typeUrl: string;
            value: MsgRemovePublisherIntentRequest;
        };
        addSubscriberIntent(value: any): {
            typeUrl: string;
            value: MsgAddSubscriberIntentRequest;
        };
        removeSubscriberIntent(value: any): {
            typeUrl: string;
            value: MsgRemoveSubscriberIntentRequest;
        };
    };
    fromPartial: {
        removePublisher(value: MsgRemovePublisherRequest): {
            typeUrl: string;
            value: MsgRemovePublisherRequest;
        };
        addSubscriber(value: MsgAddSubscriberRequest): {
            typeUrl: string;
            value: MsgAddSubscriberRequest;
        };
        removeSubscriber(value: MsgRemoveSubscriberRequest): {
            typeUrl: string;
            value: MsgRemoveSubscriberRequest;
        };
        addPublisherIntent(value: MsgAddPublisherIntentRequest): {
            typeUrl: string;
            value: MsgAddPublisherIntentRequest;
        };
        removePublisherIntent(value: MsgRemovePublisherIntentRequest): {
            typeUrl: string;
            value: MsgRemovePublisherIntentRequest;
        };
        addSubscriberIntent(value: MsgAddSubscriberIntentRequest): {
            typeUrl: string;
            value: MsgAddSubscriberIntentRequest;
        };
        removeSubscriberIntent(value: MsgRemoveSubscriberIntentRequest): {
            typeUrl: string;
            value: MsgRemoveSubscriberIntentRequest;
        };
    };
};
