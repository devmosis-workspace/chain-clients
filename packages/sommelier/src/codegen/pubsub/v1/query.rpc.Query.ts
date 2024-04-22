import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPublisherRequest, QueryPublisherResponse, QueryPublishersRequest, QueryPublishersResponse, QuerySubscriberRequest, QuerySubscriberResponse, QuerySubscribersRequest, QuerySubscribersResponse, QueryValidatorSubscribersRequest, QueryValidatorSubscribersResponse, QueryPublisherIntentRequest, QueryPublisherIntentResponse, QueryPublisherIntentsRequest, QueryPublisherIntentsResponse, QueryPublisherIntentsByPublisherDomainRequest, QueryPublisherIntentsByPublisherDomainResponse, QueryPublisherIntentsBySubscriptionIDRequest, QueryPublisherIntentsBySubscriptionIDResponse, QuerySubscriberIntentRequest, QuerySubscriberIntentResponse, QuerySubscriberIntentsRequest, QuerySubscriberIntentsResponse, QuerySubscriberIntentsBySubscriberAddressRequest, QuerySubscriberIntentsBySubscriberAddressResponse, QuerySubscriberIntentsBySubscriptionIDRequest, QuerySubscriberIntentsBySubscriptionIDResponse, QuerySubscriberIntentsByPublisherDomainRequest, QuerySubscriberIntentsByPublisherDomainResponse, QueryDefaultSubscriptionRequest, QueryDefaultSubscriptionResponse, QueryDefaultSubscriptionsRequest, QueryDefaultSubscriptionsResponse } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  queryPublisher(request: QueryPublisherRequest): Promise<QueryPublisherResponse>;
  queryPublishers(request?: QueryPublishersRequest): Promise<QueryPublishersResponse>;
  querySubscriber(request: QuerySubscriberRequest): Promise<QuerySubscriberResponse>;
  querySubscribers(request?: QuerySubscribersRequest): Promise<QuerySubscribersResponse>;
  queryValidatorSubscribers(request?: QueryValidatorSubscribersRequest): Promise<QueryValidatorSubscribersResponse>;
  queryPublisherIntent(request: QueryPublisherIntentRequest): Promise<QueryPublisherIntentResponse>;
  queryPublisherIntents(request?: QueryPublisherIntentsRequest): Promise<QueryPublisherIntentsResponse>;
  queryPublisherIntentsByPublisherDomain(request: QueryPublisherIntentsByPublisherDomainRequest): Promise<QueryPublisherIntentsByPublisherDomainResponse>;
  queryPublisherIntentsBySubscriptionID(request: QueryPublisherIntentsBySubscriptionIDRequest): Promise<QueryPublisherIntentsBySubscriptionIDResponse>;
  querySubscriberIntent(request: QuerySubscriberIntentRequest): Promise<QuerySubscriberIntentResponse>;
  querySubscriberIntents(request?: QuerySubscriberIntentsRequest): Promise<QuerySubscriberIntentsResponse>;
  querySubscriberIntentsBySubscriberAddress(request: QuerySubscriberIntentsBySubscriberAddressRequest): Promise<QuerySubscriberIntentsBySubscriberAddressResponse>;
  querySubscriberIntentsBySubscriptionID(request: QuerySubscriberIntentsBySubscriptionIDRequest): Promise<QuerySubscriberIntentsBySubscriptionIDResponse>;
  querySubscriberIntentsByPublisherDomain(request: QuerySubscriberIntentsByPublisherDomainRequest): Promise<QuerySubscriberIntentsByPublisherDomainResponse>;
  queryDefaultSubscription(request: QueryDefaultSubscriptionRequest): Promise<QueryDefaultSubscriptionResponse>;
  queryDefaultSubscriptions(request?: QueryDefaultSubscriptionsRequest): Promise<QueryDefaultSubscriptionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.queryPublisher = this.queryPublisher.bind(this);
    this.queryPublishers = this.queryPublishers.bind(this);
    this.querySubscriber = this.querySubscriber.bind(this);
    this.querySubscribers = this.querySubscribers.bind(this);
    this.queryValidatorSubscribers = this.queryValidatorSubscribers.bind(this);
    this.queryPublisherIntent = this.queryPublisherIntent.bind(this);
    this.queryPublisherIntents = this.queryPublisherIntents.bind(this);
    this.queryPublisherIntentsByPublisherDomain = this.queryPublisherIntentsByPublisherDomain.bind(this);
    this.queryPublisherIntentsBySubscriptionID = this.queryPublisherIntentsBySubscriptionID.bind(this);
    this.querySubscriberIntent = this.querySubscriberIntent.bind(this);
    this.querySubscriberIntents = this.querySubscriberIntents.bind(this);
    this.querySubscriberIntentsBySubscriberAddress = this.querySubscriberIntentsBySubscriberAddress.bind(this);
    this.querySubscriberIntentsBySubscriptionID = this.querySubscriberIntentsBySubscriptionID.bind(this);
    this.querySubscriberIntentsByPublisherDomain = this.querySubscriberIntentsByPublisherDomain.bind(this);
    this.queryDefaultSubscription = this.queryDefaultSubscription.bind(this);
    this.queryDefaultSubscriptions = this.queryDefaultSubscriptions.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryPublisher(request: QueryPublisherRequest): Promise<QueryPublisherResponse> {
    const data = QueryPublisherRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QueryPublisher", data);
    return promise.then(data => QueryPublisherResponse.decode(new BinaryReader(data)));
  }
  queryPublishers(request: QueryPublishersRequest = {}): Promise<QueryPublishersResponse> {
    const data = QueryPublishersRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QueryPublishers", data);
    return promise.then(data => QueryPublishersResponse.decode(new BinaryReader(data)));
  }
  querySubscriber(request: QuerySubscriberRequest): Promise<QuerySubscriberResponse> {
    const data = QuerySubscriberRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QuerySubscriber", data);
    return promise.then(data => QuerySubscriberResponse.decode(new BinaryReader(data)));
  }
  querySubscribers(request: QuerySubscribersRequest = {}): Promise<QuerySubscribersResponse> {
    const data = QuerySubscribersRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QuerySubscribers", data);
    return promise.then(data => QuerySubscribersResponse.decode(new BinaryReader(data)));
  }
  queryValidatorSubscribers(request: QueryValidatorSubscribersRequest = {}): Promise<QueryValidatorSubscribersResponse> {
    const data = QueryValidatorSubscribersRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QueryValidatorSubscribers", data);
    return promise.then(data => QueryValidatorSubscribersResponse.decode(new BinaryReader(data)));
  }
  queryPublisherIntent(request: QueryPublisherIntentRequest): Promise<QueryPublisherIntentResponse> {
    const data = QueryPublisherIntentRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QueryPublisherIntent", data);
    return promise.then(data => QueryPublisherIntentResponse.decode(new BinaryReader(data)));
  }
  queryPublisherIntents(request: QueryPublisherIntentsRequest = {}): Promise<QueryPublisherIntentsResponse> {
    const data = QueryPublisherIntentsRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QueryPublisherIntents", data);
    return promise.then(data => QueryPublisherIntentsResponse.decode(new BinaryReader(data)));
  }
  queryPublisherIntentsByPublisherDomain(request: QueryPublisherIntentsByPublisherDomainRequest): Promise<QueryPublisherIntentsByPublisherDomainResponse> {
    const data = QueryPublisherIntentsByPublisherDomainRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QueryPublisherIntentsByPublisherDomain", data);
    return promise.then(data => QueryPublisherIntentsByPublisherDomainResponse.decode(new BinaryReader(data)));
  }
  queryPublisherIntentsBySubscriptionID(request: QueryPublisherIntentsBySubscriptionIDRequest): Promise<QueryPublisherIntentsBySubscriptionIDResponse> {
    const data = QueryPublisherIntentsBySubscriptionIDRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QueryPublisherIntentsBySubscriptionID", data);
    return promise.then(data => QueryPublisherIntentsBySubscriptionIDResponse.decode(new BinaryReader(data)));
  }
  querySubscriberIntent(request: QuerySubscriberIntentRequest): Promise<QuerySubscriberIntentResponse> {
    const data = QuerySubscriberIntentRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QuerySubscriberIntent", data);
    return promise.then(data => QuerySubscriberIntentResponse.decode(new BinaryReader(data)));
  }
  querySubscriberIntents(request: QuerySubscriberIntentsRequest = {}): Promise<QuerySubscriberIntentsResponse> {
    const data = QuerySubscriberIntentsRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QuerySubscriberIntents", data);
    return promise.then(data => QuerySubscriberIntentsResponse.decode(new BinaryReader(data)));
  }
  querySubscriberIntentsBySubscriberAddress(request: QuerySubscriberIntentsBySubscriberAddressRequest): Promise<QuerySubscriberIntentsBySubscriberAddressResponse> {
    const data = QuerySubscriberIntentsBySubscriberAddressRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QuerySubscriberIntentsBySubscriberAddress", data);
    return promise.then(data => QuerySubscriberIntentsBySubscriberAddressResponse.decode(new BinaryReader(data)));
  }
  querySubscriberIntentsBySubscriptionID(request: QuerySubscriberIntentsBySubscriptionIDRequest): Promise<QuerySubscriberIntentsBySubscriptionIDResponse> {
    const data = QuerySubscriberIntentsBySubscriptionIDRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QuerySubscriberIntentsBySubscriptionID", data);
    return promise.then(data => QuerySubscriberIntentsBySubscriptionIDResponse.decode(new BinaryReader(data)));
  }
  querySubscriberIntentsByPublisherDomain(request: QuerySubscriberIntentsByPublisherDomainRequest): Promise<QuerySubscriberIntentsByPublisherDomainResponse> {
    const data = QuerySubscriberIntentsByPublisherDomainRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QuerySubscriberIntentsByPublisherDomain", data);
    return promise.then(data => QuerySubscriberIntentsByPublisherDomainResponse.decode(new BinaryReader(data)));
  }
  queryDefaultSubscription(request: QueryDefaultSubscriptionRequest): Promise<QueryDefaultSubscriptionResponse> {
    const data = QueryDefaultSubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QueryDefaultSubscription", data);
    return promise.then(data => QueryDefaultSubscriptionResponse.decode(new BinaryReader(data)));
  }
  queryDefaultSubscriptions(request: QueryDefaultSubscriptionsRequest = {}): Promise<QueryDefaultSubscriptionsResponse> {
    const data = QueryDefaultSubscriptionsRequest.encode(request).finish();
    const promise = this.rpc.request("pubsub.v1.Query", "QueryDefaultSubscriptions", data);
    return promise.then(data => QueryDefaultSubscriptionsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    queryPublisher(request: QueryPublisherRequest): Promise<QueryPublisherResponse> {
      return queryService.queryPublisher(request);
    },
    queryPublishers(request?: QueryPublishersRequest): Promise<QueryPublishersResponse> {
      return queryService.queryPublishers(request);
    },
    querySubscriber(request: QuerySubscriberRequest): Promise<QuerySubscriberResponse> {
      return queryService.querySubscriber(request);
    },
    querySubscribers(request?: QuerySubscribersRequest): Promise<QuerySubscribersResponse> {
      return queryService.querySubscribers(request);
    },
    queryValidatorSubscribers(request?: QueryValidatorSubscribersRequest): Promise<QueryValidatorSubscribersResponse> {
      return queryService.queryValidatorSubscribers(request);
    },
    queryPublisherIntent(request: QueryPublisherIntentRequest): Promise<QueryPublisherIntentResponse> {
      return queryService.queryPublisherIntent(request);
    },
    queryPublisherIntents(request?: QueryPublisherIntentsRequest): Promise<QueryPublisherIntentsResponse> {
      return queryService.queryPublisherIntents(request);
    },
    queryPublisherIntentsByPublisherDomain(request: QueryPublisherIntentsByPublisherDomainRequest): Promise<QueryPublisherIntentsByPublisherDomainResponse> {
      return queryService.queryPublisherIntentsByPublisherDomain(request);
    },
    queryPublisherIntentsBySubscriptionID(request: QueryPublisherIntentsBySubscriptionIDRequest): Promise<QueryPublisherIntentsBySubscriptionIDResponse> {
      return queryService.queryPublisherIntentsBySubscriptionID(request);
    },
    querySubscriberIntent(request: QuerySubscriberIntentRequest): Promise<QuerySubscriberIntentResponse> {
      return queryService.querySubscriberIntent(request);
    },
    querySubscriberIntents(request?: QuerySubscriberIntentsRequest): Promise<QuerySubscriberIntentsResponse> {
      return queryService.querySubscriberIntents(request);
    },
    querySubscriberIntentsBySubscriberAddress(request: QuerySubscriberIntentsBySubscriberAddressRequest): Promise<QuerySubscriberIntentsBySubscriberAddressResponse> {
      return queryService.querySubscriberIntentsBySubscriberAddress(request);
    },
    querySubscriberIntentsBySubscriptionID(request: QuerySubscriberIntentsBySubscriptionIDRequest): Promise<QuerySubscriberIntentsBySubscriptionIDResponse> {
      return queryService.querySubscriberIntentsBySubscriptionID(request);
    },
    querySubscriberIntentsByPublisherDomain(request: QuerySubscriberIntentsByPublisherDomainRequest): Promise<QuerySubscriberIntentsByPublisherDomainResponse> {
      return queryService.querySubscriberIntentsByPublisherDomain(request);
    },
    queryDefaultSubscription(request: QueryDefaultSubscriptionRequest): Promise<QueryDefaultSubscriptionResponse> {
      return queryService.queryDefaultSubscription(request);
    },
    queryDefaultSubscriptions(request?: QueryDefaultSubscriptionsRequest): Promise<QueryDefaultSubscriptionsResponse> {
      return queryService.queryDefaultSubscriptions(request);
    }
  };
};