import * as _m0 from "protobufjs/minimal";
export interface CreateRoyaltyConfigAuthorization {
    classId: string;
}
export interface CreateRoyaltyConfigAuthorizationSDKType {
    class_id: string;
}
export interface UpdateRoyaltyConfigAuthorization {
    classId: string;
}
export interface UpdateRoyaltyConfigAuthorizationSDKType {
    class_id: string;
}
export interface DeleteRoyaltyConfigAuthorization {
    classId: string;
}
export interface DeleteRoyaltyConfigAuthorizationSDKType {
    class_id: string;
}
export interface CreateListingAuthorization {
    classId: string;
    nftId: string;
}
export interface CreateListingAuthorizationSDKType {
    class_id: string;
    nft_id: string;
}
export interface UpdateListingAuthorization {
    classId: string;
    nftId: string;
}
export interface UpdateListingAuthorizationSDKType {
    class_id: string;
    nft_id: string;
}
export interface DeleteListingAuthorization {
    classId: string;
    nftId: string;
}
export interface DeleteListingAuthorizationSDKType {
    class_id: string;
    nft_id: string;
}
export interface CreateOfferAuthorization {
    classId: string;
    nftId: string;
}
export interface CreateOfferAuthorizationSDKType {
    class_id: string;
    nft_id: string;
}
export interface UpdateOfferAuthorization {
    classId: string;
    nftId: string;
}
export interface UpdateOfferAuthorizationSDKType {
    class_id: string;
    nft_id: string;
}
export interface DeleteOfferAuthorization {
    classId: string;
    nftId: string;
}
export interface DeleteOfferAuthorizationSDKType {
    class_id: string;
    nft_id: string;
}
export interface NewClassAuthorization {
    iscnIdPrefix: string;
}
export interface NewClassAuthorizationSDKType {
    iscn_id_prefix: string;
}
export interface UpdateClassAuthorization {
    classId: string;
}
export interface UpdateClassAuthorizationSDKType {
    class_id: string;
}
export interface MintNFTAuthorization {
    classId: string;
}
export interface MintNFTAuthorizationSDKType {
    class_id: string;
}
export interface SendNFTAuthorization {
    classId: string;
    id: string;
}
export interface SendNFTAuthorizationSDKType {
    class_id: string;
    id: string;
}
export declare const CreateRoyaltyConfigAuthorization: {
    encode(message: CreateRoyaltyConfigAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateRoyaltyConfigAuthorization;
    fromPartial(object: Partial<CreateRoyaltyConfigAuthorization>): CreateRoyaltyConfigAuthorization;
};
export declare const UpdateRoyaltyConfigAuthorization: {
    encode(message: UpdateRoyaltyConfigAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateRoyaltyConfigAuthorization;
    fromPartial(object: Partial<UpdateRoyaltyConfigAuthorization>): UpdateRoyaltyConfigAuthorization;
};
export declare const DeleteRoyaltyConfigAuthorization: {
    encode(message: DeleteRoyaltyConfigAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeleteRoyaltyConfigAuthorization;
    fromPartial(object: Partial<DeleteRoyaltyConfigAuthorization>): DeleteRoyaltyConfigAuthorization;
};
export declare const CreateListingAuthorization: {
    encode(message: CreateListingAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateListingAuthorization;
    fromPartial(object: Partial<CreateListingAuthorization>): CreateListingAuthorization;
};
export declare const UpdateListingAuthorization: {
    encode(message: UpdateListingAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateListingAuthorization;
    fromPartial(object: Partial<UpdateListingAuthorization>): UpdateListingAuthorization;
};
export declare const DeleteListingAuthorization: {
    encode(message: DeleteListingAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeleteListingAuthorization;
    fromPartial(object: Partial<DeleteListingAuthorization>): DeleteListingAuthorization;
};
export declare const CreateOfferAuthorization: {
    encode(message: CreateOfferAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateOfferAuthorization;
    fromPartial(object: Partial<CreateOfferAuthorization>): CreateOfferAuthorization;
};
export declare const UpdateOfferAuthorization: {
    encode(message: UpdateOfferAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateOfferAuthorization;
    fromPartial(object: Partial<UpdateOfferAuthorization>): UpdateOfferAuthorization;
};
export declare const DeleteOfferAuthorization: {
    encode(message: DeleteOfferAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeleteOfferAuthorization;
    fromPartial(object: Partial<DeleteOfferAuthorization>): DeleteOfferAuthorization;
};
export declare const NewClassAuthorization: {
    encode(message: NewClassAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NewClassAuthorization;
    fromPartial(object: Partial<NewClassAuthorization>): NewClassAuthorization;
};
export declare const UpdateClassAuthorization: {
    encode(message: UpdateClassAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateClassAuthorization;
    fromPartial(object: Partial<UpdateClassAuthorization>): UpdateClassAuthorization;
};
export declare const MintNFTAuthorization: {
    encode(message: MintNFTAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MintNFTAuthorization;
    fromPartial(object: Partial<MintNFTAuthorization>): MintNFTAuthorization;
};
export declare const SendNFTAuthorization: {
    encode(message: SendNFTAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SendNFTAuthorization;
    fromPartial(object: Partial<SendNFTAuthorization>): SendNFTAuthorization;
};
