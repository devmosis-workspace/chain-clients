import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Class, ClassSDKType } from "../../../cosmos/nft/v1beta1/nft";
import { ClassesByISCN, ClassesByISCNSDKType } from "./classes_by_iscn";
import { QueryResponseRecord, QueryResponseRecordSDKType } from "../../iscn/query";
import { ClassesByAccount, ClassesByAccountSDKType } from "./classes_by_account";
import { BlindBoxContent, BlindBoxContentSDKType } from "./blind_box_content";
import { Offer, OfferSDKType } from "./offer";
import { Listing, ListingSDKType } from "./listing";
import { RoyaltyConfig, RoyaltyConfigSDKType, RoyaltyConfigByClass, RoyaltyConfigByClassSDKType } from "./royalty_config";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryClassesByISCNRequest {
  iscnIdPrefix: string;
  pagination?: PageRequest;
}
export interface QueryClassesByISCNRequestSDKType {
  iscn_id_prefix: string;
  pagination?: PageRequestSDKType;
}
export interface QueryClassesByISCNResponse {
  iscnIdPrefix: string;
  classes: Class[];
  pagination?: PageResponse;
}
export interface QueryClassesByISCNResponseSDKType {
  iscn_id_prefix: string;
  classes: ClassSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryClassesByISCNIndexRequest {
  pagination?: PageRequest;
}
export interface QueryClassesByISCNIndexRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryClassesByISCNIndexResponse {
  classesByIscns: ClassesByISCN[];
  pagination?: PageResponse;
}
export interface QueryClassesByISCNIndexResponseSDKType {
  classes_by_iscns: ClassesByISCNSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryISCNByClassRequest {
  classId: string;
}
export interface QueryISCNByClassRequestSDKType {
  class_id: string;
}
export interface QueryISCNByClassResponse {
  iscnIdPrefix: string;
  owner: string;
  latestVersion: Long;
  latestRecord?: QueryResponseRecord;
}
export interface QueryISCNByClassResponseSDKType {
  iscn_id_prefix: string;
  owner: string;
  latest_version: Long;
  latest_record?: QueryResponseRecordSDKType;
}
export interface QueryClassesByAccountRequest {
  account: string;
  pagination?: PageRequest;
}
export interface QueryClassesByAccountRequestSDKType {
  account: string;
  pagination?: PageRequestSDKType;
}
export interface QueryClassesByAccountResponse {
  account: string;
  classes: Class[];
  pagination?: PageResponse;
}
export interface QueryClassesByAccountResponseSDKType {
  account: string;
  classes: ClassSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryClassesByAccountIndexRequest {
  pagination?: PageRequest;
}
export interface QueryClassesByAccountIndexRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryClassesByAccountIndexResponse {
  classesByAccounts: ClassesByAccount[];
  pagination?: PageResponse;
}
export interface QueryClassesByAccountIndexResponseSDKType {
  classes_by_accounts: ClassesByAccountSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAccountByClassRequest {
  classId: string;
}
export interface QueryAccountByClassRequestSDKType {
  class_id: string;
}
export interface QueryAccountByClassResponse {
  address: string;
}
export interface QueryAccountByClassResponseSDKType {
  address: string;
}
export interface QueryBlindBoxContentRequest {
  classId: string;
  id: string;
}
export interface QueryBlindBoxContentRequestSDKType {
  class_id: string;
  id: string;
}
export interface QueryBlindBoxContentResponse {
  blindBoxContent?: BlindBoxContent;
}
export interface QueryBlindBoxContentResponseSDKType {
  blind_box_content?: BlindBoxContentSDKType;
}
export interface QueryBlindBoxContentIndexRequest {
  pagination?: PageRequest;
}
export interface QueryBlindBoxContentIndexRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryBlindBoxContentIndexResponse {
  blindBoxContents: BlindBoxContent[];
  pagination?: PageResponse;
}
export interface QueryBlindBoxContentIndexResponseSDKType {
  blind_box_contents: BlindBoxContentSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryBlindBoxContentsRequest {
  classId: string;
  pagination?: PageRequest;
}
export interface QueryBlindBoxContentsRequestSDKType {
  class_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryBlindBoxContentsResponse {
  blindBoxContents: BlindBoxContent[];
  pagination?: PageResponse;
}
export interface QueryBlindBoxContentsResponseSDKType {
  blind_box_contents: BlindBoxContentSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryOfferRequest {
  classId: string;
  nftId: string;
  buyer: string;
}
export interface QueryOfferRequestSDKType {
  class_id: string;
  nft_id: string;
  buyer: string;
}
export interface QueryOfferResponse {
  offer?: Offer;
}
export interface QueryOfferResponseSDKType {
  offer?: OfferSDKType;
}
export interface QueryOfferIndexRequest {
  pagination?: PageRequest;
}
export interface QueryOfferIndexRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryOfferIndexResponse {
  offers: Offer[];
  pagination?: PageResponse;
}
export interface QueryOfferIndexResponseSDKType {
  offers: OfferSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryOffersByClassRequest {
  classId: string;
  pagination?: PageRequest;
}
export interface QueryOffersByClassRequestSDKType {
  class_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryOffersByClassResponse {
  offers: Offer[];
  pagination?: PageResponse;
}
export interface QueryOffersByClassResponseSDKType {
  offers: OfferSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryOffersByNFTRequest {
  classId: string;
  nftId: string;
  pagination?: PageRequest;
}
export interface QueryOffersByNFTRequestSDKType {
  class_id: string;
  nft_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryOffersByNFTResponse {
  offers: Offer[];
  pagination?: PageResponse;
}
export interface QueryOffersByNFTResponseSDKType {
  offers: OfferSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryListingRequest {
  classId: string;
  nftId: string;
  seller: string;
}
export interface QueryListingRequestSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
}
export interface QueryListingResponse {
  listing?: Listing;
}
export interface QueryListingResponseSDKType {
  listing?: ListingSDKType;
}
export interface QueryListingIndexRequest {
  pagination?: PageRequest;
}
export interface QueryListingIndexRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryListingIndexResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingIndexResponseSDKType {
  listings: ListingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryListingsByClassRequest {
  classId: string;
  pagination?: PageRequest;
}
export interface QueryListingsByClassRequestSDKType {
  class_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryListingsByClassResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsByClassResponseSDKType {
  listings: ListingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryListingsByNFTRequest {
  classId: string;
  nftId: string;
  pagination?: PageRequest;
}
export interface QueryListingsByNFTRequestSDKType {
  class_id: string;
  nft_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryListingsByNFTResponse {
  listings: Listing[];
  pagination?: PageResponse;
}
export interface QueryListingsByNFTResponseSDKType {
  listings: ListingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryRoyaltyConfigRequest {
  classId: string;
}
export interface QueryRoyaltyConfigRequestSDKType {
  class_id: string;
}
export interface QueryRoyaltyConfigResponse {
  royaltyConfig?: RoyaltyConfig;
}
export interface QueryRoyaltyConfigResponseSDKType {
  royalty_config?: RoyaltyConfigSDKType;
}
export interface QueryRoyaltyConfigIndexRequest {
  pagination?: PageRequest;
}
export interface QueryRoyaltyConfigIndexRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryRoyaltyConfigIndexResponse {
  royaltyConfigByClass: RoyaltyConfigByClass[];
  pagination?: PageResponse;
}
export interface QueryRoyaltyConfigIndexResponseSDKType {
  royalty_config_by_class: RoyaltyConfigByClassSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryClassesByISCNRequest(): QueryClassesByISCNRequest {
  return {
    iscnIdPrefix: "",
    pagination: undefined
  };
}
export const QueryClassesByISCNRequest = {
  encode(message: QueryClassesByISCNRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByISCNRequest {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByISCNRequest>): QueryClassesByISCNRequest {
    const message = createBaseQueryClassesByISCNRequest();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClassesByISCNResponse(): QueryClassesByISCNResponse {
  return {
    iscnIdPrefix: "",
    classes: [],
    pagination: undefined
  };
}
export const QueryClassesByISCNResponse = {
  encode(message: QueryClassesByISCNResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByISCNResponse {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByISCNResponse>): QueryClassesByISCNResponse {
    const message = createBaseQueryClassesByISCNResponse();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClassesByISCNIndexRequest(): QueryClassesByISCNIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryClassesByISCNIndexRequest = {
  encode(message: QueryClassesByISCNIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByISCNIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByISCNIndexRequest>): QueryClassesByISCNIndexRequest {
    const message = createBaseQueryClassesByISCNIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClassesByISCNIndexResponse(): QueryClassesByISCNIndexResponse {
  return {
    classesByIscns: [],
    pagination: undefined
  };
}
export const QueryClassesByISCNIndexResponse = {
  encode(message: QueryClassesByISCNIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classesByIscns) {
      ClassesByISCN.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByISCNIndexResponse {
    return {
      classesByIscns: Array.isArray(object?.classesByIscns) ? object.classesByIscns.map((e: any) => ClassesByISCN.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByISCNIndexResponse>): QueryClassesByISCNIndexResponse {
    const message = createBaseQueryClassesByISCNIndexResponse();
    message.classesByIscns = object.classesByIscns?.map(e => ClassesByISCN.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryISCNByClassRequest(): QueryISCNByClassRequest {
  return {
    classId: ""
  };
}
export const QueryISCNByClassRequest = {
  encode(message: QueryISCNByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): QueryISCNByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<QueryISCNByClassRequest>): QueryISCNByClassRequest {
    const message = createBaseQueryISCNByClassRequest();
    message.classId = object.classId ?? "";
    return message;
  }
};
function createBaseQueryISCNByClassResponse(): QueryISCNByClassResponse {
  return {
    iscnIdPrefix: "",
    owner: "",
    latestVersion: Long.UZERO,
    latestRecord: undefined
  };
}
export const QueryISCNByClassResponse = {
  encode(message: QueryISCNByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (!message.latestVersion.isZero()) {
      writer.uint32(24).uint64(message.latestVersion);
    }
    if (message.latestRecord !== undefined) {
      QueryResponseRecord.encode(message.latestRecord, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryISCNByClassResponse {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      latestVersion: isSet(object.latestVersion) ? Long.fromValue(object.latestVersion) : Long.UZERO,
      latestRecord: isSet(object.latestRecord) ? QueryResponseRecord.fromJSON(object.latestRecord) : undefined
    };
  },
  fromPartial(object: Partial<QueryISCNByClassResponse>): QueryISCNByClassResponse {
    const message = createBaseQueryISCNByClassResponse();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.owner = object.owner ?? "";
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? Long.fromValue(object.latestVersion) : Long.UZERO;
    message.latestRecord = object.latestRecord !== undefined && object.latestRecord !== null ? QueryResponseRecord.fromPartial(object.latestRecord) : undefined;
    return message;
  }
};
function createBaseQueryClassesByAccountRequest(): QueryClassesByAccountRequest {
  return {
    account: "",
    pagination: undefined
  };
}
export const QueryClassesByAccountRequest = {
  encode(message: QueryClassesByAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByAccountRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByAccountRequest>): QueryClassesByAccountRequest {
    const message = createBaseQueryClassesByAccountRequest();
    message.account = object.account ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClassesByAccountResponse(): QueryClassesByAccountResponse {
  return {
    account: "",
    classes: [],
    pagination: undefined
  };
}
export const QueryClassesByAccountResponse = {
  encode(message: QueryClassesByAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByAccountResponse {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByAccountResponse>): QueryClassesByAccountResponse {
    const message = createBaseQueryClassesByAccountResponse();
    message.account = object.account ?? "";
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClassesByAccountIndexRequest(): QueryClassesByAccountIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryClassesByAccountIndexRequest = {
  encode(message: QueryClassesByAccountIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByAccountIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByAccountIndexRequest>): QueryClassesByAccountIndexRequest {
    const message = createBaseQueryClassesByAccountIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClassesByAccountIndexResponse(): QueryClassesByAccountIndexResponse {
  return {
    classesByAccounts: [],
    pagination: undefined
  };
}
export const QueryClassesByAccountIndexResponse = {
  encode(message: QueryClassesByAccountIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classesByAccounts) {
      ClassesByAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByAccountIndexResponse {
    return {
      classesByAccounts: Array.isArray(object?.classesByAccounts) ? object.classesByAccounts.map((e: any) => ClassesByAccount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByAccountIndexResponse>): QueryClassesByAccountIndexResponse {
    const message = createBaseQueryClassesByAccountIndexResponse();
    message.classesByAccounts = object.classesByAccounts?.map(e => ClassesByAccount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAccountByClassRequest(): QueryAccountByClassRequest {
  return {
    classId: ""
  };
}
export const QueryAccountByClassRequest = {
  encode(message: QueryAccountByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountByClassRequest>): QueryAccountByClassRequest {
    const message = createBaseQueryAccountByClassRequest();
    message.classId = object.classId ?? "";
    return message;
  }
};
function createBaseQueryAccountByClassResponse(): QueryAccountByClassResponse {
  return {
    address: ""
  };
}
export const QueryAccountByClassResponse = {
  encode(message: QueryAccountByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountByClassResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountByClassResponse>): QueryAccountByClassResponse {
    const message = createBaseQueryAccountByClassResponse();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryBlindBoxContentRequest(): QueryBlindBoxContentRequest {
  return {
    classId: "",
    id: ""
  };
}
export const QueryBlindBoxContentRequest = {
  encode(message: QueryBlindBoxContentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentRequest>): QueryBlindBoxContentRequest {
    const message = createBaseQueryBlindBoxContentRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  }
};
function createBaseQueryBlindBoxContentResponse(): QueryBlindBoxContentResponse {
  return {
    blindBoxContent: undefined
  };
}
export const QueryBlindBoxContentResponse = {
  encode(message: QueryBlindBoxContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blindBoxContent !== undefined) {
      BlindBoxContent.encode(message.blindBoxContent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentResponse {
    return {
      blindBoxContent: isSet(object.blindBoxContent) ? BlindBoxContent.fromJSON(object.blindBoxContent) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentResponse>): QueryBlindBoxContentResponse {
    const message = createBaseQueryBlindBoxContentResponse();
    message.blindBoxContent = object.blindBoxContent !== undefined && object.blindBoxContent !== null ? BlindBoxContent.fromPartial(object.blindBoxContent) : undefined;
    return message;
  }
};
function createBaseQueryBlindBoxContentIndexRequest(): QueryBlindBoxContentIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryBlindBoxContentIndexRequest = {
  encode(message: QueryBlindBoxContentIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentIndexRequest>): QueryBlindBoxContentIndexRequest {
    const message = createBaseQueryBlindBoxContentIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryBlindBoxContentIndexResponse(): QueryBlindBoxContentIndexResponse {
  return {
    blindBoxContents: [],
    pagination: undefined
  };
}
export const QueryBlindBoxContentIndexResponse = {
  encode(message: QueryBlindBoxContentIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blindBoxContents) {
      BlindBoxContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentIndexResponse {
    return {
      blindBoxContents: Array.isArray(object?.blindBoxContents) ? object.blindBoxContents.map((e: any) => BlindBoxContent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentIndexResponse>): QueryBlindBoxContentIndexResponse {
    const message = createBaseQueryBlindBoxContentIndexResponse();
    message.blindBoxContents = object.blindBoxContents?.map(e => BlindBoxContent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryBlindBoxContentsRequest(): QueryBlindBoxContentsRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryBlindBoxContentsRequest = {
  encode(message: QueryBlindBoxContentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentsRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentsRequest>): QueryBlindBoxContentsRequest {
    const message = createBaseQueryBlindBoxContentsRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryBlindBoxContentsResponse(): QueryBlindBoxContentsResponse {
  return {
    blindBoxContents: [],
    pagination: undefined
  };
}
export const QueryBlindBoxContentsResponse = {
  encode(message: QueryBlindBoxContentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blindBoxContents) {
      BlindBoxContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentsResponse {
    return {
      blindBoxContents: Array.isArray(object?.blindBoxContents) ? object.blindBoxContents.map((e: any) => BlindBoxContent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentsResponse>): QueryBlindBoxContentsResponse {
    const message = createBaseQueryBlindBoxContentsResponse();
    message.blindBoxContents = object.blindBoxContents?.map(e => BlindBoxContent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryOfferRequest(): QueryOfferRequest {
  return {
    classId: "",
    nftId: "",
    buyer: ""
  };
}
export const QueryOfferRequest = {
  encode(message: QueryOfferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },
  fromJSON(object: any): QueryOfferRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },
  fromPartial(object: Partial<QueryOfferRequest>): QueryOfferRequest {
    const message = createBaseQueryOfferRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  }
};
function createBaseQueryOfferResponse(): QueryOfferResponse {
  return {
    offer: undefined
  };
}
export const QueryOfferResponse = {
  encode(message: QueryOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOfferResponse {
    return {
      offer: isSet(object.offer) ? Offer.fromJSON(object.offer) : undefined
    };
  },
  fromPartial(object: Partial<QueryOfferResponse>): QueryOfferResponse {
    const message = createBaseQueryOfferResponse();
    message.offer = object.offer !== undefined && object.offer !== null ? Offer.fromPartial(object.offer) : undefined;
    return message;
  }
};
function createBaseQueryOfferIndexRequest(): QueryOfferIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryOfferIndexRequest = {
  encode(message: QueryOfferIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOfferIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOfferIndexRequest>): QueryOfferIndexRequest {
    const message = createBaseQueryOfferIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryOfferIndexResponse(): QueryOfferIndexResponse {
  return {
    offers: [],
    pagination: undefined
  };
}
export const QueryOfferIndexResponse = {
  encode(message: QueryOfferIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOfferIndexResponse {
    return {
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Offer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOfferIndexResponse>): QueryOfferIndexResponse {
    const message = createBaseQueryOfferIndexResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryOffersByClassRequest(): QueryOffersByClassRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryOffersByClassRequest = {
  encode(message: QueryOffersByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOffersByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOffersByClassRequest>): QueryOffersByClassRequest {
    const message = createBaseQueryOffersByClassRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryOffersByClassResponse(): QueryOffersByClassResponse {
  return {
    offers: [],
    pagination: undefined
  };
}
export const QueryOffersByClassResponse = {
  encode(message: QueryOffersByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOffersByClassResponse {
    return {
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Offer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOffersByClassResponse>): QueryOffersByClassResponse {
    const message = createBaseQueryOffersByClassResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryOffersByNFTRequest(): QueryOffersByNFTRequest {
  return {
    classId: "",
    nftId: "",
    pagination: undefined
  };
}
export const QueryOffersByNFTRequest = {
  encode(message: QueryOffersByNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOffersByNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOffersByNFTRequest>): QueryOffersByNFTRequest {
    const message = createBaseQueryOffersByNFTRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryOffersByNFTResponse(): QueryOffersByNFTResponse {
  return {
    offers: [],
    pagination: undefined
  };
}
export const QueryOffersByNFTResponse = {
  encode(message: QueryOffersByNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOffersByNFTResponse {
    return {
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Offer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOffersByNFTResponse>): QueryOffersByNFTResponse {
    const message = createBaseQueryOffersByNFTResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryListingRequest(): QueryListingRequest {
  return {
    classId: "",
    nftId: "",
    seller: ""
  };
}
export const QueryListingRequest = {
  encode(message: QueryListingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    return writer;
  },
  fromJSON(object: any): QueryListingRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : ""
    };
  },
  fromPartial(object: Partial<QueryListingRequest>): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    return message;
  }
};
function createBaseQueryListingResponse(): QueryListingResponse {
  return {
    listing: undefined
  };
}
export const QueryListingResponse = {
  encode(message: QueryListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingResponse {
    return {
      listing: isSet(object.listing) ? Listing.fromJSON(object.listing) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingResponse>): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  }
};
function createBaseQueryListingIndexRequest(): QueryListingIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryListingIndexRequest = {
  encode(message: QueryListingIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingIndexRequest>): QueryListingIndexRequest {
    const message = createBaseQueryListingIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryListingIndexResponse(): QueryListingIndexResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
export const QueryListingIndexResponse = {
  encode(message: QueryListingIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingIndexResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingIndexResponse>): QueryListingIndexResponse {
    const message = createBaseQueryListingIndexResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryListingsByClassRequest(): QueryListingsByClassRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryListingsByClassRequest = {
  encode(message: QueryListingsByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByClassRequest>): QueryListingsByClassRequest {
    const message = createBaseQueryListingsByClassRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryListingsByClassResponse(): QueryListingsByClassResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
export const QueryListingsByClassResponse = {
  encode(message: QueryListingsByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByClassResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByClassResponse>): QueryListingsByClassResponse {
    const message = createBaseQueryListingsByClassResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryListingsByNFTRequest(): QueryListingsByNFTRequest {
  return {
    classId: "",
    nftId: "",
    pagination: undefined
  };
}
export const QueryListingsByNFTRequest = {
  encode(message: QueryListingsByNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByNFTRequest>): QueryListingsByNFTRequest {
    const message = createBaseQueryListingsByNFTRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryListingsByNFTResponse(): QueryListingsByNFTResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
export const QueryListingsByNFTResponse = {
  encode(message: QueryListingsByNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByNFTResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByNFTResponse>): QueryListingsByNFTResponse {
    const message = createBaseQueryListingsByNFTResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRoyaltyConfigRequest(): QueryRoyaltyConfigRequest {
  return {
    classId: ""
  };
}
export const QueryRoyaltyConfigRequest = {
  encode(message: QueryRoyaltyConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRoyaltyConfigRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<QueryRoyaltyConfigRequest>): QueryRoyaltyConfigRequest {
    const message = createBaseQueryRoyaltyConfigRequest();
    message.classId = object.classId ?? "";
    return message;
  }
};
function createBaseQueryRoyaltyConfigResponse(): QueryRoyaltyConfigResponse {
  return {
    royaltyConfig: undefined
  };
}
export const QueryRoyaltyConfigResponse = {
  encode(message: QueryRoyaltyConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(message.royaltyConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRoyaltyConfigResponse {
    return {
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfig.fromJSON(object.royaltyConfig) : undefined
    };
  },
  fromPartial(object: Partial<QueryRoyaltyConfigResponse>): QueryRoyaltyConfigResponse {
    const message = createBaseQueryRoyaltyConfigResponse();
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfig.fromPartial(object.royaltyConfig) : undefined;
    return message;
  }
};
function createBaseQueryRoyaltyConfigIndexRequest(): QueryRoyaltyConfigIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryRoyaltyConfigIndexRequest = {
  encode(message: QueryRoyaltyConfigIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRoyaltyConfigIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRoyaltyConfigIndexRequest>): QueryRoyaltyConfigIndexRequest {
    const message = createBaseQueryRoyaltyConfigIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRoyaltyConfigIndexResponse(): QueryRoyaltyConfigIndexResponse {
  return {
    royaltyConfigByClass: [],
    pagination: undefined
  };
}
export const QueryRoyaltyConfigIndexResponse = {
  encode(message: QueryRoyaltyConfigIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.royaltyConfigByClass) {
      RoyaltyConfigByClass.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRoyaltyConfigIndexResponse {
    return {
      royaltyConfigByClass: Array.isArray(object?.royaltyConfigByClass) ? object.royaltyConfigByClass.map((e: any) => RoyaltyConfigByClass.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRoyaltyConfigIndexResponse>): QueryRoyaltyConfigIndexResponse {
    const message = createBaseQueryRoyaltyConfigIndexResponse();
    message.royaltyConfigByClass = object.royaltyConfigByClass?.map(e => RoyaltyConfigByClass.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};