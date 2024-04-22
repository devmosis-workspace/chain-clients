import * as _0 from "./axelarnet/v1beta1/events";
import * as _1 from "./axelarnet/v1beta1/genesis";
import * as _2 from "./axelarnet/v1beta1/params";
import * as _3 from "./axelarnet/v1beta1/proposal";
import * as _4 from "./axelarnet/v1beta1/query";
import * as _6 from "./axelarnet/v1beta1/tx";
import * as _7 from "./axelarnet/v1beta1/types";
import * as _8 from "./evm/v1beta1/events";
import * as _9 from "./evm/v1beta1/genesis";
import * as _10 from "./evm/v1beta1/params";
import * as _11 from "./evm/v1beta1/query";
import * as _13 from "./evm/v1beta1/tx";
import * as _14 from "./evm/v1beta1/types";
import * as _15 from "./multisig/exported/v1beta1/types";
import * as _16 from "./multisig/v1beta1/events";
import * as _17 from "./multisig/v1beta1/genesis";
import * as _18 from "./multisig/v1beta1/params";
import * as _19 from "./multisig/v1beta1/query";
import * as _21 from "./multisig/v1beta1/tx";
import * as _22 from "./multisig/v1beta1/types";
import * as _23 from "./nexus/exported/v1beta1/types";
import * as _24 from "./nexus/v1beta1/events";
import * as _25 from "./nexus/v1beta1/genesis";
import * as _26 from "./nexus/v1beta1/params";
import * as _27 from "./nexus/v1beta1/query";
import * as _29 from "./nexus/v1beta1/tx";
import * as _30 from "./nexus/v1beta1/types";
import * as _31 from "./permission/exported/v1beta1/types";
import * as _32 from "./permission/v1beta1/genesis";
import * as _33 from "./permission/v1beta1/params";
import * as _34 from "./permission/v1beta1/query";
import * as _36 from "./permission/v1beta1/tx";
import * as _37 from "./permission/v1beta1/types";
import * as _38 from "./reward/v1beta1/genesis";
import * as _39 from "./reward/v1beta1/params";
import * as _40 from "./reward/v1beta1/query";
import * as _42 from "./reward/v1beta1/tx";
import * as _43 from "./reward/v1beta1/types";
import * as _44 from "./snapshot/exported/v1beta1/types";
import * as _45 from "./snapshot/v1beta1/genesis";
import * as _46 from "./snapshot/v1beta1/params";
import * as _47 from "./snapshot/v1beta1/query";
import * as _49 from "./snapshot/v1beta1/tx";
import * as _50 from "./snapshot/v1beta1/types";
import * as _51 from "./tss/exported/v1beta1/types";
import * as _52 from "./tss/tofnd/v1beta1/common";
import * as _53 from "./tss/tofnd/v1beta1/multisig";
import * as _54 from "./tss/tofnd/v1beta1/tofnd";
import * as _55 from "./tss/v1beta1/genesis";
import * as _56 from "./tss/v1beta1/params";
import * as _57 from "./tss/v1beta1/query";
import * as _59 from "./tss/v1beta1/tx";
import * as _60 from "./tss/v1beta1/types";
import * as _61 from "./utils/v1beta1/bitmap";
import * as _62 from "./utils/v1beta1/queuer";
import * as _63 from "./utils/v1beta1/threshold";
import * as _64 from "./vote/exported/v1beta1/types";
import * as _65 from "./vote/v1beta1/events";
import * as _66 from "./vote/v1beta1/genesis";
import * as _67 from "./vote/v1beta1/params";
import * as _68 from "./vote/v1beta1/query";
import * as _70 from "./vote/v1beta1/tx";
import * as _71 from "./vote/v1beta1/types";
import * as _194 from "./permission/v1beta1/service.lcd";
import * as _195 from "./permission/v1beta1/service.rpc.Query";
import * as _196 from "./permission/v1beta1/service.rpc.msg";
export declare namespace axelar {
    namespace axelarnet {
        const v1beta1: {
            iBCTransfer_StatusFromJSON(object: any): _7.IBCTransfer_Status;
            iBCTransfer_StatusToJSON(object: _7.IBCTransfer_Status): string;
            IBCTransfer_Status: typeof _7.IBCTransfer_Status;
            IBCTransfer_StatusSDKType: typeof _7.IBCTransfer_Status;
            IBCTransfer_StatusAmino: typeof _7.IBCTransfer_Status;
            IBCTransfer: {
                typeUrl: string;
                encode(message: _7.IBCTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.IBCTransfer;
                fromPartial(object: Partial<_7.IBCTransfer>): _7.IBCTransfer;
                fromAmino(object: _7.IBCTransferAmino): _7.IBCTransfer;
                toAmino(message: _7.IBCTransfer): _7.IBCTransferAmino;
                fromAminoMsg(object: _7.IBCTransferAminoMsg): _7.IBCTransfer;
                fromProtoMsg(message: _7.IBCTransferProtoMsg): _7.IBCTransfer;
                toProto(message: _7.IBCTransfer): Uint8Array;
                toProtoMsg(message: _7.IBCTransfer): _7.IBCTransferProtoMsg;
            };
            CosmosChain: {
                typeUrl: string;
                encode(message: _7.CosmosChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.CosmosChain;
                fromPartial(object: Partial<_7.CosmosChain>): _7.CosmosChain;
                fromAmino(object: _7.CosmosChainAmino): _7.CosmosChain;
                toAmino(message: _7.CosmosChain): _7.CosmosChainAmino;
                fromAminoMsg(object: _7.CosmosChainAminoMsg): _7.CosmosChain;
                fromProtoMsg(message: _7.CosmosChainProtoMsg): _7.CosmosChain;
                toProto(message: _7.CosmosChain): Uint8Array;
                toProtoMsg(message: _7.CosmosChain): _7.CosmosChainProtoMsg;
            };
            Asset: {
                typeUrl: string;
                encode(message: _7.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Asset;
                fromPartial(object: Partial<_7.Asset>): _7.Asset;
                fromAmino(object: _7.AssetAmino): _7.Asset;
                toAmino(message: _7.Asset): _7.AssetAmino;
                fromAminoMsg(object: _7.AssetAminoMsg): _7.Asset;
                fromProtoMsg(message: _7.AssetProtoMsg): _7.Asset;
                toProto(message: _7.Asset): Uint8Array;
                toProtoMsg(message: _7.Asset): _7.AssetProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _7.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Fee;
                fromPartial(object: Partial<_7.Fee>): _7.Fee;
                fromAmino(object: _7.FeeAmino): _7.Fee;
                toAmino(message: _7.Fee): _7.FeeAmino;
                fromAminoMsg(object: _7.FeeAminoMsg): _7.Fee;
                fromProtoMsg(message: _7.FeeProtoMsg): _7.Fee;
                toProto(message: _7.Fee): Uint8Array;
                toProtoMsg(message: _7.Fee): _7.FeeProtoMsg;
            };
            LinkRequest: {
                typeUrl: string;
                encode(message: _6.LinkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.LinkRequest;
                fromPartial(object: Partial<_6.LinkRequest>): _6.LinkRequest;
                fromAmino(object: _6.LinkRequestAmino): _6.LinkRequest;
                toAmino(message: _6.LinkRequest): _6.LinkRequestAmino;
                fromAminoMsg(object: _6.LinkRequestAminoMsg): _6.LinkRequest;
                fromProtoMsg(message: _6.LinkRequestProtoMsg): _6.LinkRequest;
                toProto(message: _6.LinkRequest): Uint8Array;
                toProtoMsg(message: _6.LinkRequest): _6.LinkRequestProtoMsg;
            };
            LinkResponse: {
                typeUrl: string;
                encode(message: _6.LinkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.LinkResponse;
                fromPartial(object: Partial<_6.LinkResponse>): _6.LinkResponse;
                fromAmino(object: _6.LinkResponseAmino): _6.LinkResponse;
                toAmino(message: _6.LinkResponse): _6.LinkResponseAmino;
                fromAminoMsg(object: _6.LinkResponseAminoMsg): _6.LinkResponse;
                fromProtoMsg(message: _6.LinkResponseProtoMsg): _6.LinkResponse;
                toProto(message: _6.LinkResponse): Uint8Array;
                toProtoMsg(message: _6.LinkResponse): _6.LinkResponseProtoMsg;
            };
            ConfirmDepositRequest: {
                typeUrl: string;
                encode(message: _6.ConfirmDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.ConfirmDepositRequest;
                fromPartial(object: Partial<_6.ConfirmDepositRequest>): _6.ConfirmDepositRequest;
                fromAmino(object: _6.ConfirmDepositRequestAmino): _6.ConfirmDepositRequest;
                toAmino(message: _6.ConfirmDepositRequest): _6.ConfirmDepositRequestAmino;
                fromAminoMsg(object: _6.ConfirmDepositRequestAminoMsg): _6.ConfirmDepositRequest;
                fromProtoMsg(message: _6.ConfirmDepositRequestProtoMsg): _6.ConfirmDepositRequest;
                toProto(message: _6.ConfirmDepositRequest): Uint8Array;
                toProtoMsg(message: _6.ConfirmDepositRequest): _6.ConfirmDepositRequestProtoMsg;
            };
            ConfirmDepositResponse: {
                typeUrl: string;
                encode(_: _6.ConfirmDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.ConfirmDepositResponse;
                fromPartial(_: Partial<_6.ConfirmDepositResponse>): _6.ConfirmDepositResponse;
                fromAmino(_: _6.ConfirmDepositResponseAmino): _6.ConfirmDepositResponse;
                toAmino(_: _6.ConfirmDepositResponse): _6.ConfirmDepositResponseAmino;
                fromAminoMsg(object: _6.ConfirmDepositResponseAminoMsg): _6.ConfirmDepositResponse;
                fromProtoMsg(message: _6.ConfirmDepositResponseProtoMsg): _6.ConfirmDepositResponse;
                toProto(message: _6.ConfirmDepositResponse): Uint8Array;
                toProtoMsg(message: _6.ConfirmDepositResponse): _6.ConfirmDepositResponseProtoMsg;
            };
            ExecutePendingTransfersRequest: {
                typeUrl: string;
                encode(message: _6.ExecutePendingTransfersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.ExecutePendingTransfersRequest;
                fromPartial(object: Partial<_6.ExecutePendingTransfersRequest>): _6.ExecutePendingTransfersRequest;
                fromAmino(object: _6.ExecutePendingTransfersRequestAmino): _6.ExecutePendingTransfersRequest;
                toAmino(message: _6.ExecutePendingTransfersRequest): _6.ExecutePendingTransfersRequestAmino;
                fromAminoMsg(object: _6.ExecutePendingTransfersRequestAminoMsg): _6.ExecutePendingTransfersRequest;
                fromProtoMsg(message: _6.ExecutePendingTransfersRequestProtoMsg): _6.ExecutePendingTransfersRequest;
                toProto(message: _6.ExecutePendingTransfersRequest): Uint8Array;
                toProtoMsg(message: _6.ExecutePendingTransfersRequest): _6.ExecutePendingTransfersRequestProtoMsg;
            };
            ExecutePendingTransfersResponse: {
                typeUrl: string;
                encode(_: _6.ExecutePendingTransfersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.ExecutePendingTransfersResponse;
                fromPartial(_: Partial<_6.ExecutePendingTransfersResponse>): _6.ExecutePendingTransfersResponse;
                fromAmino(_: _6.ExecutePendingTransfersResponseAmino): _6.ExecutePendingTransfersResponse;
                toAmino(_: _6.ExecutePendingTransfersResponse): _6.ExecutePendingTransfersResponseAmino;
                fromAminoMsg(object: _6.ExecutePendingTransfersResponseAminoMsg): _6.ExecutePendingTransfersResponse;
                fromProtoMsg(message: _6.ExecutePendingTransfersResponseProtoMsg): _6.ExecutePendingTransfersResponse;
                toProto(message: _6.ExecutePendingTransfersResponse): Uint8Array;
                toProtoMsg(message: _6.ExecutePendingTransfersResponse): _6.ExecutePendingTransfersResponseProtoMsg;
            };
            RegisterIBCPathRequest: {
                typeUrl: string;
                encode(message: _6.RegisterIBCPathRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.RegisterIBCPathRequest;
                fromPartial(object: Partial<_6.RegisterIBCPathRequest>): _6.RegisterIBCPathRequest;
                fromAmino(object: _6.RegisterIBCPathRequestAmino): _6.RegisterIBCPathRequest;
                toAmino(message: _6.RegisterIBCPathRequest): _6.RegisterIBCPathRequestAmino;
                fromAminoMsg(object: _6.RegisterIBCPathRequestAminoMsg): _6.RegisterIBCPathRequest;
                fromProtoMsg(message: _6.RegisterIBCPathRequestProtoMsg): _6.RegisterIBCPathRequest;
                toProto(message: _6.RegisterIBCPathRequest): Uint8Array;
                toProtoMsg(message: _6.RegisterIBCPathRequest): _6.RegisterIBCPathRequestProtoMsg;
            };
            RegisterIBCPathResponse: {
                typeUrl: string;
                encode(_: _6.RegisterIBCPathResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.RegisterIBCPathResponse;
                fromPartial(_: Partial<_6.RegisterIBCPathResponse>): _6.RegisterIBCPathResponse;
                fromAmino(_: _6.RegisterIBCPathResponseAmino): _6.RegisterIBCPathResponse;
                toAmino(_: _6.RegisterIBCPathResponse): _6.RegisterIBCPathResponseAmino;
                fromAminoMsg(object: _6.RegisterIBCPathResponseAminoMsg): _6.RegisterIBCPathResponse;
                fromProtoMsg(message: _6.RegisterIBCPathResponseProtoMsg): _6.RegisterIBCPathResponse;
                toProto(message: _6.RegisterIBCPathResponse): Uint8Array;
                toProtoMsg(message: _6.RegisterIBCPathResponse): _6.RegisterIBCPathResponseProtoMsg;
            };
            AddCosmosBasedChainRequest: {
                typeUrl: string;
                encode(message: _6.AddCosmosBasedChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.AddCosmosBasedChainRequest;
                fromPartial(object: Partial<_6.AddCosmosBasedChainRequest>): _6.AddCosmosBasedChainRequest;
                fromAmino(object: _6.AddCosmosBasedChainRequestAmino): _6.AddCosmosBasedChainRequest;
                toAmino(message: _6.AddCosmosBasedChainRequest): _6.AddCosmosBasedChainRequestAmino;
                fromAminoMsg(object: _6.AddCosmosBasedChainRequestAminoMsg): _6.AddCosmosBasedChainRequest;
                fromProtoMsg(message: _6.AddCosmosBasedChainRequestProtoMsg): _6.AddCosmosBasedChainRequest;
                toProto(message: _6.AddCosmosBasedChainRequest): Uint8Array;
                toProtoMsg(message: _6.AddCosmosBasedChainRequest): _6.AddCosmosBasedChainRequestProtoMsg;
            };
            AddCosmosBasedChainResponse: {
                typeUrl: string;
                encode(_: _6.AddCosmosBasedChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.AddCosmosBasedChainResponse;
                fromPartial(_: Partial<_6.AddCosmosBasedChainResponse>): _6.AddCosmosBasedChainResponse;
                fromAmino(_: _6.AddCosmosBasedChainResponseAmino): _6.AddCosmosBasedChainResponse;
                toAmino(_: _6.AddCosmosBasedChainResponse): _6.AddCosmosBasedChainResponseAmino;
                fromAminoMsg(object: _6.AddCosmosBasedChainResponseAminoMsg): _6.AddCosmosBasedChainResponse;
                fromProtoMsg(message: _6.AddCosmosBasedChainResponseProtoMsg): _6.AddCosmosBasedChainResponse;
                toProto(message: _6.AddCosmosBasedChainResponse): Uint8Array;
                toProtoMsg(message: _6.AddCosmosBasedChainResponse): _6.AddCosmosBasedChainResponseProtoMsg;
            };
            RegisterAssetRequest: {
                typeUrl: string;
                encode(message: _6.RegisterAssetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.RegisterAssetRequest;
                fromPartial(object: Partial<_6.RegisterAssetRequest>): _6.RegisterAssetRequest;
                fromAmino(object: _6.RegisterAssetRequestAmino): _6.RegisterAssetRequest;
                toAmino(message: _6.RegisterAssetRequest): _6.RegisterAssetRequestAmino;
                fromAminoMsg(object: _6.RegisterAssetRequestAminoMsg): _6.RegisterAssetRequest;
                fromProtoMsg(message: _6.RegisterAssetRequestProtoMsg): _6.RegisterAssetRequest;
                toProto(message: _6.RegisterAssetRequest): Uint8Array;
                toProtoMsg(message: _6.RegisterAssetRequest): _6.RegisterAssetRequestProtoMsg;
            };
            RegisterAssetResponse: {
                typeUrl: string;
                encode(_: _6.RegisterAssetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.RegisterAssetResponse;
                fromPartial(_: Partial<_6.RegisterAssetResponse>): _6.RegisterAssetResponse;
                fromAmino(_: _6.RegisterAssetResponseAmino): _6.RegisterAssetResponse;
                toAmino(_: _6.RegisterAssetResponse): _6.RegisterAssetResponseAmino;
                fromAminoMsg(object: _6.RegisterAssetResponseAminoMsg): _6.RegisterAssetResponse;
                fromProtoMsg(message: _6.RegisterAssetResponseProtoMsg): _6.RegisterAssetResponse;
                toProto(message: _6.RegisterAssetResponse): Uint8Array;
                toProtoMsg(message: _6.RegisterAssetResponse): _6.RegisterAssetResponseProtoMsg;
            };
            RouteIBCTransfersRequest: {
                typeUrl: string;
                encode(message: _6.RouteIBCTransfersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.RouteIBCTransfersRequest;
                fromPartial(object: Partial<_6.RouteIBCTransfersRequest>): _6.RouteIBCTransfersRequest;
                fromAmino(object: _6.RouteIBCTransfersRequestAmino): _6.RouteIBCTransfersRequest;
                toAmino(message: _6.RouteIBCTransfersRequest): _6.RouteIBCTransfersRequestAmino;
                fromAminoMsg(object: _6.RouteIBCTransfersRequestAminoMsg): _6.RouteIBCTransfersRequest;
                fromProtoMsg(message: _6.RouteIBCTransfersRequestProtoMsg): _6.RouteIBCTransfersRequest;
                toProto(message: _6.RouteIBCTransfersRequest): Uint8Array;
                toProtoMsg(message: _6.RouteIBCTransfersRequest): _6.RouteIBCTransfersRequestProtoMsg;
            };
            RouteIBCTransfersResponse: {
                typeUrl: string;
                encode(_: _6.RouteIBCTransfersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.RouteIBCTransfersResponse;
                fromPartial(_: Partial<_6.RouteIBCTransfersResponse>): _6.RouteIBCTransfersResponse;
                fromAmino(_: _6.RouteIBCTransfersResponseAmino): _6.RouteIBCTransfersResponse;
                toAmino(_: _6.RouteIBCTransfersResponse): _6.RouteIBCTransfersResponseAmino;
                fromAminoMsg(object: _6.RouteIBCTransfersResponseAminoMsg): _6.RouteIBCTransfersResponse;
                fromProtoMsg(message: _6.RouteIBCTransfersResponseProtoMsg): _6.RouteIBCTransfersResponse;
                toProto(message: _6.RouteIBCTransfersResponse): Uint8Array;
                toProtoMsg(message: _6.RouteIBCTransfersResponse): _6.RouteIBCTransfersResponseProtoMsg;
            };
            RegisterFeeCollectorRequest: {
                typeUrl: string;
                encode(message: _6.RegisterFeeCollectorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.RegisterFeeCollectorRequest;
                fromPartial(object: Partial<_6.RegisterFeeCollectorRequest>): _6.RegisterFeeCollectorRequest;
                fromAmino(object: _6.RegisterFeeCollectorRequestAmino): _6.RegisterFeeCollectorRequest;
                toAmino(message: _6.RegisterFeeCollectorRequest): _6.RegisterFeeCollectorRequestAmino;
                fromAminoMsg(object: _6.RegisterFeeCollectorRequestAminoMsg): _6.RegisterFeeCollectorRequest;
                fromProtoMsg(message: _6.RegisterFeeCollectorRequestProtoMsg): _6.RegisterFeeCollectorRequest;
                toProto(message: _6.RegisterFeeCollectorRequest): Uint8Array;
                toProtoMsg(message: _6.RegisterFeeCollectorRequest): _6.RegisterFeeCollectorRequestProtoMsg;
            };
            RegisterFeeCollectorResponse: {
                typeUrl: string;
                encode(_: _6.RegisterFeeCollectorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.RegisterFeeCollectorResponse;
                fromPartial(_: Partial<_6.RegisterFeeCollectorResponse>): _6.RegisterFeeCollectorResponse;
                fromAmino(_: _6.RegisterFeeCollectorResponseAmino): _6.RegisterFeeCollectorResponse;
                toAmino(_: _6.RegisterFeeCollectorResponse): _6.RegisterFeeCollectorResponseAmino;
                fromAminoMsg(object: _6.RegisterFeeCollectorResponseAminoMsg): _6.RegisterFeeCollectorResponse;
                fromProtoMsg(message: _6.RegisterFeeCollectorResponseProtoMsg): _6.RegisterFeeCollectorResponse;
                toProto(message: _6.RegisterFeeCollectorResponse): Uint8Array;
                toProtoMsg(message: _6.RegisterFeeCollectorResponse): _6.RegisterFeeCollectorResponseProtoMsg;
            };
            RetryIBCTransferRequest: {
                typeUrl: string;
                encode(message: _6.RetryIBCTransferRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.RetryIBCTransferRequest;
                fromPartial(object: Partial<_6.RetryIBCTransferRequest>): _6.RetryIBCTransferRequest;
                fromAmino(object: _6.RetryIBCTransferRequestAmino): _6.RetryIBCTransferRequest;
                toAmino(message: _6.RetryIBCTransferRequest): _6.RetryIBCTransferRequestAmino;
                fromAminoMsg(object: _6.RetryIBCTransferRequestAminoMsg): _6.RetryIBCTransferRequest;
                fromProtoMsg(message: _6.RetryIBCTransferRequestProtoMsg): _6.RetryIBCTransferRequest;
                toProto(message: _6.RetryIBCTransferRequest): Uint8Array;
                toProtoMsg(message: _6.RetryIBCTransferRequest): _6.RetryIBCTransferRequestProtoMsg;
            };
            RetryIBCTransferResponse: {
                typeUrl: string;
                encode(_: _6.RetryIBCTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.RetryIBCTransferResponse;
                fromPartial(_: Partial<_6.RetryIBCTransferResponse>): _6.RetryIBCTransferResponse;
                fromAmino(_: _6.RetryIBCTransferResponseAmino): _6.RetryIBCTransferResponse;
                toAmino(_: _6.RetryIBCTransferResponse): _6.RetryIBCTransferResponseAmino;
                fromAminoMsg(object: _6.RetryIBCTransferResponseAminoMsg): _6.RetryIBCTransferResponse;
                fromProtoMsg(message: _6.RetryIBCTransferResponseProtoMsg): _6.RetryIBCTransferResponse;
                toProto(message: _6.RetryIBCTransferResponse): Uint8Array;
                toProtoMsg(message: _6.RetryIBCTransferResponse): _6.RetryIBCTransferResponseProtoMsg;
            };
            RouteMessageRequest: {
                typeUrl: string;
                encode(message: _6.RouteMessageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.RouteMessageRequest;
                fromPartial(object: Partial<_6.RouteMessageRequest>): _6.RouteMessageRequest;
                fromAmino(object: _6.RouteMessageRequestAmino): _6.RouteMessageRequest;
                toAmino(message: _6.RouteMessageRequest): _6.RouteMessageRequestAmino;
                fromAminoMsg(object: _6.RouteMessageRequestAminoMsg): _6.RouteMessageRequest;
                fromProtoMsg(message: _6.RouteMessageRequestProtoMsg): _6.RouteMessageRequest;
                toProto(message: _6.RouteMessageRequest): Uint8Array;
                toProtoMsg(message: _6.RouteMessageRequest): _6.RouteMessageRequestProtoMsg;
            };
            RouteMessageResponse: {
                typeUrl: string;
                encode(_: _6.RouteMessageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.RouteMessageResponse;
                fromPartial(_: Partial<_6.RouteMessageResponse>): _6.RouteMessageResponse;
                fromAmino(_: _6.RouteMessageResponseAmino): _6.RouteMessageResponse;
                toAmino(_: _6.RouteMessageResponse): _6.RouteMessageResponseAmino;
                fromAminoMsg(object: _6.RouteMessageResponseAminoMsg): _6.RouteMessageResponse;
                fromProtoMsg(message: _6.RouteMessageResponseProtoMsg): _6.RouteMessageResponse;
                toProto(message: _6.RouteMessageResponse): Uint8Array;
                toProtoMsg(message: _6.RouteMessageResponse): _6.RouteMessageResponseProtoMsg;
            };
            CallContractRequest: {
                typeUrl: string;
                encode(message: _6.CallContractRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CallContractRequest;
                fromPartial(object: Partial<_6.CallContractRequest>): _6.CallContractRequest;
                fromAmino(object: _6.CallContractRequestAmino): _6.CallContractRequest;
                toAmino(message: _6.CallContractRequest): _6.CallContractRequestAmino;
                fromAminoMsg(object: _6.CallContractRequestAminoMsg): _6.CallContractRequest;
                fromProtoMsg(message: _6.CallContractRequestProtoMsg): _6.CallContractRequest;
                toProto(message: _6.CallContractRequest): Uint8Array;
                toProtoMsg(message: _6.CallContractRequest): _6.CallContractRequestProtoMsg;
            };
            CallContractResponse: {
                typeUrl: string;
                encode(_: _6.CallContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.CallContractResponse;
                fromPartial(_: Partial<_6.CallContractResponse>): _6.CallContractResponse;
                fromAmino(_: _6.CallContractResponseAmino): _6.CallContractResponse;
                toAmino(_: _6.CallContractResponse): _6.CallContractResponseAmino;
                fromAminoMsg(object: _6.CallContractResponseAminoMsg): _6.CallContractResponse;
                fromProtoMsg(message: _6.CallContractResponseProtoMsg): _6.CallContractResponse;
                toProto(message: _6.CallContractResponse): Uint8Array;
                toProtoMsg(message: _6.CallContractResponse): _6.CallContractResponseProtoMsg;
            };
            PendingIBCTransferCountRequest: {
                typeUrl: string;
                encode(_: _4.PendingIBCTransferCountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.PendingIBCTransferCountRequest;
                fromPartial(_: Partial<_4.PendingIBCTransferCountRequest>): _4.PendingIBCTransferCountRequest;
                fromAmino(_: _4.PendingIBCTransferCountRequestAmino): _4.PendingIBCTransferCountRequest;
                toAmino(_: _4.PendingIBCTransferCountRequest): _4.PendingIBCTransferCountRequestAmino;
                fromAminoMsg(object: _4.PendingIBCTransferCountRequestAminoMsg): _4.PendingIBCTransferCountRequest;
                fromProtoMsg(message: _4.PendingIBCTransferCountRequestProtoMsg): _4.PendingIBCTransferCountRequest;
                toProto(message: _4.PendingIBCTransferCountRequest): Uint8Array;
                toProtoMsg(message: _4.PendingIBCTransferCountRequest): _4.PendingIBCTransferCountRequestProtoMsg;
            };
            PendingIBCTransferCountResponse_TransfersByChainEntry: {
                encode(message: _4.PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.PendingIBCTransferCountResponse_TransfersByChainEntry;
                fromPartial(object: Partial<_4.PendingIBCTransferCountResponse_TransfersByChainEntry>): _4.PendingIBCTransferCountResponse_TransfersByChainEntry;
                fromAmino(object: _4.PendingIBCTransferCountResponse_TransfersByChainEntryAmino): _4.PendingIBCTransferCountResponse_TransfersByChainEntry;
                toAmino(message: _4.PendingIBCTransferCountResponse_TransfersByChainEntry): _4.PendingIBCTransferCountResponse_TransfersByChainEntryAmino;
                fromAminoMsg(object: _4.PendingIBCTransferCountResponse_TransfersByChainEntryAminoMsg): _4.PendingIBCTransferCountResponse_TransfersByChainEntry;
                fromProtoMsg(message: _4.PendingIBCTransferCountResponse_TransfersByChainEntryProtoMsg): _4.PendingIBCTransferCountResponse_TransfersByChainEntry;
                toProto(message: _4.PendingIBCTransferCountResponse_TransfersByChainEntry): Uint8Array;
            };
            PendingIBCTransferCountResponse: {
                typeUrl: string;
                encode(message: _4.PendingIBCTransferCountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.PendingIBCTransferCountResponse;
                fromPartial(object: Partial<_4.PendingIBCTransferCountResponse>): _4.PendingIBCTransferCountResponse;
                fromAmino(object: _4.PendingIBCTransferCountResponseAmino): _4.PendingIBCTransferCountResponse;
                toAmino(message: _4.PendingIBCTransferCountResponse): _4.PendingIBCTransferCountResponseAmino;
                fromAminoMsg(object: _4.PendingIBCTransferCountResponseAminoMsg): _4.PendingIBCTransferCountResponse;
                fromProtoMsg(message: _4.PendingIBCTransferCountResponseProtoMsg): _4.PendingIBCTransferCountResponse;
                toProto(message: _4.PendingIBCTransferCountResponse): Uint8Array;
                toProtoMsg(message: _4.PendingIBCTransferCountResponse): _4.PendingIBCTransferCountResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _4.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.ParamsRequest;
                fromPartial(_: Partial<_4.ParamsRequest>): _4.ParamsRequest;
                fromAmino(_: _4.ParamsRequestAmino): _4.ParamsRequest;
                toAmino(_: _4.ParamsRequest): _4.ParamsRequestAmino;
                fromAminoMsg(object: _4.ParamsRequestAminoMsg): _4.ParamsRequest;
                fromProtoMsg(message: _4.ParamsRequestProtoMsg): _4.ParamsRequest;
                toProto(message: _4.ParamsRequest): Uint8Array;
                toProtoMsg(message: _4.ParamsRequest): _4.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _4.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ParamsResponse;
                fromPartial(object: Partial<_4.ParamsResponse>): _4.ParamsResponse;
                fromAmino(object: _4.ParamsResponseAmino): _4.ParamsResponse;
                toAmino(message: _4.ParamsResponse): _4.ParamsResponseAmino;
                fromAminoMsg(object: _4.ParamsResponseAminoMsg): _4.ParamsResponse;
                fromProtoMsg(message: _4.ParamsResponseProtoMsg): _4.ParamsResponse;
                toProto(message: _4.ParamsResponse): Uint8Array;
                toProtoMsg(message: _4.ParamsResponse): _4.ParamsResponseProtoMsg;
            };
            IBCPathRequest: {
                typeUrl: string;
                encode(message: _4.IBCPathRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.IBCPathRequest;
                fromPartial(object: Partial<_4.IBCPathRequest>): _4.IBCPathRequest;
                fromAmino(object: _4.IBCPathRequestAmino): _4.IBCPathRequest;
                toAmino(message: _4.IBCPathRequest): _4.IBCPathRequestAmino;
                fromAminoMsg(object: _4.IBCPathRequestAminoMsg): _4.IBCPathRequest;
                fromProtoMsg(message: _4.IBCPathRequestProtoMsg): _4.IBCPathRequest;
                toProto(message: _4.IBCPathRequest): Uint8Array;
                toProtoMsg(message: _4.IBCPathRequest): _4.IBCPathRequestProtoMsg;
            };
            IBCPathResponse: {
                typeUrl: string;
                encode(message: _4.IBCPathResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.IBCPathResponse;
                fromPartial(object: Partial<_4.IBCPathResponse>): _4.IBCPathResponse;
                fromAmino(object: _4.IBCPathResponseAmino): _4.IBCPathResponse;
                toAmino(message: _4.IBCPathResponse): _4.IBCPathResponseAmino;
                fromAminoMsg(object: _4.IBCPathResponseAminoMsg): _4.IBCPathResponse;
                fromProtoMsg(message: _4.IBCPathResponseProtoMsg): _4.IBCPathResponse;
                toProto(message: _4.IBCPathResponse): Uint8Array;
                toProtoMsg(message: _4.IBCPathResponse): _4.IBCPathResponseProtoMsg;
            };
            ChainByIBCPathRequest: {
                typeUrl: string;
                encode(message: _4.ChainByIBCPathRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ChainByIBCPathRequest;
                fromPartial(object: Partial<_4.ChainByIBCPathRequest>): _4.ChainByIBCPathRequest;
                fromAmino(object: _4.ChainByIBCPathRequestAmino): _4.ChainByIBCPathRequest;
                toAmino(message: _4.ChainByIBCPathRequest): _4.ChainByIBCPathRequestAmino;
                fromAminoMsg(object: _4.ChainByIBCPathRequestAminoMsg): _4.ChainByIBCPathRequest;
                fromProtoMsg(message: _4.ChainByIBCPathRequestProtoMsg): _4.ChainByIBCPathRequest;
                toProto(message: _4.ChainByIBCPathRequest): Uint8Array;
                toProtoMsg(message: _4.ChainByIBCPathRequest): _4.ChainByIBCPathRequestProtoMsg;
            };
            ChainByIBCPathResponse: {
                typeUrl: string;
                encode(message: _4.ChainByIBCPathResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ChainByIBCPathResponse;
                fromPartial(object: Partial<_4.ChainByIBCPathResponse>): _4.ChainByIBCPathResponse;
                fromAmino(object: _4.ChainByIBCPathResponseAmino): _4.ChainByIBCPathResponse;
                toAmino(message: _4.ChainByIBCPathResponse): _4.ChainByIBCPathResponseAmino;
                fromAminoMsg(object: _4.ChainByIBCPathResponseAminoMsg): _4.ChainByIBCPathResponse;
                fromProtoMsg(message: _4.ChainByIBCPathResponseProtoMsg): _4.ChainByIBCPathResponse;
                toProto(message: _4.ChainByIBCPathResponse): Uint8Array;
                toProtoMsg(message: _4.ChainByIBCPathResponse): _4.ChainByIBCPathResponseProtoMsg;
            };
            CallContractsProposal: {
                typeUrl: string;
                encode(message: _3.CallContractsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.CallContractsProposal;
                fromPartial(object: Partial<_3.CallContractsProposal>): _3.CallContractsProposal;
                fromAmino(object: _3.CallContractsProposalAmino): _3.CallContractsProposal;
                toAmino(message: _3.CallContractsProposal): _3.CallContractsProposalAmino;
                fromAminoMsg(object: _3.CallContractsProposalAminoMsg): _3.CallContractsProposal;
                fromProtoMsg(message: _3.CallContractsProposalProtoMsg): _3.CallContractsProposal;
                toProto(message: _3.CallContractsProposal): Uint8Array;
                toProtoMsg(message: _3.CallContractsProposal): _3.CallContractsProposalProtoMsg;
            };
            ContractCall: {
                typeUrl: string;
                encode(message: _3.ContractCall, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.ContractCall;
                fromPartial(object: Partial<_3.ContractCall>): _3.ContractCall;
                fromAmino(object: _3.ContractCallAmino): _3.ContractCall;
                toAmino(message: _3.ContractCall): _3.ContractCallAmino;
                fromAminoMsg(object: _3.ContractCallAminoMsg): _3.ContractCall;
                fromProtoMsg(message: _3.ContractCallProtoMsg): _3.ContractCall;
                toProto(message: _3.ContractCall): Uint8Array;
                toProtoMsg(message: _3.ContractCall): _3.ContractCallProtoMsg;
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
            CallContractProposalMinDeposit: {
                typeUrl: string;
                encode(message: _2.CallContractProposalMinDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.CallContractProposalMinDeposit;
                fromPartial(object: Partial<_2.CallContractProposalMinDeposit>): _2.CallContractProposalMinDeposit;
                fromAmino(object: _2.CallContractProposalMinDepositAmino): _2.CallContractProposalMinDeposit;
                toAmino(message: _2.CallContractProposalMinDeposit): _2.CallContractProposalMinDepositAmino;
                fromAminoMsg(object: _2.CallContractProposalMinDepositAminoMsg): _2.CallContractProposalMinDeposit;
                fromProtoMsg(message: _2.CallContractProposalMinDepositProtoMsg): _2.CallContractProposalMinDeposit;
                toProto(message: _2.CallContractProposalMinDeposit): Uint8Array;
                toProtoMsg(message: _2.CallContractProposalMinDeposit): _2.CallContractProposalMinDepositProtoMsg;
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
            event_StatusFromJSON(object: any): _14.Event_Status;
            event_StatusToJSON(object: _14.Event_Status): string;
            statusFromJSON(object: any): _14.Status;
            statusToJSON(object: _14.Status): string;
            commandTypeFromJSON(object: any): _14.CommandType;
            commandTypeToJSON(object: _14.CommandType): string;
            batchedCommandsStatusFromJSON(object: any): _14.BatchedCommandsStatus;
            batchedCommandsStatusToJSON(object: _14.BatchedCommandsStatus): string;
            sigTypeFromJSON(object: any): _14.SigType;
            sigTypeToJSON(object: _14.SigType): string;
            depositStatusFromJSON(object: any): _14.DepositStatus;
            depositStatusToJSON(object: _14.DepositStatus): string;
            Event_Status: typeof _14.Event_Status;
            Event_StatusSDKType: typeof _14.Event_Status;
            Event_StatusAmino: typeof _14.Event_Status;
            Status: typeof _14.Status;
            StatusSDKType: typeof _14.Status;
            StatusAmino: typeof _14.Status;
            CommandType: typeof _14.CommandType;
            CommandTypeSDKType: typeof _14.CommandType;
            CommandTypeAmino: typeof _14.CommandType;
            BatchedCommandsStatus: typeof _14.BatchedCommandsStatus;
            BatchedCommandsStatusSDKType: typeof _14.BatchedCommandsStatus;
            BatchedCommandsStatusAmino: typeof _14.BatchedCommandsStatus;
            SigType: typeof _14.SigType;
            SigTypeSDKType: typeof _14.SigType;
            SigTypeAmino: typeof _14.SigType;
            DepositStatus: typeof _14.DepositStatus;
            DepositStatusSDKType: typeof _14.DepositStatus;
            DepositStatusAmino: typeof _14.DepositStatus;
            VoteEvents: {
                typeUrl: string;
                encode(message: _14.VoteEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.VoteEvents;
                fromPartial(object: Partial<_14.VoteEvents>): _14.VoteEvents;
                fromAmino(object: _14.VoteEventsAmino): _14.VoteEvents;
                toAmino(message: _14.VoteEvents): _14.VoteEventsAmino;
                fromAminoMsg(object: _14.VoteEventsAminoMsg): _14.VoteEvents;
                fromProtoMsg(message: _14.VoteEventsProtoMsg): _14.VoteEvents;
                toProto(message: _14.VoteEvents): Uint8Array;
                toProtoMsg(message: _14.VoteEvents): _14.VoteEventsProtoMsg;
            };
            Event: {
                typeUrl: string;
                encode(message: _14.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Event;
                fromPartial(object: Partial<_14.Event>): _14.Event;
                fromAmino(object: _14.EventAmino): _14.Event;
                toAmino(message: _14.Event): _14.EventAmino;
                fromAminoMsg(object: _14.EventAminoMsg): _14.Event;
                fromProtoMsg(message: _14.EventProtoMsg): _14.Event;
                toProto(message: _14.Event): Uint8Array;
                toProtoMsg(message: _14.Event): _14.EventProtoMsg;
            };
            EventTokenSent: {
                typeUrl: string;
                encode(message: _14.EventTokenSent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventTokenSent;
                fromPartial(object: Partial<_14.EventTokenSent>): _14.EventTokenSent;
                fromAmino(object: _14.EventTokenSentAmino): _14.EventTokenSent;
                toAmino(message: _14.EventTokenSent): _14.EventTokenSentAmino;
                fromAminoMsg(object: _14.EventTokenSentAminoMsg): _14.EventTokenSent;
                fromProtoMsg(message: _14.EventTokenSentProtoMsg): _14.EventTokenSent;
                toProto(message: _14.EventTokenSent): Uint8Array;
                toProtoMsg(message: _14.EventTokenSent): _14.EventTokenSentProtoMsg;
            };
            EventContractCall: {
                typeUrl: string;
                encode(message: _14.EventContractCall, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventContractCall;
                fromPartial(object: Partial<_14.EventContractCall>): _14.EventContractCall;
                fromAmino(object: _14.EventContractCallAmino): _14.EventContractCall;
                toAmino(message: _14.EventContractCall): _14.EventContractCallAmino;
                fromAminoMsg(object: _14.EventContractCallAminoMsg): _14.EventContractCall;
                fromProtoMsg(message: _14.EventContractCallProtoMsg): _14.EventContractCall;
                toProto(message: _14.EventContractCall): Uint8Array;
                toProtoMsg(message: _14.EventContractCall): _14.EventContractCallProtoMsg;
            };
            EventContractCallWithToken: {
                typeUrl: string;
                encode(message: _14.EventContractCallWithToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventContractCallWithToken;
                fromPartial(object: Partial<_14.EventContractCallWithToken>): _14.EventContractCallWithToken;
                fromAmino(object: _14.EventContractCallWithTokenAmino): _14.EventContractCallWithToken;
                toAmino(message: _14.EventContractCallWithToken): _14.EventContractCallWithTokenAmino;
                fromAminoMsg(object: _14.EventContractCallWithTokenAminoMsg): _14.EventContractCallWithToken;
                fromProtoMsg(message: _14.EventContractCallWithTokenProtoMsg): _14.EventContractCallWithToken;
                toProto(message: _14.EventContractCallWithToken): Uint8Array;
                toProtoMsg(message: _14.EventContractCallWithToken): _14.EventContractCallWithTokenProtoMsg;
            };
            EventTransfer: {
                typeUrl: string;
                encode(message: _14.EventTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventTransfer;
                fromPartial(object: Partial<_14.EventTransfer>): _14.EventTransfer;
                fromAmino(object: _14.EventTransferAmino): _14.EventTransfer;
                toAmino(message: _14.EventTransfer): _14.EventTransferAmino;
                fromAminoMsg(object: _14.EventTransferAminoMsg): _14.EventTransfer;
                fromProtoMsg(message: _14.EventTransferProtoMsg): _14.EventTransfer;
                toProto(message: _14.EventTransfer): Uint8Array;
                toProtoMsg(message: _14.EventTransfer): _14.EventTransferProtoMsg;
            };
            EventTokenDeployed: {
                typeUrl: string;
                encode(message: _14.EventTokenDeployed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventTokenDeployed;
                fromPartial(object: Partial<_14.EventTokenDeployed>): _14.EventTokenDeployed;
                fromAmino(object: _14.EventTokenDeployedAmino): _14.EventTokenDeployed;
                toAmino(message: _14.EventTokenDeployed): _14.EventTokenDeployedAmino;
                fromAminoMsg(object: _14.EventTokenDeployedAminoMsg): _14.EventTokenDeployed;
                fromProtoMsg(message: _14.EventTokenDeployedProtoMsg): _14.EventTokenDeployed;
                toProto(message: _14.EventTokenDeployed): Uint8Array;
                toProtoMsg(message: _14.EventTokenDeployed): _14.EventTokenDeployedProtoMsg;
            };
            EventMultisigOwnershipTransferred: {
                typeUrl: string;
                encode(message: _14.EventMultisigOwnershipTransferred, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventMultisigOwnershipTransferred;
                fromPartial(object: Partial<_14.EventMultisigOwnershipTransferred>): _14.EventMultisigOwnershipTransferred;
                fromAmino(object: _14.EventMultisigOwnershipTransferredAmino): _14.EventMultisigOwnershipTransferred;
                toAmino(message: _14.EventMultisigOwnershipTransferred): _14.EventMultisigOwnershipTransferredAmino;
                fromAminoMsg(object: _14.EventMultisigOwnershipTransferredAminoMsg): _14.EventMultisigOwnershipTransferred;
                fromProtoMsg(message: _14.EventMultisigOwnershipTransferredProtoMsg): _14.EventMultisigOwnershipTransferred;
                toProto(message: _14.EventMultisigOwnershipTransferred): Uint8Array;
                toProtoMsg(message: _14.EventMultisigOwnershipTransferred): _14.EventMultisigOwnershipTransferredProtoMsg;
            };
            EventMultisigOperatorshipTransferred: {
                typeUrl: string;
                encode(message: _14.EventMultisigOperatorshipTransferred, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventMultisigOperatorshipTransferred;
                fromPartial(object: Partial<_14.EventMultisigOperatorshipTransferred>): _14.EventMultisigOperatorshipTransferred;
                fromAmino(object: _14.EventMultisigOperatorshipTransferredAmino): _14.EventMultisigOperatorshipTransferred;
                toAmino(message: _14.EventMultisigOperatorshipTransferred): _14.EventMultisigOperatorshipTransferredAmino;
                fromAminoMsg(object: _14.EventMultisigOperatorshipTransferredAminoMsg): _14.EventMultisigOperatorshipTransferred;
                fromProtoMsg(message: _14.EventMultisigOperatorshipTransferredProtoMsg): _14.EventMultisigOperatorshipTransferred;
                toProto(message: _14.EventMultisigOperatorshipTransferred): Uint8Array;
                toProtoMsg(message: _14.EventMultisigOperatorshipTransferred): _14.EventMultisigOperatorshipTransferredProtoMsg;
            };
            NetworkInfo: {
                typeUrl: string;
                encode(message: _14.NetworkInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.NetworkInfo;
                fromPartial(object: Partial<_14.NetworkInfo>): _14.NetworkInfo;
                fromAmino(object: _14.NetworkInfoAmino): _14.NetworkInfo;
                toAmino(message: _14.NetworkInfo): _14.NetworkInfoAmino;
                fromAminoMsg(object: _14.NetworkInfoAminoMsg): _14.NetworkInfo;
                fromProtoMsg(message: _14.NetworkInfoProtoMsg): _14.NetworkInfo;
                toProto(message: _14.NetworkInfo): Uint8Array;
                toProtoMsg(message: _14.NetworkInfo): _14.NetworkInfoProtoMsg;
            };
            BurnerInfo: {
                typeUrl: string;
                encode(message: _14.BurnerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.BurnerInfo;
                fromPartial(object: Partial<_14.BurnerInfo>): _14.BurnerInfo;
                fromAmino(object: _14.BurnerInfoAmino): _14.BurnerInfo;
                toAmino(message: _14.BurnerInfo): _14.BurnerInfoAmino;
                fromAminoMsg(object: _14.BurnerInfoAminoMsg): _14.BurnerInfo;
                fromProtoMsg(message: _14.BurnerInfoProtoMsg): _14.BurnerInfo;
                toProto(message: _14.BurnerInfo): Uint8Array;
                toProtoMsg(message: _14.BurnerInfo): _14.BurnerInfoProtoMsg;
            };
            ERC20Deposit: {
                typeUrl: string;
                encode(message: _14.ERC20Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.ERC20Deposit;
                fromPartial(object: Partial<_14.ERC20Deposit>): _14.ERC20Deposit;
                fromAmino(object: _14.ERC20DepositAmino): _14.ERC20Deposit;
                toAmino(message: _14.ERC20Deposit): _14.ERC20DepositAmino;
                fromAminoMsg(object: _14.ERC20DepositAminoMsg): _14.ERC20Deposit;
                fromProtoMsg(message: _14.ERC20DepositProtoMsg): _14.ERC20Deposit;
                toProto(message: _14.ERC20Deposit): Uint8Array;
                toProtoMsg(message: _14.ERC20Deposit): _14.ERC20DepositProtoMsg;
            };
            ERC20TokenMetadata: {
                typeUrl: string;
                encode(message: _14.ERC20TokenMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.ERC20TokenMetadata;
                fromPartial(object: Partial<_14.ERC20TokenMetadata>): _14.ERC20TokenMetadata;
                fromAmino(object: _14.ERC20TokenMetadataAmino): _14.ERC20TokenMetadata;
                toAmino(message: _14.ERC20TokenMetadata): _14.ERC20TokenMetadataAmino;
                fromAminoMsg(object: _14.ERC20TokenMetadataAminoMsg): _14.ERC20TokenMetadata;
                fromProtoMsg(message: _14.ERC20TokenMetadataProtoMsg): _14.ERC20TokenMetadata;
                toProto(message: _14.ERC20TokenMetadata): Uint8Array;
                toProtoMsg(message: _14.ERC20TokenMetadata): _14.ERC20TokenMetadataProtoMsg;
            };
            TransactionMetadata: {
                typeUrl: string;
                encode(message: _14.TransactionMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.TransactionMetadata;
                fromPartial(object: Partial<_14.TransactionMetadata>): _14.TransactionMetadata;
                fromAmino(object: _14.TransactionMetadataAmino): _14.TransactionMetadata;
                toAmino(message: _14.TransactionMetadata): _14.TransactionMetadataAmino;
                fromAminoMsg(object: _14.TransactionMetadataAminoMsg): _14.TransactionMetadata;
                fromProtoMsg(message: _14.TransactionMetadataProtoMsg): _14.TransactionMetadata;
                toProto(message: _14.TransactionMetadata): Uint8Array;
                toProtoMsg(message: _14.TransactionMetadata): _14.TransactionMetadataProtoMsg;
            };
            Command: {
                typeUrl: string;
                encode(message: _14.Command, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Command;
                fromPartial(object: Partial<_14.Command>): _14.Command;
                fromAmino(object: _14.CommandAmino): _14.Command;
                toAmino(message: _14.Command): _14.CommandAmino;
                fromAminoMsg(object: _14.CommandAminoMsg): _14.Command;
                fromProtoMsg(message: _14.CommandProtoMsg): _14.Command;
                toProto(message: _14.Command): Uint8Array;
                toProtoMsg(message: _14.Command): _14.CommandProtoMsg;
            };
            CommandBatchMetadata: {
                typeUrl: string;
                encode(message: _14.CommandBatchMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.CommandBatchMetadata;
                fromPartial(object: Partial<_14.CommandBatchMetadata>): _14.CommandBatchMetadata;
                fromAmino(object: _14.CommandBatchMetadataAmino): _14.CommandBatchMetadata;
                toAmino(message: _14.CommandBatchMetadata): _14.CommandBatchMetadataAmino;
                fromAminoMsg(object: _14.CommandBatchMetadataAminoMsg): _14.CommandBatchMetadata;
                fromProtoMsg(message: _14.CommandBatchMetadataProtoMsg): _14.CommandBatchMetadata;
                toProto(message: _14.CommandBatchMetadata): Uint8Array;
                toProtoMsg(message: _14.CommandBatchMetadata): _14.CommandBatchMetadataProtoMsg;
            };
            SigMetadata: {
                typeUrl: string;
                encode(message: _14.SigMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.SigMetadata;
                fromPartial(object: Partial<_14.SigMetadata>): _14.SigMetadata;
                fromAmino(object: _14.SigMetadataAmino): _14.SigMetadata;
                toAmino(message: _14.SigMetadata): _14.SigMetadataAmino;
                fromAminoMsg(object: _14.SigMetadataAminoMsg): _14.SigMetadata;
                fromProtoMsg(message: _14.SigMetadataProtoMsg): _14.SigMetadata;
                toProto(message: _14.SigMetadata): Uint8Array;
                toProtoMsg(message: _14.SigMetadata): _14.SigMetadataProtoMsg;
            };
            TransferKey: {
                typeUrl: string;
                encode(message: _14.TransferKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.TransferKey;
                fromPartial(object: Partial<_14.TransferKey>): _14.TransferKey;
                fromAmino(object: _14.TransferKeyAmino): _14.TransferKey;
                toAmino(message: _14.TransferKey): _14.TransferKeyAmino;
                fromAminoMsg(object: _14.TransferKeyAminoMsg): _14.TransferKey;
                fromProtoMsg(message: _14.TransferKeyProtoMsg): _14.TransferKey;
                toProto(message: _14.TransferKey): Uint8Array;
                toProtoMsg(message: _14.TransferKey): _14.TransferKeyProtoMsg;
            };
            Asset: {
                typeUrl: string;
                encode(message: _14.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Asset;
                fromPartial(object: Partial<_14.Asset>): _14.Asset;
                fromAmino(object: _14.AssetAmino): _14.Asset;
                toAmino(message: _14.Asset): _14.AssetAmino;
                fromAminoMsg(object: _14.AssetAminoMsg): _14.Asset;
                fromProtoMsg(message: _14.AssetProtoMsg): _14.Asset;
                toProto(message: _14.Asset): Uint8Array;
                toProtoMsg(message: _14.Asset): _14.AssetProtoMsg;
            };
            TokenDetails: {
                typeUrl: string;
                encode(message: _14.TokenDetails, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.TokenDetails;
                fromPartial(object: Partial<_14.TokenDetails>): _14.TokenDetails;
                fromAmino(object: _14.TokenDetailsAmino): _14.TokenDetails;
                toAmino(message: _14.TokenDetails): _14.TokenDetailsAmino;
                fromAminoMsg(object: _14.TokenDetailsAminoMsg): _14.TokenDetails;
                fromProtoMsg(message: _14.TokenDetailsProtoMsg): _14.TokenDetails;
                toProto(message: _14.TokenDetails): Uint8Array;
                toProtoMsg(message: _14.TokenDetails): _14.TokenDetailsProtoMsg;
            };
            Gateway: {
                typeUrl: string;
                encode(message: _14.Gateway, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Gateway;
                fromPartial(object: Partial<_14.Gateway>): _14.Gateway;
                fromAmino(object: _14.GatewayAmino): _14.Gateway;
                toAmino(message: _14.Gateway): _14.GatewayAmino;
                fromAminoMsg(object: _14.GatewayAminoMsg): _14.Gateway;
                fromProtoMsg(message: _14.GatewayProtoMsg): _14.Gateway;
                toProto(message: _14.Gateway): Uint8Array;
                toProtoMsg(message: _14.Gateway): _14.GatewayProtoMsg;
            };
            PollMetadata: {
                typeUrl: string;
                encode(message: _14.PollMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.PollMetadata;
                fromPartial(object: Partial<_14.PollMetadata>): _14.PollMetadata;
                fromAmino(object: _14.PollMetadataAmino): _14.PollMetadata;
                toAmino(message: _14.PollMetadata): _14.PollMetadataAmino;
                fromAminoMsg(object: _14.PollMetadataAminoMsg): _14.PollMetadata;
                fromProtoMsg(message: _14.PollMetadataProtoMsg): _14.PollMetadata;
                toProto(message: _14.PollMetadata): Uint8Array;
                toProtoMsg(message: _14.PollMetadata): _14.PollMetadataProtoMsg;
            };
            Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            SetGatewayRequest: {
                typeUrl: string;
                encode(message: _13.SetGatewayRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.SetGatewayRequest;
                fromPartial(object: Partial<_13.SetGatewayRequest>): _13.SetGatewayRequest;
                fromAmino(object: _13.SetGatewayRequestAmino): _13.SetGatewayRequest;
                toAmino(message: _13.SetGatewayRequest): _13.SetGatewayRequestAmino;
                fromAminoMsg(object: _13.SetGatewayRequestAminoMsg): _13.SetGatewayRequest;
                fromProtoMsg(message: _13.SetGatewayRequestProtoMsg): _13.SetGatewayRequest;
                toProto(message: _13.SetGatewayRequest): Uint8Array;
                toProtoMsg(message: _13.SetGatewayRequest): _13.SetGatewayRequestProtoMsg;
            };
            SetGatewayResponse: {
                typeUrl: string;
                encode(_: _13.SetGatewayResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.SetGatewayResponse;
                fromPartial(_: Partial<_13.SetGatewayResponse>): _13.SetGatewayResponse;
                fromAmino(_: _13.SetGatewayResponseAmino): _13.SetGatewayResponse;
                toAmino(_: _13.SetGatewayResponse): _13.SetGatewayResponseAmino;
                fromAminoMsg(object: _13.SetGatewayResponseAminoMsg): _13.SetGatewayResponse;
                fromProtoMsg(message: _13.SetGatewayResponseProtoMsg): _13.SetGatewayResponse;
                toProto(message: _13.SetGatewayResponse): Uint8Array;
                toProtoMsg(message: _13.SetGatewayResponse): _13.SetGatewayResponseProtoMsg;
            };
            ConfirmGatewayTxRequest: {
                typeUrl: string;
                encode(message: _13.ConfirmGatewayTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ConfirmGatewayTxRequest;
                fromPartial(object: Partial<_13.ConfirmGatewayTxRequest>): _13.ConfirmGatewayTxRequest;
                fromAmino(object: _13.ConfirmGatewayTxRequestAmino): _13.ConfirmGatewayTxRequest;
                toAmino(message: _13.ConfirmGatewayTxRequest): _13.ConfirmGatewayTxRequestAmino;
                fromAminoMsg(object: _13.ConfirmGatewayTxRequestAminoMsg): _13.ConfirmGatewayTxRequest;
                fromProtoMsg(message: _13.ConfirmGatewayTxRequestProtoMsg): _13.ConfirmGatewayTxRequest;
                toProto(message: _13.ConfirmGatewayTxRequest): Uint8Array;
                toProtoMsg(message: _13.ConfirmGatewayTxRequest): _13.ConfirmGatewayTxRequestProtoMsg;
            };
            ConfirmGatewayTxResponse: {
                typeUrl: string;
                encode(_: _13.ConfirmGatewayTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.ConfirmGatewayTxResponse;
                fromPartial(_: Partial<_13.ConfirmGatewayTxResponse>): _13.ConfirmGatewayTxResponse;
                fromAmino(_: _13.ConfirmGatewayTxResponseAmino): _13.ConfirmGatewayTxResponse;
                toAmino(_: _13.ConfirmGatewayTxResponse): _13.ConfirmGatewayTxResponseAmino;
                fromAminoMsg(object: _13.ConfirmGatewayTxResponseAminoMsg): _13.ConfirmGatewayTxResponse;
                fromProtoMsg(message: _13.ConfirmGatewayTxResponseProtoMsg): _13.ConfirmGatewayTxResponse;
                toProto(message: _13.ConfirmGatewayTxResponse): Uint8Array;
                toProtoMsg(message: _13.ConfirmGatewayTxResponse): _13.ConfirmGatewayTxResponseProtoMsg;
            };
            ConfirmGatewayTxsRequest: {
                typeUrl: string;
                encode(message: _13.ConfirmGatewayTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ConfirmGatewayTxsRequest;
                fromPartial(object: Partial<_13.ConfirmGatewayTxsRequest>): _13.ConfirmGatewayTxsRequest;
                fromAmino(object: _13.ConfirmGatewayTxsRequestAmino): _13.ConfirmGatewayTxsRequest;
                toAmino(message: _13.ConfirmGatewayTxsRequest): _13.ConfirmGatewayTxsRequestAmino;
                fromAminoMsg(object: _13.ConfirmGatewayTxsRequestAminoMsg): _13.ConfirmGatewayTxsRequest;
                fromProtoMsg(message: _13.ConfirmGatewayTxsRequestProtoMsg): _13.ConfirmGatewayTxsRequest;
                toProto(message: _13.ConfirmGatewayTxsRequest): Uint8Array;
                toProtoMsg(message: _13.ConfirmGatewayTxsRequest): _13.ConfirmGatewayTxsRequestProtoMsg;
            };
            ConfirmGatewayTxsResponse: {
                typeUrl: string;
                encode(_: _13.ConfirmGatewayTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.ConfirmGatewayTxsResponse;
                fromPartial(_: Partial<_13.ConfirmGatewayTxsResponse>): _13.ConfirmGatewayTxsResponse;
                fromAmino(_: _13.ConfirmGatewayTxsResponseAmino): _13.ConfirmGatewayTxsResponse;
                toAmino(_: _13.ConfirmGatewayTxsResponse): _13.ConfirmGatewayTxsResponseAmino;
                fromAminoMsg(object: _13.ConfirmGatewayTxsResponseAminoMsg): _13.ConfirmGatewayTxsResponse;
                fromProtoMsg(message: _13.ConfirmGatewayTxsResponseProtoMsg): _13.ConfirmGatewayTxsResponse;
                toProto(message: _13.ConfirmGatewayTxsResponse): Uint8Array;
                toProtoMsg(message: _13.ConfirmGatewayTxsResponse): _13.ConfirmGatewayTxsResponseProtoMsg;
            };
            ConfirmDepositRequest: {
                typeUrl: string;
                encode(message: _13.ConfirmDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ConfirmDepositRequest;
                fromPartial(object: Partial<_13.ConfirmDepositRequest>): _13.ConfirmDepositRequest;
                fromAmino(object: _13.ConfirmDepositRequestAmino): _13.ConfirmDepositRequest;
                toAmino(message: _13.ConfirmDepositRequest): _13.ConfirmDepositRequestAmino;
                fromAminoMsg(object: _13.ConfirmDepositRequestAminoMsg): _13.ConfirmDepositRequest;
                fromProtoMsg(message: _13.ConfirmDepositRequestProtoMsg): _13.ConfirmDepositRequest;
                toProto(message: _13.ConfirmDepositRequest): Uint8Array;
                toProtoMsg(message: _13.ConfirmDepositRequest): _13.ConfirmDepositRequestProtoMsg;
            };
            ConfirmDepositResponse: {
                typeUrl: string;
                encode(_: _13.ConfirmDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.ConfirmDepositResponse;
                fromPartial(_: Partial<_13.ConfirmDepositResponse>): _13.ConfirmDepositResponse;
                fromAmino(_: _13.ConfirmDepositResponseAmino): _13.ConfirmDepositResponse;
                toAmino(_: _13.ConfirmDepositResponse): _13.ConfirmDepositResponseAmino;
                fromAminoMsg(object: _13.ConfirmDepositResponseAminoMsg): _13.ConfirmDepositResponse;
                fromProtoMsg(message: _13.ConfirmDepositResponseProtoMsg): _13.ConfirmDepositResponse;
                toProto(message: _13.ConfirmDepositResponse): Uint8Array;
                toProtoMsg(message: _13.ConfirmDepositResponse): _13.ConfirmDepositResponseProtoMsg;
            };
            ConfirmTokenRequest: {
                typeUrl: string;
                encode(message: _13.ConfirmTokenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ConfirmTokenRequest;
                fromPartial(object: Partial<_13.ConfirmTokenRequest>): _13.ConfirmTokenRequest;
                fromAmino(object: _13.ConfirmTokenRequestAmino): _13.ConfirmTokenRequest;
                toAmino(message: _13.ConfirmTokenRequest): _13.ConfirmTokenRequestAmino;
                fromAminoMsg(object: _13.ConfirmTokenRequestAminoMsg): _13.ConfirmTokenRequest;
                fromProtoMsg(message: _13.ConfirmTokenRequestProtoMsg): _13.ConfirmTokenRequest;
                toProto(message: _13.ConfirmTokenRequest): Uint8Array;
                toProtoMsg(message: _13.ConfirmTokenRequest): _13.ConfirmTokenRequestProtoMsg;
            };
            ConfirmTokenResponse: {
                typeUrl: string;
                encode(_: _13.ConfirmTokenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.ConfirmTokenResponse;
                fromPartial(_: Partial<_13.ConfirmTokenResponse>): _13.ConfirmTokenResponse;
                fromAmino(_: _13.ConfirmTokenResponseAmino): _13.ConfirmTokenResponse;
                toAmino(_: _13.ConfirmTokenResponse): _13.ConfirmTokenResponseAmino;
                fromAminoMsg(object: _13.ConfirmTokenResponseAminoMsg): _13.ConfirmTokenResponse;
                fromProtoMsg(message: _13.ConfirmTokenResponseProtoMsg): _13.ConfirmTokenResponse;
                toProto(message: _13.ConfirmTokenResponse): Uint8Array;
                toProtoMsg(message: _13.ConfirmTokenResponse): _13.ConfirmTokenResponseProtoMsg;
            };
            ConfirmTransferKeyRequest: {
                typeUrl: string;
                encode(message: _13.ConfirmTransferKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.ConfirmTransferKeyRequest;
                fromPartial(object: Partial<_13.ConfirmTransferKeyRequest>): _13.ConfirmTransferKeyRequest;
                fromAmino(object: _13.ConfirmTransferKeyRequestAmino): _13.ConfirmTransferKeyRequest;
                toAmino(message: _13.ConfirmTransferKeyRequest): _13.ConfirmTransferKeyRequestAmino;
                fromAminoMsg(object: _13.ConfirmTransferKeyRequestAminoMsg): _13.ConfirmTransferKeyRequest;
                fromProtoMsg(message: _13.ConfirmTransferKeyRequestProtoMsg): _13.ConfirmTransferKeyRequest;
                toProto(message: _13.ConfirmTransferKeyRequest): Uint8Array;
                toProtoMsg(message: _13.ConfirmTransferKeyRequest): _13.ConfirmTransferKeyRequestProtoMsg;
            };
            ConfirmTransferKeyResponse: {
                typeUrl: string;
                encode(_: _13.ConfirmTransferKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.ConfirmTransferKeyResponse;
                fromPartial(_: Partial<_13.ConfirmTransferKeyResponse>): _13.ConfirmTransferKeyResponse;
                fromAmino(_: _13.ConfirmTransferKeyResponseAmino): _13.ConfirmTransferKeyResponse;
                toAmino(_: _13.ConfirmTransferKeyResponse): _13.ConfirmTransferKeyResponseAmino;
                fromAminoMsg(object: _13.ConfirmTransferKeyResponseAminoMsg): _13.ConfirmTransferKeyResponse;
                fromProtoMsg(message: _13.ConfirmTransferKeyResponseProtoMsg): _13.ConfirmTransferKeyResponse;
                toProto(message: _13.ConfirmTransferKeyResponse): Uint8Array;
                toProtoMsg(message: _13.ConfirmTransferKeyResponse): _13.ConfirmTransferKeyResponseProtoMsg;
            };
            LinkRequest: {
                typeUrl: string;
                encode(message: _13.LinkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.LinkRequest;
                fromPartial(object: Partial<_13.LinkRequest>): _13.LinkRequest;
                fromAmino(object: _13.LinkRequestAmino): _13.LinkRequest;
                toAmino(message: _13.LinkRequest): _13.LinkRequestAmino;
                fromAminoMsg(object: _13.LinkRequestAminoMsg): _13.LinkRequest;
                fromProtoMsg(message: _13.LinkRequestProtoMsg): _13.LinkRequest;
                toProto(message: _13.LinkRequest): Uint8Array;
                toProtoMsg(message: _13.LinkRequest): _13.LinkRequestProtoMsg;
            };
            LinkResponse: {
                typeUrl: string;
                encode(message: _13.LinkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.LinkResponse;
                fromPartial(object: Partial<_13.LinkResponse>): _13.LinkResponse;
                fromAmino(object: _13.LinkResponseAmino): _13.LinkResponse;
                toAmino(message: _13.LinkResponse): _13.LinkResponseAmino;
                fromAminoMsg(object: _13.LinkResponseAminoMsg): _13.LinkResponse;
                fromProtoMsg(message: _13.LinkResponseProtoMsg): _13.LinkResponse;
                toProto(message: _13.LinkResponse): Uint8Array;
                toProtoMsg(message: _13.LinkResponse): _13.LinkResponseProtoMsg;
            };
            CreateBurnTokensRequest: {
                typeUrl: string;
                encode(message: _13.CreateBurnTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.CreateBurnTokensRequest;
                fromPartial(object: Partial<_13.CreateBurnTokensRequest>): _13.CreateBurnTokensRequest;
                fromAmino(object: _13.CreateBurnTokensRequestAmino): _13.CreateBurnTokensRequest;
                toAmino(message: _13.CreateBurnTokensRequest): _13.CreateBurnTokensRequestAmino;
                fromAminoMsg(object: _13.CreateBurnTokensRequestAminoMsg): _13.CreateBurnTokensRequest;
                fromProtoMsg(message: _13.CreateBurnTokensRequestProtoMsg): _13.CreateBurnTokensRequest;
                toProto(message: _13.CreateBurnTokensRequest): Uint8Array;
                toProtoMsg(message: _13.CreateBurnTokensRequest): _13.CreateBurnTokensRequestProtoMsg;
            };
            CreateBurnTokensResponse: {
                typeUrl: string;
                encode(_: _13.CreateBurnTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.CreateBurnTokensResponse;
                fromPartial(_: Partial<_13.CreateBurnTokensResponse>): _13.CreateBurnTokensResponse;
                fromAmino(_: _13.CreateBurnTokensResponseAmino): _13.CreateBurnTokensResponse;
                toAmino(_: _13.CreateBurnTokensResponse): _13.CreateBurnTokensResponseAmino;
                fromAminoMsg(object: _13.CreateBurnTokensResponseAminoMsg): _13.CreateBurnTokensResponse;
                fromProtoMsg(message: _13.CreateBurnTokensResponseProtoMsg): _13.CreateBurnTokensResponse;
                toProto(message: _13.CreateBurnTokensResponse): Uint8Array;
                toProtoMsg(message: _13.CreateBurnTokensResponse): _13.CreateBurnTokensResponseProtoMsg;
            };
            CreateDeployTokenRequest: {
                typeUrl: string;
                encode(message: _13.CreateDeployTokenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.CreateDeployTokenRequest;
                fromPartial(object: Partial<_13.CreateDeployTokenRequest>): _13.CreateDeployTokenRequest;
                fromAmino(object: _13.CreateDeployTokenRequestAmino): _13.CreateDeployTokenRequest;
                toAmino(message: _13.CreateDeployTokenRequest): _13.CreateDeployTokenRequestAmino;
                fromAminoMsg(object: _13.CreateDeployTokenRequestAminoMsg): _13.CreateDeployTokenRequest;
                fromProtoMsg(message: _13.CreateDeployTokenRequestProtoMsg): _13.CreateDeployTokenRequest;
                toProto(message: _13.CreateDeployTokenRequest): Uint8Array;
                toProtoMsg(message: _13.CreateDeployTokenRequest): _13.CreateDeployTokenRequestProtoMsg;
            };
            CreateDeployTokenResponse: {
                typeUrl: string;
                encode(_: _13.CreateDeployTokenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.CreateDeployTokenResponse;
                fromPartial(_: Partial<_13.CreateDeployTokenResponse>): _13.CreateDeployTokenResponse;
                fromAmino(_: _13.CreateDeployTokenResponseAmino): _13.CreateDeployTokenResponse;
                toAmino(_: _13.CreateDeployTokenResponse): _13.CreateDeployTokenResponseAmino;
                fromAminoMsg(object: _13.CreateDeployTokenResponseAminoMsg): _13.CreateDeployTokenResponse;
                fromProtoMsg(message: _13.CreateDeployTokenResponseProtoMsg): _13.CreateDeployTokenResponse;
                toProto(message: _13.CreateDeployTokenResponse): Uint8Array;
                toProtoMsg(message: _13.CreateDeployTokenResponse): _13.CreateDeployTokenResponseProtoMsg;
            };
            CreatePendingTransfersRequest: {
                typeUrl: string;
                encode(message: _13.CreatePendingTransfersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.CreatePendingTransfersRequest;
                fromPartial(object: Partial<_13.CreatePendingTransfersRequest>): _13.CreatePendingTransfersRequest;
                fromAmino(object: _13.CreatePendingTransfersRequestAmino): _13.CreatePendingTransfersRequest;
                toAmino(message: _13.CreatePendingTransfersRequest): _13.CreatePendingTransfersRequestAmino;
                fromAminoMsg(object: _13.CreatePendingTransfersRequestAminoMsg): _13.CreatePendingTransfersRequest;
                fromProtoMsg(message: _13.CreatePendingTransfersRequestProtoMsg): _13.CreatePendingTransfersRequest;
                toProto(message: _13.CreatePendingTransfersRequest): Uint8Array;
                toProtoMsg(message: _13.CreatePendingTransfersRequest): _13.CreatePendingTransfersRequestProtoMsg;
            };
            CreatePendingTransfersResponse: {
                typeUrl: string;
                encode(_: _13.CreatePendingTransfersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.CreatePendingTransfersResponse;
                fromPartial(_: Partial<_13.CreatePendingTransfersResponse>): _13.CreatePendingTransfersResponse;
                fromAmino(_: _13.CreatePendingTransfersResponseAmino): _13.CreatePendingTransfersResponse;
                toAmino(_: _13.CreatePendingTransfersResponse): _13.CreatePendingTransfersResponseAmino;
                fromAminoMsg(object: _13.CreatePendingTransfersResponseAminoMsg): _13.CreatePendingTransfersResponse;
                fromProtoMsg(message: _13.CreatePendingTransfersResponseProtoMsg): _13.CreatePendingTransfersResponse;
                toProto(message: _13.CreatePendingTransfersResponse): Uint8Array;
                toProtoMsg(message: _13.CreatePendingTransfersResponse): _13.CreatePendingTransfersResponseProtoMsg;
            };
            CreateTransferOwnershipRequest: {
                typeUrl: string;
                encode(message: _13.CreateTransferOwnershipRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.CreateTransferOwnershipRequest;
                fromPartial(object: Partial<_13.CreateTransferOwnershipRequest>): _13.CreateTransferOwnershipRequest;
                fromAmino(object: _13.CreateTransferOwnershipRequestAmino): _13.CreateTransferOwnershipRequest;
                toAmino(message: _13.CreateTransferOwnershipRequest): _13.CreateTransferOwnershipRequestAmino;
                fromAminoMsg(object: _13.CreateTransferOwnershipRequestAminoMsg): _13.CreateTransferOwnershipRequest;
                fromProtoMsg(message: _13.CreateTransferOwnershipRequestProtoMsg): _13.CreateTransferOwnershipRequest;
                toProto(message: _13.CreateTransferOwnershipRequest): Uint8Array;
                toProtoMsg(message: _13.CreateTransferOwnershipRequest): _13.CreateTransferOwnershipRequestProtoMsg;
            };
            CreateTransferOwnershipResponse: {
                typeUrl: string;
                encode(_: _13.CreateTransferOwnershipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.CreateTransferOwnershipResponse;
                fromPartial(_: Partial<_13.CreateTransferOwnershipResponse>): _13.CreateTransferOwnershipResponse;
                fromAmino(_: _13.CreateTransferOwnershipResponseAmino): _13.CreateTransferOwnershipResponse;
                toAmino(_: _13.CreateTransferOwnershipResponse): _13.CreateTransferOwnershipResponseAmino;
                fromAminoMsg(object: _13.CreateTransferOwnershipResponseAminoMsg): _13.CreateTransferOwnershipResponse;
                fromProtoMsg(message: _13.CreateTransferOwnershipResponseProtoMsg): _13.CreateTransferOwnershipResponse;
                toProto(message: _13.CreateTransferOwnershipResponse): Uint8Array;
                toProtoMsg(message: _13.CreateTransferOwnershipResponse): _13.CreateTransferOwnershipResponseProtoMsg;
            };
            CreateTransferOperatorshipRequest: {
                typeUrl: string;
                encode(message: _13.CreateTransferOperatorshipRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.CreateTransferOperatorshipRequest;
                fromPartial(object: Partial<_13.CreateTransferOperatorshipRequest>): _13.CreateTransferOperatorshipRequest;
                fromAmino(object: _13.CreateTransferOperatorshipRequestAmino): _13.CreateTransferOperatorshipRequest;
                toAmino(message: _13.CreateTransferOperatorshipRequest): _13.CreateTransferOperatorshipRequestAmino;
                fromAminoMsg(object: _13.CreateTransferOperatorshipRequestAminoMsg): _13.CreateTransferOperatorshipRequest;
                fromProtoMsg(message: _13.CreateTransferOperatorshipRequestProtoMsg): _13.CreateTransferOperatorshipRequest;
                toProto(message: _13.CreateTransferOperatorshipRequest): Uint8Array;
                toProtoMsg(message: _13.CreateTransferOperatorshipRequest): _13.CreateTransferOperatorshipRequestProtoMsg;
            };
            CreateTransferOperatorshipResponse: {
                typeUrl: string;
                encode(_: _13.CreateTransferOperatorshipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.CreateTransferOperatorshipResponse;
                fromPartial(_: Partial<_13.CreateTransferOperatorshipResponse>): _13.CreateTransferOperatorshipResponse;
                fromAmino(_: _13.CreateTransferOperatorshipResponseAmino): _13.CreateTransferOperatorshipResponse;
                toAmino(_: _13.CreateTransferOperatorshipResponse): _13.CreateTransferOperatorshipResponseAmino;
                fromAminoMsg(object: _13.CreateTransferOperatorshipResponseAminoMsg): _13.CreateTransferOperatorshipResponse;
                fromProtoMsg(message: _13.CreateTransferOperatorshipResponseProtoMsg): _13.CreateTransferOperatorshipResponse;
                toProto(message: _13.CreateTransferOperatorshipResponse): Uint8Array;
                toProtoMsg(message: _13.CreateTransferOperatorshipResponse): _13.CreateTransferOperatorshipResponseProtoMsg;
            };
            SignCommandsRequest: {
                typeUrl: string;
                encode(message: _13.SignCommandsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.SignCommandsRequest;
                fromPartial(object: Partial<_13.SignCommandsRequest>): _13.SignCommandsRequest;
                fromAmino(object: _13.SignCommandsRequestAmino): _13.SignCommandsRequest;
                toAmino(message: _13.SignCommandsRequest): _13.SignCommandsRequestAmino;
                fromAminoMsg(object: _13.SignCommandsRequestAminoMsg): _13.SignCommandsRequest;
                fromProtoMsg(message: _13.SignCommandsRequestProtoMsg): _13.SignCommandsRequest;
                toProto(message: _13.SignCommandsRequest): Uint8Array;
                toProtoMsg(message: _13.SignCommandsRequest): _13.SignCommandsRequestProtoMsg;
            };
            SignCommandsResponse: {
                typeUrl: string;
                encode(message: _13.SignCommandsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.SignCommandsResponse;
                fromPartial(object: Partial<_13.SignCommandsResponse>): _13.SignCommandsResponse;
                fromAmino(object: _13.SignCommandsResponseAmino): _13.SignCommandsResponse;
                toAmino(message: _13.SignCommandsResponse): _13.SignCommandsResponseAmino;
                fromAminoMsg(object: _13.SignCommandsResponseAminoMsg): _13.SignCommandsResponse;
                fromProtoMsg(message: _13.SignCommandsResponseProtoMsg): _13.SignCommandsResponse;
                toProto(message: _13.SignCommandsResponse): Uint8Array;
                toProtoMsg(message: _13.SignCommandsResponse): _13.SignCommandsResponseProtoMsg;
            };
            AddChainRequest: {
                typeUrl: string;
                encode(message: _13.AddChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.AddChainRequest;
                fromPartial(object: Partial<_13.AddChainRequest>): _13.AddChainRequest;
                fromAmino(object: _13.AddChainRequestAmino): _13.AddChainRequest;
                toAmino(message: _13.AddChainRequest): _13.AddChainRequestAmino;
                fromAminoMsg(object: _13.AddChainRequestAminoMsg): _13.AddChainRequest;
                fromProtoMsg(message: _13.AddChainRequestProtoMsg): _13.AddChainRequest;
                toProto(message: _13.AddChainRequest): Uint8Array;
                toProtoMsg(message: _13.AddChainRequest): _13.AddChainRequestProtoMsg;
            };
            AddChainResponse: {
                typeUrl: string;
                encode(_: _13.AddChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.AddChainResponse;
                fromPartial(_: Partial<_13.AddChainResponse>): _13.AddChainResponse;
                fromAmino(_: _13.AddChainResponseAmino): _13.AddChainResponse;
                toAmino(_: _13.AddChainResponse): _13.AddChainResponseAmino;
                fromAminoMsg(object: _13.AddChainResponseAminoMsg): _13.AddChainResponse;
                fromProtoMsg(message: _13.AddChainResponseProtoMsg): _13.AddChainResponse;
                toProto(message: _13.AddChainResponse): Uint8Array;
                toProtoMsg(message: _13.AddChainResponse): _13.AddChainResponseProtoMsg;
            };
            RetryFailedEventRequest: {
                typeUrl: string;
                encode(message: _13.RetryFailedEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.RetryFailedEventRequest;
                fromPartial(object: Partial<_13.RetryFailedEventRequest>): _13.RetryFailedEventRequest;
                fromAmino(object: _13.RetryFailedEventRequestAmino): _13.RetryFailedEventRequest;
                toAmino(message: _13.RetryFailedEventRequest): _13.RetryFailedEventRequestAmino;
                fromAminoMsg(object: _13.RetryFailedEventRequestAminoMsg): _13.RetryFailedEventRequest;
                fromProtoMsg(message: _13.RetryFailedEventRequestProtoMsg): _13.RetryFailedEventRequest;
                toProto(message: _13.RetryFailedEventRequest): Uint8Array;
                toProtoMsg(message: _13.RetryFailedEventRequest): _13.RetryFailedEventRequestProtoMsg;
            };
            RetryFailedEventResponse: {
                typeUrl: string;
                encode(_: _13.RetryFailedEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.RetryFailedEventResponse;
                fromPartial(_: Partial<_13.RetryFailedEventResponse>): _13.RetryFailedEventResponse;
                fromAmino(_: _13.RetryFailedEventResponseAmino): _13.RetryFailedEventResponse;
                toAmino(_: _13.RetryFailedEventResponse): _13.RetryFailedEventResponseAmino;
                fromAminoMsg(object: _13.RetryFailedEventResponseAminoMsg): _13.RetryFailedEventResponse;
                fromProtoMsg(message: _13.RetryFailedEventResponseProtoMsg): _13.RetryFailedEventResponse;
                toProto(message: _13.RetryFailedEventResponse): Uint8Array;
                toProtoMsg(message: _13.RetryFailedEventResponse): _13.RetryFailedEventResponseProtoMsg;
            };
            chainStatusFromJSON(object: any): _11.ChainStatus;
            chainStatusToJSON(object: _11.ChainStatus): string;
            tokenTypeFromJSON(object: any): _11.TokenType;
            tokenTypeToJSON(object: _11.TokenType): string;
            ChainStatus: typeof _11.ChainStatus;
            ChainStatusSDKType: typeof _11.ChainStatus;
            ChainStatusAmino: typeof _11.ChainStatus;
            TokenType: typeof _11.TokenType;
            TokenTypeSDKType: typeof _11.TokenType;
            TokenTypeAmino: typeof _11.TokenType;
            DepositQueryParams: {
                typeUrl: string;
                encode(message: _11.DepositQueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.DepositQueryParams;
                fromPartial(object: Partial<_11.DepositQueryParams>): _11.DepositQueryParams;
                fromAmino(object: _11.DepositQueryParamsAmino): _11.DepositQueryParams;
                toAmino(message: _11.DepositQueryParams): _11.DepositQueryParamsAmino;
                fromAminoMsg(object: _11.DepositQueryParamsAminoMsg): _11.DepositQueryParams;
                fromProtoMsg(message: _11.DepositQueryParamsProtoMsg): _11.DepositQueryParams;
                toProto(message: _11.DepositQueryParams): Uint8Array;
                toProtoMsg(message: _11.DepositQueryParams): _11.DepositQueryParamsProtoMsg;
            };
            BatchedCommandsRequest: {
                typeUrl: string;
                encode(message: _11.BatchedCommandsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.BatchedCommandsRequest;
                fromPartial(object: Partial<_11.BatchedCommandsRequest>): _11.BatchedCommandsRequest;
                fromAmino(object: _11.BatchedCommandsRequestAmino): _11.BatchedCommandsRequest;
                toAmino(message: _11.BatchedCommandsRequest): _11.BatchedCommandsRequestAmino;
                fromAminoMsg(object: _11.BatchedCommandsRequestAminoMsg): _11.BatchedCommandsRequest;
                fromProtoMsg(message: _11.BatchedCommandsRequestProtoMsg): _11.BatchedCommandsRequest;
                toProto(message: _11.BatchedCommandsRequest): Uint8Array;
                toProtoMsg(message: _11.BatchedCommandsRequest): _11.BatchedCommandsRequestProtoMsg;
            };
            BatchedCommandsResponse: {
                typeUrl: string;
                encode(message: _11.BatchedCommandsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.BatchedCommandsResponse;
                fromPartial(object: Partial<_11.BatchedCommandsResponse>): _11.BatchedCommandsResponse;
                fromAmino(object: _11.BatchedCommandsResponseAmino): _11.BatchedCommandsResponse;
                toAmino(message: _11.BatchedCommandsResponse): _11.BatchedCommandsResponseAmino;
                fromAminoMsg(object: _11.BatchedCommandsResponseAminoMsg): _11.BatchedCommandsResponse;
                fromProtoMsg(message: _11.BatchedCommandsResponseProtoMsg): _11.BatchedCommandsResponse;
                toProto(message: _11.BatchedCommandsResponse): Uint8Array;
                toProtoMsg(message: _11.BatchedCommandsResponse): _11.BatchedCommandsResponseProtoMsg;
            };
            KeyAddressRequest: {
                typeUrl: string;
                encode(message: _11.KeyAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.KeyAddressRequest;
                fromPartial(object: Partial<_11.KeyAddressRequest>): _11.KeyAddressRequest;
                fromAmino(object: _11.KeyAddressRequestAmino): _11.KeyAddressRequest;
                toAmino(message: _11.KeyAddressRequest): _11.KeyAddressRequestAmino;
                fromAminoMsg(object: _11.KeyAddressRequestAminoMsg): _11.KeyAddressRequest;
                fromProtoMsg(message: _11.KeyAddressRequestProtoMsg): _11.KeyAddressRequest;
                toProto(message: _11.KeyAddressRequest): Uint8Array;
                toProtoMsg(message: _11.KeyAddressRequest): _11.KeyAddressRequestProtoMsg;
            };
            KeyAddressResponse: {
                typeUrl: string;
                encode(message: _11.KeyAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.KeyAddressResponse;
                fromPartial(object: Partial<_11.KeyAddressResponse>): _11.KeyAddressResponse;
                fromAmino(object: _11.KeyAddressResponseAmino): _11.KeyAddressResponse;
                toAmino(message: _11.KeyAddressResponse): _11.KeyAddressResponseAmino;
                fromAminoMsg(object: _11.KeyAddressResponseAminoMsg): _11.KeyAddressResponse;
                fromProtoMsg(message: _11.KeyAddressResponseProtoMsg): _11.KeyAddressResponse;
                toProto(message: _11.KeyAddressResponse): Uint8Array;
                toProtoMsg(message: _11.KeyAddressResponse): _11.KeyAddressResponseProtoMsg;
            };
            KeyAddressResponse_WeightedAddress: {
                typeUrl: string;
                encode(message: _11.KeyAddressResponse_WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.KeyAddressResponse_WeightedAddress;
                fromPartial(object: Partial<_11.KeyAddressResponse_WeightedAddress>): _11.KeyAddressResponse_WeightedAddress;
                fromAmino(object: _11.KeyAddressResponse_WeightedAddressAmino): _11.KeyAddressResponse_WeightedAddress;
                toAmino(message: _11.KeyAddressResponse_WeightedAddress): _11.KeyAddressResponse_WeightedAddressAmino;
                fromAminoMsg(object: _11.KeyAddressResponse_WeightedAddressAminoMsg): _11.KeyAddressResponse_WeightedAddress;
                fromProtoMsg(message: _11.KeyAddressResponse_WeightedAddressProtoMsg): _11.KeyAddressResponse_WeightedAddress;
                toProto(message: _11.KeyAddressResponse_WeightedAddress): Uint8Array;
                toProtoMsg(message: _11.KeyAddressResponse_WeightedAddress): _11.KeyAddressResponse_WeightedAddressProtoMsg;
            };
            QueryTokenAddressResponse: {
                typeUrl: string;
                encode(message: _11.QueryTokenAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryTokenAddressResponse;
                fromPartial(object: Partial<_11.QueryTokenAddressResponse>): _11.QueryTokenAddressResponse;
                fromAmino(object: _11.QueryTokenAddressResponseAmino): _11.QueryTokenAddressResponse;
                toAmino(message: _11.QueryTokenAddressResponse): _11.QueryTokenAddressResponseAmino;
                fromAminoMsg(object: _11.QueryTokenAddressResponseAminoMsg): _11.QueryTokenAddressResponse;
                fromProtoMsg(message: _11.QueryTokenAddressResponseProtoMsg): _11.QueryTokenAddressResponse;
                toProto(message: _11.QueryTokenAddressResponse): Uint8Array;
                toProtoMsg(message: _11.QueryTokenAddressResponse): _11.QueryTokenAddressResponseProtoMsg;
            };
            QueryDepositStateParams: {
                typeUrl: string;
                encode(message: _11.QueryDepositStateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryDepositStateParams;
                fromPartial(object: Partial<_11.QueryDepositStateParams>): _11.QueryDepositStateParams;
                fromAmino(object: _11.QueryDepositStateParamsAmino): _11.QueryDepositStateParams;
                toAmino(message: _11.QueryDepositStateParams): _11.QueryDepositStateParamsAmino;
                fromAminoMsg(object: _11.QueryDepositStateParamsAminoMsg): _11.QueryDepositStateParams;
                fromProtoMsg(message: _11.QueryDepositStateParamsProtoMsg): _11.QueryDepositStateParams;
                toProto(message: _11.QueryDepositStateParams): Uint8Array;
                toProtoMsg(message: _11.QueryDepositStateParams): _11.QueryDepositStateParamsProtoMsg;
            };
            DepositStateRequest: {
                typeUrl: string;
                encode(message: _11.DepositStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.DepositStateRequest;
                fromPartial(object: Partial<_11.DepositStateRequest>): _11.DepositStateRequest;
                fromAmino(object: _11.DepositStateRequestAmino): _11.DepositStateRequest;
                toAmino(message: _11.DepositStateRequest): _11.DepositStateRequestAmino;
                fromAminoMsg(object: _11.DepositStateRequestAminoMsg): _11.DepositStateRequest;
                fromProtoMsg(message: _11.DepositStateRequestProtoMsg): _11.DepositStateRequest;
                toProto(message: _11.DepositStateRequest): Uint8Array;
                toProtoMsg(message: _11.DepositStateRequest): _11.DepositStateRequestProtoMsg;
            };
            DepositStateResponse: {
                typeUrl: string;
                encode(message: _11.DepositStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.DepositStateResponse;
                fromPartial(object: Partial<_11.DepositStateResponse>): _11.DepositStateResponse;
                fromAmino(object: _11.DepositStateResponseAmino): _11.DepositStateResponse;
                toAmino(message: _11.DepositStateResponse): _11.DepositStateResponseAmino;
                fromAminoMsg(object: _11.DepositStateResponseAminoMsg): _11.DepositStateResponse;
                fromProtoMsg(message: _11.DepositStateResponseProtoMsg): _11.DepositStateResponse;
                toProto(message: _11.DepositStateResponse): Uint8Array;
                toProtoMsg(message: _11.DepositStateResponse): _11.DepositStateResponseProtoMsg;
            };
            EventRequest: {
                typeUrl: string;
                encode(message: _11.EventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.EventRequest;
                fromPartial(object: Partial<_11.EventRequest>): _11.EventRequest;
                fromAmino(object: _11.EventRequestAmino): _11.EventRequest;
                toAmino(message: _11.EventRequest): _11.EventRequestAmino;
                fromAminoMsg(object: _11.EventRequestAminoMsg): _11.EventRequest;
                fromProtoMsg(message: _11.EventRequestProtoMsg): _11.EventRequest;
                toProto(message: _11.EventRequest): Uint8Array;
                toProtoMsg(message: _11.EventRequest): _11.EventRequestProtoMsg;
            };
            EventResponse: {
                typeUrl: string;
                encode(message: _11.EventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.EventResponse;
                fromPartial(object: Partial<_11.EventResponse>): _11.EventResponse;
                fromAmino(object: _11.EventResponseAmino): _11.EventResponse;
                toAmino(message: _11.EventResponse): _11.EventResponseAmino;
                fromAminoMsg(object: _11.EventResponseAminoMsg): _11.EventResponse;
                fromProtoMsg(message: _11.EventResponseProtoMsg): _11.EventResponse;
                toProto(message: _11.EventResponse): Uint8Array;
                toProtoMsg(message: _11.EventResponse): _11.EventResponseProtoMsg;
            };
            QueryBurnerAddressResponse: {
                typeUrl: string;
                encode(message: _11.QueryBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryBurnerAddressResponse;
                fromPartial(object: Partial<_11.QueryBurnerAddressResponse>): _11.QueryBurnerAddressResponse;
                fromAmino(object: _11.QueryBurnerAddressResponseAmino): _11.QueryBurnerAddressResponse;
                toAmino(message: _11.QueryBurnerAddressResponse): _11.QueryBurnerAddressResponseAmino;
                fromAminoMsg(object: _11.QueryBurnerAddressResponseAminoMsg): _11.QueryBurnerAddressResponse;
                fromProtoMsg(message: _11.QueryBurnerAddressResponseProtoMsg): _11.QueryBurnerAddressResponse;
                toProto(message: _11.QueryBurnerAddressResponse): Uint8Array;
                toProtoMsg(message: _11.QueryBurnerAddressResponse): _11.QueryBurnerAddressResponseProtoMsg;
            };
            ChainsRequest: {
                typeUrl: string;
                encode(message: _11.ChainsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ChainsRequest;
                fromPartial(object: Partial<_11.ChainsRequest>): _11.ChainsRequest;
                fromAmino(object: _11.ChainsRequestAmino): _11.ChainsRequest;
                toAmino(message: _11.ChainsRequest): _11.ChainsRequestAmino;
                fromAminoMsg(object: _11.ChainsRequestAminoMsg): _11.ChainsRequest;
                fromProtoMsg(message: _11.ChainsRequestProtoMsg): _11.ChainsRequest;
                toProto(message: _11.ChainsRequest): Uint8Array;
                toProtoMsg(message: _11.ChainsRequest): _11.ChainsRequestProtoMsg;
            };
            ChainsResponse: {
                typeUrl: string;
                encode(message: _11.ChainsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ChainsResponse;
                fromPartial(object: Partial<_11.ChainsResponse>): _11.ChainsResponse;
                fromAmino(object: _11.ChainsResponseAmino): _11.ChainsResponse;
                toAmino(message: _11.ChainsResponse): _11.ChainsResponseAmino;
                fromAminoMsg(object: _11.ChainsResponseAminoMsg): _11.ChainsResponse;
                fromProtoMsg(message: _11.ChainsResponseProtoMsg): _11.ChainsResponse;
                toProto(message: _11.ChainsResponse): Uint8Array;
                toProtoMsg(message: _11.ChainsResponse): _11.ChainsResponseProtoMsg;
            };
            CommandRequest: {
                typeUrl: string;
                encode(message: _11.CommandRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.CommandRequest;
                fromPartial(object: Partial<_11.CommandRequest>): _11.CommandRequest;
                fromAmino(object: _11.CommandRequestAmino): _11.CommandRequest;
                toAmino(message: _11.CommandRequest): _11.CommandRequestAmino;
                fromAminoMsg(object: _11.CommandRequestAminoMsg): _11.CommandRequest;
                fromProtoMsg(message: _11.CommandRequestProtoMsg): _11.CommandRequest;
                toProto(message: _11.CommandRequest): Uint8Array;
                toProtoMsg(message: _11.CommandRequest): _11.CommandRequestProtoMsg;
            };
            CommandResponse_ParamsEntry: {
                encode(message: _11.CommandResponse_ParamsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.CommandResponse_ParamsEntry;
                fromPartial(object: Partial<_11.CommandResponse_ParamsEntry>): _11.CommandResponse_ParamsEntry;
                fromAmino(object: _11.CommandResponse_ParamsEntryAmino): _11.CommandResponse_ParamsEntry;
                toAmino(message: _11.CommandResponse_ParamsEntry): _11.CommandResponse_ParamsEntryAmino;
                fromAminoMsg(object: _11.CommandResponse_ParamsEntryAminoMsg): _11.CommandResponse_ParamsEntry;
                fromProtoMsg(message: _11.CommandResponse_ParamsEntryProtoMsg): _11.CommandResponse_ParamsEntry;
                toProto(message: _11.CommandResponse_ParamsEntry): Uint8Array;
            };
            CommandResponse: {
                typeUrl: string;
                encode(message: _11.CommandResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.CommandResponse;
                fromPartial(object: Partial<_11.CommandResponse>): _11.CommandResponse;
                fromAmino(object: _11.CommandResponseAmino): _11.CommandResponse;
                toAmino(message: _11.CommandResponse): _11.CommandResponseAmino;
                fromAminoMsg(object: _11.CommandResponseAminoMsg): _11.CommandResponse;
                fromProtoMsg(message: _11.CommandResponseProtoMsg): _11.CommandResponse;
                toProto(message: _11.CommandResponse): Uint8Array;
                toProtoMsg(message: _11.CommandResponse): _11.CommandResponseProtoMsg;
            };
            PendingCommandsRequest: {
                typeUrl: string;
                encode(message: _11.PendingCommandsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.PendingCommandsRequest;
                fromPartial(object: Partial<_11.PendingCommandsRequest>): _11.PendingCommandsRequest;
                fromAmino(object: _11.PendingCommandsRequestAmino): _11.PendingCommandsRequest;
                toAmino(message: _11.PendingCommandsRequest): _11.PendingCommandsRequestAmino;
                fromAminoMsg(object: _11.PendingCommandsRequestAminoMsg): _11.PendingCommandsRequest;
                fromProtoMsg(message: _11.PendingCommandsRequestProtoMsg): _11.PendingCommandsRequest;
                toProto(message: _11.PendingCommandsRequest): Uint8Array;
                toProtoMsg(message: _11.PendingCommandsRequest): _11.PendingCommandsRequestProtoMsg;
            };
            PendingCommandsResponse: {
                typeUrl: string;
                encode(message: _11.PendingCommandsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.PendingCommandsResponse;
                fromPartial(object: Partial<_11.PendingCommandsResponse>): _11.PendingCommandsResponse;
                fromAmino(object: _11.PendingCommandsResponseAmino): _11.PendingCommandsResponse;
                toAmino(message: _11.PendingCommandsResponse): _11.PendingCommandsResponseAmino;
                fromAminoMsg(object: _11.PendingCommandsResponseAminoMsg): _11.PendingCommandsResponse;
                fromProtoMsg(message: _11.PendingCommandsResponseProtoMsg): _11.PendingCommandsResponse;
                toProto(message: _11.PendingCommandsResponse): Uint8Array;
                toProtoMsg(message: _11.PendingCommandsResponse): _11.PendingCommandsResponseProtoMsg;
            };
            QueryCommandResponse_ParamsEntry: {
                encode(message: _11.QueryCommandResponse_ParamsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCommandResponse_ParamsEntry;
                fromPartial(object: Partial<_11.QueryCommandResponse_ParamsEntry>): _11.QueryCommandResponse_ParamsEntry;
                fromAmino(object: _11.QueryCommandResponse_ParamsEntryAmino): _11.QueryCommandResponse_ParamsEntry;
                toAmino(message: _11.QueryCommandResponse_ParamsEntry): _11.QueryCommandResponse_ParamsEntryAmino;
                fromAminoMsg(object: _11.QueryCommandResponse_ParamsEntryAminoMsg): _11.QueryCommandResponse_ParamsEntry;
                fromProtoMsg(message: _11.QueryCommandResponse_ParamsEntryProtoMsg): _11.QueryCommandResponse_ParamsEntry;
                toProto(message: _11.QueryCommandResponse_ParamsEntry): Uint8Array;
            };
            QueryCommandResponse: {
                typeUrl: string;
                encode(message: _11.QueryCommandResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCommandResponse;
                fromPartial(object: Partial<_11.QueryCommandResponse>): _11.QueryCommandResponse;
                fromAmino(object: _11.QueryCommandResponseAmino): _11.QueryCommandResponse;
                toAmino(message: _11.QueryCommandResponse): _11.QueryCommandResponseAmino;
                fromAminoMsg(object: _11.QueryCommandResponseAminoMsg): _11.QueryCommandResponse;
                fromProtoMsg(message: _11.QueryCommandResponseProtoMsg): _11.QueryCommandResponse;
                toProto(message: _11.QueryCommandResponse): Uint8Array;
                toProtoMsg(message: _11.QueryCommandResponse): _11.QueryCommandResponseProtoMsg;
            };
            BurnerInfoRequest: {
                typeUrl: string;
                encode(message: _11.BurnerInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.BurnerInfoRequest;
                fromPartial(object: Partial<_11.BurnerInfoRequest>): _11.BurnerInfoRequest;
                fromAmino(object: _11.BurnerInfoRequestAmino): _11.BurnerInfoRequest;
                toAmino(message: _11.BurnerInfoRequest): _11.BurnerInfoRequestAmino;
                fromAminoMsg(object: _11.BurnerInfoRequestAminoMsg): _11.BurnerInfoRequest;
                fromProtoMsg(message: _11.BurnerInfoRequestProtoMsg): _11.BurnerInfoRequest;
                toProto(message: _11.BurnerInfoRequest): Uint8Array;
                toProtoMsg(message: _11.BurnerInfoRequest): _11.BurnerInfoRequestProtoMsg;
            };
            BurnerInfoResponse: {
                typeUrl: string;
                encode(message: _11.BurnerInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.BurnerInfoResponse;
                fromPartial(object: Partial<_11.BurnerInfoResponse>): _11.BurnerInfoResponse;
                fromAmino(object: _11.BurnerInfoResponseAmino): _11.BurnerInfoResponse;
                toAmino(message: _11.BurnerInfoResponse): _11.BurnerInfoResponseAmino;
                fromAminoMsg(object: _11.BurnerInfoResponseAminoMsg): _11.BurnerInfoResponse;
                fromProtoMsg(message: _11.BurnerInfoResponseProtoMsg): _11.BurnerInfoResponse;
                toProto(message: _11.BurnerInfoResponse): Uint8Array;
                toProtoMsg(message: _11.BurnerInfoResponse): _11.BurnerInfoResponseProtoMsg;
            };
            ConfirmationHeightRequest: {
                typeUrl: string;
                encode(message: _11.ConfirmationHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ConfirmationHeightRequest;
                fromPartial(object: Partial<_11.ConfirmationHeightRequest>): _11.ConfirmationHeightRequest;
                fromAmino(object: _11.ConfirmationHeightRequestAmino): _11.ConfirmationHeightRequest;
                toAmino(message: _11.ConfirmationHeightRequest): _11.ConfirmationHeightRequestAmino;
                fromAminoMsg(object: _11.ConfirmationHeightRequestAminoMsg): _11.ConfirmationHeightRequest;
                fromProtoMsg(message: _11.ConfirmationHeightRequestProtoMsg): _11.ConfirmationHeightRequest;
                toProto(message: _11.ConfirmationHeightRequest): Uint8Array;
                toProtoMsg(message: _11.ConfirmationHeightRequest): _11.ConfirmationHeightRequestProtoMsg;
            };
            ConfirmationHeightResponse: {
                typeUrl: string;
                encode(message: _11.ConfirmationHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ConfirmationHeightResponse;
                fromPartial(object: Partial<_11.ConfirmationHeightResponse>): _11.ConfirmationHeightResponse;
                fromAmino(object: _11.ConfirmationHeightResponseAmino): _11.ConfirmationHeightResponse;
                toAmino(message: _11.ConfirmationHeightResponse): _11.ConfirmationHeightResponseAmino;
                fromAminoMsg(object: _11.ConfirmationHeightResponseAminoMsg): _11.ConfirmationHeightResponse;
                fromProtoMsg(message: _11.ConfirmationHeightResponseProtoMsg): _11.ConfirmationHeightResponse;
                toProto(message: _11.ConfirmationHeightResponse): Uint8Array;
                toProtoMsg(message: _11.ConfirmationHeightResponse): _11.ConfirmationHeightResponseProtoMsg;
            };
            GatewayAddressRequest: {
                typeUrl: string;
                encode(message: _11.GatewayAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GatewayAddressRequest;
                fromPartial(object: Partial<_11.GatewayAddressRequest>): _11.GatewayAddressRequest;
                fromAmino(object: _11.GatewayAddressRequestAmino): _11.GatewayAddressRequest;
                toAmino(message: _11.GatewayAddressRequest): _11.GatewayAddressRequestAmino;
                fromAminoMsg(object: _11.GatewayAddressRequestAminoMsg): _11.GatewayAddressRequest;
                fromProtoMsg(message: _11.GatewayAddressRequestProtoMsg): _11.GatewayAddressRequest;
                toProto(message: _11.GatewayAddressRequest): Uint8Array;
                toProtoMsg(message: _11.GatewayAddressRequest): _11.GatewayAddressRequestProtoMsg;
            };
            GatewayAddressResponse: {
                typeUrl: string;
                encode(message: _11.GatewayAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GatewayAddressResponse;
                fromPartial(object: Partial<_11.GatewayAddressResponse>): _11.GatewayAddressResponse;
                fromAmino(object: _11.GatewayAddressResponseAmino): _11.GatewayAddressResponse;
                toAmino(message: _11.GatewayAddressResponse): _11.GatewayAddressResponseAmino;
                fromAminoMsg(object: _11.GatewayAddressResponseAminoMsg): _11.GatewayAddressResponse;
                fromProtoMsg(message: _11.GatewayAddressResponseProtoMsg): _11.GatewayAddressResponse;
                toProto(message: _11.GatewayAddressResponse): Uint8Array;
                toProtoMsg(message: _11.GatewayAddressResponse): _11.GatewayAddressResponseProtoMsg;
            };
            BytecodeRequest: {
                typeUrl: string;
                encode(message: _11.BytecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.BytecodeRequest;
                fromPartial(object: Partial<_11.BytecodeRequest>): _11.BytecodeRequest;
                fromAmino(object: _11.BytecodeRequestAmino): _11.BytecodeRequest;
                toAmino(message: _11.BytecodeRequest): _11.BytecodeRequestAmino;
                fromAminoMsg(object: _11.BytecodeRequestAminoMsg): _11.BytecodeRequest;
                fromProtoMsg(message: _11.BytecodeRequestProtoMsg): _11.BytecodeRequest;
                toProto(message: _11.BytecodeRequest): Uint8Array;
                toProtoMsg(message: _11.BytecodeRequest): _11.BytecodeRequestProtoMsg;
            };
            BytecodeResponse: {
                typeUrl: string;
                encode(message: _11.BytecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.BytecodeResponse;
                fromPartial(object: Partial<_11.BytecodeResponse>): _11.BytecodeResponse;
                fromAmino(object: _11.BytecodeResponseAmino): _11.BytecodeResponse;
                toAmino(message: _11.BytecodeResponse): _11.BytecodeResponseAmino;
                fromAminoMsg(object: _11.BytecodeResponseAminoMsg): _11.BytecodeResponse;
                fromProtoMsg(message: _11.BytecodeResponseProtoMsg): _11.BytecodeResponse;
                toProto(message: _11.BytecodeResponse): Uint8Array;
                toProtoMsg(message: _11.BytecodeResponse): _11.BytecodeResponseProtoMsg;
            };
            ERC20TokensRequest: {
                typeUrl: string;
                encode(message: _11.ERC20TokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ERC20TokensRequest;
                fromPartial(object: Partial<_11.ERC20TokensRequest>): _11.ERC20TokensRequest;
                fromAmino(object: _11.ERC20TokensRequestAmino): _11.ERC20TokensRequest;
                toAmino(message: _11.ERC20TokensRequest): _11.ERC20TokensRequestAmino;
                fromAminoMsg(object: _11.ERC20TokensRequestAminoMsg): _11.ERC20TokensRequest;
                fromProtoMsg(message: _11.ERC20TokensRequestProtoMsg): _11.ERC20TokensRequest;
                toProto(message: _11.ERC20TokensRequest): Uint8Array;
                toProtoMsg(message: _11.ERC20TokensRequest): _11.ERC20TokensRequestProtoMsg;
            };
            ERC20TokensResponse: {
                typeUrl: string;
                encode(message: _11.ERC20TokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ERC20TokensResponse;
                fromPartial(object: Partial<_11.ERC20TokensResponse>): _11.ERC20TokensResponse;
                fromAmino(object: _11.ERC20TokensResponseAmino): _11.ERC20TokensResponse;
                toAmino(message: _11.ERC20TokensResponse): _11.ERC20TokensResponseAmino;
                fromAminoMsg(object: _11.ERC20TokensResponseAminoMsg): _11.ERC20TokensResponse;
                fromProtoMsg(message: _11.ERC20TokensResponseProtoMsg): _11.ERC20TokensResponse;
                toProto(message: _11.ERC20TokensResponse): Uint8Array;
                toProtoMsg(message: _11.ERC20TokensResponse): _11.ERC20TokensResponseProtoMsg;
            };
            ERC20TokensResponse_Token: {
                typeUrl: string;
                encode(message: _11.ERC20TokensResponse_Token, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ERC20TokensResponse_Token;
                fromPartial(object: Partial<_11.ERC20TokensResponse_Token>): _11.ERC20TokensResponse_Token;
                fromAmino(object: _11.ERC20TokensResponse_TokenAmino): _11.ERC20TokensResponse_Token;
                toAmino(message: _11.ERC20TokensResponse_Token): _11.ERC20TokensResponse_TokenAmino;
                fromAminoMsg(object: _11.ERC20TokensResponse_TokenAminoMsg): _11.ERC20TokensResponse_Token;
                fromProtoMsg(message: _11.ERC20TokensResponse_TokenProtoMsg): _11.ERC20TokensResponse_Token;
                toProto(message: _11.ERC20TokensResponse_Token): Uint8Array;
                toProtoMsg(message: _11.ERC20TokensResponse_Token): _11.ERC20TokensResponse_TokenProtoMsg;
            };
            TokenInfoRequest: {
                typeUrl: string;
                encode(message: _11.TokenInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.TokenInfoRequest;
                fromPartial(object: Partial<_11.TokenInfoRequest>): _11.TokenInfoRequest;
                fromAmino(object: _11.TokenInfoRequestAmino): _11.TokenInfoRequest;
                toAmino(message: _11.TokenInfoRequest): _11.TokenInfoRequestAmino;
                fromAminoMsg(object: _11.TokenInfoRequestAminoMsg): _11.TokenInfoRequest;
                fromProtoMsg(message: _11.TokenInfoRequestProtoMsg): _11.TokenInfoRequest;
                toProto(message: _11.TokenInfoRequest): Uint8Array;
                toProtoMsg(message: _11.TokenInfoRequest): _11.TokenInfoRequestProtoMsg;
            };
            TokenInfoResponse: {
                typeUrl: string;
                encode(message: _11.TokenInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.TokenInfoResponse;
                fromPartial(object: Partial<_11.TokenInfoResponse>): _11.TokenInfoResponse;
                fromAmino(object: _11.TokenInfoResponseAmino): _11.TokenInfoResponse;
                toAmino(message: _11.TokenInfoResponse): _11.TokenInfoResponseAmino;
                fromAminoMsg(object: _11.TokenInfoResponseAminoMsg): _11.TokenInfoResponse;
                fromProtoMsg(message: _11.TokenInfoResponseProtoMsg): _11.TokenInfoResponse;
                toProto(message: _11.TokenInfoResponse): Uint8Array;
                toProtoMsg(message: _11.TokenInfoResponse): _11.TokenInfoResponseProtoMsg;
            };
            Proof: {
                typeUrl: string;
                encode(message: _11.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Proof;
                fromPartial(object: Partial<_11.Proof>): _11.Proof;
                fromAmino(object: _11.ProofAmino): _11.Proof;
                toAmino(message: _11.Proof): _11.ProofAmino;
                fromAminoMsg(object: _11.ProofAminoMsg): _11.Proof;
                fromProtoMsg(message: _11.ProofProtoMsg): _11.Proof;
                toProto(message: _11.Proof): Uint8Array;
                toProtoMsg(message: _11.Proof): _11.ProofProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(message: _11.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ParamsRequest;
                fromPartial(object: Partial<_11.ParamsRequest>): _11.ParamsRequest;
                fromAmino(object: _11.ParamsRequestAmino): _11.ParamsRequest;
                toAmino(message: _11.ParamsRequest): _11.ParamsRequestAmino;
                fromAminoMsg(object: _11.ParamsRequestAminoMsg): _11.ParamsRequest;
                fromProtoMsg(message: _11.ParamsRequestProtoMsg): _11.ParamsRequest;
                toProto(message: _11.ParamsRequest): Uint8Array;
                toProtoMsg(message: _11.ParamsRequest): _11.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _11.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ParamsResponse;
                fromPartial(object: Partial<_11.ParamsResponse>): _11.ParamsResponse;
                fromAmino(object: _11.ParamsResponseAmino): _11.ParamsResponse;
                toAmino(message: _11.ParamsResponse): _11.ParamsResponseAmino;
                fromAminoMsg(object: _11.ParamsResponseAminoMsg): _11.ParamsResponse;
                fromProtoMsg(message: _11.ParamsResponseProtoMsg): _11.ParamsResponse;
                toProto(message: _11.ParamsResponse): Uint8Array;
                toProtoMsg(message: _11.ParamsResponse): _11.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _10.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Params;
                fromPartial(object: Partial<_10.Params>): _10.Params;
                fromAmino(object: _10.ParamsAmino): _10.Params;
                toAmino(message: _10.Params): _10.ParamsAmino;
                fromAminoMsg(object: _10.ParamsAminoMsg): _10.Params;
                fromProtoMsg(message: _10.ParamsProtoMsg): _10.Params;
                toProto(message: _10.Params): Uint8Array;
                toProtoMsg(message: _10.Params): _10.ParamsProtoMsg;
            };
            PendingChain: {
                typeUrl: string;
                encode(message: _10.PendingChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.PendingChain;
                fromPartial(object: Partial<_10.PendingChain>): _10.PendingChain;
                fromAmino(object: _10.PendingChainAmino): _10.PendingChain;
                toAmino(message: _10.PendingChain): _10.PendingChainAmino;
                fromAminoMsg(object: _10.PendingChainAminoMsg): _10.PendingChain;
                fromProtoMsg(message: _10.PendingChainProtoMsg): _10.PendingChain;
                toProto(message: _10.PendingChain): Uint8Array;
                toProtoMsg(message: _10.PendingChain): _10.PendingChainProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _9.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.GenesisState;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
                fromAmino(object: _9.GenesisStateAmino): _9.GenesisState;
                toAmino(message: _9.GenesisState): _9.GenesisStateAmino;
                fromAminoMsg(object: _9.GenesisStateAminoMsg): _9.GenesisState;
                fromProtoMsg(message: _9.GenesisStateProtoMsg): _9.GenesisState;
                toProto(message: _9.GenesisState): Uint8Array;
                toProtoMsg(message: _9.GenesisState): _9.GenesisStateProtoMsg;
            };
            GenesisState_Chain: {
                typeUrl: string;
                encode(message: _9.GenesisState_Chain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.GenesisState_Chain;
                fromPartial(object: Partial<_9.GenesisState_Chain>): _9.GenesisState_Chain;
                fromAmino(object: _9.GenesisState_ChainAmino): _9.GenesisState_Chain;
                toAmino(message: _9.GenesisState_Chain): _9.GenesisState_ChainAmino;
                fromAminoMsg(object: _9.GenesisState_ChainAminoMsg): _9.GenesisState_Chain;
                fromProtoMsg(message: _9.GenesisState_ChainProtoMsg): _9.GenesisState_Chain;
                toProto(message: _9.GenesisState_Chain): Uint8Array;
                toProtoMsg(message: _9.GenesisState_Chain): _9.GenesisState_ChainProtoMsg;
            };
            PollFailed: {
                typeUrl: string;
                encode(message: _8.PollFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.PollFailed;
                fromPartial(object: Partial<_8.PollFailed>): _8.PollFailed;
                fromAmino(object: _8.PollFailedAmino): _8.PollFailed;
                toAmino(message: _8.PollFailed): _8.PollFailedAmino;
                fromAminoMsg(object: _8.PollFailedAminoMsg): _8.PollFailed;
                fromProtoMsg(message: _8.PollFailedProtoMsg): _8.PollFailed;
                toProto(message: _8.PollFailed): Uint8Array;
                toProtoMsg(message: _8.PollFailed): _8.PollFailedProtoMsg;
            };
            PollExpired: {
                typeUrl: string;
                encode(message: _8.PollExpired, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.PollExpired;
                fromPartial(object: Partial<_8.PollExpired>): _8.PollExpired;
                fromAmino(object: _8.PollExpiredAmino): _8.PollExpired;
                toAmino(message: _8.PollExpired): _8.PollExpiredAmino;
                fromAminoMsg(object: _8.PollExpiredAminoMsg): _8.PollExpired;
                fromProtoMsg(message: _8.PollExpiredProtoMsg): _8.PollExpired;
                toProto(message: _8.PollExpired): Uint8Array;
                toProtoMsg(message: _8.PollExpired): _8.PollExpiredProtoMsg;
            };
            PollCompleted: {
                typeUrl: string;
                encode(message: _8.PollCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.PollCompleted;
                fromPartial(object: Partial<_8.PollCompleted>): _8.PollCompleted;
                fromAmino(object: _8.PollCompletedAmino): _8.PollCompleted;
                toAmino(message: _8.PollCompleted): _8.PollCompletedAmino;
                fromAminoMsg(object: _8.PollCompletedAminoMsg): _8.PollCompleted;
                fromProtoMsg(message: _8.PollCompletedProtoMsg): _8.PollCompleted;
                toProto(message: _8.PollCompleted): Uint8Array;
                toProtoMsg(message: _8.PollCompleted): _8.PollCompletedProtoMsg;
            };
            NoEventsConfirmed: {
                typeUrl: string;
                encode(message: _8.NoEventsConfirmed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.NoEventsConfirmed;
                fromPartial(object: Partial<_8.NoEventsConfirmed>): _8.NoEventsConfirmed;
                fromAmino(object: _8.NoEventsConfirmedAmino): _8.NoEventsConfirmed;
                toAmino(message: _8.NoEventsConfirmed): _8.NoEventsConfirmedAmino;
                fromAminoMsg(object: _8.NoEventsConfirmedAminoMsg): _8.NoEventsConfirmed;
                fromProtoMsg(message: _8.NoEventsConfirmedProtoMsg): _8.NoEventsConfirmed;
                toProto(message: _8.NoEventsConfirmed): Uint8Array;
                toProtoMsg(message: _8.NoEventsConfirmed): _8.NoEventsConfirmedProtoMsg;
            };
            ConfirmKeyTransferStarted: {
                typeUrl: string;
                encode(message: _8.ConfirmKeyTransferStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ConfirmKeyTransferStarted;
                fromPartial(object: Partial<_8.ConfirmKeyTransferStarted>): _8.ConfirmKeyTransferStarted;
                fromAmino(object: _8.ConfirmKeyTransferStartedAmino): _8.ConfirmKeyTransferStarted;
                toAmino(message: _8.ConfirmKeyTransferStarted): _8.ConfirmKeyTransferStartedAmino;
                fromAminoMsg(object: _8.ConfirmKeyTransferStartedAminoMsg): _8.ConfirmKeyTransferStarted;
                fromProtoMsg(message: _8.ConfirmKeyTransferStartedProtoMsg): _8.ConfirmKeyTransferStarted;
                toProto(message: _8.ConfirmKeyTransferStarted): Uint8Array;
                toProtoMsg(message: _8.ConfirmKeyTransferStarted): _8.ConfirmKeyTransferStartedProtoMsg;
            };
            ConfirmGatewayTxStarted: {
                typeUrl: string;
                encode(message: _8.ConfirmGatewayTxStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ConfirmGatewayTxStarted;
                fromPartial(object: Partial<_8.ConfirmGatewayTxStarted>): _8.ConfirmGatewayTxStarted;
                fromAmino(object: _8.ConfirmGatewayTxStartedAmino): _8.ConfirmGatewayTxStarted;
                toAmino(message: _8.ConfirmGatewayTxStarted): _8.ConfirmGatewayTxStartedAmino;
                fromAminoMsg(object: _8.ConfirmGatewayTxStartedAminoMsg): _8.ConfirmGatewayTxStarted;
                fromProtoMsg(message: _8.ConfirmGatewayTxStartedProtoMsg): _8.ConfirmGatewayTxStarted;
                toProto(message: _8.ConfirmGatewayTxStarted): Uint8Array;
                toProtoMsg(message: _8.ConfirmGatewayTxStarted): _8.ConfirmGatewayTxStartedProtoMsg;
            };
            PollMapping: {
                typeUrl: string;
                encode(message: _8.PollMapping, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.PollMapping;
                fromPartial(object: Partial<_8.PollMapping>): _8.PollMapping;
                fromAmino(object: _8.PollMappingAmino): _8.PollMapping;
                toAmino(message: _8.PollMapping): _8.PollMappingAmino;
                fromAminoMsg(object: _8.PollMappingAminoMsg): _8.PollMapping;
                fromProtoMsg(message: _8.PollMappingProtoMsg): _8.PollMapping;
                toProto(message: _8.PollMapping): Uint8Array;
                toProtoMsg(message: _8.PollMapping): _8.PollMappingProtoMsg;
            };
            ConfirmGatewayTxsStarted: {
                typeUrl: string;
                encode(message: _8.ConfirmGatewayTxsStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ConfirmGatewayTxsStarted;
                fromPartial(object: Partial<_8.ConfirmGatewayTxsStarted>): _8.ConfirmGatewayTxsStarted;
                fromAmino(object: _8.ConfirmGatewayTxsStartedAmino): _8.ConfirmGatewayTxsStarted;
                toAmino(message: _8.ConfirmGatewayTxsStarted): _8.ConfirmGatewayTxsStartedAmino;
                fromAminoMsg(object: _8.ConfirmGatewayTxsStartedAminoMsg): _8.ConfirmGatewayTxsStarted;
                fromProtoMsg(message: _8.ConfirmGatewayTxsStartedProtoMsg): _8.ConfirmGatewayTxsStarted;
                toProto(message: _8.ConfirmGatewayTxsStarted): Uint8Array;
                toProtoMsg(message: _8.ConfirmGatewayTxsStarted): _8.ConfirmGatewayTxsStartedProtoMsg;
            };
            ConfirmDepositStarted: {
                typeUrl: string;
                encode(message: _8.ConfirmDepositStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ConfirmDepositStarted;
                fromPartial(object: Partial<_8.ConfirmDepositStarted>): _8.ConfirmDepositStarted;
                fromAmino(object: _8.ConfirmDepositStartedAmino): _8.ConfirmDepositStarted;
                toAmino(message: _8.ConfirmDepositStarted): _8.ConfirmDepositStartedAmino;
                fromAminoMsg(object: _8.ConfirmDepositStartedAminoMsg): _8.ConfirmDepositStarted;
                fromProtoMsg(message: _8.ConfirmDepositStartedProtoMsg): _8.ConfirmDepositStarted;
                toProto(message: _8.ConfirmDepositStarted): Uint8Array;
                toProtoMsg(message: _8.ConfirmDepositStarted): _8.ConfirmDepositStartedProtoMsg;
            };
            ConfirmTokenStarted: {
                typeUrl: string;
                encode(message: _8.ConfirmTokenStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ConfirmTokenStarted;
                fromPartial(object: Partial<_8.ConfirmTokenStarted>): _8.ConfirmTokenStarted;
                fromAmino(object: _8.ConfirmTokenStartedAmino): _8.ConfirmTokenStarted;
                toAmino(message: _8.ConfirmTokenStarted): _8.ConfirmTokenStartedAmino;
                fromAminoMsg(object: _8.ConfirmTokenStartedAminoMsg): _8.ConfirmTokenStarted;
                fromProtoMsg(message: _8.ConfirmTokenStartedProtoMsg): _8.ConfirmTokenStarted;
                toProto(message: _8.ConfirmTokenStarted): Uint8Array;
                toProtoMsg(message: _8.ConfirmTokenStarted): _8.ConfirmTokenStartedProtoMsg;
            };
            ChainAdded: {
                typeUrl: string;
                encode(message: _8.ChainAdded, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ChainAdded;
                fromPartial(object: Partial<_8.ChainAdded>): _8.ChainAdded;
                fromAmino(object: _8.ChainAddedAmino): _8.ChainAdded;
                toAmino(message: _8.ChainAdded): _8.ChainAddedAmino;
                fromAminoMsg(object: _8.ChainAddedAminoMsg): _8.ChainAdded;
                fromProtoMsg(message: _8.ChainAddedProtoMsg): _8.ChainAdded;
                toProto(message: _8.ChainAdded): Uint8Array;
                toProtoMsg(message: _8.ChainAdded): _8.ChainAddedProtoMsg;
            };
            CommandBatchSigned: {
                typeUrl: string;
                encode(message: _8.CommandBatchSigned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.CommandBatchSigned;
                fromPartial(object: Partial<_8.CommandBatchSigned>): _8.CommandBatchSigned;
                fromAmino(object: _8.CommandBatchSignedAmino): _8.CommandBatchSigned;
                toAmino(message: _8.CommandBatchSigned): _8.CommandBatchSignedAmino;
                fromAminoMsg(object: _8.CommandBatchSignedAminoMsg): _8.CommandBatchSigned;
                fromProtoMsg(message: _8.CommandBatchSignedProtoMsg): _8.CommandBatchSigned;
                toProto(message: _8.CommandBatchSigned): Uint8Array;
                toProtoMsg(message: _8.CommandBatchSigned): _8.CommandBatchSignedProtoMsg;
            };
            CommandBatchAborted: {
                typeUrl: string;
                encode(message: _8.CommandBatchAborted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.CommandBatchAborted;
                fromPartial(object: Partial<_8.CommandBatchAborted>): _8.CommandBatchAborted;
                fromAmino(object: _8.CommandBatchAbortedAmino): _8.CommandBatchAborted;
                toAmino(message: _8.CommandBatchAborted): _8.CommandBatchAbortedAmino;
                fromAminoMsg(object: _8.CommandBatchAbortedAminoMsg): _8.CommandBatchAborted;
                fromProtoMsg(message: _8.CommandBatchAbortedProtoMsg): _8.CommandBatchAborted;
                toProto(message: _8.CommandBatchAborted): Uint8Array;
                toProtoMsg(message: _8.CommandBatchAborted): _8.CommandBatchAbortedProtoMsg;
            };
            EVMEventConfirmed: {
                typeUrl: string;
                encode(message: _8.EVMEventConfirmed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.EVMEventConfirmed;
                fromPartial(object: Partial<_8.EVMEventConfirmed>): _8.EVMEventConfirmed;
                fromAmino(object: _8.EVMEventConfirmedAmino): _8.EVMEventConfirmed;
                toAmino(message: _8.EVMEventConfirmed): _8.EVMEventConfirmedAmino;
                fromAminoMsg(object: _8.EVMEventConfirmedAminoMsg): _8.EVMEventConfirmed;
                fromProtoMsg(message: _8.EVMEventConfirmedProtoMsg): _8.EVMEventConfirmed;
                toProto(message: _8.EVMEventConfirmed): Uint8Array;
                toProtoMsg(message: _8.EVMEventConfirmed): _8.EVMEventConfirmedProtoMsg;
            };
            EVMEventCompleted: {
                typeUrl: string;
                encode(message: _8.EVMEventCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.EVMEventCompleted;
                fromPartial(object: Partial<_8.EVMEventCompleted>): _8.EVMEventCompleted;
                fromAmino(object: _8.EVMEventCompletedAmino): _8.EVMEventCompleted;
                toAmino(message: _8.EVMEventCompleted): _8.EVMEventCompletedAmino;
                fromAminoMsg(object: _8.EVMEventCompletedAminoMsg): _8.EVMEventCompleted;
                fromProtoMsg(message: _8.EVMEventCompletedProtoMsg): _8.EVMEventCompleted;
                toProto(message: _8.EVMEventCompleted): Uint8Array;
                toProtoMsg(message: _8.EVMEventCompleted): _8.EVMEventCompletedProtoMsg;
            };
            EVMEventFailed: {
                typeUrl: string;
                encode(message: _8.EVMEventFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.EVMEventFailed;
                fromPartial(object: Partial<_8.EVMEventFailed>): _8.EVMEventFailed;
                fromAmino(object: _8.EVMEventFailedAmino): _8.EVMEventFailed;
                toAmino(message: _8.EVMEventFailed): _8.EVMEventFailedAmino;
                fromAminoMsg(object: _8.EVMEventFailedAminoMsg): _8.EVMEventFailed;
                fromProtoMsg(message: _8.EVMEventFailedProtoMsg): _8.EVMEventFailed;
                toProto(message: _8.EVMEventFailed): Uint8Array;
                toProtoMsg(message: _8.EVMEventFailed): _8.EVMEventFailedProtoMsg;
            };
            EVMEventRetryFailed: {
                typeUrl: string;
                encode(message: _8.EVMEventRetryFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.EVMEventRetryFailed;
                fromPartial(object: Partial<_8.EVMEventRetryFailed>): _8.EVMEventRetryFailed;
                fromAmino(object: _8.EVMEventRetryFailedAmino): _8.EVMEventRetryFailed;
                toAmino(message: _8.EVMEventRetryFailed): _8.EVMEventRetryFailedAmino;
                fromAminoMsg(object: _8.EVMEventRetryFailedAminoMsg): _8.EVMEventRetryFailed;
                fromProtoMsg(message: _8.EVMEventRetryFailedProtoMsg): _8.EVMEventRetryFailed;
                toProto(message: _8.EVMEventRetryFailed): Uint8Array;
                toProtoMsg(message: _8.EVMEventRetryFailed): _8.EVMEventRetryFailedProtoMsg;
            };
            ContractCallApproved: {
                typeUrl: string;
                encode(message: _8.ContractCallApproved, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ContractCallApproved;
                fromPartial(object: Partial<_8.ContractCallApproved>): _8.ContractCallApproved;
                fromAmino(object: _8.ContractCallApprovedAmino): _8.ContractCallApproved;
                toAmino(message: _8.ContractCallApproved): _8.ContractCallApprovedAmino;
                fromAminoMsg(object: _8.ContractCallApprovedAminoMsg): _8.ContractCallApproved;
                fromProtoMsg(message: _8.ContractCallApprovedProtoMsg): _8.ContractCallApproved;
                toProto(message: _8.ContractCallApproved): Uint8Array;
                toProtoMsg(message: _8.ContractCallApproved): _8.ContractCallApprovedProtoMsg;
            };
            ContractCallFailed: {
                typeUrl: string;
                encode(message: _8.ContractCallFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ContractCallFailed;
                fromPartial(object: Partial<_8.ContractCallFailed>): _8.ContractCallFailed;
                fromAmino(object: _8.ContractCallFailedAmino): _8.ContractCallFailed;
                toAmino(message: _8.ContractCallFailed): _8.ContractCallFailedAmino;
                fromAminoMsg(object: _8.ContractCallFailedAminoMsg): _8.ContractCallFailed;
                fromProtoMsg(message: _8.ContractCallFailedProtoMsg): _8.ContractCallFailed;
                toProto(message: _8.ContractCallFailed): Uint8Array;
                toProtoMsg(message: _8.ContractCallFailed): _8.ContractCallFailedProtoMsg;
            };
            ContractCallWithMintApproved: {
                typeUrl: string;
                encode(message: _8.ContractCallWithMintApproved, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ContractCallWithMintApproved;
                fromPartial(object: Partial<_8.ContractCallWithMintApproved>): _8.ContractCallWithMintApproved;
                fromAmino(object: _8.ContractCallWithMintApprovedAmino): _8.ContractCallWithMintApproved;
                toAmino(message: _8.ContractCallWithMintApproved): _8.ContractCallWithMintApprovedAmino;
                fromAminoMsg(object: _8.ContractCallWithMintApprovedAminoMsg): _8.ContractCallWithMintApproved;
                fromProtoMsg(message: _8.ContractCallWithMintApprovedProtoMsg): _8.ContractCallWithMintApproved;
                toProto(message: _8.ContractCallWithMintApproved): Uint8Array;
                toProtoMsg(message: _8.ContractCallWithMintApproved): _8.ContractCallWithMintApprovedProtoMsg;
            };
            TokenSent: {
                typeUrl: string;
                encode(message: _8.TokenSent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.TokenSent;
                fromPartial(object: Partial<_8.TokenSent>): _8.TokenSent;
                fromAmino(object: _8.TokenSentAmino): _8.TokenSent;
                toAmino(message: _8.TokenSent): _8.TokenSentAmino;
                fromAminoMsg(object: _8.TokenSentAminoMsg): _8.TokenSent;
                fromProtoMsg(message: _8.TokenSentProtoMsg): _8.TokenSent;
                toProto(message: _8.TokenSent): Uint8Array;
                toProtoMsg(message: _8.TokenSent): _8.TokenSentProtoMsg;
            };
            MintCommand: {
                typeUrl: string;
                encode(message: _8.MintCommand, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MintCommand;
                fromPartial(object: Partial<_8.MintCommand>): _8.MintCommand;
                fromAmino(object: _8.MintCommandAmino): _8.MintCommand;
                toAmino(message: _8.MintCommand): _8.MintCommandAmino;
                fromAminoMsg(object: _8.MintCommandAminoMsg): _8.MintCommand;
                fromProtoMsg(message: _8.MintCommandProtoMsg): _8.MintCommand;
                toProto(message: _8.MintCommand): Uint8Array;
                toProtoMsg(message: _8.MintCommand): _8.MintCommandProtoMsg;
            };
            BurnCommand: {
                typeUrl: string;
                encode(message: _8.BurnCommand, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.BurnCommand;
                fromPartial(object: Partial<_8.BurnCommand>): _8.BurnCommand;
                fromAmino(object: _8.BurnCommandAmino): _8.BurnCommand;
                toAmino(message: _8.BurnCommand): _8.BurnCommandAmino;
                fromAminoMsg(object: _8.BurnCommandAminoMsg): _8.BurnCommand;
                fromProtoMsg(message: _8.BurnCommandProtoMsg): _8.BurnCommand;
                toProto(message: _8.BurnCommand): Uint8Array;
                toProtoMsg(message: _8.BurnCommand): _8.BurnCommandProtoMsg;
            };
        };
    }
    namespace multisig {
        namespace exported {
            const v1beta1: {
                multisigStateFromJSON(object: any): _15.MultisigState;
                multisigStateToJSON(object: _15.MultisigState): string;
                keyStateFromJSON(object: any): _15.KeyState;
                keyStateToJSON(object: _15.KeyState): string;
                MultisigState: typeof _15.MultisigState;
                MultisigStateSDKType: typeof _15.MultisigState;
                MultisigStateAmino: typeof _15.MultisigState;
                KeyState: typeof _15.KeyState;
                KeyStateSDKType: typeof _15.KeyState;
                KeyStateAmino: typeof _15.KeyState;
            };
        }
        const v1beta1: {
            Key_PubKeysEntry: {
                encode(message: _22.Key_PubKeysEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Key_PubKeysEntry;
                fromPartial(object: Partial<_22.Key_PubKeysEntry>): _22.Key_PubKeysEntry;
                fromAmino(object: _22.Key_PubKeysEntryAmino): _22.Key_PubKeysEntry;
                toAmino(message: _22.Key_PubKeysEntry): _22.Key_PubKeysEntryAmino;
                fromAminoMsg(object: _22.Key_PubKeysEntryAminoMsg): _22.Key_PubKeysEntry;
                fromProtoMsg(message: _22.Key_PubKeysEntryProtoMsg): _22.Key_PubKeysEntry;
                toProto(message: _22.Key_PubKeysEntry): Uint8Array;
            };
            Key: {
                typeUrl: string;
                encode(message: _22.Key, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Key;
                fromPartial(object: Partial<_22.Key>): _22.Key;
                fromAmino(object: _22.KeyAmino): _22.Key;
                toAmino(message: _22.Key): _22.KeyAmino;
                fromAminoMsg(object: _22.KeyAminoMsg): _22.Key;
                fromProtoMsg(message: _22.KeyProtoMsg): _22.Key;
                toProto(message: _22.Key): Uint8Array;
                toProtoMsg(message: _22.Key): _22.KeyProtoMsg;
            };
            KeygenSession_IsPubKeyReceivedEntry: {
                encode(message: _22.KeygenSession_IsPubKeyReceivedEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.KeygenSession_IsPubKeyReceivedEntry;
                fromPartial(object: Partial<_22.KeygenSession_IsPubKeyReceivedEntry>): _22.KeygenSession_IsPubKeyReceivedEntry;
                fromAmino(object: _22.KeygenSession_IsPubKeyReceivedEntryAmino): _22.KeygenSession_IsPubKeyReceivedEntry;
                toAmino(message: _22.KeygenSession_IsPubKeyReceivedEntry): _22.KeygenSession_IsPubKeyReceivedEntryAmino;
                fromAminoMsg(object: _22.KeygenSession_IsPubKeyReceivedEntryAminoMsg): _22.KeygenSession_IsPubKeyReceivedEntry;
                fromProtoMsg(message: _22.KeygenSession_IsPubKeyReceivedEntryProtoMsg): _22.KeygenSession_IsPubKeyReceivedEntry;
                toProto(message: _22.KeygenSession_IsPubKeyReceivedEntry): Uint8Array;
            };
            KeygenSession: {
                typeUrl: string;
                encode(message: _22.KeygenSession, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.KeygenSession;
                fromPartial(object: Partial<_22.KeygenSession>): _22.KeygenSession;
                fromAmino(object: _22.KeygenSessionAmino): _22.KeygenSession;
                toAmino(message: _22.KeygenSession): _22.KeygenSessionAmino;
                fromAminoMsg(object: _22.KeygenSessionAminoMsg): _22.KeygenSession;
                fromProtoMsg(message: _22.KeygenSessionProtoMsg): _22.KeygenSession;
                toProto(message: _22.KeygenSession): Uint8Array;
                toProtoMsg(message: _22.KeygenSession): _22.KeygenSessionProtoMsg;
            };
            MultiSig_SigsEntry: {
                encode(message: _22.MultiSig_SigsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MultiSig_SigsEntry;
                fromPartial(object: Partial<_22.MultiSig_SigsEntry>): _22.MultiSig_SigsEntry;
                fromAmino(object: _22.MultiSig_SigsEntryAmino): _22.MultiSig_SigsEntry;
                toAmino(message: _22.MultiSig_SigsEntry): _22.MultiSig_SigsEntryAmino;
                fromAminoMsg(object: _22.MultiSig_SigsEntryAminoMsg): _22.MultiSig_SigsEntry;
                fromProtoMsg(message: _22.MultiSig_SigsEntryProtoMsg): _22.MultiSig_SigsEntry;
                toProto(message: _22.MultiSig_SigsEntry): Uint8Array;
            };
            MultiSig: {
                typeUrl: string;
                encode(message: _22.MultiSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MultiSig;
                fromPartial(object: Partial<_22.MultiSig>): _22.MultiSig;
                fromAmino(object: _22.MultiSigAmino): _22.MultiSig;
                toAmino(message: _22.MultiSig): _22.MultiSigAmino;
                fromAminoMsg(object: _22.MultiSigAminoMsg): _22.MultiSig;
                fromProtoMsg(message: _22.MultiSigProtoMsg): _22.MultiSig;
                toProto(message: _22.MultiSig): Uint8Array;
                toProtoMsg(message: _22.MultiSig): _22.MultiSigProtoMsg;
            };
            SigningSession: {
                typeUrl: string;
                encode(message: _22.SigningSession, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.SigningSession;
                fromPartial(object: Partial<_22.SigningSession>): _22.SigningSession;
                fromAmino(object: _22.SigningSessionAmino): _22.SigningSession;
                toAmino(message: _22.SigningSession): _22.SigningSessionAmino;
                fromAminoMsg(object: _22.SigningSessionAminoMsg): _22.SigningSession;
                fromProtoMsg(message: _22.SigningSessionProtoMsg): _22.SigningSession;
                toProto(message: _22.SigningSession): Uint8Array;
                toProtoMsg(message: _22.SigningSession): _22.SigningSessionProtoMsg;
            };
            KeyEpoch: {
                typeUrl: string;
                encode(message: _22.KeyEpoch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.KeyEpoch;
                fromPartial(object: Partial<_22.KeyEpoch>): _22.KeyEpoch;
                fromAmino(object: _22.KeyEpochAmino): _22.KeyEpoch;
                toAmino(message: _22.KeyEpoch): _22.KeyEpochAmino;
                fromAminoMsg(object: _22.KeyEpochAminoMsg): _22.KeyEpoch;
                fromProtoMsg(message: _22.KeyEpochProtoMsg): _22.KeyEpoch;
                toProto(message: _22.KeyEpoch): Uint8Array;
                toProtoMsg(message: _22.KeyEpoch): _22.KeyEpochProtoMsg;
            };
            Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            StartKeygenRequest: {
                typeUrl: string;
                encode(message: _21.StartKeygenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.StartKeygenRequest;
                fromPartial(object: Partial<_21.StartKeygenRequest>): _21.StartKeygenRequest;
                fromAmino(object: _21.StartKeygenRequestAmino): _21.StartKeygenRequest;
                toAmino(message: _21.StartKeygenRequest): _21.StartKeygenRequestAmino;
                fromAminoMsg(object: _21.StartKeygenRequestAminoMsg): _21.StartKeygenRequest;
                fromProtoMsg(message: _21.StartKeygenRequestProtoMsg): _21.StartKeygenRequest;
                toProto(message: _21.StartKeygenRequest): Uint8Array;
                toProtoMsg(message: _21.StartKeygenRequest): _21.StartKeygenRequestProtoMsg;
            };
            StartKeygenResponse: {
                typeUrl: string;
                encode(_: _21.StartKeygenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.StartKeygenResponse;
                fromPartial(_: Partial<_21.StartKeygenResponse>): _21.StartKeygenResponse;
                fromAmino(_: _21.StartKeygenResponseAmino): _21.StartKeygenResponse;
                toAmino(_: _21.StartKeygenResponse): _21.StartKeygenResponseAmino;
                fromAminoMsg(object: _21.StartKeygenResponseAminoMsg): _21.StartKeygenResponse;
                fromProtoMsg(message: _21.StartKeygenResponseProtoMsg): _21.StartKeygenResponse;
                toProto(message: _21.StartKeygenResponse): Uint8Array;
                toProtoMsg(message: _21.StartKeygenResponse): _21.StartKeygenResponseProtoMsg;
            };
            SubmitPubKeyRequest: {
                typeUrl: string;
                encode(message: _21.SubmitPubKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.SubmitPubKeyRequest;
                fromPartial(object: Partial<_21.SubmitPubKeyRequest>): _21.SubmitPubKeyRequest;
                fromAmino(object: _21.SubmitPubKeyRequestAmino): _21.SubmitPubKeyRequest;
                toAmino(message: _21.SubmitPubKeyRequest): _21.SubmitPubKeyRequestAmino;
                fromAminoMsg(object: _21.SubmitPubKeyRequestAminoMsg): _21.SubmitPubKeyRequest;
                fromProtoMsg(message: _21.SubmitPubKeyRequestProtoMsg): _21.SubmitPubKeyRequest;
                toProto(message: _21.SubmitPubKeyRequest): Uint8Array;
                toProtoMsg(message: _21.SubmitPubKeyRequest): _21.SubmitPubKeyRequestProtoMsg;
            };
            SubmitPubKeyResponse: {
                typeUrl: string;
                encode(_: _21.SubmitPubKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.SubmitPubKeyResponse;
                fromPartial(_: Partial<_21.SubmitPubKeyResponse>): _21.SubmitPubKeyResponse;
                fromAmino(_: _21.SubmitPubKeyResponseAmino): _21.SubmitPubKeyResponse;
                toAmino(_: _21.SubmitPubKeyResponse): _21.SubmitPubKeyResponseAmino;
                fromAminoMsg(object: _21.SubmitPubKeyResponseAminoMsg): _21.SubmitPubKeyResponse;
                fromProtoMsg(message: _21.SubmitPubKeyResponseProtoMsg): _21.SubmitPubKeyResponse;
                toProto(message: _21.SubmitPubKeyResponse): Uint8Array;
                toProtoMsg(message: _21.SubmitPubKeyResponse): _21.SubmitPubKeyResponseProtoMsg;
            };
            SubmitSignatureRequest: {
                typeUrl: string;
                encode(message: _21.SubmitSignatureRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.SubmitSignatureRequest;
                fromPartial(object: Partial<_21.SubmitSignatureRequest>): _21.SubmitSignatureRequest;
                fromAmino(object: _21.SubmitSignatureRequestAmino): _21.SubmitSignatureRequest;
                toAmino(message: _21.SubmitSignatureRequest): _21.SubmitSignatureRequestAmino;
                fromAminoMsg(object: _21.SubmitSignatureRequestAminoMsg): _21.SubmitSignatureRequest;
                fromProtoMsg(message: _21.SubmitSignatureRequestProtoMsg): _21.SubmitSignatureRequest;
                toProto(message: _21.SubmitSignatureRequest): Uint8Array;
                toProtoMsg(message: _21.SubmitSignatureRequest): _21.SubmitSignatureRequestProtoMsg;
            };
            SubmitSignatureResponse: {
                typeUrl: string;
                encode(_: _21.SubmitSignatureResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.SubmitSignatureResponse;
                fromPartial(_: Partial<_21.SubmitSignatureResponse>): _21.SubmitSignatureResponse;
                fromAmino(_: _21.SubmitSignatureResponseAmino): _21.SubmitSignatureResponse;
                toAmino(_: _21.SubmitSignatureResponse): _21.SubmitSignatureResponseAmino;
                fromAminoMsg(object: _21.SubmitSignatureResponseAminoMsg): _21.SubmitSignatureResponse;
                fromProtoMsg(message: _21.SubmitSignatureResponseProtoMsg): _21.SubmitSignatureResponse;
                toProto(message: _21.SubmitSignatureResponse): Uint8Array;
                toProtoMsg(message: _21.SubmitSignatureResponse): _21.SubmitSignatureResponseProtoMsg;
            };
            RotateKeyRequest: {
                typeUrl: string;
                encode(message: _21.RotateKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.RotateKeyRequest;
                fromPartial(object: Partial<_21.RotateKeyRequest>): _21.RotateKeyRequest;
                fromAmino(object: _21.RotateKeyRequestAmino): _21.RotateKeyRequest;
                toAmino(message: _21.RotateKeyRequest): _21.RotateKeyRequestAmino;
                fromAminoMsg(object: _21.RotateKeyRequestAminoMsg): _21.RotateKeyRequest;
                fromProtoMsg(message: _21.RotateKeyRequestProtoMsg): _21.RotateKeyRequest;
                toProto(message: _21.RotateKeyRequest): Uint8Array;
                toProtoMsg(message: _21.RotateKeyRequest): _21.RotateKeyRequestProtoMsg;
            };
            RotateKeyResponse: {
                typeUrl: string;
                encode(_: _21.RotateKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.RotateKeyResponse;
                fromPartial(_: Partial<_21.RotateKeyResponse>): _21.RotateKeyResponse;
                fromAmino(_: _21.RotateKeyResponseAmino): _21.RotateKeyResponse;
                toAmino(_: _21.RotateKeyResponse): _21.RotateKeyResponseAmino;
                fromAminoMsg(object: _21.RotateKeyResponseAminoMsg): _21.RotateKeyResponse;
                fromProtoMsg(message: _21.RotateKeyResponseProtoMsg): _21.RotateKeyResponse;
                toProto(message: _21.RotateKeyResponse): Uint8Array;
                toProtoMsg(message: _21.RotateKeyResponse): _21.RotateKeyResponseProtoMsg;
            };
            KeygenOptOutRequest: {
                typeUrl: string;
                encode(message: _21.KeygenOptOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.KeygenOptOutRequest;
                fromPartial(object: Partial<_21.KeygenOptOutRequest>): _21.KeygenOptOutRequest;
                fromAmino(object: _21.KeygenOptOutRequestAmino): _21.KeygenOptOutRequest;
                toAmino(message: _21.KeygenOptOutRequest): _21.KeygenOptOutRequestAmino;
                fromAminoMsg(object: _21.KeygenOptOutRequestAminoMsg): _21.KeygenOptOutRequest;
                fromProtoMsg(message: _21.KeygenOptOutRequestProtoMsg): _21.KeygenOptOutRequest;
                toProto(message: _21.KeygenOptOutRequest): Uint8Array;
                toProtoMsg(message: _21.KeygenOptOutRequest): _21.KeygenOptOutRequestProtoMsg;
            };
            KeygenOptOutResponse: {
                typeUrl: string;
                encode(_: _21.KeygenOptOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.KeygenOptOutResponse;
                fromPartial(_: Partial<_21.KeygenOptOutResponse>): _21.KeygenOptOutResponse;
                fromAmino(_: _21.KeygenOptOutResponseAmino): _21.KeygenOptOutResponse;
                toAmino(_: _21.KeygenOptOutResponse): _21.KeygenOptOutResponseAmino;
                fromAminoMsg(object: _21.KeygenOptOutResponseAminoMsg): _21.KeygenOptOutResponse;
                fromProtoMsg(message: _21.KeygenOptOutResponseProtoMsg): _21.KeygenOptOutResponse;
                toProto(message: _21.KeygenOptOutResponse): Uint8Array;
                toProtoMsg(message: _21.KeygenOptOutResponse): _21.KeygenOptOutResponseProtoMsg;
            };
            KeygenOptInRequest: {
                typeUrl: string;
                encode(message: _21.KeygenOptInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.KeygenOptInRequest;
                fromPartial(object: Partial<_21.KeygenOptInRequest>): _21.KeygenOptInRequest;
                fromAmino(object: _21.KeygenOptInRequestAmino): _21.KeygenOptInRequest;
                toAmino(message: _21.KeygenOptInRequest): _21.KeygenOptInRequestAmino;
                fromAminoMsg(object: _21.KeygenOptInRequestAminoMsg): _21.KeygenOptInRequest;
                fromProtoMsg(message: _21.KeygenOptInRequestProtoMsg): _21.KeygenOptInRequest;
                toProto(message: _21.KeygenOptInRequest): Uint8Array;
                toProtoMsg(message: _21.KeygenOptInRequest): _21.KeygenOptInRequestProtoMsg;
            };
            KeygenOptInResponse: {
                typeUrl: string;
                encode(_: _21.KeygenOptInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.KeygenOptInResponse;
                fromPartial(_: Partial<_21.KeygenOptInResponse>): _21.KeygenOptInResponse;
                fromAmino(_: _21.KeygenOptInResponseAmino): _21.KeygenOptInResponse;
                toAmino(_: _21.KeygenOptInResponse): _21.KeygenOptInResponseAmino;
                fromAminoMsg(object: _21.KeygenOptInResponseAminoMsg): _21.KeygenOptInResponse;
                fromProtoMsg(message: _21.KeygenOptInResponseProtoMsg): _21.KeygenOptInResponse;
                toProto(message: _21.KeygenOptInResponse): Uint8Array;
                toProtoMsg(message: _21.KeygenOptInResponse): _21.KeygenOptInResponseProtoMsg;
            };
            KeyIDRequest: {
                typeUrl: string;
                encode(message: _19.KeyIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.KeyIDRequest;
                fromPartial(object: Partial<_19.KeyIDRequest>): _19.KeyIDRequest;
                fromAmino(object: _19.KeyIDRequestAmino): _19.KeyIDRequest;
                toAmino(message: _19.KeyIDRequest): _19.KeyIDRequestAmino;
                fromAminoMsg(object: _19.KeyIDRequestAminoMsg): _19.KeyIDRequest;
                fromProtoMsg(message: _19.KeyIDRequestProtoMsg): _19.KeyIDRequest;
                toProto(message: _19.KeyIDRequest): Uint8Array;
                toProtoMsg(message: _19.KeyIDRequest): _19.KeyIDRequestProtoMsg;
            };
            KeyIDResponse: {
                typeUrl: string;
                encode(message: _19.KeyIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.KeyIDResponse;
                fromPartial(object: Partial<_19.KeyIDResponse>): _19.KeyIDResponse;
                fromAmino(object: _19.KeyIDResponseAmino): _19.KeyIDResponse;
                toAmino(message: _19.KeyIDResponse): _19.KeyIDResponseAmino;
                fromAminoMsg(object: _19.KeyIDResponseAminoMsg): _19.KeyIDResponse;
                fromProtoMsg(message: _19.KeyIDResponseProtoMsg): _19.KeyIDResponse;
                toProto(message: _19.KeyIDResponse): Uint8Array;
                toProtoMsg(message: _19.KeyIDResponse): _19.KeyIDResponseProtoMsg;
            };
            NextKeyIDRequest: {
                typeUrl: string;
                encode(message: _19.NextKeyIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.NextKeyIDRequest;
                fromPartial(object: Partial<_19.NextKeyIDRequest>): _19.NextKeyIDRequest;
                fromAmino(object: _19.NextKeyIDRequestAmino): _19.NextKeyIDRequest;
                toAmino(message: _19.NextKeyIDRequest): _19.NextKeyIDRequestAmino;
                fromAminoMsg(object: _19.NextKeyIDRequestAminoMsg): _19.NextKeyIDRequest;
                fromProtoMsg(message: _19.NextKeyIDRequestProtoMsg): _19.NextKeyIDRequest;
                toProto(message: _19.NextKeyIDRequest): Uint8Array;
                toProtoMsg(message: _19.NextKeyIDRequest): _19.NextKeyIDRequestProtoMsg;
            };
            NextKeyIDResponse: {
                typeUrl: string;
                encode(message: _19.NextKeyIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.NextKeyIDResponse;
                fromPartial(object: Partial<_19.NextKeyIDResponse>): _19.NextKeyIDResponse;
                fromAmino(object: _19.NextKeyIDResponseAmino): _19.NextKeyIDResponse;
                toAmino(message: _19.NextKeyIDResponse): _19.NextKeyIDResponseAmino;
                fromAminoMsg(object: _19.NextKeyIDResponseAminoMsg): _19.NextKeyIDResponse;
                fromProtoMsg(message: _19.NextKeyIDResponseProtoMsg): _19.NextKeyIDResponse;
                toProto(message: _19.NextKeyIDResponse): Uint8Array;
                toProtoMsg(message: _19.NextKeyIDResponse): _19.NextKeyIDResponseProtoMsg;
            };
            KeyRequest: {
                typeUrl: string;
                encode(message: _19.KeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.KeyRequest;
                fromPartial(object: Partial<_19.KeyRequest>): _19.KeyRequest;
                fromAmino(object: _19.KeyRequestAmino): _19.KeyRequest;
                toAmino(message: _19.KeyRequest): _19.KeyRequestAmino;
                fromAminoMsg(object: _19.KeyRequestAminoMsg): _19.KeyRequest;
                fromProtoMsg(message: _19.KeyRequestProtoMsg): _19.KeyRequest;
                toProto(message: _19.KeyRequest): Uint8Array;
                toProtoMsg(message: _19.KeyRequest): _19.KeyRequestProtoMsg;
            };
            KeygenParticipant: {
                typeUrl: string;
                encode(message: _19.KeygenParticipant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.KeygenParticipant;
                fromPartial(object: Partial<_19.KeygenParticipant>): _19.KeygenParticipant;
                fromAmino(object: _19.KeygenParticipantAmino): _19.KeygenParticipant;
                toAmino(message: _19.KeygenParticipant): _19.KeygenParticipantAmino;
                fromAminoMsg(object: _19.KeygenParticipantAminoMsg): _19.KeygenParticipant;
                fromProtoMsg(message: _19.KeygenParticipantProtoMsg): _19.KeygenParticipant;
                toProto(message: _19.KeygenParticipant): Uint8Array;
                toProtoMsg(message: _19.KeygenParticipant): _19.KeygenParticipantProtoMsg;
            };
            KeyResponse: {
                typeUrl: string;
                encode(message: _19.KeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.KeyResponse;
                fromPartial(object: Partial<_19.KeyResponse>): _19.KeyResponse;
                fromAmino(object: _19.KeyResponseAmino): _19.KeyResponse;
                toAmino(message: _19.KeyResponse): _19.KeyResponseAmino;
                fromAminoMsg(object: _19.KeyResponseAminoMsg): _19.KeyResponse;
                fromProtoMsg(message: _19.KeyResponseProtoMsg): _19.KeyResponse;
                toProto(message: _19.KeyResponse): Uint8Array;
                toProtoMsg(message: _19.KeyResponse): _19.KeyResponseProtoMsg;
            };
            KeygenSessionRequest: {
                typeUrl: string;
                encode(message: _19.KeygenSessionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.KeygenSessionRequest;
                fromPartial(object: Partial<_19.KeygenSessionRequest>): _19.KeygenSessionRequest;
                fromAmino(object: _19.KeygenSessionRequestAmino): _19.KeygenSessionRequest;
                toAmino(message: _19.KeygenSessionRequest): _19.KeygenSessionRequestAmino;
                fromAminoMsg(object: _19.KeygenSessionRequestAminoMsg): _19.KeygenSessionRequest;
                fromProtoMsg(message: _19.KeygenSessionRequestProtoMsg): _19.KeygenSessionRequest;
                toProto(message: _19.KeygenSessionRequest): Uint8Array;
                toProtoMsg(message: _19.KeygenSessionRequest): _19.KeygenSessionRequestProtoMsg;
            };
            KeygenSessionResponse: {
                typeUrl: string;
                encode(message: _19.KeygenSessionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.KeygenSessionResponse;
                fromPartial(object: Partial<_19.KeygenSessionResponse>): _19.KeygenSessionResponse;
                fromAmino(object: _19.KeygenSessionResponseAmino): _19.KeygenSessionResponse;
                toAmino(message: _19.KeygenSessionResponse): _19.KeygenSessionResponseAmino;
                fromAminoMsg(object: _19.KeygenSessionResponseAminoMsg): _19.KeygenSessionResponse;
                fromProtoMsg(message: _19.KeygenSessionResponseProtoMsg): _19.KeygenSessionResponse;
                toProto(message: _19.KeygenSessionResponse): Uint8Array;
                toProtoMsg(message: _19.KeygenSessionResponse): _19.KeygenSessionResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _19.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.ParamsRequest;
                fromPartial(_: Partial<_19.ParamsRequest>): _19.ParamsRequest;
                fromAmino(_: _19.ParamsRequestAmino): _19.ParamsRequest;
                toAmino(_: _19.ParamsRequest): _19.ParamsRequestAmino;
                fromAminoMsg(object: _19.ParamsRequestAminoMsg): _19.ParamsRequest;
                fromProtoMsg(message: _19.ParamsRequestProtoMsg): _19.ParamsRequest;
                toProto(message: _19.ParamsRequest): Uint8Array;
                toProtoMsg(message: _19.ParamsRequest): _19.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _19.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.ParamsResponse;
                fromPartial(object: Partial<_19.ParamsResponse>): _19.ParamsResponse;
                fromAmino(object: _19.ParamsResponseAmino): _19.ParamsResponse;
                toAmino(message: _19.ParamsResponse): _19.ParamsResponseAmino;
                fromAminoMsg(object: _19.ParamsResponseAminoMsg): _19.ParamsResponse;
                fromProtoMsg(message: _19.ParamsResponseProtoMsg): _19.ParamsResponse;
                toProto(message: _19.ParamsResponse): Uint8Array;
                toProtoMsg(message: _19.ParamsResponse): _19.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _18.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Params;
                fromPartial(object: Partial<_18.Params>): _18.Params;
                fromAmino(object: _18.ParamsAmino): _18.Params;
                toAmino(message: _18.Params): _18.ParamsAmino;
                fromAminoMsg(object: _18.ParamsAminoMsg): _18.Params;
                fromProtoMsg(message: _18.ParamsProtoMsg): _18.Params;
                toProto(message: _18.Params): Uint8Array;
                toProtoMsg(message: _18.Params): _18.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _17.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.GenesisState;
                fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
                fromAmino(object: _17.GenesisStateAmino): _17.GenesisState;
                toAmino(message: _17.GenesisState): _17.GenesisStateAmino;
                fromAminoMsg(object: _17.GenesisStateAminoMsg): _17.GenesisState;
                fromProtoMsg(message: _17.GenesisStateProtoMsg): _17.GenesisState;
                toProto(message: _17.GenesisState): Uint8Array;
                toProtoMsg(message: _17.GenesisState): _17.GenesisStateProtoMsg;
            };
            KeygenStarted: {
                typeUrl: string;
                encode(message: _16.KeygenStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.KeygenStarted;
                fromPartial(object: Partial<_16.KeygenStarted>): _16.KeygenStarted;
                fromAmino(object: _16.KeygenStartedAmino): _16.KeygenStarted;
                toAmino(message: _16.KeygenStarted): _16.KeygenStartedAmino;
                fromAminoMsg(object: _16.KeygenStartedAminoMsg): _16.KeygenStarted;
                fromProtoMsg(message: _16.KeygenStartedProtoMsg): _16.KeygenStarted;
                toProto(message: _16.KeygenStarted): Uint8Array;
                toProtoMsg(message: _16.KeygenStarted): _16.KeygenStartedProtoMsg;
            };
            KeygenCompleted: {
                typeUrl: string;
                encode(message: _16.KeygenCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.KeygenCompleted;
                fromPartial(object: Partial<_16.KeygenCompleted>): _16.KeygenCompleted;
                fromAmino(object: _16.KeygenCompletedAmino): _16.KeygenCompleted;
                toAmino(message: _16.KeygenCompleted): _16.KeygenCompletedAmino;
                fromAminoMsg(object: _16.KeygenCompletedAminoMsg): _16.KeygenCompleted;
                fromProtoMsg(message: _16.KeygenCompletedProtoMsg): _16.KeygenCompleted;
                toProto(message: _16.KeygenCompleted): Uint8Array;
                toProtoMsg(message: _16.KeygenCompleted): _16.KeygenCompletedProtoMsg;
            };
            KeygenExpired: {
                typeUrl: string;
                encode(message: _16.KeygenExpired, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.KeygenExpired;
                fromPartial(object: Partial<_16.KeygenExpired>): _16.KeygenExpired;
                fromAmino(object: _16.KeygenExpiredAmino): _16.KeygenExpired;
                toAmino(message: _16.KeygenExpired): _16.KeygenExpiredAmino;
                fromAminoMsg(object: _16.KeygenExpiredAminoMsg): _16.KeygenExpired;
                fromProtoMsg(message: _16.KeygenExpiredProtoMsg): _16.KeygenExpired;
                toProto(message: _16.KeygenExpired): Uint8Array;
                toProtoMsg(message: _16.KeygenExpired): _16.KeygenExpiredProtoMsg;
            };
            PubKeySubmitted: {
                typeUrl: string;
                encode(message: _16.PubKeySubmitted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.PubKeySubmitted;
                fromPartial(object: Partial<_16.PubKeySubmitted>): _16.PubKeySubmitted;
                fromAmino(object: _16.PubKeySubmittedAmino): _16.PubKeySubmitted;
                toAmino(message: _16.PubKeySubmitted): _16.PubKeySubmittedAmino;
                fromAminoMsg(object: _16.PubKeySubmittedAminoMsg): _16.PubKeySubmitted;
                fromProtoMsg(message: _16.PubKeySubmittedProtoMsg): _16.PubKeySubmitted;
                toProto(message: _16.PubKeySubmitted): Uint8Array;
                toProtoMsg(message: _16.PubKeySubmitted): _16.PubKeySubmittedProtoMsg;
            };
            SigningStarted_PubKeysEntry: {
                encode(message: _16.SigningStarted_PubKeysEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SigningStarted_PubKeysEntry;
                fromPartial(object: Partial<_16.SigningStarted_PubKeysEntry>): _16.SigningStarted_PubKeysEntry;
                fromAmino(object: _16.SigningStarted_PubKeysEntryAmino): _16.SigningStarted_PubKeysEntry;
                toAmino(message: _16.SigningStarted_PubKeysEntry): _16.SigningStarted_PubKeysEntryAmino;
                fromAminoMsg(object: _16.SigningStarted_PubKeysEntryAminoMsg): _16.SigningStarted_PubKeysEntry;
                fromProtoMsg(message: _16.SigningStarted_PubKeysEntryProtoMsg): _16.SigningStarted_PubKeysEntry;
                toProto(message: _16.SigningStarted_PubKeysEntry): Uint8Array;
            };
            SigningStarted: {
                typeUrl: string;
                encode(message: _16.SigningStarted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SigningStarted;
                fromPartial(object: Partial<_16.SigningStarted>): _16.SigningStarted;
                fromAmino(object: _16.SigningStartedAmino): _16.SigningStarted;
                toAmino(message: _16.SigningStarted): _16.SigningStartedAmino;
                fromAminoMsg(object: _16.SigningStartedAminoMsg): _16.SigningStarted;
                fromProtoMsg(message: _16.SigningStartedProtoMsg): _16.SigningStarted;
                toProto(message: _16.SigningStarted): Uint8Array;
                toProtoMsg(message: _16.SigningStarted): _16.SigningStartedProtoMsg;
            };
            SigningCompleted: {
                typeUrl: string;
                encode(message: _16.SigningCompleted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SigningCompleted;
                fromPartial(object: Partial<_16.SigningCompleted>): _16.SigningCompleted;
                fromAmino(object: _16.SigningCompletedAmino): _16.SigningCompleted;
                toAmino(message: _16.SigningCompleted): _16.SigningCompletedAmino;
                fromAminoMsg(object: _16.SigningCompletedAminoMsg): _16.SigningCompleted;
                fromProtoMsg(message: _16.SigningCompletedProtoMsg): _16.SigningCompleted;
                toProto(message: _16.SigningCompleted): Uint8Array;
                toProtoMsg(message: _16.SigningCompleted): _16.SigningCompletedProtoMsg;
            };
            SigningExpired: {
                typeUrl: string;
                encode(message: _16.SigningExpired, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SigningExpired;
                fromPartial(object: Partial<_16.SigningExpired>): _16.SigningExpired;
                fromAmino(object: _16.SigningExpiredAmino): _16.SigningExpired;
                toAmino(message: _16.SigningExpired): _16.SigningExpiredAmino;
                fromAminoMsg(object: _16.SigningExpiredAminoMsg): _16.SigningExpired;
                fromProtoMsg(message: _16.SigningExpiredProtoMsg): _16.SigningExpired;
                toProto(message: _16.SigningExpired): Uint8Array;
                toProtoMsg(message: _16.SigningExpired): _16.SigningExpiredProtoMsg;
            };
            SignatureSubmitted: {
                typeUrl: string;
                encode(message: _16.SignatureSubmitted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SignatureSubmitted;
                fromPartial(object: Partial<_16.SignatureSubmitted>): _16.SignatureSubmitted;
                fromAmino(object: _16.SignatureSubmittedAmino): _16.SignatureSubmitted;
                toAmino(message: _16.SignatureSubmitted): _16.SignatureSubmittedAmino;
                fromAminoMsg(object: _16.SignatureSubmittedAminoMsg): _16.SignatureSubmitted;
                fromProtoMsg(message: _16.SignatureSubmittedProtoMsg): _16.SignatureSubmitted;
                toProto(message: _16.SignatureSubmitted): Uint8Array;
                toProtoMsg(message: _16.SignatureSubmitted): _16.SignatureSubmittedProtoMsg;
            };
            KeyAssigned: {
                typeUrl: string;
                encode(message: _16.KeyAssigned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.KeyAssigned;
                fromPartial(object: Partial<_16.KeyAssigned>): _16.KeyAssigned;
                fromAmino(object: _16.KeyAssignedAmino): _16.KeyAssigned;
                toAmino(message: _16.KeyAssigned): _16.KeyAssignedAmino;
                fromAminoMsg(object: _16.KeyAssignedAminoMsg): _16.KeyAssigned;
                fromProtoMsg(message: _16.KeyAssignedProtoMsg): _16.KeyAssigned;
                toProto(message: _16.KeyAssigned): Uint8Array;
                toProtoMsg(message: _16.KeyAssigned): _16.KeyAssignedProtoMsg;
            };
            KeyRotated: {
                typeUrl: string;
                encode(message: _16.KeyRotated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.KeyRotated;
                fromPartial(object: Partial<_16.KeyRotated>): _16.KeyRotated;
                fromAmino(object: _16.KeyRotatedAmino): _16.KeyRotated;
                toAmino(message: _16.KeyRotated): _16.KeyRotatedAmino;
                fromAminoMsg(object: _16.KeyRotatedAminoMsg): _16.KeyRotated;
                fromProtoMsg(message: _16.KeyRotatedProtoMsg): _16.KeyRotated;
                toProto(message: _16.KeyRotated): Uint8Array;
                toProtoMsg(message: _16.KeyRotated): _16.KeyRotatedProtoMsg;
            };
            KeygenOptOut: {
                typeUrl: string;
                encode(message: _16.KeygenOptOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.KeygenOptOut;
                fromPartial(object: Partial<_16.KeygenOptOut>): _16.KeygenOptOut;
                fromAmino(object: _16.KeygenOptOutAmino): _16.KeygenOptOut;
                toAmino(message: _16.KeygenOptOut): _16.KeygenOptOutAmino;
                fromAminoMsg(object: _16.KeygenOptOutAminoMsg): _16.KeygenOptOut;
                fromProtoMsg(message: _16.KeygenOptOutProtoMsg): _16.KeygenOptOut;
                toProto(message: _16.KeygenOptOut): Uint8Array;
                toProtoMsg(message: _16.KeygenOptOut): _16.KeygenOptOutProtoMsg;
            };
            KeygenOptIn: {
                typeUrl: string;
                encode(message: _16.KeygenOptIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.KeygenOptIn;
                fromPartial(object: Partial<_16.KeygenOptIn>): _16.KeygenOptIn;
                fromAmino(object: _16.KeygenOptInAmino): _16.KeygenOptIn;
                toAmino(message: _16.KeygenOptIn): _16.KeygenOptInAmino;
                fromAminoMsg(object: _16.KeygenOptInAminoMsg): _16.KeygenOptIn;
                fromProtoMsg(message: _16.KeygenOptInProtoMsg): _16.KeygenOptIn;
                toProto(message: _16.KeygenOptIn): Uint8Array;
                toProtoMsg(message: _16.KeygenOptIn): _16.KeygenOptInProtoMsg;
            };
        };
    }
    namespace nexus {
        namespace exported {
            const v1beta1: {
                transferStateFromJSON(object: any): _23.TransferState;
                transferStateToJSON(object: _23.TransferState): string;
                transferDirectionFromJSON(object: any): _23.TransferDirection;
                transferDirectionToJSON(object: _23.TransferDirection): string;
                generalMessage_StatusFromJSON(object: any): _23.GeneralMessage_Status;
                generalMessage_StatusToJSON(object: _23.GeneralMessage_Status): string;
                TransferState: typeof _23.TransferState;
                TransferStateSDKType: typeof _23.TransferState;
                TransferStateAmino: typeof _23.TransferState;
                TransferDirection: typeof _23.TransferDirection;
                TransferDirectionSDKType: typeof _23.TransferDirection;
                TransferDirectionAmino: typeof _23.TransferDirection;
                GeneralMessage_Status: typeof _23.GeneralMessage_Status;
                GeneralMessage_StatusSDKType: typeof _23.GeneralMessage_Status;
                GeneralMessage_StatusAmino: typeof _23.GeneralMessage_Status;
                Chain: {
                    typeUrl: string;
                    encode(message: _23.Chain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.Chain;
                    fromPartial(object: Partial<_23.Chain>): _23.Chain;
                    fromAmino(object: _23.ChainAmino): _23.Chain;
                    toAmino(message: _23.Chain): _23.ChainAmino;
                    fromAminoMsg(object: _23.ChainAminoMsg): _23.Chain;
                    fromProtoMsg(message: _23.ChainProtoMsg): _23.Chain;
                    toProto(message: _23.Chain): Uint8Array;
                    toProtoMsg(message: _23.Chain): _23.ChainProtoMsg;
                };
                CrossChainAddress: {
                    typeUrl: string;
                    encode(message: _23.CrossChainAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.CrossChainAddress;
                    fromPartial(object: Partial<_23.CrossChainAddress>): _23.CrossChainAddress;
                    fromAmino(object: _23.CrossChainAddressAmino): _23.CrossChainAddress;
                    toAmino(message: _23.CrossChainAddress): _23.CrossChainAddressAmino;
                    fromAminoMsg(object: _23.CrossChainAddressAminoMsg): _23.CrossChainAddress;
                    fromProtoMsg(message: _23.CrossChainAddressProtoMsg): _23.CrossChainAddress;
                    toProto(message: _23.CrossChainAddress): Uint8Array;
                    toProtoMsg(message: _23.CrossChainAddress): _23.CrossChainAddressProtoMsg;
                };
                CrossChainTransfer: {
                    typeUrl: string;
                    encode(message: _23.CrossChainTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.CrossChainTransfer;
                    fromPartial(object: Partial<_23.CrossChainTransfer>): _23.CrossChainTransfer;
                    fromAmino(object: _23.CrossChainTransferAmino): _23.CrossChainTransfer;
                    toAmino(message: _23.CrossChainTransfer): _23.CrossChainTransferAmino;
                    fromAminoMsg(object: _23.CrossChainTransferAminoMsg): _23.CrossChainTransfer;
                    fromProtoMsg(message: _23.CrossChainTransferProtoMsg): _23.CrossChainTransfer;
                    toProto(message: _23.CrossChainTransfer): Uint8Array;
                    toProtoMsg(message: _23.CrossChainTransfer): _23.CrossChainTransferProtoMsg;
                };
                TransferFee: {
                    typeUrl: string;
                    encode(message: _23.TransferFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.TransferFee;
                    fromPartial(object: Partial<_23.TransferFee>): _23.TransferFee;
                    fromAmino(object: _23.TransferFeeAmino): _23.TransferFee;
                    toAmino(message: _23.TransferFee): _23.TransferFeeAmino;
                    fromAminoMsg(object: _23.TransferFeeAminoMsg): _23.TransferFee;
                    fromProtoMsg(message: _23.TransferFeeProtoMsg): _23.TransferFee;
                    toProto(message: _23.TransferFee): Uint8Array;
                    toProtoMsg(message: _23.TransferFee): _23.TransferFeeProtoMsg;
                };
                FeeInfo: {
                    typeUrl: string;
                    encode(message: _23.FeeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.FeeInfo;
                    fromPartial(object: Partial<_23.FeeInfo>): _23.FeeInfo;
                    fromAmino(object: _23.FeeInfoAmino): _23.FeeInfo;
                    toAmino(message: _23.FeeInfo): _23.FeeInfoAmino;
                    fromAminoMsg(object: _23.FeeInfoAminoMsg): _23.FeeInfo;
                    fromProtoMsg(message: _23.FeeInfoProtoMsg): _23.FeeInfo;
                    toProto(message: _23.FeeInfo): Uint8Array;
                    toProtoMsg(message: _23.FeeInfo): _23.FeeInfoProtoMsg;
                };
                Asset: {
                    typeUrl: string;
                    encode(message: _23.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.Asset;
                    fromPartial(object: Partial<_23.Asset>): _23.Asset;
                    fromAmino(object: _23.AssetAmino): _23.Asset;
                    toAmino(message: _23.Asset): _23.AssetAmino;
                    fromAminoMsg(object: _23.AssetAminoMsg): _23.Asset;
                    fromProtoMsg(message: _23.AssetProtoMsg): _23.Asset;
                    toProto(message: _23.Asset): Uint8Array;
                    toProtoMsg(message: _23.Asset): _23.AssetProtoMsg;
                };
                GeneralMessage: {
                    typeUrl: string;
                    encode(message: _23.GeneralMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.GeneralMessage;
                    fromPartial(object: Partial<_23.GeneralMessage>): _23.GeneralMessage;
                    fromAmino(object: _23.GeneralMessageAmino): _23.GeneralMessage;
                    toAmino(message: _23.GeneralMessage): _23.GeneralMessageAmino;
                    fromAminoMsg(object: _23.GeneralMessageAminoMsg): _23.GeneralMessage;
                    fromProtoMsg(message: _23.GeneralMessageProtoMsg): _23.GeneralMessage;
                    toProto(message: _23.GeneralMessage): Uint8Array;
                    toProtoMsg(message: _23.GeneralMessage): _23.GeneralMessageProtoMsg;
                };
                WasmMessage: {
                    typeUrl: string;
                    encode(message: _23.WasmMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.WasmMessage;
                    fromPartial(object: Partial<_23.WasmMessage>): _23.WasmMessage;
                    fromAmino(object: _23.WasmMessageAmino): _23.WasmMessage;
                    toAmino(message: _23.WasmMessage): _23.WasmMessageAmino;
                    fromAminoMsg(object: _23.WasmMessageAminoMsg): _23.WasmMessage;
                    fromProtoMsg(message: _23.WasmMessageProtoMsg): _23.WasmMessage;
                    toProto(message: _23.WasmMessage): Uint8Array;
                    toProtoMsg(message: _23.WasmMessage): _23.WasmMessageProtoMsg;
                };
            };
        }
        const v1beta1: {
            MaintainerState: {
                typeUrl: string;
                encode(message: _30.MaintainerState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MaintainerState;
                fromPartial(object: Partial<_30.MaintainerState>): _30.MaintainerState;
                fromAmino(object: _30.MaintainerStateAmino): _30.MaintainerState;
                toAmino(message: _30.MaintainerState): _30.MaintainerStateAmino;
                fromAminoMsg(object: _30.MaintainerStateAminoMsg): _30.MaintainerState;
                fromProtoMsg(message: _30.MaintainerStateProtoMsg): _30.MaintainerState;
                toProto(message: _30.MaintainerState): Uint8Array;
                toProtoMsg(message: _30.MaintainerState): _30.MaintainerStateProtoMsg;
            };
            ChainState: {
                typeUrl: string;
                encode(message: _30.ChainState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.ChainState;
                fromPartial(object: Partial<_30.ChainState>): _30.ChainState;
                fromAmino(object: _30.ChainStateAmino): _30.ChainState;
                toAmino(message: _30.ChainState): _30.ChainStateAmino;
                fromAminoMsg(object: _30.ChainStateAminoMsg): _30.ChainState;
                fromProtoMsg(message: _30.ChainStateProtoMsg): _30.ChainState;
                toProto(message: _30.ChainState): Uint8Array;
                toProtoMsg(message: _30.ChainState): _30.ChainStateProtoMsg;
            };
            LinkedAddresses: {
                typeUrl: string;
                encode(message: _30.LinkedAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.LinkedAddresses;
                fromPartial(object: Partial<_30.LinkedAddresses>): _30.LinkedAddresses;
                fromAmino(object: _30.LinkedAddressesAmino): _30.LinkedAddresses;
                toAmino(message: _30.LinkedAddresses): _30.LinkedAddressesAmino;
                fromAminoMsg(object: _30.LinkedAddressesAminoMsg): _30.LinkedAddresses;
                fromProtoMsg(message: _30.LinkedAddressesProtoMsg): _30.LinkedAddresses;
                toProto(message: _30.LinkedAddresses): Uint8Array;
                toProtoMsg(message: _30.LinkedAddresses): _30.LinkedAddressesProtoMsg;
            };
            RateLimit: {
                typeUrl: string;
                encode(message: _30.RateLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.RateLimit;
                fromPartial(object: Partial<_30.RateLimit>): _30.RateLimit;
                fromAmino(object: _30.RateLimitAmino): _30.RateLimit;
                toAmino(message: _30.RateLimit): _30.RateLimitAmino;
                fromAminoMsg(object: _30.RateLimitAminoMsg): _30.RateLimit;
                fromProtoMsg(message: _30.RateLimitProtoMsg): _30.RateLimit;
                toProto(message: _30.RateLimit): Uint8Array;
                toProtoMsg(message: _30.RateLimit): _30.RateLimitProtoMsg;
            };
            TransferEpoch: {
                typeUrl: string;
                encode(message: _30.TransferEpoch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.TransferEpoch;
                fromPartial(object: Partial<_30.TransferEpoch>): _30.TransferEpoch;
                fromAmino(object: _30.TransferEpochAmino): _30.TransferEpoch;
                toAmino(message: _30.TransferEpoch): _30.TransferEpochAmino;
                fromAminoMsg(object: _30.TransferEpochAminoMsg): _30.TransferEpoch;
                fromProtoMsg(message: _30.TransferEpochProtoMsg): _30.TransferEpoch;
                toProto(message: _30.TransferEpoch): Uint8Array;
                toProtoMsg(message: _30.TransferEpoch): _30.TransferEpochProtoMsg;
            };
            RegisterChainMaintainerRequest: {
                typeUrl: string;
                encode(message: _29.RegisterChainMaintainerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.RegisterChainMaintainerRequest;
                fromPartial(object: Partial<_29.RegisterChainMaintainerRequest>): _29.RegisterChainMaintainerRequest;
                fromAmino(object: _29.RegisterChainMaintainerRequestAmino): _29.RegisterChainMaintainerRequest;
                toAmino(message: _29.RegisterChainMaintainerRequest): _29.RegisterChainMaintainerRequestAmino;
                fromAminoMsg(object: _29.RegisterChainMaintainerRequestAminoMsg): _29.RegisterChainMaintainerRequest;
                fromProtoMsg(message: _29.RegisterChainMaintainerRequestProtoMsg): _29.RegisterChainMaintainerRequest;
                toProto(message: _29.RegisterChainMaintainerRequest): Uint8Array;
                toProtoMsg(message: _29.RegisterChainMaintainerRequest): _29.RegisterChainMaintainerRequestProtoMsg;
            };
            RegisterChainMaintainerResponse: {
                typeUrl: string;
                encode(_: _29.RegisterChainMaintainerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.RegisterChainMaintainerResponse;
                fromPartial(_: Partial<_29.RegisterChainMaintainerResponse>): _29.RegisterChainMaintainerResponse;
                fromAmino(_: _29.RegisterChainMaintainerResponseAmino): _29.RegisterChainMaintainerResponse;
                toAmino(_: _29.RegisterChainMaintainerResponse): _29.RegisterChainMaintainerResponseAmino;
                fromAminoMsg(object: _29.RegisterChainMaintainerResponseAminoMsg): _29.RegisterChainMaintainerResponse;
                fromProtoMsg(message: _29.RegisterChainMaintainerResponseProtoMsg): _29.RegisterChainMaintainerResponse;
                toProto(message: _29.RegisterChainMaintainerResponse): Uint8Array;
                toProtoMsg(message: _29.RegisterChainMaintainerResponse): _29.RegisterChainMaintainerResponseProtoMsg;
            };
            DeregisterChainMaintainerRequest: {
                typeUrl: string;
                encode(message: _29.DeregisterChainMaintainerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.DeregisterChainMaintainerRequest;
                fromPartial(object: Partial<_29.DeregisterChainMaintainerRequest>): _29.DeregisterChainMaintainerRequest;
                fromAmino(object: _29.DeregisterChainMaintainerRequestAmino): _29.DeregisterChainMaintainerRequest;
                toAmino(message: _29.DeregisterChainMaintainerRequest): _29.DeregisterChainMaintainerRequestAmino;
                fromAminoMsg(object: _29.DeregisterChainMaintainerRequestAminoMsg): _29.DeregisterChainMaintainerRequest;
                fromProtoMsg(message: _29.DeregisterChainMaintainerRequestProtoMsg): _29.DeregisterChainMaintainerRequest;
                toProto(message: _29.DeregisterChainMaintainerRequest): Uint8Array;
                toProtoMsg(message: _29.DeregisterChainMaintainerRequest): _29.DeregisterChainMaintainerRequestProtoMsg;
            };
            DeregisterChainMaintainerResponse: {
                typeUrl: string;
                encode(_: _29.DeregisterChainMaintainerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.DeregisterChainMaintainerResponse;
                fromPartial(_: Partial<_29.DeregisterChainMaintainerResponse>): _29.DeregisterChainMaintainerResponse;
                fromAmino(_: _29.DeregisterChainMaintainerResponseAmino): _29.DeregisterChainMaintainerResponse;
                toAmino(_: _29.DeregisterChainMaintainerResponse): _29.DeregisterChainMaintainerResponseAmino;
                fromAminoMsg(object: _29.DeregisterChainMaintainerResponseAminoMsg): _29.DeregisterChainMaintainerResponse;
                fromProtoMsg(message: _29.DeregisterChainMaintainerResponseProtoMsg): _29.DeregisterChainMaintainerResponse;
                toProto(message: _29.DeregisterChainMaintainerResponse): Uint8Array;
                toProtoMsg(message: _29.DeregisterChainMaintainerResponse): _29.DeregisterChainMaintainerResponseProtoMsg;
            };
            ActivateChainRequest: {
                typeUrl: string;
                encode(message: _29.ActivateChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.ActivateChainRequest;
                fromPartial(object: Partial<_29.ActivateChainRequest>): _29.ActivateChainRequest;
                fromAmino(object: _29.ActivateChainRequestAmino): _29.ActivateChainRequest;
                toAmino(message: _29.ActivateChainRequest): _29.ActivateChainRequestAmino;
                fromAminoMsg(object: _29.ActivateChainRequestAminoMsg): _29.ActivateChainRequest;
                fromProtoMsg(message: _29.ActivateChainRequestProtoMsg): _29.ActivateChainRequest;
                toProto(message: _29.ActivateChainRequest): Uint8Array;
                toProtoMsg(message: _29.ActivateChainRequest): _29.ActivateChainRequestProtoMsg;
            };
            ActivateChainResponse: {
                typeUrl: string;
                encode(_: _29.ActivateChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.ActivateChainResponse;
                fromPartial(_: Partial<_29.ActivateChainResponse>): _29.ActivateChainResponse;
                fromAmino(_: _29.ActivateChainResponseAmino): _29.ActivateChainResponse;
                toAmino(_: _29.ActivateChainResponse): _29.ActivateChainResponseAmino;
                fromAminoMsg(object: _29.ActivateChainResponseAminoMsg): _29.ActivateChainResponse;
                fromProtoMsg(message: _29.ActivateChainResponseProtoMsg): _29.ActivateChainResponse;
                toProto(message: _29.ActivateChainResponse): Uint8Array;
                toProtoMsg(message: _29.ActivateChainResponse): _29.ActivateChainResponseProtoMsg;
            };
            DeactivateChainRequest: {
                typeUrl: string;
                encode(message: _29.DeactivateChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.DeactivateChainRequest;
                fromPartial(object: Partial<_29.DeactivateChainRequest>): _29.DeactivateChainRequest;
                fromAmino(object: _29.DeactivateChainRequestAmino): _29.DeactivateChainRequest;
                toAmino(message: _29.DeactivateChainRequest): _29.DeactivateChainRequestAmino;
                fromAminoMsg(object: _29.DeactivateChainRequestAminoMsg): _29.DeactivateChainRequest;
                fromProtoMsg(message: _29.DeactivateChainRequestProtoMsg): _29.DeactivateChainRequest;
                toProto(message: _29.DeactivateChainRequest): Uint8Array;
                toProtoMsg(message: _29.DeactivateChainRequest): _29.DeactivateChainRequestProtoMsg;
            };
            DeactivateChainResponse: {
                typeUrl: string;
                encode(_: _29.DeactivateChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.DeactivateChainResponse;
                fromPartial(_: Partial<_29.DeactivateChainResponse>): _29.DeactivateChainResponse;
                fromAmino(_: _29.DeactivateChainResponseAmino): _29.DeactivateChainResponse;
                toAmino(_: _29.DeactivateChainResponse): _29.DeactivateChainResponseAmino;
                fromAminoMsg(object: _29.DeactivateChainResponseAminoMsg): _29.DeactivateChainResponse;
                fromProtoMsg(message: _29.DeactivateChainResponseProtoMsg): _29.DeactivateChainResponse;
                toProto(message: _29.DeactivateChainResponse): Uint8Array;
                toProtoMsg(message: _29.DeactivateChainResponse): _29.DeactivateChainResponseProtoMsg;
            };
            RegisterAssetFeeRequest: {
                typeUrl: string;
                encode(message: _29.RegisterAssetFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.RegisterAssetFeeRequest;
                fromPartial(object: Partial<_29.RegisterAssetFeeRequest>): _29.RegisterAssetFeeRequest;
                fromAmino(object: _29.RegisterAssetFeeRequestAmino): _29.RegisterAssetFeeRequest;
                toAmino(message: _29.RegisterAssetFeeRequest): _29.RegisterAssetFeeRequestAmino;
                fromAminoMsg(object: _29.RegisterAssetFeeRequestAminoMsg): _29.RegisterAssetFeeRequest;
                fromProtoMsg(message: _29.RegisterAssetFeeRequestProtoMsg): _29.RegisterAssetFeeRequest;
                toProto(message: _29.RegisterAssetFeeRequest): Uint8Array;
                toProtoMsg(message: _29.RegisterAssetFeeRequest): _29.RegisterAssetFeeRequestProtoMsg;
            };
            RegisterAssetFeeResponse: {
                typeUrl: string;
                encode(_: _29.RegisterAssetFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.RegisterAssetFeeResponse;
                fromPartial(_: Partial<_29.RegisterAssetFeeResponse>): _29.RegisterAssetFeeResponse;
                fromAmino(_: _29.RegisterAssetFeeResponseAmino): _29.RegisterAssetFeeResponse;
                toAmino(_: _29.RegisterAssetFeeResponse): _29.RegisterAssetFeeResponseAmino;
                fromAminoMsg(object: _29.RegisterAssetFeeResponseAminoMsg): _29.RegisterAssetFeeResponse;
                fromProtoMsg(message: _29.RegisterAssetFeeResponseProtoMsg): _29.RegisterAssetFeeResponse;
                toProto(message: _29.RegisterAssetFeeResponse): Uint8Array;
                toProtoMsg(message: _29.RegisterAssetFeeResponse): _29.RegisterAssetFeeResponseProtoMsg;
            };
            SetTransferRateLimitRequest: {
                typeUrl: string;
                encode(message: _29.SetTransferRateLimitRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.SetTransferRateLimitRequest;
                fromPartial(object: Partial<_29.SetTransferRateLimitRequest>): _29.SetTransferRateLimitRequest;
                fromAmino(object: _29.SetTransferRateLimitRequestAmino): _29.SetTransferRateLimitRequest;
                toAmino(message: _29.SetTransferRateLimitRequest): _29.SetTransferRateLimitRequestAmino;
                fromAminoMsg(object: _29.SetTransferRateLimitRequestAminoMsg): _29.SetTransferRateLimitRequest;
                fromProtoMsg(message: _29.SetTransferRateLimitRequestProtoMsg): _29.SetTransferRateLimitRequest;
                toProto(message: _29.SetTransferRateLimitRequest): Uint8Array;
                toProtoMsg(message: _29.SetTransferRateLimitRequest): _29.SetTransferRateLimitRequestProtoMsg;
            };
            SetTransferRateLimitResponse: {
                typeUrl: string;
                encode(_: _29.SetTransferRateLimitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.SetTransferRateLimitResponse;
                fromPartial(_: Partial<_29.SetTransferRateLimitResponse>): _29.SetTransferRateLimitResponse;
                fromAmino(_: _29.SetTransferRateLimitResponseAmino): _29.SetTransferRateLimitResponse;
                toAmino(_: _29.SetTransferRateLimitResponse): _29.SetTransferRateLimitResponseAmino;
                fromAminoMsg(object: _29.SetTransferRateLimitResponseAminoMsg): _29.SetTransferRateLimitResponse;
                fromProtoMsg(message: _29.SetTransferRateLimitResponseProtoMsg): _29.SetTransferRateLimitResponse;
                toProto(message: _29.SetTransferRateLimitResponse): Uint8Array;
                toProtoMsg(message: _29.SetTransferRateLimitResponse): _29.SetTransferRateLimitResponseProtoMsg;
            };
            chainStatusFromJSON(object: any): _27.ChainStatus;
            chainStatusToJSON(object: _27.ChainStatus): string;
            ChainStatus: typeof _27.ChainStatus;
            ChainStatusSDKType: typeof _27.ChainStatus;
            ChainStatusAmino: typeof _27.ChainStatus;
            ChainMaintainersRequest: {
                typeUrl: string;
                encode(message: _27.ChainMaintainersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ChainMaintainersRequest;
                fromPartial(object: Partial<_27.ChainMaintainersRequest>): _27.ChainMaintainersRequest;
                fromAmino(object: _27.ChainMaintainersRequestAmino): _27.ChainMaintainersRequest;
                toAmino(message: _27.ChainMaintainersRequest): _27.ChainMaintainersRequestAmino;
                fromAminoMsg(object: _27.ChainMaintainersRequestAminoMsg): _27.ChainMaintainersRequest;
                fromProtoMsg(message: _27.ChainMaintainersRequestProtoMsg): _27.ChainMaintainersRequest;
                toProto(message: _27.ChainMaintainersRequest): Uint8Array;
                toProtoMsg(message: _27.ChainMaintainersRequest): _27.ChainMaintainersRequestProtoMsg;
            };
            ChainMaintainersResponse: {
                typeUrl: string;
                encode(message: _27.ChainMaintainersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ChainMaintainersResponse;
                fromPartial(object: Partial<_27.ChainMaintainersResponse>): _27.ChainMaintainersResponse;
                fromAmino(object: _27.ChainMaintainersResponseAmino): _27.ChainMaintainersResponse;
                toAmino(message: _27.ChainMaintainersResponse): _27.ChainMaintainersResponseAmino;
                fromAminoMsg(object: _27.ChainMaintainersResponseAminoMsg): _27.ChainMaintainersResponse;
                fromProtoMsg(message: _27.ChainMaintainersResponseProtoMsg): _27.ChainMaintainersResponse;
                toProto(message: _27.ChainMaintainersResponse): Uint8Array;
                toProtoMsg(message: _27.ChainMaintainersResponse): _27.ChainMaintainersResponseProtoMsg;
            };
            LatestDepositAddressRequest: {
                typeUrl: string;
                encode(message: _27.LatestDepositAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.LatestDepositAddressRequest;
                fromPartial(object: Partial<_27.LatestDepositAddressRequest>): _27.LatestDepositAddressRequest;
                fromAmino(object: _27.LatestDepositAddressRequestAmino): _27.LatestDepositAddressRequest;
                toAmino(message: _27.LatestDepositAddressRequest): _27.LatestDepositAddressRequestAmino;
                fromAminoMsg(object: _27.LatestDepositAddressRequestAminoMsg): _27.LatestDepositAddressRequest;
                fromProtoMsg(message: _27.LatestDepositAddressRequestProtoMsg): _27.LatestDepositAddressRequest;
                toProto(message: _27.LatestDepositAddressRequest): Uint8Array;
                toProtoMsg(message: _27.LatestDepositAddressRequest): _27.LatestDepositAddressRequestProtoMsg;
            };
            LatestDepositAddressResponse: {
                typeUrl: string;
                encode(message: _27.LatestDepositAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.LatestDepositAddressResponse;
                fromPartial(object: Partial<_27.LatestDepositAddressResponse>): _27.LatestDepositAddressResponse;
                fromAmino(object: _27.LatestDepositAddressResponseAmino): _27.LatestDepositAddressResponse;
                toAmino(message: _27.LatestDepositAddressResponse): _27.LatestDepositAddressResponseAmino;
                fromAminoMsg(object: _27.LatestDepositAddressResponseAminoMsg): _27.LatestDepositAddressResponse;
                fromProtoMsg(message: _27.LatestDepositAddressResponseProtoMsg): _27.LatestDepositAddressResponse;
                toProto(message: _27.LatestDepositAddressResponse): Uint8Array;
                toProtoMsg(message: _27.LatestDepositAddressResponse): _27.LatestDepositAddressResponseProtoMsg;
            };
            TransfersForChainRequest: {
                typeUrl: string;
                encode(message: _27.TransfersForChainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.TransfersForChainRequest;
                fromPartial(object: Partial<_27.TransfersForChainRequest>): _27.TransfersForChainRequest;
                fromAmino(object: _27.TransfersForChainRequestAmino): _27.TransfersForChainRequest;
                toAmino(message: _27.TransfersForChainRequest): _27.TransfersForChainRequestAmino;
                fromAminoMsg(object: _27.TransfersForChainRequestAminoMsg): _27.TransfersForChainRequest;
                fromProtoMsg(message: _27.TransfersForChainRequestProtoMsg): _27.TransfersForChainRequest;
                toProto(message: _27.TransfersForChainRequest): Uint8Array;
                toProtoMsg(message: _27.TransfersForChainRequest): _27.TransfersForChainRequestProtoMsg;
            };
            TransfersForChainResponse: {
                typeUrl: string;
                encode(message: _27.TransfersForChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.TransfersForChainResponse;
                fromPartial(object: Partial<_27.TransfersForChainResponse>): _27.TransfersForChainResponse;
                fromAmino(object: _27.TransfersForChainResponseAmino): _27.TransfersForChainResponse;
                toAmino(message: _27.TransfersForChainResponse): _27.TransfersForChainResponseAmino;
                fromAminoMsg(object: _27.TransfersForChainResponseAminoMsg): _27.TransfersForChainResponse;
                fromProtoMsg(message: _27.TransfersForChainResponseProtoMsg): _27.TransfersForChainResponse;
                toProto(message: _27.TransfersForChainResponse): Uint8Array;
                toProtoMsg(message: _27.TransfersForChainResponse): _27.TransfersForChainResponseProtoMsg;
            };
            FeeInfoRequest: {
                typeUrl: string;
                encode(message: _27.FeeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.FeeInfoRequest;
                fromPartial(object: Partial<_27.FeeInfoRequest>): _27.FeeInfoRequest;
                fromAmino(object: _27.FeeInfoRequestAmino): _27.FeeInfoRequest;
                toAmino(message: _27.FeeInfoRequest): _27.FeeInfoRequestAmino;
                fromAminoMsg(object: _27.FeeInfoRequestAminoMsg): _27.FeeInfoRequest;
                fromProtoMsg(message: _27.FeeInfoRequestProtoMsg): _27.FeeInfoRequest;
                toProto(message: _27.FeeInfoRequest): Uint8Array;
                toProtoMsg(message: _27.FeeInfoRequest): _27.FeeInfoRequestProtoMsg;
            };
            FeeInfoResponse: {
                typeUrl: string;
                encode(message: _27.FeeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.FeeInfoResponse;
                fromPartial(object: Partial<_27.FeeInfoResponse>): _27.FeeInfoResponse;
                fromAmino(object: _27.FeeInfoResponseAmino): _27.FeeInfoResponse;
                toAmino(message: _27.FeeInfoResponse): _27.FeeInfoResponseAmino;
                fromAminoMsg(object: _27.FeeInfoResponseAminoMsg): _27.FeeInfoResponse;
                fromProtoMsg(message: _27.FeeInfoResponseProtoMsg): _27.FeeInfoResponse;
                toProto(message: _27.FeeInfoResponse): Uint8Array;
                toProtoMsg(message: _27.FeeInfoResponse): _27.FeeInfoResponseProtoMsg;
            };
            TransferFeeRequest: {
                typeUrl: string;
                encode(message: _27.TransferFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.TransferFeeRequest;
                fromPartial(object: Partial<_27.TransferFeeRequest>): _27.TransferFeeRequest;
                fromAmino(object: _27.TransferFeeRequestAmino): _27.TransferFeeRequest;
                toAmino(message: _27.TransferFeeRequest): _27.TransferFeeRequestAmino;
                fromAminoMsg(object: _27.TransferFeeRequestAminoMsg): _27.TransferFeeRequest;
                fromProtoMsg(message: _27.TransferFeeRequestProtoMsg): _27.TransferFeeRequest;
                toProto(message: _27.TransferFeeRequest): Uint8Array;
                toProtoMsg(message: _27.TransferFeeRequest): _27.TransferFeeRequestProtoMsg;
            };
            TransferFeeResponse: {
                typeUrl: string;
                encode(message: _27.TransferFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.TransferFeeResponse;
                fromPartial(object: Partial<_27.TransferFeeResponse>): _27.TransferFeeResponse;
                fromAmino(object: _27.TransferFeeResponseAmino): _27.TransferFeeResponse;
                toAmino(message: _27.TransferFeeResponse): _27.TransferFeeResponseAmino;
                fromAminoMsg(object: _27.TransferFeeResponseAminoMsg): _27.TransferFeeResponse;
                fromProtoMsg(message: _27.TransferFeeResponseProtoMsg): _27.TransferFeeResponse;
                toProto(message: _27.TransferFeeResponse): Uint8Array;
                toProtoMsg(message: _27.TransferFeeResponse): _27.TransferFeeResponseProtoMsg;
            };
            ChainsRequest: {
                typeUrl: string;
                encode(message: _27.ChainsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ChainsRequest;
                fromPartial(object: Partial<_27.ChainsRequest>): _27.ChainsRequest;
                fromAmino(object: _27.ChainsRequestAmino): _27.ChainsRequest;
                toAmino(message: _27.ChainsRequest): _27.ChainsRequestAmino;
                fromAminoMsg(object: _27.ChainsRequestAminoMsg): _27.ChainsRequest;
                fromProtoMsg(message: _27.ChainsRequestProtoMsg): _27.ChainsRequest;
                toProto(message: _27.ChainsRequest): Uint8Array;
                toProtoMsg(message: _27.ChainsRequest): _27.ChainsRequestProtoMsg;
            };
            ChainsResponse: {
                typeUrl: string;
                encode(message: _27.ChainsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ChainsResponse;
                fromPartial(object: Partial<_27.ChainsResponse>): _27.ChainsResponse;
                fromAmino(object: _27.ChainsResponseAmino): _27.ChainsResponse;
                toAmino(message: _27.ChainsResponse): _27.ChainsResponseAmino;
                fromAminoMsg(object: _27.ChainsResponseAminoMsg): _27.ChainsResponse;
                fromProtoMsg(message: _27.ChainsResponseProtoMsg): _27.ChainsResponse;
                toProto(message: _27.ChainsResponse): Uint8Array;
                toProtoMsg(message: _27.ChainsResponse): _27.ChainsResponseProtoMsg;
            };
            AssetsRequest: {
                typeUrl: string;
                encode(message: _27.AssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.AssetsRequest;
                fromPartial(object: Partial<_27.AssetsRequest>): _27.AssetsRequest;
                fromAmino(object: _27.AssetsRequestAmino): _27.AssetsRequest;
                toAmino(message: _27.AssetsRequest): _27.AssetsRequestAmino;
                fromAminoMsg(object: _27.AssetsRequestAminoMsg): _27.AssetsRequest;
                fromProtoMsg(message: _27.AssetsRequestProtoMsg): _27.AssetsRequest;
                toProto(message: _27.AssetsRequest): Uint8Array;
                toProtoMsg(message: _27.AssetsRequest): _27.AssetsRequestProtoMsg;
            };
            AssetsResponse: {
                typeUrl: string;
                encode(message: _27.AssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.AssetsResponse;
                fromPartial(object: Partial<_27.AssetsResponse>): _27.AssetsResponse;
                fromAmino(object: _27.AssetsResponseAmino): _27.AssetsResponse;
                toAmino(message: _27.AssetsResponse): _27.AssetsResponseAmino;
                fromAminoMsg(object: _27.AssetsResponseAminoMsg): _27.AssetsResponse;
                fromProtoMsg(message: _27.AssetsResponseProtoMsg): _27.AssetsResponse;
                toProto(message: _27.AssetsResponse): Uint8Array;
                toProtoMsg(message: _27.AssetsResponse): _27.AssetsResponseProtoMsg;
            };
            ChainStateRequest: {
                typeUrl: string;
                encode(message: _27.ChainStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ChainStateRequest;
                fromPartial(object: Partial<_27.ChainStateRequest>): _27.ChainStateRequest;
                fromAmino(object: _27.ChainStateRequestAmino): _27.ChainStateRequest;
                toAmino(message: _27.ChainStateRequest): _27.ChainStateRequestAmino;
                fromAminoMsg(object: _27.ChainStateRequestAminoMsg): _27.ChainStateRequest;
                fromProtoMsg(message: _27.ChainStateRequestProtoMsg): _27.ChainStateRequest;
                toProto(message: _27.ChainStateRequest): Uint8Array;
                toProtoMsg(message: _27.ChainStateRequest): _27.ChainStateRequestProtoMsg;
            };
            ChainStateResponse: {
                typeUrl: string;
                encode(message: _27.ChainStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ChainStateResponse;
                fromPartial(object: Partial<_27.ChainStateResponse>): _27.ChainStateResponse;
                fromAmino(object: _27.ChainStateResponseAmino): _27.ChainStateResponse;
                toAmino(message: _27.ChainStateResponse): _27.ChainStateResponseAmino;
                fromAminoMsg(object: _27.ChainStateResponseAminoMsg): _27.ChainStateResponse;
                fromProtoMsg(message: _27.ChainStateResponseProtoMsg): _27.ChainStateResponse;
                toProto(message: _27.ChainStateResponse): Uint8Array;
                toProtoMsg(message: _27.ChainStateResponse): _27.ChainStateResponseProtoMsg;
            };
            ChainsByAssetRequest: {
                typeUrl: string;
                encode(message: _27.ChainsByAssetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ChainsByAssetRequest;
                fromPartial(object: Partial<_27.ChainsByAssetRequest>): _27.ChainsByAssetRequest;
                fromAmino(object: _27.ChainsByAssetRequestAmino): _27.ChainsByAssetRequest;
                toAmino(message: _27.ChainsByAssetRequest): _27.ChainsByAssetRequestAmino;
                fromAminoMsg(object: _27.ChainsByAssetRequestAminoMsg): _27.ChainsByAssetRequest;
                fromProtoMsg(message: _27.ChainsByAssetRequestProtoMsg): _27.ChainsByAssetRequest;
                toProto(message: _27.ChainsByAssetRequest): Uint8Array;
                toProtoMsg(message: _27.ChainsByAssetRequest): _27.ChainsByAssetRequestProtoMsg;
            };
            ChainsByAssetResponse: {
                typeUrl: string;
                encode(message: _27.ChainsByAssetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ChainsByAssetResponse;
                fromPartial(object: Partial<_27.ChainsByAssetResponse>): _27.ChainsByAssetResponse;
                fromAmino(object: _27.ChainsByAssetResponseAmino): _27.ChainsByAssetResponse;
                toAmino(message: _27.ChainsByAssetResponse): _27.ChainsByAssetResponseAmino;
                fromAminoMsg(object: _27.ChainsByAssetResponseAminoMsg): _27.ChainsByAssetResponse;
                fromProtoMsg(message: _27.ChainsByAssetResponseProtoMsg): _27.ChainsByAssetResponse;
                toProto(message: _27.ChainsByAssetResponse): Uint8Array;
                toProtoMsg(message: _27.ChainsByAssetResponse): _27.ChainsByAssetResponseProtoMsg;
            };
            RecipientAddressRequest: {
                typeUrl: string;
                encode(message: _27.RecipientAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.RecipientAddressRequest;
                fromPartial(object: Partial<_27.RecipientAddressRequest>): _27.RecipientAddressRequest;
                fromAmino(object: _27.RecipientAddressRequestAmino): _27.RecipientAddressRequest;
                toAmino(message: _27.RecipientAddressRequest): _27.RecipientAddressRequestAmino;
                fromAminoMsg(object: _27.RecipientAddressRequestAminoMsg): _27.RecipientAddressRequest;
                fromProtoMsg(message: _27.RecipientAddressRequestProtoMsg): _27.RecipientAddressRequest;
                toProto(message: _27.RecipientAddressRequest): Uint8Array;
                toProtoMsg(message: _27.RecipientAddressRequest): _27.RecipientAddressRequestProtoMsg;
            };
            RecipientAddressResponse: {
                typeUrl: string;
                encode(message: _27.RecipientAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.RecipientAddressResponse;
                fromPartial(object: Partial<_27.RecipientAddressResponse>): _27.RecipientAddressResponse;
                fromAmino(object: _27.RecipientAddressResponseAmino): _27.RecipientAddressResponse;
                toAmino(message: _27.RecipientAddressResponse): _27.RecipientAddressResponseAmino;
                fromAminoMsg(object: _27.RecipientAddressResponseAminoMsg): _27.RecipientAddressResponse;
                fromProtoMsg(message: _27.RecipientAddressResponseProtoMsg): _27.RecipientAddressResponse;
                toProto(message: _27.RecipientAddressResponse): Uint8Array;
                toProtoMsg(message: _27.RecipientAddressResponse): _27.RecipientAddressResponseProtoMsg;
            };
            TransferRateLimitRequest: {
                typeUrl: string;
                encode(message: _27.TransferRateLimitRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.TransferRateLimitRequest;
                fromPartial(object: Partial<_27.TransferRateLimitRequest>): _27.TransferRateLimitRequest;
                fromAmino(object: _27.TransferRateLimitRequestAmino): _27.TransferRateLimitRequest;
                toAmino(message: _27.TransferRateLimitRequest): _27.TransferRateLimitRequestAmino;
                fromAminoMsg(object: _27.TransferRateLimitRequestAminoMsg): _27.TransferRateLimitRequest;
                fromProtoMsg(message: _27.TransferRateLimitRequestProtoMsg): _27.TransferRateLimitRequest;
                toProto(message: _27.TransferRateLimitRequest): Uint8Array;
                toProtoMsg(message: _27.TransferRateLimitRequest): _27.TransferRateLimitRequestProtoMsg;
            };
            TransferRateLimitResponse: {
                typeUrl: string;
                encode(message: _27.TransferRateLimitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.TransferRateLimitResponse;
                fromPartial(object: Partial<_27.TransferRateLimitResponse>): _27.TransferRateLimitResponse;
                fromAmino(object: _27.TransferRateLimitResponseAmino): _27.TransferRateLimitResponse;
                toAmino(message: _27.TransferRateLimitResponse): _27.TransferRateLimitResponseAmino;
                fromAminoMsg(object: _27.TransferRateLimitResponseAminoMsg): _27.TransferRateLimitResponse;
                fromProtoMsg(message: _27.TransferRateLimitResponseProtoMsg): _27.TransferRateLimitResponse;
                toProto(message: _27.TransferRateLimitResponse): Uint8Array;
                toProtoMsg(message: _27.TransferRateLimitResponse): _27.TransferRateLimitResponseProtoMsg;
            };
            TransferRateLimit: {
                typeUrl: string;
                encode(message: _27.TransferRateLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.TransferRateLimit;
                fromPartial(object: Partial<_27.TransferRateLimit>): _27.TransferRateLimit;
                fromAmino(object: _27.TransferRateLimitAmino): _27.TransferRateLimit;
                toAmino(message: _27.TransferRateLimit): _27.TransferRateLimitAmino;
                fromAminoMsg(object: _27.TransferRateLimitAminoMsg): _27.TransferRateLimit;
                fromProtoMsg(message: _27.TransferRateLimitProtoMsg): _27.TransferRateLimit;
                toProto(message: _27.TransferRateLimit): Uint8Array;
                toProtoMsg(message: _27.TransferRateLimit): _27.TransferRateLimitProtoMsg;
            };
            MessageRequest: {
                typeUrl: string;
                encode(message: _27.MessageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MessageRequest;
                fromPartial(object: Partial<_27.MessageRequest>): _27.MessageRequest;
                fromAmino(object: _27.MessageRequestAmino): _27.MessageRequest;
                toAmino(message: _27.MessageRequest): _27.MessageRequestAmino;
                fromAminoMsg(object: _27.MessageRequestAminoMsg): _27.MessageRequest;
                fromProtoMsg(message: _27.MessageRequestProtoMsg): _27.MessageRequest;
                toProto(message: _27.MessageRequest): Uint8Array;
                toProtoMsg(message: _27.MessageRequest): _27.MessageRequestProtoMsg;
            };
            MessageResponse: {
                typeUrl: string;
                encode(message: _27.MessageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MessageResponse;
                fromPartial(object: Partial<_27.MessageResponse>): _27.MessageResponse;
                fromAmino(object: _27.MessageResponseAmino): _27.MessageResponse;
                toAmino(message: _27.MessageResponse): _27.MessageResponseAmino;
                fromAminoMsg(object: _27.MessageResponseAminoMsg): _27.MessageResponse;
                fromProtoMsg(message: _27.MessageResponseProtoMsg): _27.MessageResponse;
                toProto(message: _27.MessageResponse): Uint8Array;
                toProtoMsg(message: _27.MessageResponse): _27.MessageResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _27.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.ParamsRequest;
                fromPartial(_: Partial<_27.ParamsRequest>): _27.ParamsRequest;
                fromAmino(_: _27.ParamsRequestAmino): _27.ParamsRequest;
                toAmino(_: _27.ParamsRequest): _27.ParamsRequestAmino;
                fromAminoMsg(object: _27.ParamsRequestAminoMsg): _27.ParamsRequest;
                fromProtoMsg(message: _27.ParamsRequestProtoMsg): _27.ParamsRequest;
                toProto(message: _27.ParamsRequest): Uint8Array;
                toProtoMsg(message: _27.ParamsRequest): _27.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _27.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ParamsResponse;
                fromPartial(object: Partial<_27.ParamsResponse>): _27.ParamsResponse;
                fromAmino(object: _27.ParamsResponseAmino): _27.ParamsResponse;
                toAmino(message: _27.ParamsResponse): _27.ParamsResponseAmino;
                fromAminoMsg(object: _27.ParamsResponseAminoMsg): _27.ParamsResponse;
                fromProtoMsg(message: _27.ParamsResponseProtoMsg): _27.ParamsResponse;
                toProto(message: _27.ParamsResponse): Uint8Array;
                toProtoMsg(message: _27.ParamsResponse): _27.ParamsResponseProtoMsg;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            FeeDeducted: {
                typeUrl: string;
                encode(message: _24.FeeDeducted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.FeeDeducted;
                fromPartial(object: Partial<_24.FeeDeducted>): _24.FeeDeducted;
                fromAmino(object: _24.FeeDeductedAmino): _24.FeeDeducted;
                toAmino(message: _24.FeeDeducted): _24.FeeDeductedAmino;
                fromAminoMsg(object: _24.FeeDeductedAminoMsg): _24.FeeDeducted;
                fromProtoMsg(message: _24.FeeDeductedProtoMsg): _24.FeeDeducted;
                toProto(message: _24.FeeDeducted): Uint8Array;
                toProtoMsg(message: _24.FeeDeducted): _24.FeeDeductedProtoMsg;
            };
            InsufficientFee: {
                typeUrl: string;
                encode(message: _24.InsufficientFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.InsufficientFee;
                fromPartial(object: Partial<_24.InsufficientFee>): _24.InsufficientFee;
                fromAmino(object: _24.InsufficientFeeAmino): _24.InsufficientFee;
                toAmino(message: _24.InsufficientFee): _24.InsufficientFeeAmino;
                fromAminoMsg(object: _24.InsufficientFeeAminoMsg): _24.InsufficientFee;
                fromProtoMsg(message: _24.InsufficientFeeProtoMsg): _24.InsufficientFee;
                toProto(message: _24.InsufficientFee): Uint8Array;
                toProtoMsg(message: _24.InsufficientFee): _24.InsufficientFeeProtoMsg;
            };
            RateLimitUpdated: {
                typeUrl: string;
                encode(message: _24.RateLimitUpdated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.RateLimitUpdated;
                fromPartial(object: Partial<_24.RateLimitUpdated>): _24.RateLimitUpdated;
                fromAmino(object: _24.RateLimitUpdatedAmino): _24.RateLimitUpdated;
                toAmino(message: _24.RateLimitUpdated): _24.RateLimitUpdatedAmino;
                fromAminoMsg(object: _24.RateLimitUpdatedAminoMsg): _24.RateLimitUpdated;
                fromProtoMsg(message: _24.RateLimitUpdatedProtoMsg): _24.RateLimitUpdated;
                toProto(message: _24.RateLimitUpdated): Uint8Array;
                toProtoMsg(message: _24.RateLimitUpdated): _24.RateLimitUpdatedProtoMsg;
            };
            MessageReceived: {
                typeUrl: string;
                encode(message: _24.MessageReceived, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MessageReceived;
                fromPartial(object: Partial<_24.MessageReceived>): _24.MessageReceived;
                fromAmino(object: _24.MessageReceivedAmino): _24.MessageReceived;
                toAmino(message: _24.MessageReceived): _24.MessageReceivedAmino;
                fromAminoMsg(object: _24.MessageReceivedAminoMsg): _24.MessageReceived;
                fromProtoMsg(message: _24.MessageReceivedProtoMsg): _24.MessageReceived;
                toProto(message: _24.MessageReceived): Uint8Array;
                toProtoMsg(message: _24.MessageReceived): _24.MessageReceivedProtoMsg;
            };
            MessageProcessing: {
                typeUrl: string;
                encode(message: _24.MessageProcessing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MessageProcessing;
                fromPartial(object: Partial<_24.MessageProcessing>): _24.MessageProcessing;
                fromAmino(object: _24.MessageProcessingAmino): _24.MessageProcessing;
                toAmino(message: _24.MessageProcessing): _24.MessageProcessingAmino;
                fromAminoMsg(object: _24.MessageProcessingAminoMsg): _24.MessageProcessing;
                fromProtoMsg(message: _24.MessageProcessingProtoMsg): _24.MessageProcessing;
                toProto(message: _24.MessageProcessing): Uint8Array;
                toProtoMsg(message: _24.MessageProcessing): _24.MessageProcessingProtoMsg;
            };
            MessageExecuted: {
                typeUrl: string;
                encode(message: _24.MessageExecuted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MessageExecuted;
                fromPartial(object: Partial<_24.MessageExecuted>): _24.MessageExecuted;
                fromAmino(object: _24.MessageExecutedAmino): _24.MessageExecuted;
                toAmino(message: _24.MessageExecuted): _24.MessageExecutedAmino;
                fromAminoMsg(object: _24.MessageExecutedAminoMsg): _24.MessageExecuted;
                fromProtoMsg(message: _24.MessageExecutedProtoMsg): _24.MessageExecuted;
                toProto(message: _24.MessageExecuted): Uint8Array;
                toProtoMsg(message: _24.MessageExecuted): _24.MessageExecutedProtoMsg;
            };
            MessageFailed: {
                typeUrl: string;
                encode(message: _24.MessageFailed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MessageFailed;
                fromPartial(object: Partial<_24.MessageFailed>): _24.MessageFailed;
                fromAmino(object: _24.MessageFailedAmino): _24.MessageFailed;
                toAmino(message: _24.MessageFailed): _24.MessageFailedAmino;
                fromAminoMsg(object: _24.MessageFailedAminoMsg): _24.MessageFailed;
                fromProtoMsg(message: _24.MessageFailedProtoMsg): _24.MessageFailed;
                toProto(message: _24.MessageFailed): Uint8Array;
                toProtoMsg(message: _24.MessageFailed): _24.MessageFailedProtoMsg;
            };
            WasmMessageRouted: {
                typeUrl: string;
                encode(message: _24.WasmMessageRouted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.WasmMessageRouted;
                fromPartial(object: Partial<_24.WasmMessageRouted>): _24.WasmMessageRouted;
                fromAmino(object: _24.WasmMessageRoutedAmino): _24.WasmMessageRouted;
                toAmino(message: _24.WasmMessageRouted): _24.WasmMessageRoutedAmino;
                fromAminoMsg(object: _24.WasmMessageRoutedAminoMsg): _24.WasmMessageRouted;
                fromProtoMsg(message: _24.WasmMessageRoutedProtoMsg): _24.WasmMessageRouted;
                toProto(message: _24.WasmMessageRouted): Uint8Array;
                toProtoMsg(message: _24.WasmMessageRouted): _24.WasmMessageRoutedProtoMsg;
            };
        };
    }
    namespace permission {
        namespace exported {
            const v1beta1: {
                roleFromJSON(object: any): _31.Role;
                roleToJSON(object: _31.Role): string;
                Role: typeof _31.Role;
                RoleSDKType: typeof _31.Role;
                RoleAmino: typeof _31.Role;
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _196.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                governanceKey(request?: _34.QueryGovernanceKeyRequest): Promise<_34.QueryGovernanceKeyResponse>;
                params(request?: _34.ParamsRequest): Promise<_34.ParamsResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
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
                    toAmino: (message: _36.RegisterControllerRequest) => _36.RegisterControllerRequestAmino;
                    fromAmino: (object: _36.RegisterControllerRequestAmino) => _36.RegisterControllerRequest;
                };
                "/axelar.permission.v1beta1.DeregisterControllerRequest": {
                    aminoType: string;
                    toAmino: (message: _36.DeregisterControllerRequest) => _36.DeregisterControllerRequestAmino;
                    fromAmino: (object: _36.DeregisterControllerRequestAmino) => _36.DeregisterControllerRequest;
                };
                "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
                    aminoType: string;
                    toAmino: (message: _36.UpdateGovernanceKeyRequest) => _36.UpdateGovernanceKeyRequestAmino;
                    fromAmino: (object: _36.UpdateGovernanceKeyRequestAmino) => _36.UpdateGovernanceKeyRequest;
                };
            };
            GovAccount: {
                typeUrl: string;
                encode(message: _37.GovAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.GovAccount;
                fromPartial(object: Partial<_37.GovAccount>): _37.GovAccount;
                fromAmino(object: _37.GovAccountAmino): _37.GovAccount;
                toAmino(message: _37.GovAccount): _37.GovAccountAmino;
                fromAminoMsg(object: _37.GovAccountAminoMsg): _37.GovAccount;
                fromProtoMsg(message: _37.GovAccountProtoMsg): _37.GovAccount;
                toProto(message: _37.GovAccount): Uint8Array;
                toProtoMsg(message: _37.GovAccount): _37.GovAccountProtoMsg;
            };
            UpdateGovernanceKeyRequest: {
                typeUrl: string;
                encode(message: _36.UpdateGovernanceKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.UpdateGovernanceKeyRequest;
                fromPartial(object: Partial<_36.UpdateGovernanceKeyRequest>): _36.UpdateGovernanceKeyRequest;
                fromAmino(object: _36.UpdateGovernanceKeyRequestAmino): _36.UpdateGovernanceKeyRequest;
                toAmino(message: _36.UpdateGovernanceKeyRequest): _36.UpdateGovernanceKeyRequestAmino;
                fromAminoMsg(object: _36.UpdateGovernanceKeyRequestAminoMsg): _36.UpdateGovernanceKeyRequest;
                fromProtoMsg(message: _36.UpdateGovernanceKeyRequestProtoMsg): _36.UpdateGovernanceKeyRequest;
                toProto(message: _36.UpdateGovernanceKeyRequest): Uint8Array;
                toProtoMsg(message: _36.UpdateGovernanceKeyRequest): _36.UpdateGovernanceKeyRequestProtoMsg;
            };
            UpdateGovernanceKeyResponse: {
                typeUrl: string;
                encode(_: _36.UpdateGovernanceKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.UpdateGovernanceKeyResponse;
                fromPartial(_: Partial<_36.UpdateGovernanceKeyResponse>): _36.UpdateGovernanceKeyResponse;
                fromAmino(_: _36.UpdateGovernanceKeyResponseAmino): _36.UpdateGovernanceKeyResponse;
                toAmino(_: _36.UpdateGovernanceKeyResponse): _36.UpdateGovernanceKeyResponseAmino;
                fromAminoMsg(object: _36.UpdateGovernanceKeyResponseAminoMsg): _36.UpdateGovernanceKeyResponse;
                fromProtoMsg(message: _36.UpdateGovernanceKeyResponseProtoMsg): _36.UpdateGovernanceKeyResponse;
                toProto(message: _36.UpdateGovernanceKeyResponse): Uint8Array;
                toProtoMsg(message: _36.UpdateGovernanceKeyResponse): _36.UpdateGovernanceKeyResponseProtoMsg;
            };
            RegisterControllerRequest: {
                typeUrl: string;
                encode(message: _36.RegisterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.RegisterControllerRequest;
                fromPartial(object: Partial<_36.RegisterControllerRequest>): _36.RegisterControllerRequest;
                fromAmino(object: _36.RegisterControllerRequestAmino): _36.RegisterControllerRequest;
                toAmino(message: _36.RegisterControllerRequest): _36.RegisterControllerRequestAmino;
                fromAminoMsg(object: _36.RegisterControllerRequestAminoMsg): _36.RegisterControllerRequest;
                fromProtoMsg(message: _36.RegisterControllerRequestProtoMsg): _36.RegisterControllerRequest;
                toProto(message: _36.RegisterControllerRequest): Uint8Array;
                toProtoMsg(message: _36.RegisterControllerRequest): _36.RegisterControllerRequestProtoMsg;
            };
            RegisterControllerResponse: {
                typeUrl: string;
                encode(_: _36.RegisterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.RegisterControllerResponse;
                fromPartial(_: Partial<_36.RegisterControllerResponse>): _36.RegisterControllerResponse;
                fromAmino(_: _36.RegisterControllerResponseAmino): _36.RegisterControllerResponse;
                toAmino(_: _36.RegisterControllerResponse): _36.RegisterControllerResponseAmino;
                fromAminoMsg(object: _36.RegisterControllerResponseAminoMsg): _36.RegisterControllerResponse;
                fromProtoMsg(message: _36.RegisterControllerResponseProtoMsg): _36.RegisterControllerResponse;
                toProto(message: _36.RegisterControllerResponse): Uint8Array;
                toProtoMsg(message: _36.RegisterControllerResponse): _36.RegisterControllerResponseProtoMsg;
            };
            DeregisterControllerRequest: {
                typeUrl: string;
                encode(message: _36.DeregisterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.DeregisterControllerRequest;
                fromPartial(object: Partial<_36.DeregisterControllerRequest>): _36.DeregisterControllerRequest;
                fromAmino(object: _36.DeregisterControllerRequestAmino): _36.DeregisterControllerRequest;
                toAmino(message: _36.DeregisterControllerRequest): _36.DeregisterControllerRequestAmino;
                fromAminoMsg(object: _36.DeregisterControllerRequestAminoMsg): _36.DeregisterControllerRequest;
                fromProtoMsg(message: _36.DeregisterControllerRequestProtoMsg): _36.DeregisterControllerRequest;
                toProto(message: _36.DeregisterControllerRequest): Uint8Array;
                toProtoMsg(message: _36.DeregisterControllerRequest): _36.DeregisterControllerRequestProtoMsg;
            };
            DeregisterControllerResponse: {
                typeUrl: string;
                encode(_: _36.DeregisterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.DeregisterControllerResponse;
                fromPartial(_: Partial<_36.DeregisterControllerResponse>): _36.DeregisterControllerResponse;
                fromAmino(_: _36.DeregisterControllerResponseAmino): _36.DeregisterControllerResponse;
                toAmino(_: _36.DeregisterControllerResponse): _36.DeregisterControllerResponseAmino;
                fromAminoMsg(object: _36.DeregisterControllerResponseAminoMsg): _36.DeregisterControllerResponse;
                fromProtoMsg(message: _36.DeregisterControllerResponseProtoMsg): _36.DeregisterControllerResponse;
                toProto(message: _36.DeregisterControllerResponse): Uint8Array;
                toProtoMsg(message: _36.DeregisterControllerResponse): _36.DeregisterControllerResponseProtoMsg;
            };
            QueryGovernanceKeyRequest: {
                typeUrl: string;
                encode(_: _34.QueryGovernanceKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryGovernanceKeyRequest;
                fromPartial(_: Partial<_34.QueryGovernanceKeyRequest>): _34.QueryGovernanceKeyRequest;
                fromAmino(_: _34.QueryGovernanceKeyRequestAmino): _34.QueryGovernanceKeyRequest;
                toAmino(_: _34.QueryGovernanceKeyRequest): _34.QueryGovernanceKeyRequestAmino;
                fromAminoMsg(object: _34.QueryGovernanceKeyRequestAminoMsg): _34.QueryGovernanceKeyRequest;
                fromProtoMsg(message: _34.QueryGovernanceKeyRequestProtoMsg): _34.QueryGovernanceKeyRequest;
                toProto(message: _34.QueryGovernanceKeyRequest): Uint8Array;
                toProtoMsg(message: _34.QueryGovernanceKeyRequest): _34.QueryGovernanceKeyRequestProtoMsg;
            };
            QueryGovernanceKeyResponse: {
                typeUrl: string;
                encode(message: _34.QueryGovernanceKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryGovernanceKeyResponse;
                fromPartial(object: Partial<_34.QueryGovernanceKeyResponse>): _34.QueryGovernanceKeyResponse;
                fromAmino(object: _34.QueryGovernanceKeyResponseAmino): _34.QueryGovernanceKeyResponse;
                toAmino(message: _34.QueryGovernanceKeyResponse): _34.QueryGovernanceKeyResponseAmino;
                fromAminoMsg(object: _34.QueryGovernanceKeyResponseAminoMsg): _34.QueryGovernanceKeyResponse;
                fromProtoMsg(message: _34.QueryGovernanceKeyResponseProtoMsg): _34.QueryGovernanceKeyResponse;
                toProto(message: _34.QueryGovernanceKeyResponse): Uint8Array;
                toProtoMsg(message: _34.QueryGovernanceKeyResponse): _34.QueryGovernanceKeyResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _34.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.ParamsRequest;
                fromPartial(_: Partial<_34.ParamsRequest>): _34.ParamsRequest;
                fromAmino(_: _34.ParamsRequestAmino): _34.ParamsRequest;
                toAmino(_: _34.ParamsRequest): _34.ParamsRequestAmino;
                fromAminoMsg(object: _34.ParamsRequestAminoMsg): _34.ParamsRequest;
                fromProtoMsg(message: _34.ParamsRequestProtoMsg): _34.ParamsRequest;
                toProto(message: _34.ParamsRequest): Uint8Array;
                toProtoMsg(message: _34.ParamsRequest): _34.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _34.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.ParamsResponse;
                fromPartial(object: Partial<_34.ParamsResponse>): _34.ParamsResponse;
                fromAmino(object: _34.ParamsResponseAmino): _34.ParamsResponse;
                toAmino(message: _34.ParamsResponse): _34.ParamsResponseAmino;
                fromAminoMsg(object: _34.ParamsResponseAminoMsg): _34.ParamsResponse;
                fromProtoMsg(message: _34.ParamsResponseProtoMsg): _34.ParamsResponse;
                toProto(message: _34.ParamsResponse): Uint8Array;
                toProtoMsg(message: _34.ParamsResponse): _34.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _33.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.Params;
                fromPartial(_: Partial<_33.Params>): _33.Params;
                fromAmino(_: _33.ParamsAmino): _33.Params;
                toAmino(_: _33.Params): _33.ParamsAmino;
                fromAminoMsg(object: _33.ParamsAminoMsg): _33.Params;
                fromProtoMsg(message: _33.ParamsProtoMsg): _33.Params;
                toProto(message: _33.Params): Uint8Array;
                toProtoMsg(message: _33.Params): _33.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
        };
    }
    namespace reward {
        const v1beta1: {
            Pool: {
                typeUrl: string;
                encode(message: _43.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Pool;
                fromPartial(object: Partial<_43.Pool>): _43.Pool;
                fromAmino(object: _43.PoolAmino): _43.Pool;
                toAmino(message: _43.Pool): _43.PoolAmino;
                fromAminoMsg(object: _43.PoolAminoMsg): _43.Pool;
                fromProtoMsg(message: _43.PoolProtoMsg): _43.Pool;
                toProto(message: _43.Pool): Uint8Array;
                toProtoMsg(message: _43.Pool): _43.PoolProtoMsg;
            };
            Pool_Reward: {
                typeUrl: string;
                encode(message: _43.Pool_Reward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Pool_Reward;
                fromPartial(object: Partial<_43.Pool_Reward>): _43.Pool_Reward;
                fromAmino(object: _43.Pool_RewardAmino): _43.Pool_Reward;
                toAmino(message: _43.Pool_Reward): _43.Pool_RewardAmino;
                fromAminoMsg(object: _43.Pool_RewardAminoMsg): _43.Pool_Reward;
                fromProtoMsg(message: _43.Pool_RewardProtoMsg): _43.Pool_Reward;
                toProto(message: _43.Pool_Reward): Uint8Array;
                toProtoMsg(message: _43.Pool_Reward): _43.Pool_RewardProtoMsg;
            };
            Refund: {
                typeUrl: string;
                encode(message: _43.Refund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Refund;
                fromPartial(object: Partial<_43.Refund>): _43.Refund;
                fromAmino(object: _43.RefundAmino): _43.Refund;
                toAmino(message: _43.Refund): _43.RefundAmino;
                fromAminoMsg(object: _43.RefundAminoMsg): _43.Refund;
                fromProtoMsg(message: _43.RefundProtoMsg): _43.Refund;
                toProto(message: _43.Refund): Uint8Array;
                toProtoMsg(message: _43.Refund): _43.RefundProtoMsg;
            };
            RefundMsgRequest: {
                typeUrl: string;
                encode(message: _42.RefundMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.RefundMsgRequest;
                fromPartial(object: Partial<_42.RefundMsgRequest>): _42.RefundMsgRequest;
                fromAmino(object: _42.RefundMsgRequestAmino): _42.RefundMsgRequest;
                toAmino(message: _42.RefundMsgRequest): _42.RefundMsgRequestAmino;
                fromAminoMsg(object: _42.RefundMsgRequestAminoMsg): _42.RefundMsgRequest;
                fromProtoMsg(message: _42.RefundMsgRequestProtoMsg): _42.RefundMsgRequest;
                toProto(message: _42.RefundMsgRequest): Uint8Array;
                toProtoMsg(message: _42.RefundMsgRequest): _42.RefundMsgRequestProtoMsg;
            };
            RefundMsgResponse: {
                typeUrl: string;
                encode(message: _42.RefundMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.RefundMsgResponse;
                fromPartial(object: Partial<_42.RefundMsgResponse>): _42.RefundMsgResponse;
                fromAmino(object: _42.RefundMsgResponseAmino): _42.RefundMsgResponse;
                toAmino(message: _42.RefundMsgResponse): _42.RefundMsgResponseAmino;
                fromAminoMsg(object: _42.RefundMsgResponseAminoMsg): _42.RefundMsgResponse;
                fromProtoMsg(message: _42.RefundMsgResponseProtoMsg): _42.RefundMsgResponse;
                toProto(message: _42.RefundMsgResponse): Uint8Array;
                toProtoMsg(message: _42.RefundMsgResponse): _42.RefundMsgResponseProtoMsg;
            };
            Refundable_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Refundable_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Refundable_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            InflationRateRequest: {
                typeUrl: string;
                encode(message: _40.InflationRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.InflationRateRequest;
                fromPartial(object: Partial<_40.InflationRateRequest>): _40.InflationRateRequest;
                fromAmino(object: _40.InflationRateRequestAmino): _40.InflationRateRequest;
                toAmino(message: _40.InflationRateRequest): _40.InflationRateRequestAmino;
                fromAminoMsg(object: _40.InflationRateRequestAminoMsg): _40.InflationRateRequest;
                fromProtoMsg(message: _40.InflationRateRequestProtoMsg): _40.InflationRateRequest;
                toProto(message: _40.InflationRateRequest): Uint8Array;
                toProtoMsg(message: _40.InflationRateRequest): _40.InflationRateRequestProtoMsg;
            };
            InflationRateResponse: {
                typeUrl: string;
                encode(message: _40.InflationRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.InflationRateResponse;
                fromPartial(object: Partial<_40.InflationRateResponse>): _40.InflationRateResponse;
                fromAmino(object: _40.InflationRateResponseAmino): _40.InflationRateResponse;
                toAmino(message: _40.InflationRateResponse): _40.InflationRateResponseAmino;
                fromAminoMsg(object: _40.InflationRateResponseAminoMsg): _40.InflationRateResponse;
                fromProtoMsg(message: _40.InflationRateResponseProtoMsg): _40.InflationRateResponse;
                toProto(message: _40.InflationRateResponse): Uint8Array;
                toProtoMsg(message: _40.InflationRateResponse): _40.InflationRateResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _40.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.ParamsRequest;
                fromPartial(_: Partial<_40.ParamsRequest>): _40.ParamsRequest;
                fromAmino(_: _40.ParamsRequestAmino): _40.ParamsRequest;
                toAmino(_: _40.ParamsRequest): _40.ParamsRequestAmino;
                fromAminoMsg(object: _40.ParamsRequestAminoMsg): _40.ParamsRequest;
                fromProtoMsg(message: _40.ParamsRequestProtoMsg): _40.ParamsRequest;
                toProto(message: _40.ParamsRequest): Uint8Array;
                toProtoMsg(message: _40.ParamsRequest): _40.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _40.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.ParamsResponse;
                fromPartial(object: Partial<_40.ParamsResponse>): _40.ParamsResponse;
                fromAmino(object: _40.ParamsResponseAmino): _40.ParamsResponse;
                toAmino(message: _40.ParamsResponse): _40.ParamsResponseAmino;
                fromAminoMsg(object: _40.ParamsResponseAminoMsg): _40.ParamsResponse;
                fromProtoMsg(message: _40.ParamsResponseProtoMsg): _40.ParamsResponse;
                toProto(message: _40.ParamsResponse): Uint8Array;
                toProtoMsg(message: _40.ParamsResponse): _40.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _39.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _38.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
                fromAmino(object: _38.GenesisStateAmino): _38.GenesisState;
                toAmino(message: _38.GenesisState): _38.GenesisStateAmino;
                fromAminoMsg(object: _38.GenesisStateAminoMsg): _38.GenesisState;
                fromProtoMsg(message: _38.GenesisStateProtoMsg): _38.GenesisState;
                toProto(message: _38.GenesisState): Uint8Array;
                toProtoMsg(message: _38.GenesisState): _38.GenesisStateProtoMsg;
            };
        };
    }
    namespace snapshot {
        namespace exported {
            const v1beta1: {
                Participant: {
                    typeUrl: string;
                    encode(message: _44.Participant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Participant;
                    fromPartial(object: Partial<_44.Participant>): _44.Participant;
                    fromAmino(object: _44.ParticipantAmino): _44.Participant;
                    toAmino(message: _44.Participant): _44.ParticipantAmino;
                    fromAminoMsg(object: _44.ParticipantAminoMsg): _44.Participant;
                    fromProtoMsg(message: _44.ParticipantProtoMsg): _44.Participant;
                    toProto(message: _44.Participant): Uint8Array;
                    toProtoMsg(message: _44.Participant): _44.ParticipantProtoMsg;
                };
                Snapshot_ParticipantsEntry: {
                    encode(message: _44.Snapshot_ParticipantsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Snapshot_ParticipantsEntry;
                    fromPartial(object: Partial<_44.Snapshot_ParticipantsEntry>): _44.Snapshot_ParticipantsEntry;
                    fromAmino(object: _44.Snapshot_ParticipantsEntryAmino): _44.Snapshot_ParticipantsEntry;
                    toAmino(message: _44.Snapshot_ParticipantsEntry): _44.Snapshot_ParticipantsEntryAmino;
                    fromAminoMsg(object: _44.Snapshot_ParticipantsEntryAminoMsg): _44.Snapshot_ParticipantsEntry;
                    fromProtoMsg(message: _44.Snapshot_ParticipantsEntryProtoMsg): _44.Snapshot_ParticipantsEntry;
                    toProto(message: _44.Snapshot_ParticipantsEntry): Uint8Array;
                };
                Snapshot: {
                    typeUrl: string;
                    encode(message: _44.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _44.Snapshot;
                    fromPartial(object: Partial<_44.Snapshot>): _44.Snapshot;
                    fromAmino(object: _44.SnapshotAmino): _44.Snapshot;
                    toAmino(message: _44.Snapshot): _44.SnapshotAmino;
                    fromAminoMsg(object: _44.SnapshotAminoMsg): _44.Snapshot;
                    fromProtoMsg(message: _44.SnapshotProtoMsg): _44.Snapshot;
                    toProto(message: _44.Snapshot): Uint8Array;
                    toProtoMsg(message: _44.Snapshot): _44.SnapshotProtoMsg;
                };
            };
        }
        const v1beta1: {
            ProxiedValidator: {
                typeUrl: string;
                encode(message: _50.ProxiedValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.ProxiedValidator;
                fromPartial(object: Partial<_50.ProxiedValidator>): _50.ProxiedValidator;
                fromAmino(object: _50.ProxiedValidatorAmino): _50.ProxiedValidator;
                toAmino(message: _50.ProxiedValidator): _50.ProxiedValidatorAmino;
                fromAminoMsg(object: _50.ProxiedValidatorAminoMsg): _50.ProxiedValidator;
                fromProtoMsg(message: _50.ProxiedValidatorProtoMsg): _50.ProxiedValidator;
                toProto(message: _50.ProxiedValidator): Uint8Array;
                toProtoMsg(message: _50.ProxiedValidator): _50.ProxiedValidatorProtoMsg;
            };
            RegisterProxyRequest: {
                typeUrl: string;
                encode(message: _49.RegisterProxyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.RegisterProxyRequest;
                fromPartial(object: Partial<_49.RegisterProxyRequest>): _49.RegisterProxyRequest;
                fromAmino(object: _49.RegisterProxyRequestAmino): _49.RegisterProxyRequest;
                toAmino(message: _49.RegisterProxyRequest): _49.RegisterProxyRequestAmino;
                fromAminoMsg(object: _49.RegisterProxyRequestAminoMsg): _49.RegisterProxyRequest;
                fromProtoMsg(message: _49.RegisterProxyRequestProtoMsg): _49.RegisterProxyRequest;
                toProto(message: _49.RegisterProxyRequest): Uint8Array;
                toProtoMsg(message: _49.RegisterProxyRequest): _49.RegisterProxyRequestProtoMsg;
            };
            RegisterProxyResponse: {
                typeUrl: string;
                encode(_: _49.RegisterProxyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.RegisterProxyResponse;
                fromPartial(_: Partial<_49.RegisterProxyResponse>): _49.RegisterProxyResponse;
                fromAmino(_: _49.RegisterProxyResponseAmino): _49.RegisterProxyResponse;
                toAmino(_: _49.RegisterProxyResponse): _49.RegisterProxyResponseAmino;
                fromAminoMsg(object: _49.RegisterProxyResponseAminoMsg): _49.RegisterProxyResponse;
                fromProtoMsg(message: _49.RegisterProxyResponseProtoMsg): _49.RegisterProxyResponse;
                toProto(message: _49.RegisterProxyResponse): Uint8Array;
                toProtoMsg(message: _49.RegisterProxyResponse): _49.RegisterProxyResponseProtoMsg;
            };
            DeactivateProxyRequest: {
                typeUrl: string;
                encode(message: _49.DeactivateProxyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.DeactivateProxyRequest;
                fromPartial(object: Partial<_49.DeactivateProxyRequest>): _49.DeactivateProxyRequest;
                fromAmino(object: _49.DeactivateProxyRequestAmino): _49.DeactivateProxyRequest;
                toAmino(message: _49.DeactivateProxyRequest): _49.DeactivateProxyRequestAmino;
                fromAminoMsg(object: _49.DeactivateProxyRequestAminoMsg): _49.DeactivateProxyRequest;
                fromProtoMsg(message: _49.DeactivateProxyRequestProtoMsg): _49.DeactivateProxyRequest;
                toProto(message: _49.DeactivateProxyRequest): Uint8Array;
                toProtoMsg(message: _49.DeactivateProxyRequest): _49.DeactivateProxyRequestProtoMsg;
            };
            DeactivateProxyResponse: {
                typeUrl: string;
                encode(_: _49.DeactivateProxyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.DeactivateProxyResponse;
                fromPartial(_: Partial<_49.DeactivateProxyResponse>): _49.DeactivateProxyResponse;
                fromAmino(_: _49.DeactivateProxyResponseAmino): _49.DeactivateProxyResponse;
                toAmino(_: _49.DeactivateProxyResponse): _49.DeactivateProxyResponseAmino;
                fromAminoMsg(object: _49.DeactivateProxyResponseAminoMsg): _49.DeactivateProxyResponse;
                fromProtoMsg(message: _49.DeactivateProxyResponseProtoMsg): _49.DeactivateProxyResponse;
                toProto(message: _49.DeactivateProxyResponse): Uint8Array;
                toProtoMsg(message: _49.DeactivateProxyResponse): _49.DeactivateProxyResponseProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _47.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryValidatorsResponse;
                fromPartial(object: Partial<_47.QueryValidatorsResponse>): _47.QueryValidatorsResponse;
                fromAmino(object: _47.QueryValidatorsResponseAmino): _47.QueryValidatorsResponse;
                toAmino(message: _47.QueryValidatorsResponse): _47.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _47.QueryValidatorsResponseAminoMsg): _47.QueryValidatorsResponse;
                fromProtoMsg(message: _47.QueryValidatorsResponseProtoMsg): _47.QueryValidatorsResponse;
                toProto(message: _47.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryValidatorsResponse): _47.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorsResponse_TssIllegibilityInfo: {
                typeUrl: string;
                encode(message: _47.QueryValidatorsResponse_TssIllegibilityInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryValidatorsResponse_TssIllegibilityInfo;
                fromPartial(object: Partial<_47.QueryValidatorsResponse_TssIllegibilityInfo>): _47.QueryValidatorsResponse_TssIllegibilityInfo;
                fromAmino(object: _47.QueryValidatorsResponse_TssIllegibilityInfoAmino): _47.QueryValidatorsResponse_TssIllegibilityInfo;
                toAmino(message: _47.QueryValidatorsResponse_TssIllegibilityInfo): _47.QueryValidatorsResponse_TssIllegibilityInfoAmino;
                fromAminoMsg(object: _47.QueryValidatorsResponse_TssIllegibilityInfoAminoMsg): _47.QueryValidatorsResponse_TssIllegibilityInfo;
                fromProtoMsg(message: _47.QueryValidatorsResponse_TssIllegibilityInfoProtoMsg): _47.QueryValidatorsResponse_TssIllegibilityInfo;
                toProto(message: _47.QueryValidatorsResponse_TssIllegibilityInfo): Uint8Array;
                toProtoMsg(message: _47.QueryValidatorsResponse_TssIllegibilityInfo): _47.QueryValidatorsResponse_TssIllegibilityInfoProtoMsg;
            };
            QueryValidatorsResponse_Validator: {
                typeUrl: string;
                encode(message: _47.QueryValidatorsResponse_Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryValidatorsResponse_Validator;
                fromPartial(object: Partial<_47.QueryValidatorsResponse_Validator>): _47.QueryValidatorsResponse_Validator;
                fromAmino(object: _47.QueryValidatorsResponse_ValidatorAmino): _47.QueryValidatorsResponse_Validator;
                toAmino(message: _47.QueryValidatorsResponse_Validator): _47.QueryValidatorsResponse_ValidatorAmino;
                fromAminoMsg(object: _47.QueryValidatorsResponse_ValidatorAminoMsg): _47.QueryValidatorsResponse_Validator;
                fromProtoMsg(message: _47.QueryValidatorsResponse_ValidatorProtoMsg): _47.QueryValidatorsResponse_Validator;
                toProto(message: _47.QueryValidatorsResponse_Validator): Uint8Array;
                toProtoMsg(message: _47.QueryValidatorsResponse_Validator): _47.QueryValidatorsResponse_ValidatorProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _47.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.ParamsRequest;
                fromPartial(_: Partial<_47.ParamsRequest>): _47.ParamsRequest;
                fromAmino(_: _47.ParamsRequestAmino): _47.ParamsRequest;
                toAmino(_: _47.ParamsRequest): _47.ParamsRequestAmino;
                fromAminoMsg(object: _47.ParamsRequestAminoMsg): _47.ParamsRequest;
                fromProtoMsg(message: _47.ParamsRequestProtoMsg): _47.ParamsRequest;
                toProto(message: _47.ParamsRequest): Uint8Array;
                toProtoMsg(message: _47.ParamsRequest): _47.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _47.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ParamsResponse;
                fromPartial(object: Partial<_47.ParamsResponse>): _47.ParamsResponse;
                fromAmino(object: _47.ParamsResponseAmino): _47.ParamsResponse;
                toAmino(message: _47.ParamsResponse): _47.ParamsResponseAmino;
                fromAminoMsg(object: _47.ParamsResponseAminoMsg): _47.ParamsResponse;
                fromProtoMsg(message: _47.ParamsResponseProtoMsg): _47.ParamsResponse;
                toProto(message: _47.ParamsResponse): Uint8Array;
                toProtoMsg(message: _47.ParamsResponse): _47.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _46.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
                fromAmino(object: _46.ParamsAmino): _46.Params;
                toAmino(message: _46.Params): _46.ParamsAmino;
                fromAminoMsg(object: _46.ParamsAminoMsg): _46.Params;
                fromProtoMsg(message: _46.ParamsProtoMsg): _46.Params;
                toProto(message: _46.Params): Uint8Array;
                toProtoMsg(message: _46.Params): _46.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _45.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.GenesisState;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
                fromAmino(object: _45.GenesisStateAmino): _45.GenesisState;
                toAmino(message: _45.GenesisState): _45.GenesisStateAmino;
                fromAminoMsg(object: _45.GenesisStateAminoMsg): _45.GenesisState;
                fromProtoMsg(message: _45.GenesisStateProtoMsg): _45.GenesisState;
                toProto(message: _45.GenesisState): Uint8Array;
                toProtoMsg(message: _45.GenesisState): _45.GenesisStateProtoMsg;
            };
        };
    }
    namespace tss {
        namespace exported {
            const v1beta1: {
                keyRoleFromJSON(object: any): _51.KeyRole;
                keyRoleToJSON(object: _51.KeyRole): string;
                keyTypeFromJSON(object: any): _51.KeyType;
                keyTypeToJSON(object: _51.KeyType): string;
                keyShareDistributionPolicyFromJSON(object: any): _51.KeyShareDistributionPolicy;
                keyShareDistributionPolicyToJSON(object: _51.KeyShareDistributionPolicy): string;
                KeyRole: typeof _51.KeyRole;
                KeyRoleSDKType: typeof _51.KeyRole;
                KeyRoleAmino: typeof _51.KeyRole;
                KeyType: typeof _51.KeyType;
                KeyTypeSDKType: typeof _51.KeyType;
                KeyTypeAmino: typeof _51.KeyType;
                KeyShareDistributionPolicy: typeof _51.KeyShareDistributionPolicy;
                KeyShareDistributionPolicySDKType: typeof _51.KeyShareDistributionPolicy;
                KeyShareDistributionPolicyAmino: typeof _51.KeyShareDistributionPolicy;
                KeyRequirement: {
                    typeUrl: string;
                    encode(message: _51.KeyRequirement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.KeyRequirement;
                    fromPartial(object: Partial<_51.KeyRequirement>): _51.KeyRequirement;
                    fromAmino(object: _51.KeyRequirementAmino): _51.KeyRequirement;
                    toAmino(message: _51.KeyRequirement): _51.KeyRequirementAmino;
                    fromAminoMsg(object: _51.KeyRequirementAminoMsg): _51.KeyRequirement;
                    fromProtoMsg(message: _51.KeyRequirementProtoMsg): _51.KeyRequirement;
                    toProto(message: _51.KeyRequirement): Uint8Array;
                    toProtoMsg(message: _51.KeyRequirement): _51.KeyRequirementProtoMsg;
                };
                SigKeyPair: {
                    typeUrl: string;
                    encode(message: _51.SigKeyPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _51.SigKeyPair;
                    fromPartial(object: Partial<_51.SigKeyPair>): _51.SigKeyPair;
                    fromAmino(object: _51.SigKeyPairAmino): _51.SigKeyPair;
                    toAmino(message: _51.SigKeyPair): _51.SigKeyPairAmino;
                    fromAminoMsg(object: _51.SigKeyPairAminoMsg): _51.SigKeyPair;
                    fromProtoMsg(message: _51.SigKeyPairProtoMsg): _51.SigKeyPair;
                    toProto(message: _51.SigKeyPair): Uint8Array;
                    toProtoMsg(message: _51.SigKeyPair): _51.SigKeyPairProtoMsg;
                };
            };
        }
        namespace tofnd {
            const v1beta1: {
                recoverResponse_ResponseFromJSON(object: any): _54.RecoverResponse_Response;
                recoverResponse_ResponseToJSON(object: _54.RecoverResponse_Response): string;
                messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): _54.MessageOut_CriminalList_Criminal_CrimeType;
                messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: _54.MessageOut_CriminalList_Criminal_CrimeType): string;
                RecoverResponse_Response: typeof _54.RecoverResponse_Response;
                RecoverResponse_ResponseSDKType: typeof _54.RecoverResponse_Response;
                RecoverResponse_ResponseAmino: typeof _54.RecoverResponse_Response;
                MessageOut_CriminalList_Criminal_CrimeType: typeof _54.MessageOut_CriminalList_Criminal_CrimeType;
                MessageOut_CriminalList_Criminal_CrimeTypeSDKType: typeof _54.MessageOut_CriminalList_Criminal_CrimeType;
                MessageOut_CriminalList_Criminal_CrimeTypeAmino: typeof _54.MessageOut_CriminalList_Criminal_CrimeType;
                RecoverRequest: {
                    typeUrl: string;
                    encode(message: _54.RecoverRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.RecoverRequest;
                    fromPartial(object: Partial<_54.RecoverRequest>): _54.RecoverRequest;
                    fromAmino(object: _54.RecoverRequestAmino): _54.RecoverRequest;
                    toAmino(message: _54.RecoverRequest): _54.RecoverRequestAmino;
                    fromAminoMsg(object: _54.RecoverRequestAminoMsg): _54.RecoverRequest;
                    fromProtoMsg(message: _54.RecoverRequestProtoMsg): _54.RecoverRequest;
                    toProto(message: _54.RecoverRequest): Uint8Array;
                    toProtoMsg(message: _54.RecoverRequest): _54.RecoverRequestProtoMsg;
                };
                RecoverResponse: {
                    typeUrl: string;
                    encode(message: _54.RecoverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.RecoverResponse;
                    fromPartial(object: Partial<_54.RecoverResponse>): _54.RecoverResponse;
                    fromAmino(object: _54.RecoverResponseAmino): _54.RecoverResponse;
                    toAmino(message: _54.RecoverResponse): _54.RecoverResponseAmino;
                    fromAminoMsg(object: _54.RecoverResponseAminoMsg): _54.RecoverResponse;
                    fromProtoMsg(message: _54.RecoverResponseProtoMsg): _54.RecoverResponse;
                    toProto(message: _54.RecoverResponse): Uint8Array;
                    toProtoMsg(message: _54.RecoverResponse): _54.RecoverResponseProtoMsg;
                };
                KeygenOutput: {
                    typeUrl: string;
                    encode(message: _54.KeygenOutput, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.KeygenOutput;
                    fromPartial(object: Partial<_54.KeygenOutput>): _54.KeygenOutput;
                    fromAmino(object: _54.KeygenOutputAmino): _54.KeygenOutput;
                    toAmino(message: _54.KeygenOutput): _54.KeygenOutputAmino;
                    fromAminoMsg(object: _54.KeygenOutputAminoMsg): _54.KeygenOutput;
                    fromProtoMsg(message: _54.KeygenOutputProtoMsg): _54.KeygenOutput;
                    toProto(message: _54.KeygenOutput): Uint8Array;
                    toProtoMsg(message: _54.KeygenOutput): _54.KeygenOutputProtoMsg;
                };
                MessageIn: {
                    typeUrl: string;
                    encode(message: _54.MessageIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.MessageIn;
                    fromPartial(object: Partial<_54.MessageIn>): _54.MessageIn;
                    fromAmino(object: _54.MessageInAmino): _54.MessageIn;
                    toAmino(message: _54.MessageIn): _54.MessageInAmino;
                    fromAminoMsg(object: _54.MessageInAminoMsg): _54.MessageIn;
                    fromProtoMsg(message: _54.MessageInProtoMsg): _54.MessageIn;
                    toProto(message: _54.MessageIn): Uint8Array;
                    toProtoMsg(message: _54.MessageIn): _54.MessageInProtoMsg;
                };
                MessageOut: {
                    typeUrl: string;
                    encode(message: _54.MessageOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.MessageOut;
                    fromPartial(object: Partial<_54.MessageOut>): _54.MessageOut;
                    fromAmino(object: _54.MessageOutAmino): _54.MessageOut;
                    toAmino(message: _54.MessageOut): _54.MessageOutAmino;
                    fromAminoMsg(object: _54.MessageOutAminoMsg): _54.MessageOut;
                    fromProtoMsg(message: _54.MessageOutProtoMsg): _54.MessageOut;
                    toProto(message: _54.MessageOut): Uint8Array;
                    toProtoMsg(message: _54.MessageOut): _54.MessageOutProtoMsg;
                };
                MessageOut_KeygenResult: {
                    typeUrl: string;
                    encode(message: _54.MessageOut_KeygenResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.MessageOut_KeygenResult;
                    fromPartial(object: Partial<_54.MessageOut_KeygenResult>): _54.MessageOut_KeygenResult;
                    fromAmino(object: _54.MessageOut_KeygenResultAmino): _54.MessageOut_KeygenResult;
                    toAmino(message: _54.MessageOut_KeygenResult): _54.MessageOut_KeygenResultAmino;
                    fromAminoMsg(object: _54.MessageOut_KeygenResultAminoMsg): _54.MessageOut_KeygenResult;
                    fromProtoMsg(message: _54.MessageOut_KeygenResultProtoMsg): _54.MessageOut_KeygenResult;
                    toProto(message: _54.MessageOut_KeygenResult): Uint8Array;
                    toProtoMsg(message: _54.MessageOut_KeygenResult): _54.MessageOut_KeygenResultProtoMsg;
                };
                MessageOut_SignResult: {
                    typeUrl: string;
                    encode(message: _54.MessageOut_SignResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.MessageOut_SignResult;
                    fromPartial(object: Partial<_54.MessageOut_SignResult>): _54.MessageOut_SignResult;
                    fromAmino(object: _54.MessageOut_SignResultAmino): _54.MessageOut_SignResult;
                    toAmino(message: _54.MessageOut_SignResult): _54.MessageOut_SignResultAmino;
                    fromAminoMsg(object: _54.MessageOut_SignResultAminoMsg): _54.MessageOut_SignResult;
                    fromProtoMsg(message: _54.MessageOut_SignResultProtoMsg): _54.MessageOut_SignResult;
                    toProto(message: _54.MessageOut_SignResult): Uint8Array;
                    toProtoMsg(message: _54.MessageOut_SignResult): _54.MessageOut_SignResultProtoMsg;
                };
                MessageOut_CriminalList: {
                    typeUrl: string;
                    encode(message: _54.MessageOut_CriminalList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.MessageOut_CriminalList;
                    fromPartial(object: Partial<_54.MessageOut_CriminalList>): _54.MessageOut_CriminalList;
                    fromAmino(object: _54.MessageOut_CriminalListAmino): _54.MessageOut_CriminalList;
                    toAmino(message: _54.MessageOut_CriminalList): _54.MessageOut_CriminalListAmino;
                    fromAminoMsg(object: _54.MessageOut_CriminalListAminoMsg): _54.MessageOut_CriminalList;
                    fromProtoMsg(message: _54.MessageOut_CriminalListProtoMsg): _54.MessageOut_CriminalList;
                    toProto(message: _54.MessageOut_CriminalList): Uint8Array;
                    toProtoMsg(message: _54.MessageOut_CriminalList): _54.MessageOut_CriminalListProtoMsg;
                };
                MessageOut_CriminalList_Criminal: {
                    typeUrl: string;
                    encode(message: _54.MessageOut_CriminalList_Criminal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.MessageOut_CriminalList_Criminal;
                    fromPartial(object: Partial<_54.MessageOut_CriminalList_Criminal>): _54.MessageOut_CriminalList_Criminal;
                    fromAmino(object: _54.MessageOut_CriminalList_CriminalAmino): _54.MessageOut_CriminalList_Criminal;
                    toAmino(message: _54.MessageOut_CriminalList_Criminal): _54.MessageOut_CriminalList_CriminalAmino;
                    fromAminoMsg(object: _54.MessageOut_CriminalList_CriminalAminoMsg): _54.MessageOut_CriminalList_Criminal;
                    fromProtoMsg(message: _54.MessageOut_CriminalList_CriminalProtoMsg): _54.MessageOut_CriminalList_Criminal;
                    toProto(message: _54.MessageOut_CriminalList_Criminal): Uint8Array;
                    toProtoMsg(message: _54.MessageOut_CriminalList_Criminal): _54.MessageOut_CriminalList_CriminalProtoMsg;
                };
                TrafficIn: {
                    typeUrl: string;
                    encode(message: _54.TrafficIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.TrafficIn;
                    fromPartial(object: Partial<_54.TrafficIn>): _54.TrafficIn;
                    fromAmino(object: _54.TrafficInAmino): _54.TrafficIn;
                    toAmino(message: _54.TrafficIn): _54.TrafficInAmino;
                    fromAminoMsg(object: _54.TrafficInAminoMsg): _54.TrafficIn;
                    fromProtoMsg(message: _54.TrafficInProtoMsg): _54.TrafficIn;
                    toProto(message: _54.TrafficIn): Uint8Array;
                    toProtoMsg(message: _54.TrafficIn): _54.TrafficInProtoMsg;
                };
                TrafficOut: {
                    typeUrl: string;
                    encode(message: _54.TrafficOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.TrafficOut;
                    fromPartial(object: Partial<_54.TrafficOut>): _54.TrafficOut;
                    fromAmino(object: _54.TrafficOutAmino): _54.TrafficOut;
                    toAmino(message: _54.TrafficOut): _54.TrafficOutAmino;
                    fromAminoMsg(object: _54.TrafficOutAminoMsg): _54.TrafficOut;
                    fromProtoMsg(message: _54.TrafficOutProtoMsg): _54.TrafficOut;
                    toProto(message: _54.TrafficOut): Uint8Array;
                    toProtoMsg(message: _54.TrafficOut): _54.TrafficOutProtoMsg;
                };
                KeygenInit: {
                    typeUrl: string;
                    encode(message: _54.KeygenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.KeygenInit;
                    fromPartial(object: Partial<_54.KeygenInit>): _54.KeygenInit;
                    fromAmino(object: _54.KeygenInitAmino): _54.KeygenInit;
                    toAmino(message: _54.KeygenInit): _54.KeygenInitAmino;
                    fromAminoMsg(object: _54.KeygenInitAminoMsg): _54.KeygenInit;
                    fromProtoMsg(message: _54.KeygenInitProtoMsg): _54.KeygenInit;
                    toProto(message: _54.KeygenInit): Uint8Array;
                    toProtoMsg(message: _54.KeygenInit): _54.KeygenInitProtoMsg;
                };
                SignInit: {
                    typeUrl: string;
                    encode(message: _54.SignInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _54.SignInit;
                    fromPartial(object: Partial<_54.SignInit>): _54.SignInit;
                    fromAmino(object: _54.SignInitAmino): _54.SignInit;
                    toAmino(message: _54.SignInit): _54.SignInitAmino;
                    fromAminoMsg(object: _54.SignInitAminoMsg): _54.SignInit;
                    fromProtoMsg(message: _54.SignInitProtoMsg): _54.SignInit;
                    toProto(message: _54.SignInit): Uint8Array;
                    toProtoMsg(message: _54.SignInit): _54.SignInitProtoMsg;
                };
                KeygenRequest: {
                    typeUrl: string;
                    encode(message: _53.KeygenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.KeygenRequest;
                    fromPartial(object: Partial<_53.KeygenRequest>): _53.KeygenRequest;
                    fromAmino(object: _53.KeygenRequestAmino): _53.KeygenRequest;
                    toAmino(message: _53.KeygenRequest): _53.KeygenRequestAmino;
                    fromAminoMsg(object: _53.KeygenRequestAminoMsg): _53.KeygenRequest;
                    fromProtoMsg(message: _53.KeygenRequestProtoMsg): _53.KeygenRequest;
                    toProto(message: _53.KeygenRequest): Uint8Array;
                    toProtoMsg(message: _53.KeygenRequest): _53.KeygenRequestProtoMsg;
                };
                KeygenResponse: {
                    typeUrl: string;
                    encode(message: _53.KeygenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.KeygenResponse;
                    fromPartial(object: Partial<_53.KeygenResponse>): _53.KeygenResponse;
                    fromAmino(object: _53.KeygenResponseAmino): _53.KeygenResponse;
                    toAmino(message: _53.KeygenResponse): _53.KeygenResponseAmino;
                    fromAminoMsg(object: _53.KeygenResponseAminoMsg): _53.KeygenResponse;
                    fromProtoMsg(message: _53.KeygenResponseProtoMsg): _53.KeygenResponse;
                    toProto(message: _53.KeygenResponse): Uint8Array;
                    toProtoMsg(message: _53.KeygenResponse): _53.KeygenResponseProtoMsg;
                };
                SignRequest: {
                    typeUrl: string;
                    encode(message: _53.SignRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.SignRequest;
                    fromPartial(object: Partial<_53.SignRequest>): _53.SignRequest;
                    fromAmino(object: _53.SignRequestAmino): _53.SignRequest;
                    toAmino(message: _53.SignRequest): _53.SignRequestAmino;
                    fromAminoMsg(object: _53.SignRequestAminoMsg): _53.SignRequest;
                    fromProtoMsg(message: _53.SignRequestProtoMsg): _53.SignRequest;
                    toProto(message: _53.SignRequest): Uint8Array;
                    toProtoMsg(message: _53.SignRequest): _53.SignRequestProtoMsg;
                };
                SignResponse: {
                    typeUrl: string;
                    encode(message: _53.SignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.SignResponse;
                    fromPartial(object: Partial<_53.SignResponse>): _53.SignResponse;
                    fromAmino(object: _53.SignResponseAmino): _53.SignResponse;
                    toAmino(message: _53.SignResponse): _53.SignResponseAmino;
                    fromAminoMsg(object: _53.SignResponseAminoMsg): _53.SignResponse;
                    fromProtoMsg(message: _53.SignResponseProtoMsg): _53.SignResponse;
                    toProto(message: _53.SignResponse): Uint8Array;
                    toProtoMsg(message: _53.SignResponse): _53.SignResponseProtoMsg;
                };
                keyPresenceResponse_ResponseFromJSON(object: any): _52.KeyPresenceResponse_Response;
                keyPresenceResponse_ResponseToJSON(object: _52.KeyPresenceResponse_Response): string;
                KeyPresenceResponse_Response: typeof _52.KeyPresenceResponse_Response;
                KeyPresenceResponse_ResponseSDKType: typeof _52.KeyPresenceResponse_Response;
                KeyPresenceResponse_ResponseAmino: typeof _52.KeyPresenceResponse_Response;
                KeyPresenceRequest: {
                    typeUrl: string;
                    encode(message: _52.KeyPresenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.KeyPresenceRequest;
                    fromPartial(object: Partial<_52.KeyPresenceRequest>): _52.KeyPresenceRequest;
                    fromAmino(object: _52.KeyPresenceRequestAmino): _52.KeyPresenceRequest;
                    toAmino(message: _52.KeyPresenceRequest): _52.KeyPresenceRequestAmino;
                    fromAminoMsg(object: _52.KeyPresenceRequestAminoMsg): _52.KeyPresenceRequest;
                    fromProtoMsg(message: _52.KeyPresenceRequestProtoMsg): _52.KeyPresenceRequest;
                    toProto(message: _52.KeyPresenceRequest): Uint8Array;
                    toProtoMsg(message: _52.KeyPresenceRequest): _52.KeyPresenceRequestProtoMsg;
                };
                KeyPresenceResponse: {
                    typeUrl: string;
                    encode(message: _52.KeyPresenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.KeyPresenceResponse;
                    fromPartial(object: Partial<_52.KeyPresenceResponse>): _52.KeyPresenceResponse;
                    fromAmino(object: _52.KeyPresenceResponseAmino): _52.KeyPresenceResponse;
                    toAmino(message: _52.KeyPresenceResponse): _52.KeyPresenceResponseAmino;
                    fromAminoMsg(object: _52.KeyPresenceResponseAminoMsg): _52.KeyPresenceResponse;
                    fromProtoMsg(message: _52.KeyPresenceResponseProtoMsg): _52.KeyPresenceResponse;
                    toProto(message: _52.KeyPresenceResponse): Uint8Array;
                    toProtoMsg(message: _52.KeyPresenceResponse): _52.KeyPresenceResponseProtoMsg;
                };
            };
        }
        const v1beta1: {
            KeygenVoteData: {
                typeUrl: string;
                encode(message: _60.KeygenVoteData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.KeygenVoteData;
                fromPartial(object: Partial<_60.KeygenVoteData>): _60.KeygenVoteData;
                fromAmino(object: _60.KeygenVoteDataAmino): _60.KeygenVoteData;
                toAmino(message: _60.KeygenVoteData): _60.KeygenVoteDataAmino;
                fromAminoMsg(object: _60.KeygenVoteDataAminoMsg): _60.KeygenVoteData;
                fromProtoMsg(message: _60.KeygenVoteDataProtoMsg): _60.KeygenVoteData;
                toProto(message: _60.KeygenVoteData): Uint8Array;
                toProtoMsg(message: _60.KeygenVoteData): _60.KeygenVoteDataProtoMsg;
            };
            KeyInfo: {
                typeUrl: string;
                encode(message: _60.KeyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.KeyInfo;
                fromPartial(object: Partial<_60.KeyInfo>): _60.KeyInfo;
                fromAmino(object: _60.KeyInfoAmino): _60.KeyInfo;
                toAmino(message: _60.KeyInfo): _60.KeyInfoAmino;
                fromAminoMsg(object: _60.KeyInfoAminoMsg): _60.KeyInfo;
                fromProtoMsg(message: _60.KeyInfoProtoMsg): _60.KeyInfo;
                toProto(message: _60.KeyInfo): Uint8Array;
                toProtoMsg(message: _60.KeyInfo): _60.KeyInfoProtoMsg;
            };
            MultisigInfo: {
                typeUrl: string;
                encode(message: _60.MultisigInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MultisigInfo;
                fromPartial(object: Partial<_60.MultisigInfo>): _60.MultisigInfo;
                fromAmino(object: _60.MultisigInfoAmino): _60.MultisigInfo;
                toAmino(message: _60.MultisigInfo): _60.MultisigInfoAmino;
                fromAminoMsg(object: _60.MultisigInfoAminoMsg): _60.MultisigInfo;
                fromProtoMsg(message: _60.MultisigInfoProtoMsg): _60.MultisigInfo;
                toProto(message: _60.MultisigInfo): Uint8Array;
                toProtoMsg(message: _60.MultisigInfo): _60.MultisigInfoProtoMsg;
            };
            MultisigInfo_Info: {
                typeUrl: string;
                encode(message: _60.MultisigInfo_Info, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.MultisigInfo_Info;
                fromPartial(object: Partial<_60.MultisigInfo_Info>): _60.MultisigInfo_Info;
                fromAmino(object: _60.MultisigInfo_InfoAmino): _60.MultisigInfo_Info;
                toAmino(message: _60.MultisigInfo_Info): _60.MultisigInfo_InfoAmino;
                fromAminoMsg(object: _60.MultisigInfo_InfoAminoMsg): _60.MultisigInfo_Info;
                fromProtoMsg(message: _60.MultisigInfo_InfoProtoMsg): _60.MultisigInfo_Info;
                toProto(message: _60.MultisigInfo_Info): Uint8Array;
                toProtoMsg(message: _60.MultisigInfo_Info): _60.MultisigInfo_InfoProtoMsg;
            };
            KeyRecoveryInfo_PrivateEntry: {
                encode(message: _60.KeyRecoveryInfo_PrivateEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.KeyRecoveryInfo_PrivateEntry;
                fromPartial(object: Partial<_60.KeyRecoveryInfo_PrivateEntry>): _60.KeyRecoveryInfo_PrivateEntry;
                fromAmino(object: _60.KeyRecoveryInfo_PrivateEntryAmino): _60.KeyRecoveryInfo_PrivateEntry;
                toAmino(message: _60.KeyRecoveryInfo_PrivateEntry): _60.KeyRecoveryInfo_PrivateEntryAmino;
                fromAminoMsg(object: _60.KeyRecoveryInfo_PrivateEntryAminoMsg): _60.KeyRecoveryInfo_PrivateEntry;
                fromProtoMsg(message: _60.KeyRecoveryInfo_PrivateEntryProtoMsg): _60.KeyRecoveryInfo_PrivateEntry;
                toProto(message: _60.KeyRecoveryInfo_PrivateEntry): Uint8Array;
            };
            KeyRecoveryInfo: {
                typeUrl: string;
                encode(message: _60.KeyRecoveryInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.KeyRecoveryInfo;
                fromPartial(object: Partial<_60.KeyRecoveryInfo>): _60.KeyRecoveryInfo;
                fromAmino(object: _60.KeyRecoveryInfoAmino): _60.KeyRecoveryInfo;
                toAmino(message: _60.KeyRecoveryInfo): _60.KeyRecoveryInfoAmino;
                fromAminoMsg(object: _60.KeyRecoveryInfoAminoMsg): _60.KeyRecoveryInfo;
                fromProtoMsg(message: _60.KeyRecoveryInfoProtoMsg): _60.KeyRecoveryInfo;
                toProto(message: _60.KeyRecoveryInfo): Uint8Array;
                toProtoMsg(message: _60.KeyRecoveryInfo): _60.KeyRecoveryInfoProtoMsg;
            };
            ExternalKeys: {
                typeUrl: string;
                encode(message: _60.ExternalKeys, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ExternalKeys;
                fromPartial(object: Partial<_60.ExternalKeys>): _60.ExternalKeys;
                fromAmino(object: _60.ExternalKeysAmino): _60.ExternalKeys;
                toAmino(message: _60.ExternalKeys): _60.ExternalKeysAmino;
                fromAminoMsg(object: _60.ExternalKeysAminoMsg): _60.ExternalKeys;
                fromProtoMsg(message: _60.ExternalKeysProtoMsg): _60.ExternalKeys;
                toProto(message: _60.ExternalKeys): Uint8Array;
                toProtoMsg(message: _60.ExternalKeys): _60.ExternalKeysProtoMsg;
            };
            ValidatorStatus: {
                typeUrl: string;
                encode(message: _60.ValidatorStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.ValidatorStatus;
                fromPartial(object: Partial<_60.ValidatorStatus>): _60.ValidatorStatus;
                fromAmino(object: _60.ValidatorStatusAmino): _60.ValidatorStatus;
                toAmino(message: _60.ValidatorStatus): _60.ValidatorStatusAmino;
                fromAminoMsg(object: _60.ValidatorStatusAminoMsg): _60.ValidatorStatus;
                fromProtoMsg(message: _60.ValidatorStatusProtoMsg): _60.ValidatorStatus;
                toProto(message: _60.ValidatorStatus): Uint8Array;
                toProtoMsg(message: _60.ValidatorStatus): _60.ValidatorStatusProtoMsg;
            };
            StartKeygenRequest: {
                typeUrl: string;
                encode(message: _59.StartKeygenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.StartKeygenRequest;
                fromPartial(object: Partial<_59.StartKeygenRequest>): _59.StartKeygenRequest;
                fromAmino(object: _59.StartKeygenRequestAmino): _59.StartKeygenRequest;
                toAmino(message: _59.StartKeygenRequest): _59.StartKeygenRequestAmino;
                fromAminoMsg(object: _59.StartKeygenRequestAminoMsg): _59.StartKeygenRequest;
                fromProtoMsg(message: _59.StartKeygenRequestProtoMsg): _59.StartKeygenRequest;
                toProto(message: _59.StartKeygenRequest): Uint8Array;
                toProtoMsg(message: _59.StartKeygenRequest): _59.StartKeygenRequestProtoMsg;
            };
            StartKeygenResponse: {
                typeUrl: string;
                encode(_: _59.StartKeygenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.StartKeygenResponse;
                fromPartial(_: Partial<_59.StartKeygenResponse>): _59.StartKeygenResponse;
                fromAmino(_: _59.StartKeygenResponseAmino): _59.StartKeygenResponse;
                toAmino(_: _59.StartKeygenResponse): _59.StartKeygenResponseAmino;
                fromAminoMsg(object: _59.StartKeygenResponseAminoMsg): _59.StartKeygenResponse;
                fromProtoMsg(message: _59.StartKeygenResponseProtoMsg): _59.StartKeygenResponse;
                toProto(message: _59.StartKeygenResponse): Uint8Array;
                toProtoMsg(message: _59.StartKeygenResponse): _59.StartKeygenResponseProtoMsg;
            };
            RotateKeyRequest: {
                typeUrl: string;
                encode(message: _59.RotateKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.RotateKeyRequest;
                fromPartial(object: Partial<_59.RotateKeyRequest>): _59.RotateKeyRequest;
                fromAmino(object: _59.RotateKeyRequestAmino): _59.RotateKeyRequest;
                toAmino(message: _59.RotateKeyRequest): _59.RotateKeyRequestAmino;
                fromAminoMsg(object: _59.RotateKeyRequestAminoMsg): _59.RotateKeyRequest;
                fromProtoMsg(message: _59.RotateKeyRequestProtoMsg): _59.RotateKeyRequest;
                toProto(message: _59.RotateKeyRequest): Uint8Array;
                toProtoMsg(message: _59.RotateKeyRequest): _59.RotateKeyRequestProtoMsg;
            };
            RotateKeyResponse: {
                typeUrl: string;
                encode(_: _59.RotateKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.RotateKeyResponse;
                fromPartial(_: Partial<_59.RotateKeyResponse>): _59.RotateKeyResponse;
                fromAmino(_: _59.RotateKeyResponseAmino): _59.RotateKeyResponse;
                toAmino(_: _59.RotateKeyResponse): _59.RotateKeyResponseAmino;
                fromAminoMsg(object: _59.RotateKeyResponseAminoMsg): _59.RotateKeyResponse;
                fromProtoMsg(message: _59.RotateKeyResponseProtoMsg): _59.RotateKeyResponse;
                toProto(message: _59.RotateKeyResponse): Uint8Array;
                toProtoMsg(message: _59.RotateKeyResponse): _59.RotateKeyResponseProtoMsg;
            };
            ProcessKeygenTrafficRequest: {
                typeUrl: string;
                encode(message: _59.ProcessKeygenTrafficRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ProcessKeygenTrafficRequest;
                fromPartial(object: Partial<_59.ProcessKeygenTrafficRequest>): _59.ProcessKeygenTrafficRequest;
                fromAmino(object: _59.ProcessKeygenTrafficRequestAmino): _59.ProcessKeygenTrafficRequest;
                toAmino(message: _59.ProcessKeygenTrafficRequest): _59.ProcessKeygenTrafficRequestAmino;
                fromAminoMsg(object: _59.ProcessKeygenTrafficRequestAminoMsg): _59.ProcessKeygenTrafficRequest;
                fromProtoMsg(message: _59.ProcessKeygenTrafficRequestProtoMsg): _59.ProcessKeygenTrafficRequest;
                toProto(message: _59.ProcessKeygenTrafficRequest): Uint8Array;
                toProtoMsg(message: _59.ProcessKeygenTrafficRequest): _59.ProcessKeygenTrafficRequestProtoMsg;
            };
            ProcessKeygenTrafficResponse: {
                typeUrl: string;
                encode(_: _59.ProcessKeygenTrafficResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.ProcessKeygenTrafficResponse;
                fromPartial(_: Partial<_59.ProcessKeygenTrafficResponse>): _59.ProcessKeygenTrafficResponse;
                fromAmino(_: _59.ProcessKeygenTrafficResponseAmino): _59.ProcessKeygenTrafficResponse;
                toAmino(_: _59.ProcessKeygenTrafficResponse): _59.ProcessKeygenTrafficResponseAmino;
                fromAminoMsg(object: _59.ProcessKeygenTrafficResponseAminoMsg): _59.ProcessKeygenTrafficResponse;
                fromProtoMsg(message: _59.ProcessKeygenTrafficResponseProtoMsg): _59.ProcessKeygenTrafficResponse;
                toProto(message: _59.ProcessKeygenTrafficResponse): Uint8Array;
                toProtoMsg(message: _59.ProcessKeygenTrafficResponse): _59.ProcessKeygenTrafficResponseProtoMsg;
            };
            ProcessSignTrafficRequest: {
                typeUrl: string;
                encode(message: _59.ProcessSignTrafficRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ProcessSignTrafficRequest;
                fromPartial(object: Partial<_59.ProcessSignTrafficRequest>): _59.ProcessSignTrafficRequest;
                fromAmino(object: _59.ProcessSignTrafficRequestAmino): _59.ProcessSignTrafficRequest;
                toAmino(message: _59.ProcessSignTrafficRequest): _59.ProcessSignTrafficRequestAmino;
                fromAminoMsg(object: _59.ProcessSignTrafficRequestAminoMsg): _59.ProcessSignTrafficRequest;
                fromProtoMsg(message: _59.ProcessSignTrafficRequestProtoMsg): _59.ProcessSignTrafficRequest;
                toProto(message: _59.ProcessSignTrafficRequest): Uint8Array;
                toProtoMsg(message: _59.ProcessSignTrafficRequest): _59.ProcessSignTrafficRequestProtoMsg;
            };
            ProcessSignTrafficResponse: {
                typeUrl: string;
                encode(_: _59.ProcessSignTrafficResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.ProcessSignTrafficResponse;
                fromPartial(_: Partial<_59.ProcessSignTrafficResponse>): _59.ProcessSignTrafficResponse;
                fromAmino(_: _59.ProcessSignTrafficResponseAmino): _59.ProcessSignTrafficResponse;
                toAmino(_: _59.ProcessSignTrafficResponse): _59.ProcessSignTrafficResponseAmino;
                fromAminoMsg(object: _59.ProcessSignTrafficResponseAminoMsg): _59.ProcessSignTrafficResponse;
                fromProtoMsg(message: _59.ProcessSignTrafficResponseProtoMsg): _59.ProcessSignTrafficResponse;
                toProto(message: _59.ProcessSignTrafficResponse): Uint8Array;
                toProtoMsg(message: _59.ProcessSignTrafficResponse): _59.ProcessSignTrafficResponseProtoMsg;
            };
            VotePubKeyRequest: {
                typeUrl: string;
                encode(message: _59.VotePubKeyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.VotePubKeyRequest;
                fromPartial(object: Partial<_59.VotePubKeyRequest>): _59.VotePubKeyRequest;
                fromAmino(object: _59.VotePubKeyRequestAmino): _59.VotePubKeyRequest;
                toAmino(message: _59.VotePubKeyRequest): _59.VotePubKeyRequestAmino;
                fromAminoMsg(object: _59.VotePubKeyRequestAminoMsg): _59.VotePubKeyRequest;
                fromProtoMsg(message: _59.VotePubKeyRequestProtoMsg): _59.VotePubKeyRequest;
                toProto(message: _59.VotePubKeyRequest): Uint8Array;
                toProtoMsg(message: _59.VotePubKeyRequest): _59.VotePubKeyRequestProtoMsg;
            };
            VotePubKeyResponse: {
                typeUrl: string;
                encode(message: _59.VotePubKeyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.VotePubKeyResponse;
                fromPartial(object: Partial<_59.VotePubKeyResponse>): _59.VotePubKeyResponse;
                fromAmino(object: _59.VotePubKeyResponseAmino): _59.VotePubKeyResponse;
                toAmino(message: _59.VotePubKeyResponse): _59.VotePubKeyResponseAmino;
                fromAminoMsg(object: _59.VotePubKeyResponseAminoMsg): _59.VotePubKeyResponse;
                fromProtoMsg(message: _59.VotePubKeyResponseProtoMsg): _59.VotePubKeyResponse;
                toProto(message: _59.VotePubKeyResponse): Uint8Array;
                toProtoMsg(message: _59.VotePubKeyResponse): _59.VotePubKeyResponseProtoMsg;
            };
            VoteSigRequest: {
                typeUrl: string;
                encode(message: _59.VoteSigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.VoteSigRequest;
                fromPartial(object: Partial<_59.VoteSigRequest>): _59.VoteSigRequest;
                fromAmino(object: _59.VoteSigRequestAmino): _59.VoteSigRequest;
                toAmino(message: _59.VoteSigRequest): _59.VoteSigRequestAmino;
                fromAminoMsg(object: _59.VoteSigRequestAminoMsg): _59.VoteSigRequest;
                fromProtoMsg(message: _59.VoteSigRequestProtoMsg): _59.VoteSigRequest;
                toProto(message: _59.VoteSigRequest): Uint8Array;
                toProtoMsg(message: _59.VoteSigRequest): _59.VoteSigRequestProtoMsg;
            };
            VoteSigResponse: {
                typeUrl: string;
                encode(message: _59.VoteSigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.VoteSigResponse;
                fromPartial(object: Partial<_59.VoteSigResponse>): _59.VoteSigResponse;
                fromAmino(object: _59.VoteSigResponseAmino): _59.VoteSigResponse;
                toAmino(message: _59.VoteSigResponse): _59.VoteSigResponseAmino;
                fromAminoMsg(object: _59.VoteSigResponseAminoMsg): _59.VoteSigResponse;
                fromProtoMsg(message: _59.VoteSigResponseProtoMsg): _59.VoteSigResponse;
                toProto(message: _59.VoteSigResponse): Uint8Array;
                toProtoMsg(message: _59.VoteSigResponse): _59.VoteSigResponseProtoMsg;
            };
            HeartBeatRequest: {
                typeUrl: string;
                encode(message: _59.HeartBeatRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.HeartBeatRequest;
                fromPartial(object: Partial<_59.HeartBeatRequest>): _59.HeartBeatRequest;
                fromAmino(object: _59.HeartBeatRequestAmino): _59.HeartBeatRequest;
                toAmino(message: _59.HeartBeatRequest): _59.HeartBeatRequestAmino;
                fromAminoMsg(object: _59.HeartBeatRequestAminoMsg): _59.HeartBeatRequest;
                fromProtoMsg(message: _59.HeartBeatRequestProtoMsg): _59.HeartBeatRequest;
                toProto(message: _59.HeartBeatRequest): Uint8Array;
                toProtoMsg(message: _59.HeartBeatRequest): _59.HeartBeatRequestProtoMsg;
            };
            HeartBeatResponse: {
                typeUrl: string;
                encode(_: _59.HeartBeatResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.HeartBeatResponse;
                fromPartial(_: Partial<_59.HeartBeatResponse>): _59.HeartBeatResponse;
                fromAmino(_: _59.HeartBeatResponseAmino): _59.HeartBeatResponse;
                toAmino(_: _59.HeartBeatResponse): _59.HeartBeatResponseAmino;
                fromAminoMsg(object: _59.HeartBeatResponseAminoMsg): _59.HeartBeatResponse;
                fromProtoMsg(message: _59.HeartBeatResponseProtoMsg): _59.HeartBeatResponse;
                toProto(message: _59.HeartBeatResponse): Uint8Array;
                toProtoMsg(message: _59.HeartBeatResponse): _59.HeartBeatResponseProtoMsg;
            };
            RegisterExternalKeysRequest: {
                typeUrl: string;
                encode(message: _59.RegisterExternalKeysRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.RegisterExternalKeysRequest;
                fromPartial(object: Partial<_59.RegisterExternalKeysRequest>): _59.RegisterExternalKeysRequest;
                fromAmino(object: _59.RegisterExternalKeysRequestAmino): _59.RegisterExternalKeysRequest;
                toAmino(message: _59.RegisterExternalKeysRequest): _59.RegisterExternalKeysRequestAmino;
                fromAminoMsg(object: _59.RegisterExternalKeysRequestAminoMsg): _59.RegisterExternalKeysRequest;
                fromProtoMsg(message: _59.RegisterExternalKeysRequestProtoMsg): _59.RegisterExternalKeysRequest;
                toProto(message: _59.RegisterExternalKeysRequest): Uint8Array;
                toProtoMsg(message: _59.RegisterExternalKeysRequest): _59.RegisterExternalKeysRequestProtoMsg;
            };
            RegisterExternalKeysRequest_ExternalKey: {
                typeUrl: string;
                encode(message: _59.RegisterExternalKeysRequest_ExternalKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.RegisterExternalKeysRequest_ExternalKey;
                fromPartial(object: Partial<_59.RegisterExternalKeysRequest_ExternalKey>): _59.RegisterExternalKeysRequest_ExternalKey;
                fromAmino(object: _59.RegisterExternalKeysRequest_ExternalKeyAmino): _59.RegisterExternalKeysRequest_ExternalKey;
                toAmino(message: _59.RegisterExternalKeysRequest_ExternalKey): _59.RegisterExternalKeysRequest_ExternalKeyAmino;
                fromAminoMsg(object: _59.RegisterExternalKeysRequest_ExternalKeyAminoMsg): _59.RegisterExternalKeysRequest_ExternalKey;
                fromProtoMsg(message: _59.RegisterExternalKeysRequest_ExternalKeyProtoMsg): _59.RegisterExternalKeysRequest_ExternalKey;
                toProto(message: _59.RegisterExternalKeysRequest_ExternalKey): Uint8Array;
                toProtoMsg(message: _59.RegisterExternalKeysRequest_ExternalKey): _59.RegisterExternalKeysRequest_ExternalKeyProtoMsg;
            };
            RegisterExternalKeysResponse: {
                typeUrl: string;
                encode(_: _59.RegisterExternalKeysResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.RegisterExternalKeysResponse;
                fromPartial(_: Partial<_59.RegisterExternalKeysResponse>): _59.RegisterExternalKeysResponse;
                fromAmino(_: _59.RegisterExternalKeysResponseAmino): _59.RegisterExternalKeysResponse;
                toAmino(_: _59.RegisterExternalKeysResponse): _59.RegisterExternalKeysResponseAmino;
                fromAminoMsg(object: _59.RegisterExternalKeysResponseAminoMsg): _59.RegisterExternalKeysResponse;
                fromProtoMsg(message: _59.RegisterExternalKeysResponseProtoMsg): _59.RegisterExternalKeysResponse;
                toProto(message: _59.RegisterExternalKeysResponse): Uint8Array;
                toProtoMsg(message: _59.RegisterExternalKeysResponse): _59.RegisterExternalKeysResponseProtoMsg;
            };
            SubmitMultisigPubKeysRequest: {
                typeUrl: string;
                encode(message: _59.SubmitMultisigPubKeysRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.SubmitMultisigPubKeysRequest;
                fromPartial(object: Partial<_59.SubmitMultisigPubKeysRequest>): _59.SubmitMultisigPubKeysRequest;
                fromAmino(object: _59.SubmitMultisigPubKeysRequestAmino): _59.SubmitMultisigPubKeysRequest;
                toAmino(message: _59.SubmitMultisigPubKeysRequest): _59.SubmitMultisigPubKeysRequestAmino;
                fromAminoMsg(object: _59.SubmitMultisigPubKeysRequestAminoMsg): _59.SubmitMultisigPubKeysRequest;
                fromProtoMsg(message: _59.SubmitMultisigPubKeysRequestProtoMsg): _59.SubmitMultisigPubKeysRequest;
                toProto(message: _59.SubmitMultisigPubKeysRequest): Uint8Array;
                toProtoMsg(message: _59.SubmitMultisigPubKeysRequest): _59.SubmitMultisigPubKeysRequestProtoMsg;
            };
            SubmitMultisigPubKeysResponse: {
                typeUrl: string;
                encode(_: _59.SubmitMultisigPubKeysResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.SubmitMultisigPubKeysResponse;
                fromPartial(_: Partial<_59.SubmitMultisigPubKeysResponse>): _59.SubmitMultisigPubKeysResponse;
                fromAmino(_: _59.SubmitMultisigPubKeysResponseAmino): _59.SubmitMultisigPubKeysResponse;
                toAmino(_: _59.SubmitMultisigPubKeysResponse): _59.SubmitMultisigPubKeysResponseAmino;
                fromAminoMsg(object: _59.SubmitMultisigPubKeysResponseAminoMsg): _59.SubmitMultisigPubKeysResponse;
                fromProtoMsg(message: _59.SubmitMultisigPubKeysResponseProtoMsg): _59.SubmitMultisigPubKeysResponse;
                toProto(message: _59.SubmitMultisigPubKeysResponse): Uint8Array;
                toProtoMsg(message: _59.SubmitMultisigPubKeysResponse): _59.SubmitMultisigPubKeysResponseProtoMsg;
            };
            SubmitMultisigSignaturesRequest: {
                typeUrl: string;
                encode(message: _59.SubmitMultisigSignaturesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.SubmitMultisigSignaturesRequest;
                fromPartial(object: Partial<_59.SubmitMultisigSignaturesRequest>): _59.SubmitMultisigSignaturesRequest;
                fromAmino(object: _59.SubmitMultisigSignaturesRequestAmino): _59.SubmitMultisigSignaturesRequest;
                toAmino(message: _59.SubmitMultisigSignaturesRequest): _59.SubmitMultisigSignaturesRequestAmino;
                fromAminoMsg(object: _59.SubmitMultisigSignaturesRequestAminoMsg): _59.SubmitMultisigSignaturesRequest;
                fromProtoMsg(message: _59.SubmitMultisigSignaturesRequestProtoMsg): _59.SubmitMultisigSignaturesRequest;
                toProto(message: _59.SubmitMultisigSignaturesRequest): Uint8Array;
                toProtoMsg(message: _59.SubmitMultisigSignaturesRequest): _59.SubmitMultisigSignaturesRequestProtoMsg;
            };
            SubmitMultisigSignaturesResponse: {
                typeUrl: string;
                encode(_: _59.SubmitMultisigSignaturesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.SubmitMultisigSignaturesResponse;
                fromPartial(_: Partial<_59.SubmitMultisigSignaturesResponse>): _59.SubmitMultisigSignaturesResponse;
                fromAmino(_: _59.SubmitMultisigSignaturesResponseAmino): _59.SubmitMultisigSignaturesResponse;
                toAmino(_: _59.SubmitMultisigSignaturesResponse): _59.SubmitMultisigSignaturesResponseAmino;
                fromAminoMsg(object: _59.SubmitMultisigSignaturesResponseAminoMsg): _59.SubmitMultisigSignaturesResponse;
                fromProtoMsg(message: _59.SubmitMultisigSignaturesResponseProtoMsg): _59.SubmitMultisigSignaturesResponse;
                toProto(message: _59.SubmitMultisigSignaturesResponse): Uint8Array;
                toProtoMsg(message: _59.SubmitMultisigSignaturesResponse): _59.SubmitMultisigSignaturesResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _57.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.ParamsRequest;
                fromPartial(_: Partial<_57.ParamsRequest>): _57.ParamsRequest;
                fromAmino(_: _57.ParamsRequestAmino): _57.ParamsRequest;
                toAmino(_: _57.ParamsRequest): _57.ParamsRequestAmino;
                fromAminoMsg(object: _57.ParamsRequestAminoMsg): _57.ParamsRequest;
                fromProtoMsg(message: _57.ParamsRequestProtoMsg): _57.ParamsRequest;
                toProto(message: _57.ParamsRequest): Uint8Array;
                toProtoMsg(message: _57.ParamsRequest): _57.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _57.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.ParamsResponse;
                fromPartial(object: Partial<_57.ParamsResponse>): _57.ParamsResponse;
                fromAmino(object: _57.ParamsResponseAmino): _57.ParamsResponse;
                toAmino(message: _57.ParamsResponse): _57.ParamsResponseAmino;
                fromAminoMsg(object: _57.ParamsResponseAminoMsg): _57.ParamsResponse;
                fromProtoMsg(message: _57.ParamsResponseProtoMsg): _57.ParamsResponse;
                toProto(message: _57.ParamsResponse): Uint8Array;
                toProtoMsg(message: _57.ParamsResponse): _57.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _56.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Params;
                fromPartial(object: Partial<_56.Params>): _56.Params;
                fromAmino(object: _56.ParamsAmino): _56.Params;
                toAmino(message: _56.Params): _56.ParamsAmino;
                fromAminoMsg(object: _56.ParamsAminoMsg): _56.Params;
                fromProtoMsg(message: _56.ParamsProtoMsg): _56.Params;
                toProto(message: _56.Params): Uint8Array;
                toProtoMsg(message: _56.Params): _56.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _55.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
                fromAmino(object: _55.GenesisStateAmino): _55.GenesisState;
                toAmino(message: _55.GenesisState): _55.GenesisStateAmino;
                fromAminoMsg(object: _55.GenesisStateAminoMsg): _55.GenesisState;
                fromProtoMsg(message: _55.GenesisStateProtoMsg): _55.GenesisState;
                toProto(message: _55.GenesisState): Uint8Array;
                toProtoMsg(message: _55.GenesisState): _55.GenesisStateProtoMsg;
            };
        };
    }
    namespace utils {
        const v1beta1: {
            Threshold: {
                typeUrl: string;
                encode(message: _63.Threshold, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Threshold;
                fromPartial(object: Partial<_63.Threshold>): _63.Threshold;
                fromAmino(object: _63.ThresholdAmino): _63.Threshold;
                toAmino(message: _63.Threshold): _63.ThresholdAmino;
                fromAminoMsg(object: _63.ThresholdAminoMsg): _63.Threshold;
                fromProtoMsg(message: _63.ThresholdProtoMsg): _63.Threshold;
                toProto(message: _63.Threshold): Uint8Array;
                toProtoMsg(message: _63.Threshold): _63.ThresholdProtoMsg;
            };
            QueueState_ItemsEntry: {
                encode(message: _62.QueueState_ItemsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueueState_ItemsEntry;
                fromPartial(object: Partial<_62.QueueState_ItemsEntry>): _62.QueueState_ItemsEntry;
                fromAmino(object: _62.QueueState_ItemsEntryAmino): _62.QueueState_ItemsEntry;
                toAmino(message: _62.QueueState_ItemsEntry): _62.QueueState_ItemsEntryAmino;
                fromAminoMsg(object: _62.QueueState_ItemsEntryAminoMsg): _62.QueueState_ItemsEntry;
                fromProtoMsg(message: _62.QueueState_ItemsEntryProtoMsg): _62.QueueState_ItemsEntry;
                toProto(message: _62.QueueState_ItemsEntry): Uint8Array;
            };
            QueueState: {
                typeUrl: string;
                encode(message: _62.QueueState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueueState;
                fromPartial(object: Partial<_62.QueueState>): _62.QueueState;
                fromAmino(object: _62.QueueStateAmino): _62.QueueState;
                toAmino(message: _62.QueueState): _62.QueueStateAmino;
                fromAminoMsg(object: _62.QueueStateAminoMsg): _62.QueueState;
                fromProtoMsg(message: _62.QueueStateProtoMsg): _62.QueueState;
                toProto(message: _62.QueueState): Uint8Array;
                toProtoMsg(message: _62.QueueState): _62.QueueStateProtoMsg;
            };
            QueueState_Item: {
                typeUrl: string;
                encode(message: _62.QueueState_Item, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueueState_Item;
                fromPartial(object: Partial<_62.QueueState_Item>): _62.QueueState_Item;
                fromAmino(object: _62.QueueState_ItemAmino): _62.QueueState_Item;
                toAmino(message: _62.QueueState_Item): _62.QueueState_ItemAmino;
                fromAminoMsg(object: _62.QueueState_ItemAminoMsg): _62.QueueState_Item;
                fromProtoMsg(message: _62.QueueState_ItemProtoMsg): _62.QueueState_Item;
                toProto(message: _62.QueueState_Item): Uint8Array;
                toProtoMsg(message: _62.QueueState_Item): _62.QueueState_ItemProtoMsg;
            };
            Bitmap: {
                typeUrl: string;
                encode(message: _61.Bitmap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Bitmap;
                fromPartial(object: Partial<_61.Bitmap>): _61.Bitmap;
                fromAmino(object: _61.BitmapAmino): _61.Bitmap;
                toAmino(message: _61.Bitmap): _61.BitmapAmino;
                fromAminoMsg(object: _61.BitmapAminoMsg): _61.Bitmap;
                fromProtoMsg(message: _61.BitmapProtoMsg): _61.Bitmap;
                toProto(message: _61.Bitmap): Uint8Array;
                toProtoMsg(message: _61.Bitmap): _61.BitmapProtoMsg;
            };
            CircularBuffer: {
                typeUrl: string;
                encode(message: _61.CircularBuffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.CircularBuffer;
                fromPartial(object: Partial<_61.CircularBuffer>): _61.CircularBuffer;
                fromAmino(object: _61.CircularBufferAmino): _61.CircularBuffer;
                toAmino(message: _61.CircularBuffer): _61.CircularBufferAmino;
                fromAminoMsg(object: _61.CircularBufferAminoMsg): _61.CircularBuffer;
                fromProtoMsg(message: _61.CircularBufferProtoMsg): _61.CircularBuffer;
                toProto(message: _61.CircularBuffer): Uint8Array;
                toProtoMsg(message: _61.CircularBuffer): _61.CircularBufferProtoMsg;
            };
        };
    }
    namespace vote {
        namespace exported {
            const v1beta1: {
                pollStateFromJSON(object: any): _64.PollState;
                pollStateToJSON(object: _64.PollState): string;
                PollState: typeof _64.PollState;
                PollStateSDKType: typeof _64.PollState;
                PollStateAmino: typeof _64.PollState;
                PollMetadata: {
                    typeUrl: string;
                    encode(message: _64.PollMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.PollMetadata;
                    fromPartial(object: Partial<_64.PollMetadata>): _64.PollMetadata;
                    fromAmino(object: _64.PollMetadataAmino): _64.PollMetadata;
                    toAmino(message: _64.PollMetadata): _64.PollMetadataAmino;
                    fromAminoMsg(object: _64.PollMetadataAminoMsg): _64.PollMetadata;
                    fromProtoMsg(message: _64.PollMetadataProtoMsg): _64.PollMetadata;
                    toProto(message: _64.PollMetadata): Uint8Array;
                    toProtoMsg(message: _64.PollMetadata): _64.PollMetadataProtoMsg;
                };
                PollKey: {
                    typeUrl: string;
                    encode(message: _64.PollKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.PollKey;
                    fromPartial(object: Partial<_64.PollKey>): _64.PollKey;
                    fromAmino(object: _64.PollKeyAmino): _64.PollKey;
                    toAmino(message: _64.PollKey): _64.PollKeyAmino;
                    fromAminoMsg(object: _64.PollKeyAminoMsg): _64.PollKey;
                    fromProtoMsg(message: _64.PollKeyProtoMsg): _64.PollKey;
                    toProto(message: _64.PollKey): Uint8Array;
                    toProtoMsg(message: _64.PollKey): _64.PollKeyProtoMsg;
                };
                PollParticipants: {
                    typeUrl: string;
                    encode(message: _64.PollParticipants, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.PollParticipants;
                    fromPartial(object: Partial<_64.PollParticipants>): _64.PollParticipants;
                    fromAmino(object: _64.PollParticipantsAmino): _64.PollParticipants;
                    toAmino(message: _64.PollParticipants): _64.PollParticipantsAmino;
                    fromAminoMsg(object: _64.PollParticipantsAminoMsg): _64.PollParticipants;
                    fromProtoMsg(message: _64.PollParticipantsProtoMsg): _64.PollParticipants;
                    toProto(message: _64.PollParticipants): Uint8Array;
                    toProtoMsg(message: _64.PollParticipants): _64.PollParticipantsProtoMsg;
                };
                Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
                Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
                Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            };
        }
        const v1beta1: {
            TalliedVote_IsVoterLateEntry: {
                encode(message: _71.TalliedVote_IsVoterLateEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.TalliedVote_IsVoterLateEntry;
                fromPartial(object: Partial<_71.TalliedVote_IsVoterLateEntry>): _71.TalliedVote_IsVoterLateEntry;
                fromAmino(object: _71.TalliedVote_IsVoterLateEntryAmino): _71.TalliedVote_IsVoterLateEntry;
                toAmino(message: _71.TalliedVote_IsVoterLateEntry): _71.TalliedVote_IsVoterLateEntryAmino;
                fromAminoMsg(object: _71.TalliedVote_IsVoterLateEntryAminoMsg): _71.TalliedVote_IsVoterLateEntry;
                fromProtoMsg(message: _71.TalliedVote_IsVoterLateEntryProtoMsg): _71.TalliedVote_IsVoterLateEntry;
                toProto(message: _71.TalliedVote_IsVoterLateEntry): Uint8Array;
            };
            TalliedVote: {
                typeUrl: string;
                encode(message: _71.TalliedVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.TalliedVote;
                fromPartial(object: Partial<_71.TalliedVote>): _71.TalliedVote;
                fromAmino(object: _71.TalliedVoteAmino): _71.TalliedVote;
                toAmino(message: _71.TalliedVote): _71.TalliedVoteAmino;
                fromAminoMsg(object: _71.TalliedVoteAminoMsg): _71.TalliedVote;
                fromProtoMsg(message: _71.TalliedVoteProtoMsg): _71.TalliedVote;
                toProto(message: _71.TalliedVote): Uint8Array;
                toProtoMsg(message: _71.TalliedVote): _71.TalliedVoteProtoMsg;
            };
            Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Github_com_cosmos_codec_ProtoMarshaler_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            VoteRequest: {
                typeUrl: string;
                encode(message: _70.VoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.VoteRequest;
                fromPartial(object: Partial<_70.VoteRequest>): _70.VoteRequest;
                fromAmino(object: _70.VoteRequestAmino): _70.VoteRequest;
                toAmino(message: _70.VoteRequest): _70.VoteRequestAmino;
                fromAminoMsg(object: _70.VoteRequestAminoMsg): _70.VoteRequest;
                fromProtoMsg(message: _70.VoteRequestProtoMsg): _70.VoteRequest;
                toProto(message: _70.VoteRequest): Uint8Array;
                toProtoMsg(message: _70.VoteRequest): _70.VoteRequestProtoMsg;
            };
            VoteResponse: {
                typeUrl: string;
                encode(message: _70.VoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.VoteResponse;
                fromPartial(object: Partial<_70.VoteResponse>): _70.VoteResponse;
                fromAmino(object: _70.VoteResponseAmino): _70.VoteResponse;
                toAmino(message: _70.VoteResponse): _70.VoteResponseAmino;
                fromAminoMsg(object: _70.VoteResponseAminoMsg): _70.VoteResponse;
                fromProtoMsg(message: _70.VoteResponseProtoMsg): _70.VoteResponse;
                toProto(message: _70.VoteResponse): Uint8Array;
                toProtoMsg(message: _70.VoteResponse): _70.VoteResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _68.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.ParamsRequest;
                fromPartial(_: Partial<_68.ParamsRequest>): _68.ParamsRequest;
                fromAmino(_: _68.ParamsRequestAmino): _68.ParamsRequest;
                toAmino(_: _68.ParamsRequest): _68.ParamsRequestAmino;
                fromAminoMsg(object: _68.ParamsRequestAminoMsg): _68.ParamsRequest;
                fromProtoMsg(message: _68.ParamsRequestProtoMsg): _68.ParamsRequest;
                toProto(message: _68.ParamsRequest): Uint8Array;
                toProtoMsg(message: _68.ParamsRequest): _68.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _68.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.ParamsResponse;
                fromPartial(object: Partial<_68.ParamsResponse>): _68.ParamsResponse;
                fromAmino(object: _68.ParamsResponseAmino): _68.ParamsResponse;
                toAmino(message: _68.ParamsResponse): _68.ParamsResponseAmino;
                fromAminoMsg(object: _68.ParamsResponseAminoMsg): _68.ParamsResponse;
                fromProtoMsg(message: _68.ParamsResponseProtoMsg): _68.ParamsResponse;
                toProto(message: _68.ParamsResponse): Uint8Array;
                toProtoMsg(message: _68.ParamsResponse): _68.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _67.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Params;
                fromPartial(object: Partial<_67.Params>): _67.Params;
                fromAmino(object: _67.ParamsAmino): _67.Params;
                toAmino(message: _67.Params): _67.ParamsAmino;
                fromAminoMsg(object: _67.ParamsAminoMsg): _67.Params;
                fromProtoMsg(message: _67.ParamsProtoMsg): _67.Params;
                toProto(message: _67.Params): Uint8Array;
                toProtoMsg(message: _67.Params): _67.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _66.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.GenesisState;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
                fromAmino(object: _66.GenesisStateAmino): _66.GenesisState;
                toAmino(message: _66.GenesisState): _66.GenesisStateAmino;
                fromAminoMsg(object: _66.GenesisStateAminoMsg): _66.GenesisState;
                fromProtoMsg(message: _66.GenesisStateProtoMsg): _66.GenesisState;
                toProto(message: _66.GenesisState): Uint8Array;
                toProtoMsg(message: _66.GenesisState): _66.GenesisStateProtoMsg;
            };
            Voted: {
                typeUrl: string;
                encode(message: _65.Voted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Voted;
                fromPartial(object: Partial<_65.Voted>): _65.Voted;
                fromAmino(object: _65.VotedAmino): _65.Voted;
                toAmino(message: _65.Voted): _65.VotedAmino;
                fromAminoMsg(object: _65.VotedAminoMsg): _65.Voted;
                fromProtoMsg(message: _65.VotedProtoMsg): _65.Voted;
                toProto(message: _65.Voted): Uint8Array;
                toProtoMsg(message: _65.Voted): _65.VotedProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            axelar: {
                permission: {
                    v1beta1: _196.MsgClientImpl;
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
                        governanceKey(request?: _34.QueryGovernanceKeyRequest): Promise<_34.QueryGovernanceKeyResponse>;
                        params(request?: _34.ParamsRequest): Promise<_34.ParamsResponse>;
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
                    v1beta1: _194.LCDQueryClient;
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
