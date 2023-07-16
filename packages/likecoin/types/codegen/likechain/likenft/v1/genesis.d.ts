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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
