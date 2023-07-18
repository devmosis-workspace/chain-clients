import * as _0 from "./iscn/authz";
import * as _1 from "./iscn/genesis";
import * as _2 from "./iscn/iscnid";
import * as _3 from "./iscn/params";
import * as _4 from "./iscn/query";
import * as _5 from "./iscn/store";
import * as _6 from "./iscn/tx";
import * as _7 from "./likenft/v1/authz";
import * as _8 from "./likenft/v1/blind_box_content";
import * as _9 from "./likenft/v1/class_data";
import * as _10 from "./likenft/v1/class_input";
import * as _11 from "./likenft/v1/class_reveal_queue";
import * as _12 from "./likenft/v1/classes_by_account";
import * as _13 from "./likenft/v1/classes_by_iscn";
import * as _14 from "./likenft/v1/event";
import * as _15 from "./likenft/v1/genesis";
import * as _16 from "./likenft/v1/listing_expire_queue";
import * as _17 from "./likenft/v1/listing";
import * as _18 from "./likenft/v1/nft_data";
import * as _19 from "./likenft/v1/nft_input";
import * as _20 from "./likenft/v1/offer_expire_queue";
import * as _21 from "./likenft/v1/offer";
import * as _22 from "./likenft/v1/params";
import * as _23 from "./likenft/v1/query";
import * as _24 from "./likenft/v1/royalty_config";
import * as _25 from "./likenft/v1/tx";
import * as _144 from "./iscn/query.lcd";
import * as _145 from "./likenft/v1/query.lcd";
import * as _146 from "./iscn/query.rpc.Query";
import * as _147 from "./likenft/v1/query.rpc.Query";
import * as _148 from "./iscn/tx.rpc.msg";
import * as _149 from "./likenft/v1/tx.rpc.msg";
export declare namespace likechain {
    const iscn: {
        MsgClientImpl: typeof _148.MsgClientImpl;
        QueryClientImpl: typeof _146.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            recordsById(request: _4.QueryRecordsByIdRequest): Promise<_4.QueryRecordsByIdResponse>;
            recordsByFingerprint(request: _4.QueryRecordsByFingerprintRequest): Promise<_4.QueryRecordsByFingerprintResponse>;
            recordsByOwner(request: _4.QueryRecordsByOwnerRequest): Promise<_4.QueryRecordsByOwnerResponse>;
            params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            getCid(request: _4.QueryGetCidRequest): Promise<_4.QueryGetCidResponse>;
            hasCid(request: _4.QueryHasCidRequest): Promise<_4.QueryHasCidResponse>;
            getCidSize(request: _4.QueryGetCidSizeRequest): Promise<_4.QueryGetCidSizeResponse>;
        };
        LCDQueryClient: typeof _144.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createIscnRecord(value: _6.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateIscnRecord(value: _6.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeIscnRecordOwnership(value: _6.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createIscnRecord(value: _6.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: _6.MsgCreateIscnRecord;
                };
                updateIscnRecord(value: _6.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: _6.MsgUpdateIscnRecord;
                };
                changeIscnRecordOwnership(value: _6.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: _6.MsgChangeIscnRecordOwnership;
                };
            };
            fromJSON: {
                createIscnRecord(value: any): {
                    typeUrl: string;
                    value: _6.MsgCreateIscnRecord;
                };
                updateIscnRecord(value: any): {
                    typeUrl: string;
                    value: _6.MsgUpdateIscnRecord;
                };
                changeIscnRecordOwnership(value: any): {
                    typeUrl: string;
                    value: _6.MsgChangeIscnRecordOwnership;
                };
            };
            fromPartial: {
                createIscnRecord(value: _6.MsgCreateIscnRecord): {
                    typeUrl: string;
                    value: _6.MsgCreateIscnRecord;
                };
                updateIscnRecord(value: _6.MsgUpdateIscnRecord): {
                    typeUrl: string;
                    value: _6.MsgUpdateIscnRecord;
                };
                changeIscnRecordOwnership(value: _6.MsgChangeIscnRecordOwnership): {
                    typeUrl: string;
                    value: _6.MsgChangeIscnRecordOwnership;
                };
            };
        };
        AminoConverter: {
            "/likechain.iscn.MsgCreateIscnRecord": {
                aminoType: string;
                toAmino: ({ from, record, nonce }: _6.MsgCreateIscnRecord) => {
                    from: string;
                    record: {
                        recordNotes: string;
                        contentFingerprints: string[];
                        stakeholders: Uint8Array[];
                        contentMetadata: Uint8Array;
                    };
                    nonce: string;
                };
                fromAmino: ({ from, record, nonce }: {
                    from: string;
                    record: {
                        recordNotes: string;
                        contentFingerprints: string[];
                        stakeholders: Uint8Array[];
                        contentMetadata: Uint8Array;
                    };
                    nonce: string;
                }) => _6.MsgCreateIscnRecord;
            };
            "/likechain.iscn.MsgUpdateIscnRecord": {
                aminoType: string;
                toAmino: ({ from, iscnId, record }: _6.MsgUpdateIscnRecord) => {
                    from: string;
                    iscn_id: string;
                    record: {
                        recordNotes: string;
                        contentFingerprints: string[];
                        stakeholders: Uint8Array[];
                        contentMetadata: Uint8Array;
                    };
                };
                fromAmino: ({ from, iscn_id, record }: {
                    from: string;
                    iscn_id: string;
                    record: {
                        recordNotes: string;
                        contentFingerprints: string[];
                        stakeholders: Uint8Array[];
                        contentMetadata: Uint8Array;
                    };
                }) => _6.MsgUpdateIscnRecord;
            };
            "/likechain.iscn.MsgChangeIscnRecordOwnership": {
                aminoType: string;
                toAmino: ({ from, iscnId, newOwner }: _6.MsgChangeIscnRecordOwnership) => {
                    from: string;
                    iscn_id: string;
                    new_owner: string;
                };
                fromAmino: ({ from, iscn_id, new_owner }: {
                    from: string;
                    iscn_id: string;
                    new_owner: string;
                }) => _6.MsgChangeIscnRecordOwnership;
            };
        };
        IscnRecord: {
            encode(message: _6.IscnRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.IscnRecord;
            fromPartial(object: Partial<_6.IscnRecord>): _6.IscnRecord;
        };
        MsgCreateIscnRecord: {
            encode(message: _6.MsgCreateIscnRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.MsgCreateIscnRecord;
            fromPartial(object: Partial<_6.MsgCreateIscnRecord>): _6.MsgCreateIscnRecord;
        };
        MsgCreateIscnRecordResponse: {
            encode(message: _6.MsgCreateIscnRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.MsgCreateIscnRecordResponse;
            fromPartial(object: Partial<_6.MsgCreateIscnRecordResponse>): _6.MsgCreateIscnRecordResponse;
        };
        MsgUpdateIscnRecord: {
            encode(message: _6.MsgUpdateIscnRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.MsgUpdateIscnRecord;
            fromPartial(object: Partial<_6.MsgUpdateIscnRecord>): _6.MsgUpdateIscnRecord;
        };
        MsgUpdateIscnRecordResponse: {
            encode(message: _6.MsgUpdateIscnRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.MsgUpdateIscnRecordResponse;
            fromPartial(object: Partial<_6.MsgUpdateIscnRecordResponse>): _6.MsgUpdateIscnRecordResponse;
        };
        MsgChangeIscnRecordOwnership: {
            encode(message: _6.MsgChangeIscnRecordOwnership, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.MsgChangeIscnRecordOwnership;
            fromPartial(object: Partial<_6.MsgChangeIscnRecordOwnership>): _6.MsgChangeIscnRecordOwnership;
        };
        MsgChangeIscnRecordOwnershipResponse: {
            encode(_: _6.MsgChangeIscnRecordOwnershipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.MsgChangeIscnRecordOwnershipResponse;
            fromPartial(_: Partial<_6.MsgChangeIscnRecordOwnershipResponse>): _6.MsgChangeIscnRecordOwnershipResponse;
        };
        StoreRecord: {
            encode(message: _5.StoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.StoreRecord;
            fromPartial(object: Partial<_5.StoreRecord>): _5.StoreRecord;
        };
        ContentIdRecord: {
            encode(message: _5.ContentIdRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.ContentIdRecord;
            fromPartial(object: Partial<_5.ContentIdRecord>): _5.ContentIdRecord;
        };
        QueryResponseRecord: {
            encode(message: _4.QueryResponseRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryResponseRecord;
            fromPartial(object: Partial<_4.QueryResponseRecord>): _4.QueryResponseRecord;
        };
        QueryRecordsByIdRequest: {
            encode(message: _4.QueryRecordsByIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryRecordsByIdRequest;
            fromPartial(object: Partial<_4.QueryRecordsByIdRequest>): _4.QueryRecordsByIdRequest;
        };
        QueryRecordsByIdResponse: {
            encode(message: _4.QueryRecordsByIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryRecordsByIdResponse;
            fromPartial(object: Partial<_4.QueryRecordsByIdResponse>): _4.QueryRecordsByIdResponse;
        };
        QueryRecordsByFingerprintRequest: {
            encode(message: _4.QueryRecordsByFingerprintRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryRecordsByFingerprintRequest;
            fromPartial(object: Partial<_4.QueryRecordsByFingerprintRequest>): _4.QueryRecordsByFingerprintRequest;
        };
        QueryRecordsByFingerprintResponse: {
            encode(message: _4.QueryRecordsByFingerprintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryRecordsByFingerprintResponse;
            fromPartial(object: Partial<_4.QueryRecordsByFingerprintResponse>): _4.QueryRecordsByFingerprintResponse;
        };
        QueryRecordsByOwnerRequest: {
            encode(message: _4.QueryRecordsByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryRecordsByOwnerRequest;
            fromPartial(object: Partial<_4.QueryRecordsByOwnerRequest>): _4.QueryRecordsByOwnerRequest;
        };
        QueryRecordsByOwnerResponse: {
            encode(message: _4.QueryRecordsByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryRecordsByOwnerResponse;
            fromPartial(object: Partial<_4.QueryRecordsByOwnerResponse>): _4.QueryRecordsByOwnerResponse;
        };
        QueryParamsRequest: {
            encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.QueryParamsRequest;
            fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryParamsResponse;
            fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
        };
        QueryGetCidRequest: {
            encode(message: _4.QueryGetCidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryGetCidRequest;
            fromPartial(object: Partial<_4.QueryGetCidRequest>): _4.QueryGetCidRequest;
        };
        QueryGetCidResponse: {
            encode(message: _4.QueryGetCidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryGetCidResponse;
            fromPartial(object: Partial<_4.QueryGetCidResponse>): _4.QueryGetCidResponse;
        };
        QueryGetCidSizeRequest: {
            encode(message: _4.QueryGetCidSizeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryGetCidSizeRequest;
            fromPartial(object: Partial<_4.QueryGetCidSizeRequest>): _4.QueryGetCidSizeRequest;
        };
        QueryGetCidSizeResponse: {
            encode(message: _4.QueryGetCidSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryGetCidSizeResponse;
            fromPartial(object: Partial<_4.QueryGetCidSizeResponse>): _4.QueryGetCidSizeResponse;
        };
        QueryHasCidRequest: {
            encode(message: _4.QueryHasCidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryHasCidRequest;
            fromPartial(object: Partial<_4.QueryHasCidRequest>): _4.QueryHasCidRequest;
        };
        QueryHasCidResponse: {
            encode(message: _4.QueryHasCidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryHasCidResponse;
            fromPartial(object: Partial<_4.QueryHasCidResponse>): _4.QueryHasCidResponse;
        };
        Params: {
            encode(message: _3.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.Params;
            fromPartial(object: Partial<_3.Params>): _3.Params;
        };
        IscnIdPrefix: {
            encode(message: _2.IscnIdPrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _2.IscnIdPrefix;
            fromPartial(object: Partial<_2.IscnIdPrefix>): _2.IscnIdPrefix;
        };
        IscnId: {
            encode(message: _2.IscnId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _2.IscnId;
            fromPartial(object: Partial<_2.IscnId>): _2.IscnId;
        };
        GenesisState: {
            encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.GenesisState;
            fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
        };
        GenesisState_ContentIdRecord: {
            encode(message: _1.GenesisState_ContentIdRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.GenesisState_ContentIdRecord;
            fromPartial(object: Partial<_1.GenesisState_ContentIdRecord>): _1.GenesisState_ContentIdRecord;
        };
        UpdateAuthorization: {
            encode(message: _0.UpdateAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.UpdateAuthorization;
            fromPartial(object: Partial<_0.UpdateAuthorization>): _0.UpdateAuthorization;
        };
    };
    namespace likenft {
        const v1: {
            MsgClientImpl: typeof _149.MsgClientImpl;
            QueryClientImpl: typeof _147.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                classesByISCN(request: _23.QueryClassesByISCNRequest): Promise<_23.QueryClassesByISCNResponse>;
                classesByISCNIndex(request?: _23.QueryClassesByISCNIndexRequest): Promise<_23.QueryClassesByISCNIndexResponse>;
                iSCNByClass(request: _23.QueryISCNByClassRequest): Promise<_23.QueryISCNByClassResponse>;
                classesByAccount(request: _23.QueryClassesByAccountRequest): Promise<_23.QueryClassesByAccountResponse>;
                classesByAccountIndex(request?: _23.QueryClassesByAccountIndexRequest): Promise<_23.QueryClassesByAccountIndexResponse>;
                accountByClass(request: _23.QueryAccountByClassRequest): Promise<_23.QueryAccountByClassResponse>;
                blindBoxContent(request: _23.QueryBlindBoxContentRequest): Promise<_23.QueryBlindBoxContentResponse>;
                blindBoxContentIndex(request?: _23.QueryBlindBoxContentIndexRequest): Promise<_23.QueryBlindBoxContentIndexResponse>;
                blindBoxContents(request: _23.QueryBlindBoxContentsRequest): Promise<_23.QueryBlindBoxContentsResponse>;
                offer(request: _23.QueryOfferRequest): Promise<_23.QueryOfferResponse>;
                offerIndex(request?: _23.QueryOfferIndexRequest): Promise<_23.QueryOfferIndexResponse>;
                offersByClass(request: _23.QueryOffersByClassRequest): Promise<_23.QueryOffersByClassResponse>;
                offersByNFT(request: _23.QueryOffersByNFTRequest): Promise<_23.QueryOffersByNFTResponse>;
                listing(request: _23.QueryListingRequest): Promise<_23.QueryListingResponse>;
                listingIndex(request?: _23.QueryListingIndexRequest): Promise<_23.QueryListingIndexResponse>;
                listingsByClass(request: _23.QueryListingsByClassRequest): Promise<_23.QueryListingsByClassResponse>;
                listingsByNFT(request: _23.QueryListingsByNFTRequest): Promise<_23.QueryListingsByNFTResponse>;
                royaltyConfig(request: _23.QueryRoyaltyConfigRequest): Promise<_23.QueryRoyaltyConfigResponse>;
                royaltyConfigIndex(request?: _23.QueryRoyaltyConfigIndexRequest): Promise<_23.QueryRoyaltyConfigIndexResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    newClass(value: _25.MsgNewClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClass(value: _25.MsgUpdateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintNFT(value: _25.MsgMintNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnNFT(value: _25.MsgBurnNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBlindBoxContent(value: _25.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBlindBoxContent(value: _25.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteBlindBoxContent(value: _25.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createOffer(value: _25.MsgCreateOffer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateOffer(value: _25.MsgUpdateOffer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteOffer(value: _25.MsgDeleteOffer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createListing(value: _25.MsgCreateListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateListing(value: _25.MsgUpdateListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteListing(value: _25.MsgDeleteListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sellNFT(value: _25.MsgSellNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    buyNFT(value: _25.MsgBuyNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRoyaltyConfig(value: _25.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRoyaltyConfig(value: _25.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRoyaltyConfig(value: _25.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    newClass(value: _25.MsgNewClass): {
                        typeUrl: string;
                        value: _25.MsgNewClass;
                    };
                    updateClass(value: _25.MsgUpdateClass): {
                        typeUrl: string;
                        value: _25.MsgUpdateClass;
                    };
                    mintNFT(value: _25.MsgMintNFT): {
                        typeUrl: string;
                        value: _25.MsgMintNFT;
                    };
                    burnNFT(value: _25.MsgBurnNFT): {
                        typeUrl: string;
                        value: _25.MsgBurnNFT;
                    };
                    createBlindBoxContent(value: _25.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: _25.MsgCreateBlindBoxContent;
                    };
                    updateBlindBoxContent(value: _25.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: _25.MsgUpdateBlindBoxContent;
                    };
                    deleteBlindBoxContent(value: _25.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: _25.MsgDeleteBlindBoxContent;
                    };
                    createOffer(value: _25.MsgCreateOffer): {
                        typeUrl: string;
                        value: _25.MsgCreateOffer;
                    };
                    updateOffer(value: _25.MsgUpdateOffer): {
                        typeUrl: string;
                        value: _25.MsgUpdateOffer;
                    };
                    deleteOffer(value: _25.MsgDeleteOffer): {
                        typeUrl: string;
                        value: _25.MsgDeleteOffer;
                    };
                    createListing(value: _25.MsgCreateListing): {
                        typeUrl: string;
                        value: _25.MsgCreateListing;
                    };
                    updateListing(value: _25.MsgUpdateListing): {
                        typeUrl: string;
                        value: _25.MsgUpdateListing;
                    };
                    deleteListing(value: _25.MsgDeleteListing): {
                        typeUrl: string;
                        value: _25.MsgDeleteListing;
                    };
                    sellNFT(value: _25.MsgSellNFT): {
                        typeUrl: string;
                        value: _25.MsgSellNFT;
                    };
                    buyNFT(value: _25.MsgBuyNFT): {
                        typeUrl: string;
                        value: _25.MsgBuyNFT;
                    };
                    createRoyaltyConfig(value: _25.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: _25.MsgCreateRoyaltyConfig;
                    };
                    updateRoyaltyConfig(value: _25.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: _25.MsgUpdateRoyaltyConfig;
                    };
                    deleteRoyaltyConfig(value: _25.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: _25.MsgDeleteRoyaltyConfig;
                    };
                };
                fromJSON: {
                    newClass(value: any): {
                        typeUrl: string;
                        value: _25.MsgNewClass;
                    };
                    updateClass(value: any): {
                        typeUrl: string;
                        value: _25.MsgUpdateClass;
                    };
                    mintNFT(value: any): {
                        typeUrl: string;
                        value: _25.MsgMintNFT;
                    };
                    burnNFT(value: any): {
                        typeUrl: string;
                        value: _25.MsgBurnNFT;
                    };
                    createBlindBoxContent(value: any): {
                        typeUrl: string;
                        value: _25.MsgCreateBlindBoxContent;
                    };
                    updateBlindBoxContent(value: any): {
                        typeUrl: string;
                        value: _25.MsgUpdateBlindBoxContent;
                    };
                    deleteBlindBoxContent(value: any): {
                        typeUrl: string;
                        value: _25.MsgDeleteBlindBoxContent;
                    };
                    createOffer(value: any): {
                        typeUrl: string;
                        value: _25.MsgCreateOffer;
                    };
                    updateOffer(value: any): {
                        typeUrl: string;
                        value: _25.MsgUpdateOffer;
                    };
                    deleteOffer(value: any): {
                        typeUrl: string;
                        value: _25.MsgDeleteOffer;
                    };
                    createListing(value: any): {
                        typeUrl: string;
                        value: _25.MsgCreateListing;
                    };
                    updateListing(value: any): {
                        typeUrl: string;
                        value: _25.MsgUpdateListing;
                    };
                    deleteListing(value: any): {
                        typeUrl: string;
                        value: _25.MsgDeleteListing;
                    };
                    sellNFT(value: any): {
                        typeUrl: string;
                        value: _25.MsgSellNFT;
                    };
                    buyNFT(value: any): {
                        typeUrl: string;
                        value: _25.MsgBuyNFT;
                    };
                    createRoyaltyConfig(value: any): {
                        typeUrl: string;
                        value: _25.MsgCreateRoyaltyConfig;
                    };
                    updateRoyaltyConfig(value: any): {
                        typeUrl: string;
                        value: _25.MsgUpdateRoyaltyConfig;
                    };
                    deleteRoyaltyConfig(value: any): {
                        typeUrl: string;
                        value: _25.MsgDeleteRoyaltyConfig;
                    };
                };
                fromPartial: {
                    newClass(value: _25.MsgNewClass): {
                        typeUrl: string;
                        value: _25.MsgNewClass;
                    };
                    updateClass(value: _25.MsgUpdateClass): {
                        typeUrl: string;
                        value: _25.MsgUpdateClass;
                    };
                    mintNFT(value: _25.MsgMintNFT): {
                        typeUrl: string;
                        value: _25.MsgMintNFT;
                    };
                    burnNFT(value: _25.MsgBurnNFT): {
                        typeUrl: string;
                        value: _25.MsgBurnNFT;
                    };
                    createBlindBoxContent(value: _25.MsgCreateBlindBoxContent): {
                        typeUrl: string;
                        value: _25.MsgCreateBlindBoxContent;
                    };
                    updateBlindBoxContent(value: _25.MsgUpdateBlindBoxContent): {
                        typeUrl: string;
                        value: _25.MsgUpdateBlindBoxContent;
                    };
                    deleteBlindBoxContent(value: _25.MsgDeleteBlindBoxContent): {
                        typeUrl: string;
                        value: _25.MsgDeleteBlindBoxContent;
                    };
                    createOffer(value: _25.MsgCreateOffer): {
                        typeUrl: string;
                        value: _25.MsgCreateOffer;
                    };
                    updateOffer(value: _25.MsgUpdateOffer): {
                        typeUrl: string;
                        value: _25.MsgUpdateOffer;
                    };
                    deleteOffer(value: _25.MsgDeleteOffer): {
                        typeUrl: string;
                        value: _25.MsgDeleteOffer;
                    };
                    createListing(value: _25.MsgCreateListing): {
                        typeUrl: string;
                        value: _25.MsgCreateListing;
                    };
                    updateListing(value: _25.MsgUpdateListing): {
                        typeUrl: string;
                        value: _25.MsgUpdateListing;
                    };
                    deleteListing(value: _25.MsgDeleteListing): {
                        typeUrl: string;
                        value: _25.MsgDeleteListing;
                    };
                    sellNFT(value: _25.MsgSellNFT): {
                        typeUrl: string;
                        value: _25.MsgSellNFT;
                    };
                    buyNFT(value: _25.MsgBuyNFT): {
                        typeUrl: string;
                        value: _25.MsgBuyNFT;
                    };
                    createRoyaltyConfig(value: _25.MsgCreateRoyaltyConfig): {
                        typeUrl: string;
                        value: _25.MsgCreateRoyaltyConfig;
                    };
                    updateRoyaltyConfig(value: _25.MsgUpdateRoyaltyConfig): {
                        typeUrl: string;
                        value: _25.MsgUpdateRoyaltyConfig;
                    };
                    deleteRoyaltyConfig(value: _25.MsgDeleteRoyaltyConfig): {
                        typeUrl: string;
                        value: _25.MsgDeleteRoyaltyConfig;
                    };
                };
            };
            AminoConverter: {
                "/likechain.likenft.v1.MsgNewClass": {
                    aminoType: string;
                    toAmino: ({ creator, parent, input }: _25.MsgNewClass) => {
                        creator: string;
                        parent: {
                            type: number;
                            iscn_id_prefix: string;
                        };
                        input: {
                            name: string;
                            symbol: string;
                            description: string;
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                            config: {
                                burnable: boolean;
                                max_supply: string;
                                blind_box_config: {
                                    mint_periods: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        allowed_addresses: string[];
                                        mint_price: string;
                                    }[];
                                    reveal_time: {
                                        seconds: string;
                                        nanos: number;
                                    };
                                };
                            };
                        };
                    };
                    fromAmino: ({ creator, parent, input }: {
                        creator: string;
                        parent: {
                            type: number;
                            iscn_id_prefix: string;
                        };
                        input: {
                            name: string;
                            symbol: string;
                            description: string;
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                            config: {
                                burnable: boolean;
                                max_supply: string;
                                blind_box_config: {
                                    mint_periods: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        allowed_addresses: string[];
                                        mint_price: string;
                                    }[];
                                    reveal_time: {
                                        seconds: string;
                                        nanos: number;
                                    };
                                };
                            };
                        };
                    }) => _25.MsgNewClass;
                };
                "/likechain.likenft.v1.MsgUpdateClass": {
                    aminoType: string;
                    toAmino: ({ creator, classId, input }: _25.MsgUpdateClass) => {
                        creator: string;
                        class_id: string;
                        input: {
                            name: string;
                            symbol: string;
                            description: string;
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                            config: {
                                burnable: boolean;
                                max_supply: string;
                                blind_box_config: {
                                    mint_periods: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        allowed_addresses: string[];
                                        mint_price: string;
                                    }[];
                                    reveal_time: {
                                        seconds: string;
                                        nanos: number;
                                    };
                                };
                            };
                        };
                    };
                    fromAmino: ({ creator, class_id, input }: {
                        creator: string;
                        class_id: string;
                        input: {
                            name: string;
                            symbol: string;
                            description: string;
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                            config: {
                                burnable: boolean;
                                max_supply: string;
                                blind_box_config: {
                                    mint_periods: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        allowed_addresses: string[];
                                        mint_price: string;
                                    }[];
                                    reveal_time: {
                                        seconds: string;
                                        nanos: number;
                                    };
                                };
                            };
                        };
                    }) => _25.MsgUpdateClass;
                };
                "/likechain.likenft.v1.MsgMintNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id, input }: _25.MsgMintNFT) => {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    };
                    fromAmino: ({ creator, class_id, id, input }: {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    }) => _25.MsgMintNFT;
                };
                "/likechain.likenft.v1.MsgBurnNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId }: _25.MsgBurnNFT) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    }) => _25.MsgBurnNFT;
                };
                "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id, input }: _25.MsgCreateBlindBoxContent) => {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    };
                    fromAmino: ({ creator, class_id, id, input }: {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    }) => _25.MsgCreateBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id, input }: _25.MsgUpdateBlindBoxContent) => {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    };
                    fromAmino: ({ creator, class_id, id, input }: {
                        creator: string;
                        class_id: string;
                        id: string;
                        input: {
                            uri: string;
                            uri_hash: string;
                            metadata: Uint8Array;
                        };
                    }) => _25.MsgUpdateBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
                    aminoType: string;
                    toAmino: ({ creator, classId, id }: _25.MsgDeleteBlindBoxContent) => {
                        creator: string;
                        class_id: string;
                        id: string;
                    };
                    fromAmino: ({ creator, class_id, id }: {
                        creator: string;
                        class_id: string;
                        id: string;
                    }) => _25.MsgDeleteBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgCreateOffer": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _25.MsgCreateOffer) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ creator, class_id, nft_id, price, expiration }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _25.MsgCreateOffer;
                };
                "/likechain.likenft.v1.MsgUpdateOffer": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration }: _25.MsgUpdateOffer) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ creator, class_id, nft_id, price, expiration }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _25.MsgUpdateOffer;
                };
                "/likechain.likenft.v1.MsgDeleteOffer": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId }: _25.MsgDeleteOffer) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    }) => _25.MsgDeleteOffer;
                };
                "/likechain.likenft.v1.MsgCreateListing": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration, fullPayToRoyalty }: _25.MsgCreateListing) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                        full_pay_to_royalty: boolean;
                    };
                    fromAmino: ({ creator, class_id, nft_id, price, expiration, full_pay_to_royalty }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                        full_pay_to_royalty: boolean;
                    }) => _25.MsgCreateListing;
                };
                "/likechain.likenft.v1.MsgUpdateListing": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, price, expiration, fullPayToRoyalty }: _25.MsgUpdateListing) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                        full_pay_to_royalty: boolean;
                    };
                    fromAmino: ({ creator, class_id, nft_id, price, expiration, full_pay_to_royalty }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        price: string;
                        expiration: {
                            seconds: string;
                            nanos: number;
                        };
                        full_pay_to_royalty: boolean;
                    }) => _25.MsgUpdateListing;
                };
                "/likechain.likenft.v1.MsgDeleteListing": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId }: _25.MsgDeleteListing) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                    }) => _25.MsgDeleteListing;
                };
                "/likechain.likenft.v1.MsgSellNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, buyer, price, fullPayToRoyalty }: _25.MsgSellNFT) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        buyer: string;
                        price: string;
                        full_pay_to_royalty: boolean;
                    };
                    fromAmino: ({ creator, class_id, nft_id, buyer, price, full_pay_to_royalty }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        buyer: string;
                        price: string;
                        full_pay_to_royalty: boolean;
                    }) => _25.MsgSellNFT;
                };
                "/likechain.likenft.v1.MsgBuyNFT": {
                    aminoType: string;
                    toAmino: ({ creator, classId, nftId, seller, price }: _25.MsgBuyNFT) => {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        seller: string;
                        price: string;
                    };
                    fromAmino: ({ creator, class_id, nft_id, seller, price }: {
                        creator: string;
                        class_id: string;
                        nft_id: string;
                        seller: string;
                        price: string;
                    }) => _25.MsgBuyNFT;
                };
                "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
                    aminoType: string;
                    toAmino: ({ creator, classId, royaltyConfig }: _25.MsgCreateRoyaltyConfig) => {
                        creator: string;
                        class_id: string;
                        royalty_config: {
                            rate_basis_points: string;
                            stakeholders: {
                                account: string;
                                weight: string;
                            }[];
                        };
                    };
                    fromAmino: ({ creator, class_id, royalty_config }: {
                        creator: string;
                        class_id: string;
                        royalty_config: {
                            rate_basis_points: string;
                            stakeholders: {
                                account: string;
                                weight: string;
                            }[];
                        };
                    }) => _25.MsgCreateRoyaltyConfig;
                };
                "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
                    aminoType: string;
                    toAmino: ({ creator, classId, royaltyConfig }: _25.MsgUpdateRoyaltyConfig) => {
                        creator: string;
                        class_id: string;
                        royalty_config: {
                            rate_basis_points: string;
                            stakeholders: {
                                account: string;
                                weight: string;
                            }[];
                        };
                    };
                    fromAmino: ({ creator, class_id, royalty_config }: {
                        creator: string;
                        class_id: string;
                        royalty_config: {
                            rate_basis_points: string;
                            stakeholders: {
                                account: string;
                                weight: string;
                            }[];
                        };
                    }) => _25.MsgUpdateRoyaltyConfig;
                };
                "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
                    aminoType: string;
                    toAmino: ({ creator, classId }: _25.MsgDeleteRoyaltyConfig) => {
                        creator: string;
                        class_id: string;
                    };
                    fromAmino: ({ creator, class_id }: {
                        creator: string;
                        class_id: string;
                    }) => _25.MsgDeleteRoyaltyConfig;
                };
            };
            MsgNewClass: {
                encode(message: _25.MsgNewClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgNewClass;
                fromPartial(object: Partial<_25.MsgNewClass>): _25.MsgNewClass;
            };
            MsgNewClassResponse: {
                encode(message: _25.MsgNewClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgNewClassResponse;
                fromPartial(object: Partial<_25.MsgNewClassResponse>): _25.MsgNewClassResponse;
            };
            MsgUpdateClass: {
                encode(message: _25.MsgUpdateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateClass;
                fromPartial(object: Partial<_25.MsgUpdateClass>): _25.MsgUpdateClass;
            };
            MsgUpdateClassResponse: {
                encode(message: _25.MsgUpdateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateClassResponse;
                fromPartial(object: Partial<_25.MsgUpdateClassResponse>): _25.MsgUpdateClassResponse;
            };
            MsgMintNFT: {
                encode(message: _25.MsgMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgMintNFT;
                fromPartial(object: Partial<_25.MsgMintNFT>): _25.MsgMintNFT;
            };
            MsgMintNFTResponse: {
                encode(message: _25.MsgMintNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgMintNFTResponse;
                fromPartial(object: Partial<_25.MsgMintNFTResponse>): _25.MsgMintNFTResponse;
            };
            MsgBurnNFT: {
                encode(message: _25.MsgBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgBurnNFT;
                fromPartial(object: Partial<_25.MsgBurnNFT>): _25.MsgBurnNFT;
            };
            MsgBurnNFTResponse: {
                encode(_: _25.MsgBurnNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgBurnNFTResponse;
                fromPartial(_: Partial<_25.MsgBurnNFTResponse>): _25.MsgBurnNFTResponse;
            };
            MsgCreateBlindBoxContent: {
                encode(message: _25.MsgCreateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgCreateBlindBoxContent;
                fromPartial(object: Partial<_25.MsgCreateBlindBoxContent>): _25.MsgCreateBlindBoxContent;
            };
            MsgCreateBlindBoxContentResponse: {
                encode(message: _25.MsgCreateBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgCreateBlindBoxContentResponse;
                fromPartial(object: Partial<_25.MsgCreateBlindBoxContentResponse>): _25.MsgCreateBlindBoxContentResponse;
            };
            MsgUpdateBlindBoxContent: {
                encode(message: _25.MsgUpdateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateBlindBoxContent;
                fromPartial(object: Partial<_25.MsgUpdateBlindBoxContent>): _25.MsgUpdateBlindBoxContent;
            };
            MsgUpdateBlindBoxContentResponse: {
                encode(message: _25.MsgUpdateBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateBlindBoxContentResponse;
                fromPartial(object: Partial<_25.MsgUpdateBlindBoxContentResponse>): _25.MsgUpdateBlindBoxContentResponse;
            };
            MsgDeleteBlindBoxContent: {
                encode(message: _25.MsgDeleteBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgDeleteBlindBoxContent;
                fromPartial(object: Partial<_25.MsgDeleteBlindBoxContent>): _25.MsgDeleteBlindBoxContent;
            };
            MsgDeleteBlindBoxContentResponse: {
                encode(_: _25.MsgDeleteBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgDeleteBlindBoxContentResponse;
                fromPartial(_: Partial<_25.MsgDeleteBlindBoxContentResponse>): _25.MsgDeleteBlindBoxContentResponse;
            };
            MsgCreateOffer: {
                encode(message: _25.MsgCreateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgCreateOffer;
                fromPartial(object: Partial<_25.MsgCreateOffer>): _25.MsgCreateOffer;
            };
            MsgCreateOfferResponse: {
                encode(message: _25.MsgCreateOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgCreateOfferResponse;
                fromPartial(object: Partial<_25.MsgCreateOfferResponse>): _25.MsgCreateOfferResponse;
            };
            MsgUpdateOffer: {
                encode(message: _25.MsgUpdateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateOffer;
                fromPartial(object: Partial<_25.MsgUpdateOffer>): _25.MsgUpdateOffer;
            };
            MsgUpdateOfferResponse: {
                encode(message: _25.MsgUpdateOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateOfferResponse;
                fromPartial(object: Partial<_25.MsgUpdateOfferResponse>): _25.MsgUpdateOfferResponse;
            };
            MsgDeleteOffer: {
                encode(message: _25.MsgDeleteOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgDeleteOffer;
                fromPartial(object: Partial<_25.MsgDeleteOffer>): _25.MsgDeleteOffer;
            };
            MsgDeleteOfferResponse: {
                encode(_: _25.MsgDeleteOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgDeleteOfferResponse;
                fromPartial(_: Partial<_25.MsgDeleteOfferResponse>): _25.MsgDeleteOfferResponse;
            };
            MsgCreateListing: {
                encode(message: _25.MsgCreateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgCreateListing;
                fromPartial(object: Partial<_25.MsgCreateListing>): _25.MsgCreateListing;
            };
            MsgCreateListingResponse: {
                encode(message: _25.MsgCreateListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgCreateListingResponse;
                fromPartial(object: Partial<_25.MsgCreateListingResponse>): _25.MsgCreateListingResponse;
            };
            MsgUpdateListing: {
                encode(message: _25.MsgUpdateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateListing;
                fromPartial(object: Partial<_25.MsgUpdateListing>): _25.MsgUpdateListing;
            };
            MsgUpdateListingResponse: {
                encode(message: _25.MsgUpdateListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateListingResponse;
                fromPartial(object: Partial<_25.MsgUpdateListingResponse>): _25.MsgUpdateListingResponse;
            };
            MsgDeleteListing: {
                encode(message: _25.MsgDeleteListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgDeleteListing;
                fromPartial(object: Partial<_25.MsgDeleteListing>): _25.MsgDeleteListing;
            };
            MsgDeleteListingResponse: {
                encode(_: _25.MsgDeleteListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgDeleteListingResponse;
                fromPartial(_: Partial<_25.MsgDeleteListingResponse>): _25.MsgDeleteListingResponse;
            };
            MsgSellNFT: {
                encode(message: _25.MsgSellNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgSellNFT;
                fromPartial(object: Partial<_25.MsgSellNFT>): _25.MsgSellNFT;
            };
            MsgSellNFTResponse: {
                encode(_: _25.MsgSellNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgSellNFTResponse;
                fromPartial(_: Partial<_25.MsgSellNFTResponse>): _25.MsgSellNFTResponse;
            };
            MsgBuyNFT: {
                encode(message: _25.MsgBuyNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgBuyNFT;
                fromPartial(object: Partial<_25.MsgBuyNFT>): _25.MsgBuyNFT;
            };
            MsgBuyNFTResponse: {
                encode(_: _25.MsgBuyNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgBuyNFTResponse;
                fromPartial(_: Partial<_25.MsgBuyNFTResponse>): _25.MsgBuyNFTResponse;
            };
            MsgCreateRoyaltyConfig: {
                encode(message: _25.MsgCreateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgCreateRoyaltyConfig;
                fromPartial(object: Partial<_25.MsgCreateRoyaltyConfig>): _25.MsgCreateRoyaltyConfig;
            };
            MsgCreateRoyaltyConfigResponse: {
                encode(message: _25.MsgCreateRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgCreateRoyaltyConfigResponse;
                fromPartial(object: Partial<_25.MsgCreateRoyaltyConfigResponse>): _25.MsgCreateRoyaltyConfigResponse;
            };
            MsgUpdateRoyaltyConfig: {
                encode(message: _25.MsgUpdateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateRoyaltyConfig;
                fromPartial(object: Partial<_25.MsgUpdateRoyaltyConfig>): _25.MsgUpdateRoyaltyConfig;
            };
            MsgUpdateRoyaltyConfigResponse: {
                encode(message: _25.MsgUpdateRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateRoyaltyConfigResponse;
                fromPartial(object: Partial<_25.MsgUpdateRoyaltyConfigResponse>): _25.MsgUpdateRoyaltyConfigResponse;
            };
            MsgDeleteRoyaltyConfig: {
                encode(message: _25.MsgDeleteRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgDeleteRoyaltyConfig;
                fromPartial(object: Partial<_25.MsgDeleteRoyaltyConfig>): _25.MsgDeleteRoyaltyConfig;
            };
            MsgDeleteRoyaltyConfigResponse: {
                encode(_: _25.MsgDeleteRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgDeleteRoyaltyConfigResponse;
                fromPartial(_: Partial<_25.MsgDeleteRoyaltyConfigResponse>): _25.MsgDeleteRoyaltyConfigResponse;
            };
            RoyaltyConfigByClass: {
                encode(message: _24.RoyaltyConfigByClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.RoyaltyConfigByClass;
                fromPartial(object: Partial<_24.RoyaltyConfigByClass>): _24.RoyaltyConfigByClass;
            };
            RoyaltyConfig: {
                encode(message: _24.RoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.RoyaltyConfig;
                fromPartial(object: Partial<_24.RoyaltyConfig>): _24.RoyaltyConfig;
            };
            RoyaltyStakeholder: {
                encode(message: _24.RoyaltyStakeholder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.RoyaltyStakeholder;
                fromPartial(object: Partial<_24.RoyaltyStakeholder>): _24.RoyaltyStakeholder;
            };
            RoyaltyConfigInput: {
                encode(message: _24.RoyaltyConfigInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.RoyaltyConfigInput;
                fromPartial(object: Partial<_24.RoyaltyConfigInput>): _24.RoyaltyConfigInput;
            };
            RoyaltyStakeholderInput: {
                encode(message: _24.RoyaltyStakeholderInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.RoyaltyStakeholderInput;
                fromPartial(object: Partial<_24.RoyaltyStakeholderInput>): _24.RoyaltyStakeholderInput;
            };
            QueryParamsRequest: {
                encode(_: _23.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _23.QueryParamsRequest;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _23.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryParamsResponse;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
            };
            QueryClassesByISCNRequest: {
                encode(message: _23.QueryClassesByISCNRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryClassesByISCNRequest;
                fromPartial(object: Partial<_23.QueryClassesByISCNRequest>): _23.QueryClassesByISCNRequest;
            };
            QueryClassesByISCNResponse: {
                encode(message: _23.QueryClassesByISCNResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryClassesByISCNResponse;
                fromPartial(object: Partial<_23.QueryClassesByISCNResponse>): _23.QueryClassesByISCNResponse;
            };
            QueryClassesByISCNIndexRequest: {
                encode(message: _23.QueryClassesByISCNIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryClassesByISCNIndexRequest;
                fromPartial(object: Partial<_23.QueryClassesByISCNIndexRequest>): _23.QueryClassesByISCNIndexRequest;
            };
            QueryClassesByISCNIndexResponse: {
                encode(message: _23.QueryClassesByISCNIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryClassesByISCNIndexResponse;
                fromPartial(object: Partial<_23.QueryClassesByISCNIndexResponse>): _23.QueryClassesByISCNIndexResponse;
            };
            QueryISCNByClassRequest: {
                encode(message: _23.QueryISCNByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryISCNByClassRequest;
                fromPartial(object: Partial<_23.QueryISCNByClassRequest>): _23.QueryISCNByClassRequest;
            };
            QueryISCNByClassResponse: {
                encode(message: _23.QueryISCNByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryISCNByClassResponse;
                fromPartial(object: Partial<_23.QueryISCNByClassResponse>): _23.QueryISCNByClassResponse;
            };
            QueryClassesByAccountRequest: {
                encode(message: _23.QueryClassesByAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryClassesByAccountRequest;
                fromPartial(object: Partial<_23.QueryClassesByAccountRequest>): _23.QueryClassesByAccountRequest;
            };
            QueryClassesByAccountResponse: {
                encode(message: _23.QueryClassesByAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryClassesByAccountResponse;
                fromPartial(object: Partial<_23.QueryClassesByAccountResponse>): _23.QueryClassesByAccountResponse;
            };
            QueryClassesByAccountIndexRequest: {
                encode(message: _23.QueryClassesByAccountIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryClassesByAccountIndexRequest;
                fromPartial(object: Partial<_23.QueryClassesByAccountIndexRequest>): _23.QueryClassesByAccountIndexRequest;
            };
            QueryClassesByAccountIndexResponse: {
                encode(message: _23.QueryClassesByAccountIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryClassesByAccountIndexResponse;
                fromPartial(object: Partial<_23.QueryClassesByAccountIndexResponse>): _23.QueryClassesByAccountIndexResponse;
            };
            QueryAccountByClassRequest: {
                encode(message: _23.QueryAccountByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountByClassRequest;
                fromPartial(object: Partial<_23.QueryAccountByClassRequest>): _23.QueryAccountByClassRequest;
            };
            QueryAccountByClassResponse: {
                encode(message: _23.QueryAccountByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryAccountByClassResponse;
                fromPartial(object: Partial<_23.QueryAccountByClassResponse>): _23.QueryAccountByClassResponse;
            };
            QueryBlindBoxContentRequest: {
                encode(message: _23.QueryBlindBoxContentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryBlindBoxContentRequest;
                fromPartial(object: Partial<_23.QueryBlindBoxContentRequest>): _23.QueryBlindBoxContentRequest;
            };
            QueryBlindBoxContentResponse: {
                encode(message: _23.QueryBlindBoxContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryBlindBoxContentResponse;
                fromPartial(object: Partial<_23.QueryBlindBoxContentResponse>): _23.QueryBlindBoxContentResponse;
            };
            QueryBlindBoxContentIndexRequest: {
                encode(message: _23.QueryBlindBoxContentIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryBlindBoxContentIndexRequest;
                fromPartial(object: Partial<_23.QueryBlindBoxContentIndexRequest>): _23.QueryBlindBoxContentIndexRequest;
            };
            QueryBlindBoxContentIndexResponse: {
                encode(message: _23.QueryBlindBoxContentIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryBlindBoxContentIndexResponse;
                fromPartial(object: Partial<_23.QueryBlindBoxContentIndexResponse>): _23.QueryBlindBoxContentIndexResponse;
            };
            QueryBlindBoxContentsRequest: {
                encode(message: _23.QueryBlindBoxContentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryBlindBoxContentsRequest;
                fromPartial(object: Partial<_23.QueryBlindBoxContentsRequest>): _23.QueryBlindBoxContentsRequest;
            };
            QueryBlindBoxContentsResponse: {
                encode(message: _23.QueryBlindBoxContentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryBlindBoxContentsResponse;
                fromPartial(object: Partial<_23.QueryBlindBoxContentsResponse>): _23.QueryBlindBoxContentsResponse;
            };
            QueryOfferRequest: {
                encode(message: _23.QueryOfferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOfferRequest;
                fromPartial(object: Partial<_23.QueryOfferRequest>): _23.QueryOfferRequest;
            };
            QueryOfferResponse: {
                encode(message: _23.QueryOfferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOfferResponse;
                fromPartial(object: Partial<_23.QueryOfferResponse>): _23.QueryOfferResponse;
            };
            QueryOfferIndexRequest: {
                encode(message: _23.QueryOfferIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOfferIndexRequest;
                fromPartial(object: Partial<_23.QueryOfferIndexRequest>): _23.QueryOfferIndexRequest;
            };
            QueryOfferIndexResponse: {
                encode(message: _23.QueryOfferIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOfferIndexResponse;
                fromPartial(object: Partial<_23.QueryOfferIndexResponse>): _23.QueryOfferIndexResponse;
            };
            QueryOffersByClassRequest: {
                encode(message: _23.QueryOffersByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOffersByClassRequest;
                fromPartial(object: Partial<_23.QueryOffersByClassRequest>): _23.QueryOffersByClassRequest;
            };
            QueryOffersByClassResponse: {
                encode(message: _23.QueryOffersByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOffersByClassResponse;
                fromPartial(object: Partial<_23.QueryOffersByClassResponse>): _23.QueryOffersByClassResponse;
            };
            QueryOffersByNFTRequest: {
                encode(message: _23.QueryOffersByNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOffersByNFTRequest;
                fromPartial(object: Partial<_23.QueryOffersByNFTRequest>): _23.QueryOffersByNFTRequest;
            };
            QueryOffersByNFTResponse: {
                encode(message: _23.QueryOffersByNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryOffersByNFTResponse;
                fromPartial(object: Partial<_23.QueryOffersByNFTResponse>): _23.QueryOffersByNFTResponse;
            };
            QueryListingRequest: {
                encode(message: _23.QueryListingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryListingRequest;
                fromPartial(object: Partial<_23.QueryListingRequest>): _23.QueryListingRequest;
            };
            QueryListingResponse: {
                encode(message: _23.QueryListingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryListingResponse;
                fromPartial(object: Partial<_23.QueryListingResponse>): _23.QueryListingResponse;
            };
            QueryListingIndexRequest: {
                encode(message: _23.QueryListingIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryListingIndexRequest;
                fromPartial(object: Partial<_23.QueryListingIndexRequest>): _23.QueryListingIndexRequest;
            };
            QueryListingIndexResponse: {
                encode(message: _23.QueryListingIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryListingIndexResponse;
                fromPartial(object: Partial<_23.QueryListingIndexResponse>): _23.QueryListingIndexResponse;
            };
            QueryListingsByClassRequest: {
                encode(message: _23.QueryListingsByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryListingsByClassRequest;
                fromPartial(object: Partial<_23.QueryListingsByClassRequest>): _23.QueryListingsByClassRequest;
            };
            QueryListingsByClassResponse: {
                encode(message: _23.QueryListingsByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryListingsByClassResponse;
                fromPartial(object: Partial<_23.QueryListingsByClassResponse>): _23.QueryListingsByClassResponse;
            };
            QueryListingsByNFTRequest: {
                encode(message: _23.QueryListingsByNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryListingsByNFTRequest;
                fromPartial(object: Partial<_23.QueryListingsByNFTRequest>): _23.QueryListingsByNFTRequest;
            };
            QueryListingsByNFTResponse: {
                encode(message: _23.QueryListingsByNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryListingsByNFTResponse;
                fromPartial(object: Partial<_23.QueryListingsByNFTResponse>): _23.QueryListingsByNFTResponse;
            };
            QueryRoyaltyConfigRequest: {
                encode(message: _23.QueryRoyaltyConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryRoyaltyConfigRequest;
                fromPartial(object: Partial<_23.QueryRoyaltyConfigRequest>): _23.QueryRoyaltyConfigRequest;
            };
            QueryRoyaltyConfigResponse: {
                encode(message: _23.QueryRoyaltyConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryRoyaltyConfigResponse;
                fromPartial(object: Partial<_23.QueryRoyaltyConfigResponse>): _23.QueryRoyaltyConfigResponse;
            };
            QueryRoyaltyConfigIndexRequest: {
                encode(message: _23.QueryRoyaltyConfigIndexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryRoyaltyConfigIndexRequest;
                fromPartial(object: Partial<_23.QueryRoyaltyConfigIndexRequest>): _23.QueryRoyaltyConfigIndexRequest;
            };
            QueryRoyaltyConfigIndexResponse: {
                encode(message: _23.QueryRoyaltyConfigIndexResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.QueryRoyaltyConfigIndexResponse;
                fromPartial(object: Partial<_23.QueryRoyaltyConfigIndexResponse>): _23.QueryRoyaltyConfigIndexResponse;
            };
            Params: {
                encode(message: _22.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.Params;
                fromPartial(object: Partial<_22.Params>): _22.Params;
            };
            Offer: {
                encode(message: _21.Offer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Offer;
                fromPartial(object: Partial<_21.Offer>): _21.Offer;
            };
            OfferStoreRecord: {
                encode(message: _21.OfferStoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.OfferStoreRecord;
                fromPartial(object: Partial<_21.OfferStoreRecord>): _21.OfferStoreRecord;
            };
            OfferExpireQueueEntry: {
                encode(message: _20.OfferExpireQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.OfferExpireQueueEntry;
                fromPartial(object: Partial<_20.OfferExpireQueueEntry>): _20.OfferExpireQueueEntry;
            };
            NFTInput: {
                encode(message: _19.NFTInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.NFTInput;
                fromPartial(object: Partial<_19.NFTInput>): _19.NFTInput;
            };
            NFTData: {
                encode(message: _18.NFTData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.NFTData;
                fromPartial(object: Partial<_18.NFTData>): _18.NFTData;
            };
            Listing: {
                encode(message: _17.Listing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Listing;
                fromPartial(object: Partial<_17.Listing>): _17.Listing;
            };
            ListingStoreRecord: {
                encode(message: _17.ListingStoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.ListingStoreRecord;
                fromPartial(object: Partial<_17.ListingStoreRecord>): _17.ListingStoreRecord;
            };
            ListingExpireQueueEntry: {
                encode(message: _16.ListingExpireQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.ListingExpireQueueEntry;
                fromPartial(object: Partial<_16.ListingExpireQueueEntry>): _16.ListingExpireQueueEntry;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            };
            EventNewClass: {
                encode(message: _14.EventNewClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventNewClass;
                fromPartial(object: Partial<_14.EventNewClass>): _14.EventNewClass;
            };
            EventUpdateClass: {
                encode(message: _14.EventUpdateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventUpdateClass;
                fromPartial(object: Partial<_14.EventUpdateClass>): _14.EventUpdateClass;
            };
            EventRevealClass: {
                encode(message: _14.EventRevealClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventRevealClass;
                fromPartial(object: Partial<_14.EventRevealClass>): _14.EventRevealClass;
            };
            EventMintNFT: {
                encode(message: _14.EventMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventMintNFT;
                fromPartial(object: Partial<_14.EventMintNFT>): _14.EventMintNFT;
            };
            EventBurnNFT: {
                encode(message: _14.EventBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventBurnNFT;
                fromPartial(object: Partial<_14.EventBurnNFT>): _14.EventBurnNFT;
            };
            EventCreateBlindBoxContent: {
                encode(message: _14.EventCreateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventCreateBlindBoxContent;
                fromPartial(object: Partial<_14.EventCreateBlindBoxContent>): _14.EventCreateBlindBoxContent;
            };
            EventUpdateBlindBoxContent: {
                encode(message: _14.EventUpdateBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventUpdateBlindBoxContent;
                fromPartial(object: Partial<_14.EventUpdateBlindBoxContent>): _14.EventUpdateBlindBoxContent;
            };
            EventDeleteBlindBoxContent: {
                encode(message: _14.EventDeleteBlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventDeleteBlindBoxContent;
                fromPartial(object: Partial<_14.EventDeleteBlindBoxContent>): _14.EventDeleteBlindBoxContent;
            };
            EventCreateOffer: {
                encode(message: _14.EventCreateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventCreateOffer;
                fromPartial(object: Partial<_14.EventCreateOffer>): _14.EventCreateOffer;
            };
            EventUpdateOffer: {
                encode(message: _14.EventUpdateOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventUpdateOffer;
                fromPartial(object: Partial<_14.EventUpdateOffer>): _14.EventUpdateOffer;
            };
            EventDeleteOffer: {
                encode(message: _14.EventDeleteOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventDeleteOffer;
                fromPartial(object: Partial<_14.EventDeleteOffer>): _14.EventDeleteOffer;
            };
            EventCreateListing: {
                encode(message: _14.EventCreateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventCreateListing;
                fromPartial(object: Partial<_14.EventCreateListing>): _14.EventCreateListing;
            };
            EventUpdateListing: {
                encode(message: _14.EventUpdateListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventUpdateListing;
                fromPartial(object: Partial<_14.EventUpdateListing>): _14.EventUpdateListing;
            };
            EventDeleteListing: {
                encode(message: _14.EventDeleteListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventDeleteListing;
                fromPartial(object: Partial<_14.EventDeleteListing>): _14.EventDeleteListing;
            };
            EventSellNFT: {
                encode(message: _14.EventSellNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventSellNFT;
                fromPartial(object: Partial<_14.EventSellNFT>): _14.EventSellNFT;
            };
            EventBuyNFT: {
                encode(message: _14.EventBuyNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventBuyNFT;
                fromPartial(object: Partial<_14.EventBuyNFT>): _14.EventBuyNFT;
            };
            EventExpireOffer: {
                encode(message: _14.EventExpireOffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventExpireOffer;
                fromPartial(object: Partial<_14.EventExpireOffer>): _14.EventExpireOffer;
            };
            EventExpireListing: {
                encode(message: _14.EventExpireListing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventExpireListing;
                fromPartial(object: Partial<_14.EventExpireListing>): _14.EventExpireListing;
            };
            EventCreateRoyaltyConfig: {
                encode(message: _14.EventCreateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventCreateRoyaltyConfig;
                fromPartial(object: Partial<_14.EventCreateRoyaltyConfig>): _14.EventCreateRoyaltyConfig;
            };
            EventUpdateRoyaltyConfig: {
                encode(message: _14.EventUpdateRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventUpdateRoyaltyConfig;
                fromPartial(object: Partial<_14.EventUpdateRoyaltyConfig>): _14.EventUpdateRoyaltyConfig;
            };
            EventDeleteRoyaltyConfig: {
                encode(message: _14.EventDeleteRoyaltyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventDeleteRoyaltyConfig;
                fromPartial(object: Partial<_14.EventDeleteRoyaltyConfig>): _14.EventDeleteRoyaltyConfig;
            };
            ClassesByISCN: {
                encode(message: _13.ClassesByISCN, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.ClassesByISCN;
                fromPartial(object: Partial<_13.ClassesByISCN>): _13.ClassesByISCN;
            };
            ClassesByAccount: {
                encode(message: _12.ClassesByAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.ClassesByAccount;
                fromPartial(object: Partial<_12.ClassesByAccount>): _12.ClassesByAccount;
            };
            ClassesByAccountStoreRecord: {
                encode(message: _12.ClassesByAccountStoreRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.ClassesByAccountStoreRecord;
                fromPartial(object: Partial<_12.ClassesByAccountStoreRecord>): _12.ClassesByAccountStoreRecord;
            };
            ClassRevealQueueEntry: {
                encode(message: _11.ClassRevealQueueEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.ClassRevealQueueEntry;
                fromPartial(object: Partial<_11.ClassRevealQueueEntry>): _11.ClassRevealQueueEntry;
            };
            ClassInput: {
                encode(message: _10.ClassInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ClassInput;
                fromPartial(object: Partial<_10.ClassInput>): _10.ClassInput;
            };
            ClassParentInput: {
                encode(message: _10.ClassParentInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ClassParentInput;
                fromPartial(object: Partial<_10.ClassParentInput>): _10.ClassParentInput;
            };
            classParentTypeFromJSON(object: any): _9.ClassParentType;
            classParentTypeToJSON(object: _9.ClassParentType): string;
            ClassParentType: typeof _9.ClassParentType;
            ClassParentTypeSDKType: typeof _9.ClassParentType;
            ClassData: {
                encode(message: _9.ClassData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.ClassData;
                fromPartial(object: Partial<_9.ClassData>): _9.ClassData;
            };
            ClassParent: {
                encode(message: _9.ClassParent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.ClassParent;
                fromPartial(object: Partial<_9.ClassParent>): _9.ClassParent;
            };
            MintPeriod: {
                encode(message: _9.MintPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MintPeriod;
                fromPartial(object: Partial<_9.MintPeriod>): _9.MintPeriod;
            };
            ClassConfig: {
                encode(message: _9.ClassConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.ClassConfig;
                fromPartial(object: Partial<_9.ClassConfig>): _9.ClassConfig;
            };
            BlindBoxConfig: {
                encode(message: _9.BlindBoxConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.BlindBoxConfig;
                fromPartial(object: Partial<_9.BlindBoxConfig>): _9.BlindBoxConfig;
            };
            BlindBoxState: {
                encode(message: _9.BlindBoxState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.BlindBoxState;
                fromPartial(object: Partial<_9.BlindBoxState>): _9.BlindBoxState;
            };
            BlindBoxContent: {
                encode(message: _8.BlindBoxContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.BlindBoxContent;
                fromPartial(object: Partial<_8.BlindBoxContent>): _8.BlindBoxContent;
            };
            CreateRoyaltyConfigAuthorization: {
                encode(message: _7.CreateRoyaltyConfigAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.CreateRoyaltyConfigAuthorization;
                fromPartial(object: Partial<_7.CreateRoyaltyConfigAuthorization>): _7.CreateRoyaltyConfigAuthorization;
            };
            UpdateRoyaltyConfigAuthorization: {
                encode(message: _7.UpdateRoyaltyConfigAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.UpdateRoyaltyConfigAuthorization;
                fromPartial(object: Partial<_7.UpdateRoyaltyConfigAuthorization>): _7.UpdateRoyaltyConfigAuthorization;
            };
            DeleteRoyaltyConfigAuthorization: {
                encode(message: _7.DeleteRoyaltyConfigAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DeleteRoyaltyConfigAuthorization;
                fromPartial(object: Partial<_7.DeleteRoyaltyConfigAuthorization>): _7.DeleteRoyaltyConfigAuthorization;
            };
            CreateListingAuthorization: {
                encode(message: _7.CreateListingAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.CreateListingAuthorization;
                fromPartial(object: Partial<_7.CreateListingAuthorization>): _7.CreateListingAuthorization;
            };
            UpdateListingAuthorization: {
                encode(message: _7.UpdateListingAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.UpdateListingAuthorization;
                fromPartial(object: Partial<_7.UpdateListingAuthorization>): _7.UpdateListingAuthorization;
            };
            DeleteListingAuthorization: {
                encode(message: _7.DeleteListingAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DeleteListingAuthorization;
                fromPartial(object: Partial<_7.DeleteListingAuthorization>): _7.DeleteListingAuthorization;
            };
            CreateOfferAuthorization: {
                encode(message: _7.CreateOfferAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.CreateOfferAuthorization;
                fromPartial(object: Partial<_7.CreateOfferAuthorization>): _7.CreateOfferAuthorization;
            };
            UpdateOfferAuthorization: {
                encode(message: _7.UpdateOfferAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.UpdateOfferAuthorization;
                fromPartial(object: Partial<_7.UpdateOfferAuthorization>): _7.UpdateOfferAuthorization;
            };
            DeleteOfferAuthorization: {
                encode(message: _7.DeleteOfferAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DeleteOfferAuthorization;
                fromPartial(object: Partial<_7.DeleteOfferAuthorization>): _7.DeleteOfferAuthorization;
            };
            NewClassAuthorization: {
                encode(message: _7.NewClassAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.NewClassAuthorization;
                fromPartial(object: Partial<_7.NewClassAuthorization>): _7.NewClassAuthorization;
            };
            UpdateClassAuthorization: {
                encode(message: _7.UpdateClassAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.UpdateClassAuthorization;
                fromPartial(object: Partial<_7.UpdateClassAuthorization>): _7.UpdateClassAuthorization;
            };
            MintNFTAuthorization: {
                encode(message: _7.MintNFTAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MintNFTAuthorization;
                fromPartial(object: Partial<_7.MintNFTAuthorization>): _7.MintNFTAuthorization;
            };
            SendNFTAuthorization: {
                encode(message: _7.SendNFTAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.SendNFTAuthorization;
                fromPartial(object: Partial<_7.SendNFTAuthorization>): _7.SendNFTAuthorization;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            likechain: {
                iscn: _148.MsgClientImpl;
                likenft: {
                    v1: _149.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            likechain: {
                iscn: {
                    recordsById(request: _4.QueryRecordsByIdRequest): Promise<_4.QueryRecordsByIdResponse>;
                    recordsByFingerprint(request: _4.QueryRecordsByFingerprintRequest): Promise<_4.QueryRecordsByFingerprintResponse>;
                    recordsByOwner(request: _4.QueryRecordsByOwnerRequest): Promise<_4.QueryRecordsByOwnerResponse>;
                    params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                    getCid(request: _4.QueryGetCidRequest): Promise<_4.QueryGetCidResponse>;
                    hasCid(request: _4.QueryHasCidRequest): Promise<_4.QueryHasCidResponse>;
                    getCidSize(request: _4.QueryGetCidSizeRequest): Promise<_4.QueryGetCidSizeResponse>;
                };
                likenft: {
                    v1: {
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                        classesByISCN(request: _23.QueryClassesByISCNRequest): Promise<_23.QueryClassesByISCNResponse>;
                        classesByISCNIndex(request?: _23.QueryClassesByISCNIndexRequest): Promise<_23.QueryClassesByISCNIndexResponse>;
                        iSCNByClass(request: _23.QueryISCNByClassRequest): Promise<_23.QueryISCNByClassResponse>;
                        classesByAccount(request: _23.QueryClassesByAccountRequest): Promise<_23.QueryClassesByAccountResponse>;
                        classesByAccountIndex(request?: _23.QueryClassesByAccountIndexRequest): Promise<_23.QueryClassesByAccountIndexResponse>;
                        accountByClass(request: _23.QueryAccountByClassRequest): Promise<_23.QueryAccountByClassResponse>;
                        blindBoxContent(request: _23.QueryBlindBoxContentRequest): Promise<_23.QueryBlindBoxContentResponse>;
                        blindBoxContentIndex(request?: _23.QueryBlindBoxContentIndexRequest): Promise<_23.QueryBlindBoxContentIndexResponse>;
                        blindBoxContents(request: _23.QueryBlindBoxContentsRequest): Promise<_23.QueryBlindBoxContentsResponse>;
                        offer(request: _23.QueryOfferRequest): Promise<_23.QueryOfferResponse>;
                        offerIndex(request?: _23.QueryOfferIndexRequest): Promise<_23.QueryOfferIndexResponse>;
                        offersByClass(request: _23.QueryOffersByClassRequest): Promise<_23.QueryOffersByClassResponse>;
                        offersByNFT(request: _23.QueryOffersByNFTRequest): Promise<_23.QueryOffersByNFTResponse>;
                        listing(request: _23.QueryListingRequest): Promise<_23.QueryListingResponse>;
                        listingIndex(request?: _23.QueryListingIndexRequest): Promise<_23.QueryListingIndexResponse>;
                        listingsByClass(request: _23.QueryListingsByClassRequest): Promise<_23.QueryListingsByClassResponse>;
                        listingsByNFT(request: _23.QueryListingsByNFTRequest): Promise<_23.QueryListingsByNFTResponse>;
                        royaltyConfig(request: _23.QueryRoyaltyConfigRequest): Promise<_23.QueryRoyaltyConfigResponse>;
                        royaltyConfigIndex(request?: _23.QueryRoyaltyConfigIndexRequest): Promise<_23.QueryRoyaltyConfigIndexResponse>;
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            likechain: {
                iscn: _144.LCDQueryClient;
                likenft: {
                    v1: _145.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
