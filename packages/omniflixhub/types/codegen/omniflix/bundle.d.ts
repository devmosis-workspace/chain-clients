import * as _4 from "../omniflix/itc/v1/genesis";
import * as _5 from "../omniflix/itc/v1/itc";
import * as _6 from "../omniflix/itc/v1/params";
import * as _7 from "../omniflix/itc/v1/query";
import * as _8 from "../omniflix/itc/v1/tx";
import * as _9 from "../omniflix/marketplace/v1beta1/auction";
import * as _10 from "../omniflix/marketplace/v1beta1/events";
import * as _11 from "../omniflix/marketplace/v1beta1/genesis";
import * as _12 from "../omniflix/marketplace/v1beta1/listing";
import * as _13 from "../omniflix/marketplace/v1beta1/params";
import * as _14 from "../omniflix/marketplace/v1beta1/query";
import * as _15 from "../omniflix/marketplace/v1beta1/tx";
import * as _115 from "../omniflix/itc/v1/query.lcd";
import * as _116 from "../omniflix/marketplace/v1beta1/query.lcd";
import * as _117 from "../omniflix/itc/v1/query.rpc.Query";
import * as _118 from "../omniflix/marketplace/v1beta1/query.rpc.Query";
import * as _119 from "../omniflix/itc/v1/tx.rpc.msg";
import * as _120 from "../omniflix/marketplace/v1beta1/tx.rpc.msg";
export declare namespace OmniFlix {
    namespace itc {
        const v1: {
            MsgClientImpl: typeof _119.MsgClientImpl;
            QueryClientImpl: typeof _117.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                campaigns(request: _7.QueryCampaignsRequest): Promise<_7.QueryCampaignsResponse>;
                campaign(request: _7.QueryCampaignRequest): Promise<_7.QueryCampaignResponse>;
                claims(request: _7.QueryClaimsRequest): Promise<_7.QueryClaimsResponse>;
            };
            LCDQueryClient: typeof _115.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCampaign(value: _8.MsgCreateCampaign): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelCampaign(value: _8.MsgCancelCampaign): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claim(value: _8.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositCampaign(value: _8.MsgDepositCampaign): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCampaign(value: _8.MsgCreateCampaign): {
                        typeUrl: string;
                        value: _8.MsgCreateCampaign;
                    };
                    cancelCampaign(value: _8.MsgCancelCampaign): {
                        typeUrl: string;
                        value: _8.MsgCancelCampaign;
                    };
                    claim(value: _8.MsgClaim): {
                        typeUrl: string;
                        value: _8.MsgClaim;
                    };
                    depositCampaign(value: _8.MsgDepositCampaign): {
                        typeUrl: string;
                        value: _8.MsgDepositCampaign;
                    };
                };
                fromJSON: {
                    createCampaign(value: any): {
                        typeUrl: string;
                        value: _8.MsgCreateCampaign;
                    };
                    cancelCampaign(value: any): {
                        typeUrl: string;
                        value: _8.MsgCancelCampaign;
                    };
                    claim(value: any): {
                        typeUrl: string;
                        value: _8.MsgClaim;
                    };
                    depositCampaign(value: any): {
                        typeUrl: string;
                        value: _8.MsgDepositCampaign;
                    };
                };
                fromPartial: {
                    createCampaign(value: _8.MsgCreateCampaign): {
                        typeUrl: string;
                        value: _8.MsgCreateCampaign;
                    };
                    cancelCampaign(value: _8.MsgCancelCampaign): {
                        typeUrl: string;
                        value: _8.MsgCancelCampaign;
                    };
                    claim(value: _8.MsgClaim): {
                        typeUrl: string;
                        value: _8.MsgClaim;
                    };
                    depositCampaign(value: _8.MsgDepositCampaign): {
                        typeUrl: string;
                        value: _8.MsgDepositCampaign;
                    };
                };
            };
            AminoConverter: {
                "/OmniFlix.itc.v1.MsgCreateCampaign": {
                    aminoType: string;
                    toAmino: (message: _8.MsgCreateCampaign) => _8.MsgCreateCampaignAmino;
                    fromAmino: (object: _8.MsgCreateCampaignAmino) => _8.MsgCreateCampaign;
                };
                "/OmniFlix.itc.v1.MsgCancelCampaign": {
                    aminoType: string;
                    toAmino: (message: _8.MsgCancelCampaign) => _8.MsgCancelCampaignAmino;
                    fromAmino: (object: _8.MsgCancelCampaignAmino) => _8.MsgCancelCampaign;
                };
                "/OmniFlix.itc.v1.MsgClaim": {
                    aminoType: string;
                    toAmino: (message: _8.MsgClaim) => _8.MsgClaimAmino;
                    fromAmino: (object: _8.MsgClaimAmino) => _8.MsgClaim;
                };
                "/OmniFlix.itc.v1.MsgDepositCampaign": {
                    aminoType: string;
                    toAmino: (message: _8.MsgDepositCampaign) => _8.MsgDepositCampaignAmino;
                    fromAmino: (object: _8.MsgDepositCampaignAmino) => _8.MsgDepositCampaign;
                };
            };
            MsgCreateCampaign: {
                typeUrl: string;
                encode(message: _8.MsgCreateCampaign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgCreateCampaign;
                fromPartial(object: Partial<_8.MsgCreateCampaign>): _8.MsgCreateCampaign;
                fromAmino(object: _8.MsgCreateCampaignAmino): _8.MsgCreateCampaign;
                toAmino(message: _8.MsgCreateCampaign): _8.MsgCreateCampaignAmino;
                fromAminoMsg(object: _8.MsgCreateCampaignAminoMsg): _8.MsgCreateCampaign;
                fromProtoMsg(message: _8.MsgCreateCampaignProtoMsg): _8.MsgCreateCampaign;
                toProto(message: _8.MsgCreateCampaign): Uint8Array;
                toProtoMsg(message: _8.MsgCreateCampaign): _8.MsgCreateCampaignProtoMsg;
            };
            MsgCreateCampaignResponse: {
                typeUrl: string;
                encode(_: _8.MsgCreateCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgCreateCampaignResponse;
                fromPartial(_: Partial<_8.MsgCreateCampaignResponse>): _8.MsgCreateCampaignResponse;
                fromAmino(_: _8.MsgCreateCampaignResponseAmino): _8.MsgCreateCampaignResponse;
                toAmino(_: _8.MsgCreateCampaignResponse): _8.MsgCreateCampaignResponseAmino;
                fromAminoMsg(object: _8.MsgCreateCampaignResponseAminoMsg): _8.MsgCreateCampaignResponse;
                fromProtoMsg(message: _8.MsgCreateCampaignResponseProtoMsg): _8.MsgCreateCampaignResponse;
                toProto(message: _8.MsgCreateCampaignResponse): Uint8Array;
                toProtoMsg(message: _8.MsgCreateCampaignResponse): _8.MsgCreateCampaignResponseProtoMsg;
            };
            MsgCancelCampaign: {
                typeUrl: string;
                encode(message: _8.MsgCancelCampaign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgCancelCampaign;
                fromPartial(object: Partial<_8.MsgCancelCampaign>): _8.MsgCancelCampaign;
                fromAmino(object: _8.MsgCancelCampaignAmino): _8.MsgCancelCampaign;
                toAmino(message: _8.MsgCancelCampaign): _8.MsgCancelCampaignAmino;
                fromAminoMsg(object: _8.MsgCancelCampaignAminoMsg): _8.MsgCancelCampaign;
                fromProtoMsg(message: _8.MsgCancelCampaignProtoMsg): _8.MsgCancelCampaign;
                toProto(message: _8.MsgCancelCampaign): Uint8Array;
                toProtoMsg(message: _8.MsgCancelCampaign): _8.MsgCancelCampaignProtoMsg;
            };
            MsgCancelCampaignResponse: {
                typeUrl: string;
                encode(_: _8.MsgCancelCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgCancelCampaignResponse;
                fromPartial(_: Partial<_8.MsgCancelCampaignResponse>): _8.MsgCancelCampaignResponse;
                fromAmino(_: _8.MsgCancelCampaignResponseAmino): _8.MsgCancelCampaignResponse;
                toAmino(_: _8.MsgCancelCampaignResponse): _8.MsgCancelCampaignResponseAmino;
                fromAminoMsg(object: _8.MsgCancelCampaignResponseAminoMsg): _8.MsgCancelCampaignResponse;
                fromProtoMsg(message: _8.MsgCancelCampaignResponseProtoMsg): _8.MsgCancelCampaignResponse;
                toProto(message: _8.MsgCancelCampaignResponse): Uint8Array;
                toProtoMsg(message: _8.MsgCancelCampaignResponse): _8.MsgCancelCampaignResponseProtoMsg;
            };
            MsgClaim: {
                typeUrl: string;
                encode(message: _8.MsgClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgClaim;
                fromPartial(object: Partial<_8.MsgClaim>): _8.MsgClaim;
                fromAmino(object: _8.MsgClaimAmino): _8.MsgClaim;
                toAmino(message: _8.MsgClaim): _8.MsgClaimAmino;
                fromAminoMsg(object: _8.MsgClaimAminoMsg): _8.MsgClaim;
                fromProtoMsg(message: _8.MsgClaimProtoMsg): _8.MsgClaim;
                toProto(message: _8.MsgClaim): Uint8Array;
                toProtoMsg(message: _8.MsgClaim): _8.MsgClaimProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                encode(_: _8.MsgClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgClaimResponse;
                fromPartial(_: Partial<_8.MsgClaimResponse>): _8.MsgClaimResponse;
                fromAmino(_: _8.MsgClaimResponseAmino): _8.MsgClaimResponse;
                toAmino(_: _8.MsgClaimResponse): _8.MsgClaimResponseAmino;
                fromAminoMsg(object: _8.MsgClaimResponseAminoMsg): _8.MsgClaimResponse;
                fromProtoMsg(message: _8.MsgClaimResponseProtoMsg): _8.MsgClaimResponse;
                toProto(message: _8.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _8.MsgClaimResponse): _8.MsgClaimResponseProtoMsg;
            };
            MsgDepositCampaign: {
                typeUrl: string;
                encode(message: _8.MsgDepositCampaign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgDepositCampaign;
                fromPartial(object: Partial<_8.MsgDepositCampaign>): _8.MsgDepositCampaign;
                fromAmino(object: _8.MsgDepositCampaignAmino): _8.MsgDepositCampaign;
                toAmino(message: _8.MsgDepositCampaign): _8.MsgDepositCampaignAmino;
                fromAminoMsg(object: _8.MsgDepositCampaignAminoMsg): _8.MsgDepositCampaign;
                fromProtoMsg(message: _8.MsgDepositCampaignProtoMsg): _8.MsgDepositCampaign;
                toProto(message: _8.MsgDepositCampaign): Uint8Array;
                toProtoMsg(message: _8.MsgDepositCampaign): _8.MsgDepositCampaignProtoMsg;
            };
            MsgDepositCampaignResponse: {
                typeUrl: string;
                encode(_: _8.MsgDepositCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgDepositCampaignResponse;
                fromPartial(_: Partial<_8.MsgDepositCampaignResponse>): _8.MsgDepositCampaignResponse;
                fromAmino(_: _8.MsgDepositCampaignResponseAmino): _8.MsgDepositCampaignResponse;
                toAmino(_: _8.MsgDepositCampaignResponse): _8.MsgDepositCampaignResponseAmino;
                fromAminoMsg(object: _8.MsgDepositCampaignResponseAminoMsg): _8.MsgDepositCampaignResponse;
                fromProtoMsg(message: _8.MsgDepositCampaignResponseProtoMsg): _8.MsgDepositCampaignResponse;
                toProto(message: _8.MsgDepositCampaignResponse): Uint8Array;
                toProtoMsg(message: _8.MsgDepositCampaignResponse): _8.MsgDepositCampaignResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _7.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.QueryParamsRequest;
                fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
                fromAmino(_: _7.QueryParamsRequestAmino): _7.QueryParamsRequest;
                toAmino(_: _7.QueryParamsRequest): _7.QueryParamsRequestAmino;
                fromAminoMsg(object: _7.QueryParamsRequestAminoMsg): _7.QueryParamsRequest;
                fromProtoMsg(message: _7.QueryParamsRequestProtoMsg): _7.QueryParamsRequest;
                toProto(message: _7.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryParamsRequest): _7.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _7.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryParamsResponse;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
                fromAmino(object: _7.QueryParamsResponseAmino): _7.QueryParamsResponse;
                toAmino(message: _7.QueryParamsResponse): _7.QueryParamsResponseAmino;
                fromAminoMsg(object: _7.QueryParamsResponseAminoMsg): _7.QueryParamsResponse;
                fromProtoMsg(message: _7.QueryParamsResponseProtoMsg): _7.QueryParamsResponse;
                toProto(message: _7.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryParamsResponse): _7.QueryParamsResponseProtoMsg;
            };
            QueryCampaignsRequest: {
                typeUrl: string;
                encode(message: _7.QueryCampaignsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryCampaignsRequest;
                fromPartial(object: Partial<_7.QueryCampaignsRequest>): _7.QueryCampaignsRequest;
                fromAmino(object: _7.QueryCampaignsRequestAmino): _7.QueryCampaignsRequest;
                toAmino(message: _7.QueryCampaignsRequest): _7.QueryCampaignsRequestAmino;
                fromAminoMsg(object: _7.QueryCampaignsRequestAminoMsg): _7.QueryCampaignsRequest;
                fromProtoMsg(message: _7.QueryCampaignsRequestProtoMsg): _7.QueryCampaignsRequest;
                toProto(message: _7.QueryCampaignsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryCampaignsRequest): _7.QueryCampaignsRequestProtoMsg;
            };
            QueryCampaignsResponse: {
                typeUrl: string;
                encode(message: _7.QueryCampaignsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryCampaignsResponse;
                fromPartial(object: Partial<_7.QueryCampaignsResponse>): _7.QueryCampaignsResponse;
                fromAmino(object: _7.QueryCampaignsResponseAmino): _7.QueryCampaignsResponse;
                toAmino(message: _7.QueryCampaignsResponse): _7.QueryCampaignsResponseAmino;
                fromAminoMsg(object: _7.QueryCampaignsResponseAminoMsg): _7.QueryCampaignsResponse;
                fromProtoMsg(message: _7.QueryCampaignsResponseProtoMsg): _7.QueryCampaignsResponse;
                toProto(message: _7.QueryCampaignsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryCampaignsResponse): _7.QueryCampaignsResponseProtoMsg;
            };
            QueryCampaignRequest: {
                typeUrl: string;
                encode(message: _7.QueryCampaignRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryCampaignRequest;
                fromPartial(object: Partial<_7.QueryCampaignRequest>): _7.QueryCampaignRequest;
                fromAmino(object: _7.QueryCampaignRequestAmino): _7.QueryCampaignRequest;
                toAmino(message: _7.QueryCampaignRequest): _7.QueryCampaignRequestAmino;
                fromAminoMsg(object: _7.QueryCampaignRequestAminoMsg): _7.QueryCampaignRequest;
                fromProtoMsg(message: _7.QueryCampaignRequestProtoMsg): _7.QueryCampaignRequest;
                toProto(message: _7.QueryCampaignRequest): Uint8Array;
                toProtoMsg(message: _7.QueryCampaignRequest): _7.QueryCampaignRequestProtoMsg;
            };
            QueryCampaignResponse: {
                typeUrl: string;
                encode(message: _7.QueryCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryCampaignResponse;
                fromPartial(object: Partial<_7.QueryCampaignResponse>): _7.QueryCampaignResponse;
                fromAmino(object: _7.QueryCampaignResponseAmino): _7.QueryCampaignResponse;
                toAmino(message: _7.QueryCampaignResponse): _7.QueryCampaignResponseAmino;
                fromAminoMsg(object: _7.QueryCampaignResponseAminoMsg): _7.QueryCampaignResponse;
                fromProtoMsg(message: _7.QueryCampaignResponseProtoMsg): _7.QueryCampaignResponse;
                toProto(message: _7.QueryCampaignResponse): Uint8Array;
                toProtoMsg(message: _7.QueryCampaignResponse): _7.QueryCampaignResponseProtoMsg;
            };
            QueryClaimsRequest: {
                typeUrl: string;
                encode(message: _7.QueryClaimsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryClaimsRequest;
                fromPartial(object: Partial<_7.QueryClaimsRequest>): _7.QueryClaimsRequest;
                fromAmino(object: _7.QueryClaimsRequestAmino): _7.QueryClaimsRequest;
                toAmino(message: _7.QueryClaimsRequest): _7.QueryClaimsRequestAmino;
                fromAminoMsg(object: _7.QueryClaimsRequestAminoMsg): _7.QueryClaimsRequest;
                fromProtoMsg(message: _7.QueryClaimsRequestProtoMsg): _7.QueryClaimsRequest;
                toProto(message: _7.QueryClaimsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryClaimsRequest): _7.QueryClaimsRequestProtoMsg;
            };
            QueryClaimsResponse: {
                typeUrl: string;
                encode(message: _7.QueryClaimsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryClaimsResponse;
                fromPartial(object: Partial<_7.QueryClaimsResponse>): _7.QueryClaimsResponse;
                fromAmino(object: _7.QueryClaimsResponseAmino): _7.QueryClaimsResponse;
                toAmino(message: _7.QueryClaimsResponse): _7.QueryClaimsResponseAmino;
                fromAminoMsg(object: _7.QueryClaimsResponseAminoMsg): _7.QueryClaimsResponse;
                fromProtoMsg(message: _7.QueryClaimsResponseProtoMsg): _7.QueryClaimsResponse;
                toProto(message: _7.QueryClaimsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryClaimsResponse): _7.QueryClaimsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _6.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Params;
                fromPartial(object: Partial<_6.Params>): _6.Params;
                fromAmino(object: _6.ParamsAmino): _6.Params;
                toAmino(message: _6.Params): _6.ParamsAmino;
                fromAminoMsg(object: _6.ParamsAminoMsg): _6.Params;
                fromProtoMsg(message: _6.ParamsProtoMsg): _6.Params;
                toProto(message: _6.Params): Uint8Array;
                toProtoMsg(message: _6.Params): _6.ParamsProtoMsg;
            };
            distributionTypeFromJSON(object: any): _5.DistributionType;
            distributionTypeToJSON(object: _5.DistributionType): string;
            interactionTypeFromJSON(object: any): _5.InteractionType;
            interactionTypeToJSON(object: _5.InteractionType): string;
            campaignStatusFromJSON(object: any): _5.CampaignStatus;
            campaignStatusToJSON(object: _5.CampaignStatus): string;
            claimTypeFromJSON(object: any): _5.ClaimType;
            claimTypeToJSON(object: _5.ClaimType): string;
            DistributionType: typeof _5.DistributionType;
            DistributionTypeSDKType: typeof _5.DistributionType;
            DistributionTypeAmino: typeof _5.DistributionType;
            InteractionType: typeof _5.InteractionType;
            InteractionTypeSDKType: typeof _5.InteractionType;
            InteractionTypeAmino: typeof _5.InteractionType;
            CampaignStatus: typeof _5.CampaignStatus;
            CampaignStatusSDKType: typeof _5.CampaignStatus;
            CampaignStatusAmino: typeof _5.CampaignStatus;
            ClaimType: typeof _5.ClaimType;
            ClaimTypeSDKType: typeof _5.ClaimType;
            ClaimTypeAmino: typeof _5.ClaimType;
            Campaign: {
                typeUrl: string;
                encode(message: _5.Campaign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Campaign;
                fromPartial(object: Partial<_5.Campaign>): _5.Campaign;
                fromAmino(object: _5.CampaignAmino): _5.Campaign;
                toAmino(message: _5.Campaign): _5.CampaignAmino;
                fromAminoMsg(object: _5.CampaignAminoMsg): _5.Campaign;
                fromProtoMsg(message: _5.CampaignProtoMsg): _5.Campaign;
                toProto(message: _5.Campaign): Uint8Array;
                toProtoMsg(message: _5.Campaign): _5.CampaignProtoMsg;
            };
            Distribution: {
                typeUrl: string;
                encode(message: _5.Distribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Distribution;
                fromPartial(object: Partial<_5.Distribution>): _5.Distribution;
                fromAmino(object: _5.DistributionAmino): _5.Distribution;
                toAmino(message: _5.Distribution): _5.DistributionAmino;
                fromAminoMsg(object: _5.DistributionAminoMsg): _5.Distribution;
                fromProtoMsg(message: _5.DistributionProtoMsg): _5.Distribution;
                toProto(message: _5.Distribution): Uint8Array;
                toProtoMsg(message: _5.Distribution): _5.DistributionProtoMsg;
            };
            NFTDetails: {
                typeUrl: string;
                encode(message: _5.NFTDetails, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.NFTDetails;
                fromPartial(object: Partial<_5.NFTDetails>): _5.NFTDetails;
                fromAmino(object: _5.NFTDetailsAmino): _5.NFTDetails;
                toAmino(message: _5.NFTDetails): _5.NFTDetailsAmino;
                fromAminoMsg(object: _5.NFTDetailsAminoMsg): _5.NFTDetails;
                fromProtoMsg(message: _5.NFTDetailsProtoMsg): _5.NFTDetails;
                toProto(message: _5.NFTDetails): Uint8Array;
                toProtoMsg(message: _5.NFTDetails): _5.NFTDetailsProtoMsg;
            };
            Claim: {
                typeUrl: string;
                encode(message: _5.Claim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Claim;
                fromPartial(object: Partial<_5.Claim>): _5.Claim;
                fromAmino(object: _5.ClaimAmino): _5.Claim;
                toAmino(message: _5.Claim): _5.ClaimAmino;
                fromAminoMsg(object: _5.ClaimAminoMsg): _5.Claim;
                fromProtoMsg(message: _5.ClaimProtoMsg): _5.Claim;
                toProto(message: _5.Claim): Uint8Array;
                toProtoMsg(message: _5.Claim): _5.ClaimProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
                fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
                toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
                fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
                fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
                toProto(message: _4.GenesisState): Uint8Array;
                toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
            };
        };
    }
    namespace marketplace {
        const v1beta1: {
            MsgClientImpl: typeof _120.MsgClientImpl;
            QueryClientImpl: typeof _118.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                listings(request: _14.QueryListingsRequest): Promise<_14.QueryListingsResponse>;
                listing(request: _14.QueryListingRequest): Promise<_14.QueryListingResponse>;
                listingsByOwner(request: _14.QueryListingsByOwnerRequest): Promise<_14.QueryListingsByOwnerResponse>;
                listingsByPriceDenom(request: _14.QueryListingsByPriceDenomRequest): Promise<_14.QueryListingsByPriceDenomResponse>;
                listingByNftId(request: _14.QueryListingByNFTIDRequest): Promise<_14.QueryListingResponse>;
                auctions(request: _14.QueryAuctionsRequest): Promise<_14.QueryAuctionsResponse>;
                auction(request: _14.QueryAuctionRequest): Promise<_14.QueryAuctionResponse>;
                auctionsByOwner(request: _14.QueryAuctionsByOwnerRequest): Promise<_14.QueryAuctionsResponse>;
                auctionsByPriceDenom(request: _14.QueryAuctionsByPriceDenomRequest): Promise<_14.QueryAuctionsResponse>;
                auctionByNftId(request: _14.QueryAuctionByNFTIDRequest): Promise<_14.QueryAuctionResponse>;
                bids(request: _14.QueryBidsRequest): Promise<_14.QueryBidsResponse>;
                bid(request: _14.QueryBidRequest): Promise<_14.QueryBidResponse>;
            };
            LCDQueryClient: typeof _116.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    listNFT(value: _15.MsgListNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editListing(value: _15.MsgEditListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deListNFT(value: _15.MsgDeListNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    buyNFT(value: _15.MsgBuyNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createAuction(value: _15.MsgCreateAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAuction(value: _15.MsgCancelAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    placeBid(value: _15.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    listNFT(value: _15.MsgListNFT): {
                        typeUrl: string;
                        value: _15.MsgListNFT;
                    };
                    editListing(value: _15.MsgEditListing): {
                        typeUrl: string;
                        value: _15.MsgEditListing;
                    };
                    deListNFT(value: _15.MsgDeListNFT): {
                        typeUrl: string;
                        value: _15.MsgDeListNFT;
                    };
                    buyNFT(value: _15.MsgBuyNFT): {
                        typeUrl: string;
                        value: _15.MsgBuyNFT;
                    };
                    createAuction(value: _15.MsgCreateAuction): {
                        typeUrl: string;
                        value: _15.MsgCreateAuction;
                    };
                    cancelAuction(value: _15.MsgCancelAuction): {
                        typeUrl: string;
                        value: _15.MsgCancelAuction;
                    };
                    placeBid(value: _15.MsgPlaceBid): {
                        typeUrl: string;
                        value: _15.MsgPlaceBid;
                    };
                };
                fromJSON: {
                    listNFT(value: any): {
                        typeUrl: string;
                        value: _15.MsgListNFT;
                    };
                    editListing(value: any): {
                        typeUrl: string;
                        value: _15.MsgEditListing;
                    };
                    deListNFT(value: any): {
                        typeUrl: string;
                        value: _15.MsgDeListNFT;
                    };
                    buyNFT(value: any): {
                        typeUrl: string;
                        value: _15.MsgBuyNFT;
                    };
                    createAuction(value: any): {
                        typeUrl: string;
                        value: _15.MsgCreateAuction;
                    };
                    cancelAuction(value: any): {
                        typeUrl: string;
                        value: _15.MsgCancelAuction;
                    };
                    placeBid(value: any): {
                        typeUrl: string;
                        value: _15.MsgPlaceBid;
                    };
                };
                fromPartial: {
                    listNFT(value: _15.MsgListNFT): {
                        typeUrl: string;
                        value: _15.MsgListNFT;
                    };
                    editListing(value: _15.MsgEditListing): {
                        typeUrl: string;
                        value: _15.MsgEditListing;
                    };
                    deListNFT(value: _15.MsgDeListNFT): {
                        typeUrl: string;
                        value: _15.MsgDeListNFT;
                    };
                    buyNFT(value: _15.MsgBuyNFT): {
                        typeUrl: string;
                        value: _15.MsgBuyNFT;
                    };
                    createAuction(value: _15.MsgCreateAuction): {
                        typeUrl: string;
                        value: _15.MsgCreateAuction;
                    };
                    cancelAuction(value: _15.MsgCancelAuction): {
                        typeUrl: string;
                        value: _15.MsgCancelAuction;
                    };
                    placeBid(value: _15.MsgPlaceBid): {
                        typeUrl: string;
                        value: _15.MsgPlaceBid;
                    };
                };
            };
            AminoConverter: {
                "/OmniFlix.marketplace.v1beta1.MsgListNFT": {
                    aminoType: string;
                    toAmino: (message: _15.MsgListNFT) => _15.MsgListNFTAmino;
                    fromAmino: (object: _15.MsgListNFTAmino) => _15.MsgListNFT;
                };
                "/OmniFlix.marketplace.v1beta1.MsgEditListing": {
                    aminoType: string;
                    toAmino: (message: _15.MsgEditListing) => _15.MsgEditListingAmino;
                    fromAmino: (object: _15.MsgEditListingAmino) => _15.MsgEditListing;
                };
                "/OmniFlix.marketplace.v1beta1.MsgDeListNFT": {
                    aminoType: string;
                    toAmino: (message: _15.MsgDeListNFT) => _15.MsgDeListNFTAmino;
                    fromAmino: (object: _15.MsgDeListNFTAmino) => _15.MsgDeListNFT;
                };
                "/OmniFlix.marketplace.v1beta1.MsgBuyNFT": {
                    aminoType: string;
                    toAmino: (message: _15.MsgBuyNFT) => _15.MsgBuyNFTAmino;
                    fromAmino: (object: _15.MsgBuyNFTAmino) => _15.MsgBuyNFT;
                };
                "/OmniFlix.marketplace.v1beta1.MsgCreateAuction": {
                    aminoType: string;
                    toAmino: (message: _15.MsgCreateAuction) => _15.MsgCreateAuctionAmino;
                    fromAmino: (object: _15.MsgCreateAuctionAmino) => _15.MsgCreateAuction;
                };
                "/OmniFlix.marketplace.v1beta1.MsgCancelAuction": {
                    aminoType: string;
                    toAmino: (message: _15.MsgCancelAuction) => _15.MsgCancelAuctionAmino;
                    fromAmino: (object: _15.MsgCancelAuctionAmino) => _15.MsgCancelAuction;
                };
                "/OmniFlix.marketplace.v1beta1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: (message: _15.MsgPlaceBid) => _15.MsgPlaceBidAmino;
                    fromAmino: (object: _15.MsgPlaceBidAmino) => _15.MsgPlaceBid;
                };
            };
            MsgListNFT: {
                typeUrl: string;
                encode(message: _15.MsgListNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgListNFT;
                fromPartial(object: Partial<_15.MsgListNFT>): _15.MsgListNFT;
                fromAmino(object: _15.MsgListNFTAmino): _15.MsgListNFT;
                toAmino(message: _15.MsgListNFT): _15.MsgListNFTAmino;
                fromAminoMsg(object: _15.MsgListNFTAminoMsg): _15.MsgListNFT;
                fromProtoMsg(message: _15.MsgListNFTProtoMsg): _15.MsgListNFT;
                toProto(message: _15.MsgListNFT): Uint8Array;
                toProtoMsg(message: _15.MsgListNFT): _15.MsgListNFTProtoMsg;
            };
            MsgListNFTResponse: {
                typeUrl: string;
                encode(_: _15.MsgListNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgListNFTResponse;
                fromPartial(_: Partial<_15.MsgListNFTResponse>): _15.MsgListNFTResponse;
                fromAmino(_: _15.MsgListNFTResponseAmino): _15.MsgListNFTResponse;
                toAmino(_: _15.MsgListNFTResponse): _15.MsgListNFTResponseAmino;
                fromAminoMsg(object: _15.MsgListNFTResponseAminoMsg): _15.MsgListNFTResponse;
                fromProtoMsg(message: _15.MsgListNFTResponseProtoMsg): _15.MsgListNFTResponse;
                toProto(message: _15.MsgListNFTResponse): Uint8Array;
                toProtoMsg(message: _15.MsgListNFTResponse): _15.MsgListNFTResponseProtoMsg;
            };
            MsgEditListing: {
                typeUrl: string;
                encode(message: _15.MsgEditListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgEditListing;
                fromPartial(object: Partial<_15.MsgEditListing>): _15.MsgEditListing;
                fromAmino(object: _15.MsgEditListingAmino): _15.MsgEditListing;
                toAmino(message: _15.MsgEditListing): _15.MsgEditListingAmino;
                fromAminoMsg(object: _15.MsgEditListingAminoMsg): _15.MsgEditListing;
                fromProtoMsg(message: _15.MsgEditListingProtoMsg): _15.MsgEditListing;
                toProto(message: _15.MsgEditListing): Uint8Array;
                toProtoMsg(message: _15.MsgEditListing): _15.MsgEditListingProtoMsg;
            };
            MsgEditListingResponse: {
                typeUrl: string;
                encode(_: _15.MsgEditListingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgEditListingResponse;
                fromPartial(_: Partial<_15.MsgEditListingResponse>): _15.MsgEditListingResponse;
                fromAmino(_: _15.MsgEditListingResponseAmino): _15.MsgEditListingResponse;
                toAmino(_: _15.MsgEditListingResponse): _15.MsgEditListingResponseAmino;
                fromAminoMsg(object: _15.MsgEditListingResponseAminoMsg): _15.MsgEditListingResponse;
                fromProtoMsg(message: _15.MsgEditListingResponseProtoMsg): _15.MsgEditListingResponse;
                toProto(message: _15.MsgEditListingResponse): Uint8Array;
                toProtoMsg(message: _15.MsgEditListingResponse): _15.MsgEditListingResponseProtoMsg;
            };
            MsgDeListNFT: {
                typeUrl: string;
                encode(message: _15.MsgDeListNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgDeListNFT;
                fromPartial(object: Partial<_15.MsgDeListNFT>): _15.MsgDeListNFT;
                fromAmino(object: _15.MsgDeListNFTAmino): _15.MsgDeListNFT;
                toAmino(message: _15.MsgDeListNFT): _15.MsgDeListNFTAmino;
                fromAminoMsg(object: _15.MsgDeListNFTAminoMsg): _15.MsgDeListNFT;
                fromProtoMsg(message: _15.MsgDeListNFTProtoMsg): _15.MsgDeListNFT;
                toProto(message: _15.MsgDeListNFT): Uint8Array;
                toProtoMsg(message: _15.MsgDeListNFT): _15.MsgDeListNFTProtoMsg;
            };
            MsgDeListNFTResponse: {
                typeUrl: string;
                encode(_: _15.MsgDeListNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgDeListNFTResponse;
                fromPartial(_: Partial<_15.MsgDeListNFTResponse>): _15.MsgDeListNFTResponse;
                fromAmino(_: _15.MsgDeListNFTResponseAmino): _15.MsgDeListNFTResponse;
                toAmino(_: _15.MsgDeListNFTResponse): _15.MsgDeListNFTResponseAmino;
                fromAminoMsg(object: _15.MsgDeListNFTResponseAminoMsg): _15.MsgDeListNFTResponse;
                fromProtoMsg(message: _15.MsgDeListNFTResponseProtoMsg): _15.MsgDeListNFTResponse;
                toProto(message: _15.MsgDeListNFTResponse): Uint8Array;
                toProtoMsg(message: _15.MsgDeListNFTResponse): _15.MsgDeListNFTResponseProtoMsg;
            };
            MsgBuyNFT: {
                typeUrl: string;
                encode(message: _15.MsgBuyNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgBuyNFT;
                fromPartial(object: Partial<_15.MsgBuyNFT>): _15.MsgBuyNFT;
                fromAmino(object: _15.MsgBuyNFTAmino): _15.MsgBuyNFT;
                toAmino(message: _15.MsgBuyNFT): _15.MsgBuyNFTAmino;
                fromAminoMsg(object: _15.MsgBuyNFTAminoMsg): _15.MsgBuyNFT;
                fromProtoMsg(message: _15.MsgBuyNFTProtoMsg): _15.MsgBuyNFT;
                toProto(message: _15.MsgBuyNFT): Uint8Array;
                toProtoMsg(message: _15.MsgBuyNFT): _15.MsgBuyNFTProtoMsg;
            };
            MsgBuyNFTResponse: {
                typeUrl: string;
                encode(_: _15.MsgBuyNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgBuyNFTResponse;
                fromPartial(_: Partial<_15.MsgBuyNFTResponse>): _15.MsgBuyNFTResponse;
                fromAmino(_: _15.MsgBuyNFTResponseAmino): _15.MsgBuyNFTResponse;
                toAmino(_: _15.MsgBuyNFTResponse): _15.MsgBuyNFTResponseAmino;
                fromAminoMsg(object: _15.MsgBuyNFTResponseAminoMsg): _15.MsgBuyNFTResponse;
                fromProtoMsg(message: _15.MsgBuyNFTResponseProtoMsg): _15.MsgBuyNFTResponse;
                toProto(message: _15.MsgBuyNFTResponse): Uint8Array;
                toProtoMsg(message: _15.MsgBuyNFTResponse): _15.MsgBuyNFTResponseProtoMsg;
            };
            MsgCreateAuction: {
                typeUrl: string;
                encode(message: _15.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgCreateAuction;
                fromPartial(object: Partial<_15.MsgCreateAuction>): _15.MsgCreateAuction;
                fromAmino(object: _15.MsgCreateAuctionAmino): _15.MsgCreateAuction;
                toAmino(message: _15.MsgCreateAuction): _15.MsgCreateAuctionAmino;
                fromAminoMsg(object: _15.MsgCreateAuctionAminoMsg): _15.MsgCreateAuction;
                fromProtoMsg(message: _15.MsgCreateAuctionProtoMsg): _15.MsgCreateAuction;
                toProto(message: _15.MsgCreateAuction): Uint8Array;
                toProtoMsg(message: _15.MsgCreateAuction): _15.MsgCreateAuctionProtoMsg;
            };
            MsgCreateAuctionResponse: {
                typeUrl: string;
                encode(message: _15.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgCreateAuctionResponse;
                fromPartial(object: Partial<_15.MsgCreateAuctionResponse>): _15.MsgCreateAuctionResponse;
                fromAmino(object: _15.MsgCreateAuctionResponseAmino): _15.MsgCreateAuctionResponse;
                toAmino(message: _15.MsgCreateAuctionResponse): _15.MsgCreateAuctionResponseAmino;
                fromAminoMsg(object: _15.MsgCreateAuctionResponseAminoMsg): _15.MsgCreateAuctionResponse;
                fromProtoMsg(message: _15.MsgCreateAuctionResponseProtoMsg): _15.MsgCreateAuctionResponse;
                toProto(message: _15.MsgCreateAuctionResponse): Uint8Array;
                toProtoMsg(message: _15.MsgCreateAuctionResponse): _15.MsgCreateAuctionResponseProtoMsg;
            };
            MsgCancelAuction: {
                typeUrl: string;
                encode(message: _15.MsgCancelAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgCancelAuction;
                fromPartial(object: Partial<_15.MsgCancelAuction>): _15.MsgCancelAuction;
                fromAmino(object: _15.MsgCancelAuctionAmino): _15.MsgCancelAuction;
                toAmino(message: _15.MsgCancelAuction): _15.MsgCancelAuctionAmino;
                fromAminoMsg(object: _15.MsgCancelAuctionAminoMsg): _15.MsgCancelAuction;
                fromProtoMsg(message: _15.MsgCancelAuctionProtoMsg): _15.MsgCancelAuction;
                toProto(message: _15.MsgCancelAuction): Uint8Array;
                toProtoMsg(message: _15.MsgCancelAuction): _15.MsgCancelAuctionProtoMsg;
            };
            MsgCancelAuctionResponse: {
                typeUrl: string;
                encode(_: _15.MsgCancelAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgCancelAuctionResponse;
                fromPartial(_: Partial<_15.MsgCancelAuctionResponse>): _15.MsgCancelAuctionResponse;
                fromAmino(_: _15.MsgCancelAuctionResponseAmino): _15.MsgCancelAuctionResponse;
                toAmino(_: _15.MsgCancelAuctionResponse): _15.MsgCancelAuctionResponseAmino;
                fromAminoMsg(object: _15.MsgCancelAuctionResponseAminoMsg): _15.MsgCancelAuctionResponse;
                fromProtoMsg(message: _15.MsgCancelAuctionResponseProtoMsg): _15.MsgCancelAuctionResponse;
                toProto(message: _15.MsgCancelAuctionResponse): Uint8Array;
                toProtoMsg(message: _15.MsgCancelAuctionResponse): _15.MsgCancelAuctionResponseProtoMsg;
            };
            MsgPlaceBid: {
                typeUrl: string;
                encode(message: _15.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgPlaceBid;
                fromPartial(object: Partial<_15.MsgPlaceBid>): _15.MsgPlaceBid;
                fromAmino(object: _15.MsgPlaceBidAmino): _15.MsgPlaceBid;
                toAmino(message: _15.MsgPlaceBid): _15.MsgPlaceBidAmino;
                fromAminoMsg(object: _15.MsgPlaceBidAminoMsg): _15.MsgPlaceBid;
                fromProtoMsg(message: _15.MsgPlaceBidProtoMsg): _15.MsgPlaceBid;
                toProto(message: _15.MsgPlaceBid): Uint8Array;
                toProtoMsg(message: _15.MsgPlaceBid): _15.MsgPlaceBidProtoMsg;
            };
            MsgPlaceBidResponse: {
                typeUrl: string;
                encode(_: _15.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgPlaceBidResponse;
                fromPartial(_: Partial<_15.MsgPlaceBidResponse>): _15.MsgPlaceBidResponse;
                fromAmino(_: _15.MsgPlaceBidResponseAmino): _15.MsgPlaceBidResponse;
                toAmino(_: _15.MsgPlaceBidResponse): _15.MsgPlaceBidResponseAmino;
                fromAminoMsg(object: _15.MsgPlaceBidResponseAminoMsg): _15.MsgPlaceBidResponse;
                fromProtoMsg(message: _15.MsgPlaceBidResponseProtoMsg): _15.MsgPlaceBidResponse;
                toProto(message: _15.MsgPlaceBidResponse): Uint8Array;
                toProtoMsg(message: _15.MsgPlaceBidResponse): _15.MsgPlaceBidResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _14.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.QueryParamsRequest;
                fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
                fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
                toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
                fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
                fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
                toProto(message: _14.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _14.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryParamsResponse;
                fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
                fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
                toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
                fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
                fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
                toProto(message: _14.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
            };
            QueryListingsRequest: {
                typeUrl: string;
                encode(message: _14.QueryListingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryListingsRequest;
                fromPartial(object: Partial<_14.QueryListingsRequest>): _14.QueryListingsRequest;
                fromAmino(object: _14.QueryListingsRequestAmino): _14.QueryListingsRequest;
                toAmino(message: _14.QueryListingsRequest): _14.QueryListingsRequestAmino;
                fromAminoMsg(object: _14.QueryListingsRequestAminoMsg): _14.QueryListingsRequest;
                fromProtoMsg(message: _14.QueryListingsRequestProtoMsg): _14.QueryListingsRequest;
                toProto(message: _14.QueryListingsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryListingsRequest): _14.QueryListingsRequestProtoMsg;
            };
            QueryListingsResponse: {
                typeUrl: string;
                encode(message: _14.QueryListingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryListingsResponse;
                fromPartial(object: Partial<_14.QueryListingsResponse>): _14.QueryListingsResponse;
                fromAmino(object: _14.QueryListingsResponseAmino): _14.QueryListingsResponse;
                toAmino(message: _14.QueryListingsResponse): _14.QueryListingsResponseAmino;
                fromAminoMsg(object: _14.QueryListingsResponseAminoMsg): _14.QueryListingsResponse;
                fromProtoMsg(message: _14.QueryListingsResponseProtoMsg): _14.QueryListingsResponse;
                toProto(message: _14.QueryListingsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryListingsResponse): _14.QueryListingsResponseProtoMsg;
            };
            QueryListingRequest: {
                typeUrl: string;
                encode(message: _14.QueryListingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryListingRequest;
                fromPartial(object: Partial<_14.QueryListingRequest>): _14.QueryListingRequest;
                fromAmino(object: _14.QueryListingRequestAmino): _14.QueryListingRequest;
                toAmino(message: _14.QueryListingRequest): _14.QueryListingRequestAmino;
                fromAminoMsg(object: _14.QueryListingRequestAminoMsg): _14.QueryListingRequest;
                fromProtoMsg(message: _14.QueryListingRequestProtoMsg): _14.QueryListingRequest;
                toProto(message: _14.QueryListingRequest): Uint8Array;
                toProtoMsg(message: _14.QueryListingRequest): _14.QueryListingRequestProtoMsg;
            };
            QueryListingResponse: {
                typeUrl: string;
                encode(message: _14.QueryListingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryListingResponse;
                fromPartial(object: Partial<_14.QueryListingResponse>): _14.QueryListingResponse;
                fromAmino(object: _14.QueryListingResponseAmino): _14.QueryListingResponse;
                toAmino(message: _14.QueryListingResponse): _14.QueryListingResponseAmino;
                fromAminoMsg(object: _14.QueryListingResponseAminoMsg): _14.QueryListingResponse;
                fromProtoMsg(message: _14.QueryListingResponseProtoMsg): _14.QueryListingResponse;
                toProto(message: _14.QueryListingResponse): Uint8Array;
                toProtoMsg(message: _14.QueryListingResponse): _14.QueryListingResponseProtoMsg;
            };
            QueryListingsByOwnerRequest: {
                typeUrl: string;
                encode(message: _14.QueryListingsByOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryListingsByOwnerRequest;
                fromPartial(object: Partial<_14.QueryListingsByOwnerRequest>): _14.QueryListingsByOwnerRequest;
                fromAmino(object: _14.QueryListingsByOwnerRequestAmino): _14.QueryListingsByOwnerRequest;
                toAmino(message: _14.QueryListingsByOwnerRequest): _14.QueryListingsByOwnerRequestAmino;
                fromAminoMsg(object: _14.QueryListingsByOwnerRequestAminoMsg): _14.QueryListingsByOwnerRequest;
                fromProtoMsg(message: _14.QueryListingsByOwnerRequestProtoMsg): _14.QueryListingsByOwnerRequest;
                toProto(message: _14.QueryListingsByOwnerRequest): Uint8Array;
                toProtoMsg(message: _14.QueryListingsByOwnerRequest): _14.QueryListingsByOwnerRequestProtoMsg;
            };
            QueryListingsByOwnerResponse: {
                typeUrl: string;
                encode(message: _14.QueryListingsByOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryListingsByOwnerResponse;
                fromPartial(object: Partial<_14.QueryListingsByOwnerResponse>): _14.QueryListingsByOwnerResponse;
                fromAmino(object: _14.QueryListingsByOwnerResponseAmino): _14.QueryListingsByOwnerResponse;
                toAmino(message: _14.QueryListingsByOwnerResponse): _14.QueryListingsByOwnerResponseAmino;
                fromAminoMsg(object: _14.QueryListingsByOwnerResponseAminoMsg): _14.QueryListingsByOwnerResponse;
                fromProtoMsg(message: _14.QueryListingsByOwnerResponseProtoMsg): _14.QueryListingsByOwnerResponse;
                toProto(message: _14.QueryListingsByOwnerResponse): Uint8Array;
                toProtoMsg(message: _14.QueryListingsByOwnerResponse): _14.QueryListingsByOwnerResponseProtoMsg;
            };
            QueryListingByNFTIDRequest: {
                typeUrl: string;
                encode(message: _14.QueryListingByNFTIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryListingByNFTIDRequest;
                fromPartial(object: Partial<_14.QueryListingByNFTIDRequest>): _14.QueryListingByNFTIDRequest;
                fromAmino(object: _14.QueryListingByNFTIDRequestAmino): _14.QueryListingByNFTIDRequest;
                toAmino(message: _14.QueryListingByNFTIDRequest): _14.QueryListingByNFTIDRequestAmino;
                fromAminoMsg(object: _14.QueryListingByNFTIDRequestAminoMsg): _14.QueryListingByNFTIDRequest;
                fromProtoMsg(message: _14.QueryListingByNFTIDRequestProtoMsg): _14.QueryListingByNFTIDRequest;
                toProto(message: _14.QueryListingByNFTIDRequest): Uint8Array;
                toProtoMsg(message: _14.QueryListingByNFTIDRequest): _14.QueryListingByNFTIDRequestProtoMsg;
            };
            QueryListingsByPriceDenomRequest: {
                typeUrl: string;
                encode(message: _14.QueryListingsByPriceDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryListingsByPriceDenomRequest;
                fromPartial(object: Partial<_14.QueryListingsByPriceDenomRequest>): _14.QueryListingsByPriceDenomRequest;
                fromAmino(object: _14.QueryListingsByPriceDenomRequestAmino): _14.QueryListingsByPriceDenomRequest;
                toAmino(message: _14.QueryListingsByPriceDenomRequest): _14.QueryListingsByPriceDenomRequestAmino;
                fromAminoMsg(object: _14.QueryListingsByPriceDenomRequestAminoMsg): _14.QueryListingsByPriceDenomRequest;
                fromProtoMsg(message: _14.QueryListingsByPriceDenomRequestProtoMsg): _14.QueryListingsByPriceDenomRequest;
                toProto(message: _14.QueryListingsByPriceDenomRequest): Uint8Array;
                toProtoMsg(message: _14.QueryListingsByPriceDenomRequest): _14.QueryListingsByPriceDenomRequestProtoMsg;
            };
            QueryListingsByPriceDenomResponse: {
                typeUrl: string;
                encode(message: _14.QueryListingsByPriceDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryListingsByPriceDenomResponse;
                fromPartial(object: Partial<_14.QueryListingsByPriceDenomResponse>): _14.QueryListingsByPriceDenomResponse;
                fromAmino(object: _14.QueryListingsByPriceDenomResponseAmino): _14.QueryListingsByPriceDenomResponse;
                toAmino(message: _14.QueryListingsByPriceDenomResponse): _14.QueryListingsByPriceDenomResponseAmino;
                fromAminoMsg(object: _14.QueryListingsByPriceDenomResponseAminoMsg): _14.QueryListingsByPriceDenomResponse;
                fromProtoMsg(message: _14.QueryListingsByPriceDenomResponseProtoMsg): _14.QueryListingsByPriceDenomResponse;
                toProto(message: _14.QueryListingsByPriceDenomResponse): Uint8Array;
                toProtoMsg(message: _14.QueryListingsByPriceDenomResponse): _14.QueryListingsByPriceDenomResponseProtoMsg;
            };
            QueryAuctionsRequest: {
                typeUrl: string;
                encode(message: _14.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAuctionsRequest;
                fromPartial(object: Partial<_14.QueryAuctionsRequest>): _14.QueryAuctionsRequest;
                fromAmino(object: _14.QueryAuctionsRequestAmino): _14.QueryAuctionsRequest;
                toAmino(message: _14.QueryAuctionsRequest): _14.QueryAuctionsRequestAmino;
                fromAminoMsg(object: _14.QueryAuctionsRequestAminoMsg): _14.QueryAuctionsRequest;
                fromProtoMsg(message: _14.QueryAuctionsRequestProtoMsg): _14.QueryAuctionsRequest;
                toProto(message: _14.QueryAuctionsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAuctionsRequest): _14.QueryAuctionsRequestProtoMsg;
            };
            QueryAuctionsResponse: {
                typeUrl: string;
                encode(message: _14.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAuctionsResponse;
                fromPartial(object: Partial<_14.QueryAuctionsResponse>): _14.QueryAuctionsResponse;
                fromAmino(object: _14.QueryAuctionsResponseAmino): _14.QueryAuctionsResponse;
                toAmino(message: _14.QueryAuctionsResponse): _14.QueryAuctionsResponseAmino;
                fromAminoMsg(object: _14.QueryAuctionsResponseAminoMsg): _14.QueryAuctionsResponse;
                fromProtoMsg(message: _14.QueryAuctionsResponseProtoMsg): _14.QueryAuctionsResponse;
                toProto(message: _14.QueryAuctionsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAuctionsResponse): _14.QueryAuctionsResponseProtoMsg;
            };
            QueryAuctionRequest: {
                typeUrl: string;
                encode(message: _14.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAuctionRequest;
                fromPartial(object: Partial<_14.QueryAuctionRequest>): _14.QueryAuctionRequest;
                fromAmino(object: _14.QueryAuctionRequestAmino): _14.QueryAuctionRequest;
                toAmino(message: _14.QueryAuctionRequest): _14.QueryAuctionRequestAmino;
                fromAminoMsg(object: _14.QueryAuctionRequestAminoMsg): _14.QueryAuctionRequest;
                fromProtoMsg(message: _14.QueryAuctionRequestProtoMsg): _14.QueryAuctionRequest;
                toProto(message: _14.QueryAuctionRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAuctionRequest): _14.QueryAuctionRequestProtoMsg;
            };
            QueryAuctionResponse: {
                typeUrl: string;
                encode(message: _14.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAuctionResponse;
                fromPartial(object: Partial<_14.QueryAuctionResponse>): _14.QueryAuctionResponse;
                fromAmino(object: _14.QueryAuctionResponseAmino): _14.QueryAuctionResponse;
                toAmino(message: _14.QueryAuctionResponse): _14.QueryAuctionResponseAmino;
                fromAminoMsg(object: _14.QueryAuctionResponseAminoMsg): _14.QueryAuctionResponse;
                fromProtoMsg(message: _14.QueryAuctionResponseProtoMsg): _14.QueryAuctionResponse;
                toProto(message: _14.QueryAuctionResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAuctionResponse): _14.QueryAuctionResponseProtoMsg;
            };
            QueryAuctionsByOwnerRequest: {
                typeUrl: string;
                encode(message: _14.QueryAuctionsByOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAuctionsByOwnerRequest;
                fromPartial(object: Partial<_14.QueryAuctionsByOwnerRequest>): _14.QueryAuctionsByOwnerRequest;
                fromAmino(object: _14.QueryAuctionsByOwnerRequestAmino): _14.QueryAuctionsByOwnerRequest;
                toAmino(message: _14.QueryAuctionsByOwnerRequest): _14.QueryAuctionsByOwnerRequestAmino;
                fromAminoMsg(object: _14.QueryAuctionsByOwnerRequestAminoMsg): _14.QueryAuctionsByOwnerRequest;
                fromProtoMsg(message: _14.QueryAuctionsByOwnerRequestProtoMsg): _14.QueryAuctionsByOwnerRequest;
                toProto(message: _14.QueryAuctionsByOwnerRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAuctionsByOwnerRequest): _14.QueryAuctionsByOwnerRequestProtoMsg;
            };
            QueryAuctionByNFTIDRequest: {
                typeUrl: string;
                encode(message: _14.QueryAuctionByNFTIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAuctionByNFTIDRequest;
                fromPartial(object: Partial<_14.QueryAuctionByNFTIDRequest>): _14.QueryAuctionByNFTIDRequest;
                fromAmino(object: _14.QueryAuctionByNFTIDRequestAmino): _14.QueryAuctionByNFTIDRequest;
                toAmino(message: _14.QueryAuctionByNFTIDRequest): _14.QueryAuctionByNFTIDRequestAmino;
                fromAminoMsg(object: _14.QueryAuctionByNFTIDRequestAminoMsg): _14.QueryAuctionByNFTIDRequest;
                fromProtoMsg(message: _14.QueryAuctionByNFTIDRequestProtoMsg): _14.QueryAuctionByNFTIDRequest;
                toProto(message: _14.QueryAuctionByNFTIDRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAuctionByNFTIDRequest): _14.QueryAuctionByNFTIDRequestProtoMsg;
            };
            QueryAuctionsByPriceDenomRequest: {
                typeUrl: string;
                encode(message: _14.QueryAuctionsByPriceDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAuctionsByPriceDenomRequest;
                fromPartial(object: Partial<_14.QueryAuctionsByPriceDenomRequest>): _14.QueryAuctionsByPriceDenomRequest;
                fromAmino(object: _14.QueryAuctionsByPriceDenomRequestAmino): _14.QueryAuctionsByPriceDenomRequest;
                toAmino(message: _14.QueryAuctionsByPriceDenomRequest): _14.QueryAuctionsByPriceDenomRequestAmino;
                fromAminoMsg(object: _14.QueryAuctionsByPriceDenomRequestAminoMsg): _14.QueryAuctionsByPriceDenomRequest;
                fromProtoMsg(message: _14.QueryAuctionsByPriceDenomRequestProtoMsg): _14.QueryAuctionsByPriceDenomRequest;
                toProto(message: _14.QueryAuctionsByPriceDenomRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAuctionsByPriceDenomRequest): _14.QueryAuctionsByPriceDenomRequestProtoMsg;
            };
            QueryBidsRequest: {
                typeUrl: string;
                encode(message: _14.QueryBidsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryBidsRequest;
                fromPartial(object: Partial<_14.QueryBidsRequest>): _14.QueryBidsRequest;
                fromAmino(object: _14.QueryBidsRequestAmino): _14.QueryBidsRequest;
                toAmino(message: _14.QueryBidsRequest): _14.QueryBidsRequestAmino;
                fromAminoMsg(object: _14.QueryBidsRequestAminoMsg): _14.QueryBidsRequest;
                fromProtoMsg(message: _14.QueryBidsRequestProtoMsg): _14.QueryBidsRequest;
                toProto(message: _14.QueryBidsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryBidsRequest): _14.QueryBidsRequestProtoMsg;
            };
            QueryBidsResponse: {
                typeUrl: string;
                encode(message: _14.QueryBidsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryBidsResponse;
                fromPartial(object: Partial<_14.QueryBidsResponse>): _14.QueryBidsResponse;
                fromAmino(object: _14.QueryBidsResponseAmino): _14.QueryBidsResponse;
                toAmino(message: _14.QueryBidsResponse): _14.QueryBidsResponseAmino;
                fromAminoMsg(object: _14.QueryBidsResponseAminoMsg): _14.QueryBidsResponse;
                fromProtoMsg(message: _14.QueryBidsResponseProtoMsg): _14.QueryBidsResponse;
                toProto(message: _14.QueryBidsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryBidsResponse): _14.QueryBidsResponseProtoMsg;
            };
            QueryBidRequest: {
                typeUrl: string;
                encode(message: _14.QueryBidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryBidRequest;
                fromPartial(object: Partial<_14.QueryBidRequest>): _14.QueryBidRequest;
                fromAmino(object: _14.QueryBidRequestAmino): _14.QueryBidRequest;
                toAmino(message: _14.QueryBidRequest): _14.QueryBidRequestAmino;
                fromAminoMsg(object: _14.QueryBidRequestAminoMsg): _14.QueryBidRequest;
                fromProtoMsg(message: _14.QueryBidRequestProtoMsg): _14.QueryBidRequest;
                toProto(message: _14.QueryBidRequest): Uint8Array;
                toProtoMsg(message: _14.QueryBidRequest): _14.QueryBidRequestProtoMsg;
            };
            QueryBidResponse: {
                typeUrl: string;
                encode(message: _14.QueryBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryBidResponse;
                fromPartial(object: Partial<_14.QueryBidResponse>): _14.QueryBidResponse;
                fromAmino(object: _14.QueryBidResponseAmino): _14.QueryBidResponse;
                toAmino(message: _14.QueryBidResponse): _14.QueryBidResponseAmino;
                fromAminoMsg(object: _14.QueryBidResponseAminoMsg): _14.QueryBidResponse;
                fromProtoMsg(message: _14.QueryBidResponseProtoMsg): _14.QueryBidResponse;
                toProto(message: _14.QueryBidResponse): Uint8Array;
                toProtoMsg(message: _14.QueryBidResponse): _14.QueryBidResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _13.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Params;
                fromPartial(object: Partial<_13.Params>): _13.Params;
                fromAmino(object: _13.ParamsAmino): _13.Params;
                toAmino(message: _13.Params): _13.ParamsAmino;
                fromAminoMsg(object: _13.ParamsAminoMsg): _13.Params;
                fromProtoMsg(message: _13.ParamsProtoMsg): _13.Params;
                toProto(message: _13.Params): Uint8Array;
                toProtoMsg(message: _13.Params): _13.ParamsProtoMsg;
            };
            Distribution: {
                typeUrl: string;
                encode(message: _13.Distribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Distribution;
                fromPartial(object: Partial<_13.Distribution>): _13.Distribution;
                fromAmino(object: _13.DistributionAmino): _13.Distribution;
                toAmino(message: _13.Distribution): _13.DistributionAmino;
                fromAminoMsg(object: _13.DistributionAminoMsg): _13.Distribution;
                fromProtoMsg(message: _13.DistributionProtoMsg): _13.Distribution;
                toProto(message: _13.Distribution): Uint8Array;
                toProtoMsg(message: _13.Distribution): _13.DistributionProtoMsg;
            };
            Listing: {
                typeUrl: string;
                encode(message: _12.Listing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Listing;
                fromPartial(object: Partial<_12.Listing>): _12.Listing;
                fromAmino(object: _12.ListingAmino): _12.Listing;
                toAmino(message: _12.Listing): _12.ListingAmino;
                fromAminoMsg(object: _12.ListingAminoMsg): _12.Listing;
                fromProtoMsg(message: _12.ListingProtoMsg): _12.Listing;
                toProto(message: _12.Listing): Uint8Array;
                toProtoMsg(message: _12.Listing): _12.ListingProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _12.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.WeightedAddress;
                fromPartial(object: Partial<_12.WeightedAddress>): _12.WeightedAddress;
                fromAmino(object: _12.WeightedAddressAmino): _12.WeightedAddress;
                toAmino(message: _12.WeightedAddress): _12.WeightedAddressAmino;
                fromAminoMsg(object: _12.WeightedAddressAminoMsg): _12.WeightedAddress;
                fromProtoMsg(message: _12.WeightedAddressProtoMsg): _12.WeightedAddress;
                toProto(message: _12.WeightedAddress): Uint8Array;
                toProtoMsg(message: _12.WeightedAddress): _12.WeightedAddressProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
            EventListNFT: {
                typeUrl: string;
                encode(message: _10.EventListNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EventListNFT;
                fromPartial(object: Partial<_10.EventListNFT>): _10.EventListNFT;
                fromAmino(object: _10.EventListNFTAmino): _10.EventListNFT;
                toAmino(message: _10.EventListNFT): _10.EventListNFTAmino;
                fromAminoMsg(object: _10.EventListNFTAminoMsg): _10.EventListNFT;
                fromProtoMsg(message: _10.EventListNFTProtoMsg): _10.EventListNFT;
                toProto(message: _10.EventListNFT): Uint8Array;
                toProtoMsg(message: _10.EventListNFT): _10.EventListNFTProtoMsg;
            };
            EventEditListing: {
                typeUrl: string;
                encode(message: _10.EventEditListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EventEditListing;
                fromPartial(object: Partial<_10.EventEditListing>): _10.EventEditListing;
                fromAmino(object: _10.EventEditListingAmino): _10.EventEditListing;
                toAmino(message: _10.EventEditListing): _10.EventEditListingAmino;
                fromAminoMsg(object: _10.EventEditListingAminoMsg): _10.EventEditListing;
                fromProtoMsg(message: _10.EventEditListingProtoMsg): _10.EventEditListing;
                toProto(message: _10.EventEditListing): Uint8Array;
                toProtoMsg(message: _10.EventEditListing): _10.EventEditListingProtoMsg;
            };
            EventDeListNFT: {
                typeUrl: string;
                encode(message: _10.EventDeListNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EventDeListNFT;
                fromPartial(object: Partial<_10.EventDeListNFT>): _10.EventDeListNFT;
                fromAmino(object: _10.EventDeListNFTAmino): _10.EventDeListNFT;
                toAmino(message: _10.EventDeListNFT): _10.EventDeListNFTAmino;
                fromAminoMsg(object: _10.EventDeListNFTAminoMsg): _10.EventDeListNFT;
                fromProtoMsg(message: _10.EventDeListNFTProtoMsg): _10.EventDeListNFT;
                toProto(message: _10.EventDeListNFT): Uint8Array;
                toProtoMsg(message: _10.EventDeListNFT): _10.EventDeListNFTProtoMsg;
            };
            EventBuyNFT: {
                typeUrl: string;
                encode(message: _10.EventBuyNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EventBuyNFT;
                fromPartial(object: Partial<_10.EventBuyNFT>): _10.EventBuyNFT;
                fromAmino(object: _10.EventBuyNFTAmino): _10.EventBuyNFT;
                toAmino(message: _10.EventBuyNFT): _10.EventBuyNFTAmino;
                fromAminoMsg(object: _10.EventBuyNFTAminoMsg): _10.EventBuyNFT;
                fromProtoMsg(message: _10.EventBuyNFTProtoMsg): _10.EventBuyNFT;
                toProto(message: _10.EventBuyNFT): Uint8Array;
                toProtoMsg(message: _10.EventBuyNFT): _10.EventBuyNFTProtoMsg;
            };
            EventCreateAuction: {
                typeUrl: string;
                encode(message: _10.EventCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EventCreateAuction;
                fromPartial(object: Partial<_10.EventCreateAuction>): _10.EventCreateAuction;
                fromAmino(object: _10.EventCreateAuctionAmino): _10.EventCreateAuction;
                toAmino(message: _10.EventCreateAuction): _10.EventCreateAuctionAmino;
                fromAminoMsg(object: _10.EventCreateAuctionAminoMsg): _10.EventCreateAuction;
                fromProtoMsg(message: _10.EventCreateAuctionProtoMsg): _10.EventCreateAuction;
                toProto(message: _10.EventCreateAuction): Uint8Array;
                toProtoMsg(message: _10.EventCreateAuction): _10.EventCreateAuctionProtoMsg;
            };
            EventCancelAuction: {
                typeUrl: string;
                encode(message: _10.EventCancelAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EventCancelAuction;
                fromPartial(object: Partial<_10.EventCancelAuction>): _10.EventCancelAuction;
                fromAmino(object: _10.EventCancelAuctionAmino): _10.EventCancelAuction;
                toAmino(message: _10.EventCancelAuction): _10.EventCancelAuctionAmino;
                fromAminoMsg(object: _10.EventCancelAuctionAminoMsg): _10.EventCancelAuction;
                fromProtoMsg(message: _10.EventCancelAuctionProtoMsg): _10.EventCancelAuction;
                toProto(message: _10.EventCancelAuction): Uint8Array;
                toProtoMsg(message: _10.EventCancelAuction): _10.EventCancelAuctionProtoMsg;
            };
            EventPlaceBid: {
                typeUrl: string;
                encode(message: _10.EventPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EventPlaceBid;
                fromPartial(object: Partial<_10.EventPlaceBid>): _10.EventPlaceBid;
                fromAmino(object: _10.EventPlaceBidAmino): _10.EventPlaceBid;
                toAmino(message: _10.EventPlaceBid): _10.EventPlaceBidAmino;
                fromAminoMsg(object: _10.EventPlaceBidAminoMsg): _10.EventPlaceBid;
                fromProtoMsg(message: _10.EventPlaceBidProtoMsg): _10.EventPlaceBid;
                toProto(message: _10.EventPlaceBid): Uint8Array;
                toProtoMsg(message: _10.EventPlaceBid): _10.EventPlaceBidProtoMsg;
            };
            auctionStatusFromJSON(object: any): _9.AuctionStatus;
            auctionStatusToJSON(object: _9.AuctionStatus): string;
            AuctionStatus: typeof _9.AuctionStatus;
            AuctionStatusSDKType: typeof _9.AuctionStatus;
            AuctionStatusAmino: typeof _9.AuctionStatus;
            AuctionListing: {
                typeUrl: string;
                encode(message: _9.AuctionListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.AuctionListing;
                fromPartial(object: Partial<_9.AuctionListing>): _9.AuctionListing;
                fromAmino(object: _9.AuctionListingAmino): _9.AuctionListing;
                toAmino(message: _9.AuctionListing): _9.AuctionListingAmino;
                fromAminoMsg(object: _9.AuctionListingAminoMsg): _9.AuctionListing;
                fromProtoMsg(message: _9.AuctionListingProtoMsg): _9.AuctionListing;
                toProto(message: _9.AuctionListing): Uint8Array;
                toProtoMsg(message: _9.AuctionListing): _9.AuctionListingProtoMsg;
            };
            Bid: {
                typeUrl: string;
                encode(message: _9.Bid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Bid;
                fromPartial(object: Partial<_9.Bid>): _9.Bid;
                fromAmino(object: _9.BidAmino): _9.Bid;
                toAmino(message: _9.Bid): _9.BidAmino;
                fromAminoMsg(object: _9.BidAminoMsg): _9.Bid;
                fromProtoMsg(message: _9.BidProtoMsg): _9.Bid;
                toProto(message: _9.Bid): Uint8Array;
                toProtoMsg(message: _9.Bid): _9.BidProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            OmniFlix: {
                itc: {
                    v1: _119.MsgClientImpl;
                };
                marketplace: {
                    v1beta1: _120.MsgClientImpl;
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
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            OmniFlix: {
                itc: {
                    v1: {
                        params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                        campaigns(request: _7.QueryCampaignsRequest): Promise<_7.QueryCampaignsResponse>;
                        campaign(request: _7.QueryCampaignRequest): Promise<_7.QueryCampaignResponse>;
                        claims(request: _7.QueryClaimsRequest): Promise<_7.QueryClaimsResponse>;
                    };
                };
                marketplace: {
                    v1beta1: {
                        params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                        listings(request: _14.QueryListingsRequest): Promise<_14.QueryListingsResponse>;
                        listing(request: _14.QueryListingRequest): Promise<_14.QueryListingResponse>;
                        listingsByOwner(request: _14.QueryListingsByOwnerRequest): Promise<_14.QueryListingsByOwnerResponse>;
                        listingsByPriceDenom(request: _14.QueryListingsByPriceDenomRequest): Promise<_14.QueryListingsByPriceDenomResponse>;
                        listingByNftId(request: _14.QueryListingByNFTIDRequest): Promise<_14.QueryListingResponse>;
                        auctions(request: _14.QueryAuctionsRequest): Promise<_14.QueryAuctionsResponse>;
                        auction(request: _14.QueryAuctionRequest): Promise<_14.QueryAuctionResponse>;
                        auctionsByOwner(request: _14.QueryAuctionsByOwnerRequest): Promise<_14.QueryAuctionsResponse>;
                        auctionsByPriceDenom(request: _14.QueryAuctionsByPriceDenomRequest): Promise<_14.QueryAuctionsResponse>;
                        auctionByNftId(request: _14.QueryAuctionByNFTIDRequest): Promise<_14.QueryAuctionResponse>;
                        bids(request: _14.QueryBidsRequest): Promise<_14.QueryBidsResponse>;
                        bid(request: _14.QueryBidRequest): Promise<_14.QueryBidResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
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
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
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
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            OmniFlix: {
                itc: {
                    v1: _115.LCDQueryClient;
                };
                marketplace: {
                    v1beta1: _116.LCDQueryClient;
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
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
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
