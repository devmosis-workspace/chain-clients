import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const pubsubAminoConverters: {
    "/pubsub.v1.MsgRemovePublisherRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgRemovePublisherRequest) => import("./v1/tx").MsgRemovePublisherRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgRemovePublisherRequestAmino) => import("./v1/tx").MsgRemovePublisherRequest;
    };
    "/pubsub.v1.MsgAddSubscriberRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgAddSubscriberRequest) => import("./v1/tx").MsgAddSubscriberRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgAddSubscriberRequestAmino) => import("./v1/tx").MsgAddSubscriberRequest;
    };
    "/pubsub.v1.MsgRemoveSubscriberRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgRemoveSubscriberRequest) => import("./v1/tx").MsgRemoveSubscriberRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgRemoveSubscriberRequestAmino) => import("./v1/tx").MsgRemoveSubscriberRequest;
    };
    "/pubsub.v1.MsgAddPublisherIntentRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgAddPublisherIntentRequest) => import("./v1/tx").MsgAddPublisherIntentRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgAddPublisherIntentRequestAmino) => import("./v1/tx").MsgAddPublisherIntentRequest;
    };
    "/pubsub.v1.MsgRemovePublisherIntentRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgRemovePublisherIntentRequest) => import("./v1/tx").MsgRemovePublisherIntentRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgRemovePublisherIntentRequestAmino) => import("./v1/tx").MsgRemovePublisherIntentRequest;
    };
    "/pubsub.v1.MsgAddSubscriberIntentRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgAddSubscriberIntentRequest) => import("./v1/tx").MsgAddSubscriberIntentRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgAddSubscriberIntentRequestAmino) => import("./v1/tx").MsgAddSubscriberIntentRequest;
    };
    "/pubsub.v1.MsgRemoveSubscriberIntentRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgRemoveSubscriberIntentRequest) => import("./v1/tx").MsgRemoveSubscriberIntentRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgRemoveSubscriberIntentRequestAmino) => import("./v1/tx").MsgRemoveSubscriberIntentRequest;
    };
};
export declare const pubsubProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPubsubClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPubsubClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
