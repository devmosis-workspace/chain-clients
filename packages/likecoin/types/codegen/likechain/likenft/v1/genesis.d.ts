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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
