import { Params, ParamsSDKType } from "./params";
import { ClassesByISCN, ClassesByISCNSDKType } from "./classes_by_iscn";
import { ClassesByAccount, ClassesByAccountSDKType } from "./classes_by_account";
import { BlindBoxContent, BlindBoxContentSDKType } from "./blind_box_content";
import { ClassRevealQueueEntry, ClassRevealQueueEntrySDKType } from "./class_reveal_queue";
import { Offer, OfferSDKType } from "./offer";
import { Listing, ListingSDKType } from "./listing";
import { OfferExpireQueueEntry, OfferExpireQueueEntrySDKType } from "./offer_expire_queue";
import { ListingExpireQueueEntry, ListingExpireQueueEntrySDKType } from "./listing_expire_queue";
import { RoyaltyConfigByClass, RoyaltyConfigByClassSDKType } from "./royalty_config";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the likenft module's genesis state. */
export interface GenesisState {
  params?: Params;
  classesByIscnList: ClassesByISCN[];
  classesByAccountList: ClassesByAccount[];
  blindBoxContentList: BlindBoxContent[];
  classRevealQueue: ClassRevealQueueEntry[];
  offerList: Offer[];
  listingList: Listing[];
  offerExpireQueue: OfferExpireQueueEntry[];
  listingExpireQueue: ListingExpireQueueEntry[];
  royaltyConfigByClassList: RoyaltyConfigByClass[];
}
/** GenesisState defines the likenft module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  classes_by_iscn_list: ClassesByISCNSDKType[];
  classes_by_account_list: ClassesByAccountSDKType[];
  blind_box_content_list: BlindBoxContentSDKType[];
  class_reveal_queue: ClassRevealQueueEntrySDKType[];
  offer_list: OfferSDKType[];
  listing_list: ListingSDKType[];
  offer_expire_queue: OfferExpireQueueEntrySDKType[];
  listing_expire_queue: ListingExpireQueueEntrySDKType[];
  royalty_config_by_class_list: RoyaltyConfigByClassSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    classesByIscnList: [],
    classesByAccountList: [],
    blindBoxContentList: [],
    classRevealQueue: [],
    offerList: [],
    listingList: [],
    offerExpireQueue: [],
    listingExpireQueue: [],
    royaltyConfigByClassList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.classesByIscnList) {
      ClassesByISCN.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.classesByAccountList) {
      ClassesByAccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.blindBoxContentList) {
      BlindBoxContent.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.classRevealQueue) {
      ClassRevealQueueEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.offerList) {
      Offer.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.listingList) {
      Listing.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.offerExpireQueue) {
      OfferExpireQueueEntry.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.listingExpireQueue) {
      ListingExpireQueueEntry.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.royaltyConfigByClassList) {
      RoyaltyConfigByClass.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      classesByIscnList: Array.isArray(object?.classesByIscnList) ? object.classesByIscnList.map((e: any) => ClassesByISCN.fromJSON(e)) : [],
      classesByAccountList: Array.isArray(object?.classesByAccountList) ? object.classesByAccountList.map((e: any) => ClassesByAccount.fromJSON(e)) : [],
      blindBoxContentList: Array.isArray(object?.blindBoxContentList) ? object.blindBoxContentList.map((e: any) => BlindBoxContent.fromJSON(e)) : [],
      classRevealQueue: Array.isArray(object?.classRevealQueue) ? object.classRevealQueue.map((e: any) => ClassRevealQueueEntry.fromJSON(e)) : [],
      offerList: Array.isArray(object?.offerList) ? object.offerList.map((e: any) => Offer.fromJSON(e)) : [],
      listingList: Array.isArray(object?.listingList) ? object.listingList.map((e: any) => Listing.fromJSON(e)) : [],
      offerExpireQueue: Array.isArray(object?.offerExpireQueue) ? object.offerExpireQueue.map((e: any) => OfferExpireQueueEntry.fromJSON(e)) : [],
      listingExpireQueue: Array.isArray(object?.listingExpireQueue) ? object.listingExpireQueue.map((e: any) => ListingExpireQueueEntry.fromJSON(e)) : [],
      royaltyConfigByClassList: Array.isArray(object?.royaltyConfigByClassList) ? object.royaltyConfigByClassList.map((e: any) => RoyaltyConfigByClass.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.classesByIscnList = object.classesByIscnList?.map(e => ClassesByISCN.fromPartial(e)) || [];
    message.classesByAccountList = object.classesByAccountList?.map(e => ClassesByAccount.fromPartial(e)) || [];
    message.blindBoxContentList = object.blindBoxContentList?.map(e => BlindBoxContent.fromPartial(e)) || [];
    message.classRevealQueue = object.classRevealQueue?.map(e => ClassRevealQueueEntry.fromPartial(e)) || [];
    message.offerList = object.offerList?.map(e => Offer.fromPartial(e)) || [];
    message.listingList = object.listingList?.map(e => Listing.fromPartial(e)) || [];
    message.offerExpireQueue = object.offerExpireQueue?.map(e => OfferExpireQueueEntry.fromPartial(e)) || [];
    message.listingExpireQueue = object.listingExpireQueue?.map(e => ListingExpireQueueEntry.fromPartial(e)) || [];
    message.royaltyConfigByClassList = object.royaltyConfigByClassList?.map(e => RoyaltyConfigByClass.fromPartial(e)) || [];
    return message;
  }
};