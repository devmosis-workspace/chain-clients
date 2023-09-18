import * as _0 from "./axelarnet/v1beta1/events";
import * as _1 from "./axelarnet/v1beta1/genesis";
import * as _2 from "./axelarnet/v1beta1/params";
import * as _3 from "./axelarnet/v1beta1/query";
import * as _5 from "./axelarnet/v1beta1/tx";
import * as _6 from "./axelarnet/v1beta1/types";
import * as _7 from "./evm/v1beta1/events";
import * as _8 from "./evm/v1beta1/genesis";
import * as _9 from "./evm/v1beta1/params";
import * as _10 from "./evm/v1beta1/query";
import * as _12 from "./evm/v1beta1/tx";
import * as _13 from "./evm/v1beta1/types";
import * as _14 from "./multisig/exported/v1beta1/types";
import * as _15 from "./multisig/v1beta1/events";
import * as _16 from "./multisig/v1beta1/genesis";
import * as _17 from "./multisig/v1beta1/params";
import * as _18 from "./multisig/v1beta1/query";
import * as _20 from "./multisig/v1beta1/tx";
import * as _21 from "./multisig/v1beta1/types";
import * as _22 from "./nexus/exported/v1beta1/types";
import * as _23 from "./nexus/v1beta1/events";
import * as _24 from "./nexus/v1beta1/genesis";
import * as _25 from "./nexus/v1beta1/params";
import * as _26 from "./nexus/v1beta1/query";
import * as _28 from "./nexus/v1beta1/tx";
import * as _29 from "./nexus/v1beta1/types";
import * as _30 from "./permission/exported/v1beta1/types";
import * as _31 from "./permission/v1beta1/genesis";
import * as _32 from "./permission/v1beta1/params";
import * as _33 from "./permission/v1beta1/query";
import * as _35 from "./permission/v1beta1/tx";
import * as _36 from "./permission/v1beta1/types";
import * as _37 from "./reward/v1beta1/genesis";
import * as _38 from "./reward/v1beta1/params";
import * as _39 from "./reward/v1beta1/query";
import * as _41 from "./reward/v1beta1/tx";
import * as _42 from "./reward/v1beta1/types";
import * as _43 from "./snapshot/exported/v1beta1/types";
import * as _44 from "./snapshot/v1beta1/genesis";
import * as _45 from "./snapshot/v1beta1/params";
import * as _46 from "./snapshot/v1beta1/query";
import * as _48 from "./snapshot/v1beta1/tx";
import * as _49 from "./snapshot/v1beta1/types";
import * as _50 from "./tss/exported/v1beta1/types";
import * as _51 from "./tss/tofnd/v1beta1/common";
import * as _52 from "./tss/tofnd/v1beta1/multisig";
import * as _53 from "./tss/tofnd/v1beta1/tofnd";
import * as _54 from "./tss/v1beta1/genesis";
import * as _55 from "./tss/v1beta1/params";
import * as _57 from "./tss/v1beta1/tx";
import * as _58 from "./tss/v1beta1/types";
import * as _59 from "./utils/v1beta1/bitmap";
import * as _60 from "./utils/v1beta1/queuer";
import * as _61 from "./utils/v1beta1/threshold";
import * as _62 from "./vote/exported/v1beta1/types";
import * as _63 from "./vote/v1beta1/events";
import * as _64 from "./vote/v1beta1/genesis";
import * as _65 from "./vote/v1beta1/params";
import * as _67 from "./vote/v1beta1/tx";
import * as _68 from "./vote/v1beta1/types";
import * as _184 from "./permission/v1beta1/service.lcd";
import * as _185 from "./permission/v1beta1/service.rpc.Query";
import * as _186 from "./permission/v1beta1/service.rpc.msg";
export declare namespace axelar {
    namespace axelarnet {
        const v1beta1: {
            iBCTransfer_StatusFromJSON(object: any): _6.IBCTransfer_Status;
            iBCTransfer_StatusToJSON(object: _6.IBCTransfer_Status): string;
            IBCTransfer_Status: typeof _6.IBCTransfer_Status;
            IBCTransfer_StatusSDKType: typeof _6.IBCTransfer_Status;
            IBCTransfer_StatusAmino: typeof _6.IBCTransfer_Status;
            IBCTransfer: {
                typeUrl: string;
                encode(message: _6.IBCTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.IBCTransfer;
                fromPartial(object: Partial<_6.IBCTransfer>): _6.IBCTransfer;
                fromAmino(object: _6.IBCTransferAmino): _6.IBCTransfer;
                toAmino(message: _6.IBCTransfer): _6.IBCTransferAmino;
                fromAminoMsg(object: _6.IBCTransferAminoMsg): _6.IBCTransfer;
                fromProtoMsg(message: _6.IBCTransferProtoMsg): _6.IBCTransfer;
                toProto(message: _6.IBCTransfer): Uint8Array;
                toProtoMsg(message: _6.IBCTransfer): _6.IBCTransferProtoMsg;
            };
            CosmosChain: {
                typeUrl: string;
                encode(message: _6.CosmosChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CosmosChain;
                fromPartial(object: Partial<_6.CosmosChain>): _6.CosmosChain;
                fromAmino(object: _6.CosmosChainAmino): _6.CosmosChain;
                toAmino(message: _6.CosmosChain): _6.CosmosChainAmino;
                fromAminoMsg(object: _6.CosmosChainAminoMsg): _6.CosmosChain;
                fromProtoMsg(message: _6.CosmosChainProtoMsg): _6.CosmosChain;
                toProto(message: _6.CosmosChain): Uint8Array;
                toProtoMsg(message: _6.CosmosChain): _6.CosmosChainProtoMsg;
            };
            Asset: {
                typeUrl: string;
                encode(message: _6.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Asset;
                fromPartial(object: Partial<_6.Asset>): _6.Asset;
                fromAmino(object: _6.AssetAmino): _6.Asset;
                toAmino(message: _6.Asset): _6.AssetAmino;
                fromAminoMsg(object: _6.AssetAminoMsg): _6.Asset;
                fromProtoMsg(message: _6.AssetProtoMsg): _6.Asset;
                toProto(message: _6.Asset): Uint8Array;
                toProtoMsg(message: _6.Asset): _6.AssetProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _6.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Fee;
                fromPartial(object: Partial<_6.Fee>): _6.Fee;
                fromAmino(object: _6.FeeAmino): _6.Fee;
                toAmino(message: _6.Fee): _6.FeeAmino;
                fromAminoMsg(object: _6.FeeAminoMsg): _6.Fee;
                fromProtoMsg(message: _6.FeeProtoMsg): _6.Fee;
                toProto(message: _6.Fee): Uint8Array;
                toProtoMsg(message: _6.Fee): _6.FeeProtoMsg;
            };
            LinkRequest: {
                typeUrl: string;
                encode(message: _5.LinkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LinkRequest;
                fromPartial(object: Partial<_5.LinkRequest>): _5.LinkRequest;
                fromAmino(object: _5.LinkRequestAmino): _5.LinkRequest;
                toAmino(message: _5.LinkRequest): _5.LinkRequestAmino;
                fromAminoMsg(object: _5.LinkRequestAminoMsg): _5.LinkRequest;
                fromProtoMsg(message: _5.LinkRequestProtoMsg): _5.LinkRequest;
                toProto(message: _5.LinkRequest): Uint8Array;
                toProtoMsg(message: _5.LinkRequest): _5.LinkRequestProtoMsg;
            };
            LinkResponse: {
                typeUrl: string;
                encode(message: _5.LinkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.LinkResponse;
                fromPartial(object: Partial<_5.LinkResponse>): _5.LinkResponse;
                fromAmino(object: _5.LinkResponseAmino): _5.LinkResponse;
                toAmino(message: _5.LinkResponse): _5.LinkResponseAmino;
                fromAminoMsg(object: _5.LinkResponseAminoMsg): _5.LinkResponse;
                fromProtoMsg(message: _5.LinkResponseProtoMsg): _5.LinkResponse;
                toProto(message: _5.LinkResponse): Uint8Array;
                toProtoMsg(message: _5.LinkResponse): _5.LinkResponseProtoMsg;
            };
            ConfirmDepositRequest: {
                typeUrl: string;
                encode(message: _5.ConfirmDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.ConfirmDepositRequest;
                fromPartial(object: Partial<_5.ConfirmDepositRequest>): _5.ConfirmDepositRequest;
                fromAmino(object: _5.ConfirmDepositRequestAmino): _5.ConfirmDepositRequest;
                toAmino(message: _5.ConfirmDepositRequest): _5.ConfirmDepositRequestAmino;
                fromAminoMsg(object: _5.ConfirmDepositRequestAminoMsg): _5.ConfirmDepositRequest;
                fromProtoMsg(message: _5.ConfirmDepositRequestProtoMsg): _5.ConfirmDepositRequest;
                toProto(message: _5.ConfirmDepositRequest): Uint8Array;
                toProtoMsg(message: _5.ConfirmDepositRequest): _5.ConfirmDepositRequestProtoMsg;
            };
            ConfirmDepositResponse: {
                typeUrl: string;
                encode(_: _5.ConfirmDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.ConfirmDepositResponse;
                fromPartial(_: Partial<_5.ConfirmDepositResponse>): _5.ConfirmDepositResponse;
                fromAmino(_: _5.ConfirmDepositResponseAmino): _5.ConfirmDepositResponse;
                toAmino(_: _5.ConfirmDepositResponse): _5.ConfirmDepositResponseAmino;
                fromAminoMsg(object: _5.ConfirmDepositResponseAminoMsg): _5.ConfirmDepositResponse;
                fromProtoMsg(message: _5.ConfirmDepositResponseProtoMsg): _5.ConfirmDepositResponse;
                toProto(message: _5.ConfirmDepositResponse): Uint8Array;
                toProtoMsg(message: _5.ConfirmDepositResponse): _5.ConfirmDepositResponseProtoMsg;
            };
            ExecutePendingTransfersRequest: {
                typeUrl: string;
                encode(message: _5.ExecutePendingTransfersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.ExecutePendingTransfersRequest;
                fromPartial(object: Partial<_5.ExecutePendingTransfersRequest>): _5.ExecutePendingTransfersRequest;
                fromAmino(object: _5.ExecutePendingTransfersRequestAmino): _5.ExecutePendingTransfersRequest;
                toAmino(message: _5.ExecutePendingTransfersRequest): _5.ExecutePendingTransfersRequestAmino;
                fromAminoMsg(object: _5.ExecutePendingTransfersRequestAminoMsg): _5.ExecutePendingTransfersRequest;
                fromProtoMsg(message: _5.ExecutePendingTransfersRequestProtoMsg): _5.ExecutePendingTransfersRequest;
                toProto(message: _5.ExecutePendingTransfersRequest): Uint8Array;
                toProtoMsg(message: _5.ExecutePendingTransfersRequest): _5.ExecutePendingTransfersRequestProtoMsg;
            };
            ExecutePendingTransfersResponse: {
                typeUrl: string;
                encode(_: _5.ExecutePendingTransfersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.ExecutePendingTransfersResponse;
                fromPartial(_: Partial<_5.ExecutePendingTransfersResponse>): _5.ExecutePendingTransfersResponse;
                fromAmino(_: _5.ExecutePendingTransfersResponseAmino): _5.ExecutePendingTransfersResponse;
                toAmino(_: _5.ExecutePendingTransfersResponse): _5.ExecutePendingTransfersResponseAmino;
                fromAminoMsg(object: _5.ExecutePendingTransfersResponseAminoMsg): _5.ExecutePendingTransfersResponse;
                fromProtoMsg(message: _5.ExecutePendingTransfersResponseProtoMsg): _5.ExecutePendingTransfersResponse;
                toProto(message: _5.ExecutePendingTransfersResponse): Uint8Array;
                toProtoMsg(message: _5.ExecutePendingTransfersResponse): _5.ExecutePendingTransfersResponseProtoMsg;
            };
            RegisterIBCPathRequest: {
                typeUrl: string;
                encode(message: _5.RegisterIBCPathRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.RegisterIBCPathRequest;
                fromPartial(object: Partial<_5.RegisterIBCPathRequest>): _5.RegisterIBCPathRequest;
                fromAmino(object: _5.RegisterIBCPathRequestAmino): _5.RegisterIBCPathRequest;
                toAmino(message: _5.RegisterIBCPathRequest): _5.RegisterIBCPathRequestAmino;
                fromAminoMsg(object: _5.RegisterIBCPathRequestAminoMsg): _5.RegisterIBCPathRequest;
                fromProtoMsg(message: _5.RegisterIBCPathRequestProtoMsg): _5.RegisterIBCPathRequest;
                toProto(message: _5.RegisterIBCPathRequest): Uint8Array;
                toProtoMsg(message: _5.RegisterIBCPathRequest): _5.RegisterIBCPathRequestProtoMsg;
            };
            RegisterIBCPathResponse: {
                typeUrl: string;
                encode(_: _5.RegisterIBCPathResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.RegisterIBCPathResponse;
                fromPartial(_: Partial<_5.RegisterIBCPathResponse>): _5.RegisterIBCPathResponse;
                fromAmino(_: _5.RegisterIBCPathResponseAmino): _5.RegisterIBCPathResponse;
                toAmino(_: _5.RegisterIBCPathResponse): _5.RegisterIBCPathResponseAmino;
                fromAminoMsg(object: _5.RegisterIBCPathResponseAminoMsg): _5.RegisterIBCPathResponse;
                fromProtoMsg(message: _5.RegisterIBCPathResponseProtoMsg): _5.RegisterIBCPathResponse;
                toProto(message: _5.RegisterIBCPathResponse): Uint8Array;
                toProtoMsg(message: _5.RegisterIBCPathResponse): _5.RegisterIBCPathResponseProtoMsg;
            };
            AddCosmosBasedChainRequest: {
                typeUrl: string;
                encode(message: _5.AddCosmosBasedChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.AddCosmosBasedChainRequest;
                fromPartial(object: Partial<_5.AddCosmosBasedChainRequest>): _5.AddCosmosBasedChainRequest;
                fromAmino(object: _5.AddCosmosBasedChainRequestAmino): _5.AddCosmosBasedChainRequest;
                toAmino(message: _5.AddCosmosBasedChainRequest): _5.AddCosmosBasedChainRequestAmino;
                fromAminoMsg(object: _5.AddCosmosBasedChainRequestAminoMsg): _5.AddCosmosBasedChainRequest;
                fromProtoMsg(message: _5.AddCosmosBasedChainRequestProtoMsg): _5.AddCosmosBasedChainRequest;
                toProto(message: _5.AddCosmosBasedChainRequest): Uint8Array;
                toProtoMsg(message: _5.AddCosmosBasedChainRequest): _5.AddCosmosBasedChainRequestProtoMsg;
            };
            AddCosmosBasedChainResponse: {
                typeUrl: string;
                encode(_: _5.AddCosmosBasedChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.AddCosmosBasedChainResponse;
                fromPartial(_: Partial<_5.AddCosmosBasedChainResponse>): _5.AddCosmosBasedChainResponse;
                fromAmino(_: _5.AddCosmosBasedChainResponseAmino): _5.AddCosmosBasedChainResponse;
                toAmino(_: _5.AddCosmosBasedChainResponse): _5.AddCosmosBasedChainResponseAmino;
                fromAminoMsg(object: _5.AddCosmosBasedChainResponseAminoMsg): _5.AddCosmosBasedChainResponse;
                fromProtoMsg(message: _5.AddCosmosBasedChainResponseProtoMsg): _5.AddCosmosBasedChainResponse;
                toProto(message: _5.AddCosmosBasedChainResponse): Uint8Array;
                toProtoMsg(message: _5.AddCosmosBasedChainResponse): _5.AddCosmosBasedChainResponseProtoMsg;
            };
            RegisterAssetRequest: {
                typeUrl: string;
                encode(message: _5.RegisterAssetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.RegisterAssetRequest;
                fromPartial(object: Partial<_5.RegisterAssetRequest>): _5.RegisterAssetRequest;
                fromAmino(object: _5.RegisterAssetRequestAmino): _5.RegisterAssetRequest;
                toAmino(message: _5.RegisterAssetRequest): _5.RegisterAssetRequestAmino;
                fromAminoMsg(object: _5.RegisterAssetRequestAminoMsg): _5.RegisterAssetRequest;
                fromProtoMsg(message: _5.RegisterAssetRequestProtoMsg): _5.RegisterAssetRequest;
                toProto(message: _5.RegisterAssetRequest): Uint8Array;
                toProtoMsg(message: _5.RegisterAssetRequest): _5.RegisterAssetRequestProtoMsg;
            };
            RegisterAssetResponse: {
                typeUrl: string;
                encode(_: _5.RegisterAssetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.RegisterAssetResponse;
                fromPartial(_: Partial<_5.RegisterAssetResponse>): _5.RegisterAssetResponse;
                fromAmino(_: _5.RegisterAssetResponseAmino): _5.RegisterAssetResponse;
                toAmino(_: _5.RegisterAssetResponse): _5.RegisterAssetResponseAmino;
                fromAminoMsg(object: _5.RegisterAssetResponseAminoMsg): _5.RegisterAssetResponse;
                fromProtoMsg(message: _5.RegisterAssetResponseProtoMsg): _5.RegisterAssetResponse;
                toProto(message: _5.RegisterAssetResponse): Uint8Array;
                toProtoMsg(message: _5.RegisterAssetResponse): _5.RegisterAssetResponseProtoMsg;
            };
            RouteIBCTransfersRequest: {
                typeUrl: string;
                encode(message: _5.RouteIBCTransfersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.RouteIBCTransfersRequest;
                fromPartial(object: Partial<_5.RouteIBCTransfersRequest>): _5.RouteIBCTransfersRequest;
                fromAmino(object: _5.RouteIBCTransfersRequestAmino): _5.RouteIBCTransfersRequest;
                toAmino(message: _5.RouteIBCTransfersRequest): _5.RouteIBCTransfersRequestAmino;
                fromAminoMsg(object: _5.RouteIBCTransfersRequestAminoMsg): _5.RouteIBCTransfersRequest;
                fromProtoMsg(message: _5.RouteIBCTransfersRequestProtoMsg): _5.RouteIBCTransfersRequest;
                toProto(message: _5.RouteIBCTransfersRequest): Uint8Array;
                toProtoMsg(message: _5.RouteIBCTransfersRequest): _5.RouteIBCTransfersRequestProtoMsg;
            };
            RouteIBCTransfersResponse: {
                typeUrl: string;
                encode(_: _5.RouteIBCTransfersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.RouteIBCTransfersResponse;
                fromPartial(_: Partial<_5.RouteIBCTransfersResponse>): _5.RouteIBCTransfersResponse;
                fromAmino(_: _5.RouteIBCTransfersResponseAmino): _5.RouteIBCTransfersResponse;
                toAmino(_: _5.RouteIBCTransfersResponse): _5.RouteIBCTransfersResponseAmino;
                fromAminoMsg(object: _5.RouteIBCTransfersResponseAminoMsg): _5.RouteIBCTransfersResponse;
                fromProtoMsg(message: _5.RouteIBCTransfersResponseProtoMsg): _5.RouteIBCTransfersResponse;
                toProto(message: _5.RouteIBCTransfersResponse): Uint8Array;
                toProtoMsg(message: _5.RouteIBCTransfersResponse): _5.RouteIBCTransfersResponseProtoMsg;
            };
            RegisterFeeCollectorRequest: {
                typeUrl: string;
                encode(message: _5.RegisterFeeCollectorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.RegisterFeeCollectorRequest;
                fromPartial(object: Partial<_5.RegisterFeeCollectorRequest>): _5.RegisterFeeCollectorRequest;
                fromAmino(object: _5.RegisterFeeCollectorRequestAmino): _5.RegisterFeeCollectorRequest;
                toAmino(message: _5.RegisterFeeCollectorRequest): _5.RegisterFeeCollectorRequestAmino;
                fromAminoMsg(object: _5.RegisterFeeCollectorRequestAminoMsg): _5.RegisterFeeCollectorRequest;
                fromProtoMsg(message: _5.RegisterFeeCollectorRequestProtoMsg): _5.RegisterFeeCollectorRequest;
                toProto(message: _5.RegisterFeeCollectorRequest): Uint8Array;
                toProtoMsg(message: _5.RegisterFeeCollectorRequest): _5.RegisterFeeCollectorRequestProtoMsg;
            };
            RegisterFeeCollectorResponse: {
                typeUrl: string;
                encode(_: _5.RegisterFeeCollectorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.RegisterFeeCollectorResponse;
                fromPartial(_: Partial<_5.RegisterFeeCollectorResponse>): _5.RegisterFeeCollectorResponse;
                fromAmino(_: _5.RegisterFeeCollectorResponseAmino): _5.RegisterFeeCollectorResponse;
                toAmino(_: _5.RegisterFeeCollectorResponse): _5.RegisterFeeCollectorResponseAmino;
                fromAminoMsg(object: _5.RegisterFeeCollectorResponseAminoMsg): _5.RegisterFeeCollectorResponse;
                fromProtoMsg(message: _5.RegisterFeeCollectorResponseProtoMsg): _5.RegisterFeeCollectorResponse;
                toProto(message: _5.RegisterFeeCollectorResponse): Uint8Array;
                toProtoMsg(message: _5.RegisterFeeCollectorResponse): _5.RegisterFeeCollectorResponseProtoMsg;
            };
            RetryIBCTransferRequest: {
                typeUrl: string;
                encode(message: _5.RetryIBCTransferRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.RetryIBCTransferRequest;
                fromPartial(object: Partial<_5.RetryIBCTransferRequest>): _5.RetryIBCTransferRequest;
                fromAmino(object: _5.RetryIBCTransferRequestAmino): _5.RetryIBCTransferRequest;
                toAmino(message: _5.RetryIBCTransferRequest): _5.RetryIBCTransferRequestAmino;
                fromAminoMsg(object: _5.RetryIBCTransferRequestAminoMsg): _5.RetryIBCTransferRequest;
                fromProtoMsg(message: _5.RetryIBCTransferRequestProtoMsg): _5.RetryIBCTransferRequest;
                toProto(message: _5.RetryIBCTransferRequest): Uint8Array;
                toProtoMsg(message: _5.RetryIBCTransferRequest): _5.RetryIBCTransferRequestProtoMsg;
            };
            RetryIBCTransferResponse: {
                typeUrl: string;
                encode(_: _5.RetryIBCTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.RetryIBCTransferResponse;
                fromPartial(_: Partial<_5.RetryIBCTransferResponse>): _5.RetryIBCTransferResponse;
                fromAmino(_: _5.RetryIBCTransferResponseAmino): _5.RetryIBCTransferResponse;
                toAmino(_: _5.RetryIBCTransferResponse): _5.RetryIBCTransferResponseAmino;
                fromAminoMsg(object: _5.RetryIBCTransferResponseAminoMsg): _5.RetryIBCTransferResponse;
                fromProtoMsg(message: _5.RetryIBCTransferResponseProtoMsg): _5.RetryIBCTransferResponse;
                toProto(message: _5.RetryIBCTransferResponse): Uint8Array;
                toProtoMsg(message: _5.RetryIBCTransferResponse): _5.RetryIBCTransferResponseProtoMsg;
            };
            RouteMessageRequest: {
                typeUrl: string;
                encode(message: _5.RouteMessageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.RouteMessageRequest;
                fromPartial(object: Partial<_5.RouteMessageRequest>): _5.RouteMessageRequest;
                fromAmino(object: _5.RouteMessageRequestAmino): _5.RouteMessageRequest;
                toAmino(message: _5.RouteMessageRequest): _5.RouteMessageRequestAmino;
                fromAminoMsg(object: _5.RouteMessageRequestAminoMsg): _5.RouteMessageRequest;
                fromProtoMsg(message: _5.RouteMessageRequestProtoMsg): _5.RouteMessageRequest;
                toProto(message: _5.RouteMessageRequest): Uint8Array;
                toProtoMsg(message: _5.RouteMessageRequest): _5.RouteMessageRequestProtoMsg;
            };
            RouteMessageResponse: {
                typeUrl: string;
                encode(_: _5.RouteMessageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.RouteMessageResponse;
                fromPartial(_: Partial<_5.RouteMessageResponse>): _5.RouteMessageResponse;
                fromAmino(_: _5.RouteMessageResponseAmino): _5.RouteMessageResponse;
                toAmino(_: _5.RouteMessageResponse): _5.RouteMessageResponseAmino;
                fromAminoMsg(object: _5.RouteMessageResponseAminoMsg): _5.RouteMessageResponse;
                fromProtoMsg(message: _5.RouteMessageResponseProtoMsg): _5.RouteMessageResponse;
                toProto(message: _5.RouteMessageResponse): Uint8Array;
                toProtoMsg(message: _5.RouteMessageResponse): _5.RouteMessageResponseProtoMsg;
            };
            CallContractRequest: {
                typeUrl: string;
                encode(message: _5.CallContractRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CallContractRequest;
                fromPartial(object: Partial<_5.CallContractRequest>): _5.CallContractRequest;
                fromAmino(object: _5.CallContractRequestAmino): _5.CallContractRequest;
                toAmino(message: _5.CallContractRequest): _5.CallContractRequestAmino;
                fromAminoMsg(object: _5.CallContractRequestAminoMsg): _5.CallContractRequest;
                fromProtoMsg(message: _5.CallContractRequestProtoMsg): _5.CallContractRequest;
                toProto(message: _5.CallContractRequest): Uint8Array;
                toProtoMsg(message: _5.CallContractRequest): _5.CallContractRequestProtoMsg;
            };
            CallContractResponse: {
                typeUrl: string;
                encode(_: _5.CallContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.CallContractResponse;
                fromPartial(_: Partial<_5.CallContractResponse>): _5.CallContractResponse;
                fromAmino(_: _5.CallContractResponseAmino): _5.CallContractResponse;
                toAmino(_: _5.CallContractResponse): _5.CallContractResponseAmino;
                fromAminoMsg(object: _5.CallContractResponseAminoMsg): _5.CallContractResponse;
                fromProtoMsg(message: _5.CallContractResponseProtoMsg): _5.CallContractResponse;
                toProto(message: _5.CallContractResponse): Uint8Array;
                toProtoMsg(message: _5.CallContractResponse): _5.CallContractResponseProtoMsg;
            };
            PendingIBCTransferCountRequest: {
                typeUrl: string;
                encode(_: _3.PendingIBCTransferCountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.PendingIBCTransferCountRequest;
                fromPartial(_: Partial<_3.PendingIBCTransferCountRequest>): _3.PendingIBCTransferCountRequest;
                fromAmino(_: _3.PendingIBCTransferCountRequestAmino): _3.PendingIBCTransferCountRequest;
                toAmino(_: _3.PendingIBCTransferCountRequest): _3.PendingIBCTransferCountRequestAmino;
                fromAminoMsg(object: _3.PendingIBCTransferCountRequestAminoMsg): _3.PendingIBCTransferCountRequest;
                fromProtoMsg(message: _3.PendingIBCTransferCountRequestProtoMsg): _3.PendingIBCTransferCountRequest;
                toProto(message: _3.PendingIBCTransferCountRequest): Uint8Array;
                toProtoMsg(message: _3.PendingIBCTransferCountRequest): _3.PendingIBCTransferCountRequestProtoMsg;
            };
            PendingIBCTransferCountResponse_TransfersByChainEntry: {
                encode(message: _3.PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.PendingIBCTransferCountResponse_TransfersByChainEntry;
                fromPartial(object: Partial<_3.PendingIBCTransferCountResponse_TransfersByChainEntry>): _3.PendingIBCTransferCountResponse_TransfersByChainEntry;
                fromAmino(object: _3.PendingIBCTransferCountResponse_TransfersByChainEntryAmino): _3.PendingIBCTransferCountResponse_TransfersByChainEntry;
                toAmino(message: _3.PendingIBCTransferCountResponse_TransfersByChainEntry): _3.PendingIBCTransferCountResponse_TransfersByChainEntryAmino;
                fromAminoMsg(object: _3.PendingIBCTransferCountResponse_TransfersByChainEntryAminoMsg): _3.PendingIBCTransferCountResponse_TransfersByChainEntry;
                fromProtoMsg(message: _3.PendingIBCTransferCountResponse_TransfersByChainEntryProtoMsg): _3.PendingIBCTransferCountResponse_TransfersByChainEntry;
                toProto(message: _3.PendingIBCTransferCountResponse_TransfersByChainEntry): Uint8Array;
            };
            PendingIBCTransferCountResponse: {
                typeUrl: string;
                encode(message: _3.PendingIBCTransferCountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.PendingIBCTransferCountResponse;
                fromPartial(object: Partial<_3.PendingIBCTransferCountResponse>): _3.PendingIBCTransferCountResponse;
                fromAmino(object: _3.PendingIBCTransferCountResponseAmino): _3.PendingIBCTransferCountResponse;
                toAmino(message: _3.PendingIBCTransferCountResponse): _3.PendingIBCTransferCountResponseAmino;
                fromAminoMsg(object: _3.PendingIBCTransferCountResponseAminoMsg): _3.PendingIBCTransferCountResponse;
                fromProtoMsg(message: _3.PendingIBCTransferCountResponseProtoMsg): _3.PendingIBCTransferCountResponse;
                toProto(message: _3.PendingIBCTransferCountResponse): Uint8Array;
                toProtoMsg(message: _3.PendingIBCTransferCountResponse): _3.PendingIBCTransferCountResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
            GenesisState_SeqIdMappingEntry: {
                encode(message: _1.GenesisState_SeqIdMappingEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.GenesisState_SeqIdMappingEntry;
                fromPartial(object: Partial<_1.GenesisState_SeqIdMappingEntry>): _1.GenesisState_SeqIdMappingEntry;
                fromAmino(object: _1.GenesisState_SeqIdMappingEntryAmino): _1.GenesisState_SeqIdMappingEntry;
                toAmino(message: _1.GenesisState_SeqIdMappingEntry): _1.GenesisState_SeqIdMappingEntryAmino;
                fromAminoMsg(object: _1.GenesisState_SeqIdMappingEntryAminoMsg): _1.GenesisState_SeqIdMappingEntry;
                fromProtoMsg(message: _1.GenesisState_SeqIdMappingEntryProtoMsg): _1.GenesisState_SeqIdMappingEntry;
                toProto(message: _1.GenesisState_SeqIdMappingEntry): Uint8Array;
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
            IBCTransferSent: {
                typeUrl: string;
                encode(message: _0.IBCTransferSent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.IBCTransferSent;
                fromPartial(object: Partial<_0.IBCTransferSent>): _0.IBCTransferSent;
                fromAmino(object: _0.IBCTransferSentAmino): _0.IBCTransferSent;
                toAmino(message: _0.IBCTransferSent): _0.IBCTransferSentAmino;
                fromAminoMsg(object: _0.IBCTransferSentAminoMsg): _0.IBCTransferSent;
                fromProtoMsg(message: _0.IBCTransferSentProtoMsg): _0.IBCTransferSent;
                toProto(message: _0.IBCTransferSent): Uint8Array;
                toProtoMsg(message: _0.IBCTransferSent): _0.IBCTransferSentProtoMsg;
            };
            IBCTransferCompleted: {
                typeUrl: string;
                encode(message: _0.IBCTransferCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.IBCTransferCompleted;
                fromPartial(object: Partial<_0.IBCTransferCompleted>): _0.IBCTransferCompleted;
                fromAmino(object: _0.IBCTransferCompletedAmino): _0.IBCTransferCompleted;
                toAmino(message: _0.IBCTransferCompleted): _0.IBCTransferCompletedAmino;
                fromAminoMsg(object: _0.IBCTransferCompletedAminoMsg): _0.IBCTransferCompleted;
                fromProtoMsg(message: _0.IBCTransferCompletedProtoMsg): _0.IBCTransferCompleted;
                toProto(message: _0.IBCTransferCompleted): Uint8Array;
                toProtoMsg(message: _0.IBCTransferCompleted): _0.IBCTransferCompletedProtoMsg;
            };
            IBCTransferFailed: {
                typeUrl: string;
                encode(message: _0.IBCTransferFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.IBCTransferFailed;
                fromPartial(object: Partial<_0.IBCTransferFailed>): _0.IBCTransferFailed;
                fromAmino(object: _0.IBCTransferFailedAmino): _0.IBCTransferFailed;
                toAmino(message: _0.IBCTransferFailed): _0.IBCTransferFailedAmino;
                fromAminoMsg(object: _0.IBCTransferFailedAminoMsg): _0.IBCTransferFailed;
                fromProtoMsg(message: _0.IBCTransferFailedProtoMsg): _0.IBCTransferFailed;
                toProto(message: _0.IBCTransferFailed): Uint8Array;
                toProtoMsg(message: _0.IBCTransferFailed): _0.IBCTransferFailedProtoMsg;
            };
            IBCTransferRetried: {
                typeUrl: string;
                encode(message: _0.IBCTransferRetried, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.IBCTransferRetried;
                fromPartial(object: Partial<_0.IBCTransferRetried>): _0.IBCTransferRetried;
                fromAmino(object: _0.IBCTransferRetriedAmino): _0.IBCTransferRetried;
                toAmino(message: _0.IBCTransferRetried): _0.IBCTransferRetriedAmino;
                fromAminoMsg(object: _0.IBCTransferRetriedAminoMsg): _0.IBCTransferRetried;
                fromProtoMsg(message: _0.IBCTransferRetriedProtoMsg): _0.IBCTransferRetried;
                toProto(message: _0.IBCTransferRetried): Uint8Array;
                toProtoMsg(message: _0.IBCTransferRetried): _0.IBCTransferRetriedProtoMsg;
            };
            AxelarTransferCompleted: {
                typeUrl: string;
                encode(message: _0.AxelarTransferCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.AxelarTransferCompleted;
                fromPartial(object: Partial<_0.AxelarTransferCompleted>): _0.AxelarTransferCompleted;
                fromAmino(object: _0.AxelarTransferCompletedAmino): _0.AxelarTransferCompleted;
                toAmino(message: _0.AxelarTransferCompleted): _0.AxelarTransferCompletedAmino;
                fromAminoMsg(object: _0.AxelarTransferCompletedAminoMsg): _0.AxelarTransferCompleted;
                fromProtoMsg(message: _0.AxelarTransferCompletedProtoMsg): _0.AxelarTransferCompleted;
                toProto(message: _0.AxelarTransferCompleted): Uint8Array;
                toProtoMsg(message: _0.AxelarTransferCompleted): _0.AxelarTransferCompletedProtoMsg;
            };
            FeeCollected: {
                typeUrl: string;
                encode(message: _0.FeeCollected, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.FeeCollected;
                fromPartial(object: Partial<_0.FeeCollected>): _0.FeeCollected;
                fromAmino(object: _0.FeeCollectedAmino): _0.FeeCollected;
                toAmino(message: _0.FeeCollected): _0.FeeCollectedAmino;
                fromAminoMsg(object: _0.FeeCollectedAminoMsg): _0.FeeCollected;
                fromProtoMsg(message: _0.FeeCollectedProtoMsg): _0.FeeCollected;
                toProto(message: _0.FeeCollected): Uint8Array;
                toProtoMsg(message: _0.FeeCollected): _0.FeeCollectedProtoMsg;
            };
            FeePaid: {
                typeUrl: string;
                encode(message: _0.FeePaid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.FeePaid;
                fromPartial(object: Partial<_0.FeePaid>): _0.FeePaid;
                fromAmino(object: _0.FeePaidAmino): _0.FeePaid;
                toAmino(message: _0.FeePaid): _0.FeePaidAmino;
                fromAminoMsg(object: _0.FeePaidAminoMsg): _0.FeePaid;
                fromProtoMsg(message: _0.FeePaidProtoMsg): _0.FeePaid;
                toProto(message: _0.FeePaid): Uint8Array;
                toProtoMsg(message: _0.FeePaid): _0.FeePaidProtoMsg;
            };
            ContractCallSubmitted: {
                typeUrl: string;
                encode(message: _0.ContractCallSubmitted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.ContractCallSubmitted;
                fromPartial(object: Partial<_0.ContractCallSubmitted>): _0.ContractCallSubmitted;
                fromAmino(object: _0.ContractCallSubmittedAmino): _0.ContractCallSubmitted;
                toAmino(message: _0.ContractCallSubmitted): _0.ContractCallSubmittedAmino;
                fromAminoMsg(object: _0.ContractCallSubmittedAminoMsg): _0.ContractCallSubmitted;
                fromProtoMsg(message: _0.ContractCallSubmittedProtoMsg): _0.ContractCallSubmitted;
                toProto(message: _0.ContractCallSubmitted): Uint8Array;
                toProtoMsg(message: _0.ContractCallSubmitted): _0.ContractCallSubmittedProtoMsg;
            };
            ContractCallWithTokenSubmitted: {
                typeUrl: string;
                encode(message: _0.ContractCallWithTokenSubmitted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.ContractCallWithTokenSubmitted;
                fromPartial(object: Partial<_0.ContractCallWithTokenSubmitted>): _0.ContractCallWithTokenSubmitted;
                fromAmino(object: _0.ContractCallWithTokenSubmittedAmino): _0.ContractCallWithTokenSubmitted;
                toAmino(message: _0.ContractCallWithTokenSubmitted): _0.ContractCallWithTokenSubmittedAmino;
                fromAminoMsg(object: _0.ContractCallWithTokenSubmittedAminoMsg): _0.ContractCallWithTokenSubmitted;
                fromProtoMsg(message: _0.ContractCallWithTokenSubmittedProtoMsg): _0.ContractCallWithTokenSubmitted;
                toProto(message: _0.ContractCallWithTokenSubmitted): Uint8Array;
                toProtoMsg(message: _0.ContractCallWithTokenSubmitted): _0.ContractCallWithTokenSubmittedProtoMsg;
            };
            TokenSent: {
                typeUrl: string;
                encode(message: _0.TokenSent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.TokenSent;
                fromPartial(object: Partial<_0.TokenSent>): _0.TokenSent;
                fromAmino(object: _0.TokenSentAmino): _0.TokenSent;
                toAmino(message: _0.TokenSent): _0.TokenSentAmino;
                fromAminoMsg(object: _0.TokenSentAminoMsg): _0.TokenSent;
                fromProtoMsg(message: _0.TokenSentProtoMsg): _0.TokenSent;
                toProto(message: _0.TokenSent): Uint8Array;
                toProtoMsg(message: _0.TokenSent): _0.TokenSentProtoMsg;
            };
        };
    }
    namespace evm {
        const v1beta1: {
            event_StatusFromJSON(object: any): _13.Event_Status;
            event_StatusToJSON(object: _13.Event_Status): string;
            statusFromJSON(object: any): _13.Status;
            statusToJSON(object: _13.Status): string;
            commandTypeFromJSON(object: any): _13.CommandType;
            commandTypeToJSON(object: _13.CommandType): string;
            batchedCommandsStatusFromJSON(object: any): _13.BatchedCommandsStatus;
            batchedCommandsStatusToJSON(object: _13.BatchedCommandsStatus): string;
            sigTypeFromJSON(object: any): _13.SigType;
            sigTypeToJSON(object: _13.SigType): string;
            depositStatusFromJSON(object: any): _13.DepositStatus;
            depositStatusToJSON(object: _13.DepositStatus): string;
            Event_Status: typeof _13.Event_Status;
            Event_StatusSDKType: typeof _13.Event_Status;
            Event_StatusAmino: typeof _13.Event_Status;
            Status: typeof _13.Status;
            StatusSDKType: typeof _13.Status;
            StatusAmino: typeof _13.Status;
            CommandType: typeof _13.CommandType;
            CommandTypeSDKType: typeof _13.CommandType;
            CommandTypeAmino: typeof _13.CommandType;
            BatchedCommandsStatus: typeof _13.BatchedCommandsStatus;
            BatchedCommandsStatusSDKType: typeof _13.BatchedCommandsStatus;
            BatchedCommandsStatusAmino: typeof _13.BatchedCommandsStatus;
            SigType: typeof _13.SigType;
            SigTypeSDKType: typeof _13.SigType;
            SigTypeAmino: typeof _13.SigType;
            DepositStatus: typeof _13.DepositStatus;
            DepositStatusSDKType: typeof _13.DepositStatus;
            DepositStatusAmino: typeof _13.DepositStatus;
            VoteEvents: {
                typeUrl: string;
                encode(message: _13.VoteEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.VoteEvents;
                fromPartial(object: Partial<_13.VoteEvents>): _13.VoteEvents;
                fromAmino(object: _13.VoteEventsAmino): _13.VoteEvents;
                toAmino(message: _13.VoteEvents): _13.VoteEventsAmino;
                fromAminoMsg(object: _13.VoteEventsAminoMsg): _13.VoteEvents;
                fromProtoMsg(message: _13.VoteEventsProtoMsg): _13.VoteEvents;
                toProto(message: _13.VoteEvents): Uint8Array;
                toProtoMsg(message: _13.VoteEvents): _13.VoteEventsProtoMsg;
            };
            Event: {
                typeUrl: string;
                encode(message: _13.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Event;
                fromPartial(object: Partial<_13.Event>): _13.Event;
                fromAmino(object: _13.EventAmino): _13.Event;
                toAmino(message: _13.Event): _13.EventAmino;
                fromAminoMsg(object: _13.EventAminoMsg): _13.Event;
                fromProtoMsg(message: _13.EventProtoMsg): _13.Event;
                toProto(message: _13.Event): Uint8Array;
                toProtoMsg(message: _13.Event): _13.EventProtoMsg;
            };
            EventTokenSent: {
                typeUrl: string;
                encode(message: _13.EventTokenSent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventTokenSent;
                fromPartial(object: Partial<_13.EventTokenSent>): _13.EventTokenSent;
                fromAmino(object: _13.EventTokenSentAmino): _13.EventTokenSent;
                toAmino(message: _13.EventTokenSent): _13.EventTokenSentAmino;
                fromAminoMsg(object: _13.EventTokenSentAminoMsg): _13.EventTokenSent;
                fromProtoMsg(message: _13.EventTokenSentProtoMsg): _13.EventTokenSent;
                toProto(message: _13.EventTokenSent): Uint8Array;
                toProtoMsg(message: _13.EventTokenSent): _13.EventTokenSentProtoMsg;
            };
            EventContractCall: {
                typeUrl: string;
                encode(message: _13.EventContractCall, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventContractCall;
                fromPartial(object: Partial<_13.EventContractCall>): _13.EventContractCall;
                fromAmino(object: _13.EventContractCallAmino): _13.EventContractCall;
                toAmino(message: _13.EventContractCall): _13.EventContractCallAmino;
                fromAminoMsg(object: _13.EventContractCallAminoMsg): _13.EventContractCall;
                fromProtoMsg(message: _13.EventContractCallProtoMsg): _13.EventContractCall;
                toProto(message: _13.EventContractCall): Uint8Array;
                toProtoMsg(message: _13.EventContractCall): _13.EventContractCallProtoMsg;
            };
            EventContractCallWithToken: {
                typeUrl: string;
                encode(message: _13.EventContractCallWithToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventContractCallWithToken;
                fromPartial(object: Partial<_13.EventContractCallWithToken>): _13.EventContractCallWithToken;
                fromAmino(object: _13.EventContractCallWithTokenAmino): _13.EventContractCallWithToken;
                toAmino(message: _13.EventContractCallWithToken): _13.EventContractCallWithTokenAmino;
                fromAminoMsg(object: _13.EventContractCallWithTokenAminoMsg): _13.EventContractCallWithToken;
                fromProtoMsg(message: _13.EventContractCallWithTokenProtoMsg): _13.EventContractCallWithToken;
                toProto(message: _13.EventContractCallWithToken): Uint8Array;
                toProtoMsg(message: _13.EventContractCallWithToken): _13.EventContractCallWithTokenProtoMsg;
            };
            EventTransfer: {
                typeUrl: string;
                encode(message: _13.EventTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventTransfer;
                fromPartial(object: Partial<_13.EventTransfer>): _13.EventTransfer;
                fromAmino(object: _13.EventTransferAmino): _13.EventTransfer;
                toAmino(message: _13.EventTransfer): _13.EventTransferAmino;
                fromAminoMsg(object: _13.EventTransferAminoMsg): _13.EventTransfer;
                fromProtoMsg(message: _13.EventTransferProtoMsg): _13.EventTransfer;
                toProto(message: _13.EventTransfer): Uint8Array;
                toProtoMsg(message: _13.EventTransfer): _13.EventTransferProtoMsg;
            };
            EventTokenDeployed: {
                typeUrl: string;
                encode(message: _13.EventTokenDeployed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventTokenDeployed;
                fromPartial(object: Partial<_13.EventTokenDeployed>): _13.EventTokenDeployed;
                fromAmino(object: _13.EventTokenDeployedAmino): _13.EventTokenDeployed;
                toAmino(message: _13.EventTokenDeployed): _13.EventTokenDeployedAmino;
                fromAminoMsg(object: _13.EventTokenDeployedAminoMsg): _13.EventTokenDeployed;
                fromProtoMsg(message: _13.EventTokenDeployedProtoMsg): _13.EventTokenDeployed;
                toProto(message: _13.EventTokenDeployed): Uint8Array;
                toProtoMsg(message: _13.EventTokenDeployed): _13.EventTokenDeployedProtoMsg;
            };
            EventMultisigOwnershipTransferred: {
                typeUrl: string;
                encode(message: _13.EventMultisigOwnershipTransferred, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventMultisigOwnershipTransferred;
                fromPartial(object: Partial<_13.EventMultisigOwnershipTransferred>): _13.EventMultisigOwnershipTransferred;
                fromAmino(object: _13.EventMultisigOwnershipTransferredAmino): _13.EventMultisigOwnershipTransferred;
                toAmino(message: _13.EventMultisigOwnershipTransferred): _13.EventMultisigOwnershipTransferredAmino;
                fromAminoMsg(object: _13.EventMultisigOwnershipTransferredAminoMsg): _13.EventMultisigOwnershipTransferred;
                fromProtoMsg(message: _13.EventMultisigOwnershipTransferredProtoMsg): _13.EventMultisigOwnershipTransferred;
                toProto(message: _13.EventMultisigOwnershipTransferred): Uint8Array;
                toProtoMsg(message: _13.EventMultisigOwnershipTransferred): _13.EventMultisigOwnershipTransferredProtoMsg;
            };
            EventMultisigOperatorshipTransferred: {
                typeUrl: string;
                encode(message: _13.EventMultisigOperatorshipTransferred, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventMultisigOperatorshipTransferred;
                fromPartial(object: Partial<_13.EventMultisigOperatorshipTransferred>): _13.EventMultisigOperatorshipTransferred;
                fromAmino(object: _13.EventMultisigOperatorshipTransferredAmino): _13.EventMultisigOperatorshipTransferred;
                toAmino(message: _13.EventMultisigOperatorshipTransferred): _13.EventMultisigOperatorshipTransferredAmino;
                fromAminoMsg(object: _13.EventMultisigOperatorshipTransferredAminoMsg): _13.EventMultisigOperatorshipTransferred;
                fromProtoMsg(message: _13.EventMultisigOperatorshipTransferredProtoMsg): _13.EventMultisigOperatorshipTransferred;
                toProto(message: _13.EventMultisigOperatorshipTransferred): Uint8Array;
                toProtoMsg(message: _13.EventMultisigOperatorshipTransferred): _13.EventMultisigOperatorshipTransferredProtoMsg;
            };
            NetworkInfo: {
                typeUrl: string;
                encode(message: _13.NetworkInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.NetworkInfo;
                fromPartial(object: Partial<_13.NetworkInfo>): _13.NetworkInfo;
                fromAmino(object: _13.NetworkInfoAmino): _13.NetworkInfo;
                toAmino(message: _13.NetworkInfo): _13.NetworkInfoAmino;
                fromAminoMsg(object: _13.NetworkInfoAminoMsg): _13.NetworkInfo;
                fromProtoMsg(message: _13.NetworkInfoProtoMsg): _13.NetworkInfo;
                toProto(message: _13.NetworkInfo): Uint8Array;
                toProtoMsg(message: _13.NetworkInfo): _13.NetworkInfoProtoMsg;
            };
            BurnerInfo: {
                typeUrl: string;
                encode(message: _13.BurnerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.BurnerInfo;
                fromPartial(object: Partial<_13.BurnerInfo>): _13.BurnerInfo;
                fromAmino(object: _13.BurnerInfoAmino): _13.BurnerInfo;
                toAmino(message: _13.BurnerInfo): _13.BurnerInfoAmino;
                fromAminoMsg(object: _13.BurnerInfoAminoMsg): _13.BurnerInfo;
                fromProtoMsg(message: _13.BurnerInfoProtoMsg): _13.BurnerInfo;
                toProto(message: _13.BurnerInfo): Uint8Array;
                toProtoMsg(message: _13.BurnerInfo): _13.BurnerInfoProtoMsg;
            };
            ERC20Deposit: {
                typeUrl: string;
                encode(message: _13.ERC20Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ERC20Deposit;
                fromPartial(object: Partial<_13.ERC20Deposit>): _13.ERC20Deposit;
                fromAmino(object: _13.ERC20DepositAmino): _13.ERC20Deposit;
                toAmino(message: _13.ERC20Deposit): _13.ERC20DepositAmino;
                fromAminoMsg(object: _13.ERC20DepositAminoMsg): _13.ERC20Deposit;
                fromProtoMsg(message: _13.ERC20DepositProtoMsg): _13.ERC20Deposit;
                toProto(message: _13.ERC20Deposit): Uint8Array;
                toProtoMsg(message: _13.ERC20Deposit): _13.ERC20DepositProtoMsg;
            };
            ERC20TokenMetadata: {
                typeUrl: string;
                encode(message: _13.ERC20TokenMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ERC20TokenMetadata;
                fromPartial(object: Partial<_13.ERC20TokenMetadata>): _13.ERC20TokenMetadata;
                fromAmino(object: _13.ERC20TokenMetadataAmino): _13.ERC20TokenMetadata;
                toAmino(message: _13.ERC20TokenMetadata): _13.ERC20TokenMetadataAmino;
                fromAminoMsg(object: _13.ERC20TokenMetadataAminoMsg): _13.ERC20TokenMetadata;
                fromProtoMsg(message: _13.ERC20TokenMetadataProtoMsg): _13.ERC20TokenMetadata;
                toProto(message: _13.ERC20TokenMetadata): Uint8Array;
                toProtoMsg(message: _13.ERC20TokenMetadata): _13.ERC20TokenMetadataProtoMsg;
            };
            TransactionMetadata: {
                typeUrl: string;
                encode(message: _13.TransactionMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.TransactionMetadata;
                fromPartial(object: Partial<_13.TransactionMetadata>): _13.TransactionMetadata;
                fromAmino(object: _13.TransactionMetadataAmino): _13.TransactionMetadata;
                toAmino(message: _13.TransactionMetadata): _13.TransactionMetadataAmino;
                fromAminoMsg(object: _13.TransactionMetadataAminoMsg): _13.TransactionMetadata;
                fromProtoMsg(message: _13.TransactionMetadataProtoMsg): _13.TransactionMetadata;
                toProto(message: _13.TransactionMetadata): Uint8Array;
                toProtoMsg(message: _13.TransactionMetadata): _13.TransactionMetadataProtoMsg;
            };
            Command: {
                typeUrl: string;
                encode(message: _13.Command, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Command;
                fromPartial(object: Partial<_13.Command>): _13.Command;
                fromAmino(object: _13.CommandAmino): _13.Command;
                toAmino(message: _13.Command): _13.CommandAmino;
                fromAminoMsg(object: _13.CommandAminoMsg): _13.Command;
                fromProtoMsg(message: _13.CommandProtoMsg): _13.Command;
                toProto(message: _13.Command): Uint8Array;
                toProtoMsg(message: _13.Command): _13.CommandProtoMsg;
            };
            CommandBatchMetadata: {
                typeUrl: string;
                encode(message: _13.CommandBatchMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.CommandBatchMetadata;
                fromPartial(object: Partial<_13.CommandBatchMetadata>): _13.CommandBatchMetadata;
                fromAmino(object: _13.CommandBatchMetadataAmino): _13.CommandBatchMetadata;
                toAmino(message: _13.CommandBatchMetadata): _13.CommandBatchMetadataAmino;
                fromAminoMsg(object: _13.CommandBatchMetadataAminoMsg): _13.CommandBatchMetadata;
                fromProtoMsg(message: _13.CommandBatchMetadataProtoMsg): _13.CommandBatchMetadata;
                toProto(message: _13.CommandBatchMetadata): Uint8Array;
                toProtoMsg(message: _13.CommandBatchMetadata): _13.CommandBatchMetadataProtoMsg;
            };
            SigMetadata: {
                typeUrl: string;
                encode(message: _13.SigMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.SigMetadata;
                fromPartial(object: Partial<_13.SigMetadata>): _13.SigMetadata;
                fromAmino(object: _13.SigMetadataAmino): _13.SigMetadata;
                toAmino(message: _13.SigMetadata): _13.SigMetadataAmino;
                fromAminoMsg(object: _13.SigMetadataAminoMsg): _13.SigMetadata;
                fromProtoMsg(message: _13.SigMetadataProtoMsg): _13.SigMetadata;
                toProto(message: _13.SigMetadata): Uint8Array;
                toProtoMsg(message: _13.SigMetadata): _13.SigMetadataProtoMsg;
            };
            TransferKey: {
                typeUrl: string;
                encode(message: _13.TransferKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.TransferKey;
                fromPartial(object: Partial<_13.TransferKey>): _13.TransferKey;
                fromAmino(object: _13.TransferKeyAmino): _13.TransferKey;
                toAmino(message: _13.TransferKey): _13.TransferKeyAmino;
                fromAminoMsg(object: _13.TransferKeyAminoMsg): _13.TransferKey;
                fromProtoMsg(message: _13.TransferKeyProtoMsg): _13.TransferKey;
                toProto(message: _13.TransferKey): Uint8Array;
                toProtoMsg(message: _13.TransferKey): _13.TransferKeyProtoMsg;
            };
            Asset: {
                typeUrl: string;
                encode(message: _13.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Asset;
                fromPartial(object: Partial<_13.Asset>): _13.Asset;
                fromAmino(object: _13.AssetAmino): _13.Asset;
                toAmino(message: _13.Asset): _13.AssetAmino;
                fromAminoMsg(object: _13.AssetAminoMsg): _13.Asset;
                fromProtoMsg(message: _13.AssetProtoMsg): _13.Asset;
                toProto(message: _13.Asset): Uint8Array;
                toProtoMsg(message: _13.Asset): _13.AssetProtoMsg;
            };
            TokenDetails: {
                typeUrl: string;
                encode(message: _13.TokenDetails, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.TokenDetails;
                fromPartial(object: Partial<_13.TokenDetails>): _13.TokenDetails;
                fromAmino(object: _13.TokenDetailsAmino): _13.TokenDetails;
                toAmino(message: _13.TokenDetails): _13.TokenDetailsAmino;
                fromAminoMsg(object: _13.TokenDetailsAminoMsg): _13.TokenDetails;
                fromProtoMsg(message: _13.TokenDetailsProtoMsg): _13.TokenDetails;
                toProto(message: _13.TokenDetails): Uint8Array;
                toProtoMsg(message: _13.TokenDetails): _13.TokenDetailsProtoMsg;
            };
            Gateway: {
                typeUrl: string;
                encode(message: _13.Gateway, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Gateway;
                fromPartial(object: Partial<_13.Gateway>): _13.Gateway;
                fromAmino(object: _13.GatewayAmino): _13.Gateway;
                toAmino(message: _13.Gateway): _13.GatewayAmino;
                fromAminoMsg(object: _13.GatewayAminoMsg): _13.Gateway;
                fromProtoMsg(message: _13.GatewayProtoMsg): _13.Gateway;
                toProto(message: _13.Gateway): Uint8Array;
                toProtoMsg(message: _13.Gateway): _13.GatewayProtoMsg;
            };
            PollMetadata: {
                typeUrl: string;
                encode(message: _13.PollMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.PollMetadata;
                fromPartial(object: Partial<_13.PollMetadata>): _13.PollMetadata;
                fromAmino(object: _13.PollMetadataAmino): _13.PollMetadata;
                toAmino(message: _13.PollMetadata): _13.PollMetadataAmino;
                fromAminoMsg(object: _13.PollMetadataAminoMsg): _13.PollMetadata;
                fromProtoMsg(message: _13.PollMetadataProtoMsg): _13.PollMetadata;
                toProto(message: _13.PollMetadata): Uint8Array;
                toProtoMsg(message: _13.PollMetadata): _13.PollMetadataProtoMsg;
            };
            Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            SetGatewayRequest: {
                typeUrl: string;
                encode(message: _12.SetGatewayRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.SetGatewayRequest;
                fromPartial(object: Partial<_12.SetGatewayRequest>): _12.SetGatewayRequest;
                fromAmino(object: _12.SetGatewayRequestAmino): _12.SetGatewayRequest;
                toAmino(message: _12.SetGatewayRequest): _12.SetGatewayRequestAmino;
                fromAminoMsg(object: _12.SetGatewayRequestAminoMsg): _12.SetGatewayRequest;
                fromProtoMsg(message: _12.SetGatewayRequestProtoMsg): _12.SetGatewayRequest;
                toProto(message: _12.SetGatewayRequest): Uint8Array;
                toProtoMsg(message: _12.SetGatewayRequest): _12.SetGatewayRequestProtoMsg;
            };
            SetGatewayResponse: {
                typeUrl: string;
                encode(_: _12.SetGatewayResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.SetGatewayResponse;
                fromPartial(_: Partial<_12.SetGatewayResponse>): _12.SetGatewayResponse;
                fromAmino(_: _12.SetGatewayResponseAmino): _12.SetGatewayResponse;
                toAmino(_: _12.SetGatewayResponse): _12.SetGatewayResponseAmino;
                fromAminoMsg(object: _12.SetGatewayResponseAminoMsg): _12.SetGatewayResponse;
                fromProtoMsg(message: _12.SetGatewayResponseProtoMsg): _12.SetGatewayResponse;
                toProto(message: _12.SetGatewayResponse): Uint8Array;
                toProtoMsg(message: _12.SetGatewayResponse): _12.SetGatewayResponseProtoMsg;
            };
            ConfirmGatewayTxRequest: {
                typeUrl: string;
                encode(message: _12.ConfirmGatewayTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ConfirmGatewayTxRequest;
                fromPartial(object: Partial<_12.ConfirmGatewayTxRequest>): _12.ConfirmGatewayTxRequest;
                fromAmino(object: _12.ConfirmGatewayTxRequestAmino): _12.ConfirmGatewayTxRequest;
                toAmino(message: _12.ConfirmGatewayTxRequest): _12.ConfirmGatewayTxRequestAmino;
                fromAminoMsg(object: _12.ConfirmGatewayTxRequestAminoMsg): _12.ConfirmGatewayTxRequest;
                fromProtoMsg(message: _12.ConfirmGatewayTxRequestProtoMsg): _12.ConfirmGatewayTxRequest;
                toProto(message: _12.ConfirmGatewayTxRequest): Uint8Array;
                toProtoMsg(message: _12.ConfirmGatewayTxRequest): _12.ConfirmGatewayTxRequestProtoMsg;
            };
            ConfirmGatewayTxResponse: {
                typeUrl: string;
                encode(_: _12.ConfirmGatewayTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.ConfirmGatewayTxResponse;
                fromPartial(_: Partial<_12.ConfirmGatewayTxResponse>): _12.ConfirmGatewayTxResponse;
                fromAmino(_: _12.ConfirmGatewayTxResponseAmino): _12.ConfirmGatewayTxResponse;
                toAmino(_: _12.ConfirmGatewayTxResponse): _12.ConfirmGatewayTxResponseAmino;
                fromAminoMsg(object: _12.ConfirmGatewayTxResponseAminoMsg): _12.ConfirmGatewayTxResponse;
                fromProtoMsg(message: _12.ConfirmGatewayTxResponseProtoMsg): _12.ConfirmGatewayTxResponse;
                toProto(message: _12.ConfirmGatewayTxResponse): Uint8Array;
                toProtoMsg(message: _12.ConfirmGatewayTxResponse): _12.ConfirmGatewayTxResponseProtoMsg;
            };
            ConfirmDepositRequest: {
                typeUrl: string;
                encode(message: _12.ConfirmDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ConfirmDepositRequest;
                fromPartial(object: Partial<_12.ConfirmDepositRequest>): _12.ConfirmDepositRequest;
                fromAmino(object: _12.ConfirmDepositRequestAmino): _12.ConfirmDepositRequest;
                toAmino(message: _12.ConfirmDepositRequest): _12.ConfirmDepositRequestAmino;
                fromAminoMsg(object: _12.ConfirmDepositRequestAminoMsg): _12.ConfirmDepositRequest;
                fromProtoMsg(message: _12.ConfirmDepositRequestProtoMsg): _12.ConfirmDepositRequest;
                toProto(message: _12.ConfirmDepositRequest): Uint8Array;
                toProtoMsg(message: _12.ConfirmDepositRequest): _12.ConfirmDepositRequestProtoMsg;
            };
            ConfirmDepositResponse: {
                typeUrl: string;
                encode(_: _12.ConfirmDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.ConfirmDepositResponse;
                fromPartial(_: Partial<_12.ConfirmDepositResponse>): _12.ConfirmDepositResponse;
                fromAmino(_: _12.ConfirmDepositResponseAmino): _12.ConfirmDepositResponse;
                toAmino(_: _12.ConfirmDepositResponse): _12.ConfirmDepositResponseAmino;
                fromAminoMsg(object: _12.ConfirmDepositResponseAminoMsg): _12.ConfirmDepositResponse;
                fromProtoMsg(message: _12.ConfirmDepositResponseProtoMsg): _12.ConfirmDepositResponse;
                toProto(message: _12.ConfirmDepositResponse): Uint8Array;
                toProtoMsg(message: _12.ConfirmDepositResponse): _12.ConfirmDepositResponseProtoMsg;
            };
            ConfirmTokenRequest: {
                typeUrl: string;
                encode(message: _12.ConfirmTokenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ConfirmTokenRequest;
                fromPartial(object: Partial<_12.ConfirmTokenRequest>): _12.ConfirmTokenRequest;
                fromAmino(object: _12.ConfirmTokenRequestAmino): _12.ConfirmTokenRequest;
                toAmino(message: _12.ConfirmTokenRequest): _12.ConfirmTokenRequestAmino;
                fromAminoMsg(object: _12.ConfirmTokenRequestAminoMsg): _12.ConfirmTokenRequest;
                fromProtoMsg(message: _12.ConfirmTokenRequestProtoMsg): _12.ConfirmTokenRequest;
                toProto(message: _12.ConfirmTokenRequest): Uint8Array;
                toProtoMsg(message: _12.ConfirmTokenRequest): _12.ConfirmTokenRequestProtoMsg;
            };
            ConfirmTokenResponse: {
                typeUrl: string;
                encode(_: _12.ConfirmTokenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.ConfirmTokenResponse;
                fromPartial(_: Partial<_12.ConfirmTokenResponse>): _12.ConfirmTokenResponse;
                fromAmino(_: _12.ConfirmTokenResponseAmino): _12.ConfirmTokenResponse;
                toAmino(_: _12.ConfirmTokenResponse): _12.ConfirmTokenResponseAmino;
                fromAminoMsg(object: _12.ConfirmTokenResponseAminoMsg): _12.ConfirmTokenResponse;
                fromProtoMsg(message: _12.ConfirmTokenResponseProtoMsg): _12.ConfirmTokenResponse;
                toProto(message: _12.ConfirmTokenResponse): Uint8Array;
                toProtoMsg(message: _12.ConfirmTokenResponse): _12.ConfirmTokenResponseProtoMsg;
            };
            ConfirmTransferKeyRequest: {
                typeUrl: string;
                encode(message: _12.ConfirmTransferKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ConfirmTransferKeyRequest;
                fromPartial(object: Partial<_12.ConfirmTransferKeyRequest>): _12.ConfirmTransferKeyRequest;
                fromAmino(object: _12.ConfirmTransferKeyRequestAmino): _12.ConfirmTransferKeyRequest;
                toAmino(message: _12.ConfirmTransferKeyRequest): _12.ConfirmTransferKeyRequestAmino;
                fromAminoMsg(object: _12.ConfirmTransferKeyRequestAminoMsg): _12.ConfirmTransferKeyRequest;
                fromProtoMsg(message: _12.ConfirmTransferKeyRequestProtoMsg): _12.ConfirmTransferKeyRequest;
                toProto(message: _12.ConfirmTransferKeyRequest): Uint8Array;
                toProtoMsg(message: _12.ConfirmTransferKeyRequest): _12.ConfirmTransferKeyRequestProtoMsg;
            };
            ConfirmTransferKeyResponse: {
                typeUrl: string;
                encode(_: _12.ConfirmTransferKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.ConfirmTransferKeyResponse;
                fromPartial(_: Partial<_12.ConfirmTransferKeyResponse>): _12.ConfirmTransferKeyResponse;
                fromAmino(_: _12.ConfirmTransferKeyResponseAmino): _12.ConfirmTransferKeyResponse;
                toAmino(_: _12.ConfirmTransferKeyResponse): _12.ConfirmTransferKeyResponseAmino;
                fromAminoMsg(object: _12.ConfirmTransferKeyResponseAminoMsg): _12.ConfirmTransferKeyResponse;
                fromProtoMsg(message: _12.ConfirmTransferKeyResponseProtoMsg): _12.ConfirmTransferKeyResponse;
                toProto(message: _12.ConfirmTransferKeyResponse): Uint8Array;
                toProtoMsg(message: _12.ConfirmTransferKeyResponse): _12.ConfirmTransferKeyResponseProtoMsg;
            };
            LinkRequest: {
                typeUrl: string;
                encode(message: _12.LinkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.LinkRequest;
                fromPartial(object: Partial<_12.LinkRequest>): _12.LinkRequest;
                fromAmino(object: _12.LinkRequestAmino): _12.LinkRequest;
                toAmino(message: _12.LinkRequest): _12.LinkRequestAmino;
                fromAminoMsg(object: _12.LinkRequestAminoMsg): _12.LinkRequest;
                fromProtoMsg(message: _12.LinkRequestProtoMsg): _12.LinkRequest;
                toProto(message: _12.LinkRequest): Uint8Array;
                toProtoMsg(message: _12.LinkRequest): _12.LinkRequestProtoMsg;
            };
            LinkResponse: {
                typeUrl: string;
                encode(message: _12.LinkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.LinkResponse;
                fromPartial(object: Partial<_12.LinkResponse>): _12.LinkResponse;
                fromAmino(object: _12.LinkResponseAmino): _12.LinkResponse;
                toAmino(message: _12.LinkResponse): _12.LinkResponseAmino;
                fromAminoMsg(object: _12.LinkResponseAminoMsg): _12.LinkResponse;
                fromProtoMsg(message: _12.LinkResponseProtoMsg): _12.LinkResponse;
                toProto(message: _12.LinkResponse): Uint8Array;
                toProtoMsg(message: _12.LinkResponse): _12.LinkResponseProtoMsg;
            };
            CreateBurnTokensRequest: {
                typeUrl: string;
                encode(message: _12.CreateBurnTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.CreateBurnTokensRequest;
                fromPartial(object: Partial<_12.CreateBurnTokensRequest>): _12.CreateBurnTokensRequest;
                fromAmino(object: _12.CreateBurnTokensRequestAmino): _12.CreateBurnTokensRequest;
                toAmino(message: _12.CreateBurnTokensRequest): _12.CreateBurnTokensRequestAmino;
                fromAminoMsg(object: _12.CreateBurnTokensRequestAminoMsg): _12.CreateBurnTokensRequest;
                fromProtoMsg(message: _12.CreateBurnTokensRequestProtoMsg): _12.CreateBurnTokensRequest;
                toProto(message: _12.CreateBurnTokensRequest): Uint8Array;
                toProtoMsg(message: _12.CreateBurnTokensRequest): _12.CreateBurnTokensRequestProtoMsg;
            };
            CreateBurnTokensResponse: {
                typeUrl: string;
                encode(_: _12.CreateBurnTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.CreateBurnTokensResponse;
                fromPartial(_: Partial<_12.CreateBurnTokensResponse>): _12.CreateBurnTokensResponse;
                fromAmino(_: _12.CreateBurnTokensResponseAmino): _12.CreateBurnTokensResponse;
                toAmino(_: _12.CreateBurnTokensResponse): _12.CreateBurnTokensResponseAmino;
                fromAminoMsg(object: _12.CreateBurnTokensResponseAminoMsg): _12.CreateBurnTokensResponse;
                fromProtoMsg(message: _12.CreateBurnTokensResponseProtoMsg): _12.CreateBurnTokensResponse;
                toProto(message: _12.CreateBurnTokensResponse): Uint8Array;
                toProtoMsg(message: _12.CreateBurnTokensResponse): _12.CreateBurnTokensResponseProtoMsg;
            };
            CreateDeployTokenRequest: {
                typeUrl: string;
                encode(message: _12.CreateDeployTokenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.CreateDeployTokenRequest;
                fromPartial(object: Partial<_12.CreateDeployTokenRequest>): _12.CreateDeployTokenRequest;
                fromAmino(object: _12.CreateDeployTokenRequestAmino): _12.CreateDeployTokenRequest;
                toAmino(message: _12.CreateDeployTokenRequest): _12.CreateDeployTokenRequestAmino;
                fromAminoMsg(object: _12.CreateDeployTokenRequestAminoMsg): _12.CreateDeployTokenRequest;
                fromProtoMsg(message: _12.CreateDeployTokenRequestProtoMsg): _12.CreateDeployTokenRequest;
                toProto(message: _12.CreateDeployTokenRequest): Uint8Array;
                toProtoMsg(message: _12.CreateDeployTokenRequest): _12.CreateDeployTokenRequestProtoMsg;
            };
            CreateDeployTokenResponse: {
                typeUrl: string;
                encode(_: _12.CreateDeployTokenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.CreateDeployTokenResponse;
                fromPartial(_: Partial<_12.CreateDeployTokenResponse>): _12.CreateDeployTokenResponse;
                fromAmino(_: _12.CreateDeployTokenResponseAmino): _12.CreateDeployTokenResponse;
                toAmino(_: _12.CreateDeployTokenResponse): _12.CreateDeployTokenResponseAmino;
                fromAminoMsg(object: _12.CreateDeployTokenResponseAminoMsg): _12.CreateDeployTokenResponse;
                fromProtoMsg(message: _12.CreateDeployTokenResponseProtoMsg): _12.CreateDeployTokenResponse;
                toProto(message: _12.CreateDeployTokenResponse): Uint8Array;
                toProtoMsg(message: _12.CreateDeployTokenResponse): _12.CreateDeployTokenResponseProtoMsg;
            };
            CreatePendingTransfersRequest: {
                typeUrl: string;
                encode(message: _12.CreatePendingTransfersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.CreatePendingTransfersRequest;
                fromPartial(object: Partial<_12.CreatePendingTransfersRequest>): _12.CreatePendingTransfersRequest;
                fromAmino(object: _12.CreatePendingTransfersRequestAmino): _12.CreatePendingTransfersRequest;
                toAmino(message: _12.CreatePendingTransfersRequest): _12.CreatePendingTransfersRequestAmino;
                fromAminoMsg(object: _12.CreatePendingTransfersRequestAminoMsg): _12.CreatePendingTransfersRequest;
                fromProtoMsg(message: _12.CreatePendingTransfersRequestProtoMsg): _12.CreatePendingTransfersRequest;
                toProto(message: _12.CreatePendingTransfersRequest): Uint8Array;
                toProtoMsg(message: _12.CreatePendingTransfersRequest): _12.CreatePendingTransfersRequestProtoMsg;
            };
            CreatePendingTransfersResponse: {
                typeUrl: string;
                encode(_: _12.CreatePendingTransfersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.CreatePendingTransfersResponse;
                fromPartial(_: Partial<_12.CreatePendingTransfersResponse>): _12.CreatePendingTransfersResponse;
                fromAmino(_: _12.CreatePendingTransfersResponseAmino): _12.CreatePendingTransfersResponse;
                toAmino(_: _12.CreatePendingTransfersResponse): _12.CreatePendingTransfersResponseAmino;
                fromAminoMsg(object: _12.CreatePendingTransfersResponseAminoMsg): _12.CreatePendingTransfersResponse;
                fromProtoMsg(message: _12.CreatePendingTransfersResponseProtoMsg): _12.CreatePendingTransfersResponse;
                toProto(message: _12.CreatePendingTransfersResponse): Uint8Array;
                toProtoMsg(message: _12.CreatePendingTransfersResponse): _12.CreatePendingTransfersResponseProtoMsg;
            };
            CreateTransferOwnershipRequest: {
                typeUrl: string;
                encode(message: _12.CreateTransferOwnershipRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.CreateTransferOwnershipRequest;
                fromPartial(object: Partial<_12.CreateTransferOwnershipRequest>): _12.CreateTransferOwnershipRequest;
                fromAmino(object: _12.CreateTransferOwnershipRequestAmino): _12.CreateTransferOwnershipRequest;
                toAmino(message: _12.CreateTransferOwnershipRequest): _12.CreateTransferOwnershipRequestAmino;
                fromAminoMsg(object: _12.CreateTransferOwnershipRequestAminoMsg): _12.CreateTransferOwnershipRequest;
                fromProtoMsg(message: _12.CreateTransferOwnershipRequestProtoMsg): _12.CreateTransferOwnershipRequest;
                toProto(message: _12.CreateTransferOwnershipRequest): Uint8Array;
                toProtoMsg(message: _12.CreateTransferOwnershipRequest): _12.CreateTransferOwnershipRequestProtoMsg;
            };
            CreateTransferOwnershipResponse: {
                typeUrl: string;
                encode(_: _12.CreateTransferOwnershipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.CreateTransferOwnershipResponse;
                fromPartial(_: Partial<_12.CreateTransferOwnershipResponse>): _12.CreateTransferOwnershipResponse;
                fromAmino(_: _12.CreateTransferOwnershipResponseAmino): _12.CreateTransferOwnershipResponse;
                toAmino(_: _12.CreateTransferOwnershipResponse): _12.CreateTransferOwnershipResponseAmino;
                fromAminoMsg(object: _12.CreateTransferOwnershipResponseAminoMsg): _12.CreateTransferOwnershipResponse;
                fromProtoMsg(message: _12.CreateTransferOwnershipResponseProtoMsg): _12.CreateTransferOwnershipResponse;
                toProto(message: _12.CreateTransferOwnershipResponse): Uint8Array;
                toProtoMsg(message: _12.CreateTransferOwnershipResponse): _12.CreateTransferOwnershipResponseProtoMsg;
            };
            CreateTransferOperatorshipRequest: {
                typeUrl: string;
                encode(message: _12.CreateTransferOperatorshipRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.CreateTransferOperatorshipRequest;
                fromPartial(object: Partial<_12.CreateTransferOperatorshipRequest>): _12.CreateTransferOperatorshipRequest;
                fromAmino(object: _12.CreateTransferOperatorshipRequestAmino): _12.CreateTransferOperatorshipRequest;
                toAmino(message: _12.CreateTransferOperatorshipRequest): _12.CreateTransferOperatorshipRequestAmino;
                fromAminoMsg(object: _12.CreateTransferOperatorshipRequestAminoMsg): _12.CreateTransferOperatorshipRequest;
                fromProtoMsg(message: _12.CreateTransferOperatorshipRequestProtoMsg): _12.CreateTransferOperatorshipRequest;
                toProto(message: _12.CreateTransferOperatorshipRequest): Uint8Array;
                toProtoMsg(message: _12.CreateTransferOperatorshipRequest): _12.CreateTransferOperatorshipRequestProtoMsg;
            };
            CreateTransferOperatorshipResponse: {
                typeUrl: string;
                encode(_: _12.CreateTransferOperatorshipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.CreateTransferOperatorshipResponse;
                fromPartial(_: Partial<_12.CreateTransferOperatorshipResponse>): _12.CreateTransferOperatorshipResponse;
                fromAmino(_: _12.CreateTransferOperatorshipResponseAmino): _12.CreateTransferOperatorshipResponse;
                toAmino(_: _12.CreateTransferOperatorshipResponse): _12.CreateTransferOperatorshipResponseAmino;
                fromAminoMsg(object: _12.CreateTransferOperatorshipResponseAminoMsg): _12.CreateTransferOperatorshipResponse;
                fromProtoMsg(message: _12.CreateTransferOperatorshipResponseProtoMsg): _12.CreateTransferOperatorshipResponse;
                toProto(message: _12.CreateTransferOperatorshipResponse): Uint8Array;
                toProtoMsg(message: _12.CreateTransferOperatorshipResponse): _12.CreateTransferOperatorshipResponseProtoMsg;
            };
            SignCommandsRequest: {
                typeUrl: string;
                encode(message: _12.SignCommandsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.SignCommandsRequest;
                fromPartial(object: Partial<_12.SignCommandsRequest>): _12.SignCommandsRequest;
                fromAmino(object: _12.SignCommandsRequestAmino): _12.SignCommandsRequest;
                toAmino(message: _12.SignCommandsRequest): _12.SignCommandsRequestAmino;
                fromAminoMsg(object: _12.SignCommandsRequestAminoMsg): _12.SignCommandsRequest;
                fromProtoMsg(message: _12.SignCommandsRequestProtoMsg): _12.SignCommandsRequest;
                toProto(message: _12.SignCommandsRequest): Uint8Array;
                toProtoMsg(message: _12.SignCommandsRequest): _12.SignCommandsRequestProtoMsg;
            };
            SignCommandsResponse: {
                typeUrl: string;
                encode(message: _12.SignCommandsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.SignCommandsResponse;
                fromPartial(object: Partial<_12.SignCommandsResponse>): _12.SignCommandsResponse;
                fromAmino(object: _12.SignCommandsResponseAmino): _12.SignCommandsResponse;
                toAmino(message: _12.SignCommandsResponse): _12.SignCommandsResponseAmino;
                fromAminoMsg(object: _12.SignCommandsResponseAminoMsg): _12.SignCommandsResponse;
                fromProtoMsg(message: _12.SignCommandsResponseProtoMsg): _12.SignCommandsResponse;
                toProto(message: _12.SignCommandsResponse): Uint8Array;
                toProtoMsg(message: _12.SignCommandsResponse): _12.SignCommandsResponseProtoMsg;
            };
            AddChainRequest: {
                typeUrl: string;
                encode(message: _12.AddChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.AddChainRequest;
                fromPartial(object: Partial<_12.AddChainRequest>): _12.AddChainRequest;
                fromAmino(object: _12.AddChainRequestAmino): _12.AddChainRequest;
                toAmino(message: _12.AddChainRequest): _12.AddChainRequestAmino;
                fromAminoMsg(object: _12.AddChainRequestAminoMsg): _12.AddChainRequest;
                fromProtoMsg(message: _12.AddChainRequestProtoMsg): _12.AddChainRequest;
                toProto(message: _12.AddChainRequest): Uint8Array;
                toProtoMsg(message: _12.AddChainRequest): _12.AddChainRequestProtoMsg;
            };
            AddChainResponse: {
                typeUrl: string;
                encode(_: _12.AddChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.AddChainResponse;
                fromPartial(_: Partial<_12.AddChainResponse>): _12.AddChainResponse;
                fromAmino(_: _12.AddChainResponseAmino): _12.AddChainResponse;
                toAmino(_: _12.AddChainResponse): _12.AddChainResponseAmino;
                fromAminoMsg(object: _12.AddChainResponseAminoMsg): _12.AddChainResponse;
                fromProtoMsg(message: _12.AddChainResponseProtoMsg): _12.AddChainResponse;
                toProto(message: _12.AddChainResponse): Uint8Array;
                toProtoMsg(message: _12.AddChainResponse): _12.AddChainResponseProtoMsg;
            };
            RetryFailedEventRequest: {
                typeUrl: string;
                encode(message: _12.RetryFailedEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.RetryFailedEventRequest;
                fromPartial(object: Partial<_12.RetryFailedEventRequest>): _12.RetryFailedEventRequest;
                fromAmino(object: _12.RetryFailedEventRequestAmino): _12.RetryFailedEventRequest;
                toAmino(message: _12.RetryFailedEventRequest): _12.RetryFailedEventRequestAmino;
                fromAminoMsg(object: _12.RetryFailedEventRequestAminoMsg): _12.RetryFailedEventRequest;
                fromProtoMsg(message: _12.RetryFailedEventRequestProtoMsg): _12.RetryFailedEventRequest;
                toProto(message: _12.RetryFailedEventRequest): Uint8Array;
                toProtoMsg(message: _12.RetryFailedEventRequest): _12.RetryFailedEventRequestProtoMsg;
            };
            RetryFailedEventResponse: {
                typeUrl: string;
                encode(_: _12.RetryFailedEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.RetryFailedEventResponse;
                fromPartial(_: Partial<_12.RetryFailedEventResponse>): _12.RetryFailedEventResponse;
                fromAmino(_: _12.RetryFailedEventResponseAmino): _12.RetryFailedEventResponse;
                toAmino(_: _12.RetryFailedEventResponse): _12.RetryFailedEventResponseAmino;
                fromAminoMsg(object: _12.RetryFailedEventResponseAminoMsg): _12.RetryFailedEventResponse;
                fromProtoMsg(message: _12.RetryFailedEventResponseProtoMsg): _12.RetryFailedEventResponse;
                toProto(message: _12.RetryFailedEventResponse): Uint8Array;
                toProtoMsg(message: _12.RetryFailedEventResponse): _12.RetryFailedEventResponseProtoMsg;
            };
            chainStatusFromJSON(object: any): _10.ChainStatus;
            chainStatusToJSON(object: _10.ChainStatus): string;
            tokenTypeFromJSON(object: any): _10.TokenType;
            tokenTypeToJSON(object: _10.TokenType): string;
            ChainStatus: typeof _10.ChainStatus;
            ChainStatusSDKType: typeof _10.ChainStatus;
            ChainStatusAmino: typeof _10.ChainStatus;
            TokenType: typeof _10.TokenType;
            TokenTypeSDKType: typeof _10.TokenType;
            TokenTypeAmino: typeof _10.TokenType;
            DepositQueryParams: {
                typeUrl: string;
                encode(message: _10.DepositQueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.DepositQueryParams;
                fromPartial(object: Partial<_10.DepositQueryParams>): _10.DepositQueryParams;
                fromAmino(object: _10.DepositQueryParamsAmino): _10.DepositQueryParams;
                toAmino(message: _10.DepositQueryParams): _10.DepositQueryParamsAmino;
                fromAminoMsg(object: _10.DepositQueryParamsAminoMsg): _10.DepositQueryParams;
                fromProtoMsg(message: _10.DepositQueryParamsProtoMsg): _10.DepositQueryParams;
                toProto(message: _10.DepositQueryParams): Uint8Array;
                toProtoMsg(message: _10.DepositQueryParams): _10.DepositQueryParamsProtoMsg;
            };
            BatchedCommandsRequest: {
                typeUrl: string;
                encode(message: _10.BatchedCommandsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BatchedCommandsRequest;
                fromPartial(object: Partial<_10.BatchedCommandsRequest>): _10.BatchedCommandsRequest;
                fromAmino(object: _10.BatchedCommandsRequestAmino): _10.BatchedCommandsRequest;
                toAmino(message: _10.BatchedCommandsRequest): _10.BatchedCommandsRequestAmino;
                fromAminoMsg(object: _10.BatchedCommandsRequestAminoMsg): _10.BatchedCommandsRequest;
                fromProtoMsg(message: _10.BatchedCommandsRequestProtoMsg): _10.BatchedCommandsRequest;
                toProto(message: _10.BatchedCommandsRequest): Uint8Array;
                toProtoMsg(message: _10.BatchedCommandsRequest): _10.BatchedCommandsRequestProtoMsg;
            };
            BatchedCommandsResponse: {
                typeUrl: string;
                encode(message: _10.BatchedCommandsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BatchedCommandsResponse;
                fromPartial(object: Partial<_10.BatchedCommandsResponse>): _10.BatchedCommandsResponse;
                fromAmino(object: _10.BatchedCommandsResponseAmino): _10.BatchedCommandsResponse;
                toAmino(message: _10.BatchedCommandsResponse): _10.BatchedCommandsResponseAmino;
                fromAminoMsg(object: _10.BatchedCommandsResponseAminoMsg): _10.BatchedCommandsResponse;
                fromProtoMsg(message: _10.BatchedCommandsResponseProtoMsg): _10.BatchedCommandsResponse;
                toProto(message: _10.BatchedCommandsResponse): Uint8Array;
                toProtoMsg(message: _10.BatchedCommandsResponse): _10.BatchedCommandsResponseProtoMsg;
            };
            KeyAddressRequest: {
                typeUrl: string;
                encode(message: _10.KeyAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.KeyAddressRequest;
                fromPartial(object: Partial<_10.KeyAddressRequest>): _10.KeyAddressRequest;
                fromAmino(object: _10.KeyAddressRequestAmino): _10.KeyAddressRequest;
                toAmino(message: _10.KeyAddressRequest): _10.KeyAddressRequestAmino;
                fromAminoMsg(object: _10.KeyAddressRequestAminoMsg): _10.KeyAddressRequest;
                fromProtoMsg(message: _10.KeyAddressRequestProtoMsg): _10.KeyAddressRequest;
                toProto(message: _10.KeyAddressRequest): Uint8Array;
                toProtoMsg(message: _10.KeyAddressRequest): _10.KeyAddressRequestProtoMsg;
            };
            KeyAddressResponse: {
                typeUrl: string;
                encode(message: _10.KeyAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.KeyAddressResponse;
                fromPartial(object: Partial<_10.KeyAddressResponse>): _10.KeyAddressResponse;
                fromAmino(object: _10.KeyAddressResponseAmino): _10.KeyAddressResponse;
                toAmino(message: _10.KeyAddressResponse): _10.KeyAddressResponseAmino;
                fromAminoMsg(object: _10.KeyAddressResponseAminoMsg): _10.KeyAddressResponse;
                fromProtoMsg(message: _10.KeyAddressResponseProtoMsg): _10.KeyAddressResponse;
                toProto(message: _10.KeyAddressResponse): Uint8Array;
                toProtoMsg(message: _10.KeyAddressResponse): _10.KeyAddressResponseProtoMsg;
            };
            KeyAddressResponse_WeightedAddress: {
                typeUrl: string;
                encode(message: _10.KeyAddressResponse_WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.KeyAddressResponse_WeightedAddress;
                fromPartial(object: Partial<_10.KeyAddressResponse_WeightedAddress>): _10.KeyAddressResponse_WeightedAddress;
                fromAmino(object: _10.KeyAddressResponse_WeightedAddressAmino): _10.KeyAddressResponse_WeightedAddress;
                toAmino(message: _10.KeyAddressResponse_WeightedAddress): _10.KeyAddressResponse_WeightedAddressAmino;
                fromAminoMsg(object: _10.KeyAddressResponse_WeightedAddressAminoMsg): _10.KeyAddressResponse_WeightedAddress;
                fromProtoMsg(message: _10.KeyAddressResponse_WeightedAddressProtoMsg): _10.KeyAddressResponse_WeightedAddress;
                toProto(message: _10.KeyAddressResponse_WeightedAddress): Uint8Array;
                toProtoMsg(message: _10.KeyAddressResponse_WeightedAddress): _10.KeyAddressResponse_WeightedAddressProtoMsg;
            };
            QueryTokenAddressResponse: {
                typeUrl: string;
                encode(message: _10.QueryTokenAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryTokenAddressResponse;
                fromPartial(object: Partial<_10.QueryTokenAddressResponse>): _10.QueryTokenAddressResponse;
                fromAmino(object: _10.QueryTokenAddressResponseAmino): _10.QueryTokenAddressResponse;
                toAmino(message: _10.QueryTokenAddressResponse): _10.QueryTokenAddressResponseAmino;
                fromAminoMsg(object: _10.QueryTokenAddressResponseAminoMsg): _10.QueryTokenAddressResponse;
                fromProtoMsg(message: _10.QueryTokenAddressResponseProtoMsg): _10.QueryTokenAddressResponse;
                toProto(message: _10.QueryTokenAddressResponse): Uint8Array;
                toProtoMsg(message: _10.QueryTokenAddressResponse): _10.QueryTokenAddressResponseProtoMsg;
            };
            QueryDepositStateParams: {
                typeUrl: string;
                encode(message: _10.QueryDepositStateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryDepositStateParams;
                fromPartial(object: Partial<_10.QueryDepositStateParams>): _10.QueryDepositStateParams;
                fromAmino(object: _10.QueryDepositStateParamsAmino): _10.QueryDepositStateParams;
                toAmino(message: _10.QueryDepositStateParams): _10.QueryDepositStateParamsAmino;
                fromAminoMsg(object: _10.QueryDepositStateParamsAminoMsg): _10.QueryDepositStateParams;
                fromProtoMsg(message: _10.QueryDepositStateParamsProtoMsg): _10.QueryDepositStateParams;
                toProto(message: _10.QueryDepositStateParams): Uint8Array;
                toProtoMsg(message: _10.QueryDepositStateParams): _10.QueryDepositStateParamsProtoMsg;
            };
            DepositStateRequest: {
                typeUrl: string;
                encode(message: _10.DepositStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.DepositStateRequest;
                fromPartial(object: Partial<_10.DepositStateRequest>): _10.DepositStateRequest;
                fromAmino(object: _10.DepositStateRequestAmino): _10.DepositStateRequest;
                toAmino(message: _10.DepositStateRequest): _10.DepositStateRequestAmino;
                fromAminoMsg(object: _10.DepositStateRequestAminoMsg): _10.DepositStateRequest;
                fromProtoMsg(message: _10.DepositStateRequestProtoMsg): _10.DepositStateRequest;
                toProto(message: _10.DepositStateRequest): Uint8Array;
                toProtoMsg(message: _10.DepositStateRequest): _10.DepositStateRequestProtoMsg;
            };
            DepositStateResponse: {
                typeUrl: string;
                encode(message: _10.DepositStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.DepositStateResponse;
                fromPartial(object: Partial<_10.DepositStateResponse>): _10.DepositStateResponse;
                fromAmino(object: _10.DepositStateResponseAmino): _10.DepositStateResponse;
                toAmino(message: _10.DepositStateResponse): _10.DepositStateResponseAmino;
                fromAminoMsg(object: _10.DepositStateResponseAminoMsg): _10.DepositStateResponse;
                fromProtoMsg(message: _10.DepositStateResponseProtoMsg): _10.DepositStateResponse;
                toProto(message: _10.DepositStateResponse): Uint8Array;
                toProtoMsg(message: _10.DepositStateResponse): _10.DepositStateResponseProtoMsg;
            };
            EventRequest: {
                typeUrl: string;
                encode(message: _10.EventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EventRequest;
                fromPartial(object: Partial<_10.EventRequest>): _10.EventRequest;
                fromAmino(object: _10.EventRequestAmino): _10.EventRequest;
                toAmino(message: _10.EventRequest): _10.EventRequestAmino;
                fromAminoMsg(object: _10.EventRequestAminoMsg): _10.EventRequest;
                fromProtoMsg(message: _10.EventRequestProtoMsg): _10.EventRequest;
                toProto(message: _10.EventRequest): Uint8Array;
                toProtoMsg(message: _10.EventRequest): _10.EventRequestProtoMsg;
            };
            EventResponse: {
                typeUrl: string;
                encode(message: _10.EventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.EventResponse;
                fromPartial(object: Partial<_10.EventResponse>): _10.EventResponse;
                fromAmino(object: _10.EventResponseAmino): _10.EventResponse;
                toAmino(message: _10.EventResponse): _10.EventResponseAmino;
                fromAminoMsg(object: _10.EventResponseAminoMsg): _10.EventResponse;
                fromProtoMsg(message: _10.EventResponseProtoMsg): _10.EventResponse;
                toProto(message: _10.EventResponse): Uint8Array;
                toProtoMsg(message: _10.EventResponse): _10.EventResponseProtoMsg;
            };
            QueryBurnerAddressResponse: {
                typeUrl: string;
                encode(message: _10.QueryBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryBurnerAddressResponse;
                fromPartial(object: Partial<_10.QueryBurnerAddressResponse>): _10.QueryBurnerAddressResponse;
                fromAmino(object: _10.QueryBurnerAddressResponseAmino): _10.QueryBurnerAddressResponse;
                toAmino(message: _10.QueryBurnerAddressResponse): _10.QueryBurnerAddressResponseAmino;
                fromAminoMsg(object: _10.QueryBurnerAddressResponseAminoMsg): _10.QueryBurnerAddressResponse;
                fromProtoMsg(message: _10.QueryBurnerAddressResponseProtoMsg): _10.QueryBurnerAddressResponse;
                toProto(message: _10.QueryBurnerAddressResponse): Uint8Array;
                toProtoMsg(message: _10.QueryBurnerAddressResponse): _10.QueryBurnerAddressResponseProtoMsg;
            };
            ChainsRequest: {
                typeUrl: string;
                encode(message: _10.ChainsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ChainsRequest;
                fromPartial(object: Partial<_10.ChainsRequest>): _10.ChainsRequest;
                fromAmino(object: _10.ChainsRequestAmino): _10.ChainsRequest;
                toAmino(message: _10.ChainsRequest): _10.ChainsRequestAmino;
                fromAminoMsg(object: _10.ChainsRequestAminoMsg): _10.ChainsRequest;
                fromProtoMsg(message: _10.ChainsRequestProtoMsg): _10.ChainsRequest;
                toProto(message: _10.ChainsRequest): Uint8Array;
                toProtoMsg(message: _10.ChainsRequest): _10.ChainsRequestProtoMsg;
            };
            ChainsResponse: {
                typeUrl: string;
                encode(message: _10.ChainsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ChainsResponse;
                fromPartial(object: Partial<_10.ChainsResponse>): _10.ChainsResponse;
                fromAmino(object: _10.ChainsResponseAmino): _10.ChainsResponse;
                toAmino(message: _10.ChainsResponse): _10.ChainsResponseAmino;
                fromAminoMsg(object: _10.ChainsResponseAminoMsg): _10.ChainsResponse;
                fromProtoMsg(message: _10.ChainsResponseProtoMsg): _10.ChainsResponse;
                toProto(message: _10.ChainsResponse): Uint8Array;
                toProtoMsg(message: _10.ChainsResponse): _10.ChainsResponseProtoMsg;
            };
            CommandRequest: {
                typeUrl: string;
                encode(message: _10.CommandRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.CommandRequest;
                fromPartial(object: Partial<_10.CommandRequest>): _10.CommandRequest;
                fromAmino(object: _10.CommandRequestAmino): _10.CommandRequest;
                toAmino(message: _10.CommandRequest): _10.CommandRequestAmino;
                fromAminoMsg(object: _10.CommandRequestAminoMsg): _10.CommandRequest;
                fromProtoMsg(message: _10.CommandRequestProtoMsg): _10.CommandRequest;
                toProto(message: _10.CommandRequest): Uint8Array;
                toProtoMsg(message: _10.CommandRequest): _10.CommandRequestProtoMsg;
            };
            CommandResponse_ParamsEntry: {
                encode(message: _10.CommandResponse_ParamsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.CommandResponse_ParamsEntry;
                fromPartial(object: Partial<_10.CommandResponse_ParamsEntry>): _10.CommandResponse_ParamsEntry;
                fromAmino(object: _10.CommandResponse_ParamsEntryAmino): _10.CommandResponse_ParamsEntry;
                toAmino(message: _10.CommandResponse_ParamsEntry): _10.CommandResponse_ParamsEntryAmino;
                fromAminoMsg(object: _10.CommandResponse_ParamsEntryAminoMsg): _10.CommandResponse_ParamsEntry;
                fromProtoMsg(message: _10.CommandResponse_ParamsEntryProtoMsg): _10.CommandResponse_ParamsEntry;
                toProto(message: _10.CommandResponse_ParamsEntry): Uint8Array;
            };
            CommandResponse: {
                typeUrl: string;
                encode(message: _10.CommandResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.CommandResponse;
                fromPartial(object: Partial<_10.CommandResponse>): _10.CommandResponse;
                fromAmino(object: _10.CommandResponseAmino): _10.CommandResponse;
                toAmino(message: _10.CommandResponse): _10.CommandResponseAmino;
                fromAminoMsg(object: _10.CommandResponseAminoMsg): _10.CommandResponse;
                fromProtoMsg(message: _10.CommandResponseProtoMsg): _10.CommandResponse;
                toProto(message: _10.CommandResponse): Uint8Array;
                toProtoMsg(message: _10.CommandResponse): _10.CommandResponseProtoMsg;
            };
            PendingCommandsRequest: {
                typeUrl: string;
                encode(message: _10.PendingCommandsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.PendingCommandsRequest;
                fromPartial(object: Partial<_10.PendingCommandsRequest>): _10.PendingCommandsRequest;
                fromAmino(object: _10.PendingCommandsRequestAmino): _10.PendingCommandsRequest;
                toAmino(message: _10.PendingCommandsRequest): _10.PendingCommandsRequestAmino;
                fromAminoMsg(object: _10.PendingCommandsRequestAminoMsg): _10.PendingCommandsRequest;
                fromProtoMsg(message: _10.PendingCommandsRequestProtoMsg): _10.PendingCommandsRequest;
                toProto(message: _10.PendingCommandsRequest): Uint8Array;
                toProtoMsg(message: _10.PendingCommandsRequest): _10.PendingCommandsRequestProtoMsg;
            };
            PendingCommandsResponse: {
                typeUrl: string;
                encode(message: _10.PendingCommandsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.PendingCommandsResponse;
                fromPartial(object: Partial<_10.PendingCommandsResponse>): _10.PendingCommandsResponse;
                fromAmino(object: _10.PendingCommandsResponseAmino): _10.PendingCommandsResponse;
                toAmino(message: _10.PendingCommandsResponse): _10.PendingCommandsResponseAmino;
                fromAminoMsg(object: _10.PendingCommandsResponseAminoMsg): _10.PendingCommandsResponse;
                fromProtoMsg(message: _10.PendingCommandsResponseProtoMsg): _10.PendingCommandsResponse;
                toProto(message: _10.PendingCommandsResponse): Uint8Array;
                toProtoMsg(message: _10.PendingCommandsResponse): _10.PendingCommandsResponseProtoMsg;
            };
            QueryCommandResponse_ParamsEntry: {
                encode(message: _10.QueryCommandResponse_ParamsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCommandResponse_ParamsEntry;
                fromPartial(object: Partial<_10.QueryCommandResponse_ParamsEntry>): _10.QueryCommandResponse_ParamsEntry;
                fromAmino(object: _10.QueryCommandResponse_ParamsEntryAmino): _10.QueryCommandResponse_ParamsEntry;
                toAmino(message: _10.QueryCommandResponse_ParamsEntry): _10.QueryCommandResponse_ParamsEntryAmino;
                fromAminoMsg(object: _10.QueryCommandResponse_ParamsEntryAminoMsg): _10.QueryCommandResponse_ParamsEntry;
                fromProtoMsg(message: _10.QueryCommandResponse_ParamsEntryProtoMsg): _10.QueryCommandResponse_ParamsEntry;
                toProto(message: _10.QueryCommandResponse_ParamsEntry): Uint8Array;
            };
            QueryCommandResponse: {
                typeUrl: string;
                encode(message: _10.QueryCommandResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCommandResponse;
                fromPartial(object: Partial<_10.QueryCommandResponse>): _10.QueryCommandResponse;
                fromAmino(object: _10.QueryCommandResponseAmino): _10.QueryCommandResponse;
                toAmino(message: _10.QueryCommandResponse): _10.QueryCommandResponseAmino;
                fromAminoMsg(object: _10.QueryCommandResponseAminoMsg): _10.QueryCommandResponse;
                fromProtoMsg(message: _10.QueryCommandResponseProtoMsg): _10.QueryCommandResponse;
                toProto(message: _10.QueryCommandResponse): Uint8Array;
                toProtoMsg(message: _10.QueryCommandResponse): _10.QueryCommandResponseProtoMsg;
            };
            BurnerInfoRequest: {
                typeUrl: string;
                encode(message: _10.BurnerInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BurnerInfoRequest;
                fromPartial(object: Partial<_10.BurnerInfoRequest>): _10.BurnerInfoRequest;
                fromAmino(object: _10.BurnerInfoRequestAmino): _10.BurnerInfoRequest;
                toAmino(message: _10.BurnerInfoRequest): _10.BurnerInfoRequestAmino;
                fromAminoMsg(object: _10.BurnerInfoRequestAminoMsg): _10.BurnerInfoRequest;
                fromProtoMsg(message: _10.BurnerInfoRequestProtoMsg): _10.BurnerInfoRequest;
                toProto(message: _10.BurnerInfoRequest): Uint8Array;
                toProtoMsg(message: _10.BurnerInfoRequest): _10.BurnerInfoRequestProtoMsg;
            };
            BurnerInfoResponse: {
                typeUrl: string;
                encode(message: _10.BurnerInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BurnerInfoResponse;
                fromPartial(object: Partial<_10.BurnerInfoResponse>): _10.BurnerInfoResponse;
                fromAmino(object: _10.BurnerInfoResponseAmino): _10.BurnerInfoResponse;
                toAmino(message: _10.BurnerInfoResponse): _10.BurnerInfoResponseAmino;
                fromAminoMsg(object: _10.BurnerInfoResponseAminoMsg): _10.BurnerInfoResponse;
                fromProtoMsg(message: _10.BurnerInfoResponseProtoMsg): _10.BurnerInfoResponse;
                toProto(message: _10.BurnerInfoResponse): Uint8Array;
                toProtoMsg(message: _10.BurnerInfoResponse): _10.BurnerInfoResponseProtoMsg;
            };
            ConfirmationHeightRequest: {
                typeUrl: string;
                encode(message: _10.ConfirmationHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ConfirmationHeightRequest;
                fromPartial(object: Partial<_10.ConfirmationHeightRequest>): _10.ConfirmationHeightRequest;
                fromAmino(object: _10.ConfirmationHeightRequestAmino): _10.ConfirmationHeightRequest;
                toAmino(message: _10.ConfirmationHeightRequest): _10.ConfirmationHeightRequestAmino;
                fromAminoMsg(object: _10.ConfirmationHeightRequestAminoMsg): _10.ConfirmationHeightRequest;
                fromProtoMsg(message: _10.ConfirmationHeightRequestProtoMsg): _10.ConfirmationHeightRequest;
                toProto(message: _10.ConfirmationHeightRequest): Uint8Array;
                toProtoMsg(message: _10.ConfirmationHeightRequest): _10.ConfirmationHeightRequestProtoMsg;
            };
            ConfirmationHeightResponse: {
                typeUrl: string;
                encode(message: _10.ConfirmationHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ConfirmationHeightResponse;
                fromPartial(object: Partial<_10.ConfirmationHeightResponse>): _10.ConfirmationHeightResponse;
                fromAmino(object: _10.ConfirmationHeightResponseAmino): _10.ConfirmationHeightResponse;
                toAmino(message: _10.ConfirmationHeightResponse): _10.ConfirmationHeightResponseAmino;
                fromAminoMsg(object: _10.ConfirmationHeightResponseAminoMsg): _10.ConfirmationHeightResponse;
                fromProtoMsg(message: _10.ConfirmationHeightResponseProtoMsg): _10.ConfirmationHeightResponse;
                toProto(message: _10.ConfirmationHeightResponse): Uint8Array;
                toProtoMsg(message: _10.ConfirmationHeightResponse): _10.ConfirmationHeightResponseProtoMsg;
            };
            GatewayAddressRequest: {
                typeUrl: string;
                encode(message: _10.GatewayAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GatewayAddressRequest;
                fromPartial(object: Partial<_10.GatewayAddressRequest>): _10.GatewayAddressRequest;
                fromAmino(object: _10.GatewayAddressRequestAmino): _10.GatewayAddressRequest;
                toAmino(message: _10.GatewayAddressRequest): _10.GatewayAddressRequestAmino;
                fromAminoMsg(object: _10.GatewayAddressRequestAminoMsg): _10.GatewayAddressRequest;
                fromProtoMsg(message: _10.GatewayAddressRequestProtoMsg): _10.GatewayAddressRequest;
                toProto(message: _10.GatewayAddressRequest): Uint8Array;
                toProtoMsg(message: _10.GatewayAddressRequest): _10.GatewayAddressRequestProtoMsg;
            };
            GatewayAddressResponse: {
                typeUrl: string;
                encode(message: _10.GatewayAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GatewayAddressResponse;
                fromPartial(object: Partial<_10.GatewayAddressResponse>): _10.GatewayAddressResponse;
                fromAmino(object: _10.GatewayAddressResponseAmino): _10.GatewayAddressResponse;
                toAmino(message: _10.GatewayAddressResponse): _10.GatewayAddressResponseAmino;
                fromAminoMsg(object: _10.GatewayAddressResponseAminoMsg): _10.GatewayAddressResponse;
                fromProtoMsg(message: _10.GatewayAddressResponseProtoMsg): _10.GatewayAddressResponse;
                toProto(message: _10.GatewayAddressResponse): Uint8Array;
                toProtoMsg(message: _10.GatewayAddressResponse): _10.GatewayAddressResponseProtoMsg;
            };
            BytecodeRequest: {
                typeUrl: string;
                encode(message: _10.BytecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BytecodeRequest;
                fromPartial(object: Partial<_10.BytecodeRequest>): _10.BytecodeRequest;
                fromAmino(object: _10.BytecodeRequestAmino): _10.BytecodeRequest;
                toAmino(message: _10.BytecodeRequest): _10.BytecodeRequestAmino;
                fromAminoMsg(object: _10.BytecodeRequestAminoMsg): _10.BytecodeRequest;
                fromProtoMsg(message: _10.BytecodeRequestProtoMsg): _10.BytecodeRequest;
                toProto(message: _10.BytecodeRequest): Uint8Array;
                toProtoMsg(message: _10.BytecodeRequest): _10.BytecodeRequestProtoMsg;
            };
            BytecodeResponse: {
                typeUrl: string;
                encode(message: _10.BytecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BytecodeResponse;
                fromPartial(object: Partial<_10.BytecodeResponse>): _10.BytecodeResponse;
                fromAmino(object: _10.BytecodeResponseAmino): _10.BytecodeResponse;
                toAmino(message: _10.BytecodeResponse): _10.BytecodeResponseAmino;
                fromAminoMsg(object: _10.BytecodeResponseAminoMsg): _10.BytecodeResponse;
                fromProtoMsg(message: _10.BytecodeResponseProtoMsg): _10.BytecodeResponse;
                toProto(message: _10.BytecodeResponse): Uint8Array;
                toProtoMsg(message: _10.BytecodeResponse): _10.BytecodeResponseProtoMsg;
            };
            ERC20TokensRequest: {
                typeUrl: string;
                encode(message: _10.ERC20TokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ERC20TokensRequest;
                fromPartial(object: Partial<_10.ERC20TokensRequest>): _10.ERC20TokensRequest;
                fromAmino(object: _10.ERC20TokensRequestAmino): _10.ERC20TokensRequest;
                toAmino(message: _10.ERC20TokensRequest): _10.ERC20TokensRequestAmino;
                fromAminoMsg(object: _10.ERC20TokensRequestAminoMsg): _10.ERC20TokensRequest;
                fromProtoMsg(message: _10.ERC20TokensRequestProtoMsg): _10.ERC20TokensRequest;
                toProto(message: _10.ERC20TokensRequest): Uint8Array;
                toProtoMsg(message: _10.ERC20TokensRequest): _10.ERC20TokensRequestProtoMsg;
            };
            ERC20TokensResponse: {
                typeUrl: string;
                encode(message: _10.ERC20TokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ERC20TokensResponse;
                fromPartial(object: Partial<_10.ERC20TokensResponse>): _10.ERC20TokensResponse;
                fromAmino(object: _10.ERC20TokensResponseAmino): _10.ERC20TokensResponse;
                toAmino(message: _10.ERC20TokensResponse): _10.ERC20TokensResponseAmino;
                fromAminoMsg(object: _10.ERC20TokensResponseAminoMsg): _10.ERC20TokensResponse;
                fromProtoMsg(message: _10.ERC20TokensResponseProtoMsg): _10.ERC20TokensResponse;
                toProto(message: _10.ERC20TokensResponse): Uint8Array;
                toProtoMsg(message: _10.ERC20TokensResponse): _10.ERC20TokensResponseProtoMsg;
            };
            ERC20TokensResponse_Token: {
                typeUrl: string;
                encode(message: _10.ERC20TokensResponse_Token, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ERC20TokensResponse_Token;
                fromPartial(object: Partial<_10.ERC20TokensResponse_Token>): _10.ERC20TokensResponse_Token;
                fromAmino(object: _10.ERC20TokensResponse_TokenAmino): _10.ERC20TokensResponse_Token;
                toAmino(message: _10.ERC20TokensResponse_Token): _10.ERC20TokensResponse_TokenAmino;
                fromAminoMsg(object: _10.ERC20TokensResponse_TokenAminoMsg): _10.ERC20TokensResponse_Token;
                fromProtoMsg(message: _10.ERC20TokensResponse_TokenProtoMsg): _10.ERC20TokensResponse_Token;
                toProto(message: _10.ERC20TokensResponse_Token): Uint8Array;
                toProtoMsg(message: _10.ERC20TokensResponse_Token): _10.ERC20TokensResponse_TokenProtoMsg;
            };
            TokenInfoRequest: {
                typeUrl: string;
                encode(message: _10.TokenInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.TokenInfoRequest;
                fromPartial(object: Partial<_10.TokenInfoRequest>): _10.TokenInfoRequest;
                fromAmino(object: _10.TokenInfoRequestAmino): _10.TokenInfoRequest;
                toAmino(message: _10.TokenInfoRequest): _10.TokenInfoRequestAmino;
                fromAminoMsg(object: _10.TokenInfoRequestAminoMsg): _10.TokenInfoRequest;
                fromProtoMsg(message: _10.TokenInfoRequestProtoMsg): _10.TokenInfoRequest;
                toProto(message: _10.TokenInfoRequest): Uint8Array;
                toProtoMsg(message: _10.TokenInfoRequest): _10.TokenInfoRequestProtoMsg;
            };
            TokenInfoResponse: {
                typeUrl: string;
                encode(message: _10.TokenInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.TokenInfoResponse;
                fromPartial(object: Partial<_10.TokenInfoResponse>): _10.TokenInfoResponse;
                fromAmino(object: _10.TokenInfoResponseAmino): _10.TokenInfoResponse;
                toAmino(message: _10.TokenInfoResponse): _10.TokenInfoResponseAmino;
                fromAminoMsg(object: _10.TokenInfoResponseAminoMsg): _10.TokenInfoResponse;
                fromProtoMsg(message: _10.TokenInfoResponseProtoMsg): _10.TokenInfoResponse;
                toProto(message: _10.TokenInfoResponse): Uint8Array;
                toProtoMsg(message: _10.TokenInfoResponse): _10.TokenInfoResponseProtoMsg;
            };
            Proof: {
                typeUrl: string;
                encode(message: _10.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Proof;
                fromPartial(object: Partial<_10.Proof>): _10.Proof;
                fromAmino(object: _10.ProofAmino): _10.Proof;
                toAmino(message: _10.Proof): _10.ProofAmino;
                fromAminoMsg(object: _10.ProofAminoMsg): _10.Proof;
                fromProtoMsg(message: _10.ProofProtoMsg): _10.Proof;
                toProto(message: _10.Proof): Uint8Array;
                toProtoMsg(message: _10.Proof): _10.ProofProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
            PendingChain: {
                typeUrl: string;
                encode(message: _9.PendingChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.PendingChain;
                fromPartial(object: Partial<_9.PendingChain>): _9.PendingChain;
                fromAmino(object: _9.PendingChainAmino): _9.PendingChain;
                toAmino(message: _9.PendingChain): _9.PendingChainAmino;
                fromAminoMsg(object: _9.PendingChainAminoMsg): _9.PendingChain;
                fromProtoMsg(message: _9.PendingChainProtoMsg): _9.PendingChain;
                toProto(message: _9.PendingChain): Uint8Array;
                toProtoMsg(message: _9.PendingChain): _9.PendingChainProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            GenesisState_Chain: {
                typeUrl: string;
                encode(message: _8.GenesisState_Chain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GenesisState_Chain;
                fromPartial(object: Partial<_8.GenesisState_Chain>): _8.GenesisState_Chain;
                fromAmino(object: _8.GenesisState_ChainAmino): _8.GenesisState_Chain;
                toAmino(message: _8.GenesisState_Chain): _8.GenesisState_ChainAmino;
                fromAminoMsg(object: _8.GenesisState_ChainAminoMsg): _8.GenesisState_Chain;
                fromProtoMsg(message: _8.GenesisState_ChainProtoMsg): _8.GenesisState_Chain;
                toProto(message: _8.GenesisState_Chain): Uint8Array;
                toProtoMsg(message: _8.GenesisState_Chain): _8.GenesisState_ChainProtoMsg;
            };
            PollFailed: {
                typeUrl: string;
                encode(message: _7.PollFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.PollFailed;
                fromPartial(object: Partial<_7.PollFailed>): _7.PollFailed;
                fromAmino(object: _7.PollFailedAmino): _7.PollFailed;
                toAmino(message: _7.PollFailed): _7.PollFailedAmino;
                fromAminoMsg(object: _7.PollFailedAminoMsg): _7.PollFailed;
                fromProtoMsg(message: _7.PollFailedProtoMsg): _7.PollFailed;
                toProto(message: _7.PollFailed): Uint8Array;
                toProtoMsg(message: _7.PollFailed): _7.PollFailedProtoMsg;
            };
            PollExpired: {
                typeUrl: string;
                encode(message: _7.PollExpired, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.PollExpired;
                fromPartial(object: Partial<_7.PollExpired>): _7.PollExpired;
                fromAmino(object: _7.PollExpiredAmino): _7.PollExpired;
                toAmino(message: _7.PollExpired): _7.PollExpiredAmino;
                fromAminoMsg(object: _7.PollExpiredAminoMsg): _7.PollExpired;
                fromProtoMsg(message: _7.PollExpiredProtoMsg): _7.PollExpired;
                toProto(message: _7.PollExpired): Uint8Array;
                toProtoMsg(message: _7.PollExpired): _7.PollExpiredProtoMsg;
            };
            PollCompleted: {
                typeUrl: string;
                encode(message: _7.PollCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.PollCompleted;
                fromPartial(object: Partial<_7.PollCompleted>): _7.PollCompleted;
                fromAmino(object: _7.PollCompletedAmino): _7.PollCompleted;
                toAmino(message: _7.PollCompleted): _7.PollCompletedAmino;
                fromAminoMsg(object: _7.PollCompletedAminoMsg): _7.PollCompleted;
                fromProtoMsg(message: _7.PollCompletedProtoMsg): _7.PollCompleted;
                toProto(message: _7.PollCompleted): Uint8Array;
                toProtoMsg(message: _7.PollCompleted): _7.PollCompletedProtoMsg;
            };
            NoEventsConfirmed: {
                typeUrl: string;
                encode(message: _7.NoEventsConfirmed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.NoEventsConfirmed;
                fromPartial(object: Partial<_7.NoEventsConfirmed>): _7.NoEventsConfirmed;
                fromAmino(object: _7.NoEventsConfirmedAmino): _7.NoEventsConfirmed;
                toAmino(message: _7.NoEventsConfirmed): _7.NoEventsConfirmedAmino;
                fromAminoMsg(object: _7.NoEventsConfirmedAminoMsg): _7.NoEventsConfirmed;
                fromProtoMsg(message: _7.NoEventsConfirmedProtoMsg): _7.NoEventsConfirmed;
                toProto(message: _7.NoEventsConfirmed): Uint8Array;
                toProtoMsg(message: _7.NoEventsConfirmed): _7.NoEventsConfirmedProtoMsg;
            };
            ConfirmKeyTransferStarted: {
                typeUrl: string;
                encode(message: _7.ConfirmKeyTransferStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ConfirmKeyTransferStarted;
                fromPartial(object: Partial<_7.ConfirmKeyTransferStarted>): _7.ConfirmKeyTransferStarted;
                fromAmino(object: _7.ConfirmKeyTransferStartedAmino): _7.ConfirmKeyTransferStarted;
                toAmino(message: _7.ConfirmKeyTransferStarted): _7.ConfirmKeyTransferStartedAmino;
                fromAminoMsg(object: _7.ConfirmKeyTransferStartedAminoMsg): _7.ConfirmKeyTransferStarted;
                fromProtoMsg(message: _7.ConfirmKeyTransferStartedProtoMsg): _7.ConfirmKeyTransferStarted;
                toProto(message: _7.ConfirmKeyTransferStarted): Uint8Array;
                toProtoMsg(message: _7.ConfirmKeyTransferStarted): _7.ConfirmKeyTransferStartedProtoMsg;
            };
            ConfirmGatewayTxStarted: {
                typeUrl: string;
                encode(message: _7.ConfirmGatewayTxStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ConfirmGatewayTxStarted;
                fromPartial(object: Partial<_7.ConfirmGatewayTxStarted>): _7.ConfirmGatewayTxStarted;
                fromAmino(object: _7.ConfirmGatewayTxStartedAmino): _7.ConfirmGatewayTxStarted;
                toAmino(message: _7.ConfirmGatewayTxStarted): _7.ConfirmGatewayTxStartedAmino;
                fromAminoMsg(object: _7.ConfirmGatewayTxStartedAminoMsg): _7.ConfirmGatewayTxStarted;
                fromProtoMsg(message: _7.ConfirmGatewayTxStartedProtoMsg): _7.ConfirmGatewayTxStarted;
                toProto(message: _7.ConfirmGatewayTxStarted): Uint8Array;
                toProtoMsg(message: _7.ConfirmGatewayTxStarted): _7.ConfirmGatewayTxStartedProtoMsg;
            };
            ConfirmDepositStarted: {
                typeUrl: string;
                encode(message: _7.ConfirmDepositStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ConfirmDepositStarted;
                fromPartial(object: Partial<_7.ConfirmDepositStarted>): _7.ConfirmDepositStarted;
                fromAmino(object: _7.ConfirmDepositStartedAmino): _7.ConfirmDepositStarted;
                toAmino(message: _7.ConfirmDepositStarted): _7.ConfirmDepositStartedAmino;
                fromAminoMsg(object: _7.ConfirmDepositStartedAminoMsg): _7.ConfirmDepositStarted;
                fromProtoMsg(message: _7.ConfirmDepositStartedProtoMsg): _7.ConfirmDepositStarted;
                toProto(message: _7.ConfirmDepositStarted): Uint8Array;
                toProtoMsg(message: _7.ConfirmDepositStarted): _7.ConfirmDepositStartedProtoMsg;
            };
            ConfirmTokenStarted: {
                typeUrl: string;
                encode(message: _7.ConfirmTokenStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ConfirmTokenStarted;
                fromPartial(object: Partial<_7.ConfirmTokenStarted>): _7.ConfirmTokenStarted;
                fromAmino(object: _7.ConfirmTokenStartedAmino): _7.ConfirmTokenStarted;
                toAmino(message: _7.ConfirmTokenStarted): _7.ConfirmTokenStartedAmino;
                fromAminoMsg(object: _7.ConfirmTokenStartedAminoMsg): _7.ConfirmTokenStarted;
                fromProtoMsg(message: _7.ConfirmTokenStartedProtoMsg): _7.ConfirmTokenStarted;
                toProto(message: _7.ConfirmTokenStarted): Uint8Array;
                toProtoMsg(message: _7.ConfirmTokenStarted): _7.ConfirmTokenStartedProtoMsg;
            };
            ChainAdded: {
                typeUrl: string;
                encode(message: _7.ChainAdded, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ChainAdded;
                fromPartial(object: Partial<_7.ChainAdded>): _7.ChainAdded;
                fromAmino(object: _7.ChainAddedAmino): _7.ChainAdded;
                toAmino(message: _7.ChainAdded): _7.ChainAddedAmino;
                fromAminoMsg(object: _7.ChainAddedAminoMsg): _7.ChainAdded;
                fromProtoMsg(message: _7.ChainAddedProtoMsg): _7.ChainAdded;
                toProto(message: _7.ChainAdded): Uint8Array;
                toProtoMsg(message: _7.ChainAdded): _7.ChainAddedProtoMsg;
            };
            CommandBatchSigned: {
                typeUrl: string;
                encode(message: _7.CommandBatchSigned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.CommandBatchSigned;
                fromPartial(object: Partial<_7.CommandBatchSigned>): _7.CommandBatchSigned;
                fromAmino(object: _7.CommandBatchSignedAmino): _7.CommandBatchSigned;
                toAmino(message: _7.CommandBatchSigned): _7.CommandBatchSignedAmino;
                fromAminoMsg(object: _7.CommandBatchSignedAminoMsg): _7.CommandBatchSigned;
                fromProtoMsg(message: _7.CommandBatchSignedProtoMsg): _7.CommandBatchSigned;
                toProto(message: _7.CommandBatchSigned): Uint8Array;
                toProtoMsg(message: _7.CommandBatchSigned): _7.CommandBatchSignedProtoMsg;
            };
            CommandBatchAborted: {
                typeUrl: string;
                encode(message: _7.CommandBatchAborted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.CommandBatchAborted;
                fromPartial(object: Partial<_7.CommandBatchAborted>): _7.CommandBatchAborted;
                fromAmino(object: _7.CommandBatchAbortedAmino): _7.CommandBatchAborted;
                toAmino(message: _7.CommandBatchAborted): _7.CommandBatchAbortedAmino;
                fromAminoMsg(object: _7.CommandBatchAbortedAminoMsg): _7.CommandBatchAborted;
                fromProtoMsg(message: _7.CommandBatchAbortedProtoMsg): _7.CommandBatchAborted;
                toProto(message: _7.CommandBatchAborted): Uint8Array;
                toProtoMsg(message: _7.CommandBatchAborted): _7.CommandBatchAbortedProtoMsg;
            };
            EVMEventConfirmed: {
                typeUrl: string;
                encode(message: _7.EVMEventConfirmed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EVMEventConfirmed;
                fromPartial(object: Partial<_7.EVMEventConfirmed>): _7.EVMEventConfirmed;
                fromAmino(object: _7.EVMEventConfirmedAmino): _7.EVMEventConfirmed;
                toAmino(message: _7.EVMEventConfirmed): _7.EVMEventConfirmedAmino;
                fromAminoMsg(object: _7.EVMEventConfirmedAminoMsg): _7.EVMEventConfirmed;
                fromProtoMsg(message: _7.EVMEventConfirmedProtoMsg): _7.EVMEventConfirmed;
                toProto(message: _7.EVMEventConfirmed): Uint8Array;
                toProtoMsg(message: _7.EVMEventConfirmed): _7.EVMEventConfirmedProtoMsg;
            };
            EVMEventCompleted: {
                typeUrl: string;
                encode(message: _7.EVMEventCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EVMEventCompleted;
                fromPartial(object: Partial<_7.EVMEventCompleted>): _7.EVMEventCompleted;
                fromAmino(object: _7.EVMEventCompletedAmino): _7.EVMEventCompleted;
                toAmino(message: _7.EVMEventCompleted): _7.EVMEventCompletedAmino;
                fromAminoMsg(object: _7.EVMEventCompletedAminoMsg): _7.EVMEventCompleted;
                fromProtoMsg(message: _7.EVMEventCompletedProtoMsg): _7.EVMEventCompleted;
                toProto(message: _7.EVMEventCompleted): Uint8Array;
                toProtoMsg(message: _7.EVMEventCompleted): _7.EVMEventCompletedProtoMsg;
            };
            EVMEventFailed: {
                typeUrl: string;
                encode(message: _7.EVMEventFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EVMEventFailed;
                fromPartial(object: Partial<_7.EVMEventFailed>): _7.EVMEventFailed;
                fromAmino(object: _7.EVMEventFailedAmino): _7.EVMEventFailed;
                toAmino(message: _7.EVMEventFailed): _7.EVMEventFailedAmino;
                fromAminoMsg(object: _7.EVMEventFailedAminoMsg): _7.EVMEventFailed;
                fromProtoMsg(message: _7.EVMEventFailedProtoMsg): _7.EVMEventFailed;
                toProto(message: _7.EVMEventFailed): Uint8Array;
                toProtoMsg(message: _7.EVMEventFailed): _7.EVMEventFailedProtoMsg;
            };
            EVMEventRetryFailed: {
                typeUrl: string;
                encode(message: _7.EVMEventRetryFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.EVMEventRetryFailed;
                fromPartial(object: Partial<_7.EVMEventRetryFailed>): _7.EVMEventRetryFailed;
                fromAmino(object: _7.EVMEventRetryFailedAmino): _7.EVMEventRetryFailed;
                toAmino(message: _7.EVMEventRetryFailed): _7.EVMEventRetryFailedAmino;
                fromAminoMsg(object: _7.EVMEventRetryFailedAminoMsg): _7.EVMEventRetryFailed;
                fromProtoMsg(message: _7.EVMEventRetryFailedProtoMsg): _7.EVMEventRetryFailed;
                toProto(message: _7.EVMEventRetryFailed): Uint8Array;
                toProtoMsg(message: _7.EVMEventRetryFailed): _7.EVMEventRetryFailedProtoMsg;
            };
            ContractCallApproved: {
                typeUrl: string;
                encode(message: _7.ContractCallApproved, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ContractCallApproved;
                fromPartial(object: Partial<_7.ContractCallApproved>): _7.ContractCallApproved;
                fromAmino(object: _7.ContractCallApprovedAmino): _7.ContractCallApproved;
                toAmino(message: _7.ContractCallApproved): _7.ContractCallApprovedAmino;
                fromAminoMsg(object: _7.ContractCallApprovedAminoMsg): _7.ContractCallApproved;
                fromProtoMsg(message: _7.ContractCallApprovedProtoMsg): _7.ContractCallApproved;
                toProto(message: _7.ContractCallApproved): Uint8Array;
                toProtoMsg(message: _7.ContractCallApproved): _7.ContractCallApprovedProtoMsg;
            };
            ContractCallFailed: {
                typeUrl: string;
                encode(message: _7.ContractCallFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ContractCallFailed;
                fromPartial(object: Partial<_7.ContractCallFailed>): _7.ContractCallFailed;
                fromAmino(object: _7.ContractCallFailedAmino): _7.ContractCallFailed;
                toAmino(message: _7.ContractCallFailed): _7.ContractCallFailedAmino;
                fromAminoMsg(object: _7.ContractCallFailedAminoMsg): _7.ContractCallFailed;
                fromProtoMsg(message: _7.ContractCallFailedProtoMsg): _7.ContractCallFailed;
                toProto(message: _7.ContractCallFailed): Uint8Array;
                toProtoMsg(message: _7.ContractCallFailed): _7.ContractCallFailedProtoMsg;
            };
            ContractCallWithMintApproved: {
                typeUrl: string;
                encode(message: _7.ContractCallWithMintApproved, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ContractCallWithMintApproved;
                fromPartial(object: Partial<_7.ContractCallWithMintApproved>): _7.ContractCallWithMintApproved;
                fromAmino(object: _7.ContractCallWithMintApprovedAmino): _7.ContractCallWithMintApproved;
                toAmino(message: _7.ContractCallWithMintApproved): _7.ContractCallWithMintApprovedAmino;
                fromAminoMsg(object: _7.ContractCallWithMintApprovedAminoMsg): _7.ContractCallWithMintApproved;
                fromProtoMsg(message: _7.ContractCallWithMintApprovedProtoMsg): _7.ContractCallWithMintApproved;
                toProto(message: _7.ContractCallWithMintApproved): Uint8Array;
                toProtoMsg(message: _7.ContractCallWithMintApproved): _7.ContractCallWithMintApprovedProtoMsg;
            };
            TokenSent: {
                typeUrl: string;
                encode(message: _7.TokenSent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.TokenSent;
                fromPartial(object: Partial<_7.TokenSent>): _7.TokenSent;
                fromAmino(object: _7.TokenSentAmino): _7.TokenSent;
                toAmino(message: _7.TokenSent): _7.TokenSentAmino;
                fromAminoMsg(object: _7.TokenSentAminoMsg): _7.TokenSent;
                fromProtoMsg(message: _7.TokenSentProtoMsg): _7.TokenSent;
                toProto(message: _7.TokenSent): Uint8Array;
                toProtoMsg(message: _7.TokenSent): _7.TokenSentProtoMsg;
            };
            MintCommand: {
                typeUrl: string;
                encode(message: _7.MintCommand, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MintCommand;
                fromPartial(object: Partial<_7.MintCommand>): _7.MintCommand;
                fromAmino(object: _7.MintCommandAmino): _7.MintCommand;
                toAmino(message: _7.MintCommand): _7.MintCommandAmino;
                fromAminoMsg(object: _7.MintCommandAminoMsg): _7.MintCommand;
                fromProtoMsg(message: _7.MintCommandProtoMsg): _7.MintCommand;
                toProto(message: _7.MintCommand): Uint8Array;
                toProtoMsg(message: _7.MintCommand): _7.MintCommandProtoMsg;
            };
            BurnCommand: {
                typeUrl: string;
                encode(message: _7.BurnCommand, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.BurnCommand;
                fromPartial(object: Partial<_7.BurnCommand>): _7.BurnCommand;
                fromAmino(object: _7.BurnCommandAmino): _7.BurnCommand;
                toAmino(message: _7.BurnCommand): _7.BurnCommandAmino;
                fromAminoMsg(object: _7.BurnCommandAminoMsg): _7.BurnCommand;
                fromProtoMsg(message: _7.BurnCommandProtoMsg): _7.BurnCommand;
                toProto(message: _7.BurnCommand): Uint8Array;
                toProtoMsg(message: _7.BurnCommand): _7.BurnCommandProtoMsg;
            };
        };
    }
    namespace multisig {
        namespace exported {
            const v1beta1: {
                multisigStateFromJSON(object: any): _14.MultisigState;
                multisigStateToJSON(object: _14.MultisigState): string;
                keyStateFromJSON(object: any): _14.KeyState;
                keyStateToJSON(object: _14.KeyState): string;
                MultisigState: typeof _14.MultisigState;
                MultisigStateSDKType: typeof _14.MultisigState;
                MultisigStateAmino: typeof _14.MultisigState;
                KeyState: typeof _14.KeyState;
                KeyStateSDKType: typeof _14.KeyState;
                KeyStateAmino: typeof _14.KeyState;
            };
        }
        const v1beta1: {
            Key_PubKeysEntry: {
                encode(message: _21.Key_PubKeysEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Key_PubKeysEntry;
                fromPartial(object: Partial<_21.Key_PubKeysEntry>): _21.Key_PubKeysEntry;
                fromAmino(object: _21.Key_PubKeysEntryAmino): _21.Key_PubKeysEntry;
                toAmino(message: _21.Key_PubKeysEntry): _21.Key_PubKeysEntryAmino;
                fromAminoMsg(object: _21.Key_PubKeysEntryAminoMsg): _21.Key_PubKeysEntry;
                fromProtoMsg(message: _21.Key_PubKeysEntryProtoMsg): _21.Key_PubKeysEntry;
                toProto(message: _21.Key_PubKeysEntry): Uint8Array;
            };
            Key: {
                typeUrl: string;
                encode(message: _21.Key, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Key;
                fromPartial(object: Partial<_21.Key>): _21.Key;
                fromAmino(object: _21.KeyAmino): _21.Key;
                toAmino(message: _21.Key): _21.KeyAmino;
                fromAminoMsg(object: _21.KeyAminoMsg): _21.Key;
                fromProtoMsg(message: _21.KeyProtoMsg): _21.Key;
                toProto(message: _21.Key): Uint8Array;
                toProtoMsg(message: _21.Key): _21.KeyProtoMsg;
            };
            KeygenSession_IsPubKeyReceivedEntry: {
                encode(message: _21.KeygenSession_IsPubKeyReceivedEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.KeygenSession_IsPubKeyReceivedEntry;
                fromPartial(object: Partial<_21.KeygenSession_IsPubKeyReceivedEntry>): _21.KeygenSession_IsPubKeyReceivedEntry;
                fromAmino(object: _21.KeygenSession_IsPubKeyReceivedEntryAmino): _21.KeygenSession_IsPubKeyReceivedEntry;
                toAmino(message: _21.KeygenSession_IsPubKeyReceivedEntry): _21.KeygenSession_IsPubKeyReceivedEntryAmino;
                fromAminoMsg(object: _21.KeygenSession_IsPubKeyReceivedEntryAminoMsg): _21.KeygenSession_IsPubKeyReceivedEntry;
                fromProtoMsg(message: _21.KeygenSession_IsPubKeyReceivedEntryProtoMsg): _21.KeygenSession_IsPubKeyReceivedEntry;
                toProto(message: _21.KeygenSession_IsPubKeyReceivedEntry): Uint8Array;
            };
            KeygenSession: {
                typeUrl: string;
                encode(message: _21.KeygenSession, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.KeygenSession;
                fromPartial(object: Partial<_21.KeygenSession>): _21.KeygenSession;
                fromAmino(object: _21.KeygenSessionAmino): _21.KeygenSession;
                toAmino(message: _21.KeygenSession): _21.KeygenSessionAmino;
                fromAminoMsg(object: _21.KeygenSessionAminoMsg): _21.KeygenSession;
                fromProtoMsg(message: _21.KeygenSessionProtoMsg): _21.KeygenSession;
                toProto(message: _21.KeygenSession): Uint8Array;
                toProtoMsg(message: _21.KeygenSession): _21.KeygenSessionProtoMsg;
            };
            MultiSig_SigsEntry: {
                encode(message: _21.MultiSig_SigsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MultiSig_SigsEntry;
                fromPartial(object: Partial<_21.MultiSig_SigsEntry>): _21.MultiSig_SigsEntry;
                fromAmino(object: _21.MultiSig_SigsEntryAmino): _21.MultiSig_SigsEntry;
                toAmino(message: _21.MultiSig_SigsEntry): _21.MultiSig_SigsEntryAmino;
                fromAminoMsg(object: _21.MultiSig_SigsEntryAminoMsg): _21.MultiSig_SigsEntry;
                fromProtoMsg(message: _21.MultiSig_SigsEntryProtoMsg): _21.MultiSig_SigsEntry;
                toProto(message: _21.MultiSig_SigsEntry): Uint8Array;
            };
            MultiSig: {
                typeUrl: string;
                encode(message: _21.MultiSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MultiSig;
                fromPartial(object: Partial<_21.MultiSig>): _21.MultiSig;
                fromAmino(object: _21.MultiSigAmino): _21.MultiSig;
                toAmino(message: _21.MultiSig): _21.MultiSigAmino;
                fromAminoMsg(object: _21.MultiSigAminoMsg): _21.MultiSig;
                fromProtoMsg(message: _21.MultiSigProtoMsg): _21.MultiSig;
                toProto(message: _21.MultiSig): Uint8Array;
                toProtoMsg(message: _21.MultiSig): _21.MultiSigProtoMsg;
            };
            SigningSession: {
                typeUrl: string;
                encode(message: _21.SigningSession, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.SigningSession;
                fromPartial(object: Partial<_21.SigningSession>): _21.SigningSession;
                fromAmino(object: _21.SigningSessionAmino): _21.SigningSession;
                toAmino(message: _21.SigningSession): _21.SigningSessionAmino;
                fromAminoMsg(object: _21.SigningSessionAminoMsg): _21.SigningSession;
                fromProtoMsg(message: _21.SigningSessionProtoMsg): _21.SigningSession;
                toProto(message: _21.SigningSession): Uint8Array;
                toProtoMsg(message: _21.SigningSession): _21.SigningSessionProtoMsg;
            };
            KeyEpoch: {
                typeUrl: string;
                encode(message: _21.KeyEpoch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.KeyEpoch;
                fromPartial(object: Partial<_21.KeyEpoch>): _21.KeyEpoch;
                fromAmino(object: _21.KeyEpochAmino): _21.KeyEpoch;
                toAmino(message: _21.KeyEpoch): _21.KeyEpochAmino;
                fromAminoMsg(object: _21.KeyEpochAminoMsg): _21.KeyEpoch;
                fromProtoMsg(message: _21.KeyEpochProtoMsg): _21.KeyEpoch;
                toProto(message: _21.KeyEpoch): Uint8Array;
                toProtoMsg(message: _21.KeyEpoch): _21.KeyEpochProtoMsg;
            };
            Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            StartKeygenRequest: {
                typeUrl: string;
                encode(message: _20.StartKeygenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.StartKeygenRequest;
                fromPartial(object: Partial<_20.StartKeygenRequest>): _20.StartKeygenRequest;
                fromAmino(object: _20.StartKeygenRequestAmino): _20.StartKeygenRequest;
                toAmino(message: _20.StartKeygenRequest): _20.StartKeygenRequestAmino;
                fromAminoMsg(object: _20.StartKeygenRequestAminoMsg): _20.StartKeygenRequest;
                fromProtoMsg(message: _20.StartKeygenRequestProtoMsg): _20.StartKeygenRequest;
                toProto(message: _20.StartKeygenRequest): Uint8Array;
                toProtoMsg(message: _20.StartKeygenRequest): _20.StartKeygenRequestProtoMsg;
            };
            StartKeygenResponse: {
                typeUrl: string;
                encode(_: _20.StartKeygenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.StartKeygenResponse;
                fromPartial(_: Partial<_20.StartKeygenResponse>): _20.StartKeygenResponse;
                fromAmino(_: _20.StartKeygenResponseAmino): _20.StartKeygenResponse;
                toAmino(_: _20.StartKeygenResponse): _20.StartKeygenResponseAmino;
                fromAminoMsg(object: _20.StartKeygenResponseAminoMsg): _20.StartKeygenResponse;
                fromProtoMsg(message: _20.StartKeygenResponseProtoMsg): _20.StartKeygenResponse;
                toProto(message: _20.StartKeygenResponse): Uint8Array;
                toProtoMsg(message: _20.StartKeygenResponse): _20.StartKeygenResponseProtoMsg;
            };
            SubmitPubKeyRequest: {
                typeUrl: string;
                encode(message: _20.SubmitPubKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.SubmitPubKeyRequest;
                fromPartial(object: Partial<_20.SubmitPubKeyRequest>): _20.SubmitPubKeyRequest;
                fromAmino(object: _20.SubmitPubKeyRequestAmino): _20.SubmitPubKeyRequest;
                toAmino(message: _20.SubmitPubKeyRequest): _20.SubmitPubKeyRequestAmino;
                fromAminoMsg(object: _20.SubmitPubKeyRequestAminoMsg): _20.SubmitPubKeyRequest;
                fromProtoMsg(message: _20.SubmitPubKeyRequestProtoMsg): _20.SubmitPubKeyRequest;
                toProto(message: _20.SubmitPubKeyRequest): Uint8Array;
                toProtoMsg(message: _20.SubmitPubKeyRequest): _20.SubmitPubKeyRequestProtoMsg;
            };
            SubmitPubKeyResponse: {
                typeUrl: string;
                encode(_: _20.SubmitPubKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.SubmitPubKeyResponse;
                fromPartial(_: Partial<_20.SubmitPubKeyResponse>): _20.SubmitPubKeyResponse;
                fromAmino(_: _20.SubmitPubKeyResponseAmino): _20.SubmitPubKeyResponse;
                toAmino(_: _20.SubmitPubKeyResponse): _20.SubmitPubKeyResponseAmino;
                fromAminoMsg(object: _20.SubmitPubKeyResponseAminoMsg): _20.SubmitPubKeyResponse;
                fromProtoMsg(message: _20.SubmitPubKeyResponseProtoMsg): _20.SubmitPubKeyResponse;
                toProto(message: _20.SubmitPubKeyResponse): Uint8Array;
                toProtoMsg(message: _20.SubmitPubKeyResponse): _20.SubmitPubKeyResponseProtoMsg;
            };
            SubmitSignatureRequest: {
                typeUrl: string;
                encode(message: _20.SubmitSignatureRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.SubmitSignatureRequest;
                fromPartial(object: Partial<_20.SubmitSignatureRequest>): _20.SubmitSignatureRequest;
                fromAmino(object: _20.SubmitSignatureRequestAmino): _20.SubmitSignatureRequest;
                toAmino(message: _20.SubmitSignatureRequest): _20.SubmitSignatureRequestAmino;
                fromAminoMsg(object: _20.SubmitSignatureRequestAminoMsg): _20.SubmitSignatureRequest;
                fromProtoMsg(message: _20.SubmitSignatureRequestProtoMsg): _20.SubmitSignatureRequest;
                toProto(message: _20.SubmitSignatureRequest): Uint8Array;
                toProtoMsg(message: _20.SubmitSignatureRequest): _20.SubmitSignatureRequestProtoMsg;
            };
            SubmitSignatureResponse: {
                typeUrl: string;
                encode(_: _20.SubmitSignatureResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.SubmitSignatureResponse;
                fromPartial(_: Partial<_20.SubmitSignatureResponse>): _20.SubmitSignatureResponse;
                fromAmino(_: _20.SubmitSignatureResponseAmino): _20.SubmitSignatureResponse;
                toAmino(_: _20.SubmitSignatureResponse): _20.SubmitSignatureResponseAmino;
                fromAminoMsg(object: _20.SubmitSignatureResponseAminoMsg): _20.SubmitSignatureResponse;
                fromProtoMsg(message: _20.SubmitSignatureResponseProtoMsg): _20.SubmitSignatureResponse;
                toProto(message: _20.SubmitSignatureResponse): Uint8Array;
                toProtoMsg(message: _20.SubmitSignatureResponse): _20.SubmitSignatureResponseProtoMsg;
            };
            RotateKeyRequest: {
                typeUrl: string;
                encode(message: _20.RotateKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.RotateKeyRequest;
                fromPartial(object: Partial<_20.RotateKeyRequest>): _20.RotateKeyRequest;
                fromAmino(object: _20.RotateKeyRequestAmino): _20.RotateKeyRequest;
                toAmino(message: _20.RotateKeyRequest): _20.RotateKeyRequestAmino;
                fromAminoMsg(object: _20.RotateKeyRequestAminoMsg): _20.RotateKeyRequest;
                fromProtoMsg(message: _20.RotateKeyRequestProtoMsg): _20.RotateKeyRequest;
                toProto(message: _20.RotateKeyRequest): Uint8Array;
                toProtoMsg(message: _20.RotateKeyRequest): _20.RotateKeyRequestProtoMsg;
            };
            RotateKeyResponse: {
                typeUrl: string;
                encode(_: _20.RotateKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.RotateKeyResponse;
                fromPartial(_: Partial<_20.RotateKeyResponse>): _20.RotateKeyResponse;
                fromAmino(_: _20.RotateKeyResponseAmino): _20.RotateKeyResponse;
                toAmino(_: _20.RotateKeyResponse): _20.RotateKeyResponseAmino;
                fromAminoMsg(object: _20.RotateKeyResponseAminoMsg): _20.RotateKeyResponse;
                fromProtoMsg(message: _20.RotateKeyResponseProtoMsg): _20.RotateKeyResponse;
                toProto(message: _20.RotateKeyResponse): Uint8Array;
                toProtoMsg(message: _20.RotateKeyResponse): _20.RotateKeyResponseProtoMsg;
            };
            KeygenOptOutRequest: {
                typeUrl: string;
                encode(message: _20.KeygenOptOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.KeygenOptOutRequest;
                fromPartial(object: Partial<_20.KeygenOptOutRequest>): _20.KeygenOptOutRequest;
                fromAmino(object: _20.KeygenOptOutRequestAmino): _20.KeygenOptOutRequest;
                toAmino(message: _20.KeygenOptOutRequest): _20.KeygenOptOutRequestAmino;
                fromAminoMsg(object: _20.KeygenOptOutRequestAminoMsg): _20.KeygenOptOutRequest;
                fromProtoMsg(message: _20.KeygenOptOutRequestProtoMsg): _20.KeygenOptOutRequest;
                toProto(message: _20.KeygenOptOutRequest): Uint8Array;
                toProtoMsg(message: _20.KeygenOptOutRequest): _20.KeygenOptOutRequestProtoMsg;
            };
            KeygenOptOutResponse: {
                typeUrl: string;
                encode(_: _20.KeygenOptOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.KeygenOptOutResponse;
                fromPartial(_: Partial<_20.KeygenOptOutResponse>): _20.KeygenOptOutResponse;
                fromAmino(_: _20.KeygenOptOutResponseAmino): _20.KeygenOptOutResponse;
                toAmino(_: _20.KeygenOptOutResponse): _20.KeygenOptOutResponseAmino;
                fromAminoMsg(object: _20.KeygenOptOutResponseAminoMsg): _20.KeygenOptOutResponse;
                fromProtoMsg(message: _20.KeygenOptOutResponseProtoMsg): _20.KeygenOptOutResponse;
                toProto(message: _20.KeygenOptOutResponse): Uint8Array;
                toProtoMsg(message: _20.KeygenOptOutResponse): _20.KeygenOptOutResponseProtoMsg;
            };
            KeygenOptInRequest: {
                typeUrl: string;
                encode(message: _20.KeygenOptInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.KeygenOptInRequest;
                fromPartial(object: Partial<_20.KeygenOptInRequest>): _20.KeygenOptInRequest;
                fromAmino(object: _20.KeygenOptInRequestAmino): _20.KeygenOptInRequest;
                toAmino(message: _20.KeygenOptInRequest): _20.KeygenOptInRequestAmino;
                fromAminoMsg(object: _20.KeygenOptInRequestAminoMsg): _20.KeygenOptInRequest;
                fromProtoMsg(message: _20.KeygenOptInRequestProtoMsg): _20.KeygenOptInRequest;
                toProto(message: _20.KeygenOptInRequest): Uint8Array;
                toProtoMsg(message: _20.KeygenOptInRequest): _20.KeygenOptInRequestProtoMsg;
            };
            KeygenOptInResponse: {
                typeUrl: string;
                encode(_: _20.KeygenOptInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.KeygenOptInResponse;
                fromPartial(_: Partial<_20.KeygenOptInResponse>): _20.KeygenOptInResponse;
                fromAmino(_: _20.KeygenOptInResponseAmino): _20.KeygenOptInResponse;
                toAmino(_: _20.KeygenOptInResponse): _20.KeygenOptInResponseAmino;
                fromAminoMsg(object: _20.KeygenOptInResponseAminoMsg): _20.KeygenOptInResponse;
                fromProtoMsg(message: _20.KeygenOptInResponseProtoMsg): _20.KeygenOptInResponse;
                toProto(message: _20.KeygenOptInResponse): Uint8Array;
                toProtoMsg(message: _20.KeygenOptInResponse): _20.KeygenOptInResponseProtoMsg;
            };
            KeyIDRequest: {
                typeUrl: string;
                encode(message: _18.KeyIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.KeyIDRequest;
                fromPartial(object: Partial<_18.KeyIDRequest>): _18.KeyIDRequest;
                fromAmino(object: _18.KeyIDRequestAmino): _18.KeyIDRequest;
                toAmino(message: _18.KeyIDRequest): _18.KeyIDRequestAmino;
                fromAminoMsg(object: _18.KeyIDRequestAminoMsg): _18.KeyIDRequest;
                fromProtoMsg(message: _18.KeyIDRequestProtoMsg): _18.KeyIDRequest;
                toProto(message: _18.KeyIDRequest): Uint8Array;
                toProtoMsg(message: _18.KeyIDRequest): _18.KeyIDRequestProtoMsg;
            };
            KeyIDResponse: {
                typeUrl: string;
                encode(message: _18.KeyIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.KeyIDResponse;
                fromPartial(object: Partial<_18.KeyIDResponse>): _18.KeyIDResponse;
                fromAmino(object: _18.KeyIDResponseAmino): _18.KeyIDResponse;
                toAmino(message: _18.KeyIDResponse): _18.KeyIDResponseAmino;
                fromAminoMsg(object: _18.KeyIDResponseAminoMsg): _18.KeyIDResponse;
                fromProtoMsg(message: _18.KeyIDResponseProtoMsg): _18.KeyIDResponse;
                toProto(message: _18.KeyIDResponse): Uint8Array;
                toProtoMsg(message: _18.KeyIDResponse): _18.KeyIDResponseProtoMsg;
            };
            NextKeyIDRequest: {
                typeUrl: string;
                encode(message: _18.NextKeyIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.NextKeyIDRequest;
                fromPartial(object: Partial<_18.NextKeyIDRequest>): _18.NextKeyIDRequest;
                fromAmino(object: _18.NextKeyIDRequestAmino): _18.NextKeyIDRequest;
                toAmino(message: _18.NextKeyIDRequest): _18.NextKeyIDRequestAmino;
                fromAminoMsg(object: _18.NextKeyIDRequestAminoMsg): _18.NextKeyIDRequest;
                fromProtoMsg(message: _18.NextKeyIDRequestProtoMsg): _18.NextKeyIDRequest;
                toProto(message: _18.NextKeyIDRequest): Uint8Array;
                toProtoMsg(message: _18.NextKeyIDRequest): _18.NextKeyIDRequestProtoMsg;
            };
            NextKeyIDResponse: {
                typeUrl: string;
                encode(message: _18.NextKeyIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.NextKeyIDResponse;
                fromPartial(object: Partial<_18.NextKeyIDResponse>): _18.NextKeyIDResponse;
                fromAmino(object: _18.NextKeyIDResponseAmino): _18.NextKeyIDResponse;
                toAmino(message: _18.NextKeyIDResponse): _18.NextKeyIDResponseAmino;
                fromAminoMsg(object: _18.NextKeyIDResponseAminoMsg): _18.NextKeyIDResponse;
                fromProtoMsg(message: _18.NextKeyIDResponseProtoMsg): _18.NextKeyIDResponse;
                toProto(message: _18.NextKeyIDResponse): Uint8Array;
                toProtoMsg(message: _18.NextKeyIDResponse): _18.NextKeyIDResponseProtoMsg;
            };
            KeyRequest: {
                typeUrl: string;
                encode(message: _18.KeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.KeyRequest;
                fromPartial(object: Partial<_18.KeyRequest>): _18.KeyRequest;
                fromAmino(object: _18.KeyRequestAmino): _18.KeyRequest;
                toAmino(message: _18.KeyRequest): _18.KeyRequestAmino;
                fromAminoMsg(object: _18.KeyRequestAminoMsg): _18.KeyRequest;
                fromProtoMsg(message: _18.KeyRequestProtoMsg): _18.KeyRequest;
                toProto(message: _18.KeyRequest): Uint8Array;
                toProtoMsg(message: _18.KeyRequest): _18.KeyRequestProtoMsg;
            };
            KeygenParticipant: {
                typeUrl: string;
                encode(message: _18.KeygenParticipant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.KeygenParticipant;
                fromPartial(object: Partial<_18.KeygenParticipant>): _18.KeygenParticipant;
                fromAmino(object: _18.KeygenParticipantAmino): _18.KeygenParticipant;
                toAmino(message: _18.KeygenParticipant): _18.KeygenParticipantAmino;
                fromAminoMsg(object: _18.KeygenParticipantAminoMsg): _18.KeygenParticipant;
                fromProtoMsg(message: _18.KeygenParticipantProtoMsg): _18.KeygenParticipant;
                toProto(message: _18.KeygenParticipant): Uint8Array;
                toProtoMsg(message: _18.KeygenParticipant): _18.KeygenParticipantProtoMsg;
            };
            KeyResponse: {
                typeUrl: string;
                encode(message: _18.KeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.KeyResponse;
                fromPartial(object: Partial<_18.KeyResponse>): _18.KeyResponse;
                fromAmino(object: _18.KeyResponseAmino): _18.KeyResponse;
                toAmino(message: _18.KeyResponse): _18.KeyResponseAmino;
                fromAminoMsg(object: _18.KeyResponseAminoMsg): _18.KeyResponse;
                fromProtoMsg(message: _18.KeyResponseProtoMsg): _18.KeyResponse;
                toProto(message: _18.KeyResponse): Uint8Array;
                toProtoMsg(message: _18.KeyResponse): _18.KeyResponseProtoMsg;
            };
            KeygenSessionRequest: {
                typeUrl: string;
                encode(message: _18.KeygenSessionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.KeygenSessionRequest;
                fromPartial(object: Partial<_18.KeygenSessionRequest>): _18.KeygenSessionRequest;
                fromAmino(object: _18.KeygenSessionRequestAmino): _18.KeygenSessionRequest;
                toAmino(message: _18.KeygenSessionRequest): _18.KeygenSessionRequestAmino;
                fromAminoMsg(object: _18.KeygenSessionRequestAminoMsg): _18.KeygenSessionRequest;
                fromProtoMsg(message: _18.KeygenSessionRequestProtoMsg): _18.KeygenSessionRequest;
                toProto(message: _18.KeygenSessionRequest): Uint8Array;
                toProtoMsg(message: _18.KeygenSessionRequest): _18.KeygenSessionRequestProtoMsg;
            };
            KeygenSessionResponse: {
                typeUrl: string;
                encode(message: _18.KeygenSessionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.KeygenSessionResponse;
                fromPartial(object: Partial<_18.KeygenSessionResponse>): _18.KeygenSessionResponse;
                fromAmino(object: _18.KeygenSessionResponseAmino): _18.KeygenSessionResponse;
                toAmino(message: _18.KeygenSessionResponse): _18.KeygenSessionResponseAmino;
                fromAminoMsg(object: _18.KeygenSessionResponseAminoMsg): _18.KeygenSessionResponse;
                fromProtoMsg(message: _18.KeygenSessionResponseProtoMsg): _18.KeygenSessionResponse;
                toProto(message: _18.KeygenSessionResponse): Uint8Array;
                toProtoMsg(message: _18.KeygenSessionResponse): _18.KeygenSessionResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _17.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Params;
                fromPartial(object: Partial<_17.Params>): _17.Params;
                fromAmino(object: _17.ParamsAmino): _17.Params;
                toAmino(message: _17.Params): _17.ParamsAmino;
                fromAminoMsg(object: _17.ParamsAminoMsg): _17.Params;
                fromProtoMsg(message: _17.ParamsProtoMsg): _17.Params;
                toProto(message: _17.Params): Uint8Array;
                toProtoMsg(message: _17.Params): _17.ParamsProtoMsg;
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
            KeygenStarted: {
                typeUrl: string;
                encode(message: _15.KeygenStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.KeygenStarted;
                fromPartial(object: Partial<_15.KeygenStarted>): _15.KeygenStarted;
                fromAmino(object: _15.KeygenStartedAmino): _15.KeygenStarted;
                toAmino(message: _15.KeygenStarted): _15.KeygenStartedAmino;
                fromAminoMsg(object: _15.KeygenStartedAminoMsg): _15.KeygenStarted;
                fromProtoMsg(message: _15.KeygenStartedProtoMsg): _15.KeygenStarted;
                toProto(message: _15.KeygenStarted): Uint8Array;
                toProtoMsg(message: _15.KeygenStarted): _15.KeygenStartedProtoMsg;
            };
            KeygenCompleted: {
                typeUrl: string;
                encode(message: _15.KeygenCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.KeygenCompleted;
                fromPartial(object: Partial<_15.KeygenCompleted>): _15.KeygenCompleted;
                fromAmino(object: _15.KeygenCompletedAmino): _15.KeygenCompleted;
                toAmino(message: _15.KeygenCompleted): _15.KeygenCompletedAmino;
                fromAminoMsg(object: _15.KeygenCompletedAminoMsg): _15.KeygenCompleted;
                fromProtoMsg(message: _15.KeygenCompletedProtoMsg): _15.KeygenCompleted;
                toProto(message: _15.KeygenCompleted): Uint8Array;
                toProtoMsg(message: _15.KeygenCompleted): _15.KeygenCompletedProtoMsg;
            };
            KeygenExpired: {
                typeUrl: string;
                encode(message: _15.KeygenExpired, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.KeygenExpired;
                fromPartial(object: Partial<_15.KeygenExpired>): _15.KeygenExpired;
                fromAmino(object: _15.KeygenExpiredAmino): _15.KeygenExpired;
                toAmino(message: _15.KeygenExpired): _15.KeygenExpiredAmino;
                fromAminoMsg(object: _15.KeygenExpiredAminoMsg): _15.KeygenExpired;
                fromProtoMsg(message: _15.KeygenExpiredProtoMsg): _15.KeygenExpired;
                toProto(message: _15.KeygenExpired): Uint8Array;
                toProtoMsg(message: _15.KeygenExpired): _15.KeygenExpiredProtoMsg;
            };
            PubKeySubmitted: {
                typeUrl: string;
                encode(message: _15.PubKeySubmitted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.PubKeySubmitted;
                fromPartial(object: Partial<_15.PubKeySubmitted>): _15.PubKeySubmitted;
                fromAmino(object: _15.PubKeySubmittedAmino): _15.PubKeySubmitted;
                toAmino(message: _15.PubKeySubmitted): _15.PubKeySubmittedAmino;
                fromAminoMsg(object: _15.PubKeySubmittedAminoMsg): _15.PubKeySubmitted;
                fromProtoMsg(message: _15.PubKeySubmittedProtoMsg): _15.PubKeySubmitted;
                toProto(message: _15.PubKeySubmitted): Uint8Array;
                toProtoMsg(message: _15.PubKeySubmitted): _15.PubKeySubmittedProtoMsg;
            };
            SigningStarted_PubKeysEntry: {
                encode(message: _15.SigningStarted_PubKeysEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.SigningStarted_PubKeysEntry;
                fromPartial(object: Partial<_15.SigningStarted_PubKeysEntry>): _15.SigningStarted_PubKeysEntry;
                fromAmino(object: _15.SigningStarted_PubKeysEntryAmino): _15.SigningStarted_PubKeysEntry;
                toAmino(message: _15.SigningStarted_PubKeysEntry): _15.SigningStarted_PubKeysEntryAmino;
                fromAminoMsg(object: _15.SigningStarted_PubKeysEntryAminoMsg): _15.SigningStarted_PubKeysEntry;
                fromProtoMsg(message: _15.SigningStarted_PubKeysEntryProtoMsg): _15.SigningStarted_PubKeysEntry;
                toProto(message: _15.SigningStarted_PubKeysEntry): Uint8Array;
            };
            SigningStarted: {
                typeUrl: string;
                encode(message: _15.SigningStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.SigningStarted;
                fromPartial(object: Partial<_15.SigningStarted>): _15.SigningStarted;
                fromAmino(object: _15.SigningStartedAmino): _15.SigningStarted;
                toAmino(message: _15.SigningStarted): _15.SigningStartedAmino;
                fromAminoMsg(object: _15.SigningStartedAminoMsg): _15.SigningStarted;
                fromProtoMsg(message: _15.SigningStartedProtoMsg): _15.SigningStarted;
                toProto(message: _15.SigningStarted): Uint8Array;
                toProtoMsg(message: _15.SigningStarted): _15.SigningStartedProtoMsg;
            };
            SigningCompleted: {
                typeUrl: string;
                encode(message: _15.SigningCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.SigningCompleted;
                fromPartial(object: Partial<_15.SigningCompleted>): _15.SigningCompleted;
                fromAmino(object: _15.SigningCompletedAmino): _15.SigningCompleted;
                toAmino(message: _15.SigningCompleted): _15.SigningCompletedAmino;
                fromAminoMsg(object: _15.SigningCompletedAminoMsg): _15.SigningCompleted;
                fromProtoMsg(message: _15.SigningCompletedProtoMsg): _15.SigningCompleted;
                toProto(message: _15.SigningCompleted): Uint8Array;
                toProtoMsg(message: _15.SigningCompleted): _15.SigningCompletedProtoMsg;
            };
            SigningExpired: {
                typeUrl: string;
                encode(message: _15.SigningExpired, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.SigningExpired;
                fromPartial(object: Partial<_15.SigningExpired>): _15.SigningExpired;
                fromAmino(object: _15.SigningExpiredAmino): _15.SigningExpired;
                toAmino(message: _15.SigningExpired): _15.SigningExpiredAmino;
                fromAminoMsg(object: _15.SigningExpiredAminoMsg): _15.SigningExpired;
                fromProtoMsg(message: _15.SigningExpiredProtoMsg): _15.SigningExpired;
                toProto(message: _15.SigningExpired): Uint8Array;
                toProtoMsg(message: _15.SigningExpired): _15.SigningExpiredProtoMsg;
            };
            SignatureSubmitted: {
                typeUrl: string;
                encode(message: _15.SignatureSubmitted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.SignatureSubmitted;
                fromPartial(object: Partial<_15.SignatureSubmitted>): _15.SignatureSubmitted;
                fromAmino(object: _15.SignatureSubmittedAmino): _15.SignatureSubmitted;
                toAmino(message: _15.SignatureSubmitted): _15.SignatureSubmittedAmino;
                fromAminoMsg(object: _15.SignatureSubmittedAminoMsg): _15.SignatureSubmitted;
                fromProtoMsg(message: _15.SignatureSubmittedProtoMsg): _15.SignatureSubmitted;
                toProto(message: _15.SignatureSubmitted): Uint8Array;
                toProtoMsg(message: _15.SignatureSubmitted): _15.SignatureSubmittedProtoMsg;
            };
            KeyAssigned: {
                typeUrl: string;
                encode(message: _15.KeyAssigned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.KeyAssigned;
                fromPartial(object: Partial<_15.KeyAssigned>): _15.KeyAssigned;
                fromAmino(object: _15.KeyAssignedAmino): _15.KeyAssigned;
                toAmino(message: _15.KeyAssigned): _15.KeyAssignedAmino;
                fromAminoMsg(object: _15.KeyAssignedAminoMsg): _15.KeyAssigned;
                fromProtoMsg(message: _15.KeyAssignedProtoMsg): _15.KeyAssigned;
                toProto(message: _15.KeyAssigned): Uint8Array;
                toProtoMsg(message: _15.KeyAssigned): _15.KeyAssignedProtoMsg;
            };
            KeyRotated: {
                typeUrl: string;
                encode(message: _15.KeyRotated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.KeyRotated;
                fromPartial(object: Partial<_15.KeyRotated>): _15.KeyRotated;
                fromAmino(object: _15.KeyRotatedAmino): _15.KeyRotated;
                toAmino(message: _15.KeyRotated): _15.KeyRotatedAmino;
                fromAminoMsg(object: _15.KeyRotatedAminoMsg): _15.KeyRotated;
                fromProtoMsg(message: _15.KeyRotatedProtoMsg): _15.KeyRotated;
                toProto(message: _15.KeyRotated): Uint8Array;
                toProtoMsg(message: _15.KeyRotated): _15.KeyRotatedProtoMsg;
            };
            KeygenOptOut: {
                typeUrl: string;
                encode(message: _15.KeygenOptOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.KeygenOptOut;
                fromPartial(object: Partial<_15.KeygenOptOut>): _15.KeygenOptOut;
                fromAmino(object: _15.KeygenOptOutAmino): _15.KeygenOptOut;
                toAmino(message: _15.KeygenOptOut): _15.KeygenOptOutAmino;
                fromAminoMsg(object: _15.KeygenOptOutAminoMsg): _15.KeygenOptOut;
                fromProtoMsg(message: _15.KeygenOptOutProtoMsg): _15.KeygenOptOut;
                toProto(message: _15.KeygenOptOut): Uint8Array;
                toProtoMsg(message: _15.KeygenOptOut): _15.KeygenOptOutProtoMsg;
            };
            KeygenOptIn: {
                typeUrl: string;
                encode(message: _15.KeygenOptIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.KeygenOptIn;
                fromPartial(object: Partial<_15.KeygenOptIn>): _15.KeygenOptIn;
                fromAmino(object: _15.KeygenOptInAmino): _15.KeygenOptIn;
                toAmino(message: _15.KeygenOptIn): _15.KeygenOptInAmino;
                fromAminoMsg(object: _15.KeygenOptInAminoMsg): _15.KeygenOptIn;
                fromProtoMsg(message: _15.KeygenOptInProtoMsg): _15.KeygenOptIn;
                toProto(message: _15.KeygenOptIn): Uint8Array;
                toProtoMsg(message: _15.KeygenOptIn): _15.KeygenOptInProtoMsg;
            };
        };
    }
    namespace nexus {
        namespace exported {
            const v1beta1: {
                transferStateFromJSON(object: any): _22.TransferState;
                transferStateToJSON(object: _22.TransferState): string;
                transferDirectionFromJSON(object: any): _22.TransferDirection;
                transferDirectionToJSON(object: _22.TransferDirection): string;
                generalMessage_StatusFromJSON(object: any): _22.GeneralMessage_Status;
                generalMessage_StatusToJSON(object: _22.GeneralMessage_Status): string;
                TransferState: typeof _22.TransferState;
                TransferStateSDKType: typeof _22.TransferState;
                TransferStateAmino: typeof _22.TransferState;
                TransferDirection: typeof _22.TransferDirection;
                TransferDirectionSDKType: typeof _22.TransferDirection;
                TransferDirectionAmino: typeof _22.TransferDirection;
                GeneralMessage_Status: typeof _22.GeneralMessage_Status;
                GeneralMessage_StatusSDKType: typeof _22.GeneralMessage_Status;
                GeneralMessage_StatusAmino: typeof _22.GeneralMessage_Status;
                Chain: {
                    typeUrl: string;
                    encode(message: _22.Chain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.Chain;
                    fromPartial(object: Partial<_22.Chain>): _22.Chain;
                    fromAmino(object: _22.ChainAmino): _22.Chain;
                    toAmino(message: _22.Chain): _22.ChainAmino;
                    fromAminoMsg(object: _22.ChainAminoMsg): _22.Chain;
                    fromProtoMsg(message: _22.ChainProtoMsg): _22.Chain;
                    toProto(message: _22.Chain): Uint8Array;
                    toProtoMsg(message: _22.Chain): _22.ChainProtoMsg;
                };
                CrossChainAddress: {
                    typeUrl: string;
                    encode(message: _22.CrossChainAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.CrossChainAddress;
                    fromPartial(object: Partial<_22.CrossChainAddress>): _22.CrossChainAddress;
                    fromAmino(object: _22.CrossChainAddressAmino): _22.CrossChainAddress;
                    toAmino(message: _22.CrossChainAddress): _22.CrossChainAddressAmino;
                    fromAminoMsg(object: _22.CrossChainAddressAminoMsg): _22.CrossChainAddress;
                    fromProtoMsg(message: _22.CrossChainAddressProtoMsg): _22.CrossChainAddress;
                    toProto(message: _22.CrossChainAddress): Uint8Array;
                    toProtoMsg(message: _22.CrossChainAddress): _22.CrossChainAddressProtoMsg;
                };
                CrossChainTransfer: {
                    typeUrl: string;
                    encode(message: _22.CrossChainTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.CrossChainTransfer;
                    fromPartial(object: Partial<_22.CrossChainTransfer>): _22.CrossChainTransfer;
                    fromAmino(object: _22.CrossChainTransferAmino): _22.CrossChainTransfer;
                    toAmino(message: _22.CrossChainTransfer): _22.CrossChainTransferAmino;
                    fromAminoMsg(object: _22.CrossChainTransferAminoMsg): _22.CrossChainTransfer;
                    fromProtoMsg(message: _22.CrossChainTransferProtoMsg): _22.CrossChainTransfer;
                    toProto(message: _22.CrossChainTransfer): Uint8Array;
                    toProtoMsg(message: _22.CrossChainTransfer): _22.CrossChainTransferProtoMsg;
                };
                TransferFee: {
                    typeUrl: string;
                    encode(message: _22.TransferFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.TransferFee;
                    fromPartial(object: Partial<_22.TransferFee>): _22.TransferFee;
                    fromAmino(object: _22.TransferFeeAmino): _22.TransferFee;
                    toAmino(message: _22.TransferFee): _22.TransferFeeAmino;
                    fromAminoMsg(object: _22.TransferFeeAminoMsg): _22.TransferFee;
                    fromProtoMsg(message: _22.TransferFeeProtoMsg): _22.TransferFee;
                    toProto(message: _22.TransferFee): Uint8Array;
                    toProtoMsg(message: _22.TransferFee): _22.TransferFeeProtoMsg;
                };
                FeeInfo: {
                    typeUrl: string;
                    encode(message: _22.FeeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.FeeInfo;
                    fromPartial(object: Partial<_22.FeeInfo>): _22.FeeInfo;
                    fromAmino(object: _22.FeeInfoAmino): _22.FeeInfo;
                    toAmino(message: _22.FeeInfo): _22.FeeInfoAmino;
                    fromAminoMsg(object: _22.FeeInfoAminoMsg): _22.FeeInfo;
                    fromProtoMsg(message: _22.FeeInfoProtoMsg): _22.FeeInfo;
                    toProto(message: _22.FeeInfo): Uint8Array;
                    toProtoMsg(message: _22.FeeInfo): _22.FeeInfoProtoMsg;
                };
                Asset: {
                    typeUrl: string;
                    encode(message: _22.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.Asset;
                    fromPartial(object: Partial<_22.Asset>): _22.Asset;
                    fromAmino(object: _22.AssetAmino): _22.Asset;
                    toAmino(message: _22.Asset): _22.AssetAmino;
                    fromAminoMsg(object: _22.AssetAminoMsg): _22.Asset;
                    fromProtoMsg(message: _22.AssetProtoMsg): _22.Asset;
                    toProto(message: _22.Asset): Uint8Array;
                    toProtoMsg(message: _22.Asset): _22.AssetProtoMsg;
                };
                GeneralMessage: {
                    typeUrl: string;
                    encode(message: _22.GeneralMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GeneralMessage;
                    fromPartial(object: Partial<_22.GeneralMessage>): _22.GeneralMessage;
                    fromAmino(object: _22.GeneralMessageAmino): _22.GeneralMessage;
                    toAmino(message: _22.GeneralMessage): _22.GeneralMessageAmino;
                    fromAminoMsg(object: _22.GeneralMessageAminoMsg): _22.GeneralMessage;
                    fromProtoMsg(message: _22.GeneralMessageProtoMsg): _22.GeneralMessage;
                    toProto(message: _22.GeneralMessage): Uint8Array;
                    toProtoMsg(message: _22.GeneralMessage): _22.GeneralMessageProtoMsg;
                };
            };
        }
        const v1beta1: {
            MaintainerState: {
                typeUrl: string;
                encode(message: _29.MaintainerState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MaintainerState;
                fromPartial(object: Partial<_29.MaintainerState>): _29.MaintainerState;
                fromAmino(object: _29.MaintainerStateAmino): _29.MaintainerState;
                toAmino(message: _29.MaintainerState): _29.MaintainerStateAmino;
                fromAminoMsg(object: _29.MaintainerStateAminoMsg): _29.MaintainerState;
                fromProtoMsg(message: _29.MaintainerStateProtoMsg): _29.MaintainerState;
                toProto(message: _29.MaintainerState): Uint8Array;
                toProtoMsg(message: _29.MaintainerState): _29.MaintainerStateProtoMsg;
            };
            ChainState: {
                typeUrl: string;
                encode(message: _29.ChainState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.ChainState;
                fromPartial(object: Partial<_29.ChainState>): _29.ChainState;
                fromAmino(object: _29.ChainStateAmino): _29.ChainState;
                toAmino(message: _29.ChainState): _29.ChainStateAmino;
                fromAminoMsg(object: _29.ChainStateAminoMsg): _29.ChainState;
                fromProtoMsg(message: _29.ChainStateProtoMsg): _29.ChainState;
                toProto(message: _29.ChainState): Uint8Array;
                toProtoMsg(message: _29.ChainState): _29.ChainStateProtoMsg;
            };
            LinkedAddresses: {
                typeUrl: string;
                encode(message: _29.LinkedAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.LinkedAddresses;
                fromPartial(object: Partial<_29.LinkedAddresses>): _29.LinkedAddresses;
                fromAmino(object: _29.LinkedAddressesAmino): _29.LinkedAddresses;
                toAmino(message: _29.LinkedAddresses): _29.LinkedAddressesAmino;
                fromAminoMsg(object: _29.LinkedAddressesAminoMsg): _29.LinkedAddresses;
                fromProtoMsg(message: _29.LinkedAddressesProtoMsg): _29.LinkedAddresses;
                toProto(message: _29.LinkedAddresses): Uint8Array;
                toProtoMsg(message: _29.LinkedAddresses): _29.LinkedAddressesProtoMsg;
            };
            RateLimit: {
                typeUrl: string;
                encode(message: _29.RateLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.RateLimit;
                fromPartial(object: Partial<_29.RateLimit>): _29.RateLimit;
                fromAmino(object: _29.RateLimitAmino): _29.RateLimit;
                toAmino(message: _29.RateLimit): _29.RateLimitAmino;
                fromAminoMsg(object: _29.RateLimitAminoMsg): _29.RateLimit;
                fromProtoMsg(message: _29.RateLimitProtoMsg): _29.RateLimit;
                toProto(message: _29.RateLimit): Uint8Array;
                toProtoMsg(message: _29.RateLimit): _29.RateLimitProtoMsg;
            };
            TransferEpoch: {
                typeUrl: string;
                encode(message: _29.TransferEpoch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.TransferEpoch;
                fromPartial(object: Partial<_29.TransferEpoch>): _29.TransferEpoch;
                fromAmino(object: _29.TransferEpochAmino): _29.TransferEpoch;
                toAmino(message: _29.TransferEpoch): _29.TransferEpochAmino;
                fromAminoMsg(object: _29.TransferEpochAminoMsg): _29.TransferEpoch;
                fromProtoMsg(message: _29.TransferEpochProtoMsg): _29.TransferEpoch;
                toProto(message: _29.TransferEpoch): Uint8Array;
                toProtoMsg(message: _29.TransferEpoch): _29.TransferEpochProtoMsg;
            };
            RegisterChainMaintainerRequest: {
                typeUrl: string;
                encode(message: _28.RegisterChainMaintainerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.RegisterChainMaintainerRequest;
                fromPartial(object: Partial<_28.RegisterChainMaintainerRequest>): _28.RegisterChainMaintainerRequest;
                fromAmino(object: _28.RegisterChainMaintainerRequestAmino): _28.RegisterChainMaintainerRequest;
                toAmino(message: _28.RegisterChainMaintainerRequest): _28.RegisterChainMaintainerRequestAmino;
                fromAminoMsg(object: _28.RegisterChainMaintainerRequestAminoMsg): _28.RegisterChainMaintainerRequest;
                fromProtoMsg(message: _28.RegisterChainMaintainerRequestProtoMsg): _28.RegisterChainMaintainerRequest;
                toProto(message: _28.RegisterChainMaintainerRequest): Uint8Array;
                toProtoMsg(message: _28.RegisterChainMaintainerRequest): _28.RegisterChainMaintainerRequestProtoMsg;
            };
            RegisterChainMaintainerResponse: {
                typeUrl: string;
                encode(_: _28.RegisterChainMaintainerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.RegisterChainMaintainerResponse;
                fromPartial(_: Partial<_28.RegisterChainMaintainerResponse>): _28.RegisterChainMaintainerResponse;
                fromAmino(_: _28.RegisterChainMaintainerResponseAmino): _28.RegisterChainMaintainerResponse;
                toAmino(_: _28.RegisterChainMaintainerResponse): _28.RegisterChainMaintainerResponseAmino;
                fromAminoMsg(object: _28.RegisterChainMaintainerResponseAminoMsg): _28.RegisterChainMaintainerResponse;
                fromProtoMsg(message: _28.RegisterChainMaintainerResponseProtoMsg): _28.RegisterChainMaintainerResponse;
                toProto(message: _28.RegisterChainMaintainerResponse): Uint8Array;
                toProtoMsg(message: _28.RegisterChainMaintainerResponse): _28.RegisterChainMaintainerResponseProtoMsg;
            };
            DeregisterChainMaintainerRequest: {
                typeUrl: string;
                encode(message: _28.DeregisterChainMaintainerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.DeregisterChainMaintainerRequest;
                fromPartial(object: Partial<_28.DeregisterChainMaintainerRequest>): _28.DeregisterChainMaintainerRequest;
                fromAmino(object: _28.DeregisterChainMaintainerRequestAmino): _28.DeregisterChainMaintainerRequest;
                toAmino(message: _28.DeregisterChainMaintainerRequest): _28.DeregisterChainMaintainerRequestAmino;
                fromAminoMsg(object: _28.DeregisterChainMaintainerRequestAminoMsg): _28.DeregisterChainMaintainerRequest;
                fromProtoMsg(message: _28.DeregisterChainMaintainerRequestProtoMsg): _28.DeregisterChainMaintainerRequest;
                toProto(message: _28.DeregisterChainMaintainerRequest): Uint8Array;
                toProtoMsg(message: _28.DeregisterChainMaintainerRequest): _28.DeregisterChainMaintainerRequestProtoMsg;
            };
            DeregisterChainMaintainerResponse: {
                typeUrl: string;
                encode(_: _28.DeregisterChainMaintainerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.DeregisterChainMaintainerResponse;
                fromPartial(_: Partial<_28.DeregisterChainMaintainerResponse>): _28.DeregisterChainMaintainerResponse;
                fromAmino(_: _28.DeregisterChainMaintainerResponseAmino): _28.DeregisterChainMaintainerResponse;
                toAmino(_: _28.DeregisterChainMaintainerResponse): _28.DeregisterChainMaintainerResponseAmino;
                fromAminoMsg(object: _28.DeregisterChainMaintainerResponseAminoMsg): _28.DeregisterChainMaintainerResponse;
                fromProtoMsg(message: _28.DeregisterChainMaintainerResponseProtoMsg): _28.DeregisterChainMaintainerResponse;
                toProto(message: _28.DeregisterChainMaintainerResponse): Uint8Array;
                toProtoMsg(message: _28.DeregisterChainMaintainerResponse): _28.DeregisterChainMaintainerResponseProtoMsg;
            };
            ActivateChainRequest: {
                typeUrl: string;
                encode(message: _28.ActivateChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.ActivateChainRequest;
                fromPartial(object: Partial<_28.ActivateChainRequest>): _28.ActivateChainRequest;
                fromAmino(object: _28.ActivateChainRequestAmino): _28.ActivateChainRequest;
                toAmino(message: _28.ActivateChainRequest): _28.ActivateChainRequestAmino;
                fromAminoMsg(object: _28.ActivateChainRequestAminoMsg): _28.ActivateChainRequest;
                fromProtoMsg(message: _28.ActivateChainRequestProtoMsg): _28.ActivateChainRequest;
                toProto(message: _28.ActivateChainRequest): Uint8Array;
                toProtoMsg(message: _28.ActivateChainRequest): _28.ActivateChainRequestProtoMsg;
            };
            ActivateChainResponse: {
                typeUrl: string;
                encode(_: _28.ActivateChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.ActivateChainResponse;
                fromPartial(_: Partial<_28.ActivateChainResponse>): _28.ActivateChainResponse;
                fromAmino(_: _28.ActivateChainResponseAmino): _28.ActivateChainResponse;
                toAmino(_: _28.ActivateChainResponse): _28.ActivateChainResponseAmino;
                fromAminoMsg(object: _28.ActivateChainResponseAminoMsg): _28.ActivateChainResponse;
                fromProtoMsg(message: _28.ActivateChainResponseProtoMsg): _28.ActivateChainResponse;
                toProto(message: _28.ActivateChainResponse): Uint8Array;
                toProtoMsg(message: _28.ActivateChainResponse): _28.ActivateChainResponseProtoMsg;
            };
            DeactivateChainRequest: {
                typeUrl: string;
                encode(message: _28.DeactivateChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.DeactivateChainRequest;
                fromPartial(object: Partial<_28.DeactivateChainRequest>): _28.DeactivateChainRequest;
                fromAmino(object: _28.DeactivateChainRequestAmino): _28.DeactivateChainRequest;
                toAmino(message: _28.DeactivateChainRequest): _28.DeactivateChainRequestAmino;
                fromAminoMsg(object: _28.DeactivateChainRequestAminoMsg): _28.DeactivateChainRequest;
                fromProtoMsg(message: _28.DeactivateChainRequestProtoMsg): _28.DeactivateChainRequest;
                toProto(message: _28.DeactivateChainRequest): Uint8Array;
                toProtoMsg(message: _28.DeactivateChainRequest): _28.DeactivateChainRequestProtoMsg;
            };
            DeactivateChainResponse: {
                typeUrl: string;
                encode(_: _28.DeactivateChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.DeactivateChainResponse;
                fromPartial(_: Partial<_28.DeactivateChainResponse>): _28.DeactivateChainResponse;
                fromAmino(_: _28.DeactivateChainResponseAmino): _28.DeactivateChainResponse;
                toAmino(_: _28.DeactivateChainResponse): _28.DeactivateChainResponseAmino;
                fromAminoMsg(object: _28.DeactivateChainResponseAminoMsg): _28.DeactivateChainResponse;
                fromProtoMsg(message: _28.DeactivateChainResponseProtoMsg): _28.DeactivateChainResponse;
                toProto(message: _28.DeactivateChainResponse): Uint8Array;
                toProtoMsg(message: _28.DeactivateChainResponse): _28.DeactivateChainResponseProtoMsg;
            };
            RegisterAssetFeeRequest: {
                typeUrl: string;
                encode(message: _28.RegisterAssetFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.RegisterAssetFeeRequest;
                fromPartial(object: Partial<_28.RegisterAssetFeeRequest>): _28.RegisterAssetFeeRequest;
                fromAmino(object: _28.RegisterAssetFeeRequestAmino): _28.RegisterAssetFeeRequest;
                toAmino(message: _28.RegisterAssetFeeRequest): _28.RegisterAssetFeeRequestAmino;
                fromAminoMsg(object: _28.RegisterAssetFeeRequestAminoMsg): _28.RegisterAssetFeeRequest;
                fromProtoMsg(message: _28.RegisterAssetFeeRequestProtoMsg): _28.RegisterAssetFeeRequest;
                toProto(message: _28.RegisterAssetFeeRequest): Uint8Array;
                toProtoMsg(message: _28.RegisterAssetFeeRequest): _28.RegisterAssetFeeRequestProtoMsg;
            };
            RegisterAssetFeeResponse: {
                typeUrl: string;
                encode(_: _28.RegisterAssetFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.RegisterAssetFeeResponse;
                fromPartial(_: Partial<_28.RegisterAssetFeeResponse>): _28.RegisterAssetFeeResponse;
                fromAmino(_: _28.RegisterAssetFeeResponseAmino): _28.RegisterAssetFeeResponse;
                toAmino(_: _28.RegisterAssetFeeResponse): _28.RegisterAssetFeeResponseAmino;
                fromAminoMsg(object: _28.RegisterAssetFeeResponseAminoMsg): _28.RegisterAssetFeeResponse;
                fromProtoMsg(message: _28.RegisterAssetFeeResponseProtoMsg): _28.RegisterAssetFeeResponse;
                toProto(message: _28.RegisterAssetFeeResponse): Uint8Array;
                toProtoMsg(message: _28.RegisterAssetFeeResponse): _28.RegisterAssetFeeResponseProtoMsg;
            };
            SetTransferRateLimitRequest: {
                typeUrl: string;
                encode(message: _28.SetTransferRateLimitRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.SetTransferRateLimitRequest;
                fromPartial(object: Partial<_28.SetTransferRateLimitRequest>): _28.SetTransferRateLimitRequest;
                fromAmino(object: _28.SetTransferRateLimitRequestAmino): _28.SetTransferRateLimitRequest;
                toAmino(message: _28.SetTransferRateLimitRequest): _28.SetTransferRateLimitRequestAmino;
                fromAminoMsg(object: _28.SetTransferRateLimitRequestAminoMsg): _28.SetTransferRateLimitRequest;
                fromProtoMsg(message: _28.SetTransferRateLimitRequestProtoMsg): _28.SetTransferRateLimitRequest;
                toProto(message: _28.SetTransferRateLimitRequest): Uint8Array;
                toProtoMsg(message: _28.SetTransferRateLimitRequest): _28.SetTransferRateLimitRequestProtoMsg;
            };
            SetTransferRateLimitResponse: {
                typeUrl: string;
                encode(_: _28.SetTransferRateLimitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.SetTransferRateLimitResponse;
                fromPartial(_: Partial<_28.SetTransferRateLimitResponse>): _28.SetTransferRateLimitResponse;
                fromAmino(_: _28.SetTransferRateLimitResponseAmino): _28.SetTransferRateLimitResponse;
                toAmino(_: _28.SetTransferRateLimitResponse): _28.SetTransferRateLimitResponseAmino;
                fromAminoMsg(object: _28.SetTransferRateLimitResponseAminoMsg): _28.SetTransferRateLimitResponse;
                fromProtoMsg(message: _28.SetTransferRateLimitResponseProtoMsg): _28.SetTransferRateLimitResponse;
                toProto(message: _28.SetTransferRateLimitResponse): Uint8Array;
                toProtoMsg(message: _28.SetTransferRateLimitResponse): _28.SetTransferRateLimitResponseProtoMsg;
            };
            chainStatusFromJSON(object: any): _26.ChainStatus;
            chainStatusToJSON(object: _26.ChainStatus): string;
            ChainStatus: typeof _26.ChainStatus;
            ChainStatusSDKType: typeof _26.ChainStatus;
            ChainStatusAmino: typeof _26.ChainStatus;
            ChainMaintainersRequest: {
                typeUrl: string;
                encode(message: _26.ChainMaintainersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ChainMaintainersRequest;
                fromPartial(object: Partial<_26.ChainMaintainersRequest>): _26.ChainMaintainersRequest;
                fromAmino(object: _26.ChainMaintainersRequestAmino): _26.ChainMaintainersRequest;
                toAmino(message: _26.ChainMaintainersRequest): _26.ChainMaintainersRequestAmino;
                fromAminoMsg(object: _26.ChainMaintainersRequestAminoMsg): _26.ChainMaintainersRequest;
                fromProtoMsg(message: _26.ChainMaintainersRequestProtoMsg): _26.ChainMaintainersRequest;
                toProto(message: _26.ChainMaintainersRequest): Uint8Array;
                toProtoMsg(message: _26.ChainMaintainersRequest): _26.ChainMaintainersRequestProtoMsg;
            };
            ChainMaintainersResponse: {
                typeUrl: string;
                encode(message: _26.ChainMaintainersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ChainMaintainersResponse;
                fromPartial(object: Partial<_26.ChainMaintainersResponse>): _26.ChainMaintainersResponse;
                fromAmino(object: _26.ChainMaintainersResponseAmino): _26.ChainMaintainersResponse;
                toAmino(message: _26.ChainMaintainersResponse): _26.ChainMaintainersResponseAmino;
                fromAminoMsg(object: _26.ChainMaintainersResponseAminoMsg): _26.ChainMaintainersResponse;
                fromProtoMsg(message: _26.ChainMaintainersResponseProtoMsg): _26.ChainMaintainersResponse;
                toProto(message: _26.ChainMaintainersResponse): Uint8Array;
                toProtoMsg(message: _26.ChainMaintainersResponse): _26.ChainMaintainersResponseProtoMsg;
            };
            LatestDepositAddressRequest: {
                typeUrl: string;
                encode(message: _26.LatestDepositAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.LatestDepositAddressRequest;
                fromPartial(object: Partial<_26.LatestDepositAddressRequest>): _26.LatestDepositAddressRequest;
                fromAmino(object: _26.LatestDepositAddressRequestAmino): _26.LatestDepositAddressRequest;
                toAmino(message: _26.LatestDepositAddressRequest): _26.LatestDepositAddressRequestAmino;
                fromAminoMsg(object: _26.LatestDepositAddressRequestAminoMsg): _26.LatestDepositAddressRequest;
                fromProtoMsg(message: _26.LatestDepositAddressRequestProtoMsg): _26.LatestDepositAddressRequest;
                toProto(message: _26.LatestDepositAddressRequest): Uint8Array;
                toProtoMsg(message: _26.LatestDepositAddressRequest): _26.LatestDepositAddressRequestProtoMsg;
            };
            LatestDepositAddressResponse: {
                typeUrl: string;
                encode(message: _26.LatestDepositAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.LatestDepositAddressResponse;
                fromPartial(object: Partial<_26.LatestDepositAddressResponse>): _26.LatestDepositAddressResponse;
                fromAmino(object: _26.LatestDepositAddressResponseAmino): _26.LatestDepositAddressResponse;
                toAmino(message: _26.LatestDepositAddressResponse): _26.LatestDepositAddressResponseAmino;
                fromAminoMsg(object: _26.LatestDepositAddressResponseAminoMsg): _26.LatestDepositAddressResponse;
                fromProtoMsg(message: _26.LatestDepositAddressResponseProtoMsg): _26.LatestDepositAddressResponse;
                toProto(message: _26.LatestDepositAddressResponse): Uint8Array;
                toProtoMsg(message: _26.LatestDepositAddressResponse): _26.LatestDepositAddressResponseProtoMsg;
            };
            TransfersForChainRequest: {
                typeUrl: string;
                encode(message: _26.TransfersForChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.TransfersForChainRequest;
                fromPartial(object: Partial<_26.TransfersForChainRequest>): _26.TransfersForChainRequest;
                fromAmino(object: _26.TransfersForChainRequestAmino): _26.TransfersForChainRequest;
                toAmino(message: _26.TransfersForChainRequest): _26.TransfersForChainRequestAmino;
                fromAminoMsg(object: _26.TransfersForChainRequestAminoMsg): _26.TransfersForChainRequest;
                fromProtoMsg(message: _26.TransfersForChainRequestProtoMsg): _26.TransfersForChainRequest;
                toProto(message: _26.TransfersForChainRequest): Uint8Array;
                toProtoMsg(message: _26.TransfersForChainRequest): _26.TransfersForChainRequestProtoMsg;
            };
            TransfersForChainResponse: {
                typeUrl: string;
                encode(message: _26.TransfersForChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.TransfersForChainResponse;
                fromPartial(object: Partial<_26.TransfersForChainResponse>): _26.TransfersForChainResponse;
                fromAmino(object: _26.TransfersForChainResponseAmino): _26.TransfersForChainResponse;
                toAmino(message: _26.TransfersForChainResponse): _26.TransfersForChainResponseAmino;
                fromAminoMsg(object: _26.TransfersForChainResponseAminoMsg): _26.TransfersForChainResponse;
                fromProtoMsg(message: _26.TransfersForChainResponseProtoMsg): _26.TransfersForChainResponse;
                toProto(message: _26.TransfersForChainResponse): Uint8Array;
                toProtoMsg(message: _26.TransfersForChainResponse): _26.TransfersForChainResponseProtoMsg;
            };
            FeeInfoRequest: {
                typeUrl: string;
                encode(message: _26.FeeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.FeeInfoRequest;
                fromPartial(object: Partial<_26.FeeInfoRequest>): _26.FeeInfoRequest;
                fromAmino(object: _26.FeeInfoRequestAmino): _26.FeeInfoRequest;
                toAmino(message: _26.FeeInfoRequest): _26.FeeInfoRequestAmino;
                fromAminoMsg(object: _26.FeeInfoRequestAminoMsg): _26.FeeInfoRequest;
                fromProtoMsg(message: _26.FeeInfoRequestProtoMsg): _26.FeeInfoRequest;
                toProto(message: _26.FeeInfoRequest): Uint8Array;
                toProtoMsg(message: _26.FeeInfoRequest): _26.FeeInfoRequestProtoMsg;
            };
            FeeInfoResponse: {
                typeUrl: string;
                encode(message: _26.FeeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.FeeInfoResponse;
                fromPartial(object: Partial<_26.FeeInfoResponse>): _26.FeeInfoResponse;
                fromAmino(object: _26.FeeInfoResponseAmino): _26.FeeInfoResponse;
                toAmino(message: _26.FeeInfoResponse): _26.FeeInfoResponseAmino;
                fromAminoMsg(object: _26.FeeInfoResponseAminoMsg): _26.FeeInfoResponse;
                fromProtoMsg(message: _26.FeeInfoResponseProtoMsg): _26.FeeInfoResponse;
                toProto(message: _26.FeeInfoResponse): Uint8Array;
                toProtoMsg(message: _26.FeeInfoResponse): _26.FeeInfoResponseProtoMsg;
            };
            TransferFeeRequest: {
                typeUrl: string;
                encode(message: _26.TransferFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.TransferFeeRequest;
                fromPartial(object: Partial<_26.TransferFeeRequest>): _26.TransferFeeRequest;
                fromAmino(object: _26.TransferFeeRequestAmino): _26.TransferFeeRequest;
                toAmino(message: _26.TransferFeeRequest): _26.TransferFeeRequestAmino;
                fromAminoMsg(object: _26.TransferFeeRequestAminoMsg): _26.TransferFeeRequest;
                fromProtoMsg(message: _26.TransferFeeRequestProtoMsg): _26.TransferFeeRequest;
                toProto(message: _26.TransferFeeRequest): Uint8Array;
                toProtoMsg(message: _26.TransferFeeRequest): _26.TransferFeeRequestProtoMsg;
            };
            TransferFeeResponse: {
                typeUrl: string;
                encode(message: _26.TransferFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.TransferFeeResponse;
                fromPartial(object: Partial<_26.TransferFeeResponse>): _26.TransferFeeResponse;
                fromAmino(object: _26.TransferFeeResponseAmino): _26.TransferFeeResponse;
                toAmino(message: _26.TransferFeeResponse): _26.TransferFeeResponseAmino;
                fromAminoMsg(object: _26.TransferFeeResponseAminoMsg): _26.TransferFeeResponse;
                fromProtoMsg(message: _26.TransferFeeResponseProtoMsg): _26.TransferFeeResponse;
                toProto(message: _26.TransferFeeResponse): Uint8Array;
                toProtoMsg(message: _26.TransferFeeResponse): _26.TransferFeeResponseProtoMsg;
            };
            ChainsRequest: {
                typeUrl: string;
                encode(message: _26.ChainsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ChainsRequest;
                fromPartial(object: Partial<_26.ChainsRequest>): _26.ChainsRequest;
                fromAmino(object: _26.ChainsRequestAmino): _26.ChainsRequest;
                toAmino(message: _26.ChainsRequest): _26.ChainsRequestAmino;
                fromAminoMsg(object: _26.ChainsRequestAminoMsg): _26.ChainsRequest;
                fromProtoMsg(message: _26.ChainsRequestProtoMsg): _26.ChainsRequest;
                toProto(message: _26.ChainsRequest): Uint8Array;
                toProtoMsg(message: _26.ChainsRequest): _26.ChainsRequestProtoMsg;
            };
            ChainsResponse: {
                typeUrl: string;
                encode(message: _26.ChainsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ChainsResponse;
                fromPartial(object: Partial<_26.ChainsResponse>): _26.ChainsResponse;
                fromAmino(object: _26.ChainsResponseAmino): _26.ChainsResponse;
                toAmino(message: _26.ChainsResponse): _26.ChainsResponseAmino;
                fromAminoMsg(object: _26.ChainsResponseAminoMsg): _26.ChainsResponse;
                fromProtoMsg(message: _26.ChainsResponseProtoMsg): _26.ChainsResponse;
                toProto(message: _26.ChainsResponse): Uint8Array;
                toProtoMsg(message: _26.ChainsResponse): _26.ChainsResponseProtoMsg;
            };
            AssetsRequest: {
                typeUrl: string;
                encode(message: _26.AssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.AssetsRequest;
                fromPartial(object: Partial<_26.AssetsRequest>): _26.AssetsRequest;
                fromAmino(object: _26.AssetsRequestAmino): _26.AssetsRequest;
                toAmino(message: _26.AssetsRequest): _26.AssetsRequestAmino;
                fromAminoMsg(object: _26.AssetsRequestAminoMsg): _26.AssetsRequest;
                fromProtoMsg(message: _26.AssetsRequestProtoMsg): _26.AssetsRequest;
                toProto(message: _26.AssetsRequest): Uint8Array;
                toProtoMsg(message: _26.AssetsRequest): _26.AssetsRequestProtoMsg;
            };
            AssetsResponse: {
                typeUrl: string;
                encode(message: _26.AssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.AssetsResponse;
                fromPartial(object: Partial<_26.AssetsResponse>): _26.AssetsResponse;
                fromAmino(object: _26.AssetsResponseAmino): _26.AssetsResponse;
                toAmino(message: _26.AssetsResponse): _26.AssetsResponseAmino;
                fromAminoMsg(object: _26.AssetsResponseAminoMsg): _26.AssetsResponse;
                fromProtoMsg(message: _26.AssetsResponseProtoMsg): _26.AssetsResponse;
                toProto(message: _26.AssetsResponse): Uint8Array;
                toProtoMsg(message: _26.AssetsResponse): _26.AssetsResponseProtoMsg;
            };
            ChainStateRequest: {
                typeUrl: string;
                encode(message: _26.ChainStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ChainStateRequest;
                fromPartial(object: Partial<_26.ChainStateRequest>): _26.ChainStateRequest;
                fromAmino(object: _26.ChainStateRequestAmino): _26.ChainStateRequest;
                toAmino(message: _26.ChainStateRequest): _26.ChainStateRequestAmino;
                fromAminoMsg(object: _26.ChainStateRequestAminoMsg): _26.ChainStateRequest;
                fromProtoMsg(message: _26.ChainStateRequestProtoMsg): _26.ChainStateRequest;
                toProto(message: _26.ChainStateRequest): Uint8Array;
                toProtoMsg(message: _26.ChainStateRequest): _26.ChainStateRequestProtoMsg;
            };
            ChainStateResponse: {
                typeUrl: string;
                encode(message: _26.ChainStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ChainStateResponse;
                fromPartial(object: Partial<_26.ChainStateResponse>): _26.ChainStateResponse;
                fromAmino(object: _26.ChainStateResponseAmino): _26.ChainStateResponse;
                toAmino(message: _26.ChainStateResponse): _26.ChainStateResponseAmino;
                fromAminoMsg(object: _26.ChainStateResponseAminoMsg): _26.ChainStateResponse;
                fromProtoMsg(message: _26.ChainStateResponseProtoMsg): _26.ChainStateResponse;
                toProto(message: _26.ChainStateResponse): Uint8Array;
                toProtoMsg(message: _26.ChainStateResponse): _26.ChainStateResponseProtoMsg;
            };
            ChainsByAssetRequest: {
                typeUrl: string;
                encode(message: _26.ChainsByAssetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ChainsByAssetRequest;
                fromPartial(object: Partial<_26.ChainsByAssetRequest>): _26.ChainsByAssetRequest;
                fromAmino(object: _26.ChainsByAssetRequestAmino): _26.ChainsByAssetRequest;
                toAmino(message: _26.ChainsByAssetRequest): _26.ChainsByAssetRequestAmino;
                fromAminoMsg(object: _26.ChainsByAssetRequestAminoMsg): _26.ChainsByAssetRequest;
                fromProtoMsg(message: _26.ChainsByAssetRequestProtoMsg): _26.ChainsByAssetRequest;
                toProto(message: _26.ChainsByAssetRequest): Uint8Array;
                toProtoMsg(message: _26.ChainsByAssetRequest): _26.ChainsByAssetRequestProtoMsg;
            };
            ChainsByAssetResponse: {
                typeUrl: string;
                encode(message: _26.ChainsByAssetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ChainsByAssetResponse;
                fromPartial(object: Partial<_26.ChainsByAssetResponse>): _26.ChainsByAssetResponse;
                fromAmino(object: _26.ChainsByAssetResponseAmino): _26.ChainsByAssetResponse;
                toAmino(message: _26.ChainsByAssetResponse): _26.ChainsByAssetResponseAmino;
                fromAminoMsg(object: _26.ChainsByAssetResponseAminoMsg): _26.ChainsByAssetResponse;
                fromProtoMsg(message: _26.ChainsByAssetResponseProtoMsg): _26.ChainsByAssetResponse;
                toProto(message: _26.ChainsByAssetResponse): Uint8Array;
                toProtoMsg(message: _26.ChainsByAssetResponse): _26.ChainsByAssetResponseProtoMsg;
            };
            RecipientAddressRequest: {
                typeUrl: string;
                encode(message: _26.RecipientAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.RecipientAddressRequest;
                fromPartial(object: Partial<_26.RecipientAddressRequest>): _26.RecipientAddressRequest;
                fromAmino(object: _26.RecipientAddressRequestAmino): _26.RecipientAddressRequest;
                toAmino(message: _26.RecipientAddressRequest): _26.RecipientAddressRequestAmino;
                fromAminoMsg(object: _26.RecipientAddressRequestAminoMsg): _26.RecipientAddressRequest;
                fromProtoMsg(message: _26.RecipientAddressRequestProtoMsg): _26.RecipientAddressRequest;
                toProto(message: _26.RecipientAddressRequest): Uint8Array;
                toProtoMsg(message: _26.RecipientAddressRequest): _26.RecipientAddressRequestProtoMsg;
            };
            RecipientAddressResponse: {
                typeUrl: string;
                encode(message: _26.RecipientAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.RecipientAddressResponse;
                fromPartial(object: Partial<_26.RecipientAddressResponse>): _26.RecipientAddressResponse;
                fromAmino(object: _26.RecipientAddressResponseAmino): _26.RecipientAddressResponse;
                toAmino(message: _26.RecipientAddressResponse): _26.RecipientAddressResponseAmino;
                fromAminoMsg(object: _26.RecipientAddressResponseAminoMsg): _26.RecipientAddressResponse;
                fromProtoMsg(message: _26.RecipientAddressResponseProtoMsg): _26.RecipientAddressResponse;
                toProto(message: _26.RecipientAddressResponse): Uint8Array;
                toProtoMsg(message: _26.RecipientAddressResponse): _26.RecipientAddressResponseProtoMsg;
            };
            TransferRateLimitRequest: {
                typeUrl: string;
                encode(message: _26.TransferRateLimitRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.TransferRateLimitRequest;
                fromPartial(object: Partial<_26.TransferRateLimitRequest>): _26.TransferRateLimitRequest;
                fromAmino(object: _26.TransferRateLimitRequestAmino): _26.TransferRateLimitRequest;
                toAmino(message: _26.TransferRateLimitRequest): _26.TransferRateLimitRequestAmino;
                fromAminoMsg(object: _26.TransferRateLimitRequestAminoMsg): _26.TransferRateLimitRequest;
                fromProtoMsg(message: _26.TransferRateLimitRequestProtoMsg): _26.TransferRateLimitRequest;
                toProto(message: _26.TransferRateLimitRequest): Uint8Array;
                toProtoMsg(message: _26.TransferRateLimitRequest): _26.TransferRateLimitRequestProtoMsg;
            };
            TransferRateLimitResponse: {
                typeUrl: string;
                encode(message: _26.TransferRateLimitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.TransferRateLimitResponse;
                fromPartial(object: Partial<_26.TransferRateLimitResponse>): _26.TransferRateLimitResponse;
                fromAmino(object: _26.TransferRateLimitResponseAmino): _26.TransferRateLimitResponse;
                toAmino(message: _26.TransferRateLimitResponse): _26.TransferRateLimitResponseAmino;
                fromAminoMsg(object: _26.TransferRateLimitResponseAminoMsg): _26.TransferRateLimitResponse;
                fromProtoMsg(message: _26.TransferRateLimitResponseProtoMsg): _26.TransferRateLimitResponse;
                toProto(message: _26.TransferRateLimitResponse): Uint8Array;
                toProtoMsg(message: _26.TransferRateLimitResponse): _26.TransferRateLimitResponseProtoMsg;
            };
            TransferRateLimit: {
                typeUrl: string;
                encode(message: _26.TransferRateLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.TransferRateLimit;
                fromPartial(object: Partial<_26.TransferRateLimit>): _26.TransferRateLimit;
                fromAmino(object: _26.TransferRateLimitAmino): _26.TransferRateLimit;
                toAmino(message: _26.TransferRateLimit): _26.TransferRateLimitAmino;
                fromAminoMsg(object: _26.TransferRateLimitAminoMsg): _26.TransferRateLimit;
                fromProtoMsg(message: _26.TransferRateLimitProtoMsg): _26.TransferRateLimit;
                toProto(message: _26.TransferRateLimit): Uint8Array;
                toProtoMsg(message: _26.TransferRateLimit): _26.TransferRateLimitProtoMsg;
            };
            MessageRequest: {
                typeUrl: string;
                encode(message: _26.MessageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.MessageRequest;
                fromPartial(object: Partial<_26.MessageRequest>): _26.MessageRequest;
                fromAmino(object: _26.MessageRequestAmino): _26.MessageRequest;
                toAmino(message: _26.MessageRequest): _26.MessageRequestAmino;
                fromAminoMsg(object: _26.MessageRequestAminoMsg): _26.MessageRequest;
                fromProtoMsg(message: _26.MessageRequestProtoMsg): _26.MessageRequest;
                toProto(message: _26.MessageRequest): Uint8Array;
                toProtoMsg(message: _26.MessageRequest): _26.MessageRequestProtoMsg;
            };
            MessageResponse: {
                typeUrl: string;
                encode(message: _26.MessageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.MessageResponse;
                fromPartial(object: Partial<_26.MessageResponse>): _26.MessageResponse;
                fromAmino(object: _26.MessageResponseAmino): _26.MessageResponse;
                toAmino(message: _26.MessageResponse): _26.MessageResponseAmino;
                fromAminoMsg(object: _26.MessageResponseAminoMsg): _26.MessageResponse;
                fromProtoMsg(message: _26.MessageResponseProtoMsg): _26.MessageResponse;
                toProto(message: _26.MessageResponse): Uint8Array;
                toProtoMsg(message: _26.MessageResponse): _26.MessageResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _25.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Params;
                fromPartial(object: Partial<_25.Params>): _25.Params;
                fromAmino(object: _25.ParamsAmino): _25.Params;
                toAmino(message: _25.Params): _25.ParamsAmino;
                fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
                fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
                toProto(message: _25.Params): Uint8Array;
                toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
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
            FeeDeducted: {
                typeUrl: string;
                encode(message: _23.FeeDeducted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.FeeDeducted;
                fromPartial(object: Partial<_23.FeeDeducted>): _23.FeeDeducted;
                fromAmino(object: _23.FeeDeductedAmino): _23.FeeDeducted;
                toAmino(message: _23.FeeDeducted): _23.FeeDeductedAmino;
                fromAminoMsg(object: _23.FeeDeductedAminoMsg): _23.FeeDeducted;
                fromProtoMsg(message: _23.FeeDeductedProtoMsg): _23.FeeDeducted;
                toProto(message: _23.FeeDeducted): Uint8Array;
                toProtoMsg(message: _23.FeeDeducted): _23.FeeDeductedProtoMsg;
            };
            InsufficientFee: {
                typeUrl: string;
                encode(message: _23.InsufficientFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.InsufficientFee;
                fromPartial(object: Partial<_23.InsufficientFee>): _23.InsufficientFee;
                fromAmino(object: _23.InsufficientFeeAmino): _23.InsufficientFee;
                toAmino(message: _23.InsufficientFee): _23.InsufficientFeeAmino;
                fromAminoMsg(object: _23.InsufficientFeeAminoMsg): _23.InsufficientFee;
                fromProtoMsg(message: _23.InsufficientFeeProtoMsg): _23.InsufficientFee;
                toProto(message: _23.InsufficientFee): Uint8Array;
                toProtoMsg(message: _23.InsufficientFee): _23.InsufficientFeeProtoMsg;
            };
            RateLimitUpdated: {
                typeUrl: string;
                encode(message: _23.RateLimitUpdated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.RateLimitUpdated;
                fromPartial(object: Partial<_23.RateLimitUpdated>): _23.RateLimitUpdated;
                fromAmino(object: _23.RateLimitUpdatedAmino): _23.RateLimitUpdated;
                toAmino(message: _23.RateLimitUpdated): _23.RateLimitUpdatedAmino;
                fromAminoMsg(object: _23.RateLimitUpdatedAminoMsg): _23.RateLimitUpdated;
                fromProtoMsg(message: _23.RateLimitUpdatedProtoMsg): _23.RateLimitUpdated;
                toProto(message: _23.RateLimitUpdated): Uint8Array;
                toProtoMsg(message: _23.RateLimitUpdated): _23.RateLimitUpdatedProtoMsg;
            };
            MessageReceived: {
                typeUrl: string;
                encode(message: _23.MessageReceived, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MessageReceived;
                fromPartial(object: Partial<_23.MessageReceived>): _23.MessageReceived;
                fromAmino(object: _23.MessageReceivedAmino): _23.MessageReceived;
                toAmino(message: _23.MessageReceived): _23.MessageReceivedAmino;
                fromAminoMsg(object: _23.MessageReceivedAminoMsg): _23.MessageReceived;
                fromProtoMsg(message: _23.MessageReceivedProtoMsg): _23.MessageReceived;
                toProto(message: _23.MessageReceived): Uint8Array;
                toProtoMsg(message: _23.MessageReceived): _23.MessageReceivedProtoMsg;
            };
            MessageProcessing: {
                typeUrl: string;
                encode(message: _23.MessageProcessing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MessageProcessing;
                fromPartial(object: Partial<_23.MessageProcessing>): _23.MessageProcessing;
                fromAmino(object: _23.MessageProcessingAmino): _23.MessageProcessing;
                toAmino(message: _23.MessageProcessing): _23.MessageProcessingAmino;
                fromAminoMsg(object: _23.MessageProcessingAminoMsg): _23.MessageProcessing;
                fromProtoMsg(message: _23.MessageProcessingProtoMsg): _23.MessageProcessing;
                toProto(message: _23.MessageProcessing): Uint8Array;
                toProtoMsg(message: _23.MessageProcessing): _23.MessageProcessingProtoMsg;
            };
            MessageExecuted: {
                typeUrl: string;
                encode(message: _23.MessageExecuted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MessageExecuted;
                fromPartial(object: Partial<_23.MessageExecuted>): _23.MessageExecuted;
                fromAmino(object: _23.MessageExecutedAmino): _23.MessageExecuted;
                toAmino(message: _23.MessageExecuted): _23.MessageExecutedAmino;
                fromAminoMsg(object: _23.MessageExecutedAminoMsg): _23.MessageExecuted;
                fromProtoMsg(message: _23.MessageExecutedProtoMsg): _23.MessageExecuted;
                toProto(message: _23.MessageExecuted): Uint8Array;
                toProtoMsg(message: _23.MessageExecuted): _23.MessageExecutedProtoMsg;
            };
            MessageFailed: {
                typeUrl: string;
                encode(message: _23.MessageFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MessageFailed;
                fromPartial(object: Partial<_23.MessageFailed>): _23.MessageFailed;
                fromAmino(object: _23.MessageFailedAmino): _23.MessageFailed;
                toAmino(message: _23.MessageFailed): _23.MessageFailedAmino;
                fromAminoMsg(object: _23.MessageFailedAminoMsg): _23.MessageFailed;
                fromProtoMsg(message: _23.MessageFailedProtoMsg): _23.MessageFailed;
                toProto(message: _23.MessageFailed): Uint8Array;
                toProtoMsg(message: _23.MessageFailed): _23.MessageFailedProtoMsg;
            };
        };
    }
    namespace permission {
        namespace exported {
            const v1beta1: {
                roleFromJSON(object: any): _30.Role;
                roleToJSON(object: _30.Role): string;
                Role: typeof _30.Role;
                RoleSDKType: typeof _30.Role;
                RoleAmino: typeof _30.Role;
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                governanceKey(request?: _33.QueryGovernanceKeyRequest): Promise<_33.QueryGovernanceKeyResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerController(value: axelar.permission.v1beta1.RegisterControllerRequest): {
                        typeUrl: string;
                        value: any;
                    };
                    deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    registerController(value: axelar.permission.v1beta1.RegisterControllerRequest): {
                        typeUrl: string;
                        value: axelar.permission.v1beta1.RegisterControllerRequest;
                    };
                    deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: axelar.permission.v1beta1.DeregisterControllerRequest;
                    };
                    updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest;
                    };
                };
                fromJSON: {
                    registerController(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    deregisterController(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGovernanceKey(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    registerController(value: axelar.permission.v1beta1.RegisterControllerRequest): {
                        typeUrl: string;
                        value: any;
                    };
                    deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: any;
                    };
                };
            };
            AminoConverter: {
                "/axelar.permission.v1beta1.RegisterControllerRequest": {
                    aminoType: string;
                    toAmino: (message: _35.RegisterControllerRequest) => _35.RegisterControllerRequestAmino;
                    fromAmino: (object: _35.RegisterControllerRequestAmino) => _35.RegisterControllerRequest;
                };
                "/axelar.permission.v1beta1.DeregisterControllerRequest": {
                    aminoType: string;
                    toAmino: (message: _35.DeregisterControllerRequest) => _35.DeregisterControllerRequestAmino;
                    fromAmino: (object: _35.DeregisterControllerRequestAmino) => _35.DeregisterControllerRequest;
                };
                "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
                    aminoType: string;
                    toAmino: (message: _35.UpdateGovernanceKeyRequest) => _35.UpdateGovernanceKeyRequestAmino;
                    fromAmino: (object: _35.UpdateGovernanceKeyRequestAmino) => _35.UpdateGovernanceKeyRequest;
                };
            };
            GovAccount: {
                typeUrl: string;
                encode(message: _36.GovAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.GovAccount;
                fromPartial(object: Partial<_36.GovAccount>): _36.GovAccount;
                fromAmino(object: _36.GovAccountAmino): _36.GovAccount;
                toAmino(message: _36.GovAccount): _36.GovAccountAmino;
                fromAminoMsg(object: _36.GovAccountAminoMsg): _36.GovAccount;
                fromProtoMsg(message: _36.GovAccountProtoMsg): _36.GovAccount;
                toProto(message: _36.GovAccount): Uint8Array;
                toProtoMsg(message: _36.GovAccount): _36.GovAccountProtoMsg;
            };
            UpdateGovernanceKeyRequest: {
                typeUrl: string;
                encode(message: _35.UpdateGovernanceKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.UpdateGovernanceKeyRequest;
                fromPartial(object: Partial<_35.UpdateGovernanceKeyRequest>): _35.UpdateGovernanceKeyRequest;
                fromAmino(object: _35.UpdateGovernanceKeyRequestAmino): _35.UpdateGovernanceKeyRequest;
                toAmino(message: _35.UpdateGovernanceKeyRequest): _35.UpdateGovernanceKeyRequestAmino;
                fromAminoMsg(object: _35.UpdateGovernanceKeyRequestAminoMsg): _35.UpdateGovernanceKeyRequest;
                fromProtoMsg(message: _35.UpdateGovernanceKeyRequestProtoMsg): _35.UpdateGovernanceKeyRequest;
                toProto(message: _35.UpdateGovernanceKeyRequest): Uint8Array;
                toProtoMsg(message: _35.UpdateGovernanceKeyRequest): _35.UpdateGovernanceKeyRequestProtoMsg;
            };
            UpdateGovernanceKeyResponse: {
                typeUrl: string;
                encode(_: _35.UpdateGovernanceKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.UpdateGovernanceKeyResponse;
                fromPartial(_: Partial<_35.UpdateGovernanceKeyResponse>): _35.UpdateGovernanceKeyResponse;
                fromAmino(_: _35.UpdateGovernanceKeyResponseAmino): _35.UpdateGovernanceKeyResponse;
                toAmino(_: _35.UpdateGovernanceKeyResponse): _35.UpdateGovernanceKeyResponseAmino;
                fromAminoMsg(object: _35.UpdateGovernanceKeyResponseAminoMsg): _35.UpdateGovernanceKeyResponse;
                fromProtoMsg(message: _35.UpdateGovernanceKeyResponseProtoMsg): _35.UpdateGovernanceKeyResponse;
                toProto(message: _35.UpdateGovernanceKeyResponse): Uint8Array;
                toProtoMsg(message: _35.UpdateGovernanceKeyResponse): _35.UpdateGovernanceKeyResponseProtoMsg;
            };
            RegisterControllerRequest: {
                typeUrl: string;
                encode(message: _35.RegisterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.RegisterControllerRequest;
                fromPartial(object: Partial<_35.RegisterControllerRequest>): _35.RegisterControllerRequest;
                fromAmino(object: _35.RegisterControllerRequestAmino): _35.RegisterControllerRequest;
                toAmino(message: _35.RegisterControllerRequest): _35.RegisterControllerRequestAmino;
                fromAminoMsg(object: _35.RegisterControllerRequestAminoMsg): _35.RegisterControllerRequest;
                fromProtoMsg(message: _35.RegisterControllerRequestProtoMsg): _35.RegisterControllerRequest;
                toProto(message: _35.RegisterControllerRequest): Uint8Array;
                toProtoMsg(message: _35.RegisterControllerRequest): _35.RegisterControllerRequestProtoMsg;
            };
            RegisterControllerResponse: {
                typeUrl: string;
                encode(_: _35.RegisterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.RegisterControllerResponse;
                fromPartial(_: Partial<_35.RegisterControllerResponse>): _35.RegisterControllerResponse;
                fromAmino(_: _35.RegisterControllerResponseAmino): _35.RegisterControllerResponse;
                toAmino(_: _35.RegisterControllerResponse): _35.RegisterControllerResponseAmino;
                fromAminoMsg(object: _35.RegisterControllerResponseAminoMsg): _35.RegisterControllerResponse;
                fromProtoMsg(message: _35.RegisterControllerResponseProtoMsg): _35.RegisterControllerResponse;
                toProto(message: _35.RegisterControllerResponse): Uint8Array;
                toProtoMsg(message: _35.RegisterControllerResponse): _35.RegisterControllerResponseProtoMsg;
            };
            DeregisterControllerRequest: {
                typeUrl: string;
                encode(message: _35.DeregisterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.DeregisterControllerRequest;
                fromPartial(object: Partial<_35.DeregisterControllerRequest>): _35.DeregisterControllerRequest;
                fromAmino(object: _35.DeregisterControllerRequestAmino): _35.DeregisterControllerRequest;
                toAmino(message: _35.DeregisterControllerRequest): _35.DeregisterControllerRequestAmino;
                fromAminoMsg(object: _35.DeregisterControllerRequestAminoMsg): _35.DeregisterControllerRequest;
                fromProtoMsg(message: _35.DeregisterControllerRequestProtoMsg): _35.DeregisterControllerRequest;
                toProto(message: _35.DeregisterControllerRequest): Uint8Array;
                toProtoMsg(message: _35.DeregisterControllerRequest): _35.DeregisterControllerRequestProtoMsg;
            };
            DeregisterControllerResponse: {
                typeUrl: string;
                encode(_: _35.DeregisterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.DeregisterControllerResponse;
                fromPartial(_: Partial<_35.DeregisterControllerResponse>): _35.DeregisterControllerResponse;
                fromAmino(_: _35.DeregisterControllerResponseAmino): _35.DeregisterControllerResponse;
                toAmino(_: _35.DeregisterControllerResponse): _35.DeregisterControllerResponseAmino;
                fromAminoMsg(object: _35.DeregisterControllerResponseAminoMsg): _35.DeregisterControllerResponse;
                fromProtoMsg(message: _35.DeregisterControllerResponseProtoMsg): _35.DeregisterControllerResponse;
                toProto(message: _35.DeregisterControllerResponse): Uint8Array;
                toProtoMsg(message: _35.DeregisterControllerResponse): _35.DeregisterControllerResponseProtoMsg;
            };
            QueryGovernanceKeyRequest: {
                typeUrl: string;
                encode(_: _33.QueryGovernanceKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.QueryGovernanceKeyRequest;
                fromPartial(_: Partial<_33.QueryGovernanceKeyRequest>): _33.QueryGovernanceKeyRequest;
                fromAmino(_: _33.QueryGovernanceKeyRequestAmino): _33.QueryGovernanceKeyRequest;
                toAmino(_: _33.QueryGovernanceKeyRequest): _33.QueryGovernanceKeyRequestAmino;
                fromAminoMsg(object: _33.QueryGovernanceKeyRequestAminoMsg): _33.QueryGovernanceKeyRequest;
                fromProtoMsg(message: _33.QueryGovernanceKeyRequestProtoMsg): _33.QueryGovernanceKeyRequest;
                toProto(message: _33.QueryGovernanceKeyRequest): Uint8Array;
                toProtoMsg(message: _33.QueryGovernanceKeyRequest): _33.QueryGovernanceKeyRequestProtoMsg;
            };
            QueryGovernanceKeyResponse: {
                typeUrl: string;
                encode(message: _33.QueryGovernanceKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryGovernanceKeyResponse;
                fromPartial(object: Partial<_33.QueryGovernanceKeyResponse>): _33.QueryGovernanceKeyResponse;
                fromAmino(object: _33.QueryGovernanceKeyResponseAmino): _33.QueryGovernanceKeyResponse;
                toAmino(message: _33.QueryGovernanceKeyResponse): _33.QueryGovernanceKeyResponseAmino;
                fromAminoMsg(object: _33.QueryGovernanceKeyResponseAminoMsg): _33.QueryGovernanceKeyResponse;
                fromProtoMsg(message: _33.QueryGovernanceKeyResponseProtoMsg): _33.QueryGovernanceKeyResponse;
                toProto(message: _33.QueryGovernanceKeyResponse): Uint8Array;
                toProtoMsg(message: _33.QueryGovernanceKeyResponse): _33.QueryGovernanceKeyResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _32.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.Params;
                fromPartial(_: Partial<_32.Params>): _32.Params;
                fromAmino(_: _32.ParamsAmino): _32.Params;
                toAmino(_: _32.Params): _32.ParamsAmino;
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
        };
    }
    namespace reward {
        const v1beta1: {
            Pool: {
                typeUrl: string;
                encode(message: _42.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Pool;
                fromPartial(object: Partial<_42.Pool>): _42.Pool;
                fromAmino(object: _42.PoolAmino): _42.Pool;
                toAmino(message: _42.Pool): _42.PoolAmino;
                fromAminoMsg(object: _42.PoolAminoMsg): _42.Pool;
                fromProtoMsg(message: _42.PoolProtoMsg): _42.Pool;
                toProto(message: _42.Pool): Uint8Array;
                toProtoMsg(message: _42.Pool): _42.PoolProtoMsg;
            };
            Pool_Reward: {
                typeUrl: string;
                encode(message: _42.Pool_Reward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Pool_Reward;
                fromPartial(object: Partial<_42.Pool_Reward>): _42.Pool_Reward;
                fromAmino(object: _42.Pool_RewardAmino): _42.Pool_Reward;
                toAmino(message: _42.Pool_Reward): _42.Pool_RewardAmino;
                fromAminoMsg(object: _42.Pool_RewardAminoMsg): _42.Pool_Reward;
                fromProtoMsg(message: _42.Pool_RewardProtoMsg): _42.Pool_Reward;
                toProto(message: _42.Pool_Reward): Uint8Array;
                toProtoMsg(message: _42.Pool_Reward): _42.Pool_RewardProtoMsg;
            };
            Refund: {
                typeUrl: string;
                encode(message: _42.Refund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Refund;
                fromPartial(object: Partial<_42.Refund>): _42.Refund;
                fromAmino(object: _42.RefundAmino): _42.Refund;
                toAmino(message: _42.Refund): _42.RefundAmino;
                fromAminoMsg(object: _42.RefundAminoMsg): _42.Refund;
                fromProtoMsg(message: _42.RefundProtoMsg): _42.Refund;
                toProto(message: _42.Refund): Uint8Array;
                toProtoMsg(message: _42.Refund): _42.RefundProtoMsg;
            };
            RefundMsgRequest: {
                typeUrl: string;
                encode(message: _41.RefundMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.RefundMsgRequest;
                fromPartial(object: Partial<_41.RefundMsgRequest>): _41.RefundMsgRequest;
                fromAmino(object: _41.RefundMsgRequestAmino): _41.RefundMsgRequest;
                toAmino(message: _41.RefundMsgRequest): _41.RefundMsgRequestAmino;
                fromAminoMsg(object: _41.RefundMsgRequestAminoMsg): _41.RefundMsgRequest;
                fromProtoMsg(message: _41.RefundMsgRequestProtoMsg): _41.RefundMsgRequest;
                toProto(message: _41.RefundMsgRequest): Uint8Array;
                toProtoMsg(message: _41.RefundMsgRequest): _41.RefundMsgRequestProtoMsg;
            };
            RefundMsgResponse: {
                typeUrl: string;
                encode(message: _41.RefundMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.RefundMsgResponse;
                fromPartial(object: Partial<_41.RefundMsgResponse>): _41.RefundMsgResponse;
                fromAmino(object: _41.RefundMsgResponseAmino): _41.RefundMsgResponse;
                toAmino(message: _41.RefundMsgResponse): _41.RefundMsgResponseAmino;
                fromAminoMsg(object: _41.RefundMsgResponseAminoMsg): _41.RefundMsgResponse;
                fromProtoMsg(message: _41.RefundMsgResponseProtoMsg): _41.RefundMsgResponse;
                toProto(message: _41.RefundMsgResponse): Uint8Array;
                toProtoMsg(message: _41.RefundMsgResponse): _41.RefundMsgResponseProtoMsg;
            };
            Refundable_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Refundable_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Refundable_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            InflationRateRequest: {
                typeUrl: string;
                encode(_: _39.InflationRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.InflationRateRequest;
                fromPartial(_: Partial<_39.InflationRateRequest>): _39.InflationRateRequest;
                fromAmino(_: _39.InflationRateRequestAmino): _39.InflationRateRequest;
                toAmino(_: _39.InflationRateRequest): _39.InflationRateRequestAmino;
                fromAminoMsg(object: _39.InflationRateRequestAminoMsg): _39.InflationRateRequest;
                fromProtoMsg(message: _39.InflationRateRequestProtoMsg): _39.InflationRateRequest;
                toProto(message: _39.InflationRateRequest): Uint8Array;
                toProtoMsg(message: _39.InflationRateRequest): _39.InflationRateRequestProtoMsg;
            };
            InflationRateResponse: {
                typeUrl: string;
                encode(message: _39.InflationRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.InflationRateResponse;
                fromPartial(object: Partial<_39.InflationRateResponse>): _39.InflationRateResponse;
                fromAmino(object: _39.InflationRateResponseAmino): _39.InflationRateResponse;
                toAmino(message: _39.InflationRateResponse): _39.InflationRateResponseAmino;
                fromAminoMsg(object: _39.InflationRateResponseAminoMsg): _39.InflationRateResponse;
                fromProtoMsg(message: _39.InflationRateResponseProtoMsg): _39.InflationRateResponse;
                toProto(message: _39.InflationRateResponse): Uint8Array;
                toProtoMsg(message: _39.InflationRateResponse): _39.InflationRateResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _39.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.ParamsRequest;
                fromPartial(_: Partial<_39.ParamsRequest>): _39.ParamsRequest;
                fromAmino(_: _39.ParamsRequestAmino): _39.ParamsRequest;
                toAmino(_: _39.ParamsRequest): _39.ParamsRequestAmino;
                fromAminoMsg(object: _39.ParamsRequestAminoMsg): _39.ParamsRequest;
                fromProtoMsg(message: _39.ParamsRequestProtoMsg): _39.ParamsRequest;
                toProto(message: _39.ParamsRequest): Uint8Array;
                toProtoMsg(message: _39.ParamsRequest): _39.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _39.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.ParamsResponse;
                fromPartial(object: Partial<_39.ParamsResponse>): _39.ParamsResponse;
                fromAmino(object: _39.ParamsResponseAmino): _39.ParamsResponse;
                toAmino(message: _39.ParamsResponse): _39.ParamsResponseAmino;
                fromAminoMsg(object: _39.ParamsResponseAminoMsg): _39.ParamsResponse;
                fromProtoMsg(message: _39.ParamsResponseProtoMsg): _39.ParamsResponse;
                toProto(message: _39.ParamsResponse): Uint8Array;
                toProtoMsg(message: _39.ParamsResponse): _39.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _38.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Params;
                fromPartial(object: Partial<_38.Params>): _38.Params;
                fromAmino(object: _38.ParamsAmino): _38.Params;
                toAmino(message: _38.Params): _38.ParamsAmino;
                fromAminoMsg(object: _38.ParamsAminoMsg): _38.Params;
                fromProtoMsg(message: _38.ParamsProtoMsg): _38.Params;
                toProto(message: _38.Params): Uint8Array;
                toProtoMsg(message: _38.Params): _38.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _37.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
        };
    }
    namespace snapshot {
        namespace exported {
            const v1beta1: {
                Participant: {
                    typeUrl: string;
                    encode(message: _43.Participant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Participant;
                    fromPartial(object: Partial<_43.Participant>): _43.Participant;
                    fromAmino(object: _43.ParticipantAmino): _43.Participant;
                    toAmino(message: _43.Participant): _43.ParticipantAmino;
                    fromAminoMsg(object: _43.ParticipantAminoMsg): _43.Participant;
                    fromProtoMsg(message: _43.ParticipantProtoMsg): _43.Participant;
                    toProto(message: _43.Participant): Uint8Array;
                    toProtoMsg(message: _43.Participant): _43.ParticipantProtoMsg;
                };
                Snapshot_ParticipantsEntry: {
                    encode(message: _43.Snapshot_ParticipantsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Snapshot_ParticipantsEntry;
                    fromPartial(object: Partial<_43.Snapshot_ParticipantsEntry>): _43.Snapshot_ParticipantsEntry;
                    fromAmino(object: _43.Snapshot_ParticipantsEntryAmino): _43.Snapshot_ParticipantsEntry;
                    toAmino(message: _43.Snapshot_ParticipantsEntry): _43.Snapshot_ParticipantsEntryAmino;
                    fromAminoMsg(object: _43.Snapshot_ParticipantsEntryAminoMsg): _43.Snapshot_ParticipantsEntry;
                    fromProtoMsg(message: _43.Snapshot_ParticipantsEntryProtoMsg): _43.Snapshot_ParticipantsEntry;
                    toProto(message: _43.Snapshot_ParticipantsEntry): Uint8Array;
                };
                Snapshot: {
                    typeUrl: string;
                    encode(message: _43.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _43.Snapshot;
                    fromPartial(object: Partial<_43.Snapshot>): _43.Snapshot;
                    fromAmino(object: _43.SnapshotAmino): _43.Snapshot;
                    toAmino(message: _43.Snapshot): _43.SnapshotAmino;
                    fromAminoMsg(object: _43.SnapshotAminoMsg): _43.Snapshot;
                    fromProtoMsg(message: _43.SnapshotProtoMsg): _43.Snapshot;
                    toProto(message: _43.Snapshot): Uint8Array;
                    toProtoMsg(message: _43.Snapshot): _43.SnapshotProtoMsg;
                };
            };
        }
        const v1beta1: {
            ProxiedValidator: {
                typeUrl: string;
                encode(message: _49.ProxiedValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.ProxiedValidator;
                fromPartial(object: Partial<_49.ProxiedValidator>): _49.ProxiedValidator;
                fromAmino(object: _49.ProxiedValidatorAmino): _49.ProxiedValidator;
                toAmino(message: _49.ProxiedValidator): _49.ProxiedValidatorAmino;
                fromAminoMsg(object: _49.ProxiedValidatorAminoMsg): _49.ProxiedValidator;
                fromProtoMsg(message: _49.ProxiedValidatorProtoMsg): _49.ProxiedValidator;
                toProto(message: _49.ProxiedValidator): Uint8Array;
                toProtoMsg(message: _49.ProxiedValidator): _49.ProxiedValidatorProtoMsg;
            };
            RegisterProxyRequest: {
                typeUrl: string;
                encode(message: _48.RegisterProxyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.RegisterProxyRequest;
                fromPartial(object: Partial<_48.RegisterProxyRequest>): _48.RegisterProxyRequest;
                fromAmino(object: _48.RegisterProxyRequestAmino): _48.RegisterProxyRequest;
                toAmino(message: _48.RegisterProxyRequest): _48.RegisterProxyRequestAmino;
                fromAminoMsg(object: _48.RegisterProxyRequestAminoMsg): _48.RegisterProxyRequest;
                fromProtoMsg(message: _48.RegisterProxyRequestProtoMsg): _48.RegisterProxyRequest;
                toProto(message: _48.RegisterProxyRequest): Uint8Array;
                toProtoMsg(message: _48.RegisterProxyRequest): _48.RegisterProxyRequestProtoMsg;
            };
            RegisterProxyResponse: {
                typeUrl: string;
                encode(_: _48.RegisterProxyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.RegisterProxyResponse;
                fromPartial(_: Partial<_48.RegisterProxyResponse>): _48.RegisterProxyResponse;
                fromAmino(_: _48.RegisterProxyResponseAmino): _48.RegisterProxyResponse;
                toAmino(_: _48.RegisterProxyResponse): _48.RegisterProxyResponseAmino;
                fromAminoMsg(object: _48.RegisterProxyResponseAminoMsg): _48.RegisterProxyResponse;
                fromProtoMsg(message: _48.RegisterProxyResponseProtoMsg): _48.RegisterProxyResponse;
                toProto(message: _48.RegisterProxyResponse): Uint8Array;
                toProtoMsg(message: _48.RegisterProxyResponse): _48.RegisterProxyResponseProtoMsg;
            };
            DeactivateProxyRequest: {
                typeUrl: string;
                encode(message: _48.DeactivateProxyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DeactivateProxyRequest;
                fromPartial(object: Partial<_48.DeactivateProxyRequest>): _48.DeactivateProxyRequest;
                fromAmino(object: _48.DeactivateProxyRequestAmino): _48.DeactivateProxyRequest;
                toAmino(message: _48.DeactivateProxyRequest): _48.DeactivateProxyRequestAmino;
                fromAminoMsg(object: _48.DeactivateProxyRequestAminoMsg): _48.DeactivateProxyRequest;
                fromProtoMsg(message: _48.DeactivateProxyRequestProtoMsg): _48.DeactivateProxyRequest;
                toProto(message: _48.DeactivateProxyRequest): Uint8Array;
                toProtoMsg(message: _48.DeactivateProxyRequest): _48.DeactivateProxyRequestProtoMsg;
            };
            DeactivateProxyResponse: {
                typeUrl: string;
                encode(_: _48.DeactivateProxyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.DeactivateProxyResponse;
                fromPartial(_: Partial<_48.DeactivateProxyResponse>): _48.DeactivateProxyResponse;
                fromAmino(_: _48.DeactivateProxyResponseAmino): _48.DeactivateProxyResponse;
                toAmino(_: _48.DeactivateProxyResponse): _48.DeactivateProxyResponseAmino;
                fromAminoMsg(object: _48.DeactivateProxyResponseAminoMsg): _48.DeactivateProxyResponse;
                fromProtoMsg(message: _48.DeactivateProxyResponseProtoMsg): _48.DeactivateProxyResponse;
                toProto(message: _48.DeactivateProxyResponse): Uint8Array;
                toProtoMsg(message: _48.DeactivateProxyResponse): _48.DeactivateProxyResponseProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _46.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.QueryValidatorsResponse;
                fromPartial(object: Partial<_46.QueryValidatorsResponse>): _46.QueryValidatorsResponse;
                fromAmino(object: _46.QueryValidatorsResponseAmino): _46.QueryValidatorsResponse;
                toAmino(message: _46.QueryValidatorsResponse): _46.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _46.QueryValidatorsResponseAminoMsg): _46.QueryValidatorsResponse;
                fromProtoMsg(message: _46.QueryValidatorsResponseProtoMsg): _46.QueryValidatorsResponse;
                toProto(message: _46.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _46.QueryValidatorsResponse): _46.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorsResponse_TssIllegibilityInfo: {
                typeUrl: string;
                encode(message: _46.QueryValidatorsResponse_TssIllegibilityInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.QueryValidatorsResponse_TssIllegibilityInfo;
                fromPartial(object: Partial<_46.QueryValidatorsResponse_TssIllegibilityInfo>): _46.QueryValidatorsResponse_TssIllegibilityInfo;
                fromAmino(object: _46.QueryValidatorsResponse_TssIllegibilityInfoAmino): _46.QueryValidatorsResponse_TssIllegibilityInfo;
                toAmino(message: _46.QueryValidatorsResponse_TssIllegibilityInfo): _46.QueryValidatorsResponse_TssIllegibilityInfoAmino;
                fromAminoMsg(object: _46.QueryValidatorsResponse_TssIllegibilityInfoAminoMsg): _46.QueryValidatorsResponse_TssIllegibilityInfo;
                fromProtoMsg(message: _46.QueryValidatorsResponse_TssIllegibilityInfoProtoMsg): _46.QueryValidatorsResponse_TssIllegibilityInfo;
                toProto(message: _46.QueryValidatorsResponse_TssIllegibilityInfo): Uint8Array;
                toProtoMsg(message: _46.QueryValidatorsResponse_TssIllegibilityInfo): _46.QueryValidatorsResponse_TssIllegibilityInfoProtoMsg;
            };
            QueryValidatorsResponse_Validator: {
                typeUrl: string;
                encode(message: _46.QueryValidatorsResponse_Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.QueryValidatorsResponse_Validator;
                fromPartial(object: Partial<_46.QueryValidatorsResponse_Validator>): _46.QueryValidatorsResponse_Validator;
                fromAmino(object: _46.QueryValidatorsResponse_ValidatorAmino): _46.QueryValidatorsResponse_Validator;
                toAmino(message: _46.QueryValidatorsResponse_Validator): _46.QueryValidatorsResponse_ValidatorAmino;
                fromAminoMsg(object: _46.QueryValidatorsResponse_ValidatorAminoMsg): _46.QueryValidatorsResponse_Validator;
                fromProtoMsg(message: _46.QueryValidatorsResponse_ValidatorProtoMsg): _46.QueryValidatorsResponse_Validator;
                toProto(message: _46.QueryValidatorsResponse_Validator): Uint8Array;
                toProtoMsg(message: _46.QueryValidatorsResponse_Validator): _46.QueryValidatorsResponse_ValidatorProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _45.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Params;
                fromPartial(object: Partial<_45.Params>): _45.Params;
                fromAmino(object: _45.ParamsAmino): _45.Params;
                toAmino(message: _45.Params): _45.ParamsAmino;
                fromAminoMsg(object: _45.ParamsAminoMsg): _45.Params;
                fromProtoMsg(message: _45.ParamsProtoMsg): _45.Params;
                toProto(message: _45.Params): Uint8Array;
                toProtoMsg(message: _45.Params): _45.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _44.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
        };
    }
    namespace tss {
        namespace exported {
            const v1beta1: {
                keyRoleFromJSON(object: any): _50.KeyRole;
                keyRoleToJSON(object: _50.KeyRole): string;
                keyTypeFromJSON(object: any): _50.KeyType;
                keyTypeToJSON(object: _50.KeyType): string;
                keyShareDistributionPolicyFromJSON(object: any): _50.KeyShareDistributionPolicy;
                keyShareDistributionPolicyToJSON(object: _50.KeyShareDistributionPolicy): string;
                KeyRole: typeof _50.KeyRole;
                KeyRoleSDKType: typeof _50.KeyRole;
                KeyRoleAmino: typeof _50.KeyRole;
                KeyType: typeof _50.KeyType;
                KeyTypeSDKType: typeof _50.KeyType;
                KeyTypeAmino: typeof _50.KeyType;
                KeyShareDistributionPolicy: typeof _50.KeyShareDistributionPolicy;
                KeyShareDistributionPolicySDKType: typeof _50.KeyShareDistributionPolicy;
                KeyShareDistributionPolicyAmino: typeof _50.KeyShareDistributionPolicy;
                KeyRequirement: {
                    typeUrl: string;
                    encode(message: _50.KeyRequirement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.KeyRequirement;
                    fromPartial(object: Partial<_50.KeyRequirement>): _50.KeyRequirement;
                    fromAmino(object: _50.KeyRequirementAmino): _50.KeyRequirement;
                    toAmino(message: _50.KeyRequirement): _50.KeyRequirementAmino;
                    fromAminoMsg(object: _50.KeyRequirementAminoMsg): _50.KeyRequirement;
                    fromProtoMsg(message: _50.KeyRequirementProtoMsg): _50.KeyRequirement;
                    toProto(message: _50.KeyRequirement): Uint8Array;
                    toProtoMsg(message: _50.KeyRequirement): _50.KeyRequirementProtoMsg;
                };
                SigKeyPair: {
                    typeUrl: string;
                    encode(message: _50.SigKeyPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _50.SigKeyPair;
                    fromPartial(object: Partial<_50.SigKeyPair>): _50.SigKeyPair;
                    fromAmino(object: _50.SigKeyPairAmino): _50.SigKeyPair;
                    toAmino(message: _50.SigKeyPair): _50.SigKeyPairAmino;
                    fromAminoMsg(object: _50.SigKeyPairAminoMsg): _50.SigKeyPair;
                    fromProtoMsg(message: _50.SigKeyPairProtoMsg): _50.SigKeyPair;
                    toProto(message: _50.SigKeyPair): Uint8Array;
                    toProtoMsg(message: _50.SigKeyPair): _50.SigKeyPairProtoMsg;
                };
            };
        }
        namespace tofnd {
            const v1beta1: {
                recoverResponse_ResponseFromJSON(object: any): _53.RecoverResponse_Response;
                recoverResponse_ResponseToJSON(object: _53.RecoverResponse_Response): string;
                messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): _53.MessageOut_CriminalList_Criminal_CrimeType;
                messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: _53.MessageOut_CriminalList_Criminal_CrimeType): string;
                RecoverResponse_Response: typeof _53.RecoverResponse_Response;
                RecoverResponse_ResponseSDKType: typeof _53.RecoverResponse_Response;
                RecoverResponse_ResponseAmino: typeof _53.RecoverResponse_Response;
                MessageOut_CriminalList_Criminal_CrimeType: typeof _53.MessageOut_CriminalList_Criminal_CrimeType;
                MessageOut_CriminalList_Criminal_CrimeTypeSDKType: typeof _53.MessageOut_CriminalList_Criminal_CrimeType;
                MessageOut_CriminalList_Criminal_CrimeTypeAmino: typeof _53.MessageOut_CriminalList_Criminal_CrimeType;
                RecoverRequest: {
                    typeUrl: string;
                    encode(message: _53.RecoverRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.RecoverRequest;
                    fromPartial(object: Partial<_53.RecoverRequest>): _53.RecoverRequest;
                    fromAmino(object: _53.RecoverRequestAmino): _53.RecoverRequest;
                    toAmino(message: _53.RecoverRequest): _53.RecoverRequestAmino;
                    fromAminoMsg(object: _53.RecoverRequestAminoMsg): _53.RecoverRequest;
                    fromProtoMsg(message: _53.RecoverRequestProtoMsg): _53.RecoverRequest;
                    toProto(message: _53.RecoverRequest): Uint8Array;
                    toProtoMsg(message: _53.RecoverRequest): _53.RecoverRequestProtoMsg;
                };
                RecoverResponse: {
                    typeUrl: string;
                    encode(message: _53.RecoverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.RecoverResponse;
                    fromPartial(object: Partial<_53.RecoverResponse>): _53.RecoverResponse;
                    fromAmino(object: _53.RecoverResponseAmino): _53.RecoverResponse;
                    toAmino(message: _53.RecoverResponse): _53.RecoverResponseAmino;
                    fromAminoMsg(object: _53.RecoverResponseAminoMsg): _53.RecoverResponse;
                    fromProtoMsg(message: _53.RecoverResponseProtoMsg): _53.RecoverResponse;
                    toProto(message: _53.RecoverResponse): Uint8Array;
                    toProtoMsg(message: _53.RecoverResponse): _53.RecoverResponseProtoMsg;
                };
                KeygenOutput: {
                    typeUrl: string;
                    encode(message: _53.KeygenOutput, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.KeygenOutput;
                    fromPartial(object: Partial<_53.KeygenOutput>): _53.KeygenOutput;
                    fromAmino(object: _53.KeygenOutputAmino): _53.KeygenOutput;
                    toAmino(message: _53.KeygenOutput): _53.KeygenOutputAmino;
                    fromAminoMsg(object: _53.KeygenOutputAminoMsg): _53.KeygenOutput;
                    fromProtoMsg(message: _53.KeygenOutputProtoMsg): _53.KeygenOutput;
                    toProto(message: _53.KeygenOutput): Uint8Array;
                    toProtoMsg(message: _53.KeygenOutput): _53.KeygenOutputProtoMsg;
                };
                MessageIn: {
                    typeUrl: string;
                    encode(message: _53.MessageIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.MessageIn;
                    fromPartial(object: Partial<_53.MessageIn>): _53.MessageIn;
                    fromAmino(object: _53.MessageInAmino): _53.MessageIn;
                    toAmino(message: _53.MessageIn): _53.MessageInAmino;
                    fromAminoMsg(object: _53.MessageInAminoMsg): _53.MessageIn;
                    fromProtoMsg(message: _53.MessageInProtoMsg): _53.MessageIn;
                    toProto(message: _53.MessageIn): Uint8Array;
                    toProtoMsg(message: _53.MessageIn): _53.MessageInProtoMsg;
                };
                MessageOut: {
                    typeUrl: string;
                    encode(message: _53.MessageOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.MessageOut;
                    fromPartial(object: Partial<_53.MessageOut>): _53.MessageOut;
                    fromAmino(object: _53.MessageOutAmino): _53.MessageOut;
                    toAmino(message: _53.MessageOut): _53.MessageOutAmino;
                    fromAminoMsg(object: _53.MessageOutAminoMsg): _53.MessageOut;
                    fromProtoMsg(message: _53.MessageOutProtoMsg): _53.MessageOut;
                    toProto(message: _53.MessageOut): Uint8Array;
                    toProtoMsg(message: _53.MessageOut): _53.MessageOutProtoMsg;
                };
                MessageOut_KeygenResult: {
                    typeUrl: string;
                    encode(message: _53.MessageOut_KeygenResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.MessageOut_KeygenResult;
                    fromPartial(object: Partial<_53.MessageOut_KeygenResult>): _53.MessageOut_KeygenResult;
                    fromAmino(object: _53.MessageOut_KeygenResultAmino): _53.MessageOut_KeygenResult;
                    toAmino(message: _53.MessageOut_KeygenResult): _53.MessageOut_KeygenResultAmino;
                    fromAminoMsg(object: _53.MessageOut_KeygenResultAminoMsg): _53.MessageOut_KeygenResult;
                    fromProtoMsg(message: _53.MessageOut_KeygenResultProtoMsg): _53.MessageOut_KeygenResult;
                    toProto(message: _53.MessageOut_KeygenResult): Uint8Array;
                    toProtoMsg(message: _53.MessageOut_KeygenResult): _53.MessageOut_KeygenResultProtoMsg;
                };
                MessageOut_SignResult: {
                    typeUrl: string;
                    encode(message: _53.MessageOut_SignResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.MessageOut_SignResult;
                    fromPartial(object: Partial<_53.MessageOut_SignResult>): _53.MessageOut_SignResult;
                    fromAmino(object: _53.MessageOut_SignResultAmino): _53.MessageOut_SignResult;
                    toAmino(message: _53.MessageOut_SignResult): _53.MessageOut_SignResultAmino;
                    fromAminoMsg(object: _53.MessageOut_SignResultAminoMsg): _53.MessageOut_SignResult;
                    fromProtoMsg(message: _53.MessageOut_SignResultProtoMsg): _53.MessageOut_SignResult;
                    toProto(message: _53.MessageOut_SignResult): Uint8Array;
                    toProtoMsg(message: _53.MessageOut_SignResult): _53.MessageOut_SignResultProtoMsg;
                };
                MessageOut_CriminalList: {
                    typeUrl: string;
                    encode(message: _53.MessageOut_CriminalList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.MessageOut_CriminalList;
                    fromPartial(object: Partial<_53.MessageOut_CriminalList>): _53.MessageOut_CriminalList;
                    fromAmino(object: _53.MessageOut_CriminalListAmino): _53.MessageOut_CriminalList;
                    toAmino(message: _53.MessageOut_CriminalList): _53.MessageOut_CriminalListAmino;
                    fromAminoMsg(object: _53.MessageOut_CriminalListAminoMsg): _53.MessageOut_CriminalList;
                    fromProtoMsg(message: _53.MessageOut_CriminalListProtoMsg): _53.MessageOut_CriminalList;
                    toProto(message: _53.MessageOut_CriminalList): Uint8Array;
                    toProtoMsg(message: _53.MessageOut_CriminalList): _53.MessageOut_CriminalListProtoMsg;
                };
                MessageOut_CriminalList_Criminal: {
                    typeUrl: string;
                    encode(message: _53.MessageOut_CriminalList_Criminal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.MessageOut_CriminalList_Criminal;
                    fromPartial(object: Partial<_53.MessageOut_CriminalList_Criminal>): _53.MessageOut_CriminalList_Criminal;
                    fromAmino(object: _53.MessageOut_CriminalList_CriminalAmino): _53.MessageOut_CriminalList_Criminal;
                    toAmino(message: _53.MessageOut_CriminalList_Criminal): _53.MessageOut_CriminalList_CriminalAmino;
                    fromAminoMsg(object: _53.MessageOut_CriminalList_CriminalAminoMsg): _53.MessageOut_CriminalList_Criminal;
                    fromProtoMsg(message: _53.MessageOut_CriminalList_CriminalProtoMsg): _53.MessageOut_CriminalList_Criminal;
                    toProto(message: _53.MessageOut_CriminalList_Criminal): Uint8Array;
                    toProtoMsg(message: _53.MessageOut_CriminalList_Criminal): _53.MessageOut_CriminalList_CriminalProtoMsg;
                };
                TrafficIn: {
                    typeUrl: string;
                    encode(message: _53.TrafficIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.TrafficIn;
                    fromPartial(object: Partial<_53.TrafficIn>): _53.TrafficIn;
                    fromAmino(object: _53.TrafficInAmino): _53.TrafficIn;
                    toAmino(message: _53.TrafficIn): _53.TrafficInAmino;
                    fromAminoMsg(object: _53.TrafficInAminoMsg): _53.TrafficIn;
                    fromProtoMsg(message: _53.TrafficInProtoMsg): _53.TrafficIn;
                    toProto(message: _53.TrafficIn): Uint8Array;
                    toProtoMsg(message: _53.TrafficIn): _53.TrafficInProtoMsg;
                };
                TrafficOut: {
                    typeUrl: string;
                    encode(message: _53.TrafficOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.TrafficOut;
                    fromPartial(object: Partial<_53.TrafficOut>): _53.TrafficOut;
                    fromAmino(object: _53.TrafficOutAmino): _53.TrafficOut;
                    toAmino(message: _53.TrafficOut): _53.TrafficOutAmino;
                    fromAminoMsg(object: _53.TrafficOutAminoMsg): _53.TrafficOut;
                    fromProtoMsg(message: _53.TrafficOutProtoMsg): _53.TrafficOut;
                    toProto(message: _53.TrafficOut): Uint8Array;
                    toProtoMsg(message: _53.TrafficOut): _53.TrafficOutProtoMsg;
                };
                KeygenInit: {
                    typeUrl: string;
                    encode(message: _53.KeygenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.KeygenInit;
                    fromPartial(object: Partial<_53.KeygenInit>): _53.KeygenInit;
                    fromAmino(object: _53.KeygenInitAmino): _53.KeygenInit;
                    toAmino(message: _53.KeygenInit): _53.KeygenInitAmino;
                    fromAminoMsg(object: _53.KeygenInitAminoMsg): _53.KeygenInit;
                    fromProtoMsg(message: _53.KeygenInitProtoMsg): _53.KeygenInit;
                    toProto(message: _53.KeygenInit): Uint8Array;
                    toProtoMsg(message: _53.KeygenInit): _53.KeygenInitProtoMsg;
                };
                SignInit: {
                    typeUrl: string;
                    encode(message: _53.SignInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.SignInit;
                    fromPartial(object: Partial<_53.SignInit>): _53.SignInit;
                    fromAmino(object: _53.SignInitAmino): _53.SignInit;
                    toAmino(message: _53.SignInit): _53.SignInitAmino;
                    fromAminoMsg(object: _53.SignInitAminoMsg): _53.SignInit;
                    fromProtoMsg(message: _53.SignInitProtoMsg): _53.SignInit;
                    toProto(message: _53.SignInit): Uint8Array;
                    toProtoMsg(message: _53.SignInit): _53.SignInitProtoMsg;
                };
                KeygenRequest: {
                    typeUrl: string;
                    encode(message: _52.KeygenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.KeygenRequest;
                    fromPartial(object: Partial<_52.KeygenRequest>): _52.KeygenRequest;
                    fromAmino(object: _52.KeygenRequestAmino): _52.KeygenRequest;
                    toAmino(message: _52.KeygenRequest): _52.KeygenRequestAmino;
                    fromAminoMsg(object: _52.KeygenRequestAminoMsg): _52.KeygenRequest;
                    fromProtoMsg(message: _52.KeygenRequestProtoMsg): _52.KeygenRequest;
                    toProto(message: _52.KeygenRequest): Uint8Array;
                    toProtoMsg(message: _52.KeygenRequest): _52.KeygenRequestProtoMsg;
                };
                KeygenResponse: {
                    typeUrl: string;
                    encode(message: _52.KeygenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.KeygenResponse;
                    fromPartial(object: Partial<_52.KeygenResponse>): _52.KeygenResponse;
                    fromAmino(object: _52.KeygenResponseAmino): _52.KeygenResponse;
                    toAmino(message: _52.KeygenResponse): _52.KeygenResponseAmino;
                    fromAminoMsg(object: _52.KeygenResponseAminoMsg): _52.KeygenResponse;
                    fromProtoMsg(message: _52.KeygenResponseProtoMsg): _52.KeygenResponse;
                    toProto(message: _52.KeygenResponse): Uint8Array;
                    toProtoMsg(message: _52.KeygenResponse): _52.KeygenResponseProtoMsg;
                };
                SignRequest: {
                    typeUrl: string;
                    encode(message: _52.SignRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.SignRequest;
                    fromPartial(object: Partial<_52.SignRequest>): _52.SignRequest;
                    fromAmino(object: _52.SignRequestAmino): _52.SignRequest;
                    toAmino(message: _52.SignRequest): _52.SignRequestAmino;
                    fromAminoMsg(object: _52.SignRequestAminoMsg): _52.SignRequest;
                    fromProtoMsg(message: _52.SignRequestProtoMsg): _52.SignRequest;
                    toProto(message: _52.SignRequest): Uint8Array;
                    toProtoMsg(message: _52.SignRequest): _52.SignRequestProtoMsg;
                };
                SignResponse: {
                    typeUrl: string;
                    encode(message: _52.SignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.SignResponse;
                    fromPartial(object: Partial<_52.SignResponse>): _52.SignResponse;
                    fromAmino(object: _52.SignResponseAmino): _52.SignResponse;
                    toAmino(message: _52.SignResponse): _52.SignResponseAmino;
                    fromAminoMsg(object: _52.SignResponseAminoMsg): _52.SignResponse;
                    fromProtoMsg(message: _52.SignResponseProtoMsg): _52.SignResponse;
                    toProto(message: _52.SignResponse): Uint8Array;
                    toProtoMsg(message: _52.SignResponse): _52.SignResponseProtoMsg;
                };
                keyPresenceResponse_ResponseFromJSON(object: any): _51.KeyPresenceResponse_Response;
                keyPresenceResponse_ResponseToJSON(object: _51.KeyPresenceResponse_Response): string;
                KeyPresenceResponse_Response: typeof _51.KeyPresenceResponse_Response;
                KeyPresenceResponse_ResponseSDKType: typeof _51.KeyPresenceResponse_Response;
                KeyPresenceResponse_ResponseAmino: typeof _51.KeyPresenceResponse_Response;
                KeyPresenceRequest: {
                    typeUrl: string;
                    encode(message: _51.KeyPresenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.KeyPresenceRequest;
                    fromPartial(object: Partial<_51.KeyPresenceRequest>): _51.KeyPresenceRequest;
                    fromAmino(object: _51.KeyPresenceRequestAmino): _51.KeyPresenceRequest;
                    toAmino(message: _51.KeyPresenceRequest): _51.KeyPresenceRequestAmino;
                    fromAminoMsg(object: _51.KeyPresenceRequestAminoMsg): _51.KeyPresenceRequest;
                    fromProtoMsg(message: _51.KeyPresenceRequestProtoMsg): _51.KeyPresenceRequest;
                    toProto(message: _51.KeyPresenceRequest): Uint8Array;
                    toProtoMsg(message: _51.KeyPresenceRequest): _51.KeyPresenceRequestProtoMsg;
                };
                KeyPresenceResponse: {
                    typeUrl: string;
                    encode(message: _51.KeyPresenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.KeyPresenceResponse;
                    fromPartial(object: Partial<_51.KeyPresenceResponse>): _51.KeyPresenceResponse;
                    fromAmino(object: _51.KeyPresenceResponseAmino): _51.KeyPresenceResponse;
                    toAmino(message: _51.KeyPresenceResponse): _51.KeyPresenceResponseAmino;
                    fromAminoMsg(object: _51.KeyPresenceResponseAminoMsg): _51.KeyPresenceResponse;
                    fromProtoMsg(message: _51.KeyPresenceResponseProtoMsg): _51.KeyPresenceResponse;
                    toProto(message: _51.KeyPresenceResponse): Uint8Array;
                    toProtoMsg(message: _51.KeyPresenceResponse): _51.KeyPresenceResponseProtoMsg;
                };
            };
        }
        const v1beta1: {
            KeygenVoteData: {
                typeUrl: string;
                encode(message: _58.KeygenVoteData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.KeygenVoteData;
                fromPartial(object: Partial<_58.KeygenVoteData>): _58.KeygenVoteData;
                fromAmino(object: _58.KeygenVoteDataAmino): _58.KeygenVoteData;
                toAmino(message: _58.KeygenVoteData): _58.KeygenVoteDataAmino;
                fromAminoMsg(object: _58.KeygenVoteDataAminoMsg): _58.KeygenVoteData;
                fromProtoMsg(message: _58.KeygenVoteDataProtoMsg): _58.KeygenVoteData;
                toProto(message: _58.KeygenVoteData): Uint8Array;
                toProtoMsg(message: _58.KeygenVoteData): _58.KeygenVoteDataProtoMsg;
            };
            KeyInfo: {
                typeUrl: string;
                encode(message: _58.KeyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.KeyInfo;
                fromPartial(object: Partial<_58.KeyInfo>): _58.KeyInfo;
                fromAmino(object: _58.KeyInfoAmino): _58.KeyInfo;
                toAmino(message: _58.KeyInfo): _58.KeyInfoAmino;
                fromAminoMsg(object: _58.KeyInfoAminoMsg): _58.KeyInfo;
                fromProtoMsg(message: _58.KeyInfoProtoMsg): _58.KeyInfo;
                toProto(message: _58.KeyInfo): Uint8Array;
                toProtoMsg(message: _58.KeyInfo): _58.KeyInfoProtoMsg;
            };
            MultisigInfo: {
                typeUrl: string;
                encode(message: _58.MultisigInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MultisigInfo;
                fromPartial(object: Partial<_58.MultisigInfo>): _58.MultisigInfo;
                fromAmino(object: _58.MultisigInfoAmino): _58.MultisigInfo;
                toAmino(message: _58.MultisigInfo): _58.MultisigInfoAmino;
                fromAminoMsg(object: _58.MultisigInfoAminoMsg): _58.MultisigInfo;
                fromProtoMsg(message: _58.MultisigInfoProtoMsg): _58.MultisigInfo;
                toProto(message: _58.MultisigInfo): Uint8Array;
                toProtoMsg(message: _58.MultisigInfo): _58.MultisigInfoProtoMsg;
            };
            MultisigInfo_Info: {
                typeUrl: string;
                encode(message: _58.MultisigInfo_Info, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MultisigInfo_Info;
                fromPartial(object: Partial<_58.MultisigInfo_Info>): _58.MultisigInfo_Info;
                fromAmino(object: _58.MultisigInfo_InfoAmino): _58.MultisigInfo_Info;
                toAmino(message: _58.MultisigInfo_Info): _58.MultisigInfo_InfoAmino;
                fromAminoMsg(object: _58.MultisigInfo_InfoAminoMsg): _58.MultisigInfo_Info;
                fromProtoMsg(message: _58.MultisigInfo_InfoProtoMsg): _58.MultisigInfo_Info;
                toProto(message: _58.MultisigInfo_Info): Uint8Array;
                toProtoMsg(message: _58.MultisigInfo_Info): _58.MultisigInfo_InfoProtoMsg;
            };
            KeyRecoveryInfo_PrivateEntry: {
                encode(message: _58.KeyRecoveryInfo_PrivateEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.KeyRecoveryInfo_PrivateEntry;
                fromPartial(object: Partial<_58.KeyRecoveryInfo_PrivateEntry>): _58.KeyRecoveryInfo_PrivateEntry;
                fromAmino(object: _58.KeyRecoveryInfo_PrivateEntryAmino): _58.KeyRecoveryInfo_PrivateEntry;
                toAmino(message: _58.KeyRecoveryInfo_PrivateEntry): _58.KeyRecoveryInfo_PrivateEntryAmino;
                fromAminoMsg(object: _58.KeyRecoveryInfo_PrivateEntryAminoMsg): _58.KeyRecoveryInfo_PrivateEntry;
                fromProtoMsg(message: _58.KeyRecoveryInfo_PrivateEntryProtoMsg): _58.KeyRecoveryInfo_PrivateEntry;
                toProto(message: _58.KeyRecoveryInfo_PrivateEntry): Uint8Array;
            };
            KeyRecoveryInfo: {
                typeUrl: string;
                encode(message: _58.KeyRecoveryInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.KeyRecoveryInfo;
                fromPartial(object: Partial<_58.KeyRecoveryInfo>): _58.KeyRecoveryInfo;
                fromAmino(object: _58.KeyRecoveryInfoAmino): _58.KeyRecoveryInfo;
                toAmino(message: _58.KeyRecoveryInfo): _58.KeyRecoveryInfoAmino;
                fromAminoMsg(object: _58.KeyRecoveryInfoAminoMsg): _58.KeyRecoveryInfo;
                fromProtoMsg(message: _58.KeyRecoveryInfoProtoMsg): _58.KeyRecoveryInfo;
                toProto(message: _58.KeyRecoveryInfo): Uint8Array;
                toProtoMsg(message: _58.KeyRecoveryInfo): _58.KeyRecoveryInfoProtoMsg;
            };
            ExternalKeys: {
                typeUrl: string;
                encode(message: _58.ExternalKeys, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ExternalKeys;
                fromPartial(object: Partial<_58.ExternalKeys>): _58.ExternalKeys;
                fromAmino(object: _58.ExternalKeysAmino): _58.ExternalKeys;
                toAmino(message: _58.ExternalKeys): _58.ExternalKeysAmino;
                fromAminoMsg(object: _58.ExternalKeysAminoMsg): _58.ExternalKeys;
                fromProtoMsg(message: _58.ExternalKeysProtoMsg): _58.ExternalKeys;
                toProto(message: _58.ExternalKeys): Uint8Array;
                toProtoMsg(message: _58.ExternalKeys): _58.ExternalKeysProtoMsg;
            };
            ValidatorStatus: {
                typeUrl: string;
                encode(message: _58.ValidatorStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorStatus;
                fromPartial(object: Partial<_58.ValidatorStatus>): _58.ValidatorStatus;
                fromAmino(object: _58.ValidatorStatusAmino): _58.ValidatorStatus;
                toAmino(message: _58.ValidatorStatus): _58.ValidatorStatusAmino;
                fromAminoMsg(object: _58.ValidatorStatusAminoMsg): _58.ValidatorStatus;
                fromProtoMsg(message: _58.ValidatorStatusProtoMsg): _58.ValidatorStatus;
                toProto(message: _58.ValidatorStatus): Uint8Array;
                toProtoMsg(message: _58.ValidatorStatus): _58.ValidatorStatusProtoMsg;
            };
            StartKeygenRequest: {
                typeUrl: string;
                encode(message: _57.StartKeygenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.StartKeygenRequest;
                fromPartial(object: Partial<_57.StartKeygenRequest>): _57.StartKeygenRequest;
                fromAmino(object: _57.StartKeygenRequestAmino): _57.StartKeygenRequest;
                toAmino(message: _57.StartKeygenRequest): _57.StartKeygenRequestAmino;
                fromAminoMsg(object: _57.StartKeygenRequestAminoMsg): _57.StartKeygenRequest;
                fromProtoMsg(message: _57.StartKeygenRequestProtoMsg): _57.StartKeygenRequest;
                toProto(message: _57.StartKeygenRequest): Uint8Array;
                toProtoMsg(message: _57.StartKeygenRequest): _57.StartKeygenRequestProtoMsg;
            };
            StartKeygenResponse: {
                typeUrl: string;
                encode(_: _57.StartKeygenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.StartKeygenResponse;
                fromPartial(_: Partial<_57.StartKeygenResponse>): _57.StartKeygenResponse;
                fromAmino(_: _57.StartKeygenResponseAmino): _57.StartKeygenResponse;
                toAmino(_: _57.StartKeygenResponse): _57.StartKeygenResponseAmino;
                fromAminoMsg(object: _57.StartKeygenResponseAminoMsg): _57.StartKeygenResponse;
                fromProtoMsg(message: _57.StartKeygenResponseProtoMsg): _57.StartKeygenResponse;
                toProto(message: _57.StartKeygenResponse): Uint8Array;
                toProtoMsg(message: _57.StartKeygenResponse): _57.StartKeygenResponseProtoMsg;
            };
            RotateKeyRequest: {
                typeUrl: string;
                encode(message: _57.RotateKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.RotateKeyRequest;
                fromPartial(object: Partial<_57.RotateKeyRequest>): _57.RotateKeyRequest;
                fromAmino(object: _57.RotateKeyRequestAmino): _57.RotateKeyRequest;
                toAmino(message: _57.RotateKeyRequest): _57.RotateKeyRequestAmino;
                fromAminoMsg(object: _57.RotateKeyRequestAminoMsg): _57.RotateKeyRequest;
                fromProtoMsg(message: _57.RotateKeyRequestProtoMsg): _57.RotateKeyRequest;
                toProto(message: _57.RotateKeyRequest): Uint8Array;
                toProtoMsg(message: _57.RotateKeyRequest): _57.RotateKeyRequestProtoMsg;
            };
            RotateKeyResponse: {
                typeUrl: string;
                encode(_: _57.RotateKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.RotateKeyResponse;
                fromPartial(_: Partial<_57.RotateKeyResponse>): _57.RotateKeyResponse;
                fromAmino(_: _57.RotateKeyResponseAmino): _57.RotateKeyResponse;
                toAmino(_: _57.RotateKeyResponse): _57.RotateKeyResponseAmino;
                fromAminoMsg(object: _57.RotateKeyResponseAminoMsg): _57.RotateKeyResponse;
                fromProtoMsg(message: _57.RotateKeyResponseProtoMsg): _57.RotateKeyResponse;
                toProto(message: _57.RotateKeyResponse): Uint8Array;
                toProtoMsg(message: _57.RotateKeyResponse): _57.RotateKeyResponseProtoMsg;
            };
            ProcessKeygenTrafficRequest: {
                typeUrl: string;
                encode(message: _57.ProcessKeygenTrafficRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ProcessKeygenTrafficRequest;
                fromPartial(object: Partial<_57.ProcessKeygenTrafficRequest>): _57.ProcessKeygenTrafficRequest;
                fromAmino(object: _57.ProcessKeygenTrafficRequestAmino): _57.ProcessKeygenTrafficRequest;
                toAmino(message: _57.ProcessKeygenTrafficRequest): _57.ProcessKeygenTrafficRequestAmino;
                fromAminoMsg(object: _57.ProcessKeygenTrafficRequestAminoMsg): _57.ProcessKeygenTrafficRequest;
                fromProtoMsg(message: _57.ProcessKeygenTrafficRequestProtoMsg): _57.ProcessKeygenTrafficRequest;
                toProto(message: _57.ProcessKeygenTrafficRequest): Uint8Array;
                toProtoMsg(message: _57.ProcessKeygenTrafficRequest): _57.ProcessKeygenTrafficRequestProtoMsg;
            };
            ProcessKeygenTrafficResponse: {
                typeUrl: string;
                encode(_: _57.ProcessKeygenTrafficResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.ProcessKeygenTrafficResponse;
                fromPartial(_: Partial<_57.ProcessKeygenTrafficResponse>): _57.ProcessKeygenTrafficResponse;
                fromAmino(_: _57.ProcessKeygenTrafficResponseAmino): _57.ProcessKeygenTrafficResponse;
                toAmino(_: _57.ProcessKeygenTrafficResponse): _57.ProcessKeygenTrafficResponseAmino;
                fromAminoMsg(object: _57.ProcessKeygenTrafficResponseAminoMsg): _57.ProcessKeygenTrafficResponse;
                fromProtoMsg(message: _57.ProcessKeygenTrafficResponseProtoMsg): _57.ProcessKeygenTrafficResponse;
                toProto(message: _57.ProcessKeygenTrafficResponse): Uint8Array;
                toProtoMsg(message: _57.ProcessKeygenTrafficResponse): _57.ProcessKeygenTrafficResponseProtoMsg;
            };
            ProcessSignTrafficRequest: {
                typeUrl: string;
                encode(message: _57.ProcessSignTrafficRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ProcessSignTrafficRequest;
                fromPartial(object: Partial<_57.ProcessSignTrafficRequest>): _57.ProcessSignTrafficRequest;
                fromAmino(object: _57.ProcessSignTrafficRequestAmino): _57.ProcessSignTrafficRequest;
                toAmino(message: _57.ProcessSignTrafficRequest): _57.ProcessSignTrafficRequestAmino;
                fromAminoMsg(object: _57.ProcessSignTrafficRequestAminoMsg): _57.ProcessSignTrafficRequest;
                fromProtoMsg(message: _57.ProcessSignTrafficRequestProtoMsg): _57.ProcessSignTrafficRequest;
                toProto(message: _57.ProcessSignTrafficRequest): Uint8Array;
                toProtoMsg(message: _57.ProcessSignTrafficRequest): _57.ProcessSignTrafficRequestProtoMsg;
            };
            ProcessSignTrafficResponse: {
                typeUrl: string;
                encode(_: _57.ProcessSignTrafficResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.ProcessSignTrafficResponse;
                fromPartial(_: Partial<_57.ProcessSignTrafficResponse>): _57.ProcessSignTrafficResponse;
                fromAmino(_: _57.ProcessSignTrafficResponseAmino): _57.ProcessSignTrafficResponse;
                toAmino(_: _57.ProcessSignTrafficResponse): _57.ProcessSignTrafficResponseAmino;
                fromAminoMsg(object: _57.ProcessSignTrafficResponseAminoMsg): _57.ProcessSignTrafficResponse;
                fromProtoMsg(message: _57.ProcessSignTrafficResponseProtoMsg): _57.ProcessSignTrafficResponse;
                toProto(message: _57.ProcessSignTrafficResponse): Uint8Array;
                toProtoMsg(message: _57.ProcessSignTrafficResponse): _57.ProcessSignTrafficResponseProtoMsg;
            };
            VotePubKeyRequest: {
                typeUrl: string;
                encode(message: _57.VotePubKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.VotePubKeyRequest;
                fromPartial(object: Partial<_57.VotePubKeyRequest>): _57.VotePubKeyRequest;
                fromAmino(object: _57.VotePubKeyRequestAmino): _57.VotePubKeyRequest;
                toAmino(message: _57.VotePubKeyRequest): _57.VotePubKeyRequestAmino;
                fromAminoMsg(object: _57.VotePubKeyRequestAminoMsg): _57.VotePubKeyRequest;
                fromProtoMsg(message: _57.VotePubKeyRequestProtoMsg): _57.VotePubKeyRequest;
                toProto(message: _57.VotePubKeyRequest): Uint8Array;
                toProtoMsg(message: _57.VotePubKeyRequest): _57.VotePubKeyRequestProtoMsg;
            };
            VotePubKeyResponse: {
                typeUrl: string;
                encode(message: _57.VotePubKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.VotePubKeyResponse;
                fromPartial(object: Partial<_57.VotePubKeyResponse>): _57.VotePubKeyResponse;
                fromAmino(object: _57.VotePubKeyResponseAmino): _57.VotePubKeyResponse;
                toAmino(message: _57.VotePubKeyResponse): _57.VotePubKeyResponseAmino;
                fromAminoMsg(object: _57.VotePubKeyResponseAminoMsg): _57.VotePubKeyResponse;
                fromProtoMsg(message: _57.VotePubKeyResponseProtoMsg): _57.VotePubKeyResponse;
                toProto(message: _57.VotePubKeyResponse): Uint8Array;
                toProtoMsg(message: _57.VotePubKeyResponse): _57.VotePubKeyResponseProtoMsg;
            };
            VoteSigRequest: {
                typeUrl: string;
                encode(message: _57.VoteSigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.VoteSigRequest;
                fromPartial(object: Partial<_57.VoteSigRequest>): _57.VoteSigRequest;
                fromAmino(object: _57.VoteSigRequestAmino): _57.VoteSigRequest;
                toAmino(message: _57.VoteSigRequest): _57.VoteSigRequestAmino;
                fromAminoMsg(object: _57.VoteSigRequestAminoMsg): _57.VoteSigRequest;
                fromProtoMsg(message: _57.VoteSigRequestProtoMsg): _57.VoteSigRequest;
                toProto(message: _57.VoteSigRequest): Uint8Array;
                toProtoMsg(message: _57.VoteSigRequest): _57.VoteSigRequestProtoMsg;
            };
            VoteSigResponse: {
                typeUrl: string;
                encode(message: _57.VoteSigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.VoteSigResponse;
                fromPartial(object: Partial<_57.VoteSigResponse>): _57.VoteSigResponse;
                fromAmino(object: _57.VoteSigResponseAmino): _57.VoteSigResponse;
                toAmino(message: _57.VoteSigResponse): _57.VoteSigResponseAmino;
                fromAminoMsg(object: _57.VoteSigResponseAminoMsg): _57.VoteSigResponse;
                fromProtoMsg(message: _57.VoteSigResponseProtoMsg): _57.VoteSigResponse;
                toProto(message: _57.VoteSigResponse): Uint8Array;
                toProtoMsg(message: _57.VoteSigResponse): _57.VoteSigResponseProtoMsg;
            };
            HeartBeatRequest: {
                typeUrl: string;
                encode(message: _57.HeartBeatRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.HeartBeatRequest;
                fromPartial(object: Partial<_57.HeartBeatRequest>): _57.HeartBeatRequest;
                fromAmino(object: _57.HeartBeatRequestAmino): _57.HeartBeatRequest;
                toAmino(message: _57.HeartBeatRequest): _57.HeartBeatRequestAmino;
                fromAminoMsg(object: _57.HeartBeatRequestAminoMsg): _57.HeartBeatRequest;
                fromProtoMsg(message: _57.HeartBeatRequestProtoMsg): _57.HeartBeatRequest;
                toProto(message: _57.HeartBeatRequest): Uint8Array;
                toProtoMsg(message: _57.HeartBeatRequest): _57.HeartBeatRequestProtoMsg;
            };
            HeartBeatResponse: {
                typeUrl: string;
                encode(_: _57.HeartBeatResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.HeartBeatResponse;
                fromPartial(_: Partial<_57.HeartBeatResponse>): _57.HeartBeatResponse;
                fromAmino(_: _57.HeartBeatResponseAmino): _57.HeartBeatResponse;
                toAmino(_: _57.HeartBeatResponse): _57.HeartBeatResponseAmino;
                fromAminoMsg(object: _57.HeartBeatResponseAminoMsg): _57.HeartBeatResponse;
                fromProtoMsg(message: _57.HeartBeatResponseProtoMsg): _57.HeartBeatResponse;
                toProto(message: _57.HeartBeatResponse): Uint8Array;
                toProtoMsg(message: _57.HeartBeatResponse): _57.HeartBeatResponseProtoMsg;
            };
            RegisterExternalKeysRequest: {
                typeUrl: string;
                encode(message: _57.RegisterExternalKeysRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.RegisterExternalKeysRequest;
                fromPartial(object: Partial<_57.RegisterExternalKeysRequest>): _57.RegisterExternalKeysRequest;
                fromAmino(object: _57.RegisterExternalKeysRequestAmino): _57.RegisterExternalKeysRequest;
                toAmino(message: _57.RegisterExternalKeysRequest): _57.RegisterExternalKeysRequestAmino;
                fromAminoMsg(object: _57.RegisterExternalKeysRequestAminoMsg): _57.RegisterExternalKeysRequest;
                fromProtoMsg(message: _57.RegisterExternalKeysRequestProtoMsg): _57.RegisterExternalKeysRequest;
                toProto(message: _57.RegisterExternalKeysRequest): Uint8Array;
                toProtoMsg(message: _57.RegisterExternalKeysRequest): _57.RegisterExternalKeysRequestProtoMsg;
            };
            RegisterExternalKeysRequest_ExternalKey: {
                typeUrl: string;
                encode(message: _57.RegisterExternalKeysRequest_ExternalKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.RegisterExternalKeysRequest_ExternalKey;
                fromPartial(object: Partial<_57.RegisterExternalKeysRequest_ExternalKey>): _57.RegisterExternalKeysRequest_ExternalKey;
                fromAmino(object: _57.RegisterExternalKeysRequest_ExternalKeyAmino): _57.RegisterExternalKeysRequest_ExternalKey;
                toAmino(message: _57.RegisterExternalKeysRequest_ExternalKey): _57.RegisterExternalKeysRequest_ExternalKeyAmino;
                fromAminoMsg(object: _57.RegisterExternalKeysRequest_ExternalKeyAminoMsg): _57.RegisterExternalKeysRequest_ExternalKey;
                fromProtoMsg(message: _57.RegisterExternalKeysRequest_ExternalKeyProtoMsg): _57.RegisterExternalKeysRequest_ExternalKey;
                toProto(message: _57.RegisterExternalKeysRequest_ExternalKey): Uint8Array;
                toProtoMsg(message: _57.RegisterExternalKeysRequest_ExternalKey): _57.RegisterExternalKeysRequest_ExternalKeyProtoMsg;
            };
            RegisterExternalKeysResponse: {
                typeUrl: string;
                encode(_: _57.RegisterExternalKeysResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.RegisterExternalKeysResponse;
                fromPartial(_: Partial<_57.RegisterExternalKeysResponse>): _57.RegisterExternalKeysResponse;
                fromAmino(_: _57.RegisterExternalKeysResponseAmino): _57.RegisterExternalKeysResponse;
                toAmino(_: _57.RegisterExternalKeysResponse): _57.RegisterExternalKeysResponseAmino;
                fromAminoMsg(object: _57.RegisterExternalKeysResponseAminoMsg): _57.RegisterExternalKeysResponse;
                fromProtoMsg(message: _57.RegisterExternalKeysResponseProtoMsg): _57.RegisterExternalKeysResponse;
                toProto(message: _57.RegisterExternalKeysResponse): Uint8Array;
                toProtoMsg(message: _57.RegisterExternalKeysResponse): _57.RegisterExternalKeysResponseProtoMsg;
            };
            SubmitMultisigPubKeysRequest: {
                typeUrl: string;
                encode(message: _57.SubmitMultisigPubKeysRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.SubmitMultisigPubKeysRequest;
                fromPartial(object: Partial<_57.SubmitMultisigPubKeysRequest>): _57.SubmitMultisigPubKeysRequest;
                fromAmino(object: _57.SubmitMultisigPubKeysRequestAmino): _57.SubmitMultisigPubKeysRequest;
                toAmino(message: _57.SubmitMultisigPubKeysRequest): _57.SubmitMultisigPubKeysRequestAmino;
                fromAminoMsg(object: _57.SubmitMultisigPubKeysRequestAminoMsg): _57.SubmitMultisigPubKeysRequest;
                fromProtoMsg(message: _57.SubmitMultisigPubKeysRequestProtoMsg): _57.SubmitMultisigPubKeysRequest;
                toProto(message: _57.SubmitMultisigPubKeysRequest): Uint8Array;
                toProtoMsg(message: _57.SubmitMultisigPubKeysRequest): _57.SubmitMultisigPubKeysRequestProtoMsg;
            };
            SubmitMultisigPubKeysResponse: {
                typeUrl: string;
                encode(_: _57.SubmitMultisigPubKeysResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.SubmitMultisigPubKeysResponse;
                fromPartial(_: Partial<_57.SubmitMultisigPubKeysResponse>): _57.SubmitMultisigPubKeysResponse;
                fromAmino(_: _57.SubmitMultisigPubKeysResponseAmino): _57.SubmitMultisigPubKeysResponse;
                toAmino(_: _57.SubmitMultisigPubKeysResponse): _57.SubmitMultisigPubKeysResponseAmino;
                fromAminoMsg(object: _57.SubmitMultisigPubKeysResponseAminoMsg): _57.SubmitMultisigPubKeysResponse;
                fromProtoMsg(message: _57.SubmitMultisigPubKeysResponseProtoMsg): _57.SubmitMultisigPubKeysResponse;
                toProto(message: _57.SubmitMultisigPubKeysResponse): Uint8Array;
                toProtoMsg(message: _57.SubmitMultisigPubKeysResponse): _57.SubmitMultisigPubKeysResponseProtoMsg;
            };
            SubmitMultisigSignaturesRequest: {
                typeUrl: string;
                encode(message: _57.SubmitMultisigSignaturesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.SubmitMultisigSignaturesRequest;
                fromPartial(object: Partial<_57.SubmitMultisigSignaturesRequest>): _57.SubmitMultisigSignaturesRequest;
                fromAmino(object: _57.SubmitMultisigSignaturesRequestAmino): _57.SubmitMultisigSignaturesRequest;
                toAmino(message: _57.SubmitMultisigSignaturesRequest): _57.SubmitMultisigSignaturesRequestAmino;
                fromAminoMsg(object: _57.SubmitMultisigSignaturesRequestAminoMsg): _57.SubmitMultisigSignaturesRequest;
                fromProtoMsg(message: _57.SubmitMultisigSignaturesRequestProtoMsg): _57.SubmitMultisigSignaturesRequest;
                toProto(message: _57.SubmitMultisigSignaturesRequest): Uint8Array;
                toProtoMsg(message: _57.SubmitMultisigSignaturesRequest): _57.SubmitMultisigSignaturesRequestProtoMsg;
            };
            SubmitMultisigSignaturesResponse: {
                typeUrl: string;
                encode(_: _57.SubmitMultisigSignaturesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.SubmitMultisigSignaturesResponse;
                fromPartial(_: Partial<_57.SubmitMultisigSignaturesResponse>): _57.SubmitMultisigSignaturesResponse;
                fromAmino(_: _57.SubmitMultisigSignaturesResponseAmino): _57.SubmitMultisigSignaturesResponse;
                toAmino(_: _57.SubmitMultisigSignaturesResponse): _57.SubmitMultisigSignaturesResponseAmino;
                fromAminoMsg(object: _57.SubmitMultisigSignaturesResponseAminoMsg): _57.SubmitMultisigSignaturesResponse;
                fromProtoMsg(message: _57.SubmitMultisigSignaturesResponseProtoMsg): _57.SubmitMultisigSignaturesResponse;
                toProto(message: _57.SubmitMultisigSignaturesResponse): Uint8Array;
                toProtoMsg(message: _57.SubmitMultisigSignaturesResponse): _57.SubmitMultisigSignaturesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _55.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Params;
                fromPartial(object: Partial<_55.Params>): _55.Params;
                fromAmino(object: _55.ParamsAmino): _55.Params;
                toAmino(message: _55.Params): _55.ParamsAmino;
                fromAminoMsg(object: _55.ParamsAminoMsg): _55.Params;
                fromProtoMsg(message: _55.ParamsProtoMsg): _55.Params;
                toProto(message: _55.Params): Uint8Array;
                toProtoMsg(message: _55.Params): _55.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _54.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                toProto(message: _54.GenesisState): Uint8Array;
                toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
            };
        };
    }
    namespace utils {
        const v1beta1: {
            Threshold: {
                typeUrl: string;
                encode(message: _61.Threshold, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Threshold;
                fromPartial(object: Partial<_61.Threshold>): _61.Threshold;
                fromAmino(object: _61.ThresholdAmino): _61.Threshold;
                toAmino(message: _61.Threshold): _61.ThresholdAmino;
                fromAminoMsg(object: _61.ThresholdAminoMsg): _61.Threshold;
                fromProtoMsg(message: _61.ThresholdProtoMsg): _61.Threshold;
                toProto(message: _61.Threshold): Uint8Array;
                toProtoMsg(message: _61.Threshold): _61.ThresholdProtoMsg;
            };
            QueueState_ItemsEntry: {
                encode(message: _60.QueueState_ItemsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueueState_ItemsEntry;
                fromPartial(object: Partial<_60.QueueState_ItemsEntry>): _60.QueueState_ItemsEntry;
                fromAmino(object: _60.QueueState_ItemsEntryAmino): _60.QueueState_ItemsEntry;
                toAmino(message: _60.QueueState_ItemsEntry): _60.QueueState_ItemsEntryAmino;
                fromAminoMsg(object: _60.QueueState_ItemsEntryAminoMsg): _60.QueueState_ItemsEntry;
                fromProtoMsg(message: _60.QueueState_ItemsEntryProtoMsg): _60.QueueState_ItemsEntry;
                toProto(message: _60.QueueState_ItemsEntry): Uint8Array;
            };
            QueueState: {
                typeUrl: string;
                encode(message: _60.QueueState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueueState;
                fromPartial(object: Partial<_60.QueueState>): _60.QueueState;
                fromAmino(object: _60.QueueStateAmino): _60.QueueState;
                toAmino(message: _60.QueueState): _60.QueueStateAmino;
                fromAminoMsg(object: _60.QueueStateAminoMsg): _60.QueueState;
                fromProtoMsg(message: _60.QueueStateProtoMsg): _60.QueueState;
                toProto(message: _60.QueueState): Uint8Array;
                toProtoMsg(message: _60.QueueState): _60.QueueStateProtoMsg;
            };
            QueueState_Item: {
                typeUrl: string;
                encode(message: _60.QueueState_Item, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueueState_Item;
                fromPartial(object: Partial<_60.QueueState_Item>): _60.QueueState_Item;
                fromAmino(object: _60.QueueState_ItemAmino): _60.QueueState_Item;
                toAmino(message: _60.QueueState_Item): _60.QueueState_ItemAmino;
                fromAminoMsg(object: _60.QueueState_ItemAminoMsg): _60.QueueState_Item;
                fromProtoMsg(message: _60.QueueState_ItemProtoMsg): _60.QueueState_Item;
                toProto(message: _60.QueueState_Item): Uint8Array;
                toProtoMsg(message: _60.QueueState_Item): _60.QueueState_ItemProtoMsg;
            };
            Bitmap: {
                typeUrl: string;
                encode(message: _59.Bitmap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.Bitmap;
                fromPartial(object: Partial<_59.Bitmap>): _59.Bitmap;
                fromAmino(object: _59.BitmapAmino): _59.Bitmap;
                toAmino(message: _59.Bitmap): _59.BitmapAmino;
                fromAminoMsg(object: _59.BitmapAminoMsg): _59.Bitmap;
                fromProtoMsg(message: _59.BitmapProtoMsg): _59.Bitmap;
                toProto(message: _59.Bitmap): Uint8Array;
                toProtoMsg(message: _59.Bitmap): _59.BitmapProtoMsg;
            };
            CircularBuffer: {
                typeUrl: string;
                encode(message: _59.CircularBuffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.CircularBuffer;
                fromPartial(object: Partial<_59.CircularBuffer>): _59.CircularBuffer;
                fromAmino(object: _59.CircularBufferAmino): _59.CircularBuffer;
                toAmino(message: _59.CircularBuffer): _59.CircularBufferAmino;
                fromAminoMsg(object: _59.CircularBufferAminoMsg): _59.CircularBuffer;
                fromProtoMsg(message: _59.CircularBufferProtoMsg): _59.CircularBuffer;
                toProto(message: _59.CircularBuffer): Uint8Array;
                toProtoMsg(message: _59.CircularBuffer): _59.CircularBufferProtoMsg;
            };
        };
    }
    namespace vote {
        namespace exported {
            const v1beta1: {
                pollStateFromJSON(object: any): _62.PollState;
                pollStateToJSON(object: _62.PollState): string;
                PollState: typeof _62.PollState;
                PollStateSDKType: typeof _62.PollState;
                PollStateAmino: typeof _62.PollState;
                PollMetadata: {
                    typeUrl: string;
                    encode(message: _62.PollMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.PollMetadata;
                    fromPartial(object: Partial<_62.PollMetadata>): _62.PollMetadata;
                    fromAmino(object: _62.PollMetadataAmino): _62.PollMetadata;
                    toAmino(message: _62.PollMetadata): _62.PollMetadataAmino;
                    fromAminoMsg(object: _62.PollMetadataAminoMsg): _62.PollMetadata;
                    fromProtoMsg(message: _62.PollMetadataProtoMsg): _62.PollMetadata;
                    toProto(message: _62.PollMetadata): Uint8Array;
                    toProtoMsg(message: _62.PollMetadata): _62.PollMetadataProtoMsg;
                };
                PollKey: {
                    typeUrl: string;
                    encode(message: _62.PollKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.PollKey;
                    fromPartial(object: Partial<_62.PollKey>): _62.PollKey;
                    fromAmino(object: _62.PollKeyAmino): _62.PollKey;
                    toAmino(message: _62.PollKey): _62.PollKeyAmino;
                    fromAminoMsg(object: _62.PollKeyAminoMsg): _62.PollKey;
                    fromProtoMsg(message: _62.PollKeyProtoMsg): _62.PollKey;
                    toProto(message: _62.PollKey): Uint8Array;
                    toProtoMsg(message: _62.PollKey): _62.PollKeyProtoMsg;
                };
                PollParticipants: {
                    typeUrl: string;
                    encode(message: _62.PollParticipants, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.PollParticipants;
                    fromPartial(object: Partial<_62.PollParticipants>): _62.PollParticipants;
                    fromAmino(object: _62.PollParticipantsAmino): _62.PollParticipants;
                    toAmino(message: _62.PollParticipants): _62.PollParticipantsAmino;
                    fromAminoMsg(object: _62.PollParticipantsAminoMsg): _62.PollParticipants;
                    fromProtoMsg(message: _62.PollParticipantsProtoMsg): _62.PollParticipants;
                    toProto(message: _62.PollParticipants): Uint8Array;
                    toProtoMsg(message: _62.PollParticipants): _62.PollParticipantsProtoMsg;
                };
                Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
                Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
                Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            };
        }
        const v1beta1: {
            TalliedVote_IsVoterLateEntry: {
                encode(message: _68.TalliedVote_IsVoterLateEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.TalliedVote_IsVoterLateEntry;
                fromPartial(object: Partial<_68.TalliedVote_IsVoterLateEntry>): _68.TalliedVote_IsVoterLateEntry;
                fromAmino(object: _68.TalliedVote_IsVoterLateEntryAmino): _68.TalliedVote_IsVoterLateEntry;
                toAmino(message: _68.TalliedVote_IsVoterLateEntry): _68.TalliedVote_IsVoterLateEntryAmino;
                fromAminoMsg(object: _68.TalliedVote_IsVoterLateEntryAminoMsg): _68.TalliedVote_IsVoterLateEntry;
                fromProtoMsg(message: _68.TalliedVote_IsVoterLateEntryProtoMsg): _68.TalliedVote_IsVoterLateEntry;
                toProto(message: _68.TalliedVote_IsVoterLateEntry): Uint8Array;
            };
            TalliedVote: {
                typeUrl: string;
                encode(message: _68.TalliedVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.TalliedVote;
                fromPartial(object: Partial<_68.TalliedVote>): _68.TalliedVote;
                fromAmino(object: _68.TalliedVoteAmino): _68.TalliedVote;
                toAmino(message: _68.TalliedVote): _68.TalliedVoteAmino;
                fromAminoMsg(object: _68.TalliedVoteAminoMsg): _68.TalliedVote;
                fromProtoMsg(message: _68.TalliedVoteProtoMsg): _68.TalliedVote;
                toProto(message: _68.TalliedVote): Uint8Array;
                toProtoMsg(message: _68.TalliedVote): _68.TalliedVoteProtoMsg;
            };
            Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            VoteRequest: {
                typeUrl: string;
                encode(message: _67.VoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.VoteRequest;
                fromPartial(object: Partial<_67.VoteRequest>): _67.VoteRequest;
                fromAmino(object: _67.VoteRequestAmino): _67.VoteRequest;
                toAmino(message: _67.VoteRequest): _67.VoteRequestAmino;
                fromAminoMsg(object: _67.VoteRequestAminoMsg): _67.VoteRequest;
                fromProtoMsg(message: _67.VoteRequestProtoMsg): _67.VoteRequest;
                toProto(message: _67.VoteRequest): Uint8Array;
                toProtoMsg(message: _67.VoteRequest): _67.VoteRequestProtoMsg;
            };
            VoteResponse: {
                typeUrl: string;
                encode(message: _67.VoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.VoteResponse;
                fromPartial(object: Partial<_67.VoteResponse>): _67.VoteResponse;
                fromAmino(object: _67.VoteResponseAmino): _67.VoteResponse;
                toAmino(message: _67.VoteResponse): _67.VoteResponseAmino;
                fromAminoMsg(object: _67.VoteResponseAminoMsg): _67.VoteResponse;
                fromProtoMsg(message: _67.VoteResponseProtoMsg): _67.VoteResponse;
                toProto(message: _67.VoteResponse): Uint8Array;
                toProtoMsg(message: _67.VoteResponse): _67.VoteResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _65.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
                fromAmino(object: _65.ParamsAmino): _65.Params;
                toAmino(message: _65.Params): _65.ParamsAmino;
                fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                toProto(message: _65.Params): Uint8Array;
                toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                toProto(message: _64.GenesisState): Uint8Array;
                toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
            };
            Voted: {
                typeUrl: string;
                encode(message: _63.Voted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Voted;
                fromPartial(object: Partial<_63.Voted>): _63.Voted;
                fromAmino(object: _63.VotedAmino): _63.Voted;
                toAmino(message: _63.Voted): _63.VotedAmino;
                fromAminoMsg(object: _63.VotedAminoMsg): _63.Voted;
                fromProtoMsg(message: _63.VotedProtoMsg): _63.Voted;
                toProto(message: _63.Voted): Uint8Array;
                toProtoMsg(message: _63.Voted): _63.VotedProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            axelar: {
                permission: {
                    v1beta1: _186.MsgClientImpl;
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
            axelar: {
                permission: {
                    v1beta1: {
                        governanceKey(request?: _33.QueryGovernanceKeyRequest): Promise<_33.QueryGovernanceKeyResponse>;
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
            axelar: {
                permission: {
                    v1beta1: _184.LCDQueryClient;
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
