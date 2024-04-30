import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ClassesByISCN, ClassesByISCNAmino, ClassesByISCNSDKType } from "./classes_by_iscn";
import { ClassesByAccount, ClassesByAccountAmino, ClassesByAccountSDKType } from "./classes_by_account";
import { BlindBoxContent, BlindBoxContentAmino, BlindBoxContentSDKType } from "./blind_box_content";
import { ClassRevealQueueEntry, ClassRevealQueueEntryAmino, ClassRevealQueueEntrySDKType } from "./class_reveal_queue";
import { Offer, OfferAmino, OfferSDKType } from "./offer";
import { Listing, ListingAmino, ListingSDKType } from "./listing";
import { OfferExpireQueueEntry, OfferExpireQueueEntryAmino, OfferExpireQueueEntrySDKType } from "./offer_expire_queue";
import { ListingExpireQueueEntry, ListingExpireQueueEntryAmino, ListingExpireQueueEntrySDKType } from "./listing_expire_queue";
import { RoyaltyConfigByClass, RoyaltyConfigByClassAmino, RoyaltyConfigByClassSDKType } from "./royalty_config";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the likenft module's genesis state. */
export interface GenesisState {
  params: Params;
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
export interface GenesisStateProtoMsg {
  typeUrl: "/likechain.likenft.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the likenft module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  classes_by_iscn_list?: ClassesByISCNAmino[];
  classes_by_account_list?: ClassesByAccountAmino[];
  blind_box_content_list?: BlindBoxContentAmino[];
  class_reveal_queue?: ClassRevealQueueEntryAmino[];
  offer_list?: OfferAmino[];
  listing_list?: ListingAmino[];
  offer_expire_queue?: OfferExpireQueueEntryAmino[];
  listing_expire_queue?: ListingExpireQueueEntryAmino[];
  royalty_config_by_class_list?: RoyaltyConfigByClassAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/likechain.likenft.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the likenft module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
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
    params: Params.fromPartial({}),
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
  typeUrl: "/likechain.likenft.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.classesByIscnList = object.classes_by_iscn_list?.map(e => ClassesByISCN.fromAmino(e)) || [];
    message.classesByAccountList = object.classes_by_account_list?.map(e => ClassesByAccount.fromAmino(e)) || [];
    message.blindBoxContentList = object.blind_box_content_list?.map(e => BlindBoxContent.fromAmino(e)) || [];
    message.classRevealQueue = object.class_reveal_queue?.map(e => ClassRevealQueueEntry.fromAmino(e)) || [];
    message.offerList = object.offer_list?.map(e => Offer.fromAmino(e)) || [];
    message.listingList = object.listing_list?.map(e => Listing.fromAmino(e)) || [];
    message.offerExpireQueue = object.offer_expire_queue?.map(e => OfferExpireQueueEntry.fromAmino(e)) || [];
    message.listingExpireQueue = object.listing_expire_queue?.map(e => ListingExpireQueueEntry.fromAmino(e)) || [];
    message.royaltyConfigByClassList = object.royalty_config_by_class_list?.map(e => RoyaltyConfigByClass.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.classesByIscnList) {
      obj.classes_by_iscn_list = message.classesByIscnList.map(e => e ? ClassesByISCN.toAmino(e) : undefined);
    } else {
      obj.classes_by_iscn_list = [];
    }
    if (message.classesByAccountList) {
      obj.classes_by_account_list = message.classesByAccountList.map(e => e ? ClassesByAccount.toAmino(e) : undefined);
    } else {
      obj.classes_by_account_list = [];
    }
    if (message.blindBoxContentList) {
      obj.blind_box_content_list = message.blindBoxContentList.map(e => e ? BlindBoxContent.toAmino(e) : undefined);
    } else {
      obj.blind_box_content_list = [];
    }
    if (message.classRevealQueue) {
      obj.class_reveal_queue = message.classRevealQueue.map(e => e ? ClassRevealQueueEntry.toAmino(e) : undefined);
    } else {
      obj.class_reveal_queue = [];
    }
    if (message.offerList) {
      obj.offer_list = message.offerList.map(e => e ? Offer.toAmino(e) : undefined);
    } else {
      obj.offer_list = [];
    }
    if (message.listingList) {
      obj.listing_list = message.listingList.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listing_list = [];
    }
    if (message.offerExpireQueue) {
      obj.offer_expire_queue = message.offerExpireQueue.map(e => e ? OfferExpireQueueEntry.toAmino(e) : undefined);
    } else {
      obj.offer_expire_queue = [];
    }
    if (message.listingExpireQueue) {
      obj.listing_expire_queue = message.listingExpireQueue.map(e => e ? ListingExpireQueueEntry.toAmino(e) : undefined);
    } else {
      obj.listing_expire_queue = [];
    }
    if (message.royaltyConfigByClassList) {
      obj.royalty_config_by_class_list = message.royaltyConfigByClassList.map(e => e ? RoyaltyConfigByClass.toAmino(e) : undefined);
    } else {
      obj.royalty_config_by_class_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};