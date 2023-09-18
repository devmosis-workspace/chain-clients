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
import * as _145 from "./iscn/query.lcd";
import * as _146 from "./likenft/v1/query.lcd";
import * as _147 from "./iscn/query.rpc.Query";
import * as _148 from "./likenft/v1/query.rpc.Query";
import * as _149 from "./iscn/tx.rpc.msg";
import * as _150 from "./likenft/v1/tx.rpc.msg";
export declare namespace likechain {
    const iscn: {
        MsgClientImpl: typeof _149.MsgClientImpl;
        QueryClientImpl: typeof _147.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            recordsById(request: _4.QueryRecordsByIdRequest): Promise<_4.QueryRecordsByIdResponse>;
            recordsByFingerprint(request: _4.QueryRecordsByFingerprintRequest): Promise<_4.QueryRecordsByFingerprintResponse>;
            recordsByOwner(request: _4.QueryRecordsByOwnerRequest): Promise<_4.QueryRecordsByOwnerResponse>;
            params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            getCid(request: _4.QueryGetCidRequest): Promise<_4.QueryGetCidResponse>;
            hasCid(request: _4.QueryHasCidRequest): Promise<_4.QueryHasCidResponse>;
            getCidSize(request: _4.QueryGetCidSizeRequest): Promise<_4.QueryGetCidSizeResponse>;
        };
        LCDQueryClient: typeof _145.LCDQueryClient;
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
                toAmino: (message: _6.MsgCreateIscnRecord) => _6.MsgCreateIscnRecordAmino;
                fromAmino: (object: _6.MsgCreateIscnRecordAmino) => _6.MsgCreateIscnRecord;
            };
            "/likechain.iscn.MsgUpdateIscnRecord": {
                aminoType: string;
                toAmino: (message: _6.MsgUpdateIscnRecord) => _6.MsgUpdateIscnRecordAmino;
                fromAmino: (object: _6.MsgUpdateIscnRecordAmino) => _6.MsgUpdateIscnRecord;
            };
            "/likechain.iscn.MsgChangeIscnRecordOwnership": {
                aminoType: string;
                toAmino: (message: _6.MsgChangeIscnRecordOwnership) => _6.MsgChangeIscnRecordOwnershipAmino;
                fromAmino: (object: _6.MsgChangeIscnRecordOwnershipAmino) => _6.MsgChangeIscnRecordOwnership;
            };
        };
        IscnRecord: {
            typeUrl: string;
            encode(message: _6.IscnRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.IscnRecord;
            fromPartial(object: Partial<_6.IscnRecord>): _6.IscnRecord;
            fromAmino(object: _6.IscnRecordAmino): _6.IscnRecord;
            toAmino(message: _6.IscnRecord): _6.IscnRecordAmino;
            fromAminoMsg(object: _6.IscnRecordAminoMsg): _6.IscnRecord;
            fromProtoMsg(message: _6.IscnRecordProtoMsg): _6.IscnRecord;
            toProto(message: _6.IscnRecord): Uint8Array;
            toProtoMsg(message: _6.IscnRecord): _6.IscnRecordProtoMsg;
        };
        MsgCreateIscnRecord: {
            typeUrl: string;
            encode(message: _6.MsgCreateIscnRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.MsgCreateIscnRecord;
            fromPartial(object: Partial<_6.MsgCreateIscnRecord>): _6.MsgCreateIscnRecord;
            fromAmino(object: _6.MsgCreateIscnRecordAmino): _6.MsgCreateIscnRecord;
            toAmino(message: _6.MsgCreateIscnRecord): _6.MsgCreateIscnRecordAmino;
            fromAminoMsg(object: _6.MsgCreateIscnRecordAminoMsg): _6.MsgCreateIscnRecord;
            fromProtoMsg(message: _6.MsgCreateIscnRecordProtoMsg): _6.MsgCreateIscnRecord;
            toProto(message: _6.MsgCreateIscnRecord): Uint8Array;
            toProtoMsg(message: _6.MsgCreateIscnRecord): _6.MsgCreateIscnRecordProtoMsg;
        };
        MsgCreateIscnRecordResponse: {
            typeUrl: string;
            encode(message: _6.MsgCreateIscnRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.MsgCreateIscnRecordResponse;
            fromPartial(object: Partial<_6.MsgCreateIscnRecordResponse>): _6.MsgCreateIscnRecordResponse;
            fromAmino(object: _6.MsgCreateIscnRecordResponseAmino): _6.MsgCreateIscnRecordResponse;
            toAmino(message: _6.MsgCreateIscnRecordResponse): _6.MsgCreateIscnRecordResponseAmino;
            fromAminoMsg(object: _6.MsgCreateIscnRecordResponseAminoMsg): _6.MsgCreateIscnRecordResponse;
            fromProtoMsg(message: _6.MsgCreateIscnRecordResponseProtoMsg): _6.MsgCreateIscnRecordResponse;
            toProto(message: _6.MsgCreateIscnRecordResponse): Uint8Array;
            toProtoMsg(message: _6.MsgCreateIscnRecordResponse): _6.MsgCreateIscnRecordResponseProtoMsg;
        };
        MsgUpdateIscnRecord: {
            typeUrl: string;
            encode(message: _6.MsgUpdateIscnRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.MsgUpdateIscnRecord;
            fromPartial(object: Partial<_6.MsgUpdateIscnRecord>): _6.MsgUpdateIscnRecord;
            fromAmino(object: _6.MsgUpdateIscnRecordAmino): _6.MsgUpdateIscnRecord;
            toAmino(message: _6.MsgUpdateIscnRecord): _6.MsgUpdateIscnRecordAmino;
            fromAminoMsg(object: _6.MsgUpdateIscnRecordAminoMsg): _6.MsgUpdateIscnRecord;
            fromProtoMsg(message: _6.MsgUpdateIscnRecordProtoMsg): _6.MsgUpdateIscnRecord;
            toProto(message: _6.MsgUpdateIscnRecord): Uint8Array;
            toProtoMsg(message: _6.MsgUpdateIscnRecord): _6.MsgUpdateIscnRecordProtoMsg;
        };
        MsgUpdateIscnRecordResponse: {
            typeUrl: string;
            encode(message: _6.MsgUpdateIscnRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.MsgUpdateIscnRecordResponse;
            fromPartial(object: Partial<_6.MsgUpdateIscnRecordResponse>): _6.MsgUpdateIscnRecordResponse;
            fromAmino(object: _6.MsgUpdateIscnRecordResponseAmino): _6.MsgUpdateIscnRecordResponse;
            toAmino(message: _6.MsgUpdateIscnRecordResponse): _6.MsgUpdateIscnRecordResponseAmino;
            fromAminoMsg(object: _6.MsgUpdateIscnRecordResponseAminoMsg): _6.MsgUpdateIscnRecordResponse;
            fromProtoMsg(message: _6.MsgUpdateIscnRecordResponseProtoMsg): _6.MsgUpdateIscnRecordResponse;
            toProto(message: _6.MsgUpdateIscnRecordResponse): Uint8Array;
            toProtoMsg(message: _6.MsgUpdateIscnRecordResponse): _6.MsgUpdateIscnRecordResponseProtoMsg;
        };
        MsgChangeIscnRecordOwnership: {
            typeUrl: string;
            encode(message: _6.MsgChangeIscnRecordOwnership, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.MsgChangeIscnRecordOwnership;
            fromPartial(object: Partial<_6.MsgChangeIscnRecordOwnership>): _6.MsgChangeIscnRecordOwnership;
            fromAmino(object: _6.MsgChangeIscnRecordOwnershipAmino): _6.MsgChangeIscnRecordOwnership;
            toAmino(message: _6.MsgChangeIscnRecordOwnership): _6.MsgChangeIscnRecordOwnershipAmino;
            fromAminoMsg(object: _6.MsgChangeIscnRecordOwnershipAminoMsg): _6.MsgChangeIscnRecordOwnership;
            fromProtoMsg(message: _6.MsgChangeIscnRecordOwnershipProtoMsg): _6.MsgChangeIscnRecordOwnership;
            toProto(message: _6.MsgChangeIscnRecordOwnership): Uint8Array;
            toProtoMsg(message: _6.MsgChangeIscnRecordOwnership): _6.MsgChangeIscnRecordOwnershipProtoMsg;
        };
        MsgChangeIscnRecordOwnershipResponse: {
            typeUrl: string;
            encode(_: _6.MsgChangeIscnRecordOwnershipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.MsgChangeIscnRecordOwnershipResponse;
            fromPartial(_: Partial<_6.MsgChangeIscnRecordOwnershipResponse>): _6.MsgChangeIscnRecordOwnershipResponse;
            fromAmino(_: _6.MsgChangeIscnRecordOwnershipResponseAmino): _6.MsgChangeIscnRecordOwnershipResponse;
            toAmino(_: _6.MsgChangeIscnRecordOwnershipResponse): _6.MsgChangeIscnRecordOwnershipResponseAmino;
            fromAminoMsg(object: _6.MsgChangeIscnRecordOwnershipResponseAminoMsg): _6.MsgChangeIscnRecordOwnershipResponse;
            fromProtoMsg(message: _6.MsgChangeIscnRecordOwnershipResponseProtoMsg): _6.MsgChangeIscnRecordOwnershipResponse;
            toProto(message: _6.MsgChangeIscnRecordOwnershipResponse): Uint8Array;
            toProtoMsg(message: _6.MsgChangeIscnRecordOwnershipResponse): _6.MsgChangeIscnRecordOwnershipResponseProtoMsg;
        };
        StoreRecord: {
            typeUrl: string;
            encode(message: _5.StoreRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.StoreRecord;
            fromPartial(object: Partial<_5.StoreRecord>): _5.StoreRecord;
            fromAmino(object: _5.StoreRecordAmino): _5.StoreRecord;
            toAmino(message: _5.StoreRecord): _5.StoreRecordAmino;
            fromAminoMsg(object: _5.StoreRecordAminoMsg): _5.StoreRecord;
            fromProtoMsg(message: _5.StoreRecordProtoMsg): _5.StoreRecord;
            toProto(message: _5.StoreRecord): Uint8Array;
            toProtoMsg(message: _5.StoreRecord): _5.StoreRecordProtoMsg;
        };
        ContentIdRecord: {
            typeUrl: string;
            encode(message: _5.ContentIdRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.ContentIdRecord;
            fromPartial(object: Partial<_5.ContentIdRecord>): _5.ContentIdRecord;
            fromAmino(object: _5.ContentIdRecordAmino): _5.ContentIdRecord;
            toAmino(message: _5.ContentIdRecord): _5.ContentIdRecordAmino;
            fromAminoMsg(object: _5.ContentIdRecordAminoMsg): _5.ContentIdRecord;
            fromProtoMsg(message: _5.ContentIdRecordProtoMsg): _5.ContentIdRecord;
            toProto(message: _5.ContentIdRecord): Uint8Array;
            toProtoMsg(message: _5.ContentIdRecord): _5.ContentIdRecordProtoMsg;
        };
        QueryResponseRecord: {
            typeUrl: string;
            encode(message: _4.QueryResponseRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryResponseRecord;
            fromPartial(object: Partial<_4.QueryResponseRecord>): _4.QueryResponseRecord;
            fromAmino(object: _4.QueryResponseRecordAmino): _4.QueryResponseRecord;
            toAmino(message: _4.QueryResponseRecord): _4.QueryResponseRecordAmino;
            fromAminoMsg(object: _4.QueryResponseRecordAminoMsg): _4.QueryResponseRecord;
            fromProtoMsg(message: _4.QueryResponseRecordProtoMsg): _4.QueryResponseRecord;
            toProto(message: _4.QueryResponseRecord): Uint8Array;
            toProtoMsg(message: _4.QueryResponseRecord): _4.QueryResponseRecordProtoMsg;
        };
        QueryRecordsByIdRequest: {
            typeUrl: string;
            encode(message: _4.QueryRecordsByIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryRecordsByIdRequest;
            fromPartial(object: Partial<_4.QueryRecordsByIdRequest>): _4.QueryRecordsByIdRequest;
            fromAmino(object: _4.QueryRecordsByIdRequestAmino): _4.QueryRecordsByIdRequest;
            toAmino(message: _4.QueryRecordsByIdRequest): _4.QueryRecordsByIdRequestAmino;
            fromAminoMsg(object: _4.QueryRecordsByIdRequestAminoMsg): _4.QueryRecordsByIdRequest;
            fromProtoMsg(message: _4.QueryRecordsByIdRequestProtoMsg): _4.QueryRecordsByIdRequest;
            toProto(message: _4.QueryRecordsByIdRequest): Uint8Array;
            toProtoMsg(message: _4.QueryRecordsByIdRequest): _4.QueryRecordsByIdRequestProtoMsg;
        };
        QueryRecordsByIdResponse: {
            typeUrl: string;
            encode(message: _4.QueryRecordsByIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryRecordsByIdResponse;
            fromPartial(object: Partial<_4.QueryRecordsByIdResponse>): _4.QueryRecordsByIdResponse;
            fromAmino(object: _4.QueryRecordsByIdResponseAmino): _4.QueryRecordsByIdResponse;
            toAmino(message: _4.QueryRecordsByIdResponse): _4.QueryRecordsByIdResponseAmino;
            fromAminoMsg(object: _4.QueryRecordsByIdResponseAminoMsg): _4.QueryRecordsByIdResponse;
            fromProtoMsg(message: _4.QueryRecordsByIdResponseProtoMsg): _4.QueryRecordsByIdResponse;
            toProto(message: _4.QueryRecordsByIdResponse): Uint8Array;
            toProtoMsg(message: _4.QueryRecordsByIdResponse): _4.QueryRecordsByIdResponseProtoMsg;
        };
        QueryRecordsByFingerprintRequest: {
            typeUrl: string;
            encode(message: _4.QueryRecordsByFingerprintRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryRecordsByFingerprintRequest;
            fromPartial(object: Partial<_4.QueryRecordsByFingerprintRequest>): _4.QueryRecordsByFingerprintRequest;
            fromAmino(object: _4.QueryRecordsByFingerprintRequestAmino): _4.QueryRecordsByFingerprintRequest;
            toAmino(message: _4.QueryRecordsByFingerprintRequest): _4.QueryRecordsByFingerprintRequestAmino;
            fromAminoMsg(object: _4.QueryRecordsByFingerprintRequestAminoMsg): _4.QueryRecordsByFingerprintRequest;
            fromProtoMsg(message: _4.QueryRecordsByFingerprintRequestProtoMsg): _4.QueryRecordsByFingerprintRequest;
            toProto(message: _4.QueryRecordsByFingerprintRequest): Uint8Array;
            toProtoMsg(message: _4.QueryRecordsByFingerprintRequest): _4.QueryRecordsByFingerprintRequestProtoMsg;
        };
        QueryRecordsByFingerprintResponse: {
            typeUrl: string;
            encode(message: _4.QueryRecordsByFingerprintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryRecordsByFingerprintResponse;
            fromPartial(object: Partial<_4.QueryRecordsByFingerprintResponse>): _4.QueryRecordsByFingerprintResponse;
            fromAmino(object: _4.QueryRecordsByFingerprintResponseAmino): _4.QueryRecordsByFingerprintResponse;
            toAmino(message: _4.QueryRecordsByFingerprintResponse): _4.QueryRecordsByFingerprintResponseAmino;
            fromAminoMsg(object: _4.QueryRecordsByFingerprintResponseAminoMsg): _4.QueryRecordsByFingerprintResponse;
            fromProtoMsg(message: _4.QueryRecordsByFingerprintResponseProtoMsg): _4.QueryRecordsByFingerprintResponse;
            toProto(message: _4.QueryRecordsByFingerprintResponse): Uint8Array;
            toProtoMsg(message: _4.QueryRecordsByFingerprintResponse): _4.QueryRecordsByFingerprintResponseProtoMsg;
        };
        QueryRecordsByOwnerRequest: {
            typeUrl: string;
            encode(message: _4.QueryRecordsByOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryRecordsByOwnerRequest;
            fromPartial(object: Partial<_4.QueryRecordsByOwnerRequest>): _4.QueryRecordsByOwnerRequest;
            fromAmino(object: _4.QueryRecordsByOwnerRequestAmino): _4.QueryRecordsByOwnerRequest;
            toAmino(message: _4.QueryRecordsByOwnerRequest): _4.QueryRecordsByOwnerRequestAmino;
            fromAminoMsg(object: _4.QueryRecordsByOwnerRequestAminoMsg): _4.QueryRecordsByOwnerRequest;
            fromProtoMsg(message: _4.QueryRecordsByOwnerRequestProtoMsg): _4.QueryRecordsByOwnerRequest;
            toProto(message: _4.QueryRecordsByOwnerRequest): Uint8Array;
            toProtoMsg(message: _4.QueryRecordsByOwnerRequest): _4.QueryRecordsByOwnerRequestProtoMsg;
        };
        QueryRecordsByOwnerResponse: {
            typeUrl: string;
            encode(message: _4.QueryRecordsByOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryRecordsByOwnerResponse;
            fromPartial(object: Partial<_4.QueryRecordsByOwnerResponse>): _4.QueryRecordsByOwnerResponse;
            fromAmino(object: _4.QueryRecordsByOwnerResponseAmino): _4.QueryRecordsByOwnerResponse;
            toAmino(message: _4.QueryRecordsByOwnerResponse): _4.QueryRecordsByOwnerResponseAmino;
            fromAminoMsg(object: _4.QueryRecordsByOwnerResponseAminoMsg): _4.QueryRecordsByOwnerResponse;
            fromProtoMsg(message: _4.QueryRecordsByOwnerResponseProtoMsg): _4.QueryRecordsByOwnerResponse;
            toProto(message: _4.QueryRecordsByOwnerResponse): Uint8Array;
            toProtoMsg(message: _4.QueryRecordsByOwnerResponse): _4.QueryRecordsByOwnerResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _4.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.QueryParamsRequest;
            fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
            fromAmino(_: _4.QueryParamsRequestAmino): _4.QueryParamsRequest;
            toAmino(_: _4.QueryParamsRequest): _4.QueryParamsRequestAmino;
            fromAminoMsg(object: _4.QueryParamsRequestAminoMsg): _4.QueryParamsRequest;
            fromProtoMsg(message: _4.QueryParamsRequestProtoMsg): _4.QueryParamsRequest;
            toProto(message: _4.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _4.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryParamsResponse;
            fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
            fromAmino(object: _4.QueryParamsResponseAmino): _4.QueryParamsResponse;
            toAmino(message: _4.QueryParamsResponse): _4.QueryParamsResponseAmino;
            fromAminoMsg(object: _4.QueryParamsResponseAminoMsg): _4.QueryParamsResponse;
            fromProtoMsg(message: _4.QueryParamsResponseProtoMsg): _4.QueryParamsResponse;
            toProto(message: _4.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseProtoMsg;
        };
        QueryGetCidRequest: {
            typeUrl: string;
            encode(message: _4.QueryGetCidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryGetCidRequest;
            fromPartial(object: Partial<_4.QueryGetCidRequest>): _4.QueryGetCidRequest;
            fromAmino(object: _4.QueryGetCidRequestAmino): _4.QueryGetCidRequest;
            toAmino(message: _4.QueryGetCidRequest): _4.QueryGetCidRequestAmino;
            fromAminoMsg(object: _4.QueryGetCidRequestAminoMsg): _4.QueryGetCidRequest;
            fromProtoMsg(message: _4.QueryGetCidRequestProtoMsg): _4.QueryGetCidRequest;
            toProto(message: _4.QueryGetCidRequest): Uint8Array;
            toProtoMsg(message: _4.QueryGetCidRequest): _4.QueryGetCidRequestProtoMsg;
        };
        QueryGetCidResponse: {
            typeUrl: string;
            encode(message: _4.QueryGetCidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryGetCidResponse;
            fromPartial(object: Partial<_4.QueryGetCidResponse>): _4.QueryGetCidResponse;
            fromAmino(object: _4.QueryGetCidResponseAmino): _4.QueryGetCidResponse;
            toAmino(message: _4.QueryGetCidResponse): _4.QueryGetCidResponseAmino;
            fromAminoMsg(object: _4.QueryGetCidResponseAminoMsg): _4.QueryGetCidResponse;
            fromProtoMsg(message: _4.QueryGetCidResponseProtoMsg): _4.QueryGetCidResponse;
            toProto(message: _4.QueryGetCidResponse): Uint8Array;
            toProtoMsg(message: _4.QueryGetCidResponse): _4.QueryGetCidResponseProtoMsg;
        };
        QueryGetCidSizeRequest: {
            typeUrl: string;
            encode(message: _4.QueryGetCidSizeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryGetCidSizeRequest;
            fromPartial(object: Partial<_4.QueryGetCidSizeRequest>): _4.QueryGetCidSizeRequest;
            fromAmino(object: _4.QueryGetCidSizeRequestAmino): _4.QueryGetCidSizeRequest;
            toAmino(message: _4.QueryGetCidSizeRequest): _4.QueryGetCidSizeRequestAmino;
            fromAminoMsg(object: _4.QueryGetCidSizeRequestAminoMsg): _4.QueryGetCidSizeRequest;
            fromProtoMsg(message: _4.QueryGetCidSizeRequestProtoMsg): _4.QueryGetCidSizeRequest;
            toProto(message: _4.QueryGetCidSizeRequest): Uint8Array;
            toProtoMsg(message: _4.QueryGetCidSizeRequest): _4.QueryGetCidSizeRequestProtoMsg;
        };
        QueryGetCidSizeResponse: {
            typeUrl: string;
            encode(message: _4.QueryGetCidSizeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryGetCidSizeResponse;
            fromPartial(object: Partial<_4.QueryGetCidSizeResponse>): _4.QueryGetCidSizeResponse;
            fromAmino(object: _4.QueryGetCidSizeResponseAmino): _4.QueryGetCidSizeResponse;
            toAmino(message: _4.QueryGetCidSizeResponse): _4.QueryGetCidSizeResponseAmino;
            fromAminoMsg(object: _4.QueryGetCidSizeResponseAminoMsg): _4.QueryGetCidSizeResponse;
            fromProtoMsg(message: _4.QueryGetCidSizeResponseProtoMsg): _4.QueryGetCidSizeResponse;
            toProto(message: _4.QueryGetCidSizeResponse): Uint8Array;
            toProtoMsg(message: _4.QueryGetCidSizeResponse): _4.QueryGetCidSizeResponseProtoMsg;
        };
        QueryHasCidRequest: {
            typeUrl: string;
            encode(message: _4.QueryHasCidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryHasCidRequest;
            fromPartial(object: Partial<_4.QueryHasCidRequest>): _4.QueryHasCidRequest;
            fromAmino(object: _4.QueryHasCidRequestAmino): _4.QueryHasCidRequest;
            toAmino(message: _4.QueryHasCidRequest): _4.QueryHasCidRequestAmino;
            fromAminoMsg(object: _4.QueryHasCidRequestAminoMsg): _4.QueryHasCidRequest;
            fromProtoMsg(message: _4.QueryHasCidRequestProtoMsg): _4.QueryHasCidRequest;
            toProto(message: _4.QueryHasCidRequest): Uint8Array;
            toProtoMsg(message: _4.QueryHasCidRequest): _4.QueryHasCidRequestProtoMsg;
        };
        QueryHasCidResponse: {
            typeUrl: string;
            encode(message: _4.QueryHasCidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryHasCidResponse;
            fromPartial(object: Partial<_4.QueryHasCidResponse>): _4.QueryHasCidResponse;
            fromAmino(object: _4.QueryHasCidResponseAmino): _4.QueryHasCidResponse;
            toAmino(message: _4.QueryHasCidResponse): _4.QueryHasCidResponseAmino;
            fromAminoMsg(object: _4.QueryHasCidResponseAminoMsg): _4.QueryHasCidResponse;
            fromProtoMsg(message: _4.QueryHasCidResponseProtoMsg): _4.QueryHasCidResponse;
            toProto(message: _4.QueryHasCidResponse): Uint8Array;
            toProtoMsg(message: _4.QueryHasCidResponse): _4.QueryHasCidResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.Params;
            fromPartial(object: Partial<_3.Params>): _3.Params;
            fromAmino(object: _3.ParamsAmino): _3.Params;
            toAmino(message: _3.Params): _3.ParamsAmino;
            fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
            fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
            toProto(message: _3.Params): Uint8Array;
            toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
        };
        IscnIdPrefix: {
            typeUrl: string;
            encode(message: _2.IscnIdPrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.IscnIdPrefix;
            fromPartial(object: Partial<_2.IscnIdPrefix>): _2.IscnIdPrefix;
            fromAmino(object: _2.IscnIdPrefixAmino): _2.IscnIdPrefix;
            toAmino(message: _2.IscnIdPrefix): _2.IscnIdPrefixAmino;
            fromAminoMsg(object: _2.IscnIdPrefixAminoMsg): _2.IscnIdPrefix;
            fromProtoMsg(message: _2.IscnIdPrefixProtoMsg): _2.IscnIdPrefix;
            toProto(message: _2.IscnIdPrefix): Uint8Array;
            toProtoMsg(message: _2.IscnIdPrefix): _2.IscnIdPrefixProtoMsg;
        };
        IscnId: {
            typeUrl: string;
            encode(message: _2.IscnId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.IscnId;
            fromPartial(object: Partial<_2.IscnId>): _2.IscnId;
            fromAmino(object: _2.IscnIdAmino): _2.IscnId;
            toAmino(message: _2.IscnId): _2.IscnIdAmino;
            fromAminoMsg(object: _2.IscnIdAminoMsg): _2.IscnId;
            fromProtoMsg(message: _2.IscnIdProtoMsg): _2.IscnId;
            toProto(message: _2.IscnId): Uint8Array;
            toProtoMsg(message: _2.IscnId): _2.IscnIdProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.GenesisState;
            fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
            toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
            fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
            fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
            toProto(message: _1.GenesisState): Uint8Array;
            toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
        };
        GenesisState_ContentIdRecord: {
            typeUrl: string;
            encode(message: _1.GenesisState_ContentIdRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.GenesisState_ContentIdRecord;
            fromPartial(object: Partial<_1.GenesisState_ContentIdRecord>): _1.GenesisState_ContentIdRecord;
            fromAmino(object: _1.GenesisState_ContentIdRecordAmino): _1.GenesisState_ContentIdRecord;
            toAmino(message: _1.GenesisState_ContentIdRecord): _1.GenesisState_ContentIdRecordAmino;
            fromAminoMsg(object: _1.GenesisState_ContentIdRecordAminoMsg): _1.GenesisState_ContentIdRecord;
            fromProtoMsg(message: _1.GenesisState_ContentIdRecordProtoMsg): _1.GenesisState_ContentIdRecord;
            toProto(message: _1.GenesisState_ContentIdRecord): Uint8Array;
            toProtoMsg(message: _1.GenesisState_ContentIdRecord): _1.GenesisState_ContentIdRecordProtoMsg;
        };
        UpdateAuthorization: {
            typeUrl: string;
            encode(message: _0.UpdateAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.UpdateAuthorization;
            fromPartial(object: Partial<_0.UpdateAuthorization>): _0.UpdateAuthorization;
            fromAmino(object: _0.UpdateAuthorizationAmino): _0.UpdateAuthorization;
            toAmino(message: _0.UpdateAuthorization): _0.UpdateAuthorizationAmino;
            fromAminoMsg(object: _0.UpdateAuthorizationAminoMsg): _0.UpdateAuthorization;
            fromProtoMsg(message: _0.UpdateAuthorizationProtoMsg): _0.UpdateAuthorization;
            toProto(message: _0.UpdateAuthorization): Uint8Array;
            toProtoMsg(message: _0.UpdateAuthorization): _0.UpdateAuthorizationProtoMsg;
        };
    };
    namespace likenft {
        const v1: {
            MsgClientImpl: typeof _150.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
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
            LCDQueryClient: typeof _146.LCDQueryClient;
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
                    toAmino: (message: _25.MsgNewClass) => _25.MsgNewClassAmino;
                    fromAmino: (object: _25.MsgNewClassAmino) => _25.MsgNewClass;
                };
                "/likechain.likenft.v1.MsgUpdateClass": {
                    aminoType: string;
                    toAmino: (message: _25.MsgUpdateClass) => _25.MsgUpdateClassAmino;
                    fromAmino: (object: _25.MsgUpdateClassAmino) => _25.MsgUpdateClass;
                };
                "/likechain.likenft.v1.MsgMintNFT": {
                    aminoType: string;
                    toAmino: (message: _25.MsgMintNFT) => _25.MsgMintNFTAmino;
                    fromAmino: (object: _25.MsgMintNFTAmino) => _25.MsgMintNFT;
                };
                "/likechain.likenft.v1.MsgBurnNFT": {
                    aminoType: string;
                    toAmino: (message: _25.MsgBurnNFT) => _25.MsgBurnNFTAmino;
                    fromAmino: (object: _25.MsgBurnNFTAmino) => _25.MsgBurnNFT;
                };
                "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
                    aminoType: string;
                    toAmino: (message: _25.MsgCreateBlindBoxContent) => _25.MsgCreateBlindBoxContentAmino;
                    fromAmino: (object: _25.MsgCreateBlindBoxContentAmino) => _25.MsgCreateBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
                    aminoType: string;
                    toAmino: (message: _25.MsgUpdateBlindBoxContent) => _25.MsgUpdateBlindBoxContentAmino;
                    fromAmino: (object: _25.MsgUpdateBlindBoxContentAmino) => _25.MsgUpdateBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
                    aminoType: string;
                    toAmino: (message: _25.MsgDeleteBlindBoxContent) => _25.MsgDeleteBlindBoxContentAmino;
                    fromAmino: (object: _25.MsgDeleteBlindBoxContentAmino) => _25.MsgDeleteBlindBoxContent;
                };
                "/likechain.likenft.v1.MsgCreateOffer": {
                    aminoType: string;
                    toAmino: (message: _25.MsgCreateOffer) => _25.MsgCreateOfferAmino;
                    fromAmino: (object: _25.MsgCreateOfferAmino) => _25.MsgCreateOffer;
                };
                "/likechain.likenft.v1.MsgUpdateOffer": {
                    aminoType: string;
                    toAmino: (message: _25.MsgUpdateOffer) => _25.MsgUpdateOfferAmino;
                    fromAmino: (object: _25.MsgUpdateOfferAmino) => _25.MsgUpdateOffer;
                };
                "/likechain.likenft.v1.MsgDeleteOffer": {
                    aminoType: string;
                    toAmino: (message: _25.MsgDeleteOffer) => _25.MsgDeleteOfferAmino;
                    fromAmino: (object: _25.MsgDeleteOfferAmino) => _25.MsgDeleteOffer;
                };
                "/likechain.likenft.v1.MsgCreateListing": {
                    aminoType: string;
                    toAmino: (message: _25.MsgCreateListing) => _25.MsgCreateListingAmino;
                    fromAmino: (object: _25.MsgCreateListingAmino) => _25.MsgCreateListing;
                };
                "/likechain.likenft.v1.MsgUpdateListing": {
                    aminoType: string;
                    toAmino: (message: _25.MsgUpdateListing) => _25.MsgUpdateListingAmino;
                    fromAmino: (object: _25.MsgUpdateListingAmino) => _25.MsgUpdateListing;
                };
                "/likechain.likenft.v1.MsgDeleteListing": {
                    aminoType: string;
                    toAmino: (message: _25.MsgDeleteListing) => _25.MsgDeleteListingAmino;
                    fromAmino: (object: _25.MsgDeleteListingAmino) => _25.MsgDeleteListing;
                };
                "/likechain.likenft.v1.MsgSellNFT": {
                    aminoType: string;
                    toAmino: (message: _25.MsgSellNFT) => _25.MsgSellNFTAmino;
                    fromAmino: (object: _25.MsgSellNFTAmino) => _25.MsgSellNFT;
                };
                "/likechain.likenft.v1.MsgBuyNFT": {
                    aminoType: string;
                    toAmino: (message: _25.MsgBuyNFT) => _25.MsgBuyNFTAmino;
                    fromAmino: (object: _25.MsgBuyNFTAmino) => _25.MsgBuyNFT;
                };
                "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
                    aminoType: string;
                    toAmino: (message: _25.MsgCreateRoyaltyConfig) => _25.MsgCreateRoyaltyConfigAmino;
                    fromAmino: (object: _25.MsgCreateRoyaltyConfigAmino) => _25.MsgCreateRoyaltyConfig;
                };
                "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
                    aminoType: string;
                    toAmino: (message: _25.MsgUpdateRoyaltyConfig) => _25.MsgUpdateRoyaltyConfigAmino;
                    fromAmino: (object: _25.MsgUpdateRoyaltyConfigAmino) => _25.MsgUpdateRoyaltyConfig;
                };
                "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
                    aminoType: string;
                    toAmino: (message: _25.MsgDeleteRoyaltyConfig) => _25.MsgDeleteRoyaltyConfigAmino;
                    fromAmino: (object: _25.MsgDeleteRoyaltyConfigAmino) => _25.MsgDeleteRoyaltyConfig;
                };
            };
            MsgNewClass: {
                typeUrl: string;
                encode(message: _25.MsgNewClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgNewClass;
                fromPartial(object: Partial<_25.MsgNewClass>): _25.MsgNewClass;
                fromAmino(object: _25.MsgNewClassAmino): _25.MsgNewClass;
                toAmino(message: _25.MsgNewClass): _25.MsgNewClassAmino;
                fromAminoMsg(object: _25.MsgNewClassAminoMsg): _25.MsgNewClass;
                fromProtoMsg(message: _25.MsgNewClassProtoMsg): _25.MsgNewClass;
                toProto(message: _25.MsgNewClass): Uint8Array;
                toProtoMsg(message: _25.MsgNewClass): _25.MsgNewClassProtoMsg;
            };
            MsgNewClassResponse: {
                typeUrl: string;
                encode(message: _25.MsgNewClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgNewClassResponse;
                fromPartial(object: Partial<_25.MsgNewClassResponse>): _25.MsgNewClassResponse;
                fromAmino(object: _25.MsgNewClassResponseAmino): _25.MsgNewClassResponse;
                toAmino(message: _25.MsgNewClassResponse): _25.MsgNewClassResponseAmino;
                fromAminoMsg(object: _25.MsgNewClassResponseAminoMsg): _25.MsgNewClassResponse;
                fromProtoMsg(message: _25.MsgNewClassResponseProtoMsg): _25.MsgNewClassResponse;
                toProto(message: _25.MsgNewClassResponse): Uint8Array;
                toProtoMsg(message: _25.MsgNewClassResponse): _25.MsgNewClassResponseProtoMsg;
            };
            MsgUpdateClass: {
                typeUrl: string;
                encode(message: _25.MsgUpdateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateClass;
                fromPartial(object: Partial<_25.MsgUpdateClass>): _25.MsgUpdateClass;
                fromAmino(object: _25.MsgUpdateClassAmino): _25.MsgUpdateClass;
                toAmino(message: _25.MsgUpdateClass): _25.MsgUpdateClassAmino;
                fromAminoMsg(object: _25.MsgUpdateClassAminoMsg): _25.MsgUpdateClass;
                fromProtoMsg(message: _25.MsgUpdateClassProtoMsg): _25.MsgUpdateClass;
                toProto(message: _25.MsgUpdateClass): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateClass): _25.MsgUpdateClassProtoMsg;
            };
            MsgUpdateClassResponse: {
                typeUrl: string;
                encode(message: _25.MsgUpdateClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateClassResponse;
                fromPartial(object: Partial<_25.MsgUpdateClassResponse>): _25.MsgUpdateClassResponse;
                fromAmino(object: _25.MsgUpdateClassResponseAmino): _25.MsgUpdateClassResponse;
                toAmino(message: _25.MsgUpdateClassResponse): _25.MsgUpdateClassResponseAmino;
                fromAminoMsg(object: _25.MsgUpdateClassResponseAminoMsg): _25.MsgUpdateClassResponse;
                fromProtoMsg(message: _25.MsgUpdateClassResponseProtoMsg): _25.MsgUpdateClassResponse;
                toProto(message: _25.MsgUpdateClassResponse): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateClassResponse): _25.MsgUpdateClassResponseProtoMsg;
            };
            MsgMintNFT: {
                typeUrl: string;
                encode(message: _25.MsgMintNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgMintNFT;
                fromPartial(object: Partial<_25.MsgMintNFT>): _25.MsgMintNFT;
                fromAmino(object: _25.MsgMintNFTAmino): _25.MsgMintNFT;
                toAmino(message: _25.MsgMintNFT): _25.MsgMintNFTAmino;
                fromAminoMsg(object: _25.MsgMintNFTAminoMsg): _25.MsgMintNFT;
                fromProtoMsg(message: _25.MsgMintNFTProtoMsg): _25.MsgMintNFT;
                toProto(message: _25.MsgMintNFT): Uint8Array;
                toProtoMsg(message: _25.MsgMintNFT): _25.MsgMintNFTProtoMsg;
            };
            MsgMintNFTResponse: {
                typeUrl: string;
                encode(message: _25.MsgMintNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgMintNFTResponse;
                fromPartial(object: Partial<_25.MsgMintNFTResponse>): _25.MsgMintNFTResponse;
                fromAmino(object: _25.MsgMintNFTResponseAmino): _25.MsgMintNFTResponse;
                toAmino(message: _25.MsgMintNFTResponse): _25.MsgMintNFTResponseAmino;
                fromAminoMsg(object: _25.MsgMintNFTResponseAminoMsg): _25.MsgMintNFTResponse;
                fromProtoMsg(message: _25.MsgMintNFTResponseProtoMsg): _25.MsgMintNFTResponse;
                toProto(message: _25.MsgMintNFTResponse): Uint8Array;
                toProtoMsg(message: _25.MsgMintNFTResponse): _25.MsgMintNFTResponseProtoMsg;
            };
            MsgBurnNFT: {
                typeUrl: string;
                encode(message: _25.MsgBurnNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgBurnNFT;
                fromPartial(object: Partial<_25.MsgBurnNFT>): _25.MsgBurnNFT;
                fromAmino(object: _25.MsgBurnNFTAmino): _25.MsgBurnNFT;
                toAmino(message: _25.MsgBurnNFT): _25.MsgBurnNFTAmino;
                fromAminoMsg(object: _25.MsgBurnNFTAminoMsg): _25.MsgBurnNFT;
                fromProtoMsg(message: _25.MsgBurnNFTProtoMsg): _25.MsgBurnNFT;
                toProto(message: _25.MsgBurnNFT): Uint8Array;
                toProtoMsg(message: _25.MsgBurnNFT): _25.MsgBurnNFTProtoMsg;
            };
            MsgBurnNFTResponse: {
                typeUrl: string;
                encode(_: _25.MsgBurnNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgBurnNFTResponse;
                fromPartial(_: Partial<_25.MsgBurnNFTResponse>): _25.MsgBurnNFTResponse;
                fromAmino(_: _25.MsgBurnNFTResponseAmino): _25.MsgBurnNFTResponse;
                toAmino(_: _25.MsgBurnNFTResponse): _25.MsgBurnNFTResponseAmino;
                fromAminoMsg(object: _25.MsgBurnNFTResponseAminoMsg): _25.MsgBurnNFTResponse;
                fromProtoMsg(message: _25.MsgBurnNFTResponseProtoMsg): _25.MsgBurnNFTResponse;
                toProto(message: _25.MsgBurnNFTResponse): Uint8Array;
                toProtoMsg(message: _25.MsgBurnNFTResponse): _25.MsgBurnNFTResponseProtoMsg;
            };
            MsgCreateBlindBoxContent: {
                typeUrl: string;
                encode(message: _25.MsgCreateBlindBoxContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgCreateBlindBoxContent;
                fromPartial(object: Partial<_25.MsgCreateBlindBoxContent>): _25.MsgCreateBlindBoxContent;
                fromAmino(object: _25.MsgCreateBlindBoxContentAmino): _25.MsgCreateBlindBoxContent;
                toAmino(message: _25.MsgCreateBlindBoxContent): _25.MsgCreateBlindBoxContentAmino;
                fromAminoMsg(object: _25.MsgCreateBlindBoxContentAminoMsg): _25.MsgCreateBlindBoxContent;
                fromProtoMsg(message: _25.MsgCreateBlindBoxContentProtoMsg): _25.MsgCreateBlindBoxContent;
                toProto(message: _25.MsgCreateBlindBoxContent): Uint8Array;
                toProtoMsg(message: _25.MsgCreateBlindBoxContent): _25.MsgCreateBlindBoxContentProtoMsg;
            };
            MsgCreateBlindBoxContentResponse: {
                typeUrl: string;
                encode(message: _25.MsgCreateBlindBoxContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgCreateBlindBoxContentResponse;
                fromPartial(object: Partial<_25.MsgCreateBlindBoxContentResponse>): _25.MsgCreateBlindBoxContentResponse;
                fromAmino(object: _25.MsgCreateBlindBoxContentResponseAmino): _25.MsgCreateBlindBoxContentResponse;
                toAmino(message: _25.MsgCreateBlindBoxContentResponse): _25.MsgCreateBlindBoxContentResponseAmino;
                fromAminoMsg(object: _25.MsgCreateBlindBoxContentResponseAminoMsg): _25.MsgCreateBlindBoxContentResponse;
                fromProtoMsg(message: _25.MsgCreateBlindBoxContentResponseProtoMsg): _25.MsgCreateBlindBoxContentResponse;
                toProto(message: _25.MsgCreateBlindBoxContentResponse): Uint8Array;
                toProtoMsg(message: _25.MsgCreateBlindBoxContentResponse): _25.MsgCreateBlindBoxContentResponseProtoMsg;
            };
            MsgUpdateBlindBoxContent: {
                typeUrl: string;
                encode(message: _25.MsgUpdateBlindBoxContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateBlindBoxContent;
                fromPartial(object: Partial<_25.MsgUpdateBlindBoxContent>): _25.MsgUpdateBlindBoxContent;
                fromAmino(object: _25.MsgUpdateBlindBoxContentAmino): _25.MsgUpdateBlindBoxContent;
                toAmino(message: _25.MsgUpdateBlindBoxContent): _25.MsgUpdateBlindBoxContentAmino;
                fromAminoMsg(object: _25.MsgUpdateBlindBoxContentAminoMsg): _25.MsgUpdateBlindBoxContent;
                fromProtoMsg(message: _25.MsgUpdateBlindBoxContentProtoMsg): _25.MsgUpdateBlindBoxContent;
                toProto(message: _25.MsgUpdateBlindBoxContent): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateBlindBoxContent): _25.MsgUpdateBlindBoxContentProtoMsg;
            };
            MsgUpdateBlindBoxContentResponse: {
                typeUrl: string;
                encode(message: _25.MsgUpdateBlindBoxContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateBlindBoxContentResponse;
                fromPartial(object: Partial<_25.MsgUpdateBlindBoxContentResponse>): _25.MsgUpdateBlindBoxContentResponse;
                fromAmino(object: _25.MsgUpdateBlindBoxContentResponseAmino): _25.MsgUpdateBlindBoxContentResponse;
                toAmino(message: _25.MsgUpdateBlindBoxContentResponse): _25.MsgUpdateBlindBoxContentResponseAmino;
                fromAminoMsg(object: _25.MsgUpdateBlindBoxContentResponseAminoMsg): _25.MsgUpdateBlindBoxContentResponse;
                fromProtoMsg(message: _25.MsgUpdateBlindBoxContentResponseProtoMsg): _25.MsgUpdateBlindBoxContentResponse;
                toProto(message: _25.MsgUpdateBlindBoxContentResponse): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateBlindBoxContentResponse): _25.MsgUpdateBlindBoxContentResponseProtoMsg;
            };
            MsgDeleteBlindBoxContent: {
                typeUrl: string;
                encode(message: _25.MsgDeleteBlindBoxContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgDeleteBlindBoxContent;
                fromPartial(object: Partial<_25.MsgDeleteBlindBoxContent>): _25.MsgDeleteBlindBoxContent;
                fromAmino(object: _25.MsgDeleteBlindBoxContentAmino): _25.MsgDeleteBlindBoxContent;
                toAmino(message: _25.MsgDeleteBlindBoxContent): _25.MsgDeleteBlindBoxContentAmino;
                fromAminoMsg(object: _25.MsgDeleteBlindBoxContentAminoMsg): _25.MsgDeleteBlindBoxContent;
                fromProtoMsg(message: _25.MsgDeleteBlindBoxContentProtoMsg): _25.MsgDeleteBlindBoxContent;
                toProto(message: _25.MsgDeleteBlindBoxContent): Uint8Array;
                toProtoMsg(message: _25.MsgDeleteBlindBoxContent): _25.MsgDeleteBlindBoxContentProtoMsg;
            };
            MsgDeleteBlindBoxContentResponse: {
                typeUrl: string;
                encode(_: _25.MsgDeleteBlindBoxContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgDeleteBlindBoxContentResponse;
                fromPartial(_: Partial<_25.MsgDeleteBlindBoxContentResponse>): _25.MsgDeleteBlindBoxContentResponse;
                fromAmino(_: _25.MsgDeleteBlindBoxContentResponseAmino): _25.MsgDeleteBlindBoxContentResponse;
                toAmino(_: _25.MsgDeleteBlindBoxContentResponse): _25.MsgDeleteBlindBoxContentResponseAmino;
                fromAminoMsg(object: _25.MsgDeleteBlindBoxContentResponseAminoMsg): _25.MsgDeleteBlindBoxContentResponse;
                fromProtoMsg(message: _25.MsgDeleteBlindBoxContentResponseProtoMsg): _25.MsgDeleteBlindBoxContentResponse;
                toProto(message: _25.MsgDeleteBlindBoxContentResponse): Uint8Array;
                toProtoMsg(message: _25.MsgDeleteBlindBoxContentResponse): _25.MsgDeleteBlindBoxContentResponseProtoMsg;
            };
            MsgCreateOffer: {
                typeUrl: string;
                encode(message: _25.MsgCreateOffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgCreateOffer;
                fromPartial(object: Partial<_25.MsgCreateOffer>): _25.MsgCreateOffer;
                fromAmino(object: _25.MsgCreateOfferAmino): _25.MsgCreateOffer;
                toAmino(message: _25.MsgCreateOffer): _25.MsgCreateOfferAmino;
                fromAminoMsg(object: _25.MsgCreateOfferAminoMsg): _25.MsgCreateOffer;
                fromProtoMsg(message: _25.MsgCreateOfferProtoMsg): _25.MsgCreateOffer;
                toProto(message: _25.MsgCreateOffer): Uint8Array;
                toProtoMsg(message: _25.MsgCreateOffer): _25.MsgCreateOfferProtoMsg;
            };
            MsgCreateOfferResponse: {
                typeUrl: string;
                encode(message: _25.MsgCreateOfferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgCreateOfferResponse;
                fromPartial(object: Partial<_25.MsgCreateOfferResponse>): _25.MsgCreateOfferResponse;
                fromAmino(object: _25.MsgCreateOfferResponseAmino): _25.MsgCreateOfferResponse;
                toAmino(message: _25.MsgCreateOfferResponse): _25.MsgCreateOfferResponseAmino;
                fromAminoMsg(object: _25.MsgCreateOfferResponseAminoMsg): _25.MsgCreateOfferResponse;
                fromProtoMsg(message: _25.MsgCreateOfferResponseProtoMsg): _25.MsgCreateOfferResponse;
                toProto(message: _25.MsgCreateOfferResponse): Uint8Array;
                toProtoMsg(message: _25.MsgCreateOfferResponse): _25.MsgCreateOfferResponseProtoMsg;
            };
            MsgUpdateOffer: {
                typeUrl: string;
                encode(message: _25.MsgUpdateOffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateOffer;
                fromPartial(object: Partial<_25.MsgUpdateOffer>): _25.MsgUpdateOffer;
                fromAmino(object: _25.MsgUpdateOfferAmino): _25.MsgUpdateOffer;
                toAmino(message: _25.MsgUpdateOffer): _25.MsgUpdateOfferAmino;
                fromAminoMsg(object: _25.MsgUpdateOfferAminoMsg): _25.MsgUpdateOffer;
                fromProtoMsg(message: _25.MsgUpdateOfferProtoMsg): _25.MsgUpdateOffer;
                toProto(message: _25.MsgUpdateOffer): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateOffer): _25.MsgUpdateOfferProtoMsg;
            };
            MsgUpdateOfferResponse: {
                typeUrl: string;
                encode(message: _25.MsgUpdateOfferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateOfferResponse;
                fromPartial(object: Partial<_25.MsgUpdateOfferResponse>): _25.MsgUpdateOfferResponse;
                fromAmino(object: _25.MsgUpdateOfferResponseAmino): _25.MsgUpdateOfferResponse;
                toAmino(message: _25.MsgUpdateOfferResponse): _25.MsgUpdateOfferResponseAmino;
                fromAminoMsg(object: _25.MsgUpdateOfferResponseAminoMsg): _25.MsgUpdateOfferResponse;
                fromProtoMsg(message: _25.MsgUpdateOfferResponseProtoMsg): _25.MsgUpdateOfferResponse;
                toProto(message: _25.MsgUpdateOfferResponse): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateOfferResponse): _25.MsgUpdateOfferResponseProtoMsg;
            };
            MsgDeleteOffer: {
                typeUrl: string;
                encode(message: _25.MsgDeleteOffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgDeleteOffer;
                fromPartial(object: Partial<_25.MsgDeleteOffer>): _25.MsgDeleteOffer;
                fromAmino(object: _25.MsgDeleteOfferAmino): _25.MsgDeleteOffer;
                toAmino(message: _25.MsgDeleteOffer): _25.MsgDeleteOfferAmino;
                fromAminoMsg(object: _25.MsgDeleteOfferAminoMsg): _25.MsgDeleteOffer;
                fromProtoMsg(message: _25.MsgDeleteOfferProtoMsg): _25.MsgDeleteOffer;
                toProto(message: _25.MsgDeleteOffer): Uint8Array;
                toProtoMsg(message: _25.MsgDeleteOffer): _25.MsgDeleteOfferProtoMsg;
            };
            MsgDeleteOfferResponse: {
                typeUrl: string;
                encode(_: _25.MsgDeleteOfferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgDeleteOfferResponse;
                fromPartial(_: Partial<_25.MsgDeleteOfferResponse>): _25.MsgDeleteOfferResponse;
                fromAmino(_: _25.MsgDeleteOfferResponseAmino): _25.MsgDeleteOfferResponse;
                toAmino(_: _25.MsgDeleteOfferResponse): _25.MsgDeleteOfferResponseAmino;
                fromAminoMsg(object: _25.MsgDeleteOfferResponseAminoMsg): _25.MsgDeleteOfferResponse;
                fromProtoMsg(message: _25.MsgDeleteOfferResponseProtoMsg): _25.MsgDeleteOfferResponse;
                toProto(message: _25.MsgDeleteOfferResponse): Uint8Array;
                toProtoMsg(message: _25.MsgDeleteOfferResponse): _25.MsgDeleteOfferResponseProtoMsg;
            };
            MsgCreateListing: {
                typeUrl: string;
                encode(message: _25.MsgCreateListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgCreateListing;
                fromPartial(object: Partial<_25.MsgCreateListing>): _25.MsgCreateListing;
                fromAmino(object: _25.MsgCreateListingAmino): _25.MsgCreateListing;
                toAmino(message: _25.MsgCreateListing): _25.MsgCreateListingAmino;
                fromAminoMsg(object: _25.MsgCreateListingAminoMsg): _25.MsgCreateListing;
                fromProtoMsg(message: _25.MsgCreateListingProtoMsg): _25.MsgCreateListing;
                toProto(message: _25.MsgCreateListing): Uint8Array;
                toProtoMsg(message: _25.MsgCreateListing): _25.MsgCreateListingProtoMsg;
            };
            MsgCreateListingResponse: {
                typeUrl: string;
                encode(message: _25.MsgCreateListingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgCreateListingResponse;
                fromPartial(object: Partial<_25.MsgCreateListingResponse>): _25.MsgCreateListingResponse;
                fromAmino(object: _25.MsgCreateListingResponseAmino): _25.MsgCreateListingResponse;
                toAmino(message: _25.MsgCreateListingResponse): _25.MsgCreateListingResponseAmino;
                fromAminoMsg(object: _25.MsgCreateListingResponseAminoMsg): _25.MsgCreateListingResponse;
                fromProtoMsg(message: _25.MsgCreateListingResponseProtoMsg): _25.MsgCreateListingResponse;
                toProto(message: _25.MsgCreateListingResponse): Uint8Array;
                toProtoMsg(message: _25.MsgCreateListingResponse): _25.MsgCreateListingResponseProtoMsg;
            };
            MsgUpdateListing: {
                typeUrl: string;
                encode(message: _25.MsgUpdateListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateListing;
                fromPartial(object: Partial<_25.MsgUpdateListing>): _25.MsgUpdateListing;
                fromAmino(object: _25.MsgUpdateListingAmino): _25.MsgUpdateListing;
                toAmino(message: _25.MsgUpdateListing): _25.MsgUpdateListingAmino;
                fromAminoMsg(object: _25.MsgUpdateListingAminoMsg): _25.MsgUpdateListing;
                fromProtoMsg(message: _25.MsgUpdateListingProtoMsg): _25.MsgUpdateListing;
                toProto(message: _25.MsgUpdateListing): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateListing): _25.MsgUpdateListingProtoMsg;
            };
            MsgUpdateListingResponse: {
                typeUrl: string;
                encode(message: _25.MsgUpdateListingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateListingResponse;
                fromPartial(object: Partial<_25.MsgUpdateListingResponse>): _25.MsgUpdateListingResponse;
                fromAmino(object: _25.MsgUpdateListingResponseAmino): _25.MsgUpdateListingResponse;
                toAmino(message: _25.MsgUpdateListingResponse): _25.MsgUpdateListingResponseAmino;
                fromAminoMsg(object: _25.MsgUpdateListingResponseAminoMsg): _25.MsgUpdateListingResponse;
                fromProtoMsg(message: _25.MsgUpdateListingResponseProtoMsg): _25.MsgUpdateListingResponse;
                toProto(message: _25.MsgUpdateListingResponse): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateListingResponse): _25.MsgUpdateListingResponseProtoMsg;
            };
            MsgDeleteListing: {
                typeUrl: string;
                encode(message: _25.MsgDeleteListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgDeleteListing;
                fromPartial(object: Partial<_25.MsgDeleteListing>): _25.MsgDeleteListing;
                fromAmino(object: _25.MsgDeleteListingAmino): _25.MsgDeleteListing;
                toAmino(message: _25.MsgDeleteListing): _25.MsgDeleteListingAmino;
                fromAminoMsg(object: _25.MsgDeleteListingAminoMsg): _25.MsgDeleteListing;
                fromProtoMsg(message: _25.MsgDeleteListingProtoMsg): _25.MsgDeleteListing;
                toProto(message: _25.MsgDeleteListing): Uint8Array;
                toProtoMsg(message: _25.MsgDeleteListing): _25.MsgDeleteListingProtoMsg;
            };
            MsgDeleteListingResponse: {
                typeUrl: string;
                encode(_: _25.MsgDeleteListingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgDeleteListingResponse;
                fromPartial(_: Partial<_25.MsgDeleteListingResponse>): _25.MsgDeleteListingResponse;
                fromAmino(_: _25.MsgDeleteListingResponseAmino): _25.MsgDeleteListingResponse;
                toAmino(_: _25.MsgDeleteListingResponse): _25.MsgDeleteListingResponseAmino;
                fromAminoMsg(object: _25.MsgDeleteListingResponseAminoMsg): _25.MsgDeleteListingResponse;
                fromProtoMsg(message: _25.MsgDeleteListingResponseProtoMsg): _25.MsgDeleteListingResponse;
                toProto(message: _25.MsgDeleteListingResponse): Uint8Array;
                toProtoMsg(message: _25.MsgDeleteListingResponse): _25.MsgDeleteListingResponseProtoMsg;
            };
            MsgSellNFT: {
                typeUrl: string;
                encode(message: _25.MsgSellNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgSellNFT;
                fromPartial(object: Partial<_25.MsgSellNFT>): _25.MsgSellNFT;
                fromAmino(object: _25.MsgSellNFTAmino): _25.MsgSellNFT;
                toAmino(message: _25.MsgSellNFT): _25.MsgSellNFTAmino;
                fromAminoMsg(object: _25.MsgSellNFTAminoMsg): _25.MsgSellNFT;
                fromProtoMsg(message: _25.MsgSellNFTProtoMsg): _25.MsgSellNFT;
                toProto(message: _25.MsgSellNFT): Uint8Array;
                toProtoMsg(message: _25.MsgSellNFT): _25.MsgSellNFTProtoMsg;
            };
            MsgSellNFTResponse: {
                typeUrl: string;
                encode(_: _25.MsgSellNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgSellNFTResponse;
                fromPartial(_: Partial<_25.MsgSellNFTResponse>): _25.MsgSellNFTResponse;
                fromAmino(_: _25.MsgSellNFTResponseAmino): _25.MsgSellNFTResponse;
                toAmino(_: _25.MsgSellNFTResponse): _25.MsgSellNFTResponseAmino;
                fromAminoMsg(object: _25.MsgSellNFTResponseAminoMsg): _25.MsgSellNFTResponse;
                fromProtoMsg(message: _25.MsgSellNFTResponseProtoMsg): _25.MsgSellNFTResponse;
                toProto(message: _25.MsgSellNFTResponse): Uint8Array;
                toProtoMsg(message: _25.MsgSellNFTResponse): _25.MsgSellNFTResponseProtoMsg;
            };
            MsgBuyNFT: {
                typeUrl: string;
                encode(message: _25.MsgBuyNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgBuyNFT;
                fromPartial(object: Partial<_25.MsgBuyNFT>): _25.MsgBuyNFT;
                fromAmino(object: _25.MsgBuyNFTAmino): _25.MsgBuyNFT;
                toAmino(message: _25.MsgBuyNFT): _25.MsgBuyNFTAmino;
                fromAminoMsg(object: _25.MsgBuyNFTAminoMsg): _25.MsgBuyNFT;
                fromProtoMsg(message: _25.MsgBuyNFTProtoMsg): _25.MsgBuyNFT;
                toProto(message: _25.MsgBuyNFT): Uint8Array;
                toProtoMsg(message: _25.MsgBuyNFT): _25.MsgBuyNFTProtoMsg;
            };
            MsgBuyNFTResponse: {
                typeUrl: string;
                encode(_: _25.MsgBuyNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgBuyNFTResponse;
                fromPartial(_: Partial<_25.MsgBuyNFTResponse>): _25.MsgBuyNFTResponse;
                fromAmino(_: _25.MsgBuyNFTResponseAmino): _25.MsgBuyNFTResponse;
                toAmino(_: _25.MsgBuyNFTResponse): _25.MsgBuyNFTResponseAmino;
                fromAminoMsg(object: _25.MsgBuyNFTResponseAminoMsg): _25.MsgBuyNFTResponse;
                fromProtoMsg(message: _25.MsgBuyNFTResponseProtoMsg): _25.MsgBuyNFTResponse;
                toProto(message: _25.MsgBuyNFTResponse): Uint8Array;
                toProtoMsg(message: _25.MsgBuyNFTResponse): _25.MsgBuyNFTResponseProtoMsg;
            };
            MsgCreateRoyaltyConfig: {
                typeUrl: string;
                encode(message: _25.MsgCreateRoyaltyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgCreateRoyaltyConfig;
                fromPartial(object: Partial<_25.MsgCreateRoyaltyConfig>): _25.MsgCreateRoyaltyConfig;
                fromAmino(object: _25.MsgCreateRoyaltyConfigAmino): _25.MsgCreateRoyaltyConfig;
                toAmino(message: _25.MsgCreateRoyaltyConfig): _25.MsgCreateRoyaltyConfigAmino;
                fromAminoMsg(object: _25.MsgCreateRoyaltyConfigAminoMsg): _25.MsgCreateRoyaltyConfig;
                fromProtoMsg(message: _25.MsgCreateRoyaltyConfigProtoMsg): _25.MsgCreateRoyaltyConfig;
                toProto(message: _25.MsgCreateRoyaltyConfig): Uint8Array;
                toProtoMsg(message: _25.MsgCreateRoyaltyConfig): _25.MsgCreateRoyaltyConfigProtoMsg;
            };
            MsgCreateRoyaltyConfigResponse: {
                typeUrl: string;
                encode(message: _25.MsgCreateRoyaltyConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgCreateRoyaltyConfigResponse;
                fromPartial(object: Partial<_25.MsgCreateRoyaltyConfigResponse>): _25.MsgCreateRoyaltyConfigResponse;
                fromAmino(object: _25.MsgCreateRoyaltyConfigResponseAmino): _25.MsgCreateRoyaltyConfigResponse;
                toAmino(message: _25.MsgCreateRoyaltyConfigResponse): _25.MsgCreateRoyaltyConfigResponseAmino;
                fromAminoMsg(object: _25.MsgCreateRoyaltyConfigResponseAminoMsg): _25.MsgCreateRoyaltyConfigResponse;
                fromProtoMsg(message: _25.MsgCreateRoyaltyConfigResponseProtoMsg): _25.MsgCreateRoyaltyConfigResponse;
                toProto(message: _25.MsgCreateRoyaltyConfigResponse): Uint8Array;
                toProtoMsg(message: _25.MsgCreateRoyaltyConfigResponse): _25.MsgCreateRoyaltyConfigResponseProtoMsg;
            };
            MsgUpdateRoyaltyConfig: {
                typeUrl: string;
                encode(message: _25.MsgUpdateRoyaltyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateRoyaltyConfig;
                fromPartial(object: Partial<_25.MsgUpdateRoyaltyConfig>): _25.MsgUpdateRoyaltyConfig;
                fromAmino(object: _25.MsgUpdateRoyaltyConfigAmino): _25.MsgUpdateRoyaltyConfig;
                toAmino(message: _25.MsgUpdateRoyaltyConfig): _25.MsgUpdateRoyaltyConfigAmino;
                fromAminoMsg(object: _25.MsgUpdateRoyaltyConfigAminoMsg): _25.MsgUpdateRoyaltyConfig;
                fromProtoMsg(message: _25.MsgUpdateRoyaltyConfigProtoMsg): _25.MsgUpdateRoyaltyConfig;
                toProto(message: _25.MsgUpdateRoyaltyConfig): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateRoyaltyConfig): _25.MsgUpdateRoyaltyConfigProtoMsg;
            };
            MsgUpdateRoyaltyConfigResponse: {
                typeUrl: string;
                encode(message: _25.MsgUpdateRoyaltyConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateRoyaltyConfigResponse;
                fromPartial(object: Partial<_25.MsgUpdateRoyaltyConfigResponse>): _25.MsgUpdateRoyaltyConfigResponse;
                fromAmino(object: _25.MsgUpdateRoyaltyConfigResponseAmino): _25.MsgUpdateRoyaltyConfigResponse;
                toAmino(message: _25.MsgUpdateRoyaltyConfigResponse): _25.MsgUpdateRoyaltyConfigResponseAmino;
                fromAminoMsg(object: _25.MsgUpdateRoyaltyConfigResponseAminoMsg): _25.MsgUpdateRoyaltyConfigResponse;
                fromProtoMsg(message: _25.MsgUpdateRoyaltyConfigResponseProtoMsg): _25.MsgUpdateRoyaltyConfigResponse;
                toProto(message: _25.MsgUpdateRoyaltyConfigResponse): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateRoyaltyConfigResponse): _25.MsgUpdateRoyaltyConfigResponseProtoMsg;
            };
            MsgDeleteRoyaltyConfig: {
                typeUrl: string;
                encode(message: _25.MsgDeleteRoyaltyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgDeleteRoyaltyConfig;
                fromPartial(object: Partial<_25.MsgDeleteRoyaltyConfig>): _25.MsgDeleteRoyaltyConfig;
                fromAmino(object: _25.MsgDeleteRoyaltyConfigAmino): _25.MsgDeleteRoyaltyConfig;
                toAmino(message: _25.MsgDeleteRoyaltyConfig): _25.MsgDeleteRoyaltyConfigAmino;
                fromAminoMsg(object: _25.MsgDeleteRoyaltyConfigAminoMsg): _25.MsgDeleteRoyaltyConfig;
                fromProtoMsg(message: _25.MsgDeleteRoyaltyConfigProtoMsg): _25.MsgDeleteRoyaltyConfig;
                toProto(message: _25.MsgDeleteRoyaltyConfig): Uint8Array;
                toProtoMsg(message: _25.MsgDeleteRoyaltyConfig): _25.MsgDeleteRoyaltyConfigProtoMsg;
            };
            MsgDeleteRoyaltyConfigResponse: {
                typeUrl: string;
                encode(_: _25.MsgDeleteRoyaltyConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgDeleteRoyaltyConfigResponse;
                fromPartial(_: Partial<_25.MsgDeleteRoyaltyConfigResponse>): _25.MsgDeleteRoyaltyConfigResponse;
                fromAmino(_: _25.MsgDeleteRoyaltyConfigResponseAmino): _25.MsgDeleteRoyaltyConfigResponse;
                toAmino(_: _25.MsgDeleteRoyaltyConfigResponse): _25.MsgDeleteRoyaltyConfigResponseAmino;
                fromAminoMsg(object: _25.MsgDeleteRoyaltyConfigResponseAminoMsg): _25.MsgDeleteRoyaltyConfigResponse;
                fromProtoMsg(message: _25.MsgDeleteRoyaltyConfigResponseProtoMsg): _25.MsgDeleteRoyaltyConfigResponse;
                toProto(message: _25.MsgDeleteRoyaltyConfigResponse): Uint8Array;
                toProtoMsg(message: _25.MsgDeleteRoyaltyConfigResponse): _25.MsgDeleteRoyaltyConfigResponseProtoMsg;
            };
            RoyaltyConfigByClass: {
                typeUrl: string;
                encode(message: _24.RoyaltyConfigByClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.RoyaltyConfigByClass;
                fromPartial(object: Partial<_24.RoyaltyConfigByClass>): _24.RoyaltyConfigByClass;
                fromAmino(object: _24.RoyaltyConfigByClassAmino): _24.RoyaltyConfigByClass;
                toAmino(message: _24.RoyaltyConfigByClass): _24.RoyaltyConfigByClassAmino;
                fromAminoMsg(object: _24.RoyaltyConfigByClassAminoMsg): _24.RoyaltyConfigByClass;
                fromProtoMsg(message: _24.RoyaltyConfigByClassProtoMsg): _24.RoyaltyConfigByClass;
                toProto(message: _24.RoyaltyConfigByClass): Uint8Array;
                toProtoMsg(message: _24.RoyaltyConfigByClass): _24.RoyaltyConfigByClassProtoMsg;
            };
            RoyaltyConfig: {
                typeUrl: string;
                encode(message: _24.RoyaltyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.RoyaltyConfig;
                fromPartial(object: Partial<_24.RoyaltyConfig>): _24.RoyaltyConfig;
                fromAmino(object: _24.RoyaltyConfigAmino): _24.RoyaltyConfig;
                toAmino(message: _24.RoyaltyConfig): _24.RoyaltyConfigAmino;
                fromAminoMsg(object: _24.RoyaltyConfigAminoMsg): _24.RoyaltyConfig;
                fromProtoMsg(message: _24.RoyaltyConfigProtoMsg): _24.RoyaltyConfig;
                toProto(message: _24.RoyaltyConfig): Uint8Array;
                toProtoMsg(message: _24.RoyaltyConfig): _24.RoyaltyConfigProtoMsg;
            };
            RoyaltyStakeholder: {
                typeUrl: string;
                encode(message: _24.RoyaltyStakeholder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.RoyaltyStakeholder;
                fromPartial(object: Partial<_24.RoyaltyStakeholder>): _24.RoyaltyStakeholder;
                fromAmino(object: _24.RoyaltyStakeholderAmino): _24.RoyaltyStakeholder;
                toAmino(message: _24.RoyaltyStakeholder): _24.RoyaltyStakeholderAmino;
                fromAminoMsg(object: _24.RoyaltyStakeholderAminoMsg): _24.RoyaltyStakeholder;
                fromProtoMsg(message: _24.RoyaltyStakeholderProtoMsg): _24.RoyaltyStakeholder;
                toProto(message: _24.RoyaltyStakeholder): Uint8Array;
                toProtoMsg(message: _24.RoyaltyStakeholder): _24.RoyaltyStakeholderProtoMsg;
            };
            RoyaltyConfigInput: {
                typeUrl: string;
                encode(message: _24.RoyaltyConfigInput, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.RoyaltyConfigInput;
                fromPartial(object: Partial<_24.RoyaltyConfigInput>): _24.RoyaltyConfigInput;
                fromAmino(object: _24.RoyaltyConfigInputAmino): _24.RoyaltyConfigInput;
                toAmino(message: _24.RoyaltyConfigInput): _24.RoyaltyConfigInputAmino;
                fromAminoMsg(object: _24.RoyaltyConfigInputAminoMsg): _24.RoyaltyConfigInput;
                fromProtoMsg(message: _24.RoyaltyConfigInputProtoMsg): _24.RoyaltyConfigInput;
                toProto(message: _24.RoyaltyConfigInput): Uint8Array;
                toProtoMsg(message: _24.RoyaltyConfigInput): _24.RoyaltyConfigInputProtoMsg;
            };
            RoyaltyStakeholderInput: {
                typeUrl: string;
                encode(message: _24.RoyaltyStakeholderInput, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.RoyaltyStakeholderInput;
                fromPartial(object: Partial<_24.RoyaltyStakeholderInput>): _24.RoyaltyStakeholderInput;
                fromAmino(object: _24.RoyaltyStakeholderInputAmino): _24.RoyaltyStakeholderInput;
                toAmino(message: _24.RoyaltyStakeholderInput): _24.RoyaltyStakeholderInputAmino;
                fromAminoMsg(object: _24.RoyaltyStakeholderInputAminoMsg): _24.RoyaltyStakeholderInput;
                fromProtoMsg(message: _24.RoyaltyStakeholderInputProtoMsg): _24.RoyaltyStakeholderInput;
                toProto(message: _24.RoyaltyStakeholderInput): Uint8Array;
                toProtoMsg(message: _24.RoyaltyStakeholderInput): _24.RoyaltyStakeholderInputProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _23.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryParamsRequest;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
                fromAmino(_: _23.QueryParamsRequestAmino): _23.QueryParamsRequest;
                toAmino(_: _23.QueryParamsRequest): _23.QueryParamsRequestAmino;
                fromAminoMsg(object: _23.QueryParamsRequestAminoMsg): _23.QueryParamsRequest;
                fromProtoMsg(message: _23.QueryParamsRequestProtoMsg): _23.QueryParamsRequest;
                toProto(message: _23.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _23.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryParamsResponse;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
                fromAmino(object: _23.QueryParamsResponseAmino): _23.QueryParamsResponse;
                toAmino(message: _23.QueryParamsResponse): _23.QueryParamsResponseAmino;
                fromAminoMsg(object: _23.QueryParamsResponseAminoMsg): _23.QueryParamsResponse;
                fromProtoMsg(message: _23.QueryParamsResponseProtoMsg): _23.QueryParamsResponse;
                toProto(message: _23.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseProtoMsg;
            };
            QueryClassesByISCNRequest: {
                typeUrl: string;
                encode(message: _23.QueryClassesByISCNRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesByISCNRequest;
                fromPartial(object: Partial<_23.QueryClassesByISCNRequest>): _23.QueryClassesByISCNRequest;
                fromAmino(object: _23.QueryClassesByISCNRequestAmino): _23.QueryClassesByISCNRequest;
                toAmino(message: _23.QueryClassesByISCNRequest): _23.QueryClassesByISCNRequestAmino;
                fromAminoMsg(object: _23.QueryClassesByISCNRequestAminoMsg): _23.QueryClassesByISCNRequest;
                fromProtoMsg(message: _23.QueryClassesByISCNRequestProtoMsg): _23.QueryClassesByISCNRequest;
                toProto(message: _23.QueryClassesByISCNRequest): Uint8Array;
                toProtoMsg(message: _23.QueryClassesByISCNRequest): _23.QueryClassesByISCNRequestProtoMsg;
            };
            QueryClassesByISCNResponse: {
                typeUrl: string;
                encode(message: _23.QueryClassesByISCNResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesByISCNResponse;
                fromPartial(object: Partial<_23.QueryClassesByISCNResponse>): _23.QueryClassesByISCNResponse;
                fromAmino(object: _23.QueryClassesByISCNResponseAmino): _23.QueryClassesByISCNResponse;
                toAmino(message: _23.QueryClassesByISCNResponse): _23.QueryClassesByISCNResponseAmino;
                fromAminoMsg(object: _23.QueryClassesByISCNResponseAminoMsg): _23.QueryClassesByISCNResponse;
                fromProtoMsg(message: _23.QueryClassesByISCNResponseProtoMsg): _23.QueryClassesByISCNResponse;
                toProto(message: _23.QueryClassesByISCNResponse): Uint8Array;
                toProtoMsg(message: _23.QueryClassesByISCNResponse): _23.QueryClassesByISCNResponseProtoMsg;
            };
            QueryClassesByISCNIndexRequest: {
                typeUrl: string;
                encode(message: _23.QueryClassesByISCNIndexRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesByISCNIndexRequest;
                fromPartial(object: Partial<_23.QueryClassesByISCNIndexRequest>): _23.QueryClassesByISCNIndexRequest;
                fromAmino(object: _23.QueryClassesByISCNIndexRequestAmino): _23.QueryClassesByISCNIndexRequest;
                toAmino(message: _23.QueryClassesByISCNIndexRequest): _23.QueryClassesByISCNIndexRequestAmino;
                fromAminoMsg(object: _23.QueryClassesByISCNIndexRequestAminoMsg): _23.QueryClassesByISCNIndexRequest;
                fromProtoMsg(message: _23.QueryClassesByISCNIndexRequestProtoMsg): _23.QueryClassesByISCNIndexRequest;
                toProto(message: _23.QueryClassesByISCNIndexRequest): Uint8Array;
                toProtoMsg(message: _23.QueryClassesByISCNIndexRequest): _23.QueryClassesByISCNIndexRequestProtoMsg;
            };
            QueryClassesByISCNIndexResponse: {
                typeUrl: string;
                encode(message: _23.QueryClassesByISCNIndexResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesByISCNIndexResponse;
                fromPartial(object: Partial<_23.QueryClassesByISCNIndexResponse>): _23.QueryClassesByISCNIndexResponse;
                fromAmino(object: _23.QueryClassesByISCNIndexResponseAmino): _23.QueryClassesByISCNIndexResponse;
                toAmino(message: _23.QueryClassesByISCNIndexResponse): _23.QueryClassesByISCNIndexResponseAmino;
                fromAminoMsg(object: _23.QueryClassesByISCNIndexResponseAminoMsg): _23.QueryClassesByISCNIndexResponse;
                fromProtoMsg(message: _23.QueryClassesByISCNIndexResponseProtoMsg): _23.QueryClassesByISCNIndexResponse;
                toProto(message: _23.QueryClassesByISCNIndexResponse): Uint8Array;
                toProtoMsg(message: _23.QueryClassesByISCNIndexResponse): _23.QueryClassesByISCNIndexResponseProtoMsg;
            };
            QueryISCNByClassRequest: {
                typeUrl: string;
                encode(message: _23.QueryISCNByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryISCNByClassRequest;
                fromPartial(object: Partial<_23.QueryISCNByClassRequest>): _23.QueryISCNByClassRequest;
                fromAmino(object: _23.QueryISCNByClassRequestAmino): _23.QueryISCNByClassRequest;
                toAmino(message: _23.QueryISCNByClassRequest): _23.QueryISCNByClassRequestAmino;
                fromAminoMsg(object: _23.QueryISCNByClassRequestAminoMsg): _23.QueryISCNByClassRequest;
                fromProtoMsg(message: _23.QueryISCNByClassRequestProtoMsg): _23.QueryISCNByClassRequest;
                toProto(message: _23.QueryISCNByClassRequest): Uint8Array;
                toProtoMsg(message: _23.QueryISCNByClassRequest): _23.QueryISCNByClassRequestProtoMsg;
            };
            QueryISCNByClassResponse: {
                typeUrl: string;
                encode(message: _23.QueryISCNByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryISCNByClassResponse;
                fromPartial(object: Partial<_23.QueryISCNByClassResponse>): _23.QueryISCNByClassResponse;
                fromAmino(object: _23.QueryISCNByClassResponseAmino): _23.QueryISCNByClassResponse;
                toAmino(message: _23.QueryISCNByClassResponse): _23.QueryISCNByClassResponseAmino;
                fromAminoMsg(object: _23.QueryISCNByClassResponseAminoMsg): _23.QueryISCNByClassResponse;
                fromProtoMsg(message: _23.QueryISCNByClassResponseProtoMsg): _23.QueryISCNByClassResponse;
                toProto(message: _23.QueryISCNByClassResponse): Uint8Array;
                toProtoMsg(message: _23.QueryISCNByClassResponse): _23.QueryISCNByClassResponseProtoMsg;
            };
            QueryClassesByAccountRequest: {
                typeUrl: string;
                encode(message: _23.QueryClassesByAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesByAccountRequest;
                fromPartial(object: Partial<_23.QueryClassesByAccountRequest>): _23.QueryClassesByAccountRequest;
                fromAmino(object: _23.QueryClassesByAccountRequestAmino): _23.QueryClassesByAccountRequest;
                toAmino(message: _23.QueryClassesByAccountRequest): _23.QueryClassesByAccountRequestAmino;
                fromAminoMsg(object: _23.QueryClassesByAccountRequestAminoMsg): _23.QueryClassesByAccountRequest;
                fromProtoMsg(message: _23.QueryClassesByAccountRequestProtoMsg): _23.QueryClassesByAccountRequest;
                toProto(message: _23.QueryClassesByAccountRequest): Uint8Array;
                toProtoMsg(message: _23.QueryClassesByAccountRequest): _23.QueryClassesByAccountRequestProtoMsg;
            };
            QueryClassesByAccountResponse: {
                typeUrl: string;
                encode(message: _23.QueryClassesByAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesByAccountResponse;
                fromPartial(object: Partial<_23.QueryClassesByAccountResponse>): _23.QueryClassesByAccountResponse;
                fromAmino(object: _23.QueryClassesByAccountResponseAmino): _23.QueryClassesByAccountResponse;
                toAmino(message: _23.QueryClassesByAccountResponse): _23.QueryClassesByAccountResponseAmino;
                fromAminoMsg(object: _23.QueryClassesByAccountResponseAminoMsg): _23.QueryClassesByAccountResponse;
                fromProtoMsg(message: _23.QueryClassesByAccountResponseProtoMsg): _23.QueryClassesByAccountResponse;
                toProto(message: _23.QueryClassesByAccountResponse): Uint8Array;
                toProtoMsg(message: _23.QueryClassesByAccountResponse): _23.QueryClassesByAccountResponseProtoMsg;
            };
            QueryClassesByAccountIndexRequest: {
                typeUrl: string;
                encode(message: _23.QueryClassesByAccountIndexRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesByAccountIndexRequest;
                fromPartial(object: Partial<_23.QueryClassesByAccountIndexRequest>): _23.QueryClassesByAccountIndexRequest;
                fromAmino(object: _23.QueryClassesByAccountIndexRequestAmino): _23.QueryClassesByAccountIndexRequest;
                toAmino(message: _23.QueryClassesByAccountIndexRequest): _23.QueryClassesByAccountIndexRequestAmino;
                fromAminoMsg(object: _23.QueryClassesByAccountIndexRequestAminoMsg): _23.QueryClassesByAccountIndexRequest;
                fromProtoMsg(message: _23.QueryClassesByAccountIndexRequestProtoMsg): _23.QueryClassesByAccountIndexRequest;
                toProto(message: _23.QueryClassesByAccountIndexRequest): Uint8Array;
                toProtoMsg(message: _23.QueryClassesByAccountIndexRequest): _23.QueryClassesByAccountIndexRequestProtoMsg;
            };
            QueryClassesByAccountIndexResponse: {
                typeUrl: string;
                encode(message: _23.QueryClassesByAccountIndexResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesByAccountIndexResponse;
                fromPartial(object: Partial<_23.QueryClassesByAccountIndexResponse>): _23.QueryClassesByAccountIndexResponse;
                fromAmino(object: _23.QueryClassesByAccountIndexResponseAmino): _23.QueryClassesByAccountIndexResponse;
                toAmino(message: _23.QueryClassesByAccountIndexResponse): _23.QueryClassesByAccountIndexResponseAmino;
                fromAminoMsg(object: _23.QueryClassesByAccountIndexResponseAminoMsg): _23.QueryClassesByAccountIndexResponse;
                fromProtoMsg(message: _23.QueryClassesByAccountIndexResponseProtoMsg): _23.QueryClassesByAccountIndexResponse;
                toProto(message: _23.QueryClassesByAccountIndexResponse): Uint8Array;
                toProtoMsg(message: _23.QueryClassesByAccountIndexResponse): _23.QueryClassesByAccountIndexResponseProtoMsg;
            };
            QueryAccountByClassRequest: {
                typeUrl: string;
                encode(message: _23.QueryAccountByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountByClassRequest;
                fromPartial(object: Partial<_23.QueryAccountByClassRequest>): _23.QueryAccountByClassRequest;
                fromAmino(object: _23.QueryAccountByClassRequestAmino): _23.QueryAccountByClassRequest;
                toAmino(message: _23.QueryAccountByClassRequest): _23.QueryAccountByClassRequestAmino;
                fromAminoMsg(object: _23.QueryAccountByClassRequestAminoMsg): _23.QueryAccountByClassRequest;
                fromProtoMsg(message: _23.QueryAccountByClassRequestProtoMsg): _23.QueryAccountByClassRequest;
                toProto(message: _23.QueryAccountByClassRequest): Uint8Array;
                toProtoMsg(message: _23.QueryAccountByClassRequest): _23.QueryAccountByClassRequestProtoMsg;
            };
            QueryAccountByClassResponse: {
                typeUrl: string;
                encode(message: _23.QueryAccountByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryAccountByClassResponse;
                fromPartial(object: Partial<_23.QueryAccountByClassResponse>): _23.QueryAccountByClassResponse;
                fromAmino(object: _23.QueryAccountByClassResponseAmino): _23.QueryAccountByClassResponse;
                toAmino(message: _23.QueryAccountByClassResponse): _23.QueryAccountByClassResponseAmino;
                fromAminoMsg(object: _23.QueryAccountByClassResponseAminoMsg): _23.QueryAccountByClassResponse;
                fromProtoMsg(message: _23.QueryAccountByClassResponseProtoMsg): _23.QueryAccountByClassResponse;
                toProto(message: _23.QueryAccountByClassResponse): Uint8Array;
                toProtoMsg(message: _23.QueryAccountByClassResponse): _23.QueryAccountByClassResponseProtoMsg;
            };
            QueryBlindBoxContentRequest: {
                typeUrl: string;
                encode(message: _23.QueryBlindBoxContentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBlindBoxContentRequest;
                fromPartial(object: Partial<_23.QueryBlindBoxContentRequest>): _23.QueryBlindBoxContentRequest;
                fromAmino(object: _23.QueryBlindBoxContentRequestAmino): _23.QueryBlindBoxContentRequest;
                toAmino(message: _23.QueryBlindBoxContentRequest): _23.QueryBlindBoxContentRequestAmino;
                fromAminoMsg(object: _23.QueryBlindBoxContentRequestAminoMsg): _23.QueryBlindBoxContentRequest;
                fromProtoMsg(message: _23.QueryBlindBoxContentRequestProtoMsg): _23.QueryBlindBoxContentRequest;
                toProto(message: _23.QueryBlindBoxContentRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBlindBoxContentRequest): _23.QueryBlindBoxContentRequestProtoMsg;
            };
            QueryBlindBoxContentResponse: {
                typeUrl: string;
                encode(message: _23.QueryBlindBoxContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBlindBoxContentResponse;
                fromPartial(object: Partial<_23.QueryBlindBoxContentResponse>): _23.QueryBlindBoxContentResponse;
                fromAmino(object: _23.QueryBlindBoxContentResponseAmino): _23.QueryBlindBoxContentResponse;
                toAmino(message: _23.QueryBlindBoxContentResponse): _23.QueryBlindBoxContentResponseAmino;
                fromAminoMsg(object: _23.QueryBlindBoxContentResponseAminoMsg): _23.QueryBlindBoxContentResponse;
                fromProtoMsg(message: _23.QueryBlindBoxContentResponseProtoMsg): _23.QueryBlindBoxContentResponse;
                toProto(message: _23.QueryBlindBoxContentResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBlindBoxContentResponse): _23.QueryBlindBoxContentResponseProtoMsg;
            };
            QueryBlindBoxContentIndexRequest: {
                typeUrl: string;
                encode(message: _23.QueryBlindBoxContentIndexRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBlindBoxContentIndexRequest;
                fromPartial(object: Partial<_23.QueryBlindBoxContentIndexRequest>): _23.QueryBlindBoxContentIndexRequest;
                fromAmino(object: _23.QueryBlindBoxContentIndexRequestAmino): _23.QueryBlindBoxContentIndexRequest;
                toAmino(message: _23.QueryBlindBoxContentIndexRequest): _23.QueryBlindBoxContentIndexRequestAmino;
                fromAminoMsg(object: _23.QueryBlindBoxContentIndexRequestAminoMsg): _23.QueryBlindBoxContentIndexRequest;
                fromProtoMsg(message: _23.QueryBlindBoxContentIndexRequestProtoMsg): _23.QueryBlindBoxContentIndexRequest;
                toProto(message: _23.QueryBlindBoxContentIndexRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBlindBoxContentIndexRequest): _23.QueryBlindBoxContentIndexRequestProtoMsg;
            };
            QueryBlindBoxContentIndexResponse: {
                typeUrl: string;
                encode(message: _23.QueryBlindBoxContentIndexResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBlindBoxContentIndexResponse;
                fromPartial(object: Partial<_23.QueryBlindBoxContentIndexResponse>): _23.QueryBlindBoxContentIndexResponse;
                fromAmino(object: _23.QueryBlindBoxContentIndexResponseAmino): _23.QueryBlindBoxContentIndexResponse;
                toAmino(message: _23.QueryBlindBoxContentIndexResponse): _23.QueryBlindBoxContentIndexResponseAmino;
                fromAminoMsg(object: _23.QueryBlindBoxContentIndexResponseAminoMsg): _23.QueryBlindBoxContentIndexResponse;
                fromProtoMsg(message: _23.QueryBlindBoxContentIndexResponseProtoMsg): _23.QueryBlindBoxContentIndexResponse;
                toProto(message: _23.QueryBlindBoxContentIndexResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBlindBoxContentIndexResponse): _23.QueryBlindBoxContentIndexResponseProtoMsg;
            };
            QueryBlindBoxContentsRequest: {
                typeUrl: string;
                encode(message: _23.QueryBlindBoxContentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBlindBoxContentsRequest;
                fromPartial(object: Partial<_23.QueryBlindBoxContentsRequest>): _23.QueryBlindBoxContentsRequest;
                fromAmino(object: _23.QueryBlindBoxContentsRequestAmino): _23.QueryBlindBoxContentsRequest;
                toAmino(message: _23.QueryBlindBoxContentsRequest): _23.QueryBlindBoxContentsRequestAmino;
                fromAminoMsg(object: _23.QueryBlindBoxContentsRequestAminoMsg): _23.QueryBlindBoxContentsRequest;
                fromProtoMsg(message: _23.QueryBlindBoxContentsRequestProtoMsg): _23.QueryBlindBoxContentsRequest;
                toProto(message: _23.QueryBlindBoxContentsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBlindBoxContentsRequest): _23.QueryBlindBoxContentsRequestProtoMsg;
            };
            QueryBlindBoxContentsResponse: {
                typeUrl: string;
                encode(message: _23.QueryBlindBoxContentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBlindBoxContentsResponse;
                fromPartial(object: Partial<_23.QueryBlindBoxContentsResponse>): _23.QueryBlindBoxContentsResponse;
                fromAmino(object: _23.QueryBlindBoxContentsResponseAmino): _23.QueryBlindBoxContentsResponse;
                toAmino(message: _23.QueryBlindBoxContentsResponse): _23.QueryBlindBoxContentsResponseAmino;
                fromAminoMsg(object: _23.QueryBlindBoxContentsResponseAminoMsg): _23.QueryBlindBoxContentsResponse;
                fromProtoMsg(message: _23.QueryBlindBoxContentsResponseProtoMsg): _23.QueryBlindBoxContentsResponse;
                toProto(message: _23.QueryBlindBoxContentsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBlindBoxContentsResponse): _23.QueryBlindBoxContentsResponseProtoMsg;
            };
            QueryOfferRequest: {
                typeUrl: string;
                encode(message: _23.QueryOfferRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOfferRequest;
                fromPartial(object: Partial<_23.QueryOfferRequest>): _23.QueryOfferRequest;
                fromAmino(object: _23.QueryOfferRequestAmino): _23.QueryOfferRequest;
                toAmino(message: _23.QueryOfferRequest): _23.QueryOfferRequestAmino;
                fromAminoMsg(object: _23.QueryOfferRequestAminoMsg): _23.QueryOfferRequest;
                fromProtoMsg(message: _23.QueryOfferRequestProtoMsg): _23.QueryOfferRequest;
                toProto(message: _23.QueryOfferRequest): Uint8Array;
                toProtoMsg(message: _23.QueryOfferRequest): _23.QueryOfferRequestProtoMsg;
            };
            QueryOfferResponse: {
                typeUrl: string;
                encode(message: _23.QueryOfferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOfferResponse;
                fromPartial(object: Partial<_23.QueryOfferResponse>): _23.QueryOfferResponse;
                fromAmino(object: _23.QueryOfferResponseAmino): _23.QueryOfferResponse;
                toAmino(message: _23.QueryOfferResponse): _23.QueryOfferResponseAmino;
                fromAminoMsg(object: _23.QueryOfferResponseAminoMsg): _23.QueryOfferResponse;
                fromProtoMsg(message: _23.QueryOfferResponseProtoMsg): _23.QueryOfferResponse;
                toProto(message: _23.QueryOfferResponse): Uint8Array;
                toProtoMsg(message: _23.QueryOfferResponse): _23.QueryOfferResponseProtoMsg;
            };
            QueryOfferIndexRequest: {
                typeUrl: string;
                encode(message: _23.QueryOfferIndexRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOfferIndexRequest;
                fromPartial(object: Partial<_23.QueryOfferIndexRequest>): _23.QueryOfferIndexRequest;
                fromAmino(object: _23.QueryOfferIndexRequestAmino): _23.QueryOfferIndexRequest;
                toAmino(message: _23.QueryOfferIndexRequest): _23.QueryOfferIndexRequestAmino;
                fromAminoMsg(object: _23.QueryOfferIndexRequestAminoMsg): _23.QueryOfferIndexRequest;
                fromProtoMsg(message: _23.QueryOfferIndexRequestProtoMsg): _23.QueryOfferIndexRequest;
                toProto(message: _23.QueryOfferIndexRequest): Uint8Array;
                toProtoMsg(message: _23.QueryOfferIndexRequest): _23.QueryOfferIndexRequestProtoMsg;
            };
            QueryOfferIndexResponse: {
                typeUrl: string;
                encode(message: _23.QueryOfferIndexResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOfferIndexResponse;
                fromPartial(object: Partial<_23.QueryOfferIndexResponse>): _23.QueryOfferIndexResponse;
                fromAmino(object: _23.QueryOfferIndexResponseAmino): _23.QueryOfferIndexResponse;
                toAmino(message: _23.QueryOfferIndexResponse): _23.QueryOfferIndexResponseAmino;
                fromAminoMsg(object: _23.QueryOfferIndexResponseAminoMsg): _23.QueryOfferIndexResponse;
                fromProtoMsg(message: _23.QueryOfferIndexResponseProtoMsg): _23.QueryOfferIndexResponse;
                toProto(message: _23.QueryOfferIndexResponse): Uint8Array;
                toProtoMsg(message: _23.QueryOfferIndexResponse): _23.QueryOfferIndexResponseProtoMsg;
            };
            QueryOffersByClassRequest: {
                typeUrl: string;
                encode(message: _23.QueryOffersByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOffersByClassRequest;
                fromPartial(object: Partial<_23.QueryOffersByClassRequest>): _23.QueryOffersByClassRequest;
                fromAmino(object: _23.QueryOffersByClassRequestAmino): _23.QueryOffersByClassRequest;
                toAmino(message: _23.QueryOffersByClassRequest): _23.QueryOffersByClassRequestAmino;
                fromAminoMsg(object: _23.QueryOffersByClassRequestAminoMsg): _23.QueryOffersByClassRequest;
                fromProtoMsg(message: _23.QueryOffersByClassRequestProtoMsg): _23.QueryOffersByClassRequest;
                toProto(message: _23.QueryOffersByClassRequest): Uint8Array;
                toProtoMsg(message: _23.QueryOffersByClassRequest): _23.QueryOffersByClassRequestProtoMsg;
            };
            QueryOffersByClassResponse: {
                typeUrl: string;
                encode(message: _23.QueryOffersByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOffersByClassResponse;
                fromPartial(object: Partial<_23.QueryOffersByClassResponse>): _23.QueryOffersByClassResponse;
                fromAmino(object: _23.QueryOffersByClassResponseAmino): _23.QueryOffersByClassResponse;
                toAmino(message: _23.QueryOffersByClassResponse): _23.QueryOffersByClassResponseAmino;
                fromAminoMsg(object: _23.QueryOffersByClassResponseAminoMsg): _23.QueryOffersByClassResponse;
                fromProtoMsg(message: _23.QueryOffersByClassResponseProtoMsg): _23.QueryOffersByClassResponse;
                toProto(message: _23.QueryOffersByClassResponse): Uint8Array;
                toProtoMsg(message: _23.QueryOffersByClassResponse): _23.QueryOffersByClassResponseProtoMsg;
            };
            QueryOffersByNFTRequest: {
                typeUrl: string;
                encode(message: _23.QueryOffersByNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOffersByNFTRequest;
                fromPartial(object: Partial<_23.QueryOffersByNFTRequest>): _23.QueryOffersByNFTRequest;
                fromAmino(object: _23.QueryOffersByNFTRequestAmino): _23.QueryOffersByNFTRequest;
                toAmino(message: _23.QueryOffersByNFTRequest): _23.QueryOffersByNFTRequestAmino;
                fromAminoMsg(object: _23.QueryOffersByNFTRequestAminoMsg): _23.QueryOffersByNFTRequest;
                fromProtoMsg(message: _23.QueryOffersByNFTRequestProtoMsg): _23.QueryOffersByNFTRequest;
                toProto(message: _23.QueryOffersByNFTRequest): Uint8Array;
                toProtoMsg(message: _23.QueryOffersByNFTRequest): _23.QueryOffersByNFTRequestProtoMsg;
            };
            QueryOffersByNFTResponse: {
                typeUrl: string;
                encode(message: _23.QueryOffersByNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOffersByNFTResponse;
                fromPartial(object: Partial<_23.QueryOffersByNFTResponse>): _23.QueryOffersByNFTResponse;
                fromAmino(object: _23.QueryOffersByNFTResponseAmino): _23.QueryOffersByNFTResponse;
                toAmino(message: _23.QueryOffersByNFTResponse): _23.QueryOffersByNFTResponseAmino;
                fromAminoMsg(object: _23.QueryOffersByNFTResponseAminoMsg): _23.QueryOffersByNFTResponse;
                fromProtoMsg(message: _23.QueryOffersByNFTResponseProtoMsg): _23.QueryOffersByNFTResponse;
                toProto(message: _23.QueryOffersByNFTResponse): Uint8Array;
                toProtoMsg(message: _23.QueryOffersByNFTResponse): _23.QueryOffersByNFTResponseProtoMsg;
            };
            QueryListingRequest: {
                typeUrl: string;
                encode(message: _23.QueryListingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryListingRequest;
                fromPartial(object: Partial<_23.QueryListingRequest>): _23.QueryListingRequest;
                fromAmino(object: _23.QueryListingRequestAmino): _23.QueryListingRequest;
                toAmino(message: _23.QueryListingRequest): _23.QueryListingRequestAmino;
                fromAminoMsg(object: _23.QueryListingRequestAminoMsg): _23.QueryListingRequest;
                fromProtoMsg(message: _23.QueryListingRequestProtoMsg): _23.QueryListingRequest;
                toProto(message: _23.QueryListingRequest): Uint8Array;
                toProtoMsg(message: _23.QueryListingRequest): _23.QueryListingRequestProtoMsg;
            };
            QueryListingResponse: {
                typeUrl: string;
                encode(message: _23.QueryListingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryListingResponse;
                fromPartial(object: Partial<_23.QueryListingResponse>): _23.QueryListingResponse;
                fromAmino(object: _23.QueryListingResponseAmino): _23.QueryListingResponse;
                toAmino(message: _23.QueryListingResponse): _23.QueryListingResponseAmino;
                fromAminoMsg(object: _23.QueryListingResponseAminoMsg): _23.QueryListingResponse;
                fromProtoMsg(message: _23.QueryListingResponseProtoMsg): _23.QueryListingResponse;
                toProto(message: _23.QueryListingResponse): Uint8Array;
                toProtoMsg(message: _23.QueryListingResponse): _23.QueryListingResponseProtoMsg;
            };
            QueryListingIndexRequest: {
                typeUrl: string;
                encode(message: _23.QueryListingIndexRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryListingIndexRequest;
                fromPartial(object: Partial<_23.QueryListingIndexRequest>): _23.QueryListingIndexRequest;
                fromAmino(object: _23.QueryListingIndexRequestAmino): _23.QueryListingIndexRequest;
                toAmino(message: _23.QueryListingIndexRequest): _23.QueryListingIndexRequestAmino;
                fromAminoMsg(object: _23.QueryListingIndexRequestAminoMsg): _23.QueryListingIndexRequest;
                fromProtoMsg(message: _23.QueryListingIndexRequestProtoMsg): _23.QueryListingIndexRequest;
                toProto(message: _23.QueryListingIndexRequest): Uint8Array;
                toProtoMsg(message: _23.QueryListingIndexRequest): _23.QueryListingIndexRequestProtoMsg;
            };
            QueryListingIndexResponse: {
                typeUrl: string;
                encode(message: _23.QueryListingIndexResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryListingIndexResponse;
                fromPartial(object: Partial<_23.QueryListingIndexResponse>): _23.QueryListingIndexResponse;
                fromAmino(object: _23.QueryListingIndexResponseAmino): _23.QueryListingIndexResponse;
                toAmino(message: _23.QueryListingIndexResponse): _23.QueryListingIndexResponseAmino;
                fromAminoMsg(object: _23.QueryListingIndexResponseAminoMsg): _23.QueryListingIndexResponse;
                fromProtoMsg(message: _23.QueryListingIndexResponseProtoMsg): _23.QueryListingIndexResponse;
                toProto(message: _23.QueryListingIndexResponse): Uint8Array;
                toProtoMsg(message: _23.QueryListingIndexResponse): _23.QueryListingIndexResponseProtoMsg;
            };
            QueryListingsByClassRequest: {
                typeUrl: string;
                encode(message: _23.QueryListingsByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryListingsByClassRequest;
                fromPartial(object: Partial<_23.QueryListingsByClassRequest>): _23.QueryListingsByClassRequest;
                fromAmino(object: _23.QueryListingsByClassRequestAmino): _23.QueryListingsByClassRequest;
                toAmino(message: _23.QueryListingsByClassRequest): _23.QueryListingsByClassRequestAmino;
                fromAminoMsg(object: _23.QueryListingsByClassRequestAminoMsg): _23.QueryListingsByClassRequest;
                fromProtoMsg(message: _23.QueryListingsByClassRequestProtoMsg): _23.QueryListingsByClassRequest;
                toProto(message: _23.QueryListingsByClassRequest): Uint8Array;
                toProtoMsg(message: _23.QueryListingsByClassRequest): _23.QueryListingsByClassRequestProtoMsg;
            };
            QueryListingsByClassResponse: {
                typeUrl: string;
                encode(message: _23.QueryListingsByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryListingsByClassResponse;
                fromPartial(object: Partial<_23.QueryListingsByClassResponse>): _23.QueryListingsByClassResponse;
                fromAmino(object: _23.QueryListingsByClassResponseAmino): _23.QueryListingsByClassResponse;
                toAmino(message: _23.QueryListingsByClassResponse): _23.QueryListingsByClassResponseAmino;
                fromAminoMsg(object: _23.QueryListingsByClassResponseAminoMsg): _23.QueryListingsByClassResponse;
                fromProtoMsg(message: _23.QueryListingsByClassResponseProtoMsg): _23.QueryListingsByClassResponse;
                toProto(message: _23.QueryListingsByClassResponse): Uint8Array;
                toProtoMsg(message: _23.QueryListingsByClassResponse): _23.QueryListingsByClassResponseProtoMsg;
            };
            QueryListingsByNFTRequest: {
                typeUrl: string;
                encode(message: _23.QueryListingsByNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryListingsByNFTRequest;
                fromPartial(object: Partial<_23.QueryListingsByNFTRequest>): _23.QueryListingsByNFTRequest;
                fromAmino(object: _23.QueryListingsByNFTRequestAmino): _23.QueryListingsByNFTRequest;
                toAmino(message: _23.QueryListingsByNFTRequest): _23.QueryListingsByNFTRequestAmino;
                fromAminoMsg(object: _23.QueryListingsByNFTRequestAminoMsg): _23.QueryListingsByNFTRequest;
                fromProtoMsg(message: _23.QueryListingsByNFTRequestProtoMsg): _23.QueryListingsByNFTRequest;
                toProto(message: _23.QueryListingsByNFTRequest): Uint8Array;
                toProtoMsg(message: _23.QueryListingsByNFTRequest): _23.QueryListingsByNFTRequestProtoMsg;
            };
            QueryListingsByNFTResponse: {
                typeUrl: string;
                encode(message: _23.QueryListingsByNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryListingsByNFTResponse;
                fromPartial(object: Partial<_23.QueryListingsByNFTResponse>): _23.QueryListingsByNFTResponse;
                fromAmino(object: _23.QueryListingsByNFTResponseAmino): _23.QueryListingsByNFTResponse;
                toAmino(message: _23.QueryListingsByNFTResponse): _23.QueryListingsByNFTResponseAmino;
                fromAminoMsg(object: _23.QueryListingsByNFTResponseAminoMsg): _23.QueryListingsByNFTResponse;
                fromProtoMsg(message: _23.QueryListingsByNFTResponseProtoMsg): _23.QueryListingsByNFTResponse;
                toProto(message: _23.QueryListingsByNFTResponse): Uint8Array;
                toProtoMsg(message: _23.QueryListingsByNFTResponse): _23.QueryListingsByNFTResponseProtoMsg;
            };
            QueryRoyaltyConfigRequest: {
                typeUrl: string;
                encode(message: _23.QueryRoyaltyConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryRoyaltyConfigRequest;
                fromPartial(object: Partial<_23.QueryRoyaltyConfigRequest>): _23.QueryRoyaltyConfigRequest;
                fromAmino(object: _23.QueryRoyaltyConfigRequestAmino): _23.QueryRoyaltyConfigRequest;
                toAmino(message: _23.QueryRoyaltyConfigRequest): _23.QueryRoyaltyConfigRequestAmino;
                fromAminoMsg(object: _23.QueryRoyaltyConfigRequestAminoMsg): _23.QueryRoyaltyConfigRequest;
                fromProtoMsg(message: _23.QueryRoyaltyConfigRequestProtoMsg): _23.QueryRoyaltyConfigRequest;
                toProto(message: _23.QueryRoyaltyConfigRequest): Uint8Array;
                toProtoMsg(message: _23.QueryRoyaltyConfigRequest): _23.QueryRoyaltyConfigRequestProtoMsg;
            };
            QueryRoyaltyConfigResponse: {
                typeUrl: string;
                encode(message: _23.QueryRoyaltyConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryRoyaltyConfigResponse;
                fromPartial(object: Partial<_23.QueryRoyaltyConfigResponse>): _23.QueryRoyaltyConfigResponse;
                fromAmino(object: _23.QueryRoyaltyConfigResponseAmino): _23.QueryRoyaltyConfigResponse;
                toAmino(message: _23.QueryRoyaltyConfigResponse): _23.QueryRoyaltyConfigResponseAmino;
                fromAminoMsg(object: _23.QueryRoyaltyConfigResponseAminoMsg): _23.QueryRoyaltyConfigResponse;
                fromProtoMsg(message: _23.QueryRoyaltyConfigResponseProtoMsg): _23.QueryRoyaltyConfigResponse;
                toProto(message: _23.QueryRoyaltyConfigResponse): Uint8Array;
                toProtoMsg(message: _23.QueryRoyaltyConfigResponse): _23.QueryRoyaltyConfigResponseProtoMsg;
            };
            QueryRoyaltyConfigIndexRequest: {
                typeUrl: string;
                encode(message: _23.QueryRoyaltyConfigIndexRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryRoyaltyConfigIndexRequest;
                fromPartial(object: Partial<_23.QueryRoyaltyConfigIndexRequest>): _23.QueryRoyaltyConfigIndexRequest;
                fromAmino(object: _23.QueryRoyaltyConfigIndexRequestAmino): _23.QueryRoyaltyConfigIndexRequest;
                toAmino(message: _23.QueryRoyaltyConfigIndexRequest): _23.QueryRoyaltyConfigIndexRequestAmino;
                fromAminoMsg(object: _23.QueryRoyaltyConfigIndexRequestAminoMsg): _23.QueryRoyaltyConfigIndexRequest;
                fromProtoMsg(message: _23.QueryRoyaltyConfigIndexRequestProtoMsg): _23.QueryRoyaltyConfigIndexRequest;
                toProto(message: _23.QueryRoyaltyConfigIndexRequest): Uint8Array;
                toProtoMsg(message: _23.QueryRoyaltyConfigIndexRequest): _23.QueryRoyaltyConfigIndexRequestProtoMsg;
            };
            QueryRoyaltyConfigIndexResponse: {
                typeUrl: string;
                encode(message: _23.QueryRoyaltyConfigIndexResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryRoyaltyConfigIndexResponse;
                fromPartial(object: Partial<_23.QueryRoyaltyConfigIndexResponse>): _23.QueryRoyaltyConfigIndexResponse;
                fromAmino(object: _23.QueryRoyaltyConfigIndexResponseAmino): _23.QueryRoyaltyConfigIndexResponse;
                toAmino(message: _23.QueryRoyaltyConfigIndexResponse): _23.QueryRoyaltyConfigIndexResponseAmino;
                fromAminoMsg(object: _23.QueryRoyaltyConfigIndexResponseAminoMsg): _23.QueryRoyaltyConfigIndexResponse;
                fromProtoMsg(message: _23.QueryRoyaltyConfigIndexResponseProtoMsg): _23.QueryRoyaltyConfigIndexResponse;
                toProto(message: _23.QueryRoyaltyConfigIndexResponse): Uint8Array;
                toProtoMsg(message: _23.QueryRoyaltyConfigIndexResponse): _23.QueryRoyaltyConfigIndexResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _22.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Params;
                fromPartial(object: Partial<_22.Params>): _22.Params;
                fromAmino(object: _22.ParamsAmino): _22.Params;
                toAmino(message: _22.Params): _22.ParamsAmino;
                fromAminoMsg(object: _22.ParamsAminoMsg): _22.Params;
                fromProtoMsg(message: _22.ParamsProtoMsg): _22.Params;
                toProto(message: _22.Params): Uint8Array;
                toProtoMsg(message: _22.Params): _22.ParamsProtoMsg;
            };
            Offer: {
                typeUrl: string;
                encode(message: _21.Offer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Offer;
                fromPartial(object: Partial<_21.Offer>): _21.Offer;
                fromAmino(object: _21.OfferAmino): _21.Offer;
                toAmino(message: _21.Offer): _21.OfferAmino;
                fromAminoMsg(object: _21.OfferAminoMsg): _21.Offer;
                fromProtoMsg(message: _21.OfferProtoMsg): _21.Offer;
                toProto(message: _21.Offer): Uint8Array;
                toProtoMsg(message: _21.Offer): _21.OfferProtoMsg;
            };
            OfferStoreRecord: {
                typeUrl: string;
                encode(message: _21.OfferStoreRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.OfferStoreRecord;
                fromPartial(object: Partial<_21.OfferStoreRecord>): _21.OfferStoreRecord;
                fromAmino(object: _21.OfferStoreRecordAmino): _21.OfferStoreRecord;
                toAmino(message: _21.OfferStoreRecord): _21.OfferStoreRecordAmino;
                fromAminoMsg(object: _21.OfferStoreRecordAminoMsg): _21.OfferStoreRecord;
                fromProtoMsg(message: _21.OfferStoreRecordProtoMsg): _21.OfferStoreRecord;
                toProto(message: _21.OfferStoreRecord): Uint8Array;
                toProtoMsg(message: _21.OfferStoreRecord): _21.OfferStoreRecordProtoMsg;
            };
            OfferExpireQueueEntry: {
                typeUrl: string;
                encode(message: _20.OfferExpireQueueEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.OfferExpireQueueEntry;
                fromPartial(object: Partial<_20.OfferExpireQueueEntry>): _20.OfferExpireQueueEntry;
                fromAmino(object: _20.OfferExpireQueueEntryAmino): _20.OfferExpireQueueEntry;
                toAmino(message: _20.OfferExpireQueueEntry): _20.OfferExpireQueueEntryAmino;
                fromAminoMsg(object: _20.OfferExpireQueueEntryAminoMsg): _20.OfferExpireQueueEntry;
                fromProtoMsg(message: _20.OfferExpireQueueEntryProtoMsg): _20.OfferExpireQueueEntry;
                toProto(message: _20.OfferExpireQueueEntry): Uint8Array;
                toProtoMsg(message: _20.OfferExpireQueueEntry): _20.OfferExpireQueueEntryProtoMsg;
            };
            NFTInput: {
                typeUrl: string;
                encode(message: _19.NFTInput, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.NFTInput;
                fromPartial(object: Partial<_19.NFTInput>): _19.NFTInput;
                fromAmino(object: _19.NFTInputAmino): _19.NFTInput;
                toAmino(message: _19.NFTInput): _19.NFTInputAmino;
                fromAminoMsg(object: _19.NFTInputAminoMsg): _19.NFTInput;
                fromProtoMsg(message: _19.NFTInputProtoMsg): _19.NFTInput;
                toProto(message: _19.NFTInput): Uint8Array;
                toProtoMsg(message: _19.NFTInput): _19.NFTInputProtoMsg;
            };
            NFTData: {
                typeUrl: string;
                encode(message: _18.NFTData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.NFTData;
                fromPartial(object: Partial<_18.NFTData>): _18.NFTData;
                fromAmino(object: _18.NFTDataAmino): _18.NFTData;
                toAmino(message: _18.NFTData): _18.NFTDataAmino;
                fromAminoMsg(object: _18.NFTDataAminoMsg): _18.NFTData;
                fromProtoMsg(message: _18.NFTDataProtoMsg): _18.NFTData;
                toProto(message: _18.NFTData): Uint8Array;
                toProtoMsg(message: _18.NFTData): _18.NFTDataProtoMsg;
            };
            Listing: {
                typeUrl: string;
                encode(message: _17.Listing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Listing;
                fromPartial(object: Partial<_17.Listing>): _17.Listing;
                fromAmino(object: _17.ListingAmino): _17.Listing;
                toAmino(message: _17.Listing): _17.ListingAmino;
                fromAminoMsg(object: _17.ListingAminoMsg): _17.Listing;
                fromProtoMsg(message: _17.ListingProtoMsg): _17.Listing;
                toProto(message: _17.Listing): Uint8Array;
                toProtoMsg(message: _17.Listing): _17.ListingProtoMsg;
            };
            ListingStoreRecord: {
                typeUrl: string;
                encode(message: _17.ListingStoreRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.ListingStoreRecord;
                fromPartial(object: Partial<_17.ListingStoreRecord>): _17.ListingStoreRecord;
                fromAmino(object: _17.ListingStoreRecordAmino): _17.ListingStoreRecord;
                toAmino(message: _17.ListingStoreRecord): _17.ListingStoreRecordAmino;
                fromAminoMsg(object: _17.ListingStoreRecordAminoMsg): _17.ListingStoreRecord;
                fromProtoMsg(message: _17.ListingStoreRecordProtoMsg): _17.ListingStoreRecord;
                toProto(message: _17.ListingStoreRecord): Uint8Array;
                toProtoMsg(message: _17.ListingStoreRecord): _17.ListingStoreRecordProtoMsg;
            };
            ListingExpireQueueEntry: {
                typeUrl: string;
                encode(message: _16.ListingExpireQueueEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ListingExpireQueueEntry;
                fromPartial(object: Partial<_16.ListingExpireQueueEntry>): _16.ListingExpireQueueEntry;
                fromAmino(object: _16.ListingExpireQueueEntryAmino): _16.ListingExpireQueueEntry;
                toAmino(message: _16.ListingExpireQueueEntry): _16.ListingExpireQueueEntryAmino;
                fromAminoMsg(object: _16.ListingExpireQueueEntryAminoMsg): _16.ListingExpireQueueEntry;
                fromProtoMsg(message: _16.ListingExpireQueueEntryProtoMsg): _16.ListingExpireQueueEntry;
                toProto(message: _16.ListingExpireQueueEntry): Uint8Array;
                toProtoMsg(message: _16.ListingExpireQueueEntry): _16.ListingExpireQueueEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
                fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
                toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
                fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
                fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
                toProto(message: _15.GenesisState): Uint8Array;
                toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
            };
            EventNewClass: {
                typeUrl: string;
                encode(message: _14.EventNewClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventNewClass;
                fromPartial(object: Partial<_14.EventNewClass>): _14.EventNewClass;
                fromAmino(object: _14.EventNewClassAmino): _14.EventNewClass;
                toAmino(message: _14.EventNewClass): _14.EventNewClassAmino;
                fromAminoMsg(object: _14.EventNewClassAminoMsg): _14.EventNewClass;
                fromProtoMsg(message: _14.EventNewClassProtoMsg): _14.EventNewClass;
                toProto(message: _14.EventNewClass): Uint8Array;
                toProtoMsg(message: _14.EventNewClass): _14.EventNewClassProtoMsg;
            };
            EventUpdateClass: {
                typeUrl: string;
                encode(message: _14.EventUpdateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventUpdateClass;
                fromPartial(object: Partial<_14.EventUpdateClass>): _14.EventUpdateClass;
                fromAmino(object: _14.EventUpdateClassAmino): _14.EventUpdateClass;
                toAmino(message: _14.EventUpdateClass): _14.EventUpdateClassAmino;
                fromAminoMsg(object: _14.EventUpdateClassAminoMsg): _14.EventUpdateClass;
                fromProtoMsg(message: _14.EventUpdateClassProtoMsg): _14.EventUpdateClass;
                toProto(message: _14.EventUpdateClass): Uint8Array;
                toProtoMsg(message: _14.EventUpdateClass): _14.EventUpdateClassProtoMsg;
            };
            EventRevealClass: {
                typeUrl: string;
                encode(message: _14.EventRevealClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventRevealClass;
                fromPartial(object: Partial<_14.EventRevealClass>): _14.EventRevealClass;
                fromAmino(object: _14.EventRevealClassAmino): _14.EventRevealClass;
                toAmino(message: _14.EventRevealClass): _14.EventRevealClassAmino;
                fromAminoMsg(object: _14.EventRevealClassAminoMsg): _14.EventRevealClass;
                fromProtoMsg(message: _14.EventRevealClassProtoMsg): _14.EventRevealClass;
                toProto(message: _14.EventRevealClass): Uint8Array;
                toProtoMsg(message: _14.EventRevealClass): _14.EventRevealClassProtoMsg;
            };
            EventMintNFT: {
                typeUrl: string;
                encode(message: _14.EventMintNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventMintNFT;
                fromPartial(object: Partial<_14.EventMintNFT>): _14.EventMintNFT;
                fromAmino(object: _14.EventMintNFTAmino): _14.EventMintNFT;
                toAmino(message: _14.EventMintNFT): _14.EventMintNFTAmino;
                fromAminoMsg(object: _14.EventMintNFTAminoMsg): _14.EventMintNFT;
                fromProtoMsg(message: _14.EventMintNFTProtoMsg): _14.EventMintNFT;
                toProto(message: _14.EventMintNFT): Uint8Array;
                toProtoMsg(message: _14.EventMintNFT): _14.EventMintNFTProtoMsg;
            };
            EventBurnNFT: {
                typeUrl: string;
                encode(message: _14.EventBurnNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventBurnNFT;
                fromPartial(object: Partial<_14.EventBurnNFT>): _14.EventBurnNFT;
                fromAmino(object: _14.EventBurnNFTAmino): _14.EventBurnNFT;
                toAmino(message: _14.EventBurnNFT): _14.EventBurnNFTAmino;
                fromAminoMsg(object: _14.EventBurnNFTAminoMsg): _14.EventBurnNFT;
                fromProtoMsg(message: _14.EventBurnNFTProtoMsg): _14.EventBurnNFT;
                toProto(message: _14.EventBurnNFT): Uint8Array;
                toProtoMsg(message: _14.EventBurnNFT): _14.EventBurnNFTProtoMsg;
            };
            EventCreateBlindBoxContent: {
                typeUrl: string;
                encode(message: _14.EventCreateBlindBoxContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventCreateBlindBoxContent;
                fromPartial(object: Partial<_14.EventCreateBlindBoxContent>): _14.EventCreateBlindBoxContent;
                fromAmino(object: _14.EventCreateBlindBoxContentAmino): _14.EventCreateBlindBoxContent;
                toAmino(message: _14.EventCreateBlindBoxContent): _14.EventCreateBlindBoxContentAmino;
                fromAminoMsg(object: _14.EventCreateBlindBoxContentAminoMsg): _14.EventCreateBlindBoxContent;
                fromProtoMsg(message: _14.EventCreateBlindBoxContentProtoMsg): _14.EventCreateBlindBoxContent;
                toProto(message: _14.EventCreateBlindBoxContent): Uint8Array;
                toProtoMsg(message: _14.EventCreateBlindBoxContent): _14.EventCreateBlindBoxContentProtoMsg;
            };
            EventUpdateBlindBoxContent: {
                typeUrl: string;
                encode(message: _14.EventUpdateBlindBoxContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventUpdateBlindBoxContent;
                fromPartial(object: Partial<_14.EventUpdateBlindBoxContent>): _14.EventUpdateBlindBoxContent;
                fromAmino(object: _14.EventUpdateBlindBoxContentAmino): _14.EventUpdateBlindBoxContent;
                toAmino(message: _14.EventUpdateBlindBoxContent): _14.EventUpdateBlindBoxContentAmino;
                fromAminoMsg(object: _14.EventUpdateBlindBoxContentAminoMsg): _14.EventUpdateBlindBoxContent;
                fromProtoMsg(message: _14.EventUpdateBlindBoxContentProtoMsg): _14.EventUpdateBlindBoxContent;
                toProto(message: _14.EventUpdateBlindBoxContent): Uint8Array;
                toProtoMsg(message: _14.EventUpdateBlindBoxContent): _14.EventUpdateBlindBoxContentProtoMsg;
            };
            EventDeleteBlindBoxContent: {
                typeUrl: string;
                encode(message: _14.EventDeleteBlindBoxContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventDeleteBlindBoxContent;
                fromPartial(object: Partial<_14.EventDeleteBlindBoxContent>): _14.EventDeleteBlindBoxContent;
                fromAmino(object: _14.EventDeleteBlindBoxContentAmino): _14.EventDeleteBlindBoxContent;
                toAmino(message: _14.EventDeleteBlindBoxContent): _14.EventDeleteBlindBoxContentAmino;
                fromAminoMsg(object: _14.EventDeleteBlindBoxContentAminoMsg): _14.EventDeleteBlindBoxContent;
                fromProtoMsg(message: _14.EventDeleteBlindBoxContentProtoMsg): _14.EventDeleteBlindBoxContent;
                toProto(message: _14.EventDeleteBlindBoxContent): Uint8Array;
                toProtoMsg(message: _14.EventDeleteBlindBoxContent): _14.EventDeleteBlindBoxContentProtoMsg;
            };
            EventCreateOffer: {
                typeUrl: string;
                encode(message: _14.EventCreateOffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventCreateOffer;
                fromPartial(object: Partial<_14.EventCreateOffer>): _14.EventCreateOffer;
                fromAmino(object: _14.EventCreateOfferAmino): _14.EventCreateOffer;
                toAmino(message: _14.EventCreateOffer): _14.EventCreateOfferAmino;
                fromAminoMsg(object: _14.EventCreateOfferAminoMsg): _14.EventCreateOffer;
                fromProtoMsg(message: _14.EventCreateOfferProtoMsg): _14.EventCreateOffer;
                toProto(message: _14.EventCreateOffer): Uint8Array;
                toProtoMsg(message: _14.EventCreateOffer): _14.EventCreateOfferProtoMsg;
            };
            EventUpdateOffer: {
                typeUrl: string;
                encode(message: _14.EventUpdateOffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventUpdateOffer;
                fromPartial(object: Partial<_14.EventUpdateOffer>): _14.EventUpdateOffer;
                fromAmino(object: _14.EventUpdateOfferAmino): _14.EventUpdateOffer;
                toAmino(message: _14.EventUpdateOffer): _14.EventUpdateOfferAmino;
                fromAminoMsg(object: _14.EventUpdateOfferAminoMsg): _14.EventUpdateOffer;
                fromProtoMsg(message: _14.EventUpdateOfferProtoMsg): _14.EventUpdateOffer;
                toProto(message: _14.EventUpdateOffer): Uint8Array;
                toProtoMsg(message: _14.EventUpdateOffer): _14.EventUpdateOfferProtoMsg;
            };
            EventDeleteOffer: {
                typeUrl: string;
                encode(message: _14.EventDeleteOffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventDeleteOffer;
                fromPartial(object: Partial<_14.EventDeleteOffer>): _14.EventDeleteOffer;
                fromAmino(object: _14.EventDeleteOfferAmino): _14.EventDeleteOffer;
                toAmino(message: _14.EventDeleteOffer): _14.EventDeleteOfferAmino;
                fromAminoMsg(object: _14.EventDeleteOfferAminoMsg): _14.EventDeleteOffer;
                fromProtoMsg(message: _14.EventDeleteOfferProtoMsg): _14.EventDeleteOffer;
                toProto(message: _14.EventDeleteOffer): Uint8Array;
                toProtoMsg(message: _14.EventDeleteOffer): _14.EventDeleteOfferProtoMsg;
            };
            EventCreateListing: {
                typeUrl: string;
                encode(message: _14.EventCreateListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventCreateListing;
                fromPartial(object: Partial<_14.EventCreateListing>): _14.EventCreateListing;
                fromAmino(object: _14.EventCreateListingAmino): _14.EventCreateListing;
                toAmino(message: _14.EventCreateListing): _14.EventCreateListingAmino;
                fromAminoMsg(object: _14.EventCreateListingAminoMsg): _14.EventCreateListing;
                fromProtoMsg(message: _14.EventCreateListingProtoMsg): _14.EventCreateListing;
                toProto(message: _14.EventCreateListing): Uint8Array;
                toProtoMsg(message: _14.EventCreateListing): _14.EventCreateListingProtoMsg;
            };
            EventUpdateListing: {
                typeUrl: string;
                encode(message: _14.EventUpdateListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventUpdateListing;
                fromPartial(object: Partial<_14.EventUpdateListing>): _14.EventUpdateListing;
                fromAmino(object: _14.EventUpdateListingAmino): _14.EventUpdateListing;
                toAmino(message: _14.EventUpdateListing): _14.EventUpdateListingAmino;
                fromAminoMsg(object: _14.EventUpdateListingAminoMsg): _14.EventUpdateListing;
                fromProtoMsg(message: _14.EventUpdateListingProtoMsg): _14.EventUpdateListing;
                toProto(message: _14.EventUpdateListing): Uint8Array;
                toProtoMsg(message: _14.EventUpdateListing): _14.EventUpdateListingProtoMsg;
            };
            EventDeleteListing: {
                typeUrl: string;
                encode(message: _14.EventDeleteListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventDeleteListing;
                fromPartial(object: Partial<_14.EventDeleteListing>): _14.EventDeleteListing;
                fromAmino(object: _14.EventDeleteListingAmino): _14.EventDeleteListing;
                toAmino(message: _14.EventDeleteListing): _14.EventDeleteListingAmino;
                fromAminoMsg(object: _14.EventDeleteListingAminoMsg): _14.EventDeleteListing;
                fromProtoMsg(message: _14.EventDeleteListingProtoMsg): _14.EventDeleteListing;
                toProto(message: _14.EventDeleteListing): Uint8Array;
                toProtoMsg(message: _14.EventDeleteListing): _14.EventDeleteListingProtoMsg;
            };
            EventSellNFT: {
                typeUrl: string;
                encode(message: _14.EventSellNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventSellNFT;
                fromPartial(object: Partial<_14.EventSellNFT>): _14.EventSellNFT;
                fromAmino(object: _14.EventSellNFTAmino): _14.EventSellNFT;
                toAmino(message: _14.EventSellNFT): _14.EventSellNFTAmino;
                fromAminoMsg(object: _14.EventSellNFTAminoMsg): _14.EventSellNFT;
                fromProtoMsg(message: _14.EventSellNFTProtoMsg): _14.EventSellNFT;
                toProto(message: _14.EventSellNFT): Uint8Array;
                toProtoMsg(message: _14.EventSellNFT): _14.EventSellNFTProtoMsg;
            };
            EventBuyNFT: {
                typeUrl: string;
                encode(message: _14.EventBuyNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventBuyNFT;
                fromPartial(object: Partial<_14.EventBuyNFT>): _14.EventBuyNFT;
                fromAmino(object: _14.EventBuyNFTAmino): _14.EventBuyNFT;
                toAmino(message: _14.EventBuyNFT): _14.EventBuyNFTAmino;
                fromAminoMsg(object: _14.EventBuyNFTAminoMsg): _14.EventBuyNFT;
                fromProtoMsg(message: _14.EventBuyNFTProtoMsg): _14.EventBuyNFT;
                toProto(message: _14.EventBuyNFT): Uint8Array;
                toProtoMsg(message: _14.EventBuyNFT): _14.EventBuyNFTProtoMsg;
            };
            EventExpireOffer: {
                typeUrl: string;
                encode(message: _14.EventExpireOffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventExpireOffer;
                fromPartial(object: Partial<_14.EventExpireOffer>): _14.EventExpireOffer;
                fromAmino(object: _14.EventExpireOfferAmino): _14.EventExpireOffer;
                toAmino(message: _14.EventExpireOffer): _14.EventExpireOfferAmino;
                fromAminoMsg(object: _14.EventExpireOfferAminoMsg): _14.EventExpireOffer;
                fromProtoMsg(message: _14.EventExpireOfferProtoMsg): _14.EventExpireOffer;
                toProto(message: _14.EventExpireOffer): Uint8Array;
                toProtoMsg(message: _14.EventExpireOffer): _14.EventExpireOfferProtoMsg;
            };
            EventExpireListing: {
                typeUrl: string;
                encode(message: _14.EventExpireListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventExpireListing;
                fromPartial(object: Partial<_14.EventExpireListing>): _14.EventExpireListing;
                fromAmino(object: _14.EventExpireListingAmino): _14.EventExpireListing;
                toAmino(message: _14.EventExpireListing): _14.EventExpireListingAmino;
                fromAminoMsg(object: _14.EventExpireListingAminoMsg): _14.EventExpireListing;
                fromProtoMsg(message: _14.EventExpireListingProtoMsg): _14.EventExpireListing;
                toProto(message: _14.EventExpireListing): Uint8Array;
                toProtoMsg(message: _14.EventExpireListing): _14.EventExpireListingProtoMsg;
            };
            EventCreateRoyaltyConfig: {
                typeUrl: string;
                encode(message: _14.EventCreateRoyaltyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventCreateRoyaltyConfig;
                fromPartial(object: Partial<_14.EventCreateRoyaltyConfig>): _14.EventCreateRoyaltyConfig;
                fromAmino(object: _14.EventCreateRoyaltyConfigAmino): _14.EventCreateRoyaltyConfig;
                toAmino(message: _14.EventCreateRoyaltyConfig): _14.EventCreateRoyaltyConfigAmino;
                fromAminoMsg(object: _14.EventCreateRoyaltyConfigAminoMsg): _14.EventCreateRoyaltyConfig;
                fromProtoMsg(message: _14.EventCreateRoyaltyConfigProtoMsg): _14.EventCreateRoyaltyConfig;
                toProto(message: _14.EventCreateRoyaltyConfig): Uint8Array;
                toProtoMsg(message: _14.EventCreateRoyaltyConfig): _14.EventCreateRoyaltyConfigProtoMsg;
            };
            EventUpdateRoyaltyConfig: {
                typeUrl: string;
                encode(message: _14.EventUpdateRoyaltyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventUpdateRoyaltyConfig;
                fromPartial(object: Partial<_14.EventUpdateRoyaltyConfig>): _14.EventUpdateRoyaltyConfig;
                fromAmino(object: _14.EventUpdateRoyaltyConfigAmino): _14.EventUpdateRoyaltyConfig;
                toAmino(message: _14.EventUpdateRoyaltyConfig): _14.EventUpdateRoyaltyConfigAmino;
                fromAminoMsg(object: _14.EventUpdateRoyaltyConfigAminoMsg): _14.EventUpdateRoyaltyConfig;
                fromProtoMsg(message: _14.EventUpdateRoyaltyConfigProtoMsg): _14.EventUpdateRoyaltyConfig;
                toProto(message: _14.EventUpdateRoyaltyConfig): Uint8Array;
                toProtoMsg(message: _14.EventUpdateRoyaltyConfig): _14.EventUpdateRoyaltyConfigProtoMsg;
            };
            EventDeleteRoyaltyConfig: {
                typeUrl: string;
                encode(message: _14.EventDeleteRoyaltyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventDeleteRoyaltyConfig;
                fromPartial(object: Partial<_14.EventDeleteRoyaltyConfig>): _14.EventDeleteRoyaltyConfig;
                fromAmino(object: _14.EventDeleteRoyaltyConfigAmino): _14.EventDeleteRoyaltyConfig;
                toAmino(message: _14.EventDeleteRoyaltyConfig): _14.EventDeleteRoyaltyConfigAmino;
                fromAminoMsg(object: _14.EventDeleteRoyaltyConfigAminoMsg): _14.EventDeleteRoyaltyConfig;
                fromProtoMsg(message: _14.EventDeleteRoyaltyConfigProtoMsg): _14.EventDeleteRoyaltyConfig;
                toProto(message: _14.EventDeleteRoyaltyConfig): Uint8Array;
                toProtoMsg(message: _14.EventDeleteRoyaltyConfig): _14.EventDeleteRoyaltyConfigProtoMsg;
            };
            ClassesByISCN: {
                typeUrl: string;
                encode(message: _13.ClassesByISCN, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ClassesByISCN;
                fromPartial(object: Partial<_13.ClassesByISCN>): _13.ClassesByISCN;
                fromAmino(object: _13.ClassesByISCNAmino): _13.ClassesByISCN;
                toAmino(message: _13.ClassesByISCN): _13.ClassesByISCNAmino;
                fromAminoMsg(object: _13.ClassesByISCNAminoMsg): _13.ClassesByISCN;
                fromProtoMsg(message: _13.ClassesByISCNProtoMsg): _13.ClassesByISCN;
                toProto(message: _13.ClassesByISCN): Uint8Array;
                toProtoMsg(message: _13.ClassesByISCN): _13.ClassesByISCNProtoMsg;
            };
            ClassesByAccount: {
                typeUrl: string;
                encode(message: _12.ClassesByAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ClassesByAccount;
                fromPartial(object: Partial<_12.ClassesByAccount>): _12.ClassesByAccount;
                fromAmino(object: _12.ClassesByAccountAmino): _12.ClassesByAccount;
                toAmino(message: _12.ClassesByAccount): _12.ClassesByAccountAmino;
                fromAminoMsg(object: _12.ClassesByAccountAminoMsg): _12.ClassesByAccount;
                fromProtoMsg(message: _12.ClassesByAccountProtoMsg): _12.ClassesByAccount;
                toProto(message: _12.ClassesByAccount): Uint8Array;
                toProtoMsg(message: _12.ClassesByAccount): _12.ClassesByAccountProtoMsg;
            };
            ClassesByAccountStoreRecord: {
                typeUrl: string;
                encode(message: _12.ClassesByAccountStoreRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ClassesByAccountStoreRecord;
                fromPartial(object: Partial<_12.ClassesByAccountStoreRecord>): _12.ClassesByAccountStoreRecord;
                fromAmino(object: _12.ClassesByAccountStoreRecordAmino): _12.ClassesByAccountStoreRecord;
                toAmino(message: _12.ClassesByAccountStoreRecord): _12.ClassesByAccountStoreRecordAmino;
                fromAminoMsg(object: _12.ClassesByAccountStoreRecordAminoMsg): _12.ClassesByAccountStoreRecord;
                fromProtoMsg(message: _12.ClassesByAccountStoreRecordProtoMsg): _12.ClassesByAccountStoreRecord;
                toProto(message: _12.ClassesByAccountStoreRecord): Uint8Array;
                toProtoMsg(message: _12.ClassesByAccountStoreRecord): _12.ClassesByAccountStoreRecordProtoMsg;
            };
            ClassRevealQueueEntry: {
                typeUrl: string;
                encode(message: _11.ClassRevealQueueEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ClassRevealQueueEntry;
                fromPartial(object: Partial<_11.ClassRevealQueueEntry>): _11.ClassRevealQueueEntry;
                fromAmino(object: _11.ClassRevealQueueEntryAmino): _11.ClassRevealQueueEntry;
                toAmino(message: _11.ClassRevealQueueEntry): _11.ClassRevealQueueEntryAmino;
                fromAminoMsg(object: _11.ClassRevealQueueEntryAminoMsg): _11.ClassRevealQueueEntry;
                fromProtoMsg(message: _11.ClassRevealQueueEntryProtoMsg): _11.ClassRevealQueueEntry;
                toProto(message: _11.ClassRevealQueueEntry): Uint8Array;
                toProtoMsg(message: _11.ClassRevealQueueEntry): _11.ClassRevealQueueEntryProtoMsg;
            };
            ClassInput: {
                typeUrl: string;
                encode(message: _10.ClassInput, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ClassInput;
                fromPartial(object: Partial<_10.ClassInput>): _10.ClassInput;
                fromAmino(object: _10.ClassInputAmino): _10.ClassInput;
                toAmino(message: _10.ClassInput): _10.ClassInputAmino;
                fromAminoMsg(object: _10.ClassInputAminoMsg): _10.ClassInput;
                fromProtoMsg(message: _10.ClassInputProtoMsg): _10.ClassInput;
                toProto(message: _10.ClassInput): Uint8Array;
                toProtoMsg(message: _10.ClassInput): _10.ClassInputProtoMsg;
            };
            ClassParentInput: {
                typeUrl: string;
                encode(message: _10.ClassParentInput, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ClassParentInput;
                fromPartial(object: Partial<_10.ClassParentInput>): _10.ClassParentInput;
                fromAmino(object: _10.ClassParentInputAmino): _10.ClassParentInput;
                toAmino(message: _10.ClassParentInput): _10.ClassParentInputAmino;
                fromAminoMsg(object: _10.ClassParentInputAminoMsg): _10.ClassParentInput;
                fromProtoMsg(message: _10.ClassParentInputProtoMsg): _10.ClassParentInput;
                toProto(message: _10.ClassParentInput): Uint8Array;
                toProtoMsg(message: _10.ClassParentInput): _10.ClassParentInputProtoMsg;
            };
            classParentTypeFromJSON(object: any): _9.ClassParentType;
            classParentTypeToJSON(object: _9.ClassParentType): string;
            ClassParentType: typeof _9.ClassParentType;
            ClassParentTypeSDKType: typeof _9.ClassParentType;
            ClassParentTypeAmino: typeof _9.ClassParentType;
            ClassData: {
                typeUrl: string;
                encode(message: _9.ClassData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.ClassData;
                fromPartial(object: Partial<_9.ClassData>): _9.ClassData;
                fromAmino(object: _9.ClassDataAmino): _9.ClassData;
                toAmino(message: _9.ClassData): _9.ClassDataAmino;
                fromAminoMsg(object: _9.ClassDataAminoMsg): _9.ClassData;
                fromProtoMsg(message: _9.ClassDataProtoMsg): _9.ClassData;
                toProto(message: _9.ClassData): Uint8Array;
                toProtoMsg(message: _9.ClassData): _9.ClassDataProtoMsg;
            };
            ClassParent: {
                typeUrl: string;
                encode(message: _9.ClassParent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.ClassParent;
                fromPartial(object: Partial<_9.ClassParent>): _9.ClassParent;
                fromAmino(object: _9.ClassParentAmino): _9.ClassParent;
                toAmino(message: _9.ClassParent): _9.ClassParentAmino;
                fromAminoMsg(object: _9.ClassParentAminoMsg): _9.ClassParent;
                fromProtoMsg(message: _9.ClassParentProtoMsg): _9.ClassParent;
                toProto(message: _9.ClassParent): Uint8Array;
                toProtoMsg(message: _9.ClassParent): _9.ClassParentProtoMsg;
            };
            MintPeriod: {
                typeUrl: string;
                encode(message: _9.MintPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MintPeriod;
                fromPartial(object: Partial<_9.MintPeriod>): _9.MintPeriod;
                fromAmino(object: _9.MintPeriodAmino): _9.MintPeriod;
                toAmino(message: _9.MintPeriod): _9.MintPeriodAmino;
                fromAminoMsg(object: _9.MintPeriodAminoMsg): _9.MintPeriod;
                fromProtoMsg(message: _9.MintPeriodProtoMsg): _9.MintPeriod;
                toProto(message: _9.MintPeriod): Uint8Array;
                toProtoMsg(message: _9.MintPeriod): _9.MintPeriodProtoMsg;
            };
            ClassConfig: {
                typeUrl: string;
                encode(message: _9.ClassConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.ClassConfig;
                fromPartial(object: Partial<_9.ClassConfig>): _9.ClassConfig;
                fromAmino(object: _9.ClassConfigAmino): _9.ClassConfig;
                toAmino(message: _9.ClassConfig): _9.ClassConfigAmino;
                fromAminoMsg(object: _9.ClassConfigAminoMsg): _9.ClassConfig;
                fromProtoMsg(message: _9.ClassConfigProtoMsg): _9.ClassConfig;
                toProto(message: _9.ClassConfig): Uint8Array;
                toProtoMsg(message: _9.ClassConfig): _9.ClassConfigProtoMsg;
            };
            BlindBoxConfig: {
                typeUrl: string;
                encode(message: _9.BlindBoxConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.BlindBoxConfig;
                fromPartial(object: Partial<_9.BlindBoxConfig>): _9.BlindBoxConfig;
                fromAmino(object: _9.BlindBoxConfigAmino): _9.BlindBoxConfig;
                toAmino(message: _9.BlindBoxConfig): _9.BlindBoxConfigAmino;
                fromAminoMsg(object: _9.BlindBoxConfigAminoMsg): _9.BlindBoxConfig;
                fromProtoMsg(message: _9.BlindBoxConfigProtoMsg): _9.BlindBoxConfig;
                toProto(message: _9.BlindBoxConfig): Uint8Array;
                toProtoMsg(message: _9.BlindBoxConfig): _9.BlindBoxConfigProtoMsg;
            };
            BlindBoxState: {
                typeUrl: string;
                encode(message: _9.BlindBoxState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.BlindBoxState;
                fromPartial(object: Partial<_9.BlindBoxState>): _9.BlindBoxState;
                fromAmino(object: _9.BlindBoxStateAmino): _9.BlindBoxState;
                toAmino(message: _9.BlindBoxState): _9.BlindBoxStateAmino;
                fromAminoMsg(object: _9.BlindBoxStateAminoMsg): _9.BlindBoxState;
                fromProtoMsg(message: _9.BlindBoxStateProtoMsg): _9.BlindBoxState;
                toProto(message: _9.BlindBoxState): Uint8Array;
                toProtoMsg(message: _9.BlindBoxState): _9.BlindBoxStateProtoMsg;
            };
            BlindBoxContent: {
                typeUrl: string;
                encode(message: _8.BlindBoxContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.BlindBoxContent;
                fromPartial(object: Partial<_8.BlindBoxContent>): _8.BlindBoxContent;
                fromAmino(object: _8.BlindBoxContentAmino): _8.BlindBoxContent;
                toAmino(message: _8.BlindBoxContent): _8.BlindBoxContentAmino;
                fromAminoMsg(object: _8.BlindBoxContentAminoMsg): _8.BlindBoxContent;
                fromProtoMsg(message: _8.BlindBoxContentProtoMsg): _8.BlindBoxContent;
                toProto(message: _8.BlindBoxContent): Uint8Array;
                toProtoMsg(message: _8.BlindBoxContent): _8.BlindBoxContentProtoMsg;
            };
            CreateRoyaltyConfigAuthorization: {
                typeUrl: string;
                encode(message: _7.CreateRoyaltyConfigAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.CreateRoyaltyConfigAuthorization;
                fromPartial(object: Partial<_7.CreateRoyaltyConfigAuthorization>): _7.CreateRoyaltyConfigAuthorization;
                fromAmino(object: _7.CreateRoyaltyConfigAuthorizationAmino): _7.CreateRoyaltyConfigAuthorization;
                toAmino(message: _7.CreateRoyaltyConfigAuthorization): _7.CreateRoyaltyConfigAuthorizationAmino;
                fromAminoMsg(object: _7.CreateRoyaltyConfigAuthorizationAminoMsg): _7.CreateRoyaltyConfigAuthorization;
                fromProtoMsg(message: _7.CreateRoyaltyConfigAuthorizationProtoMsg): _7.CreateRoyaltyConfigAuthorization;
                toProto(message: _7.CreateRoyaltyConfigAuthorization): Uint8Array;
                toProtoMsg(message: _7.CreateRoyaltyConfigAuthorization): _7.CreateRoyaltyConfigAuthorizationProtoMsg;
            };
            UpdateRoyaltyConfigAuthorization: {
                typeUrl: string;
                encode(message: _7.UpdateRoyaltyConfigAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.UpdateRoyaltyConfigAuthorization;
                fromPartial(object: Partial<_7.UpdateRoyaltyConfigAuthorization>): _7.UpdateRoyaltyConfigAuthorization;
                fromAmino(object: _7.UpdateRoyaltyConfigAuthorizationAmino): _7.UpdateRoyaltyConfigAuthorization;
                toAmino(message: _7.UpdateRoyaltyConfigAuthorization): _7.UpdateRoyaltyConfigAuthorizationAmino;
                fromAminoMsg(object: _7.UpdateRoyaltyConfigAuthorizationAminoMsg): _7.UpdateRoyaltyConfigAuthorization;
                fromProtoMsg(message: _7.UpdateRoyaltyConfigAuthorizationProtoMsg): _7.UpdateRoyaltyConfigAuthorization;
                toProto(message: _7.UpdateRoyaltyConfigAuthorization): Uint8Array;
                toProtoMsg(message: _7.UpdateRoyaltyConfigAuthorization): _7.UpdateRoyaltyConfigAuthorizationProtoMsg;
            };
            DeleteRoyaltyConfigAuthorization: {
                typeUrl: string;
                encode(message: _7.DeleteRoyaltyConfigAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DeleteRoyaltyConfigAuthorization;
                fromPartial(object: Partial<_7.DeleteRoyaltyConfigAuthorization>): _7.DeleteRoyaltyConfigAuthorization;
                fromAmino(object: _7.DeleteRoyaltyConfigAuthorizationAmino): _7.DeleteRoyaltyConfigAuthorization;
                toAmino(message: _7.DeleteRoyaltyConfigAuthorization): _7.DeleteRoyaltyConfigAuthorizationAmino;
                fromAminoMsg(object: _7.DeleteRoyaltyConfigAuthorizationAminoMsg): _7.DeleteRoyaltyConfigAuthorization;
                fromProtoMsg(message: _7.DeleteRoyaltyConfigAuthorizationProtoMsg): _7.DeleteRoyaltyConfigAuthorization;
                toProto(message: _7.DeleteRoyaltyConfigAuthorization): Uint8Array;
                toProtoMsg(message: _7.DeleteRoyaltyConfigAuthorization): _7.DeleteRoyaltyConfigAuthorizationProtoMsg;
            };
            CreateListingAuthorization: {
                typeUrl: string;
                encode(message: _7.CreateListingAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.CreateListingAuthorization;
                fromPartial(object: Partial<_7.CreateListingAuthorization>): _7.CreateListingAuthorization;
                fromAmino(object: _7.CreateListingAuthorizationAmino): _7.CreateListingAuthorization;
                toAmino(message: _7.CreateListingAuthorization): _7.CreateListingAuthorizationAmino;
                fromAminoMsg(object: _7.CreateListingAuthorizationAminoMsg): _7.CreateListingAuthorization;
                fromProtoMsg(message: _7.CreateListingAuthorizationProtoMsg): _7.CreateListingAuthorization;
                toProto(message: _7.CreateListingAuthorization): Uint8Array;
                toProtoMsg(message: _7.CreateListingAuthorization): _7.CreateListingAuthorizationProtoMsg;
            };
            UpdateListingAuthorization: {
                typeUrl: string;
                encode(message: _7.UpdateListingAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.UpdateListingAuthorization;
                fromPartial(object: Partial<_7.UpdateListingAuthorization>): _7.UpdateListingAuthorization;
                fromAmino(object: _7.UpdateListingAuthorizationAmino): _7.UpdateListingAuthorization;
                toAmino(message: _7.UpdateListingAuthorization): _7.UpdateListingAuthorizationAmino;
                fromAminoMsg(object: _7.UpdateListingAuthorizationAminoMsg): _7.UpdateListingAuthorization;
                fromProtoMsg(message: _7.UpdateListingAuthorizationProtoMsg): _7.UpdateListingAuthorization;
                toProto(message: _7.UpdateListingAuthorization): Uint8Array;
                toProtoMsg(message: _7.UpdateListingAuthorization): _7.UpdateListingAuthorizationProtoMsg;
            };
            DeleteListingAuthorization: {
                typeUrl: string;
                encode(message: _7.DeleteListingAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DeleteListingAuthorization;
                fromPartial(object: Partial<_7.DeleteListingAuthorization>): _7.DeleteListingAuthorization;
                fromAmino(object: _7.DeleteListingAuthorizationAmino): _7.DeleteListingAuthorization;
                toAmino(message: _7.DeleteListingAuthorization): _7.DeleteListingAuthorizationAmino;
                fromAminoMsg(object: _7.DeleteListingAuthorizationAminoMsg): _7.DeleteListingAuthorization;
                fromProtoMsg(message: _7.DeleteListingAuthorizationProtoMsg): _7.DeleteListingAuthorization;
                toProto(message: _7.DeleteListingAuthorization): Uint8Array;
                toProtoMsg(message: _7.DeleteListingAuthorization): _7.DeleteListingAuthorizationProtoMsg;
            };
            CreateOfferAuthorization: {
                typeUrl: string;
                encode(message: _7.CreateOfferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.CreateOfferAuthorization;
                fromPartial(object: Partial<_7.CreateOfferAuthorization>): _7.CreateOfferAuthorization;
                fromAmino(object: _7.CreateOfferAuthorizationAmino): _7.CreateOfferAuthorization;
                toAmino(message: _7.CreateOfferAuthorization): _7.CreateOfferAuthorizationAmino;
                fromAminoMsg(object: _7.CreateOfferAuthorizationAminoMsg): _7.CreateOfferAuthorization;
                fromProtoMsg(message: _7.CreateOfferAuthorizationProtoMsg): _7.CreateOfferAuthorization;
                toProto(message: _7.CreateOfferAuthorization): Uint8Array;
                toProtoMsg(message: _7.CreateOfferAuthorization): _7.CreateOfferAuthorizationProtoMsg;
            };
            UpdateOfferAuthorization: {
                typeUrl: string;
                encode(message: _7.UpdateOfferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.UpdateOfferAuthorization;
                fromPartial(object: Partial<_7.UpdateOfferAuthorization>): _7.UpdateOfferAuthorization;
                fromAmino(object: _7.UpdateOfferAuthorizationAmino): _7.UpdateOfferAuthorization;
                toAmino(message: _7.UpdateOfferAuthorization): _7.UpdateOfferAuthorizationAmino;
                fromAminoMsg(object: _7.UpdateOfferAuthorizationAminoMsg): _7.UpdateOfferAuthorization;
                fromProtoMsg(message: _7.UpdateOfferAuthorizationProtoMsg): _7.UpdateOfferAuthorization;
                toProto(message: _7.UpdateOfferAuthorization): Uint8Array;
                toProtoMsg(message: _7.UpdateOfferAuthorization): _7.UpdateOfferAuthorizationProtoMsg;
            };
            DeleteOfferAuthorization: {
                typeUrl: string;
                encode(message: _7.DeleteOfferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DeleteOfferAuthorization;
                fromPartial(object: Partial<_7.DeleteOfferAuthorization>): _7.DeleteOfferAuthorization;
                fromAmino(object: _7.DeleteOfferAuthorizationAmino): _7.DeleteOfferAuthorization;
                toAmino(message: _7.DeleteOfferAuthorization): _7.DeleteOfferAuthorizationAmino;
                fromAminoMsg(object: _7.DeleteOfferAuthorizationAminoMsg): _7.DeleteOfferAuthorization;
                fromProtoMsg(message: _7.DeleteOfferAuthorizationProtoMsg): _7.DeleteOfferAuthorization;
                toProto(message: _7.DeleteOfferAuthorization): Uint8Array;
                toProtoMsg(message: _7.DeleteOfferAuthorization): _7.DeleteOfferAuthorizationProtoMsg;
            };
            NewClassAuthorization: {
                typeUrl: string;
                encode(message: _7.NewClassAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.NewClassAuthorization;
                fromPartial(object: Partial<_7.NewClassAuthorization>): _7.NewClassAuthorization;
                fromAmino(object: _7.NewClassAuthorizationAmino): _7.NewClassAuthorization;
                toAmino(message: _7.NewClassAuthorization): _7.NewClassAuthorizationAmino;
                fromAminoMsg(object: _7.NewClassAuthorizationAminoMsg): _7.NewClassAuthorization;
                fromProtoMsg(message: _7.NewClassAuthorizationProtoMsg): _7.NewClassAuthorization;
                toProto(message: _7.NewClassAuthorization): Uint8Array;
                toProtoMsg(message: _7.NewClassAuthorization): _7.NewClassAuthorizationProtoMsg;
            };
            UpdateClassAuthorization: {
                typeUrl: string;
                encode(message: _7.UpdateClassAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.UpdateClassAuthorization;
                fromPartial(object: Partial<_7.UpdateClassAuthorization>): _7.UpdateClassAuthorization;
                fromAmino(object: _7.UpdateClassAuthorizationAmino): _7.UpdateClassAuthorization;
                toAmino(message: _7.UpdateClassAuthorization): _7.UpdateClassAuthorizationAmino;
                fromAminoMsg(object: _7.UpdateClassAuthorizationAminoMsg): _7.UpdateClassAuthorization;
                fromProtoMsg(message: _7.UpdateClassAuthorizationProtoMsg): _7.UpdateClassAuthorization;
                toProto(message: _7.UpdateClassAuthorization): Uint8Array;
                toProtoMsg(message: _7.UpdateClassAuthorization): _7.UpdateClassAuthorizationProtoMsg;
            };
            MintNFTAuthorization: {
                typeUrl: string;
                encode(message: _7.MintNFTAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MintNFTAuthorization;
                fromPartial(object: Partial<_7.MintNFTAuthorization>): _7.MintNFTAuthorization;
                fromAmino(object: _7.MintNFTAuthorizationAmino): _7.MintNFTAuthorization;
                toAmino(message: _7.MintNFTAuthorization): _7.MintNFTAuthorizationAmino;
                fromAminoMsg(object: _7.MintNFTAuthorizationAminoMsg): _7.MintNFTAuthorization;
                fromProtoMsg(message: _7.MintNFTAuthorizationProtoMsg): _7.MintNFTAuthorization;
                toProto(message: _7.MintNFTAuthorization): Uint8Array;
                toProtoMsg(message: _7.MintNFTAuthorization): _7.MintNFTAuthorizationProtoMsg;
            };
            SendNFTAuthorization: {
                typeUrl: string;
                encode(message: _7.SendNFTAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SendNFTAuthorization;
                fromPartial(object: Partial<_7.SendNFTAuthorization>): _7.SendNFTAuthorization;
                fromAmino(object: _7.SendNFTAuthorizationAmino): _7.SendNFTAuthorization;
                toAmino(message: _7.SendNFTAuthorization): _7.SendNFTAuthorizationAmino;
                fromAminoMsg(object: _7.SendNFTAuthorizationAminoMsg): _7.SendNFTAuthorization;
                fromProtoMsg(message: _7.SendNFTAuthorizationProtoMsg): _7.SendNFTAuthorization;
                toProto(message: _7.SendNFTAuthorization): Uint8Array;
                toProtoMsg(message: _7.SendNFTAuthorization): _7.SendNFTAuthorizationProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            likechain: {
                iscn: _149.MsgClientImpl;
                likenft: {
                    v1: _150.MsgClientImpl;
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
                iscn: _145.LCDQueryClient;
                likenft: {
                    v1: _146.LCDQueryClient;
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
