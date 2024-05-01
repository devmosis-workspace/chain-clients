import * as _0 from "./airdrop/v1/airdrop";
import * as _1 from "./airdrop/v1/genesis";
import * as _2 from "./airdrop/v1/messages";
import * as _3 from "./airdrop/v1/params";
import * as _4 from "./airdrop/v1/proposals";
import * as _5 from "./airdrop/v1/query";
import * as _6 from "./claimsmanager/v1/claimsmanager";
import * as _7 from "./claimsmanager/v1/genesis";
import * as _9 from "./claimsmanager/v1/query";
import * as _10 from "./epochs/v1/genesis";
import * as _11 from "./epochs/v1/query";
import * as _12 from "./interchainquery/v1/genesis";
import * as _13 from "./interchainquery/v1/interchainquery";
import * as _14 from "./interchainquery/v1/messages";
import * as _15 from "./interchainquery/v1/query";
import * as _16 from "./interchainstaking/v1/genesis";
import * as _17 from "./interchainstaking/v1/interchainstaking";
import * as _18 from "./interchainstaking/v1/messages";
import * as _19 from "./interchainstaking/v1/proposals";
import * as _20 from "./interchainstaking/v1/query";
import * as _21 from "./mint/v1beta1/genesis";
import * as _22 from "./mint/v1beta1/mint";
import * as _23 from "./mint/v1beta1/query";
import * as _24 from "./participationrewards/v1/genesis";
import * as _25 from "./participationrewards/v1/messages";
import * as _26 from "./participationrewards/v1/participationrewards";
import * as _27 from "./participationrewards/v1/proposals";
import * as _28 from "./participationrewards/v1/query";
import * as _29 from "./supply/v1/query";
import * as _30 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _31 from "./tokenfactory/v1beta1/genesis";
import * as _32 from "./tokenfactory/v1beta1/params";
import * as _33 from "./tokenfactory/v1beta1/query";
import * as _34 from "./tokenfactory/v1beta1/tx";
import * as _203 from "./airdrop/v1/query.lcd";
import * as _204 from "./claimsmanager/v1/query.lcd";
import * as _205 from "./epochs/v1/query.lcd";
import * as _206 from "./interchainstaking/v1/query.lcd";
import * as _207 from "./mint/v1beta1/query.lcd";
import * as _208 from "./participationrewards/v1/query.lcd";
import * as _209 from "./supply/v1/query.lcd";
import * as _210 from "./tokenfactory/v1beta1/query.lcd";
import * as _211 from "./airdrop/v1/query.rpc.Query";
import * as _212 from "./claimsmanager/v1/query.rpc.Query";
import * as _213 from "./epochs/v1/query.rpc.Query";
import * as _214 from "./interchainstaking/v1/query.rpc.Query";
import * as _215 from "./mint/v1beta1/query.rpc.Query";
import * as _216 from "./participationrewards/v1/query.rpc.Query";
import * as _217 from "./supply/v1/query.rpc.Query";
import * as _218 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _219 from "./airdrop/v1/messages.rpc.msg";
import * as _220 from "./interchainquery/v1/messages.rpc.msg";
import * as _221 from "./interchainstaking/v1/messages.rpc.msg";
import * as _222 from "./participationrewards/v1/messages.rpc.msg";
import * as _223 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace quicksilver {
    namespace airdrop {
        const v1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                zoneDrop(request: _5.QueryZoneDropRequest): Promise<_5.QueryZoneDropResponse>;
                accountBalance(request: _5.QueryAccountBalanceRequest): Promise<_5.QueryAccountBalanceResponse>;
                zoneDrops(request: _5.QueryZoneDropsRequest): Promise<_5.QueryZoneDropsResponse>;
                claimRecord(request: _5.QueryClaimRecordRequest): Promise<_5.QueryClaimRecordResponse>;
                claimRecords(request: _5.QueryClaimRecordsRequest): Promise<_5.QueryClaimRecordsResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _2.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    incentivePoolSpend(value: _2.MsgIncentivePoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _2.MsgClaim): {
                        typeUrl: string;
                        value: _2.MsgClaim;
                    };
                    incentivePoolSpend(value: _2.MsgIncentivePoolSpend): {
                        typeUrl: string;
                        value: _2.MsgIncentivePoolSpend;
                    };
                };
                fromJSON: {
                    claim(value: any): {
                        typeUrl: string;
                        value: _2.MsgClaim;
                    };
                    incentivePoolSpend(value: any): {
                        typeUrl: string;
                        value: _2.MsgIncentivePoolSpend;
                    };
                };
                fromPartial: {
                    claim(value: _2.MsgClaim): {
                        typeUrl: string;
                        value: _2.MsgClaim;
                    };
                    incentivePoolSpend(value: _2.MsgIncentivePoolSpend): {
                        typeUrl: string;
                        value: _2.MsgIncentivePoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.airdrop.v1.MsgClaim": {
                    aminoType: string;
                    toAmino: (message: _2.MsgClaim) => _2.MsgClaimAmino;
                    fromAmino: (object: _2.MsgClaimAmino) => _2.MsgClaim;
                };
                "/quicksilver.airdrop.v1.MsgIncentivePoolSpend": {
                    aminoType: string;
                    toAmino: (message: _2.MsgIncentivePoolSpend) => _2.MsgIncentivePoolSpendAmino;
                    fromAmino: (object: _2.MsgIncentivePoolSpendAmino) => _2.MsgIncentivePoolSpend;
                };
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _5.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryParamsRequest;
                fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
                fromAmino(_: _5.QueryParamsRequestAmino): _5.QueryParamsRequest;
                toAmino(_: _5.QueryParamsRequest): _5.QueryParamsRequestAmino;
                fromAminoMsg(object: _5.QueryParamsRequestAminoMsg): _5.QueryParamsRequest;
                fromProtoMsg(message: _5.QueryParamsRequestProtoMsg): _5.QueryParamsRequest;
                toProto(message: _5.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _5.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryParamsResponse;
                fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
                fromAmino(object: _5.QueryParamsResponseAmino): _5.QueryParamsResponse;
                toAmino(message: _5.QueryParamsResponse): _5.QueryParamsResponseAmino;
                fromAminoMsg(object: _5.QueryParamsResponseAminoMsg): _5.QueryParamsResponse;
                fromProtoMsg(message: _5.QueryParamsResponseProtoMsg): _5.QueryParamsResponse;
                toProto(message: _5.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseProtoMsg;
            };
            QueryZoneDropRequest: {
                typeUrl: string;
                encode(message: _5.QueryZoneDropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryZoneDropRequest;
                fromPartial(object: Partial<_5.QueryZoneDropRequest>): _5.QueryZoneDropRequest;
                fromAmino(object: _5.QueryZoneDropRequestAmino): _5.QueryZoneDropRequest;
                toAmino(message: _5.QueryZoneDropRequest): _5.QueryZoneDropRequestAmino;
                fromAminoMsg(object: _5.QueryZoneDropRequestAminoMsg): _5.QueryZoneDropRequest;
                fromProtoMsg(message: _5.QueryZoneDropRequestProtoMsg): _5.QueryZoneDropRequest;
                toProto(message: _5.QueryZoneDropRequest): Uint8Array;
                toProtoMsg(message: _5.QueryZoneDropRequest): _5.QueryZoneDropRequestProtoMsg;
            };
            QueryZoneDropResponse: {
                typeUrl: string;
                encode(message: _5.QueryZoneDropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryZoneDropResponse;
                fromPartial(object: Partial<_5.QueryZoneDropResponse>): _5.QueryZoneDropResponse;
                fromAmino(object: _5.QueryZoneDropResponseAmino): _5.QueryZoneDropResponse;
                toAmino(message: _5.QueryZoneDropResponse): _5.QueryZoneDropResponseAmino;
                fromAminoMsg(object: _5.QueryZoneDropResponseAminoMsg): _5.QueryZoneDropResponse;
                fromProtoMsg(message: _5.QueryZoneDropResponseProtoMsg): _5.QueryZoneDropResponse;
                toProto(message: _5.QueryZoneDropResponse): Uint8Array;
                toProtoMsg(message: _5.QueryZoneDropResponse): _5.QueryZoneDropResponseProtoMsg;
            };
            QueryAccountBalanceRequest: {
                typeUrl: string;
                encode(message: _5.QueryAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryAccountBalanceRequest;
                fromPartial(object: Partial<_5.QueryAccountBalanceRequest>): _5.QueryAccountBalanceRequest;
                fromAmino(object: _5.QueryAccountBalanceRequestAmino): _5.QueryAccountBalanceRequest;
                toAmino(message: _5.QueryAccountBalanceRequest): _5.QueryAccountBalanceRequestAmino;
                fromAminoMsg(object: _5.QueryAccountBalanceRequestAminoMsg): _5.QueryAccountBalanceRequest;
                fromProtoMsg(message: _5.QueryAccountBalanceRequestProtoMsg): _5.QueryAccountBalanceRequest;
                toProto(message: _5.QueryAccountBalanceRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountBalanceRequest): _5.QueryAccountBalanceRequestProtoMsg;
            };
            QueryAccountBalanceResponse: {
                typeUrl: string;
                encode(message: _5.QueryAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryAccountBalanceResponse;
                fromPartial(object: Partial<_5.QueryAccountBalanceResponse>): _5.QueryAccountBalanceResponse;
                fromAmino(object: _5.QueryAccountBalanceResponseAmino): _5.QueryAccountBalanceResponse;
                toAmino(message: _5.QueryAccountBalanceResponse): _5.QueryAccountBalanceResponseAmino;
                fromAminoMsg(object: _5.QueryAccountBalanceResponseAminoMsg): _5.QueryAccountBalanceResponse;
                fromProtoMsg(message: _5.QueryAccountBalanceResponseProtoMsg): _5.QueryAccountBalanceResponse;
                toProto(message: _5.QueryAccountBalanceResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountBalanceResponse): _5.QueryAccountBalanceResponseProtoMsg;
            };
            QueryZoneDropsRequest: {
                typeUrl: string;
                encode(message: _5.QueryZoneDropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryZoneDropsRequest;
                fromPartial(object: Partial<_5.QueryZoneDropsRequest>): _5.QueryZoneDropsRequest;
                fromAmino(object: _5.QueryZoneDropsRequestAmino): _5.QueryZoneDropsRequest;
                toAmino(message: _5.QueryZoneDropsRequest): _5.QueryZoneDropsRequestAmino;
                fromAminoMsg(object: _5.QueryZoneDropsRequestAminoMsg): _5.QueryZoneDropsRequest;
                fromProtoMsg(message: _5.QueryZoneDropsRequestProtoMsg): _5.QueryZoneDropsRequest;
                toProto(message: _5.QueryZoneDropsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryZoneDropsRequest): _5.QueryZoneDropsRequestProtoMsg;
            };
            QueryZoneDropsResponse: {
                typeUrl: string;
                encode(message: _5.QueryZoneDropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryZoneDropsResponse;
                fromPartial(object: Partial<_5.QueryZoneDropsResponse>): _5.QueryZoneDropsResponse;
                fromAmino(object: _5.QueryZoneDropsResponseAmino): _5.QueryZoneDropsResponse;
                toAmino(message: _5.QueryZoneDropsResponse): _5.QueryZoneDropsResponseAmino;
                fromAminoMsg(object: _5.QueryZoneDropsResponseAminoMsg): _5.QueryZoneDropsResponse;
                fromProtoMsg(message: _5.QueryZoneDropsResponseProtoMsg): _5.QueryZoneDropsResponse;
                toProto(message: _5.QueryZoneDropsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryZoneDropsResponse): _5.QueryZoneDropsResponseProtoMsg;
            };
            QueryClaimRecordRequest: {
                typeUrl: string;
                encode(message: _5.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryClaimRecordRequest;
                fromPartial(object: Partial<_5.QueryClaimRecordRequest>): _5.QueryClaimRecordRequest;
                fromAmino(object: _5.QueryClaimRecordRequestAmino): _5.QueryClaimRecordRequest;
                toAmino(message: _5.QueryClaimRecordRequest): _5.QueryClaimRecordRequestAmino;
                fromAminoMsg(object: _5.QueryClaimRecordRequestAminoMsg): _5.QueryClaimRecordRequest;
                fromProtoMsg(message: _5.QueryClaimRecordRequestProtoMsg): _5.QueryClaimRecordRequest;
                toProto(message: _5.QueryClaimRecordRequest): Uint8Array;
                toProtoMsg(message: _5.QueryClaimRecordRequest): _5.QueryClaimRecordRequestProtoMsg;
            };
            QueryClaimRecordResponse: {
                typeUrl: string;
                encode(message: _5.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryClaimRecordResponse;
                fromPartial(object: Partial<_5.QueryClaimRecordResponse>): _5.QueryClaimRecordResponse;
                fromAmino(object: _5.QueryClaimRecordResponseAmino): _5.QueryClaimRecordResponse;
                toAmino(message: _5.QueryClaimRecordResponse): _5.QueryClaimRecordResponseAmino;
                fromAminoMsg(object: _5.QueryClaimRecordResponseAminoMsg): _5.QueryClaimRecordResponse;
                fromProtoMsg(message: _5.QueryClaimRecordResponseProtoMsg): _5.QueryClaimRecordResponse;
                toProto(message: _5.QueryClaimRecordResponse): Uint8Array;
                toProtoMsg(message: _5.QueryClaimRecordResponse): _5.QueryClaimRecordResponseProtoMsg;
            };
            QueryClaimRecordsRequest: {
                typeUrl: string;
                encode(message: _5.QueryClaimRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryClaimRecordsRequest;
                fromPartial(object: Partial<_5.QueryClaimRecordsRequest>): _5.QueryClaimRecordsRequest;
                fromAmino(object: _5.QueryClaimRecordsRequestAmino): _5.QueryClaimRecordsRequest;
                toAmino(message: _5.QueryClaimRecordsRequest): _5.QueryClaimRecordsRequestAmino;
                fromAminoMsg(object: _5.QueryClaimRecordsRequestAminoMsg): _5.QueryClaimRecordsRequest;
                fromProtoMsg(message: _5.QueryClaimRecordsRequestProtoMsg): _5.QueryClaimRecordsRequest;
                toProto(message: _5.QueryClaimRecordsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryClaimRecordsRequest): _5.QueryClaimRecordsRequestProtoMsg;
            };
            QueryClaimRecordsResponse: {
                typeUrl: string;
                encode(message: _5.QueryClaimRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryClaimRecordsResponse;
                fromPartial(object: Partial<_5.QueryClaimRecordsResponse>): _5.QueryClaimRecordsResponse;
                fromAmino(object: _5.QueryClaimRecordsResponseAmino): _5.QueryClaimRecordsResponse;
                toAmino(message: _5.QueryClaimRecordsResponse): _5.QueryClaimRecordsResponseAmino;
                fromAminoMsg(object: _5.QueryClaimRecordsResponseAminoMsg): _5.QueryClaimRecordsResponse;
                fromProtoMsg(message: _5.QueryClaimRecordsResponseProtoMsg): _5.QueryClaimRecordsResponse;
                toProto(message: _5.QueryClaimRecordsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryClaimRecordsResponse): _5.QueryClaimRecordsResponseProtoMsg;
            };
            RegisterZoneDropProposal: {
                typeUrl: string;
                encode(message: _4.RegisterZoneDropProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.RegisterZoneDropProposal;
                fromPartial(object: Partial<_4.RegisterZoneDropProposal>): _4.RegisterZoneDropProposal;
                fromAmino(object: _4.RegisterZoneDropProposalAmino): _4.RegisterZoneDropProposal;
                toAmino(message: _4.RegisterZoneDropProposal): _4.RegisterZoneDropProposalAmino;
                fromAminoMsg(object: _4.RegisterZoneDropProposalAminoMsg): _4.RegisterZoneDropProposal;
                fromProtoMsg(message: _4.RegisterZoneDropProposalProtoMsg): _4.RegisterZoneDropProposal;
                toProto(message: _4.RegisterZoneDropProposal): Uint8Array;
                toProtoMsg(message: _4.RegisterZoneDropProposal): _4.RegisterZoneDropProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.Params;
                fromPartial(_: Partial<_3.Params>): _3.Params;
                fromAmino(_: _3.ParamsAmino): _3.Params;
                toAmino(_: _3.Params): _3.ParamsAmino;
                fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
                fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
                toProto(message: _3.Params): Uint8Array;
                toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
            };
            MsgClaim: {
                typeUrl: string;
                encode(message: _2.MsgClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.MsgClaim;
                fromPartial(object: Partial<_2.MsgClaim>): _2.MsgClaim;
                fromAmino(object: _2.MsgClaimAmino): _2.MsgClaim;
                toAmino(message: _2.MsgClaim): _2.MsgClaimAmino;
                fromAminoMsg(object: _2.MsgClaimAminoMsg): _2.MsgClaim;
                fromProtoMsg(message: _2.MsgClaimProtoMsg): _2.MsgClaim;
                toProto(message: _2.MsgClaim): Uint8Array;
                toProtoMsg(message: _2.MsgClaim): _2.MsgClaimProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                encode(message: _2.MsgClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.MsgClaimResponse;
                fromPartial(object: Partial<_2.MsgClaimResponse>): _2.MsgClaimResponse;
                fromAmino(object: _2.MsgClaimResponseAmino): _2.MsgClaimResponse;
                toAmino(message: _2.MsgClaimResponse): _2.MsgClaimResponseAmino;
                fromAminoMsg(object: _2.MsgClaimResponseAminoMsg): _2.MsgClaimResponse;
                fromProtoMsg(message: _2.MsgClaimResponseProtoMsg): _2.MsgClaimResponse;
                toProto(message: _2.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _2.MsgClaimResponse): _2.MsgClaimResponseProtoMsg;
            };
            MsgIncentivePoolSpend: {
                typeUrl: string;
                encode(message: _2.MsgIncentivePoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.MsgIncentivePoolSpend;
                fromPartial(object: Partial<_2.MsgIncentivePoolSpend>): _2.MsgIncentivePoolSpend;
                fromAmino(object: _2.MsgIncentivePoolSpendAmino): _2.MsgIncentivePoolSpend;
                toAmino(message: _2.MsgIncentivePoolSpend): _2.MsgIncentivePoolSpendAmino;
                fromAminoMsg(object: _2.MsgIncentivePoolSpendAminoMsg): _2.MsgIncentivePoolSpend;
                fromProtoMsg(message: _2.MsgIncentivePoolSpendProtoMsg): _2.MsgIncentivePoolSpend;
                toProto(message: _2.MsgIncentivePoolSpend): Uint8Array;
                toProtoMsg(message: _2.MsgIncentivePoolSpend): _2.MsgIncentivePoolSpendProtoMsg;
            };
            MsgIncentivePoolSpendResponse: {
                typeUrl: string;
                encode(_: _2.MsgIncentivePoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.MsgIncentivePoolSpendResponse;
                fromPartial(_: Partial<_2.MsgIncentivePoolSpendResponse>): _2.MsgIncentivePoolSpendResponse;
                fromAmino(_: _2.MsgIncentivePoolSpendResponseAmino): _2.MsgIncentivePoolSpendResponse;
                toAmino(_: _2.MsgIncentivePoolSpendResponse): _2.MsgIncentivePoolSpendResponseAmino;
                fromAminoMsg(object: _2.MsgIncentivePoolSpendResponseAminoMsg): _2.MsgIncentivePoolSpendResponse;
                fromProtoMsg(message: _2.MsgIncentivePoolSpendResponseProtoMsg): _2.MsgIncentivePoolSpendResponse;
                toProto(message: _2.MsgIncentivePoolSpendResponse): Uint8Array;
                toProtoMsg(message: _2.MsgIncentivePoolSpendResponse): _2.MsgIncentivePoolSpendResponseProtoMsg;
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
            actionFromJSON(object: any): _0.Action;
            actionToJSON(object: _0.Action): string;
            statusFromJSON(object: any): _0.Status;
            statusToJSON(object: _0.Status): string;
            Action: typeof _0.Action;
            ActionSDKType: typeof _0.Action;
            ActionAmino: typeof _0.Action;
            Status: typeof _0.Status;
            StatusSDKType: typeof _0.Status;
            StatusAmino: typeof _0.Status;
            ZoneDrop: {
                typeUrl: string;
                encode(message: _0.ZoneDrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.ZoneDrop;
                fromPartial(object: Partial<_0.ZoneDrop>): _0.ZoneDrop;
                fromAmino(object: _0.ZoneDropAmino): _0.ZoneDrop;
                toAmino(message: _0.ZoneDrop): _0.ZoneDropAmino;
                fromAminoMsg(object: _0.ZoneDropAminoMsg): _0.ZoneDrop;
                fromProtoMsg(message: _0.ZoneDropProtoMsg): _0.ZoneDrop;
                toProto(message: _0.ZoneDrop): Uint8Array;
                toProtoMsg(message: _0.ZoneDrop): _0.ZoneDropProtoMsg;
            };
            ClaimRecord_ActionsCompletedEntry: {
                encode(message: _0.ClaimRecord_ActionsCompletedEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.ClaimRecord_ActionsCompletedEntry;
                fromPartial(object: Partial<_0.ClaimRecord_ActionsCompletedEntry>): _0.ClaimRecord_ActionsCompletedEntry;
                fromAmino(object: _0.ClaimRecord_ActionsCompletedEntryAmino): _0.ClaimRecord_ActionsCompletedEntry;
                toAmino(message: _0.ClaimRecord_ActionsCompletedEntry): _0.ClaimRecord_ActionsCompletedEntryAmino;
                fromAminoMsg(object: _0.ClaimRecord_ActionsCompletedEntryAminoMsg): _0.ClaimRecord_ActionsCompletedEntry;
                fromProtoMsg(message: _0.ClaimRecord_ActionsCompletedEntryProtoMsg): _0.ClaimRecord_ActionsCompletedEntry;
                toProto(message: _0.ClaimRecord_ActionsCompletedEntry): Uint8Array;
            };
            ClaimRecord: {
                typeUrl: string;
                encode(message: _0.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.ClaimRecord;
                fromPartial(object: Partial<_0.ClaimRecord>): _0.ClaimRecord;
                fromAmino(object: _0.ClaimRecordAmino): _0.ClaimRecord;
                toAmino(message: _0.ClaimRecord): _0.ClaimRecordAmino;
                fromAminoMsg(object: _0.ClaimRecordAminoMsg): _0.ClaimRecord;
                fromProtoMsg(message: _0.ClaimRecordProtoMsg): _0.ClaimRecord;
                toProto(message: _0.ClaimRecord): Uint8Array;
                toProtoMsg(message: _0.ClaimRecord): _0.ClaimRecordProtoMsg;
            };
            CompletedAction: {
                typeUrl: string;
                encode(message: _0.CompletedAction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.CompletedAction;
                fromPartial(object: Partial<_0.CompletedAction>): _0.CompletedAction;
                fromAmino(object: _0.CompletedActionAmino): _0.CompletedAction;
                toAmino(message: _0.CompletedAction): _0.CompletedActionAmino;
                fromAminoMsg(object: _0.CompletedActionAminoMsg): _0.CompletedAction;
                fromProtoMsg(message: _0.CompletedActionProtoMsg): _0.CompletedAction;
                toProto(message: _0.CompletedAction): Uint8Array;
                toProtoMsg(message: _0.CompletedAction): _0.CompletedActionProtoMsg;
            };
        };
    }
    namespace claimsmanager {
        const v1: {
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                claims(request: _9.QueryClaimsRequest): Promise<_9.QueryClaimsResponse>;
                lastEpochClaims(request: _9.QueryClaimsRequest): Promise<_9.QueryClaimsResponse>;
                userClaims(request: _9.QueryClaimsRequest): Promise<_9.QueryClaimsResponse>;
                userLastEpochClaims(request: _9.QueryClaimsRequest): Promise<_9.QueryClaimsResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            QueryClaimsRequest: {
                typeUrl: string;
                encode(message: _9.QueryClaimsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryClaimsRequest;
                fromPartial(object: Partial<_9.QueryClaimsRequest>): _9.QueryClaimsRequest;
                fromAmino(object: _9.QueryClaimsRequestAmino): _9.QueryClaimsRequest;
                toAmino(message: _9.QueryClaimsRequest): _9.QueryClaimsRequestAmino;
                fromAminoMsg(object: _9.QueryClaimsRequestAminoMsg): _9.QueryClaimsRequest;
                fromProtoMsg(message: _9.QueryClaimsRequestProtoMsg): _9.QueryClaimsRequest;
                toProto(message: _9.QueryClaimsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryClaimsRequest): _9.QueryClaimsRequestProtoMsg;
            };
            QueryClaimsResponse: {
                typeUrl: string;
                encode(message: _9.QueryClaimsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryClaimsResponse;
                fromPartial(object: Partial<_9.QueryClaimsResponse>): _9.QueryClaimsResponse;
                fromAmino(object: _9.QueryClaimsResponseAmino): _9.QueryClaimsResponse;
                toAmino(message: _9.QueryClaimsResponse): _9.QueryClaimsResponseAmino;
                fromAminoMsg(object: _9.QueryClaimsResponseAminoMsg): _9.QueryClaimsResponse;
                fromProtoMsg(message: _9.QueryClaimsResponseProtoMsg): _9.QueryClaimsResponse;
                toProto(message: _9.QueryClaimsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryClaimsResponse): _9.QueryClaimsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _7.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GenesisState;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            claimTypeFromJSON(object: any): _6.ClaimType;
            claimTypeToJSON(object: _6.ClaimType): string;
            ClaimType: typeof _6.ClaimType;
            ClaimTypeSDKType: typeof _6.ClaimType;
            ClaimTypeAmino: typeof _6.ClaimType;
            Params: {
                typeUrl: string;
                encode(_: _6.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.Params;
                fromPartial(_: Partial<_6.Params>): _6.Params;
                fromAmino(_: _6.ParamsAmino): _6.Params;
                toAmino(_: _6.Params): _6.ParamsAmino;
                fromAminoMsg(object: _6.ParamsAminoMsg): _6.Params;
                fromProtoMsg(message: _6.ParamsProtoMsg): _6.Params;
                toProto(message: _6.Params): Uint8Array;
                toProtoMsg(message: _6.Params): _6.ParamsProtoMsg;
            };
            Claim: {
                typeUrl: string;
                encode(message: _6.Claim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Claim;
                fromPartial(object: Partial<_6.Claim>): _6.Claim;
                fromAmino(object: _6.ClaimAmino): _6.Claim;
                toAmino(message: _6.Claim): _6.ClaimAmino;
                fromAminoMsg(object: _6.ClaimAminoMsg): _6.Claim;
                fromProtoMsg(message: _6.ClaimProtoMsg): _6.Claim;
                toProto(message: _6.Claim): Uint8Array;
                toProtoMsg(message: _6.Claim): _6.ClaimProtoMsg;
            };
            Proof: {
                typeUrl: string;
                encode(message: _6.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Proof;
                fromPartial(object: Partial<_6.Proof>): _6.Proof;
                fromAmino(object: _6.ProofAmino): _6.Proof;
                toAmino(message: _6.Proof): _6.ProofAmino;
                fromAminoMsg(object: _6.ProofAminoMsg): _6.Proof;
                fromProtoMsg(message: _6.ProofProtoMsg): _6.Proof;
                toProto(message: _6.Proof): Uint8Array;
                toProtoMsg(message: _6.Proof): _6.ProofProtoMsg;
            };
        };
    }
    namespace epochs {
        const v1: {
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _11.QueryEpochsInfoRequest): Promise<_11.QueryEpochsInfoResponse>;
                currentEpoch(request: _11.QueryCurrentEpochRequest): Promise<_11.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(message: _11.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryEpochsInfoRequest;
                fromPartial(object: Partial<_11.QueryEpochsInfoRequest>): _11.QueryEpochsInfoRequest;
                fromAmino(object: _11.QueryEpochsInfoRequestAmino): _11.QueryEpochsInfoRequest;
                toAmino(message: _11.QueryEpochsInfoRequest): _11.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _11.QueryEpochsInfoRequestAminoMsg): _11.QueryEpochsInfoRequest;
                fromProtoMsg(message: _11.QueryEpochsInfoRequestProtoMsg): _11.QueryEpochsInfoRequest;
                toProto(message: _11.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _11.QueryEpochsInfoRequest): _11.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _11.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_11.QueryEpochsInfoResponse>): _11.QueryEpochsInfoResponse;
                fromAmino(object: _11.QueryEpochsInfoResponseAmino): _11.QueryEpochsInfoResponse;
                toAmino(message: _11.QueryEpochsInfoResponse): _11.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _11.QueryEpochsInfoResponseAminoMsg): _11.QueryEpochsInfoResponse;
                fromProtoMsg(message: _11.QueryEpochsInfoResponseProtoMsg): _11.QueryEpochsInfoResponse;
                toProto(message: _11.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _11.QueryEpochsInfoResponse): _11.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _11.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_11.QueryCurrentEpochRequest>): _11.QueryCurrentEpochRequest;
                fromAmino(object: _11.QueryCurrentEpochRequestAmino): _11.QueryCurrentEpochRequest;
                toAmino(message: _11.QueryCurrentEpochRequest): _11.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _11.QueryCurrentEpochRequestAminoMsg): _11.QueryCurrentEpochRequest;
                fromProtoMsg(message: _11.QueryCurrentEpochRequestProtoMsg): _11.QueryCurrentEpochRequest;
                toProto(message: _11.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _11.QueryCurrentEpochRequest): _11.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _11.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_11.QueryCurrentEpochResponse>): _11.QueryCurrentEpochResponse;
                fromAmino(object: _11.QueryCurrentEpochResponseAmino): _11.QueryCurrentEpochResponse;
                toAmino(message: _11.QueryCurrentEpochResponse): _11.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _11.QueryCurrentEpochResponseAminoMsg): _11.QueryCurrentEpochResponse;
                fromProtoMsg(message: _11.QueryCurrentEpochResponseProtoMsg): _11.QueryCurrentEpochResponse;
                toProto(message: _11.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _11.QueryCurrentEpochResponse): _11.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _10.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EpochInfo;
                fromPartial(object: Partial<_10.EpochInfo>): _10.EpochInfo;
                fromAmino(object: _10.EpochInfoAmino): _10.EpochInfo;
                toAmino(message: _10.EpochInfo): _10.EpochInfoAmino;
                fromAminoMsg(object: _10.EpochInfoAminoMsg): _10.EpochInfo;
                fromProtoMsg(message: _10.EpochInfoProtoMsg): _10.EpochInfo;
                toProto(message: _10.EpochInfo): Uint8Array;
                toProtoMsg(message: _10.EpochInfo): _10.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _10.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
        };
    }
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _14.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _14.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _14.MsgSubmitQueryResponse;
                    };
                };
                fromJSON: {
                    submitQueryResponse(value: any): {
                        typeUrl: string;
                        value: _14.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _14.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _14.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _14.MsgSubmitQueryResponse) => _14.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _14.MsgSubmitQueryResponseAmino) => _14.MsgSubmitQueryResponse;
                };
            };
            QueryRequestsRequest: {
                typeUrl: string;
                encode(message: _15.QueryRequestsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryRequestsRequest;
                fromPartial(object: Partial<_15.QueryRequestsRequest>): _15.QueryRequestsRequest;
                fromAmino(object: _15.QueryRequestsRequestAmino): _15.QueryRequestsRequest;
                toAmino(message: _15.QueryRequestsRequest): _15.QueryRequestsRequestAmino;
                fromAminoMsg(object: _15.QueryRequestsRequestAminoMsg): _15.QueryRequestsRequest;
                fromProtoMsg(message: _15.QueryRequestsRequestProtoMsg): _15.QueryRequestsRequest;
                toProto(message: _15.QueryRequestsRequest): Uint8Array;
                toProtoMsg(message: _15.QueryRequestsRequest): _15.QueryRequestsRequestProtoMsg;
            };
            QueryRequestsResponse: {
                typeUrl: string;
                encode(message: _15.QueryRequestsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryRequestsResponse;
                fromPartial(object: Partial<_15.QueryRequestsResponse>): _15.QueryRequestsResponse;
                fromAmino(object: _15.QueryRequestsResponseAmino): _15.QueryRequestsResponse;
                toAmino(message: _15.QueryRequestsResponse): _15.QueryRequestsResponseAmino;
                fromAminoMsg(object: _15.QueryRequestsResponseAminoMsg): _15.QueryRequestsResponse;
                fromProtoMsg(message: _15.QueryRequestsResponseProtoMsg): _15.QueryRequestsResponse;
                toProto(message: _15.QueryRequestsResponse): Uint8Array;
                toProtoMsg(message: _15.QueryRequestsResponse): _15.QueryRequestsResponseProtoMsg;
            };
            GetTxWithProofResponse: {
                typeUrl: string;
                encode(message: _15.GetTxWithProofResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GetTxWithProofResponse;
                fromPartial(object: Partial<_15.GetTxWithProofResponse>): _15.GetTxWithProofResponse;
                fromAmino(object: _15.GetTxWithProofResponseAmino): _15.GetTxWithProofResponse;
                toAmino(message: _15.GetTxWithProofResponse): _15.GetTxWithProofResponseAmino;
                fromAminoMsg(object: _15.GetTxWithProofResponseAminoMsg): _15.GetTxWithProofResponse;
                fromProtoMsg(message: _15.GetTxWithProofResponseProtoMsg): _15.GetTxWithProofResponse;
                toProto(message: _15.GetTxWithProofResponse): Uint8Array;
                toProtoMsg(message: _15.GetTxWithProofResponse): _15.GetTxWithProofResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _14.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_14.MsgSubmitQueryResponse>): _14.MsgSubmitQueryResponse;
                fromAmino(object: _14.MsgSubmitQueryResponseAmino): _14.MsgSubmitQueryResponse;
                toAmino(message: _14.MsgSubmitQueryResponse): _14.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _14.MsgSubmitQueryResponseAminoMsg): _14.MsgSubmitQueryResponse;
                fromProtoMsg(message: _14.MsgSubmitQueryResponseProtoMsg): _14.MsgSubmitQueryResponse;
                toProto(message: _14.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _14.MsgSubmitQueryResponse): _14.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _14.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_14.MsgSubmitQueryResponseResponse>): _14.MsgSubmitQueryResponseResponse;
                fromAmino(_: _14.MsgSubmitQueryResponseResponseAmino): _14.MsgSubmitQueryResponseResponse;
                toAmino(_: _14.MsgSubmitQueryResponseResponse): _14.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _14.MsgSubmitQueryResponseResponseAminoMsg): _14.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _14.MsgSubmitQueryResponseResponseProtoMsg): _14.MsgSubmitQueryResponseResponse;
                toProto(message: _14.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _14.MsgSubmitQueryResponseResponse): _14.MsgSubmitQueryResponseResponseProtoMsg;
            };
            Query: {
                typeUrl: string;
                encode(message: _13.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Query;
                fromPartial(object: Partial<_13.Query>): _13.Query;
                fromAmino(object: _13.QueryAmino): _13.Query;
                toAmino(message: _13.Query): _13.QueryAmino;
                fromAminoMsg(object: _13.QueryAminoMsg): _13.Query;
                fromProtoMsg(message: _13.QueryProtoMsg): _13.Query;
                toProto(message: _13.Query): Uint8Array;
                toProtoMsg(message: _13.Query): _13.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _13.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.DataPoint;
                fromPartial(object: Partial<_13.DataPoint>): _13.DataPoint;
                fromAmino(object: _13.DataPointAmino): _13.DataPoint;
                toAmino(message: _13.DataPoint): _13.DataPointAmino;
                fromAminoMsg(object: _13.DataPointAminoMsg): _13.DataPoint;
                fromProtoMsg(message: _13.DataPointProtoMsg): _13.DataPoint;
                toProto(message: _13.DataPoint): Uint8Array;
                toProtoMsg(message: _13.DataPoint): _13.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _12.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.GenesisState;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
        };
    }
    namespace interchainstaking {
        const v1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                zones(request?: _20.QueryZonesRequest): Promise<_20.QueryZonesResponse>;
                zone(request: _20.QueryZoneRequest): Promise<_20.QueryZoneResponse>;
                zoneValidators(request: _20.QueryZoneValidatorsRequest): Promise<_20.QueryZoneValidatorsResponse>;
                depositAccount(request: _20.QueryDepositAccountForChainRequest): Promise<_20.QueryDepositAccountForChainResponse>;
                delegatorIntent(request: _20.QueryDelegatorIntentRequest): Promise<_20.QueryDelegatorIntentResponse>;
                delegatorIntents(request: _20.QueryDelegatorIntentsRequest): Promise<_20.QueryDelegatorIntentsResponse>;
                delegations(request: _20.QueryDelegationsRequest): Promise<_20.QueryDelegationsResponse>;
                receipts(request: _20.QueryReceiptsRequest): Promise<_20.QueryReceiptsResponse>;
                txStatus(request: _20.QueryTxStatusRequest): Promise<_20.QueryTxStatusResponse>;
                zoneWithdrawalRecords(request: _20.QueryWithdrawalRecordsRequest): Promise<_20.QueryWithdrawalRecordsResponse>;
                withdrawalRecords(request: _20.QueryWithdrawalRecordsRequest): Promise<_20.QueryWithdrawalRecordsResponse>;
                userWithdrawalRecords(request: _20.QueryUserWithdrawalRecordsRequest): Promise<_20.QueryWithdrawalRecordsResponse>;
                unbondingRecords(request: _20.QueryUnbondingRecordsRequest): Promise<_20.QueryUnbondingRecordsResponse>;
                redelegationRecords(request: _20.QueryRedelegationRecordsRequest): Promise<_20.QueryRedelegationRecordsResponse>;
                mappedAccounts(request: _20.QueryMappedAccountsRequest): Promise<_20.QueryMappedAccountsResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    requestRedemption(value: _18.MsgRequestRedemption): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    signalIntent(value: _18.MsgSignalIntent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelRedemption(value: _18.MsgCancelQueuedRedemption): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govCloseChannel(value: _19.MsgGovCloseChannel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govReopenChannel(value: _19.MsgGovReopenChannel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govSetLsmCaps(value: _19.MsgGovSetLsmCaps): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govAddValidatorDenyList(value: _19.MsgGovAddValidatorDenyList): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govRemoveValidatorDenyList(value: _19.MsgGovRemoveValidatorDenyList): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    requestRedemption(value: _18.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _18.MsgRequestRedemption;
                    };
                    signalIntent(value: _18.MsgSignalIntent): {
                        typeUrl: string;
                        value: _18.MsgSignalIntent;
                    };
                    cancelRedemption(value: _18.MsgCancelQueuedRedemption): {
                        typeUrl: string;
                        value: _18.MsgCancelQueuedRedemption;
                    };
                    govCloseChannel(value: _19.MsgGovCloseChannel): {
                        typeUrl: string;
                        value: _19.MsgGovCloseChannel;
                    };
                    govReopenChannel(value: _19.MsgGovReopenChannel): {
                        typeUrl: string;
                        value: _19.MsgGovReopenChannel;
                    };
                    govSetLsmCaps(value: _19.MsgGovSetLsmCaps): {
                        typeUrl: string;
                        value: _19.MsgGovSetLsmCaps;
                    };
                    govAddValidatorDenyList(value: _19.MsgGovAddValidatorDenyList): {
                        typeUrl: string;
                        value: _19.MsgGovAddValidatorDenyList;
                    };
                    govRemoveValidatorDenyList(value: _19.MsgGovRemoveValidatorDenyList): {
                        typeUrl: string;
                        value: _19.MsgGovRemoveValidatorDenyList;
                    };
                };
                fromJSON: {
                    requestRedemption(value: any): {
                        typeUrl: string;
                        value: _18.MsgRequestRedemption;
                    };
                    signalIntent(value: any): {
                        typeUrl: string;
                        value: _18.MsgSignalIntent;
                    };
                    cancelRedemption(value: any): {
                        typeUrl: string;
                        value: _18.MsgCancelQueuedRedemption;
                    };
                    govCloseChannel(value: any): {
                        typeUrl: string;
                        value: _19.MsgGovCloseChannel;
                    };
                    govReopenChannel(value: any): {
                        typeUrl: string;
                        value: _19.MsgGovReopenChannel;
                    };
                    govSetLsmCaps(value: any): {
                        typeUrl: string;
                        value: _19.MsgGovSetLsmCaps;
                    };
                    govAddValidatorDenyList(value: any): {
                        typeUrl: string;
                        value: _19.MsgGovAddValidatorDenyList;
                    };
                    govRemoveValidatorDenyList(value: any): {
                        typeUrl: string;
                        value: _19.MsgGovRemoveValidatorDenyList;
                    };
                };
                fromPartial: {
                    requestRedemption(value: _18.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _18.MsgRequestRedemption;
                    };
                    signalIntent(value: _18.MsgSignalIntent): {
                        typeUrl: string;
                        value: _18.MsgSignalIntent;
                    };
                    cancelRedemption(value: _18.MsgCancelQueuedRedemption): {
                        typeUrl: string;
                        value: _18.MsgCancelQueuedRedemption;
                    };
                    govCloseChannel(value: _19.MsgGovCloseChannel): {
                        typeUrl: string;
                        value: _19.MsgGovCloseChannel;
                    };
                    govReopenChannel(value: _19.MsgGovReopenChannel): {
                        typeUrl: string;
                        value: _19.MsgGovReopenChannel;
                    };
                    govSetLsmCaps(value: _19.MsgGovSetLsmCaps): {
                        typeUrl: string;
                        value: _19.MsgGovSetLsmCaps;
                    };
                    govAddValidatorDenyList(value: _19.MsgGovAddValidatorDenyList): {
                        typeUrl: string;
                        value: _19.MsgGovAddValidatorDenyList;
                    };
                    govRemoveValidatorDenyList(value: _19.MsgGovRemoveValidatorDenyList): {
                        typeUrl: string;
                        value: _19.MsgGovRemoveValidatorDenyList;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.interchainstaking.v1.MsgRequestRedemption": {
                    aminoType: string;
                    toAmino: (message: _18.MsgRequestRedemption) => _18.MsgRequestRedemptionAmino;
                    fromAmino: (object: _18.MsgRequestRedemptionAmino) => _18.MsgRequestRedemption;
                };
                "/quicksilver.interchainstaking.v1.MsgSignalIntent": {
                    aminoType: string;
                    toAmino: (message: _18.MsgSignalIntent) => _18.MsgSignalIntentAmino;
                    fromAmino: (object: _18.MsgSignalIntentAmino) => _18.MsgSignalIntent;
                };
                "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption": {
                    aminoType: string;
                    toAmino: (message: _18.MsgCancelQueuedRedemption) => _18.MsgCancelQueuedRedemptionAmino;
                    fromAmino: (object: _18.MsgCancelQueuedRedemptionAmino) => _18.MsgCancelQueuedRedemption;
                };
                "/quicksilver.interchainstaking.v1.MsgGovCloseChannel": {
                    aminoType: string;
                    toAmino: (message: _19.MsgGovCloseChannel) => _19.MsgGovCloseChannelAmino;
                    fromAmino: (object: _19.MsgGovCloseChannelAmino) => _19.MsgGovCloseChannel;
                };
                "/quicksilver.interchainstaking.v1.MsgGovReopenChannel": {
                    aminoType: string;
                    toAmino: (message: _19.MsgGovReopenChannel) => _19.MsgGovReopenChannelAmino;
                    fromAmino: (object: _19.MsgGovReopenChannelAmino) => _19.MsgGovReopenChannel;
                };
                "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps": {
                    aminoType: string;
                    toAmino: (message: _19.MsgGovSetLsmCaps) => _19.MsgGovSetLsmCapsAmino;
                    fromAmino: (object: _19.MsgGovSetLsmCapsAmino) => _19.MsgGovSetLsmCaps;
                };
                "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList": {
                    aminoType: string;
                    toAmino: (message: _19.MsgGovAddValidatorDenyList) => _19.MsgGovAddValidatorDenyListAmino;
                    fromAmino: (object: _19.MsgGovAddValidatorDenyListAmino) => _19.MsgGovAddValidatorDenyList;
                };
                "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList": {
                    aminoType: string;
                    toAmino: (message: _19.MsgGovRemoveValidatorDenyList) => _19.MsgGovRemoveValidatorDenyListAmino;
                    fromAmino: (object: _19.MsgGovRemoveValidatorDenyListAmino) => _19.MsgGovRemoveValidatorDenyList;
                };
            };
            Statistics: {
                typeUrl: string;
                encode(message: _20.Statistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Statistics;
                fromPartial(object: Partial<_20.Statistics>): _20.Statistics;
                fromAmino(object: _20.StatisticsAmino): _20.Statistics;
                toAmino(message: _20.Statistics): _20.StatisticsAmino;
                fromAminoMsg(object: _20.StatisticsAminoMsg): _20.Statistics;
                fromProtoMsg(message: _20.StatisticsProtoMsg): _20.Statistics;
                toProto(message: _20.Statistics): Uint8Array;
                toProtoMsg(message: _20.Statistics): _20.StatisticsProtoMsg;
            };
            QueryZonesRequest: {
                typeUrl: string;
                encode(message: _20.QueryZonesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryZonesRequest;
                fromPartial(object: Partial<_20.QueryZonesRequest>): _20.QueryZonesRequest;
                fromAmino(object: _20.QueryZonesRequestAmino): _20.QueryZonesRequest;
                toAmino(message: _20.QueryZonesRequest): _20.QueryZonesRequestAmino;
                fromAminoMsg(object: _20.QueryZonesRequestAminoMsg): _20.QueryZonesRequest;
                fromProtoMsg(message: _20.QueryZonesRequestProtoMsg): _20.QueryZonesRequest;
                toProto(message: _20.QueryZonesRequest): Uint8Array;
                toProtoMsg(message: _20.QueryZonesRequest): _20.QueryZonesRequestProtoMsg;
            };
            QueryZonesResponse: {
                typeUrl: string;
                encode(message: _20.QueryZonesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryZonesResponse;
                fromPartial(object: Partial<_20.QueryZonesResponse>): _20.QueryZonesResponse;
                fromAmino(object: _20.QueryZonesResponseAmino): _20.QueryZonesResponse;
                toAmino(message: _20.QueryZonesResponse): _20.QueryZonesResponseAmino;
                fromAminoMsg(object: _20.QueryZonesResponseAminoMsg): _20.QueryZonesResponse;
                fromProtoMsg(message: _20.QueryZonesResponseProtoMsg): _20.QueryZonesResponse;
                toProto(message: _20.QueryZonesResponse): Uint8Array;
                toProtoMsg(message: _20.QueryZonesResponse): _20.QueryZonesResponseProtoMsg;
            };
            QueryZoneRequest: {
                typeUrl: string;
                encode(message: _20.QueryZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryZoneRequest;
                fromPartial(object: Partial<_20.QueryZoneRequest>): _20.QueryZoneRequest;
                fromAmino(object: _20.QueryZoneRequestAmino): _20.QueryZoneRequest;
                toAmino(message: _20.QueryZoneRequest): _20.QueryZoneRequestAmino;
                fromAminoMsg(object: _20.QueryZoneRequestAminoMsg): _20.QueryZoneRequest;
                fromProtoMsg(message: _20.QueryZoneRequestProtoMsg): _20.QueryZoneRequest;
                toProto(message: _20.QueryZoneRequest): Uint8Array;
                toProtoMsg(message: _20.QueryZoneRequest): _20.QueryZoneRequestProtoMsg;
            };
            QueryZoneResponse: {
                typeUrl: string;
                encode(message: _20.QueryZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryZoneResponse;
                fromPartial(object: Partial<_20.QueryZoneResponse>): _20.QueryZoneResponse;
                fromAmino(object: _20.QueryZoneResponseAmino): _20.QueryZoneResponse;
                toAmino(message: _20.QueryZoneResponse): _20.QueryZoneResponseAmino;
                fromAminoMsg(object: _20.QueryZoneResponseAminoMsg): _20.QueryZoneResponse;
                fromProtoMsg(message: _20.QueryZoneResponseProtoMsg): _20.QueryZoneResponse;
                toProto(message: _20.QueryZoneResponse): Uint8Array;
                toProtoMsg(message: _20.QueryZoneResponse): _20.QueryZoneResponseProtoMsg;
            };
            QueryZoneValidatorsRequest: {
                typeUrl: string;
                encode(message: _20.QueryZoneValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryZoneValidatorsRequest;
                fromPartial(object: Partial<_20.QueryZoneValidatorsRequest>): _20.QueryZoneValidatorsRequest;
                fromAmino(object: _20.QueryZoneValidatorsRequestAmino): _20.QueryZoneValidatorsRequest;
                toAmino(message: _20.QueryZoneValidatorsRequest): _20.QueryZoneValidatorsRequestAmino;
                fromAminoMsg(object: _20.QueryZoneValidatorsRequestAminoMsg): _20.QueryZoneValidatorsRequest;
                fromProtoMsg(message: _20.QueryZoneValidatorsRequestProtoMsg): _20.QueryZoneValidatorsRequest;
                toProto(message: _20.QueryZoneValidatorsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryZoneValidatorsRequest): _20.QueryZoneValidatorsRequestProtoMsg;
            };
            QueryZoneValidatorsResponse: {
                typeUrl: string;
                encode(message: _20.QueryZoneValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryZoneValidatorsResponse;
                fromPartial(object: Partial<_20.QueryZoneValidatorsResponse>): _20.QueryZoneValidatorsResponse;
                fromAmino(object: _20.QueryZoneValidatorsResponseAmino): _20.QueryZoneValidatorsResponse;
                toAmino(message: _20.QueryZoneValidatorsResponse): _20.QueryZoneValidatorsResponseAmino;
                fromAminoMsg(object: _20.QueryZoneValidatorsResponseAminoMsg): _20.QueryZoneValidatorsResponse;
                fromProtoMsg(message: _20.QueryZoneValidatorsResponseProtoMsg): _20.QueryZoneValidatorsResponse;
                toProto(message: _20.QueryZoneValidatorsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryZoneValidatorsResponse): _20.QueryZoneValidatorsResponseProtoMsg;
            };
            QueryDepositAccountForChainRequest: {
                typeUrl: string;
                encode(message: _20.QueryDepositAccountForChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDepositAccountForChainRequest;
                fromPartial(object: Partial<_20.QueryDepositAccountForChainRequest>): _20.QueryDepositAccountForChainRequest;
                fromAmino(object: _20.QueryDepositAccountForChainRequestAmino): _20.QueryDepositAccountForChainRequest;
                toAmino(message: _20.QueryDepositAccountForChainRequest): _20.QueryDepositAccountForChainRequestAmino;
                fromAminoMsg(object: _20.QueryDepositAccountForChainRequestAminoMsg): _20.QueryDepositAccountForChainRequest;
                fromProtoMsg(message: _20.QueryDepositAccountForChainRequestProtoMsg): _20.QueryDepositAccountForChainRequest;
                toProto(message: _20.QueryDepositAccountForChainRequest): Uint8Array;
                toProtoMsg(message: _20.QueryDepositAccountForChainRequest): _20.QueryDepositAccountForChainRequestProtoMsg;
            };
            QueryDepositAccountForChainResponse: {
                typeUrl: string;
                encode(message: _20.QueryDepositAccountForChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDepositAccountForChainResponse;
                fromPartial(object: Partial<_20.QueryDepositAccountForChainResponse>): _20.QueryDepositAccountForChainResponse;
                fromAmino(object: _20.QueryDepositAccountForChainResponseAmino): _20.QueryDepositAccountForChainResponse;
                toAmino(message: _20.QueryDepositAccountForChainResponse): _20.QueryDepositAccountForChainResponseAmino;
                fromAminoMsg(object: _20.QueryDepositAccountForChainResponseAminoMsg): _20.QueryDepositAccountForChainResponse;
                fromProtoMsg(message: _20.QueryDepositAccountForChainResponseProtoMsg): _20.QueryDepositAccountForChainResponse;
                toProto(message: _20.QueryDepositAccountForChainResponse): Uint8Array;
                toProtoMsg(message: _20.QueryDepositAccountForChainResponse): _20.QueryDepositAccountForChainResponseProtoMsg;
            };
            QueryDelegatorIntentRequest: {
                typeUrl: string;
                encode(message: _20.QueryDelegatorIntentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDelegatorIntentRequest;
                fromPartial(object: Partial<_20.QueryDelegatorIntentRequest>): _20.QueryDelegatorIntentRequest;
                fromAmino(object: _20.QueryDelegatorIntentRequestAmino): _20.QueryDelegatorIntentRequest;
                toAmino(message: _20.QueryDelegatorIntentRequest): _20.QueryDelegatorIntentRequestAmino;
                fromAminoMsg(object: _20.QueryDelegatorIntentRequestAminoMsg): _20.QueryDelegatorIntentRequest;
                fromProtoMsg(message: _20.QueryDelegatorIntentRequestProtoMsg): _20.QueryDelegatorIntentRequest;
                toProto(message: _20.QueryDelegatorIntentRequest): Uint8Array;
                toProtoMsg(message: _20.QueryDelegatorIntentRequest): _20.QueryDelegatorIntentRequestProtoMsg;
            };
            QueryDelegatorIntentResponse: {
                typeUrl: string;
                encode(message: _20.QueryDelegatorIntentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDelegatorIntentResponse;
                fromPartial(object: Partial<_20.QueryDelegatorIntentResponse>): _20.QueryDelegatorIntentResponse;
                fromAmino(object: _20.QueryDelegatorIntentResponseAmino): _20.QueryDelegatorIntentResponse;
                toAmino(message: _20.QueryDelegatorIntentResponse): _20.QueryDelegatorIntentResponseAmino;
                fromAminoMsg(object: _20.QueryDelegatorIntentResponseAminoMsg): _20.QueryDelegatorIntentResponse;
                fromProtoMsg(message: _20.QueryDelegatorIntentResponseProtoMsg): _20.QueryDelegatorIntentResponse;
                toProto(message: _20.QueryDelegatorIntentResponse): Uint8Array;
                toProtoMsg(message: _20.QueryDelegatorIntentResponse): _20.QueryDelegatorIntentResponseProtoMsg;
            };
            QueryDelegatorIntentsRequest: {
                typeUrl: string;
                encode(message: _20.QueryDelegatorIntentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDelegatorIntentsRequest;
                fromPartial(object: Partial<_20.QueryDelegatorIntentsRequest>): _20.QueryDelegatorIntentsRequest;
                fromAmino(object: _20.QueryDelegatorIntentsRequestAmino): _20.QueryDelegatorIntentsRequest;
                toAmino(message: _20.QueryDelegatorIntentsRequest): _20.QueryDelegatorIntentsRequestAmino;
                fromAminoMsg(object: _20.QueryDelegatorIntentsRequestAminoMsg): _20.QueryDelegatorIntentsRequest;
                fromProtoMsg(message: _20.QueryDelegatorIntentsRequestProtoMsg): _20.QueryDelegatorIntentsRequest;
                toProto(message: _20.QueryDelegatorIntentsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryDelegatorIntentsRequest): _20.QueryDelegatorIntentsRequestProtoMsg;
            };
            DelegatorIntentsResponse: {
                typeUrl: string;
                encode(message: _20.DelegatorIntentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.DelegatorIntentsResponse;
                fromPartial(object: Partial<_20.DelegatorIntentsResponse>): _20.DelegatorIntentsResponse;
                fromAmino(object: _20.DelegatorIntentsResponseAmino): _20.DelegatorIntentsResponse;
                toAmino(message: _20.DelegatorIntentsResponse): _20.DelegatorIntentsResponseAmino;
                fromAminoMsg(object: _20.DelegatorIntentsResponseAminoMsg): _20.DelegatorIntentsResponse;
                fromProtoMsg(message: _20.DelegatorIntentsResponseProtoMsg): _20.DelegatorIntentsResponse;
                toProto(message: _20.DelegatorIntentsResponse): Uint8Array;
                toProtoMsg(message: _20.DelegatorIntentsResponse): _20.DelegatorIntentsResponseProtoMsg;
            };
            QueryDelegatorIntentsResponse: {
                typeUrl: string;
                encode(message: _20.QueryDelegatorIntentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDelegatorIntentsResponse;
                fromPartial(object: Partial<_20.QueryDelegatorIntentsResponse>): _20.QueryDelegatorIntentsResponse;
                fromAmino(object: _20.QueryDelegatorIntentsResponseAmino): _20.QueryDelegatorIntentsResponse;
                toAmino(message: _20.QueryDelegatorIntentsResponse): _20.QueryDelegatorIntentsResponseAmino;
                fromAminoMsg(object: _20.QueryDelegatorIntentsResponseAminoMsg): _20.QueryDelegatorIntentsResponse;
                fromProtoMsg(message: _20.QueryDelegatorIntentsResponseProtoMsg): _20.QueryDelegatorIntentsResponse;
                toProto(message: _20.QueryDelegatorIntentsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryDelegatorIntentsResponse): _20.QueryDelegatorIntentsResponseProtoMsg;
            };
            QueryDelegationsRequest: {
                typeUrl: string;
                encode(message: _20.QueryDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDelegationsRequest;
                fromPartial(object: Partial<_20.QueryDelegationsRequest>): _20.QueryDelegationsRequest;
                fromAmino(object: _20.QueryDelegationsRequestAmino): _20.QueryDelegationsRequest;
                toAmino(message: _20.QueryDelegationsRequest): _20.QueryDelegationsRequestAmino;
                fromAminoMsg(object: _20.QueryDelegationsRequestAminoMsg): _20.QueryDelegationsRequest;
                fromProtoMsg(message: _20.QueryDelegationsRequestProtoMsg): _20.QueryDelegationsRequest;
                toProto(message: _20.QueryDelegationsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryDelegationsRequest): _20.QueryDelegationsRequestProtoMsg;
            };
            QueryDelegationsResponse: {
                typeUrl: string;
                encode(message: _20.QueryDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDelegationsResponse;
                fromPartial(object: Partial<_20.QueryDelegationsResponse>): _20.QueryDelegationsResponse;
                fromAmino(object: _20.QueryDelegationsResponseAmino): _20.QueryDelegationsResponse;
                toAmino(message: _20.QueryDelegationsResponse): _20.QueryDelegationsResponseAmino;
                fromAminoMsg(object: _20.QueryDelegationsResponseAminoMsg): _20.QueryDelegationsResponse;
                fromProtoMsg(message: _20.QueryDelegationsResponseProtoMsg): _20.QueryDelegationsResponse;
                toProto(message: _20.QueryDelegationsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryDelegationsResponse): _20.QueryDelegationsResponseProtoMsg;
            };
            QueryReceiptsRequest: {
                typeUrl: string;
                encode(message: _20.QueryReceiptsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryReceiptsRequest;
                fromPartial(object: Partial<_20.QueryReceiptsRequest>): _20.QueryReceiptsRequest;
                fromAmino(object: _20.QueryReceiptsRequestAmino): _20.QueryReceiptsRequest;
                toAmino(message: _20.QueryReceiptsRequest): _20.QueryReceiptsRequestAmino;
                fromAminoMsg(object: _20.QueryReceiptsRequestAminoMsg): _20.QueryReceiptsRequest;
                fromProtoMsg(message: _20.QueryReceiptsRequestProtoMsg): _20.QueryReceiptsRequest;
                toProto(message: _20.QueryReceiptsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryReceiptsRequest): _20.QueryReceiptsRequestProtoMsg;
            };
            QueryReceiptsResponse: {
                typeUrl: string;
                encode(message: _20.QueryReceiptsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryReceiptsResponse;
                fromPartial(object: Partial<_20.QueryReceiptsResponse>): _20.QueryReceiptsResponse;
                fromAmino(object: _20.QueryReceiptsResponseAmino): _20.QueryReceiptsResponse;
                toAmino(message: _20.QueryReceiptsResponse): _20.QueryReceiptsResponseAmino;
                fromAminoMsg(object: _20.QueryReceiptsResponseAminoMsg): _20.QueryReceiptsResponse;
                fromProtoMsg(message: _20.QueryReceiptsResponseProtoMsg): _20.QueryReceiptsResponse;
                toProto(message: _20.QueryReceiptsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryReceiptsResponse): _20.QueryReceiptsResponseProtoMsg;
            };
            QueryTxStatusRequest: {
                typeUrl: string;
                encode(message: _20.QueryTxStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryTxStatusRequest;
                fromPartial(object: Partial<_20.QueryTxStatusRequest>): _20.QueryTxStatusRequest;
                fromAmino(object: _20.QueryTxStatusRequestAmino): _20.QueryTxStatusRequest;
                toAmino(message: _20.QueryTxStatusRequest): _20.QueryTxStatusRequestAmino;
                fromAminoMsg(object: _20.QueryTxStatusRequestAminoMsg): _20.QueryTxStatusRequest;
                fromProtoMsg(message: _20.QueryTxStatusRequestProtoMsg): _20.QueryTxStatusRequest;
                toProto(message: _20.QueryTxStatusRequest): Uint8Array;
                toProtoMsg(message: _20.QueryTxStatusRequest): _20.QueryTxStatusRequestProtoMsg;
            };
            QueryTxStatusResponse: {
                typeUrl: string;
                encode(message: _20.QueryTxStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryTxStatusResponse;
                fromPartial(object: Partial<_20.QueryTxStatusResponse>): _20.QueryTxStatusResponse;
                fromAmino(object: _20.QueryTxStatusResponseAmino): _20.QueryTxStatusResponse;
                toAmino(message: _20.QueryTxStatusResponse): _20.QueryTxStatusResponseAmino;
                fromAminoMsg(object: _20.QueryTxStatusResponseAminoMsg): _20.QueryTxStatusResponse;
                fromProtoMsg(message: _20.QueryTxStatusResponseProtoMsg): _20.QueryTxStatusResponse;
                toProto(message: _20.QueryTxStatusResponse): Uint8Array;
                toProtoMsg(message: _20.QueryTxStatusResponse): _20.QueryTxStatusResponseProtoMsg;
            };
            QueryWithdrawalRecordsRequest: {
                typeUrl: string;
                encode(message: _20.QueryWithdrawalRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryWithdrawalRecordsRequest;
                fromPartial(object: Partial<_20.QueryWithdrawalRecordsRequest>): _20.QueryWithdrawalRecordsRequest;
                fromAmino(object: _20.QueryWithdrawalRecordsRequestAmino): _20.QueryWithdrawalRecordsRequest;
                toAmino(message: _20.QueryWithdrawalRecordsRequest): _20.QueryWithdrawalRecordsRequestAmino;
                fromAminoMsg(object: _20.QueryWithdrawalRecordsRequestAminoMsg): _20.QueryWithdrawalRecordsRequest;
                fromProtoMsg(message: _20.QueryWithdrawalRecordsRequestProtoMsg): _20.QueryWithdrawalRecordsRequest;
                toProto(message: _20.QueryWithdrawalRecordsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryWithdrawalRecordsRequest): _20.QueryWithdrawalRecordsRequestProtoMsg;
            };
            QueryWithdrawalRecordsResponse: {
                typeUrl: string;
                encode(message: _20.QueryWithdrawalRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryWithdrawalRecordsResponse;
                fromPartial(object: Partial<_20.QueryWithdrawalRecordsResponse>): _20.QueryWithdrawalRecordsResponse;
                fromAmino(object: _20.QueryWithdrawalRecordsResponseAmino): _20.QueryWithdrawalRecordsResponse;
                toAmino(message: _20.QueryWithdrawalRecordsResponse): _20.QueryWithdrawalRecordsResponseAmino;
                fromAminoMsg(object: _20.QueryWithdrawalRecordsResponseAminoMsg): _20.QueryWithdrawalRecordsResponse;
                fromProtoMsg(message: _20.QueryWithdrawalRecordsResponseProtoMsg): _20.QueryWithdrawalRecordsResponse;
                toProto(message: _20.QueryWithdrawalRecordsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryWithdrawalRecordsResponse): _20.QueryWithdrawalRecordsResponseProtoMsg;
            };
            QueryUserWithdrawalRecordsRequest: {
                typeUrl: string;
                encode(message: _20.QueryUserWithdrawalRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryUserWithdrawalRecordsRequest;
                fromPartial(object: Partial<_20.QueryUserWithdrawalRecordsRequest>): _20.QueryUserWithdrawalRecordsRequest;
                fromAmino(object: _20.QueryUserWithdrawalRecordsRequestAmino): _20.QueryUserWithdrawalRecordsRequest;
                toAmino(message: _20.QueryUserWithdrawalRecordsRequest): _20.QueryUserWithdrawalRecordsRequestAmino;
                fromAminoMsg(object: _20.QueryUserWithdrawalRecordsRequestAminoMsg): _20.QueryUserWithdrawalRecordsRequest;
                fromProtoMsg(message: _20.QueryUserWithdrawalRecordsRequestProtoMsg): _20.QueryUserWithdrawalRecordsRequest;
                toProto(message: _20.QueryUserWithdrawalRecordsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryUserWithdrawalRecordsRequest): _20.QueryUserWithdrawalRecordsRequestProtoMsg;
            };
            QueryUnbondingRecordsRequest: {
                typeUrl: string;
                encode(message: _20.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryUnbondingRecordsRequest;
                fromPartial(object: Partial<_20.QueryUnbondingRecordsRequest>): _20.QueryUnbondingRecordsRequest;
                fromAmino(object: _20.QueryUnbondingRecordsRequestAmino): _20.QueryUnbondingRecordsRequest;
                toAmino(message: _20.QueryUnbondingRecordsRequest): _20.QueryUnbondingRecordsRequestAmino;
                fromAminoMsg(object: _20.QueryUnbondingRecordsRequestAminoMsg): _20.QueryUnbondingRecordsRequest;
                fromProtoMsg(message: _20.QueryUnbondingRecordsRequestProtoMsg): _20.QueryUnbondingRecordsRequest;
                toProto(message: _20.QueryUnbondingRecordsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryUnbondingRecordsRequest): _20.QueryUnbondingRecordsRequestProtoMsg;
            };
            QueryUnbondingRecordsResponse: {
                typeUrl: string;
                encode(message: _20.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryUnbondingRecordsResponse;
                fromPartial(object: Partial<_20.QueryUnbondingRecordsResponse>): _20.QueryUnbondingRecordsResponse;
                fromAmino(object: _20.QueryUnbondingRecordsResponseAmino): _20.QueryUnbondingRecordsResponse;
                toAmino(message: _20.QueryUnbondingRecordsResponse): _20.QueryUnbondingRecordsResponseAmino;
                fromAminoMsg(object: _20.QueryUnbondingRecordsResponseAminoMsg): _20.QueryUnbondingRecordsResponse;
                fromProtoMsg(message: _20.QueryUnbondingRecordsResponseProtoMsg): _20.QueryUnbondingRecordsResponse;
                toProto(message: _20.QueryUnbondingRecordsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryUnbondingRecordsResponse): _20.QueryUnbondingRecordsResponseProtoMsg;
            };
            QueryRedelegationRecordsRequest: {
                typeUrl: string;
                encode(message: _20.QueryRedelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryRedelegationRecordsRequest;
                fromPartial(object: Partial<_20.QueryRedelegationRecordsRequest>): _20.QueryRedelegationRecordsRequest;
                fromAmino(object: _20.QueryRedelegationRecordsRequestAmino): _20.QueryRedelegationRecordsRequest;
                toAmino(message: _20.QueryRedelegationRecordsRequest): _20.QueryRedelegationRecordsRequestAmino;
                fromAminoMsg(object: _20.QueryRedelegationRecordsRequestAminoMsg): _20.QueryRedelegationRecordsRequest;
                fromProtoMsg(message: _20.QueryRedelegationRecordsRequestProtoMsg): _20.QueryRedelegationRecordsRequest;
                toProto(message: _20.QueryRedelegationRecordsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryRedelegationRecordsRequest): _20.QueryRedelegationRecordsRequestProtoMsg;
            };
            QueryRedelegationRecordsResponse: {
                typeUrl: string;
                encode(message: _20.QueryRedelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryRedelegationRecordsResponse;
                fromPartial(object: Partial<_20.QueryRedelegationRecordsResponse>): _20.QueryRedelegationRecordsResponse;
                fromAmino(object: _20.QueryRedelegationRecordsResponseAmino): _20.QueryRedelegationRecordsResponse;
                toAmino(message: _20.QueryRedelegationRecordsResponse): _20.QueryRedelegationRecordsResponseAmino;
                fromAminoMsg(object: _20.QueryRedelegationRecordsResponseAminoMsg): _20.QueryRedelegationRecordsResponse;
                fromProtoMsg(message: _20.QueryRedelegationRecordsResponseProtoMsg): _20.QueryRedelegationRecordsResponse;
                toProto(message: _20.QueryRedelegationRecordsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryRedelegationRecordsResponse): _20.QueryRedelegationRecordsResponseProtoMsg;
            };
            QueryMappedAccountsRequest: {
                typeUrl: string;
                encode(message: _20.QueryMappedAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryMappedAccountsRequest;
                fromPartial(object: Partial<_20.QueryMappedAccountsRequest>): _20.QueryMappedAccountsRequest;
                fromAmino(object: _20.QueryMappedAccountsRequestAmino): _20.QueryMappedAccountsRequest;
                toAmino(message: _20.QueryMappedAccountsRequest): _20.QueryMappedAccountsRequestAmino;
                fromAminoMsg(object: _20.QueryMappedAccountsRequestAminoMsg): _20.QueryMappedAccountsRequest;
                fromProtoMsg(message: _20.QueryMappedAccountsRequestProtoMsg): _20.QueryMappedAccountsRequest;
                toProto(message: _20.QueryMappedAccountsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryMappedAccountsRequest): _20.QueryMappedAccountsRequestProtoMsg;
            };
            QueryMappedAccountsResponse_RemoteAddressMapEntry: {
                encode(message: _20.QueryMappedAccountsResponse_RemoteAddressMapEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                fromPartial(object: Partial<_20.QueryMappedAccountsResponse_RemoteAddressMapEntry>): _20.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                fromAmino(object: _20.QueryMappedAccountsResponse_RemoteAddressMapEntryAmino): _20.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                toAmino(message: _20.QueryMappedAccountsResponse_RemoteAddressMapEntry): _20.QueryMappedAccountsResponse_RemoteAddressMapEntryAmino;
                fromAminoMsg(object: _20.QueryMappedAccountsResponse_RemoteAddressMapEntryAminoMsg): _20.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                fromProtoMsg(message: _20.QueryMappedAccountsResponse_RemoteAddressMapEntryProtoMsg): _20.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                toProto(message: _20.QueryMappedAccountsResponse_RemoteAddressMapEntry): Uint8Array;
            };
            QueryMappedAccountsResponse: {
                typeUrl: string;
                encode(message: _20.QueryMappedAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryMappedAccountsResponse;
                fromPartial(object: Partial<_20.QueryMappedAccountsResponse>): _20.QueryMappedAccountsResponse;
                fromAmino(object: _20.QueryMappedAccountsResponseAmino): _20.QueryMappedAccountsResponse;
                toAmino(message: _20.QueryMappedAccountsResponse): _20.QueryMappedAccountsResponseAmino;
                fromAminoMsg(object: _20.QueryMappedAccountsResponseAminoMsg): _20.QueryMappedAccountsResponse;
                fromProtoMsg(message: _20.QueryMappedAccountsResponseProtoMsg): _20.QueryMappedAccountsResponse;
                toProto(message: _20.QueryMappedAccountsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryMappedAccountsResponse): _20.QueryMappedAccountsResponseProtoMsg;
            };
            QueryDenyListRequest: {
                typeUrl: string;
                encode(message: _20.QueryDenyListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDenyListRequest;
                fromPartial(object: Partial<_20.QueryDenyListRequest>): _20.QueryDenyListRequest;
                fromAmino(object: _20.QueryDenyListRequestAmino): _20.QueryDenyListRequest;
                toAmino(message: _20.QueryDenyListRequest): _20.QueryDenyListRequestAmino;
                fromAminoMsg(object: _20.QueryDenyListRequestAminoMsg): _20.QueryDenyListRequest;
                fromProtoMsg(message: _20.QueryDenyListRequestProtoMsg): _20.QueryDenyListRequest;
                toProto(message: _20.QueryDenyListRequest): Uint8Array;
                toProtoMsg(message: _20.QueryDenyListRequest): _20.QueryDenyListRequestProtoMsg;
            };
            QueryDenyListResponse: {
                typeUrl: string;
                encode(message: _20.QueryDenyListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryDenyListResponse;
                fromPartial(object: Partial<_20.QueryDenyListResponse>): _20.QueryDenyListResponse;
                fromAmino(object: _20.QueryDenyListResponseAmino): _20.QueryDenyListResponse;
                toAmino(message: _20.QueryDenyListResponse): _20.QueryDenyListResponseAmino;
                fromAminoMsg(object: _20.QueryDenyListResponseAminoMsg): _20.QueryDenyListResponse;
                fromProtoMsg(message: _20.QueryDenyListResponseProtoMsg): _20.QueryDenyListResponse;
                toProto(message: _20.QueryDenyListResponse): Uint8Array;
                toProtoMsg(message: _20.QueryDenyListResponse): _20.QueryDenyListResponseProtoMsg;
            };
            RegisterZoneProposal: {
                typeUrl: string;
                encode(message: _19.RegisterZoneProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.RegisterZoneProposal;
                fromPartial(object: Partial<_19.RegisterZoneProposal>): _19.RegisterZoneProposal;
                fromAmino(object: _19.RegisterZoneProposalAmino): _19.RegisterZoneProposal;
                toAmino(message: _19.RegisterZoneProposal): _19.RegisterZoneProposalAmino;
                fromAminoMsg(object: _19.RegisterZoneProposalAminoMsg): _19.RegisterZoneProposal;
                fromProtoMsg(message: _19.RegisterZoneProposalProtoMsg): _19.RegisterZoneProposal;
                toProto(message: _19.RegisterZoneProposal): Uint8Array;
                toProtoMsg(message: _19.RegisterZoneProposal): _19.RegisterZoneProposalProtoMsg;
            };
            RegisterZoneProposalWithDeposit: {
                typeUrl: string;
                encode(message: _19.RegisterZoneProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.RegisterZoneProposalWithDeposit;
                fromPartial(object: Partial<_19.RegisterZoneProposalWithDeposit>): _19.RegisterZoneProposalWithDeposit;
                fromAmino(object: _19.RegisterZoneProposalWithDepositAmino): _19.RegisterZoneProposalWithDeposit;
                toAmino(message: _19.RegisterZoneProposalWithDeposit): _19.RegisterZoneProposalWithDepositAmino;
                fromAminoMsg(object: _19.RegisterZoneProposalWithDepositAminoMsg): _19.RegisterZoneProposalWithDeposit;
                fromProtoMsg(message: _19.RegisterZoneProposalWithDepositProtoMsg): _19.RegisterZoneProposalWithDeposit;
                toProto(message: _19.RegisterZoneProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _19.RegisterZoneProposalWithDeposit): _19.RegisterZoneProposalWithDepositProtoMsg;
            };
            UpdateZoneProposal: {
                typeUrl: string;
                encode(message: _19.UpdateZoneProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.UpdateZoneProposal;
                fromPartial(object: Partial<_19.UpdateZoneProposal>): _19.UpdateZoneProposal;
                fromAmino(object: _19.UpdateZoneProposalAmino): _19.UpdateZoneProposal;
                toAmino(message: _19.UpdateZoneProposal): _19.UpdateZoneProposalAmino;
                fromAminoMsg(object: _19.UpdateZoneProposalAminoMsg): _19.UpdateZoneProposal;
                fromProtoMsg(message: _19.UpdateZoneProposalProtoMsg): _19.UpdateZoneProposal;
                toProto(message: _19.UpdateZoneProposal): Uint8Array;
                toProtoMsg(message: _19.UpdateZoneProposal): _19.UpdateZoneProposalProtoMsg;
            };
            UpdateZoneProposalWithDeposit: {
                typeUrl: string;
                encode(message: _19.UpdateZoneProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.UpdateZoneProposalWithDeposit;
                fromPartial(object: Partial<_19.UpdateZoneProposalWithDeposit>): _19.UpdateZoneProposalWithDeposit;
                fromAmino(object: _19.UpdateZoneProposalWithDepositAmino): _19.UpdateZoneProposalWithDeposit;
                toAmino(message: _19.UpdateZoneProposalWithDeposit): _19.UpdateZoneProposalWithDepositAmino;
                fromAminoMsg(object: _19.UpdateZoneProposalWithDepositAminoMsg): _19.UpdateZoneProposalWithDeposit;
                fromProtoMsg(message: _19.UpdateZoneProposalWithDepositProtoMsg): _19.UpdateZoneProposalWithDeposit;
                toProto(message: _19.UpdateZoneProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _19.UpdateZoneProposalWithDeposit): _19.UpdateZoneProposalWithDepositProtoMsg;
            };
            UpdateZoneValue: {
                typeUrl: string;
                encode(message: _19.UpdateZoneValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.UpdateZoneValue;
                fromPartial(object: Partial<_19.UpdateZoneValue>): _19.UpdateZoneValue;
                fromAmino(object: _19.UpdateZoneValueAmino): _19.UpdateZoneValue;
                toAmino(message: _19.UpdateZoneValue): _19.UpdateZoneValueAmino;
                fromAminoMsg(object: _19.UpdateZoneValueAminoMsg): _19.UpdateZoneValue;
                fromProtoMsg(message: _19.UpdateZoneValueProtoMsg): _19.UpdateZoneValue;
                toProto(message: _19.UpdateZoneValue): Uint8Array;
                toProtoMsg(message: _19.UpdateZoneValue): _19.UpdateZoneValueProtoMsg;
            };
            MsgGovReopenChannel: {
                typeUrl: string;
                encode(message: _19.MsgGovReopenChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgGovReopenChannel;
                fromPartial(object: Partial<_19.MsgGovReopenChannel>): _19.MsgGovReopenChannel;
                fromAmino(object: _19.MsgGovReopenChannelAmino): _19.MsgGovReopenChannel;
                toAmino(message: _19.MsgGovReopenChannel): _19.MsgGovReopenChannelAmino;
                fromAminoMsg(object: _19.MsgGovReopenChannelAminoMsg): _19.MsgGovReopenChannel;
                fromProtoMsg(message: _19.MsgGovReopenChannelProtoMsg): _19.MsgGovReopenChannel;
                toProto(message: _19.MsgGovReopenChannel): Uint8Array;
                toProtoMsg(message: _19.MsgGovReopenChannel): _19.MsgGovReopenChannelProtoMsg;
            };
            MsgGovReopenChannelResponse: {
                typeUrl: string;
                encode(_: _19.MsgGovReopenChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgGovReopenChannelResponse;
                fromPartial(_: Partial<_19.MsgGovReopenChannelResponse>): _19.MsgGovReopenChannelResponse;
                fromAmino(_: _19.MsgGovReopenChannelResponseAmino): _19.MsgGovReopenChannelResponse;
                toAmino(_: _19.MsgGovReopenChannelResponse): _19.MsgGovReopenChannelResponseAmino;
                fromAminoMsg(object: _19.MsgGovReopenChannelResponseAminoMsg): _19.MsgGovReopenChannelResponse;
                fromProtoMsg(message: _19.MsgGovReopenChannelResponseProtoMsg): _19.MsgGovReopenChannelResponse;
                toProto(message: _19.MsgGovReopenChannelResponse): Uint8Array;
                toProtoMsg(message: _19.MsgGovReopenChannelResponse): _19.MsgGovReopenChannelResponseProtoMsg;
            };
            MsgGovCloseChannel: {
                typeUrl: string;
                encode(message: _19.MsgGovCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgGovCloseChannel;
                fromPartial(object: Partial<_19.MsgGovCloseChannel>): _19.MsgGovCloseChannel;
                fromAmino(object: _19.MsgGovCloseChannelAmino): _19.MsgGovCloseChannel;
                toAmino(message: _19.MsgGovCloseChannel): _19.MsgGovCloseChannelAmino;
                fromAminoMsg(object: _19.MsgGovCloseChannelAminoMsg): _19.MsgGovCloseChannel;
                fromProtoMsg(message: _19.MsgGovCloseChannelProtoMsg): _19.MsgGovCloseChannel;
                toProto(message: _19.MsgGovCloseChannel): Uint8Array;
                toProtoMsg(message: _19.MsgGovCloseChannel): _19.MsgGovCloseChannelProtoMsg;
            };
            MsgGovCloseChannelResponse: {
                typeUrl: string;
                encode(_: _19.MsgGovCloseChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgGovCloseChannelResponse;
                fromPartial(_: Partial<_19.MsgGovCloseChannelResponse>): _19.MsgGovCloseChannelResponse;
                fromAmino(_: _19.MsgGovCloseChannelResponseAmino): _19.MsgGovCloseChannelResponse;
                toAmino(_: _19.MsgGovCloseChannelResponse): _19.MsgGovCloseChannelResponseAmino;
                fromAminoMsg(object: _19.MsgGovCloseChannelResponseAminoMsg): _19.MsgGovCloseChannelResponse;
                fromProtoMsg(message: _19.MsgGovCloseChannelResponseProtoMsg): _19.MsgGovCloseChannelResponse;
                toProto(message: _19.MsgGovCloseChannelResponse): Uint8Array;
                toProtoMsg(message: _19.MsgGovCloseChannelResponse): _19.MsgGovCloseChannelResponseProtoMsg;
            };
            MsgGovSetLsmCaps: {
                typeUrl: string;
                encode(message: _19.MsgGovSetLsmCaps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgGovSetLsmCaps;
                fromPartial(object: Partial<_19.MsgGovSetLsmCaps>): _19.MsgGovSetLsmCaps;
                fromAmino(object: _19.MsgGovSetLsmCapsAmino): _19.MsgGovSetLsmCaps;
                toAmino(message: _19.MsgGovSetLsmCaps): _19.MsgGovSetLsmCapsAmino;
                fromAminoMsg(object: _19.MsgGovSetLsmCapsAminoMsg): _19.MsgGovSetLsmCaps;
                fromProtoMsg(message: _19.MsgGovSetLsmCapsProtoMsg): _19.MsgGovSetLsmCaps;
                toProto(message: _19.MsgGovSetLsmCaps): Uint8Array;
                toProtoMsg(message: _19.MsgGovSetLsmCaps): _19.MsgGovSetLsmCapsProtoMsg;
            };
            MsgGovSetLsmCapsResponse: {
                typeUrl: string;
                encode(_: _19.MsgGovSetLsmCapsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgGovSetLsmCapsResponse;
                fromPartial(_: Partial<_19.MsgGovSetLsmCapsResponse>): _19.MsgGovSetLsmCapsResponse;
                fromAmino(_: _19.MsgGovSetLsmCapsResponseAmino): _19.MsgGovSetLsmCapsResponse;
                toAmino(_: _19.MsgGovSetLsmCapsResponse): _19.MsgGovSetLsmCapsResponseAmino;
                fromAminoMsg(object: _19.MsgGovSetLsmCapsResponseAminoMsg): _19.MsgGovSetLsmCapsResponse;
                fromProtoMsg(message: _19.MsgGovSetLsmCapsResponseProtoMsg): _19.MsgGovSetLsmCapsResponse;
                toProto(message: _19.MsgGovSetLsmCapsResponse): Uint8Array;
                toProtoMsg(message: _19.MsgGovSetLsmCapsResponse): _19.MsgGovSetLsmCapsResponseProtoMsg;
            };
            MsgGovAddValidatorDenyList: {
                typeUrl: string;
                encode(message: _19.MsgGovAddValidatorDenyList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgGovAddValidatorDenyList;
                fromPartial(object: Partial<_19.MsgGovAddValidatorDenyList>): _19.MsgGovAddValidatorDenyList;
                fromAmino(object: _19.MsgGovAddValidatorDenyListAmino): _19.MsgGovAddValidatorDenyList;
                toAmino(message: _19.MsgGovAddValidatorDenyList): _19.MsgGovAddValidatorDenyListAmino;
                fromAminoMsg(object: _19.MsgGovAddValidatorDenyListAminoMsg): _19.MsgGovAddValidatorDenyList;
                fromProtoMsg(message: _19.MsgGovAddValidatorDenyListProtoMsg): _19.MsgGovAddValidatorDenyList;
                toProto(message: _19.MsgGovAddValidatorDenyList): Uint8Array;
                toProtoMsg(message: _19.MsgGovAddValidatorDenyList): _19.MsgGovAddValidatorDenyListProtoMsg;
            };
            MsgGovAddValidatorDenyListResponse: {
                typeUrl: string;
                encode(_: _19.MsgGovAddValidatorDenyListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgGovAddValidatorDenyListResponse;
                fromPartial(_: Partial<_19.MsgGovAddValidatorDenyListResponse>): _19.MsgGovAddValidatorDenyListResponse;
                fromAmino(_: _19.MsgGovAddValidatorDenyListResponseAmino): _19.MsgGovAddValidatorDenyListResponse;
                toAmino(_: _19.MsgGovAddValidatorDenyListResponse): _19.MsgGovAddValidatorDenyListResponseAmino;
                fromAminoMsg(object: _19.MsgGovAddValidatorDenyListResponseAminoMsg): _19.MsgGovAddValidatorDenyListResponse;
                fromProtoMsg(message: _19.MsgGovAddValidatorDenyListResponseProtoMsg): _19.MsgGovAddValidatorDenyListResponse;
                toProto(message: _19.MsgGovAddValidatorDenyListResponse): Uint8Array;
                toProtoMsg(message: _19.MsgGovAddValidatorDenyListResponse): _19.MsgGovAddValidatorDenyListResponseProtoMsg;
            };
            MsgGovRemoveValidatorDenyList: {
                typeUrl: string;
                encode(message: _19.MsgGovRemoveValidatorDenyList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgGovRemoveValidatorDenyList;
                fromPartial(object: Partial<_19.MsgGovRemoveValidatorDenyList>): _19.MsgGovRemoveValidatorDenyList;
                fromAmino(object: _19.MsgGovRemoveValidatorDenyListAmino): _19.MsgGovRemoveValidatorDenyList;
                toAmino(message: _19.MsgGovRemoveValidatorDenyList): _19.MsgGovRemoveValidatorDenyListAmino;
                fromAminoMsg(object: _19.MsgGovRemoveValidatorDenyListAminoMsg): _19.MsgGovRemoveValidatorDenyList;
                fromProtoMsg(message: _19.MsgGovRemoveValidatorDenyListProtoMsg): _19.MsgGovRemoveValidatorDenyList;
                toProto(message: _19.MsgGovRemoveValidatorDenyList): Uint8Array;
                toProtoMsg(message: _19.MsgGovRemoveValidatorDenyList): _19.MsgGovRemoveValidatorDenyListProtoMsg;
            };
            MsgGovRemoveValidatorDenyListResponse: {
                typeUrl: string;
                encode(_: _19.MsgGovRemoveValidatorDenyListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgGovRemoveValidatorDenyListResponse;
                fromPartial(_: Partial<_19.MsgGovRemoveValidatorDenyListResponse>): _19.MsgGovRemoveValidatorDenyListResponse;
                fromAmino(_: _19.MsgGovRemoveValidatorDenyListResponseAmino): _19.MsgGovRemoveValidatorDenyListResponse;
                toAmino(_: _19.MsgGovRemoveValidatorDenyListResponse): _19.MsgGovRemoveValidatorDenyListResponseAmino;
                fromAminoMsg(object: _19.MsgGovRemoveValidatorDenyListResponseAminoMsg): _19.MsgGovRemoveValidatorDenyListResponse;
                fromProtoMsg(message: _19.MsgGovRemoveValidatorDenyListResponseProtoMsg): _19.MsgGovRemoveValidatorDenyListResponse;
                toProto(message: _19.MsgGovRemoveValidatorDenyListResponse): Uint8Array;
                toProtoMsg(message: _19.MsgGovRemoveValidatorDenyListResponse): _19.MsgGovRemoveValidatorDenyListResponseProtoMsg;
            };
            MsgRequestRedemption: {
                typeUrl: string;
                encode(message: _18.MsgRequestRedemption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgRequestRedemption;
                fromPartial(object: Partial<_18.MsgRequestRedemption>): _18.MsgRequestRedemption;
                fromAmino(object: _18.MsgRequestRedemptionAmino): _18.MsgRequestRedemption;
                toAmino(message: _18.MsgRequestRedemption): _18.MsgRequestRedemptionAmino;
                fromAminoMsg(object: _18.MsgRequestRedemptionAminoMsg): _18.MsgRequestRedemption;
                fromProtoMsg(message: _18.MsgRequestRedemptionProtoMsg): _18.MsgRequestRedemption;
                toProto(message: _18.MsgRequestRedemption): Uint8Array;
                toProtoMsg(message: _18.MsgRequestRedemption): _18.MsgRequestRedemptionProtoMsg;
            };
            MsgRequestRedemptionResponse: {
                typeUrl: string;
                encode(_: _18.MsgRequestRedemptionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgRequestRedemptionResponse;
                fromPartial(_: Partial<_18.MsgRequestRedemptionResponse>): _18.MsgRequestRedemptionResponse;
                fromAmino(_: _18.MsgRequestRedemptionResponseAmino): _18.MsgRequestRedemptionResponse;
                toAmino(_: _18.MsgRequestRedemptionResponse): _18.MsgRequestRedemptionResponseAmino;
                fromAminoMsg(object: _18.MsgRequestRedemptionResponseAminoMsg): _18.MsgRequestRedemptionResponse;
                fromProtoMsg(message: _18.MsgRequestRedemptionResponseProtoMsg): _18.MsgRequestRedemptionResponse;
                toProto(message: _18.MsgRequestRedemptionResponse): Uint8Array;
                toProtoMsg(message: _18.MsgRequestRedemptionResponse): _18.MsgRequestRedemptionResponseProtoMsg;
            };
            MsgCancelQueuedRedemption: {
                typeUrl: string;
                encode(message: _18.MsgCancelQueuedRedemption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgCancelQueuedRedemption;
                fromPartial(object: Partial<_18.MsgCancelQueuedRedemption>): _18.MsgCancelQueuedRedemption;
                fromAmino(object: _18.MsgCancelQueuedRedemptionAmino): _18.MsgCancelQueuedRedemption;
                toAmino(message: _18.MsgCancelQueuedRedemption): _18.MsgCancelQueuedRedemptionAmino;
                fromAminoMsg(object: _18.MsgCancelQueuedRedemptionAminoMsg): _18.MsgCancelQueuedRedemption;
                fromProtoMsg(message: _18.MsgCancelQueuedRedemptionProtoMsg): _18.MsgCancelQueuedRedemption;
                toProto(message: _18.MsgCancelQueuedRedemption): Uint8Array;
                toProtoMsg(message: _18.MsgCancelQueuedRedemption): _18.MsgCancelQueuedRedemptionProtoMsg;
            };
            MsgCancelQueuedRedemptionResponse: {
                typeUrl: string;
                encode(message: _18.MsgCancelQueuedRedemptionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgCancelQueuedRedemptionResponse;
                fromPartial(object: Partial<_18.MsgCancelQueuedRedemptionResponse>): _18.MsgCancelQueuedRedemptionResponse;
                fromAmino(object: _18.MsgCancelQueuedRedemptionResponseAmino): _18.MsgCancelQueuedRedemptionResponse;
                toAmino(message: _18.MsgCancelQueuedRedemptionResponse): _18.MsgCancelQueuedRedemptionResponseAmino;
                fromAminoMsg(object: _18.MsgCancelQueuedRedemptionResponseAminoMsg): _18.MsgCancelQueuedRedemptionResponse;
                fromProtoMsg(message: _18.MsgCancelQueuedRedemptionResponseProtoMsg): _18.MsgCancelQueuedRedemptionResponse;
                toProto(message: _18.MsgCancelQueuedRedemptionResponse): Uint8Array;
                toProtoMsg(message: _18.MsgCancelQueuedRedemptionResponse): _18.MsgCancelQueuedRedemptionResponseProtoMsg;
            };
            MsgSignalIntent: {
                typeUrl: string;
                encode(message: _18.MsgSignalIntent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgSignalIntent;
                fromPartial(object: Partial<_18.MsgSignalIntent>): _18.MsgSignalIntent;
                fromAmino(object: _18.MsgSignalIntentAmino): _18.MsgSignalIntent;
                toAmino(message: _18.MsgSignalIntent): _18.MsgSignalIntentAmino;
                fromAminoMsg(object: _18.MsgSignalIntentAminoMsg): _18.MsgSignalIntent;
                fromProtoMsg(message: _18.MsgSignalIntentProtoMsg): _18.MsgSignalIntent;
                toProto(message: _18.MsgSignalIntent): Uint8Array;
                toProtoMsg(message: _18.MsgSignalIntent): _18.MsgSignalIntentProtoMsg;
            };
            MsgSignalIntentResponse: {
                typeUrl: string;
                encode(_: _18.MsgSignalIntentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgSignalIntentResponse;
                fromPartial(_: Partial<_18.MsgSignalIntentResponse>): _18.MsgSignalIntentResponse;
                fromAmino(_: _18.MsgSignalIntentResponseAmino): _18.MsgSignalIntentResponse;
                toAmino(_: _18.MsgSignalIntentResponse): _18.MsgSignalIntentResponseAmino;
                fromAminoMsg(object: _18.MsgSignalIntentResponseAminoMsg): _18.MsgSignalIntentResponse;
                fromProtoMsg(message: _18.MsgSignalIntentResponseProtoMsg): _18.MsgSignalIntentResponse;
                toProto(message: _18.MsgSignalIntentResponse): Uint8Array;
                toProtoMsg(message: _18.MsgSignalIntentResponse): _18.MsgSignalIntentResponseProtoMsg;
            };
            Zone: {
                typeUrl: string;
                encode(message: _17.Zone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Zone;
                fromPartial(object: Partial<_17.Zone>): _17.Zone;
                fromAmino(object: _17.ZoneAmino): _17.Zone;
                toAmino(message: _17.Zone): _17.ZoneAmino;
                fromAminoMsg(object: _17.ZoneAminoMsg): _17.Zone;
                fromProtoMsg(message: _17.ZoneProtoMsg): _17.Zone;
                toProto(message: _17.Zone): Uint8Array;
                toProtoMsg(message: _17.Zone): _17.ZoneProtoMsg;
            };
            SubzoneInfo: {
                typeUrl: string;
                encode(message: _17.SubzoneInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.SubzoneInfo;
                fromPartial(object: Partial<_17.SubzoneInfo>): _17.SubzoneInfo;
                fromAmino(object: _17.SubzoneInfoAmino): _17.SubzoneInfo;
                toAmino(message: _17.SubzoneInfo): _17.SubzoneInfoAmino;
                fromAminoMsg(object: _17.SubzoneInfoAminoMsg): _17.SubzoneInfo;
                fromProtoMsg(message: _17.SubzoneInfoProtoMsg): _17.SubzoneInfo;
                toProto(message: _17.SubzoneInfo): Uint8Array;
                toProtoMsg(message: _17.SubzoneInfo): _17.SubzoneInfoProtoMsg;
            };
            LsmCaps: {
                typeUrl: string;
                encode(message: _17.LsmCaps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.LsmCaps;
                fromPartial(object: Partial<_17.LsmCaps>): _17.LsmCaps;
                fromAmino(object: _17.LsmCapsAmino): _17.LsmCaps;
                toAmino(message: _17.LsmCaps): _17.LsmCapsAmino;
                fromAminoMsg(object: _17.LsmCapsAminoMsg): _17.LsmCaps;
                fromProtoMsg(message: _17.LsmCapsProtoMsg): _17.LsmCaps;
                toProto(message: _17.LsmCaps): Uint8Array;
                toProtoMsg(message: _17.LsmCaps): _17.LsmCapsProtoMsg;
            };
            ICAAccount: {
                typeUrl: string;
                encode(message: _17.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.ICAAccount;
                fromPartial(object: Partial<_17.ICAAccount>): _17.ICAAccount;
                fromAmino(object: _17.ICAAccountAmino): _17.ICAAccount;
                toAmino(message: _17.ICAAccount): _17.ICAAccountAmino;
                fromAminoMsg(object: _17.ICAAccountAminoMsg): _17.ICAAccount;
                fromProtoMsg(message: _17.ICAAccountProtoMsg): _17.ICAAccount;
                toProto(message: _17.ICAAccount): Uint8Array;
                toProtoMsg(message: _17.ICAAccount): _17.ICAAccountProtoMsg;
            };
            Distribution: {
                typeUrl: string;
                encode(message: _17.Distribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Distribution;
                fromPartial(object: Partial<_17.Distribution>): _17.Distribution;
                fromAmino(object: _17.DistributionAmino): _17.Distribution;
                toAmino(message: _17.Distribution): _17.DistributionAmino;
                fromAminoMsg(object: _17.DistributionAminoMsg): _17.Distribution;
                fromProtoMsg(message: _17.DistributionProtoMsg): _17.Distribution;
                toProto(message: _17.Distribution): Uint8Array;
                toProtoMsg(message: _17.Distribution): _17.DistributionProtoMsg;
            };
            WithdrawalRecord: {
                typeUrl: string;
                encode(message: _17.WithdrawalRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.WithdrawalRecord;
                fromPartial(object: Partial<_17.WithdrawalRecord>): _17.WithdrawalRecord;
                fromAmino(object: _17.WithdrawalRecordAmino): _17.WithdrawalRecord;
                toAmino(message: _17.WithdrawalRecord): _17.WithdrawalRecordAmino;
                fromAminoMsg(object: _17.WithdrawalRecordAminoMsg): _17.WithdrawalRecord;
                fromProtoMsg(message: _17.WithdrawalRecordProtoMsg): _17.WithdrawalRecord;
                toProto(message: _17.WithdrawalRecord): Uint8Array;
                toProtoMsg(message: _17.WithdrawalRecord): _17.WithdrawalRecordProtoMsg;
            };
            UnbondingRecord: {
                typeUrl: string;
                encode(message: _17.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.UnbondingRecord;
                fromPartial(object: Partial<_17.UnbondingRecord>): _17.UnbondingRecord;
                fromAmino(object: _17.UnbondingRecordAmino): _17.UnbondingRecord;
                toAmino(message: _17.UnbondingRecord): _17.UnbondingRecordAmino;
                fromAminoMsg(object: _17.UnbondingRecordAminoMsg): _17.UnbondingRecord;
                fromProtoMsg(message: _17.UnbondingRecordProtoMsg): _17.UnbondingRecord;
                toProto(message: _17.UnbondingRecord): Uint8Array;
                toProtoMsg(message: _17.UnbondingRecord): _17.UnbondingRecordProtoMsg;
            };
            RedelegationRecord: {
                typeUrl: string;
                encode(message: _17.RedelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.RedelegationRecord;
                fromPartial(object: Partial<_17.RedelegationRecord>): _17.RedelegationRecord;
                fromAmino(object: _17.RedelegationRecordAmino): _17.RedelegationRecord;
                toAmino(message: _17.RedelegationRecord): _17.RedelegationRecordAmino;
                fromAminoMsg(object: _17.RedelegationRecordAminoMsg): _17.RedelegationRecord;
                fromProtoMsg(message: _17.RedelegationRecordProtoMsg): _17.RedelegationRecord;
                toProto(message: _17.RedelegationRecord): Uint8Array;
                toProtoMsg(message: _17.RedelegationRecord): _17.RedelegationRecordProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _17.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Validator;
                fromPartial(object: Partial<_17.Validator>): _17.Validator;
                fromAmino(object: _17.ValidatorAmino): _17.Validator;
                toAmino(message: _17.Validator): _17.ValidatorAmino;
                fromAminoMsg(object: _17.ValidatorAminoMsg): _17.Validator;
                fromProtoMsg(message: _17.ValidatorProtoMsg): _17.Validator;
                toProto(message: _17.Validator): Uint8Array;
                toProtoMsg(message: _17.Validator): _17.ValidatorProtoMsg;
            };
            DelegatorIntent: {
                typeUrl: string;
                encode(message: _17.DelegatorIntent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.DelegatorIntent;
                fromPartial(object: Partial<_17.DelegatorIntent>): _17.DelegatorIntent;
                fromAmino(object: _17.DelegatorIntentAmino): _17.DelegatorIntent;
                toAmino(message: _17.DelegatorIntent): _17.DelegatorIntentAmino;
                fromAminoMsg(object: _17.DelegatorIntentAminoMsg): _17.DelegatorIntent;
                fromProtoMsg(message: _17.DelegatorIntentProtoMsg): _17.DelegatorIntent;
                toProto(message: _17.DelegatorIntent): Uint8Array;
                toProtoMsg(message: _17.DelegatorIntent): _17.DelegatorIntentProtoMsg;
            };
            ValidatorIntent: {
                typeUrl: string;
                encode(message: _17.ValidatorIntent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.ValidatorIntent;
                fromPartial(object: Partial<_17.ValidatorIntent>): _17.ValidatorIntent;
                fromAmino(object: _17.ValidatorIntentAmino): _17.ValidatorIntent;
                toAmino(message: _17.ValidatorIntent): _17.ValidatorIntentAmino;
                fromAminoMsg(object: _17.ValidatorIntentAminoMsg): _17.ValidatorIntent;
                fromProtoMsg(message: _17.ValidatorIntentProtoMsg): _17.ValidatorIntent;
                toProto(message: _17.ValidatorIntent): Uint8Array;
                toProtoMsg(message: _17.ValidatorIntent): _17.ValidatorIntentProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _17.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Delegation;
                fromPartial(object: Partial<_17.Delegation>): _17.Delegation;
                fromAmino(object: _17.DelegationAmino): _17.Delegation;
                toAmino(message: _17.Delegation): _17.DelegationAmino;
                fromAminoMsg(object: _17.DelegationAminoMsg): _17.Delegation;
                fromProtoMsg(message: _17.DelegationProtoMsg): _17.Delegation;
                toProto(message: _17.Delegation): Uint8Array;
                toProtoMsg(message: _17.Delegation): _17.DelegationProtoMsg;
            };
            PortConnectionTuple: {
                typeUrl: string;
                encode(message: _17.PortConnectionTuple, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.PortConnectionTuple;
                fromPartial(object: Partial<_17.PortConnectionTuple>): _17.PortConnectionTuple;
                fromAmino(object: _17.PortConnectionTupleAmino): _17.PortConnectionTuple;
                toAmino(message: _17.PortConnectionTuple): _17.PortConnectionTupleAmino;
                fromAminoMsg(object: _17.PortConnectionTupleAminoMsg): _17.PortConnectionTuple;
                fromProtoMsg(message: _17.PortConnectionTupleProtoMsg): _17.PortConnectionTuple;
                toProto(message: _17.PortConnectionTuple): Uint8Array;
                toProtoMsg(message: _17.PortConnectionTuple): _17.PortConnectionTupleProtoMsg;
            };
            Receipt: {
                typeUrl: string;
                encode(message: _17.Receipt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Receipt;
                fromPartial(object: Partial<_17.Receipt>): _17.Receipt;
                fromAmino(object: _17.ReceiptAmino): _17.Receipt;
                toAmino(message: _17.Receipt): _17.ReceiptAmino;
                fromAminoMsg(object: _17.ReceiptAminoMsg): _17.Receipt;
                fromProtoMsg(message: _17.ReceiptProtoMsg): _17.Receipt;
                toProto(message: _17.Receipt): Uint8Array;
                toProtoMsg(message: _17.Receipt): _17.ReceiptProtoMsg;
            };
            Params_v1: {
                typeUrl: string;
                encode(message: _16.Params_v1, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Params_v1;
                fromPartial(object: Partial<_16.Params_v1>): _16.Params_v1;
                fromAmino(object: _16.Params_v1Amino): _16.Params_v1;
                toAmino(message: _16.Params_v1): _16.Params_v1Amino;
                fromAminoMsg(object: _16.Params_v1AminoMsg): _16.Params_v1;
                fromProtoMsg(message: _16.Params_v1ProtoMsg): _16.Params_v1;
                toProto(message: _16.Params_v1): Uint8Array;
                toProtoMsg(message: _16.Params_v1): _16.Params_v1ProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _16.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Params;
                fromPartial(object: Partial<_16.Params>): _16.Params;
                fromAmino(object: _16.ParamsAmino): _16.Params;
                toAmino(message: _16.Params): _16.ParamsAmino;
                fromAminoMsg(object: _16.ParamsAminoMsg): _16.Params;
                fromProtoMsg(message: _16.ParamsProtoMsg): _16.Params;
                toProto(message: _16.Params): Uint8Array;
                toProtoMsg(message: _16.Params): _16.ParamsProtoMsg;
            };
            DelegationsForZone: {
                typeUrl: string;
                encode(message: _16.DelegationsForZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.DelegationsForZone;
                fromPartial(object: Partial<_16.DelegationsForZone>): _16.DelegationsForZone;
                fromAmino(object: _16.DelegationsForZoneAmino): _16.DelegationsForZone;
                toAmino(message: _16.DelegationsForZone): _16.DelegationsForZoneAmino;
                fromAminoMsg(object: _16.DelegationsForZoneAminoMsg): _16.DelegationsForZone;
                fromProtoMsg(message: _16.DelegationsForZoneProtoMsg): _16.DelegationsForZone;
                toProto(message: _16.DelegationsForZone): Uint8Array;
                toProtoMsg(message: _16.DelegationsForZone): _16.DelegationsForZoneProtoMsg;
            };
            DelegatorIntentsForZone: {
                typeUrl: string;
                encode(message: _16.DelegatorIntentsForZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.DelegatorIntentsForZone;
                fromPartial(object: Partial<_16.DelegatorIntentsForZone>): _16.DelegatorIntentsForZone;
                fromAmino(object: _16.DelegatorIntentsForZoneAmino): _16.DelegatorIntentsForZone;
                toAmino(message: _16.DelegatorIntentsForZone): _16.DelegatorIntentsForZoneAmino;
                fromAminoMsg(object: _16.DelegatorIntentsForZoneAminoMsg): _16.DelegatorIntentsForZone;
                fromProtoMsg(message: _16.DelegatorIntentsForZoneProtoMsg): _16.DelegatorIntentsForZone;
                toProto(message: _16.DelegatorIntentsForZone): Uint8Array;
                toProtoMsg(message: _16.DelegatorIntentsForZone): _16.DelegatorIntentsForZoneProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _16.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                toProto(message: _16.GenesisState): Uint8Array;
                toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                epochProvisions(request?: _23.QueryEpochProvisionsRequest): Promise<_23.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
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
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _23.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_23.QueryEpochProvisionsRequest>): _23.QueryEpochProvisionsRequest;
                fromAmino(_: _23.QueryEpochProvisionsRequestAmino): _23.QueryEpochProvisionsRequest;
                toAmino(_: _23.QueryEpochProvisionsRequest): _23.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _23.QueryEpochProvisionsRequestAminoMsg): _23.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _23.QueryEpochProvisionsRequestProtoMsg): _23.QueryEpochProvisionsRequest;
                toProto(message: _23.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryEpochProvisionsRequest): _23.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _23.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_23.QueryEpochProvisionsResponse>): _23.QueryEpochProvisionsResponse;
                fromAmino(object: _23.QueryEpochProvisionsResponseAmino): _23.QueryEpochProvisionsResponse;
                toAmino(message: _23.QueryEpochProvisionsResponse): _23.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _23.QueryEpochProvisionsResponseAminoMsg): _23.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _23.QueryEpochProvisionsResponseProtoMsg): _23.QueryEpochProvisionsResponse;
                toProto(message: _23.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryEpochProvisionsResponse): _23.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _22.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Minter;
                fromPartial(object: Partial<_22.Minter>): _22.Minter;
                fromAmino(object: _22.MinterAmino): _22.Minter;
                toAmino(message: _22.Minter): _22.MinterAmino;
                fromAminoMsg(object: _22.MinterAminoMsg): _22.Minter;
                fromProtoMsg(message: _22.MinterProtoMsg): _22.Minter;
                toProto(message: _22.Minter): Uint8Array;
                toProtoMsg(message: _22.Minter): _22.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _22.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.DistributionProportions;
                fromPartial(object: Partial<_22.DistributionProportions>): _22.DistributionProportions;
                fromAmino(object: _22.DistributionProportionsAmino): _22.DistributionProportions;
                toAmino(message: _22.DistributionProportions): _22.DistributionProportionsAmino;
                fromAminoMsg(object: _22.DistributionProportionsAminoMsg): _22.DistributionProportions;
                fromProtoMsg(message: _22.DistributionProportionsProtoMsg): _22.DistributionProportions;
                toProto(message: _22.DistributionProportions): Uint8Array;
                toProtoMsg(message: _22.DistributionProportions): _22.DistributionProportionsProtoMsg;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _21.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
                fromAmino(object: _21.GenesisStateAmino): _21.GenesisState;
                toAmino(message: _21.GenesisState): _21.GenesisStateAmino;
                fromAminoMsg(object: _21.GenesisStateAminoMsg): _21.GenesisState;
                fromProtoMsg(message: _21.GenesisStateProtoMsg): _21.GenesisState;
                toProto(message: _21.GenesisState): Uint8Array;
                toProtoMsg(message: _21.GenesisState): _21.GenesisStateProtoMsg;
            };
        };
    }
    namespace participationrewards {
        const v1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                protocolData(request: _28.QueryProtocolDataRequest): Promise<_28.QueryProtocolDataResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitClaim(value: _25.MsgSubmitClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govRemoveProtocolData(value: _27.MsgGovRemoveProtocolData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitClaim(value: _25.MsgSubmitClaim): {
                        typeUrl: string;
                        value: _25.MsgSubmitClaim;
                    };
                    govRemoveProtocolData(value: _27.MsgGovRemoveProtocolData): {
                        typeUrl: string;
                        value: _27.MsgGovRemoveProtocolData;
                    };
                };
                fromJSON: {
                    submitClaim(value: any): {
                        typeUrl: string;
                        value: _25.MsgSubmitClaim;
                    };
                    govRemoveProtocolData(value: any): {
                        typeUrl: string;
                        value: _27.MsgGovRemoveProtocolData;
                    };
                };
                fromPartial: {
                    submitClaim(value: _25.MsgSubmitClaim): {
                        typeUrl: string;
                        value: _25.MsgSubmitClaim;
                    };
                    govRemoveProtocolData(value: _27.MsgGovRemoveProtocolData): {
                        typeUrl: string;
                        value: _27.MsgGovRemoveProtocolData;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.participationrewards.v1.MsgSubmitClaim": {
                    aminoType: string;
                    toAmino: (message: _25.MsgSubmitClaim) => _25.MsgSubmitClaimAmino;
                    fromAmino: (object: _25.MsgSubmitClaimAmino) => _25.MsgSubmitClaim;
                };
                "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData": {
                    aminoType: string;
                    toAmino: (message: _27.MsgGovRemoveProtocolData) => _27.MsgGovRemoveProtocolDataAmino;
                    fromAmino: (object: _27.MsgGovRemoveProtocolDataAmino) => _27.MsgGovRemoveProtocolData;
                };
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _28.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.QueryParamsRequest;
                fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
                fromAmino(_: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
                toAmino(_: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
                fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
                fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
                toProto(message: _28.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _28.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryParamsResponse;
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
                fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
                toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
                fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
                fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
                toProto(message: _28.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
            };
            QueryProtocolDataRequest: {
                typeUrl: string;
                encode(message: _28.QueryProtocolDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryProtocolDataRequest;
                fromPartial(object: Partial<_28.QueryProtocolDataRequest>): _28.QueryProtocolDataRequest;
                fromAmino(object: _28.QueryProtocolDataRequestAmino): _28.QueryProtocolDataRequest;
                toAmino(message: _28.QueryProtocolDataRequest): _28.QueryProtocolDataRequestAmino;
                fromAminoMsg(object: _28.QueryProtocolDataRequestAminoMsg): _28.QueryProtocolDataRequest;
                fromProtoMsg(message: _28.QueryProtocolDataRequestProtoMsg): _28.QueryProtocolDataRequest;
                toProto(message: _28.QueryProtocolDataRequest): Uint8Array;
                toProtoMsg(message: _28.QueryProtocolDataRequest): _28.QueryProtocolDataRequestProtoMsg;
            };
            QueryProtocolDataResponse: {
                typeUrl: string;
                encode(message: _28.QueryProtocolDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryProtocolDataResponse;
                fromPartial(object: Partial<_28.QueryProtocolDataResponse>): _28.QueryProtocolDataResponse;
                fromAmino(object: _28.QueryProtocolDataResponseAmino): _28.QueryProtocolDataResponse;
                toAmino(message: _28.QueryProtocolDataResponse): _28.QueryProtocolDataResponseAmino;
                fromAminoMsg(object: _28.QueryProtocolDataResponseAminoMsg): _28.QueryProtocolDataResponse;
                fromProtoMsg(message: _28.QueryProtocolDataResponseProtoMsg): _28.QueryProtocolDataResponse;
                toProto(message: _28.QueryProtocolDataResponse): Uint8Array;
                toProtoMsg(message: _28.QueryProtocolDataResponse): _28.QueryProtocolDataResponseProtoMsg;
            };
            AddProtocolDataProposal: {
                typeUrl: string;
                encode(message: _27.AddProtocolDataProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.AddProtocolDataProposal;
                fromPartial(object: Partial<_27.AddProtocolDataProposal>): _27.AddProtocolDataProposal;
                fromAmino(object: _27.AddProtocolDataProposalAmino): _27.AddProtocolDataProposal;
                toAmino(message: _27.AddProtocolDataProposal): _27.AddProtocolDataProposalAmino;
                fromAminoMsg(object: _27.AddProtocolDataProposalAminoMsg): _27.AddProtocolDataProposal;
                fromProtoMsg(message: _27.AddProtocolDataProposalProtoMsg): _27.AddProtocolDataProposal;
                toProto(message: _27.AddProtocolDataProposal): Uint8Array;
                toProtoMsg(message: _27.AddProtocolDataProposal): _27.AddProtocolDataProposalProtoMsg;
            };
            AddProtocolDataProposalWithDeposit: {
                typeUrl: string;
                encode(message: _27.AddProtocolDataProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.AddProtocolDataProposalWithDeposit;
                fromPartial(object: Partial<_27.AddProtocolDataProposalWithDeposit>): _27.AddProtocolDataProposalWithDeposit;
                fromAmino(object: _27.AddProtocolDataProposalWithDepositAmino): _27.AddProtocolDataProposalWithDeposit;
                toAmino(message: _27.AddProtocolDataProposalWithDeposit): _27.AddProtocolDataProposalWithDepositAmino;
                fromAminoMsg(object: _27.AddProtocolDataProposalWithDepositAminoMsg): _27.AddProtocolDataProposalWithDeposit;
                fromProtoMsg(message: _27.AddProtocolDataProposalWithDepositProtoMsg): _27.AddProtocolDataProposalWithDeposit;
                toProto(message: _27.AddProtocolDataProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _27.AddProtocolDataProposalWithDeposit): _27.AddProtocolDataProposalWithDepositProtoMsg;
            };
            MsgGovRemoveProtocolData: {
                typeUrl: string;
                encode(message: _27.MsgGovRemoveProtocolData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgGovRemoveProtocolData;
                fromPartial(object: Partial<_27.MsgGovRemoveProtocolData>): _27.MsgGovRemoveProtocolData;
                fromAmino(object: _27.MsgGovRemoveProtocolDataAmino): _27.MsgGovRemoveProtocolData;
                toAmino(message: _27.MsgGovRemoveProtocolData): _27.MsgGovRemoveProtocolDataAmino;
                fromAminoMsg(object: _27.MsgGovRemoveProtocolDataAminoMsg): _27.MsgGovRemoveProtocolData;
                fromProtoMsg(message: _27.MsgGovRemoveProtocolDataProtoMsg): _27.MsgGovRemoveProtocolData;
                toProto(message: _27.MsgGovRemoveProtocolData): Uint8Array;
                toProtoMsg(message: _27.MsgGovRemoveProtocolData): _27.MsgGovRemoveProtocolDataProtoMsg;
            };
            MsgGovRemoveProtocolDataResponse: {
                typeUrl: string;
                encode(_: _27.MsgGovRemoveProtocolDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgGovRemoveProtocolDataResponse;
                fromPartial(_: Partial<_27.MsgGovRemoveProtocolDataResponse>): _27.MsgGovRemoveProtocolDataResponse;
                fromAmino(_: _27.MsgGovRemoveProtocolDataResponseAmino): _27.MsgGovRemoveProtocolDataResponse;
                toAmino(_: _27.MsgGovRemoveProtocolDataResponse): _27.MsgGovRemoveProtocolDataResponseAmino;
                fromAminoMsg(object: _27.MsgGovRemoveProtocolDataResponseAminoMsg): _27.MsgGovRemoveProtocolDataResponse;
                fromProtoMsg(message: _27.MsgGovRemoveProtocolDataResponseProtoMsg): _27.MsgGovRemoveProtocolDataResponse;
                toProto(message: _27.MsgGovRemoveProtocolDataResponse): Uint8Array;
                toProtoMsg(message: _27.MsgGovRemoveProtocolDataResponse): _27.MsgGovRemoveProtocolDataResponseProtoMsg;
            };
            protocolDataTypeFromJSON(object: any): _26.ProtocolDataType;
            protocolDataTypeToJSON(object: _26.ProtocolDataType): string;
            ProtocolDataType: typeof _26.ProtocolDataType;
            ProtocolDataTypeSDKType: typeof _26.ProtocolDataType;
            ProtocolDataTypeAmino: typeof _26.ProtocolDataType;
            DistributionProportions: {
                typeUrl: string;
                encode(message: _26.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.DistributionProportions;
                fromPartial(object: Partial<_26.DistributionProportions>): _26.DistributionProportions;
                fromAmino(object: _26.DistributionProportionsAmino): _26.DistributionProportions;
                toAmino(message: _26.DistributionProportions): _26.DistributionProportionsAmino;
                fromAminoMsg(object: _26.DistributionProportionsAminoMsg): _26.DistributionProportions;
                fromProtoMsg(message: _26.DistributionProportionsProtoMsg): _26.DistributionProportions;
                toProto(message: _26.DistributionProportions): Uint8Array;
                toProtoMsg(message: _26.DistributionProportions): _26.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _26.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Params;
                fromPartial(object: Partial<_26.Params>): _26.Params;
                fromAmino(object: _26.ParamsAmino): _26.Params;
                toAmino(message: _26.Params): _26.ParamsAmino;
                fromAminoMsg(object: _26.ParamsAminoMsg): _26.Params;
                fromProtoMsg(message: _26.ParamsProtoMsg): _26.Params;
                toProto(message: _26.Params): Uint8Array;
                toProtoMsg(message: _26.Params): _26.ParamsProtoMsg;
            };
            KeyedProtocolData: {
                typeUrl: string;
                encode(message: _26.KeyedProtocolData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.KeyedProtocolData;
                fromPartial(object: Partial<_26.KeyedProtocolData>): _26.KeyedProtocolData;
                fromAmino(object: _26.KeyedProtocolDataAmino): _26.KeyedProtocolData;
                toAmino(message: _26.KeyedProtocolData): _26.KeyedProtocolDataAmino;
                fromAminoMsg(object: _26.KeyedProtocolDataAminoMsg): _26.KeyedProtocolData;
                fromProtoMsg(message: _26.KeyedProtocolDataProtoMsg): _26.KeyedProtocolData;
                toProto(message: _26.KeyedProtocolData): Uint8Array;
                toProtoMsg(message: _26.KeyedProtocolData): _26.KeyedProtocolDataProtoMsg;
            };
            ProtocolData: {
                typeUrl: string;
                encode(message: _26.ProtocolData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ProtocolData;
                fromPartial(object: Partial<_26.ProtocolData>): _26.ProtocolData;
                fromAmino(object: _26.ProtocolDataAmino): _26.ProtocolData;
                toAmino(message: _26.ProtocolData): _26.ProtocolDataAmino;
                fromAminoMsg(object: _26.ProtocolDataAminoMsg): _26.ProtocolData;
                fromProtoMsg(message: _26.ProtocolDataProtoMsg): _26.ProtocolData;
                toProto(message: _26.ProtocolData): Uint8Array;
                toProtoMsg(message: _26.ProtocolData): _26.ProtocolDataProtoMsg;
            };
            MsgSubmitClaim: {
                typeUrl: string;
                encode(message: _25.MsgSubmitClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgSubmitClaim;
                fromPartial(object: Partial<_25.MsgSubmitClaim>): _25.MsgSubmitClaim;
                fromAmino(object: _25.MsgSubmitClaimAmino): _25.MsgSubmitClaim;
                toAmino(message: _25.MsgSubmitClaim): _25.MsgSubmitClaimAmino;
                fromAminoMsg(object: _25.MsgSubmitClaimAminoMsg): _25.MsgSubmitClaim;
                fromProtoMsg(message: _25.MsgSubmitClaimProtoMsg): _25.MsgSubmitClaim;
                toProto(message: _25.MsgSubmitClaim): Uint8Array;
                toProtoMsg(message: _25.MsgSubmitClaim): _25.MsgSubmitClaimProtoMsg;
            };
            MsgSubmitClaimResponse: {
                typeUrl: string;
                encode(_: _25.MsgSubmitClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgSubmitClaimResponse;
                fromPartial(_: Partial<_25.MsgSubmitClaimResponse>): _25.MsgSubmitClaimResponse;
                fromAmino(_: _25.MsgSubmitClaimResponseAmino): _25.MsgSubmitClaimResponse;
                toAmino(_: _25.MsgSubmitClaimResponse): _25.MsgSubmitClaimResponseAmino;
                fromAminoMsg(object: _25.MsgSubmitClaimResponseAminoMsg): _25.MsgSubmitClaimResponse;
                fromProtoMsg(message: _25.MsgSubmitClaimResponseProtoMsg): _25.MsgSubmitClaimResponse;
                toProto(message: _25.MsgSubmitClaimResponse): Uint8Array;
                toProtoMsg(message: _25.MsgSubmitClaimResponse): _25.MsgSubmitClaimResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _24.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
                fromAmino(object: _24.GenesisStateAmino): _24.GenesisState;
                toAmino(message: _24.GenesisState): _24.GenesisStateAmino;
                fromAminoMsg(object: _24.GenesisStateAminoMsg): _24.GenesisState;
                fromProtoMsg(message: _24.GenesisStateProtoMsg): _24.GenesisState;
                toProto(message: _24.GenesisState): Uint8Array;
                toProtoMsg(message: _24.GenesisState): _24.GenesisStateProtoMsg;
            };
        };
    }
    namespace supply {
        const v1: {
            QueryClientImpl: typeof _217.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                supply(request?: _29.QuerySupplyRequest): Promise<_29.QuerySupplyResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            QuerySupplyRequest: {
                typeUrl: string;
                encode(_: _29.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.QuerySupplyRequest;
                fromPartial(_: Partial<_29.QuerySupplyRequest>): _29.QuerySupplyRequest;
                fromAmino(_: _29.QuerySupplyRequestAmino): _29.QuerySupplyRequest;
                toAmino(_: _29.QuerySupplyRequest): _29.QuerySupplyRequestAmino;
                fromAminoMsg(object: _29.QuerySupplyRequestAminoMsg): _29.QuerySupplyRequest;
                fromProtoMsg(message: _29.QuerySupplyRequestProtoMsg): _29.QuerySupplyRequest;
                toProto(message: _29.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _29.QuerySupplyRequest): _29.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _29.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QuerySupplyResponse;
                fromPartial(object: Partial<_29.QuerySupplyResponse>): _29.QuerySupplyResponse;
                fromAmino(object: _29.QuerySupplyResponseAmino): _29.QuerySupplyResponse;
                toAmino(message: _29.QuerySupplyResponse): _29.QuerySupplyResponseAmino;
                fromAminoMsg(object: _29.QuerySupplyResponseAminoMsg): _29.QuerySupplyResponse;
                fromProtoMsg(message: _29.QuerySupplyResponseProtoMsg): _29.QuerySupplyResponse;
                toProto(message: _29.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _29.QuerySupplyResponse): _29.QuerySupplyResponseProtoMsg;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _218.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                denomAuthorityMetadata(request: _33.QueryDenomAuthorityMetadataRequest): Promise<_33.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _33.QueryDenomsFromCreatorRequest): Promise<_33.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _34.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _34.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _34.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _34.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _34.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _34.MsgCreateDenom): {
                        typeUrl: string;
                        value: _34.MsgCreateDenom;
                    };
                    mint(value: _34.MsgMint): {
                        typeUrl: string;
                        value: _34.MsgMint;
                    };
                    burn(value: _34.MsgBurn): {
                        typeUrl: string;
                        value: _34.MsgBurn;
                    };
                    changeAdmin(value: _34.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _34.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _34.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _34.MsgSetDenomMetadata;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _34.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _34.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _34.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _34.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _34.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _34.MsgCreateDenom): {
                        typeUrl: string;
                        value: _34.MsgCreateDenom;
                    };
                    mint(value: _34.MsgMint): {
                        typeUrl: string;
                        value: _34.MsgMint;
                    };
                    burn(value: _34.MsgBurn): {
                        typeUrl: string;
                        value: _34.MsgBurn;
                    };
                    changeAdmin(value: _34.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _34.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _34.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _34.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _34.MsgCreateDenom) => _34.MsgCreateDenomAmino;
                    fromAmino: (object: _34.MsgCreateDenomAmino) => _34.MsgCreateDenom;
                };
                "/quicksilver.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _34.MsgMint) => _34.MsgMintAmino;
                    fromAmino: (object: _34.MsgMintAmino) => _34.MsgMint;
                };
                "/quicksilver.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _34.MsgBurn) => _34.MsgBurnAmino;
                    fromAmino: (object: _34.MsgBurnAmino) => _34.MsgBurn;
                };
                "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _34.MsgChangeAdmin) => _34.MsgChangeAdminAmino;
                    fromAmino: (object: _34.MsgChangeAdminAmino) => _34.MsgChangeAdmin;
                };
                "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _34.MsgSetDenomMetadata) => _34.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _34.MsgSetDenomMetadataAmino) => _34.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _34.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgCreateDenom;
                fromPartial(object: Partial<_34.MsgCreateDenom>): _34.MsgCreateDenom;
                fromAmino(object: _34.MsgCreateDenomAmino): _34.MsgCreateDenom;
                toAmino(message: _34.MsgCreateDenom): _34.MsgCreateDenomAmino;
                fromAminoMsg(object: _34.MsgCreateDenomAminoMsg): _34.MsgCreateDenom;
                fromProtoMsg(message: _34.MsgCreateDenomProtoMsg): _34.MsgCreateDenom;
                toProto(message: _34.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _34.MsgCreateDenom): _34.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _34.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgCreateDenomResponse;
                fromPartial(object: Partial<_34.MsgCreateDenomResponse>): _34.MsgCreateDenomResponse;
                fromAmino(object: _34.MsgCreateDenomResponseAmino): _34.MsgCreateDenomResponse;
                toAmino(message: _34.MsgCreateDenomResponse): _34.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _34.MsgCreateDenomResponseAminoMsg): _34.MsgCreateDenomResponse;
                fromProtoMsg(message: _34.MsgCreateDenomResponseProtoMsg): _34.MsgCreateDenomResponse;
                toProto(message: _34.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _34.MsgCreateDenomResponse): _34.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _34.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgMint;
                fromPartial(object: Partial<_34.MsgMint>): _34.MsgMint;
                fromAmino(object: _34.MsgMintAmino): _34.MsgMint;
                toAmino(message: _34.MsgMint): _34.MsgMintAmino;
                fromAminoMsg(object: _34.MsgMintAminoMsg): _34.MsgMint;
                fromProtoMsg(message: _34.MsgMintProtoMsg): _34.MsgMint;
                toProto(message: _34.MsgMint): Uint8Array;
                toProtoMsg(message: _34.MsgMint): _34.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _34.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgMintResponse;
                fromPartial(_: Partial<_34.MsgMintResponse>): _34.MsgMintResponse;
                fromAmino(_: _34.MsgMintResponseAmino): _34.MsgMintResponse;
                toAmino(_: _34.MsgMintResponse): _34.MsgMintResponseAmino;
                fromAminoMsg(object: _34.MsgMintResponseAminoMsg): _34.MsgMintResponse;
                fromProtoMsg(message: _34.MsgMintResponseProtoMsg): _34.MsgMintResponse;
                toProto(message: _34.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _34.MsgMintResponse): _34.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _34.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgBurn;
                fromPartial(object: Partial<_34.MsgBurn>): _34.MsgBurn;
                fromAmino(object: _34.MsgBurnAmino): _34.MsgBurn;
                toAmino(message: _34.MsgBurn): _34.MsgBurnAmino;
                fromAminoMsg(object: _34.MsgBurnAminoMsg): _34.MsgBurn;
                fromProtoMsg(message: _34.MsgBurnProtoMsg): _34.MsgBurn;
                toProto(message: _34.MsgBurn): Uint8Array;
                toProtoMsg(message: _34.MsgBurn): _34.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _34.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgBurnResponse;
                fromPartial(_: Partial<_34.MsgBurnResponse>): _34.MsgBurnResponse;
                fromAmino(_: _34.MsgBurnResponseAmino): _34.MsgBurnResponse;
                toAmino(_: _34.MsgBurnResponse): _34.MsgBurnResponseAmino;
                fromAminoMsg(object: _34.MsgBurnResponseAminoMsg): _34.MsgBurnResponse;
                fromProtoMsg(message: _34.MsgBurnResponseProtoMsg): _34.MsgBurnResponse;
                toProto(message: _34.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _34.MsgBurnResponse): _34.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _34.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgChangeAdmin;
                fromPartial(object: Partial<_34.MsgChangeAdmin>): _34.MsgChangeAdmin;
                fromAmino(object: _34.MsgChangeAdminAmino): _34.MsgChangeAdmin;
                toAmino(message: _34.MsgChangeAdmin): _34.MsgChangeAdminAmino;
                fromAminoMsg(object: _34.MsgChangeAdminAminoMsg): _34.MsgChangeAdmin;
                fromProtoMsg(message: _34.MsgChangeAdminProtoMsg): _34.MsgChangeAdmin;
                toProto(message: _34.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _34.MsgChangeAdmin): _34.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _34.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgChangeAdminResponse;
                fromPartial(_: Partial<_34.MsgChangeAdminResponse>): _34.MsgChangeAdminResponse;
                fromAmino(_: _34.MsgChangeAdminResponseAmino): _34.MsgChangeAdminResponse;
                toAmino(_: _34.MsgChangeAdminResponse): _34.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _34.MsgChangeAdminResponseAminoMsg): _34.MsgChangeAdminResponse;
                fromProtoMsg(message: _34.MsgChangeAdminResponseProtoMsg): _34.MsgChangeAdminResponse;
                toProto(message: _34.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _34.MsgChangeAdminResponse): _34.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _34.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgSetDenomMetadata;
                fromPartial(object: Partial<_34.MsgSetDenomMetadata>): _34.MsgSetDenomMetadata;
                fromAmino(object: _34.MsgSetDenomMetadataAmino): _34.MsgSetDenomMetadata;
                toAmino(message: _34.MsgSetDenomMetadata): _34.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _34.MsgSetDenomMetadataAminoMsg): _34.MsgSetDenomMetadata;
                fromProtoMsg(message: _34.MsgSetDenomMetadataProtoMsg): _34.MsgSetDenomMetadata;
                toProto(message: _34.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _34.MsgSetDenomMetadata): _34.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _34.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_34.MsgSetDenomMetadataResponse>): _34.MsgSetDenomMetadataResponse;
                fromAmino(_: _34.MsgSetDenomMetadataResponseAmino): _34.MsgSetDenomMetadataResponse;
                toAmino(_: _34.MsgSetDenomMetadataResponse): _34.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _34.MsgSetDenomMetadataResponseAminoMsg): _34.MsgSetDenomMetadataResponse;
                fromProtoMsg(message: _34.MsgSetDenomMetadataResponseProtoMsg): _34.MsgSetDenomMetadataResponse;
                toProto(message: _34.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _34.MsgSetDenomMetadataResponse): _34.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _33.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.QueryParamsRequest;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
                fromAmino(_: _33.QueryParamsRequestAmino): _33.QueryParamsRequest;
                toAmino(_: _33.QueryParamsRequest): _33.QueryParamsRequestAmino;
                fromAminoMsg(object: _33.QueryParamsRequestAminoMsg): _33.QueryParamsRequest;
                fromProtoMsg(message: _33.QueryParamsRequestProtoMsg): _33.QueryParamsRequest;
                toProto(message: _33.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _33.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
                fromAmino(object: _33.QueryParamsResponseAmino): _33.QueryParamsResponse;
                toAmino(message: _33.QueryParamsResponse): _33.QueryParamsResponseAmino;
                fromAminoMsg(object: _33.QueryParamsResponseAminoMsg): _33.QueryParamsResponse;
                fromProtoMsg(message: _33.QueryParamsResponseProtoMsg): _33.QueryParamsResponse;
                toProto(message: _33.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _33.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_33.QueryDenomAuthorityMetadataRequest>): _33.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _33.QueryDenomAuthorityMetadataRequestAmino): _33.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _33.QueryDenomAuthorityMetadataRequest): _33.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _33.QueryDenomAuthorityMetadataRequestAminoMsg): _33.QueryDenomAuthorityMetadataRequest;
                fromProtoMsg(message: _33.QueryDenomAuthorityMetadataRequestProtoMsg): _33.QueryDenomAuthorityMetadataRequest;
                toProto(message: _33.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDenomAuthorityMetadataRequest): _33.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _33.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_33.QueryDenomAuthorityMetadataResponse>): _33.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _33.QueryDenomAuthorityMetadataResponseAmino): _33.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _33.QueryDenomAuthorityMetadataResponse): _33.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _33.QueryDenomAuthorityMetadataResponseAminoMsg): _33.QueryDenomAuthorityMetadataResponse;
                fromProtoMsg(message: _33.QueryDenomAuthorityMetadataResponseProtoMsg): _33.QueryDenomAuthorityMetadataResponse;
                toProto(message: _33.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDenomAuthorityMetadataResponse): _33.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _33.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_33.QueryDenomsFromCreatorRequest>): _33.QueryDenomsFromCreatorRequest;
                fromAmino(object: _33.QueryDenomsFromCreatorRequestAmino): _33.QueryDenomsFromCreatorRequest;
                toAmino(message: _33.QueryDenomsFromCreatorRequest): _33.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _33.QueryDenomsFromCreatorRequestAminoMsg): _33.QueryDenomsFromCreatorRequest;
                fromProtoMsg(message: _33.QueryDenomsFromCreatorRequestProtoMsg): _33.QueryDenomsFromCreatorRequest;
                toProto(message: _33.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDenomsFromCreatorRequest): _33.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _33.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_33.QueryDenomsFromCreatorResponse>): _33.QueryDenomsFromCreatorResponse;
                fromAmino(object: _33.QueryDenomsFromCreatorResponseAmino): _33.QueryDenomsFromCreatorResponse;
                toAmino(message: _33.QueryDenomsFromCreatorResponse): _33.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _33.QueryDenomsFromCreatorResponseAminoMsg): _33.QueryDenomsFromCreatorResponse;
                fromProtoMsg(message: _33.QueryDenomsFromCreatorResponseProtoMsg): _33.QueryDenomsFromCreatorResponse;
                toProto(message: _33.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDenomsFromCreatorResponse): _33.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _32.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Params;
                fromPartial(object: Partial<_32.Params>): _32.Params;
                fromAmino(object: _32.ParamsAmino): _32.Params;
                toAmino(message: _32.Params): _32.ParamsAmino;
                fromAminoMsg(object: _32.ParamsAminoMsg): _32.Params;
                fromProtoMsg(message: _32.ParamsProtoMsg): _32.Params;
                toProto(message: _32.Params): Uint8Array;
                toProtoMsg(message: _32.Params): _32.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _31.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
                fromAmino(object: _31.GenesisStateAmino): _31.GenesisState;
                toAmino(message: _31.GenesisState): _31.GenesisStateAmino;
                fromAminoMsg(object: _31.GenesisStateAminoMsg): _31.GenesisState;
                fromProtoMsg(message: _31.GenesisStateProtoMsg): _31.GenesisState;
                toProto(message: _31.GenesisState): Uint8Array;
                toProtoMsg(message: _31.GenesisState): _31.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _31.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.GenesisDenom;
                fromPartial(object: Partial<_31.GenesisDenom>): _31.GenesisDenom;
                fromAmino(object: _31.GenesisDenomAmino): _31.GenesisDenom;
                toAmino(message: _31.GenesisDenom): _31.GenesisDenomAmino;
                fromAminoMsg(object: _31.GenesisDenomAminoMsg): _31.GenesisDenom;
                fromProtoMsg(message: _31.GenesisDenomProtoMsg): _31.GenesisDenom;
                toProto(message: _31.GenesisDenom): Uint8Array;
                toProtoMsg(message: _31.GenesisDenom): _31.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _30.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.DenomAuthorityMetadata;
                fromPartial(object: Partial<_30.DenomAuthorityMetadata>): _30.DenomAuthorityMetadata;
                fromAmino(object: _30.DenomAuthorityMetadataAmino): _30.DenomAuthorityMetadata;
                toAmino(message: _30.DenomAuthorityMetadata): _30.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _30.DenomAuthorityMetadataAminoMsg): _30.DenomAuthorityMetadata;
                fromProtoMsg(message: _30.DenomAuthorityMetadataProtoMsg): _30.DenomAuthorityMetadata;
                toProto(message: _30.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _30.DenomAuthorityMetadata): _30.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            quicksilver: {
                airdrop: {
                    v1: _219.MsgClientImpl;
                };
                interchainquery: {
                    v1: _220.MsgClientImpl;
                };
                interchainstaking: {
                    v1: _221.MsgClientImpl;
                };
                participationrewards: {
                    v1: _222.MsgClientImpl;
                };
                tokenfactory: {
                    v1beta1: _223.MsgClientImpl;
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
            quicksilver: {
                airdrop: {
                    v1: {
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                        zoneDrop(request: _5.QueryZoneDropRequest): Promise<_5.QueryZoneDropResponse>;
                        accountBalance(request: _5.QueryAccountBalanceRequest): Promise<_5.QueryAccountBalanceResponse>;
                        zoneDrops(request: _5.QueryZoneDropsRequest): Promise<_5.QueryZoneDropsResponse>;
                        claimRecord(request: _5.QueryClaimRecordRequest): Promise<_5.QueryClaimRecordResponse>;
                        claimRecords(request: _5.QueryClaimRecordsRequest): Promise<_5.QueryClaimRecordsResponse>;
                    };
                };
                claimsmanager: {
                    v1: {
                        claims(request: _9.QueryClaimsRequest): Promise<_9.QueryClaimsResponse>;
                        lastEpochClaims(request: _9.QueryClaimsRequest): Promise<_9.QueryClaimsResponse>;
                        userClaims(request: _9.QueryClaimsRequest): Promise<_9.QueryClaimsResponse>;
                        userLastEpochClaims(request: _9.QueryClaimsRequest): Promise<_9.QueryClaimsResponse>;
                    };
                };
                epochs: {
                    v1: {
                        epochInfos(request?: _11.QueryEpochsInfoRequest): Promise<_11.QueryEpochsInfoResponse>;
                        currentEpoch(request: _11.QueryCurrentEpochRequest): Promise<_11.QueryCurrentEpochResponse>;
                    };
                };
                interchainstaking: {
                    v1: {
                        zones(request?: _20.QueryZonesRequest): Promise<_20.QueryZonesResponse>;
                        zone(request: _20.QueryZoneRequest): Promise<_20.QueryZoneResponse>;
                        zoneValidators(request: _20.QueryZoneValidatorsRequest): Promise<_20.QueryZoneValidatorsResponse>;
                        depositAccount(request: _20.QueryDepositAccountForChainRequest): Promise<_20.QueryDepositAccountForChainResponse>;
                        delegatorIntent(request: _20.QueryDelegatorIntentRequest): Promise<_20.QueryDelegatorIntentResponse>;
                        delegatorIntents(request: _20.QueryDelegatorIntentsRequest): Promise<_20.QueryDelegatorIntentsResponse>;
                        delegations(request: _20.QueryDelegationsRequest): Promise<_20.QueryDelegationsResponse>;
                        receipts(request: _20.QueryReceiptsRequest): Promise<_20.QueryReceiptsResponse>;
                        txStatus(request: _20.QueryTxStatusRequest): Promise<_20.QueryTxStatusResponse>;
                        zoneWithdrawalRecords(request: _20.QueryWithdrawalRecordsRequest): Promise<_20.QueryWithdrawalRecordsResponse>;
                        withdrawalRecords(request: _20.QueryWithdrawalRecordsRequest): Promise<_20.QueryWithdrawalRecordsResponse>;
                        userWithdrawalRecords(request: _20.QueryUserWithdrawalRecordsRequest): Promise<_20.QueryWithdrawalRecordsResponse>;
                        unbondingRecords(request: _20.QueryUnbondingRecordsRequest): Promise<_20.QueryUnbondingRecordsResponse>;
                        redelegationRecords(request: _20.QueryRedelegationRecordsRequest): Promise<_20.QueryRedelegationRecordsResponse>;
                        mappedAccounts(request: _20.QueryMappedAccountsRequest): Promise<_20.QueryMappedAccountsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                        epochProvisions(request?: _23.QueryEpochProvisionsRequest): Promise<_23.QueryEpochProvisionsResponse>;
                    };
                };
                participationrewards: {
                    v1: {
                        params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        protocolData(request: _28.QueryProtocolDataRequest): Promise<_28.QueryProtocolDataResponse>;
                    };
                };
                supply: {
                    v1: {
                        supply(request?: _29.QuerySupplyRequest): Promise<_29.QuerySupplyResponse>;
                    };
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _33.QueryDenomAuthorityMetadataRequest): Promise<_33.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _33.QueryDenomsFromCreatorRequest): Promise<_33.QueryDenomsFromCreatorResponse>;
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
            quicksilver: {
                airdrop: {
                    v1: _203.LCDQueryClient;
                };
                claimsmanager: {
                    v1: _204.LCDQueryClient;
                };
                epochs: {
                    v1: _205.LCDQueryClient;
                };
                interchainstaking: {
                    v1: _206.LCDQueryClient;
                };
                mint: {
                    v1beta1: _207.LCDQueryClient;
                };
                participationrewards: {
                    v1: _208.LCDQueryClient;
                };
                supply: {
                    v1: _209.LCDQueryClient;
                };
                tokenfactory: {
                    v1beta1: _210.LCDQueryClient;
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
