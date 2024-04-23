import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPublisherRequest, QueryPublisherResponseSDKType, QueryPublishersRequest, QueryPublishersResponseSDKType, QuerySubscriberRequest, QuerySubscriberResponseSDKType, QuerySubscribersRequest, QuerySubscribersResponseSDKType, QueryValidatorSubscribersRequest, QueryValidatorSubscribersResponseSDKType, QueryPublisherIntentRequest, QueryPublisherIntentResponseSDKType, QueryPublisherIntentsRequest, QueryPublisherIntentsResponseSDKType, QueryPublisherIntentsByPublisherDomainRequest, QueryPublisherIntentsByPublisherDomainResponseSDKType, QueryPublisherIntentsBySubscriptionIDRequest, QueryPublisherIntentsBySubscriptionIDResponseSDKType, QuerySubscriberIntentRequest, QuerySubscriberIntentResponseSDKType, QuerySubscriberIntentsRequest, QuerySubscriberIntentsResponseSDKType, QuerySubscriberIntentsBySubscriberAddressRequest, QuerySubscriberIntentsBySubscriberAddressResponseSDKType, QuerySubscriberIntentsBySubscriptionIDRequest, QuerySubscriberIntentsBySubscriptionIDResponseSDKType, QuerySubscriberIntentsByPublisherDomainRequest, QuerySubscriberIntentsByPublisherDomainResponseSDKType, QueryDefaultSubscriptionRequest, QueryDefaultSubscriptionResponseSDKType, QueryDefaultSubscriptionsRequest, QueryDefaultSubscriptionsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    queryPublisher(params: QueryPublisherRequest): Promise<QueryPublisherResponseSDKType>;
    queryPublishers(_params?: QueryPublishersRequest): Promise<QueryPublishersResponseSDKType>;
    querySubscriber(params: QuerySubscriberRequest): Promise<QuerySubscriberResponseSDKType>;
    querySubscribers(_params?: QuerySubscribersRequest): Promise<QuerySubscribersResponseSDKType>;
    queryValidatorSubscribers(_params?: QueryValidatorSubscribersRequest): Promise<QueryValidatorSubscribersResponseSDKType>;
    queryPublisherIntent(params: QueryPublisherIntentRequest): Promise<QueryPublisherIntentResponseSDKType>;
    queryPublisherIntents(_params?: QueryPublisherIntentsRequest): Promise<QueryPublisherIntentsResponseSDKType>;
    queryPublisherIntentsByPublisherDomain(params: QueryPublisherIntentsByPublisherDomainRequest): Promise<QueryPublisherIntentsByPublisherDomainResponseSDKType>;
    queryPublisherIntentsBySubscriptionID(params: QueryPublisherIntentsBySubscriptionIDRequest): Promise<QueryPublisherIntentsBySubscriptionIDResponseSDKType>;
    querySubscriberIntent(params: QuerySubscriberIntentRequest): Promise<QuerySubscriberIntentResponseSDKType>;
    querySubscriberIntents(_params?: QuerySubscriberIntentsRequest): Promise<QuerySubscriberIntentsResponseSDKType>;
    querySubscriberIntentsBySubscriberAddress(params: QuerySubscriberIntentsBySubscriberAddressRequest): Promise<QuerySubscriberIntentsBySubscriberAddressResponseSDKType>;
    querySubscriberIntentsBySubscriptionID(params: QuerySubscriberIntentsBySubscriptionIDRequest): Promise<QuerySubscriberIntentsBySubscriptionIDResponseSDKType>;
    querySubscriberIntentsByPublisherDomain(params: QuerySubscriberIntentsByPublisherDomainRequest): Promise<QuerySubscriberIntentsByPublisherDomainResponseSDKType>;
    queryDefaultSubscription(params: QueryDefaultSubscriptionRequest): Promise<QueryDefaultSubscriptionResponseSDKType>;
    queryDefaultSubscriptions(_params?: QueryDefaultSubscriptionsRequest): Promise<QueryDefaultSubscriptionsResponseSDKType>;
}
