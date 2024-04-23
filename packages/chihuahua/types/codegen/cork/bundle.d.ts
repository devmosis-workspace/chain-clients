import * as _15 from "./v2/cork";
import * as _16 from "./v2/genesis";
import * as _17 from "./v2/proposal";
import * as _18 from "./v2/query";
import * as _19 from "./v2/tx";
import * as _157 from "./v2/query.lcd";
import * as _158 from "./v2/query.rpc.Query";
import * as _159 from "./v2/tx.rpc.msg";
export declare namespace cork {
    const v2: {
        MsgClientImpl: typeof _159.MsgClientImpl;
        QueryClientImpl: typeof _158.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            queryParams(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
            queryCellarIDs(request?: _18.QueryCellarIDsRequest): Promise<_18.QueryCellarIDsResponse>;
            queryScheduledCorks(request?: _18.QueryScheduledCorksRequest): Promise<_18.QueryScheduledCorksResponse>;
            queryScheduledBlockHeights(request?: _18.QueryScheduledBlockHeightsRequest): Promise<_18.QueryScheduledBlockHeightsResponse>;
            queryScheduledCorksByBlockHeight(request: _18.QueryScheduledCorksByBlockHeightRequest): Promise<_18.QueryScheduledCorksByBlockHeightResponse>;
            queryScheduledCorksByID(request: _18.QueryScheduledCorksByIDRequest): Promise<_18.QueryScheduledCorksByIDResponse>;
            queryCorkResult(request: _18.QueryCorkResultRequest): Promise<_18.QueryCorkResultResponse>;
            queryCorkResults(request?: _18.QueryCorkResultsRequest): Promise<_18.QueryCorkResultsResponse>;
        };
        LCDQueryClient: typeof _157.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                scheduleCork(value: _19.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                scheduleCork(value: _19.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _19.MsgScheduleCorkRequest;
                };
            };
            fromJSON: {
                scheduleCork(value: any): {
                    typeUrl: string;
                    value: _19.MsgScheduleCorkRequest;
                };
            };
            fromPartial: {
                scheduleCork(value: _19.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _19.MsgScheduleCorkRequest;
                };
            };
        };
        AminoConverter: {
            "/cork.v2.MsgScheduleCorkRequest": {
                aminoType: string;
                toAmino: (message: _19.MsgScheduleCorkRequest) => _19.MsgScheduleCorkRequestAmino;
                fromAmino: (object: _19.MsgScheduleCorkRequestAmino) => _19.MsgScheduleCorkRequest;
            };
        };
        MsgScheduleCorkRequest: {
            typeUrl: string;
            encode(message: _19.MsgScheduleCorkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.MsgScheduleCorkRequest;
            fromPartial(object: Partial<_19.MsgScheduleCorkRequest>): _19.MsgScheduleCorkRequest;
            fromAmino(object: _19.MsgScheduleCorkRequestAmino): _19.MsgScheduleCorkRequest;
            toAmino(message: _19.MsgScheduleCorkRequest): _19.MsgScheduleCorkRequestAmino;
            fromAminoMsg(object: _19.MsgScheduleCorkRequestAminoMsg): _19.MsgScheduleCorkRequest;
            fromProtoMsg(message: _19.MsgScheduleCorkRequestProtoMsg): _19.MsgScheduleCorkRequest;
            toProto(message: _19.MsgScheduleCorkRequest): Uint8Array;
            toProtoMsg(message: _19.MsgScheduleCorkRequest): _19.MsgScheduleCorkRequestProtoMsg;
        };
        MsgScheduleCorkResponse: {
            typeUrl: string;
            encode(message: _19.MsgScheduleCorkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.MsgScheduleCorkResponse;
            fromPartial(object: Partial<_19.MsgScheduleCorkResponse>): _19.MsgScheduleCorkResponse;
            fromAmino(object: _19.MsgScheduleCorkResponseAmino): _19.MsgScheduleCorkResponse;
            toAmino(message: _19.MsgScheduleCorkResponse): _19.MsgScheduleCorkResponseAmino;
            fromAminoMsg(object: _19.MsgScheduleCorkResponseAminoMsg): _19.MsgScheduleCorkResponse;
            fromProtoMsg(message: _19.MsgScheduleCorkResponseProtoMsg): _19.MsgScheduleCorkResponse;
            toProto(message: _19.MsgScheduleCorkResponse): Uint8Array;
            toProtoMsg(message: _19.MsgScheduleCorkResponse): _19.MsgScheduleCorkResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _18.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _18.QueryParamsRequest;
            fromPartial(_: Partial<_18.QueryParamsRequest>): _18.QueryParamsRequest;
            fromAmino(_: _18.QueryParamsRequestAmino): _18.QueryParamsRequest;
            toAmino(_: _18.QueryParamsRequest): _18.QueryParamsRequestAmino;
            fromAminoMsg(object: _18.QueryParamsRequestAminoMsg): _18.QueryParamsRequest;
            fromProtoMsg(message: _18.QueryParamsRequestProtoMsg): _18.QueryParamsRequest;
            toProto(message: _18.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _18.QueryParamsRequest): _18.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _18.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryParamsResponse;
            fromPartial(object: Partial<_18.QueryParamsResponse>): _18.QueryParamsResponse;
            fromAmino(object: _18.QueryParamsResponseAmino): _18.QueryParamsResponse;
            toAmino(message: _18.QueryParamsResponse): _18.QueryParamsResponseAmino;
            fromAminoMsg(object: _18.QueryParamsResponseAminoMsg): _18.QueryParamsResponse;
            fromProtoMsg(message: _18.QueryParamsResponseProtoMsg): _18.QueryParamsResponse;
            toProto(message: _18.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _18.QueryParamsResponse): _18.QueryParamsResponseProtoMsg;
        };
        QueryCellarIDsRequest: {
            typeUrl: string;
            encode(_: _18.QueryCellarIDsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _18.QueryCellarIDsRequest;
            fromPartial(_: Partial<_18.QueryCellarIDsRequest>): _18.QueryCellarIDsRequest;
            fromAmino(_: _18.QueryCellarIDsRequestAmino): _18.QueryCellarIDsRequest;
            toAmino(_: _18.QueryCellarIDsRequest): _18.QueryCellarIDsRequestAmino;
            fromAminoMsg(object: _18.QueryCellarIDsRequestAminoMsg): _18.QueryCellarIDsRequest;
            fromProtoMsg(message: _18.QueryCellarIDsRequestProtoMsg): _18.QueryCellarIDsRequest;
            toProto(message: _18.QueryCellarIDsRequest): Uint8Array;
            toProtoMsg(message: _18.QueryCellarIDsRequest): _18.QueryCellarIDsRequestProtoMsg;
        };
        QueryCellarIDsResponse: {
            typeUrl: string;
            encode(message: _18.QueryCellarIDsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryCellarIDsResponse;
            fromPartial(object: Partial<_18.QueryCellarIDsResponse>): _18.QueryCellarIDsResponse;
            fromAmino(object: _18.QueryCellarIDsResponseAmino): _18.QueryCellarIDsResponse;
            toAmino(message: _18.QueryCellarIDsResponse): _18.QueryCellarIDsResponseAmino;
            fromAminoMsg(object: _18.QueryCellarIDsResponseAminoMsg): _18.QueryCellarIDsResponse;
            fromProtoMsg(message: _18.QueryCellarIDsResponseProtoMsg): _18.QueryCellarIDsResponse;
            toProto(message: _18.QueryCellarIDsResponse): Uint8Array;
            toProtoMsg(message: _18.QueryCellarIDsResponse): _18.QueryCellarIDsResponseProtoMsg;
        };
        QueryScheduledCorksRequest: {
            typeUrl: string;
            encode(_: _18.QueryScheduledCorksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _18.QueryScheduledCorksRequest;
            fromPartial(_: Partial<_18.QueryScheduledCorksRequest>): _18.QueryScheduledCorksRequest;
            fromAmino(_: _18.QueryScheduledCorksRequestAmino): _18.QueryScheduledCorksRequest;
            toAmino(_: _18.QueryScheduledCorksRequest): _18.QueryScheduledCorksRequestAmino;
            fromAminoMsg(object: _18.QueryScheduledCorksRequestAminoMsg): _18.QueryScheduledCorksRequest;
            fromProtoMsg(message: _18.QueryScheduledCorksRequestProtoMsg): _18.QueryScheduledCorksRequest;
            toProto(message: _18.QueryScheduledCorksRequest): Uint8Array;
            toProtoMsg(message: _18.QueryScheduledCorksRequest): _18.QueryScheduledCorksRequestProtoMsg;
        };
        QueryScheduledCorksResponse: {
            typeUrl: string;
            encode(message: _18.QueryScheduledCorksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryScheduledCorksResponse;
            fromPartial(object: Partial<_18.QueryScheduledCorksResponse>): _18.QueryScheduledCorksResponse;
            fromAmino(object: _18.QueryScheduledCorksResponseAmino): _18.QueryScheduledCorksResponse;
            toAmino(message: _18.QueryScheduledCorksResponse): _18.QueryScheduledCorksResponseAmino;
            fromAminoMsg(object: _18.QueryScheduledCorksResponseAminoMsg): _18.QueryScheduledCorksResponse;
            fromProtoMsg(message: _18.QueryScheduledCorksResponseProtoMsg): _18.QueryScheduledCorksResponse;
            toProto(message: _18.QueryScheduledCorksResponse): Uint8Array;
            toProtoMsg(message: _18.QueryScheduledCorksResponse): _18.QueryScheduledCorksResponseProtoMsg;
        };
        QueryScheduledBlockHeightsRequest: {
            typeUrl: string;
            encode(_: _18.QueryScheduledBlockHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _18.QueryScheduledBlockHeightsRequest;
            fromPartial(_: Partial<_18.QueryScheduledBlockHeightsRequest>): _18.QueryScheduledBlockHeightsRequest;
            fromAmino(_: _18.QueryScheduledBlockHeightsRequestAmino): _18.QueryScheduledBlockHeightsRequest;
            toAmino(_: _18.QueryScheduledBlockHeightsRequest): _18.QueryScheduledBlockHeightsRequestAmino;
            fromAminoMsg(object: _18.QueryScheduledBlockHeightsRequestAminoMsg): _18.QueryScheduledBlockHeightsRequest;
            fromProtoMsg(message: _18.QueryScheduledBlockHeightsRequestProtoMsg): _18.QueryScheduledBlockHeightsRequest;
            toProto(message: _18.QueryScheduledBlockHeightsRequest): Uint8Array;
            toProtoMsg(message: _18.QueryScheduledBlockHeightsRequest): _18.QueryScheduledBlockHeightsRequestProtoMsg;
        };
        QueryScheduledBlockHeightsResponse: {
            typeUrl: string;
            encode(message: _18.QueryScheduledBlockHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryScheduledBlockHeightsResponse;
            fromPartial(object: Partial<_18.QueryScheduledBlockHeightsResponse>): _18.QueryScheduledBlockHeightsResponse;
            fromAmino(object: _18.QueryScheduledBlockHeightsResponseAmino): _18.QueryScheduledBlockHeightsResponse;
            toAmino(message: _18.QueryScheduledBlockHeightsResponse): _18.QueryScheduledBlockHeightsResponseAmino;
            fromAminoMsg(object: _18.QueryScheduledBlockHeightsResponseAminoMsg): _18.QueryScheduledBlockHeightsResponse;
            fromProtoMsg(message: _18.QueryScheduledBlockHeightsResponseProtoMsg): _18.QueryScheduledBlockHeightsResponse;
            toProto(message: _18.QueryScheduledBlockHeightsResponse): Uint8Array;
            toProtoMsg(message: _18.QueryScheduledBlockHeightsResponse): _18.QueryScheduledBlockHeightsResponseProtoMsg;
        };
        QueryScheduledCorksByBlockHeightRequest: {
            typeUrl: string;
            encode(message: _18.QueryScheduledCorksByBlockHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryScheduledCorksByBlockHeightRequest;
            fromPartial(object: Partial<_18.QueryScheduledCorksByBlockHeightRequest>): _18.QueryScheduledCorksByBlockHeightRequest;
            fromAmino(object: _18.QueryScheduledCorksByBlockHeightRequestAmino): _18.QueryScheduledCorksByBlockHeightRequest;
            toAmino(message: _18.QueryScheduledCorksByBlockHeightRequest): _18.QueryScheduledCorksByBlockHeightRequestAmino;
            fromAminoMsg(object: _18.QueryScheduledCorksByBlockHeightRequestAminoMsg): _18.QueryScheduledCorksByBlockHeightRequest;
            fromProtoMsg(message: _18.QueryScheduledCorksByBlockHeightRequestProtoMsg): _18.QueryScheduledCorksByBlockHeightRequest;
            toProto(message: _18.QueryScheduledCorksByBlockHeightRequest): Uint8Array;
            toProtoMsg(message: _18.QueryScheduledCorksByBlockHeightRequest): _18.QueryScheduledCorksByBlockHeightRequestProtoMsg;
        };
        QueryScheduledCorksByBlockHeightResponse: {
            typeUrl: string;
            encode(message: _18.QueryScheduledCorksByBlockHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryScheduledCorksByBlockHeightResponse;
            fromPartial(object: Partial<_18.QueryScheduledCorksByBlockHeightResponse>): _18.QueryScheduledCorksByBlockHeightResponse;
            fromAmino(object: _18.QueryScheduledCorksByBlockHeightResponseAmino): _18.QueryScheduledCorksByBlockHeightResponse;
            toAmino(message: _18.QueryScheduledCorksByBlockHeightResponse): _18.QueryScheduledCorksByBlockHeightResponseAmino;
            fromAminoMsg(object: _18.QueryScheduledCorksByBlockHeightResponseAminoMsg): _18.QueryScheduledCorksByBlockHeightResponse;
            fromProtoMsg(message: _18.QueryScheduledCorksByBlockHeightResponseProtoMsg): _18.QueryScheduledCorksByBlockHeightResponse;
            toProto(message: _18.QueryScheduledCorksByBlockHeightResponse): Uint8Array;
            toProtoMsg(message: _18.QueryScheduledCorksByBlockHeightResponse): _18.QueryScheduledCorksByBlockHeightResponseProtoMsg;
        };
        QueryScheduledCorksByIDRequest: {
            typeUrl: string;
            encode(message: _18.QueryScheduledCorksByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryScheduledCorksByIDRequest;
            fromPartial(object: Partial<_18.QueryScheduledCorksByIDRequest>): _18.QueryScheduledCorksByIDRequest;
            fromAmino(object: _18.QueryScheduledCorksByIDRequestAmino): _18.QueryScheduledCorksByIDRequest;
            toAmino(message: _18.QueryScheduledCorksByIDRequest): _18.QueryScheduledCorksByIDRequestAmino;
            fromAminoMsg(object: _18.QueryScheduledCorksByIDRequestAminoMsg): _18.QueryScheduledCorksByIDRequest;
            fromProtoMsg(message: _18.QueryScheduledCorksByIDRequestProtoMsg): _18.QueryScheduledCorksByIDRequest;
            toProto(message: _18.QueryScheduledCorksByIDRequest): Uint8Array;
            toProtoMsg(message: _18.QueryScheduledCorksByIDRequest): _18.QueryScheduledCorksByIDRequestProtoMsg;
        };
        QueryScheduledCorksByIDResponse: {
            typeUrl: string;
            encode(message: _18.QueryScheduledCorksByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryScheduledCorksByIDResponse;
            fromPartial(object: Partial<_18.QueryScheduledCorksByIDResponse>): _18.QueryScheduledCorksByIDResponse;
            fromAmino(object: _18.QueryScheduledCorksByIDResponseAmino): _18.QueryScheduledCorksByIDResponse;
            toAmino(message: _18.QueryScheduledCorksByIDResponse): _18.QueryScheduledCorksByIDResponseAmino;
            fromAminoMsg(object: _18.QueryScheduledCorksByIDResponseAminoMsg): _18.QueryScheduledCorksByIDResponse;
            fromProtoMsg(message: _18.QueryScheduledCorksByIDResponseProtoMsg): _18.QueryScheduledCorksByIDResponse;
            toProto(message: _18.QueryScheduledCorksByIDResponse): Uint8Array;
            toProtoMsg(message: _18.QueryScheduledCorksByIDResponse): _18.QueryScheduledCorksByIDResponseProtoMsg;
        };
        QueryCorkResultRequest: {
            typeUrl: string;
            encode(message: _18.QueryCorkResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryCorkResultRequest;
            fromPartial(object: Partial<_18.QueryCorkResultRequest>): _18.QueryCorkResultRequest;
            fromAmino(object: _18.QueryCorkResultRequestAmino): _18.QueryCorkResultRequest;
            toAmino(message: _18.QueryCorkResultRequest): _18.QueryCorkResultRequestAmino;
            fromAminoMsg(object: _18.QueryCorkResultRequestAminoMsg): _18.QueryCorkResultRequest;
            fromProtoMsg(message: _18.QueryCorkResultRequestProtoMsg): _18.QueryCorkResultRequest;
            toProto(message: _18.QueryCorkResultRequest): Uint8Array;
            toProtoMsg(message: _18.QueryCorkResultRequest): _18.QueryCorkResultRequestProtoMsg;
        };
        QueryCorkResultResponse: {
            typeUrl: string;
            encode(message: _18.QueryCorkResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryCorkResultResponse;
            fromPartial(object: Partial<_18.QueryCorkResultResponse>): _18.QueryCorkResultResponse;
            fromAmino(object: _18.QueryCorkResultResponseAmino): _18.QueryCorkResultResponse;
            toAmino(message: _18.QueryCorkResultResponse): _18.QueryCorkResultResponseAmino;
            fromAminoMsg(object: _18.QueryCorkResultResponseAminoMsg): _18.QueryCorkResultResponse;
            fromProtoMsg(message: _18.QueryCorkResultResponseProtoMsg): _18.QueryCorkResultResponse;
            toProto(message: _18.QueryCorkResultResponse): Uint8Array;
            toProtoMsg(message: _18.QueryCorkResultResponse): _18.QueryCorkResultResponseProtoMsg;
        };
        QueryCorkResultsRequest: {
            typeUrl: string;
            encode(_: _18.QueryCorkResultsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _18.QueryCorkResultsRequest;
            fromPartial(_: Partial<_18.QueryCorkResultsRequest>): _18.QueryCorkResultsRequest;
            fromAmino(_: _18.QueryCorkResultsRequestAmino): _18.QueryCorkResultsRequest;
            toAmino(_: _18.QueryCorkResultsRequest): _18.QueryCorkResultsRequestAmino;
            fromAminoMsg(object: _18.QueryCorkResultsRequestAminoMsg): _18.QueryCorkResultsRequest;
            fromProtoMsg(message: _18.QueryCorkResultsRequestProtoMsg): _18.QueryCorkResultsRequest;
            toProto(message: _18.QueryCorkResultsRequest): Uint8Array;
            toProtoMsg(message: _18.QueryCorkResultsRequest): _18.QueryCorkResultsRequestProtoMsg;
        };
        QueryCorkResultsResponse: {
            typeUrl: string;
            encode(message: _18.QueryCorkResultsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryCorkResultsResponse;
            fromPartial(object: Partial<_18.QueryCorkResultsResponse>): _18.QueryCorkResultsResponse;
            fromAmino(object: _18.QueryCorkResultsResponseAmino): _18.QueryCorkResultsResponse;
            toAmino(message: _18.QueryCorkResultsResponse): _18.QueryCorkResultsResponseAmino;
            fromAminoMsg(object: _18.QueryCorkResultsResponseAminoMsg): _18.QueryCorkResultsResponse;
            fromProtoMsg(message: _18.QueryCorkResultsResponseProtoMsg): _18.QueryCorkResultsResponse;
            toProto(message: _18.QueryCorkResultsResponse): Uint8Array;
            toProtoMsg(message: _18.QueryCorkResultsResponse): _18.QueryCorkResultsResponseProtoMsg;
        };
        AddManagedCellarIDsProposal: {
            typeUrl: string;
            encode(message: _17.AddManagedCellarIDsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.AddManagedCellarIDsProposal;
            fromPartial(object: Partial<_17.AddManagedCellarIDsProposal>): _17.AddManagedCellarIDsProposal;
            fromAmino(object: _17.AddManagedCellarIDsProposalAmino): _17.AddManagedCellarIDsProposal;
            toAmino(message: _17.AddManagedCellarIDsProposal): _17.AddManagedCellarIDsProposalAmino;
            fromAminoMsg(object: _17.AddManagedCellarIDsProposalAminoMsg): _17.AddManagedCellarIDsProposal;
            fromProtoMsg(message: _17.AddManagedCellarIDsProposalProtoMsg): _17.AddManagedCellarIDsProposal;
            toProto(message: _17.AddManagedCellarIDsProposal): Uint8Array;
            toProtoMsg(message: _17.AddManagedCellarIDsProposal): _17.AddManagedCellarIDsProposalProtoMsg;
        };
        AddManagedCellarIDsProposalWithDeposit: {
            typeUrl: string;
            encode(message: _17.AddManagedCellarIDsProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.AddManagedCellarIDsProposalWithDeposit;
            fromPartial(object: Partial<_17.AddManagedCellarIDsProposalWithDeposit>): _17.AddManagedCellarIDsProposalWithDeposit;
            fromAmino(object: _17.AddManagedCellarIDsProposalWithDepositAmino): _17.AddManagedCellarIDsProposalWithDeposit;
            toAmino(message: _17.AddManagedCellarIDsProposalWithDeposit): _17.AddManagedCellarIDsProposalWithDepositAmino;
            fromAminoMsg(object: _17.AddManagedCellarIDsProposalWithDepositAminoMsg): _17.AddManagedCellarIDsProposalWithDeposit;
            fromProtoMsg(message: _17.AddManagedCellarIDsProposalWithDepositProtoMsg): _17.AddManagedCellarIDsProposalWithDeposit;
            toProto(message: _17.AddManagedCellarIDsProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _17.AddManagedCellarIDsProposalWithDeposit): _17.AddManagedCellarIDsProposalWithDepositProtoMsg;
        };
        RemoveManagedCellarIDsProposal: {
            typeUrl: string;
            encode(message: _17.RemoveManagedCellarIDsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.RemoveManagedCellarIDsProposal;
            fromPartial(object: Partial<_17.RemoveManagedCellarIDsProposal>): _17.RemoveManagedCellarIDsProposal;
            fromAmino(object: _17.RemoveManagedCellarIDsProposalAmino): _17.RemoveManagedCellarIDsProposal;
            toAmino(message: _17.RemoveManagedCellarIDsProposal): _17.RemoveManagedCellarIDsProposalAmino;
            fromAminoMsg(object: _17.RemoveManagedCellarIDsProposalAminoMsg): _17.RemoveManagedCellarIDsProposal;
            fromProtoMsg(message: _17.RemoveManagedCellarIDsProposalProtoMsg): _17.RemoveManagedCellarIDsProposal;
            toProto(message: _17.RemoveManagedCellarIDsProposal): Uint8Array;
            toProtoMsg(message: _17.RemoveManagedCellarIDsProposal): _17.RemoveManagedCellarIDsProposalProtoMsg;
        };
        RemoveManagedCellarIDsProposalWithDeposit: {
            typeUrl: string;
            encode(message: _17.RemoveManagedCellarIDsProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.RemoveManagedCellarIDsProposalWithDeposit;
            fromPartial(object: Partial<_17.RemoveManagedCellarIDsProposalWithDeposit>): _17.RemoveManagedCellarIDsProposalWithDeposit;
            fromAmino(object: _17.RemoveManagedCellarIDsProposalWithDepositAmino): _17.RemoveManagedCellarIDsProposalWithDeposit;
            toAmino(message: _17.RemoveManagedCellarIDsProposalWithDeposit): _17.RemoveManagedCellarIDsProposalWithDepositAmino;
            fromAminoMsg(object: _17.RemoveManagedCellarIDsProposalWithDepositAminoMsg): _17.RemoveManagedCellarIDsProposalWithDeposit;
            fromProtoMsg(message: _17.RemoveManagedCellarIDsProposalWithDepositProtoMsg): _17.RemoveManagedCellarIDsProposalWithDeposit;
            toProto(message: _17.RemoveManagedCellarIDsProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _17.RemoveManagedCellarIDsProposalWithDeposit): _17.RemoveManagedCellarIDsProposalWithDepositProtoMsg;
        };
        ScheduledCorkProposal: {
            typeUrl: string;
            encode(message: _17.ScheduledCorkProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.ScheduledCorkProposal;
            fromPartial(object: Partial<_17.ScheduledCorkProposal>): _17.ScheduledCorkProposal;
            fromAmino(object: _17.ScheduledCorkProposalAmino): _17.ScheduledCorkProposal;
            toAmino(message: _17.ScheduledCorkProposal): _17.ScheduledCorkProposalAmino;
            fromAminoMsg(object: _17.ScheduledCorkProposalAminoMsg): _17.ScheduledCorkProposal;
            fromProtoMsg(message: _17.ScheduledCorkProposalProtoMsg): _17.ScheduledCorkProposal;
            toProto(message: _17.ScheduledCorkProposal): Uint8Array;
            toProtoMsg(message: _17.ScheduledCorkProposal): _17.ScheduledCorkProposalProtoMsg;
        };
        ScheduledCorkProposalWithDeposit: {
            typeUrl: string;
            encode(message: _17.ScheduledCorkProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.ScheduledCorkProposalWithDeposit;
            fromPartial(object: Partial<_17.ScheduledCorkProposalWithDeposit>): _17.ScheduledCorkProposalWithDeposit;
            fromAmino(object: _17.ScheduledCorkProposalWithDepositAmino): _17.ScheduledCorkProposalWithDeposit;
            toAmino(message: _17.ScheduledCorkProposalWithDeposit): _17.ScheduledCorkProposalWithDepositAmino;
            fromAminoMsg(object: _17.ScheduledCorkProposalWithDepositAminoMsg): _17.ScheduledCorkProposalWithDeposit;
            fromProtoMsg(message: _17.ScheduledCorkProposalWithDepositProtoMsg): _17.ScheduledCorkProposalWithDeposit;
            toProto(message: _17.ScheduledCorkProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _17.ScheduledCorkProposalWithDeposit): _17.ScheduledCorkProposalWithDepositProtoMsg;
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
        Cork: {
            typeUrl: string;
            encode(message: _15.Cork, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.Cork;
            fromPartial(object: Partial<_15.Cork>): _15.Cork;
            fromAmino(object: _15.CorkAmino): _15.Cork;
            toAmino(message: _15.Cork): _15.CorkAmino;
            fromAminoMsg(object: _15.CorkAminoMsg): _15.Cork;
            fromProtoMsg(message: _15.CorkProtoMsg): _15.Cork;
            toProto(message: _15.Cork): Uint8Array;
            toProtoMsg(message: _15.Cork): _15.CorkProtoMsg;
        };
        ScheduledCork: {
            typeUrl: string;
            encode(message: _15.ScheduledCork, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.ScheduledCork;
            fromPartial(object: Partial<_15.ScheduledCork>): _15.ScheduledCork;
            fromAmino(object: _15.ScheduledCorkAmino): _15.ScheduledCork;
            toAmino(message: _15.ScheduledCork): _15.ScheduledCorkAmino;
            fromAminoMsg(object: _15.ScheduledCorkAminoMsg): _15.ScheduledCork;
            fromProtoMsg(message: _15.ScheduledCorkProtoMsg): _15.ScheduledCork;
            toProto(message: _15.ScheduledCork): Uint8Array;
            toProtoMsg(message: _15.ScheduledCork): _15.ScheduledCorkProtoMsg;
        };
        CorkResult: {
            typeUrl: string;
            encode(message: _15.CorkResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.CorkResult;
            fromPartial(object: Partial<_15.CorkResult>): _15.CorkResult;
            fromAmino(object: _15.CorkResultAmino): _15.CorkResult;
            toAmino(message: _15.CorkResult): _15.CorkResultAmino;
            fromAminoMsg(object: _15.CorkResultAminoMsg): _15.CorkResult;
            fromProtoMsg(message: _15.CorkResultProtoMsg): _15.CorkResult;
            toProto(message: _15.CorkResult): Uint8Array;
            toProtoMsg(message: _15.CorkResult): _15.CorkResultProtoMsg;
        };
        CellarIDSet: {
            typeUrl: string;
            encode(message: _15.CellarIDSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.CellarIDSet;
            fromPartial(object: Partial<_15.CellarIDSet>): _15.CellarIDSet;
            fromAmino(object: _15.CellarIDSetAmino): _15.CellarIDSet;
            toAmino(message: _15.CellarIDSet): _15.CellarIDSetAmino;
            fromAminoMsg(object: _15.CellarIDSetAminoMsg): _15.CellarIDSet;
            fromProtoMsg(message: _15.CellarIDSetProtoMsg): _15.CellarIDSet;
            toProto(message: _15.CellarIDSet): Uint8Array;
            toProtoMsg(message: _15.CellarIDSet): _15.CellarIDSetProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cork: {
                v2: _159.MsgClientImpl;
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
            cork: {
                v2: {
                    queryParams(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                    queryCellarIDs(request?: _18.QueryCellarIDsRequest): Promise<_18.QueryCellarIDsResponse>;
                    queryScheduledCorks(request?: _18.QueryScheduledCorksRequest): Promise<_18.QueryScheduledCorksResponse>;
                    queryScheduledBlockHeights(request?: _18.QueryScheduledBlockHeightsRequest): Promise<_18.QueryScheduledBlockHeightsResponse>;
                    queryScheduledCorksByBlockHeight(request: _18.QueryScheduledCorksByBlockHeightRequest): Promise<_18.QueryScheduledCorksByBlockHeightResponse>;
                    queryScheduledCorksByID(request: _18.QueryScheduledCorksByIDRequest): Promise<_18.QueryScheduledCorksByIDResponse>;
                    queryCorkResult(request: _18.QueryCorkResultRequest): Promise<_18.QueryCorkResultResponse>;
                    queryCorkResults(request?: _18.QueryCorkResultsRequest): Promise<_18.QueryCorkResultsResponse>;
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
            cork: {
                v2: _157.LCDQueryClient;
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
