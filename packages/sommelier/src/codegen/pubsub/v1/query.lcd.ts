import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPublisherRequest, QueryPublisherResponseSDKType, QueryPublishersRequest, QueryPublishersResponseSDKType, QuerySubscriberRequest, QuerySubscriberResponseSDKType, QuerySubscribersRequest, QuerySubscribersResponseSDKType, QueryValidatorSubscribersRequest, QueryValidatorSubscribersResponseSDKType, QueryPublisherIntentRequest, QueryPublisherIntentResponseSDKType, QueryPublisherIntentsRequest, QueryPublisherIntentsResponseSDKType, QueryPublisherIntentsByPublisherDomainRequest, QueryPublisherIntentsByPublisherDomainResponseSDKType, QueryPublisherIntentsBySubscriptionIDRequest, QueryPublisherIntentsBySubscriptionIDResponseSDKType, QuerySubscriberIntentRequest, QuerySubscriberIntentResponseSDKType, QuerySubscriberIntentsRequest, QuerySubscriberIntentsResponseSDKType, QuerySubscriberIntentsBySubscriberAddressRequest, QuerySubscriberIntentsBySubscriberAddressResponseSDKType, QuerySubscriberIntentsBySubscriptionIDRequest, QuerySubscriberIntentsBySubscriptionIDResponseSDKType, QuerySubscriberIntentsByPublisherDomainRequest, QuerySubscriberIntentsByPublisherDomainResponseSDKType, QueryDefaultSubscriptionRequest, QueryDefaultSubscriptionResponseSDKType, QueryDefaultSubscriptionsRequest, QueryDefaultSubscriptionsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QueryPublisher */
  async queryPublisher(params: QueryPublisherRequest): Promise<QueryPublisherResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/publishers/${params.publisherDomain}`;
    return await this.req.get<QueryPublisherResponseSDKType>(endpoint);
  }
  /* QueryPublishers */
  async queryPublishers(_params: QueryPublishersRequest = {}): Promise<QueryPublishersResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/publishers`;
    return await this.req.get<QueryPublishersResponseSDKType>(endpoint);
  }
  /* QuerySubscriber */
  async querySubscriber(params: QuerySubscriberRequest): Promise<QuerySubscriberResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/subscribers/${params.subscriberAddress}`;
    return await this.req.get<QuerySubscriberResponseSDKType>(endpoint);
  }
  /* QuerySubscribers */
  async querySubscribers(_params: QuerySubscribersRequest = {}): Promise<QuerySubscribersResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/subscribers`;
    return await this.req.get<QuerySubscribersResponseSDKType>(endpoint);
  }
  /* QueryValidatorSubscribers */
  async queryValidatorSubscribers(_params: QueryValidatorSubscribersRequest = {}): Promise<QueryValidatorSubscribersResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/validator_subscribers`;
    return await this.req.get<QueryValidatorSubscribersResponseSDKType>(endpoint);
  }
  /* QueryPublisherIntent */
  async queryPublisherIntent(params: QueryPublisherIntentRequest): Promise<QueryPublisherIntentResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/publisher_intents/${params.publisherDomain}/${params.subscriptionId}`;
    return await this.req.get<QueryPublisherIntentResponseSDKType>(endpoint);
  }
  /* QueryPublisherIntents */
  async queryPublisherIntents(_params: QueryPublisherIntentsRequest = {}): Promise<QueryPublisherIntentsResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/publisher_intents`;
    return await this.req.get<QueryPublisherIntentsResponseSDKType>(endpoint);
  }
  /* QueryPublisherIntentsByPublisherDomain */
  async queryPublisherIntentsByPublisherDomain(params: QueryPublisherIntentsByPublisherDomainRequest): Promise<QueryPublisherIntentsByPublisherDomainResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/publisher_intents/${params.publisherDomain}`;
    return await this.req.get<QueryPublisherIntentsByPublisherDomainResponseSDKType>(endpoint);
  }
  /* QueryPublisherIntentsBySubscriptionID */
  async queryPublisherIntentsBySubscriptionID(params: QueryPublisherIntentsBySubscriptionIDRequest): Promise<QueryPublisherIntentsBySubscriptionIDResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/publisher_intents_by_subscription_id/${params.subscriptionId}`;
    return await this.req.get<QueryPublisherIntentsBySubscriptionIDResponseSDKType>(endpoint);
  }
  /* QuerySubscriberIntent */
  async querySubscriberIntent(params: QuerySubscriberIntentRequest): Promise<QuerySubscriberIntentResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/subscriber_intents/${params.subscriberAddress}/${params.subscriptionId}`;
    return await this.req.get<QuerySubscriberIntentResponseSDKType>(endpoint);
  }
  /* QuerySubscriberIntents */
  async querySubscriberIntents(_params: QuerySubscriberIntentsRequest = {}): Promise<QuerySubscriberIntentsResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/subscriber_intents`;
    return await this.req.get<QuerySubscriberIntentsResponseSDKType>(endpoint);
  }
  /* QuerySubscriberIntentsBySubscriberAddress */
  async querySubscriberIntentsBySubscriberAddress(params: QuerySubscriberIntentsBySubscriberAddressRequest): Promise<QuerySubscriberIntentsBySubscriberAddressResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/subscriber_intents/${params.subscriberAddress}`;
    return await this.req.get<QuerySubscriberIntentsBySubscriberAddressResponseSDKType>(endpoint);
  }
  /* QuerySubscriberIntentsBySubscriptionID */
  async querySubscriberIntentsBySubscriptionID(params: QuerySubscriberIntentsBySubscriptionIDRequest): Promise<QuerySubscriberIntentsBySubscriptionIDResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/subscriber_intents_by_subscription_id/${params.subscriptionId}`;
    return await this.req.get<QuerySubscriberIntentsBySubscriptionIDResponseSDKType>(endpoint);
  }
  /* QuerySubscriberIntentsByPublisherDomain */
  async querySubscriberIntentsByPublisherDomain(params: QuerySubscriberIntentsByPublisherDomainRequest): Promise<QuerySubscriberIntentsByPublisherDomainResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/subscriber_intents_by_publisher_domain/${params.publisherDomain}`;
    return await this.req.get<QuerySubscriberIntentsByPublisherDomainResponseSDKType>(endpoint);
  }
  /* QueryDefaultSubscription */
  async queryDefaultSubscription(params: QueryDefaultSubscriptionRequest): Promise<QueryDefaultSubscriptionResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/default_subscriptions/${params.subscriptionId}`;
    return await this.req.get<QueryDefaultSubscriptionResponseSDKType>(endpoint);
  }
  /* QueryDefaultSubscriptions */
  async queryDefaultSubscriptions(_params: QueryDefaultSubscriptionsRequest = {}): Promise<QueryDefaultSubscriptionsResponseSDKType> {
    const endpoint = `sommelier/pubsub/v1/default_subscriptions`;
    return await this.req.get<QueryDefaultSubscriptionsResponseSDKType>(endpoint);
  }
}